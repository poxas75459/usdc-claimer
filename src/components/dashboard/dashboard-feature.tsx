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
    "G119zMU9ge7ankrc3VoseUtzXtQPav9Lj8Y95fNFRCEZkQ96rzkJ5AXVJLBbQTbh85fHCGUNdzXENASc8P4NrQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WQV3tDHHf2yAnevftuaWW5LPrXi4JZ68dfeagb9kyQw7jZU5jHovb4MA8j5DPLUv77Ptndzazo62d7wr69jqex",
  "key1": "3mmcDD4e7AUbhWAyxyAHMYQUC7mcgo6mTdv7P2vuEZEwwzkZ1STJTfQanvJ5EtuAHf7zWgfWwm11ToQERJEUVhy3",
  "key2": "i7DQGRx66rokEPs59E1oFrUDny4fAFbKfUgX8EChhevjBaEpUX4hjnq2CJEPqW28KfQB4nnvkfrUNTuM6fijmcM",
  "key3": "2UoEDb9xPVa6jVHd2DwQYR35VUj2t9NhAWfKeBmQYMytskVW688tXQhkK59qqzYb3ZUnQ4DtHgdPcy2CGyEFSxw4",
  "key4": "3uAq1tsKh68JJAVomu23ynp1kiiqdUSTN81ReCw2UaZrfKZ5CaahHxM4C7ovvtP5VEhLzTA9PxRiLM484NDN8jKF",
  "key5": "4NMQAdJcTcCsMyDYAWgRUk9mg7NHnYYLU46ACXiDBjAvXYWmjHsfUjtv1b7CMmCEF9QZdAyjcKkGvGa5xdMmCChm",
  "key6": "aj82sqRZvRakKCUzyP3d5ffKzH3EymFBCtM8SgYdM9qT9kz84DBAQmuSNGtvVanm8HY3hJjVcbnQfufZiEDLQpH",
  "key7": "5cnAgnw5Nqh5chenysMqh5D78VipRRJ4Xvq8JNYb7VoGfLE74uyXfphZjVbfuvXcWFkpL6oFaz98CaG222Z5ax2c",
  "key8": "DD1KqxYu79hfHkHJvXqD5GZUvbsKBrni185AbZikF5mikVcHj8wrqBySzSLzW18KMZMhmPnZg1iVDBSwQfHaETp",
  "key9": "hVioktWnS8RBsfVYyiU6XQgXaBsg4mzSnjzHBMKWiSxHReNrqhHsnZ31oYukR4De3KdjgVmj9stCPa8Jkjkq58s",
  "key10": "m5PPo9K1UVXMNn7m1U1pibhYhRPYGBvVWjYq3mhTNANMTjiw9ybQyK2djTxcU1zkKLzpqA4nUw4TGR6GQoP6moV",
  "key11": "4cyqNYbRm5oqNCXv9BnGFj69U4VzkziuG9FojDjYFwtztNy5CT5PusVGt2QvxhTYZuLdPfZqxcFFmTWv2StZcY9",
  "key12": "WPcDFXKNerZBVYZ9YcXBZNTKmXXx8stVwLtA5Ks8bjXVviGAAVEHwtD7ZUytPBTJGXMX7BRZVKkmMPnQPCtShij",
  "key13": "4ufgSb7T2bFdpWirccWF5KS46QYkhzAgJ1EnjwwdeCJXRpDt5LUYge1Nbqyf83VRNpQPdeRQYtpB7BEyAYH35aKp",
  "key14": "4i67UDgxFkupukoyqSF91Ro7xR8dK1vbU4brRuBpsPaAKuUoJC1DzuZaJ3Gc2LnKuDFtvRoNJsfX9g1k7LCsXdDk",
  "key15": "3dANg3yL2VQREmpP9juU74nxBhu4sJpCEzTS8CrE1hZSxLUjiqan4h5YMmf1NSf4sqJJJMYeeAoaTSWBTtfHzAcx",
  "key16": "26XBJuUy6gKzJxPTKE6hGhQqnnk4tb5n4oVy2XLNVN2BntkXkApGY7xbnkGxW2cS3NX1JxsCpgKZqqgCVSn95vxe",
  "key17": "5veXruEmDjynFWFFNAdSWEFGkihJTQqYvZqHmg8fkyCSw1NKJU3cHJY2v6Mrt24gjJRPioRddPykvykGaXjkm1mB",
  "key18": "3SUi3empe5U3T3wAQzp1DqCJsCqY2G56ouB6QF8qHwDF7sorzosj8CAKrKPje5VJQwGmP1U1MpBMgcDay5BQyCxN",
  "key19": "4Hw7KTAW5gjTAsbY7H4Ep7Qj4FWtnjrHvLJUJXgW9AtketWmzWKqiJi5c7hZ8b5XapF1hHGgvw6Z45HLGCtRQSnv",
  "key20": "YLwbggT2ZFDUzRfVsqgAtcrdt1qeF2B5Tk3GJwcnvPnac8kTuwFJK5bLy1Xzs98eMrXAHxeATv21iK2u5rBSWme",
  "key21": "5wD1rM3bHUK6pACbk78qWGQQYjSHEEQ1uh7w98hJeWTsYM971U21SFAJESFjEWqNVgig9haqvRPH3xdibErr34Ah",
  "key22": "Zn6EgqFdUAQbW4kvKCezjmoWv4g7BMdmeVpgmVbgstT23zk35XnBaSboULkb1LJH8dzEk15nm3q2FhZjPuDyQsZ",
  "key23": "iLB7QuwWKgWoW6jT9GKNsfhCajQheiuKZVbXRco6wHAuyrt1vFnkwWyhdLgqrEZEpx51Sfwqy3txGFGAvJX6Wdh",
  "key24": "JeuWBG9qUv93i1Q34RL4xkAKSfd5dhRqZRSVUuGahAYKmzVJ8ewJyu3F7VniozX4jnZtutYy1ysTXFKTFou57QC",
  "key25": "BCGLM6HJeejFvhDXTEr1UVcBpRYV9oWKwqWwPNYbXRYdeLM9hMaZFCygR8stEV9gSsimbHvrQAsUP4byqE3BBr4",
  "key26": "DJAZVsnt4RpYy1BwZqxnaW4fXMFLvm9VNvf3EbbBVsyiKzjBwXPTCRPcAbRZp8FFeTY86ZC5EMW4MKNuqpyiG5r",
  "key27": "23fNsqAn5Mma3dQWhiXGVnSasaGXGUnHfFCmpiaYHcKKQr2tKw4KJ3G4tkmEvB29VyiUtHJ9QU3ap7ke6r6vava2",
  "key28": "WNB2K9BRuSW4eYkmiihuiEWh2PhszqnEYcfq7xS3hEZh8UmyxEpscZo4nuFMnPCiDV2ApZwkUEcoqYCCFKXPMiL",
  "key29": "3toMJ8GqoCXwSeRPxtvX6oYCFn7wjdnEaySefi6KMNYMa9RQh2JKYEgLNwsaKMi6VJ7uSDFE8iEhpEPN1QcJaJbA",
  "key30": "3Vz3NYyJkctyojc6nfiX2qEjT8h9EcBmYseaNwSaSNyAg5MHEEJG6P7Si7sPhk8Zr3kkQNFNhtEV3wmkHC3vy3eE",
  "key31": "Jxfg6n2YrmEe5vKTCiXtq7RozuUaYmtTYadENgvX8WqC3LYnidXf8b6ZcrUR1y8DVqRCSJdk9zFJL3ferEJkGT2",
  "key32": "47QpaKerzF6H4eJCdEWvNLiGs8fVweahwiQ1HE4YiAhrZUFUhicxbqKqy9js6mjcqiiKts9WayjrufghbuiWxZtN",
  "key33": "gdkjJytJ8B1YoUJnbCYgAJyd4CPn2jHwe5g3VfW6HkEm3vvtHEZY6Zh5GEXbbd2RRqowhVXqsQMuVDusNaNXwCg",
  "key34": "311LH9RtUwxjAV9zFVzwK7zKpJZgcDYuEqaXyCd7Wsg7KTEqom9p4TLgWWFDWTZRUt1nw3v3VWcBeXKsYqriW9Uj",
  "key35": "37ekLxXNK9LoEZwLk16eCx5tMJtMFMauxD7sNVhUuS8cyKjdPpZq8skka1iS4e4UHojjUFETaFRxByAM615taiqU",
  "key36": "4zeSVYTMyNXS9NNaNUX1KayyQqoL5sfL38DskCsTQBT5qp2ck1VKRRxXiiFjyLXHbNoYGFWVBwwxyKVxCZCU4956",
  "key37": "34tfSQqwre6sghdqACieTszfckEPv612tgTDoz7WT4DSYnCmBC1TwWC3t48GkUiWMGEb2zcXbVE1CPyBWXVzMfJh",
  "key38": "49ajJwtCiigBj6C6jWuWsRQvzXYeEvet8azmch3mKBZQUdBsJ3Kdi9Rt1Rje5bFbaQ6m9jCDCwz2vdBEZVJM2hSK",
  "key39": "HbfZQ6NRgT9pBe3Dg2vB2VR18bG2usLiDXTZqtb7U4gJeiKVP9G3fbvHTSkzABmpkte5z1BUHuzzrC93sQrfA4y",
  "key40": "3ifSqr9WxZYaQ8eUGdtDgLgmquZh5hVqdo2BeYRiVvHUJrCfmzMqvH6No5L1ih3XiV6bqRxGoc1ZsBgwprkJKF4a",
  "key41": "42rHd2QoQHYbgmgmCNWbnzjqruVeTU1JbWyWi9TYJyQYQiehzkcSH5PRRkF12GjiYzTBmrveABjgc9hELfjpB8KX",
  "key42": "3BVNSQDoDMm2gu5oJTgbDMhjtpZjt4MZBV4JeUd965mv2WZo6dfuiy5bBnduKH6DHevLMVNabKMdDtbtxZ2z5NM7",
  "key43": "27bXk4zfhfcSeyZVoPXNg6ZgM8KMirWgpCR8tHR4fMy8Hztk1Npo9uEfovhwmf71xab13KGTn7PNgerK1wFxCN4S",
  "key44": "29NggWLa6JJrc6uWroY1VcQVPUQWSBPEPsYJVE6hnLtP2NSNHZQqydmFUTmAVK2LCArWb13cHnXgcgd5YnGN5ZSG",
  "key45": "2CDppUyiCc95qrTYfK9mg2tz473HtZRbRtzWMefN13w1pg6asQmqJXh57aCXSShoVEXFMFY7UXVG2VrfrMXuejFK",
  "key46": "3sVCrRxkJhtgzUVJbMRq9oet6ETgXYmawoQL5UwpSsoBZK2xpA4E4DAA96azDE1bAUoN8cyig3ZhDsTw2cw6juuS",
  "key47": "33c7aprSRL3ZtcBPWn4Eet32wZcrqkrjLdz2pb26C32Jo5qdnpztyc7aW6nWqFP8smGujbY7jRyWgd523iYsq8Tt",
  "key48": "4dZHbcah1VSxVnzbLRZ4gN4nZwAhMoigaBae5NiCXZXeeBZZt2s5r4iohxa4VcvneP4Emtx1gnTQaqkQ5VCiWC9T"
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
