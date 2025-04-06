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
    "21PKNDuXVT6biDG6Xf4U4PnPvnaSu4PBj8J728q4BTdZ8TGfWAdQdxhSCLRapo5o21njCtVktdmrt5vGwvF14mWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qu2wR3A2rqnUvWj37idVPSZnC7zGiZ5binUHA2kxSX7g7ty3qFk58RQgnyPPcisik5MbfyXCJhUTnmHRyi7gKm3",
  "key1": "5fjm3Jv5UBGcWKPeijtgXjpMQ8HHEdDqGz6SCLNRdxd6Ui5GpAZFaDa1s8RmEoYBPimSnpNmwLaRJBU82qPMdyeH",
  "key2": "qw7GdoG2ZBf4cJf9hZQqiJMnsPoxsrYExcekEtiD1ZcHKgRiWqjbZmA6oUteJ22ArpZvbjQw8ergTeuF6dg5WEt",
  "key3": "3YRu6DiFa5ANLjCMzC9Rru4YRYDqtNb7h3By97mneaZQLTM3dkRnzjQCNswJ5SCZCfhQBdVMcv6QLeVKn23rXU2F",
  "key4": "2WH8raFNQL83Vs2JUNnWAuGmgE6hQLkmreG4DguhV38HgjmLBVDK4HunbWVmWcEYkZZeydSrNP1zagcEfgkfLLH5",
  "key5": "5BdzG8ujZnGNZWV22hXUGPw5XTMM2okXDpvzgP5RhwUabCaNc27Nni6yKPWUC5WG9uqqnKRQ5aqB8Zy5r3APcQLQ",
  "key6": "2X9qzpsqEFk4JjVqocRi4ryED8EdQZof7PtVJVV2ud1P6beAYpqC4kmL1NmycjCp7i1qzaSJqL4EQEXkpYomxYoN",
  "key7": "25dSQWM5UzJRBKVwY3zokcBByFXNVBBaCPqkVCMBgYFpoVCitHFGf6DE8gNM6NJhAxqF2znPeztRHYVgMxPJVDNv",
  "key8": "35eGMq6emcdq6Dbm8wrFFNdrHziF9rwzPFteDtiAnw6gQVNWV3DmX1XVK4wqr7Y2mUKtSRiKhG6T5Z3Wa8RQ52L9",
  "key9": "4cNcvXaeDpKygUkQ6jBY8uUbn6W1bmBdvFWmzD24XgBcWA33XnZwYcoXzBBj2eSCvcQgGyQCzuPsYsvuUFxLVTpi",
  "key10": "5pKB86V8P9zLEm8rich2Q3JoQFDM69dnJyTaPTaXsjV6BzmShyKjjg5sSftGmVZdG8TCR9TEzU9KTv3azuNTUWJL",
  "key11": "52vTrjSt5TEqeF8aqdjHkqmTpxfcysmxCxP6tTDkJxS5NsawvtqRc5AyGCgQKc3ZPseJWys64xQUWAgZ8ygim3xK",
  "key12": "3iErT1mctZ65qY6976qLMNJMSvsT9PCwav5Ks7g2p1pxmpCKzPPBTcRtSqy6mKEVE7hdrCQPuzW6MGvcfZdr4hDx",
  "key13": "4adiFefRU6mhfAba8Yt5P12hKguvy3as35VktcaAdizFs9PWeTzUzZi2VNykMds74BJDGDXtP5aSrjAY5vFYEqSN",
  "key14": "3Yr4yzudmrFhWkCUTAoJdVRacaFxwiUKWQKK3MdTtfYg3sFwd6fZrm3LR17NmTkdmaywKz8YfNtmcYiBEkbYZrRa",
  "key15": "41c8CoLoUjh8UQ4Y55VhPFcWtDo66htnAH321NSovXwQWGDDp5RCYnN76eBtt7xb1bomEstMjdPNztxmeLrFdWwN",
  "key16": "4XHrJSE913qBRJ1srGg8EKCGYoS8Znu1rfNCC1vZYbWAgA9DnTXaXTzq7gbHbbYqzBCxudneA35cuJRpsV6ENejV",
  "key17": "5yfgoFct824KP6hfVcvVeF8UCiN1828hYjFRMocUDZrEvVHJzHgsvEgMkdoE2mE6bZrRmYgL3hrtkfUrCJojVUJe",
  "key18": "21m58zUbbi6xFWvQDALY2d34fiDoJgt3zqDxhDFhuQ9HtbhpxT81CatG2JMoPcbZ9icfLdTZSXAL72Cpf82WA3Vf",
  "key19": "45KbJr6rttwBtGTKnpFFyZXaJ643nUEZk6KmaVKxpKbyFTgUYGtLPjNMaTnvGxFwYFtuNDDoamRHF8mTSKmt5azy",
  "key20": "5NFWCsF84rxdQLKX5N6sXodSrSs2fLToPeH5udtLk1xkt7YCxJSp6XVTrQBR8amAAmggXKSFvSsz1sf5ASNSRDeh",
  "key21": "4cH7nR1EcsvVky5RkGtym3MccLDgcyZNNWDa1hdBr8kP9XG3WjDBo1NjDFaxc9DjobaqQP6pHVeksDNRQh4GYHWM",
  "key22": "4pRVCZ6uV2oKiLtcqWoyG5LRTiCsSELtLAqc7px4FCcf5Ne2XGMwSr6dt2xqT5mCh8RMgPKfEtNfkdbTHiWfDNKj",
  "key23": "uqdFKwe7ttdpzKsfkdXy72WXASNkV2jTFnoCgENrogFkUD1ZnUqRNJjSqANJ6PYmgx42cTVvb2n9KSzafFPCQVM",
  "key24": "3YGzjgSGzix6u1csF4wPdWQzGXQTq9gbiwkgHGW7rUwnsjajBdu8Q4RRc6KrVXuJ8rskoU3GNz6GXYYiV1ysqRFP",
  "key25": "4e5RMcMtrEvPjtkGaGeBiQYmCqi9kgCkoK5woungoHvb7TZzMtuKjqYgMXzB1NisiLqWshzmwXkt5HRZZdLDBGtG",
  "key26": "3KmVKHiv8aRPdhWMFCf6ULfjakEkKsy9j7N1MMpGLbaQ9LQFzgcMTnx62azNYWZkb7nfSqqgh2n4m7nka5yKvabt",
  "key27": "4v2eE4KX61VNMEwC6655TNbBA5TVYdoXU5n61UffQBWg8gA2PXFes82HyX2LXCGt5ngnQA8cNLj6UDz11PyayZ9Z",
  "key28": "3hay5hKJzkRevBWvmKmNjvuuUn4oCUYcwa2TpjKvi1ZG7UyVipuaHW9eqkLm4JE9haLY82rHnQg2MJutDJ4AfnEn",
  "key29": "58g4V5azUwt7aP8sdLBLdmj26tNwAaDN4Wms1FiujdZ881AQPCgo3wij75z6ruyWXqDY6pWTRJXeWpkrQAkX6msw",
  "key30": "3mXRANrZy5jfX64RZp27cKjYiUmFfPJhRXW5XzRKDCeZXL3XwvHjvc8hqMF9kUpGLqHEZr82JbNxtciyWYiB9ddp",
  "key31": "5DtermcsExYDZHt82ieom77tYmHje69bXCQuaCywWdPZJE6h2RYvpeATnAFmf2VDJSYaxuSY789buQAYNyLcSW2e",
  "key32": "4zU1SmvJ52s15pHWzf1msckzExARsTVJ5fppTkxXsy9fhzS9XijFcRQB3Et3RRZG7xokpJSsTKPnT2JhjukRKLFU"
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
