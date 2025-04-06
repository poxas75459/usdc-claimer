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
    "2CfBNTX8YWCLc27Yq5aKbX2szRjDPMDacmxP4uzGSXQXY62GiTZsFqoWx72syU2PQVxCQL5MLo6GLjTS9mNj7Rqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDyrYteWfUcp2XUSJfG7JRG1mYofEa4yZXroF85cTgExGJALAzGB9QSNbVYLRz1S8LVcKkQcFpZiAKNghxCkbMp",
  "key1": "2rQjEEpSVtxa5177KNWTmmqw7tsMhLTbP3Nmsq6bzoTGrhWUjvDrmmLVomKv6SPCczmxRH5siEEyFJKDqAvyPPqm",
  "key2": "3J3PGDCBUykCx79DmoWSxZ1BdyjoQjDXXWaUbJu5MQfuEnGjqCYDZCkKKDnU8RPSNH5abhBFUxmdfypkf6iGLG2k",
  "key3": "5P1K5yfbxm93H5JASHZRejid5dLxxmJZkcf2UqnETej8yfQic5ECEs3sMWHxD1KUQVNMdCYspFCDNoNsM4FP2oHX",
  "key4": "5CoMydaXKhWSue4AcPHEGKP2GWNp31RWDJw5mctnmJRuHrv8Zis2pVXfD9SraPos6KvRJRBSEfaL8tTRprU22kgB",
  "key5": "5GLvCRex2XBnFVwDsbCmu4qqhDndS81RUps5JJHy6gdWparSJJM81HnQxvAVrVomfYGrMVCuQp1SmntoJtnKd9rt",
  "key6": "4cRBuBvLGFmXAjmoJ3KCEMrrJHeJ3JiyYhP9MUP38EfkyiWfWBXGxR3zU89f9S5BekRiD7yBLUr4QPeoo3gaXNEZ",
  "key7": "4aGuNov4Tat4F1kqR6LMsipqnUCEdbvqVEdFZyPF1T72xPFMnDaAfeVGbiAJ91oD8mGhWyvevYE8wQFfpiAy2Thh",
  "key8": "43E8w8mZAiZeGMeTiPNFW8eJLwi7v6C15N6guFv7t44bhyvGhEqMabwFRZnenKsi31rhZPsYQwNafSLFx5GU77FB",
  "key9": "2U57UrMc8xt9xsymPEApcmTokgvnmKLJcehxGcqzxhe8xQrYxdRqaMn5mVKaMQVqbv3ndTU8hYPuCL4gLr29ATx8",
  "key10": "h4XW3fRXzFYzNcndHURre7Fb2Dp2pyAh8kLYg6WVzPy3EgWcnHntTP4Zs5pmo1zfpkvBPasXUX3paqcxceiemHe",
  "key11": "5ZSRXdSGZFuodhnZRCVtYzGEKnPA13KmY5wDj2qdtTTqGYhbcg4ridMXT3F3a5HjRcV5E7wsvTVzf3iCbQAJ8pQz",
  "key12": "5MPssStQfWgXZLiowLbgZEmobh8MKidPusgtKA7J4pNDvG9X7VaRvXh5MQ8B3mFJ2rcWBzecBXtFWVsTXyCTMv3b",
  "key13": "YXmtyNzxkVyBf3FGv1MHB1CNEJhYFRpRwFjV5es9SFykdmnfJHpn5NG5L86pAVgtEYUW9QY1cNWAQ1CiR4zZa99",
  "key14": "5xmipm5tcYrjd2mk1P6owhX1ymgEvxPnob2tLjeF6S9A6nr5aCuxuxaKyfZ1BPrygFoNkDuh2AkicE6r9NKCWwWy",
  "key15": "CNNjzLSi2sRz4Fz2Jyqgr7GnkC5KZPtG6CmN9Cb3ujPmR7eQwKmxGmKbAfKjs9hBzzoPCiopt4duDQ4bEcbiBwe",
  "key16": "mL2g3YKe8DMTAvubnTN1z2vHoBT7XpMuDZKxaqn6FTWStyMrQbCYrbGwC7XnwcBQuehrfKyp9JeogdFDosPtkya",
  "key17": "jkGKnoJRzG4rUJRTWgvL1ztfFFVEGHmhY5rqCUs7QWr949vj8RRvhxfNxftD7YufPWpHi3Q6VoAFSevWup11wfr",
  "key18": "5e3KzbEptXLk184YQdZMSGdc39wEZu7R7C53ifdS6xVezkKPSQsxH7eTjGgMzc28yU7GnzKmhGWLY4RAkVAHF5Qe",
  "key19": "65eFYXa77te9USjD96yaqqNAU97EqrnDuUxBSfnYYCQbNo9J26PmNHG4zsTk3irrUkGHPWW9ar3JgueAiFgxyVvm",
  "key20": "54Ehr9BqxZcFfuAdod7QbKxhjN2FdN8wefcz98yNJDsMHV49TC2XbALTBp75TFygnUhPGC9svqnjv7TAD3T41SjL",
  "key21": "2hGLgXDNMUJ32LEvbim5bjoVxZ9Px8H2n2VeA9L53wbyky2oq3WiP5jbbrangYrKEEpfo39L8piLC6x1BRPuJYQt",
  "key22": "4hMDo6pXVT9r6qAubzeDgrYbqpWzqAqS6CE9aLc5vVdeqw4UBUtTYrhBZbAknACya4aSAdB95qEj3xphM8ND6tGt",
  "key23": "5aDZvLYeesDdtZDU6KP9sRHMEZXhk1YzEkGwkwU57qFvf88QEvZG6witkTUy17FinuuxL9ACPw5AKy7RD2DR2UGE",
  "key24": "4eFi2Ve98uyM7wkG8MDY1Ken7q75AvmTJ5YbYXi3aasPD5q5Yb7LACAD22EAhP4pszfps64ys5cjNgqv8G3EE6U9",
  "key25": "5NUjvQvSraHKmUhHa55vqpepCCaHM5H4JrbiLFrBisqiDY8nG7BdCefnJZyHQByFaDhWzAfidx8UEYzpT7FTEsWe",
  "key26": "5hHDhdpVoe8cv2RjhXqjXM39yc7ZkBUYHEcHvRYc2bQgvdhPZA7nFPUin6KxgzvpgVUtZnfaruXFbxYdZCzJ7dtJ",
  "key27": "2ytsJ2DLrtu4y3NYTS2hgKvyoDq9ufXiHf4kz4RVBonJdcscXwqGAq8VFW2xNvATuUkNhrmwcMc3s5yJqNDjdbVB",
  "key28": "5B1ZKPWeyj6x5J2vFrpxsfCout2ZxhC3nzFWLX8GAjdcuveG5JrA4GygQ7x25Kmf1jYHWEjp2qQj5VGUsUDfyfEw",
  "key29": "i8Mj2qUgAW6GjuaJhLw2ZUqyKwKViSgMMNGABjNEnFdeEGBszW8b8LfERfVmdeAz6VPygienn29dCcZBR1tBo2v",
  "key30": "3zWuLkrGXqRsYSr5FgrzEvdCky6LQx92cQHDVxAfiQyU2gvEed7ehKTkAWPtVUSMPWN26VnDZP5g1pEWnwjXS7LE",
  "key31": "2n2U5E6tYJGyDvysSyQXRNLoageGrie57eSTg1qUr1z8Ebzn7h8C6XEwgmQp7thkYFSGodgmLVSeURBWvE5WUudS",
  "key32": "25yDQRDjSMuQe7o7d6jCpa9MStyQVEL9SsyLa1DWexMhVnoGKnNcG5PZRaxywB1e1JA6iUQASiUSe8iCrzX4tJau",
  "key33": "5oV7tjkDAKtiyrVu5EVjjf9gEd9Nz9RcUeV1UGSZCRReaZGkoD6Q9FU46RgNkMPZoAALM8561je4abH2aRZ8Cga6",
  "key34": "arQj6ZnqwPgiCiS7iLVPEaajo8fufNUbBS3Z9xPzzNrEVy6FHP8n1RKo83jpWYjfteUNhnNXdtaWBhJjLcB1TFe",
  "key35": "5i5XSd4bjj5jhuX7bFG85UAFGrH7yRXn8XaN4MjBgiqKFk55PTMAe3KNUkR2GzpaS8zZHzf9ZMtJNKN4LnMK9iWg",
  "key36": "CndmHCg8AqtPT9QuACVjngKGyB1yy8hF6D3qcncqJqYZhs1uwe8BRgoiHQ4PkoA4HrojCuV7vb9BZjNf8gJf62e",
  "key37": "5qqbnGZPPd4mZBydZQo51M8jeKeBjY8MNHZcRxzbGMxjhHTuAXEUo5XzpaRL79tz1m7gP8ooE5UMNZajnW2pUkkd",
  "key38": "7pmhqMEqsKeDzYovArY1CSQqePTMrDNCq5cKxDGAEgJg1En63pUH1qdFAxCwWJ4MNNTFnW5RevJShHr42XdHsgY",
  "key39": "z1VfQ2Ap7swJ9gf6691ZTyNc272xBvY37h1zBn9c7NEhZjQV7MVuf3sS96g7DCK7sKbcqarQkcSaZdaqcLi42J5",
  "key40": "2gQZ2TayxMNRf66vExu4DdSoDwzJMrkY6gGgceYtoLZnSeWTMNXnAxY7zBh7JR6DaH7CcTVpMapH5TcznwAC2hmV",
  "key41": "57YUeZ9MJ1vBviSDoVzWr3HTTtfNoctWsu8iRkiwW369JN7XUKAtFyNv32MWV5sW8GSFmVuegGweJKReaMy5mrur",
  "key42": "5uudBB5ks8r2Dgaibaw23ZGkGfHgFWXsN2nRqz7T9JRkWtYWmQCt3ykzrZBgX1Ya1TpoXpcSwWCD69BSDfEHpVZM",
  "key43": "dMK7mZ9TVHvVPjKga35hfVRjH2kTJmzXxt45SDdG1gGBND4kdgjbDaVoeaAYBY3kU1X2sVKLYBYeHiuEsxyyHZk",
  "key44": "3oQ78Tbygm4UTsVSjNiNt4SHigEPM3tsLm1WuYw8U5oj6nmbo55okJLxo2JYWDLsgKQBe71LwpzQB4YFaqzz6dbh",
  "key45": "xs1qYWytw9av2Mh4m6iB2NpFhHWkRYQ5sR1W6K2FWL6cqYq7WhjFC4s6tBDXTaLBZhuy6MK9iUro7A1JunYBHRu",
  "key46": "5qrskDb3JaL66pnzyMiBHgurjomGnSjr2fRApKXgABUD6UYgoH5TAbNtCkiDmdpaqgckFXS4TjdPPPfvEaVmiWYW",
  "key47": "2PgALc3yZ9MvChemnsxqfaB3dxhjFrrrGU7B8V9j6b5SpZHUXxaze6mbJKvk3amXQawt1AF73B6hYdBs9VdgFWMH"
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
