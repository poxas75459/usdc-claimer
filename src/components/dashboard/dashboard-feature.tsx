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
    "2yXrbLHt7wdJWxahVubXMoPe6kJRu7oBhoQF5UeHozQ2wCPT6eScQHJBJ3Wyg5fSMJ7Xk5j6N2czCJb5YuvjdSHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59es8ni6tB3C2DXcxFQdwLHKdBhmNRA4mygFPcSErwd9sxbX2DRyrtAGgY95nX6nnxnrgRz6f18gCtK7eWVrnBXf",
  "key1": "fgQ4H1TxC1a2j1Y8B23Q4XnLXoPXbD1g716pJ4jGxsZGmsnVtxwUxZpRUaP56goaKGg88YCQiLvbfF4X29dpfVd",
  "key2": "2LjQWdvCg1ggzx81tEMkxXNmuskbGzsdg2u7T3EmEhjJFH6GUTjy7qYBtCbANJzFEH9fCRyw5qU7UmJL3LSy4a8k",
  "key3": "3s32aCcQpR3Te39UWHCnUK3pRkcy7djPGGfFDpR7KrXVgeDSSEaBActQiCdcgJouk5tvSa7Sdy3Z9sqQ3MwM4asX",
  "key4": "KpSNcELhtCoqP7NprFsHeGvwMnt8mVRFLwgHL8b4NADnKBW2ZryEz8nMqRWuLiq4tVHcC2tsZNkxTsmDKFQ6Sib",
  "key5": "26wBddiCT1WSTMsCkp8bvCCcoyqL29eS2XsXUUe5gXuXCx2XaGcFzRy6j9RAkt8BDB7GQ7swmxdnB2rRxZgMvsr5",
  "key6": "Uxjgt7c3VaAJRTRFhTxUqjYXsuvZC3jPiK3gWhV8LK2h6vCZAKostCNApFDPUo3QcSx4tnmqrSFmAi5dGS9RVDN",
  "key7": "2tZAmwjuGpvwE1tUr5we3b7yJ1GFj13GhEGiZm86UfJDqJMW8DXHrRingtZxfMExgzfgsF61WqZpVpzZK9ZmkFcT",
  "key8": "2HcgcpUHLgsbCfMuwkEmK2EP4kSPJotT84siY3yYUrn2ktDDeq7jKLoFthqY1xuJG8gL48TSDi5fU5dZup7w85S1",
  "key9": "5NuoQzYLPJT6fPjcsPBMHkNSnhsco5sQ6aegWjv1HVZhN49WfaMKhAdvSb9sP6ka9cYujiV8ot7zJzx7vW8e7sco",
  "key10": "4kyS3zJC2DiFAbHxCuftJoFRPWEwCCVF8c8uUwj4ZrGWFxLRw5tGSKS79HRQkU7CicCheivLRRzdSQeAR6EtxcQv",
  "key11": "3A81b27fntACxopKuWEMThgABfgKAZ1V5779JDg44f8SYsz23UVTNbpfFrKfKTaDb1RigLmTotok1pMY3A6muhoS",
  "key12": "3RPSzZxtxP1JKav2tN77L1iWP4ByptXC4pNSbmLqRs7iUPyTefpTJ1qgFbN3xRsUAprkcuHyjue9M5ewUa6Cc8aY",
  "key13": "2C4ZAvZZ4SdSFUV2g9RjjiRoAL7wj93XHv6RUNy4S6Ac4xzRFPqarCy7ySX4QXZWh95CCPvLXG9MDRUWAny2jumN",
  "key14": "4MzLdfXRPwufb2utbLkspfoD8G2NKzqstMcdqBx3CBnJ3n28S7e6k56Z7cyANcYib4MHLWzjXHQ7BcFxJqbgJPDt",
  "key15": "5WvbPiVsWgg7bE9tmkgVJ5NRQVJ6eNDTkwWYW9sitYKD97rnP7uHQ2mWAWxgc8THq1J4qv9jVPc1GTuDxG1oMiZV",
  "key16": "3BBmRUht3pSFvH4GK3qfQJrFH8N5suJmcL8auG9hTSquroTqjqqxEeSa2chQcbnyjNsP2bAek3YgYbm8dxbNjKCs",
  "key17": "38BycewXenRBpNuZP3aEEEmCTib3kTh8nciJ29LvfWysSii3u2gnUnQeh3YdSA9f4cdN3MJ4hzvoBrM4QFSeCyeS",
  "key18": "5y7So4tfabqdVpDvKWvHd8U5AfSVhjoYELCYYqhzHEFLpxCBtdS6GD4jEU2YJPRFSHfAfbpUffs8VPbkadbBDHED",
  "key19": "2JXhQD2XhKhKwLGeQeuLfUJN67mzzKkU37jWqEJNBiymTeiwsNbquudRPzXNLop16c9WnReurb9NvtVTzb82KE1y",
  "key20": "3LX9XJzfuHGW79BckjbzPqjCqCcaQcMdkPzcfURxzjd4jR8Sfv9TabGa8agmfrGNne6a7fWUHAJ2Pv2DqTMEYCAy",
  "key21": "4X7zPLZftAHgdaMYVG9dHQWjRt7wHfa3XYGGBLsKFUbzMn4o7eFJG53xLigavyayH7ihM9WgjPKStt97cMfuyXkL",
  "key22": "vrLKmM6eFZjW3WJDHKqkXpcpT8i5kmrdbE5fSNPniFWTPChzGNs4Yt5fh3owUj9GmXoAKrLk8oeV4yzAtPgAc4W",
  "key23": "44cwGdVtxp5oLDMjHPN6MBqzBnRDSHmins2VQib5Bxhh5qrAsPCZCW4UhgsWfzLz3FrNXwDcBFR5kRBs6VSoJKVd",
  "key24": "AJVLUxW5at9cKANtUK95FkeDi37afzeeXACyaX78fuQboqARHogCM6W685FD6efLiDyuXcAxhDZ4Muqhwx2QdcN",
  "key25": "41ws3dviqaL2a7t3vahj91uTFo7fT394pB4zc1MH6roT46DJ89YV6dweVuSTRLeFNTzdjEhnEcyk52d47stXncYv",
  "key26": "3VhCrpWpgg3tJfN4igqZa743hVzfd717crkFMzVV8DDkRv8jy52DCtkukNKrGi95z8Kw4aWr9W8fRdayztri5s3U",
  "key27": "5J5QH1UeCUbJsmSbvJckjne3dBnsdF6S8fEQ2yp4t9SxRbCZNQfNPQwb8YxmjJXcYu1Q6VL9xnewKLG7UzPYSUC",
  "key28": "2eza7NBPkU84GAR9EdH8k617KB16rPsRzuawSq8x2hieCLBWSLBpFXH98Sd7w4Y3o3RTtZubuTrkgCtsPfwi3bzj",
  "key29": "4FA7whihQLVQKvVfAxUEhK7kcd1Q1Tj85k4TfK8GBSkdRy5179xVdEzP6a3cJYSTASzrm1zQm9GmmArpTTKj52AL",
  "key30": "3xnf16k4eY6ARtRvw4u3ntFiRMjLrmk4yU1hpCzKQ1D4yLxAYa7RzFPe4ztdgd9BUVPRbr2etwxgfzHmoVoX2rko",
  "key31": "4RW9FQ3HW4KiHzw2thW5rSwjvkkPWDXpT37ttoio4v36LzimxuTjgNB8SXZudWwdNyNiFwsHYudzctgUEJ9EdPZm",
  "key32": "57CpywGZaPLKC2rgdUD77GgX3cSveXRu1HVReUZHihPkeGp1pHa3LDYBovYwVRw5ANCBZwb6VFikPsHd9voY1wjz",
  "key33": "5gCyBNe9qn3s3oQEsaRSDog2dE3xBXUdJGZBSr11qnPkij8qTRatVarCiuHsZAx152h2HWvAQE16o1NL3wAS9jRb",
  "key34": "23cQFoJewUsfdBRfyVEB9624TsRrhP4ka8PhuZu5RxgujQPDFcqgHtkkEioE7eXEvk6NgSu8yeDngYguVLrc4gfj",
  "key35": "55QnhDy16f5E5t1LAdcCvbWJkn3cF38rQZPgTkgYiX39rcukdfvRSoGCDTZYhrmnDyqyD6Ytnv2p8FKDhyaT3LCa",
  "key36": "4N9iFUuBzzv7J6LQe91vCV65jRPWgBPde84rkUztMkyZ1TUkujKS7kLUm7zrEeWYb5DJsKZdubC8j3YqEsfFeDV7",
  "key37": "o4W8buKHRTQq84VeEK6fHqY4BkiFdmwiUtFGPUKy7eBW19UdSMLshbPk6xWzikyHxCSTWRADsSSWi7CLuS1tpYf",
  "key38": "5rFds84AXQ4sb68bovTV4DuQJ62cybMbgn2qhZFGtNGn7a9FaoEfaB4xQtDosHKszkPVjo89HmAdE8qyJXPvv46c",
  "key39": "3Ne6SGropyctLajbrGVwq8AqAjLh3Dk2fFBbkgkSLY3T7f5kRNQym4nAcLhrpmyytpk8u4fKDcPF1J4tSYFFRrcJ",
  "key40": "4ffYguiCEBn1ZGT4om89xRFyS5a3MPCf5Uc9oUuvkuFW3XdSEXtyeX3p2Spr2PWk9w1exZsUQyCDbA429twar3fE",
  "key41": "4sQyJjrExd6CRRAfBDoNVhgqd62m2PkRWtfypY1peKwL1QJ7bBcxBQPF2D9MEwH1ekwC5FrozsedWhWrmw6yZBHW",
  "key42": "3bjt6J2ZFAbvHHdqADLoLNWJeYrNZeF98smpVP5p9LXyB3ycAKJRYaWeMcbE1bEZXWnrYHzjG1acC3C9R5LuCdgZ",
  "key43": "38aM15CBMThfwHg9sQKx8iGEXBCb2iG9RkDrX33LPJNT3ySTtNmBa86eQR8rsYACizRvcmcewVCDQuCFkicnQdQ1",
  "key44": "2goKuWLL86jMvCJj6b861irBpcS6biPqz4kXjCEEt9ciQ7dut3GCS8cdbU646zwaoaDWTfCGCeTyYcR1HHMSWXsJ",
  "key45": "5p2ER7kD2tekj5enhyfGhWZKNsRTEjVNGfCWU3BtvuFHnagsRCQEtFJf2UEPH8USXq9qB1nVMVeu18zm1iCTLKxR",
  "key46": "2AygYBxdd5JYizVHuB9KGsj5J6CHnZJyXq1TLhUt75bv1bNYnqV1J4xdV3QGYbJkjnzcPrPWnnYRvdUtBGscHdSd",
  "key47": "CywyfgVnwZXKeTJCqLqJh4pRDc3y3z858MHUVhPTxMEKLxrPY5NAzCMKcEf7bCamsfPmMirgCqRbhx3xb43RM1M",
  "key48": "2h8W1WC7a4yhwqKFD6LxVZYT3g7FahuogWmY4mCy66o6ZBEanKMJFRMiyokPXPwGQHpNGWJUs97ZxhN58SGEZzsK"
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
