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
    "3FSsrHQBJqv5L4a9bap3MHV4iMMZhhJfqMeKWGNfaykUnY9Jd7cXwJPX26UjZxcRDPwbBw5yjGQk7JTZSr5PMTzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63gPXr5zhPXnBWRxBFj32FUHahJpccrLiAsJA8YZ15d6HfX866qkdnJra29DmGRZS3SZ5F6f8u2z3WvNGFpAorAT",
  "key1": "4cqcLSHSVDNhrVuMDeBZidhxo2jFnWH2qWDEciXABVSnp7JNsadgjujG75JsEpDUwyRRJ3GesFy8CSygvitWnBZ6",
  "key2": "65Vxnaehe5FCJbaAMaKPFTSu5FhHt3hTHGutnyTFeUkJzGrcPtkNa8F6yEm8Fitb12jMVr87SJvLzWVWznKdKfte",
  "key3": "6VsQajPtD4xAFPc6pQDwZnkevMaeMyHSbwjRWho1S3fzzRGWpjSLKjYnGvGgyL9tgLAzGdkDjGCo4gj4BCK6tqU",
  "key4": "5GtCknxatukQZ9xCTDZgLKWkskXxx6bbwvuyCT3YkxXL4p1MoBwpGcbM6179DzusPZerUWSQFXuA2JcMFwy5gDes",
  "key5": "5jHhtJqCgaVPwsqEjdY6qvPNy9jVgHLiunxN6CEJ9x45NsiEiYpPPuvJWRAF5jXm5aDnaGq9g5dvJbc46CGykDxv",
  "key6": "4dqSFVPkoqWtMdM6BBZxSbSJjsmsEZ9cdMp9zYKdVKLJWJAYfayCRw2QWcHZXqtwBZPM99A5bsibepkBcstyD9Ym",
  "key7": "4CX6tMtSqcDdzv1EGpaf3nczZAYMreMJfzNuqzest1c6qHEpbEeRJ79iEQFYtgJ7L9YVeWxAARBddABJ684r7iSw",
  "key8": "3snwTokqkVmCQgYQiMWJ46PcsD9c4X8g8gYLwyd72Srxd7ri6iQehU7WcAPfKS1WjQZqffBaVVb4fEgoeJReH25D",
  "key9": "5jHHDdipJJJQnrmPYaDJFaQYt6ioEVkE8ootyL9JJUSGDSmZeiT8PL82KbMYeqihpx1zBCuRKPADMi2DDwHe4k1e",
  "key10": "4VEXNusKHHpSjdrTxw3sX9KZS9nerM9E1bTDbRKy6SJ2QBeeaGtmdB3zZMAiC2AxycmsELXJ4qpJVToqUYYSdcYo",
  "key11": "3uREZgamCDx9pwa8TfGkPFANdAepCmED3JMp73fNTFtjq9y5TDXv4pYN3NgJkGbo64bGfLePaBnfuPiVFjY9m5kj",
  "key12": "2bcyWq7Lca8cRNGw1mHsA8Ctg8QugqewuRfexjQ6p1RfzBvGpaizaCUrnYva2RGqbYLfazrjJVn7waQJwZACqT3R",
  "key13": "3oT6ztQnDHyVbDJAgvhgBjQ9dfej76fmaGNco9sTGhJFnNmhfNUKYC4XRa24CaKpHwB7BzgzGL8rd8pwg14MrB5v",
  "key14": "611PtLAtivNpe6hYFWXt5CEQ6yfGjogi8Mq3ie3z6jCccC4JWzcZ4JcRD2VxFDgo3tAQzaPYUEXcc1aAxiiRMkzp",
  "key15": "44M8ZFC6AfpxuPY6jhn6gWEpJqBHNy9mRLPzwegMUGMHVE7Du7YrwvwzNvAgRkXm43wwpVq9R2DKu2rYxD3Tk8Vi",
  "key16": "5YaoTsAMbULeLBrVmCUbPaLsNUnWGfsm4447jccpjDzcEVR6rdbRbNLvvwHdKKQxQcXNtDq11q2f9b9iRTeHdhcS",
  "key17": "3UdfnXENCr1PdegU1aeKekE9pngZprawTLpBHyjPGAALtqJcko18hncrpGxoA1yoQis1jJKc5oNZ5Wjsd2u32j2P",
  "key18": "2EB6S9U1zg2PgBaYy2MeARjd6Hp9uUaMHJ6tNBbY63bsWeNfemeAQsPLEmkcKRdKhbtRdYu2d5YkvUXHPNEYRCyh",
  "key19": "GFRVrLQ4Dc1TS5yHFojocHMJy4Sy6VG8NT2AE13zd8iBzFmRZBNqTifciQ3fKMQ2LMJmAguLhL7Ah8FHuWMgnNB",
  "key20": "2JSdPjYcqkrCrKRLHJHH5vnmqaHmQDsystumgRPbFJAKFvFsFYq3DrBnusfKD6ZV39jUGAhdKsS85vUHAGPaUPzE",
  "key21": "3d8bX7U3wfMXyJiXCK6Au5P4edqUv9ERNsBeUt5o7pHNrCFWb8VxctqcHofeuSqmMKE4BiiU78fBFQWR5KnCoP8V",
  "key22": "4Vdgc6pRiHQ6rAuTgXwEajCEAv6DszxXETgKQ8rgJZ5T24BS1aAMjPyJYJgv3mWucFsSxZH24rqHGoqyxzMj2aTa",
  "key23": "4TiGD7f3yHqPHqSpmjs1SFyKrGXsTBboe9PN3gjzucuxTZr56BhhRDDZrwmAwwx5TNmP2WH3Tn37c2zxbFfwVf7W",
  "key24": "4uEHdW8b22UWPUERZqzrgKUi7nkpGMKy8m185UauApWpHdTKpnmhPUEjQ7zZoRzzqeiZdjqs3hCJ8MSFrmAjcyv",
  "key25": "4XycEUF7F7Bsj26HQPzpLMuJBgeEjskecozxRjcXnJAhCY2AtsPJ1ydNMCpaRgtvV3MLNiM1hkB4HR8KAfEHHKRh",
  "key26": "2UD21SX9UDJ66rZ71YyZRWSW4xgBbEpxH8JxCjJWTG4ZX6N2U8aNuy74VXyLDK2nw5VsQNC6BywMmtMynRaJaitR",
  "key27": "4oo4LdWDPQSmNYMExF1eYitazwAZRjZ2D1qP9nS32cdpoUnZgroD7Sw46X4zpkgWvvuxpcqTNKxz2xxpqCdDjvoJ"
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
