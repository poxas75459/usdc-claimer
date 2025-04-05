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
    "2RNEW9qYwj81Y9eDwBh7A462w6deVuKADFRB2CoGMD3spfhMzvw6JioQLt3K98j2xCqHEsGUN1fouu8vVNU2RgyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWaHxcVemVqvmPNnEPu8bkSWxNf14TzVWN8grCL3vQoZ6VSF6zWcGFnjoN46MkrG1D5hBdpVz6SBCwd8uuW35XD",
  "key1": "3J3x6FfrpfukHN8kQMnZ6ixMvi124sbS3UWkqm4fP39qnsVgwAMEhpAg4a8DVAasts8YfQQLyCyBeFwjHGM5BKGe",
  "key2": "42GVoETBy6SFpAdHQoMaBhDyyS4j8mDM6UPDcqRw8upmzy7AYB9JtTt7isc3ZwDiF927GvWPDac8gz8LzffKiC5V",
  "key3": "4e4PKFx6dwnkJfmPab4BaoP9jgK6YxeuVKuFMWbf2XCt5TuD3vjjHTDfezZcKyXfKkHVAyEMcf2kZpopspXFxTHS",
  "key4": "4DuPcQhikjNsdk5HxYsRnCEcV7f9fLPRT3X2yTVaHB1KMRC2mqML75sxtC2rzGuSbsUGT8XkGhvqjjEGtULCZD9X",
  "key5": "bLCpXJoipCWAB8DLMB77nPjPZafpNCL5UquZZXRQNRfWaCtAZrQnk5jGCThKxHw8eaNJNoerGZHutcUmeTcBs2M",
  "key6": "4Ws3HkFFdBfc78EoczSKsukGxnVeuJyrynXrvLLX73kJNnoTdJkvqdue48Sk1wRezfWHgk48KXTtjv6pmD7z9Vwe",
  "key7": "2CuduHUoue1UEQqstEdkEp1juBP4K4HnD9kEdDWKYm3mtiVmEpVHJBYu11t1hjQNnhnay3cds9rKDNks3g3bobfU",
  "key8": "53Gq9KRyKwYFNP7sV11qoojFSuU8J4xxTsoHbAFL81SnzGV3THCS1tKi5jfPVHFBU9UnjqkpMSKuFun5CLgu4yVV",
  "key9": "5DmbnbvJXur9uptaJG7QcaVZPFWF6499JrZKY2dhvTLh1acVNBh6nj5evVXeN3Mc5dvNnjY718PFZkqkFE5rJW4B",
  "key10": "5QxvgMJPnsFfHJ7YvgkWjF85UmTY6rDi2ks2C8KQFgqGxLy7yoSzjXkG9oYqUJTdB4r88Byf9R9YrPxtC5FsBVi7",
  "key11": "EbtnPHf3PaXieSctvULTFQp68Zd1xssjAtJYDJBHi4SwwqxANJ1KRdbUftASU4mroSdw7z2VFXJSTA661vUt7wx",
  "key12": "5tX3hckNYb7wtieW6dL8A94gwNeTa2K5KgLLQvZNcjTehKukTHDGY5DuneBKs2bCumv9KBXkX2QcxpuNJs8y3NGF",
  "key13": "ftTWWyR7v83B3fbXHAZS3eeAYVxCbWuJGPxqXJEhF98PtEX7EUUmidchEgCj7sUvXFYsvHJehHjUPybNvEkjcnm",
  "key14": "2A2dcP264sveFkB2prFrWb68Z2DAbKdjasTUWa5gtaFdqyKRczQEnwRdacuwwzKWa3Lm56QewTQR5ttDPjVMu84Y",
  "key15": "4FmvnNDBdRZXuAf3DtKQH2kZGyKpkw66b9xwGmP75saandTadshe2oAjUqUjjHUgtJ6Z5QU7zrmKafp56LgD6N4c",
  "key16": "211TqfmXy9RywBuz4sRxfRVJ5bEBL5npxFvyj4M79WNTLGYaRCJ7f6MU2nWtLFNDmJtCkHvTDKTr2JVe4bHxve2W",
  "key17": "6e3Eoemmnp8fjwz3dW7iDXtsj6yfianzJzaUGxzrVUwmbpvoLyjvzmKHt8B12yiufR7DfwEZwE3ryA7oesEjuWU",
  "key18": "Dr4rZpTedHL6W24jWEyWDBQ2Vr2o4iJvKXcXCE82oqaWaumJw3J92YC6vYsHB5yjEfAhUMS2GJC8iGnPjDWm98b",
  "key19": "YKiWZ9xAceWQd7AqACqDMLPGjzYCZ5HgjG7DMXKgxVhuhAYMJrCH1fFCezDprm3q3nin4q3ttTpm8ZXAQZm4EVM",
  "key20": "5TQByJz3wS41c69YaEwbbVfQuhwv2HJ6mdCtJDqwrgrnw6KCSkRBQW6fpfLTjw4K4QVVssfqg7MyK54oER7mCifJ",
  "key21": "66WLUNXEh6XkgF9c5svaM1YHzpTewSmMgZhpr21X8b7vPvhgZ7m3ra8geiBivkEaFzu8fqCCKKgsib9evEqQAqzX",
  "key22": "54ye3MXUNKPPWSSJS15U6Q8Nn8Z1xJx41opuo8yUKKkrnP2HJ5hmHL9qmXxXKFgitBPFtvTZf4Cob7vWGfQWK4qU",
  "key23": "Xctkr5JkCm9hQ9VnPRxysqA8YooaP89dhmkEALZ9j8fYHUfmYpieA41nw5Gkf6dvYCw5Lwpf5BgCjWUj5B1f8dP",
  "key24": "AvNmYJjqAwRQqmGmYiLidS8ejL5VhepiovPsreu5WvzXNYZr3frGeAA29NtV7CBUjstjH7tYzqxDTZcWDGcDxGp",
  "key25": "3mo4CmF8uv3QtLdeH4zGnG5XPUMFmeYpbSF4AgyMhtCWK9TU6XuaH5nxVoJvTGU41GNfuWgntgf3WRYtWRamuk3u",
  "key26": "67H1deNZaSQBsYnibc9xk6wuxMdVsYmx2MUVrtcXjWrK8jgt4RdXA1CNnsBMFByCDCGPDxQQT52AZBjmTs3TTzSX",
  "key27": "53TrCKDezQjBk5FH5Nuyz8fsYRMz9BwfB54WGVUuX51WVt4XhCJL4qDrQgGqwYWbfEADwMiQwA5dVnBdhNSrhLpK",
  "key28": "3sJNK16KqrzPV7rxhfmnUYFrdTq6WFdDqJJHcfZdFWAJZdmSrmUmw4hWCuMosXq8hVhKCSUx8f8mHo7pfWPPRw4c",
  "key29": "5pTcNcN9xk5rGHxMYGWcKDa8chFqs1h9DsEa8zbWamKW9dVTUuJbKfUKp6LXAoUbNV9AQhpagu47LMe3Gx31aG3T",
  "key30": "56QjUR2SbJFv8McLKs9msQf25jEfSmy4Eb6xRcq3XjT1eY7KroHkxFjH5JyMZXZZbwTR2hE3DyV2r276HpUvE3YD",
  "key31": "MwiGjSwHXrKU1VGE7LwH6WUtmSiUkw6Yu3xZQB3TxR3wh4q6WUVucPYTKHsisM6zm7twVWcKxvGv8N3JaZxwsWT",
  "key32": "4V5bupN3getFgFLJCFqSK2eYDnSKQ3yiMqNmPHaR17pxHZAHQtY5dQL7zzc4MzdD8Z2TLeYR9ayoVyoFtTeVXuSe",
  "key33": "4Y7MUjia6SDxDvcjqgaX67JQwJ9A1sL5imes9X2BxyJ36Pw9VN8ejwgRdo86VQXVnv9Kt31wApnc6oJbJTZ6idBC",
  "key34": "3aBh7NxE4GhS1ESPxF1yqWxKGVuRUcXHjBi85MXBP3SEqUNLEwft75A2SvvhvMm4imB7A5Tv36CzvGBctJRauB9g",
  "key35": "5Y6x3s6XwuzPFtTtx4RkWFZDvKDkBoV9VEztQb6g1nLLUw5Q9NuBK76HgcNnWHz2MG5papQ6BdpEF7NJyg2e4KV",
  "key36": "5LQaU53jEojARTPZgkkiiqxgEpeTuCVKHwr7ZMwKvWyqHuFH6bHZWsJXhAPHG5sKFU4Gy2A1Nf4R68gPtibFR5Q6",
  "key37": "4UE99pbhV1mwbShTm9NG7T2BdqZhM4n6iJpPAs57fAQoq2LVrKRxdBKLSTu9gLZ7Xb859ZSqDUz2VWJ8TuGcrch7",
  "key38": "2RQAvagaCTTCC9xvYNRAPQ66XDhh7A2tzxcJwC3kkDh1kxgtc3Ss7stoDDKdAU9UxXtvQuW6hEtKwwg8rRPZGYgQ",
  "key39": "2T8svcFfQ8hYAMceJM9NGu96V5PsQZN91uDYjitjtgCguhX6o9bk17PGw1sSb4vjQx2oLytCfokgxtSrqpjiX6A7",
  "key40": "TF7iuH1YxHbDd6QUhky4vhQjZF3SpNihnzs7M8haqkT3tLdHDFRGqBL6om2a7cnSRPRqGaVMdkGRHRon13Gs8Da",
  "key41": "5stn6bo1avQoLHdo2AjuaM7ycr5wjPLfUR8vzotSSLHtnKiEgE4jaDvRM4Cciu4WnoVKWFykb4P81L1cun6m467y",
  "key42": "66bCiKuVqvd78DuiB3Dc5Z1aQzJE4EcKaV6NAEraPg9CSt5XJM2L2d9BKnnzWbgVwpxsSfqgejANT8p3fVFvheCx",
  "key43": "319wGHpZtPrYRS26NhwtWRUYgceajAa9X544BAu6KX7MqeTZhnE3T5UXXTQfViLarQP4bujB9YMq4FmNpfjHeb1K"
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
