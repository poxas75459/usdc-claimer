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
    "3vQCM3SxnodQLkDQYXMMzcJmyeMqfnUT4hpCLczn6TZtnsDVKM5RU6XdQWWhtsY3GNzjqiT8VEB6XZ7UiftZC1KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWQTs9hm6h69jZ8u7325m9sMyR5cfGPooyLDgQeXDgAnFHws1LUtm7VBkttKuudeq24WvYNui6f5VttCTLKQoJF",
  "key1": "5MsaXnKYJXJf42nqBo6UDLwtLLEvA9LHykVtbH1pmhPNrZbT2KuiAAoD1trswoxxnJaNGQvLpU836AJ6NHR15seQ",
  "key2": "3m92MKy7vUBwVvkX1ZSa6qxr7nRkNdH8LNmDPuXhehyGt96CcKbkC4Dg8tPmbNA5mb1Lf7EFSsHvBWAdXTuxxpwJ",
  "key3": "zRJFvSycwtkK7h24iXHZPE1CeZ4drrD9GCjPspUUtH2SVQo2weXycrSK8jU587iv8f8yGpjYrGTEve6AwgvWWLQ",
  "key4": "4VXp2erFoFWz929VVB7mDYyqKNg5W2XwTtNvoBW1XeRbs1h9baZNzEhUQPNkMSyEGV9mx6C6zXJQ7cTfB28CRcZj",
  "key5": "5rsgC5kLo29M6iBR9xRXCa1MiAkjDjWRWNFjBc799HFomao4dnL5T8zJJGesic7Twyi8i6wLnTUWwmXrXqXuCtN8",
  "key6": "4MfC3dUMS88nRjs8ormZkBMTf47h6iX47ks5GVuGfiXLXRpCQ9uAjvWa5uc9fVzu7qfmUuY9GmbVvXoLUuTyEMiV",
  "key7": "21nRs8Ner2bTTaJiSDrWi2iUcMzyJ23tMDvLzg8JtMsd2vxV7zxEQuGfabCS5gTcPY73ZaMBN8BBYZWkZemErNpX",
  "key8": "6KcJNV9rCSX7uyjofV5Kw2jLp7vvoADPnxWfWvRgQ9W9VcZu78NpCSAg6Mwkwqu1cmpVzrpyxvVJuejAVbXtjWp",
  "key9": "3qFFgkpjcRNjJum73tNsoLQRCSVBG4ubZicuZ8MTv9gYrVyBuFSj3sCMageTjxmZNQ6ZLjacTLVjQ2jP89St71P5",
  "key10": "63SPrdj39bTkHpqjsj9xEcEGVTYckUvJKixyE1VLuqPg6uucaSD4LdrPHrVGwTypYmPqUQHWK5Sai8bxrXtGkxai",
  "key11": "2BUf1grNrU4QrfXJ7pq3nTpTYzt26TsSjkCEtUyWfGWBMMLJDwuBAPeYu4muU3tczAwfrENrtVTRYhMwD8k46BXx",
  "key12": "2q6mz9kARGW43owQXGWP9t2rqwNJfi6tgJ6XDCrQAVhG1N3BdmgdNH5PzF59zkoXqnfZ5q67Q6HiFvUDYezB1ZUh",
  "key13": "5ueNPJYARvUhupocdmLdDcGdisWF3wEUkYzrRCaC5tJ42QqDxSLebegg6bLYuonJnMYFo4zQPwdMn83oUpEFgGxH",
  "key14": "CjJuaYaxG5nRaMQSx9JB8t813xHH4oC2XnKePZDYoKAW1VLnY2VhXjs8vzCf7BoMi7M5fBuCKaVZRknY3b1w2cx",
  "key15": "2K78Vf7F6aytz3xYksL6psdUSc7yG366P9HMw178gfEgyyZwW3JNX9VXJ1fWjH5DJfzBg2pwkTLHfEbsKX4mJsKm",
  "key16": "455V25Ra9fi5YB5LzoYy2vQXw9Wzr7YsorM4V3qVejaFcfp2xszthFBG8LmZGHK8caLbNtmYyWTnD7gzEAbn4Vjm",
  "key17": "6AqAiKwgrVTGatKLn77n3zqvXWJ7pwdLXXn4zdtnTaMTe148osqfye4bddW7ovpeL7JGHQCvXTHbowkDgTwzjqR",
  "key18": "2m4s8qjG8ZM7CLd5nt89z2u4shDZ8RqbeeNUyS6EosJ6xjLBQ1WSNaREGJd4MTWXgRy2xECWrqkMPb6hdwWCcvYp",
  "key19": "3zPwPxpg8iXQBBHspQPtzJzbX33DNKAYb9VhnGSHVdKvYTFLDkyKXWn9GwuowbAe4XX8Hxdpmei8tpJqL5jcn2Sm",
  "key20": "gYNQBqgCtNt7FsSydWFKM8HXyWD1cYVgQ21SZ6Z6oNRa7p5xvfTEHucPahbMgvZaY7k9v4JoTqzV7nzgVH64faY",
  "key21": "efevT3w38RWHC3BieWCJYztMA34zS6zj9PwctCq4TUCLAzkhi6kHezBtN9qgmsCpdDke2h57YW5qtTyBofd75LB",
  "key22": "575uXUjmFZcTqK5nLNYJaPna32zaqy4opQY2dYJbq1v7AGvDv73SPPE9RQF6RCMFPeDvv15ZpZdgFDTYYxfTuJAX",
  "key23": "4R3PTUB98j4WanRVqCKut6vqw2DWKBDGD5PujsZEugCjh2ZUciEDZgDzimvRvUAry3EXp6K9AvKJNU1zDgA4XwzF",
  "key24": "5dPXvTevvUJokFF62FwZeUTPzsVvJqFFCLvaweGBgzDF7Cvuk9RFTnZ5Vy5cKg52VNRTHiSTSko2DF9ZtcaCqErv"
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
