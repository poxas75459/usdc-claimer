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
    "5nwxWarxXBc5Zq1g3TAbxKHb8gBLwvVMQQmgMHH7mDsPYhiayh3gRMDoxGPhzBXzQsZ9ZJPFnznQ3APaDVpHCayQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASL6YkQUHQRYzkkvNQgLqSaJjUyt4FjdJGCu51U3Ato3V7EGhzUqWxo3mYe4CfZvHwVPPNuUCRbCTMTsAJdseHR",
  "key1": "3Ye8vshEKvZ28JpWsGbnBL25MW4BWCpAoDRh4uicdZJN7i2EZfypK5xcuHpUocxTBnFto5iJWdptfSuAfrhwPX7B",
  "key2": "npRxuZgmvhoymmRLfbw4uEkqFCgwyg652y5EGD6mV3NsKnkb4jU9xmBYYVWSGDW7EccY8BWy629m1nVtL6L2pgM",
  "key3": "5paKMs7Dd2g3E4WfVvS4NzewxVYmEQteXHaNzy9JqfTE4EyWfZm5QBtVpN8NE69sDbE5T7eb1mf6Rnt5EuDKd18F",
  "key4": "3wc6sCUsyXrbFuJpmYMiWRwohhmQscwsqU8uxNipnWdUYr189NwBFv4wPvs4ivdQ9PyWVgtYoKWnE2i3JX8MYR2q",
  "key5": "eib8zQLWxGxRawKruh182UC4MkHRjFRk92YkFZ12ssUfYTGMXFbwD5JbNgeH2NJkXt2i7KmZQJSdKUR4sBb34vJ",
  "key6": "4xZXmoaHVLdeCG74kubtEr7GVhqf2CwfcmkRPdAD89QNB2ot4XAVKkfU8zcvfYyCt4PBtVitD679WpdtmN6m2Z9V",
  "key7": "42tYvd3o1xMFtVpKrLQY7gKxRLE3KAAXqmpzb2oihXrFkstEguJMWa69jaj6YezRh5MJ22k9GvhAx8SCDcbFSYgi",
  "key8": "2PRqkJHDs8TgLeajs7n3yYtR2wkkrGhSkn32WDQKvaJ6YD9s7fxP2AWMCpLPfTQgyCvHb31cfPBZtw5g2xqXJMaQ",
  "key9": "2KR3k9bBt5hUPcSSmNcw28BXrFXwNfGYsEeGH5wdutvvyhmdBeo6V9QzLqNk3u3ubKZ6UgtCYxN6B8LadMwYV4Lx",
  "key10": "3uVnM726dhgopL4zqodbECrZUYdSjNpbsnTTjyeocpcwATxUo8f2v1nfjVH9yx9t4A6gSXMq2h2SVbRRXsvS7xQ4",
  "key11": "2EMUYcsoBcJfr4vM6YTQTvFxKpxBPHxcGd6QiZDpHeC9ekKJcPwWMe8HGYMHno9EDNaqmmKMzNPaSTURn1R52s6z",
  "key12": "2XxoY9NPq7S4ibb9CReqv67z6ZrCKuWVF3XjDcg96gREsGx82CjVwmMWcuLP5RpLapZhSzvCquuCfLMX7MuAU12M",
  "key13": "3AHBQg6TtxanM12AoMRzrnv83ehSMTbD28M6X2Ezsu51UmPzjWyx5yRDG7bFgkEUFoxiMGbDw438iv7pT6FU1r5m",
  "key14": "4nmGvasNatxrjdHhLEo9vPtzumVrqWSARtYPB6SMYtBx2dbUayXBPmvQ4mvkWkTwySfLhqVSnxvDXiy9hDcXUMPk",
  "key15": "5bT66zkRXcesP2yCkVxQqNMvAr5afofnSyjAvmbV4QLPijy2HY4XSAB4xuWHLfNqAHAwtmEx4Kq7mfJMymKSM4wm",
  "key16": "4THzK7Pp4seeKfJPeyDqwfhGvPdnVPTnHyhvJk9e7hK3evZyGa4TDPLgZsKmqtgkQP3bwpvJn8VYpnZPUcrj8foD",
  "key17": "a3EogWC4xBwcN721Y2zbX8WAFRuUHr9qYW3UzKRWExGuvGtCaCEA6f22hLqJbxheLQ9Uhwth5oC2zjbb7jBJ6aw",
  "key18": "4Jk1Un1jGhSTkajJ2U7YodN1LHJ1SsqmzmJzshNCREaLB1qzuaREzYaCy4tmGXU6Vp3qjimkzUMzgR74CjEtVm8C",
  "key19": "3Ujn8FLzRtA6YEBxrKAHvQ2gPgLJHHbYnQuhqBkDuB8jztfRBv1iJBPVcABV1A4AmGHMWa8vP4EhG1v78CxW15DH",
  "key20": "4kcZPVDfJvEqgoDcwA9NJH1LnQSr82qV7f16P4jQgDJX5WnseKUQNgfGSkHGUKyRWZNWusqkb8tUFt5JY4mhDUnU",
  "key21": "2A1mC3WcqBAzqKquvxoeSwzYYHDy14aLW8qdjfdmQnY49NpeZMC9rmZ6Wh1Rune8CQcgCmgZBTF22ejNGHSmZjQQ",
  "key22": "122jfhjm78nzSXLefBcvmSAwsboNxsRyqEJKHLqeWdYb9yBKWqDecedHXCuXGPTW9xvtqhSgWq86qpShMUhj3FeH",
  "key23": "5tAY959MtpEgmcgqeT8iu5nn3T4QGsuBc92T6Mm89fgZ69KUfRzjhtVZjCkZQQox1MedYixZvFKmnDG2ejVT8zM",
  "key24": "5s2AqxQ75eQTzHuTuh1tk31xi9bnJXmQvCteiVLNMkJNhE74kWkc8pEFX6uGbuqHN2mxXXKPtM7Yjo1JVQyr9GSu",
  "key25": "5UAj8M8ZuhcMjbPZpUG5DL7SZm8ZYs489LGXZvx3XAfzMDM1vcvoijzMie7NXtrUT8AbdqVBPSAkTCgx2mydryJm",
  "key26": "5rJhKPauKUaM5c7sHNrSHUJBXjoHMriu9itH7UwrWZF3LE5756yQECZfZCBZFPxvriCPu4RTTdQKKAo6FSJELC8C",
  "key27": "SXWsxYi84rdKLPwZkyxNbz5egWAV8qQg4j4wpRrmtoK9Jr7kfg8LQoY5XdBhQUoDgL2Ho9zCsVDds71fhDRyL3F",
  "key28": "5PPe1jLe6i7rrUmefLDiq14yHVZT3TKcUSccT47B2hHfnotg7o8CCGZFbHr6uqS97jGyHEMffn1me551XSUDhiiz",
  "key29": "LWk4ZxkfsyRjoCE6EGSza4vgcZw4bvgQhd9Bb5dJb29f88bSCT7DMMxXQwdGfySovKyK61qj4oPsrR1zTEZZbDS",
  "key30": "41LC1HvpUoHr4USNxPXvxcwQJZ3yagA4yV3TJQQK7r9vrbnQ1G1owbz85uHCayzCNPFyYyt3dke3KKHRYLB1bJNT"
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
