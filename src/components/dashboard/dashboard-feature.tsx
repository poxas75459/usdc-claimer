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
    "2bhh83iapeBiUuzfqXcMYYVXJEg23WFfYJqKexfubTgPetSUQc3dntdekvFv8ZXkHCQetJqJ4CA3vbC3qhq1VDxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bv1HXoGWkTikH9Yngi1cWuFJ26kirfZKsLbvPtoJYqaA8K8WGYrvDfBK2UpApdX771giuyJpHsy4zNrx42khJiW",
  "key1": "2YEf57p7Dsozi5KApuqi3QG6LkiCMdAeQPN6J7CTW3RJQ7BYwhAKqPNa1W8xcRbF2Pem2EG2Gt2UtPEuqUfqXQfb",
  "key2": "V71vM4DNmhPgjQKKj9mgD1HzX7rttYmQGLCBKsq5cvv22sVBrgRWAKz4vkaCgZoZNGSEdKrjFgDF2GCNfxNutE1",
  "key3": "1T5SJFDZBKvv1PVzJn8t74ahWTBr5fEmrENFBkkmJDJcHdtCkWAdU6FtbNzRpxDNiCtrAnf11hYLggaXDeqn9YY",
  "key4": "3Mk5Hg2UUNMw3c1yDT3GEGv4xF3SsVz3CMqKDnsNsrRkoWoBNHJiyFKQXA6JzqcT8MTJEzRSrRi577Qo3b7bzszg",
  "key5": "5AsrEmL8g1xc33GKFCnwqgCjSKaLbYCE7N85zzaHzAnt6SqV2UQ1B37dfKSHac26hqWyPHc7dZ9o3qGpARokLDa6",
  "key6": "4pguBXLMxYFbiufqUZ4yHDARN8ZvqE3YvTZnCXcoJ2WoJuX9NqWvNbbmiPG2ynVUjGX7DinZEqqrxCWTwNsQQi4V",
  "key7": "5ndaudiZEmDAuV9GoN6oKU6BRHMaXs7mDEjNY72FgzAR9iUt9A4ohBEcvrDHZgXDG4G6UvS9fAcwd7bAJsUJw39y",
  "key8": "7c9v24UcySkGdkUzQE374gwvM4aQAXHozZyJKUD6yvfaJSAKD23r5RcsC4pparL6n4AECiN6S6jUt6hWvp9ALxk",
  "key9": "4kmyv2deXNgk5aLpBVgnbzBeLmx4VNoT76GXB6x1JRPxaB1uTfr8qnagkAusKRJGwTRhjojkM2t9cDXRHfvZ5gJD",
  "key10": "wESzyfbh43kpkQC4aWiczw3wFFpyYrPKzVwD2tgdS8gPnyE1LbtVpVb8PwRFYgspyBxE6SmD5MVTPs442d5wPdX",
  "key11": "3aQYbzyZ2JMU5h3SUV13Fki9nsq9Xa1WMn4nTM1v27v4Net4t3ophwtjtC7Ro96XkVpwUtj9WHheuUkobVR2SRx4",
  "key12": "451sDYM62dz75MWErsAqQWbsumUjjNpbzoGnhZh7iTZUum3VEFkV5tZ7SaSQmQNBe7g3C2bSRpCYwHqZ8H7VVdfY",
  "key13": "4XrprF8zR4i4ttkFavM9Xyt9XdJ8u9bvo8VC7iGUfAVpVJJsoPYj49wNGZLpRJFaKDQRSgW3FCPff2rUsEUogtXu",
  "key14": "34RXQawq5GvcBmp2GF69mAAKDFHJrnsZrqUzAFmJGgzBjdtn3Mwdz1SGdu161sKwRF3Uj6qtbSFVXhgD886NSm4V",
  "key15": "rEytVXdML3FNG5aZbX4zR2gxHvfU5WVdHdghotXXmJB6xQPUsKPTxMgA1csrzViTmGaF2qeJPMMrmbgGJw8Xz53",
  "key16": "55xxwxVa57qkB3tyudzunuNVJg5YpAM2C8LnQM28tQg8bEVwjudRLhySbJqhmop6YJPsSUMGcG4Jw8U689R4rzaV",
  "key17": "3gH6rsxF54FegNiwAGNQbPppkg6uKLGefU1c2rHj4b7zReMZ1JSD68FspyfuQS4tZDtGiWRgmcKT45UdAgobiGb7",
  "key18": "66hAiTQMXhXBChHHBmgcdVpZbqJX6ruuJD2UgGVEaS4DeM1CVw9UW7M9tjc5wMjXtHe9hu4SiASD9Kud2LsXsAKw",
  "key19": "2q6k8npZGJ5UQ4JWWsbsJpjaRhgof4Erm6NBGtZphS4GWbm2ejFaWhS9VUsuo1gHeesq5sG21YMArtxFmVhSsjc2",
  "key20": "3SZTWsydU1DzseXzpA5KYBU97LiB3HxGd7iGMr6xWPRysqESAcypCXJ7Yon2zWcm6sVKJrNq8j4WxVn2aaTMbjQL",
  "key21": "2K9DDwHpAwHQskECYjv1zXMoUB7HNWZiLR3qmy6qoVxpt1ZmKTfZ1u6foFSD4PLTXSg49TbTTPv8JPycVRsAAdca",
  "key22": "5ZAmXMY5cw1ALcrb83PXk8pbA8vQzRpux4QP66Wizi3hXPmb5eGse2xjwNnPBQS84iSagxLCEZgAxKRDpuCBpRWQ",
  "key23": "2UPkBugQxNVjTQpAhiknAb1GwJ9pTwmGXjp9WcjMEzWaBngAYh4TfAKsyppXKkDceYsmtoPGDnFfz14v5cxZgHvC",
  "key24": "GdCJuyXizNUqKvoue9hRWJY4GUB6RMYqoVoRQSyPg3YDHHMkFBdPHQ92wd4UyQixNT8ucMSaXPSWWEHwZvaAp78",
  "key25": "4KWXep8sHT7gwTXMXHcdPQ47DHAhypB4oR3jcUhW3SrVoRNyPX8kyN26YLaVLShebtXkqSxnuCyDzFjerVcYT3iX",
  "key26": "64djDQQp3kqz2vHom6kj5Z8p2LPd2mArJUEWJLrjfWJtCoKarb2icDncxFLWaKKiz5HWxPbwV3nN7tFCNU1YnKxo",
  "key27": "1Uim7Mt6DWXdBL773u62d9J5F5pMUoLhjTBirvKD69Ff6jnebtQPoDGUrRfknSnx66ZUdPP3RVBxCctbJRJ9bXx",
  "key28": "2b7z12oG8U3NCXVFfbHxoYLj7F2gYSoThFEYjQs4fYYLjJ1FxYdsz77R6MfSSNffgDUDE8NWcLAc2oertYHSVAdk",
  "key29": "5KeqY97PfPCXtgrPQZKmcoXafhYZgXcoVt8FLfJYcNNYrMCRYaUAVvnptLqoSYn3epXRSjKwhJSgvBX7dxVFeaFt",
  "key30": "67fJADSWECMrNPZFS1nzsa7sGjp9eBrwQ1AwXpXsiJU2YgfxAnKLq2jwHmukbNqkSVdcdaSDb2tbRdNEqKLA5NPU",
  "key31": "3Ve1J7pdT5zCL5rBMkVnXN6ehPfYEbeyaDrdLszmrMS1Ts1Cpfsukqe1qhmBamGBRsRPcDq2G7kp4WPapWp3LzQs",
  "key32": "2CxMEX7bvdPxhvUREKtSVq1XtSc8hfuUrnKyQRHn9ApnvWkiCZ2E8cBEkToum1FcojXqQ2Mqk1ja5eNTBauRThKS",
  "key33": "4oMpg6BRVAAX4VHxrc4E8PjAoV37xxbqEkmtoNCPD2JDUzYtA7Y1xmSoYcqx6N2vGSXsgYRVe1Z3gph8WHiawD1P",
  "key34": "3pj55Rt5UnbwJ5Syi6ug7QHiVm2bJv8a1RKh3Eu5EKtPdJSjGMAPYK9r86ErBLR2rm9wjvMWHbMCnkkiDwXk5HU1",
  "key35": "24tPeDWKY15Lkczv8P5v8Au6wuTPDqRfM4jpscZTvxbUhQdFREFkNE1v8YMFphp5xT1oNvvpbSmAgpbbVuU7wv5o"
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
