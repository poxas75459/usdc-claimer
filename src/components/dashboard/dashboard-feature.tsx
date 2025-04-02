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
    "22q6bPmc6a4QMQYAx1QT8hDVVXNvEMmzyFectjvL1xat67abfiTX3K2z3E6nrTjEHTpc27DyeniR72sGa1ZXCSDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8cdXWkpqwAvveomXCfUnF7ragRLNgdX1tJfEJuuBcUCk6TryJ161fBeodAXNTs2LCAC6TetN8PU5Cv5kou3VyU",
  "key1": "2CQ2joT8SiZv667bXMVYkBnpsQUKnefJRoMS4VEUbSp7sNkCnHQkcHKKtXGx2HaMaaut4bK1gMUDXEHqJ4ViT3oA",
  "key2": "sqRvatadbczNFhbGVskyHsWfWSfWinCq2HDXb98UPgLs4gxLHhNaBh8qkJLzhgMg8TNurTsKntJqThXCBhAcCLS",
  "key3": "33KoiqmoYc4HfQV9xMbp5f8WX6RCMVFqNcuvdhDtzfrVB5HmFk5PjhCkWjkPVVPGvLxv7qkQXwhi3DEubH99hb6x",
  "key4": "EiBUGkdn9UgBgDXbjsfs7ME4kPTRbL2pfPHrcu8GkNtQWKombznhwzR254a5d5Gg5ZiRogjjW4CoUNX3JfVxzNS",
  "key5": "4TX8hv4aCegQLyGwSZ9GuNwhi1xcZAHURKEpEChWkmcMQMx4ALFCFchT8bQvkXGaBjCCupwjFJRmLioJWNupL3gB",
  "key6": "53aQ54a7zvzTXQQxFdRRrhihnA7T6UZLLiDui4CPm85rn1QZFP6bYbbxofc3e5RPwPFHQCpwKHc17LmoNqqDWJc5",
  "key7": "4PHPkhMqdxECP1Q2WewWvghL9qzz6cimmwKJiamVCQskQiwbpTdmSWDf9HFvHhBV4jYjvradB4PzHJLAX4MTkHxq",
  "key8": "51JxgWMNsjBBq4UbfYvZBQrsm4Di7Y7L8RE5YyU6dtmduGeLbHSFMwEqBQVQqiH7RgpLVy419pnC1G8xtEqhfv3S",
  "key9": "jR89p69KZ1c1qaanKTa8DpVgqDKUfrekA3TPkJrPZJ8vkaWFoYXwp9DrrFQm4FoS43v3AYoGG6P65dFAY4GTpuE",
  "key10": "2c9KQs3ZGCgfBViRTvwx1NmBgYGeBuSK9XH5LgM4eoqGHpZU9GVTNzHFwniCH7VUxdrRVskdazsPhSuK2uUKmUUU",
  "key11": "39b4Y8W3Sk2ovtKiTpG8p5VQ3rgZHSjVwZ4RbgjYkUSqQtLmaJa9NesULqUUVamfjExfQJxg8LoVjZfvfivt4C7T",
  "key12": "2yR4KD25WhrkJSc5ijcAot1gi9aqmiNQGp7aNk2m9ECUMudDeEyLdrrnAcSCLcp6Je3h62iFDxC3n8hGejtKK9Sz",
  "key13": "4GpeBXdcaMbPr8J1wYsLT5bfsSdj4eJkbTNjhH7ziysKafYDVu5wSkU9Qw5mwmtCCoQHZY3ywtZvacW5fQi9yZXn",
  "key14": "23eDxVHXdE4H5AZKH87uK2d5zqNET8NySBYZz6MPSmDZv5yTcnLNFxKdXv1GhBVMdKc5yhD1rAu4i2sr1Gp9Qmep",
  "key15": "3x4aQDHjsiRkivdbiqFpmwQGZiBj4AoAL9gUvPsqv6dSKdAY57nEo6ZaFevAUhc4CdjgY5oLnJVpgMKQ9WY6SsVk",
  "key16": "kmw8ZEWhqYBKZnrdQCPY5ayovqLC2fnUHmFpUuGN3HpYCkXFN91NhhWdo8z8qBTFqvijp8jnCeTa4jebThSrxGE",
  "key17": "4oUNLAnWte1rN5ASEgLLEPJQZcPSV9YfT3DTVs11yXmEzrvUJdtSnHz4MoURGMPoEns17QzbU1fZaRKG95BL2ZAq",
  "key18": "5DNdkWdnqAWeYXYPP3EqR2bLWSaN2WdbUNrG1ULyWWc1DGZZZRAnXZSjjvQmcQVzMtDkxiprpZH5aZMPwiRTQ9wX",
  "key19": "2vfArVP1Dr9wdY1HUFy8MzQ33A24Ri4xAAXD5SMTqazWgGDy8CzVutFqr3d14kdSueXSjzY6QMArNwTgx9Lf1ezb",
  "key20": "41cK5rnBLRqcnF7t6pBrpb6FQv5REqmGxQYAXPGNPy9KDWV9f6CBLgegcbm1zhiGgWGVp5MT9Dfa76sqL391MEDN",
  "key21": "2YrnP8yLatxx8XJCuaTrdZWQojaRMmq7tTyz9qRPvCSspzKPBTeytAUZt3LvW3Ti7nGPWw7JHMMVNoQdYVHfMU2L",
  "key22": "5DH3aTTx9XLiLBSPAgi4vynspLXsm632JRfKgSw2Q5mY9GTw8xEH9xvQQnWCeMYCuDfv6HDxwXQJJHZyiLqZD1xG",
  "key23": "3F8nfaWDW942H7qb3xKDvkimaRRz1HDsNhhCwQZiDZtxTP6jgnffujjAgGCoM2jxDfFZ1JmxgyyfhZJyPuyGb21G",
  "key24": "TEP7swptQ2PE8f12kQ3uCebWJQ1vCa7YAuToiSRJLEv3H5KrZQzPd84DFueP7PgyvBXkDvTQyUGJJsnKbwaYgxH",
  "key25": "5Wqnk7jzTo7t59ubpwerUCyysWpptAF3Bx7mRphaN2c5eUTBLXa6TWVAFR44vvG6Yr6LddLDfXsomYPdr58fqxg",
  "key26": "4c5ySL8S2NewrXhGEDN7hfX634TWPVkRF5248V4Xc2fUAS74THqDpx7dowKvG3pKawbZ877kqqX17Xh261BwfJ4H",
  "key27": "3FeVALKiU7RMrw6yjCEzrf9HBEGgsuzGRT7m6ZfSNJpK7XydNp3Lp7sjdewioobggBLf1NJPCLMo8zN58GYVXNbp",
  "key28": "55b2etiei97ZgTmENLsVLtZKmisi2yKFqSi5Qt2QcunL3fdy6QNvNoYDatcVUD9t21smcRtaJq89HdXYV1iWo9SK",
  "key29": "4SEdiCEVzH6Tq38NQC7UYe5WLn5NiTWp2kdoq1L1YfKmEg8KuAzWCSf7CRb5VhbYDEgs6sZu5RNAb4cSpVFRcnPW",
  "key30": "3b6TWxNrR8kYrF1f6qyDTnhCQ27ZfqBpHMmg2tvFLqaEWcdoM5tKcrzguDboeXwsgnsssFnBQAutPq2hBzAdPU8Y",
  "key31": "gX7FeuWGgJxefNhskfGYje1BLYEHU3WNXyWNTwVtBYZgGJ7uHALJwutd8V8SyhyAXx29cnddbwpWHY1obVYsbRz",
  "key32": "49eodkiXY8ye7RteEz3NRAJYu2a6piE8AYTe4gBz3FZy86u3bJfSzTVLiqTC1KFUxMX6TNgz5aDauJXbMnvQiyib",
  "key33": "5RZUi6Mr5Nz8RCrwDaYid1fFLrmsodUijttxkm4sJQMk2rpLRfpJER34UVStuxzqyVJf5gwet7rdi2ivZN84UdDL",
  "key34": "4simGpAF4p6KXsK1WRqCaRK54PNj29zoiaBVk35c4ZvCusjmecLN7GtisKGmHWtHBeZhzQnBBnqhdLCnPjYJXaGs",
  "key35": "Ych4vg3EAqZcopX2SYuePgszwu4K7Abnxy7c5PrVngnedCU4mu911UM5xizG5ZRxhA93wkUJWrYzSFtQXP2Hncg",
  "key36": "4DJvTKJ84Tg3icu8zkjjz8LtPLheNpJYwdsDzGAKFfmUWV7nFa1sLv8RbtbTkUvAXgTMH1ZsPLWTvLcvJgy5U14o",
  "key37": "2C8Jm4m5kptzsc5mZb6a8Wvhwok2VSzFxKVafSR2FDXr635wUGCxZotZz4S7dbP2twLArQtWwEthZqD3u5qMKSTV",
  "key38": "4pbT7PQqyXAs7JPRFzSPa9JpirWxDsAGFshGG63eEybGAfaBwN1oCfJwT9DWRRkSUzAcoWHaALBRjvGhVnswv2LB",
  "key39": "5RmXLmjEUzgjPSwknNKrvDu9Pz1ihk3YbD56k5QQH28niiKauvAhMA5J8sQ3TrmZVNE6hVwd1ju8H3jQRJ6WEGBX",
  "key40": "4PaWUoNbsfJcAdTyg9RJL3NCr8dKSEfSmozcmdsBUwRo662pb3uhzmbbGSYP4E2bjQG9zgViyBaatkM2hngx9uSX",
  "key41": "5JLkFCuVhWhHxjcjR9mXLtmnG86KH88j76skTSGvf8ZxNq2cEkUXoP4puzEMuC28Sqbj96MjGH7RgMtHCLvNjWV2",
  "key42": "4Bu34enKP2FKF5z5jzfMBbst8Zj1yac5tD5AyZzQmZP2xLQKqTpvzMCeKhXceAEkM3K6rbgMNMuaLJSHDv6H2yRR",
  "key43": "3ZJWEZwpcY4iPF37RYrneYS5rWauCbnxEAfzFwD4PMiwSU5XsaLYmp8K4QSCUekJGyqQbjiW48vKfz6V8eH6rR8a",
  "key44": "Xs2Hc9w8xNX6VZB9dndjaHJENhSCx4xYFxYVmzYRZazQsSSMBJ8qSyEvZcDFiEdMisSdZRbXfmbSKV3GgARasfC"
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
