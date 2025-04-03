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
    "2NNHbhPwRHaKugGCzmQQHJ9UdUAD3LBEkHWbDPRL9WbUaPxeXt1sEsHDKx8yPSu4b7rE2UakuFCSxKiZfyv5VPpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KL6aKN7aMVzT8RHrZ56jqczFXuRVwQu8azMhXX2EMRwFmKd7BgBDkU5bmjv1C3iHwSNKe7rBqPyXSZ7x8ysA9qA",
  "key1": "2jFDeSerDWWGuLGWJ83LHAXboqTZkNakhQT7MZCmsVotHH8NNyprxd4rdyFXSpjT29wsLvaqNC1VepwME2RX29Dw",
  "key2": "4k1YFtx65tAxpbf6owxDYu8fCRNJMo3mzGeidykjn2m7NFPVGGpUnQ9sSTAqN751M4MWZ6YBSLZqRxWEof7a22hM",
  "key3": "377moDbaTrg6CZSUm1xf4dJk6gdjowCsLjwzb6j5cQPQenHDAUFZykFmTeq36zW9TaGU9o5CVLCbBuRYG2kuwkqi",
  "key4": "4R5YGzbr1D6aeZY4XtZvPKvqB7UGtNynXXFJDLybf1xRZZQB2asxcuCTkzzZpxHcn3QYjpRAcUwG8ULYJxSJV2Tz",
  "key5": "25dgGSAbukD5pwo9XfiLoK23YJHs35WDJzJasiwjy4uFhwRE1w9Wspa7cK5SkvpMbWC4XN15Wc4YR8KR8NJVmwpQ",
  "key6": "4ZjSH4oxuGQoDQfQLraUaS7kgGtFoopEZPBPq41gK7wtUqe4AGvisetLD2emHePtzHouV9Yin31MRAEy5NEP53Mx",
  "key7": "2o5RzAEPCneUoT9TNXg2nY61dz5PFo7nQ6S94hLngisDapNPdfqA7pt4JhTjbhwqcSu3fDEd4THsxtFFg8rLi5eD",
  "key8": "2NiPxqXBrHuvXeBUP4Xbvt4UoKRZRgzihhjzMx276pWY4ysTNY4esir4sorTBKBzWeRutpbbu8tf3RDwsnGXYmTR",
  "key9": "1nYm7ybBcecQsQtwED4pR18b7wpZbvB4B3XB4qZAmTyAqEUR1TW6hXc4b1YjtyGahdL12FkuguUjRSnD5oX3s7n",
  "key10": "3bGzWLFvMK2WYGXqZ8QtbDcFiNdhfeyGLMCWu7nRJTwams4ZVn1y2KoRLZztZse5HWsR4U2m494gxEEWRPuoTBpi",
  "key11": "cRA2iYMYf9VS6SqJk9DjbaTgyuTCDCe9CTtz6xefB1isjvJSkvK8LCZfWYzD4ZkTmA8ac9uEFvhyFGt7aZc7zNr",
  "key12": "36HFSncSSSmyoA7VYdPEvXV6zwgFXBS11c5bG8kb6QmkdWueBbcfJK87zTdMMVyvLzdVFMrQ4BtVLwTwKrJY4i26",
  "key13": "3LSckmip9X9urHTS9ektypHdkJKsuaKwfhkWHEr7BA3y8vzJZLE1pa5kyT7tu6JT2sskhARbU8dH7YzQEuYrjYFa",
  "key14": "2RXMGob2c2sDv4t73DYCmpm6CgqArf7UoED7NA149NGHJ8E5hShncDr5z8NMLKMTpMnuha5KUb7Jj6dToDuGPCdV",
  "key15": "2hhfwkmjFgzKnoCoG17By9d1Nqcd1ya3duUhdqGgyjmHNJRRFGZrnsj745RJXeWaoW4gqEJFdfz6YTLjR89vyEAs",
  "key16": "dxNknzTKZHAsrXCu5vZ5NSDi2hBTWTHFKJBM81t4N7QtXrSmdzQBXbGjRcMd4megMz17mmpCxmLSeWSKtXPJYMn",
  "key17": "oyWL1kgsspTySNep8JeQbzKz3weW7g9xHM3Ju9rTHkyJy8PETHDVSzY3XC3RBD5v8Zw8VyKHCo4Larj8uvmWWqg",
  "key18": "3dsEP7376MRxgp6NPnyn9DjiWoPdyBtevt4MqrZuqpJ7ozW3ryum94wGhturBM7QzNKPxJoLFvaBHREh2tg77UhV",
  "key19": "45HWjwmsYGerW4nF87kD2iQFA64mBkPayYjAmSouXRdjWyn6ML7aDEpvhk1C4BJZZD7tcuxPDe4FGfGdBTtctv7b",
  "key20": "45hisE4zRw2jckmvkKMQBb1weenNEdWRGh4CMSgcBjnadfKyo8hfD6TYm41bEL6P4syVjkuptZMTJHRqPmVXxTzh",
  "key21": "2tKT9cYznhVZqtoTco6aM5N2F7oHjvWpFn9PS9qMAFwJwabWSENXLYhfJ9iv4t7vEyGp9TTQbhwEPagebSSGtZAD",
  "key22": "5F4gQ5kzT76L6MutPbfsrJYUjXRRu3DtWHYBLLQSvAZ5RCGpR5ChZVfFeR7Si1uKMMcvYnZCzwakjhSHYa776YN3",
  "key23": "3VbZQUZbN1h88gjx8BdKVPsgHNFyMM1VTLPSid6MLDg4aUvgUWMVQqhM1qwrcRwEWGzQhgjjuEEe4m7hpWNqHiNZ",
  "key24": "3VNUKtyHWcMJ2yzGZtzdd4ZcjKC1ZAdrWL565GVrhRpgTcjBzVRUmFuX5GwmAVDjfufkrf5naKiPkhVyPgjtMzyk",
  "key25": "2jBujALgf1ZgRACm3XpsdMvs92pNJbhebwuQTcVQi6BfgPR18nWxn8g8sUsiE9MGg6Pdnkkecs19JXkPMMFNMopJ",
  "key26": "gSvVLNqPkAQK7mDRUbiiCHQfuysQ431LzdAwcjdu9TdsmHYvdpbuUYAvuU3GxxigynHEsNfskwmn2VFhS5ZchXn",
  "key27": "23Yy5wja7gefAk7eYMjNKsm5fJKnTws8NGK8AyLGxqiie7ESsAjqLD39VDDFTXRv1zTmXrykETRp4BDAG3jHuUvQ",
  "key28": "opW2SPvsF35pVCpiXzXoUe9NwXeMMVqwR1arLZj1AXSpAAVFGJR8Nk1gcbkPrc53p4rsAYjtvcL8sEso5UkwXAr",
  "key29": "e4RL8ELkBiihY6u1zKf33dP4UHJbFSmCfJV4gKVcTRxDQXwWnSXdrDrh15gREUXzXuSvEaASHWz4Qu2cbhxy6wi",
  "key30": "QMrM9UYoMc7Vd75YdBaXuYBGohaxAAoaEirf9PPqLtyddKn5KEoxR5D4XYZjJDxTmo9EVL9hQ7esuJum9CnqNSa",
  "key31": "3KpAuYok4ZPAc4JxjgqzVcd6S5BAQ6TqQTx8Mh6fdoKHVJ1N2kPqHFXJTG7cNXVcBrhd7VeDwKR92F3E8GVJHW5r"
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
