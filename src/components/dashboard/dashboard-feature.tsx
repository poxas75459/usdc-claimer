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
    "Fnv8zqDXcog9AARqvV39BWuV47m7mRTWPRPJS4gS7m7mYdP7QSec3S3KYm4TY2AtjUkvemKpqzwanQEutQjFJaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VurxxFLqerbBNJTTgNgX5CqWAq1bs97vACRS28bQ9YLUFWiZqw3q1eBxpysXQNNGb4bLMTSFZUxPMRQEPvvMzDp",
  "key1": "4zQhPwA29DPXqSVMSvmKKgqqyR7WabKh9767EpqvZab9SzRUPAE2QjfbR2gQpUDyfz7o3YqcFCqvYUwggbieBKck",
  "key2": "41xc47kLUT4Q5YLKHiJJVzgkRe53pLpM76qVxU5QsQsPDCGGM6frUjxYkCZCUKCHHndEQBSwWsQTVe138E2sasXs",
  "key3": "4PZvKsWw9MVfm2RaFgtuiCNyuFiBnvjvPEPjisgpT3r3aMjdysurp757e69KmqmcARpSJ5fsH1iSLLLZkx9tEMNM",
  "key4": "4uqVA1wBppVHq6BEyeY4Dpqaw1Bxi5twvhNpQYc77faTRWdmkogweFqprr3zSn9AWsRjT73u2Crm8t6d3zZZvw4S",
  "key5": "2vCVBRzRa1AUW9o4DCaWvyEPj45cDGYzAfyyXzH7PsksfN5sXiwdgBHBZZXiU59VrZu3vsHxS6qJB9Askr4ukLCW",
  "key6": "44wTcX2EtWZDAgwtn5unPFbU34WLuABwCM97xjy6ibJz2wi7eBDSG1FrRUmCvVGQkvgtAk1QXKM5PJWB6PMoxay7",
  "key7": "4j8jDgzG6YNPP6HeHp4aNgFRVXrfPNmKgGRpxnHS2doZfkEd8DEC7SY5KroHnS7ixURhXppjved7MVYUmG2LmY6u",
  "key8": "2TZGHbyyfMwdScBk3K8P64SC1ej9G47FFUF9GZaexUb5NrBtEMKixT4MjZHutKHq4RrMRsfZBVEKSG1wx1QrYUyo",
  "key9": "59FNc4djd9ySJjeAbHMtra2sxpy6ckgMbuyThsdwABScsGm5LP6Hi7x6BWFc6vj7gKQHi2mJ2831RAYYtQkzdGgU",
  "key10": "5cCYNEnie1tLhqPg1Wz7qXw9tno1Hwa7q2e1w7N1ktcG2CZsnJCqf2FPKTkGP4XvX4e59qoDmPZtENtuKSXjci8k",
  "key11": "4h2taLpqqphF3rQWtQZ2grun6Ljnoypb3FSzu1PYMkxi2PLD6vjnXErv649vnx23443261B4hhK7UYbCMpHFSqT6",
  "key12": "64q4c9A2AKsqSE7pydMFXzVrCgLQxsKUMHU86ausWoYr2gyDHWqFqQDv94Ny5gzhznH9z82QgP22UsyQKd2J9ho",
  "key13": "nffS9FWjF9uV118FLNHnPCp9vAad4Q9LcgQ28YcWZ5zcr2q7ZwwyCaKu2dbjYLg1fk4dX8YuSsC6k6aXXPasL3v",
  "key14": "5Cv2WJUfY2zXWnGBbJx2yUNaRFrNg1qcqWtM7YN5nt59a57JVxWXMnCoBES7fikKwanU5n4Z54u2Qw3zwLp1Ez9r",
  "key15": "67UaaMQULRbBRKKoJ9PCA2YQ1Y432FCNGasXmKMC7eGWmwg21ToKbL1uWrbWA8v4bp11tNnKjwwkYuicLA4dVhPd",
  "key16": "5QhhqeCzuSo4JKbaTz5e63C8zV2KhdsRAZqnXAoWB1aeFCzp5wQ7pfxHk3BTUoRoXTQEz8YURso3cQQrdwAvhtSw",
  "key17": "H8TisxL44jwPM4G876GknyyN6M41eiUuriw2fQ6FB2DyM9aKktBkrBNdX4piGCF7LwqzhdNP9j4KA3BviEEdV7d",
  "key18": "2XfaKPRodBC1povUUr9icn6M8cqiXTmQdw5Pfhxrh3sTKwfpm6P16M226cdrdhjRjd79uUsy8gWhaXSLevxTvUrT",
  "key19": "4WHBUEuxrU5L5cMq3v9VwLYQzLQbGD4XqHbyYhwg3VzArYaCyNnkbkeq6xYPETwKeASTAbjnN695EvEevAkydccP",
  "key20": "4ornYDUG3t532itsYkmwQzK1UA1CWuzbHECzAM7gmetwV56Zvmga1URz1QoQhUWZzEcVV1HbwsdZZGtkuCTU7zaj",
  "key21": "3unDQr9MPeXVuV2xgoXh1uyNYDFVk3ZMVhHEJKmG1u7svgQLxXotVVHCzSmtpA196ky9jrL66UpVqB4vgDeAsWrG",
  "key22": "3QrVyMcR2jgtFyGtB22hMMdgZ4jXNYZkyQjjps8Z29Hs79SGLSuNCGH7LWmRS2Ucbx9kAWZf2MBW2YMJfSWTnhTk",
  "key23": "uKbDvzdbRQWn1taM3qwPpQwvCLfzhRmvkGuJRj1Vc1ECbFBX32LhdoKga7PN1piAEAjEVRM4cgQb2TjuSVQjb5C",
  "key24": "4SBAqFxizgR3SSVmW9vuGyAFmZCR65Un7ju3uGupWbsz3NAJ7s4SwBWq9zR3nzeUjwLYYahUmi7qiJLkjiAZebCM",
  "key25": "5qLPiAjxjPQ1vR5ruAxwbPh7NdDSgGaXTNLDvqVuuWr84a2unpzf5FxBPuZVv14XKCwrVgGH7Hie2UfxHVnVLgwm",
  "key26": "3kyv7qsuNE61DeJ3rCw6FUYHwpQDPvSzjzQhCV5yRbYYfbqdzQZGZxhbEArXoEg3Wx4MmCS6KHhz9mRoeWqrvGEC",
  "key27": "38GbY4Gkwpq2Pn7qQDs1qRkqBxCFXNtwM4E8F2qoTELb7ZjSuVpQKMSYVNwGj9c8S3tcZh1pZFaJfJe6dUzKyui2",
  "key28": "2BZd7LodohXh9gEK36tJY8Tr53esuTRGTKrhY2gntfQxRSRvs4qNu88EXqyKZqbNgrxStCdNTszzyaTahQhsneFq",
  "key29": "3NvjhUdPUcXpM93CPuxxguNQsUH9gpcGGUwcNuQvnoCHG5pmEbZL8Ku9odvQpQqgjUSTDBc15hfw2ZeeHagiv8PG",
  "key30": "2terLvv9yRhbY2bAt3yQVaNPFmYBQDrqTNLUdSq4X7cKaJVPgaqnR43rbFqGTFaG2r5SzNRiGt6DCPju8CZZcmBP",
  "key31": "5e3FYQhN1JS18wfZRSyNDaoMPzyoDaPNiWyWRcBxzmuN2cdzxha6wLKvTkmTqvrmo6GkuHaMZEwJwJDSjppRrkrV",
  "key32": "4vSFc6kgt5Y9mr5co76V6uVow6FMm34fm8mVbDMJW9XcavDhJtxgwmbgvZVFxS7VspEe5NS6Mx5YWMwSrvJ7bcqK",
  "key33": "2VHrUhQDDWokPje218TLftn3YLKzPSeF1tKsJfUfUW6Gs2EgURAb8kg6mkSvsVpUV3fJFBNJv9H1LYYKmtf2bbBo",
  "key34": "5S2cK5Qptz26YKMcpg2FqwYZ5Chc5MKXaQWWiBez45ufoyvXKdGdpKG177QSiCLFA21RreQ52XPVDMykNTGrqgia",
  "key35": "4a5YE5jM4xC5FqLDNeSD1z957iHuSgJPyRY6jMr2pMgy7aAkPdfwDa15oCkFNy13knMEYTq8A5j6fUcEUSKD81NK",
  "key36": "4HB7Td7MqqwHpzDPp69dR6TXfimHCv7yFiHYLeMxLnQaNYLNZNqzUGjrpUt5aFj8RyLpTeJ71E8oRiTLD8RUENUF",
  "key37": "4TaYETfRZ9CDiKBk8G1cuj7JCe5Qay6pYgHd4aQ1EucwsqGcJzV4wsu85j5A8V2KwdjjEaEuxStHueqUEWkxW49B",
  "key38": "5ytz8qPmrkLRuBjzji7WFeUMcM1eqHDdZpMdNqV2cZ6rUvdMYRonujgzKNu6yAroiKoWqhMm1Y5XaQMvvVPqCFo2",
  "key39": "artgHMSqsjaebxPFM8PBKecqhrnhyjSjP5eX5pVeieJ91DptVNPHQHjM9triRQPXs2HALkg8DpWgq6mCQjeMArE",
  "key40": "342PoM9TWM6yZ1MSXhQAHTRnxvvhiBvmCB7rvqreKGjDTBvMbxizknW9kfrUNv1SdPkkv17Y52RZaZttGpRKcitR",
  "key41": "2WTXR9a6m6a78T7bi87gk4pdQReWfeKfpfZVFK498an4F3qCZKHQjFhBqMjb3N6GPXuAVqyNy8QiR4JoqbmjagPR",
  "key42": "3fej31vfcyhwCcooQHSf2x2KqiBeLCd1QcTCkUNbHd1GhUbk2MkaTSWCYX58RDBYf8Uj9RqCJVT7hiERd47bByow",
  "key43": "2BQd9g4qWRsxtVuP1Q8CJhh4axAmJuFHhNzaBUqksDhyeWGzEHKNfCHMKj4PB3jFw4ncDCwfHpVZbMPpuxkAZ9d3",
  "key44": "2YZTaBiLoLbAywt1HTu74Q2MXvFcPv6zYkdqaa7EeF4opWGRDpZcqB3n3KtTRALYgM7ZpgLjsEYXvbjbwTfBa1mh",
  "key45": "2dfFmxXpcorVxJhqchB6tH8CHYEG2VaqM5j7tkTubMc8uFbrL99o6g6s6BbrrRooe7o458QGeGBMNXzMCBa5kHsM",
  "key46": "nAHvjvEEbzTihELpYjqFdtHiHZpFLtJVGud3XZDKC77mvTiWjufEBRKpj6hYAt52KQk7Gn7NTxVxqiWLaBjexVM",
  "key47": "57PTECyTixKFzDSQV94gXj2ruocFBzR3n3JQZdYYLFd3qJ3WpVcv8YvtEJYdTCkbj2tTuioWErkUUZry7n8auJfT",
  "key48": "4foeTKuvJB7XNZJcPhpo3gqV5meGCH198i3AXQu4Wwrwhmoxj8yvaDKUYh6e7NeZQwGLzRMRjcbJWW6TrCi7w9Rt"
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
