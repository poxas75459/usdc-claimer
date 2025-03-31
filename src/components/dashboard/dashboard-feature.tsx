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
    "3hJQrAzKDYeo8Zr1pwdgcRtcGx2Ru5nFSv5RfXUZfqwkznh6WLYQNLVmq28GCESUnMxqUfnk2q15Nz8HBye7zwAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2c71p9ekBg2BwSbsvaLJR9XhWt7KaqpNKao5iGWmM9g35HB35Tspx2pU15CRXgefW2cbqBzd2qPVkELqPBKCQX",
  "key1": "2K5hEFZiCyeMZkxfpHPFhkVPyuoxjXQxPqqK2aJxmqqcnFtgYbBrxMThzM5dVUJyjbaKtWy3WhzcCEJgmbQJXgq",
  "key2": "j2XrKn62Uy14AuqZUwtu3YY2A5TUu9d2HVCHH9bvjsKGtmGTuLakPpvvmRiF9RmRip11b7zSsZmaXyEDSHdiveT",
  "key3": "Z6brvgybx2c8hYzN5zEArPsvx4r6VbTjY4ZGhZ8erdMJ1kUUh2kfnJkuMnfvMh5Ek72T3QegQ4pT9Mwe11bSJ6b",
  "key4": "4K9BmNggsfj8Q8kyPqYAHK1RX5douiSszUHGHfdNrQLsjnPLfk1vTFzNLVC396wMDNds6y9DS9GRJTAp2DoxYDZd",
  "key5": "5LSTTxJVKdzLWdi4AqasDxPCYF69ua7F36bjX4QFfqfVfniwoxCijHHkrHC8Gg9uyu63XFZw9BbpBJQ6cBCqC2ME",
  "key6": "3wkaTNwa7dfhiJEP2sBoRa7VpEh35S2KabRHdo5WtKu3DbvvHqaAGbD2mMXeLeh3Q4FNAVt1MQPV4jjpaGKsJiQc",
  "key7": "27aVFMVSoix1FdY5utcfBEWKCXQnDk6h2wPedn5JnbizSHqFwNX6DrqEq8fHaq4ykb2N7YTk5ez9P2Ub1vGJZRem",
  "key8": "5Lcd9jJNqaVeWpHBPjuaeQMJYiUzePH9preWjWgY5Zm21YxegsiY3iu2Q9aFYFJtZU6Be5sMimwaifcg8ZCXu3BH",
  "key9": "61FewRi9vTHgGFs2zM2cXARzKieC2JTAwuu6sqbXf9o17s5eHpNKkgR8srnB6tgmPEJK5B6CFdVcVDhjh71Gtwsk",
  "key10": "5QRb5qLZZMDi7QYtbfNanYw9867PM3V94xFZAJ6kgSHfwF4pfayDgCqwjx2SQv5QpenXsnWAKjW8MkG4ns6kiEuc",
  "key11": "4hBsqHZgEDyjX8zFpxamR1AFTfeEpPggyL8ZY2A3wXuL9EN16GyFobWqRUEnGQVeZRVWjmPcvjRVSAPfANUvasD7",
  "key12": "4fsJAoAo5BppuNSgek6C42cr7c6UWqWUQT2f8JKxMFMfjD3kVgftwEZQKP6kmcrHhBnkvrpKRdSpBR9Lynqi2rgN",
  "key13": "23dBGaCAs9nQFvegXbMWjPsXU9cuggV95g74w6FrX9eVHkUuWv6dZiHrgFy71NPkZgZ52iBaFSQWJyqB1kHVHM5o",
  "key14": "46ZgCS2Pm5J2VyXKENVZF7cV6ZH2DjA8UFnCfMxzBLrT5ycQcVivqpFAaW47XXJNPzBLR4ZU7Zu3mbRXkGX8tfc7",
  "key15": "3xESaicMgn6GXd5UWv9cqAQSwC2i9hapJKMuwUFXccfQpCrxi3qpzfKirs6Abh8K5qAU6HPjWH1RYsRn4BC5sby3",
  "key16": "2f2n835HSwY4X36z9AMvrKo5QRBywkjx1Sz5njBBEx1M9L1hfDT6ZdSSwtw5xrQhEEqKW7fou665omWNdkaF7qHz",
  "key17": "49y2meavwi2Yu44wt7TdUvZktsWcaF9BKCQ2fdbWM95MfBxM3vNBjAZedJ5ptbaZx14cKovkLaK3izGU7pphes5U",
  "key18": "5GR37fnHotouM7qKsV8aaeZo5ijSqmA5sw7T31iZLz2TQfJq4bz7AM7iBPEHd2yMRLWd2DyvYm7CttyjZRGwqqxX",
  "key19": "57nmtpFJUSRpA2DtyZVYY1UAas26cKkYU5BAodWHvmj18d2ApwocihiJHJTyhE4gEA36SN5bt48S4jHdEJvjnZT2",
  "key20": "56ZvfWcxWNzghntER4fpVsMT2YQa17cXKwHwBWofM1MGr9Um22C2NorHuebxM4W6RU1eeJnNFUqtsZJ2Xx9QbLJh",
  "key21": "2Lk6bTn6BJXzTSkEaBNjnCHEofMYNDxmDpYe3VZz8fAoXsvM4PQ8G53m7GvNQn9Un6p1kLB1QzFFb5k58UGYisyz",
  "key22": "4fCGYZ3L5PBdZMGLdg8So5XDKcZRxqZXeHhcrYcXWBJqBWbNh8EAj67jX4uBKhFaudaC2N7ebF48W9cSb9BKRtWA",
  "key23": "5mCdPZCJfs2YjCH3Ak56NgWUeffvuaoaXeKHZGMmdcqRftj7ApfJagc63q4DBtetXjKi1zQnZorx6XZt8vrFqcJZ",
  "key24": "LLTkbNh1beBUHsY1SoPrdz9H7EnUiR4gTxsuQgDYGvTkYfQPcS6z3agRYHWjT5Zufh6si71GqYLnxzGAKE7BJDb",
  "key25": "5qRJ1zZYMNKS5HWQEzSK1SgD4BRuTe5sfjnUq4k8zhiAM4J6nGS53nWB1cfC41AetwLiCXEF9wnPkNAzsYUGS5Vr",
  "key26": "4NpgBdzEct2gbBhEj6GbA7PnwHFabTKjbdJMRKjLZ2qiFgTxdTSFn5i1chyX1WNAjtZrqF7495B1aRvkDYJgmMQc",
  "key27": "4UeZ276qk4m8YMxviwUx34QnPweDQuzYenCesanyV2DVNAc1cVCCN64hQN6kPWTRe6SAhV7p2gb8UMpWkbu2BjG2",
  "key28": "29pRzMF8cfgri7JAs1XkJYTgGTvAs8PQQCdeint2L4UE32iDQPWU4rSGVNn7XVFDhQcoowsALJXyVHoLRZb7XQXS"
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
