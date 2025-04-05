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
    "3c7JM11LGintCDHkyt9AR3ZNbrQfNhmJim7drCVMfaRdDet2GdHh4osy9gSDusmFNX1KTzBaGZrbL3kyADoycmdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "voNHYtjrVSPJNZW5nE9oogGK7XtGKdDhSshzhTwNZVqxW6VuguJV7AgLBPMLBncznfQDikEmgnnNxsE6Uk7SMfi",
  "key1": "54bKQn58KXeEriNnSDjpBCqqrfWSJGxTqvGtbK49N5TY3dTGJsnzgxqs3N778yEyr6WanvmzFn5KCfcsGjFB3DHd",
  "key2": "3FWRRMMGbphFX9DR9KCXtto2Z1fMTWUHT5ufQtHaoRW83hFaqWf8XWFdgvVWcpvuCw2snQVySv6pU43rq9Tm6duz",
  "key3": "5m9MEbdYjvftYXMokSTKaAaVTcEoY9reASwqpfq4oysfsJSPtjokMqXjYeUzxVeUr3ziPsHtxMmn5cFaVd7Ur1Wi",
  "key4": "2aUb49qs9KckZ6WmGVrrH4vzDLCdRvWztqXZvSLxLxkroaf54yo58WfQD5sm3UgLNuin5DESiQAkPhPa7xJ3BGgs",
  "key5": "2qUcFRfL41w2mT6yLuL1Wm6MNjRXZZcYhfw3f448wVCsYJzDpkpppU5RZpw98UxmXQgdu4FNezXsovjUtwbxzGgz",
  "key6": "5nYwiMY8DbasbEY93U8x3fzEG9XvQiDBYo2YxNbDNRwMgLXRXSVn3t98sfuESiqE7L6LriGxmH8QwpkhscWB8dNY",
  "key7": "pY8ZSh4T2ADijPHX1z5KKbVSZNU6SPGJkB1QMaBFpi7bQdgupwYTYkjbK9gLjK3gTzZFgdhREu3ARMEaNhgQ6iB",
  "key8": "36AWnMVJiqEagTidzZa7fUbiWrf5wDsS5SjhUTYP2n8CznYUBbk86xykYFr5JC8H5w9QcrqjzoMLRxCrtGGQE7G6",
  "key9": "3CJex5D7tZdszMKM6S97UKhGqrkRKNM88xo4mEsG5QFDjZ7BfcBGWusMmsEECWwm9XkcCazB8raBr9cRncVmwFvc",
  "key10": "4DVfpuSyLUYsaVw3fdu21yK48YvtUhZS8suk7yy6sq82HFzzp3x7FRrMHSeNhjHVbAkkj2HRqgDVYWkEkctg6v3n",
  "key11": "32DNenFQea1ZCYiB3yJMBYEgwsWvbEJbCLZ8VzaqA5iXJwgSFQxwZ1gYAvs1gngVCj9Gz2ZBAgJ2Bkd1HbkC4KcG",
  "key12": "4YoEY8rLy7L3WsDT95GxCq5iGV3xTgWg7DYPdYcE71Q27BiziFw7Zdt3akZM2thMW86L5rvd9hsXmwFB6joXBRxy",
  "key13": "4eBZSdYKijwzeDLjqUetRCL3eWU9ik6RZAPZ187MkEzmF4XWEgRqXkT7fW4QxXeAccfDUYx1Wp7UTzHas3xoKimm",
  "key14": "3HeWJMk4Zap73MP1tKzNjwpoHmhjsMDjonKnTDqiqB7tJY5wczbZumZcdrufGQPjMPSXfcxRdE3ZfvWQA5yHxRAr",
  "key15": "3yzd57LjzHMzGPYej5rGhVHA5ED3afoMXkrj2ufHUc5cT1JVx41pzYV6E1oKH3a11qey4vTWCwMBRPZYm9ouzP6e",
  "key16": "fLToYX8jFs6Z7VPnpVnZXmBqEe4QyWhkGdNVKePJzmM5SaMRZswQyvuQBvr314zLavfLKnEYMfxhEFa5B2cXNHp",
  "key17": "4qvZKPcQixaoJxudtvnRkYPk8YXart5jUhcEGg1kHXbneNzAYHxF3NLH4MEtf6LjQFJnXjHGAavKD8aGTFKnQAND",
  "key18": "3wBnjdBftjrayGFNR3LVGvXJFmWwDyBuCPLkZogDYsiimZ6NCxyUVjjpD9DYQWKax7C9cNkXTmLuikxK5wFqoJUX",
  "key19": "Rgh8dLGbdG6pPG7jQYbU7mLShYLb4nxsHnoVhu34hpixiP9HeufmAjfi5mdWdciDmcPqmkqJx6qQuibnndmqmP4",
  "key20": "2Zzu22wcKErfAXoR2yT7BaFSuaJpwzvxsHZaUvQPxtJQoQvnUUEbLNQD9WQ52v5qd1SYkgEFxPJjCMrR1nBQepyU",
  "key21": "3CfsFBAC6aKEbkzCMjkZ6qNME4S55CYF2wsH3X7u5BjMNDzpmDt6Jmrna8GkvzMhPQgWh7LuardXUxJ76yRVr6Au",
  "key22": "3nTDXyYVFmLvSvwNSuJaDThFyZ2GxAquWoCzrpxJJLtWPxZitmwUNMSAVueZX5syp6nLW7iMSnxLxdrRzQczFF1S",
  "key23": "38kUsv83reW5UBdz72vPuDLKGz2U4oyaNjt9ppjUaQBXz9YiGvfbaHXqPKiGCsbLjmLYQxTb2A8DaJBFNvHNuEjT",
  "key24": "2YwPmQ5BvHmFC1Ez7MAx8xo41mXYcFzv1H31dpVe38V3sz6Z15gZnegJRg4hEiCaNsVpkx1PfhJuTPk7cxoC4jy9",
  "key25": "3Tv51LnkLu95CegLK9SPbRkNVNEF9vMZNV9M6kWXJXb828HXcsred9h5jEbxyJ15QpP8nhvTz2y7UmGbkpJf3Siu",
  "key26": "4VFyTH79go8optr5U1YymQG7Ex5RwDgHnUdw5Ffzq8AVMNyB1RsVe9MVyvCKE8Ng3g1wYB6rVm9rU1w5KYwVzzMT",
  "key27": "2qoQ12H95wgrJLiBQQ62qss2V5Tw4ryFSm6VjmWH7hWULQBEwJVFEA6Xzr33oG9qrTYQpswp4dLvTbNWM3vort7D",
  "key28": "4u5WiggUjS5nuiK1v77MsYJ7HjaSPQqhBCTyCL6a4QagBr6nGH4tJGWLM6pdKyDSDr1UN5eYHQiywW8MHfsokx9A",
  "key29": "3Zmf4GE7NH7h3tDZ2rP9yBPaMf4axkxXfdVZ1TPpbTZvu3oLB55xPuVSiCQ4acpA92WCp7YiwLvt41Dt4167iKK",
  "key30": "5upBM9UJuKCYPMdseMUPtncEL4pqJCQW1vHYYdiRutu4VGWJQCa41YQPbZ6sv3rQpEENifJiDbQGfAC8pKzr9oBG",
  "key31": "5nQjSAihyAR3ktfENXqf8FdkpQZJYpR42NxLMNgFjMnMRGAyGsAJ8rmHdi1N6B2eyXSPSBubvhgGGKvm9VBDGmmn",
  "key32": "5YMS27r5j1mboi3zjPr5DWiLPhiv9h7FNsAQFnhWiscS5wWTnqaQkzbVZQn4QJHgtpaWUJCadLtpeYcnbgrVKySD",
  "key33": "54mvp1EgR64b8Uwxd3d6tncjsHzKk3U3pgS5pSfDWmwvaZ3piAVCUTcnfrCMgRWYZxkwJvsG8h2GNUksWwQJcsdZ",
  "key34": "5GXEv4hbmNHbbRkb3Rsv1jAWSYfSEL2AQFu2UBgwSB3BEfVUQ6TxbZTbG2v41Ku233QMZoFkso7d8Hao5B4cBt3m",
  "key35": "52sXe5CkofWiBYmmgyzowFf8LzDdqHAfMRtad68qnfNp54t5ZKvX2e28RAmNw5vVNSG3VrtygG3C6awp526qdDi3",
  "key36": "MeH98GA3qpi5b3trEP5BfSCQuGERjGdDmdUvPByCXvLGQofyM6QzwtDP8hCZbTiRnRQrxd1L5g42W6UoEcep1ys",
  "key37": "miucQPUdGCoYy3smwekPn35YUKnKXPbArEvT6obcQAV18tzewmTShweaR5qzTMoqQYYpL5Uc3fEgcMjWFzKuA1Y",
  "key38": "3oPGFTkEDoJnhgrNenU9MuJaqU6UZbcNoKExn6ykXYJjQ7cnswi55y5ewLHdbNzntJp4jGwPsqMxWgZ2qGdhtwje",
  "key39": "5L7ofkQpXZMCZiAR53cr6MBkMzmRj8LKkzZLNZMma5erWxTU7a5KMvHuQzJ6hwE3sJ9WZvLuJXxcdLgxZKjqJx7a",
  "key40": "5ACjzf4spqz7q8gPbBLyEVPc3PydaWYam7fpFdNxuQyyTBMe9DT74ZuTXHLGCLRvczzuajU8hQNJBR7vmBiSnJuL",
  "key41": "5M1P68635N339rpNQmzwDZWvyJ1YYa9kRs5dpeFQcLxJj4aUVxDgzzgBvYpq1Pzisb7aqXMq8LKQPqdHQNtrbA1g",
  "key42": "5gwgzuVrQH1Df18uWPfNicMxa5nQbjEugwcNPwQUjHZvMQEPFX9yRvvtMkkCxBmDfUKP23pcwCtDJeEZ8zMnefcm",
  "key43": "3CEYpzDUhwXBPHJdEfr8k4gQyYz9AbB3QaEkT94AgVNSAkCyozZxmqX8pdCBw8zTPjYGdp2yN3nJJhoffCZjaVfR",
  "key44": "4axQ373e17ivNvvqzf4UE1skVfdJZuAhBBYgr77WwFYng3NmfuGQht3vpGxEELcn8BN8GyvEqTfG39fpJStTtQyw",
  "key45": "5dJXfjphHNLhid4vCdVGaL5NxGLP3x5uuU3FW657QiBfKjw6xhoPtptM1g3V79iSWm5LAcNSmBYcj9uzwN4dM83e",
  "key46": "3wcZZD5UWgFiRBtxtQMDVrR9g2Dzhrp4fUCrsAMYpPxvWqdemkeqHPMWZVVgjy71iSs2BWYjKqMtXyubbbypL4cb",
  "key47": "3WeLxhTMm7FHNcz4DRGuuExWM2yomFjF6buGL4DtCmwv6xhKzFe96j1Dm45sUH5D99QohDZyyy2HK9NbsP5BPjPR"
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
