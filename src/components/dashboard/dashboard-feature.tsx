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
    "4gVJcr9aF692E8jHA9w9D7Jg2EtGKqqeDWWmc3vRnayT1Sq7hDjyXeLxa4HfMU1syC26pcsNY2XTioBVodWxoqgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gdw82aaUzPSp9kaK5HRMak8JVxirE545VCQxVYhbkJh64DqHRmebXF9p35sTeATpvPy9GX2GYAdaGzFh7HXm4Zm",
  "key1": "25Xc6aT3J2DS4yzNcD9LaN6CZShkFW9KsDwi8K2ExBh2xQ7ZiVGzu33UUnNZAXDc7ojeuY9uNq22eSozPcocXfD8",
  "key2": "LsQt5n1PniZhcejWmNywomptVaVjJGHmLbQ7GAmeMZZsiuTWio6eb1M2PKj8RUydk4B9Je8x7XKQGRCvh7LVh3r",
  "key3": "4L2fwGucmwf4XL8oGuraA2dtBAwjvPmKcFxwJBQdbvcPT9hFfJ57acDKv3LFAyt7MsCG7QwTWKXM6qL3c2bQ8B9n",
  "key4": "5u4C1B9umZYLy3qX9ryomq7NPXDJGnDzUk74Qj68DqxxLMyouEJp5jDAVSGtDJon9vP3RCUHB7A3u8dQKcA9AwYD",
  "key5": "2KcftvssDwriHG37fqPq3VQ94NypvCsfd4SDaTaTC8iDTruGtbRF2iH6CJAWqFqhweHy9ktRQswqgw4hQynPwtzg",
  "key6": "5hYicq6iiGJeJ5EDqD6qKb7XuM2XwhjiWzDTtMm1YKPw9jD268fUsXrHAFKddf9eKA4uUdoqVxJs7LcqbXoEw4Tb",
  "key7": "63EXrD7Vegh1qSDLWMZhSVjYSkjkNFe5WEx73vzAtoCLjm9Yr6Vno4USZjpkpk822Egr9JbpoAZ5t83LbgjzD3Xv",
  "key8": "5D9hu8kjuT4gcVZSBy9oskrF79tPGUfpoTWuJP9QEnj1uNY89MF4QuZYcwPdf7VoEN3RoyB8BY2U1viN6i2auu9a",
  "key9": "PyyxwUnV2x3BFaYi69PbEqy1NqeyuYyLZYWS3EoyPbhy2xeSisAyVCVYB62VkBo9yPmbMnxwaK7SFfrYYtoNv9v",
  "key10": "CshSAczqGN4gL5Bfmu5Fq46exUKNfe1n53fubWLU2dqjGRLqSbd5F1VNeC1723yLLpxTB35MBQkoPJkwjKyGCFY",
  "key11": "47gYS8XWcYuovnKxQhxwQi1XBv1RWf2QaFtqKdceprsptTgJJ5etz9oUD4y3YjMExozSzqwZX4LxqgvYsG99afjZ",
  "key12": "3gPBAVGtA6HqKqssbD2VS6s3uiKsW25Zx5fVMEhT2LbtRGQBY8m5MRReXX6xB9ecnYmhy93HARdmyHvspx33vNEM",
  "key13": "3K3cJodNxENSieTdqKH91uU2bTTu3c2Wizp3o2i1RFLjd4wooxzhPPWGAtJX79DfeE6Eq5NCKAY8tMZjPQrKiMwU",
  "key14": "2QawTkDRnaLtjcqC8gCLc1fxs9usPgRvbpycKkSESkpJzcX3wgZz9ZtwhwuRLQvgDbrYWrTD4aDUBK7Wbpo8Y1wk",
  "key15": "25GhUKf6wxqm4ZGuEsgsW3SHqvvaY2s2vwfkcyZmMnY7qjubUyt3Sg8Qm5vMBK6DM2sTpbnsMdJH4Ss9GTBzZtkr",
  "key16": "62HHuBbWZiRePRptRn4D8u2XTFzcKzQFsgx6CZTcKfvUFpBHJ7LzG1YUGjwSTNmhizZgh2FJiMJBvVZZmiH9PHjb",
  "key17": "3BnPr6KVgCMFKiTUwNY8FSs7q7yC4mszdzapBW7XuAQkjvvDUf11DKbPgzHXAVLiXWpyTzhRp3eGFV5XMjiXvRvW",
  "key18": "4tdfwGq24B2K1inr6FuaiKA7JWyrynRLb6LHoJ5p1FKm1oRZu1eJt14sDvp1N1JZenQcLnWdxp7ZEQmadPVGJW5R",
  "key19": "2PRNnsLvq6CuEyBwXwbAcE4cugdgnaeqBCKDo854VDNcvnUG1XqCetdyXW9JHbPQVWvrofWbzC3LjjRV8NVxKX23",
  "key20": "5NAQXgagbpsAmwY5iKpZoLSgv6QpTUvrVXgTTGZvD2RS9CHZzJGiZG5M9VqXrCN93crrvzpGKuZkRHMjZg7U4NUG",
  "key21": "35GZddHygfDn4kuBSsPPKGqxLm7eTjQmNeEbfsRVV91CQq9SHUVghQvswU9o1Lu7wmCvnkwXBM4BhyMVgiXcLcb",
  "key22": "3cB91EYtkEWxxptGaAk9mbry3fRGFP5GV6JL5MaMy9fvWPWxKigzj37CMfETGYrnvVYzSDUfZWyL195HchirP47",
  "key23": "2MtKLNswGHZVsRybDFvmzPjXU4yL9DUdSHdje5Sbo5RViPdgVcK6tapfkcguJZxfVf6kEav3rvHrjpjE4kPyh4P8",
  "key24": "34E5LbUTuG746vFvLqZ7n1TQbNJXQs6Hiku7FKweNKhqr7d8v9xrQa7vLHFZnhAzqfzk4iCgz6Jq9Wh5mJ9AeZWG"
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
