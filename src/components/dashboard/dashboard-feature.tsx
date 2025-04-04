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
    "3p37fV9FWyfomVaz2URDa1vcc6sEyohs3fpS1Q8MKXUsD35Kj2ifwQ1AgejL9pTYtyPGgZsEkA7Tnx3cVegw2afU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6xvTsKEFGGkeBpUvTxZivXsPmXaRwAJGHSZZS7EebMVb1uRsPCA4UnYj5S3F6j3Yw97gLys5UGDdMwZU36q5h6",
  "key1": "aEQsaXMeaXRoLeVqLRSVRdjzBu3YwQKL1JnZx6SddsQkYeisNDicRF1ytFwjMtQvnuQMFzD76A4tZi6gZbS5Ktn",
  "key2": "41BtT878qN8Gz1YdC3f9F6X7EeQyTThH2JG3H6eTYA6ydjykzaeGBSAH4CKQ8P78LcBA2m8kGHoZRSqCPPtryBN4",
  "key3": "33yg8diDtbPAtdU1UfHZckoPWoq1SoMQ8YDq5hKpyf4kvqaC3UCEFGk9gEeKjFgUJRrSuhC9iGwdX6uXEW83URFG",
  "key4": "3UNtKTESF2CaZAC5tZ7QHn52kX9dfwfWd3x7vperPLd7tmQuhV4a9nf7bWQc1L7Z5gVjnHmXy4hQ1FybwCPqoaZ1",
  "key5": "3GQWe6p5E52vcxVH9xAiV9Eco38JBpcQfsdAbEJF1M9n6tFgXrYMVQrTCR5KmRi6mzdgwRWx2iZWiX2EbE7tXFEn",
  "key6": "2un8dudSpSVz1mWSwUwPwNRRNyKLJrr3GCRwpFiH7rD8MTcdGiATeYvKp5GMGGwYVDdvq6EnjGiNxvmpGhLgNHdW",
  "key7": "4HdgcUnUbFF2podwWNKBinr4PrMBjPF19wKsWg9rvgY7s9H4b8ugRAzBtyWxG3tcnGpegJiCWrnTeyRsiJ2UbNY9",
  "key8": "2YX9adjaPgMgtNcT92agNEWDXoiQUsiRCoVe5xm2AEUgHd2cLwkUmGjEzdF4En2oh7ZRUo5fZCk6KsipP77Sgy1p",
  "key9": "5BQn9xnDNLJ4r3hTDJipunnfcJL6YCtpRugw2crYXQK1s6DU6V3hMQWWS2iYjVijd635oVVzG8rf5H3NtTWmAM9Q",
  "key10": "55DfFH1gS9vkzZQLUrSduV6adT2as1JLaAHdPUXCnNgh42vHfaDRejpNTB9HfoBNPuwMM2haf3eZFEALMoLBnpPa",
  "key11": "PBuggoLRFWQFB1LfrZVaMnhceiTGfaLBHT5nRBFJmLgEsp948znHo2ZAXNbC9QyNyvKyK1Cu64x8Ep6SRjvEqio",
  "key12": "3QBenVG8hGtH6uZonVcrYz9YDFS1BF6agbvqqpXUmwUyCyE7yzKmL49KAiEDqicjuRdzsy3LWYzieNjQyebtCnF6",
  "key13": "4TEnXNnHYXVUzjsXBZALe2vrjaFfMebpkbXSbJ9rzXUh8vUajRevfDUPytV8Y36Drq8sGY6iYnfrmMaXgCZhxEqn",
  "key14": "YzvfobpUC7Qapm7X4euUUTNiEisRUP5MFFor3UbTKSrSXMMoW2wFbaQv71Jzvwg8jbQXay4xdsa9wrgCVbk8DNR",
  "key15": "TDy8YnE9F8CXzvoYjGM2ppfxLs9gMfCBuCL2euZDno9dcapRk6sG1rTnC1boo77S8ZnGcth8YmWo68cki6zw8pj",
  "key16": "A9xBVrtZuAxSXaiYPu6Tjx5rfXqWyEFWzTuZQdMLRsbaMhjHRD8ChGspVdYiXdbffpAMSae48SjmhVaqD2LthW2",
  "key17": "3SUfwBeD6C4WGDkh1MQRa31eCE52ndCuQ299sCdiRy7qTwJvvjo2PRMmoYud8yhDfWeRtaxy4aGGukkKEhoyD2Vh",
  "key18": "5hdy2GdMXTj9AjBjve98ivzRDW16CRFweGqzmjCW7HBkSrGqg6ys1FAG3VhNMDnDK36BfEsXXLPQnGq8BsX2rBBn",
  "key19": "3hi8Trp6Pt9gNZTrAKgQm8uiq1o1t4sD4nfPicskZdDUFVbLrkuJVGE4XCPRHYrNVLJK9aUbQ5fkdK5dqLdV6ycQ",
  "key20": "4QwBSUTLNuR75xd2ceZHjWzPsTWzCgFJ1wCgqJ84JEKozCkrsxx4pTna3AR7Tnrx7VAVV1sP1EzkTbjoAasiAvbi",
  "key21": "4QdrZrhoHJAN1BPZ4oVMDXZ8pzqwQvyNurQtmU53soBM4fkCg76qZXFeRq9AdgzegMWDo2GM71KMY54z2cvyJTmi",
  "key22": "5pRK7j8Tgzh2TG2QqCATw1hg5b49HZuKyMeLfTVjTF8yxq6gvXJ25UorC5wC3T3QxjZFHEHf9kEoywHLFUDvbpzq",
  "key23": "3vwCd7sBdEKDWWgdmnEjhENGuBHactk9QNpTN7ijfg8J5orzhnUqyvYQ44LHarhs7JAxXxJm8HcKXt1Eeb8nDViE",
  "key24": "2ibf8rrWD4k24teRnQMgwQm6vhiUz6fn9M38k4iGkjd1c7WLxu795TyDtJKx4kr8VDueFeDdEXR8VM2AK4kWWJPZ",
  "key25": "4MqziPXbMA1kPUHTYjc2Axeu8ZUbF8WyYgC4HqZDPJavUfdVTXkCGUvzD53CpiJCMnreisvWGDvJL2msnfwmEXY5",
  "key26": "4KNMXHAqGza8rVNSkB6ikNncnxjFZVMDXVNSLmbBGWrj1sxKVvynuFCEcVSqMkxiV9xAMgmW87fu4wKGDsX55nRu",
  "key27": "3kPcsk3h6usgSJ6Ae3E9i9jKTiaLiqWNBQPWpoWHhuKVTniELUBE3qBPZr1JCQHEMViFPbZvDG7rvmMfUrrWGDB2",
  "key28": "b2VJHps1x1xng29ChN9kdcMCpHEjkJPomPLHQd6VuLtiEEMhzquYCRQ87GknRsitTyWTy8Zf6q7gBocxJtHWrZP",
  "key29": "3MXQi5VrP5PBwkhk8kkDrAbGjGsBqybKmoK6CGwPj2phdydaKizgvbfSCwXPTdcc7QWZqvgXUVTGViYCsSdNBKQe",
  "key30": "5tgacmsdFt8MF2zNxabLVfBXubyJMz2w18iC96SKquxBAAKiK1TnA7Uf2m31dkkMMpP5VWjFKJbCWpoteQLfMEYn",
  "key31": "3gLb3c3PdP4u6UDFwRQLyH1LSXbkX2JevBvvRZDpTjraKCWzm17zHczKgoZXo1EpRbgvBJqrTfuJzxs8bP3vTFKY",
  "key32": "412anwwCCq7Ux9nomS62PPVjxKwrLBPptqvqSMVW4isvHJm9DVe5fD1gFEGgt5LU2umUqYdPRjjTaSqrHe2zBfJb",
  "key33": "37WFHQDFquS4YSfcDC2vmDGyF4XthAy1LMvgBhBs9XttQTxSFe5BdYduwXXgnPW73LZ7vncxgqGBpJHsEkNgXaKd",
  "key34": "gWPGKxHJnhMJroJMSgUuVMD4i5puA6aVZgDitsj3L5rsUc6ACHdp5rZh6MG4AMf3dWZBDoLGRwigNEZqSibHdhx",
  "key35": "4qtsKgCC4Qz7QA8QiV9gRba53HgfokBxghGsHpRPCkmM1udM3M26uHaHrABDYeMjNLckVnwG81L6nuSxmkQCaped",
  "key36": "L4VJ9B8QvPv1jtFARb6gmS44TCEEhhwULhc3hDibQByatw1YgpWGKsGP8ewaPkjKf64UjGdeEpFb8isfVmsCpbz",
  "key37": "2v6KhDz4DceAaKXpxz8rJ6N4PQH5XfrqHMWpAkn1kC6zaGpnxjrj1CJ6YTriCSN2Mk8zGyirpxvGn8NcQVPDdBAz",
  "key38": "62GXHZSqHvqdAe4yifQbW4RPgCM637kKuuPhYJMYG66YwMsmPEWcRygRPLLhqpVTHgYRhhhGEgFRc4d6drfieFpN",
  "key39": "wGfP7YGGHpDKuN63YQ8EA4YRRuao76ka5T3KNcQubR2KmpkkBKwN2GXcuRvjfC6o7TbxPR91wdFRn8REBn27vJY"
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
