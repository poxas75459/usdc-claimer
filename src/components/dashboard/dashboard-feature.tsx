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
    "4Q5TLoNKJr3cjxQxdBXZnbnew3aVPQ6HykAUuq63a5y47icbgrt4DAiqUpA7GiU9A1ETcp1i8YDAL9wAzFpKXYWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuyyndS8SHDG8Qq163Z747P7icwxNNu7iuNSCdimyQVsMx8V1v6ogPc8cTFN5km13CvCKV33EvfqyFpqvWSVZ2N",
  "key1": "4npbQnvbmSMXPyHX6QJZv4uxPJLTG6haxWNmuyNo9owy211H2QHm3e2PYha2itjNUfv9pwMWJjWprgnZV9zjRBfK",
  "key2": "2ZU44iHcaBtZUnVKXkhQdfJeos4Az2vWZTX5NXuH5V6EWdAa1kjF1HX4Kz6ryKZC1yPTpSXytN3BHVbyWr8DfNMS",
  "key3": "3xcxqkvWbCud7ugLpowJQf8tYiyCAx28HibCdFiUoaeM9FSSJAhn86ZYixXtGUAZo9ypmi3zEVcUyCSwdbGbNpPG",
  "key4": "2GZcbSgsLBUJbJgokZqu9QKmLq9zLukkkhjNXUcuuqkr15iYW2TNFUSfyqmtFB56NjQ5iUU7WLmyCbGnLyTNc5dp",
  "key5": "5wkg4WpUfpFx114CquFmkoFDwjKAArKADSd4FdnregUr3R55NZwDvnSjWN2StrVnRPQYX3NXJ6zct1WQd4YtaVaE",
  "key6": "5hV3dJ62n9pZqs2NkapXXqNoZjgHrF7SgWpmoSsbkftMhVuF5EQJ67LBF66P1AeNhwXp9E2BvHnypgAnXjfR78yK",
  "key7": "2xipaUZjYgkn7LFfLFDbRV38ei9ZJnZjLQMRxaKTBcLs7GXrigokF9nvmAuHuGnKDHFKtWzFn946v6RnWUuMQEZN",
  "key8": "282nyHfWNgdULdFWVHf4t6B5YhGLLMjnvtkaUiWF4f5jyFGL2xhpq9GetUdNn6ELfmnXSBzGBiFkdr7UgxSHKcDw",
  "key9": "2SJf4rDueq4b4TzZNWV75jaMxhW9mfZJXTEAqbcnA3qwuJnrRfuWTyu9TPygQh2zZSHJi7Ha9c9fKvpDroCyqdfY",
  "key10": "4RJaHQTDZPtYZFoxA1LYu1h7zPGZZxeynt1mvMPoBB8YR4iZjVDAUoFBdv1qkAJoqUX5BXyPZsyqmGxzMWezv5qy",
  "key11": "4zgqWVAM32zusP7PvzZa2uuNs7sp3SqjZFx74TLGEUFYC8T42DuLLgyDzSM7SfmQv3eQwLp2e2HsyR4r4LwBYHLe",
  "key12": "RzUGExDxtKDiTBwEqKMamw2VWNKiYbxRgFWSCkPJFWKGEmRi31KNHD16QXA1VSDtZYZAsV3SKhsBF8rSoFF5B3A",
  "key13": "4Xvti576FyJHhWUh46649KZdA46aua82Y1vUQc1c9TY3uKFhQGJZx9gNZ6G43xwsfDAqmwA4ypooFEQ5LziV4LC5",
  "key14": "Bh8HYk5NpQqdXAMD2ueq1YSDaL8ZptbPY86pjE6mW5KrTadccEbS22zeN7NwwrVaY356Nk1SPJyH4dLvnHAiFjp",
  "key15": "4K7BwqtStuLEcRyfjWQW7Xc9eoGcvj4yUSPGLXWd2HKMUJPXfZF2Wyg3xosAwKVEMt5aKPdhMLwR3Q8A3Q3iKJbd",
  "key16": "4mvZbT3jYGKnG7nptaedRmex62v8DkmqzMRz5zVu8JjBwkSx5xiqTYKKWRQ4bTQF7hFv1dvqUf6N9Zj6UHnwP2Xm",
  "key17": "8a39pUWJrS6AiGFNdL1Zef9jSeLBQ9LqJP4WJJ8XkyuQpbYhPKrBNL1wZUiKg7yDFo6U2TxtwRuJbuteVQXZ5qY",
  "key18": "2QDLzG4t4eHEqK82v9HRF5QyuErutB9mtNPLgAyux72UY1LK1invSMUG51J3K97ffcWcXh25Jdbu7Hy632Ba2aHn",
  "key19": "5cvVAKTDn3v6RuRbYJAUJzq9tuPVMcvj51283kqGF2EzrPDvG4ru8bGeVdWwd91tPdZgcL1qS9m3FC6FkGm76Tqg",
  "key20": "2PLT6FduGrGiAkgGGApxLyAVX5erT2M4CaigPHiqQhqwDjy7dEg8u75jEgosp9hJ5U1AgVDKScwChAzqDqG7u7B7",
  "key21": "5fdjEPSxm6ryQyHQbyscgB51dJxDvsC1kStEHw1KFxEWrfbAESs5P5kAQ625URLFHEJ86bSK5KN6gv3qY4jiKwgY",
  "key22": "3W6sehg5xmudD8faKqjXz3YaeuxMoFdcDb8hhTco1RBBZGe9axtTqbbMGvx27r3SkFQe5RGS2TrKwuyLfweCJTVo",
  "key23": "Hyv9TWn3qwTTH7w3TXELAG1uozR5Zmix9pZUpZCRqgcaMiWseinLdDcQysQxyt2nFeiJmiAzQ1mF1H85vewxZ4k",
  "key24": "4JXHhRHsNGuE3FcuV6Pq4TPebYGycnb7x8pzSS8pcyQsGgJxkAZnV3cVqiNdXXwgJHmf7WjEA7Xki5bs4sFZfNd9",
  "key25": "3hKHGy48C5m2VjcgKiGB7rhioc95HQTSphi9jArzHbcmXqD71xF4scgQyfLC85aMhKGAwfHBxU6oPGVRMCJDeGwb",
  "key26": "36BGVRbRX98TMVo9ZvxB6peEUSqRFi2X3BLPfqMvWa14UgHzNoKwcyncjYxjDX2w2cMHMDb5GrDvyLW4YQczzyJP",
  "key27": "hUxyDv23qCyXX9D99wunwJZ7G2QPQCmJMMejvZQ3oAxg4PLMBBCmf4Qkgyp75D38EhSUnP7fqzw3unuiqhzJvG8",
  "key28": "35A6WGVFHh9yAZhiRDHREgUyezBSNBpUKaj6azqd2iZ1neuwCDdcYrJA71iCeAzxnEspbShZEtDD1wPXZKWvn8gg",
  "key29": "2JPMAKJytLkxbEeB2AeDGUyCaZ5gkNxyHrC7WiKjqk3wG3KBCGEvmpaN8rp2M3gP8EY4QjPCeg1r7hpZFJQXWSj",
  "key30": "4kCQS577vgLN4BLgHxSve48jZJEEUmGzqPe5fNg1wJ2roj5BBtPqScep3LTu3FKyMNq1DgGdrxB7RK5P4L4PNZZR",
  "key31": "2J1oW2cLkoKxHxGTjb1pFceT7TmemRsukAAYXApqc2sGErNhZJWwwN8MNYHE18wTgR4op1rxw7b7JLuojvzNjaQm",
  "key32": "5WcJ9aKZn6GphmgnY4k8DfEAjEhxFLYTv3ZrwHMLwE8dUa7xhJgPyc1FZ8rkdhCCEpAuET6N6JXnntKe24jvgDLz",
  "key33": "zXFNcRGAhz1WWMGNXtUevDq9psA6bkfB6uH1NEsxEn3PaY1aB1dbutitcpwQXSRZuAoEEDbjikS6CxjBzNfYBin",
  "key34": "cuGbQpvpfkkktAwmu4Ku2Q9cpSBtNDd6fDxFSgKG92ikg9G4JL5QxVsXjpV1EQ5gwCrxpARLm3drg1647V3JmhJ",
  "key35": "46XXVrzWtCoLfAY2dM4bU7oWbtp3P4ZBzGqkXKLptA3XgDJ7Sseg49a4y1SdhwvEjSaiSGP5oWGwXxzfS3oqUPfq",
  "key36": "2nyxbZmto8vswCWckewc4z1SAYhFDMdyNbGXD2iVG7b5S9Z1dSQ64hYpjaFaDEbECUMsB8soVi9j3scs6Y3o9N4D",
  "key37": "5BuyYqJ7dSkcnHKDZLPBnLqBgqa2hFkAs9ycgmn3B4RxeTwH1tjKtbrd1U3SHaB8x69FRJbocAfScmkBc8BdbY8K",
  "key38": "2pscKe7khPgGKn6SyTmyAwBfz99cDwMmKcGN5GdKygbA2E8xgry87p6Jbzy2tkTvP9EJuxcqLd8DF1NsuaWWfKtZ",
  "key39": "228yfo3EhaGLW9sPALFbrEbq3ZzAmsWNnTqH6ZMdr5nZNnwCpJepYESw6Puf9ZUbVaq5Ek3eL9F1FjGYLREU2a5J",
  "key40": "AaVUCFxhomks7bh9gQ9PgEKBiL4RzaLyQ8WxQ9hJb87LkDTJaR6F15QLTLXJG3NFabHQRQ4G1986B1oZPGRsT7N"
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
