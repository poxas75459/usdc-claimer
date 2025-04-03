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
    "PckKwgMFWJGC3pT3mWdQBbPnYrgFDF3gJwDPwgCyFNLNyTZ4X5ute4BBkzMegWf6EhWheE3B99DUuHozctsEbTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCZd514bGwwxdwuDUEyCXrtrq5R1CvGKACQmtJMGGW7U6DDNnWDqWobSm8tskkpZBExkikP8VZnnN1hppJxy3Nz",
  "key1": "3koKstFE8K21H8R6NmNLNYUwjVKdduvT7CVG9iMWVHse9JX2dkCsRsP9AxXwxQfmw1uNvyJrXBroR4bTUvohunzP",
  "key2": "4FXvhyGPjJkMr1hNDpbyX2DeX7FGNH6uJTfUKpPYWCDUQpjvaWAwWPHtuRs4kjVpjaQtAcNA9Q5SEytbveVgsPna",
  "key3": "2u7njxyxF7Hu4Z3Gy7aeX756QnijBZa7QgSyjW4ykno7iEzyxKk7daN1JdTdUwf6NbUsMg6uS6NNCpeuNiZC6idD",
  "key4": "5kjb57PKrPYSgn8VqcUgkhr4aFYrwFiRqWosebb5aPXX9TkUrKWiZiRvXNtJpwMqAH2jnMPrxctjkXyfa7bQokn5",
  "key5": "3AGRcr9gm3uLD6nYwLdY4kTvc3tcvkMQsoed75FvxWmNxG6nd6uGiULsU2svpsHXpRvW7v6WhWM7w4CagMcRqrSq",
  "key6": "Fg7XMVnJns7Dq6DzNXm4VUvFD3w3qq1Q7XJZ3NQrFYnpxo2eYDwotLCJuuQz5A9DmbAUwQSTScYrAtte8V9Tvcd",
  "key7": "2odHamSS8mccvvrp9JkUhGvApafi7bktPrWZ8o56g9CuGcrg1Ns8YhTy3Mt2173NCNUehrwAqRmHLcxuLDiA7xHd",
  "key8": "5Nfdkw2s4DXMtw4G6LW1oaiHBQjNKTywK88tYK4vj7tJ9ymoLMUerf21m7E7Dxnrbv9dHv8LLyDeS6HLH61A6Gg8",
  "key9": "43iBW7Gj2ac7RueYXEY9W4DvBcXVNbSE5AJ39nga48GdHs7XWhtpnbQEYV2KYun8qkzNs6bxXmwy8tndJdM43KX9",
  "key10": "3rq2xDBo7eTVW4t45FkDpjiNFb3zeF4nh67f1nGpsbis7weC48Md9RB5r3PF9yyjUc1D35MqFGkasfdnqPWqYzg4",
  "key11": "sAiDjU8jp1sWv5LT7Q2xVD3Ngeino2zJ8QvrbAXkxQqFS6KGf7dcuABBTJMEt7WwXmxNYM4RoHhtk5Axs9iCYdw",
  "key12": "3JMbMAhMpXVRtay8vAtfgufqVgPu4AS7wD1oWJiK3WWDZ2kA2JvdBozNCYxacE5vRFeDf4CCmd6ZStN9B21XCoQj",
  "key13": "5vtRo567EDs1FZeXexaKse3SNDrxKi96FRBrgCW4r4M5d47gZnYzwQctqBnZy3r54MTUDENwBmtShFqkbQQ4b8GR",
  "key14": "3AW1ckeds3biP8aXCr3NbyvrgGJKqcvQ4ik9sMTRcjRgLAQ1FdVbmXsXRydYwJG9cThMXxUiHBc3CcAcsEANWhyD",
  "key15": "5WiBQ9ahe9NZNBHdHHvXAgL6HztTAaKgd83c9DccnQRTPnLEobXrHJ6C9YBTc7r6ypKif27RJC5XCXZCmCmF4fos",
  "key16": "3Ww6RYKK3wQtTUnoHnoBZDVjuGd9X2GBWAyWEiTbNvRsBxQt6EhzhHuXc8WL5jfEaDSkmafe6SwPkwtp9bJ3Lz13",
  "key17": "3d7qmcpim1aqdLaz1oy4KNp2tbuzYiVnWhWrSTHcGAnSqi8hCdUHUKy9LtSzWHs3mz4AXjnat2HasrTECdbvPSRF",
  "key18": "hGGXvkXmznRd3DNE1V6BLLrruqeaDGQVDq7eHtuHTHfeB62fiLvcxU4uDDxFx4UhG4XoNmEHMGXf48i6ksKnPbp",
  "key19": "5ay4g2o5ExX8wip83cTvRzhduqrHSrLhUZQxpjATFqzYdLSbJohy6w1CvTF5pD8R6C8LGCF9HBpobtxLgA8ck349",
  "key20": "2ZQhube4v8ynMoyofnCgwgaW1PW2Gvfo9AU7WWNgXV9JZA9Q17gPibjfJatXUnhcedv8THQ3q1mwz9kPJ4Gdme2q",
  "key21": "2v5M6urcRjPS7oiZN5fd1U2i1CujPpiZT59H6HKLEA8AUPaoP7rzPSWyWiHZhHt8tHodH7f29sD9GWF1zivuWhUS",
  "key22": "3F7Q8BhsLifAPPXwtR4afGQ8B9pbsjrGjZxVmKDfxAPJ1cQESQJL33EbPKKR2SAXeo3s5cKaASr8zUaq2ywvwFNW",
  "key23": "3DVPrA6sHQEuwGgkJxwAgHfj3KDQ6ZRZ4kNMgjR1Qh7d6S9gdkRjRUSpcrngRYWvDriDAX4NeGLHX8DSL5d1fvuz",
  "key24": "2HBrDzav8chjPbRKLjYGyG1iqxAii66hPBt3HBet6BRL3BTsokBZyVPYVP3K8jUsrRHtf2Ym5SFuTdNzn8xBcGhq",
  "key25": "48bXyuzrxq9L2JJnxbYxHSgWskxber9Sd94sDqJQepSgpqngYRQj7KzzSsLLMQcwnPEC598RYG6aWqR92MyJeT3z",
  "key26": "3toPS7hJjbS3MmLHBf4PMiEuQjmUjhXEntjSkmYpSHQ9bqSuGZ8z4zzfrH5QdaeF1t5jprL1jGkzhrGZHB87GC75",
  "key27": "585pKkMFjupVFHM1we5QMf21G1EHhDPdT3pQWKExDBYuGhYnE4fJUuynyCLaSNEqiPLQg5maYrZbwn9hBfWRVbv8",
  "key28": "maP83UhtHRBDskcSrjBv1LHeGnpziUFk8cLHvy2QnZyAU5Q6Q3BhnL1m8xgBruKnP6bEugqfbYD6BxeioXPvfJW",
  "key29": "3ZNdXmYzcyiDptPG4EspHqNkwbGQZctxcD3TK9DuYsU5KGTSBJDwwHmgysocxYuvPeB4Vx1sTYu8XH79sStiNBLc",
  "key30": "2bNvLMKfK5M9RMuk2suSJ1qmFXhkbJepRo2HH974TswSnAC2xBDpumGtn5J5RtudXm3UB3t1btVHXf1KiD5T52Ec",
  "key31": "394gfdAaEHwyzmSArLaS87vbEbgLL9a1NdDbKh95vsqU5vGzdayxJNZEvBnga4gQvRtHMXsFt8tmLss8reiwMpR7",
  "key32": "2ipykpUgnMVvcLRmtxRwiGnXF56kymW9F7WqFzBMpHVoKHPXxJTvYi7ivQHBEG7Z9XNFNrf6yToenijPjfK7CMoP",
  "key33": "2zUmppPUUsv8dT2u4xfpUVmLPXvjzXXqDAzUmFAmxrUM4VEqWkFZayj5w8KgADcvNh3qUP4VCWeiuBMbdrsa3fEs",
  "key34": "4fKs2ZBwQGpfWoG49k5aSdj67Z6xmWrTUruMubceznYuRR5sQnvkdPpCXreyzycradxmjQvVtbHANvU8hcceU5KN",
  "key35": "5QyjFZDDoVN6eEnd1o3VXgEYBPGkWLyJsXmQL4oz9Y6pjNfuCubaebGefKHWQCPhEd2bCLkDcPZkQACaRvduHDQg",
  "key36": "2tTKUN9rr4NNwaCj9BnppN4EzRR2e7ecbs9vhroBF3ComxCiNgSyESPpUDYRPcnhuUpnRi67ygJDZuH3FHPg2jUG",
  "key37": "3qvqCrMHSj15nRqZWg9i6QTnkAGVutqknHb4DzqinZqBWGqX4mWBY5NzjEDnXqWEoumVnFcRXoKf2z6yfHxsgpkL",
  "key38": "3EJFaeY4ESYhL1C1ThzdhuYvzZW54ykNjSkgWCuk83YX3WSxssdbZ9Pp16hwaKFEEPzSFtcC4z2Fq2iyMkSRsyoD",
  "key39": "3p9q4tWiKku6ADVvu3vbNHm8PRDqnHWYSXYq1xT8NmavfrpHzLEha1B7Zs5fhFegVM8vJPTxBzbtw4EDtfhacusm",
  "key40": "Jrim4eoPVEeth44LCj2RccgJBJEDyYDZ2rwoEmq9Mp1PdWqN4jq7v3n9iwzr4gxtxvvUh3tVmasYLchFqYb6sjP",
  "key41": "2xFbX48dyELHgJk8QGdbqpsiSqnPDJXzTCBCL4yfMKoCBMrsDzzVZK1s64B5qG8F4KcsAvpwNoz4aQLVQgMe7tEz",
  "key42": "dhMgnN9kkcFxiXW6t3EbRyvCmdjULv4AttygGQBoXaukF7AEyFDMybac2Hk9JtqJKG8T8wpbXRxMu99Fd1685Wp",
  "key43": "4KPnMFdgstkHAGjFDVWcY5Y2fV7V9bLXnkkyb5Z8U5esBG1gANmEEXubFscYa9RDgwbiABYG8b9yhegvKdeGtvXP",
  "key44": "5t1VBDMBEJLCFVRUF8QuuH2g1gwY7SPMGPpwGkDN4fJaHzH4MMFQLyEkoENNkc1AxHfDxfnJ7rXRJAzrLqQTUgS",
  "key45": "38kPRPEGzbeiTJtCxbtdWNgqhaWWei3KPx9aNEJhzC4nhefVVs6oPXX8ShSe8WE7S9q7kK3TGsSw3HVrtTM6fjwr"
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
