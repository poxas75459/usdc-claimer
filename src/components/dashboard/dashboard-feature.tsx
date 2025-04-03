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
    "627CGYKzuEiqhLk3mSQmEtUZK6U6Nh9KE2XasZt4d5LqYmXwdUAdvCeGVjy21V8J1ZxQpYBHXn54Rzm4eQegPm6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vECu7pgjxprCn4HLi2VjQYBK4BASUfKHBYPRueWYcLPtr6rKFVhq9FZwzcopdsbhwtLSgzwi9HCuVrHSWachMxB",
  "key1": "45GQDtJAT5sNfVbvngACqX1aficWsv2TzsbEmDrShAdTEW4CsxmcK7f5CCe77Rr7jj54H2kqTdA6kw3AfqdFLJ1g",
  "key2": "64Bu4bc2YgRGFC2UBELUrFnX9i321q2PyisTZQHoRqe5ok728RXAEBmuRP34upA1ppMXMQMH1qr7ULeGxBo9i8iF",
  "key3": "G5ZQPG28b6f7p3641o8sc1cZzuqZK7XYy288489yZezUL8v2Xct8ibefXd55THDukFUAECpRXuKpQfYvbZ2DAkL",
  "key4": "43kh6CAxjBtRCqoHEzLRQAnSgp9BpqomWyg8rr42bGF5nHPJ9XDLEJtR17gAb9fsE2zpgPHgbqAHFPQxTrzSRbVR",
  "key5": "5miwnE6pq6qc27S3wom9CC9XT7SdjzPnQgrDzqG8J5pEjQF3bdLMVBS2nGvWRWmJ4A5ugwjbBht6jRXNnmsmTpni",
  "key6": "bUkDNsChvMViXJi84kFttC3VuSExKdtvkSJW97Ee5nwqdwn1WyCF5ngCeZncbHqgsCW7cbdY2bJfUQnTcNk79Tu",
  "key7": "3UgrMRoTuSYjmSPZ47stHkQjaNuoom9pishfAdrTKmGf1crMDtpPJw2G5aoXEvwAdJTCaTfWhYHa2HQXq2Xvse6N",
  "key8": "2WeC6zt3GcKDDM5sUE5uqg3y59H1ossmCScwa9uYPjkUx41tNrKtrumQqr349R8DZpoab3YEHQ5ikVY612UPkrKs",
  "key9": "2AvVSZu7FCvei9vb5QhjiJAVoD9Ngos8m6yuqvRVh5eUfqxHobtjBthtbyKMYs5PWRkpijG14zfET4JLwxU5jaLu",
  "key10": "2brGKJwULupDJcdXvvbpCSCZTD3R4YtxhMnDFav2ZCdTMfszhhdkYRUM6JuVSh5AaEvhXwMHjrSy4NKxsuhBD9WB",
  "key11": "YNH4qx81fHMeYZ2iJtvTExDsUrPeURLy4PhC6rVzMtESUwqj5cQAHmj1YDGw3Cfa429mZj3R7f1ngiGXc8yAXjT",
  "key12": "4azXaBziKrrdFgsjMTqacPWW1CBSRHXxwYTknwPAtmgVMHtMqMgFGVcZ6TW3JatbxejiYKCeitwTXvEt2B57yiKv",
  "key13": "XebNd8LXcdUzJutXfh2xBgutbcJxQ6fwx4py9Y9DWb4bPxm3iesmb3CD2sFntxo1TVmUX7Uq4Q76f2n4Ph3GpuP",
  "key14": "3VpFnPC3aD9uJJ2uzDWdejZzBas9pkFRDLsEaNpWvnrsyBow5tkkLW3S59ZN76Die7qNtuiSmyQRasRFJeRGyUXb",
  "key15": "56oP77SvpGu63ojMP7avc7jUXkvp28iPZA1A5KcrcrJ1G7UcX34yNHjCVoTv9BVN5z6EVrXkLhaYL1p6YuL73nRU",
  "key16": "2ji5fQ31GBUZBhbdv5ZLz9kvJ3Sbg2foMrCpmCY7G5W6CXzGz7GdoJ7jeJzigESFZqMWT6q69EjnrW6u67WAKHyF",
  "key17": "5C5QPngjd2bdRXzg4CpB41TqJfHBmM1A7MrUChdgEdy1ZvfxPVPg3oC8hYMCA7Bkwccr9PhAKEdD9MSJ5PBdpYRF",
  "key18": "28yKE8joaYVfPPE5ZgKFPf4DPPVCrKMCJGwv3Sc5AFQN1WKAv6hsVGA4GJRH64zsqCpA4oZug47n1VgVSDCyctA4",
  "key19": "26uKpAohhXa5VPkfzdWQXza2RPJ4MPqWs63haKmQAhFKakoT6SvgUy371hhfSskgnJFcMd9y2hCaBCdE1mxJWtAz",
  "key20": "54mMG8uEJf7az6ds4eNNJzE4ZcNjrV2wDmtEuognfzRxos3H2D9PqsGa81tA6p1KcvYBvPYpHrEHnV8jUPiwhX2w",
  "key21": "5ykDReUPbSVzqSkxs6eqcbg2tBfyAr6yRiRr1HMknrPVnSKTgYEhYUfv9SBoyweBgQnGZ8w2eARY9jAqhqVbTfxs",
  "key22": "5C3DFrudht8TkFCmacYN7cN6KotirTC6pr5fJ5ZsdJn9tcCo9qrsYsWnELLuDEadf2XxsyMD4msmLihDfrNNrU1w",
  "key23": "3KunDdRA9RRLNN32tmLqo9EnfF6KNgyXRHmRSpvswRyjKioJ5R1KkTh65KEhfFqdjmZKKQkkdnJvaVYuFLSM5hVs",
  "key24": "3oLWehnH1zKbVqwQE98NNGTF5GWZstb8pBVdw1Cu22e4ChCio5vEaozG3QpecLisBfmYvSaEJ9CFtcg5aE9wZCT8",
  "key25": "3mJKLqA3QSWhm95pWKiJrZsfHnBNcyNQZBQHP8CJ8U9ZaMoTa6WMKJfHBnvmmJCrSt1AwYtrXyzqr5mV6dmRexk6",
  "key26": "39AnW5qo9XrN3YVV8PW5VdifwE4nkrWGzQ4z7q7AfctC5h7VxbPGkSsgSysCsXZucVTHXZNt14co6mg1esZRT763",
  "key27": "2k7vc7g4p18wpzYKW9xGVA2nAcQ3RvWeN8M6Nes7f7i8aNDKD6hYenfJCbDtryJU3rBaDH7usf5D8XLYWgvckQ4W",
  "key28": "38fTnpmi4g7zFdra46WDiUGRrirN79rHdotFGvLveixKPxAzbrP7ML7YsBTPhXzyaqKVh1g19D6Y9dcvAAcmSZtm",
  "key29": "4auqw5wHmrcas4fm6qBMwc1oQnyM5zAZntqFJrTLyQ8wsZit76LGcPm19MNffo8G6GzAsjYdmHBH8tZSZaeAbvtU",
  "key30": "2mHGQ5XTSpBrRXu3wP9kyB9eN1sut6ZdnW7xx2zEP2zVPQDu2WZ52jepabjWcmBPiFew9JEcgjjG2xrT5oDvYz5s",
  "key31": "dwPuLTS5w1jfzinx8bzbfsEGQCDnDRAqxkYxp9nb6PTRSk4kvnfWo5CdLKyoBXE9SxAQnawKX1KhPiCBzSmKXaf",
  "key32": "3gbQcHVCA2v1zvEwZ9eNdPiYCgqQDGXvQfp6PkZqzpg7XxX8AouYWEcwQhS6ijzCxW7J9cfoaiQ2UCeQWNzgyo2Z",
  "key33": "5E72vZZExTusczrQNxiXxS2DCawD7fN4vAgTRRA8EYHzJK6dL7oaau6TWnqy1Dn8evR8eb4kSrTiQvrWyqk4B57X",
  "key34": "5yNd5xi4hpnAYiXYWzDFdnbugtsGVkbCACGSyL4C1ouEVMDo4YTACfx9agv7BAaPfGef2K8fsms7cwVz5zxET3jL",
  "key35": "2EFHkhzxaeKF1fyhnURLRjmP4iofsFjtonXbxa1ZgSomjAnJaRAc8WWNyVZzwoP6XdnmZNyss6gzMhcGRz3wdAEZ",
  "key36": "4RsF9fqS2mrH1hmLe2GQmzGXvsCVYNQDeEL5h7eKzGiTeMyE8LUfkcL1REo1QcvhKQYBZZqpp279tkqHdXsbhywv",
  "key37": "3yKkNhSeGpGCm6ezdDXdSssw6FDPf4JWogea6YGJFaUPAce3HNKNW6jfSL2uVu3v31xBpTRBxmkLLW5553Ru6oWp",
  "key38": "3BpFeBv2fy5xbi8pMSS3xToSQeUN5ZCQ1u21KbEbE97yFDuXU9rAFfNsefYmCe8mHqW9mnaxXaYGH6vFpm7VqoUf",
  "key39": "3wnhD4KW5jFH8tErxSFCEMxjnfLX9fYYp1VDur5TBSdQjqZ2vZfhxqLz52UtNZZX4td65tbFwA42rzzTkQSmoLnj"
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
