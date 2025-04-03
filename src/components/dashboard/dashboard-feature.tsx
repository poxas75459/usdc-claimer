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
    "2wg1WWbMeX94BxSqx8vyVBxFcuKEqtgAKeDWDejpngz28Dog5HXPxLtt2qATRt3vRLkWYu1eGaFbmhfBDfZcXZEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bo17yv3PQvLCCrsrfzJk8r9Wu7umsaKyfUnSWuXWxxmXYMXcYHMBguiH8DqjnywEkgW5GpVNapLt8YYCCX176Ag",
  "key1": "Ag6JZoY4PFYggcKgir79E5BUKvGaFf8z5e2i2EMzn5XpKEdp1aPTMXajZt5R3eKL58JVE18AhsxHZcN9nGvrvyi",
  "key2": "2YmyLJneaaeBBD4TkBJZ9H4myu6WYUjbMkL2g43LjkgbCE5Br6BGVx4w7mfAmXHbTdHDxpLfV4tVCESsir54sMtM",
  "key3": "4JijQ4foDvwX536eCa4w1KXRD8rBsJm8WbbWrgewhp2ZxR56ikzrG9HW7qK6Jqr8XmdwFbc8vuigkHKrrRz2RRsL",
  "key4": "3Y9SKqQi8qDG3YrMrDKqECvZt8ahc86adiYmyu2BDqU826mhDaNMNA8JZ6RPJhLpthoFqEbwPxzCtSzmUENcvb5p",
  "key5": "4nTMsoW7EURvDxFy5t4JvBA2KGeGVv28xqrf6cm1Bzd4hgFEo8irp13asqBPcVki4E4fPFjEGP4gDLgZNPjs5U3m",
  "key6": "3qa7BBjiA1Bdat3M3e6Wuj62pDLzJ6r47PXJVz6vvgXvqzLh86Q267sheG6p17tzfeVbHNLTtc8mcWMiKFb94CXj",
  "key7": "2eK6dWkTqnDzdXSjcQzfSDSviyiTL4uC2qJCbHEfUJqSR87KrzzjqaivyG6PNYBiq9ikj3Zz3Cos17WLvs12vCAJ",
  "key8": "63xvtDBUM8WH7cM3ybNTBm5JPR2W9EjKhfmt7yk3fg471nttjkUK7LVwqBkgEQxnoymSDZDr6dx4268Vdrg22mkq",
  "key9": "2zSeQQTVvBsojApidQW3LtfrfT7VPZJE5GXva47gkqHSDP61pdtB9Zs9oc7TwDdzdW3DMkXM7onhMnDFaPwLhLSj",
  "key10": "yq3Rx6bjh1ctX5eoDPANGeoDxYTgJo95pL1hMs4pUhnocdFWX7zd9xAdAB6kTWSvz3unkT7yKxDfnZccCWW2ZE8",
  "key11": "5Cn43TjcGBfthjAEMr7pdn9DwSSz3gH7ufF75HD2o6jJn3pj4fQkuj4iAsrYdDyzNUyZjYZMqPx9e1FRcGqsVVqa",
  "key12": "849Wr89ZWQ8ii6Fg8CdcpKnXhCwx37FssaXgBpyxPEi9Xn7LtPEDXyXc5wKDopaGB9TnHyKwWzgPjugPadDBbuy",
  "key13": "5ZEt4gmHY7ZCXezvdqTTEvqBBGgYDsZ8i4wcbEsk9VcXpsyxmV4ZU7mb5LURg7ZGFiPHJZy3kffb8UNgq3mAjrD6",
  "key14": "5jwSqWhsr7u1pghD93Fkpuc516ArDGEU5A1x5eARdi73Vce2oJp51tt3Cr14id9epqUPZ5y1wg8iwTsW5P4iYWsy",
  "key15": "3uRm1wqxbDAhPrGbyToF4ja4ToeiXTScFwY6TxUzYtPY1zu6578ya6eG48RZDoj3RoWBYBT87WjVnfaf4u5atq6M",
  "key16": "4paKGJyaRSQ1D4pZm7sWSBfyqHc4g1kSLqFg4BqFr97XQPAjPhB8obZGBHGm9mMeR5YWnp9LDeRwbXx9rYXo7q3k",
  "key17": "3x5WffvxD57briNLgxV9yR3cxo2DR8BVX2mhmy6HTtxQkiV8Z4K3czocJ7jKrZWb79pUS4dfaQUNmCJejQkxxNeh",
  "key18": "4EXZNbbvBYGRtjeXU6skcCR5DX6BbXu2qvCBeERekVj7VQRgdBRLcUeskRB5YYdYCYPY3pFJDDtFb8CyprA5Xy5p",
  "key19": "4Tjyc1xPGQhmbRaWbGJZDx5o8fNDoy8ktNdCs8NFVWVZpMzQrEQDrifaFTeC8DXsmh923wPoGeSrb8Xz3hnjmwd3",
  "key20": "2d33epWNXf1ZWMgdruZFfHPTsLNhzEZXdCSLEDafPFywraYYGBovZjMDSh4MhpnjwqPh5yE6wnbguKEvftyuYmaQ",
  "key21": "4RintTFzY7Q6DpkksDr9h7fV23FZJustJpUYF89CHji9sAKRbiof5P6fLNN3tQ4GR11KrXYFAEUK8a5zs3CXw3o7",
  "key22": "5JbcmetUepsnfQa862HDD1RDvgpmmQMo7UYPLiL8hinaaTzgDqJsQCBdLne1L6axuNyJScjfQLnGJo3cLdZ48owu",
  "key23": "ecRsyFE3UggWrXrJMc1ddEusNNvVGXtHkG3X6a8biWDZ7R7DjXzueZTT95spsYJJ71NaMxSUDmD42GAUCLV1nwg",
  "key24": "3p9XZHkm358nXokkuKf7sR78Bc5yv3yPC2wmFuZtCuTdgAHMpRaqdkDN51UZyKHwHLh57drMSuT2BEYLwLKJ2CUb",
  "key25": "4brYzGrU5vnfHua9cdnwEK8n3yfdJBsvNfYhwD1LqaPAY89qaCbZntJp4T9SGej4PJjzCWXQNgUrNCTL9hwggxKA",
  "key26": "2pcm73nnAm5daVQsn3c6UugFcDstQQdDDkyviAwp2eb9GofmnXgVUJbmSWBL8BqxEzpHUxDSPADBB1BgSN3D3rkD",
  "key27": "2wGB938QHqDHzmGno9dJdwFuT4roHUMPv5qyfmh5ucFUfW66HtBZh7mbPbYWZfpSPFmCReUQnjXtDjjfoatZraWg",
  "key28": "4WiUqLpNtctEVVHjK9Fcze4GaihvbhBSCJmWpSZ4SwgCziy2budz395FoRkZDkX7WAcyPBiJi3Q8wyk5T4hqTmAz",
  "key29": "3tsreGixHGd74YoQrb7o1jJxHnghpFahA5GP8zodWBcspAqCR616fdiSW2QWo3iCaUtdi3Yi9eMnZ8JGakqQMNmL",
  "key30": "2oiBrhDDjhAx8fqms5uSsM1uSQbxtY2imWHwYxSaa2ctu5ppmmnsYqgwudvxHej3FpKYZGSwjgks7Fh4d2oxVYjm"
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
