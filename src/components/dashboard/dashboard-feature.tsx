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
    "37vo2iBW5fsra4oRqfhqTSfsEmnjy5EszMxNNt74zmkbK6i8u3zk6FGCqjuvG5FMwoHgZVEwHfb5cCUgiBvxehtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37uwtBJqBVhMdohjyUH3LxDNtqgvFif9y1WUb88DjWteXBUAZx6qX8zaEJAfEYcBQ2UoXBviMs6UcV3xVYeoTj8i",
  "key1": "4TnuXEAPr6bqYHXYhWmBdEH1KWuYXedUkvN2pTb8PWwwxKa2iC2cbqKP8SiQ59vDBvkH7CNNX6CWGLiAv5N3wqBM",
  "key2": "2jDFwR14w2QWnaesB9o4Di4qXHy1vkXYAV9uyTouK5iTRH2EDkttWp5Z3sG2Q5w6vqPBMBApbViDFi5PUF8mX36b",
  "key3": "2hSRuZ5b2At5pH4G8545Ya2j3JFpcpFeLvLmSBpNBai7X7aXqbR6GWPXEsbqCxdpSegDNjPDo11i4es5Y3XE7x2o",
  "key4": "4eAXV4frE7u4a5UkgCEfDSTHWjtzsfrXjrr73etawo2oVdbKuoz9GMZa5FPUhhgNVg1eA2PANjdhcALERp2coY7R",
  "key5": "5X44DWKRQTLanmQuYAuUB9K1PpCeSF16qV2XLmuGCKGDgmxhBbsBcMvoSBKfwwVyUKxbhRcJHnfpkfYbJf58o1Jy",
  "key6": "YQ2ah68w4SmfVstDQg9pbdFX7oicDTjXfWmPg4K4dH9xUsh49xDsdjeRLVV4kJfpUMrEaKd5roKoispM52FkPuZ",
  "key7": "3sjcTRSMSvvG5XrqF3qfWi8Jxe6CuXDqBeHk1JyMz3HSjoZ9uTSGwUKhwDxatJHAF1jSmDCBjvrxRiJBYMMb8G3H",
  "key8": "2VA9QNbv7ZsAexaF9wiPB9H4Fbw4yJshuSKLAFrLB2RuoHnVvZfGqTXxnyNgQMRSoiyScZzXUVz2mVs19YU6UdJ7",
  "key9": "4cep6tGAZYJjNFwGuB3TFb2dmSqchXthokm2Re6S6ES2ordp9MpffHWh9HEnvYoW5rD9fGUCWLfzU6mMxrpd23dq",
  "key10": "Yku615xAXCrFezeH3YiSgTeXCwUWssCZeEScn3xzDdTYnxfvAEKAvnNJnQojyYJyjNxE973ufZ8FcvkdNUw3vdm",
  "key11": "ujLjbUEhj7HkW8HZkQe4mjNcYSqCtijs7xFPvoMUmjfqHpVFBL62QbjyBLrWCAvp3MJCPZai3UeEpZmjNhMVZZa",
  "key12": "4BW2WozRfnhuNF2cqvYuBnFRdbJLedEaz9qWjDzNCsxEEyQy8hvxGisUBG6i6Xhz5txtJfvnBxiD28KoCpi6AfgU",
  "key13": "4qiocBdoXZhxpxzqrVQNm6qvew2Y1ieCC4fC3u5M52CE9Tpq8CdMiicVLp8F9zZhD9xWejjU4XBhzu46iQsi7uLy",
  "key14": "4nSujqYoEE3YNo4fk2Dkje1kUBR5puZgoM1EL2eQMCLTsg9N5Vwrb515V3Sf1GrDTUa6DRJbp1P2J6K55sG3ZU5U",
  "key15": "39zKCeMUSZryqCX1VxpjBEy88qG2NKUB67o8HTa8TxGPtUKR6rPgMYG9KRCvWVATusPTVLMy9UwTDRwmzMZQKWtE",
  "key16": "4DV41AqJtkNHCKLzKWNvnHnXJHU1D6FRWdd28EjBk6iqmjFkd18SSK6aFZjvYc4ucxuXaWBymDXhRZnvXCJffeL",
  "key17": "5KG6J3NnKzcTif8UE92NHH47KdqgPbiQXtk7acHETfR2oXbTg3VxPk5PiVaKK3YFN9BqP8PJ4jRiQSJrS6zn3KvW",
  "key18": "Bo5rmyFQJfycrgiuy4LVYk5KUfGHJHtbndiQyRWp4nTcG8mLyWVsgWrnX45L4md51KqWtXCW1BYAoz93Uq3TRSV",
  "key19": "5KTZ64mq77TVCn2q2cEVDYvWZgNZJrNkoh5Ysy3eHHMPVt81SM3eq473XTcPt9hZ1fVhdvhhbAFEonoVgReoAHTi",
  "key20": "3eB7hfoacRVcYKKthZXTAvQJL3knThQ2EfG3YejnsGhDxLrZCK51d9gMNmxruuHBxWpgnjP3Fv5qstTbfGsvoNgM",
  "key21": "23Q4PF2UydUkQwFcpuEuzmc3NkRMn2cSMeG1HCh7DLLTgUAL4A32jRm1cMFNZVtdeAkML44Je4JqpbRAhKnMYivh",
  "key22": "27fhWGZtjiRKzcU9iEGVF37TGjQweE7U1ueyB2q4JbsydFFRVa1TXg5ck1iTt2S2eeEg82HcrNBUJybCdfMAu1rE",
  "key23": "3XTPsEpucEkP5zd9SSuvu4bgDKbLMTcAX3f7x7TvFwK1jpJiNG7Bf8PjkPBxbPKRp5p267yyzsUngpu8Hqh95Bjs",
  "key24": "2aHWwpGSmMb4kiM9rLc3K9sMto3WWaQUjz3WadqUCcoUGLwFa8hcoTYXxVmd1oh8ecjTvM6YizQrGXg8ZiotN2ob",
  "key25": "3aod4pcLugNxURNZE8UuPSAVDmGc9GptASMeyzLN7uny2u18LoM3EUQtPjhz7htQsFSb2BoUEL1kBaSMagMykthc",
  "key26": "3FFo2LPhgSNQMAtEN4x5Yt15g9XnmLyHBeYg9tRoU5mto6bWNZ1Zwtsh1qKiCKmAS69mZAyXjW8CdDm2vQXbT1hg",
  "key27": "5RysxQNPMSkiS2HfbESPZh4SK2UqxTjoz74KMwFhqFwc9JakoAwrJ5HnomHY9GvW9c9sSMdTFXbiag6fr6xn3HzJ",
  "key28": "3ZPv3Dq19SXo42CAKZN4mrvzLzeewBetcQ8mjPufYZQMo6JacKacqby4Zu683RwuSLHc9RKviENf1jcGiGf1rupA",
  "key29": "5L8UZxncHDQctCKyZSrDW5SyXXAAo7GztEvLjoibUwhcd8ijS7sdLEx5vLrRynhCTQbVVBn8YQWozHgHDtDBvAW6",
  "key30": "3VSLKcioMVythQJ2bAumkvHmHv9rHH2sACLgGnzcAdHtCzDw1q4CKcC4Vj6GY9soLC383vZTJTj1joSiVjh5J38D",
  "key31": "ms89cYFjQWYvA5pTx2cPnxhQjYWRDQ4Cunr2XM2GsKCXQQzuciuRntQEBNY5N36aGhBgejuZPtr9iLfYg446u4W",
  "key32": "442APUYPNgPnSB2dz6krTeFfVQKgiLBjJwrcZ5pab5WQWe64w2MrUPDg9fJM3vm2KFFD7fkZJLbWTvoYdH3rvKoP",
  "key33": "4uU4QJ6rLDhP19Z9a9ivuf7a2bpu5HM2we7o24n1BhkUjkAEtS9KDG7Xr5dRFBHSJN7o1xvCyt1Z1mhqwhQgrmsk",
  "key34": "61cpp9kZeDjKEjcDgQ5ho8picyiFjvkX11qouYKFhjXXKiAbnqhXQTNBbup5feQR2U39mJkpbJSKPtDYVUChondS",
  "key35": "5vFQ6paRxsavQnV4zwE282DKGW4PvXkPoPE17dPNjXWnqyeoQz5j9mBJoW2Tram4Cv91XtxoSawNHRkGVwp9vkhF",
  "key36": "2BndxfkNvuJrYnrShpCBTrgE9gMYpNcW4i7itzjRWQgWkuESMbwnGdmap6DL33nGfM1azfRYMyBkqkL3y6rNdzgS",
  "key37": "4fYXkV6EPbyjcyuztEJUKGQHHTESXCRmyBkB2V3iffrcgVmyN6VDZiNJM1fVwaGRbx4hfKTMGUpvMthbXxmMka6N",
  "key38": "53m2i9vQ84JxFzkLo2idKaBrUJfFq45rxzyHqHP1pe7aUc3YbMJfoPVz12Jwzp5Leh1zfzoXQhJ5djeK1gWhkq9n",
  "key39": "3kC3tkJJ3wJS3GsQ4J3BNni7NB4zqU7YKc7uAYPcPJtrB8taMR5iyhCTk5WPNgcq2aT4mfD5Vx5mcrM1N3kUkKuu",
  "key40": "5Cqu6F15URHoA4XyJfDVsyvBVv8tE5CHzEMf7i3txpXaWzwVDhu3oSXEHJzVrEW67GUS7CQwG1mP55Bbmx3tkPmo",
  "key41": "28AcYp9ir42n4izmPLKE21oVKZrFN3WZJttzSs9Dc29eSLWCnMTBaCe62VBfFPX1jfpCA5U9MFEzRsv2Yyv3B8tr",
  "key42": "4CQfmP8b3pZFPG3zeYZmftctDtjkfPyuqbpLFZPNqtoQZJ7QiKdJDE8etgi7zQFcff1yEkbEGnTnNWGapUfTUTW2"
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
