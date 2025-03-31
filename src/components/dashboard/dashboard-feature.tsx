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
    "3phssKeeoE4VTDbtnvfLCYWGR5XE7D2hA5jZmkQ6iSQ3sKAL1s16mZGT8rkfWKhfVZ7hgDAm5zAohtAb47dD2a9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipvq7p1CkMttZ3oU3FRb44AKoRBoW9BLazekaYKTwHAMwR2VCkekqyHmXeXEXbFoWbi6mx4azSwxG5tLFjmDWnY",
  "key1": "5keMs5YJTuewFEpXAQMympVZV1rmTKwKhQZnYq2wEZhzTvqN81FXv5Jfzj26AZxSVQ26HjUdoY6LekVFBfr4CivW",
  "key2": "29CXdaQxjzXAGxyRmkzF39Szkhym9iWkSkPGxUcy3xu7Ug3R76crnqFtBs8TdzHG5ZTn5gjmXTwfFGosRsVMT4W2",
  "key3": "3GW6z52STsqR7Yv6cnyTUX914rwB69sNcTaojLNy4au5LwpxnJp93d589ARwBkRynR9qTDs41yzxwRd8SF1qPQia",
  "key4": "56toELxqgJhjqMHMBZwNRUz7zDLLT4aHtKpbxfTXsDRsaTzpCzeYk9YEFLm9kFCyB8qM4D9EvfaGDvshsEyN5ZT",
  "key5": "2sDPsDvBjMkfxzX8PuNnqMZHYFNgrhiJBERJeq59FuNQdQG8GxZHiVWA6pofgWEHwfgmwdvjzjhaut1ckgBPkc9Q",
  "key6": "54LTB7iRCoTiwZGdLCdxjXXbnEiCtYwtvooizM43SWiv4N9xskid51JoodA8TstEBhwtGkUHsNAWySrEoKXnxkdo",
  "key7": "3kLjrBeMhGWgWzEW81j4o5K9WEiGjqVXWgArpDWbuB2JTaXsdeadArgWGR4mbAni9MmJN8TGrgD93JeJGSCjpiwj",
  "key8": "2P94o1jX7LS8HeYxjRBUYb3VPK7ohSPW1o165tet3dhmMsLD36aShLtpuzUMxQ24Pks91ix8oVLJRUvgbyM4QcJr",
  "key9": "2fK6H8DCuzFkCmMat3RXHPFQhhPoRbToLZ1pbqdeqVKbq22M1Eg6WcZFcuvt6uzKm52ikT7yxo3uFPT8BQAMjvkJ",
  "key10": "5QJuUTyZPHj4WwkKjJVa9wEhgqZvM17PmDpSHESo8oQQt3cM2GQNvZzG1xtEuEoGHVZiPGTqenaPhdkvDGATxSF6",
  "key11": "eJ98J8j5GXf2qhGnZH1YpXfpNFmX3D8ZXCfqSDp6AAuSHGvePeJa4ivoEx9QLMhWTJB6V2jTfMGBw9tPrdzBq98",
  "key12": "24ZfbSqZQrL4SsqmsEwJrEtMqtkg5ZBvHFLJn2gqMXtoyJsezXkCNtUAraPEZZmqcEFbSpvwEkeeaiZ9TxgKYKRb",
  "key13": "46rUf9GNg26WUoDebNyybuwGG9gwKgmQWJafFPFdyZFBJZxBb8m1HC8oBgEMBAUV8EXQkVseYhowMkTn6okKCbgN",
  "key14": "597CrkWWzGjAR8H1MPnNinDVGkq5sd4fULTD6uYfTVmEdux1AE1grbAoS8sX9LGSZ9TcEkL2e18bSvwLKAF46hXd",
  "key15": "spZeGKcyh1yaes6NniFyeP1sXsmScAVtz2zC9phZfPT4YJVN9zo6CQY8CDRGmTGm8iFwsqjyT1UhffzyoNMBX35",
  "key16": "5bzAFMzmJ4FEvqwq5gd1b3wPdk4JD1hunejnTd5An8AydaRboU5HaBakGCWQqCQ64toErSqy85se7tdvc8c3MFJJ",
  "key17": "64HRzXx8492ZEcyp6YiguEsVaXRm2YDFCAgtKttS7xAHMNDxnJSxkWr6hMHD8trL8h77MmNjrJwTga8HtjHJz15j",
  "key18": "Cqjc6MH2vJk9FHVEFqRVJiBhrb21d8eduJY7Vm6ehwYcKBDrFRoKiqCeDTFbCRXHd4L7Mb6nrq7w9kA3jVfxGtv",
  "key19": "kxA7WqhKDHpUoFXKueK3HEkz9XaKXw7v4huP2QKzwUsk7TrHKVUCnYvZdEtqoDShiDMnRSKhsyTAhecFEg2Wu6N",
  "key20": "upQjq5TcK19aShHVLYYtmZB3Qt7AZ37C1mL7kK1pZoCkEsjiWuz4P7HrXNs3aja6SRdJb8vzqvPUPgsae45EJZv",
  "key21": "2wwm51NjngYGehoJUSoPvfEUCSRaLYmVosFcFbPeE6Ln1J9qfoFJAwEyb5NsaLSNZD3Rmo5YfgRcJChbf2qqEAZa",
  "key22": "n8945jRhFg9BQx9YA46FN89LeXf2agruyRgwWJdDxjrs3DUTFZdynMGG9LUCTjX4o8sPFZBqdmytZeqSo7LxXar",
  "key23": "4315CorStdvMzEcHkcTN81PjcFLpW6rcyz2KvYCvvFbjcGz3Zjuh1AcwCnQL4emzvjgVu1VTC29yHJ91JWmymXdF",
  "key24": "4F5fEdLKQhMauYKsW7FaXojzVysTwFwquJsJJvUsthXh5m8XsRJvtKQ71iVrXgFP28TB7xQUAHy5GVup1uw6X24e",
  "key25": "3qX8cPevoS8zn4rU3ku1pFDwzE14bU5G3Rb4jSFJnR3ZG2FP8Dg1RdSc8kGPxzc1kA2SRZojkGAmdthU1D2Wux6y",
  "key26": "3YAcQNogziStigZ6LYjij2WdQBGuz45sBet9LQv1G2LBbtjv94zL7unaJZQ7eALsSN2bPpk8Ykh3TXwfvwP3m85j",
  "key27": "enApDkM5sFKojsscghDur784JNk4wj2PbFioRGuiGDPT8JtoUYvqkbeM9Upgzjy4w8BxVMjzahkH5vAJ913Pr2z",
  "key28": "5tNK9STyiBau4F447zHfACxMSh9Hioy3HovTQwjXxgcfpmpcxvAprmujfmj3f9prXJ74YyCnBRTyo2cgwXb7gqDD",
  "key29": "24HFeu9ZZy1xVvH126heNGJ23TsGVS1TS91PzCMD9GjQRvTgdLVukxscBGFkTTFSuN76kKtMQRjA2qyUFfoymfJZ",
  "key30": "2MsSCGuNhX1vPdWjQXVi4fMo43DxX515BhwavMUgmxYy5sDdE6sArWCYeNa6FanUtnDTFiqpe3WMkCvNMk1JvJTh",
  "key31": "2XsQSUgCgx3JG9LNSZwE6VsBmzCF2AHgLGUwzkom9NRDW6SKpW8UP4LXxjdwwAgrP4RRJWrA2725CVmHs1U71zzA",
  "key32": "26EDzQyi1kds53GPduEVmeFihiLNGrMETSBPbosRQWCnMVpZFcVco9hm8KDkgdPwMcVZyQ9heVrcZH1ba5wsGjfs",
  "key33": "HFtpLQsC3JdGiuwxfzwehgkqRYtsHDVWDHudeTVRS2pxj1pmCzUPjSNbTDmZfXqqDy26XtffMiauS9uPYo5HqeV",
  "key34": "2Sc6T2ht5dQcAbZwCXw3dxWJy7t5ms6gvShUzYSk2fZht5mf447DXMzFCX4qbACn4oREV428vaAEsh9Q52dXdRZG",
  "key35": "54CmxkVHJnKiQ5wjeaAHbyb7uT9TehDUav83VUuvjkwCCPbWcoDwNVy82yKHLoNQwGjJiLszfVNA5rEmjPnYoLCC",
  "key36": "23M38KS5jFXPVdg4sKG2hUGiG9P9g2xzpzNgJgmy4BKZvdhJyrMnKN5JquT4isMmn57TZdg4qo5X2PaJYPxmR1is",
  "key37": "5VixbGrBBhPDEoGei3EEL8WtpVZbykzpUEgVjvguUSVqPJbxdJa5CFKSd5BiW4Jn3ggMLuGD4Wx52ocAZnG1nayZ",
  "key38": "48ymqoRVj2Nu4dNJS4rrRX7TSCPukFr3CzdAGNiGnYrboG6oGNfX6Ck4Y3Pgz5RcicKWTNtRVm6AurnVYAhvNMcq",
  "key39": "4D3p4f7q29AdDK7bWs2PrbJuXrDDit2fESwb4UGKRZmM5xn51V2uC92n67bJWdhjT31uph5LxFgHyKZPjxtWRW4F",
  "key40": "396gmVWcsCj5Gxbh6Vdkh4j1eEbb3QpYbRomXw5j6vdbvf4HsmQuxPZddiPCx3LHEhnpyPqo4Gi6ugu8pnXiPXRp",
  "key41": "62AgBRYL9KsVBCUXw1u6QceHmSkf1indc6gyc1zqS87zBfEkqsz9LwS1Ee5h58aKL6RpASYLBV9xVLsSUwjM9PgU",
  "key42": "RGpGTgRdqoK48Sn2xNnx2hP4BgymSr6vGJ2ARBEAaMjcC1eWKViPVh1wH4iemDJx2c46wJAKNtq5HYMEn5XE76J",
  "key43": "ArLd7DVJhNquKzLyxK95FxVUdBYyLaLyzJ2QDdQZS5Bnp46c2jhgrJq4taU2fiei8hQyaDAt9WriWpqHPkDcfmZ",
  "key44": "3HHkdCsxKofgbKPzzo8EAEA1KEDy1P86w9mrQXqU2rvSaVebo1SpEC7ihcc19xRcZFrcUKN7Ya519jbiDpux3zkd",
  "key45": "4YTs746UqJL6ncmX9Bg2Lfcjg5oyscb2Fun8T3z6BF7MwMEwWKbuWEweLCo72Fn4ubfWWContVRVvDTNGrMV3GDW",
  "key46": "2ea7rDBAPmy6omQ8DyY7aSJHB2UmnjwGX2US5gwcbzg5yxdEJmG6vZxsn2X9iWGfVfWUfHHMkyzQ5QCnf1etbyUu",
  "key47": "3Wyb7YX4sNLTgCog6ZxFvfwTBzAkE7bSvgr6oPasb3rmvWuEmhaeKkZfSka6Qg8Hvhdx6PNqCN1rANEQax25i2uN"
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
