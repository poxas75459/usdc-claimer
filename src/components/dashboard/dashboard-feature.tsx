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
    "4aiZXXnMVPrqbDyYuNTBwr7dc1b79Jv9wqVTaXDRQwx4eZQ9bKVonUQEa9QHCL7w1fSDSHK6npwdYfFKmUQF1ze8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGaRnNjSxUuGQmKCyc9RwtDQLLbN4yQENYJxKj6KoW3RTfzK3E7vrr7LHrsHNRWYsxsQ5geSCQ5RGfbXVQce5aX",
  "key1": "595eMVRUrv7KxAW14vtJ36RdEdgdQQsgkqBdMQjF7rnCjNxXrWQGFNuNGbsHqN76uvCp28qDeBffK2wpTwbP7cr9",
  "key2": "3kAZ1iuSP9mVTtiUxjoKL2gEvScTFZrUDnFrxBrPfSDdriXkEp7E8Lj7MCcMJQ69cdqjcvjG8ZVZUZX9KGHd8doe",
  "key3": "5UAY8M7mLigq61fjevNAAwe2sFkeT9T62WZ3AzfMkB76bS3GXuoNg5djMkkcNFDZFZbipz3U4AUUQYCqdZixgZR1",
  "key4": "2QhSdNBHVtmRThtyVbQg2d84g4vZ1ocfeaVoYeDb3T2FTE1zikpEfT4VGDixgiXytFBnFz9sB3RWehxuNRMhR44s",
  "key5": "JGg884he3XqFiG989MGn7AHhdZzHB6Q8fCh6uoX8a9G35J1G2c5BqkUwNW5oAY3YbWuL62L4T7gZGJyqM3sNFUc",
  "key6": "7A1xWqUvNXpXYWEvE4CYZGsfK3CVgy6jLjpsKqYkajQuZG9oWhyp7xzSANm1JVJzH3xsK4s5ZNqcfrBB1EQDwjZ",
  "key7": "3BzrXuvmoqu6G1SXByVqoDTV8HBAUmSNmGtPsRGdS65Bw53JMb9zpZEQ17LwaLVL5GbxRBRKxwgqLUysQgPEEb1X",
  "key8": "67YXgkharRkFRryaNU518smha8UBtGXDEME8exVK8929LBTuYVXYQcNDCBoEU99xw3ns8uCs1enLKDqhCVwA2GZe",
  "key9": "5w1eAwADcCogw9JC7nP1UaR955zo6xYbeEqvuMaaPeV9VEVb1tQtv4CNi4jtmhKM7iJ418fHrM4L2jkSgQBLdnh5",
  "key10": "2zcVubUZZwdsQ5Dsk2BYJgN5JAvGPrsNZFmTLiwyCT9HjvSoe3WdNnnt1qQaFkGBvx5ZNxVXAQLDjiqXd6Uo4Tdf",
  "key11": "3xpxo9KKiUa1kBvf4F588RTKmH88mFmJyhC7QGpRqh8z5oNfnHaqgvquJggmYrGcrXa4qTHFrzdXNZRTXRDatRLE",
  "key12": "51cQeqneh4n7V18jppHgLygr9TVH3WM9rbHViJx65m1LArrkjpJL3AvWPhX4KmQK5gWdrZrUAFq2Er1GKWA6tGbB",
  "key13": "4e24Bw9cQNmyjqn9xDzgcfrYRaYjdSRfQGcBQs4k88W6U63A6j5deEuSbXN3kyAuR37z6QkWkavZbVDrH6cid1ra",
  "key14": "5CSwAfR7sGrQrFBVvmUdCq6VRsSh6KrBVb9qVAxFdpdXqVmZtqt8v2UT5MfyaNryhQ4vTpkDfMbqdWGgtn5BENy7",
  "key15": "nhdyCZd8SSFnJXCpanP2kpmFmfP6wiye589sfJgiGmVSbMdVeMT7XeQ3s7sx94uncbf5EmWwHEZdYBcV4kkbUu7",
  "key16": "3BRunz89iYUkviS3pE6QyWGVia6TY3wK81ukNTsSEeZaquFGXrwp4aVthYPotvxe91kD5SH7FBpN5oF7MTQuZVFV",
  "key17": "V9rGjRb2hHLxL61LK6Bqb1VP5hhjnjWAjFpx4swzsqbuQMKLpnQN5MHbGdwx5h8S2TDCA3ponBEoJy4c2afxn12",
  "key18": "4AGgYmaDiFweRauLKqnvJZTibUih12oDQpZ3wYotuvMT8LSgRVbpHSiGTzBHiacXAcrRMaVU35XvyDvja2e7KcBz",
  "key19": "3oPLXMgReBowaFVDeBwqUZ9qYeXGHsGDWgEaeDwj42qy5xma4WPib4ecqfXE619P6Exzx2VRaoYq8awRh6MLyEXH",
  "key20": "52dQ5zPnzPCMSb6BUXwTYsbuHpsps944sVXinztQ2N9s4uBeoHbFisrMmntr76Hn6haUwqpMe6Zc8JCWgG1hdtp2",
  "key21": "3diwdr8jqyGW18jFdiWBH2ZaUiMEmsXrzoLGnB33KqBhnyBcWNtL7A3Ci7urtEL2qpaQ2kMbq8hNC1ykfWbAMVGY",
  "key22": "2YiNmVdLaLqZB8cf7mgts7tojumKF3qckNNeaCAtR3rn4aaPUA74Aubxpbv3zDyMokwrKsrjHhpsjayyBLNNiesj",
  "key23": "2emuEXnomYqxDUhdAAaB8JgvYkSJyp9euoBMnbLWAcUm41XNbeferPJHs1dYo2QWHNn88nkR8t26LoiexuHFbkYN",
  "key24": "3ZMUSvosKmhu1CrzvtG5LiG2v2JRJ2svMsWCaafFZQLLua6Vk8a2KYbvyMjZZvDV9bFUSa4Pno28XK1AsuExZeFW",
  "key25": "46oqczfJYB2xtgvTmrp23h5227WhEvzAdaMaKxMG2f2QmLjB1dDs7CXu6nuN2sjBqe4aEVCvtsd9iiWKusCsL6ic",
  "key26": "2fp9maXdZU5sNGZEtzt8bD8ZGtXCXqA8gbLk35H53PXtX6uRtBp6K34fivRuzLcpMnjxyKAmr1GsVnVNJ9JfGnCN",
  "key27": "268uficvMeGgejYgJ5XMAXDyavMz4qeW8t6uB7g5zZTM5W7HsFFL44rjDidYeE9vnK3VHsq97YNGzQtBBVEbxYnd",
  "key28": "5xPkJs4f8mifhsfdfG6MdJcXC39bX2ovGSoTEiUwTUQN2fz1JHRVLwLNCNEnqL3Q39sQmvKxN3f3NYF6eA7vwFFx",
  "key29": "4eFH5v1SVQjjYadpfnyzpyASauk3e527Fi5GbG5BxBCVxMx3W8CqocbdUnLCLpHgjN1SsN7jeFzyaXqu9CkCR6xV",
  "key30": "4SjLqMVb9MD7cxfWVWDYaSG2soDSdqFZLmTfYBMeGwSJisXhyRnMbwUMkzXdk1BrtKZ7YRoAcN1KtP9XpsiSyUcY",
  "key31": "2FruNEC2FFe2gqyc84uFcBUPaKBsR7kRKFHDMYZSnR7aysTEVUe7iBKRKi7GfMgKsxABprM4e2bViZpwtrDy6Grt",
  "key32": "aBTVpUCjE9jnQrsYH43ay6Sq3TGbrVJNDZuFxXTiPVKY37hG5t5WDEf7e5Svw8amRoiZGs5tKAQnfj9vmVSGjL3",
  "key33": "4F4JjMGe3HQyyuxHAmkFXCrfCw9HmTvrLyg7ZayCw8CzKoGSGsJU1qScUq2gchq7zPmweiPJxLDKKN6YC9sBz8yz",
  "key34": "5TapSwFWAVG9rG67nhPbh7BHzUGQgincAqHpb13VioNhtEbQwvFMauj1wTjNqyXaNV2Jq2vca94xvwygPA2zRr1Y",
  "key35": "3hfKdSZ3MTsioe4H3kBoSVkDGaYBduG7LY8ReSwC34w16rTxRwV5jU1Wc5R5SXUwKuh9YhPdVvyRftb26hZw7zxP",
  "key36": "4CsVa41A2fWWyFM4Kf8kA3Aa4tLTgmwWW8D2jTBthtvVia9pu8QmmDqRHDhJrTN8M5XHM1ujZoSM1bqNWyXMi2ya",
  "key37": "4BV5DhkxatvSxHssmqXaaL1T2NYdzsXyFn5BaUfZ8RmjLfzjJx1RJFSN2YdwAfcNaXszbpXzgLhYfwhqjuG1bb5C",
  "key38": "2fDZmsFkj7xbh6SKx1rk4hTNZYrM2kQMyxcBKb8tHEYnZ2JFXZmE98w8xhcZC2RtXvqkozSqgraS37BLh6p5EgnP",
  "key39": "36e93nivY7KWH7iLhqEZ8p44396qCTUNPZGJbDWiWet8LM3EjiGe4qFeCVf9iPmX6p8awU66Uv569Ad2dYEU7p91",
  "key40": "4R12jnVcvAUcYEudWbcbqtganHcdbtYB3Q5r9KwyTukDAaBBKEKFGJUV8RRn58fXZYH8RrGBB3iYVaumjUiwuuKa",
  "key41": "C3yriuJt7tNCFqoLCzejsnVAT22M9tvmEJbRJqkATREcc4hnEnK8nCysehSmjfphJhGyiNBP7gctzYww1pYmyeG",
  "key42": "2e5wKM1q2TXTuAiouW5dnJgmM9mVbiDufuA73EYb5mY37nLn7WQScLJxtCFBNi7Ywuy11g1Whj5dUJZQgyZCD9rN",
  "key43": "5XmHi3qLDZGEBL9aKjSiMrbMH6xQ2HVjJJu1W4gYsChDb1SmtZn4dtGkCueb5iZMTC9tYbVmb7ifah1znFsJWiUM",
  "key44": "2e8Wq9tdyAMmMLVG9BtPsrAccry46uUciP9dzyxNFF5t8v7gwbzNPZdKTzdsKTcu59FYDnsRDxfu2mvuDE1otPWa",
  "key45": "59wRjE12gA1DSnZKKq7MrrWLBsxNFMmQiiekVXvVi4oenVePwMHA73qQF19sduZC8nKeLzmQ3yqRLBDBLAKjX9z3",
  "key46": "b45CH3VGfwd2jFr8z95o4z8ryGS4PF2ftnaoibbX2WcH3jtLcqPcBWk34HCdvJvoaxPps8cMqtG957v5or7TBrD"
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
