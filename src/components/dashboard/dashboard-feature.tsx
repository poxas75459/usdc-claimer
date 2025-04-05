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
    "3B3V6eJK1gALHa1AWWC2HabHKuK4b8uNe37Uvf3ErCv8ropDPDCSVbnRtdrwQ7g5zzMvjneJnxoGvStdLET1XNg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qhg52G1wMt5NHaN5gvQ1FUPtegNZKXWeMyD9V5ctmBPmQuZYn9mrGFHt8cjmRtbV5Qf8mo24Xf2z6HxiVtTdFk4",
  "key1": "4CKPjpEPKECVveHfzJSFadRnanVabtC9HyDpTHtNmbDYG1JokY2k526uS6sQ3mYXM1TNeqiyx1yxL9XeYRZ33huB",
  "key2": "5kKhfCHgQTUepACojSMBiu9zu8zmViCrB4X4tCeGrMqeqz8rrqdACuEdokAGfY35s1SHaqjoFMpgjfFa1E1tpSYp",
  "key3": "2mFXL6dBwbxUqumwHemzwKDMnAc4i63Dp5Uz8yJxZicp1mo9x7Dxjf2vkmsscSVbkb4CEmV74NEmkYs8MSvZd7Mu",
  "key4": "27qTfHLuAQkMwrsmvG7fqoNGnV6FWWnwkjdGV4uGH6RmqdrPj4rmp6yDwMK5KRfVG2WFCYVL8BvCqi2vZvxj9QZ8",
  "key5": "gqfxPoYLTi6rMhJX467Wz68EPg9kBzWWEURFL14n3hDqGfxo45bw8jashcQ58CuboG3MqsiyEaQwEVuZGUoEVFh",
  "key6": "3x7Y5Mi8X43H2gQuVxx5rZqv5nASfRmaEGYD1YZyph84xFxvo19YYD5ZzSiWpZmaSCcRxbD6XDq5x1kWbuuGV9js",
  "key7": "5V5qGA1HVvWQyhtkuonCGjttL9hZkyUXNd1xaLY1dFXq2Kixxh7q4r3sHDCf3YVGtwgzPi8Kx5fET5YQkad6rbCX",
  "key8": "37QEz1Z3d5T1cRDHHbiKF7oQVbRTDBnrrqD9NGo7FRBvC5mdvDr946DyttE8o5rkTC5zSohqgC36rPLqkzShNUr7",
  "key9": "3f4aeeNtFTTfprw3zyNS3phVfeQfoHN6XX3vVY3YdYb6389GGTNCtZaH5wbgSMP5gvYQCwQWZJbc9gDgyVcE8t86",
  "key10": "5aKpsNZDT3V6VyP1RgCNzvE1RaXRnyCXqddKpg1PKznhawmMjKcunSk9y9yRB5Ase341WN1nkjHyLFswYs53ochH",
  "key11": "3hMQc5gnnynn8YKNg3YyXUtUJQE6zknDNcLLnoqhahsXRXxMzsLA21N3kvj1kVviYaQqvhvhQW94ewN7wHRscRTo",
  "key12": "5XURbUwnu6M9KdLpzuZt5u9BCc9TkfjXZWyLsztjJxs6DFTWLZWfn4TGULSQxLMn9mckueEwK3LX5stML73UFPa9",
  "key13": "3Y1VmrnyskVUTLua3xzhZ9XMEquMY3DAdpXAhCq879rswB54RaDFgjD7NQVJizA4kZaAYhJfY5LQb5Vg9Vg7wuBS",
  "key14": "3CCLmMJwpwafknSDvPaLEiJVDFD3HwkCiWT7HdiHw1hsTjefhDhEw745BFMNCVKSzytYF12uBWcW62yZWNauHawt",
  "key15": "4giVFunwz2EG5qKRuLE72GaMWTs7eo33ZtwkTvAqkYd9BuDHWjVaJDshDLEuntwNTBhz891hf1USPRNHooqFzq9K",
  "key16": "5r2dxV4qubWGUQkX8eJrPcu3QsfZ47i7gqTFtxRFACZAvKtFheD1ZKLPXgtKqghEUhC7CvJVUtS9o9L34PfQPJwc",
  "key17": "3YFdUQ1sBRqJJZGtXLnixL71wnWJx6MYLuvodiqNF4drW2JkDXxb2tvnbB6jTEnA6KLUKXRMQdG8SCCa9JQ4w2C6",
  "key18": "5WG1JbKDZpdvi13JwSP5cJXTnd3TBmeUh2PEFE6bM44CGben2gi6BMAhZkaeW1vRpoZPfAeZDPPUU4QsGKVK9tbE",
  "key19": "3UpeRSVRDp8LXAPJ3Dit8iYzqHt69Y5bh4dgANDHW3eVVLHcimA8nJTzcwQTQ9Qmo4dwX7xEPMAaoAXnzMjqZmiN",
  "key20": "5knYbTJThYGySGtA1SoF1Mmx6zqNgnbr2TwYJEHLVoo3veoXQeT9FAqjBhBbU4cCrVM1az7DZtMWD8PU9kLbjuWm",
  "key21": "5FDUiArxDyvuYQ2gsLRm6mxsxQhdPSqWKE396VH4tWkNKguqmFLxJ5zYCLqMYkUWDRR5KmLGfg5AbgEPPCfvuV6m",
  "key22": "irdaAEHXnKtiA49GzCMFUkXoSTAvavuSur3hVsU3UsKFSh9VrkpahAUsuKT6WUWBUYsM6YFDTkoTcgkrrqekiF5",
  "key23": "433d2s762aR9Lkz2kmRTeHCUUhwsGe5KzLsrJd8MfynicKGFFJB1H4SCtH712jTvPZZfNv7uVHKgNB1cWMM973t6",
  "key24": "5F9gw3ZHi4dutcSLJyxRzqMcnj6YtHgWfWtox86YSeSVUHGyvcxe9teRNSeChxaaYTeKxbiNsjnUnniVQg9LYg7W",
  "key25": "5VGvdeegEprXXAHrHSbgPqdH4BbDUVh827He9jEXudrDpUigL554ra5aHP7VbY64SHdTLjAUruinrPQBpM57aXhD",
  "key26": "2vNUy1QMpJt2RsCFpiV3QoLi4rpVNKQvNQ4rJHZP8L97phLDc66oPyBVtiGEULWczigz4sVyL2fWttrxqAw7fyEG",
  "key27": "54a5MD5TU7yc8T1Y9dGiM9HkXbC42dyFeFwQXVfLqCFgaY2VssD9jnJceMDJubUFvkjQGSVb8CQjLCidMEvbMqm9",
  "key28": "4spQaKemktG1HyGBeCa1af1VpanzcVPRyP3L8xxTqsd9hdUTiNoYX8LNzUwKNzGeF1xPHMnsqMiCzUDgzL7JBtn9",
  "key29": "DnCWujxxt6yRXgQR2WFZMQev62Na1FXbvUcXKk5qRhbXoBSZ5jvR1riPZ5aS7kjxeCkaw3eLSAFDsCZdZ876ZGd",
  "key30": "4bJZUhwzdqtvjPLh2WU9FELPdLvKuqhJRDuHgPWFDAZWDM6ZcoR2QQZtZFTCckYdV6MSWBUQFsbE3GNYuKeR4U86",
  "key31": "3hkzUWnHPKh4A5Qtj96YkJDNJTKYgsHuSvV9sgaPKk1ZXZwMhCUqyLQkMLSYrfQB4FxWKtXxeTciLnENGVwSvj1e",
  "key32": "67Rs4QqrAVYCmqN1ou5M3wv9FcABCQJWjhfKR79NQpLfjh1dywEEqdV9kZ8N3qr9iizHWPWzMYckNwq4kNFwntBN",
  "key33": "bfNV8T13Y25QZG3oyH3jpXfhCn1jjhubfUxTzk8GvA6JLmHGdbmUqJuU8edp56HMJaUJ1Q435C5k7XXytr94CcQ",
  "key34": "5je7MD8o9Q1QKXMAsHR1Xqa7FVgUGRDpFqX1g23wQG1wmiUiWjiGybw7YcD8xyW575YTNTUp7N1tdB2R8GZhGjpZ",
  "key35": "66VUTJZM13B3vECcqVtb3m5EhtnwHvsDfX3oGuxEC9cWcpTGDQukbyJYnmpimZo6gH8apSvSSrAGeAcGJWq9Rhmy",
  "key36": "41XXswMuDej4DUF44z2eY1pEn4c8pjAsN3fn6x9M1vBneUtG2StiSXPeyi2vbTSwR7sPTAvHbeYfPqaLDWDqz1nv",
  "key37": "28VDd3pvZ8rUYbAvLVLjFz1GU5acVZXDyLx7ZxYsycVGh4Riw71Gxd8w3Y1DxFN27BByjsEuAp1Y47UfKY8GFgBW",
  "key38": "3dTHP9Ur4nbM99x9Lo15SVgFVMyKmHXEQU8SpB39db1St98BbVwepwabyKb6h6pRS1P7bdcEPRR24cFKiYFWwiHi",
  "key39": "5gHn9x6U4YsKtQH79XK9bVBFuDx7LP6896sKSUvuiimMrXUtJXN5a72vtQ9AJdtyg5m9cfpkf4jr2dqoYMfHVG5Q",
  "key40": "5ETAPRcgXb61BBrf7d2rsBqenv2BdzVCodqzWH6PzRZuiv8YJD8XANRnapXyr4qn4ALPaKau89wTWFbYX8VbhzXN",
  "key41": "2SoHzfx8CQpYpMPMNFWDTpF2uZFGhveuUXScS7GiCychBjMjEti6upJRzGSNYuVfJvLq5X1KaPzAELE2kBVs6XjG",
  "key42": "2xefRD2sUtin1a3MDDQCfACtJ3EPV6Rawo3YWRrmnSPuRJZJzdqt3en35Df9FfkDyv816EpYp8FWUivjixjTZErR",
  "key43": "3HrKdZjZTTYZdkZUumdN1f584AUGghvsdHSAQNAM1taZEMAVCgbFkZzghKznyu2jRZ2SfX3mS2P7CUnAgQpydM4o",
  "key44": "5qexJ8bmZndashV23NKQcWyRmVgYQ7gN7iDbXKL8nkF7PgfpTceMWCNa6JHkFzTaDzwPpP1zstwzYXYmirB1t1wb",
  "key45": "3uYNTDmiN5qadCT9khBn5YV61BwXuELGHaoVVqVs9sd2hWQZ1nZbxHuKeCKEgEMQiFPid85czxEz2qoPdZbzcBh6",
  "key46": "uWMTbzrbDrtY72WvpjwrTcACukF1Gp5oL8eDXgRCW8Ur3C68MaqaobgrDQaG8Tp6R1PZcvLnKVYeaojpRE2AEs7"
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
