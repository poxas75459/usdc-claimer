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
    "346FVVjWd9mbysZd1jctQXHFkQSsQ7HYfFRdsbaiGeTUbQJ6Mo6kJ6oZQcuDSE2Amv4VJiW9RWsqBMv5eMp3w7PD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GRe6hrnTQb1DJB3MbmAotbYqbQUVTTQNtHtBmovuFnQxtnLEjfXve76T7YtUTfvauCkGNscJ7S8dZmcRz5QvUg",
  "key1": "5hqANVCA6ExtYV5YQUCRk7ckZzsDk8LLB6dAXudw4bogBVQUFHoH48spryfdDQTRE8QiECzGFAtoZitbXCWGy1Sw",
  "key2": "123epBVQ2U1AG3RYFbQsTqsH8aWfMfF9PDR6MxeGtbnbGjeREpu2Gpci7wizSiMXYCKLoKaW6tVf5hamnaBhcYqN",
  "key3": "231fSpcw1PkpQX7TmsMYQmvTWac2d54NFEvUcCW6VhBup2vh11GL1tRhoMfUFvtfaQ5FuaaX3y3EDR7JxsZsGdGU",
  "key4": "2CC1ujGjkgqU9Uhe2dsjrVEUZK4EHNPqqxoLY1MtC9k2Z39M9kRj6bdZQ637RX75M5egfYbvQVDWSpReAZgRkrj4",
  "key5": "4yshAtekZrmWVQUJGbr76DEJ2oU2k8rTwQW7b6QDdeU1mcey7LccND2dqJQnsf395EMj1At21sJRUGRcojTiYXCg",
  "key6": "4URsytMndWRE4j9YjcnmBJuKwt7pS5YFhBB6nooX4w4kKzs3x8n5BzwdUEeQvJSE3GC7PVMyG4pXcqoGMBruLrXZ",
  "key7": "4e5dkdT5Vd8KNRhhJkdJr1BYcgWTEZqmf3H5UvHtbTKvav24r4FTixaVAWGC6VBQVRNLdbfpP1QMfgGuJWPmwB4G",
  "key8": "GGaQoksqrxSgyeCMYSCojNhoAdCqg7Jcsqic1gRkmBGdQRyRLqivGifCs75orsssc2GWpLV8oSwkRLre8w4nR21",
  "key9": "5iSg4chga1z2PEoCYwodHZwvYekWSonTzHNxtEz22uxM1apKF3ybVCMHdSqD5cRf7Sup1TUeqJ4agoEtCZKmJEXc",
  "key10": "2zPUCMhZFGXdutGLmiN2hwPLR5c7R1bCWKtVWJ2icqZYHEreUL87jp4xBARcsNivGqHX7LVroYpmW8khimS3fihW",
  "key11": "m2NryXnhJ6FFEsXekgWSHAsoCs2QdbCiNmn5Scat8gxgAm2cg18wyngrpxAvp9t7tsjtwdDF73K1U6zPQobNfRe",
  "key12": "3KUpBCLptM8LDnAJtwLPQVr1ct3ahoVd99VqcSj981CHN3ocA6Euz5SAysYqaKov2K3z58kBDqBT8kHHoodbzA3h",
  "key13": "3uq7AgE3PwLoZBScuHK44PvJVQZADpr5FVQ7ycM6915Graj9JtNENhWpzHKp3SxxXuHxEs5Ur5UdmokcuRCU2tmH",
  "key14": "3kZhq1CbSnmwXBAVdbCn8wXWZ27fp5R6KbymS1a3GhegUqNS4j4CoLpKygSmEc3FrUrcqF6JQ8SP8wm5qtch1VUZ",
  "key15": "4q24UrsYdmztt8hbsDGXTM5fc3frouiuVFKzmkkC6a5LVE9VHH4xv56Gf4XvYveCVmvkDgiwS2uYWpvRYiMSUov",
  "key16": "kZzkS6fSrbr75yN4T2Sg9dUK6fXptRokBDzy8Rt7XyBszKyH47WEwAg1FmSXfCVH6ucBbLPGsNxMQvderpHAhpw",
  "key17": "65SjMsHkdisQ9GecGjo4No2WeLbxmBkmWNzdaYHqd6uUbzFRiVXHuLmVbxCu6LAYcMiChUx8frYqbLSvYrawc8o9",
  "key18": "3KuBEerhHZYZnkGx6zjDKyWwDwaEmYabiAVHBPDXEs2CLj2aUJhNzN1nErHA19aGFL51KmuU64aCCYbADxB5Qim5",
  "key19": "DaURnY96XG1BkVZ88KwRnmJVCkmocN7rx9NwP4vogk6Cq26tMW59JcwZhULPVMjwKP8Q4EGb44JAPmjgp9mtMKS",
  "key20": "65d8hz1dvjVHb1dhE9vFmWTMTyLZsBGYNZfat7drN9rXugEbDoy188Rm62miHvwaVnvuFHC9JHwg7PRV3TjRDjo9",
  "key21": "2D3kBEdnUe7qb6yw6ejnozQwZJ7K4EAThVBnrLSu7EeZi48wN9GLK7nMtjBhfsWCn1n69FTtMF4QWV2WYbsZUiod",
  "key22": "6xgVtySQGATJZ6BsRQbMJcYDJdtU6p1nyBY1YrHAnXySEGxDCjCCEPd33GTA9D2uix8SbJ2BavARj94tfWSRNQB",
  "key23": "4Ru8UiWbhJg3b7me5ftbVCQuRTJVBZCxiDZqDWoHnK9ffV98owkrWDqa5apG211iB49WfMisUQKHc5F33AkKRYtG",
  "key24": "2GMPVpLs9X7SEjrXi2tv1jZx4NrYzGiBL7Tf4kmfo131W5GVgCNa3FfsBcMpE2zEYFNyivG5W9Mk8XNrUAP2H1sA",
  "key25": "4TDsxARy1GLZzu5XberLE4LEjDBcraeZBsqgV76m8WaGynT7D88wetFg42DHatzHSTQaPvM1JKQTekdXRgWsrT3z",
  "key26": "5ZbsGHKmdFwiE541zpdgehpsd1Go97dy7mQB9dF9N7j7Z3TRq8zCFdrbA5PwMhYzVrB73vmck3jBhUnmVc8a5RCL",
  "key27": "nRgNS5kKg2AwjT843qANUwMYdJ28CyvRMZ8xmwMqsE6z9hL9ffTtyenAZxiaiyezy5WnZQVHk2kxLayREm5siAr",
  "key28": "9WCeYU9gv71Gnti7E4bzNH6HZ155v6VvgRZBvLKoEypPxafjC4Bn7QcDz4RfTJo4ghVUmB9ZhWXAFmNJLPkYBRj",
  "key29": "2rJjiesiuxfP7xYLzgtgR8knX8xkgMY2odoijSGKj116Jsbf8EhagKDjYn2dWpT66Jfe7LnJPvXUTu3emELuo1bC",
  "key30": "4y9R64mZSoXc17DVtNFj3iu3q9fxNyzmuUkqH3Fi2iHBWkgTsVeqkUGyUwwnxk5bJZqDwMMTiTkbY1SGpm2TcbtR",
  "key31": "2jpGvdd4G9XcoVy4PccbQRVicK1sxLXqVQdEpN633py8YqGDffbxBD96ypaCoQe4vXmGhHEeH2rD8KBJFWmineDE",
  "key32": "5q2KUfdtfP5hFMDLdMzmQtG8jK4wqgk6mbg1NTukPhX3BxSbBvzwMuq7Ni3NxviSvcfjzkHDQ5xPwt4ND7HP4EMR",
  "key33": "3B7qmvxumahaQ3mjTtbzzrtCeU3GUvJNt5NHVbR4x56b1ZsDgARHVc413APTJhCmT7W7Syc6jyGGpHS2J4E72sj8",
  "key34": "4teZ9jpruYDHMHkfvhniNjR7QGauNUhJGYjTDtiYLrak77zqi3qKXMynpf3Hmp9oXcKYxjNve3x8Ukt94n1mmkBq",
  "key35": "3Wikz4fHuBX9rJCJUrk7CyCbhvC4RuM6qFdwASHZouXh4zWro3MJGd2HmpZ2QH2MrxKZwxGgTu6t4jPJEQu5KvAg",
  "key36": "2BZiZEuQ1rt2tYVLXy3xxjkMprd83pYDchCVZyMtX4erH6u1qPuN1ddhCZ8BAgwuimN2hw8n21Ppaqch3cmyBLcB",
  "key37": "678LvJE9bZT36Y5JV9TGuvkT54xtWAkygM8XwqKAosJ9NajsHL5sbrpEViU9ev7wE9peZBhjs27ue3btQfkdziGe",
  "key38": "3HYTd3gsXf3yLQEHGfnHRHPhXCh3QemWxgaK2w3Ab1wA65tDodRv7Cdoe44GgHd5FmEPHSTz3xKD8Y2XxursdNm8",
  "key39": "7fS9YzNrYJd2oaRA8gsnDgjHGpqGATqUEBL2i8CRrCw4pB8k7HcoaiNwk8jXPTkijerAtbcdTy8GNkzp86H4HBA",
  "key40": "2pKyrxThucDdscXw9Bb5NPGd1DtSnkjr9uEx8cUG6rkHfjwY9ArR3z3GPD9V1FDC4LCckQ6t7yp8EaGcpPWKmumk",
  "key41": "5K9ZKipBiYWHcZL2mAtF4d3sYGrw9JRubEMUUwttv1AK63HqhExTFZcMdq4DvmVs7Nz3kU7qv4enrTencZufpsvk",
  "key42": "2mDqbJMyGSjrQS1zuQKaoBqHx8BkjmJESXVdwt6GEqunZxjydKm6cjxgJQV5ZWqdpCfHPLx6qaib6ocBDK2fx3Ph",
  "key43": "2Hv6zX8tQs557gAKPYQrXh6YCkfQBDLmsxgkBLyZsX61fr2hMzGKwexXXTbvKBNxXZrRGKQNWBXrnnZbFnFHavgi",
  "key44": "3FDS9SJee2DUKRhcUrrMiXvHHN8RyMrs8Vsp4S5KsPp2SpuPVykJos2QDh7NTobG7DzMCjyKfDAWvf7baXtbwyQW",
  "key45": "3EGDG2fnagxqPZAkZcvtToifevaNwdMcXQsLJsB2qxyNLgowfWcU1T5rveS5rrBU9QQNdx7EmA5F1MtjDy3S5Lb8",
  "key46": "3Qk1NPw3GJZhSda6vMUsqPGevvuv7Es9jBM68iL6q2wg2FTYswoMT7mNegZRRq5VffcdsBB2RSeSvmadQ1aZHCvk",
  "key47": "2XhQHYobNivewJDy4EA1cUSdkadNxUgtGATALFsXRWLYd6xSYskU9P3PnrU7jxX8EvydsJBfbEiNqYXJRKnwhkXd",
  "key48": "2hhHTtp8CNrogzHchufA2S3V1oSwRmZKJ5veV4XkmCDtVY5ddQa42S4PvQ4Y6eB7LAHLBGgYx3Hf32k86NcD2QLe"
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
