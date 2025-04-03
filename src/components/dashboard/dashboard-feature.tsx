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
    "EgLCHR4SPrfYy9BXqB7U7cmxkdojTyBqR3pecJNm43arBQ7VQtuvZoHRFAakZ8faWTKif8QiyTXpHtzC8QcRRBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RTnQD3ar4BUMNBxYLU4MbkGS89b3XZbTYLixeRroSLj1Qg2MtMqisViFhRn8LB2YqKEYpK8Wq2MJMg1yzmujQbU",
  "key1": "4GQskaXRebiHvcaoyeWe6QVXqoEUU53ov1WoLdSESqPSwHfku8HqfUyk4tG7v2qJePhWi4vv22HummD1W5domLsA",
  "key2": "4gU5xsQEzA2LUrgBMyNfcGxzSDc6mviLywEcK45rvbyxL7U7vW295vjuZnVH3YMh3wSZo5p2d656UuneVH56d3rR",
  "key3": "5FdhMTLuNLexpvJqYGLepvvs4Qk5Ezi813vrV1cY8DdcDcrpCZgiz3jegTzxeBDcpXgKVD1Ysxyogojf23Q72Lt1",
  "key4": "4GeRWKWLv4ZmQUYKJzobw5iapxie14f9hUVTem5unimrNapvVaxxnxXkKAX25TqvwoGajhSV5NgpgDiBMAsfg1pC",
  "key5": "qVYgkQe3pnq68RZkUmV1trLt4wfiZTTGC9N3Ztnd6CM1h9QgK2L28VvTJHS1tPS81ZBdnKoa1YaFgp33D5tzaAN",
  "key6": "4XgxPrYf8FMRP7AE8TBkANrxbbs2fdQFsN9vuH7wKcbmHPTkW8RiVnPH7Cizn7Zmv8mg4VdrkS6pnunfkknWYho3",
  "key7": "4htkcUV7Yw2qiii24sUJ91pvsPuEbQQZ1wMnnHU7Du6aLwotm3sxHDBxH7UAbFpmm1PRcXDZ1TX1GZBcrKibzG37",
  "key8": "2iN6yKi2kwfSmNXbMDjAem4KveWtEqU1uDKqSVpaQDXHP4gFV8cwWkxcLiW1VSJwVtV3ighW6w39sSTQybDD1Zas",
  "key9": "7gc2be9Vf6sE7Rwms4S5AHxX2EUVZqJvZn9E267v5uzTgakDqYqCcSYa5hATTPrN8ioXBW3T1nZkK1HQk1YBf7u",
  "key10": "ffJkAoj6KmXPcBoLxm1NBWei2CA89dHdX19Dok7mdBkrBBBPesZG844HiKn8iPaqAgGjjDXYdjHGaXLQ9Rv4h6J",
  "key11": "5vjJfkekfJkoW1ZYA2q5qwKhNVM4GNrp9LnfczXq1YWRfb9wWN1nJYH9c6aeMYjMbm2TDom8TeXpB5AuBP16vbgX",
  "key12": "2gTnkgoBb9NWRrNEhSWeec9Xg4NMzjZWESn8tggXdruCiSA6BgfH6sgVKkUQfT6ejwEys8VFst5JkvwKcYoPHnps",
  "key13": "31snPbCttvYKsmA5RwFrZ847P3bYBTzZdKoL7EAxim9LgnzLBLjbRFtrxrj8zwz2jDpJx66BBJHjdFmZ9GrgXEiE",
  "key14": "5UchrEzHxKPW4b2Emi3XS8264bvY5sufmReZrohwGtnX8PKo6KmAENKZBupk2JehZxuL4vonKxs1jBygNMsqw8PV",
  "key15": "3w9dM8c1onhGWuomhYbf5aJVnFJs5piA1NyoH2yM1hdJtiE9w1fzrFdNFbyBn9kJSzdtn1KcFSLZgPerrLZjCvWz",
  "key16": "49pjLBW4PJWWRph4EVp9KFZRmysPs6bFBLRLwrkw33bynbZjYwiBNYENc1fDk9CTkEpNAE56dgYmNj4d98bGstib",
  "key17": "PHkWQi1jW74MKkesEK88E5LE3kJ7cDH6WMhygRLyNtZ1RAg75toXUuzHxHSq4zjHjYq7ANbkZRvv8X75becGnkA",
  "key18": "35AvBM7iq8LWub4V82xJkYNdUqvHmLbRWeTAPRmjEE3A5iwYnC6rk17fusjTAPYxrZEv6eXL3sEpeVdmjpPfwGNV",
  "key19": "3pnnbpC3MpjH7wfd1aUunY7D6rU6R2yMUp9Q7Q28aAe5h8h9zzSH6irYKV3LaGLeTCGccPyCBLtKqKBTJDj6p91q",
  "key20": "2DQoLMnmfzE6XHbCG9ASBS6oZ3JCXU1evufA1DRu2xH3U662xhaN2UAHYuAy8TTf7dSpEx3awaBFi2WwfZodq1hp",
  "key21": "65kT3MofdJdWHGBmfLzs7oQgB4LzD8GMfkhMrWkWWnz93YFoMMdVFaAMZtMbZAjvgzVq2dBt1tVojqXrNebz2e5R",
  "key22": "2weCgBxQwUXG22Cnc6us3JnZ3JYAxaKvhvg6aRLmwqR1bUDW1GXyh4aTgxWfzjQTDZWHPMvJiXmqnLpe6fTCkcQM",
  "key23": "4bU7sqWnpj9ngU9wh6W79zKUVz9RbeeY4tDKZi11kvtMbWcRX9e1QiM4Gaa1bUH9pc4ZTorAaoFzQKkxaDmA83Gx",
  "key24": "EtMFMhweZdLGdzrUX7WcUCoXCLG9tf58iTL6Ejz4BFG6HNmohSuUacuYLFefn7tw4WMNMA6xEjFDSSkQdr8Mbr3",
  "key25": "48Shgonb3AMN4GYcbfVoD4cPgL32nfY36LosQ3BCZ11poXxea2XrtpSkmcJgFbLj7W9z8NuXp2ycWQX48h7P5weB"
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
