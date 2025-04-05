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
    "4QVCoqVebSAjPgjtAC39aH3boVmR5QyeqBvbndGH7qx7htYNNg1k5d7QreqWNdA2nrkkVpmt5yxHWXzV8h8An2va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkLGtxV7gTqtTs99A8BdE9QvE7dTXEAye1NDr3aJUzBxsiGTNXhxq5Fz7Txb8ewB15kotpeHUVh12bFNdbosXKo",
  "key1": "56CLCB4M7dot2Bgn9Lwfq374GH2LxihkziQWx29BtJ3kwoFuz1nQWktLMB217dN1FanF9seLEphn7xGTLtvkoyC3",
  "key2": "25RxbxytUHvVox86jpAvzDPHaBhMNgMZAYuG6L7SLuUmE8LbpBCxF6VD8UYt4goNcpha82NjZwzmfBqaCjaxLZQg",
  "key3": "zscWwjHMCKLEWBwtJ1NQZtFS7tXEgbj5xt2QPUJ6YN17AiFjdA1UFsEZXohbbuRdxyux5w5wwRbD5rjXRrPhGdU",
  "key4": "36kmCnivc5JgrqcsMuyAwt59DSoZZRLaM8PZc12fmT6Ltk9g2aQzbj129o4vNcyj4wgX8YqmgPmZeqcDD3PQKiGU",
  "key5": "MqmJF2vHfh2B9G2DMV4Xg5DBRoAj3duoExB2EBXuSjX8mPkG4Saf8KEz9maGmskKpwEL9wvZJcr2Zo3KmH7jwBr",
  "key6": "4DkisaxLP1kotumNnYjxMZ2qdHomW94WpX9MecowuokUVhRAUMA6ok8AVHtu9ZzntVP6p1t9zTGJ1wsDsbbfo2Mj",
  "key7": "3DZ9wYcgKzA2P7EBiz6onyncGfC2WVYuad2RHZaK2WxcByQm11JqUZX7DGzAysycmkXqpopGsHBEY3woPXQsP4Cf",
  "key8": "7yRVQ5XVYTyVBEyffUkaqigp2egVNGb1SjREaKfTzhfagJivFGu2bmabim8Jh9m8vmfunkSLKEU6s1J8RMnn97E",
  "key9": "qMGug4dckdzByGT4rX6tEFyrPakm49go6Qfj4bjVLbc3YVbmf8k4Pu5Pe3BCqP3GxDs4VVeufb9qWKrxWaG62Fq",
  "key10": "64vo1jixAMQmqKDaWHJ3kEj8uGSA8ukP7HHi3faMZcrVCsCx1YtJgUP9zyrGpx7ByQDcj8GXQ9uTfNRiX2t9KWiZ",
  "key11": "3TuGmoSkN7P1KksSywR9jNJ3E3Gm3c36tXiXjArmCP7Ghd32G7NQBBfQBJmrycQgYzN8gaVMs8FwDuu269JHW7Uz",
  "key12": "39cSdVc8pwmdK4iWMZpndPCPBnAhtdNWddDt6RKugG5uWk9X2vApVMrmJnyYECguZvKcE1py2YWNTC5mHRV1Pg6c",
  "key13": "33fxPc6tpVtMmWUHdnmWsN2RJJfGawDbJHDvTq73KytnyKgQw9FA2wjs4jUZmgJmvHKdm5A4uPmm7QVUmc7HCfSE",
  "key14": "2setTAtfngN8cEpP95iKFKnG3WEJggQcYUNs5Tv5fU96njW3j8CujxKrt9HRmxgfeWSqPc7pP3AN4dkb7jPtNjVG",
  "key15": "3BzJ7HCJQKqQ7SkNctey1qiyYY9B3oHxS1V23KotbjYyXiz2UpWT9wt73CY2EvyMHdL22gnFDBjuw9SV1R2WVACo",
  "key16": "GozJW6kZoxovaXQgMrk35RhTCxuMChC5mhtDW3rTbbpuQa3HwEjbKF6WyVbfjtfKYyGmGBf4xKv7iCU9AYQfd9z",
  "key17": "5yqbPix9R5CAtUEaUYWT5sedRPYVtUcUaZ3AfNrWvtjT1ErrY1y9GVcNK5zXf8Ffptd41nkzHBDNEX8eVsFtWYJZ",
  "key18": "3fkoj3fZ467ozXseGy9JEPDs7ugDS9sCiM6FmjL6SsbV8dzJ6Fc11avmesfVYP6gvuadRN4NaNKGAKqkaGYCyi6a",
  "key19": "2dpASpzgZLbvQUo6jmNibhtaqzcu6piTC2J49x9iEZpmDFuEBU9sSryaYDg3TaFKnT8eRtRAFUsK5p71UFtaCf5U",
  "key20": "65GYv6rrXyeyE3LyWyGK2QByVBEBkv5mcUYoFwhg8i8v9cfPq92pGxmoH5TWu2j2xy2eHFxSauDZXZw7r73sasEk",
  "key21": "4fVtyiDxauuQWptiabBKpqYKbpCk8bFWtgRe2eWV5NEENBNcok3kEubLiZX5iHrUmK3PY1LWzfL5neMfxPHpnbDp",
  "key22": "5HX2KxHa6i4KeoRboonvLmcd147sfP4euWc1tDaLAsdi45MBiHSnh4wDnkJTs6766ZciwSaV2XFJt9uJ6FgDs7hD",
  "key23": "NWXPCiDSv3FZE7F8FzK6fuCKwx1f5KTtkF1AYCka2uP6F9tiQbEMyiDQrSbAj4h87vPQryvctg8cEyvLUq2qArf",
  "key24": "4HQDjTqWmbFZ2pDYccFSeHP3BaF6NTxTckRv8nXswWDNCMBPcJCnLP2WuK7kzQh3H8aEdcvtwQCSzhHXtcUBgfwh",
  "key25": "AUDYFvmwkaFmJNmxLnAvmdSpUyCYZrYi4Vhydzusmy8aWJZjfNRywBwJ3NWrPZhBz2X2i9LQdWupi7VutzA9K1i",
  "key26": "2JPnSyrUQhENLC99ewVAk9AWb78FVFzSCS77ecLgMQ3aG9vVbUgm3yntURGpNbAJDPU5FRWQLVvhwTbVe61iV3pn",
  "key27": "4n6zdfi8LwSFpJMMX4XfRvpRPdZjhccr6uU1QnMUwpdEZAtZ6oMYiDhFuRxbm16Ts47p4LboLEt2XtVwEGt7WP6G",
  "key28": "3arzbR2uZocdkJcxLqs9b3wtJg6RAd59Hw4kLML3yXpEjqza2L2vdt64BZAyX8VMmQGbBFHPiQHxAy47xHUKAD6D",
  "key29": "53rLHDZhuAyA27agYTfGgBsJEfyUJ7mThorWGXVPP1yxk2DFmWhrvxNKA737XBZN1F4nHFU3Y5gedSadKYo4SPjo"
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
