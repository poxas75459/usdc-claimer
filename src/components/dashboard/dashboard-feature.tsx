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
    "5LNmDPSuoet4TGFtxZNdD55u3V1gMMyRs97sM1tss9kTZNRaygTHGSK4ZcCgoytBj3yGf25rFLWXg4UumwJKCcJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ypLfEJNm5UaidNPG87D3kqjQgp7b7Q6qLvJM8UaJMAFwrX5Xt1DtQya3EkwsxcdoiUdyBfBkyzGrgxwG7rEyUY",
  "key1": "TCoemG3C1FdFW2bgxowhw2uuDhGG9EMjHQoGvppTHw5489nH3NuZMeE5GkuqFBPpkk2xGZuSeWM7DJhHXFtT1wS",
  "key2": "teoe9x5vi84jebuHosx978iy9dSsSuyoB1eFNdfi47bQhiMf4XVepS6TX8MXrsJ18CLvF7pDimcnsYTxjTP9mk2",
  "key3": "4GA1GsZg1J42dDeo2fosabdiLvZDJwR7jnURmhDnbsiSbtxg1LwnVha9A3jE4cH52vAMiGkPx4VNc9YcXbwPJea",
  "key4": "5Hf4hnoisq9QbpkomtzjTTWQ1vp4weyzEowMS63sxXJNfzWRNJH5nic8267xmHY9nxu8e9tsCNAJCW98K2oCSXxW",
  "key5": "31k543Ess5G1JEb6q8uW93bUvm552r92i34gXq6zZQNWvutSMVcCeeDU773iVtMxS9KhHM6KBiUWNoh8CzrkaRkT",
  "key6": "2dScZAZDWxMTMbTAPDSU19bjgZrPgoEykdBnBviVNpPEbvtC3deSBnn52mtnTNFg3BvrsxMRpXm1BWVQi9hivRcU",
  "key7": "ZnApqwwna4gird5LV7DB3YrkQbstBZkEAuFgeid9jbQbKCGDcwZSFU9JawkeVr4DjZM1UnRmPnBokcFusM8pqWN",
  "key8": "2h7iCCEhi2SR5xtrycTQ8Nw6x5Tn4evmqKLFuB4q3NKe4sQn5Y7MUj4iQX2EE4RD1nkvtDZjcn5svWup15RfiT5H",
  "key9": "5MeyvXWAUpKYzJ5wgpF8J8NJMU2fsbPuqRmQ3pBpkFv8QBwuutcHbcCAxX9s9ACbT9jUX6GsB7GkDmazSdKrPdH6",
  "key10": "4mzdDi76diXFZfdgqvifqEHiJMjSfdSoinKfPSQHzcRMRTyEGK4V2Cch9r4DpVN8LrkCShs7w2B3Wdb4mENgREnC",
  "key11": "5oWRAgr6jJ5JZx1eSG3CUNdn5fsm2boHq7Ws7zaQPZBzBKPkq8v2EpcB2Ng6az6n8fRDiUFMtgZ3UFN7bZ48EG6H",
  "key12": "fu1RJbvMYhnCUd3P5ZvrUea6621sahbf7HzZgUfibvxNLjeDADMS4pFiyN5kDB6ECDwFsQ2WBepRAuUAHuXXrhG",
  "key13": "3SmJAxMe9njVuwcYQUxGQEaMJxfKVBdA1WpZnwwnzBvjs2pkrna4Fm8vTiYAS3v7V6Ui41cBq76j6PoYvFLr1C6H",
  "key14": "in9rW2zov17DVMg6nnjRfQ3TqUx8669XVLcEfNe59XtTSDpzY9L8MZxWHLGcaN8K6DvosXmZy2HibPEXbsJo8VG",
  "key15": "5SZhbrcEty9L8dtGBQ8cJTqTjsrGcVFivGf8iMzvCjjNQiomZ9822WmRSZtNb7hNKg22CUVq91MfBZVjn5E1aLfh",
  "key16": "4LMTwc3vmuNY4HtBFPrwvD4SuGxNmWTd3ZdxwQN8U2pZqd1fj2e7AtJCiJiYxyr4gFhtCP6G861oU5NvjeXaofhD",
  "key17": "c6v8Ci7vRwcTaJvXXKVKZBnvSPzSoRFpYbERuMDaK6jD4vq1142MccdhZ4gBg5nu58kYqm1uD3DzzoMyN7J3fVD",
  "key18": "bj56i95tyDrhHCXqJMXVuegECEoUx9RRB3nod6V1fsSUQVvnuKNafYpEh1JuvJb6shNH7GU48xsc9Eh21Myw9aP",
  "key19": "5hok6owfyGYFmiD9iafqPShm5kqEC3wgyXURERGd3PGE2DHJfhhRb9NvgKh1HMcYhqqE9HcqzCzCyfmgewtT8nD4",
  "key20": "ao1K14tjTNgDiZL2dPs5eyjfLNNo3v4PaQf26XWKWFhdhMqiW8jaLJNi25x1dTrroL5L57zJkcTimqNxbACrTap",
  "key21": "4Y37D5kmjHSkLJX8mYWN5V38agznjAW8vhbj1J2Sd9Qtifxr6md8rWHpKUEY4hmLBRdohkHBPksRWsMCdgWGxP4",
  "key22": "2CkEchp1TrQ4AvBMgjU5s7C4MYYu7eCFqtNyL5Ni1UR4qsYLuMRMiZj7KpJwztxy3e3ajbZSFcAoDp5ExeLbnTkA",
  "key23": "m4B7WghrfvUbrgc5Vn61V4FKSfeztSf9G3AgVnzg9tNdDWGSzGqzc888AhT5paZTraB9uZYg33v7rbqwHmf7oJp",
  "key24": "5gzEh9hYMYvZqZtNFtVMFXXeQPDP7S7ZwzUiU5yAXMYmR4iQZreWLMWBXwNGjGyCuUeu1ivAQiN7UwxwDYrCUcFR",
  "key25": "fc1U3eGfDSTg57cw6X9bSD1Wb4KxGhSKix6iiFKEp4eom3EXQbz3R7pgrkPU778dkU3kY3AVKyzMRTQQrnrPjKv",
  "key26": "3FFzW8VixQzz7dzX94tNFEejLf33FHtnLxa5vHMWkyneVQSQhAELeErKW9emVyZbB9P2bzGoyS1CySPQRY3GdXGw",
  "key27": "37fqEpmhm1tgC9BekLy1wsCtwg5dmNQ2YHQLtpGXz3fRcTsaoZ7GyQGWNnnY6yUfykiLPJRcE1d3PSppz9rP98sx",
  "key28": "ZLrV7gvD5hxzvyARHuQvwj2t8zjPs6osfyYZmQC8b1KmaYKmWHStAWsduHAesedDDLmyZnoAvyruApx8Y6cdQmg",
  "key29": "59cnW3bcAZ9WxcfjRMcdUURk8zrzxoZQpREvRWQJbf46PoMYxPkVCbaRqZBXzL5Nh7YuH8cPr7EwfE7iAtcQdfaN",
  "key30": "4pcCCZ5t5pAxCuDqTD88qF1khBqijr1DLwgj6iVyf6BY7DnpTihHmj5Y88CsVKoJPo2WwDZs7g2H88xBXPfbV1Yo",
  "key31": "3uA2QkvZwVggWpNGR1zHQ2vSsrNQUthfG7qYzYJ5x51rA29Y1J9oYdaofGMKTYFyY5Ue5tpqBJZwsE3g5qVqW4qs",
  "key32": "3ryJgMPfAhmDQNceLcq7c8mBWErKG5PiTqZ43Q88nKSCqG339ZtuqcGXd1Dj3jhyzLFwAimC1CvgTLBppPHGhsN3",
  "key33": "3MqmnsdnPuEsbETbgLkyhKvyCNuepgTKBugmmMbNmQTR6N3u8pJrNBLeXYEAyTpgjGnCnV1tdU2CBB6GpJm7rj23",
  "key34": "3FVq5hZXjgzkcunqrnXVynMixS6TxpLtAvVmfbvFEBdiSZdThFk8K838CpPGEGi9FNzwTaoQgpSVQZzcPf9KbVQC",
  "key35": "25zRk5Rf5wP4VnJxZuKinBv582kR3nDiMPdefXhdb4Z7nUsTGVNbexNXpdyUT3vmkGHfSfhGCVHgu198Ci5GFPWE",
  "key36": "4K9nJ4viQveACSdHNNekypPXbHL18tbdJ3g2cdFiM3K6Tc3q2DYrPyiY5qRVmLJ9CmYRw4CUbCQxJYerzLKmcUMv",
  "key37": "46hoiEY1iy3JvCJZRw5KS6hqSuYRVDhSgYEbMcP8anG6AYoPnACGyQGUa95tR2eggRDdDWKvDDDduwmH8FZvhuys",
  "key38": "YtVUhRSqSpuWiu2xbr74qKzruA5z8FP3yHZPHfK1stdt7ufK5iuzzZAbuPegwpkbXW38efX9UQLR5kdCd62MeSz",
  "key39": "3bKLVmM6B2WpowTj3Rc1MC2fEU18vjFfgZEpspxYDTidFPezMLYnSZRMjHgLxUWDLJybuPUMSoTTVRbnPwYBBCD8",
  "key40": "5MgwQtwf2DrCp2vbLn7Dwv7UgeSZ4goMyQPyuPzt7FksgdHrN4eA5aSMj4DinGH9ba3Uf9dMd232qPmmUbX3jvWR",
  "key41": "5Ux2kAGGcUQGdcsi23fpuouA8RRQ2BHKi6on4GDr4hF7oSXXyEkCKPdkJa37PtwneazbrNWKpaQKYrXFfDbBoUHB"
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
