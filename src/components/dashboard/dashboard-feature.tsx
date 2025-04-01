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
    "35mYDMuHhXhoMCAKCxnEGmbbsWXomKuaUZ9qeumz24xkX1AhT3qA1w4rJzm3hry3skTV3myETJZfytgoJr5rRHex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwUKu7UHuRTC585wH6cFFvtJAjm8Dh2kxx79aXPebN7kgyhzE299hf7DxKUvXG3EAEyqSN8o6KYGCmvPRXdsigu",
  "key1": "5ycCBsPBeEuLigCNcSZ9L98soYmW6CHCmaFRkG8hdD4aRPv9qFH1MKSoUu3FKwpXrHkvW2bLaPTcx3ELczYogcBA",
  "key2": "3i2i8Fqcfp8ELMgHR98bkW5eQ8YgjE1RHkhs47Cmv6RL6XdcSVRkAqmjgwGgDVZtAW4fWdQxQrTWC2q9YxUDjFsh",
  "key3": "2eYkiBLwHx41GTAmaHBtrgv7HjYknkXdf6QSuWWfJmFG162CUpf3SNirNkBFFNapA1kR9Waz1EYpR1NaZucMRaCV",
  "key4": "2eQpef9tGdJYtdDBXSC76G2iTN4rTonzDiJNYs9Xkg6QajGq3HqtSXBNN8kDHkFiz4tWvJn5ahRjeR4ZBerZ58Xo",
  "key5": "oCmgRNidXeHEk5DAreNXwYhXH1kA7VNKCgHKapdM55zWzyT33e5GCY4ZHr9yLARUvvCZ2HjCYDhNyGTYxV8rpdk",
  "key6": "61A3Q6uixxvZJV1GGAGKD8cQKWQNVAsZQp4gC8K7UEs9sUjjXiLcy44zXfhfTE75aRQKNQepwGUsxMUJfX8ieAhV",
  "key7": "5sBAKtQVJ7zC3gFBWxcJo8Mx2zDoYprDm2nM5TEHK3zgPvpXVDHYqBE3UZ2HpP29odadVxjJsMETiTKN1mYTaSkb",
  "key8": "5jKJFHJjuLcBRHUUocmMxF39iJkoY1FCCyusuuhCxZSnc5DdDz2qAiL8peSM9ALveuJqEabYbfj6LvLKzLrx3ns6",
  "key9": "22eW3Gm9UGFZkPYCPXVNN4Qfd3KzPX2TqmNCGkh1rkqQxRJTEYqy6tW7qxr3zVH9JapWBmg9D5Wzcr51Nx28XNBk",
  "key10": "2Mm5xF68AjskxtLjN7bQq6upZ5nVweqwZtYwSUGDwRy9X8R2FYZNqvUZopqxExSpR1Zp2RhLjvphVLZCbcooqayP",
  "key11": "5Bn1jUtLxnwrpUhQUpU3FyVcNXyRHSbE3DCZftsmTwP2zXC8iLZrRiJhRL459ov5nKqDsx5FSDLnUfoMoB9FFH44",
  "key12": "3njEeVAx1vFf8C8kxKR5VTphQ7hfHXkwCzLc1o1fkGbtN8o8J5jTgZz99C4UWqERWsCif7Lb39K6Kis34nNijPRh",
  "key13": "BTcJzfGWmY9jdRDPQ9ySRBQrfZEeEBXTDiQSrMT4ZkLBd754zZ36tGx8ExqYaBwsEVE9snAsPWRdS2kabsTPc22",
  "key14": "7gGS4uogQJfunghN4GeAGMLufdQGphYYDhEvHFQ5hRzXJFpBdsKmB9NRM5ZXuXYAGxM6z23FrMaxSiDYEoyzsmp",
  "key15": "2VHqcBxWSoJLA6C6uXWW2tX2nW6QFSy6T9Emev2e6ZHdXt3BmBUjszgbsN8m4PYQGeGbsdfbtWRMD9pUs4DbNS12",
  "key16": "5RDYb6SEUE5zsMD8N5nUzX3VqybmHzHCbY7VX2jQjwdnhUeQqnjNEjcJzsCxrxF9JqBELBq8s6dCXnB18bRzaqT4",
  "key17": "58Bcoz4ajeXy4MhuA2qU8AB4AZKBZE2cSWN2ect2Qka7tNdiKuG8a165SoTpzHssQJUUsuWNp4KPqxQSf1PkXszx",
  "key18": "4qrbh9jHRbgvKo6f1PBW4wxKTNKonjzjFeQWk9FTSkexwFHkfhJtHQutsjvcZeinNnRGdUs9W8LJKcb5gUK4nVAR",
  "key19": "4mb5sDfZXQazVdVWojc9ZcSFY8JkAWaWfkuaiEETWuRV6Vr3mwQ5JLS2xrnXGk5mg4FpFGP4AwQesr3yAgBbYQyW",
  "key20": "5LF3hyBwGn6rUUXKDnHgqMsktMSn9eoEM9EBsGZcPvi8UYaGthAPxD7SBKExrPLWcwhBB8hn9ypuEk9GjH1YJhAp",
  "key21": "2F5jfY4vL28SbpQN3PheCRk6kr6gzeysEFPTzqh7VsF4E9Siwy1sovSwWf3eMnTSEjHmuKXmnu2qx47E5NvnqV9K",
  "key22": "24zuoNAFzhSM8mN1M5ihcX6AK83yBedpZUptonDSoxFWeLfnZrh6K7SHULv1cfH97z1kFoxQ21H7JiXH85tgU4nb",
  "key23": "dPtJzu3d7pHeRYZZcxQbsZ8k9mkE67tBgASkb4De7x3jTAgwN4FjvUXaEm7LYkYaovM4TvpZANAGcBtvZBcbrg7",
  "key24": "5Bh2ubSLUk2t15w6dG5rhCKtEoNmtNxCDgsbZk2kLvz8bGG51nHhdDreR2pzqF4H6h1kHAkS6XUCM3mEPCXLe26w",
  "key25": "4fDJF2Uhd62uAUZUa16zY6JiCDZ81Fu7GcH9arkFdvYH1a7MGp7PXjNtbwhQMSuzN53SK5DkawBZ6L9BgkztDiYc",
  "key26": "5VqVxjmZ8wcYnGcvKTnD5aGM9ejqYjDfXkqTmWLuHsR6K8DbnXJ5jpetPD9gn4xCyjezWVpjTKjczWBn5Nh3QtsG",
  "key27": "4HGmon1UQpnLrWbdy51RG7veG4exx4nYULqTJY4YFkSr7AH8mhQ1w1hbnqXzpuCkEMwtYNLZAPjBmwnLD5fFCGWN",
  "key28": "4reGSh38PAN9yVo7TwmQohuZCYtJGsmkPGWPHMhtpR28znkjaqYWrUHJ4GwWFewqHcmJMUkLfFCpGMCubasqDVmA",
  "key29": "M9izxFhvMu5F5MHPAiz9NoYKDLzDiQziaHyDeNWZmRW1L9ny1mUtSp6eRmAY8cnHdUjQuw6xg7FgbRXD63qzJaB",
  "key30": "4PyrZrtxehBLNp8qc7mqx3395MjZ8DAeVk2iNhkFf3Zff5Y4oW8CeqDw1ZFjb9yxY5mBw5oQxKfq3HRrjo31cC2K",
  "key31": "4WkoBNhdkMGmsxM63Vw9aBueq7RAQn39gLeHgMUC2aMQ8FQU24i46YPPU1JuAtN9cJ6P3X5XRH9N5y1aTKakGV2z",
  "key32": "enBbvYAokSzHBeeH1KhbELs3MHjphsiACu2LaZLuCdMXWFnZVrf9vGB4SwEQkcQNc6T8TjW39HJw3b2ecxGvVbt",
  "key33": "4an1CCxvEbDsNM3fnXDuicBhYPCnRkhU2YPsUBwe22PPgm64B1ksdEtuBbZp8t2XNyEmMYVzdhpV25knWDy9K6MS",
  "key34": "4ihiH2WASekkPodtU7xmtJRiisqgxe2DMCFRckY1HsM8cgMj5cEDrMBUNDubgFCsNP2gzJBfVmhy3NbPRx2xDgcZ",
  "key35": "junzSrMWYjV5GcFSe8mydGsD8wyfYgghpSS6jSPvWet2LHViCQ5FB2Fxsv38uoUZdT4LdFahfCUi92hkggTE28N",
  "key36": "geY9Uk9eEXw3zGcHRY6qhRi6Gc6BNVRAJcu7LFsSXdqzJPEHNqxUx1JnxLN5aGWZryTVnjzCsz66UHPc8g4QADX",
  "key37": "54yVENskVbv1pbyhr1dhUkQyf6gHAvbFXFYqXLVsRmzsDfhESjjzeUXWrWjBPQkr25qRsRoTENpYRZYRXTBekyx4",
  "key38": "4e4CGiihUWbh7ArykwHJ48u9kEignpjHnZcWBp7mKgNV6g2kqn2GmEb62kJtsjnjBBWEkVuJq7btQZ1G8e5AZF4f",
  "key39": "4Yc9FNn3P5PqCs5KxCZBf8ZzaRmtt2h2rLuto2xBuag7raCe6fJSzuMp87VV1B9SobTtiQXFhb9L6M4YSJT9Bifq",
  "key40": "5Zc4PWjaUjFTKpLHVbxxfYjC2y5abvwGK8jgtguQKQG8jjQZKy2acYNMgZBSnuuRoGnEXFTbyGqeW2c3SQSpam82",
  "key41": "3qnzijnVyrRbRZ5aNTyx6Rht3eeEPypnFo5DhjXKeoV179wLdJMjdqycJxpUwxHtkx9Yh4XMTAZwDu57jN2LvJX",
  "key42": "UyyexXg4PsYXeVUcUEtFbzznmecBYoyJSWBoTHEvqXFh8FtAu1dx5KTDU36SHbmTu7tTi7TwPQQNr7djc6siVRN",
  "key43": "5QP9PpHo1YZy749cjqHTpJzDL2X3Tzs47X14TgHB62ZvBrGFMhtAurDqUbF3BjD8pL8Xy1ufzpiqmGbALyns5CuL",
  "key44": "4Dg24BWdvUnd2miuEqxbikTVyD2SbrXV42ut6RS1b3qp7r8fVBHquD3znLFW1aFurEM5s2wduoocksYKBbhujpW5",
  "key45": "2xUH9wPm69TfyWKbje1oLRv25hdX9N3BPV4dxquMogQrxngp7DXVgMSfeQyWYutmxDm9M7rCRSF3j2pkiMpjUV3F"
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
