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
    "4fupkeMrUXJZ99GPRM3wWuEqcxhGrhun9rptZexbKtcUbEGLnxXsvuTyat8w9VJsBpfyvYbPrmZq7H8b2kY8MTHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dce1S8h2GxZPQjLkgaM9Ly1YhLJvQq3P3yE9m7xE1j31BUTFdurfg9oAYc5U6Cb5oUqa8s9dZkvLmR9XrCcTT92",
  "key1": "2dzYnzNk31V3T93FXiSSTQANskDK2mddgn5ZrbzTrxERexJ41zTyZKymwRdkwTG41tbUuQeAXtZA4XU3tsuvhpT2",
  "key2": "4yHxHCJ6fa2NZgk5TCcWDgyCpjSBFCTTiC1hbg7KU6pPCxoKVaajPA38edrY8viiRe2FAfNQCL6nUGxoXDEj2Yya",
  "key3": "3uEun49gw5R9BaTqBV6x4QiWMQDQMHpvcSqTkrs5u8HCcYaShtAomUuWNwGLrpmHE8SHUF1szpFDCDpeCukaSNuB",
  "key4": "2cz3RAfFNXAH2NpjKynHnmWE3UeFDboPJdEoNNG4uMMhWTSdsgVE99MrUi8zQuN4RQWDhE47RPrxwoJaHBZxirzC",
  "key5": "51qUW85oWFxVmvVHusgpxdjCod29NwRvrSFPNK64ud2aLaP66Xs5eCxQnWduspYBfKeD21bagZdv9NZmx6RzvRR9",
  "key6": "Lskr6Zwgq5JGonwSnWGxf9tpd3TPdU82BGFSqYUSaXFTqBgB8dJhieFHmd2Zcpsoqwh4oQFz6eNCVGeWskkNPuz",
  "key7": "qTvQidQBNcVQEUfFWUs1G7Q9CndeFQG8rHUTsihJJNN3CKb8EvP9otG9tsQ3wzF4om1djAhEEeXsAKqH1fmTnhE",
  "key8": "5ETeNK4u1cW3Xh3rT2Wp3QhjZfzAWzK3ZuDmE9BCm25CyiS7nsb51Ytz6RveD8FdahPxQrFgmv4q7KRV887nv8Jx",
  "key9": "5U9ifVQLGFPq9sFvFsB2i1e2SW3ScdLLi9tLiMypdmVT9TiipgH7tGMiHH2UqdDBcDmFvrPPUjcYEQQhcqnyLpUQ",
  "key10": "4ewDsvwybW9XbUmHWBzo5gSBoM5CbzsTUpEXoF1gxdPfcKtF1bDUCLa7g2gcptbDtnQpJFWS88tT81wJpYa4LZz8",
  "key11": "4qbbNPFstuGych4YCxjrrMxubSMEsi7PDz9jgrGKYnXb5mAZ7WN12idhmuBYAQ3w1jJf1pCMT86ZKBuGSacX1jpz",
  "key12": "4rDKqQexqRro22uvabfVyXbcWt85oewgt8vFSSgGSZmy24xuXJwMqYAk6NpNRMr5HyL4oHbyhiRLJFFGBUxevR6p",
  "key13": "64XRqAgqBzfsHJTrckBUvG5yKEmr1F4VESvtMJQxA1TcwenJG5tbMum5SeexAkiEB5JRJMgwzW9NQJTKkyFqeZax",
  "key14": "pM8cjXHG6K27bkEcuzHiGF4YRm35HMTVk3K9jo4oc73Fmi3BTBuFvLZ5Xym1zpjyjpz9WhqbV2xaDqRWN39m253",
  "key15": "4tfie7e8Eidhqum1T2S3A8989qhZAHTr47fWR1qnkppAWbbVLZA2EEPzpjBBBBoZAz33D618iJKd5hGJ4RvFRcFX",
  "key16": "24XNb5XHRsdUYRn266rFk5ozTmz5iaCYpZutuj3yo2V3VZszBCpUA392YoEhCbGjvHQkSebmkVjVW6D4BWvc1AjB",
  "key17": "2pPis37mSztoeoEiwdfo6mmp3b8Rz53AQA2PPLoKV8FNVUSJzYpUBdD4wxf42GpF4EZqyJbYrSEkvB3ysjjrS8tW",
  "key18": "zkLtfea5iWkhpm5BH4yXWfMHY76hpLNrZBD3EMEoqhSU2ds6BxGzVX3WrLSFZcKBgxPzDQp7pw7khXPM9ymJLBn",
  "key19": "n6maJjJrFLJqrb5V9R4okwncptzyAwUCeqdHHudND4seoY6aLACLEP7rjoEKFWTknXs6HwVcSrNAcCB6axUmGyg",
  "key20": "27EfZAJYAgMHXVDsPngsLmc932sF87gsX77YiwZVNDCArEnvLFYZpAach1PuaAwbXAxuLUSR66JdFrNdgi4FsMMT",
  "key21": "3PN1ZnBAVKUtNNd8UR3hmGcGiASsJCQCUqq46QNBwxHUr2iJDm5UQRiDh9zNSUUHDTwdm62TzF2HKPpqcR8dVKtM",
  "key22": "5qJ9L4izX1pgjbgEsxauiuuNhbf95idXY14jk5X47oq3W2BTCeevHrKAbgkJHG35Bg5kqWpR4bcPwsyCX5RMRvmj",
  "key23": "4j1sinJYReUqV65Yd29MTXSh8NHwAZQ6k6UybfMubRNYhCedQPLwkyYqnrZZ3BRYFFb1RoWiDGyYi4JDDNMwheoP",
  "key24": "kH8N51KLYjP4RckJM7vAJHFxWaVv3Gekq2oK3NoyjdWhg5TG3TdKQ2UjFfFrRgdqdkRMn3zisuAXi2fmSVYuGkM",
  "key25": "3Pxbw3Eh1NgPYcyy5PKk59wkxiWXTneKVYBvrTfX7dsWgaid9nKT9Jn5R5fieBiBCDNj4L3kVX2E7xcJKNtiyTJn",
  "key26": "49AvdNWhGV8TWcEbdNnVXh7yqg7uP9Ezca7Eomtqzvdpj3KCHKH6xSp6cZDh9y9YF3nvSZE6ECv2NCY3ERqSGAtD",
  "key27": "gDeyUC9KvzM6J5vYQuJCbti6T9zGPkkgd5jpGKZxSdaED5H8C1YgTKqAGgsuqqo6QofEotY7jpnvvh4ARMVpLSc",
  "key28": "2sTHWLNo7EJfEY4i6X8ckvcAdumU6T4Cpiwxxd5dMDhdA7BdeeyYKX28DNmnwN6gyZR6FMK2RAHRLibTwNrLvCLS",
  "key29": "tFzfFxZpX1eafn9TA4XiVYZs3cwefuffW7PqrPZs5Ghpy1WLCcvVvP1B3qDoszqjf72DTJPC11PrwBCgKZcdJPa",
  "key30": "4RjG8p2XztYfP2ET3uHJzjNhoPjjtGnoLfPttQDrnv8GDRxdS3VbYwun14fHeV13rYjQ1cyMG36PiGPd8Fxdoykp",
  "key31": "4Dy1VJALN2mk9JxBJNwzVNZY1GMWegAm42H844HK1JuwTRx5sovYU6BmjEHrcucSyHeN36MpBhLso9LFNu7vDQ5c",
  "key32": "5BDGNjPVPif2ozGnaprRZAn8aqg7peBjUmjcnAmGuAm3eTeQzw4A7nwGVmxRhPANw9dtBVrzrDJwv4wQkESoBD9j",
  "key33": "2Qs84nVXrucRoCwMwBZWUCiK6AqhCGVGkYbyiG5Gv9BvHgQnoxot9hknHUu7sC3uY81E9t9PTKX99mAWq8rNCH2q",
  "key34": "4yLiGYFxcK4vNC4dJddSpvMRdrreWmHUxSBuEHqfuKvLxbAFjDFjMrABmNoNVPCBSRzzdjZMqd5uc4JF9WG3X4kG",
  "key35": "2R4YgT8Tjo5JgRmJfHw1ykHYJbZwnZBe9ofgCgUQGKP7DTGHnCAZR5ZisoTcLJLJx2yG7FsKCoECMCpX9xdhUoPe",
  "key36": "GHrkfeE9EToEdHp3Z4nVNo494qemRxqXDadwbLG6MnjE3UPoxQgYAGAq9hPnjgTMoSv4W6v2dpNitgZbo3XEXtw",
  "key37": "38r1nVZQwR7qf9THqkFbB7YymiFnyhtHcFDh7upnepaJ2GfZZ3v7RTE36c45oYPcQFAzeF8nbryo24yyi2pCkKRw",
  "key38": "3V9bQ3HrXd86ggMmKSMPjjM67cAQRvpzGVmxcmdRF14Zchr1xhbwaVf728FhcLpz4rtwtXSvJyMUXZFwBRAi4Za",
  "key39": "2N6d2x3gFJGv9CfFWtSJGXGkHsQKdBvLkCEVNKNDPKjfN41utpMKhhhWBvkQbmTMCtCGgrVCM523HBmaYVbY7zeo",
  "key40": "4QhkLQrKDqR513P8WMnJ1BdWKs6BozXdhSDZoQQwTzL7jZwH3Mb26R4h7FwT8cBBTBtfuYkjCQFHAAEP9yduZMh7",
  "key41": "MrbcoiQM7ZJKKjs7CA5peKC2Aoxb8WiQMB1kFykmfGaGuLEMDfASVgLcNFXVcDChFDRA1a8uBKSQwxXsog6wyfC"
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
