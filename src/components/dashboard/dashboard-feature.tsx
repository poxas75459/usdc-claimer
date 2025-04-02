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
    "T7sVudNUP2pqbgHyQhUcUA1b1enWcvcUjnViNGK9qFAEebHit3pzFo1mcxDzpNV9cn95mYnMuMRk6YCii6mLS3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CYii7ZqxvRn9Y2yc2w7YCNFqM9RJCSKXT6Q6nM4zxps4f3H4FNQyQ9mgK4HSe5c6mpUm5BpWfVrFMhV2msJo38",
  "key1": "4h8f7MvY35wr1LeVbnzbr3zbCXgQxGWcQVxAd5Z8ErWrAzCgFveE4sZqKoau6KoXKi4gSgPdc9dzkXpDn57tN95q",
  "key2": "L54XccmXN7bcfk3ruC1EW8NRYQpHemuMnpzJe6Zeq5SRzDMTt18ZXnNTKH9WJR7nW8rhKbjtpZ2WUoitvYiZ725",
  "key3": "28F1TehRdox5QrCXDyVY7bEXL3rNiYox9FcWUSuNvK8XKrcnjJF1VSeHecrt57quygguAmabVq5B2xbQaExTxrVQ",
  "key4": "Ei2k3Epdmbia7U4Vhw3fXvGmqTAMtw98rPpvVkPa4JMvaceXsf6BK37gbUT8Jy9GPp4ubus159gvwfL8c5dExzB",
  "key5": "21zyKCytmVE6zczmbufipwjrw7PcoGfdTRN3TmGbZPThswKH5HwQ7Y2a1owj1GP4xwCtkX4CN2JQ3in7h9zVE4YB",
  "key6": "63UqwUsB4daLRgUGRVHKiMZ87Jk8MT3myN27vzDZQ8tyEi6vSqq3Z9xaFTCqN3y6VAzzkueXGzbEZtTvrD6MojWW",
  "key7": "22GbD7RejFgGXwS6wtoGdFQA17S3yDSFr4WvMaE9ZBySiEMbHREGCYepLD4cwUs99RpsyQfczfpQHhtwHPCsyL6D",
  "key8": "gceNAMwzHxdtH8Yn7TnhTzs7TuGQLJ3JcuXR7QQaXd4HTqNkfUxFEvVd7t5Fad2iYJDGoPP5c4EQa31J2HBrE8A",
  "key9": "2TGDsi12RtJazEf11sKqnjtKc5WYTBcTmPpCFE2poLV2JkAZpS9SBWyxGdvtkjGeXFya8JBfUaKGdtpWSC5B69zK",
  "key10": "AS7erSoh5ErZFcw97HBw4pCXz29Kip8HPrjbfK8r795gvTrpe4CRQb8uUTYHgraJdKRUM9953u43EZ9rXuniytv",
  "key11": "Lyq4gouDUWyBFzxfadhdjg5A9CCXzk5e2WMd3sBpPA74p6CLpqXSVjbvTGtPGNAv3BYnLFTLo1hd361ZUUxWzqV",
  "key12": "4RkzAN8qP9oEj6tYomzpw6n6jEz225GVBmUxj4ejpHC7f15BuQ7hSiy1NeC1VWuS3k9pyZfmA2MMuKXF8ma5wNY1",
  "key13": "4UXRKkumu1AqiztVENcmMzFYS61YhJbxKV9Z8rqoZ7uSFa9cTkUnGmCWaCVQjmhN14TXiWjJKDzKVpKmqLvpANxG",
  "key14": "5foMnmbzLgyB64e2qBGdvapedBAJ1U83ZHwDvkxUE99hAWbuSUmMk3JDtjZFBB9m52Koh7FoJtMtj4pzdGFvwvcA",
  "key15": "4upQzDUJTfZXp5v7WQM4pvittv9DXKnAvHyEYdKTMtdy71fHDhjM4tk7f8Tt1G5QqBFcpjR6iYT6fAXcPpBaqJQu",
  "key16": "2uNeRK1V48jFb3xZbxJJYTN1uFLg3TSf2mGFHqbvbn8faQtRNtkRavECFFDLPysS3ZcM8ukFgiqwxYkN247Uwyas",
  "key17": "3rF21gv2KDNFAJ9Y9axzvTv8hZ8Hp6d1RuTYczWvNJHdNsCEtKHq7z4DRCRQt6KJx68Uous2DmRsahFznhmUPjVQ",
  "key18": "49e5a8Lc78wnU1kzXx9MnmALWvKZVESaoDqgsdaYqptUvBTEnaNMTjrqLwEvmKm1qiLFRakGaPrgA1SAkY33PPkt",
  "key19": "LFEZ6HsuqQvjrYVD3YpSXucNYie4cp9TmLh7kKCfxxssE3qzyrzQEAcaY4gSwBhNhikoYkStEbEfxr5KjMwEP8L",
  "key20": "DZ8vPm4ZrrCiRNNYQ2Vfd7JaggbHQoj9YPZXNfVKHeMwM1ky1BQQqGFcjxkudPgoD3u14AEz6P6WkkYcCJgqAL2",
  "key21": "4qDvfZbrfUoAVdy62nYMe1xNoSsAkqbUGQmAtTZCCgj2yRXN5ChFjNJYHMruA1nkXYALXFLSu6x4QPYur1R9RpHi",
  "key22": "3FBuw8XwX9VQ4oDYU93enhxK15tr7ZBqZFxkP1g8q96Sxa7SR5yht48g5ddKH68q698iCuSZpSSSRQaFTbgTrxnZ",
  "key23": "5concWyxHor6tM1dvgP9jTjKMxeux9drwj6DfV1E9e89cXSMFTUD5VPM1sqrabq8PAobC3cGs7Pmyr1uv3FjQ1dZ",
  "key24": "Hbfy9EsZNqjh2DwFr8WrspMCRE1RgyTh8FG1YhA5wKqYgT3vbZuxhgZiHxnzWDpLTA6CdgH87EfSRWXuAUYjUVc",
  "key25": "SmYbddmcPN5CSb4nXfeejFbHy3WGogEt9JTVdpQ1Qe7LW6GdLFxbHySyPESv3skpL1Aeo1cMkpRz3FaaVAe8bwF",
  "key26": "2Q9DJrXji1tuZaiDGfDfb2vMHNVBSLcAygvqeubcRL86gfL4TRynLxbLMHUJDj2C8KFgoMr9HN7PynJXDjq9k1hJ",
  "key27": "5KEchFQNXNwW2tZqR9t9KvS8dECfPXtfAGYJh3PT2b76oC7gSmUvjkLvphz1fbAacSxo2rjSvDXpgpzgkqwovXAX",
  "key28": "55Xvmaqg2K6jMkTTHFs5nXaWotW4oNgdVuimZRCRtCZtxTpCZYaReBQW8XxePvPEh7cPKisDQPimnfKr8RWKpYMV",
  "key29": "5mNkVDStQAZxJX98jRfDpMpiWhMYMnivc1psaZiQkkpvSCpYsKQMCcbbk6itWrnp7wxuTjnFH6R9hdiNtnKCykHt",
  "key30": "42uiWe8pF1ZyvpWypEGU2p8AmstoxMXVRH6ta9x47Xeme8n9pdjvc3DHdufHz5vNP8qNbCpLaejebxG71c43t56n",
  "key31": "4hg1wG9ACUSupnh41tAxy8o5axLdHRkes2yHe9qWdgkq17wVJfoKtYY1ZNawFDKXJs1mmRn7cAJUjxFkmkSMicwr",
  "key32": "FYzRavDRQUu2pWCzNCc2nbaVZivaU6zsCUckTpT2fvUZEnW62Fb8ujoj9pwkxoQTdN6WfAdGAAwrTEKuXqb61q1",
  "key33": "58DnHkQDbAyiUczbohFwcDDnYfSAd4e8awzm14jqQ35Q1BBWX1YuJATZMHhg9wKh2QsWVGZ8fmEDrjPyFXNZqoQf",
  "key34": "65z2p2f9Sp5vgqkJ5cQczt1NhMhcbqB97TV9zXJURjkjKVokUVe97gVT67fQvLd7FfdZmmchkxQ57cyqUw4mZcSV",
  "key35": "5XeqG1hzPQmCXx5MFAs5FUiiHG1hhgsbrArZhHPPBReDwSvv3w3UX7R6FhxMuFknXUM6BNcELukMvZyPgdoLiyuL",
  "key36": "44EMhMmV3fbcYJyT6KmyRDhDsRKgEcRyieXQ57jtBm5KjxesLP1bu7ncESqvovWpcgzadPP9Py7omyiMkxY8brKw",
  "key37": "4MERXE1uPphbogAAtbAzheJBZr2R4gLbqRz3t3EVDENrrFnH8qqYxgDQutD1bXc3T2ktQqtJVaEvyKwmMrerw1GZ",
  "key38": "4usgSFmkL8x2LAn5qbFA1DM6z3hEkRcSZXEtC7Fqnpcjn2zSrQWxA3yaMGXLiWfADRm74ycP6HRu3UhtKpeetqJG",
  "key39": "fmpQhFDfuw82aCgLfG3FAEGgytjXC8ywKTJhzTGDkmWXeQFUcKkvko2CnCa5pzA9ZHcSbfMt2zge5nPCZkdeeVv",
  "key40": "3ZeMhzQeCwJbBtHbKNm9M8NuptYcBvfhPXaVZBvMsVXJ6b4VemJT2pYXYx8ptSRHUhYaFErqbEhiN9ATiyKeCA5R"
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
