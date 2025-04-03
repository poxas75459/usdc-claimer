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
    "4kBvhVhy1fZZEke6Qa6bT7uGcowZXcf3ZH675t8sA7S4Wenm9q7vEibGuUNUM4UUmYD1DMi1xdQotZHtuwesigxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxxUkezevSTiTe1z2bEKKZ3Vnx96nQXkSFA63WRqf1PxWtKSqe6twkxnBWN6tGWR4jpR5mzdecCQT3Ea78Y3QsH",
  "key1": "4tmKFzy8Ykff9nbhwNnpuToqB1GQDqp5aNLoFBG2fCQEQw3paEV1gugindM9TfzA4u7Jw9NeGJM63VrKMTKD59qx",
  "key2": "5E4kA5Gx75W5Ns3vyagxgqkJeKECb99AbppYFKCPtoixHVJGJR9taAkjNFJ3UgAeMHyFBgKAaf3kRobXNofyyzW7",
  "key3": "aCCurfPEt9C9Y2BmEWbsDuezm4WUP1SmwaY5U8Me7BUrXzsMjkZegoAQ1ThLx5mJcyVjv4GSbBXyTr5Cq2r3wuC",
  "key4": "8RaT1ByV7BfqEdP9mPfnj4KgqExzUvPpiBCgK5ii2AM8fsLvuunSFZGHSXxMrN7THGYYEzHpW3DMmqz9XUJorWH",
  "key5": "3dqTTC5bqgWvu4mWQerwYeCiMfiTuqRZm8N1qtDSHvWpDDRAUDdpeuKtvxLeTbtZNQGjymN1bfK1hFbjgPjKXa5c",
  "key6": "4ri5JFo377bdzMt4RPrWyeHRHfF4azmbdbXmzHBRfyfV6sS2LtgqXRcXHwTLanrK2Ctfa46xPe3dqQpuQusPH6Ko",
  "key7": "4KPPGRoFHHxjR2D8UdsP18HqYXFvN88cGnL7o1eJvKXScT7Lb7XnZRrRQuxbFAgB9HynurcURS8ozsZMrctuiMTt",
  "key8": "9BkS3kuVjSGW4d9TtazFnjWXrjdvZNbxqEQzuoirSFuupmHDPc4jrmmtTwNHiCtuTPZ1NDGkUd1mX7yrofSGqQC",
  "key9": "3oVbFjykETyN7h96Tv3nMqDB3GhCSrP1UViBAqHyR93c29s2dgNMN1ejZSuP9yByEx8VGheXb4nuoYJTdA361NQf",
  "key10": "5jfqTUidTDk5Tbi5GmcXYWSbnpKfbPTkqYGfxCNpoAyea5R4cAkaRLEnK7PztxBKjBGSC4nfb6nXEJgDHPUGKDdu",
  "key11": "3zRR4vmBCNTCNxNpkYLka7VtevW8Fei2HXum7bso8tox2WjeMRrvfmYqNUYkCHpRRPtJLKD94VvnoCmFRucL6TJE",
  "key12": "3E3DZc69qv6MXmdNF8FHGnHvaqN5gWptxGgoamuvzNmyEwSvMxWDF194irKeJq16TFbq2GqoLFp2bBQwGSEyb7D9",
  "key13": "2cVTMWcTfN4ZESiHeHi17nns2ARXao3tRMYjkWFw1Y6HCWNGdFXCDLa6SPPgqPM9pf8QnkH7mxywNf4kw6fzUQJ7",
  "key14": "4YVbSiF9mnRdP2xCbK4dRkE3mjNPbDbvuuV21m9tqBoNMSjQJpgBmmkbyynUNsEDFHgBsh6LEA4s4fUGfjXUmQ8e",
  "key15": "5gc1EZRkdLgm4LKFdS2T3XNcrcZR2eAtLk7TihP41QemEuNyUKFTy5DWQ4TS6AVYaq6wbi3quGmXxS2RR1trPD5E",
  "key16": "3Ex7tHNfVtAAFkepa9QHdY1qXXomyq1HVN1FxmzBmMD4fkBZmNGJvWtZBKwtfqWVNUKr8GJB6iaFGRTThz9WShX4",
  "key17": "UPKUJpva4cjhFShAJBLjUgLYkc2e1opjvu9gatCauPt4rd6FyZCZyGMVp5Tw8qP8x2gm9gwsrwrM9iJysu85SmC",
  "key18": "eiuvvoHnGACNZveiKY7UCHGU7u5dcUKQfjxNr6Rdpx6YVx1CqSwr2Rv2d5MmPwbngY8mo3C1BuXCQJChRpRmZ7T",
  "key19": "GwUKK8sWU3nGgvw6DmithSmd1G3bwNkBS5UFBcTMPDM5cbWswaE2R37T3zCWKZXAXj6adv4JDTc4SQBRrSbm4cf",
  "key20": "49sk6eE7kYuBPpNXiqCLAVKGhbsV4gZT4nMd3N3RAvJ52MirFpHZqVZGD36SA1r8fVRSp21HYQgARxyprMGtgarA",
  "key21": "594kvJFbj9pYadtnUSDqesD56RrAAm3ivHL8xnE8WiUD8CsdcdFHQNqRw4MrxzVZ5U4aFXnqF6VsJ3zJmkc4TXxE",
  "key22": "3Xb9vM8b1U6iiEBVFRcTfjZZYvWSY4gQRtLnf1SmoDJXX9rcR7Q8zz9KTwkEePUaDiUCgwU6WWWU6ZSuVntPkq94",
  "key23": "324C4BnzQrxbq3Mb1XG6r8ss3PiiNh8obZoYAFjGjE9MEDN2SCmTXAzLDL8w9oWGfsDwGBAYP3XtPWpLvpbkBmtK",
  "key24": "5QKjSSREpAVhKoQRnh9csMTvKWKFALYvfbkVkS1bB3ykniEXWB2yRyzfam1R96yc3Mk2cwjeux15FLTaaBQcBDE",
  "key25": "4uz7PUFFMbkSgs4nhxCi2L8fHt35UU6WCXq8CtYfi9W6YGu3Fbdz8CU21pMyCGtCeoyYCaN1g1Dk99F6rrAtm39q",
  "key26": "8RNvCPitTYfbM9ycKTV5XnqAkhY9YrmSCMeZfxW1kS8U7ziM8W7i55oZpYkTu2ameDQJfBhAUpoEPK9uRFkxQGT",
  "key27": "3xPXkb1msWGinP8SpTjEx2tsWQCrFxLhB4HLcUKfythdtKAVKHpgfABVdDAnWLRXBCf1YZTQV7BZnKvuMYE9ByFD",
  "key28": "3535SquR1nc78bJJ9zC8sDrpFoYzXGm9jsJJwSgdhgrW45GHdAYbihPoCr7KaUq48oH6zLoZ9zuYBheh9KWru7tD",
  "key29": "3oTt9a6FWSjRE3CHtwSgzRfK4vKbiJjzfeY7urRKBgYxD6Rqt4V8G9CtuxSFKcizKNKbn86hBdRjUoF3iSswECW7",
  "key30": "31wtk4CjSJCM4WMyDyMv1AemFarfwoJEy4nJKtTQYVm15bzAuRCvHK7UuTizJGUKnWmjQULW91UJFSQ8rt8trw8U",
  "key31": "w2J9grpsLBPwoTg4dYNpAN49ZEptLxw4iWemqWLJZ3Mhyc4jAfoJrYrufCSPoZuuLbg8fLZvZH6hMvDDRQCKtKY",
  "key32": "KnEgZNJkafYXP3HS8BdeGGC7KLicpWcsmi2GJE3EKxB76XwNQH7XSuG87HeAsf9dmD8CMW3BVPYvapjqZXv2sGe",
  "key33": "3KVCNKCDoUxUKh6vB1JALcAMw3CxcqYjovnE83WC1K5S6rPmvEESk8aYWbC2mnUcbwsAWrDZrYMNgW5VvNxzE6v2",
  "key34": "22uGuAQw2arMW1UfowiYm2j9p3Lnc8cuNzWjsQNNhZAm4kddSnA8aeBChcmiZcjJubQnsXU9wNq1DKTjQqgTCNWm",
  "key35": "4159RTKVH6LXKiQG9rM1LKeeDZrs4zxnR7n2hD3S7fuER6dwZ5UNyTd8Xmt9KeQ89rH73ZzmtPMbxKMioFqghNAX",
  "key36": "2AsdVX1Bt3E5SE6KpzroMzTDL4EgSmvyfi4zDvYjGeVcrJiUXnj4WbwMbJR9SmTefZkguuX7EaWY4GrQsJmpeMGS",
  "key37": "2yazPqdDimBndhW8UC1n84Q9zn66VotdW7ZAufFYtkgS335easgg5Y63aSNcKizmGHr136rRaMUNzdwRpmMsmTtp",
  "key38": "3itLnqUz3xznzt4AH3JMxrY1MraLRrwjEGATYCsPR4LuLeUP9wuEDszi3aimDD8mHJN4Uqccohy2y8686vM8hquZ",
  "key39": "2GfcpzzJrX9Gkup9jT1NJUiMPbHXhArgpWHWQDpdaTafV2WEnBycozQ1Z1qPEfknhgEtgUMxtVp2gA4NjxkXdpgd",
  "key40": "3UCLPvenTQwXMJuacfuhpGCAFsB27Wr9Xh1UupaPQrKQg1tXjbDmaSAWEAm6pM5G8eKatTXMn2MLZfibJ7aLwTY3",
  "key41": "4ff8G4gunML8MdkCNuSk3cRBwBD1Bc9QQWiRCVLBFqRJJeAGj4a1SGpXnWPjMUeb5ePEW7oTA5kQgHt8ZUGzf7Eo",
  "key42": "2FcN3TCYoWwHL4RfMoFs14qyAiMQob5zPLAD5xj1vS56h1LvXPsmjdHtEm8RkzbHaCFEjPGimYXvKr4VJthE1Aw5",
  "key43": "5gSFy3ux5fFXEfQ5WyzxeeWaoee1vAvetbkohvAAcsrMm6Awb3qpyrjDihXY767pqPXCbUq95dg2EtXxxW761enK",
  "key44": "5bKbf8tdDPGSaeVMRkfXPPB563XCYwwQ1ib4oyNi95ui2xW3sT1cHF5AMvVX2oWr89XLXNMKN3CbBWyHWz2rQwsz",
  "key45": "3GPXG9ndFfudetxuhCB13B7dwwUjRgAYESP1Uo3fLpTMemNxa7cWayB82jPQdkJte8hSeXq9EViiNHm9bNL6DJqb"
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
