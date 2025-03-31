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
    "1AAcPtWeW19hk1dXU8XaBNxRdm9F3k7FkULD7zRPQXdkhV66wNZ3MuqUQ126qGQuDYiYbaF4PiKiazpvayZiEJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQbcSP3PdwDuAQHD1Vzsq7bx6P9NyQ2jE3e6rrte6thdmC84RAqrxa5PuLiDxAHGyzcf5CGKqVRLyndJdpNu292",
  "key1": "4qfBBdjyHue1DEdrhZqPBEbNKyt5ChqLiMaiTU6w3fzMqJh1dFL2KHERXFGphpwXRTnnLjiWgB64bJmjSNJzgiS3",
  "key2": "51BvPBZDLnTdXQYLeVVTBTkJpmtbYriWV8h2ZwNQP4kf1tHFLvHozrDACUTu9QJQ2xWSZjywfMn7DwyS8JMiWQDp",
  "key3": "GcfwCbbC5Ah77HtJEpX8TmB5JxMNhB6vj6N72wYrDzjRpF8L4gnsaH3PxkuM9XDSbePFR3yJdZG7dZ3xkxrwcuL",
  "key4": "34sLSM8M1QkpdWK6UkYHj9XqRXhZz3ahBFf2kHLpX2B6QbiEWkQvHW3RLnFBfzUDa7wwLH5bTPFxU8yHvtwtZgx9",
  "key5": "5bcQji7cTSicezboip6mpvaddjHuh1zvGWhjQw3umrfDDYKMmhjqBvRuwdrs56tCCViPyU9v2ipu8dcu8sLew4PU",
  "key6": "5aR39zMi6TrTeGhQj6gNpo6YRJUUdT6mQpVduutmbSb382K8szWfmCPdnmRKGGecD3fgU14KLCuQzHKfwj5DRw21",
  "key7": "3bVGFfAsa5czRb7jyxyanb6qhJHYsW5vCbdgdP1zE5AMmCm4eiEcjAdtf2WNpeHdyhRE9VGm6t41xLMnAePkeJoQ",
  "key8": "3RHTHmxFukMoLsVb8F9q7xK7QuJqBPs5HZTZqYDA9UuG3wZSXbddhtQXoqCJCAwydrSgFEncd58TwpEGo6x6bgJV",
  "key9": "3PL3aRDhTMRPFnLSakYQdwV7a96cgHArRNJ4z3Td4ovtCsTEW1hPY4rmnZXNGkUioi3Z4mK8fM97CHS1BX93cNr",
  "key10": "5qujMkYSQmFmoRJigywMLVGNoDUXbWts2494NJ6cQc17avLmenyB1ThBeNYF83NG9kBqRg4onkiMo9PqNnSHzJNB",
  "key11": "2X3gesYs1ZLtLfoZTZY4sbJVVLJ6fyCEGEx9oybKjv2CFFuiFqsiVzocBgeG6PVH65Ycd4PeHrw7WTubXoHnpB7T",
  "key12": "5x45n9NPUGjH7L4ztt2xbMCGoiKWtDQtfiRSxr6qsQ8vN8LVG2WvssZjHStf1mhkHA9DXMMA8NBHXJCjXtXqsBZg",
  "key13": "3eer3wDRkPk6a4ZvkVZhb3ZrDHemfS1Z6N7bpBP74WnaFAhHLoyP8dukgPVjuBJg22Njf6pGVoKuCKWWgdXvrTEp",
  "key14": "K96sTW8juKxaDYeBtvG3VD6Q7P4ysGEw33fWbffquy7fpi8oFQYLJNqDbRCjDRbgwxZPjjRAZtxWbUT3UkDaDLC",
  "key15": "2kKf2VioYqgwUF5mnTEFT7pLny4QuHsM1P6FdAhABMPp7Ad8GwoSfjRZc4g8e9nFimjHtLk29M5pJuVUnf2zf2yP",
  "key16": "3XoVr1BJzqNr2jmPPKr5RBQSKZUtNsqhBWALQbpoSKaMkQhp3DvCB5ZQZXoTh3LjPtDCMCZHbiAvWadZu6H8iFfG",
  "key17": "3UGUNTFH2YCYSuRtD7tMP8Rf8tkS1idP66vs4rboeeSaGXEcmMWTLAovvnPUeeVmBHuRHwyCcXdW3RTmabrsrk75",
  "key18": "27JcixSA6H3ZMi6B3MtTfHqdCNbvUcogiTattJFUQDzxEo2MkenTFQ8zAPgZUAY4z2VnZ3DMZmUZ1qymdrP6eZCU",
  "key19": "3fDuVNdvrnMiR35DH5TofS3zzTWfq5GNDTKWsJBX7wH8awCMTCgbgJuMRz1VtmtYSp8YFxvRUFPSbcHXkniU1W7v",
  "key20": "2gUQRzhWkDQACvfZMxbqY4c5xzvjR648DKsn5B83zrPGgT3h8aDAoJDNMD9nGxbehJqFZsGG8aJBM6ctCyAdYwnz",
  "key21": "5A6UVsZNjKb2XqZEoigAJSStnHBruFiH7kpWtiFVHv4d4T8ehdSPasfE8E5G5eDBWep13ZfckXJkqjt6Jw51NFEQ",
  "key22": "5Lum55UmH9mdgWs2D8hKeoerJMqJQg5s1MDLeeh8cZHdzWuFrCDVbEiqyLMmHiUqzZi48JuYH5QMqbuHSLU2KZn8",
  "key23": "2VQLwZYpV8Fc8GbXC8HXzDJhzT6xPn6MptxJR6CuQ7PQQmXpn5STQnCJysXhUGaeXgUPXp9jdMDBp7KgkcuAPHq2",
  "key24": "3oixRLoBS8MgCggPeBMHCF1V27GuzWguyVzVd2RbPb4XnBP8nwnVaHEc6QDFoUEHyKtP8mzS2Jq5RwaftQyBAUmC",
  "key25": "2btxa4SbPyqUwNC1ZJ5QCKmWv1LGZ6PRoYaipMX6pXnq9mw9LDrtQaTfeim6Bioo6aikhWaVFHkNkF9r5NEMJpxm",
  "key26": "DgMAEkNRZ7Ab5MbK8ShvxKPpqqmXTkcj5vPxvoYSDwZrBkjTdsrpfyXxnqMrnDqu3XvB8CAtunMg93szMXkHTt7",
  "key27": "UszMvB5kbV2KRt62kWkTbgDCGvmSgoCxNXqXUaXcFymWaeQ8ekVm4YYEbP4BBARpQxP9gyu8QukJDCWEGPAjmMH",
  "key28": "5JPsL4dSy5ZinaxYLSAwTShnAqzziJRgMRtZoZUaQXf8xyJLxY47y8CAJKCDKCVr3ZhPdPtEwrK2jGCmXBGkssMP",
  "key29": "5RDr16TpJ8p3E9K4o7FvjhL9h2YsMuYChV4YMXuDBM1tvpAiWbKBqJANAcEuN2qEDombE1ntzZaX58GDvm7d5SGF",
  "key30": "33bfXupLqJEcZTLvanWiSgBS4f1XGPyRdUbJastX4PiyaNaddyFfqabiecpgx77MVTMfUKWRfi45UAGuwMYYW668",
  "key31": "5TqDGwdHyUkPJAhUEshcjQ7JCRhvn7m1RS9QUJ3SNZhifA4HqkxspPTW56z9t3sz5kbqwHynNpwVPuZr5eAwNYNX",
  "key32": "3CQAcomhH3DihXTvuuNRAY7H1QWMBotmZeFF8PHTZLzrR4JKQaetgjhmh5ikPmY7Qqa7BWJxD93eJPUvJ7GHeEUd",
  "key33": "3mSNdgdZVVXgVKu8jTypGjvuRonCMPv6CcYqh3WDUZa99ZanemdM9zuQZzRuvw44hJ3BVLDqVA6Q8H8XFiHm9RDh",
  "key34": "k39bFL5XCC5dipp7qLdyFYdvHrAUGsUFgLgoeoRCHk4aohi1jSEHKyx3kNxEZvBUrqZfX89RWm6x7VebtrUQMbN",
  "key35": "4XAgGGrs1Xwo1hcBj6sx4B54WV6N3jZ419mCsUQiu99nQNnPhGGFVeC19Sht66mxoMhsW17C8pGS7xuhViBKLWPt"
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
