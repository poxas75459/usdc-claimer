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
    "5VAJyz1JpcoQUyzzXfudyHbDVZ8kPKbB4jjpBvqYkywoUXAjnNCGiXWU3iavdmFaWjYDTZb7hHKSPKEwd2Z3cB72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85oWFHZGYZyvEJDLpCeEdGytpmcmxixhyMFeRfYSiRk4YcJW53Q1e8irJXz35kXKyjVqFETPfp8kUmHvPvwnHgK",
  "key1": "2VQUNNS7njJ8Qd35S3ep94rgyAkKgEm9ckrXRwFVugcqaNeVXUd4uR8k4ijpYNCtM6jThpMDvu5n6zZYf1BU761r",
  "key2": "2zYPGh6DaBcMwAeBTyZVtWw3eBgU42K5SnRTghjTQ1KzNwv4mht19vPHUj7vyzpkD7bAV3FRacWqWQPwfrzcrdP4",
  "key3": "4KsqeD314QqqZ5CpQHCVE3pQtj1eB8mmG5ZZCwwUf6VKsfmXEqWtJKGi9E45GDBRsfffPjHgsvdk4kqoZ3noRPGM",
  "key4": "CrpkMKDZyUCrfFZFq3tn7U7qcN621amypX7jsQbksrzi62BkhWp1vrTUAvzsrbeG22E1jHdmxtKVhcLjPPXwUoC",
  "key5": "2hqF2BEiNCYiRi6T8FxeBeEQCGnM48D72fcwkpRbGFw9D6BTfB2CGMqvEUv1MxuzdZyzu2b9JKZ1Fw9VCSLRJNYb",
  "key6": "3fJdBUqCEf2cjNHci6fbiqpcWA2hP5PwJvcR8StYMqdGjiHLVRS4dCD4YE5DeePhHu5n6AQb8pm8pdGjRgyuUp2t",
  "key7": "3wwAewaSEJYj5GWjQRTQhHnYEhvfZKeNr2BfekRX7xbXmEKFSJy4tSCuHwPb2QtBjKrfqsz34fZZhSvBP7oXSviN",
  "key8": "vZuhPghCvrFPRE8Rb3MdPhuyKDpz5GH21T48Uic9wYvT4sWw5HXAo5BGYsdYoH5ME4ut2XpAvNA48DHZRrd3o1s",
  "key9": "3L3qh8XPYqCnbZH4QXQYoBnhAY356GdGSxcPfaziNhxksAEWKdLoHgjz8L2iJCSEVe5tm7DcnvCL568TAFqchabm",
  "key10": "4UamiMq2XkDBnFU1Mc6kQNEuKsgLsRnwmBAsto2sWpQzAWaGf644yPoMJHSfPGRZV2m1xfcxwiHNxfhkSnWdJJAT",
  "key11": "4YmwFXM5EDbq1BYEXnW3b1dfp7EGNHe3BN2iUnFY8J42BA8uMp76o9iXVMPTSEKnu674X9K5Xp2tyi2QUE6ufToP",
  "key12": "4R8sbt3CaPqkZPNeRMR3xTdhAFGYmYJrDL8p3wDc96X6cT1c45WaqMXUWYeVVSuxLxHiNNAsvrVENis1FSWQm2Ba",
  "key13": "64s4WLFJ9zsKGBipXWNWzj3ytdMjRW3ci3NEvuXPfPK7MQ3MWE2fuDYyePZyVSxMX3PjbjWvqzFBzCMypDsFrBeu",
  "key14": "nX6f8BiKkECDe7hspBQTuLjYCEdDk6kaR2GjJsrLQKDEXjvoDy8s9NxyYPTG1p55zZ1RDXrPXHe2agLNkpodkT4",
  "key15": "3RQDjPNJpXtn6PmEkpMKB5GfYKaX41AMoMEZ96t5wSKdTgVB3mkvTX9nGC5n8ZuHXbFDoy4ygX6tZFt73WvMdTBM",
  "key16": "5r9BHWdUexcBBr1SLnRSttFxSwD3tE4KdsCqakmV1KN714Kc4uJfVc4nBYtbanLKpEbGpjPYpfnB2HmRznq1f5jU",
  "key17": "47JGktNdZB8AjwqN3gMSNE2pMCNd2Am4X6jLoCYggtLZLgMYwFeFPu6J8ifBsYSwKdvKyFW9RyF51skFivSChBez",
  "key18": "2FphFPvZA2Y9zNJvPkWUDtqiNpvtZUMzD6E3EixTF4NzzSxyMPM3nzN27SHo5gx94o3thji8cjTwXTYLqMUDg1Xd",
  "key19": "5r6wQ3qMLKuhVdh3bs7ui9zWrV4RPLT6z33dB4jc1aFncaBKga3ctBpceQqiWtqUyiVEvGbWjf3SA4Abuh1BdFoP",
  "key20": "3S59SKrVnJkWnNtH8GuheoCFmL4sHYSnvY7PKyjDoTYp3DsJruNYVCn2gcyqFhS6UYrcsoWPYo3sLcWVc5sik5Ri",
  "key21": "3jvkSVuk94ZnrN3Z8v9SURAqikJfvM4wKMLWeLLvE6yMNjQ4ZDG7u34XiqELAtgxZ6CyAerzCA5jLWdeHvNxRoSF",
  "key22": "LWNzWyjgbRDtgtCmcrZDeMquxLDRBSiTeo6qPDB5GJGjhr2HdcYRnACp4NDQu3McoBW62kd1u8ucGk5dghtmP6k",
  "key23": "56RrHnw2sNkC4dX4qAqu5bZZGmxjKENGDWjXBnZtMGntR1tTWmjSqcrki9ejMYD4a9jNHiSyEX74m1XtTqNUskTL",
  "key24": "4pc7LB6bctm553z9EiSBksU8z2fKRzacYhuo8EanUdK6KnZpK3B21MTxWUqFfkWBaNNiN6P4PPk1iwhrpKZH48WX",
  "key25": "4btyyR6nDAMDchfe3rABsYgTr6JuFGv8TqaKenVe6MKN8aAjHvZ6oRpELttMY94juv6Db2qBhZwJrxmBCMrJhR8z",
  "key26": "51bY9v6uCdRGT82MoaZsQXK7RpcLafrQtgvBLmuZTRp2ZRBgi78DTinag4QrofYyZ8nBDPm3m7eH2ne4jjSd79a9",
  "key27": "61q3ZKxpZ4iFc8opMRX2BFSad9TTPBxTtSkK6ZGoUziF4Z9x93EGPywcwWo77Hu67nJsUEvamEUwFmztGwLURWgj",
  "key28": "3xPsWaEWTexNomjGrnKd2mGnFTjcD5e75ooWHXptdUgSw7rYoh7rNfbqKcL7z2Neh4GAQ2y5rQCDoHm5hbNK9kWT",
  "key29": "5PXzetXWiUETjmfjSYyk9Tmxs6WHupvYr4xi2WyAMMCfLtnhxQ3SoXC5DRBL57GdsAXVdAeJziRw2hFdz6YgNbE5",
  "key30": "38ANHb6hHJk4dwGMEm4oitmZr4EWwgbc2x5ti7z5yfHjwMGFigjBYwMU4KffuU9Ub56yEm249vftmbpLQFBGRHZj",
  "key31": "FrU2nHszv8HB7rEgDEaEC9ysvQRHTQUTy2Cmv1k3hF8kqGLk9y8upNXNJ7ftHwWtxaUVMovuFtvGzNrH8Aa3wm1",
  "key32": "wunSZBxst7m4uDuND1fEh4UQavRzQgDWBs8AedQdkRMKoLAhV9RgVEqcsbZU6Zkb5TS4Lq7gvBDDf7NHiDcHQjp",
  "key33": "3EB8E54UZjSzmKHaou6wCz2eybs53BVFUFiwxE6ehbaKVYMGxyfZ8H3fG344XR695yGR7pPSx2ofDUuk6MPTpb5e",
  "key34": "4rRMyjwyn33MxaoEpGvffz7WrJC9ev2TJtn8DTuEASFkw6mAasYbHdNVNBuaPMPJnnJi12X7HSGHygMYsjtWixua",
  "key35": "yXcnYFmnz3YcZDuZxe8RwdptmMPMbi6ACuRv32VtsqcKdM1i7LxcEYiQWDSAffvV1Zj2PobajvC1jKpxYvzesXR",
  "key36": "5NVwaSgFyZaxpgfWfwjmorvpvMEPcB3U1afQmggbLhbesG54oa9S7peUogeR6dh9FwqM26VhzB9d3yH8zzaATGLC",
  "key37": "V2sKJVTXMEYkxgWSJujsx3gsZcD4x48JMt9rw4MojP3fdzmJ1fr3nNLgiDpnfrZkN8Kt4q8pSQoEiAPB9aCRJpH",
  "key38": "5Lr4t9ca4kLy2ciVouv7c4xjnri7mk5DXxu8dmRMC43uHEtG61S8uHwKSx8iaZ2Lcra7XvnaGoVtwHr1jVMm7Azp"
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
