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
    "5mqa76SnEkRKui6iPWi6pfDSSsWF4eEs9R657csxzKQX96fAKPKGyT4H4gyKPUbGQcxqTjHv3JFfYFWGsQQYHseo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ykhvh6JWNfyCJFQWDmm6RfyMBGmS7dDJMFGoPEk3XSmbBFby2TPwgky9aHzC5hTiDgd2iUCfieKPoJfyeVbNWxN",
  "key1": "58QBWVHrKnwYLYwKRekqmBu6DYEVewG53V2ZCRxzoc2Vt5MpxMEgf4yCPnmN8WtYavkv7GDWEgwTELPK5vjT17rs",
  "key2": "5hXT3h2qmeUjyywD7bEAxfK5G1RpSTFYb7pyGedk6wNdpKohbULiaLr4qrXsncSL1Quhr8b6DoD27H5TtECpXzov",
  "key3": "5yxqbuKq3y4cHvQpAVmwCgnyQ37L36wQ2VaCk8ULSgFj1waAuKM2WSpeVJLkafApDzEQoTPWnSsXEY5Dhg4BaP4U",
  "key4": "2WQpsuBEcvY7tw2mqaexjGtrdanwjmkkVXMXRa2z82g1gDJX9Bo3hk8unM8ZXt3Z4BH1TRMqwgSNYEzAMgHB4ePp",
  "key5": "56svM1wmtx91UF9fVofhujKLGx2mvnYkMYLysLdxW5xqjRpkv5bgAnC1sZPeMCcfRA7CUBdSaLWxqbD6BAvQ8TQv",
  "key6": "3TKTRUMehEF4aiZB8PcJQeQRdw9Et35rj9z2M3bJuu6JX55JbWFL4adrxA9tAhboem5ndTt3iwq8ytPa4hWA4NNW",
  "key7": "4MKTpWEbMxFCwHPiu7j1kzycooCMhFd4fX1oRw4F9d6BMSFarx16FySSVoi4feAm6AmxXhKKN9J3vURXcGRdNVQt",
  "key8": "2AsCmAkU3xM3JLLxQTqV3TgWExR8oDoM7ReB3VMrrysc14ePyASyBN7HEeA7AbGMNaV4VBpumAxLyJgT9NCC2uxZ",
  "key9": "4uqwWARo3CdKQCHYzF7JMLwCCAZfcPyezLHpKdM2GJDKGFKihLQvSiJ69fUEbBsRrAr7m1xqPQYnvb1tj74aiLKJ",
  "key10": "2q29LrPS5qRrqkYESFSnzb7N1Gj6TPYPJw5xnF5gggFWQHz6froKqo5uMgZ7kb9xf2oTf29ARq62eeEwJMXBuHxm",
  "key11": "2TFkRDSTeeGyg1ZS3FcMzpE8tkHrrapXNgS4E93rz7J5XM82XuEQzL3JpiefPPWgGozcdHzXDhj216CCLiaaEzQm",
  "key12": "554wC141i4Z1tQjhxRwBvdCehz8hKWsk9jMdPTwrNxb5EGETN2iukb6tZz5nDsbMkQuyKdSksyd73qWBamYmZu4T",
  "key13": "3RZy6pCiHWe7QjLab5XV2XmfKpTqY2fEjxu4paZF6BdVZmLRE3uhW3C95mKrfoxsoaEHFdYCtNSg9voZyRRSyEuo",
  "key14": "4ucYvGf4MXQcQN82k32hEDnkjKKM9bSnQjLMkQNRSvdyQPY8YqkrHTPWWhz3C25wxGirTLfyUa5YifcSUddye6RS",
  "key15": "21LGSfFNo1BZbJNdvUAFQCZUw9p4zyuYhcrB4RQNtryiq2mUbjjkZ87G1zs2idiT631XwahtEezi8iKQvEVTMwdS",
  "key16": "4KR4JZK8DxkSC5NopWDo4XNg9mvEFESB56WjVeseBv2QmUHbzvvmDZ9Tgh9m8Me7u4WshfRLg1TBz75uaeUTrUnv",
  "key17": "4iriZjC4ufLn28CBbRsxwDWvWVQqtq1Vh4tWL7qqGWpEsdWjZM3F9daLy8fYsvrv8QoBDMfZaGgyTrN4r5kt56y9",
  "key18": "V7WczGN7MK9wYkZ3M2ZpvbcThXJUtrzex11eWYMhBU7Dc5z5aZfo9ARJfqBVv4qKxQUkL4FtJwUFjVHtKsXmv4u",
  "key19": "3zyFtcftG2RS3XWKTLzhwcmytHnoqDdKT7k7HdDa68dxptRqDbtdiSMh7eRs49gRNrf2f86CbwHCKZxzMXj4gz9n",
  "key20": "oV65AeiZUBFeGxJnmnKACo4XecvqgVa4THZjSQS9tA3yyVYJc8LBkTKzUi4RUTwz542PAKh26RQhcbVdnKeRStp",
  "key21": "41WmAnhpDqqNS6jcysu4UPBTabPQCwGmt7hVxjEhTVCN4ia7rrzCmaTSh1eRGd1Ld4h8t2uvHpQtbmn4jaS1vKRX",
  "key22": "2WpkfEWRKf3GojoXfAcWgCpaBmhA76hsjhEfhXuH3q7AUJGgtNiyCm83Jj8qSuTmtqDKUWiLpNSAzUJvXMaFxdCg",
  "key23": "5m7xa8MzGsvUAQ5EscocCHy7Cj8snZJbns9rBqE3hLuj9NDT56ago7ubDaLRoh87EiduMsRjmU3QTU7ysq7MPPTr",
  "key24": "22y2x8TECED3MTSq84vHNP63nWRg1No6CvZuWwKdFmrrzdy67q6vQSWBhF1TS5kq3L7eiCoq2f21Q6cua7mB3UaR",
  "key25": "36US7QbM5devAEHn7eXm6eYNcEbA8MUF8frvV5ULb8557g2Ngzdht2c4gPSGAckTMUJokV31RUaQENHV7GtnfN8m",
  "key26": "4aKFmPrLRmufMKF1Xs7MiwwiV4cGUZwYPiFCVktVscmYiSHGueYK1nLH4LGvZzHcZHdox1QfFhCYR8V44dt5XVRf",
  "key27": "4Z5XDRJ9GX5jda9H7RDjcA3bJ5NHcRLghJWTBzSusite3E3Vx7Jt8zqYYZMVdVFy24J3uNHdPmFtXNSg1e62E4uq",
  "key28": "2w66W6dPMGbquNWhrfYaKda5w4DpqizkwQ329QHBKpWVkvDpK671SUDjwLP6FJqV6EgbowsFsx1sD1m7N8QSFkNy",
  "key29": "2VuZgJ7vAHvKjmfsKT4oU8Qo5Diifdsm16tZ86JhhTedJAFwLteFYTEQzxweJiAeEcQCC3X7PdPvEJ32mxo7sZAY",
  "key30": "5vNtk3RcPBmxFqeRettJQzuYKz3EGVfx1scGndYgGXiGdoGdRrbySfVRrkBH7f47UZU82YGohELWHa2LDPyw2Bdd",
  "key31": "3qpepswWyYCtRNtt666LNj3iahU7tyazSCaxAB2bMx5SycUoU6JVafNaeU3XEi3eKa2X5HhgaDEtC5pW4CcDWjB6",
  "key32": "nXJjPGA6xpxKMEEB5eGQFUUJzhN9XRK5zF37b94Z7ujqkaWgnambyYwnwP8RRxtyDNnWcE4vDZshaqApQBVFVqr",
  "key33": "2sKFbjjx4Fce523oNZ9w5c9kh9wjs9qCD4Nf4mBjExo8YKPumCLgo8uP8V1uZ2jmJezz3cvkph3gkchG2pSNCd8u",
  "key34": "4Z3scrWcj6Jwx1xWQaeH9qQgoNrMvdu8ufT4ioNTvhYwni1Wd1JbwiuAC8c9zeFkFmdEykZR8nnjqAxTUyisULZW",
  "key35": "4zigpPLCYVT1HLJy1GgFU874gFd5Ts5a4gGQptyaUMmTzWUJJ7JeGZvKTzjoAnnTtNc5WVKeYUbt3jLHd7ftKtyb",
  "key36": "2MjN4mwNFjTganNjgYbkSycUngM9ZMJ7Bo4abXaDadmmEGPy3fr5xCKT1oYx2svXVA9gKCmomq3Yp2fTFRZANBHC"
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
