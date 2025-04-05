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
    "bgStaji27tSY7wXXGT6y3X2QLNatT7AZb6jrzqXt6B4CLv1TjSVnGgvQppVuMD3dZmap8gVpqLk7NUVSQD2Uzy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jU3X2eXkrCKUJTfr4rpyAFsb78Eupf3UzFtB2SXGeoPiMm1hQu6DXkqckKtTbGuEfR6gzN9us4rhPDywwNB5Pm",
  "key1": "3rbLipLXvNz1VZwKNtZeQuLF8Mxn1Q9RoGTLDzN2P513pp9YLwYU5EQDWyWAiRXDYLeq6nB3FdTJRT7skSZbzUoC",
  "key2": "5bcaegwRBNnxKkTL2dJqevvNCD8j3H2XPWPRjvpmorL4SXdEfPyGUFaYhKuQ6dEgJmRnXe7HBYe41x9xK9wEo37W",
  "key3": "5goGcyeETUcPYNk5Hz8n5riHfPw1RCsNzUmqRcm9k5o9f9gGK68n3SPUiqgRbjqC7VxZKFnQqrMVu3VL73hb7tcB",
  "key4": "5tJr5YeNTxevnCp6SYXWomAFQz9JV37JnwhdYkSnQiDHvieCB8y4v5T8eZdZtcS3GZoz3rUqC4zd84ZZbG3LEHjq",
  "key5": "4W9jB9AMzJvar3S826rcLNuU4XApJUWxfB51mSDaDMA63Z8kUnFEA9ukP3LVk8QWev6eAYuW69xSpRKaZZ23LDVd",
  "key6": "5TJeEBYCry1zLU7W7a4pJeQKYHWzvkfWtiVeNUBVdSGVBUMDUezu1ZjoQx9M9133AF7CaSvyHSDdDviJktVdGNWL",
  "key7": "2JXRcdnxM69X2JN4NApgvKvXRsLjBvszLkfHj35ca8UKJW8umzWLT78MSUGXFMUKjmNzwNCj9NRqBUFbgbJRgygZ",
  "key8": "M8XYjzgSo12p14iwZJA7uQJTKmsmBcAQArdnuZBCUi7AHNC7sen5jS95oPjKDU5oEVmeDuYCazCGmdjcbEJUtjc",
  "key9": "5m4brQhd6YwhSvxaC8rEbTtqPt2u25KYJdWqKzY23gGqdjXo5QFLX3FCrAdGDe5JxfRCaCae1MkzPVW9PMrZFvCH",
  "key10": "4EeWdmaULJ52vq4CfpaFGVmj57vC7SH9drNTEtQCRTyBiNoAquuBNYw1fMNnay1MvxXwfMvdG7zYADc2b9jmKJtf",
  "key11": "5KscHqGoRXMBhY2jzxy3yS4nK9Ga6L9jmEWRWFtBi2NM4bCRP9HeKsK6MyPqwcCtkneYAViPfKp8TFGXxuW9mR8N",
  "key12": "3sNoC1QC9xUncgAmjZSZcBUHAqHfiBH3hxthX1UAfCRgSwshKEzuyKrYW5vneDdumVGtyMDe5khcyo3ThUAnddXw",
  "key13": "4NARHLLhMjyuADgzw7hvBLiCXxgXe9tNB3USZZe6ByMi72mb7nxJoyx9AkxfqkEjwzwPXjKQgJTQjNRnxbXDof5A",
  "key14": "5bin1ZqDPRR2ayqpWDJxoKwPFUaDWxhWhnkfiKMmZVmJtf5LNXDfPJZJTChJcRoymV8kALLRHY4q7peAHuFuYTrB",
  "key15": "29vDxdBE4MR7JfL7CQpJnzusx8hXUUjk9iNg6N4vUYsR7qJZWqZ4FhjnJAHLrLh1aPxjMrZ6qAHJZAsd3ddNqkRS",
  "key16": "yohXe1JyfSPiYNxoCZ5xjpqAYsBLR7aU2wVWa1zXFBkUDAL2XmxzdyJbVhCvb9T7h7zmhqm4dX64nwFx1QoTe2B",
  "key17": "2oUUrYoHWXfB1fsdWW96beLWjqhBQAXUvyLJUjUoWSJQdaqvau4XUDDQp7EuKdXbUgT3vrMa6vgQiWByW1w3ueoH",
  "key18": "5MkyEZWqmMkhyf2qLFC82heD4f3u7ERTEFe5aGmMxusSHhpUarFrMWBETNQFnJLMX8jeXTj4EVmhcaQkEcc6aJiG",
  "key19": "4kQDeQk6kLuokpZVq15NqwLoMiRfJKixBk1i6wNau9s5tm8XnngYPBSwXXNeXcPk8y7qh69uDUoiVtWxLjWrFRvB",
  "key20": "XdpE2EDnFkLL4itRNnGeKc8tSnpFSAygJWk7hMMfdFDLDSMBXeGAtQ76WYpRXNY911rt1sU4vX1dry6EhRZe58J",
  "key21": "3xYDX5M6Yr9QaYQYdaGY5tCBgVTboMYAXKrgLwQWUyn3wzVKVtoiBihr1TcM2YtBNxsaMbk1VVhBSriBuN6vNDvA",
  "key22": "3V8VhB3ujHCaiuucnSF1moTMh2TrCAhkuuSQK8NFwg1CqzMHqfJLLjGCuGLizG56uaLdWXmx3HMTTYBxktdqqX2J",
  "key23": "5xfTzc8RrdbwN2H8YFHeCtbN6mzaaczA64GWctC6bGerbJvTTu1czP25U5PRcPRBzfaJf4xmcjQGsmV57kBom641",
  "key24": "PKa2JVAAk5i7xRmvrbXVHttFedpVkk7Q99iEZzq26K3i2tYw5xvWTEvko1uDgKJs7qLcmjwEWEEy7wacxgQZ82r",
  "key25": "4cVdARjQbU6kwiab7niHpbcxDmHqUib4J7ooGynQHaSqGXwoaeC1b2rZt85bfribdnCZMrwaLGqGRwE7tcaeVLcY",
  "key26": "4EfbxiDGJhDCpPrkJ6yfRH5TF8Y49GPqQRq4NStsHCZb8fao8FFm3CZ2pXDKHAtAnctyJFiJ5Z6T23qZRXdwfQVC",
  "key27": "ZzEyz7DnvEJnxvprSvuDTsj377PUrbmVCyKnLZ7oo5div7r3ygF6FEMxwuRmsKpq8Q6iQz8NtVhGgjDY26vwYZu",
  "key28": "GAX7M716mkhWPKo37wMfeiuiZBsjucPAavVqyr6DfwBo5dWHisGbVVbTMpMjNK1CYvSU5pL81MpBAxcp3Fxdg3i",
  "key29": "3S7ANPuNsjB7EderaKoa1nmHESo6vQXJ7Jv1HtHPc2XVxGnURjgfKByKoJRjeenyxsJqzNdyxAH3B4iw3X3771um",
  "key30": "4KoocyMRpXy4dhuFUQjbMt9gTtC2S647nDNUYWyRPDDWF97sG6soJxLDtjnmUChN1Ffn2xxHwEbeUtThyN8seeTP",
  "key31": "4Yc1yU9vE5Zf9EqqbdFzC7inU7kzkrGypj6nXafvUatwCLsqnTByTqXyzuA6ifngBacrFFdwdXKk5KBGP3gF6RnX",
  "key32": "4QkvWfjSAMP9kvabUcS1zBewNZqxmeH5ddTcNDn7Xk86SvSmKzjwTdDKMpT8eFNc3Q4jMD1cHKddPywurCggxcJD",
  "key33": "2NWYqCu2CDsSiC24gfwYTczCsuswCCZqqgwCmo5aSjrPQC2gXADM75tMr7ng5vCi8dBjdYja3whWqKh4mNksRYEC",
  "key34": "66iJoVBkGifxHLu65RPuQrBtnW3UZCZ9WzU1RrPfJPek4Md7Tkapd3hYdHnRZ9jK2g4BPQn4pCf3ExAqzfYaYStY",
  "key35": "5qinU4Wx3yrmarmKKrdRyeHSJUmzGhFScxKuV7yuSqDQXNRLUXPVe5db6afeto2vLzNreQfdCiAPYJt4kgRbE2EJ"
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
