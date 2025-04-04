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
    "23wXa4G3fTXmJ7ZcXryK5Pp1raQewyBYgEvrd8jkATjNv3fowAyJAxL4o7KFK33yNWkFgAxB4FWQhK7VTJV7rpN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NR4ddzrcdLowTFWwnqshZuyxeA8zAQBM66wv9LDsRCPMUV88WN8Zgf49V4bd8h2NZqtHiJGNkqvREQ4ATVT6rwf",
  "key1": "5w1X3g58S2i2UpCKBneYXKVqB5NQcrrQXDjqU4LsCi8tEvrgciXqzVz1dzM2BmYwsW2nLtJqWGztwsSSuG7rQsHG",
  "key2": "vfmWCZ9kW9TNwi36gKZ61UcXw8jvgEfzAVHPdauWrRrEbwZqodpmSm1UsHqhaD2A7W5gnfDwLLsrFEGMfjiqRug",
  "key3": "574zHNyB5VsYTZAdww7L8tb28oPiJUmkogCwXVANqKSVYaoP8jBgTJVZpm1wa6Xk7Ca8arT2KTAZa8ALTcvP8Qe1",
  "key4": "3XCPgRnDD4JxNAc9uxxjocsBTycRi8B7fhi3XB9TaHdh9tp8SgDE2c8AHsSJesboracRhWwxpoUnks3xZgXNGh3P",
  "key5": "4nd88L3VuqptdXdhUL1QDdVeo3g11UkvGWXVxqJ9wJ3u8N9DWGM1LnHLJQmCmMUwzxHeiE9JovPhUmdL1ZCbkcNi",
  "key6": "2Jx5EkvnNJ5fQJqzWJ3zsczsfKMqNtdKqW8t7jbcursBSL6G3ePqomDQfkeKVtx1CtDKJrgMqSzh2v6C15ZmiL5",
  "key7": "2hktshQ23RqD6ZhGZzAK4WYMP356vjHbic3ig1wjx66vuzN6x93uJ4JnMMjFQHTFe8GFRk8iXCrG6vCrDYdf6ys4",
  "key8": "23kMZTshxTkg5CPkQAo9a2ZU8NJM4Dmv1MT2rRf997Q1yeuXWHK4ac4fbzDuBQ8uWBRm9oY6VfnTphmungAHyzLd",
  "key9": "xssnfpZnusigKQEjfeMehcmY1g3MfYyWAgS1sz2kUCWo7HsvzvQUWoqQP86WB9V2Ctkdn9yaycCgV8NsF5RfywY",
  "key10": "G4dWBToD3fsAmLnuC71okETz9FbpBsDgSMsgfH9hnaAZvAnuBRLuLsanhjPmWeDz2pWaDyqF3eXSdsxMU6pNkEV",
  "key11": "2UbjqVeopQK1AHPB562WSSY9g5xQDrXGUyrx8hunj256epQbCmJBGX2AXCeB27sUgQNMC1b14eVuk1MqLjGK2jBs",
  "key12": "4PZyJRfXsWneBAH1ig1hxeB7WgzhP5M9ebsxNCSvkLpfhSL4nCw16CJqxDCLuVbvmizUn9pXRk4wr88XwxuH7TwA",
  "key13": "jNJtsmBkPJKaPj9a8eKkrssL8SpRyKX4ExYujvkQqwsxpq8G2fHYdn79ZrTgE7fPNrFVNpTNeD4PSCeG8sKpV4V",
  "key14": "3QjvEGYsHY6N66E4W1PFfGfKXh5C23Mev3L6VHtVsfRstWScrcbJg8xD6XWRp5zUSWetcLaZwgMyigkBG815KhTb",
  "key15": "48JRjafmHBVis9BD4kkvdM24sFBt67fNcmsjvPEkYG6R4qKo7XVt2TmyDzxzX8xRVWqSb45QK1YAV6mqf6avnbQR",
  "key16": "4K5j311kLwMzWjq1cZ9u3L2dy4o3WnCY6sAd9jMMJySny4ArJSxQgu6w4fYTDEPJ4thZpXTZxmbn4fiWtHoRADrC",
  "key17": "4yA8qsV77JZSZFYzbibWvbZ5VkDeEvLPtLyvigaRGaPx6LLihY7AGf1pR8grz6W6gAY2DphK9zRBzykVoAXoJTEc",
  "key18": "655xnwGUUNCsc8zBvmhxk3J2BRgrFT1egr2N2dydQWNLwExhNDKA7WqsKnuTwfa8PRYMXGYo9vEUFUmsXhUSxwHB",
  "key19": "2iLqiNtb8Mp1RDFNYUYS6TLksfA83oosb5QBAQvzD9hyai3D8A6Wtpg7nj17CH2dFEj9xQdNuGzUiDTupYwE9jyW",
  "key20": "tAm2UD55rJLXrPCJyHt6qnp8SYonoYAwEp7ttwCTfNVAUogvwhtTu21ockaeLUnCtYnWbt2EKP3UuSCBxC8Sutr",
  "key21": "4NzdABxuNaJ67ZnmyqcFxB735jk6XfPZsbt7KrbgGac8BCzCzKYxqnRSbL3DZAtTxHfwnzeSX1VjvyaDowQoTLg2",
  "key22": "5qpbweTboxKZddnz3RpBVhSG3QYjehhjsdEynRJxZ48AreZu2YEK6jcVnu4HGXN8UVheeqVSzxTz6fGLLHLLTqEe",
  "key23": "aUhruDtTiGzWk3gcB2Bucvn2BN6JDmNHJLLsE2kdRW3Cmfai6PzgVJw4pVZ4z8f479xQCWUAKtXL62pC9GMVPpB",
  "key24": "4TPPxij5K586aX1Qepb88Eyk6Q21mwzpSwTVQSGzziFkg7SEac3H4BZPyG6ur3e4JbG9H4MhK9ojnuydQSpkhqRi",
  "key25": "3rtMAGYR6oo3JncYNKkqrUAZFfrULc2CAgLGmFLbLzuva4mQheaPoZmrZXnqtZUXshdmCYM4H5RcmMMwn2wLC5Lr",
  "key26": "5RG7YeoB4PXsodGSSauDktgbsiTNG5L3rbhXwMe572g9eeJvbMGZakLtCnAG57JZKdGLG7tnbhMb2kdPHzvwC9Mm",
  "key27": "4nrxfQUC1CsKp4zH35KyPWyyzo8xf3R8MqzNwq7K2G9HvwDi6HktH36eZ8KZmPULFtazt9jkVVZgkQB8SN5haAZa",
  "key28": "svhKJe8Fm88DcC91ePqc1fqm9WdX3FQ8M7358Z1pJKez3pngYQFZMyXkbe8cYN1rJCUN7DEpznDRMQ8nHc9Q1St",
  "key29": "27WAVYW8dpSg8CbNzb8hzzYfxPz1J7fCa23ZwqmaXxjdwEG1mU7uAZgsA8oezGuywZt1L2gLiv2XkrZ2AmAsF1ve",
  "key30": "TYz45y6GKag9t2mKnucMdZHHahL2karpKCMhSfyaAnpfKjACfRto5Wh1hNaB3Jpx7VWPMBktf3tmjEsEeTHcNYc",
  "key31": "pyaE1CDbNazJqG4QwC3TyDx7FGe4kJ6p42kYzMBNQFYbULMwsRMy3Zo9RBrPFjEhVafZutJUsc5FLZW3PkZ4Sve",
  "key32": "43osqtJAWxA7dSZUKsSgjiQY8XrjNjUN9nZQ6VV147goMNhpCEA9BPRp6Zgvpj43Pb6XP5yuJpyJJNxZkWSJATf7",
  "key33": "4WQBEhLyK65zhAii1MrMHxF2sQhKSwLSpaAk29o4AYKp81dZZeh3jebghypAb1Ygiwwpy2jWziY4qoujsRvLcHFA",
  "key34": "5G5TTWDuYPy66ydje3NJPLBXRexCkaK7XUptVZaxxcvS2hahaXgxRunra2WKUPh1zbD4bgJYR6nUhFyeUBhKpwFA"
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
