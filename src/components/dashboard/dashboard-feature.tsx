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
    "5gYTyJaWo5LBD7beqSzuFKzhtyuuLsGXccDkNxeMACm2JgyAexhSdYXHDmYbQkCywdnRgu2dXwNyox5uyGdF4Tu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHwbQvToHuZkoNPd46HjftE7XwkVHgJFDrtcvASQeuZyKzr7oD7Uox73GW4TEdzrbQJpLHaCdUooWbSxmdaN6ck",
  "key1": "3RSTFS1KidpMBUSgiwFcosD8EHfymv7gRwfnPEhR6jjbzZskxc8ava3qJ4uAow4GeRfSHsX5Bg59gUUMLivWRYfH",
  "key2": "3cnHDWpQdSHJpe1aKWsfMLhPhyMwN69eS7V22cmNaUsreGgKsZ15mR1ccdFU9oJHLAggQKk4o7FP9v2ZJb5uzpRn",
  "key3": "5dpNVs9WmUMAF5oAaWcRn9SPpi4wZWaPCen3Q1ddzLXH7Ct9XKKW2pYJvZCWi5vLuHLQU8cNP1wKcbhwp2D3ueu8",
  "key4": "2Lpt4FdwcuSWyjASQggJ4GuAjan1bfPdiGGTpUePsYEB8nHZsQzshhnDAgJcajBGSaj4fNRqmpzVBhngoJnTtKZk",
  "key5": "5RenfSqtv9hWi9B3QU5MSwxt21BNujnQHGdBNC7u898ccLMXFr8B3hi6JPcwK77kiSASHLcqW7DnPAs9nUcqQ7Yr",
  "key6": "3VFxYj8LdVW1CqKM2Cj5YPgerkPkviZxHCvymFTYujE5m1VewKznf1Rb7tJabLpTTpH8kT2qKVNscHuHDXAFZjWo",
  "key7": "4demmGt7MhYMTfc7AXPJg6ufS4382hcVcvkWearMBWru9pE64MvZ5NXkQjLNXmPewF4j9sGMM7oKomZeWUTiPQFG",
  "key8": "3d8qrNbTnDUzG7MyTfbT1KsTfcuphP5BqT2rfLzyHhHAJbwNejHg38ATeEvoM4A8fLdzht5yrAhH2WFxDQK2yHFM",
  "key9": "3k8FkDyoKKtmQYzxJgNdAYmni8n5nd9ykgaEsrJUN7mZX8tJ4MtPfFSxgsM8fTPUo8Hyuorq5XSrLr4iUTHqgScS",
  "key10": "soU61AR1B38RMzkRiGUyA4ENNstMoAUjqUPnZoXh3h9qvSrtkLHGEDuf1iwMFuFJ5XsS4wMxLKR3vnUtX1K9Egd",
  "key11": "RKBD6EexTQ4SHC7m494gcUcZhn2F6R4Ka5VyoRyRxEDMvAMCX3G9WijVsr6oMw1CVi7F6z5msy6nWSSz4f2XAqU",
  "key12": "5GkbEhSqrY14UnXTMVMqftYLLn5D4twNdYdCX225S9iXFZ5hiPA7nb1JxYMvTWGadVERoGcbBPjeJrT8eVVAzvW9",
  "key13": "iybBs7A4R7py8wjFo1rJwuXjHJhtLBhjYJLN97oVnGkZuyT6koKKXKccKPJ8LSPtqDsnovD9PoSiPF42tEZn6uF",
  "key14": "5A5V8fSWnZ7djuqxBrVe5yCvYAfZ1y7y5hBm3wqZsJe4u1FbtwAtoaHmvc5Tt9NMYjX4ttqKdBJ8tdwUQeMEUqnp",
  "key15": "5tw36PkaWT5ozpyYDUNT5CrcXwn5XnqrsQ1cuHPys6NKqCDC4EVbKNJfr9ekBGjf7tNgBgigvGGnv6sfRsHM7woe",
  "key16": "5qWziohE6MxzpDsZ5nL1pwbUjWDmY8TRq5Hy8fHgidMpwKYz6P6gStHXJwNaUA1zDnomwm5CXefUb76EcBBDQ4vY",
  "key17": "eVMaBKLYyLDUoW1NzHwaf7cgyjM9K2jd8UWJLVcRxrsfsyFJTZRFKqnQ8NqdPUnV7ydsvkwJPzd1C9q6RzQNFbk",
  "key18": "2GzUAmMRHMSnWeWjT9MuZoqBxVSTLj7Fobb7tKg7TDhNwBSDLeNWsi3Sg1MdQV7dsFZ1bv8fQV1zNSt4V84vQ5rC",
  "key19": "4yyvRQJ664EsdiTwjkYcjj566ZFnuDQUjAvKSMpLJrG6hDBMQ5gwZVkb3PCAs78EV9st8ofrQxKyJmFyS4egMpJc",
  "key20": "reLv7MfMdeVmV8rcqW6rqSiNaAWtnbRtgNShd69CrN8aBxiYooUN29cW8Lvak3Z2HhSsYYPvFbXiAnS9Xe4UpMt",
  "key21": "5EsC6qkcX4FNDLN2oC1js14hCEwGxtQkbSQkUF9KN8WggzS1x7z4s1C7tzEkdzSsPQ3p9NAkcGSoA8snEBFiwigW",
  "key22": "3D76cRzjw8xtfdu3Q2QjCBPjWX96aFQK7QxbhAPpiokEsU1uGYYGgCyJQnJuUAe5uDkbcbs24M1MTFYSaKmw3Vt7",
  "key23": "rtrNcnquM2wt2AaahntPJrSKNAsVkaGf3L5Unfb4f4GmKt95Lz8Y7DVUtMkT7yAhKCGxE8T99Fj4hBP4VUR9AVL",
  "key24": "21Lk8NfT1TKURuK69VRi5wTBqyPZxtM43EnbJartetpNHs6hFXxDNLXwMzK39i1PqJrMjCdZUZdbgoSWUNRggTyU"
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
