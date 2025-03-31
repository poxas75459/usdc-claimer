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
    "pF33KU599WrXuinPXbi48JA6rgWPRBWBdNX8e7eZHav3xRCy5nzMu8rN11SSkj2P6EAEwGmufx8r6JyYgvyTJTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqVh1zkWvNuSMYj8fEYtWBrYr9RBB12N5M3EFVGvJcygwUQe45nSbeN3sXXfFZkEoYiXWtrKdUviBE2m6F4vKTk",
  "key1": "21NXp9BUg7WZfbVeoSK4mQcZGaLRHu7fjpXGCUEvMLTsdy97DZfNFYvK644pW35bTAzJJRz8rPuSFWJYs2fDjMJC",
  "key2": "4Djdjqp14DkXWY2j5E3pvXLpZkxvYgpXiYJqMg3Row6cqXGR1TuupPXz6mtYuuHy9H84bCWNqeYu5kgZ1JJLDooR",
  "key3": "rE3sBYEZPE9C754FjwyJfPAjarAK5S5cmfVgZGa898scD8o8op7Sf961BzQKt9Yzzbo8S2EDYaSg1RW2GjDQWsj",
  "key4": "2QxCbKkDn37Nqi7mLKC6EhAFe2Wr77DDpaFiZEKq5iafab3vb21zx24HSt3gS4HmmjtUzZKfiRER8xjBVkM1iPog",
  "key5": "65916UVcvNVi7sVmKPY8oNrzv17nvnyYk4EUJ8XPyc3e6M3wQzqJeG4yfU3PdWrv6rHRQM9gFvvZ1E5diR9K2WhQ",
  "key6": "2vKaXdyEKBZ2ZfParEh6W5L6gVDbxrn2dDBqr7rvE8F4mDfCK5AazG9AJAzMsUvi1y6JavmQTkhFSgBpexCqGpiX",
  "key7": "3uRnhRvVRTjKnWESP2VWL7yT2XiWaZuYHv3pcrsfnyEkToYRW2uf5vUSoZS5m8gCEQmm1wMzg6Hpc6KbHhFNEaGW",
  "key8": "3yd3YQq8sBpjSFbYsYKbX97spscgqJdzURtJVUvbiGzo3SwKP4LxiKdmCBHzhQtygTAzMrdT8QPhrNVpPfVJpQy6",
  "key9": "8BN71hroP4afTX62hQcvwAiZm6x3xuJ96DP9esLttrBr5VKz1KsDYQZ4YGgAuWBcC7MchypNxsX1KevjdCZdx5M",
  "key10": "5Hd2cRzEydSXzxW7G7k2XHcDq1cVbJUU42fhgMcb167biY3p3m6JY1r5q23yfYd3Bu4KW3WW1BiSKvXNxsiByTDZ",
  "key11": "5FHdTgH8cpoTE6wd9X3ZtiMWqVG8F6AzsrQsEPf56oc6ei7CnX7WEdGpicxpCrdaXFenMMAhNREujr2mmEGVgfSc",
  "key12": "4DLUGfUiBaocmkqAwHHJWPpJNexp927Xs6drjdEDRucjtsq1bey2ov9p3bWxevyRM4tRedQnteeDxvCfH3SyqLuR",
  "key13": "58hP86RcGdPTqBtZYqXAHoBwBEigUGYbk96H4VX4cWat2zQ6oQv8KhPmXCkUXpR6gwzSrvrzfYpPLNHTcjZzEtWe",
  "key14": "3YwQdftU8BoJFqgBQbWbArv2ZvLADioxMrkTjCimvk3q3ATA3U3hCRGXU4bhnz6QwGAKNntz84Xr1aJnbu8tPVVC",
  "key15": "2cVH1XNAJBYDESscpqYE875FSwXhZ16MU4McoCqsfRwbCWr1YUSCBMWV5eHoW7dGWayD77mfhro7dvtg4hMmfvFq",
  "key16": "3scfETPM3AVed45yopoEweRkz8HFBpHPVKzD1A4s64agZuj7zHsaZ1iuJHduWcogx3VPbRHFaKqqwj4DzhJAhgWS",
  "key17": "5fXJ41ti8wjWnb4c9b8uwEvrSDqb7WMsQ492cBKzw5igRBK1y5tAyDWbe8sAo4PnsufYECrv54wz67qup9jr345b",
  "key18": "EBXySqubRe8pv7DjfhUQSUoJYDbRUWX85j9EuhtahwpyJboiSFh5twYRKy4LDmAci6WmrHYo1p6vWV1R6g7jyER",
  "key19": "5rSdEF1hRm7p5X7xZ2GXU9CrEgu1UAiTBeDieTBKYzv8zK9mJVxEkhv2ff7XZAZ5DWT5zTkuYFj7TN7k8krBtz4a",
  "key20": "3svYYL9swpEH8V3oZ7pDVAmqnasSeUG4a9mSDdwf7a7gS4jqzpRFzYp6yvaASNrXtzckZkHzKRzuC6pLdWX98FyP",
  "key21": "56WLymoCdXJNQefooBXdGG4cFRfx8cxgp4T2cmv9XTkfNXfMcn23tJN56syCqGUQMqBvzzo4E3MJpgtjyrbpKY3y",
  "key22": "3RSdqz2fPGrk6WFfXMJGL1BUTXAp9XsEPSSP53yuCfmuKvi2mJyBzjRMoKrm1jD39sAjKFh6rVGripeh4MzimurK",
  "key23": "51wxyBeRVtbTv6F5nSdKzymArZtQSr9BdaW9TDS35RR1W3CaU5JCwQv6G2ZaihMb5LArzG244knLWJvpUk3NmyFj",
  "key24": "2kL7xoFvNVj3pNQXsQmhJ852SHmw3bddugV2zzi4gu1rCpULsBsnEzrmAwGRa59iadYBKYGnYisiFY8NxtyNVEKX",
  "key25": "MsSJc9sAQPmYyqyee9rsfagX9CsSRyyJ4jcYZTsUjaYGCtzuTqPkzmYFeBsGCrM6d7PNTGVcWRxoRheumx4xTNF",
  "key26": "3bc7TrgL6CngTBWZtNKp5X8hQ6n5F8vFSFYzM71w9U961ibpYqX46wWcVVx6uoiJyihA1TBzdqExR6HripkJvk73",
  "key27": "5cguYtB2vJKVUstdteiG9SU2KF9t4TSv6ihwHwxuXHwR4GUhqmQCb4u23q43nHR9AtoRAbPTFP5LUE1n9Dpb4yM1",
  "key28": "4JuGcHNC5ch1EqXaunGtemMgUrNNYf74GKfhc8W6qENH9Wv9f5N55ifCewbEBLE5tBeqpZh7mVaefRQKq4gUNsgA",
  "key29": "3FXZsKYn8dSuddVwnGcYUDLaGyV4ZfeZajUH9HVgUiD23fgCGAA4Zikb3PFhB4adDiBZrsG5cLFzJhqYodk77ExY",
  "key30": "2MHQjhxQaXCKMkyaj4HsdM9ZUjLZpcZxK6zUiXiwhQsLwUneJFzGdKxMoXTwAg3bbiRViVU4KVFJE8FCqZFFPqjB",
  "key31": "2H3MSpZGKMHLQsQMUtE8DF5RGh9XxjKxJtPK2USccqLgckX1kokgRtcuc4d37NpSTFRaPdntCtJfmczZyyUiLFMP",
  "key32": "2yKX5GAfzekSbKduuBzCK8Fb8iqGWgAd66oZGvYdTfmWr5ugmTWBERMHMXewpqoMAsdsbeHaGvy5hZVhTqgtrCAy",
  "key33": "djJeYoYxaFw9UTVLpdvtZa5MyrZ8YXErD5NSenfhdXrur9WKWGabL4b6pEB8s7dnPvHbeMXXUuamPQ8MMFv71C1",
  "key34": "Q178NLK84WfHTg2PFkmbHACzwEB6y9ahihMPH27KtFm8uk7cSmZk5FraDTp2a8P1rUaCtj22eQi49XEmFagdxMB",
  "key35": "4RYKpS5MaWR6JtmBjjSV4ed85iH54oMHiS8es6LcZuNYuEPvvVkB5QBEQ7V5FPZADrsZXGPSuxQaWVScoeJs4b6T",
  "key36": "4SZG1zwn3HFWUekZ6dHxe9WEri3DtLuXPTub6aAm7UPcrtL6xzXrMsy7Uiwk8Ca4TpcnWuyvqW3r7nK8THBGmRr3",
  "key37": "23ws5MDMSPPpvoXoHpd6i7fwtVt1sstwcsBp7iZZjTbEEPoiiET35MiTGHxkgU4k9uBv2iU9mQZ5FK38x1nCZoDT",
  "key38": "2yzrF4NZgpRquYQtuXXayvjgHJWPbsvTnEuv85YhU4Bn9Gm9vvLEQUz3DRcS8GHUuXBGYSH52Qpr9SwV8LgrwFuJ",
  "key39": "4oxJr1oVQr8v1X1VLbX4LNSPNXrHHHMyJ493PPVeHEV5g1BwS9Z3PRLMTwm7rm4PXX44sBubKdXBVnkgKdqbvV68",
  "key40": "2GupC3UKcggQEmRtVTot6AWnSbSxjiCvwTm4VQjxoXTU3PM8dZnKRioirsyWUiyBm8Q5ZgBSpH4EAyD4MVY9Q4E2",
  "key41": "2HcNvwAZnqtcUdY5wFHFFSBsx6vhTmQGzTUizqdQuvi9Xz5LoG1QCtq7HmMzXSEXDXDDTJW1f8sjKHBXrkx5itbe",
  "key42": "4LWicshjLS5apdR9ZnTnRMuiEQVU5DF6EBy4v1VWqbDC7fG5fVbtCCBDU6SsFpvrF4dh7qsv6Tnhj8jdst3BXpN1",
  "key43": "3Z34UBvaPPyFBvu493CKVrf3sM6mUqNaJX2Q1rWhiaEJp1PMGDo27bbvgopPiPXtDU9NzzRFYtjTWmyu9EHzczaJ",
  "key44": "65Avj9H9fR1Gc1neskuREnWfNQGc5yRzpz4ykh6jYJeUt2cR26ZLSWpTJgomzKpZSbd6PxvHvM6N1zFEYEFH6oEk",
  "key45": "2fnBm7WeHSv2DUQqXGBLxhCxYQX3M4EJAQWMmKEXgMGHxMWZqXyYna4fchTtg5HaPRhzU2xpfTBFDXKUXqqF3p91",
  "key46": "ejx2cSLv6pnaPQBHmVXQHRtYa5Et5xSQ1SHXeius3Yn2z8ZrYtcTvSYqRKMzzi9yxeRs6JPF69uTNxqbxPvD9gA",
  "key47": "3UF6MSv5syEvvoS1wd3ddQxZ38ctwhqdYmwH19i4NEijSDDgjKKYQo6T3ppm596VnUP6hZBS2y3z9keBgh8JUo1t"
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
