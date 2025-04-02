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
    "5u9XEYHkdeiKNEWwHR7dcg3tfQnHhGMnW8qwNbjNSCPEEjsGJJ1YZj6sqdoooc8gy3QTZK2ut6PcLLw2P1GFnW7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cbn546PttCvktUXB8kjnqagexNFkaPyvAc1XUpiUA8dct1D6CpN6TQSsGUG497uG2t3Kx2Lrt7vNUmx4gbcD98d",
  "key1": "RjN5FXzv3GovfkSJAWuB9nSzsWavX3K5pMuWcJHgRyVVmawS5tEGMPouBaLNoETY5sx1ZFA7JUc18aU7xzSezd7",
  "key2": "3kbKTczoWtuTd83JtXemA9joavTqtwW74WEe7QffCviTBWhfZjZAkFF9ktNEPLwmPjv6RqpsASPdrmTkynt44AaW",
  "key3": "5Tc4XYgWCCQcG98EGpHVW34CbBLLRdYYZvX6cH6EhmmXTiQVA6RFWovNdZP1mgTgPRPx147gvNPC9AVfCLzK54fB",
  "key4": "572ibPr92rXZMaENLLMdusXYzsxpeCnpXRinbo8Jn7F7aXbZ1QSSqvodkAbELrStXfir8S1SmXWBKUD5SW6G6eq5",
  "key5": "3hA3rrx1V8yKCePWJwGNWZB8Kht5iBUCXedmTXUYvVKTYD1zdiMPDRE2zF8fksXpNDQxJAQdWCcZtHDnXAtXUDhT",
  "key6": "3GRiXdvyEDy2XzTix5S7YKvKaJAkkK1oZ6DnvE3wiqXK37M8QzuwKFyNj2UmuZ6wTjvZKHSS16ycE2jZ8Ef7hLEg",
  "key7": "57u4qemaQE7rdvw4LDy1hHmt42rjzuarT6bmEHfq73Pbtt8MXekRGWuNzsb2CM5ULPzVeoyR8sWAcbzXxu8iRi7E",
  "key8": "NZkRgknSoCRsUb2dbTXvcjd2dP78rne6EPLJsNEpqxg3biRgqrwrA5teWL31SNcZuY4LtezJ9rYBfXgseJ7SbbL",
  "key9": "2BZUaT5vNyuzA4qizY5pBPZyMs6mJKjJSjQbsWisKDvDcT69W9kfrYy7UzZa6aihvFHkAQKYuw5wWHj3cCFFPhQA",
  "key10": "9LyhTtrwd9C5YjpWUyA3A96WXNBUCGhfzjePg1DNL7QaTGNhGJoWSMLrM4z7f4VxENiVUMeQNPVgpVuxZkWhazs",
  "key11": "5FDgnYzwmioFvtCUt1moNezyZ44K6Bs2YkwcR18CPENBn1skLfRJdV8ZkBxF9NHKb6NDw1vKWDo2s2V6F5sTLDz6",
  "key12": "5BSUopQHXhfBENauTfrAbG17RobCPiskZoHNHWL6FNSPbPbLo9GGKhbRHpimoK4Q6LzMNqz7qU84h4EdJw2Umi31",
  "key13": "3VKMKwAFwDLnA48JcveF1dR7sxtQdb2jzyTLTXEgjVDyGCPyicprWsHRWv2BrntSVeWekPN3jaVTheEHnZkCPNUK",
  "key14": "65uB4L77LRFYBHnvSdJKLAmgiWCeZGF47cmmrqNZ4CFmfZPqusJF2wt87QKJrEzc6afALDqDyHQdfBYvBiWhggQw",
  "key15": "2iwkfPYb9peAC9hSHKqMbxEhESz2BWpcADxC42pZB3gyAXgabPZCW9bdSvE7a7JDSimg2qxAoy4jEo1QeZNvPpbX",
  "key16": "2WK9PERHtsRRMnRkcUMgUFi9E7oqi9Ck9fcieBqDoAjhLYxrWvd6tgSH6caGNbTDLWsYmHXXqf5XnLZJPdcMh7kt",
  "key17": "DGuDucgZuQ1T1S3PDNGKrTZiz3MS6BAKFxPP2wZBuDgxmeCbZE4YJxSYvpKd5FUjcrQegtoJZaYT5H5w97mKLFs",
  "key18": "2L7E4PrZQAbsX7g6YQ8Qkqz1zhEMYtCCv3efhqDLMHXCRCkdVtR1aWsnnSt8nBaUr42AScr69nhyvegNWBJadoQF",
  "key19": "4WMaWgSaLDpzbi1UKtVtZ5oR7wkbScDYJf2zVTBsirfjkUzXGBRzDdjJRHu7aEtrXwiRRxkNjcQhpcA7rnLrCH2G",
  "key20": "4dtwDPTHNGm1FsrEU3xvzWBp5Hwc4rBvhe4zPwbnwcwEJPZzEnzz3eNWzF9uj9gqqb5T3U2JJKqURWGXmRRs7VPV",
  "key21": "6Tn5ueBB1AkXikEqAvKWk51Acdyr6koTAyPKWm1stUjVkAYPFg3g8tZonBnake3DG9nLha6kHP9z9B3YjmR5zd4",
  "key22": "VXfsJZ7p9TYxSJc5q1CUqFNPASA6CPDHwgxB6CYnDdXsQomgUsvow9H49YrtGymqKTmfe9PTd8fRnZPeoEqxfCa",
  "key23": "5XpeL2wJ2eivMFfBxmuzqirtwxHnP4gGC57B6FZBYNGojR7BmTqvoa4YDHrxm9xBxuqppqmmSVrn855CQbo15osw",
  "key24": "5wQG4KE5BwdryoFY4nN64DS2MTH9LTzXxTEzzstz2DiVZELUWbt7f8ALBJaNKWruX9SynSg3xkwfeJ1H9GVHQv6N",
  "key25": "4JePFx3jFZHNmxAZ6xmpo3rjwd3QSmqGfxAirSXkgMMyWfD29Ropqz1x8KJTQqVSNLisYXvFRHqL3kWssnou714E",
  "key26": "5dP6zMm757uR8BvGMUSL6CtGAWcPTHo6vodnKuyVmptzdk8A5ufuLAGfmxous7rWNYhPHUGfw4nNpN5i3jHVassY",
  "key27": "4BDjQwreA2GHQxUHri2eMhDy5oyFw71qRBvVJMNdKhLUbNJ1gcfAoATH3oBLXnE5Yf8ZBddvvbVUWL7UP39EZNmP",
  "key28": "4Z4voJ7LBiVbXVwwkZ4vfyg88naVvd1rnz1MU1rqSbLeUtmYxtxR9f1stsxgmQc6tHPZzajyh6ALD6ogD3nj4dbC",
  "key29": "5CRkyGXYJh6rF3yHu2PzGPkZcoZo8HzyJz7sumR3JSmJfqoaQT55DemYKj1AswWqCSjWbDLNPzaJ4jaJ9BU55FNd",
  "key30": "2y6dCNMMu16aeJZ9pa915uTqH1qTYiGHF2nzMzTTfJBYCPeedtFMvQCixrEofxFbtfRgUNMcfF9kLPcXNiVE4k99",
  "key31": "2uojPawP5jMb1YxdNB16KVq3Jwcy8YQ9v8VjbzMyk4S3TazeToYzuLA7Ab17FW3LBYwEu4Xj1h2rb67wb5BFSqkd",
  "key32": "4pX1Z3m9jHEL5UqBoFrgY9CRZXVp8ER5Ma278oNsUpAcUxhLiBHdfyojTVLpdjHaVLw5EHubLStRXtvvTfu4iEZZ",
  "key33": "3iYdteg7bxGdjUTVZr8VKQHWwt3ynFnz347vTH7Wfc2Q5QDNKb2bqE4ywdmmCFrnVVGT5orEv5GM4ehJ235LtAoS",
  "key34": "41L2ySWhbHi6mHY7pbgNqBE1PYfZau5Zng7xaTraTfJP8XgYrq52Jzt9CW5vFK2YajxRF9u8cFx6x9ekiaGnqYg7",
  "key35": "22m1YpRbxAWjazWYhvR66xzgzaLDMHEDPWxnHfu1fD7sV1dhsWHUo38pgysFhMKjK3tzuNmpKPpUgYfQnZ4Ai5qb",
  "key36": "2PvPCEJH15hXHwrvBym36g69NuUcaRK169VRjH8w6SPwHjD2zCbiYJ3NUT8xopJiXQKiPBTnzaeH9iXwAmck9XFP",
  "key37": "s6aFMY2q3MRw8XvkBbV6sz9j9P6KGrRVSPsdhdTX5wzQPuTWvg2gbWZ3jvVy1KUPgExSTnVGspQ3dzfe4WwzXwE",
  "key38": "5BEEYEwY1JnBVmLSYcDR9AGUNdeEdhxTBnGgBjMivxqyG9F4RgQzMQ9AmKKbV7UacXr54QDPacZDMwyxyKBTk98X",
  "key39": "661G5yGUtpV9BK3jWkLgrNCgo3LEu7HLiu8BXLQDmEgGgtHcKDhvPP7XcJjdfG1GCviGgAp35ZfxKXb9R4HwBNZT",
  "key40": "3v2jS1UC9RZ7GcqktpC9uWLXcEznJqv3aJ7FdmtWUZAqa7eqzd3LR6HLc3enH7x4asRiabfWsJwqg5hwfLSL3n1K",
  "key41": "4qrgyNZZbQA9btfvtupgWhsMYriSeA4zjkTLkJekcz4hzBTaGvfKKRVh4zw6JZWTYBqatGorxMZc38RYNvg7hfWo",
  "key42": "4EGaqZjqUsEc1bmQWMc1LvKq3DpJjvsFuAM535UyCSrh41c47DokLTAtwNVogg3i1XfWamArR3XCAbaby1KUcPSd",
  "key43": "2rQSGKaGEURR44daA5DN7uue294S79FTWPZukhZj1Vt9TqYTFKHxm2vxriQRsZegSzy39wCu8EKoGsFKRWfspLue",
  "key44": "5x2JiHNPyAwiF6cyGtVEFWNWVxnJTKUcoB9YAHBuHLueuEVjRNUS4hW6FKg4KvjdQtQzZDg9HKhSDtPF2oBpbpHz",
  "key45": "67UKHdfBj4dqRtUzcTuHYFERa88w77EoxJhiakuAZf5LiG4SGcDtjnwGp7vT1K3xeMNra2TAAHQtYLtaPDN8EMrb",
  "key46": "pxgxBa8fcGLCbFn6kBtBT5pQRyXYm6uJrYToJJLiibWbroVdBagCqCwzMEs9QFd7ZhuZdzTAJi8EUkBq5MATZmK",
  "key47": "2C11MBNaVBobHpGbVmBz5j6Jchjy35nTA3L3jzp1rfXpfUK5routptGGJgKomVh7rZMxTWKad5dny1gJx6qN55y8",
  "key48": "27jyxoUb7qCaxDQDzNmCUsF4553dQUuxqvGa3BSVfHNBVzMfpFjhzfXDn1UMVtqW6vf9fX23gvXa65bv8psdNb4R"
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
