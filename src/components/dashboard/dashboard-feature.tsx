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
    "4zNik3D2VdZz5hEVQches5SQZA5DdVM62GG9sPcvuLckhjTbtNcqWv9QST35Q7mghu2pZnR6b4pBcdBJTsy24yW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDNautiuzEKmtP9iVp3nZVQ6NLCFbHssSFrZdWk5UA7wyWDFqRajpNXu7wexpKuCwSydsLhmk8nUCVyxU69k7qW",
  "key1": "65bAo6gqAmuq1VAVyMiKgAtiZzP29yoJt41qFXbqCXJndm88CQ9L25L6bF5oSUWxRrdLbkGfkitdqeGNb2bDu2tb",
  "key2": "3jc9eijepGybFACZ88RiEjzC2AJPUorv7fsyKsM3DCVUk1o7vmZgSugPJS289J8EYCLk8Pir3S75T219GNmQA9qS",
  "key3": "2xFnE94rdBTd8xvFS52YBKHriU5bpGREpS8HdArRRgqm8iTyc58ZHhXmTEbdeY47DiL1nD6aKUUY7q3nhaJAF4WX",
  "key4": "3Q4zd6TboqM265uZSdutpQ8hSF44GoX7pN8hFuJJzXNzEskG1aj6YxB2qf1NJajNorswAPDgTnp9CsNsE2zRje1X",
  "key5": "49SdnjyYQjXyrC354PpzuWTLuGnZLxCjawVTngciV62fezyZXbc7a339haJvzw3kfDLFjfoT5QGNdStZhca77Uxw",
  "key6": "43AQnDz6vtzPfXijWrJNExqLzqYunXkG7QZiWVM5dKAJ7KvuSmrC3G2Leqr6suQsdRGUCLcFJpypYiFFhaSX77BC",
  "key7": "3CzB2YzfVGG5hCHZQk42EvZ9Q9e5rNY7Fhsrjso8bXhfgnmC3x2MyDQ7QyCyh5z76Qti8cpkHmnq6v7wU23iHfmT",
  "key8": "2Xh4ytkS9s236cSjsvfsQgEikaY85iHF6XcLYdSzjcvhQ2AuPob7an3cMsgdSbttxPravjfzhgs5rQHnZjRWxN7",
  "key9": "r4gM5MqGVDctMjC6GDHSRmiiJXDKZ16SWpmJLPpx6MhG89EY7c1WfDk5vMJbd3u4eMKCUU5j1F2CBQTCT7W3RRP",
  "key10": "4s7m4sC1Rgj4yFePUNXATYJMsszmGpZPhwCCGuZF1sd25crTKNBn5ZXPuBqK68Ek4YAxzYAEXahACfyZnDKDtzMA",
  "key11": "4NY4frdMyDUkrBxkVNsRfFregszh6DTFVbzfHdp7C5VUuviaCUamVSDAPtHTmhunsxpvcTCamRdWtnbz4cGwhnFB",
  "key12": "23WcLZusPykLoGLav1PouknzwDFdA1N3TUAsDQ5MuKHiWraYAJXhdbDBPktwTTUSFTg3a8dbM4ntDJFCqDRhLpVc",
  "key13": "29XBpsWwk56cd3dWqTTo58pbRP4rcSJ6gAZdg48W6RNiA3didnUQoAWbSkP6wzSGaRXtHJKBUCEioGwvfG1i69KH",
  "key14": "2nH6MPVTP7zy6iJM4SsBRr2ESLth9oyjrz8afKSG4k5QvMxpRCgJDvoTSQVX3b84Bp3APWcmHSPzpFDBxpE44eW8",
  "key15": "2rjZkAcw2QfTdF1Ji9yuwzQkDcLa697NBTWEcx45JxRt4qkmSquVY54mNct28iCZitXDX87XYiUkEhLuJJR1baSn",
  "key16": "3Sg4gN2qGo65SycSVxFJ3rHERtSMqZbbNTk8vco5amVsvTb1ZVFTrUV6zMNRoJwPAxEYW84cbiY9DigJUUptqyuk",
  "key17": "GhCWmKT4Fa8NJa1ca8uRBumo7aE9wY1Rqq85JkZs6G1NRZs9SdcW9uMAFx33FDDhUUTP2S4WxeiXwihQPDQyn7j",
  "key18": "svaqcD7UEidwyMi7KQeUd71UghFAJt3Z1A1shnrA2rejyi3JLeWB4TW1HygTkxSVEKitTY5JieGuzYPa5k1wGtX",
  "key19": "BaSWZped8HgGRugn7go2GpWtfaJcXmdXisuBDcck6JfERiHFZAinyUFuwxrVT1VgLXgdeLJUTXrPpwWRoJoAkVV",
  "key20": "5LBwXnqquYLpnvATt1D9D1y6fuT2HYoYm6HeB4ZrGg9Wa5pVoxqrHZVf1FanS9SW6dcqqbQMAY6uhbKF4fsMwE9y",
  "key21": "3SkSVPuqHKuR7ZqYXnPJB85oZ4DZtYS2Jk8nzbrWbGT4PQBdSMiURsdCpVAd4tm5TSwx4VcMGkYtJosMiFAWTsLo",
  "key22": "3kswjL5z4qL2gD3A7LfaX1dw82FTpPz2ZNuMYpjtscJEUssFg2PLKGiwRYgGqV2xGNXRLfrZRb3JxZU2j79nahGr",
  "key23": "5jaU7sgCfm88ZYnW9yBV5N8Gk4V6yiNuaoP11kerViWR7TH8GdCaCHAyKZiVoYdWuagKTFsn2m5iNs7SfNcRWJt5",
  "key24": "4Rvc1qoVq1DEJYjrm3iLsj4oWVHxC9xpmy7eSLSjKqBpbg6NrTRdCHmPEHRunabgzL8XPzWqnpaziVSxm1o2gXer",
  "key25": "5oKtVQXWXzs3p8FPNZUvV8fBUwm6qiQsR7SyTLtw9bUG5pKkAWuLnb4iVuJ6hNqv5HCZ7ydrdKnVLMtRWTSyPPb8",
  "key26": "25c241xBkivWnzYME99JAqYZsfw1uBsxGZxDUYG9mNTLoPtisw7q8HY8mRpetpa3Rx2wG3ATdf3oUGPLuzVio3YU",
  "key27": "53xc2BQfxCzyV4FCBdN4WgLvEUtmC6nadNJFA8UzeFVzycc5vhqP1KggppuHkfrBWXdXQVCuDpT8WYH3qpJD8hhM",
  "key28": "1WAgNHL79CnPEVE88BUz8dY8XhvR2PXVmkBxGfnrdyazGhU1Mu85MPz1AzXN5D5DFHDky7WZnX1c5UbeFVBxMS",
  "key29": "3g5Seuh6Zjez4PB6EGSbjDB3G287sGzyPoBs6qeai698fCB9LQMfmjUQddec5MWKpoUSCwBFHUetuuWrBt4Go61r",
  "key30": "2nHRdutgDtt5ycxZyb6APAv9dzLkFVtFzqfLFu9qUQen4Jag2TASykfzBAjeacyhxq4MrWwDoxvs3oT2SZZQdQEr",
  "key31": "3ZcJDE9q78ADe2ojcQRqwiyQzVauDpdChs6U7fUjgeQbDwvPjRy2PEWFEhxoYUaZx9An5v6t6yomXnp5qqSqf2or",
  "key32": "5nRBubMgkvVdBPBWxjhvsEjQLqmq4YkLZfQN17wmdzjJBKsUQgWYJTQ83UbVShHCoH4sLhEK3YyGzoi7A5b3CP7Y",
  "key33": "4YzmSNnJf54SLG1TDmW9sBkDJLRShkc9E1Mu9GngSufFaNXMGSVQm1sYUTZWtHLu6FeHE2axEskvrynxh18TqCFw",
  "key34": "5A33jDv2YQhoFjD2cu1moPFPUHVLZ7UHixb7CF6BPwifCjxWnVAwF88qHMKCmZ6zFBCax4TNxMemzdiQQn7ruX6N",
  "key35": "2VBPD4uLh77NprqqsJRsKiaNiEedZvhcKPgFZ4jgcxBSg44nyJ4bf9p5LrhJkgRzo7cjxtbYkb91Z1UAq2LcDDnt",
  "key36": "rKa1XSSpuGcLgzfPN4Aze7rvR1QHBpXRYURP8wjjqF9Pw4hmq7UX1S1hBZUFm9FB9dawLVfFbgahP2kkpvDmzoU",
  "key37": "5fC65mahvW2bzXHoTp6ZDJsrfSDaCwo72DHPauMCQZBfnhY77AAbmGfiGPy3coEHB3t7YeniYdMV4wi8vSdw9XGK",
  "key38": "2nkxh4ExVNzgdyjyd3hygqerKWWDNFu1AHG6724gaSanHu4X1djNZG4z74e8ePocuJ7kyt7pnh5dQo2ayAUrZqKV",
  "key39": "2TyFHB99C5QdtSWJevgLL1DcYQUE7GKm2EC91orgHpW5QHNUnC84ecNrs3STJuPVU8nfUxnX7cnSSds6wcEFogR1",
  "key40": "37tynUpGTAjqE1jwGp6VJGMNhajQCJWeovPZF1jvdSfb9ocz7kAZhWhpSyxCFS1VeMH4cDa4PSQ7pZtgRrJddriu",
  "key41": "4B52z4xbfVqXEp4MzKC7GYrbCKxiDSek4GDLZ14vKFWga87wDru9UnaU39wbTMpTLPRCZZiYz43NXtN6G4JVzXvQ",
  "key42": "2xHeiFQkHJyDhRL4maJ7NFkqZVRCtN9bypwKtyYKvuUn9qoHPucJjdVRtNieNhzj6dvtfnDAjPitR1Db33LRzGzB",
  "key43": "4y4tqLPNrjKyp2QKK5nWRdZAwCgZUH5599qbebHgRMbdxzv61tm6SEswEzRWfzvfLbxSZRgLayi6caJYgZFQan63",
  "key44": "egayMfEX8LTHHvCVCvpjNsMyjfCqwEc31yZFjRi6qu9Tjeb9v5aGcXvXmLT8g982tL7JkGz9Lre8yfyKv2nwfYA",
  "key45": "4e3Qc9tT8PSNUMKPM6Ezw3xT2cLJmtA79SncFXgf69BA2s5XwEdFGUevJcf32qDdjpCJCMfiWYLoCv7vGX6K3pPq",
  "key46": "byGQ6eMVxVV1qebjvXDBT4Vt2f6jBfzuWYGo34ZYAsh8qsVpqiTZqQPF724gnivYx7z9JdX9LxYaQsmqtVhwn89"
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
