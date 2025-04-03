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
    "pXVUiyG8nAMJicAiykEXsNv69XQaFUJmwHymqsjB2rR8y4fnFDsEyv1pBSVX7QFxCcuS9JNhxy18NCgckq4WG2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmDkuEwZH1fPJHup9HHfomXKu6WJMsxa1Ea4Mh25SozQe7igniSWHcwoL2swWDfrv9zHSK6BazKPEDYP1Pmgs8n",
  "key1": "5BLkeaT5ztNEJF2EEWWJcXSvxKiSxfRPgweReTcQLFfdcYPwSFebRRe37UR9jVpM7vgy5iGoQtvzbqLbXL9nqD3j",
  "key2": "67AtHFV5Ggm6KPnqtCcvJ5MzCjCkViJFCpXKuE6cLZDyeC1RfoTfaTsj3KMhuxWBHzd3rfnWELyEsbsL74AkMWNE",
  "key3": "378nmHSBDG28YNn89c57KuAwpwRVKJGZKijaH4ETyV8AZrCJEG68KzCrUQWJBXsHSa6gZUHtkeG8EsjMzweiFpUP",
  "key4": "2Bo6hpyDqvanAWfZ4FjaTiwaaPszdKFtT5DKXtgLjzCF4Y8BfVvXCyo5HRWWeugVmb1PMq7Pv8JnUCLGJsaFtrHz",
  "key5": "5U58ies5SuTLRGbbe9joWiCMKMUQBCSuPA5Czyc6T6UAuAm31oTgZ2VQVwiGQ77PBZTRJVREiDvtnh5DYSEQdHri",
  "key6": "4LZJxLyLi8i5ovD429h6zFRJ5nPnVX3iPUMoxFArTfcgrUcD6SqW1wYygzHtwhvsK2A9wM7jBKiavnqeEBHKoHhW",
  "key7": "2rVohuNhjiA7eTP4NdoNfkFB9oiuMxYW8x7Eev78fzjzPAnmsuE9DJhkFEiPU9gGd5qTNqBNeQNM15E5pXrJhNYT",
  "key8": "4rhCaCRDi2cRkatq4DjaSuHsfkYXtDJRRba1MQH7RcjTXCHUwEDYZ9tEML4tGnrtsZkAWThowoYMXmj6mYtPhjTp",
  "key9": "31HATzZZtfPsJqJKV82H5prQwt1QBCCSQTmeh1NJMTqPatZAa9kHW4gwzp8qS5g2pAa6ndGyo51eJJ9kvdoHwrS6",
  "key10": "55Lqz7vMBr38W8HfkdFFoWXcLXNemNYhRCnMf6jsh5zcUUBYWXpVaWGpFVt4SRZqpr1GWWQqUg3eMSYYVadr1QBU",
  "key11": "EfZmBRTKVJ3rL6Aaj3v5PXqMzC9qUQwaD74hCUYMs6M3UnbfeGuUB1bqE7UfK42Z6zNhVvfvuTnvNy7guuxGshA",
  "key12": "u25VU7Jd4nBxaWdhdNMXrBwfBySteoezkdD11bVdKY1SHP2tGdkRg9Mj3AxM5Vj4R1RebzYkgQs4WHpW6GG55jg",
  "key13": "4M9UyVHK6jEzXHjTaDF51MNP5NG9tkQ2nL6FyEvmY8r978RhotrzKPGyjzYoMrJaoNVDVnWGfE1f6R6yK5Uiv72i",
  "key14": "2CZX6vmZuKbE8H53r6fc6qskAZ4aaUMVjE3GAQ5AKYuewqYzjbrp5Lrn3rA5MDqXmkmpBGnvrF6E4NqJP4Rn6FCF",
  "key15": "2qE2RiETQNPgA1CtoEZRNF4fWs6wgd1m5oecKcvttxRuDPu3VJPA8uYHH3r5nTauf51EjmVnVUgCV5Q36ASPAkX5",
  "key16": "66i9LP5JBKcFP8xW5YXdpVtiTAi6P26Rmoy2hc2NCjqwV8fRpyDFXavSqamiwyqVLnd98xunkjAVx5EJkukL9LrV",
  "key17": "2JCCqzLPuzjmXusZH6kfyNaNpLEJkpg6cvJTzi5U6xsRrP6Nv2DSy9k3jEYA4v94L3aZvzj69xnxnVrPgovCHsd2",
  "key18": "4MEmyinQTxsb4K4y8AMtncqiZeMKMgAHNNFQtNEcdPku9Uf73ViiGSfGiVa96rZPGXL4ybC5PQ7NqiNbRzHasimn",
  "key19": "4kauaq7PAf4Wh4YwURecUajDVNe2exLYr8fL39KLksVMkUyKJzVDDTNShiWPtmyUPRYFgZrmmEAKC8YBj9N87o14",
  "key20": "4yVxbvLeZPRLHbRwi1xqT5dqE63ZHDLjrEFpUNhhTFJPBsfXEB3LWeSLGiBfnsULZsnzBkycG4ArdcfJu3NsXJny",
  "key21": "5M9qu7XVQBv9CsZtqNiq6nhqNaxx8eCgnwBcgtjoPRzfKceYma2ouducgNMY589eKr5bQ1uGWjh6DT6vkwYWW7Mn",
  "key22": "BbBghztT8P5d7EJhQ2Hyce6mDyjsyQFiZnazozKxE5WwG3fF3RmHFGDZk3nMQTkXxHyTX4KqjvUwFRQvLxXo64G",
  "key23": "3KjtszbqDH5v8AyPhdDc5cVZD2sPpbNM5jdz2BZ4aWLJJG2oupQeSEcjt2w7sqniaFpFTWkeJKTdM43VxoffvHr2",
  "key24": "5RUHDmHKdPbhnU7jUBmL6h2acFqJ9gmjPPzaZ7PZmh8jWFqSHzU4WJJ55sPUMViAxqFBHWpzfS1MRAE3jQP8HgPH"
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
