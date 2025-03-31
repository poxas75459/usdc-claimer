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
    "4AymStqFRj6gctBwW6eec3YgYR29fagMeaXrpxtpisJGK8MEH8UGj7fHaNxvWzV3bEmYZdLHiUGDQHYP27Des9TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tr9Jkr2Z4qcfS1ejhKdvKkZWzyvUVGYbqycFgESar4FRZmTJS1cFrJ5brQCUo94rrUc7NU8kVn16S5Y4hyXPgCj",
  "key1": "56dNHVo6Pv4kjw7iMBoAmh2rphZuQxBppuhsGfoqZP797k3295SRXV5M7reDEv1fzNmFtECYuWP3vppkDSx9ccuw",
  "key2": "59EvUdBU1qYY29vNrfzHxnCFX99SnzAVPMbdUJnkY7kXAmJRgGuynNCPzgwsDMW3nitq6oVWoRgLb6d9QxUgAnz5",
  "key3": "5VYXmh3GsXt86sJqE158qDMPQnJX6YMTLpwfyecqveg3gDmHyzQE6TEJSYv4TfjhcF8yXdazsEcyW9yh7rQXRzvW",
  "key4": "29nsZxo9G6ES8zahRzhLYQYntEAJMBPNbBUECW3iPposD9wRnVKWhuyC52P7ebtaML1LddWDzCdcZSuDfga3WeCY",
  "key5": "2oSPd6g8P5Vto1ta8tTEzTrGUTjEfjseZiUMqnnFdjYhHwifxSYKLJq5zUos3pGsR7LF4UJwbwGXyDokNgDrcrcJ",
  "key6": "3uD4hcU81mVFLkYyFEG9PGzYBs2HQDUYzPh7P3wEQxPJvDfF8eckudCypjVKk9q1sW42xAVeo9TJ1v9RZRfSEXG1",
  "key7": "4p1iEpFv5Joq4C8hmzEeS9768PFWcH3o6gqf2MFiXwLG1hXZTyLBxAZkssL94Ycg4UxGVnAqhq8J5vjUev4Naffb",
  "key8": "433T5cqaBLGjSJSBdcpLzE9w7CP6EtZM5njWzf7WSmpVRDWVD2oAFMXFP9wMdbXudUJy4U2oapcntnR2tL8huEpc",
  "key9": "3NMKsbfn4wRFH4jHP2H6tigxfoDvPNk4dkrUUDpNv5WYs9KbDhoQZyvGrRLjC8TEBy6MdMnp8REq4ETCxihHkFyY",
  "key10": "54V23EpenyMASV74pBWpRG4ZNhFwnFGu1WsWTnKLZzmQZYoB4XaHjR5XqMq4w2rpFbQ5eYbJQNZ9kkAkc6LV9Nf3",
  "key11": "4e22YvoBCE5v4dpgi2ohaB8jGPiet3ctqE7uVG8K7W9YLEbcvzUYr9PVqH1QKwvGzhsTXH7R9Ckd8SJ188UiU6fJ",
  "key12": "4MSWqxKB7qm1SURTGeNW2xsdqQmA4mz9QPemXuXQbptCXfsMg9tAous8Wrg4Z43KJNxwTg9Q7uZ3iwhqF5rDc78h",
  "key13": "2MsUU99FgLtGA6ocULfTEsEvb8EPXsHoNUJfb6QwMHAMihpnCRzkhuCQCwpurSrYDATctUTCfpArExuAvtqdEPQb",
  "key14": "64bwJTRYtCxhnvd6pnWbUzXDAvfGXFzkkz349bWkCUwyGaxKGYrkQKUBkhRVLgF4LKnRARwViwbos8E8iCdW4HT5",
  "key15": "xXAUvnnotUw6jbMTQS5NSrSZjxwzrY5JSHRG1BBi8j5iwK9NKx5ife8dpv7KN9jg6cXHbhiTakvoPqpMYrxqFtH",
  "key16": "2Y8CrHM2Y4p81BwCRo5QVhXYRByaTbSMXEJeMTq3pszSCGSiiupgjGXBH84mwCgqGk9MzwuG9wn7o51dN7cHYH4b",
  "key17": "3DvEM86XLF3c9w7PMSyffvEHdbgSfzv3voVmCXjYWdAvEDGKxHYWch1pdo4vmDeA7Pm1w9m7BtzUAyh8mKqxqLJa",
  "key18": "vKcxqfpHXYdwp14FVg2eXJtSWMDM839ErrvnWA8GRdTRwETWvd1c9sUDLGaTKj8Lru4ueAJ3utv5rtiJqj6Sqw7",
  "key19": "2fCAfTFwxpztCbaXbHvnhehGrBGtRK5mooPkMcr8TbpPpd7ZvZFximf7RJsYFsVcRLddRtGGzfoAmvjd3ArJnfcp",
  "key20": "4uHGS95UMFkS8zfaM1tfD8Yqn6C8wDwcJj8QErPQbe43eYrEWijp53Dyxo2upEYNyxa84kBP1LdtVBH1youCeVaz",
  "key21": "3eoPEGeBEjeLT15mL7WKq463Hw6Rgdo3Vd5w4M8jFFUY3V7EQLmTXsme9cQbs3cmg6VgitnExD8ibmXafkNibKan",
  "key22": "21koQbtphFT9GrNaLnwuMbrcSobG162uBsoBZ4fxfWyaHjypsoMJCgo3WKzjbrfCAEREYmfWQpk7TMDWUC1Lm9Ke",
  "key23": "5cjSappdpuhjdHMoyvDrc4FfsPzfTryEhsSzuqvS9dZEquQQdn6Xh4qf3aMmTeddL1jZfzgkBvGvPDrxpAgWLADj",
  "key24": "4XEoWjx85uaMSbGvJXTH1SzFXzqztXqFPfU53CFpq2NSVXVP9wXDfR36YuA4cVokMtc3kXzGchF1xCAA2x5mb1zf",
  "key25": "2eSH9H5utdNw8nLodJAHbTnywqnyp6vMFVij7cWbAZoAGVdiCiobbwUiJMVoB8q35rYYMyfmNSyfpSyYkAvcwLvw",
  "key26": "2DpoQTatpTub5ChfbJTZrmFo7Aa5tZLcpTryzYXEK9F3MLsnyzNaZwMhqPjogZXPp95EYJuLBN7taYWFBrxRqtiR",
  "key27": "4QhrmnXsz33uYW8C3CBg3irX2FyrRQr8vRTN1vb88xx77MwMdx6NU5KU48hm33f5AQ3fvcWGnyFn6AghjbfMv8vr",
  "key28": "3H1AhcY4Po6AA4JFvTuq7LsJXVcwfGoeiBhhCAo1aHMpgYcic88zNBYHnoNpw2pHa1Smb7vrFmFveC9tpoWpskL2",
  "key29": "5zKkTNFf8nbyGkfu8GeUc4QdZywoEzwrN13x5KogMHnCQbgmhRN9xS7T9iuVX2kK5E8mfzt4D8J9hB3mzofVUFbe",
  "key30": "5cxRHkp5HRtWnxrZz9gWBV112nL4VezCHAFJrq6L1HKzPcdHfqyZdqgZ6K1jfNqkLeNfQdWqsPNJ9Cp5TY1yECdY",
  "key31": "bPXrJh2muqBZRuVFUYBbbw1ukjfGkSXUyVBXMkkYuQn7wBE5xCKRcuMQn32TVr1aAVFKNBVzDbXTSLKUXLLyJCY",
  "key32": "3wc9gjEcSivmQGRaMJEyPW5KVLXB9DUWGYQgAa5zx5W4LfReQ9ZXc8VwjoFUmopxdWuheo5T17aYACYT7NKrYby3",
  "key33": "4uzCz5nj6KD8dkPTPfNiwmgyqC38kYV7YvEKfqsZvzaTRSYuag5EdbN6nRM5N1LRRqC9Qu8soRDtn25UEb7r1nVT",
  "key34": "CX8ShJio2r6AZWQJEfkR4YWMA2ort8mdk2fyenFeeUMbZ42UTn2dZdufnbAvCR1S4vMNwSCQt9NRfLuG4bkpUYY",
  "key35": "3tMdGXPoRtZJMzbrLhuNjaX6EPZHcKvoAT7raJbipYQPUfrEmC3PfCf67GMAYXGvktgPNvKRgzGNdV1WtJu9RgsE",
  "key36": "26Wg1Zq9LndYhGCqzX29bCXBAnv5r8acbYAYzR9Jp6e445aKT6fb9nAEsJ37ppTEV4b6VeXi1whRPDYF4aBEK43Z",
  "key37": "5hZpUVxzXjSjbhWaDVHaGvRqFPHNPzvi2g8YPB1ZtupUuSUnmAzynZkgUadpn7ndA1JhkPKj7Y1HDMYL4K6cUf5m",
  "key38": "622NRchTLt6UiUYRFXSRKRcERidWKfqqVmXtW6YU3GBArmngrF7SUadDqoNtcLZVee81XEoJvyKp1if1Y1hH5mGG",
  "key39": "5LnQGxq4ysheVRc6W5Na9efRXK95ZqJZ5UuhhKqMFRrRENbS2QrQDJykDWHC9iazCg1i2srfcdh31G6TwKD2qAB",
  "key40": "53yXFoStEWij7oxJ9y2MqhfaXLZQFRvEdQ4BLAfsZnfWvSF8cxQe3rJ9YZ9LST3QpqcpKoHwFVJSZesQ2ashNBHm",
  "key41": "4XkbZJ4xY22FizEnP2dYfFcbnW5rMjcp47sNp4i61bHE1Drh12sZJ9PhBLnibYF7UoYsj26wS8vgD3NR8PTzXBsU",
  "key42": "436MaqbL37VA5cGrmh4yYtyGREN7t8MGJiiHy7HeG98KuVcU5EuCoLaYpz3ywJTVZxXanY6Q4GSR7pq1foeCX6Hb",
  "key43": "4yw7r6QwMQeXjgzKmuTU3h9UnJC3LKsyx4Tgfzo4McBTejk5moEsNdNGEyqxU9XtkDaREsX1z8FgpWdU9AFguZCy",
  "key44": "47fFRBNhuAnjWnBKPsWWosiUKFkKZ5r1Y9yP6TrE5Xunx6GugqyoWyKaApQkJHhrykCzNa5orcm2MSSQTHax75WY",
  "key45": "vEdXYSfoK51837T7GPwGpNeVKW1W8wfRXsdF1C3owc8ahswAzgrXqoevsPtTKAQR8NA1bpgU2gr2tfJBzwypnSX"
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
