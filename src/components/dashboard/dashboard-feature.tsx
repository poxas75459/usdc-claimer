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
    "4GXLxNAcMLk9bHcz1baeLXSwyV1DGeWL8n8dpkiSguj1e4vVmCWDEdk68Sjr82BFvnpV3p17zunh1zyPEG8nEgf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59X9hPAEHR6tAXZoueSMiGY7GjLjcUmq9r9Jx3QtjuQVsXMrbax58v4Uo8wTAyLLoNtXmJv8nQWmy5Jez4JEoCpu",
  "key1": "4M4BSuEjC6LBNaEEBcUL96d8rAd7U9DLkiVhG6pny4jVGLu4zoHion5irEwLhTX7ZxKaJmMgDeM1NCfXfKrCkfDC",
  "key2": "nwYsxRTUcdFQKSUnKvPwE4inFtqNc1SUDiMoPMPapoFx9biJSMueQCVdM1sL1iobxeY98FuPeij2G1G2NwgCJER",
  "key3": "4SjMkkmCJknsZ8weFJ9GBCthaQMA4BmXwMe4WGGcD78FZo96G4wqfDMTXXo74Jfgg1JeJka2asLWPsbAHgif9juR",
  "key4": "U4Fej9P1VFJovr72THizeyVmTxzzjhqAz79mkVACi3H3oZSzFdr4D99iwXX11KBV2rTUn7j1QxfSXPUi2aASrSz",
  "key5": "2PpQ7Mdqr6awjxd366N8zYQXkUe5Am5y1i9Joyi6iBUiHMRvuA8zLmG2iE3WkfPyatJvYi37kT5yMVi1aukenSHy",
  "key6": "29xs4qmYLHrYbemyVZ543QURN3N1qDAaE2jFJJS3p1bhuKjxoTkjw5qu1p1RXwT139pqTQMe9spbETDLG5h4Yifr",
  "key7": "4nacb61W6ajWocGSGrTc6SeL4ytw4J2YcKxHGm3UieVyu9iVA6iXRtZgJ6NH7nQT3YdWwhGTLughpP9Fz9XsfqQG",
  "key8": "4WzovQEm9XvTgVv1xwxFzTvGFETuz7gpM6kjRYbwFervVkpiFuY928Y6GS1MvmetW78Jwzfe22dwfREYJ7P3DY9D",
  "key9": "2e85egNX8Ukxw3ZggK7pDgRcyB3KL3ArLD7FH7mo4WhbQgo5xLjQoR1tWfzJeeJNtJQMjnp7nv4DGHjkWHEmhCbq",
  "key10": "WfdUpkhw974JjjHNVEBUK2VTm2LbxHTScdXnwKWTSCiEbzDF7LyEv1eYe99xT19tGYdPsE1G4Fpu1zi9WMkMTj3",
  "key11": "2n8zcHRXGNyx7W2bDdhiNUatqs3HFib2KMM5aTirUieiYZBRfioQUZCyntp6JDYcBoHszs1eskucfXXggGQSJB5c",
  "key12": "3VWCcX2UJ4DJEfk7cookBBsiNM8Lqttemb8REFvYH5Q1HE6d8EjztqFbmJ2MzGJ1tEJxqKZCeM3zGgRFP2BkiTP3",
  "key13": "aMvt2qwZdhZhnXYkekmNrNkE5kkPmFWZ1ufnENgZMiLXaJr9PmBqEHyh3FRC6VhQtc3DXNShoGSa4PQUrG9Nfei",
  "key14": "HNnPMvciVpn9vcmV13JxaxdmWLFbzRAWL2YLGbyo4bueJ4PLGNNJmGCk7Xxs9G8GafDuV4Kr9vLS48ixDgKf2Jv",
  "key15": "4K3JqnopvYNzBH45admePZNQJbribVkMpT9e516Eqq9Vt9LA1BEd9xqASWbEG5DJMEUV3NYL4cEMiF37M6BFb5jQ",
  "key16": "4UQWzvK3EPP9y4V2K3so6F9XywEzBzt1UmMSgt6BURQfbZCCUAgymPqC4qxwN3iCtwxX619boRj7JpuMwRG9N9uh",
  "key17": "4xMVv3m4q6fBnWTpWBM7DmfcZWUZX1aiYu5WbnDDUELSGGY9i1Gu3p6bhugjCvGBMQm5QhVZKCatAzvcGJqc7osp",
  "key18": "3JBxx76hyziJA3K3u3XZoDrDDPhRstui52rpKcDzKS9t85wZLynTQyydX3N8gRxbxmHzDs4DZdCUFWys4QYk6e5J",
  "key19": "2APmEsLKargDbmrj2wun9Rpk3NVdGGHgCbs6Nwb1iKt8tjwCSD7sCJuKYVH94mq3mZjzQ9bE2QyNVuLa5KLRjTTq",
  "key20": "2VC3cgSKHab29NYSA85vFd62yBgTDT3eqHdrvA1CiJChWyGsNcsP7pzM5SWFHKsivnBstHVXRva7ZhZGWeD6jjAm",
  "key21": "4HjM3tGZSHPzF6z892fpb6DZ8KfLZBibrY6khQvR96Q92iwYNMCXwzcMxRAs8Zh1GT9F2vx5u1S4jX7rcZJzHtty",
  "key22": "4z6EK6NaYppoCtKZ3b53W8viHUBYRxEp9n4WNpPC7dJBtZNuwnTNzJ4rNB1J9Zzd3ePBCrq7v51LFyK63QKrLps5",
  "key23": "2UernpqpWY9juTavADVcBFux5NDHd1feHmJTCd1rfH5iqdgUG1SJaQJiQZZNpLrzzLWSY6XfpDEyBEccUqd1JtYD",
  "key24": "Q1ysKjSdHYYMEkB2dVgivPn8gEVsjNypKpHgfV8MYxwmEuQPocHGp5TMQNtSi5Vf2RbTtvngVmYadcdyM3V1Ru9",
  "key25": "5oGwtknytwoUxDBdf6EVEd3WwausqVwEYXDtWaVAndgSWcbkcKPxxBaT7dYK3pNwy4AFeCJuPFCmbgSueVK6fwrZ",
  "key26": "Ls9KSQomJuSXurpxRChbAQVyEtW4c9YDBNZCe2CYVBarCWhi9tHUkiHDGqMwenMqaugB2DxEX7QLWscyxpKXpZR",
  "key27": "3tJvyTpTiCKxgvK9jXgR7eR5BZigAfXH6HVCrTW8CDUNgyQYc2tGSwF5sNGJDUznwHiVfjkx2ydhkCVAXZsczG8",
  "key28": "3uVAr59GmH8DxgDNYy7YZGDYH9qUUvGXwQnzBStijJHmuAHia973nsQrnrTGwaUsX7q2dmmkd7Ep42jaXMp721qs",
  "key29": "ArvjehUsgeMCgXtwbbPE4hhFK9igxoW6YTi9XN73hc8y8Xz8ABXPZYs21zk8rXJRzvRsLbJWHrzCWzyvygRzozA",
  "key30": "4M5GywvoRHbvbfSp29QBWqR4EXM4ZWNvH7G3yf8xGZE8T6t8qnYtzaTc7soqYtLi3SavrpHfSVfTZhFLkiy5stMp",
  "key31": "5QNWurPdQWF8jSup1t1WoxUH9wHyHxwzkPPkZ4rdjVVDyHZgVoHgEj5ub7ugrjaxUigZHed2fowMATxiabkHfPDB",
  "key32": "4XcJ6YzzvLQe5iAdxeLMVkZt3LCXY3MQCekeaLso2HrkN88WnwXEwaMyfhpbewZKeSfupdJutj2nmRJuvBFkWVE6",
  "key33": "65QnRLQ94B4XHS5EQT6gKMQh5NYUGVtjHRcfrYQV6pRMwkDHKdmeGkrdQC7kkU6KFMx6ptCdMYLJGE25Ex2jefxY",
  "key34": "3dARtfsueFQSmwnmZyaFQiLEgqYjNAETuSStFE1LZAhxtmoNWMBCM6v2fo3kRMrdVGaWBC65Jj97MUSB5qVSegaF",
  "key35": "2yP35sqYJtzFyPJHw7o8i6N9tWHG9F5Z1cZ8DJQz2eQrTa1VpmPvNaF1P7V2fQebFbsLYYLiV9Ni66Sxc7NVGhqE",
  "key36": "4fsVc1rK8SEUe6KSwqfxVLDNt24Z4LiCtqwRC1tUhBMhb6bGgux9d5jwtHWuGasTKGGLaUCoFxiv35srRLzeUrpU",
  "key37": "5EZStb45UfoRnPkxEPTPgL1JRiDQg6Dm93hiCJhnwwLHxDcLz4g3JyFsuSKdDkHhMhjRUfkmr2GbeG2B8AkrFxcV",
  "key38": "2rbUgsKhPNhCZ8QRgdZpJHG8ag7GLDbzB57Vj7Xmaairiub8JL1iHRkVQrXvNYyNASMpUeFhaxkDNPUrg4fcjBQU"
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
