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
    "qKZJpEhzPqiaL9ns9k34PSiWpTWrpvAMUkHds2h1V8HPh46CcJoG5VYxpMrYjLCnLZtFtz7FYXiXkwUfaJ4XcoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFgr547Sn7vWMBZrBx689sfaXfCP4rz5JJyesYRttxNdY8w4CBP7Pt5THyanY99VDAa4pGbgy8JpBE9T6gZs1c1",
  "key1": "2Tw39YsXa7QsP1JfsvpizdKba7rjmoaGjXu78afq21Wwg6aD5fXQfbQurzc3Dr7PMDXdtLtni2KczdUB1pxT3SDc",
  "key2": "63yUXSMEUPQuT8yqMdCcAf1PupWqsfmm7YMKPLn18CSQq9ZDUruzJAPk3oqga1Qa289CDTJtWvEDTW4MpqxtxdZj",
  "key3": "4dyGydZteE2rwLRCEfhXccKMFgZMd1uVmX9W6Wo14691L3Fhes1zLadvYEeVhXpvVMAyh94s7N5E9bgpmyimTjra",
  "key4": "5CX3UuiUUyXzS8CDz2GUQnwMkyc53Cz8id4w5oamo3siHdeS8uQ4iu877Bo5WXxfUQhsCtp6u9yjtCM8vjGSrF6d",
  "key5": "23Nx4HBQKundcP8FDYfopaRpdCaK9UHDRPdrn5r9tpv8n7spo93uTjjYmgRYdjbBJmvjcw6mGHMFqu4RPKjDBEwe",
  "key6": "2CmrM1s54nwX66LgjDhN4BrBDd1gqNfrptzzBnCQj6mg6yxEfjapahiGXU5aSMpg1gri74HWRYuHgZTrufZ1NuC5",
  "key7": "52XTN9e6MfVcRkZQc23whvbRHCS1Dpkm96naaj4ddGPsLpbA8TigsUkuYdoMgRSWsGX17bzNKFvmj1b4yUXD46b3",
  "key8": "22SrjfdtSWbyqdokSkj1fBgNhae8zSSWpc8x2xzoWYxzQbQF1dNZATQSXNkryakBWYJPqMXR5D78ts2Zui85JRCe",
  "key9": "2mztWMpPpvhsVGF8jfYH9qAyeMZ5HgW4St7MBzX7yDvv2fQNPLT82qH58cYDYkyoWAVVVggitnHsuYVJGosnH3pG",
  "key10": "448w7WfgVFfwYBZ4swEWvSRitmL7MCcDzgSoJQ9GKC9MGWjcJ2h9tB3hMPpQ5WJKnD2Tfoj4C4FZ9uDQSVWMVQoo",
  "key11": "ggL3A2ufzSsjiLma35byFenbyFbD5AyZwsBBb3RrU3sZETW36Hteu1aZ7nxSSkpg9HvQBxczan7YKLcny4aYcHs",
  "key12": "5qJUeYfRokp9iRcNYEEoipb6nucAYSdANNY9jjkyuhQk3DHwe5c8giNbUWCisbxiyn4KsLp7a5i7NCgxQxLaS7SG",
  "key13": "5LMWJvLvZM3SUBkXhnVC5koWbsVV1Jp5xT3yUbj9VGGwvzALmY4KWDkUkBaJ1oi2veRuorSzpSt9vhcqVT2zvbkn",
  "key14": "4VbeDN7WzC9Qmh76kk2DjXkiVn24cMVaNuEso2MKf45cMmZfzuVEDHVDDpEBWtXBgHQNdyyWWxndaoYM6y3UZJX2",
  "key15": "3RPBmWZ4nTvVT6QqKXjXjX7fdYC2TXRozFAxxsSFbiyBJP2wtJYAd4eHB3LegQzEGfL4QTnq7eGo7jQR1aSqrX8p",
  "key16": "oxZbSkv2NJTMfGUhnY7iYLqdPukeHaSHnV4586M2qYvtwydBjVFTfr42s5TMUc9SHyB5ZxVUCxMrzrGioNdyhyG",
  "key17": "43BNx5cLCxib3Ta4RbMJebxpQLN27UHtfMwZWPtUFMzWQDXxvFA6jzTG53fJdkTNroT95N1C5DP7sYbjnLgRtuE",
  "key18": "4bd1onE7L2SLpqLsR76wBEvS7WcxqYqoB9oB4jztSaR5NPABnTTeKqW6NvQMEi6eo4hvyh1mtj1sCAJpqmYzj5ZW",
  "key19": "4uks8ruvL6znKMKjCXpR3ug9PJeMY8aFC4QuEdwyhdNwSiW1dQ3YMsv9xEui4WbjnE2Twt3NAYtSbaY6ahMCED1L",
  "key20": "2mL2jP4Fx5LZHkYYZn6bT26N4Gck8UQ3yS7YyqX3m57Aa8iYS92kamviDBVdfkvzy6c3d4K74LkNsuWARRuaxaPz",
  "key21": "q5tCEPPRe6eTC8xy1xARrqcwJtt9jNCEgegcz9PBBo9vZ9thuij6xJ9zJQab8WcS5hQJ2ztPak3Qb5Hp1CqmpCy",
  "key22": "2Xpkud172XrgdjPDWD9PTqgdME7T5ThV3143Ayw3hMBdu2i2zGQ23UnqjLdPL3555hHFdt81vFoQYUypMRUXCQtE",
  "key23": "5fBAgLq6L1QRMERR4qYuc5gDkYqXJC9t8oUj2bKqbvHraAdVdgv76RAfpJU3A2y4hteno6Tn2WDzoN7pWMMfM6J3",
  "key24": "2SQT3Xtd6t1ZjpUW3ue54jfy1rbu3bBLWho2YsMBa12SQiEteMhzdB11QHMbMKTTSuqYeETfGKTMtHVN65rWrEyf",
  "key25": "2CqjtUHR9PUW2jUDFbh6GJvRKP4Tm65jBsc3k6wFrWhsGoQPAzrJVJVK81PxJKeLPr8PhMxJ5s3fACsihmobuMoh",
  "key26": "2wvpWHePxnGC8y6URT792vBNUyVZkVbBBWsdjTctbEn3ecJGFGFmopEDuB5Q9tEV2oug8MnCgSVd93sEccN7F3pw",
  "key27": "65kA6MDre6yvpx9tUTz81EKJyhUDhtz4ZZUfeaGNoGzkopeTqmmcszP9uFWWziZ3QyKxiHYEDNQvFXgDyUDoZgAZ",
  "key28": "27VWpG6JKSyNKAtKttLQ5ZYE61LZF53gKNTfCZhYz5cyzwSafdeWcLKo4iLPfKSm5ycEnSaiKmzb9xPNXxSJNzCU",
  "key29": "3H4j7bQAct1wjZ2j9TZsW3RvYLCbztF3sHB95Hvc1Tx1eEMiTDrLjJV1WkYEQEfjAXor4ndZHiM2suZBSLDdWk78"
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
