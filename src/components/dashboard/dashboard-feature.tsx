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
    "2uvt5EHf2zMmwniPyo3swmJNvP4uU9sMaFgCi4NAyGZ8pmjgAF7y9aRUqaCw5cw1WAeBsjkbfjVpsJTA4hJQDskX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fadgsAU52t8J9bogYR2htzCeumT1rbDAWvWMqRD3VjygmqJCprboR8oYoEwfLGVcvfVDGFNwZ3pTybXkzDLgss",
  "key1": "3mwbiq1y41hwcZp6rWHDbAzfBqBHYiK2Z1b8vH1nX8LHjoZEyfH3fJzYht91VRWULGG8oc21CKjDrBZEkKsA435K",
  "key2": "4neeAeWFc79QUuDcxquGTTx2zmoRP7ZR2FajCifWVnR5bzRnrZ65sLENszTix9L5iUueimUQCBiCGFaD7En4DkvC",
  "key3": "5qt61tmYXaVisEobkhbPsHhY6e7emBLbpgNpcDAdT4SaWTukFuLT4PsH3L7nnexZZdZD21J4UmzHp8H3BfvNfvpY",
  "key4": "5FGgvQKr1HQ6Ktokkt3yJPnGmbSn6YDYTwqMq6csBzhbY4gTUvMw7wvBuDzbW1JZwLmrdTfUwNYmdRcAKjVC9dw9",
  "key5": "5G3z4RhZivxKNn4ygZG6M8wzL8pzXeH8sQpUcSBdMKpb1RHTc1jeMFX39JEDBvG2pU6Av5JNgFSneE7Sz7YMsjBE",
  "key6": "42ZYMTV8uPwrjf1fuEuVEneLb1n4k5u7zxTb1jYK67tVKC8wZoWN92uPwQSDn7PLQkvwdZegjbAr7Q9Skd1jaPft",
  "key7": "2quhKuaCSPS8mRWMxM6C3Rgq4xVxTcHJ5rN4H2gsin3aTxBmRgDhqWb51kmQDAwJu11CF3mGeXq9bcbQgdWr42DT",
  "key8": "3a7fDr5RsUqJ2hysCpeD9fPPNsitg4jPmHrs654hfty8FHojABgwgLvWwN4736ExMYEXLMXKhjcoXEVg5dGidcy",
  "key9": "3BQLK2YkYz32JadTANZ9WGi9LTrbwRft3euNEv54M4EfmMHJUaJfHbr9gvPQMQjGNFX3zesaYZNkJv8Ba7VNjpng",
  "key10": "4TUDBAp6WaDWKncXj7zE61Sb1Ws4aGSEPWjcweh5aiQvd79Hubejzkd7gPzHwbuBt8sLT47ULcFa4qRGN1mVBimz",
  "key11": "4f7q9bB9CwAUTpBX26DxnK24oHc4SDzu7UsATSbbK5JqiSRgexJgxeef2B9irzFXs1qZg7GWd9pVL8Ri31Z4B8Ut",
  "key12": "31PCopSrBveYpMtT6tfcNFeVjURuQ3qbtoLyFWRweVttoWAHKUhBA4BD5heHCare9MtpWwfCVsiZc4krA8mjZS3N",
  "key13": "4buBScvsCVkSzzLkr1wBsszsLzxJYrwhNR9LAnsAByF7UziWNavfQTnisiE2sQAoj4sJnzuotqWvmFVpcE8abbmN",
  "key14": "2YomChBk4A26HHP27ZMy3gG3ZqN1F5cajgeEDLs5eV94SGzjrJcmHnHbUj8iz7vxQTgBBowuKaXDM7ku9vcyNvFz",
  "key15": "63C4cefGnDV3BniKTVUdkWBuMoCQ9sg3zX4v9x4SAsQfd8o3M4mteikpikoZUYGdtYmNpVRkc4remaamUBACps3",
  "key16": "hzwwkQ59vTzF8mdU5Kezk2V7vXtTmESpcm91KWim3ZjCDhoYj9S6873yFDd1GSVt6sqAZ8SVBRZSfjbCDw4TZXU",
  "key17": "5qeyMbJeNHkWQb6t4jhNGNdUTZpP8PNL2pxPhZP7N1RRe7BXu1RmQttV9DFrkcUxqjP1KDZ3m6bXds1VdBwWdJLG",
  "key18": "5y3VqrzGcBQ2QAmRmw5ruRPU7A7Ezp6mxuTCjztEHFVNRHR3bN7k2py255x7SE7mW9s3baYpoX1cB3TqHTantW3j",
  "key19": "2fr48ahP56SKjnSemXvYcmUcLoBjSueqCCeiKJsaTxm1fTTGdLCHu5q2Hp94LtprDeHLmSHzbCFaj3dcBjxJ2GzE",
  "key20": "27VecmcL3uXSUEuKMDHRUdYxZEwYEUYKaiGvLaKdkvuZqQmAnhgRMfbf9YMeJqQjEgKAvZ2sgD8sjaV7wTWMqrcm",
  "key21": "2mxL4a6T31xvyNNfbmE35L4eczWhd3se5X1gpMFXohqaMKp4YxEbDGKyLNVN3WTcp77ZvyWcqFtU8PfWHyMoym1W",
  "key22": "3JTWPCfXE5NcvZtHhhXHY6VrWAfcyTDMauGtA4JHprR1gt1JMjTFawd9zrFXU2fLxBaDu9LL7JR5MSAnqr1JZWNL",
  "key23": "3ogpVeMdhWLvgb9sKRxjZeMASDcYAHRgv3vwr9vShYc2RT9VZuRqc4jQ6311ZoBHUigcNtEWZiGigkjkAXWgrqcH",
  "key24": "ncfCsH1gm9yVcTbn68954CSVRVsLpisEgVUa7bbyphft6Y1MEMB4eEPacVQQdMtBwg1r1rQC8PkRtv6sVwq2WdW",
  "key25": "5jFkNUjpizQvJxh6F7QTAETaa1whjBctBg3RznWMvSRzA6Ce4JhAdw9G8w8T2S23DbmY2LMdAKkZVdQQV8JJZS47",
  "key26": "2BdWWiBMsYPtJ93gLwgCSZCtUcPKXqbuG6JzgPeEhKWt9j2zLoLed4ogAXAtnNHJVhLN1Yv3e9PqF7rJWM1yNLsA",
  "key27": "3eBvDmXyzcD8mVoLkvuZ8AqEVZeXezY8Ymkup8WZoD6N58tYrHMfTf5kZ5iyA3fNjYtRgWqqtpbrLuJFdXrQhug5",
  "key28": "3TtKD7RqJ22q92LBHKtdNs8fnbcpymCTN3k6vvgr1pHvdh1y69VL6XeyZkxjYVCTWujPbEkRQeLyYX17f19Yq66i",
  "key29": "2CqqR898gM5wMJXmvDgWXEj6XiuQu9yDphRArMPetnqCmhCDRZ8Y6nSGBDpxBFmERFBoxsPjRF882FECShtpRkCR",
  "key30": "3dVF9DV4bxTs7triXEEzSFNaXakrBNdU599qQ362HfvaJSZTDDPEjVCt4AngoztLLzhhdtjwMDDsmw9itDAKyRib",
  "key31": "3UR5scJsRUhT7EiCVRs3V9558J7xNMjgTkd7XLuTg3KnRxmX82Hxt7WQg9hWjtEpuLkyyfASRTJJnoeMQt8fjFEp",
  "key32": "2yJXdocSesFpsgA9dwmm1pWzhECCuUUjQumu4ZjtcKULPG1Mp2Dbb8aq6eJX2VsYbwEtBC4XxU7CnmgnzYPsRaok",
  "key33": "3A9sWRoeQh6tQwzRy4jx4QtFERA1NcSmexa9mVdmtFNUPGdxVGW4ZDk9axedJXQyTCzDyd8mHfFfNcNtANfBahph",
  "key34": "4hMzEdwYB1GQ6YNCPTPbmoVqBSXJq6rP1XLZE3631NjukK4mCMFqTgrSrYjjR3sJhvuRZzbY5VDBz5bro4ow8vDo",
  "key35": "2tcJLxcptK168GenppJpHtr6jRA6YCgXdXgzUShpNGcdwGLQi85zNSeeHJud8Lb84ihJMiEC6nAiv3oX7eEn33FT",
  "key36": "7wnB2M6W1BoqDbNaNqMGgw8Vs17P2WKgdvYgGGR1KrQoD4XDn7aQhgfoHuNgaMLsDKhxkJGhEjoEaGrTbtbSFwE",
  "key37": "253HYQsgwnSs6hYLhY7TywJfwLApW6pyX2BTzYnCF9rNtSSd3Xj947mJGtzuvD4D9F424htYUWD1sNDB8WgjaBv6",
  "key38": "3BeyX1WHmCVzukwYUdPkdAgArQa1S3DkVxhDpFqUGYb9k6EBWz987jqeGNaLfMzgpQSf8mYMoiDJCkGefXB2nyyz",
  "key39": "m3YBNhU6q2h8EG6gQbaJXAqiqwiPfAua5nLfpReGrcSCbfQU28EgVYzypTd8WTKxQZBxZmaLAkeyqBCz9JfBe8a",
  "key40": "Kx5Z7pv9guLxY5jwCGtNjDe1g32x1GWgG7BjsuB7DV7Ts6SCMniL1jUrM9H4iGuFAWVAEgD8MaEJQHhwB8RsE8M",
  "key41": "2bp5JUXPAKvy1weykQ8W73cuDMAaoVNC4kzFHcgu5Hq8WDiDyFNTmbZDp37eUhwAMp3xsaVVQf9BWSr7eRfDY8su",
  "key42": "4qKQBv38QxMwYHimJLq67FR2nJ4MehjxNEpdJAGRZ8QB1BV7kzhkX7iKthAjwDDzoiMWvW5U6HdRbzcc2CuWLPCg",
  "key43": "49zmGTvVx2MvFepK5iVtkyH2ARg9FKgPYQcMnYBCtz8YxS9cPfdLX8R8MYaBjQMeoBE7NurQ6ukbUwU1wL591L5j",
  "key44": "54y7rrNzxvNK5qbbfEbZ8Axbi7scci429ix6MAQSXLfNCVBiy2UsqxXLPfuCNM4wK58t6rXRQB3gNAurWzKDaVg3",
  "key45": "5kvSps7Rg7daLDgxfuD2vYrmdyFvHMYvSB7T6jEFFx8hBQ6pRCpHYVNEFAzzRdYRumUahXd3b2sFhUf2YgJTj9Wo"
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
