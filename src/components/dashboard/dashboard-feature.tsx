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
    "63YVftMP8Ty2QdiJboKX42BLmpi3w3Lb5KojUMeG15Z9tXnyqYMhEQ1dAQXivuqqAfdssAzW4zH59FH5eee9L6AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4LiEwrcDPcex2oaaEaUdRg2eBJvMVnxnREThZ4EB23PDeBgWwxHKe6pVyZosjY9NiRMgyYaJMcJi4cp7yb6DxL",
  "key1": "5noDRYFcjADv6eT3ekpXNhMbo8PajFmwKr8LNcBNpccskYkXV9WWD8x5dSvBpT7Umr7ik1AXv5NaSu5NUq1jmxLz",
  "key2": "5FZUraDWX2rgK1j8CuDtQexyADUH13RzxVgYn7PWUjHwRc3cD4YEVkdsLk1BrpT2kdh4Dhu2zWVF4j9rx3r1huZy",
  "key3": "3pP2djacch4y3PtBbNSHZsMEr2erKMisbrfycDRuaY7QAEyejTGxR9vRZhKzxx2xF6GJBDJKyPhrXRCj24VHkTTe",
  "key4": "5fZYoTSBJCHvFy26igqmX5p2B7DW9Dk23gSMzc3vHE3VLV6SibKvQkvCjABA5YHE2X1mvZwyGsu7eaZVjPx2bM2X",
  "key5": "5CExTtBMF6GrN3VTW8XATdjSS4EF9ANUpjs8JL3odfHu4cbCiTvLNdcsmFmePpj7Z6gjMq2CTLCNvdBtjnK2NnLt",
  "key6": "RKmz81sGvjH6qano7nZ7sFsuEnD4naHEmk7V7DA5GXyNLdJ22ZW4jmF98CrvfDWr8txLwdmJqWUkRbwYh59HC1G",
  "key7": "5MKSC2WK2rTVW4qZAcxwGGo9AgAdXbWiAoW74esnLDgTffUL8cG2y33M37qCvzNsqihrfvepVFpekz1E789HuX1p",
  "key8": "3EFPCE3aJJ3Dv75HLzjoywLW5q21ib4SRwmn2XEAUDGSojE5umniqESzuwRBrZZ8ddsY1CXHRckqjAxc1QCHxpxF",
  "key9": "4jfrHyic3FXXPCeP42rNePUMRux5zCmchYjxG2sDeaxKJMrFZ3XPBLHJTbHVXL88tpAzZNxgbUzDhn4qQK1Sgpbb",
  "key10": "BfHWoVXdwdhR3UaeRhRFcBm5FAcSAFUGxraYMp77Aa4szo5jNyxZyHJHKvsE2BcooZAcvRLLFavjRCaFg3eosac",
  "key11": "iXcK5rVPB29Da7s7LWiVsVjPzJMiGHmtmSAAMftQgNHB6K9rAc24uwxZ6GvVf7r1c4sEQWTZCB75SK8XHPx8521",
  "key12": "5BSgc3D7YdVkp9uCh48DBkNVHmzeSKukXSJVZvpj4YJ1DsLxQr8cHjSf685UxSYc8xZWvGeB5xdQKvAdPv4AUd7G",
  "key13": "5ivNtG9dqen7vfub2njF1CZhGaSZCubwH9bv7spEBjU3FTY3epeRW5CEjac3x46mQUVJR2En9f97wwNAZJRqS7q2",
  "key14": "WveJHccL4PMz9z8A5iWFwp2cXX1sRV65jGy18rkQmM2mayJoJHua4v4JmwzYcNBtMt2zybGZSz7KczcsV6mN4Pg",
  "key15": "4JwiYNJvdJawvSxJ9jHnF7DZFwjbEq83AB12iA4ibg6qms6xqhYDhQLstW2SfSWoEh22P5vZTBXyb6XFCstRiUTb",
  "key16": "36m3LW62fsZzp3tEiZmE7PgQPsGAKKUbzLifbCQGW8kg61jEH5qWjYszAt4AZxbkdfgbn5RjbRiMQzCtr4mqfZe6",
  "key17": "5L7P3q98bDmYviSYoNgE52eVboavQ9o3bnfctk9HUuKfV1aHSmYwxrBR9Fn7ELYW6ppKCfvMwibq4nF5fEbS7kw5",
  "key18": "2L6TLL3HugLYsXWbdyc1SsXunYuekrTXp3ZZfzfVkSMwuJVxC3PzjC4uQ9jc2vDPJE8P3m6qMnqLgtRP5pg1f24H",
  "key19": "Gvz7ztfm5GoUnxYbzKwfLDz2ExQ2hLAvu1irr5MBSkGpdrMRqBYUVpnonbJy5UwwHm48Ucam5fL7zfpBRN9xt9U",
  "key20": "3AYed4pFoyf3Pb9kkx9VvNZSsXJ1uEZP6wvTZGYHA2kNmrW38BhTAqtLbaSnjzFQoaqHT26kWfZyyfZyDyHzNQCf",
  "key21": "47tsGFtdcrNN1STNuSK3zLk54QQWYTk6iKnwNc326fWPiKgyvHs7U3z8Eu1rZwK21htzDbv4Uxb47dDrntVFCuK8",
  "key22": "4jGJFzwWFeokRVzkrNgW1WSpPoad54nrfe8UgCdgPVQZtxY7W331VjoEwohTkdxiAx7fZbDt7zF2N2dDFgb3KD9g",
  "key23": "2NEuA1t6UKBCMkC5NKnzf46HigVxe466oqcUZCjbRRYYE9zp5XSH9g33kgsNsBB8Re4X6WS9o6hiF86AvpLtDRER",
  "key24": "3GV8rKLsKFRej9NKPzrNTUebqYTWCEbfBr51KZCHGAFD5DwTXaEJppoNZrYsZdB2sVJrWXqMHw47a6hx2tPhs4cq",
  "key25": "2TzvdKzt94PA17GM9XAj6vANHeSYVq63P4nW3XLeibyJ6KV5jCDKz91bKPbV8YR1ZhvuTb1Zd1omAMy1m3aDd7LJ",
  "key26": "2s8TMmhuAD47wkqAMhcVJWyTfufghtbJTEUYtuhKxppbPNhpJve9uf95ydwKu1JTsuR1ABW49PudQziTWmo3Db7F",
  "key27": "2WjNLo2WLAgb28uNJVm6bkp2vkEmAJHGhPiaEr5hegjK7BSiL5sRX3J1spS89WfxggEgeEzWnkg6Ys8XoaNN4cxW",
  "key28": "2g7cCUoEB6kfMLkECP7FDim9LVqyxkiLurwaT23igrk7Uova3d9f1PDwxeNmHz3xJyntxNJ9DhX7jD31uNHQpBQ6",
  "key29": "4rzq61XpS7aYSEprUfDFMEvAzdTa2dWEJL6oWs26sW25rd9kodRaCpWXzwAJub7qdKUcB57SMUGc4YTzj52Z2vRu",
  "key30": "CJGwSZeU6JXP1pe2LnxZyQRK7oAYRwRyKenFse23jYjFVUki3KwwLLhdMB88a8wb5qXVDnrhPh7zjP5PuL4L7B8",
  "key31": "5W8L68XUEvwrrLjth9SJR3Cv6Wm9jHbPFpQVioMZvNmjD2wksLo5pkRSLV5Tacpforxq4YRLs2YyJ8FsE9cnuEK8",
  "key32": "2MUKP2SMBtcffvcfXao1kanUzPNAbs9aPCwCzUZT1e17WW56grNTggy9nS9tMBT3izahhtdqe7dGNzpwQNty4kqx",
  "key33": "47Y6HSEu3x8b6HWVgjmkxgdB6CvD6QASfoMJEm6pE73V2JNvvRdrPMjgjbXbRRwUgD8ymPMmdEoEtuifmyvXWY9v",
  "key34": "2UJemEtwfCwDRPHhymAsBp9XMKgcPw5L4mgonqcx1VfcD5hEb1U6ymTTCRNKHa3sXY3NLiwcER7adU99qd2dvA8Q",
  "key35": "3EoHkCrrBCAfPcGmxRpoFUi62dkJtnuxHkLjscL47usbnmbMRF7viHWUKS1k7sYwyRT2ohRTUj9igEKoatkXDHQj",
  "key36": "4UUGQd4xChCPf59ppyUGP7zrdPdYKP44v9BZSc9pafKFJDvhXhRCD4Dznh37XAmMXj8q54m94ZK9rnE9JSgj8GpF",
  "key37": "4kcSAag2ts7tK8S1hpwv3z3EbJeey7n2NzXnJxXGeQ2LvBSCSu9heMfqUaiMbqNBPUAJXnnm9LoREjjZVkdbz6fY",
  "key38": "4DEzWHjvswsov2QvTccjxe39ThEejoQ3psxUKbXaS36qsyj2eL7tuucWwCuK9y4EDVv3zaPBSNGPr8KzqevNKjdq",
  "key39": "5iaNbVDAe56HLVqYgmdAJK3WS7gfW3VW8L4WPxBVxHpMkht3gSWofiNUYpgvAS1RNd6Q3dGioJH7q7ZeV2R71twj",
  "key40": "kTzFazmxa8X9FW4PzxWtUkamNAbaoHdtLo1TTHMGEQ5XitGYfSummuTLK9DtsDEK6Ew3PHYXXRNZepguBA9jZKX",
  "key41": "2MLv8QSo3a5kW9hxBTqCno3PgrU8z4unW9WWZZZBzibhVqc9P7LJKwHZjX7tLU3vpCkcReHtkVohdMrzUtk5fjtS",
  "key42": "4UXHRftMg9M5nvtMtAjxSfqUXCtw58KoAa2iu4ei7WgDAbCddtGwb7CA4UpYdxEh1CDMsuUQmqaouYKRL8WFuB6A",
  "key43": "4ifGWxAEJc5hvtaGSZqEHhu3N2WatpNRDco4mCjaSeyZu1gbdp5qtm48oeWKVGBv1wJvMcNWswvaKsp6sPHoDSb2",
  "key44": "5ajKyf3qKFQYeLjbs2gzb87veQkxoSZ9frgRoBg4oHedxRNU5vD1MP4ppqbwEWFQLQRiMGrFVdtC842sck6GtJys"
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
