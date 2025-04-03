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
    "4Xp3XB1T28vAmvThWCQDSwVHtsCjfaimbkWPLuviqBuqom3xQNvZSFVa1vvXtRueHj49MnHA7sAo3XPv4DMLsyk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3UWJKcLYD3BhnJuu1uzTsgEsu6cjbKUpyJyKxbPP5GJ6wSLLAtQbXvT1qKU5j8KAymTW8MnMsRaffyF25dZAoq",
  "key1": "64F1xAdVVZ9m4pFCXrjkVMqXRiGzVKPRZwjesaM8oUPxHrTKyyXGYfbYm8jRfLyXBsaxfjzsNeJgaS5FhuGhFZvu",
  "key2": "28TFv1M61CbCgLQZS5RZfvHUShBRNgs2CdU5EFhdcZrSxV3BqXyJjhUaRk3b4g2uj1JT89dGQcjybn68vj8vWtLd",
  "key3": "2V3WAVZTjkjmYBoj94Dv86Tj7Au5Ht33cdW3DQrM1UHRHEuTzfjZEK4fBk4iHdH5Z6TkUQwXauG3tytmasa1v1Qk",
  "key4": "3QFXHT43BQeaQ48Uzc9Xr3v54HPuqDnYWqCkGXc9RnpgLB6REgezk2r9wJ854ichnL5oSHxEiHwttU8gWjEnX5fP",
  "key5": "3Mcg79oFmayrmhNiqG9LEU6qXFgS2ahGnfRmCmg5nLhnKPft7HWubqfy5vj5T2HXGjmyvHu3oRQ1Du6hqucUPz9h",
  "key6": "9Mp5my9GpFBxwAvN7HLfRXr4df5h5JTjj9abPBnFrFbnvmRbD4ixbk6CesnMxAoJ9YZsB7cx7vhnQiuamZ63EFp",
  "key7": "61cboaKiCqq1rL44bKx6M9qDqHGmLqMXpviP2wHaxwWuFYvdFgbMnGWsFhyyVuH34UihaP2WUDRCVxBGehz6uk7T",
  "key8": "saWhb5JpKsR5gtU6kjSES87rsYwWR4sBkE7uiELdCXfY1YG4VNahzJHi5SX5u9zLg39UGuyU6aAwgWQATPBQw5q",
  "key9": "53AP5M8GZg4QGheVGZHtzRPGqRE8HxoqsABesmNUJvnhaKPG6a12gPjZ5Syg7G9H1HuTZewt9KGbJqMhKxCHCSm3",
  "key10": "58oxDdu5hcUd9WiwfscaqnfA2KMbQ2qMdKU63DEVxavKx5McQKXNfNiwzGwNvxNicwyLGeBw7HEwUfmP1PXqoyGB",
  "key11": "2rWHmPhsLGDhPSJbuco4ikD4yN1d4my2QPqcW3S4skirgCQqcNuBuHkcJDerZVLK5AM2XtYDKXcd4QNNWM8AWSt6",
  "key12": "3coERaRMp1aksJRCGUW7uigpqAq9LuhnewLQ4y2htaKbjRy2qUCWRmM7MAXUchqcW6kVcaUDVF9YprxSzrmVjMGX",
  "key13": "GgqYu11NPwcEYW7bpdjJEAmEpMn7heQpTYqQVqtr9X4VhdCKmyaJzop8ae2C8h2NhEJzT5aY1pFZRxHCHxKrk7P",
  "key14": "wZWfmiJ7YoQRQNkn5nUqrcLYN2iLXVHQzDnW4jA2fJ3BpCDoXN6jbA3Ux8kXwyQ4hrqXyPrnLpZHTcYd6sp596K",
  "key15": "4HJ6kJxkrd6sM7Tu2EGXyg8VXc9APytXYbVc2XwP2c3dVCV4gRjD1ZqkAhx4k2w1xdLYceYfdaR6RVS2jYfUn1Ma",
  "key16": "4BMvnPtbAUTchgrk28MH8f3ov8fPq2VP4YdqLHHtvbq2sy1PNiroZyZsni7fSV4CYbWnqT6ZJxQNdUw68cBdi6Bk",
  "key17": "5KiY9sJLaM8k7cCqJTbE5tZEwUwsgjPEfog1qevjgWvZMJ2w5NuYVJrT7Yu7rhTxzsVUgxVVyN9NxKLK2K1zoGoM",
  "key18": "3jmeddzXDZeynXjAqeiYqpDaesrNs6rqzJVwkp8854UxNhWEF3y1iN9ivzBNKV9UGzEK5vMZzyytSjAJtibog936",
  "key19": "AV8ew8WAUgpKJMfo7EnH29A16vM9tjcuAer44bTb1D1BJLtqL2HEpWbA5WViioa9RVkKrh4Wmiq9CXTWensT31N",
  "key20": "66rbqmBaM2nBvVwEWVnSNBeabjeiYmPqwBeRnVsLAGQ8UiZK44bskdCx3S44ehu5LepJeNPGLv3VNooQ8EzzzPpZ",
  "key21": "odiFq9wMBmGbUucKeCQYgZhvGSXjgX98x6A1xe7bYxTm9TvWq9MJ1vFc3QEHuKgv9RER7GsiLsSJcbinSb8VMci",
  "key22": "3XRytBCRkxWwDCZhuRaBSB95qchaxKztwMvoD6QSjYLcE3d259mwDhiRHcYtkmfw36KUDCPMEp1jgysLnLkCaRRF",
  "key23": "8Lwim6EDGEkyZnYS1EwDGvbiN7MGHTKjJKghnTRks5xv6NL6Kc5t8k9uTdGSMmwNqkFkJ6kDqPkE8k8TS68MSMf",
  "key24": "2XxoVSV8sog3NtS4zuW12N9uYDRiyKTL3qTG7spx36F8nufht65VL2WMsuHxweGHcvGmSgvuaprvDRtvZaEcFNyq",
  "key25": "3s9hoBYmmzx5x3jDDqR644Qx3x93J9dYbWautn4ykRFEC6rjUbA4g5zmv2XudkrvKLyBo2u2xjDXrkdnLoc2ECdk",
  "key26": "eSfPUmpgRR1rTeYaNErSdj978ijvQqdcsgZN7RuVKRFTWAeUroNuMmtt8dXg2kJRDENcnjdoZ5kFuC4urXt7HCg",
  "key27": "2rWxdkcfyCDSRKjqwmYsCzXo7cG3i6u4HLFU1iQ4YkNz3KBTHwXdcMbLTDPD3TZm2SN6Yqw1xan2uM2AkgvYzhky",
  "key28": "bpY11A4e2eHFUpeQVSTp3zuAFDYNcTDPWywHkjtoR9eqax6rH8XJUPhbuxcv7QE3xBMwXCdv9VqmgUHH6rKUTyx",
  "key29": "5tZPnsJSRjEqSgaZkVnmG74hEaEuaSX49hPdPRSMcAZt5h4qhjMf1ye5moJVLTvRZjruwEB1pnUGgKyTU4STGvsN",
  "key30": "rcHCnHWsFJ7w6APqdEtZmTUAQqbopyrgvLgTsNHP9SxLcN8FezoacbkQRPTcTxZuEq8Yr5e8yks4uS6thxN56E6",
  "key31": "2fMT8wsiDhtaSNn5kCiWmiwDm9ZuSjpgrLqKrdZ3K9b9pSZdXfq4dGDBMzaJz72tjQBSCWbgfHTvYmerbjBfWVLk",
  "key32": "4i2J7T5GXVR9CnBvJLjATM1AXkHBmViBdkAxg3nKvXnDqa1mugvEWtMCSsADeXJgHgHBHU7Uev3NJ38iVteWXcGC",
  "key33": "2wwsfStb6wmVHJ2Cs2cBPhVAuU5HUYornGasdziNCkWkxyzzN9ftfKbJxpJ5TqPsvWaEYka1rS2YU9vkh2QzzY7B",
  "key34": "5RxzC8JWWoBHqMB5v4Qxfp9ozCmfzQHBAckP7UrGtEkyf4H2rgU2KAMHBcTagekSE7YCFjuoQD57Ks4q187iMLFq",
  "key35": "4TBMDzxqQATYitpiY6r4QNnPPjhN8Pfmxd6qNCh5Wxj6M7Cbx4r9LAEJJGsNQUjEUBAjsV8RC8yUPHNARFjV3z5G",
  "key36": "263eVC5kM8Z7eixMsXFhK5BixHdRmVjRGA7KxHThJjQVQYz39GtF8uxLt1pE9kZgjYrTWWKf9A5LLP1h2WroyaE9",
  "key37": "3Fam6YQgXhKsttafHV1uER7hKnuiuLMr6dUe89AmJGJMCHfTznYzuFmpjQQuCoA4pce4AmQKQNym5n4wwKoUXfVX",
  "key38": "34eqxo1H1LVpzEzDP3GeMXCPAdsKoHT7eGNsr3K6vohMagFZ5PbRz3TXzoNpsEVw8UEtPzLKNxXXpsB7tpuMk6YZ",
  "key39": "65Xvokppz94d7QFBSQeJ2gP4Cqozeda3zNVEkhqMiGYd6MSHLdPBCDW2dFKNtT2hK8CokhmkXGxqisUSnR5ZC76L",
  "key40": "2SRX4c7sSBy3D2Mq8GuSJQPAiV8yQwnZuE49c65c96ZM7nJmgtZCLU5JBaavXxcmKK9YPdyh1BsGHp5fNBrRZz9D",
  "key41": "XZpQPfKgj4RHs6U4QzMUYE6AQaEeLCnyzsPc87JxVQNbaahKJCmBJ45NuopDnfPDve6Q9Y7U4AAAuX7rUGXDXi2",
  "key42": "5893yJGvrN5rs9aL9p4Lc5rpqF7oL1Xmdk7VXH121cH2HT3JVb3UH9xfLnKJtRbGqrKPbAV8k5mbKmS5pRKqVZW6",
  "key43": "2d7dx9AaayTNFYcnhqJvAEgmT3QdiVvQRxcaKhNvH2WaR3ScweEjAU7scyGZJYypzvLcmMYuwC99FKbbFffauy1V"
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
