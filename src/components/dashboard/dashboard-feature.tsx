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
    "38YWmVeF229GSK4zEpYEBeHMz9AQcd62unqxKDrNHRrRGwtrBPc2BnjPErwbEesZWj6eWqb3Ch3JGWcUumS2nNry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54yE3yNhkoWxCp9b3gFfVCtsio6dwP3puwbfCUSQqxeg7CCVmVmVexkDHyCnUjDh9FQqYxUr2GELM7CURdABjYA9",
  "key1": "3SDuyfVGocQkRTXX7r1MCpERT3CTQd6R7LyohPVxZFE79rMsZTY3tgdhRxDLvSenb5BpRyZG5dFPxvUJPFMabJuX",
  "key2": "4ARzZ6V1BXs2dg8foYfY2dw2P28fhNn69EMn6jmR1J4TLys3y9tEC9cLw2X9mos1dexMkr7x3R39JX6emRGhQnzE",
  "key3": "96W1YGF78hkrVq87B8pkT3bo1s7H9tmcRQo7GLm73XsRsqM4Hfoj1wSbkAKLegf5cpJ9vCRHhMSdrdMhx9otVD1",
  "key4": "4TVfMf8KYEAXJyZZCX1B5spWDAhpDsQWSB6Dwz5iUrecTNA3KWcEJNDd22untwFkVsBEUWomN1jHA8jSENKWMaDu",
  "key5": "4ubxWggjs1EZs2aCDBVSnv8VU3oELk4bcjHU3b5dcHUv9RdfB8j6ytGdky3eq2MR4JJ123aMx5CVw21Zkxn2CFS",
  "key6": "2v8g9f3HG7UkQ6A1qkT6FGvihgPmfL6352we1xYwsqeeAJ5vkBSdU34ocsf69Ufjp64xZEREwKrejsmN8GJFfsbi",
  "key7": "2UttyREfvf1ysnc4PVrPTEzTRJf1pevwqjBeYYecTpvURPfHDsPcCPgUM6tGRcfq4d8zfKV9WoLfhdDJHfKUM5vE",
  "key8": "qf3L4iyfWmqRtf5HUfzc1EPg9ZqKaswiyTCLaELq3YJ5PqRY7z1McJ78zhDqwKCjBvMBcfknfdeJKVWCMe74B9B",
  "key9": "3g9oB9X8JbpERYwZJSfm5YbCRZNprAj5ViAJ4fHxhaaA3MFANi7Mu3Hdmbm9vhwqvrY4jGkpAeLSYMSooQHeKTgr",
  "key10": "FLzCvNUr8zcXKcCPfkTYmCedisCRsb68P5nyLErmbBi4ZGbFULTzztucK9Ap7rG64TKWvQL4JehvYTQg3edXwMG",
  "key11": "4AQA87aN7QJgBtk57WC7GeNerUgfCH3vkxi1rUyqdphF9y5cbVA6idQR3JKqQmT4t64UKKRvYZuJNsdGVa7HVvRB",
  "key12": "5NPQ2nEEdYGg6h41qhPUTTFopJa5sWeLAdjA764gX7YZKMvxknBfS6JrciM41PWru79swnCD8XBbFTs4xYChC1ob",
  "key13": "3htV8XB46WoSfxGNVzjNrZc7CKRMZUyMF6YPHUrF4as9yuaEPk65CkFFGg2CEvEC2xctrwgZk5VGKntPN74Cf3cz",
  "key14": "3CXKDvwk26KDVJucJqSi8M6yovU2eHt63a9bq9fCxHNDoZ52c18efQ5WQ1on6kuUMF81Hx5aHRrqwv7c6jbZ1Goa",
  "key15": "3okuUt6BJBEXwVc7gyvtXDzqRFLfWroJUdw6xpt4FHY3zhJA61iBKXZTYfGRy55BvC43fpvJL4MyFCDpc4kprszU",
  "key16": "2NP8g4f4YeE4P3HyNPQThPt9Rx2ncf6s9i59GZTcqXe91oQ9NyYbGczZon5PDVUAaqMrk1BrA152nQcHSE7uSZrz",
  "key17": "2DoEj7kvih1ZknKDjSrRnkKqB5ZgSsLrSksyCtPMnkvkFMJP3YmxVffJ4evFCmmY3ZFNXUdaM95qCT1XN3BRdaBg",
  "key18": "4C4mtgiVsBovqep4HmLwuTzqr8q3RB9McKUAy3bEdmnfV6j1dxfsganCF8vKypMR6rbEnYhG28JwbthZdL1gGK7A",
  "key19": "3JNaDvykPgvApcw4ybzwRpe9YfNEQLbGTn31qA4NVf7PDwV2FW8CcxJ9syREFYBGjgL8mVJEJbbzvRJEij6S4iUb",
  "key20": "3kaHLFt8Po6hvuUAjKDu1XcsDpcpbip633WbLgX5KHyPXfRbh6zDqKeXNdUU5PtaeACvV2cjjC1ce4LhnJ5UanpX",
  "key21": "2JX7Xykq36Az1NGJuEucbWb3yChrQ14GkzSDP3w8Puvz81nVyFJsWXKTaiaSRXd6qcTC7Gaf3m7Rs5gkbPGe98iE",
  "key22": "GyuGhL3ZJnUU9PZvnZqj9EkjC79yrN1bBNDQWeAdyD35GidUNw5mFqX3EefyLBgG7Ssy2XAM4RFYBTcZzwvpVP9",
  "key23": "n1ZQB6MRkiuxyECd1ixa7XitFzSyuLp1EHoJMNbeBGCKgWj4G3PBce1udEqNWbhF4NLond6XDLfFv6eotMZ53rL",
  "key24": "2wEdBCmZUhnhLSvzKTbiZKErAnCYWuoAug24xAzEywgkXivV4j3n7RAzCtRaourJrqNPER3gSy2prKbmbr7pFKWB",
  "key25": "3mMKWFLiz1dsEcK71RCk4U4gr61f4AMBZYoUoNSYYwqjdhB4Jng3e8pjh2wRhiYUNU1PWNfTuj25EnRWBQJZkzd9",
  "key26": "3zk8cgvFRJEt6L1MriSmTghf4BaNBShy6bQoSfVV4HYxizcAJ8EmkKiNLaAsVfH2Zn98gszM1M7ZKRQdg5RejUwh",
  "key27": "2HZJUtaLd3fPo1YvnJkLYYwpd3bbMoqk5H1E3dvSiNJ8Fq6DiVLUqjVrpMFYz61dnQy9ZPUT7YCgqmPsbkkTSXkc",
  "key28": "3g1bsYxNYqALSqf5KtEgxVu3dXu7TV2NTFnUf5yYCjAsWrvKSLpmaXwGpJABFZbUQLkCW7VNiBcCmVLwFqbR9nyf",
  "key29": "3F1jqud1GBxzMerbB6N6AXbFHjNwhZvGdhZZm23ReSQuhDJNV3ECLFFKu9qG67vJwDEvMu1CnqFV6aY9d6L87w26",
  "key30": "3RcZcDMec3tD5TxSVHWuM8Cjd4cKCYp55doZDKsFbPWF2mTVnjbQcFVL3FKkJw83Lfqeud4SWUVCiPAQDrVa5CJj",
  "key31": "2D22uJtVu1SWGNiJwA9ZF8HvgVqLBfrA984cEdeReAhp9jzZx363nHvY4cy4hnpEmbX8YsatGdDXGsBbk8MHR6p3",
  "key32": "28TjJ2sdpg25TofEuLxt9T3KSYka5vZJ4K9jF6SPSB8A9eFGVEiuERaK66taHnqQeYBRe7JZ5u5EQ8PUPP5GhYkU",
  "key33": "5T3fSSpAyKVKMeuhs2fUTs1doEj8esBQeiyfbujuvnZ8SKb8fdgHwMGY171R1d59vxfd9EL1NcYjFGXBT9a8VWfG",
  "key34": "3M7sdU2uqYsKu4eRDb8hrwt8kPyHRXicM4rb1wYsxSDn7KdyQp5qEsgfoK3v9RkNHpd7YtzfEwon7VyEZmbSziJd",
  "key35": "58NBraxeST9cAR2BkydRgDPsdG6j5AMZUNLoX5LaYuoybvfoTVGkKVtFthGaNpLdXnxJaJdnYWh3Tp2N5RCgMSmb",
  "key36": "5hvWbMXJZSoi9opqg8dE11AhwVoE2xwukAdCWqbnaabFSNTzbf7jvSUuR7V2gZKVNsA1DdmkWedGq9kWgwaA3v37",
  "key37": "3LofX9RWq7qgUaK2eKH2bbpS7d1GaSi6QAv6uynTatKaqK9NzhFEjN2q7j6A8bk7SWB5RE98H8oPwkQLSMnmuroV",
  "key38": "43nX2suhkrdqxKsNCp7kDbJ6khkPK66iXBeu7Y5PuS6f7uAHJMaoucRxrD9drVX2pR3vfPt6cUM6asApxUmJMUAU",
  "key39": "4NxEsanb3Sw8Q7bkxyPhiVWZKDJErRJA8fXj8tgLM9p6Q3Yxfeq3fFMd4YGuvKiHftXRarpz9Y7VVKx4GYbwDkM1",
  "key40": "4TZnvvVBo8zANHCXiCUtRN9HRQnGDzTvKS1XCWMkgLVsnqSt4BHe5NxoG1TLS2YK2qBJwRaEv3heR6vaohmB51PN",
  "key41": "56ysRSxx8SQyVvV64j2gH7JEj56DVG5iDN82G1J4cuoX27wCSDQrm58dNNZft9PYZ3idn8sPzv1oU8oMdu9gV6BA",
  "key42": "64NR9rfWkthJ6oCLWKi54omChvZcdbnJrn1bghh3goyigVoZirLBrtfrv9jMagHh3qwKtvqTWS6h5XpWCKN7UMLx",
  "key43": "x2LjaiWPavApSsRehwB72AovkDTg8Bf1jzEUpj2REGpyGmdvRGgLCJoGKEQV99NruiUVFLRTARRbhgzJMJW2PeM",
  "key44": "2K2UzqhzfYergwd6M5oWTYcPUQjXoqXJmQnyEqgyDSMCuooxLyhZ4pjf2f9kmHySuaXWFoiFk2L15w2CwzueEYC5",
  "key45": "5AhQJQACqeLcvuPdfj2yGvx8NwXfDguECxxqVrRL6bashqSNhtMftmF3WqepQf8wSqpVptrjS9wgDSN9aFfxhbs6",
  "key46": "66HwsFWrqgzzCdmJzRdx4kZQFQC7ARH8fMTVBx3wtm4bvCFoeL73qT5v63eeS3Tihrv31NPoMiBWFewXqHnzr1KK",
  "key47": "3zaS6uTidDTnvAbQC3Jp3sr5EnzPJdZDFbUvJ4qVW4GWPk4NY6k8UemSfxKaGXZvnPuGcqW2QoLYT79bghaufUHP",
  "key48": "4QbVa1z4WQcZb9a3Xz4Nq9sw4uZnfJFeHHA38aNrwHJ92S4Tv2TpWgCz7hj7X6xFKcwTxY6rmn3g16QF59SANM17",
  "key49": "34E2XQMSXS8Xb2qZYJNxKzubvnG7Lsbe39spZLFPahXHx8UvmwTWp1UDvP6tkRcpRcJTMZtAeaHYidg3HFKQYvxK"
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
