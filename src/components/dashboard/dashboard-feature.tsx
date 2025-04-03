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
    "4ETCaNr4FYA4FwaGZLty7Ca129FghyeGpQktL4YkbLe5MK5CxBiuzx2GQwEcQ9E4qZyTBErLeihjZCdsxNVTPjiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnpSRsWZyYJuT36M9oTLJ9Ec79heaP8h6n8hs5TwBo8vBczjXmkmUSv25j9foJJmjxJwhaDWDXYKdv2XsTJ3XqN",
  "key1": "B836hYFazveGU4woAR8bfosKqM3g3NBQCWs3V5Wz72PFhcpmWC1sG8Fh8n8i4dmvFPFEikBpkqNv2JMzNsQvCAZ",
  "key2": "uirvjvG8MKWU7qhH68Sw4hFzfueHCZcEExWodLzxUUHbmoqyTp6s9JNdFCXh6AmqYNEu4qszzXQLEBJMvTmAR52",
  "key3": "5mMZ5fJWkLB98sLrF1dXxXnxK8cie4Ur6b773kTUpuQLG6CMUnccZJ8Fb82rxgpYdEEnxojZGJwetGpmi1Fh2D6i",
  "key4": "446XmaRRDDvxmpy9Dv8rqU2nQXrdApBxCmfdcoeCp6E4iDLNQknYsHdMDgv76ueDj3ARqixezL75C4EqepaqLNrB",
  "key5": "3BhjQdGD9oyWcJhoj5BX1pvG8wrsLcK3CC6ReqgMo9Udash1B3iFj3hMtUAowDZTEhsFjBRjdRp1WQQfTYqMe2zU",
  "key6": "41TJaiwEPMRLdzHRqSigndzjmHMm1txRU8WZbyQpdXXb9qQtkv4rfk48gtuxpEC5QyaaFB5f7F1Y72XZH5a1zKRs",
  "key7": "Cziyz7k7xZX86P1uMgdy5tUPCJxgaPwF9TYLSUDDnC6sVx4MJji36SwUv6dmLjnMexACnDCbor7F6T1FJjq8kjm",
  "key8": "3N2XszazGmG9uUgUvWx3kjU2VHxEBRA1FWQNTcPjtZPHfXv8G19258GjFdgrjdAWZYLxeKWA4XVc1hiYLAWwFeDX",
  "key9": "3vZUkCJhnVp1ZDog9EYTkvhZxbDYm2D7M3xSFQGchjg43z9VUpLpbdYj3dQFUAgTZtpn26VHG3GRzrqvjVex5RkC",
  "key10": "5syJuDUztkDBwypTaDKHvZ7A3jyqxbF4GxFViSEzT7ouEhGN9z1c7r3idMKCF3WKFLCbEchZ4BRF8e73t3URSrrP",
  "key11": "568kDqVfREuM2yAvq1jVqUaTphHHPQ6CcVh8DVBVM2VCaqjvjVpemZx9SdMayUf2ZiAJ415d5fjjfo6owd3ipPmk",
  "key12": "2iF2rtmynmWUsZeB93vS5W8RPC7zvm9WM95pZQxMPQ9KSVcfNcr65D6SFiAi6q4g4VwhUM3UNe7LsE7duEScRJgc",
  "key13": "5LPe8kXLoS9oTH5r4tfZZz7a8Da1vYSQ4ipypAHUD9JFbvyuudRpEseKzMuFX81y8JayzJ8ejcHiidaqh9ALFQot",
  "key14": "S4ZXZQhBpd6HkNUYGmeHChQchpkTJPmvPAb1BtiysBCNuQn1ygwAKDsukCwwYVQhpNHRcb15YynTpwgebSAWwZk",
  "key15": "4NcteCzsonNY4GwZ957Ht8ZuVyjq4MTxTj5synH2pZsnXeVzzMijXRKovZVDDpr6NBhTQRdQyJ9VRQhLQFjgBZyW",
  "key16": "4qQfWUHRxGEBiqSqVTKQ9wfpQ7DS9ZK8Q3ggTEJ1iaMnqHvbjL4rtW8aTuivsAPNQqoiq41p6mi6yMyVyf6r6Hc3",
  "key17": "5d3fKrdWm14dtvDVCsHhkih3mrv24J2vcPRSAx9sk6mnDaPY6yzYhFSEQABPo3mbm2RgNmQTdBrdvbs4pJUKdN91",
  "key18": "2Ro1iRVeByERjeURZqU3zUFWGGwe9MJnASiC68jYGFKTXiaGPMAYk9mNd8RNoxvP5kcwWJLwUdTa2oTsWVNwUc2n",
  "key19": "2PXCozsJoKHv9wwiDJb32X23RwryWHqeD941wH6U8yMLxBcj8Es2LjQUBDCbby42shnC3bGdfqiHpBYDrMPW7Reg",
  "key20": "3P9jWDo1y34XZJjARGwufZBxXmiP9cjgUjg6TrFmLnNrWX5QCWKoSvnjym2Ftyp5GYT74Dp4QAfsQK5pHykAZFUW",
  "key21": "2qQgxtRpzT2wU4gGDjYRNtRnRbjEa2HRRC6snZPLk4UmaEWtTkZxbw3rwp7hwKBXzrR6nCYvAURB6EpEf8stcLF2",
  "key22": "2EiTDYprGxwoQc4uZYRnNh2CvBfxqZzWbS6axLBwZyw6kuJ6PSeHMcAjLw13WXU4aD8zoq721b2GGYE8SRUSiyoY",
  "key23": "29Uw1rtHLDWmYcXCCLGmdPn9zbu9UbqjENAPrAg5FK75pSi6MXsp7h5XbCMHJEv5uQNAfgCfemavP1HLje7z3Da7",
  "key24": "ojf8TWEuc6ciC6v6f7ZNhZCUtwCQyu47P6HCpXpvxqoCZJGNyytUszhzbHYy2BSSNgWfjcsDppgerxEzHLKX6zn",
  "key25": "5apr7XgbmvdoSRrNpbsWGohRCxameMcDtZPmtva15q5DNt2cRSnG1FHYu3cDUebrDg4hrb1NgfdwPA3fp8hAcpRt",
  "key26": "3WxbRKnZJHXNXcCoDKQXSrKzpbBDfT7xnPou2KNmas4SzqoPPQ4NqUFjQQBu1kF2YgPnPft6NcV4Aw6Vs4YbEQ69",
  "key27": "4GvWMGW1hZk2x1ASHCCnBHqx7ZXgmwgNWstUKbCTkdqAgTR2yXDL2GvsA1UTenaoGsWqGHCQtKZfAn4w5eyMD955",
  "key28": "2BBZFSJNhyta2oq3ScfjUkNc67JS7JBkUbw9EbR9M2mgrZj4ChkET23NubKD92JV2gCWnUBZaeNC4cJZbQcGYhh3",
  "key29": "5XkQkZcEEQe6u8SPnQPShNeTQqshnJqrJfJLBS3E7j6XfvxTtvx4kwJUBUsLq5X6kMXijW8ykhf9yZuJZTnnTz65",
  "key30": "2zQdg373v1ix56uBHp1tgtCcqBSDLVfFwEX4LCfT9sgFkpPnSHZKf8AJJzTY2CBVepCQemBWGNU7e27DAxJAW3Ms",
  "key31": "4G4eXFUakUSTZbJ3Na8fgXpcFBdLdpNZpMGzF6ea2Yw5B9wiqu7cUGofWAsBFcLDZuUUicXPajmQ4pmrdpPpx987",
  "key32": "37wyAQSp3UYLAHQwLPwuAhHqY6PBwJ6zGgNytsxdGD7JwPzRRTkNVTVBFcdcmbGSPApWZKL7Tffk4hsoPHEsz8CV",
  "key33": "2pSiAfK9w6Bf5PJEYvP5ds116RnnPQUn4aFrE32WNHkHZrS1Jqq4KMGm3LEoCEYBDAVmn6n2MwcwmtSPpom5cF3a",
  "key34": "5j79sxJMboWTp7grKNvruBq8SVs6yngqGAuMSE9shSDFMpCXVXN6HLfY4SWiBQGWvq7hm9ibfo6nwuiiAmLzBvf1",
  "key35": "5F6TJsBkoG5dRntU3x21maFgMoK7SQ49BpMU4P8RGMd262VnYiUV1gxUv8c1nYPtChjVhKZZmW6PT1pZk3TCBn1i",
  "key36": "489QiYBToNmeyy6MhTBiG3XFAZr4WUQCUSBj5725mwWXXVaUG54WEkvgi5ZgW2r172uUehiExz1RKDbRk4ap5T1p",
  "key37": "2GmAoKvTszLrvMq4psgciwNk93yuEZrzV9a6qNNG3QWyFRrghsUuaX23K7WMEfh4grEpYg56AXmjwBr1LkQB1Mz8",
  "key38": "4DX11NB3N7tsEBUwSjw8eHmCNiT5ozMxXtEprZ8PP2Zbj5bYh6QArTXu2JPiyMLn9w9HDRHFCqGJuJTG9LAdHFZW",
  "key39": "34fXEXnPpWdT7GHAr3XybVY4TZhW95X9GTxHxRhPPkcRNS6FChMZbanW43TmQAcP96wJnvs4TrrKEQd49isFpjw3",
  "key40": "4Le56o1rEFf8wV48UwhBQwrJoyvDXqy11uesq8du6WXDumcGX22wPt1x3LLRnZiz5AHVGXr95vB1aHtcKCLuXNTC",
  "key41": "4QzBweyi1quhz55PD5AQh6xt7otNHF99tZh3ctAH9xeNLxDzw21ped5AQ5rcgf3dVkaqZWUfyVeF5Phsg1qexNTo",
  "key42": "4L72pPMZTQaPRPRA9vp4zPUDgRen8v7NT9TJSs31cZtMGYQG81pLXpzbgixaYHW2z1TnxRwGxodp9gAviG8WcHjZ",
  "key43": "23rrdQx3bscQB2kFXXF7Sd6UJmA9f5KuFYPANFPVPfrQUHwPoXGxmfzuKXA36jYSJgx3STCQK7VzM4PPVoD3rDag",
  "key44": "381khMDKqJJFqbnHKV8ecTZXuHcmh1qREWULkyvkHzSHxHBzvzY2oqDAHSCfvtAMCgGrzo23rnxfqxHgoKymLTf3",
  "key45": "3CNTotNooDVGHXca7Yi7w5kE9NX2aajUBKnWCu3o5DyuWo8y2YeMBPFvPnue2z5E1HZbHjhSazoGPTW4MiERFsmj",
  "key46": "4e11Xr9t48vaJM7SqV7FHYNecXMLYeuzqrDKBh79ZV7rgm13JYY3eCx9aMqzDPq8Sqppyb8mV1zSj4ZGEPqJ4d72",
  "key47": "5DrVm86D6YZRpqcsWNMFqhyLedSLjW29XJmUcvefpvGmPKkbaGKsp2bgPawQymFkdxx2CA2uHvuacWpZnH3MVHoC"
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
