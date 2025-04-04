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
    "4pJ6GwcBQe4hRwsLTMm4Zqe65Gw7ziEabSQ398YmRXKxZqoMDik6r8foBUmWaV8JwRDXnt6QL8cHrgAN73qkPc7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxdxvsizGfrcoiwghZmmt9iS9Q6fSXeyE2JSubuCQRHsjPMnDbYAHsYAQ4HansW75k1cf7VeMhxZM7YEmPSDMde",
  "key1": "3WKYasAQPfEhP9CrJ89CKqjFfU8assPW92LXN1t92znVvYfWFTTvMSv8q5QVARvHwD3aupptCSedWXp5ZAa4Zjdf",
  "key2": "5CoYNJc69vhQm5sV18BhQCjzbtWazTNwaena57UBLdgnFUztWitkDW3bYFToscVuzZmEY3NppYNHRPfSgqRiqu1W",
  "key3": "63p54fngK7xGSVndBXv9kXJFxhbVG43JhJmskYBMFj5NQz4s1as35ueKiD2azyN1iJ4SA8WSW1yyR7i2pM4UYkY8",
  "key4": "qtjgmLorK5tBq5NPq4RNVGhiUqjTxaiR5rNJkrH6VwCCRCE4CTAYfm3kPgWnqXMUgf99CjWY4iZqW5ki7rSyJsK",
  "key5": "5tS4dHvSvtfdBy5JshkFpjtzQy2CbjaxDnGbMNW678qwTmSiuGbxASW712eqG7jrbMYi5cDwtJCdcaNzxu1GFFSL",
  "key6": "3kGwQoNFU8aT77gF3nJnx5M2PMPLQ4XssQE8Fuq4Ct1Y323jPUymPmZfgeu2aJ7jJUGq3epC52WZygdB5ohbWt5s",
  "key7": "2rDFfdXxtRLropmuJRfWk68DLieHM7F7rf3QodXvTDyxTwPgJbDyD192zKeVmWX6wKGbnFeHG6XfVwrsrS9N4Vcw",
  "key8": "zHXFNxJNq5iY3ijbP5kEdLMEp4MPUyyvq2WAMVdr37dnM8uckLbM1Tb1w5EUXEQYstZFKaL3NJJ6E8oQaAQqpj2",
  "key9": "FpNTiEZ4wv38fVvuUTtvW3Une4SrMV68XiYigbWBJfsdQisBBcCJk4DTSf63K2RpjcrPQHDzKzoQjuJEzNcbCxA",
  "key10": "fSoDvLR5heCoSHtCdvSH3ght3Tm1s5nd9SkiJK1vSf6N7BoZqyRVNtSc5voWW8QARuTLKYT1BECs456gqoucJzD",
  "key11": "52aXzDzQX6tq8woz9CUVT6QEv1LXT67LRFYhEw3NarVzC2HoyMpDgs8q51tHJsQgUid1ND27JGmP2uiiEWfCCWv6",
  "key12": "4osLTqKXrsAkErqqTaShTVxAvSf8Q16UqdMNa527YFFfMdSJd76z9wAX6eow5vLY7LkZUCrU7CT7GKQC3jfV6bGB",
  "key13": "3zKkp8Btuse4MXVEo5PTEPd3qMPkghQqgid4pdcfCbEhJTrwfJebsqZq1ShP9neg3Q4gaAHRKuKtNFFwR2Vef82q",
  "key14": "4dZFKroH7S3JWdkv1mA2z2B1kXowVw1JHFDCVJvndoy3c8Um77ZVwRZ3CqXGB9TxFbWSsFjfghmM6gJk8g7R8bs3",
  "key15": "3ro24u7nKjch1oZPvbwsYqyfx7nGkc7GkypdVgfnmbKEYLqwmF7cXUxtwkMtErvwPK7kzjevuDUSPguCFJs8ERMn",
  "key16": "5Tm5HVt2f3TvyzvioGyRC7dJMv9WgWEtN4SiSHvz7kWmcRFzfWz29hacryKS7fXPjPfEC1wVQvoP7Y9FDTQMjKQy",
  "key17": "2mi8L2nY1VTaNnskMBRVbJDArB3rfvevgpzpR8c5c6NLokFfJ6jhMENSwyJZKVg2869WPQ1vNsnEYy2cAKQ5iuFJ",
  "key18": "4M7wpXqFynJ1Buq7ESVxLeKbVPsn9mMFHxAx5Z46AyTjghxqqoFxXvp6VjHcQHMkUkN16jw1cEnnqs96E37Xt78r",
  "key19": "5QF9bMJuPjtBrCHuvdYeqtufHi7o5uTfDZsPtLFKjPQT7ibApphxndAzFw5m5ffT8NrRzoTjwddtD1hkUzkc7Lst",
  "key20": "4VXNpCL7aBvt6vM59SseXyYPotb38ZBGQBEvmHCDG98khEZ2jKgM4UA8QbU4LaAsJBGpYrgpxdscaDCtHcmqTX5r",
  "key21": "4V5uxUYomwPjmF1U8tjB3raGiva4Fx7fTLEnwE4jAR7wcoRCmmdmYKz3Wm8Qa4imxnr3zPSCWYpbEGERLd6isANJ",
  "key22": "JUoUKNSQv1Fq17r2mC7pASjdRoLfd3nVwRQ8rPpHeQ5L8vEWJ5MSTiWB5NbCiVidVyAAKaLMHMNdPXXWv5WwEGM",
  "key23": "3MUdgsWB2898yUy88uDphJvWmBYaMeKUUsKTHg8qDdEzfzWQAPLYULPrGVYw9e6Cwpx3VMa4cXask5uVf5Ujf9rP",
  "key24": "eoaF4jmwZZzbLnmFjSDXitecM3Dy9tJFdAPLJQhHJUseDi827nq5n6zTbsKfUqFPFFM1bpzWGwVfi6rwEczhrya",
  "key25": "3djDdRBiFjfP4nqFnX1VSuPmi4aqSAhFd1sr8dPgs8sm7WHZNGPjdQWaNPj2yzW3squkhAch1thnu3Y9dY4QmmAX",
  "key26": "3Hxn1PpeJXebD6KY1jwFzohqpAmFPK8PRZnvUrJRQyFC76gmoiexe8iq694h4s1obRrejeBMLmswo5eY7SBqrd9s",
  "key27": "riKPGappCxC4Qxpj1tgkgQW29qSdsXPJKJa4A7pdBk3Nd8e5vKwCnSo1UuJsBKn1n2F5AKQbQpDBz9N95bYgbKd",
  "key28": "2f9bTedTowjHyC2PAauggSVLmtr8JGa9dP7bthrnU7MXx7tcbTAhLkjnpS2SS4QfLgE7q9TpmJNNewPLW7PrHWQh",
  "key29": "C3caNfPoMRqs4Rq31cDAk9kgXAN2qU5SgvQmPt8JF1p5BiqZ662ZXxVUreDJymZKQHJE99gvtNGFkgKGnQhMG2G",
  "key30": "3cM3QU29ixZLbM4CpveTHiDt5FqVYq5fLvapuMSQyZLCCyswh3GTQ9rFzV3jv44NmM8C5sgDXgFLRUiriPWeBeHy",
  "key31": "24LcJffJXB6SixT8Lvf9Trq6S1QvPttHjgBVEn7AyyVd3TyZoXgd3EmYufuxd6RRu5wrR8SbjYUrwNm93h5JJxCu",
  "key32": "4M4KzBrjt1nPtjEdrod3dDiArBy2YMHXd7dNqx8rftkR2sreKksSQq9ANqr4WUrc61E1eTvktmqtfooGi4BJycCg",
  "key33": "5zfL5K4HZsR316pjpMSAT2GPdKfQuZ4N1nL2AxUf51UUzqPjb3Zx2sJe11Ak3xnExrqaRbX2XzhAtXFELn35FUBG",
  "key34": "3W6snbCBurZSgSdzSCbVPjZAG3gWWqbYT1u4FKzUtsjQ7hX86v8ddn2dxcFnic9muPoioT6r1PgoQfuXTfWTjvAH",
  "key35": "65i9soxREgQUjwQW4rxYBcEuXwkpBwcQPqiWHGJZfczxWR1yex2RX8toz5ixsJcRFW6HjXyGFChGhwf1TeFozibu",
  "key36": "2hkNFqpu6YQUqXAD8pTkyMWC4CGwDWndzBGpkVh51wJdGfWyWaTGsf8cveRKgLuuuQYPgvSDMcYVFE5qjMM2635g"
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
