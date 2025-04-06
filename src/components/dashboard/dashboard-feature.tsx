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
    "5A1rJCcyV6f4CqVfMsRvZKNGqxa3yug7Vfg3QKukcU2xgRZPKMHH4w7mzp72awSrALUaCVoBb6pcy4z5C3bs9Lfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edTLNJy1b9cue6vKhxj1464Bga6qsydzHQUBkQAbwUTcsU8RJpmxFYHQ5dRW8TZgoiWDyCEcgUywjwoAWk9peRA",
  "key1": "2UvGBDadzKdhN2DAKY7vQ2ryJeVsKieNQNgJeEdZdN7BJtwaUxSD6oVtpGHKzBY9s52YqmSMd1U9p3eo2y2qMUs5",
  "key2": "5vj95i31RPuZLvNyYpJJDZwkAtAeqYXgwMkkiNkGYNA7kJjm8WyqsP1m1fRMBMXG897WPRHCsb7yZ785daXbazAq",
  "key3": "4mnQY2fjJkr2w3TUPbvbNfj2UL3hezbKU7jdj3HfkBmoC2nDkjvd3Hic6VYFurGvQH9wdGCE2twCYwvxFoGJtgB8",
  "key4": "5UpuxobumeVrMLbRL1VhUUNfg7N7WvYvJrfL8g6SakVroh6eYWet5ayfV5BAfqAJJeUeTq27gon6wTErcnQpRF2i",
  "key5": "3D3RioNYVbfncvk2cae71j4qzXziUZUtZPaG4duQ4n3x7d3HZrUqDhCHfhWdqwzW4C4GW8DvMZY5KGqBQFX8uVGR",
  "key6": "27rRk8nWxZ7Y8B1tWnxsfmtRd2bDrByMsRkgiinVBAgckjdrnTDyWhnfE7y7TeVVR2zV9cpoRUZQfw6xUiZHr3hk",
  "key7": "5fYseWeqzhFbWWSRZN7V557bcEjE7RLH3TVLhff4o3e2ugcDRL8Uie5h7UUWCuRbxZxGRVehXakuJinCA9VqVNGH",
  "key8": "5bhYeVjrQQEuaoRmmgJG4M67ZZo4yB1JDLYVN9cYLN4SaxLzntYzMMa3zgLeq1wD9kBjbwTSibRX8QZj3XqTkXNd",
  "key9": "3Qd6xQbt6QNR6wh3vPPTeswqCDXf4TmN2eKdNfPZ4aAQ6tAbCLRZyyEYYS44jrENAG5MAdzsxkbm8MVFMSJzbmPz",
  "key10": "4ZRtHLh9xGGFTdeRT6ETyxEecYEXoBv2bHwnJ8WXz41fq79aDyq7VCDUMfMPHbMUGgvg3uNyHAwfCDLnmF2nuTEp",
  "key11": "5zdFv82LCJecNcXor81c1A9SDV3FWPRD4XM2KpCk5BkDBSc9HRsr1okmEWN3ePPqyEoncjV5XL3JJsaw9vDaqyZY",
  "key12": "J84mD1FMLHj2PornWkeUaTiDn9k75QnT8Lzcsfv9bUssU9MRTV8idEfpHgZBodEeD4DCTMc1CvM5CVoLLUD9Ck7",
  "key13": "5dQz2o4wnrNndC97SeVNGmUa2rLF8oK6zxfwQ2A4jhKrvt3QBrQjSRmNc9rpHbKJ7rzkeXaAUUprM5iZsSJU7tUp",
  "key14": "3je5fSb3cRhLjyTqNffaw7TrwUBdLLSajTJ5fQJpUd7wPp3ReDAjWEYfJkxybif1DoPwmTieCZqPvr649BB6bL4j",
  "key15": "537xh8Av29N9Az4N9cv1VagksWnNpUUbig55zAVh51hs3pAGH7ZiWAGvmC7R8F32r87DB9WnQmmU1NPpM9djY7rb",
  "key16": "3TZryqdmpEzfjhAQKHQ3dAt8gSjagrHfqhF2Pn6mL2qeb2PxbHBMBBZjYLQ2hLowWokZZihEBWShMmDEuNRt6HP1",
  "key17": "4zxoo3rz7xBc6313DABWGGrcWTXfUJAqcwFByoAgj5HaFREBAaQENAFqyxivT6F79RvdDD5HkgM6Bsdo4x4iWtBm",
  "key18": "5aWP7Ue2QMCtSGgdsvLitHKia1W94MJFB5Q9D8Bq4UDiLsGeBzPKkc78W1sMSTUM31Lo7kKonW92cHua4zj9T2iV",
  "key19": "521c8rL7fJw7tUb6RRYFYN1f1Fuptew8nERtPGemo3Mq18kRiKDE18UeTw9LK8YmU3XMmjT748zYyf2mF2AsVPx4",
  "key20": "Ac92XpZgvY7J6fpxESkMtqCndWFjtWaurmRVgVrFBstxtwZWbSb8jMZqJvC7sgkVcK2QEZNfdjk986JdHbYy1EY",
  "key21": "5RKhUXz85YjtLSn8KfggZivuem8ptUr6FgHtGSnBz1nfMSctzrnMdztb8S4u5txbfN5fxcz6h3iRcwniFCoJ7quT",
  "key22": "2QCSajegXa9dGpPn4rsQkyt6YLoGZAkTZCYn4Eis3vxk2MW5xDNw36kNGVU7p5NSxr5NPPadBin6E4Zwz9NpxmKn",
  "key23": "5k4kGnmebnab8bqoMapk4nG7RDj8DV9F16AGJrzhfjijKaCJLbtxLWBaA7uK8jBXMpSQD9JmWDEBpYRz1LsgwFAD",
  "key24": "4mGaQAxTKcF5GHLJz7RkvHMYJ1Sv21MwPRbe6eNyHGVEakHPwKYuaFBgmihBoobrEUr6HZkNquxzGMFUg2Uohc9V",
  "key25": "32Gor2nxw62z1es3vdvh5eXsAfCT8c44qPm3qm6ByS69AEPx7f1LowZAJNvL6kXKSQNEKiogPj9duXQtaY7mMmAd",
  "key26": "2yzGvp2fqb7Hv5vtVrwkTRVdrgKLq5dLomEUz3KAntUp5KayS1ZZSJVyJyeFZQ6cu74nkxyhDH8LgTA29PGNHtHX",
  "key27": "5s4e9D3CzA6d55Y4J2graEJJPv8j75VUwdbsKaJiDMTGJHjewDLSq17NMkDJ1FT6ognhsQv4Sq1yz5AbEcZgQA4m",
  "key28": "5zVK22f92X3iNJgAzcA4XU28ijLkpYhwcWQcrP8GdhUDTjzgbZJUe2gFwMx8Q5S1sk2hMojPB943eVwwho9qxP9d",
  "key29": "39FKRTBL2pXTrUgu8YAFkAo9upauVhiLSExv3aQWwxEMYnMjZirnA3aqCWgpdpqZpqt8CwmKX8s3iEvb6BKFBp76",
  "key30": "JkoDWPAAgd43pYza1kFZjuZFmUSNn1xXaN78NQm2XUbyLSUjwipcGQGByk3RR89LQhLrCaGyyHMnKEjTsZuzfYG",
  "key31": "JLTBjdcRrqkQUXVbFSBRn5mUWdthMm6LvuFuVtS4cokGi77RtxbzER1MtK6prtYrGiyaUNckBzim2E1psHBBsJ9",
  "key32": "5Ar2Enfx9pHiqxHRFAnFe7gycGx6kG93wAw63SSFtDhSNgkpKsLZk7QdzKsYmvBSsip4obBztpKrAFvzgx1fFVdb",
  "key33": "3VJVrKBLeRgzNryJpPdvcjcAYVLwGPXUph3UKW1FvCaqE6XiqbsztfoKGbEvBEqpTWjKKMSugwV2ArUquJXkmEcR",
  "key34": "3XWcLfG1Jg2Nu1EhPWHqnsnZZhwC3YoevGFY1jDFcPB2hHtYisLUSjUtnDzw7J3ELxLJEukThJgH5KpB8duDm2eM",
  "key35": "3jhzDtGWMRGgnYbzUBW2Ho5fHg6V11WYuZPYBVfygnDjopBvKvMR2FMjMuMaxEc2fyMj2S4Nju831osponBkxboT",
  "key36": "Bwgfc2sTUSPh6cXZsNoosGdX8mxMRLrNHaTFbmmCQRraDjcLbbQqNdNzxVBzbbRDcirqkoJ8tb3v1xEVMiFJrdp",
  "key37": "2TRV9vKP2PC77nDYYeGnhMq6S7fjm8c8Z6CR96BYm4VLvkeSN4hGN1WN84i3AFzCVzfMHNicQggJ9BYQ5JcyW8sh",
  "key38": "5Mq6qoz5KLbRzGnpdW61dtPSQJ7gsc3aje5jk5DMDQsRoLkb47xYr4vzDvjyuhUi33uAm7wcwYGWn72Stu8Guyf1",
  "key39": "5ZV9CMs8EjjXFRqpK6SeUEi1xcGyFHj7zLYxJ3gDX33JniM1VJwDhXBLQgZBcQjSP5GhuDjVd1iKJmPzQHYd6GdL",
  "key40": "5jQeEzw5ccvYParmjVvhDpg2MvQp7X737GaUTSJkwNoQ5PnPYrJKtUTeRrpALNitVbhPsJhnDr2MtwHaDGuFsYKn",
  "key41": "55n3BJdLaGJ6kd9PCBn1uvst545HpVDmb13VoDYcvW2vtejXMmg9wNDkukAzxnkAEUvhAoovMh27AMRwHFoRuquT",
  "key42": "64u4eKxNotphUEi683HaB7UvgLzbNFaJBAoLcc7g4CX1M9VXa93M1QsrzTZ5zfZgn8GzE7C6RGCy6w5dfZunU6CN",
  "key43": "zAfxdVcwWVta1i3cHzoJU7xeGDT7Tm4yVdND39WcCLeLnZufDLSMUwG7jhRWWs1UiAQgs7LPaF3Y7dppQJDTrrw",
  "key44": "3yPAvJvuLvGaBQXZkkw9HFZKAxtJWwnssiiy6XYbfbWjMCaKMiHhtNeVHhyf2cDuokApRR34xigx1Sevv9muVfaA"
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
