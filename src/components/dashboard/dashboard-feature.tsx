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
    "4X5fB4gNgow1pt9yaPjAsu9UFneKqS8uzkraxKVGDXSkRDa2KeRDKFX2dZZWcLDHNj31M9oJbi94tkiEr1oGG9Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNw7Q3LeAmbR5RHtN268Crv8871GwdyL3K5zdHiioQKSFAfrwxfoRdmKhMtn5ecci3bjYjCXJBKVoEvtfVj4BtX",
  "key1": "3wRW95EYSDUG4XwZAoyzjjCj5EEKsF52JqLSCWgDjHSXnKgNjyPkhrmUULD1t4gLojJNdytsa6UbVqJM8ymEz4Md",
  "key2": "5rrsGpNzGry7TccXTyBKU8NoZXzokjyuKRuPFMntMvyCgg1sY6KLXNE7YiuDufFKXELUMwp5jfNkmsTG1aChTYWL",
  "key3": "V1T2dvRz9cjiHAeZ46Y7ZUAzYxhtxxzWPUuzkqYhhcqZLaHdJ5jYiUC6SMZeqQAtMe77TNxeGM3pgfRSF6nvL3F",
  "key4": "29Wyp62WwQ5LntnNS5wH7wu2r2azA7WBcnLWT2FC5JaS9TSAuSozZQtAkXhQBDT7c9UASqYaQP8yE34fveez1FUM",
  "key5": "2n23dYsaByHRwWzuuzuKmm57gfkbz8b2q6Y6qHxGBe14hH7G6Cma5vdVak5BWxQgYAPx3f2W72YZMrr521P6rFds",
  "key6": "7FGx5mSjvvmVJ7oDfPMdKSVzQmuyVd8RWjuqiPbdPAdmbXqFgerL4BtrbDTRcFAum7NhZRkLu3C71qTFHCxrCS7",
  "key7": "2mdZRvHnATMfxEC65ur2uhHwLJYD5zsrt8sUbfKGasoW2pYwUbsYyZUF1b4p9K7ocTHyKYCzwP4HugzxSYz8rJTL",
  "key8": "4tBPXYZ9ZGKVY5CoRY9Yt4cbcm9omxGUdhdq4xHywiqpaCwfWYtiJDoL4dxcZWPXfVr5Y7UzTV32EXzzSci8EhwS",
  "key9": "QW9ZvKk4eML7YUSXv96j72dgQV8wjmUaNMdPrCSNHj4ojSUYb3pNVsZRwDAFVXJELRKH7ZuNqnmGuDScg6v8P29",
  "key10": "5azBnEbKtBYEKKWUhaE2EBQpEJiZJ43ANNqjj3tdGumv7ahW32m7b2krWL7TNcLLwyo3HV7AXha2U54jGAM2jFFM",
  "key11": "2are1bom6H7gNSsRwdRmUUA8MpPeKrPPpaaYF1ggKCvVcbdguwGjE7vgV8ffrmANww4QUBN1ZFS1QboBxEzXqUhU",
  "key12": "4Rd64SuNkct6NpwzGmqL2wHMFY3ZDkAMe7Gkg9uU5eoCvfGdCQhsBepYuQj71B7FyXUEeyw6hpR8ydH9s3HEn1wp",
  "key13": "aDgrEFtQfeu1TgW2fEoct2Ly6C5dHLmpzrJnKWwPD2Z2drSSZLhothkxe9RJZHH6q2dEBGviRdN5WPqo3tBGvVq",
  "key14": "UvkVP2Foh5ajmb5ifPCovDtcAsN6Ujw5mkMq4gXmLEUqYyoF7pTjR8Rb4XxHAr2iUb1M3nYiDu3TzzDZhiXRqat",
  "key15": "zrqTueJR6ZW4kQRyf7GMMyt19ZBaKVeD2tC8Cj8rz75AzexS5ixoyDHYSyAa94FAyxT6qHmX65AJCVvXFppLbCw",
  "key16": "qFcrRYYavA5P41txWxd1mPwXBDXz5veo6AQUXAffDg1twVQncnzxVuFMvzL5f8jQsfnZS1Wqx9KoofGcmFA8zNb",
  "key17": "4BjyzFAGhAvEaqctQNA7DbHhJ4gnS2YkeMkxGt54JYE31e3e6ejamjtLHkn7CmbBJEPq6JWSjsMe6RK9UBe8cFFE",
  "key18": "2sgqh7mstgaRMDMw8NNmxfa5Q7zsAR1nohD68saEiWEHDmCqStQbhphRvWKFjGGgnR8dCaEV379LGpqZYppk5JBb",
  "key19": "2opjGEqycLLKjkemDZ6itwVwaq9wMfBpHNXSFWkdEtHGTj5LjpuqERodX6UKUHnsVJ2c4eDD8c3UNwYUQi8f24BC",
  "key20": "4Es57tTiDmsruPRkiW9AyVitVfV2YKSkWWhUCdEwr76qdkc5vWg4vtTmmiFqbazdCHs4rMryoUi7uECxhs5FU4FA",
  "key21": "5D4u5iuF89MoFLvdowqxtLMu7TqFbacVrhEsxgV98C2jxq57ReGdWNunN5smFwsZSVNjfAuPJ6nxzC1kj2KrLWwm",
  "key22": "2zeyzhEsciEwxpPsdzWzb5opPrwMqgsKZSp3QYnNSpqZPKFRYnAh18YcEGhfukjiC4XLMMuwG9PupExskJ1HoiHa",
  "key23": "47jfoWCGRB6VSGysQfjW8Fr6nATeQQ484cvnUbBVXfS5bs4ZkP7KesdLxNFeV6UngGB9rDKixbEpAsZBcu2dr9Ad",
  "key24": "2ZrruNHzUFEbUqUN9ZVuBAUTpyxCHgKJuLPZh32ercsKZMGejJcpTZRYShJdxqMxaxQesA8N8m9ZhmpjdX4AabFf",
  "key25": "42NE7R4qp65Bd4r9RKFECjSL9B4TrBf8n6Y7Y3xUmFfqRjSpWubC6exvj2B334EJXHNiSTWehNbeF4sntckcQTcq",
  "key26": "2M1r2pFbZpX9wtCNd6MGCepoyFDRZaCDMAsBCyZ3yFdtCtXj95m29d5U73ooyUrYK94j66FQCjBXmtBZq3dMJHHM",
  "key27": "2mAtpxSuZyCj8yPJeGUGYtX2TuzZV95DU5WiTnbLunE55P1QqWhLVvVunxpiTSnpT7RREDHgH5BmJr85xEnE8Lor",
  "key28": "4bCyR4sgUdujyhycM81hXuYU4CzhSyeF3PtAQyKjiNmuQU3bbZ7XM23nSgTSPjRko2MouYyNDQHRmEaRJMhBWMyz",
  "key29": "6AstXpkQHHQzwYE67rqrBC9UhceiM7PLbJks4Sq2E21zpyCHKyxUV3Kjv3AGiRCwogtp5kkJrEvx9BUijzqxirQ"
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
