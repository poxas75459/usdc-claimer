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
    "3yU77gSDjxe2J9sKKV2MUQXAAcxw6XfBbRCaxu1gv4jMNT1ioFPuDnpocBzGDvkFj49HGCZbG4ki8VgygZk5wvuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kj71Hcx3Fv1BkFifanEFmfPLyba5MFXoUX2gmE5ikhJGZfE2Hzx2TDQ8fSq9f2pGmH3WZWZ4MBU7zmZcqc9vr4b",
  "key1": "2kAnYaqNENa9WPTwMabn3pimcsTbHp3DdnaG4m5aNBGJWbqoNhmcud6EZ5iQG6dnrivq7Qkj29kreZYnMug4zo5E",
  "key2": "2tCi1E4Pv8LFbvb9XZhKtdHNTLwoTFbc7EqoyJB2xDNbarTz4YfUpjiCGPmApEjQYYG3mQxxigWpsSpL8gn1TWoD",
  "key3": "5bdDaeahX6NkzsSK9zMX3EyC2CmY5kva9i7PvphmCSczjipyxkYNew3Yd2QDxDmTcRHhEsdAa7B3V3QHD5Qgt3z1",
  "key4": "3Dkt768taE33GcKzSiXGkUigzHwEcn6cFV6TGgUuRvFL7ZRvRUK5e3nPmft48Jktn834aQv5s5kgyrncD4gVf1z7",
  "key5": "4hkwUKwfXRAmUegYSeqC7dR9fzGuKjS4PHyPhtr7opVemCbBLmJKSanAXGNzWy5oFUUm4Lim7RpF5q8nXzee87fT",
  "key6": "3UaoBMPd7VT1g7cqJefJq7r2TkWW3KLBSsM1aNb6LnXXmTv6RdvmDATkNf2oyUWyGy9NA9mYAGEBa8DnYpSWe8EK",
  "key7": "3BVbsVwLkW3AhDHJatdUudrcmNGUq9jRwAZyyBQx3nsHPWuzMCkyxPUkEJW8Q9SoYKEqUoqMFnmmhHt2pxLEAjzK",
  "key8": "451Qn2hiTqqRpxo4kpJ9yztE3mVHzDFdawtLu3tdsQ4o5dCAoiMF5xdypu9t3Adteaxx7pP6VHQoSTB5LT1nkg6r",
  "key9": "UPKegmoNnTQ6hNzB1jorcWbxBwJgoW1wPpL3VE1EY2bLrdr1qx6f58EfaoGBwtxSzucoRdWhLjPkr5tQDRwxLsP",
  "key10": "cJDJsy7vvm8GLB4vVcid8RP2m14hfkCn65rzg8oQdz1bn4eP1HsUT9qYYxKxgnc5ewXN5M2TbKMriKoQSn6BqEL",
  "key11": "35P1fURbWz9hRJ9rFiJ88dC2PiMHhZTQQfCYQXBVMQWX42ogRcSDJWYHDGaWYL4MJPSuDqdFyjPWiAczV1yjKCrH",
  "key12": "5TT1sVjb9JUMZCmSpzfKwRm7yasYywKRzz3caUkpevHm47dDmWisdvNhLQRccZ8H66c33W4fh3WzLKJ2tQhgYbuU",
  "key13": "3uftbJycmzQEbe9FR7ZCz3FLj3gzYndgfNTMpUbqqSj41BoqYJKuKVqtwSHfZdsyPsiQzjiWW7JVbmKHWRvegpLZ",
  "key14": "3c5NwNUrCAxKiaiJ7d9XR6qdDXXHqNqw6Q7Umza5j4KHmqjSuK2HH377Dy4WwKNwwRykb5XfU3Lrh8XN2bQszdmx",
  "key15": "5SDaNX5h8z1Uq9ipkrCvfzJgR6vz4h4PkNHQk3MA2MqaUcHnDddKKmHCGhWzN4jHmCk2sfHq14F5XMJPeDyCt7EE",
  "key16": "3xow1hqSM2chFnL1naucJHs4TdgeUmuXYE4iMvgYWf32FSXbfVuDvWAHGh3BZrkSVcwqXniqSS1dfsBsddBQo9fW",
  "key17": "55EDtbqGd5oxotTcGjL6PzmMhEL7oLSY6svjZvZewRD9gdAMtU2oSwYGxZ3Y2L5vCr1BEEsR6EfNj9hUvaktf6qH",
  "key18": "4ozv5URd6HVADdRFpyiCkxpkAZiBBgejM7ouNnSqhpRcAc7pPpxWRJ7Fk4qt13UTPzqkk45nbnugKMmGwkZVDCyE",
  "key19": "FZRqavAktc5f21132v2XimZ9VFhjeH9QtQDABpX8sAfuy62s32oD64qY2HAdLm5ZfF9q6Y6DUNsEdiPcqSJD6Q4",
  "key20": "8QBUShmzdwcriMq9z4ZUGfaZtEXjTqSZFYQLCVMPvpctBe7KybREBsYr72F11eukmQx9x9TXW3tR4M3dMH2iqqs",
  "key21": "2u3MqaWMHz54AcKuwtgkURTFCeZyGA9rdwAfYXbPUaLuyAYq9FzogAoJPXVh3yFQT85G1rfTCdFdJQgdfSarZhFE",
  "key22": "TgSR48TW7xpbJNotauxe4jmEBnpHL4yPfG8Rvnzp3gXUpQmqPyLEa2Ls5sLYkKQitfrLe3huLv64QQJPYBg94ZN",
  "key23": "4rTbbgGNrjkvu3RMv5MuVCPvicQFCndXZv2er1FK27yVB1Ct5crcUsZ15JFuyKMg1gSWscx8vUk5bu6BrL55NeSi",
  "key24": "LRcG6AUUhua8cGgkv3VXjkmDZpBuLXAboJE9hMtioJKhgRr7hRDc3PTcXfY1CpaV6gjw93bbgptcEjX4u6YXB1D",
  "key25": "3SNJkWeCFerRd5GQKUW79JP3FvGSML6AZSNWpg291WxFyWp4kkWWaqjMR1dohew6DqU6qg8nXbzqDv6xhnkRT6Mc",
  "key26": "2beHT6LYBgLdb8voqykctz5Ei11vpLJTkpxnJRuDSK6Jh9UFfEboTfvtSXmBAfyuTTtwU61LcFLqgZJZG7TnkC8n",
  "key27": "4DRcByH3Mkj27NGTYZb6D8x7ydk82dhPGu1WJgi26SnTd4kFkqvWHdaSJEKHWtYdmzVpUFBz3aGE7ZQboRGafBfs",
  "key28": "3TCLxAiny8NKbjsdz9Nnw2UDZafc6jAkKCeZvd6rXMVn7DSYqo9UixXMXz1XuXroUst4wAiHQnDmBimwkeZtptC2",
  "key29": "4BcLsbPSxjv9GWf9W3nUY3csmzJyWmHUN89bWAkAJc3DNHUu8MkQgTfzAgxZZqJ39NaPeR4YFG5PPiQDAYp73Xei",
  "key30": "3rQxYJhZZFU4wg9Drv9kKua7VFGemtm9byHLJvjPFRXsXJUkV5QwQhGHsHYSApDUwA6ahHCWjiPz93DPHBwx8mEf",
  "key31": "2i74d8buSpiNbyV6yqxCGLVTtDsovPKaBcWfTHy9bkVNv7NVsBv53EpeMUM18eFmgR4Lvw7xA56CJX4CFKV4M1Bi",
  "key32": "4WSt96qAnn6QLLgC6PTNcsNA1eZi2KsFAN7WQStL2ZEmKZEBQm3u4tXBozYK6bYwtMKp9V3iGPTXaesMco1Ahb69",
  "key33": "22RUMXxQoswzAYFpboQtRiSDYaoRFBEwHKByHS4tij42SzgLC2qKFcQ2XMaWNSCSD1xoFppvjPPESZ5TQwiUVq4s",
  "key34": "4FRizYU5XrrzvLPRX7bcRBm2pFuWfhSNVz9iD4y6E9n5RffSi7UXfJFiXkTLYNaJbwABZr8uvkMXs4DwWDVShUK1",
  "key35": "Nbeg1etqMXnBn2UYH7wKS75UF2yf2zRHf1vtsoopHGaEvzadEk2mLoADay7yFVgiLAHeQG7QZz9Z5XUbCcDdDNm",
  "key36": "4kteSygq7VYzaE6E6h7eo8KvCEJL28bUTCxhtEoZBeEDGXBChVU7xap5me9e4afPE9EdL3Bq5oWddmpQbXYcC2eF",
  "key37": "4XSLV6xFd5APWw52D7hWyTsXea4cUFrumtU2tFtMUybep1SupqVqn8ucjEgAbnY7De4C4C4xmZEFbxC8ZhjbbvPa",
  "key38": "59fLftxSFwUcqTq4uYramo8EZPH9xc3AsgWNMs1n5Eig2uVnFzMW7NXFf9voZ9gRuGRnMnPPbZLSfkSPXdTyZ3ZU",
  "key39": "2kPw1ysbQaxSSk5ybtTFXMgBNRZQVMbgfJtSkGwoY4jhD4pacrwuL3xV4vAM9fr9reV7v2p2Zy2phYUtVgtQNQtL",
  "key40": "4CnnpR1CA6DSrgjotjNAu5tZSsgVUtoWRQCX7TmndHZjkJfuGbV1AgsxcviUwEJz5cfqnS59w2QcUJ4uqvMhNwt9",
  "key41": "2WLJanNVRGfn4ZCk9P4wG4zG6U38JwGriGFZvndDe55P5KneHPtCzBdjLNTCVGTMEFJNeSLJmQM3DgPaaJma1mzd",
  "key42": "jtHnaCk1h8Nxk7NFghNrk9YRViFWn3XxKgg411dsF81ePisdkeoe4PJFhHWsFiBGNxRav5sJZiGeHFekJkdC3gp",
  "key43": "4msYQqznfbnmfFKAh7ZriYjuy6cE71p6czLDsixcX9q1RoRHP939fqCRhGNWANHuerhkRzab3L7nzqW4fM6WnXYy",
  "key44": "3VwzRrHroc9DRbE6CEPYyRMqs9VHyWQgyBiHqovz387qJGpdC3oJkUcuxM5GyFjM6Cd5kxSxAkqB8iZRYVzwu5GE",
  "key45": "HDu4YBop8VyUjFLPksKHBA5EnNCUkC7uMGbxA36wtyY4TByBYM1xpuTf8esZ7qumi1i82H2DSbeC2A5ZiTeVNP5",
  "key46": "3ggLC1SkuFSqCGwrmc8JfqoA1NaZPxW4jkFBiPPAq5EJ1ZUwzuvpQzPK6run41x5UbwHPNm2S2rVdefXoqnzGjqU",
  "key47": "3qhJa3gghfZiQDAEiv9mauV86dwgjGUeZgXSL39DQmveHkVovzNjSh3CdS4S3qPNBRbCyUGApkXhW946i898LmfZ",
  "key48": "3CkhagFfNy8GeULZ1rHgJnwNqw31PjdsEwzc5WJrkJ64tEbdnYVycmFHxeMFJL7Wep8duec89PLQ32RuX7QtjMFp",
  "key49": "4SL4gr6D7FWQb2xaqD9xhu8BjGG4z4sU8PkmZmRqDLbYKdcUDTqWQBQgmy7ogdH4pTcbq3J8FxJPQxRE8sm2mS3y"
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
