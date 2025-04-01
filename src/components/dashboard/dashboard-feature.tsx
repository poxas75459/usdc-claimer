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
    "3bYA6k4riCdUbZFEsBghRKB2jSExdNBaQQN3AQw91e7bXDF6rpB2D7e6h1sEGVjEVvDUBPnw7hkDPz5Anh8GAS8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nk89PxkKXynzgk9XMoF6jzFGCuUgcktVxnwHHDxikJq3iuRvJPmm9FQMx2ZFMgEWo765Lk68eYkkXrQCLJ6ZeSP",
  "key1": "3cKJPneLuAAEp7vXwESwrJFUKrXQLy9Z5ZCRGAtMeAjKjkfyHc8kGggZFBXuwtr7WZvzdsmRFUha5sRiSNm47kXz",
  "key2": "3K5m51H6sVKgFrUt7yRA3AFFAF35WHz2v4ZNqC6Rsd62eaBVUEvQMa8uncGawHcPVP34mdV5wjACz6c9vHQrpCUo",
  "key3": "5cRqZzRBpDMk5vTUEbLEXfmtogBR2TLhEJKAiTvfcuoYHxwBvKzStY5wcgKKh1KhuT3wAtC3b6p3nbkDo9gpS3rb",
  "key4": "2XsNs5ipUYohhDeFnUtPgM3q7N2f2JpsjJq5CUCfctwmogiRQpupXxb2gMKhTRDuFXj8xj4SQHBj6N9gC7t9p9hb",
  "key5": "ipCjNvwD6NxcdUbRaRxkBxnACJkCGEe6shMQ4E9u1aJ6BS3NZ4hadSpU4cBp3sLvAVjMQLaWqsg7p3GZV7iqgTA",
  "key6": "5pxnToPD5QCF3sRFjBVubbRwjvMGbS6Jxw7CmuJkD2VcDXfAauP1VTrkDabWQ62wyJx1Fmun8UdXeP1REfJS51Di",
  "key7": "5rBkTxgWZT9mh1QPkJSisNfPDmjkmnm4qUSNbRfrpyr4z9gM5TEo4dk2ESq2XorgiJYHJt1p6WawuUEu3rMD2NHq",
  "key8": "64KqRf8DSrk9MjhEjLQrB3SsmwRLDibi7PfjtgbifAZXitW9ZU1hZ2AGx8Qo24wUY3e3q4ppHdXAXmJEJBdFZFMm",
  "key9": "27V7SThU9Y16yFYVM2x8zdRKQoyTucsaHWppCEodc3m3wbVhZeg3wE64b2wf3BjHMuxegwJwE2oEc1VbAUqi2Lwf",
  "key10": "657wh1Pe6p7jiYgfhUCz3HZasbgAn9xj4kjpiADo8nSXRgPD1TwjDjyTRjMDhNKt1TWRwm7cxmYQR4176CsSWxce",
  "key11": "4u2kuNUJnaRz9D7Wpahugr9c28XXxnaxiPMdU2ntyYqJAHXadNzpdxuTC9P8Nb6iqgX2VRp3fCvtqZehh9Y5JUu6",
  "key12": "4jbMsyPNCP1XMykbRf2dby3CxWVvCSE47hPtr7Ldmgj7LWQJbEq5z4uEGS5bHcVsGwKWhQgmKDQrHWbNxeeCz7af",
  "key13": "5uw9XXnb55z1muqAkA542WjUaNyBea1J3LXTHBrhTyxoiVECm3LoQ8HHoaAzbKJPjrsFikeJdkXLq6pqLGdSePNH",
  "key14": "HHRxgKxo9UiE8fXobvW9HV3umX5i9RGH4cTp4DC8yA1P2Z7gNW7bL2biHqTrHMFfQw8P4o6y22XoV9g9YLU2VCD",
  "key15": "2A7iFeqDHLbDE6Wb5WhVvYa3dCtf9LRNA4KwBgQXJC3omQYjzc1czdZoRvEL41u77pvjzo9vHTantw6RJEfwqMHQ",
  "key16": "3EvDDhi7XTA4vysAcKMZ4QmLjGVu4qGZWFot6Pbj5gJhM8cp2RhZVHgpoGkTEQ7kEhbtby8wweE1sZ33jv9HCaa6",
  "key17": "NoZYrqUTrgG6ZsNpHsemVE25HuZuhxg9npu378oNQn6qUXM94TLKWeyRbsaB6ySinuXxV9fTmtWiNBdyjLS9cHW",
  "key18": "45qD5qQSHayyvEaJPJQfbKjRXg5Ht11JEdQ4JXUXum6SvSNdBgN72HBUx7ygWNEWyLQSbbBSzkwYstMN2Tpq6xsS",
  "key19": "vRZiwrv9RZkCqBLKEyoY9UDxsSLaBWiiL4Ea7x6ayj5oSjbqjR5iCfN15Z4cXLVwNhWyk2GEHzw1YFbb32S3XCW",
  "key20": "67BkUxyH5uqM9i2fs3RqXjoUy748voqgUn7JT9Er38xopRjQcR462owpBTAPWNSPzyvCgnhiHHpku5fm2xTXg4y",
  "key21": "s9MuFHwAjhPmBznS7BJodMKVEHVMLyTJQRtnykPeU2GDxLE1rU2sruaRoBqvYYN2sb1YHzUhWHyJCdhS621xPdP",
  "key22": "2r4CSMmEPki8BHZQNWwPbaVuS1M4aJFPgoXbbfSqBG8UZU4AdBp2XbuiBYCbGnxuXy7d3dAMdzaLoxpNEhH1ZyAL",
  "key23": "3YmoKwjjgCxD79ruqY15e6qgrfB5guYAjtBrM3EJ5NNH34y5qJp279RxjuXfj7MHqGHcMzjAm84vAvt2QMNfzz8y",
  "key24": "4U494MrhvQwupUCwy8afJz5GrA8XcyHBtZ9YHAdV9SFZWq2jMJJWXgHo6FQQD4EBswGY1Kf12UrwzdomjbJAJVD",
  "key25": "65SbVxmnBJcEcKjv91mK3UMRZhctzRMThF6atQT2amPxyCFDTQFe9nMmLymyg3dGsRRUsG4HVvhszbbNE43VqjPK",
  "key26": "3dgiMigiwLWhvyAZxAuTiMWeKNYzzF8EsXmEFaEoXgPHb7QMR9dH2TKpkB24PgJhSFdo7uDNqPMSHUwmtY8P3rXY",
  "key27": "EZLcKxuhASbz7z8H444doYJgYpbYsVvWZFZGhm8QweVHnCF34hQgjxohT5gAskLi1VBMx7hriJ53MHYGERhkP8R",
  "key28": "233j3Y4fgC7sV6sCTJwqfmdwTuhG1ackhmZ8r5TfLRCByGZwD6sHyPb6dKUfxeGjXsxxnZm9YW5WeDzY1LeJMAbv",
  "key29": "3ma8bhS9kvVmzacamiRGMkCVMCy3RCCdDGwbRFrN2WY82mGVvE5Uint9vxMMcQmELHowVmmM9Lzbt5rn4suXcKXR",
  "key30": "jHz43q1bvMtGRtUYicdVQjEiKk8ETV2pgoYVs8TBC4zVV3MszHSAQJr3FRWjb3GiJ1ZZjRksLpBSnGjdfRGSXeA",
  "key31": "wzVV2ZhLWte33nWU1n94B4hEguhtzHfH5YseWvjv8CPshaW2jr6WgyT1kSU8N7N9HYuFKVwmF1oKGZLdWuVu9xy",
  "key32": "Ry8sB5iuMETihrx19AiY6K3h2uV9fs76MmAfY3XGWrN3RWoSjCg22fNqCTUEyFvvQf59QxWJZJgTTam48g54BC4",
  "key33": "2uaJuysBERGPAecV2mXUZiJcbJeUq2CXcd9uBme1EKHoQyFcyaspjy63fcyMgxQ5CaVeqXpqs4hksYqQrZWN1RQM",
  "key34": "3JitifGAkppfh282uwUcRjyNPLZpM8DXUPBcZqRAdApA57BAqbgY4ukJNoNGJnGj2KirVrGCapaVYmfkPT3JFEKR",
  "key35": "3verpEP5ZY1XnThAaPdD21MZ4ezzSaNWTaJejD6XfDcad5578eYRztWiMVUEtrosWzVtNYcitiPP3PfiAwKeY6Dv",
  "key36": "34Uk2YdqqF2WfkL1vNRJZmMqB5CG2mszmTHUonrNLniApks5TS2sEVbcZwuKCr8nUuex4w34UkQSBe6VRDW2xYbQ",
  "key37": "2cQbwUJEAxdiQYF9Z23xSYubpF7mEsJzMYy2uBATL4gjJcsUV8DdP5i6v7X7ntAU96BrH4tGY8tR8tR4btEL8Xs2",
  "key38": "54ssgXa7k3ritVGJA4DwudEiPkjMhJqPG6H7xRfaNZLqkBAztETKvRA6mtCb8QtPtcpHEkTUJFgBHFNLJbCNfBJM",
  "key39": "5hxGrEZRnGMkMERremjWJtS1AGXPa9n3BWsNVpG2yYAHbMZ7D5FBeWqRJG6b2yMJ76sL2GNdE4GxMo91UwjutKHK",
  "key40": "53ead8HQhQBmFMA6BxqyCQfrkzZ1Mrq1UY5yZtMn2ZykwxMd6PM1ZvWxh4R5RFvAhYuKv6h5sG13jtoBV4tAXbXz",
  "key41": "2WY6LkH2aKe7AXW3BKz7oJ6qxQ4McSMEZcaJj5QJhhCxca8yXARUyK2vCbW9iLsXDoE7M6ZatH3tuyBxp1rUsik1"
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
