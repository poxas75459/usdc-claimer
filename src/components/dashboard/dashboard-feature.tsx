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
    "2NDGb9JQ1YnGqv1K6CPHeCA65tmYwqKRwJHAW9caKSk1LcRqs2hnYpa5y7VmRqx3sTXNPeaY6T2zTYux3HUm2w5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyyZr69T5wW8tecURxrXyyzHQwDJMx3p8437gbYJiGLsjZXGhUWwjgVj3CZWGwD3JKNENPWXjZkFzwXosYETUwH",
  "key1": "2dgEDAdZM5JCVAU6ZEZgq9rU1TLs3QDo8q38i5QKYpGG5b5AH2Dh1VZc6vPgBu4Xh32q2gzty2nX7C66DpCxnvMb",
  "key2": "2QLJcfTxjpXWYsSoAhvYuTUm976QD2TTyJcicfQvdCqsvMbysYAncPa3CxbrfWZDeeCdumPtveqYNJeDjH3RxLtJ",
  "key3": "42Kisw3xfX73dqh8gBnNS3FbhCMRabnJk5yRGSVvywoSTWWqa4jxAudqY1eR52Ss5chox4eP1ZtLefFmm8aqo9Qg",
  "key4": "4hwf9t11NN1WFDFCwtuGNZzAyLjUkJPHqdTiJrgG7xFHRyXD3oKmz2DDLRQwRDHGgtTkZQRGquJChiTF55Hvs8F4",
  "key5": "uapXCkh1afFzNfHKrKyvZ5owbnf7Xx9Y7ZqGYBen1pqnfLyYcrgfRh9hSre4xKpKMV5RpRmFkHBdBGLToDGTJcs",
  "key6": "2CiQn3Eo9TtvKeFyBFLKpk4HUfXXG2CH1qqm2aEcqL9eWowX8i7wHMhKgW5TgUkodZp68sbfP154FckbrGdmsepb",
  "key7": "4owZaAczVE7KMvoEKWYpJcC9dBv9zo8VbdD1GW7hswuUNc5TjMRp2iGxP4LGJuVNosZ36MH288jihG2136oQ2aPg",
  "key8": "5ZWkhu83Rno63ijcURbnhttieoNYgvSEzmdVbTbCK5tYyydMUV1biY7fAsb3qvrgBUqrk3qxon9mn8etsQHEYncT",
  "key9": "3EqNRF9ye7GS5vFjtrXbHNtZd6RfnoWWLVcTK4v8Xjfj61AT8hpZHargrk1ocNnZzEk6t6KJXSd7ciTosPNH4Ykz",
  "key10": "2xZLHQ2A8H92ZoXUFuCxtMGw7Bmbzp8p4qkWFZVv9SsWQVqtpREztxw2gUMdwJyRPXUpm32v53JsziPG5CxRFPUe",
  "key11": "amsayXftnodBdMoJM4iPkwTKYseQbcNdXe1uU7ZRZzcXm9zv9PXpY8buuZxW8vEZ7ottAitetdqFfPY9PYvewyx",
  "key12": "DQky2Wq4GZ21bXp2BZiXfhZvAPHkR7mc8vaPYqJR2UdwQZz2nGV8sM6qghBYAzW2w7EskSUk728KtCP1sNekmBK",
  "key13": "z6HJMiMSHGovusijznxqib1Pk68Qo14yA2x8aGBVZj7zk7pwJkuPsXHMFWyoBoMnNEsk66ENnHTGNXL9ABDTAb1",
  "key14": "2rJv3gxXz7AenNMJNbbPamQepZ8a3hqmpFaqVV1ADqJdu6BnMfiCJQyFRNbfJhK1Pau2mP3a6janyHq3gEJA4ydt",
  "key15": "4qZyv4F4AeQ642qW9tDgQXa5k6EXTF9tbqrS9r36JNJs7rJ3JHRfN6JeNEfUoeKck4AZr6PPQsUWjpCqnzn58xuq",
  "key16": "5JrxcuWPTMJV1xKs4HeSi7r5Rn8nFK7Jp9KbP6ncYhTMpCyWyShigBHgkUHsvHkRLW245odzrHkVCujVHWwNcXoy",
  "key17": "3zRA6FgQUNXjFhoiFkRKpokNuzdSgFXggP4MDxTk5EXw3APtGiqTPaY34tChRE93QvoHs7bANT2WZxSXLA19kxPu",
  "key18": "NYhXyyksoacnkfRufaRvcfa63pGfXpWNppjjFAn2Gjn5XGbmp2uX8ictnYf2v21uAXTFVXgY1d6mGab6E2DmotQ",
  "key19": "MeRz3hayjcWJxZ8RAuvnNDBBhQ3teaoQ8gm4F4NQhuAbsg8cSdmz9dSTadpKBNfjkKMFWZ6vCZAKv6sysmGc8sq",
  "key20": "4q59QDryuZGZj5ic9aF3nQqSdKTwFm9eeq1EyVA2JNwvDWxn7mgRYhYx4JzgYUC8qYhSC4odXz2d2CRsZ1N8JvnG",
  "key21": "jxWcR3FJC7SZPDvtTEr5D396Ez2GA4oeDrWu7k7YEVzvAbkJgUdg52qpQ3tboeCzodLzukVjf1LHXp8W9tMeGDv",
  "key22": "M48kEmqbtgo8Z8ng322axfnHi5BqpD2JmDweaoaoYrbwRZwp642D6rMAyfVaTBopozCNrituuSLRMUDGLC3PiUQ",
  "key23": "5dkGqdqHgLyUiYgt57DkiRTWcVfy5Aass4HwRH3siWb4Evi6cdPfoXoH3EfdtcQ2qjcqJrsiHb7pouhLr8pcepbk",
  "key24": "51Cr7kGrNU8Q19759WipDCLsJvMXmKeAKLFFnX3VEwTSo3oSKXZCzVaHfhUh51eLUTnwAgQwXVrx4emkD7ZkzjE8"
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
