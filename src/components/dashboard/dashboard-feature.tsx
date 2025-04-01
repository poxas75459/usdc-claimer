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
    "3AMJLBfX74mHLrpgqSVFjMumH5C3ENeHmFbidjqPuhhNunMHMQVSY5soyViFPX4a2XXa5tFte6AyB984FbuvmqDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iaUk1tngjXiM6HR9n7bsD4PzC3E5oc57Dr5pd29XFKwaT8UoTU9q1oc3BtFyCMLGPAfNSxir7oXKDQSf3Qq2sJo",
  "key1": "2nincRnSyidDUsPBJyyjQcTVwLSjwbWH64D2YD5nzrmFGgRfnEpp3CKAQ7pXfT4wcGL84sERGQ8Mg7K66St4jsuk",
  "key2": "2v8No2YDZcQ4cvsz8tB2kwMpA8veNL6Zosxs33CNrJ4CF1pZTFn2V7MBc5rYFk2K2hRGBwSZb6bzdFapouVBQH7V",
  "key3": "5kD2LiFVTjoCiLZ12UY2J8Xsgri4HWjfCkNG14Kqy5tLYRa6WbS6YkWJKwmRnQByhJQptSJG17KojgTsq1j6DGAW",
  "key4": "5KyzxbijAhaxnwrJRdM4svKXgUX2svHczk9iscoMa1aMe9Pob3dpJCdk2dat8hjnT6AjX6JzUsV4e86r8NX5mrEC",
  "key5": "54zxLjTUYqXybib7uPvbB8CUbtrSmKD9X5kzACEzPwM1Mr4nWZchiH1MsNc92Js3mE4WTYuwG7uJqLuo3pGYjZpP",
  "key6": "q7G45iS19mcusir9mKNZkhxbfmzER3fT5VfLKwNoFzAC9xfYcwdKMQFP6VDtk8pRrMLmTEW2ivoaBpkwUz6wojb",
  "key7": "mRNZ9kQTKGmFm9JqfjaULmMKoZX6MASE4dmqiCkr9bCJA7oeto9Ece3Q2ciD7NefJCScTUQSSiSmH2T4i3EhUtg",
  "key8": "34wmkpj9XcQAp56YetSgUxCT5mWySihUr4zweXguF7u3ourQGtS2cNUiQyWaYQMEmcN5JHRqgu9EdyUkEdJKhbQU",
  "key9": "4TmrELbPUHTdXqoeMhs2MZkMYERzL7XpJdQAYPyDc8JNJgn3wZCoKM5mqhFMHKANpjpEiuh13dppetew4WCVcWTu",
  "key10": "eT8CRYGzBVGa3oGpmtmhdRtvs1jwxmNxuS2Eqcv9ZwRuUvCjmPSL7TrJZ4tiPxmHFgWo1y3ghURFtQStMasLVRx",
  "key11": "52KXy3wVEe6MsKBd6yZwZtXZ285rP3npNfuJBhgVUXCQiwm7ibwY3FiDvzkfBueXysyi9jZvsx3EgbFdSbjuEjLK",
  "key12": "45GHtT958PbUgitEWHmXgrJMeudZpRXFYPQ5Y7gatJR3dxVxVbDxTHZ1dn9ibqMPpp5YwUAs8KStRQPFjfYrRcmw",
  "key13": "3FZiZKNBrs83hrdWYh2ZQaEpqkaYFK1VGrbMcjmtAMxzZuWHjW6BTxydTxyFvVvW2WPMKbo4E619JVwejZriMTAy",
  "key14": "2qtQa5hZfmPsXS5siNARk1RzxPREX4CjLodbSG74rsXXXrdkQVFh24kX9e5e7Q3uaBynGFrSXTpAvZV41VvKxzh9",
  "key15": "bCkAikePN3Vy3Mrp3K6nZZMQUt5gq4YXLoAqH5w86WnmjRz84XS8N7kMYhHtELbgU69tkk5ma7DzTcnV1EXbT6Z",
  "key16": "2Q3PdbCPgEydbsrhiNrHWpW27K7dUbkQx6oqzcXQsuB6niXpqqnG3MpzEvUjV4DUQawFNdi8dh1rxLUYxKZd9R8p",
  "key17": "5uR6JoAbPrpTzciHRrA8CQXFqzabMhMjnkHRrgYPBtnNSgpMAxirXA3tmQZkqjf2NwG5NPC9zHVQ9GbDcq9W8pEi",
  "key18": "5HrKwjwbqoGpVtLJokAi2GrsCoyFfe2SBFq8s2XnteiToheW9Adh3sHEr15kFAcJG1KQ3jAVJz4nEjf8DrHjLfKK",
  "key19": "5eENhDmqeXP4dJqTMQoe1tyGmjf1gxQFM8uStZBGGEcJC7p1s7iRsyiYPbH5QEnSvMVMxWr89pp3Uj4Z9CJxcoZp",
  "key20": "4WwiMHdWF8UxDqHW4tNU8i7TBAo4wRxz6Zf8Snoer9U2arDvjNJgduxkoteXsEptWvytHYs4Aw9rdyP1Jpe8AM7C",
  "key21": "yKM8ddFpqJk5zP7PCzPcUHbsEbPBa43zo2w3SafCu9JosFwk5S7HobcFpR72kwMLwvsMnFT23vfLE549nsQet5E",
  "key22": "549gZR1eFcfJNz7mJa8dSKx16nkCEtmUs2biz6mNLnwWUtV9jNqyZsQLBuciy9M3Gq9YH497o2ARFUtvjgtZYMcT",
  "key23": "4Ufth56M9ojRKizo6qxLN47JPbkKX21Xq2ZkRg4DCxPr68waPm2eDufRdd2xHrP2KVBnFojvvM5QRQosJF58UCx5",
  "key24": "5vRvrdq8n26Heafj5dmkTt2faAZsmwLwYDw8QdpRRg3qEPseLYkgXpgqoqWVjXY92CtwF6zpa2Fkpt2uCEsmqYgH",
  "key25": "5TsXkdF57W3X9mGqCwSqr3NjftspHcFygJn9KTRR41R7HAGrzHMaD4rmWeGZUjvEQmQt2cL13Y7yX9iVAmpUHZYg",
  "key26": "3KJirmHaBK7f2X7tQpeHAqxFKpPpLhYmETKQrjNkaGHhdKjynjQm4chfagzq3Fhimq8AoTrcMb75G7cbDkEDyyCd"
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
