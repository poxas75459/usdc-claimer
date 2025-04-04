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
    "3aPT9ur2W4f8UG8Vw5w8a78bJYjteAoK7raovSGcpUhzgxeqZY8RF7e5YiVk3F2cBPXJ6ebGwghe48uzbz7i6Fmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YxuR5ruiJoKr24NHKq9LQkBVp2he8KcnMty2Ff2ThXBpbqVqGwxoi2uTj2VAPB9pGkpcudrWySwL8Na2vrDwyC",
  "key1": "58AmmtzNAQcsNYwUN2w1ZgD2cQAHwd3LEpotsSHw48ZeW8KmPSQf7KSsbSVVDHQCh9fEpshHcRveA3pP7aLRBGmn",
  "key2": "4aw86x6UHk9MxWAVocTpAM3U4mzk7TyEkz74WTZU6LiuaTSEz29sqQ8xFhtn3EGwP9SmTezDHLcULYVKFsSRa5C8",
  "key3": "3BHDowSgJHrH6AthhSwfAzCLAKjoTdtmE6t7t8dVVqSaaUJfWo2DcKtiM4UEKd1Z2x1yftDkFjfVmRYvPqFT3Rkv",
  "key4": "2wzPLFx9jsS8isVnvXSnqHecjYgUAww9gSVCDTye9xNZ8hJb855NCa18fj41fr6tzDrJNBVQrByKpjF3XEnjiTNi",
  "key5": "4KeifMHjpXWkDcoQnoPbBtRTMAyCUhA5DEDHcecBTLrFqk5vApzXkV2XqtaDnpWYGVooSVzQXZqKtEH6s4YDwaQ3",
  "key6": "2sySYGQzah54PqgU6tgzeT4FHz5MWnZ24Wjg3SUM6rAEkQQY5T3wLQUJHXyxAGiWMwgPD9RzP73MeEhcp1EtDTx7",
  "key7": "3TivD5rKeafGjCaqmC3f9hw9UswwkogiUPQfoxC9rpGRECakSAJhQ4ZK1aJi1GVRU1eDquyDq7dTFupjRDiN89qb",
  "key8": "24ucGSfUniR86Gw9HuaJC1ruT72yVW1tVQybkHnCcGwaaBpauAQxZ2KR8QroLP6ufpL8XGncSTkuU6YR327Fqsgq",
  "key9": "mzdjXLHzeNyJuTnH9eDiK4C1cfHY6rbbjPyCQGtFA8oNMyBSs8hvf6V9f7kL8enXVwntUmD2Qx36omH2mSeWeaS",
  "key10": "2pe8iLjj7jpXYCtpF9AB1Rh474SpoejV5zooEgdy25KtT8TXcLm8e7Ms2Fm2SssidTh9y8U7i9cGw483yuJJC8Jf",
  "key11": "32aoVwzEZBj6j22d1aezk8r25XiPMw4aFWcWCXmTHeCZoFUCXyyTS2UAwqKYFy1sYwbLEBmyt5cKVSUSJDk7CiSb",
  "key12": "2bBvFtpw8qmhCfYUBABse1h3eSKEnQVxHNkeuvMpTKB2LzqiwXfkgKLuLdUEyEALBnPJjgGqPzXP8bjoHUTX2hsr",
  "key13": "9JA1wEpjV5d9XccejntfseYQFjS7XwR2dDj9P6UdALpV9WSSS3s6odUQZSaWPvdfFMJrCwLv531MGeSn159HQd8",
  "key14": "5kcQHjkJak3PXLXryTZpAiZxjj5sWWHLwYHcJZA1ekg4bXKv8zEK14SQsaZxvfFyBMRWdGfjw9FRZXhRWR1o1Nys",
  "key15": "5N2PK9v7bdscdYc1rSqxP5CfLHqP4SUdieFg5JXV7vXGaQQ4VMtpfTH8q6nm8QLiP2AjpHFShNB7msdtd9CcvqwY",
  "key16": "ezEfHE4xg98t8UwV53AwZduUVGHim6tjAPTCPNvLE69iybP5SYeYXKCsNUVhGRmJwuwSck6AKXSQiRr9zSS14GA",
  "key17": "4mMVhFEeZibmMbnh1LvW1g11Mioa3Gg2T5AkhcxCzfNWCZL9V8HSt1qVGWxLsH2ZJsahouRHBN772MZSWcmM8J5e",
  "key18": "5rwvashp14TrG6AZmB1q22DePxVN5UM75HfqoXsM2uDmCxZ5kYjiocBvQYGLN9Y6VjZFWQ4VTSX6cYuNaDMnRZ5r",
  "key19": "GTcFaosv8oERXz2zm3QsTsvoCdGwCpe1jTBiwphfjKAhBCV3mX28tL4uaDKHfG4GhBdfPdZ7Br4QQmysMh4ToFJ",
  "key20": "2Yx77oZQPWjoSg3mqCKgXyRTcmiaUAewzNHgMdkeKDzRQrDBrPkNztaqd8yowGE8MGhDgvn4eUbmkJnCqE5UoVdx",
  "key21": "f5WTX4t4FRSrz6KpUtdeTtAdDeWkRqkXL2rmgqwVW9EhQbWRF1dUAjXrpYdfdEcujuvUr5LchJAqvfjenw3DXnR",
  "key22": "29bn5533w3BMnxaEhnUP33xzfKJgxux1AXN4QsWLxnnZ5dbQboAoavY9nzYxFSU56roVgRDc2Qa3po5V5kW9pa78",
  "key23": "21MeXYZQYAErnYqwnV9Rz32KrEZw2yq5isEAeqzJkZxKhihuEvWyajr7rfMKZwhLS8UaKyxs5Wka4uBXgxYwKvRQ",
  "key24": "2Kncm622nzWwrTztj4o6GqWYmFjtsMnep3KmgXLMEiHZM4w5JA86gHcUaJDzHCNqnP2bjcmbnmVnHVVYXQyuSydh",
  "key25": "5BgMCvbbSaAo7dpMCCZvYHYqjHe4AzkZUDiNBRn8fNeBkwXufWEZWr4JVAtg86ZVa1DyrZBCWgs9q8GxVKCKbWqp",
  "key26": "4VWUpifbV4r1wcHQFxk8YFpez1PiWRjKDezLtFRoU48ZGgxJTGVRzn2FLLvu8JC7KDqktH4NbRmQZx44MWdYukHf",
  "key27": "2cGLqsqw247WbyrLsNnecJ5UrUMd8qM3BzKFuV8VNqK4wJP1J56u5u65QuUvsFnHbNbLj6DY7F7FKaC8hqdz7Cmw",
  "key28": "61b39YJR1ZZDr9s6nKSD8zDkdW2y649rbbLPj238TmRBhEHcSbKhibjZV1JiFBhdN9uPbqjHATMFZr6dWCejX3Hv",
  "key29": "5jD5iWAwQYVRSMFSAw4M9PR2tzxNjXSwzyDTgGvdApJ3G4BqBaXJifUc4MjwkN7sapWDeWrDcAXy31Y7mPxBDLtM",
  "key30": "5s83GtfWSTXxg8EZvDuYBf14NyBTFxSC7TfQX8mqysVnfUq5dq6At6WKF71Yan5B3RLsMdrcNtVBtskNbnKAKYZe",
  "key31": "8Yjx3caz2ETy3kvcxYEnhFP9MPmQGxh8cJbGJMBJXuLwwbH9Ybavjf4mmzuCWumr3WLQC5162zLMLjv2PXeUpJm",
  "key32": "4ixBzeKeHBxu28uTRVE4Ln4a1toSJWskoa3XCbbgeWUzZQkth9XjsgP9qWXXG21CtZiRUPJEVZoWeoVh1he8LNjf",
  "key33": "3WjbvuTVvybG2H7tm36Gw6wDHao5uRnUf4fq9iTAjgCxc8qBbXxVtMAhePSdTZDTNtTFiSjYE1wtUPB6PmUrWWM3",
  "key34": "3pSDB2r8c9hQKJ61jhagFigxszc6HxtbNeJDBYatfUmw4eZEfUuHHgS7XDvhRWNhGcTojP3vA3Zi61JUxKHPPNkH",
  "key35": "4uGXx4VopTtJartZ2hAq8xedHXUtQr93SNSQwh37f67UnyubrD3FyQTbxomFZC8A3xxiCGLZqTbFsf7kW97GbxJo",
  "key36": "4zaEEgNfB6ffpid2wsguNaCZyuziu58Dr97v3ei55538bvUq8HTfSw26LSPZkKtUoLTwehS4ZSyBoT5ML6y5oyW2",
  "key37": "4VBCCYVJUeBN1zDaxiwc6ap1cV17Ky5VbRRsarJ2Hpj5QFzzPM6tTmW4y9jdPJK5uXGEUazgsQin9frFABXp5Npt"
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
