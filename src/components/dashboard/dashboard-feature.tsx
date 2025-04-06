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
    "SjaCeS1ZWQZrZ2xTbnkX1d5j3m7TqocGQQFMTUS8xrittVAVQvtrN7HamNDid8ZQrisrgZAArBPeZQDKaXRCcCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocG3wDxvX7LgMox9yNrp2BkpN7rgGuoksuJhusD6GiKDktyALvNj9GdKT1goJuCPuFWXCc6WFXfj35ZaJL46G58",
  "key1": "5dQa9rE9WP31AvAVhu97H9ARJ75LcjmJvMwoB4GtvDfq7T4ti1sbbNu6dTUf9vgXhKK4fLJLwAHhvY45rdQYkvHw",
  "key2": "23MKm2ZTrKKPqgpfqZqEWEuDhqEH3rwgeyHmrWST2u3M3jqgUQJUNanKRZ1BaCQ5AgstPZ9k3huuHiwtAGY9M1Re",
  "key3": "67NTZer7Sw2AzgAS1vBnXfpDd7NMRsMhQoifPGqaxo4Vxs1FUz2kfSWr4ViNq68hWMxUSarBQHQktNcoqofbvYL7",
  "key4": "57jkD9B7prtSxx169rzCkR5YsdtQyE6kBhSJ2jxsTWwuGSPNTPotonESKeTixi5fJrVWYmeh2pzwkVxUAgwoVQM4",
  "key5": "3DUTd5EyJxG7ZjZHENBj9b2Cup7PeC9zsKEr9QyRJUaYeh8psP9pqmw7UCA2VaUiYThTqordVLHx8gSLy92emhN9",
  "key6": "5XokmCXhLBVsWre68cexgRcRTHYEQF2bNLuSh4wWbciqci4fYvSmjYschhC3L9nbCQZvKK58hG6QAcT5NSio62ji",
  "key7": "454UBDuJ2gBs9oUf5Z9MdBd3g6kTFPan8U3wQwGTMucxdwLbpzZMoRLBZmntLhgRaHSYiQPWuGcvtVmgbKokgB8s",
  "key8": "55TPpsTpR1V6dnMRsEGYgs9WA26wCA9LkX6oGFYAckUjdVBh8KQvZ7A5TKbpBzm5KGaLqi7dz4UEHgbCUC5i847A",
  "key9": "3MUCoNdfVsjdqmJSkSV95udq1UBrVVyxnttAW1SvXjtZQC2w85fxLvtZg9JCpLkurjKQM8KWAAaYDQygDRLPjuTb",
  "key10": "nsmGRtXvnP1QYSMaDuQKj7xoUHf4Mh4YoLudZL4NF93yNgeYPZR8Tmi8r6cND47WXMuNRbdqUMMPp6LcAQJPsGZ",
  "key11": "3Tvg6Z4j39YKsUkQnjWRDkC8xpFmXWQpr24KZLMUsyV9t39qs3LXNyi4XZjQivHd5H5zXdnQEuY96mozTbC9WVcb",
  "key12": "4DQdgzEKrMYWJBpYCZqfHkLUVKzEoPWxdwmQj6fX758mAbdtR1nzATUPLajXZW3m5x55deZSp6Me4yVwcFPJL6om",
  "key13": "5yB2C5tzTYhXpmF2ctrpg5snhSzWZq7p4GtdMRaJgyjLg58JLR1TjhcMpij2eaKvExZCQ16yuYTephCirkgc5rk4",
  "key14": "2MjKSsbbSgz3zKZNAsnG2tWfXp2E3To7s7GXz9W43wkPPWXhFTmgF28PaxyisatigXtoXAqTjwE6btxvXoyTeyc9",
  "key15": "2v7kYkeFFVAj34upJ7DdxNRxor1ZKUwpxRPBTrRstW59xY9yuh5FQhHE3t5ZH9YggCAnL1ggFAGGUd6zaQ11KMiU",
  "key16": "4PEaUcQDJEiJqxA9v3PLiQBiD9DRxzPqVe7j6c1HjFQArwVVrqbgciqhRkzZdHZKibmzt4TdE7kntbmVd12jxLAj",
  "key17": "wti74SnoGs9kv9FtrWEaKjZ8KjhTbLJuJ8Q8c1GX97snUogyKTEa6QcjQdsC9V8q4CNPYdNKu6tcU1Y1XWDcYYp",
  "key18": "4JV9M51xMf1A7f7QPAUstqWeSRsR3egjzeqShCAVbFMvkXjcg3dqzGnuigx3Cmj4YvHR7X28yaAnkFyGevXYXF3F",
  "key19": "4vu7VU7gUY3CPUxuxRV47HjBEfhbxNdaABnp1MnPVtZvBcmEtW28bWydQ9eLVBohdd7pyHYUTrGJ9YgdkuQB8wT3",
  "key20": "4TFnMoerwEUnC97dTv8hoauVbNXp5n5tvqQsnMhf6RdetLyMSHWvJnNAiahuSkoxCiDV55DhfmFMVAuvjSBz1JzV",
  "key21": "LkxgZryxPiBuw2oH3neSgTW76gdqhmHC57bGBu8VsPGy8kU3B9VL6uJFQnVnfC3B2nSwVjbbtTttymZ1bLAsjdm",
  "key22": "52AKaUypg5S5sNnqL5gmiqtdCjoHvATpPP9tBDG39WjNF32KtYfDF7VGTKRox4zLUFDTYxHjNrnttHTTaoqxyXH4",
  "key23": "3t99AxTe1DPiv8oBXkB6vA84x63YCtejN8MheSjaKqYRDEjtx6TGTKbfD8M6V6QEQZuJPvBuG7hmMZGUi1v4WPfd",
  "key24": "3Z7M2c8TQWTokcsVodvTaznFSm9CU6xDTqf7gxtNquWxj7sMETfoXmUFqqoRSv5rS7meM3WfBCCR2cVJvHZaUZ7H"
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
