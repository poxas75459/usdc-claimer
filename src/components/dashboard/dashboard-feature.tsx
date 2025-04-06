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
    "46v3mz1ve3uAAoi65mDoUasG7BfCK8WXVhGCAkF2ArPvNHeDkbadB87SrJRcA48gyxwUFnLatMNEX27fa1Z54Ji2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RRHcznesizTqgqL83SMjTs3ypitV8ekpz4QRhnrM9y8jrVeJAnfD4oYieC5XGuEvrNkX1Nz15rBWaz4F66dMMUi",
  "key1": "MnML4uZ2VroJwiEkQ2Cpprk5zAkLa6F6oiVXWxmXiECoQQN5HNspgXwtkazKTP6jn2ddSehnFSNR2xpci5cgDLC",
  "key2": "5QxeA4KBSPUVbkTFsmAEBMq7z9gKiAtoDh9A7HMcagdcyfZM6JP6RW4XZx3xM8gsrboBmY4H5dFySiWEMbwWusi7",
  "key3": "4e3cwuoKAu2F46edSwtTnofWRsdGt8PDMzqoWnz1Ddy3fomMYmC9FsKCyyHfi8WkBL1vmv8DZaAyA9KLh3XwMVDM",
  "key4": "54Db5U3E8QiTG2VWUMdofJsBU7dgbf8cJBNY5eLC1MR3miixDCNaCSh32HVTsVFu79EVKTG2oZnFLn2S4HG8Pjct",
  "key5": "5ohJJZ3vQYCS1xkc5aaVpoq5L4V5mCQvLZ2VrGWQmfSQkm2m3JMhz7BQe59R1nzXR9Vuo4LJKraCQegzdBEct6j5",
  "key6": "mgFRxbpKCeoJXdjvZpcAgAYrGnRPnxzV44WJKBGHEBSUfhJGQszXh6Fb63V6ca5XX2iHW8EAiw4M1EBbp3dMurf",
  "key7": "5f6s3wHuSytCk4hzBsmStPihUddcU5kJjqk1MxhD4fGpTSSbibBzZKRm5S8Kkrdwz1NJR9LqVVX9x188XSSqw9t8",
  "key8": "2TPPwzodVJTWADKXapx9Bqyb5YquD5uHuQAchPZZetrKLfWLSweGxfiSRcJqd4aKCWuTbyaxifHy4YeJf5gELgZW",
  "key9": "2F5y4HiCaGsKH3c12eEjpZSC5mRNGTnpSP7DR11xcFUfxP6Ai4pkpQjjQCN2gQKHM1neXgi9xakUgPM1iL4d2Ugh",
  "key10": "5uoBbzPHQFxdaVJcm2h2e546DQL8JgJvRsn4ynmeE5nbW5SNYpcb9vffEmG7o9uasSQtaUtwJzxfyYZW3LDJJTrZ",
  "key11": "4uGjzn4iHPJ1E1eWJa8jMKkvcfLf23wHAUPKSujQ5aqiTHhMCGPEYwcUrJJWkASEX2FXx3tjPGpLhUJC3jjW8prL",
  "key12": "451BGJ1Fo7M8HifgCZEKj21p5bgd748k4ic45ZMjxa55CLMmY9LiXDqwCThB2Qxgup5Btc62bqG6xF5XrXgiRaXg",
  "key13": "zA3e1bZwMT9rmdYL8uz3ygkdFmPEHFZ8T2s5WHeXKibtBDTz9We6Ea8EAWjSz2MV9613VfsdbcHbmRp7VEgQ9Wc",
  "key14": "2eqQW6s2RZfDTuEnZZ4ck5dHhfMkaYHFRiKGbV531ZtAsnRrMTm8bB4JwT5dczQFCfJANNyX2PwTmv1qTuFbzbrB",
  "key15": "52ZC94LHDv8K6utqz6DSUEdLbiqTv9GqeMiMtmPn7XVuKn9chWoYChfVFLVGxDM8PTgYDDPvFMUhe1XuKCvPJXWi",
  "key16": "2bApbpBkS4hnq8Pde25TxMiSTBmcqAVn1yrUcsmiMw36xfcZTfv7YPiW9erQjY2jCkChEUULG6mmqmjiqNtGaqzK",
  "key17": "5ef4J2zj53iYFNnmACisq9SQmBwCudw76CEfXnGjx5EDomue9A5CGyTueHCdxnLQshbEvdqPjf8hygCe5uJTBFDG",
  "key18": "38e1b67UaqJReDgEcPNvWxQfANK8FU84eCrTNV5r67MEQzHG1UNNuH6TtLfw4VJHgaAqTsecHSuGruZgErM577B8",
  "key19": "5g8jgkuRHWpitqcqup6U1uKbKrnM4Jq3GqBc5DGTvo5RFZxgUQ8nEUvog8G7ctsvAqPwFo1KYanWQTbgpk2nZwHa",
  "key20": "5Pc6LWBeeh6vfTG3TfmD3oYvv9cm2MQdHQrqGyv8jwEyPh26GzTsLJijWGDr5vK9bhRMhDviChvYDS3GBtSxnSwB",
  "key21": "539QgyUmPEuicYJj82CK5uo7cJAw1hSvAYSxrxuvjQzrt7PiNGoxvvRkj3pQhNUtriyhuVtK78DGRV2UN5ZZZosF",
  "key22": "3nSum77oGnZ2VGWJTADRiHPUurXiXab2tSuTVMo4Qhjwqnn4rj5VMC2qbLjzvnxjUimYEYMWfnRzo5xyH25xb8X8",
  "key23": "61USFeMuf33P4WYQcvAZie1yvm4RAPkL4wRXFJTjxKc6QwpLGexs6wN6efMFr6JeRXLB1xqnuEfjwE9H1khFxDfs",
  "key24": "3RmgLi9FY6BWJVJ2PuMzLRQb96qenashU4p2phx6CAj3KRofrnqJ7zCisy4gQzidcvSVdDMKze8atfNkZEKsTe8d",
  "key25": "3sSg6ukZnCTLW5ogMvZ6nR5ETzGrxjavfQKsXL3u29MpUjDfYPS3bQvRWVyX4Raaj2qNDXwyDQDuwF3JbTtTyDKf",
  "key26": "6t9Jx6RMizxT7SPGenHpYc1W7k3NQ2S919RKTLSRLdHGkxdkt6DSBVx5q2jH31zf7irUed3uVzRAx9b5rZCpiKg",
  "key27": "4b7mo8cnAeiYxu4E1cLnxksnbnNAsZhDxHuvygyvxMWs5Up5YUt8EYaL8mXhaed2wfppYxQT9G5FHLjF85sAMzsi",
  "key28": "YJZdKv97fKsvuB5jUPYsWCFQJmCKQryAjAjez8RUSwEvvVPgV8ezuFdeJ75STGbZR83EiuzRUCNWC1VgVNtRLrK",
  "key29": "4MuHmXVNBH15v4HEyVhT3PZ1gS7CCuB5e5JBWipnVwaXDintJs5qZTbH6davA27M3ShGsZx1oiMqqB51uxMRgV7c",
  "key30": "2FNgviqfdhBkgQgnkBXH22Cw2VvxqpBiYiTG6Piku9XcGY9xHN8bNLi4geLfVuJ3mn5wZ1Sy2E8gRyPRFGGAktac",
  "key31": "3U2yt7qT2J9yiy32SYYfQcbvnqa1uDFVFGtqA7EL91keLUpY6JjemQz1udE3Y3nwBbo2DrMjvNAiF7e9ZYB93NVk",
  "key32": "Sk8hgdKQNGDrhRzFHVmZwDZnLLrCL21WTNDpfXWogsm9tdxxzQKUFD4YaGoq5YSeoPBP6k8EazEQ57xfN6dc7p6",
  "key33": "668W3Vc3GGuxbfbVbrV9G2kPPQvtM2FvBLAgBFS4jMXDb3xev97YFb9sfUPSmAS6houpgyXGBGEkYgcbArd699mD",
  "key34": "4DYdnmLBLtmJa69EabYXNCPSZTztzBehwWoR3fp67mH1yZa3mP3YBGwH2rFEy1GKDDF8aRnXbcBbHmTQ93atQyBF",
  "key35": "55CD9izx5FhVVLCpn8spP9CZohNTZdVgyfkr7qqSPg2pHvnR8xxzqcgKBvLBg9sKmU7yKzBhHDApsE5e4CjidkNj",
  "key36": "54rq51gjux8QrD1QjsN8NbUxh4ZvhjFMcFm5egjnfQLzzmhdborBgidmkY5KLxqKMWmUfQpzKfjRw1hL4L6YixM4",
  "key37": "XY4jFB52xyCpSYkbjuiURydGAx5fiqo2XB4kQViVu9yZZe2m5cPmw1HYwQYMAAgKBU9V2QyCoBqPZhhc4YHs2qN",
  "key38": "o6KXDC3XFXJznso9nNaSquwULWU4DQjz5FbAFsZFucoLREF5k3yKVQSVQTUDxtATXPGakn357zJ7eXcMR2RfbGv",
  "key39": "3ugiCYHuL9MsCNVw7cDNdWxhwvCEEjdWGgrwbtYH1hFg5uaT4r1KteC6fBcc4dxybjcjkkYp5urLpWGQkCGQ2qWw"
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
