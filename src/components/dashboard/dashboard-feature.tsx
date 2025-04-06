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
    "2BAKvuvSXEavQWisfBAirpYb6x7eTTxyZxH8FcTtxcoBvaehEcqWLLbcBeyP6oLYFQEUVqoZZJiEx7U6EPdL9ECo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDU2xeuH8TpFgJsb9TRiKfv9vUvbhBhuykWGhsuvF4WhHzCnUfQUngH6HdQCUdxTsyKCeJpMoaYdCE2JswkvfZd",
  "key1": "3bRzE8hCUPKNKd4AcqauYperQKBGNSh673BDSHcNFtNASeH8uJevNKMhT6jAMNjb1Yi9MkSeZfN9PmjBUTvtCXLT",
  "key2": "4dgm3eL4mkpkX9UnBxpFGSfBCwaUpS4fjdo2dzJRVLH3c6krnBp871crmeMDN6WGnf6VkS2sYbNwpnECK685q2vn",
  "key3": "5RJK4uDMWg6CR4wbqQiK2ctuYYm9mRxt99zcHTetfpeSf6P1LWkL9DKRRCkub8BQ8tPMnD1cWZKx3bygowWeUvid",
  "key4": "3t1dZYLr7gr9HoBQ2tpmmND9opFcYQeqqtQKjGxMRpnY1sWMkxpL6JwdC1G3cqiixrCbh5JXD5jeVj5Ru7wdzyso",
  "key5": "4bNt8K7pUvmveRhbMjFYwJobTSbzNHyQ3YgdLHbrBbcKUFVWdPTxsMkvFz1xNUJt39oKJj6efd9YAEjCwyRRG7BF",
  "key6": "2T8kR6ip2UKh28dZW3jPEjz24gxsyrkT3caJCw4VAX11HydKJPtznxwrKo6KsThyAFbtUc7TSf87Ki5YqUVmeG97",
  "key7": "5qXNKfvsXLCoPTa2CZLX6jh95BXNQvZo1w7qXvUYeuFcxWC1x9yWgbtVvYeiSbNBGjrSLGJFwispY8CMhpLHetPr",
  "key8": "4zCM7mEoU2N6VQJSR1QCzbJUpWh3rKwriiUyDLJVa6nZg16pYneN9QhvcJhcwDjZdpLhBeDUmeYXZRwpycwxdE9a",
  "key9": "aVa4msrSJcHRCXGJc46QLbVbwSSLKayr5J1iUptRmZ7BLBTF3pBTkQAxrm2awTpE9rCX2W7YdCso5MYFmDyWmms",
  "key10": "BNe8BWK7dcuH6CM8a8WgFBXAzvWUrkw5FodsmEQsszNkVQoU7h2TEyyNyPuYxFjkyhqkMUKQrUiWFRQBUQiruRq",
  "key11": "SvDZTM5CawXY92gs98k2sdheScUyfDCWc4njuobh9vQV6rNMDqEWaYYhndKmrpFgEiXcHu6F2PVesvPvbkEALjt",
  "key12": "5H9mW5zBbBDviMpSuqARRn3xUzqWQRPPkMEQx2RjBm6TVvyfSGVbU5rDZujiPJfC1BzVzNuFqG8kByyJ9wFJZfVz",
  "key13": "5Q51CC6cpWfmGyor7pedjUnNZGMf9GBitQ4aLybQWdtTuQW5s59Hg2QeHFdQPkVFunpgPa2geTEQHpRV6GNrDfv2",
  "key14": "2aLSWZh3XUv29ub87C9LC3bSwpNct7vCvthADREqxd3Uh4JbEqWrBo33N1iUo15a1EJg7rMQyAPgQ924sRUhDC8F",
  "key15": "4LzGbNLBiBeCwyXEeUzwKMCVaV7E93aLFqcLbCBL9Z4g9R6nU9FVvCCTHDjF97Ly4jxDhg3grdTdrSreiXPU7fvf",
  "key16": "2M7492wNYD1opfBXTfiLxu9TvW2QkZsu9UDjMzP88vjVhiXxmMaJL15rh4FpuHrEDe3FKfvf3KnPdFAK2KKFN6Xo",
  "key17": "63k53xhZ23TWZfG9UZVQH3Km3ZUTzC2RsETk2hs9eFD6Cih6GdRevXiy21YQje27gPbzMHiekaocvT9s4bmXXReV",
  "key18": "33GBSSe454cjGdsW6WqnBsKKeh1263nEVZ5yiZzSnX76qwp5ZGuabBGng2B74apQCeFC4bkWfh65GcbZzx5ohrtB",
  "key19": "67mjgSwNXYhg6AU93LDy4dadZgigm7QtQp4ppbn6aaaKa7rEahzBY8b3iUnuFhk7Y3u94Xwts9m1iXAeamRno7m5",
  "key20": "5Un4XdJCqA82SroM9MSE76yNQg696sTg7QU91y14ApxRRiFZ9fuMaaYNc5sZT6NGBkqLPrMKYvuY3c5Mt5meYV4t",
  "key21": "54sAPwJt77xKUHF7dPH5bbzpBigMSAGCGjF4NhJ7GSopDJTDSYRdF532Gycfs2em6VpmsofkrRQKcfjNYqyECHNs",
  "key22": "P5j62VfKGnyw3quyzYg5sW6c3gMHmKAh85wYP3M1vS78BLm9AojZKzwDpwg2JpW5aX3ZQ4wvrK5DqxiM5E2barf",
  "key23": "5VW9g6GojmneKEmSkYxQ7WyshXpyowLdmKpFjSoFBYPSXFro1EqcDW6eGrQfKzUSdMabmxYsMPkNC9BWeTBThk22",
  "key24": "2cKj7abnsXzxwBHeqcAsM7p83AV5aEgBZTSQS7mmUiZGJG2n2Su58uP1RRuH6XdFNTSg3D9StAbeYj1Ka82SP2jL",
  "key25": "4w9NynabAWJ7yNYcqXY5NbUyQUD4232nHVy6a3WuRpWcuS6zmww2W8PofXxRxxSEqhE5FsMg5wLrvofKvtQWnyW8",
  "key26": "4gDZanc4sKEH5ThQrEXcjXDYHRt1qyXeLs7qxzdjb5q11Pi6AwdiaQX8yLkQAzTr5E4HmRga9q11844tc1qjh8JK",
  "key27": "25reGzK2LdnpbnK6tWWs6tvWFjnwnrwVuyYx1fZQadgSn6S6QW4pVb6JtoFF9TLqUKKHrTnGffmsZpNZ985854rW",
  "key28": "4rr8aTCfSCuB3YGe1e8gVWRx3wfLqunK2ykkmcBCHwKpbnytygRCgLdbpD5to3aKxV81qFmW2sfHfgM49AWr5c1e",
  "key29": "3A3Xfc1BovwUZbr9Tw68VmEFYGEu81F2yaDPijRNLzftdePmkMq28yTPhwUBEHce51GkXNeFqK9KdVCG1664YDwC",
  "key30": "5GoTxaNEainUFTG6VjQeA62BtFtKDAnutShrhM7HWQbMAPKHf82otXk8G9Wc4nJdmzK3qLjzPM3JTi7bnkHbjEdY",
  "key31": "44RFPc4BW2xymppQqcQe6LvBu3eXBa3uBqwbpuzPmXipZPVuDSKyieiVmCVp6AxKeK9UMoaNr1fCKw75FGW8RfJ1",
  "key32": "tmH31QCBX4zv3UqnUeZEnPcC88NTxPUwqCmQcYvXVPWaEgUdYXGbnZaoeH7SucQm5rXYvpSsW8cEiVf5gZHjZTz",
  "key33": "3WNrKv57cXkqBPs6gcWeQNNoZDXKwLQHDZhXxCAUFHiqG3zxJubvkaVhNPRUGG8dPdaCwFCf6QdPnmxFTX6Jm4Ym",
  "key34": "3KGB75KfDY1DvH6zNjVc6GrzfPvAyfQ64zDCtKG16qUM8hPQeQrXr5SxZaACJgs1HSyidie6n3VobSPc7HNM2Mfg",
  "key35": "5hqhHmUxr3z9CZN4gxMPBq8TJZweunVcKnJztHmE6npRGTWwhrVLN8sbhaNxT1nvU16zjKsZKxjmeLd2KDxYrhaR",
  "key36": "2uCNQRmVi6BBFxuCxryZptXnp4vD7U6JPfGSiR1HLWkTbjg8ya2uQe3jawd5VRwDr5SW4i5d1tvSmG7QWFQnEXf7",
  "key37": "3G8PCQqnoV6PzTcpgk6AS4XLfyLFcQEejwCvKLP6BihRR9WQ8324zpBS7ojbuGGefrxvhTWTLKnfQBebZVz3qyqX",
  "key38": "5aez8bZ8QdZg7GTsYmSgJDbGj641hNvoN6iw5YTHxEPvgeH4an7Mq7a8e7out2BMCPKrM1zhTmguibYWqgNvxYV7",
  "key39": "47UU4yEbG7tQuPFbx4ufW1LL6DHf65jxMywPvhJztfm1ZLM195dFXrFSwibbexTvBBZTAQBMsDkbvQezEwwCrjon",
  "key40": "2YVKEumH5u91uz62i11hHGBkUUjJ1BYvbWR7uvwwKGk9Rh2ufDsdJCLYnpABy33aw8tUzJENyzMCoRKSuf6ohBRL",
  "key41": "66JEeqwA2GmYV65Qr1BJrNJv5jcoy5wX47YKFLrRuvhxay3nJRHjaUbLgMeZLZAnrKDq7CWqRK2epKrV5tS9UsS4",
  "key42": "2TCRpqNMxA1rjyRmvT5KubWkWNw1izMSDUMsAZ4ncwb6JQ2GYETLN2yKiYKXE1a4cgG9JiyuB1zu6Kh8YzrzJok9",
  "key43": "2ntuEDWEEoczovUtRRwmCFpHv9TjKFYUkNuSr7AodzC4xN3F8EuqcWkTwcsDmzJcoCUhbTKgD76JhnnmL3PkddKc",
  "key44": "4qiziXQ191V8jrfo4Kb2GjXzu7HRaPPz6fbGYMYKqsCpG3uNUynbRz6qbZETBU9FLybCBWhWjk5T2kmEYvYGVrAJ",
  "key45": "3UWtNDHhTQ3kmrGEsyzTBcV5LHpVDjUhkrMpn3QwKcpmDsqSGVoqewGm75JfmPCKoLn9VHHeNiyui67cDnAuJSKY",
  "key46": "3ApPVFej8tCVKGSNZp9v4FwtEsaVET4G7rk5BLnWuNhWGwvsuARdykTn3SeUvxY7sY5dp1tAsmxUMXrQi1ccQ6zi",
  "key47": "5p8yzHjYdtTVce8fVUYA9m3jGBAuzi18PwPBQ4bk9ZNffaF9457ZrhAVT5E1v8xnpBWRYgKjYU7nHrNLayWtkUJ7",
  "key48": "3v54yoobsSqdwo7PcatHE9XvsMySNgMpyDrrocTi1wE5wmYNDb2UZaSKum1btncvSx4fjoYkztNykXZSf8FPXaJo"
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
