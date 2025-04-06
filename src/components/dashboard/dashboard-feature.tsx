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
    "GQReaK6SixBV1tdeSFJWtZTDy4krQncyVCimY6pnuVgXAVdMm19qK9bzYRgJUjiPjxqnEKVf6AbJKYNpfjx8Rid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAL7wcj1u3QaJMu5nQs5Jc2SgoEQ71eJZLs5ai3UULkMRUJ3u1uHQ4g7vtzCZuKZUKcVoPsfdkd7cZPS93P2gCg",
  "key1": "mtQoBUnc4SMxkhSaSHzKH7PfkVZM9xA5hfeiAsJQS1ML8jqdVbmmGHsdQDft5s6MAFdFCnyF1oBo7zJJxVy1MR4",
  "key2": "2xfouHuTZ8PgzXHVgG3XhQbMwecM4siwnUWjaenyAt6MZQRJb9Re8qgAqNBuASB776MoGGJ1EUk4ambKQ6h9gH5o",
  "key3": "3FYbL1yX1yLGVbYtXWwYv6r4hWTVnAEzpYETFmEfj4hnajTNSMUAZoxuBLGLGqM8ABiKcY9qVdeHVkJcQLSjS3am",
  "key4": "5cMNUPkRErmGcyHcQo531GUfSC88EBj5w4vLwp9gwA1AfyWmYWZJvxnuvKYGNBfUf57czyVxambaX9k8fCcVjizu",
  "key5": "jRSdNL6CVbzKgjM6oC1X7fHY13BXubYouasuGFxNvtf6APsXRhm1egAraiLmuU4NFjsDnedfBVZLzsEH7NxCM8E",
  "key6": "3y55v5PRZSC1d3TRbvr41gxvSPX9i9pYeuJ3tDBtxFc5gCpqteUdk22QEBDutBNR9eFSwDormjdq1Dmuy5THra81",
  "key7": "MLFX9FGJvkTZ4KPSShHazyAND1XkwYHQRbMaBUKLD3xNfSkrfLaYqGsjk7Er7QDQPULM5LUSwCSgetC1kwtYdTq",
  "key8": "opn5z9U7GN4wgX2oMxZFao7CxFzmynHxsyFXqfvLWDdsCrf96fU6WSzGjoR5afUdRLNCZGgZoJfkeGzgKnMQG43",
  "key9": "4piFTznuCjSu37re9HpxwhvJ3EuyNfmYxcZ7R66qw73A9SkMnvuXrSsd4AxMoCX7iCV2UnMf48cuXjcC7Xf1bkkp",
  "key10": "3q35URVoHQgsivFQQib5GYZjzZE1adtpCNYE8BQCuLbWvbdhkUt5VEMRo8kwz5kZJi96r53ZCUmgam5WmydSwwJC",
  "key11": "5Q81TDZwMEcC7P4Pr1gZq5LCEzFwR1QbWbg6ycJRSNrPaxDQVAoMM2tDz8WFwYfMmz9XwCv2TmDRFf4nfwN8cH1D",
  "key12": "3DqdvfoFQvpLZNA3hKgpkwL8rw7uD7EPGgdV8bmTV5Uq7aeUAeiqtjZXfJEj7Trp2qdwMq7aQyg9pTnyhWSx3ddv",
  "key13": "4sSJa4cFPykowQrLRThLY4GW1cU72JsRH7dHRkASVVFJGVocAgyQm4pAZtVsfdcvpRN8jQdQ4VrrNutuHCvAmnU8",
  "key14": "MabFaYsAr2tosiZVoTxPnfha9v8bySzyrMFb8QnY2KtqhzVrLcDCso9Fytgz9qUvmbQGMviPtP7Jyp9173nK94D",
  "key15": "qdsUdfzYRhERSdLtwB2FucTeYHkWvEH1nggYM1jK2RoV8uq2BcVwzUgkMLq2DksjnvUK3rpF8b8Yku8pMcPgWDS",
  "key16": "yrJymxd9Jfe4yZ9pxkK7kKVLtrQjVFuKnEqFyJSWMohEWBWwHPeGbGTU9gDjLd8viKY3d45Dxqv8AQhxvgX2A7n",
  "key17": "AGLnH737qrPws4Nmheg4suCQaXCyQeg3iAvR5RSLg662DpYDJ3bBKpdd7EYoH7t4fkLCPvjZ63PpBzuA73hSpGn",
  "key18": "48bSnrRJHcm9mv2z9iZUykWUfygR6CBALaBmyVWwJ2L7eX3jWGMye5LsK8T57N6YnbRBvCWu8FqKcxMMkQTP2wjw",
  "key19": "58tc6rJQAdCaGm1brXpEn76FhvveYovwypJYafruk16YApMRfhpLK2WrxpQcAKH9fgHnEnzNkWDxg1LgS8Ywx1r1",
  "key20": "2heCsJpMRdQgabLUE5SZ1mUq8P4Juc95nANTryTwzZMczbe9ZWP11D1fvLNtNrY1jgeruWRhtUMp34qzh2SPRB3U",
  "key21": "47K239gqJHnVPBtQu716DVQkhZa53LUdMdbDoTxXt9iTAtb49tjK8whUeqdkVsfs8XG82GnFo9bFZEW8YCtmjMwY",
  "key22": "2xXBBLgMCiniDT1NhSunr7p8LH9FKbT8vDiUSJxPpMvimKH1rbEqw7UV8DoKjftsFgLCERT8d5eVdxSEbuX3N1PE",
  "key23": "4tp4m9mWPi6VxPXDZ2Njkh9PJLoPD3dthj4kZtJDfnw32267JGGVXUBVGpNE3LpENNtMDTZRzYvNFwYM2pVW2feZ",
  "key24": "4g97ak5V4DiuVmkVER9MgQGRcyqMa1bqj3fnTcKJHvRDNq4N1npuCxS11FJRu96rV7Rs1n1pUA8igspVPHYBaq8G",
  "key25": "wHZNvtMEqh1yh8W3Cf1vE7FbDaGi12ikHF35u4T9LSayjJMgL1XSQqMGH5FqGWaTwHJnnHsVR1RRSjZBjPXifyW",
  "key26": "44iko8fQbpas6MqtRfsp19qiEiamdgqXcuAQBUvgfoVTgVppxxw5eX5cDem8dKozSGeKMkjwdMyzCXPFUGwJvuFV",
  "key27": "34jnpfmeFXVLc4z9zMFVHGB2WnfXuKiqK6MmCzy5JuSvRgJ9b58nC6ym8HnMek7kNcfJYd85rqFVUrAYZLZQNKj6",
  "key28": "3kWFVXcMkdqeUMs97YubP1VU1Ro1ViMeDMMTejw6Ycc4why7iQXnhefVs3FXmPfY39FR9rRFWrQcST7FQk9AVJP2",
  "key29": "3QBmcWTGxn4tbSvxQSuUuCvpgmWaCayyUVDHQmPMPPVNMfEWX1XS2JZiYNMKJZjJ1PhMZegi4miKMwbsqHyez1XX",
  "key30": "SG7NzUgAtoSnYPnNeWraemCc5zNAsMYGqZe2zhuqvSRUhU1gRCSm3sdfmjWWovNvpywuVWPxNHuTBi46fotnck9",
  "key31": "3quQy4g1yBJ67iMUkUe6fUdbh1fA4XvoEzeGaDM2CV1ofrxxyoDmdPgXxBX18ZQNcEyQ3YAvmSUDXNE1MW8Ya9sb",
  "key32": "436vXUjheAGP8xpTPwoKCzKjxKqf7fnrNwgNs2w3g5PNqNgsLA5WbgfMWaYdFwC2Y2D6sAi2Cgmn1LDrcRxMisgo",
  "key33": "3ZSkGy3hCHri8dGXSpLNcDKXKVD3sSFWcbh4d7dmG8HLc4Q9VZYiwjKLsiKikKN1d14R46sKhj3twgAkGzam9kYr",
  "key34": "3UZHiDzPMyUBufemNhkTDu7bZxsVvcNcu8F3G4TeE1LvG9GRthNJNbyp7cXmkdj2TiZkGJQtnoiqNDH42xU1mpra",
  "key35": "2iqWKEAWGxH94gNyQW8RHp75mo95EHyDA35fATuQ5EDRNCzRGAbxEpGsHfquszSov7TstKn8zPimiA8MdGbXZqjV",
  "key36": "2jxvwBFDaBJThkP3BW7YGbj93YGPyxXju5Vs961GvZafn2BtXgyjxyecR8Luj3c5BqYy13LBoUyAtbu9c6SMCdbH",
  "key37": "2zYeVwpcGKCQdE4zStxyyfNoQwmT3v5Ay2dxvvfLyvzMBFvnuXCVWBdc2msZr77t2wY2QDYnzprQac8FW5rZYotT",
  "key38": "4PNo8hcFxSwSj1k6Fn2y41j6xUDgnqqmbo9x12kvZ66oJg96vix4gX7886K5UWhbTcUzTNMxS4wcQfttKcqRvqKX",
  "key39": "4E7Co23iUpbQXxLmeZx44pAGGHRVxEXRBcqNZHPn3XDpgKnoHM7hrrMM94a9ytt17UxFHEDVmfNafh2HcNJ6id92",
  "key40": "4TDYbUTqG7Vm6z5N2mt7WYjhcntuug4CCX5d7xvAF1MAkdHhKgn2BWjTLNuAafcfUuf3xkhAzg8UtjPs6znL6zUM",
  "key41": "4yQpqwCU2NiZoG4aDjaLj2ieoDDTr5dPCuUHcjNggn9Rvs7uRC4D9r5mCpi6tKMXmzdSCWBsG23sU2ZngbCdUkKY",
  "key42": "2Kp7hGbsTzRjeKunUjwAP4yj9ZL3YCjEoMbWk3AtueHszK4kgABC97LVQc2SZ2ydHdXpxHqkwEHWW113rPAhUbv5",
  "key43": "4wxTCvw4e6xkhXvo32DH6fcKDtPWCweJgrwYHyPLBizfn1Faa7TMqT71a9VJLQgYE8q12CBTCJTMA5JFquGxH5mD"
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
