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
    "5a8SQzQA8LBo6cLjgkM2PVfQwd9Bn9jckUqAVw4Rtvpmi7ZrhCy4NQJR3CcxHUPQdncHyNVZf2S5eQiyB1bn29e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3nqFPemghBTTt3Vw6LhM2qk1oMBm5Q3SwjRjQksdiTdDGqmnFCJaaP7E1BrogfDU9dxTmpVvfLnZYKi4dFDqYm",
  "key1": "5aPWTxfFFxiKM486H8AjkTPRX4X2At3dAWtNVEpoVpfiUcNTxhmcpKs5WTc1T6urHHkFAh1kkCEiq1pGo1SGxaDL",
  "key2": "3K4WgiM65SRobAT5MMXCgDyRYcaD6qwkM9TJfVPKk8QXK5vRBE4z2yrFod4eeKToGPcbfZcxXYBogHYF26AZXUgj",
  "key3": "5Dix3kcwywtZN1EApwVpScfUqjMQ7DVZk3S2J7fVz9DwXX6gVpW4QEyfgcSmC6Y1s6FFmBW4B95CynRHzXke8Lka",
  "key4": "66Niv7ferc29rG6sWoSML3EoeQLV2BR57amNUP19QWLK4YCHF5bNZ9LzCxpBBCA1X96mwxpgimPzoDQ81JiAZ2Hd",
  "key5": "4HxSfD2VqBG6WBc16fe2ZrrqFGeHKanwzio2zUJz4ozymZ4SPRjPTmi1VRdJqvJCSaWfsk8aZ2X2dmegPNzgBEZh",
  "key6": "4BLCDN83avPcRHFn2RyC7AofEj45amppk8K3anVK7ebUVm96xDj3JSXf9ViWQJXW6r6i1zLgMUy5HSexT5YGuBvJ",
  "key7": "2swfXSV4jjDMsBsxMpnzHvxiSVVVQjKsX3i6A4y3VQsjgNTTtotMrRYEUP51dYHmyWWFo5wsNx6YZ9GFKphmzVzz",
  "key8": "3T6BYJk3L7Bi8bwEbzLzuruoSMHqswC83VcRKeqdazaRoiSeRHTKRox7Xm9b7Kcjo5jUMmksTZbjRk5Rqnzbe6fx",
  "key9": "31KzYBVPJoX5VF6S1fdToE2bAP6EnSbJEzihgoeYwrk1j1rJQoo694Z9Ua79jZT4sJfqfHirorujfoZkijRZ1pJi",
  "key10": "yP9xbfqPK5X7SZ4cXtPZXviKarF5kQ1HBZjZ5K47iLkZnjHC3c95X6qLywHA5ceYLto4GkV5AZgyYwivhn9eLcL",
  "key11": "tkPAgK6taX9yTjZhRZPeiBSiurngKk1nWa4HiNFUjmFj2CncaigcXui5qt6m5DbNjZVLSLLs8ahHBRKFNHAZBUf",
  "key12": "u2VUxbGw8tqoZyms1gX7eieEHMvLeBi8GqPVUL8tNsLvWn8CkH4zQHHgNqA9nYHvq9EcrdVnjJQohfpH1gBmbi4",
  "key13": "23PzwyuDCkdntRhrgrqa7roWijHSnPWf8tUN19iWVqwtLYyN4yMiYrer4h4GKNkruuLkyHgXWkktkVrbhnZLfic7",
  "key14": "TeFUxrFxFtzkYqT12qVRH9V9H8kP1Qn1vvwnxcwjD6tA63JZZhT3WswYpgChpBHdAif1sm8LvbmP7Ye7BByPEDg",
  "key15": "mJ3rmmAreTed959542d5RmAXG8BJkdoudXP4XCY4YkjxqMH1Jtk7rowZGz3BK7NFsGF75CnuyeiAfj1FRax2AYX",
  "key16": "8GQPMtPXwWuQBcgHk5mVyenbBkWZHSH3TczHV16h1F7U5DDKzi3sfuyqJaFcZ7t2ucK1bMG41Kc4EMFb9rPpL95",
  "key17": "53fpmoTXZDs8QTHmy6Mx6Bjvx61fCSTjxvfStx16ze7LDG9tYKN4VnGDari6GXi6yoeyroibeCdFFaTFws1dC96t",
  "key18": "XwF5Lk2MQQs5E9CwsBhjbVKMQFQqnSgwzYwboLnXSrma1CsgwHMwQRXeXZCiHdwDMkpEHcoN66rpAZg48JtsU87",
  "key19": "4QqSYEnrb9uiHoAHVopPWyfnpHcepDpUzUoSxSBJNn66NujqPvLYccCZwHjU6xbZUELpim1sLQKPyVu2iLpYFh3w",
  "key20": "3c1EBum7w4Vq43rDFRBoZPVZyzcHJEkdkFh8UsJFUBYcc9q6qFvbUzuXGntUChqAHWzbkcnCW1vwBUxitz5e7wVG",
  "key21": "5PeBK9K14TgPYdRykQBcq8G1vPza3XTfd4pHYBB7bvZRrgTSePNFH7qz6niXHywYngAhMpv8FrGp23KVMDWynMXR",
  "key22": "4KtiqLuJK1EM6sxsSwXHyPcLbmD8D6aEqZPn29Gb16zRrFBVyGvS1z5DzciCMawuxdAUeGRfZE7HwcYZP5pr595F",
  "key23": "7ayGfgpXicVdnoaDzexPtWQFPF3Ybr5GxFJGAzfb6wSd6G6WeodpqyNqkzSbMKthPkLYj9cs83ewTPjrin4G7Tj",
  "key24": "5xcoYyBZExRzjzUzpRUecqQ2tvdKDvjvrCLejzL12QPiw3yDQfTF4j92uUVo2mcHxtonriMepGxZddpYMhi7enTy",
  "key25": "QHJb7juVLgb99peADoAi67n7cAUNLk48BPX4rpnzFPbQy3K3HMk8n6EXWNDoaP7uoNavfazT2L7WfceCAcYxxYD",
  "key26": "4MnjLxiqSobidsU6nB6LEf6qvAHwmLJfwYb5jbBZni2A8pEWGUXcdAN5xpqMxtSnk9m8J21vAWN94L1PjuirhPxY",
  "key27": "5yVekw6mUEn6M1gR6xfyCbdPyJm1wnd4MVuuD19pK24ivjztDysgcLBf2iY2tg5D9ma2WWsv3kFwTNEDMpSbCvQ",
  "key28": "dCT87KwrpPR24aozp3HtTupXBwQb1q5d9PpWwZSQ61YGphuMf6tXnFYTafhXzey1uQvrKHNZD6yn4tAKX2tE9MN",
  "key29": "nq4AhEYTeYmMdhAjBurEfbegtpeFt3QbK3ZFUYNxarxqx5DNsnD78gSyBYCR3AtcgcxASpmadxw6hJrLaRSFdiC",
  "key30": "5wsMxsqzYBJwajnuV14LwAMDJyD6W9EGMqgfzW5Xg71QijSj1Zcxzo1m394USjUef5qyPcumNbq6MsvfMUQR7GBc",
  "key31": "5Ssy64T8zHF8MiUeFPWLVr9PdrN4KhKuwHPDbZMudU1K5imYijbKMafBDEtPSMpLKuubYpc6mjT154fmLPKDAu1D",
  "key32": "4s7amf5vRSETQZujexmvxwBLgznTCU1YWJY8uVUA5MiYfiFjpK21guwMZQXHBfyiGgAvh5o7ra4GF6NEtYfjo2zB",
  "key33": "wppBSA9Ps41qYp8CqVgmg6NXxipSpNfn994VzSKiRD5ya6dS1xrA38yg5RuspAYVABKu6yWwzQ3ThGQu8RBCBcn",
  "key34": "31TemCHW3C4Xauc8U5P7zSCLH4AQzT7vwXSTaYxG2x23r38o1E1cGWKYUn7dnT5tbRrp38dDuoXPy4TqQfyT3zAG",
  "key35": "Na81ksE8eTfsbSNgPa6pzLS6xCfkWp49yRNrENxCejkTtLywh9DWmRomReTJ87zvq4iwbtDkJtmxxznGwrvaS2u",
  "key36": "5Pr19Mmp3BkGFoYHJhQhCAhh4XqL9ZUaZikmLTnTHvDeNQCsAe6ugTe7BPUtUmEP7MT5zhHaF1rFUJETNnUW1eyq",
  "key37": "5akPUytqhF9yj89N2qMH2MwdtsSNpwBuHe349Yre2YoX8tecaKmK6otthBrfBmN2VFSiCqyHr7PBRtyhJYfiV8UW",
  "key38": "4Gemf511Heq56uzJe3GoLumHRVzFjsELXjFmpSKKNH3SBEyhKps8EZkMhDFY7QLv4fWTvPX7HfhfRjcRXfZybYuL",
  "key39": "5bZMkgTKzyCtbvX1PTEtXEwxALqiJFVf49oSF1xD9rfPqijjzT1xVTxUqriHj6Yuwmzg7EGNM229y3SW7YQg3Lpq",
  "key40": "4V5dvu95empwczutEoNSHBfEAKoJwh2Biy3fjexvYPLZ8VKFXAx6WCQPsNgb3HktVtUqYjM6BjzLpeacJcGtDtg3",
  "key41": "4dkuEW9MkVnzeAgJd4kCxjKxsMd6XeArRDcBni56eBxC2HTPdpoRd9vzwWY3J2u7W1tcmyYqQrgiSBQUaonysDmb",
  "key42": "2M2VtowqotGzA5SHazvWVgwKVrLmXWuiFyTZP8Ey4kg7JJFEM16jCA3NtcPpjCrWrbwiFLDY4WHGFwfvJ4HqQQDv",
  "key43": "3iF6s46iRGKYHRA2hQonhBXj4djvhQCrzsvjhe414JpWTCNSrQof6KKztsYGv7bPxMwS1pf4sx2jRqBwcquzpovH",
  "key44": "3wGWVfnj3TKRo5UZ172dJ5Dcmo4nMtquZcWHm4kUhrqS7hhnKCJxRXd3gcaJfmKY9NH3WhEWSCsyM7iFe4NKpXGR",
  "key45": "43kefrdJAcYtdg62ZM4xm1GNxxK79Bg3ze7SAGrTygUYVssfgz8hiW6egxXG3Zrd7E53UMSxuPwsv3DtyxR2XUyc"
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
