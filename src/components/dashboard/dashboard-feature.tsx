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
    "5WBUpU8jzsZR57SysweTiPc8bkEQC6X7jNHyc8io5PWxfpxPukjkjMuYDD4LxUfnZL1ufFqBCY5EmZQ9mEVS1KwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZuPPnGWVSpj8tapvxSNuCoypqb2PT2L13MapV9sFx6cTsbAkjnebic5Fweqbnq97sfnNzrZbv8F8XFTCgAnHg5",
  "key1": "25FwZECayLCQ1JeyHnFPjrDJKawBfinuDnFh46vHUaZp6VCWtTWB2mNh1KY7XRu324a4Fs6W2YGZRo4eixcQMV3o",
  "key2": "ZaexBjzRv92z3ogb1k9V3QdokjByU1ccUEDbAbJkCMhxzXxG8nYd9BMeDjG2yo1CRMat6DqPdArjQqFNQEWsgQi",
  "key3": "2tL49cfnytRP2UASSEpTxJsuKhVjoDyNKfE8FvzgUEWK7JFmkGtz6Sn5RzdbySV9ewozhjNdicpMUnWWsptznHtz",
  "key4": "2D9wE9zQA2pR2hbAbNSndUtyXMQtMXnVQaRF1guontfmV2RPS1vBR2Z7fvyCJ4FJwVxjNYcEqbNtFqs1pvgYQ68v",
  "key5": "4yGWcffwFMC3p74epkiaThuRcog7b4qUH6K6f3hXLX34cqJ6VuGZ32gDVWpzkkXow2F2bde3aHsa18vo8CwX7LyN",
  "key6": "4Yj3Dyx8QriJLiGSvSQp3rRcLKcjHGD7MXdvUqrhfKM3kPxi5Gsv9QaxGQKojAP5hoybNLpE7XMqPpGSHF3ZUj3g",
  "key7": "2aYJJHLHrNnPpSEoVwJLP6Zgh4B6wqkMJkuaU87To3sFD9h2LKaxzJi2tPuiRepEovGqTZr5CaQ8zWSFSqZjboLw",
  "key8": "63SAqx8TkHfoToE8DYDNeYgB4yo7gidK2rbJ2Rz7SzUUGfagUWcAP1uyn3rGtKF4XtoKXzz1sxRM34U255cXxFjS",
  "key9": "2mdgMub3GkZPtBDewzujBoZhaDfDTCyxuRqRo6j7pVJXU1feM9YoKmFoetstUTR3qWDQzCV6iPPUTpKbVng33JmK",
  "key10": "56GJgMbj18BXYPNK6hcC74KRAJ4LJP3KGf63tYnyWMmdFRG8FrmnVdHfFiw7CdeDaHqyyNWqY9icnX7vj6B2DZHB",
  "key11": "4tBymrT3cEHh4AzrUBErh3woNKznaQrEtDpALPUFcTrvDkxmPPVggRBy4CccpBRqzsXTmTn1iPjraQ7zzvx7GMDh",
  "key12": "3V5jVoaTNXQyS3gnCDebQwdiXC5XDKS2jqriN14T1arSdMSc8ZAHLNg86BkRyrgLS4633iYnt9FfD8rsJzH5PZ7F",
  "key13": "vYCrWY7oWbsMrrTxiDp5mNPfHjAfYHNt26vEhDEDPf8nCt2CZqcbVvzqCMUir74YJQDnTAw5xB5kxuBn4JWoRS5",
  "key14": "2uk17VteceQfZNWgUup6JypwDS8NqeCpsUmGu5fx8S8hXHFVwLAT4iJiENM9xE3L59zeSesawigzwuhP33SS9sdf",
  "key15": "55ciFgUiq6NebbwcuquSkNCgpDCmWsv7jZgncd2XPcYTt6yUCqdCmLNaVwXmiC8ckyZPEAtGZae3QUbwEbqSLQ78",
  "key16": "5XSAtoiBtmH2AH38nbPbpBGSYx7TcXG8A8nEqrpLZtqSfdnBupJvTSPVRr1nKukxruzfMEjDiPJYHwMVwXYm7CKE",
  "key17": "39rxEuFhMRFXuw7qMMXXn6G7iGRNQzsEmtr8G2YPTXxCst8fbXKk8aQmFZGkgBw41fugr6deM2hBJHnU6qAGxXqR",
  "key18": "37CHy3k9B9YtczGUfKoMj3hHAqUTGzCs4u1zCY2fZdMXKGKDfa1Sj65htfXdLXqQtwFdEFHNDRGZQDGakTK4Yw7w",
  "key19": "2Fht9kPQXWLGWHdEwGLGn73EXYuEcxs2bKbbCiGTmLyifcf7Ay4qJTm5b73x284ctqLSbi4fX71eQksGeQe3F7Gb",
  "key20": "5joxhn1Bb7kcwoy1pwRxmU2UtuNy93QXZ7Kz5wDsoawktA7Lrf7mAB8LwspAeERRe5NrBopoLF7vN929gHiWx9JP",
  "key21": "63Vg3xx7mLSa6SNRRowQvW5FFsjXLgRMwLczniAYayz6Hfc9yVbZVJ51u4VoCP8xPayXBk2mGu2ds5tfEPNsuH32",
  "key22": "2dUwsY77kYwA2YikL4tTnfAL1QFEozXAye2B978LVbaANbfC4HC7vT94LLb133LyHFaimfT91Ba6tNUF1ENYb1rK",
  "key23": "4QwrJeEWkKP6SfrUCMP8BFVRYSjEMc9PEjNPXmYN3EiGqPjk4JzFYW5WGUTrvnczvGDNa4Z79sGcsVA96nZ2kTu8",
  "key24": "9BGH1ZcvShPeCkL7To3zUdCnMaVAB57wWXYN2psTpPmB2Xm3uq6T2PWQYhTGnoqDQKcjcnRY2NYN3xATuzDjJuP",
  "key25": "4T5YJQgxk9keVRqgJcFF7uQcteaSf3KkEuJ86C9y3biyzwWXECM13MTcAnACK7hA8tCHuU825DcL664sdwXxYJCz",
  "key26": "6tVMr4nv84WeqkeThE4ArGW2gFCBrNB7vmeitsxBbQPFUtHSAq5A6B12nF2gmRKcoz2X6zZJrGEx93y1FM1pRNe",
  "key27": "5HaaHVZSEvXSP1FhS2CGwML5c3MTSmXicKHEuxe11dEFtZxcwBeyX9ZbNuijijL9NN2K2i8bnBJZQpEYJwMdgaQT",
  "key28": "VQ5giCBJTZfC4KUsPatavizFfGy9onjcPqBn29jqLPBLRdg8VhALtHxu1vCWGZcrMsQdyZvEqPz6USzujPdzCrK",
  "key29": "5RZPJHMArY3DztDC37WjGbzGC3rK7cYoWPEyTmc6jKcMa1FHpRCmF1gSppLfFTFy3WCpYGJkeYUm5mdTTSM82LrB",
  "key30": "DoPs78HDEgudqvZYWWktYaBSaD8nPkbnjC8o7Zthj4NvyenDFZqwoTjzUbVhDSTpJH3zqtTYbr48TXuMFthTg3Z",
  "key31": "5hJ7nfUEMqmEhc5tzGV7dk7BaRK8HgR7YjfyuyQxqgeTnCxxtdiuDwdavYnbCikiYzW7UAVHESxp7BuoGhj9qmgu",
  "key32": "3vFioRYSCfQmpjSZiemJ9R3f2eE8ZqGFxKdXD45sM5PoBPTyrzkau6UnxnPbKDuQyyJ4wbpa3rN9YdXXrjyxrAft",
  "key33": "5J6sXNLhtkgMFQsJaY6f2PFhp8bGzQzVnJc9U8eHncz61rgc35zLdE3eS69qyEjivcgjjQwmcTFejRbB4UDGaBzq",
  "key34": "2Pjsu7WothimYDkyEpuqc4tGH5gANsXpHDKywXn6FupC4Fv9cdUhHMpAzyeMMhxfd7tg4ApCR55xws63pyygEePV",
  "key35": "5twNVdhztVkXECkZYHrZEt7JCxbJwF3hSRFRjnYvRvr1f6a8gefNSjRUVTejDYwXcnQyG5Suj8JDtxAG89BFYmDS",
  "key36": "2CAaXx4yfdgxBfkXW2ERu8jwKpp5qmaAtbmguLL2PCnr8eJ357oBz9sy43Zc3qwsd1xrnjtSon5GaDCkYfgAeBYf",
  "key37": "5krLuspn4sgKMxNAwtzbmWmvNtpgcHYzCaLNdQRVTcqKLy15K9Nr85GFioYHnLoTFfGFNTcBbiTHKZC1F6Xe7jeB",
  "key38": "2VXaqtV4cg9tSWRZyBze6jsZs8yGRo18jv175p6ntoGdr5HihQM5E1gRTRh73KkULhpnkR6vsFNX4hYqvWUURt8o",
  "key39": "3EAiFy5vixgt36oyLya4Sdg3v9W6NLswWNNrvv3VjUY5rzpA56MbZh4kvNdK8gbLdGBkNVUeC6x6G7kWwvis4FTy",
  "key40": "5csYmFv45YC62cZn9pYb59PpvPn6fwk3xHf9YxL5YxPm7VvXP61EyfAafHRYK23DVMVKcq6fvpPw2UgAeccizddD",
  "key41": "JBuj8LuWKfj7LQDoJLyeG4UEezf9zXMYfNnzgJCWamucSDxgXh5jtAbFSPFN5HqHzbH5xZ7XwE14wQBfHXgPKxy"
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
