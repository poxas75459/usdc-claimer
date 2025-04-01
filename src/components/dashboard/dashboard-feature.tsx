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
    "2U3mrVNoiYaaSvHGZcF11tRvGHMWutULPSobY79416Afkwqygam3WvJiUV5KNJmgZ7HkxAmL719o36sLj1wfv9Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCfU9QXfN3rfTf5npUEwmiWeKKqzvQHXjxmrt1t5qSd6fmMc9BfHEMMi2kXnquKWyR19vY9TReCcgckw8yc41JU",
  "key1": "PUuTpWH7aJm2JLUtp9pACtwh3bVy9e1qAWJBvTegBf44sYw6fCJDm452M5G9ExfQMjDXb9dm6UeoYJ4u7nDGAR9",
  "key2": "3TfGgJAkw5qgoqFDDjdBpgv74hVZsahGfXJoEDZR97r7Pq4Sd1X4moCyteuEZ5JvxnY9ZJ7PWN67V4FfKPuXgG4z",
  "key3": "4FRDAPxooXdXViG1nLJAJ4dMH6VLNaGb7WP9F1Q3ZBZvnsnKq7ZNhYdkVmNyBH3chc7nnFAKn14jLzc7urXHUykw",
  "key4": "2NUeDDQ86gsdUbyNzcFomhxDSsz6EFYLm2mh239P3JDGS5EsjjCyrVQVNm9CabLZtEx3eJWftNmy4V8Z75gVuxNG",
  "key5": "4gcqadyGHaVt6rgHo1uPrvMo2m4a8FyQ1csaNkKVHFTPAMeFsJkC7oYsAATjSWK7iikXQvohRGLMfjAqbevzD1R8",
  "key6": "4QBMsqg3ekcaXSSVaZNaEtbBQa8fYAjhM2kM28pd4gwtH8xXamJsU17UwPytz64K7wiJyzdXevRdSAZ783hmkExw",
  "key7": "4KbCngSQY5nhkA9p1WZV8unPKCkzkGYhWyMDyfCWbGG9geA8PhHoTZMYtdYcvgPJvgK9KwpaNunT4moYEXu6C7UG",
  "key8": "3a3Rrfn28KPuQR3MbP9euNHW7D9h55wxKxFiaKCrcKS1XGbHxdA8d5KMmDGfAAeSrQN5vjqhYTTQHhdopUxhHqE",
  "key9": "4EFLojNhkZKZf2optX4iF3kashmYaEek3fz9KcZ5AJDvL9ZxcDHpL8th68rQTVQhVZMnp1uyFZB24oZ5UcmLKXUr",
  "key10": "VkF63bAYTiytF5VSJcSQtYSM53zkFuu2FHstsWWN88PXZZMNMHGKGrzTYxX3mXXZRuK7PBaeAEpTAWQt2MM7TSM",
  "key11": "2cf9qTGP1xwZrG7gwbSusMoq3rNkVfnGrsrU6RnTZSvdHkrz3mTxGq3LoV2SeRCBhJxMyXdTXg7v9hpxTCFez3KB",
  "key12": "33e6r9DdYMFtsb9rqF5v45VTGAkuQVweBYK4xDiD2BVUjSXkk1qjgpKRfkEqqh4VLiQP6ydupmKHzY6t3APbZSdt",
  "key13": "2KqypCupF9mHFTTVqeg3s5HuzX6QN4oFe4xG7SXjZDXCjePDHrPMxgzKdjxaafu1JzseDMr1mbX3zrHUZ245QasU",
  "key14": "5n9YYCKyPXTSbysKH5Q6XRocArtUVccxo4zQziNTuQBhrjV1kRF3Q2tqn5hP6TTYeQ3ot2e5xYTFNDEZ4edkrWP9",
  "key15": "4xCSLYjPdzivCbynmUGLR9Ae53oiMQuYc5eeQFhgNEkRFB4GLEFcuEWnVbANmRneJaoAtKcoqVTqGamEhVweN2M6",
  "key16": "3xZeSAYoUbe4bgqFuGyJrP5bJHTqttPjWz6xSwqYkge9Xa1Un56eetKeoM2NtP41Jov58sRW3RFKeB1BGrNT1Sth",
  "key17": "4X3bFUh2YWgd5ppTf6XyDob8v6JqbCkGDGBnRvvduE2qNS8UcYZUtH4mu84pzc5gXxepdipczsUWSajYhwNXdTTs",
  "key18": "NrGYaDZN7paQecjnWiXVo2MwKUZfBW9bPYKTwhnas68zHM6VpHPdiburv9rUWfTY7q6TbErR9ti3iYFXQ63uWMf",
  "key19": "2zSDxk3Eqg2fDYmAd7zeKUvdE18BqYY5jaAG5UdxsimHKHfhgWkKpqWMHZRnRzT1QpmneLcPPMfCH6SXpdru5zwJ",
  "key20": "2a8oxPeK8mNQjyuM4S1YDwXCoTJc3J9JfS47debugrJRhUUezx6sWcNpZH842aym6nBJ3dsrVav5KsEv6RiCTS3X",
  "key21": "3gsUBnBrG6YsK41bPLBtMKFYcTpqL4PVsbZED7i7kZLZ3K9DmbEtVCR58HzMmMUrSE2zRVeFBc4ntf7PfkJnVgsm",
  "key22": "2NxNUN1y3TuZAWPQavEd7TmFkR1u4xWkd9uqMwKbXutia9VDBcHf8HL3gcWTbphgTMs4RbJZkFq8hWQYXrBv7ARR",
  "key23": "5v2AybicfASkVZWJ41RHAkAjqNKh2btJhQGWCq4ZZw4V4W2ZpMQpZ2TEQdzfVNo8CsNYRSYEE5o3MUGhGTj8UCdX",
  "key24": "3cK5XmqnkeyemvpEh7EydqBBro1jakyG1LqvShJLHiw4VaQWRG8UCPe1QJvwyKh7dFUibMy1e5ajNKK4A6FmhXi5",
  "key25": "3JirvnXDfoCdWUSna86Dri2P24xk5ghHuVbdG89gpak5Y9YJUCzE7boJRKjYxsxQWFFT2nxmSzbrwNqrsAjPeb62",
  "key26": "2WLNLMaL11LcgLNhVfrgarPV7hbjKvG1giKMXZWGMMQE3bNYasrZLbTwrFCWdsNg2MRYdgLjEtJey3xBPZSBuNkW",
  "key27": "42wfJezLvKp9G2VyVRod9CRcE2BXpr3cKhQcpAPzG5JkkZG4BfubhNGazbF63xgHFBpKxsfZ9PA41kh5NrvkVJ2m",
  "key28": "2S2TdiLbV1rLRPyRBpye6jLjXK17NYAkqVgyELX3Db2rSiEkwKpF4AQGM2ntixumE6UT414AkqrEYh5cj2UczHPu",
  "key29": "357TjLca1qZGPXrqVTzyMyYJrbXGWSiiV9Jbm9PbBvGeYQfpN3EJMovS63ZswYv5obXGhpcyz24bZmHRZJC1tJGD"
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
