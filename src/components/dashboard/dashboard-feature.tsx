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
    "32BHdByyi8iBmLUf8tovgmEfoRxMhBQMJ3xNHTnyuJqMoLUcRPjHpiguYbZ4gBojefsod8hpm8Gu1fKXfMdezF9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmiHM4r2ZwQPHujzbULzTK5GxcgafF6b87iwCFbPbnaW4d9HBbf9obLtyBwiUoJjYgqJwrr9Uo66Qe7cr7dBTfB",
  "key1": "2r1cLHoVE1v3nMoxPAXTvfTsxiPjFRojgAZWYWUGutZ9WDsTJsWbjrjmAQddZBdyWbJ7CmYrGN7R7W4AFvdgSFtk",
  "key2": "4BinkDs4JdTGrUb7vwNYnqNqgFRuqyQDVbUXgdzoafc2hoJ3hKJ9rhrgQ9K33vzXLHsfYJHKTDvqTg8qwsuYa75V",
  "key3": "jLKLwxQtRYQZMzqYqvHB9AaCqMvUbT2WErHXTtQL7hDZtRvh5TEB5ENsQw3iwFxJXJgW9PrmFQhydmtnWPgpwVV",
  "key4": "4UFDKfzBVECr2ej2SoLa4R6gxW8tCtg2WLwfhwEjvpSaV2oE7VjQ25bazdz3MB8m4S6Mkwz4bQt5cXv6xwsp7bDV",
  "key5": "4bJCFQe4g9KZLcKbFcLq9tqv6eaUyx4p1yxkQgnMwvF41Zs51CPRUMguNFrERK21d5Xtj8xMbdBh1nne2vF3vEGW",
  "key6": "58EyuowsQePqrgyrRFFK3r9aFkw8gajZrqAJxC4hW4evZEM21BvVz5JZDZwc8RKECAW5xLHdBpvHVBhX8n13kBnH",
  "key7": "24VkYsPogFDZM7a2P4cw4yQJgQZa9iG5UKdHddp4ULYyMNPRr774LhvpN16Np9gdPtxpUErkG4Fh1XTHVmXGE6Jt",
  "key8": "5JSJ4p2h7tVNnYNk3frep6e7g7KGx5LhBbHAMXRE1878Ri6twZZgnJzSZceQSV1XZrEVebwAJJHYY6qp9XM6ZjDp",
  "key9": "4FnPm4CkjmULcfHt7tXkHVtZiMYYYG2tu1vm7rv7trtXQmxpf5wsShGLarM1t8xUdbqgqf714Y8euBt4JZ37ye5s",
  "key10": "4rWzobNfki13RgHpTFBwLsc26bTUthSuzt51SeTkkh7NAFcJfnbsXaRUwZNusvndBzPppc1xb9aeNiu7YbTW1jYv",
  "key11": "39VNhHDWBAjJxLJUrVE8wu9TgnSHK9seRDugjyUB97n7L4R1AbNXjGzYXi75H6GN5nMK86fUmMEgYQKmqYBQ8h25",
  "key12": "2HRE3Nrij6qBsDnVXeisQ3PWXfdLfWW4AS9mXHFSuKV9GRvzc3t711vwUDcN2SNQJSShzbzjePM3MnjoTTonMxFv",
  "key13": "3vhYXUVG113g5ZfQKH6vthTihmEZsLLRrMikTTqcdApAKdsX9XCZVAq3NnD8cb8wdNQ93wZAXZHUfufEyb2EwkEM",
  "key14": "3VyF834Zk6E8ySiYBYAWugzASfdoZX5ndPDmr4D756Jgk1T9BFBsGKDjYJJ7SMdUrwGzeijNv6HnSPGv8PmWM4SR",
  "key15": "55JdZxVWWagJ45cepB1EXG6GzKR2ogPNGFiWCj5pnrrs9yMRyZTDhYiNpkr7y8ZfNBAegVSxL7mSMgAZeSp3YHwa",
  "key16": "2xAAY2Rd9puirBWiZa1SaVXZZYgUGXZd6EzY88iN1XYhLUzksHi9hcZcV1JSoxAtwRu8c2vBAAxggiCsXP5eb3HV",
  "key17": "5BUJ2R1wvUN1e2Cj62dt4pJxaae35whevDPCvUq76jc5jDrTFD1uD77FwjFd2PUUedvMyn4CWeKVefEy3avLHYxG",
  "key18": "iJvHm8PPeWG6kdumD5StYXHDxt88pbdcTmipHi8iPhHjXpvkpf3kpr6o5u7DCDGPHRWFFKpaCDUQRs2pjx7vhHW",
  "key19": "2pAg9QgvhXdCoSRrLjaeqv9GPoSWoEX4tMDqfCdm7yS6CNhpTZ1i63RCyRRxotTpm8ikRgonSY91SzkbTdbVBhQv",
  "key20": "5piVVAMyWRCYfszYyJq6cMtRNNufcfR2EMmvVdNDYwZu1VzDrHLGRQQauEdMNLT22kr9nvFjR6CzAByHftbKWwha",
  "key21": "2EPQ4u71ZJrANFbBnKQWHHyGN38LhNh1wkm8U7pHHeN3xQnU3AQni4bBZCqj8QNYLb3PHiymtjssVXXyfhwmWpL5",
  "key22": "4TmWCrSX9QCx3WHo1prhCoEENoLxBGxpAJRF3H23hi68vtf9S8q2yRxt4uQ2uyzjwXWhV2yifKcxV8CK3AKNNZHJ",
  "key23": "62jyHASMD5LiHvb93JQ4JFdxwBGyN65UypNGBXz44b1Nwegr5PDg2utcwZpB4kBTSJBPEffMJqEpsFvWmRhGdiHV",
  "key24": "v23hyZVUtFX432ovrkSmnFWbviJEj5WkjSpDKD6jQnLef942bKBm8zqaiWqov8817tUMEX44wTiYa8UrdHD5HXn",
  "key25": "bTfRMMyysdVDJkYmMujMp4XewtyyNtiw2mPGuuL9urBhpgwaHEGRnkceZF4d7gCcKkwQEiJTmSdCHwP4JKKGBsH",
  "key26": "4J4vDiCrYfTxg8HWP3Da1B5jcWUdEk4PxDpkeRoEouURsE8c8ZxPfYkHcih53JSHNA3BZhocpGj4jf6cagEFszmq",
  "key27": "4JVQSEUSiw8AQ7aAw5Ld5CBQ5GbiEEPJnq2XS59Bp45RhpBTmenV3Yy35ZRcJ91NXzNDgbv7ZzjpnbFU3LoM4zek",
  "key28": "3Z3xzXw6bM7xoxyqzmUVGpGaG6SzLMp9dtkHuEiEWFRjn5aoBy1ALEURmbWnGkNTdKydiiucXbJdmHwG4pTcu6r2",
  "key29": "5JucEqGG7KwGdUU1z1ut7WW7CHgD8zudeRCEPDgM15PKvgMNXHfnFdzDAVNbK7L9R5BTnS4roFg3xkttwMrYZAoB",
  "key30": "4jBFXFhDSbRhyV1cGBmtXuMtBX9Ax51Q584aV8veXP9efrc92pHHYrtUNNazP26qNX9HzwWeu4L86TkvQboJ6Jtc",
  "key31": "2PREEeaoSWmv6vkHsErqVe7d5arvsKZ9rFPxV7RumEa8p9zHJxTCyADj79bUTdVxZZn2oHgTqdZEPhoYETCYqtUM"
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
