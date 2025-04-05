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
    "Bdu382uA9aHoSEhax5AhtEjr4oVHtqE12WJ5LREfurwsMKwUmjBqoP5Xnv9eBTsCGvSdYiw1Q8gio2Be1SKcTr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjVnKKoau5DgEqnUSMb7NihymtiGUyiyT91AsZhFx362aTme1J1gHsVM47CRHfT6XhodQJQNNEos6Tir4fx275K",
  "key1": "2pnb5rYJm1QSnqbxWFA7VZzR6SEkxBncvMUSegbm8Hqfti2eghaZfNWbi2PbtjdXXgxSktUTd7ejuug6Yi7su67g",
  "key2": "3uaC2xskbpLGZJiAqrqS4wC7aeK5bsT2djkcQQ6Jdp6PJwZX9pFhpb71Y3iL6vxqGmZRgaxTUC3sU6ZcruejTTQ3",
  "key3": "DBmKvmtw3j3rRiGqsersf8gLPYBPY3j9QJev5Jb2txWEarbVFemkPDmzMdhXDJaXugqsuj4tFr5vxoHTagoABb9",
  "key4": "4SDHh76wibgnfgMgUxCfKMYrjoU3TWnincNjERmo8TBoKNUFVsHWQcfTtkFnXQTiBbQBJg99Vpd19TW6M21ytxNk",
  "key5": "436WpDwyAbgUttmtpLuhQrAc4bxUQ7k9dQru83wD3S6SbsrQUu5ob3Qa2JRaYKRDDicd3pRcrpY5RCqPsrzeNEHr",
  "key6": "3qhWDNAg6L94KSWcyk1v1Jre941cR3MHbiugNQJTLCK8x4X1apmif6NTJovL6reX6bSxtmemkh7LEZrUVYgnUGzb",
  "key7": "49ZXjV7b9gP3evhN5uTD41TJJ1N96tJF7N1uTSrJazHGE6ce6ez8LD9jpSX8hu7R7Nf2iQxJ9TLn95B34nqDrpre",
  "key8": "5mjZg5faFiPD7KoXjuyaVWTaV9r5Hy4XExT9t3D4h9Yd5ymQhJnrVRVjT9ZWUUjqkeruH8PZLyAkvx8QxTGsn7x8",
  "key9": "3sGKjDnkAgwdVRsBaSHCCJopyPTxdDbeo9PPgw2gkuJWGAn2UAi7fvgkBcXYB5d6we9JbLDujMMKbMLg8Bbs6DLK",
  "key10": "3mDya4E92Rv9pz1h37ZHofBCK3WSa5gkeLnkKE2V4GksRtTcFGV5dmSRvWSJCRRwrWCgx5a4XL31nbiBHL3ki3g7",
  "key11": "3uwxEvA7tsWZZccuo1rgXhewSdGTfWJhV5XqeCTnpCAYenpuMwzfYTkHUfTyozJMotDzHoayjbMH9PWNPbwvMW8",
  "key12": "PceKW6FUmQgw44mTuGKVtXoyrfDYo1TsV6HwzgbxnDUzEVujZRZ536Y77M2B8rLvYJrp7orhjhUcR4GjYoaLTxT",
  "key13": "3hjsYKonDKoGU5qUBFpG6ZjTnu9hBSieRTuW1YU4icNw2WvLX2qBzW5JWET36ezGSDoxQi4kFDVseVLemsgdRJ7G",
  "key14": "EeGVtXkEQVoR3FVa8fnaciDS1qSzzz3hEWHTtCojNmZQWiAcinn1UX4bzF8B2Y4WLS9cCp4WJ2fdVT7dHQv8nPY",
  "key15": "M36mQYiQPooUiZMncTiqrPT8nhCN1EPJhts29zpMqw995vG7zPc7YV1HUcFoP2ehsUQawTpd1cAmcBH2Ne1cuWj",
  "key16": "5iC7wvuttNtPyp8yaE9aPWvNd8Y72QGRQSZCbCS3JdZ94LBC9Gc3Wx38dinBYkes388geKx4nL597iK9Um6fNKyB",
  "key17": "2utcAMHXUNUenv1coRAV9k5Fr9314bTApuCV2BrmqnVmqpPgSD9ZVEDBSyfQfoeB9CieTKR5GJoBMbk91jjZBWSJ",
  "key18": "bjsRVe77atjyokffcnxYPDTPd9mP9SqgPXPhp5DFMuYUcBqXW5nhfgqyBHYRangaEJxm9F24N2JHi6YoBKxre3v",
  "key19": "RvHLh7Zjwu8zNBAZpeAaftFYaa6P7LhhQE52grRJpgXdmdGeNP1QLrnnqSUv8jcRLiqc49EzRewGVvBjQp1W1Rj",
  "key20": "2nA5sjT336B7vUsBuhvokQPq2fD4tUDfTUeuTQnt3zNYitC2csHC7xB1eJR8g4FCaEhs9jW74jZkGBagoXaiUDsm",
  "key21": "4TFE2amVYdJAW92KzinaZiz33NBjdHESM1tKWRduHHn2hmPExNWKJhw9TqkPSehWBebcdDY3TznLhqUjPQBcafjW",
  "key22": "4LvCr9tHpckzcUv9PMWquSFnYEcQe1jUHbyhNLnGkvmf5piS4JdQj8pA65XdoN6JXyTLM2tngDR1cpoNANaf8pye",
  "key23": "2Vkm6FBkgbw7zfPHEwzppVSWVSt9odrhTGXTW8xfnE6ib5XfJNJe25iX1jNj1uyGqJKGfsqDScqwgHG7FoUqfvBo",
  "key24": "4fuUb5NfCjcdq3TyfDY5ZfyqmRsAv1mdXsAJSMLGTtrEfcBr8yVpjSjtxPfJQbqGKnR6DSgTzoFnVW61yLepB5M3",
  "key25": "34RzgADc3p2eEbdYFnSC1M1vWwrvNQ2MSkUZH9NePugytA1HpFGrvxB8EVDSWy6PFVrhJJF6zXon5qhSphC4EzVR",
  "key26": "3wdWW3HEHcybJoqfHzjReQ1ncqQwwi5nVPBoYhfg6REHprz34wc9VJYMFA1faex2HBXbdAy79m5QA1Nz6zD8p7nL",
  "key27": "3SpG4YSdiNEjMwnoXJxi8phnwKRgXdVKQqf4PieZMxVgSnCJi8Tp1BmxEFADrKAopHTYyytEzaUbmYbwj3mRmiJx",
  "key28": "5pZLLpCiPwZhAkvnkBzYuVqhCVCedcFNyqvBiCYmein7cGpr1d1JbArxFQceYPaCDoSD7zc8XBkMzhbyK7ZerZAN",
  "key29": "48aRj6oWhdqcK4zFztg3Ko9Nb76qYm7iL85Vyfv6uF1LqzmmznZYnfUMkP5JKtdyHi6Z64ADCGy9MuCJ7kg7RJoj",
  "key30": "3T1D7UzSVCP2R2oqc1nQX54NCtqY9U2s79PcGx1ThBDsXcE8mYCzWS8L9u3RooFUmzG9xLp9QoyNhcY9NKsdjBzv",
  "key31": "5dWn193p5xEBnsiKdvFuP6JzwVE5BdHdphZJbieLDJhfvo49HZ5WwvAsFJ9RbF334F9gqo9QcPhWNYCkeJgADtdA",
  "key32": "2S3UzL4pqFbqgqNxFt4sace6nbqgSXxdHyQvrrcwEB2FeL4hgU78ajdpxoH35Z41LC119uy3oUZxRbx6yUkRzcnf",
  "key33": "4Tn9wFxHNqMKbwoizCwRcThHRr4rBaqcQ3VKrWjhSG3xRkEMYaVChFXRgSSEQNDPJtnbz7xmzXqBXcbCajcacsXy",
  "key34": "tRvHV88YafdU2HdXF8rgRApyMh5UhZ3ZXuQiuSKXSeg8amUAn8P58QW9GtnrsFHscoTSWLtP98gpgeDUZ85KSD3",
  "key35": "3x7LeKYASSgoSsNGT2tPN83GioTUkdvxvXwxtLXdP1s46FQfBj38929YLYpGRYtEeGALxZfvpF2sYEctXTuSRHPT",
  "key36": "3Y5KrPKYqtC2WEPcUCSwRLqiY3gYayg5chH6ico33ta31zLjxdAcvZSAyziTfh6dWp87mxnRmNXdictNKSFAPdKY",
  "key37": "LA1pqf1SkU8L4hXVnqjdahCVPbZb9u5PfyEsRL9Dmjzpr6jNsUzD8tM2cWnSRHXMPqC2PfPaQDEkfFPBrTucR3P",
  "key38": "5sZetxZ7AoJ9rPgM5d6Denzbz7JQSe9eaiEugU7aEHTh3seQvf5wx32AoE8sL1ct3hmoWewPdqTx2eMcdFypEF5A",
  "key39": "51VbyD8PqhwWUmGVYCgZ4hWm1EqLfS4w2R4MBmKsa1j4nMWkmXybp2BhnRWAqtLZp9HmaVCdiFPipFh4KQN6gufn",
  "key40": "4aRrvdDk4kd3HY5ef4qDsvq7Eqjt4J2MfuuATpjTfGUeZ3DvrngP5o1Q7UpEkMoLjbSVGcPz873NFzLVRVGDprge",
  "key41": "225faTSafWhv9iNMJLA9gKFmFedVeiLrUA76VWU9J6EgX4Lch9iUYgAXp7j8kfwpAeibGvESiMmQwgS1zVzxcePy"
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
