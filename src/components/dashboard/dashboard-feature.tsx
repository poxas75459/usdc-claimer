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
    "MMUGHPjBtV7DVm26FBrwxUU26vwm69PzivGz75qfkLNYymWD34rESrj6w75JDNxKq9RtprDrrzS5Hr4gQjfWmfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217N38LgwMto8mjWZtRs8Auc6adi4HmUK8BGwRNoyzojTVQkoB9NPV4vFBbwaWJJbopRPDkLr6BLA4xjRWAkhmVP",
  "key1": "3Z1cADNvNLFJdhA4nVwuVwKnT4mWBNC94YnmVRLfay6sRKyTv7HPTsKqTkwACNPn7Wf5KeeZYRqUGucFtV2zaLWL",
  "key2": "rHuN2y53gE7eoFPa3kbBmVWRSPetY8sQcrc5Mad62DRc28wVbg9rhUEENChgvGkf4gLU7Mb9QLzqbNFibpYj5Z5",
  "key3": "5dR7rPeNPRptkqdbJSR53i8aRfuHZfEBvvLfkuomS9dbe6usyX4pPrb3uL4DrsdHhdXnjcVi7E8e9uXxzzth9n5v",
  "key4": "5j8k7VGLT7VQUpXJQt51cga4kavKhz1ZDRvW1R2rnLCjVEy44USVYksarKxGMgVk3ejMyPaqaAXHcfyhuATxF58d",
  "key5": "28WUyuuLDfFo3xFuTABESNRFpuM2xgq4qSEdF5MgQvSNrtPZDRkxwUBWwfnUnizHRY1bK4aPn4X1PPgjYkapjgGU",
  "key6": "5YSzvJq1hqbfLbgqWTf3GZH2dA82G7fDeuUKoBLXLx5p4Sf4VGqjQyHnbRDQso8L2ALmLmT74UPat4UZxrhiUcDB",
  "key7": "4UR8SSaYCYmcXNc47u34r4yY5U5cC5ivkdgCbxAophPRw6JZkKPtEtMCZtp689uZo6mwPAVFCDVnmJtUAjjx7DcS",
  "key8": "5toZdWakPvt9Fqc7pzpoyis6HcAX7dVS226Apj9jmqWYbxPynfyrDQQi7uWtjWxxKYahppcLVCmJyXjugbFH4grA",
  "key9": "4rUboE8MdU3o1MmTxCGWozTkEMnAGDf6uCyWKiCwaVmFxm9q24MVqiTbrgib2ShQrwe9UFkeyXVNMUJKyxWXoXEa",
  "key10": "3hEdQHcToBQ6HZDs4cEQypMUjKUMYRNSDCQJpCQ8jBLNM6KncCQd9wsTEBUv4HMB2ApdVJnhTeuKTQc78Hwx9Wb6",
  "key11": "4qYzVDdypoRTQTi9MCX1nSSqXVZZRQqncDkawQ5cLPosqvzsLwXNQHy6gKbE4dtuYfzxcpCCkPbirqarvjU52Zxo",
  "key12": "1213fdT5ERn8g7epVGAiU1Bef4rWsRiUzjt1DDimYhPVUthtk1BG9UAkF6ZGkKQMMUbpoX6o1thS5DwnivsVLPcR",
  "key13": "26v2TxdJg6DfLbZRuMD18HDwTQgrbEL9tTCDbnTBvFucQFq8j3QW6Ldqy7TPvnhtBPmULddeESZ4ibzUs5ayNFPn",
  "key14": "3jJVWFioXk3raQLPjrMxxPUo4Cjws6Ps7UpWXDyNbkTxQZhZAcrRbbD6oGd7fm5vbLJ4t7R6PtdCC1Dj25GV7WAM",
  "key15": "4PJCBSzfodNVm8T3ykx1Doj55fXcDcomt4duxRLLLtRFWfnqLGo26waSmWAcKUK9HtciQsPp6Ghdjy5PaMJNQEmH",
  "key16": "4qUBB1KTzSbtGu9eBAtTPyJdgeNesWhzVHGjUBHTpBYyJtuwfDPbAnZegQdCrTuDZLjic8J4k1jhLtk16YUPAzUB",
  "key17": "2KS713VuPPcb4qtfeNCTsA2srmz2J2jWyzD4Um7PyJs9uGM52yWafYwwPNov7wRyBZdie394q7YtVC38x7AUTDhP",
  "key18": "4qoT5xVLP5enzYsL7732uJXc2KK372cA9yHo9weScaCnwUx9cdSPVVLYPqzweGbyAkQXbn7rMs9z8xypBnZu3phu",
  "key19": "5SjZar6tHjUyVSSaCVj6Q4kx1ZnLAGpXoAM6VZkPMritcttqbZGK66BaQ9BejBXn3XCfh35FzxKmL2ack12cD3qd",
  "key20": "2f7fkYpQXSFFXMc7n57eiipA47Bmpy9z1FNEaDP4gMB9S5dx9Z6cFGiovFxC76uwffyjJ8rtdVrLCrQ1YJbzvKCX",
  "key21": "66TJg7aVWpuxWqMseuPzsY1AViGsa8x6TJBwDXCGvu3ZKKJz24wrJ5gaGHKQBsAqqaeooVbY3GjAjyGsoNH8zbB9",
  "key22": "61TinzBTThivZap7VXK89RvGeH8bdmhQMNvQKMZiygjYkZsY38EivUAwDWrvDo23vgFMtkDDJRwrhSe3C5ijEtio",
  "key23": "2CgdEfqUGkooNEnMhxNiJGuGmkHE9HX9pHiy7pnFU86RYQDxEB5tqUVuVpiDVMx4nd2feCcoLwfzxt89tmKkZXQy",
  "key24": "3kSu7cjZovJ6XE64XttDAXAYRWWSqcbXD4cJcWdhcHzZfkuEWci3Z91t8RZELm6NiuiodVHxjsxazVJDCx3KcFgz",
  "key25": "4yQYpR41PVHpzBGiHWjj5qEMBpxfJ75HroJhfrKcBWwMDkCBh5CJpHp1NaEerchiPg7dYmXBMfcRf38pmitT1JUs",
  "key26": "7ADgFXSHw7qy3ZU733wUaubKxcWTeWf2iuhsdHYnQg7ZhzYDTPzZCijqMv33MHhhdZV3nFYBgjTg8NieXQjqQYQ",
  "key27": "32F36v3nm2EyDNULTQbVT5oLJJS8ZrFDzibvBv9T2ySme4DcRoRhjW9Y181wQ5w6Zkakk7yBuG4EessAomuog7iG",
  "key28": "5zfMycJ5SuV3L5rr3tdpHsEreqomy4UjCf93n3W6GKztxzEDzB7igizcq7PfnosF5rS9QTzGfRz4rw6GszTtEeTU",
  "key29": "F57bcSqRThMYAKctJT6nMiJditgSn71WVc11X5L4cjU7TX7kqoqGiYgTrMdQuTg88Zdeoi4QH4qrTjcSoXCbh7D",
  "key30": "8LDTQx2RuanbHFpQKfncWbBGV4FTH57VXLvrdr9yJbvvtd5R9W3J9tJL3y6NyHPEUdt44oBMJzjtaAVqsAqejNF",
  "key31": "3qbgFK9dCffokgtYe9TZ1WZEygs3BFCnpgHfACa2gCPqEGKJAcTxctZrvViUZVZbYH9ZkfdyAPKPcrswEFPk7gjA",
  "key32": "4NZZQaZPDTmSCfiisWBpjTLvUhLPVvXp7Mqz7WiJ4nBmofW7nkiWnd4UJRsPbdDuGApMsH2VVUwKMveAHJPpTb5",
  "key33": "4SVAmMknaAPiTFR4xw2o5YpMbuXU6wSpLMfpFpYWUWmYgCvHiVd27969vfb98FX69mF8MUFPis79RtCmvwCEeyKJ",
  "key34": "5sT1GuNxXwX8h8isrgR4wGBpBWU3PuEArkXb78Hr7YBztLbCFEcHcWQ6QU68ux5gLAk4xBCysN9bGr7NeqHAiNgt",
  "key35": "57XiUjQySYFQSsQaSmbpxasmvHNnvtgvMJqqjhWLXERY2ZYxPZSVbecBsTuGTSyyeeV32hH8vm2WDN3hFzT5ZsbS",
  "key36": "2jpC7priBtNBhzFxtjLwwMCYsQkJjUFr7tAjLTLXRqS81Uzo9bVrTST7Kab9kgGdHQXejwUYeUCmY1ffqmLPTD8e",
  "key37": "27FFZKMjxyGGeQCGHfEyCKZqq9tXeDdXyRHDjWohinA2uXXapfi3GLcXk4WqC7ZC94ZRGYDnZmat9CidJBsPMhme",
  "key38": "YTzXdwYK4hJAZZ7UCdKqgfVSJJ5DTwTcyMuv1UAxmpvUsVjbnY4RxuX7knWN6kv5W2a6K31FfhkWHtoXHogsHBg",
  "key39": "M4L5tSRZbctp7fbig2jt35sTFCM76HFxTQ5KWBr1Q1DbnRQ7UE8DAK6jmNEPKmfcpJPYuwD1AVLNJTDkaZVVrYK",
  "key40": "LcpzB1Mp2JUUkNvcBaP3RkgiM2oFRpRwr6BQqfNXDnVbtCAjpYPHTshoTxGXDrc3shARY6E52To7EKbue9GnunT",
  "key41": "4QZF6ave15b2bF46xLkCiLNv5ft63tsuQRCJuVo73aPBkvKptBxP6SDGntkfmQUjNmYjiHPYCqQhzYXEJfwgzebW",
  "key42": "57QohB5dBkY7TmkntpWs9bzNYRYX3ddsEYgtoK8fjjDhJukt3FHKfG2AUTnCgbohQkfeB7wripYS9aKBRrqWfYnm",
  "key43": "2UK362b8NyMWmvLKcJ4jzGKTX5Du6qirikGLJDtmcwnB9c7CJ9Kvhfb7yHD3NHYTiYmWBT4MCRd2cHBheVyHetf7",
  "key44": "28HiREPGhYSMH44fDFSEV9MkSNmLhNPGhhGP22huH7DsagAooKvoS4ZpycodEYL1xVmyjSynb277617s8nymyKfv",
  "key45": "27PeSJbEKi5dQrxM4tArM9mhCNPgZrpvt4ZRwLAGsgyeC3kos3d9u5vj2cj9yx1efgFt3WXWqHB1fnWjBGb34grn"
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
