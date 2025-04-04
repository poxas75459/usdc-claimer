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
    "P2D3FmzRKoKjzSH65Tzomz8CawQxNtWfFadLFkR9UTdi73TYVWPs1Bhq3QwmKecwNAgyqfrdYzq6QcMtRS1Ydm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S7i5J6z4Wkbum9ktp25vNDANy878zSvjadu7HP6ZQFHQcFbt5s4L1EgrDi25acsmxqeQQ5QWXuXstQJcbhGM75i",
  "key1": "4capgzQLLm1qgLyNcj43xYGW3VbGNeUM7w8NAiiFjpYrSRtnkg8FHSy1j3RYqweyLr3XdgBdaLs2nn8td5Mt6JPw",
  "key2": "ZY1RaGBG1f15GGLpKou5Z41ykP91PF2zuknmeeaEpwMVF9kVVVqxzB2ue5dj8iBWtfXzuPGgWyFqqTnBBo9ZCqq",
  "key3": "5Fgg4hTZfggQu6x7wcbmJr4yALFQg6cH4QKMgWymc73b36Cit7t78smqSvvL6C2UT7bpKV8tLifRxsDmE72zEThf",
  "key4": "sDutj8A9g6q3e4hFt8wWrX56Fib1HHU7LzV9iqfhSDyT9VkgzekRB49384fjh7PiJXGS9RNqAQjpyq7g6eHMxaU",
  "key5": "qMyEqQXF3b4771Q5sNN1R5uhG6dCDhbxaSPK6kq4j5gryR6WuGmceqvsMG9uC2KJFshj8bMb1RzT2JvcCRWTCjU",
  "key6": "53pM9zYgdBTradNE61Nur6RGKWdG7vVmjYAoVLKzUG48zVFLkUuLagrwqVqbVpHxzYBcg3SwKApfZAyeoouq791f",
  "key7": "5cm41j5W3eWiBcrjSADngUb24H3c8dbkjbxpXsKFSE4iDv7Uh42R2us3qwaEaiagBTzzmrHN1CM5fnGyZUdVHEBP",
  "key8": "wtux92H6YsxdMVdRKW9uPfJYiJCK7WcgqxfnsQM2bcV5LVtVV75JK5iwMkntqn6NkEQ4ZkrG9eN3jYPjBSCK7se",
  "key9": "5m8wBkxidWmYBYGc7pmvJNN7E9RhmuVxwMWntNUhYoDLzBHBLfkKXmGJqi9oLYLSxUdY7FX2oH45Y3ZAgAn41Ana",
  "key10": "5n6BxodgHCTEk5hgKHqEZEaxCFerJXAw8Gotuj4CyRsUwWjSGoH1dy2fSzYyrcTBc4kG3p76VpXAp1jkUbd43jLx",
  "key11": "5FhYB76SgEAbuQA3MmU2Sx16mnGvqdPorG4GFvVtfcB3YMA39bXz63uqN2E1f2TuEHZUm82JznCgXDPfDfvyvNoQ",
  "key12": "BF1sjuWYvy5yqwEFPk7zWvvcE6ndhQYRKsXyFPi2UGWh8Uhsh4efsquQEwmgraCF4rYdY31QaJqA3Nf1u6XhDBU",
  "key13": "2q2MHBN5YgiRbHfEA3hjUXsPKx4PjhJMLygYogVGWTj3MXdVAcMMvMJPWGZAHotqvV7eLE1pprLa9RDgg2YNnN16",
  "key14": "5c6CzVKo8RPSCQwp61hag2uM9UUjeoQrnUXHzCvheFMNbcNtbqwunEiQCqQrcP7Z6tjBKtKJq7aRGYghyWn9dCis",
  "key15": "2UNuP9S3VW5cLEkbQ8oNWTSCPmv4XanaFLjRhnQytGHbZVtHB6udxxSnRKBFwknGrfZr6cruFTRX5j7oMNTT4JmK",
  "key16": "2VgMvo3MUmypA5eSGKqAYTfdncNPXMDD7xxtvVwWwudagYMggA1BBXDZKAD7SDaF2WUonfc5XigMKk1fS4Zr2HFS",
  "key17": "5m8DXgB9CQsuUv1e2kr6scVDRDtGFD92bjEDj7Q4EJYV4GMJ8U3agyKZcoGez56W5eMf1FePEJiruhpSSZYDVuTU",
  "key18": "4fxuQGPibmr3uZxsgGSqVrxJ4QETLw4S5eqLzgjUzXAVofTsz9GTSmG32EGcqSk4eE8PTGGwv34t7enJRtsg3A43",
  "key19": "2x4G6d1WmJVESnUXjphQM7YoCD2WQQteXeDPiQ1hrNptgXPFnmQaWZBBbKWcJBavLDsrwEaaHZXiX4FPYQ7RWUm",
  "key20": "4tiSyY3TKytsYZKMHkj5mBzEzPrysBZQzNemBQKPPphfNsufj8ck55xDL6ezSCHZTokxmQjjHT5ZF7RnN7rDNQiS",
  "key21": "E4xAokTagHXoozdJks7QX4yyKFxr7NGtedx3ZjuwW98utSau2EFXMP3Kmykzx3hWXJL9rRExJ6CSSQYhkNxUQmb",
  "key22": "E2XwkxrrCmAmQZbRoLUZZTYk7SVRJfHGBaNUryzn6MK4por1dacR2UG9WEYAbZbMd3imMffuuGod1P9tae6wrRt",
  "key23": "2gYgeVmE8odorsbd6nMcn7KLmaYYbwKp6v6YRNKVHNWZaHEpHvjqWUMwP8Leq4s3Zvk7XDG4WkNi8EFR7KcZSJGx",
  "key24": "3ynhGoC399313poGPjHBMAfMNtV1dDVvrMB761rLmVrsruH9H1wB5fGUfQXYowTCMKeywgqgXDSZYiWKrNBecwVC",
  "key25": "5xDyC4b4Bn7oJ2SpPqC96bVpx8ygYwVbZpqQS6sYxbFJpd3ymtprJseLWcphnwrwjtFaWhSoSmLGGrxxLRfznaTK",
  "key26": "57zfB7LPuRAHJX8nAVy7ixCBcvjdv6dcJqrM38XgjeWcPDVLWUPZ1ifedBZn4Kby7LuLypZAfgMFgn7ScAxxyPqG",
  "key27": "3eFfyDd7DEfzGvpgDEkwvDmrMwRJVjTkDmzWtRLiBrq1AkSv57DYT4nsyEVeo3FbpLj7eFq2mdnu5iTqKtwycX4V",
  "key28": "4rDrkQ51YcwVwkmxwmbUYRLgTDBK5Cn9dfoHfP2AAm2Pr6YwYVB4rrKPeEs1BWgowttKSUuFeDQrueNdpwKWbYX1"
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
