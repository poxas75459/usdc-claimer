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
    "LSnsZP9p1qt8D7epcs2Xqgnchdq6PWXuRFoRhjK2MK7RtioGNUCFsZYQq57X2XQ9d1JTfjdFX7TxdnmgCSVcpLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPv9ZRaMSgzU97BEVqDNYyXatCxGed5utKwFipWn9hUD5urSo6tPs5nsZXGfF7onJ3GBfvFDP36cv8XPHXmccAz",
  "key1": "2AVwM54pzFVDThMXfscUyEdQH8qtugfW6dgRYgTQjJwJ57wxF5pbbUXo3T5wYQnnYXUmqTKaMCU36wXDhNf8k7eD",
  "key2": "5jEU7tfmeeihiRJB8UbroV2XwiXydmhrF4bDPZrRmSxDzdd7bA3UgQyUcNbUgu9E9csTmgmqa6AuhtCeXmVZxLKC",
  "key3": "kRuGQLmKpC8DDo48izJDs7xkftu1J6B9FfUZpLznYfwwSXyuhkeKjyVNJga69pWjiYkEtgyjeBPkR4RHDyzawvX",
  "key4": "3q8UXqhoYV9QnsrtY484ScVKSFGhdRM4vmrGxQoVVPAh73fX8NZRQowzb3B2b9xsVXbcTU4KjsToDPEkaaxqGi9N",
  "key5": "5Y7sA2cSmpZPv1T1r5tX5rt7Qb2w7tiA3Ag7P6PGCo9zj1HzGg5RodufSo4mA3XT2ThDhBKkGSfvKgPAx477jeAE",
  "key6": "5vmdrLUfQUMGFHM7pNYGphmQXT9Lg49jQhHMzdD3PgwXi78K2EKFTL4mUoGrbfjyJesdwQJBa9UhJuVhpHMPi25b",
  "key7": "24Un3YRwQWjz9Ui16Vunj4Ve6v2bZw2LUABj2449XtkgR18DZXDr4cNtNWVbgoKhf3mLydhoCFxaArbqNSbGJ2oj",
  "key8": "4cb3zU1RqyMRxjZVUferfoZ9kHYNdMMMdCYV4LMWz6uprjxh1tBFcMxfJ4YptKggmtdJLdEJNvkxYKbEoJtvgNHK",
  "key9": "4qs9DRauNF37EJdyQtSvMpoU7Wj4aro4vJVLF84APd6igjfyGr4nSjmCJaAVnabWb98iyD2sTLcrrGkS8rLw7fm8",
  "key10": "5k9xAYPn2MfMVssncHZq2pVnG8bgosgtsLxXB6vt6Nfap3DZwrumXedZxkA6zSaHmpmWR1wxUD8wV2jBspvRoRDu",
  "key11": "5DKa4fanJm6BxH7CJ4xU87ST7XoDT2sSSjomt8RxYbc9M6rEmymR5KYvJ6gnjzgF2fHwD4TNkeAtRPVWtWq5xVSq",
  "key12": "ehVMYSAKdKXcU7F2BW1hEgvMxpAt1VRjkgesz3x2b2Manez4Y85QEWRyX5xFiRHSQiktwAxTnoXVHRgUbMzUSrh",
  "key13": "4cmbXac6Snn3mkNJh1foti1X14z8MnC9ZEtpeCYZCGdev7Jc2jyFjEZBtbek4pdbo68VtrGu5Lgh7Ka2WHoigkJP",
  "key14": "a4wvPsntBp7RrkREVMfLRq1ktfv4yP2X477n5RyPHBLhwEZ4pENvdHaMmPeLRn9J9R3RU2UYstmzhbXfzPSnsvc",
  "key15": "9iDrMrUK9ti2yNeiKwKKYQvQi9EVaBxenvK1BtMvFCz4DGTpELJquj4VLoX8Ejy5cJnnJa13U3giT7Pjgp1L8YB",
  "key16": "NGkUiyvNJNaymVh8vUFtmMnkVfzrZBa1PeDRp8rEnD4TpciMDwcpVH1admSjhQ3exxG46v1oJXeYyoMhMgeJcQU",
  "key17": "37u869jGtC2vrE7pyMVxpPs4QMwHHdqvpNubps7VSZYdKKCNraxZEX81CJMDc4W3LR5VaY8ioWNd5Wp4vTeN1xro",
  "key18": "vCxaMKB7uLv9pWo25iTeDv9jwAy1gGQu9iWHUH61uybMcD4fULeYgduuBZ9ZaiWfBBbpyM1KEiJ417Rwrhu8XfJ",
  "key19": "4S4s2vB7fdmvZ2XhiS4NsMVo7YKScCmC33qUyvGoyumF5CXYbRGAFh5R6D1D5fYdDqYj5dvozGjzQEprMSJobXQ6",
  "key20": "2Sf8RRWhmoNG4JTp4XxhjhrLkKhgK2fz5hNWBHwqDoACwRKGVsv2TxWKxiuKeXq6h78cUFTJyMVWoUWNM11ySWrj",
  "key21": "4jz48pifs5LUd6gnQXn2mDuS612NdWqSZuFS5jqkJZ3RuEwChDxCpqJ891oNfUtftUmRW4ifMYFP5yoa76fmJpn6",
  "key22": "5R1vk3gsADS916iHsfH2DzUiUZfZvbu1MsBgms9AZitPZYGDTSydsQxyuCf2UmsdyJ3qg24c8N2t8o6VKxWwWTs7",
  "key23": "29fRPFikk3SnXqCU1Sim77FNamxK13KbusMkMpmznXEie5996THbEu8S7VK5dVH3rnhUkqtg3uphqFixYsSSoYLM",
  "key24": "4uoFdS1SMKAihNX1qjrBFMGqNXeqYjHfhUsHmKR3VyShJyPoeZYcgLy3LjQU1dGyhFVwcA82Tmmr937Eq4mzJmbt",
  "key25": "38K1MptcTeTUZR1t4kiwTmRvxwEqyKMEULuZ1fLYJaYvpNHYUdNQ5pAoWZz1iKt39Y2gzVau8ANyRWGn8LZipMxP",
  "key26": "3Uw6aBhdz8T1sJp4aN3ugpz6m87MHAVMc9VCRLFQAzfUZUgo3gXB9mATa2iGgqesG3NnigampwTGkNvWbaG2t9vX",
  "key27": "3Yw4cNcWY9yFJdef4PTLUqGS8GSnyxXGz6QAjBENqQrXGuyz3GgG5fWLyxe6LDDTSH2cYZ5UU1jqhSKhSSinpZ1o",
  "key28": "G3BsvSYgcx2yMErf1VMquf8cu3onRTNQtUtxL5ab7sFBs4WVPhWLjrartbsKbXL3eZMP51DzQP5bxCE5zHuzzYF",
  "key29": "pxdMqtYukRVQHkoSgGhX1AsUEwunwG165VTbdzRadsgipJbjkmCCb7yFCGKakYNiPvmLocHWBLWpnh8Pe14CPTU",
  "key30": "5g3i24sAnuDBM2WKj1mhpmghREpcJKzCHPAZ2LX4zXyVBr3vzzggAoArvtT4DASrSPx7HNfC9fgx2MVyLeC1xBLR",
  "key31": "4pseCL7mGziC5BH5H7GmrgAreouqXCG7oN5dRqq3fiG7fMRyZj8wREZamUynsGiTMQB5djbi1gVkBWC6QAHg3yRu",
  "key32": "HmaVZZeLgrwH7XD9fUKojgx45VXr9BWjTtAcgzU5w7HTDao4wDtBFJwBx6vkKLCgoGj8x3FdsPsRm4gryEHRM1m",
  "key33": "4SkvQsdxCXzdaQwzxDjGCDVES9v775exspu79gCaN91Nrg3TKeuZu5E3Ev6HaXPjoux7HV3vGGFcCw5exk7go5x7",
  "key34": "6bXgA3rWwvxxLr9BibGLsUyZjYnJu5z3TxSu8V7LCak9H2Qy8WaqnLB123avgMwAweR9cMu5M2MPWBzqWBeNUwt",
  "key35": "wLqQUtMXyaNGeSkPh9VEMyo3XMZaVbGkqQcvMAKdME23FG3Eu9ppqdk1fbGDP7XsoA1HsiVqBcr4wcJp44pn1cC",
  "key36": "4hpk9UgJqDAfasMCjka2qhkYUbbXQzkpLDgKVsCQdzc838YF292T3s7RBac7bAQZvteJCy64NMj8ARf7cZqgwHMP",
  "key37": "4d7kZGAGYgHh1RedXLJZf3qJBmb1ZHPrVpFW1fSHzaZcv2xrTDnXxaiNSNyJVcJmKpnAAcmBGEiCapkpseSonbTT",
  "key38": "2yh3UDANYt19oxenGbiMXTEA3nq5KdjgPC6hZJR3ppN8FAGPUshLbW58MPTc1aEtQbMCPTTJJvacnLDVGtYfDYWs",
  "key39": "21YmLuVH5QWdgxBk2ooPmgpjhWy8cpmaXevcdYrxNQyRA3skvjxKXXH3xE55Z86fDtJGHYNq1EnTNMq8Ayc4q1VF",
  "key40": "gj3DbRp1ZbWP1xReGqYhC8pZLPzfgfjmCTAyyamqfTYqdKv1PZwmwquM7eR4WJfEaF3banMr5kFgoNhNY8kDShn",
  "key41": "35JhZAvmVEq3mtVe1kZmU9hh7Vm64CA7zUCkNU8oF7qJ6ud8dHKjZkJMCJs7momp2ZurMHT99aw95vPDXZcFSuH8",
  "key42": "5jS4RLCysLVivZJB3PhZAY2h9aTtHM1dYa1Q3fxvMoSZKLWXXrvxXzT6hcyWdJkPnGUEacANhAapgv9VdXjXomqN",
  "key43": "QRGCbiKH9gLBBkhqBoJ95Xc2LG5DMZHe2gYw412cnE6r9ESyZevU2Rw4c569xfhFX9nLRpGUK55fz9u7u2sAkCD",
  "key44": "Trr11ULH7auf4grDU6NiSuheeK9TyRuv71WHiB5PmAUruo2UHfW44kik4DEPEiaxyQEgosZa5XHsBegLbeVebbH"
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
