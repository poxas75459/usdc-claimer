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
    "m4yRB6tCbZpJ5uyfxRG5zNjWEkJNr3TYv7cBuTCp9Y3dSqQUVWAZX8qi2yPjB5VhaLUA7q7aWZwPFLU9VAj2qyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDWUaNFXxQR6RGRGsfp2NhMq9daDfG9U6MR94NGatnscAz3HvjxytuPgL8UQxo5h3VbkDFXB63Nu48pzzCaueJy",
  "key1": "3vUExNoef2qz9PEYmyLMFVdsqh8e5pz9cEC34bZZH68MXmmifpCWuWZcqoyCQfLfDehrUK4aFmznhiy87HLxJAEN",
  "key2": "4qsXiUxK3NqCLPzAxLy2tCcC9YdZqKQtm1Y358fEk4ZNoeNC1Dgfb2GeRAJUnqLeaYaJd9efr5dm6FSmjfY58vwo",
  "key3": "oXv2f9MxfDCFCuTKzcUUcp92cCKPBE8QZ4VeadGHWg59mhGb9KVRhrDaYEiz9WvDRJuo95HqTxfTEeucrfYMjry",
  "key4": "fwsUsy123Wt1rVmaH9ZEdJ7kHcYHd9Phvx83GvsR9gooUb1cMcuf4YG4rPmN7JsSxfL6wZCvAPrtAonDPyMDbiS",
  "key5": "NCcnCJJE9DBRFqRH7yXrBE7AvxsZ8YP3bv1oV77xE8DmES6WQ5BNmcBXR8dGji1mreok1s25JGFNCgWNendFPVH",
  "key6": "59p3U1BupYzJaTtZzcPw2RGg65grCxoFQDiAoNGDFfVyA9zMiFBsFvQDTMTxU4Rj1NroTitMkRK59J3LqqbHG9dB",
  "key7": "4E7S3vYvaRHpHG3iXGKVgje11bQW9DLPTMV94U979nsCSHRJL83CpswSewXvD7rsRQ9eQH9jsNuFKoiF83G9qavc",
  "key8": "4CendAXyjVUiMo5LirQyYoCMii5P3V2DzbyAujZrNz4Yw21AW3wtDQptwDh1J5WWkqyhgACTrwwqKhiWCh2Dd6bA",
  "key9": "633ryhVvPFg9SwmaMxcNeJogZTSNMadZdVGAUW3fCQh4QM8wzX23Kju1RnPbKKiJgWs4qEPz2iAL1yKYqXzYAnug",
  "key10": "Kv6dTjYRrLDv5xWjL14pAsXn69zFLFa4X3iuBGPqmBeuZrPbebatKZ8fpyLmxMQaveY3Zpn3Z4zzgPK2DSD8MBV",
  "key11": "3VuSE97EfcGqgaNTFkvF6nLUe68igCBv6vEWWCQpHEMcNRUauuWBEYQMGCUJAybs9vp5vPGY7xPh6TLzpA8vYPAA",
  "key12": "3EJoPEXNUu6jNYErpduyJz8D497bhyNd3N9ugtNnFtd83YYLV7eK4psyQ3Kn6dCC6GXMgidkAmjJqx5y1Ed8JH8H",
  "key13": "37bBPM2RpZPXm7Mmo6NzZvsd4884SuSit6Ztow1kEKd2WXXQraDVYVNWHVWU6bXHWZVgPFqaV18Vvfa5M9CZ3Xxy",
  "key14": "5xkHvZrtzBrPBZy6ZzDZWY7CZ4UYqMjykgNCzvfUuJsdGrhyswWAt46K8JnN4KKePFpq3sGrvRMEJrQ9zpcddNMt",
  "key15": "UoNaePuZcJFuW5oAiQA55jLBpYS6mrAK591nRy3x1F4EfTVzPVpb7aFWyGJq2jE5175LDhCzHdzQJ511ABEdLCE",
  "key16": "4fRkq8xEujKTCGZtHE8L8iubAVoBXKFpfzxN7fzjz7Q5MPwMBAs1zdTg6z9b1JwZqCK33MQfpPiVKiPpqfTmcXqQ",
  "key17": "pLXXsGELcohUKcxuKz1zK11ZPWvd8XauTCNNmuqvyZi1R81XXX5GgdWA2NtfeVwCLKaF9tQ6okBFbKXhMzbnyeW",
  "key18": "4WeuvRdGhvGHuH3HapQD3JgsNEQ8bZrPqS1yiL3YUqQzqW9RjFFEu8CqsPnhjjVgFDq8FtCz9GmtCvkvinoyMCD4",
  "key19": "5qWLLHB2hmfh6TSmARQb9XaiRT8X5JL5DWa6rCn2A5SpmcK6oH1VC9sMMXYiLTB2GHixxuvJA4wnWb2ATZsN8iaw",
  "key20": "5onghiq7tMGxmGcXYRU9KP4g6xJrKWWB2MGYTN1W7gRSnt1ifDMhxDru2T4EcdL7EMxhd8sya5ibpVBEths6FXi1",
  "key21": "2DYGUbcSpqtbEtkc2M3JozQtDUz8fpNRJ9j2zdFwLCzDsWr7QpZ2s3xLhxmT8SubxcjJa9aRACCHW3DMPLaNeq8o",
  "key22": "22rN9x3NQCfbE2kdWY1SzksuSZMcGE8oDp54MDFuWrbLMt2GozkztgD1TGpKtcJWkQooKvz2hdBQTuGg1U7KhaQo",
  "key23": "4mD3v6Ln7Kxs2vCtmWCq8p3bQ2S676Q8q4WQKRE3ash1fjV14H3XYd9y9BMe8Wv6pVArc3TqWiqi79TGRVSkcNyp",
  "key24": "5uoQ5m47fa3FZYfn8MnwpNZpHmLmtxNNNTuYSYtW21wuGnLfDCyzirNUhbFoo7LiGd85GNh1TveaFWKorKWLTGaK",
  "key25": "nc7ck2tTJGPwWuDPBrpQ1gdbbrybBBQNEJRqJXuWjYpvNUk4jvifcCuoxNnM3fe8Lr8qQhWit886q1bdE57hB77",
  "key26": "5xi9W3eyoEUDtG7FvUczBpqHwhQue59XWwnfNZQ1zVDZwFbL1cLGEGb2X8rbh1bSyKybKGoM2esXy8LjMTk2eaDp"
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
