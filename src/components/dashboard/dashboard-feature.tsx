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
    "KLhEuwwxkeVGycM3hsAR27yp7ECFcHxmSwyhbqyLfZvpgnixprziACcBzmN4zmLs99qqLLV3mwe2D4PKCiywyvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xHaLyW5BNZfAQ1aw4fDHumQCt3uvRKzpMNKoWn35Kyygdsa1arV41AkZJ8qQC9J6Qg9MBwLd4AzVRp7M52SccP",
  "key1": "67EHY7fNuTKKJEN6ekm2MKUHDtPxNYLT7tAKJ1ZFsrpPUAWHPKZraVYM7XXsicxg7f9uhM68sZjo1FK1mxEArNz8",
  "key2": "XEL1Krq9coe4YTQWNUQo1tXZSiBsd91R4qdhYnexrc2RCWRbKrZ3BGa7PDB39GMvZBfUjjPsZ7eg6NBLoUkaCEt",
  "key3": "4YRmf8jwqv17XR8fSTCTzAVD3kT5XXcnQjDRwJBaKv5s4VtJcyFXTioLDnyafovhXsbV27LnHXkRo9mdU8bwMjRA",
  "key4": "2Ed781UT5QPqidYXKQn8YtfiVk23sfjLNqbxQe4xftR7pWWsxWHeiRQp8xnXvr7rQBfDwnRuQphGpWz4ZV4EuUDc",
  "key5": "4jPKKt1U7yhwmgiBhf3H7kCRWyBF7sN7ckbjeoS36WVuUSeiKYK4b7kyqhnvnj29kRdkssYDH7iQN8j1m6sEHChQ",
  "key6": "NMqPcXNBwyDJwe4K8QKyjRsUS65d13T7D6s81jKA4pvD8tpXABq7JKLNFHMJ3ffofPAAMLbn5NZAz83QWB7Hn7H",
  "key7": "61UgqUZkynBdu4EkMKVMDaGD4omb1rNxtPot7ppLMKN6hE4sW2sLK1p7V8zmMoeUZyRZQpWMwDZCq2qLMC5E98TC",
  "key8": "NDoVJpN1g3S5KW1mKEnojSjnNJr2ReQec6dhbyUhKubZg2HhpiRAZausREmwdDd73tcam8VwqQMKu2DgBsxfpiU",
  "key9": "4fk9AxhLeHSBLgWykBJeXYrnf89sN9hgHisPAb62hpefgdHvJoo5aZ4dBbWdEd7v6uYRZDWoPZJXKLRHEc16qbL7",
  "key10": "418i1FLzD6TQKhVd1axr15kXEnUqsGNDgJUTXrkq2jndDFeQV1WVDGsBr5u921mWCpVvS7c8hBRQwFXtcPhyDywQ",
  "key11": "5VoRUH19wDeULkoF3U4osQHZCZEvxb13XufGzEGGY7j41CytWjS7KX4howkHdZNRUj9YtoKpNr26VJuueASdv8N8",
  "key12": "2Tcih1R3Qsod3FFKYnKWgZ8akgsR5qrxqZJ1anEyV7UWfEKMk1D6f32oDhgfMSs5fGfkzXgTbwRfWJvVuvG31847",
  "key13": "4sd7WwMD9wqShh7qBZj6MhgEencj3DgJh5NLT4Go3PPMJNzi4UpT88uQmTeBrh6oigUhyC2i9oUtn5fu2buz7gB7",
  "key14": "5QangpnbP7mNLXiGVCVNFQqyP7hXauu4uv49gZ2rptjuNSWZEA4VJomPaUJqrDPceFmaL3XgToFUmFmhw2yK5q3V",
  "key15": "2fSa4Qf6jjheqW27QuUz3iUbMNrq4ukAtJ5NAuzw4CV6XNUqVeCdeBHoJ1themZ5WpwAJszjZ86VnZkLuToig65t",
  "key16": "o8oD1TgMWNSAgQi5dfNzGXw3ZG5KzCsRJvznwXvHzbEbFvxFeB2norHo7y3yYEYbuK1pEXADpTCj9KdJzS2eg8Q",
  "key17": "4PjmXFXPSyNDGCPaXaft7Cas5qQ4HZ48t9vw6uCir3a8J3pCPeE6KVZvKGLjShBHm2Qe74dcnDowrnN8xM6qyCSa",
  "key18": "63tVTJDuJqmue1qJMvpTpDeG7DFdJCvW9qRdyares6KRwAuU5ovTtUhm8DXXwYyFPTxjpdVnHpCJgDqi6xvehgQj",
  "key19": "3uM36b71vqMx2KB4aKJsNJqz1ax6jsgGQ4cqArAZveFonAQ3FXxZStewscnrSR9gPsqhZQyUMjqdfWwAqtJKsBUG",
  "key20": "4CcqFA83cUxC6Wvm4ReF6kftp9QTnBNfRxbN6BmmHxH1XNmjvdA13hKgiPdizwb7PHwVv8KC4eVpecpBGN9i883D",
  "key21": "2ybpPiEXhEYym1HC4ic6u6Q7MYzzuX3AcjKEfxTVL1UNrhPL8vfQJFC2LXm3MzECB4SaY8H87TQdAUXzge6SpCRs",
  "key22": "5oiKg7KFRmxb9warrCNBnkS2vBQ8nhX7QWyTwgeBhQcHADodtbejNwKaKZCssCLLdnmKarPxCKGrVuPQzHGXdzqy",
  "key23": "4CVePjaoPiVg6aGGWJ7eAxQjDEygEkV4drxPWHtyYpLaC6zAm4F1AhtAc6t1ffDQBWgD4UDFPTi6DvRMP2Y9259i",
  "key24": "5PajKsus5JAoo1iF7RcFeivXwZHxRbUVsYEqwmAuTFqz3LNycbS7X2fE62KoNjnRFPNywwiorRH83H2ieqpZQR8c",
  "key25": "5UkhXw6YgprkUh2hZVDLYarpEqgLEkWBAHHiQ6g7TjkbJAxnkUcnj9xYvu3yvzqnMNcnawwm7QCkFUNgJ2HhMyyk",
  "key26": "qMS17yWYuegqaqk3TefKwrUTwhMBL27DaYcu3HKBvZ4BVUpnc6TvXPE92T1YfXn7SH9zXguhd2HDwWPaW8zazgT",
  "key27": "36A3dZ4GV3s4gDyMqs82MBs8wLqeK7UT92UgZZsLXcYUJEWaxHnEHnRcEa6WVLwv7pdpE7fUK1LKvn3QSQTfsC19",
  "key28": "2zgBbMrknBsX57W3bUfi2BTgcAcQ278mmNk7AYpkTNCvwQGCnnGAFTTVWZWMK3B9p17ce83pQDHZdbEmCWBsUTAC",
  "key29": "2hFBAG4tQPabga97AvwXQivf36JjpwkyBVP9Q2xSKZ1rFi3REYxBR86SQQnihYNMjzfP8NwjEZbN6BhdRdgK6mfc",
  "key30": "MSXjdaszSyg2qDpSynieDqSnJxhKtwnMFNUpLVzg3AfivGuaKbe2aBvfvyyneaNYLv9GS9b9qCerXGUW6VRbZNU",
  "key31": "5xaQsWXZYeV3vPo8nTNoEfMvRRA1KzFtQnWPW12hn3ew44XMJnRfx881tRB87my4Sxf4g2iuLbAY7LsYFzBMkzDe"
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
