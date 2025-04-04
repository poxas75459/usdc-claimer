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
    "5JVmLNJbcZaZddneYiqopv3GRqHbmLeLDeQKn5RoscrQEbcDWQTTZbKEkuxZZvmtMAPDyq6161yac5yc4QuHgbZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUkUSu8PeUZdQguoDUvmcMmAEKy63y8N9KDqTc47nKDYDsHsENJZVtx5wNM3CRpvHFgjd3j2Hh9N8BpTk1qQ2ox",
  "key1": "5vMc8P9uFPgkzzk1knoKmXvizQMFXi3pdsJh6oj7XihraX5AkyWyfZnkGjBm3Sqrctyyf2Fs3PEuWrHn9TbZDD8h",
  "key2": "2fHmRG3hbPnmAkeGD1RFwrMGuJv6NXEdmKxfXe72BM46t583thvQX9oakcp7hNGirCEuNueyDfgEsnx6q9YpwoXe",
  "key3": "5xP5ZBFbjbkumPPoEGCbBV5VQuzeo7MZBvywRZXHbj3XgH6yPVPucM3wfzgKYpmH7PGfqfVEsyNeuwfCJ2jXB7qY",
  "key4": "2MsfxYvMd58SJspgsWf3sR23dzF8JehomCMhG573MpT3LZg6RuBT4dH98E1nZDLX6xfNCBUHiDeWawwZEAGuH1eu",
  "key5": "5YWW1Szv7m6Nzu4274cHDGme1UiDf6B6bumTTgdCDnCwz9bacfs7ziGsgoYFC4oMJDpKzjrFMR6muYNyuZNiyrxH",
  "key6": "3J5wzfPJhMZAu5nnsTD6GbMtgyLczpA61TxtNUikMEaFsudd9k6nVzWpcRyrhsQvbm7RtC1pRMLm2FEdFc6kBnyF",
  "key7": "5Et2CuU1rYF7yyWMMSHrbvJTxQoAZoVdGMG4HGyzTU4YFA49RzoNDUsQJwmjNeZgCtdv8SaHnb77AEff3uc3AumX",
  "key8": "27s4SnFKdi6ejXLacb9KJv4egCdiNQPWXgNywnvPLqpUUzM4XK7khrAxjxrhDm9p8aXhsZonssoH6kZAoBwfuhjH",
  "key9": "5iJFoQ7hgkqD6jgzzoiktJtVDGrsNemdH3DiztXvsRVnLvbs8YE3UgPgj9LMj65aEwiZaAwnEP5RPfNnAZwb69CM",
  "key10": "5EvYz7kWSzU5GxxM3BXNe4JCNWgeynnujDcDUw9tPRYusxe3UBNgC6kxR2bs5qJtnrQ9G9x8fDb68FGejkNBCaUM",
  "key11": "4zxaSWRDBPtDcvo3pnkdX8Yi82ExsWK6zM35bdosds7DezAwMtd4na19kE6s2STLX2zT8FnDxfCoq1wGJJta3qtj",
  "key12": "5N75LGLRrTo59EZsvFvBYzmZLftYq6BtiAKryUawdN7aEHnABHop6G26MnZr8vuPQvKnbiMjNuGsUkJHphmvuKdu",
  "key13": "4J36WenWn3MzrxbQy58Kcu9tkijbG9Zjmr46BW5kGgns4Z5k1k3yby1xUrGyRJeDWRqEMCtGyDgy9JaLTXDbPuMi",
  "key14": "2mDVoR8LBRggiGYZTUN1XpYZ6VZLtuCtvu5uE3T9m5FD1k6MDbRpX5BfmGSUUx6JqGMMzoEuXrtLLFo81VP1VATn",
  "key15": "3zX3siZaVEgd8PnB43jyGtSh2pkzWzSjU6mrLyKVPUsc7BeP5qB1fWmCtgpr9iiaaGU1FoCzKkFYNoDvWcsRvqrq",
  "key16": "26DPqxExrbS69dKiETzEKL3sNaxG4BXiZpAn1cVzR9Z9ycTLHkXD1uhZGaK8Bw14823VWxvczNc68mzbEDogfY9k",
  "key17": "63htNU39x4C1yuLXLXo3sqeHmAFEFcmLGxBR7j3o9QgGLbCdCyTuiQo2m1Qh4AaJmvMnX7Q2E24SuTiR7EyjsX2x",
  "key18": "3dXhRPhqPsVCwY8PnoVsRiCDeU9WzNdktfe4hnoaqKYmE43SyvbKrcABGB8Uiwv9SWPdpGQidwVAGnw94KwmfXx1",
  "key19": "5L19qjoX3yPrEXTd9CGf4yB1sbBFtinhZHsQ2s9jgct7TYMC9WKkfAFkzYuJEzyASQjVGagSRGjGGCw68ctnswvc",
  "key20": "5nEYWtPoiyxeTynTfXrFhV8z7S1a6SvweuTmgnhDQvfdziijzyjTLCg4SXZQ4xrLPAZRqZKzjfJ4rh8WC7LLf5pY",
  "key21": "49ppBi24USpHF2ShMYqb3rmtreh4zxFT8k4c6fqBWg79hCvuDhEHtBFcQC2iFast4ya3hcXwjcb2tY3eQxetQrMG",
  "key22": "3og4i3APFV9ruqobEeS4buZGbZaXjkKYdy3irW7h4yRtRnyz3pezZyiN9B3TMaMYswmMDBcAVKH2qx1Lp9VVuc6q",
  "key23": "3PRPspxJDHzgw1cEPEJifU6g2bNyNF67wGYJ7Spfk6ST4YySsNJ5B4Re8aEwMYJBbNFncrLby9weG4pFDQHacg14",
  "key24": "5Uy2zf1HdnyiwhEN2T4vunrwjBQH8YhRjDkvWGUbnNDdaTqiPi4bKzvrAr2pntCwxMZFZpFje2diXJsNr8SkyNK6",
  "key25": "9Vz1cGQtUqYcnuzTdW5DdAsbnxUEetYYQYsAS1iP2f7n1z79navEqoq9smXbbj9agrn5A87hPkrL5pLzJFMpBpq",
  "key26": "4s4WT7edXyrA53yAHgqHNVLiWLWja69WXUtaQVV4Z7u1pN5MqXaHuS9io3yih6PZsFbN5jrPzWw5aBHxzaktnvLN",
  "key27": "2jDjBJ6Zvv6kNBo8gV5HRJroqPSp2rWqguCX7SieWepTnoKXJ5xWD4RYXiokmpXij5q2tcdDiPBGu3pRhoxNW7MH",
  "key28": "ntk3hkvUPRPZCz8BuN9tHzf6DwVzv5q78RxBNwJeRwEC8JvYwoi4rtTgQjk5e7nQVcP6vM9TfbWorsrNZTPxBEm",
  "key29": "5hHQjwxs5Ftspukn2iYxNK4HqJn44JrapSosRsEtxroK9bUUUD9yv9vs8Mz5Y4ojCWR9paYNHA62KMjZT76wbTKU",
  "key30": "5mfzaDqYpQLSaY4TYC7JbSye5RPTa1c8Fhzo5B2qgvAwRwNZzBMWAuTHqdAE9KBAQrEGMRk2TcooLXt6tb68tZ3K",
  "key31": "3jwyNbiLru68YZrAVypCC67nwSbUPMEyqse6hnfuVokWz2kPY9Nk83Vic3C7ZQvc7obzaQ76TFnDTL6PibudkLGS",
  "key32": "4MPpuSc6hC9SCszwLwDAQVzzGXN9vWzDoyfuyh3v86vGvjuJt8uDmxN7Px7pdi21yiWJDjNPf8V1YYDjaetCxcLm",
  "key33": "4CeWvKyfDRQoeMNTyua2ie2mzgfkQn7QYKZHk1RsVsyAaspUKCcuZUwRt6i7ZuXnfyWQzQ2Q4GaNps87hE7Dt6UL",
  "key34": "2QhbAfZJPteekdPBmJjp6PojVUWVsB7hmVttUegy2wUxLDG2hcjzYech6QaDtV6Eeev486WRP1ZRa2DseT4zPStd",
  "key35": "5BooLUej7KqeUuy92LJJYexeCGLA1w68utyhhAS2u9WDsgkJNAiEqxnoq9w5tdFDdpeUweEAWSQKcMtT3Zf1DNFx",
  "key36": "2W36hm8fHwtSVuSdRuo4up7ZDjR3YUzWKsVP7tqapceVfYnMQTsDTCUWUC8pf9uyBQVkSeJLUC6UDuGdWnH3Fwii",
  "key37": "3kborH1aVGowUM2UFUp7RWpv1sMzR2xtBhtjDvtm5Ss7MZ5T5x4wBHBeXrdtB9yrrQNQ2rkBCNuNqzWNUkRdL19i",
  "key38": "qVwmioHsqR2ExtPecdQcc3dgnaXFpCMpaK83VMd158ryp3EYW3zZNiZsR2WnUBPjQRo4XNpvadFcDF4rSDjxUBe",
  "key39": "2AHJoCB9w3JaRthSTmYVoTNW71u5ULF5j4R9MYygtEGK7tmb2jW6xW27ziXx77gRq7ZSvp3uM5153iQWPceh7raw",
  "key40": "64xRLzu37MqEQ5tyiEe5LBGMzmWx5SgrfAiG2MScNhDPBEnQ71oJijuHM8DvqymoWU86ntx3X1JiqDE5jh3S2kF9",
  "key41": "4jKHJsRk4TaiipVepNANCi4GWyWxxwPcTgambxavCUp4XrE6Ej8Y2qt2Pfp3jPTeKz1THTvsLVbzD5yDYU2fQDxk",
  "key42": "3YkpBNkw7AsS3BoAPKg5UewhyFDmQWM5mAJpXRTfKKTWyPkyYvjGkLJoUem17Swc2uF5ZULpb8yEWYo88QsoKC4H",
  "key43": "4jrnswBgt2R6fdXhPAKXbUq7fqvzXxQBXybw6rpnw1uMj27n5hMfK3iaU38J5Dmbm3StGvtAUxjV2qv5snveyWGf",
  "key44": "5rF56SjFmQUPs7nubfRtRRQrDCrBovtTTmfeErrA6KStreUHU3Z6RHSk1sLx5KRygp7cEanepztLnPusRwxwb771",
  "key45": "27Np38axUG96XHKXuWsVynjegXByyp1XSpwAR173zLrdZhqGZx7FEdik59E8AERrBeQwzC7YGbxS9ZfmamPeXQGt",
  "key46": "61b1bp32KTewg7KrMzi1hFNAXyQtM2qNvu6fVsH8y4Z7Ffq7Dyd7FfD77aoNQJLmbnQrckRnYTWGcXhog1aqcq7w",
  "key47": "fXcJ1wUe38PXJUR7nUAyYSyN6zeGv5spcKJH2VQgcduh51fuZSB5WF5rkBnohgt6j8akqPJSJVfC7tF3L2xZhDa"
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
