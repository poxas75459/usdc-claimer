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
    "2KboKtQ7vHsnKMKbfRJ26sbdmzm5QTe7GqXHXzWoZdDemxFodDVQkJHvS973hANFBMC4a7wVrbx9WnqErfBE3ef2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3167fE3CoJN5DFoLUGFMx7ZYuMqAnfdJUjT65x1TMSyrZRcSxo7RyXaxJsNJXb5Ka9EyajkL5YaPnhHuA3UZPrCs",
  "key1": "Vev9khLi3nN1ak5iXd8yU5Wa8FEcxoiWDLXsTrwogCwxmfMaMScyJwZexfY7tsT1a4tJHqoiSwDpgTQRnntXDp9",
  "key2": "3qtTURA7QfyvosPpDo8DZmDMJZ1AgH4fg7ABMJTJQk7eo9pnT6rBz8dVwtT8zmq7KwewkpMJwL2NeuS6Qpp3oMxT",
  "key3": "g39MDzTyytyY5rqpsjerMLac8v3Z6BHotY31TypXb4azpgZu5AeMoCnQwDdLPXnoMaW2RptRpJGvJfD45KH1pcP",
  "key4": "HcpAhwY1iFprbBVBp7EX2NHwEXihNPJHxinrWmeFgN8dWaAjs4CSjrkKyQR54YRiYaEKZChcax51d5dp715mYHv",
  "key5": "uBsqu7Mbr9cmuxhbjQgZA2nQzsaKUnF2WrqhM336JaPVGNSTDKmV3CKuaBcvZ3xyBK4R5BpHkQFBe2YLv729aQd",
  "key6": "5U1DkpdL3dB4zqMhwBCz6fe26Vs9VSuyeBhHZPAw8JHx9yKV2FEV8dx9UtSDD1xSYvRGAmmeDyWfUuDJ23Hs5mno",
  "key7": "2yNfETpbcU75No4KK5FeSMC1ASLhVqdTWAYgTMya98NyGBivU37vUFy7PzvbLvtGbYmqr3KNCQMemNMSo5emGerM",
  "key8": "4Nb8pFhXoXWSZ7ZvAkJRMmvZXnBgoQnaagowdzGtCf8viMTKLsDo7ePkDWVoZeACPAAiAadSg4HMvn6Zh7S2CmX5",
  "key9": "327bMjrAtAwdPuwnSn8p9Zf7U2ANFBnQzzj7oxfccvxu8JCrDYqp9TEpo1ANmXQ3Guch7koHd1vh7THsYSuv6Gnp",
  "key10": "BTjb5WquWfJkoQH8bqtXCGgpWPGVKDoMRV2Dv5vcFKLH3VFzojLuyoHSQm4unNs2wAGnk2EnCtua3Mvrr8UoSoN",
  "key11": "28VxMFGzVQRuHfTZBacrx3UhhE9F4gvQdZQkXMXSW73kLxEjSoaffCyvmeHQNPAXqWVzdFUYthwmh8LmzkSRQ9bf",
  "key12": "3LkBfuyk6a8HMDiDerjapwc84rxBSAmvZdXRVx2tNHr56VC3azck7u9XrV855p9HTNvJaf2USe4gGQx49TvdRE5t",
  "key13": "3dTb2CosRLBhsvSHN532PzvgUe4DUoXLcYxfCGBviMLmT2GpLy9d1hmRPtzDBAG1DVNgpiW9SY4xr4VesfYXqL8i",
  "key14": "5LwPXmRP47u7tA8CHWQZzPsN9crj7T96AiBnbuvUruxmYXWGE311i5f62ur5pfnyVMBzEHWtepV3r4HqEVCDHLhv",
  "key15": "2yU9Wbigeny4bMo9eqQNFAoSjUpTCCrdfFRHef74xRDtRVkS5cqocddYXrG3Vb7rkjxXAwWydneVVWKEHkXJPKfa",
  "key16": "2tPjQP2drGYpmCzhEjoM17koe8aKMXCmRswhK6KBQLJFxtpM6BZsEMtmo69wfvtLUDptq1yT3sxKTGc7LmJRLbgG",
  "key17": "HLmLpFGn75YWPkxEYXa8mXFxMPYrU16UN4SzLt2oYVzGCwDwkXRRTUcNzcm5DeiVvQvLNKDWGUDwjJKW59guC3B",
  "key18": "5xhPTSiDJTjA4bo7KyxevYxwB4pmjSLg8KYizd6ixuJRcmKYcTaUHnLDCNCcFQP2iMkDFS3afp4avtK8s3WeCZKA",
  "key19": "5C2ezqRzz62ZNbtpFY8kWadGUFVK7Vasr93jLye5qS7HiXg88GCw7VwkCkB7pz1V9qWGcihPYq275rVMB9pkR4U8",
  "key20": "SoVd2mc5Vg5FC3XoqUAUPaUoXyGigSsf13ipdeLL97EJELTcAsZkmqJKpGsJpnaHyexG1E3Dmn9MTXXDXft4KBV",
  "key21": "or2ZqD984UFdzxJLZzJnMdCv2wG9wvtirpaVWzFMqf7hgvzwXU8SgcLXv5EBULWXrsHCPu7khPq2AdM4M14cSP7",
  "key22": "3qqJffeuMd6EpaaMcDmHckJkRD5FDL1gpMzWiyiY61fNS8uF5WbH8HwpdnwMYHiCm9qF94jRJxYBLNwxkzrZ9Uxn",
  "key23": "W3Fqy9CJheyDy77fbFStotdAbNNTEYsSwS6GgdZwRiJdrFtjaiuoBDtNmx3UegUDY88SdMKpXxvtvSGo2wJfiTh",
  "key24": "33fMRL4hWH44vUQLaVZnn9JV5KcmkhBUPtd66zERWnduVA27mEpw1x3FZDnvMAdk3ByzRBypNmDaPN9QJLBcbogm",
  "key25": "3Y1KVsrfTVGvuEDxF9cL2UD3hQbf5xCtCCPVxXhAhdr4nK9p3SqmDYDa6nutfZgykGG55DcfeartVJY7D44VLVft",
  "key26": "2Zh1ZzQFFEDWkEvufFPiU1CgF1o7xBCfV5hjQwUQyP95FntLzECsEPT6z6rCtCuDmqJMQvNncZXt73wikaZ7Wa3A",
  "key27": "4hWJgJTp3tp2Ph52kzRsCWSwFLfymF7244cDgaDec3Mdc1i8HpAevA9od29Aw3VdgYRETGYbspvfhSbhkq2V9zgM"
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
