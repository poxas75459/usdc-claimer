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
    "5nQdQb394viRQ1J7mHbfpaFig9MapUVBNftBf59QtS4TtksM9B5xa9eH3oknqDc93d23gm4CTpVWuSfojNBZ5zPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iumHvu8Mjvqedw9syBqaa2Aiti7nVgY1xASwWVhw2iVUhfJNtDp6AHssJSvfsz7r44XkL3Uiq5QE2GnvLpH8cWg",
  "key1": "3mFXe26cJfzAiB9TqTRsLRRiGNRVykAFK2KLBftrroB9SWAmGYYpANu9YwUD3Ym5zyBYbp5g5iQvK6gWED4e4xRz",
  "key2": "4dvg2vtkbLyRNRZHT9qFfmHnp75EHeEkhDYFoASnTp2zGmp1Er3wWJnLWEadkh9EJtxvoRQdVSSjMvwzaeXXwoqh",
  "key3": "3xg4MoxUbdwJC2KDNTDSpRucEMd4YzkKgw988EtJXpHc5sEgj4NcGdPrHKNQe6wLGTb6vkMELx5tXYoZE3Q1jPuY",
  "key4": "5qudgYBkMtg9f1c5JXnbhF9gDQaNXAgqSCHKaQYJHoP7xT9wJjWZatEzgK39fh79hv8LiojVGcXFY2dpa5JFiB5d",
  "key5": "5yTCL6PrRtUtDZ9dtkL58S59Wx1QiZJjC1w3k6kPyRuaGC44sxwf3hbwCC387hvMwTbESAUnT6gztWFHEyYTysPY",
  "key6": "28hpnCRpefuRr5hi4kNyb1Fhtsi6aL816GzCZZ4ah1ojCMx6HvEGnmB8yZbu2J7csKTXKyKon73QGXEX37vtaomm",
  "key7": "YgwNLofRWe8FjQ4Ze8DxufXXWnii3SMsr173DRtcXR5mGr2vYQ5HP2D4HFVWqHjJ62utPoM1KaYJQBPXXLhkEnM",
  "key8": "VCUwMTnBFBEMm7GfYYBfoxxi1wxYj7FNSQQZ227PjAGrgyVqbManrTj9o7LvgmPDb6WfnJgLRj7H35qgWJ58bod",
  "key9": "eLrWhiGv2sVrcubFV5U5JCDzdfjzoNdDrS5nKGUr4NUJWmpAcC5QeMfbjsq8TT96MAVis9mT5HAKH1Y6C7DMyi8",
  "key10": "2EnzHNqzzzsqUrow1M7A57bycH1us1dekKi2JQqmVjbVe8LjWVWLofpsjFvEnuFGAqGuddEi7nCaG1JYa3xnHKwp",
  "key11": "4wFtDit7CLv3vYqCzXZs921zG6tboYzPEGNdjXyJtaHo2Kt8aZTQ25Z5Q7JWZ43KhpTTLVtmyM2RHrovqWJvkT2t",
  "key12": "252qDRBUZcja8kLwTFg7jToPEetLBJDTMviq5fXpDAVnAJJfMqvCzs425BiyApnneY9Q8zvmHEha36i58RAF2gUF",
  "key13": "bP3YPF8vw31u8fRCBjR4N8RMGSpFAWmUcfuE5kukVotDMfxuuUCUuXG5mR11Yvh3htr6NbbLt2cAr7pdNRFswZK",
  "key14": "mCcuv3q31TwhZzEja2j6gDp7w9qTXQivkAsDVKvMk4GJkFq2RsdoGHMJQAQdhBoC6DaY6rASBV5He3ajG18u5v5",
  "key15": "2YFFcNxuxBE3ZHf8V5hJjREnhCkqG2D6QUD2UFvA6UJh3TWJpmFt4zaozB8wVxULYkrGCUAnraVkXRD9MZLp37zB",
  "key16": "2gtxBRuHjVZx7i3zX7zJoX6pmRDC6rFejTLsHQoQ6qQLGic8FwfxhaSAiFtgpuA3vQENWS7yHw4p9PAfKinf66dy",
  "key17": "4WbJ4oBmCB46rGUzJBnJQPE3ZCcgTaobpv1jZc33JviXBL5FRSBQQ6hFHH9G3hBwxXCaD5G6R9oPnR7NaDvzNNbK",
  "key18": "456afwa2q87N21QBXHGC9bdrrAVYc8ZkGgmFSL3FKE5Y5hKwACnhfSZnv6YWSjFX2MKmF3zUyW6kbbirS3yQn8nU",
  "key19": "3qXzMgGftT8vgSY3qG4ocGYFt1hFSGvTFycHpgnG9G28HMW2pPaQ7oBBCruisFRMKAQEi6E18V1vWUhkFMe5VLxY",
  "key20": "2jQ1xGZ8vBNsWfE6SB2aUtpWBffbdCFUhyAAdh8M1k7YuraxwGW2aYHawsyKurwUCTCnfLUfDAzJEjodb4evEHr8",
  "key21": "2HjtR75zNoKzXfvFLBRgUMPCicjLXDhWaVtvrcMrBBGPTSxSvfc1KzFwbkubnLTKLioMR83VVhurLhf2n13R5Wr6",
  "key22": "8vMD3Tghg6KaCpDRTfurKKpNhZBD8CjVFeAttGMewvYukz4xHPRqfE9pMzB1pR9zkKo95Qo7ZCdbqCuPeaMdLQv",
  "key23": "okRx2Kv9z4bSKSTaPrENUG3fgNKUGrq4ZPYRgtmYJG39k9nSjNKmBjYrWA4xpuY8A1PimeJzDqTX24za2VMhq13",
  "key24": "HsvhosLy5TBhydwvdNZnKnrars3zK5Kmq4GaonFGcLJHj8ZC4qbtS8rwDUjRdknxkoBUP7c7zvuqBRzFvsW8r7K",
  "key25": "wvy5bHLN2nhXBBTEtveW9mwMT239fKzEojNoS9twbVyynvgDmCrDzayfEaJ8qgM6C428j9SjFRetxvn2sktWfoM",
  "key26": "2JazfR7GHDWkcBRYsu2xQSx7QDzkfwRxH3mD7yx9MfWsYHgrjLjC72hJNom5yNipHhtqncjDzeVSkRL1V1cuGmSd",
  "key27": "4yuefKPA4pVQPpsMGarvXocd11yPRaDXUXveSY9eugG2nhCuUgtwXtpV65dCrgWSA3KPEqkuwNuZCuw9w9ybYgKg",
  "key28": "2EqyiJGmgYEiE2xUR4qYvHvw13x3EyFGPW8wvuSWybH9cfAX2yWayxpwKpLL3FrmTxsMLVFo2fcF3bsP87QNR73M",
  "key29": "3oLpi3Y1aagfsN9emkFJ6yspH4HkRM9LdSUzRbe5G7V9oZQi7nc9tYFPZ5GdxPUdgqd1MwLLdfvdRmHKmTbbtued",
  "key30": "3R5TzVpRg7tRpYbUxYXQycgavKSczvNwcUCHZn7ttKLJm4ETkX1tmx4T8rfPhEmCE1ebmvAfCVqnpPt5JJqKpn5w",
  "key31": "2TWGAg6dtBApBJM4sMHqE7ZURFWyNrR5pj7uw6MUJJY5E3bVpP4TwSu3pyKY8xTfMuGFooFemeou9yHWa3YsJoQ5",
  "key32": "2kEKrqBCHhvsqQH9Fqhu494LPiwDUuc9GXEXPxEqJTeyC1XgRQkRimUQNYExkH9Zd2sH4dTUJqPKG9dnrEepJue7",
  "key33": "4uVCvc7ojervxNV4fpGxLdHAaMRwyP38M5x4opoVL416pY4YHscW4bHDpBGdT1pYxzyA8KgCEA9sSsUbEo7nBcja",
  "key34": "3fqoSYCSc6YUUa4VuHwxhossxab3cWe6b4BHSnTBdHhxkk9xQJdw5wboJRZxuULvFH2tAwVqMy3MMnB2zWihrYZ2",
  "key35": "64BG6TrGaviSuJ6DXx76HMmMqdsDi9uFKVYLg49oNxmX28eh7wXtaep9gZrKFPgAUETvjfWeDLBgB7muwCFzZghf",
  "key36": "3sjjVdkhu6VmbDgUMqAj89xqH4iY7RrXKd3bfRZatjNESoc5rVnmzcbv527EeSgKM1CSoPJ4kcUFFXpYKGSF5wUR",
  "key37": "HwrzuJWjopDib2Gic1PXiKeX6wcanXBgd6MAVwM8cLgVfjK91hrTNfByJFnQviuMziLMRGFqSK1fas8YW4pWfPB",
  "key38": "4WbyVsc8krmhx811chpL3KK6zVt1rWf4H1DKVvXnJEuayM8SH4TXoxB8ghj6GTpUW6Maz2aFSLGa83tGoULX3yDS",
  "key39": "3fGWze2X3CRvRihTpJBfQEW7LE2bApSkdFnT5j5jZRT2XKeFK7MKd5qs8BvJGMn7iuy5NTNvdqiJW3iYmbJ7eQqb"
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
