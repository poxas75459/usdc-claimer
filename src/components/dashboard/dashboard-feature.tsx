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
    "YatiLpTjNwaW9TDWXLD5yF3u6AK5us8CfX36851jwmB5eVjg4UKxXhAxNWY8ubsaT7wrZJCwbYWq43axxxK5hQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQZmNiH8reyeeJQsrifS5a2vNS7jTe2bQysKfoJJDHW1iZw8FRja5tYWXw2upreSjfLB7khocXQPQjWq1tadz29",
  "key1": "2Wh9rWJK3vr5db5pWXwGAc1yx7imhiLy4tkM4F8YvZtD5rutdBd8f2jby1AfEJUCYdWs8hcZZfJw5RQTHyCBdsCy",
  "key2": "5kMtx3AQ2xDHzQ6kvZZ7EXSqhSsv8MatmmA1tW4EFwNDF81eVP3VipL3ynjToJiRQjFtvA1pVVU595wxdYPzzdvd",
  "key3": "4N9zxeJHpjBETFLwb4dw5R9d3hzJrQihf9HXzKU5Sx5GiyDsAHUar5PrSBnqDzk9fyZ4bGU96Z4Y4HXMGrsWgyWL",
  "key4": "5z62NE9Wb8XrJVcu6wUbPVthh6SCby5157aaWvNJ3f6ih5qccxDKuUvKMwbLyfocKzhXp3yZopVUnjCkqi2FSpC3",
  "key5": "2KEfqVPGSjpY4HwAVe2Bjp1GTjegRNpSLVDrbUvsdpkAAqwvmqrDVA1487rSAvoeW48z1GJTVpwPuUaYMPMTNdVf",
  "key6": "5bjAJWmprZqwkUeULemTCv55NDWpHkZ1HndmNpK5v4zdZhvMgSdQWgouuh1Jq1MfKrbaoM1zueH7tgUkYfL4oG2p",
  "key7": "56Hr1sNTAg5KAq35c2i7rUqBeLPoV8Ayxm8LQDG4XEtm5jcJogfvudxmeW4NwfniCcQ2REBRr9d4GUD19f5Pkn2N",
  "key8": "3FJQmxtmxwTQzJnFRiSsekhphP784qYtNA77zGYEcgANqkLsajXJ2JzmQhhseoaZuVtAjtL93aoNqdKnkGP5mnNq",
  "key9": "gL7W57JYwYjMQdrkPZbimDvpGEa5eLbdBvUm6XyR5iyarsGXWH4UGwav1dEai8iRH3CDUk3Qbqkk7gZjuCzAPhj",
  "key10": "2SWZz5hDGkXVifLVA9dv9Mus3EZna5zJ5ukdDyjY1fBxwLj9ppg9bmxGMR5hoPm7dEZrFccaVYXMwwwmtqV2gALv",
  "key11": "5pjQVYp9D3QKeX7NFhaJmEvosbswnEA3Ezk7DEMPQJKMD6uYjiQpLYAqxDNdnZTYfWfn6Wr44qbXRiXta1eW6bSv",
  "key12": "5YnYjXxnJ8r1jn8xdqriyBapv1iWfJDmMssp2KXKesdnXKV7FHkrXeU8McVwkoW6G4zqCozURHRshWxsKRFQbNbH",
  "key13": "3LbSQrKg5RLVvo2YKGXos6jkEfBG8YBG8e2TF1NUAuRK3HAgaLSjLXEAaRCoeosziCcdEDFGTtR8q5haM4obwK54",
  "key14": "39Px2GidJQqcmzPXpabY5TBSkPnBJM6AmHzsxYs9g33et9m2TfMGSmz2k4iPhX2jDQmxbw2ZmfKLWdniYNkibTLN",
  "key15": "4hKfKbiiFtyhcbVQ4ysqYkcANT3xLCgS9gr3cqLQ6wGz1PhbvThiEKD6dmbmSVCEqWPyozNRGsCP76niPsBacBEt",
  "key16": "CUagKNSnkiZtHPYfkx7e2yFZiYcbiptKnuqkxPtAEqdjTVMSYtAMMgkNPCrGU8A99cNn6qLPVLvvHA8R56YdmnU",
  "key17": "44ZVWVfb1zy99wTCcuAzD79eTZnkFYXp2w9WQKZaUmH3DRrymoU8ZeCWgSBn4JqaK22x7kGjHiNkwWH1x2EnNUJX",
  "key18": "5F3EQjXnfpn6Ujjc36dswn5KyNC5BsojTW7YtG5BVew44fRz2Setmp6LSzXuXnn5YkEPPCiKZDb7UwM59b6TGCjj",
  "key19": "4CBrnrFSoahmVzhovEYdJfdqFCkWgtyexGp3ztwBHZui6HPNuPhbik4UUkQec2yHWZapCzjB3JsFVVm6UtEcSoyk",
  "key20": "58XWAENWonYsFrkDp1LBYRtPNto1QZNPbpPHBD1E6uiWyuDzPHQMxeX9fyYTDFZPnCXYLsUo3Q6c992WuurufdeM",
  "key21": "2FDuiRtT19D5ka6guzh4SULsqWp2znHEWWPoKaM5V5ssxh2iKjRzep3oS5WtTHPbEYekLR2vXhVZCusspHvcTLfj",
  "key22": "5fw9nCoHuvVS89ePUhEa7cBsdigtEFYeMXrC9qBAnyoEgXvDT9M9RUrTkoMUy2AGkkCWF1sZgnSXXQtE2rK77EDT",
  "key23": "5jhYKumqSCCTJWTfWcrkoUnWKSVu4nz5amMzcQSKAqeddvJwtgkQiZyVAEznrSJB7huhmd36cAJcMH33LLs3XvfK",
  "key24": "ESRgUFh9J2YuvS9AShCQxStkAD1bKkm3C5a5QLf8oU7e6T4txrvKmP2DJj5SkneP5LPAT7KeQmzRNHxdy6XLUKG",
  "key25": "42MZXHeDqtPWKysGo5JVLmAFv4YRW6pfmia5QVUZ5bXbpungEKxZwSnAcfCgvmLi2B4d1AZ9W5ixUNsxmwGAySMt",
  "key26": "3FE6pxUR4BMVfJPGKWUUbjB9LU4VZSVAyQX14kLUUBoGxyegn9Vx5D7EvqLUdSppAq5CspauLSZKNGTWS4maU4vd",
  "key27": "2BtFCd2GSUMux8prBQhQ4T2CKG1Y1o4rsv8mZ24YmU9bce9GFZ6UW7Gixoj4sRS14CfRTLU3guDm265AMu7AYfFi",
  "key28": "23ZbwjkTLBBdsxgra7AGR12QVJ95eSqW3dbRyMxUZ7X9ysYxV62r5oUMGgND8fN8QeZX7mVa6kkzAx4TZvaeEpwG",
  "key29": "351WjC842JS34Edb6cE31MiCSYBxfuJgsspGNpWtYQmMQNS5YqJo3JtTCjCbedfZi5jMY6XZ965fuC6yfxi4bbyp",
  "key30": "2e1JY9W8rcxmdTAjtEJRqoKVPqNzdaCwtEKEXytKsB1XCJ2BwGvspkMmBvq66AEsRRy5oQxAWaP5mRMqA5BWRV5k",
  "key31": "5GWPERHBmZLAMu96MB2qbrZPLJRnn2q6XNUDSATgW8g362CahdLEwyZFCZTFt5bBjkGiGF5GWjKqgVHTJ87zXBMM",
  "key32": "4ZYo8TxwKAtB1Aai9nncx8xDFWvQFU3EFDEXDKaLaUFmqfikrERo3mvtkPdHNnjd74n3697Ke7qhtHpnWMccvqyv",
  "key33": "2P8kCzDriY19gYcbfnKqs22JqRPR42Mg1vn38eyiN7AQwG1t9i3YR3tbwx6xWwKLSaJ9bc5ptTxvYWLjwb15Msao",
  "key34": "25qpyoXRU3NjVN9ezpVmEjkX4oExFzFahh5CeTSrxqUrNbX62SV3YHCc2QG7TLEAhH26vjXC2ARVssFvoQFQimus",
  "key35": "3WTQt9bHbcn4qbPX65TBFC2PRn4xxKUejDBcQscjVF3ZTX51WSoWhdSpsEEMXzeKnUQjjsuQJzERuZZbFrTcvW8F",
  "key36": "2C44ZuMdSQnJtr7Bnc8dvKnALf9hYiniNeZuugCzwM4D9RnySrgkzebQe1LjaJCSxciCCpkAXbDpC1EPUwDbhis",
  "key37": "3BjsTSq5ykhfkh3YY1RBUkA87wVqRmDUUpSF2KWveaZa61mMbfn81CuHs9hHXqicteXz5ojfL8mxYmqpDktsfC4G",
  "key38": "3wZxafKcrNuy7szLf9qkq6wzNkjGHUm48g8MgGxQ25KAtajChvRBytuaQeBc75W5NWyy5D2v3Z9cQWjP62AN7PKV",
  "key39": "4XdH8Gw1rs1aq6zTMf9Vb5sp5VTun3d2zUNozAcgaScKdHWUxuSu5q9kXo8pxcadtgbGjfuY1CHV8sPqTzaa7ph4",
  "key40": "4ckZDoTNYxchP2MRu9QnmKNmYxxyikyvpckTjg5zEsqaw6pUQBfQDDiHcQxDv8ZPUfhr6o5K7cA6BmhfMVyNydFU",
  "key41": "3yxdXFzyNcLGApvLyhn8qLziPRHg1mDysJcVEaKhkgDeTah24Go9RyxXcvHffjh9aLY64PWgSw7hkf6LqNoYFbHn",
  "key42": "3BwrZVF1WXHdYKJ96ViURbDXEAnJUGcH6gp6XHahKCtNXEMzXtRRyDyLNg91v8AXyVaEPHMkfG1SVWKa8saHbJbP",
  "key43": "2cumb9rbfUb3PUhpoHRswYuMZgjHrjoVzoDPLkY2yf1wVVjwGm3JrXC34Yi8PPkvEATcgkF1f38wopZfbBSy1qjg",
  "key44": "4moWi5cPo9uoDCW73dyTGPHFLJ6zVbrkGDVaK4ZXyiGmVoyABGpcwSZn3qtGEckwTKThwHUktTNKhx3LsQcPaGBG",
  "key45": "tkaViS6r5rspUKW8uGojExBfoGhjYFoaM3fx6Gazkkk3dTTV7ah69EsikwjQQbLwARpcTbk5XzM9obukNKWKgaW",
  "key46": "4AjSBam3AXDRsT8NfbS5fdYsTQ6gwyKVUwUxJ5yYQFPWHBgFJUqZ2LF5gm1VuyvndSQy3A69JThJhsSJyPTmvPWp",
  "key47": "3LUAp4A4J5XFcjWoptjWRMboppTviwoCoX5wyxaEKtoeNovwVFHcq8Lm7nq9iJ3yk5WTySpQTFK9D252bZN2EiYb",
  "key48": "4zyNUCDLC76LPC4oWPTJT9bU2RbYah4gsAh3SQnqYUaMe2uST7quHQHbwVpS6ZH3GV9RyMuWvvwUVBpePBMfXexf"
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
