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
    "5EMisY46FkzAsXnpLoXa9FE6WFioJ795utTGRcExM29qwYM7rPebErYXS6srSoSLvN6KsGiEhUJyc6Ebqp2qCeWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATTefU2jUjmNuWBhLiptuucES2R8q4f5ANBZfibeyL63FpaWUqSuMH8xw5rGF3XySJ4D9Ciow4X63wZrZfndTSN",
  "key1": "3SGmb38RWBm2w7feSnsQYAD4Uj6ShCaDQFpfcP7h2gW43NmSKmvWCTCb3TSUY9Sea24Kx1pGKQ4FTfLP5bdM6JJd",
  "key2": "66xzqAfYbfunhis69qFAaxbehPD6LB72BokYvfFJduFhfHB3eyFMpA472TDvjJEChzGRWWPMF9pGGHEyKUM9wvH5",
  "key3": "JviKhgRvxhxXJMrPAMGY8LjRwq6TEkG2zhVZeiuNoLhikBtwERqeyop8YXdbJgiEZUQZ5XT5LS1Fv7nTNiQWgfm",
  "key4": "n7AWUiinhJPuvK9VrALtakoTX8RX7tVcjCNLRBKSRk6h4h6QrdwfwjuEPuhb7jYwfPYKgcFZ11CBMerR93cXVGQ",
  "key5": "3jdXJP7aFR9ZTPUbLhe1r8FRfqtaFeDfV1CtMcEy4QdfT3hbr3PqAQXS1PZYWmYVkCuVbZ2C1qHTc36fsYXdJ38z",
  "key6": "39vF5cRkQprmciV7bU8xBVXp4UGT96G6soAvb8jn8To12GQ3odrT2Nt3tVUBHLkuKekdNW53ViFrwWFppduMuR4T",
  "key7": "XGxLdDnez3jxAV7V47aZK3dowXCURNJE5o8FrqcTQRHej2EWSyZ8RDKfPRveqkmHgHg7nmMuWNkvzHDwWvJbmwk",
  "key8": "gX2ikrd6oAEppFJy4fRNqsDvfr27ts8uprYmoppRYNuP4YkMt774GsUuKX4DzAJcBnPe1tsgti3he6VrR4xaNpF",
  "key9": "4ZCfWVKrSYC8ikLFpKFomMGnFk1zCdpBMbpxmcpPC6iFm1TvWFg2L8nxYdYhABgjB1RvDzNTst3xSiJLJMzcsVuk",
  "key10": "3aaoi6i9eoJciN2D7Zski8KeCjW6vX6PB85hVNear6BMdzDTZeuyE2WCw7A2rTCuHyMAeXpLgWKjDLSava8Zwtn9",
  "key11": "2M2Vc713E1Tac8Jf6n7cFyeDoN5WvsTeTStLMAsY1NWu2BBbAD1yGkcAytja3DEyoDWHDy5nCtyMWxY2cJwQiVkc",
  "key12": "VJEDj36wr1HGcEB1RQCwfdpkWLzC4otuoZoufjhxG5KJkPR143QJPvVA2pQEcE7h7AuhX892bUBw3XS5dqAEmMP",
  "key13": "53fhaaFiLQSRtfTjUh194i4k48JFsXoiRJYBVqdMZfe9HhqWCnLWu59eqPNMjQFgB8VkHPX1JS63oH71E29M5SeG",
  "key14": "4kyAJj96pXQn5C8n2aosS7UWTYbpcQtvDrrfqywWi3TQhA2RoPirtzAH8zzkMK33i4pBobYxt9J9rSnX2gaAHKnY",
  "key15": "5LXQrYPFsHCb3DqQGG6YBt9VJRsYWEKtE5da3tAvnKaHvQCorGMqAircRuSCwpTeB8hQTXNYbe97MFn888qmcNG7",
  "key16": "5MBe566w811QyJ3GxCcWSTFb3DZFNqjjLmXcW9Z8DS27PFGoDPFebUVEX78TTDUtKHt8z6aLc2cb4PEWMEGxgBWq",
  "key17": "XJJEAeGsoshk3coPZwjWm6UCVwPWX52z8YzvhNWB6Zsnj7VhtzMqCTfNrmJ7VWtXXaC1yhDQDz8GjNyH6yiuRsi",
  "key18": "369UKypXwrXyHWXX65ydcy3opy3ZMTgKLR5dRYRLxNpaWZQ1V2wp12L4XNHpZ6kyrmoZbcXVH1dHmSyhQ5Pn7TA3",
  "key19": "cRaBYDpfkTGGYCSgY3jPQkfFWyLxDgYPe3BNNDsYap6LUqwkJnfqViMgRn4QEX5a6ovDoWkwujWKnrHTaFJVSY6",
  "key20": "5CRXkLCLjXkn4zAnReY4rKFPJEQyFcDg22mLUxAnFfxMg9JVo7bounZzAQtdGkj8ME5jsbc73eVv36VAFsjp1KcS",
  "key21": "2WKqc3J2PqKg5riW7LKxgSTbCCDeebnaidM1zqcT8oAWKQ3tqgnfvu34fMaes4gxa2aF2F32dpxnJdsJXz6rfjdD",
  "key22": "51qZ2iJYccPykd2NbWF7WPDLg8LfmuaFij6thFVbEgXnaZcPpqrn6UuPbY5vJtiC77uEtcUNBkxfHKryc8gNkVM9",
  "key23": "5PPgmcQ8jxy8Bswn3Xn2WbzsXbWB9QwbfRcS7yACRm4dbL3XTvTdJ4YHV8L81y432tnjBRu5Zpgd34TUFs42XQw2",
  "key24": "5kMiKp4DBdnopGvBN6btR2bHrQ9BeLxroJGVSAN6jjcHKtMN4ATSR1XnzcjoA6zn2o8Ha354m4u3c97SPvR5ccdA",
  "key25": "4a4n7kG2ANYQbjDy4TyLq6LXd8v9Ao1dURVFpQRUDu3A6S1uNN6egvbPfHxWTDhCwTDo9MbwcqCitQSKEXbmvfUX",
  "key26": "25Prtt2P7MefoJssHDt5cGQHPUYp1KqdApRSbUVmMC87kqquXdXPcwg43XcJkvoKyMaKurpJGF34PX4g5jLXAdip",
  "key27": "3YFaJkVLXDdzUERz3i1W8teqpRp2AsdsRLoaEZSQqJ3fysnuwhYmHtCxZYXEd55X9fa29viWj9ujRh8SRwMBkMUJ",
  "key28": "2c6oZZNtSVeRQxWasMxSyhy8nqeseKz5ByKzPo7hmXcu1WGqEKPBM6Jdz9Py3VvR8LdTjHsFmZRN1UhPhGCnVLRh",
  "key29": "52eocCgCRjHomSVJ4ijyFbgs7ppCZM2C5SUQnxfdZfGP4rghvyCa2YKFdUFkmTtBA9PLsLCa9kaYH2msY9Aatx4D",
  "key30": "5d6VXz5cwbUXzK1jYo1sTTJoQ17VjCbeGMYwQZ7iKvz2BUR2NTupEGK5YRQufyhWDVK3DDQYU8mPY4swZQQcFAqL",
  "key31": "mW2uuV3SYe1GdSS9PdJbdD6NhQ6XDD62xfWjG27kP5YPKtq2UKMjbkAgLEcNJAbaBd4JDHqdUUh4GfGe5aUtJjo",
  "key32": "R7iuQoQJjANmeBwEgPVQkfmLwvhmTKbdREoZVZ2nii3tQXuoVUxmMVsa1nd8fadbj5kTcPiPWXABpWt2xcjMp9t",
  "key33": "46PEEL5QgRtUQBcsdmWXuihvb9McQpGRhg1nxx5bxb2PvNN81heczEgi6GdhzuC4yZL6dW7cvdDCtjexuyEkRyZr",
  "key34": "C7bE7bkchUe5Wz9K48KSr1UCWESgFrwjS5erMbHBekuV5BNnZQD3MpQXfq2dLEqxokeYZMYatihHSeqmXfjdquL",
  "key35": "24i1dkuXZMvCB6HhnRNnuucw8yQVTpqhTWTtSCJfTSkjzNasMQDgMeAzBrEakYuyHde5KNGdMHE1NNbxFhHQgoj5",
  "key36": "4VTgAXugaAmfFvb1PR2iR4KCp8kZomUGUmfZu6kCawBo332yhhve5eEJnqWSy28tBEhoapma8LF4TKyL5f66VXyY"
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
