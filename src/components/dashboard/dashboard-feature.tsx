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
    "4WUzFpwyoGwJeUvyWsGsvzAkbrmDK7wQg6t2ctVcdwzQREUsYagKtNq5K293DH3P73Q5DWfrP9bZ8jhAg9P2NWN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKXmPhKWPEnvBwxLRQXedLghcRB8dsGDd1SfhrtCGcjMaNEkj5g7bjZCpcaxreaMWN2e1Kgw3fvEBDnBGAQHfFH",
  "key1": "3H3JgSf53pc9UXPMEAtehD3jqiagbxmMTxhb6eKaUkqtsybrzze5dD79V81UmpWsL8qGFtyBYcnjXVjo4mPpY5ym",
  "key2": "2EGKXbmE9CZguHFahEgCAfxj7Qwo7aSnUgecKrVqbHMUgxcav1PkuzqHXLbeSmpZ2sXfWEJ4LoQXufy7XPbSCwpB",
  "key3": "4U95HWpdwGKdqzPZcDVWLwP1M7T5pfUxA8dyvuPoxwM7tyxEkTuCEvhswQpXsTBs1JK4vE9uW1R7mvhgJgg4WN3W",
  "key4": "2vfYHEH9p3c7YSuAP9pUNptZCxxHThbRgJmEHWDD4rdPDna56neikGbiSp1jjWb1h4moRNh8hfXFtcL3kVfWbfqY",
  "key5": "45x2C3UnA8JHTnPk7DPgweKL2osiX9dNJL1APn5DLckWDthZumnwFkRh45siAjDLMaDAtcyDfkkgEDgw6bN93Z3V",
  "key6": "5cxMDknZW8DtHe9JTZS1mZL79CwfwEy8Gp2cjQvvnFchRpJu5Su2bi72WREfxcLvLoYnuqnhQWtrdkNU2zF275Vi",
  "key7": "4Wp7SrBEV5Xzx1VveurpmXGU2ofuWvQ4AjQgdxFUxyU9s7PVHHScdU1tvxpcv1JRrPSDz1FgwA3JwevmNNDq94ge",
  "key8": "Yf4DkM5UQxmqCgMdszfREsEJKesZifHycNSnqYd7F8e8qTdVUDBeesMDb2XENHBVyfY3kbLA7nyzRtiPLbNdUfq",
  "key9": "1U79aKivm4uSy8uoj1yUzYPu1n49ju3Twxj9utozc1FjRatQnvjWZFvTRaR3qVGbhJDNqmzMKSkgzSzQWMrEJpR",
  "key10": "4oKhkDshR7ZUd5bzGRYtRX7TkafuMRxndY341WACnr5TBkSddZrwzT4i7BK3hYkckKPbn1M8ts3amHc9GQ3KZen9",
  "key11": "3MQTSgg8b9H246sbxt7XohDJKV3bXX2XgC7quSq5KGXUhBv2MTtQq4fWhwd75q5bthu2PmmmE43Q1ryqPW2SutRE",
  "key12": "7dLuxJNTFjhvh9EPrb8HQnoKQtjepfE9brZqfy8KdRDwe6MuwpVFNt8Bbb6jZCFoqQ6dKbmCGwq7jNBFyuNsbhM",
  "key13": "23fTYzHogh1ZtTjAPHA5VnjrAgG4xvEHre8wVmZNGpMhvXgAJ9YmT6PkZnNeCRMywWXZHKsueqxusBNjzzT7J5Pj",
  "key14": "2CjQKzoLHSmV9zQQKQLZ8SEza6nH1Pss9Wxfit3eTCKaZiJ5Gz1m45ddXR2VLNX8m4cNshx36UXe32DnpY16v6vD",
  "key15": "nwgyRfkUxv8PdW7x2XHQ3Y5sKAn4ZZpgVzGmQvdTCJ8TWqCrmrAaPJY8aTAeYkfteHJiPL6FM9XX9xdz3TuEFKh",
  "key16": "2EwGxNbGdiq19j4beCAagF4dq7qSFSFFKGUZA6vXViR567z9SDfmdkPxjfMfMqocdvvfn7BSjYJKRjMVkwb4Y3yf",
  "key17": "Nf268YYNtiiAcZhX3T7CtnL5pUv1Es3Gog447qYrBYXNX3KUE34AEQKMU6HmUVaQ4EdpGwKpjfHxmyYv5mNJaB5",
  "key18": "3DbP1PpiknzGdbeetMW4mvRMmWWrqnv38RuLwj5fPSuk9d2uESA5yV3dH9HBCBkWxEX42TGSqQXcde2K3WzzhEv9",
  "key19": "482CUheH38BGByS7zT7SDktqCoyiGkL5a6EA1RN7GTCWCcQ5xWaFiTyLwm5199A1c5b6D8bjwH9bgb3gs3bS7x75",
  "key20": "2eHVVFXqj3SPnc2qjQzoPeWLDiT55oQjyZjXkATVkGiCUxZ6oQpGzohxuqH6WCnBwfHPiyiUZsGUfBtkDafuJUX7",
  "key21": "4rpidKNVh8DfsvekuJV9DN8RXDUs2TcVTPZ432MYvrfoQL1XjkytNpcZFBWPcscPBppsUsAiZXCcmwrQziDHVDKM",
  "key22": "61GTF6ZxmWtb9ChvkjtseqwiZzXMt9inZQdw89yPMoAYdvoUciWSd3pPD1J5kfNmKDzvMn4wyhS7N6EeXo7fkjj1",
  "key23": "DSX8YwYXPUEnbzwSh3XTjwpJVK3WaxZEB8HQsWsZGgHELWKoJ3gax1riEUTRj4UWUuBAycr7boBFGY7CoZnWfy8",
  "key24": "4gUZ5EkZfdPXock4mLqWK5nCLSdDzEsirZd2QvtM8pg9k9CVoqXJgoGxEAficsFmXcRjbLKfYeCCZGxKFVUoBtNY",
  "key25": "2jamRkpvPzLc1CQByXgwGePMnQc6sMRAKwMCGz3mqMMfds5xWjhzokqPbmgTU6KhBNAG8oR6zsmaeYPgVKxeKcg",
  "key26": "36st7PxmQnrtjiyGk9HqSCyrR5hxUZuryv8nDAZVD7aeRwBggGA8JC8j3F58D1JAexLS34otthoqsHsZutMMLVxM",
  "key27": "5pUPpSAZm8Rma165xLcpbJvBPpASaJ8rF89C7E5xdJmfHfXnv6jvhgEPaTHWJdt9mEHZH6EmeufVN6XGPsCKT3iN",
  "key28": "brif6d2S85qYFW5EX8K1RekDeKDUpvQnir23Lz5kVFXPmYMoFrJYJKv24dJGGkmuQxXGMcLTeUaixgQ2CjZkhsk",
  "key29": "5Qoqatkf6B4bnd3SBSZ5AE8xntAvtCEomSNCWatHyWtDwzN131G53MWSbR1cZRHNh1wQGEWRzEM78885nbVvnPsC",
  "key30": "2bWwf7x123s1ubsGYMGqyMyyhT6zUDR34njrcbmpQcaizFRwuVdaWsA4RAWkuqrkf1zmEU9ZiWdUaGTaueUzUFUd",
  "key31": "2rQtBXN8wuGBGyisx4snm2nJw78gewbyx8dJJiRgLg33VceSnWFhL8wopLEe4orY5Z4Evi3fvRFxfvkRR1ENWNxk",
  "key32": "2v86BUyeqr8bJnZeXEWYGceQxFJqTdaXfe6JYtMa1uXPek2oiWkSjAGEWLpe1JYD15CZFTHv8GjY4SxuxqBXGomg",
  "key33": "31buPWHMXeqUfTQSu9r98vYtZrMRoRkMrEXvCe7P2EV8ZNUB14tihw6PngRdsD2Gz9jZ6H6YHtUTDFyj8x3KwsvE",
  "key34": "GZJP4cA1Lj2nPMkG6xSHNieiNFjmHSM3tiGsykUsNhyT39i7N1EEy4dGqb6fd5f1UWbc6u8S2BCMVQBkypEg9Bx",
  "key35": "543NuNxrc2gNbuasusHvjbf4i6PMmzpCV15zJEAEpqNbnH69XKVqpVhmum4bWCG2UMzYD6p7QGSQuyHHy3C6wbhs",
  "key36": "2QxG9kbKeXHbPNjnHm23oHRuF4fu8Diep9iY8QBckU5fUyjqLLDmRQAFhHoWCuKtT45k6945uJDPYEfNc6eL78uD",
  "key37": "4X92TWHFVVUKq66S2CfTsip5uTZQZyrf57dbxLsJFmGwqWx2DpKUVUZvtTTg5yo9TJ6bSGN9CFMDsHfZ9b3nvr3a",
  "key38": "3E3kkF4ED7sDbxsyaHq8D2sNJv2MeNGSngiqqXfk6vYLoenBMWDdwApPFo15xaSVUhfxYVMD531X9VZNdS8gX9tW",
  "key39": "5k9HYUAJJFjK5eFDFwkPDLZ4guao6ahnyYHSmMYaUevVeah4BC2Ct2fY1EeM66ZG9QYmeeY7TREwZsMyHFUQ9fUJ",
  "key40": "53pgqfdDeLCaWYyttAD5ktqSHznnGohgFzuAEK1ZoVTC32MnHHqcc5daar6BKXcDn4qVuriyvVrwPyQ8GG9qRoiz",
  "key41": "3cThiTRQnV29w9EjTduEuHaAU439w3noTjan119vJ3PLTrFcmh5miyc85NF2gtf2DnCRJUr9MEsDXBqNyB339ZAg",
  "key42": "3zCr4YFEf296Bi6g7KN9n4gA3BQUS11si6z6grFKBf1jD2fjiswu8SN8nd6jh66m1nvjaWjspzWUSrXS2M91FB9r",
  "key43": "5Gu4UqH2ZS2PjEWwwedfewd7mnB9zS5oXwn7Yq658L9ZvviBhfH6rdMndssDQzGND8D3NWMAKBaWqWNbJojF4RZq"
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
