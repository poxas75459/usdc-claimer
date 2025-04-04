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
    "2PX1PjrhaN94b3dCjPmgqvJZsqck2tPgQbgoDyNcW7agQyR7JvW2KxReXmZ6ueX8vKxJ5Y8C3aNX6QHQD7djZhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tFSozUVsCjvsybGMwht7n1kf25BEs7EccQPYfAvZhHpJ5qSFTVtU8hbydG35kkNBWF1nJv3DTPxCTdDxyKo8Fw",
  "key1": "3ZKhetida2ys8XVym9gk91LSSjChaVPzUbKS6EBLwbauDW6u33EPERWhpsE3DcQ8PfFbM98yh6rMQu2mzqYNAVM",
  "key2": "48NVSxzd9CGk1V3PBh6aGGanGcFQoAj3tFKefofZNL6o6Bwcf2MT4RE9iwgF5EBLhScfYYNoZ976apnPRv1zmSLy",
  "key3": "7hkBwBCLgq9tai8xVSJLz4WUjq8fp2FXAwmgipbdnYQuQAgTHk9ctSH56cmFdZstoTit6ELmNNGvSb6yVNW8c1b",
  "key4": "djcKYVyK799pnxCW5HAzqwqrPk7gKJLgjbWmqtbpuVUjgiv82iZJ6RzvT9jFieahhnLyCY7zKtxohJGcf3m7z7B",
  "key5": "4n7cTioPV19hmVJYKiqThk6JXLKSMebPLhXErXfaC9j5FLktwP3kYYvFT3bXwgWFpD8ExkKANGtQRE34Ys6EPZRK",
  "key6": "5wfSRufYrqAFWLx5Ze57bHXTAmvnjk6iY22jwYHuxazFWj5oERD7XvZPUaJrgJ2vVAvBWL3J6spt9XQAGofwSBDM",
  "key7": "5nwtKWoS1GudaQnLD3WE33Zc9Mu3z3bKFcEbDGPByUZfpV4vHKmSWMSVPdEioRDDjXqMoi8rQeD3j85U9o9aMEYK",
  "key8": "3Meecbcrm2PAniShSwzDPEchMeEZfp1DQSejpicH4hceuzw17aC4768tACkJqpyhcHYqBVAP1j3LL3ezKSuwb7AC",
  "key9": "3TWSEbLWPzeE4bXMEuACdXxjoUL6yfuYdjo5ER12AfSuGMAdiUa4ViFFDAwGpUeEnkfT29cApJkWwKXJvgh7EF1i",
  "key10": "2Stewy4D1WQyW7t2kLo67CmzssxfxsGRqouz8Rhfiac1pbbg4zHoFC1n2XpDnsxGdTpz2qBHgqpzTxqPpgTLzNK6",
  "key11": "3ZkUgNH3j5uJHimtpaXmUReVNDjXNyn7JyBPFKSxUxEkSUMB5nirGuVHKRMVaobxmVSdSVtzwV1aEGZnmghtShFL",
  "key12": "4LDCH4MZt3pDXYesJsNsevnChooL3VibRkgCnLFLUpq43KGQRaLUnLPLpR7topC7mD2kp115yQAKhTNtLxNZ3wvd",
  "key13": "WXf1nhqJi6Gp6eYgbJQgmvF9TNNkf4x3pF7F38nHjMDaGzGNwdY9GD4xGRrVZFDNENNPA3K4j85zbrdQFVYCEDM",
  "key14": "5Lyg7wucKSoosF1wPonwtRodA2ZNXQ2wJDYVpn4iGe28K57YNdFfQ3py9p3pKpr1hZ7SqwxEqrvEcKEhp32BmT3D",
  "key15": "3HH9dazav1hWX5yZDpoAhGj9s4i7Kp7FUreebu8xmVckV2apaiL1x3EWaKS8sQBiqxtgRQJkiKwBs99DpqzmthHC",
  "key16": "61PsDMJFEK3VXMeCQ33LmwwsH9WKA9oFZ5k49YaWi6nmUVxZzni3QirziiV2FbunmnqYvk3MXrv9WfohJ57Vff8N",
  "key17": "2iCaLYgsCNnGRb93nQT4N1NSULbtUNpwjFsYm3YwhXeoeqtgFNL3N7S1tig9aUfFpJHyMZCe8KMHzsEhwnbzcxjH",
  "key18": "2VPHhWGHGdbWp3zEyFXsC1DC33Naa8BFbu4Z9WsyvtzzJvHGc8JtjU1iJF8e3AhKGpDVggbezqy4yBzLjUgpzHNf",
  "key19": "5rknSqXrShHApJeUfXXd4ogep4nR6b9uGdfyaLEu3hNSFDp9kyz4vUELCfWu5oZ1TXsWVEaANsFU42BVNSZL4g7m",
  "key20": "55zG1pQSZYmR7ii7saN5LjEqzdwHZSPSwxbDj4BVd4sobnkMhSFMzgDES9wFtKEibBRPXjBt49fXJo3K5mPQMHd2",
  "key21": "5SfWX7CQWHTV6hfck1Aj13vreqCnqv4tk9xZpBHDErWkuHHrC1ad4LdK9onK29WiknyR9BNrtDYbg9d9Kfi4djDW",
  "key22": "bHKF3w6HYnDCoZUi2rDG6ngTd8mF6LyZovTFXyJgSgfVUThUQkGP64a9Swis3h2zHzHA6ediGbPrkvXPdyyAcKY",
  "key23": "hpP3thj4WHLc8hHK3GEkazcyEUpk35JbYwUNFTNqC4e4VMgBmVXqJpPRz2xEqsDZGE6UpXNs96ZdUJMtEuNr8Uc",
  "key24": "5E97iCMna1j2P2DG87FK2hRUfCEGrTdQTjZ6pHMWccvuhoVuAAXayXEsKRmru6R7i8paf1Bzymx4q8zCV2zgtdLU",
  "key25": "3tGznP9yK5hLPivR6feT5MqPWvKjujuo9yec8rw9YvB4DbdciJYQytMTvRNsCkxEbYU1Gdn5WoURNs5dADek9a6H",
  "key26": "81G4gwbR8wR3PUtj5ohWjhGW3UNxAhYFbb1gZQuaHGLXxPrqN91LpcFiEpQBA48nhZJFNaXW1bE7B6PD8gUA47Y",
  "key27": "4gRiNqgdN4iVtrTbm5y7A8amjp1J2xLxL7Vejvgv9kNjymFyCAN4ZbeBZzrt1794yJENS8vCXNkkfENWGi97ngYP",
  "key28": "43F9GhquK4gvhSjeYyC1KaNnFQgTvarJcaNrtuTpTdYboXDvBpmFRYYtJ8GrWQH1ELqaU59tQYQFU4wkSUAhfpnR",
  "key29": "359uArSFsjtNfXtNpV8JuGCdthG6VHU5agJWsz2BEHqAVSZ7eooDrg6Bet8aRGKwLrZDaKq3ufiBYyjD1cnYe8JJ",
  "key30": "A3xBUbzMqzjmDVg3pSss2Zng8buCSZUXvcPwknRRVCkCBTbdyxgXmuJgwujD33qTzYu97hLeiGk2DYdXkJtaSch",
  "key31": "Lzm2yZ63xnThcDoXDKkhxudKJXVHubDwCCKNx4atz8Y6DZencJ8NP7ULXRaMCMayynkPptw7Wj7B3HHVuDijPXj",
  "key32": "2HxTWh4YQxF78oXtV7WEWBU3hGS43TpHELViA73pk5dKWamqxPUenzngtHUzbn99drQvYkWuJBquxhbUv1NkjGgL"
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
