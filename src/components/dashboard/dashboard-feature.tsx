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
    "3Pa24VEXZ1YtdeXGG3TCMszzTWqBvFFy84DCRfW6VUDpbNdYSmyxUfmJWyW997p6CTnifccrHnCFqWLbFxyqhBX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6TEnzq7dKuyThwXL7FqTVP3mdvLuKayDCdR1f9EAWHyVGkE6hZ9rHb4gJ1FY29jYfzojuY9EjeigPQPhaBCVLc",
  "key1": "yUjBK7db15j5T8Bd6w8J8iiZJxAbXH1Y8DmruMwSqqX24Xf7wvPEix9rhjF9sG2RoGGMEP8eMVUUFqu8XUfF3G5",
  "key2": "9Nf3B8dWQgU96oHBmwfqf3SuCqFTWb5inriFcXawojUpzeWTkaQVrkCgiPJbvPR4BgDz1zAfC8QSjyxiTq8ybDY",
  "key3": "5j6PUHUDz4KTrLMh3pQTEVy854fd2ybGymK7owgzwf414fFBQhyTgKnYcf1HZfFXfebdv4eCvM6LZgkfiw26zr3j",
  "key4": "3P1VpvTwtxsjUr6RmQsyikbM31ApkdRKdntowJ4f7gGrCWJDHbZKPBgMBJEY86XEmMhvZjbFzeBfZJzNiMDQKGTV",
  "key5": "2eVobDL3MPrhDA9LVrBLV4AYg9WoxMEK6fsodYCcJAAMgaErgVF6S9LtSHocoWQqwXverRkgpyMnEDt5QC1psfvW",
  "key6": "3Ps6RmWnMAyqdGDUVbrSLSrnSmrGtP1e8Hu5nqYqK2RQd85Bxf14dpXkNdUtGExWjr4ffJHerxHYdwGF5uwSDpgF",
  "key7": "45eEhCceAutFagEjZximbsTLKjWHtAnGaxW1L23GpN6V97ZbSzv1AeYuQQKFTUvWzpD8fqUtG33E5441AZMXE642",
  "key8": "5JYbFqSHsmjNhV4cQUnahb3n3aCacKCKJWLUCBkPjEmAkMpCoCKooc3JL6jgnJpgSC366qqnE8XnnBBFhHhBfwrH",
  "key9": "3jr1REdbZ2pRTpvCW6AiRF4w3eHSDV8xbJmAoXJ9zKPUkZ42ATAbwE1CapNBtBQPjA7BCVjy7cWWdMZrmtdkakqY",
  "key10": "5zgkCzRyk4oHjMonzg6KEU28ir9sFaNKRngfctvS765dx4LGtTZiYE8Ff8Km9uKKwFs9dhdn9qAXmcZsuf2ySvQ2",
  "key11": "oxRJtucy31Kjc42THmMKZYex26FrStKFDR4o3B5W4h39ac1E7KrH7TDPh9pSk8k4ZzomsJmqYSQxXFXbNoqnkEC",
  "key12": "37oVrsdS9JgmJSPH7cJqgGnaKYgtr74RpstvGvfjBM1Rw5mMx92za2bW3wcYxsMWjaQsU6tpmq7QtdWLqEDNDDWQ",
  "key13": "VZNbu5vtTTWCmHkD1zvCRX7f4MZN9suTtcXqeocz322bjsFwRMHY999f6j1VjW3ozNnpJT8XkuefLDASTVsiiYP",
  "key14": "ZanftyygDHv7hezYAEHLPQGAi5zX4n6FNs4FeJqz3rWsvDWP4LbmLVfyDekjrQY8F7RhZZBGR6GwsE3WEghPnBS",
  "key15": "5Dchz85UPp5WYv8Pb6xVmagZoYDWo8SFPSRCGz4YJfUwhPDc7xENy8oxqGFFHVFTjaMErZCjQ4UfmWdjnViAfRnn",
  "key16": "34e45i7bjHbRTyhZZ2pbeaM33nF3PFtTyGJXdzX2QAWSpu4udre79fk1hbMPf4VENL9jqbSyuEGMLtLP9JH9t3xi",
  "key17": "629dUxJxExmvSZezpfR5bXyowvxeEcRyQJVerYuoVusCxva4JmBvRmvMi7Zc1tL7s9WRLU2VgopnGQwNGqzg7TpR",
  "key18": "hxr6uoRNyGkkA5hp5JojpxX7ViQbzhYf4x8tCS7EeXezE717XmQ5PCqZjGxCrtJruGzoVKRNAVb5qHT5JRrLPPM",
  "key19": "6rSCR6qNjY9ZxJyXeiKLEtLgUZ9S6bHbtj3xVcvGXpzkHCEpLow2hjyXdTNcziiKamYiMDzFe11Zwczj2YmL5bv",
  "key20": "5KPZ1TMpepMJ7S2czqW76LLzNVprGQM9cbLku4skdBn1FX3NjNzWGL2Nok6EEkmkW7DUmyxC4enCMhsgkdfxUrgb",
  "key21": "97G6et4zfnVq9qNXeW1C2neN3rqb6nbes9uPam6ah9sxooGmexv4vmeLhYmz1s8U5TagXp7sh5q7crGi6H5YyqV",
  "key22": "5UH6d1EnBUu7aJxmMB6RPeLKrF48e9pXtFyfxynSGXNLqvxByCoE7Lhv711u9xaHARDHkk8o9TeLiXdoqrrQ71BP",
  "key23": "36Hw1Bj6792i9zD3R4R2G4ig2gtpsfUddwQHajV13n2ub8kkRA9QqkJAqh3N368mmL6MZPHZ9cA6o18UKPhf1hvw",
  "key24": "4CTFqep47mGUjQqq35JdBuu2bZcqBKV33w3MJkXVugaateqNDD9gFcH4CJJn37J2YZ5H92ky92URmiRLQwWQwYCG",
  "key25": "4rXNCNcycWoS7o3i7D2HereAtVk8A6YhGrNujJQ4ZYfWUiFyAmNv4dcL42yyvEgaDQ7ctqv4XhKP8GoS2sXSHwNK",
  "key26": "34mU1V6AAa2Kckr8y9NxKWJbeNkcg9wchSZtLgEEJesixLXqnJb1ZTk4BiHZnU7GCp7DaP81p26e56veatSUF2JD",
  "key27": "g8SFejE548278WG6gE5ih4BZrnnf72JGNbmscZSiJvAiWfpzKYRi3Wy4gFrcsNVe5aneU175YuW5hzYshsge2ot",
  "key28": "3QehhMeoAC2qmAFycaTdTzpkYaSoWE5cfZmqgoZj1NMtdB3uYzZn6tfFbDfpGQRrHi8GFemJj1Lt9pNCMohviMwF",
  "key29": "2HkrVmc9vfLuDFPfqESSzVvC6HwxQhXgfk7pnE2dvVoP7eAQzgigaqPETvaWBanAD8Bzg1FbzoBftWXDDgVDffsp",
  "key30": "2F4m1sUMefb2kPMcbBUvW7DHU7fBeqVaciYn7Rk9jByirkF8Bs33WW511Tw8yV6txBx6ukVSYvnRddmr4VYPrQ7C",
  "key31": "3XJVRzQmjebZK9Lp7JqBWxo7eqgq6bFHcw3Ac9bfF4B3DknXBVmKsjPn9ncmwmf1wtZv1DJamaa4QMGyKvWnuc7x",
  "key32": "3Nf4udgjwBr3u1XC5KNgMJzk9nrvueETQF6xuP3VmVGdnXkLqD92JYppukqKByBXHzwLPreJp4wWB7UDDjvN4ekR",
  "key33": "63B1GZeZS9FGoPKiAhzxKwgTGJGLQf8p3Wt3MfKsPSvAoxbZj1H7eXq8H9mhzHDXTtptFT3o1457vDK3rP8XewvE",
  "key34": "5eBTh7Qo73mPPpAi3jstkz9bv9zbrkeJ8ShSrmn8eJNLp3B67dPFVGMnLFsjVEDyGBceueEk8mrwGYbwhxqn9Z82",
  "key35": "52y1VcKCmLxMuBHj3J2nv2ecZnZRFSc4Kfcoc3DkmSTvvwMdweWYDwvcRMYnGyhES4ZLCJxzNfTwSvfjvstXMLT",
  "key36": "4YD3HEyDW6NCS8rLroyMWCgyhFrUPxfXe9rhkipAEbZ9J5KQwpPPoXT97Mei8nacenGHRDs3RXYVuUzDdpGs85ok",
  "key37": "A3bJDg1PJfM6Zyb26hPXoCkgNCFxTcE616KEucbg58JxTZB173kqxadrKPbQBXRYKCArzK77bpt7xoAYxzfdetb",
  "key38": "2bHkNVSiH4MyKtywfx7D5Jo8VkwzDaiPJrzFoexMijbEkekaFye3FtBtPifH5TzoAsrDFMZzyRY1Xb71CymrJQnJ",
  "key39": "4HfGigAKUDFCPTDzQA9fokpkWyTMPPrYBzwhdiGyy5JZHrDeNgnCEY5SkXpxnEMWPcfbDrTPm9RJsVjhLCtuxoqj",
  "key40": "Dtw9qKm1P45sQHL9TJv9koN1oGC92opo7GFti6xWT2HFc43R8JD32Kz7bunMF6vmYMST4t5kobRP8bbB51ShECn",
  "key41": "KvinhK9aMTSiMJb8vjRY2Pdvbovm78QKTcY1hZ37fHsXfR2VT8wUJZMQDbEXmAQaWroVdMXVooW4yENgNCCnkbm",
  "key42": "2FF1MxhkzTq4XvnQ9mWGdqtZVTxpGA2o6WNDWFW7awwexncwcCiKV3CZck59bF9q5idS93iwVsofAVRr5sZ6TWVk",
  "key43": "5ZC4uCE83Urhw7FmhGrYoc3No2XjHmKPRdDhvdNk6KtRiwGerZRwz5XWRa42trEZmx18mx7ppEp41cuHfAdV4X18",
  "key44": "21i7gyEuSf3BytGDPWoUWddEzqK9UJqVWGj7vLq9VBqcDmzng6hWi7up6ZEX8PkceM22YezGkB9RohYJgSfVcVVB",
  "key45": "G5xLxMC5VUZvd5WRxQeYyiAzZqh3QkGM6LXHmoPo1QKVbqxf87ZZyHc84TheaED52SyPHDvjG9LrgqDhM2o6kGQ",
  "key46": "4udzAspkS7VNVvXNsDpcwebajo3AK1xhNo6ZAuYEpTus1dou7dMBooNuazKRaDej2vivcpuLWZEBsdGy2M4UKdPa",
  "key47": "pae1eYKnTJL5e85VRN5w1MNi2jzQZcFaMuVrDYZPaLwzYjSkm84ZhrJa8MCe4pgGqi3kU4S5fTVkKgq4uBg7bna",
  "key48": "3fjypT9dJruAHTC56Jft8WzZLHhyRQYbXxMxxVzYL52wJ7E4GXtixDixSHXeTjv7T2c5mMaYMV9gtpfiZbwCsTgL"
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
