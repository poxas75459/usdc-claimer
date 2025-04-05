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
    "2dZhAYjXQ3aktyLeoFhH2gee3JZ5eY5qu4RzwMcGD3WcS5ZpENamKFtrGPWtDcpyZQuH79aEmyxyCv8qfM5mxzfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vf8XTauaRmbBVVybhSiK6onGaaMwEQ4fSeFKgjhAqjbVyk1k2QavbNhby5uoCyiGqDts2PPkD3wXHmXCyHXy9Xn",
  "key1": "dYhrDLWAKJTp9K7HZ36WnGzrmiU6JJhoLpk7g9F6erDbqbypSMoeFWHo2GW2uuRndGJESRJ6YoedXNPTTDYdZw6",
  "key2": "4KfEs4stFXNQU4x3XQnavPvCeAaULRmmCdx3cwomf9R4p7q4ae1gJ4TpY7j1sn7xeNLpGwq3oZWh87f1gMday37u",
  "key3": "Ab1PuMXyK9avfiss97HWdX1T7kohrxVEHsrhgjHinnDNZpMBpgsvJUbSWec7Wqwvk5oWaEQLmhq2v5CA1aBiNGZ",
  "key4": "3TCBDCxzho5ZaVEi81HeXGe3FHXvwN7tnPjhiJJ2azit5ta3mJVXpTLE8JBg3bACXKDaEd6i2xJeoiHq5jqPuocP",
  "key5": "2Z4mJniMEQL5NgJN2Y4wsGGmJYeVbm3fBn97CVdAAj74HgZgkqqorZPPC3LVnLKb2Vttht37BUjBDm7pTjhJ9uvx",
  "key6": "rTtGKMKe8fbyVUcftJaGinkgApxvxA9f8LyEc3hZtuqzy3nL16f11YpCWJtJ3KYWkBL38rSuMkTrwPC6b9vQkbJ",
  "key7": "Ne4Z69KepFeGG2bgR78MyQHLaZLctu9tKyK4eBLFuJ7MiraZomXmPkArrbyydGYp5uiuW1pbRZ84xzMQPtLJouh",
  "key8": "2ZjDEHB6yVg6RaGLjY7FxRuCT7xGVVyDjgFkbJWvkwMXYowhCkw23xiHTMPA2jUEahxHH5ws4caX6XEQbg71cZEC",
  "key9": "2KxR9tP7s7Se26HDbZSUCx2LQyWtJw5pDgg7kLUrUMd8xWkTUKcfNdrspGwxe1493uB5vvxm7szzx8JfCDEJ2Dnu",
  "key10": "PZKQkHrp5JxbNmeCy5PjjECvwNsAVx83Dy6asWUCioUUL9udWy4x75H3ALcvVaW27ML6TLq9hJPitNb8PTejU1o",
  "key11": "qvfGS4dhasEUXsQHQiDn5h5C2LnDMnx96GJLC53gViBzBDXZH8hD2oos7vLWQ82NCUM3aedPCgeT4NF4ko7JFjJ",
  "key12": "4CmK43figsA9R8r5CTjtcXLt2vSAYFyWAXciV9fbxrzVT8bo1Jz5g3tRqjNrZefNcGBnT5NierLSxG76obf3eymh",
  "key13": "4SDy8iHtcSzDCeLRrHo876z4Y12WyA8a8DXK7HHBLMJ37bCwTVkHmNBg2uZqWc4FfsP1c4iLvBpb3grZf4uZT2Kb",
  "key14": "3KFTNerNUox7AM6hUdtEssD6ZAxadYVBzE6k9CT8zLG19EkoGkytShtL4z1DXNdKvpEcs9LNzejrBCPCdvgA3MmB",
  "key15": "4GvnNzj4zkszFdrXYAFncFZHGGmYPsPys5MudsrbiWk6YPQhs84SqbUPX1mpQBGYvsRqN5XZpReFCHNLGH2sAtgg",
  "key16": "2T1SQz81CTKhH1HQGHuk8LiASkUEw1T4D4H9fypJbYjuF9YkX7SKJPp6eDsGVoReRznK8YTDcGcDjnv8KHTjRR25",
  "key17": "223wJLsirLtE5bsbGqBQ3kLrSrDszUHXNpiLTah8UXz87NnJievmtqZZ9jMu9KXANQb7oR3bx41dsZkJo13gGi24",
  "key18": "BomR1yK8Jj8ZVjfn8SAgMDeW3V7izdfvRQTBd6T9zi96hmxQQzndYM3HPNzpFS4nzpfj28738G9fgrnnungidvB",
  "key19": "3iKCmrmaz72dLLKCnbsBzaJt8zsmPWNZonr9o59XFT8aMA5uz9KT16taa1uEo6vfTtfNe2S57qRhPqX6zr6gTm6Y",
  "key20": "41fDJQ1U1NCtg8wLBHfWZkPqcwLp95REbMrZYHb6ZbN5ZpxDDQnMBAE5r67ZF8AztLvx98JrTMSoTXWTTPWCgVVm",
  "key21": "5YJdMiSVCzpnQnfWqKbc4AyhRgqpvRJyrDbepUkkK6GeMGedwjy9mMeNvYo4Jn64pMoGKnNPWHZtMgy6wMUeDTEo",
  "key22": "442anB5LW6ADs8WSXBqUhuSpwDjGpJU6WJsZv75CY3vMmanBSrcRZfDSJqM6YLi7PtDNe3aKM2M7iLZXHgjt2PPC",
  "key23": "3fRVr29wNwhoFkhQbxER4QdXguq8XbykLYFvTG5J3mPQwRj7juE2Bq43W4GVupuQtYP2TbVjrS1qgb2KVjQzvvwA",
  "key24": "3MjmkGEUe3L6bQwWfhPu3ESojxKzoKXJoQHHs3vUhrtn3wiQBehUhimbmikpHTMQwtnjV3QB9qhHUptRuHRp7LCx",
  "key25": "5qqSmCtc3BEHWXLfPHfAnSy4eTHvxnYEjMYhm6FkcxBLJ3mPnDCpDqxikj3QkT16jRCccFFeXUy96Y2M8drcz9kS",
  "key26": "zxU8jxqLPyT3LayqactmmTtd81d55Pp7Q4NjrQhy8XUU3DKvdFViTY74D9f6z5LDj2ekvzuqp1hdvLpVTd5e2wb",
  "key27": "3w7bLbSGb34dJ8cDxTKAFrYbnAZXjfCzXzmfnb1A42nSmTZbNAfekA8APL9BMZjkJagcKSPemebavdfCzJmc885o",
  "key28": "gazCDqkbZJVHkXR2LjcuryYH7Yq8U7Xury8br1fBW89upVjbtQtzK4Ai3pZ3VtWRxmoBhoRHKPUv8A8aWTzkHdt",
  "key29": "4TnFjdA123jFTYbFfsAbWHUaq2rEbgaoygvPeHc7fcszpdB76jXGxh8YXbuAsEG9G1pAX7Ce9cyKQbNRkmxaQHUg",
  "key30": "5A3bVWw5h2PziLgMA9oQtdTWTLUc64QNtGX3Be574BcgoT6sxFLYBNrUbcg9cqBiP6Us9wCVYY7xv6N9BnAJR1EZ",
  "key31": "4EiZ4P3VgFUnPxqUzCtZ8R9aJRRLZh8k8YLowgkhudkvZPAHS4Ycq88sRFXwBfoe7iJuBJMu3wbdk53KKowTks3P",
  "key32": "fHbaqfQJMps41mPfNrkXufwc6AqVfHbUyS3MmrLhdnc5RjESBv5uH9dw3qwGSgL5Cx5tnvN7AzoyH7UyGxotj8Z",
  "key33": "4NJwDXh1uQAn8ksWNz2MDSa45EmAdXkyiBEZb66M8zxcJgNwqPioZRyrniooLTPc6fmFMs9hDYM324UrSV3SRVW2",
  "key34": "36ZoiVR5brQxTze6Ed35grx44a8UsT32weAvkPPCj5CktKuYiXk9srCcEFaSx4x4hjzyQbshpTSyp8ATKzVvXpp9",
  "key35": "4LUrRT6kDgpCztDeBX8cUqPqKzAS6WtUeRjo9nTDWy5RPcJA3PsaUaQokXA1VXA4gJt3QJUCDeXrCuAGTNsa2tGe",
  "key36": "5UKpUG6ES5hE2V2ZcPqLAS849ES9TVJbLuZr1VTdiJ7PmZGnGjk4e9Y7LjpSyNS2XQSpGZcvAin12menvBy6WEq",
  "key37": "56FKsiuxjVcKygb6RfnEB9v6de7VkKd67e1KHYqPUsTFjfuRnL4ke3Tq5Z2yEPer6epAn3w3dZkLoRX8TFuAgMGg",
  "key38": "3rzZwhRPHqY9USVqtH6ESBpRa4b8ZHDnXnDuMn43GkmtYH2fUYSnP3DS9UKxZrHXxRCs2UKVuHz64t7qK2fBGd1V",
  "key39": "qDSUPPWnfCB3ciUqs85reEcuHahNcYXyqWy6bF9fK8DqX8tBd4YtebzZxuUMMXNCEDkk6uGjGcUFxKkBJj6By2D",
  "key40": "2Uq9NfqVweSo2iVdhN6ysB6UKjLPFnpcU6KDDtpMpHra7K3RT9TU31HKAhby43befGaQMx5RsQZB9DBzahBv7R18",
  "key41": "3aRGetFEtuuzE4xojD48FW9tShFk6AjW6byL6qVYMgYr4MWAcn4hkahqgXNV9BYaodDujpw2UdYgFSsFE9k92ZNF",
  "key42": "2dUisYXGkdos9EZG2BkDSjx1dVAeG1aTpbaxhxo1PEA8SSKzX35RLKUpGkS434u5cZ9DVTz2t3P3xKVwFNQ4aMSm",
  "key43": "xdyCN4eSQKTz1EydHdtegkELCq4TABQtB4Q8qfobKGTZDNR1KA84E2qQjNkfoia3GnAMpkHQfmCwTefNf1XA6Vr",
  "key44": "5NMCzhZGdNq87nPVQHCBx5K6sXPq6SPEkBRr3AYFrv18J5WWY7y4m6k5MciLK6GC6zqgiCtEp49NGhGYCj87Hxb1",
  "key45": "2stQbEMWbNzSc5WqpH4hK1smmvbotNfEx8848pWWJvcS3ieojM3HicbgKCU3gsf5dwG8tVNjqWAmuiRLBFGx7YPM",
  "key46": "4QrUMHCJiET6YEyCuDXBceXsVzFi5kjBx69kd55diCxPzzsw3wst21AFCNsngti2Viu9sTip1qUq4fg4XwfKLJAM",
  "key47": "2uokXKfHaB3Nv1bSwPEwSGDEhkJGf3HvzbjEQQS3qRV5mgtuYXaR4bgAMQRGTpXxuEBpQQaaJfF8APwsf9iLAjES",
  "key48": "Z8BpW6oiGnMAPuP59xtSRab3rjJxQTNqMthNw98g4nNvARG3HF1dVLfxeCuPqJm18Bm5wHepeXSJsZt5e8njMnV"
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
