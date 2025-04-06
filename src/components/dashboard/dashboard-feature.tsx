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
    "2bNcvbQwCpPaktg7PoJEVoPqPTpNXGPWsxcr3kpAKL91iHDUBiJsXTCXz8wFU84818vRPXtaecPhQXnwHRFoUPNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMHpWgENFiU5aK5Fiia7Uqd7HQCCA8riQPdToG8T9MFPsMx1Wp7YiVvNcgqSkkVFH7LEUdRnvwDTigaELycjaza",
  "key1": "2TG2F5RXBfstcqXWReNyB7o6YasYUg8j4XtcHMZrMVKGcRsiNc3Fz8dZVDAqSoRUthrivfwmo1SVB5Jrkz96ECwE",
  "key2": "q2ZfmNFJBuSTqPaD8ZgtryLBDzsVKv9jps669MWzXWW8Bw7RR8Xc34ZLpheRyCk5FQYcQu66pk8Fv8Sh929eY9G",
  "key3": "3yi7HkASdEt6mwEAU7PTwZNQdEhXmWNzH9iT2JixFBkWqFCMELAd7pHgny4cHKopT8HjLkuhP2AKsvBi8NApnGf7",
  "key4": "322fPUkkXNuDUSmoawXynTW1y5hbLu88XSzc9LMiZUNidtZBqxwjWgGS5uzzBWWRvok4DUSHJg2xtyvzi2WtYGvQ",
  "key5": "cDrsdTDttZDUVeZxHFeU1Fkh6SsHib6eNavMMGX1GEF1CvpeBA8YARYQ8A392jb7HmvyAZVmdrwyE5XywYMg25a",
  "key6": "VSD4bk5SKGP4uvH7on7bzev4pa7YauXuJgvtY4eUQW9uwy8wKJh292MWMknhWvJTNVjpkxW9NyfsoBCP4VSbt35",
  "key7": "29H93jJgSLBH24jmu8fNUY2T1ag6goyGJ2mZoLwEtcoyrHkRss6KH6S8YDTQ5vwNrogdUzHRkwb9tFbbsfvtyq73",
  "key8": "4JwLpyuiHR1hWWBakjo8MFhEjR3BTDkuHGhxVqUtDpK1rTx67HLK4EdRh6fzMcx8VM2A7cRZ9p4aEVNBnNow37fg",
  "key9": "529gWSejX81TJXuNWoqWPWWkMdcbmcFQgXf8SbyxyC3GHGnbHwJ2aUvW7qpZvJrxVgJn4pvrd8G1j94VAFd7LEpp",
  "key10": "2M2iD9eAtnf2QuUvzERiCK5dF8igMcvsGCoxfCpsN5NKRgzrZS8cKca2FB7T2bt4tvBjo5co7ntRzgv5hX9Fa8Mx",
  "key11": "MvksaD899wipnPsXNnyvXviXzngjqY9y8kkpYmickeXiMe3mRD1Fp1xPgB7m5mgc3uenUkpeZZv9Fkk5i1zGFyF",
  "key12": "TaQc34mHjqLY4KQrYjTMvAZtn5XLjnyzbvNG6VjXdtuMLuLotZxpLRbaoZ6rkHb3B5zrrhrDUmmt6y4Q7mf6bkm",
  "key13": "3u5uFJZo6JtfGm6S3kThANN2dVc6auNbpgFXPNC4w1kVidfHMTZ23mWnXBEKMsh3zxzRQJqgLmQtstZAUzZj49Z7",
  "key14": "3EEL59JDDPAxv5NMa3gTA3MJZjM9eTU6iRWVLH52uTnDDikcpKm7YVJ29Ycm1tocGCzyYNXLAp31CF31xaATRjra",
  "key15": "3kHavVgHxApDg1qDaUh6do1keFByU5VVXhkz78uurWuUTDC8ghCDX4e4VWkPVXUfBFvKmiZpPqHNvwwB7RweXuWe",
  "key16": "2ER1E8c5ru8x5fBhxzzZSZMdoyy6PYfekmS6NSYTJvKJEvn68qrcmhZo3dSVnFsoRsPN5Ctc42jfGCUf1oe55jQN",
  "key17": "3XRZ9SWMV9oQs3YMy3UAM7RdX3srVCU9CYHZVtTbJUM2fVNc5btLKdVnsXKEYaVBic84Jep2QgSRd2fdLE7DRxV8",
  "key18": "4d5Sv6r3gADJmNabeRziQ34WwbfTNZpLnHm9GhDvGU5pszqxom8VkfMvJAqcoRRF7bQMLp2XKDDvfENuoqLSjZdj",
  "key19": "3HKPWiNPmPxy3JQGVzxBNrrL29DTaKeyWAPPDF6xMrAB9ejupjKRp2g1kRTDZbcKXZdgpFeQPwaEF9frXXr1oyQ8",
  "key20": "VoSSwXtR5i8irkaagytpucZYDiLethvrDfFN2bNWfRJzJhsToBEFW8r5ib9EiC1TZYbCWJ2uuJ6cG9B866Bh8Ze",
  "key21": "5iSa4UAdZ2N6ouponooH4V5uh4o9h4VfdAsmvTs2HmtUyHzubzaacCxYho5MTjoDm3zrQSvGnS916deJhV986fty",
  "key22": "3Y8zri1eZZ4RS8rkuJ5Y718Xv2UU97jGsVxeACFXGJPDkjAwVdEFeCZXUaiLjTmdG67g7jEB8FAjQtsjBMB6JTqG",
  "key23": "5oiSQfEt9zCDDhyekFc9G1qwvPMQswaivigFAykUeXs1Yo8U6wjJNRNUaUAKbEp9Eb7gmPEMm8N616YuZLeLKvNw",
  "key24": "yaxske47EdayNSwK6reg3jHgSkoiP4fjc4Hfgn2MtrdP93baUEyqL2oMvbs9PRXnA5TEBs2KAJn7Nq52tXD8DLn",
  "key25": "2SQWxbaQfEKXA1h4b9ftMkuRNc6YbsSGwpfJyGEV9NGyX4tkHj1aaiYGxsst51AaNjLZPQj2K9C4Wbfh4xNZcyNd",
  "key26": "deE78o398BYa5BR5dzt31jSZRiy4Jmdcvq1misAxMQfSL5kU6EzvibW5n23qRi8cgqXWt4TuWeAqaDC3WQL7PzT",
  "key27": "3tYLpJR1Wpsha9FBQ59TMRgMTCQb3EwRR7jARCjuRJGL3AHegr8BdzSG3ngp8kvQr1jscGFu7KnMopU6DmS2RHuw",
  "key28": "36v5pApCX92NQrT7ETQ2NLHGpwyDbCG4tZ6pif775dyC48GMgodGTftjfrXbMREvZNpW7pFhPuSRSyANAVRjsn9u",
  "key29": "2SdmwusKmrwLFfRBVeq7447YBKQN59eqRnSMAxwaxtH6Y6mb4eX2EpzGoANEK6pEBFFoZvw26psAZ9owZmHWTsmY",
  "key30": "5ZeV4jHPfo3gaNWq3j3j2gH2LppGVXRiLjx3TjD77ThriYkGVcpBEqVALGGGqEm3CC69BoBuPp4h6pY5BU9GgazP"
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
