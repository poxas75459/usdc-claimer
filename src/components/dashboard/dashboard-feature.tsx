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
    "3t6P1iXqBPZkNBKzFFnXs8wnWb6QtiJNChRYoCTJMgSJZp44J9CcYr35WJY8YXZmaLsZ7n9mu8u8zP7y6ok4vBWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eW27qqaxz2Yc4tQvtL2LVxsjaPVyu2h6DyoVL3EjXD6r3vvdZUgsZD6CGUv2asBoaKWoYiB4JoCtm584yrcZiZc",
  "key1": "63PaN2JJMDivBYVG1Ror5HBfJnkgVELDTh3TSezeZze2kTDbu7kFbUhK8TeJTxhXsHSm5J54LDBkyJkQwAKSfY1i",
  "key2": "39eGzcrYQir9sik7vM5YEcMeLXUx7CnGiepinPYhcVCBsLtizjaBdvSC8Gkmbu2j32CCXytsejYvNU3CjqXZ8Z6L",
  "key3": "5LvcPKnFMUPTmekpJ2b5HH1SQrbvT2V2gYPnstAwdUDe4XuAvSVnCuShq1t7YZi1sNwZ5z1Z53ru2UQvn7qzXi6D",
  "key4": "634Q465UGBdKXKhQQxbQv78BRzFtD7PeA89wZBs226vRywrVfMAc6mzG8KaeyrZVey84nmra6vpH7E2X5u1rUW4L",
  "key5": "2YhKjEEhn3grrCuyjGMXuGEkscumbbS8rjskS1iXduuD4FtdWZhP7Tk6Et13sDECMCTZAr57h68Ah2iPdXbxZmbA",
  "key6": "3xPPi9Km9ybcJ2zD11g4g8Mm3J6nAMVuep8ru1QtVJNnHMBzTYamaXJyVvGvbAai1JscEsa8TZeYKuat3Fw4ENXj",
  "key7": "4zWNPKdVqmaohGmvt9KzFpNGU27SCRCcq47PnBka6z6JbnvJY6c5G72w47mYx8AntM4ziEBZPHRKhj7Fb4KDvBBU",
  "key8": "2snP7iD2ZcLpkDZVXTkS9NTJchVt96SJJ6Jd1s8vqQ48S5y9sWPWGqBodWey4GKH2U99R85tR3s1cF6C44nf4zV2",
  "key9": "2o1mu1ywvkSq1FYWYd5N3ZY3zHvN6Adp5mGMR3nSCZLWeo5Bmmck9ucDC74rFnMDXduT5T31B5xAJ6YUEWw99wza",
  "key10": "4EuFdJgo5bpkKL8USjXuCQfy8Ro4ymUXLNzqt3cshvs2cNUW9iDhsHHkbHzsM7Z4ukhpL66rZZsAh1ZHQ2WapiBU",
  "key11": "BQdToPKWMWM6susYeFNaiXtiXX2PuCvSmiVNxUFJGXDvgRhfLTzarBMEXNTYsG1EaVrqCp3Ptt8mHnPWdxN6saW",
  "key12": "4QierUVAo3TwH8opqoAWLae1VoDYqTjSbFUjEKQ2rtL7C35TYeR78ooBkpZ1iMZFr33rQKk2FfFMz4aoViocTmhJ",
  "key13": "2LB1faJ1f7rke18Lam4iMXxwQzKEyceCSxE17zR1mftGqbChWRwQYhGpPHztPPRnSdPwvDNDSMZpx2Uv8Zf8GY16",
  "key14": "LbVVHw61NPh8fLjcupHpZUFkvjzVEdSUD69F17u3niXgzbUvS3Wbn1afKbLsbGKvE41aa4peXV5UupYZo1zPU94",
  "key15": "3Rfm8JbdjBykhkEHbCyASeUWXhtYQ6Zmwd29fWcGfY1Simt687tn62kpLafFV9uQa4fAXqKd5oMxzmX2K2K9cp2o",
  "key16": "2dAYgCtQx8QXVxqxDf7BBXU1eazon6o7cirZmqLQ9YJ3RU9atcycUnzeezCbN2XJcAVzRUzErxsxoaXotb7cXMzx",
  "key17": "482qYxs8eVA1PCEo7Cd9VoEApZ8BQSgSPUX77CQaczYqFuFMYo5KynGrYA2bVgYVqfRd1NuyRueamKNhcFUmkZpk",
  "key18": "2kUtsGTzTPiEG1pBLtX7ztR7c93QPCbp1VvRMNwhJ5mrkeaY8KneGgAjbFjnzxUKc4HtsG18ZbYneLdKKBHoGuUA",
  "key19": "3yeibqTJgwQSw3NGzQ1YNFHMA9AhVuPHtWK5q7HBqaFjyQkEyKw2GpWo1TaPJ94hQQ3k5wAVDcFW3w1s5JH2io4h",
  "key20": "5HoVsUf6MRNAxYYkyyTZVp1FmfUiLKyxFhSaAxYRcEYie29r45maqDUGKE74HLc5Fi6NcrwWfFV8etsZVn9XRYnd",
  "key21": "44ARBwTdm5tksAzhHKyLXWG7Bsxsc7rALqWqsA6FCM3SDtZNFo8tC2XVj1Mg5Ad2VeznoSjVcBP18PtY4w1xPtNX",
  "key22": "dpcYuwc7cXR9Cz5AZLfsUThCWmzjKPgPw69bcZKs3FpRASCXL4Zd7racg4gXSTv7tA15n6ywrBVEf1JDi7pGYJU",
  "key23": "8jWaCFCsc2U7xmwYPm8Ahzg3GYSoHBPK3RJyTpmFzHXWUqTE9Zgc59G8DVVR4zEkX3djFzvzysCKaSWUTMabBjX",
  "key24": "2x7yK3m1ByjfHxXZ21TYv6cdDxW7kai8RZoJT8VwurZsvnNJGW2WRtQTW4tjdurLQ28phn2qvgntc2Ktt3Shn8pT",
  "key25": "5xSRFQTyWTKZzJWrGf4vmzcDsoz5RCMzihbt3FcP9WbinGcwB7nuxTd4bTwVrk487WjExuCo9kn9vAHRPfmw4SLb",
  "key26": "3vj7FqxYxAiYrLPvFNRBgWsYj8WoJXEkzA1d3jmwpdCqK3jkU7ZrQdaa5nYEooTsHCbTGA683ScRLxqcVmA2CVV2",
  "key27": "CzZkDGkwuM28vBb27wzoWBJE1o895L6TGvpTVw4RCFKZUVuu5VWPuwAN3npSkuGB3H4YRdTm7jtNBEqQxuj6QiL",
  "key28": "5L78uQWN3NyjsGA5KMHAPYYmX2HU87v5D3Tv4rdNLaB65iuLXkCc61Y13VezaTky3vhm1HFT8Yy6rir4VBxJTi2w",
  "key29": "35PEnPzhGmnSfpvG2BA7zYQeAAabNZ3LDubd4AXpiScejZAg9xw7jAAtsAa3VpAjFrsKn2NhUpN5mHmRnoYEbmKo",
  "key30": "24p2sZ34EQrNkxcjpw81uaCjkcvCt9YKqvWtswSCdrHs1FFVT8BZ5UhMXsgSZB21N9kYPR6kPFv5nUw1BZkjdehk",
  "key31": "4HVP2P5iVvLAoXMZCV7uqJvUB2dU74tBdoosJDAvn13M6DgqzX7K4tPD284BRTnuAXBRtAyu4QxQpnoM71zTqpey",
  "key32": "3dsTjHaH8d5UyXQGVHSrYp8Rbabvur4F7KM1PyJ8xnKDfwW3dhCQ8JZnoyJoRm2tcRw5WsfEvqQ7ea6rw8ZSKXNr",
  "key33": "Z2byWPkDJuMNaLuHLJhDMdaaVCg922LRc1YtdaUBJFJrbo577cCzByM4r9nCHi3GTHpzE5uUKd38fGUZ6hfNt6d",
  "key34": "26wHKXSdtoa5zc1VqXKdPvAXk97UxuSLnsz5mKsgRHhonsMhECb8cdLLeiaeqHvWRMEUXWyYvVcKz7AkXM1BwL8R",
  "key35": "4uiR3yFsvQwdUwacQuRnuFm6669Ner76vZr4fUFvwVnzvmHvx4njXiky9U69ib8YLUEsVBxtUJgUztB87K3WcHpZ",
  "key36": "3G8or4G9abxBaxs2QPLTdL1KjTiQJFiuzzoTNDk3XxEweMHKkADdLznHW1eUeZUxyY6r1ankywjQxScesTjhBxo4",
  "key37": "3zPJG3cpKYF49de3PYyQ8bUPRWafNpc6qBRuDUDNRbYU8wSasvtHTWXvjcaZpkzDpCevHLQYqMw9SYVeT7pmuiwa",
  "key38": "4pnBFWYeEC1nKH9Si6Ge6KZroPuXJYrbNNEuv134duMovMdbkydhxp2CQBcDJAi5odqQrrzXm5LWi6Vv6LDZgJWE",
  "key39": "dWJ5FSEhTpsvay21XhzcGBQHDqBm392dbFrQAkBaDBBq5r7a1k3mZ3pjzvCxJeAaWx4vmtc6eGQ6woXxESuW7Hw",
  "key40": "4e3ySHmZHvrNLQNDk6QLYf6juHbqstDv6b3iXdr8RG1vZ2isY4G8JAk8nxiV5VwvncLeoPr2SGdyxfuFiz4wcLzo",
  "key41": "2oEqECmfSFoSoUMduBGKe7jBcAdrubzUN48HUpGAPTJG81p9aXh9fHS5M5gaNpt5xfZkaos9wJJRR4VLKt1Gdoq1",
  "key42": "4Zj3sgWCAohstQJ1UfrSeB2JRi3AXQ4HmWpa3tuFMwsfTvdJLMuoFwYsrqz673esXk3erEMCWtjaCWuDp75Q1Vwb",
  "key43": "3sat1K2urTYkeGLMSMWLJeyE5KaWPXvdsyWfnP9kyRHFgm6VrqeuARagpd8NdzwDd2RsKruk5r1s9R8gwtaV8HKp",
  "key44": "5hYGy9wALq6fB22SXWdJXRB3oLY1tEzCweAUuDb1HbTKq1gHbnBxiUJTmLRXUFUQYDVmw1dhGcwWEUxuhGfCm4ye",
  "key45": "3uz1599bVePGw13Xa1NgSudjXUzThF2KdbedEu8xgyDCgE6BbUUxSCeH6a4rkygMP8TCTDE7yCwjvUJ8SKvLJ9Hn",
  "key46": "21iqq2bs9CJDEAQmne1LctmenFRnv9LqNuRXgttytgQyYnm79witdoM2mjvS37NXyQ1KLpFSPA1WrzMxc8wyWVBK"
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
