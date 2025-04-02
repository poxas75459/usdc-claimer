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
    "5QKKmReS3KHzGzmph8fN4R2fWvB7X7uhWNcSMSpC98LGR3jRbgvP9FY38PBqf6YUdwbvTCxT52bxoSHFhTaFDCNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wv96dySk3EshDCzoGxTHkHihDuknPBm5JLJ8TSbxgDaNvVexPQRXzU23vVLpcyNfK5aRZPrUXThuASc9fiRNvjh",
  "key1": "43HrBLFh3hTHn4hXhDLky6RW3SZwj1L2XeKHce9g6FuvYpZR266ZhaNLWrobnL6bpxK67TZENN7k4C6F3yjckxoA",
  "key2": "53Wndejsdxox7HcCzcuj9TvHtioK9ZPvHcLxJt3siHEjocWCUhnShqGYvV5Y1pifsBtsWdjnF5hRh2SkwFXqshPL",
  "key3": "37BS2Z15ndeFqTzr7AvgyU3cXn9RfBHK3XR8wz7nNfB9UAuZroCFqDC3ggTuhE9JQnNLBmiJjGoVQYnibqdDzAJC",
  "key4": "3dVe2Ja3fKxg2uepy2YutK58MdqAPKnppQ86j76LL9dGyCWLuuhTgPyt3avEpGfSfEMB8fYrLY9LzEp8Admp2mRR",
  "key5": "4AkPoPu4HZ4KEsGTnVoGGYyskZrcXwLk5SVGKc6WvkN5j3NF2jYPNyHwAyKhLP6TodUUUCAQb4csbcQvrM7L7rw6",
  "key6": "251Q862wNDVxhqBHFV1HXvMEV8uunDdSiecDEv1XaQQqspuLK1MP2PZAuADRBmEXUQ1m86vaX9TihJTm2LWqFJvS",
  "key7": "278A6tmtVaiPvKALRDQgvP8FpYc5bRgXZRCa693LMG4pdRGYX2VchevrYvAiPd914Ynd2fhsH5bFfY8F3QdyLhVb",
  "key8": "zaNLcbp5TyHYxJ6xznMSwJTUeZWGtzU8igoMQuuSUXN7PAYNW18yJYA1uEF5T2CY9PVzcorifAakwPmK9sfHmxe",
  "key9": "5REvvkY2kBwGqfJ5XzF2bY9p6AUcZUuwdwhUXrebKDW89wP5GFN5cDTk7XkYgtWMbSmQPsm1Y9LFat442LE4khNt",
  "key10": "629Bzw1oPonyyS9FGApZEeGD9K7qwctxmaw28b77Eyh6Uue34tHeudroiXfUMBWMq1sUGgkXJbfwARsYVN6NDopA",
  "key11": "h3GUhfjqDRRaSmA3QEiw54DvnTpYEtUUwSqvHzN3UAAKdFGhA99PZqiaqx8xrGpaHm3m9LWgzH2tMYMoTtgznSz",
  "key12": "3Jurz2pts5Aag3G5bpLnJQWVcKXKyrKvs39Sg3kimf13hnWAacHtRAByGG6thD9TyE4snnUPpPA2ppKpgJKMKPDL",
  "key13": "jR1YjDcawCwmYSk2dzoZxg5kvUFWaAWNyegFZ2D3Du9TAzzwSFgMd3WtehZpVPHqMvMPFAYPDu5sbpDEvDN2krQ",
  "key14": "2NEqSwNbKBB8KdEPu9t1BxVQRiJ3gRdDfKXo3kgTVgmUQtEiEnp5x4woK3ERpCdg7Lkpc88oM8ZikEhbbUCqsjKE",
  "key15": "2Ajte9vK36GcfXRUcp1tfZo7bCvnjHqbUVEjZRaMjtpzHRbeNJhCuipzBJgtRqqj5RS65BzCTkxqYYKN1hVwtCrH",
  "key16": "3UkFvpyXPJcUcLgRA9cBNDkANJS7jXCq1YR7oLWdBx3h1waPtc4btUqRf3h9NpBL1nUSpgddHR83YmVkpqkmN2cK",
  "key17": "5W5brNRjUqxj9MKTu8s5NL1fJ4KbmDF6tn2WifFKbpt4hMxZuWDeAqj99GQfS3x8ikhowC5YzG3UkmduXybqwd1x",
  "key18": "4boGYhg4VWFxqJ8xQ3mQDA4PzfSogipSbsSPdYL5bFX8dBuMiHMwz8yH2b1Wbmrh8X8uVdybJRDWKFnBBqi7c55i",
  "key19": "3K9tjooi9vsDRS5gNtr7yrbPhAhd22xJJvRpj8VbA66dkU7HF5j2h17ShD8UrvQ6EZ2JGBVDhjPsvucsMuiQtsbs",
  "key20": "Wgwq8csbt2Rv5b3uQqmjdTzdKPTCib84kiJgK8THxWfpabx84kMd2zCuopvguGHLkSRwnduTuagcNoifgHN12Hi",
  "key21": "3D5Pn35KUUmpnedX1aMmAUQdLCVBckiyKypbpiv1NsfA78CEkmhgaybYRFseWdHUhbj7BKaxp2BsaEdgdcjr6fJ2",
  "key22": "44rRXmnYt4r18sHMeZy2RjahoubqkmFQ53dmWtkYiroWVdaqLdTU58eQFoswsp8nv7HDDSxBUdGgsZ48giYZ5Nsw",
  "key23": "3xRjfXe6D7bBmwJK8uWkFBC2vdKTpymrHA5NSzhwsWtovztuBHHphgGA9mg8kWrCHBi1QjjPAzqss7YvMHgDpa63",
  "key24": "4MyKaqVjsA6BPUr15Qr3osgdiVpvKNZC9En6KAt6DD1YGqL3KhM9PQCtQzug3ErcAHE3KPdkxpkYUZckAzmDpms8",
  "key25": "bfoxCsgQPSdYLPDMbcjfbrsUKshqAt6pqDodwSX8NVZ2forX512bFHDhfUBeN7WQUh7HpnbUta5s8cSy4F7suK1",
  "key26": "47EvQozUk1CR1ZqpL4m2Qnj7P6Coe7ef7JQTbS59HHqhv7fQMN9YF7kU1b6ETZM47hiTHV9D8bP3XGGiJGPP8iMk",
  "key27": "3u5nKZnQLriRAKwrcGyRdU1ZDRGkQZ8ioBf59tD2rmTF7SrPqimA6PoYNGx3WXPCXQRA8aVPtZDRJ5HRBLyfHZnc",
  "key28": "64kxKFXinwPcGzCuPKL1CENbxFgN5ZuYcYUNXrjA4GP6B8Uom97cQ9MRecyY5BaQVYoChu9MDjunN9CwiofF1sQV",
  "key29": "5uejZ5Ju95Q1w1F5LcusQVGkoTNCv68NXG4jYYzTtTCpWnnyK2RhoXW55UB4v9vrXcJSCfDwm8fux1ct1Ytm824r",
  "key30": "C6aoCoYiMghgUgsm1wYQyGvc5fzFTuozL4gHKKiwM8Mp2i86NbucM8UQErEqPCKoVTcVfURzswvTEdvtq3rw6oE",
  "key31": "3qfANerrrTg4vRwU78saRRbb6HdNV7o6RuoQ4ifyESoofw7qeNTx5UjhX6xAV8MrEv6DSgZYXw4shGuUKwTohqWa",
  "key32": "25zooPkjcCwq36KL78UAJhdjrvhkJVjYrtHsbAXe8h9MA36FWSDkbseemcz5r3dmz5ddLnQchoki6bDQLgqvGyV4",
  "key33": "3QcmzxEW89mtyrsS4AhpmhgCf82mVYLxLL4GvsUKJ8UKc8idCYDVVc1EVuC1WZutdWzpuwCH8TNbrzt3LtQy8kst",
  "key34": "33u96fw8PcZuf7T1GpoNoYVYXxu6ViThNB6joG1F153azNadVZNryfrTDwfwJpJh2VMwFgpxyo35eYhcNx9WKEL2",
  "key35": "3671btYSXDzRKf3vTFvny23zqBiXchLBYUDBkxu34rCpEJaprKAwydbZb3swWr9cs6Gk2bAYdjoDwZj1sV6fzm4i",
  "key36": "5eXsTXsDsRdPKFhtL5es3yTkhqar3aLaf8p9sQXw2pqGbEbn5o9d4Ym6VyatdsLCp8f5co5KJC9HH7xa4KwQCYt2",
  "key37": "3vDe78gNJhpnfAY8zyDE2KUMcQPjYaJ2pXBocZspzapLZdWZkY3TvfkA5wfBwVNpPHRd1F3kCWjHUEAUUWFh8VTJ",
  "key38": "3pVagfSEGaryZMDts12scL7u1AHiXoXHudiGcM3eyp3kYyafa9pnL1FJrUJqCcxQxhKs8s2Urif8TYfArb3YsKXR",
  "key39": "4eDgTfJ4Jixam2GUGdqfbVFW9MWJtPiy9mtYuhQmov3RcJXvYY8xDZc337ZHFXZgKb26xXyWFdGnKH9dnBaZFUjj",
  "key40": "24exRSXa1e7QNQ2XP4LNTh9ShUe2DcHXA2MShShnNUysPk7CrvLYrmGUrU8vAtWka26q81Dez4vjSw7kwe1nRENF",
  "key41": "dsgJezcB7YVrVGRaMoofzARtP8tC9nnyiXQNKpvsCjApZugiuuqkzRcsZJnrA2AjqnNxoXYN6Fg8in3ReLeCtok",
  "key42": "61KJvdRKu8zAusfAopbHNtenivDSXVP6M9QEfMAHqs8YJdWaFFxwqres7icsYXk5soVF7sRttXcVsf9NNzrTPGFa",
  "key43": "3MQkLEMwFF3SubySSdRptrdpiE22DYVufT5EUKXRoKZ5tryTyHAxhWhdMBV7x6UjiD53rQSWUBXRjF5zLFEDg5tM",
  "key44": "4adAp96wH26ZpJqWbQ3nAhVcZY4aAU87Bus5PJFs374Neh4rtMeLF4oeHPLMXBcXnp3eeMvx34gPAWKa442eaB6p"
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
