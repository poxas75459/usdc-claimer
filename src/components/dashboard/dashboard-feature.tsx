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
    "2TAMXwygrHNJajS9VsSQXaS85VixLZxKFyY7mWsQ2gZGRFrDxg7fj5Q6Zopm1ajDeETazCpK5ig3RRbuKAiwVKE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBZgwHnhTdCjLLtnhQV7phZwY26zsBw4xySeUdnXTvbhCvFES2pr8FCeeo85hqa7XJcG3uQd4nEeyx1hUCGJW2k",
  "key1": "5tHhuTqVJ13yvFrHWghmJ2jmfNaEgzDZKkn1atLdZf2ewub8pV3J1o8ZA9xN7g2Buvmv3HFenEvDMQYMyqMWaXsA",
  "key2": "3V7XdH8iPaQ2tyndmbb8Ezsx7B9548iM1nnGsoYCiGFWUCRzYToNNCRthYNTe8tSpWphnqbVLbML7Sd1kVXCaow9",
  "key3": "4ja95SppTwkv67vJY7xFhKwNKA1Le58osc4ZVcd4GQ8dXPt4qKhYrmwny1Dh2bphKCXzKZYTtFqdKLzWn8NDtfB9",
  "key4": "UFraotUpRjkgTzU2wSFhtaCFYkW2GyDdqCu8TBbpvcgpvgF1yKjnBTRe9AQqZc8yatNHDVWxY3bdNfsKrR48wWB",
  "key5": "265ke4VEJtV5VSnaVPPrHurYgjuzWUitcNn5ZjLZRpkRcqTLu5FANqjPwv6imZ958cqcj8R22zucouXPxW1DeyKu",
  "key6": "4jQosExL1KBPSM6NwZxn6zhbjVmGoSjkhPskkEw2Gm5mAGmrS9prqUtAwdc5ZVHmV8gW2xrN6ggk7mNExk4adY7d",
  "key7": "15tzJ6Vhqyv21Pehe79XyGA8ngTADpMn1GCMDF9hmQc41SFG98BuUcr6C1D5hCd8pgm48VCeZA2NW8WyxYwLnCE",
  "key8": "2wkrgvjiGyeDs3rvB2YT79NqZXSmNVLJdqBeWC26ZdHWbsyRgMRsJ2WpqDHmkX3mW7DmwBp9MDuQx2vM4n3r4c6s",
  "key9": "3RgaG3fae25GeMpY715tjDDzRjcedXA1ScY62f2WuEdphhGEooCZbcSC5kV2En8psNqoyM8Auv8epcacjJifAfoG",
  "key10": "dXobjZgqUbbRpytpSrE4AWiBtzoqmjKrvNJZmPVrDoE6HfMNNvGBvbUVxFxwCo24ZhskLPbTHBBbZCTg7JxXCGs",
  "key11": "2kxJkQ2iXLaHcYLJWMtsWmRpLaYbs3hV9maNitzJSP32B8nVL6yHguGU8oRvEVKDhq9qPffjppvuLnLcPZKWN4Kp",
  "key12": "2TzAW95aSTpKYgYHxyrwPPMTg4PK1TCLQNmRh8J17veawQHnWu9XiV6n5mtNJiRcTusrDTMePEowyA8VoVv1dBiG",
  "key13": "37wZ9hxHkyGqZR7EqCytGgV2WShDTXr1seV2x8rTmDKfs5xVSgamoaVAt1Tp1R3EcDTmr7mTNypREcpvNWe94nid",
  "key14": "27i7s9rZjn19nBLQfwPLnZ4JQPNgEiTpBQecvtSXSWurXok5RKJguE8NFa7codkRo1H3edxBCJCwYfwAdxJU83oK",
  "key15": "49XGTwiNWkk5F4EzY9wz2Hj2K6rHMKkoyscjv8tjtv1517ipoaEtFsthz1yQ1xhwDEaqmr9rpyCh8doaxPshkM4E",
  "key16": "42o9iGpTNwCHeAUBCkdazoyAWL11WLf3J6PBuiqDi1qmHCfoqDkxzG8aWVQejwkDKy8BbCDqFFNAyirAoFD5uueB",
  "key17": "4nGbETSPM7JkVWr3LmbCQEqeBTiLSDUdSwJ3jKnm6pm3QMEHUf8WSRKbQCThTdfdu43rrpanxVP34jv7szt9c4nW",
  "key18": "2KAQUfQxmwxAHeot2yGRwwDcpNPWt4uaYPDJkt3wtHhU2xE5U84jaLXQpzcrPnFt98W4Tn6iMtCzLBPtLh5LyDtY",
  "key19": "39qT6wJGdZZLWtWM3vGcYSLLSCT5W5Ko61LFDxJYyta3vygi73oLE46esRCJidjJvhep1g97ncwuEQbL4VvoeDbS",
  "key20": "3CFrrAqny8TQ6UQ5LXoJUPpprMTGzFVwMxriY6srN1Ve9Z8sic3hg1R3CeKCDYMCPUNg3QWY2XQ17AkcpXKiyZP",
  "key21": "cuP89duTjky8EhDgMa1Sx4pHR3WVrkQaZMYrpJs8o3CMPu2eiftxfsQ9wyp8N5kNGh4Ao3NucutVZsfGF42i69M",
  "key22": "2f2DE9FBx6R4zFL5nS383p6A87qioQKVcsoJZsV1SoTV5166neVNyEXVXLi9jRxDYErudQJYEC8ssXRGSyND9QLY",
  "key23": "3WV4tg1bCLfh3NnSDYz6JhUtzv4fEzqT3T72GLRK9XTKuPMjrkTDXKLh3XVpB73iWeFHKvQ1wj68UukuC8q8hR5Z",
  "key24": "43wzy9SorN7i8VYscogVkdED4niaNo6otJiEiuVWX7Ch3EBkULTr9seuc6htr24ZRGk1v7W5SpKep33i7nudDDJ2",
  "key25": "4rfijFyc6ssfB9xusRVeJaoGKcJWj1Rjzg9Uk4GLaYmCJGFhpdfabqPmxWAURTPd1SrpYgAT67PcNxA55EVHSRy9",
  "key26": "4hmhdhWKgyGP4TSUejZik5yWXMWTq4E5SPkQxE5Ea94cLPddca8ByiCq3DxqKdYHbSmmnKnhfLbCP1Lt61x4yz3u",
  "key27": "3Yf5MRrWJAgv6Kg3RwcvaNkyHmBzYAmF7gHgCsL3QDvTWQc51TFvrAmbBc9YQMiohUwQQ5RGUZdyKWN3HZ4McN1A",
  "key28": "4CF2Vrmyq5xR4f52y6zcrJ5FRznoYc252KpNiGRHZDqXz1bZcnX6N1SBdUkn14KUY24NeP2KRfYpoYZzQj8cSo7y",
  "key29": "5SLtiLSykTH2wGLPcYQHiunGEfVz3gkKVFnZ9bXzNphY7douXU6FjQk2PxPd2Q1vUt7YxLmWsip3NfNoNABEAsmB"
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
