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
    "5cbmxW6ocKXN3uj7uqZWnK5hmptVM2Jyf1DVX544NeEW28QfeeUduuH3sQqQBopuFdQ451acsSfHW4kwgdA9Xgvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHCdRGLsAYvg3UXVD9exJ9pqds8REWA255aBY9AipaRHPQFuFzoQqwSLPkUqEcVRpbKXKDDsb4jqXg6J1adUL1B",
  "key1": "4y8qSgC9v2LWAP2sCZvWmupemjaP4qrQCwQ6D881H3PZP7eB75msaKbyCF99U9ivEqYjrgW9yuxjZjZgPRL3i9cj",
  "key2": "2RApuY6WDPdBwteapSxVip1AFvdDTDwomw1Ddb9u8o6ByUWFNRqwZdosLC9bNNsXUmQZJoxF3Esmo3VCjAwfy6NK",
  "key3": "LAxqKnk4j1x5UfLUiauGLQRB5zByXb3ZGVStbCBiGjeREkQAzTDmTfAowhpx1hSB361onCynshgPLNJj2T5safM",
  "key4": "23nLVqMQPtB256ka7GY2j2G88CheBGaPfCaAJziaSGGyXb9zRoKiTp23EomQGyjb9h6M1MHqi4CnU7Ww2UXmPeHo",
  "key5": "4f3cRg7CA5x5PnzCxWqVaifquty51ND6kgWeEbYw1xC4pqjzdshkhzYsMeLdb49oADmwaLJqWLEHWyedfaGPRByM",
  "key6": "vNETKYhqkfxboQQALznyodLQLtp5pjgwAnd382dzHsnL7tEw8XU1iyTNz8eojiM7zbZbRQCSLE63RW2WxM2BEod",
  "key7": "42Fe4yDXbEsfwb8MHxCxzY3NW4r4GEuMoxHAcDvMShsgvbYTiHg8Z2tJPFT5wmLhtCtApe9dUNDBzwv31CcdwKqE",
  "key8": "4gSHE6pyVtT3VtDpY2HyEnphfmTPmzktx36YeAkouXWhJJSiMQGcCeLwrGd4UqxcqEU2g12cS8skiain39eisWKs",
  "key9": "5sFxL1P2Hmek6g6V4o6JJJQFKqqTNPRkF1wCBDhJ3yVUVTd1w7PTZwjUa5px6xY8qnEnW7hwMWj4Dbta2PbxYBsu",
  "key10": "5hQ9f3rwWUBA7JMS6kb396CB6f2tmev8Kz5Uesyay3S1w5rPQL8ZN3LG1FyeBTuHVXKekyTYZw7WbAiHoxCgQYKG",
  "key11": "4UsJUT3GPrmNJmrGHJcA1feXAH2Nh57HxEgghWiAoDwoF3dek54jUrM4KEy4m6VtnjpRp7midaf3yGZ54zjifefa",
  "key12": "51u1xmjvZ6jJxgh611S83j3g9WGhNwFk8mnw6cuqBnug7z2NQMmVR8Y69vFgEZCos8AiFRQMcf6gXEUwRqQaLFAs",
  "key13": "4q4rfBsjj9Wzze3gSngZjEraJNanQcTasfcWwGzCnXipv6snzvCEZ72yHsEdi18SJtVBhB2Ce8nRasEh3QEjob37",
  "key14": "iHJnDktFDzmqyusU71ERuKYDVrZyn6ig8Tda5vXmQSmFpptP5Z26jcPi8S56uvERk2xZ8r7Ba1mAx6iGFEhZJVz",
  "key15": "4CAVtUwJYpsRMDkmqiHYSMwjNHz4TZKsYSZS8tUmmVcF33ffnaxKvUmPrasB6dkNABu4P4R1kpr8Zz5YymExXVcy",
  "key16": "QggD5WA6ucixeXRVHMLUFwJ1oaeaqNR97wn1AizrZLoc1dLH7N83LQ9HR4Rz2BJNxJL6XtkZ1WmRvXTDV2xSfNE",
  "key17": "21zZ7RmZKRQijTRe9ostu3vEuw5NiChCWfxaj5vcvwiAp8Z3UhYVeeyvF7aKeJuApzGttvdStv7cY1iGVWifsxdN",
  "key18": "41R5tFcPG3YjzCMJkvtkxeUCHdYRRSFtkCV4GfATi44PxXbALAhqR5NHqa6rrAZgmMAQvGWX4Tg5kC81w3KLpe1w",
  "key19": "5fgHkt5B5ZJhMirswTFmBEeRXKK9s66YSewk9pBJcMxuPudeujzpVmhNKWBDxKqH8mHJVjRrB5Y69DqAmQZ5T2qF",
  "key20": "ed3zW9ptpgFepJUCvmdpigZsQ8N3r5sdiLqFh85iHJMJgvADC15329gZimqrUcVsqUy8ZGaiPLDSC4neKHYYF8y",
  "key21": "fRenvXCxBhz7PvacRtW4N6PSe66KeGiajf79ozsK5ZqJFNM6cWRmZQZ9p5JH7wYV4nTuxvFcmXY7YjQRiQqdZXG",
  "key22": "fvvPXCMJo5DcyxvvxoR2eAhp3Q8grgyLwfD1tztGvRvB7NEtxnFcmgJQA54TqYqikgyka3uk6VseKifBZccLV6R",
  "key23": "3rzjkxoqpiafTf696GnSZaRhPf4mf1Hi3bRxGyYqYh6prBDLA2XyKgWfAdccotneKYuG9iC8zUXRfnH9P7sXZb11",
  "key24": "pRotxsc3Sb2XJQgbRQUb1gAFjULCLjWJLBT48FPDyQ59P5hLW11pmxhvqNWo6whD5mdfsdgvCSWBh6e5dsKTsnY",
  "key25": "5ZRmUhcuKYaN9tuCg8aHVn13Q6EtcrQ1EChJAVpS2393kCmDYDmoJsL64MCYxm7bqVB4ZHwvLCCKggJsbAs44Uca",
  "key26": "4jCT2cQMKTo9RKDZgi2NBVDCeEeW33UmTiyHLLbNiy2Eb6PmqRgNFqUeXNbygo3Xgo4FxiuPbFTjBzrPZ6TcQJqu",
  "key27": "36x7hsssCUY2y4eQAPwYDW2MHakZNr9obWjy2Nt3EDoGZgzFM6n3CVaMn9388r7wE7oLfqMio2oTtdpdP9z5s3WC",
  "key28": "3rHGRsVNUokXmw81DHjeNXk5CQ2iYkSSb9rrpZvEtncw74Vh2QL6Tjea9BDmJ2tfYnbZYERveRNg4FpG3Mtt6box",
  "key29": "4W96tyhpeQDwFTSrbXUcDn3bxTNPWCysHC5wGABerUwzdNp5wyCigRzXRqLLewjtnq7C7EPRb68vt5Zz84Bb4yPH",
  "key30": "4CiqzsygPbcydGm8mGKchXa2FMDsBWKp84sGW7yJFMA99p3RLNrNzrQp3FZRpfwg4mVAZHFqbxckVq6rA6PgQkEe",
  "key31": "5tvAWajrcHhM2YqGySPRqLma4gUBvKGwsciRZrFLCCmeWMd6hJyxiidT3oscXsQ5z3T4XJPWHjmn9Bhsf6dFBgZ9",
  "key32": "5vNG95SVHRPLFaFV2TjygFYBuLoFkkJXhRdUowNcb2UE57boKCnhoF2dA3QKpb2xmPFrea95TbsRRu5ngkMLjm6U",
  "key33": "2mNaJun5m2fi82pKRrio8CWbeBDdRRKa8Gjq6tTcDV5ETwe5GRrxVNAATtSR7EW9ZsgjzCVihPz3CqxZDxXfBpMA",
  "key34": "5w5Q5RMQfzAnt15RsuauK3Nenstj8x8ePLpf3vufsJ6GRVakk2mKqZwqu5uGXoKHQcMMY1UgLpQS9FDexffR8FYY",
  "key35": "PLPohk6eSSaDEfvGGsc8ReHxJSdawCDA4N6vRuzRnwQ6mSd7pvL1sAyQyMVD6haFqRWto2JPRXtbTGDVSozuqgS",
  "key36": "dDNKNm1f49ComnxotnQf9Qv8ri1vxgJ33KfhJhMwPUBiHAkjBnaQjVio2pxQsgFviGrsDQfP4h26neX7ECjnQ6b",
  "key37": "sCoYu8fWFqurkBNN9HoYyksaJzhP8ZsFXjpitecHnzMiLipvkmuZouB629tZ8ZW1ZB7TPNXh9s2pGm92nRnkMma",
  "key38": "3psW9iJTjDC2eP9EG6qwwzRMcTpq311cfQH7k124eB5WZLtn5SHFhrit4hixPpKV4Zyr3sWonrz1AissVMP2uwL4",
  "key39": "4uh8WuxesDGfbh1ZL4Q2AquSHh9zMFUAz8LGv9ZooYEAAWjjfEuS3NM9G4E15jUxZz2eqSRA8GQ2ha9WGUaZbiW1",
  "key40": "t6Nf9F3VeWn9RHFBfgG91Q8rwYYnjSh4pzKB9dq9QQbmKRzynfBpa71zU2LbLcHABR9wkgDqwQHArfB7wirLZQ4",
  "key41": "3uQN1xf4RAexyyqQkL4G1sUju3MKVnojPoUvbck2x7DbvoAdFqs8jduLMFhKx9QqAUu3p33UuiCvuK1GUHgEQ2se",
  "key42": "3ght7AwHn6bmGu8Be3xxrH3RVYKoJ7WK4oLT5LQ384dCVbm4EDHK2MHRW1xP9pcmnkrCoFBgxBA2PrWaMJkRwdYs",
  "key43": "3hCjeRTWGcM8rHWC5RpEAZWjDtoUJC8nDStgJWg9PKALi1YX97vsHwmBXBVHUWir8mJPEmfEgLCESukqw7Y6KxAw",
  "key44": "3w6itv4am6gzUmBXK8xLfrFsd5SEvmuVv97Y7x23Axy1A5sPDpjLcG6Uy3heGwYBfeQSJiebYnjoKz4oHKphdZU9",
  "key45": "2oYdDdp473eREexvdycUmzzm5MYr4H4HPNw5wRycFtiiQPYSSD5HeopsyBsCBx41wWeBWDHXg9h7HYCakYE8ApJ1",
  "key46": "5NAdHgBjT7HC1rE8QnZMrTvGvqDYZutU3r6ujUstX77CF5VsWaL7mfT6ULwXJc29tcycVgeZhki5LJuStERM7ypr"
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
