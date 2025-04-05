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
    "2MHF4tiLy8gBkydT5eEtFAaMJk4Q6TyUBDVQxFvs5Vp9Z7mC3nhHTF95rZ7fmVabJLvtVW7FAihTbVANoDzTSMde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jS3bP8y6FSevCqrESQqgAEe62hEo42tL4vVbsK4E9YVsGPB3XmNas536q9YGmjXDtqykbAne5WkQL2WQUaivRve",
  "key1": "3EJwyziC1y3avygW2J7475DT9fHaMybuGek53GzK6LbPkS82FazNuCfFxqPBgMPLSyKKXxfSiUmomYXADFMoW5r2",
  "key2": "3DdzyVa7zxENuNC8VC8cPU1HYaGRuuyZnVJWwGa1RnVkaLNyDLhJCgVX6UT5jBgWBV3Q4fVGPthZ6CZcj1LbV8nA",
  "key3": "5CCrZpvznzMzSbCtmaf5xJRsinPZFJRB19DVk4y1waDcT5ms9aCfqQdr4v8nfzrFTpiDGaT4YfKhAdDUNcPHf7yb",
  "key4": "2gTnneEHnW17bLmyELBdBYmruDJ8wkK18vU7qD2NqgwGfAghbrNGBPVbUmYFYr5q5RuPKeaPLZRKjEAVLRDnWCia",
  "key5": "3MqHeXT3GVAZZfpzG8bnmMiRMb5zogC4BwZE8qRPE1k4nNBtghUXHzTfu2ikaBxV9d3GTe7dwQqcDz95jbjUYFXC",
  "key6": "5YBV6ozzyvmosXJvX9NZjys8GixuYj1DK5GAL9WCLMBPbJjnu9TXRFxawAoUNnN4TCx8pso5S2QEdNPmVRtVhFZv",
  "key7": "5n1u5JkiFrwdPeXXAVHSMJVvMKXqwG7U8XjuTgvASDqvHRCPDjWozWvLFQV8NbwKZx2qQ9i4241phKSy6wVyyJnQ",
  "key8": "EnzSQ3spCnHB23D1TH8yBuwpc9pF76URtavjnjPPQhGKSrkjBqrhxz31v4G98xzYpiZ7nMHrSPuYxHgyW7KcV39",
  "key9": "4mSzSja4KzwCqBEwr2bXryX7jpAhvk9P7PTePcyy7ts8zndUJSCYPFfZKAEzERZnVGavZRDoLBDNjz4ZTvCKVLsq",
  "key10": "5rjzpYTQU3d3CuZFquovKi3NLNJGwDUPir4eqZeWczXfvFKkMsmaHooaNNjV6t959SonyB2BQTyvoBiRYgUPtNqC",
  "key11": "5kRtVT9189wpx2Vbpu6SKq5pUUc51sjzh4GDvaeCW3HKgG7J8Uk974aQZ4oGxRWJvHMkivSwJZZdvHQU9AVPxuDj",
  "key12": "33GmYFVP3FudVyfMfsvCPhneb7jenBNQdwRw5CxtGb5vE9zU3RMHH98zCvkmNsvAKEHzTuVZTTZ392SZmfvwwbiw",
  "key13": "2TGp8RaJ1PdJQubGgkafxQhd8fE1ur5ozih55JAJ8UGMUxZY8gBa9igAm5c68rML3VNzf2jxtauiZF4YcRpRxuWE",
  "key14": "3SA4eAnMPvHuCoAuFTBzkM4qc1Z4744hG6AHk9pVYuHxnQcbm8WHt2iBL1spJ65M5t7fh5bNQahs1gJRZMt5QXbL",
  "key15": "3obQzK1phEVae8BPvcuBuDR7ryC5e14xVJE6SuQC5HmeS2pRZmh1b8gneg4HfLmttan5Vb8MErSaEMpwfbJWhqej",
  "key16": "5YHFqNBaMf8jrBZvpYbFkdpMYB7GKH6yM7HuZpTPiUN2mZ5NyLdSRKoEMfwD5iy8qjTtbVjkzNggyXaLPGHNnTsy",
  "key17": "278nZCBW46r6T66cmm4ebMNfLrGBRNHouShJdCfifBRUHrSYyYxdY4qApCpEKADyGAF6HmvK27AXw21FLF5xJmJm",
  "key18": "3rR5UnhpnUtxbpTiN3kEqUchbo9boyqagr6AvBjN297baVnJbGCr48nKLeXKsVG4SQumgcsWJ3K6UwrTz8gDzVrD",
  "key19": "2wtb3Am6imSu5jvKyEYGog3z3a3yR2Q6tRoPRD7xygwHHpu8wxboEdDF69THirfkHqVptbc21Ddn6Xh7SodX44RU",
  "key20": "5Zhk2mQoL2t8jqrHyP2ELGMGZLfYup8qBjF1Nd1zQJMMqcfKGs7hAXFZ7SaxrmM6eD5jhwSB7u6Sn89aqokCKuZw",
  "key21": "5xGAAqr6F9BEm8KBhVFjhG5miLbrBMMEeDPUkS5sLReheXHayJxBBymJMjscmyxoqtxWB5Pb76nqfLC9esJ3sB7x",
  "key22": "evzBBmYysGQuaxYdPttfs6dXYfmCMF6ZWLJx5CiYnuQA5w18S8Yf8nQtv4nwX377912W1XJ1QsdJ6f3VUKY8yYs",
  "key23": "MAakzaDuhgTqWfb6jtV5Lk1fsQK79NoQbGKt3yetGGPHrds3qXpHq2KzsNwm6Teqs8vA217mh1XwdzAXvGg1a1s",
  "key24": "4t3BQagmkzQNgt8etHhQBdKjUwAd2khtbnebUyfzM68NHEcY76JWMFBTehr43Ezmhs3mEwvNLqX2ayKBi118xUU9"
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
