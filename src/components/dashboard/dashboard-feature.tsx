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
    "2KG1FRxqB5X3xm8tsw2mPXAEZ9tSRSZGbMNqW6hrPXkGQaYpiKsd2vkVHpCmj52PPyVGZ916VSXU7eZCWyHRdtWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LijSAXao9kVoRyAtx8qYCRroa4UQYnxf6vULQ68Wqnt4kqmtSdftdCoAPVgBwZzbdRaAsAS2c5i8SnCa6y1pFGj",
  "key1": "2gLhZXqhPtYyCCXi5oirLQPoUZymQyqew1UPKtkBYnd7bEEEeFaYYwhsWTA4iMuGoBCdtuERiSU6BBCHRGhoo8Am",
  "key2": "2Y7BkxqMJg5yGiZ7kWcyXiBHe7gu1ZbjcxVb83S9skMjtfwA7gReh1qdgcYQTkciMQDhRcNW68uac4dKQJYDFWt2",
  "key3": "36JzcpKzL9ap9tSkRxrVD99p2LyFGmbVWgRATQ2VyBvC52cbjJ1ErfSvMbRe5ywrGuUucSDd1dS31iP4ccfe2gdh",
  "key4": "F5R9YJirFZruoZx53gAFYacfFqtRLkvSf7Hw52h5PSDQmTbboo4kRahLzVJnJY2rY4Wx3FfCbMTDyDqNWYXm6DT",
  "key5": "2FRmo1pnhdcky8Qbay52DorsZwYZ6Qp1ahJMjUMBiXpu5TbMXxyjcaUKhaXFNeHY9ux9srN6nfUUvv1kRjZAo5PL",
  "key6": "3PjrVhfZaZFPYD3V3MwhfGsmc8h25uuKo8Lg9bVTzrKnT9GP197Y6vg5GU3TYwsRfj2rriFyQ68jGZMj5fvoE32U",
  "key7": "fhMNUFyf6jSu3jtfGmf1tfVSchfcXjkeheSC2oznVBXKDrNoQ7Sbrnm24UwtgEax6grWfHuS3zxfdYWkEvQJ71b",
  "key8": "37g1NkBtEy6mvEusAAUZYemmaSX5L4sdtMMTgCZaj8oY6iaPpbemNBNTJ1C8DhjKDmgDKsdyfTk7M8gorPYgQqZo",
  "key9": "VLqs2iU1GsLxzs6uQUaeL3UTNjMJX1KnzFZAMv6Lqpn1iGUR5JCdTnhNCELhDauge5RFVeVeQGh3GRHdxa4bEVp",
  "key10": "Ku784L46fJjcpfKMpVf3EnZf7RrfZhVBodqvRHaUaankcYLyFSygf43CKMDq6oYppvnNAgKVFxhFG8uW36CjMJE",
  "key11": "25E8Tbq1grUhFknD2jnqCYdn1SJJNaMJx5j192h69S5YJxUEpv6c7Vh2q2Jq1o5f8yQe5TeqRVQBhXFLPXKZUdHX",
  "key12": "4cjvjQHMn5tZM8R2vMkKyr1h3JTjp7gJiKD9yhnsoFfeNVwEWbDtUG828j577KtK28SFCcM2Stj4jwBZ2bRfRsnZ",
  "key13": "3ePKNTC1FHQoHrWe3pEci5HkFkJ3jc8hkLY412dfBCTDpbYQrGjbQzR4SjywrX7fxnGQVBRqmsnHmYdShy8USTAK",
  "key14": "67UBdXFhsKenwt8arHzGdE8qdZQp5HBbWX8qNJNSz75wNhqmtSKfDbdePTCQGcNUHy3FaH3N6AeRT5SjHKW1R8HA",
  "key15": "5qkMbePWP369dpCCmpEpa9dRf6F7vgS2qmtTpT3jvbvXRExMrpWq2YYnanXqUsTkwFepfBPAEPX4qkQYqmEEh5Vw",
  "key16": "2YQ2LWt4H98hHDPGvAXa2pxfcg38pbyRkbyaH8NQRgUnVM6wWHxfKLh5TMJT327honcDq6C9LJxsSyMv8z9N1gjH",
  "key17": "5oazQwHPfbMhEeSmLye96fPeSBkVihkZsrWHXfgtwAHF6kd7jbeTsL9JZDJqKgS7C3VEs4M7y35pKwGZXbFMFh8k",
  "key18": "2VSCwiQgZYkes9CrEwmE8e6pX1bMyGyZZ1tHRNKAajfU8eLw3NpSVedvEnf5ofg5vXn3mmKXrMJTWxKZmGpcH5xu",
  "key19": "52sCu5vtKGom2pyS8k9CCNrMDNn5xfA9wANckrN8WSuJPpdUqDw5jbbfbG5SUicCvYRDeQWYAwanc7WpbCmXCJLc",
  "key20": "63sCGSSTrH6PtSXcF92v7uHrrCTmmNPNB8UU9pEqF1p1c3xmjCTLUA1sFKJ7bMfFeWrt83399CsHaahSqZGPrjC9",
  "key21": "5CRwLGyQpXJ5Zqg4WRRJQ7h8FiB9XMW2Nf5c7HDYJoyHVzASPjin6zoo9NyFugesJ6z466LezNJtc6QJLXWEWB2q",
  "key22": "3gs1VdfvP3nZCRQFNmb2DUhJENJeK9YDkGbJXnb2ieVVoeboDH6gqZngVN6z1xEUwjQDFzWRp498ji5QZue7tQ6d",
  "key23": "65BDEZjbZnemKtAdf8XaYUwwR6uheSKyy1abp5NYSpPUAKYqjqKKxLrTetCrbtPf1cA36zwC31BptEeHiVEZNwo8",
  "key24": "5aR2hH4EdYPM17r19XMPuuereBhD2qwSWNaWiQNrrBJ3wQywEwuUfBxMPJwewnWZmitEUJo4eeTLMeZgbyS5Gwse",
  "key25": "6dELsbyaY1SPkqn2i6AYYwx5ESe4rsW29SAtaefBk84HJKAvMTmhaLvr1WBAnkyoLE6QLKUPwXjrzpVrUkFBpH8",
  "key26": "EJZDgntsP9nDkV3h4A36bKQDXY4GTJ9iLrZ6enyv95MMNuFEJtQ31GpbfAysyXDjBJPub9uDTaBzWdMYTTfnGN7",
  "key27": "4hPpbFUKNbUdZKs9KuVox5S7RqoKCGASj7mSSQRF32KXFZQcGnNrv3i6nZW8hr6hPKE9u33cQ9a4ntmycqfCwyVA",
  "key28": "5eCEaeqNnYpJ83pnQNDipafjNc8CpC31GcqxvwiYBx9aVSuEkzNymSoHTMnNnXspJLSSCVEUMWhu1AEcmaafuJ9Q",
  "key29": "43sqKWveF5dERvXrvSruxUnonmjJ3uybQzqyXmssxLxsSYKw3g28QQ4FeqVcJ4cKVER2zw72d7Rj542jJ6WsGpHm"
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
