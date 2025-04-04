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
    "3pQ9ufNFWX4UMgcaDJJxLszoyyc5qkzZKFjaB19aRRcvznN7QSPNQHrXw9xV6a5WyCDKQnWvYw7nP9cPjZ13tBxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQmK2nMMtnkaCGyFz6Pf1fBWXsqgUgesKwAnDbtPc5LBqtbVfkRKraKnoRCPeWaw67FvNzovfL3DefMdrjMahsp",
  "key1": "iD1XvBrCyd2RDdsGi39bXyBrRY3cEF58Wzzqq7wBYZN27qmTeVGkgTSa9nAVww1hJFJeMr37xyARyLuJYXmaGRA",
  "key2": "2Dj13N9p8BzUz1nTx4X9EtrDkbEVzRhn4MS4YMU7g4jvFtf2QgQ41AVFuqvRcjqszKhu3UBeY4uxNZocxuhtbowm",
  "key3": "3ZFjv6AHAKbGJjY17wqPr2XHEr5aN17jkS5zHWYqJvZtdzAmURwCPw3B7PeaAZPswyQzWWSm1UqDWd3gnFU6fdXP",
  "key4": "VJ1dCBGgeimqUbonVCHJ1TfsopKVSVL89BxRubqm59q98KsMEDY2QeCxVR1DWmyqU8WFcukmmP3AnB6vejYbPHK",
  "key5": "5mJnCURi7tbuJc558YZX169g6aVuXdEcKBVEtNxsBCnEMD3uURTkw7SQRgrS9Wzykp4NmNYoon46pNwewqQyiEoo",
  "key6": "21eFdExm1K4VaosZo174AqGHhsUXn8ruuzk1duXr28Wkgb9FLJMgPiXw6TJtHNwBqpZX6Z69i75qN4L6GvS2rWbU",
  "key7": "4P1KwW7VPGhSdCticutqANuZa9tNsyBrcqT1SJ9VtZJR6qRzXNyyb1EuUNAxpXJUWjhGiDSXAcAzAEYYacdGUuco",
  "key8": "2isN2GYPwSpLdM4tbXWNNyz2us1L3zh7tucE4BoUM8zRjhoJ6e83kDeyCFhZKMAZbhibmEKjbNjWB1toXN42qWTP",
  "key9": "3pouJk8xB8j6E1wkZRrrRXxVhQKAy749tZZV4ci5badaCvaWZQBPL6nNN9SNtKyA22mENDwu1DrmHZhsDWr1Hh84",
  "key10": "2DTkscHaL7u2KNvSSDgJKVGXpSikma3MBsZJqPzmroFsMTC5Npn4RsXNZvegk5tBKKqSj5PJesiDEepAGrY8EU1V",
  "key11": "395BeBuqtnyaKmtBcPgVRTSExfFYGdPC5jp72MPiNCVjLjuiykamFcp7CbeEJDivDjsujD4VbdqZdH3QpbdxKrUt",
  "key12": "5CWixGk3obqtw2q8RKiMh5keirVAHKKYTMFYoX7d17Jgx3aNkDMwVcVetsxzNPnXFMTqzo8nALwbB9Dk1EWrUBrm",
  "key13": "5kjXXknriiDiPD9FErVUc3hiFnVRc23ZG5TL9JQeCiDe35ickWS8iF8FD2pjUZEJxGHvsd3SoJ7uMofwkreNgu2K",
  "key14": "35hJUiYZHv6R9HdpahzEeKMU1RkiNq5iCUNgXV1Zzj4yxL7xL9bxu5xhtuaZwV8DtTgh9LpmRm91PB3DTo3AUBxw",
  "key15": "3kVTcvFGHp3m28wLFb6fa1SFJTVMPs8vMQp5UyWeLE5h6WQUgHMMyTpuVeHjRS33uRhFPFn8qTiEPJ2PUbsJnxP4",
  "key16": "2ZnrPGNbDCV9jmmCFdQdeEcsDyXr3xMNTVy6hmaUCRV2CmMWGbnskW6yJHy48qExzabXiw5mLRn18dRtzJJjD4je",
  "key17": "3d6wDCxshZW9eGNKEe9GrqWDVPH12XiFXKQAWSm1SHGyLD6rVwyUbgKSRVmW2MiUbQUGsUTX1qtmRKvVCdVafNfU",
  "key18": "3kHr3Xtj7qJhteUi1GCJUkQ2HFeDMi2BnazfzeS6vEdnUb26ZyjrqtaZa7NrbV2xKdHiYydgY1J7GeJtQYujhLot",
  "key19": "4rKKQWQZmKcZEb4QdGpvowLQFJsknPRBZXSEbPbvZCP5n3Gt9v2HCC4hCKAFu5qjQUKDpqtUrd8jmdqQ48mjQakF",
  "key20": "2boqNXGV5Zq6wkLUdzNpPmNL8N8exusZbR9UgJYbZ4qnCcfrwrDYB9tfUHaMmAbuQta3iYtAsprom4sgGX2vrxu2",
  "key21": "hi8VPGQxBdrs1Kd3ujGRPcU9qL2f3ASV2VwPH2GW2K2f3wbT1TN7fWEbHbVFvS2A5DX5485XDpTeNs68AKWr419",
  "key22": "3minAabEU7njKST4NkjuWgDUV3DMt3ovgZ3XEfrHaWvhbxVRZNVGTHyRXdcmNAxZSg7hV4nxfRZRct5A8BS96CFq",
  "key23": "44S8ocirQKavEitnAV13GFtY2L9iCKsyEAAPy41bjidspegUP34qdjLoAKhRjAz9RKZWDwSbSKDEbiSCTtUHHq15",
  "key24": "3bs9eQGvZ7WJ2MbRLHXbX7piUsgHSzwaFFASWYQ2H5YByMebMfjaxfcZguk3j9bPCuFyikFNwGQx5tt57xc6sJiT",
  "key25": "67gBWt2QonZJHhrGXus8ixX6VqaiSQa3pwyXXQZmTryk1kQvyBAfg7Pwtu6kr3V4J7jZFfsQRF5ip1WSfoGhpTVT",
  "key26": "56nYRqUEhpB97ey2QoJ7pyteLp6fM88eJ6qjV7XQe3PF13jdt2XYpShtGhqLQVRPWS6EXuDGqWatrBERZw16HF8j",
  "key27": "5b4BTV28PDE3h42oowiVBpeNLe2csgnWLd5or1XCcHkbXe4J227pM4EbmeyvM38617TaS1mki9zZo4yoN6RobWGy",
  "key28": "32sW6CdXoZPuDHmYPoBuZZ8aXZiKMFnT1pZkiaebVjaXLxzJpzzR6NEBmaW2BEBk5CPaxxpxXjM5EJiekVfmAVfu",
  "key29": "2muCM3CwcM4jbgb5sxqgqHAjqhDNEN8YeTLQwzLyk5SWLWKkdRe7diPQLdSq9cwZmSXQMciuRTJ5eMv52n5THzcf",
  "key30": "4bsB8AqSvnf3Ae4Sa1mTnxGCfXX8uKPiqfS1rTYeu9SQ1z8KsD9cvZvDkgUk1bntbZiS8iYp4wyqzFwg7ZasJmBG",
  "key31": "59HNCnY5xgsc1USJkETuyACfLP46NxUgxZ13xuHQj8pwanNX128a6VQP88dGQP7Ubb7oYXNut9e3rFSUqraWTaRq",
  "key32": "3A8jXYgWZt2EdN92FR2WZFdwoa8MpaxTsd8TvQpVsWTVJs3pKSpcxvBuTXmxj9PPiVq3T9UyXWDVPKAapUvgvij3",
  "key33": "3znfdvRoeno8QBjAVSAtAQ6xxJeNQ7bZUm52nkwRJH8evFmWNi5AM2rUTjxhABnWk974aJMPimEedFoydRKryq5",
  "key34": "2fd7Xpx11S9H4X29yFAAKz5ZAc8QW9Mo2BbKcD57HDeev4fLaiFmv1u3XiH12RKTwcTHvmXSsQ63EWHB74ZAryhz",
  "key35": "4nLgNicJcXDRfQHJEFedU2iXmxZmYrD7c9vQRfeovWZ9j8y6GGAuS3jU8kePxtFM9L841bhNJSK7m24tWSoxk9fD"
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
