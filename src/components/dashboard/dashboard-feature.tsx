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
    "3SFDAQLZosfQBvMZfxxALFrcPKg5rxtFbAqTNveXqYDHKoHNXnyf5zYjUtUUT4dVAfMMJUZSY4kfkcarQfLAniJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCKjPpH9hWjMvHpnJEUxXk9WsHeHBpP7ECnirT3qAY9uUtQA4ZBYetB9bUDKAKvMdLfSXCCCE9bzC68TKxdhgqB",
  "key1": "2BhefwU4Yt911JNn4NVWC55yQDwNVswuisWEiPw75xvMkc9SzV6PgK9hcw43X7D8vuGWseo28NSSkrxDLZnqTCFn",
  "key2": "3kD4Yp6TBaKRDFtMgfDaybzjHQ7Ppr2TyCWGzpWTiNq3gGEAFAbBtyvWm4Pp2biyQ59BTwHq99c8NuHzTAF4wxXX",
  "key3": "3BGCConF73vhCGtRsZA5vM19Lxi35iKmHgqQYeAgcpJ7e4uypFKgDB5DKbP1LsKY86UXFr4ndLGEQWSjJ89yw1xL",
  "key4": "sHu35NBQQ7Eyr9abA7znb7cAuSwXhZ8CBkpakRACWE9YXGjCrsEKXbDt4xdsoUn5G6R7ohtwz8T1ZWQvF6cc9AD",
  "key5": "125H6aBZSsxCZy1BiGUCpTmFhMxeweZNPsfMzwR62L43uGgtCERiDfvg3FccU5ZfKp9BuM6UJC6HbuauwZRRRAnU",
  "key6": "3BquCYLXkiiDWZ4NtjPKxqnaKvLXmpUSMSzzXjFW7PcjVbfsq5AEsKzsgNeTcCF9vs3V7EdACKTpnL3gWbjDtX1S",
  "key7": "5s5WXQaE3hnQ63AWQnyZe5VygbFcj15isAwM6ChwoBkA3ffB1G21CLDAWX44NfuC63MRgV1SnBhPvs8vvnUzRAiU",
  "key8": "5MJGNvnnyJRk1LWeanE1zGG3uah1Co8sVQEz6ySufLK8sA5sDNVUvFZ2bCgVsGx5iRuaM51FAnpgo7rYWpwPJXow",
  "key9": "2HXM2hHhTziiZtPtNTcnPFoJnqRcH9bkxYDtCWcVYpeiz5Nisy5jRphnfVjbH1DBxqb2b1sQFEYmYssRTyQqnFLA",
  "key10": "4fuNgbMbYKq5915MmUjeaBy9QPrrH9Qn6U7YJKxfyAMDrNPLUkpjHaiwCRQCLkd71E4UM1WQd3RqameMvXSsVbTw",
  "key11": "5MrHhnjAD5fpXnPshvqdFu99RB4feWce3nmzg5Znva4LzhHVpo4EfZAwwX51wRkWbcNYEeKf5jHxdu7imj25TmXd",
  "key12": "fVb3ERXHS3qTvq5ca4AwFtft7NQ2L7x431kJ5s9TP3dkJJLv4bzbH3rmbarabKJfuXjV8E8LtTUv6rHYVMENq9z",
  "key13": "NK9fxfSaQvw3KjELPS4nLuiTTcEovDanJVP3Swrxa4BCMKVo5aPK4Zjkw5u7Kn3p1sbfVKwSTQCBP6X3aFmf4qr",
  "key14": "61jCkUS8tYbxg3Xi4GHNcCAkit7VMKWYQhaKmSs8TFfkWuquYYv4GGTQTgN3oSWt8HXdwdHfBbL452zNzeVXZ2ki",
  "key15": "5RWruuofc5Js9FL9vP8Bc4YNzYprNJycSQKYeCb3ozECpBgdoZCk28bvhbeV1rT8wP4MKVmBCMetXhr4bLVJN2FF",
  "key16": "24bvReQAMDYjLebhhjn7gTaxTWC9DifgZXUTqySwpEt7p2kmyTXSH7633FNRdnXm6FNNRkDEkAfX45woEED3vdot",
  "key17": "27Qd5GDsTkfAnWmwwbLw8UcUGDfEYRHFn9exJvQRsgbtE1Npwp4JcB3aBCC7omiS65i9oyyZtu5qV7q5gWQPMP9s",
  "key18": "4T83UNZDkCbmnMB5aup19HxTZWJuCrwgQmoVS38bPq89z3C9uh8aK5gYPoGu5ejeCNZzxKCgc8witm94hSK7CFJM",
  "key19": "4DKh5VjoMUtT5DkQyrMriTna3diENgwLyNii6kZZ1WyG9ewhGP5ceBnzvJRKtpHjAyr62TQDbFmu3GkbfdSG6FAQ",
  "key20": "58vDAfyCq9d6hoTqU4GctqmGBNJKd2oyuegrYinnkBsrdMjsRT3Bj13wQFhzm6NS8aE7SthKujZN97d3GQNkPuby",
  "key21": "2doqoybydncYYWvKdeZcv4a9yisbRD5dfKiAJgjNJKeEaTQ3H9tCwHXtnz14S9Jc44syg3fJeCKpd7pryiCA2MWK",
  "key22": "3Wxp9wc3qcidysMxiJKSwR1zTB369AzjEdzVjfveH3JUhWVc8crAyvaqRSixCgvuDyzXYoci25WEe1kwBXLiaS3H",
  "key23": "5cRbYLkcopktkdWgEEXtJkh2y6ySb8DnozVnFsuziYrZTABTSyGWfqidTGm1SsoG9THYrdx1zWxRYahCWLsYknST",
  "key24": "5p2wZDs3yB4A6ZqPpVZzvxoNcDmdcsSww6MW5EJ7G2kK469MRqNHPLWypQ6aTobt846LuNdrqXTFK9o454YchdYx",
  "key25": "3hYSsnBcsPN6LTvMgW87HKoJDkMKGUWGBnrq8cvtbtfSWPD5rdyyXCcvxwFzTHWLjPX1JNVEH1mZHKhDTsCh8cmY",
  "key26": "2D81G4TSS3NB6PvrUk3VssUedwVm7qT3qctzNQxgXP1Z4GMUEBxG4rNeQbk7Ag8EmoAruY8SHubftxhCmiQ8KorV",
  "key27": "3Ps3jgCFGctwKPeDk1yyRtZ9tRXdv69h39uFR8EasRRdGcK7GSBdBB3oponBdYRZXrbUNbX8S2RiGTJMN3jYVJUR",
  "key28": "4CSqDpSz8xJhZcJtf1Sy67jHJwuQPaxcYAqHmdSzYRWgtA3zWiSEErxfhBkqfvWEcWN9Ap6k48G5XCHyFoXk6wAV",
  "key29": "3DMJcRnnkcsv5ZCxtfu3SeTwSfKmbyBfSmVLBMJHbdu9koGDQkBttNgAC2w1MtRKx1PrNLR9YCHBdokR4pcur1uT",
  "key30": "QLJKMksbLuD1cPsmexUkb7ws9hYuJif1y86K7xEowkNpaVkCgmtstLySmnhUQJiL8K1d6C2AJDo7TGFJeEizLiv"
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
