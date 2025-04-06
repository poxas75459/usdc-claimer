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
    "UCpDXaSsEV9rA4EE3J3GjSa5oC7ERnbzvwsXwbQe7Ka9GJyqkhYpLSvqMuHocy52C993M5PGVqVqTFQ8yAa3wnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owtw3fLqm72huD9ZMKcefTJxCU2ESfXQP54VLiR3B28yFU3ovrvNcUggGpJYwfptowuC52JZiMUTffXjgiJFr55",
  "key1": "3dQ5cpjsFSVZVBhXkzZVS5XkBS3Mg8cbgXaBZjqoB8XBkBaB3dUwQ8XmhBA67BF453H8KVSbAWpUxa9tp3kgkZsn",
  "key2": "5TA8LotB8eXXYYhFK4ZRmJKDcvrS9nvuZs2in5mJm9pZngWd3jrQWRZJ52obDQtPQnzckpRqckj6BBVC5izEHKRN",
  "key3": "3T1ZByHzUxztBTZTeURgYoLLy86eSrdoCj7WSa4aRxqXvkVyyyXwyzWSyhNkBY5YWqTQNHkXAym5KeRvoW9yYb7i",
  "key4": "4MdKyscacR4139mg3J9y4LxFPeECTnagLLnZLEVs42cnN4JKwuoqTLML5TZNDcAjE7wxe5jhGv97s6rdNpGQxBBd",
  "key5": "65foS9UZefR1XdKk6tJbtdTyGTB7CN3pRb7kCEskFuMzqGEucTmzNyY4a7E2BhjnaENMf9MTCPhXbocV79V2KWr4",
  "key6": "3FPMvQRdCTTWrpvmU8KPXFUMHkcaZPWvbMGpqb71mfCSgt81gAtQQZe8aYDaVFfZYECeUimwVRZr2atoNJJfLyju",
  "key7": "uGjhr9wThUWU4MPjJeqNzMqXBZTi5WWudwSnzxYsUJyKPzPT6BfQkqn2XohHrkvY1QzfKgMjaVWinAaaWkCVRNJ",
  "key8": "5kPyn51pXBzhwfHw7WEcbtDxjN9gTBow9vcih37Xk2TjdNGMkahskqkK5pWX3poeV2YCrxmGZmMLmMsejHwMGW6S",
  "key9": "61hcksXjgP2iEqdhfVGQgYL2UhZexcj8fC8RYY2WLmm4YZgNAC7rfsxsbALGbZ1ErMguwnqNEKquZkwh3yvzDvVw",
  "key10": "xFmPCraYrVwvSmJWrwSMjTVZ2oZE4GvhMU4invkTZBRXXnYajDiZCGmFxBcKrLrcbNu9WmNmLbQV75fkECYYG3W",
  "key11": "24YHBuotVDZBdUH6pnNsmN4pzWGGZ6KWqq4ckBmbGHjtoCkbp86Vn9LCgKh2xxmU4gH4bB2HmGqYDqx72JVeYUyF",
  "key12": "5bFwPZ28Xxppa5zDNHmYafoMtV6Fn6hMsB6iEdGAkSDskF9J23jn45V5FrLQ2BUtNatvD6wjoLJehZk7df7WK4Ke",
  "key13": "5CCi2BZ1XjthqX44kUsVgUgdUfK8q6MLcDtayyQ9TPRRxzpZ9GMRMW7nwXaEbXmjWUTLhjzLn2VhbBa7YBogYgac",
  "key14": "2g5dnnQ7wCV3kQqYdephNESs7NcdqMPL24Gq5RifPPANt1EmgvsodAf8taB7nzbDnsC2p7mvXbiZMsfStne8be2u",
  "key15": "8EaPLNdxd6Na63odRSgmQjYRu9pQnh6sSu2Sq7VupnHYbbXXExENCG9BZkMrndmR6UdkPpHmXkJbKg42xYv4zvC",
  "key16": "p9MTRxDSEDxBFJQfWuqFbcL9kjXBXz2bxW3rHuszQEwEGJ5t1XvvvCrzBzi3HJqnhv9cFWXC7wPGERjsNbKozQB",
  "key17": "2ciLRduBVT4CRmbcjzSzdyvUf8dqJoSoqiPozcsVxyAQV1ecn7P6j7kRgDHVcDwiTFzMZpLwXd85nez6nksBdYWB",
  "key18": "Zzsno3KMFMo9rsVL46os7mreVNSoGwdgRY5n6RSFLnFQmUhuijk1ss6JY2uYpgV4J9H9QoUPts9oi2uCNjs6Rbq",
  "key19": "3wpD8SCnrvXwic1gZU5wFfAuRRKToQJmei8oS6PPHwrHyhgeNNFSGXchJApmFCofK91jAmmr2FbYXfau2utWC46d",
  "key20": "2K3veWgmLtthH74y2HizykFTKgQudEm3SoaeTjmwCAWfb8WGxpsdbUJ1wqXBAp7UmnM5kPPMMEWkjbutttmrTaPa",
  "key21": "3o8rfB5XW3N85qnS1W2f8FFWeDpN8UJ6eyxn6m1bCEsoeXULFkDZDEMVEyWbEwQhv6Ux3cp2tthCsN9JnwhER4nN",
  "key22": "2BbGwZHQHGHf5iypFV8uqMyRmAa1DQJ5DXVMWr9ywWpAf4UHqJwmAYsy2GLayTN43QLibVsb5ZqYY3BDb4EU6Ykj",
  "key23": "724mW4aHKZuSzsgaxF11g6A8QqRAZghFJLyD5yjipr7ruXFg3D46zPvJW9PYAbFJLG3XZcNaXhgQY1Q2f6VLbAW",
  "key24": "3AogE4kALuD2xX4EKCTaPpFDz1nLmSySLGj1CTxnfEonxyYGHLKmC6Vxh7jTYP7H6cHTwdEZeSBFit15SSCqWeWB",
  "key25": "3nj7yEgi5YL8PVLpVQcEC9LFwmwzHhyp5J7JdoHsCwbnWmCy8PmKv3G6JdmF4yjWxKH2aC9TNWwucSB7UqCtVtDp",
  "key26": "4Cwf2VjLDZU2nqo5UWontYpanmWadW9xEC1rkhKSLrCRuh95DPFB4aQZChMfkMHt2Sb4LzPLBw6Wj6DYysgnpZLc",
  "key27": "2AYwHhMyQgRHm6NCkGNJczWfVeKsy7t83M5eFaCVMtrDsYvKfmCbxLNBUt5K2zxCBaZZnPXaQb9323p3Zi4tuY6J",
  "key28": "56q4EfEGJ3ScWyWUq9fHgBvKoF8dzCSAZv5afVmbi2JLNXusipbhUdpcLUr6Hdd7rUrSK86RsJ4bZNzxsuRXCfd6",
  "key29": "58zLYuRB3gBqKDbtHCs37qjDE3pokW9E9MrRyvM79CEgxyzz47EFQ8BFPPvcG9UTo6CuK2gpjQnTn4pAe6NCDEpv",
  "key30": "5wCjMmRco1gT8geL1KdKajL8n7GiKrzHFxC9jTeHqsjTZL2XeGp3JYnFhcXiiQboBCKtuQnELv1g4Fv4bsaQhuyr",
  "key31": "2nuvcXPMCetw2jYG3LrRemfgm1VFes6kmMr1839X9EYVW9YFMnxpiAtXnaca1UodXx9zwXV3rb2Yh7EeQQV6pb49",
  "key32": "4Pw9tFbBCVWLB9gYrxBeYuBrfECaZkSor85wshsrCEMnbsSCVW8ZewiV7dhNsxYHAcQuwXzMRUmbaYSwt3Xg3Md",
  "key33": "3UWccosra9r1xRyyZk2tPP7r3sgKZckmfkTtwyRR7Q63CnMDsPW9ohg1zydjuVbGHZMdKDJbpKB11bRPBRBjM1NT",
  "key34": "2DfACGrQid9DbQE71rGov4UoBpHD3Yde4oqFzchavYskyPqcFgjQDUXDwLtxf1QTvKV11wMgaUA6t5rKbk7GFE8b",
  "key35": "AbednLeXWZN9aE7BgThjYZqVtjyt5aw1XSJ6k2CHodKJi7cdqRcjLnavFfnPH68XM8MNQNiQZGxs13JfMACmVrT",
  "key36": "3ddmSZo1o38LxsjERjqLDUCe81ERorvEMX5JX1AELQ2mb9HiJGrMM47vtriZVPi2JWDEVT9LE7HHBi7A3Ef4WRq",
  "key37": "EEFxrbVze8ZW6rYRtjByN8Hj1joGkuy1Vte69KbSV2vgcwWC7MTaAiDN4TqC4hF1eEJ4yeuti2chP2Z4qVzsv4f"
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
