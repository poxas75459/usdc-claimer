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
    "5xhCtzsbKU9nLZRnLPBCU2sj4gS5HhDDaFhrw4GFUGfQv6Vgm8cdR7ZZbv6jftXzLguPhyEmVzd6Vr5DDvzZo7to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49yD4zEdQYrEYTJ89tq2PkYhJyssSxVLoK6yoqmzDaDUgMpF7L5rLmirhXNS1Mxohev9rLxXuZYs6yBNFDA5CDvg",
  "key1": "3AAYf5Qu6zmVKMjXqhWRg2RJ3Er75ZxKX5D8QDkkkbYEVXUFF9oaK6gFefzGKSAuC9muG7eZ9yg6Qhc1wahNhCwX",
  "key2": "3zUDYe6uFzrVAeqmw3wNe3RnQtvjfFFx3g8yNw2oGrNArZeUcTT1MVrrq6rrkbBL51iZW7cEVirLDVLaqiiNnF2b",
  "key3": "3k48t9n3BY7VRCW8rHwQ6uYLXdgXEjMp4BWzPBpmeBQ2KV4LKq268PoJRK8BhtR2eSY1iBQAJSFbkgairgYv1u9m",
  "key4": "467GmuasHQwdAA5yDUiHg2b9grHaK9upcGejg5L4ZMG6oTjAutN8vNdx29oDhtiZg4ik6d3mAZpKJ6cffcfEfa6X",
  "key5": "2WCSfsAjbi5mm3JLxrsR9Hvr3hzFJKakS8ZBajjBYPWMNCFzHi5fXddqQhZhNzkZuHQWUdhW9vsNdEpMeFuAvfKK",
  "key6": "4khupE57gmxCZxdoBLwFFQwKJGAkJdpjDEEij4nprRezABKZnQ3jqV6UHBLGvWc75ZFRVk4WqALKWWmZrqdaUvEN",
  "key7": "4SNLaEHRTg73pjV9pBhskw9K13pH4ooxsk2y9FirJckmJdXH16zeLwo4Tsz73sZT1NYnpybFmQBJnTxdEvms4BSe",
  "key8": "5mxq6Az6caRrxuxb4pp16rYewZsoNtsKY7MZQ58cva9LMpUfuvxETpV5bFqB3GLamgSnBSGdA1EehGJgj1xes3bt",
  "key9": "zdMMk1M97vReGyrv9S1sM3JwcCkRVVfsDRXzwNAYerqyZG5WAqwJqgTRdtiQCK6XJNoCBajqNEsCxt6vYyWB2De",
  "key10": "564Jr1PMG2vYqPZPbRAeNaZ2uVcTKa8GCr7tj67o1GQU4NahoKzsKtiqGz194oR1CwSR9jpcNup5uqSCANYkvxNY",
  "key11": "3wr7VpywE75aP2Yxs6uCh2XzTVZ265rm18AqGeuksipxU9WPsZf3p7jGRkoFnWmqwKKYMZxPWG6b9wo9st9xRBwq",
  "key12": "2rrhxdFPN9X8TF1jiQpBTNfFrbxShkDgZoMqQw4zKKKjb93FQic5NQD5cF8zCxcMi9NYfUF3WVtNKwHy9yWdkFfz",
  "key13": "4qPHdknHLtjpgmBZBUw95Xf3XM3pYTBuSuRrA2dojKhz9q2C4ZbkUqw65MD18QeXfTkLFTZaZy4dXXzpWCphxWtb",
  "key14": "3Ur51SaYTkHVhvfn3GgoC84GyjuWRPZfCUjLPiSuAM6NM7twhKnGhQJr2PXZLWdT9wb6Ckfg4Miz7wK8N5sSsXVh",
  "key15": "4WEd2AKQDcWWz53jBKv6htqoJPrJL3EuUECPi2PaHXzW9trfa36aWWfmyMztWLeW9ckuJhJQVD5xJkDXe2vPN9Jc",
  "key16": "D2phLLrPzS5hAz2zb4VW77u9cvqkFYCXBKANTkaPPht5FHLDLtEa6VcXGu4szeJGte6QeBQRkEwjqhMpbbsm2vs",
  "key17": "5V6rxZtNuGW4ty2RCcK3odtw9QrcbnU95XUQaxe4w7ek5n2unGYGKG2c7L1VRPRdiduKdWSGgWiydhdzNRZmLJQ7",
  "key18": "2rw7YF6A2rbDzwchVK2dUGBpM3bbhYQ2n85kvvj735Hd5qhvDpVP1vJ71pBSbNbGrHcZMViJR9ofb7xWEMvmud9C",
  "key19": "S4apFdEejdveZJuuE1wT1ySLuhCBByhr8XRx5ZbN7GZwrVKwsZJ7Y5csCjVuSjRc5b8QAEgyTxULN53dzPq114r",
  "key20": "4c9QewY7W27B5vjFHrCTuYSi3FwK5Fu462LGYHQ7TfXCfzsWdpcrYfYovBjL9snGQY7wsp89zhFUMYrbPiK3HQA5",
  "key21": "2ZDZDxswLw3QZKRJaHDxaHWAzZYyCWLdH12ZmEkFfdaRiNDugfT8Qm1czhujxUchb4VrZzpmSQkbfZ45gLthcSbG",
  "key22": "5o9VZYkXDQBpSBrBe9GrypRS5XMwkba3GPe5x4ULPWkhhq5x5hgxvNrPZLtZWU2eBMKQXz44fGeUF5EJNZBa1aCx",
  "key23": "5RBCFfBj18rV6oaPHfnockMgCdwTAb4kkRd8L2qxT3NuTS3QMk1CqujScBsmvqTpTU9MaTf3knmZQdAkB5LsoP2r",
  "key24": "5Bh7P4EDKXZCMPtQeB2NEAgchvz9ywZwhcaGHuNkHtcpcwc1FnbFmPhLeVwQ3eJMUr3bapxorsg57gzfuZWzaPuU",
  "key25": "3nMuRBTR1zLqNz8ZE5gvXbwECUNV8sF93HEFtkmUvGk6BSBjnwGA91EgjdVWwZteAk5nvjCYt14xYYM62YK9kVrX",
  "key26": "pKVpPRUDXdkyQwY7a1xCRGnwKzSDTi6eoKyMPUmhyXSFxMEAWVM7cTHvUw1CLqkWbgZMNZJWDwiPACrEgGJ1FTz",
  "key27": "2hSoVtHWctRBGa1tnQPhrjz3EvRj9daYDWgFE3YX3DXky3ZZEF3oh8A3cXfpWr4LfUriH65JaYAwVjmtZHDjueBK",
  "key28": "WWckEh7oNes9YPRiGsrZ3E4zqRDvm7Hz7RvaYLBYSUdA9KdUk3RiLcyATTjg2E69828Fn1gLuTxaoavFFXJcFLp",
  "key29": "5M3Ng8YevmK1GhaCxEZttQhpzhUVXAxaY8bAs2ABY2wdEi9bi76GfzbESa9HqBmYgefCPo7mTs485hRtioYERgB4",
  "key30": "4wh59Ca8QwjreG6ibVh675cwU54ZUwwmedRRYYhJUGhBjRKXuJUZGgSwTdEyqJZzBjhL9DDqvSwK5snePssZHJTN",
  "key31": "tVGxzTUrUpM2ho1y7qgs5q1RsHyCXHQjd9W2AdQMtDGCYWAci1mrDWDvvTsKQTB7kAY2WqPKsWXjYHmVpqqE87R",
  "key32": "3RpG1cUU6VDeAD6GxR5ygGPAypEVz8QBsjJbk8NmHvgQbf7Ft7xothMisLnPrhzg2pjDEJv5qbhPfs6HmmEBhyX",
  "key33": "3Zd4QzB3XUQCZgc2azUhECDZLgrd3nManasGsCJHuxxMQqXp6KzjVRh4BSchwvBxHUUEoxv2Br5FCiVSvoCUQufw",
  "key34": "2txqoxa5bx1e6ph8r4Sj6FDi7eGDf9hBaQbQdMP8GSigyftcL1RXu1LuaLrPYs1rGpjRwWraci2RfrjbrJKHTsPA",
  "key35": "3hXcKB2b3ApcYcm6VecRsSVQfuu2jkFjoojBZ4JiXDAzD3dCjLxmS2UWJBXFzqZ3JH4RFCoHzsQVZ9wrm7kjAerY",
  "key36": "37PZBZiCiCKbo6xYXbNSP8xDbQ5Be4LJnC2i3ah6DLYSrEqpH3TdiH25tYGERCZUytNTWZu7YrxyHLBJyBcPwQWC",
  "key37": "4x4Hdzx6hqx5MAQmR2MWZXKHcGUwMDygMN5xoxjExUgN3qGyoafaaYKeCW3cCsV99F5fJ3vyNMSZwsGak3WzpCHm",
  "key38": "3skA45nSihm5yiQAXUReF4PL35a6Fd9P1pKKaiKKueYR2WHyMGbrf5TykDS8HuMjRgoYDWJu4ztcmMEfUbALHmCr",
  "key39": "2oiTWDecmW1QaCCJfcfc4mwUUq8iyPv2EY9ARpSTDo73defeFhK7BmHWmZ45Jq98sG6xsQr1tebrCon4sXQGLmfS",
  "key40": "tP3hXQdYNfBxdHXFRiRXRv9foebdNgEC5knStFKgHvGddAhbgKZXa6r6hykE9TyA1WJjhGWy5FCBoBuRLsJWvWE",
  "key41": "2SR1jGJEtdW87KwtLeGwqcegEVu8bfdSsuGrqvSutiYyCWdYsbymAWRM7ESnooJVnMLwX8PD9j49EtH2Umr6W1cK",
  "key42": "RSKD1YrrNDrcE18gNHrFmdAtbu8DVK3jQSjSCw1jnFuy9amVwsmHoAwQecXvkbfFoXPsCWqvS7BLEj65QeKs18z",
  "key43": "qQR39F3xbTzh4dSho3AuqDFWB7AtSDA7EXVzFabRoAfUaqHk7B4gLnnpZHFH5SgmsNyLH7u4PCFbMc9uLsPKm4h",
  "key44": "4ND9vuwP6QGMGSSCznmj1S4ceqEjgfRDDs945qiFg9vwNoBNWfixgTQHbd2cixWT3tNdXXYS7k3fAgB6MbTCtyaS",
  "key45": "5vNi16e2F5VsDkm1nXkrrjAdQMsQ8iv5tGKTJsAEHYB52mZcxZVA4LLkRBBdahaF3583MzjhBfZNKtRFDNSfC9E",
  "key46": "2pXwWBGJgT4Qf3wuBAFvvoXuPUv8co2ENfK4hvYpHLjH6Fs6HQ3HoFX6d4LStXQUT5LdAcUvQLTHbZ26gH7XcGZQ",
  "key47": "2Tt7mZGtoGu3biGD6pjfq6taZu2LhLALg8JCYYanCpar5ByeZvWqQ6fB15ETDuQkufXCwcWej6ADKbkWHNrDV8vw",
  "key48": "3kumhjA8uvEoTkPJAsYaDf4queWATvykaX3ai5Dm1pZwsmtn6NzR4Pt5Z6wzeipLxq2684cmX5PrvFtqcoNAf7gV",
  "key49": "3zSdUHLaVtMbamevF9CWY63HbXrUX5vD2txBbkLK57DMD57B45Z5m2hTpn9P7qbTo4WTxSkscdsi3daSDvRCYVCM"
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
