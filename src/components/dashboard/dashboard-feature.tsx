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
    "2wTgkJLfFX7uJ2GaErtHjYgxjdJpnHsg3aXpSzQhVFG4y7sZh58JdAvnoq9PBA4cCF41qqQ5b2BErDacxgtYE4aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Phqmrs9UHPdBiKZ7i8zPaebhUyimiaqZrGctNvT6pGTF9Bo5NuBp9LF9ZnRM5hJFZcKPGcfKgaQQQ8Y3wDNigQ",
  "key1": "5tPFuLT6XUM1oeGRKD2Pdv8XzYUcrCzk52AsR5xPYfLp2bw4vGsdQCMh4YqyxhDtu7qTy1f8bmB71ADAu8VDmtok",
  "key2": "LF12AXSvktDZqCJAofi4GZENezYrhksmGNQoKWWwGM11RoiLFiKHimTzgcUkgsP8mjSFAEyLpQ6hHaR5tBixvdb",
  "key3": "4sJTJ8LKA6aYVJcDXgmcDzxZiDwD6WVB3EmJ8AfVaYRYacfKmrVZGDJcYXbcBu6oJ1JBqzqUiuavxUjwBAGriowf",
  "key4": "4FG6B2Qcn6gKG2qhicDRjAWZoFonGYmn7KenVhznURgy4pv4YPC8Z91WQ2SDf29H3JiB2R8R59ZeTwJiqMxrBcTB",
  "key5": "41eL8q9GXwRweEzSQKNX49EABX2LRZoyaD24cnPUc52WdQYFFGgSwSUHnb6QDWo4uWenCwn2HaNYfhRJfKoPiZZQ",
  "key6": "ns2fvZvEXWa7BdT3zyhe3AauexaT4ukpDGz2QUi5VyYgkUBMBdv6gMCmCPxZRpiEboyM7EfKaHpiQmQLszG5pfn",
  "key7": "2XMsmfrKS6HBPFuUmCv7HSNHp6ub8T2q9eCePpLKEJVi4vhX8hFqEHoSxBXLGtWow5nfqF2Whib8S3guLMfgbu4q",
  "key8": "6PdYqsTEt5qQMYzEFi8cmUH4k9YHiRaNYLmrJzWrrbt9B8xFEEPQf4MhMkmy3tHuRJSPjS3f2APsbH38ctHTKXM",
  "key9": "NEXpASweqyCRoFzSnwrt2s7KgmHb2Gi8ix3GP8YxpgYh4nswgXhqbZXgrCWinvHzNSjkxjV92evs91uHhijMdGL",
  "key10": "3iVxhYrFTskQw2jSHuKKZPETKEaHj4pWVPrhQBPvExxFhHPgN9JsUbM2miCgzu8ARkMWfG2e6p1nYLrGZPqP2qWG",
  "key11": "4uvShqHXKTtwUwdsG6wyJ6sEcuYjC5RyVA1viHYthN5ecX47c98Z11mmvHnSqt5k9XNAJjgxWfEbESSxiJUYy5LR",
  "key12": "4qsmkmGuQZgMwCPyhAdyKU5SmMATuPC3mWGR1j2YrYvpjATZcH8UjT3Ls8NgGU3gNTSrAfh2XE3pPM9yTYDinA9y",
  "key13": "4ScJGQhWGqWFA2eQSsYatHkCZztGrdAkDUBwcuRGdCBc7vKGJ4Z6YYT4viFcgXvMRxdFf57NaX7vZyURzupdB9vz",
  "key14": "4EQoVgLhi9jekWPEEY9S3hvjMvzJXGNZTLhXwtgCbB53TSiTzx15JpJ1NvxSYMP8M41F8VjbGRYHar2XH4mSBpEa",
  "key15": "47R9Lj1nSymdrd5nePNm496Mf8y1ZzMQ1w3Utj42ebPCCoCtMxEv7qbXtAK42Vu4qriUNUDP1u58MWRN2wfaG64V",
  "key16": "6326RUE1Q92ma2CQwdyPsqwVznwupajZjqzo6cPjCkYP9YqCxfxLqUuCywVxqXsXVdnbqJJsqf5NnUiZvAdEvqgz",
  "key17": "2NfixcRrhNPWhev7QTArbJLCW6zmfHnsNNZZ3XBoTafUYD6tTvUBw6Qg5HcZXLzR9hueuiZySisvk38NDiKvFcZj",
  "key18": "4dc3pNKK7Zc3wJRJhzjQz3scqBM2X8LyRgLdXyJa7DVHi8iChmDy5BDbTVv65PkX1EFYgMaJEnTDia16b7DbQccc",
  "key19": "4xkBskzaAAkv1GMH5a2xpJHSNwPv61hHk7asZjhCcnWfW8iDreW4wJGk23NYpEKf2H6ME6igmKhBqoTckv6NFpds",
  "key20": "q2XdFdqAo2hnYJuCJWdhzMdRMSmJc7rBjgjBa2Gsihcm9ZLkLrc67n3mpZxfaiMooHvdQhtJSBsgsZF9vZ7np5S",
  "key21": "2LSGHi9VU22VEq7A4SaV8SYrCnDRD26GYu3Jubjzomg9mw2UNc6Gat8hJiqakm4fbsZi2BfG7kUv7wofkgynsSfg",
  "key22": "5TsHLSnboxLqJ9SXefaj5aCQhrTqmaD63s4WB6fhp6qf9TN155gzhgTYjB3uM3z6Kicnc2UZ3MhKpzqSShMe4i5b",
  "key23": "2d7ae5xx841HLE6iBryAKDCpEszF6kY7aDAyNg1gB8CXw9x7wBv6N7FdnuHNuSMMU3UhaGF9PbzUGpFT9ciEackX",
  "key24": "a1Y1JxFLZD7NYU2E3Xo8QstLvVkA1h6UnAjRNr8QfywZLRWJ8chneSuqwoUcF1637R9CGmRuqZQVBLGHLX68bfG",
  "key25": "4UVHoRHEdVUaVxUCNYYtRdM9Vv1oq2dN57x7SQeGaoAcz8gTsHy1LBRn1v5YiQEodvZgdLgrXo7kfyRfNvhQL7ni",
  "key26": "2Ro8uZJfCgtUawNAZbvYLVK6TmLmueF5TDXmC9eidJyi2wYK6gEmYa6FJUpb8CZpo4Qq3rM9sGdyoZbHdvoyJ1L8",
  "key27": "3XgDzCiLXUKj6ZQuDezevzxV2y7Az51qWkrCdh4qrP15wpe4AVV8VdyqSgMVMVmvoRvCNxzG2vUpKyC4ysmNofEV",
  "key28": "481RkpXRWRCP4k3yKNgrSYz9WdHA3YRVLtQ4iQ4iZQKSv6VwZez5VRCk8nowwcDqnM8nmDuKnkRJJ3MrFB1ETmLV",
  "key29": "34Gyp8uVetjYxj9DxeSW7GPYZaYhLMkVdsCGSk2fDPR4qnP3Z2n3VwXE9rWYkQqhite6dZJ4nGVJt2FrH7vjNFe3",
  "key30": "4XcRWYREmqxXXjEMD1oWTtPV2s5T8q9sUPcraET5teQok3yNMyLtgknWxUBiU4KANEUYhjCuGXoSCAwpxbzJsDpH",
  "key31": "5KXUzMpbWobB2iB7fiV9cctS1mG4BuPHnYJQ5UFruxG2tSziSkfi9dXoGJj4uqLzCzuPLY6Na6XkkwmaByu7o6dc",
  "key32": "dvBV9ti5WcRjRF47JSQK2W2o2Pbvde7nWU43XUSf1HB1DLpBLJCae9D9zsJJgHSqMYZ95UYjhh27zB3yY3vhVad"
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
