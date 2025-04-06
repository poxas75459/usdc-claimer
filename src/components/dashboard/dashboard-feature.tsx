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
    "T5PvJn91WUCBUm2KsdZaigmYVatKcXtX3mwb9AZT2LunhXV9jzXLZEFEuwzHfMKvF3rvrfUwny6dC7zdaHfAong"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgTi32fUbcXpiqkYeENp9mUg8mVWpC3gzxZBkEkfzrUpzPcTv7BH6Et7N6v2krqGMoeHHAyFvhhXWnhXNEVtLbA",
  "key1": "5gCTmorexob752QhATUw2tUM6YgUNBfAok2m1Z75Gci2imjyQrpavoi8fYP2nExRr9VkmmWjCv2y3EtpxAnNkY8i",
  "key2": "4EskSpsd9X12vUbeZHRQJsnNjmAQo8xHdQsUBSNqRH1m9NnUkDQZJdbEJX93t7X83DJhKmG2ZNGMqZ8oCRRpeWvG",
  "key3": "3j6rSLVqLDGzt4ZYTfgPPzDBQX6W6CscANK1y3NBaRJj3ZvXffWVyk1yWmKdAP9fSBZCAkitojwcsbQ2usS7C9MM",
  "key4": "5VTEovTdxzZiHAHV8FTwEidYzDqbnYwLcENHrtHNzGnNaF4MNa4stGhWrpHX9PSMk8RrHWmg2vGvWNPssEEUzVnV",
  "key5": "ya38pBZewRW2LXK7bwPTrtVBdGoUtNL5gEjq2yHk6w1PaALBXRzyy66F3adom1uD8fzQTsfuxsk3JpLWF3gLMRa",
  "key6": "4FVTTwN3ipzzY35hEXR6Z2EBFLj9CKYkDmz49UB1xireLLW1CMftB3t3VjThz5R4EqMiSJUTx7gvg7ijFpk8rf7U",
  "key7": "4CEC7J852jRDBWuT4tjp1LrbLssKYb4ycbZC6BYS3xK81Xvm2UKQAP7ARR41p2qNkdoa84wY4ubHZVDSCDBY85Sg",
  "key8": "4XDuu1VDNo48oEZn3y8fDkoySFSxv6gLvkt2LAaHmbNkeJEgNXa9UpbtQJS56ZUQ6gpbAa5cqT3cPnZFFDyc1uuy",
  "key9": "4i3tXNYGKhwuWA81puPbcsgEed44HpPGJo5F6QTqgYYBM8jSSaAGMsApcuXHTkkf8kVhM1MZZhCwJ7rFBYGmGQwN",
  "key10": "4jdJiy3MbBVkpVDEBQtMT5L8Z4jKVxNLAr7kCqyfb4zGWZCxKrnwFrKckd9GFbrEmoowdSt3uBZ1Sq5uVwuKCHdh",
  "key11": "4EGdgJk7CtMdcZMMVcDnqPwG69psHmGQS3Nsh2R5ibyXCFNcVPcoHDeWNNwEjEiYdZ23CqKpJk8ov2h1AaVQavji",
  "key12": "4y7q7FuVPhPwsNmUyNhF3HxxpEHte9pu45BNVJAXf2XB3hXEcMejWLBUVU5GjaoSwT5sDuBXiRZp6tnRmrC3GxTd",
  "key13": "LdfcaYrNm5fTzUz21XQd6fcmnquhEeyqP6xuSdqbUZFqAHxmkwr7fGwXxLFKaeq8DWzPojxtCnYPcmYEZVM2Z5B",
  "key14": "54VySS9eR5PQHxmQCanVqrrjFbnqM16i2URBSYqKMfDJpWMXjQM1ZSrPHQRALspsLRpvcsBd2c6hhyUsw1VirMcm",
  "key15": "5m5ce6KVn112ZBKvwW9YeYARDBkQEWJuZtzzCZUxFuguNk8U2njU5KNNZ2GJPc2pZZZUp6TBudywcTVmnPAhZpmX",
  "key16": "5fg8vFqcZ6vVDUNruYhxL8Rj7ksbgvxT3AfxevdD5b3MePMd2pR7LdgieSirLDJFZqMzW7C3MXTWRUkcuQZURZgE",
  "key17": "5SoR2xNgGFjsTqV5BT5kJrU3VHMxgzW9qwUdiU8awuPmRZDuyPsPaRiCwvVuFzQVzV3RS35ixqQ8Qz3PX4Ndh1D7",
  "key18": "NrzBeZv2P38Rab87kyYtSC57os52Q8Gm1ppnipa3aQpNvQiidUQJdSKaUsBPyQnyMUQfM2HngczAQum8a66sYRY",
  "key19": "4mtnAY7k6vKhSqj5WtkxU8jANr8UyEpnAEEc932ULj8n3349U9yBUudWQNjWb7wJ2vQoztqsQYgGfmpWJixVEvTZ",
  "key20": "3FBJhSkNGPTc6W8Ep9Xv65wufbHfGCbMMUK6FRJoiRcvBj4Xjpr49tvo2B1EH12PMQZCZfnHkfjqmCfkxyrm2C45",
  "key21": "4A4Zm8TYXqCMmVTdSY26ugTpDNzjiz2uLpzSiWCYoVk2HjikDakzMjuDKkyDvaZP3q1EpdtDppdUbPDro54HPwyr",
  "key22": "cidw64be9FkqjkvtbC5okDqB9UnWyJxKfjKFEBRMEVHggEnRwohopFQuvmhCtttRpodu3r6pRDZtYP8cdFLTt7K",
  "key23": "2ifga3LkEVQJpN7geFzBcdfRedq5L3YyRiRktTedD3r2hVhR2FoHS847HcRsRgHP31GgoUK9ZYk3ogKNCnkLpmfC",
  "key24": "64hpjeA2K2XrTLtTGAcBxRdwYwD3gd7uKUav9PGsfnrtofnmFgXZ8n6FfujP9jMTSVyEqvmRXCh1vXYihX5JXets",
  "key25": "3qmNchgQj19UY3hikuu8i8R5Np2ZPJfncQif2mmQ6FkN7HftDMqaoZjV7EkLptN8K5rNwVY5qB65TZZh7v3VsfAJ",
  "key26": "2mN5fZJ8HhsDtNntxdNeobx8DZjJ38t1xJViwjuHckG2sCQnnq79NuN4Ki3NQtMD7sMMJrze2482PBqvPHNHf1DA",
  "key27": "2u6Nhu9osattqhahwbWZZQtMF66WBf8Lb1z8ZmiyAdu91z2CJWCArVEnRwZcfPntsed9qZeGGte4wtwAcJWssyFz",
  "key28": "5MHd4acDdW35DccVcuapeEuJkP9tn9rvuo331XyDbxzSf4KMA6DTFtN5XUzUBbb3VkGnZB9xgEAVenA8kDj8j98y",
  "key29": "3xJc7tEjFDXyNtsBSJ8LyLMJbC63NYegh5oGhSd81zvuTbrjz6uzVfuDLWnWQUb4sbNURpcQHhFHtmapSNraCnDa",
  "key30": "BB6hvi9CuwfFiAabc1GMqcQ87dFyfd3GvZvBXeuUe6Gcis9MihYuLHsoyjynZoimkfKTH8iPRy1CBtTeegLRX5y",
  "key31": "65wwW5JUT62v4WkEe58DT7gBTo4Q13Ra5YK8vCg8tc1BcCVUgWwgAUYdf4FV8MATdwf6CqxMDZuf8UeuGaQcSAnE",
  "key32": "yEVFg8WdpveMXXoTUYA5uzAuxndrXkFVdC3WanXJSiv4UADaeYdw4y6rQ7v4BG1Pf9qAEtDXaiezvqYm1hyNBu5",
  "key33": "5vH2sZbKh57mwxtgCqkx6RqmjWdjgQitn2DcUuwRF2U6cxvHemZKiFUyHXsHDt8h7dEkbtGvE5VDZhDZUMrbTiCR",
  "key34": "56KzZRFhWZLYjoi3TFdkmPRwknPsdpPsBxcheDhUZs4aUygNWGVY8z5NeMRqRYZhHECAxXSckcdcNohHQ8VnjEnL",
  "key35": "4XSzdVoQbTegE2msbmVRv22RCKkcwqwJ64S8xencz756j2m4ezgUJcgKY7wTXpkuRR4atQ8puoQBsmAo1v94xdLF",
  "key36": "2Dt2wZBDKYPkfEBDJMC8DGhGUQ8WrK9Z6nzSaSHwqoEsH1LhKNgcUcn5r2ejdsbJmUZxFbbpnX44frwfgMDz4ziF",
  "key37": "5AaSnSB6E1ribDHU5VFBrhGUHjWVsgh718UWeFXU5CgtEuLt7iFs3GnKSMTPEucQSzfv5KHn5jWS1pr6W7cNrLSy",
  "key38": "55TeX5AnoACpjo8mnZxMD3rvcNQCKzxkRmtwQhcEybewPsnqukC1gqBG7j7Ya99qMZ6ox3YKB787EWNPyqq2uXPm",
  "key39": "2fPdfTht2uAkZ5UTJL7c7ZwwVQ9vPKgTy18Kd8q2fbbgH1ZnbVhGgysXUDL594bBxHtcZyqpo8V6rQvoh2gbShXD",
  "key40": "512UnxuzDgZTB8Aynj8NWzDsnA8YcAjtLLWShKX9PRC3mCHX55C5sHRAJtJnt5yYPTktmqEv6fm2tJZkSj6a4ZCc"
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
