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
    "3JLxyTPRZ1714iiymMSVsZte2EvoMB9JYEdvdJEWtwEGMeU5Kf7KNJ24pRZWCPLCmZjtfP4eG2qRc4Ej4t4UKHKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1atfEgKqo7aaLbT5xruq4KjjNTUEDUmQZRPxa98H4RS29CjLXmhrwW3592fFm9xCbBR3Ztaw6JtNMZGHofk5qk2",
  "key1": "4VrLJiVhJ4HaKXnRQvUGuornw6w3dc4Uo9QM6m9U6hCojJoayK1p41WtgkGdmB3av8Gy4c1Tt4j8dDVb2x4Aq3Cr",
  "key2": "4MRUFbVZDraBm8KYAr6fLqL2VWQCqrQCnJfuGuvrrzWoPVjxSHcKD7mhFfCQyob5euVfcGMULKc7zcebvbFxUtzM",
  "key3": "3jPmug5mwUi8NqAhGA8oxrHxFS5uNyBtw19hX7ZoNZRbFW4M79jgqujX1zW3gR4ocxN6CorkheFh7U2brqTSzA4J",
  "key4": "4VXASyQWydKmDFuwFYpDNjmjJfZuUfv6TkLEf3aG5zCTt71MDTPh2PvqqQjnyzzMExYtdcUZAh3a3Y7bhk3Uzxvu",
  "key5": "kzTsX2FKArUEhNkdQ9k2b61bv531VkRS3hpRvBWgg3D4uG6mSzycjJXMqcD1dqdb6kcU3GEiD6ZK2XkfvrP8PmJ",
  "key6": "ciD9gYHwpZF7yavA5aixQV3GcRTEwHqbEeASEVgmNHCPhcXzy6pW8r5CesPZWyuqkBN9HdSJVagzNQ7MdDg4pdt",
  "key7": "S7sRD4YcwcCGLEe4HfkExGxTH9efN9dN2qTkFKPYVkfFbsUWvsLLGqVaNQrwYSY5AcEqtLGE4a2n5frUZw9SLvf",
  "key8": "2DVSYVMjJegTPqtrJLBEGKDFGXJASbG5eJTjt1n32R2fGmZfWBKTGrMqqpMCr9uTxqkWo9udLQkN3YSGscZqM7se",
  "key9": "2JjrJb4zrHxJhxa2pQwNPsvhBdXENAiCVPQjeEqtqLQ2BPwEWFuQM9M2P8MxcgsUwMFqXncX5de8VAykswww2Dgs",
  "key10": "3ub9jm5dz7ZwNBKPjZiXW8vyGo4wK9xznoBVuwpMD4eFcyKeHMNWiDSLmfY1c672oPtupFtJcusPG8LgMznBadzD",
  "key11": "5qenq5zGiMuyAv8AwUfCCpxdw2f6UnwSBc2DhV8xdU2CfFR2N4dNRwUu8DbX9W2uUi3tuL2C4sqyEMJ55kHuTYbj",
  "key12": "4CUKyoqk4zUWwcUcby67heqfwDbQ4DThBe6JrSMtrwnwFEj6htzCV1jvmzXaut5Drvnb6xCwD5FGxQZbRSEjZ9e6",
  "key13": "4pf19JVx9M1vMbkNt9unHfReGMAtBZJ7B4vCpfdD1YsNfYuDTzgxY2iPZ6G2LWC89UrAyBApz3GZ1i69FusVAGGa",
  "key14": "3mF5xczEEMZt61QfVN9dLTTEpFAWjzqGFYmgtMxunNQynCyhnDQHSbUFx31X4EywtH7A49uY5MCNwuUxLSP2wUi7",
  "key15": "2kwYFAMZUxyje4Ub3t2vkHrokeJUt2FEBk7d5os2ahu5HdBMZsHPdtujgniAPDBohbQKvJtGxhZ4YAw5QKJgqAw3",
  "key16": "5Tim1SoJczvYfCkCs2ZXqVUNPk7S3HKSp5oH5L1Anth2jUYe1p8DnWusCdkq9jehwpF916zHag3yEadvzF5BoV3a",
  "key17": "St1tpz8s5cACgpMtkLXDVuXQGgC2MkdudQfdFHimZ8S9JivJjzQBxLfg3nZQ3ZHNXyVNXuX26m9MF8SMnpYGjHa",
  "key18": "2tojLG5WWxwufGYV1vo9sDqfJS9FWDvGTetRzwjxP1ogRwDBpRqYZDwF4ZMJw1nh7UiRbysdVAYQiFzZ1oKP27n3",
  "key19": "5sTVJsH6Bdvp1xuzdJAFfp9SgraJVsgSBifFYd8MTgZuksUQP9xKn5njYCSy4GE5nNPViVyqctdDTFMxHk1doHZW",
  "key20": "4pPuHQjnURYgmRZiy5TBw3k93trNR8JVEqL2tZpj8Zq54fgtxCzYFAdy73j6fYgcWQKEV8wuT4xu6Jooru9zg2ix",
  "key21": "3Exjmr1kJw3eKZcH2ZNM2zvmyXmPHSomn7LBiZRNk2hRpvRrmCdRupN49iAJeXboe4yH2QqLYQy1kTQunivvVBW9",
  "key22": "5XRp4yXKgnwD8tQ1CC6cobzqv5LQ1YXSgVpah6RMZbgtS23CTL2wyDRHNYzGNQzyj2zAbsowZ8jSxQmjpTy6NsS7",
  "key23": "39btMMJoMz7gg2CX4NLdPpq93LsJyCiNAg87ToTpnfR6MULLWn4bYYbz7wnJQFFS59W1FVvzZoGK44jQSjRWGUW6",
  "key24": "4fPR8jyDzd5xoEsBaoXMZJjoTX27RZEpcPNzEi3RKS5j5bfmiU9Tod7tAoj3jqfZZwf9TqmGzN2T6HJEB3bTb6co",
  "key25": "hSGh51vGi8FdWLsnmPGRTdaAZVKiqN8NURY1GAKZAZXkANPWhzpqY2E39GaedyYYz1sEzZVowf1aytmw84S88Bu",
  "key26": "3daygMCX1WSAbyzgW2RAuHm2eMxA6PmkpKvuWuQ3ARjgrday442AhYGBGM8VZWkse4TMfFuAFLfZDHyjttTwmLiW",
  "key27": "2qduMkhu6pyJvRwSwqsYw5qv3ZndRWN2WaDBT4XVGKoLy43G67H3wkvyqQa2MhrmZLxFG6CpoKZc9uKbGVgxyjTa",
  "key28": "2TPJmiASY88Rx1v9TaJEQSytEosmDrpsVsCKRdfKxwv5xuMhECgsSJRhprCQHXTQEwtxhW1QicqAbjzv1eXxasdZ",
  "key29": "26bTEjUuxWxUnnr1yAcQM7zrCURvrYZERJYPKQFXN4324N1j2TNyyDjmMZDvL619gnhE2jhq2AGeR7kk9ABgP7QF",
  "key30": "uEhPz6pvqGDr98n3ZhFjGxYX95HXoQSi2sazmb4JEe9DDWau4fYbDGAb4zpKb2zUCZoU4Nv6kpuiU8pWZ4gMLoj",
  "key31": "55ushNgB8KLrYasKJNJyk8L2Yc7MPyr1rfdDhkfV3zAUnEB6aYu1UCDGfToADUyT14EnvKU8X5YuGRu8iFAM7DGF",
  "key32": "5c68N1gX1W7Qa8w2QRa6UnbmsqZQCDvvcd2hZsZ3xMKQgsXxCtfTPh2ajFpWzFtzLXvGrarCzsK6q3SqUByg1SvJ",
  "key33": "5bWdCjpBoBwFyEjUqmSGRABCZgikfFith1xngqVUtwgRx29MbGBU4PqbNbawDKwPbXSgp1MHfV2YGfsWmHUfDT8f",
  "key34": "3hGKDPmkTQQbN1cqNiZXEeVxDVwHKyPnADvEb52H3eobkoGjjQxHRfmDWskia8GzGXs6MBroYJLd7JbKRmAtzioM",
  "key35": "4CUJ7EeJUjakfuoHJrUV1Zwz8BKt1xYiJhQyd3xP3wBks9CxALorMnFXjCQRRAzw3kmQdyYNvaX1dcdvrVJMW53s",
  "key36": "5iiVBhW5B9xZ2YQKd7bkTDALzxJmKvudTbC9K4PLsUD2RJvH1CvwvyMm23fPYTstYBNkughTHhGZXKY4rpt16arA",
  "key37": "2eNjSEUomHCfX9xLMzxxjgqgZHAZVpyF2wXAHPMLuU9hq116J4YHD8AnV6Jf4iwahJ6nvrtPscfiQ4iqSPn757VB",
  "key38": "5FmUmcwNXeNtddtQTbjEH2aL2a9G1pqZ3k857U8DTYQV7bLgFShTWFceitTkXR7wbdMqkYu7BDTw3earMb2xJLeh",
  "key39": "29Qda7SSuRcCaJt7pPeNqMdWBbQ5vKQ9z7Y9BPex2WSotPCv5WoN5HgS3UXKzyrobfxDp2arwkogzZRKzmEkyHBE",
  "key40": "3noQXhJVmemksJhD3JhtUGpWomQTMqCFMT7jVZuHUSv9jcAErU5GhqycJsoerEo4qLoQdnpVS5aFpVZ4zr7W4hkh",
  "key41": "39tx53Hhnvhm6BKWR7gZ2yyZbLeGKdK41CRKj3ADMGiMXbDtSDsU5RtTbp8u1w4wvGBZuS7EhXr5CA8Jo5X1Y8B6",
  "key42": "2giqCwHajzJZhD6kGxpzMmp89J1xDKcDHVZDCTqvXAsQdFJ4Ys15vgxoJS9W894iLHnVFt82mxdoU5gcVvsZeKJH",
  "key43": "3XdPZipxdtpery2bTTW3KQ2GTUC9134Z7cNz6apqVPri9hosMQc47Y7vVp5UUoWYWt99UCR5tVbHPS5CPEAjwbBK",
  "key44": "42gnHStjcnwydZoddTwoqNsu1ArEprQzaz7BAyTJ6QT9n59LUemk2JpXxzkJbwN3arvhTsyJ3TgqfXy9dABYZkkF",
  "key45": "5yJoPAE9nnACCtLaE2X3JLTSUFS2MggLqhtcbfBmVftpwPXuDHMYiAmXqnEnoUkES7qWEu97gLWmFeiU6opjwYT3",
  "key46": "2kQdUnB6oGLoeB5FtRFafWhNWscFxewLu6xf6Zodk2MKSa384t1KFoS4Q33bLt2fB7tn9JtNURbDWtTUsSLnKtes"
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
