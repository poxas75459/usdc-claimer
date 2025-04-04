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
    "5H8NpLm3AEAwa9jD2io9WKikVE5xkxzYcaBSBYQVKRYzmBegUwqwRuwiBWs16BedMZQo4FDH9if436JU69fwLp8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfmH37XN1yVuiD4QEZZyLF2s24MVdQrLAjFnnYg5WQLy1cD6JnNQNJqJUQSTwrFQyeebGcVaMG7CRUCVcsqVobH",
  "key1": "56RjXZjuBidLUxkQwPBp9p2pCA8H1uRya2YUWWAPGLNLuWNYdHijPDyZgAAgqE8Kjs694YytrUrBfLeiJwqMf7sA",
  "key2": "63nPXf8x2T7uztijNpP8djeccLaZzeQ9LMCiDxdn5Y3JNQ1nSMbKJMdaRLT93RG2UW9qfemgCrsQqQPGsNNQ1idr",
  "key3": "2qK7dszor9VmCZquLaqTJxaXmSQPv3Ej5AokQDYG7URiHs8kguwLGj2Xm5GUjSHjMdiBWs453z8a7KtYzn3dDpQj",
  "key4": "p64rMuQtrZjt42RXTFbMCu6FL7tWChNH3oiPhQ34y2Pzqt6JFxXngR4tc7N7duotBeSZ9hYLramjKVLdnf76apn",
  "key5": "3SLf4LXbnqY1neK7kxvSaMyup4yLCDqqSgci6ozf9RdU8qNYY823MsticP1PGiL9XNYhiTLpopYpkMneUiCkudgG",
  "key6": "53zyWrghDQFoQ1VHRCEf8wEdjFt6BGRfNZNziLrJz3yMa2JcUJNHjE8ff644mtwoQMWGKH8PNTQbU3t6jF644VJJ",
  "key7": "5z4gQYR6oeVqLjhwoC2hnNJkMFmzky7AQQyfXBADLmKxx43ckR6zpX7mNmyRSJsZnLrFXKPnz3AXgvWdhAx2oE8C",
  "key8": "4Fw9v63gG7RXF4924BdkvY58F9kE9jnAc2ghe7RXTdqxc6xxUYepcMBkZj8Dygve71qQuK6FTpmz8wDjNjieqxLQ",
  "key9": "3m1Xw5BGNJdTZhYFrAfTa8yaE6ojVsP14zgmJXZBqutwsYVv2XBJ1dRzePUxrLWQMbSee3SbVv9uK9druDwiKvN1",
  "key10": "5QMRDNukjifzCPMSP66CM8djq9BbZDddphxZgvp8U2xZpGfPaZAJ2owqvUHy8pb13oPMB2qGYgviiAF9BW8DkeyN",
  "key11": "5ACjYjsLoxUe6vwSbFwDhe6ioXToJPNMwPDJU9CnRAhJ9Xng7Sdd6nJXDKZdE3ah7dCQnUvrGvz1NRJcxACAQC8i",
  "key12": "5udvTL2qj4J2caa5pFq3v7818xXx8Es6Wi2uGsjCip8MudHkyjG7Mf3AhpWvSFWkUjdGyJAERhh6gke9nGNfcsii",
  "key13": "45toygtef7oYH2CkJvv1bb59p635ReVYR1F5qNUMKJrvxVMr1uVWPJ9gbD7zr6jVLD3MQkoQai5q7Hs1ApRmmRvg",
  "key14": "2dCpn6MRztqWpBDyA4pSi1AvDFZrHEjQasRP3c31wFU5X1rV8tnKuKADYCwerEDXYku6hydmiHwM1St3t5JHPhGi",
  "key15": "58cLSVP2wZnzxyjSu5MQ4jB6m7ieQFUNDRumwLoyLgMeh3HfLHcnuRFBGMWKz59fACyvFxGeK1ELmzacZNitXCax",
  "key16": "3frruhkP5JyuQ5dig2DmgAyd6DXeAVoU3QdxHZ9uCvkVvSDHGci5FAwNJecXyWxfJ7G3XvzKdLkhYRZsV6zUc3YA",
  "key17": "4TjMbCs6Zs46MrA5wwUV9w5Sm96RiU4jQHnf4w3JPcfxZKzNvaRmVtAUQcvrpu8adp7rkxV27Pu6KVP94ct3Ni1S",
  "key18": "2QVC75Qrhehz9i7JaAdtECsvaiDbubXiSNGf2tktLnby6cmJnLN6YLb54wZrhWRhbG7GVhMYqKfXCindQpCWXirE",
  "key19": "4dTYpjQ17PiKhvd6T4ymqSRPKd5L5PcARokEqtrrEzpaRRHQdjMazYY3iRQ9TuJLrvigcedjNKKPKGEpMV7i2Pne",
  "key20": "353GeMN3dPxe7qLwhSMm7mDuiwfN3VwzpiEnyAGLqThM7AgRZt9tJQer9NvmeBcaR5j9FcVwLiX9o9t7VXv6NKNo",
  "key21": "G2u419FbXDLQaemLZN58kLimRps6Vv2bJRmuJEnGCpEiDmYc83Gt3N9mht6wx3cthAAyJJVSSSxipJ7382Ct21X",
  "key22": "b2WG8JfCxA41L56NG8xHrj4gtvDWpDyt8ZtpFuqJf6qRocNsm8n6CyBKQFq1ixb4K6gFarpB9uHGxxAXY1ywnKr",
  "key23": "5kUEdDjGEhUuuGBV3SHxqEuU27xkGvJM1A2vUYFVynCmD22vwJoxqrruhFQmubx4R9ma2WZWBVEzbv2dxqotzMoq",
  "key24": "1MguCF4VEfSYPsjiPriWKoTQHDBHqAnYYu3iAWMfPdWMg39cQ2BsSCwbXu1eWG6y7gwH4uzJtLFV6udtTbmyfeL",
  "key25": "5yPnzXTPjb7HxTySdaE2vVwgVREnTHnWHyYhRc5jscj1WopSoJiiS9pTT4JwESaZGNzQsYMV6EJXcxyHf3vEbVXb",
  "key26": "31pcJ2TT14R29UEMN62VUyn9VVpHo4Roe65tMZuCouH9hXCtDG24WB9TtVTGXM234h5MzCFrwQ6booofvN18JeiM",
  "key27": "4CRjC1GohBsADf9zEmSUVTDgizbZwAwdC7FVKRjnTHQRFWkRdb3gxhf2h5WDMhdHKYtogRBD74dCFmc1DTqBugt3",
  "key28": "5EmeW8N9D8c2Fr9KoCA2WXEDUY2NxnijAqWse2nuzfGCMtvY3g6SC7AMohZbSTakNQrriYTXhJaKGvk15iwuAW9C",
  "key29": "CpvZPphaTB8bnfRyWLj91RYHerHmwnBaF6FaMDFrtXYpkeyXWxkFgWLLycTzH9wjfAD3j8REMNMBqi7NPv7xpcV"
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
