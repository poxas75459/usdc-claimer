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
    "fy9JecHu6Mo9T76J7dvUReMwWEm8yhR9wwDrHNV563UiNySZDp5GSNNpj2Uq9QYvbnRFqRnnQp3UWcbQviQFxjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E37zvUQ9wSt3rMSxnS1i8SHWR2ECf6wChx57rTXMa24eJ93wMR1L4AUGmjm8getjPXkyyTgT4HKrs8NNrmJHCHf",
  "key1": "2baEJVtdVQhRBPxqcJidSd9gVJZJKoeeD7b7Zo7jcjDRzuUejLAbNNfeaHqbNpXWc3HUYrh89W9XhZ7hS3NcobZw",
  "key2": "sKVtSzF7pysDevaJ1YnkkMWXrwLyfjacf4LgDDnrdngkx3Dtb6n8KGmMndx3mvLKu25vJB8ZiXJKjQVrtKE94sg",
  "key3": "354wodPnfHyK12S2rxvvSpCB7ro5FUSHxVtNp4VwaQKrK1MLymsP3rMALEKqGru5v9JtsYQUaGzYfi6tSLVufymX",
  "key4": "2Cj2nwfAui5JfsGN2AbwcgkmoC8ZTJkRyVn6XnbiTNmJtqFWnLR99cNCbyoJewagf5RS1Cx1Gjh1VBRTRtq9dqhB",
  "key5": "4ss2qwcgXt6zSHzbXspqZnt5njyB7h5Qx8oELFAhQpazTnmaRZGq4tWsQDFWeUZWrL8YJ342YRsFUDpftZ7wr54Q",
  "key6": "2T8WWKEdmRhxJDSmyP27YxMZvGg2uwVHMjY27M4tvEYBzSM8eYA91THy5eScXRMiCpRQ3zBFGqUacYo81KhUN1oG",
  "key7": "5Mragi98DCu2KRTeN3aks9WqtkpZrBAhbs5K1ahm4F8DiXxERKYzFHGbzjrxoTjyE9W5LUmqAGfTntdZYj4iBnPu",
  "key8": "3JoYZnssaGkViB2q6eGvCrC3MuSj9oHxLgdC6ZWcR7BnRp3HnzTwHe6X1AMWphraFHAAve8h98wLR1Xgei5PbRbm",
  "key9": "2xkFqXvsGZnKZRjFTVU2N9tHmj2Yier7sqDtk9PPyCcACscP6R9KMJ6zqTodYk6LfjRWmuLoufpedzB4mLtcP8vf",
  "key10": "2aAwhoYstW5pi4YekjY8G99BcqSVHd9vtpnJ8xqToXgS9UtuvV81RSmMTLhAjs43T7YGu65E1K3DNFJUogye13mw",
  "key11": "BuBhiZxaF45aYLqSVq7GDZQiW5Lbh8XaexpNqmvqsSrqNGPzMg44xZGLvLYWgVfkCqw96yHp5WjFx4KGsZFPhE2",
  "key12": "3xnDYMv7abhv8vki9DunNzCWZsvbQ6F3VQH3qYQvUdUDFbb4dcQnYcDkoYtDAc5Ejx5qS4nTddFhzTBNpt5neP2Y",
  "key13": "2SxnXW4KMLWX6Fwm9iKFW4hTVjqBTrZnWmcLooXmoQU2r1YnV4sLb57DXvGvYAafUMD3Jqrj2zsZR6pFt4bc5pCR",
  "key14": "4TCBGoWaDMsj1BGhwDHt1h9aXP6KRo8fNu5iBwKcECsDzXswp9qvT2thBAVRrJpde1T4nfZMTLiHJfovP3iCLfpp",
  "key15": "39pSPzrEhZKYXT9ipmTw89AHspoWjN2pyAtvQ6A5u1eCt5ywsyWvwD1f7LSt6f2AC14uNXYogucj6huGT2B4KdyB",
  "key16": "2MtHA8qbSjVREmUQd8dndaNqJH6U9cExjiY7xAy8XZgEzxuY3XvZWRCB4BdoDtk7EKaVPyALfJgx7AYCPDKqn2k8",
  "key17": "mmG4yvLKC6har2TBH9D7xyy2dJrpj5zDjaBKgAT231WedRiHNAYqMozF4ofa74tinWoL4Gp24C22R9TcQ8qwX58",
  "key18": "55X6nksDgJzreheKfyWQTcJFc1UqsoboxQXb7sKcpajBrCbZzbdo94Z4V9YzeSDeoFiDgam8aZobpSCG9zfLqEYq",
  "key19": "4Y12dqfRSt2ETK3sC6njAs77DAcVZD8atxvmiRhsPcVjvuJ8gahXhzUf7Az1vHdui3U6orB1bfetKpKxF3NiGBup",
  "key20": "2MDSEjTYFqjX7u41SHNstb9cFzXASxn3U7iHz6MWGC7TZC4KiDXonNaqLcZmrL1bQZ25TUuqUQ4QxTKpdfzzUn4t",
  "key21": "29twvbuRsiopm8pA3y5BewhogqNrCSKnV6rZhuarUHwE5e33kngJBRHfQn3yKQYdkF4bfpP7UmRzQrbqDY9XdpVr",
  "key22": "65amj75iwGtxsQnSgDHyjnNnnbHQ1uMdXpWJ4xuticonCMCK9XLi2TNqbtJgwrJtwbA8jQJY81VerUhVWmMcUWYF",
  "key23": "2Yr54W7i1heM1NcVdUhn3oCab3LzpfugBm44unTWyH4AL6UC4WEnrDuT6B1XUL9LgGJtX9NJrwHXMqdMgoNhKFcS",
  "key24": "4XSYDEVKBri4h4bNeYagcqVshS2ffynncNsqK3vjVTqPfPgPAbAMyAryzyzESxvw6dNESZx5nPDTfFoTW1WTc8e2",
  "key25": "etNp7Us3iRyFbMDyq6t4FLufMgDz6UBkEofBxT7XohX8BPgxq93hHSWU2sPZxhxbD3uEm3J4qvrwgVC7Rg3H6pu",
  "key26": "4idceDDpvyLYRJnLf1k5LAmRgzrTnTrjPVVoPcaKW5kfMPm7JjQj8H6KVN6kFcEZoEGcyJrAMoLeoUUbdZjewoZv",
  "key27": "gxUFvR6FAMxpJeDMXMmZpf8KqPCiDKWBfWfmrMaFdoRQcxoC1s6JHL8Q5yetZK5PC6zj7Tf9ZrCu5SoQKNcAWkH",
  "key28": "2yDf2hNFPAebJizpBoR3ZTfsxWFe6hN5hjLUwmHgUnHhX3prCufGJ6isfE42yFse3fboViEeRwJMuzeopdw2XpqL",
  "key29": "52AkS95HcRuHKJ7jnDAnaa415mZJ6Gn2qFQdFHDgmVqEteXMNzQwLrMqSL3QrCMkFAipSzPw7ruzot4VYEa5Avu7",
  "key30": "48PMxAkqUUWpeHjG8foySK9SgHbmn4tSLcwGPdEBaCgsUiVSq6rq2vNjhQeLgWpPGS9Y1D3W6TjXPPV6NLFN1w2t",
  "key31": "4ruS1wtavv4CgMtNmTtprZYDXEC9PAcGDhBPooCYGdFG5vkjj1myjyu1JxKigoxrdyfDdCnTQ9Zon6QyTD9RzPFU",
  "key32": "3Kt1qmXKp3HLDXH7akyseQ25yfGxy5fgw4f13AQu3asFyV11qmvAFnJLik5LMVVdHjUwk6e5JYiYUufNxBFwsiTc",
  "key33": "4hYpVPA3ccMtBPrEFRyeVKUFzbh8bEZUEVRDLLBE1LuHj4M3uNBZMQABQfmKnTiV9W48xARsu4jY7KmpZ6at1iGV",
  "key34": "2t1ctacehy91xdHFt3MBcP2aUicFQVK3KUCsU4Le1LfpAhciLnxYW2rrETQhqin2EfmXqGtseXnfixokFSW14iMi",
  "key35": "426vymskhULSJ3kpVvqCnHdEXJN851gZJpwknVA27zzynVGXwFfHKMWxmLEpbuJLPuwV6cT5aSf3i15UGMwsFBbx",
  "key36": "52uh725Wc5bMPg2cooSprYoG19Pv9vzosNzS7hQeXf7E1Zxng1xzR822pNTde3f2XqPEUSnsmA3hmztoodiQQKqV",
  "key37": "2eivnAsVVFxWNZdh1pvuxHE1xK8WibeVpm8eBfs9Ftt3d1jwM7gMXmUrcVtkY8598spWvzTRCq2vsbNwWNYhw2zH",
  "key38": "46fiJdXFZjnqg36HmxY4ZU6XjEjKHj8yDsNRRFyzGrvWJ4k3tZ6x6bQ95PohT1mPhHQGE9BuP6VNzzuuiyNVcHcL",
  "key39": "4apayc2gFUuBe4yVhgff2NoYhaTdP1i8SMJQoHFdQ1fA1oGqHVgyJ9NaeFuYDYqDisjh1Etig3KUDbdBzm1ZqWGQ",
  "key40": "5u2XHrsntCiUYxQrPAYWeP969oVAc9bN31TortuQ37PwtdWn5dpDzyTQHGLNa7Lj3CTeVxf4B6wGfwkkejKasKhd",
  "key41": "2vnfu35KFAp3uJz6VYLEZZfEQ3zaACaFq4cLCY1wP1X7gdRh8Vey4wQUHjvY7iRqgJGPXKExgiENx8WdMBZV9b5n",
  "key42": "2iGFCwue2tNwryDZ165vXH2Z5dN2h84rTgqgS78A5uUUoh731v7xHEmq6yE61nfp3FGTm7Q4Y1MjjpAw9wFdyKw2",
  "key43": "22njxwd3zv8wRkDgAncovf2JktmhUY1k1CLaWixv7p2cHtn6aNPyQ1atZMEcUxv7ftaTmRRAQSekJoDuQcHN91E9",
  "key44": "2qqGCHEzYiw7FnmsKynFhZMs2L79eeA2jJnUvfrHnGWxSxT5R3NfvXAUWgj41UH5v1JzyPKZZAUVQrWXNdNC7Frt",
  "key45": "5yBLm1MCcnRqmqxuVBiN4SLMRPPed3YoEBz73LCjms3Hgk7wUzZjcHvKUFth9gS3rt4YZGxEi62R111mN6FJnUmv",
  "key46": "3fSyt47RpApm6LUqvg9HtW3jrikVkA5cohgJ15gULSWDFsjMDfbB9oHSsypuS57uFtiwhjQiDur3nTgwMmUB81AX",
  "key47": "2LNq5wTHW2ofk9XqL5UELXKu5z4VwhhRwb8BYt2fBjFrpVUNQBiadK7w8SMcTs8uzzLmHo8ciE2nD7KVUcnwjG1v"
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
