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
    "tcyxpGvD1poRfXnHULoLb1vipF1KpVVkUsHFxzep5vTToS8vpQoFpXxz5uudaG1S2tr5744EmAyzAh7jgFhTJB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c5ooUPgRGbtw9q4qQyYPe7AuZwyYAwzPHsJvCWyfZnyYAj4pPraakNWvno5ARaLdEjct68MWhQzVUJE7QCbdbZG",
  "key1": "2umfohr91zHwSKS6RjyBY2JzRDvsHpJotWvguVAs5yGaVSHXwBGYstYcSyGAz6bkYdJwbqK3E2tAJxKSkLZXu2Yq",
  "key2": "3WfeVDr89kmZuiBnh4et2mqE61wCrHSWDext1gd9R7wXXhmMTUz6iyRmZLTom3xeouhXN7mQxYEDzrU9AYo7p5mS",
  "key3": "5TWdr7KFWkk6X6zsyRqsLG8RzLc4PrFexcdpk4stUhpcJGUMxtzjZoHMjF1Cqbgtg8EysUHTRHcFTVFqi54KDSzS",
  "key4": "2QYA5Mowm1vzSxDM88XokDRmoFXmJvR4mvPVPs6LFMKCVqJTRJtL2C1PKGiRu2ovV4R1fjgPu3k915NgDxJM8b2F",
  "key5": "3woNvLKUWJhG3tWtUzirEV6TrMyWuayMcebyPzMJsHU2UPNfWyFe4Zo6u4vGBHyZCKLpmgXecXd6N5e9fEdfr2wk",
  "key6": "3UTDjTUkjvV3zdPQaF5nJwaWjqx47At81T8Su6KNHfPtNNvdprioiPTXw4Jh8NJGWAFzMXdehdBu3Mjz9cG1XCR3",
  "key7": "29Ej7LZvQ6JxEHXQ8kVaNQaeCkrUAuniFXapRA2WRiTaGG9oQegPYLhzMLYUT7cgg4B3hwyvwTRtB9y6yHGAwrpx",
  "key8": "35aMX8XFFYx8XaSPs2XY4H7PkAP2YVdcGeuPp4fbFmDjxf1HhDSC7GWiynTzqexwHhCguKVDbi1nhTTYLpo4CxCZ",
  "key9": "3u1AZHjj5LjJGjLK5kXpMXtXnxZuZW9z2b18y4Hsx7QXSVcoLL2Y59FUv4jwfmcRNBWdDSqatJJXDyaoBM4bKuK2",
  "key10": "2Sr1EqT7Yu6FqHTnjX7bLF9rzCpSFM4tJ3zvJvQCYhacGVqKau8Jhq5kufNvDMEMrUa8i1Ung9pygn4bDLd4ctBs",
  "key11": "2MG2yTLvZaLrLL39Y9FWCyMsWs2hu8A3gXYDSrodXtvsoGWfK5WhrTKCZBVWCnApoLEuRjdhg4hQye4q9Aizf9qP",
  "key12": "236feUVmp7CauG8FrY2Y6mxMe9c8Lw1BDGCRYaEJg55Rm4ik7KdrDyffMSixpLNBYGpHZfTZ5A12oea5YdsiMoiN",
  "key13": "2rvwKjHmmTjHC8yeA7YVMmZVEge3eVdp13TeGdYiNNZ8Lw2brnRvkmhtSU8JCeKiiH6FmrVqEs4WMxvYaU9RBmnR",
  "key14": "2D5R5zyLVmDCy5SD4XSBRTmBnFgZGjZcniUYXEF98KYgNzr9WqDWKdhGHQbAx2pHFyAqP1tR1HLbvz1Jvfze4Heb",
  "key15": "AJgbAaCtL2WmsZ5Dd5Y1pdV96VKtLpiba3g7AcqLNL6EJeBLKTPwPHCpg9AEXPzEw677Ly5ZtMwB6FmxDc6CNAm",
  "key16": "LcedMydVgSFatK5K3kgmM9j469q2fRGWsQrs6mhvWxe2wqTH657XUN6vB7BKYVVcphwt32fPpEU8RmLTr33qMRr",
  "key17": "5S3UkE4NGBDahjitmkToNyT1YzBHkeXhZzY78tX5TkPo9LnnNo2h2VvRqz2cLwDgKzkACkH4bGpHDMPJkzmDifUL",
  "key18": "3NDJi5MeGYC6jzvfMBvdkYy1ts9fBcPkHiCU2eiCTAKyDfZUctVVTobFqk8z9TmUpL25XgXCCDCxDKxweGi7kQto",
  "key19": "3RVP7y3d81bARWzccmzSQdSg35qR6QNeYk6aWKNoYGL7nhNSHhLZsPbcJChGgYXeNVrYWbsB9pdsJkSUAq5B8s2S",
  "key20": "4uoMhgojxqwmoNXJAFwbU9rd1ZBo4327WLq3vT63NQD5D9ULzm3PQBjaZJaZdABRK9sGdpESkKqKMntyeJyc73Gq",
  "key21": "5Fy3i29RBySPZsw6Ne2Mcgjd7DoXofqQxnjsinn4MAYnTNWU8N5xHKnS1MCGcKmA7Z6CmEyw6ZQYAemvsdF49HZs",
  "key22": "2D38yvVXqYUp5kQZUzsGUrT6C8j7NK9yCZoJKmLnUqa9CxTVcsXDTpAu62gpZHbZNwhYMK31Lwh937CWU7HNQpsF",
  "key23": "5Ad79pWQPzuqTsgxRAbJKzwrEDMjSdvTrUU2Zew2Mi5FV4dDhMTmeW3UF5VnBVEpapFqd98eeS1DWoQPDkMbUtmE",
  "key24": "4moeC2H9NY3oLbh2WsbasoPsCVq8QAKonmuXU1UKsxiSHX9WaxLcJXFfL7rvKMVgfiAgnhx7JsCBme7TGPmWBpmP",
  "key25": "57t3kDVXzWZqtwtqW8FFfVC7rD9SwpT5c1Wjudnuysawjn9WJJajowW8Zzk4HCpn3A5njDDK9ax69hBTaE1uuzVB",
  "key26": "34MyPgLNrNCqMUPwM4wonutRq7rV59nsut3w13pQBA8qcej24pXkTdhccdJNyKz9cAQNKtv97MxmyBJzyhFZSNzi",
  "key27": "4iXAkdmGnkrUBdZkJwzz1Kycssn5TcVzWpjmw8mv756jx8KTZLcipUC3xeSyVnZ6pQEXW8zF6TeDyzkcVu7koJs4",
  "key28": "3ietupBucLsYqz4xyfYwjjbiDNDLHR6DTJ9aS7GKv7m3bDcGt9ShjDdjKpgjr2vXb933NksFFN5MNRqfSJSsy3q3"
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
