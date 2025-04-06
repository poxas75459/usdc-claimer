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
    "28hJfrFxts7XJNKvZzGZfVXxzatwybi21PRYjLKYwRhxqxYSPL3KGndnfUkPxjSaq8Zw7PULsrNxBwrbfTP6Di54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C53Q2kUzY4tKR3oPW8m4RirRHs4E2Hx7rGASVuxueWgaACBSsdMReDkZ2t4ckyMXU3KjstXV9ofQDLUhkhFirCi",
  "key1": "35KYArgAwFJrerZgBPBim1cXkZNBieU8jwQh7BqaDb9zdJYgjr5gBHW2rgHJXowNZtLqGHhUXxHB9dvd96Vv7teK",
  "key2": "2fs9AfqZrnctcwgCZRhyfnoz9795LYr1uHU34Baf1E7x28D1qQCwJiPecoubVXUBUx3oeagqMauY4QivQeosRoBJ",
  "key3": "3qTZZN4DMJKW5hY24RyscDrN7u9EwAZLtEXVgJCyQY7SybJf58fWXMzKmzT6av5nSCApq7G9o4tLu7UD89WQm2f5",
  "key4": "3hT5MfRhyD9r2Pbeeq6CBPAUXfSZyTfQyswFtskSHDNWVRah17rnv9sbMyN1LgqkwvuYJdNYgMzBYkpUjEAsvEWo",
  "key5": "3wWTLNxerJP3HEvPeX9WMspyEDrEh59PxGcGF8inxqhDcpWF3YFiP9V3yKyCDvQrkYL4Fi2BoTCBnM4XsUfuFN6y",
  "key6": "4m1NxNS3BqjB8TdZKzaLuCabh9oHke5MzgQDCcVYFwKF3HcLgdEKXcbmVpZE7wMKpS7KHJGZY9YhH9PZ6DV9G18S",
  "key7": "3E3yJV1eTWTEhdwKVQoQgerWuYLwWHFxa1vDv95Lc7nzx3StFgqZt4AuxWmRPXZJWTpBri3wbtemhQKq28zusae8",
  "key8": "2kpB11dozBwK58Yu814dLssYp8rgjyYYjUkngewQujF3XdNum397bAi3YcY7Hy8v2Khf86rwxTM44cietZbJWFTt",
  "key9": "yZoQZ8terJ4AXJYfhStX9x4pvhknNVcU7ztdCxb4neLSgNXFXXVzV17vM1J8wPScCfpWAdHy5LbAzr37hDPJrY6",
  "key10": "52FhP58XffUk3jPP9oL2Zogd4hcXV6chmmxnmNhgqsWDagV86saQSSYxwQxJkZEmefFCWUNxQsM1Ed63sLoQrL8J",
  "key11": "3B45UPj2wVChQKBPe1ew7grvARAoLCkfAoB72oueZpcgKU5SuZN68uCjbM1QrUsPNwSunFhzveZEpTFmi4ywLW2g",
  "key12": "5CVjX19jV6QRZLvVM77uJV3qdsiSwnCrwp1D4vKYSvQYWDMbSs48GZzyZgwpLeE3PbRhznGF5RQnTQPrRKoWZPUu",
  "key13": "5Ax2Gj9v4FmQuPCJTnuUeDPJaJB3iFmgtPYKwokQoD4EphsL2atRf2wcYdwSWqgyhCLCFtspcGFaZo2S165Rz67Q",
  "key14": "3s9vAJgVQpQxEHCoysRaNgHZP2pH5LkSMLuHj6U9x4rbqpgsqYxizFybqhzhSqvDQ1qJeN64eTKA7i3rfXqAiQjG",
  "key15": "2FYJgyH4tLkZcdcumuqZU9QHxieWTYANtceW2J9GdptKn5Mme336JKjhxh5kJ4Pkm5Y9ozmpJYva9aTL1pN7Ecjg",
  "key16": "2LcE7XdAVjTma7FBRUxKtTRuh5NvHNjxgXYNXwMiZtZRf5svdSZkHnoXJwopPTnup2EzwYR3WvdS9xmvukDz7yKw",
  "key17": "5GhgujM64ZYUuvuyAU58koH2vF7dwi8iQK1hXrvLwfu3KJLnHPMR3hpkUATu2AZzXS8DKG2UyF9FNBsWDKnMFApU",
  "key18": "3bXrtKdVSTys5UrLXKpcjYL5YC8uZbQUV6aMAJrENdCJuF6RdNytshu29iXPMYBfq46iz1EuS73L8SjH861XtYxT",
  "key19": "5AwiEmqeqY5uCn938gnwhqWtKTaNDnYH9DtG4UJUJvoscCVDEge3jx4rEoK5qhgNejXp2utwdoNLwNEhUDL9Vvcm",
  "key20": "62Evq2xhL4PEvtqtYKVAx7E46ukaQ8v1p5UdeNfzW6zsL2hcxMMDMx9chAfLaShk3e1mpQz7YyF4N93j1UxwX7AN",
  "key21": "5QG567DEizuBCJ6Bq7akYjTgyiNqQ8rnt45xuJKVskCsSxBSX2CvkP4Hnum6BN68jC5RQFfqu39eXyn6GkpA3UC2",
  "key22": "4SHAU18hW64EGq72uSV2mrrdw4xkjYEcGf8ZnjzWNBMrwKvXu7ubpyaCLndiVHJSdd3quqJ4pd8LiHxXkwvTQTwp",
  "key23": "43NJvJokhnLLN2kp8EQQDDaAraM3S6CE5gAfKZk4g8wgPuSDgqoyeiVn5tJNNCSDL99Cv3fYuFJLdEiuuVe28U1X",
  "key24": "2DkSyr6dDwwhab9ZWAX2qjJNu3CWicFcDqmophvRnn4MVcQEUVsCUdZLPsbMrhRxfLxBMjheRATMFPZbWBpUzEi8"
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
