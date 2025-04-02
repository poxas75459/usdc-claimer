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
    "4dEm5EA7dGhw7YYyTQQVXEZt2x8Rsz5iA3KYA9ScVztYrUndMa1s2ByhkCz8Dcus3Z44JA4GeM9hXooCfobzwU8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbt9fk6XmntPav3st1bsKVHdtVUEjfrAvdeWNyaTiwRpmU8i3ejkFwcKPGveMsFKmUCEhjMRaemcyW3YvvBTUvx",
  "key1": "5ig56yxr2hDKs2c5UcJ6zR9jYNMxrzVQNZk7gzFRSnzRCGTqXm2QWxAqgFKYMQkDZqBaG9461LEAqodnLReTmHqe",
  "key2": "5VAbX8xjRYuqruFzfYLsbFw18Vt5NjEHeye6LTZWi1iAJVCuQeDLPGBgd85Qv7C4AcqLrLBpw2avSScpLhxokWYk",
  "key3": "gDSp8eKtfrfbMAZSXvjP1Gy4kspdibwyeDqGBPueQgfc95CAt8dW6oUrpkkSr1Tnfbr3QCHK5Xz8nPniiirAcMe",
  "key4": "5vYUdbq9vR37HXwswYXK4NWCw7wYu4yWEnpZh5TGPKtwWXqrfwhoWYot2Vmf29iPzN2VNpadVRcnEs8y4yQyCZjv",
  "key5": "nFojKvjUZFcuUa21qyjCteh7w6iK62uUEse58b4NXthsxNGEnQDTxDNmi4sEytHVuTMEeu6bHx7LWXNmyx62pS5",
  "key6": "3wXvhWtcurLQkQJU5PmKCzEH9BHnfhY9HHSNCC17jeh4TSwkvqWXfmvy9yxujhuMeB82DNtC8nM1AXFsoyV7Xhxy",
  "key7": "5Ym45fhxufVjAMAjqBZrPWuC8CpiQvjsMkQj2P9VQX4pahd1V5uhxk6JCAp3UXA6TPZpiWqZPMSSCaJpSMyTsWo9",
  "key8": "3iZ4xCqMJeLXn9aAKb93nhvs7nfhtjzefwpuHd61s3a1yeUt2CaDhv1HU7H9nk4anTSbBWAbk2Z4KkALAmPBhv1m",
  "key9": "2CJhyrdqk5NeTz459iPGNWq6xiEmnhg7XHA6cuPNAafDR1TaL9hEJTiSUvQmJSKFqBQjnVkK7j9ZcYviXzCZWNhj",
  "key10": "3KfVW7kSTjFApMtcECvzTW8anuNsmoVv8QxJY3ck8UNuR8UkH3kPPQi8WxARQSCu8r3K29f6GBAJhG5iP75NJwyw",
  "key11": "2n5rmpu1AvxxoGMFZyDrStYc1QYHDkaMwN6jPF3p744ty6w4RcFcfcJXdQiWnBHAag3x5SHamW59zML25HE18T89",
  "key12": "cxYTmdsmYiubhpp71RrmT8ia4thjP7azeHbPLRDgYfC658WucUpuBs6TAriNrUQ1wichE7js5QzM7yRQWi347dA",
  "key13": "32kH3dCG4EKDXtA2SxcW74UhZuY2ewgrwwL81bXHTusZSpXQ56tKR24AWBj9VsAR8Hz2pxWkxqWjThchvTGGndqw",
  "key14": "5jWHnucnziQbJCmrk5ni23GNGRMUxFUqd7AQruMvA13QcfnicsxhcUv9uNygscVfLv1AuQ2rKAjFrTuCBSckzSd9",
  "key15": "449EmfpMnrwHzy2fPpGgmrsuR2Hi6wDnpxxW1ae3jH3cGBAHKJNtAHz5jNz4iYA1EAu12vxCDcBybuJ3mw1BTUUb",
  "key16": "3NFzLnBQATX27b54J5KXpUkgeC5Um16sn64HRMdmaD7ahg2u3WonZruVCmf7r5PuYvYBAa3mGmhv24oR1cFSUxfP",
  "key17": "SCnFANFJ1Uwcn5DvZmK9EkNbq4hamMQ37v2aLUjS2Muq6pBR2iGt7oEisobgNorTeu3eApCkQymdepMEhgMVbWt",
  "key18": "5zTLSUpuPofqESZXV4UM2k2spaJ1XHYXuJ11k2jE8ExGFouFpJdvoFQWicLGGkakYzu417gey9ss6NvUKB7sreBT",
  "key19": "4kZf3cCnaKHWRHuNiBTpwaGx4HB58sQpH2QENDJBGCaJSTsCURLr7WJAxKY5ogWXPwXgoCoHwM5hNsGCvWMvEKDr",
  "key20": "4sBU5doBVh6cArjLzcFDibgT1HH9MnChugFvxbzb43Df32qLQJQ4V9JyAbHBXhjjut6oQ2fDY25Un38VswyiF5fe",
  "key21": "5MqWJKKJzg6hd8w9rGMM6tkFPh2cLa87snDSFb4HenRevgmoo4w6gVPGeEw3Q8yKfF45Bevv26dnJi54AsPYa1Ye",
  "key22": "4SQ2Jb9tR8FFfd1QcAgkG9cQfq8rjAz1FD5TZEQQp67W4RVcZZjxUkSMWYnhqUzWjtvPxJeD6DGhrZ6RycmRmVod",
  "key23": "5PiDik9BH549KmJ2ZjTVxgCwJjTE2ss5sVWibU53SVqDqnpovFd8mEiv35gxK1AHG9DBRqCqqyAbD148DAR3mikF",
  "key24": "4H4Z8WtVa7V3VteML4G2LGMihAK9mYxmTkTxUuWm74KfTLwejrZ3twPvqVgKTWvjBoet54oJdgjBvnurxCpELuSt",
  "key25": "P7VhyRd8A6534huttw6e7TAHpdD6x69NDQHcuMt5vipnzBEwbhfvumcvSQR3PpwyQAXHR3Mcg6xfqFRY2UJaGeK",
  "key26": "3fd3KY8EFhR7VvprGmoQgRkiw9N5EcjBJFwM124sdorUUdQkkdVSqomtsAReVteUt7z6K4emodU1FwqcTo1VHZFS",
  "key27": "4wumaAgsnekRiEdkmULZRqVd7RxVQqP4Zj42SGgNsefE9PEeBBFDRtCNM9bfXDwVS6wAU4vUbFp8hrQdASFez8W1",
  "key28": "4n4uRMZXLEmnbRKaoGrYzDrFbQw153B2JK2fguSfV55uGBnV4JXCVsxv5xXSfoqP4tKrgFHCCwjA9yKYRoWeCjvD",
  "key29": "5vx4tQ7RnxKZH3z14c9VzT5vxV8jHTLPY9K5DwKsx6MCeB3xKePC9ExPLcaJtBWEFn7i6ks592AYCNZwcNW6zhbo",
  "key30": "9qAVdXvXCAg7ccNsdi9ujVDW1rLnmA49Mft2gdZr3dG4cepB3sRVDtGD5nvbN2LwgLVzrQM4tDc55r597PUpEBt",
  "key31": "4FMdLqLjFCMHb7KUb8ZgMnFwTM1BfbjzPEqrb7ZbSEL4DDkjJEHAc8CSmermmebTNMWcvUnwZKZGT8gwnd9XJJdM",
  "key32": "39Ge3tofVBDLEDSpeC4RZAZ8m266BrAht6Fz4gjj9fp6TassdWrYNpc74thPmx6AbNpixyaRrkhRNWGNAJrp9axY",
  "key33": "4fe6Dw7JbzKErVG6PWGyckQ7tUbfDRrMmtHU7Dj8R7Tqi6DyyW2FrBDTUY7sreKeHNqsXGhHPwFfoSa85ikxsQoe",
  "key34": "WQCfBDyvrK8oNGHayN18EZtYyE8zLa9FbKFYPTFkTUadXk1FEjyXLVE9tRPsxG6Z5NWHTbZxKWCzUvc39vnt7nA",
  "key35": "5AvfgatbTiKfE2atPiUKhj6oAaYzSvneupcYxnK4sEnYDfcDMDz46BPHDYWSsNHbmNPExPvACgJLdEvFGZm76H6y",
  "key36": "48AiSp7kDaqDfJ8K8P7e4hqLRYu8YzPCHccR52AmrHQaw9ySu4S3x4pwnpPP81f6GU8VHWLUbtavMK2rypx2SsBA",
  "key37": "4Noim6A3QTF5xZxrosctk8PQ2m7UUG3dZj2W6W7pydrBnzFSnq18EHAi31VAqpuwZdp3iRL69xxL4jFYpYVnEBS8",
  "key38": "4Fs2UgQSbA6s4pfmFEZzHLPx2cgkWvVWLAwnBjHvxYB8WPErq4kA5LUTwE4A657g8Amy8twfb8SU8B4un14A6ie7",
  "key39": "4jogVRnDpkGk9ZUmzwEmGnRkw9bsaRg3VL3ijyLeawCUCL9iEzFeTz7BPUGfTXr4Fow32Rprm7CiuuABsF8x2FtT",
  "key40": "nZcuoYRpDz4ch84AixMDhQjP5Tresu6r3RNJUKvfpS22QELzpgogqvmJ2AYMQegc81hKeKWhX4PaaRegn8gGeKr",
  "key41": "EsXz4SgBauhSKKpSn8F7UUiPATR5PcWHjJjYNhm53tb9TDBKkkS4Dy2DCn2xyfBx9XrFs2ieZ64j7b41DawW3Uc",
  "key42": "2XWB4ZteKVsqqvTGWpkuxXUbqeVoPggXqtBqLj5wikE4MAagQfaGXeg9gtDd5wYSBJMUUhuE31gYZAeMaLAuBn4L",
  "key43": "363VpbvtGFKwLcgx8a74Foaaqt7bcBLXFyo2PEPwNbF4sTUMMtqj5z3hKvkp5dDm4hqfKfBPpLrPC519wkJvkxTQ",
  "key44": "4348gMiNp5rGVNeYFKgMmbj3xtF7GhAhb2W2U2DsSZBfMmGidW9G2Aa2GAPpGhfCD4uGonxqnHxcXFqo65Jys6Sn",
  "key45": "38ETQxVqE3KNLPpx3LrZ8Jt6xyeaAUJyMi82S17i2e6wmGbJ4aphJqM5Gez3Wu5aeoZVzxHYX9oojyQisPj3AJr4",
  "key46": "5Rh5GM61UEMXr5XmFAjB1qxQaCoQauyLnVSdAngLwAJJ2qKJPW17aV5GgTXkJJMbdFQ74rCjNjmdq4FDDsFc3tnN",
  "key47": "4kBnkbUSAeYisaLZHG1bp9if64Z7f2qQgHQfBmRPz83rbFyy1nUPLpUGRRG8EtpFaLEJe89ZaCjRSCeUuNaGNmAR"
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
