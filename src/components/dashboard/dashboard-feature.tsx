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
    "rkkUaMNzXkX2JLtcvhKr6wnxAQuP5caGniMPMEWYpUmAP3bcJFzMAuZ3oGRxStEHyzXAYdLrxVsCE4MCgiQMh9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sR3otVLQB4XW5ppgyrZG7AiptpZRmUwxFHG9Mvpcx4DKC9Q6ZTgj5b6QQv7UhrCnnaSYP9AsYPY4HgjA6tHoWcR",
  "key1": "5Y4Mg7ALRjkGw4wjmXmei1FvnKs3LVq1HzZ5chMEhGGe6TEBU1ruYbskgf2EfvmtXDy561mDKPMMrrLcpQzqeTWy",
  "key2": "66JaiQiJES6iptznJanYopzSiwm8rtTP1S4YPYG4LjKD6xUbBewntdmkJigMFiyC1UxvHYYkwKrRMJcAe6yQrVep",
  "key3": "2D9jZugy3vpDu1PMtwetAMgxd5X5rRc9XFg2xKLojvBBXCuJSjjtTgCua6vBQZEBG48RchCcKqfKpjx237qgLw9",
  "key4": "4XNSin5tLxcVxjzctfzMG1sccgLKTMD6cZjNZmpMGsvNC9nt21TME3sUtKoUefchQDp6XLdE7ZuNpzuzhgjHra3p",
  "key5": "wS9hHLbxMyKmNfSsieyZ3Wv6UAgxc49BPsYkp5TkB9YpBAUSaep49H7fiu9Xxp96ALZJAuJDnumz5HS98YgikQA",
  "key6": "5cCQbboErS47CPpcULKr62LrKkP2ZomqP8KvEkRHe6zcsWCiVC17vigubgeEZ9wUKbf5vp4xoSLutLHBsojzyDAG",
  "key7": "3T1gSyXkpMgqt53AUPTVvTr29Q7LUoecKDrMKGCg6YfkAjvsq6Hyp6DqyRvfjpHfL9qxzhFBPTwGWHwVXvvTAVcp",
  "key8": "4iDVuA7SrhGrHV62wAj4hHhwdjaiCZP3Wk8bTnoycTYRnH9bjJtpobtALbVVUWf7poSRddNcU7CKpzeUj2MuDeys",
  "key9": "3ga7EbAVsvwbcaX2e9vvXfrkEaPscy8NBiqJg9bq8eG5mNFkuVB7s9HhQGGNd6NVwEvJ7VRpWHAjUSyXW7iZXQQV",
  "key10": "SzK7mRpL1sN9wiXqUakkMzHTBfn7K7iFsGrZo33qixK9UAV2ah23rf8agPduV91s3BCJ3Y6MNjwRkmKTBifs13z",
  "key11": "3NxTfMJNm3wRoTxKEYnRA1Mfe1WHKC8Gke4mdmEmvBYTaSMJgN78767jQWSvwqieXP79yn8TXozNifjEC3ibc8PL",
  "key12": "2daBfkgP32vFDaJSWFstKPh8EzdPfG9Dx5kU3rZJjVcVJPuJ8g6QCwizSLNn1fuwYi9pfLH2T6V51qMEiL3crDs",
  "key13": "3FrZqTFqRiUPPp9C2oup98GvX9EATidMTZASBxJYTX4Cf141YWSVwj9QuVJBFHcu3V2e57UDMN1T5Nep6vAZZyyE",
  "key14": "sv9BsPP1XNgRtVC7pHFxGucLbkdmTUvtMsqHryw4UzJciNejkUa8m9Nh75yk7JazdDWfx2XoMXXzVzkFfgDWgBR",
  "key15": "3KRWuFXq4R5iSnj3pL87tKWg5JjUibCnnfhBAT6CMtdStgjPyb3UH5zyozA9FmYuA2GkHJcvoMu8RiCNNv9K7C2D",
  "key16": "3U65EQWBaEHvr6ThnV5DnTtt272JgXX2VvqjB2rfFCRiCvGRXPZ5bRdFuNhHn6zPFz51jh64CKAfCwEmv8TcLmyf",
  "key17": "5rurUyTZhJMsxNQko8qtU8k3VFz1Tu3SMLFXY462LHib6y8mKaujKowVsGs96V8sje1M1MNQi3XeHkPVKJ3zuS2E",
  "key18": "2uYjVbMAgYpouk1Yg1eFkMv2jq3fDxezmLZ3Jry8Xzgwx4xevVSu5AZc4Z7E6ht2F6RYyxWcCN7W4eLbJbNVXmif",
  "key19": "5BY8hsUc9jSVUekCdxBmHXu61vAFL9VvGQETc9Hb7JUeSpJP47DgMA6yznJTv7T2sabz2bEQKCXSoXc9ViA5LpQJ",
  "key20": "5NrCZiWD2JdVwounfzKZWKZMYtPoCU89eGiDHK6bu2HEfhvaGTcB9umNTmm6QMawioppmQcTtmJc9JvxnhCAy1Yf",
  "key21": "4VX8srmFK4Fh9yyNaCtzE4qvuERAr5kmsrcRVpQio7JE8BN7V2F37ovjMPeRHczRzVfn72pS6RjEG6wgy3xHHrkv",
  "key22": "Yq6Att6pdsQWFfLsbhmWt4FGhuifjCbxpEsSggRGRD8eQi4jiKXaT3MEQPfsn5TMyCt6zE6E8MvEoVQcUZG67PH",
  "key23": "7kRSwK7sNrFKkKkiDjdw2WaD5ZU3rUAc7gZ9mUNXk4JN5NfutdCgQwNWf1tQoS8h9H1eyXdfq4Pbqc9eVoWcza7",
  "key24": "FJJXvJ7TpqMdyMYUPPdXPam4y9XSWPZPJ4gF5LS6c8KoD4qN75dMqkPXLhRfdVZQq7HtBE5jFkhmPsArBTuamrC",
  "key25": "33p1iMZd1Ug5bnS6XsNUdUwNBTrcPpB9DE84UwXHh96dVgzyaqgXsRu14TDA628qv3Yo3ufpCH21T3qkjQ2mW1Ny",
  "key26": "5kkvnfPPLaTYVgZtyK8jjHgKWXeT9K7oah4iiQDZPTc3L9Qm89oPxbEsPK2pDxtKFJTpwMSYTXwLAnSctYKfubJs",
  "key27": "5PmKg5ZQmmYXiP3mXeH7B7qkosHjJcdLYof8iycyytAxgHD3DZWNy1F47FEGAnT3kqLfXCrtaEPGyHmShARywxuV",
  "key28": "3DPTWUjs5PDQxosDRV5yxk7zk5dDCgrMzsxPNddRHhyQrJ2qkzCd9y9DphZSWXZiA4E6Fo4haCCaZhyBEdjNRaTk",
  "key29": "4XGcqvSQ3tLPD3f7qWvcx89oudr4RNth8BpCz13MbpFEyumU9Ers53qX5eGm8rq4Pxq1M1qLnyK6KBtYeAPETWp3",
  "key30": "obBZmwExep5hDyRSEYeyfU7k1kednLkNGUq4em23EPswqZV6ajGHS5GNRLfHVt4uq65oVsnz2sgFHn8bx5FGjZg",
  "key31": "4U74jdWRGrfqYfKtdw2ELr3519MbPrqcB4YV5b3CRfM9pb5m87Lyph5CX1XKWzuc4BotUV9Dyp7w2JPxxrgTcgoE",
  "key32": "3zm7CviK2EQXt3J7daZsWrinJNYQzgATvKC3PzCjVWdXvT9KwEjxxJse9aJa1LQa4SNuGS5htaAVwcUsE7oEPeow",
  "key33": "4mTNzLyv2fJkvszMbxAtQ8PAhjiDjoVphKnXikEZhLRLXru521s1LzZ6TSAbN9VpKNMUromEKCoL2WTibwX1QibM",
  "key34": "33XDwwQDgQSfQyEJiw2yS4fJy73LfXQNGxDxsesxsJ63RshAw38J2qzgunif6k8vUMsTStf8vLrdS5SchZVFywPi",
  "key35": "36jxoTeJXCtTpt81HHNF9siRyXiQFXpuETbFDYX7if9ZhkqJEcNgKmD1XjbXGtXdfoNudvhHhBaWPVVCqKvKM22h",
  "key36": "b3qFm5pAUBo5UCsWN39mfxzpfuMdtgwzZiCkDXQE5FwZdE9Zu4rNdN4KzD8oXTGYoabB7TjKcNFvydLQuJQYUXV",
  "key37": "3mbg9xTquWGVEHSimojRZQ7fT5SMwDFtK6s7biyxtAZtukxBcNoDh3CcrXdvJg5JHPHhmVSLJ69Z2TDw3hfxpCTA",
  "key38": "2bYzXXJmkwdw6Zeyxrtp3oaSojPWwu4nu69HJxMxfo91uMGENhxGGWWkV7VeqXe6CzviaTUDtEUhuaWQ8GdcZwdg",
  "key39": "2SiqrFngGj5CncJ3F4vCbjyx1SNqYCuShCungBaoaVM9KoDct3FABqLYBratwLCik14MaesAus668Uqxo94Simmj",
  "key40": "xNfpH64CfCzg1Q7HwYVqJ3LpA6eqkCVmTMKwiydVaKKvuVcCznJ5aan8NLdiuAB4D9qJyEJ5HVwgaEchZgvsF1X",
  "key41": "2Pdoh2rBC2uAPspU3M7t1CUK4zB8Sx47Ek3v8vWNu8rhMGLHkWucUaJY4tbPa516DTVUV3W6GVNYHAy6VktEgep7",
  "key42": "58rZM66Ln5TJoNaQijrWXwUV7aZoDLLczPqj5RJB1956RPZTGy643Gc5tkiRQvupUoGMNZWGNeaZy3sQShY2vHjm",
  "key43": "57SfR4DGAXs8d5P1Z2QEuYDgAgQCvGyrR3tErnvLDnmTbsVrpBpjSn7qbRTGcvC2bxPe8SmDHVvAheaoSd1YZuxH",
  "key44": "4QhJHtV9VoseJuLVeHveM8FGWrHH7pzc4mywN1azzPoZuvghKQYC6k11DSSqj4dH8UbVJWUxeiPKhiMsrb3nG6Zh"
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
