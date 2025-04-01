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
    "CWXTfD6yPPjo18cbNVAd9PBqxNXTDnNiYX16hoFwdw2Z4D4bNudqu7V3nXTzJnprEs5Mr3cGeLfLCFQaLApgPfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaxVtHZs2Yf3XJzqPfw6nMkpyCs2mB78Vtohe9KuToMrz57zSnz4GJT3X9mUA4DigZtK9xNvMk8s2VBce1uBwCM",
  "key1": "4oXrCZxDAemBkFSr1CgHdJgeaH72bodz8jWu3WSZPUNUtGzMSiwpum4g3beXtg6puXtgz7sjmyw3u8RJ2h7ZYtNV",
  "key2": "2B5vpnHMcn2sDMjRhCu5FuhYg1hWc5B4HrYzBYe2co2MQmTjESnAPwB9z7VUHZoP5KoJdBZnQuQs4UYFoKbUSSUp",
  "key3": "VVoBL7oUZ3T3KQueLPJVwRFPmiDo1PvfvR9S9nR7DUc2zi2GeYuX8TJ4uy8kJLsG1zAxX6vQNwNCDFWb52fXxkP",
  "key4": "8eJG19RQGviuUTWupDbRt8XxgMXngNHfJP5HPXEc9yAC69ryLZvDZz1uwAojVh2kgiM7vmo7FeuJKdnU1LV8wXG",
  "key5": "5ToxjzsSB8Lvc1UrFBe9DQSD9F9qzs1uRZoCpAUrnkThKNj4qbzvzv6WUHLoxsHCPLsfEA5FKPq79vcNX9EwMTpu",
  "key6": "vBQHooU6hd2beGWPTvrBRQGGYgZRxaK6cnScck9FfZqvdxoqWH8zvk9u1Na4iVodaoEwXdvtD7E4LpbCNo5968o",
  "key7": "5nyxYuVbcgLYteFLmUdsjYuvuhde8VAJBmW72ZDcfqN13ycZ7wSVmmnC7gWjsCtJALzpkiWbQJajMATu5V7WoP13",
  "key8": "4JEsJk6MKQNRUykj3bkv8ejPqyYH8pQFrEcXWZzmnuCAr9TPpdL7KkHVp6PcUGQCrPNus5q8BDk7G4tdoXfrJSnj",
  "key9": "443Qz4c1N9LFjarYoJKEzFLa66DUAYzr7NBt9UvyQ9TDnPFcQkktY2RxLMGMSbGFCTw9RGeJw2eSrCnuC8vkeTew",
  "key10": "3eEF8zJ938RE4hQ2KLr9qxyjn4ng3c7ZMPFVv1nXLKKyzuzRkfx3FCdsVLCdDn698XedWYGC1dXj4cD7DFN6usEf",
  "key11": "34uWdKLLKycMbXupSUrQJfXu892XgcVVXu53NVeVXFwUbvUnjFTLEKSJXkLLd3dEZH7kTVpQPeeWurpNtKejZqHG",
  "key12": "5QQWVVHzbsPfzhdKvfqYPqJa69f1EEK6CaB4Q1SBa3HVze3DR6ATbbzJKc9ktifw3T4Vrgti5WMeMTYoEALhvmDJ",
  "key13": "2bhfwtRvpKR7UvaLrifpyhvZDeRD7jaFMQ47hgk1BYKFizewGMxmvPD6U3jopKZKHHpkF5maXJThov9aTy5U8vmJ",
  "key14": "54tNKFcemSuMpiTEDJSEEHppPCucnQpid6ZVEXpNkjU5S1s6ZiPwVSiYQeq3Ue42Bex1uT7xfZtzfJjPa2192nAR",
  "key15": "gLMKxVrDYKvexVrW8S9ToUxxkPuD6X5KPAdgNneEtGiFM7QGBxUCAZKEBh3F6DQB9vhcDmuAAgxshrZ9bTPnxWr",
  "key16": "3swF9NPdA9DXupREBteuuBGYt7Ami1Btes47vnQRoRRNyQs7kivu7cbdouDzoDev88pHwyi2unwBvzqiJeAQTvn9",
  "key17": "3w4RS3vghG5Nv8HFptGUrHd7wwTNX6iA95A6XhbsjUR8Lzop9kxe7Gi73wdj3dJQCCfqPp3phpGy1fwrx81nG9KA",
  "key18": "5uLv3jLxN4NifPD4iSxtmgJRYNoLwrMJWT1SQjSVTMgSMHZZyvxcuPNRCPjFNVdDtvEkdct4mYE9rEPhEG6caKfB",
  "key19": "33XaCx8xyd7f7UNNq3do5rrPJoMRU5okULJjoiqszhnfgWVpZGpiaJD2Ko74GbvpUCNMpJ4dnfeMvu9MCjgvPEky",
  "key20": "5TFsrqdpQC3KyvZVuzazzSjVsPeKQR7GUCVwLNfEnnc5tqFs3ZT1TFJUnCCPyNREKWQPpeQTbfBhW8XAjWYheuU7",
  "key21": "5qjV8BKXhLoEVumvBzSqet3JC6QbNvjfEJMqnf62R4yRzkJa9z41736T2vLboSugiSEoQhiiRtR4VpCkEURkuddp",
  "key22": "2CV61z3FVjXUH14JpLs1BJYdkwDVMgt6Kr1PDyabsFNNZJbBExZ8UJGiU2D71SpPBHijxk2JSXZyZvTMapN6oBey",
  "key23": "4qET8uHbNS6AjPKE2BbkYVuRMgQddHNpJZzSK94LPqHFagJNbbPbWiAx9SZYCG4EoprCym4ZnaLFRzkgZnYHd6nh",
  "key24": "eY7TQgz8GJZwqcQ25krKrWP4QwhJQZ8kFFNnQbiMk7z7n9NPoe3fiVaDcKQdTD7JQaVKCPeuRW872XQCch7ov6x",
  "key25": "4MsvYyL8K74EWZy186ReeJ5brVnC9WQQ8ErxKEXPMazTddneg3G5kmmxXoMQGkm8yKCsNRKnsr9SBcK9y3m8nJE",
  "key26": "48E993DgUJ1gChgoM3b3UybZ5kTiDGUtw1KH6fGtWPkz1dDMPVYs9jKYqUAYpsi9T2CrvaXCer7v9fr7LxXBbuvm"
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
