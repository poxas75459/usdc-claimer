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
    "3PBDDoB3Jk7JqdT1Ptt5ZhfqHimYkm53bFAhcCAo4gNNggssWgCgsd4xH3Dpo1cTZ2MZNuUCcgPd573rYCJoYjNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XrrgngTexEkKLZRqRopi4XUtzatEnmEuBo996iMAhSYVFygPNu2nxoY9uVKL3i1C4Zptq9bQ7qZyopZ2cvx51n6",
  "key1": "43yXaJ5hBLAoNDkxTgz6pTALHEd1zdiuHGh6LrvNXNE1ShEjP7gaV8MJh8geZravPyUBYPLMCeYhnCE2v5gMxgXU",
  "key2": "3intadodfuXVSoeR1uhUoqjuBMgGvGhppvyzK7Ta5w4NopSnptkRscQ1icsH85W7ZvHC5YWKfCgjPL23h75XepYo",
  "key3": "2NGNzqCW8G1fYLiRBdDuFmJC8Y39XH5QtEGnnaEELp5ZSU9vuFJPDxCDtAPCGp5vKgdPoECLYWb9kehpysXwqkDs",
  "key4": "5WFru2QTW2JU7d37c46A9bjbAPu5UM6e5EcrhCCiKqweAxTZq786wV3AGauyp4fjyBQCV9d79GCKhhLn6uZAbyE7",
  "key5": "5GSTCZABgJgqZpdGYR4eDKwiNhEJCQ9amr1GdrZdpkSudmoxpK9SEEBjdLrgHVucWrRFY4se42FuP1V712QPF9g3",
  "key6": "29pLH3sGzMNzsxYdAv5tMvyHC7RcJMSYUAVez2PyH8M2TNs3AzYiAWcHEje4rjHsB4qq695xJZHbej4EnZo3nm49",
  "key7": "53uij8bFZHtucg8wejbtJeSUDtvky2hYpvnmM7ioxMNZTrzNHN9NawtmmTZf6vZnLQx7ZYmaCR5m4TZNiBBU9R3t",
  "key8": "RzuoR7pbed6zvJwzS6nm4cEVxS8SnrcnrpKnw6LDYcXsCtSiuZov8MKv94T5jWxYeT5GfEC8qupkH8iJq3p9QYm",
  "key9": "3528gJ33XYTaNiJ2gAVxXNuQAj9V5nyFcV9G2veyWnAwujUkS1C1F3a6GZWkZucR6LEj4tqDHas6FSJXaN7vm5fL",
  "key10": "4agtQsnsG9U7k6fzPTsL5yeqitkDk6isL7S984yjY9y4SqHwBpoWCKFjiQhgYypVckNTStnadBMuSrHPXH264uP",
  "key11": "5zpzQCy8eT6wJtotXXj6WnHg6KuS12icVAnaG6nnsgug7akamqsyfwRHXjfE5V34hQm1BRDNyGWMUKEqZHkLbk2z",
  "key12": "3JJss9C4obWFYHqdf9LNQzzETLYm1Pud7SFZNDS4AtX2dXB1LzGi157SGkk1YssKbpLqBgETVd7jAEPLq6YdNyQX",
  "key13": "23KmoHmXnNg51ynntfNMLNFMwabtN9CbMpMZwGgcgLJnvnCgPsx3FVymAgyqQnueuK8uop6yn2xLNE8gSJtDZs6t",
  "key14": "58nXzZcoi72J2r46nZz6jKwjfhsp5Q9Fccsi3M5BCPi3tsRg4WUDNvsshXiBa4uHZ1xXCXeTAgxwEymiJjJWm4n5",
  "key15": "3EdcW6ukDWJTEVaiRpbo1MR5meBRFKVJ1g3gf1Mkkfuy6JpKVL76zdjhEGSpuxWLDtgeSPfEM2DJWN9aF73MzmRP",
  "key16": "5NRqExDGKEiGjrMsFJQ3gB66fkJTFKTd1fWpRy26Eq5x6YL92aYPdxj4oJidrXnn7bMLy4M5B1UdwaTMDKHLhgVP",
  "key17": "5xKCGC1LgMaBcgHbfhXAKNY2fK75tLmgsukAU8UTU1bB2qpDMUGMSgokRS1Ax5Gdm7dGTVn43t5DHuk5A6stymN7",
  "key18": "vG52N9qJmzDgX8z1A6m23GZNSXHtDBuzBCmaRXCRtwGThVew2NzMuaAwLvbDwViXTSjgKpfcUMBfCWKL44aYVCN",
  "key19": "3EsbWw71Hb1Um7VucKq1KnTcqrMRptyUAmUNRgoNKW8ivgVj6VeEGCDMho27teD5EEqvNmYCbpsErjCnH7P2wqUU",
  "key20": "3QD4dsd2aws87BcfDPLdEjdzKTtNpF78Wnm6A3oUCVAQ27LyzzfGWUDRtVRautiQFhiMcDeJf3Wb7RGMgPi2nDgj",
  "key21": "5qGqYaXp8Wai8DzVfBoYREMKFXkRLhUMSNfEKk9BUFqqAAxr2sAYuNoCJC6SQthDNJEWzb8bzxmh9Y4T2UZGe4XD",
  "key22": "KgWawrrrbJJxZndeea5nKzQuKc1oy4UCNZF5CuV1zMTqiTzv85eJYqVsF37jc6P3T86m5GNwuKdKB6io7ZDq8VP",
  "key23": "4ZXQtWn8AULe4dQe21kc4oJ8zd3F9BAkVwK3JTm8DJScgHv7Kq9yp6UdiZ2CrR6g2qBZxDJjWpRNMKwy3XqTbypg",
  "key24": "25GLohB3oeefLtCeLx8LaRDNXr62Qvfcz5deXv7MyDAcrFTQbY7wzHb8PmFcZxHKTtDFoEMU8JrLvYhLLpdaiCia",
  "key25": "4Z1uQLBJoqReeU28PKRSX9CHkasrbmTzbvSbkfj23UePY6wq9mHwpMFpvAPLLjXPJoiEB1wFLypha7cWMNwTbedw"
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
