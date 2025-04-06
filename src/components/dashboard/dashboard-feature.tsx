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
    "cdRVoeS6j7KNjRATPE6o4YrMWFFPrx5FpkzrHNfRN5QtNwb1DXhc9R6xqXxATEHXLHtgasDHFvyRDHJoBafmuqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oGk6nBQrXVnpDgitJ1JRxtNP5Q1cHJ3RqfA3pAT6WDDbt1LZiEaxHed315ekfzXmqMvLnTEhUgyD3mCCkgX1Rt",
  "key1": "pnUspQG46WeNkotReqZobko4eqhqaZRNjqNgj7HPoA67MB2vFQFaLvn4Gki3XfQng88bcbf1uq26GwX8NL19XHq",
  "key2": "4hCi33BgiBrCFeMELRoi8MjoV7Lfy5mTsgePWFBZ5J1v69EH5TaZwbDBT2yF4HxnEFab26f3b565kDvnoV29h9ZR",
  "key3": "ZB5tmqmSSWS1Pi1DCDtDNsApp41wiab8ost15nBd6YctNpa2NRP26i9Qi3FQQmtnMJNufXXR292R7v8pUZwsyFz",
  "key4": "gRGa8KisCW52FbStNGkqCBv5ivKXtVkxnpMGSZAXpGkRk5P8AAfWzgQDdqt6uJhxmLtQ385vHivVwQDPL8gaWJf",
  "key5": "sPdcrmPPuG2o8MoUVYGiHC3vs2Wwt6nqd9txB77ytCuvGUXyeECKmozdBmZ6Sn61EfVWD53q4Zk7F38ZG2zS11o",
  "key6": "3SJBhV64Ah2z8dy5NP2DuHuKen8692jymmyfiJDzfrSg3hjscrpYxbaYg4XWSEkRERUwM1iMhpjdhgZzQNLG4EyK",
  "key7": "5MCo18s3TWAPGchy1S2Jtby3jofqqftRGE9bQnpnj7dkTJfpjjHWF8sRmG1EdShpNwMmt7SDRP3jaxsiUxegy3Cm",
  "key8": "d1j2LRgftj68TZRUdLCPeQUn8WceE28jXLHB7UwaRsvA6ZiijMJA6Q4qRqHPtK4dS2RXrfr29ayNSytup41M63J",
  "key9": "65F6tE6NCXN7o85seLMzZTSLmFwhTFcBVH4M64NweV6LYE3xFR57KmeU2zhj6nbXf1cLM9VHQHWuXEuPxvDZy9e1",
  "key10": "3THTDd3DKRibZUknncKgaXchXnuu6XceEmCw5AsoKUMyFWjLB4unL4yRotmu4LxReGQDV5uQn8DtUTegTGF9WH7D",
  "key11": "4KqEHnYGLidPCfcXxnEasbmu5EJixvVs4bJcMw6b399cdhQWxoQuFhtRJcC1dZZMjRgiATRjnV6Vr87yfgpgrd8f",
  "key12": "4pRfzfSAn814xxwKrnTypesoQo5F251YsKr3EmqKNJqttuKKSPqaXtVLKKKLJiPoGfmwnm9WofccK9RRnVznCpU2",
  "key13": "3b5c4BN4TSHW1KorTxMf3zvutrKWUUAzQHE2TUH1ghGkdHm51Z4iqqW1VWyDnEqS328Yuipj3QxG31jqcyFxyu6Z",
  "key14": "5e5c4YaXEmwAFoE3TezuouBB6mLLYRth2Ts6uerEx4HYQLFrNgPmq3DYn75C7JrsH7VusN2mfazaZ5aJ3XodsoCN",
  "key15": "2JoRqBPZHBcKha52cFm8dxDMiMecAt45vyJ8c94WQL1TLm3C2HGDyK4HPySZgN7VaYCXkHVm5HYs4VFDDmj2eAZs",
  "key16": "5argBVnpXTR65vfPUAMJpCxyJhD2uFVhgJoZpbxysskmV61eMEqSsEkWhUFXxyXybYakR1ftR1enhqukW2ca4An9",
  "key17": "2ZtmR1HV6Eh1vjpWaqWUJ9q55ZiMM6ovr1ogEQTg5Q776CAHZUY5Yb1TbT3a3MAjvNNHwEqYdRrBKGxyXE4m9yfc",
  "key18": "4atkzH7zb5sjRj5Gtc9zHVPRT3oEHNuVNMSXiZMg6sA8QgkMq2TfnG7GrXMvGia2bdCLdTovPp4sHXZ8zimMeC5Q",
  "key19": "2a1ZcBkNzGTVwUaYj6RseAWTSTFFFoW81KsMExaFAsWVtwSyzzRgm1VRxQoGfaFDNbWoruQ1168NJqdgXwWN5YiH",
  "key20": "Gcx1sh4bfJmwPRwJcFFF6288Brt2NjgGfsiptXhuSYpkPbATnFk7r3i7MaKUuu7Eo5gt5HWUPLHvmqzYjoTjbxM",
  "key21": "5RmUL3736TGRWu3DZvgx32EvhecKLk22GDUu7gQgQzHGEFAkNvfXmPLkxgxE7WGocMay73Gbt5kDVZ788BrYaWA",
  "key22": "5LCvuHPbBM6wSNKmrUfwVUybF2sSKLbmyHd7SScZhrwyJCs5Zzu2PAdWYHDg7V9AQUoQUwP6k7anD39jWy4yDr5p",
  "key23": "2oVSkKEuCY9dCQbDHXsyB8YEBAYniDdfJMsf35kegxySBqoMJ3MWmrz6RkdppFrFngzXavXToU1AUrFL14N5D3Tv",
  "key24": "3DZLbxFkg6r6RSy4vhurs6X3gJwhbajFNdf9LDBLRifzFG6g7adyzZwKPgBtn5vZxobTWXaQDiatyH9jgd4LXY9s",
  "key25": "5TFAJgLBASbRBpDZRspD3kEjptv4MZgX5fUGMQbyxi7n23E38gtTREXTWgsyqvGELQtoKjAbopw97AjaZDY6sxwo",
  "key26": "275JrBuSM7jEUPu5aMRPoNrAfUWrs1GxmGd7ZQYT6PFGAfTxbsVbPpxHTQDu6scCXRtBTgmh36jdT9PYLjpvfQai",
  "key27": "3XW5tBXJsbKjACxPmQdAjQVjzkWLwKhRJCn9i73bPWf5UF6Hp6sLMtm5bpEC21fnqjrUCzpcmjybKn2UVGJw3PfE",
  "key28": "66yyVnf9qMrxkQMuwBqhqDheunauPUXj1X6kxtBBfFY8jMVvX1HcbYjJP32WhLgvvVpEUsNDLdQPBtW3Myt1nGXM",
  "key29": "2yUMmJQPiRZkzh8RGnrtL1PBc5WMwwrJwqPbUbkBPNWEeX8YjG1SdWx9bBVKTTUv3cK7KDfnzyDhSWmnc28xD8oj",
  "key30": "mGEhQCWfNcbbDobybciP4A85CMwbDPHs2YoFs8on9rtxG1GZmdpQugr795RsBfzs75RQNSnHRVvJ4ecqVmFtMxD",
  "key31": "GPen54DnVEbRhVcK6Vf5Uai4ju8b9xDRo1om1qNVVcPRnc7zNN1of8WnzXwH9qaNcdUKjTkWzXDCugeEUg5ySZo",
  "key32": "5qXGac8WN97LP5jgX86oAccFRE8WRHGyc1pvvbLxXXnPaGLV2oDRgunLFdmf7gQBReytKqYTxryA8wE8ihMVkv8T",
  "key33": "3tBXY3Z1xCUVHiVH3m2CgXScHQmVtjd3CoagraBn4hHfZMwGKaLTQXNFSfVZCoK4zxZxnffk1Ed5QmEFnmB9Beph",
  "key34": "Dac5K4hGXdVMgQsP5BSiirk9rLG8rRPKUfeHu8iAH4YepEdMrSicV4YBa6KopSfDQgR23vRbdg96eaMHNMLwiqC",
  "key35": "3twxwG4iw8tyYAz39qS898zSjHF9cPA4YPigzrp27KzMtBXTMYZrTvVC5PMgSKzyLATtnGLoBwQzqaycoWefBvgD",
  "key36": "2fXowD3nEknPYmYzxdxC17u1wVdvsdsK8hHoYzVieEqCZxhCNrVYwEqCaosLLKydzWLUU2x39Ct79qFNLs8G3q2U",
  "key37": "e7n7TiNnPxSauRACJLpHSrTNv9Y6wB1pT3mzjprHqAqfigrAbf8xThqiK3wQK6vYLUUN86HaGq5u1zzZSXPaxhD",
  "key38": "3vn5YCM2jds3MneyjLevRqPz7ntZtQ8yNNUYs9n4pBz4LQK1u1Bp8YohqUuWtvA9nP8YQGBd4bjSAVU36RePgesq",
  "key39": "2Nwd6tKkMuQNchTxthMd65bRMAUMyVGCp5Xm3q8XSfwvxVqxsFayPHfPqnkK4b6iFuNXFWDoBRomY968BXSdBh75",
  "key40": "5ZfPya8R1K59nxgdtKvJn6ooM4j4CLUWJAVy3PRScntxKWLXS7Tij9jChnakpDELxvrqUqDBxnLHW1iAszugovTE",
  "key41": "5pm8RsUEGRrQcTTLGjy73x9hpXPjL8nw97NSdWvo2YiKASS9fMomWJyc2RATBgbxzLHTgXtU5zFYX3UGpAwURnpR",
  "key42": "5HZzqABZZe4vL5czcZy2HcxXje8EGWedVjRgzg3NFn1Ln4BbvaVN6WktHy5VRZf3YsCth7bdTBHE928ose7S7pHF",
  "key43": "LkyZuRnQdXtuTieBHr7t7ZZTwooNk3UJggP3VVBpJugmqDYnHsSpyHqoxpTev2vumGfQU4scQ3pe7AyYksmyuXS",
  "key44": "4D3fQUeDKPGjH7z73A1NuP6qL8SxbhsvsXByjo4xUVTtB78byuDyGRSBCaFiNzvyETzzRukqhyLuLb5nHQGVNSVR",
  "key45": "3tH3aNKSrkbchxDx2NTSk2q8mvk5kgyMAG8fdsqS7cUa2K1T4JKHAkd6cvHebSyLiLCBc1mLYXWJPqAAS2YZ39X2",
  "key46": "283UkNTp7EAkuTU9nb3LBm8W4Rc7mXqJcPPU5LyvNjw2pUzYXgjvMKH6hejgmaNcrNug6akccmy9QwcqUqfujHNE",
  "key47": "5JpkFnH9femQ65ox3j7GNaGqFkvPa1sjE2sKW93gkzizFQzjk19LZrVRwR7N579j6k9migBkQ3ZGG6G83hWCeujV"
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
