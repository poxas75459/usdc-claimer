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
    "4mcLd3TcPXiTVBgpETgc6Vocpb636sUkCroSd33SoCSYvoHK3KhLWg6N85CZ5ZyxDwZ9fp8KusJgWVU4qxwa1xTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPMhRJFWc5YbsUBsVMXTA18s2jQcF6EmUMqE18LHyHwp4DCEgeHKBmD2wo4Q4MmwufubhXoVR1XJPfYSfDKrxXy",
  "key1": "4g3qzcADbzZi7EqPmayhfJXHbEAqMr4Mry3kNCaaofV3vKcaN8ZZVegYuWuk6SGRHxjNRrTP8JH2wSEdkcz659kd",
  "key2": "3mSYBtN625AVnDEiawuUuL2cAVUJ9NcKPwXjYP1Q8QBnW475uHQMhKhGASVqnP9GL93mPw3rWU3Ryjb77Q1qsDsr",
  "key3": "4AnQM1qc7KTcWZzsasZKBhqiu64ZzyJShfwcHiRs9D2exdvLnSWkUQrMLdSVcrVjcK1YQ4XZZcsW9rtYfBLotxB2",
  "key4": "KsPbnenYudTZ4PTpb9gh3HDQmoRbTrRNKmyuNgSF7mCeiZP3sZvZb8yJV5TVsTF4T3AA7LDXimczSefKeEBbV9f",
  "key5": "5JVJSRRfJq8ojfME1EJKaDvoJCfd3X9tr2Smu3RSsVsPvkTorNz9XpqyFX56ooJ16rkvoMhyReedM4Le4Sx4x2Yy",
  "key6": "emMnhLgHjTx9CqJgms9qYKzZDvfMhB8sWcRuXU6v5GgZZRtXCJuCqK5AqrRYKfo4JyPkKKR9icaTV8qV58GXdfG",
  "key7": "yuodHe7WzoKfqPMUaunuxAXFnbUXB6wSU8pCU3zYJhHPwQuf2hYDrnq8SdJg57FN1PGHgT1Sxbccvno9tj9JPt3",
  "key8": "Cc85UnB85a7VRvJkW8oyEZubmcznNbBSgKWbete8bQGNu3H95R9HKywhmBEBdd6jrT4sCFeh1SvLdJsPZdsFZDH",
  "key9": "5fw9CuMcBePZXZNxicrzx7VwkiW8mG9eMYnC45z22rzzADNkiHPPqi4jys9CrtTEG16hmjk7eER7tgNoyUH6T5hy",
  "key10": "5RSSvbdFHtr8LUvMAd4kSmVNATReo5jDpw7cgfvXRAtxK9VkiXwfnKTG3weAemhg1dRYWDyRW1EW3UicT3dJLehi",
  "key11": "3f9HWbHDGYhd2UkcTx7Ghqk1WcwnafbqnXPZ2ffe3CTKCAbBqQRtYVaawiMwKt7e5kJVwqQmA2hBzY9bqfsGnoFC",
  "key12": "39SHd5Wg7Kk6jCyxeLihT7tFSFBuNVssbypDjTeN4y3EpNJ8dtRwCFRyeJYaCq5WqumvwmoRvesK7mz949YdgJ8h",
  "key13": "62zobcMp5xgjuz1XtRKthzUSv1VSUGbPmisws7qxvMRDgJcZ7ohCWFEV17VnUXjDCf66pDKm4pVJRqmtGojwt3Cp",
  "key14": "2A5f3qt5Xx4YoLVkXreo7MLcYT5zBFJhrRpSnix1BWNNAvJvD8L6d53FMFPsmVhAwou6SF9axetNCXjV8S8kHgLp",
  "key15": "iSU3cWXawnUV79K1Ej2nDjn69F8gCnqy697vvbUzMP83spfbZ7e8oCDy7VsvuADkA1YWP9VPYyK7rYk4aYZaoYE",
  "key16": "5xg8YP29YL2TXubT2pvnVhRBJEVjmMRawXqT8UhQbCVeHh1cfQP9FVzGXnWKmuYqxjHFt63zshoW8GQjsF7cVaAv",
  "key17": "5wj5DTpk8gZ3SYZhEh5AgqVLGPoEnV3qscWHiBQZU9x9Sxe5A57v86AtYuenvPkxi5NmHtQ17R3ASHWM7qNKJ412",
  "key18": "2BHKBQT24c9dqTm6xTvn1dWCa6Pnd4JwDD9zYfD8Ft1j75U2QQ2gvUSiKc8FKE7cQZAWE98rV3W6K6cYxKcFhjrV",
  "key19": "3CqzPpQrz8xNXFFWsVoE91sy1DYpniAs3vHThWKwD7oxeHRghUBGyYVCcmS3afr8tCpoGpsRock6Z1yVFTqMGZGW",
  "key20": "2ZiouLKcQUJcdTyYb3Q9YZG3djPb6yUUv9mWdpGXboaWuEbEodEnPdJByCZ717bDT4YTMcCzfCDBZS1fa7DvbNje",
  "key21": "33Hnth7XveX5kwuxiV3BzHaai8cdbxU175itW7Y7Wa2rARKTnHb5p7ypvXvmwFtMmqHe7nuWuMN1XWpg69q7ASUA",
  "key22": "NbTK65knTPQWXWoN19TmB4Bqr846vW6ggA9tTPW8aEqkoiTaQnZPh23PpCBDpLUZ8yaWFp9zKXskisg5UhG9FQj",
  "key23": "fvxKB5xhaZJiTi39QyXgVCu7WaCvt6rTjLxttjacnQjTBHDCEZvp469u2gVy4XVEdDRByBrGKSSHPrUF1dVy4bD",
  "key24": "5gqq978QiUaqdnrpfqfk5kvkg3WjB5Qi47qAsAgTYTKRGmJGnVF7gTbT92bhh5vzU5fQdqCo4v4cU8CSZkSaNzcV",
  "key25": "vzkncaFgkqLr16L7frRU4kyzfWAiNHJZQTQg7p2CtzXRrLyiN4upMKVHNdh3SPaDgkF3wvW26PYzcBhjc9svmyL",
  "key26": "5oVvKEAcziDusd3zLapTiVA8Zond8A4r3NHY1d6EATdJnLyU4N3HASgXKiajEER91g2R8Z4JLp3LVqoajeK7FTBn",
  "key27": "3vGcRLeYCm5n6zP3quftswQ6cBP2GoHDhQW3HkjZzj6PdC6ZW3FS4sZ3wAdnuYHijxB46MnL7rEjNP5AnDreyDYv",
  "key28": "3pWnL5oaLLj2aEZwsFGFLALPL7xMxNShtLV2TVcGhkWfK44dWBHRZW4w8mxYi5vdEy81BWSpCcSnwdsmyHAynMty",
  "key29": "2CRka5h2DCmZG7Bob9JWzNutH8LJ9bdECgVvXU9my2EoNDJySC5JMHJooX47SxWJwAV2f8u9WdNVovDuQFv5NAos",
  "key30": "5Hx2mxjyJpPTDGe9FusapBYnBcv6GKC6oDxMbYdG6s3Lryc5FzfZDEHrbodU1mpg3x7RToJ5HEjBMfd4oKj6G4QE",
  "key31": "4EftYVoru4mHXQw88ZNvyTr5ANCr6xQKKsByJGXZeawWHx8dVWWkSd7N2FYsY1KDwHg1SHf9gCJHX5D3vxABqNAD",
  "key32": "631Wp6f5PeyQftaabLVzRAnmCa47vxMs82HaXTm872Xw5ybjYNmZuiXDVds2PDnfcKi4D6mZtEP7c9Uyu6eib8gk",
  "key33": "2ptaep1sW4jPbxM2kMXCy7bRvyH4NnhzZDxRJ5RNzu5TQm81hhbZwXjw4evGajLoqM3DWgd69BptUYvfJAkC8smh",
  "key34": "3KdX7ivNjwVS8jz4gSPLsEju3TXnyPYcMPq9uAgEFKxRJgMwm6GcRhpRjSs3n3u144xMgwcFLDGpQxxqVvu2uQJ8",
  "key35": "kgcJX9cFQ52D6Uimu4Ng8r8QecxSuBDj8V6yTM4ALP3gKEEgfhxZvBmKXULGtS445u6y5D74uws6MHorb9CMbd2",
  "key36": "AMuHTqPNGz2rVoy1BtNQZRd4tBinKeXjV8KzegPXhGdEC5XLidTFMwp6y4ac1WZUyykpgsJDTGvEknecEBYbHvN",
  "key37": "3HFkjKAg9DckzF6xg4YgafoA3gg51WfNCJKLrxeKFX3zWyBb8bgyCuaguDFKVL8rX3JQ4SEV7B9ftkS8PcgU96wB",
  "key38": "22e2f3Vi2FdMtVQPBg3siB8iNGMpye48dJwBYLZ2ka6jHMuC7DBfmZ9oG4PnvSrZmuSwyeWLH97mUTtoYPa5Nj9e",
  "key39": "gmChud4tE8xkLRLwwjPGwNrJBBhfnc9BccwhXShwSgNvwEFCsdAmLmPEeb7Xj9iGGNU3AxWVEXcgJRuykCgwjdM"
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
