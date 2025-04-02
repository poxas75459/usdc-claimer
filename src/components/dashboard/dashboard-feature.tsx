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
    "38Yb9wQFyty8gjbkR1kz2tfddc2tdDrRiXHZS4A5XiofqRYfoA54BB3CJGqEY3pwh4rBH7qsR2MADbCjaCm7fhdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nbevfn5Ygv1RjbHWReJPmEZobboVNkxsR5YDXCJ4cwC3vebbVRLojDupSKxVHcQJSXNuXH3FJ41NKkexyuggFLB",
  "key1": "2owME1cqjZDkRSb2oh67je2fDLPYQ2n9tVdyx4Jij7Kzryr7tyzF9nSVnWoN8FrmcMwcLp9D2ChqDaB97TiYS4PV",
  "key2": "5faTyS3x8fMoxHK6nTVidXZizRExx8n9jNrHRiXBqrPjLhiAw1atRzzwf6rW5NeVKUxGxDa73G1Q3N2CJ4iDx4jM",
  "key3": "2T8dR8VQJAPTbQhMpkJuKxqX4eH79Q9kckLA6TNpsVWJqxxRPiAMyrZqB7LGHRvNpJaVkJyd2R3NSJG6W4ssqSPw",
  "key4": "3ADxYEZbgvG93wTYMkPhU4yuRhrN4wd6EMPPz963o6M4TAjxNRPBJD9Tf44iQTS58UsqgVxnrZateuC6xjRxAGLw",
  "key5": "moQLdxcNG95pYxj8e6Qx4iVFv9X5xA6YHyyLAM7xzPgMTB5QfDMsJsnXcaxk2VkGfAuRuf5J3XWDmNzpqSzhbZz",
  "key6": "2vB5tTeJ1wgrBjHjdmAFgHqwxJcpg75kwyokrHaLvKNrCiBeZGmZUHxSbXUsEZ17b1zrFYH1BgU74KCQD7vMC2eG",
  "key7": "4uk9yLBbuaNVQenR5c8U7hNDLVmLnqKuNHiLVHSJddPyRyzcNWB4rBvS4k8H96mNGFXVouyYFfVGTrrPmxEWa8GN",
  "key8": "4RrSrYF1J7aXt7Ep1UfHHgoJFgB7W3yj2HMmeN2Q4tYjtKJtV4ZBedXPkMfWaV7cVoFZBYEmEw5BkUiQhfF6EpHd",
  "key9": "4ftpz5kwJiUKx3kZqUqx4beGsGxKAMhGJWRekvRZL5f8gVRSvzqwWjXXfK2SEjUwmv19k7svbfY7eY1J9rqgdcPQ",
  "key10": "4JBHW5A57pfFK49LdGEaZRg3mxxQb2mdfgGWKNbYY1P8vzL46XeCE5ULjX5t9HdhvuMfGm3eyRsCvxLnT7CXkYdJ",
  "key11": "62nYDZTNzRwMMRak5MUjd9J5GoNzqH1xkwxmLPBMPu17LF9QXZfDKdq2W6J3a8LvU19nbB3saGchs1eUv3kWtdae",
  "key12": "2wSrvct1CFmV2oWPAhgqAfaiCCTGcy4ghnHh7nFYJYWsWU44nom3mdkfgHHpt3ZshRPSACZ8p2KpBvC3EK9Sq8xX",
  "key13": "Pgwo9N98o2ngMeyxRuT1Z91tHKPaqe9aywSSQqEuT2sEpKfZjEMppcSt6JZAhy3rZHxBfppLjM2ojerpSTnV3ue",
  "key14": "5XkeH5zizeEQWUwDav6dMjPHaq8k2KuWohLnpuJUhGjERYu3afQA6rQvgrWnyfSUQMja3o1AXnSy9mgKgyA8Rc2i",
  "key15": "4ZuTrCsPsqqZNxGuRWdPFWN5t4pn6EmKLNDejeRnCALApFaJGGaGXgqQQyoxEDeywUDCzHPbAbwaCSwyZ5F2NHBH",
  "key16": "WPxaB82imXaiCBa6a9W864tBQkdnZA9pd44KGciXmEG9gEJPZnVa3L71giNdfzqdyvHfSWiBUFvpQ9dQjiyVWSM",
  "key17": "4c3x2n7aGuJKHwFPMjHXcwaDBDWmyCdwkKbuSGkMDJmcstM16gAuEmkUf2UA9zvXuoJDomqvxgec9PsjM7omHsjC",
  "key18": "4oNhuz8i6zDz1o2e77YwyxDxx1J3cVRefPyTGaV1CevqAjZfyK7qnszEGTTuSDv91Abk4qCQa3SBmuv4S1YHk6fv",
  "key19": "3WQkReRZLDjs7CN7QEHkaXV4qJ3uXiAE4mF5rxteFG2CJndMEvX5DwNWgBrGKFSmv1TXVdQmWbouHUJh5ZPP5DFL",
  "key20": "3F2YysUWeB6osTWW16yuPhpYPuLRXC6TzZX8LANhzZdQpVFKMXMFeAWiiVc9hiQMDrh2uzUNVDetab1U44ykRMwm",
  "key21": "4BnL9DGA9MqoPWiGqQduq8iJJ7K1K5GJfaf54iDqVjuXzAEP6nXUEu9QxkG6ChSMk5cT6JLHYGeeyKYrpYWWGRyR",
  "key22": "5ykkgKEp7ntCFXw7bwMeWYPsKVghvkeM6h5hFzwZtChzYdU8eCPiBstkt9bWvH4tPb8Pw1wqvQx6BzCM6FPj7JJ4",
  "key23": "3RuoDqJPodr2AGJL1qXjUZXNMgV8gpRGRXD4o2GJQrWEgqrCwvg2FvsybtofvSPxb6CPpJ181oq97cUTU95akPFR",
  "key24": "5XL5ydphh84Hj6omJTP9staeALnx2omdWgkpfdWd7iG6jfCX8Nwhdnma4uDcDsj6SSQT7ou5comgCmeve85JwC8M",
  "key25": "41SUaQWiH5SXDSXKD3GSwQCq8hBX7MnkNHDbDyYbYkqeARp9wHvwueejZJuue8royE9dfvp27mQETRfu7JnQAgxG",
  "key26": "3kqEQewCjiXkxvttyWjxd89wTfaNPXYdibWxqpnukhy74W7sxmTzbbAv1iFRe2XzdEbDERchqZAKkaoKnP69aNLq",
  "key27": "4ep4EPq5TqnjUKXG4WKe1iDBdpqPL5rD3HcAvfDgf12HpXDokJWF93XoppxzCYpx38dp3kXteLk22pQ3JWB2T5dv",
  "key28": "UPfgZHZ2X75Mp4Ht9fx7d4Ls1q8AJNZLxjm654bo5XRWhiGogeqN3pFHB3mE6KQornmfXUc2TKmwgnDcWgA1Gb3",
  "key29": "4GyRe2FJQ69tpQqvXunqc2FwXGLB3UALBunj8HKRNbqesiDdwJiF3Yyd6QNsN4Am3FYBa9bY2EWwYhgzKsf9mhpK",
  "key30": "3LG7EdtawXNn2YLbM94LZShmb833Crehss5pi2jQyTRC3Emq7DcW2qLyXFFzLZc2S3hwWJubdvupKTiaNHg7buF1",
  "key31": "5ucEJdikqz5YPedwDRxnABztz2xdHyBjsGdgki3JNuoTayupGrKJUsWuRnXnJaueqvoSPci5bNKPa6dRebKxBt2h",
  "key32": "kSDvzoixzRMrtgvsHutFbjkwNrFZA9WqKVtpqUmzBfwEJxJ8PbjhokH2RfWfNNH2hQqT2EGxUovb1eSJe1omjb1"
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
