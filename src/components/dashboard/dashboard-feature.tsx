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
    "4FULqhWriVWGyVyHCnNH9GYr6y5juvzHvmX12k2xiRWsygcj3e2vV7NeswypkZnQJ8qbfczeP1d3ftPada3cwSjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pvx4f6LK343vyZCHrkxUbdTszP4S7gxh1LjhLk7yLZqktHKsfQ4nWjpX2HSpAstznVJou2tGucgQFHx1Qd8eLYt",
  "key1": "5GTbRaCAHpiqyn4iAK4NeDtDm68VWyfN5MRCuSMGY9ZAQCq3KbEQL4RNHXVEEHaba921aCKvdJBxbssMPu6nawpu",
  "key2": "3tWizoB2uHfEJgtP4xivwBQrwYmeZnWNYHgbEFEv1rcUNrZ8qQrpATY9nQtKjt1qC52ipHFqy2Ybh7JWRKkUuo6x",
  "key3": "4iZH8V3bCRMHTmW8F2ax12Wt2eME1j5CaofrHQq6usForLjxxE8MkAd6AQcc38uvmDVsJaz4xpPMYX1tdJEyRKgA",
  "key4": "3Wo4HSNJBNf44AehkXBRuFmhTRYvCfSjaC8kmui5sJPmK4wY9xdyYo93TD32ZUEWLadpE12H8i7GCCTUaaZ5hnj5",
  "key5": "oRkCYTeJNhimTn9UQDPRq4Ptv2StohiD9XVdRyHq4r4kPbYakeNQSAwXRAVtkBKJbkMuBsxkFSk3NhEaS82Li3u",
  "key6": "29NRPbeTSHhpuj1r4utDriAKnU6j73sso2FTVPZzrT7zYnUwbDGstTnok1WJCNyQJ4axA63PoeN86VmwVvgWSxDJ",
  "key7": "3zEiyczGA3u552JoJJQ1QYdwrMGQKeCvCJQckdTpKjKM6QhazHRmkntqCGXASizoyrh8WzH46pJcv87DkZ7qqvVy",
  "key8": "4SP6LyExJ8ZzQt4A7rKt7Dh565DwEdwNNAk8XH5rLJis4vvhrpCgawjx1mf812ryAEnHQk3HAm5RGAk4fXn48c6v",
  "key9": "5Dd7BzaLzEdgK6tzkZyCtwo6RE5UtVqWAvbpkMb22KpbTKNMN1yBWr7TPFBnh3NtvwF94ccuRUjMbCvQcmQUm89y",
  "key10": "58zQFLtVNB2hTLr9oRv2oeeLobCb6278RK6v9RNHLHuxe37mvWV5xR3iWtZQuhvHjhhmVK5mV1K1YtMtsYgdPoBa",
  "key11": "5nAY1sekBUsBUvaphQgZXGmaL59wNAdWVKBqrA7tiCbkbU8x69vu3hn5gp6Q8xWxjqMWpatPEcV84G4jatywcNss",
  "key12": "4GEKF3vn6Y5p43No5zUPB2HZp6PL5QrEkxKojhcwkcczecAR4tw3dRPhgRqp2w5iUSnHGHiTNGBKHFY5Pg3Rks8H",
  "key13": "2qUikkRwHinxERqzN6bhXtGiZDFGYS6mw7dsj8JmSE6roSbUZePR9aGZPdNgLRjzKf3RqNu21xD8bJXyWNkAFqmp",
  "key14": "vVQGCxExz545WDvJqtEPZAu5BiEY7fmNYsB9yAXpjihD94N8setp4jS4aXfLVQU6UEd3SeQiQ4Ydg8hjJ8R2c3v",
  "key15": "4x2hZuSTTVz5qr16qzXmRxCgAdZbd7SBW76LqLUCmU1Bv1gkjWChbrecPdUmx3TwnGr5zHjCmQhoE5TPMJuatDZK",
  "key16": "4J1Z21vhJxYHpo2WMEZjsNaWLmx5k91fdi8are6UmP3ny8yk9zdB8H7MvbBLxSdGgmMuz8cN8rhCRNfdQrxrNkwu",
  "key17": "3ey9BmuCKGBs3jvpAnrrGb9jm6RHXj5tdbPCGxPAxwCBN7FM6puc7MV19mc29Q3uz6QKxoCUb5fRJHH3DC6ac7mA",
  "key18": "Tw16xdNTfoicttoTjPV8F9izMUyTAYmMainyzhRwwuh5TaJyJ1QFmNNeXqvnLzGe6DdHcsbgesqYgn64kt2FMTT",
  "key19": "4g4DbFBfRiaMMvAjtG9zP3xF4ZPzxTdTnPqiBAKi7eyBX2g5z4PMCYWNSECnLbGsFK7AxX9BVBor1sjqKggdVtj4",
  "key20": "4VtwgasPN6pYrLrzomw8FSr6sfBv8gfBQUTdLZMQ6AMHJr3cJtMJrmoVNDVuKYZZmJzjVbVPe4x4a6ueg453P6aC",
  "key21": "pRQ3daePnrbFrrnKygeXYoRe1JtRr9SBh4QqnSaxxa2epcKGGHgEQo86LiaxB3P58SoVerSte6LM3aduCn55gFk",
  "key22": "6pUD4KgVYZmspA9wTkpTh4FbmpzzQknVmW5UPGttnqP8ZpnoKFRr3S4EXrvVXAEzdieK5nHMFVkNQbnMdhsFtmu",
  "key23": "2EGNZ7uKiwRjab5oWPkyyzjKMz2wrJEWuHdoead7grJgL9EAJmmLehSoDTTcscGDcbTa3VRtiJbh6M1GVQ6XRJxy",
  "key24": "35pnpMg1SRQdf3QqKktVgyPvinExxQ2deLao7vQHsV5sEPpAYehhTEqHXwLUj5WvgfqFQdtz6PFtxzRvxZRar9cj",
  "key25": "9FnqjCP1BwPkCdCCLrHB4m186dwsPAX2p4XbbeMB9d7XhDFfdm2MYuhsDNjWCYDugreCnsgr3zpNTdsK3pNdJjx",
  "key26": "2CvLqmrVcdYPn4EaLRhMHunNpQ8MjFgBcsEH5kmMCM7a5inDe6qze5CaYkXYU76mqh17bhTZGCdnX3UjCWTiXhmX",
  "key27": "e7iXWk99R5MAixmh5t5GwQP6hVZMEEmmuE3ZNzAhfM1UT88VjfXwCXPV2CXpDQfk8NZP96BDAa6QDTjiMCQro7p",
  "key28": "4LQhSDiBKghnZCdLvhiKv9YRgQybKcUAuGAKB3ddJnFUJiiNTvayS71UQQuQQJ5GsauLnNDAo5f6fNHDejADmX4Z",
  "key29": "2Ti38knBiLc7Vex29xa8DWth2mttN1n6qBvJq1tMG5EuoCh5MzrbTwzjQJH7whSvMWPFfGGYepmVNZ5Uk2YbxCUU",
  "key30": "ecsde7zfmc7tz5gz6JerRfPZVsQ2ehuG8UBaAqHEMGx9kYEjAf3c1rVTmTYmGrTGy81A6XTYb6Aqw96GPWvpvV5",
  "key31": "5ernRHntWzXD94KEgoLpa7QQuzf8tCMPDDq7PYSayFJm5iGjyYVAwDCMnwivyAw4efJs3kqNT968kNTVzt1eGDF5"
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
