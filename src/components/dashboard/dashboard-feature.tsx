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
    "51jk1mVWyeBgHYyqWQYtWM6Ly9fmgz6xLkDmSpQnGZZSiU2a6JzW8KXFXcY4KTZkWZ7WXtGCCHXZ4WJs2o3KfesQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eymwTG4UQNDp4MfgfEs1LZUHxgs7gKqZy9pxn4toejukFxeiw1ehfQ76XHAc69NFhJcyneHo9P5V38KsA55kMnJ",
  "key1": "2c8h9KHTKHiJ5vtRuLQWhAWM8TfeDRc7ZT6Z8ZWz2AtsYK49gFNRLrp3dtULfyzdBAhv5gyAzLdfWEiwkhYVg1PE",
  "key2": "3trXAkvRxqygpYnadH3VxzqFJmiZzEJnq8fUfhS6PppxxfpxMCdGKikQYRRcVN8ovyqBJpu7g5GKaT6jsyPbuT2",
  "key3": "2ZaxD9aod9fMKag2t9gM84H7ogFw8oMRfeTzG787PLoLvrVAtrzzc9BhtHbL3MRMZYUJ9fDiELv4N5Gv5qDAesXi",
  "key4": "3jCVr7jHSSqUUXFWV6B8WjjUSjrGyuGcvWSpbLwqWA3g8cdM8LAjctsjKkMFpzAgGFKDrFkWvZzcTwqAytxA6WSB",
  "key5": "2kbuMwSn1vjYTS9QKjQSkyrttWmy5Nyf98Z7z2HrD6KgqCEmQJN24LkU2v31Sr63TApbjdgz2CCtB7saNtZdW2Gc",
  "key6": "5AuLUHqPudNg5QMkfFNJTr9NN3VFi29sUFT8RmG9UzWkLkSG1QArkJ6rFUbNMdQD8ZLAtqg6wRpxLhdcJVwAG5J3",
  "key7": "5moh11eVRQgb2djb2SnQ7PcvpEUC1fHCxAzuWWMVEwgo1aFFmtEGCd5Bnjie6xunkxvTyqhdxJ1uaqn5nxLDxUpV",
  "key8": "4D1F5p2emDWNofoa7hZftf4nZhvSYB3rKNzTogReqj6jAPJiLJMqFdKfLcaMa7hu8vaQQHx3g9VpD1X2StJJoF4H",
  "key9": "52zMGQtkk1nHcFVt1UEpmKYzSx8Q1sVYkuBrhTqw1Qr5bHpXVbvHj2fBLL9CDo9KsLPQqVvYErkqddfLGG6Y92wC",
  "key10": "3n9wQro4z6gdSQ4E1Ckr5hLuEubG9f6yKj715Ewaz6r4ikbmvUiDzKz7PXRHPNzbm5NxRSHKaHEEUa7AZCspVrwk",
  "key11": "5McbvuZ8yyPqv1zmSQzRqTisqPTwrT7qhWtV72JJUfcGNXNRFqNpumMGdVkA28NsFpHSQh5aGRHYhZrKnwCtUvdH",
  "key12": "33gXAGpysnRw7E6tKNtRpGErjveXqhYxYbj598M4uaAG7fnptG8SHUwa19RJm2zqj1oAqBSKx9omebJKzp1SPkaK",
  "key13": "42fuvtqoBhNoVJ82YBSLEW4Zg4vD4m8hgUm67WYvhdkfY3G6ovYGfhu2f6pThBrZ2biVWQoy2iDAskDCp6gXVNBj",
  "key14": "5v1XHi3LU84xZhqVzy1FYAkEkBQySpd5y9Y5R6Z6n4c3WDF2WAq7vMsJws8mSvcQoHy4emmgcfp7BskSZDQArU32",
  "key15": "62o6JnaBHNyVEUSymUMKBQkfiVqZu8ynpnqgfp1b7gFifpJVHsLBRM8QoJVfVeKnm7mevscxUQ7BNq67e6dDWYJH",
  "key16": "2py1jP2GYXxjHqSLPsU5JGwMhGHUQT444gLtH9jMCUKPchrKZ2mcSgt1DvowT8mzqkQZcCbeydCrddw4WW7PHdJX",
  "key17": "5k2ShpHnwZ21Rkus4rYrJmpnjHXsf8TUscg8R3Hv3bEpPSk2G1PDmEMEnaHrB4DRMXRaijvbWe7yFedwxGVdUneS",
  "key18": "4D7fFUT26oLwoJcFzpcoL1GD4ZDL7WKA4L6rQaD576Cciwv356aHKnVgry5okgBDya9b3q8hAPc8r8JW9qVchU95",
  "key19": "5RBynBcbb1Rx69d13Km5diytmPcvAmGisPTuGzwFDGbwYpW9JWMNaGmCtsE2xv3jaWriru9HSEeBgRGYDutTpBLN",
  "key20": "4B8EFaEEH6HQYU2FvWwpGV8akek96V25xQP5GbPkqnLHDxQ5LzjbDMdBAVjQkdTwBT9xBanymYWuY6RBchk82a95",
  "key21": "2ruf9E8KYWSA9CDN7uFXHQkeZ9PY6cU9Q7TerFB4WtNQdUBomb3JcjArCBZBvSKyN29GJEomu7yk4JwNi8pnUpRt",
  "key22": "287U76zGbZeYoHq7UAqhHHXsWuZztbqertsFz69Bqiwr7CtjZALwRJDV8i5mw9tXrd8rWbHUHCNfEntfzsFkUySj",
  "key23": "3YyA4mWnYHfNBFkhPRLYr7ZC1Qw5TwBwYrkMX75Mv7T429z5kuEDA1L3ck9FkogajnkTd5F5k2FirNQHiDKS8w2D",
  "key24": "2RNoyeFdh6rpFnKtSBDkPHukVvKszauBPg9sZTgeSnsnKhn1PoZLUXM1oUi5GAx1qyRRCLev9Mv8ZkSZhXJbWN5j",
  "key25": "xZAvD4CZThYPDFTgE6WBi267UWGkUgPVRTg9Z1WqBY3vcQ85dR1R5EGNoxu6PdEh48RUc35dxiCMQcCmBdeXk8Z"
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
