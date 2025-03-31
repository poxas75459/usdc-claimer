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
    "2KGLv6jWs2GyAuRUgfuforWSZD3eNj77iWtEsmDD9rpKztucbAcVfp2giZf6KmX5ce8m4WtigZf8msUTUv9R9EmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjj5eMDvhq5XSQWSiMpAdVxkGAxAMXGCiJCLCcrJE7bnMvMV19HwJVhNH6zQyJXuu6qXMMxPfC9si15seWmXr45",
  "key1": "52vPMJpuiqxkiX6gMACdqADXDyG1DajjHvaWnL7cxeEuXLBrFVXUoreSaqWv1nyeuNCMdMNSz8KkTN856nWCtxDC",
  "key2": "5skmsdQxWuoUyGmU6DLYPEiPGm6akzoeF6CLDPD1iu2c7HcWpnJY3fE5DvPXQcgGfpFyjToUrmB1SRBR7T419voa",
  "key3": "5C3KMnUwuN6DEvS3bEhTeh5tTWDtzLAG6nNM9pC8SpJd8yRMKDhpTCETA6TJvYnkqUehmcMgN4NpGbabrs6PSdCJ",
  "key4": "5g1F6zsaxcY6XD4WPuX7UhSXPmvKZmuGywUGmDsS9Pad4J6sUs9nfd1Cw6WvaWGqmbejSLPySv5c33yw4qh9D3UM",
  "key5": "5umPwLKQoNv3H16iwCiBT8TFYkwa5deR8uzGZY6hFpS9zYHrFm4BHgeTMwpuZYhjLJEveReMTEFnvXsgtirffsVw",
  "key6": "3PFP8Ja95jnsdwDNqW5BEY18me3XtZfa7Gq1hih6uh2ev4sy5oiNZJaAjrpsSuLJagvv4tECsFEwgXNTxL5meg2v",
  "key7": "2LEG9krmUeHL7nSxjmtMjet62wFyCFybmrY5ypUHM2EzvbLAanjVfUnC5u9qQwxz38WSiPnEzMwaCfb41DF8z9sk",
  "key8": "3TqqB8y75NEZCNwanD9gJCapSRPEjpRu5jJ63u9cWNDA5rDq5QdbAppfHoHq2xjRs2BkGthvYDG299P9TwtHZbNx",
  "key9": "4NBYdvs5kYVyQrU6PANxr2RTdG6fs5EYVpsgHE8cKQcVHeP2qDywZ5ofHG4hnyXU3bEp9NtJCCDFwp7EZPfn6ThS",
  "key10": "57yaq1XHTpkakFC6Z9gJwc6VgfawFEBHVoV5WqZHfmQKVrckfb9wAhhmeRKXD8hLPeB58As8aXfPDkKoW8bDbahZ",
  "key11": "5etbT3JEoztPuYFd9N1tmRAhyZgbDoUdmetHQFwbvDegEBxqyr9iAvCVWLFEx3QUY1iRPvs7JrD9u3KNgfW9S8GW",
  "key12": "3bc99RdHRKCUqc9rT9aqsrWGt5phjUfYfvsTLxBpLPZEVf8rqUXRUL1V4b3TXnvT7Xma9rdUD7CEcFrvrLCydTwz",
  "key13": "4ZL8yEMJgwJUHD8c1NCk22Md9GUUcUJrXFYGgGcB7pCX1qugWJDUHfP4V1Av6LXaQjB6gHRqkh5iF9n2CNLv7pJk",
  "key14": "oWJCzrJHwUvimfQFxCeBjcgUPC2DQ52CsA5odfEYNmhpKfHyaLTCnRiE8Q8dNtox6tKhSMYnkc4aL576C4Etqtx",
  "key15": "5Gj7UDW2AmjFSEtqfjs1gdZAxKwEZNia4DhwuCUhqxL7tY4aifnDLxHgvAHttVdADEYYXKxqX9RP31Vu9zeuDYVs",
  "key16": "4GsBoDQXQYci29knzEJfKWaSHb9p3ekTbemA4yi6ZRYjBWkhS4hoxpHsdf1F5MC5RtPrjMiBiwAyydWY9WFYpA3F",
  "key17": "5FojLM6iAGnFt6gzPsy2XRx4d1H5KXp2C2oRTL4BMwuhwR5Y235jmCyiWYPxjt4qpvwgyfCnpuqKBGzGUHrmRZTL",
  "key18": "2n8RgPFwioHAo9AkuLChjYKVP7KpQpKoVjbtTBBWrGkPk4Yz7JWfXJR7rLsyQTEeJ2z5qMii7aTkMo6RwJopRcbB",
  "key19": "W5PknhuGzbjm9pAqSXBZgfUAmYmnRLGcmoLZ92Eu5FR3bmcCUjQFcbXvhtyE4AJkfvw6r8kYb1MLz7AfYZD78c6",
  "key20": "SuGriQKFkGze7jpqmgwMxh8Ezays2xGR2JH2giWYJTZAtdHfsaxt3L8grBfaLUWX6apQuazv6nTjGKgbjDVzGMu",
  "key21": "2bdg4zbCWvwmAWAU7i5WhQxSEG8Ak3kkvGHbTDbxQrNwsNaVVLBXwbwxfJzfqTqRT5BcZKxRPC4QFRYeABotAEDy",
  "key22": "4Ti4FWnRECsve37s3he3EqLqaQcZNBdNeuCsVH9eDJ7ALnvvVDX6RTrtYBrNEoqdLDduJVKZ1tKYNxRJQxEEVhgL",
  "key23": "4Y38v3H2EtEisgX2ongDdbRbaYrGyNSmSQ9PP3dUXWNQ6TMhmrkbzzyedzEpf9Vik5qL7PJhRbhJVMih5Dte5Adg",
  "key24": "2jJ4AAwjFbVzPB9H1Zo5eG3Cw7r8wseqwQzFgeP6Srrawq9GbjYBm74nYj8K1oAxz9vbfsmRpsMtqjst5rXcjob9",
  "key25": "46JtJpGJ92jorKsEdZHCf9oA8u9pMgjZEBkx7C79g8nuLydMUueKQAcubScJVcAeaukKJbacSnZ7pqaCn31WTrjs",
  "key26": "2261DpHuNmpzw6nud6XrbutaxhYftEkMUEky2oQhwcYFbo39p95P8Yg292iij3PybR9MDUqEvxTkTJSgtBRxcLhc",
  "key27": "3XeFFZ6pruujvS6gFzK1xcYhnaRxejEFKC69eBqWSqfQLTvJ1LGn6ABFDZ1Nk1nHf1Vv3QPSqsMvzY3ranmKSyxW",
  "key28": "kba7mpxJEweHBa6qekwuZkcMqrqZz3uwknvKqcmZypWidopKGJSGCt4EGd5QG3u4DbQyLQJysGsPgEdQJDL9hN5",
  "key29": "2jgGJ5cBaCm3GvLZfvAB6N2YFfejwZRXY44vLZpWFRytJkrTrUFycLzAnGQqa2bonfwepL9iSqQPwc5vv4yZsxi1",
  "key30": "33GGDLUJHkMdPL2T8p1WBNqZrLWchfQdM4MWSsziuTqGhdVGjEaSS31cXXmfhaahA6Y6oAv9qWyFodiGpPn6wBbe"
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
