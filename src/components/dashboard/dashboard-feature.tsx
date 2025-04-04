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
    "3wgy9xckLsDe9bDDmfqT2KJRbCFhpBBYJWwFJUonZVc8NKsSBhTUoQFpqGuV3M6tidDnmdprP8kHo3mhfhCnwerE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqaWWJBXoqAS3kqH1JR3q2mSKFyiGhnxp2rAmQ4qGSj7exx3GFsUFVTu7msvoqvCMrfRboBh8c3uhfRS8YvRq9Y",
  "key1": "44TW1FYXPQ1wcCjCXso6FW2e6CCsFUK1hKppD9obzczBQ3rXkZYodBnigbkZ61uWZ69ocWEeyiZUsTpr5mb3pxeF",
  "key2": "YmGoXZGcttV2eL8qep4iriEwgPCRnEHsCfQgK61RSUrBij8bUZ3Yf6r3jYVfvDpmSvmBHmWABz28j1utbAHSyTj",
  "key3": "4VYq3as73QWoJr7KuvJzHhcTtbL1GTsYxYMgcoSnhZysKC3vW6dfiAgTxEHxQfCBePo9DK5ZT6YNJwYvs2Jt15mQ",
  "key4": "4WDfb7DimpDYszycdqABdpfEEmTXfieX2tfuzYX3oaTekYJ1esfNCqETZ86q14c32DUnfiJHSHoSFzuGAXN3etw8",
  "key5": "45KZhdp5LsAdDGKuBmSMLHwcFVQJaEj65xHbxDvBaEN25xdqXfQdrLbveuy3gXykqTk1aWZjkQKoWnex4jausdZR",
  "key6": "5MaygRsDrTNDKEwovFR6rv2tJUJHZBZhAFwHYjzZJNiCkEMHBvLAvHH3FRDnX3W99kki8ksQjXdshovLiyYCzFFv",
  "key7": "4TgM19sLFkhoaV7RshDWdnFkufPXVYhetwkAhWS2sNNw5XVxJFAg2LDGKd7KrvB9YB7rz4L1UR59pgUUFoPLj2W1",
  "key8": "4QJ6z9yEW7CMgjk9pVkFZ7gfuu5gyVptEFC2tFH5KJc3vTC5NgVnGyfFxTznQRQWiUfMvUyYM4Knbce2v2e2C6qf",
  "key9": "5i3uYqebArVoimfj44JaxBB5fbUvrFShiMsYaJwYMqK8qwBNdGWGxGSWnKHMS7C7Lk5Cn64w1sJ1iNTorr73Ese5",
  "key10": "4v5mBFjvu5Bga68aBRirixfMLg4b23D2ViEbA3VjCfa42cMDm9CPFtKQUqqiWyKMQ6owfp477batJpRfRsPVQmcY",
  "key11": "4PMQawx6qWUMmVz8g6aKFV5bgDTPbp1jHwxkPF1tGyhU6Vf6SYW8XscH22kHthWMSs5C8YgxfiJFSt2Ct1WnBHcq",
  "key12": "2GazVm3z8vmm2S9gUQsT1hj2Ubp3Ru7jWPn7MEzdt1gquV841Azrk3zr8ZYVvLYP79AG8Us5DipAvsWxF5tvm6K8",
  "key13": "2fnAS8QZZsCdjmH53D9A65SLewiQdxoXYcbhaPvN3keMFcAfntFzECsVu9qYKAMej59L2xa5UUf7tvhnAUGR1Y95",
  "key14": "4CwHsvKxrkSMdWhBsSaknnoL8SQtCAEMx59oEGQi2eEf2PD9HJW8N2hr2Uejmof9mTGnJNBn13XzfJWBuUjcVLL2",
  "key15": "g4ouXBSiiqHzyLUeS8irTSH4xkNv6qRqyNTK8fsX3oGtNjsnprLvwBHuvTjAmt3pgiHwUhpZJkqrVx1erTyjTX9",
  "key16": "4a3EM2UrM1ug98MnxWM5LUSQurY5gr52Xz8iMiS1iHDyvCFsxfhWLVSs99GqB7HcV9SMUXy5jGNFK1MGecA314vZ",
  "key17": "ijFsb1ak1asVxgAYGuWr5im38UCVi9MZLf2Np1hbcxFjcU5xvmWUvWWzJjippnq79pWL74526M1HdeFZWDGY2Sn",
  "key18": "3ofGE6c1HbcQw4DsVazd2Aj5EqE24bz3u2icczULb7iEhPj1KBBZZLAkXAS7gqowYChKc6CBoXyTeoXYnFfmLQKt",
  "key19": "41P46QdchLz7Zj9jBCExeWAgsnNeyeJz2wUygijdya7H959Sbr55kTNvBVFS7fyvgbAnw6FAM4QUAa2uLfJH7TTj",
  "key20": "2husG1ZV4PQHKBuoNVTAzWFyZZ66twSXi1iQfNhiD1va3d4Ta2dUxCfZZwdHSnGhCYsGdzNmxksJQisLGLdeQUm3",
  "key21": "2eD2dK1j5YE7r7VfNrXrmsBuW8JndRZTB2b8oJu2rYdiYg6pAsXVWhdUw55EFXTP4T92VnDNjkazXjbLj6JJE8gG",
  "key22": "27K24vvcqP5KsBSAp5H92XoH9mQQYHSVyjx33WX5KEk2jtkt3fRR3dxBt7iBs2ZNaZ4VoXHD24i7vzWcoZ4ZX6jn",
  "key23": "3AFLnbRLEvK7kQ7BfQFTMvgFtgUVFb431fkThEHMrQhLuJWJtt1YmDREh3za9XuXCchswpDUit5bc21Y3qMjMiRb",
  "key24": "4kvWqZ5Fs5s5d3uyBD5aF99Z7A9KYzJz1i3vgA16mkcmrxJgbc8dsy5y5PriYAHnckuGbCPzFL9WEYQU7TqZLKGQ",
  "key25": "5Y7mMLMu8A5n3qhLwar1MKV1yMQwNDprBPyc7XhgasuJvJQH5eti3DkjegfWt1DRECQX2HR7RN4L5ajzDSwQ4Rya",
  "key26": "Ljz5RBSBzHPMW2qUZWfdZHaD5osmKwedSuuF2G9cxvVBbKZjeo24Anx9dgcA85rZmAANEnzKLp1wBzjdzNxw6kN",
  "key27": "2gm2fXPLs7mTPuqpoFisGYpyh1BXGoJFHoNQ8gJMUTwJPtgHuXKLu1FNyEwrYzjRtThSvM7ReKPiNWJD1oTzHh2m",
  "key28": "2QP96z9yeC2i8EFMo6AHmNrXS5Jy6an92Ye5LSdag6wsvfN86y1rW6MGw3JrUuG8wdBSfVRFTxrhoYaxof3bw3aw",
  "key29": "3ARtPk5bAJhauq8x7SiWBHRt1dgZ4cttnCP9RPgJavVv5k9mpAdWHExYPQiFPk4zBZ5CFMZJyDpXoxrNQe5w3zmi",
  "key30": "58z1Se5ohSZdKb6LCszBzPpjG6BVxJXB9Rt4akvj8GkzyNXrzV2JM1yJMtFrUd3Vtvdfr4JK1eGVn68Cng6n93ff",
  "key31": "PAunBd2C2MB8916R2rpTM2VetotzbFiDQm7NNcGxmCQaAtb9uionsVq93Myhvw68q9LxUFNLqnVB7vWazoKkzoN",
  "key32": "454VhLz4rsdQXUh6v6qvMzanYWsfJAQ5mm6RKP2vaHDe55chYi3s2Qv2dac1ysouQYjJwhhSn13jh3tuqCNHwEca",
  "key33": "3DM6TZYeHSPHvNrjNFSbjM3d5VQ3BhP8pYiAv4JE3z3ddRf37qNz8B9Gcf655ABzcTDVtPtbNXNntq83n742WNw",
  "key34": "yBtpwEAoKRDtCcrXDAMQauhcWNC5GdBThkrYXaLCGzkKwSTifkB7MGTSZkW6FSpvyraYJUaAMQyQYXuZaWix9Dt",
  "key35": "5WVEAAJ6csT138WgGtsgBZgtbwj8t2wtAei8Z2DmP6Xp7XNBWLi2FUSUYNoBH8iJMvdVUdRCdWGNgPKK9rDTwoMc",
  "key36": "3XuFCj7hTWyP3VrxtwjwUTujpS5bdJyod5HFq7EnMRt5gj14g6cvGWYHbJdzyJ4NYkoymxuWgriXaSKsVnYp4VNN",
  "key37": "2rooCn4FmCULF6K2Up8U6FPjMzVP3igdGdTf26nSSfT4pgvWrcH7xA2aHhrPPCP4aczQehSrkuvQKysotXKktVpj",
  "key38": "56fyvUh5Yo4K7ZgkvoNTMwHq8GvT6ZT9sjVhQB44B4Pze7zjcK5u8snUgVxQ8JKHesouJLx8CFNvV8VsiR68C8Dv",
  "key39": "3GGHUzPC2cdVzL8QdhbzVATcSvRQb5djeQUtFmTcyffJX7cjbR9Rg2HQAGaY514crDfRk6vCFNonbLT1Er2gSu1e",
  "key40": "yHivAMYkXMmj7ExamdBxwvXBcfuJwSeTDWDUjtYdK7Tvb5eMkkDX7yWHTjgqfLect3MNSRbMxCgjpCmZYXvvEqx",
  "key41": "4P9Ya4kC3YPkWPRsFTJse1yvLXPXC8JSNPu2X17PT9ww2FSMZexKjT3ppV7FZJmwy311MJhbm1mJ3gSEUKRGyuT8",
  "key42": "3kVrnxiWdh6X67N9RkR5mJNsXJKtgtvyPx5Eh4acqSgoeaeqnwe5TdgVHyemoZKGJCiU7L7UcifdvQimNnT1eDTm",
  "key43": "2ZZVZsxggW2uugfQgBxaRt85yDd7x3w4i23kLBgXFQMZRojwPrxm8J6TzayTFELQXaNMkXkAZNEgELkaVYcgTj5g",
  "key44": "28jjdDDiag4te6zyzKuwwsjuYpLZN75fEBkux2iFKWCTowBr549PytVkorrYfqbdAtfQZtVMUyGjCt5zuU4JiKma"
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
