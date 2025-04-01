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
    "5m73tTW4bjsAPeYmJxY1yhkBUpN988mwCmGkdWApfBvf8P9NceN881f6ME6Y4DiqkuKD67GR1dpJv39kAJT5buFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSPajYRG4XA4XJZPxomXd4k7NVtWw5kgrmckj9B3MvD8WGNzqapUBwFNfgGgryQpTbpn1CM9eMDYQ7ABmG8NzNs",
  "key1": "5gwZbhefXQk1b5tvHZRZx5SVEAvKctCVBLPzKiMqSVMuTPBi6ithLZqQ3nxw7NaGPEYQc6p6QFmQwfP9MF7teS1N",
  "key2": "413J9ViBKUP2qiapnbbFRdcqJt9MM2hUZsbw5HkCgd4t1zB9WMkunhshBiZJrV9t8DM4vscdrSVmvu3m2DQyzvJy",
  "key3": "35d5vMnBKAJo4qM35Ged1CNiBBDe4V1gRDVDojrbmg8R6TrBX8kB7ETM9J5tqtfAZgVWjfRuZRxonqvuXrsSqSfr",
  "key4": "5TbkdSMHgDuVSznkhgwiFrd3ytEkiFAZk4fG3ywnsYZKesrWBYZpHJ5ifa6srNsBVb4W3k3wsBSB4AL9BRdURcCf",
  "key5": "2owMpjt9dyBvv27wJjtTeW4z7T56bEEXn9gnKVzpZxDobNWcV4ABuBExBtmg8nSvUnCD6RSqEKfuz4DRTLoYy9rJ",
  "key6": "2n6bDCFGbZXt6j5gw9s7pPygka58Za19gz9qBJKjH6BgLJKVACJ8c8FVdZv3a4z3DfiMg8E84ZL82LJJRNAw1rL9",
  "key7": "3kpdS76nzey2L1T8hfBrthmd2mifzPoi3xTE9Nif33MjJ2nprzfmUnhgGmbH9NFvCWxfBM8QFnC8eYh2zLxTiKPp",
  "key8": "5pQ5B9gBctgQy8sJNsyP5apwETmaDUXpqoKVWkbypNYd5WDVoUjDFcUaLzN8PfAVRQcUP5nWP31SraHBEzwNH99U",
  "key9": "5y3idedux944rrCt6LnRwKejjsozLz3vGbbBkYF94iP4y4aQfJVVmrs6uzNUhKmqLnd4sJcJusdWnqhPHgh8Ehig",
  "key10": "4H5apz7wcEbCc2TXPdncrrPNFVex6PmsdDeNnEW3FCEGvrJJyKRUWtVnA2U2gY1iUm2XMiBG6S1gS9FtouM4nDzs",
  "key11": "ACKD1rFD3fm1nMkK53tzZ2pGUQPGnRjS3Pu8ZDUX4b6qFEjuYkuiqE8MHKGBRYpF96ps55zK32VZKoZ5eFojXwK",
  "key12": "Cp5tGYvGhpmHe8ip1oueC8ZAUbuKehE2q2K8eemHSSofWPdzh9tJpRGwCgdbXFpwzErS7q6sqAK7nUeSzcwr9dJ",
  "key13": "2vmkSDmGkbDuuCkxtCZNUkAE4S1zWWyDCtFQgsmYgyHvs2Mz53UYrbafKQapuS9inwEwhzbEHFEqWaB5HAqUAE1d",
  "key14": "3xMAtzrzRYCEyJ4FAnLNesysaaAQQCh5gJUezknxZcTAVSaqVheLizENUJ9hJ9xegUN5FDsVReBtWtota68s4vQ",
  "key15": "4gANc9eUmUTyHRzNnYvq8MQko8KjSW6jcBuMvcL2xaURcsbs1mAiHpE5B64JwLhhTNRbMSRLGS75Tu3BtGYXdkhL",
  "key16": "2mD88QBZKrsiyA6GSQsgx3JX6HhRDkMafBmefbziYDJRPFNJLLKsXCiZLiryFjDc6geHfsKCWXcozGLZjNaBKeVC",
  "key17": "2ZsqhaW1jtttQcwgJNUB3KPVAxHihC4Qmfr8fuiybX9d57ffvvp6JrzmDaGvRFKsVrF54VXnSENHVc6sWX9Y5sdW",
  "key18": "4P6LjtGEkEMCXJytJWHBro2s31VdiaiFo28y8cn52fmaCzJWhfpgH3pNz1AqMAqpDPj3YsxqQ3Les8B3UrWaCZTw",
  "key19": "4yGQRuGGYMYyZWRCAQSajVxCZzRvQHfyau1GBv6kqp1W9cqoW2TPxCkfRq5aH7tNGokLtqJuXBZtRNYMMagLfXoc",
  "key20": "X3eMofN4xHHtYsiDRB9UMEmEEoREQBaDNPywkLztztD9RZPc1sdL6cGmX3Fe7fbGg87jBBAdYtSLFZEUaX14Uj4",
  "key21": "2GeqgspJ1MVgG3p5d7sFKoTpQgDEsrCCfuthNd7PZfp2ihBjrwK5jfX3YtsNKbo5ZteWNYVEx6rzj87JT5ndWuQf",
  "key22": "ERAp1frEXfiwHAETguj6XV8XSExkJUML5oHicgfBa2Evo8CDGmnCiAadLsbemnHA3xgwg114ipxdmLFczw1WAk5",
  "key23": "2fNyxG1ARPejK5ufmV4SwG4DX1xvgDPhiMRJF457B4wGg9wiKbP6krnCZnTtecJWRB6qm74c7UcVbE596DKr6khr",
  "key24": "BZubDDkf9mQydskXCwFCA86XrtsF37sPbLTzSrqdy8SZwuWewkR7bvkZLncqEoxYvsYc9wW2LetS3QmAKsKVxvx",
  "key25": "4yaUUqiVYDkqUewn6odosNZ9UfEtXmb1AjZ91amGAdyuZs9QGJ7oq6HLzPQZNxpfELyqd3WkzSMEGQQixX1RUwAU",
  "key26": "Un2FLTwMJcaw8srGYPuZXk4qbb4Ks2TRwWybsqjeKXTjFvymyJzrwC8xyx8JBsp5Nd3Xau95px8jKduteSHpr1n",
  "key27": "25Cdoos38cmB4FSTkcpFcFZHA8VfdLkRZQgnyVg9h263sqKpSXEMUtQKUCFDCopiWPdRteR1nHdXYThjWybAJY2N"
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
