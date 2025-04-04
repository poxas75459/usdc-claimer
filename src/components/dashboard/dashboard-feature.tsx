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
    "2ezhgZXBuj4Ri2KCnjMMhgMHmPk6LW72VrXijpVg3hw2XfRKTRVMmhS4JVgFoSfWJnYhDWasmnuU6ev51g1LX9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXed3CpWX6LGoHLqQ3GDvz94GzNHZUP8R9Ld23up1LbP2JqUQH5ChQbF7NvC4NHqbet9CUDLKnfe6pHeqEoPUXV",
  "key1": "wu99P4VrVjVaLC9WF1UairrdiU9qNSDiCXkeDxqCufK2PxvwvT9KExt822VpRQusZGvKdjgVJpaKBbM78i9uKAi",
  "key2": "54x6aeuzLNDvcQ6PcbwwWeCSHhZndCSEVwd1eWtdmtoZSKYRLqbXBEVztcoCrzVL1wEDiHTQyC22BvHuXgBkYM4s",
  "key3": "5KZwyyyzUtuXjHsnMeuR2YkzwMDDTEcNJTn8DXHfu9WHKai8cJEsUHYeb3z352XgADaSaga3Cc6ScEy7sYEWoQxb",
  "key4": "3JC12PSTmv2rSjcbmCAP6GRnb2AZCnPQgQXUW8jj1EqycJRa8A9jdx8tKjM6GBXDddj7BHmbsNVxZYNng7gtk9qR",
  "key5": "4XtABYFHtz114A3BqEpdWWSUuWcMMMBGK7Ky6C65niEUKbsidYTkqzEn5UPdyaZDS1QZjFx8RcfZDkHrDzUxX7WM",
  "key6": "2srSUPWWbqPA64gqU3J47kEtyt6jwG83RXZwe8tCJ5MdJb63kgoCUX1czKZazmGM7oKo4ughXDzi9ARFES8wNfkD",
  "key7": "3riNFRbrCf6oR4aDHoZ8nFDG1YVrc4pM55o6cWitKVZtTexqRfMQoVcrMdMbJSrMoG1XX5fEmH2aJfst4W6rNQJQ",
  "key8": "3Y7QJtY9tfXt4ZxDAnMWFDhgtuH16CMAkXPFoBYawW6BGmNS9squFByiuumMiSF3H38nQtTaFwEP5bXkkXX7GXqt",
  "key9": "5xwNprtVfngKhnbW32gPUX7BFgY3CPZqRxKBTC8adXVtsUkV7tNbHtKiUz4gwPRMNbijWuHR7KK4TofmUhdX47fC",
  "key10": "2KoPLCg1FCU7pgKSqKG4BWNWcBRqbmDcuD4XG1GFoobBn6xDoU3TkbjJq4uuu3v8EtSPnvif6zt1j4cYpDkAB412",
  "key11": "5cpzjF5wMxJYwNaB7ETw4d9Vyen6b6hHQE1rJZtBjKzpJjPVo57jNwSVRL217hss2MX4W79rNpFpcSKVrn7zuWBd",
  "key12": "5BgRLsCT4TAWpXbtnjo7JHRBRYYJkg5MhXRHALF54hEPcDsCaN41zqBSszEjnH5xZsF5sXt5xdamGwraWDjBa5hd",
  "key13": "5p7oedQum89HmruniDUtMAeBhHEXp8WUcXZt5D8NaPhGrxqAufrENySbC3Lgd1t6foGseuNuYWkmK4HnPb2WdEoU",
  "key14": "PxLRicYsUrWReeBajVju4ouDFE8Awm6sKXja7CsbYTEnPLpABeBu4MqwxJErf8TgE52f8b9XaMsCiCUteGbvLaD",
  "key15": "4PCyraVhJ3Ud4PM2P2J6nGTwSx8HFthDRWEZXprqdZ9GLRkQqrWSJZ3BKTRMP8yfRNjkD87XCTe8SqBk7wkpyEwK",
  "key16": "5PcQwtCwfxzjsje955fz7PNE98pvmzq6HMHKoZ4za6y1MxPLoqBk59FDsX51V2XFdpbsmgmVx8RrVCu9jFmfVXvQ",
  "key17": "7FmKMk2rYxKXTnzkminy2c9yEWkatyRT8LvjRsB58xhKs8Y3bQbc19ttYzBsrmbMJ6LRBuN1DD15w5LRuf4tyVt",
  "key18": "4i4gdkQM2gWukMv5iqx34f8sk7PtDJXQ8ph4uCtd3LoeCbAQAudqsXb7jsrp8rpt3CKCRikifzRUzPTKpDeZwuh",
  "key19": "XeeKrPGajQ3tgJQTh2GNwwKdLjPLSaokAkEGfrt4krMYtkmEL5XrLwaWPPdaL9qZBU4WXYirr5Lfamp8DCLHCso",
  "key20": "4L8VvmZ9DKaKWTEKZKSJ1Y7eUDPKoutC5wrJSae2ty6Gkh6aVeouLMCEqBqXTM3Fbj39W64VLaQU8kKFV6KD61X7",
  "key21": "5xzAWndiWfa9MAWzDktvh5ZVrAf9K8opqjqRUYTvqwzTER2hBDV5455feGT2iirJ6BYnvHZm4L4ci7vMAo4E1Pgn",
  "key22": "2KbQMa1xS3UcYp1vgeidF8ZE6c3Vh1chz2MBfitVyrwF88zLG1i4ke9xgUqAioqjh4VxZGh9rrrjPB4S6EeZHDwE",
  "key23": "4KoSD7tR49xPUG28hSTePdXr6Eh5cyy8J6qUoiP3ejYtrTqZGiPjBcfM3b3UpWXrZRRZeYSeCmim25ewPEDASFJM",
  "key24": "inVbANqwWw5t59z8zFRmUXoj6JsuGD59m9TfsBbfnE2AsPkeeEFDk5pfcSu8ntGvTDMwg1MhdqVAAuodTDRPwxc",
  "key25": "4gyGGVdDNhwejJ9N37RW9pWPJfatdvg149RNmpaBhjFEoE7HPCnZYRPtVneDnPfBU7iiWofYXKii3zjjmoB9huCL"
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
