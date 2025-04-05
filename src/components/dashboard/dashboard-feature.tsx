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
    "rKT63zhdnSo3WAnGbd8BmGyU2zEzRA5YoRdc3MWQ7hxeBzG8V7neSBz5dGKpuEcCJCKPyLXrUcZfrF8AL9ZdwvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z34EchMyX8HaLEMH8KSik59yJtZqUsTP656yXVJy7QXmsLCS5wwJX14wecLCxwoT9YbpzXL18GWYDkDLDqhHXBq",
  "key1": "TfroV7GSL6XnTByjEux2ZNQbbYmyustFRhEnspRYezSQEbNSXsmbY1k7hkztDUuiUMQ2ai4FinvutTJfQ6AZgMu",
  "key2": "2YAgxnfdbkguPsHyWyCYvpzxb1Hnm7vGCHe3e1P5r2vLeQXm4Joc8giVR8RJeDBo1DQkEJKfS4N5c1NhE3Gp2moK",
  "key3": "32b1dusAhkTKqUc98D3zNXJ3FiUSLihaTFtgQ27NA3JXFESfnRGgYgRiBaZP83N3U6UVM4V4oc9T9yWt4NZpBqap",
  "key4": "ox7w5HXw5doMzHhn119orapmxNCXn8ie4afBM61imWq4BQhD3P8N4bRLhiJsyEmBUKip15FMjw7c8129dxULAkU",
  "key5": "4gh1L8Mi13jnddP4mteLDYg2Hdi8THS9o7XyefyW9zLpDcBoPEF6ndPNwhtxY2JFaMLYSUGDQymgzo11VNgqrRVd",
  "key6": "3UTPGkh1mVUNkgwjEYWLKNG8LzLDb2otkutsSeTSGJYhWDxJRRh1hmbMkSzgiW357fxeKWZLeLPbChWHJH9sAteC",
  "key7": "yBEhv3uUQZ2D1LniyGYPBfzWwkP4DqT1TraSSd4fS4XYK4oE526rbekpwTkLF4pQGY9AD3Xmj5bWHYveFkMActw",
  "key8": "2mpW3WjWg3JroGrezW9CvkB1sdsShkVx2PipRzZm1gqVUf1jUy6bRjQzwJbVTsiBejZd1WreW8FWf8p5PR8aSyqk",
  "key9": "37zAqm6KMt87xZBybQHx6T62QUQsT3Syk1qeNwhEQsWF93XwkiVfgRp3mAPpxfSp241qyZeQHjt3E85uVUiFJjEn",
  "key10": "4wcxTX9mUPwHCdGxm8mXfihyVEVxvb7GvevEyuTZEgXnngwXsRJp3JK9mL6m5VZ7iJPdDweVSPTiBMk2C51uShr",
  "key11": "3DqCeuPxrWCcUf7SV8pRDSkihkNZ6RBkwNULaSSNkFoy4hH4o7Mp3J7nfZK3KG4XuS7wFP2u8XW4zXZXkEamxmeX",
  "key12": "3HGsv3uhy265QAu8y1iPc3Q9bSLZHfhf6xG6Qphn8AiNBqFWSkBZq9vVjdKeUzZZK1MCNyJao1p9BhDU24So7VBQ",
  "key13": "2zndMsq4ZZtryGKCc7uJTW7jMz83v9vyKEbmhS1c5aTMvBWb5Fc8HA4SHNf42tdbYwgmU5mmV4TehU1faE8jTh1E",
  "key14": "3hGZx71eAtkn5iWhATKv5SCXmMvEVqWFGugMNeVpFRrMK14teeC6gNLgya7qN9RqWRdsWA4t6E3NJQgXn3uaBcmH",
  "key15": "4G7ppTsHpMtNTdyFu27MdNxsSwKfSqstgzR6r1wYbntWRMkYmckgrSihatkmz7kqQ3jLsJmTY1TZAqdxJw6vYroq",
  "key16": "ARTKqGfqGhg7Eeak6nS5BEC21iMLqhvynoJ3pLPyHysW6coQ3aZhkoEyT9NXiRX6WM25NfwC9JggzmdbfD8nm8k",
  "key17": "29VFJxcAPFNkMuPiLSuAAsPAbXetWyJ357eVSNqq6WCSvkB6yGShJwSj18xi6JJPJYpTJP9XQE1TRQ32viHTMqdJ",
  "key18": "CgtKngAfEefPXRGX9z4cdLFnP94TbieTLrwMWjBHBrxR3daywNfM6KFxyGTAvGSi6RWymNuwNsLyDPcW6e7DHaE",
  "key19": "Z6FD6F6pREn7GMkw9qyu5xcncSLjF3VYbSjNcQrTWDQcLa4jRt5y2uBApE3gLvBasijozHomTfoi6XvA66zhbxS",
  "key20": "3AZPSDUCXkwf41tRbPQAN2Fy1rN5Wi1euQ6SnY3Gbbhcz8B2XXpby8Vxy3vhvUMgkLZS6c3oJbz25L88DEoqGnnA",
  "key21": "2C7KztwRPB7Ji3x35qrkgtaEk8F8hXWi8xgjnW497oQLWjZ6ovVPZbUUHJH5pv5rwFLvYEYhAvhMbhjfaPAXCSbR",
  "key22": "ZsCVQ8FCT9nffzyMHzbCaHs3FvSVA48X9vL5RDgBWYukFEDgj2ZLi3KA8CN2az7LyHAhSf5YPYVPFzKkjG9ZbCs",
  "key23": "3RNxJ5BPeBBzrd2CLpz9eL5w8h3KzKTQ1HmH4Auy39yMPsZTKiWosn5DJyEG1mh5mqqr34Wby3FGkeXead5g8gkR",
  "key24": "9jHtd5E8R1tsV6ZwjZdG2brDZVTJhZ2Rqjwc9Pp94AcZ2yCohpcmpDVfcgv28DpZgf7Z18pL3AKVCMfvb5ordc2",
  "key25": "5KwDHoxSfVZW5S3JYdcWfyjhB1eg82r3488BD1CNpX8VazBGRu8M61pG9otJwG67BBEX68j2AwbfqgRAcu9JdSxH",
  "key26": "3bymHCFvxS2N8uSRUTHuzX6Lr3axhnNVTcWYmVw3YFgogNrriDLEn7H68bMj3dZp3AxomStkBbUB43dbZVXPa4Pq",
  "key27": "vFyjGS9KkPgmcj5RmQvPokv7kUnSKYJRp2HNZuftVpJ1HXANHrrKA2R8xQVncds6T9yHdE1AoemeATdWXJBs2CD",
  "key28": "4u9rf64H1LtNWmDt2eGASfdbESMFa2HLiykbAy5VAaWuoZwyG5jXkUeEBHTyLRGDm5EQHqvymXmg4vkmrS8SgPeH"
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
