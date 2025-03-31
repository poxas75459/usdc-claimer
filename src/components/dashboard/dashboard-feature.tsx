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
    "51a79BNPK5Y5RGE73Yr3S4ezDgbgA5oomKVMZWUcLHu78e2Btp9S5oZhfSjLMJP35MdJ7Ra8K979qXqMdo6JqEo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKNrdBJ675vomg2gTN4DDw92ULDZghHbS2L6HkLG4WKcs3nFGbX4NddfPzvfjjTSbzixnSuZiJzR6LPN7JXsTqr",
  "key1": "4pi3bBk3QuSPCJrWPfYgUrSVZwyTQnkENvbL1gUjmHM9rLfbyXfepFja4fXJPo2h3oFxdQwBHqbwuTB6woCLmMfo",
  "key2": "2PEtQpyZVdckWt1SB8rAyo6SoqBV68QE9JQjRPJQVKSuF4Jenvd9Tkgh1dUDWAm37UEfeL4NJGRURPRxdidDU24Z",
  "key3": "4Fzw8f8cUi96br7mJJg1hKi8DNcNy3BUZyRyxNA1NnCcC8bR5EqjMR1GuP1JvccMxwqrsiHCjhq8cdbQDHeARAGe",
  "key4": "KfGLXQbvYvgJuhp72YfVJ8EqJZGYgRHrvJMAER3KHakX1H27yGj1oDTcohi5C5eyvJSy8C9nRtPGMFYJxiqJuw3",
  "key5": "2N9QcBeBD2pCzvM9sWdozzaBugADbifzHtEKkUxuRWjX52DMfRdL2rea1X7gJWsjHAC9dgQnqhAUMECLENgxgeo",
  "key6": "21qeLFmTFfstUWpMe3dQd2SYkWDgbYaUXmhGbMXPc3cWGeg15YcRL1X1HFHzSZU7u63pWfKbuKZfdfgTeRMvv7nf",
  "key7": "34qgny8WYsCtMsv6b3cGi1JkaSi3gMmZ3p1VkEnnX9445WRf4SF5GJhjpFHRkZY9mDbb6b7ELrQzpGNBwLMbZNxr",
  "key8": "455QH89o56PGgYBn5FjWvJRnqfkHmTaeQyYYsCQsAdAMbPU8dLeZ5ietn5PknivDkXuKapuWNN6v5eZCaUUXWqF4",
  "key9": "4dDFaZjXEfpM191jdPj25UhNJjpor23Fm16rjdL5cCCjmN48Q71xNSyxZoDv9p9y1nYFYShzMFn5pSXHKJuWCLLm",
  "key10": "3JonkvPJHnFWu5m1Mv31EvYB81UWAw8pSq6qZ2D2sQZBfurLbFv8CNtgbf82Md7AcPi1TaKW5K5bt9N6UcDkZvaE",
  "key11": "5RZfufaqBfp7Aar6syRay36gjjjKnJAngzbdDEGATF6fsgRojmMiWoDBoRbSPL4EbCDv99M9MWaZbHUe1F72pr4w",
  "key12": "348SkZHqTCCg1PwVew77ah2AVALzidzCnfjSZ13etkpPzjkvRJuN8YuDn7iBX1N3WixqhXvMjrtT9zNSBcHbe4MX",
  "key13": "3R4Tez5dU8YmKpNNsq3SRSV8ByyHAeUBf36ktHEujX1y2gDHX9j2Pnddi6Cv3cM7tfjp9FK61jSbhPcF5p8Y7CcG",
  "key14": "3ouyLu4dRjbkMVi9vo3bQ7Ytkk5C6e1NUh4Mn6WUzEVkxxybqniCc33kspg3NTzSEqtSiPXDk9bWp6DVGkjMsPeB",
  "key15": "5Dx3P8KnfUr2Tv2HnbWQndfpSsKP8AAsryTreFD1sHWzx1vfQf9xeub8jNxKfSp4nSsfuNXAEqVxcwrq6XJiHwf1",
  "key16": "5GiJxUiBNA3o8YKxgpXyiEeM3MzMNP25Vd1fGUQGE1HZ1sjiVEEk2weCYSKqA14oQkQ4RZZwCE632q3J2BDJkrAQ",
  "key17": "5UE9aNzVY32XEMNzd6f2iVYSnADKKDX7QebJK5EDVDwE2oHMz2UMbgn2HBhCxXhL6arM4r9xWRixQvGUgNZsQcGn",
  "key18": "43A2v1AaUesW4HVvxrgPPHvaXAHfr4haFiAzSxgTwr6mMzaMcwJGWEEevb9LdKiKkw8uaernxG66T6pPc7hFi5oQ",
  "key19": "4xm4p2J7t74vUKAGfvneAN3CEeTp2XPd5Ugir7NLMJJAe2NozZ9PSQxJFhyY3yy9mRppgYvZKUa69P6ta2Aahr5W",
  "key20": "3eYYkyagKu4Eu2TgisU87v3gmkp9pcuR25f7oMghvd9iMGHwuFZXvrhDTUSnccwudZ4QVcHEh1DnK8P5pJkf4R8x",
  "key21": "4cVnVXBAyfe8cFcKybGrJCU8aD89q2UQoJGM71MUEGVTgUNNQJgN6ctrD7AWXajYLgsj7MgUNUuJ1Um6wRrBEkN7",
  "key22": "4MXzdNZfneFetQ19VoNBdP4sBUZ9RbheoxUZHKYU7KQsbQW4yfZPJ4BWjJN9ouMHcbbHnjm5WqRCp7JEaTczyzz8",
  "key23": "cTrGaqK5bUtwgmD2Q6xCqTePzFJbQisRcS24gqgiKAPERzjxmUCwcze8yxSkZPvbx4qJgh6NUfce3iWqSmFBqXP",
  "key24": "3tumgd2BTHaeRwYxn1RT5boVAKG1kEkZesKCBtDrPz4vJXmjteS6YTXM6Gpj3zHUiNeuNP9dgvLh4HvJWGgbEi4",
  "key25": "5qmNBDzmYg4XPbB5uMubXPAj3wpLs1F2Kss1tvFp7RYAqqqufe56ba8X4PygMjapgNQJC7cVhXdkTBiMhfM1Q5S1",
  "key26": "8LTAdTFp6MtTsQjUSbLUiBpPF5JZBUhW1rErrVHkHV3HkRhPY1XJ2K86YjPPXmP1tvPVgQTw6Ampg1jBcPyAtm8",
  "key27": "46EsMRPKBAZDLehWn3M7RhSjw7Qx24etXuEi2VVyvuCiN5rrdmFuMyPgP2etT6QbNazMa7bFvWwUw7im5FxegBcv",
  "key28": "npUjmbkV5221RzVsVDNrUCuMxz2P5uEfjZrtLeSAyZvnHb1wNT5siR2w4PzCaqEtCmTXAJTaBJuDeU9D5eFEuEH",
  "key29": "4f4eZPuNNA6sUoF9zXRfTk2XKrUcg5UEyeznpHzVKddc3Fx6YCybFvMkZn1XpYBzmfMr59C5AcwLCjsBTCLn84Au",
  "key30": "5Pn4TqWAyvrC5t1yUxurV3haftqCc2qZT1jqVborm7N38XaMHtVCdiie5mrbwBpLEeoaGdwZRbwo3PYXsyJykAKn",
  "key31": "3UufVgsZCJbLho3S8VdtPoohQW1uSXpV5TyfN3DwTJKe5QA7YgztrKK43sq4ZxBZKwypMcMSVreLgqgo2SyrvvLR",
  "key32": "5fViX2gxt9GY42E81dwVdsqoaxWpjE3Hr513Fi77dUbvws5LD5fxc48iVpgLbJN1D8T4U5ox9CeFe1FjUiYuAeZ9"
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
