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
    "CDE7W1Q1m5rX2GZMHbXiu7N1sgJRvVywbPrB2yBQ746gfPJD2sy6T8XD7F1UGikQj3KXgkYKPrc7GzrRXdhDAhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9tesoaQhnQjXcveixHQXDNCa8ShG434gh9yqPEP8ykG36x8TpLUjQQtj6TCVWVashGQqPqMr77nc93VNwHixYd",
  "key1": "5fM8ecCtQUrKN95Ps6rB7dPBzXfMf9DKGMutWjkuvfLt6Bhy38b78NZkeQdHZz4s5mfEDrMa5ewSGhGYDk8D1yym",
  "key2": "2ReHayJk8wfvqfvmXws9dyLyyRcAirnvnL8gwSG2y4cW1boyPDB2wPcZRfkxPCbk8tQYesD65gj8GRGcbdM4upJ7",
  "key3": "4nN5yoygtz94m2cDHLePD8hgbkuhbNqszey5bgTpsqnND6GwLptebBeBeYpKNF7521two5U4mUyASEr3p2eY9uXh",
  "key4": "3d6FWenbRwaY1fiEQGT8JX91yh9Lm586C2mmcbJgXBJ5me7dyiSCUwMMLVXG8otAuV1BWACRHNjgJLXMCa6egQC6",
  "key5": "TwABCg4fgsvpBKGDFL4iipHKqP9aaLX19QJzfETq5EoM7hDNBGNwqSnjAGqhTogQYM1YrccjknbxmSsz9hNrGFe",
  "key6": "3Zs9ZMQob8HHZNVdWP7Kt9yjBMifGYMo9Hn3WLaNrRb7NHC4tLMioc9kBT4f3XF89957moSWWTUnTPoFH6eyESPS",
  "key7": "3AqZbKtQ8CZnzBz9pvKz5RRbutB6zymeumxZ8kRXmgwTuGWF8N4HzFJJkukK8ziQonTw5CGUMsyECgvBRUDzsEai",
  "key8": "4aKKYokCDjjErAxuS8xZp6VyZExaugg1FGCZVueBDVnr4mgRTcBcUVP3TEC2vEGZ8x3DTxjgjhRgBh4fZ2YQEQfU",
  "key9": "2ym1Q4ij5VRq6KMkpESXcMgYLbWqrGGk939MBJMfHyV8fu6W9ZDoYQrpTSm92aX7zM11hB1kCpvXisWKdsMiDckR",
  "key10": "5VE4fxrBJxQv451a7pxTxk93ytPgtEGbHBv2eRdWQcGPofn5FjzhVkVvgUWJAs9F7kygn1yrGEbGd7MknaH4mj47",
  "key11": "3agX3tH1pcsk8XmnMfFV15BD2VGYKjC2q55EgwDMtC7Y1DX3ZZtzbY9GnDmCjUQuf43Ev4fJkGeMtLDS2M44RWSz",
  "key12": "64zuzZhAAiUjQYDuxSkSzX26sWK3LTJ9DCZScnCr1v2xe5ny932cxhJz76GkTYnLTXzj2p7GqLwrHhTN9EWK5Gdx",
  "key13": "45ugcMhWKrzpeu73ySk8yxzoo12VGm8i2Ly1DYKf5YDPDE7uwuKR7iezTrYWmkfXsT7dLgFWHShjQ7hV87RJzFa6",
  "key14": "5tY8AFjAds3QdkCJTkWF5k2cFVZfgFaaeEv3JWTpEXeEV4Ryc8hf78Ckx8C5omrRi38uUJanC2FPvSGT8mzKhSUQ",
  "key15": "4ArLBMRhWw93YCRyvhTnZ3Z2S68bJF7qxtcCfxLgepZLtQanEeFXvPFErnt8uEco9edFkSaoRo3GxLr9scoe2JQV",
  "key16": "yzzWtFqsnSXpP7bYDkbggFYcbWZcNdyBRqRKahirGZM3xMS3bbW6RhK3gNn9WhwCXGzx9LiVQxxTzqDd1LnExiA",
  "key17": "2xHVWNC3SUxmhVz1NULzZVqHdQxx8KStCPB1GFoC6QRfYzqXPjSmp79VTk95upTztUtVjXpjbUh19K8kQt79quAt",
  "key18": "3wYTuPgNsgZN6AwdQwHp8ia7qzxCtRgLZtJTtT5gqo9MCQPvwvU4sNmwAgP86QCJGiDLjvtL9LXfq4GkxrxYkJ2q",
  "key19": "3dAKCFvaN2hBxwFNGuW3TLoXwKGCs1SHuij15CPUHSHPTJ3ghTWdfz4bKsQ5uPr4uusmuDi97ycxXdDhsZhDXUcr",
  "key20": "4UrDhpZ3b7QMGvuuQNN8TNDyH5APR8qXkrWWNc9kM7zHLaUfoEM8RtsvjP8DWX6nipYujVmmBdJQ94uysEmNA4oW",
  "key21": "2XWBZQbW5rvQhYyEhkYwKo4qeND5Je3AYVMrN7ZKMUwhWG8PyrW8kogYtcyqgjyGsPfA83f79GPMUNcqkEdRDQFA",
  "key22": "2gyFdbWfTYeXw7Qb8RhNRSPBUZGmj4PNo7SSpZ7McJXucFzuz1aJ6yMkvyi1ybtinMntddg5hNegBDxAcdzKDc7S",
  "key23": "5RUgMg26SHZWTGxs3UHgBpaMd5k27R3HVMbAGx3HrtDoJFEPcdHM6wRZmpCiMkc3UyyeTBFMrB6Ehv4DupCnmC8L",
  "key24": "3c5shJDH2vJwCu17bcQVyDcNr8b3jCyzSEz9rxLf5TdgjgzW1PEvnfiouLBu99R87DqyVBpumEV73SLWViRtsLvL",
  "key25": "eEs5beGAsWC435aFaiCqFLtAhyczWZUFZ99mSzrJRZZ5ujrQ59gj9bfdLC2gQGYGCroSzU3vKoq9W5UaUTee9BX",
  "key26": "3v2TToyLXza7i8jibwFR9UqxZVtx28CKcdizaWsJreD9EQMW7kik6dbGxSkSMwXBg6VRnsdNGfrWSH6hwSs6y8jB",
  "key27": "5qz7YKjqDGifrZ2JskDWCxvEqfdKwTHKx3cszjQaqWfAZrEbZugtvF2u3As7RwjF5TFn7XkUE1mhfFX62xso8eaD",
  "key28": "3cr4FgtnobyPSCurWuQp7mhcvuJ8D1XGWDfL9WDJ8pvj2omhf2n7oSDMjHszcUYw9q7xj5ZUgkHtrcfs1GkmJBtJ",
  "key29": "4YUxTrTcXVzstVb7jChiCYdLabAQUTysD7yFVAzp3arZfT9z5PJEbag4s1u1qFzXbpFUVboKhB556D3MNkWzY5xN",
  "key30": "5oG8ouEzFUhyFD54x9KbXLKZTEJYX5NyBVK3xYYBKn2hM7rhWu7QFg5JZuYBSnmuaZSVDbzAUyvhasQMKo1Hbvcr",
  "key31": "2AAEVPv4ua6hNjMNCX9M2nQwvp4nCLh86o5iRnnrTHsUgKgWQr4mPjvFZnzwYyEWW3UVjeF2xDmneji3gbeoo859",
  "key32": "3bbA8GZvxueAitSeCYrKKCPLaKT3foRvvnBhDNTd6nJRRk6p7as89vmCeCk19e14otmFBSnNW13V3z8Yx57KDDbV",
  "key33": "3KHU3kX7m7kHoAhkZDt4HcbChhomnaF4PqYkLCBBMejEJ7X5JWaUmrWY7nYL3x1YALWzbH6tsrTFq9K4saeQvtpx",
  "key34": "3eTsoqwBq6rcyixfKFejP6yR2iYaCdGRXpxaiqQHWFCdX5SFysq5NNwMrz1xMGcV8M9eohpNcTv6k9tXMmonj36H",
  "key35": "5cE5ev1yLEnHKDuNk5amFBsVnUiVV62xk5v2G7w68VwroLxiXsb5ZzwhACPu1eot4FPJZ8egE2NtTkqSfn5DAdVn",
  "key36": "3n2qkgYGFvMCbzhodrixLRBhvJ4akAKSDdvgQ424GbNByDnLXhTzHmpoBuvC6T4nu2pZo16HBGPYP9GCpuM8sFTf",
  "key37": "wVsaewqmdqoYk1SWeMVBzDMu6WhuhwgCsrc97vQZAahMUCU7TEQbgwhY1uYM7rydrCTCQhhAiwwMYtdJAEJ65mf",
  "key38": "2jeHoUYREFYTfYdf4BDPWMT4vav1ixxrW6ePDz8PX2rf7WYS9B182piLeqqtDvKKB4j7N9tj282WNDTyAhxsPsFo",
  "key39": "2zueoPBRowUVtkKak4VzQe63dDTeQTv7injnfpvr6piuNFosBUDiU327Xcmr2aDtFfr7pB4NM9GAPtWvEtBc6MsS",
  "key40": "4x2YUz1aFtF7RSBJrc4YyY8VDuLgmbX3eZfeeGH3piLKFzdRJ78yviVXuvgSykv5DUpuc1Zac5YygDtoaMdi4Ytb",
  "key41": "2WygcZQxeHWNWK597f8L8Jrq56nUjPMYro9awQTRDjrz2rd5xZipiJ1LzUTsyYUBYCYHXGXwGqJt9gprd1TmVRAK"
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
