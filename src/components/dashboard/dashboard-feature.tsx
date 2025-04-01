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
    "5nYMsBgr4RV9CVAQFN9jyuu7SuAYRhmejLHiHWrRje93HZFxt46FX1FZ71fK9cCD6fn6sH2LFXCe7MhY3w2vJGsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5taMDQyUGdGSt73uCMhGEuX9Jb7C8NBuuf4RG2i3Y2aRMhccfMzdEW4TuG3FLYM9fdpxPt4mtULuWVcT1GeJaV",
  "key1": "LU4SXEsizj8fdyayDYkCJL9Xp83SG8Rnu7MvNvedaeawE864S8jGbJV7UFmbfavUcGM9ApKq9wUV1AkyHRkPyHE",
  "key2": "5aGqahX9GLi551Z24TLG4Fo5BtGD45r5MwZ2scW2Zr1oFKJP5T5npw4T2qw4gfFCDfuF6aUfbzikJQ1hg48ZxTxg",
  "key3": "42SwhwU7VugNNNJBAECifX4VmetAo7w69XEiACUqikECsMwdFvgN6QHm2yrPKudLDiLGcjHdkCjET5XfW1BRn4tN",
  "key4": "J5w6wAfkZSGkAq2r5U2tLuReXFfCS1cp2C42MLR5sWxwtUaGdG5ng46TR18D1fWcHxUC7N2Tu26KwuAEafonMjs",
  "key5": "diMfva7Zp5SCikAtcJ5Fk5WuNtYwAGZUw2RrtiyHcawcTdVSL1mfgFAwkvEVtnUQM6QTxLzLzPTThfmewC5Wue6",
  "key6": "5WDRUu3BQDCMTRRNRNbcNnAjPhaZFdv9aHhWebWyBFRjF54jAZHYyaibMHRdBU7uFkYuzu6ZAwioUi2jVXaPvTGX",
  "key7": "5FbA22Px49E5Az4Zj1UKyZWxYxzyCWNXw4dHSPVQRRxHrvZTXG8yW4S2za3W51CzzR9wF5QtPbuuPfP3PLgcvgA7",
  "key8": "tYjjYebmbMGwoCVAfQ7wrf91PapkrmSbQueu93HQzLVAiYLT5TvvewDzxkRT1vGerufjLNq2wCvd5t8dNzb94Su",
  "key9": "52RS8Xp1GNZB8XFgDrnxpDcXanfbQpWXFSNghUHnYyFv8aYRJiBqQxLvbAoEYRL4hffUm1L7cNDyjNUpEaRLjuDZ",
  "key10": "2YZBJcigG8cg5g3eaeCewqYyZdFyFX91Q73e87sMnkhRxAuc4JwJpgg6qWh6hzrgh8KFuCFJJmtqHjxFGc13DjaA",
  "key11": "2TMTg5w14LzTWKkwzknXcbsW7W3mKnuVMHYiA7VqAB2NpF8N32cSzBvvndyy9RoxKKQnBC6xswp5Pfc6ET3p6jaw",
  "key12": "3jTmyw3rXpJKonz71ZvAmNHMGrB6KD2zqUqeBqedzNPBumtS1d896HpRkibuiZWDSkvR8UpFa6tWxStXNaC4nNi7",
  "key13": "26pF9PcZ4En4HfzKi7mg3gKAE6gu4g6EpKdG3gMt1DiK6u41qrbeuXuuva79vru35JEGMXCm5pissD5Zv5XHXyip",
  "key14": "31hX8PQiWZJ5W1N8Y2g9nb3jydmoQpL3vbbgJ9mnjFkQyxtctsmvQqRF2i2gjiX5FDZ83414psyvAVchuxvjzQfN",
  "key15": "5tXQo6XGpbA2NWkWap78cZhsoJf1EYD1SCibZfkZDTmLG9HPmPiexAycfy719ftBHccCs8kEx1eQEvAxXMRfEG7g",
  "key16": "398s7GsTrnFfdr5sNX4WrpJknK8N2PrRwCdgceYsrf6xcAd3YNejKybW37oT49hQ5ArYyjBas6ekLrhm3ePDYAne",
  "key17": "21MPd6YqP2rn6Ydsp1iayLMDsNu6rP5srvBqbkVxrP2cJ6s7qkGEo5vKeY9WenrGxZUCB2oLxANU2GaUeKrCPzPR",
  "key18": "4xLxYV7bZg5L1928VgfCwbTYAuvhm7mcX9D7tHs8jYzyJzoHAiGccfde3ytQWNxsgBcjoL7QNTWQferFjYHfVfpq",
  "key19": "3ZkWnLESc1KKDdBL1AgwQQskuearTchSS5qdZtjwjTv5vREstBkQajTvQDr3nQA7BEPzbKR23xzqXDX95q4K5HeV",
  "key20": "2JqHS413qbhYEcSykzKnftTxEXmFUrcMugZQGWN3Q9EoNAXUai9MibRGjLzhQScyg29pfRArhGmkFgxz1daTyHUw",
  "key21": "4yZgg4hE4chX4aZt1sNQaz63UsCzJPEcTWPmimkMpuKFWJgn4WNYDeA2phCLeqQy8TnQ19B1S7WmEhwZ65J7ZqYt",
  "key22": "mdGsZhNreaobcdhtGKkY8oPtgcboUXPic8S8xM2J6rDmqWcRZRSAtQnyrzS4815mh9R81YdUqyeXVMZ2kkP7t5E",
  "key23": "23r4AdHMuBuRc5LPGweSv5wmUT64qSD7iUEoVFr1j6NFr1LWEc2TTxo1w7LozEo8VpwbCwChctrQUQv3Lq2mnK81",
  "key24": "7soJJK1TqRhJsPeJAGgLPofTVtrTP9Ptf3QNX5r3sEeN5hCoM3yMbpkNLePJkSn2EqDgo1EE4kJMa5doPSidEdw",
  "key25": "4cdWNneNbcLyhpbXMJTNqoEZVn83zgxJBazQ5p1yyGXb9dh2BDz81XFBmwGLeDRSCHiBR9wFpct4YLLQVeCTaNdD",
  "key26": "4NeKnLfo7L7togBq5op7fhD3cjyZjVCDLcstvMeeP1qcPSFf2QHJ1BViAi7RoGxJG7jY1miSdp2u7BzqbbtBmydh",
  "key27": "2P5f6iLjbSVrj8Yd8NT4zsm8J1j5RFHhDHkhWKe7C6MxKLi3BscRoknvdBGrsHYFZmmt6HC1irPYpkaCPxMg3GrH",
  "key28": "4KBq5tVXqCV7XoMwgPnyReRTfhQCv57Ae5iuPTCxWbCzia9Uiw3wpDQGBZNH19V3ZcNRaZW6qiziqGLaksACgQNr",
  "key29": "3kwk8A8tMxKdqkxTBJSmoYmrXYkCck1SHMZxapjFhwtHcjWdYBLxyZ65e2aFYkTkZmNWruLAxM23uedsi5sFELE",
  "key30": "5MzVjgQu9jDBAqAU4LzdMRqjMcn4dQgwVhyqyzkqxgGRXCqBnd1LwpTEaDkegwyxiSSyxjUBqm5mJKrrihGxH5eh",
  "key31": "2SLBk1r54LTYxrpzwgtzZvStNnfQJogVPXDSht8CEbaLqKmfYfcCwtgTfDGy94m8W9G7vHiYc6XkS3HKdEQwtfzo",
  "key32": "2rd6Rvu9cQePgYerynhUwi1LryQnCwEAwo75etbUQ2joD6X7BHxcVhK9GLRcqi7oiQWAFSvTjsEw6h3CfnaYLmK7",
  "key33": "2XjCySfP737cRnELr234kMMWvSNkhL3TdFxKvngmsSTRuaZ36mnMNT1HeHFUk3a674Xe8kgpvZLeK3FZygQ8h4B9",
  "key34": "4hJdD78S4yHppm3D9uENJRjK6J89EzQqFYfd6RBmJxsozfi9HPgMj7rGLr4p7FrGWaxn68UtZmpzkK85MMSLbcXZ"
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
