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
    "42DJ99cxQ44994RUgKVtFSpiM36N5rJQUnkkcjdLek2c3kQ3ZH9eSmhhjRDHHR51o2P3gFzFkws14ZWxdY6KsUkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bZwhm1Xo8XxwiLVdzJRFKnrKUYMw5mm5Av4ezbwzgxxc4LxiaAgztaHu3uRiaYKCjE89q9y2z7zw5M3WjGV8Ja",
  "key1": "4QNV6ajCDM9qKVCh6nZqW6fTwGwxNAJ19mehgLHySUBMHr62fvXKkeoATdRK9T7B9kqk9D5MLzHe4sVn2L8ECNhY",
  "key2": "3FkpfpZG8qEKDavumR2abCdJVzsuu3daCu3tkN77u3pcWHqXahzT1j1uvhUrYhFwNm8Equm6xwGMWxALY2fKo9XJ",
  "key3": "NfG1ChsQw4ZazMVqdRky5hX1q2JPxsebNMJzbwitexQXNN5rrZzx8dCDCoGFyP3PZBV1QLYZUyH77JmdzkfvPP3",
  "key4": "38iz8CoPzW8D8QwEKLCfUf3eUiri1UAHVZsAtMJhXmbBWFoXTukR12KN2WaKs3q7oGBghY4ZYqC3N2k1MhgbW7Nc",
  "key5": "2nd2xY79dTQzYbRo1AJoqxMacc1TLzQQ6a4jjWxnE6x4Z2QNZjRftXzyLtdc79cmwwDD8dtEL7wvtnAv7oQd5du2",
  "key6": "3kR2bpcBEsLGVVqsoWe1L3N3tdCkvbFK8xLte1Wdh33qfLwA5ySd46KgKSSLx1h54EQTpxhDi1PPTtY4xfPW7uDh",
  "key7": "2PKbiVjGuY15ynjJdd6ug63noDCcVA3kU8MSTC5mqDdaxRHLbvg6mZBHnjBpRrRNeBEtSFGLibDyLGJuGSvU6Wsf",
  "key8": "5NU4mCMotad3AUSGAFqR9QTmWh8YdrAPMbsXWd1tWQFvQWUzPU2jrxhXFzbuovCrDbWMGADestYDHRbwSA5DPWUs",
  "key9": "58FJmTjtNHt7dWE8NSznyCYvSPa9rvQnZuFJ4yF2MsSDQSQvuxkbgUt9zF1oz9znZD4g6AL9qaGSeoU7wAdNFvMi",
  "key10": "7XRBbmjY9TMv2y5s6y1nbAYEjRQyCumAVczJTmVj2gAZ4mWQUvKv9KQkdjjXhDmHGfZBYEd4o3r1u7dHR1zc4ey",
  "key11": "48Fb5USphxwazvbt6sgjU4e8Hd6vCbGJksf9uFyszPaudBgvXGQRrEcRrY1RviUVzhxLxpaTdrmV9PNqxC7eR575",
  "key12": "2RNEbw3eTdmaPR5BYeieGyycK3zrX8VjQn6GpZMuLBzwtEFs2tPUhHLkmEE7DGAmUiVD5C3qoDuD7CGpqwYsWwZU",
  "key13": "Eoj8jRzsGJeRqcTHZTErKwV4SuF5q57HvubDioUFD8HYaFVh4fyVx3VrycUEGDgfe8cVQJ9MLSNpomzKHxubySV",
  "key14": "NKo78kiKF8iJ1An6Q2c68hMAPaLj4FiZwhs1WMs2BQZvAkMvzgMfw9LfzdZ9fPsk2o9JtPcrw11nqU81QQNRPzZ",
  "key15": "gQ52ucMKv2oy9kbRg3xBUCoTnEyKTdXRNoriDeCgHMmoynCrP8xJZyxbxAF3gEcdT4a3xGBz4Po2xf1JNAksFSX",
  "key16": "3SryqVLqKCJVGncyUzTkigg3y87UUj8SLo7E2V2Rnq2UBq1DaGo9PbgoTE1BYHZSKeUriGuBBRGogS9pdKRuPs66",
  "key17": "4CCR21NvLnf6E1Kt7q1Qs6crBnFff7UHpq8b6aHHbZr8YaVCxE9eyaRXV3H1z1m1xAdmTzhu9E4EK17fuafLQYrk",
  "key18": "5DXaXoNpr1DHnvz43xQpEE1HiCm3MeiNZoKtfyrBNsTpVM1jahrBiqLzPiju7mu4RuxbKYiBXF2PJNkxE64oCxB7",
  "key19": "2FnWB1kbVbkcUwotr4VtM35HSFPoTRGJaJpdmPtuYHYkFNHVqFZ5JkLcSaqTDJLMBmjLChReByHEjx2Rh2cbjupm",
  "key20": "3uqaQ9PDpuuRTmrtqc9ezvfV9tBu3KgzYKsrerpk8eY4nVxnRof3VchGfq87AxHE2XYCSwt1pwUEv1X5vY8aUcvJ",
  "key21": "335SzeXjRTuQx1dY9HiWMVLom5jinDdvsyt6JrFBh7sQS3zBQ7Feodu3eBiChHr22nJjErQWatpQGFtpXqLSvpWX",
  "key22": "3ptxSQx3h9bwgaQroMFgGRpvwiaKkjxR2ba3Xc3nMq35sKUTS3eSyGPJupzm3DXTFEL35yZp9vd8EcePMv7JHj2W",
  "key23": "3W2RpT6uYnpeUtb8ojAM84fS2gcVZ73QtrfHjzDPFjEYjvobg5KZE6MrXjAKcF3f4cYKX39dykyHgCiPCrnUWtx2",
  "key24": "5LnfTJNLiYtM2utrtrs14RTdFZ8s8m246UerV4PNZAxCxMGDxDrFYon8uA5fMoQnY2ToRtGTqLS5iKRdNmU41R61",
  "key25": "2KHw2PQGGddXtATWcz7wkdYaHE2m86sZkwjptrAxW38uUoLVZ5ENg5FCVL3RrBCe6inWaT7JWYk85JorFVM5H2Zv",
  "key26": "4NWoubMzn8rWJAxbkG8HrTnztkurBaARgmTixv9AW7PHvynJfvMLBZgcPXWzAWVhdwzqVdsHcNAwh1eXQbY9mdrV",
  "key27": "2i1mc7ar7uKr6p2TrwNj6xFesLSHZ2pF1Yd8n31pyvbZZNyUtVBNwtdHgS2W2qweFJndxze8aLFHTQeNMv8tzjYx",
  "key28": "57FzjukLR7eWj8m1VhZnay4We1DwX1onbmARx2WjcsRw7Pa5MAveLLL6ao9PfFV4m5pk7MWBg62jQ7MHS7dtxtyT",
  "key29": "5KotvQ6Th5GDm1d6QAWQNYchDeJGPLjY2xLKRtf5Xso6FaavJBvaDPYiWxQW75nsVTFQWyGcG3VggQgZwx6KTwzh",
  "key30": "2xoUN7CwAJ4rFzXx6XSAHWU5E86m424ybpHcKXetGP191pa5AxhW3CioqzhRVfi5vSP45TBghyhNMHGXvZJp28y2",
  "key31": "2s9nMG67eQfYKe86LcNDoMXMyfGyLKJ2m7r32stbRbkusMQidxh41PCa3vw5krM9GGjiLm74Q3Y49jvxXmJoWJCB",
  "key32": "5eGbv3c6ca4iAzWGSdpX1na7qdCjZNoaqEvjvMCHjGCvzfBXwyrv3A9YmmZ9kyR7LvqYUivyQfpHn6e8CxLotj6d",
  "key33": "4n75QEThxroajH5XKC3CtSiioKi3p1nnazaUggCfT3vLeH87N3WCpEv7HBohYdMmyVyzEsEUud5gQwcszHe8WVzd",
  "key34": "2c8XyZQSoR15AZ5MPfYhAYz2HqFoH3S9qA16qDmDyTgmtXssWG46h5dxhPRtAHU9rGdjEKvSRqvDmwZzWogfZT3h",
  "key35": "58ztkM5HgQEerJowxtB397Qr75mLnuoYCSQ66WiQaSeGe7gjQ9CnsjZH7ZvHhN9mjfetazJ4ef9hhsFY7xfeHBVh",
  "key36": "xQMHouUch1zrPYL2muwPbPCB2RNeMQmxWeBYNmUPc64PihGNX5LJtNGcjaNCwmJLkcqw36LTe1PKvBU5LHwrsqD",
  "key37": "eCRY4m7UZk5MjgDK6AgrBUo6STR46E9gozAzrjHa2sYKXSwaenEXeMwQBCHJqBsfxjdQedo2rL5yqeJ9ktVyhqh",
  "key38": "3mShpyALZTH3dbFi5RMYAZVXxVA98eRi875hHoo9iMuKVryYQAfukD8WXkBfHjfZvjX6D5te71XJHSsLAVC1wnNK",
  "key39": "3ry4m7Yn5Fj1r5PSWjqKBJMMgwaVL8SKWAqFuBhRpevNRDEEgCKbp5fUisxHgJHoEEvq6wxoeJbgVRCtKBvxKDFG",
  "key40": "2XKMw4wr9q8hgwNNadeMqtAzcUMjm1Enst1xBZ7NQEbDwTa4zU93NtzoAJqQgNeT2vj8Dy5jgejehXrzubzD2BjH",
  "key41": "48M1BirfToyCEyhJvQL6qMbCzbHcdLQr4i9kxnayNL8YMwkYBPbFD7ijjSDfEHryC7pW6KRmhxzZQMjF7uZaCn1F",
  "key42": "3p2soBdsxiKs5MTinDXzRc5zd7gKoABdJBYGKE6WncBDmjqyYTRN6vqzd6kXdcGoTgughpaXEWTbagDDGwX8CuAp",
  "key43": "nNzVNLcV2h36i7rXaLZZ5uy2SNUc2ts8Cnz5F4drKQqiu6TkLUMyjJ6NzSeArbNFpxB6dNEJSdwHPm3x3bfmxYX",
  "key44": "3ZvsfSscKyJ7xJogmipaHRds52kWYf1U4tz7VkGdxMgeDpUwTnG2xodxWLSNcDAfMHFRcWLZyQViov8F45NvEARu",
  "key45": "3sq8gSormJHXXidV7qy7bpktD7VhfU3vPueAfEfLdPwNv1KXkm8R5tNgQNFcgAiu7YZs9ATXSpS3mjCN3aPizVV3",
  "key46": "3KYXN6FDa5DAGhXiutx76Uvv1gu6s1GhoFc9gwzw27nUUfzn1Xe2H7qb5uPnb5zH9ZxXvYji2nk53jV6uB7pVBeJ",
  "key47": "5RFY5p9Gzv7hQfTpTcCpquS7vqAZkLvwh6pvoAEDKjTjev6tLvHHZ2aN6bhmq8hLKLPjeNSPrQnQf7DnTHpYZ6jN",
  "key48": "37CfYPs2teu8EiZdLzpHB9eJRB36MxJYSHoqMT4gVjViWpzofKNDuJvABdjFXc2bFnZEvMfQ6oEWXMgMEmZFgvF1"
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
