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
    "2X4LLjUwtUd9o43PHQT4H7yfYzpe5YZR9pjf2VKC2tRRbwg2nCE6o45iY7xA948EK7XNUEyfekzW4wVQHDqjeVJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfpeUnz3pqjhG5TwFMjkmJ31ZghBLBLkLnE8UZHi5qxp5qC9vcvhanHmnwBnsTPah4SqZxsj2kotGkUTKbaszgx",
  "key1": "65eAggZQia68msiXrnGv12BMs1BFhbv9goq5TswGD9JsC9Fca1dUuaLsSaMjb1vtwbra7tmrbqAYQ4Jb4Ry5SwpK",
  "key2": "5zqgjfNVyoMbFey2QNzWA3b9ptETxVitjD1W2J426Snkmcod8SfMCrCypTRpZBdBSVD1qXdd3nhrwf1LDrTnfTkF",
  "key3": "zGhXddc7769Mqa3SW2FvEoSQYjKXGA244DjMCtDQmDVGTJNVzziymZ52yJGGWhsnvbTvGoNU75W34h2yfJojZzG",
  "key4": "4E2vxFp32XBS1mMYASRmsMb3vsBqP2i3CkH47ztPGRHePvBjd4zRTCdK6xgq9PikEw2JHGXUy2zKArRUokuqvKir",
  "key5": "5FZ4RBDoZV2AfFZdceuxq54MDhg946QvLwuk3k4VwPsh2wE4eDH6CVo5MuDGsQWdmWaJ7EcmkujiggqqcScvgBK9",
  "key6": "2Xgppvr6jRBytwcdES76HMsGkBDq1QZYtJXXmbDk9MNbs1Nvs15pypiQngydJ5A4d8NNJ5ciKBerLuCmDB4KCA1j",
  "key7": "45ZcGqri9RLYwf4KXyw6qQMTckKa7g42xwwwcr77MBbvdNmczUDD9XRUFkcfYbeBaPULcwNjq9BY3y6Kx9Ekqrvc",
  "key8": "GtvzCDPwDCY5C7ibeWVW1YMwU8vbMG3Xse5vkXXW6hdr7WhDnkYeBoo4Kunq3JWQzWAefxwSPESWKG71nds6Dm2",
  "key9": "4hKukXnkdGqod531ZAKmUf8APosJ3Uhv455P8bHZSsd2qFX6ruwbzYPfqttqAu7hGGR8oSw2r6aVy2uMBJtdcu9y",
  "key10": "5dZE2bgQYp6N78uk1RTCRsdZw79o8rkJvc48nsM1c434nqTRwRkvAWEJwjZv3bpGwj9QYJF1RYRvpPJ2Y1BqBw4W",
  "key11": "3tECsgCQw9A7svRpnZEFtYGTg1EQJYHVGJh3tNaunbzbdzo7Z9nhTqGG51a9mD7ARTJxDmbECBHcBD7j8p2yXF19",
  "key12": "4uSD6aubELVzhQYdwR2w4SPfk6a3fxn14oMm7ToXfbWWF8Gx9LHXyXhSEfG3A9xyfaXAePwYNnAq4KHEMLs6sALq",
  "key13": "63zx1Ufx2u9vXQkDtN6ksZrTk3d1WrH5NLpcntgD6mUis2V6R22uYFNkpX4nnhJsZmCaSnNKFC47ZXQi5F2C5xhi",
  "key14": "5WNuS1WDX9ABFzXuqwfEytMbDtSCC3owxZ5nFHFHeaJQPNTBg33yA2DZivdv3E5hyPnGxjM3yS4JvbkbaPpBZL3A",
  "key15": "2g1WggaBHacr3xrtEnZdGNkEpvweSdFGcgUs54CkcJc2fpTwPDS5cnUrQU3ud6fbxodfn2iUyN2EKdwEvCTgqHka",
  "key16": "2EbpcoEcwtZbag1j8QhJx32g56qGgziDou2LTjvzSUUQ4eXnVgHeoRZHwLhkmAirkap6d21dpdag5PCc983YavML",
  "key17": "2WcErMvNnyHi2xmUFQHgsCSoURkRCrQRnfoj8QXDuxLBmPVoUf3MvMsw2F9bRRJep158vHLc6WQpf3hR41YK2BMB",
  "key18": "3KRvwVVfWpumkK7BDkfSfxgAHHWAmcvtQeWWDEFu8ojpqTbzyAu1qF65GFEJJ4SaJACemNv9r13m7TmY92o4uRxS",
  "key19": "k9upbd7M9R4ub7ziNyawjzniFJwzUCMXSssDSmzWjNkjBd4hrXBFLj1AQTKxbGNTobhgJBVgSzEpYJQDtCVsiG2",
  "key20": "PpTgHc7jXiB6EJcDHD2EUt2e2bzdhgAtYKV1KZM6DtvePEpbK7fBfo8AVawP1BnMDBpTEBdpe26JZCPyNnWGj7N",
  "key21": "5Dm5cc2HSUPCvv9JhbVizdPmuq49kahiMCTbZniFQsgKSqirqJTvEWS5WDuv8Bw58rbznW5SCWHCpq6uApjXE58Q",
  "key22": "3YwwnfRiduUf9kSr7e2p1RHRn9pPsrXv32dvJoxb64NskH9u3D9tF42b3zf3PBreN5Rpe5QRvzfoULawWrWdCXAH",
  "key23": "4fcFYfsk7pe1ktEvKwwfPc8V3b4FKQgdYvyvu6oFnoaStF3bobWDFUjTQpn8HifTNoNoEtP7fTEHsvJcntC4KMCr",
  "key24": "3PnZJqo5uGiTfCURAXoSR4nbHcETAANe4uhkRxCwpBs5uKZZHPfQ4MZkhFvAFxzjPm4fexVfP9KXzYLzXHWBkhvB",
  "key25": "eu4W1gcbsHQthXGus3Pfis1REfnrAG1PXbTxKNgnttFttmjTigCc6TMoSBjFEsrUgAqcnu5vspo266PA12sDqP4",
  "key26": "4rA6Df49ZZvPggbPAipR7gPpGkjydb3jyPFPU92kJrDzFHZPhChkTN1mg5vqqXjZf4ExAxK1sDKSjUYPrxB3aJEd",
  "key27": "5FTtGNpRQGdpQhrtKaCmPofKFuU8cDxR5WsfypYESMmJqbyLieEdMpcCRgZpma8qcM8tbHXW43NYPpF9DYPHKZ6w",
  "key28": "3pnihhtnTT1J9mYQYqsot6owKr3sU6syw7iUFfLATV9VxwRLLVcRLHtDJrmS2aZ6kMAKrSeVXnnY4dXn4RTrvukw",
  "key29": "5mN1oCVomru38KC2962QxUYEkujC4GBusmcmoTc8qvqhmGSRh4Zs7DkBS2eU9Lmi81zdYgrXNGDV8RTYDsL9Y3ba",
  "key30": "2MRGGdhSTVhr8q4nQB8CRyT12B2PPkEK8Zm1uHDSKXrUYwcTfELYNAztqZF2jUzoZTCP8M52TXtsTq3sjoQ7Aaou",
  "key31": "cttWPTBTQKvQV3zkvWSEoGfYLMU6J88hbXnFdx9VDSUme83knrZEwj9zCnYo1kz9yGdTgYstRmWc2JKrsPeLKv8",
  "key32": "3TFtnuf5qkXDQFBUd7QC4aFW43RknsnaV6TLg5bHALd9HHw5rCrEssHiRQBeB7PLVX63YF5qZGfSZdLUeraNDZAp",
  "key33": "2QJGZgFpWbmzLwrDJLbyjfdEWKw4VTmJ5ocWXa8ZJU2rW9QGqQREDpdVqyfAnzrsBhZCPt5oGdQ8ghd94H8VXWUj",
  "key34": "2RrAF4k8SitXxPrbUXfd6jSjCuwJT6VEyDjPTwpVxYu5iBk15Bukd6bCsdxvoHp2LXgEWvEuCHtFTakAHUbMuCrz",
  "key35": "2WyuUwXPqJc2fiZrbm5qgQJuEtC9ucjfZeKQHuVFnBAuqV25nb1X9y9tKDx3P5gwMwbDxs17BAmGW9SPFPTzN449",
  "key36": "rXWRfoATC6foNeoPNRbHKjHdeDGhfcJyyQQRTmutnQsjn2wSLvFVFbkxQDh8T9oG3KG49DuhPNM66DQEffeEa2F",
  "key37": "aZ2WRM4x7SgXyJ1qrz8gshH87qFdD5uyAi2wcCujmKaVh1G97RpA3nBwP3WfgMgduq9kHzHhWuX42XYr4RveCMB",
  "key38": "3s9u8X4oXzcQktwabrRyrs6VkvNqbvXHGBtW8TypZvu5wfZkfk57EcMH6qRaKFL82sajLhjxercG2u6gtwnr8LFj",
  "key39": "3WFEZndkPzcVfdJUa4fcyLxMm4eLsH82DKfnjw6n51xksjACWKj8dhsVrHeH7Caiduz63KTKwaCGniNZHGwtgut4",
  "key40": "5DkcSa5cgowgUxokKDwog9j6dYkGXfqGb8KTDdcyw6CKjfCBnJQPXDRGRSVmFcP7kYXeXWgRq6hsf3PsUoKNbkv9",
  "key41": "HXpHYuZkQB4Koc3PTFvC3LJNj41uHHjFsk6wFpBxXcdzWshHJBjBP2WTirBQqQ2y95LUHB4sUXPVyMJdHfKFKjG",
  "key42": "uVGp5JA1p67HMVarBWC5R2FrYyuUCNJ1UTFftKT6wFSvfX2QJfBF2z6W9PKZpc9UsUF1VVUApdLgDmCBfdzruMt",
  "key43": "64NEKC1LLLbBBHsHyS9UV1y21KKTUeR6DFdfzzF4UdAsPm8FrXxGuNX94hdXh6FokfJnVJNxBh6q56WNEj6kvdu2",
  "key44": "5S7P5mzL3MHzygBW6pJ8FE5mdzakm9DLNYBYv39PQkRXLZGGeywajyr8rrUxCs63ZHMjnLXyXnjnaaCCZkNbuwwk",
  "key45": "3pH8GLTRYuUTzPXjgrdYQDFCh3Yg1TsGRxdDzshGKfh5RDt6QS1aAnKhQD2zh96D98oCJECLFkFfJYfvAZXFo6z2"
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
