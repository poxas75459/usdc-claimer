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
    "4fuykRTE7QFzbUzferH3hVUUdt8BwgZoYiFYtaPoZkNBEvqrn1H3UcCdzHgiMzb5ZTTQDzG42V8U7CSwrvPnRfXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaksrZ5zNPKR132RMGFXMiQ9FY9qDwojQXijzysFGzTB2xVM1hUwe4GfMNRrd1hMGKuHtWtgGjQXWT8Gt7P42U9",
  "key1": "5YQKHFH88yeAemfjtrti8DwBCCyYuoCEgKWckRY93CMW9PTGLSxmuYUbYWwKqHd7CSYiE5pZ1cvoX1ebXHGoTRyU",
  "key2": "3jdipLT23VBWiwQ7D3WK2uoQ6k96zK9UvaLqqMVdcquDt77DEzoe6U2rkr3axfec2tFUFZcWS5mHuXSTr7zDhNG6",
  "key3": "5b3vgPZuyXEVjwnGJmAo7HkDpokpQbo41yqpev7tqjswwKjPXtmbvrtDnzUybmhc8JogJ8zKfNFBzNZA8qvJwxTQ",
  "key4": "5adGVHyGyoWZsdJ6wtnKwCt6nq9yhWer6yy38VDygo8Rqx8xBW35DaEdmJz4xuXEj6Z6SyDTUffp54wNr7pUvSm4",
  "key5": "mPvE9S2gE8wbW9JW7LF5nkbWMbha4aq2ooKehAbMfjbxR6V23HRK4shH4SJ3agH24j3A9d4379iMvtV5W2WjMMd",
  "key6": "4baj5rmXDHuehsDct2YVqQPpsJrAZGDEDMuffEjQiKLNkvogiiL2Je6T1TdumCRc326xJPmC3AuebtwvfRKG2m2o",
  "key7": "bien3uHRKaPrMGoCo42qeUkfWB2a3EX4vJ3XXLeiyynyHLkp77nFVZWfaF8UcDM2nr4aw2yBCoNH9iXfLaCyp7J",
  "key8": "2Ri8hjuNigXk1SjPPxXMz5PLsNgyXEwnUGvcnMnDHxwyFCnKgxfmHufUC22VgWaq5rQxVR7yY6EGTttm9jsHbhMM",
  "key9": "3SBCUkTbiQiMG8KxVkbYK53PWsWzUWpKqRsu2UnQ8GDbTGs1jrh4h1Ps3qQm9SQ3Jck2GFyEeYhwPNepBqC7PRM5",
  "key10": "2JF86wZrVEavNJwHcxpKmLcMywbU61PjHEk1g3vCAVDGwzbTnGA7oXZ14sPEV9yhqRBHYss854ctnoxYc41j3mnf",
  "key11": "4rmNVvTFqyntCtqQEKwF6RMggdaEktR1GEBERzFqSaQFDbuKwrGpqATygiBPRJhUZvbmgZk8vq5joheJPbNyphoc",
  "key12": "2mosyhqYC6kTkT99fycmueVCv4FN5dZgBjPjQycYtpTceFrRchTL2r6mxC3hKZKxBNSspqYQDfA291wDmGfRRat6",
  "key13": "2HDvgV8m1CTivbTDzLVb4ApQkxQzQMrsnPg24nsrj7Sdv7cBqJCbLiPQXTCzfXp7C716MAxayb71SjsJ4XRPik2h",
  "key14": "3ZSFgdvUNRrrXottoW67AHohtRaRyq5ekysJzYxruC4AxuEE4SxcRS345ncVghZGQCuVLmajZsW5s5UXSiNckUTF",
  "key15": "TDjeqNsLjKVSFsjTMgWouGhrab4KNp1qdrzkmwjSkesFDFtQrf77g7M6UCt2233xoxnXiXspbaFsxikVE6L59ws",
  "key16": "45EaRwfY1fkC6k8vjQZtT2HbE3qMpxDjT8VK7mbY1qNDsYymAZCmUKHi4dxxLVeKGkxmMvrqek96nGPw5jqkpi81",
  "key17": "53fHP5vxpiR8oDAHdfSH4yca8JGztsL2o2QCMDcYc1Nge6ytMbHH6oJys1BLmoBrK1VpG9o5iChrTAUDSn13aFNH",
  "key18": "4LfYbyTvdtJsTPhEpvchVPzYaPSQFXiG1aWrRaYrU7qk92JdnT2cA1LzMZuyBxmp9P7z1SEVbYHdtnEuxtcNVQPu",
  "key19": "3gWAGg4LuuXtnVZJprnCT1ew5QLDFqerzzVHYVCs2o1rESDY7xQkiH8pFnTg3YdRbhUN5zSaV73jfKwLiRUECVKw",
  "key20": "4cbu9zW61t8tp8k1fdmQ6JGE6SjYqo1zCToAP4bP6J3RKkdrMoCVbC48t1pnTkn9mfYp1G5YxdhPyVnpcL31sVYs",
  "key21": "5MKh2yvYbpdfX6coZpCDw6d28F3vnBveub3uf8P14fRNVE7n22Siis64YawrPGH3G3PCt4b7eCcYsBKQdQR59p23",
  "key22": "jj9QkvzorzGtnZChsNwnjZkZhBBbQaDTbqb3LB1zFjas9FUxdvf2ifFjgvJFWN82mnEXajZ3jUD1AXyJc1U2cHt",
  "key23": "2NU22zEfYE6Goj6HW6uT6LEL1iJYooJsLMngkbdHeDW6a8DRhQyJ7AfgAg4YzMi4pictoYhDpEyAXvVVVY1vWfnw",
  "key24": "yX3VLm1tsftFYz6urLhg3BbVFLZzcm2ep7vgm3n7dDinXNYesQ8GEyKbuNZ53S6Bf5xTSryAzmVeMyhGjGD6ZPi",
  "key25": "4FNzLdFVCXmcjaKvt6U2kY6iRYWrzFroD3rJLheMg7fuevV2AY1mw4UAtca5uqHjpCGtSLtmAKSqaSf2Jw4KRtDA",
  "key26": "3TzTGGAGrqXB8xa4rembTnZF2dZ4QDjMKSc5Furns7ztWppTmwuqd4vJbCRm6NHjs3964CrbTuBC1zw8k3KdNb9d",
  "key27": "3J74HxRDECJKFzBwFhUadywCR5ibw2gndvM1AUq9K32TNaaFTFfKTgXMJt6hJ4BX5kfp2AMswn9sVxoCA1F5h5ps",
  "key28": "4ssHWhVxuc1wwJQFiynQGDstniAyu2yj7wzzmwF19X3CSnmRLahjXGzj8wnwD18QQMCCa7sUp16QZGU6pn3WANmz",
  "key29": "5q2Y7C6ghxWjU5RGggj3FTad19jZMjJJ36xuKivFkJiYy4WWYS4x4voXzZ6HsSUdtwK1z25xe2ZUFqFERmhcioPR",
  "key30": "33Qv9aFDmrgjHBcF3k9hnyicgXkQf5yLhSFP7VWcabSS94KCcCPvDEDMXbdsNnKDoYLAJbCMBCBYZJtWMHQXJku",
  "key31": "3v9xmC1JPps1g5MQsav2TkBkyp78hqCNNj7CV2tU12tKpWWVxuVo9kPCcbqxQ52DF9sEFjLKxxtyGaZfZec23FjR",
  "key32": "2MHoASu3NpytKso9zgnbAfnjiwFd6h7x72zEmEF9uSh1wRn6mtKhgvMLDb41CMEyNyYUw3Zj5h7u4rDFwuteNUK8"
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
