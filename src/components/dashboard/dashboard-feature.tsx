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
    "4u9TZjCRQby6PvAK5F7HzKVSwDJoKXYBPZFttHwWJ1UJHYQXbCu9SwzK1f2rxmCGjp8JE6HhwPciad5hBLCfUTeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFJns32LfFeBZSaGPA14v9hB9GGpFm7k6iamCLG8ZtQyCcpySPnD4EWiD8gysbcqREeagZXJtxxprJb9StdSnUT",
  "key1": "4XJNtnDAMK9j68Wue7weGQSEskA9sCGLayKa76oj5kibffGMAUDQzVSQKD8sSHYGo8B91U6WasapLHFNNJQCqDWD",
  "key2": "5PbSK2tQSvzBgG8BX2TgeL4gAhzdTgMyji8Y3VWJkePb2ePSScZ8g3nfDkXZAXqsHovvorGHc1pSpeeJPGQ6zSX",
  "key3": "5mLWzdEPY1xrLij9AAf5GCswoaeKUV5M2QZt7ZvXzHaVUsWjjH6EimrxTWD1LSt91T6bHeYrynWDvJqkdmNwEH9p",
  "key4": "v3xDAM1FMfdYJfjeSQTL8WsBk24XkDarBsbBCzvjW8G9zcQsguuxGABLDa1XGs7CRF4XSH7A8UR7kkWmC4rsEau",
  "key5": "4TD2NRMVBTDHw4fRTRbXHMzrV5563ynMdRiez3wtzkrL8ZKkysqNQDFKoiXX7ofPYqMZdKgxRhPHzwRD3bAYpCir",
  "key6": "5Mfa1RFqCdNyLJ6EnWu2VgzKF4wkDVGvC2dZ1nb6ewQTSpravVBhqrFeunnQ2M1HQMqmeHjNNnU9Y7D4e2X2SzeF",
  "key7": "2TZb7TK8cSgakpJQ85P7BzsdrfBcM4kPRnmTA5Y8XXNBN8cq6ngFnzk1ee3nrug2vedRVebvWnk5GQuFNKdBacAf",
  "key8": "4NQiE7Ka9Vc11E1os2L8YctSXMnS1rohQZCfakAWx5xpGcDyxyEnHjjapBaEGhPFa19Dhsm9jGFVhJetYSBbbmTW",
  "key9": "62MZpv5UjiPGxVBhzu9nnzTcTWohnPoGR1biWYM5n8iPmkJgNPbc1TCq29DcndbEtUSa6zpcPdmQoksJgkYpkKoS",
  "key10": "63KP5aFyWYu9LeuJd4BQfcyaAy1Anan4PvjedQUsykQcowipzRe19j2xqkfx6qwAmmQXSUTcyswKwq41Ko2imqjo",
  "key11": "5yNbbYrtfrCvGrDCNcMJEr5K5nYMNMb2RANN89eNiiokvDqyBXs8vQykSuR8P8Np271pzVXc2ZDNfd9gpTUwpFoW",
  "key12": "5pJVwzS6ecYMsWQaU8rdh3tPauXsx7R8mAAHsBsBe1eQ6zAyypKtkMe6D6924HgWpVpM9AFxGxyeB9rshkRwhbx4",
  "key13": "2K9JVw8FMgQiyUv9hCrhZDwtNJDTekLexyk2pmALpEhQXuvhEKdcEyysJAgcyKSD94PqLCBFono3HfJFfuv1r5JR",
  "key14": "3FP3EedAcu4je1RgwFikrEQpo81GkdRMnSSxHHNyyNZwoZwwpxqyvMmkEnnsFSbLCjdztY8WGUQAzgLRPP4byw6W",
  "key15": "2CFoDyPMXU25DxKzvcw5YeE6hXu2dMYcftKkTESC4g1EWnGTGRqRQmX36ajdvxZGrTSfyCF8dAFtZfmfPEyDKHNP",
  "key16": "5QBvTkkCc6S2pAPh1AxjJWjpPtpK3qkS9e3wwWDgvDi5wb5tXoQFyxoReoZQek8TACcDtvosJ5eT6UYjopcna9PR",
  "key17": "3HQ2CndWFEj9qknkYZrTAjACfBdx4La1XWhVd9oQ9rE5A7z3z1cKkSjYMKpn52X4qokBP5ZuSeadmNnYKA3PHJjJ",
  "key18": "2MmP6uuibRcJ4rW7SFKEqTiAi5nryrsZpFSdkgdr4pJ46fTxrVCdJRHTYCq7N2y9stpZvRqFeDLU3HKufFyupvuu",
  "key19": "3izLoKcHDj6YStczZNbmbFpxxG72EyBYRVYvs9APVpD1stAjLwT6D6iSwiUkD8dPvw7gpntbaS4t5inwDYEQGbKs",
  "key20": "66i7EwbipkLqAqgm9CLJoY2Tncurh1v8a3WHEgG7efE5zWeoFsySFwhPtqMwaZoTZbMkD81gM83xekMTRHFTaP27",
  "key21": "MnQGge5n6xduGZhA8HSeyf9Rk6mQBLiUDLUcixHKgQ4hFv4FnMtcWYVAusKZWPYScnYrXSLVdomvxH2Bt53wad6",
  "key22": "2ZriYMzo1SCNh3HLciPJRfEe44PYXHmxTxD2TEtaryg7yq5AimXnQfxf2TVAGZrXi4yGQVzwYFCBdGcwwKFV4uQz",
  "key23": "KF8XdHPUxKbv7SXR1DwRD1Ht1vSVYGS2Bk6knL6GG7ygfhAZurWJezpq9DGcdaifFGuiTa3y28oa5ceHFZ3tbtr",
  "key24": "4f3iPePXS5AU8qdWhZujTkJbnftvDtn69bVABGM47UVdXz9xPhVdnfUnrHn1hs44vmqsy9GjkBr9GEMrv5F6rxZf",
  "key25": "3qejw57bxjKW1gJJMCDhxzRjpHK92dLJVSyMqWD4m88uutbcWBPux58oCSrVtHzcFEDPxG2n3bRMreZEFU1NwaSb",
  "key26": "2mrPbG9mcwHPFYchRHu4gCJpokdkxvjMz9MevmygJV8zckSoxD3JVBEWFwKrGuwDVmuuBWabJkEcyYRa3rJMpzEU",
  "key27": "4hAYn3KtUCjVkZHBDGsxzA51TfkF2AUzMeVbH9KeAVdE1nCoVGBSfpEXFnawXA5NEidc4MqZQUnkqDh8p6k6935C",
  "key28": "43E27J45rfF7a6fXsXmAeBiHq55fvfGmryTiyWyQwxEWWjqDAF4tu4DNvQeEXmpAo6L8FRKknJjdMCc3aXzC8w9Y",
  "key29": "zL4SPEtZe9qtzAzpkYLVn844EzCGCggsiXGgYEpfrbrdCAd66iQHLYFDLmwyoG9xgFBkugtmemxTFC9xWxG1jQA",
  "key30": "3kgM9f1wJAbS1888EnGdLAiz7knfkXXTuQVDc2fq434rHv2Q7ZMs3v5ujJ4yGW7CuCR61eDdPkHdRkpju71XVRVo",
  "key31": "3o6HXSMc9Kwiqq8uCmFQ2y3mBCR2aAUw1Pm9NRGaSnEAp7J1DHb681N7rc8PNvxJ3V6N5KaPKhyf86p5DB7JtAfo",
  "key32": "24BucHEPdPYWnCe4M6tuzD6eaWdkcmVhiYZuWXvzYvpRyKRzLcqgXot3iH8eQUZ5geZxUQ9hDmbD3MErb7ZqRVKM",
  "key33": "3HsLDU6nbbyGCiMxP8UKvDesEppo2owZzJGXbgB6khmnUVA8NRpeWoiRPUe1KJc5QtPSZi37wUMRHASRM4tvPsHj",
  "key34": "51x9Cnh8ReE4c59233V86n1YinKoJdtkynay91iYrxzQMpSF91Ae4wshyYucA6WPomyWmBYh2SdRuMa8ERwp9SyL",
  "key35": "4YVSCJERQhiwt5KfAex2JWK5dKaBs2WMfYnTigWSmrXpyEJvJ3oHZ9qFNrdugio5L9UcvbN3p2FrEsPEsMWTCTaZ",
  "key36": "5VpDbBoziFeY2qJdE5LVZgLPFL3rZ2LTVKKr7BnL9Gice8HKWCSxRcA8EKL6nbgVxeoCQJJpdEbfY3KA2vbJP2ns",
  "key37": "4XAzMCtEGLBETkLEgA8WgEDksvMEZfYLFb7ZMv7rEzumW8GZUMN8sYzrbG3XLFPi5bxPQkeJPBxBJ5P73xD6pPX2",
  "key38": "4pYrX8sspqSCZGVjSwar3pzg6Jxvy26fD7zXRCtKSMUdR54UeN7f5oXrqvSTsfm4XooPfK6wL2SmkfzdRbiFSihg",
  "key39": "Zvfhg6wynwmPTS1u9yvgcn9WLs5byve5qQ3kC8qqes5qeZBUdH1cbZJCngAxg3PT3vHWhzhNvCv211F96qViK5x",
  "key40": "9bVjBogTNV4PD4RDCmFD687vEBBtkXaWB95AzYt56VbkF8aN5aHdsV3crUB6uTDqp3PXW62TBAQhZsyA9V5Y9YR",
  "key41": "2enVQ8naFoLmu7LMivL4eSzMf8iTm4UJZH8yrr9xEwdXyLSEZTCwJELPzBiA6xDVWwFa9bpu3FwRRTpdCyMMdJoQ",
  "key42": "2fFQhEmA7JiQJy1fC7zy5vn4jc1iQ8sa342uEsVNHjj4Y8F813eawupG9wfDrMtfpqNsEHC9xWeULLjkcgqiRtZV",
  "key43": "4VRLpwmYBXuu4isePjSxhBa2hY475MPVFgQpeh36KGknXuz2EUSUMGSUWF7USQMPoD7RACAhZ7eUL5bC4u2UZbcw"
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
