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
    "59vSHTj7gfya5YxpkEYFzYkpP19ZxWkiiFuozTBLN3gxSYK4G645XsvY2ygAZ71RYjV9kubBaZHDFJfVT2ZutBN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoB5AhSYEym7ezU6mvAgvWsWHgTqgmrJFWeYQgJXPG2rDx82ZZUchcqCpv8fLCwASy2vPwWvGLYaZte8DF3iqzr",
  "key1": "4hb9MS2EtqESVD4JZ53NySRinak3Lda5X2HEBaB3YPH9gazqrr5RrPMwsgKoDBgEt1EL8xyG8eUmHBsNA51TTDsU",
  "key2": "48uYhniNKXphRkvizdrTgww5L3NeXw6spo4S9RmRPLfUmpzVAWkbfLk3FuSbr5yYtEBgt9df9RvDt75xgKioM3vb",
  "key3": "3Xtj67TySMLVzNdjb7ryUdW2HZk49P4GXiVnNAToRUWviMAf737zqnut7frhaEEpkgQhEGqwZBvhdsZXBrZqp5C9",
  "key4": "67gZh2Np7ecQwzm3rr4e6nMKiUKPDDw5oH7gMza7HU48paFHun5eV1sfh6ms18LZc9viQ7cRRs6BKDZtmEaWeYtJ",
  "key5": "22uhRyFAkyZynK2wg2cNc3pwD9gVMgiRGLYKZXqtffgZdEDENEYMbSV44vfC1K1MDWsvfp1PLGrfXpEYFhfwAo6H",
  "key6": "3WeQ1o5uPPf6rFaMgXvdNnMgVF1S2esXuQ77t4vzQ4NMJmKqWDJ9diCgV3eLjyt1JkRLu8bKQQw1cNcPrbENWqzM",
  "key7": "2tdDjfFRTvCNrgsdjW3ZcpKHmwr5iuDxhTYxo5GmvwjuFX93LrKoVCvftCHgk2csJvTDam1rpXKTohHaJwxpNRWM",
  "key8": "44tedDuqrZo5dGw4RNerbBD3QLugwartX94PXNUvpyYNUnVk99k2yRhfPeBVoyukNbrHfEFoJMv9gVK56nLtG5Gj",
  "key9": "5P3hcMPzQUkGL5WFqFQniaMHrKWCS2XMpbEqc6RaQGrpDV11SgV8VtcDZbZR2XZ7hE9AHMZnBkzrLRhT7m1s8Phi",
  "key10": "XYmz7ipBV7e3KygVyodao7XE1te2brtd9vSPnVoBPB8Rw4fn26g6pGVLajAwiHsCB2s6Qoekrg7dVMufi76uKMz",
  "key11": "cv3GSvxtnEVdBYkxz1FYQPT16PGtbRS1Yg4YS7u7MFe8SsRF2pPu7rJu8fxqMPWaGTYA5UPC3ASBRUgEd6absmb",
  "key12": "2yv9NeJzBWfhkuikugCvwW1Q7HijjHwSPHEsECyXd5Dp7m2L62FwY4QvmiuGUjjuhezcFJnizuBNwYCUiM4vZuAP",
  "key13": "4mqpGJRbxHZGMXgtuyVdU76QTvi5GyiiznxoNvBACYXshsgctcZtdLK4ZCveqg3jHa8fBskrsrNLht6GPDdFkj2U",
  "key14": "2Ad6nHSuDbGBH5xQ4iQumdem6QkF41NGrwiYLYUpizWn84MUyf7bLPNtJaM5rfMHn8AAcrezLNAUvGZNHNYMAPEn",
  "key15": "2fZPvgveCiDBFBhZixanBkuDVQNUunCG8ukNGswkhdZWDaPJEdPmum3QcTKjUUDp8GGJwmmGhkkACPpZcAsKbWQo",
  "key16": "eTdnR4pgydYQkjTRaPwPzTdpyHMrzhFjfj35WSG4MSjYGboEgMhha5UEBD7LA4SuQ2goNAm167bDRkLK35q8GHA",
  "key17": "3ysyVkieBYaRjLqvaTKiqqAwh5PYzxwTkrSFWZEpSPsD5Bs46LzQTRnKHeQQGxtfEV5yCtpDCmZUUFhoed9wpR9K",
  "key18": "2stZUMGsKvDS5rHTwR3H1Jvy8Vrq5DBgLKS6TKozvYxGvqC4Cry4ds1pR6c8VtQgQfLqmqm6m7s6kadj9c5Hv4Wz",
  "key19": "3AbYc4hQMgJ7AfeZBPXEKUZrDSC4x9PWysdNBwbf8osQUdRJtzwCWiyeGXHAeQ6WvRyrU5Z1N64azKcpVyABvdvp",
  "key20": "3TsfvxiJ3Xm66bjZ1m34wEEvoGXWFCAD1zK7CYWBgYWvRctMWG9MhDKXxuxSvZH5tHd1RgktjSknnfwAgREhqTq6",
  "key21": "56m5z7QQ632y851HYCS4pfrSSr14BVtSfZgBNrwirycj4zRtkMLkCGb9jGRHBBG9TPnJHyrGZdbGTaEPDJUgmwNn",
  "key22": "5Fjj7n2tShjTdeF8Vf72qqpFW5tBRDzXKwsW4JyAyFEUsQvyhkdundsxg3huoVpgButbm3JY7bz7EP2kMBrpWg2o",
  "key23": "4DTyMoSZLYDMp28AKGv89tmXxkU8YNGMvN2mUgXegQGXcmTN7gHmgvSBjTra9MFUVx4rcf9p7ptQgKrbzmfmVsMJ",
  "key24": "rkDvDzWCgFgLB5zCEkAZyG1n5K8J4vmPbX3xWatPRRarn218QTkp9jup6yyorQDMHFshwmDKebo8wxCL6Eecc3b",
  "key25": "3SjPfgh6w7F8m9PvxTX5ybYKidfHRgqpG3mgHpJFL6eA4kvHQDgGy7JxbgFbg7pYwTPtSEWSnUpk4M2zD75YrJ7b",
  "key26": "5CTvxskHVGtQ9R57gtWtTmdTPSP1vTTTYfyiUr462XwCg67Pfv1r6rXLTcDj5PwmekSBy9ZZiZEe6xmDDLsBJMAk",
  "key27": "3HqgF2o1aJjszW8q3iVzcfuS5Fp55j1jGUUYobrTkgtUH3vxsq1DSfYzFP74iCmnMjtA6g7keTB1KwURZrQEZMrf",
  "key28": "3tfn25FtU5i5u2EkWsx8BCDH3eHs8sWE1v2VaBXcbzK7tZxPsDLRJzSbXRkvv2DfwTd1wv5hz9zAjooZekU8uuyZ",
  "key29": "3K6hYdC7WbvefZW7M5zhuyZmXrdffSQAvxVybEoXSN8EG2NAfhXAsqfaMsFCBrdqN8H6rTti37dbvNbw1Q42F1ni",
  "key30": "4dTKS8NRErtDJDQPDDUfEBvJZ9wor5Ya2EhDqVgdc8H3f2Y8AmMnFS4FzTwsmEARu876xZRoZa7HRokbMXDJC6B5",
  "key31": "56oJ2pcdiUxwwuVTHMNBDZDZeWhqM6YWpbKEnZ8LWcEE73zw8SqehMtfgE2jgZCEgjXWemRwxfQ5ZCJAz54uz2b4"
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
