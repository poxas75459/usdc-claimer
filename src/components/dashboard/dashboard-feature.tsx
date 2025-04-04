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
    "3FLqByCH6fBjU4YAqGJAF92d3Y4pgq8cGA56iGXT9xxcoBAkwQiiXBWNWrgqzdR1P9P3Fs9TX9qTiQrcqnQdAhFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJKybT3QxAdktm8i4SYc5kFuLLobuY5k69owGLyYeGExQ62oCD1ZjZRJzdzCBtwWMjdt1pmHhh1qLzpX3yYFUsm",
  "key1": "2DjE9czz8C7nTKugwwgepg3eXw5CCSwTKVSC3eaNvDgWSMnVCKN7oHQeNkGpvhczyFgKDGiE9jTGn8u8pqRJ2Zym",
  "key2": "2f3BxWMNJpykmNJpVTXtZ9agmgS1LUduzR3BAm4NVWmuoLf7FPv3MiZQBJfZ7mJsRUXCUxs2yAxmTf2gba49vVUc",
  "key3": "4eiYQ3LEsasNrxpoJGqH3VPoBCsni3vuExBrV1cmTZfrWgtZ8i6jiSEbZDQaVkZnMxF57S8nVF5pZxrMKc4o8gpo",
  "key4": "2ouJk4BgXxU2gEZNT2LSnNSuuyEk7ijzu5XL1YLFxdUSJHNDacN2qNiGP12HGbDYKmfm8z8R7KySXmX8VKf4y5te",
  "key5": "4hmmegU5askWDL1JByo4stKPYpXFW54ca5gTQAipHQbCCGZfNdB8C5XexxUZdh96kE7ne5jqYyMh9iuVLfWB3PKC",
  "key6": "37D8P677R4jQDyRXAgsozoGVsU7HfwBAgqedoR5rGNmSUc95Bp1y5Zpi4b4R4gLagP5mSG8DRSrXmTkY1gLTGWAN",
  "key7": "sP77ec1msdzMdktESCucGsj3cuK5Y523oRC7NJEpDxbmjQmMz6iB47wCKzNBSSRZEPYCVmsWNgbnm4iKB694LvM",
  "key8": "ugYVAFai757ueDLg8Fo5wqh3WWW6jywV1f33A5WYAxkNMxwrDcqUm2ZZdWqe5KN1sRLG9q4rKfqMqHBNT7MR82u",
  "key9": "4iX34GyFwGzCtjCthn8bWhetuNN9LJBrntNjySg3bVc6hGuy19gA2adzJKh8CDT3n98nC3hXqMTzeyQrT2uish8Z",
  "key10": "4kkQoJg8achWivDqX1BvG66B76SyK3CXxLpRgvE1s2bjh234S4a4586zU3cn7GVcBjqyJKphJ4ArxSSrYkczGWEg",
  "key11": "6ZLSfhMXLc3D6PSYBzrrHXeW8HACCDpve6efBSd379PKSmUoECBDxGXDkH11rtaWDfJdstghGmpKdZBrocNPPPo",
  "key12": "ZtEmRFZL7Q2CGEcy6ZuF5ix7nfUFo94BtCmZ37XeFAuDXsPc2P8U1j972YybwBy3n4tnvk5PSnnn7zvf4dSuPL6",
  "key13": "3dLK4NJAgSw67925wHNwLJT51K5jdHsDVQD2tuKQDsqL6uGkMDLHTtPvSfWBGHEQM7Pn9Tgzh4iH2P7452eUaWQ7",
  "key14": "nJzSJkLHwop6nD7VbdwaLczMhumrhacdjzqPnEdWZXGVjEBfeTLEXiapePMC2D3joMnWqDpaUEWLSiqrVnZndYX",
  "key15": "2aZUhJCqPJ9AHiwP1oSQCccJNgmsiJ4dH3rJZwBkDoh2a5M6SuyGjQYto9BVd97GnHajzHwwr5YghjYHTeTM21tn",
  "key16": "4V8WLVY4qKCCVreGhNme3RDGfdpzN4FsnZjDTe2Ha76qxhqjruiuJPkZcrR9CXHF87xf7Ez6QgHeJBq4Jn8fTG3y",
  "key17": "eqnJJwYpw5ZBwoJZzCGTYiHxC8J6nytkFceFzSvo73xzE9wsmosjUHfq9xhXJ8vpTquC3MctXcHXA7KAsxQuXnR",
  "key18": "2sGNLKKVxMTbKmrvp8KBHpk1kEgCNErKyEBa6r8eSEh5PvDoz5CukcpHwoGVnHVxdRdjsZFdF8d7jZEgndBUrFaS",
  "key19": "2KksYf9GrHGmWtfKD98PHrRYvfhZMGJinHdGkH5HjNEwArPte5HNADyA3XUQvSNvsCSesyhrLCRXCiTGMSKLmVWv",
  "key20": "5FR6HyRqPu5ihPpYxN1qwKsEqtCb5XfHZSMJbg6BYjLdKb8G3ukiz8zFAT9sndqhDbn47gPdF8EmCmqJqyUhRZ4V",
  "key21": "3cwZxToxRB7sg631z86i7UhQ4wNdXgBiJM876Z7BXap5tNpuFx3EC4YxKkF3ty94p6NxTb7vRZ62sBeEfnaXqYWg",
  "key22": "3ntb6NuP7EzfjvAN4ACVxSec9UEhoWFEzJdGyqSagtrqzXYharKUP9j2njv1brUqbU4a47nceS8qEdRyDhwb9ysq",
  "key23": "8CHTx2nP8h7F1zc2Wu5siJu1yqfaLELhaLCdge7NH3mTsfAZtxaUyBaWD6coGARUNcEiMvskjKBU98jns9skmQA",
  "key24": "4teqD46gAwbY8iS88Z4NLqZaYsMMNjfqwGFBAqWZs4TX3Jxc9sCxtzgrxabQ81NzRjn8EYzsJ5FYVoTnd6RWKpoW",
  "key25": "ELdZsmNSCWsvn9mqR5FAtsr633eWf5kWCPEhELTuHouG93DMHuq48qb3sCMayK8N19faiJPVDS4tiSRf8GHLkM8",
  "key26": "4Hxgr9fFpAfNGd3TmQggRTFE1wNcfgng1gbB3W9kCKfRpU4WitLebBPDLiHaB1rDFoccrBkbKQtNAyDekoFCt3T2",
  "key27": "3XuoBDrkjxyAHjQoK5HMXCvgbTJ7oi3Q3x48qrDHyUEfPWFfMK973uRimiBhkLR8Ar2FCFB9zk5fHtvyWEoSgJzG",
  "key28": "3vNdiHi7tUHb7wZSX63z5cX4rEZvcGxTFkejvdJoz1wuzAa1vhWbjngGPoYCma6hbj2DhpiacS7eRSaDjJ88w4Lr",
  "key29": "3Yowt88gHnVdBD4XfjnmrNVKPSLxYVt8h9gVGGK6PrHPGuA18TWHiqNdSiac6UkttuqAHrCALv51STgnK5pc6XFq",
  "key30": "3opY6WuyDB3c9PQTeiGf3hNqcSHuEUPFRyAaXWjNp1bhXZXuqFzATHbDPgMtnf4wrnG7e5bPVUjabjBM6NUDsgsY"
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
