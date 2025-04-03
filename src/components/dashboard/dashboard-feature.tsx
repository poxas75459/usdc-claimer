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
    "3Z6fLeHNCQPodwewiVcw23kvUC1fgnB5fTi4s9QZ1x3iVoqzNEt19393LXxXWyWyQKDwNhVnLwJTZbhma3zJwhGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1PPhr9W5mg9K83je9kHRfTULCds2HQnaTiLWied9nkk8sopYdTGSbwxmypKR8GAA97XXLda1MJvS5WBqwCVSUs",
  "key1": "2vWGmLhJm8Tvqv5Ubegy2zAgNVFwHshZsDWzzaxYEkGTGbW2R41BBnJJi9Y8qLNScgsrUStsoB6vZCTMXFFfuCVm",
  "key2": "4hegaqNzdosyhyarjXCA1vwEn9dyXMzBujKRJsV7xYy34yP6khmpDzcsKmVvHX68KArQhD1vJau7RhybtW3L2pFn",
  "key3": "cWJ2tqEsvq3bQDNDgjm6WVBwoBWsn1ksSRvGR56Q6mieWBwJgcpoFJpZXFq2qsoM3m2oq7CvntRt1M6XcQRZ5rZ",
  "key4": "2n1W4hYAA8XRPfkTdN3cswU87UmXxLNt6BVzbhZGjqo3vL723UgqjZwMuHzm22n34E1y4kcEAvt9aHvH8X3xnTMZ",
  "key5": "vqQFhcSc1G1FkQGG2ABfB1enxsAPtZVExvQZommxxgiWmBebGT1aCtLLNDafHD9uDSzYzaFwWdQWDVLGGL2XfY9",
  "key6": "5U3MkEZt9yFEM8e2P4txfreDeLWEqA7opJC5LfxQSdtDiunnxCHxKq251Nc7pSQ1B6i8cBSwyExe3rVmb5meo98Q",
  "key7": "5Wpg81BPfvYyzqeYm1cZCDiBnu2Uv99LDRFQp6uUBuCcQjYD3bTEBQmWbE8WEnm84syLJWpnNDdY2gLjGaPaFRqE",
  "key8": "2o7s4wv3fqZyoBwmNzfzPdhqXApwqpWra8N2JgAbSfJ26Nm4XQRGrwk2QfYvqEwTqSgPBB4UYTJnvb4KZzW7vEep",
  "key9": "2x7JXSwCWLbR8x6SzjbhdHXqnXiLtqFsz5VKZbW6AbJqGFaBGDbJGz3jM2M6RrhCUKK1hNV1QTv8s8QAwNWt9pkP",
  "key10": "rku9fteAig2hdK8oyw6sD8R9wavrBiH8wnwZdphvSEVDCtQvcYE5TdxkENvvXkA5p3DmzVviWwioQqgZizf5gan",
  "key11": "27R5fsgthPf5VFGkVFijcNjp3SNHKyC88rU2iexv4PPjxKevPF2AmHRh1W9sUnQaDZ8aQGgcnZNiCxzVgh88PZAy",
  "key12": "2nKXSQRUCSNasr2NKkfiLQ3iQYwsiBDNekJ5u6g6pVxXF3dU4XreUgD31qxv82v88gYAjA2mLKRcQRRTakXvcQek",
  "key13": "223BX6nhCJZTvbZ5nuB2QAZ3C3b6XmFCZExwpoop95vijwhzFXhQUAyH23VoTD51UkyoHTKHTiopP1g5zs3AkwSY",
  "key14": "4DPjJqPRRsjjLS5pVj39ZnuBSdiikUyWru39a2Lg6ER3NzuAf4hButT8AxuHDzpnGK6CNxHFhpxegLb225EcKkSS",
  "key15": "2e6vYNT2bFav6PVRtG5QiXjLueGk7J7w9HZGLocgqTWePRcvgt7JY33oixowgg2S1NHdKafxWxqqBLqzqUsYYKrt",
  "key16": "xYhjTC6m5Uz7xDDbdR7EsZcXHiHPbKydhMtYsNbwXdX7ssKCcEYseTGoSHFhdpFiUs7mBhBn2YWGqBkeGSzG1wh",
  "key17": "2bsUV4UZ14g9Cqiy1eqUAsJymQvX1MRF6dQfK7zj7DKX8smjSGh4xXLwgeqD9h398bgtRLjTBtvBhtm7e54VwEdy",
  "key18": "2t7J1zJLu6VAsG6TBfR1H3T6xRWLBUbzPYs6FwVENLbEHjtv4cF4HbEgD3Y8N3JwtTeXYC36cSqsFn86rJ8cJHAT",
  "key19": "5BVb4GnUsuejCrUHBKRaFkdAbLtaNrkyouJDnZmDzKHP3t8sVmRei9zWL6K9kYHawvZ7jGYiDUjjNprYhA7oRkkh",
  "key20": "2cKkzvbURc91Aw7GRChLcn1iiS5gTBP5BAdomXhTFsEFZREcRBUaeRVKerF9pxqPAc4SrtakA3erZttWopQNHj6A",
  "key21": "2hqAVJVDpYFrTfbdUNudVq3b9uMQppTb1eTWGXgy3Z6XSPaRf8yLSFBHSK89WTLaAdVeeD1T3ZMRTeyFptgJ6Qf3",
  "key22": "51D5yF11P4KcQSKrF4WKUJ1amcgqzNjdxmgreQ4vPXY7H955k6uEHZUQM4f7Xn4hzvt9bWbWwcZvm9VQQEPnWYWv",
  "key23": "iwEzL6ZWtxG9DHdTp2eJEWhpKsZVMvpfsySx4CSD3DqkXARZVRKMYahcRjuUxu5JmHg3Ssw9graQpkgkuEZxXCJ",
  "key24": "5AogmpXvMnynWyMNyELb9CG5daYjmt2dxUTgcsMofosELdcb2vLJ9ygyuTkyfiJgk61w8bVaro755hrVwS14FXyk",
  "key25": "3PsCgnQRT6nkeD8zGMquEDSQaDriMyNL8pxqZhTdJw3bmUqHzwBjHkKvR5t36sZWdcryUnPMgGJrHqAbgotRD7YN",
  "key26": "32bd78KTNaUjFGMWCvgckDq3CR3XwkTqqrfZyEsjAqk37qBJa2XojNoMZavzBVJg64kv1jE6MJrBsTn6pXbikz2m",
  "key27": "4SZExv4BsdYKNmuATbtyQZGKYNPFQdj5TBrt5HJuQqiYXHgzE6bpx3bwVajWSMHnAmYeJ7GpyBn3t8nCnq4ppAeP",
  "key28": "FodsA4bYXtv76Tfko7ZewZzqAkPZ9gqfsFmqHd5PtSEtdWrzTjuiJos8g6NFGSBLqFUbTfxYHj84dnMVZFsQcgB",
  "key29": "4dU5ANE4TDUY4ERE8RAbK3Jv3KjQ44Ezitbo9JPR2b4Bkw8VyYLvWT4LmY7oWeUfuqbPNe2PpLhGD2toMGWT5MYc",
  "key30": "CUP9jrFDBUoX5g2JVcPduCLKsZHMp2ZNFahC7GBGvHYYrgLPoVDks5qUNQ4L618BWDsPDMm6YVrpbsBeSZXu69q",
  "key31": "63ES5wBHwDo8UGZwBBG2NRs9qr67z6Z7G7wzWgTj8hunmTu2BjqR4RkrAuxWijcTZDsDtoYx8mkopf9PzUG8arNx",
  "key32": "FNXKwmrpTRY1ZaJoDwZT66nAaVgieJ6n4u2nTGtLh8BCrnegr31LnRbXAjtkggzpg3Lxtw2EDs6THdfXC5JDoby",
  "key33": "24hzPvtwRM4afxmuGBEfccgxPz3LfV48KfXUHtTNAMnWXnfRKiEvg16MW6CyFsLV7Ladyj6Z2S3sDLgaBVbXy9Yk",
  "key34": "2Ap5TzRCQNUU4X15wPjB2NGFgL6cvLxwhfh4vGNEb2JGmsdzMs33s3bY64eMpFG97fZYs8WPRbKXPTjcXzFxduwX",
  "key35": "4v2Va8FU3x8GncX5BVewvPyt8HPJNF5iTyLm7g2zyyDCHkWh2Ut2JRYUdjrm1eJ5qGcv48WKwwpPbe2tTP2KvCBm",
  "key36": "4nhPch3JG99zrj4mn8hcxQ64ySXRbUmCQjRphLsacG6WDHxrm7hHQcojBmk9j4kVvGYbRweQ4irLpwauStPbWLU8",
  "key37": "5niLGzaqYR5RfJtAu9q5dMRv9umMztUkjznNJDzWCuEpo5o2pJGK7n9ikcMJo7cvcWvNYvfQFaV8ANztxqZ8Tj42",
  "key38": "5dxCfUcLmc7NiKRkVjQTkiTVGL9gWfG7K8Jpu4Dozzy3YWDoBQf7AhcV4sUvFGdYygojGqDDXkAQpF43ekcA9EFs",
  "key39": "5pK9hN5gmBxoLQivPYpPMLhRVCBtLjdGMZxCfENNM1c2EQL5XAAkPezsd8oRti45GJzzau4W4NcHgix63dx4ru67",
  "key40": "3zyN9MRLth1tuRTE47JcjXE8DqFAKNAtsSv58vPvKE4UUUVbA8SB3ZRLfTqdB7onG6HgMwG67ABgFwyvGv3SiEdK"
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
