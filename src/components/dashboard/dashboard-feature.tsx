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
    "SS8wRSzbC4qsmhykoByNit3XzAazDGiWHwQqueYAGXpwwUe8vyCYUtLe9iStSFngw5SG7RDfJQdLjGEfhH32Uv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzRRFZPrA4o7EpMosMMDWR9sDw8JfN6w94Yhfq5u26b4NTTYx3Czxnkv9uVvLEuUNaD3onbB33W63tULaoBixS4",
  "key1": "Nw4Po8r8aQg8nhHir5BTBXmj2vUXeHqBuamr3gckNYUgHZfZCfapBsapNTseoHSPirdheof5REh4Z8LEBRA2xP5",
  "key2": "5jnhB31pcxp413SaFiXfvX8sN8ba73T3w5E9vbFW7HxnpCewYYRRSy5pv5oMsvmBzkwEU1mVk1n5HF6mhhjhwcwd",
  "key3": "3vEnMj7eHH2v98iDCyeN9Trm4xqSNm93o1BkBhGjFCvBia1WeM3H7PkHuvdJc6qUtQANe7pFRdH2CVQ4RJjhpVfw",
  "key4": "4N59skvCinm2PVNVgfaRUNWsgtmjdgdXsPxe8ZkUebum7RZ6oenQqJLoMEpRZCA1bBFyDCkBFYYPFfhEAY6NzDQG",
  "key5": "66frjXLvoFGMFT2S2eDao7rXzNC2ArSqfwYKFXfrBWrgkSczUQ6x9cp2QMrSvPXiVFbXojgPgL3JQ1tVe9dNpG4E",
  "key6": "428ERy7jbEvaxd2vxWX4LMSGiREGGoJS3ZatMWkJNgrKMkv1DXYpQvAUoae1GxM7quwtTLr85YLKsV3eW5U1BLm5",
  "key7": "5KXRJXGgBQ7jDSi2HeHA4KKMhbq1DWAKsxQdEWgdA729TMKD85Ms12qPmrcX9MSywTkdKNrHBgcNrL79QguaxFqY",
  "key8": "4G5g7YDrcKLkXx67NMmtyjQLxBMm7jxJbEZnDXo5L4icboyx3DhKsHhj4ZeL5HQRKmci1yFL6qQBzgjVJBNV2Er3",
  "key9": "1WoDnfWJBPHmomSAwv54KnKnDnWqk6BYWQAnbXvUtPPHUPMGcpFnRU6qQdAoJnvfZwyXy82gbWNnF27ZkZ7u1bE",
  "key10": "36NeTB64MzquvghGqEoQegHZTadnHmcNSVJFxEHxhMoxJAnJcbeQGxRXvE6auckLHzgqaxSYneN5Zp8qQ1KwNTY7",
  "key11": "3hMDxzsjB9DjPUXhdJMFpfgj6HwEPFzqjHsuUNcQaMwvx7VoHKvVJguxeZf2P9GjSSGzJG1dhV61RBPQYq8wsVcX",
  "key12": "4FMNoeHeTLEnByGis2A2HurZzVmT7ZXiYsR2DC3YmRRwfnBwP2FVCZA44Txittzx2m2DHWQrFVAQpa3va8BA9dmb",
  "key13": "41cUinVxgQXFVJjyzQxvaAspg7GBJiMBWi2EJu7pEzxCu28FQuzNKTFisQFV1HJFsggLEtkpKdTB8sGQXmmXApKF",
  "key14": "2brUuXXij9zefPx9vUakPy4qv6fgeLcW3Ttne2ZUc5HjibeKdtD1xhtVn8GpHJ5kvooReQ8Dpop3nJTn9KPNjX34",
  "key15": "4V36ywSeUkDrFh2uvnJG7XndFffwcwPQimYLFBrt1Q6sCYcMzXkqVeqi68LiQt1XRtGGcheyEoiyyAK1HZGje5Xi",
  "key16": "2dyJ2VAJBkGtehBc1JbDZhxJoVSi4nRXi4xQwfyqB56taFApbACaU9QrVEvcfdtuXQrxnSxH2sex4rv9fiGboScC",
  "key17": "5Ks8HRNo6QnwwYyMKW2V38VApVXnh4FyPGok1kFs7YB58MDYHcUm16Vnf84MAiSW4eqyAi6u4iLZJCufjSj2iSuX",
  "key18": "4Rrk9PcwbXdNd3j4JQxNLjRfNMeQUxpzAEwMGttskJi3us8Tw6wvdbsV7dc9QRFi7jn4aPriuhaCr1PuEqNQVAAx",
  "key19": "3ptE7jS2dNvvRdY6avvzf6ZphLM9uBd98aTVRdB82BNkeF9CNyJsr1AWBBxdK6Dz86bugQZd3YQ5cQLA1kDdyyKK",
  "key20": "q4z2UkrAYFV5c4Aps4PqcjAaFvMGcAk7mdHr8wJP3tfvpmc5y2ucfdvr5vyE2p3dnSABUHo9Coqrn7We4EJh2SH",
  "key21": "2oaSabg55jrdTadEJMqq4xmE8spR5Z67qr528xdCfzG9Kn7Xi3UsZBLkejWSPbMcApyDMkkCDH1ZYuyXdJxihwfw",
  "key22": "4dAZ67QH7bGBQ7Usxg2C5CcsswKo2xT9QkzWBryTMuAKp3Reimc2rjPoXvZ5hEKmp3pQG4Y8fn2nyRZtPJPn86pX",
  "key23": "3L9UmWsUEfQgQ9ntFvhkFgkQ264paQmh5nmsbH6E2yHFEoxufxhEHKRyvKBZmMPR3XGGkEMwFDdVUga8zkCpQ4mp",
  "key24": "4x8G9VxvJ5KsHKqTTKSYrx8DXhCfGMdQxKZ3UiMX8m8xeDpBWGjmt2BAaFGDCUZ28Gtr1AJLnLQGUNEMydUYTGzx",
  "key25": "dtrw5YPwWsPnaNjruPpwYSofgj2kXrHa81h6p6ciNd9A242N1nne9NZPFWRcfQqRo14AH334vJ8y1fnsdRrjc4U",
  "key26": "2Mbut6NydsCvBJZgehCYc56MCwwK1k28qXHuYacJQm9FWXLXS1Fk1gMuHSkLEFGxYe6taZCuoUuZM8CttBsKT76S",
  "key27": "2y8UFBgaVrYm5kKtEqBsMhKfudysgJm4RamCfGpLVXBsovjbupBGTnYjNXJTsqGvHN6wUJChJSNpvyuiVqWFwy55",
  "key28": "49DAkn9hRfgyxwJnwxpX3rxb4PGL3GcV37CfzLJy3TamRRtiCNuXkocXv5c5HNPPkuPTuQnL6bc3AsakUkDY7vtK",
  "key29": "3KCggddxdRSKk4ruzMGSKXvJUTYb2BVrbkXei5KvtBgnwEcvhrqLL6iGiea6chSnuUBebLK9eTgVFLkhVw9UD1b1",
  "key30": "4okSpMYyg54w28v5etDTYhcavYmL52fBWy1kdB1foAYYzLftbi8fKKQW4ahfCGUbU6BwVSBda37bkwE1mgretBxE",
  "key31": "4Ba3VG9qoBTtCiAcBdsKYkTuePVtozSURK3Yfewrxg5U2uqTiDhKw1ygnnaMS9jqdPDdN6d4u6XDs9tgttoHceiB",
  "key32": "Qv7wLWkiMwsh9KRSBjYHhoqipHauWiXBmsKiXX6ivKPWjn1KdBAwnejcmtT6iq4iDnkZZcMpY2fKA8H6kWRLf8L",
  "key33": "3d4G944LgtneZr3d9UGoFqmNYTnycetSjdLXZ9Fnnp1RQ1VgN6AQM5s2G5huxodWd9uKAYfiqyScmDmJLdbmE7at",
  "key34": "5tvifGxrfGpjGvaFTmrqzbFMbSHiY3NALwFdJmkAWCX6HqaaARSCSF2RgjZCEv3mcdVt4CQDxEgP9vxYD5PY28Po",
  "key35": "54m6XngdwENUCUSabx2AzBbaUGHA6TKPU2pcQWVGDutLP1wxaenqdtt2Mo7v8QFR4jZPF6cfw25HF7vUYjoxAXBn",
  "key36": "2wsSMtSZjwR9yT1mev9ZKDgyUQQoT67NyVq248qTZQvzxNR7jfQKBbvBnvaeWyPxkj3joqYxNbWLaR33DQCRvmVW",
  "key37": "3MYiC15KJWErCzPjcWkMwHydXMYKLwYD9VQnF27PTQJBSL4SwwxoqtbKF5nSenmTdLDdiZVya2dEESvGgp7YGga5",
  "key38": "5U6QG68YMFhNiVXNbV5nKx8KEmP3ww2rv7PmQX4U5tJXTcsg118A8AQvtp6VkVDVya4xKjWofVrZuiBCKJLih4ak",
  "key39": "2FJ4zibbDPTQ2cBV9fgfZ14oMJ2YM6vbQDGGdxSUU2WQHMvwTar2y5He6BnQHFbRWM6iYNejY4HSHxf9vUD9J5Rg",
  "key40": "2i5bkyoXrZdcpD5E89s8HbSA1utWQuLwTxrjM36uT33Ewa4TwiXtPhQPCtJDoCshaTW31RTDc2qExw3EDJjwawSg",
  "key41": "4iVw4DWmMrqe1JMdVpSYF526PCNM7oYPiEJ8QDAe8MxtLi5BBWpCFoPnyqhPeCh1FywqWJ1godUdgqo7RyoErkaK",
  "key42": "5tCnT9KtwwWYRWyASRhUguePFZh6pxw2dNfUx1WqkVW9bAQxa5fkjLmMG5zEmfwa2cQW1DzE5gPFjx2qWnRZDVC8",
  "key43": "3v6MyWdn3zdJnRyi4xpAbbgMepFZuexRrrMKcd4iP1WbtuETLDj1V17QD7M1hoDMzdTR4MWKZFGdZJEE3Fm54nzR",
  "key44": "2c8fJFn1PoYZQ8j9H8Vz954Y7Fw6FPAuC9Fd2Ne1DmpSJ3F4EN8JK98UVx5VVHhG2xRCFocrmZjRC37C2v9Vm6Cj"
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
