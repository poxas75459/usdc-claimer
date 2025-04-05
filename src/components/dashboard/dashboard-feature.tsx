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
    "4j8qh9s8ipbnSZm9aeDcRy8iTazKiRWPrR6Ys7Nnk3RDoa3nmjoVnyHwBtxToKkouE67sJ2ebdZYXr9gJJdfbt1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFE7ct88SFMLmJjnspMjGseKKgBEqQwcjVMs8mvXnDu7HgxYHhkVkDhyPsMZKu4UQgLv1VYuChEsz5FS4ngb72r",
  "key1": "3b3ksMu6SyuMbDupEQytZE7hvD98d2oW71ks1ps2JxTPgYGmG7xV8zgFkrhbqXPXcF5gvchZdagdMBcweCjdWfh7",
  "key2": "UzcV1J9bh4jYptuqsKSC4dj38JS1Qa2cgE4YfnpbHEPT3J7LtHvJ6U63yN6mqfRpnPtVzQCMWaxSvt2BiQqwJje",
  "key3": "5T5vm3qa78S6CrDaEV5xxrNkqb3vPsKjz49uadhwTVq95MYx6qE1zUAad3SfZguctSwjxeuAJwQDQ1dDjov344Qb",
  "key4": "3T3YkgnBWK4ZfYtDotNb2ySPmK3i8oFTH9o955FhdNYMAN7bEkXKMxgA6WjhccQfyz4Y4tCCMtSYoFcpzLRU9L3M",
  "key5": "4Zvq1iubgtANN16mCw2gs6ExnpzvHrzfVKRxVvhWRrL8G6sis4QbmAMeubhkpVVh6MKRmZS3txfGLpaqhFM7FvQq",
  "key6": "4ZDbXNYzxSjDq15xF8cho55BUY5CU9rBjL82ZHwBgAnB84NEPH9RYZPVPSV8Y85V56BhduipqvQWi32nnk5R4GBB",
  "key7": "3u2hjX9T9pwYgqEZ6UmghdoE1JjoCANPRKVi3WnhcM86takT5fD6umgMNbioWnNQk2HrZQT9JeWaCnJyCtk11Xpd",
  "key8": "5vAeVJWdP8b7h23biekzhwBgRchsEbXTguJPoB5kQEoVVV4FcV33J3sfwviRZd1jPDMRJrwUtG5zrYZXrooJJGc9",
  "key9": "2VV11Eg1nvJoBzhKxP7KrBQdC2uL7WEZgDseZ5UWZ9RoHMRrwrTL3AetmGrrCfSKXHntXffBffsEcqs7VGyWs5GR",
  "key10": "46v7epkc59ULnMrFomuWdkFavAv2v7anivDG1LK57u7eBURCUYoR9E84rDA4wHTYDr8qWtmQSJAnj1cZqEGdwhQv",
  "key11": "XnjjLs3BXZDEmyetpbcz1q7fwXrSrRmKe3hECHsbwpiCEHbPZdnGfW1KzVTin2ZVnUYme2xw2jRBvmcTfr8Kohe",
  "key12": "2pwsuLs9kouFATFAtGqt6oKUvkRCErkfY63AKgSyHEVvepGGK1uBVZjZE7doaURTWSaAbUiAmuWyjEVKueEvwPaV",
  "key13": "49JwuUaS8vyTpqHWKfchJT7N1kxRhVQWamCgYrEPhyYBm6tJ2Jx4vRQuvMbEEb4FV6UuQ5eVygXDESXiX156SR3u",
  "key14": "26zV6twSptfaQ9hsKqSwB2cfdB4NAMGTEmxjPxBF8jDg1nr6WzK2NxDPEZpD2mqh7KZaoN83MKivexRGGWsd8218",
  "key15": "3qmCXXACuDjWaxSmGthgBtXtQ3eNtcbVee21XA3sHwbNSXF7YGrNexFu7UNoo6947TQtHKxR7kXkootYa9Xs56mF",
  "key16": "39NuBLqfrL4BXMec5NoFAYTea1KaRfrSAvNmTaNH5bcpedm4H8zoiMvurUqsG3WDJxJGhQFTfLZgzBR7kD9VzDTQ",
  "key17": "yp3nrqFcyDx67LjRDXWJimN5Gp5r9ABAqSY955UTZLX4sZNctNEM1JqXarSHCJcMAvTkPqFc4Z3EcecDb2RsccJ",
  "key18": "uAjT9MrM8Yj1vyrAqgY9bGLrHo3BExCrMLK6QinkCGP2FhZiqVrM9bYMWSLvJQgeoknd52JzyuTYp567i8EspdE",
  "key19": "54ZG8xejUWnwxYXuXV6wp5oJSz46yLWZknqgE1StFVeoq6A3UvfgjigJ5NX76na9R6DBjZRupeLsEmxvGzmwaxjX",
  "key20": "5j7CRihSA7wLgRWQco23bSS236hnHDWRA3TQTiZn3BxwwtfTQ5vwsHUVfsHhGooY6315DCJnZaUhV5c6e4SLaQrn",
  "key21": "5ASkiCrpDro2SXauusyLL1dSbjfkuFd2Mu1A7WaZo3MX6o6x3dcCvXHv9Zgx3XEjhVSZjkt6EDGiDVHmWziyeU9e",
  "key22": "4qq6MY68D52vn5HaYAMQrqpqKNBsiFDd4ZgW8pyxM4pp5EaCsifejstmqoYwwbuhYntnr3H12o4SX7QuUihz6M7a",
  "key23": "2wszdrJFmXQdtuj6rjoc5HBgxEMNvm7r3tbzqCWZfCvnMbmZqLQKSpXEGRg3E8XoPdYLFtfTXkViymQkeNcyFd9H",
  "key24": "2sczsstSi8kYvQcyTT3Ax5iYyFv4ajCfVYTEp8831hExzTcmhYh1ndi72XXMfnJS9Xb3DVAmnE3kuBXmVDmSQQGf",
  "key25": "5FJvg71BdTDH1pRbfgDQGhE97d43LenPzq35sYtrLD8g7WycVzQfARq6jFb4gA45v2G1BW3ppXXrWaG9URe247VK",
  "key26": "5fDxZU8Nxm98TaMcuYgCem6Ncf6qhS6Fu8ue4LJMQmaqKmB1ZAkJs7BpFAHvRWuJasr2kMP8v43C4F3gjVDJjC88",
  "key27": "2UcpfEhmCH7Wd3unfsKy9PyJFwkRv4jdDG6VeYEWqjH9EznWK7pE1t28yinkyve6EyqN3YN3ruKcbgpS1B9wrQv4",
  "key28": "3JFyKexFvTaLBnm3rJ1EgUe18oRPwqDPUAnJX3yVjr7Lqym8BwVLjZNyg4pNv4YpcRpARv4ztczNyZhB1QgDeGdV",
  "key29": "4UJQuHYKQxmhcqjVRQ3zkgG2x9czcui972iCVKP4gC8ZbzNyTbw2BgSNTBAAv42MXpxWcJAXFzMxs3B6qU5Eh9hp"
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
