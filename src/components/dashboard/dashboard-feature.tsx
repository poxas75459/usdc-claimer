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
    "2vsknBdxxFEPUuFYTubrwqrnAoBvCtNC5dZx3jtAsrSs9uxiZHJpUPdkrdp3nJSvyKyM74ZxXBTZbs97YcT6UpBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izuNfcSLp812jPfRHxw4sFWFmemWHewj4k3G9eXfqCdwK17DovKXvhBcydSsijNSRguBicWVTFRBjUM26gMCK8f",
  "key1": "4RNdUrN9esfu3o3LhUdU3mdAcrHjTiJNe3r71dLxTz7py9Bv4dAZbWT1J3HsTUeuinpKX43d9cpmGqd5RgwU5U4A",
  "key2": "2kA9B93kYUkU38pH4fx9rBJbBg5gTBfQWeZDrwE6z2BcegZANiCy5SU3hAPcgK4j2bng8j4Eeyzkiy9qqjU3JbCU",
  "key3": "58tBDoaT8gpHHCS1LA8GRpb4ghKKM9rEt8XB3VuEzPbH4uoXYaFzTc4qPHW4v8v7xtF2XfDCB7GADDEcgvqx7cf9",
  "key4": "3vMRiqoBoRKxhLikZyCqW4xMz87MxvY3ifoykh2QkqbBKrX4uTPKbpfTMAu4bnK2TpSLyE3xAYqbRBmPFHKifbu6",
  "key5": "3tGB9tVtUG2nBR2ubfXFVXSAz2oW1HDQJ7RGcWQeGcfTbH88B1rE4D5CEUpPaAnfQKwWtJDA9iwhmZjYBdYNhXWn",
  "key6": "4izP2y2veEXGqiyoJpcQAxn5CcumpmQgnZ2RW2qc3a8X1vXVgS2AFPDQs3VtXCUTSc52q5rcnrqd48HUdga1VbXD",
  "key7": "3291LpUZGZQ4ZSWN1a7H43u41TTGd1f72FxXUFgjGEk5LNBWSEdJiXWUrSpraL1KhiBAEH1Qs2XtucBhRAeFjcW1",
  "key8": "3AxNA2rS3dTEPaYwPBnqbRRm2jYu3GyPBBDZSek2hFWmbMUYZmb3KaUdU5ProxMfR4dL1DfBn5GfkPBGwqgxkycX",
  "key9": "pbkuaQPQ5McEvfSguJzTpSv5w3n7MceZL8XHR24N8xaVcKt2MtCy5ex3w4eDJEpi7Ed1g7h6d7yCQciTd8Bb6QB",
  "key10": "esrnYDSzZ36syFDsVzPDZc7Nz5rArUjD1pdXevb6w7KstpvXB1A1Livoocrv25ir5P7vvgdGb9RvUkUQEuuXfpV",
  "key11": "3UQ87MGQcQNFBhbzomhoWLzreyH6Si6R9BR5XxG4kEXzjWRJpbmtMhRFiTLVPnNUmJGinEsQz2okM9bHnDk7qBkb",
  "key12": "3uPCPoLAFRd8aYQ42SJN5FuXnzsuft6HqZnFgyjUsZYx28bGmednjyJ7YqFZkR3Gpqvr8FJY2f17kYrRJUnnuSyp",
  "key13": "5u7fGXMKy8JtZL27UQk6ENUvECTxcVzyBk3VdCzsiC7h63Hyw9EUJ6pUbcYvftSFcWEx6oxSeucmWNNKJnNcn5tm",
  "key14": "5HhSF4U8pAZy285sCsA1ipPVNehcwe8t1sH95kCUEKKPrKLW64hmuHi463tVJL8RSu9LVDK11Xps4AcqmzpavaCf",
  "key15": "4HqAySwyFczbB77iskjSgsQ44q43be1ubgSV7kTtUWFyXtoj8EmjsphM3AcNKPc1YzhheNwN8VizQByVyY9HDTcQ",
  "key16": "2UiktTFb5uDXpRTY5rUCieoQ2XE1sFJt6saBz9L65zm83pzTVk3m8QH7XCTwy3uabPnsqzUrA9oxrpLjvqCB8tCd",
  "key17": "47C6mdYunwMXTMVoepvHDUJnkQ7VXMVbeqR3duLaxBKbL1nfLHsXKdyZdKdfbcRAWashFiTPBPWS32uU72yJ2gca",
  "key18": "3wRRxNiEyAx3WxLU9z5iWtoXkX7eVBdyWd8pVoQJgarvSNG8AJrCMjdS3hA5hoULSEYhmmNuyyy2sTCNTAd9oEkH",
  "key19": "35Ud4pEC3RMWmqrb1zkpg7MewN66ZkLrSQ8g8XyejAzb4iKCKnc3HcKuKoJ63qimyRCdgEGnEB8bAMZb39tBWRdL",
  "key20": "3xRsWZj8wA7umRLQ4jugPR4N6Enis9Yxwbx8zsaynRd7gpJn9jQHEof8zLEpvkdpSAixDynEqKH66gncJDscivNU",
  "key21": "2opJeY1PZHZ2Nre51b5iyUsrAbYrtbKdZJMiNbh7jGp7opkv5S3u8uxbf4KzszEYiwf9b6MHyTAWeE1bNV3q4hgz",
  "key22": "N3Bdbr89a6dfFxy4pmEG81YA3RqDgwW9nLYZEbY3My9opCvyo9kCR2SBNaSmhgEFYiBCWNG3MDyJXND8F262h8E",
  "key23": "3UZE2LQojAUzYet5Vu7aeLCK8d3o4pGKC8gLoSEj64vfFnd3S5jLvt8c4Fp9g6V7sjUNdD59zu5XZjT8wpp46H3y",
  "key24": "3Mag2zLwjns6bwtuuRJPisSK8cBvWMiBHhmjMkqpyVTSpXujEoYgojtc4oN3nGRfqTpasKSXatGBoY2fYhMBmNBu",
  "key25": "4mRp4b2JiFwvXJShe15XseiEBhvX1fqFL9enLmg1QrUmZnz7oPC3gZAMwsShMGYAnWeqoZs6xQymXeaKJPDJyrgm",
  "key26": "2yuoqk5QDf1w4DxSroTDqJyDhhLPsKutgq7P58C7Mt3PcmBiTJ6BrXH7k7XSykWYXGurAwxUgPdp8Ww7nX1hGNUF",
  "key27": "25nuKC9wgNC7w7R9fJo9isKiuhAdeBy67NLSh8j6TQMYGNLfq5BH8uZC9NQFd7ZQJbLwXQ44CAoFj23efLh5eu95",
  "key28": "2vH7w4AUKqSTMGy1ZeiTyEPRS3vMStMQuNtB5PSdYCR5qAkkgQJ3YZ3dVCFLS2jRArscmkdHmxY6WeqZ9JNaNExo",
  "key29": "3jUxYeufqqHRQJN6K2ctEhVR3C1KBwjzumvaCpAAycgct28YimhtoAo4f4oWbHiJP5uknL3v2PRjZkqYAN8irYj6",
  "key30": "5orNYDezCnkFvotRLasMikEvqCFVyYkRetbAs59ks9nWyr7d3f47N2FKgcEyMDWm7Esjva4TRMPKrPcjeG8EhTDh",
  "key31": "5VgebPLpYJ8JbAoHfMrPUiCj1c7N3nsb5EGTLcZZG5cGZiLQeUySUYN6Fom2YnorY48ZE7xuoGJVRas7YoE4UMRR"
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
