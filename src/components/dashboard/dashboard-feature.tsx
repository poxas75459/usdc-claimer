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
    "5w9YaqSHjS4C9iwH9npnV8tZDMNmLVF9XB8XLknxLrX9FQZ88qmW1PMEerxjyxgYw3fuzVQ9PzAQCTpnziSiT3hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yp73MBWhD5TEpF2jfJ4kUY3PHCdA5QNtzMwrw5oY6JDQhgRwmU7n2JzVsHD9RwZJJRE7M9zyYjgksk2qvAsR636",
  "key1": "45U9x2agMLtxGWLgACpURHeWA7XCmgxAVTsJwARwrhyWPJWxoVfJtvJV5ybHBMFSmYbFeqQA5RkVQajSog6Mqcy",
  "key2": "2SSYizE92AHedjj7NqRjg6Nv7DCChTUf8suVBp4RA7GbQrRj9Z3Tq5osug26LcjiWJNtBjD9FxJyKbv6MdArumYv",
  "key3": "2vPgNs6VHxPm2zmUPXK75eD6JPdHP89ME7ViDS7f8NA6UshfzX6dwsVJ74i6BAgG263LxNa3w6NurZaxR4cSqnGZ",
  "key4": "HeEiw1TnNVuHEkMJUVmig7ofPY1Z19BuxTiWt4jMBSx46Fg47LuLs5TH5puKzCFnWYkEB6N8dvVq4GCtVfmHzDo",
  "key5": "BEoMBnAaSUC8rLz74mb7N5aDt2EaCNGvG19ohqAbM2xoTueuDzR5wf37qcrjYJiix1LH4eDTX4k2YeuNcDR2p76",
  "key6": "5bxTsSmB2oPkAzKB2X48t996Uzw7hw2Hid2vNZv1sdr25fieQnaaxC8h6c9T7oCierWa1BTWEdVvRbv8jhwEF5Nv",
  "key7": "eyvia6yF6vjEKJUWGvdKPMC4Wz4QUTCsBQ3ymVwbZ9x43rZCoU4YWxMYFZwndNrYjbz7v6xsmw7pU67SubTg6Uh",
  "key8": "56sb3yeq1AgreKNXVdRxHj7rF6QH5CzaEESSk1j3jftqiTyjVRCVKzDDVKnS9XCDaTs26y6YfyYim9uVfufv1NNF",
  "key9": "TCRdEfTdrDNtULWR3SSfRk1aN7zhXVgC2iSDayGfJ65mpxqaEx8Zk4tD76ZEkxBGNhvwtk9miTq1zpzNsTk4a6z",
  "key10": "pn2KumFXHRhq3Y96bRZQnY4tH6WVp3KrExWxefyqjgH2HvMkrTT2NPY8XTm2QBqncR2axn3tGKV511F68aNtjon",
  "key11": "67Ug4ZHjfLKJEeyyRa6rSL2RWMappZDh9tMp747XzxX51vQspDvHReUHHRje5EkPs5VotS9xMptYzHYuEJVuQkne",
  "key12": "3uE4J9QKCHng1WenoyzuhE4SFs5YJQNjWasUoStb3V7TNTDUJV7196Es4zXo4hgeLXGAk9MoQBNdoQnfKfcs83Fj",
  "key13": "Vfrsib56QPEkeW5aaQfHCpXJxiskJ98u9mEUbRV5N3H7zGzUAo8hhyieryPXt4xWk9aiF7E8ABCQVg87Hg3zMMG",
  "key14": "4omUTBriHakS6N8kmc6mgVpsSAxsWBuiE1tMBsKBadjvTb53ApykWM5iRT6HRBxnvr7S1vNWLdU4STCwfmX3q2yY",
  "key15": "DNB3QZMYLSntYVkxjd5qDBE3hRu7QjY1Bm54X5yY2trJK8rQQNX2cSLFmeBifTqB5Mbs5UbuqDApZGXrUY5Cn4u",
  "key16": "4VrE67pxuqkTJjvJBypEVC4PLsjC9zrFogh3nZhyqDJuHeYytaFvserGYKmAmn2kpoJ5EbZQMu35xCHQ1fbheT3v",
  "key17": "4rGhU6CgfhH3mN3sCR25h2U8aT1YL24R3DrdphcNvyrXZWJGogmrEzgg7mfXp4MwToStDDKCthpkUPD2nhfQkuLA",
  "key18": "3u9aTyUwirPbjfA76HJpJEsauMdMYKgNmZfwmjKxkLzMr5W5NrZUZUd7QyAZgjcTnHtdK7Y1NNgEoQzXJRJqpaUu",
  "key19": "3yd9XcYWdK1LEoFLNt217WzW6nwJGQDtPRSXPCgLL8zrhxASncZFqtip6hB5NSoBfnKtiwgxdPPk79BECjt4KUiM",
  "key20": "53iJ86uiiB5RXaMPAnR9vLNaxFcqQUPb6KsVHi4bHcGSpRReawS3yJkqXDMLku4u3xFdez4v7Xz87msZKo8T1a1G",
  "key21": "2yGASqvQCsiavAsoiUFKEsQMUHoWi7dbTZdkFRPV65eYPE1gcP8CBPuqj6v7Cwyg3sz7VmHKS1y9NWcSemrabnDQ",
  "key22": "5CQygMLkjJgateMohhp1RSJXEoXWY7hHhBGVrAxSjKgG6T9ngM2ABs74BC9ztyGnU2SR5Xv6oongYLY1MFHSiMLf",
  "key23": "S8noM8kMPjHvoLfC5eviwDJ1imA8oVPrjvFKrwZU9i2LfXoYgHrGQkWqDdmBDDzbwV3TGUKY9MEKMvuXvhhaGjN",
  "key24": "b5f1SDBJMACkcQLuVD3aHff3KqiVbuQETuPaTA9LKL2PyMBGKDtzLnFDgaRwgiHRL8Xk377VW1eTfk2doWvrC5z",
  "key25": "sx79KP6JFb7Zm4yysuvpXNPNhcUtw7HGieCWrSG6E35mThkfPqvKfrn9BAG3mr1q1JJKTe11CCFkEZSZL4acKe9",
  "key26": "62LCAnVFYREV9fjDkttaHS4T8p97Wzq3eHVkg2tJQYCKhWo5LGmkwr36NUnZepXggeiZhyhFSe82Yp6XmuR172R8",
  "key27": "5rFuLCPnrGoiKrWZtjxd9GxqYJcNsCz6qU6DSdsAcsHp8q1bvZMreKCQKxDnihmZASm2TELRYCVZw2hvx7e3VSmc",
  "key28": "5DxxdFTN2u5wSBtmnkEstze1deVofZaT13KZMPgJvVH6BjLHSY3BvNs5FXXnHGRRwhns7Fiup5MKEVecL26HC3rz",
  "key29": "31qpt3PvEJwSG7ybRkRiGyZgwpgfu9b2LedYEs2hLqs7tP2EcJ2GDdZ5dRmfeLzMyhDqcciNsqZ2cUUTBP7zqrpv"
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
