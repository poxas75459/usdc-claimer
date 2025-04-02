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
    "3XxHQsEikB9BkkwUnTnoFpJuDYqQd5ofY5sS3fS4fDZAksmVcnEDmP2GRWPY863WHf3enPPFUiYwopJW2FGUsjEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itooLQfjAi1ptjyR4iYqhfmnk9bf2dNF3zDK9xM5Xutc4Z8Qw4pDAbzXufVoWY9dxsGmUapMFbPqTCRVWUHHcXh",
  "key1": "7SAhAEngmrXB6CfLCforKTpXcXDPjsxtpxiLWhP1DLoHyunLS6H6d5YzaZvkYRRCaYqRASjW2WPCD8CGZVHr5s6",
  "key2": "pEpCd4TGjVGKC2tZzu71sNoDAyoUMQSu82CbdoNNDs2FXGXyMzhVfWKvJaP8Vuk8wkrgksAbXtucF5JFMxaYowT",
  "key3": "4hQ59d4mLe61t3ZYTjtXHmZc1H3pt84avhSgR3n4Wt2PS3j9jazonPLAXydGZ4hFEh6RWD1aCMRJs8JvumzPpvTg",
  "key4": "5bBY4yXJnwQDUpCJimgc8S33jBdn5CZQrEKUcGtVmUBQE9PKwXi8roX5JWwLAKmx9zZd55Rm6p1EtSgyiPW171QU",
  "key5": "GuKPNfxXRTQgM2dUbw2iZsVA3XyMM55h5oQevguyAwoYxUFp1CvYJ37PkXsKAjJabrDS6VtfU7UuHX3MBg1JtPx",
  "key6": "38Gz9sepPBwc86erJkNJUZMBmM1rTZGH7w7vvWBnFL72GVYgApd5z7HqFAypp9cM5HdBhUnyPDcmJjSA45CoqFSP",
  "key7": "zPpCcuXQ9Qw8i9FXH9cvf22W1H5BKYPe7JHAjQptnYHo6KiQV25fadVk4M8QWKNiD1J8KnATRHruzEmZikAhydM",
  "key8": "5bHfwvJNQPBnwhBN6cUqJfYXaqeMErmdUmD3XeyW6GBfwZWVGQGL8RUXDbYyV4GkeYs2VZNVWHa7mykYHkY8a8Lh",
  "key9": "38ErqbVAmdATmY2EG2E9j222kyTy1Anqi7dv5CwLjU1gengPGjBVwgeWuQgdvD4LZz437bPweger4pSKtuPC9g94",
  "key10": "3S6NvBKKwQqX2nXifEq7t5LAeDtgLHM5jK41ftHmWy5U7naUo4Pjgo81qJ8hM3jEEhSSDFzD5tF27fHBDrtk7DMw",
  "key11": "64brVaMPPMLSxRmnA1z3yA4iZqcUKh4bEz21uF5ju8KwmyHLeptcRHLWFxKjFq6cFG6uEEaoS5MpW8uutxAG2QgB",
  "key12": "5YEc82CbEDMUGXDMAUqbEz9HZc69Nrm3UQxS2Wam2unPUmq22UYuMRnRRV7kNt5HB83cW8kSchXDNQeFQusT4r6a",
  "key13": "urxA8Atkg3oUkcdKoi45Zssy4hdVC9d1YHxjLxTHfmiZsFi6Jsatrm6igm8KMgtD3P8jyfsBWEW4yqF4qDGr44Y",
  "key14": "2cDZDzReeBMxfCJzSA3QsFebb4nKyw2rPuo7HeNNNBbAYEcaodMnBshQPhp2hF9FR8vdoFTb39hZ4tLyAFWEC3Zw",
  "key15": "35gZvTvFZqnyHsoVzmhjfQBkZiGJ9v7zjWcZeTuV9ZGL9DTt9FGtp1ws7uSo4NSHRn8jxARyVaRbPxpNytZgCFwP",
  "key16": "3G258MvLu7oYERNXpkYiHdHF53ggvdq9Qasyex3HLVaMNaVpbWcpyfX8Mk8GSsRa8Sq11N87EVdEoZxMsa88tPGS",
  "key17": "ERpFeb6wcNE5bBveKiBXCabfaCEZGbnmuGNX2nQJM4TXQ4LJ9vFMoxTnCAQfFWvXEM26bnhZ3s42tA2Dx2cTFzR",
  "key18": "62xYeYF9hXGZ9KFec5Bgjoj6296Q5M7jV5c2364K7N9uqmo2WiJMaY8ieLiputwEsKoaHBemkj1ZuBPQNahBp5Vf",
  "key19": "3GDC61hZoYgi41jwKFe83LW1PtGwuhcBnWgixYHi2vnjkWhHvEyKvrNwR8kZWakHjXkTQatvoycfqqNWaS5ViYTd",
  "key20": "26CPUdQ9MavJfWxpz5F47kermb8gSBQBJQuAYPRQGKShzddNQCF92iGWu3a45TuT2tesHXDsj9BCVVHw3pPD2YJa",
  "key21": "4jgsboDiRXRcrKb7Atpcxky96LjuTwNB1XqjHJySkGQ3bKSZrRD3TMFfoCf5bJpYpsViv5bPEVmqysM88MB8Zj17",
  "key22": "4ZnBA2Y6B3HVAAhJEUBTzG3PYcBRRUo7CVp1T428sD1UCwgZwK7FmkDz6BRSFAdP6KUkJQH9JBoi9zbz5D7Y2yRV",
  "key23": "3KzfP7wz53zoVSM8qer11NwG6WVHMnabiSWYsTaySJicRaWJCHwocrSgToPPT49LFdFUmCBzc8yj3eMGatEJ2QbW",
  "key24": "zuMCyqiRZCutCB9R2WnHxD5f82r8oqLEzM91VqGmKPk82ooy4GUdKhc4qgaSr1DL3EYHSXNyPQJZzYAQncN1uj3",
  "key25": "21kMcRHHDX2xwYBQ2551zBgs9JY1wmP6WaFQb28KpvMvuDLnB9VQkHr7c9BDYHUn5FNJ1VvsRfchQBNPy4qM6Zs1",
  "key26": "45bddvWEMKZiz7R51Nmz5LHRm2wVdwvyvhR1Z4HgBHab597Ya7F2VTyjhu27pDrG29fLoucEDzY5LPGaq5se16jx",
  "key27": "3CsnocVBxcRteM17XYHBDc7mj1R8TmdDXhewxxSrB8vZaPFZcV3Ha7fTsYbtsiyoUUyZmuqShDVrjuoUCXKJvtH7",
  "key28": "A4YH6oQkSh4c31Q6KXT73q7pf8fDMkiTJy6gar19sJXTUKTYdePxwrDjkagbgMq1YZNgFh7CyRRXYxLKGvSsLsS",
  "key29": "3CvYuQ278wwYiXxFpavqT12NDfEpBD3YC6d8cvka9dbpMHeCZDLaxN5kAdgmJxEuzm9Gc9uq346smBAAgpJ6rmkY",
  "key30": "62jPuYzpHwPee8gVC7WzLkX8T8ASpi6aG7DHrEptZrZKYxWFTQCFZtLnBFafwiPS5LLJJqdyn4Ndpf4rT9CgGHM",
  "key31": "5ZwZUd2gY8mWX1kR5SPbo4F7wJnmwf7uCQmnCbLfF8iq5pLQ4tVxUGoBC9wztmXuq8RZDxTD81zJUpRc6Fv7eJ35",
  "key32": "2R2QSJVoGLu517tyEHPTJHqMzc12oQjELrs4iYzstzJ2AjsChZE1TaG9fFjHqxQ256tDsMLWcfHX4uaEJq8dzU1E",
  "key33": "2JircUUmEvdP5x3VMrUcFkiBbLrRdniuD9H89sHWP62QX683XrrL8TRwrBP5hfU3kW92QCPJPyhTU2DsQhFsPmuG",
  "key34": "664rghyDD74NzWkrQY3pvVqx2rypYp26DQHxpXbtAH9hibrhRQ46KGANaD3L1ezGjDtQHKvzuzGQU7detgGEQCgK",
  "key35": "3EUvTp27trE7oRSGQqwjeLtdJwVJ2KUoNvKXbukfQKn94MVsxNAio4jVoUVqjiSbqzgcQfFzwQAGU8LppvMsjn8E",
  "key36": "3vUm2B2SvGz1pJ7hDtzg8p7QGHmRoxkoAxLkvz3QNjAysfGrZKY1ebV8xPajpK1CtJ2JikzXmWMgs7fj7WUFF9HW",
  "key37": "5UrFYg7NMEvKgUBWUHbPsx5VfArLZrkjiTtXxaUzNCTyzsFn2638aEKyrgUFeRupeJzVNRFbHmuYLdzcwSg6oyS",
  "key38": "3a6HcaxNhudTRw3tCKgrExWk25qbLhCZ56jdYXXJo6WB3WyRxjbp3VnCxa1oesFnif6eHUpPSujXkoMWAALHAirJ",
  "key39": "4KAnwQ5dycL45pEnKH2MMwhnX7qoAPCVSukFZ7KHoRCRoFKK351VqQ7b23osruUgSxfkYSKjswTXoe1XzZ6ZFR7R",
  "key40": "2q4Dv2sFHZVhL9SK9CaGCSr1zmWbEztBpSo8c3zgaomFn3GJR3mK1Nwt1D6N126m9aRZcJvooH1PuUkNebYzdrDs",
  "key41": "5P7NJRaEJZk6M5PJYWLvVF9GtuRaMLP2pL2cgAex9CRPHYH2bz8hoiHbV8tr5HCftnx3FFy45duA77trHnCme7S6",
  "key42": "ooAYHfw1Gbs693qu3DK7qaJNcMtSKyvkBbkaToPSY6vzELYbnbfANgawktfifdXHF41TSGqU1FVVSvJVxXr8JvK",
  "key43": "3T5mV6dTkXWYFQptjkNj46Gs5QkTFPS3H73hnSjEEJpyWG1VtxRjboriyuVqdkv2qkaqjfLQg4jrk3LxC86eGAU4"
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
