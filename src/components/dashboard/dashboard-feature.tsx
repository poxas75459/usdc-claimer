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
    "4KjU7Np6CMz1odnsLR5T1feN1CfebgVZVh7xRegfzoqzEvV5DQKkaqgVPrUWPoifDPiKFJQifpkguvWtfyxBBD6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LjTU4VRoWnDVxrbq5SKVRX9P1ndHN2en9MHpPrt2ZtUkZ9jke1Ch2C4TvtPPxYGhTi32SxpjxPkxqkkLQzkuikh",
  "key1": "2A3DVCfH49oVnhXHdGPTjwMnS3wByqjZNzEwUjPqsDRQUBU3TqC6HjSobUDckRfvpGBqSAK9xXg73kjMMXjKnLM8",
  "key2": "4UPxFY3gwr6FhrckAgj2nwBNFFShUHxctXq1WauaW3AAdiZp8ed9Hw2Yr7B9RygPGKNCwGhXA7tQ8rqbtKE1k2aM",
  "key3": "2EtemRq68oJm3ExzW1mL3AGFS5yZxZCVnSjSotfMWr1CZodJZXBFjpyvRw1jc66vRELdGucyR1vYK8FoS7AkQTKp",
  "key4": "3by12P7kmQmxsqLUjQWLrN7s5zL2BFGfT1D5pzKMoT79y55FKReYGeCiYuAgbWnbsBjSZABZt7nxYRb2prWBsKUM",
  "key5": "Vu1rPzzYJv1V9sS7AYT2S9NokvYRiaq9frbtrCBy4c6yNohtH8UypMGaYoUqUYJhotk2n6e3FB8ySvN4EXVpjGf",
  "key6": "wacgux31FgvE1t64Y6jfgkCRC8Nu98XzALCS74ApFWsYQd7X4BSWC9uCDEyocre56xDhokt2uvDNRAWPaevUHzm",
  "key7": "3jthktWNtDCKhKJNLzn3vsArApJoGtuWMbRJNxtY2m6hNAHRdaJGsNcH11QoFsCYWwFhCMQxmofBHe9pKJT6m8Si",
  "key8": "3CyBvezS22R7cjcmCD19oysCEhYkFxXh5vw62XCBAveRCSMBfmHw25vHHCoSSxUA5zFhj3ztfKZS5zwEtYa3X7Yz",
  "key9": "5Km92CEFYouwMHK2Kwaymq8Gtm4N5FeP5AwxpuCgWLqs7Epwznasy1aKRm8tKx9qzcRNt8vGZYS5rb24ZBDggNG",
  "key10": "3DxHqana3sZADyvcCNcnyE4NmgXiFyLurryrfZKtczsMg7XfSUjPpknGrenZq5mHWRF7yDKir7h2mc9cHqFAvcgP",
  "key11": "2PBGhaacP5xo8D6abnwAALwD1gbm1LSkayZtcG1Wf2tZsYPjnqmcMMSJndwgrCJyeHoYBQtLTTSbQhccvk3gVGz6",
  "key12": "xzZUYhcR9BuwpjusW8YfikEQfygxRMDGo8jmVCQveQhcTMfAsrBu5PoLj2jWXyU5ftxpMLyxnpD8rBRhu2Mvtgp",
  "key13": "54vZwG76vsz8FDjqGB9NgLt38RcbyikwD6FkXDiUz8L4fxoM36TUy5Dd9fJjRiv4nzJF5KQBn6ztMmQPg1Hct8zq",
  "key14": "2TfRdwy9jC3ofJFCJxu5b6pThk94gUeFiTjJiAGheaUdzLQhN9q9wL57L4akqK5i8wcdPD4BNxX6tWju8EqZNzUL",
  "key15": "5CF7iUnWdrxVqQXazMhj17dZvJMJ5mHwAt53kLrpmrfyeaYuNMKJzgCWavp92uuX7SwZSvSgpbLG4rZ8eU3z6uw8",
  "key16": "Qj7ruRu5VfY5vwU5fgNTgLGMpTDbRASWWWeD9CwLRspkbT3L7gDb3R8XXS62kizWvd2KGgg3UwoKALiMocbJ3h4",
  "key17": "5EqBnVWovD3H8AjiccowTe6euFEMLDDCM6XvYgTBQZUDNPFGYTDAiTPmVgQU7kDsy4nGNHcxD8KZrLNhD8YKfFm7",
  "key18": "5vB6EShXaNR7ouXDfJzKmh83Rx71G2FfyD2yfsKkGF1PMFDZHj82Tq69VTq69hvQt2NnfGd6er1kKRsi6mVnXmwA",
  "key19": "3dPDLRHBH53pjZ6dX3BGB6ZeegquSVJdZ6N7ha5bab9Gc31o9UiFHCVTwqsHGp1oWkRHMGZbv34nmCTsUgnYG8g",
  "key20": "5QLmoMZXy8hFguzvSEjB1Zmi6B4NoTwHRLeXx6oMyB4UZGAetYoEBSyJQWHRyJ65HFvrFsnDg5LrVgedoEgGC6gA",
  "key21": "2fGQAxAibeQU536focy843hhmHcs86tTa1csTvZjoWE8PTDceLZgixEqGdSQTbnWBsP7SoN37CLtwg5zrW8V6GdA",
  "key22": "2Ecaezi7Rz2oEXNU7oBL1Vd6G9JoHAm93tBzAvUqBMpMMg9cVMrfmPnUZYFitLEmzv5uJPSR6jcruqC5RicV3t2r",
  "key23": "4J3HTuuSomyRskydCs7vkRyWGkcZvaZokjRqN3GvxETfNUz4hJCH7EU8hkdgijz6VpVTFKCibuKneMZKczJv1CSF",
  "key24": "4dWBi5UxoWkfFUTrPTC9qtF9bZHFhK2mS8AtZ9GUHnigDZ24PwtJ31qp7o4E1QPieYUEfcC9fdqLAfAahufK2uvY",
  "key25": "3f2mQtgrtSCfCWCk1GxPDkquWyzE1oXTdNTp8v5UNYt9ZQ9mKhXWAg1anK9hi5DwU3U6qN9rCgKpqvC7gmwZoMHL",
  "key26": "5pBK2GeRLna9w35Q85bozY83RhFSZw8kPTppbNg2TeRGxsWr4cA4wvrVuAUAsB6VkEhAS4JXgYCSd71aKrUsxGC5",
  "key27": "3RjrDwKdSJHLAyWYott6CbP31ygAv7jPfoj2F9fTfJbKwGUG1KWFKCUdfbRTFf9WznA2jr1VXdK1ki8kra6kXbai",
  "key28": "5snBY23BzACXBb4J5UsnAHHMJ1GZXfJdbqc9CeckkFQBGauxN8fMk2mpDtfVScVp8xd7EgCDLpbdeW286a3QgKDq",
  "key29": "Bq5pxxLNSHDDGtuzTKFa3G9pJab4P4PewpLzm13ZSLhLinh8QyaqEpntdUxr3KXCntGbvWyHDu4abqE5aFnXYv8",
  "key30": "TCmXXpyYDxwy2vTUfCYPmPybqT2MPPFHnHW6BwUz3MkowU4vuZnK28N3XVN4FqZiJzaDRXBR1mQ1AoYHHqEdmQH",
  "key31": "5Ky2jTDpaBSW3GQ6RFJWejR2jj2QNZh43CuMtuFtn77TrqbHTPcQdRZiCyTPjJiLodqJAQAzi1X9oTFrzze66jt",
  "key32": "2WNqEx1CfXwiyPGdrAsgSVYpkMgDoVYPJ3yWC6Dv1WAwrTEE7YznANcz2jcoRZiazsDwbroPexJ1kwqXoNW9hiLk",
  "key33": "46Ks2mL2m3rR4x6tURTEi1qUhq75tL2uxDMYdGJPXr3RsE4PrhDx9M2mEfCCskVibudKBy4RAkcCZ2p84geBBxLj",
  "key34": "4jJTF7cRF1Kiuxxe85zwYUn19dTqd1fjgLqSVu2nnCuDKnjmaMskWCVSGqyKMRNTGBf5sCxZ3p5gRbeoRPmtq2uH",
  "key35": "23afYNmph3JBkVFrstD1MHjYscSJqv24Msp4Mcz2xRM4R8CC5xmLkBXNhXbhSxRGFWA9zD2U8ZrJny3aDwb2WDRX",
  "key36": "3PF6Fws6tw7oe2nFzey8aQs9ugiVF1R7qp3gxD5GeguRW1bXWrQQrB67rdKxQ594mu1e5B5Mk31Sbevk76vWerjL",
  "key37": "Sx8BJeZmGoH3J2Q4rvKcYPjVDt8rZQ6Ag4bcWBkzwTCCAW6qv9qDqZLU52uTCGTVbWLgxFyJHobNbyauDeWfGQK",
  "key38": "4gRDdW7zw9hj7PzmpUy11PkhzCM3Y2ACDczeFLfuS6nXBF5WHhEGbpJMQ5bj4yeCum8HydKPXeDey56WDNwRGwEA",
  "key39": "3MRFHq9TS4v3Y4ACrgmVPT6dFxCzVbwpd7ZfU3AosDGfnBEp6xnTnn6hKytiJVGUK1R4TXN7817p5NC9xMcBUU6M",
  "key40": "27973Bc5N8rvVuZoZCwMKdisXtd5mtbwVV6c9aGFs7R2wzT2aWuNRXYQoKExMf9bbxuQoLPXRiQAwS1sxUdrEVHu",
  "key41": "6zHPfSwjxmn81YJe8Bui3cdzs9qYx4G1AuGKRUzvjXLQ1FH37oEC5P7QQyVZChD8xoQjcW2RmRE2BLHPk45wYth"
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
