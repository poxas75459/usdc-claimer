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
    "5hEG2EXxNMaQCrchLLSgsL9tchsL1nuDJP4KQDNfjZnD5NDoSW3matnb2rreCNUwpvuif6TQbtxR37dbyZB6M782"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLvFhRN6yrdz3CeKAmFG2WMLoPxuBezRbAcc4BECMDPTQLctqDcKnFjoqo7MsRFRcAcrwZ39dFhkEFDuLjEwssD",
  "key1": "5DRH3yiiUGCvYgzP5XmimBspCQjVxHMSi12qsGpLS38zdyLtn69F9LGH7iFFKp1gjbFE8cGg1SMBkDoti29RMV7U",
  "key2": "23xnqUeHJyVJTZUMTrpxnuZ9EM65kARJYVs1NarFMMiPr7PsueqESC2xHoSZuYLzTgJG4g4rMME3wj9WYCAVimYq",
  "key3": "3KYXAf8hpWXBK2u6bFtuG5Xu7MsDmjFEPprH3adnQc7FD9ESbSokaqeSGDEoFh5qEQRhQP4moMdHJXe75weqUTUh",
  "key4": "2SpDgCs5F8mgWj6qqfk5bfFuU48oQGNoTCht1Q7XQVoFBjUnjXw2WbCPQgaq98KzjC1RAz5uSUpnFtcdAe7bgx52",
  "key5": "2mh7RvbKjtQW8Lsr4c7GyeC1MoJ6Zi9oQdLWo1XFxYUDLrnJbiG1DPzEepX4eixHFrLNEGcTShb5PSz3fMKxeL6m",
  "key6": "61NL9rRgNu44JuE3i6DhQtbSTcv7THTSMQ8t1bRa2T31xyASUQquRd2aFohmuwE8KGxLRrPqCWrzTWCApV4nMQui",
  "key7": "sr2Eq1fYXvDJ9TeL9RjvayXXvGh5xwDZAZfGGPw7VNMazmKEGivG5rttYrV6KjP4XFthg3oczYFq5Ly9UyVLY8p",
  "key8": "52q66tAZ8tGVDg8DJ4YqkxkGfYQ8CzQX381BqRvRgHG19dCMe54iuZp6XfDbaAvGm8YktJQU11JJQPA8dcJKUeJQ",
  "key9": "4DVt2XchbQmZxBTk1Vnxe2EL1DKpeWfm5GmrokAQCxZo4q7f3HCBBXcgJkdsTec1TQRoZ6paVCzUvP1cGu788K7T",
  "key10": "zxbmNCJZG8ra3nu97DaQxRoP8QSyH2KonJLALRrdCNvgst1uDWZPHjASQUKFG6SE1uqgbUNFy2GdRdSQqVEQaKN",
  "key11": "3a2cwXwXJPGPD4fofzTSb7bwTMHczZt4GXN6ELCJm9sokDSYMsMkj6Z88Ee6QcMJmRe6c7uR7cgxVE9JrQXaBZP2",
  "key12": "25LDyzi9rBHmuU39DWEMsTmgSKRb5gYPXTq4j83L4XYbH81RUU7hSZ4JB3dJsY29qYqCCWCj435VRU6r7HnFTuFL",
  "key13": "5PWMksQ6CsFRopC9xbKDr8V6tKVGK2eoRkJktv75B54RuPnx1q81sJ4j3sv4b9rVFU9zwNwFcca6D5gDbMoP7YdK",
  "key14": "3373eeYJfaXUqp2G2h3KacDCmrAcb4F2HGNRGiXrjPQdAuXTju2UHJei8AX17q76S9gMUui4fxgyZKTWDzmeS9Ye",
  "key15": "41zWJBEGJNBcZ218Ahr5zpQ5ANM1Wcmc9hsyFbNvgfQtoWQEg4V4oiyG7KkNgXDEJr3cVvFebKHHqUYcFKgxKZVZ",
  "key16": "4p4WokrHDMXH9QKmiRbTipaEiLdTGtgrSQ8qCi4q5f6wkFskn4kK3nhFB2XrJAXLj729AJD3HghFkykHjyh82EuZ",
  "key17": "5WPunH6Uyz5mWJB4WEJEi7XM6QQFWR98RvsaqQShECGKsVqU89cXoeMNhzdVqHFbfE4TWnvzcsjsBsSPF2mR4cR8",
  "key18": "5sbf95hBadtedkUsZaYYreLBdJc1aUZq3myGGaPfqPTWh8Lp1G511VP3n9uCEeqRwRoYuxMW5tgkk6ef9KaufooR",
  "key19": "52zvfigk1MxufuYhyVE95aEWdCzCHffA9j8E2bDephSiNsjTHyRKbd5wF9ziE3r2XPT8X6SQzENGXuKS7nW5TgNb",
  "key20": "4w4A8uFfbf8EdTTdQyV1NDcMsjiKPsryTiVNMHufNjwmcUTAtEURPWZErRcB8jEBkRvTCDCAP9xv5TehRyQ5r8pU",
  "key21": "3TsKeCDmvDiqq3a5XcF9WuVgdZ8GVqvfRJRWNrxhkn8UmjK3jHdcHpdp51iC1RrSbwXV3siKwYqPDCRcNGa2ZL96",
  "key22": "2vcMoebUBQLVEMzNENew8WhMUt1Jo9VziLZxpCD6oH31oVcTDa6mVaR7pnvuyJ5Y7r1FaAnYdBRYqp97dg5zyUXE",
  "key23": "2axdpTtX9rn7ftiQm52qhFq6YjT4qAaT7nkhnksN7keY1vQYWW5P9t8rJhbbz5HVs69TF7DgyczqWRzHhTD1cBsP",
  "key24": "4ZMe9jHyXyQVpy3wQrLNK1ANTtXE2hP7yAmYnxpEYiATeygKrYdEmkQAr3tZwKb9EN8NGdAFB45dKQKsH9F8RUkm",
  "key25": "5Th6BtZHa4e8zAxRVBF5Cg9Ds7xcycLAw85hQisWLvynJ4czxUPUtKiCzy2QTAHqpVcHiAVwkErR1bBFVoYB7kpy",
  "key26": "5YnU3XE5a7Ci4N8qaCMHoBXWoyYZnEhGCCn59X82ZXe8PQZqmTzcrkdbvEgXcV914t2GANaWg8VFWTJhpSFQcuhc",
  "key27": "2E4EhaNG9TqfDwZHiV7VcghCBUUYYw6xiNLGTajopKMB8N8F12sAQySQpncKfdEGh4mautizjcWiLBorff4FbEKg",
  "key28": "2Z2jXDs1D4d2sqeujkJ89EdbwKprPJ3E8FFJigkvAskoXutHR1N6CRR2XupQyw71iVFbckvYbbX1etNA9N3fiN1L",
  "key29": "4Lbo8YWYQG9YnkqSqmu8aGob4bnyiUQCZ6bW7JWMob5Gb22q9B3EfiY5d5Q28Rj8nXc4MrmD4kPUYjQyRnocYrGo",
  "key30": "uaqdrg1gcct3XwNVmojBgxT52kkpUkTWKyqxVtvMrTq5w9HG1auf3JQwebHNHk1wxDLqD5RTNaRjYLW2EU9Qd9Z",
  "key31": "aQ8LGwuBstcSPVJ9wJFLgkddBNYP3GL4htXG7h3r8p8ChTBd7oAVYqBNBseQKC8KxfH5TgXnwS7vxhXowHb7Xd6",
  "key32": "2ZGKu9EjvRnN4Z9Jb7SYpXhd2N4RGGiAa9XtBXuxkKVykTaueLTSsyDFFUv34BXSgQGMJnK3ixEnErZDGd35eonq",
  "key33": "2Hd7wCuJtku5wG8RxWfEKTrBraojw7RCeGdmgqw4Z3q1GzYyyVTRLLNJAUxJw8CHWaTqQdsiocD6QstGBSFjnDgf",
  "key34": "5uDPpeoNTrzCTVbGfW52R9UgsQaNHaum7ZgAyoyiiJ7bthPChBEWDaYSTgYFqQPZVApfD6w8neSucCrY8vPSnCQi",
  "key35": "4rSSrnx9Se6XTSkbVJrzK7aeRgqfQCNo8cmAsxk1i8eWc3Kcq5PbXGZ56HF6Z7td9EGus7ZVAYFGwax76bJupANT",
  "key36": "2sF4zfQfoCTRx6N9mFTb4w5i8a1nR2r2oot4cYtfVst13bADkHYn3YNnWHzkSAnjLxuwRZz1eyZ2vpffaPWvdF7f",
  "key37": "2Bk1Zk6g5Bvtmha9q7SjpQ2xyzf8Ctm4ezjbbVR29beacTmg3kaZYerK5Z8syMBERi13qn7qrAPAzDTQF187SCu6",
  "key38": "3sEnRbDwrovGPg1vEk8Ws6CKVMRsZzarvngjxkqZ8C86YdyStEhuPc11J5fLxF1M6gnnTucoJqc8YFW84sfr5fbV",
  "key39": "5WQBLLVcDVJiWGSfn2qheW6YeRkXJup9kZVXpqSQgGsQ3ng4CT21YeziRRPTL2QmW8siCPv1RZ6v4Yj6PcY3s5hE",
  "key40": "5xhf7eTSbw4RtTH3AEg4LUXWPvM8Up1k21M6TRb4M1vzAYZMXpeCuU84fJH4oj16dQMxFKGhBVBdXux2XwNNx9Nk",
  "key41": "JaXqhwvWzacyuogdLSVCL8T3qbqouZHjWrwCohoSN44WXTZuHnGq7M1AwjKjuTX1n1zqDhFpEzYi3uTpToK1xwG",
  "key42": "431aQsh2w7KVYkyL4hLTh85wydthEKNmUmwwAiNmayNbSR7aZAGsTuekNXPfupvvNNhXTrom62pbEk56dSSGqMTV",
  "key43": "25jquFiKjj4egQMuGb2GnEFhQCfeuse8pdeRsKCmUqhLMQoS3js2B8vhpP8QyKdxGuZ5ENCjnMzkh3cHyzL37SYB"
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
