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
    "52s6MiG6K38mRLztouhCTNBfELqtpy9jAEisGedUmx8d8sp7oGxhDtkEuMHLAWnsiiZZzGcWA1TjYrePZUu5wGef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4jFFHRwdpJWC228L6R2c8XRYPBk8uGMkPhXak2xL6GzHKwjE1M8QQ4S5xMpEyXHFBrExLiDr4QUq9Z5s7UuqyW",
  "key1": "GmCk4tZQwNLPGkbZLiFwLd9i3W7bRasnjR1kbB6tpjsyEecMyxL4fQQpsekncGfK1i1bFMqYodyL25KcrU61jJf",
  "key2": "2ESnTDv4mMdGtU2LYFRYtsNVRM921kbhrag3MJjkLXBeawod4SykapqBz6Q3RAXnCaW3A6weNthLjiYxiyc9HZxp",
  "key3": "3WwjhQrjbKLTc2HxWEDQh28BYydXeyyxQq3EW4GAuPt9sp3sfbspZHRZe7PoirgABCtFkUR2p9FUrfHhQ3DRDX8A",
  "key4": "4yBEKEa38QGZfgCEtnWWMSukxiXTnBE36cKHQZmuyCnmPGCZhNqPnhL25ucrNpvBSnDyLBGxZdqR8gyrXRJWWp8A",
  "key5": "3mSb2RBJdPTAS53zbMLUsMhRxdo6kgDKfBLtVqRJgf46pkGxZ6XykJfk3JrS1XqoysU863i2dP5NR7dvo99rv97A",
  "key6": "3WqGwKkHBb8LGRMSWf97enZ3Qu22bpXcbDCYWd8LV3YZRFZTCkze5HKiurDibJptnu86aB3Qjp2pZZDWcyD5Nu9S",
  "key7": "65u1WBXpsr6wzvSCfMqh72HpRZuaXQJDwsMP29HE82HJX7oNMxsArdbuFE4udzeQbwJRbfSGYgeyqjtzgpmcXMuQ",
  "key8": "22Xs4tnDqP2C2dHiDNbnUrryMeEmRaNrmK8STLQoEzTN3NpK5SLpPa1HdbS2cQF1cWhxkvb1c6QGwVQ6xWcdLU9j",
  "key9": "46pjZysyE2cgY5Ti7cqk7DznFTNfHrKo5apaS5FLfGme6C15zZ93U8nmukPEJ4Guyw15cmK6UFG1BZqqiNi4RzyK",
  "key10": "3BKryu9qJqJgUceaKmvvQpUUjnK5wFnPpFiYi9eRWRxotNVwr8mdoyiH7nR1saK4cqJ9oUBEFtxJRpQG7Jy8Zz8N",
  "key11": "2wzZZZmKcfjgJV7MEo4iE5TT72SMNehwfsba7hJm51XERsXzFbmcmMTgup5MTz7HpjRhMkT7BxYRWVp2dUkx5bxe",
  "key12": "4AzEPtnyrcmYvc6NbhqnSjZxhbjHc8xX6HuLSSSnGxirhALtY7iornSc2UZsA6Pz5jLwCcxnL1hvYBxSL5CfNWsc",
  "key13": "2WaQ1XcLNtK4oGjiw3PBjbnsjhycrsgjXsMSWNgztNUJ6sbUrp1aBRfNLA6WQWJkWidZkrBJb6q6Hyh3kBj6ezx4",
  "key14": "3PSCVtuYxhazopUPWQfNacCr31zSzRteikiSs1o32ko8uMWQLnJ9QBUNfNbSzTdDFBVpCMN2qqqLsHxNE8CrmtqP",
  "key15": "cTTpaMoiTKfmM5z7zMak21cazpnTmbDXsJ1iDkmRkrPpFaPYey8kYjWMYdrqJC2W9xAXVE5GHudH3jvmv7iimzQ",
  "key16": "3HEe7fuZ9YdpkvNGHZY9B6RS8tDVNNLZYXTr2wYXJM5L5fyYgaT9drhjHKJTWQkWjKJshcjphFTTJhcrhXNgXmH1",
  "key17": "4yYk2PgyJ8AnarHiqMhNLLBDbBpqeXxAJb5Kz61cG8X64NaPTC2BMJPqd7pfwF88RBknW71hobJtCDh22UfeWRWZ",
  "key18": "4woFvL3dJ4iubKt5kGVmqkmYiVsfLXydmpZBaxrgBFABKuxHVMnj2Un1pVQHpVkmmeGgCGpNtVsvVEFkP7otZzG9",
  "key19": "4jGVKAAwQ7AkSbTrNRuwt3JTFAaXtxt8xvVRy8dviKq311VxaPFWTpTSirmfKjzK6pyCKu6YnQrKTiU4fsCEfTx4",
  "key20": "4seDkTEdVZUkMUJNwAg7FgHX9jonpEEwnLd6MY6ugN1rePjR15yzJDoDgoMrtRaXH5rPn84xA8RH7gk3XPzTuFBU",
  "key21": "4JdCzw7ct8GXuDUUUsxDUgxqYW6NDe1QwxRNe8ikaaQ1mMCEozcsWJwyJa73MoAz511cx2RptuKNtAJG6KYjw45c",
  "key22": "59ckSL2mqpz94aNC8HFtnhL51MK2xkje2k4eg5ku3jspBvJqURJX3Jvx1eZP9G7UvnF5c3HDdsZKbW6QKc6VfUq",
  "key23": "4YCaSgXgsTx477j5wm9Py3Cz7x7y7BifseUH2tiwFhrTqYna9pfU4aSJGMy7siyHwY18M72Pi8nv2hgrzuXcUJL3",
  "key24": "3y9emTzUt7a9TjFTQSJ6AD1GtNGh8KexaZK4ZJo2dCfho5ZJK1TP9UBFnL3xaNL26Krob9gM3QpVirrLoqUftQZX",
  "key25": "jBprCAqaLUG45FA1sCf2u5Hf1pn7JnjxfY3MmNXEGunMNgCj2QVBcgmpq1c25vWUgSWEaMYNHa8TPw7SDDwXu4N",
  "key26": "5Vrj7iCJqcCp8aVpYhGG1Mjt3K8Ta32gPuTpeWF3QWaEkqejotWfxG12tpnXxhbvxQWS6cxLmfdMwxoH5Z2zf241",
  "key27": "3t8Vke6iC8fuczsVkFuqzMFvSacKfRo6kjDnfZQq9yVwt5VhKH66Samow6GxC6tikRR2NBB7DHjRvuxznkTWMdPE",
  "key28": "2KknLUGFowGeVSFWtGFcsDq7Z6js44iai4j4L2sjYmXaxdq2wDYGbgZzo9CYNDuMzCCSwwLRxxjHDcWLngL6WUpo",
  "key29": "L3DsUgARVS5YXPGxSGJA8dChpmupp6Van9NkKj2HYJQLinr73R4u1H1dezcQY4fhx43DrvBKgrDT4rTdtNAF8Gx",
  "key30": "eoYxx4DiyTmZeUKSrrV7Ac8v1FSMUWsM1psQeEY8y9RrchV7ezc1Sua3HYwKpo3gbWq4xXvv6uUfThgY4HuaF6u",
  "key31": "5qsLSpe6xAUM8YnDjquFPphrUkUhv6bfKhjGXTYhuKGymD8JJpGpXSDxvxNEsRQDShuwZVu7S6C6rJbLVYhX6p2b",
  "key32": "3Vso1mbiLdTzEF4wy5ZnLmvMZgXE9TxtUjkvtjsPZ2bfqt91pzwEzC4bjyj2TMqAPYJHqkSkbRCFkhN5xB72moqU",
  "key33": "2uWLRL4aMfYu9BEHRvPdxnqmNEUD84pESQ6nGaSniMr18wKk6bKuogJQK5vg3GFWsAGy1x1NBrMiYnmxZsFq67Lv",
  "key34": "4osPEN259jgRCno2d91yUkTXSDbXkg5DvZCx84bkuywwzt9D1sMs53gYqYYMCGBCZyz6CrvEdzqNVwLYorEnB6My",
  "key35": "53gTk1dJHwYPigbTexiiJxTuXXEgGjtXXvUyexR1mgsqRzDzKYPtwHqUQo4R1XQ6avc2UdonM6fGZ1NFn9xNsqWg",
  "key36": "3hcuBZxzoYJjiP6cGBWLiwCgGS6ttQEJtCZWGgotjZULcGDPCJLVZLGrHN8wH52azyq57QcCjh899ANGYBxHe1dg",
  "key37": "5sHtiHDvpDexBPiE3Y4M8aeY2Hqx5dXsQhnkx57EebDKBRADkqS3srXRohcendUBuj1Tuc9Gv8FKzjUscwZMPwpd",
  "key38": "2WpSG7p4oWNxHEdR67uH7bUsjUDeRa46giVfeAUYoNpG8aS3PNEqGJzvDSA3MuwqBNn275SBB7n5pQ29c7LYA5aj",
  "key39": "4dyh9NQGCwgdzRrENNaPUvumUjWdTyEvFgzq4jT3S3HK6iLzt9CrPfN5MGyx4z3n9N4uibKdqVoV5b6zFFMbS888",
  "key40": "5JGhyk3Sp8y1anuWdXw5SqdcXWG19hQNAhbft7JWjTz4YQyikRqopdYAE4JmeSK5uon8ddbyNBnLumLX9XtwQ45x",
  "key41": "4GdwpimGoRQqNQrDqq96hY1QG3qMREeQfDPWMkHdFFyfEqDk2jG3HArBMMG13K6CDy4dS7eyuDd7vHZDzVsUaeiq",
  "key42": "48mGiKcqJfNY9E58dvzMGBZ5mq8zk5NVqV1TGd1Ua3HQ8CBVM37VY91byEtWjSv8crwtF2uYQC4HzM5viXvwt4bA"
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
