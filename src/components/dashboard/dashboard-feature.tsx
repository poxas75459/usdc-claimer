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
    "4xnyJj5Ppy7TYCc9gyxjeFHnL3zEYMjDPey1LPKTWT4H7sTVaFtmpfN8E2XtSxHFxCFp1PDrvQPrafVfHNzxz1M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHzaBaP6KyUz6pj7eKRXMXbzSiJSqP2oE79xQBwT7Siyq9jSmBgHQFbmKfHYNKFpPqKzWGsy1VAYzkDFTg9DL21",
  "key1": "4cPatafN32ZKTTm6sTWJ9XCxcBLfvrYCXmhp7rCh92KwDcu9uwXsSeMEcWRycmkqLTYQLwLyXAmXxfXm3DS3mH3x",
  "key2": "3qbkeWt3g33GzH4tiPfoKoxU3XJhp3nGC1BVG9RSXQ3TzFZbA9S4C5wtwHiHZjwZHdZZhfYsscpamLJhtb7EbXrU",
  "key3": "3mAMyHvWHz2kJe9U3rTMsWMCDdmbLJKatnZU7SRbdz5UqUeM3qKFMuVQYfqHR9nWp53Ja3SQ1BaW13s3fGqa8SwH",
  "key4": "3krWvr9QXZ7jPev123ii6hicPFpWUkBCuGj4niLQMcKyVCQ5Z7DHFbukKaQtoLSXzkd4jNXqAUEBQdkf9UUkCmGC",
  "key5": "5UewJeRv1PSSKGfTthJybHrha2XbpDiXhLoFUGJtWua595yysJ6NLbiX5XkbJtURm78Bh2Np87whDQ4jDS1Zjvf5",
  "key6": "3dt1mexnV2dZcDx9TM91ZVL3QsYXKtCrXJM1BPjNkC6RR5rZQrhXNLh6vjFgscnXJFkLwaatQwiEnZJrYgziNL34",
  "key7": "4wV4iYRjAntnuo6o86GiTwQcTdCnaXGrfrxzkbvmvHZu24SeuXZ7mjDzYtuNioiMQSxMQW5aBoyQHNkbReNXmusA",
  "key8": "3zZoQU4sLv4SCLd7LA8ovE1HNhbmxHpQvdMq7rDvtfzzX8dXncmXfB9ruu7nXGtWkdb5YCK57wnLfXbWTztu7pid",
  "key9": "2BTakyiQJ48uYdE5nunmDs65syqfmZBpMpJSYYkURej1QFmh8xJk7VcmFUTJNT9BEBEThvpU5325toyr5BZrfGkq",
  "key10": "2phj8YHophmN9wdTArNJTch7aCmrHesmY4n6CGTYTtPi677GGePSEkBqPmNaM28vjnhkLgfRJJrKWK2hodGpbNpt",
  "key11": "2Srk63rPeGREnZ8hNxfdMGYQHakatAL5MzJBJTWJsXKR4kHEm5QfWH4GqEjpKSfHFWGQJ7CdJX12f6aRx8m2Kwj8",
  "key12": "3M3pTkvXJnh31bqw6qqxa1a1VboR8VQoaKgsPXKMPC45ydFxq7ZyEERpcGkGmp9j6XfZaHkz3kgsigUCfmcZCRg9",
  "key13": "D9qnvWbVL5x4pheeNHrB5uGJ3UtbJRNsoRfNFrJ1DmrEt7DWriU6HtAGVwEWYQaSvd9SkoSTfzY9ABP52iArJaq",
  "key14": "2LTE9eB4m9ixY1GpXCPmwnXWv5iHsS5DmaaXky3Bw1y4Kvo6jYKS1yLgsfdPnvWkwpqHfhgHPuDnjQL7QWmz4asN",
  "key15": "2wCLrFrx5ARN2KyBLbpzM5E9yJZbswsvHdvJCbQj9bksfZqEir3Qbm5uHbpyJxYpomA9Agfe5WMWapQyghuByFzb",
  "key16": "2fDxc7QM5RrJXg9bExDAYaYQL6Uqs4jVgL12yn5T2xavi9WxwiYx5hW2GpXhi7Wf32hbyXP4QQzMXdsqRV1k4meU",
  "key17": "3s2zTEUBiNndM1yMHJ7mJxoFYQTMR4ZQhVzkTW7qpziKMm8x4PmiKB3YULLSMDp5KQh3HxRXF8m5JXNgFymtb32S",
  "key18": "37PUJXhYy65ZdMm3qRs3LSKDbn5EB3u62sKG9y6aqvDr3BwicNsCUJs5z3ZLGKqgavGpBaUzA7WYpaxuN678T9XE",
  "key19": "63riSFy3CVA9pNR3YgekKb2uKcc8KwbbnisqUWdC9s2KYBoKzNLo2n7sWrQymkW2Tesx2hHRifvFXEU9DgoEY2jd",
  "key20": "3KZfgebN4yhioSiNw9uApVWRxxjkwnMBce44DuqfPup8WTEMSJ72u15AaLNefDHLFtjPtGppCXuZGuv9xh7Qku2R",
  "key21": "52gXUCtiJzP85ibz5JoH8MAZb6BCmW2jvwChgLu5SjRunYUCYNzYpvmfvd4UUsFvD3MDibmrmzZvUrdHYhWs1e9F",
  "key22": "mbtTdYFaxAi5fUVWJCPpoTZYUgcfWNEkb3G661vnSBA4wfQ8MTGBxtP1pPb9gvXEXXMyGNbhQdBKhfA1k9Hv13x",
  "key23": "2cHEDFmJnY36eXY8L14nutyQCpS2T8i86Whyb3buyEvekFz7Vbnq1RpKRRJp7SNKK3itqVTmD88srukf8PFA54NK",
  "key24": "3yB4yKQaqBKsHBw3J5vpCsm3H6R5aXtRC7nvyggCfe4kLdUPdwChvc71ZwNE9K7W2fvgGvWSuPqZWcN9EqBMey11",
  "key25": "3XZueTARZReWHfTRkQwdkt3A9dugPzUFMy31uRPPfaoh3cv6ze8LxJPomvxPi9EXytNpdreD7DvQJmpMWQTU7umG",
  "key26": "4mWJRq9bA4mZ5Pf8FqN2D7kVvMLBHJbkSDW15HCFAZg9kYJMdifCqFAGdTb7aPAe2Z3YyH98uZEhJWfYCEgbfbr4",
  "key27": "5EmmSe8qpHjxTSMhK5Ksun9jUwJb5hM4WRoJLWHgLbM1mbpUnwAwhucrKe9fWh6VouGv8NhU9cwzgLEaPysmHyGH",
  "key28": "5v4WytpQseVr1JCPTwbMHhDGHHKykaHjAYm1uoty3EF44cDCyiugBVm7oRn6u8r79MLe6TxxPKPL9oASuVPeFHGi",
  "key29": "3pvDdyusVveWGKov77SbGLRNkJ9g3twkYgxHNUZavEggUzQqFJiqaoJFeCMgGBtDnFuA7Gu4ZbMUk1dG1bTSKZ3X",
  "key30": "2kgvy25t82rRmW5rC78qAUEsw9dVoHSp8xAyVWiD5TkapAUVpyS6mHyPGnyWoRSz8QvqUGuX6JxzcbPrSc4mop9G",
  "key31": "61ftPThX3mcFmuBqhqBKz5tQMWuP2mxLqg8idRQDbFfhZnv2Ve96pz8avQYHuSCRUBEGF2qD6pReKEBbfNZ8n2Cv",
  "key32": "dZDRU6QMmjtsDS8tTPjuZu1jcDmAJpaJbPuutoJKFrZs8kqtLGEyqHYcRs5WSqDT2aH8dDsojG76YFn976cVzLt",
  "key33": "4EeU7f674ervP6WwNrppHeso2v49uU6MLi9sA4iSU7uS1qYF4j5QBtHaPYKrgBfbVHFHaa5oiLk2BmqxVeb6SDj1",
  "key34": "4pRADMRpKTqFCRwkVi7s8Zy5fSLNFE3VJ8uxHJAhn13mdhTVCGiw5EZCLinfW6c8feWGVVhPgo11bt6TobKMNurv",
  "key35": "3WzML3WYxhYBptwf7FfYwNpcfcAfFAKa4HtMmjv3HGiLjhnCeN7q88r3ypqbxD28cSJKEPEDMHsv4d9Z4JVFXeeE",
  "key36": "U74tsyLRMaG78n4mCnzZeNf31d97bNAWhwMMu9gQswVAAekbBy35evy1eBMGBDXCPUWYLoMwSbir3dk9pz2hhjZ",
  "key37": "4VGc6RUSYbzSz57tHTEyt7Z38SRXiaJedCgZmagZws6y4ByD6TC5cDom93WohPVHTrYdgnWba5RfNHcQQdHUpi9Z",
  "key38": "4HSkUuKUZWC4iuQDMAmh524WQoUU9fJwGrHEbUUsnZNytGdqFb2SW6mJkEYHm36Ysp38LxCS8YqhBHAL2SmSUx9c",
  "key39": "aw2X9vqiX4GAsepxxE7wD9hqxGK2ByhUimYwGDCnAmZNnFXrwqSx8gNkxWk4zBX2McXCFvwm3BvxzogF9MUa2ES",
  "key40": "3XAT35So4tHFM5wE9oqsWKkKfi9VTwfxGjw1pKV9PiVKmJ7GJdSxqYj8S1DXUGRgb2XWcA8X5hdDxWKooYHiDMzs",
  "key41": "iKm5771BqJ2byRzbkgcSTS2rucUzArUGBFJxoQS6yNe6PesQsscCG2zZxyW6envEo6se4p2GrCNZvq5hB5GASok",
  "key42": "2c9CUeUmB7fsRCJ5WEv6rVbaZPRaTrGPXwPehA6LDKCKYq5WwrvJcbTZbxVsorWmwUWatJDFLDBmhpSX7CUmszer"
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
