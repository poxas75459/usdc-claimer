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
    "3ee9nG2H5vvtPUybs4PyyXXwv3rhLnydiBvDeD5cyorjHQ2BEKEMsBJMGGjcphTb3ceVsLjuKvQbY5E9f9uY2piM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHEUThBeTUG85zcSgw4HieqYHEr5qL4S6SKCrtmfbTCgBQ9EAnadaTYzSEYNq84mogJo1UKkBWnLRnk2fn8B1BR",
  "key1": "3UVo9Lu2gpWHbzAxHQhgFY4kydPcwe7CrVyG1fvWAWq5LS1V5UprXsxmpZQ5zvPhhnqY4sFXx5437Q1NzntVwTqn",
  "key2": "VwvEkEy8oDnhpRbjZCG3MWeQxgkzze12p14VaADBYffFVdEcUGJM7DUWUwRjSsEvv7EKwL74rxndXjxhoifLycs",
  "key3": "2LDmMx8gryXi4GKk3fBupm4QwnYeLoSRFUQ66v7rKuyty4DUMVMBDdU5MwcJVyusvLfkLWgwX66p67Yw6xLWquhT",
  "key4": "QnMtBV9HQZH61LbbwggjPjPngBcYgQpGm9fCtw9SSCbwWguWzMa8MGJ9C7SPWDruhJos5DZ2VJp4fWyMjxdrkzM",
  "key5": "2Npeb33jstRcKyTmmcvdKzJ7RW6RGDyedNYzGNNwEwVEmb96S6FNK5xA3fKxFQ8C99NXhxwuQgPMQ89Auo5tFHAP",
  "key6": "3Wu96QYkabFjUA9EqTmfBk5N7psEXSJ5Fh2vZXttFu5Nz2CggLMn1yeDWSrAXb7QmtWMzFtzQT3NG9rnxXqJjZt4",
  "key7": "4vkeVLLsb4pZ6X6ZV3vz6kiG8PnGjpUmVnftZVCU2vnWwjAyxKrfAxBpPLuGNwePTw8XweHqHaNEKTrSHBhsNZjd",
  "key8": "NqKuAmEu9HMCcyNxydoadBwA3huci8ZzCnLXaMqdaQ9HqtG6ouiGi4bvFdXeUyHNXgMRpjvV9eZwEn7DRM5JbjQ",
  "key9": "3qe1bjjcQvzMk9T8fBAWLfpkUoUuGfrdwz2z5CehkL8k6QspqxPmrH7NLjQj9iGKXpnyXWEPuhgnbG2N6CkG9cWF",
  "key10": "3QqeAr7Biqo2DHDq7nPD4F5Fq6XFb9KpYANWHiE4PNaH3V3UHEeuY35qs1JruuHTVzta6jWWzjSjrAWNhWhJNWJP",
  "key11": "c4VoHGjEpcKHGBVYq11bom8J1A3iDcChm8oszWCwjqqhR5VFv5sArcLbnbyM9Wpidoac7iYF1uqqYcv38L615rE",
  "key12": "425P1o3HEobV2nzd744dkYJrYQUPVAbTuaMuZjTrYsNmjoidXY2PWDqydj8xhBKS5ihpRSR6cNHvtvR3crWRKHv",
  "key13": "2fawhQoznVE5Hqf5Z5Vbx9oSgFaQZLE7p8RyHbPQLhvsMuQ3QcVvJMdfdXnqpAsyJuX17qkXDYpdHTd74rtjbKx9",
  "key14": "3L6ZgZrvyuwSYCFWARC6xj4HmdzktCfBXUZHbFuRNeqKNNjothgbrKu2u2usRqZ89GLjMSVuRMCJN2MxrBTAEZD5",
  "key15": "3hqwfjf7KskvRrBSsPu3BY6bro5H2YrU7h2MGVmMht3FZCy8k3xNtFMuj99zGUuySNmHWMpcztZ68mXAiKKAuSQu",
  "key16": "3hqi6yNADGarNW7VdByPNucnymNKVNRHaCna4s8M3tXntSw8pGEoZ4czoCfXSzeLkvzD4irkxCgx7Un4WaMkPZD6",
  "key17": "67eZvkDRepGnTw9grxqLJwPCHUn3cKFLDkaDtEcFXbpZ8ozj12ZAtnoX8TALSVpDMm1DMRLLhGLKKcVHnqjcxnxe",
  "key18": "3x5i5wB1tmobxb8WUqYpHSyh6SeTgBCnF3TtLnNC6xSRN85WTHaabaHAzy6is2TYtqktUwnQfT62CMVicEC7Pg6",
  "key19": "2UrcspVuMxzEAKfKJSkuyjnqyXE3N8V5nmHs1MfFWBTDDpVSvmV2LVAxFi3PZQ9n1WuLw2cKYJSB5TxMiYa8KF6H",
  "key20": "2656jq4ThdbNCC7B1avdgnt8hPMhit1iBqQBUvwvxu4QQEZLALn9jGeHS2kqEk64caXAEUtbqEA3zYC4TXiJ4ion",
  "key21": "2G46bmqVXjYsCi3K44v9b5W9iRN8GgDDbtDDRWu6LbdkM6UBh3edXLHDUNTDtxPQNAkjnbBw2UW19HmS7oJ7TXNT",
  "key22": "LucMaDuihVhtHKGW8o5W7NKfnLpvazBjTJ2vy58A2jouvq5899Xjupi14fHEMh8dfEYHEL5WsueBnwvyDQB5gUZ",
  "key23": "4nda6HYeXen9hkG7pcBJNc5xnCjhUMX3EhN2f8cMsWx68kBJkGr56q7v8Sz1UBaTXFQYNxji523EGhsKn1mjgzfK",
  "key24": "ikueivi3qGdVAy1tU2hjAAqnqGEnBZcxXLwqycWpJbom8y2NrbijZ3eREHgp6HL2wXmQViDZxesfHWTmsUi6Uia",
  "key25": "4PCCqHUZrCtYarESSmiB8GYuJ1ZcHqmvrDAxdcUJB6NUG1TAHkzkzpEfx6szfr91mnk6QAcbCRsoWh5s2mF86Fp7",
  "key26": "3HtyXcdTD3tFAchHgnLnUXMXzDCV5QPFreBP1vL5jKsUQsbx8EY5sX1f8EP2EhEEsybmn7CZ5YQ3xyHVMjPEVCw4"
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
