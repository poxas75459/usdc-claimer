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
    "5bE85hsdQ6VxJrdVboqFyPzjjejMRtHSX9SfJAvP2wsTisEib5NTzWeaxpuVBvrpc93imvf8pGjFdf6qU6XzSYQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMCe2bWVdAhdvJsQKhyA4SHYS5UNHrdsSB6yhbXfwghAvA4y6nhDfLhLtV5QWeZeLEGRA2crcMmLtf65d4Gcy3a",
  "key1": "V9sgMKPKaPvEMWYjtdoySApADq5yPQqWzhQFQax1n15s6JHAXRwPqM9V1CiR63FZv8UMjmxhiH7W4aiqeRG3pEq",
  "key2": "52pe8TBT83prag2cZsVDqcdpcEbCSTFmTdgTQJzPDgv6PfVPs6vVGLp6WM5SdS3jmFYXGWaRRrPiikoAuwR3LSHC",
  "key3": "4UJ5VwUD1aatcqEv7KhshEDoGbJsiUt9mdgt9gKTfk8g85jBQejxxMe8QtrNFrMciK9U18zM4bQKe6aivBPjRu8b",
  "key4": "34y2ErEhwfzt64W2oMdEEDpFjTcHg6ZMpBxGzvrj4YCC1JNxCoEYp3ss8VxEQkzNo5G2oGJ1HT3sjqohSUwBzZdo",
  "key5": "3eD19k7Z9yNbaBrWJr8UBgA8HcEvPmTXfJNBWFDwNeXhdwDzKobrBmS3iPefWTzVPnEgqnSHN1izAPjUjt7QN34o",
  "key6": "3q8oqepvgT3mxX31PQrTyKYmb1AAwmerGjWtnSgG2QBep5szaYNCtkXXx4Pc7AiPzD4Ezx8pYgQhTGvdAdjBZmyv",
  "key7": "4S7JHMby7a22V4xNQmpc1btfKcN4oJ4zcrb7jRrWZUWzw8rtE6mR2x57daedTghxM3LbXwxmHhTcG36GQJHryDie",
  "key8": "3Rj8wQUJQ2zBa7VQHsZyGHjBaaTq5xo9KvQkY1ZdQMQE6HgfBaar3dxm9VkuzgseQ7w1mVDjMTeiqUcWaVQgJmQj",
  "key9": "4p3K3gmWap4K4zjwgWbVGELvDR5URw4MsvcKfqFZd6zkMMXBnn3UAbAhAwSadBMBMGv9JEzn7BsosL1KazBWDTxA",
  "key10": "4EFZAbuSJehnRPaLx8KGyes9rjBFgesYgpVcSitnRoC8wuCP1o9Wgxypg1S8dg5tiGRFQKrh3PrjH5BqNKFVaZyV",
  "key11": "4b4c9VmZcfxb9xWJPQibjSqQzsH5TZeq53GWYA5PHmKHYYoDvMhGLtfgCGwX11ZfBN9M53ySrbhYSVWfdqkLpkFH",
  "key12": "27tiZi1pGt3MPDDCPxE8Y6v5bTG87U2DHBSXFR5nR9ekZXiZdmoW59duq6ncvbyaog9NLRpbeX9yfRPp4bqFk9dq",
  "key13": "bpRg3msTfhPg1q7hKkWugRs4CsJMiRZJeWTq8CEAeyGTF2orUPQaHwR2T4y9qCtsfnQxtTjyeKerrYVpqjkjAgu",
  "key14": "3cUAd5nor2BZt9RgZutEK3hUMR76Ck6sFryNVmuTBim3aNudejpnFQTc6RciiwVKoqMfreshZNtjze4i3irmMLvm",
  "key15": "2FoB8Mpn9ZQbKR3LPUzpsWjeEnX4v4xiUhrcbEbow3XXMLXdTxWLq69kXN222yGaXj4Jr7G9YqSAovPNzTUYnWHQ",
  "key16": "3uec5Fk2o3V3Fc4MMY32RGB9uqUm5PkW9dYJ8QF6zthspwEoJcjSpQYAKq7dEvaHHfyJGcGdQmXzUNHdwPsopzaF",
  "key17": "qqpLHVwy3sob7YuccybwqjQcHu8xpA3cj7nr8mRC4Ud5vNDhdXz7fAejdbrdti86Xs1KSYzTzmB6BZqm5RzBXya",
  "key18": "2H1dQAaxqJGsj1Grhja8Cuy65ne9V34uwbiMxKyvsmKf3VjhPS48rZkP7dM7iVACWBUy6ZgG8sHwRUNacmr66bhQ",
  "key19": "2MRQXbJr665AgKzUgsJk3rwLEvUEtqquEjoBZ8VkLoUhgA4p7RptD4ofpnSNJ1XVhTPjGJw71YSWZ2mgxQovuWip",
  "key20": "5mxzw6S7tkULP5bEH6Mbg5uJcgCqXdPeff9KvbJ998w6kNrRY16efUfUNo3XeHedDbCjrFuxg2yN2jkS1gCMpMoJ",
  "key21": "A7gLc16iNyc7f3YCsWN5fat2gJdWKF5CpvKBZLt7Noq6AAEte7qUq2CFwzqpK2ogYSgrah8Z4QHm5xwK3CA1xH6",
  "key22": "3UDYSUCuPLpkPmf5rUALtnM7HXZtMRSkEwsnxPoo8nbv2wTYJjvZp7hKGMAUapAhoJvhCYd2ihYYcQWdBzCZcZF9",
  "key23": "4Kd84tnETzD8gxGNgPYnTtAm7GKqfARyBwupbz6LEYa27n5JUUMyAqKE6qCmXXqqLLCQnTaVVEQDok9NfU69JyNr",
  "key24": "4gjJZZ3v5L7rW9hCSiPHMvXYVNzu6eLWsz2ZVnM3ifaocWoKsdsBnTx7mJaGgsXqs9FSXbdNyaf8ffhcWqUvKiEq",
  "key25": "2PVNLUdUanzpYBKjXN4Wd1mQ3b6FNR7DTvkJVzEpSy4EbgKJdr6oDYG1b3YjtQfuJ3TuBPUwD1Kk9TpJJ9JQQixU",
  "key26": "YyVRMWFDkr8R6uABC7K6vCsu3X1eUoy83im29m4MJ5aDDQjhY16FUFbWinLkuVRh8PBpoyq4zdQdi172EcXdy1z",
  "key27": "5s9PscTM9MwFwqdJwNcHwsXHqGXkYiNLwnC7AFq7KM5wMoyzazPFwyMLfnBajMi3gtv41fsaAZBoFkJb1Tn8f9M7"
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
