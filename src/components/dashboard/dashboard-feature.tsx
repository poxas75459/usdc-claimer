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
    "3Y9J2vtcTZSqvovzfhFaJAopfLVmWMN3xDUkecBzt4NZCgfYmDHWXbTSem6jbxdiRSsTdzdGoiSuUagHqh4SvBFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJiCKEddMCxbeqDEvDpaG9qYnPZASdxmbCR5ng1XfwA7w87kKdbke3S4CCsu7jUMf3KbdPevRWp2AebB5Jv3pFT",
  "key1": "3TT2z8MyWRd2fjNngWTydTvsQ2LpPhFYLiZKYqTqYbT1LwnymAvtGd2rH1gPo427z862Ph2pygs1m1ffcYqvF8Mi",
  "key2": "4RKXwdbRbgiAXVwVffsuengG3h3hC65Bb1gCfpPppDAeP5nTRbw2MV2u19ZzhXRZMvyPmmpdKzMECD7wnt97NeFD",
  "key3": "3qJMLMKMQ3HE5KBnf61Ga29xL2rfVDvegnfNgowaTk7dDyJprRm6qomGg2XdXZZkQtbuAehBzfYFE819dM9JrBSp",
  "key4": "42qgwKq2LW2xqaHnwTkvrBXz8TGnZTp5SkZbGPKV5BKhSk4e18X9R6AJhpn1oyXDS89c2bhFFWBew2K5VeWE37A8",
  "key5": "QDUnhzC1Wpeu6i4P8eCP9VTg9faUrAYYKPA3deJLjATCqJPYRMUsCj5u1NNaVV1u3Q8bf2W5bR5y3aDX14T12eU",
  "key6": "2ba6dXr9pNuy7XBzBu7BLbomeohG94o8tqHtFhpD6aKgp18vXWcbFq6BcpiXjRnXbqDheedoNW8HzKxra1mM1bmb",
  "key7": "225rNk9vbtQS5ZYsg9U6X6ecvXbW4vYJg5n6A7ABbeztGcAtXcCW24he1ysgZDSmkYXor3WxrpVZNEiHvc3MqB7D",
  "key8": "KWQWaCB1wWc1LK41MYZf6WYiRogUpF4ARJmzpUxm6e4pQGfMzZ4p3YeSRCSjaHEh6MYJ7kbmBkyK19Vj7i8ZJPz",
  "key9": "5v2eYqBTSsNXFFdhA7arCNF3DjSwk8vS7oNcXnFLBuzgQPrpqENpkxnLebBqf31yRot3kqX6z3LBxbnQrZzSLRLj",
  "key10": "2L5bd7DnYXUKQf2wX2RPNVZkeev2extTiCsMSqkHrCcTKnCpeUxtBARVsM3yLqBp31a4tt9LrXHwfu4uypjH5YWv",
  "key11": "3unEM5JCvQjNicEURRoVZdgo89CZTYAnmAyhWKs4jKCUvrLjQPsWPNBnrh2YDfHDYFY59g3fhn54yWiWV4xf5Ahp",
  "key12": "5U3LxVZGKuSs1KQJSiuN3ZcQJUgaS63AhSs4HxaF3ykLTcZPeSYUTVKPr5kQdkWWLHgjtf7rxRqKs72VUSB8v6QN",
  "key13": "5oUoF19az4M8Rot5MsCz8BtP99Dtus6XTBu7xN4kKnrKhCFT51TWYmdGzyqcFZ5GLN2WQexukGbWii66MoH6WHqJ",
  "key14": "3Lss6QKBJBKyNvPsUeMyzUYT1EYtUR1q7FS7Ux2YFMtdcbfkNLDVKLpajk41ciNZCFSSSPkwqdYwbVNfJ4GzwjWT",
  "key15": "3RrfyhfUKcD3cb8weRaS62gMgh4uX7DSZH3o4KxZpRrcdTaU9VY1MFUiPTpjJNuxggdaWexav4TviDVc4qDCBbQU",
  "key16": "26WxmskbS4uFjSfYjLiqD1fAVZBhtLKsrE3Rj5d63WgrJdwWLC7Wq8AxoDsE6EMCUpWUAejzkXmQeLWJAqWYXmhV",
  "key17": "pJfQi1YGWEcB51e9DU3bK3b1n6SkvYyDoWXBHbD6ZFLRMLpsXr3EX6bVFcshwmrTSZZxgUA6sNx1VDPCtRYjXKe",
  "key18": "2aq9XBe9wzAb9np4b27dpy8YtGzEgHheSpAP1SmgvSED3pFT983M3CEGFV6U9HwEZV5aLevtCmicwCXQ3JGSmY1N",
  "key19": "2BLDn3nyTw6gv3RyAK3mC1hji1M5zm3ndsUGerqe6i8Mpy7GJfTHpNxeAutf6rhh3Baxf31CoS2xjj9g8ndLzstV",
  "key20": "64ACwP18r3ReUfoGnQ8j9FcSENXfKR8YoDCrQnoTQPZnAdRHdhcsL3YjJ27rpRhQXhanEQQuVMfbmrnQRqKLr5b6",
  "key21": "4czcsiJoECzHmd48JJoqi6n5moftzyU35NdNGy6tySiyNzsErJtKEgGJuZAaT3NNsx8YJeBvM9SjEm2EHbjHWdcA",
  "key22": "5eKnCrBg9D3Fbh937t3FoA5d5AcHiRExfY3HNVT47fwD3xC7n3mzQiEntVrbKdS6B74XYkLZZRHTSwZYY1HuKbnD",
  "key23": "4ToSSu4bJxDcjK5KRkQMLwoLj8tkeW7Db6TnHErTqiP7PnN4sT74pcJEvDT17GLMPFV5dwSNqMGrf1m1mKzLeNtg",
  "key24": "63scsJgahcMqvovgEPSXa7BcDEPnUqB7F3BHNeUec5AHQ1YLNGHT1E43gej6PBpUao1c5sLJuYEaReXCdyjxM7Tj",
  "key25": "N9tXj1SPETBwHXzJ9QurjVfmRJtURdYRkQgKVUTCM8LaJSuD68y6Qyhedr9YD1HoXVXzWxprKE7iuqHHoq8Czrh",
  "key26": "4jQRyiH6PqYCCMPYU4XQYrSV4S7GUwehF2Ned3ZEZedr6iK6y7nNyFLcA4XQgDcAf6HuhSkrgopEeBrGSM3n32os",
  "key27": "4eXD1gFeUuNwZzK6bVga9de9LqSRamLLyPEPw7giDr92v7w9dF5j6yTzZSJmCqg8D9eCsiapsSZH3DX9yytzsfR2",
  "key28": "3UaNtxLV4WjtTagxJKNc3Dm2Lhx1Vqv1vNhPMKyUQ6uhfR37TK1jC2coDNueu5VmgwJtdo5cLe73MCTC77eEKfBQ",
  "key29": "uGvg8LsXLZFe4LoncFQQnc3mPcAJAFLHKZ8mMzvSdP9KKUsiRgDQH8FLatrHBhSV3r6KhJbKXDZHBpvDBp3BSh4",
  "key30": "n6TR2AxeWmVe2SvEJbMrZRGnjBASnWePUUXEVG53mUcVKdAxyh6cvsTknhfKvYSFCQa13XMRSaFtvAVGxfrQuEs",
  "key31": "4RaNEbeSmiVyJnuMuTy25pkW1M78DxeC3ieqKWrt3irnbEJEM2y67GeZvSjtYfbHEsFiXbEPuFvyszJKUCeMjBZX",
  "key32": "3KyFFBLUrmHfJGbKXfZ6mUKuu9FMXjNecwxFiJNPxo6MoykrCqbCUiNFMa6u7hj3d7kwNPHqADKrEtXsbYdNss9u",
  "key33": "4WHP4DpmXyVRbtsfpHDTkkHpPELM6HmCWQKUf6YYhiQiKAFfKJ7ntGj7uoZNiFcLrfstLcSKk2tMDdt9huYJYrf7",
  "key34": "2Nqw5wRLJ9yFbQiBd4VGkN9zDZmK4iDnkw6VMkhjQstdVFNxPSQ5s9M3gpcQAyDgebXiK79xGvJxwwXMjYqXJSzS",
  "key35": "3VM44cDgKrvv6GrEajDSTcoHqTCKmLszC3Azb8NJFVUK6KKHv5bjcqvuEdFDaFzLCiUk3PVTUGwtDGNuJqTprFgn",
  "key36": "4xUUt1KFcoyDySgSoR8U2ahVXVyXjZQPeeuqspBvVooKf31rkUvQq3FmusLTQCay7yLt93JAJHZefScDvBL7ZKHB",
  "key37": "5drt9rifgEbGeVd6bmKv9i6ufr3VwVdfdSTYD5SSNRAKy2mo2aytZSdfz7MqMVwfAWY24ySQCAdrXqQmm67tQfmo",
  "key38": "61rScTGD48RhvpzAFoeNteW955Pcp8LehZ8HjiQw9hm31DihrPtDxMJh9wVmuh2FVpsebmF4SgX6a61STv2WTvZt",
  "key39": "ac1wF7V3imeBNEB4PDUeaC1yUviexCc7PzdAsEvJjq2DJSZ9Sc94f31NCReiG1hnbngD3gBPesh2mbWUL5eXHd1",
  "key40": "3mTQs6WjdyBMdixTeiG99oQU19vtW2MRdeyQsJaWJL8UVBRzyggTxsvEWkMv3EH4MrnC7xPZzHPEGhunjT96R6fi",
  "key41": "zPJtVgKvEXzDDNtCJUS4cy6bAizQYg38gmxRUHzerBPRnUTJatmpdKofA82gY3gyhPmo95D9miohmLmfjVNMazc",
  "key42": "4WAiDvqbRBYz5ehh7vR9GQPBFLEz3aLkbTCPUfMBzj5zrqeEd4LahddvaMg5pgsHQM9m69o4sV9TNTeBL3s7XR8t",
  "key43": "2H7rtopzXqxY9PR2y9BEFQqVKXTLQk2oR9PkWYSEHyS7gZWDCjCAsSJnZG7thiYJTpwsnFSAWtxRkroPtktmvfPT",
  "key44": "4RQzjG552PL4pjV2Gw21SrAoG5e6ZXUYssHhbJcL3yUTvP6wMEjDG6MPaBwt8o6aj4TbRxCosJGMA1reX6Z3oRna",
  "key45": "5G5sfoYoceqUv3NpbGsTWL8Fz6Bq2zYnJFdJcAyN484HL25vqn1EjvVJMYMLQBkVsggagoZSwmxbE368P7MvkkrY",
  "key46": "5J3p3E4sCw3nhy3T7oAxhbuGR55vGVsbFoqQimexAVyBUaR4wysxU4rQ7KYZd3Z3h7vKCD1btajxBtnNWQPueE9h"
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
