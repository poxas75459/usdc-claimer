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
    "bBaYBkw8RmTySGtrcY2y9VRiELituF8jZp7o7NZk3QrAaoGF8ey3QzmbRr4DjHR3VcjbB4xDqvPtKvajNSLbFze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qypAWnZzHUdMeXWUL47PLJXsHrsqx6svvz1PQrgfVosuFDQzqAnj7mncv3RCfJUxB2Dpp73Ss7cSqdEvafxuYh3",
  "key1": "2H5DQRBi2tyf61Z2cnvAMvmofhfYuxSaCQzUcCypJ4tTH3mnevcVUGxsEnkpmRTFLkQ8vmp1JeDpGwYs9LtqSxMu",
  "key2": "4ey18xFJXYfPGVn8khEKa6wzzbjjWgLGLeQEAm345J7JbQTRutoF2qJ3pbWQUmfHrCrqFydsyqrdFmFa8RM9xeFG",
  "key3": "4e7dE7c8zbHjqCMzSm2EQ9bEQXh4bYLKDQgaYE9LtA7e9Aj9Bc9WRM7h6HS3zR6vhz7mEmAffZAX87JeqzBwn96s",
  "key4": "5WJ4M9Hqk1if1jo6DS3jaFWbJoDy3GUtjajkUVyF6vtXUuJNjf1bE8q2KAoKGjbVuukho1xFQJoe4WEgXpsxWQgN",
  "key5": "3tqSxyyi81kCQNNvKPWEXcZda9dyGTdTRrJsXs7StMAb983pUWSxWXxrWsoyYun7DtMyQJ7rrndEp6E89fXFHPdt",
  "key6": "3FpAbGbL7YJEF2RGrrBnUEBz18MowezPLcPuukKKXyU3LxJwaJ2pEvYYGtGkxS9hPGCVnAEjsapAp3fa3qbrffR7",
  "key7": "63zy9jWgx5gQzVjWFoNKEVt6skQpxkW9fb3FqbgP3skhCULyNTc4L5SN1dQhmUDpv8Gmu7snH7VkvtcbWw1PaGar",
  "key8": "HRULhywcvLf56BWVjhS5GsHBk8dXBvYAjRGcJbdkHNNriaLxFAUEh3Wu2Qomyeo463EVJgzs7pFV8Drfdqt5Yrh",
  "key9": "2giDzNJKzfAdko6cEmQE4MPAUSqiYGm25UEZsGD3UiTbJveWSQqv6ZXWER55nTUaf2sh3ZBrSn9Vp9z4zjT18PeP",
  "key10": "4MTzqAmSuZDgaEKoGQFtFXmGFp1rnoswmvRuBZXFaWhf3Sww3Cyzv4qztoopzvhCGbh9BfcufLBNgVAMoqnh9ZHp",
  "key11": "5kihz1hkwP9cbxLzuMFd5fnD5nxtscnadYurwFqKwbWuhSrbDGwfd3XM7ti3eFfvTZy1igZwV7qz5DbhMTP4KGuk",
  "key12": "pYGoe4cvEgmv6SkaA58BStL6R7MCkDpniRLkmyz6dJnhR8airE7DuRZjYbF1JBXAQ1W8L6LarZKycRcKcPTfMZ4",
  "key13": "k2oBJihd1zqsEPnqBVX2UFG6VQU3CPvhJxNAbLXmaMndQfhyJmBaDVHdh1Qqvtdh2sLEVvsQq8gJduorNWr1qyS",
  "key14": "4sTC4QFbXVa4VUXXbr7f7SQ3qSon1bPZk1T1St6vqD3nag3ybM7RkHjysAjj8mgXkApwEdjzF1wPTrBF6NyYTDab",
  "key15": "4bytfEZouRsmYzbkTE1EUxcgniEniZ56VwNrjM8qfVZr7s1Q95Zz6FGyi338g78Ri9cSqXdGnW7tG49KWxbVNuo5",
  "key16": "3nA256SQorXu8TUbqLBDLNNj9afbNftG1den3hsRMP4SZxoPTBkQm6CPticQf3g75zGmRxkHgskpYxfG5ZSFn1Cx",
  "key17": "5at9bnSBPEd29bsGBidMgVE734jx7ygSYRWVUxATHurijByraJSo83T2Wz74DxGc43b5LueLXk34STbBGtJcy3KT",
  "key18": "4nABfwVfTVMwvBPPJSj65TqE7g8EsKV1nWVDRaNMvm8MrCjHwYXfcFXF627QNyrGiH4cow62EkVou1pqpDnBNo3o",
  "key19": "3421EewTFWrMfEt9tEs52uTM6mgQFbqGRq5wHMA2K42nFRyKFDyjVeZP7BcQ3WH9zPU1sQwuea2g357m5ecEDn7a",
  "key20": "2qWkkuoCFqw6FcPPfpoNcFVP4pxdyWLbRvW3ZVmxoH4Kw2zaENiR8X33SVjrmaCsfxekK6CiJRmAJbFt2FKUd35t",
  "key21": "3Gui9SjqEYaLviUQQRvv2VwkwkSUNE7TxaU1ezMAzmScUcye8JcoteLZL6M3Pd5N8zXML9RYB5qLuPGjuV9Kk4L3",
  "key22": "2mhZQ6zUAz8GmyDrqf3L8cMAcbrfuxfbForaAZAzb4J5XhLpAEP2odzL4isjfRkNuWgs8WBfpUErC4PKbSo5KgfE",
  "key23": "qVACzQM2bCpK9bu4fSDS5YuC6kFjGRwuzPffHvchm4n68Lr2yMkeSehzpwxHU4juFZssF1sPsmoiGqSxw7bzXZv",
  "key24": "2ujvLYHsm32E8Y5aZotQpsVUWwHLqsq7Gu5peiJfaFFrs8iSvxAFrj8dpc4YUm3mKg9tWHNMRmfNyQZEvp2DccuZ",
  "key25": "4WQWnPpSBAtfTu3TbCYeLm9sU8pjwH1LPK3qKvUKksXUUvMEs7voKH5N34znNNHRfLv847JSbHzxLaQxC4VVPrQK",
  "key26": "2Fm1xuARgRMbD7LWqUhvZPJpoMcUQecsJqV3XX1M44bxLfA6pWtv66EETQ1tEXzxvFtVmhAiHG2Df4ywmdks1ukb",
  "key27": "3EpCtZ6b4vxpWaWE5sMtjscMJCn9pQNcvUcB7oDXiQXxq8sDdoL9WV6E3GyvpwVjZVjZ3vsN4CGfu47ZhetnorPE",
  "key28": "3sVXHuHAR5JTzSnEQnaY6tLfHDCQRK2Q6nNnsUGmt6hv9RpSmQ5XRhH62ZZn4gNwJPYhKoKAuKWUFtpoibNwymy5",
  "key29": "2n9agmCshBzK6v6e9BhAkPnSVBPugyZPqGMg16kk8UP4YFiGesdv4UQpZAnond6JFcW7YK3UJa3JR6aWZJiTg8ZK",
  "key30": "5ZkA57Zvh1icndo3tQhxD57A74LsBiy7dEbdgkEKubgrpWQjXqbYc2HCSd2f8xmYbhKUCx7vvf3FCRQjDcc8qtmS",
  "key31": "2RrLtsNSggwrWjJrStcC8219kPYFcQHgWFsH1Uzx5WZQB5dn7LgsU8Lp9Z5SWzTK7C35AXSFjUnKETtLoFDoQmFK",
  "key32": "2ByD7cH42Kxo7DgsZQYhV1n9F39exZpE522o9DXRbhApQBfccgX7pZtirXferKghw5mKPwwkroKinEApAfvKtMxS",
  "key33": "49oje9yAViMEM4Fqpm5ZByXu51h79CLdwWetLnLfLbAxJbDAmSSJbXBR4sMdsatDUrFVhkN8Ydg4E7YQd3APKvut",
  "key34": "3HTUT1aHkvkyAvpddwW79SZA1jLDsNzMNPPps9eqPUvdXPyfDtxHfBKQWq5EgUZb17KQpCwcLgc3E5DbVuXeHtQ5",
  "key35": "5ZCHL8M162nopZ6LCwJfMrpUGaxrELSZx4drmaxFkf3YEgw2vyDnJgigQVQQezevhyFe1Z71wjTvCmvW9tTGvGY2",
  "key36": "2i8X4NXKTxxsUMBNC3tMCAqx1A6zbDsvxYgN3rhWnGNnACXzSEYLCtHX9ZSJbzHhcbFbAUHs2dxvc5iPj6p1Jw7y"
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
