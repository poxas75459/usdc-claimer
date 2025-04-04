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
    "wi6kKno6sR7BJBAELSBnL6nHgEziWaQet8kKgKt8sfLf1K4QZJtvHHgfwDJWXMRqwUAE8WsR9z5H3sTqH47maeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BATStzVhaE44R4f2z3NNazLgCrTAUN9yhGF3jJXBj2JKXRogyyu3yRjDNiqwNwviYDHv3UhxzyqxTV1bprgmzaf",
  "key1": "5NpkMSo8G4f97x1sowxDC1JjEEWw3QcB86YbdzN7rkgACkq1JtGDt9zttMUBGjwB7p98GjeEGtyKEo9SptDLmfHF",
  "key2": "5GXZ6LuyhtxzBrZeSfAUhVKN4pUPj5jSEdHvNJGAsRatiMbuzA9x1gnCcH935uLFfBuASbh8bE5sevcD8LzC9wFB",
  "key3": "65Bd4EVUS43ZCUKQfFoVSWfvur3B16gSuMLpyxLQF8SWg7fNaePn3qsQb2KcZxZC2etifoZfhd8hnUpQdj3wevE1",
  "key4": "2eWU8bRTpDtMihQmryfS1SwmH18FAzfwkjY2DVMa5Q2EEAd2qyWM6HdVf4jVYgbPsrp4a3aUxf514CE51mcoZjK2",
  "key5": "3thsTNhxhGQNbN1KGXgi8LGcu1bu3K5fn2uRQhi8cDdsZZSRjZcAe5hYdvomUYGyoRD51XA9QL6vJFQSXawvr7ka",
  "key6": "5S6rmyDhPr7SG3Q7qJnP6whT2taZjQXLD1ANYmwqhCYqwvQ8AtcBvDUh96iVbkTLs1TihdNaAc8qJhDxQ8MYXevn",
  "key7": "wv7xTiaptEzLDbtERwyfC95HfbgNFozajt9AwpY4qJvU3gAjJiuczrunRW3yoGFVVvdHhyZaGcGARB8mSRa49Ru",
  "key8": "4DJqCuPiu8t3AEdX1xJvgRBbwsuHxY7Rw97rYLmzAu2WisaYPEikn6MwcvkucTsMYcbtXxg6k39QQiYSg6XDFRZd",
  "key9": "2a7TCjx2iCKcTCZaUYUbAGpUveteoXLsdxwZVpiiPzYigK8GLTAEidkN7newcn7RCduiFxE31H7Q8xTefJhA9Qtj",
  "key10": "2PYV5fBKQoRv2FovCMSG1kFNUNPvq7QiQamK9jXc7q1as8fNu38Tpq1VNA5cUKkrJ5GfMkoALd4ndGcKnoN885EM",
  "key11": "3VL2MTKoys2ukMR9VST2XmNjQDH13jghhZk2dFwMi6vnyFuHHJSJGSecZM3x9Ev882Qms6BgowpYHNqc3iWQHP3e",
  "key12": "4hopEEf36MBuh6vs8vaSXX5nfA3hiFDoFLNaFFCDxa7yfqymiuFEGozp56h6ptpKpGLkKsa6Lkqs4trZt92LesRr",
  "key13": "WHaVRNBhV2F6fNLo4EkXNncFRk6NexY8bjnEP1Z8isCadYYEnDVNdBSh8gLn8iSsrSBkV9hEFzJeRUPb9YDUeUe",
  "key14": "4cMn2YhyzJqSmVqH7ezte4RMj5aoz7cyqh9RDnB46ogVm2RnGtYmMkkMsHrMRZDmpHz7qHCuUw3mc2viD9ntaqzj",
  "key15": "4MQbhHtPQttopz9UtZn4DvzfL1vVAWCNqq8tmxLT9Zv917v48RMDySPtDC1bseEuimbP7y52b66xqfms4avEaUNH",
  "key16": "3Mma6gQvVH5E9vcpGLDwEMJJHuHRtLV5F3JW24eWEcpQUDrk6SFMChSeihwpvai3o8EpevhQL4hQsrTr1Uce8GNr",
  "key17": "5fcS2Pme4J6ccrkBJ1qyEqnaanQtbeZcbyEFfFUEDDvp4kfiFFMtaTwkevUPHnWw3Jze9zRdkUxusaUSRxwYUwL",
  "key18": "2hVwpaySCSUSaJ7BecMCUornAFsuj6hwJuWpXAN3Wf6P2U6y46sLNkoRHw1EzC17YdUo2EuqELTPaaueJ5EPdzNc",
  "key19": "3dViV84dmo1XV1DSMotczR9dCvokZHcHoJkG3uWEQMs2aFwSZfZeMYrN4fBK8b7m9bozshu9ji9azxngv4QLJhSW",
  "key20": "gto9tY4G9f5RmsY5gVnGizcrV8g1kQFjj7GqSCnRuJHeoRgbs4HSGyHxPq3gY2zGfbLNCS61U3uYpo6ym7ffbJW",
  "key21": "VifZJh5JEf7UyTKH7ZopjMnDawXajC9FHJuPRykpGM2KvMPe7nFwW5kR5aieDWC7MYWeh8F2j5RFaxmxfTyyiUj",
  "key22": "5YDeKnmLiwDLqzkSLcHdjueDSo4aSYKm7iU8R7zZy72Pno45juyRaYZDRTzoCY4vsNqc5uV2Kk4vFV5jVhi4Ydyp",
  "key23": "5E4tniYZwDQgpAfG6ZrN7VW5GguwH13959D6QmSpR5CNwytumT9JptMN4NmdQz2SdsNwJHu8deG79qkj2c16BqxZ",
  "key24": "4trcwbKtmr7LK5PkMKYvX2K5EpQDcadQ3yBKcEZ36yr2brgqCVZ1Cq6RNyzXrBvBK2VUoPPFuRJZdZKsSM73axLt",
  "key25": "2ohU8i1VR7XGf2qjjAshH4NjsWon3hTyi7YguPfR3vdrEs9GL7ramJmJ6VyS7Vh6QQ6yLC1adPqyefGBs5yGs2xR",
  "key26": "5H28iu1hKxyZXT8BCFmAMkfBWVb6ugF6M7wyWnhC1pccjR2g7rb3QdrJhxP7chnghkVBkDsUX1sieaC6Eft5Vg4E",
  "key27": "4QF3hwPydXu96dXSzKmceTeRF2ynkpUyTqaHGGi2HXGLdpPKaBbdGNaoZSWK4EsSeqfmogtFjWJ36zSmvrKCN748",
  "key28": "mJyqHzMXefvfGPHnCdZ2PTWWF61PgzvRvesZL9JQ92rZC8y6qj1vH7hpTfqCVmBuZyGu3EQm7jMoEm2EMxbc8sn",
  "key29": "SoPAwGipk14rrwWKhM6Dg7jWnDa3t81WJHaSbW7cAMHYRzyN12Z1LJZssfQ2fYdBmn2nNXKKm5bLjhqKZiwzPzm",
  "key30": "4L3Fy2Eif2E7HhfsyUuS4cm7qKJvGao4Q9MhbVpXxLaqF5pHfxJn6CivsZnG5N85hTw2YJYHdqvW6zD5CT5aCnMG",
  "key31": "51LYwPEt6iV6dKk24F2NCcr5MhRCNc7PrUZcmirFt4VurVwrzk4wnqNBug3cxyS2LZVGKxDFW2Jy1rrvBtDJmh4R",
  "key32": "5vvH1Ud3PhYBsm6ez5JnSroHCEBPENqrp9DFsHtXE8BMyqFAwupmV4QLWz7f5sNpowMCprq6hAQEgUeCCMb3Zqyq",
  "key33": "5RLhxRUVru38pbPnX2DhFZvZGcBRcHqGQZznLjx4bK55Fg26mGppUAHsytwBr17tMrDGLCDiHZCPrcoN33N9TfTG",
  "key34": "3WJDBiF2WP8VqBJU5ymCA3mi2Faoi2NY7xKRKSRhgeznd47mJWr1q76cPcfaw2LEB2cLVvekCy8GAKZHBQBU7GNX",
  "key35": "yPTEdBT7TbeQcqBKJpmc1qnCMk7RCo6VSDuBa3moZJtAnaKFV1UpKjh1XHVhd1fquizhpCqrgeFuN6VF5ZpfPgW",
  "key36": "wVkigX8C2co83uwKQ8NpxY5efoYA8cTbmMfKhZFVB4xcaApaHpZ5euaqfX8y3D1RPfSMaCNWBbcdrihiTibQACW",
  "key37": "uDLaLNRZekaE8WReWnLi1ai6EYhkSModmtUD59tamZpayDe65jNeFfyeLdAT4B3rL4ywaUJKWheEQzSVVKa5q5b",
  "key38": "2mm7MYpc7FmXirhGMGrEJqz1zz8CDZdipubLgEs7TiKajeYonSbpGyP5nW9ZzTcL7bSHBxj8Dfq1L1eVvTDTYzcL",
  "key39": "3i5XUN4wbFC5PXyDwWs1n17bPYyL6o4ASSTQmkxPD4z6N7eC7VPw7omoaKcCqdR97kQ4PxzSi8v4NJrjhFooAyBz"
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
