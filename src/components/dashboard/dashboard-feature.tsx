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
    "2xVaqPvKKQzvL9KAPYdAaAp3rZQJfi59LphmFtBx9KtEmvfsS7vxa5vNaK4y5fTyYResKzXuGyubHq6tscxUmxox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2K7dttZCsiEPdUV7spKDD8uwUGz5Z8uMxmuYFtgLQoZctRAEinWiE8uKaEMXC8aFkYqTgjnisJaSUxcZVsbZse",
  "key1": "5ihqSACn9jNxY19AS5M42wuMngE8gtArzuoqeAdSPBYypbk56TQvEGZGGoVoUbfnXwomntyXFHF3XrsLiBwdfk3t",
  "key2": "45XoATZgg7VvjPqJBuLBigVC5Qtqkrb2CevjEeDhc6z7ns1BVKUb3SB7iRxWRLyvp6FUuDE2s5RJUmu12KjU5uxJ",
  "key3": "skJ7TE6ngZgH2qdApWqybdwXgBbqPpqFcpmkAp6hBeESYa6kjYfYPEMnSK5Ek3otNfmfXN7Gj39n7z7npgyFm9A",
  "key4": "5nZh5UZuEDcD2yFPdVwSXAz6tKgZaYnCADY6vwtqRcDYe2y2zCeXETH9kCvqoymFbn3bgWMhs5cjdUG5AitfmbnL",
  "key5": "2BHrSBeL5Wq82yNn9qFAqZPtQjGfYWSgSWhDsCh1NJtBfLT2WwASbrRasPuz5HSN3mtg9PKSVzcrp1bmwmYCtFrg",
  "key6": "2bWtFvi12fWEfZPjoVBTDToJJWJDhUBDn4foSGfEgbsx399un6SJbc5UG3FZsrj1Pv9HjUpCmUqSdxLtoVbh4qi7",
  "key7": "2nTBKfjRVnvZSYfXHCzksx4MDQAXyGXEyTaQRKqacMozLAxoGKzhTLh4pZvAD6Wn5Qsc7pNv61U5BfP6qrXEMv8c",
  "key8": "4gCPGRoFXDaQk59xJLfZuTezQUUM9KMEtX4bWuozfwuZgXWSG8Y6GYGz7Bk9wTs3yCVW4rWkmCkpdpH4DVf48A4m",
  "key9": "VcGWUjzSqSLJMTpuVv92iWqTH636UXVWq99PjhdMJYMZNzwmR5TwMYN38gkrKxHfKSCFa58TKpBQWugiHNypQzm",
  "key10": "4d7j2f3kznbD5GG9ncbRPJ5Tb3ywpzo2Fm2caNVhpvoA1rjPRv5MCBgq76K4yLeKxqXSyGuZTshM1disvytHJ2DZ",
  "key11": "RvvhRATRXXADFs3zCz68SQTun86kSDQpaeufJEfgAukcS4CP8ESQUFpf6rCSrNnbNTf8fTAcVTixyWjhN2NQHQG",
  "key12": "kWQDKMEoZTsA6J654bNzdDdPDzgHA8Ds9NPndScGBv8Bz9dQrYeqME94kz4u8qyhRta7iyC9qjBvgNYUYAypq1y",
  "key13": "4Tgs346WFbpLwxRyRadLtLD71E1dikGJi53DvGKpG3sv9AQeLWuJkPQjSgsu52jucHTCZfm9hAHryDEd1QAPmYRt",
  "key14": "5HwYrRkhREKDz74pY1XUhk57cvGDVbSHmWLVfF6LnTLM3ERiTnbou6qbrFvYuFLNCUYHXYev9cuhmCx8RhBTdYWe",
  "key15": "3tB39kXRYn8NWtwjHBefr4dszrdfC4gZFfKcwvPzszdM54XNP4z6oaYh84EkU3ceFfwmxCo4nzxvrkumZUJJxFUK",
  "key16": "rNSLJP1JVVbtor2sJ1qPxyjv8i9aU2EU1ViRRrj8qkK1XXs4GhUXooc2rUqiChzFvjCvVccuFPW9G9Pk8mXPSZg",
  "key17": "5D8wcGMSzXe1bfVFmURJWCWz1ZaygL7dvPhAbS4QqKcnVPFScYbV6w5vMziZCvKecveKTVqZ1vN1Gt9aomCtxE2a",
  "key18": "2ST9qSLNWreaKkJTREoWWWLAZCGMqPXqzN9t3jJJ757ZRmvGnjqF1cyFbMVNcRz4T6YXMY5o7FdXBosJFgTASLCX",
  "key19": "2ThwpV6Kvv1MLC5rY8fvqjjfYmcrExvV4oKVgjmHdPHCz4a7P4VZsb3ZXhYXwX7s97vSpjU1WVNVK4MWQGHKEXVj",
  "key20": "5dDzrpUT82L6dkn3o1mA4SEAomPveRFM33HRxCSGQ9W9rximtQfVpUE6sxwA9oZHZSBVCQ9nwduwsBrfAKS4TP4N",
  "key21": "44Ahi8As8naYUrM25Mk77g5sN5t3DiEgXiV3KYZmaaHhJ8X9VyYaJmzD7yD6YgrQQDbWrzzfCoUFwT94Qv4JG4GJ",
  "key22": "eU8anR7VhMxpaV6tsP5zaXenN5jJbQe5mdvjPAs9wFGJxVCdeY6ci7zo57MfxJjjY7aXiKzpwCgH9X3MHMNLFBm",
  "key23": "533KqNoNaz7oKVSQGoiYLdVSDZnjNhSMNN7oQK7aDMPwyfz8oE27pWZ7hhLiHQq4jTXniJ2xiQRJhK4QA6ubM87d",
  "key24": "rHwKpoMNFYs3xw9vgnHK9tk2efnxxV2C4ZQAgcDUyyTc36BvTyBQHUXw7DP6MhoKDS4CLfJDseqh6Gdi7oFgbWL",
  "key25": "4CkvQuXtvU6xxhCBCgDEpnKoALAJSRHfYzoTjqGoQiTsUbfT9UzsFyYEXbpTJD8PoWUbaKcfHd5ixjjkP2ZM6HqL",
  "key26": "2Jph8ChgteBdAZ5FdcPzefHbHmN9za2qKm2skSPmKHURR4FxwhfBCkuePbKUqJx8q3pbkKVGSb15bFWpFTvAqLLh",
  "key27": "2sfsiStCuSCNw5SKMTCmshAYdr3vNmgFi5d6YpcNso8nqZxtR9u7hUnxgBPjy3WHLNzHEerYkxDt2AYgTQGwCYcE",
  "key28": "2fsig3bwBMccwXBK8DXJxad3ukHzyk2euEnivkd1iSfde9DY7FoHK6dGAiJwT9o6DXbKrsaj2neuE4Uidgj5U9sP",
  "key29": "56c8tZzExdF9NBavfmc81FmsjcJgPK3ULLx5E7j48wTphSRV6jruBwGsCKtAMhECssVx95fDpmkPreGxY6eFxE7e",
  "key30": "46LS6DqrmqniAGd8rTsGq9ZgZ8yddGXDBrGNswUpZtrpdEin4rfaNgGJzsFuqubWjZwZojf3f9oG36vcEWmpQyj6",
  "key31": "4UttdgJxXSdHhTrxavFaVCPJuf1NDZEM7AjTCdQFZ4n1H2UszG8gv64A6du4UGw4H3tr28KCtXB7C8e7NQwyhS4F",
  "key32": "4mxBC2y842ywqzmWrH3KCxHXoRQ7aSAwMya3E8qsuujr5ckgQvHv3xyHks3chYhjzXojrEnZyckdYkgAH8983VmB",
  "key33": "5kiTiLsxkMb2odKj6qMBzZbReUWejvmpbJ1WK62rB1Qe4vaSQqHoJLqQcbjod2zBAReQqmmjvY3bKdTCM9pxEHtP"
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
