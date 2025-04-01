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
    "3nwGnQr6LhG3GEnzodWPb6dVX6wpGN85QS7iubDUeLFNdXojPMiGCFhX7BMbWQa3SYJokNEjwnfzV7hUwnzr5pwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5SC8S5awzcaWwN8pySHcny2pCX86ChzwrhYieHha3gpmqsdyMyxbUQT61rjzm5pXrXe3M548eMkk1Bd42p9ANL",
  "key1": "5sgfVXXBiKDCXUKHJ66Dmc7WbbGwe2cPQ4xZ39rVwbeZgY7iJVgS4XCB5sRmmcn2hFkqaMikVWFFpHpdaJRCkrLq",
  "key2": "kHgzAXfkQvUxrjKpzDRQ7PvbpKcceGBnspe2DJMj5aaKYcwt5x6nGneeKuBujpuqVRd1c8fj4P6X1W7QsWAJLTw",
  "key3": "45YUVtwpix1aQNEFPB9peLZrPkSMnwUy2EXTosDagbCjgdeg9EnExequy87vuZpNM6LKojFSjZPp8LsjzXgzSUEF",
  "key4": "44JLjDr8qQ7FmtzBUk1jh6WH7gT8wmGmBuxHYycGagBjPaLaKDP5yquCEqhyVpNg5DYXuy4Lvm1FSMGtvGz1GcWA",
  "key5": "2N5rxtTpB2z8RuTBAy2eJ9N5oQqUMdFxGjNKSWuokdRz9oWcjBXD8Ut6M1UkknYz4B3TWQ4KjiJc2YbsZCJtrsfD",
  "key6": "zEJWv5HMgDhsKX9cFpVvxMwXXrPbPbRn8VkDm31wS1h8WKMKZcAJU5oP1vJTjUcre8L83Frn8Zfq9zr77tJqCN2",
  "key7": "zwrwx3vmeSu8GuCsew3EvrAm7cjrqxnzeNZtzLoJQ75hkXCpsfob5fgGZ34PkW6c5eV3xkxGBZDqj1ARFTz7ptK",
  "key8": "48yYMSdnxGYGCWpXoB9DtsSjXG8AT2w7pbKt74DQJNNPqQM4nrRtWo7D1UsimWx4z1LXH6C1aJodwM2bxQJ7uUtC",
  "key9": "5AjHwf2UsQPHgmAtDQ1TkTwDc7Dzcw3Qtyy167QqmwKLpdXcoL24TTthxHs48NLrPCpSrmJbnUNCgxm469ZXxzV6",
  "key10": "3GnYJFi62q16pG27LxxgtQ3DogPG1r92nYYpbeL3vMHruFh32MQEMHSQRgC2cn5fD4MrWtGFECTjKj9wZKenx9gH",
  "key11": "28E7RqVPkv48QJdydVvJF19x5i6SynjnacomVZuDPYMzYDtRKSFej7em68MqN6tDLztRH728V3TrK6jR4eaBBu9G",
  "key12": "4LUDm5ZuQ3t9FpBw2hq7RgE76FMXU9JxUewxerEtymjGjY7eXhjJhscjaFnn7mX4wU3qESQuCMwcsX9eU7PZGYkQ",
  "key13": "cpkWNosTMuBFX71yJcsqodAb8GGCP7Z5pGv3WBgT6uNJXWkmXkefPXbVzZC8nnWxgTxJ6Y5vSKnxvgdEXajfjQP",
  "key14": "4gDQkgS9Xm651BQaDnMcpJ75Ke52gDp5X2kPJX5n9BNbVDjsXzoT2Nujrk5LPEfqnyvFKSXo1XDNoQcfU4JcBf2x",
  "key15": "25D2Gu8k2aajS15PHiQ4Au57JFSdiYNx9fNGTm2SdbSyLHsdvjvSPiYaBg82qnunzuj8XwxXJNGWFmYGsCVmcAVY",
  "key16": "2tn18SbBKkc1ctsE43qYxibPswbLdbGJQMYU4rhZqHLkn4LY7y1sagZ1mNUbXvThmJ4QasHAUsUcX66jkLq8pfUQ",
  "key17": "2B8FVZMdWVCxfXSpVXpZocmV25dGLMzN7zujHsY4VpkpnKkn22z1pgU9UpcEomX3nt5atX5Zu8RiBXnq5wLNKLa4",
  "key18": "3zrUkpW8PmD5PaNXQzy4Yzu2GiBCGG1g2E9t5dT1B5sBmwvV57aDK6y7MQoe1kVQB8q6okswQ5h783dQiMpxDtb1",
  "key19": "265QY9cDi5sD8hZbDvuB8cFUtmfkNYm5hWw4AnkmWc7XEJRSct49yeazq7QUKWWpMjdewMvaVcmWpVWZ3ythx6NY",
  "key20": "2YH9wFtLBEHJUJwScy3eBxtkaTikgFWGSKUzvU6mMCHCPmbDKMt2pCmscFZ5YcD3kmHW4CXAVsFA9Ct99yGFVNi5",
  "key21": "2wC4TP4wBgWpudye4QLd7n564yWHjgUbcAY2t8qbTgxjqQpKvGz5gXHa4Y7ebuJk6aUR84rFx8U4S1vTyyDy3D3y",
  "key22": "4Bw2HWBFTrWfSU8Sh4GEvsmn2VCLtoxzDYAp5FdVrRZbEfcCTF2PLUcHUcPTXf3t6DqCMqUSGiMEpeLuE9mjpZXs",
  "key23": "5xjpqH3KBPzDg2REmt69ghJqLMgN9Y7nbJJDdZe1LoChdruR7z43N3zdeTY7UPaHdUU75PmNuC5Gt8dqEoxtdTsX",
  "key24": "5MCMuR21gb6gv6YXcWBYYgqbd7VBgi3pCQdvyAodLGNjV9Qtjn5gdsd7NeUNhNk6iXvqcfXy8EngiF8zcycPu4jo",
  "key25": "5vkpUBKSNhMPA2Gu7aQNJj41GbTQAY6NifVwx4wSmUc8jEkbZLyv1nqSDjPPRJ3WL5qaFekL9bbJ3bHpkHrGwj94",
  "key26": "4ibXCWyS8awdEziRDn3mzkLjX3iSfUSqaWAAjVzrprvbJUDcyaSDdBmu8iLEDunLbE9952WhseFDQTg7JBDDogdx",
  "key27": "2DZrf4ZtV4HrVceLATmFQxkshL6pv3EXkSZCuMJjbe7RHq8w2jiybh5yxfpXm1YK4aMspjykm74TJw2iUjnP8Gsq",
  "key28": "5GEXLFmjqXbYCKWbukWVGfeyTTLNyFNdYw6ZSvj9FxBSg6VAT2vCzKAquT94guSCQQQxzaJrz8Ne2zcjNsSLZg1t",
  "key29": "2E4jwrqPYMR1vcBErUj9sYwQuNU5V5ZppMaUtagFVQGbNEKKxQhRoXi58mReyYyeMinU4crJuYC5jZhkWmwZSUy9",
  "key30": "kYhjeVf9CQKCpnpsRTVyLG7To7w5Xp3NkYU2SttPH3kqTeb77TR1ALtehSW9HizokVALtradnjkUsVo43rwkMYb",
  "key31": "5Zh9qWwtSWEh3to8CrsADkVaCGaa3QLbCjNJnwdhCxPiKvajy99ZYjKPA4TCSwG5KFLq9AyGEYTBU4hujmBZtE53",
  "key32": "Nf4o9xo81mFtcHHBEFCSXHuRkpqU3bDcKXra84uuMdTfvZcH9A3teN6nRX3berbzfmjmjFmXMFcVvtswoRPsfvx"
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
