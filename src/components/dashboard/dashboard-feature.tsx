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
    "3pTNxDAutRy2bYfxEZCAw4AaWvxPeh4rVz837Zqf4e4VMYSfkeTv2KTy3TXWtTvx1FTDWH8Z5atpVBYfTP1xuygn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZX43vz1vSVmiNJaYXLRfWvZDDPRqbgopxBmLufkJEHUQUpgZLWNjsyv8Ych5TGMAamNKe3piK4C7FTrnkH3aCS8",
  "key1": "2o68hufPTvx2bhaXorECd5wTSpkRBtT2896GHQGAwVxNfoGp1WeJskcdnUswgxKnRbFwmsnSmXDXZsQnzcMReQy6",
  "key2": "5dxebj6xC1mMPDv4snqiJTr4qETjzpy1SLfvKKAw8uWsQ693pMSFtas6uoggQVqAK2QYNEfHY9KutBr8E969hXuf",
  "key3": "2wa7icaTekYULnWPGHbBDGB64k6QP7gKyYPiZKp72sbieDbrGqgGUwNsbQcjMbD91ALvsyvgPxcYyB8xKe2H9EWC",
  "key4": "2rwF6EzHj7FaDFRBSd9a8zUvyH12DGvTCXEPZ85q4PdeBhKwiysV8HgGo2cRkeqAsvEwho4my9L1HHezQgEB6Ns9",
  "key5": "24XoVvfnwnywJRhNbU8dhUykz1XW4Pbb71wAfKTvn7ZGoZDaUpBssNmaqFjhmjjL6aEsGEUxuXCSGfncpu3ERE3k",
  "key6": "nywvC6asGWozmSFqFSys2gHZsf3i1L6SZrwvTXPxXH1QvBCUSRN2kSB7nxGKrZwwFwnRLU5rpdUQiyaKhjLonfB",
  "key7": "6tPh2J6vMHbB2vsZVqrxpd7HwGUG6SRgjuQPnjS3zDxzHKoCr3pCApR3LWyeu9ziGknidqAiZRVgVgUkDTnsAHS",
  "key8": "3Vj28fT1ujzRsUD6cnigXn7g8YqsfCEtzPPYBa5sPW8euNxweWN6Myqfvm9mvfHu8Es4KiM1BJxgyrAvw7vMwoUF",
  "key9": "5fwNTkX2GVN2pN86U98usruFHYZxhASwSai8xaU51BXXsFFyphfnWC66qAPPN4uiEaDQP6YeY2LPwo3ckSFuwjSg",
  "key10": "cVbkiub9VFYH5Z8JeYBbX1XGPVib7MJZVjssjX7FSPAu7osSKwae7Ghd3XMgygPyiMRNs8VVB3tFAdu5DQtLpnx",
  "key11": "3hLRC4vJhZKKArh8R8dARN7D94fjPXTL7quAMpyzBCLutpNtQeqR6uWRwZQG9RT7FjGhrU5wJ7LC7SKQh2UaUEnf",
  "key12": "65oro21u6fg5iZGeS3h1fx6CRXSwh4WfRfiM92F7fSBBXYragLsFoXTdY9cPbTc5gDoD76eawqjGLNz1yFdRNdnz",
  "key13": "4WZKWakdt3qZHn8H2VZb6jPV1XWQK7mDmGURmjSTfX3Ar1F4DW3HwKcHksc49qWyCpXPR6fF5Z81h8qwsz48y1ju",
  "key14": "5kPqQYrauy4RbWGPu7bPf9zMX9iYtXEsYnXAoYFbE6iJzyBQqBtxcW714eLGQrt9ckNwaSWNvLJjw2MHTUCedEgp",
  "key15": "44cGPu95ciRkoXtbq9SG1MApwaa2w9v5T88N5UvGmz5GZoqpRAuKXoismwZgYsaSeo7hewPiXbJxVbewb2zJ3VrP",
  "key16": "HMTt1BPXRSmnC2XMtcFvTStJzSWEL1X19nwcwDC9i3nsngka3msa8a4T7h4cqqH5n22TSmHWmcCAq9rrApaJ5sz",
  "key17": "2wCfmEvwQA5ujMfYRMXjo7RTJD4gS4URwj9kthpZv4jv8fGxdKX5DBVkXUQTht1fuLQYxVWVzQjGqnovhejRWeoQ",
  "key18": "29TWk7T3pKcszAF3rtRWLyjpPkhSCpNgYA9Jy58UfyFhnNTgCENhG8Uip6kdebvYTLJSEfLyk6MGpRYMJhtZud3e",
  "key19": "1aAcoX2Ed1H23pidLWHyzggXRx74ud1gSV1jpQFPHkKofqU7RqGKoFLjTE7cy4jbidEXHoQm9uyoc3JcCp1EpMq",
  "key20": "ykCy3RZVkFhUxNtcsWzoPwc8C6UbRbskFR8tdwZHDs5pYsHHjMt87o5VTQYVLkGdu3UgzD9J2rDisEGpFcQiHiM",
  "key21": "54Csyj8gvULYnK8zyRaRKYTjYvyNMK19wRKPC7TpN9ZEqEgxdnuXm1i8tLFM3xzk5hZykssati7JspWwJiUfUzZY",
  "key22": "2NWve9QwJChTfxu8CKDVNaqeyQmcECCrgVXn4zJRN237SvBrmRvxJe9vHR4J49TqB3hw4NtpQoFvMs1jx1X1Auia",
  "key23": "XKgDjyzmtbrjCA2AEAv6FTRw5VDNdjBzsyZsiggKJK7KyNdQJUZsyip5ATggYJiHkqAcrYCy5ZYo9UiJSoWVJRi",
  "key24": "3hoMvzn3ypaHcwmADEXJ4vEfB8Ko4Yu2g8RWLPRumS3yRgUyWvgFsUBgeaz7n6sdhE1VaqP6KqDneSP1K7AyDRZG",
  "key25": "2shSBj4A8gDbz64E22bQa2SLk39c5uMpatDUNnJwz5nCortdGCWfz54syURvq52NBhdVZzpW5QUwoMuu7jPegAnq",
  "key26": "VXP7L2bY7cid9WCEC8pWebCBxfop5oqaPDriNzAiT55i5s1q56ykrMqKHbMqsB6L4ydDR6LPboYjwL6pT7XmxXf",
  "key27": "2bXn2MmFECt5TLG92BCbTMLjMs1RUjfDiUwY5Dcv3NuevAZGV15krfUutxjTstx6bVSVR9ZeHsbCusRNfp4aoWSs",
  "key28": "4FhR3YQWxH47EygLhgT6v4WJ3GwefWt34Ds8iP4SJwJ2MadFM6XHoxboQB63Sr4UXXjvKSjhuTWAaLVkj14AMVz4",
  "key29": "63KYmUS227anfYZTN3D6uoviQvqg656goKL3anzwMyBSbj4VM7ABcDZaQS65ZBZbL4ak4TnfyzbXUtsYS7Ts8gPV",
  "key30": "2B3x85189jYhxNpVFM83iLM2vrobTrTUDUcxcsnnfKvUi3fSwN6A1UoqqT3StFTshrRVQqAxMmfSoBs2RvKshsQw",
  "key31": "38zcE7cCu3RCsFgMsHVcxVKGFgHgAqfVC6H53Ybmr9YPhn2Wwht3R4rwP4hspDi1mHYTYruC2umP9ghAutwhjS4W",
  "key32": "45juYxnwbL2PKZXRUCJGazura64vg1Gj365LGNPA7mi8cp3eCFufCe9fuDto8wWFbpbiRqqyu1gi5G1UgyjZzoSg",
  "key33": "3UTZv19Y5nnPaVePxo9NFCNmdgMrsu3YEyRUeMTXPMPpu2dFS2VLgQ3QY5E1AxS5QDTDazGmhHRvS85uWZCvDooK",
  "key34": "55zvkq2SCbBDApJdQiYSt6oAydF5YUHKREe5D1kEYwAnfJqActwAh2Yd8dFw4HBNuTpS1xMuugmeciJK56fEydz3"
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
