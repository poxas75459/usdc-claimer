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
    "3LxGfjudnhHdThWvGDWeRtLGMNeE7A89XFdTJ7mg48FJtbZdyK33iEkmLUxYLxKWUga24TC9w9JK9u9SRY28KEPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNsdKPWhx9KioCqCwj8xJAcTyDXPzxsoy3KqaU3LV2hCZyEUT61knq2sxvic21Ev3jG9fKCEAC5f3pDZLDW2yEy",
  "key1": "mvsevopuTy2boQCt9bbuPQjvhWHY3iiSZ6rVdGrvtzKtBs8qJsTvtqEGanc61QVN7bar72CyMaUYmJha9ChoTNn",
  "key2": "5H3g98JGq5YgNG5rUfe6xy9Bt7SeD3FU37Tsne9KarjUhwdbtT3nu64SKoYVP3NNvkmJh8NYrqVZqLCUXP125XE2",
  "key3": "4gcd5RJbVHfKQSXcSs1odPrdBoiwxErYGfoPpo5jBmFmnAsMW1EHcYfMadGfLwxnZKUdBRmnn9D8gQAdQFU2juBX",
  "key4": "3Fc2w1nNPKzjnkLHWRAheQHGTJWoSfin1sVZ5LF2rMi21LuhyEkhFv7HDU6BaDu8nZ4RUxMGw8Zh6NZJKy4JCWQk",
  "key5": "tEgtPgjhsAaMeLZE48P7ghxZnxdzykoboov5rJyAKEj21DYzRvQjWpUrvPSo7Sm9G1fjjCsR7rtubxXvF2kjkwD",
  "key6": "58ZqCAx4uKoy1z3HgpitR14gfNDqSGAQiZSPHgUtP7nD9RiviHY7MK71TQgzoDSbxZZGZXvvwUhRiKPYBxLW4hBu",
  "key7": "5RZ9rXVuTNsB6cZw87Tz4QFzZtPeftrcM82Np2horBiV16gSSTFfyWeWWWjkBgviSex1DAg7nXbVKamZg5R6JBo2",
  "key8": "5AyctkrYadpTN4PszWW6rk9VKgWdgJ4EvNu6L59gJVVAAzjfDCqBLwe49VGr99meMMM9qDPW7ayFizEsaRZ2cy7B",
  "key9": "366UVQkua13aCvFNrjaTUTXCyw5fb15GgvzwRFk5yozG3ysfW8he1Z2Z836isobmxBDzrLYCdxjEysWDqXVvjC7C",
  "key10": "4QNmRrzhy7ha3jPcy22oertzv3LUbRsL2o1eHzDXyiF63LzzZzvSHPr392XwoJ8HWihPSHaYgw9duhoWbMhJvvGG",
  "key11": "2r1Y7KroGApDwWrHDHRoZQuL1xESFKoZNpjoE63gVLDWoJXo9Jqhj9FFsMHcEUaScHAP2F2CisJAHi4EcNED9wer",
  "key12": "2LV3KauE8u7quS5Z7NnXLna1hJXZ1nfzkfZRresknCnMbjpxsVZHYD7ExSGzWEgm2dqYNbKqEfuTSJWA39sN9efi",
  "key13": "2FBrMDcV7hgcZ7bZttbqZh6taavT7hr7FsP8MpWkb3iuhLNRrBo3Yu48UVkUZBtoSBuWryYFaqy9MRFQM4GSYktt",
  "key14": "5eMwDX7wCetiKvb8NR8BxR6VY2k3k2DQbQxxCMFdjzvTXTmis2K2UN6xwRkGQtx4THfr24J6fce65XnPEB5iNEbE",
  "key15": "TXCu7soNHK8EgA7GUCp7tJqaY8LbNPfzH7drmGNp1p2MHwmaAMQWvaiTmRDP97vvmqsqWG6BmbjsgYBoa9GuGrB",
  "key16": "1gujX1tCkYWWcEYHisniaYooMqhm171jhSHDDkqyAkWfzi7C92yKa2DUnMimwBJn9B5dMPXjatANmnrzacMj2x7",
  "key17": "5VLAcG99SseCcLRBgJgXSHMW5qThvKpSRoJt2yxBvmepF8eYcKmFKrfDPo5nRZawnNhtD7B7g3EMJo4uyafciMbz",
  "key18": "2UrCpaBnXFM9P3HM1pw17UqCZpzc4zJDFSEwzi97EqBqsE5ZnWLEUzB5Gto3TmQP6t1g5LoTpUuutMZ6Kn7Bt4je",
  "key19": "GpjxZ3rak4pj5VMup9XMa7UxSCMqWD1GcxxDPfpEgeboSFjfpqJvk3mgX6LXJW8YHefJCLQTQP3PUxvPpF5dMRY",
  "key20": "XgzMkCiRpaad2YuCcro8B2Tc3FuS5qgf2PSDJFHxbSzjFzVcH7zw6Ly5dtL6Fiu5AuLwK3XmdhGDsgiE15vdtAw",
  "key21": "4QmAb579Tiwz2ZxDapHsXfzZCRDvF7947FF4FVGj1FDA81N9M3Pk8rjnHZu1DZAfoXgrRtAgRJWgtb5qTm4J6nUd",
  "key22": "56rc9GgFo4GngKWzGjvLVxTm49MrvRoZibVZpC7Gy7etc5N49Bhnbz38zF6jh5c7dy1mabu1c1R8232cvr4J3HwC",
  "key23": "65H6etAU6Ub4io8PLrJxMAAvLzkHWfmVair6ZsZmqWXd7agod1EepqvHg8TbySw9Gtffe96GLYDktpCdKQPdYRme",
  "key24": "39wDqwAesuzXCzomXb2snL41sEPdCf23E9SQLhZrBG2DR4Au5BwYg7gfkL3YFrmDxGmAMdnqEMPJ5cdNQj1T6yb3",
  "key25": "3Adc6DqgCqZG6zironz5aDweZJh9XBpcR5NsRRnWfjbhHGftQCuDD2sN72sj9n1iXEGCrkiAi3noD5HMyxJmMGFw",
  "key26": "3RBgjiNuqhQ9sgYz9QcQLid3G2KT6B3z6R29LVKmcxLUTzyBYZRdNcQ2RwdaKw1Ft397Yonuwco4qoHpFbEEG8RR",
  "key27": "3VfhSoFTpX7ckrTa6DGfmwQTmUVZKdnayWxGo3fVHqYpFEoLrCh665AxQcAqEUzMp7yNcw4pCR1YZjSHuTrq4dKH",
  "key28": "55BELnHe55hYFTBSQfXVFpt2E6Aasq9VsA3ZHcz4ytnrQ4RhTEWmzzme5XKZ2kZdRJcG2Y8HY1PNvbH5c1qW8Fab",
  "key29": "4UKMSL63rDEiksHDH1ie1XKzQqARrnzzMAWyuYb8aECLcZZMe2EeEUhdmcqXfHQ7Qoum4LNYthGSLtAmfU5MTdK6"
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
