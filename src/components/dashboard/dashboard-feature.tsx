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
    "64qvfwxVuSzeoLKieCqeK2VkJpPVx658bgSRFJF5wM4YShEKhKq9LFhWqMh7hFJ1rsywgsrr9zPj3rYrX515hGVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2uhbDTKrLxAaTZ6BeddHz5v7Pgvnco2UoZoZz2kh8hHm67sxZWwcX4kkxqop3QMSetspTKt4fptdyPYhRuaV1C",
  "key1": "2cxSex7PcB543XGbCULy4tfvfgp5X1n8UxpjHcaJ5EJwLNX1k8TwHmMCXx9AMGmeBVrz57WXwdQ5sjn93SLytxn1",
  "key2": "3KpJLJJcncKGHo5FkkhpBAvNYknj2LTw473PmREccWcD5msLhVfi6z3b98XNgaZ33k6AtJhQLcjkQc67SSMrLYkd",
  "key3": "4XoBvXZEn9QxUCmbTHKN6vSsSehNgRYTCkc1w6hYYJhK4yagoASfLvBhjoi2TGGjntdCho5Tu42rP6T6qafEE1JB",
  "key4": "3ssxejwS1J69j9LmfSpDoS7rdZ7b43sC7s9nkvWS5BWyMKNQnSyCdnUt3jpFHvkqGqH8cCYEmLxRr3ruUJUa1FJC",
  "key5": "5q77BrDCtXGDWU7HssqNLtUTbLbp9rZf4S5m1knnNzAA4kT57rBuNFJ1hQxC5CXJDbPKLMuRT5dQH2jx3YJHWebg",
  "key6": "4vX5ixz45Vwo5vQqa3iQbjqSeyDQYckwZ9F4HtS4GU3iS9LxRRJ7mdPDFtcfSsQRj9f4EyrAGUBMnQhdHTz52Hp2",
  "key7": "5VG2r9nY5PKGnZm9FqSd2LAjhb4SznRx92HTGtw9PXq6QroPmm67XDT1ZpQVbYAV4kc6Jpab5D2dRJTRvaEDQhuH",
  "key8": "5Mhoj9mQd5CH8QxBZZUhoZoSYTVuzQwdYNzn1kQ5h7B86QCAHZ1oRWRDcmsu4WK3HLb6gdBnpiivroMKZx58m577",
  "key9": "2vri6n64nPTqZ5ATZDbdRLgMjTrXAyhR6yj3ubehSKLggQrNtD1YiWZ6hcUEkDkCKhxiSNAKsNctchTGpJB2kkHZ",
  "key10": "4jNt8JcKXoHQPByKgkZATsNpwSmMe6Cd13Pjbmeuv73qEwaFhDFP2DQ7ns76X78NLRFcpMvEiyXKRTfo1jr56ywG",
  "key11": "2dJtGqyxciyDjY81Sx4TWwGcRFSvowxoybXKs8TjwcaVmseevKKHTPhCZkNYYCdaj5wVZ9GTaiQ6QHWQgTfXhaVi",
  "key12": "2GM13e65mdQPcuy4S6E3pGjaCbejKehu1qB9n8sEdN4bocdtBfuj6iSVe8UbL15u3VMe6s5mvghS3K1J52bMa9km",
  "key13": "4NJ2rgb6Bbb2hpLTeeh5bv7DUMCDtTfSNrcGoVTm2Sx1ZAhSQqYYLr4TdGU6oKJVAqT6mvNXqzpmmeNHFKPTRYvK",
  "key14": "2MhVHZjxLLDjymPytAxotSjRpyHWeEASwad5j7ix7ZcaS7tBLiMb5DRekcFfJ1WtPdtv6Y5vBHJEfcQVKaNuAQXj",
  "key15": "4L1EP9JAUJgoHGHa68UjSPWWdujAFE84PPyaE1LiS1pbkiW9SCHwnXi8DwBMP5ViWoEwQb7yvx3qXL8AiAXHiaZK",
  "key16": "23wPGAdEtrSo3n715NLFng5V5q7xYYFMjsuzZuTkPmfwf4cb3sJiBjcWL1MSm5wnfREuvfXx6UYByMz9PMZYEXrH",
  "key17": "2ceNE1N162utHnFNXk6MNbSLoi3a3owmV3NiUNnPx52LpxuE65xz5RtzbGhTAkF5dqmwF8hKw4KkJGdKaaxEKCMV",
  "key18": "44SETDm6irhRde2CgwU8CyMzsKnuNpFNQJrH9uZzs38wMdTaXsFC1MjUGH9PxQ7FfaEbdi9eWQEMJ6HAhLQ6yQK2",
  "key19": "4sDbFmcGR6mJbSy7s2e7oDFGiw2vf7jEos1QToittknqBaN8T3y22E1YPF8PsDdefd6RAi4Q7Dvus4XqL2YT9V3P",
  "key20": "5zKPCyDcQYdN6e3FwiLASy2T1txPibijEmh8WXkAuQ4CvngWbe5vWKeCFp6BHW4tsKmRxNV3d7T9757jhpVUPqfJ",
  "key21": "2PetUhMVFpiZ65i68TZpXfChScMKG3zByz3dnWqSsTyH2YofP46hWMskbktVBiG6YZyLXnsa6zUi5UDRvqMRMtUb",
  "key22": "4YQi6NWWFHzuAG6VmdaemFE4218VcH8DPDhsyLS12a1Kj1cnwr1CNp9GUZJhar9SXYXPd1TdudHBxsnbEbygiTdw",
  "key23": "AeH7vjrXZTJnMq3rhf7soF5mw2oTmfkjeujCHwzL55xtrrSFydSTSkrgmPmi3RffZLUDvdSEogJzxsbbe2dpktv",
  "key24": "4ACaTo7XkVibsM4ToU4DvDR9tZHx49QRhoAjsfGLEH9DKY18ixxTBzbDUJce3gusCBghKw1d468rEkL73AUhvdb6",
  "key25": "2PBQKV9z1mVKwdCkNNp7nXzYPhBC1NPifo1SPijKNaCiFFSEMFppgFRpQvJQ9ibJg22uphXXgbH8bLuP8s9ugb97",
  "key26": "58MudaPdVho7gM72ZJDQ5b9Y38BYRBtMNhtWAkNjMsgXb1QD4HWk5S19chEcA81ujSU65Gqy9Uu61GM8YqzPT1B",
  "key27": "5DDt9Y7gEZzheF8Q5HfaySBLV3yDiJUw1o7JDWshB4YuxyenanDDp8bBHRP3nf9TppCX65VdvSZHyvrvuSgjmBtW",
  "key28": "kaYoRDaSCBChZ8xttC4QDUn8pwy1sAR7qieVkp9XKFwZgjVHqB1HEwAUKJChfNWiUWppex9ovjnpPYLAH8gGS3D",
  "key29": "44waKPmtj3h2dcrr3atmcTZxqrkhDr7BjafMwBJK3j97TM4Qty4Yr1Zs5WsnHFgKekrn17NuaFw9NvF6MN6KaWRg",
  "key30": "4MGgc2NzBNouktpUkcGM2LcYQqctjn743B9bxDTmFNGAno4U1c2heAAUe1bNbFit7cELPknE7U1ASqV95gRfMKa1",
  "key31": "5Kq7wMJ1Mpb5uFyxSWN5TuBaHpXgHAhPwuXh2J7UJDWPkb5bEyjc9f2ekgJbxy3F7iECM3K4GW6HmRZz4S2LHYz",
  "key32": "3Af4vspGhPubQhydrEtMN7tD4dpEo2wSJrFDwJB4oWf9s1nrzzU6mMGQUHbibXE4ZvRG2H4NiDfbjTFsEnMNUZ34",
  "key33": "KuVVytjbhk3c4Qikqcfg5hLro8mstfwn7HSVhzLX7pdxkWS6ASVgA4ny75PEduPnCCHbs62Gc7vpcySabwAoGCh",
  "key34": "5YB6qXAzhsti7UqvXTv7TKDC6ED2KfUKZCU9tCkDSakWBY2RmkavWwm66whyi5sjwZ2DnA7j5NRDnVv2e4qfpovw",
  "key35": "SMaTqomrvepBCGKpcSDBHHxyNHu5w27kfnwoFr5UVVRnKGwsARnSdmMN3fFTQAMmCb2jeRsrtFP1EYd7X4x7pTt",
  "key36": "2CKAoRXWwfAiaG9qAUzF3aqCEv6kDY62x1PtSnAGvPseZ935Uv5WdfL8nzLx6M7rRGxEJun538WoJGgzK5duvSV4",
  "key37": "3msMbLXrD1V7dUFhab9bZMNCnVnTrrg4SfZwYqb5AStq3RT4Cb4aXcfJPprebzQgREu9Tb2UCMucL6nmDuKEYREG",
  "key38": "56eTEdBf1c62LmjnYG5cGg8NhiaG7WrB6j7cpxvw1EcdFx4YnjdX1jwuzyx6v1GCypvw7nLyDdaBgaT56cfDBvZe",
  "key39": "229d75VSGwTuVNd63UTQ7KqPnBc62KBmczuc2Au9jv14gJBiSaorMRGork8sP2a6VTvVf4pPAfowJEUvYFM8c3ch",
  "key40": "9Egg5EANi5a16S6YvZd3EGdfQ73XhiMeou2uRbYMD5RYy1EZ6tVZsovRjwzfECTG3FJyngzjPhzxn1aEQto1tsQ",
  "key41": "64MKxk2KAec8JN8NDpXgwRnDF38xYLxNv84ZFfhhGcXzA3ra65x5DsWorjVqgZgHwpV8RQ5eNYdR9KJEuMSKhpDS",
  "key42": "5ExJyPaRyVrNYBUZ5fyUAk5WyCRkDUnFAiWxwuyiLz5d95EbuuVdpXKvz8ZDsjpsvcr5aAxbRf5MnyCppCfHVyPh",
  "key43": "4uZ1Ghi1RiRV2zexANYPy1iaP9SXrt56yhgbmZJ8owGJQU2oCcn2oZXWuAG2bYLXWJjquCtSL4LgAfMY8zrJZp3j",
  "key44": "4baVzsnN4pAA5qsLey1FtGZ2RjhvWQgsEDg6C2fLTPuZJ3fercenYsxWB3Srt7h4VYbXQtqtwNy7QeYH1twtjjyy",
  "key45": "FA8j13AXJT1FS1NiMaqpjbNeu9N2D46bT2NHdJdjsacrWjSMKg69asoRGcJG9TkJbvVdGU3byK9wCrSGVKLQcm3",
  "key46": "kYcMapbqzSTvKdeLGxg2xsMA4Ap9n1v7kPR49obJcH5iuQ1xQhRVmaT2pqbNJuQgVhbjcRaS8vxyxE6CFWkTF2F",
  "key47": "VR76KBaEjCGdpGyP4pwCRN9yZMBY2ebpzg3JLgTNFY2UJwijw9QLDcrhPEQcm3j9oGqmAA3NKo1TrM3afsMabEM",
  "key48": "4odrhfnF3UcDcBf8YTvbSshGGKonmbGbCRGJaa6rTt31oj9mXaXGmeA38dtUqyPgAW2aj1SbqfSWwubUWN8V9eZJ"
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
