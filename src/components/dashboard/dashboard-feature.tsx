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
    "5ZXyCMsZzP7LJ2oSsig8UEtSPHmQ8rYy5oYh3FpuSzmjyRrNyKtJ8s2X3ETZc4isRRSSkwepajTxhgUVAX1g6Htx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vy71YbBDgDb2vdyFSCkQHHmyMtrUbSC8XLZ1Kk1dJQxbmEA3zQNKQqZYHoVTwaciYHWcQnn9yexMhCrqJtkQXx9",
  "key1": "3xnv1VLWNYZTQmMW3huTn6WdEVR9wW4RiVR6KQX6XETni7vBcaEereovAFDNVhHEbFrmDXyKvoywoEqS8yKBXpCH",
  "key2": "2LoGiHjqzBjHwXuzpziheadWTTKQVyRgkxN1qtowufhTx8GFnSz928xrVGJqx4HCUxUDSdtpzE7MiGF2WB3JfhKd",
  "key3": "4doaDRgGufWPu6sYPiHBXYB7s49hDNF4a2hinS1YoJuUA7UQyy8D9aQTcp4cooQuyWCheyY1GUrjb3pHy5u15f3q",
  "key4": "56eKDectADQTHAJWBucFzBtYij65vJoRWmTMRq5wvyuSYqttDmqeW5X9UNgWRgc5BB4U3vKYRmorrXcUGScpqLRi",
  "key5": "xNBHop7iPyqMM5k1poTAyBQ8jvn59tN5VwUdzBVnQHAnv66jgJosEXRpHTDhSziUWsgUYweG29yXTuxy7bwpU1D",
  "key6": "4D5C4vnhgzxCPTQJZp1A3n1SRJUvR5R22uJzQRbBf1GxYCKkw8XqV3DqkuyUZhn2muj99ixV6nYVhHCvJwZXf5qq",
  "key7": "2UeXibhjtNxLHazpHpxRkyLtU7SbqdsdzdDjK5cWKzPzQSCnFoxhTv9UC7pyUWYhVcXKTUhC6nnfGojZcLphuUqC",
  "key8": "4yxtiqd8uQyrgoCyVeA8SpbowXhv3XKKi64oLyoMuky9E7phSKWXRQmhBRTBEmpUNz1GkuDaBKrzWhmhr8Perdih",
  "key9": "2QqQyKAwUzrrmLZE2K8gm4ui2qaxnXcCkocTbvgU6UHvPZfBe8tgJJYqdcmcp7buZZD1tQXGbCj7wFptdrskBbHK",
  "key10": "5k8bs1KpAazTStRTETGoJDH1SeZEr7x17SHnhSxAYypYujx3suFaszJXyskK16CmeaRJ88xphqWSoweHLyzt8dJh",
  "key11": "2ZCiFVvtq1oUVNdy6mKRLzqwFKEnxWgZ8rqKP4RJe5gDa6qeCHg7kfkkiVRVbH5PbiJsvEB7Wxkcp7ZrvhmCv6Px",
  "key12": "5xh1XxB4vnZHhv6jeXiUruxka5eSoa6PWuHaatBz6Jp8X4WnB8uohCi8ZgHdLhk6i3Aubb2HYLLyLVqyXMFDAHLS",
  "key13": "4aNRgQMQMC2E7G8ZSEVpA6XYMAkHhAvNfW885AT3swdPB5HGA8rvf9JwTM5hXDiD5x2Ea3oN7RUmgUQzUgrAaGFi",
  "key14": "uCi8vSKxYzEexMExLUqR9vmfV51LUNYDCT3m2q1GB7aM7N2egRdoTjz6AvAfF2f9vjRkfG2Ztkdtyho5uXpzRfe",
  "key15": "3XirmLX2jg9NAz1i7DcfTufg3HmtBQjA5odbaMAAYH8kcBhPkKrw5MggMd5bBnvo9uLhFEqksxv2tkmGLSenaXU2",
  "key16": "r8VJNQDbKptfhG2FmW2bdQf9p7buKNSAbniNCuku2aPJvtJZJJ2DED33Du5CT7mDQbakfcqpjfyBqEzyVNCdemS",
  "key17": "5WSJKe7btLLKqemUDjuxghuKjrqJdBUuBme1KedpYqAPpksbVqFL3rSG9yGstawdYhmuWDMqNtFdYPWS23s4SmFr",
  "key18": "3vLDxzqPvq6bY2fc1aV59y9GyCvttS45nx1bSMeRxLsTN3KH2qgWGMn2M9iBj1KWPxpyhJGkeuYXKZH2Ro7p6kQS",
  "key19": "tXfytohpCzh7mb6s6vTUR6s1zvCNvUZ8CyjWEujincauENR7YqWZdHJBgWxu1XBabNBm6uik4KsxMdxEjou6Pk8",
  "key20": "WQPkc5DnMgUQDNderfvfhvqWZycAkX6z7hAzXW9aaS1qJqht1w9hvDGhHuiRYGnGA9tjZfBbSSJ8vKzmmKkMkdJ",
  "key21": "nQL7kXbQqTCBgokbVtnBoXLAa1gyKkgGhBpMpw8ymgW6UD6si6UTGMrX5CYJCYordH1wWG6AnzEde2Kb96j61r5",
  "key22": "7Fq1oFiqHwFvWEWACVv5fnRNK8fegvTL3WhDXFasvvfvBVTKHYc1cynKTFGWYdsC69UPapDPkpLfWCRncTgLQ6g",
  "key23": "4FrXLJ7PRqCuepQ9ru2Rd83R75A2zs498DZhqkcBe7TA8h47VDMHzQBmedrBjTEgpCNdLzLs2fXPGPQqgTpUhsy4",
  "key24": "mrgDpaFZ2SLWBYzA6YcvCbXQuQjJjaicdCxTpTvjPMaS4Xfb7qwuNeGB7DZKFqd1tvcppWwT9f4TTMS9aM6xFPP",
  "key25": "3jrzcZw1Juj1YsnDD4EJhLDX3NZADpYEZbbsVfBYT2PYk7FHzNuJK4QnXzrNv8XVAJvEVkVh6uxYKw2Fycp6vqg8",
  "key26": "4ZY2afcr6yHQRVUiJ4jiuoGmo81iXn2EWPaC8FMmTiVnwoVtK4bDWmyiygMmvEd1m3u8o5iSANnXgoDuXmGrAYLi",
  "key27": "5inKMaVUAd7EbniBRV3x6nMQ5Sy4FcTYKA9n4b6AK5ryRVhKTyNZAF9nqp2poBB7ELccedGWMYSAcofdySzom42N",
  "key28": "5YAAoieHGzGPR1imKtMbcf8nXzMwMt7oQ5scio4CPBeU48uoTq2uMhoNuQDtuyRNm67UQLTT1Wxq9C3aqohiSvo3",
  "key29": "RFiFssoVi7YHn3JmYTabRaE9vQkUKXGCdS5v7xQ4vVwMThXsEAAhvFqdCRB3bhMs5y6vSDTUZ3sKLQFu2Jzyo2z",
  "key30": "r8EQEos1Vus98vnsD3g9Vcb8SEQPjrb44uAmzu1WAjCrJdcXkSr4rsdfTJfWnkBqzLf7x7A51j49sU3H9QGftTT",
  "key31": "21iR5mwHW5fT4EWVgArWbijfPvSWpo6TwXm28sutm4yLvtzLhvt8dsedUVFd3r9MsX93SbvYprWNX1RG8KL982xe",
  "key32": "3rvXA3r9JMPRBB1PBbsYdyvhgKwdKy8Nmi1FUUSstjqzgbiLyxnNQVN963opNBPoYrta8yfy1BWEyZwWfLdVwYUd",
  "key33": "Hh6XBsLcyJHqZtZRzKBgNhfCnLUGyBvzzuK8ivygejpbyuvhkdK8NDjqMZ9Avkc1ZgqsCbR9waQvDHzxY5YYv8X",
  "key34": "3EcYePfLRGASXcyfLqkGuzCKoXQ6ULXadtRrBkcCB2MaJsGjRsgK2SfJ5fZ6Gq6HZaV51kxg657BP88io4i3awdS",
  "key35": "3NY2REV2foGjLx7JAS7NXGohnxBnH7cfatG22ENUwe9MyYyc8yxra5fiRiQNTXaYJd6wiFdfW7yWrEBaPBoMjKF8",
  "key36": "3EGHhnCozFVLm6fEgcxDJrbCMawoeLgkgTsT32toMg8oJN3K8CDuyCL9iNsALZ471aVGtmzyCmwEmPgXDeEBb6Wu",
  "key37": "5ecZdVJWuTnfrSF9rVXAjaEY4XpLqPHcNXkz8KLALZbRR42Dd5fSKnbTYsfdG9W9B9BGP7TWvgddpVMsBf8ZGSAu",
  "key38": "5DX2dMHutCnQo6LWtffcSZWWwQpjc771sTPQHvaH1FrV4zp9NEZ3YSv8Fr1mcmgc8jZjaJTPmdWfbdPfM7x2ekT9",
  "key39": "2hDHvhGa3TcmiC3pgRu4v5sSjLQe2HGYZoxBudkj9ppTvzWXDs7Qj7kBcg38oDj9bVGomnGC2cScwWcQKgZXv8Ef",
  "key40": "6136yAq7P65yZXhDAZZkUFmzrowe6GnAriso1qqDwrBU9u8WvcPUtTb9dmG2o8bkR1Hix7inic7gogriEJJdqGND",
  "key41": "2sAGsQs2GsAWQgDcBwzYp3GwsRhbwd4HtUT4wjSX2KBBo2wEDiUzMVdPocZTJ3EHfsDMuyM8UnDiG5tpZWHsBbjG",
  "key42": "4GtT8Dwgn39mpcWt1H8rND1T3n6tCJJ3Xiz43UfsX7JprwQW5KH3MnFBS7uRFKhdgDzkRn6LC2wF96f2d6ji49fd"
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
