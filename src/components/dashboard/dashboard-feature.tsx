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
    "27K3SH4mfn5Z5qArF9yJ9zbULYTETTRa59u8D8tEmXwJfWYxpAKMxdPHQkTqB2FTk7NepsqQQM9HbiiPSkaPNE8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59eR4FWQrmRsp9CL8ETxxhP788Zdug1quxL9vAeWaXygMnMJ2zEV22RA4U8drAEWADbkUSPz72vKxC264oN7KSCw",
  "key1": "2S6gBffN5QyZ14gSMxKL2XEQBLbWXVAbapTv1vrzaiWkV59JuLTVBEZmJuWjDBHrJcg8ujgCXxVggaB3FWmDAbFD",
  "key2": "w66HHFj2dV8sxeyFrwcWp8BvVknQqgVfUu2dZMCc4UZYnZP1CzSyCEcfQvXv5jfvytYsTEixj9dwJ5c8Nzk5LR6",
  "key3": "22RppJ63vnkFUyCEyLrGzGQf5Ejz5Q1iUvxRpY7yceTcAAt18jEyRQRwukqE6bjWEcGqGUpHaLWZ7NKXshPgVCSo",
  "key4": "4MVeH89XFQt9PZMoKhP6hZ7inpEzqT8R2Vn7iE76KKE45hwma3YuJW44TfS8pmSbLEC35Hwoac2igfZiYGZFmMXY",
  "key5": "654nzDthZsFf6rVmbHFAVGYBNid658DLhyttHCTKG11PBePm7mdDfzLwWuPFXVCHRX643hD5GPdJsoDo7Cnzm4Kx",
  "key6": "3vzvUyzijRzNvcanpRuexzrPKcfDsVToucjYvYHwjVNdyFnR29b92DaKxpVzmmFduKCsuHt24d2GUt2xq4EPSBqR",
  "key7": "3s3qaAXWdGGn3BZthrozbosVvQwPA48sH7X6KWsWwZB6DpEnoykepUp3FrmwbkD1CEvB3GiYbzovfGSio2em9DwK",
  "key8": "5pkbYwPWEGAt53CdmB1UC7QFYMLi97S4HjsgbzXbUC9ZLNmTPoKJChQiSLZx1wyg4hmVq6rzA821xSBsEkkHLMAh",
  "key9": "5yViA5Ui79qkJRcRSgVWoAHAw9U4uPS2qbBFrqNpeqAJiU5N3wKXgStg4huj5yxnec452dhaX8MGnfk2DQxDM84v",
  "key10": "2J2xBtTH6X1RY6tYeqNMHvjvJaoF19VUgm7vsZp427QVQgPiApp6KQi2uVS9KQ1xr3cSVb561Pazpb5j8jfRYbpT",
  "key11": "3btHrj8Gg2Ep6xCbAVuqSPGn39F9h8dWT6Hc4dBqiCbdR8QFp5vhUD3eMhFnLLQc9Ge8MAqWSbkGmizv5YiFEeAG",
  "key12": "27YyU9EN1bzBjE1GQE4dHfTsxpxuheEQserUq76FLhRg7PQTHzkRwXY5gAsL5CtFJo6qeg9Kw9gxVXaf2boHx3AV",
  "key13": "2WTCRF6SoSj6DfDKQYmmbc3SfpMnGqWksxfkPQba2bkg1yYH4AfZFx3iThwm2KVquf65xLH6uxvDbpqxrxK8DjwX",
  "key14": "5cbT2Vjh4bJ5hzNP9NBbHeXaoPRN5u15kkx3rmwXRq5Y5KyLuNEzJjMUQ2o4KqQVbetniBuHLPiNtdkv3PnahV3J",
  "key15": "4Ac7KxpUiPk4tshfzU5TnCCmoQeXX3zxtfBPxkGnKcP9MePkei4pLFYcJoniudWy6DjtGNDzXfdcRByJqR9jZqsg",
  "key16": "fmFaqtmaaQtHhZq8R7uVCQLM1FEL31XCsxMCKxHhixDwMaM3bbZn5J1eMrasMchFP6Nv9fSZr9wX9Go8zHNCjFP",
  "key17": "3NK1LJNCok5bTe3Vi2avUbLUGG58TfUC86VtRum6dJPgU4BwcVTig6BjZjj49oHSymnDFbcwCkHYXWZAJpinoLwi",
  "key18": "4yXwYuLexFeYgNjN7eFJe9sLgcCZkpP8xraZnrxuVAGKLGsbCg589Maqjv6mub1UrLtqZ56i4w4T3T7HekFmb9pg",
  "key19": "2iRWtHabzA8YPoeGjWAUrhtbjhZuY54gkZwjozBSyDkKBa4VnN2unv9xifuKZq44iqCKQGgQ49D6zGFojrxT8tZT",
  "key20": "PysKLTPYAjU6f5JhxEguWHsBBp8AUHroaJTENJ5VZudZeFMeWdybRnCMQ8VUuDVsRXjm6i4TaiuD5UGXY2zk9uu",
  "key21": "4xoszKpv17cNbjkYRYW9wKL5TrEStULwisaFt8E4AXvMCTfpuC8cCeCamQGZsSoAS2xvv3oKkUirmUmA1LeCWZe7",
  "key22": "5KUJLrCX67fgfHgvJ7MvqcCUnxfACUgEU8L2soTPVP4WyuHSTXAQhRchx5AtdY4pHvJoQWEJYGQGcQPR9xP3PwEx",
  "key23": "3x7rg46RjCcQxpjTxmVS3pSBggb5MwsGPmx4MbehXA2aBDmg42phmvYRGZF8yvyHtfAkE8Fe7ftv1mDMzPZRJ5z6",
  "key24": "2WHNHWQuXFtsRtz5YuBZPoTxCZrKaUpqAG7tU7MCi2pvvLGJNSajeCV56V2LyuQyNdi8Hr5FToRdEA3fZYCaH8aM",
  "key25": "5doBYW6gGeKk2SBYTs9NqhJ3nyWgm5kKdMz2NdnDXQAj1WaDsB5vhYiHF6tN4a2bxVguQVs9ZEXndFYbAhj4b6oA",
  "key26": "5mdcLwKT6UAvMGKefFPN6Gz8kJF47qgDHUpNCdw4ZeT84DzBCBCVTuyaHJM2JpYBv47imyuuNb3wymAZQHHLWSe9",
  "key27": "FiYm2D78nxeehAGHQzgAtMQSTryhudtfmGDtiHy5Ws8X5eR2LgPACnzFgD7iiw5AmFcAY1ctMiWeaeuhSfg1SAn",
  "key28": "2SAuVTNQc5mSi2yq1nKb9TEAQk13o46qRKh8NGvP6CCK54TdpGfVeJ9yPVa1Mc644qkymiVgQrSpAcuyujAWYMqy",
  "key29": "5j7A3T2EdsrkuwbFHe3gNswn2sRTkTfZvuDn3BY98RERqpZunegz9AK4mdBr17TgjLkFM6SnuNunyoahA6rGXsqE",
  "key30": "3WQ64xkW2EPGc2iWTGLDbb97iEBtQcQWzf4Cfj2c9ndd9ABRhjZb55EL8GznV7Sa7jrmmeZR7LJzmHrEKz5UEbZK",
  "key31": "2he6qWL3kvVxkT3hVvViVzVYvXHar22j1b5VCFe4UjSeEhF6xTPrKPKb7THBKanSPsPtQ3na3frkjKU9XRBD4jtq",
  "key32": "3ixi1v24Bu5iE8NpPEifgrsdiLPC8FazU6u1PTs9duAox1VKNLWwkhFcPNgZvFRDxmsVmBKekPb5WZ4VnRAbHTqT",
  "key33": "5b5bNaMkABYXgJYq9anCYwMPbZt5E3YBiV1tZzojwjfVAL9LvCrGQBN2GHxdn3KuWEi3dxQrefEFTLpu6vnjVkGF",
  "key34": "4d4PUS3Qu5jYJ54eTzJk19QVQSay8B4N6Zp6rVjUG6ECKVdG5qUquW7tyhxnDQVKduA9rS9EuTmMWzJopU7grwyx",
  "key35": "3KRXRYzwhPLRXgiJYhXxyPt1thuPqfGuSS2RXVhV1BSJSn76t1HraEnTs7iovJr9JWcSyTP1qcaofwd1K2n9XSoo"
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
