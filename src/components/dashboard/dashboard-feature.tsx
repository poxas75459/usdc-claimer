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
    "62fVjyB2zTjULnRBcBLN4mgoGcg7abzAYbkX7kHwsQxY8ujjABXbLv1QsXfmDXFn7uFk57riHzr6YJMS4WqNfWQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6VsmPREaqLAeZrKf6hzHua6acsEZiuymBBnejPcxSM71eh84r2FFMorHcneUccs31n3kqoPf64oeQ6Nt3T4BbJX",
  "key1": "5sBTnQxYBWWnFPmtP5T6qkvHZFzAynx4ZrPwoFz68bVHJpwuqPZic51Smxw8qsGLrV1crt7HEDn49picxN9jkyGh",
  "key2": "51A9Mu4reXnMRiZK8J6JpCfP6DXCg7fV2kRQVoyYuyXfYND8RqCSh1jkY5j7yyCbAaCZzuP2mqUCVNAZwBjrV2HT",
  "key3": "2xY1uhqnwRrZ7KwuGWt4miumJnhKTm4rkAgz3Md2UTMXkoZBGTLkNGsPQi6CDoQspzu7aRjEYHqwtn7Gfeha59xj",
  "key4": "5ihQQnwxQL12qto3Yis5BAAPCN4cVEe65tinunhrgJ9A33a17BihPQ8fdTNEDTi292Q5tBtmqygVwFdrprYUCZxs",
  "key5": "4VDeVZnUdjnJNfUAQzLDixFauApDPkajo3xBY6Zz3WDWV4LTSi3dnTExicxUvwGrnuwEzdz9vtctP8PWDaNTmCB4",
  "key6": "5jv6YC3RdiV9KdQmhFDKTXM4YNn2fLS5LA22uLzTo2tCT5NjDXbMtrTosXKmph8xgYLXn3n6GnkFbcwAEbW6QbH3",
  "key7": "u1nYDHvd4ya1E67PHKuPUu5F4dPsF85dWQoBpEuY953ie26x7aysBJu1huipMTte8EmSrKWhaqK1W1fMW9u1fiS",
  "key8": "59UcdbY6fRRHNp1ZGqRCo9dc7XYaH6ArggUNJY8xNQQ1jsXUDpL8q6FhQ3kTDxreaMrnqqKKkdnx3tCKtXq4Zpr4",
  "key9": "3Whoj1xYWYngWZqtu34iq9LqofcT1HyKACu8TPgMurSA81Pnv1xoxspWRQSyYeZRC82WrAv6rdzP71LNELuAmdWb",
  "key10": "2P8L7qCx7f1LjR1KSRwoEokcV7sE7zfBRi8ffiLtP44rBnwhrLhvAJryj2SpXdx8VhUfPTJfhSsjqAuAZy7nkuXS",
  "key11": "4YzFzLRDXNr4icF3nBzmxsGAzYSnHgCA7s8kdiPdYBX2mNbbCWbqqEEDfD6cPZ26v9JG4kUngkJdKoVRgP1tBxcH",
  "key12": "54ddrihmTr8QqxTw2De6AHcMGLjvaq4J5VRBDaEeKW4THRBdfoowa242aLvMnsRB8yHy6MR6vtoo3UonscstDjyG",
  "key13": "3yD1VYHr8mgjwLnoKuAqvceLi1yumhw8ZFu2sLidfdYuJjZVVVr26Ak2cuThAuTbudYk7TH1kx2AENkKoxvRq6mz",
  "key14": "4ryTEkE6YE2TzATCBxwLL7gptz7ak1ocX89gqtUJCG7eRPc9s9eb6BCGYiT4eV9jQUddAhKaA3TjhoVKELWNSSnA",
  "key15": "3LA6P4S4iB6mzxrURNdQ7EoHjWd2am2au66KURrGm4xLS8G2y47WsM6YzMCbUTSmQhkznnTZx6Niyw3eN5NimjoN",
  "key16": "5tFMxipPmtW99bEU3r6KFSR1NEB5js3b85FNdW6WvtsX61zjH4hUZyDvQpC7s8sNbKoRjY3YDGRN3KoX9NVzZuLA",
  "key17": "5WF5zWdrNW6EpBJW2B4BsbSCcxXCD5FivSVvhbctbRHYT2E4N72sBrMuXYs8RqXNw9GXXKHYSDtbPcyYqkEX5Pcr",
  "key18": "2wBHHrJm2R9cMS3L7ixc8zgCA8wyzTtPuvYMhN6ezXbdmQKzFLPGWgzB7JwJ2HLUE6JURkJ4ynexTcyz23y7ntMD",
  "key19": "4p8kDKuX8ChGG4jMNcGJq2NFCFUTWVnrgKvfxkiYrJWMRXhUBc1bmQpycWPfFKvA5uTaMVs6fMgQULkZEanGx7TY",
  "key20": "zeHunq625a438mx39MpWuNp3jLZ9FexAiBXBan9UGziFS9hRQr6axn7ZjyS6dzQepGakP5et4YuFQvNMfXPLgiP",
  "key21": "37YZwezDDwQ6dDCzZmjFznvxHawXgP7BYqpTHVeC6DUf7g4NQ73FGG6yDPNaMXQ999kdC1deV2AGgMxdcwBQWbjG",
  "key22": "21QDt4KcHoYWJQs8148qmj8aYtj5X8Jpy4UUmdkRig92ij4Xkd6dFTX1rN7zR5tvwLMM7Q5VA47T6aoAyH5tjktk",
  "key23": "56F9MTSmej3vr2DgF9iPmZWwHXS2obgEfZFRTSaNCzh1mLLyy4Wcbat5Ho3YiEqWJTsK83WgfxZ76nCv32U3WrmF",
  "key24": "g5JheMv33u6SDGKjd1UyiryN6RJzh5EDTKpgjb4R5pveTD9eEXGVmVKwjpX56sBq4dTXTQDXBd9smTXeunYXua3",
  "key25": "tr4Q3i2tJsCRz6aXw8i6RNxvaaWXYj9FZYYA3KhyEESGVSKYqbZF1WLnFvjpCUg2H5zbzWZZZTLrroi19wq9Xwd",
  "key26": "58WzGccfx22W2FKPj6nAKyEJ39DJ3KcoyteKHoYSaa6U6fB2or2hqY8qZkvRByw7b9VpmjkLXivbM6j2J51J7osP",
  "key27": "24fUnEis3jw58SsUTank59Born5HZ1haDpaDgGhXPhjXA4X9BwPb27feQSMo9XbPEiHuNfoL9p3gfVqxabMFoayE",
  "key28": "4c54RYChscD3pkJL3VdMvbuFamR34mmd9W7QFyanL5w1ygj6GxJTCayKwP1CDE2U52j2JaqueACMC8G4K2eG2Ro2",
  "key29": "4wqZvvH3Ds1GeHEikX7q1mSMi4o91bKV819n4xs9p8Jhw1r2ZD3cP3oaUGopqrnwSXt5ArgdFFLDHjS7XzSn2K9c",
  "key30": "3NsSnAHxL2gDamDihWZPvRaRXmuGRKDRxk7Xun48cLrPHFpPjkmqdZsoyShYTzYaT8voLtkiJfqxVzau7y6CNK9",
  "key31": "549GYRw5ZQSir5DdicSYjDksxaF1CFnBv99pSZdPMNw1wRJV1sDKhNU1i3Kq2TMhqjPkh5mVJQkPQR4mX6Qn9xTT",
  "key32": "28XjWa5jB9v7Z4ii3KF3ajBWcERjgHSVHVHBccMkKMBc5nAs4CFKc4ntcJQ878zuPprJsFVE5HXeiRCy9eRkdc5e",
  "key33": "2zhqLPtRoSbMaBeG7KiMTTHxVHJ8Hgw8At9qgPqvKCaETBGvneMDsfPi3HZh4x3XqPwyxsrqpnYXo3K6LBnwSvpW",
  "key34": "GQ9e33TDSsq7wX7Nj8c3g7u9i8mD3ucaYbvSSbdS6xx3kb6myCwbc6EQQehfotnmtaddgRKW7qsiDr3sFSti2CC"
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
