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
    "25B49rfnzUGxgbghpT4AfPDvyweUq5E7PYgD7ShRqJ3YaBuceSzGSz26GTCnRLrcnhHo6hyDga5fJGTBsvKMaAwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Czu2pKtyjPZWE18GKdoarkux9J27y3Vx6i4aUNU9QAZ12Hw1TkmVU59JHGCivjXKMgVEp2y5LHZeyxVWTuBN3jo",
  "key1": "2Xzx2WtA4DkwhdS1x6J9W8xAjFNArKR7MCofiSxAKLG5GWqsCdziauPAbUtZuvTfsapa9kr5KgiheCe5Wng9LDDa",
  "key2": "2eZYKhVfXtAs8iKpEoFcZzJPURpdLVAQmg6x87jMFUM6Z95LjMSZ6B4ALtzhR63cTMTF7vUrHZvrKQ9iAhCR4HGU",
  "key3": "nQZTb2KF5rLy1zZ3tVLU8sD5MXNwGx8V8edLRBfKoPX8r3r5T8Dg2qXsYeoGyAUgvC6Ke4AbsJMxzroNkVZ9gAR",
  "key4": "2T7Qa8tUiGd2ZdmQ8jwfymc3mmvCkgKEV4YiwcMVZeLNQBzkDbP8MCZBsxL7pY3U86oCcYfc6PYibBYnxu3NDLd2",
  "key5": "C2C5Aba4VMGDB4iQjMSgU9eQxKGrJ73AQRkBihDqumy4G7FwXC8hRxzj4cLGnuHhe8MANpzSsZebhdWiX6Z6uhP",
  "key6": "66JNpU7DZNYACtTyS3MdxHQ7sRpBpdBffgrpnBhgKfFkzdp25TxWt6iNJa4crZ7f9yx83Cy8FXRhgMJTRA8a9nPx",
  "key7": "2c41P3h9gUeEDz96nhHocPT5C6mYosQGxzuboALLnkyfPFNwCoCe7JmUrihxv5u7FXYzWEyNqEWXMWthuaXkdNTw",
  "key8": "HGY8J9DkBGTnLgopS7UXk8nZDkhcS4jnTArhobrv8t6PxWbLzCZHiPN3aNS7fngTqx6wEu1T6CR5ACS5mZjLEKQ",
  "key9": "4r1dmFQX58yfpg3VQJwjJMdbkCb8fkgTQDL1QvtMQV5n1SfVoiUQDxpoZ5PXN6gtBDb3oDJJ94dKTywiWfB9YSjH",
  "key10": "UhUk17pNmLiCXkmZ6tGkkGyNHxz7kkirWT5qeg8N2NgMN7zUicWoL3jBthojcA6ERRcUvVR3sRv8QKNTCBHqGgT",
  "key11": "3SsLt7xaiyXDJPb3LyiHFs5H3NrJWVqyZayNR6cR3H4vPVFR7VHpMXN7aHYLUDegCWPTZPnKTEycSAvZbSietKQx",
  "key12": "4bdg2gApbU2ucJWemLGFgejPMfGUyuNKkDDKvkQw1boW8nmATRKk5yoLfPeWrZfwwkPTmHNrBQBgRGfHguAzVcQN",
  "key13": "58hmHNtLrZWP37uZX9kZSTikaYdSDQvhy66YFfY7ToshHUu9GG1F6AokiEmD84V9tfHVRSS9wFZcMoT35XSnch9",
  "key14": "4nJNS4CZqizL27q4DZfQXxnosjs2caX3gmeWhJzrkusM26WtVRutnzNi5FNMLd1Rqh4wUVk74hRwBAExA75JtoUU",
  "key15": "3rFCACXqgoq61yjSYHiHhgzvVcxQo5xwD5zCS6urL9S1xTMFaD8SCzjkKWVbTSSarwRGj3rEWzg9iwuf9tEbVpt2",
  "key16": "dseNTq2EexyfzCbRtBsYXukq2bphN9QZRNciWheE4FnkXhGQkkp2b9apQ5ZhVZQ1Yq18vTdjuTSFSv1LazYyfNd",
  "key17": "FhwQWitizHsTQNtYbMioYbNbF7Gq7jhFazPG2W7wafUCVxuMTMZwEHVNMDxu9Jt3p8UFzrXEUxogXjzR3RHVZmz",
  "key18": "ehrEHPDzhd8Szba5SEwkTz2ou43SJYE9dGpW715qBJJiNU6XuJfJFSQ1mEej2At1eZ3Lj4PLFWKvWLMH6sDBxEm",
  "key19": "5PQSSWqm4k5pzTUhWTY2BzY7GgpAyN9uy4yzXK6VmWbCrWuTX1ZeDwc6tn4oN3vcnhMNueVQdBjuEh42hS8cudcN",
  "key20": "3LdYWm5HTrBPRp5iWLkhMdHg4r8xFjQmgP3vNoWGphLzxQNYHEBwmZE8XaXBXrSsDLZdBhhHc9ugHKf4vuK3Tf4k",
  "key21": "aPkRGo5XqD8tkZ7qxCLnf6bBKPwXBdLaG1ts6JTWupyKGXn94Cdr3ZBvYRTM5H9jgMgpVVD4yjwAtvXDPHMJVkQ",
  "key22": "bpNJuj7mCAKBCuhqPxg67N5Mh9RTCdwZ74FppKbzGiLyG8ry6C6Fv8DbroPzUpaqWiTY5q6QBNit3zHfTFdMMvv",
  "key23": "2mcgSwN2peke6wkavbfrC62Z541PrMBgvGvP6x2agWgtKJhxf9Goz94obnMn7pEzDqT95rW2AJ6fYBunnLh1CF77",
  "key24": "3PtvqUNAkghvxQFFWMMqQYcCCSbChGWWw6BqSk6SgkbRdN9GFTkNytqSVMgbtqrcigqF36ksLfVJ6GsZjvjBTztU"
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
