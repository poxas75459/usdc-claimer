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
    "5np6f6UbNGAeVAnzUQpL6YNn3fwrCc1MBFZAVm5N6eAwjNqQ3cSzVvTVFD2FfE25bx4iAc9MUu4N7F6FtasJ12bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSa2Av4prkB1eXPQVG68S6537hRFePWAePamXSDqpnyQ7cZLDzobLuz2NZBWuB4tU9RjNmJgJ8d7YNpSi9SAZh3",
  "key1": "UhubzcA2d3v6s3oUegHf4R9MjwfeY6s6oGRwCEtxwWmt1MQtAwWishsrmLas9DtyX68d4WvfoenMRxMA8e6poHX",
  "key2": "dXDM3MX5RuUeQkpk3oQaMedcdQP2eyKFbSKirVT3UNPCcawornbmG6Euzo5gSMGycaTdPT1U3yCvkc4PGkfP8xq",
  "key3": "3yWJAFtLHgsRKExxrQ9hkJHHttn4d8XtXiXxtxZ2wHvFwKh5yiyP1cnFoAHYceS4kZcP6vGNRxZLvtTi6Z4LWEge",
  "key4": "HX3ZFeDeHycCxWPAJ1zB5sRPGZjNxSy5HQ6zrAgFMT4EceJ79RiJJno2FwxCqfZXzP3ce3wHcnaspmeKfrYWSUu",
  "key5": "631Hv9xoutDrTHkf6nSs99CLEm9jj5D93SFSztV2FZm3gXfdhSg8rU73tRfqNvwsGjH26jUXJ9K1fmnPWFtUj81Q",
  "key6": "3e38S13Qog3TQULzPjfvJ2SEpd75No4r1nCPzYh5ae9AepGQB3Xe52yYxyveuPMy5bNTmsDpFDpjtexc4d5jPvkA",
  "key7": "4WmDMVGkbVg2qRrCvxYZzhsZdaxAvT8bCNqAa2B9pr75SfLyBo6Yw1qApudhL5CHmKZi5prA1MY5j7PkG4YQMyek",
  "key8": "29eoSvtSZDH4qjEXjfXvbHKuiUThFB9VugaNPBkd5oLKpB5FtV26tj6QUDSyJHuYTE8M2H1yFrrhUkgfTYpahGY7",
  "key9": "2w28wK2vafbLyR54uhKUuFseqMnRqJt3jD2VRRYHwicGco3rGFzWfUouXyFaGCip2avhkshek6P72E51T8Z7v3kj",
  "key10": "2RRwZdBuEsex6EiP8NxAaS62CD8nY8HWB2igY6j2FszeJeks3WmrDGRxAVmRRwqvq2bNnJTSt1KXF7tUZXBHnKiM",
  "key11": "4RRT4i84gr3KGmdfxRXBfuYNN8Gv72GnKhQU24YcVqbW2kDWKZo85mFEYtj8ErkdVh3u3Gjv9qface8XUHrnyysC",
  "key12": "2St56yHGwXBvimxDS9jgyzBEKPw45P2tKZp4jhTNKXtUXhLVKWywxLmxM5BPo9JirEj1u21JQisnh7nH4yQ2NTq2",
  "key13": "NJgkEbjAKccza5h285VycoHRV1KaCpCiHyiUHyhmuKpH9KCaRLy3R7EAc697YRF1tt3iRr7XnXcEv6kY7aEWJ9G",
  "key14": "4KTPUfVKxYBPrcHbXQXwVnopD9o1hpxpVvHk1MzZgSzhfjySuqEUsBywgsStnm5j3EptMuSt1sGhbnLPfhVm5wQ",
  "key15": "4aMysSBiyycNQhkpRhddr4ZYnvjBZ35gTb9bFaDx6JCCLa7CUTDdXdQNZSUrEYR8ujrsTWZtNZp3AxwhhPJNiAcL",
  "key16": "WKhWPBCeZW6JiHZBmPVkJbx3qHYTEKzh5wqDR4UqLWmFehrFaytD3EaVeYtftnYtvDTgc29uRBpteP1hWrKiyaB",
  "key17": "C9CkWTYBsj7qK1DqjogA4vYGvEGEqgwn6AkVfhFQU5FxwffxRqascYyAe45WPPYyz9it1j8Q4KysHdX2d8mGV7D",
  "key18": "2b2gSLRR9h8b2gjJzzZ9dcWPFuCEk7u5jgdE5tEf2VvDc51DSRWPGii5KwSCNvqJ6haiSgX3myEYMMpQaF1kno1m",
  "key19": "3QJUPwTUqzshZpjTF7J68cTC3dQdBTMTofZewL7gnR1UsRcAH3PpZp4nDoU1ySGRwQCH8X5byXpYrWnTFa3zxJ18",
  "key20": "2Zt1rD8eEFAiofkABkZNJrGXrkBSkoQ8JYFdMo2wnMqp3myBAzRwQZTRu2Y7xySdVNjrrw413ApbaT6z7LNTNaL7",
  "key21": "35LhD9LQmeCgCoVrMsDL9pGdnqANmuAuD3ud238ZwMDGoQDqN5QRrZMk3RWraPxnAQXYh8wZ4zvRrvoS5FxLQcTX",
  "key22": "ZChRVji8RVpBtxJfXE2Z5rodBvJ1hTNCZ2hYNN4qks82xcaCC6pN4SAgdxez16ewHG6xfHHgfcBLnxUvqWqtfsD",
  "key23": "51cuSvPxE1mPTbWF98c8JEDL7ckKWJvRyPo8tvWfXzYgua4w16MANBkPVJGUCNP2YSS5UDCXWVY385pZwDxYVZBu",
  "key24": "y2As5QTi7ac7NW26grv2MrqprvocB2J7AfZ9JfSUowj8ZUaDdbXv17LpcGhq1gacFMWRXCjvPbzsnYxow98Xubb",
  "key25": "4Zw8inhAXS52o86koezLwXGG5m2WLUishdPRmc7dbn5wW3qLm3MRBZrVwxu9iTw23nhq7mdKMCEEnnrArXmB7VYT",
  "key26": "3vXVTqmNKrRhYXKrdAhDj4rSFG7kzW54CGMeBhbmrqQU21Cjo6dMPYf76JfeSbAv737e6eF2uWgN5sL83R2d18HG",
  "key27": "5eRWjGKsermVd8Kvbbs4veCscwvfTn1678TGpbfDo2svFg7Sn74jLa9oo8rHYvgNJumdCsZaW2665tWTiangGVXV",
  "key28": "52GiRWFoNAnMMb7dKGxTouY3dey73zjLsD1aH6wYzHGNkBFUa79j8xR266uGG8LJCWyjyKaWcyWqtSxgsUeawSKi",
  "key29": "5xu8uWydLq2YzgfortudBhWqJYZSfqRfTFQ3P59i9tb5n6C3SVnrXSEPx1UwjxeTfGHMM2ggv13JwSvdWGmeToMB",
  "key30": "4cJg5BMtLM1zaw7S6NXUuSMknwCt8dfRcuyd8sdKMbd1BYSGjQqvuqwnkJ6hJpeiXY7vPSVnQ16UJR8xsTtuYjw1",
  "key31": "5DvexkS4vcRwNS37kx8YFsvw7eKVQzU6RZfBNcgN7hBRTeY5pTWdBJmh2RTqxahV6sdJ89X1wE2u4THHoceDF7Ts"
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
