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
    "2XHtywm5Rt11Z6G9S2bbmrGvCefwQRsHi3LrsUVBPywQDivb3n8ZZmgtC81qeCh5iWhbRDpXfhBsEFLfU7qKqxFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGxT2EbwPrdDBd2JefzpwCCaxRSNytLfrsJjokXc6PZrKtdamJebnuodpcnppsdNKeWy95riTwNuSZWJZV2QeEs",
  "key1": "rxnRwPqnpMtUmqDuhLTkTbfDNrMrbLtUgUCvmonmv3gayZD5pJF9RPPc47JLKw1SEs8V9bmvTyQp2t3EfKUW5gc",
  "key2": "5iYFfAZGtLmsitGr3JCDZMymKW4V2fz6fejkbt34v5ZNvjhveF3Reg5ahNLB9sy3GsqULkbyTmNbgTCCaJxShHBF",
  "key3": "35yWo2aysWvqV3Kmoj8Zdx57KyEaCFtw4Jwon3ac1GdbZsoaQ4gVYXDpVBqtJtoqixEQSAN34MyJ8ArKPeDehYNZ",
  "key4": "2wrnS6KMALTqV3YoGz231K5JcmXBEMesxuvVpsWLjmDmrcbBU9tgEGygHw8kTXiCyen5FWTkBRctiFGuJshxdPEY",
  "key5": "2v3fnbdzSNwcBsuHe5UZo8kDaKacqQF5DxQFwzfzpmNq5gSKqRm1Hg9tYzMbJoaBZNVVW4eyakjQyeU6uyVHPskW",
  "key6": "5pqNLuUvNfhDnuyM8CYbWds8NernekVpc4rjY3hbA6w65ECBbWECvvRnFkW3zxw7MpryvBYnziozX6trjTpsW5rf",
  "key7": "3STy2QGr3tworrpzcUMZwAiMFJmZ12tk5qHpbsB83j1kEAgzTKc3CksB7YM1bU23ow4oqYweQrfvTia1RicA6xEQ",
  "key8": "CZeZHqhKovJp6AWwkLE6nM1DQFsWAxVJN4GWbwYc8uW9QdwWLqkTU7ztjcX97zvQiggQWfZV8mQUEWs4HrbNc5C",
  "key9": "23XT2GR2T7p5NYUwYs1iyLaz8efCaGArrkPvn2SwZ4gbjpagJoCKHMDbSDRLiYFMaJgUUMYKG7Go342grQkSwkxG",
  "key10": "uerWBQRwRaAdCZgeTtzTuX1V6oESETdqNGA8u9jGiFGJzoVtn7zM6JJuDRJqmYnkuTZmXvczGbbm3VwRdrmVWgi",
  "key11": "2L6Zun2PuhAWD3nJvcZSm8KG5hg8UiciuvCjSJ6dNrXVhiDoYVH6q4SDYWMKo1Di1Vkj16svLRTJKQy3v9usT8Lx",
  "key12": "24fnQvYKhQbH6kGMiqWtUx5VTFZRkk6d4iWrKMbZbJJSTBkxiSpA4wRnioZ3V9BMDzaYPTAEMLd12JDYfExxZojZ",
  "key13": "5vvbCtJRNF6ZVD2iGsYcupMDWpwrMGsoNSdMupAgiCS1w5aKFrMFyUVjSpmiXRxLQyuKAzrrDajYTEin1RwnZp4G",
  "key14": "29uukkdvvYA4dCVqM2Y46hLDUwiJSZMBkBNybcP4cK5u19Mb8RNTReJELKsnn9J2Hb5XMcQj1qQQ1XREUqtCgf2J",
  "key15": "3AcbrqgS1iuxoTQmhx2xU8fbausyN2ifYNAQ4SmgXKkCFVjRuQN9CmijrXPUD5iEMNBEVZEwfK6bz1zQePxHyrvE",
  "key16": "4US8M5khbfervGciJMNpL3VReEa2y7D7fGjea4NLaK1HS6KhH2mHF1kVBvGdoG52qamHU7VEy52mvVNP9CUBdokE",
  "key17": "4imCiPCdrr3VGPBs7ebEHJ339vtrSeg2pnwECVnkp8Nt6mGrXTfxCVC7qLr7kymbPN7gUcP3fV1vxK1i4q32Gb1u",
  "key18": "36vW6aebR93migVuKmSTXzydTTiomecFHoFU832X3xUzmTmhmhYFkgJbrntSvmQAPwJTk5f4k6oWPfha3yaDdoa8",
  "key19": "5GgKTpJPBsyxpbdaqgdc2BAGPrxdrS1w8kjqeDv4sJVL7EdQskykoEqyMQSGgKKzMuPHQDSyvLkH9srFYVQDh6Hd",
  "key20": "3NiUAKf6vVmutemSVyHFEZfLKy59DZy98QjrRPpcU1khTPgRqsud6NjH8xgXLxdPXXTDEXEVXRcQTZyQKV9rNNi5",
  "key21": "5eujcnNh5mr8KvPVhJe7ot9mhxxknfLjLnTcSy5w3ArVz6SVfAay7Je2F4NrVMHvwqq6k3wN5VShY2GePaKTLXZi",
  "key22": "5T9N9jtoRcpRfH1jarRyoSLnkxQQ9z7FxvjtBgQqQjVDEmskvKv2wNy6zPhrxYzVxkx3rPQX6DzWCzw4n4tbmbq1",
  "key23": "4FCJWDVJGtMAxTwQiEhrrCTq7FhJNSYVSF3WQLc9Sz9bKHYidB8kirjJZXTW3AqHfjNcQuWierWS8z7izUTWRivH",
  "key24": "596TH5U2SeiUus6RfozwkYBtNZXyRgMvuS8QnFtCuyr9tkWVHt19rrT4wHDXvJUdNxTMJFXhaoHBfxTBjcUCiWWK",
  "key25": "64LnTMT86hLBDf3LnYU8TCuHRDMN1pshs9vE436ZLk2Bf9sE6BSEfaJYLizamP2QXirDDZMCQgo9SAzxKw51DA5P",
  "key26": "2t1mCju5faDCyD3bzr5tvh2cveKtngviwBodspGzuEfFe12V81scy5TDNzGtVoj5x7icPpzA9rsPbJBFjUstmAEt",
  "key27": "64o2ENRR2okeX5zXKyVUh3uowK1gWz9ivWSspHLNzGJ6t5PMWdNpi56vexFLhx4o2rBkAmR3GeZEocVKe3bBQ5gH",
  "key28": "ynv8WD5p39oQgN2EBCBKkckbiPetxFyb1HwvnY1zZsN6ryprrmMMt6GDxLWFTBM6DUJkmWqG8Z6GtQq5QMuXqkq",
  "key29": "22nGU8Fh3ZYf8psiLxkD36gMjBBRmD19wadRDFKZNLJksXBRoECZgyrhJik6FMFmMEontkBDhTBxU1tkSjvxKu5p",
  "key30": "bhh8azvSbG31Nd1q2gqPMzWNEScyug5yU8jHpHkLYNJ8uikstDz6EkLnNSzabegyCkUmse48KCiHPfo78EaGmAP",
  "key31": "3kvVEwjY2eLLQyv4zfTZ3jhPbSuffCoD3N1Wj8QpQG95eEbA3FpURq31XhQ6gZQ1d9fWDQ5meFMmd7s3Pdz3tVSE",
  "key32": "2eG2ekBhxKnL83negKpEXNJEjqedWYTfKztVvyEFyTeQEDyByt6j4utiwtEd6FH1wwNMAbDZFNhoAa6qxP3pwgpp",
  "key33": "3DDDK5ThDhBE1V6oCAVoZS5Zrbqxqu3tPabwPzC1ecDLvRJQp2SudnFDsyvWu7kwvUeEiS87AB9MhRSi1986gQc1",
  "key34": "3CsG6hZHa391uPkvHWj1zE6ZTX5zxyZw7kBHxh7vpmKwHFZFRdKRMRLY7CEopGC7qq5y6iVEkivPFWdtCLSdD7jC",
  "key35": "4h2xQJvrkPkXgnfqsqohzr6jBbLDBL1SFf7uwmqz8EV1ZQR7Sfui8mocPkjhK7X4woMW9NuZo3oQLiLnmMhrQ3Fs",
  "key36": "46j2E2fECsWg5p72k21mam6CC2t2V1kB3intR8TRG9kWuiiGktTo4wrZ1PN3UcHBvSoUgqr1ZtwxYBcwY69pDqPJ",
  "key37": "5PFQeiv8L6xRnRFnoaT8msKbmCbrR9G6HssxaHyUMkFTYXP2wwAs53MpML9ir6VFVbxPQ6Dv4DHJFrqf8zVcNjyT",
  "key38": "3YM8NBvZSSg47bdvH2P3NKaPyjFHFARVwU7GscYDR6aAuU5tUDb3g9Dk92VZPWQr3ui4dFC7fikS3mgZtz57rpuu",
  "key39": "3wfMN43oLd5pZ1U7XtjwZMB7BGxhYUz8nQeKJnpagBaFecfEFTp6mos7eFFjAr2QCX8cdLF4RyarCdkxksz37PYY",
  "key40": "XNbFJecqWTPR5j6zezRXDEtyX8DuCQvcnYfigATdn8jke1QXGKEgTQ9f5gczGcMrgAX5hJ3yryJgmLJ7z5cETFW",
  "key41": "3XNQsVHN5PvxA9euppc2AVYJfKL4fYstgf4AKY4DPriR1yBpCCUXad7XWFmgC86kfZDyQ8svr5Wv4gSpZkRFDM5g",
  "key42": "48jnZuT3oqCRaCpNJHqJczxj3EviSYx8XbGqRsZVPKeFty22cRFMYu5Zkt3atcNBH1faeQAtCcEmqpUbHjaNtMXY",
  "key43": "JAfBJ9ybNbVBdJYfgaZ5gF5go9YjVH9QDyDTddS1LAQuSQHm9VR8EFE8Rcv6DJCwdbZ2QJgs8SY5U4eWeHi6ZTA",
  "key44": "4kGz5UuaqSv1RqFWYU57PTk1uNRRNXWqoQqatkCEUaXfsrVdVFDPo7aJhMtbEbg5wdFNQ38z25YSRKkezZ2YfFBN",
  "key45": "5gZnQ4DVkBgiuphmrZTJxyNsP5xABbS1DoZAN7c68DKezVPyyqbUixD2DPYqrptTiRTPkMtfbmRMa8kU6bF7N8wy",
  "key46": "4X6PrbWWYsCpyZGvDJwniwBzEv65XWzaTUnx7KU8d4B4y9V1hemP4SfgXJ74WawzN1hPNdkD5YKuabap4cfqSJYF",
  "key47": "5gTPP9xZUw1zkmSFEHP2FRiuuqsnuddGYDRgwhKQJggkz9AuSo5C7XgzsDEEVV6wVp5KzMeQyLa6sBCVv62RJZ36"
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
