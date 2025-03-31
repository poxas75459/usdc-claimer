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
    "54vvG5qaJno23HTcFfTzo2yZUe6xD1vTUG55krfMSRmKyF8E29T8YHmA99SBE1fvag4U4xyZfRXtvtcDYfqQjL94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvNuZPgw4NU5sfrmcZyrk2Co54zqGhWtcQk2TTRsfGn1V3triY7QtMGee5myKBx3KtmzL7SsZZaFUfPrUEukCgh",
  "key1": "3edoZVM2oG9zdU3XUzWnqc2H4uEYox4i9PGJAzP9dywGeapkkS7HC41HHiKEFZ12FhguXEm1ob1cVf3vjhMyihRv",
  "key2": "5ZVgxYCxH7hUWpJPwxof36oPnhp7EhhN87iru5j5SDHW2dR9gzNZGCNeWGYyByvrh9NjHPFzrEs11xqL4vitbvAC",
  "key3": "i5NiYH7HgM7LUrAfyCawGDJfWGNwTshjkTCxz61yEJxc3sdYW3FQrbJVxLkB3QVr7bY9xDBKSHiVb2QyB8mtcBy",
  "key4": "5HNMLzfLuY6BzmhzSS2rjzQVdnBGG4KPDQC7PjJn4AXhzrai5AeiyyAq6RMHijhcDstyNLMidfgSDScvfy1SNPvR",
  "key5": "4fukqmvAh8BQtpPfVmUUzRHQmPYVWdAH3sJHmJoT7PP7Tp6xWCJw86zJUxf81nEWjg7bk252Pa9i6CiHADPY2ykS",
  "key6": "55njmDYtgRZfMPPFmoEqgPSHZ1DSFwj1mTAaht3JahqAWTNrDTKhPKQcdUxigTZksc9Hp84gJrxQ7jsREV37kQPD",
  "key7": "5PCmEM9EHLcD51G1CBMsokW5TcbiE2ys96jaHA81kttvoGQG3JxEUHGKAnuXeN9Pgt76Fi8p1kYLnGi9gJ8W2pTY",
  "key8": "64HKF5PScxTqr2Vs4sb5pkgTyKq7sWttfcuWGAwGTiAeRnAAdAWxU8t3wBZJ4uuhkSbdvw6Nw9UZVeQmL1fzBoRr",
  "key9": "3zgYx45ZcRHCytsGnAJmCnddyNJ8qmwDGcsgrHERNRacFtet5jZX8oy7bpx48Xo8VXf82sQnNWjL4h1JHMVq6rBv",
  "key10": "4pQZKbhhkQDjttf4AQbumjbhzUCiyLTz6LK8fNo1uSQhXiBJDJydvoLTCMfVnCpTsqdfLW9TQSm1gdiW58XFpckX",
  "key11": "3eugsdxnBboLFnsAitrW6JcrVEfacBwQRtum5uRYGeveHUwVXv3BpPXcca2YhViegmSUVH4uLSdMfsZ2nPMMY5eT",
  "key12": "66DREFNnCXLVyqtChgcTbTiWbZtUGs5YKq88pgTSV5nnT8P6TS1M9XZLihSEPysM1wLKy3hunAwviZzWr8Z5oMST",
  "key13": "5eNiTm4HiQfmTpM3VeGkAcJpa14Te84NufpSc7PkavXvNXK8rkvJfkNeGzdW5hz7YnDsEDUJ6X2aidwM1AADFpjD",
  "key14": "2MqMxPBEhQyxmU7AvWaHevZQU2BoK6FqWEp2V2ToxGqShUcFHLTnjpSZ5gnkJb4NCkaAruDTMSkMD5SU66hMHBwh",
  "key15": "4fLHZsV7CKQuVE4cS2jd8eqbrsiNXUb4GAgevea7zym7YW61QkDHStwHHffaHutEBWGnwHaBRGLwTAXBzDgS1ZEp",
  "key16": "36cdgYaHRxDWp2d1TjiB4JK5bsxbizkJTVNk9d48LiQ7DwjGA66R78UW6Y21EKd88qQXNuC9m8PQWqEkdgNRgg8C",
  "key17": "2HpPUVAG9BAK13amRf15R96tUcHwPaLrhN94W5YrCseKY9RsxQkqG8eSm1jYGk6AsAA3fnCmKN8X8h9o8MH7y9u9",
  "key18": "5SbGM36YYv8a1V8CWGocWr1kcL8b6KRJ9SnMFShUyXVjuiGkrCsTN2Ezy8LZZtoNvhiZnpirVYRZoCFqnLvUziXJ",
  "key19": "2drstaZshjNCE48FFZ6kbMPB39G8oSSRUJRA2LBdkGTLjQDK6sRTpwTyLi1XMuGbfAEiDYoVUsoRF4sKRzgWEdbJ",
  "key20": "4X6T99mR9KVcnMJyjGjdAAKqzSBMApue34CRxGn82TJT4VNqGqBwvSUQDtjJzQMHDVSWfYZMgyBzpSZfQMCPHPQF",
  "key21": "2MAmqHX6FT6Cxa3n63gPTVisYFojbee8esyBViLD3xPccKP8zKYC1kY3e1QyHdvr78D2fDmRyBF3i3F2A3SkE8jj",
  "key22": "4Dv1FPzW57bYiJLnktGGxKtTDNretizAHhg3sbmMNoYWjSEVV8yv5AwksvYzaERR5oKVHBAzbYaDajoSnJJK54WR",
  "key23": "4axWAmyr7pNYXUu9DZSiqcfHd41KWPgBDFiqwqJeQMTnEswqkcMZmfNABnfUdabVnBcoUsmYFiUgxUyjFnX4tjop",
  "key24": "2sMSz9jEXG4oAjk8ssHhjUhEceAWRRj51SNQXRksFcFvYt4d8J9b6WJwAaSyX2CJRjEwkiToj61oNtqNqZJxxKFc",
  "key25": "2o5G6G9evLk5CgTkGvkzsPpg5dAxXcbH6f8V33qx3rsa4LsMf8tjJcUgUxVH4mscPSefbgsZ2jqDHHi71bcsEWsc",
  "key26": "6422sipgzoJ4TX8CYCefH34dvU3FauFDes38qmp2Lczvb5bnrmXXQWyHZK1dkpBR576sKecL24LBmkAxygRLKChp",
  "key27": "4xLq3STamF69ZLUb87EH6xWs4T16GeJuEyzqpqCoWvsqtKAFiB3zRjWsup8PDENAKvbF4bAeUAiE4YnNVkd7dTDw",
  "key28": "5rZi9gC3PCkdhs3n8zu5DdsjMuR9NRMdaZrjcDAxg3ioFgiycbUG7R4vQNfQwj97baSReeeN1p2J4tPPsVmUzGuj",
  "key29": "3eVn4JD63y68L9j31r6cQcJXbaHVpuYPCuLLMbudzXJKMuRVXdSknPKUBmJnSeK9uM9FDR8unEi5yChgSAvwAWM9",
  "key30": "3ug65mgEtkgcVsERS6SycG8qMeCSir2rG1tqD3DJ7rawAPx64c9wkWrwoB6JFs2mMysUVuef3HNp4dbfVRuSZpPw",
  "key31": "UKBf6BHzmkJBAB5wfqds6bUtSsNg5JPhY4TAqYHS5os4qwwALyKCrXszcmhyZKu7kKeseocFMmn7vaAVQbSaRnd",
  "key32": "23J9PhwmvZdxZHVRD1ZE1Laf4cGZoJ6WyVp8r2PqbwQMFXB3oKyopHUvFo6DgfnXZUNLq7A4JVmkrGFqNBjDCS8M",
  "key33": "9BE9mBg3jMLgzKemvS4ZPm2DQtW68zTPiR6FoHk4Jj5ex8bYs3AFrXHG7xJDVC7FnHWDmmNsL4vTAmHvQA4pyXm",
  "key34": "24euhVH6ZJgndZa7wAsa6MNjYzPpzcVEwjRbcGVxVgG2pHnAMYaWX8efwBkrXMVT1R29zRPmv7TqDpTcdwSFHgRT",
  "key35": "JTiAEPvHWNtnHhUWFRRw7kFtpYj1cRqf1y56n7KtyeghxjpaPDFQGHL7wakTXm2neWyEEDHMCvZkugM2xd7rNTK",
  "key36": "2FAewqQfKroK2LDxj1WEyjeBhFtEK8ZHEHiAiqmAa77bFHEdy6FfkRFsmWR2xaR9PwMkh5nZfqwhCs3f4hKDutFt",
  "key37": "4LNSfERmE6fAGDvUarKqp6nk45X3bjAkpSynktcDcG12ydVdkjxuyiha4dzraVtQW6gdFSdGjivkXXW3xBbgY4Jn",
  "key38": "5gmhbR4k6M8bZpkdVEWo7YSwN8aNwzniUXLwdwFqKVNQsKzuesEEfZCwHXWuQbf2CieS8kJVEFdYGMUQPs5Zrk4T",
  "key39": "3Bm6ZwhHz6MasKADcJL5Dg94RmakmFoEdiZ8asDTGVQadbXgEyeH2MpH8dTZbZ3jm1nQEW7HS9TD9uMjppaNvn9b"
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
