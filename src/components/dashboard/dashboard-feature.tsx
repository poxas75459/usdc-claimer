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
    "2r4NkJPTKggGBMxnwzDEuAbR816FiEuB2r5RxgKppyybhKabxXi5grJR67BASFiX6zaXAVeVw1uQopneawG2nUX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEXfT7Dd3Wovfvpo1J4Wrgj4ZQgKgu2K68pBBAHZik1tLumARcJpxZoZpFwmJjbKYqG4HQcR9LrpHgsDZBSyAQ5",
  "key1": "3K8Vg98mgJGi8HuwpCduyDg9ZvCBFSL45bB8YkKxk99Z5zgVbr3Stdodcd28bVQ4n8eSF3Mh2JuEngtDFV2CTLTb",
  "key2": "RgcjDtXiWcDGh6x265DuV6NDYiAvsZcZCd8E85iyRsYXZ816erhE7DUhfgYeUtWDs1nc3YKpK1xK1mvjgiwguXq",
  "key3": "83qu5rd3kStbpeVwMohFFvfzEpGdRfc7etwjJaCUxYBebwv9jNJvaRRRrZoXgyPRdcSYKT7Emjm85eBfhmakJET",
  "key4": "x8MQuKZAAD5c9DsrKpCuNq7tmKwdJaUGVnJsnS6fwtVR1N5Zf8qWjyfMwW4Wscb3JRoZ4pyr9HfaKjhsCoEd8HE",
  "key5": "5XBnPBnGfxVnK8pLyUiDPgoKHKRDSePyofN8GdjRsvfgUT1YhLNE7cjCdPF9NGieLSH6dH8jNVAun3MtTrZVfnBj",
  "key6": "fw6NMiyDjvD9EMEGAXddN5vi4i9oBozVLvMsouuex1UcudcPDZDJzr8FYsKiNwksZ6f9Wqq1cq8PoBg4x6MLvJj",
  "key7": "4ZU6VZTCFPCWVS72nChdooiCwC1N5C9wQTuZuTBZ7hDkBbxJ8mNZeD3Tg1sYex5Fjs4KZS7BLxc8ZYynrraMTP7D",
  "key8": "4AAEhJtKQkWy92WhEqBgPF9qriJgwF27VCkLo8Lt4mgJC7wZeknd2edLzBJG54Drn4TPXc9jC3HpzrNtGrn4CBPU",
  "key9": "tiZfZSaCXfFSfWKmfUfWmE3SGqaXZRfNXAjXyrku33XWabheV6VYPP8q8M9Wr9XfPoiKBCTaBdkHvVXtk42KgMc",
  "key10": "3F1nQWKfw9BMnbovBKPgpAzw3scCaCgdrLELRowVVS799aVM6xt3DBkVeBgrttfRdmAFTrA7M2H5FvPJPtteFgSE",
  "key11": "5guqvgqC7Sm35enDkmK4wc3RJSpp83Jr6u4QREzsCwLByCM9TmVqnYsG2jUuAaQfGYrab6gVWdcCGqGBTxHk7mKw",
  "key12": "2eZ6GSRjL5DoxUVLvD8CL6V2BjZ7LUBjoASTQ364XztZEGwJSjCSDC3yMCq9vUexV4RkbkpZv7BwUavksvN4G24J",
  "key13": "3ZsfQJYj8e254Sv6p42VARTCey61G1MxC9zomVt8JDgTtNxfinAxkvTGb1Fsiket1VrkG6VBoDGvLJY9mLE2N6Zq",
  "key14": "5PSmkdgsv7Pyfcodjz4ycWhgrKVsxaWEupCgJ3WP1xUC1jQsiKcPy5P2faUL8xpsmSorMVrKr1eE21Ew7zq54gd8",
  "key15": "5YoEm6CW4xv9AhCz6WxgfRY3LNkj1pYXwUD7Kpt9gkejCHkA4cp1CAW37D5uts61RRhbSjVWed9mqhtFE2NUZasy",
  "key16": "3g9bxDsq856RfNnkefAQ2GfaZB2FK8NpDmdioFBD9xCzGiGAL9M4PWH6QWbXVWHpFj8boKk95cEnkPPGAZ5hqtfq",
  "key17": "XnCyFr9vKPe54VucvUfPrbj3b1ar9XWbaGRzwZB1kZc9emNEDvCito5TmjthHazj2rmEMNhzsKGCBVj3Th63Boc",
  "key18": "3hbyCVE4nJqu37s6idjDLPTNhfpYo7EfhthAo1FNF6AQ5FMHz8KaFZg8Ye9uhWhaSGA53Yx1ppZ23UskW5MEvNvn",
  "key19": "4jWAkuW8k46prXwcgW46EppznVFyK7suMvwqRCYV8r8XSsZeMrR4iVgYU22f3ddJVPrHbsqfTAHeMmkznCRpF671",
  "key20": "Bs47zHSKwzfpn5p6GsgVh3y51cLb7spkJCDHUwsxf6dPYmyaKKkrF2LfXye6438JeHmy2AQUQWJmUXhEY3pFux2",
  "key21": "3AGSVVpirhL9Lfjb4acfpMU5b3QUaRZMWUqCeRoYjs9W5imDqethikbQbrq2LimEEpiT3PLKBjZ6g9FJTkENpqrh",
  "key22": "3YQSv3VddqoBCdaPw9fwrrSmF1kPRF6KYegC1LRKJxrNz5edCLjJ9NUmtKHKZLoemppQeCC5wE2zdf5uA5EGivPV",
  "key23": "41GCnKvJwG8fnNeA78xaXiczkYmgoe1v3ZLA4THUHfj2U7ocZQwbr2PdnVQUVDoiywamxh95vfZ1KmZSZzyKSBVM",
  "key24": "37SYaRUcek58gt9YyvpWxToPKhLMJVqTcqHDLCEvmiHGQ3x1tQbv83H8WFWCDLncevFCKYXaR42d4jzzgHspvD7p",
  "key25": "967MadjNnuS5YnVmV1nTTDv5xFjbG5TVpKtydmiqJyBQcYYjHj25G7f7FBq7PqzEsARcijfuFPe2DCTmjuQNtDz",
  "key26": "5u8q7t1XwbkCM9gaiSA3ekRhNVYSR5xfV88HLnzHxCVafahdfboRpaeFL6Vfv8GPucuLGMR5NK2Fci2ymwg3a3NS",
  "key27": "2eR93EWyF5ASA3fF2vQVqAaLy3DFJmaeTdZ9fuUY6HQ6Yqv6gsVmt6eGTStfTinGtGduEicNkJigeJgXru7rxmiU",
  "key28": "4AMjQaN5TDgq2KQaTjyKETRTWwykz7riJ3Jyw6y7ZBv76uJB8tYFAuSMhrpf6aWxj9a1M6eQrYWRRDqpkUAPQCKM",
  "key29": "YoVD2zewHwHx4tk9edhaUsvxXeVjw54YGvGYYzXWjvaHp9yUK5Q9qbmepsU96E7NDLiS3jZqfatmNaRxxvDefX6",
  "key30": "46TLgBviQoBvhGrXRidTFY37WRMnKhtJmTV5iHGngNeRpkvMsk3FghBVPsQLWjPUDpdY5c9SyesfPSZ2baw4CxWy",
  "key31": "RZ6P96qrDJrj5rEP7n8DrB9jzmA8vtc5AtmLM9HyJ6px6K8SWRD3PHWopWpmJD8m6CVDqFH6dNnAgAsU9k9EmGJ",
  "key32": "4yESwZB3j616DYRcdhkRka9nNJqiC5A8swwPNqMr6A88YHJupLo8XZgnN5wwFsiXzAosLikQjR7BWr49xSY44T1i",
  "key33": "2L2D4eCESfRe58BWLdhgMR4iW6Kp138Ji3ZDKh4NFTGVEfeQBfZvxgLvHz6cw8oMfvqdYZDJ3tK9HmS16xbhEZv5",
  "key34": "5gVR2ohS2kyrWLZ2ECQW7nJz4y5eK33nXPXKBcprcdmSdCdpo3hiQze7XbBcp4PSigkJ8esgDPrPJo2wLvfB3xMT",
  "key35": "5zxbTLr8LRXioVL5sdYEm6gqUYvieG3QTUAvWBXLe3F8HJP9GVvnYNUpG97uwxCTe77RnsnaXJcRFrqLipEXqfkz",
  "key36": "nUQPgBopYb12R12fxE6Rmb8cT7khJFmRDUrFDJPzCg36Ca8eTSLTZzbeHvFEKVYNQoXfeVzJA4GkmnLDHijC3vA",
  "key37": "22NpLn1E2zHd1gsGqPt2osND8YCB2xkuxGD4xj5UZCjd7SfkygkYY3PYnwNh9bmdGhKqh6oqG64b3XhTVpM9fZZU",
  "key38": "59hopdVaQ4KmQdMCnsVTcf7jieLa9vk5Q1b7iKFCsj2dDyHbM1hfPhjBrmrxZvbyEcFBqavu9q4aSvt58oaqvMtN"
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
