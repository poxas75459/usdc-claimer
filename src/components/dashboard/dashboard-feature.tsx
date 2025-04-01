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
    "wJ8nVGYnmyrHkeSHvGVdV69PAQHojxtTdpLNkt7SK81j8seWSqr4i5JDAFTUea3uuMbKd9moLoN4GuUF3JSYKQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LRvxyVJMtTzDLGhjQSNNeJ2HR3DCmsXcipQr45hu5EQYdPXgbDQka8pYHZS1b9S7bb54PD5RCdTbYCZBu9VRDjD",
  "key1": "HXv3UpzwdF4ZLxfqHF1fsK7SFCSZrf9X4wLzpvWSxApGqoZzRKJ2AUkjyAYBQz8aAP6UykKCt7d5butg3eJGDZs",
  "key2": "2ovH8bYtULAdVBhX9aN67BY5ACoJGaRZ9tpAXTm5s4x6HZDG8RKfHqS53in4fFSCA3u5QbZPvEqAM9nec3VqFRmB",
  "key3": "528kPMKemiKegPMuFREkrDooaoxnJG4ADtWjpdS1oMGN6kb4UvE2Htbcyz7hvCVMimSgtbNou1VtdnVxXENRdKAG",
  "key4": "2khEFd4QfwSmuXXp7fqj2LkZG6qcmyqnepby72BZMLKwku59zxkJNCMAvrQ5i2i6FVM2M3CfmsUyngq47HCCtBUD",
  "key5": "4XZrRqWP4fqY6YvUXPfvRGetrdtMXnbuBUjSxcNwAFg6eBG8gVQgVFvCYnakuzw1sNH3m3eWG2FWHLi7NXxtpgSr",
  "key6": "62aBc99W4DmdskunoyvYRZX6GfrbgRN1Qna8NiSNCKUdNRC7gCtpLTzHx7tt48ku5pTMMDXyRAKZNXJFZ58LUvhN",
  "key7": "4AVAekfE43nx9j7GLjQk4YRzywGfDbmpgzTGAJ2GKHu2RcMzA4vt7Y1mfesUocZ69Qm1ooSnLUFiVjwuiSdn8jQS",
  "key8": "3Mk5JhVUKGZ4TeA9hfSefPAfvzQqJ9MCxzwj1LcF5reiAfsEdrFjiBgGEtU4h2wmMLhFLsNbfFmzkN95bgifs1k",
  "key9": "4HD5EXWfj7yuyhtRhjNZVEeUkgPUfsQmk9gkET4HwN9A3cr2CofhYgUwEGv1ZUqGQPRdqAXXeV3U7TPST2pNeaiu",
  "key10": "5QgPAfGaSwZG8BomaEAxY76SqHkkBE6VBMH8Y8aCKGrM5bypkemhyMwBBUmz68euBokcfGvw1Vr2BiPiRgbttzVT",
  "key11": "3qMKzKh4o51YhbuwJEgK6ifUdSytCbLSRTwwJF7NcpGYZF5K2e4mXQTrXWrUMT7v592p1DwiERvh28AifiYVAzkB",
  "key12": "3NjTLUjLcLejAMLjzfNuHVvSsUcLcYQTRscvYiFDebexBUMASiFFiHRHRRQeAphypvFBez3HwnNDTbeH6krT4LTh",
  "key13": "2rmRRMBzY6TiJUcLMvBhwjWo6U2Ja3U57MhZr981Chwupo2caC1dvUJZKqDNYg13wZeu5R11i8DKfsBbmxFnEkVT",
  "key14": "tvq9B31iN9VRNqpTdKH3g9HrdQKgXpkA7g9z4eRshx37nVjFuAHNESsKYMZA9HG3utiYc8ZP5zFnfGzEwX32rzb",
  "key15": "3n3yhTJbJSuLX3TEGB7U1RNwiN17XbCBP4QK3xEJA483H4Cm86YG5NYiyi7SAUu9x4xFKNKUyW74haxah3fPT38b",
  "key16": "39W26yY6PwPxxK6ViH51AjeV8uDsWa5r2PdRrD4SpQ3qedZQVToDNdcgQFrPAZP5gzfp1PKHLMB8Bx84GiJiCuJj",
  "key17": "2uS37bFzHNpTLKTganPJrT4A5nXJn1YYJSTf9U3DUAF9eNCuezJdyph1k85hW6Un1rvP2uy69ha4MLNhH2etMzhK",
  "key18": "2gTg3WryJxhFRN8PDNYxzJqYfALEvqR9ybmmuAqZrDUKK89QshZYxSuc4RNS74oNTvtQsqUKC1Mo28yZai7K3XnS",
  "key19": "3auuawNMsiuYyaLiNthKBMUdnDy7PfQboMpS98yJeJi7CVgCHHZG5Kcv9TBuwGGo2GaF9Ch2qr9H4Y4NCekZf8va",
  "key20": "3CMq31quPSEoatQ3LgkrfXX7JNkQYML2bY8MArYwtGkDCQWH3o9XqZP52uqmXTB1U8eVwzSETkrDEWsUnQ9dYrzg",
  "key21": "26SFgedN1cWiLGJErDdpEVHJQodTRsYeeMmqfZrR5tNpjYzmzFzLvrv32xvFPAjfg29tGjRdWkrhn39TmZxfBAmB",
  "key22": "2ykDq4KuHLraqAumYwrt4j9LTYxgToTGvaACZKAPEsGkBzwGTV3U7UNGfq4kfTRRseGwky4SmaeJ9FTPHCJ9Ha7C",
  "key23": "2Lu54JMVwPC9kRZH5mw5gc4Hn7fRVbGdvLUcq2mvJqfyDYa68ewS82hTNqjxA9oJtphotgmBBpjL3Lxenh2wBNrA",
  "key24": "N8jQMj9KySUY6YSFwNY9xisVRNgv5bpHTEyXw99eWuVxZTG9QWNH486XDfdn5wStg5FC7d2gZh1KNM3nLkTuYyv",
  "key25": "4sgEfYWwZCzxLAXpVoDFKde3xicnoUA1W1TvnvQz41kpfbjdmBxJrDcZAj9tWoo1Hv7ZHDSbW4ckAFmB5tzgcGhL",
  "key26": "59Cc6R7VHuD6edkYfyUJwNbY7YwrmTpzPKz7x1VsiAb8ExcXneYnadiftLhHBaKJHAFELW4JHPgMVuCjsvS8TouG",
  "key27": "4PtMXb1PmzcAN1nZfenqqFioFnFDnrJZ8cGTatgsMeNbdWYRtM3TdUpfQHBHjwVwExS6TRokhPYjpv4cNeFURP5C",
  "key28": "3D9zGaW4FFFFgmAaov4kD4Et6rLoQzBpR42P8sV2iXBFFDAhVHhPFuwbS5P8QnGBuxXsCnKzjYAnGat3dRX2rfq7",
  "key29": "38uMaBQV353NqG4zUpMv4bERZ8SvaNCEKVrjJp8fxZ4FrdGirS6gSHjizonqFMnFUzC13QzxyfYY9M42UoVmJBhC"
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
