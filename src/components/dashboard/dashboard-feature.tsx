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
    "26EDgBWPF2FNG3JzNCMo1EchZHoE6Q9VeiohiRBwBXV1tPZUv2qxAQe31WHgGQkKyFbYQdYzzVoUcPJ2ZXJpwqPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmuUfpoe4WTGYyqHtjb2LTMjjDZXpMiFrN7oPkRAQ3321cWmU22kvgj2LCR3onwBFs4KurUWsdmYUXgmxz4H8Br",
  "key1": "3zLoqLRbBS4PupCppUAJNFrAsvxg7fUW4FfhGwnNxxciojzZ8s2uQR3CihM7TDmnpVbaTakY286435NtzeYr2jc9",
  "key2": "29iRfubcET9VKh4bu7iozSJHKCrYnrE2yHXEZvfbvsZxCAb8hKCEoo8sFcyuqhscpGtsi3drjNfCEpSxj1bpEZDA",
  "key3": "yrBjhfaT8N3zPN3JsG1rMqFPJZYL4jnGQN4aCpKnd26STWK4K1fybxNa4V9DQ3K7ejDpnS5nHCSCXbTmtLLgUYf",
  "key4": "43XgBUimK5VtuKqxk8MMnQM9AVkC71DckoZVpocsSDZVb5JLPBBJrAbevu2KaUzf1j4AJDnbfvKF5QN5WB8h3Mum",
  "key5": "2onq4PhYaC9AvWAdibW5dK4pY2BFq1QYGkJu5MP4KqChcoR3x3TY4sGyuPQjPyifEEuxQa91HHBHgVPqJZNYXmG7",
  "key6": "5yeVSh3nMBebt94oG3X8nhuw5q4qUmWqyaLeZk1BczKobQjTnSrbKMzRf1VifL4jse89BN8kHLegxzQAsirkWJrP",
  "key7": "2ws9zrPizsFLr5CUCRwFTam3D3DEBK2Qa5YhXSqhfNEtipkCFkwGJKWxFm9Rzsb6TJPrJbe6XVSiTH18av8CBd1W",
  "key8": "Vyn16LjU63axzfbhvBLsnNZvdKh6tU8Qib6DybkqH1CadP7huvdVppP15yQZ2W5VR4jnNxRW4Eo8KjXNsYWMSxy",
  "key9": "5j3XdTEcsjjN9Xkjh8WGdaKWygd8d4oZvojf3EVDSSezMXswCDRT5cpBa3EJxpEHjJCEpkkmKgeGcY6RPyiKMwxT",
  "key10": "5LCMsspRMJfUEVDgy3P6LasQafpdfqLMGKxdjHsYTW5eixGrWmXT4oe3RWXKeypV94J3R4qc9mmTvxMMrBGrzFok",
  "key11": "2vedNHbv3yWoBSu1NVMUz5vGqrsYgG91sHSHpPyZ3GXZNxmeuznPLS2gDXo9UCynN35NXTLt338SnRwyc1YFmyz9",
  "key12": "5MYZ14uBMiNuLFpEGr8z6jkqgfWE9meJJUGCtYPqHgLXuqokcLFd3jKvavkPpooU1jkqDF32HZw78qQ7LrGrWiEA",
  "key13": "jP7rFxeM2kLcoJ4R7xATRDXR4EmJZjvU8bFBy1CJh4fFHszLgNnCzx8W74HvMTCScSqMw8ugSBULrrGDJpbSqeJ",
  "key14": "3N1nVx4A3Vn9eEBUrGhspRJUK8RXdhzsvdoD1NAZYEhquZLzMpuXm6NbrNiLk91T3x92wp9eEwhyaY9C2pJjME9o",
  "key15": "37s8QoRi4M6cFvXHXgec1yjs3Zd45kuBwhjzih4PL8mf6857Gbg299juZoqsq4rZZCvaJfcfhDQJNx7NYNjLTNwB",
  "key16": "5KuLLEAL8Rmz9khGPX7wvNdTz9aHP6XMG63SQnQn98V3Kit8dBf1GKN1RhacMyozYmYmZHwGcmi5hGEg2gzm1SUg",
  "key17": "3yu4eqN1RraARS8MQuoyWtEgNMsSQT6zgcxfdo5PfKMNASHL8i19WYhZwEDZPyHvFmYVGe6MBYkLqNtc5uMxzta4",
  "key18": "jhhBC2dCUVyUrZm11mt3jScX69Xqsyvw3iccEy4Kmv2dVYDoKpAFP1NGmyjebmesokgTWYTpUZPowwAfzsaCwEc",
  "key19": "4kwETJVMs43X4uF9iy9HjCaborcpLKPMbubZycob9L6PiXhpT5agBBxgcrvywzf4fZ27DPySKuFgyEckiFR5WJ9j",
  "key20": "2QNm5sT25FbnEWHYFRzuCRBhhf1M7mtaeVvSaXrYpyKSQwFnqAD4gvqvQR1k4md5r8BhdmbCzbN2MFEEuPJgH6Aq",
  "key21": "4WfzaCMbvBZ43AwRc4N36MtrnQjEvXkYXwUPHeGdiqDUpKz3YDvBTpYJyHM6H1NniskMErdJwDNeFjUbAjXkSCns",
  "key22": "imMcGpY9txiScZsa9W6rh3GFidvn5TqnHb9CPxapVgH693GxY8iytQKRkaWxgC5zHZAG1FTtQ6hFq2kQNmSUNTd",
  "key23": "548yfieXCJkAUWCBs3QmV4ySpNSyb3P84X8MBm1CpHN6a2mCSfX537vyhVGWrz9XkdXmrzn9VFizb4Wvzns1hSUg",
  "key24": "34DsZc5JUdo2VukGLTmLmVNt8v78BdLFGMuUttmJ1mxtepMYBXLxiGCY5U6H3MCS7ZNNXtytNtMMmpdsGEfKSJxm",
  "key25": "wSmyUs8n591PZdgiWpyd1PHxESQmdv454zhSUMBkt16rSZHHruFPAGMsQtXQJNeVLBM1hJfDUuCLSVWz9ttPwAq",
  "key26": "AN4qzjTX5hgbPsSSMTujyb8m6gF2fCo4rfxfZfqe1wHBd2Mtomca5E5BhDvGazZJd7ya44BuRD7r3ybAbtx2iD7",
  "key27": "4xftF6tDhnB51u3X9WECX6DhH3KFPLVm2994koVfApgJgnZwkhnRugoRJ35xpsDiptvd4osev3m2icJ1TrRYiGQX",
  "key28": "3dzcAgHdskBpEjETWsLvBCZCg4qjAvd3xvUFmHPFFY3gHpkuhe4uNnv8jT4mgicxwUxFPgp8kSnfFwCQGrGkgvTc",
  "key29": "5KgYJPjndvXQGjGXPKgGCAwLezpxyocLBnvXr33coeADwLuTJ7HDq2cCDTKge9kqSvbtPNbcDgGiYXdXKgCJeLNV",
  "key30": "4ag8wf6iEoTXrK3WzaF6Y3EMS873MWkKxoSg4nxK3iFWfirQrv4i9jHQmmqfRVtmY9sWUrPnnMAD1duJvXZzCvGQ",
  "key31": "3JzrFaGCi4fiaGw4wTeuvK1Vqxyn9LQgxz7CKmVGYJuMjdQgYkc92bKKTDaHTfrFAmaejNdqYTLqRuyWJ6kwWzDa",
  "key32": "2ruHWB1JtrqvLWLWLA4FHhcCFf6Jp7WRDGVB769ZTHLMiRWeSaZBPVWL2H4ox4YU2epbHPiNcavsZ3wK2zwxyeJH",
  "key33": "3RNXXhwmzQtLGzESQQA3MVCPgDpiMBzVmkgkuQ6U3HJMS2Tgj6JHGNaop3gk5T6M2eoyuUp93t7MUry3wWYqi9tt",
  "key34": "2LYL2zXLPyaXDnhwN13D6ZJGtVczcHA7H3bdyxq4Ka1TPYkmDxPARWq7ZtJ3ZHn18dmhR9x4bYua1sCUwXsRKdiJ",
  "key35": "3GsdeHFKzuumXbSKRcXJUH9UGyTbgjL2WDWkZHHT93dBVv2XwGB94eAarordzxm9g336CKYbVn6scec6hvw1GTwH",
  "key36": "3J2TZ6JAxV6asreBjFxh9HHhmiwvDKFjRVzjrQbPnBYizp25yEXUyjGMLSGfxXYimd4RQGFM2Dv8Ew9Axvbqegw8",
  "key37": "5gaTLHWkRBuE8aggBhco2gSDM84CU9K98mmddNPnvZwvbokwy13zFpBdsMdYvAfEXb5GBDyMMNAUoqqpSKt5W356"
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
