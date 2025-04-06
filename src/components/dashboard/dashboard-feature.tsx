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
    "EGfrZ7zxmyeZ8f3CB5hCnGZNGbJ8VpKsuhQdKLVL82p5FM8RMUXHUrKDAb6n96QL2ZtRvR5UcwQWwD5T6PbpH3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUMNXs1dm2MwGSuhqrrtLNPFP2DsrFXvAiquoSN1W5x3cXZc7XimxkJV3VsrMKNwwXmUbASzgUuok5gZCExgG55",
  "key1": "4KgTAACT9ic2Ljdd23t2YmrSqRf76zpGsAAs9qAanufhYZxRZYnsfskuwmevE8vAKUGUZgFyy7sY41tGstBohoja",
  "key2": "fLsveAtaktHprL897u1h8oDiLTA9p2RwPhgsYd7JTasMKN1RbubAY2DCavtfP7eAkBnGF6pYddq33CVTqUWZZMa",
  "key3": "oC6gB8YYdVLFF31NXLxFDqgp2yv3PhScTmPaX6SBNpeD7opidoqohGTggFKseow5zc3jny6aVggDutWSauG4gN5",
  "key4": "1TmNAdeJMAe5A1qAoSrd3UeATtVJQbMUmUwCmokEwXnYBKnFnKGwwh1Qme5HFawutvrQCR9x9pUR4quthbzJLHH",
  "key5": "4mTgzottB7ecSapm7UqabiBdTMMvNUAmfhJNKxUyajADfpRFK2RjFMhUnXvZqBxYDQVbDGPkW4KHq36Xu1VZrWvb",
  "key6": "4y4sWddKpBc1k5Cd7E92e2i6E5PZcKzYCqudMDzKPTRbtGd31j94j8bF3MFC9U8R7SLEzGsFT6rkMyAU7ty24qPW",
  "key7": "2Uhz753tM3tgFmHjR2pDqsSQFPofbALDZmFHq5d2VF7iQbwi4cHdJ3oczs99Y4YyobJmNvzS5PiyCGKRd84oiKCj",
  "key8": "3Hk3F2HqsY3m17hGWfDNGqYyeTRmok3QKs2c5NDEJDezinWKTsrsEfQ72xwon5cSCYD9T5peZuHUwi45JK38pm7Z",
  "key9": "5jxwM2cUeZTRkyrwQvvSb4M5RH5ybmqmZzw21zoWR6Z8Lm73zXePBHTF7CkNEtYU5fjof4i5SPXDuvHCjkywp8vn",
  "key10": "2UeV7H7emkpsAn6yervFmSTyPR3Qqds8SJ463vgbSUnt6fbojapvrGrZQ2S7dPc4EHhJ56ZNMFx1k8Yt7tZ2AGDN",
  "key11": "THj88AM6unrj6yzsK5QBVTiZLjFEHsbUi7ajrCZughxVFreENRKGg7PnXDSqc9pEvPXkBwRh6VSBJXWCYz29AKD",
  "key12": "5qMHGo8HbJDny9gWfowLLJ24bkYtRjNtz7Y1R1hqhGyp8aSh9H1t7smdCymbwkohCxMVrhbusZd41GRzbbFvgSCT",
  "key13": "3Q4ivyucBPqeHmtFx3v8n6SFbQ9sn3Ngs9TEoUUcrJ46n4nYeoKptvJd6GUwkXGoqQHwtDm3XvSQibaiKJwiAmp2",
  "key14": "3wbFJePjoAubdZjoAhSKJz84o9ckrJd8eAwQKjPGBiNGLZfmSwuGJhJiWeG17J7yHCkd5sArbzVCBn5T9jzWUvzP",
  "key15": "5rhyLHTmNk2VEur57tVQrEqM971WyvKzud58YDua9Ted5dY4HMe41NJtBLRHjU8qLdS8BzRWyrNcfyfNEifPzqcy",
  "key16": "63wFngxBBGXoreq5ik8pDFRfjehNBH54MAGR3Jb93U3umDxVgJ9XvYc9iZJ3PMGUrN1yjuCkS6RQzzfSaYDsV2fc",
  "key17": "5ZSTUdh4zeSNS2Pwg8k6LfPLVYQGb1uxd7dK8znX4Yv7RWBsrNvoXnt6ygbPVoBP63rFAE9CLzzcN4XEr7Kc2c2P",
  "key18": "2JtT84seZxsgKjFLxztncyKS4RWxxQk3gfxrviRDWhh56hNZBNDf6zJokZYkHb4dWsrd6oXisFMaWGiwLQgPiuJz",
  "key19": "36BEWzx3v916XChHzA1Dqz5Zj2Qy7mh7VqPBjWduccXjeLXHTSM3kEa8GShpKAurfhinLB5GLggEFowMP6xkKkqS",
  "key20": "5Xo7dD2NayQvtsQGkL8YQ1GpkJAp9uAUAutSUXPz5fE4HGBLeZQdmfTB8aYStUE1cSVXU1ghsPcdfiGqvkpjPsrY",
  "key21": "5gt1Z8fST3P7psp4VnAJV9Dt2TJ1yUnFFAgEU2B4LrMynZf4BZWHKzWfrYNVyqYLKYCYFJ43KSGZ6WVptdy4fNYr",
  "key22": "27Lx6JvvjYyfGnKyjVcEjeRjzy4RpN3VskqiEVJgMsbJVKPNPoDo6t7TUvrFj1K82nydfET62u61d1A46dM6bNgL",
  "key23": "2LtzkUJeRiUaFyWwRZ3FFGqgYz5NLhpQ1Z4JrjSQUQnNrNpEHNRyp6wcaNyjnNSrF8Tp8dcWxn6wRqewUaFBjkbs",
  "key24": "4m1yfguya4oES1JhtBUXe1b3rQyCB7y3fjy2cHLBQjGGC2Z83JFeJZCTMbumvd4ufjXp18kjmf5q6knNfVQ52JGn",
  "key25": "5fPpk5f8N5qHBUqh5YzztUDthxDdQyPscbGn7ZKNkppmqR5iDfuaxFj1EFbzcTNdUPDU2CYbyuGFnjwhW2seSaBd",
  "key26": "2a6a3qEL1j8DxEPKe8Y6omFp4KyHLWsViDQVee3ZDJcZkwpchKYQqQ7Br5EdgLSBfqP3EJLy1VLhcY21gfLYCRfC",
  "key27": "34xNfU1vgGiPpe69BWHqGEzLE5itmvtyUxwxYH9ZzrdW6qGR35LUcGQb43wT3AwDNb9KfJXZc2Hy7kxH9HndNkCG",
  "key28": "5ntpKvzaDiwydGYm3Rz5MzbecRgrocgouUE1o9VTUJfEKPBCsHo9arju5nrdMox2KgRB2nusy6b2ziyFJVr8hMeL",
  "key29": "58Ci1Xttrv9gT64ds4oEnzn7ZE5LKioTfnhJo13rT9ChMbftDmv2PVhVerHJvbT4sZ2zw89fsbVY8MzU2vcmLgnZ",
  "key30": "Pvzfbu2PJbixUgiEp9TJzNuQrMxSNfLe9JYDzwCkBrN3HT6hJTpvNMUc4cwji94FUXHrJL1RgaZAhuJFRgK8Skx",
  "key31": "5SPjyxLrXhSqvJ4E8VNNoajeYewdpjH47XiwJb3xuPxGJ4GYFogWFdKqkLgRxmKjibfXmsETJ2UujktNtJmsr1Tb",
  "key32": "v4nQwZ9Vdnipo9k3AZt8dYmbiEQUeLDf1NvSUMw2TBm5HcyM1wrGg7mgfTu3M2KKNdSBTkPkMby8t4cwvra93ij",
  "key33": "2YXy9BdCEE726MQFQkkkwGerXp4nLyVM7jfsqzZEtsLiX9dFfRSsYvYsbQ7oz6S7ARc6Pms1bj7ZHvujFDRKku9R",
  "key34": "5EyxfnF6Zo9n9EE1tVv5TmsfTK3autRcUh7o2xpR5DafjUpSZmxKnzgTrYKo3Px2ecxLQLnQNxY2d4cULUNcJR23",
  "key35": "384LLQvS7jrbvfhqd8KdCVr3yDHsrQkjQCCEQGYpnbQxBW47Hev3pg2FqX3pQCMXzCp2PP6uCuzs9C7EXTY613gr",
  "key36": "4kA5NkQr9ZciUaoZzi3dP4Mk3tccbZK1ygFYGYtpgsJz5znn4RLPGGH5nFGeUNigKDv9tVHyzsYaMdMfEJQuGdds",
  "key37": "36o2KM3DY28ZrP5ngSgdfhW3GxDRHc58z8ZEMdgqDHwe3aA3CuXU8KKV4SNBrreqQhCCAumKLdvaqtxS7HciD7Y3",
  "key38": "MMhQqru8Ax7m4sJr2RE1UUABsjUZ3Ps9QXRVu1yJ8eeeFGhqLnoq5PDcYr8eQNjm5fQ9uCt3mzhBTi48a9eshe3",
  "key39": "5eBZn7JBWTJqdwLVxerBDAx1xv7MnEJ4KwBiHkrWb8XbMZF7Q8UpyR5fhGXNeBYhoiuCYvErZvDfgJPW6xhKFSd2",
  "key40": "4QCw8Jcy3j9vwKHUacL8yaRMPLSHLb26Z2wSiET86L1wQRohc38szMVdszMBSgpDU4uyVAqBmBaXa7aaE77Rq9r1",
  "key41": "5TaWURLPwaAeq2Mk1SxC1tL1Xrt5bnB267P7eePPRtVqWA2pzddqmApDxpV2kvFPtfS6xxNge3Y3FzH9Sf4deigW",
  "key42": "ZYkUBoS3B5CCUurG5vr8TyWFaMBVvxS7JjzbxjqiwpEBsaQvAvLp8xaW6CVGmv7oh9pgVr3YVes1srZN6ynygNj",
  "key43": "3CzHqeQFbZq7ShXrp8PbRSJrKvL7mVrDamffieAopEAb2qCZqPCPm5soJXUu97me5tdgVgMBnKz39UbZAYuAVWLe",
  "key44": "67nPv4B8qhbmSAqXdczFxHAgea5rQyqW8ntEhK1WcSpKGUwKj1xjSnW2J8BzQYvH4ZX1vocv6icwwQWRYgBgNzt6"
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
