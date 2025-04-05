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
    "iiukfCmpFnfrUNmGqNFX5jnxmDst8XKp9RP78bR2YaaUTgPvMFnoKXZWktZ4ojNbLaoaUaoSi8enHSJd2sFF467"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fggCR2KB2oa1MENkK37KdbETftf28GqwqPRSANTKHLQ29mC85a3eFUY2GLfSLriMYqhP4wgXMFPPKWqa3YwrQah",
  "key1": "4qwbWPY9Ch1raRzWcr7zW1WpS6g63a37RG4yXMkF8WsW51PthsDEgPLshD4xMBgqwUpD8ShPaP6TMstg3QM73QCF",
  "key2": "5ZHM4nWtsxPDQZ5vipsURoAndZsU7m5THDmgTAYCeNBwzmRzUgxh9GVimfajCKYWZcnLoDQ1KMFBpWahdYHGiAin",
  "key3": "qXwJa68ozDL5xz4SP2jRXEsoDAZ48cLsyYwrFSPpY6H762QkMgE1wYhshDMSwmB7F1Jvwepo5PFRFYqnjKdiVvp",
  "key4": "2BupswSqv6ZHqfbAXiQ4S2us4njHRoU8jGBCLjS5cNapEFznbS5SW8c3PcGvfWM1LjefoCPVi46cwwBN8Ao5xH5w",
  "key5": "zwyqq32TLxJeQNwWLdyj5V22YXpkc4QVKa2n9Lf2YYMxg2qxH7aNKAxQnb5JZYjWAYkvoeEQJnXfxmdwoxKnZUt",
  "key6": "2RsePuxb9q1qLRYahzYcngSRyBdNsftfYKyhq6K11WyscucR9BapnbfxqRLqULtR7GPnXizHfC7yoVPwC3TC5Kzr",
  "key7": "XXtmxPk9ta7UfZxU1oRGbxspp3t4FLKf374YUF1cGiPkAJxzHZt4paWmotxnN3cu6GeSBNCY8VCYjPSG9y3cCSD",
  "key8": "5tP7aUwafoy6smucaTgdtaKEQ1xY3htUfCcjjgJGa274TfiQ7iaKnmWgEk7wjZXkUpYKPhMZLmqtdLeBjpbduh2R",
  "key9": "xoecX4vaGTf2qnTecmreFbBhNuqEoS3mUqc64LPNYdvSaVjALXAoHcgswd8LLcCVakSfSPWWgBR6DWkjy3ueMMH",
  "key10": "4bzp5oig1uPVKGCDH5dPBuuJ6pKS3H7ki5B4sXzJFWuuUiqq7HG8EGjcFob4k1uFf35pY3P26ucoVwWVWUgLBLbP",
  "key11": "qs8EQF3s2F1kNec9kNbSwZ4DP91ad132NLMvHkLSdgztAtDRZFM9QcoonpBiqsXgQd9qzoMGXTbzaAY7eN1r3mq",
  "key12": "49nE8MhoPGJRfhc8JdBr44EM62Tf7EQmwwjPRmyZsNHo2qP1fyh8iipH18FtzCDn9VfvnDYyszBDcwyMoVszbgyD",
  "key13": "dkVcXSrYZY4hFeSovwVsuSTfX6E7fUeG84bXJKkiFpbRW9G2Rw4P7ZUURZMonNftZ3pN9YhGodKD8Uh3LCjNRv6",
  "key14": "4VdKiL2NwHPwPSfoAGPByfeGgrJQENC8fqwB1iub13gG89Nu2adQ37wWhbqbADE8GAtmovB1zEedbHaTwvyDiAq7",
  "key15": "aFhxSMjH86zMCbA3cf1cwyCgX69BRTdJ1BHdTFrjhgiHgspnn8rkoh4j8RpGW2zu3td86zDjsQhqGfp6aGbeN5h",
  "key16": "5SQbnreieA6Jtfy5aYXLf2rJHtc7CgH8xJqEVWq73fhZbnRGpSPAsH8Ut8NoZ59qwJGhAspYMyurjXuMebChdjdL",
  "key17": "2Ss1yLJy45Ks4HPRzgSN6q94YwRzpk54ZnchyJfEGkAT9XLsVzWSsRFh8cKpv27Tu5SZAddtsQaW3HTxRz4uJYNF",
  "key18": "5Kk5pYZuYrUZYC4y2hrd4Rba8a2ny44GauTwXJcbZbvAESmdbmMHbTs3CBjKB4HhKTptYev6bfKbqHh5A6E4Vb5S",
  "key19": "5uRrcyzkgV3teD3dcB7MmfekuJxqpCWMPSVKLrmHY3nLGBnaLANzZQNjqix3Ka3otvgpmB2XHhbqYoVyYrtLskHd",
  "key20": "5CnQaLJDjsdZXBuQYUUvw2zDRKtqtNPyMm7CehsH8HWRKNAay3Tg4y2ocwYqg4XRc9HiqNWf4LaMbA2rTRMVkGQK",
  "key21": "5Yr6K51PYmmVbijncENb9PTArJxH8QQMeUSDiS2SDAurQdSJcrNKcZ7kacTM5Qtrrv32GGjdCNqsjM3dX8deQyAP",
  "key22": "4AXSiEFjPmfcCNAq8cibKq6yrijMsS2CxDbRdfH4dXLSC7DoWouBH7zgDxAS17e1QjVdVmPsa4CrT7SxPYbADwM",
  "key23": "64tWNSAmn2HfbxZVVrNv1c9TdwXW7F3dVL9JWTCX7M79xfAhgPA36DcuroU7uYVZAWZ8vL2Q2RH2JjxXXUXYzoN2",
  "key24": "4FoTigXrL8XZXBw3C6E6bKHUN7Jyu1pfa8m8QUYkkuQWh9Vzb5qAPnfa2L2pCGMHfdChPBMZfBTegnb9WgzvbWeL",
  "key25": "45GCtU5U9qoj19C4xv74PWsRzWsFVfVvwxKPRx1oob2xtsLrjormpzoP1dHzkcKrudr4S1eeMVDCEZbQv9JEaBnM"
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
