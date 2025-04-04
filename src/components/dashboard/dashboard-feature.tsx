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
    "4ntaHtmYQqsthQ9KazmUUiUE3zNVmxfo52TCe7QTaLQnN45pf5cUqT3ik5GtDKssYYemHuFvgcYzgTfW4JNamd5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxYbeGQipWafncHteWrookwTjLkmskrbZG6rVExzoGScLwoHEY2izs13iCJnuMuEKkXxf3Qiax3KD6ZQ21nvD5u",
  "key1": "4byKXj1dtMS4t5kvzTqYCBnBYmBt6o5iYprnLs5WGQ7fP9KrqDndU1hp61F9nTvCoc1wDYQkcmFwXuC3ZAycxBfs",
  "key2": "2o1ZG68qWppfGRigxw5nc2rHcML5dZTvJVcV6HWLWjRRUiJQUNiZMP19qfzWUdu4omFPv3h348pRz1f8mauTdQ3K",
  "key3": "4gQB55aKjUjm5qUgnYchqqCxGE6nagf9RVNbyycyNRPCFma5p1gXeN8rVVBBBg8wqzUrVNoagcJTP3iYDsftJmKn",
  "key4": "XQHfbP5XhWnoffFeUC76smMLZatzPazEchn9qinhtFkEPuUAr9D5L5QAQDEcbdDsF3H6v7X7EbCDaj3L94v7FAb",
  "key5": "5YFcGNrowAERdzbSSYAEMZS758UwrQPXEGJAjo6gCs24ipEyyjqG3kUyDXc82Bo11NEQdNB5rYoAVjVSQ2uTKxF3",
  "key6": "hx1VDBshqsDNmeoYhp5SPe3PncemWRi5gJBLZewFjYpefVKzJm3uFCH1YQCyJ7EibjQWdRkMUcVksgECmdqxiqR",
  "key7": "3k7K4Y9F4HYKa7piKsXYdd7mZdKM3f2QUQun9BcndgYVgHtquwumjK1Vi4eSZFVDTySugUSCT6gekPssu9AvkKii",
  "key8": "3ZFcXoBYEiZ8N6qZDZSkB3rui681QgCfjWiAqSPL5sd9H5oeCanwsxFqUjvQdDn9kz68YdmMnQdtA5Na9Wy6Cpb5",
  "key9": "5xVr8WzeqosxJpVrcqHFXA8KszYRQPdpVHGzcvLga3T1UKhmWHNDSkiZa5eYydos4sN3jYyU9AwqQdCNCYERfBz6",
  "key10": "4aDwLdA4tumCjRai3JqwpkmjEacLqPy7FCwgWiWHxCTkChZnTS5ms2C6YMpBnhiJVC9k5LwFrsZm7XuWzxxs38aB",
  "key11": "3GrrcB1Ht9X8Qo1SMQRnajGx5SESDDVqyCDLR5DU6pCFdc2yVBkRBUf1DUTz75DK5gVa1mfAVLi7YXDYq3EYWWai",
  "key12": "2ZhSevvhGpHkra8bPvB25ZxWaTqMCdaxxSw37NzhNC5v4RVLgGPNJt5x4cb2o9c47nyMgxyrmCYkomRqwZzzYoqh",
  "key13": "quZVjz139KitWoaYkWz7YELDmVHvGVYLdmADnw69482XuNXuuknV6PuXG65BUGRAQ3TEXgVKWxZD7qWdEcYKJAR",
  "key14": "3TcsK7aGKkxWEPUdNQSyU6DrPtH5t4Sn5X7wGK3aPsokHD2mgZVfZ2tyaWuoYuVzdAAkZvop2m5q2Z9Gn2wn9H39",
  "key15": "2NSTs2FP4bY4Hd2gY77MLZ6swX5sq777DLghDnigwJNV9pvoVuTXrYj7ApN2TfBwzjFHkZkKzzVeFeZ6431yR2zJ",
  "key16": "1jC3EhFeGBFQeBkf5WWypKoDfP4NVhPGf237cVPRzPtC9MxrZ9CQipozdjUbsFAf31PYkp841ZsCWvVbeNJLMwx",
  "key17": "654M7rQUwXCn8Z834Jy9ochLk1aghycMvm3JmmrGRCGiC9UgsVZh1oFGhGj9JKrPivhZ5apejdCG3XpKT5vVbMwf",
  "key18": "3DE3EoSwS9bbrUC8RWhNh2EHnetd1wcGVoPVsmvY38nVckhiGPmgXWqAQBedwAF2GS1iCD4xfwP22XGbJx5pQaKx",
  "key19": "59qgwnLX8WMyTAsNkVccnx59QMVy9yMXged8kokoFoXTYYdm97MhjxTGVBwVSdTTpq8KXBsrCyoPqUEE169wUkub",
  "key20": "4yW6HWyJcPweCSC8oMnWKniutFoYrkZecieWs4RpvjrZtnzWPyAKMoULLhr27MRhWEvuVQnbsiJPtDdZHH9R2KXh",
  "key21": "2cJKhz5YwBHziSYPokpm4RtDDhjWcXSoKxRme4tyv7qdn4RwktyzvfznatdrkJ3c9cmcmLCsC7QrzZfr1ge532Uz",
  "key22": "4U9jezRkErHzYkoJPt1jkB6MpXvHd4S7HeiEwF6p4yvLzdzwAMtPREdWBMaHqDxhnq7B2hfGwQrWFe4eLZRwHvkh",
  "key23": "3UP5kviRZD5vaJdgCFnhoVGkUcFZ3ZZw3PXBGEg8pjAdhSv2GisQrMW56dCooQpsmj3jn9kH3DMsdxMsrUPENQhj",
  "key24": "2JrYDheagya9KF5hAe2BEcGouCgwtszk3TNrT6VB8Po9rc4is69njHSptAihFrHxWUnBiDQ7SS9LKc2RiuWpH3t6",
  "key25": "asEmLTugW2HwRf7s4zZxzGSb2kZps8NtJAWLeLqzwzt8d1pHxKCxMY7b2asSgTjkjDmVTbmdXkCSRriXx9Xqafn",
  "key26": "3cWbWbAtJ6RQmZRePDnZfcduxv3okpSjfcuUVQPwyPPqbJowQRxu16iPupyGutpmLdUhiT1dji5KZaoSDLZKqzBy",
  "key27": "37nG2w4b224TbLmwDhcyWGLtoVbk8LfJbhH2P3krgVBpMBsjKDkwL2MtcL92ZYSeQghkRRhvZTu7EqvdYaGiNe51",
  "key28": "4eZzBW7H64d4LxdBT3DkKTKgVRi4Wk33G8pDvet1KHXkxap3HeXz2a9BASL9yJU2kVdoT84ktsi86qLFxuxv3h7y",
  "key29": "2pUQovJokFVUMBVWKboJbQVi56XEDidfLY5GPACwNtzWLhCY5GSkxP4WfDnUtG4AmuQoDXUa3xdYF7NX7xjZVBPX",
  "key30": "njEQKW9GYddWDwmQj5kM8ghYvhHgYnX44umKh1bvKjFU9qJQWgzshLJDpaF61926aukWgx5w2soPZVJNmLF99bU",
  "key31": "4Bby9h6T7ipP2f5iCVn5L9XsjKFVo36jSxiny5hJiuD54AhBbuPsWPgQd7R7eu4QmHWPXqxPFPiAFAB6LEmmuBBQ"
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
