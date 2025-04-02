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
    "4KTQbnCAT3XohgxmpfZBtEuq9BpUsxdg67jSu3zcZ3wpHk5nvaJhzRqys393YvpWXWSjG7i2XHHZwtRSwAiDctyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4kmXWt3StZjx3AaUvHKk2i1eiADFzRfoBJkYYwtRgXRCipLDtSbAv6uS9kEuf3A3F5gEBwM4Tgshtj3rh9RLJa",
  "key1": "5HufTurjEW1TiuY6EPTftWRvzQDA6knt8H9CQ4aQ8z2BBueasb8zQ1aVyUH8CWm6hYhG3Aq8ufhDi9KhhefJ1iWR",
  "key2": "tGmMkcy3JhHMUEdMBAffT65mvgEv5XMUNznxvYs5DxfGMxFtDRLbHTUqJa9jkSC6veVjn9QwqrogqtXPmMuzDXZ",
  "key3": "3vraGtTMM6kocTD6cRr4G4MbzmqFNuMuATL7DDuHpYvioTufLRVZ9X1EmfR3Gc91H6k6Nu12kVyqDLBYp8EAuAqV",
  "key4": "2SoDVeyYPh9sVSYT9AyQ2iyZ5qgWuwqdcHGQTgSKgf1wTdmXUYRAY32CHkqHpTbYZ4dvpiFL8W4eAcsMoS2tmrQX",
  "key5": "qBGMx6qixWY8mTL363TMyxSa4asBkJxHQzxiWaZKVkz2cQJjME8tVPVLSTQyefzAcEW16JgDcnj1m3neKS6PsoF",
  "key6": "4px8sLA8rFXfHgfmLE7a5eTZ258ViJ1r76DR5SJsDkZtxMnZd7zPXJCZ9CWWJDnEqEehKVovBpedRJBpqF2LFxz7",
  "key7": "2EgP6CupFKUsfktMFUFh3fzZZt1SqupxykBFwGoRq1dkr58dKoQqWA7piFQ2Fwv8mC72KYqjNZggQqwUKNe1j79t",
  "key8": "5UTfmGFcHN1XHkF8V4Z5RKXAMQLSFWMquLo1XfbzSWChzUiEVU1zPUhJGvxqY2u8RYoks11bE7bpmJyrQgvnyHNf",
  "key9": "46HJWNPCdCLUardR8TB43FmGY66tzyvyFYokQtuMNdW63Bw8xPHcBZRZsaG9TzDR8PksNDGjTEJa1yXsacjfSf5N",
  "key10": "31V8eNRMXG1nq381tFZBegpLxJiZWZCdkB9mMYqeSftnPMJAUbQiX983gySj21kc9PBdDWykYxfUNdoUy1zJ8xkb",
  "key11": "667YMALdFSTTYWkM4srRAGAq5mxiNbECgwMAwdQurXJNEkmnaWhiQbkCR27c3JF6XapV49YtPEsbxYdwRmQyytqa",
  "key12": "2TzpQSggvdifC1knVqFgU5kbmwYjnYJasPeUnAttXLpXms3epuRi3CSSFT3nRvkqQAWfyEf6q5xRVYka74xGj8cv",
  "key13": "3AYppmHXM28dA68UpoCrGmYroJTzmPT1rcwAPGsTGbHsTMb6iDM4t1idszMXsvfWKoy8M9gVBr3F6A7acuXWJ5ju",
  "key14": "278YLcfzgdX8nJWZLvCrLv1Y5zuZK3XNcFMZS3cbMx2R4CK2W8zaQk6Zs86TdpvJPj5PAtwTG1RTm5x78ra9nD9z",
  "key15": "4K4QTB2NLFEromrFhZNCpv8MfqKwRp3QHoqTrrGtxsU7FqsLCedqBohQvVYXWYvuTMRyogipRQqZdVjqir3U4r2i",
  "key16": "kFt8NjxYeX6ngBywGJ5bxvW8adiSgJypQwScKBfBjJjDFH7xjAs4vkjoTMjfdYoC8s26D1ja2aTA8B649FMZAZk",
  "key17": "5LzFqa2N6MS3w2gkQqW3timWX1HGyQ7Ug1oQEak9BUiPudKGE6Uygd29oxMZhynJifGu3hv5bL8s1E92SyPXAryE",
  "key18": "51UwTdLTmq1rnWMvrvb64iuZqtqGubD61PftKziUjNosFUavpMGBHhpWfxa95KwRjMwN1GeWvXfDWujuNv4uniUF",
  "key19": "2VVE4BqcX95zysgK5YRLoYQhZpfG3Q74BUr3d6gftB6PnGLkzoA6gjTSVbwKZGcwjdXAQYW95KVWka79D1X3A73E",
  "key20": "4nxZUc4VTvMVQTtuGon17dWRZdsovyCA3j5gedhANEzRUoWK6bQLYotFdPVBoBzSrArmrs2RZhDGWB23Zwn7mwfb",
  "key21": "5p7wcgkXej4qG9cyeVHEWvcQLob8UsN4bJbYR7RDuoRsZv3ht8xJM3P2rJhzELYJvoPtwetzety4H6RvQuyphD9p",
  "key22": "6oJxqRDzqFTyW4hAjR4Dhs8nczJPsXw2BN2F3XVbw8hskLckJmLTU1KxvDGm62VFVVi3ETzQAymp6NcuHXcrHEG",
  "key23": "4VoByLFpX4Z9k1RxruZRC47uafAc2yXKKTQSsmFUZ1RHqEP2P3M625gDCSbcNme6sTDghFCGrQgBDJEbRdXkgTGt",
  "key24": "3BVQbzSzxPZx1NXR5PrfDDnLFaEEfK6Fzjfk81L4oAJ9RgaUKJ592Fx4w6Pi4u2cEZX7664L19XtdGkC2Zx2qE5m",
  "key25": "4vtWqEv3WAD1qyH2v428emZTRx7RGqwMQp5NQGRjTQPjDcqRpYoEArWUgLSR622V2wc9c4eD8LwvehmFUYZDB8M7",
  "key26": "4H1a4abYBk6TZe2p8NdztVqFfrY1963S3uEKsmek9RqRtAWYAbED4h5rGwKHYMfWEg8iuxgws1f5DFfgkTWHhPq8",
  "key27": "5HAb8mjpy8BbMzNcoiptFPgpKwFQZ5863qrkzbZMrmcTZmBNzG3C6DJws27S8q46ymed3iVtXAM2f4ZWxf1JWq57",
  "key28": "nXSot2NPFtj8JPZRBsX1duSmN3wJ4PnvfzJbTHatazcF3bxnpzFSMQXjZxPfNSxrTcetUAYQ4gLy6GLT7qbxu77",
  "key29": "3uVxTrPBH1SQTUJxeWTDzWuBWg51iqFc4RNUZ7NPMZVZYpwRtJ63mZhe7NzduLJE6xnKy6xYn6dMYLCGohdvk64t",
  "key30": "2A5RD7Fiupm6EFqVq7SLXTkuN9gN9EvGLeqWHimsiLjcLUeexehkJ1jmjussj1uYekJPkmxF2j4R5jzMQydUYx2L",
  "key31": "2AH2x6UB1KVksuEMqRtNuzzGWmXvp9CrdDD2SBGPwtDH4jPM1vYn6GfJACTVwMyB1HPLASZoRqkWmKMUTK9zp1Xd",
  "key32": "29gi3kJWCH5sWPkciWZaUgDr4LRgzAgwgPQBsJVKWmUuiPwGVpk8v5WdfLrXf21992TV7pfnoqUdSR3cDjV3CKMR",
  "key33": "4RrfhmBcAAavn1jnNnFUn5EkJM7dUFBJA8QRh2BvCNYAJNBiC4XBS4kbm2mCbEoVSXzLf3JoJdJ8Tcf5sQbGWPKm",
  "key34": "2ELqnfC1dDVp64UrhZeQsbbisYqwWJCMS4HQKtMDkSjjzgdVSaFMtfmCuFd1dgwRdFywapuKMUNHwLPCDbLX7z6U",
  "key35": "3nkiCWbAZm1j5vYke3QqdPdx9ThjqvZb7KxKSSddo4bnt4HVjcUyYeC45FJCkwvhET8YiRwppAA4FSaFKjpSYCCU",
  "key36": "39wwUUQ4rqe95eF4ooi1dp7byGVsTmnkn9rhnkQewwVhwMDdAWoEBBfTNuCWimMwfArYc4j9yHp8Sbi2cGtH4ayg",
  "key37": "3pdhD5VLNHUExd7RySmChn2vydVkbCjxuAMm4rL2ZRCxq9vaNGGpx5PFTsddtDxr8D812ba7UjMSkt3fhMFWNPFJ",
  "key38": "3BT17LqjHvFyA1ZJve2mkGjF79wUJa8CmeZvoypfifxijd5ruk7Yswy5g9eAR4ANmdVuGDimBCUncWdZSiHWaRqT",
  "key39": "3C1oknsTUdqkawAqtnJnqeK6jPyEHrSd3va8hcGRY5vg4Ff4ycvA5Vdo5UEVnAUEmbS6cZrhPqTyQCabid3iTrou",
  "key40": "2kw2baW5jq5fRFrDQovPAKwFs1rCEqbWaMCEdsoUF21RZcXTV7Q4ZcqJPz8WScabKbqHJ1tECVyxEjGv7W5WCA7R",
  "key41": "WAA9cKYD7hdVVfPifi2PMk9dKMm3Xg6PmdFo4bL6Be3tVS8cN8YeTXqM5g83wVPyUAZYGUwtuC8YLci2nH6vPJF",
  "key42": "62QfCHhNjkbQxFTYUkNwSP5GmYj8FQFdRhuzJFN1noQDNLKrrJrPModKBjGbLdFDuv4LoF1yavEdDDjEwiP6XXbo",
  "key43": "3ZJhBeWkfRsCGg9GiS4S71b4gW4Tearw6rwwntqjFSsfvh61neX5rEFFV3bVEjNnBmaRB2UkoWos7uGKdpuzb4B8",
  "key44": "5Q22h8HHCxA94NZKjXKCHs9rR7nhTXMRb8iivTQf8CykKkiJmFUJK1voHPAZWwoQxiBmXE4RgdjCCPmUHyRA5oS1",
  "key45": "3hsEXALuZz96ZS8fMpLnF9tWt3KiAPJmTw66eL3Gd7TEVLqHDNDA92gLbLLRVcKXi236bc1nDseXtLTBNZbo79CA",
  "key46": "5ZdzvKvNovURV6iAsJgwue3Mh9jDGowhjfhKM2SAYRA9RownD3Dox6ffJ4ELfQZgQy6Z4JCAvE6C11fkAFQmoMqp",
  "key47": "4H1TTKKCPB3WZvdjEzPMxGpEZgMED4buabnFWpgASKQV7QujKmUz3hMLQyEeaC43tyMGfeavCh9vnE5KSpRfJqpw"
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
