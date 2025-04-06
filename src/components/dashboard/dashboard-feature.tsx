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
    "2EgEv8zY87UUn3c99v1KQYA8CtiJRJCypX8j6Fg9rixKujmm2CxGJpxGv56wkBoQLrBcVW4cRAKadvZN8cdwne9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vzn5N5RHjVETNEgj68udCZVUz2Y726FUqXEM81TpK4wxho9QXDy4gg7aphCM22u9FjNkZWMNLECwyYazHxst7Zm",
  "key1": "3GpNMRR9euwt3fhAvUcdAm8Rkvh7fZJbzoTYFWCfQLd5TUeYpUD5DL1emTCc2dkohZTj8TqeUi8WpavjiHtPAyDC",
  "key2": "gZJFsRjGqx1RLfvokN79ZmaUAMcdS6Gp9mcwS9CsD8VaJjgLbYad1dDDG8R4BHtnXHaWHNjPufR3AsnfCYvNriK",
  "key3": "126JvWuG5wv251amzRdkR1dFU1GTMyenbc5NhWwzTcexLj4cUxppZYQHjogkvk8r6HuTfLPRmHmfS4u8ZqoASmho",
  "key4": "5MRYEaXwNC3b7LjZ9xofREyUo6Djx3ksGes2LTMVvoN79UnRsevawYkShsJsfaCVtC8gGU3vBvhNDSVwyzujNFPX",
  "key5": "4CNbyYHh8qjWVVbj2GKAvHDvLyWNhXn8LNCveK6mWJRLtjH8HajQ6FhnTP4MYx4opUz4pNzGszWU1Zqs6ZMXDDvS",
  "key6": "FMhwLfpD9CCAfM6KFv37Ng5jv8iF4A1qChEw3CEYZKBjCdEs51AmPDusMBj1XsmWeUtkPYHGnfRLAzAk9N1w4TC",
  "key7": "S5ZDwDXhZzBHP1vc2VfKAJWYyVrQRkcadi76GdkXwFQwzdmRMawweB1AD5WEcxaprPuBd9LbciSs3CqhXAuwaCf",
  "key8": "2pkEuxur9QMdeS7eDF9LUpjKa2HQqiAsVGqe8UmBzAMSs5pM551PQcBDvbK8pBJuSQpPy5Y5AVy6qM1j63zySgoK",
  "key9": "33hagUqTBHhuoTimvBSrguG68ZfBJnsiBDgvxFUvWp25AYBDr9Wzzw1NuKF8rdw6yT1nu2QkoRJt2hrBatj5DwHT",
  "key10": "3W9LcQeJLfRRyo5XgmUaifPAxg2ogrkJey7cV9xMYrBurnWFaKdgtWAcgaFEWn5LT5JbWxwEkeh4yAQkYUEmKyog",
  "key11": "3cQ9URedYvp3GU8CHQLdg2FVqdDcHyztuZGSpEvmiyZEJCDqBxQ92FUPJpkPyizksyGKD3Abvc1oLb9bRNYcGQnY",
  "key12": "2NbArHdC6uMmEyX573QTDSWbCDe9eJUnDx2QSyURDmnfubdP53Rsur2Nxb73Fv9nfeURrg8GiHSowo9jNWwJHyfc",
  "key13": "5PaSTBggZcF2ikaWK34esKE1vUCiAaVwmctoKVj7iLVnUkrQdEZvZ2Nmdom5d42B6VeH2RMvJG1L52dMbKQ9YxUU",
  "key14": "4DHdY2TrQLqdFmUHDyZodB9GiDbXg7594JXnNjpHrsak449mgW4rz1V5PokrBRxDzh91uZ4C18w7buMzfkxwgYHF",
  "key15": "5uGci4dkY3afA53zwHe8shvTMdqsvKjZcFdxgWYcURtJ7SAaxSv58ZvDGCh42LzRhkz4CL5P95QTJBBB2SR7e8BD",
  "key16": "5rofYQEtfbDEoMoNmww2N8supM51hqk9q96JQKL9BdMqmpnwheGTcqHpQVd57A1Kxfy4aciucTMWavR2sG2KDNpd",
  "key17": "22ZYvkiXwZbuaZqF4xdZUXSNjZHi4S5BgirzuceZ182XTSXnmrm3tcP6weZF8Rvc8SfGBPfHprsMNWSqoZm7AMSn",
  "key18": "BhyH4bwzr7Sj1g17EZkFz6Byd7Smyhmhzn18HDBg3PUPnfWJ2h7MSDQkncJY8TZBczsomu4DuSRKwud7TrAeKiA",
  "key19": "3LthScwn9teuQfJ12zi1X5Awg7ABvdqxyiKZi2ZhtYKSR2Fmx3XCv6iPSJzuSBCxcbiJfwyPctHduNNMJphua6ti",
  "key20": "4DV7TF5qhYDDqCE8RgwKbZp1bjjCzZvkBXcDHnnqSJPUrZBJZviyzw6vHSKdoRXJdGo2exF88neRkynsJb9FJqMH",
  "key21": "3Ngv1CnoNoZsKA25MeMCoFiUoQcsP3JoPKjodYezECA81u7jeGTLLYoo2LrViT54U3svVdXrjGvrb3zonNmzxuME",
  "key22": "5UzJmS4ZD9q3JLYioZ3S3ZZRnESpFdCphnYkY4kRJCCnZgiWKE2JokZy6t3bi5D5eDEXHTEaxdBxRgeBcLiEQHgM",
  "key23": "3Sn6VV8NoHSCzRCxkEZVg3G2ASkMnC4FbGLPrF5WLXE6rstSVSQ1BCEPT57UsrA6mx3QKJZ6mDxjBXwCvLzwkLm4",
  "key24": "2RicquMyvK2AEiNAp3HomnMZjQZM5JuZFmzjcL4VzbTDoNtRisp3tKMq8X6P5rzQE3RD56uqLKcTN38BD1xSy4Pd",
  "key25": "2w9HKmsn2ZobGRNgQxdRnRW79uPCtmUtPpEXSYA3P53nEC64sF731Wx8sNF1EugrNDaRmTsRSH9rCHF1z8fRQrJQ",
  "key26": "XvrN1QJkEUvm4zV4jWMDtaE1JtUaGGk9AEbiqN5mfD6kEmZt7h1J9g9kRMzvH3K1UzzV3JNqvnD3M1gNrkcdRxy",
  "key27": "2Xw9d2jNwGyx9kVvcAdyLzRxgH1Fzj9WZJovrUahMJSWdrjFRmHvrnM3n6S15UDikW1hqqagHS2gL2zaJWPmejr2",
  "key28": "3XomzevumVGSCLLXMEB1q1DjYBW9sUbGtsxFL84Tzn4LunB4j5677KAezE2akd7RutFyVTvSNEY56WWkDqgBTBkP",
  "key29": "5xpeJRNULcJrvuYkgz7fHDr3EbdSUCJGFdbXJHk1WJV1C6Q2rTj2PMTPc1tAjsqmD3gqoTHrSfbtjgQJQDwTUtww",
  "key30": "2yAHZMtGPiwwttYoBwabkaGs4cX8FXv8Fsb4yWX1ruEMW2rtoGk9MzzTCW3U1SNVtHEsvXPBFjap5djMJWur3Yj7",
  "key31": "2Lh24tHaf6YAer9jrWpTkABVbMoi6ps5GCxnSXNwKGYDrdHGWNq2jhPfo7eHS5nYu1XpKH2mCfk9MC1sUsu2Qfz8",
  "key32": "5fsMuW2b37SLqSaWuGhvorN2XzL7gYxHGjfDJvA3cebAMpGEFimveyiQLUdKiDGUdQTnixukcWrF8sJrWtM8fSVu",
  "key33": "59YnFxm776BsFxr293cCjnUQ6KAVppLHLE1EEwmaDGpzteAq7mrLrgUxRjgHskw6hwoqvdBTCjRNpPECuzsmvQic",
  "key34": "4csvyZjpH4M8K1SR4oj8okvaRiTxgHdyRGrd8SXgXq6eCiDspDeJNGtiYmKuuQe19PR6oEGBfRnBfeT1Yg795Lii",
  "key35": "4h7w2W6LU7PghRsf5HRv38HbBF8CXbDmCfNoWCmAhGTPPueXWPthe7YiSAqo5QRzHk4DrapthdCycf8pDRtvVAoB",
  "key36": "pdw4T8qJKpajgK1Cww6B6S6sWntgZjw8FDBZrjnaXcvFkwsZAM23sQzDc7gW8Meg74Qm2JazjYjcje8c4RoUh3B",
  "key37": "5ikPZa2H9fUFUQy8M6M1XEfSyyx4ZyUVsDXj8gxGrMo4Crm6u4Bas2ifk6gUeGpcWM4iLpzyDNfXmAEnNrtkz4ek",
  "key38": "2ZuXVtwAsQ1vz81FtymrHNbRtegNrMW4zCBY4tuKct37wrEdmAyy4YzaZYhPjj2runcMsyHxanCC82PswsFDpfQa",
  "key39": "MMVgRvsyXeui3PfRn9fNKaiBRpcSYjNKn8kzRxrWp3nRCSZm6dAvHvpjyL2qxh6bk1bDbVuixUhsp44UzqNnd5F",
  "key40": "5WQaRJueyZNYoioaw7vA9sJrm3dqG7MMYovowznEJEaJdtHAW2fQxCTdXwTEyEabwziScMLqEqhzgVhxApu9iNAt",
  "key41": "4JCjrDCeeE2rQVF3gR8iAtwBqu2mRhUXyMex5PbSCuypTvgaJg9R9Nu2BtKAVka77XYhLK8SJYMqLTt1konQVxpH",
  "key42": "4xxNJigdmg97zXSu9NrYzKNBHBpaLYNsVZuN88hr6v9GfSNghKzdZzPfQNLoPJnbJAbvpmX1CiMo8sEQgAyagJDv",
  "key43": "3Uhw7htLk5GD9sk8ECmK7UZjPyRW6T1bpeiXcJzD7f3uULtuCcmYAnZhr9LkVRNpjozLqcJseFpA8cLyEE2AiXRc",
  "key44": "5rCeMBrQjPbZM1WVFFrDTDs3cBPEZY8HhpYgyrymMCsk2mzSM7fvf9X7RVY6PvDqFkJV8atjBTc5ACbgv1ZgVQsL",
  "key45": "2zXtFt1xLysBhgMH1rBzvqjNCYHmb2twayjLLJGSBD2VyCXzReHQM4XMpB9CpASFf9eFLZUtRWB7txNnAMKHWWMr",
  "key46": "YkKhxFvpCscRaDW7X33fX4qvHB5JsfrRKVZkjGA2mvuPTGuzyYFkH3tJoAWtHBMvDxKnczqS6EumtDhF1HTxkDN"
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
