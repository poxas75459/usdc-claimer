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
    "3u7z7R8BU3Jx58KwUjVuaRxdCgKATv1qn5zUhUcpGZxLQVQDM3yMtMcfMT6RwTfaQsTrtJsBVW2diP49vhTCYgeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCF3RuQdy7D2Ty6FHE7Hkbm3Fbf4ut75d9e7c7WRqvx5kL215YcAh7AZG5akoYjymWhHGKbjBrAMfiZ73RWwBHX",
  "key1": "2yWqaESxutgTHS7qxyEN3WDcBxUYyV7jDKT5QppRD6PvfyzXcGRqP6fMKTQyE7UvsddGHDcDbDC6EX3L3ZJC6Nwm",
  "key2": "3mnhitEUU9dJbPqMLx1cniM6jZe5oQBmt4Pbd4PdBBqerXLmJWkfJyNeLADvTZTZ3uUQPiAHJDqRuFnJXDRWsh42",
  "key3": "36jkhdXLThyyQnLUjRDgwHozcdq9zWQdZwixEBm8x229KaT8y4XxMqCcPmhZZPtrheb2nFnuxDK76iQYPC6auuaS",
  "key4": "2vpDPSxRkrc7xehMbAd8p544quUYPjBXtC5LDbSoWZxzJtxQM9dB2Qnc7eaa9Q4DZbapS3FYvTYDhxyvXqVeduHR",
  "key5": "37GR8JRPiesaLyZpzoGHgkgmMYJ7ah4UxcVFfSsRATEKxYfUBD1X9MJHcG4WebAEdi2u9Gq51G35U38h6tQkqLmH",
  "key6": "31DqwrDZeQqrPdqaeoSN5hoVrNLFdj6MiQFHyoSzbZH43GMqnrqcvv3H3B7NfnD4RYM1hv5GA6FMskW58xryYvDu",
  "key7": "2f61eaH98knBLCSz8PamChjPCRGpgXGNtQjV7DZ8wkEhTc1HQjrR8AHFT39RUjgcVkiHzCzDHCY6yzdkUJyy4H3f",
  "key8": "5PRnHgZVcGcDkzJKoKNJCTsgMgQdPvkpTSBDoHrANH8DVieScxzgcxUAn54wravUwxjmW29wddbW49j4Ada2fJ6S",
  "key9": "53K6wi4NWAjr8kvUQyVSAtqYEL4CmGJCqQr5Hpw1e18Z9TmcyXpU1M6ysaRwk8maKjpGLUCX9QCFkAfwX754iZb1",
  "key10": "jK2DAEuNbrdhvpMUz1vWzw3VeoNLVVCzHgBKyUnffRZvhC7yvB9UbLVf92VFso2xNbMa53AUnn4B6hoqqSa8SH8",
  "key11": "FUGKUkZ2dXLFqxHkYvjAccNG1KTwtNAMuuLusuPZz1A3954bZncQVxy9HhvmsETvUqzhoh4QuYQw9DA1vW2q7W2",
  "key12": "21isrJsZDp2PczoaMdEEhXqvbo7ccmivJFGtuLAnbxvfHmVFWksxLcfpozvFX8SzdQWu5YqbfLy9ntVWUWPLZReh",
  "key13": "ZHVbdjKNnsXwtG4HEZtUUm1oND6RZo15zxtv1jbHBhBpRa42iTkTXdByjFE8MbJTQQtVsYZYkXd5AWv1edgbw2a",
  "key14": "37s3ids2cvphJ8gqfMYL16NrE7SGFGnz5qL5pwBgWbUyHtAu9r5LAWGzS2LGFHVhFKy8VezSsQ59HVK4J48FDMLm",
  "key15": "52AkJn4UjLE9X8RimcE4EiBXBGDuejuJhkowu7eUqmVVbrFJKXqLEa1gPhGtncRph29v3nC7JT8G5UK9zVEYhy54",
  "key16": "61zP5HVY3ap6R2YDPGUniVxW2Hqn44GGAm4edMi3zE7FNEfqzgo9Nk2GnqhfG68UNX3cpHToLcGK4GRZLmAWy2ia",
  "key17": "4V1R7hUh2NWcstTnynYoNPEZ9TSVgCkDS9KSXhQEoH7vQLviEQEmPbsML7b8jgpvz1hEi3AWmrWFYevi88D1TcnT",
  "key18": "2U1ePqAFQhbRuTdrZD8w5ptosvf8KMvAcg4U5icYcxbDghFf713K7QQDYSUa3RpDxpbHsf8vAqCNS1p7p5dvtNpj",
  "key19": "3MoVLWWLTrDFREfXVjmwBKZmsSv4YddD61svcADtcEK3RcDbMRQG3uGa6HH9W9RDvvfmmsuJcXnkdBzoN9QyEpPg",
  "key20": "2drayxNS8YEoc98dY5fagNjjTf6jJ24t11iJRdkkhtzbv8dSwhVbcM5iFXWPu1eYirnamXP8zfoNgpXYBSGMZX6J",
  "key21": "2KmwuuRdS6bstuez2hnS7ej6oTtTXiSeAGcGoUZVXsRyCWNkqphJsSR4gKAvoznrMs5kboAKVQ2t229PoQD2FRsK",
  "key22": "4ysMFpMuBFy7UQU6ZMD31EobU9CJkvHTNzM1mNsicPGQtH2vhzZcBkLQJ4o7tvKPDeiF4rZa57E4P9JcoXnkoGTN",
  "key23": "FNsqWkgA8ThNhDx14RmbTADEeF5f4U7ZQAnBwUCV6B2gdmpLhYfoq3xbcqRTPjiDZWcQHXp2aYzz8qB7AQ7DFSJ",
  "key24": "2sgsbxdNpyBCihDugeRPmWGzXQsBKHCnXoGVSziHQuSTfeC6792rFFHzkp2syyegC6fR77ygwPUJvy5tZEZ954wW",
  "key25": "38BjR4LSEBQsdDo8v4MG7mNyD8uyM4d286DCfCKBadYPaiPyd9YurGx283Vis6Y4BqT5SrW6qvvGAhgwv2UFu2br",
  "key26": "5C8dfVkKUpnKhwt3GgzeWzRpnxoBCyrL2i8NBhEe7TR2HG8rTu5Jo6HXMPa7A4N9pAigWJMejHsf9MaBrjsFbqjf"
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
