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
    "4oHwRDTktu54SMANgvS6oy7XQjRn2AwLxvZ6GHzJXpW3BvBt6K4444AfPXGkRf62hcEUh1tpuZJBj8UYyMnQLnsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcdUDcAv9MSgugbFhyoobCfKjiWs7qXTgu7CatGXLu8jpZ1GSX4dRxG6RP4Xs1RD1E6kd9AyeAHk1KCjxb5QVQ8",
  "key1": "2NtGXWXEqS8dbFerB1rWnTWT4JwVtGEFovG2piU19NdivnQRWPUbwUqeKmg1hJsdZ4Be7CeWhzuFh2gWx1roRRz2",
  "key2": "3t3S9yThkLantKaAv2hWqeRUY2KghfQzE7uPkF6YDVPhkRz2DJKBGbKXTQrw3NAGf5gB9CAoJ1hyGYBvKfHTPyVn",
  "key3": "2jZd5CFfVcxSMtJCmC1hrEhXFR9LgNZj4RW9kmEKX8tePwKiEtk3U6JzgnjWw7i2wFcjfgN5hAL7yJQcrnpXcATy",
  "key4": "3ihcLAeuY9FEG9tEQUxnDnex9gEvoBy2URVXq5YTMCdrgutVgPodqtxsfxrQTfB8mVSwo1e67hbxazQrZbywcVUT",
  "key5": "Pe9gUraCYyU9WP2DWx47An8qBFVAXStpK1dD7YNcBd78UhzqCwKSVs5p5FEwetyob6QDQce5pD5gsEavjNStodE",
  "key6": "8PxbwqkS41GZeg3hCqwphe6nMjMz2Pw7dCxk2siUYaBAyZKq1XqJKmHiRHEmkBs4mxRbzEzD58LGjXu7gsBsx6S",
  "key7": "F3ndq2urAwCDbGQcLodihBgnauToehXBtfHSHzjQVf1dfP1ka2hKCh6SVAXMTynAM2NLzof9nsM1SDSA8ZezAJH",
  "key8": "5UifnRNBJDfScfdQfNQgsfdwrLgLNK6Wth6kDgShFMwQX9qc5HJ7iFwJJ3TAYxfzFGwHN1rxVdRxFNfkM61zAYvv",
  "key9": "55E1EgiCzTA9jdcErqhmuxsNiJrdio1e6JuaaC8iWzA475zDAmWRhWUJGts82eraGEZuoPbSN3jsLvz8ZJJgoGHg",
  "key10": "4iBTrQeJ7HDC3Xpp2hnWHq9X7cjk8sw8VzEcs4rUHVhaRkmTDopfMuMWMj3aAEXgSv3D9tgKdDYCW4TdvyoA7hih",
  "key11": "4M1T1NrXvkpkKS7TmEYegxSZq8ghg5ZDDUNrYKPqvBWjzqMxpVYEUwWEQEzNdAeaeyddKWr7LtZmmJtsGGnJwnmt",
  "key12": "bmfg46pjGW3d9ckwvd7wfiAgG8fauQiAGpFsv386uBrdCCLGaXjWcE2n5rRLKCHL9h6dPXVMPL4iC2xqiC3Jdcs",
  "key13": "42hU6RYb7XuM2Vr6qikk4JU9PbkkrpqJEecFMo58Zr5amcLAN4qLVgLUeGkLxdgM1zpcKkJkE87dbZeg7wJ6HRc1",
  "key14": "4PNnSA4PXe9zkKb7BXaUjm4T6ZR9rQkQNZRVssupJ1PKkZZ67HRyDvg7eJHTwzMKHBjqEQVGwBQdpe6cNH4dKytH",
  "key15": "3htVq1aHb9b1tXcbNBS38rmZcXDZiTDVg5V5Kcn5Zbu7jY2DKSapPF5Z2a2yMWsmc2PABhNnUxdWSyXpUykYPRbE",
  "key16": "4axrNTe4SNWp2ci1yyJU99aadJhfVNJZ2ppSGE8SEzyeaScHpDRXECsTtkBBq5WR9xzZXY3f3GigyA6gNXTt4T3g",
  "key17": "2ZD6HNgKV4LKi3ZCQjptJx7RartJxKZVKGjTnaHvCpcpnejbwP2yw4cEeRyiKqn61ddQaPHo4uKTH8p81xbCJwxe",
  "key18": "4mwgCVMfaBGjLDTrUrs2nbZ6t4Nxo7KAQCqxVHSUHz15RwpRM2pyB13h8TYCuG1eZRfy62bTi8RTofKYery6bvL9",
  "key19": "49q5yNJackMETATABF793mESgnJZxSRpKDK5kq6wqq1xUgRRJ6k22YgkUJa71nw2XJQVPzGtpuZfv2WB8sfihMq7",
  "key20": "3S1XgjWkEzWdR114ykC7yNPiiYHG4rhJ74BS1B66CUibMFXJNrXGfUeiZqBdTjuEMovcHnVVRZ8fzaLzooKjDzr9",
  "key21": "5ZEoiWtQ3osL7zsdzjMgW6zUaUBVMDdwzaqhttqxAnTnoaNWgH41RX5ezJSaPnAWDKALM8uhAseiyxxDketQLAYa",
  "key22": "pSxxcDjS4vvufLR1xzTXRZLNLFmqdLsYWBMunMw3nXA9QqmqV9bocumw9yq2ENDi5wveLGAxuPWNy63Mz9QVQrV",
  "key23": "CPSd26CmvrxMayA9wg4fqbxEaeAjsqUWcBE2MjgXeA8uLq4WDL5DQpP6WF3NjonGCXWdS7J8SA3TWA3LTs4oWvz",
  "key24": "5FFfqSPnyPoJrJXx1Cq4QgeeSR56eLAx2tqNJ6dYy6RCRx3UDdiGUDZRJDEJmiUt3hdVXipWLv3LyYSQEqrLQGa5",
  "key25": "55UrHuDvoq7caUq6xY5JBcx3n8YQv8w7HscuM6TVt12VpZVrhasax13CWakXmXrXokbzbaJaEh4ov8u7CCan8CQJ",
  "key26": "DD4embK1HzbqaQ92nLsCFNjHGnPcq7ayLec6sSstRkC2N9DK1EHbN4f6ya2XAFZxmfHJsiRRAV8mh6B4UrcUgud",
  "key27": "nh3JQUgWViCoQ7TfwJ7iDXfxDVB6GRxR6MNHMZUB1jppxLKPBVYcmQD9Yh5bMYum9S116FWZXGjkJ9Z6Dg9sDCJ",
  "key28": "41Ek5PwP2YfWapVCdLG6tyn6vm9nkWjTmEjphYz8gobTCZFv1Xrwt8VWVnQYuuzKSBHNXGinZAhnGyXUFEA8H2x9",
  "key29": "4HjUDR9Ai7gnvj3eyDiLR8dAdV8ZevE2QgkZMwAbCitrUSLpF54vf2qfv1P2o8FKwgViVTJuUP3ecsvhSFnVhtPL",
  "key30": "Xca1GF9d7FYNwyXDHqrNKkJaLKyAdLZuv633xFcnHGAzqULrJRbFWg7XhntLsAtU94dsAV973L2bVvb4aM419Zr",
  "key31": "4tA2oYUfw8yqZPgrdRGFKu2PaNPmPZYpUyPh4HvFMdPdM7n1pDDtnL18WTtKmxZwCGWAzvzFR2UVtUNfFx5xiRQb",
  "key32": "338jFJKBnHvG6Bi1he34vuqFetFdcu5UPgJGqQSg7MrDfR6v8s3v2YWm7aTcGcq5cbzzfjfJ6VHRpWK6n2RNpaGA",
  "key33": "BuA5ECAcExiM9iLv5zxP7KDT4mM5weFr9tQCCkAu1cRAM6MuVX52wNVe7x3LVpbsqyLR17YXvZWkNGufs17xv8S",
  "key34": "3BQReLMqFY5uafTX5ZteUNVi5SNaxv3aRQPcaxEsdoDaY582wCNeBaoWciyACeYo9WsYDhwtdjTpSvYzKs3aKuGD",
  "key35": "4dxwcp7uuuGaWwQGMM3NjjnUSuWwGMMherwiqd1X1QBrgZkGfj4AzHHdAxDG66E1XwfkxuPuY93mtgepy2rYStHu"
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
