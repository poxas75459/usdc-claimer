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
    "38GVvyUeb1huRTsDA7hSBzrnoMnuydGgmjpjrXJCJithAYNqYfcfFZzR4AwakyCrGwzmMmhat2TXgLuxhzKTknsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRiCZceEDVrTgND7eGLApgvQ7riLmpwPEfTGemZd157BrUseqfteWaP7cvVgyXM8y9QtLFLiiXzc8ajD2e8Qw14",
  "key1": "36VyD8HFYz5dP9Fwxtri6wdahF1WTxivxX6ouqEEMkA1SVFngDZ5RhXurD5tdVvN3QimVuQXWfXxjHe8tgWekotG",
  "key2": "5B3GJ9VGr5tnCzMDVNSL3TSSvM1YK937ao9GDEzMyU9nwnFrtmfaPc522FkmiX4DS15c9M2qoaoJNNGWFYY2NuPr",
  "key3": "2jThycH8TPBJABqvLKEocePEp2WHoJaK9ySEidErwT31pqd2dS7r6Sbvo19uc34nXynpfAo5T8epr6GVkii7grju",
  "key4": "2vTQGfB3cB3yb9GChdnWSXgMuc3TWSW6KRd95D4cAgmj53FQxgoTgrbj3sKfxAQBqYcSzeaSg6cQxYBFVt23KAjC",
  "key5": "5atcCRExF9aTj4s9ZSMcvk9RNWqBSfGGA3TRn13yMh3TCZehmLUEXd4knT2adMzfvuiaF4PLPDxjVdkcFRUDGAX1",
  "key6": "4RdkE38teKKN587PYVBQeAKyquanh6wJoHoxgmxSUqJERZHyRPxL8oMum8dnA5EVsJfdsrz4tUycxqr3zqA5AbcE",
  "key7": "2aNMPTbQbHdFQTB3NqvJDxTashE9owQAmHxEnisNTy4ptpYbrLdp9PshLniRmwCiVVTQ4d6G92hVGmNVW1Vd1phm",
  "key8": "PGxk8KiiVcgjHDb678UeMeLmJcu1TFfkmQ17gc7p1HkFAX2yjTfBbtJFrQ17cRHXt4rLgNxz9qsvnJmdrP8uvUA",
  "key9": "hXxHm6JSgqeYnz6jssdYd5PFatrB23mjBaeYWuH3CvBDKf5vZ3Q4w6MGBtf4RpMHiRkZhYHeZ5zYELshZgdxbmc",
  "key10": "4QPvhvJpm9KegNGb1g7U3Ph5uzTwveXpbUvngC9Vuvy4PkcKL7nruGDQ8C8tFeCiQGUieqWpF751rXdd5e4Lov6G",
  "key11": "2cFZGLQSbDqj2xu1dnXx2yaNDuWYHnoE9sFxgNCX3rbahoRP7uMuVquJECyjBFwNAv6shnrwkXWy42B7dkwot7yF",
  "key12": "23jfTAGDjxzgj19AYc7YnRdRHMzYNuBmYyR5dhKqj3y48hYCgh1HWfMmv27o18Ynyihzkf6rpwJSnArK4oiAHxaT",
  "key13": "tnmafZHYqqqYzvgPw2wGbXHL3PzZhb72w2bk66D3N91es5ikesVWqhAjPCXrWHtAADr8pr5Qj4umCUFxCNxm1eQ",
  "key14": "5nk8FNis6291raVsxmDACj5x3qVhVQZqxQwoe4S4xqB59a2xrhywNnpYQyucQh8oPEZCXL41sT3iNJwLmg4m1XP",
  "key15": "2qj7hVHQ5rGESzVcK5Y9zvwRCwNKujwqHv4Csjzs8Z8Kv6sww2qjYFsGNqDCY5xoYZJZHUgQ3ZghpFoZmQHy3msP",
  "key16": "2UQUU1mX92eXpZ4vE1qZVPD36U9QpSYUejQx94RdTkezfmUomiTCpTQukXgxicr9LFyRMfQs8o5QwPjAbFgFnfqE",
  "key17": "55wKgfSUovtcC1LhoAbpaFsEBFDscbnUMiqXog2JoNCibcqLDygBYX9DnZD9xgN41cnNQjkFWyQpCK6mKAdzPMdf",
  "key18": "4S3MkHbTQsqyoqfyFHiRmhExkjcAjm6LzUFN6xUpHCwdQMw64btKVP8oEtsQGrNDLW2aL1qvMruKQUUbNrfry7Xp",
  "key19": "5skDfu3ksvhvrsPvbUAC9V2id7QRy3UjLN9nvwW9hVetjkMJHYtEbBEdZQv3V65QHnC9fnGLS3kCoDr9gxW9s2CW",
  "key20": "3r5CCu6S77SGf1qbE83YfdKQWzBgzCtj6mzZAhm7C3VYjrFebdQu38429brWAMgwKuL9m2pF9Rsu97v4zoy8kN5d",
  "key21": "3DgZcPyjTM1yt32UoSVRaPBuVmJmaSbXH969QynZ3W74ybesXm2VhJdzCPVxgsmZ5yiSud4zmgQin33vW8oMwY58",
  "key22": "tkNNLDVCnCzoTLpK2tmzz9besF7iHyZmkCjzSsichVKK6bVeNnDMKW5E3HJw4x6uvgqZsrsgA3tfT17JMJcy9Zh",
  "key23": "5cwZzg43egxtK2jEdEhnm8xw3RpKq3ZJYQK6rJ5vwFQMuthi2vGsz511BbiPz6Gi8QF1xE8NK2ri9wCBPJeFNAWD",
  "key24": "3RSas8BJTffBJZxNF6gifwoDC1Yv6Qh4BDgK37JCH1nuUBujGCbvoEzLUJ99cht7sbg91tEjg3zzy7nTsKLzd6DS",
  "key25": "rKSXbDXyuuh6io4Cxi6fW8FAWYzcEcCeb2gWGGg7oNeL8HVPjzbwF9oNz5rsWa8oKiXFQsbXBQxX67FAGHTRfDp",
  "key26": "53JEYSC9CAQ5oGwGnT97HP5jrn4igUh3uT9zmcuaAHnNLzkgXTKEnDKMhmgvRNoFSUKGE6AzBeDcvG2zwujnAfnL",
  "key27": "2kLHEGN1Ku29F5hhczJ4kn7vLKGbBmZGy5ZmtdZWXUsjMAA3dNMXEc8qvQyCWcRHgYsx9ivmfJKB9snom58FZt6f",
  "key28": "5txyJMnYV7iAm9Q4wSJDeMJ9AwMyjS7oRm3pcxiZrY9YdE3vXUsxgS9YGrhNh2UCmzMa5MNJKY5fXCRahteMsjYm",
  "key29": "4QDjMcBb3H4HGdGQsK8HhMZjsxuX3VwAK7fV6mWveGHafEVpD93oabNpmhoBghFyJm5G9NrtVFWnL5EkupNCyTYV"
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
