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
    "47mQxharHcuRWhG7gMSPnnqcJd5L9u5y2d1gdwXcGEP5zhddrhLNweAYZYnC9T3LDUfNkJNYEWw3er5w9ncG3aGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FumSeLRD9BkiB5utSDeTNAKm4VsrSN2a9KFtHfuhcAQotmSw67bSkwPgBsCP44mS9gkKuNmnXdQ6fd9CrHpatPz",
  "key1": "44DB4BF85wuBdKVEiNnM4qUSEUoh6QytXCWDnpVULBaxUQTtdBxDW5tbqJbmQyyrkNMCPdAWt4DztzbxF4cbfv21",
  "key2": "36FRtorK1S8whXomxpmAiQUWVNRTNcVzB3dnpnUTkzVfTVQNEP7RwS59CCFwBMtTZQ349aJ7uFh1m5yMNfKqwKRZ",
  "key3": "cN5PZY1gFKwytZgUTuoANyUgTDXfVo1JKyBZeooKY7ijM8eSakPu9RBzSV5U8bHM4ZTbTwZnvPZ7E4JeahaHQ7d",
  "key4": "63xbjEL8czfciAmMD6MGYU5giQG3ZM25EN9s8D1teUe8sJGYBm3VUf55KSuH3n6HK7wPiSxb9qVST1DYQgEfnuWo",
  "key5": "2sMzGKCv4FSSq4zEQktTcfpfZsURNDUfAF8GuAftvtkXh5Z2kh3V3T6U5DxVmiJgTjJBFMueBzTZNkUXL4zqcVSk",
  "key6": "7U2PKHowvqXD21NRC2RhZ49Ba8WWZ9qdGUCwH5qVCZK57fDiKPW3R8Pp31iHArmMuakJBh44yfaX7UQnykU7LzF",
  "key7": "45CFHsqvEWAGVkQF8a4ZFxdnT7erQqj5bD2pMhF2YCNVXr13bU1LtMXGhxhfDwuVCTMYUJb7nYGf7NE48s461xv6",
  "key8": "67HabiHFLDFVz8uvQKWooL3D1mwo1NCt4MN3ZsV7vDQUWt1KgsrtAGxhdKh3pzkdxqCdvHz5BgyBpkNkpXKMN68g",
  "key9": "5eHbwzGXENFzi9ETm2JCHS7QqGtsWgjoZV7kJeeLSjogNGfe8pt94e8jDNR7pQsukpv7zTQ2bWcHESuQKv1GD7ck",
  "key10": "5ENMwcQoousxhTX7NQmyocR6uQ9rrvXL1MCv4NbNW5AAHQNXiET5VsScwpdaHtELGdZz39C4aoWn6EKjzxCDPNpx",
  "key11": "5cBcfB148WENDCdoVerKr8NbiBzPgU9gKPswjmUiLQ3tjhLgP4fc5ogyrRUnMC5eRCwZz3vGQ8dcudoNjCKtLy3L",
  "key12": "LMtdjR8arjUuoZoU6S6SyH24g1UAS9hzHyhgyZobFdH7akpRHDuQDaPDqTDLFYj1upomzscdfC1vZWfB4QGnGnn",
  "key13": "4Njfzwc9giZmfAptWKpvYQhoJWzfxGBCEvYJbrRi3c579t5W6nSJc48w3zp5xnoqpkCuVQKyPyAeXoigjDsgGi4Z",
  "key14": "65NChhzDKUDdd8yvEufhvuQw2TaGi4LZ7X3mQCiVTdhwmknFjEPAjMUexF2YWC3g1E8Y2eC9PTgcb14QRCHjshUK",
  "key15": "62xg9eYAcsuUqAPXvJj18uLBT9B9wfXSaEabW92VBdEYRcfPwSc4LzgZUnQQt6iq93Z3BGhJ1vp494BNeZhRiUsR",
  "key16": "3wE2xfL8CZP83mZgY3oqqCWaaDkgYVt1fnFQ8Rth5YAFkRSCrNZe4wzXBbQbb5vLeLHffzbpSZXFvZHMjJxn3Hb1",
  "key17": "5cQTEweXvMRv45XG6j5fuxn6uez2pq2APRyee7P3VAsKdVzk587wrPyEUBYj3aqLv6tmLoXzHcscBTTk4qvwJvxL",
  "key18": "5o7vGuR7YBMX6gCyyuTjXWedbhkfwLTtAcc8V8wygk6fy77wt5mJJUU8MeuhThAGRgAz7E7A5j4ZvWfXvqV5o21e",
  "key19": "24eUDmrqDtWdgfA9G4PrMcLUH7vJdsGQ8rgkC2KNEY1NC8FtSUNfxyVdDdSMMDmUAGLeh74L7hJPf1JiNAMxHByZ",
  "key20": "49VoyQmFGa96d2YfvEsh2vwXMzHURGbp1FujRaGFYbydoEbKSawokxJAXpaAmEEedmkTuuDAqAhpzDoFB2GF74f8",
  "key21": "2GqLcMBeGrNz8UTAKzTYBkSDSu3WKL8EkgTmhvW39YeZH25HUDqWALvJgVZy3mqqR2HwbzeTgXP43EPXLe9sDgoA",
  "key22": "9ZShBDon77VV3GUp9pa6dBt79MWDtCBdHaFHAy3rfZggudgKkAbMBnjHuEqRvJns32CJjFbZShbdeJ44NEq1SpM",
  "key23": "5XsWQCboJqVLExPFngu1KNyLM3W7kpuHmBLGXXSCuAXbJtxsR9LHDoAVziUgtMGiHdM6GRvWQ2zT3a2i8wx2sVU6",
  "key24": "4CdfUq5wntpv9iGxsd5Yz6GCXVpdfgLZUDWuAXxJixJpunKSTHoWCcYjf8N3XrXXHymp1vEVB9H24tRhh6nnG6C7",
  "key25": "3TjcDeaHJj8nJ4f941TiuXnY5ayoMDdLQSbnD1sTc4uZPH3AYRjAGzmGtgbSUNDYYwi9boQ1dKNXKNkxcVmRFWaX",
  "key26": "4vrh7su6AJQt9LCLmqMMmyeKUdFsDp4Fi9hV8AW7SKKm8RNXj2878R59PEgksPWYJqzjg8jNbwnAt66EEobt3sL2",
  "key27": "KcVfKTBqGxREYd8dohuRFG3JmbgfwSNE4XqhtRuzFbWFeQBEbmwskjmWj9Nsdt3psDGgpAWcGmr6wgzs8DvfdDj",
  "key28": "2FpyshSN69CnVevBXVxMUcRh7f2V9MfsDwUenzhtYtYuNrAdcq9wmxKUWHz6pBuWJkSTtD3RacZdsfCyNn653F7n",
  "key29": "3WWhMMnd4uU5cn7m3M6heeJXXygJYStQrJmEXpDW8ZnRhAw9BNHEcf5akotydqyG7D64atmE52U2n8YhonkG2tv7",
  "key30": "5ufw2eZ2NMZByBtGoYXW1DiYaUgn9iwNUJtyj8U5UL49dwqxMMfMkEAUmE6eG7vN7GszvDEdbx9suej7x4EgAxRC",
  "key31": "8WqVSSJnAYAXbAbhbBbocPSZ11iUNoi5mV34Pks43aqfPYMx93ceWNPThn6jQF8W8Zd6skwMD1MSXBSwTbvDBA5",
  "key32": "2SVz7Hb54NTEXBviPaPatumS5DzYBAFc3wAmc41JkXUjzV1vHxU8cpmMFKmjwKktUMBzsQbpdRZzLEBhfWuXtCWq",
  "key33": "2rVAinTNHbG45zviBxgABcFvz64v1vzVbPRgjFqcgzzVBLLCvLLYtGgC155Gu4B5f91z2FzhKwv5VhNQAWXatpH2",
  "key34": "4vhtR5CV16yFjepeF6hUoejC79yYQ8Ny8U6t13e93DerzMY2dmDtigKdm88pt2pKNPnbzuELbxGeTuqHQunhQhEH",
  "key35": "prZnVCsG4vFQdFTFWwZ7jz2dthAfJMwDMMZs2d8yV1XzKLchH6SHfAYbPPqh4hRJ2D9rsz5umhJe8f5zehdCRTP",
  "key36": "4bFQV9ET7FNndZL36rL4mSykKjox8C5G2viFBGKWkpikdmZXddbMkv7joHanQ6WSpMZxtks3yQjMeiEtvTcpwPDQ",
  "key37": "2VoUo2886gTUwfG1To99usJHRHJJGfWPthXQM3ew7FsenvMfYa7ct21WfQFYqDDBg1yxoUX4qCKpNYsD8NiRnwBR"
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
