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
    "3kAdr7uM6WyTyEC4vomdntohwH1DeWkWdFiqLPmiwRVY8i1zBqHwApbccLU5ErX6CkyGsA8jHnPxmYYxDvNtRtk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymNnihhQjKf6X6NWhY4SfMRMRQ1bmoQyAq93kDYMpN2gvoRUkfB5E4qsx5XNLFiwHpZTTN4Qs9numLn8dEkTBLw",
  "key1": "3G5T1NHLhV8rXhqCXu6MjYF73y8FEAbaRV4iePDxTahqPpGX11fbGW7BrEcnZGPKy4p7wCtT3eeaa78JhYKvvThE",
  "key2": "4fL7sTgrDMRH6wP5D5uDT9yhQ7KAR4PoeM2ECWYs7qL17cG7bzfGnYYQoJ9p2xbfvt8Aiptfpz86fm3MK1petbW6",
  "key3": "3YEZxhd4453nDcH1fY7TRrndhcc46Dc9YqkAyqY1ENJ1KAx8b95VytidHYMRkLRFT4mpSCkrvkmXfBv4VMEWseog",
  "key4": "2dss35AsiwZpFRLkoRWryvQdkqiwkn8D1StwFrdxU34vVRKjeCnjznS4kHSe8hXuy2Mvohi8jMZJ3rj1NxSDUFRk",
  "key5": "2U6mCC353P27iYUcCTbGpzSNKTpoe13NAvio4Qdxisn8icHKRKLSxKopcGZun3T7sWHBuYh6hiyX1ERV7zfskePV",
  "key6": "3JU25YXbT3Smfo44QMwpnY2Yzg1eN9NgjqqdDa3mt7NFsEV4vDSUrENZzDuDGh22HPuo3oazc33QgGAKj6W9dC3v",
  "key7": "hQvS9JjAGUtjEcSPUZUVB558WtaZbNAb9gDAEYmmF2K33dJXRgyVTfhmozGNzM11Da6UJwRsw3tAyRuewRessYg",
  "key8": "dkh7qAsHkh7kAKp1oAvZEx9BA7kaR5aovhdyycoosXJJCAxjVWqHWuVAw5ebH7NNmEAV3d9zT2LXuDZMAuoyKFm",
  "key9": "67aJVgqYeK3gcR1Enq6LeR8X815GxyvacGR1tFz4z7tvvQkLCenu8HKMGG9gkSgJb7HYjke8Gmxr6XwPpkNxqWoD",
  "key10": "vwN2YAm3TMSDVHhcdzFq3eHEww85kNXHJYUP1R8r7Xmgn9YMZeKxAmy4PZcNU4HRegyG1m4RKZzRoYA7pZ3STWX",
  "key11": "28rLMt5FR38mTJM95pxLwrprXx1EvRLZEnnmrKx7ADgaCNvLc1WXMcuhmF6pCfPF5KQSRhX9KD5xu4Yre8V6BC7a",
  "key12": "4g9RSwPHsMt45uByfBc46RoZaUQ8F9inimxrUri1Q5zV4eEnW8uyJLfRDB6vEfxsZ2HpvdcDj2NTnsGkj1Gcsm2p",
  "key13": "4FgKDSYwgN9pc7GFguvKcwzj8xJ8DHjWihQAPGvH2iALx2G3T975vbDDBEp2uFMKFw3nswpD3iqnzCb9xbNne9Kj",
  "key14": "3945YhfDUxjz3PPQ7nbYwfiD7NCQkNK96oa8qTJ8mws3kZPfyPuwmgN9ENdc7SH2eqBUdrjeuwEWBArT48gSWNdw",
  "key15": "2t8hk2ASYZDqHBN1QcDF7YtUGtQfcCVDsKguaoQZGbpK2int6QuzXqUD4btYgL7JC7JqU9cSGpSM2dCHAmqgZDu9",
  "key16": "3QqdYhVvtDQryQs5CcLpy51ebboqoXzXLuDmJXZUpGujNwe77JagkXX6BFWeVMkSsB5Ssxs6khGjGeTjBaHk5GKq",
  "key17": "5jg8MFNofo7mj1F48LrPJLRuSAcyFf4tCc7avYsg7iBTiQGQPGDqNQWAW541JzMErjuw49PCmFbs5sHZ3bsqt4GF",
  "key18": "4FnTqowNDw4mASsqcVfvoZGUqrHovtBxWuScAKV2zySFwmdieKpZDuYnX6VSLvmRVej3V4JRHttt1q818Xsbtcpq",
  "key19": "VLMfWfJBRjxPSvb5tAzBZgPpK6ctntU8Rb3y6uYYmPL98SdwaD3LWWW7jnLigBxfDkCsUCgBjm7tfAwohGwxZPF",
  "key20": "3HxCMwjvUyMzANdxYpY3r59E3pphmY4fi4bXpSJX46HPSrWrVVS1fKSsEbiUR7Er3zyp99WWoYJYHPDUp9CYr9Qo",
  "key21": "2Df2siAXuR74c9tRr4Qi41U9fmY6e9krdTfvwhYFyWrGkUn3TPUBnN7S8a65Y4itqDEC9PTzC3iDseGz3178v7gB",
  "key22": "2wozTFZnMviW9npKVhiKtbfyWndW2xeGVHJr6TzZLA9x2nnw3Wfkrd1aKLMq598P2HK1rkYQYgz89nYYYV7qjQjT",
  "key23": "4CJd7RT6uCvDfFx9YSVG6cF4E2zqYyRJoiynYDMaDNinpNHzVMRDfew5p2iQJjrsojK3k6zXUeXVG4DsCxWhGijP",
  "key24": "45ibtidkSjxdnUzNgiGTPzkPBa986ga5XJUA1vck2RkhQPcpt1NAECXnXLiweNmMErygyTyNtSJXRczFJ3mZETGe",
  "key25": "rSMCajQ4kaNiBuNKc4jW3ykAHZ2SLjKoB9aU8dJZ8PZwkygFGsoHeLLz8iuk9JWGaszeHUVqNVtBPFBCrKCVuEq",
  "key26": "5FMaGWcQ6gdRRfPjq6HjLMpvT8on9edPqc5V2Wgyou3BcXH6j5QuYafYecLsC1bkXbhnaT3SvxFSeQx2oTrQWPas",
  "key27": "2cBwPQKWc2EqiqmNjH37e7Xi3yBwC5eyaNNwY2uoPmMEXxLAKuA8w39VzgJLSokC8zsowQyn4TsVWU6TWxzbBXDf",
  "key28": "3APNy4M23QfuQ4VJrJbVvcMZ7rd5A8XHeUPDneGZYu8hjtPX5AjdE1ycuWDvQCxd1nNFXeVpu3A7oyy5v3W36YFa",
  "key29": "56tg4ppkoFSq8doHkSMUENENHWGtxVUyXEPba4x219V1vH59bDnfYc9njZ7VveECLyrMKP3gaQwbn1wYkv1KwRiW",
  "key30": "2o9jz5efMkHC4TeKZCdNCKxow7URpFmxbMPitGSAnt6gqFnR7ujtTBf8PutPSmYHD1WBMQC38HoZQYLn7fCm62AS",
  "key31": "5w41vnreYLyPgZTF7rka4mQ2wsLB9pbkDbSEKp49SK2VEEjPYZEsTqZEGGhSukyuS2LBVkwWWLn9YUnavut3AewW",
  "key32": "5z8HvSVqsXjqk9kP8VAUJBCZCuvSLDkrxQCe7aCA8TQANiDkEcWyD2WFH2g1pFdp74pGRj455fHQNBryYoALzBro",
  "key33": "2ppNNwXk12MnjDxsLNVCpmiaxy86yBVnWS6kLhU7Mw1XUCL7XadJEHuE5zwZwsmheercoCJZqvbYrgu6jzBWk31T",
  "key34": "3xBFCoTosN4tk5n91iXjrqH2yHcGFvyxNwZueNtRq3w2RCw9VL8D6rVzgkN7qJ6KjfUzpLGEjaueEDyfYvoQLY53",
  "key35": "9BySmVicMP95hDu1qHEY1Jt1AHBjq4KxYSq7a5Rrg9ewgpNafWrBADFm6EBVcuSYp1pr6qv97yjZXd6ncCA36dZ",
  "key36": "3XaA5C47L9LayzbPgzDYgz6i54fvB4fnFuLKbucfvRZyQJ1LHa5dTEkG1sCPY5YQFN69mMJiGeQKoJjMQm6yz2u",
  "key37": "qiU2Vb5uMYZCjsX2o8AXinWDAvikcpNFiamW9pX3h1G2Y135819EL3BrpYkqiEzCg5G8uTMEPp514RhP1jGemB5"
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
