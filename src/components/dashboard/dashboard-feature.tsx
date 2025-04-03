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
    "3q91oxXGN68LYr6XsGosBquZURRG7ktbEd4QJ6nDQfyxZjf7wGiYyhQGogGm9dEFavsvgwVexBpdrhSWW6rx3CAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgXBWz1VHwU1843NH4X31ZmTucRAUmqsMr17DNYPB9V3Ra69YH2Dx7GqBr8orXjHWgbfpJvkSTEfXxvj3k952Xw",
  "key1": "G4renAa9Y9AzjRB7vmgdWM3ttPUomG3vV2PdkvWoeAUPkn9WAnhts9b68UwE7F4CGTgn2ebu4CAAjunpv5si4mz",
  "key2": "5SxkGQEHC9gWr9QmYSqUHUNHU4Xm3Y815NjHc9tTCZSE4g7pci2pkK5hCUFW3Xh3uJuBavFHEn76huJDQubPBc6a",
  "key3": "2RWDuG649phUbQFY7Rce8igBYtV4BBQbebMQa5BPnSDUDdajpi6UzFaqmnR9UhuutAd2sEJGzy7bAoS2UyWGyc8c",
  "key4": "25s3Dd8xbuqgkLV6QEXhdMHKgqz2TaKQV7RA7EjAgZpNDkssVU4ApRgVgB721maTtaNU8z9dH47AkkLpp5Sk2kxL",
  "key5": "3tE4nYiztW1qQM9uYuZR9q7Aq6YqSh3dNzNKLoUCrktdPhGt1Pfr1NL6cQsAomkPKG9ZJYEbmjvFPDWDF1Kzm6Bs",
  "key6": "3Y3j9tDx7PLnadZrUDQWgugr5jyaS3RP9zLGN8khq1VumC6mDRXWJNgYfV16gpeFgp48wzQ5zZgDs4L58rEJeH2c",
  "key7": "3f95cc3o6g9QzWXdTDJooSLKRf9dyiACGw23757amK1PHmugqZyzVYiZwfZfpSX2jRx33ryKHBK8iEroSb9YKoDm",
  "key8": "2rDmEXQRysfGsxYMtTy26UMBuWtzSJvRUBSe81BQvrT7vNfR2pDJtBkTmRRAGx2ABQdtLyCCRT9qs3s6627KuVNt",
  "key9": "49RtPyv83v8C9v2EsrYfgfQToDfu3HCk5mT1eGEdNbhajwQGaDk6fp6gye55XaXz7KEpgWHhx6G11U5nNV7rPGim",
  "key10": "2BCmvyLfyySJKqkL1C93V5HBNLsonBidvopLsi2ZPFk5t8jcnJnH5mtKpmgUB7yKJJwAAvjCRcFHkJGoG5DSAFmC",
  "key11": "311D8GfD5m66kKcyu5HdAirEMGcv1haUQyar3vyEotKUp5yQhKpXHadSrBKUS8StF5UvDV97VwrX9mWUDdCsghRM",
  "key12": "MSMQyvcXyfC2mRk7YH2CRuYdXyb7t5e6NBCm7qQsTkegomJ58e6R5ymhPGNUbqirs2tmYn9RMw5X7K8EPxuzhLi",
  "key13": "3BgqDzKx8CPw8zitjR5tN6z9pfkK6qL4iN482EnfrA5MPxn5RWYAG14wQCYpwrCPSjHge53a8pRixZ4Gzu298oFT",
  "key14": "4FrZBJ9Dz1BVCyXs4uPqRSjK53ecBUv8SobN2ycCZNbiu1q9Aoz7gycJSGLFoKii2yKekbkxmWBiHn4nxr27c3WS",
  "key15": "kzTx3H7eNG1xJPr9cpQKFgym8tBzDRNQNgBSDhG2c9VByhE2qgjNUQ3FiUyD7PqnWT1v57VGMdTKtatGjr66VaM",
  "key16": "JbQ5fjGCNbS1vCEhjjNHBCZVwNeyDeg4QjZ6ysz5tgYH8j5xHhffhTwe4NRAGBUsNXLPJQKw1A84aBySQVXHsqg",
  "key17": "5YHkp13M8hhm3Syyh8iwzCpHNjbcXEsv6Jw8eEw2LbofDwYYwGVgDdWMLaS2MDatmavCXa59we5SKzRsSNBS7ZW",
  "key18": "5oVL2XqrJ2dWVFPRA7UdHLYh3EjFbMTS9Dw1t65VHbF5GHiX3ozFarUe6nSaBwz4DAjk7TksmSvRAwwfjvZjbS7L",
  "key19": "4kynwK3gmiWKbaNci9gHxCjEHnS6Lyw5QfSeaS6bcSjfFwe61qUUVubpwA43Lt1q9BSVaiUBap81vBsAy1HAGHUZ",
  "key20": "Y1ZgfjsNrDGXLapxasRn6NMENWfq9fqu34toHHqkiqAapqyrvrHPeddu36cH81nwF1NeoRerFUjKrMxL3YVgCpH",
  "key21": "4CRFGVDSdhUG2YwEB93s56ru28SP4iMdwFvpZawdDcVzU71aKfd47Jj2MvcejYuSxmUzSJ5r1nbCDYiEShuTM5fE",
  "key22": "U4L5hCNT4j3p5dZJUvkLb8FQFA5oBtfNmboRvPvKc7tWvVirV3HqzKD5dfYroGXQUARLaScef1zCtJftAb5Ueyy",
  "key23": "2xoFp8QFSpogYztoMrmsR1ru54gyk6FomZBbKkeRPP2NAw7P1zi8aE764GLQ2oigEaUdm96DW65qKejLrrFD61Ps",
  "key24": "UFqjaY7uAewpiXYGtPWvVdPL5iNeGPLab2WaoedYa2tt9CtwMv18mTDsBtZ7ucQDHZKuMh29m9vS6QgHCZLci4V",
  "key25": "2SBwfxKSxgLh75LG1sq6UWSbyAVbRDhyGUm4T4uHgcteVuEMVVCkngKZ9UAFvi7MD4rv5Stkfmrzgx1KabuPVNyH",
  "key26": "CcX4aYa93hXMoUzd6MVmru9sxx2MGMTGLcoexG5X2mSeyRkhWjmLQTVuHh7kQgjTrUyngMFGBeV9MWpo5VHLKYP",
  "key27": "5Psw8yWMiWf6xjf8v97JSCmv69yBSzNSXJPbLcZk3ifdd4MWDZ5wC1PWLt6opDVti8R6AUY4EB2ob5acwffGeAVR",
  "key28": "2ncFTGLmhLxSa4QyUa6mbF5usSePtucYe33EFGsLaVSFoAvprfduoaajBAkdnQNBSehzTsvCZQUDovg8DbkQugWK",
  "key29": "58edhv6iBFTLxucaMw5JyMwqXs2ur6Ki4qRJPFdZKSm97kAiqc4rYfwByhVfQAsoJRSfwQYEgY6GrFwGpS8eUmMU",
  "key30": "UsWJFF7fUbyWabYnoqgKRPRMDx2G9C3HycVSkPQmyDmuHZmhYv2x3gTjnG5vMPsyAxZmmTxYgr7Ht4TzTxHkxaY",
  "key31": "gPJjy2RT99zyWpiDh1wJZ14hdrxWFWUb2qXSXsJyvK1d1CNmetBNqmbobu2UkcHCWtWw5nVsLco1fFbv8PfkjgH",
  "key32": "5fkCe6QpwDRWmHPdhee3hRE8T4tkL9TFyUWggofM36W2ARQmZN6Pvn91nk3Wyi592jpXwebewF3oHxgmGMZ3D3md",
  "key33": "1T7WvGbWAcaiBmYRu4fJoSj4wQC1CQfxr8D4RDwmXPrDg1jJq62uNeAyDxGNiVWAwoqrZwTLhrtrG1aKwjVQ3Jq",
  "key34": "4sbbMaSjudjvBo5hq1qWvcjHkVSwUmjoqYyC4dFCz3PbNeWaP1dxaNtABvtfYwngrZHJxaFi8vwEWUigt5RFWJhR",
  "key35": "5QLQCZEdNLbxnNN5pK82PEnR8LGojU7gMxNUSd4vd5qLMDr5ZRT26C8MFShtGxq7UnabUjHk6sA81Cr9BeQmv3Xb",
  "key36": "rS7AwUdMcjk1koSY9uosxYtZdfr3cRSpqZaNCMAdcNx8YNZZJbGvYjR5ASsTKaMeH4tkure4ujevbkVNY6GpwbW",
  "key37": "5FBBh6tKhbrYg1UggxvqfqpJmc9zz2G6ChpytQKnq8UeFo4VTXhVvAmX3STx8VXXvVr5SrYEoeMx6o2ZYxEG2X8q",
  "key38": "4wBn9HegwrJZYWExUvFAe9zNBCuv9f4VTPqsdWRRcyam5NpdDJyee85PHKGLmfTR5bGFxzdPqQs23mctBieNHGSs",
  "key39": "MFDsPe9fDEUMw5PSvZ1osqFsDAbdcy8DqaKUGnVT1W7oRecCwmLcFvRBZuE3PXyVmZxQdZZGq2KqS1GXRwErXsF",
  "key40": "3YvBNpsqrxLSWMPzTVjBPcLSbPa4G5ByRne8QZnZSHp9AE5YyRYpS7Q9u94XUoquYHn437JyNPnzHktXMmbkFKry",
  "key41": "Z1oySdDTQx6kHAXrpX4Gc3i7B2QVRN7SjMXWBUJStkb7ZXRJMmxkw1vBgYEFra4QrCNF4tYghFjcEufyCsCMCKJ",
  "key42": "4r6wCJFreuGyiGMA5xEqymK621UF7S3YM9EHMUXA2o2NYWfxdWA8iJL5GJxYpZeuHDLruW5aorJT2iUPRAsA5HZ6",
  "key43": "64ABDtyNJdi8nTwuraWjRRvHD6SMMEqNEepNQ3zG19mX3zbX1bPC2kxh58LeWts94ecMmF8ZDy9KmDoVTR6JVS2z",
  "key44": "3hYeQoCkEtffiGtby1SE13EbeRzRLbxdQ4mZCWm7rYB9ySUbv371Ddn5fKY2BnzNjHTExcKzwwJRMP9oQ3HySrKz",
  "key45": "4GpsjBWhiVbKVTCB8DsdVDN32imkdtaExcKce4DmcCyT2Yud4R9UJswi3CvFMnWG8wpzn3SAmHxgz34H8mTnj6La",
  "key46": "2aiipN5Ez2rq5LUg5TrDGEqUEiZNAhiSkd8vJxiRWSzdGpQrBmxwjb1ye4KyzmAzSLiKcgihK4PNHqy9Cwxwuo1D"
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
