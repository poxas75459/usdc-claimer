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
    "rBnuBPCJWCVVHvgnBMXbFAuiJUFNkhbFYFkVuG7VYYneh3k4h3wqhR219cEarBF6M1yHKy6LrCZsPTnqVBqvCz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jRGdqsn8vSD9f2sqtbLW4YdnGTdeShTiuhLPpLRZHSJy8TkopPTgXf1MiX1NDNWqpE2RqmbTMJxcKBqQFPyy2n",
  "key1": "3H4xFLJWfXsvqX497sx5q3wbJfmTHTSPecvsGpH6gi1d2KZ6bDVGmpJnRxVAYJmwWAiu96jRWastujQMhqwAzo5U",
  "key2": "5mw6uFqbBuN94zAXhFQLySp6g4KYSf4EUEuJ3RTWsWncnXBpHEqJWucjpPSJWsSs9kXRibGLGnWoupBVPtGpMdTf",
  "key3": "55A4TfzNj8T6y1fxop6hDx7k9Fkwe2Zq6Ne7fZRYcN33ncGWQHmUBvvgocpZCXniasH1EwEHEZi3QS6tKFp3AeYS",
  "key4": "5PXY7JzThpixL3qLFNhiPN1uAraUiJbDUzZ5emxC1zqMRnPGExeuzHqV5Hbp8yJSZ4LowjSBpjdtCUGR3Sa7yvTa",
  "key5": "5DbRpbWqiLZ5quTqYPQi2Ci3S1UtPLYPtyHxkp8vQtzPUsCsUMTAQc9Cxyp6eqjWXRHKJjNicqfryP1jYqyx1r1C",
  "key6": "5zPpuRhQbbZX3GeFERVy7jrt6VicJHcyvGpuMsVPQmFLCyr7f8qtEhetfvufS7SnQdebPRf4J7F8pmLYjTArnJzX",
  "key7": "NPn5nzP4Pw5vkaT9HZAfLjxe9aHghHD7UzdTaEhBkJUjxfvGKQyuf2hC9Badbwx135cB3CkeXXENaJmWFbpTjeK",
  "key8": "i8r3nUE2faUF8KhToopzCoGBq8kjMDRwxxkeEDmHyniHHEM5A3BLNNKRyb3UbuZsKXXaquHQH6iYW7KnJa2YhJt",
  "key9": "29nHsaYfPe4eDweXKVb4YXjoAJ1zLda2ipHNDLm7X4xiWMYooaJxQT5Hu8rmMsMxqoBxsaAq6QS3XzdyGks8zZmy",
  "key10": "4ferTbm621otxXSigFpyRdGBSoFZT54ynWHufa2pF1LuyThzDp7sFNhUw7VRG1BoeH1zusi8v8nvaKYgX4Jduy9E",
  "key11": "2dvpfFStWcKQFpbePoU9W5uny77VKGTRcK7QyyYAyUFg6dFME9AE7B7zuhFRy4SQt1Tb6JfE3vpFKb166mzf3Q23",
  "key12": "46pK5mZNjQyYfMPPVaGdX7EmLgpRrFQ9ymU73kbGZYHKLHerwhzPthwwZnRREUQGdtGPtD7vVDAzBLeBz5fpqtBh",
  "key13": "5mvEkt2w75Nh9ogff5KSTiCtnvyYAhsuYFgReofQVtALiJ9618i5FnmeLyeffHu19Be2Eg8JZN4vC47qRywy9tDq",
  "key14": "5Q32TAgT57QPVaMA2hQCuzjUe98SKeJ9FoqqQ4SZ9URu6D82jCXpXmqNRrBi9Wqoahwtk1VtHqoPSpUhxzwoukzp",
  "key15": "dRWT6xFwbQL4z4dF24koN3zem3BcdSxCC5GP371rrqrTtaYwy6c2Jb6BATpacZcaMgMebyG21m2JqC42JDzB2mP",
  "key16": "65m1bWvFCjsEwFaWHvFQNZtQdyYRoJicHf2Cqc8uxGBepCWLYd5iqgt9mqXMtWSpBAjw4BAwTNoeK7K8z3Uj2i3y",
  "key17": "QVHfDXzerqrtgffTgwBxtZ1RwbPtrfExpxdxYAGQsMbpcgDxczp3xJh58GDUY7WXTGKporJbb7eTrjiCehsPTYd",
  "key18": "4N3aZkc74CnG9w7hK4AZXZAiT6tUD8iFBXL5QyHf9dKhJPyrmg9shaueaQt43Pa9RUxo1WRd86Q9sqsQ3HcNkH7k",
  "key19": "5DcjYjcYez3brApuVK24aaD9F8kxNafzXwsEQTZojXMTfroeuk8e3zCDp7fZmAiXwBhjRQ4za36xVyRE98TPbuvB",
  "key20": "41TDGJjxUy5x1Fey4tkLSqZxHj4RNtSnzyNbfJnYe6irG7m9hHFUpYd9W8pGEn9Sbw1Vmf5zSSCJ29QBh37i5FcN",
  "key21": "2xuEC76iAJnMfS9rvUzaaRb2a77kTjLgHQXCwyVkJG21Vygi29H8HSFUEXeB7wVysSGSh4r4TU4mfNXaCagMkCzH",
  "key22": "3xra1CDB1FfYR6cNkrhb4N4V8hqzJNTW3nXd5KeLUKpSzeQ6U1GTFdB8FyiKks6WVZ88BX6Cpg1izBtzMGyeiryk",
  "key23": "4dajk2YxxNVCuj1MMBiTNvDU3maTUkAUjvUUoxBHgW3wSVBYgPihCEW5xB6XS1wwE6P8KQcjkcmJ3drJ2NzxJzef",
  "key24": "2Btb4w5zVyyt1SCWLfhuvHvT369ZEFNVhcijSZUZzLdJEjfmCV8dVa7AFU7VDaD7UbFqqxYvTUJ9iYv3NxFw8nQe",
  "key25": "26UcgnAVqTErdfi1NSoASe1TWRzHhovHxPsnH1UQViHMPeJtwyVgFXba7DtQXK2RU5dtHfuWuirb2QRFdRsyJiGJ",
  "key26": "JseiUV3VZgNZfv4FCAhpHy858Z7k6het8vUtvTpCgzCY2Z5DBsBb4NshucavtKN3QEyLHskgoMm6adP83HUPs6P",
  "key27": "2JFrjTf9NnJr78mwzxQveL2uFVetbNHMEHTjfJyfAE2PnvNuh8Y7fy8WksB44bPj8dUC1fxjD7GjBpE8qs9yDGWe",
  "key28": "3YNmg1EWKkGiwjx6VifEGCxqyzCg94uc1qX8625eUXWkNADvrQ5TRHE7n5cxZESWuQRgPRNW9w8WyuC7KcRchEwJ",
  "key29": "3wsZ9qwhtqtuNhVCM1bjYnPRHEEjQsN449TCsWxRWEMkY6Lb7j6BEfzUX7w7J3qPtzSS81dMusQ8L4oMvpZnMCzQ",
  "key30": "5c6woX2oEQa1qinTbmDWVohFQaqcCBtFsr3FXuJucatKJN3QWessHRGmdq3XzkLaJ4H92F8V7sNQymnqPZrVheNr",
  "key31": "5cDKY5HFayDsHzLoVWmddt21cA4nvjDH7zRmpiXGMFsgx1bQiqyVkRR23v5x1j4pDVe4untKjWGeavtY9hnhXyd9"
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
