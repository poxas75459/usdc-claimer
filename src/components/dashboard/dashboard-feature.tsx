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
    "1Ysbi7V7nDaQ4HQzQ2K42EdCAGXV7tHSBC3xt6ct6di2DptMDbAWwd4URuKea6F3xbZ73MZu4uZkGRZvSyjnsYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAHKv4gCeqNeU6n7FrUaJdmK6TnjoBXEy59fZYZ4q55Udvtv6MbxmH8n1ouqnW7aqLLx25neWodMfVETGvpLkoV",
  "key1": "srtRKAjun5vhC5wKothybSbWUTvNyDN7C2mqea91yJ5ek4MDotQdvzy2Wi1fc3QtKkvMDEfsmehZFdL9WpXXAxz",
  "key2": "42oLbKFifnKnwpbbnnKXgtd9HSShS2peLr1rYtkGoV9v61gLwKHjgiLTqz38XgYvdqLtRuuzkg5wuuxBBRGFnrUH",
  "key3": "LsavtzAjQW2Dvbas63Cq1G1MbQaCrMcWgo572fadYJhN1M67UCbC3dTXYEH2u7kNGJAh4zav5eh1yVURzCTpP3E",
  "key4": "3h3Fk8E5yEFtFCaZVJMsMR4EWEPKn6snpYKtRRQozcx5GZ2N1NymcY6eEcQqZa5j2z12qt9SP1iWEnmLKtxrRj9",
  "key5": "jaj7t6Ckr6i2PvH3rtir7Hsq4cZsUwf2jDJaPd26UUHqwKKS9dzqM27Esag1ofxoKXbVnmRvyeDrmvDVvGvzaXc",
  "key6": "5MGyjSNJuLtD9NVfjR6QVmnZ3znJSQuhx7H2ZEJ3bc9vVZA1zDVbjbREfJe7WyiYxsRNym8V4eTH3smnUcXDkEFU",
  "key7": "vkNgWDUQ2HMKCHSpo9TZJxk3sejgUJeyMoh75nUAbhYXvjvWkspmom36ei9QujRQH3p9nEdCLAumfTrLk6jwioY",
  "key8": "2K8osTx1D37Fmgkn7MYfaroxShJNoKZqNW8oSbvhm6nKgPSyPHXJvEfDYoLdUhdqnHVM6PFVmV1WLMgWc91SjjbB",
  "key9": "2Hj2EyMv8XG4Ay8Rx9KNd4cfVrWdSGGGFkLw1Mp7Vo57DatA11UwHhBzdpfcCpSCFgqrqafsxQfuaJ9m1ZM1W7BS",
  "key10": "2EF8kCHszu17srtgFVXeBTD2VRoDuedGjJ9nijzDSCEWLFoL2JA6T4LdTBJmdRErRBDFb4fAmKPXfP9N2zM6hqFq",
  "key11": "2thKsEBZsGaUg5zQw8DdrSLhz44fJh1mmBoTdLzcQQkBsNCKH7W1JzWJiCcPogFir26Mnga63i7dQLP3ivtLCYPz",
  "key12": "3yFTk62cgim9HBvBxWkyjof1mn3aNTzzwBJKA39A1xXCSYi9hHytx6rnKjHAWnDnwqxVrfE23sR1MLP1BRNZjyy3",
  "key13": "247heGvHxB5oMirHKR7DjPyD5BTaTYKTF88JWzXEVbCnqejDpPDKkYZhEL6jQTTiHyjXkhRUFv6zNRvzRyr8quot",
  "key14": "5FxiW76FcUaqQFykCJZSaZiAMPMgP7Yf1UpLhZ81SCmaqwfx7g9dYkkdeFpr3v6kAtfgY1eghpK6TyqM2fZNgjjp",
  "key15": "4ATzjzN68axcovqRuQpeyNKF6Fvkd47dH8wVZdH5CdEAdaaKVQippL53McLzPLMeQymeBhE8nbX6q5gNMVBdep8N",
  "key16": "3ZHavCnv22iR6kiLUqyytr1PSxH6A1Xa7NsSyq93HeYL6bTKTzyouLjsqvzPQUpjjLV1Y4ks7374osJzCcf8j2CK",
  "key17": "4RRNq5GEsDj4C6N4uHxpUgRKiF4qqdLz1FcvgsosHY24Tg9McmSKFdde7HNF9adX541EHaSMY1aq9ascsRHQTmku",
  "key18": "66xYrHmxU7tkHKgGebS5jrAXgWm7qiYJYttMhm7TM7QJoqfaWBGypuCMmiVQbgBpSn5harCPwKVgrJYWuPLkTSrV",
  "key19": "4BK9beHhXDVvhDJzvLj68L4ocUPkkCYLNeYLTPoyaQKWNTcBMeu5w2WwCZfHr9Hof9ee4SVmuyz9S7AxMNSTjg6f",
  "key20": "5NuACFZXNMLVRCvhDdJ2Rx6nRTCPdwX9ZkkeznJJRZcp9hVPD7vXG6zF4ioM7s7GimB6CJ33hsGMbH2Sz2UNj5Gy",
  "key21": "rNEHz61z8u5tZWJsaHRdgL7p2fe4WJx5gq8McAJVsNDC1eq6UrL8jbxqHdk4LMw46EpCUwnzNQ7FrVx42XCoTSC",
  "key22": "49sPWjmhpwLynCiBxjbNCz91fdKiyKDVD9kHFtYeCKCEku9TNkkTyF6Q3hveNKjPmKGcwdMi6dqiT9nX9CrNmWat",
  "key23": "4aBdvEqTneoNLK35tpy5eT87ZJC3af59vQHPonSPiSUmMP8dMgvZ2U6NCrAFkvQYWJWHFk7jx1WFzqNkzcFhe17u",
  "key24": "5KxNrpb1duKL2SCwNt8HXqQr8vPViEQ4he2eXf4ptDCTExPD9BSPwPWJn46Go7jG55BEzyihT1GZ5qLzcxseqFEQ",
  "key25": "sTBN583vbXpEf7YR79Kbp1VRUwX96532DsCsr15k961XN9mHwNdgoYeSX1GgMdMZcCo17sZVHmnqszpnV2w4GWi",
  "key26": "5uVCcFvFbFFCNn3m6v6APh8SkhboZpCo8f9qiq6F9rnBumc2gH4R1TpGELBT91NERymGNXd2w9iV53qYbJbwbCvA",
  "key27": "4ZVXoJhviNGJPipfbCPZbV5C2yS3Kj84CgW6QC2tT4yKKXzo1Cs3oyUcCJT7ZoG7GoLwAK5sCkm4WLmg3YEuRADJ",
  "key28": "3ox9Lf58eMpYYwhgrPaHTVnXuM6nWakvjpVL3LCrnsoqLsQhMfGzxDwvftVh86aJgc1t9qJjbMaMe2w5YH26C2rm",
  "key29": "3HVz4JjmDQPqVfFvwRvtPytWkYsrpW5TwKkuyTBD3Sv31xWtutk8K5UJKaAYBNHqEHYPUM775NWgqLHr4eyaqvZP",
  "key30": "5CuNc2ALZ3ZhBj8StwVddBE5mZUdry9aVBS6vTGW6QLnHs27qTBmajzE2mycAGkLrfuvZoHWwAQkq1MqchV5p6V9",
  "key31": "5h9aikdS83asuVP7fqsmMigATQ7AMYAHzp6qkWS9Js9Dc17og4sTNjUKKdELZF9L4gmfnVGbA8Bvpu6tQTpFP2zr",
  "key32": "26RFjpZiri5TA7NDvRChZ5oHnCdfn37ESFhqU6UWmFxLUeSU49z4xNb2yiCHp9qq2BAN5vBumGfihxWBUMc5UEKT",
  "key33": "3tQuoQuF5g9vTQcdV9hvwd4gWPAbrbiR9t4Lb8B28Ctfs1R2zwDog76PXF917zbd2a7qSJxiqufac1gvSinkfrK1",
  "key34": "5Zbzy36VmcPeTTYRDgrBNzBaV94XdXNA29UvezeayPXpDrXopZuefJvAAVB1biGoYjFuQwsuYdxSg9yaDwNiHFfo",
  "key35": "2VxfaSQGdZeAJWNzKHfLnKZmSdN91JSzmzn6jxyYPawbrVQ86cqmhUN5KDumKHeR8mwB16ZrW3Zef6UVYmxWoZYw",
  "key36": "3FGuvwLfaeTvCb91aDYpEpaB8eHAYo2PtRajKshEVr34ikxjzxS8GTXmevCv57VeCkNcqs6f4x2WNmAAgNFAi54j",
  "key37": "3otHNv971HZe4SSqdcjVaHwGdcLKgPjcCDrrNj9MbsPUGz2KoR2bSQLkLEDdPFeN4WpBvx3U6PonjZXUrjRV3dBa"
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
