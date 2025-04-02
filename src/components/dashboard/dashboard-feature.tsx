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
    "roFeNtVo3EZ8AYsAXvvmMwL7v1MmuWcQQETURPBgjzTWtL18dsTZnZFzSrRRBTqddNDpzgjyo9R6LbodGYoXR4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvbeZyEkhQuV1hUJPJhXNYGiAnbUeZK4fBjAPHxrnNSm7FVfpetEfASvxnLpqMJcF2ypRWuqNM9tdW26FDnyeuB",
  "key1": "5WUFCy4CA3bG3NPcYD5yAP5yiBotrn16ph4EVm8Ktt7NNjcm8jEuKRXxoFLGUFebXDbAeao6932VF7jiwooLtHSQ",
  "key2": "3hPUXNCSk3vBUAuxQc5fgSftgCv3yBWUPWfkMkWiEcUHaS7njjdkBxYemEsmAUrKWEFYFGt8wuazC4BNJ5nzALjz",
  "key3": "2pZzAtfK3UeAc4Q3AwdF9NLQDYGDPrafgyRCPucZsLFmdnVLLGfGu8CYpusTxniDTv2DX1nDh6g46ojiu6gh2mcW",
  "key4": "4VqshAa4xKX6rJ3ez8cmJ9oDqWQY8nfxeWfi9b5wpqJryo5tuujppVJ2o1jsaCW4EyaJEJJsE1nEQSV3tFStz8f3",
  "key5": "3waNJKRvrsnjuX15Mt34LMZg51CYmmUGDQWxs74FSA1AL8PxZMWbudxCKtxZQDdRvaavL7afkY6XyEqgr5khLzmg",
  "key6": "4kbtTyUpxHgnzdL5XCNcxAEm9Uwrxjp9uz3vSPq1qvZGmovxubotbhVxWviyenJKr1nnpi6Baf2umG58DEYZZn7r",
  "key7": "4RLvWQpdKtwBmbva7VvVYE6NUoEVdD2oovKNgb2JNKsJFbxTrVxwNQqnWaUtTUWHqgVPYMYZ4oZQABATxj8sQxRM",
  "key8": "3Tu1JLXEJn8C6SpaxV1M4kNv9BVzPh482wqbd6WJta5mZVdVR13k9PVEXf7McP8uxZ2BuBerH8LTRibB5Qe43uib",
  "key9": "5rZWyyF8bgjeeaCdAqyyJ2SJLWdZSHKAEVqFUye23VobBbmTeDUC5cw6PWrayNArGyB8g2ji7XnbBPQUq37JVTRt",
  "key10": "6PjFsKx8Mqjc9hoHkFDfer9UCGvQJMMZaCWSUne3o7rTdysY24AyqYiwjuZgemwBfg4SdbmWBCL7tnSv5b7Jik3",
  "key11": "mEmW9oeXRBuDZ7KSStZkkKQm3nk6TfToZvzt6ERqRrp7UBZc6aff1GhPKKki5bpe2uTh4xwXnwYZC9FndyrNgJV",
  "key12": "5s4PKzxpZSejRxbDTpjv97vkhyqXrXUMNJBWq7FXzcB2M9cA5iN6CYuyhpEx1qKzrFsREFSG4AaJ4HP24wCSPoxA",
  "key13": "5YWz1EACayfSgpQBGdp4udsrdtam7eNat9LVimNthwvigAN52sEddCFsqH3JT7pdzqJ26nnTiCEZaEPP2xaw9p3W",
  "key14": "iTACdTrFEVE6JLXkYrGCtpDehL8oc6y9fMuBCHTjoLnyyAdn4oysGgYJjkfN3NZM5PP3HYBQW7zndJkqYSEef9J",
  "key15": "4f6HMMWL4hJKJLdmt3o4HSj8LKPcE9F3fqZeSvdVPi5HU3J7Sj5P7BTSaHwfdj3inKzXyWsmFLCqBfJrT1GipYiW",
  "key16": "TqCLiaNjD1LmDb5fu5bnxiejbnCHqPT4RSi3EmuvELRAsFTUQjuHJiU4HaFx4eVewm3ukUhqbaryo9FoK7tBoSH",
  "key17": "4qF1kB1aeRwEB8zoMw3pm18KqqEUqwSUxmcyfZRT4tUvvLvBZpFQJbHu9AxrGKw3Mb1DPyrtwK11Ur83aRnnH5HD",
  "key18": "5hafnL3hu3ptqneLMDoJasUUxvyi4ib4LXTKQ4kddwbztXZS3xQ5qpiTGiyJesb29MKom6P9H9kRXdoAEwrXfuTv",
  "key19": "3yB8tnMhLb2Ee2EQgMjbUTotXSygZU4a8mDLNHyukwVNZZwWFQns4iuvSJNBFKWpSf8kZbCWczJ6suJ66svJVaXU",
  "key20": "L7648mNRwLUCLKXEeH5AtKVrvv418svt8bMKGN6P6bDTprcd9ySgiSJCC1NdNpHDBs9yXGjjpw4dVY5XPNCx3Gu",
  "key21": "2HBPMjhiQYHqKgJ1xyD5jzwmuViWMc3Aum8LRFhVcGznRHtRk2Gbx3xAQSM8S8he5Suasmm3NVPUJh6uyQAMf9kz",
  "key22": "3uGLYFKJ6ouy6BHkvg2iZtMpXYh15vJLEGDT2mt1P7YTc3M9zr65mVGPbziBGsCrDtHhz7t2qycb2x9kuhY9EwwG",
  "key23": "2ZMy3XxXJBJjDAexsZr3d98MzxMvSDCfoPLKnHsK45K4HWkn1griU3RUmLZNfmxZj7kz9WvkKrnfiakSKzaPcCB2",
  "key24": "5zvo6MqmYqTCd5bjQBx2P4rzc2vM55yvmjDyyuWeVAkt2hDx9KN7hrA363P9qXjUuyC49D1iLFiXh31FvphfY6fj",
  "key25": "4KGLiPXrPW47Rrrch5ZvgYYaoBHR6pfkUKuqknFvtLvP3WZYg9bm4kPhrj9xxtoHNDdh9dNw3LRCiJao1vwJkZoc",
  "key26": "2GKi3c71ddjH794eLzSf84x8dipbpK4YjqCWRSpRQQ67DJqa8jyzGJKz3qA2iRHfZSx3RQxt4CRjW4dXf52cpbCZ",
  "key27": "58R7CThJLkGBTgedo8wR1mqm7zGyjTZ5JvhvToMYoreRnRCsUJnmo11KcTx1SLrhEJeD6QeFAY8p7xV7fEN1pHdo",
  "key28": "3aNDNpAmTVXLHPghmLgXeZoKbnwB5bsjSwFuGKnJaSJgYcg5bmHgeotEGMkEx8ReEzaL6FiwBH24nySYyXz2ooQe",
  "key29": "3H9eYiJJGpyLQKnHThRWKg92HsBVw2yd7G8FZNR3CKL6QEtPvy2au3fGZsKb2eLF58VWxuggooowz6w3KUrHJ2Ba",
  "key30": "4BPv3kQdwgpDbYhpJb8vWjEUjCw5ZFTN7dF4v5v5JHG6dAT6z1ZVSe3UXuYEgVvsVGadpULNc6ekBQq45w91uayH",
  "key31": "53FdsQKJnuAmsBa84hCkB2hXS9QpHGnDMTqBeYttFdjLtXhd7aUJ5Qko1nmJJ3gDUeMHKZMuA981jndUZEMLbG28",
  "key32": "67AJpbGvX9vdB61P2W3Dpq2PSHX2ST6aQqhKeudu4LHHbNj2FzSGmWUdJRMk6Z8zyPcVvNekrjsLYhyJV9t6DRPw",
  "key33": "jo4tZYRaFCWmQn4FxGDDMcRNHtj1kRKichDB5UksMsLrPFkeLeVyvqZMme3L9tQi4EaR7YAp6bgKMqFQijYbyX7",
  "key34": "3FuCL9jXaZqhHcJYWyqaQHdtdjRzK359sZHQKa3m4qJiQWqRuBmgo5cNTsAeAiZpgnSrx4PMDZizcCi65BayHLKb",
  "key35": "2H14RXB8PkfF6W7DnyLcG42RQeRngs5ZueoZi7hzUmEjtCJx2c8CXRt31KpdzgEA4ELBPYR88ExUWYLVbnX5pjMy",
  "key36": "2Vb9btzH1XWmY34hUCJ4otehSoXRH5bxtRemJithiWSLv1sQrBJ6i5jP2ReimFxPyEKqv7hnKUonoc8imiuDvuCk",
  "key37": "3CCrFQe81mXUCKEvxywXUr9JrNjvYwfBBkE3pGNPSNbkriVcJ95covssozx39GLhkqXJerYTbVoS9D95acTt8P5z",
  "key38": "5nAbmbUGt48EQuS2dGbUA3y64Sz3i73PuczNpyX1SaoJMHQnFWE8SpbWuQU31rY73CcsgLqPxSJ7ZHVUa4MoRh1o",
  "key39": "4oko8HV1HYQbY3sv3HNEyRWV5S6k7Z3c9Ns7jAAF2749oL6wdXYYRRhPM4CozytQgMGwpPsHaSf5iDAGcPY9jGuU",
  "key40": "5mksMPPUBQqt6NjVPHMncdRb44C2V84rodT7WDXNmhnwrADPzcq8Uhp1hoP5CrrfGPPKdmLY19iSDjbDGqJ4DGVW",
  "key41": "DQcoFVfrtW2wW5ELg4hKtAaPgfUwzzc6w5AaEbWgo8z67eqbBmP14qAz37VR3cpZmPcWJqLi4WFCmaYWH1E5a6M",
  "key42": "5JNa5cJ4JC5ZKDjYsgikAFs7bGvCyjuHyenTxmkFqB4BhxnDY9oRHF6G2wdksDfyybkWT3xeQRKQkEFQuDJCpynJ"
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
