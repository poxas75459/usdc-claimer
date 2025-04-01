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
    "5dEf8NBF5dUDKHbTJDNe5Hb3rZTm7JcN8WpXSuJtUqYwuajvCvyJeUJ7qWDWCwNPgdmNfYefG5RSNCZZrkSUca1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTqz9yMxcVLe11sSkUm6gzTaj5NSaiWHSQ5r1K7oM9DA21uGfEKguxMvXHKD1kiv3QnV4EFzXpujt49brUcH6mN",
  "key1": "3UcmUCoZToHhdHUgWTNnDYsKTUf2qWdVLXi6t9YeyqQbQPHhUtshmvD4q6K96mFPeRZRbkcqdE6KVuMAwbW59Gkg",
  "key2": "31zQo9EmGC6JZXHbYHtu5FcptewWichPWipJaPet1hn9SQKNc2QSKTvt9vfyrhEvoc1TbYPDgSGTs2PiwHAjriXH",
  "key3": "Bvx2dFoGPAksQUrNKfNeWok3GuHqUnJrD6N5xXWSt66ZkxsLfz7ZULS6ovVfsWHUXBP7Zxpum25tu2h2ZgkUC2Y",
  "key4": "5WEj2mFTMXEkozkXSogE6uPbHpwwZ3obwCQ6RmcH8R2gnM11rNf8NuxeHYrK4ooee18SgEygTCTKXCQKidcQV722",
  "key5": "5bNb7CX7wYgvnh63bfozof6ut5Fw8F4jCSUg7Pk1W5P1d2hviFDVJsLxf1a3698vVFgjkf4nuKDdgpyCuEs5osnH",
  "key6": "3ydnki9d3463cTS6KGTghcteoMMpNJMe5t9co8fEhS4h9EMDmjch5oSWoJeuUsqisHC7kDqqYBtfeAGAaqE3KcDq",
  "key7": "5z1KTNSRgQiCyMsB3xbXhBBcbGcrhWSxzGxncY93iRe79Wt4u6Y9j1HPQBWmNpKd58qbiWiaUiGSn3QhisJQo2Aq",
  "key8": "3WwbnCjbvM878Pix3vdbgJUKWj6n2GPhYDpnL4fVKAKJfPAcEp2ivHFNQg6mNtUYzrfzvpT3eXnaB6YjcY27MWsG",
  "key9": "793aAoS1BKzsFgPsQHqx2HhJ6ZdDcCGuXfY9uDw7TY6CPq2XdkVhDZS9vzCos93m6iK1AMcL58zPXj6ozSVC37h",
  "key10": "2TC8dXUJrZiZ5ZxSYDqN6hj5tQw4aALB5WQDEGPkUaTsXPQHzSBdRfF4M5tFBVzPJ6k1QUizXczUWSrWEgRgJbxW",
  "key11": "zF3dCzAjWtjnnVRsgGzCunyu3LVGMQZsMc13ThwBjmPtHojDyT2EsjPxchji5tdHyLhYC1YsZ4iPFTqA1GZfjiC",
  "key12": "5ugdsEhbje26XGZxYLHSEnZemmw6bAjJbZPbowKVfVRYrpG1PBBHHHf6JFXsDDCPBoRxbYMRW1QRRjJpk54NZdDf",
  "key13": "2HhuS2EofU9jdETGwWmuuMNoVvUgvWxbu477k12Lnj8FSPNgY8cz26U6VeVMFjoH77ByBmr846mPuXJMBGAuCp86",
  "key14": "3TUHyuAiNutZYJf5gcEEQdnoHkwkiR1LpokQEg9M3G5xG5xVo8Z15cBJWxmW93nXigKRD8Z6df7VLCNgpqQqXk7G",
  "key15": "1vDs6PPjef5HqiyAAfnGiXvRQvtBcKHmTVmKVdhH1ue7AKXYGQJyRkopnYiMHofpFNLDU6RJd45eKBR8SU382RC",
  "key16": "3vh3HtCUVB6scpEaWS8vDTLgn4766pLryUG6ZAGNXB3h2ezf4M2aPtRQG4a9JHnPS95SJvHm1hUYHf451XixKpUh",
  "key17": "UrSG72dw5nNzUBHH15rj2KG2vt9eFCQ9wYVRHH7AhCor8oEeJDvsAzq2uHYP1xuwM2Q8Koykx1HAtnm8sf5fedj",
  "key18": "3bSLmnJv1sm7x5sQRZw2LmCMbfKg1q9Sz4euv1G1F4iXhbeZeCbYfXW1iotEu2wBtgBM6cGaSFoQGPWiE37MDV5p",
  "key19": "2vszZdsvnwpZv3wQfA2HWvscATL3wbgfUgvS5edFYfRfFmu3qc7kxNwQyraWn8aFuYQQC28EmoCmfQ8GWxiEwqbZ",
  "key20": "2ueKpfrUPseEcjNmsTS9JfAUgGh9WX8JkukX7gJ9ohFAHtNzKnn18xwynW6QkZLkbG5jrBBeypZru2q6gS4rvA8a",
  "key21": "UAXbqz21qxPzMijN9xT9fVkDMguN9p2GHesqDmXZezYkygmnBsZSh2Bp1SU1uZADuy7TAuw95J8MGSWuTsCQQG7",
  "key22": "23fpGccgKhiof2TXDCjbYYBbq8T524P6iiQCKJNi53tZsAhMQQVqxZgavaVaVDiu9BrRcdPmXycypsg6YcinKFUu",
  "key23": "2Uf9K7Ey2o8NPycmmm7NfRxaFJs62wxNuB8reCB3mEXDiJj7Rvh9ZEGxrcSDYi2TVfbSZQokH8R6STnTNAr6GfkH",
  "key24": "3yYPVEui4mTrz1bhWN1mNNZAmNzm4Uu4AxeABMVH6rgmD4VgrcMEgHmrbdHdkj9RGCxeBLUDHDCTcG6EPPwmReYY",
  "key25": "5agBS2oAWVyhmobghVHR3spWBNUi7DaYvdm1HRFARBTXFL9CExkcfhjtNxo68FGHWfSNPHWRenqWb5KNjYmjfAZr",
  "key26": "5xYnNqiMEA45J3F4HGtv7US3CbarGPfDZJSmSUNePjyVnHPf8fU6c3cBvwU1PRTbMTyGs69Fdt94CuTW5kjXZsXy",
  "key27": "2u9Y6k19z97rojaM19P7GVLG34SMpvEkuMYDAhFbzpV4s6rtKb4LXZ54eBGsV9VmAKUkbP1s26AbgwnVmKysFuNw",
  "key28": "5dq3vxRMeYKHffs8TWgoz6fYiHiaHwdngzY6VGVwJcdJnaCcWXZmvBPNhY2t6NbCJev3CVpysCgmmoU8Y9CpkTQn",
  "key29": "pvb77RV5WiNr9N2hLhRoJoyU1qwAibwH3KqdRtyFgZRRUPfW4TSaTGVsozYEbvhB6si6eCN5PiKtJWpttji76nT",
  "key30": "4nQ7WsTeL9E82vjDAR9ynbkT8Kv6xh5o7H84Nv3ngWVD6z1NRf7VeAn2pnQ9oKCew4CQMv4N78tGCmFL7Mc3cyds",
  "key31": "5reoUak4cqr3DmRHadtZBVKCEqZc1TebpsLfPZd2Psvom1uxavYeyXMNoTfGZVUTnoEsFEArVEh2qPyRQW8oTHNx",
  "key32": "2agB5CAkhUSw9Z7GwXY1mHtAaaA6kZ9QLSdkTCjU9BjiN2ZCbWsCstEkBZTZWh56cPmC4hE1UqgSR12EvLeYCikq",
  "key33": "5cQUQaCpJcs3nRCsAvfsU52o8KU7QeWMTMkkgZFtj3zvvhjPRsmUeBiAfKzdmiBX8XwBP9mbs1tzW4mXQdY6tgtM",
  "key34": "Waa2L3u2eAyTCErU8U2RVAzL2burGQWd2kouK7TB7uLHvfx679csuBmP7Bq7xLSLSARmfLUSoAHuWDHmeKc6LkZ",
  "key35": "4Kq8qAm1qJQAKPWcvkgKom2cQPx1RmT8NtoWRUwk7poRnALQ7aQEtzqYnY28bvCet6R4CL1KahkzQTBmfUwyTcK4",
  "key36": "2njNGYsnTXUUvioVVBMxiquGkFnvRJayLH2iXF4btawP8eaR5bcFXWf4XHSSA52UP3a3XBdUgFi3ZC7Qy1HhxDUV",
  "key37": "4h2X56srHhgRcu6NrTKDhd6FMqUeJwBvByWvpGRJBg48AtbUc1a2GDtpy9CMeFUhySPRttzmeTuzL3fsq9wP7VN2",
  "key38": "zqwUNDAcY5CbkUk3T8YAP5iKLp3MCgZydrmYAbJmWM1BaWfZzfkXNwShpub6sYeJtnCqEtb8aoJVHfGBYShCpUG",
  "key39": "2X59qytuxwwCDZYSDYPjNipXEnUfJGJVFh1Q5cByFQMxT3NV9g4i2fTnvXbmVnUjbgQXKZwWrL7j4jVrRPjTrgyK",
  "key40": "Ljue5R3t2W41r49o2CScvneecYXxMdyuWWGuf4B1epBJKgdvx7FEaNHjkvoQrko2mTVg2oKPnfpPMDLEvm1K7xB",
  "key41": "92R6x3ggfg5PiaZhTPiteHPqXA1CFk8ejyrMs1wH2rbNhd4N3YmPN9CAjPTzXrNiiMs9Jji9Xw6JQ8c9iuKB1yb",
  "key42": "233aMxByi7HmqBJxi57cBZ9WpEpZewWYMyh8hF9vt9o2bz7Qoss22RRUaeounk5WWetG6bqh3ajafeWpYik9bgXj",
  "key43": "58YmjE5cS9KFGfy341cJuXBeaevaJSYFRqSw1HsQvFANyA7ZnRxp7E9si6mwW3t9TjpmkEjwtYjw6DTU2Qairf1C",
  "key44": "4zcy45GTcr8HYbEAvXKVW6U8em8JQfJkVhY5dBSpUksxWxDrVsYpFArV5xB84aj9pHv5ZrHpEw1qiPueLMK9iaY9",
  "key45": "3Xw1UuETtpsEKD4UgGWsRaV9sQ8qgnTUKGqh162g2Q63y8wyoZ4sQaPFLsPvNzf9FmpEJ4BhcM85w19ccSTy7vRT",
  "key46": "UejxPm2NudzhG6y56jUAhbs4FgLUpPmSYimSxFSBbxUhKJr6GeeL5F3Rt4WCg7M2ZCdHB73rC5juEjaezBb65q8",
  "key47": "3iw1g4eoJXj1nd5Rh9P1Ch3iEHjuLLreQ17UtSHJUb9dBE8KE8zFZ93cL2EnP8soA7iA9AuueVuHfyGszqucKxo1"
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
