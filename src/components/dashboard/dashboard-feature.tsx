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
    "4EWyhicUdogjDQHZnySEVYyUr9b5KrkZLAnR4RskfVTNwjDJtYXeSKvaLW7yfkuyJVzPZPfWbk6NCfEM7kH78suU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3bQk1EVCfxfHL9YuSnBMKZwqK5BnXcBVkys9UsVosHhrP8qkRAAptf6J1kV4BHqU55uY4QePfm2tCj4CoQ7gjf",
  "key1": "3NcBz3AYpF4TAR2KhNbrK9FNgscr4NL8Z48sJ7Arjyh1B7z28AmfGFg1x75c893sNUAPMkzgztGRXRnJfVFCj5We",
  "key2": "5Hkrotg2XARjzAAfznF5qDdY4qJFdMr8FHrsiZVz8eHEx5w4fy57ES44uTX9NuHjkfTPNpShT62ukDiYtRvomp8m",
  "key3": "4WbX9YsQ2L4gCLaf6Dj4fLhiXZM54HL5KpjG3yopZoqVdkWP1D8n3iRSNiMmAYD18WpVjW2has9ipL3YckQY1RCL",
  "key4": "2hhJy7W7Y8u9MYpCzpP15AqGp1XaYrP4DihkcHE3T2ncxEq3rRmvkbnkDnwptnVjBNs8bF99BAimS93gPER9PrmJ",
  "key5": "6LNiUzUjyk9r2XXDVPHcYL1FXvM1D7dia45JQw4wvD8zcDaZTVn7YEGeG7AQvUJBG2w21bhom229owCg9fujnBf",
  "key6": "3mYaf45gXL1jFP9eitrE6r6N1MMBcA6X4rGmU5V9M6TQMxouydgYpjN14xvmyTdhY262oVeEpnuQpnXgH79PSLem",
  "key7": "mS8n1Zo3Zh9twzMi5sNYRBT8autwPzF6x8BtpbTgfer8SexMh7yPYdJ1vKENXDLsH94B1GH9ieV81tnyC9nyR5u",
  "key8": "5oPDmC7Bhv1FREmZBjdxsVDDDhSuy1duS4bDYiq6JwYfbCZFzQxQCyZnMH658nrEUsFszQrXkko65bSTM712G3px",
  "key9": "hA1cufUj2rjfGe7jtg6BaSnnUqYqWbXZZuDeEd5xhXYwQnPcsriZZtqm5oxpP6FVYCDtz2sji4pvi1bFkMibFVg",
  "key10": "2uQJSTxnfsbYU7o93VvVVkHY223xbq8Ww2fEEw1Mww987cQjLZSFTRP1JPxhSHMkTWKfDxeYcQU85N37PqdJAEHy",
  "key11": "2aQrShzeaxP9renqeCAQPd2RKFhdawpjpEp93HAnHc7m7DUyAutZD9ZcwURM3WhD6XAXwf47qppVhKgpjdMWM1Ee",
  "key12": "hyjk3wMXCyKSr9q3cAc1zJWhnp17HfYANd6qfCA5AuRja1zbANMWvULNWnrUaVoqrvdPogdf1kf59AsGxjGEULm",
  "key13": "zUQtRYoeKEJKFVACDyhdAvzD41azdtMr1XApRPQGXk923W3FLBJznmHdaRshn6gbdVW3StQ8SYZRrumszpyqKu1",
  "key14": "sdhBN34wQToKqGUs3R73ca6MDUz4wbKQKAjngTv7atG8D9udHyGdX5exSsRJaTCAmMG7Knf9gDXVH9FhUpp3hQa",
  "key15": "58mZdHGiGZd9SvmSYDMd6hGJrSc4godjVuBZcZgEtogGrSps6NmoAEUyF22ZmGgAzNbubSZDca6j6C8aaEx7gPMM",
  "key16": "2Vr39XVt7KWfrkDgW1qdCn5iz3DGnJYHpT8mmBxoscFPUAaMwMaR65wUqHQpeSqcvzmvCDMkG7dMW3sTKE4hC7r2",
  "key17": "3L6wHNM3EuTrfyF7FcbNp8REdW6UNK4ZQgSsB8tWDTrue8SNHCAJwEyX3W3TvfnZSsnamcpoJ2VVg7ayg6BD2eco",
  "key18": "5CpgpEPubqHmKkAb86FD2dD6oGAVYAKbKEWuoStUk4GxAukUkNx14tZWDd9kdcDm5MVpoGcGXkV8RnniTiPy3KAp",
  "key19": "2ECpES9xyJQqfg4UbskzG6KGhcX72BAS4fVibazxEpgth4YBQo3SLV7GS7ZGJqioNZRQVKUwjMfyHRFResaQWWbG",
  "key20": "5xEsngcWtoy8d4hCqCeyWdtyRk7FvxMkwJ6Mjs1m63W1C5cobJHyJcRJpKji5Eg1ubJ3w5benGmRpaqBnvnUWiMS",
  "key21": "51UbFkAkcQJ1NizkCSo1AJk5j3sjYzZXNuhcvPhRSpjqFXctiepAmCc8vZeNMa1aMqHtLXKgsgrQaj16dvPrQJ7q",
  "key22": "2KQGZ7eKsYcKpF2ZM5jUGtNJJS1CZSUDszhQTuuRskEiUK4j5g5PfkyW9Z3ZCRk1pTvwihH5Bh1cZjafXxMvWwPH",
  "key23": "5F5e42R1KYjgrq4qnRkmTGQkEfY4QKyo43ZmkGjFpWDXa5f2V4CvfRNFJjGwL5HCaM6d5GadZm88fHNgt57X6Ae3",
  "key24": "4SKDmzLU4wopy1kt9hcq94QximeKoFtnR8qAGTm1uLsoMdzGMkwjvSsekcYW3vYgi4t3vw6BNUveZLH8NJyMJLhM"
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
