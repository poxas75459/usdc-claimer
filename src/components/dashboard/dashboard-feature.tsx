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
    "32zxbN1WLXUNJyBo7wdQM3hzTLXwr8K2HUB6UUzhjNGt5mJ2YeVNQ1i26Bymgb3re9nSbp7xfpysDsYDgAb5gYjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTZWqwHvfwBaE8RdamJSkHGahGnL7QqzKbX4SfYE8ceX6UEk5wwnaugnuPitYAJRAxHy9wnE9pGK3hpj9SPRKof",
  "key1": "2feQkpXK7uFCY1cAMcA1jqMdC1KRQi2eP5UZxEcrzhhT4ghMtpENTe8XyiD3tCzF6XN9hM6gVBgoEDuMqJ4vjnWW",
  "key2": "5BYJCSzS5GLqUQtHFtSnFz6EpnPNizjfCw8sKquFeXJRGb814Lb5Wm5wgq8rgtrUrT9hWWPZyWw2an8pQXPow9C9",
  "key3": "3bmLVTEzouRDvQ6BBU4CeqCgHq7XceEsjnQp8qyNTzS7H1pW5MH2MBzPEiWuzF8tELc6SzQ6oEt2PYgosuYTpozJ",
  "key4": "3PbXk8UUq99makt7q1GzMzDxAC4HTJzUguShtxkRpbav2UNSJLZkKEzRtrY37zGbnAYtdF96ynVRpDauCZuHGTEV",
  "key5": "4UoaxL3qSB4wL9Gp1F3FA4umXN4bLiwujqbtTgVFnNCYd2cXYjz22PPaacjPhihH2CZKH4k13CDfoHUBHNtq3osB",
  "key6": "39jYRAW9JJ8J8zXE3sHYJaHnf1kJb9DnfHuMi9J9eYEc1bbdMY7LkKZ3yToiWMqawQtxc4fuRcsvszaSaiqBTLXN",
  "key7": "2QxhCQiEtmSYmq4LoDPHpse28QNNbdtQ35xY4FsQbGaqqTqhqXyenXpfgEHDv5qJvKKgspNBKaoCSNrhcYxUDoLo",
  "key8": "26zMm3JsAtYJGwK3NxTSpBr5iwkcCZ9RnPXQwaKSA4v3Bo8sg8cCYbGfY8ioxc6DAj3AwkR3Qhjav7Nwt1MmRP7r",
  "key9": "3f7uTX64VouBANrQduAh2p6iThhDg2ZzDSum8ERk2yNzLW2pVMfQH3t4cguguKuJgRAGBG4jidTCQu2cp1h3DQWq",
  "key10": "5ukjAioCPG613yNgTBahbzsbwtTQg9PVgqmrVNcCPkWUJmUMKpx9CNr98nWfFT9R6SASuqaSaZGCR8gBV9F42TGC",
  "key11": "312YQAb7tf4Wv5sFYNKabMhU6puKfL3CvncMUpR2dWCWNL5qL6Dc4b44iw6HjFjW2xn6ArQBcrg9v494hrPHM5T4",
  "key12": "5t3cj8LFSRwcHqvPwUmw7HMdARqQ7Um3jTCoKkVMACo4V8SBjbdHLAoGQ76QkwX6pBeuf6J2n2isCXB7uYENYu87",
  "key13": "Btp8ZCwRnNJmbgRrnAsB5guaD46BNMbLb8y65CZjxdthJ12gx4Xr71mbpNwEL7JcgmvKVEm8FiYJVX55dvw34vY",
  "key14": "2escPvhxNpfCwnk1GATVfZLzkkafLTrVPtUkbfWfDVd6htNaLj4nzYTXr6zwJEDNQ5ECxvwuAJ1HATzrMrH8m3HG",
  "key15": "2Js1bVV9KvKfLrPBUF1oN463w4ZxQJwzMSb256McFMQwDXBoupejzede9pRPTAzHaLf6r53QtN6yEfFxmf32aCS4",
  "key16": "53S2d2pjUxmWBXfbv1SzB4xoKiZyFiZkGtHUWhvYPzduQyywwdYuASu5dFz4fCFvE84pZS3LDXmoy2skJGPdeMNg",
  "key17": "4zjQuNsD2bnTHd6vFjRdYiHPjvkf8ysf7WRSHowMXRwrEsg9hPaGG8FPiW1ojJXZ7bPxFF2ffMRDcZeu1wihKWdN",
  "key18": "jjvaUZwvbv5Y6cYG5DotNUY7L8rrHxvJ79bmcdeon6pJBZJsdkwx4dz4GS5tcoubV7pEa5oM5yxAyMNcYU2xM6V",
  "key19": "5eQotyigmKJRhvt3eySbWPcL8Jcu174C7EfLjKYJznS96Ao4MRkQ6zq4GR3PhTQDAiywsw2RZE7F8YVCd1JYaRSP",
  "key20": "37ZrSZoyWwsQEkej2mdbUMnXNQRNAvWn2B83j98ZB9dzENpP6XdEiUvNvN4U9dKeuoXe5TaXHdNPAZede1r589U6",
  "key21": "5P5zrFkTMUFMcsy9cgGxmJ5fw1MCrHfXEoxzbeb3RKu3k3cxikGUMm22nxgCcd7SgFdFNsZP2QU3KzpP9bDziTiF",
  "key22": "mCLFFX3biWpEEReTQW1aynrNistzDssEbAERAUxYE7hE6KBajcCu91VeYBA1QEhQ3rPWKphh7xFFsd8SNZUmpXW",
  "key23": "2n7N4WRxJVApp1gz2MLUCund6KserW2T1vWZDPjXh3KGfP62iQVGVduwpFXv7tnUVE4MSF5ygcK43i1K8ec4cLec",
  "key24": "4BhqcZZUWq2TfKxQwNXvHKjPWJpfLUfVFXyoHUBkkAsvxmwKZXgptwe8UXSqiRPv48cznX9GTdk1ZxYe3u5bXrbB",
  "key25": "4hnbaftemsWqzg7fVAPWcgEsqoaXwsmf5TmRAV3s3K5noUT8G2X3vQ6LNb9yRQLECuqooZR2XQByU14X47Fiou3C",
  "key26": "62vzPmXoWVDZDm6bWVK3VwXYSo9JfZ2xSUHkqyK8xmJor4r22PhmjffM6PpVkhrSZeSCkMBDoREgfEHydkoQEeta",
  "key27": "2UdQMCCaBr79uNyHrCsdqYJgJg12wU2VMsYuC96z1orDqEGXM5Xh9nLFf1iLYsZAWSVuPVh9by97iryu42K8TgiH",
  "key28": "3K6obDU81HWS1iwAYRCtxbE6TjWp7z6Qn3eKVfLHdVqjCDnNPz59PYuHvkUduGW79L2wgdWWTYG63aESuLGFwiE8",
  "key29": "2U9UWvRX67zH9NRib5FRNGX1s1Q2Mtp6g62Srf5QLGcwr98y1Svj6Lbz4kkZHA8vajt9qj3YR8b6AYNoEoKCizcr",
  "key30": "5JuVXGRWHXK42ZoEn8siXc8ivjQyKHbmUJSvquKVnbF1U8wDxatTuCTmYvkc2mNCgKTD8yYwZpmxf5e5JV1wD8WC",
  "key31": "4VPtmiTKsyByQvaS11xw8mxSgo9f5zhDKLLmLtaf9j4Cb8YvUs1NmApj2ZditgKfwrVsLP25x9JC8htvAwqD5DiP",
  "key32": "2VDkMCnEpcq91mAFyNBsEprHCoG4f4kNyaUKmQKvamZ3diJkp9VHxAn7kbsRf5Eg1RtvXby3apxMVFw46jBJppyR",
  "key33": "oLgnyEWFwxSLsv6S9DUCD5SzaQwDMzpzSrSPyw4isaEtHd5VdhBwN4WFRSvx3N1APA6zKfaFW65H7GWqRN4csx8",
  "key34": "5pQwg7ZbztjmMucwbgxfAuPJYF4pJKqnhj6zbw9XjL88YeCLpkZDXHGQQEmsvHvJEvV9dhNs3schpUktR9SNbmwU",
  "key35": "24MESkBnm1QcYpczafFBkTXdpYDWf3sJwJVS217UPuxjT3pC6qpF5Ts8fRzkH38EScmZAhZkBKvuNwNPCYuMjPey",
  "key36": "5oLXz17X2hQG4sim9dbtxo9wda8LNgw2Zuzkgyn9HPT18iYT3fZTXSPRuum1JtNMHowY6MUev2KRfq3mv7X8gB4f",
  "key37": "36R21eHGw61mVsu7fgjUYeM5NsQmEm5fFJnZQk276bdeySsoGLwVHXFMz4iQG7aNur4zRvQWS8GWDuVvLAJTc7jV",
  "key38": "3f6RveDiZfAMrLVnsXYJpewXSSAD5QAPKpoQoKKRfU3UgtjwAYd93yevhNXeAnPvFMj2Fhcmdyd7wcra2cCpqHrv"
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
