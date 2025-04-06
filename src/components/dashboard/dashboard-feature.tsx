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
    "5qhdNbP4Mezz6bjugfmyKrehdmhDTXC4GsAEhChdMwfARuxNDvZFgKcKRn3zTTLxEeLDCQ7g9FaB4aWUw4hN3gPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4EPD4ameVaBPDJFwg8Z3ASV569hnj93SCfsBzeT7pLY8Q3J8YfTkTi9mdAor6bVAvLJvuy2g87dJZyse663hcW",
  "key1": "3FLe4W8diE81dSLvUfmv6n5rFdfCazhKCHzm9ZzTU2ZLwkubqfdG73dHvdHCpuuGbPD6tpdZkg9c811nrChxU3UW",
  "key2": "2sGQ7WAPuVRWWLuaU55FUb6R1byzBDdtma2rBHGnb93kcjyGkNg1uk3zkPvLLU8CxhshUfywiPeM1iAH6dt2BD4J",
  "key3": "5dYxiejVhavyezFhiZXemcKVCGpTAhDFDFhkAhDWV2Kj6tc3k9X18AVva78rxNwuzNUKtXVoRWrrVkiFzTPh4PDh",
  "key4": "4Yxt3nV4VGJDzNZBHM775WcA1DANPtU7TZLER8rgnn4qxGdEYng6wBBivXZmU6KZKLuwM8QD6gPefJHc3WCktga5",
  "key5": "5i3kAGznXy8QFijaSpD8pkSFxygFCkeXobJ2Y3CYEZ74RrayVtUwsBdxZnwC2jsM4MWkCWEavZdzrLVD4yq8hv5H",
  "key6": "55MCEYZWSFMPaob1jxhEvfBePJFDe9fwKtCQF9eKz9xpm4zD7fe7ifFiSqXSv33jn5mxoHwJsXJtaupsgZ4DyxAK",
  "key7": "5ZQ3MkLDW24pJpmkmK1ZyQJVRFPqaSFwyqttJ9Co5kVTrVVK9LGh27oW1feHBX18mEUAaoP9AFLiDFvsu2eRvK4Z",
  "key8": "2a7qjfZVTMLodQCJjGpqowrinu1wmnFPYmDF6q4jB2SgQUSvcupL8mkv4jJYyXKERt4G7fKu9SGUDx1YM4vYEzvE",
  "key9": "5Eo8tvp1fjDRJN3cbJPHXbyRqGzaG3mLhRzhiwJYPKVKi8oFR2GRgKta59ZnyzJn2qaXwGeUC1MiPjsujP1PYJ56",
  "key10": "49q8DQjQnXociExGLmyaY1TAUoQuBCKHZg9hCTFVnRZS33ULvxqDz5jfXmd9YB1Fu93RsvNFnkZNig1W5YqP5A1A",
  "key11": "3BDj5XLipkLrZNNVK1kS2KAcs6NF3XVxZHhdjr73fuUydZokrbQVVGpZv4i7MyQyETWBfzaQATivCoL7P98Z4nvQ",
  "key12": "4RNcxvmp2KBJ1KMVtUeNDe81H7az62hp9rV7bnt15X4zVyF52jvBXfzZYc9cgSsgezwa2gwM11aCKdvMCmfrqWeX",
  "key13": "2SZSmgc8cq3ZPnxzRC8AFvB1NzyMVJznDpVyggYmJRUMjQRaG1RBPasRxXdXy8ywS4WQ3pk4QXcXHF1qAepHpChz",
  "key14": "2Zdg6RLnHp9hHvGWJHZb2WVXxW2JQ6f5U9exvQyczJYUNHnJ6fbehBuEL2aToo9auNV8ZpoTCYgTjKyL7eGrfmhs",
  "key15": "64etEsa8QMnPp2geCHUMsqEbUUpkWRKckkoW5vayS4uerHBeNeFBxee84XszNTudV5pZf9huJfovwwomLBsJwp4Y",
  "key16": "53f3z4FnBN7dtR1TJdPPHhJnYRmgrBHT3aCg5KefQmEvPBzqSxsvnnZS8BzRDfvzRzsk3LF9K7Un2GCJGqvgqxFy",
  "key17": "4vzTb1TThfMDCiDMdgrim6SfgosHmw3PgVosTLyUxv65DD1Xeo3scUWAUJbXpp3uuGNsMBhUrtsxKorBdKJTi1Bd",
  "key18": "4BuS2DL9UBJG1iion9XyfvyzXMApCpcAThByyEJazFZFnwME9YmujAZA9LgUo14bUKBzExCAcvbrHEbcby9AjCDK",
  "key19": "391Ujceq9kjawEQGup4eDBhnAeZGiDVQNAZvDeP5JgAZMMAcoNHtWa5UWKG3A9oaFhEYSTpKLEdJWD3jiaxH73Qv",
  "key20": "2ZZHw3mzBqS4dAXoj8Uhu2E8FCEpQRMTTQzH1RX32tvgzxekCQfbT4DNUqfe6jCmCwkfYpy9gfCPaUjxpSjhprKG",
  "key21": "3EzeBegb4ca5Xw2cCLYM5hf8zjC5pZaP4TQh1BxHenJfT3FPte9nfray3ryWKRgdz38hG1VUY66qVgi93jN64xwB",
  "key22": "17UAMvRVSnxyQe1j557ctHCcfv3bXLxHmDVQr7vZyrEi2MRPwyEYktob8SHP78VsNd38bn2eTM2Y3T91hjJPvbY",
  "key23": "5GvqFDg4ozA4m45XSWp7JBGGkNPdPxaj3jDFLTdM1eQ1JHb2JztgzgPzGRHiuJLfjLbXheWEaJgPve1XmXyu8RyR",
  "key24": "4nxNdBAa5SSsxKoaJM3ThNDD7JAPiVkawfooqWkieQ1JyCvArn3riamUyfLNdbj8V83HAy7kmsrRERzAW56pWKNh",
  "key25": "1NDiMcwawEXQK3QdhnxMHp1eHKsMYb9zEqKnDpKWWjeQNYpJCN5uqkWLuJTxV5q2bPcGDmr4zNkMqyqhU2qQtEy",
  "key26": "3xY7iV2CEjEso2jLHvAHVcbRTGTXBVist6bHpZEg3Zwv8cJoGkmBVPpjxZQZ1mGW4MS5oPrd3xcZdZ3MU8sjwzph",
  "key27": "RBZ9rnaAEDLDFHMeh7vsFAD7kYyyEAd8SgbwmdumRx2UjoCFGwxBw3PwLq3ZuyKotrjdEbhRL1yFFJubWcFFo6g",
  "key28": "3GoB8wMRe1ZqJ4bJmiMj2Q6ZMRM5TMgM3cai5mxnvqK1RwJfBFQRcexms8a6NRy7HytBE6iuH4V2WJjWA3hq4xyT",
  "key29": "41kGPY7qXv9kuexn8pLUH8BA75HDqBar8YnRYffnpwUBBZTFoaLLfpCtSTAsTwdqBihHFGtW17z3esdH7Tn2Wo2o",
  "key30": "3mfuA7y2QGspEvwmPM3yi4hW6rgzg57s9raXTKJ5DN3H7TW28V5uDxvFUqSaZ9E12JZpiqhVA5GyUbB8JMRNg372",
  "key31": "55zG5o8JuYjeVryXW64RuzVLjgBbAaTViX5sDFMwS1VyJvNq2h8bVhujpjWpn82Xpt2pwH7UfGhcSmnaVKzy6qcU",
  "key32": "2xTzuXCMVbypdBZQco3v4Sy27FnL9ckZ7pkdsBSmx15tq2izuwxg7QaCw3gPGVw4kq8rCpA7n661SH5Pd7XF4HxW",
  "key33": "3z6eFyc2xxGVbuJnGhgwGQrQhLkFhdKEwRRgxtkr7PKVRPwLdcQDwctrHB4guN7jyHdy5GdLpoJ5kZsrcbbys6oH",
  "key34": "jSEncCXm6RQL7ZHokSP9cgmBU55R7WcRqxy1kjDrQ2V96mjG3UxU7zzB6yzssua6RzcBsM94YXXL3DMAj2UZwYr",
  "key35": "2gW5sTz7Wk6QbLQZujZKcxs7mSzxYcWAVm6L3yr48qQmpta1jdBqEt2cKM9TSvNw3RS7GqggjyvQv2GdLUGSQurJ",
  "key36": "3oXYTDAvSQ6rQQfjwQw7Qx6nqWHB1tq5EUrQbp1oiA5AjTcdoi4dvRpTuQ4CmUkDes2yK7n8zwTGKSmzU8U8RtqJ",
  "key37": "4TiMhFUghsPoMy5J1FTzQoBVH6V9s2PvXtSmVs8wVibFvC8AxNYW5rd9CVwtfH2Db6TmmPtXrfYah2sa3UnhKCF5",
  "key38": "3G8Cj5iuBcmrmumz9pYX1hwy6kgLSghPQqqMqHgCGC4oYdDUiJbZeSYn4hskWd7DgyPHshkTktHZJ6pJPq2iw1GJ",
  "key39": "2seA8kRRBKh49yKE62KDhNYme4FqMYXEWnpH7JMj7Nrs8auSG972DAePMs6dqnG1Y23ZAKFH7BW6GJPzQXwdt4fA"
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
