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
    "2pBvWcxccNfPyyoG4MzyGAibSfGwtfysrNK6VEQkSfghZwHVCLHP2cjeo16SC1tuJRZrSmJza12YAMd8ntjr9wye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "py9cJakX382hmc4Ewk5EmSavMrCDMfqhfDo8m5WwWedxP8BywsgaZmNHE7ZmrySVMo28pWtLqaqwujngeGKckmb",
  "key1": "L83Rd4m5zFwuvHoPHjqXuaHFcgiRP1bjS9P7hSSaNJskaGQvBvLVDvfkPXEdJzyzsDPNMYd2xsSwAe3azr5B5gq",
  "key2": "55konDm1AG3EHMDwcYQmifti821cU6w83pjtNAGXsjX1Fqzzfv9tuuct8KGaQzewyY6zA77WEEP3V2PEnD4YaGbw",
  "key3": "2VpBbihggeXsmYQKkddWeHVjoFWiga2ZDacchdKfJUD76Jbd9tmLHb5Aix9uWiJdtndUH9eSHzgTUTCTXPUPHcog",
  "key4": "21P9oicQDvAZCfYKxVf2fDfvKxDMvChYV2AobbtXfxgpq5xvs58nW47qPUtFKFyS2ph27Mez88RREhH9v6gbwQWH",
  "key5": "5Jryhvsou7nCscwhKmLJgH9aYTZjvqbond3xw7TGbYw8Qpbac9nF7RSFxuqtncTiGysoN58mFq5giFAPWjNPB8wW",
  "key6": "569decguz8kNP2LS5MYYX8NPM1oxS5o6A6xmPgbdGiRQp6ydqdWoEDPah4i6er5gkDrqszPnY9QqLhA3mEnptpBi",
  "key7": "3ZkimBXxAVMVVDC9whH5WhSyGSB1ZDyrhjvJubiq6H3idpaBA4SkpPtQRJx9Pi4mzZzEumtWZjF6kHSPV2NhxP6A",
  "key8": "2tYVjWXqHpVZdLdNffAhXw9cMq3Lh7mBDRgXQZQ7jtqSrfCDTWN9whBAktdgWJzogLLeZTT6ZyRR3sZ6VjSx7ga9",
  "key9": "4VJGzZQNcqMVJ5expjqv4kowaHQjhCKMwrs4mmWSBjA3V4gkDoCda57iLqBJ1X99tfL8vu3xsjhuRDnWkFGVzM2Y",
  "key10": "4fzzer9RxCFzccx1HyKQXhEfT23rMeraPwhGnCAT96fSVE7MSciHkBbcCT5DdFgiw5mp2fLKQ91G3Cz5yFeggzTU",
  "key11": "3TL7Q2M423k9DABK295EtvKg9cwxV6GEhLajMV4CaauVajVmSrkbdZCqBWNbhR5a6xLRTJmv2eLCKpdxZC7YZG58",
  "key12": "4k7DAEbzAt3MJ8Lk3c66opfvd5SDXvH8Y8PX69Q4Deoncx6wVjfxPmm9TJ6fzzyum66iG1y1rJSNuCcJXtbbng8P",
  "key13": "4bGB5FuE9LStQkuMcJwZket1GuCo2ykoAnSGmdr5yuKFZihhDtUP9dozxt3gufLU5a5vdEdsVii9TLW8hDjz5E2W",
  "key14": "s6SbMReWr35tqKVidqcbYaJoKQmri1Ea8JtHgUMczy1aCnH8UWQzZpFLf8Lf2zkjJbfhQ92KvstiQ8zTmiiU317",
  "key15": "2VU5yyyWLQdsxjdGfQNon7SwTc56iX7AeyR5LDWMMQ4za2vMVyDx4V1KNQMx2jobTzTcTixBnc5dYnLsA6xiDsUX",
  "key16": "5r6vDjXzFGWqAZt9iGZPiSFX15trunvNu2kT7B3Q2RTQRDAE4Y3cYxeynQQrrFPjhgmgnHEn3LHgotNwGs3qrgHg",
  "key17": "zjtoWpqJtYPRfkv9NwkdTA71znrjkPjBoUFUtBVfmDdcs8NP1m3Mjmzt2gzzoow2Siih4xJ6cFaHVUSsTBcm31R",
  "key18": "41oK2gq6sgbNH7Y94LW3SfoqQ4THhPAg4YyJjUh3ZJessmxqKwtQw1L1nZUNA5XFMiypwEpJ2qHY78kyCUaebpp5",
  "key19": "5CYuFNqETZnmbQP87uECQxaR4UwgsVShj11S7aPitYRM5cXT5T4yKuiYCyijUQmAAnx9s9HRm6UeZFu5ymPaugVT",
  "key20": "4hHpRpgpCbAjK5zecciVaRCHpdPshjDEy56YztyJUxDxzufprXoHCQ5ZYg9R6ytZgsEPRdVTnW57HYgN4KtBKikr",
  "key21": "4qVDoAaZJsttRfBrLrUqSTQwKHJ8EcnRUxdHp1RazngqDMXPJpc2iPgZjRtZGmoJEE8JKurYdp5cZETWD8vFo1K1",
  "key22": "2QT84UEQkUnUDbBV3oiH5KyPPvZfbL5T4GzebPobhT8UXLxAyPTUuXh41iA85SNCVpYgCwsabv7Qy2uV1uRHJqJM",
  "key23": "3T8TUYzMqhRnV2pSZqo9QuUg3C7eyAiUkCA1YDEtrrcdrz8VmCNjgamV8mkXdrQncYdcwcuT9dBe3kH18A6XcWSA",
  "key24": "2Leamj8aBUxEDi1KFJZze4cYS1HySrh5ZhWBG7y8j5w2FuF9TggUpuvqYvfvRTLnvR7Srs6suBzRE3surGjzmaLk",
  "key25": "5jjrC78SejE1m86sUatXnveq7kLGTdsPGN3uwgX9pnw2zvkywRcMMLJ8payn3jV2AcsakTBLjVj61mNaLQbd8wJa",
  "key26": "vCBf3powGCcGywRm1ZX3s8dCimTa1VACFPEuvxVhXStngDA3nEY4FBQhY6EMap3T3b34zanrs9Zn6UfKUgBzPnY"
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
