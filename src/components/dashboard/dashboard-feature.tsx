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
    "3o1cgXQPacgpJtcw3pWxsusgCAfrv9MmLyFXWggMKprTo21iEBoSwhxBcvxwPb1BtPQh4Ruc98gntmhRz6CJvBQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e22fkoATmZCZNW4VMsL18Q9UMEwtAN2SvRj7pfMa1tK9bf8DRNXnGX9tp265zQnRFq1oiGrbeBVeBXHBidwgEBm",
  "key1": "42XC2fW7zVbBtZuwhMsFVnFEvhPtZ8bWFHc4aSw4M6BEHvig5UeRRyVyVoDAjVvoYX7odR3tLjuTq9f1TG99PHNr",
  "key2": "23T5iGzxjXmgqSuoYLEKwYqc7KcJGmyQykwPt6fbKX49g12SE52vkJxaeKyjancRK4qgKMuRtTBFjW2ZJErcBjPT",
  "key3": "5YhJPCSY8ysFeuPQ4bm9KtKV4Q3euu9RjP1qHmJssp4bmxPvD9RG8f7ujbnNfPCzroPed5H2FepeZdJvTGxCRZGy",
  "key4": "586hH7tEu2fbVr9EVVjayyy6f1xjn69ogA6BnU2Jm7vdBHgvyp3pWdTm1UoKsEdcZwMjW1xTaCcnj2UJRATQDXa9",
  "key5": "2WVddiWMriZDcmy4NsMv3Kf9oij748JsvqLtaoYXJGFsp8FBVHX1hC5Xa24i8eRLx2QjjWBLzAsesgipzJaAxzwN",
  "key6": "2CGZdmVFJxoCCDNmuBBEhYDaeTuvgx6gLvyzRo7KJa3zAQ3KB3hedpKqVkG5xwuFS5SpfSZEcaHH2pe6YfXKwPYU",
  "key7": "2AVHxrGeZzfk2ZupijkH1C94PkjG8Q2Yh5p7EGuzHoPReUUkohLJyjP8AkfNRjDiVRUiCcupiwrNEDGD4cnUB8RA",
  "key8": "5o2nWZdg8afr4MxaP83VWcPjFeGfHyepvZkXknVjTeZEd4YqqMtCYPjTMqDba5DGX4P7YnghM8n25Zcjge1hDE43",
  "key9": "56sfdeN9zheqSRE55vzQ7oYgEaxiHJKdRtPahMUwn3KCZYzfZ8P36pdgq8AoCSwQnjzD23rNp2ZrDLHzetP1BWCn",
  "key10": "SG5b3QJCZc6jmSh3dsST9t7DsV3bez9tZuxTRgGVv7JaS8N7yNXWjt5tUM181ftU3i7tmL4js3UHwjHafUA7ySW",
  "key11": "5C539U4oBwNRtqtbqrZtjw9hbKtb6PEuyECuAcbadacHkreYJci2apA2izuVYcLM12ckRDyu1SRFfZjzYbe3w5GC",
  "key12": "2M4RcoBvHC8jFT7Kz2frhxTVGtgbtVmyVV1kzNam1K5m6KGb4h2iSDYtYd2WmmXuoujnJaJD7sFRNdEu6QtYBCBQ",
  "key13": "2sMDay6iWBQnii2eyk2JvasvWh5RnS9kVsH8EEecq327kUJJucvJ9TJRBmofQhwvZhmvjtrnkYPu6UX3UweTGSTy",
  "key14": "5e6bu58qqocBwuRfJB3fmxmpjcBNUvQkn28qxiW4QT9jTgaEZSAYhrp949Pwt4z5yNu7Bza97AvFcowWMjHJjVNE",
  "key15": "hTfpPGWt96z2J6LPnCWXLfiiD9RcrZRwbMGMQ15boNPaeB2b3fYL4CkLiF528cZbnp1afVpd9wFYHCEX9zYFV5Q",
  "key16": "3tYkfSYLTetvRA4gpUA4o5eqEFXAKbFejNhyLTY3V42miTYuq8i1WAUPWjpHyGuHgnNrriMaPoQx6rf4bnGWZAUa",
  "key17": "3r7BFbGKhLQB8wTYqqhCKSMjMZdnqCPvprPp5KKKW9tc3R7EvPdc7Lfxn3psdF1nvXrpULgE44Ht7UBFuudiQByU",
  "key18": "3jWQB68HxETsNVMn1A6XHvQCPNQKmaYCREURjoKsPbkobkJj6AxZ4cpy89QeyF3MvMz7iEs48KXoMx7e6qJtTf7u",
  "key19": "5misjrxM51uTJ9M1hVLw8JTXs27CkANJts6Uevz6eRi1km5AS7SEZqFYCRMXSpRAJUBnRB7bu2ytw6FRpoQeUgGM",
  "key20": "fdEio4kZ44izxc4CxjbCtYAe9x64WpBpisZzmGtjiFYSJQPddgtvfdBgR3HkYcgfmwRhxK4dVbtYgWGfot9vrM9",
  "key21": "owwRrqckmAFxatMPM4iGqbLjoYxpbYTu8hNvV8vCXbo1MTRE16CpB7tGPHNsezsrnRC7HkXfpmFuAXbBv8JSUW3",
  "key22": "UJvHsjjxm5AbkEr756b8GErPQohGQ1JmGXVc6me1B8iesmFA9FVTtZLN5782PT7VnEHJWiDDPNrQwZF1QbRNtgw",
  "key23": "4FNsKEAGXkoQ56Xe6s8KUGsq8Paj4ei6o3wxmTpTWYbYweUiwiKQt4aaU9nGPcJgD17LvZKZvtffSqw4Zfd1BMaw",
  "key24": "x8Szp4WMKHzfmw2NTuDFG8QHDieup6Ph7pcU3YmAtvzmEa59ZyuHMgN1z9vV4d4knZ3yr8eg5SDDRQV5YKUwy6B",
  "key25": "4h6hUwuAneQE7cTSf177AtmuZh8Sf1LCJXW5MQCU6nSM2hdmwGYH8vW3pruVeqtyGVVQCUzYNKutcHmP8mDM166G",
  "key26": "3nzKdo4T6xuaLrWeC3ck81GTUR282CtkXhv4rW54GJVq5hAe9SmdFUkzGVBwEj4Rj27awKK1XAEn1MaeFgdHksyN",
  "key27": "3Pah5WGXULF8Agi2J8KnjTLP43tqDxzUAeAM8em3Qm3F93penFHUvbHf7ZXYPJd3CVE3kLGBAYvgsH4euc5X9wCP",
  "key28": "QKbKxf14pMfCURxj2hN9vmvL11wF5dPuuXEhtGLR9ba8mrspShBKhiGncN95QZaZCR7trko2xnYjeC5cyarsNev",
  "key29": "4GPiMb6JYhYGPFR9wLqK2UeWqJnNuQLx1FdQ3nCwMD6BaWCcQQnKgLqbyuPpeRDqEGdLLT3NjwP5q2mm3BDcNgNG",
  "key30": "2wZQiHy1Aiq6ie13ZS8dnghgyFTniZ5zoUuynx5j3DiikZVX8MtkivKHM9a5aBMm6qRmnpWpUoSVYuRUcrixL7ar",
  "key31": "3xQKg7v2os3UxFD64xwN5EXu6ZbEqmKGhe6WhxbYm8tKVP71ZvyHYRwHrd3Tz3XFM9F5esttzjUDkiFF22syzD12"
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
