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
    "2euUgVHkMQZQMydMBfhUp7tDSrFuPGj6qzQCWekcVkK2v7GikAySaqBSvhtf47UwsAjxByD7djKxJ5NoyhGwHq4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ukfFsCiPbE97yjwCrdj1ZHYXBSJdYUpqu99Hy6mw29bjk2B7YsaY62i3FFPicPLtsHBqutftPXb4oUEGz1pA8H",
  "key1": "2LmKGWcnJM8kGfVR4yD3QNQ64Bq8fs7FXC3yZBPJVVppyRtTbedbH37q63Adu2pk3zW9Wi7xuo1pSvS6pvSxVb7o",
  "key2": "4rSXaAxYeWokKiuPYB3KUaHhCW2Wf1tCfwrY5ve2zCqiGwcfv9mrwFmN1r2FjUwtiqeFhAk6u9sCAt5fXuFcpZfM",
  "key3": "hxAX7U3W4bevfrcf67dw7BRYaejxTL8ccjqYJzaUHfRzHDUi3g5PZ77JJfxmguwiRCUUARp9RoqMm47f8cBpDfA",
  "key4": "uBEmjiKyLRAiMCPmpKry5xjaBdfYqTUpyF7KKvBquV13DddvvVqs1AmhQ3qRsMuSe62KFqHMUqEy2XCBGiAJT84",
  "key5": "i5N2Lt8k2oLKVqzATPVQB2hnszKstMo1udubrFWRfEGdWBsrjVS2iyzvmb3PiB7YCtH3Bv48JQhDWND6FMYmnrM",
  "key6": "2jftR1zN4Y8RCUH7fnmW7yeN18kE2KAhVCtFRJyJpMXrGDpicLDdWDLQCPPmfQmDEyvyHPU8jkfe3zSTRrnh3bww",
  "key7": "3KZ3spix9q5xjt5KJyQz6p3anagErd7gFndVmDqtWLdn9mF3DiE7nm4UiBmxKLrMPg3E9mwmbxVpYffJ5LeDurZY",
  "key8": "3GHGWWBMFkaWpdqad19YDJrf4sTpDyEcXCxNDszp3aqcXzzifEntxUu2Q8S5tLzJERqoesBNB2k4viFau6bia9FK",
  "key9": "5wNCaDLvPrDccpQ2TtGsEnRd7YNrzFiuiv88JT21gr8FDm953gRMof61y2VGYyfQ5ecqz95NrC23U2d5QYphrnvG",
  "key10": "37c2rdWRvM8jW5NPX4VXP4fqTCr2SkpYiZmzD7LJ6QUxt5yUNsJTsiYv1PJSrZujyvZwtEQiHjpjPS71CAa76Cso",
  "key11": "5bGkFXFg12vosiFcBZJCDqDP7sJwYk6q45vcnvDrDK5rEpsLEvpgJSAXMmgVfXEVoh1PRyPGrmU1rDLmvHSL2cU2",
  "key12": "4CS777fpNoEpKBqD9moTTMTdYWhDdfZFGZw81PoxT5KacS78gv41YUDJioYE2BEFtgyuP463UXVNbCk6UZecV9sQ",
  "key13": "2eNEVXrQkNxDudGDdhS8Lc3VrMofrMqUSLwASAhG7im8ZzBAepMA9USbXcw99kiPTh7VPp99ojAYugaNiCKDhua2",
  "key14": "5fuPQeGcrLAbMU96TekNn7J2bvuhKQkSWq9pSMvXi6v9weBTSHocvGz7DdaMierttLZ5EmuF2hkyskq7aWoZ6frj",
  "key15": "2iWe3MTBhVZU8dCcSr7TEMGBBxtjR4vqYcuMfmmeTrK1syRpLkEDBjPagBYidBuVnRkgN6nRpdjrsbTCpgxgu3bm",
  "key16": "3hH8T81VUkcPtDNVCzj7h5ptCXSDsT9LJPfsSdtYn2k4maApMz8nf45zKEnfHW8AVYLqQwewpawuRAcaKyACuBLD",
  "key17": "52hCdSgXSWKqSHZH1mTJQhvckHCbFTLfLspm5cLtn3D6hxSS1eShpvodEfYxRwLJCRcXhgPrT5hnLwLTbGPxLU8F",
  "key18": "5dhEjn3DWoJWwDigM9Qi4JFSUKqid4i4kWp1xnSZ6WVFm5U8PVyNkuFYfWQdDoYX6PFkMaZtWbxQunjzJJfTnjpe",
  "key19": "4onEjzLtPLLc4KMx3dBuZVb51mkQLEWgJbhijMVmDYvXak7NEoF9osbv1wnr1ikJSVeKzT7Mqr4zyqwmca983qt3",
  "key20": "5YfXaWNM2pmezzJQGdcs6nvE86Jw7FVUEaTZb2XeTC9QekJb9bS7TQcLnfWUrqbsdrHKpJC45shx1hpMGrg9HChX",
  "key21": "2ko8sQEpCidCkxRnEF9mi3zKvVgDCmsFKifREbngHM4FLPxirJi7Ybj7p4bFLbgLujhergp87Z4UE6m8mwrT196r",
  "key22": "4mbnmEdZefhyqkktKRdD5A8qV2uUZGtmyQMJbvj4hQcjfh2RNn6bvbN4YgyyZJbz8RiiFWkd7n43w73Lnh8a3EVp",
  "key23": "Pv4rsVttr66GZPcKVSMfDeT4bvwjaZuHzX2hDvLv3Yow3Ks3VbeU3kjcqGK1ymnAb2b7veQRUFPGAvAPy9UffNK",
  "key24": "3m5cRqpboqAFdiq88xipWkTwxx58qwanM9CPGia2PBh5qDsW93mvHyEEoUQP8ahPA7v7AJy2wyG5WJEJcrfy6r1z",
  "key25": "2JePKyHCCLpErFNbE7Wtv6886Ghdia7P7kukBpwxPfi1Do36omQAcT2eqS6Y8oxHfTsJnQJxQ23sCxmVPijd6Sru",
  "key26": "427KUmVcoKMjHBa67zMQy5wZejLciF6DeSpHrWip5t1ANmu1vN9ML878vDmpPNBSgXmAPeoK7BiRhAdpA3vDpEVw",
  "key27": "2wBTNQh1pUJXmSCFvuQoagJy5yejxZERRHpPoLBkRQnsT8SQg7qCL9u3BXtxkUGY2b8DcgXLjU2hgK7ZR43KJhcg",
  "key28": "3iqUnQr3xgQr7E1aw9psdujqA77Rf2BjLMu3DEssx2zDg62HeDZcQRqErLZdX2g8U3DLjTgJZDdCJ6nKx3ZWMxNA",
  "key29": "35dQqNHxDU1wLaYEC5bjK1sFA4j8FwhYhW5YsjkngD6mZfi2XtFHgYnyhDSRWGgDubnmmRsRZJcDSoNEeLfYS2ox",
  "key30": "4mRZgLMAQsjWPqF5EMPSQcYK5JC4K9Pqf3EvnePpDMF2t7pizCQkJNdGEozGWyPsEiBo5q7xCwvPmFP7jQ67esw8",
  "key31": "4BX9t2dMNwcKEvtW5fqTu6534p9EfFcgvjyaCsHuY9X4iLjCjbfn56REFBKhAm57M3uwfqjuTZUzA4ZvxpKkA2hi",
  "key32": "cJDgoZTHbbWejZmUWjzAg9khHnAgoXYNWahQYSyiKQpAbfRvV12zzL8B5atUGemKWzj8vyDjWKj4gEavGcXQNCP",
  "key33": "5ACesiNC5ypCprqPMRcE7DuPNFL7d6t1W4wCdys9nVjBqSQFmxCbyd3Jz8kAJUs5Sa9xcDhSnsbHY7YcoXNdUwqo",
  "key34": "XqPNVgCX8twGnbrhJfee2i58GRDiQFQj4NEd8dRoUqaukCNPkvHtyf2waHbWLsExjXjzHX6f3y2CjLhp5QcyfAk",
  "key35": "2ochqyAtuo68oueob32X8FHyDwvKYaUrydjpPGnys9N8rXVNWrRkBiiXKYCPLKT9KCNtJofwVraZfTzi4gMJmicq",
  "key36": "5EXUf8zoaGNqkbpLC4K1EJ7buHPV5UkFUhSiHgPcMgVTaNmueCyCt7XExNnboWYL8cjGdixp2ncxSKSLFgmqoeV1"
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
