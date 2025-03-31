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
    "2Hwm9aaZzBfmvD4F2sJmqGT8A1prk3YGNAxEjkhQUJucfm1bo5LigVGXLFJYauFQBqzZ2XjZpck6R62wvgqf1gXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTaD1x7tQMtpYqzm9hHzkBEmmjGxywjnP4d6qTbmctmCeBiUFcAiiZuEEdit11C2u9ytyAEyvWaL9vCirPs7mCD",
  "key1": "MDxXmKdTZ3rCVmC3zUSRSUEKcCz4aWfWWTs6Q96RrVj9SLzQUZpqjmHVnHcqpUTfgaZsxAR9NedMZKqR79FVSGM",
  "key2": "5mqEmkuVbiBhWv9jAXj2uvLEp7gvXHEShu7i2NJbKtHMYgqwGiEqccsmMJ7outubnxskQC3L5tZxhu4XAMqDqRCF",
  "key3": "3MyjkJEvhMuV8xENXzNFbMiDEdRfe3gkoQAxiBCggSJygy7C1L1SYKTEqoRHA4vL2ccssmwnGmacvZBsvzpNV1xt",
  "key4": "5z3Zu92rDgddD7JjNHXboFmNdid3gTdNFKSFdXtnZMCRz73NGq2Ak7T1QRms2myf1E6KAuKmAtyaByqpk1tcxi14",
  "key5": "2sj3TVRYX1RVcR5AnF8BGvCVkwGskUmKNLicAUNaS95pBdctWN6hBHFhVbRAJ6eQtTWJg67kixwgToGVr2Dy4CAX",
  "key6": "5CRhqfmZ13mw2x364jukdUtWZseGyzgKwE6TnYnaWBqER5FiSCotGxw3Gd8VveG24L7XjuFSonocBGy6gadV4j7R",
  "key7": "3gJHNZpvrsNgNBgGMuw7RTe5iGmunPUtCTXfXkvMR976styPBGtREtSivjr9Z2qwkTP73F2PoTTswhJ5kRzWkgEv",
  "key8": "5MiuSk1JhDtVnbeHXWip6YxE9QHL1UQZz53Hd6E1mFy52drEtWKW5TQzFbuG6PjqDrkyXhBxgC6DgAFTQP98P3jB",
  "key9": "4A1ow57HzDt6x9pTcDqYBoFJBVWVZH5qmg3nafcZ1SAhTdPUNC755ts4JoTTzRjCFn68t56AFgQvGfBFf9NXM2k7",
  "key10": "iBpUkjycM4Q5eDrAiDXjC5xuA3Ymy1pc7EDfC9cPwhWSxTq6xeuqmCo4DVJZEohBRjtLtE5fG5sdZhoHBtHJRCH",
  "key11": "4S8rfGMs3tBCEntN3BwDKDUB6bxJQ16L138DrLpDHfwdftCwzFq6NkkwjYmrzR6kii46f5Km6We4WSLSi9ATqvsQ",
  "key12": "61JcjxCo7DTvauX7WEHaFvVEF9CbgcrzdewxKpEy2j9T6a9YEUzHj9e3R7Cc1raexEtMFpoD7NqXsM2jJq62EnH6",
  "key13": "i1dFZZXgEAaCqLpC3WLdTM8ZaSLz3cwK4hvQPimwyvEag4ZrmMa2E7uPcszSt2qMU8aY8gGU4wD2JK9TGQ1QF58",
  "key14": "4uQPxGFzguaFpTKhrF3rjYehw5H9SutS5kjaappQVgbfmteeavYFaMZNbBgjC9zgMJJSf7vGppB3ZFfh8JY9QY87",
  "key15": "4rU5hTaodFr1JXM5uVMSgf2WDqitMxYqUs1rsuhroFF9k6BVdMnTNhMspmwBPn6LECgqjqXhgNyUFZEgQT3fz6Ls",
  "key16": "4ieGKjU7LZSv2ru3bVmee1ZDZ8tt6KNWs21TtYxkuMoq38u1ZMkKU5cab9v9FrYfKPzDNpbTDyUJ8h71yRsLncxu",
  "key17": "5RbtEhSwMipyRypHr5fFn4bhSS5tmtqVqqfqwKxSi2JT3SrBqZGeqZtjGDEZnszCquge9MHQ4Mn1JmuC9SpW5YLm",
  "key18": "KjoqnT8tie3CkgRgfJjgJmKjjiQZTf7sr8e7WMA2kjU1s3ANfooRjui5ZyvHmwzV3YTEX2DDpHi7vALEjfyWL8f",
  "key19": "4Gtz5FgMqNeECYdS4ipzjaQJMhZnuDYhhCakbsBsvzLprV9gRpHZbg6g6PqwC7iiPqbWT4hA8wn7cX1YA16UBxBL",
  "key20": "5Yyr1CmJCv21zZb5ELa7ZbSkbdEeFPKCq9Xg8iQud5i1WhQirrk2t7Mer5ExqdDAiKkWzMYUCbJoqDtoAHKympqj",
  "key21": "2Zc89gFYiaP2AAEwnCqkWQ8Be17Nd2ixqW9bjUYyMJPPzhRHStPnKdNaZubNR6eM8ypZdoGSAEb2vqyVMrNBEJ1",
  "key22": "5LywnsGSzwJxKtC2P8ZoJt8XtGhvfRUgvxVE7D4FTWeSpa2j49DH1tshn6wEwUMWeuB5cLaNYZBb2SZsFNdMwjf4",
  "key23": "38oT2UBpK7uLZ1SgB6FeC3ZfGUCcw4pGTLgK8ZdyUTzy6jAJzgJ3HhTL1EM9sADDr4s7VFdcfsk4QxQULWpE79m",
  "key24": "3vtii92kAkFiZ4x61UTqzMoeE5nGKHWU3fZSBB3MwvWJaMmv1NHmnWEp5VByKVxtc9fqeZ1VkUY9PjpMQyU19m9t",
  "key25": "5XefJLeZfdrTqM88dXXHyssnsCNjVxGnzBYMaz7XUxdykN42PTANMtJLwjSVEAxgiFTeVo9pDqUyDCpBz9xVnpck",
  "key26": "3AgEN94YyYw7SXJ4uXv5qn9QvusvQQfGFTCvbQbLR1SYmTaDF4J6cmFccHtZvhUAyNjNPNVXNPStVopmXqjfpZ3D",
  "key27": "5m2TmgudkdH4o9TEaCX8RycwJx3re6HUEKCyG96M4JX3FGGGXay9k1mt91iJys2yif2pksZTsTK2qrq6DrNCcKRj",
  "key28": "4KdGBSMNnZG85Dn5kUkbz87m6D4nrucoRWxubw3UdxyTghoyPBbvjc5oEuoFnRBsqm3gCBz7M2R8aCCyQR6CrkPn",
  "key29": "2noydzZFGcxLjXyaXPg4WKJqdBm6UZEnTCDgRN6uYThzrfHvMFWuCzw2cazYygDKaDcWKuRKzieoGWtoyKwmyLF5",
  "key30": "2LtKfpby32KCp2WRQTAQbbXMxyEXPXHqKqaj7JUKYrDYc5VvksQvZ4F8D85jxSmLbJaqZaLh3iC3uQQ8cXsfz8sk",
  "key31": "5FqJe43bSAgUZJcmkoeCPLPLMS28J3TejWFhBuEEqt1hAdKqc9fFo5uoPzyqxKVQCG7CRwVe6HwiohyVZnBpxoLx",
  "key32": "5u552kFEEK3yLEEdTTCHaheqiwPQ7fpzTANjTBieoNHhGqGMernF6f91pn72XTiQcD89xruWbPyZCfva6nHJXeB5",
  "key33": "2UEhnQAvBbUZufV85Y61mUQwt6DFvNCsgypMyG49BaL36C8A9qX71viZjp1TMTZs2eUgXGa5GMJzr2GVsrDpSBwh",
  "key34": "4vJR5Ro5vexE9N3NFWcVVRDb9vSbNe3VMyCmu25dpkybmQSnVNPjZKPzWyeCVeYwRvzTHTcs6bhBfiMQDo5YrMaw",
  "key35": "2CZyCRLMYVUKQvGDKQELCVwmucSn881m5eNnRaHRH89MAuWBRB1zxkd7BsExiPk97vyFmt8hsMtavYyceTHjoJCR",
  "key36": "4eC8h9GrRuqQoweNipUHy6tGz5Qovb5DaWfKijwLQA8U8MhgCmWigsRt3PoTV9umJfsbAop5hsxLNsxUETt1ScPN",
  "key37": "2QteRBBdKM18Fwh8fi5SsiaDZMxKnauu53oKSVk5s5rmojV3x2uYYB1F7p1EF5NHHSHF5RKVa4TsBT2T2edh1Bbh",
  "key38": "44hMtSfxwfDB4D77faPJ9potSEAM5DEuyUnR27m99q5qNyrCKkBLVTEtEf9MMSRLGnhSb6CTHzMea2KVa5BTXrnF",
  "key39": "474L1Hz4aVfMBYwcgRLq32QCwCyfftx1rUCgfYe2GN8rnR3irY6XbSc3YWqYNR72KAzzmarjmAKC3Q3DQJ8hFHJQ",
  "key40": "5GPXnofGCAYFUzdvPZ7V5s5bNZPULU8ghwsjgrc68qa1dXn1pTkVbGjUbxyk4NaapFWLwqdbHfwSH4Ex6ZiSXRiN",
  "key41": "2MxcgaRe2GhY1NUZzWtEHRheoYE8FdHaMTq2uKZU18ShyGMGSbRCsTwF25BCDwjzxxUHq5zikMouGunux5WWCBdN",
  "key42": "2LmeKA7zeXdQFuQPCrytP6C5vx3d7uJoJi7NkN5KrJpuA8hKkMn3too2VWdebkdNvkTuJfXCpriFLedv6j8ynV5i",
  "key43": "4LGi9iNgm7Z3XDUiboPsFJjQ7Es3o4dUb7BNHQPMxyTw3TXASzPVGdVWXFK52XhuSTiMX9yCV8oUCAuWveb2UjQP",
  "key44": "51VPHExFBF93cBg2B9MvfHrx7UyGMab9hvXoK56QMCahAJ5LkyMZP4q9HfgBi8iY3Bnr3FYRkXba8EVUqxtDb2JA",
  "key45": "2Zcsgi4fH9S3tkrdEWL7SXsRx5xyHZBDv8THp8Hid3WRedkUHFbq1npFbRoX9ysst7tcx3usrHNvrq8QeJMsTEnS",
  "key46": "5XhVzYKH9DpEihHuQbc7RsMA6vTSfq57eAjd8MrY45uTf7Brpa3aBVBJ9cb4gXmFGKSpzSKGWMyx5QvN4T3GDgX7"
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
