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
    "32H4yjdKZJsSZSyDbxaYUu8Kc9bWciyYyFrvH2FPe2Je72WCEbVuqagQsxEbo8MuZy2kCkxv5U5aqNc8hZZzU9wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gwb6axZwsB3qpMuk9UosCWy4jMW4bTFCPGzzQrBGJumqUWDV355SL6F4ZGdgYfoy6Gixgv3HZkDJye5avJ1MTeC",
  "key1": "31nt9e4FdCK7V3rfewtKNbZMpJ3ya1Q86W3ytjkTugyAiZUwSgjDfo3XFbsi3bm9nwAnEbT3RpaTUhn8hVzyuSR3",
  "key2": "62ScifdVugXkYEMa5fauycCqX6NAeAe5zaF9mLEKSHrR5GWcn9g7NipBPhkWAzvFmABYU3yfhHxmYLh1dRhAZDiA",
  "key3": "2BdVm92WHExq3DzJYcYGLuWwHcTvfxgxVXtyPFXrrda6FGZX4eViU59zs3uCxqKfpT4EZ6kyogUWLazNqhG5LH4e",
  "key4": "CNXQscK1xwxhmZXkAbu1S77qBfNjaoyDYM8jxmJZRF4NcfRZ8tU7t3GhKaLW5w9Zvf24YvcVnRJLBXzG4hkbtms",
  "key5": "4gTsPBuzXp2rchwDyavN4MNoMh92p4ECAYuPiuomvmRTxA3bnhd2Uspp2XbfNQpbTkF2zquumbySB7nfpJneh16c",
  "key6": "TVDRXCKCCUsjAJ6RiHnS8HniFShPKpLABfqc1aMkw73Eyq7Jdbv1yTcPTRbzzYDa6Eia2bypfpRK37JTY3Z9p3u",
  "key7": "3sHs8k5Zhx3k8dFrcD68QkP4j88MUynRnt6fU8yHbQvkKtw74gEsyT1iQ8m6ciSp1xzCBab3RdevyELoPh4MPBdr",
  "key8": "2JMRpK4bFJcPthwAj1HtUoN4V4vdWNzGgRMf6C9jdspJCcnLpKbew2GKpQsNS2VgKwex1a2taU77YvX2pjHxtVqx",
  "key9": "5ysYzvBa2H92vqqE1UoATRvuMXWCJcskAGwKBAv1kH5rfFNmaRjthhCaTuAeFf2jQQssRzBAt5cwiMtf18Jb6a97",
  "key10": "5a8vLNTH7LzGxKsp2ew5PWZZmcCZ6A72ugtoti57FXSc6fooYuzqp6xXPsyvUx3RuBsknHVuq2DxYXbm5vhXq1Nj",
  "key11": "3wdgx46sxFAtVgBKwzTAkYtsn5MvJvA4h5PjXNuXxR2YKBvDhNb5nGH5izfpZrRXTwQyT16MfFoEhBA7bRxEcAmv",
  "key12": "3vTCfqgsAY5hWYCRiJzhSoLd55fh1MUwAoBFHuALZwTRXihw4sjE6hz26CuB4A4HVFEt2EARHg21iL76hWh2KJ8P",
  "key13": "3ZosYXBYEtZ7fApstHTvTsD3cGXWnrCMBC6zqPVrMwLdkzfMw4L4NsVWz9yN1Ri7SZCeh9sCL1z3mYSe883Wqy7g",
  "key14": "5Gm8BJmcT8pcr2AW4iuVgzt2CRQijd7dW7fpPsQn8x7TadjA9wiXvuCyuVewfK3vv5UZaW6cNyev8z9GLPzPkyoS",
  "key15": "33PAw4eUDSqELivUmUFba6o8s6ieRuGanfbpEuuScr7EsNrSsjYD5USDcD8ayjVLgUtHZhz1mS2viXdNsiFseHYh",
  "key16": "9Nv79KYqiKpEYg83iL3CWLuaEyTi6k8wCXdfdCpPvVP5nwoMygR6BxWUvXc9MMVhz8h95jxbFsNxQDXp7j9JurP",
  "key17": "2xiHAbBg3o8eu6pm8P73d1s5gm4ioACamwWd3DnS83c3fPHqYa3BeYZPyFChw4qNUhzBghheFfDgxe5KG8HVPQXm",
  "key18": "56Y751paZQaPKPyjm22P1zHXQ1pCCHYntpZHAMqeyX6Q2Fmr3pwJU2qXZttxY4w1u9hPqkzvGmuPAQ3SWxL9nRua",
  "key19": "3EhqvUQUEZXkbsySCq7xg15mP6JobAtHBbRm9E6jLYeiBkDGNDhS1sG6PcVexQVmezDtLmrqmKu21B4wgT4fMc1K",
  "key20": "5JrC8y1oiCVQDbF7F6iuYvsPcW1XxPAQG6JdwzDxjqFXx263gwCDXHXJfzTtWmJkETW4XFnAZW5pB2b297kFNoyZ",
  "key21": "2MqMDjmguP2m4pwKvcWjZVmWafykNUxrNaXwbzq7gkXzcnkQsdPSsiA5yq2wWEGe6Ycx8eW98MoSQmeZrn2Ubh3Y",
  "key22": "3wcanGfQinqCPxJHkhwMpq3V87ZqgCA37YWDbDQ3XfncwV5C8TVfoBvWriUqSPuSuQENayZB7PhL51tdzeqvVyP3",
  "key23": "5WqSMNLowLde3BK6u9LEZ8oxWUwJ8sBYQbLkwb9ERA63JK1pnWztuECB5BYBs1hJPx5fwiWtkXx9mLTHuBZnzsQa",
  "key24": "CTRPoPSs3mdXTx9mVpGcMHfgCjXebvmAkXRsDi25GiCUUeHPcdct4e1ArwuhqWFoefJEgsE9iWKviC7RkrBUefy",
  "key25": "3okoavUTQdcNNVN4kRtc9p69sWHPHX1BzfubnpJpUuGDo2uxikURqXmdKU9sGdFAgxbyihLsPGJshSmSt8Pjok1s",
  "key26": "2w5ayudNCLF92wX5ac2AS7ge9B5kx8dNChvEcjhrvGqMBY9MzPh51KZVGQrTLtNUJkbm9ujYjZCi811t4LdsrGK6",
  "key27": "P5wHgaFwrjmdAyGBcXBYrebfGtPrh5NyBW4QJruPu1pNL8ttQWfh7vFDEfM4iyBjcXL64TkHSVB98Yjy8pwY8XU",
  "key28": "4qDzXQZCwp2CiS1SE6D3QVAKARWe24G6vALpUsJcKFcDHtsC8qwLgWQ21bMiRGGtqa3YGoApiePebEExpJwTquuD",
  "key29": "4qu66Eeh1CSxHPz5cz6tLKKPDptRzhWukDLDuyg8aYLySm2zAbicDWACP36W1jX876FyQzYfAy1Fg5porZoKgMAL",
  "key30": "HwNWVK6NZ7wCRHELbamwy7ninqMK7RHcTVSkF5jfBbtL8yfh5mBLj6TYhpe24SngfUGENb1EeHQq2BNHorGese4",
  "key31": "PNd58MTZdjBcNDiuQQuZ7eWTWmRSfaSVfe9hSYTbYuuHq3ajTBJihcA2As3rV3PFUXf8eCevfNJDoarLPzbNHCK",
  "key32": "3F9VgniKGAJFSN4LaaFvbC26TvfvmmysZTH8hTXWBND9GJNkWCTPrm79cEzRnQVKShQHtvai8aa4p6Yadn5rUktp",
  "key33": "5bAC51d6FLJd9fQ6QYoD6BTMuExvQuTVE32VxwpEroNgWHHPywZUzSCuwc2ANxVju7B6rSdrNbRfUHG3pn6HJe99",
  "key34": "5P7ipjMs3apgpM5bqayJhLBRckfQJX7KSjw75y8c2c9TcwpjW632oGFU7WHKmwaHgSpty8v6vgpkejfmEDzZSP27",
  "key35": "HEYFFCPDWx6uzVRCk6zxPbq1ZPCTAM1UVoejLrinTeWVe2VmLuNRbkWwwXWLV7eK7azyBfGBKdBr71ByaC5q8fH",
  "key36": "4n82xjiD6fGzgbMx5aje74WdQRX34kzwGdUDUnqhVm1qKvx1AkGgoUXKexu6rcY3fWGrmzA1Q4kSFoehyh3MHn4i",
  "key37": "dGW1Xx31qbU9kg6yoNBD9Qh4uWppL2Fr5BF37syy7RQGYhPxVbsdgxbAwSDVgxyN5byPidWtibPXH4DafPbT67X",
  "key38": "5eL1HLvcWhQqGPKMrDahHiVkR8LMfpAoinMMfQdBB19ZS9ZTGEydSGbyubDhL4qng8Q3ePcvXeRGLvB9E8x4xrFn"
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
