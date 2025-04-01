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
    "2GAsxxPygFwCWattCm2KPGFstmu7LrzTb6PbANZ2Z7UGZqQ4jPRbHgMGyKTVriRydN37pWoBgJa65E64aoqC1C9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6wCwfakw8tS2VwprFjAQ9gYWbCeoUaHHzzZRj8FWh3Brg95bAMiiiagZGMVLmiVDLAi5HsPnaoQQCRcraCtiN5",
  "key1": "3T8dsxJ9ACFcmwiQpCcctPyfFgNaKmfWT6TfkGWubVuirRpqptRcSVDDgdVRt7tjmfQL2XDz4qXbx4GqwLGPgque",
  "key2": "5toSmz1KQpsETD9iMcfAKJ2zQch2gmftT26p2po4N7Yswjpk19FfNpecCqFQEHsyHTr7HX49p84on5663eBqng7U",
  "key3": "rdgg1JYe1DUo1yswtEZsNFyHcKqsqpAMHGqSYW6pSzqA4XWUCLwGisYuVdq1Y6R77ZNGowr8uK2PhQk6fmFbAeB",
  "key4": "2UrBR28eM4nfbqjazVcLt3SuXve3KKJXzoWCsYqsM9SkvXZbnke77LdbQJu8fzuwpbHso3LnqduZgLdpJgW3yWBU",
  "key5": "u7Q45hEgRjm9CCoqRb7WPLwYMQ5SyFQQdSmDoK4zDEi7grFHiEcWpuTfrienQT71NU4LymRsJKWxRcjNr3BbhaB",
  "key6": "4zAVST1DAscxNpnv8XnNnF3QzkQfEGWmgtgJ8iRJtkTz5zhQhXmYTiKRAhRpEx1cc6uMtMrqZzmyoYZXSUuejC7i",
  "key7": "KoUVUys5PwGmKsDpqbBPHgUEmqJwv8sxnHbH4oQYpcTxk8Vy3z1tjPwsfwCWJQgxkXRZ6jPmu9acNTvyLexceTt",
  "key8": "43tiz5xmVzaMdBsJkWSWbEFdTokKpr9Zed8hQTFoX6pMci4BkPnX57JtxReCo1t8gg8tBMHUaN4Ut3qERsbW19eW",
  "key9": "4Xkireo3WFUwuDnb1ZSZfWpiZWV5dPogsBYt1Vi7Uyw7ErsbtNjGZ1bCZViwbET4XsZ7DFjXLf3V7HTVRVciLctt",
  "key10": "2jT41dZsFmdSBorLSXPAtDkM3anXxBgqmfM2sCpEnQKoYyNobiJnG3mjFAydh9jdgsKmZkxDZNwY2LL8JsrmEnKS",
  "key11": "4QxakLZ7PRD5Jiu1ueRyYfGDPjbpEqPTWsLcQbAzhj7b2gQVDkubFXxG6r9GGXzKrDsefd38R1VC6tMPnWtZh4So",
  "key12": "44c6gzH1wgMKT2hyRFRu2631vSTtwPCCKkq4jjXiJbgqBFPMnM5rh7D6bqJAMhXkLkCeY8cs7ZxwcMvo7SK8t26A",
  "key13": "5h2rnhdZaedGxV8THXrnSWJzWadUgXjVzkf3scEwy3cgnBKRMLv9fW4gEzbP5AhqDKerLdi6aYZ5pcrnkJb19Uz6",
  "key14": "3tUsrJwP7DsNeBh8brD8xuQewNs7XpWAyc2s5JjkxrnafS7ABTP1N3gceVQFt6empi5zujgQCdKejDXnYVxy7hKS",
  "key15": "2kSxQrf4tFGgafHFw7mz3HsB14jRvuBdjSCepz4VQN689jUmGx5VjVwAQGzc4tWJjpGtzcKnr5fXqzxekhFvgVKB",
  "key16": "4Y1wxcVhEvTP52kmPmwVmm72URXGH75WSBS4AxMjnKc5Q6VdFVTVZR2hLv66f6v6BYkQVW9mQJuSVTVG5zy9vzTe",
  "key17": "jEa8VB5DXBkC6brbKjbTM52SeSy2QGSp6tgAXbckbN7oCQwsCEWSVs7Tbk7iPW57wihsp116UkjJkSXxgKdags9",
  "key18": "3nQbQopv7VuZshT68X6EgiM9y7AcdkfTGUTTEhMxwTx7sJ6ymDytUUMRzwtZxeV2Uzygei6iLg7kf2DrkjzaEx4F",
  "key19": "5anEXh8aAnhRjMENgQpTdZUva1ZkotNE7toborQKyUBqS2quEAbup4opeyjpf9Pg4KWC46WocV9KpGsj749tkeqN",
  "key20": "63UneSEFVcd8DxXhYgov89B66Qc9gmXt6Rr7Py9UPQXqHLGZ1dTtSA3mrkzHE8dBAJNstLYkhRDzZitgMepAJUBS",
  "key21": "5zWNgvUcDyFY5f5VFMo45JCc7YggYbpC5n4dAr6XeFmL5Zs6UV63EMDNbByX8KUHXTUZqZ5icyutHCDNHD5nXnae",
  "key22": "bg5BdRxXA5sSLREx1PwWYoE9dw7jktKa1RKZJXhnCqDmvJ1vwAczaPBLEXBYVCxxRkA93oE9c2VB5gcdQBwAhcj",
  "key23": "v4KDrUiKpGksfuJvHWGcSeXfoxwZV1xk19Mm855SMABJuE5YpZTXJ8MHV1e28pxyJXuqioHiTfQLypDrK4XAfaD",
  "key24": "4ZbxnGuk2gp9Mp8sz3TKwiXidCjG4jjzZLfC9fjh6s196hHDzRRWULHupwRhTesoJXUZQGETNFXHK6Am2yn6zDY1",
  "key25": "2ADGbaRz9nW3MrZKMDfVCdEZwkKaTk4usWMsCVUBusFSztVntQPUg64Nwpfj9JFxgG8nV86jSG66VS2AKXjGhZfP",
  "key26": "48wi4F7SGqjGvtdpG681VmWt74f1dAYbNTbAjFNKD4CM5xLMnK92WsmG6Mkkv38hKC2j65in4zKcyX6NoUXaBaHW",
  "key27": "3kAMt5n4dU34w9dNzYUMh9VSwCF3XMj7LX8sbTuYCWrKeZnQ3HMtxpzgYepzVNxtmCKFp5aBbrEKxR7eAuGTX8ym",
  "key28": "4a7rtfv35gg4a3Ly9dkmFPTW4fuGUeFhgTt5ntM3iVdQjLaV1EUKGoF4qy2YCc8vaLh2Li8W3ywKMm1hoe4Js9Xw",
  "key29": "53SbYVGaeESmtUekuPwHgn99tCq8DVt3FD9NGpKC7FudAJAJ5kKWUYNCrUZuUDVpo47XqQnskzQk3Lipv2FYzFeq",
  "key30": "336dz6t2NQZj44hrPkuypUberwb8TkVXC6BdowEUwEW8EWv1KTTkn4HSYcwW7mucXKLYUJV5QvWLm2rfNSWXz3Ls",
  "key31": "58nph84bGe8g2aNxhuX4nEHiJqnKwtN46rY56sA56gF7oPSvPddJKQuQLwsiJdmKQS2ZyaRXe3XzYAwqEfxvpVyC",
  "key32": "4mAzWycuHuanNH3Vr7vHGawNuBoNdigEEdjRajAU8MTVXMjYajAK6PEVuCZMGj1VS5yuwrSiXniHpYpZCDwRk3LX",
  "key33": "4MCLwfRUVftHTJrpvX4AWQrdHxpCnFJqBpNEyhJfx65t4FimoRUxR8kqMP8SBih2Crrbr6nQ8ADhM8U8dtBTmkYS",
  "key34": "j7J2pAkykTZmncYw9xzEQ6qmLLDcx7JxndEC86CYNoVTc5oxgRsPB46MvipkAs51f8AhRCk5VgXVcJjDh7QmJWP",
  "key35": "2qF7sNobyLtuSACqi6NsiHKsfASYR6XNCmgMK69Kd9zWSjLBSvULMwHdNAHAwRJdbHigpe7kQQxLdpNBGZ7tyANP",
  "key36": "mrvpeCRWcfz86Tx748v1zFnQGN3unjRqoLphkzw5BjG7qZKtMsdGCKwRqVbzpTVV63MGYHX8aTk4kj3bPbjXA7g",
  "key37": "3tzfKR1Nzuh41p5R5y552mVKkan2YkW6ycDPYjmXq4K96fLVns7id73wA45y6gdQTvgM4GZosv8XHqfTvBBGU17h"
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
