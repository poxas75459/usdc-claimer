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
    "4bkJVYjxfcxsDpdBSz1U616hcaNbRGqM6gGk7tJzTCg3p83rfKiZWFNzBaWhuR7VfwhT1u6puBsVGScv6m4tbzSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3g5QzwHmR1qd3sJc8Tp6eDFfRP39ahLH5kBD2SgWREVRD9M6M6TXbRvvy3NUwWV3hAHWkozJJsEGsnQmue59sx",
  "key1": "2VwYDWhsp2MSkJd7gngYTgZ5ckksgN7qwfCg2mA4b1aZFfLiQeBuE1r7VHDuEJWWBsz9ChNNa2M5nVgm9GDn2YHD",
  "key2": "4raNobqzP99Skip9owUz6TzAqpphCZxzHBcJHwVFwACksZoDm5fVwoNKF6ZTPAU5aRTyGJq6E4y5bagxpgoTs8ut",
  "key3": "2Q73NBG75qLG4peSQ2hGSrgzBBYiJHJqgWUBUSvGTK5VA7R12HDrmZP4FFUjb7ko611yTCbpgv5djF5rKwaHtQtY",
  "key4": "4TfZy2rL3exU9XBH1bJmEAGFzzYvMiBPpFQULZiKv3xSm99GgzWm7eUen54w1nYanmXWjLJAj4GGdYRBkip8smSX",
  "key5": "4HZuv8HVDp7wTq7Sgo7HYb7Fjgi13tgKgm51JBoPaio6AVsE1rJZMHi5TS38H44kgxiXY4W8EVzYoGDDf2zkdL9L",
  "key6": "42GGxs7JKYYcxRmxKzeu5fD6eGx57hQfakgb9kPFdrwrwYq5HvFpskagFD8i6CoWhk6tTVPndrxD1Cv4jmztm4bX",
  "key7": "5eQPbUnzPqLgcr9VzJokSeqKHGkGqvZ9TrvY6QLaUxxonCuw2hDqYFHVo1EJAcSUtPo6xcovzkbrGn2ittUoJNNL",
  "key8": "2xLzUGUWBecd2ibHDEuTXGrcZkZEiFdtR1w9cPX6FRZ1PGqJVtKR781vsKZ8eT6g7mxZp9uU8ctzwcVDiPthdkKH",
  "key9": "2okdfdGJPUf3REaPgxLAvvSoqazRKStvy2XoGjJa2fEmWFta1dqCnEatEE2euPzWBfvLSSU8U4qxQS6XcrvPieQg",
  "key10": "5d1BtrkTu3fJqz7AV7BtCh5o3h5bgStdPtv75gdYSmiaYuigiZnvhf1AKVANj6fgPKV16HhWPWHUvpVogFXpS5ME",
  "key11": "3sDkiZaEfUN1NqbFSXJpgC9GWZ5rAmBDxuMWT134cfkkpXhsvxC3oPQNumQCdMMLFenCN2Wmr9fseppDkyXFtE2F",
  "key12": "4yjNJEXV1CefYSTXA7M3VHGUUwJ5PUF9t5LHHVJaMaKq96VkEGSA8VyYYzeavM6FvmNU7esucZaJeTASPC7mf3AT",
  "key13": "63BJfskeAKwY57jAxR1BFstACdxbf4D8vPtp9FsWuiRuZSPWMB87UwFferJ8mXt4FxwAKY3Uko4RJWQvRzuBdzkF",
  "key14": "3f8pGnkydrJzouFdf9FbJg61R17sS98Hz6xZjBYUbV5oZHuM6KjapJYjPMj7kUhP4nngf12fzhSgGzMgxaSkgBt7",
  "key15": "4PoqwYzC5vBQNwLEbE2XhKDEXVPzDZkXb8BCpEbF4KBWZC8y8UdV2A8hHHcYExy5YosRExDW8dXMMdPQpWao9eDG",
  "key16": "3G2AEHKQ1kWZ8VUzD27hCwE8aa4w21Tu8cAqParqhc2hmLg5rZDENLxCxD6ZrTX6dZUnWKjLKZj45KbeBHPcWquj",
  "key17": "4e5HYr5duTEHbFPHPu8KBH6oHD9NsfdMrj1HVjqzqbCFCLFhj7YvhVb66g2PLeWup62PTiZ35icjPZeJMpysyKsj",
  "key18": "JHBpgbBTa8HcadVBki4MPkiATVVz94XhbDLednCpRP6Q9YoY2X623u7ns5P6p7vDK2ZSeQYQx7eUmWk27cp4P7i",
  "key19": "vYoSWAbCALN4haQsU6QGW19Sz61Nz5MQjBfHHAPaCzRiriW5VcXB8m5tZByqwFHr9DjkabGy9yZ3oXWi1Xu2L89",
  "key20": "4AcyZu6c65Csyq9gYjHB2SeK1bQZZg4Ro4S4Vh9nNnKZtTxMrAoB4kPUu2CrVkZs4easNZAjBEnDQFUaRmyiDaav",
  "key21": "hgSwtiFgGA5GRrH5TLF7D7HEyfyhUXPR3uJ83niPod3QuZ8dMTuL6d5QLbUFXoVG3EvKvm6T2K4d1iizDcKzRJS",
  "key22": "4f24vRHADbiP7sJVkejPgnAqouSzi9Wz39bxadkNLEZjDAeZS3ABEDQkT4Kc3oFb4D1irynS7xM9xZwBNHTnfqfN",
  "key23": "2APFLeCqGeJ3XGQ3meaJAjTGNWRQDE64n1TV6YgyYiCPkMVMWRH5fsdoySm6yE5JiJtWKpbZcK5Sg9McBHc8URC8",
  "key24": "45LApEknHyVZv1fzFha2Tvj2LmrKvTNF1R3Hp6ZpMPJR6ZHK7nscyDxFX9ef3sqDogj2ytG8XdNFJ9MR9od3YQmJ",
  "key25": "259Grra3EYoiDt4pbkkVHnX243jMcCCayG3MJTPPnaXLETciCjM51B5LoH1GUxDeWiTKKQvX3kN4eSZoiV1me8yZ",
  "key26": "4G2noSc5huAg4PWiL9cyCojpDDxuWatWHTh6mCUmFbJxQaxwpi8B9Ted9BRYHrSras1X9X6RVwvvi81xKxCJUHwS",
  "key27": "3xEPRw2g3ucvyX6YgsEAQRyNae8S98FWhtARSaVsgt91F8LzCUyy5j9iaNpE7d9LsWBJNZP4R7WeHkXT9HPGHbW",
  "key28": "3sYmVsFzaL8EMn2gceQCdP7kmNiwJEexkicQ9UgY4DHeb5fJkSTzcfbdMQWb3naYwBynDL8jhHKg6yH9NRm4mJEi",
  "key29": "5pMEthNYPqLeJj67KapAymRvqqeTbQcvY9fAPnNcBKuogag4JpuWbo9PQme3XhWxJuwTKU9T8Qn9HHJoBHrzt4Qq",
  "key30": "3FnBgVnAVZJ9uRQUC1BW1zfhsbN6ZkjKSbPi3UEtiXnP2qzxfoTweSnnV8CKJ9Px5hB9NFk66xoKFzAv1du9cpfp",
  "key31": "5RZD6taw9TPxES8gB4ouB8zTGRGq7goReZLHah9v1uftV4rdHNTdCaupjDH7T92UqGyPq4GNkKPdTVbhjcm9CJvW",
  "key32": "3AYoRrQ5zNv7YJaUWD5fy8CgJ8Nz2zFmKBW6szWkt4PKP4GUmdT58Jg7wbmadC5D3KAPnwKMKAe3eg95XdsNouZu",
  "key33": "5AwngM53pJNywmVzZmASoQg35LH7AZ1aETvgoy4WwiVgPNXQX6yY9Rc4dK6TCpMzGkTLtkHfrE5uLm2uMFhxPp2W",
  "key34": "5Xt3uYPi4hPMdJWrwxFGNvN4TnG16wFGHQVcg4kmjF2MohaDzab7MG6ztatxFP3UN4VQ5h29SfyvqB17DkoLbbQM",
  "key35": "3beW6on6wunGpW4guDu4HMQSW1axSckgE6n6zWPWme8LzWC8vn4xNVf1LGNfqnWYaTwJU34esywuxBddMck5cK32",
  "key36": "fnU3SsQW6PbeyjAqcKTfB85guuKXZa6KGz2Q7PBBnXkAdbApLwKfqHTTXqihRqg4W4jzSuEQWiCANqYNAN8N793",
  "key37": "2FYVGrM1TKM3BetY4N58Vc8s8Cs72PhHsYCRhray7GqedJjMAKwY8cuaXT5DfVXLG3W5WwadH86AGcxjAaD4ZE1L",
  "key38": "5LQodcPqLgDwhr8Ci4ZPXaYeyiQUsFUPVvRAJHH2mpRrKuwYMkLFf7pyFCGAc1AbdhnKd6qSQKNePban5eCNiYPM",
  "key39": "5EmgkBzeU8H7Q1WEMNRpfL7vyw4ajT5sGU1QzK3KFSeX5Gq7KVrcAR3Bkt581z99RriuofN54g84NVCM5RN7hLpR",
  "key40": "sfHXciZWFJayucZTyRa4e9ZGXfBn3eQZLLKBUUfZR6UwqQV4kKB7KxK3aSnRZmVwDfMLWAMs8pgDTUbDcfncmfU",
  "key41": "2QeLkj3D5GcrjbbTZmKfzCRweviaKpwDvNqXr8wnVFyQNLrj398KoxbabDP9WU3ARX1YCWcbxHe2FhHWeKAVc4Hx",
  "key42": "4fBtTKsdLypsBAffQkbUw37tmMYmiAnQh5C7vV31ccvGonVRUff6D9iq1X1Z21RdqVjLY9YjXMcqRZ4ra8fWUvCp",
  "key43": "5Y8HWBiYujKTj8QLpwak45afe5sFk7whjZvXAHxhS5fGMzWem3QJJTtMeiYeFSuy6trv9MUWh4qzrWWCSBFc1oN6",
  "key44": "GZBWE2otffBLsSiEafpWLT2v4jx15ZGU1TKj3a9mAuq2F78BCUb4xTV7WTDy8Xz7bZJZ8vNzczRdHmkVHJbNyBM",
  "key45": "3jNNXqKgtKFuW8dkxv7w5zZNFZf6cwtcH9gEjGBmhjTzQYxqs6yzSG6ZTdvwk1HarXSiFvZFjHF2RgJAWcts2g79",
  "key46": "q3hsZCf3ZrnEeZkvsWtUWapNAByMUpNMJrdKrLKFUrWXWTjWXS5891v36TSZkqMgcjrMRfJq38yykzia6aLLgQu",
  "key47": "2D5xLFK4KJNihRAckVNHNNWdpWzP5nY5M4b6hGSuSktsUuTv5jznDCTUTi8eNCnjWQXzUkX6SALVmxGnqGbJ71QS",
  "key48": "4NRf45CWRt2h8ZTEKE9Go44HSH6nmrCFDVyj2yee5EMpp6gWm2SDbLmK4E52m31oPor8UkYbbeJmD1um58HU7T5a"
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
