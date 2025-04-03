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
    "5eVLMK4WLzJ3SnvMuRDgpsURL4PBx1HwU1U1TDM4wG3MCqQcaGtjiZrTJtzfBMKKnfPfMCUdE41yajCuM7gEFnVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAmLwZN5efS6FibkBw9jXptsf6fgDBRoirxgeo6jfzKpaS1zGFskRHkusuJ7PwnnT1CnUSYjf6s2yLStfVwmRsk",
  "key1": "4B5xzuzJW5brw1vmeJLJevccet7nVbD5zyFUJiM3L1iG28Xz58z1tgubeVdyaUdBLL5m7gm265s8kwA9U5Nv6sCg",
  "key2": "3HmTYwd9zY6AGHZZSdhZYhDh2TkqksQaEJsddgLX9mCT2pkveHudUyAt1Fut92j84jZBsYgNcDeeSfTCascDYDgf",
  "key3": "zUY5D8zZnYTfAmTRZfcwKWRw7qF8xi6RDxTC6x8Eh7GjAHo68JfoZdVCaEEsd17xnPpXZ56EKJcoVbDdYb6bAef",
  "key4": "4Q5BoWnT1x8L36Z34bHkRB44rv4oDbvd7zeWXR4qVKZG3rM3TsnnfBk6gY9NQmmigepkuRLr3Dyf3UY7gQRpBZJ5",
  "key5": "2s9SJikBq5q4V13NMFKXWJ1MRtvgFyHx6RP72FXkwYEMA31UuHDmAs1wZPcATaKhgKEMN6MURvkEZcrQc64D2GCk",
  "key6": "3yNFW5GDBUEWu4L3HWPAbu1mH7y6ge2EGEWWHVhHxM3nRh4qtP1WUDgcXvT4aF8Drw2TyNx2KyELnauE6tCusuUx",
  "key7": "Scwh6DwocAPr8rV1qDfg7eyNXnviHerPtNKDrMdv6xEGV53aXMBaKLCTo5qaGanvGDYLKBkMsJDwEKXC2mANMGN",
  "key8": "2YU7V3ZvpebjCWVecWGu5MgFETBTSPoLTufyasptsMZcYiynYvsNRG2oWdVgJso58JJ9FZQBVaT9PcfgcSYYftyh",
  "key9": "3QCvgbYRzhHzEwZP4yGnPNrpny5zyGe3aw6eaT1RPXSY5vKTTYNjobwsYfifNUtCRd7n8urSgrtrNjqf5aRM2oMG",
  "key10": "54Zu7kXMprXqk6WcFMAU3AfnwmE2VkxwEhAuj8jXRrKwgNpLeHGeHRaphdAyRXdMtkDgESsTPcRGA2LKNW8rma9c",
  "key11": "XdTgtQGACZR4sfxG3atv8qSWtX3vHQ7AjS5pt1o4NRhkb8LziCMN7Cqvgovy2ZvXUBNChiyjBVTYKJB8Hwvx77e",
  "key12": "5EVFfsJQx5xdLhfeMfaTYunUJEYWekHXHfKwvh3RFT1ubJ37emHB4YyrE7hKVXdRtQFGYfkDyyJzj9wZgzT7uiRo",
  "key13": "3H3w4xyJ8E4PDoQDC7CE83gmS5xfz22rXiRS3ro3aAJRM4MEPrgu9rN81LSA6dw6EtWfU8sUVd1t5MxkXbEDi9v7",
  "key14": "4ztGQA843kkomZnXE5TmWW7CgCdDw18MjAg85qeVkBMfnGaaUVWgeD3qnMX1cpdjNgRkp51yrDcemDwhojqX2PQ6",
  "key15": "4MsBLyfyfKrJdP6z9549y77zF832tMQS41iFEafUKtUzBESVCs4DGvXjvN3SMzDdgMzYvUN1Vy2Ua1hMnBcZDrVg",
  "key16": "38nHkRu1SYj2UkwXSaDTq8igr482ZNt5sn4jhV8igL44QviPAYUo3532wWz564ukT6NU3w5Aa9kppoMoZ89M8HVY",
  "key17": "3Y9RBMj1H9Uze6o6UfnTq5mGMGpKbSRjiDe9RUuqavXo8EnPJCGbExEmPP2nD6532zG5owXebYqENqz6a3AuV1pc",
  "key18": "K82DrKTRTuUWcTrfmrcJRfhDLx2HC3NuqtvPSspMVfiL13mcFuAuHhVjPoPoUmrU5w8Wjyv1HMn4TUELVCjKg2H",
  "key19": "2Upgumn3SR2ujMMzSEV5edcHak415oya5CJWXC2eh2X9qTMQ1ugZUaGHKMr3G7ZkaMV1uqSYGtxRZQtSEGbneTAN",
  "key20": "634kX451N69FYxQDkzgT5GLEwQpZFDDDj8XfzJwKFh8Ue4eka98XEoqZYW64RmmM77FBs2v6A6SDtpR5RzFKuokx",
  "key21": "51HzvPPU4iVZ6mELH4W6Zfmtac26BKiSomjwELFspM4n1jQmgVMNnnQoXLohzh1d7MwZ5RccFR8ZvNcnJ7YPtJTr",
  "key22": "cJ5EDJLA1YnawZBT5yWVru8LsYNEFn4DsMxronafdf7Z4sHFs9ysihxvkjpfdbD4WyWCshf2hHKTZrCmU4tDMvU",
  "key23": "3mbTQvSGN2mJTodXA5trvsBnuHUg8NitpZ6uFWwyzG8pj3weX6PGgvi6uhUtSeoBra1wioEqGvukcKzY7oKrDTDg",
  "key24": "3NbwwVCsKfdPAt1thYXQZ4tGSUU54oaQEdeUfP4mZiWkwXtQ9zAXv8tXEz7Ry6dsD1E54dTefgWrMLd4ixCKAkTE",
  "key25": "ivg2hSVvpJ3JAvKtSSqbZBWT8E4HmYq92GvbT7JsavWf16wE5i8sDXNFXznAtXGwtCAtF4gY1vZrzGYXG8rQ2g7",
  "key26": "K4nwfPbYgFS5MuUsgQAwgz9RhWh1Vdxn5a5X4Cihw19iHb4v87WoZR2WWLFxQeBsXspykhQNoMvZfG7UCKNaREg",
  "key27": "3USYojTbJbCsoFNJX1T9ecUtU6TsPmoUuc2QUxGGqFnNpEdXBaVUm6UA5KUW85JAgVUFVqfDQ2BEnnLjRESfUFf3",
  "key28": "Bm27k6zUdMRppTqLm9uJPsPvrpRhMPmQvURpR7JF3mnDBznk4UjHNp3Zy3DamFFFxzLvMNmRVvSAEFZW47X4RUt",
  "key29": "5424JRx7Dp5eXhvy2qXtePnFMMPmKk1Urje9p2ViQTc3xChRSHVHDg8k8UmTPkgXQhoiB9FKdoT6xQNkshXwek7w",
  "key30": "uFEsEsm3yjdiTPh4PM8EmakQYTQWh2GotryEF2QePDsie4UafQmsLX1ZABYjCSS69WDD2aesTLjFUQxk8GUBXug",
  "key31": "2ioTrL1fL2hRbdsQmc8Y61Zv1v8dLAAURyam357db6ssAi9TExHg6LwnbtFjAnTvTsNfggVkabsiEo4ntsAM2rXU",
  "key32": "21RZrTZJ4cPEYyWzbkn9vWJiC4RBL5PFceiUtbJWiVwJ5EfdxXkttsL6ZeHnh2Ztnqo7SiGKifdcfQP7ZE5SJDnj",
  "key33": "2rBKP4y5KoCnCWdERtmTyXFiDnTjm2WMNdnbq7GaoYcYHKEzQUDGTSGnrBNAHyzArU3Vqc57SSZPA7EkLVUA6wUG",
  "key34": "4GD1B9LZQ4r3xPLbJE8QEnzvxnQDqPeKVDi8QQzSYAH6pq3Pa9UjKWsFziMMQmLYqnU5j7UFeS895cBUN3UTSD5A",
  "key35": "3v7u5onmfTGWqBu8ExhZGHomjVvhFZDYPcfKum4LKawgAgcSidCHRm19pk5rZKKAzdpeZg34FF1Ac4rDFYF2Rt88"
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
