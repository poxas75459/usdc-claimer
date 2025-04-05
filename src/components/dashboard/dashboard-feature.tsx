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
    "3ngpRAV4oiygstE5MYJ9BFTpqeihJpreA1BAkXGD7JhX5SzSuWx4h3R3SqHcrzAeSfGDWZLj6ChMmcGpF2Y8e9d4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMGVLvQRhbSQS5hP4d9pCf9Q7wgvwW4SNUySXezqVMPyCfG7gnrpA4ryVxRn5HtM5QQ8ERnTsPVxDaHYmu8ZGrE",
  "key1": "3F6K8vKEsi9NHmctp9EUVkKpaHar2ud5jwo5yoXqxSzrZpDYcZHZJsRsWtDi1rL1YwCq9LiKLi8j3t1unQncs4jL",
  "key2": "3v9f3v6YeLiurwCp91YuaNN8u6AHeQqCkL7jWAknNs4vnTs8eQMekHVeFVCxCKdquC2JVTW29wr1rQa5jAH22N5k",
  "key3": "5WYqbEDJZwuJVjGYE463rv1zgEiL1RBwCnKnNzbgK6giVKWCdTwvjSi9fT4SDVjDhorCsqpLEH647V2BLBnomLwc",
  "key4": "3TFYixy6oXgdKupK7UYr8HDK3bcxcT8W7dczoQDxSSZ4rvqFMU3LnusE76HYnedfvW1vwKmPedLMwNzDr5jNVnW7",
  "key5": "5tu12vDRZGpncVrq7dgZ6WXpcq3VEB1iX3U6G1Vm47wX4LCzU1nRt1B3Ph8cvMsoXzd6TXbLrmW5fADQEKvaS842",
  "key6": "3sMagzDuyB2acraTmtVM2gErZ5Cx4sVgNTsdJKjzwft2hZSkhvscUatFVobSF79U6eHBB19gYpHfww1h5DcQ6iXC",
  "key7": "Sh2aFBCtg9GVrg3zvbtbaVcu9pMQcVZvnbefRKGDbmXrNLXBhf6FRPNKqpPHK16nT4fXnVTeAqoj4PNkViFtLz1",
  "key8": "64dh1TYbLnM1zFqmmLbsKDGHwejAM8kdPLvRzvVvFwEwE9cBifZTzESwyqMd5aB5pmrwdeYMrJtrpfCMom5NYK53",
  "key9": "DykmjV3fQqq5TTemLECq45vzZvhfiWiA5Gx6jCDDGWJmBrW4HXsFbBxpx6QKkPKhDQe43sXv6wBcwVihpJfKqhr",
  "key10": "5FMBu63TqfDbfqfDDkufdPjpGq5T1YDEjJ5DGGHLqJA2kLCxNWHttqmQpYVta5r3wHC2CV95JDwhkg1cxT9b8kAx",
  "key11": "Neo6itCdn8RBkZDD51RyW4iPTbtZytJq4RYHdSn635e3JzQLVyD59KjPnx9WUvF3v5eH3RGjCBGWdU6nJEuZoJN",
  "key12": "5FyJbSNpmu96sC1BJYU4ZAq2q9oPMwZDRWipLGjdvHtiPZ27WwEssvRv5vPm2x5bLouFhvJ6YBYT8wfyAmLMeBKN",
  "key13": "3H573YzJYnTiK1MDNFcPa5PH7xfRnMntshUUYBUNb9tTzSxmg3cykrkXvXCpSQCW7PFFcLqVVTTvaBpZPKXahn74",
  "key14": "3tJJDDioSv7KHfu66b2N4wCLBDDoVEzy1emKNaCqHhDi4rsziJKUZ2EvTqKjgWDLVaG6DseXK6umXeXo5fpJ6Wak",
  "key15": "dqJTqQYz3Lp9YkcKAXusddC5CEypPzH5Mf8bz3ttAEwddru1kiDW9XWq7nhhwZ5oryMJPNbSEngiUkgSZ6bCESg",
  "key16": "3GquqANrk3gMfWNfCyTV46dfRCb1BrnxBrZ4S9oBWrus8idVxn1wNSFQyG4RQu8eiaGiziZ1HYgRvxaorQmsK7XR",
  "key17": "5b7KXhQsfREiiFGnnLeyHgTjy8pXqm3jnm4rbhrUP9Y67N68bC7S5nfH1v9NQKhX1ZQjwKZaqTCNyLFT9Gnt3qb1",
  "key18": "5mC8P8nSsUvhykvdcN5WwHQsMcJKW8h7E4N1QVQLL3Y72jHvfWb45WuRJZ6Yh1TE4bGWQKMSvKGfm6GZRWafrT8C",
  "key19": "2p9EGQCsEexvP5CzPFY3Ndgyo6rF3GePkDHzqomJzScDNneFvgp8SjrpgDAnF9brM7z2habahRFSrHLiqWxzofrV",
  "key20": "62WdE6duT5T6RwR7bALyJZvnCwR89wcaRs1zY6g1sCSsTy5gEtE4BJHSyb1VkEL1W2j9ASt1uCCZEneAtpe5tmy1",
  "key21": "5eGH4PPzDLGnKgn52YWWPQmgebTu5GXQDQzLePhthaKxFh8ooHDSH3JhpUFdFTBg8p9j4QaP86b9DC2H5jS5H45R",
  "key22": "xYnR4joomQZL7fbNV22Xpfv2ZYApqNm5opJQMAAWBk4UiMh2VrifQecnutXLasaEgPm4gRjSTaRZX3D5ZPULqmN",
  "key23": "23CPuzbUQTYj9htTf99q5owQ1wc9MkU6VLqUfZFdtuGj6V2iACeJymDpcHPnLqFNonAiCc6qW1QDJYAvssL92mZU",
  "key24": "2ZtKeNQDatPyYDJBnS5zEzC2FMCDZMJG35Wq5aX6vv3cQnt9i5YAmFdPs1fQCAmiZPswFYaZL1PbrTBT5eUEtmaA",
  "key25": "5UtjzRAXEJNmeUoTq1zvcYKRkpywVTDzhYJe1twf7TNgB8Wj8p3spF5U5zW3tCjmpVBuBLsX5evn23ibvFYLvZWf",
  "key26": "23ywqQdHBN4cSDVaQUZ6w7HNTAeqprnjbpp9Wj2TWiUHcQPVC17VVb1bY9gYC1AQ7Xck14RRxo83HTVeVdb9XKtu",
  "key27": "4dsWQ7XJBJ9CJfxJ6tSBEtNs8eJiG2b8QuEZ7NyLSXfbMLBxbsBwfGFn2WVCH1p4TfLn5WJt6YCz4LiaJeVhcLGb",
  "key28": "2EzH8P2o3EZY2JhTNW4y9FsNdkyxrve5re9ga7DryqpnCMjc3sGRynHh2BHMMnyFpF4EqfTmZFSxxWZx2BoMAJ7f",
  "key29": "4jfaqTXB6SHrJi9aZ4TFzyTMEnfc4EEHFPa74HLd8RAoe6bmVYHbKLN6fXZgtYeCiMeerp8xBtaB4qsdXzuQW2Tb",
  "key30": "P3D9NqbZ7fYvn1h2gUp8MMtyj6oWv9edx3RUoG77ZC1LqJcFoyzk4qKSdeP9Ncz6QX3aLdxTeHPEWDHcnTe4Cmr",
  "key31": "3L2a3zMZdT8Dz29y9kgS9YTQpc3JSVTAqMHVpt1s2ApTXctWwQTtVT5vsjvgfAQZWvntE3RHMkQdWfmzK57niakT",
  "key32": "3Xh1P9u5V9HQZatWpZr99hXTHkhcU378GMFKGqCeF77VG433eroG8bjb8PnqhnuFQ5geKwbx6K7FXPfbmwPXpEhb",
  "key33": "5AHDb3mzxkv5ZSrr9byj1aQTkd2DBTLn8oD1bQUj6FERCFyhh8w3VXXRiinvpsxJeAHBXjhXd43XrxRuTo4N4YKo"
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
