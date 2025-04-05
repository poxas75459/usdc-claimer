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
    "63ccsQxNCPKp5Cu1sPPpURin2PH5dToXMwtECVDMsC7aAfJHxnretGEccbr3vyE3auPeapT4aSfjsUSJh3mvKrMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KY4psGvJUxz1bDdxKJzbZXicUYdjyoiCssGMErWbpnkiiWVR8VzqDM3fCEFr8iVXtDMRmqyECJ6uLBJhiNyeNA",
  "key1": "5uafNbHY1ATzEvMjvaS78QCL9bLBMU7vc1X91PhbEkN9tADuncTVrkKXK9iv4bbZ7u9gWJ3FivU5Wj2GsTbQa21a",
  "key2": "f4XAAgk1JtkUhWenm4E5WXCc86qFJ6XApgzhWL8rptkXNGYM54xM7xzoQC9mLzPcE13eXQLjV5Ug9tkSekAcbj2",
  "key3": "2MAUno8FVsu4MTRyQQAXuVvWWSweZVGEZtxVGXXzZQZDbNBzzW4p9EQmjWhMMm4bwkrbofPqKG1UJUFcUp4Tg5qo",
  "key4": "5VgJKHURM89CgwvMai13iwjMSsPzWYnZYEQ97mV8uVfhkuMx4gdVSJ9vJRGYi15esaxJfRXwzgw9i5E22khtaqRC",
  "key5": "2hoC5crfU8gtVFJnoKyDbJdvRFcyqa4Q2XWKTGMXLgAop6AkG8nFTG3Uo5gPU3rUpTV6C3qzA5ZwZYJAhigxBajw",
  "key6": "AGkmwGP7jVUqnTjNTEkSaECpcu5P9WeMCmhXrfzWa4d6NgvYgApWdM7gnQYLdLbf874Ny1mmbGEHobZDPnjtvgf",
  "key7": "T7FW2jQRhDUdSDuCJvAZswp5Np9WAqBekA6v2RvkoeCuayisvXEMLFtcRCKtEMvWXUH5wgZ3PMXqqikjaGcXLTw",
  "key8": "E3TMYAyCCZEcpRPVLqPKg3DJyhV2o8Vf3KjyoxNnBMbCf75ZTniDokar6pDEcdFYyDEwhAtVn5Sjwq6yguQhjAu",
  "key9": "51kV1DEs1pYjoCBktsEz75moQPA9dTLj2GvWUjgK3X62r6hjWNsWHz186xm9w9jJa56isjtwytNLDmquPQrkLKSS",
  "key10": "4xormbQ1nogv7DZCWePiij9fED9TLkySyWkxbixeJWNsiGNezVPqDuVRyQVRY5XzJMtfmBD5NTaWXy6f4x8DgVxG",
  "key11": "5qRqoMPEEfurRD9YAZ3ptnjf3qdzmRYHvvrqkXHeEoNGXkzajPyb3LQapKwoyp3kUFdZeiGHM6YivypFwGRjiYwh",
  "key12": "gfZR8XgNg9RxRg5KgBsUVAEaWVhhURAs731QYhN37YwBfBhAxHsd91Gt1iamDMV3D8bkX7pbx3ew8ofcGt4GYgw",
  "key13": "5WXs9p8oKMoq2twizU3PhFmGnSzkL7gJL5gXtbUKXqiheqHghjsYgbmjwmZ1497Amf8qNyeaUToet2Xb6tjgcot1",
  "key14": "5kuGdXCXcbp9bfCrqs11p47FsBVc6EBAEHaddgd8B6ibUvALx1ywqNGL2kFECoy7Ff7ZbWcGeVpk5Fgi3LR3RZgc",
  "key15": "3GLtntEmirWt6dytsmNKqCABqpLoZYRGLMCFAzdNNUKtLiikKhnR89fw6Uyd5RAqLesaVX8mUtguTRd4ji6TTQLb",
  "key16": "2vJ6FNamrvvJxW5LiapLfTmWkWheYDdVt5U9jmZjQqssiyfgjtXDCicoxiLVd3jsDERKvDmQ4JdBMPqdAMGMM9sc",
  "key17": "2PwNa3UVNTNzUiCmK4sufFEnywenWuHC43ug45r1cAWYinN9KJLAWvg3pbuv7jjMWwDzsjsm7NFm4jHy8np54pnW",
  "key18": "5CCAZg6An7NyPAGm5msLVXSZe4qFhJrDk31jeEPzGMBuxHiPe3hXPLDpTekeAMEnGCHRH4GGFQAKWZhdah3zB92K",
  "key19": "2ntae6uKr1ZhKETzpyebCThGkLzahnNbwNq4uFjewJr9nZKUTe7tCQF3GhnC1EJoPN4UVFatx3mMppLXcmM687zW",
  "key20": "23Hg2HwX63gGNcwFyskvMGAnuCYtZpn3e1mLWyMxA9TvbxSRay9zTjKywEphHkCXv8Tes6hSr76FUfCQceNrb2XL",
  "key21": "5s4RPdbZJruqnaRRNF4ZNcydAjoGnXDuL5cAhoRTa4ghjzrqmFti5GELpD91hKQGQZ6rpbGjS7mc7DqdJ6yBGJrZ",
  "key22": "4VejKgHi6VNA7ehcnE7X5vEmTULJQqEEBNysuK8vhPKbwaVHy1GNJEARm3wtgQtzhqQJzgym61bpqbLh72jjGcUX",
  "key23": "t5uhM1mnHwv3u7c2msCdsnjKCoNQWTGEDGZWvf2zvgSLHDG9Mk8KDiDoDzhzz3BpquFEBQqWpPWiJD6azpvsTcz",
  "key24": "5w26GTjF9otDaUv3emwF72NcwRYsCLoAFhXkYpEDnYcrHj2tybV6gZ9oMxciK8oUSht3FSvphGAJhjcszzyqAWBu",
  "key25": "3ZhEhp1y3HXay8NxZZVSPbEbpiioZSNayM917czV42H4XVHtKrXce7AGBfJjHjXd81TVgxJVD1xzw9XUkDLsY64n",
  "key26": "5fZbeQay5PFuH1xRU9eX8Bhh5XHncwt1BXGQbErDjSdxnoUYXKXosrQxp1kHhmUy8wJLNap1wBq7RiY6pEQgZQXU",
  "key27": "5wt3jKpDLwZ6uRzUmXkvoQEs2GK51WnR5X5TtpdPFuvmuzeKGCmRMmT5nu5n3yGTXJ9yvr1HanTaFdFSmYegbTM",
  "key28": "c41JCyN9d7NUV7xL9Umz4MwHZAGDqqqfPWUjbyqorUUh4MyaFjJcapu6TvtooCrazfKKuqEZF3prFC19F9EWbWV",
  "key29": "D6dUzfLzyGsagHvw5URntX3ee272cjwqMmJP6Ty3VrWiw8vRHB1RcHipt6b8hzs9eNiVxSXYsxDzMZdwMkTt3vi",
  "key30": "BzvAhNH9Txc35HAnMf7K9vjnVKjJL2KsurFDahVDdaJQHUZvoBugvCFSJHk31PogHS2QN9dBmwXh1YTG8YpZQFs",
  "key31": "Buwy8eG5jK69ikrtgiZPNhzKPK8bgKy5aNb6BAr4ZR5nEzPqpjpbrhGrHhBL8NVufdEnPhYYDmn26hFP7cDAHQf",
  "key32": "5SmFzLj8FcSEAxZXLpBZKgxnB5qSr8J1bQ2GUK3h7oduyAGPHcGj769RQuAuwg8quJfXirhKFfs8RepAmy48vLj3",
  "key33": "3FNAJ9FGQiafNYBoavMYTg4E2KzvLhSH4HU6YTyzhCvZqVT8UB1kjyAsYphJ9ENS8yQaUuXQis7PBWfBzk4DnxKK",
  "key34": "NEJjTvMWnYdRUPnE63MVUTb631mxaeL3KrU9UA8rRxPvc59JuYLqJaKkQxLSe4h43ZS9VvSwr583BH1fhgDDcsL",
  "key35": "4MCcpgE3WqntbutZG5LzMdwRE1wbgLGQ1kXYTWRa2mXrzs4ocPhDpTQpa1PRrtHFuyAWQZjEqQ5wtwVm3pWY5RV2",
  "key36": "3DQFt2ktvF6xwKoRsXuAxi93rmBbZP5pCDbJqgNesymCDzm1Hb3rhjbPK5Znaj4wseo1svcLkPxcRx7xENYfXju5"
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
