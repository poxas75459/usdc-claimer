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
    "3seBNn8JsxUbtQhdEHDxcWkCZM5kwytzSYiQZAzkprSpHMf7cWmVBpX11oLF7VPaCAUWwYTQ4HohJtRcGsxTbidS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VS9nEyp9f51UDGxisFiFp5F9BeyjiHB6vZCMs1BVg8H8doicNtwSCioJBrJdYgfSRPRjyyQiB1h35813dohQGc",
  "key1": "2RjnmZH9djkR6nv3FYHMkX3gA5TbJvPDUY6ADtAogSn8ipKxerSUjik5zvwjYWb3yzYrCZjZzkShUefzXDHaQr21",
  "key2": "5P919UKGAFUEgdv8q21JXykUMydTkqtP7QNch1wmH1kwonTMfrQG8AHKvn3JqZ91rCYQKX54peqRSMANKk1M5MxJ",
  "key3": "41XcMNbiYA92JAYtEZeQd58vi13m7JgJ4XDRupb3s4kqDK1TVyDXKvZync68o1tCvaRw5xBMdEMyA9bZgFGZHQ48",
  "key4": "5EmQozSQe2xUPGsCmJm1bi96jTeQt3S2XSdjoT5si1U5sBwcmLKF4sqMyird1Vxpju7ezNAiCxjnoNpqa8iyUrGv",
  "key5": "3MbVX69dec6oUWvNnv6oXQq3tTUBFBeBjTBZqPLLFwYmWXvNKWRin9GacpYygTF3gpUdzxRxbntu6JggiSj1s9by",
  "key6": "w3WSUG72A1UgSKTkGWEGMvqeynGFxEgbAdz9nPZz4V47TorRD8tKrbqLiKkBnU4cM3Xy1phPQT3E1bsyskQHS95",
  "key7": "BSpeLVpmrtHdJUS4xU2x4NK9wQydhrbmEdekAoLgavYMvSX7SoHSRguTLk2ouV7ChbSm5JDKTPx7ZGm4Gswnrwq",
  "key8": "52gj38wYeSyfsfzYRRQuYdyftc1PzWqrFhA6A6VpLkq57a1sjX8NRepRgBWM4KtEBip2iTzsgQtJDX1GWZmfHqja",
  "key9": "4gE7dELNo3whqAxHZUGxniHosEkFKhSi6ve9Phzw7hqvBERqkfVdraBB8YEUZeK56a3sQDJz3skMrTpcgk7aPMd5",
  "key10": "2exoj4AswvfWs97SuJm4zKonvT6NF7UvgXz9GRPh8u3si4q2KhRhmP2M54Soa8RpXBmNvbRfZQLZxQXeH1r9eMHH",
  "key11": "d6MpKqEFq8vkfuzj61H5psDBkpihpycifyGQtxsyTT4Gq5bm9qAQyw1Ld5Sh4Drd9VgsM5vNBCxcWtL1TdnmYkj",
  "key12": "mAFg5XHgJF1c3dV59dJeuSnmZxNwQ6pYx7gwRFfnEe12Ka42mL4Ac2ogW2eSTzoyNR1Hsj63jtWafsfAjBLUXPD",
  "key13": "TMtnnkGAxyxBkmfDdND9Q97wkkxZrLuvuho7khyX8frBkEgRV52pXuouw2DWKQB2n4crxJ7TpH493s26e94DVEi",
  "key14": "koEgv2Lkn8UhAPStFP1oc8XzFdFL2D4mJfKHgLverXA4YxMnZZwDB7hrQe3moDXUiEAQWr6nkQbJAjN4Wvh6AJx",
  "key15": "BCSBV6kAyiVKVMicVRYFG1QgkXj7B9HxEma8AFHxCzaVeqZDkB4y2Pe4iTaSXshYYNsTLrkBYqqfWKyjdPYLESn",
  "key16": "41r5UuA7poB78PtqErD8ED52s85JVVtyD5rbsntTsNDousQJV2XdgzJ5Tkm7s5i57yj2nSqbRaYiWiRztSBUpmLx",
  "key17": "5DFDGUKPwC5qBuL3s3ERmP8eQKGzFcDEju3niPQrgunaWYepZY3P1LhnbeFFMCfzpB2CJfS5JY6vtLr3ouQjodb5",
  "key18": "3WKBwCeWxXJjdBLQVWkPNoziUEQR6pPQFFMHQCuGfUpZQY6YufBDRP5GxFPgWAwgvCYtAW5CFNMsAysd4mjsf5Wj",
  "key19": "3NeTPNf6ghT3PE1VDpjw9HAVX874faZzbky5kuXTim4j3maKTYxECoe9EkmgLtkohMdU7JTGdhHcM3CwxhodohXE",
  "key20": "5yLMv1jATfKRDUiHrfGiuiWAxsL6cvVWPmRSMV1Bhm9ki7UZvWWUKjKPSnehDAQCsapQnqEH15Nc9dxeCiFDX5gx",
  "key21": "3cGVahQdcfZEhrqCoHnwT5rNivQHju8mC3aoDVGTL7zmnrV1rsvCF7AFnJnXtUwXw3cX2BWi3L7tdAR7oH4C5yAd",
  "key22": "LtEgdTHTWGbeNRn9b6KaQT9D1inb4D8Mt9wPETmXWV4kmvUfkkqYGhEw96bGNDugUxkReVEM5xEYiDQPTu5bYuL",
  "key23": "2XWMtbdbXXcgyzqkdkgjmeAQNphPP62ecw1yLD2ocsAnB9mXNd2cExGxpoKwWJWP4Yn688SjWRF93QeBL3dPaosd",
  "key24": "3ERxfdgV3AiMAdbrqgD67HNS57mM5uw2hzP9cQN7BdsS6DE93GE1se542vgTmaFdwkFcfSV9FJDz8UZ67EakPdgB",
  "key25": "3ukKN2sSUBXVg6gxhhk7Y4WGPy8Qmx5LKtokdrqktYZPcsTZ3ggrgnuUcRDYphhq7GwHCrkMuUHxhr8FppJkiSVr"
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
