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
    "3GrHNmnjsqjtZYQzaFU5rr1L6SKqej8Rx8MXrhewKoEgigwgqAYZvzVXVzPKZrTqzRAgPHnuUveAthGYMbXecNf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJfefVMMauwsbCPjixzvPtdupAExtqVUDX5iHVo5brEsnW54ug1VafgFCWFrZLsaZD4cyU3aAFgVoX27G9AjkvQ",
  "key1": "4bQCnDrwKtaxMMMmEMuE7tvGxbRZ8izsFu9qHhBtFoE4iBWwweYPduZomrPtKwynKUSS7y5ypda6P4pfVH7h8NP4",
  "key2": "4B3Eh15D8mxveaxU7HpU3Xjru2jcCs2SoY8d3vfGY7PownAaTWLFMn3eUvfz2iNjc9dNBUAuvHqfGyksZpVSf3Zm",
  "key3": "4zjw4qJTt72e4yQV39UNxZxMxqcRY5cVxw8ii5CPZAapkHCPJ8RKcyTqAHuonFzf8Bi2juZERKJvR9uNm53VBY1g",
  "key4": "4vhPbESkZ451JEt6ee8n5D3Nn6r3PJr6deEyNgK9KJaQLg2wGWFSE1G7k71pWCndpHa4U2Kh83KmBaV3oaSaUoYj",
  "key5": "2gyHcpNnnypCNqZTMSDxAt2r9h5gzwFVEiFDKAPPx1nY2Y745SPGMPMfWZHumcUFrbXq2sLGAPf7UJvpEdfaT72A",
  "key6": "P4RKFUiCrUxAbLofsUVbXCFd7tyQYVofzvELUo7oWPtAtqfNMwsacUsjVCcYZbsv92PL8SRhwqeAmqNcaGoMeBL",
  "key7": "m7no9GLdnGyUEjDihrCrJ1XNdQfBbEDZkENhXgNvTZ3vjJM7JndVPLL9hVFtefD2AnmQb16mMZ7jkhrCZmuXUj6",
  "key8": "jMMVPE67pnmscHBXisBkXfDfLu9JCsHgmyfjny6sqyMS3GeyavYNUo5qQbhpADKfGm9SPTpYixMdEXfjhutWY7A",
  "key9": "4SCfYccZ74cjR5KViLVJjPqczFpsdcW59KEde1PyyYNbcKysKtM8BiCphWbMe4QbF1Qm9AGDV9goVm2wA2z1fGt9",
  "key10": "4vqAC7DiFnQHEwXtiZ21WdVHAwKnhVedJjLbUywdntZ2FP95gqiWegFH75xhmAdXRtHqeh5vfD1KRRv13n6fNr7x",
  "key11": "22GqGPdjYMz67JL81nRj75n4omVcdrWwozN5ZQMkv1emsVomj2L6Tqbi6gTirmW1Mo5vPeWAEjLdneM5XG86WhrV",
  "key12": "3GSw43K6T4119nJoiQePvTsbKNWsUdbv6fUTaoHq3HEEB8bn6Awhm7MnGydfHPnnBkeWwLbmVDxhbpPsa99GpCbg",
  "key13": "4FeG1TQ3QjtcfoXySyqtQPFW7EWrpv93ir5iUmzQ7QAKcdLCaHdN74b4u2fawHavpYsyzPoML3g2ifuumcw3z5m3",
  "key14": "3aJ5Z5vzARJZTkb9KH36NvkSsGDjFFjbWtqpEzcYa9KYZDrR59WyWoATgpHxnFYLmiULX6tkopCaR4CWD4pQzQMC",
  "key15": "5tisD1GuiftfHtrZs9iFA2cBoTHwJdQcm56APygEoe4h7c65eh5oVH4gSoWantFGv3WBjo4uX3mpCSBPrine4AP3",
  "key16": "2iZvaEs2bFyCf8TUN6bR446bQcLhHGmK63Pgn4vkEVyibYWujYPja1ZQ6DXq6cGjgHxPPxswYUvFcPK5yobpqWr9",
  "key17": "5i75WhVpZjfkF6gVzqmocViGPedji94UnJoVoGDbpkE254zEUJ3KvLepc1U4LNrmMwHHTt2jGWaNykRobMDonxbf",
  "key18": "4hXm5nEbd3XCLGyGeopoJcQZYH32utzC6ZRsx42dqGEvmcqoktXZoxF8cFJ1Qt5Jmke9bzSkHwnicPES18dRTxsj",
  "key19": "3is4sDSx8Mz4wEq5LUFJMerFuoMFS4qH2gULeUyAM5nWCCYxgaGrWtibcBRn8KMbmDB2pFwbYLbV3oboCoLHhhM1",
  "key20": "bQ73aTjnvBEbsrGzkDU7xMcgruW8AZnk4E2mGyfzn72ZdD7rJeWzPuzP7FSDgchFR6AYkeEGbvD5RoQGxrJ9vx6",
  "key21": "2qTsjvHiK99MHWecPMu58oErmLvaJ2zUpZ12WyGNzaWPinFY5wDueMNUAPVBZNSMqGgBWSEHpMvHKMx7SvmqVUus",
  "key22": "MFTDBsxVcHKtmRs39cYVjWenKiakSxVYtqGXwLjeDy24mTF1TCNVk8cQadBMgRjoTy2o8SzxpjRCWhMicsfQSa7",
  "key23": "3u3s4iQ4ywEFbYTTpeMFzLCNfzntJHfCsJfj9KLTbcKQF55gL4o5UKS224q1eoHUpt7YUfZqobhc6W9kHFwnf7P1",
  "key24": "2UM7NG6JwGHtEU1F647h8Rv6khwvcc9hvD99SUz9iYpNHXid6kwqYa7eP41ikGQ1r2mpbHemyrtzX74MFfP5yQYV",
  "key25": "5EvYkHDGq2GTaLyqdKFyiDdBsno5TbYjP8zDr8cCAttN65RBj8cP4PPuW6H4xedD1aLA6dT59tepePDh1afxu9oo",
  "key26": "nYsRTW7WzaC7oCcZQhGCozbz7BQzDuD5obvJUWBf4ihs2H1WWL2JMmgY3B62vhXBqG5r9vk7d4x9w3gyqRzEFMu",
  "key27": "21dzQjgLHcu5rNjvCGh9sDWry1LzAaHsdFztTAyQ3mXyN1QXXmEKkDrooJp4D5cTL3s3ysR5xTkDH53JE3G3tAR2",
  "key28": "2P34Zyy3XogMbWRtmAFDra4C3DZ4AbYDDtzSBmXdDo7Tjwp9cuKCubiNWw9dY9aKX3BVimZdCfc8bh5Mtgp1Mbib",
  "key29": "2TiVNopxCwTbnbQq9o81ivqorYdkWajmzFHf4exsPCdo8TaS2w5HowCyg5bNQF8Ep16nAq3kH36VBwHqXnm8yn7B",
  "key30": "47CatN4tEakM5nPVQY2udKE9EptsVS2rXq969QTUkb9tskhXKmhomrsuXm6bmn2GNhwQiRfdMqHSuBSNdBjMS3F3",
  "key31": "4XALdEdpoG6v3A9EmCwai8fc2yLfwZ9BEktS92EhFZn5CYKYf4vCn7Ue4R81pX885NVhu6V8dpQ3epxebbmboqd1",
  "key32": "23RNfEPEXgCXfcKbhtWVrhtnT2FUrUtAS5idoUtLruy6CwoHi1DTB3dHUdLunWuD1XkEykoP1yoasZKaoYtXpmNh",
  "key33": "4BgL1gGyvnvwnDt32GssjrgxK31qRDgdh1xYyRV9rWnmfSeSu9xTyHNMgsZUhZtcy8Rc5Q1C66cgUhasqMmEVsRE",
  "key34": "2uX8knzYcj1a2jo66dfd6DrCsgpc6mx1FYseiEwuUD4h81aRFsyxSSEhVJDkLEdBhC3KqHpRzuhR8LGNNYthkHb1",
  "key35": "5xcdEymnmPchoCQ5tMSGTvuj4g4VJq2cqQqZTV5ZpREDssdtT15svcocgFaeoLcXdZrYehxoVNDVv9emsbb8fUcv",
  "key36": "JPcNWWmGE6T3Tvkp24fGbUN8mNHTCH19Zer83NyqSctRx6teHuzy4vWkZc6iVG4x6JpQAvGt3aqvx87LdJokE7n",
  "key37": "5bNkk37n4j88obiUgVAH76F3wifUYPQpFY6iqfksXyZo4yQ8jQ1jgs4Nm5LD7eZSeW8F6mEU8w9B9btRC61gu6bs",
  "key38": "KwXLRU2xMULM16ZqEVRqPWkxf2dPf86eqveTBnUBQs4gWmcFbx7Pf9kfQFaaKcHGYg7yhkKX6HYYSJZY44n1RWi",
  "key39": "4HetLCkrp7H7VS4AYunmqEC7aTabDawzmMf9Xm1E9taPGLbEGa5qPePkRFDLe69oqVk3W5br8GH35AZZ47jqnRju",
  "key40": "3EV3YBa1TUrZK8kcFnjD4zZJwb4oYRpmbXnNQBf1DERjUDYaMCUjnhT7YgVQ7wHY1ZkrHnWmXgAVet3TmSEmPB9P",
  "key41": "2ViNMbC5DA1RrvMRavVuXZdvNkRzmkXXbhibaBuxTSnfcwYk2oFHDvminqEQy136Rnh3riFV8A5CHUeVt7tVAA4L",
  "key42": "32wbVraLkZpJUsKKvKuGvcSixjeXeAH2Ej5h3wVwWRdK5onW6kyFJVHaGgNN6vFARvyMGSUMunSU1agrYvAcjKin",
  "key43": "4K2qZ4Ws8kxN7k6us8kvfhKpsPJYqi6GiQinvevdTTWSryecUxFXVXeL12sgMxA1yWuaCJXf5BSEKA9Ti7c6Csg5",
  "key44": "5QcyvbRhjPBjav29ECCVimNYgWEP2WiNaUDTsd1Cg3PKzCPkgKBDQamnbdndF7xJjxAWm7GSXGd5P8BCjjgQN5WQ",
  "key45": "67QLFWrg6uSQ2v245aC5GNVRpYcjpQia8LkybHU3RW2f72UHzTMvQKkeFXSy2CatARSuPtspc6GKKBtBH8wHbhYD"
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
