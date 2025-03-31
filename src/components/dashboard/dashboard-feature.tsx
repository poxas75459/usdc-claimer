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
    "4oh5duxqtNL4ZCnwn8iC89FwfKerGrR9jenqU3dHDhNgHoQnC8wWofpoDH9KE3nhFmtr9MAJxHD23RqDt2tfb6aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2dDcAVdNZxAyQmkfxoqvdN4TPgwkibgJw1uRrRn3C5MZMNuLCJsQRTpMwJXK6ftPUnu8Gu9Us7fnuBFUsq6oER",
  "key1": "5CPXWB4sFgt1bJoiKWGGiEkKCUboTt7v8vQEkBZLZnzu3w65imTKX249UCbydm4DZfXPT4vsjBNkbasUriqFD2sy",
  "key2": "3WafUxpdYonxWnF3LR186EkrwPozSHDTxF5s89e2oyxKaXBhtg33hqGNS2Rp4RZJdsgx7976BWdi1rXntQHEyWwU",
  "key3": "55fDkGrpmTAP8UsaSyR3m6UcP71fCZ1SRNmZjUEVCNUm5G6rFtN1RxPsGYsSMxh6uwHkh6QhDU4rLV6yPosfoofq",
  "key4": "4VgVLymzh82kLMUJYH966LovGRdi2LtwUhwKaaiPE2tLbYMT2NyTmpHBPJUXgPbyuN6dQsMauPKbcbcoYSi93P9f",
  "key5": "V9o28A2X5UbMr2HZxtBaWwzEHZz3Gxpan1FzMrTdzR9FpkTsyBQSC9JMS9yvQvmJN4dpDjSXP6Minw5vmqRU3v1",
  "key6": "28QK3tn8MnsHHychkUb9gWbNfaBVu8MEBtP7YTH9dps6tYwSKJTduF36FpxiNzNzrFhSwNQjg212LdVFSjrfVVSW",
  "key7": "3hEPaN2dCjgfk9zeQV5QrwgKX9JdhkNnmxwq8s3n7EGrziSwpWDMv3x5pwaGbQxPpDgqBuh88k8m2qJ87jwJsKpC",
  "key8": "2MGJDNTAy9d6W6ifwuM3NzFJYdyE34Q81fFtS8Mhtbp7oMp3qjYy6BwZiVzarENUBqHkp7WXu6X82JrnLiyMUy2q",
  "key9": "24b2V2zA7XqwxJfgnMpU9WQQcqtZ253dy7wHzmuCWNfFVXthCtHr53qSyum6hpH766LzZSCR4beWKrDfUUH2o1Dk",
  "key10": "3QJrRhAkXyaPoS4Y7M5hMmAWMb4zMEEjoKz3LcsqXTgb9radbvBCTSEvrRDtWEnze5kp7ep4frxVF9vxBfaUDjgn",
  "key11": "5n6uGHVywbvokw6RqqoaqY6H5ewwUowFLSy9rofW1seZ4qWsc5L6wLjudhKWraPV3WQUgej42FXq5jjenqUe7d7h",
  "key12": "2rFZRun6J26MQ5ZZFFajHG9XcnEE3yB7WFA2DdHsHWJ7BFQWjeqwtMte5Ee9ECt2MiJ1RQ831SnLHRwBHMvpFj4W",
  "key13": "qbg1XEebgvtcUteYNg8PkeTRqBx46qtQDfigNPytHFfa9H2qBfVYtntkG3TLQzVL8xrvEZAZMNgPTPaTBVTC2GT",
  "key14": "3ULyu8p79QAoFCbUJQFfVzABJb7fMpfpt5bKBx7ywvoe2j5riMY3WCEwoWPBoTgnQXoMZbKGtbAwXpYV5HEN23nG",
  "key15": "3hF5iDj52nkCt4UVqgCDBK699Z5qjMGARiXkr15Yvrq81VEqTQofjXUUc29frHmkkaGKw1JMtpdz7g9AHqcPrNQo",
  "key16": "5eWXpVPTQT4coRuStXjwhg9F3ZSrVrAwLkYunbPXVt7p1SjshqzQTvPoAuWrVgbYw3Lc5gLfDg4cNwjbuJjy32Gn",
  "key17": "2Mkzkbu6PmxiRktk6UF3oc3GfFqghUNyPWiCGc238dXvuxPHBdEE6L4gtfX3p8Gr8dxBqmBUqbAwVSkvfG1tQSV2",
  "key18": "2GALB5xMot1Ts1KBhYrAQY1594J1Z6dGfurPePjmuQbZBibUFnrtt5aPpryTZXa8GXV73MgWLVjawZbhSQcCe2Bn",
  "key19": "QyxTAvCKiMZqAcrmGtf4YgZJZ6bgehG3Pe7ZQXAkExuCansm4ZMLKX1c1uyJq2ArbUQLvR5wMVDaxCLZBWZziu1",
  "key20": "2MBtU8Ynv6tA5nwiDSHUsZ3aW9kyLVvADuqkHFkLjPfjie8ggzV6q5vYqd6brVahJ5U9a8WKAgpEkUUtJHvscgiQ",
  "key21": "2JuwQy54b9hwdTqgRscEoLkNp9jtZR1z7TxcBCQyirGzKRkbGa4jnnwTLngcTjN97fbiUfDtBKcaG4hJSFNLohAU",
  "key22": "5RdG1Mu2XNVGSQh2BrJpccbXKWM8NL6DT68ijgt74u9YqvoyiX1x3brPeo8UPMrFyKfpquX27RyWLQVrw74hT2Vw",
  "key23": "2CB3KqRBko89JhCufP9EwFQ3Q52ZBaiyXzHuJNbwCrrDfHMthZzAiAc8fPhxXTbaVpVRVLLKjz5YmjaYwfQnaA83",
  "key24": "2QNwC4e8MX87mB4wx8AdowVqLBvgRocMYHZwzr4VJ7ZSzNnKWVJKGo5898uEjAofDN3tsbFKMenP9zpNvt1VJ3Rp",
  "key25": "2Sed8byiLPhE6SKddWJGDtqxXBPEMuQTjVcFqNRiUxR1CKB5fV1R7PMTws54XUph9cPq9NHp4SUuonU5tFuV9Sjs",
  "key26": "UJ4ZpmanR3F3XKEBAQR98ww1A8AX32Uzbvs9XUnGwpRX7Lox5jFkzLrXgvUq8R3wghFsYXAWfhYsStCctP8KihK",
  "key27": "3Bc2mVoLnt3TNwiQ2ngkgiGb9V5n18GaZXrX8KugYwbx4xsGgHyz7PhSQkqa1UozkbKaaZWzeYDvmd6Pj7RZ6uPT",
  "key28": "3vTH36hn6j6HhJikKtR4XFavmJSEAKmKq9Pn4gSmWd2o8CYZFErPfoXoLREJL4XJzJbWZnFHCiav2DGWR9b9AGpk",
  "key29": "3MkKtgdrCZpuTWspKoYdHDC6Nu265ALyFHegcbfmBrSpApAzWkVPQh8r6E5a9dgG3EDaeUHnvdKJAjQPJeWKtmbE",
  "key30": "4jQMnA3fLRmzkfk2Chbx22yDCNNbfxJhue4sJQK4cWttN8BLiJS2Li8hw7oP8o18mmHH2aBcFMRTxCe5nmmZQXrn",
  "key31": "2G61wgwjRzoggKEtmEXnhKXWk25uCR3U8u9dAWC6nzKrgfijbP9JDu3nnC8ZZecBaSJuJMNp1WQciCgnd69HDwX1",
  "key32": "3B3R5bHyb7f8KA6NiQgXdXYUcagwwksDuzHe6edtUVMGsQqDCh2PPPgz6JPgwxefDcGnSn47f5sVLv2BiXeDw6se",
  "key33": "22ePWjjoZFhB8fTooE6AaW4WDR8XJM8PFaY88nqBN9k3q19CpPHp2fRTTy7pDjiuv1DFCX87ShDRtCbmmPr3Y6Zv",
  "key34": "FM4ApULDDBcGYHFfMKPaNkvbrPzpRCcxDhzzkKNydy4pieht5tidKuacTaRd1dnSqzEMaACuJ7T8j6idC4SnEQQ",
  "key35": "2oYKsUNChPy9rMzPmZumCos5bE9UeMzEQYxxngQiDb2fiytZbCp4EEBc4kP7FCxkCNdpfBmKmTs5qbj48jU8FoCd",
  "key36": "44rNHCJ2KA8VotNw2YbyEGpsJwu7ndvgPFJkPae8WyYFTLkHSvNjKU8b7iJcRAURjKiaS9YHD7j8n8jhSFuvs25j",
  "key37": "2eHxsra781jA8Z2SQPVJdrZL4UqNPvJFXg85RzUnxKrbgD45QxCEBws472SRVxYszJVebjajgkLo33zKVsZT3oDf",
  "key38": "3jtkt9TZ2XRXiq6Y8e7EvutYe19YHcxrYRYh72B5CHWvNqV8Fp7aHHq31ff5WTysRSf672PQvMiYh3CBeaQr9xgd",
  "key39": "4sNAhaZt2eg6dykF4WKpC2j3w2L8pasrz3gqVzhDqN7aF9T8RNw6f6dcr4ML4gyeTXqy1amrXQm1Cwq9AjLKxiAa",
  "key40": "519NN5EMetcfUoPD7mSCQYHJJ46HhFv6NafMgcRjnre2TXpRRG3mww6BeutK9ys1uv7et6JG7gQeeqXMT2nRNMSu"
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
