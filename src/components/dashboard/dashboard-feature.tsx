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
    "LTbZosfdQzdrfuXFUmwqFDi6fqsHpkcCbhjSWh92GywYQcxhPpAHSA5FjQwdqazkgegsLVbkxpMmw293B7jiTFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQi3yAWQiEhk3my9eG3UKR21PinFxuWh3GhgLuEUNa39TSGiRtbPfCDsKhJBinCYCVyRpYqiyKTobwtTYZkASCE",
  "key1": "5JNW7m1Qorem9ottXm9y4bLSWEapfhpHuuRGFu1cDee4XmpnH7bW9Bi7Au4Bi766JMCFrq7dzgnp6XaeaZBV2GD1",
  "key2": "5J3wsWA9SHqyKnX8W6zpaTf4A3Jdd87J6inFQnsC4zE9NibvPQc9MUR3fa8JqdvnySemNwi9tFy29hduRvpNzKZv",
  "key3": "5n7H22Vg4KAS19hagDk6LxMHkMAx5vto6p82i1q1QCesArMiQgQhB7b4Yrw76BciSnNV5Ho9Z4M5SNrhS2YN8c71",
  "key4": "3BkMqLuAbcHoH7bgvQNGPd2MdZUWwyxmR6rZb7XQkfxb8gVopJJKkkFnHiuqxMwDsYLEXjorHETXy8HmVZbCArH1",
  "key5": "64bn3f9FGWJPHrgivwcf7RoRkPZDsSk1GuQxSPvMo61Z4Nq4CawiM4FV56wyCe9h5Xk88HvNGruihQdgfKgFPDfj",
  "key6": "2f8zVAKkUpwARmUPrqrxMseZWphZw5ycRaMou2DfktBC976LmKdJ29GaqtzpbUb8VrH3LTd4hrpGzcn1pskS4r4M",
  "key7": "3HMNeazo5oX35i178Yq9U5KTKQyZJEiPVcHS1BRyrTPMEBkZcDM4euGf2vFKEqcUR8AFbnsB97YQ9ZVtwYbarri6",
  "key8": "5NRzmYwXCDUQ6tyWH7U3UE6gpXCxfK5tyUpx7DqNeTRmW8n1BHq7wbdCRpqdzeKXqcBKWHxeCQRtfJf8Kd72UzZh",
  "key9": "3RLaZofnY2phsJsCtVn5VbXSRbo9Km4SV3WhehCeYCC36KWCHzZoCPNKHhp1DKNxuGNE66tcWMZGvfob8YxxRcT6",
  "key10": "R9KMBYHcjyUaXbav13YrfGS4McV4uTtdDK95J4uQKpyy3jvUW5DXG2xa28kkBux1MjoHrkS37h4GUrYHZaR3fMa",
  "key11": "44HKtjieZe9c1tPjt4fgMB8R5FKSaYj4fyG5d3PtKqzkEps9rT7KGcJoFTUQ2kFFZ8bpFVTcHmDhVBT16f34Mxme",
  "key12": "niC8JjBP7Rw9qVnoD1z5uFASwv3uB2RspcLdMbrevDCekU2JBktxuZdpbvzwEryfc3A7DcS3TtMqHXE6FAED3oK",
  "key13": "3k2e1Ezv3b261ZtmquAx4ghyRoyrghC7x1sRRNiPm5XWm8HfuYFmABQfyAPoevYPS3srWWNmay6dFhRf6WhbNS1m",
  "key14": "L6T8kyegMk8CM1vdMr6jfxE2nd6gtHxPSyUEB6tRYjjZ8PHjcFAK833oRcz2EbzJLskEfojktZ1ZSpFECPQdsHK",
  "key15": "cjRM4zCKEzLGK8f7Dgb7ge1ZFPvBfpThhsf8oQhXFEyZJRZFogkpfRYcDUNJRGAbDKk4BBpe4ZeMhNu663nMjjD",
  "key16": "4zLhzRSHokaPAq5FdFWDwZ7KqtdKxJveArgQ8WDd1xaTtyaxarjyU6NoKhLh8VS1Qc7qiq43kXeXRbsyCCTbfuMW",
  "key17": "3t7Nb4tzK2Yv6EvNVrXfM9BTAxcxQMKTRnPGKZ39382MJQn2nP7o1NAV6YxEZQGxTyLz5fkecBXVpogz4CEs2y4K",
  "key18": "5rsNA5fpaz2GighpXCWAgfpJtaxGjLv57MCNfd6WmrveBgfVZuPNZKs4o5S5MEf5Fg5r8tdM4sacBbMruj3avxv9",
  "key19": "PaWNMYRaaEKes4pLb4w9Nf7e19zAbPMcPtw2anxd83EMaLCP4cTZJpkC9Ab2SkpmGmADce7SaPguMECJvbAAiRA",
  "key20": "Zwm1peS2JeTkxKRDSXwWF9asiWGmfVDTs441b8h8mzUnJtjZXjhMRND8AUbE9WHALG6jSkAe3JCNjFut7aA2Zei",
  "key21": "24DVRbpo8XegGyKEsUXv8dpFQMGw9mWU4NJ9vuFq9Yu4gh9B1GS5yFaQZyuTo3CpwBRdJDrD7DcvHLyp274zYmMP",
  "key22": "HgBks2zH71FjfqrKuWYjivJ5UCGuZCTWKteMnoDyX4mzsZrBPsp1EDz2TTbP1zMh8iFedcRR5SjvTBVoNmu31MM",
  "key23": "2CKYBobVa74Q4d8RZabGZTcLzmMskNGM3qPQSAbPm7WLm7ocXUwV7tbvmibcBmv54rvYLJBGKHmitK7oTtnC8SAK",
  "key24": "67qMhTJbcSzDi2U6BH7AdS4NBWYLxYAsZJKvosZic1kgBYv6R7QKMRsSowFB6d3yWbhP31oGvsD1KH414aBbjZNB",
  "key25": "5pzC61zwRgfEPvh73NyUoUAExwQnrDhcMQ3t7UdwbJZhtGtmXsAYFXtn4j2eZzFfffdVconbWKyBB5yt63iE6Rwk",
  "key26": "2Sfa2FwVfwUrA1VpifLJmX1KMDacj57oA47Re1iSPQNwNM7LpJ6ts1dneq4AkFBswiFpcYkNtQQuEukx48G8b1kq",
  "key27": "28oFkwuEJQESHk8vL4gX1be84bo2gbBzmBes6LL5Keqpc2CyWfFw5bNKc4ug5mj2qKWFeTRa8iPxJmBtcw3pA9fV",
  "key28": "5t4LSxu4GCqw2Kc6m2ZLoPvRpav54JRM7akSMVMoEVgxKrYquQVDhQLmpkM8syAef3erXQ2TbmhFrSQvy6iT9Yxq",
  "key29": "5wDAMBP4F4vdYerdXRNt56D75fQEywfdpT1UcXG82dUzTWkXvypd9UnQHaX2hbW8WbwFbJk8qZpsBKniyJ5EMX2z",
  "key30": "2ao9P9acG79k1qDg6xC6RCFbsTvjrGQXv3VcmDiGmJuwoFMR7ts9sZUJ2UFtJjLuyuqrDPrQN7DrpH2wtsCCGrtJ",
  "key31": "4B6ZJfsodaSCMXoiDsc6dnBSCMc1sdmD1a4wEJLngBkhUTRWLvnMRmuXx4dcKGmPY4N5E83KZhSMk4gLm39bexPf",
  "key32": "2khBQn7TLHQ3u3fk6i4V8v4eiZVnMbeqNbEsNixcEbeFaoyLXRBUWAq9R36YwJtnYN9JtJVac1GuJAZwDyNMS4mw",
  "key33": "4NftxaxB9oTLuip6CgK9mmgyULwn1fWEPhiSL3c5vLzVL3hAiwYKwJaUyimt8VFT6ZUSZBk6vwkaNhNyfEpKsS4n",
  "key34": "2i8kpNaFwXqhDMKLvVr6wcuG5v7VNdouBEpFjAK2Y4kiL8gRZDX4zVamRHCNhp368d1DF9KYRuNGmo3K5MHk7bC8",
  "key35": "3ucxhkwitsqu8FpoYtr2AX5g61ZrwyWuePXhyFhbWaYEqmeVtW5Zxvaa5MiFTB67rbAYC37ssJJtYKQVnB3oxEom",
  "key36": "qBP2MVPmaLpzasg4E3np69KmbGm9aqRKPLBLtN5Spp43FRk63ydD73LoowCY746MbQ9ZqV2QfpfurK7Qc2fDucR",
  "key37": "4M6YbKJZri7AtcFuYAjrDMojvBUNHnNZjAp8BJjByA6G99K7gHgRYWUCxajNY6xMbbkywhdSHBkMA5VpavFcDxdv",
  "key38": "2GNPeGBbA4D7N299CiGPkjQGxK3NaSvyuEJK7LGm6aVQJza9ZLnqFTxnj8jQPL5P8UthFZosEZkQSZNwa1bU47Xv",
  "key39": "mS9KC2ht89swWZe1q3eBZbTNz9nMmLb8jVa5hKLtchtpp6q5VVh93drAiAtHaUFg69qf8SZiCiL5zppcc9f1ubd",
  "key40": "3MzwJaanZAV2pXwyxkfCEAPWisebxZZfW9XuMkWhhDB39ifXtwL1oJ599nEAHgEtLPXa2BTNF8ojS3iKmkxueg2b",
  "key41": "2LqCzyHDtabukSXCFpXQxNQdfzcmvjkemk7h9nvsdJTkhAHpN3BfhXfWgHwL7Q5QJbAVhj2iqaiDx7Sktcg6XpLg"
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
