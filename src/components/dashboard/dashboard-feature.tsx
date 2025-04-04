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
    "32vSKjbCK4nndfXRJWS42PAnEF4vr4nBp81ivuQwrdf4kinkESNuFydVkzyDh56gxJT9sG5QTT4rNhaCqGiqa6j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uq9vtFJj6jpWbxuM7ee9MbR5XwxK9qR1u35HViCcYer74vDedvVxpJg9WFa41i5EaYhK5d6ByMxz7HKFqa3K8GR",
  "key1": "2o4kwudVQX2mBcsWkKodsqpU3oQGz4QzLEdFxZieg7v71KVp3YV1W7XGygD5F9o97cToNtmXDKL5zY7FGx4G5d1Q",
  "key2": "3Y8phoSZ27fGz9qFwqpKL7SwP7jQd8UsUix88TMmggtL9ytzoWBuT1pHdQHR7Kmg8caXoEAFEm2r9BWsTVFemAoN",
  "key3": "4e9ChHFLBopFf3v1JpFNJfHzMYxSHa4Vn646sDMoXytoTgo9CCo88qaveGcXntTvuSyBt3Tmsot18qPhdGfgCjh2",
  "key4": "2yAWytbCjJh1hNhGj5EQvzUrdBfyQz5yqhgdBuKPQsoWdQRaUam3YvMb3rU4WshYszJgLNcYsoVojjZUmrgte9XW",
  "key5": "2gyHWxKhYLBqMUQG4bx69A7L8DCzPfb6a2MWTwk3wBvfaRU95WcgM3RSqu1hBhjrxiRXtDJyrc8BUpySbgoaFZyu",
  "key6": "38gWtG173TTNi6orQ8pGMh5NG3DKNnFwcMEwiGPbECz9xdcYourrzk41JCwGG9jXyntSmj2GpDYF16eUG3iDVj7k",
  "key7": "EmMHhH4e7ubfzRWENYdtzypPzSXyUaLSm66Fi5wrCuMusqnacgp7NWYo941tkHTRXpdJUHUry7g6UE5FNNkJyqZ",
  "key8": "8oc3tuB5wnzRN8hYztq8WuJEBxXYnDtAWXr3sGnee64wKndszqA8F6cwEbP39gnC7qP7CdAhseDu3WTH17xtGLJ",
  "key9": "2i78PLm7dQ2MiVGGE6QoHJBv1DWgUmatRufvx62svvQ7LFqnJek6jVMNPEorAiWhTszwdxjhfdRUygvs46LJciPD",
  "key10": "54hx9Hjs1uHnez28H2cPGpm8MFdowZee6nJCE42noNPb73Qy4bc2x9smsrXPdje8W78FFAhqEVodsFwzEaNaN5iU",
  "key11": "jGpPoVU6dmHvKuHBEDiu6gR7ceN2rfay5VzqwUX1sjADkWqKYGBrkaw1Wby8EdQCkhyXEgC1x7aGtkzNDmbikDk",
  "key12": "32if6utaz1RNYyix36i6igXZkdDDDapP9WRXMDqgtsa1etxbfQnAzhGgwE8f9LLSAzanXAFPF2Kecet6NKRprmAs",
  "key13": "3psLconuSfg5pQSLACxjw4bPrjfDTyoKHTdaHi7GAPQBsZHVXJQTCwkCEjgqxDUvRzPFWAL9NG8uahXEsj8MSCmk",
  "key14": "3nu4hw4ik7MEX1gGB22ZEFPTZzkWFzHzQrh8zGFq8YCvqePAWZyJ8qqbRMVo3kVDEcvX2rHxv5wNPEeShF7TKtTG",
  "key15": "3qT6UtRaFXUkE5nvB7Z6QEorBrernhk3Dy6pKDyhCBPU7Ai1PxRTwpC4cQ8YeVyCZTS1zbmj6971w5j4dZQmcnNn",
  "key16": "5v6UHGZqdhDy75BpJcgNUW8YmhzZEeXivYFeWUVt5TTKLid84dTKkDUy8Nsf6udvuaF79EcMEce2jPF16iQBunQJ",
  "key17": "3f4rywEVUzLkTW9zLNrtiaQGUxP9Hms8FWRq6Jd8uaMityNHW96wxGzKfc6FvDJZy6oc9RuuJinxM7Vcgn4jQjRx",
  "key18": "4ehMrMbLqgpAh8STsPxXshFTZDo9ka2H1zXRwFej2CSzJT8qdb6fbUb82S4YPeQTLResVep7oNbmfV8YdyBZvdCh",
  "key19": "3Y1ciJCBscRznntGUwnXfWWdKRh7aYjuvCnhiGHU4tNThqSMuxWfKRNH9p3p4et9jGMe1pMfvYnhGsrxLPy2KkdW",
  "key20": "5eCGxNNHT9uT8rv2GzaxsPTWY2RpzTseE2CD7ijacywzM1eWayoekRacNdZ6ePxp4MYZT1523HgQR5dJoWTHHDhK",
  "key21": "62ima7MKZ5Eeh4kzTNwct4EGXdeFKVk3Cx7gK3vXZxCgvEbo3iu1Z5G9cN8zeRvsSkkaBBgyYz5SV6rAbTQhnfhA",
  "key22": "5Wjz9uqY9NaHTTNUvXPPYVZzaTzx6n3MS6fProghV2XpgUPkjCJmYixwp5f1GoYDJPAeWSAePvkZKbCj2B7fxvT6",
  "key23": "5G3BtxTHcBWctCCGzpuRX5iYKCNmkAWBcetmrAixsx8hT31ye2MRe1tSg3dSmHSNuHSczsZczyhuo3mn6ygeaHjX",
  "key24": "2eMsYC8GKacDZR4HMvyfa7V57BD8uDadEDRTJZh9ikn6Xrk2wcqrPjerTPTbFde96pTNf1wNGjNCLF5ZACwqMifo",
  "key25": "3bHnNJCJA1ki8w6HXnNXcHPkhzvhLiau2NLCPF1Fq9kbXbA4d4DXm1HxQ5TA3qyixHPHyTKdkojRkRiVrAsyzbEn",
  "key26": "2kfRzqpzr4btznupJzcuJFPSLp6ZWrEWyqZP7dbLQw1CxJrSwepiK9vHka4TZcHv1Mht5kAqRTQRThuUwiZGYt4c",
  "key27": "3e7L4XTWSWsvwyriX8VBRGmT2eCLaJtJkVqRFkEcfKsXmKMHw5pg2opFMt8kPDJnZR9wY1VPffDuai9CnjnooVZT",
  "key28": "4pVkFiURqF1gHDf96s66x298jRShGt4qU6wZU3xrnukwtSTJDqdaX7G7kNFXBTPht1iqrYCKFdUzmLLFEupXTsY4",
  "key29": "vcof8ps8NMYGGmLdv68ZL6zKz8ikbMzPZedPtNX4UprNtQcTeGJ7yJwkjwL5fJEpfzU7vP6D3KV4oEFiZqSSiYN",
  "key30": "3DhA41gtH8U6eYRwfLN7YhzjigNeQFjJd66zwf2FRUEaadUv3H3AnmaUStmfJhhwK2aFHAmqewK5PsLSYZXowwot",
  "key31": "3jUbbgB5tt9shZ3LhhWaUoHSj31ahqgbRVqvqfWZETLW6ZL6dcDZNcTtkqoVmrsrygzBoRyX5xa865wNzexn4Hfk",
  "key32": "3XMgJ75ShDmA9VBnBgLPGYdsAsYeG4Fbd3yAN7empRJk5Vi9BGeJS7nSTqC9xwUQtrGyJNvyuKP1dbPzBzjdQjjk",
  "key33": "5UiLiDTXYvPGKHMqgf7rdTB6MmiB9BM3A8E5jdgc9q4Ac8ba3uyXWPDngEvsd1k3DWbBL6xXDi5qt6oAE6BPBKzD",
  "key34": "QybXL6Nd9F4wp8LA6L19vpxfT4qLrd2z3tdTu4wekZB3ghm9JTtDx6gCQ5imfcAQbWrsdD7WsbhLgrh6KPTxzAV",
  "key35": "25ByfLBSVSyVNTbR3h72wzNqBkgxU8r8b8riTyHVEU2R4jG8DcHLJXbm8nEDYnnzrao1NynoTAfQVpPKQxqMNVck",
  "key36": "3rgm5UHHYz2mkXNJDrRC2ZH4oNTAY2C1YNWoVCaapn3rKBs1PDE9wPbzoPzynzFgHjcjRrymVYBy1z6RMwLu7hYN",
  "key37": "3TSyWPXG7G4V2Xq6LQxDJ5T7qntmAyUNz9n1yQ1iBN5mm9y2gr3ntKfSM8p7FH6fHgeZnA8SsCjb7VBy68KLnQfa",
  "key38": "GnpAeXkRiTbQMcH6pkHUrk7mQxcKkWnbJ7HE5fMALtmtHUiKHvtQeA7jx9dzarbyFSpURNsAMqvA3mBekJdDRmN",
  "key39": "3onTHPz3HNpDH5Gfu9yee4WFKMCgZm14ThuEfQ91Jhf1U6Va2Gu3vwXZdbWstUGC1yHmNCrKHs1tLGsFKh44jKHM",
  "key40": "4pPNqjjkGdaVHG8KaFPa7gvqePfHGbTLUCFKpf7pEGS3NSMMhJC4gyVZ7Kc4FCbHHBK5zNRVvJG7CZxUbjdeotu5",
  "key41": "UKyGTDjgAhqnScgbBB8ga8swUmdE2bFkrZot48Jsty96RwZbHi826ispGEmwZCi6QLoc1fm4gMR8DJJcd9BBM2Q",
  "key42": "2ZubD8PfXvTxSGCjekyBL6awu3wbacNiwfgpbrhyhJt7FhaK7ZbqX96mGoRx4jKmb9tu5rQPmWRWXL2wdpVZiTE9",
  "key43": "33ntgxcdt3SMYZ7jnpaLRBBzt8GTG4HW169Ds6giEQGWKLAz8uMpS9N8JxYXov8d5kjHn6HLbdoZqc9DuVGmoCZY",
  "key44": "2Y1r8YVuWNP1HkrmbB3ZWAWCaFWSFoBce15pTepAtXb2CiCHHAsnZncNaDk1Rf1QYHtaHzeiubTawoG5Ug1oJNHi",
  "key45": "4hHWnFy3XRZJJkDGbgzC8dkXLMPUw3LZpVpG9jVGKSWrLH1Fdnk9kvDfMKSavaCV5eXT78WPZp7gE2Wj7b9XjaFS",
  "key46": "5t3EHnvmKLqU65tK9ydycbE63c6tHMrwkw5HeoUpL9cNfS9ngRFA53tSsvjCfHPyJwYZwhMaD8SaJYWokt7iSqW6",
  "key47": "vJDk8z2m7nGgG5vTEvvywV2L2bCbrEcrAPLbsDiDooQWDmuZDtfPBcGDx8wEUDCCq7fPmw1jvxxLQCgqsEWeci7",
  "key48": "39bstCjsCTSbYrYJuQsCfqkyQMvNeccWwUMHmoYawF68gKTsNaqfzxXyKFfVoMDDfgg6tLk9SYh9NWb5BJmSWr2B",
  "key49": "4b8yHBAjb5x4ZxsPdecjyUX6JyhnFMamTnD2ojApHrWSnR3f918EJj23maV1D4yFBemDEZ2mS8zDm8n53aPBSwNZ"
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
