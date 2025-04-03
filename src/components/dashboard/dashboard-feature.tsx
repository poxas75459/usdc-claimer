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
    "F78Jz7DdJwu7RVM64HjyoDbAryadhWRA9XNumBYLniLGaLgbXodLJTkZA9NUdEMVyuScTiJvfCUqpXjsdNipycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABtVwkhRAXvrnWS99HbXZ8XL7Vi8hN7YXGCXLKQWKNBoHH8fu9KbxrgaSKpogmZEMCB1bzcJ597RKnVrsBtASAM",
  "key1": "wFLzcvJXsjuTHA4jcRMt3vALTKG5yuqaXs47zh73scRhwBMxyLJuvB52w47iuRnkPkFNtGCrZZvtuWCyDh59Zm2",
  "key2": "5LWMPe4F8YKkix2TFPwdtqSjVc9CNRu5qPR8ZudZ7wh3fuvxcKUw6DoqrB3gZwXBLJcju5uhPxEMzBUfLt62qg1Y",
  "key3": "1kELZyEDqap3cMrRyqPHVtL7zNAVs98d7A9yN2EUr6H57BeWYk1fJoAuMJ52B1hLa3W6KG2JJDFeeS7bcTDBo9g",
  "key4": "zQd3ezuMUeKm14gwnLp3aEzUCR5nc9PVtaVeJW7ueoL8shJ1YTgXQNs1f1r6NWs7HD2cjUT9W13t9JugteNKKFc",
  "key5": "3vTV6im4ahPDGfEbumzcMVSWTaPkVk9du1DJCjwx1Q55G5SHokYM9am6kKWKVPJEzu7X1hHdfkGthgiQKkgCU9g5",
  "key6": "3LzKrns7yZu6pjwiDRsStSNNb4bn9V3NLenV3u8GY8pdDVL8SRWd4nmRTciVxWWQfnTNPSybAwu3NDXu6ADEgQ9y",
  "key7": "5Tvv5ft87455XSqr9ebGh418oMZpFXUndZ1gq9rUQT4wcvPYxQQTppYQtf5QdDg5Ypww63VgkYjUwV28VMXBDFz9",
  "key8": "KyF1VzuvvQTM5iEZMqoJwmpDZLXrfP9pJfj7zgM8QwbZdoXU9chaYWwjwy6wDrhpj7kEh6dPd2v1mbfRT3RNrHw",
  "key9": "dtPgp2UPVSyTNxPfAx19xbveaubKimS7531yPy8MaWpFfV83X1MbQYjVVziTjhiey5jU2i9sVrPs1M7DHgCCZC6",
  "key10": "5kET3BqVQiVaag7GVTG2Mt4bbnuMiHn9jDfgCVen2WNprzjtn5MDLzgcVt3Qm7t8zgoiBBmMfHk5aiXTnhL7eSvY",
  "key11": "5UtsqdkcCGLVUFym4kUBvE3yhCQJJMES3xURyQ8FiY3fnKrjeDu4Vxvsy1WRRkWLX2WyTrA6PJJH5wwebTvnwH3q",
  "key12": "2bNupocSN3gu9zvusSYZy2itTcGm5oV9bfmnUSmAdUHdQS2aEpj11Y8SDKdWWc6pg8v7QsAbBWwXXxi1LApM34P",
  "key13": "32rzMwfqPog3G3SsKSuS5kELMnf9jgSeTeYiRwuGF5XMdK91WLgt2uVnoYfRrxWiBMVasLd517APb411vHCvSJKg",
  "key14": "5EJN9D2NrAveHFymsSKo4SeULeWPDjSo9LY2SeF7gYEMyzKm9HijDqxkoD92r86JUFHMaz9QycHeehhS4zH2FYHe",
  "key15": "3p4rpTgntYU9WUzMQPeJDb94YSEcmaTug4c4xSEL5vM4NCRMYrMQ6YPFt48N5U86MYYYtYyyxFgwMA3ZbgZ7MVnB",
  "key16": "4MQkKyN6twVkFvXxdyuyH9xRLxbhEhGoyf6NHNpDAWupxrW113gKRWELdJNoTY76dypXdGpEGPGD6n1UgoidyKzj",
  "key17": "5SuHKwWEBBNWSRiiwECLmUmewEGceUigCi6qMSXXbBTAHG64qtTLVxkVjxSmxgjTLjiN9nEpFgsYfoqFpAeYhT4d",
  "key18": "5DwZ64eWirUbrRAcCjSDLMMsVur7iduWFaY2HBb2v1g5ALUKWW5LdoHYvhH8iTAAHUDSRSjw81m7xNKT4jhkjHZ8",
  "key19": "57Z3KXae4XpVA9Ru1WV3LQpkFPshFfqLivbSNHEVvyjKU5xQnZEXE7HUq3Lhe8Z5exwzzhxRi4jKAph1QAdTCgaD",
  "key20": "5YP5pRT5SeNXTHi8s1TPWacgtJ8GBFSrDFoA2x9XcVsNtJuyZJ9r4b7bv9X9T2ExmK5PMS3JFrd8aRpBgmRoUjSi",
  "key21": "2pSqzCrD312rzALmi9uRWTSwKu72JgtJNwohjxAhzeULRJR7zcjQnc2rNmx9SHyctZCtm1qa28Vu32jgRpD2xgjm",
  "key22": "yq3TJbeSjrMuYkidoeYZ6sEhQjRAkv4cCjr17Ep4M64GoHDRRDyAZNznJZK5gydWJWeDX1zsgn74fVazWRthqFL",
  "key23": "3kLqVikeyMdq26hsTF1Wcg9SEW2LBLityN2KkQ71ymVB1rtiMEoF8cV3MrEXc8zQCB7sjfggt5LN74Lnya1pL9X3",
  "key24": "41mgrU4vGKnZB7QpgJ7LovoTLJxxk7LMTshYC7evFhPiv1jjrhR7gbKek1i9aNFhfuvFLm3ouoCGX7typNePbEJ6",
  "key25": "2WRiGV3cMAKjDnSFMJJ861nZe4fLJdkHCDTiGYE1wM8Mgrrx5bR6przr1T6TsZqnbaXJ7g6ZhHpH28SN7Mr1EyDs",
  "key26": "4F3ay66wWALs1TwSjzo7kt8Ve3sd8HTF82ckLKLAhpHSRD2YJrEaR8TPvcti3p6CaKmM5pjg5MioocLvcwffB987"
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
