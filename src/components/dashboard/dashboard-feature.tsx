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
    "3UsxzypQQS4ugoXWYE2qrLPE9EAfxacb3vynitGkNSCvmHsrzwkNfUZRxTfKLstXBPWqfts9cFFkKqKtzt3gJpjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuUDKdGHZfQRZvU7dwTADXDBHbLdvhyT8byXHePnFCUnKLAENvuAyP3hfGkrGatjT4fyW7ScTqSjGfU3sj3RxqD",
  "key1": "5ZQfiZwrWd1pAtvETCSbX3K3U9HpsqwzzHxVSBXxGQauAq67keiru13d1YLBtLxGkzUb51C3BTChXDkS2Rk2s6a2",
  "key2": "5obJ4eHzSwX6Q7C7Tigx9Z7d8SN9MWnkmaGwLfe6jepGqnUcGDK3MF7eByjTGtAn6A2rQUMjoud33AyotYLt55on",
  "key3": "4iWsNKCQBVGpA1LM71XBM72EmePTb9VzgUcPVaf5UnXjY9Ug9DHri5cqpnyf8NdVnsgibeJrXqomkpkHuK7jHq3j",
  "key4": "3dF3QwSfkyjg2PxLeyMDKCABTTKSqocjNVmN6SMWPtZ59yPekCnxATfBkryATDdap5tgMGSxX56ZHr2XjCMEhkEp",
  "key5": "3ioUtdZLyFWBQnZXvSYURFdVEnxK9Y7k5Zaw4ae9jWwSw1uiNQVCUuqxCgrGyk9XD5QKejHiZV64dr85B4nnn8aY",
  "key6": "3v59ogDD6obachGaqeK4eiHwG6w1vBm38shzKvtqAacW7DSbv9gDPbgZT8hBdgRJsqCUwJ2Fic6dmS6TdpkVuSDu",
  "key7": "3N4di7umYW2Y5LpcaaHpfgutfg2Cmzpkh5NqP81nfAd3MmxuqvRQiWm9vrMZjbjJr3XHNugrYkDJ8uurfJWnGiKL",
  "key8": "5ERQ1zisTz6sneSFHeP2qCvhWFykioFFWjdpHHDgNoFk3GQev24wsxaxb6ep3sfXAxY8t9hRgQC9SKEENkoP4mDd",
  "key9": "jJnkvQiAqkv4CNazpvEae29RRHTRZTKiUkPeJyzdiEPJnZYYKfwDRZ4azhasF9T7TGnMW1Z35ZEfCKeUtSUBkhx",
  "key10": "2RsRXxG3FqMPv68Rg4eCYu1FHZgFgjDPgCWMr1yaNE1ra67WtDVYzzWaqtcKBx4Tz9FX7hPe897ibSdeZBhjVJNp",
  "key11": "5SbtQfc1eiANZh6G7nwMaSHm3coKtXMh88m2TeRjE9nqEgA95pFj7iQYBboB6ijohh185hb8uVpdG3TkMrtg8cxn",
  "key12": "4ZAk4FcBrA818EVBNYsZKLUdV65A1HiJ7WiwyW11oAjA5TogXcFacs7XJaYx8CuYPo7Q9Abvr6DcusSBZRiTcABU",
  "key13": "51yd2XzVCXQT8mZ27PPD7SVL1TB6kUwfCL1KwDU7huPYCMkfSBtook5tEfyCqgeVBEjM7GVCXybeVAqEWh16r5xE",
  "key14": "2W1RpJJPHNZU6fPrCmr7edt66s9AFDb8azaxJYMGFa2dMfUgpFQcUBvKb5qogtgefuRaTqsHm8yBLKa28AUDoivg",
  "key15": "pq629qL5qaYvYbbQBtY4XkzQpu5ErxkJmWdJaJgrwL7TwafYJkE9L8tf5bYQJWhXjEqZsJbxraX5b9A7PGK8MME",
  "key16": "KARnbMoiWDyikYrYfS369Uwhf7kcjDn2WmtH3n9a2Z3AfsAdMYvDj8piqprp5dVE6yhq7Eqqnj43xKm3W2zkZe1",
  "key17": "2y6v1x6sdRmgRc7ebngGPTVyP4HnGZPQf3fwWEg4ww5bU3YUPg4DbxrhGJkYq5dnWHgp8sKNptAXk4vkeoMJVkan",
  "key18": "5ZcJHR7Yy3ht29qGfzPjsDKyhrTTqPf9eQ5r52EqPGAgEY6jP2W8cRkU6D16LGcMVTrF9fdCmL7XoZw8eBtH6cEi",
  "key19": "5e1f9kDTNJ3sEhKGkqBrUpCbaGxuw75HVguNoatyZZ6J3QWSPbuL9VSYc81gH1JSrB568ZfTtK63RS2b8LBxFaY5",
  "key20": "4QkWt36MrveQrsDsYqYvfdkeKkLcZrQDoGLDMuf7uBS9Fu9aJL4mND3H7ddQhe4JHHyHtvpeQ95RbwEGdePxiGvy",
  "key21": "64cg3skQezHeiscjakWxCn5KtxnaX8DkZAMian33RPimbS1gbMESJqa7togoQwtSHsTFtfpaZhE3sYYELZ91FfDu",
  "key22": "5TMVA6M84PyprQ1b9mk9XjQ2MkQ3TwmKksiQiQnnVzpXVr2LSuXquDg9jfTPuLh5DG5swFZ9upyMaAKyszJnCqEJ",
  "key23": "4thDWRqXmXH4sQ4m3YkNZCtpjZKMkcVhWwNVpAemxUeR45YGSKA8EFP3wXwbDNR6apmQ4GbhBnVVaVf2FDEm9bhD",
  "key24": "3e45V4g814ELGVhygKA2bs9GWnxyXKKxFQuFbNsua7M2pvKitzHZy7wwGCM8qBRdQkGf4P9oc953wR6tzDNUvDmR",
  "key25": "4un4or9Jm5hHMQjKxRwGYGXNMT5fM8oVGt23pBsGsnRsfmRLaE8BU95qFZE5Af5Ly566Z26nRmWyz3NVfsUsuKDX",
  "key26": "2zwX8v8KAevwKSZRMhsXk7dp4QFTa1o8jmcFMUUK3fchLMDzy9rnD5Zf5TfM8WavtLXiNihvDvrEwjorRw1ukh9d",
  "key27": "5WUBVh9p5yHgLwSWgSXLRM4QoQVNHLX8reunmkYADTZkz25g8pM31chm9FwX5u19kCibdCamFz669snaWwu458qb",
  "key28": "39iF8r2Vrvkz9xkKxzqAsE8SkeCAQkgU2ZFKHVa9v8j1J56qxnN8RdUCAHLCwjdxzDhvJECiSk1ddHrVFpvQzhaN",
  "key29": "28va951iUByAVGFDM4BxzwehAvw2GzDCyyQzuoDYTQ8xY8f6pMHFDrxvxsHaP7npYWJoWqsYYpDe3GEE87vyHUZm",
  "key30": "2zdyTSMx32BaSqwWLi9Befm8zccqnxJDdYmYk2FoqYLhg5jmrT2uTdQCnSoiY3yRKLojSt5XkkKric5qUiEJZzq2",
  "key31": "4nUkYyTGAa4TTvfeUonCzKSkqN3DQPVv77LfA96UryvC6SbdL17eYCZphV8cCqBbhV8mKhQbmBbRFa82vikDKJ9a",
  "key32": "3iV5xpdgThEmtDVUKGxjW4T1Jp6ovs53QgNyHmuL3i5C8EqQKtGu7FGfiW7PTYk6D9Mk6Bat6a1Ajt6HN8HS2LCf",
  "key33": "29u3NBVo2zfpcGLW18gME9YxaTkVY1poRQeCmZgfBTkZHWmCofKHdFGzzJBVPF7CVJuCSv92aVbv3oJB94z36XXt",
  "key34": "3UZRdkrZNGik4b5vn5yoLqAoQLrNjERohqrv2ey96R952Kc5JtTMq4g1tE3CtVXjY3deJBm2qLWvNntGayU6gqY2",
  "key35": "5ArvjRf2RNnpG1Jeya72EkRhUKzpseeUjKcHDdumjG7vRPiakQtoeUoBWqvv2WJubQ8DGAdjV3hqrYc5uPMs8sCG",
  "key36": "4dkVfJxyVydMV2fxj7XsiyCGQoBvACmBoC6GwVysUoQ5Jsz6xpV3hkjAcHTm5Q8FtC31w1Z4T9xVxzj2nTqWbeoL",
  "key37": "5gWGyf6Wcry5qrY6LGveYkCE7jeSLvQ4x8U1kNkJFSUj8ohZLK777jErG3fssUwz8jQc9EKFpTitsNmAacN6pxCV"
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
