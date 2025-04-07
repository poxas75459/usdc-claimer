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
    "2bUXsVtcQtjJa64wNKiKV3Pz7s8j7RsShmbAQWvbo5LjMmMDAq4tGpEEV28TjttpkRNKgDn99Vr35Er6E7B5eEG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1qTJjc7Es7pAAVqyqp6nvfNgmU2pBxmN3zSf1SCpi5rdp5WgyXV9ZyWnJMhpWPLY3ikEG77QYaaeFcnHzuecSo",
  "key1": "zefpWbonLVtXYBVZ9K1eutJ7BTf3LPf2wETjyatn4uuaTjeVucg6ATW1mt9auQqgHx5wybpz5tXkYogRkMY3wWG",
  "key2": "2vJjpF7AJLruzyQRqDsffN8qSo9isGSk4dHnGJG8JKPKq2em9CCZNf2i3Tg5tuSkuNDd2qt9yD5z2UWfiS6euAxp",
  "key3": "2Ws6kKfnby4XoqsvFxTtrV76UPdYRQZXR1do3f3USTkatj2AqePZVaVk5vXdHEg8AE7S8wuocSam2aeya3QJGjjj",
  "key4": "591SpWnBsuQhimG3kpkJTN4qjQXQkJjXd9gRT5QdijB6hWoRzj9F6ErNAJGn2ZJLdknsHSd7DQnb9NDji6ZoVxd7",
  "key5": "3aPYcVSStKLPRis68HmgxdxeJSrKQLJpbvJ3ik668wqF3Run8ma4rxehqwYZAy2iHNkfptEUnRAaZY2yFQ6Dkjt8",
  "key6": "NPpnssFGt7TUJuoGLSFxeJeMDzb5k2L5TZ5zEEpxPNb5f1PbZUMq5mDiw9uhPymdfBXBndLTXvGSkwtvAC2Spop",
  "key7": "5DGm2bG8Zfm9C8vF9uxMb77QofFFj52D2tn2THvf5mwweH1TFZxBviiXKwWDBzVfng155ER1x5exH5q8ozHAuQ8G",
  "key8": "55Gpiw8MGLWnpcoXQ4N9v61AmWKxqQMCQKAEuxS8PdKU8an73Po7jzpF8Ho92xYXmH6VaC7tWLE2tqWunjdLzhxo",
  "key9": "TrAXqo4WFLhixP3iZx2UUKuQxkixhDKrUbW3NegLBws4qK9mmmicTETStt6u9v4rw7JhuT8eqN5uGc1NT22MGgP",
  "key10": "4rUxb5YYT6tcPm3HrzmxbYy9HojFCqgV5RfC3wGu5dYFKDch8RtFw1pqXDGM3zoncLLkwXyHTovrkjGkwBFA3c6U",
  "key11": "1vYLEyNsx6PJ5PzCh4Y58c9aHCYbxwbEtsApEFiXj4udLjxZaTc8wf2TVXXyLVyYA5dukmcWknBbR64NiWJQQVT",
  "key12": "4Yzj9XoTVLBeLVTKDAgeuxVSoAwJRgZeya4kUoTrfMpMcjrH4z5byz5bAviReDhetZtCtnD9WaiUaadAn1zREnau",
  "key13": "28XhqNTcr32dQYHpb13vTwxhzqPT63wSX4XrPxgTBRdC3DhYbFwhoB9PqPaUmrCahBem8weaKK2HeJpEg8kyycii",
  "key14": "2oyenowUkFqGHwwd9MdzM38dYBPNxTRc7fqY4RgiXkSMwWYq19kfKbDY6HdrjcsJ8t311eWYbedBJ33edPPqULL7",
  "key15": "2vfpGfzh385EpqAUySc4NHmneTtMfaDEpkcVHhdnN3MukpDsVyYzgedEkzwTDwDiFuhGpjhheZR3Pqu6EGpdb6qp",
  "key16": "wFLaL2PYMNdJjFxTk5FmBVFTTf416MHAfK7LWcGEFExWL1b6R9M4oTUnHaqZVrcUuJYWr515xbyXSzFYGRLshpj",
  "key17": "3XrcAKbNJgvNrYRXeVQ1MK5rrWX8G2gZsLkgt1GMLKRCuBQrrqwUtzPUPPyrGU2PN7m4X8PC2pdkawfhq86SKfQ",
  "key18": "3FZHnCxQBpqzr4AU1ph7HDiaXcr8eY7E7ptCwMjvvbLhhrVS5Y6Uwzk5ECdCwxeZSFESoT5MAKHdGztgMYGnZb9D",
  "key19": "5uYkXkXzhRNs6YX3iwkhMpt5TLRtvLMpijhJ13yFNGbGKATJgY7LWsLCZgGYnRK6c8wYHCqGh8CTMTN7RqZ92btB",
  "key20": "43jLvpJp2XrFX7cpD9FSMv6sCqW9AUvebN99qrNh8ZGnBJLkELboNujPs21JVvjfuEfqngNCL987o1GTVtAGtPBE",
  "key21": "41c7byQHyxWsFQoCbFvtick9gJwYS6WoWg4i9V5CMrDzw3iHuahZG45asoNDmaRnq7rnF5aYshQ19cB68Vdzhuu5",
  "key22": "4xrygaA6mPxmKj3p74DSYmDmHK6pAkZKrDPKfkRLkbs2i3tZeZUGBv9dKxdV3Vrd8KuLPkKU8BMQuJ42NkpDBB56",
  "key23": "2Jre4Htw3FkERs4JH2FDVxna5kxu9ZKGyuhK5SoZwYqdvSBYQ8vfk9Yw96MrnyP7R4Xc25zzVLyo5EC1o2XCFHBy",
  "key24": "4sPv9HnUn7yGA3ZKKWz9CcZqzKBhuTs9CUVX71Me2KspjFwW8QmAdGndHwJRHL97cAZfUpWJseBeDujpimXKAQCA",
  "key25": "UMMFq2U7rB6R9PgBfghQPZwnfud8JavYjBK76d2sNDckiHj8dYuVwaPQHHwSHPJi9rNvrKSedCgHCLJqrMnX7mY",
  "key26": "tCoQfoCxNDEZhG4bR8ukBxbbB7v1taPscrJBMU1pMLEw2MDRU42u4pt4zh3PiJGC6mxTXcC2K7enupr7NNKFaAW",
  "key27": "42toPbQxucjqwzcwa8KMEhrTop8v7T7MvmebpAyiTr8CnwknMf2jgKGyoFMshezfjRujW2cGyDmmSnRWUZD888rq",
  "key28": "3neC72YAaeWedWCDBC89SXsXLDvY522saJYdhtSijYVGGbcWywPp4D7whUBfvrebqsF91f4gq8bJwLhoixgrVEoY",
  "key29": "jfb5yXi9qGjgStEaUbDAaUjFGhyEG1JDfWSzs1tCsrfVqMPqHPu1Qor3WHLeka8hDgYaqWxrszWuiUzUFRX5BW9",
  "key30": "5YLYMaXv9MNJCw2zdHU53c8wqxyt7mwbmkdLA6mxS4GLeaDJqpzpjgQf5AHvakWnNpe3F6SGMrVuXRj3jQczoDqt",
  "key31": "2vPYK85CiwtYndkGrPon6d42oLfSAZy95paurm7ve98i36iqYyhUdy9ppdkr4fEyWpdN1j1vDZsyUYJtvmNyXwGN",
  "key32": "3DZekmxPxFBA8gom4cCvbaJbu2mLHFPdM6Y7ii2s4Mbgyy6WEKzwJsiJttTkweGWS3M6B2R6SCyXEZqJERUqLsJC",
  "key33": "4f7sSqJxdqvBC927Ke77choquHJkoA61gnQG72wrc5jinDapPqfAjp2yF3CnWJqaMCxtffGmEUVsxY6YrZAZWCEF",
  "key34": "4hm8ErG81KgkPU7h6RLR187BQmdFEUmp9QKcExFqURAMssdvY37SUJEtCTEYB8UEHq4zBNu5E1xqnBXbxCCy8i5t",
  "key35": "4MftXdkJAAwvDwiEARczuGDegcd3CuRC5cmxJG3WkvWU3YH2Zt5iuHkdMtJK5nV8Z9VGL9ewmDqq8PkLtJsMK9Nq",
  "key36": "5LGn1CSymsd4CPHd3zXXenK4kVTpVUuaFDrMN2jDvsXiZUrD1cpSd2T1iMAjvQyDGpunvQfV8FE19pXkNoJBUW3P",
  "key37": "4W8FebgAEVWeY65dsvhTPoJhMYnSNZ9r9kB5p6BKZueDVfc5YBMFNpkrVBu7SzrfPP7VF2RuTbB1tCeDk3czstAB",
  "key38": "3TsGkSGN2Jm95JcfzNwHS6TfX4wMm8ETLdKwLP9yr5DuiPyPGvFkx29GYVMBzmdZDBor86VkQeM8eLmgXrg5STNo",
  "key39": "5evdR8xjgprhBJJTEBk1UvJQxjkyERrgXU9PANKAcVmdR4i1vmQ4UwAfL6rzysXJRKNBnZiJWyiYBdf1SMsjbMWE",
  "key40": "3sTpTHrzTVfEk5FrF3N8x7xkm7CVSQz9YRS42J2bhjQRRPg5K4A3DrpPmjUhjY4vnTGcwSEK2bzALnhGY3BwMQup",
  "key41": "4UrrsRjMuB63yKrTZsoQAmVv2MgPhPqxCxQeNuZ8PB7szTfJrtpi6kEbQAimkGtXAwgQwy73vUaRKMCaZ4x7orQ2",
  "key42": "4S5xrQ9oRR244Xdzi7dNCs1WBngrYe3DD1hLRLtN5c9nJZ4L8E8y6N2vktn9NYLrK8CgnDxsWcom2WRdt575GoWP",
  "key43": "3bXuewfduyhK6T2z16Qp6caAC7E3VcKvFEpDTAXDNAtbK1Zom6xM5tAa9XVn1guQHoLtBqRZtxVNFZhutcNC5AaN",
  "key44": "2wMxBnc7VGDRDdZ5dA4cFZquPrMuDTcrshcVyAfczr6dStUy2gd9gL7CxyQxnniH9dhxpUtBtZvjhNDr6ZERcQAr"
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
