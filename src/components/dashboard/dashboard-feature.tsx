/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2LLxpVrKHWNMWKg68UVKu6YJubS5Fm1aDVAsTzV1aZKMYBfZCkC8WV9yigSm35WFfB45GF3vd9VbWENG6dmgv8LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdUF4i3WD5A3DqLMEBjvbdP3reCvR2GpVYgmssxp3Qdaocm9WBLDJyz31WFZTxrfTvDiHBUFChknX641zqHu3wv",
  "key1": "5PNPmBniNjBZ9kBLUbMvJkKnzZY6ZK6yZJacW2JSi2jhEHCveybeoz6GNSJypZiM8YUM8DzZ9RUEoJzfHb1Ro7kD",
  "key2": "5MfW5QLgsTPe7FkZgussprHyBzr9aubRP1uenfWfY142ZNLm6Y5zpJ6jFkkRgoP21Z9eBUrGDfjVp7wtqtCVhFgr",
  "key3": "2i2ewcnUkbJHe5wgrzq7qssSyhmtfpevHEfRHpPcJ1Fg6KdG1KrVF5fCuZCt4vU9VoA2tqV577qwoBeRfugCzPQw",
  "key4": "sQy9m6GmJLJdDhTn2iNmYNSem9z4yMhUzQ7WmzqUPdnxoQWKsjZwhYJQ4QtznDbE8SMUp384AVKwQs14EgZUH13",
  "key5": "2kx9nioYLfsFUvdZizZxJP5YChkhX7SSjeLSqTa9KgRyozzhbXGv7GmhBxuqgmkHEF5PCMC1nbUHCam7cDSrfk93",
  "key6": "4Uz7j2cN574QQwkkCnpZW9oBVuChvr5pcfEvRHTAnXYSawhvAtx5cVYqubh4hJchtcGVvgCaWvYFpnRWy2C51jt3",
  "key7": "4f24mriTKUjrQ9rtrSiZmaUNTomcjpBuUqQY4tjjaJ3s1AKbhpTTm3dUQEmohe3fEyg8imPWZhpKGb5Nndg7khtX",
  "key8": "33XTBo7u4X5jmTMUSB8NAfJzC8mxfwkLuQ5y4EXgwgqbm1jEdfF8EQg35Csb3UvU1aABYmfg9Vpi1QEjQqU7xuVK",
  "key9": "Ro6a6t8ViY74ajJBn4vodm6d9v2myu3eMNWuQrG529T87LfAAdwCHFe1U5HqBCpf38Zndp4qRATnNFwFNKHqv8C",
  "key10": "4CExr42AWPEF4ffVTmFC6uP331vo3K5Dp3tnbTZPZ1GamYa83WuF4NgqXayWutAt8pautx8bktHkRGhosBHrHY3r",
  "key11": "4GQvYXQxxggdVCM5iFgaakLspcPyUBex6yv1MYtJMAJopjcEGMu5vAWR84cuS34SEx1UZ1LA25ig2PD6F9R62JN5",
  "key12": "qdC7RKHG1RSZ2XS4mAuUcpUgLDrbvZzbE9VVrifSyVqp6aAdJogvMbXaLStXrRLxeqoXj28qxpRjoeYmxn9aFZF",
  "key13": "61xn4fYnpD9B9Urbamk7vRzU5vSAnCgSo5fzqxR8fhavWxSDifQfzmKCXNEaJVDuZ2LVrttQ71gPWfnPL9HKcLMt",
  "key14": "24CpPXw9iqByYZwPiNFA1wxobCPcDDigMRNXwmt8Gy2pyfoEUZQtoN3KcKAYzR4xsMGiq8DHUnk7vFTvkdy3ExhN",
  "key15": "5D3FwkhLd6BzjK1hX6f8zL18Hkcf6Nuth5Y3rmueYHQpoUE25XXnmFq5MCXrTVRUdDs616UNKvyEm8GQkydu7s5z",
  "key16": "4F7idFpegyhtzDJDLgpAfCdJQpRX5r3GEMA27wTgjUfkXB5vyYXFkBDuoH1kUEaTtrXeADaCK7YH9B44DeruTtG8",
  "key17": "5a9h3iZhZ172eFXEFwgC5tc6JMm9j2jqdWrqwSXJg7xYyLesrQy8RyQqCH8UrJRycYHGsPBvdSDXzXgSfQNe5eaS",
  "key18": "29uoLpCHkKWdJMfzy5jTi2gfYqmCzmZh2taDLjHr8agdxogtTdtH6SBH8J5i1PTWzSEFDkjxTjTPqwXnxtR6xJL4",
  "key19": "5wmcw5XdwRkeW2bQa5cPidwkQANKoZhFYubmP6z4jgAzRUhCRcdmxZzvG6bnDNY5qvdVMK9J3YzpKBvhWt9Ymm43",
  "key20": "5ojreGzFDeaYdRMpJppHpBUk8SYoiBXpogaFgDJPuh6SdvSRavSkyDmQA6XT1qr1KPeq9sBsVEUoYv1CM86aN8VF",
  "key21": "4RsCbCEWESn6gGec1zTnfDALX2WCSJc3CpyZfLHdkhZ7dnJT18JfjWJuRMhT9khce8YCsBG3nKvsD86gzYxKdWZN",
  "key22": "xNdykqnEwHD8BB83eHzHeUkZbH6z3KDmgeKmVjuQivonLqK76yJHMqgKSbN4hqqXWBFHdSHC6hzAYme8XhXwDFS",
  "key23": "6DgTpTqTTS8VniBEcGeRvuKeZeQ2E8TVJCkBfjsMgkaPLHtHNU3Ec6LGZUbSUEzxmgCN21FNU62G9qhcAvXARF7",
  "key24": "5JFQ4sApMxoXN6bZfL7fojsLb6fZge4qLD54FecZwETbXUrJqfFGstxwwFdw5DhaSFz2xRqGkRHHVjLAm6px7dUE",
  "key25": "42qUUkBuhGfqWSpYF6u5usWo1z4yXv9Q8rncyEFbd1aR8UED8ubsmBsQCauVvQSMiqqAfyVv9C52AcDUra6MVYa6",
  "key26": "4cAqtiqj8fPs9vDRqydWwrTRnMKr116khboHarmWyp4r8t6EsasMqPtpZZGDQ8pGLFEgowEWvSexc5FCgJciKk8G",
  "key27": "3GY7UUo8x3NnGWoZx65fhrX4bFAVFMdJRtiPL2NrGayJRq7XzeqazWpqyheEZ9M6EK5tAs9s7W95jDGEukZQE74g",
  "key28": "28PiXM8jE6yYfKrGswTurMRw8WMAtdeN95HZLSPeoHbHuZHRvPanbwb26fweqGardyLTiRKvz1jusS6n6Cu1yp1M",
  "key29": "5BtJR4asVsS1EEwT8Pik8fzkt4ERx7GjX6FsR8VDc9QvEu8FZvibeAiMV1F3Kv3CeUr7BqixbJ87LRYwonV9q4zK",
  "key30": "3adCAaZ5hKA98g2F4oZ3s68L3rbTqepw2aNhk3VyVYq657SK8bprePbDH1pZR4HV7965LSuT3WCGDi5oZNv5BjdD",
  "key31": "2jiY23D5bza94G32AWqhnUCb9RfURFmB4GHBbdurJiwbdBkT3eRZx8UmhxDKPu5Rm9dt19hHJsP39sAQuSoBAiPk",
  "key32": "6hpAW5iF4UeJrtEtoHDKQEa3QwuFX4x9gj8XYBw5WjGyjkyW7XHYSNfBfUvtfxjnGaN5PApdqAUYN7WLrK8M7aE",
  "key33": "5wbCxoCo8XLGDeqxXd9i3Rz4t81RSqsEFpeLNiibYuJUFyXEbHyETYsMWHs2nsmxM21yZAZN7EgStiiLyRAUG7eG",
  "key34": "4BHkQZM5XaQMWJE1GXQX5XmPregqC4RgsNC7wNBzQcAR5oNoBt1VzR3HusNggCqKhhUJvLsnvDPjKjgQgd6AFxvh",
  "key35": "D3TbYzCkkitRQghBy3fUevqsufNJsQXnVeHjaf3HYdwAMToSokf9zNgChugfJCCb8uXE4PK9RusoFyrooaAscPt",
  "key36": "3dSehUaqNeBKyVZehn7bzCvWfsZzGdBxdEL8ZhbZXPRoQ1VcZN4FP4M86KZ6H7t3ZfQGgD4BwSNJPRVe8JoxTb4m",
  "key37": "3kigxAAqvKWGKSBX9Y9c82ZgAmVeJFCjRaeqGigqPuCywd7w8vLj6BrXoWWLYdzS6TzfQUFJzXYXeSo2YNKLqAEX",
  "key38": "3rebaZz49ZndywfZzsZRVZBcjtsX28tu8KKBgbGRuL5uRZWauyt6pggnBDM4zASPn7CnfFfF2QWaQjtERLx35DQ8",
  "key39": "5j8Rp487RBMkdaWkVn48qpC48UApeM5wmXYqb9x16RFQGQKKj4HzetcD3emrrFPnW9CUCBaj5JpCj5bUMDnaoE8A",
  "key40": "3Y1uCzjkHEgak6DACxCYS9oukq8a3uw1Wm8cu9tCVB7HGVoNqchGeAcU1voLVjcHT59avitju3aVCj8u9JyMPWjb",
  "key41": "wy7tvJPRQFunuHSM184v2FUt7rGYrSYHUsgmsEKstMULZW36zzCVYPPeGzqqRq5qpbu5L7TLsEdJ1VdsfYmAswr",
  "key42": "12A4p2vqbTR8Zu7Kc8j7UDrNWhhLMDMZ4qyM9gRW6kTzJrz3Wfb7jSwqQXJcSPsKu9cwnPNGt5eYPSw23nSab7EF",
  "key43": "3DZ4cofVeeNEUujbuajkiLNBYdLYTNTmCr1J3cbQ4JzMpQGXu7X2YBgW6hw744L4EEDSZp4DxYRpXHH9ak7UCpKQ",
  "key44": "3BAGa9Pare913eWpTjJqvJPj5S7Zb8hYBAvjxSkKo5V641s6ri6UmefEjYeeoss3k7DzTYok3Y7t8VCkgbkU5BDm",
  "key45": "45KTukwUe6bZwqLijdZbbdTwkBudS6iC718SjTZ7hjTRQXHebJRkinwnb7r9sKMKs9TMqM9esdS1XEoTr3vq13zh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
