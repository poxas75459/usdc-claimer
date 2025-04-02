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
    "5CKk26N86FCQpYJffW82d6WZv7QojTvuLeWSvaYXnXjoriktyfC34EniVMejgTVy9kLkFZfcVecqYKzDxdXEFXST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqRGgsjwPXSLRPWk9MbVkfq4DFCCfSp7ww4avEgWKmCuJAHAjq3p91y46q6QnD2bYaavu6ZLWSibcAVhsLT14W7",
  "key1": "3WRn3SuPL9bh1duQaqT4Axh6TLvPLoRLT6JQMYgo31vLMkEWXzm18oemoFHNoEx3oLcCvEFAYCGAmDGdcZLuVNhJ",
  "key2": "5qYmfR6rQn94dEeEQkmzStzR6bFaPj3j6yCzsphGQcX2hG2XCYfnCstbaHpg6aMECeiHvSSEbTAk38YMr4s2hGP9",
  "key3": "7aMSwiS2nQbiDpMzDvjVTEuvyNrMSBAgQGEwRcbJTtXWTWhyGvgQDZYAimqr2KgfJ8SBANq3YqQec3syMXA6Ni6",
  "key4": "2MbbwxHyTtp22dqTscBSh7UdmkxKJuTJqpursGFfZV4VVuJAPqGfbw9imaTriZjMJZ9N6DuRmAZdua5X1HurS3Cw",
  "key5": "5kdgEou83goRQp2qcyHq9pPcABd5jCEM77KskbiCBzSq5nyWBRUpFEjEo4AGBncjju1oZp3V9aasCAUQ7Le2WSkE",
  "key6": "2tRJTzkszDVFZ7hM5fjBeCqiKsa1XWt1bhfTJ1vQT1g136JUvU1GxRud9NRHhtKhkneVWmJFkTKsGBsc8SX1mNo5",
  "key7": "HZrxBcyx3R57uUkF3mfv4yyoAJhLSoQMeqdFTy5XuVEuoS78MYRKGsui2xbxjs9cB5pPNBU43XFWw39gfsCJKE8",
  "key8": "3odyQuZX5WnAjQWvTjuZzsk7XcMSDac7VcPbovtbNcpiBkqtW3HFhJNZu85rZNhkoQ1fJZP73uYko86hMjaxbgAY",
  "key9": "4uGUEzujDGapS2F3ndvwtUYyVjrDMByGBGcUmQxt1D7tLZZTaAUEMofUxPFS6rktfQBVx88V4W6d88ADxurawRzP",
  "key10": "2EzqMVQY2dtZ36PEwrrF9oxPCAHA4h1Y78hNEVv3jnmYzDSQjF4xBwzjSBfQeRmcCsic42rZsAAF7HkZceTF2J1b",
  "key11": "2owY9fDaynnqxZ6gGravFouYNMT49uPDgW263nGiLzmt7UfBB6bDgu9UfZ6xY9DLp2CwgnvyMPKjLjoFB42qZMgx",
  "key12": "4CuJCx1gLhB7JZxwQzbAgVeuNszESBQprFQt6eDBBAL9Lx4PSkU1KZNVudPrHEMd1PzgNZLPoW6KaZwcEBTrfaHL",
  "key13": "5ZDq6XEjMVK24X7YGGcrDe6MMhk1VYP6Wp5s6jkqTDBBpTHQYM2sqv36xQnnvac2qdr9oUL62okcQmjrxxjMq7gH",
  "key14": "yWe127ZpBBi2uW6GHoPU4XtSP4C26ZpH8iWbkkVgbMuDndXraZtRDMwJiEpqCvzvM3t5MiHU5iLykqfBfv2bnod",
  "key15": "5su4LNX8AkEzxojTm6SLhD24vyVSHXLmmLvmaPGfAbyVKwALPckTvndqjR4MUP4XzbvC1mTCLUVJck7wg3mzC2S4",
  "key16": "5RJFZUhoft8ZDUXMF7HZApLGkUStH6gvhKTursP4mY9AqkzzGmwoPf61XG9ikHs9DdRFSLZmmQ1m2gK3MYRi9Bqa",
  "key17": "5idSV3c8hzzn6kzcgy57hLN7jCoKednEHni4ZEKXuJdsmmHZcfzu7Rej6G12nLQ9KmhUdneEQX5BUcCnScWWgrEu",
  "key18": "3RdhyR2aZBzUNrwEeTCY3BQsTFLdptNFmJTM7YZJNjisED4H1vj2w5gELoVaR1ZfcB9Cbtp67h7KqhoZijfvwto8",
  "key19": "36UQxdHyeAXWpt5DBAfBi6yKuTXjsPJTG8wqbFHSABSA3b4HNMH9bka9JxwG8bEaV19J2CgdRi7W9Kanwdn16EvU",
  "key20": "c189ndmK57i6CUSRUpC4LgwgWdVPjb8LVL3eWoioEmYKAXqCLJSkfGEZhgUgXnNcCNPJcnZQQeT9cufKTm2ia6z",
  "key21": "3JiNHa2J5PZRCDrdkLNEwvvceSGEACVhNX745qfVSpoB1SmJo17Lugh1hE3bTxhoqPHyKuC7tEAZDe8NiLMrNGXf",
  "key22": "5q6tRF7iJMWG3yQuo2akop6A5JxGF4GhwsiEE9sfwLScnCtGyCYpfNvXAGDBgSfUYFw32j56koE9ppkwbTAccJLk",
  "key23": "2Cxw35tMfUhJ46PgfmEb3HnauGrM79VFdyS375ANssadGeMAKh3GxQw6xcWeEuAm6WS1Joug2cF2Qf1Q968XNJnA",
  "key24": "4Wfkf2pfaiRgP8Mimb1LyXjskraqrVZSGvDXByXY34DF2crFVNgSZGMDYVLHKdwKR392maXYXT6HA3Jx4hkwcBkX",
  "key25": "25AMTQeXKiFg7pLf97a4xjHZr3Kt2TL8qgX9UVq5p48LGzTDMShionpq4zjCpGDhpBmoXx2BXsk5qqqW4Z9ZzvrL",
  "key26": "f3VXaNjs4uN8daxHdxng1gqoVogZcmmpr6AgyuEgNXdAaTPAyKoj3x5YeQuMnLsqPSkQfcXjLLCXqUW5zrZ3Adi",
  "key27": "hH8P6hCibg9mg5BWCCjg5STikXoVECP9Z5ChXownPwSn6TYRQY23hfk7xGFYps7iGsj2FXucDpiAScqnVRs5ZfT",
  "key28": "3w1pDiqCajZh3R4ne1MoptqV5VfrcF3BAuzH5t6mC7eCDyjS8inq5BKkphZeuHvRt3fc74MWkB1PF41E3wJhC1Uc",
  "key29": "3n57UcG9d2Nc5hiXKRx3jwPE6MYouY9AXhVSsWc8KxDn3aqhhwNkVEPLJsmgXycFNNZRTw9H9MkxQ9X2BnwJZW2g",
  "key30": "ijsc9BvxGVjTuKJF4edTbVPdHUPdGVcqfwVPPrBCtp5EgeaDhcbjrdXrbYaZ7Lacf4jNddDkrwbacw3maE4ucrc",
  "key31": "4W39kPw6FGYzsspGCwN1kbZZwtixXaw79ss3CBXYHeCkn1xWbivRguNhsbhtPPCWaGN6aL5pZNB8Fsou7CWJWcZ8",
  "key32": "3etwWYDVJgCbED4MkvthEjYNFZUAgLf3tt6aUHKX5ZkCxfVUa1pgJoT5wFWWvkkrx1KdGY9YDrdcnwrzpreJrZCm",
  "key33": "4SGkypULRXc3x6SHixDAmZmsDDmbWrNfx2Trf7tVS4uz1YXaXn56Nq5LaHQ42xFtuGkBhJ6AYmjRBPj7C4xxgxtj",
  "key34": "3yLrnzt68uNyiK8zGEpyPqgT4Fb2ArrXFitubDw8f76N67CZjgUDiUchWvzTVq5soaJup6462oC9N8yw53x1gyWp",
  "key35": "5dZcs4WKae7VN8M9BTbfhuVGrEEdF6PfPw6BrvzKto3SDiT1m6YPnUAUhaG56Pde7JLQp3bSfgaP9nCbY93TuCLh",
  "key36": "2q1o3gq6ePJcM9BRoYHouFrW7TaPBPCTAhzFU967hkKEQWf8kcZmN9mC7ZXejWGCZpJKih2r2j4oLmr6gEpyFUh1",
  "key37": "2uX3t28iGUPHCcxkfYjc6SJUcZA52d3p1jPPoUKu1hE1GRYtZ2J5M7Ag9KccbkNNXYk7NvTvnws6LyBbVPstoPPK",
  "key38": "5qT9Gma3nJZMwG4gje1qYFJVMWfbeSUiWghDGDqVZB9jEcbpyRJzuYEFeuvY5EMJWeLw6zBdj68Q8Q1WRGekC1w4",
  "key39": "5qX1HAjTUzaTxHLqizBvV6JVMMtbwywZaA45SvNWiCwJMoNX1ffTMgyDKMeVvnHJuhyEbR4twtTnB7WPRZvWfvtQ",
  "key40": "AdKYDLYeKugPfgSv4F7P1NubGMweC3rWfdd7fcE7jkicrkevgQb6HFmGSumh74maopoL518PmPHtFNRYpcxje5Q",
  "key41": "3c9JWCzvSA34HvTmVqGup5YB95rGvrvurgGjgD58PeTmDCvREMP7BgQ8VLtDt7m1cX9A2RSdNrirKHTP5WyE84J7",
  "key42": "4FcDmt8xnnTi2Z1wT1pCuAQYKR6v2vwKm567Pkpvt4DK9CysmNN1EXWzvaSqXSBkusoxEN3o2WcbVPniRa1vAsTs",
  "key43": "2uGrCuGx78BVhU3MHQTmM3o5QEBtnTP5uao4aFBz86qrANizs95KyWDjpN5AF4enX8pFP9BHmzoeZ2n3ud78NyjZ",
  "key44": "Ee5q4DGNvcu1qGtct5HQQ73snbinwqFhrGz1o1i6rWjgLSgchPLsi8NwdM3o2fV2fq2kpUgi51unTUF7o8KDgHD",
  "key45": "3hv5FCqwNnStHhoY7NL7FeYzFtzXtffZBQ8HZyb4vGQfyKhAg2DCcP99i7UfpfptEMLNPJyvwVTNtWEuYxeQH8R7",
  "key46": "2jEZVWPXNcnut8fSqZ33y2FHsuJXHYFJEkriBRStZDEWbpJiGYHyCgS6d5p63w2emW9mEhr8D84cfSTb32ZQcJFg",
  "key47": "2b25TSWmwJBTxyUnAn6AGXvAgvRDmvF3ds7xh4gqvhbKXWUyNygDQKh6ZqmJdtQwyppDu1KkzFakMd5Vm3num9yu",
  "key48": "4rgyzzF621KcpWdodUV55pFhTiHm1NXB8fEm9s4PSdxBfWSmF5bSfctoqufeDHBzJKXJgmSwTRwUe7vKXnoZbMA"
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
