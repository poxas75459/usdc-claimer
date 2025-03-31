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
    "2gPnVrxXdfB1m4KHJVXedgyQ6Hnr92EK99z9gwcMWvFoSQvMpetedMo3U918Lv7QFxJwmJzbEMY71qd9PSg36LQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvhsZ51BjqBXvsNG5zmGeePRVMfhXUwuwFHomDV5Uq4KXYn2VtqC8BH4q9AV3Ee4dk28sjWpbkukyRuc5i7xT6K",
  "key1": "5FXqyo1rFjKNEQxjSXz5SDJSM2gAe3crp6MeyPVfRsfkFWm9Sf8rnpzb6eBhkc82faJTCyMK2N1TT8XCXKwH5Lxm",
  "key2": "64d1Tik9nkxJKqeAymYw7nacFEpZqcHdu9b8LMsJXtXtRRxN4qHUEVmTk7CKBLZTv2N5kT7VnjG8VMuFP5NYCMC7",
  "key3": "4uEMtQPvbcYtB63yemkAKfpDMup55dQZZQhJRtFgBk7ugajXAkPm9xzXuCsXYw1ZymdjhMB9V42roR1ringnLgFf",
  "key4": "bvyezZayamFTjGFVi7LkDqWgwk3MSyTL1vaEEshgJqiRGRweeNxjj9eQpYfwfDPvowSPRM9pLctfnCh9hs84vqf",
  "key5": "2WqxZ7t8fjtYoud3xQGNg32jBnoybc5AMo6ppU2oVn4biAZwDnd2myruB9PS541Viua2xnA5J6KqyC31YS3241vL",
  "key6": "4TeZVc5NvkRLQ5rZsiKDWmLU8hRANikZMWzXbV3smzqBXhnt4vsTK47aSpQPUpGe1tmoFNkyiJPWcuogAMHMFwPd",
  "key7": "5mk9J8JjXVfYCndYKN5CVwE3rHCMBk78ac2XhHZ7suoEnfpFnhM5pRet7gGnRpASCYMK1fDvofd12qkXwcJyJ29L",
  "key8": "5HpJUfrbyvfqV871dbRP87Wgh5dKij5L18E5yt1UdzzY2sod3AdLLSoHffKkk4jeVqMPW7yG73voyJXBuFaLR62K",
  "key9": "5JYQvGfQuzWMWcbhPRgz7yJcUGWe6MYA3PmUMj3NfraCvaiTzrpd8B1B6H7z9UgAJYzwFuzF7horfq3eqc7LB9kC",
  "key10": "31w7fuuzCZrk4RxjkMUXxzUk6RUzCkkqQmn2F9zAex1k7KprGj55tn7RpGBmCFjG6hdn9DHVR9CfinGPuphkDJYA",
  "key11": "5QJSNqhkvpzHF8nwFmoyBjBNb94PoSPQLKSn3y4bgSEBGDFSHAZLGqg1bAcxubYuNXsyCvA1gBPmvDKf7KqCM2zs",
  "key12": "4jqM5epmFTuj8asqNZk1JnDdL9eYUnnfPNJsja9ZUYVmh7p5CSUQ3ZSJ1bQFEiLsG97su6QWFfUhH8XHbjzT7Lqj",
  "key13": "5zvyCBBj7sjyczn5drm6W7sPohpByZEe8JgMKuAgVSPsvuCyowTLx5GcXstJvS4zDq8GTAvrFcmYbs7Eu1pWYY2x",
  "key14": "jw1Tvg2ZXTEEc3VxV8u3Riv3iyun18pq298tK2hhur9Zp5rsBxHbxkvjDW3NPdqGLFNynioqgZJAki3tX5uJFfp",
  "key15": "2TMxMwQbXHiRyczqkJ7S19xSmb2g5HA54coPG6BA5RoKNmkw3vmZbfFgn5eSSk7xkCPZzi8XJTECbW23MbL6qs9n",
  "key16": "5XTsPtD55rUNUCy9pd7VqdPf6adRkePgtbZ98mtsTZkYk7B5N5n1X5RTQT2MFT3Kkons3DPH9rR4GAqxcbJ6moGp",
  "key17": "3ar2i3fKznyWBRBkPweT843YK48zThwU4SjMzMWsWgp7b8ZKaDnSofDgYTRvozkWGtN1t4ipziPnGbWomJcsa4SF",
  "key18": "5QqKMBF4nLwCg5xz9asQFGeXyJSkKK868Rda3pbGVggiQfT3vVBU2PLA2GDZ72FDFqtgzXMA6acK1mXNcyUUxz9p",
  "key19": "4brT6xpsXruHr1ZKu3XebVUSU8wDPZtFwpRXd5avdgwwCvx7WH1tPySd3u84o6L2kyUqVf6G3q2UMsQrhn7Z2uQ5",
  "key20": "56KHPcXYjY72XSCm4qNDAEQJXDJaNPStvBqmh5NbBCp3rHYM5tkcueXtGPtZxvXynwWLP7kTzpRnt8najmC59LBa",
  "key21": "3mXryzTJLYpD1mxBCA3hJGcfsY6RnK9S49N4SRvwvBH4YZDTdLQKngQktQodjjAZWpv4TAtSi82NZyEWWomk7E5L",
  "key22": "5HdW6VGw3fQjmgZSzXGDamno1o3s3r5X7TucsCh1nobvsic4ypg8UigA4tNQBSqkEoDvXsh1cGoiZ39fr1KAPzE9",
  "key23": "4t8Ud2uqcUsjWfzJypkJNhStqamZeC6j3fpUhocqMQt7dRGpyfFB6z4BA8mNa2Nh6dwDyb4YrCHTkpPX8PYFKTKS",
  "key24": "5WQG872QxgESwh72QmV9CZKSPGjoY3kEfsjoPYSMMKEwSAZKcqAZTumadGtMv7TuTBjvHHJVdRpKiLaUaCdggfoU",
  "key25": "5YRJHUikzuqyb6Cc42vV8ZeMsKDUks3Y1rQjmWThKAFMEDK4Q3bp4oqjPjZ6o2fazWv9PeTAPpdWVgGE89dbRy9X",
  "key26": "5bERXDv1t832MFZyppFV9waeZYtEX7TjTa36pzHx1PKj44tg7SJBRg3gt3b7h1Q943GHsBp3Vfv7PHaRDBbxA3WD",
  "key27": "3U9EoRxJj5nbEtfM4DTqPeCr69AzHsxzLHp4a8xtb98oBmbTkodaMYq1ADAsgCPfe773sWqRwdoRqu6HXtoXbKDt",
  "key28": "2FZt29Yh5HGAGrN8BKdMW64rkp73Lv3D3L8jFfk8WP8Qk9cMcrucW6296umVRwHBxuYf4PSL4aPmV7Xgc9mDyDRF",
  "key29": "49DhhwykKXwBjtTTPMQsu2UAoCRP415x3bGxb9LjKd4MTQhH8HYJ291RzM9YvNacWHAUFCCtymHuSzGAYiN8vVnt",
  "key30": "nkAKPGKfrsq1YrBXS8AH6XfEYzAMHxX6Es8sYbiMqGW8wqJLiKzxbSAjG5PzQZcLsK41PvrLS5ESbg6qkekQG2q",
  "key31": "5msy7ezjqA56AmhpTmz8ChXsL7V6xcd6VryGVkZfMZqyZdbmQXco45e5435EGh4Rw9Qf2AVnoLHeYTpUntFaCPdD",
  "key32": "4yDk3wqztRT64MbR2W1nTJLSrgY3i7KwZtWbQGRBJQsFUpJoW9bQxC7JDKe1HQdkkTRmduyu4wKeHiu5xzNtfRbP",
  "key33": "uDgbfjwSvbhThdSSWF3iL2UX7mjQ47pUckM4dwXygwfrUXrkUYWpfKa88EfFAXaH8aFjKWwj6YspVd4tduTY2pG",
  "key34": "5cemBupSb4civEbQSGnkDUYnMCpvYJ18wY9r3MHvvmwgdHenT1avzu8csRSSgZKS6anAup3MhzKJbk9UxoWEWd4r",
  "key35": "2H8eDF6apd85kAxgfezUPSy74DYqVfjt7MJp96MYRKwES3txE3Bv5viARW1YjC61NARC6VAyoDiwk2ad2C4eCxzk",
  "key36": "2Kj2TKd5KtGTJ1pkYFf1GEDyaXDUE8bvXhq94m7U9LmujrgDuoTxTQGHFuPaKLnWQML3ZmaLMvQVrPD1MNPygJtK",
  "key37": "4Hjfkpw5eZJusDDBrPbarmFJVhLuLNZDzAMKga2pPs77t83anNctQk8LXzGpMxoRY8fHNm39xJrFjU8MNf6hzMQL",
  "key38": "2ybXVgksqtgijTFS8qoe6S5krHhdWXMiV5yUooNZvyFvxsB4Su9Wx1VBY9vZTJUnu4mMgWZRgpJtCaXoJ88VHaTM",
  "key39": "2wwaD3oLRKUFK96MnTRiJ2ukzT3tbki81ZuSb3cWwrLvWMyJvpHqvRPV8v9GA7Sm9Eh7Vgwv684uxudHtTG26XQa",
  "key40": "4vYBkNPauaSj81M27iyr13nUy8Tp6LqLge1ScRkzcf1iGJj2dM7Z1o6L6ePgKza9nRMZfKinUpSXpCe5eVabBCPm",
  "key41": "owKk6DczEiSkeAeGTMMeWmij43qw3dRNdXyHXSvMQNzaynr7Zpo3pKrTG5n3fktGk7rtYN5E2K5zG9TXSD44XPs",
  "key42": "8mDHEdzyt7tFadExLfP1vzrFoP9Koe1N4w4kQJXGo6VfYnfx4YY8Ns1dMWXjsYfyhbCueRT2RVmrKkA2E8NgpRi"
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
