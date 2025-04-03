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
    "NuRYzMmFPfdk8PPtDnG3A5ed7NFYNLmb2Z3jkWMW8BgnfARXhEyb2tvNnu4HsZtBGsnKtRCW5fA4Nym1m83AUZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9WzCzu9vJskqgheHUcogcwuM5xtJYpCXwKjVmDKr5jgX4hRbmucEWjBHssHpiGCW7Hp1cagCvDhWvtCR6PgNVZ",
  "key1": "2gq1c1915xCFV2jtxdP2cYFDcyFEpiBUtwkJAoGyeBhrtkdrU8XorLRxKHRiiKEQcih7pt5vH3FDxqeGqKysA6bE",
  "key2": "4WvYCUJTaGseCSWbHKAWKbbKaiCwFUxuwbFKVuj8cJXGvtYA2Cz9MP7FZ15vPY6vbdgKivJoTv5iNP12isQwYuxC",
  "key3": "5UkrnjwYpYgKQB3z5Nuo9cvTJGUToNDdjSLM1Dhn74tRfgi4jZHyWbLNKt7nPv9uMMHG1hHyfm86JJat38LFoKJh",
  "key4": "3BBHZNkXiqNWJC4yqEQYeyphbLBzDFHi1wbjtjB14Yavvqbp3MMmz3koXf7pvh7Ag6MAzMd1j2honwpGXQBNQdTC",
  "key5": "2Y2nEhQWNT1zQHVrZ1ZdiqkXFftyeQf7oHrxgaXrfoxdPFvzgwMM8GVACcW9gQa8SDNorivqmCtdvkAfZM3p2xMM",
  "key6": "5kRmwipDRUV4tkYNuoFGz9mm1WEYVrypDSqvCn6H3s4Qxmc3LY8WfjQLzLFZ8mabbKPURGipdsZoeyJTJu4fRNk",
  "key7": "CNrSMZpFbdmSbba6BkGkMKqRyJJ4ZaqCw9qbDN2WdxZPtgCxz3tHtdn9oNrcsHQ9q3tHRtWdU27qUjqbFKMwR8J",
  "key8": "4mn97Q3forjg9DngT3KoourPV3kCMADKz1NFsGGhF938ZzPR3ULq8m89ybTQABofjXgsQCw8BbXhLL8ZMzZ1wtrj",
  "key9": "57ZVdw4TcEog55xMaZqbDMoZ56vCmpn6dRt3tCy6spkbfP5389CunnHd37BedZ4psTanEr3Eu2JYARU7F2wwhr6Q",
  "key10": "5gnWRTVvqFFMsJkM3Myk5hbrAGGys5kDqhELBPegGazJfM9EjEns65Mrx8YNiMQrJSbpRR3T7yX79D15tBpJ2Ter",
  "key11": "4nQETCAGxpJE2UKpGhimm4WuV7yHCqD7cV2pVC9oen5LgvEhfz8ctdE6KbL9qQvbdvbYVzaV5Sb7LjmNyusQRq5F",
  "key12": "4rfJGR19BgAcdu6Cp6ryRQooPq3b7Lr9QQW9kKBfr1wWPb7oeJvZdSqJNbunr6jhH5wY5toqbBy25LERPGiy2xWj",
  "key13": "4jEpXbevxbnuM448Ho4CGvxvCojGrcG6jh4BzMTVmpyuWkXZzsMWcnsJDoXZKh3WFSLvPeR4F5SPhLi3RTuDjayb",
  "key14": "3YrGqPzYkHbzxKXdzYp2gyAFb3b6UaF2Ge3GcRbGY33aHXUSJCGVGRjAViaBojkHuF2bKX76e4zvGGHuauQxgNay",
  "key15": "59bSTRME89tds3UhJmtW4dgQTqaENTyXdNgVe6dvMmoFSvxaqRAdjp69SUn1J6GWejgiX6xokewRcVqPA3VJKxMU",
  "key16": "2J7tSPBhHNTVtNRj4WewR64SSqB7Ja5ax87zWq4s9gf7ACCkpstj4w4hR7Xr4eJitmt8W3hp4iMJ2i54sduueBGK",
  "key17": "569joD7XboNZ1WuAZ4iQDgCcLV4C4yTJK8PYkELGK89iPtLDzoAHwQJZjbaEvemJ15ymuZZFz4SYFtUnLAVkcrK8",
  "key18": "4bgB3xETYZeZ7V6bhzE2aERWBoKWWV3E3rW3gotPSp6Pi2eRq1zVH4Y5XaR8MmQJewV73YaKkyofKuF8KCgpinVA",
  "key19": "4xaj5KgfFqJdAiy9rEBLciCpS89pYrfbqKsDgvaH8x9SWDZ1tSxbxV5gavky9zgmYigYNTpSWYdMtSyKZvjht7eX",
  "key20": "5SJPPn6R2Hd8kxQkvbU7F1K9DScsuHnY7xzsVuMsFpxfMjexB4zL6aqLBvVY1TkF9mYeU81Vdnumgs1sooRnkv9P",
  "key21": "4paRzb8jYxCV7szTnXQiYVnALdHGFDtu2zm9NiSU7vVPFW3SJxL2VRAwtiMMsjHYC5ksEFtAs9jrjTBwvwP5SsHh",
  "key22": "38afaSeb4EmVU9Y3nmv5fsAXVKVvg1YMZnRL8SNPBXEfLmPTfSWAap16res8jyho2qWKdw3BshCGRKHtnUwyQPY",
  "key23": "4SqfwMGipCRYkpdDhCAzUTj8fRDL3bTuLTKxu1osLkHt6s6Qv9UWsBrm12BRcYZXnuJzgS826qf9Hgqkrrt3FN3K",
  "key24": "48T5FLBr5ZAEcZShFgrXAhKRosg7yQsZJU5NZWdZLrUG8YTT8aoYRpBHPmTBH6MACmX6EqnGA6jtZgfcUUGHLX1u",
  "key25": "6mZN4Y3iVdxVbgAfcM1XLWtHyJkD23J2a1TjvpLvUywDVKXp7nSMSRFHZQZMK9PQZE9KeffYhZPN3L4NNd1sjPo",
  "key26": "3fgo5TRYczqD21gKDJr7RyKrn1JurZL2igomTX1CUZFBjN1dSp2XUsv1yvL4RFDNy3C1uVurrm8mxtGMFyHjtc6y",
  "key27": "3zjsrPXoQcdqdNHkpxj4bvESHZS65gkGgkdRTsp4KECXN36qbLHCPUDKoYwVJmesfMMGffZTHXSQtKVDcofUNRJj",
  "key28": "2d3zCuPLYq6Dh7s8mRtDYRUiG5DSo4fveAC8CAKKexTPJ88AanhiV2qPXYgW3NZrQZN9qF2p1WuX64C93gUfhZce",
  "key29": "2gwwS8w5ASjDCDssKeCyRayiJtoEdcfV1YGHBYHBxnys1mdxNo7ExJn2Jst289tKYriXXCT8RT6Z4voX6VcUhfHf",
  "key30": "2ngQZrtcWtnmvQ8me1tjxUWcNo6qTTRyGj16D8huzuLc3kH8Twa6U9XPUpQQMuM5okNNTy96mcSHcLL9ExNqqizH",
  "key31": "3W3vb1jcHav7iTgPnSe2h6WiQgzW3GZmmknkwNSm5NTJRAMvpTGwCGfDNvjayJcaRzQkT2aYV9JDwcr5VrJXNvTR",
  "key32": "48MboU249BGTQSdNL987YsXruW8NFgoWAEPKWsMWbnDrT3tvZkG9aB6sLiAh3R63bAVWF5bqJdmDr83bhp6Q2kPi",
  "key33": "2MmTXwyA9gbDFTPumysiY9VyoM6qByeVBBBAULTK9McNvEmoScHBxJT8SgGuk97bxcggipFqeKvSzqMatkNws2KV",
  "key34": "5GV3scqRNLZJa5KEgLWKgHCnv94WpYPdyvshTjMoBCmf3NmRajTjeimbhGeUARrUurcdMrEdZT6VwRRjnomcGGXy",
  "key35": "3gSyFnyQk2JBTUi8eraAKxPCxWkmYGnWZSCzhfSRfqWLgWTcBAP1TpnnXr8cAvgkXaSKcCrpkqcs421YHDPaprbd"
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
