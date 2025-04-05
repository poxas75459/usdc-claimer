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
    "4H7CTMFWom4xdnZ64EwcP6wZoKGMwhSYZwG9NeQVST63Ut97EaezT6gETuHxQCiFVjNJ7bCTv7bLxij8Jv3WF8o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uVZzmheXLW4cibsMjHTeRFJVXWxavxQvsnR7ErM1XdZpwWvKD7VvVxvQLqbJjyFnytyPtoXRQbVdRQk1un16CZ",
  "key1": "Uuo7XukBzEEA1SLPsJ1YiQQRKnMbXJnRtygvWkY2vnH3riJWoY6dcA6GiHMFXSCdXfjyEmMFgpwQzwNxEHqxhra",
  "key2": "j6iSNT6xAuNvcyJu8cJHPwxg1pwFw7k6Bo4gn5KuUcMP2wfeSmrP8d4HEt3SpXP6S4dWq9v43aEi9HVzvyVAZGW",
  "key3": "3Cq7gAjPhU98vqwjoLMiEP6cFJ3BRYpdwij53Eqh6E1jckY6uiL1KxBbXa8awscCiMT547tXuxLttYYDzeD1D8ws",
  "key4": "3MjBnG33uRndRbFUmo6ddyMRd5xrsv9xBGmC5AAWxf7zXLvmp1MJ3MRXvkYMiTnpK3HucFk8uFxBBkNgnD8hnxwf",
  "key5": "3Ws1V9niLSYekZGAYE9dudpTzPwZrXd2UapVzzvMPUfC19oAmjLPoAyWF3payL3Gd5i8rueDfFVQX8KjamLkEmQM",
  "key6": "34ZMiQtt66rkLMUq9NochYgfRs6Zt4bhB15EEPARwyuuxRgW9qk6kMmS9KLLkxkFALsrdjaBefGadRFCzgvzSydK",
  "key7": "V5Wu1fqseB9hpb2XzY5zZo2jnjJzM8ytx2o4vBYc1gNYyNo55pPg1CFrMJYrSm6cMvstfpZbaTrwvTKL4RSA4WQ",
  "key8": "56QNuEwo4UAAsKWrHs5475teDBr9tEhzhsuNV8xLhsYrFcmGwzHvFGZa2ZVR7hmqNXf6Di1ei7xWmKj8A282xjGE",
  "key9": "4yb9z4pFUhnedoXV1Qj6FNZJfGKs2UZKR1KUvULjHPaYvWUacxa5RLAwpCdv1hdPg5PMjsfzfnwLrDPzYNCf2xt",
  "key10": "4zv6EXT9wRAfJUrnuDde8kXea14mypKjKPyJynxe8nFtaXwe4ASEWTn7Dd844ZGYP27RJzanNZEqi9DipiFhcdMe",
  "key11": "2X9iK18KcDZL76YvjwDTKWKZGo6a2kKcKv7fUUjCruPnNfTay2RXuMfXpRqhSxp1cP3Wj1zPmgHDjwxLJqhfiJAD",
  "key12": "5BdqxqcWxaaSdALVLM4aVFBsN5qq8VF94BpbnuKFdhRW9MUWk6K13iCsJPE7HQHMR5uuP3L7xW2n5zT6oYVHdiej",
  "key13": "4yY1tagYkibRGxNWHSmhT16jJqbpVWo81uJb7qDyFFhvqNH1NrivvAXpMWot4DRDfQiubs9EjYuwXFn9e3qX2eRb",
  "key14": "3iSUEHJjgHRTDQiN5DjQwmEHXiZkmuDSrJrVyrNLGMH31XdNP4X8iZx1PZJPrb9mU8XbsNhLoUabE1sWNAwM3ep2",
  "key15": "o4L8dnGEEHs99yRKYZhwhKvP6djFtsucyYFa6uvvg6ec8QeJ1szQmKZLfi7p3P67XxWrP3EBBwJSwqy1sQbUbKe",
  "key16": "3TRxWw761qBZ8BgQLkubMN5EATxcqJsLdP3wv5YP4RqzEygnNDb6ZUoDWSGMpJxKgVzz2koC9QJfesHuxJsvhVTo",
  "key17": "3t6v53SJhEE2Y8DJ2A4ZhYEsdfwr3TYPVq83WjeXPyM7mZqv5QyTrnptTW3QP1Uqexn9GE7mozEMMcZzjU5KXwAP",
  "key18": "4pKAmLMMtdEr6UdAcVE2EgUKXUthh3mUudZFArmAUaumFBECfK4YBWBxTpkzmtu5J8Z8NtVYzrYujyaXbkeu4B3u",
  "key19": "2Jwca5fcpomkb5Pxy38TjywnVrSUGGR9pFrg8vfy4dXt4j4b8hghYSv9JqzbFapaRHgMWzbbzujt6WP44bb6ACN6",
  "key20": "en5fMMAzS17iKPGyt4hdsAWtFUnwET1Pcfap9osx3r7sHC7SmBeu71sAewxEySiPJ1G6znaWubBWVnbuCZuP8tu",
  "key21": "3uzBvFohqUhqSiK1mQpqtmjHPeadHP85z1fAhDBS71UZ5bY5PgWKsLfucfULoUSuMYHaoujMN94jTbCPM8LYNFNK",
  "key22": "b4WmjA2mAigXVSNy75PoqLnSpz2NmpzLxfxyTrXmanmVY1ZLMPKb98e9LH61mmPvyq9odPe4PMbvmKume2TY2Qc",
  "key23": "3YBz2ATy1REFBgfnTLNK8UBfdMBv9fhE6mg1pZWG8aQgAWqP1KohXwsjMYbshB8r24YV95GM6JZCAaPGe2gXNnhg",
  "key24": "4ViHxUC3GNnrqhJuxGKNNfQyBW9D2eKfwiJazLNdxn9SzYJeiqWD2r4St3andH1oUGy7yDsNyugq8GbsKmGBz62U",
  "key25": "4k46DHQNkYhEkaHUDNCFvrHRBpb7AEGvNqiq1WydBnzS7ongCiQ5HTb23SLBWimYds1anjJs9GiAwcyWQCCTrBPD",
  "key26": "YZsNLuQfxnqym428LrQuqfaT3DQED3NhU1a2ZJNj5SWSW6kXKyHUFDDiU4JAm2fBWbYLQUJcRjdy8QUQ5jW948Y"
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
