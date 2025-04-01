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
    "2kmp8sAGJMm5zCfowmsAXXFiosF5HK1vZmGBcjJSjWrdmkaXYJaCDAkfuys77oA5ChJedsdntJQkZaAAvWSHYTHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9cNGHuMtRkytdk6K8XMNATiHuf37tHmafPeJ2W5Trnc9NG4KXCxiWGbbiWVACVsPUvGj4otWyK69oRqyDRjBvz",
  "key1": "5ZcB1EscWzVLUqTLxYG8VF9mJtouCGPEUTcQCqeN7Fh9U14N2HbMenjjBxBusc6UeuY5nAr9MgxYc4Q1Kdj82Apv",
  "key2": "5725iw5BeB2XcZ5ssx16puN529zfLsFFutQhwjJefooS2ZZ584L1YiBfmLyG9DKusDAr8KJ7SazuYTsjL1nfETzv",
  "key3": "2Tk3ubm4GpXvdMFcuKT8LoF9RyetJCAb5YjNZwqz2vQj19MF32SxAuz4mGoVGtXiSdTPJwgEkxS93QoqYHgbDxUN",
  "key4": "42PH37e7T2iSbDsRmYYPhQL9FYaDrPrUASfYsqix9YQRiaYAkUuxwgT1UuzDNJiYVWWpVNJD5rfXXGv6jxibjbGs",
  "key5": "641B58b9NxzaABm3mrhnxT8FvmfUhrvoZ8Pt3yj9zY64daEQ3iPzm3YwUrG1LSKAC981aDfX5UZdLbvoQGPUTeEF",
  "key6": "gd1DmHxkhNUc9V2A6eypGyjEh5UFXA3Rn1Uu4hcDFdobPTzgXyxuLKgSAMXiNVemQWEJL9oPHpBSwoWF7tBUQma",
  "key7": "Xv3GoMmJnewoBr5cC2RyAWWvUfcp53JFkwU2FqzhEVvd4v2vvoZsHRde3uzK1obeGc3eHV3dedc7rvsCXSzE3RD",
  "key8": "4t6YH8WQm2eVGAaJrwNFWhnwAeKgbVND88HbHXwJbTukjUG1J2j6np7YqVSN5d3t8rJVbhQGtSzSoc8pWdJ2jKDg",
  "key9": "56ymVeyZecawuYEq8APMMphuufKbyw52A6FAXHZp3HLnyghBszAr2htX5kPdBNUDz2xXnqxXctJaK2mMcbpxTDEV",
  "key10": "WJ6bshrYvZ3k6DX1Pcu8Z2mDJ4wtAwnWzJLjJxWLxrkm8NJVEpi3LkZw43CEMSLan7k6jAQt3c3iAvz2G84yiYV",
  "key11": "2VLi4kfzh8KPrNwpyCdcgnoxxe41SuZSnYntnU2MQB1faT5Qb9eq2dnQGqsRwYAuMcb6mtrn4wKzWmtrfrMC6Pd8",
  "key12": "3i5AhQgx1B2oDzGJpbmdMkPKiJUTgHE8dqGCsZ1q1gBDajHMaWQvaXmvXnrswQuv1MK42czQ31pn42WEhj6XRaar",
  "key13": "2Gmjmjw4AnksMkciG2H2jLvWAapRjF5Kc5UFNUqZRqRF8TzA36wp33hhbUDhSApmZapzHbxAy94eptc9JawfNgng",
  "key14": "RAoUgpwvE79hz1zLSiBSS8WerUdYidQ3gsWPnsfLABe8xTWviB1uwn4q8AwchgcvGBqrvMesoPqd2EX2iMH4UsL",
  "key15": "3f7WyBYt7ydwB13g2ZaWaBUSnFNSoFf7oK8kgwpUytRCndx3yXJNQZMdBwBG6hadJTVz8cNj6H99b2WKCt17mwcw",
  "key16": "2XMh6uymunuKW7whfEPG5XodUmo4Qs99GdCR8aEFuYUuYo2eP5karvfKK3Xv8QQ9QYViMFAzvsNcnTZhKG5iTJ1Q",
  "key17": "3R55u1f8KhYeMFzr8CD9DrjTww9xWQYa6VgEYLREBgN4FVuuLjeTBELriNSZUfezd16e7VfYd59Q61K5zoAQTZHQ",
  "key18": "3tWpsTHwJ4NGDfcjqKtxDxf5bNq5qCWvZSkumBhxJrRD2HkhAW1mreAaPgo4i2B77rzziUquiZRqrNNaczHvxGsF",
  "key19": "LUsgrNNpXKtoK36Nsi6i2CDGK2HTGXfVwLsCYGPRcAWnFkyd2sSpjuimiiajM7zQBmirnafSQgFgjKPhU9pQtA9",
  "key20": "23x1fRvLesDDoxAghFoGTH7Rt9zMnvmsv6qEJ2V6kBZGF8JhNKEN2MZRkVomzr8ZToPEwXJ4CUmbewpLmWSZ3up6",
  "key21": "9tarFnNNghSzFUmcQ9sEtMctoLvo3PowuG1X7pAxqFFf8dK2xbtF8ALaDX27UkZyXjn54nBLCHgzn8UWntfygab",
  "key22": "NsQyGuM6uCdTXrVGB3M3a6D5zHAZt1S11hcZoKpAEC1Xpoc4bpRJhWDPeAtt6U3LqUKGSCN1mRaSxY6hvpnRjrf",
  "key23": "7ZsW1Yuyae2NWgF6cuzt3CZXXLk5M8GFMuXjqCvgmSHVVZaE8Y6xghZXXzBqGNXJDQudb4mob7XMn3D7WymWf14",
  "key24": "3zMhHupU25oykg1VAwbhe8MyaMuJeTSCHBQi3azrm3J3kkqjfSVwdqnsQmEaksjQXCaNTRrL69biGsfGeYKYvaDu",
  "key25": "5kdT5JUkXGyQ5EJLsN6bCDx7ZyLFQjMC9yzarVUHfHdVYYrVWg2vFgp7G9JzppR3P47UXDhrNU5kaVgeKny6n3Ht",
  "key26": "3PCNpj8o8S7R557UMHWurW25XRCz7TmBep28XY48U84VAzbTsNNy7gpEAXswaQrY8F8xZgNmEGetWAeotA3StKL6",
  "key27": "5ev5mZ3jrMD74EWGfZZwuvWjKsNzsRrwvBaWcVgnSSPBA3LNwByw5s2xMJ5sKkRJ4TXSEVAJh9hBAVTFgegPLSeD",
  "key28": "2eLFMtP3P2oXRGFGeZyR5gmbAc3aNF6AyEj7nr4nRu5bL9ikshDBPUGizQtp8nCqo6o93bdHEgQrZ6NPPTTA3SC9",
  "key29": "46eyQuh42KPKsqc7SH4nVMECTdRgDnDMR6Vcz7eGCVRFywYWVpnBBz4bqgxfkdvcJ8Ng67mUTy7Y6f8suGSjD6AH",
  "key30": "5qH19B7pV7JuFQyhupKSADViDaUtzyjdBM8YF14GvN92Vqa2C7AyiUZT3BZks7s9yiMnJHVV3tzWwRPVQde6rkG4",
  "key31": "637wATwntbRA95FCzNopo5JS3VWiDqJWHVrzAMgd4UJYUBSc1th8hnc5nqWudzqqrDzxtzC8vNWJmAw7t4doVi5a",
  "key32": "5i854UiBNuwLKsp5wr9WXbNmnDjASxxyNYDyk5pmwmCCnPos62tsJPrX68Tqip3on8FM9RiRcgd8HAbcLzcESiZ8",
  "key33": "3figaXuPYeoFg14RPyBx8Jq1sv1hxuH6xk4QU7hpAKFGuurrsvyqCdPuVmH2EPHJtC77nMKjvfw4EvUq3j2rqaTL",
  "key34": "9ELuZHGXYBN4hqcKS1dzx9H9wQQd8wiTCAmdB2r99qt9rLGe4FHb2viA3ogQLT7QQvD2phkE6M88LEyyj3hzswd",
  "key35": "FUCVec7YQZTNhRizDEXgmaqn51TrBc8rRDYPJmcwtegLoTdegVs7RQDuJeP99gjy5GAzDXKCwtpwgM8bhKWqMdy"
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
