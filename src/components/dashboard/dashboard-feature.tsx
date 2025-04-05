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
    "5KpkhYnTTWWeEzYvVxhXkj3sGZT2nzk1wQ5Lm4zWqw4avE6cPrYJF3C4HsnEAvyRBiPQh5bPf3cu3VvxjqsHLk5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbfB7ajQvwKzJ6XtBdCesKPB8zk7EwsF7buVF67UCiAyPXfb77tCtfiRPMYKtuZ5jjFVQeTexEMzMqyjSrhy1mz",
  "key1": "4wgytVzkhK5RzYi4VbFcMT1yEe7E4EW3JK1xkigZcs62kGqHBQh4vGNP9Eq5deM8KeYU2AoU4vnJfGaYf9LH3JdH",
  "key2": "2Fo8BodVe521GtLHuTDJSWEFKie3Z79AgV3ECBRjQWdiNc2XrV1wKnep4d2GNiFaj8ghWXUESxndjx2oHFbEvZ7K",
  "key3": "4oSeQp2tVNfe7ArgTQktgeouwef9nWLntzf6PV4SFwai9N2Qk1y7jAdPiNGrhiRXJvnHsBxVUwD4DxQBopNxtujw",
  "key4": "4ieLJ6hEk9i2SjiqzuLyBgC8iEgLTXxkQo4mssaWVCHBWsKxaoxctcgGQbJtHtQMw33R7y2v5qnuLwx1sE3hdtRn",
  "key5": "2kATFMfAUDVUBHb3rEb6zsioRKdxZbuXxmNSiHCuBAqanLLarKZkRqB9bxeTNRGTHwWN6ogteAcuZfwEpazUz6Dp",
  "key6": "U3gMevEXeSViXpiWdRw6Yd4MvGqNMVHjjWBPpB1zJMi8iY1rxZGfdRnhbryNn8PbVbTFYJWcsGz591Eq6wGbmqZ",
  "key7": "3FcW6rrmtJmiZMCMsfUuHFsCzrwawwG2yQrpuarPpQtKad79RJdAjE12jHxyzNdfNUNjaXCktHFZL1qUsUaWUHke",
  "key8": "5Gc1qxznbKhjvuoSqft5PbH9Qd8X8sEzM1hBoFNW24UkJgAq8kq7CDU5R4fSVpPNwPv9NZzprAZrtJmCxqR6Za1t",
  "key9": "4LrbK23XXNZ6jw4p9G9nGBQgr3RmYUv1C6DhwjcgAf3C841KY5Ub1CAcLzMrtdQqj696uxfSnWMTGSo76enSdrCn",
  "key10": "2Jqj2E7JmfYZhWe5z1zSnggYsHV3zDAXkjfTW4pTyRFsk9KruM5p1m5L6RgKPxXv71D5tBXgtqHTXvBcDyjfNgMo",
  "key11": "3CPSFTksdanp1ynwhymvwUK79o4od4VGGPyYBmmjZbLmAynxVmS6aF3BxnA9sBtWduKBsphMyAgTcKNoVTrxWKLw",
  "key12": "5CpZ37aUszVgMi5nQ6KRw1udJGTTMJtAtcS26DVDGtfwiGR8j55qCFNwpbiwXw3VtSKZKta5ikF5R972ByeAbtuY",
  "key13": "kzoWwhpj1hsVXdGzZkWJSYR8yTRhVc36ySEJWSzmwjezdqeEjE91BzMhSit4EfG9XmdW5bnr9w9NhjLzLJgCbcE",
  "key14": "L7KRP2aTjcGNZ1MArfZKG8gyUZkfuHJw7autwwjDyqmxcwur8KSWT9cgkGycXM1euJwxUMdE8yQ7ZrVSs2bQwqB",
  "key15": "3TfkR1tKTfsTHqi9qfzFjSi6UqAUQ61oHpqK5SD1PzjxwmQXhjcPSfvXrr2yAkksEHjYzZPa1FepGY7xGPU4xX3S",
  "key16": "XtVqJeb3wczZ73fvZqrUixgdTZi52gmkqUuR4wBDBY3we3Pf975turGV8Z13GTCZUL1R4Bj5Qa8qhPv2c1yFxAG",
  "key17": "2epmVTScHtYCtLsDqu4eCopbxL4ykz4xNQytEKKqutYPGFpziNtUhRMNq2Qc9SgNKcaJF51NZjXGDbU37DLP4Jkw",
  "key18": "5Ty8PZFou8hd4gmE4aADM6RuKNs8KUYaUWzErfq7yrJWmr1jQwi4PNuksuo21kxcF1Jf24sEFTQfHysBVHeYTcji",
  "key19": "4ihG6LftMF7fCn8BTRbqqMiZne4LqLs9uU1ouXzysMTTj9yptYsNaGsVS649TcUnPVEpVzzTYptYf5ByiEvNexer",
  "key20": "XZF365VqDa7DKgpuQ9uaPaLamKQRWy2non9MTcMKKCwWzkPqz2bh7BEUY576bFNskfAKcD4gpNvCPkFPeEK5vkd",
  "key21": "3Tf2eSPtC3wUf8o1wJ9u7eNm6yX1KE9BzhH3oCBLSLTr6SeREkg18tqoSDBd8SM4MhHRiFH8xfNqaRjk4wHnuokK",
  "key22": "2wS21ChjeM4KmudaiP7EwzC7Jvvn3rhcUaRivrgKGD3QhGT3W1gysHXEyWmrj6EfvqcnidcK2caFxR8YLh37Skno",
  "key23": "355RGFLp1G33TPCrS24U3u9WmuaPLkEM6iVZvzNShVmkkoeBWwStok1d8zwzLyeJ3C2a6Pzt6CQqs5HUC1nyMdfd",
  "key24": "4pqgb2gwoLb76LRvkTz8Xatk8StFvYyMUGUvUv1JSTE28F9TuxD54gBA2CQRNcNX9ywD9q9K4HJciPVgNvwsKmsP",
  "key25": "58xamKLyc7ZCUpxpicrQLt3QiE193QXBptLBJdQwLbgbfWsEcjcjLp4ZZwvch9iyWAfRbtqqmWDYJnbtqPaG8W8J",
  "key26": "5CrBmwBPAbaAkixhoZGFxQxmk8mPCPECZD6JTJUAbLMWo7taEdqMeUYCqr41qiNKu7kGEoUmw2r3mX68bQhfckUC",
  "key27": "EQUYeTLy4doFSe5eM4BrcrUzwx5AFcwz9TrMRahJpkAnPuJutSk7HFEWe1guuNx3xfipSJhhR6EnEQJgVmWcTs1",
  "key28": "5U3QVGEUg45KC3zSmY66uPDRbMeH4aguk8znMUGMijwuT59PmkNUiSefiSNo21uiU64CWhKfhapNjgUvMWRc2C7Z",
  "key29": "2kEXNGJRnSvBYXBEZ8xLtCfwpgZ3ZaCZwMYgHhfNdNTZqXnZZNycQdEKXzKVcFFnnV56tksQg931hGNHNt1SQB5n",
  "key30": "pEKSJ1MHJV8WsFmRAoFyM3hXvHi7LAVadwwEcMwRQjsmtnSrr1SFMFAMZY5x5AB5N8H4mbFoKLXuxSmMRNnw7yY",
  "key31": "3hAZjn7HhxehfCuz6XBvwAFBRLpkQNVJAfWwPWvjJpPraEpLsMDjDEStNi4kNCizSNr4EPXCafT1dGdvfyLEGhow",
  "key32": "2QKWypfaeSoJ7oPRb3RMwPZnSWv7KFCqzru8efYiW7DCVpELmsEsPLkHJsv5718KHBqaKRmdYoTxmUchM9JRWSE4"
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
