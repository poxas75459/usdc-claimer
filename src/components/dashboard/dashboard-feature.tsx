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
    "AtxCDAD3LjU5NWcVZxttBjmMXiDRAMukzS6cxgVvyFT3BF3Hh7iFwkpeDFZ9f3F5oLs3ZNegaa2f47AHHNnhYJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HA5FfrdzUedVNCkvgQQE8Ry64FMMPD3ZuY4xsLprPH7GLCLJ5WBwzFkKdbDRCxY7CFuUoDA8swj1DCnWSRnGMeV",
  "key1": "4GAFDpscrsMTXyKAooggd1DJ3Gc6TBRFiWqd77cG23VNqXSdfqB6HTs16yYzpz4Tzk4U6BR36Rui46WSqC38Kzts",
  "key2": "4FjWrM62pCk7oJcwqffZ6C7n19ZnyaAEcxmfB36UU1cPDykYEqVf9SBRJxsdZYh7tZCtSHyemL7MiNZcTU7kJuP3",
  "key3": "3Zo3DScgmFUmJ9damgmZZsRJrQnsxTyBWFJVaFrSS1BMsdAQJK4Df8KXRDy7wpzVr3vaKyVpVqYv8YHAt3o3oiYm",
  "key4": "spZSAhWmv7MCAxxyegUefh1bEZhScrgNNtLd9r2wg3krRCMKrV9GBmSimncJHXmvCMBPwt8tu4V7J3Bw38Yo6RC",
  "key5": "ydC1ovnPz4PmEgwYKNMmc2pVU2rnfNgfHN6YWyNyANvgKqQUgsRRpz8n5aovGnM5su6ZvJRq43DzN1NKhrfLuwP",
  "key6": "VrPSpWZbWBsqJCoM6tMciSLGGcsP5nmKU76a2whMmyNfQqhZNiTeatsj9dCw5qPjHqJJfeiZBMHfsxhUwDDXAJt",
  "key7": "2cmSzzEvEBVyLwDLXSTewEgEYkkcymouXJjNKvt1HvLTCyvnCHUma12ko6XJeS3nug4U9TpFUmwTDcNP3FVMjVe3",
  "key8": "5PKE14MoGr6jWZvFpv1cW24uVcJAG5rFhokh6DQk8iRfV3BNoqcnCQQNT2kFHhXjoxoV88P5BLkLwrVx9XVrnBk",
  "key9": "Cju7FnbbCBxqapLzYyBAeY9ACDHNsbcPKVoSUMs5NLCmFbsNBrKNAvvXuh2SsFroFskwyVwGMaZPnDc7zUdiG7B",
  "key10": "3wgJ4hnJ4N5RxYPqThT75GEWACxuyDuneFSqYwAsK72zd7mv8e3oqgjUHgm8xhwQABqNVCRjehzzBQhto8C2MPJW",
  "key11": "4wPSbUqxdLxhs2bzDiLXq63WPNoQumwXaVsf5SHULVX2f7tooLuZu3z2DmC7jBi5hrky5oTgA4Lk6c7ctRRDsNAT",
  "key12": "3RA1BRJwdgPdEKcfWqkzT4yMDQ5WW5jnuMdHzp5dsZ6d6Jg1vm3RQozmfCg5zUTrbo73eJy4aCF7KqQ2wBTCsCHz",
  "key13": "434xvE6UjUVdgcbpe85SiLP5zGDbeEkNo7GqcECViG3SkDPwwwEnNzGXer8nREF2FRi6EUNgyDsGTM2hXu5ew9wa",
  "key14": "2m9My2KBJbR7e1txZxsRQKT6THzS6jd246uC74W7MHCeywtyW16gJQWbKHS2T6rzn2LTAU1V6Xhkx4vSXRehSN6R",
  "key15": "2nkNqqmb9EWLV1PgZXg7NrxQpRtQoekhpWV4jUjmey8Me9B4MgK98KPyT1MPu2KL13m5bEDnPfSKoPRYsLZMgknD",
  "key16": "18dYAnYPAgcfDm4f8zhyd5HRBKMaXEFnPTLp72dcoyDMEYWWssVsnCp8z2Z9cwyYzy9QT52hQHpfrqRnCKKDqTL",
  "key17": "3tHcq5NDxeyRL8ayMw3Hgn6XC9JAhyfYMXjRNP1WqXeGtxW4u2aq4nPezHDFx44iUNwcekftXC8HPE1zUUEWQvsk",
  "key18": "4Gv4q4Ngkog7dQkNHf8KV7BJbz7raetTcX2zJw3xAVQpuHjUb5cB6oYtotdXJjGTnKFooXRphYAoC8JQZBhGiVs7",
  "key19": "2VyuaJkaFxBfUTRjBFGV5HrXmopAdtM361vrT5xMtBeujWTh8xvuRzD4CGENffgvnzM8sbre6C6CMLtxNsMC36Qs",
  "key20": "3HcqNqrYRQwxgj9nvUQac4nTeRGZvra5NGyKxbPBVQAeJVETTNddzqk1D1sk2QgHS4UJxfJ6X8zQB5VCDrjvX8N4",
  "key21": "2ZyLZpUL8FFaBVjuPQuPuXboAu2YDGXbo9wTK1z5SZrDFoe5As6epKWUL8jci7w1cRNNyM2aLN8owzCreBKJp7W7",
  "key22": "dgHZcUVvLYjGFMKj5BoJigugUQptvZmVX8GbT2sd59ZESMaUZBcPHSEAuqiJ9zvjNLFpCHkbMpxBJeJnhpHAQCU",
  "key23": "453zZsBWfxUamnVMRXEEcrajywtbZYXEKbiUhc3ELAN5FjFovMFdma1WWTSLrNZMfZUwKc5YLMfiieumxwQmJ9Ey",
  "key24": "23WRmw6QE6sxtKqnKNx6prnHN83Mdqe3Ckqxhaozkifkc4gmKWdcToHVY5ZxdsALJDj26LAuTDTPgubPL2KFjGPC",
  "key25": "39xVUVtPb8PXKgSTYsBwh5H4WcyY4L2ahXG6XzXB5kZaW59AVnLr3yTxmqqt4ZmzJ62N3cDavNXaUaqpUYDcpaBA",
  "key26": "4zq4LkEaPRwPtCUibJrXDqawbCWZaZgAVdY5dp37HXTkvzTjqMauRGGyLkwJtvWFy9wnqBn7bRE515QmC83UpjWs",
  "key27": "5gtV57HgeDtt8x6wAifyD1hfFPBzK7BMFTBLyaYUC7oD4KyvdwoJu31ueMNyC8rdAioT2hmWVxpmMuNT6mzfe267",
  "key28": "2Ccd2tNCe48EQQNhVECjnWCJMvtdAGo4b2EPfzK1PejFBYMzjxXocd4URwtGRGNezY9mNELMf7xqMYe88ok8JsFb",
  "key29": "Y1S6EUYWCLUwUU98Udcs55DDeFxFXVmQYCobyjiY8BrCKqQ2bzkNaDSU2oaQbP3mapvhxLoZEpQ4AjjAHUH6kZf",
  "key30": "4PzeRWUfAXLfj65J9TgbVc69M94SwMEyi8hehA9VYSHVMgwoYSQsfEo98wffaPzBfaSqMt7yD2w2w2CdyTf63zU4",
  "key31": "4G58y6b5wQevGfdarGQfcKNrYbCYgf85R76XMF2NJST4ENhYdBTnmUTWr9dDZ89ztMSDFiv2dvBBigG7QwqYge2U",
  "key32": "4WcBQPvaXtMyjPMwFSRTU92ebXT2vGhozAEAs78SmWGhPc7UuXSHQJV9yMNqLQniuMVLgZJaKrup82hugLNdBpBs",
  "key33": "3zMUpnjJ8qR6ak6b6W6gVUZn1Fep5kSryS327xygg5A5egftwJTxFYTcb3XXGCSeNyzZb4YQyYgb5kGzEVgwYGF8",
  "key34": "3b2QZvXbQY1bT24MwLSFKdL9HexgF1SDdzfPtUxHntoL3ZML2WhXJ4GN1dBubCa4dB7ZxjNgJVxFuTkz2DZDtNAA",
  "key35": "5XqwQSKVbRDcKPUuYeiRJz3EkFyw11CYfZbGxHPvKmhG2p94SPzgWjLRa41kpNjTfcxxAY2GCX2sonwrVq3xHZAJ",
  "key36": "2DwCSJ5zBL9Y8v7u1YBL4Npsq4VC2pfKKWsmreU23kZX7raBqr4Pcq84sRVt7dkQi1riRnkwQRyc6SCTCqQmM6XK",
  "key37": "5RjFSB12DgMHAgSaKXGzxQomYRABoRjaFAwziohaGagXXnALDouc7NcnwkQpcQPNtDapFbxGFWkQkzw4cURKomdP",
  "key38": "41qm24Vf1owSfphMiRKvyxmenyBFgToFkU7ayGXVPpAS5hRe7NJQK7WZDuzaxD2pVi1rmBkdytjsvHsyexVyQEsT",
  "key39": "5EkyHq37ek38p1FiTi5rdfi8wuuCWzsmdcuH68pKp6vwzjdF1KDebyLrqDdKnzgrCrdPaFyRsyGahZvqXXFRMGHz",
  "key40": "37W8Ld5duAi3teTEw88eXYQzuyKz4KU4CbJmeZj1fNJr8GQ4NxDfS5gyRoz2TbQaVEN2rpAxym6mgTQyY9Dm5W25",
  "key41": "4rzsWzy4aaF9DVXiqPAocVADRXX4UsEPSgYEHUJYujFENdsAcnSXBE5hsyememaSwg818Vf47UTh1E7SzBZG8xZn",
  "key42": "3puLQUayB1jdvD2gsrMiwjCAmvYfb7P5nMXbgzUDXUf5BsmCZUcPpWyLWMa5eE2e62Dgz9cGK9Jvhk5btLvMEoLX",
  "key43": "43JbPWuHexGG4SiJthELZM4arGeWo4Ayxkid2ZtmRo8UWduyGDukfJS6JfKtJPsGgQpvbz9G5aj6vDYimPiDC9b6"
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
