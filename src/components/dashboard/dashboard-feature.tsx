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
    "4R6fHv6U8WVaQ5R8jzW1q6KCTgQb5TyFtjsRuzSAKp835NBKYxEw8AkQP4V9arA8LmKochhw76Nrj7CbHdjao8xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBmsoKfRYdEezynKZCfWYStdBM7bxY1ZGMPa3P4qeSLZdoRNPnQHQP3fnFpd3xYVwUQMKzdqatyPrErDSYj4yfJ",
  "key1": "4Eq4m8TEybUPQ1q8UHGEbPGdABTsrphfm9JoT6kRN8bF1U8GNd2TuUW8Gy6JfbCESXDWgm5BPwAFaP3NKWFMCtD",
  "key2": "3pgfYFVHfXVrmBg8eimRNjB3arJwzQx3HsWhNnpLm4g89TpoZbsC4hLAmog9Hz2BAieiamWyvxyyH7CCeqykJxpQ",
  "key3": "GeEuYTbTqVRZwgFUDG3j8jmGr6v6z1cMy8iWrPC76DLwyBqK1UyK2p34GGtyY75jNZJqxYSwyk1h1LtT9pQNcc4",
  "key4": "5n1yUzxqjj6TqJToNnmqkCsexyXKo2e2Gy9X62SyQLGYHpoy4j98tk61qRKQJeTncnnVTNYjcEPSuuuynzNzpqhR",
  "key5": "hdyDPX84hx1ifnbWGcfZX2PZPV6jbePGe81twaC49TiPWXLgUP4Num7MuaFiJA4MAwGvFTEziZDL4MpRUBmdCQ1",
  "key6": "TNCGQfUVKFhhrPGQZZTxCxcCSzdNoXAV7HejP4HoH6XugG4RPwnXMrEgpQYZ9FmyuKVeUwc5nbWFgiXweoi2bYN",
  "key7": "2Tiy5P8xvj3meBYhF6E3AbRgbsQmvWyujEDCHuxAE68mSn6aXNcpy6W47HeGUZJfXpG1WqdHFrxqiAUHLCHVSbWB",
  "key8": "3HBZiuzZfgHAm5N8XYTqV2SJPk5FnjeQhBxURQt1CioM2asyqm4VmtAiSfo8xBg476xLZ7qJWwQP77jWkR2ZE6Y9",
  "key9": "3bKPBoPq6UHKamKn4y64ciyuN4yC84fBwcVBRWRMmd3iBp1Kd5ZYCsLS7FmhRby9FT3VZLGF4C2E1sH3k6bwsG2x",
  "key10": "xHCShzvjwTc2kw92snJpZoMVXB2XXUAw7hnbCytCq29U3r6j9kmYjHSQUeTj1D7Ae9vR1CkzeaoQzMip2YJFxhh",
  "key11": "5Dd77A1hAUj5Dq7tBpGeNrAwjoyfvvuAHWuV9dgrt32osNaqTQZBrRSTcUJdB9hTvbdiekCMS7kFcsTEW1ELAr1R",
  "key12": "3oqZprprXeXJa1eoQkeb1JSw91RswunUAYKTZUJtGWF2SkLkVfkDGmZudpSpX54kgTX1P14mNtoS8vRhj79QHoFF",
  "key13": "4GHViSjEYfX87AGoUueKMeUxncqprn1AdZMCmScf2RJvpHqGpwtkJv4GtU3LXtYasv4WEKMTSrq29wKW6J5pCBCu",
  "key14": "5F3Qn9vmAPotKbVQmzzK6fGnGwdq6VgHbeordvG4M7ahGPwQ9Ryf1VkaBE6yL3bGjt8oDgQrYWgp6xn4BXUkyQXf",
  "key15": "4YCCy3QySKLNVZRvjLGUb4FPgZHK1S3pgVnwgTeMZRbHmAndyKzRzLS33q37hce8KbRBrzpEYnXvqgWMMQtuhe2h",
  "key16": "54sFjuahf8kASZ4CDwxGufgN8WtPpi5kjFZWBsmFV4JRzGafoNov14rH3LKXkipqmXaZASjMUzLNsRsdUBGskeAW",
  "key17": "5uqpTJXhLUWJBDHuMjQV5xYYprPPiL9nqLpTnVurLmsQsyzjox9QTf1Ff3hnzFtqRCujm9oAAVrsGJoqaTLmXZZz",
  "key18": "3wn3sKvNsiArJUqUHEoshALNpEBVoxcSo2YvqxsJvspsWztWGwBxatJSVcAr7aaXQUM1iim7wnZ9gW4PAiyb4sEA",
  "key19": "Ao6479BgdQMspFHPdEMcgjJ3qDJj3J7ZTLZB7HpYTAXbZD2UH6Z6ktHY48eeDSQJk17bkYRVoXz1tLrELaQihUi",
  "key20": "6241mCLAsw6p8cc7edTg9i6KhtU63JMH884keFKZpV7NaXgmgNMJyVEzZCTYYGA3xUrJXMtzotnjYihLZz8nytTP",
  "key21": "425XqBWh4DQfDwxijU6CbJveXbB8dZRCQYyu1L7B38KVM3DPFw4DNXdfYuU9gFSTf8owJdrry5eb92tRsLrZR8R6",
  "key22": "diqwRTnMqq56DZcbVyeEswknfSMWEWjbcqrmuoBb4VXxXaRdT4Ntd95utUrpYLq54hLszXfAr8TyEijVtysgKxR",
  "key23": "aRb7QXzN1MeTy8xNhyLc6M3mkMiuzrE8RZen4TeufBPX22M3Kgf95XZLiwnHCPk45TZU6fJ6BsqFU4Np4RxGkH6",
  "key24": "4D5RLCwjmbshEqccg5yQtM1VoknDtrs6Cg66WELKwZ5opoGcQrJoFTsUSaj2wfNDXfi4VfKNkcoj5kJK3P3AvpzS",
  "key25": "5woeyonuDTmr89RwX3TMLR7GrwqoQw8rHq5E3GhQzrLtEy75Ckc9HtqQSb21nq3LDG3G3NsHv1vpMtNMuRcLB2jL",
  "key26": "5sPVpL8qoh8TJjQPai6hBLhf1beYHPzWKEL95U4hSrH5enA4Cdns84pZnLatDabtvPcfQr9Nina2qTBVXhJc6RsS",
  "key27": "52LHsX4Rtpda7UGSj6ZNNNPgkecBySfxPVo8Qtk7y19L8R65xaCQjXUDR8VqZxLZkfa5UVYqfk5gn6LvoDJdfXpM",
  "key28": "XkYmbnEDnRBsdSDTkBjENqGVRhdkRM8a5QB4XE6yPVec1rRcMYRAJsVYztip6ibk2MfktgThsm2miZHeZMtxJKn",
  "key29": "3MzrKzbyGUkLmRFYgZ2qGHVD2LnU9cj6fT87XWyxogXWFgYQQQtp4sqTW2ZE1sF7ELzZxj1WXLs8b5wVpNSe3TF1",
  "key30": "46bD4qsPFZH3DDH7iMCnGsHbk3KPSPkz6YKtGW1iyuyjhda48zXgpVakCVNAokSjiVW5WZLs4Pfsh1ipaDiA2xGf",
  "key31": "4karTpb2S5RBow3865tQ3u9HyzrQHLM2zCRVNJmhacpUaiWDv4hBR9dmYYTXhUPc6t49VNLLB5bM2A9rv6kJgSH4",
  "key32": "4cdX22HnpSyen9Pft7NUXmwMf9PSmfb1bdeCS52LMLXw5ycHz69ghHK7FzTCbPojM2x7xGp1NQm7sPE37iVSEoGX",
  "key33": "ib9RRv94MhfvvaVxpLz554uUFnFQnCjMSo8LVXMFe1YNaVrcVxvjuRsGt72kV7KvQXVKrKom5qFZckzyeFBQzVm",
  "key34": "3pFo1LHeWbN3n9GXZ7dhh7hmPF5K74J1BPexUfq16xhRLCJp6uk9mUu8ksHjBgNZEgU44PPa3cC4rCXL8uxk4ALo",
  "key35": "2UHbxBVgG1m1ujwxx9HwpFDMiUfHDA2qS9LwKs61Cpyh9jkWuYQXohWbmHMCnDgmBDJyX64SFwLVN1bLJxTWCUK9",
  "key36": "5tfAfpSoQPbtcbBV65NGYHwQHd2f5ex9S9gb7jYkb7tsWUH6J6ovEHw3kpJ23RceYdbA9SVDSziTrmvzb4nWvfvm",
  "key37": "3LhV88a6qmVapTM8u52eREATeGtZnyDRxVAMHj4oXCv2kZd93ESugB4pikEJh85LSQED4Z5KAytfNzhAqL8RUZU1",
  "key38": "GUarLZkqujRySyAnqhiq9AvUpR3pFYqu4nr7cSQRpDGpftu9PRrkShwCTjjfRpmWDw5VHMhhQHXPB327KXAJ3Rz",
  "key39": "kcxzHUc7WcKANXj1grmuAPVhezG6zZGDXcRrTrUk1mTAaYJwt9Bdy2b852Lvx8i3EQ2Sh8ArEMdj9Th28wyiFN3"
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
