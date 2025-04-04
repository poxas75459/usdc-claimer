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
    "ZauCwKsvcB2VcB82y85XBCb5rJADQR7NyUmJo5MMachiaWepKMTq1Rf3KYxSFKSbJfZFB6vEdAjbs64uZDBC1vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5CmmSn9u2QHrZtzPb852FeiqrPZsEQNuAGF5vQ9dZnoYiYs8cGG6UjiigchBsKkBsMEYXPGr8RapugBrqzpfcU",
  "key1": "2ZJxskbcp4B61KCJbg9JgPLL2j9RxRUFTUWTrrdzKCjhyWyBy7oSW1csRgsLcD5vJK8WecyJpWHGFT4MziTQa611",
  "key2": "4mQ9gdYdgRV1VTNnR7cYRP7A44y1wywpQDqivkGJ671shUjezmGtNSZahax9vFsjPSmUWsEJU4tyVk5AL7VFAoGg",
  "key3": "3v3BVtfbBjcfh9hwoN3EPNYqdxu7tX4kb4e6n676sMyv74SFuU6PRTGEuDJys4vRWT4QvQBwVLBDwAoGJXQuuCxH",
  "key4": "d2gZ4sTRkgutBZ7BBTa6wuYFzutHM5mHKUpoK7E3JLYyZByqcbbQt1GZuTNGgR7BeqNGdhY4nfr6vDoSEUtuocx",
  "key5": "EE6xqMCGGeBH3z4Ygwdosbt9Zox61aQKtZ2mZTA2qmcvWio5LniNmKC4tAbUdhS58Wyd9QmTfRUQnQBbgJqcfe3",
  "key6": "66cCy6HNWpmon5vqWBL5BL6uCouCASSts7paYpGULXcqfyhAu2p6m2QPKTbvVQ7aHSNMSegUuRAhbnCXcutmkyNv",
  "key7": "5yJNqKxQtr5yxv63oXWVhPz11E8yts5QTA8X5Ptz4DWxYpm8tbEkZsvi4wk67WmEmzd9XPpmAKLC3eBNvyjBAHJz",
  "key8": "VEbj6yrNh56CaCAytMRfMPMZH443o4ZaDnW25N4xWdL8HSbVA85Q5qDw428hAy4AXRMkqa87aaoM7JqVoVqT3T8",
  "key9": "4m3yxzR7LNpZCnmWy9bUsh6N9evd3QZp6ETzagdpEpYBdszmXAPduexvMw1dsBamepahTpjyscKS1sLq8B3vd9vx",
  "key10": "5ksBGx5kv4TAhox7z1TE5wasQkiLYqnq5Z8ux9LhF4xdK9nRBBz4NkUXtGZVgmJHovJWX5RLJqsQdKLxgP98Gb6z",
  "key11": "5k2q9c2xCZkmgTfEetJHV4FSd24iQwmUe99BKvZKx5JgNrdU3CcuFVLd6fk2Yik4A796qoTS5Qea445WEo2mxWGU",
  "key12": "Ua6ic5DdMcuiAsAW3Y5fDpKzZXcVhnqqPfZxfv5nhtaKqUQbZLWJjhX8JNCNqhjC5DkrRufxBRrTvwiVRPGTnVs",
  "key13": "2N4LbDu7kTfPdebEj39W5g4bcTNqApYud31r18A5MSffoqZajduyeUJyebNjbyPtNGwbU6UwFMULrts7HU5ftXE1",
  "key14": "VAA8mg48rPRTgxsKnfp1SBVbrq7y1vd5YaZiAADUXkAN3GTf8U4WVaehe4qDC5LZgNyHKhxuQ8Bw6iot1B7Mmgr",
  "key15": "qUrWs9ghMUGkwHvzD5EF97qqa5499byuCfy3jzYsAWU1xr1if9WtE3tgx3nR1tU8m8kM1vZQXjnYjy5JBfncTkL",
  "key16": "3szsau863QqwYBXkkUdP7XYayivpuYY4FLy7CK4QHXvzeXZAVVFzcGLnNsvre4diiQPEVnwPdEZeMT35FRK96D6Q",
  "key17": "2NChakmrj6J2Dfzq3VmQNrcgHfyMkSFQyZZjEuF2ENLseeT8brp4vkiDGybCQEnd5S4yXKintgFUAzTeRpzde73J",
  "key18": "4cAskkMseW53grLSEdc2vWiZxz7C4rivVxJiqnQ3t6NgFw1QDkrV3iUcFejWaQzYx5eyGFeUpSbdhxpF6Q1nKTKm",
  "key19": "7hpGhX6ZJnGNLLmE8yiTT1xCQoTsA9b5KeYLwXFuZE37Xfr4nqS9mUmQtduhMAXgEs4aiSLBwQtD7KCZHHenKAi",
  "key20": "5c6B2XH5xrAxqoDg7bPjsBNFuD58UNPuonftuooBRkKP7wFJD163Fv6HFqnekrbL1H5Ma8Kp2gkHscCdYBbGe7me",
  "key21": "4WddgtBpGWLa41af4a37vm2DdjPL3FLzaFATbdKKXTTc3gUFb9LVSZR6n3ZsMJ5crqHWwjM1JKvjPSKUqkGoRKnT",
  "key22": "5Sw4cZ5RXmtkyATMt8TEfriDk15grSix7SQFomPBajixp9FMVsaJdWWiUraEXc6eZY8hF5a8MkvNzXzMhYRb52Xz",
  "key23": "4tdgrQhywtYpSYYgPb1DpzZ5KEYNRbYtWXMAqaLwRNZ41ZnN5TpcpcRK5nSE2ViEuLM2CsLSkHHUZvuD9VEdezXK",
  "key24": "2UNU4DdveskVS4wvB28EawRsy33mvhNCsnUNVgqAnREhoLhAUe1vXh7zthKwhehA4Qmqw9YXoZQDF9M2EeEB7GEV",
  "key25": "2X51UrxvBweVwys8R28p5uWMY4Y4XLbfhJniA3HUqpAwYKjZXeZQW5fd9hF4mx73qt7jq1XB12hsd7QWbFkFUbsP",
  "key26": "3AtyMZNZACVsyqe7WSYrRZtVHPnZMM7sbmLr5bSVMURsNDYzufkfubxkAhcwceiqMpHE1ic3zh3W9hGoaV9Vt9pV",
  "key27": "3E3z33Y7XJeRCZWpqeW1QkbQCRhWormGseotMY4Ed1C57qt5wXdFhNus4sogpjnkX6oV3aXB5AKovUfDzihkQroA",
  "key28": "2JMyEyxVw5aaKcoirsrb3NEGfzLHzqviQ2fcxf2RifmdSpnqMx38e2EPtzJZF3d5FmpdvpodksvGNb4MnQ2GNnJN",
  "key29": "51Y7ptAqTih5MLNTaXm3PmEfAFn6W8VWLezd1xQ8VcjiN1R1ircReWVBdNeSw26fpmzCQxa4mp8wCy6Qwd5BJxaj"
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
