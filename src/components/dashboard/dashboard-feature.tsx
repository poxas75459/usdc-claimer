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
    "5aD9bHEREUs14AHmEV9y5ixDVCeiyjJqFZe2zewnP1VpvAkiVDLENagLj9puR2HgrFzXCKQHKmWEcRgrYJFqJgN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XF1pSffqW3hR96QbhWn8Hvx5rcCnNWrMFqRacwwr7AmBE3v2r69p5FdHuCVXe5kMYTTnPEjycCzXp5ULY36G1p",
  "key1": "FWtsijV9ALTRtR814THvUujsT8NqPWJrW5vznhKoio5VBmWmbPR1k8XdsXRS7eRucLF5ArDrLXBydL48nb2C1fs",
  "key2": "2bnpVscamzAptZzfanbFT6uuuGxbLkJPVbVhKV53s5gWecGLuhR2T7P1A3zaTf8XZqEyv3HREUoFSzhL88SFpQX6",
  "key3": "25DidojLiofxh3cW6oTTzmMVwY15bmhAZjCw56cxcB6F2ivb1TsAqr4iK1622zobsrfBWhZbk4yc9E8MzHrqBYUk",
  "key4": "W8snecYWtwr6grcUMDp1zr4d4nRepBrDR76BUYwRgYsw2vczTqCSfT97HVT4nPNSZd8eX9HaCSsE95YqzxU38Mu",
  "key5": "5946ehaK6SHAVYQF6NbCBN9V1k5p3rb4LVyT9NoXrL86RKCX1s2WyHTo3PhUBMnWXzSdmmUdSUFajKayhD5Hgnr6",
  "key6": "3L9Vf9NAiwASYEQ5GhwA6TDWfY7GQGfhcya4sPA4zp2eWfhuXas1VHoh21sAL55YSB3sX7vn6CZ6VwMcAizjf7Ei",
  "key7": "3JyPeydpJ8ghQ7eowTTXweG14ByW5cYBHVTc3FKXcYjdFHxAWyLoo5pw7x793FuFUjgxM5R8SrWKgEAze5Rr7xp1",
  "key8": "32C7aJWmRTm22nBKtvpiDGjKSsqysMgUPFAsXzcJGTZWG8BgVEHcW3yaViXRxMnbZPQmktSsux6ByxiPSUajCNTY",
  "key9": "46xPk1kb6R5fLBMBPhVr9v5ug58HfJ5AAC3RKEDegDTXioVswbGKpePeaiBpkPQs37eEL3eD6UbsnJvTq2wp1tA",
  "key10": "5abddXNV2Sfb4h184NYdzzw7TYntwqAUwJVBmj3GQaFqwTEN3nKA53sDDGDNXeLMCaJBMhbfJmysF9mKNVTWy8YW",
  "key11": "4K8BbdgXf7XUexJbKyn8QnTwFqpApZ2uT9Q7YGZtCC4T2LcbbjwugGUWAdVGBZsjbnTjeyd8nTBUfpwcnezEuFyM",
  "key12": "33qzXne9LHDeeBCLEYDryULkJgL62DgGnXSwq8QEBVtcFiMeAgUi22M69YTyGUCtThyF4HiHUZWEfCrAzXjk45EP",
  "key13": "2TeamowQxiH21bPYadpFF3UfUY51sva92j1yL9ezFkQdutgfVpPqvtu2xrCe7yTQ3FWResqyfnx5ofchrcyYnm6z",
  "key14": "24cDvzygETfXBijTQq56XvW77WcDvFC5tKBd6p8DpZRg2MRZhRy3VssYS4Z3n56D5DeRtzUbpdstRJLPsG8TBEpe",
  "key15": "58Na1uUpgJKyL2Nj9k3MkUAN3Cdh4ma7xrKxF1DhrAy9kLu9FRp54ojdM6zRyDJSN6fRvsCqmzYyeVCgZjeUtjpE",
  "key16": "3oL7wWqdBP3FLW1mmanv885iqsihYmxFVdz3zay7srkN8qhNS18v8Gdshe3Mvs2phkBPgz2Ce2pmeSzkw7e61isM",
  "key17": "4SKi3BJdoGoMgZuHaecLJnzehhxwHdCzKQ7NFuBR6KStVgYZWpAEzPktp7GdRyLbkp3hu9icA9EVzXmiHr7KfjjN",
  "key18": "3f1BN9vQXqp4pM34DLMjPQp1oG53hwsyr5oWjKn4x5gzv9fP1bzvtcxRLTYcc16TVpnLbGxcCbspYDHCBiGSJaok",
  "key19": "54DDnCfeu9tQyJfmiGabPsC7FLYNmR12qqKynAVJTh4CJutARRF8XLdhdG5Jo9zpft3ub4komNLps7BhZFLxK1Yo",
  "key20": "389YywMeNaC5xAHDg2kN4Ev5Nj9pBSDBiPYtAvHiRyGghiGXhiGzZzz4BqhezfNWApNofyLTZ49rpqDLpshyascq",
  "key21": "CPS7s9EW3Mo99eHF2g7ZjqvJitq5b1g15VRfUm2ZDAzJK5PRrZDRi32EZV9ymhET2929G6EKkbZzq4UQSpGg7pd",
  "key22": "4hq9rMdMjMqfF7p9M7T9MdZLkS9mxPN4YDvwzUHknJrT6D7G2ZCfmpYQLRefBWzHxZb6s3kn1Qgc792GXavb7TT8",
  "key23": "3hBKLMyBuSXXShKVWYXWHAmtR7B8dRP8DUzmaLn2S1VwJBi9k6x22ygGyjujhbmeoTG67y3uM5WWCGc5hyBfJGMV",
  "key24": "6GL9md9mDRe67vV2cMjioLEQvQFD2fELebMa8XuXj4Xk85tYCWuJNjJBSh4fkJQHXXVchhpfUiwzE9deVqS1fYj"
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
