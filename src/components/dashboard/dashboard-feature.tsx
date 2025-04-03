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
    "2xUmgRXJBYcMtR42An47SGkhgfjxCmCJA6tRK7z2K7vS3sif476PFJiovLPSq4wFdapoRAGwtVXATyWDLFM8Yv9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r69dRg5D9Ns98PFVRd3sadXBS3Leg1HXz9gRegaMNUnG9CAMp2vtMkJ4SuA7aWDzPEUCFSEwaCHd4W5nDzqkKSx",
  "key1": "5gpvxHu6g81dbkd8RAXFWtT9q5eHHjZmVMUwZgCbNyPHVxrhXdxDcA7y85R97aQxSdzbNKtTmk7Vu8trEuz8xnRM",
  "key2": "3UTGdBa3xPoVu97NFTwceZcojvTJM1A2oQARM8UjdGaRedq7cm8Nj2fq2AfBGzPKV1dTxg7Uc4f5UoYdBFd8BM8W",
  "key3": "5okj24Tat32ksAQnQW6nxyiVuWcCD5TLTy81pw1fB1aH7qM5qxwXDWRu7M7XP8jfwysewp5VbNjTaL7gCVGKLB7U",
  "key4": "2oZJHK7zDB7EnHGP7hLX6mKEsnS1uZcXgzwnLLckGf6hFUXbcXWFge4VYLa4KVguHWXwRyJ6PfREzjmnhzQxJ1ZJ",
  "key5": "5VrDiduqRfZoPF13FhsZSPYdjhYxJZx2ns4tRRcAvHH8nXstokewQ3dQdMGsPSMo7oqKqtvYpKLhLLkRkHy5DKYH",
  "key6": "4z2Y9ooFQeswi5UoE1gy5Sb9jMxreH8FKTdBhVjhCD2oPSB2VqW1KPyDg2RHGb1Q4MHXgbiZ7cNpaK14xDrg6gEo",
  "key7": "21boytBKXchqVqfWSrJxpTbYQf9LjeRU8ueCC7Q5i927tytXdymzFzXHo8cKj7vuLnqeZJQKLPWVEjfF9XDQ8XQy",
  "key8": "5FHjN8uWiyLwcVbAxEcipSXaK5KuL1ayR17v8uD5dk4iVzy2XDcdnbEhYbG9DzEvd11A2No5ano4KSMgL5Ebbiba",
  "key9": "4ETi7aFeD5koRSzVykB4HHRHetdch4vBhhzsQ9tTMMbKFMus1QrFKv7pRoBGdhwc9t8xZixxb23dog2N4HyFn9og",
  "key10": "2bFHA1GZESUUeYGqTGJHJsnFhJJZLvAULAYXHmjdWB2Rbp3Dr3vwLWHDo8oy9D9VzaYu2fHCwmVxa5TcidZiwxRg",
  "key11": "tCBrxVYsVGdXQEtSYVocCoDrCqgw8APCR1CVEpfGMwYi5VYzNDhd3d7uLBsZSomeGGp8ASfFRQu137TSSLW3ZHn",
  "key12": "4MBZMvqVrNV4EhmJhkAWyvusFno6ACuhWPEe9PSV7dY5R7C2a4gvGeaU2B6Ex2PKhQrTiL3s88Q7n9baSK9Tg1QY",
  "key13": "2Utf5o49La5Rv6SKzjQhDp63YEy8LVqBcmk1hsmhjZdsBDHHHVJ59zDtyj3wTZv5Qa63TKUcUafb94Ai2sSrHkkE",
  "key14": "LZubyzdUTx9dW3dPhzqJLfjVuqPSepzQWkHbbi7QGswKk2KnmMYzGNfGQMGHy4HMmJjGeWVTiYpRvFF11H1v5QT",
  "key15": "3mcjMsscfEhrR1ufmpbFeVsSP85cUQP6YBHzqQFATcy69M8W7Ut65pK2i1tX5T3zcPPep3h4kyyUuXmXpa8DWXw",
  "key16": "57D5xLLEMoRMU4rwzfnw56kvgSMxY8abwvgvG3r8r35KKwMYiHkyD1H85pjY9Kp2FeZpPfjTHsyhfWWGehtHfCTj",
  "key17": "4gNT63S5VjpSxofShfeoFGP3zrcYo2MCni1so2uZNA2hbT181Rosp96H6wNpYZXkdro9bZHndCSyHoKhKNdZ23Xs",
  "key18": "xCZXPKmph8BXAk32rBmpybujf1tycrohQSWRg1adsqws846hNmVeprARet3iwuJHwf4yZ4hb2YzqsMLYSREXmjF",
  "key19": "29pFe1qHLH4vEuP8NrwUvuUHqp8KtQQvfoexCEGeQrcESD6yPxbmyFjpKoE9nARTsqaM6gAUd6Ro6RR7YkRStq85",
  "key20": "55gkTWDqHZ1ZtNoMGMkpnjdv5ybZ1DJeL8B1A8mNhPHuehaQjhDgwZXeMzjR4QA1rgYwQ1usPxA1xGQatPRtSRA",
  "key21": "5dcq4YXj3s2MXGqhB1dQD2VjoLfoYrEGMkWwUAZxwevMbYChPPGsiH8G4WPRcWvfZ1Un4YNmebG1dDRNUHu1E7pV",
  "key22": "4CMzSeCpE3P9AAHTkASc8oaA7sNhSfpzo5xAdzcGzXTphZ6YWTsCrhkfDhM7TEdPiZNQwCywgP3ZxPnEWRviHFk6",
  "key23": "3kaEDaBKjH4wcPrPuu5Pb9kpwFwHauhrKwbMAUiixKWBTZarsziZbagDFCnWRzJTmcnUYtoKqESUmM893kE2pEqn",
  "key24": "J4tCa3mWMD17ekd8x1bXWA8ekio7AdgTsC3cDm25ds14i9kUuB3hNfSwZTpS5MRSULqeNdRgKpbFHtVkFzi6LGh",
  "key25": "33RaAtqKMf3k1FoVP9C2ssNqipo7UYUHBzqd8kkJgAWqrszJjBZDcC7kAATjPjHTGh6Czxsg1Uo7d99h27fsrXhR",
  "key26": "3obKqR4FNxJAhTg59HXb7EMbBzdaqzWHyTs4rC42ijPfK5qff9gY6qknS9b1DdmeihExusGjoUBbmjK853DvYSEE",
  "key27": "3rvSXXMWsSGwfpRTJkJwLLoveF9xo3dqj1XsR2meTiVvdBCZvXqdq3pEEnAe5Z4Ti5GhsQsCG3gMvYdntrkpeQv",
  "key28": "3ex9Vnq4iknk6ps3enNw63LtCGKEuMaRBhkoi4pkjHs1hMCbWtvzdLfaUAXFj1FZ7VpM7mqLQSbEySVEQrkGPQSs",
  "key29": "SoVpT3szkVwbwxhqNFArDiNHGz3Qe514AAn9tt3q3YUPZVQJysV8crfApVwbvuWumWbShXydBMcy8atRL1CzZF4",
  "key30": "3QXKy8HbDotdrk7pZmuC33uo6cURns96XomPYXHAgAuLscmqaicsnv8dxUYYhanqWTNHwwySgoVUDy8qokoTcbRj",
  "key31": "FL4aFXwxAHy36e1Zic9rSLvMgeZrpbpHD7mmTewKQD6FNsqw7cm9NpgPvkMGAa645NbmHV9N1DZ5uqVcesGG9T9",
  "key32": "2NFaNf7aC7BPe1C92GHJut8NRBN5Hmx9W2j3gc7gTUc8mP1Hn9Ks9tzrQjyWJfnzRsH966t1vmsmChGFQ22kroXU"
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
