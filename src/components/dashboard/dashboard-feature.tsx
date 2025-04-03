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
    "2z5TKJqrTc1vaUPHwRABnDkXG2H86syhN6o1545ZZ2pFLX3krDPre2mZV5HqWUTqTB2BnwRw2BwiL7WEvoeXNx3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvC9nmAR5ms25F5uhXCkcvriqB4VWLgo6LHXYe4kQCQdpujKsds6x8TuzXh9EMHokgVNp9AR2tvsguxPm9EA7WW",
  "key1": "2HS25dYVbPU6KskuDTs8kEwadgoYFDB8Zn6N1sxbV3hGtqnAyUXgYw8sjC8vzTLzkQ4ex8oqvDgaGgzfe4C6VGkn",
  "key2": "VAGtrZVSwCRnhMTE4WKi3xRcFbpt2GfYMC3qcTUhYAW1G413p32Z19gv7D2vVtwMtg1szogHdXYjiYSnpc9gtxB",
  "key3": "2wzagULrobxgGguHdsKjhEeyZd5FHW9pL7M7B49pAt18GS2bnZWHL727n6ZkT8123wuqDJiSFPX4nLPpez6JezjH",
  "key4": "5i9waRPuF7XsaNPDqXHMgGAqzt69P3EZzh6gfjL4q7Gm2pS3NiDBJqH3wdGo7qHKdE8bLB9wXMXfrMgokMSYXUXD",
  "key5": "NrmwRDsNqFdg15k8TK2JLWRdv4prqhfL9S55Mjkj8JGr4G5N6XvcbRGb35kxwzCmtemVovSp8gYXpdyzUgPNiLG",
  "key6": "2aECtsASxSx3rVmG9qWz4bwwoqVEs3xPkRYieixdVf223vhXZZmXXgwxZwTpyn24qzYFD6fF9Y94nz2BbBLro2on",
  "key7": "5NyEZ8RAHgeGzEu5edK8xwFYFwhJN7fxpdV2GVQxhCaE61WGYJQXvCyjjShdnkFLBayvcuET6ZseLdcMXyyQuizx",
  "key8": "3KFd9RJkRwv3EocgYpC53CaULCCjrbzoi77mbEzGUbzDvuTFFmXkWi9uaPBd7sMeE6uAhWpETBgPAT7R1Ms66j5b",
  "key9": "4cBVnSLGDa6N2T7jkCGxUfZU1seuP6dEhCHLtWEVBmxxzHWct6wEsbmCp8kYMiEjs3pXECJbb15C8GWyXMB89u4A",
  "key10": "6VEYTRmVjB1jRAM8rDFFrW2DqnxU3pecKZaQAaoVzKdk3EoDBSqXuT1T8jzUknWF2TT72fM5EZpHeSJAP8fvKyg",
  "key11": "4DvmTRxnfpjnoxJ3633uHZ8LSoPiiUxTf1TbpYFYWtyFkiQVzsUhSQgC3Ss6YZmcpRUtMBFLZHn8YcBb1BLJmEe8",
  "key12": "87cKxQ5fxL55QD7uZETYzVUMexmAc4EYccSenaPKZ3ALLdew1i7KiEJacJSKgh598LT1eu4H7uGK9ygGxbSvnUW",
  "key13": "xKsAaCHEAwBgjqE45twumqQ2FnpKcV4dvExMviukExEsNmAHWYUQQXWd6xJ2jHtYog686j98B5v9c3wj4FqoEbP",
  "key14": "3DEmTA6Jp73hXRnN3hNr8JjBdkXCawZzg3EAAyczZ3GUZ7FkQPk97YvCDCN7mfiELEjwxxCV6AMh2UT54PDmrZda",
  "key15": "4j7VzTHeAydKbKv3yCBcseGRpMxphQEfMgnaUSCiGesQf1cckdEdUZPzVDb1mJNvruC8eVrTzxTvZLvECRdZ1NLQ",
  "key16": "aGkh8FGjvBfLUVj8DTGJJLQr1KS9bW7DbPeFqn8NV2Rtngp3SZWCqUv3kbCx1rcucTRXxfoeD4SZLvR8vGbp2Y1",
  "key17": "5rYVUZ4mpNaxPTZrCxbdfunRq92fs3jmpoMHWJC9qm6QnHEhGoQCEi3KJa55CEHymKtc4ZuZRWK8gnjnCMiyMXT7",
  "key18": "2cE6RaQNe6He78dWCWYK9yfbFPbuNouZdLJi85Ei6VX71KvuPj9AnGgh81bupLvcUUVBFBovPemfyNAf4rfx3dt3",
  "key19": "3WE4Q8jmLinrrboCNsNUaKowrBg9mET4x2uHriqouoqyKG4MrxPny9d5qHNkRpqsDoi3cCWDadZrUc1pdNRUqyHv",
  "key20": "qGziTfjaSiDCswkyXcHFNGbpVaYW2sCb6ZS75fS2hrK7dBBG6yN3kajfvWTtX1hav4AzqvE5s6qXCMKBn5gBrA3",
  "key21": "gpjN3tE3skMnCP4f1GZ2NYSiJGge8w6EHzq2ifswJ4Ur7hZQNzTZGTJcerjDkvoQJ6qYouaZJhs26Z2BjHGAUBR",
  "key22": "ASohJJZfP2HYkVAEdUQgZwKZuxgcGj4xPcx68UbzfDmgtBGBvrC4iVkusSHEqN1gM9EcD16wx1NLPt9hi6R7GLw",
  "key23": "2xSUYog4WgBE223AtgDtkvcdGPWm3ENTuYTML69jCoK3VckUxkrFnZhuN7dnWMkebDRygJNfpXXQFvobhSu6wUkh",
  "key24": "5KtVfCDnEFcRE6qryUN55oSavS7E58ECK7JtBYGXAb5PuRvsosmp76RNGCYn9WzVvBgPRFRF8ap3N8ir7itZNQXR",
  "key25": "3vLp28ruxtyMLkczATtuehkdHWTQVYVWX7W8Jw1eZ5qNcJQDMCFFYjcZNTHrqinW11oi8H8vrh5b1oRSymM1dWTB",
  "key26": "3QVtCaqFLbziMKAYynMGeFxJ9dYJxW3v5WwRAcNZuSdQwyhJ1Z68HmkxXmUTv9RkkucN3oyCWaZSUFQk9F3noV76",
  "key27": "3dD7ESjFQ92AQqtoM7kvYSrNJUJ7ube7tKr3Z5bdqHJrhnmt7hyqevyEisqtjrkZdiN5n2mCTyzHzLt6M6C7duY9",
  "key28": "2kSUSWSazHeRqhAFJ6nhyoBqSB86bcykpCTgRKjwsYLjB4nRgH72hFCCZL1abKxbWNsDFQ5QEoGiGaV4pBQZ7PF1",
  "key29": "4i8PscnTg6cHu3FjPE1xu65Z1kjLChXAfV719tUeAN1XQRdLDK7uaPfswUhZhypWKmpunpvwNwDx3skUyqYhuhCD",
  "key30": "2oD3GxyB2civJyVuaWagCMsMzJ9LALLxUR9KB9NG5jANC9jmrAouJvuZ4ADtQ34VdWARiha7anhTTTdcSFxt25yH",
  "key31": "2U5YDDNW533X1zkNgzFXUPwu4hy8ev3PmEGUBUxY5xMV83EdEbxQ2KtNdctcebkFxesPdsEYf526vXucDZSxoEqR",
  "key32": "2HBmd5TRQoWUzTFHMdVm8kDxjLrSUvFP2R813dT8dDJRbvosdmUXkjYLJThp66DvLKd6Se3Pnw7UFuKfSYhQ5Jxp",
  "key33": "667PqZN2pHouwr4WkHABGeyGGnK5PYGD2pqputxGTjJA8iTbMukScoUDyppuPugGt89AbatDeFveEMqdEKBeQS6X",
  "key34": "44Ph3K7J5XWbFtk7vwk7e5f22pepZfAP4MwgqeJ1jGiMJRYK9i2wLzzSxn3fnuFDhcTrEspKjNyE59yCQc4ZtRvR",
  "key35": "3mB7SS94oubJWAkqYhtQcJwoyrQdkGmwwWc3k94QpkvzGNo34yer4hr288fXB5pB3GPGhUuMVpb2VXnJsPokQSmh",
  "key36": "h4dggcUiZbUvZWBVFYBg3irk5D3ysQPWprWDpuFUnD3GS4pHAp4BiW5U6gZeyxbrFKoTUM17mPAhbnxnK2n2SQW",
  "key37": "31ZmPYWgHLEAc4VwAPUx38X434s1TiPjzM67oFuHC41QGfEACqPv3DwXR92PSfKsQEN3LgWLScVJam6DqzG3KRmY",
  "key38": "4vComyYDmoYEr2MmzHWLoLqE3xLqEWFBLUG4AQTyxbfsoxSX4zxijGcaEfXR6WP1taJCccHwTiMRj3UWBErqrhG3",
  "key39": "3GoLAMeyYS3VRpYja9PBPEcro9tjzHp6mHxDCsPV9aYUcg4PuagYRYkRpxQ7juK946ScBpJy611MzhUWFfkXJJ4u",
  "key40": "XQNApK7xFfY4CsA1HDhBEQnWxsWEKoW5USqzRSJA4Bgtopc8qgs5BnVGE9Mk4rmXWone3V2AHkA11JaXVtRCTWv",
  "key41": "3xWLZfjk2viJ6HpKfH3hPa8iPniyEuaQzDjfdKLsTYaZYZ41mtfZGDm5pzUz7N2aAQjo8fTnhWWLamfTZcBhEczu",
  "key42": "mUDojy3qQ4BzQ9NgMaFWpwRspQeXtSJ4V8yW6uhwBxzLU7PVrnwj1awLQBpKAtCDRdfD4PW6XdGPrWayCiwU4HF"
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
