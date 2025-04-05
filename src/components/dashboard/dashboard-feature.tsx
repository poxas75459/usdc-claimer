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
    "4WKGJBNnTPkVKKEpBhaqMaZjco1N9w6KAjkznsmPhmPYUjdt3Uv5XMNhicoD68AstLtDB4PFSrAfafjP8A8Akjhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2981wD5D4NCxYP7nRVR6F7QzyhizRLpJou142DgWnJsscaTUvMX8ddUkVzrEejrUAe7YK5Rkudo5iJUyxjyES62m",
  "key1": "3L5VeaZ5PBMnB7qSQY8wmxRsEbAbrgVaY5At5WdZca3oJisGjPUPZAG4Ua2a9GQfwfdCS9KwKvp4fG9GRyBn1MQq",
  "key2": "5mytZ1YmzNEMz66YVXekUBXmLTvH7CjrENTtTSLUAdpjefULHdeeUx7LE1vhHCvrhzLdD6psDrHSYP9UJQ69w2Bw",
  "key3": "2pJFwchhdnZUFsc3ktJMtgZjEyS12JtzfNysPVZ1oq75WePhrjhouQzKio8nyY1NSE96t2Q98U34BDYeJ5phwD5K",
  "key4": "4naqJW1zWcBncvEwqQT8wbdEihqtwRjeDx9nnt56V9zBRUtfGcuZPjVTTrG7AcfxxywtZkKZQ9XpaFpwqJ6X2XSy",
  "key5": "5FPstaSNqA9WufARcArusewT8kHtWhBFEQBdHBQWzCAMQjn9xUFTVFUPWzE4tWjaYunzBiuTrtCB2rc9rK56bY3a",
  "key6": "37LvvbD8AePU4vHFrHuxyWF7QzvkmSg9A2gkRhiv2od1vciyNYaoYedcyCfFeTVRisjhEcBdurUqheZySSiGzyeS",
  "key7": "mqNNUtebuqSFjU8RTRy3BCj9UmP8P71GGZvxxiFBcRvsFZNMqis4PMnLFYKXHAokzF4mWgaW5Ca2kmYFGfanNyc",
  "key8": "5aGnrdTYrEhG6sPrYnJLUZ2waBvGafZw1NAt4kn5neXUMJbqSvhNuvVb1UN1Uq1hfipwQL7hWRYvHbnn55aoiMud",
  "key9": "5AN2tdRhyB5ciZ44MeWoXYasGnTrLMq4q3RJSFjBRUnoYRn4sWGwpRjbUjHRvup2ogi26uoufGBqjKVVbXiZGdmT",
  "key10": "62h7BaTkUpQpAZSxZhVNdjipTps5ZYYaTs5As9sXoT6AwrVKxYJ1TkkaFBqBBtd9YSqdK6Gs2vuGrDwASurikBpo",
  "key11": "4zAtu8qDvA8gKgirwZegDqFadyKrWyS1FEVEieKZHsYL3XfKvNqpkNSyBc3FUmnC1QHLw8Bx541SrtAtSXaVG5sD",
  "key12": "euZcNJ8PbLCJc8LAjoo6ZrRzpQTLqWVTG9spRcbaVrpx9qeBVKFYTqxfKySfLhu2nnjrnz2Mo1d4QxB3jq8f8pj",
  "key13": "3fLvvu2DbpbUQ4qz9fQbs96AyVeBV3Hgb4DoyiAhYfkS3kVbWL6shzFoMQsTeMHF4zDB5Sh3jRDyBCcM4xtA77SC",
  "key14": "4MT5MmarUtknK3rjdDmgosEfJjASXxN9ANbFETGqckmar7QbDUaa5bj4d7ZK1pypYdz1iMsEr77D5cXvZPaRDDSE",
  "key15": "3XYfyTbR9EPUXkAZyq14fcBdGD7MHGSTy5DbVcLCiHbDRebZdGVuuR1x7uojRRZF9xwbuuLVWbARmgW9oRZExvbu",
  "key16": "3x8gH3Eb1ukQp1Z1ABCPJVJCmRXGCGEZzwyPhEAdd3sfmYTtticRBhQdkDkbPpsLUwX8N2TmDtyXxLNbZvWV8rgV",
  "key17": "597LUsg4qJcBWyGWWZKQkRC8xXhtVTMRffPnQjtHxU5rcRcpxQ8GW7e6AW7ZGzKLyQ5EquN6dupJC2SmPdBpBPBq",
  "key18": "3ZgZJQTjD9XT974X1bUdEXEaV4PPUk9VG9eD8k3ofKJSKXHSBAdNh4cDnv2ruqos1awAnsrSXnwtnx9fML5b1Fme",
  "key19": "63Emz485djQ9w8Umx1Kx6FKxFn1ViC62RoDTLq13TvPpqedeQUeYQYCdpMrgu7G68ca4AMUA5KBVf2faQPa2YNxi",
  "key20": "5mi3c1jb5a7pwERNrYCK4asVB7Lf7uf5FL1i87SoWkdvU5FMCCs9BkfnJhDnpZMSjqj9izQ1bTUrr6djkuCaVVcv",
  "key21": "2qUY7vZ4srPt1ssZXV3RsXF9sjctLg3ZiJvyXJSjcRrhwvjCwKez54VxpuA7YqJicwMs5x4B8FmRVeLsvB9H3J4v",
  "key22": "523TXbgYFwCCXtg51oNVcBnKhsdDL8sezXfRUoENZTLW1uUYGGbMWc1ycg1iSHNZ4LiVnUF5dBsBARkrwi8Wm7b6",
  "key23": "2LQxBWPWtitDuiLVqXmcySENn6ZohQ4Bo478ZnC9Dpi7FD1Q37vKbesD1vi6Z7k5i8DhJ4cZ1zeWrTcLM8Wbjo8n",
  "key24": "3dQrg3HU3dkVKXcef513KRTkbxz81oVcpY3hgU113uyjuNPdno67g8of5rR7Xrqo5Ci3VhhnnNp3rkWASvCq11dz",
  "key25": "wLAzecahg7TmCHXTf7aKZjax9g5pL5KBFqH3FgharTN5xd2pfncFLUekNvfUCFC22DuURknBm4zMx9hZY9n5349",
  "key26": "5aM7hTxzHx5TnfXxnXGMfSBJrNyRegM5M5oUHrBkam2q3ZTCfv7rBpJm1FptR9DGT1Bjvftm6wRW6u7mjqu83s9j",
  "key27": "3aDSu8CBPUCKgdYszHCtwVt64FWkMcjxaR7xkcdScoJVMWYxJpq3fv7ExFavzEq599vVe4JQd5QaDo3MbW3Nd96k",
  "key28": "3X5Wh5TUFYz9iCKqqvL3BqT9iU9rHaCohgXLu3rWV8PNWwWwDhLAsjMtbGhg7WFfRwNREUcfHDuPdSbG3SxXMc5h",
  "key29": "4m6StdywQDd67ENmgmpxtn5KUrUG2PoDWKMc8gZTRtmyxEqz9zibmVEcJVTvbaDHezvULemH6L3XDCG5oxuHJKjj",
  "key30": "3Zt4pMmHi7AVD1fcaBvfaimngSqcfecPkmj3z5itkvuyAnTYDwh3abo6Gr1GYH3WALvCiUFfs7mAugA9Ln1L78TP",
  "key31": "3UZo51A4QxwbopqZDZtq8GzXTjNkxWwcK9YA9jShjDeWShWEk8SbZnBvqGzSY28LUCUFeSw1ezv3QEfnHXCyiAbN",
  "key32": "kequAa46Fro64LqzGvMD2LVn2tRZNndXMArTeuqiRKpJNqhZexYYSL6Dc1UrJvqNaSK86FwJLqsh2RHzC7vbR8g",
  "key33": "3cQCQLtAozz3kGXEKW1WLJtEkxTh4YLS5ZCoqouC3bcvKwa6wqkqmjN2gJCWrqxG3bSVbp18h5qPE4h97uX3hwrh",
  "key34": "6WyeicdgBZhmMLezi3PVcCQXM8YexYNKpDmUkqurVfCfCYiWjF4VSeXWMPywXinvchmdjHurYt7jmJHnAzY8gtN",
  "key35": "25ptWJ5GbeLAmEx1Fh5WshHf9Zh3wdPjpdQh4QJgdYsYBV1e9tskDiQ2GjTdt4AsqG3VzLpBBpLJ9UUcuCUBw4yu",
  "key36": "4pdJMmtWBtH2kG9UL3gvdZUhXN6XmF1kC9qohTFzP7BaQ7hHKPQpELQgF7rba7HQdSG1BezuFbcW6vdZHKKKf9Xk",
  "key37": "4exinyRkQCev9if8YipuQhyezPzEPtfQxP3GY1gCB5fK12b1S46wucY6ai4CnCJ3iu9FH5QgyCWpcA4cN4QUtURn",
  "key38": "4QS6sktW4bUuwZnNYmZrzZWbLZi2iHyw1JKQEgB8bJADB5eVS2hLDTPMW219JFYgLbhYFNB8gFoZwkL1SNJqHusF",
  "key39": "4mvzSETzRuNB3SdLVr5BbTueyLn4ZyEaFKSLRvJ5oES3kwaziwsmqpqxMi7nQp7Emct5r4eTCbkYX9XmwCpjsjH1"
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
