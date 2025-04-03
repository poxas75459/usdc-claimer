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
    "JW9UVih5vyhob2uHNe3pRU5Lyo43t4ndtnC8evi5mFptPjbrSQT54n5RASHLnJN4aPFpezi3jEgiVHUqJiWdmDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9wnZtGB4DhQCL4cK5FHpm1u6BPP2G7Z43X6ucjRQyKtgdjRhoPWr35dxASyDowwZ7KpN7kK252gCQ26YheJeQd",
  "key1": "67mNQPhP3ZrXemJBijJwh15jiQKWTQtBnH6nYcYykshFweJt5yNxEPzTWGNSfnLXjQi3Nx9hg47Y9ABHEBonUh6D",
  "key2": "eTy5SARDSPPQC2MwVVvLgqamk8sqooz7KJ9kp6dW4ctagKS5MY2ZRUrkc2Hv4gDLGcAtR9SpVLuiEffMxfgFBUq",
  "key3": "64FCYQfa4VDMh2zsJFTKi3kxMc8VPJKKTjfjo6cr2srDCxivf1Dg1KHQuUWHY9RSz4xwzmBxEV2tBzRk7cQCtuwG",
  "key4": "4g8nQkyLyDXvTKuJ6gVHpZAZMm2CSzVTpQdZe5rA9qFsi8wPWPi8rK9ruaUPMHng5noxNLAUybgG4PzNuZHBDnmk",
  "key5": "32UFMxCBA6LDJrZMuF2abZkCjdg2vFnJQmB8AXjNxiaB33AwRZGivtw6RmTn48VVHDSG6nhPV7hnhx4pqHwLx6hS",
  "key6": "5VvpkwzqPdE7h2cK9PF9CbsPNyexoBEcgMRfEXa2jNVHQrhwqvfQD5vk3FcMpz2Cudn9NwMEiVi5eKKjTBzrREzG",
  "key7": "2kV97B93BDLmZJEaFHCpq62rthBTDYteCKEbH3TtBM5hUYRcD9hMhd9PLogcjWeoLng8JerRZYZ9So2PxEym4CDb",
  "key8": "qQw5hJ8K6eHWHG2KEteQ9N4PDXc5WNCW27mJ5Bp5pTcEqdAQLXd9VGpLmge6AGgff1GvtB9Ez4aUJvypGRMdje5",
  "key9": "2vaN2WD2SDDHqbvvGWwEugWLmHxphBew9oE9Xjnu2c5DgqztMFNSBKz4Et81VYHH6A14YT3FHUuTXvvCR2GXQGJ4",
  "key10": "33k1357acvKj3MWfdCnHcyvjakjzLTggDX6iponf93N76eNijBd9HR5VnBbDQu5j1qBU7rMgaWeMec19x2WccNcm",
  "key11": "4bhQ1daA6XazrjWrTRsC2YbgpfWW2YRiMmTW6VxYtYFHUH32eSyrTGyup5jocuW7AHLYgHZKDsoTkb3T9Ct33i8d",
  "key12": "33DT5mEPQRucpEGBtocuuqyv82yekp733FvTGGfBGjyXy6rWLdftyFV3ZxGVyPeM2Yn1HSXkqJTCsKWCocdLw5S",
  "key13": "BgfQRXgKpNW15NMWhSxEHs1iVZC5BfFidgQcFTNyvgQ7CFpM8uW4hBHJD9TWiavUfDk7PXHb55k9jAWjetc2XEd",
  "key14": "4xFEXbfTRTMfRMA54QUWgdfjvoDA9L3saqvgHAFBUp1Qq6MpoAfmXPjE1jZz2vUYR4DnHCgvNtz3ZPEoF8xwzj2u",
  "key15": "372Ys24xc2kdf1By6QkBbJjJRuY8au65kWWmrLpemjS7E3rimKECBV7npkk2dNAiH9W7CF35SpoSoMGYdpxbp9by",
  "key16": "3g5iQFFt3vDg5f9oZZSXBPRhVhcoZC4n9RiUeEkYKP4JvkqbCpJeVsR5KkiepLPeMQkqiNYDdXXAZgFLUyWknNsK",
  "key17": "2nCmNSR6WvbJNTFeX3EHdr1JuHrFcqwcfy8CVNuFwFkRc5AZZDjXfk88gjueSPsvTswAY6y1pGPHqtuqv1DSSvjC",
  "key18": "2R4W9BVNqWsmxnVWcAYEqE7u4zoU9dnH5ZNyvgkCvuekRfWyfbMyS5zDRBhHMGkTEZb6YrZ5oUnYq5c4w21JBkkc",
  "key19": "F8r4DVxEVnwTutjbGWH3q2o29EtP29e4tCeBoHSmwBMtDNG9MVKJVLfgjctc8VeonHGvwHH9hrtLUPJ9UWh1mKg",
  "key20": "ua7vaBAkwViXdKj4cNFjcUwz2MW9GM8KvWorywbHr4bncZZDzzH9yiE2tYPqGkdY3vcmmH56H8iCbWzq4CuzwSG",
  "key21": "2joA1wzdq2rhd62RusLULFR2xebsyHDcP3gGatGN6q98P2skWRZF4fsRYT8K6tPqxwGXDm4AAaViYVo7hFYXYnWY",
  "key22": "SoiFsc2Lbe2aX9DdLXuNkMMpEPc5EHFF7Uwyv11uysEZJwMd2YXYxK1uRCkicwn8un68dNMagEZwVAzc154Ya7X",
  "key23": "4g4zw9CSCiN9D3HASPBsLDPtKKc9Smwj8CNcTHWGogxhsQuPtw24YPYfGmgRnzjgzsp11XKUNV1Mqj19TNa5aiZg",
  "key24": "2foeDat1BDc41BizwxdKsf1xhQTKkL25THh2ems7MMsYDB1R2daCwEpYdmH4okHKajoWi1sq3HVc52wpY8Wmi7ZD",
  "key25": "CXteiS5oo4K5zH4aSYWMqHg4P9vCRxZgwKEu16qeZCosGim1YyF2Z1WDqqNqfKQqpeg39mbSTYnvQ9MrYNXf1ia",
  "key26": "3sdzQHie2fkkRrBMmgjZLR5WjQStPExwkTU23LnW9XSPwA7nhv655CVjDae2yqhPWscrnsrMakpqxLaqpegEo8bc",
  "key27": "2t633wxXYEjczFeP9ereG2H5bnSFn3Hvvme1QSVCTJvwCpMqy9TVr2yL45VcPjibW42j3LNMegcXpuUrk4JBiypQ",
  "key28": "2rFq5YV4hgaUUZNttZT4fWXFht7EqPJj6YqpZh8dTTrMN4GCGbdBB2b8niks32s6vNAkcZrZJoz5BNkqSWNuoEf3",
  "key29": "3a2u57ojcKUqBDg3giVhFpA6n23DWuuQ4sy2e34udHEmvoatXvrkRzayxo3xD1vaiy2KDQbL83GQ4WA5JcbTxrvT",
  "key30": "KHdetxTEEav16q9hAuppDPjMfWrj9RP9dpvbbcs2XbiD6NST9eppt8Y8tyMCZyHJB1rP5u7UACBBNzbcsVCwCgM",
  "key31": "2mJZQKuUmKFVPyDu1aBWKyDZtdQNDcqNsvc3dr6NLXhmDspUiM1BCeMNucP9bRtpQtq1CqutbmhFuLcyKMLMHTpZ",
  "key32": "3mBH387r98Vr6Yh4vTNznBnmUcrmMEkF2t6JnfxdWtD5B6aRJ8oDSgQhGaLFjLjN3jp3bXSpNx5H6G81nG1JsSSo",
  "key33": "2Y8Y5nzuuuvswMbgabvNNjxfXSARqTjuyu5F1Q5ELbRUnkGTPAAp6yoVKKtzZAeH3GBoMXffZuxwo87aCfT7w5zk",
  "key34": "JUe9cYJegCmxhCEqANqqopbbkeRu7u58wapQ3qD9ECRJorD631bsCasJJ184C1WEauthbAFCrm5FYkJ46tPvPma",
  "key35": "23Z6FgvRD9GoYEZTGoHAJsj4GaY7UbEH9Vb4qNVkrovwkqV4GbWN7dG5yKrXCR6rdR8YDhiMtfm7NU9QQ76ozcTi",
  "key36": "5HamZzj4Zn3w2jGEUqud7RFY4gHe67Ti7EW5G9VoYDU1miPbzhgr6mMcMfskzU5mBEUH4A2ej6CwAr3wCbxBDRyX",
  "key37": "3PmHRRt6Knr53EisJVnXYn1PtfhLRLPrwLWP14zeqcVcKDConKjv9SkLvPn5iste2VokfEpLgibU36gwt3iunvsq",
  "key38": "2i4HQsLVD5bhXuwf2a8hh66rLYFoytCD9XpjxSE4CiHmUon7g9yku8SuXDSkDBKNwRSPvwimm38xwoDQBMx4jP4X",
  "key39": "4pDfhyK84kgKtH3oghhddDyQ9xAWwMrS2vVvft6nmEFi3mx6i1NExg7nqABeZEiop23rgddgzFqqJzPxprQCSkeo",
  "key40": "35pNCrxcEmtrH55g65aQLkFy9QQk5i3omt12ZBQv7D9THvdxD4F8WHL7HT1FPxJ7DjYscDtvUB6HcJyJQdqLpWgf",
  "key41": "4NoQBAmaFqKZwjwEhJVoYX9uC7ogeW6oLLVGqEuS9NWkynENyTUshKXk2nvFeT5R4htRj3vfPj9xDQBpkjEiKAhw",
  "key42": "4wK8d8sxcJGSyKKC1B7psiTCWf7naodRoXpgMGd6XcjbJND89m9mFqEnWHqeCNDz6gZm9iuG76rkWxcjA3AUgyni",
  "key43": "T9sG6fBoAXhbFtNnGEwytpzsFzfWcQzjD2JEGa52o9F7hMiV3dMUQF1au5E7W1RgmHBPT5gbugNvAbNbseYH51E",
  "key44": "bvQzvYtP32WA4MGotQxVGaYvLoPWJWZwZSJ8k4Gszzf3fNEDkU4NEswz3MJBrQSxwQQQqWx9A9Usk2xvaAjqUyR",
  "key45": "HwC3YgkVrWs7KtC3crLjatfD5sCBqGVycsuXDo59WXewvmkJBkrofLYL2UXP9oZa5H1oyxfyF1TYYEhmhPyXUdz"
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
