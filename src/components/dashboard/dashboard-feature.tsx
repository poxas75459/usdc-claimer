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
    "wdH4AEW93kckADCVQKyvJu6k2DNzErLYknwfoAh9Mygvjk6pPNcFVkPjySWW12djAAWpVtkeekj8n7thwRTHWcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Ht1EbqR3aPdcKaxNYbrdZAnoJ3BrMjgjPGREaa8ZtgxsW7c5A2WsgBwxqqCe2Lqtks3XdeTd37VkzpeZpHKzfp",
  "key1": "2u64wRdbDktZF1nh8Cw8AmFTPuB5ZQx3vWcWwW6oohntaKSJQTXQR4QUJRFKag8JFYbx4CtVSSahmhWc4z7ZSKmu",
  "key2": "4dRC9MdBW5cr62kPMQbeWW43YpjHAycGwqf8t5U2uoJwmdHBrt48myzij4J9QNFpqLS85frWfYSbS1R4XUa9x5Sr",
  "key3": "3cctAkEuArzFBaRuuYcHDezWiSFzt8JmCULWg1VBHTAjNjvYjUok3Khk4GSF13VGBDJM5gGv7NnoGNuB88LdCkah",
  "key4": "KjUqU9dNHwrzHHz3NSxVC45Pu5hZHc3ozvsDYddaJodYHh7ej61FJibBA3dFNPk9B9tAMJdmSXWVVAfoB4r3xXQ",
  "key5": "2tiiLiAJYvEWoDwcyGbt7CeFDtmHVt1FdwDMBuoWT7yjjpJcLgN6485Uv4pUmzvJQn7CpKxLWFUFa7mUfayAJt2N",
  "key6": "3PqxHk8NYq62K1mYYT13kffnhGynH6C4ijGeyBTXSmw1ftxw863xyPuNXYiSJuGqi49MMuhcnqZJc187bFQ8839C",
  "key7": "4Lcd3wv8nmMivH8fjRv19appPYp8dajebsxMT7iBbaWe98ks7Jeqig7mmwQPh9ykqHNqjZ5bFVwxDjuRqz4ivhzR",
  "key8": "rhfEa7fW1dvs7GFjQWVN4XNiUoQ6JaT4aKLUD1mbrbthLWawahFoytsUbvSDavacGJvjr831nVGXPPMzbzaHyxf",
  "key9": "5JwBvPbMRYDwA9USiGB2283R38AoCpP3Yr446qhjMmxY1knA6X3qT5WLJoqqoH5t7wcvw8Yw9zdCJqxygzc3Ut24",
  "key10": "4dZQHh1gLM1qpBotdHJTrTGj9a2ejLnzVfEBtiQ5kvEnwvoQnBFhyXcWFg8Ui55UWLwXfzaPFQSnGZY4PSQpfPfM",
  "key11": "4TfYYfWPqiyEWCSeissxr1c1BW37VKGKYchty4fLt7wWH5MLqNhGS5Qvk5aHr3yhfMNqsR3Xkv17NZNA2gqaWL1L",
  "key12": "2NSmukP6dGGR3ofiuAMJ3m16UrLCRgfMHqheRd58Z2SD7fxpjPXfzsKXkfHTAANvmNhKrUGhEcUW2S2NbZdxQnTm",
  "key13": "5okFJnb1rSqDqmzhSX5d5BrksSKW46o1uAxLq2ZTdxkKF9AtNPHBPjPaZjPyGbNzBv8rnjXe2x5GLu8isCcep5zS",
  "key14": "2j8CPFGmcgvj436pfqzAciZNHhbGs78LMMLEk4WirSZC2CEkRQLvzksjUZ4QBH8MPKrK65CvmFVehneMUmBX3HG4",
  "key15": "2HiFx8SJDheFUtBTdVLjdg6jobze4jomKV6QyfV6YiR7KbQB4PWECkQDJRZwnQVj4kP2yUCoHBEs7xrKybMQCBDP",
  "key16": "5Nw5bxnZmhFjENe2zW9WFr87Ar9YK2TCvPwj8ubS2ovoZKUTcVkJYmNUdJe8hRcGbVZv8Yi83iqipuQAwCYzHvu6",
  "key17": "2eNd3EAQy8uPxePoxesAv3CiwT49bhQ9qqXxQFCdLmgxCxRDZJJJ42QrkePHVJuZxH4JZQ17A7E58T9zxRCR5rf1",
  "key18": "4TCX8jUJ5hJ4bnBmvr3gnNyBAPhPMG2uJTBhZWqAorFURR4ncrd3Advjkj9M5eSG43u3jpoCDmixe83MCvmvjq54",
  "key19": "3D6DuAbjmxcfU77zY9imaXar46Z9yY63VSwWmZcLEurvCUB3yeNMieBRoRhChmrDFk3sG7A7nSRe5JhQVzQRonhR",
  "key20": "3BYByx8Rowsj3YVqKKqoMdnAVsbka1AQZop15mM1BSPPJN5H3zUobtX6B6SBGdFVF9qzLtFFwjbcXLpgHn3Exfi5",
  "key21": "fQ3TXFRN8T3ZtZM3GqQykrYyQrMJtSrzPr7G9sojbi5xZA4vmG4NxYrnxhgRXYGyD2zj4w5R6dyJRrGVz8VyuBp",
  "key22": "23dmHN4USxKCWAGYqvNqnjbrEepBqPazxJkvdiPSL8uKJSYZYs9tDik5rzwuQsuZkTPb3vKoTgDz6AJtkkEGYCfC",
  "key23": "2yya1bxUASPG87bxWA3k4xphzmjChLKJaLN1nLM9aMLrjBVXPVnJcKMsUufpFiJGqhRd7LycYgP79infx6rpdjCX",
  "key24": "2Mk8F2eA59sq1717RWPzAPR2ciWLMxy3HdDnsNAcmQkZQoNessvFPVW4VHxHavcyD33bj6ye9GRGyD9FVtUzgHqc",
  "key25": "XnUZXj2CHf8KV11eysG5WN6VQLgag1irc15LjfYDCjmu6qVEWV21LkzhQVKWo9jM6DFFtKGBiq4V3pJ5CDZCmUW",
  "key26": "2wm17vRKq3YoxmexbGHCFLY7PATtkWZw7f8xKtkgjQDvrxJTio1mo4Jc3QV68p4iRD6C9KmPZvJn5dVjRCacqSjE",
  "key27": "Np6eaoJjBMCQRC5B4HmHthcmhaDQocs8D5Xw9rwtopggpAzQkk45zvA6wihoYwKL1AgcsPgBR7ETYMpyqRcaPEW",
  "key28": "8biPgMZzEBGU6spwBYLXPGdFgmVnz4WrfKodJ9vSEs5aKa5EDHEgNPVUEYRzdJkeEByYwhqvHkPooHV6Kv3TwgN",
  "key29": "5datsgUhpfd47auEFcT1vQ8FVGW2srxqAB8qSKpFnjtEWtWQoGSfpJ8AtxjnAguxfzZAqfcQuPBYt478iJ2Pj1C4",
  "key30": "5fEv6M9om5fnFwLzTp69i9rBUtfBZptxmV22hQhqxM9cmP2Sowys3VHj2vM757qeuZ4KY9nEwReUr2RX7xWZYUFn",
  "key31": "2pSf6HUiAgqBCBGRU3iHec14ipcRneXzXJNA7ZsKu82wLr7A1nKotQr5C1TEGYkCaMrm4y2Aawdt3TuKoFsDLbF5",
  "key32": "53cg8a3bYXK6Pp7DVdojoXaoR3rocpn2ai8e1jYt5xdGUm6ZPpvNEpWNeHjfAm6yvrRyFJPpfaw9oXTmZq7Ga4zz",
  "key33": "4BLLdFVvA95wHFKnDEaupSEFVbD51hfND8gwp2qn8kuazYabWasoWJg5yB4nSXEvnUfjvzArYWQ1EUvVn1b4Y1r7",
  "key34": "SQmV1MYfxDoPnNRCwzFjtDQhiQbA1DBGHVWRmgm1anzVkD3bgaNosxC47DAGfa1rYAzAsaEoUJjVxyGfDGvTUhZ",
  "key35": "3NMewqpNhtWAgVRFCTBVxoEwRH2VcSofTo6Gt85aKVKvyCeTuXiLpZBWecVijE8H5Uoy2W8qkuuqz7cw9KKU2dLK",
  "key36": "NGb4S16NibwawTRfThwu3f5dT3c7kE296mYNDVbU8iazveRtp13WxvmJ3oby4a9TFnvPqfcxVS92PfEjXXbLMJs",
  "key37": "5PsP61FKDS11XXxL2NthesC7PZC92vgh2RTG8Q3dCXxTuDV8Ycxaxmuvk36mjQ8rYXJNTY2LZLwvp7AqqpaA4qa8",
  "key38": "3DhsP7oTCbLbVofEY8UDzVhzPqeQyAAfL7dbUVsUqNbEjyavkdkeS3PVDk8ZNaDE3rrexSy8BedwoLvWBG4iVvET"
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
