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
    "3HKYksq6LP1shHNzxNrA8bescKJckgGGyG3fndQZvNF3K4zhqsjkaXo974JDafkNw9s4g1Rdn7kkYEXmmmSaqGVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jT4zJxDBwzL2Yr2d1SDrjDHvPDyGGyiPp5VggZsCeAdjMPkiw7uE8cogwL2VVTNNuWWszp5QUniaGpinaTQf951",
  "key1": "KmNs9889pU7J5rmedAbunYBXKttrPdXEY1r5TeQnsUDyipLkgHV98mbMfmygPBaLg5hwmL5BReq8jvjpB6uWguf",
  "key2": "5A4UZAXM9VfL19CRwE75XcBsoJvKFMGe6GoTtLX6YdbjBiKAMVip9VhZL9ohBX7fY9KVUiyi3BkMHtQ9ieQzeTmu",
  "key3": "2DhSWS61hX57gNRvGUmksNuiPLKqWQ2BxkrkgwycWJafpYsMURpxQTzQk2NYb8pjsfmRnsYBvjykz9qGV5jEzv2j",
  "key4": "3Ex3KZnf47ouFt48XLCU9AKhGF7SrAUdgvfTfTguvgjYduxZGAjzZwyAtBNyRfLctcDSF3VHmnQvMWXpExZuEvBL",
  "key5": "4VpCRE2kdV78iPCk8y9ShZa7Shdf1vQc2kDV2Cp38SbWEfpY7Bwi1RCuLpizNexRF68N3ySjqECnVnPFfdatkcoK",
  "key6": "2uPgxFihX4haBvN3U84MAGYgXpK4jZemmNG7SH7SSwAQ9WMVbvjAediSX6VHVLLJ3WC4U4wBtKDDZTf7LsPFkFwC",
  "key7": "3u97LYauLmSQhmfXNZrDn3eyizD36UWc9Gy4oFDfT41B1ehSjM9EUBZmHqvRkVr7RYmSLCkCNn7bYrkwfjYLBsVX",
  "key8": "4xzs6q65jky5bMZd283HqHNtQG44fZ1ukBzeCYJNiZXsR3HDA5FnQEqgt5mD3GQVCAVzAun4BzZKM1LeykYdgb3v",
  "key9": "4bDkgbYXjVDNfQmWdZ8tqG2bgF9KyLE8mFj1DJQhesjdxKRywg5hM4D5CcKciBabJFpYzwrfGkufRbAJB9Bm5EFV",
  "key10": "4eZa96iefZxn6kMJhFnTiKb7LZEaAfpr6kFZfcp8NzNX1roGguNsUKWMpqSiPCWJaw7JHiUhKb6nDkeQ5f7Nzx2Q",
  "key11": "291cTj53KCE9Ltj7ohP91NfRs8B9CphVbTwR7Tjacm4hQM42t1KKUddLkD6adQCt5DWC5XXFQSQ9kJNgFinY14KA",
  "key12": "4nZ8me8mifNi4G59XMJwFurYPgdtn86cqut5NaHihZGVewHeqLr1QmJFvknjNaBBbVj1JhreMW5uqeeYoM8kMkmL",
  "key13": "4ioyPThYJpc2rSgaFnMEqHAyjwidyksu4Ui3uPjy5GU3d871Tp1aQpLbP6JwEAyoPh4cFHctGtC1Z4ztLp2yDUg8",
  "key14": "3xtW6XMskUZwRy9uiTp9qrte6Ta1LCqu54zW2KddtEHpNJVZCXV5eFSgr3cm4WjbfYeJnHhigwAu2og1pLnR4Yvc",
  "key15": "4oJjJeVuPTyFeVRt6u5aM4SrRPv14N38ng79Rqqj8TFTNSu7nBk2tb6uqTm2DCnPjutgYv855ZiAtFbdtdz394vm",
  "key16": "4QCtHdVZYxQ8p8V3nmCQ1cZHe49bmF5U4HHswTpfRhsxR471bD7da94d5ZJqa2Nbe4vvHsgvkWruGrrdSKCisFs1",
  "key17": "bJThSy8dZBTjkrEd31AxPvT57V8GhHmDpHQ1ouWACHNustYJeQH9Sz3gJcenoMs411HKCrAXJnxbgNw3Dx9wa7C",
  "key18": "5CYdECDHSTQvZu5ubNTb4qLM9M7hAz7xi34Epm7fHQfRfZTznAALkt6CwaH7KWctRCgn6MaE9K5uBugrnS2rbuzP",
  "key19": "ARgFWCdLgvNSyX3jrR1ik49LfWYwm3U5NBvfbDDXhvnyqLkzz1jfPPJuFhpmrKxP5RE6WPPNBmNkim1zWYycsbW",
  "key20": "khbb1iHfbor61LN49R9rFbFFpqFTYjPaeHNRX4gGjM6d1y51FfAgf4CnmsNm95zmVL9iu2xkqmpVKdyoDFbDMuu",
  "key21": "5K3JmLU3FnRZDbkPmUjteErH5g3fjzq8fhTfLJW4ht7kSJFYTddPndskuFrdogyVCgBzQUi5es5R9p9dgMQnP5Zd",
  "key22": "5Bpdy6FA3HpQHK3Lrvt2W88ANNsxw5cuBhSbz2TuhnN6H2NS7FoT6W2ZCEBA26AjrVpXrqpVHEGFLSDehrGeFfE7",
  "key23": "5gu8cpuNygR32AMtAfSPZ2b6XTHn3ZUMGpnmn98NeLjt3Hmp2vtMUTw6GhnYSdU2Ftot1UzpC2HCgfhfK1B2oYow",
  "key24": "3FczCHnoRZ7JyuUcdevY8Ljqx8xBLRgSFsyLbwwZkTG9tKqgaUsRbPkoYB2Yjp6gURAYVFNiBqPWXbEicYajJYL2",
  "key25": "2KvkiDWbe3nfZgx1wo7ZKqChuAAwxsYRcrdPjiasv87wb9UjjaL9Sb86XXvtHQt8PVywGRqvcWUK9j6YoP28STgK",
  "key26": "67PL6ZnkvvCMXZbaRS98yWPnS8Yv2MFMVtPSv42oyroYSj3fzH1L8EVRZqCPQ9ViPaxxDf2dRkwrF5UdgBkwhDvA",
  "key27": "5dwZExLTkrFUehCa6umL3xHAip39RcZehasxgzH3GPbJda6pqgTtaS6HTAbnagMWTA4pRFLGogysmgi8JqMD56jh",
  "key28": "4dHYesDVkCVRF69CbUnbq3pEY2f6uqWawqLRRn3P5J6cBNgiptykdQR22FLoVdZR1TDKVuxJV9pbNp58zZiuSvRY",
  "key29": "3JG74epUMLuwoMQwNdf4biuGGSzPLggiN64tPnoiqNpWnvBLEuFqvGD5Eapx6DMB3QLekrp1qvwKTv2tCVDnutJT",
  "key30": "4WxtMpfQUU3YpDcB1BFodg3sG6WYsarmoF4P8kNmP6G83zZyQNxL89WVcmgoHraHkF7bHKWNtiiZUx2pkjkyW7nF",
  "key31": "5Gkx7G5WiGCEmBnJa2jbocsCK5c1if2MEADH8zTgm62367ixqNccKVq8F3D5Y3YqkYudxkXEV4wn2eCAHC7qUsE",
  "key32": "31ESNA3XDyKcPnnyQ8G3cBHVEXvXFhH8CBxKUKxk9fxomTWzpFosF5mRVw4uU3VVoEAm19mpzK3fVeHFkgW2Mdu5",
  "key33": "4DUbZV9Mfoc9S33hDpJKc2u6Vaa5sDg5pYi53P5vvzhaB6jdqbJ1dnxFUxBL3WfRUCFvP3V3VsMadgucMTnsNcWG",
  "key34": "3zScQewpbaakZPQCvheHMRT5dgTgygMoNG9GUwTzZt6eGWgFceZkRe3VsXnPUgYdvX3AfBgTwAt5nGmNFPDYuNsZ",
  "key35": "2zJyc6PbsmNgWrHVRouJc3cDgXHxJSmsVM87ntcncT9zyWcZMB6saQLstJv3wKhfH59TPKwvD6r3m32L7id1hKWt"
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
