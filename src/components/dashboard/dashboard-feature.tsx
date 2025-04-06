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
    "33Y53kT9MPgjiu4zjh5gSPaS4WDEK8z54RGhcPuBKp3sYcUbneynriwqCLqe8L7gzmi6ne4L3QoKxiG3tREEmHsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZggDFis9QyNR6jNEDJdyXY3CPvKgkprTorgQaCBRYySNTPNWvViork8fXvNbJxCzeoRc7ozXBS2avHzVDJcEnaY",
  "key1": "J45X6DFtGr7LCDGpNCYhhKR6XhvKq6514dTpZGQ24XUjb51BjMsynLptmNQFK83yXZFP5ecXAd7aDDZn8nPcrqc",
  "key2": "5vqyJWV984TbxSrmoaSbBHSNhyqJcBmu45K3VVAWuwZjDu6RCdZxLCc8sksvZqUWsHVaHQXZ1raTh8ejNEzLmK9e",
  "key3": "33wQmEFm9SbDXy4ZYAsWfZKBa9n4sRGeXYnAFyiwEpG5WdmNn4cRnHw8fTbGFD8HC1PWHmrCXZzkQoNxtUgWz6s9",
  "key4": "64wD5aMQ1iVf55kc4aVxv8dDnGaa7eeqXXoz9bJG71uZaXyJxofMVyX1rJCfzMVmm6nTvQu6N9bqAzaqhLv3cMwZ",
  "key5": "cBQ4hARHGHFfmmvJ1WK1pMVMTqMDtk4KufVMvCoVJvKWVXvpR4mYzDUyUY88rBufeMi26EA77KEGN2wZjnPz1ZT",
  "key6": "35Mr4Z6ng2YPDcrvUbku9R6FMsyy47t9BaAYYxx4gsF5icxEWcbQMLVNTFDmqxy5iAChFqx9fETNtTyyUwpaQbkT",
  "key7": "4bjEyxyPePQsaTXdu15ooZWjjf6E1HAwW87DYKQwjQ9R6C7rjoq7nydR758D5PsVYbbw9LDXCW4v296mamW8haLk",
  "key8": "2sRnKs7zjLngASi86SpTS6oX9G4TvSTk5SKVen3zKpdnU3xCdqy1vLkcj3zfw2WuAJj9qs5ZkW8Bvtr5tinaekL6",
  "key9": "29jfWrbGKp6Etk5Bc7sjodhdCemz2mCvbopTvZs336ueWKXsSk9upfyYD2Hbx6rDpoZb1U9rqcDrxN2hx6tMu7y9",
  "key10": "4xoP8e8oTQAuYP4rbLLaqoGS2aXC4h33iXRLZxxpnY9HbXKvPXgU9QqFQbUB3qhknJq8PjNQ28nsSJP8a27H7TpS",
  "key11": "yXMGQHQkGzTvK3hqQLQBvoixP1vXnyHdGHLnvG573R1rQeDodHha94jhLbiwcSFz5vSXJbtQNya3Aj4FxyEnp1c",
  "key12": "2T7UUopQ57wcAFTH9v8TYo1ghyahvHDufPJ3nKbKhZ8CzV65Ra35xnG1sGMExBCRWm8EQYd2hZZ9puqXrZ5dSpGr",
  "key13": "c9RgGFoQCSk5KG5iTDvj2ApBt7FQ3ER4eJ4s4ruP53edeCcrfMvxQTNP7tKx5UoHrkW2X39vwRM7bU6fELr8Bi2",
  "key14": "2MAgYU4MgirjQtFY4jSMBojp19kU3j1dPFS5wk6w4R59zo7NLHt6Frmp5XXLV65jdL9CU17E3KYRQUfTqoGA6Awb",
  "key15": "342ckvosujCBbuQ7GgqwJUN5W8TZFzucFTJqWp94S9QLVXHpVsA22eASejZjJpoM5Y92o3mbrcX3TiZxJbEqZbSi",
  "key16": "f6wybUqQ4MLHMU2kbfewH7kADFrHz5HJbWfnnPgjiaMD2cGgbMnpWyz4y2NcsvvLjq6xg3gJuqXQjwvYsh7hKgG",
  "key17": "3kN5ub7rw1pTd4f5Smyp4BwLXhf9iz2BPJXaqE5ytxryJpTU8Tp68xQYnYZm6xvV5BdigyiW3JxbNKmQkCJ1dj36",
  "key18": "2kvFtq8H3awMuC1nGQ3NHG1SMvdoBumzWNpQPwLukHKP9ziUNjkdWhDqYeCBJ7ACsQsyTNpTBP18AxfSdp69ygZ6",
  "key19": "4ArBkiBwvYrJ8ETYLLQaDsNreh6JGNQX1WMDYUQ8Nw4TL1Wqoa1f31E1GUwGbhxbnzbQo5JKwiFSwoWUyGULqHSE",
  "key20": "5r3UfmYQ4QbKLaQkvEVYUT7EGkQb95WaygnhgZZCENSTgjZ7DffocYw6esf6iq9etTgqk2DNoJ9jzeAX3kUNcmPx",
  "key21": "4yvHpwEarg4oLfyWaTqc3yffziUMeoHkFzskpwSnyZrVGd665xPseWAjsQQ6BhfoFeAYA39ixnJMWrkGhibTK8bm",
  "key22": "2c4z15ZwzDh5qu93o5g2TYVgpUXXHooDrSogb5uHzmf8LtmQoJtvefQhncYFuc32PJ8qHDwCBWVDSrJhiMri6g3o",
  "key23": "5MJfNTwCGYBkamikY9r2W1PcHFSS6JJQw5ehR32Ka6fTLEybDmHfkqFnR1p1dtfAZNTWL3d4xx1c1YkJbsgQao4D",
  "key24": "3kqVuyLjbtfPWeCKjCzX9PDEps722LctLAniprz4Yf6JF3C5MWvBiFhcV8ThbDM9L7KLCgHSpgu1QbVjoT7rULeB",
  "key25": "21eUrNSpzu27wZRfxeQQFKDManz1Sw5b7VBvdqk68oTHubY7KyQEMAyaYshugnYiFxQnkFH1UF3xzjYsMH2MYRHs",
  "key26": "3X3Pfhqgz91s5BDKpdNeBTWbyEo9igjxunPbN2xpXjAwKBTqfe7bqj1aFDcdYghSfXnt2Ey6kJjBCCT1R2xtvKwK",
  "key27": "2QPbRYt9XFrrBpKtnksofJCVwGi14hkVMM8aBq3XCTee9cH7t6eiU9PrhVCKAr5LFsw3pfE8DmsczW2uAGp36d5x",
  "key28": "67iTY6vesWDjQVWZYkVHJcHsu5zhiCGC1D1Wd3CiQ75gMDmyegnmtQ8AhFqzgnec1BzmgnFroPZYZDn7tjK24APt",
  "key29": "61k3CH2CjyXCAtfc2RvZ6TTnAPLdDgdGJi3HSS8NiCk1n8EEMvFc4734prrs2Reafzk6tPvudF7MgsHYoghkkBix",
  "key30": "2nTMKhZ79KqgdKVheWuR7cEasNedSeuzbEsT1Astd3cFH6n8tPBzJbWM7bKM8UgLAm6ygY1gdiw2mVnwtxsNdUEz",
  "key31": "dQ2ceZ4PNRHTF5fBjUsAqnfyFjB67EQmD214BHN2WK7VyeoQjqCm3SbYfnopubu3hDLeiGW4M9U4SZw6QAMXr7L",
  "key32": "4Vj65cCxjmV8Zq3CSCg2rQydwB4rdrZD15JyFDd1pxeoMZWnsKLyfhjYF22WfNgddo4ndYrNPtjkYBHGYf3uctWt",
  "key33": "5v34AU2hc4y5tqTbTPEuioSzcQpwDaq3DB7hQVwL2CAm4c4PyiNxmW2GUGPnbgEo56pGESv7po7Va9FNxT7bkZod",
  "key34": "3MrjzsAeJ1GEHNyDgcd23Zst9qDzS72AkSmRJtDE51wJgxuYKun3hFAqVJx9Hj4dthjUt4EsXo15DhDaPJots1Ms",
  "key35": "4nDkXnPmTd4UtDbwUere3ij3FpTEJjx2thHniZLKPtJAqv6Lds2LeTB23QXYWMgjEGmn23SBpeC1uTisdX2TyaM7",
  "key36": "5KV3u8ZNdJnBwTSinH2yFLALWUxcSP2LcExqgkVK2UnFNzVMcsV3QD3UpXbj5sCodBTSuNWVD7eWaoyZ8c35g6NN",
  "key37": "AYnbtnA1UVogAw7Phg1Ag2A9tysziF13tgmg1AoqnWCpkywoqM1KdfS6VLSgSkPfwVhad443B8WAa9bKHCzXZfu",
  "key38": "3J13BSqUMxUtkSYbcGNZ5QXupYWt4P8qEHMS5nTx59BQyrjkDemNCbcm1qfodP8MzNfXC9QaEkmK1AfbzFxSmgf3",
  "key39": "69onWupV15F9twCCwi4jEd3GYzNsWE1gHG8d58StQGKW37ZArmTkCLXZKx9eUC4YCo6RvEVJb5PPXLsGLXTyrYM",
  "key40": "5QXvQtFw6zpn2i2TcAvEDozKSNfzntkQ8ZL1qFs47C8KBHqrEWFobFwEgteBaaex3Dtn73K3XjTuvkWBioGJp7Sk",
  "key41": "4E7B8GkEvRXhEkp774ZStH3q4uoZZjgPTArELo9ustwYa57VAkDSa4YRfGQxCuCekqdcXgk8rWHhzfi7okVH75SK",
  "key42": "4FGHwT7HVy5A8n3FAHXjawaPhGrAttTi7hT88gCifwuo224EBSG64uTwgjD1yALA551C3FL6RRJwtQ2kqMa8HyRX",
  "key43": "29LQqZP1opo2bsvQnSFj2gvVVwCN5RPh9JzcotCHNgA8W94T7M9XxTggSYSW3WFWPgtbkH53KdMHBhio7S48j48a",
  "key44": "4XPTvVrMf23pmksacRMqMjqb77BWNhW886rNs1cddNtcuB9qDumNcNFuyR9VwD3aUatftte7PtYbuTiECWrc6Z67",
  "key45": "G5M8N135KF1TAvnJ5wghvXckWLnwLqEUUcpfi1Mo7pp2jApTxzb6m9imiFCc5CSXJ7EdLB1doKXEra4n5cNCyU2",
  "key46": "448k2mtA9H8ca1VkPDij68nc1YWBtZKt88KhFxrBc2NTPTxru5tbqVts21JEypt7mN5ZzYLdLb9cxBEdTnEsoqWN"
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
