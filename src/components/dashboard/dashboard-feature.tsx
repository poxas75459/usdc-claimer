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
    "3SP3YRCVi16yGE4d6jTfpAgtforDTo6KWk3DGbBip9eWjcDJeMJoC3BWCkUPuSVGjV89QG5onVJ9bMxPWQnCdTY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ez1FwwUaUCYZLAAQ3k7A2F3sgDXAVh4gR1cTJTE7GWxE45Eeb2ERAyZt97zBBjSCktRkKasN52kJXVVBotzm26X",
  "key1": "5TaUk9zfyZPx2jSRNbvw7Cz11UjDVWasQDhFxX6EdwG3UefC4qYZhTRCPcfMsUYRRvp3Xf4aAB59i1k8oddKpfR5",
  "key2": "MnFf1An85VQZhxdKsrC3vU1JxkTzRzjqfFbdXMz5xZNVBrGuDK3CRr5F8ktC85NZzgKKST7Sj1uzBPVBBzqudeS",
  "key3": "4HXGn51J55h2KzKdPswNbCR8QnjCMh1RssafDRceQdJTpfnw1eqoDcAt68byGQhTze34NRYpfVQNYubenGxG5Ge9",
  "key4": "2hB3VWRXL1nQ9AyTvyHTGUmBdeXVMjXHtMjELgKFb2pDqeMiaCs6gc2ikgkH729BrN2Tg9NgFJee19QJ7sCvkYU8",
  "key5": "2Nn7KXmvsFmXCateedbR9dfFXwb1ToFRoFyMS4RKvXoY8iskHkym8Fknuu32UWtnZTk2RBauRwbet81Kd5mnnaCE",
  "key6": "4951tkgvKEjuFVus6HogxZ6DJdpRfFnPKRPrgaWG94C4mKW4EdAQdaR5YmMycbzHWERg7JHkjuwwuo4Dd6Jykaeb",
  "key7": "3Y3ZyEMZrumtUKhYUztCALHukburEPNe9r1FBeevwxP7RN61iQQaeuCpAGETtqN8srHTSCF6y1Z7gHBPcGFo2Lja",
  "key8": "2Wq4jDC7mVbV1N5aXTonY1afoKLLke7ioWE4XrwUcHW8a4f1UW8KbTjDjn7YgW5dGFhr8zwMhi6UEVtTk36tGwyG",
  "key9": "4hKjjxqQiBXMp5bEqSHk6qhnMv5h2R8GUiSEQB2uczhKZH6a45SGgvqxLSuuPDhcYmMujBFW1Tz9uakCecyPWHQp",
  "key10": "4Kwphc57sjgFfYL6rz4RDzgagvR6GMmpsDQaX6asy6GUSGvrVnmEQDdougpNwE2uuEk7q5zb1wY4qYcfYq7GWF4y",
  "key11": "5uNvXPth8xn8zbYUArMFZhNX2wogywCGV2hBYsyzSLLmKgHCBLMiPtGmJ1hB4BezqMNWaFK88Z6r9MKMnSe6bSHR",
  "key12": "5yB7p1T6jbE5BRhVRkcZhP14qa4TN7JR1NbCddvsT3woHonUjNSxWahtXgJK1F6AbvdxJ3FiZhqhkSxbWEKi4SR3",
  "key13": "qnnS876so99yhYuUZ9yNAt8vvRc3JA2nFYLZ3H5QVKYJekJ38CHJQqUVq8AZ2FRUxuiEDgW2znEGg8fFQ3yrgs1",
  "key14": "2a5n9GgZrawAqsBmuBYi47ypitXUG1LxNWpYd3HQKt4GJNVrsVkofEeVvRkHD33wvSjfUdmBJxz8wWXBos8yEM6h",
  "key15": "55vBoMuUqBLrX2rC8pNDN2qbs9SSUSXrUWriVWxDNpQuvtXabgdui1phaWdh6XsnBbvzfnWDCptDEx2xjpTYMsVR",
  "key16": "473RLEkeWSwdf1P8LJTPb59qjhUJqNLMfp6QCmMEVYg5uNeMN3pHHdKxsXoTASYoQLzKvVYSvzsp87NcnpqFfkCf",
  "key17": "2r7huwaJrsxrL3zDqFvpvvheRGqKMFfRDeH1XtMYu8QwZsUDZ7nPF91TSz7Q3sJc2BMBTxZ79rMFQZzLaSnpLUHw",
  "key18": "36uJj3jQgetmvxNjpw2AmMGBHz3t89PRktWZRSZUuNJxAu19yVwpQ5zuiyzPV8XifwEZ7yLtwR4GNofFYaAfzo5M",
  "key19": "3tCmUsHww8GV9qU67bEp4ojTouSayh6R5716ec1bMwgZj56UAn76GbhB9VvttSfqG8R4QaQxfFL545ZSmQJRQJfw",
  "key20": "5d8HQmeSKhT38SXAoRLiazFfExoBZiBTTKSaTeHxA4BvKLBmLHHRTRhWfw631y56kLHYRS3dpssrvWVrj1RXawvs",
  "key21": "3KEK5YPCU69cUpHwxi3EwMWEexGboNQ2uWryiJcEwFtzBzwRU2eZ3sTr2oetZy6rRo7uRymniw4TDYHsX2KHcvVH",
  "key22": "2LxPuaw95iTqx8Ry7gZxNnbSvSbTKvMbxQP4peu9Q7MgDZ55s47tFQebDy4GdVHRAyGEcacHTHkqUurwxWEdz4y1",
  "key23": "56vnGjdzDVpa3cdob2sK2WLevRakBUBx1WxisSjND3q8zKf545nHRgRU4AD8uhYgbfCzLSf7oN8NvaejjFAPkNv9",
  "key24": "5EMfUKdSdoCNXLkSggkC2nmmjhXPA6GQyeBck458rbDYXXRm38ceKA8dkxDHthhMJx3xeoBAQ7NaMYhMo8xzwhC4",
  "key25": "5V5csV6td6JEHQn8D8HVEZWD51fVtk38CDXysHhoVBZEQTND32d8KyyRWz1EHUBXiiLWbfkPSTvGm8639sV7W9aT",
  "key26": "2Brs1qyNYu6wz7wVtNdSQobLguintPMYfccWaUTomhYTtqNy71XcxnDYADaqGyHHyxZuxobiMQLaqz12nHAKZQK",
  "key27": "2KnUjizokKFGvk4gFCUFu6HEB58q8kNNei2nVYAQtqwK55MsPAYXkZqHRnDk1a4E2xcMv9GpGf8zcBxK9zrYCuK",
  "key28": "6eRFNVLnmARvQAAX5F4rqM631WgcqxNX8SdaejpucofzZQXhSr7CV9uVmEsiVYzrzoi7BnxQzdiBG8w3gN3dm58",
  "key29": "463rsdWGXnMNkgs2cBbmcm5wT2fqNU33oe3MxVZf86Sgxa6H8zsYLC63TduaVkZ5HbfpzsFabs5Wo9sMZKnzeBG1",
  "key30": "2FPoyN92WjbjJJFgn7aNGM5os23CgAqZjeXTXG3vpShJWEvAC8g5iAShixJCqTa9KeTi4BFF23YsicuGC4Gf3R2j",
  "key31": "Tq4NhiY4vDZBLYYbyRUuNi7f14YZRDMWGcTt3XrLMS77fPDH693xC24jPKf8P63BijLdT85uZgwtTFCyTFQHuQK",
  "key32": "aRUFNSVMnYcmeqxt9YV8f48wk5NJa3gm9jCZ6dizX4zi8vgJ47vNZyUhvznf4SyaUso4fKTKZExmnKfQ2UaDk9x",
  "key33": "LxQkDNn6QvoV2WGc2oAiTUAnxnc7pgQ4viCykQpaKx6x21vuQ9ZkndKwvbvR2GabrZGjRY6eh6YB9kKHabH8M99",
  "key34": "4ww4XX94bLHDPoEC3YmHDRUTXyD2kt99gMYcwuvyv8x9eW3wZdGgUR1iWRRe5WDYdPPL9ZFPFk3mWGE4hiVAb73J",
  "key35": "5sEWpp5Hi67Y7HTpVdiTusjkrx9dPd3WfkiGFMk6VBuwj2pMb1ogyRwxjXAsksygfw93xVixNaHGXq5nQjZiN2V5",
  "key36": "kEDV5DHs9dwWDnz3oyJiXunB4ZiqY5vvtVaDmpqNRzX41YEM6Kor8W9RqaxwbnXZXVLVEFJKv6XddyDY6GeMUZR",
  "key37": "3Godrm8uxfQkYhDRxhWnNZxZvAeM745SC4gT7iskSjbiVh13UuvWoNMTUM12N8kzajiPEsdBAFkWoYAonFWVFEJD",
  "key38": "3jUjhUmdpiwqGo4UuPdWPoe8FFmJPfEJ9RgrqgyqATTviEVf85AgwApdKsbQQTghj7ieXtGALqxH7zGr48ku4W4H",
  "key39": "Neq83v8Pmip12KYVQQxbAVPiEtzWfQ7vQevpJeLtj2ZQAaN45tg5bhUwq3GZVwe2QJExPMN193iHAZNcxhSJtCi",
  "key40": "5qPcvqsj1cmzsst288snQ2VZot4nQryEEgNy13q7mJLeErnFcbcjw9wjoiPeWA7gtr1fb6pradywMs4c4Rs2tnFp",
  "key41": "2ung46HhXC8oqHcXFaZVcX82j4g89fjs4E15DjzqVu8Z5k5igXiAcyS3xeras7s5PkWFeVE3Cgs8nLJzx4JEUE2A",
  "key42": "2rbeuH2yrNZ9wcRFAiyhA2GA5gKRWVJztsVtkGEueJmGuq8jWo2KfUyEk3VfR3GRJBPUtRqmMzsN2XfoAwrMs49y",
  "key43": "yS8U1umPV89kGY3kR5kgZgJerVPTrjPK7HHnJgnLDeh2J6cFg1jstPgAySJmDbJbFKhhCXVkUanBNWdWo2tPCeZ",
  "key44": "4ZSu4urkFkm8BqdfEPYHpbu18yxLYnvEARiA3kcid1en4EfqpUrDYkUkPorqJqBmDekiYxwdE6qDDyHfd5ms2Bfx",
  "key45": "4Tc9inQvcDXHh4QA4ZNdr6ZyZbZSzzBR6E9sb5ctm3QLBUsLAwQG2LJcsmQ9Rkiikn98rw5GQEJb3jG1u4oXRne7",
  "key46": "4BUwEyKcKi3JVJddaS3M8AoPF2GvG6TKYfgwQJdaiA3XBvdGNEx3KnVW4dxRYoJWEazhFm2xwhq4QMZzkFiF19Np",
  "key47": "2G6XLoNp58FY3RpAyoiuPJo1z4LtiSovs1nNXiJkhMTL9CfQfbNTLVmNcxq6iDUjSfcFR3KxabgS3zTx2MRVeBsw"
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
