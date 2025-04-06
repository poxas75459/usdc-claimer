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
    "5nazBaHxGfsjESVrLk4iHmNtGww9s2YMUdmoPcoTNB1Jc77PKaYLRFQBckVahBo15DRAXcwc733PidS5Kk6Av8v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CeLz9E9c6BCiAyTmYMoAnCvV6LJcpLPnxGmwqSskYdwktGZ2Xy32qxjwzZVaJ3s77bmUx7rQ2xLmJ6R16KADDHv",
  "key1": "ELd1frutEnbR98QBrPGpvrobZNT8dc7zKei6YBcnHPmBSF2zzofVMvZUgTnNRCnvrpJ8vG9vsstqDyi2XyJVj2J",
  "key2": "3f2EXZ3chQvpsG2RQ1o8f1drWwWpRTGuecMNb8RwAp9VRPfSh6BKRzeYuziqrkSvbwDjaQUwaHyaFC4szBjgaBDZ",
  "key3": "3dcetDQLW2ktV1igBfkCpNx7Br6cgKv7wN5YYmMEeoedsU75aLnJCXkLe2AK5jXFCErauEyMtEHuxW92wtV62fXR",
  "key4": "5t7bAuHfKdMHiAVXuqWfFy9H3YAZPtuiMNWbQkjJ7HxUvSSjXYQGntqSxNLpmwXj9ecYu2AihbXP2iN6HsFk4ZEG",
  "key5": "3dLJNQoZAk3d2rrHrnBjDH5kUt861eysR3XiCsbe1RoYkK46KsG2bf4b4vHbS93Vi7HGaoD4imy57reRNoFAkLBA",
  "key6": "2s36o451PDmMwVc5MQYXSc2NbhRfuLNJhpr3a6RFZgwk6dLGUmjLfSw3Tk3hfKF8AgYycpjNbGY2c56pCA42FMt6",
  "key7": "5w9rfk1K4miwEYvKDVk99aqcUg26HjSRy8AZfL9zoNcRPcXgi5ke5gFUQ9beFTfPn97ph29xxLvp9mkZWMD9oRY5",
  "key8": "3MUMrh9eJkerPzQKixL1MyVBrmNjcoyL8SSqVH44w1U4uTVLfTzUEb8znmJ5Lo46sLqjVxmB11kEGfdbGQ2nFhrt",
  "key9": "3uKWkE7yQt9NWLBCuJndjEDTtkcikszLnePw4MybAMn6LdrR3GVdL8p6PSNj5ZZfgni4Zq7JGk9yqBaEhXcM4wBH",
  "key10": "3HL54F2nWotSNReDFUGQqKRPhrWhMScv9ZST3LjdYvzmmxHjwrP75P7YbUnzCzcpr215gKiuP5ZmkcigvuunqA7q",
  "key11": "5DUM91AVhtHYz6Lyxge7rDS2EMpd4y2H88Rqf8W1LaTiTZbvmxnFT1aL5HfZACbezLsry4n4C4ZSPAu2e6r9bnd",
  "key12": "4ZM2JJRxU56fPUFJ77BxTNUdKNmwL9JVzLGdsAzFS2BvLwHKjJQXo9xeH8hG4pFKe5LZBCbKWMqXZmpc8Yu9PDJT",
  "key13": "5uTniKFkihLwDQev5F1zP5Rz3MmbsF8M7wD3HUVm8MTL1GMR25JRf8G8gMnquJZTQwWQcsbsyZKSxy84EdqVbAAP",
  "key14": "4nsmB2pNfwaxtpUiFrA4ZEK9bZeek7UVYxkAb71msGpNATHLT4HUa4UF4CCuMw7USDr9Kf8AxR8RjXK4bXS3zRmG",
  "key15": "4pKmuWJEMx5n4VwZuARUWDtmyMRNgJzHc4bj7ce4CYeV2gUgUEGJFjrpFf2M5HNQLkG5zxQfo2KpBbA9eZ1PJH85",
  "key16": "5fWMTJANwtmw238PHYWcf89WiUFaS4xv7tEfRWsV1anGmkWqFgcypCSQRHbTPaW1r3bWFkp6KFCBRF3JwxmktvgG",
  "key17": "3SLeSi9QNY9keipdD7Yet1ysajHG9CA2EKeZw5qaw3orM3SStFdURKNLysEr2RqUYLM9oSxfMNKy84GQCtoTdENo",
  "key18": "44wY5Th8yscyKELuWjARojE1c9yedu4ohLGAmbCdhArBnCp3Tob93CE6hoBDQ79F9eeopBbfX98QmbvGMz3yEwaY",
  "key19": "5nXdaFVLnHtjwUPJkscg56EPWgLfLuyRoAdx9aJ4Ewmh6rDjDcwTXrmHNEvineZ7Yvn4ZwEmida9ME6yZCZEZbQ3",
  "key20": "4NPXWKTkNkLAxV2KFZQgYnPg98qBKxF2tTUvyNEfaGdHatWrzGC6i4DLjkqfW85MZ5X8pwE6q5zpxkUDabZa8KS4",
  "key21": "5FyKhofa2EdwYoD7nWRAqWP5C1swZp57V9QtxrWaCVNgHSKpEyVNDTAf32fYAcpY6PvQ7fGXJkCiEa1qxNM2A13E",
  "key22": "ydQbLji4jEzmny5H4wWr3MG5o5kJAmA5r2MiRySBL2pr499KNksfUQEigW3pNMs4JTgXJCrc6wWNY3FyVXuT5Zz",
  "key23": "3PLGDsHFzMGqfxnPpqzaAdSETxb8yNGc7Ybq9xniVwycy2DWJWxtdQyQLZysaAHoqp2dqCJkcLfoCAPU1Twpsmya",
  "key24": "riAW5JcwoHWpCBRvkcdo5CrdzTwCVngpoGXEsHkM7tC6d7DNNguMC5BwM2m6zQcKHmPUiMfaqX6XgankYjWB4zb",
  "key25": "3XXUJcqQ61xYCkZoTp6DT7m1gQnExBn89keSQmospHF6pZc3pkUJqwHCvcUUsGfVRjdkxJ6bBYDSDDy7k4GDqGdH",
  "key26": "3LrTJo5Vhs9LezjdUmgF1dNqxYRZiu2mXeFcuaS2561sokW1Czet4GQstd7SUzicxgK3pC9GYySw627e1y1QoEhB"
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
