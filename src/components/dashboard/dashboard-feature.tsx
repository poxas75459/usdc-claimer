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
    "4jLSN55tSRvCbPFDUMREhBQaE5RwcwEpNa2dXeuZPto1mTjPZMbihEBPMy5irrUcuq55SNTpdWdEtcGCVeWf68oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkLeMjFSo5kiQRVXy7pBwKzGZDDMotpyGxMuftNRd6SoH3pJaxBwLRbPz6nAkqEZ72DNkfVv7VhVA9TLMqjLh5V",
  "key1": "4k3yLyhxiFxQAYgj3qSWsGZgS6xVTRJDUBKHAjjz46B7RSWHtivsarY7gjtFPaVpRzZoArubRCcwoUFf9utog6NB",
  "key2": "4m7CyFL5vwbyWsCLojPaDMXYUiqoRNBYyUbTkp7YLQSdRGBSHW5waXg2MN39adTvpmCXUHK7qWQ1iYMyZ45SxgRB",
  "key3": "22JF4ux8gtgEX2P8YbtWCKm7x1hhKKyHG4y9BpxukV62eFJDxni5gGEEP93Ey2uu6EHvTBg1EQRKpj4yPrR3A961",
  "key4": "3ueiisXm6SwpMYY6PtBsfVCVnGU2Dy7vhkY4aaBDyRLUsaFWbBX4aEZZAXGMYQxndiWsMJeCTaQVRvwkVfstDAFN",
  "key5": "Wca19ezQLXoFUDHF7QkREGqKmZU2exW9koJPUFQE2iabbrE5yBoJ64m6a5NudXZXx4ajg2prxqojUxQp9FQvcxa",
  "key6": "8YcBkVpAZjSBEacms5nePBfKr3TTLQqPKEt3HUi6pb3V9mpEGLJnR1C49PfeJCvdzuzKsYVk5s9DgnFb5VCEEjB",
  "key7": "2NtXkWFWitrAnnwoUVCZWYcn8b5QNEXFZFQPrqFDcmPJddZtcmFGkThwF23mcjQKHaZHAS6aaAfLtY7rYDosBX6K",
  "key8": "23Z5jHm47t9AfutSa7AKRNDeRo2bWf89SZs5RpjFeepzWSJ9xtU5NmKdvo5WkepsgYK1hNEywMynbTZJmD31oXhZ",
  "key9": "2fpDUAkPKx3C32F4rXg8yMXB1n9ZJ9agaotLiCiRgczqxF2rXL97iZuG76A2jkctySQopA4FhpWo13gHH9pa5qFu",
  "key10": "5nUQJ6i5XnhwdCh79Nau9gRgcV8659YDLYqVsMwge67mjbMLfybMXFLixPXaY1jZmUUB8Gb6JBRsuoCR8nALhENS",
  "key11": "3sToXRUf54FkeQGSQujKHRDYdrmHFPHj3vVMdr4wBdB32CsLZCcWcpneYmhzUA2G2U8jRKN5eyrzocY347phdsZM",
  "key12": "3jjaNNfjGEfikBWJ2Gzu754insdA97vEQPiZnMh5cP65qRrzfckHFCG1WsgmqRSyhgTb6orpcJJSgHakKqkaUbXt",
  "key13": "3CDkrXdpNKys9gEwsmvd9riyR1kQtmsS47ynx2cAgiAgeMpeN1cB9xtfjz1v7gJE9Nr3c8wznyhgmShy7jak8wgt",
  "key14": "22QEgQft17RA9t7F5WTnkk1ztbzgajngvb32o39gkhxboKNupqv5XFCMLcAvcRKjYAAnkzrtuKGpUUseM4usRN5t",
  "key15": "3CvkQ1hVZes21mz13GLKRQUwrKgY2dakmnmmrTovu3CLmy2dmTkbhw8KYDwTB6GWjJz3CxkSDg9f8EJe28TRvRd9",
  "key16": "FL1633WG5E48dn4aPKwXVe2zTJNrsTj87uMNqDr3ahDRXQCLj8uBbo6fhFggsU3Qt5qnM7MqYB9iaNPWdz6hXrC",
  "key17": "3ywNcMEVL5zKBxZndkEGUy3DeVT9pnXKjLeEcrdG1Ft1jybi5owXB659cQbzcceHwLEmSM8YKMERUYDDsnBmz5DM",
  "key18": "62zRDcgbgrsH9UMKpGwupGBoBC8gLdx8sF8WPENCzLUexKeUmfNAV21dMnPDucoB8BH2aFRmgTstk5QY3PBpHFeV",
  "key19": "5EAFQTR3DBKYEXFwdSfdboPbWwMtm2kyBaQFSs5xhXZtBRAHKLBiaG8EDnnkJuT46bitE5BTxKcoNm2Te6oKXQBL",
  "key20": "2sZSCZs2K4DQiabeKbFNMdayyGZfn9aohpWMbxM5U5YnQVKRap7GMU3CXi7LMXJgSeScsYzVPiuT2Q8sjZe2CenP",
  "key21": "2wSDGFaNZNRbfsBEAp6hqfKcaPEqR5ZhXu5WrGb7nqZaQuy2yy8aDTSy8Q1DuoCnJJknQUkH5zyXUKoBkEYhsZr7",
  "key22": "23iNnqF1vRB2ED7iKe213m5VjAmXkTx4TYKW1Hw1uxpH437E9GmysfSGTZ8QQe9TV6yqc9zWvsPoVc5FJTAcd4wx",
  "key23": "3D7iqJ2W34ArumUrw38K7fB99neaz1zJS1ZyGmT9i7yGZeGRGF1K9G8j7NpHaUgXk1wn8bMEeiUbTy4NuJqKaaeh",
  "key24": "ih86VK8s71b5tpiqTLMJBGggAEngg5U27fwvdZMmChHsgkmWiubPq5KNizvWoEpxbJtrbyCjG2ajR7kbW5D8m8C",
  "key25": "5kwjNCvZi1FuBLc9WBLNJUUVyhhjeJMEotd5u5NsVkkdk1vpJpKKEMsg81dYxq2LzAhD3CTiFhEptXALDV4P8jcv",
  "key26": "Czp1GxXe1kqQgx5hSzZPgTEm1w956GqYUmd6Zn6XqdnV35DP7JapHqZmW2SsfXhi8tmyWeZ2ZSG45QnqNj1SzHK",
  "key27": "66WkrZvLD6wTzyvfPeEsnxsMsBeUc11auswadZ8M8pJMKjug4mD3xsXVoC4w2enLVHgzahzXApT2GRrD6grTbdxZ",
  "key28": "XzkD9YyWCmXDPnebm9VnmFmgGdVeZz4XWLRmS14VZoTqmpfZTS21uKbdRjAEL51nVA9mTbTuKsCi65fEz8HGvFB",
  "key29": "5JY3VRNxDk6Znyk7xWQDVo8cJjZ5dpYdxqjDzWpbHw5XXpiGEAcFBfUKKHdpiMVaD3ZnS9Yu2JkN7bR866HbezMg",
  "key30": "5YaCajmaUBDSss3FWJtCM1BJTcquuRE7qCJPSDW4694oSSwQSBw6Z26HU2qFvgP1fRjEurbiKSk8JoZLLwWG1UA4",
  "key31": "5tyt9jNtrxbQkZvAxkojeNTsYyYaYWgfqfSwV84zV25ibvc299v1Vp3aueXLwqdHGe1ErW2KCjhCHkfCybKU15VD",
  "key32": "2gheGNxc94AuknEtgQt6Sp7M3bYf5W6dfjZRogdmX5nCmFBaqJLAsBCenuy7Zjr6xGZYz257u4vFfCxVwKmCuJ79",
  "key33": "2J6nrRv9hdBJ2JqMGFecZCVTY8UwdznVvqsdhEgaCJMpR7xuikwnwW4MmuQqALraqBZdGUf188ieW1pp6xUbusdw",
  "key34": "5kNSLeGhxr1Dkxy34sb5sEE3ytkTgp8A2ciLTEJ9kpTGWAmgeQFq2e9scjXRaZ7fJbfE5J4UT5uweVDCiK9FPWsK",
  "key35": "5ejUYiEx9mcJtoDrxtGPz9WK7DHG3xNXxMspjzP9ZaT7p8YLRgRRQ4TiYNFgiBaFxtVzbfkWBfxFcHrRxV6QvJq7",
  "key36": "5tA96f9915f7hji88L6TT93QkFt9KeKNpj7Uhw68GtgKrrwwRKduhCkh5FVo7JvDQYC1KMpCFkhwGKw3UELvGrkZ"
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
