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
    "2K1ZPH8KbmDVTGh5DaNBRZiArmgoaUue3c5x7ZiMSe4rUn3njhWZJJFmuST66UuYFXM1NVs7KGzokTbQwAyWz1Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9QUSMf3z3urkj5p9dqbeEk8biPWqMqoCRr3guaYCKLyAMMT2mJBUtR83dcM9cxoXoW5Z92NzU4qSU9XkzbHWZj",
  "key1": "5jnQjeZF1qHhUtXKfSHZYGkCbDv8fpvpYKyRCjMXdLoXLrCzKbHx2RCm9QxqaPFGiWatBBtW84c72ERbFE95Mt3x",
  "key2": "3eKUaaCjUXQeJwwhT3VicQYDyoSnHNA37AFAX6yaekMr3RSS7SgHhtzzYcuoUjT1h2hqssqaBxdwHLvMKZMiHqts",
  "key3": "2nLHcMknkZkvgpR2MNtYMgNiZEC3yKz5kwHAPke4j5CADMDVekzTzy5T2dWLaV88fdfyJhCKwNrQvtmovmjUje5F",
  "key4": "Q9ryeQuAErDp4uQxTpQxeYLGudaQCwwyVkYXwnFzkQbgLB6dm1jT7GR3TepQeTUJMmLDiYscb5oiYrNnUsyJCz9",
  "key5": "27hoSACYxPTUwT5nzQfVqVGtCTvPbgLGA9TeCVhg3TMwMzN6SimhsR7amRaFuxE1YRU33tgrQaD5o6hRuPjoXTXj",
  "key6": "2sTE5h5r7HX1CaGsNwnLri1rPDwwkNnNEycAhpKagyRhBbHaHKNP4kHenPXJw2f5haG1toHtpmoJA73UjzBG5t2h",
  "key7": "4aK1Gs3Aah872tF9EHUuFjKDY2DPc1KRDL6BhhD7ufodXPDfXf32ruc638CH8QryGJ3Gkvhv3krUpDynDhArpx4J",
  "key8": "5NnaNxwhyZGrBYFfuFeubiuD1nsJjpUDehxdiYj4jpN8GGPuSGvPyVdAqqpLYXnKQdMzydfv7M4JgAdNHHKYS8uZ",
  "key9": "4G1u3RqdksorwMrNTikUMoXVvzHL5Cq2sX5bUaMBfgCAepHKf8KazvA5tYhaCd12zyTPrgwknWbnW8VqKg8xJc4t",
  "key10": "5BZM8eCXo7nfAaxeVQpoTSBimA8vtgSr9hGyKW1vufdNjyLf9CpB6Nm4tczT5U8VCtcvZ5GvuMmXPCZ5zWrPUBwf",
  "key11": "5Yd5kW9Mao5FNPNFRtCSPLF3GDsFeeGa2WjSyF6hr3AC21Pqd68CwRhZLx9vMJVH5eX8USjPTAxUPgH5Rvi3khoF",
  "key12": "2VpEaC3mw5kQspvVyza6bfPfEeLrLWiWaHqKqRHGkruRJZLtNpEi4F61vdJShXL8vfALtqLWGEDVKMPpo8kN8Feq",
  "key13": "4arVUVUhJqW6CaziZwZcyDSnyzh8fv9ez12r55R8LXN4eNBj37LmGk2RdzsXLMirujkespYuP9D7R1zeLq2XC725",
  "key14": "29Jtc9iAn8xcgH9YvVbziaLuZqN1oUsUuXGko57UZ2ufTp7jAEPzVUErPCmShPPjJfP9FaW9PPBrK2Rs5J5QxMpn",
  "key15": "5rifYcBUzZo2pMvvR1grPcAzHgKHrJMyV22RXmtMwTHME6pRP6VVqL93XvMZSPYTvv8uPHwimraWG3pvhWxi4U6T",
  "key16": "4RVVU5JPxPsFYzhAsNdN74EL1AC8oPmAiCXr76T3h3RudPyUWKHd4mtrVrjpamD786bafdRgemY6ijz3kyxQCmN5",
  "key17": "4vJ76cKkrenpjAio6X27auYbGStVqDDMNPkRdC2xoF1yfuwBdWi1Ua4GYp5wmxGFdT49muYsesVoh1UmRxXRVc8k",
  "key18": "2TDrvmBxKmD8Fv4Q1hgE28gsV5Fe6RHvXEpEQ7qNe3f6tDPsiD11PfR7FzmkojhqnJwaGQa35qGH9sRogjfaKiwz",
  "key19": "4fD1csv3k7Pqw4Ep7ddtk1uHpFo2mEj4P1BhGpsVzcrg5AHunTV1puUUredfZJAcGWh2EYa2KHXjWUizMauetq84",
  "key20": "KeDZSJZEuPjrRUeQHQ8hEnZYX4QuKqEB1mdPyko61e9Jc9PSzB7Na4arnkRn59chDdCVNX1GexwYjSxGYSDBq46",
  "key21": "3JhRMbraEjyg7JZgpYnjh1NJfZ5EQ4DGQLAdpAMZgLeuEGuPu9R2unBx7XUjVFyDhA4cmeUzi3HiV5n5FsdxqAZ7",
  "key22": "2XZVw71KjELYPdHjR4XioRgWkAcj4J78nzcdKA81Hm3xzv9tLZEfBhuFpVLkPKZQLqe3u53V2FRD9z4RSgoKeR3e",
  "key23": "4TU33ZRVuMmz1JRXJuHLexTKuqiP3snBZWKJwGHky6YM4vHUcpM6HaTdpZNDyRCpedp3UthAhDC4AAkeJdoQFyKk",
  "key24": "5nk8qnk5v5M6fRsYV1N1Lm3SLYoBwjaG1udvEx4FZvP3pBj1AXiWzTC5HCuZcxJfUDCKcXpecQoV7y7M2C58VMYx",
  "key25": "2GcMEutXNw8hMaTqaoUDqs8kEoEM7aFiRTBKrj9oczS2bjrCqE55VWdYVigiLjVsRdNvDXttVexk5ZrNLSgf2M2M",
  "key26": "3mUWxzkTjjwn4VmyNN35PBo8jWW9Y762Sp2DXRH7zruknSqoK5iv7XtCjC8YmPRXXQKKWCSyh3LrAQZY7SvmdWzY",
  "key27": "47M3u6pm8vB2wZyCTc8ouVtwinSofji7Y6C6ieSpfU4jSWUxxHVTUaoRZ9oBwMxWT8ku9JMBekZmjGgpL76EUD8Q",
  "key28": "4B1zJCyLpR3mKSRQ19RvqGqJnB3eV91uXe12e6cQfgDFAB9Uz3ntKsPmb7eemVe1HtttwKpMou8LXZDBJBRgpoc3",
  "key29": "25sVtEk69GHHC7rhV6wRZXCf5zACijsHUc3UpoWuidfGzftQmzw9tqCQdFWGV7GVF3tevDTWdRHYrvyA9RWLp4ra",
  "key30": "r7qCH3ztqgQTuhAxUaUJSQBnaSuBSfdXxp5kZmHsem7rPMXZGG2CJ2HqpEUvd82wMe3o1RcrwR916pdM3vuy2XK",
  "key31": "5Yb1NAKbrfj1jPVsSX5hbwVrGmfKCbTjg8gw3UDySoRce5CZf1oZZH4EMsYTyu8XUQq8eumrMhFCEtzMvqJLpcCf",
  "key32": "2Q9bXCbq74S5W8qHLYEkMRT8KJkcW5ygqqpqb3yaMeK9DVAwhjL5Rcm7g3zP1AUQdM74vwwi95xjXPJiyjNeV1tJ",
  "key33": "3DAGnJ8byr318gSfkFL2xMAQSrZqNaLCRCUUyKfbNbhGHxdteLRM3n5dQ8ssYgvwoeTeGxGqfenbBoUBavurbMDu",
  "key34": "3TddgXTYjm3rbF5iVFLVHpTVJ6PHpozuKFEfzjusaffqK8WvwXcbGettEASSJTtGRoC8egTEM4o1y37dxRjHDkBf",
  "key35": "2B8g8UsLkyh73vX6y3x61ge1rteNXsEoYyHPacWvdsdcJNNdN9dzoCTmdZo9RZTDH6BgGEvnE7fEtP3XDsWKXAYC",
  "key36": "66Uqhk99Uu6UJCYecUfjA8erwCfPkDNoY3ndTPmx86gs4XQwVKQAVSyeap2MeW9nhGLivsoyuT1W3oMcqwhgM18g",
  "key37": "3zjZFKZtdHQrApeRT8S7ZyS8RTN3JDWG2KpuJ3cwHTwyxkCDuQT6QqQkxyFsg3bKg3ZRfMP9nS7th6nZxpf4CDDX",
  "key38": "4Kf3FwqK3xCbWAAxPCgcrSCEwt39M7RKtTMKusDDoaUuy51Z5jMVCcCcodJy11hYerMMieRJAsuM6QCysiEbi587",
  "key39": "5PTYfCj1JSbVhfdxhf35CCzA4KAP493TYL4xMkVZR7Mc9Nn3a79BSG7H9USVWTukXvH6kjt4n5EwmSwtdgiZZzMC",
  "key40": "3N8bzMcHC7znEazgGrbinG5HFCY4bem1puzhQCZhse1hKsPpujbmmLN8GidCoeFQnnF6FXYCvKsYhtTSLoZ7y64f",
  "key41": "8ufi66DxJfqjcR7pM8NbD9gzEgSCB1TYG7vjVBQBrUfw4QsKPav5CS1XdRRjFvWa6rA76DxZy8dfVPzCtAWoxL8",
  "key42": "3j1feNvNYPjgXBphQs6hLuQVM39DPL8eFD775sMPEJziR9593bkPrfYhFVMU3THSPLMx9RKBgTiki38Bh9vrcn3b",
  "key43": "54cPLQQmcfq1DkfygDGrv3GSwcY2UzPBvdbY1Vn4bhJ1rDUZXpEhgoJioxFU9DeQPT7DPN5WLvM56cLPJSnbg9tx",
  "key44": "5ntLEhcQumoN5sx2DNHmZRGw8P1ba5fRn27pgEzDhUirofaojagcWg9anksF2bJbJzyN5Wd2zCorVSCEf8KRbdy1",
  "key45": "43K7dG72WUaKLmX81iG7XNyuMd6c7RWje1HsCLACW7rEs7cx39trMmiZvF4ucmtC4v7Hr8eFV3obeEzu7tXjkn9Y",
  "key46": "DVK7Eny8EiKqeLuRfpPhU6arZke4nEibpxKxkxdrPvTzcwiQd2ppkC5BHfJh6UXBdaGFaztYU3i3XNBxnzLgwmW",
  "key47": "2pqvKkgQZfnheZoehjDoFRd8NehgZASgFhKP1jWW5qcmrkJgMwJdZ5qd6VzB6XydwfDKy5CFGEsA7f1X8akVKtmA",
  "key48": "446SGhtK6DcSiHgNh9CgCxLK9ihb8iVSRk3iFRARNNnNR462435EmECdiN5hS2G78hrvekbqy3165dXHpVd8nX9M",
  "key49": "5X2LaeMZri7eVmCbunJTbjGKjcmxdZccBkt7TUijRR3KpMMtn5N39Tf3qwoHRxmijisWJf74g57rXNmV812fNXaC"
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
