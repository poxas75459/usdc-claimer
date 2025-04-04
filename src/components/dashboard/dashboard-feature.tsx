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
    "2NaMXUDw9GvVSzHxn6nnVWYmQNMkiMGobmQiNf55jy73em76jEeX5z7ds5zASFVi3uYeko9qcx9NGc1AkBXBDSLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24pL44icqHDvMgnE4t6NQgckw7PPKfecowhMc2e2gubBx7y4yFGE2VSGhQirhZwW5ytgVwBbcosgbTbb3jEA1HxT",
  "key1": "5K3YgYdYfJaugsQMLCpsfzpZ6D3DkaiMjCGWDBxduusj3Z1YhTc3XgJp9xYpByGW1REwqgnPz4XJZjddDUP1ouoW",
  "key2": "5S7h6u2vm7jhxwTzGnj3djBWfw1BQUNaEBYTqNY9JRERriNngNghoLHx7qAa9Y1TZrUAJ63nxZR4j7ZcDUg9wWzM",
  "key3": "FokWg1mj6NpAY5fRGrTC5TAZzGZBdWFpnF7Gc7AvnsomGpKKGS2ftWw3XWZozVjWo8vxe1ZdcQARvLmjzYQLADE",
  "key4": "5AiLVECH6c1Mf7WgELnrPd5mCrm3DDiZTRMUdkQgf6idGnzbweVoBbsfi7oxMZU3Mqb375hAvoc3gGaygFCWLC7C",
  "key5": "3jfRZHGqAPQMTUXf42kBwBiBEoCLcc8mXnK3wHkzKSTWhojRKhD71qVhfwgvToTtB4SVt4fn8z6rMxzHVYioiBza",
  "key6": "3twkwcHckT3KPyWorjPmyVi6UqXGEyqiTG9dkeYCtbwwNJA3Vau7P47bnZ3oAJMPRWGKrorxEqhDaAe1L5qVE592",
  "key7": "usyLqqkbVryzc7cy3jQJr7hMqgivqvCQQELec1ozgCojq3215YHdxm2WVycn73fLihPrc2V5nfu26Awykd7namS",
  "key8": "455mo4peZPUdDbvGnvm5vFMhr8aRxdDD7DW325qDw2dhsd4qvhzg4mh3LpZeQ5jZXkJMHNAo2nd8t1nFtghxMArG",
  "key9": "31ZHVNA7bb2mV8di4ng7y2Lr9hLfXf9HuivZQkFP9Hs818YyFWksNuxLSFEUzfPdYZYYtTxhmh4Ps4wwaDV9MSe6",
  "key10": "2jVRpiRppU4zuFbLCVR6eSLDPNFiRhq96cDENNwcaC5LAC4QDXoEK4TzmGvdgx81QuuZA4NjzT9AWnnFxfHwasFA",
  "key11": "5p6vBZcVZkH7LUFMqsGSVZ7SywHJnGz7cExyUXUshCgmMfvWzi5CSkt3ZQW7ZUWB7mWob4j6k6t4rcfVKwiE3jFy",
  "key12": "TRbVDb3hS8cnXsr5EYWVbnHKbaSn5N7wQvf11G6QFh9hawAckCeW9otMcP35xCDJeaJxhX86UCsCHz4sstHBF4v",
  "key13": "2rVoKjW4WJWQf6g2Hsy9skZr4woYoGZEU81ZhgNMp11sY6nSggzNBQXx4UYc5MEw3vrEPXV3mKKEnJsnLY7QFaip",
  "key14": "4fLTSLvazW73qrMtPMtDhfwPCVWaVa9D3pZbbwn6p1jF2CCCNyE5mycbTrzqNKLxnB9uDMDCk5xL4oKHijejGAgc",
  "key15": "5EX9ma6w8JMndku6z5dBXkbrFcVpEcevEcYJsmLoJZJVgELuNE7F1VyFDJJugX4mGjJX7N28XhvWrnDNNLUt8UTY",
  "key16": "4yFJd9s6x54zQBzPhV8ZBG9Ek1Nx9JAFRt3uEWckpgqj8wbgXZvffoVFYgoszDqsKdtyxdwrPXv6jrziAPsPoQzY",
  "key17": "EpKcPjdhkbJMZSPcRUwxABJdpVUoWPyePjQmpSarCDAkWFmvznD1DYVWLQTZScAMsPXrvmmpbxiLDJxosxQSjPE",
  "key18": "45SxqKVdG2DDQrvN6sivVNgD7LYSa8Bvt2peKWf7XhSjXCVkapodYmfpXrb2PCKEdoJskHe1phes86ZfRSdpUWbK",
  "key19": "5GpajLyhTyD7TJXcaJZMV21MDUtbZxbQd176ni6mBgMq42fkrgdJRpSujoigUTRKg6md7LDwjmrLxRHyTmTg3oST",
  "key20": "3bX4KXxX6qb41rcMHK6QuWmVvfRQXg3QZUMYNc1pp8AuUMa3ZGZHTJ3BLD2D5YRP2Sis1cxptVqagD42uFVCV5en",
  "key21": "3Wn3eUaGjdzPmQaLM6MWrs3yJ7ybQM8t9UW3uGp9RjkbU7yGXkZN1Jv3AJokxCzQZJ4znJpTvHgktAGR4BsexEkM",
  "key22": "318WPfpoxQW3K4JViHcncjJ2KdgGFDmB5FPQV9vXSvFQZkCQTGgsVuApoRCZDjzuuxme5Tcjmpiou6aT1jGW4PvP",
  "key23": "2ivt34cSaAz39Y5fNpLHcrgmwWGxFij53gGgRL56F3hp5CmgVhHrWYRLvDsqZyMaGXb62SApjDqZTDVx2xqegg2",
  "key24": "NSSFiiixgcSSiYNydXWWpGNLwHy1Q48p7CurSqSgfjEV5RJuaTVonfQ6DsHwK3pEqTCWzi4nGie8N2stSWtej1B",
  "key25": "4YhuyxBZaukdiJCzj8un2UruKHfkeRNe5ciaBdCQ3SDA5XqSr12cjz3zPo7qsb5g9EibvUv5Qwuw62SMT2QQi6nM",
  "key26": "2B8gb8u3C1fPi23V7oW8jj4UQwtwn2KHVGPJJfG7zQYGic9ZM6oW9v7yV6EtD1LDhgY9gPy36SXtQNVhNvHt1WU3",
  "key27": "3i5cnF1iNcPMoczwmuaw7kM4RdmXFN8rspgaPPRosQ4s7WnuEVSxu9cSvXZcA2Na33ftLb76YWbnpiAhN87A3g2Q",
  "key28": "5GYZyQKSW5oFAUrKGqyKrXjJu5cuqiso2PTSv4ibrUcuXvRch3BcRfw5o8m82JxsmV8uY5cD97ZSAfZTxuZavQxU",
  "key29": "3iZvsGb1C7K44aXG2D29zKNc8Qk4EuJex9N25DHE3RPoD2WG1cfi9zb8KVBugHumuUuLP9ZiM5GPMb2mP4d5Ptu6",
  "key30": "4ALdTAPjKGCUqqN1XHepyb88bQF8CmNySEF5bXeRrAspRhnTPcHPDVH7eZxpxxMnD4As6TcrrKexcNFDVNF3hQSM",
  "key31": "7WyeXSaXmkppP4cYsgMzVyhzRXrQLECSTBiKjGmwAoRTxTa7y4vaRtuLs67NLdQ3njxtnd32Ki1YtSg2fLz6eW1",
  "key32": "b93fEQJ1h6gxQMKoUU3wuStyUMWV8z5BbESfEQyg4iHjFMQX93Mr5YqEAEhiJU5nSR15oBn4LRdx3Bms4LWsgYN",
  "key33": "5y7x2cJJ8GhuZetLQxpZqwXoS9vVdPfDCQrvxoauaNXgUmPHToo2pjcuyu7astQtZoFtGFgSMQC2mk5QUT66STCa",
  "key34": "42GmL7munnHPnCihCkKrQ1k1eaZZg1x5ka4mN1U62jJhdFdLoscrSfvpiTeagk6WqHtUGpHHtrXrtmaSbLXdetxe",
  "key35": "4fQ1cRdEqLAa8MsDvonL5RAk3qDHeaCdLLS3HDDJoiz6TCAgJ6TRQbbDtFxy9cwWqnDJ3BH6W7xPbqPwTJdkvkBw",
  "key36": "3JZvU7LkiAQdCDqXFDEReUBaVMn3PQ547wjxKfg174j4xmmkfx1neNFKCkiZyixrPkDpL76bhhLjqArC8hDUgKbB",
  "key37": "513AzTZfSA6BDAEMDWse1cCd4SoAxPEQM9h7JynmJsTkv57aGJJ1wds5Mbth5zrRamy6rotcADomSXGBjSzQckC2"
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
