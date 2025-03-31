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
    "2LZVTayt7vAfTjDfVudepVjUvSCcm3mKrmoP4zFHLUkEPdK16eqW7SkoBTMHuKuUNsvc28bmpFFzaxiHQqPZSj8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfXQMdJjcb84LwBoUWnWYjnGFxLpWMDn61D3kyshpUGHnmP392HL82h5n9XAn7tQzdVrJqVAgt2VuBc1hqyWgcq",
  "key1": "g5USoMDoCCZ332FbFE1HbL6VMFVgWcRcG5irq8Ko9ZhFwwJmWfurqP4CetimGnFuKEuCUt7VqHBami8taz5K1VF",
  "key2": "3wpDHPq8D185rjHWbdSsfwSRxXUBVnUVLXekAyQnpKQk7mdRh8z335MBTdNp15i1pWQPReeUs8bTiMNvCmvxrdsR",
  "key3": "2rnFsfv2NSyi845Dzt4CDJKtF4vs6e17XLUjw6rZLDUhTeMP24fYFHD1CtM8PgqpX1ia35VJoXc19Fg26bwAot2p",
  "key4": "3KUohPADrwSkDk4ikt5XD3EdWEwNiiX4t7F1p2ncg6CWrkfSCYa1Dr3qAKjP1YXqYQXxJ66Zo3putLVX6kwEEA96",
  "key5": "3LGeuAFNihUPuYqBMynJ8728Ptpc8va5UPCi3F9NrDuMPjAnZMnCyUWMrTrw7PGUSizxyjNZDTr5R9ZLTTdQhxKq",
  "key6": "43C6MAa7vUWU78y8mTZsErVvEkLUCUAGmpbGvLEBSeksjXWbDWiKeQsBh6TTV7mKTxo3oYY2AxYtpAjph8ctvtmR",
  "key7": "2iheJEM4BSqykdcuqv46qcPjN9x6PZJAxCTVJ9PW2AQfiuH2USr3rtLhLbizEG3HjQqRs8Udr7J7z9VQCEAvGGK3",
  "key8": "VoBFmCcejFpteFEA9PvxYzRwKhSQacq6qyqik1Qzo546ywHeJ21Asvay5WvRwC22txunExtK6mXrJ9QFZjnr7UM",
  "key9": "37f4vgN8XULyMc6zuqu1DQz6BWfz23hyjQ8VarXt2CioyTU9c7dwvVrekKgCM8Z34zjksnKUA2k12n7HLy6zh8ex",
  "key10": "3UD7nXkvhQGF93HoDBDE2Fzsdvvd4ctnhTbZyHPCLgHqAP9NknNeawNTAn99uWRJJNUkZe4La4VRcNdFYph5Qn2e",
  "key11": "2GvfFG79U6pPcYzXQ1ZvYedg26e8jejya42y9csTqgWzCckzeZp98qG3FwdEqkjpKSsxRAYZ64HQz2k98XLz4AqS",
  "key12": "3kMX1MuSEWcQSpwLwvdqdTTxv89ARWpZeZ8uGtHvvM4UbvNa2EfYSixCS6GKenDvo7hFKCFiB6KTfw1Zi4MuJFo6",
  "key13": "X8bySeFavQUGAC9yvQ6jamQ93Go7HzKb146iCNktmuFoQBHiLCx11diZf2jgBPb2tm6jGmbnMKHExTRE1fhGZ5N",
  "key14": "3yYvkiVaKzQVuso6jPiFeBhgkTF2FRSqNUhnmToz5TENoWdxVMu6n8Na1C9C1zbkwmu8VUrJJsFvMgfJPCPvWUJx",
  "key15": "2Th98fkP8XyyXBNj9SAnsY7tSBsPWqz1vadJPrGjBHvGzYGSVQAEGuLxxowP9GD6NUF3sn7zj7uekd8sjggBNfeN",
  "key16": "4E67X45726arwEVtRXmm99KZTaPnjUECc22xfqL8xiekpbFFg8zDsdmrsZd5cwgCDqah8NyjHVuoLJmy2iFVjX5a",
  "key17": "3ZFeqYCJA95fq8LBjbbncrtfEeBFUeBTtNi6ZfVaexKggymtqp1rxDzwXYHYPaJubeaR1ArZa7YxAs3cgEVmjphL",
  "key18": "2FUcV4TtJMtuDEfCaszzBEH6tkvtmxnEaW9RkuXXjqkfycw35765CYLHPcJFTaVZa4767i3yi7w6HSBcCjr4ZwMY",
  "key19": "3QrZe6riLcPGKJy6CxVSnzenCjUSwM4SHvJEmEX5HnypMCj5dzhjRpUMaJoqmmVG5hyXKBbTG9kNs3aL7oBnwQoy",
  "key20": "3NTrgpwsLKsQ9KqxcoGqRtH2Sjk1AABpxLQHabZBFFTQkqWo9ZU7J9BtsTdrp2KbyXrP9WLHGQKwJKF7r7HViRor",
  "key21": "2W3eRmaTDAYrfJgGC731rbxvAFWmCGMbiV8VhRzqAUcbHBs8HJhNJUD8BXesPunjnYsMrAARREwXazYr5pfLzipV",
  "key22": "5fABeaJoYfwo8NLCB2Ucjz2ysLVWKtWY4x7F273Wy7hwrUrzeu7KUmhBCpVJgjniVEUGsZPtYC7hdxmL1njJALcR",
  "key23": "3m1hENSSZWJkDwAuBBJyQWFcgTFYfERknA47GzX7id6rj4sv3MNWQBkGh5Q5d2ED4GozGfs21mksMKkMFgCuCUPo",
  "key24": "cqHEGjLFcZg4LRd6Ke3mUbX7Lmwng2SKXrLGHhvozzkEGoNLR9E2C9oDrmGJjNUi71RuGGrv44sj1WkxdRhfbSm",
  "key25": "y5sDXH5DAuy8aSiaLcSyqMvCp95htPS6uTaDLBBSaEgALkZ6ZquwCqU3VQagAEr1R6LxStc1QdMVWfwniwaEWnd",
  "key26": "MhDU782o1jVMhugrP1CuaXkCBLgWmTKxK97bM1BiDChGvfzed1iATcieXbcAQ1LH21KszvDGXdG2tFUmQxnxptu",
  "key27": "5p9nJAohc5pjcAMEoSfPyPxjY5FNJvRrYZwDZmSH1TdRSRnVjUQLrgWPyyLyW84kmoqQ842WuyLPLaBARkrhDEpc",
  "key28": "3fFJKvFBJ8ZEeqxX7svCe487fSgJxss43kVJ96EXjQ7KvNfevChwYPoopaVdbD4D8g6UAYrZ6SqMwWuF2yoivB3D",
  "key29": "4P9EDiUH8UYA92AvLw1tSfYxdj59jRbtFkjhpMF9WfP4yq5dYA1vUf8kpi4t8yAR41osTXH9JMLVpYKfKDKkFrL6",
  "key30": "2yrThZgWA8LLgrsA6yZ4xPAJ56UeTCxdgMphhwpEqGUuqBLWAHNiqPJD391rem2Sae5TtpjMh2uKDfBExeGuMeWU",
  "key31": "66p6whKRNLwa1Uz6ntJKeKK1Jt4qkEugpdqUfDb5Hy25aAADEA413akw3Q6KW1RCMbAE9bNyRqn1HURddnA7ncvr",
  "key32": "hERWUyXf7552XM2uNediBW9wBR1gryZxxWAgyiQESiHFKu3rJcme5VdiTcNh8efJkXbZdhGxRpKTzDDWRCBVAcF",
  "key33": "5dt2Remtkasmu3STQrzTNf5SH8ij2WhvAPKZtDj1yKPPM7fpMoS1FSUKX8xQvoq82bmKKGxMqxSSekK2Q6RE7eZz",
  "key34": "26W322EdX9gPDwr6n42fRv1tMN2ibEgu69y6YRw5QNXLirk6mMcaTLaoFgTynqCmKXZQwZcjqVsGmrzbNQn7hyY4",
  "key35": "3PeQSsFSkfUCY9DzxC2qzBykStZeoDtcdqoYG4kio7KkryS9MMacd5z8kTkcMMRXHKYfPwBvyM8jmNzb6UB25m8R",
  "key36": "4mfyNk931PJSDcseE5U6xUCT4mLFgog4MaU5WZ93bJWKNz6jig2Rb2hb2jyC9Tptn8av6saLqciFBqqxe6Y6GobK",
  "key37": "cq17JpjkzEvycnS3fMGf4wrxQRouvSEhxrd9LmohGp8Tt1dBBnque2uzKFk686SUhGtaUrU37bJ4KvErm9uX6Wn"
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
