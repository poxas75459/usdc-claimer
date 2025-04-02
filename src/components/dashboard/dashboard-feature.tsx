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
    "y4vDMPpiiqtSN9gDjWpdAdtmfufJPnm1GE6duPJBsuBX213bQSdSvQZzzM2bqUCLWergPgsU3SMLhfKSNJpaugv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fQDWWyzYvaSffyiW7StjT1X3t454K2eQAXuPmLj2XkZMvsFqTU5XGgvWaCqsYstMfrAqaiTLVa3ZrX8wiCYjz33",
  "key1": "52cdLreSXCC8QjQpQ8RiYyqj4nnZHzc4qU78QvuqfJbiyS7hriFFhXMXURmnNL75GJ9b9T2AVn6c2kQtFTXxn3zy",
  "key2": "5rH5xHeQMeXnL3bXfetq1XaTKVkk9mcDbaA3FunzAZQEwhSHRaGNssYf2fVRuyEF72YEEcht6KqxA8pn9Kkh9JyE",
  "key3": "3bgsiWBDbSKHDdqU2Amtr1aMTTH1eVtqLmJZ1TitsL39J8aLAfNDNUjFj4rYDUi9pTCBSM2hs2SBQ9Ct4S1xZ91p",
  "key4": "67cBAi3N3L5qmgFc1f734TNNuBnmHMFaaMSqFSE5h8JQvpTRtkG4BxV6aJtiZhPZkgwcwpziZxxaJarMqvis2sYo",
  "key5": "4iXisXBGwN8Ypy9obykhGSay7QNk7o5ZWfofSnxDF4rPaWBnTXwetMW7sDkxeuNLxUbPYToPKqNzgAxL1w5TyNe9",
  "key6": "2zVLWbCYJR4B2z2VdQLFYdaXFJUAgFUn3nXfjvuYCmDD8kBVme6orSejf9M7gN2BTA3PRe6kAfQaGzD9ubC2N1GM",
  "key7": "rmgf7sk2kywYj8sYmV3RuFzk8FPaigzhjh2roynMP4ZhxB6bTAxkZxNrzvpfaUfHmcwcmrvu29UMmPzjxqKW2TP",
  "key8": "5KcevEsnLnau8JHTXXCFXKEG8ekV9o2q4MokHz1sqx9LKi8hZeMiDCyZv8ZfyisFNdbo87tCWbEyvjbVpCPZKvSi",
  "key9": "VciULATFZMtDc5e89sEtRQU3MXXYekDLPbhZGTecMPSLXPsK1WtUSCbVsvERcwvnXK861NtE1RR5JbVygHC4m6d",
  "key10": "2nJ4ES2pKKmVJGVt9xQ8kWFddqLm1cWrFBqAEBMWLvXMF72CRoaWh7y2DShfVRthHk2gfHLC5xqwN94fS4Vj9ayU",
  "key11": "FHLWy5oXrWjT7ayi8oD3KTtohFerwZeHKSpUSzZ84Cv25VkuKTmutguiKyKDG5TnbLd6bq52nqL7fzL91L3mdjP",
  "key12": "2uwG7g1yPtLiYJc8SZ2f74aUJDAakEF7F4yA2myXgfYfq4sXjaRrxZMTc5UeTKxLkzYbnv7UXPu1k4p4Gz8oMvHW",
  "key13": "N3yk44ugu8co1WyrMMnC43eGTLSFCCmhyXmR57jhGbVcQ7aZmmt4Bg3NdANfW4VsVdMsZ41XjUwmCNEzJWQXSjU",
  "key14": "4JUM3qrf8pWu7Jtik2WP3YSs8KXzBXkbnZ99dfzpjHwDF3cajSAhxeCg9B4No7qi3oxP8b8k291d2K5yzukVy7qK",
  "key15": "5jchEkM7mTyxEc18pTFagwSyE7SWF7Nt7kVdkbTv5wLEWDLnNef8eK5my2VLrKFFAUtxdQYz7GQ2FmwzEXj8MQn6",
  "key16": "r3bdYjCorL4SLCz9nHmH74vTyU3LRXTfqm3wyDX33WfVt1HVBFpT5Na2cJEg5U3qdkqDyRdXV7VZyVqyqt4sjjy",
  "key17": "3GmN48fsGNKZWPMw4BmfQn2UFd7edZXAhTZ8Ypz8Umpd3pmpphfdrbbFWkALsSavkXm8bSGhXHwx3iTCvN59tu3B",
  "key18": "iigAJcVnLHzscDUwf4hzv7EvTfPuQKdgQEUMbCYDkwPQ8MJe14eNCwbR4cu8hnENcoeR2V2LmAJh7uwyj4nt6ic",
  "key19": "5h3dH3pBfeBR9pQ5USwx9fYzdNKvThATqhQy2ZKpTUNVnTvjALbJHMtZK3JKDUngzANx7qQ5RSQviHhiCCahmTz",
  "key20": "DEWV9ZZk56vHLc6WKi35xBJCNuiFSkU7YzJ4jYyeBihzuwW6qv5qYVN4Zf2NEMHUtshpBjBhpZ7Qqb77bVAVXui",
  "key21": "63Budsf7n2Yp5DmHgSEJi8gDdQe5JgFMMUb4idwiXHC9JVsTzBM99LRHCQYDaRbmaNYpKVa745dyxz2uuEF3YAGa",
  "key22": "1JtgWsAfFz8XKBtRUeCUwPoFZqa7wZoEhfbHTinUe5HMAVczWytvhPRLuw9rN9BoP22GRcdhSV6oHozU83J6jJd",
  "key23": "APjgpy2bBj6tf2S7AWKUSTx8eNSCaCZANyYwmvrGEYyK9Me24DX9V222VrhjB1nW55AsA3ZqsT17KBjPiC7Zk7Q",
  "key24": "5ZgwvJRgyxHjRXap4NywyAUjTw8kCoUDypjtMntJZsb7oUt7MnwbpXos5UmWZqG7h5YtoaSunvNwUVAPzN7GaSvD",
  "key25": "4X4xgZmZbxjquZQtKpUg18tEMsjWnnL6hyfEX8RbfBgsir55tNxvpu9EBjtzUygZKJs4CQhJXH6KP45Km1ufL69e",
  "key26": "2qSyvM3LxbN9AW53ZX2maJz7cstg8LXhK2Lk51oKufWFDgpYaSHzXFyrrz7mSVkd8eimQic8QGTzkh498oADyQFx",
  "key27": "4WQkNP39cvSksr9qGaqeHnGwrK9Mfu916GbcTe47QRZKASDazbHrLHp45qqTcYs8ywWUJUzrTcYKwzGgR3XfQFAN"
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
