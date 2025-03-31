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
    "4xcySbvrnAsb8cax3UKDDFXLCnfjn7WAYLDCCUvmYf6w9cBArnh8krRkrDMv2SqJ3DTqyzAXos2FZBFX9Cm6Uh4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAbXFEDy5JLbdgmztTTxUXRxkDvxEWqHPggJbAmH1JsxifLs1sAvt4jCtVQcqV2qU6VcAvT2gLbFmsCtrTMpTp4",
  "key1": "1V91PGhta7MSfFW7ikn4HWXBLsL5ZrpiQ9WPMpUWiLzNqxbsk3VunmgGsHaPRvxJrmJoyzyg1pUoymbV5aYFbw6",
  "key2": "3qXVJzmpeTAYrRJYrcDZuthCayEkqRTU1bZycRqRQQjZkvL2Y9eoMic8dUG1yid9Zg2LoBfFx9cLpdYaBWqJP7FD",
  "key3": "2g4aVp8RpLumBMDm6qRk4yBVm8ndzfPW3a9hyTzPRftmuQsSuFyUvLSKrNfXAbR8b5pFRYQ15979jhjzbkgRMepD",
  "key4": "567qp7be7fEangDb54DHYAkZpqG9Bbypqx6mX76u7x6aADxM5bXGdxFdQP1ftVEFy9in1wiQ9C4pv1UMLGgrcbSz",
  "key5": "NEfYik9nSQRXmRioRhG9ckJNvKs3QciJwfCvSKXNYsxWXwkF1nMgJyhqCGk5sJFMKZ78UVKcJ2scHfRSaH5Jpwd",
  "key6": "4kuHwobmzEU2VQR68bxT1m4xCPn9J7frX7oZSfrE73QQGhrW229Rgd94nkVi7JtnaF76pi5NxmfJVdqhTkXQWkF5",
  "key7": "5vNeXyzGLaozLHNaZRS7UZ3USPsmQRm3kW2759FZzoBuF3ZPPDYhiF8XA26SHjRqZ7adBNiTTtNRF5bUSaY3LFG8",
  "key8": "2zkveadU84T1oLXm8TYZdwp2zeyXVR4nphXzYRjDr2TTdmCMQdnuCYEAzjZgwwhxzUoAebPuGbMgaHLrroMNRMMd",
  "key9": "2Pmy1wC66dRp4qG7JvuWJGd8cUPPM7RiqCnaapAyZqeQpMrPMkMSVa9yurrw4WKNLHhFMgwyNEM3cRMn4ZXYxbbs",
  "key10": "ZbxrdBfJEgoXTNgu6ZRsNLmrofjGDoYKCBkZW4qwXdmnxT2yChmbbrawuggK9eUqX7m7CsziEWQofzYSjuQNHqq",
  "key11": "poVZiUzTPSCPWcwPz1KN3FFqYXndkvWW5r1baRfADbpbDD8yzUWVxq3dGHHGiCkBKLtYCTfn8HxEmTGsuxt3KUD",
  "key12": "4XESaW6R1jXYWrWwFv21zehqsycPSijPiGHFzwZhZk13g2kTASk8f8WF5w2tP75nQr3TDR1efgK8fhTngRCsh6Gq",
  "key13": "6596V5jCLjavpAMrhwz8S8C8WX6RZuKdYa4Gq8cFKZShjd2QY9Gvb2MNykGhtDXRHU6dCJef4df8rKv1ronAXhCH",
  "key14": "2hmnyMfkuqW1hscqfvfPHbrmYXATdrCj9bz63cripY3yeoa2T5Z3d6iw2bpVRqrHkji4P9cA65yx8vpr4rKwxaTS",
  "key15": "58iKwk8pb6Xb2UnRg2FLzooEi3CDv2EWQxuKU4LA8iVtVaXo91DznwaHESbFLgHyaLhjnaZVoKDfKgFzPmWhRKTq",
  "key16": "47EFvZdGctBHh9zDQewprh7g8hb3SBGx2XvK7YPZ82Lsf5h4tDW1em29U2hPLscHBAL6MUjUYwBzcyPvT6tbn1Z9",
  "key17": "2aPJkWpwmGQsnJKrt9GFZRun9uMHqy7BQin5inA12wdgmg8MwW48hGtUHjHEBh3TiM12sbTETJoEnHmHkXw5uUJa",
  "key18": "2XVaBaw8kW491cvMf6ewXV6QAr3Vyjv1Qwi5e3UE2Woffk8P2gnuX751MZr1dYNtjsu3i11UW9RxBNqrJ6D2Emug",
  "key19": "65Ar87zHedH9BzcdRX2Yj9Z9zysJHiyht3K5bT2SsDEmdBQyW3XeF7GjMZkLHLdBN4gphgwdyJPG4UX5Ts9QMYTG",
  "key20": "4jsuLVnper5QXCGKf7dDb4HeoLGSBmJuYQ7pWebf9aonG4mqunYsrLyb6w7vczHB1hvyntvGAVp4qV4KbMQckrvS",
  "key21": "2MZq4F5ZJfxMP9wibyCDCe54Bsa73ubNQuEjbvi58cDLr2zGzVNnyv5aF1yyfR2drw5Q86GxwJHwd2aLtAM9g785",
  "key22": "4VBpFXSmkmkvYdsCnG8vy8B7TSnGADoFpY19m4bfHtUShViDuXSmPyHWuyQPn8uHK3QjfRN2YkcWeCk4eGx1s6wy",
  "key23": "2kbdLqbHuCLotQV4pd6iRHReLP3kNgSN3XJ8gdLQ6fkGj3iLu9C8TVAfEw2eyBJ12p7ro4UJeFKyDVssJEeycQj7",
  "key24": "3dGBnXLa1JUNoWk2cQTfoFTJqoFKFrsGZBfcs8YTvtKnT8uJjxNxKoNtwSUnvxFJ9wYS2on6BLCvS4BdTdHZ6JZZ",
  "key25": "2pZNZVt1tym4WxCyxM7afMMDLRMS93n39YvdkBx83i6rAbSABmuE7TK4VbLixgzkXpxep3tcvmLTScePmS3HMQfm",
  "key26": "2A7DhAVTrPD6HtPdgtm9JUHRzEvCrwE4cMMddTs92E3XSwZ8gV3Z2EEZRDDq1FVjc8QVzUC3TkCidiwBDzpQyRk1",
  "key27": "sETunZTTV8A2Ts3WxdpWsenaGunDfio4zFnCncMjXkVb57GBnrW4Xsh62JS8RZBNi6V2NWg8PakyDsLp7bEiVGF",
  "key28": "4PvQDPPUXDzpJYEXDDStngqvny2ZWhYgwHFfJi7zTZqv2LWq3BXe6UDnVyTW4UMG3XzWCVq623uxsBUe3DquymnQ",
  "key29": "3JZAiFEzhFLNPY7WqSKW48cyeYkmL2dRb9u1x9JFZyXbB638g83hxAu4kFDZtkUwqPAXZyGn219hBXi8D2FYDpv9",
  "key30": "3YFEbSur5UAku5Q569jG2aboWwmLNaJfYvdhEEX7GYsam8BdEJwDC8u2TPq7qoAeLsLVB8XH8dbayP5DyjtM1L14",
  "key31": "5wUZa44vAjpiM2VdixW84sk2avBpzn3t6gApPpHBGKAtdtVjsTYWxJmQZrayCbyYoA62MHNJhajnBAcyBmh9xgvK",
  "key32": "2s6jpj5v4R7uckrTTBQMQv1LGa925SWxCF8xpZDbmkdCcHxSJ4zvWwrYoeNnVh8HmaquVqpbv2CL8TtE3fPRKwsY",
  "key33": "239gYBBdd3MHBMvgNBes6fu38pigi9WSBMRc4rszsor2ZZL2qufrT28dMHnCmPn84sAYKiEb1Q1MGezfXzMoMNZN",
  "key34": "4ts7zc7GiKxrdThPD32kwJMkaUGsz8qXB9hrhvrNU7PUMwjyzGU82ec6wjy5BvwaxNyRstFdL7KaUL6CkyKQ4FAa",
  "key35": "2VL9AXYaGdfoUp2daAn4iR4XJEXLjfj8kfJRfgn6w44CVa2jroM8ntRPKoSdrL2py1Ng5bQg7MbikZw7WbWgCshV",
  "key36": "3w97q23DPrf3iFzYwyEPsX89K2kXiRSDMVKLJbdMK5E844TohwSZcv2WddgXE67Ha7Mc3BVG89RReyvsmpa8sHdf",
  "key37": "3bVTaQ5mRpNiyGXHsEr9H65uyjc9ZtXsixEXU1gm78CqB1UYgjy8uGJa6n5vavmwNC9PHpGbNBwBTTtA47LovACo",
  "key38": "P64FjtGktoMqe9egwcDrZmzsGW4F2xFKmmfDA4PWyqiwpBaDw7x8NvSbhwAgHKaiPhb2DqHWmkBfR22E69hKFwG",
  "key39": "3r4HiwH9jwAR5YvBAvYTTgCE2A4ecFjBG2UHpSxva7SDYwqm6yhqHNBYQxiutDJZrM33K8bRtaYqcaTvCEqRjCUf",
  "key40": "24nW8n2phsysa3XSkJM2xcZ9WQsZrB8vcbWfPzW2GcL15RYS8ETrnL7cZV9HvxywECLVo1hfTDmrWst3Cy7Hgajd",
  "key41": "53pDxGuECdcJoT4oa2qPCUUWeR2WJqtEkEsTGbv48HmebdfkXGHFXrwSQ3xAMQ1WHUGwTpJ1rwsfPe8ftSiZbRS5",
  "key42": "2FwDbFoigNUELGyKWgCodvQpKHjxt1RWLoRBDT81ior562PdGAd6KDentM8uqXGx2aBrEajW2yyj9NTbBhZ6N1Hh",
  "key43": "63mXsVhCWsf1fKLAVot1N93g1ju2tEsz9GT34MqFwcA4mPqQvAgvN6NExTZdCzVaeVvZSzYZakgdKey5ihN33HVc",
  "key44": "bN6cuY8NZpYRvra7FHEuxReucfpwPCXwoaCJvJh7NYpHo1ifodv4fRZyjbVy3pyACMKSk3656qot8nwKBceFAYW",
  "key45": "oGp3FzewNTAqaGRZMCoFdNyDUEFY6Ca4Y7WZ4sJBqm13iWnBAgmTLURAiy3hNc8f7L2ERJSkfbSY7nyWmNw7njw",
  "key46": "3MtvehaGW9Bo5PERGFh7VsqTvEvBPwVknk2qTkBVAS5oMgaZTeuF9z3pxf5467SAg5UXF9meKA7Y6yWUy3TE8HBi",
  "key47": "8Lim7CeBuA53HPV3Yp7WXnGCH9ieRCmJPtiNZ4AM2vKP6CxmjGGd5326s8uKyFhpZqzVCcRnYGsK1atRw5LQUya",
  "key48": "3DunsL2BLfxECy7YUwpAwa9wt2PMXQfuirmpwWf8JZpQ17eV8QMbJwZLvu6cWSQcWzdyssVmZw3gw2cRd3e9bJy9",
  "key49": "5ojqLnVaXPwk97C5NXhCpTuCQtzFyRW9uWZa2GejmDBEBiGmYXdQ2jkosZVrYqfn757EUdLpft1ieBLA5piB3RpU"
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
