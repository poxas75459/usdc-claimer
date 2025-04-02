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
    "2Xe29TkggQwmefkyg6rr4Lx3JFFLqytgM26bDH7FmhxLi9ECV1DuKGPKf9K3zGcXtuj4xsdhMqohrxzk59XoLbuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pqw2EJMPPoDARaGdKTEzTYzKTnaBXSgM1rTYZxSq7v1QDGWDLLv6KG3SfaWm45MfTxnj8X5qPuMKpRVB6HpS7s",
  "key1": "2Ygij2EBhGAP1vK7mpyub8XX2D2fgxHM99xmLBf1nLTTygwXCYBhTuNdPYwB35Rk5MqeMKiJxACpSWYh2MPZAGhw",
  "key2": "39ARTRZWG75PgsLkgKYaRN3xXb3HDZkbnFZT7AF7mRoNP5PWkfvSgyKjYB2nKd89XtuKTqi47hnpKUFPVsLaTJEs",
  "key3": "2oJHyNapnbZEuvFRdrnPe4jdf7JEsKxopWnmy6dsb4Mr1FVMSkjtuzqv1sE12FzEiYxb3mD9n1dg1XtPQRNrjdd9",
  "key4": "4ZwrPsApUj7GJ296XQ5t6g6fgDfNuy5peetMryrpSvQdusAHBB92htmB6LHWmEmE9TPRamygNJizpUvfqCaGX7ER",
  "key5": "HhuEwpNiVSPbvX8g3JwPrLK7AevwoZ3Y41eVakgrcTBa5NreD6xHFFiCrnNwp8XDbsr851q5iPVg8M2ng554SJN",
  "key6": "4wodwGebDV5AL1fmK775AqDebqqfgikV8XvQogdeCuob6hUwS5iFqamMHHcD2Rykudc1uNoFL4eANEUxKWXJBaTv",
  "key7": "3SVPVGahxzfumr2ADJ6WEGtVcFjnDh9fau9etVfPQRStXpEWZtvockzDpacu4S25CXymj81kh6uVfLjy5tLYs6Mx",
  "key8": "5RvqW2gc4BpcTFjBkPdqEp174x5x3iLCqHrgWNgUW1MuzGbUrb7GggH8nNWxTKU6TEiv8jKRE6HBhXeanZqyFFHq",
  "key9": "5HkHacpksCwLjYVtDFVNqWysLxmEXRx2ommtyLWapGpeFaCrX3DhjLLfAWe47ZM8TafMXPGx2GQbtRc7Xkhgnryo",
  "key10": "3CigpRPFkJ45xMC8FHieokFnkro1wqiZrSeaBaHnYaJ3zTYrJ3UMWsTTAzzZECi7nDZuGA1yAZgPRciioe9rfeHT",
  "key11": "27F1met5HJHNCVAXczvPtx4a4GmGs7rWNC7C5SqBzpyNXpprHBF3gqk4XpAZmCRojPeXsZ24sZ7LtS8a1S4ZTn9C",
  "key12": "4XYa6PwKG5j5Hxb74mZ6DoJSX8KCziTWPjJfHDLy83DRksZy9BAUjEarvTSq1ZibnbZvnh6YdLPyf9qhjQ8GEWgT",
  "key13": "fJnxxWqoLPQDrvARu4ArgNJEAeXrNcqMtSQd2vKFyWpbAjKgJAbSswqHARrfQWNEESiE7rzd6N1WRMJ2Ws2Ngdb",
  "key14": "2c8hMWEXMomUtbmvG8Q3RQnCr13YFoaNfkpfyoT7ugAYTpoJR2FwdCgVpG2DNoFYyvfnq9q7piiBsdFWikcqBvBS",
  "key15": "5rzvqwd6hfJF6mFoEd73BkTtcFxqYeNtEP3eKYt1UVDarj5S6GcwiuHpVcJEFjkQrJUnRR47Zad4A22RSGts8Ztj",
  "key16": "5QMEsEtbHK4T5ttdbzHqavTrHPqFv9GjPN519zegKNhdnoyKV1Ju8sCywrPtGr58BVLEgrXj9DgKrNjfxnZnCF2",
  "key17": "RKB2LCWy4smXCRgqrPg4S4rKVxTHSEwMxQ89cRG6Q6azQjuTxYWH4DV7P9U5pBd6jNGEj5ZNWtG4GVTpQgqSj8Y",
  "key18": "5HZoe158VhnPzesP1YGmsNDuXZvs5zNSWPA7ckoKj32swBefQmZQUZUvqtxJNJZbA34NdNbNTs4SqRrFfU8b4iK2",
  "key19": "4wkA3uHqwa8UvAVDU3ccbx3ZuRvwKR5wbiqWZsfCFSzTSK8RUkRaqsE59nxp6qthAhJ2WrrubZCPn84jgkMWSzPj",
  "key20": "3prCeU5fa8SdMjPdnUzJX6nuYpCdCnjevt4r5JgVpMErckGd2B1vpdhvLEkvU6urnhE1en7yqeteAmh5CjT5un8T",
  "key21": "328wyW8TB8bwbxW4iUtxw2zH8qAFggakJUUS3HcytyTVyZv4wyK1wvmLYkVFcLEHrUaDdxu1NAiJoQuiX8CeTsGL",
  "key22": "2Jwj37sDXcLLKqeuZkd9vWcS3jzozsnfqRitBXCZdpGkVUhmvuRg2mK1gjeYkA3bP41zw3AdC4b2M7TrMSJYuZn6",
  "key23": "4eiMUdz3y2yK33tUkQ4hVhMvt9jXKd749HDWoaDZzs8X5CiSkjdCZAeovsVQFvLvC5spyVYJQSAcPGoRRjvLkG2p",
  "key24": "v6CZdtMkQhJqNDgXrWyJfTT4h3XqtEwjE7DpF96z2zWkDBVrLJpUnUQz9YEoVYemDYi2tuk7zm4UgreL5or4eJ3",
  "key25": "4JohzJueCEdUiYAzhPRYiue4zr43oCkz4u545Jcg2YsZFV32kptkk2rwTuHnFW9zEnv7QCfGAjH5drXkd795D1t",
  "key26": "21Yi5BHnW1dgsGv5KeJXLWcAfp8ijAwg16xTU7hsJHQ44AZXCyk59szwmSJYY4UscCRAvDPLvx8t35Bf93rDoQAN",
  "key27": "2759ZyLj54LWTz9d7Yziw9A5ihaDyWCodzQV2pWFzNV8ux2fduwVPSyGF3vzbQLV44EBxTUs3g9fgAjUtuqKYsBm",
  "key28": "3axgJKs3fPQWEjjdWfh9KuEusp2nRkksYpTiJyv4Tz68U4b3Fq9EvjeF2VqDijPftTqMXMMTvQFrfZkmJn2w5S8L",
  "key29": "2eapp2isioMf9Cr7odtosTqupaJWgBxh92SbprhXhY9RzASTKbSMaJPbPPZ9fDyRaCyzNiQCGmQDLUv9rK4UBSrr",
  "key30": "2rWU4r13kXaR8gJBuEXuMtv213a1ADmA6pGcKpK8mQ3CEJ6BEd1VJxz8eZbmkgjQNh1rygEEisxDGuLLy44ozZuz",
  "key31": "TAJSSXgzqdh8NDCAkWjjcQV6PC1Cv3Qy8WWiXucH1QfcAz8VLdKXMCD2BUrF84LaGGar3wXM3wYb4jrHdJ2vmDW",
  "key32": "2eubgWcekGEzy8xwk45vaa6vqTpTTEcQ9CmBYdde4xm5JmcFVSvtCx7cJpWHTbA59jhmjYyTCbPuFZvonrHKQB16",
  "key33": "64FGVK9WvHoCgXvrjhuQSFaxyxS3pfS6YN3d1tvH72zMguputTm5jDnszxLTK8GmqTFn9vx4htJoVmj3AhrETRkY",
  "key34": "rgAanhEitz8LvpTSsxA3v3hdKc3QQh2RbUCZRR3eviu2DThSPRc3Um1FaPzWAw6fxNns3j5JonFrjx9trv1mkbn",
  "key35": "5s6YhecsMh4H5kU54FGDWHFvrwRNMHzxrcA1PhmhzevZdv7DbdeKaPbHfsqopd6e2dGAqFKQSVPn1qT7k95DqFJL",
  "key36": "5QmHy7rN6w5i8EkCYcPh6T57z7CuapiuPky3v2kfq7mYKsyuY16VRxAup1TQsa3GKPvkiS6mMzsF7WthMxxnBy3S",
  "key37": "5TorKjvYvsEbZMhKVJyzvDxbP6JutGWt7MAobJ7FSGKRsxVnYTZodAzeorC29FCjsJe6HNQo2iaVmfF8J9YGymBy",
  "key38": "5Fuf6XW1XW4isifoV5YNej3F2UJMsHM9bkju83z2TpRaQwwbbvtFdSaPiRCck4LwijxxiDj8HyDCHijJNhmDDM5S",
  "key39": "2cLMKndcTJjqNZFX21zHUSTVuPboNVCNqsC314udUijQs6k8G3rexU2mtyhgYdsWQBdv2kmJ1AMkrCwGQjqJirx8",
  "key40": "fxb762j2f5bi2y5Bkmb7mL55KczyByzt29sW5jtv3kDufXPtu1Wn6enj1QuYGrtrfFmoXJ5McehaF9MDWt5qS9x",
  "key41": "3ADWZG56J7y6uF6oGPfQ8cEWqfnwSeof73zjQAtPtNVU6z3v3aBmtDFevgDAdphTUP6QSAgp6NAX27Tovfofva4q",
  "key42": "4YrVLqBU35q3UbRxPoEP7wLg8Q9tshUqF1LAbRBHNfh2cSJPmfceAqJzE6e9cHDjN9XZK6pqQoRNEB3juRsDUDX2",
  "key43": "do3Y4xPCBAYY6VAgynsaxTqJWH5YAmUNVqEA3rgeGNNok3mgExNvHMHUhjEh3qXzctYVzrk82B3aauPJGXWRp2U",
  "key44": "1RtFE8QWrJ6fHaiAQtTiV34A9goh9uoJRxY6CUN2u5EstPHaFxGuWGzDz1Hg6sUfE9U8G7AW68ByGeoW2DpTjh5",
  "key45": "3RcyknMhzbhyJzYwYN9yeGdVB5xBbpYcbU4MjWqhhxqh4e9XHxsDYJabibiXyag1KqMxSoqMB5MvXNTgnSgGiTBQ",
  "key46": "4XnFHH21JNi3XxneEwDu698Pg8qdkQe2UbNXrP4aEELAwFh4di3ZrQKFQzygKdifEmppNPxp5ja9AQoPfQ3WjkNR"
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
