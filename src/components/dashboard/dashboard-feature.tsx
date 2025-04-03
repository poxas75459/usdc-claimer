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
    "3CKygnKRwQfhZyyPccEgZzifgdrEk2pMiXThRiZMdveqfhnS8NjzLN5wNG5xAE5tamNRuSztxpPuFggUXac3d6vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYpriAtJtm2ox2469Ju6b3wuvuK777YL7zc89Bm12bFCPtzDzYZyP8eroPmZXHWoM9TS1iqgURPPRsAMo93Xukj",
  "key1": "5arth2vYYcW31mvmE9xsDWNC4iLCziucDoDr2Lx5CfPb5amxc9fMQNP3C347rw9p9zKW4SGFEeouTx69hp4eGEkM",
  "key2": "hFP38pEUkHCA6AXRPdNKdE7411W3PRrUjK2bXdEHYHDXFrCSqRXYzqqkyanz3A2PF47bmBmVvWtPJYaQFRcJAhi",
  "key3": "5o2d4Qy4Vrq4oFR3D7LVGMFB43UiyyrYJLvr9fe2q2CJqErxFpNCbM9dq8YMQZRdtmzgYHn4TGyJy96GkrgfVzLc",
  "key4": "5jNE4oCpc32XEFkMABBU29599QByGXVe8jgHSQi5F6ytgpz7X8WHvK3YqasUQh2EJMDU7jAj8keUiMhHymF2L96c",
  "key5": "5rDUdYDfx6yR7FWkJ3jDtEHbgRE8UGgr5CqJ7p9PB59Po6vwV4x7m5Kn2Pm8EBeB3rRvbCRbMrRhbajsuhohh4MC",
  "key6": "Y6kN9kcDQkbXg35cYZA5xC2camUg1ufT4DLbHJxfB64QPb4rBVRCs818hC6NznVXFpjLNt9gqpudMCsMicrSSVf",
  "key7": "5mLGRk5NWLbcWAqWdqSWKBSTnuC3ERXgWBRa2W4287ho6gzKKKpisNzXxJv3uNjNXArXeM2hsDS9PVQyCM5NuPFh",
  "key8": "5MCZ5oDxp3xLjtQGJApeQSWDeDxUwVVzRZLffQPYozouB85o3WgCfeQ7uQF26ryx5wyv1PKBNmx66HmBQbN3hAgJ",
  "key9": "cq8LonX4GbbrTRHzYkTL4g6Nj6iPWgVQonQ4TmChYNAqVKSRh8kPbaFJnPP4nY1kdXJPDjZyiEbekR3R8Cdnsvz",
  "key10": "3h31ADcArbfjZCJxm8eUZmm3pTS1TyykDqXRCdyya4CwCf79pFMxpTyRauiVhAKr9NbmwdpiLgQrsacHcXfjDePj",
  "key11": "4n77ugSssh1EY57pYPZ8gkN8ztn4r48GbszCFv8vkScTGx5y2q16in4j4DFR7DUq3xmBt9JV9LtzWUNAX2v2PJ1g",
  "key12": "2Rvw1nMdCQYb7BUYZgYs9jVa1ur3bGRDXNsG9dqFzmfoXhqv8oogsykMvtGAMfdKqar56MdDfgnNuxo7jKfh8XrB",
  "key13": "MViLPbc9LYDN5ZGBgZLfZUdivwuPrJgVr2XSopETw7tX6885axNEXt6CcFEeNhnZ7wsN9SZe7815SurPisz53dA",
  "key14": "4Qudnj4a1cSMHkxyDf2cbd1nhQbnxvFZXGnzFfDpFtZ5xmBWKr2Ui8pfaDto5eTnptq6nexbsdd4SsCqmJTmjCq",
  "key15": "274anSDL27ex3wbki6WeRacftuHJ9KuCFvywocYkzyno7gdgCDcVyniqQCfinnbTFgoBmNCx4v7Bs1P1Quy5nqbM",
  "key16": "5aKHhU433LLLoTMUdJ36rDaoZYgoCoHfLRsFoAWAg1AJ7LVVFK9qEFDySe1n4ywPSFtKKBCqjL2AmwFqLqP9Vzxi",
  "key17": "48QbC2fccNaat7Hj84Z2rM8bySh9P6xq2C6ppurKekT5EExBGRLUFBsbX3Y1xf4abcUzYU4tgiHxidgJWB3KZP74",
  "key18": "5tYbpNgXFqiJvBBPgY1ZZ9AoQa8wcqkwPgCeYT83xiv4cv1qa5byfXAyKswY38ejousdPESKgesUBoLWbWyNcgtY",
  "key19": "4bqfiC7ddVpmtZQoBtcvQcdj54CNt8ZDriPkHzpjFmZCr7JR7wC1WwJupqKApdpbKLYen12Srj3NiUFz6sUttrf9",
  "key20": "3yXRWHE8BSYbUxm8kedVT8yJ2kvAqCE1huxQR6jco97ZcCWvubyMC3gw3xepLB8x3drPyC2afcWAU3j9r5ud6Pr2",
  "key21": "FC6DW5zt8TG4bei6zugfbspn9ovYkcNRgcMD9jPRLsS7hBtgWfZ93SjREG1FGb9STSNU8afYce8dQH5uwAqkLHS",
  "key22": "3PL4j7yQwPx17cTURJdaLcgQtbZL116vAFm5CDHQ5vhC9zcaaXKopEqoy3bZJqxnbvkuzLKbqRwB5AiEvQnBMZtw",
  "key23": "2Md4kMCLFYceBA3wqRfirThrdBoKHpp85HyeXjLWSauGSTUE9QxC5GxSja85cgKXzoS3ifu8uznHQWExhjMNbNYx",
  "key24": "2Y7Ka7W6F7sGiFtYcPbqs48Q2LB7Gtg5jh5Z2TcoWCPmVKRndDULKeCAGmb5arq2zLG5KQE78oqCt1FcdSVK1ViZ",
  "key25": "4XSUUNguSGRwr8iFdok1Y1S6R4zydghxuHqNxe7TngSJ7mMkqCFXzHb5GPLVi3AhZkQQssW7wme4BrhWF7wbnXjT",
  "key26": "58rNaRYi83WBL1fmyXjNJk4qCxV4Qevg4cD8hbMbdxqTHT5NW67i4b7GFbqomZKH9Z4k2MRZTx96w4X35fUYDKP7",
  "key27": "5hK8Uvn7Z5Urb8s2xCibnMkb23n5qKoGSFfvQvy8v73Mb9ccRJZnbAV5hTFvqPUpVaQRCdoXM2zyPgKJVKF3Fy6K",
  "key28": "4iwCaG4DWRs5EWfZJzbXyUBpCmoWLtfXwETSTSjS1rag2WrocFPVkFAEt4wL3S41BmwBZJnvV7qPYzzhNAqyom9K",
  "key29": "56KYK23fi2Py1g8U7N8NGN5tFzNhyjKTNCouNgzcVjpVrNWzZBMadbpUEb457sJXV11AodjgDng3TZ8XEqr3HJSu",
  "key30": "5e4X2puPojUS7ypkokfFzXAzM9ve2AsJMRmSLVc8RANdfsnf7KdutHgqFLFcKgebo5CJPmQxyJrKnpaZTuyUU7P1",
  "key31": "3rrnJgi5VzyfzFHbYRWyFU1tLpxqVAmci6KGdzbNE59c1SdCXwohSSQRQHxzi2aZzeU6TyNCgjeLSmk8opdZ28mw",
  "key32": "58os9EbQbUjYoFMvTyfJD9qcrqUv8w51z7fzB5Vp4UTCxXJ7DtCAnmQoN8CNVyYkRi3HswzEfeUtJ7AFFfztniuK",
  "key33": "3c7dX3Fjdtjfmbx5xbmmH9k7zMJmniT2qFrq6d4a5TzadZfjfUZjoSpqQur5q4Ru1BNXgDDgRoT5Lj6oTfwE1RHY",
  "key34": "CGbqs4pju4KCVGVf8CvZPNojCysappDTZbrrAFtYw2XFkE7yZjiEWDaTjiPDremabub4xgRkmRXJ6pub6iWeqta",
  "key35": "3RL9epXw8KKPddpKRbpJrMAd3na5nZPvVRs9fazmUq3ZoYKKuLaJKNyFcFsR5FZCvijiyFs3rE6kNVYinRcicQy5",
  "key36": "wB8QHBxC2ra1cnp4JuA96v7vtyqXFsbeC97W8fZfCPCKt1HBb73EuiUbdFr8nwqpGcNLkUzA31UH5vZJMqhz9Ww",
  "key37": "5FfPPRJpUnW5aDpRjKM8HLEtDJxPrLvQ1emUEVV5G7M1KRGKoCQUzo8Zck2KqSprCkXKZxU5YD64rQP9pdV3cWNG",
  "key38": "5QX9PW7w8a1ovKZhZRHo7bWcmcyNsDMaqMUVmZw85cb6kYXZx7soSbWMo63Pgf8qChC2St5HFsetGSpmDrsbEHp2"
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
