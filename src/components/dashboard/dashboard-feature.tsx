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
    "RmLgZNNmunT8kjKTcVnJneaU4Tg1jBq9jvyX6XbTbyeYuoFG93TdEPQLdJcg7tNJrpqbnVLZK4MwV8xTswmYVVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPr7aLqUP4ysV2Jn5HRhE83Qgy6WpS1km2YXVofu1miThhmQ5s7RSXrC9xZhcx3p3gGbURo49nP61HCjh8vF7AF",
  "key1": "mwB83dEqHXz7VUkiAbwXgsv3zkQB7jQCDD2k6aMCVTGEFcZ4b8ZkMw4feo67KCsNwowgVHTM64oqJQRkhQeNrvo",
  "key2": "2eDN1VMDBgKiLqxUmUnyPcQAerknewiGTY4oR4KBma1PofGKmWyQemBHzRPmQLayNVdnQjSSd4RrinE8a9BzDuRQ",
  "key3": "32dckYLLgYmj9AFfYzYjYZ5wKR7NeT1SpVGoutnMeb4M2emBxzedgLkBDNjqRYcfr7JakmADj4CDbfqGbYiXcg6V",
  "key4": "3uGw2XYSvkiDdcUKTub93c1uFfRfXnqjmDKgaFe3Z8vnwFvWhsSKFp1f9h8mvbYNXzYBv1HmvKSe7CEPNZmA97kw",
  "key5": "52irPtwBeMd1B1dd3TewsCQEYeV2yQ15ji8NE8DcrPXUjCa1uaabTLEt3m7P26j99ZaJDhJBGZCVs22oF27m6UYN",
  "key6": "9cHnnw3FRiKtWjSSXezE4nnqYzckwDNuA9dY3q3c5Yuzkgic6UQSB8wJxuoe6zL8YXczdaShfqH1yt4E8N5Dr7H",
  "key7": "33bKWdJTCDfGiE3rzrx3JQeWbHk4R26pzPUSqwbEM4bLiUVZkDFRLVAtH1t2GEtHN5acyqaBdjVaEfmzqQcdkdw",
  "key8": "4fFd9LKdKj3QeiyHJy9Gfh3J7QZFP5sx3M5JCpRfVNd5SpL25RFLwWvpX1duD6pAMuVKbcok1LnD7GanfkDubdDQ",
  "key9": "3daDtg75zzGgBLrcF1Vecv1wAeXEQMxwiXo5hJxpDHJ2cNy5GP1V9QaBsqcCBgpyNi6pae17fikvs9aaPmR7Zt8h",
  "key10": "5DXwJSiU3HyyFozZce6vtJAVBzqgGi6A922Az38tJPBBoqSPwJ2Qv1hbZk85cJua8bkpt722So772JABDeWoWsmr",
  "key11": "3QfQ7eNdzBUVUnzaAERf6juK9X5eDjrNqiBNUwRgPhtuLVv1NjP26AFfnDqoDBsx8BBFDs3uhWbXtYD5ta3hhU6E",
  "key12": "5zQC27pbtq2rc68jFvGAWCCmz6MEGyEKJhCoVMY4of7hTpPcN3snHCPJJd7EQXsfPJNwj1e6qNyuuJ3tJqhhrg2M",
  "key13": "3698jVtwv23Cd4etWKigWWM4QrTuwLqsVG1A6tkVGFF81JVumhQT6vviS7SyFzPE1AxsPZej8PwXP2vuaycy7cbP",
  "key14": "5vohusPmLcMvDUYEEYByU9mjMgZxVLLQMyVS6XW183XrrL1TBMrn9XwX3jiTMG3KuR2uVYpCTvfp1qca7LnqWZ64",
  "key15": "34iVvWHcQvSv86QLuy3oep4iXS6pwsc3CasAedez6teWRn4ah89frrEtR8KoY6XV74pm7amZkCA6ELjece8sfhRM",
  "key16": "4QBXs1LYT6bqy8xSFDBuGNC6nQEXoQAnyFz35qiRqDajcN337SmwMidk6wKg85es8Cu7EwQcKiVTNWX9ZwHSpa8n",
  "key17": "2pDwQR4bujyXvXmFTk9PHa9BwGocy5fXBAMSZArjNKgTKkwNbs8BiqebGi8PAWBejKgohRnqoqZpbkfz3nDmgq69",
  "key18": "WmFh7jMSkNWAaGFbbUsiQJqkXBBjPnWDzF6isCWinFHxC7RWFDvc6666q7nPNfc48Vzf9CQKu3Vs19Zk4nNT3ny",
  "key19": "5UanVGgXD6jkdRQLVKp7WQMaLUKy71DHELyBiXYXXg5u7kmYGtL7VXxjJhcjEN3wL1UJzQGRWK9UcPNaP3xCr6Wc",
  "key20": "4o17QmsnprEdnSGB6i2ugeoCju4Qg5Zknzr9ESaNq8vk3DVCrcnUqnA5sRd11ASfaKqTjGng6qjYaWFAwvZMPKST",
  "key21": "nJn93fuMTpWyCKpKatQ4m9NmnjcJv248evmd9AXWCVCvxEMzrUpUSk4ZV6hSZqgJTz9Jz5cBvPK5cv8g2UPwHpf",
  "key22": "667xQEPTwbMZaCVwkuRBoZcRhnBcnbbR1M13ZG2HQjpWXNMrhNg8paGoVMvNKgWKePd4wRFRiHeyQYhzwcaBxxMx",
  "key23": "5ZWgQ6DXJNTKFywBchi42gTfrRP3GqVrfZJdoLJDcNzcpBZWm6SC1TrVkJ77e3ZRNSN319hvqDaniNFTooP8QT5F",
  "key24": "2zMhJiw3rNASBSkmQwd1rG2RuokoEamaydgHZ1TvESoi43ZZVEruQ6rSr1RtWrzXQCLUZoM4ui2MPL3XbHW9Zhvn",
  "key25": "5AqhjShkpmxEpyg3o5cLa4Csfc5dZMR3tYSXJbb6NDr74SexmomxC2vhVCK4i5hsPEWgJYuubw3SFaSYek9H88br",
  "key26": "4RyHgmskCdt3TGk7totFs1SWNrumWh5VD51XsEv1fxa5yB14FnKiWNmBd9WxNQfBVpRfoAD8Qy2xbop6daknjrG8",
  "key27": "5cAsKeCn9WHJCJg6Jrr3Gb6ZxuFVJp4fHKMAxMiUe2oscmhB7X7Ydk8HDK26pTsLJPCPbh1kXsxV91wDAKmBBoJ6",
  "key28": "2iHfA8XsHtF9r1zADZrFxoUvwH3evrj7DmKhnP66MdnCXtcVFQhFRGJupszCbqjQRpNNMJ6auVpq5u6cc6SsuMCo",
  "key29": "2yHkkpKr3bPDiq1wHcqDxUB98qdaNqsKGvuWcaHB6fNxXvWLTTUx2zmhAaKQZkJDdUPvS24boRHmeV4AfnQJiFiT",
  "key30": "5vHPwg15aD5ZmRkjoEoVP5a9CVe1n9C9dsMZ5HELcQeMSKUGUVJr81aDvBtxbCtuTv183YVZ83Nug8aiXE8ABYzb",
  "key31": "Ymo19BkhqGnAE8rDLXhheacG1kCS7MDYRkPKbazn7PGqxDRA1xGCzKMrDSgSiUadXCrboU4HuUf6dmABDFfpPvy",
  "key32": "4VUk9R2xsTE5Zbt3DrLTEzZVTSBBc5XDjEoSnygFzBZgw7DpbcfywWN2QhxsGhpKkJoDZ6T8xuqFjD7PAbVCYsdX",
  "key33": "3hyqx1L2uvzQDZoqvmeVsdJ6U6tK1Fs34wC9PyP41mUCjXvPCGUa3VmCiymGCzt4CmANU53XSeLp3jNztUZhAc5r",
  "key34": "26J5GZfZ8w2eCHjLQZjxwLirAXCoDdk789mJ5CvmMMsFjCcP9gYiYXNBmCxPT69iUtyf2WJkwJfv8aE2shz3ybAA",
  "key35": "66fRzNv25EF6TptEoNewYdaDi4Me6hRT5iR5CYPLXxQu4BvbGP8eQhG5RCW8MY2GEq5ikc86zhdM3Jv9oeiquib8",
  "key36": "5etKkUD22DDgjbV7KKjrvywcAcgzp73iijc3Jqa9eWQfEb62hzfWficR48wpiFfeUvuwy29bo1pqsQRKX5noYarv",
  "key37": "v6LKi7xXgV6LaLLpSJZ2e1fB9fpR67Ro3FnXmmv92VVDMvAbRZoch38XhDhe3cMqW4jCqxo4N2nM51awdN8yBK7",
  "key38": "65SycdkqJ6mffR5ZSxUTpJXXy1tYkXCWds5gQakV1X6L4EEGsKt1QQwXvPDiuFaHipH2HdtJ7e5x3aucVKy9s6yZ",
  "key39": "3q7sJiD5wRoLLGZFZYJtsGq32xyHo15B53XZVpsd21U4mL3Xd9QCp14WatzMgtVSXbVpKScQqxcMNVWQhWLeo5Sm",
  "key40": "4B4gbKvFkjcF78ReP7z65HiPoB8GuPyeTueeDToVRZyjnAtpddqdH7MJH6Cag4QweaMyUdGgKiihrthKhfNfxm94",
  "key41": "ErR86e3VBvPSU7TS7BGGgBW4Qyphz5L4n8eXZhkN6fLP48F4Q8FNsHV7jXRNTcPPSwK3hSkqXpGUD7dRKgyKsDb",
  "key42": "579EEmG8S8qnWnvbwCQp5Fs27y2z2Jh2amZzhLjhNDY98uJocjknX95z8H8XytpfvczeUPkpVbpNvCiAHKiFXNk7",
  "key43": "38uCi6FEmLAGEcKtVLw1HiKhnMotJzqrojeXu5tEUU39oqeoPBnmJHCcgZYq5NBpRmw8v4dxkVWzxevLGDUmB3cY",
  "key44": "3oZwaicXWkqeXp4iZFXkBnZHX3eU7z8FB8azzNePhJUzuhyKwYaDtYrioEmfBhe4EnqByVhs7sUzxaKXJvmpTBxe",
  "key45": "YFrvLEkjpQUTJhBzeWxwrbTXEftCkYtBcrHM3P6bCvQEvoq6F8JpkQAJLMTe2piS8ReTDkdwSy6cwBj2oVFWsyL",
  "key46": "xvdXvMj3Gfsngyoh3YBo5xhKb1MrWkXp4X4NXFvEaMC4thAx5J8njCFRxYBFSWquZwfVkqMwdG6j8JH5GJi9BrN",
  "key47": "5eVfTiKXo1mRegWRGHVxvAUjHDe9k527TpxqX4ake9KKAtVVRt36Ce2BEBYe9BeGoSf8RBwkpXbQjV5SfFQUpzeZ"
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
