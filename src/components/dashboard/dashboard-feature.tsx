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
    "5ayqZRp2aMmL4Ydj3Y1aXrseeijgnRpYDU9Kpoxeyv21UYTyPLmthw9gSSk8tg8VCcJnkXgZPFqNEr7ej2d8qRpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527wpT86vc3FiEHeg8wBLQvxpkZkthTsgd49z3BYkCNBbkqsoEKjYD7VWZietrR8CwFgqVStzC9uhHXkfCA6YjdV",
  "key1": "3qBKJW26JvszRCzjcYv67fDbGchYffWa622eZkFey2dJabGZRzXqMKTL3uwz1HS2mLiwGMQEU6HQ1vz25mY3Mgwe",
  "key2": "47rH57Qhmb8aK9oBnaT5qxSXsaJiFTpwJXsq4jeiWt47VnAt7RwNCxWA3FJ7rHDaGAuzShp3M7svtgiZHgUZDLZw",
  "key3": "2bkbXkRm1qMmWxZa4RKtUXgXdQPutFCwcQsMQsL6LyifRojtCVjY8uxJnLUgva6SUNvFQNhBYXjoZFK6FppDyfwL",
  "key4": "2NPXFvDFebMWWvMJVSG1gDFrL4DkqHfDyH5ohn8AEr2mwAwAqKYrt1GsevBzTpr8raGDEoGbDCoXJfL5qFjhgAXv",
  "key5": "BV4TwRKZh7pK59fTVSLHpQPD3AHcR9EdFBkbje12T7a6SzakBd6pXQW23htV3LPat5aHuwyVdHPzPRpURaWDUXT",
  "key6": "2CVKBUSDPXjUUT3ymzj3mt9yxeGZZKMbkPVKV19LNvFut1q25xpAQz3zrqTNikjcZ6kvpoBYfdJ7Uu9Zrvaom9TY",
  "key7": "4DJksEtTFXA6VET2LqWLEayVvUS3ExY7iouA9EtfwF6ijuJxMPUKH3qkuxSv8xVp8BhYNUuyoePRGvv9CZ5th3rw",
  "key8": "5xoKZYyf1bRLF8Fznw1giSeEsTW6iU2SAsxguB1ipRfZWAPXjTdJ7rvnh7JKQPuBmDypLwTgEEHnhWgeDFo5iEVE",
  "key9": "5mmKpFeGia5ezSPoTApXUri2kQ79c6iCSBzspaEQDFf8jU7xPQye7cAxf2ay8q6JB1mR6JNFdWQ68abKdsawWXqy",
  "key10": "G8VCmZRs3oMz5ZMkNtDjwAr19euDJJ1AAA5r1kjL4qkSZ87kUdPuMUevQbSXiS98LQKaZedVHmd1RCkgAj8E8Wv",
  "key11": "2PhWF2SjXQmBe3kCKtDfFSMLfNR3DAMKENK7BJ9z61AQpTWDyVHF3PaGhmP9pa1jHwVNwrfAboJFi5VSkndXnk3m",
  "key12": "5G3tKcHvDUmyMjpdPwHunx2EdxXHicrJ6SX233TrFpJbvfmZH1kv1ZE5v8jg4usCSt2LZHegn4CvaAHiL5ui3bFE",
  "key13": "2daTKtZcmnHJFbQUUwTsAiCsNAj61dpoR65eQbGdTk7EbnT9YY46w865yjz5cD8pxyq2wCWuQJJsNjtm37e333Ze",
  "key14": "4s3HCp2K7eUgt7NKBvPMHMQMW5iPYWN1WChGFSq5LDgdAaLdJ9u5Re56TJGkfzCtNSy2wvmwpxFmyADftFvbc6jX",
  "key15": "3c5F9LgFUtvn2D9gCiWnjmt9tdWQ82kpGuiF5t7mkFt9vLPu2PVJj7bgH7VsGyK2YDqX411zMm5sbGXN3MV8FhfN",
  "key16": "5VpKDmEZnXQ8SsLSThXSCgYAZyQtjugCR75Q5AHEFbXisPwb6GPQJNEng4kZSTKQCn5m3mehzAJMWVtCnAsj3b18",
  "key17": "4qMHamtguZGp8Lsdjjv8Nwqp59r1vgwCKtbFHq3mDNj8rKHR6wtXMvRWbhHKL5LH5qNEP5iSCKAG9ybUoguSF9b3",
  "key18": "2MxWN8WCYtfCSbC6QKuBRPsArU9QTaE4QK32kAhuJqm91azHLHQueAAViCq6PWdEq44eM3hTMHX4D2hHYBCDMzZ6",
  "key19": "4yVkD5uuPW6u37zguTPG8P1WwuJVFgncboAoEZe4D7S3CcgQJmGryv5hNFcmsvmrikY9Yrd5AB6K9CzUF74NM61J",
  "key20": "5SKTUWr1tW9BfYUmezj9XzYPNPwMspsimvwzUAfmNJ6tUz2NpAGcSis63DefhRzYB9bqJbvsXMzSCzo1BDWVYycB",
  "key21": "3ZFy9PWnjzsLPhqwbWRNCoYf2nUXXhCS37xHt3jdSN5cGLxr69PSSASLboyzDDsmAA9tJJGZm2xNHj6XAs7rEhcc",
  "key22": "2ZvQCoHgiHxXrQmHULS1gKg3qXJV8VM6UgvgEbymgASCndQPdx2VBTKQPyw4TyNUZH5M6kvNgjGBSVUvF2xWoWLi",
  "key23": "2zxaAYD5QruhTgCM6ozyksQiQpsjWrgCfF7GM86gSjY34PHMZdGUdwsMXXnSiY4ne4s5pM6ktesiZy5QqAnaBC7k",
  "key24": "5LzVmZv5oniGsB6VDiCsygYYt92AF84kCVtthNPTmQgpQxQe4pg8GDFs1XBP3Vq2GkNEPH2hwKBvcNJL7p31gjyF",
  "key25": "3EDjnPx3aG3nGqoSWiAfDCnCErQM9UmvvkvMJLBvkP5WS4bJAucqPJro7kL8mZfbtiAHWpBg1myXsHq1rf3LZN7",
  "key26": "5tTYVtXm5SjvJGUZ7KsvGUy95Tfo2685YxqfiGoZLKub3sadiMfPAYDAjqj7nXi6v5gpfbBAvrWh6GDKpf5nrMTM",
  "key27": "3xyJcb7sC9xBvreNE3q1cGTQMQW5CkYwUGjfLa3DdDh944daDGGby1y1zcN9obnojuj87pJQeG3Hzn2ochQcL3qH",
  "key28": "37uTUGYgErVpm2ExdconnDZDWB7TTRtwPFSBLnLD5nEVhnvFdbEXRvaXggYwVWRYPoJQGV7Roi3hz2Qii9GTFMDA",
  "key29": "5K3tYWGKzpatn4zMidfrEqgrngha8xW2r2u3R589y54s66npQpnMUJj6jh4Fc8wJ3KHF62Cfw51FBSRBLvL5DWmv",
  "key30": "4jPCJcVCCFe4pFRRkwTbpuGtPkXTcZ43opm36w2GQioQkoJ3oNNiXENrBqfWemUw57xrnaNN1oBReyWKpXVWbZfA",
  "key31": "35sT8hcyGovfJNCuz4p6VSfeRq7hnfh93gYF8bCSKxMdwUE2WzuF6VVkKKjA9LdnrksyxGvTgoBPwScsJ3tdSuE4",
  "key32": "Cs3YhU3r8NkiuAhVretMVTTTTeWLmTN37nJYyn8c5ZX6f6H64HUPayvGRWu24q5kPpzqY5Hcyz4iHxz1vaXgFzg",
  "key33": "PeYve3iQfQB14yF4rYrfUv8exbWgGin7WKcVQsjGwCxmKGGkBwxeP2KXbWhYNGoceGgkCzCuTsco69bbsrWNhKp",
  "key34": "5WgwauvHYmcA4oHu1JMWbh8qM3NnFAfr5A8mEkJ4SvB78MvMg4unk6qEytre8PsjY24uRPe6XYL3X4eqroCTfuPC",
  "key35": "3vMWEZHKyA5vTJuzeXPz2Dm25nAAmDch4a6RxT3vdTkergvLx5q7kDVTGcmZPdV9s4gRzdCbjYEJH8GjNXW5kTQi",
  "key36": "5uzdQkNpFUPuexLbrGWTdqidmr4oX1tqa479xFRA3svrqatUkr3HqVTaXJfvcsRjYHx4Mu1ebzDWWL9uqkB1nwPs",
  "key37": "3PJ3NGpYrmujDB1BcYk9B7LURnq9Nni399hwNruS7A4KRpB6rsnbKAEDQ6Ja5ttZHQiDNU1keFhKKVLxjJ3qMnBo",
  "key38": "47RW3sv8PTCMduGzomFJfoFbcH7btXKVzouaPzkYCYgMneZTdr2kEDWGwEFDgaUWTTwixYZYVGJmeRiZWStqGMKB",
  "key39": "2qAkpp1JZHgwt7Kqo5SPPYi6EvAqq8nnwtJCtntPWtV2GE8xDmzyoNK8EAvPBGUSbXR7pP4ErwJfjGpKpyb8mqs8",
  "key40": "3UiW375hTin29MjoaXLRp76qz7aLGQHtsubcrtKcgam3MVkjR4MDaPgHYXM3qBRgH3tNNNbaH5tW4GgNApMGSCDA",
  "key41": "3LPr1mDskG4Em5NZrUyTULqu42N6K6ehjm7UFFpM4495g6zbsQtHKrGtXmsyL3CHBZ5uo44iH1VfvNG48pWaDZ1A",
  "key42": "29wxV6hgbFkABnPXCXCAhKpEowxbgPredjLK5yBvDm3peAu9ex4tFP6xyq9DtjpPG1doPqu1U6LakxbwFV67ddaS",
  "key43": "2Zzs4XPBZ6tu2BkHnaieukUXUqvkhZwxoYdeu4Mjjticp3kf3adVP1E1UsbGbijvkyBrKGgsFpzzL4T9FGB2Jcf3",
  "key44": "5BCgymJf31aov8ehAMp1gCX9fNqihHWN69FX8HuWgTe8fNxfdsYCvisKnBfc7ytzNvCAxBPUVNWHFqMfZhoEk1nS",
  "key45": "5RxtrXNEEc9ZpHGe731uyBZCn5qYX7jRfj5kSSQ1q8bU6TZ45SQEkQNDeienHboJnpTdcv2hZqQxwbDW2zk3U1qq",
  "key46": "2cu55Zznpv5tJPSgA9Ya27HMFAL9dx8qoYrikJRNzYdRT9vsB6w9FeznLDaPndUvtWpKCqqaW9vZaMkjA4G848zW",
  "key47": "w6o3XzywXz1DhyY3PiKykdCe2US7r4rkoKrWkSz2v8NVWfRBQZogtHH4CLAJvXsjrj4Wchs1EHAzwhvufLwhCp5",
  "key48": "3LRjd3VjNxL5W9Cc6kcNywerLecXT8m1w3h9fR7GbaW8iyDhiWAdbdKnnvNeKD4zBzo3Pzpfuxx17MDj1hzZpxm6",
  "key49": "5ct2XnpFk7PFSg2Y7jbe9H1Ghc9uyf1nrpGGtv9CXhVasKkoccwYkjcruqsv4ej8ucDzudFiCbxYELNMZ8uMfYbv"
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
