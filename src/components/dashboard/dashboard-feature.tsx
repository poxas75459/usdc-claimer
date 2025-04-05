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
    "3R1RRLo1YQntGD6MPVhLa37XCSf3TSDf7DkoqwyPoBvB9A6rLBcDjKS6AmhEvb9aF7dTaacHq7XLa3TNEc51Kc58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQvFHhptxFcjaKKbcNGZg8QrBruYzsHnvYffgXm3A94Yok5GcafwFvNYd143syHwB3ZQcTpJmaThUN4d6s1LPcX",
  "key1": "2ThL52YHoo71JM4T1QxfGBNRTnZNuxmn8jh1oFqygcKYscWHgfyfPRJnS5rycd1bJaBf3Xi54nV9nhHhZKovvpzD",
  "key2": "42odBKgKbshHnRbAERey97HAQtDQs9mdEBxFUQWuZpoUaVqqzG9mPVfCD4EqiuzhcyKMriLq6LqTNWg97dQdcxte",
  "key3": "5aZ3jWDJRVW7DjEDJfs4wYKx6rZEaFbXbUH1PzKDvYzqt7mC4BJA6qmSV9cbR4viAWaE1pp4HXk7uBdKJDPJ6Vcx",
  "key4": "3QFsy6kxV8zU7yyUHekK7ximHqNEnx2oZfezdVieQvxxhprqyfU6S5nfMwqTEtXHDUqu6LgJet9r5cHcLUN6TBGH",
  "key5": "3TqTXGnbZ97pZp6Ehm4cA29nxL9huwjMfY8QwtcV67MqjwTTNfTqxnkgtEKQvX15rGP2LxdUGdRoo5x255Sp4MMD",
  "key6": "2MjPKJ6EAjxfRV2SstgyGdgc56zbxHrJRyJRivz9gbKdgVugXxd1SzzH4MQjS8VCqbcRgWsA6cD6E8odDw99ypCP",
  "key7": "r1DyajTMkTrJzezRfBcc1zDqnSzFsTGY4Rwb2ajQ3zZfoAQssveG1KWigFknbwQphfkb3Uy9vTQomEhXU1t1cCY",
  "key8": "2zG5dkN67xS7YQDPfYd5JydB1QmWF3U7P8bjFBHtbe6a84Q6v8nM7iWGNgFV6pby349vpQaF8Hr9ZfXmeigegbkV",
  "key9": "3fnKq5KXHNVUVgsAi3dSyC2mtvrCTmdppfpfwycxxUjzfNBeiFK5h5Vaj33PTXRFkia3FB2JxAGg9hgUzAtxZKAS",
  "key10": "3zHd8ikBfxau9w898d1WGXfr4hz5BYzhfNTFJZsPQZgBYjie3RCKkXaKwyvtNKgzdbVdMnZdY9Womc83gDNXHyBW",
  "key11": "5bAKkBLPpTrJUYMgGw41rgiuJt4anc4Z6wb9coqZAEpRkuxzmzCDxgcvtj3hqsZbNiBdX65VqDtmHW6tz7SbDAUx",
  "key12": "33zAtsgEVmy7NhEiybZH92d4hw6dcAKhmBpthib5E5cFqdwTtetAHkh9iKWNc7QFTRjJMBDsA4DE1Dk4TNpaNT1s",
  "key13": "2JSeMp63mzn8eppfP6pgVhs2cnX1zjRrffiYuwXJu1btmm5oMxuVByfF2EWnNPMSDtNF1FGjGeyXimdHSgQKhcHM",
  "key14": "ci1HPRVGMy4hSA8pqdCzfFnbvPqWmE4JSULLWpA7cZjLwsRJGsqD5qSD2pprVMfwvjWJgtTbjR9pCA5s6SUjWWZ",
  "key15": "oLcCJcmf3C7efFjTCr9vLpV2FtupPVZLEjuijq4Xk79i4eMSGcmzTk6dKK6WrnTQdNmNSwh1w8c3MvK8xaG2uHV",
  "key16": "38NYrnQQyk7RgbM52QsgFAebEFKvaWztKJ51dgBucLmr1EQFADDLizMj7fE8k1G3kVg6kVuhACq9ZnGSgavc4hrU",
  "key17": "PKV1rF4PZANAkUvsN3iAUpZAaN7CM46nDhijqhWdXhdpZFhSiizbwihyrDsoapQq7htyz1pDik4dbSVm85iw82B",
  "key18": "5FLrnCD1i11NjvEfZkt2ozA4AmXodnfwzULs6q33aXpb5wDdFAXPnNHDRBs1UTRtGWnmPrfbqdr9uJZH7Y6Vtgs3",
  "key19": "52YmLamWxByEBRqCZwCLoPdT8Vog6SDRzpkm6Fvyi2xbkk63xxfgP8i1RCxAh9itpkdJaDVms8nQGpprSFXkTs9p",
  "key20": "dUohFEErrxfWX13VDubXCWxSuGykttEs5fP4gN9qbvFzqSgVY2TxtdGm8jGBFW3c3KhgKcdjEvMWXLUh9bfuSnm",
  "key21": "29yUHUuc4yT4pTbKbMZ43DJ92KCTRoD9LHdmemqqAs2KvBF4ZchF9pixzZpn2Cg6nVT1aDJVkwWGRkT6yrKKAyr5",
  "key22": "4S2ixckpoRUHmFB5Y1r6onow9zUqJyqBxtKP4yPW3HGwRtHykhMBWn3jroYTqS6P7dzmfLFrurBkEbGxwhCgm4xy",
  "key23": "3tcn5jtAtsvFfxytTTxK18fQBz5xmYTHfZdvEf3TczFs62UxC33T5rZrfSBM5WFSovmQjRhaxnfJfaKdo3xz6QXF",
  "key24": "5Bwn2QWyuVNNcd2xxPVffnxmchfqoR6W83bLVMg1SoE7AqSj5RvsLBtZC3jaf2gFUZfGoa6xhr1Ywszk2BEdRa4d",
  "key25": "g9iDsL5EWbCb4idKkfw3RQxqEbAFC1du5o8uKTuAG42d2R3UH26WLjeg7HRhYvn2ZpQ7KAzzrwRCafp5XGEEqoM",
  "key26": "3cNwAB4q4yUgGo6uyFWGme11h3q4BrgjJkdo9FU6MzmpDRja5RVYHEbb8Nrf5ewN8Xa2sizLcZJuPscPu3WSdarv",
  "key27": "DUP8FPt6wEe9woXVf4UGrD8ph3ee4x4NQDt6HRvrv67SPGPvNMCbRM7x7uXLeCipMXVXvHhtQ3qJ383Frx1Rycq",
  "key28": "2FCvvdYgQUQ1cYxuVNjyvLnj3pfC1XcFYG7Qn57Hg7KaAqG2n6ivkJrttSV6DNNAew9XKhaMJCFeUaLk9b3vPTnJ",
  "key29": "5Ve8iBJX5T96QxGJ9hviaywK9ZdbmQDGnKdQHVvLkfDKFcrRbawVC86SKejC88WrdCDHYB7Y9e3JY2Bg1zB1S5En",
  "key30": "2YGz2QApW6tpK9W7oN7ysoqUqVCTmAtvaaLxs68wPPaBtkRPdrTVHqziynucdEr31PFVRWhhTJZ4KZYtuoBeHHVU",
  "key31": "AAbBK2BWBYoQ4mHaWPtuvjifdM2cdBWqMCAYSd9VWyr7SoM8mnJPrp5L4AoUYpTTHpogVtY7xGMjRq9VEPVRaRt",
  "key32": "3DJsXJf3CPvCphfCmJsT9VpxpbesqA6vnYwQVgf4YUdMZnSGsHDwWHce8UwQwAp3XjDsyQbJoUSKjq9Q8zf4EBVV",
  "key33": "5WAreAvcXRCExSzt7tgAN3ruAtSut82UGQSzev7LXLBBoQYG3cmmFLpZ6NisvQM95ykNZi2PufZMFtqowVQkpVcJ",
  "key34": "4XdB5Rzfq6readqpnPbxVYKbdL58zfQ8sdHSDqKmrnquSH7Fe6JAydQDL4EYbscAtddAaJAee9MDDhRidkUN6gSN",
  "key35": "5mxWX647CoTgt6HRpca73dkrAnhjz7wURAUPf2QLLviuiTqd1bzJrxGmEvhSJmNXUMLpYLu8rgVtJc1ScjxaQ2dB",
  "key36": "5PCdp26uWvvau5CewofxXgJjnCLtMmqvSaGscuYk6doHaUAWR8gB3ZZKptyqMH2ZjS1Nr2VQ6JEvoh8M6PwaQsw3",
  "key37": "5BwE4LXK4hCDkskjEhgzGWVtth1EqptCScPwvd1K2VCjTFZtkZNvgLyDNfZs39nABybfPzGfvh7EUPNgYVToogFk",
  "key38": "quz7EF1j1sYxSTfJqjuNDr7kgNeD91KNWtjT8JhzoVcGBpvrvZWW53c5EPhTQCePHWdfmuMdd4q67wPDTZKUrri",
  "key39": "28psmgi3VLVVJSWZj98uBg4tTdSrMZs4F7koceSLEBQY8oRZELNNpHgtdY5b4bwx2hPfCktvjtuxWsLJ3eV9UKbG",
  "key40": "3FLHX4T3AXsLVVsb6FCpUY1zf16Kh9b2bxCEbd4ErTBhiGjz15aYSDjFh4vWPG6NnUTPwb6sgyoJtVb6a4zZY4tH"
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
