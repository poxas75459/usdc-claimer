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
    "426tFQ9tKJX7bm8EvWdF7EU9G5LUxGCeYhaLgiMjKvkHJTtC8waJoswB6R31ZgRh4VEBRQY7KPvfRmGidAo8evko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMpE3oK7GiqY1Zmh55yfobazDxgFVP5YGyNd5F7hsis2r5PPe2bA7nRWbJm3TDXRJrcx55RKZAjjnyMpoLmsopp",
  "key1": "4Vu8qkTp4oisZ2dmZQaU3pkThELK5pzy8C5aogfbMZTcia2kBH14j4nseG8t6BrK1zLVNnTvuM1EZc8oKqwo2yw5",
  "key2": "2tcYHnEFLjMZTT3DSdze5w4oH43BanTB4q6zdRxyJNoG2cSQ3hm9fvmXuBLgg6J7hxaheWKE7RXudPvh3pThCGAM",
  "key3": "3yKtk9wuWk3rzhru7sWdvB2f9M7JtJ4CfJfraTpmnSRST16bYueGxiV4ZJdZkPLE1Kbk25t8RewRiXfUMcsKFmzT",
  "key4": "3eQ5Azw84XKqDpnM925NRnGuQmwnChxPmEhPqZJhSxnecdLPZjDFSyHoWSBS422HQUncrUEGLcZFipW8eAU1U1i3",
  "key5": "3MabLnxpm2JCU4sxBkcndQAYhTebAGimvHiJPFUiNfgHTA7J9reYF1qGT7gH1bNArSVa55jP84r7kma5kZec5mNV",
  "key6": "4TTtgYDJSsjLUtuVQfFj8WD17MAabJw1LSgkch8obP3aLguumF1NbiDXFXzDHCgYdSCrdSky14ofxhQ16VRyywHE",
  "key7": "3JwSGjzCbEWKLXsFcviFQsHj2QzFW3oe6HZpgTkp63ieKjt1T4PzoccbtQm3jenc2Cuezd5jTVTWBUAoJEvar36V",
  "key8": "mzztqmdXsLnoYWVWdTQYS6Lv1nX3qEmmtahB76BQUA9WPrjARhTkRZCPq6AS9bzv1HDUEKKekxvCLKknLoLMY4L",
  "key9": "4mSxuyEyDmDMS5zRBfLPeNodws7rP9Cu1ksCbG4UZFw6KvzPmkYakT64JKz5watzG2GnsyQrnGCJ32NV5SmTgqGT",
  "key10": "51rD36ZhcAFdXEEqGi1greRC8n4b29XAvYRqcBqsCrFp8ZvcipGBrRWB4NWt3ak7212LLHUtm2eEwyRzfJYJgzpV",
  "key11": "ReJbY8WuYnKuWUvWuFWirRWnScFpHZqn1TAKEgdNLPUHJE4yJAHKvCxn2pjVmt8rJyD5vbdt7ZeJNUMwPjRiLZV",
  "key12": "dpLpDN91QHpvMrxvKRVN4evJGHAFW792XFxPsawMSoRzX4Rh7Kk4szg7soQunYHm7iDhKdtt2mYJChvUz5hChrc",
  "key13": "4AQYX977eAPySQTd7tRDmrRzQiV3Vhn6tZjG3PTjp1W6cBQzv1xLDfXDY857qpAyPkPNVq8SqZ1vc4N4PRJ4S6TY",
  "key14": "G8vHc1cits4frzB55Hs5Svnk95uwJJyhreiZCYtJS4PLxJFFQX1opYWr3yyACSF269ibMKaunwe6aZs3zPwYJw5",
  "key15": "5M6jUkpeWno1sPbYipcLE5Z7WTAgHXGda8wZ6a2Kp3t14BCtSnM5r7zKn4TVWdCnzi5HcGVb5cxuwePsgfheia6H",
  "key16": "5iaLBHKwK62tCjDCRQRbAaQQhfSjQx4wQD5pmribsqd4Sr1Rfzf7J92y5qSBzdRoGEqsFNLAGKJU8kpFQXU6RnKJ",
  "key17": "553X8ro2uf9XPFCamzbtTdGGfX7gDLLugmWqz1zjuyBSPf8gCa9wDW39hZuH8EKSz54VsJxvijLF4NyX9o8WfmtF",
  "key18": "22sXLoNajcYFYFJurb7hovGw9P7TAMcLJbh6dXukP7JJpXDCgRsaQQrNXnzMG6tLcYpWKF8RYXwTWZQjwfSDXRXg",
  "key19": "28nYLJZ28tX8L3YeDdwrz8DVwZqJpv2fUMm3JhZFn6vsR3QDYaX36sqQzgsADhuPKRFVALVtQkCKygvdqgmzNiPw",
  "key20": "5HE8Mah9AdebGrPPqczoXGT87JRfUn1v72dGnnYewHPZ1n1arTcGQoh81AZDDJANoDsZ9ovG3RbyYPZwXjqpH4oQ",
  "key21": "5Pp3jJQyXo1AjKQTwaaPMaQiu9P6JouHSMycmuTKTvLV4dcF1YPB2Q8ci64GYAJJgHKyWpADLkkx3vcipyy2csJ",
  "key22": "52nAxh8rYR2ynBoBwM6mJbkqGDeivuxXHwXnpkSQDgnQhhiWpt7XLqRx5LxQD7PKLEUAtVWstiYk8oKWqUmcWD2X",
  "key23": "2nSFSF6PyiP9mZ9dnC1x3ov6F9N6qXY53WLzD8ZnQWqs7kMS16yCShrk2pEmNX1ZKGtBxpfonwWTnWYeQfGSgax2",
  "key24": "5B9CKqPbSyakBvFBMF7gLaS6AQiXoh7hCQnkAU4TzgzaEfMKdci1W9fSd9bncmxgTqdC2XX46BnUs8d9zcanHMsy",
  "key25": "3tA8Y183iB5MT7dv91BriBAKPLYBvNaSB8A9625t7st7ThwJWgCqji3MxRDtTVGr6eRB5dBzkBEE9WbQqNaZA1yN",
  "key26": "4YR7K7tqeUbvwFpyQcBecFoAmhtz29zmzsVdrHeM3158J2MtdVhFnAoiczbBiZPSiJzKRetbmpALQr9jC6wtJLyi",
  "key27": "bFQt9M8tHF6Z78dMJGrrfg8R2yQRLJUcXHXqG2B5yByqn24tPDX2i3FQCyDN6Mn3v9LbK1WzTSdmR5KRfmTpU26",
  "key28": "3ug7pbWHqUa85YZ53j1o9msQon5GwqsAcQHGgxWGbEqBSAKLt1Fvk2oLHQzPBBgH1cwEaRwZJDYa7BBemQLGCtDb",
  "key29": "43DmoWT5mjzVBtK19xwgF9991xuYcQpKRFWa82TiKVhWSQUJns3RufEmUWS6Q7cVNYF99TADzhoCGwSbmu6fUABh",
  "key30": "eZTUE2mCpoHyWx9FgBuRa6RGLEzYgNczsQZFMYrMzksaVZepVcbxY3LSmdMgh6FAZR7pCWMGG3rBd2PaWq1Ptmf",
  "key31": "393zUnzSUKq3YmEDp7QPUeqhgEC7pETpYVSsRGoHqiS6WHVidMxGscTkXNFgKG4cCiHCXAiD88jxtzHc5mB6WXbZ",
  "key32": "2xRFPoLUfTCKJkgzC5uxfkMri1CS1mPCbEWHnsG2NLFiMMDWBqpxw92VvPaDkJHrpvtez1M6WU8uwNPdv3jCsjN2",
  "key33": "2vZNR1ribHVjuDNefCRL2NZf9LepssKaTCUwVowBWGrsmpX4KEBSPC8sJKb7cXmFiLCP3ibo5AoH9VzY9YqvjvRS",
  "key34": "51faPp4qn83NTXffqa5ArMZTy5JytNe3h19Wv3JYZGnQEbWs2eaHVPG6TXBAHnovSrLCNuCGa2a85faKbgzUcuyB",
  "key35": "53qahdq82zMmovrTxTbjDYdmMzoKRkgPg3DGJd3q8fnbUtYdXujJbuLpwAWhdmrUFwQJdnLBAAefmkvgqvxokCEH",
  "key36": "2vMWHiXdrAgAFk9JVzkGNjdvJjqxZuNUqHLHoCmVmACt7Gemm1uBW3FiQ5PaCgKsm2YWbfAfmK2RrYr7hT4bcVph",
  "key37": "2ZpmL5Aby6ncLTA3j14DGGAP1cXtaBf6XdaDbguMj4tUr1UTdRDzoMzrzTPj8WKHaiuAbU9DGWrmDY9zhbmax4YK",
  "key38": "5Aeoj36BfMQx2FssttkRzFjDGtfn5uKoBL2KWEkuWBQE1V1UHHYJ6uUbTPzY55GeRnZFJAiWYV9SmMDJCKzUY5Yp"
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
