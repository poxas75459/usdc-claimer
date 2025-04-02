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
    "3stJGeXzpnsiGn6qs4KsjMHRgMmkwF8uaXhKBH16BsyBqgxfgSZ9uDUTuZqKkNVPV72wY9Ae6NvjvQ8A843N6dBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ySGBZwKoTnwYzbgdzdXr4QBfFH5SQvnUjXcRm6v3EjRbJ7MGYHmyCRiMU79o296R2Gz4ZxghhKJGcAwAo93EypL",
  "key1": "dv7MvTyafGDRZUswBNJph6fDvmf41H7JhFdBpbJjyMYabHqE617Zmyii8cQjLmGX3BAoCjr5vh1UYKwfpgHDDdy",
  "key2": "4LdhSbgvxBNk1CusgmFage2HjZKXWPFU2ZSumV8dW6nX88emWyMijiePbcbJ1t5iMy16raY2N8vohSFYZ8RSc7Pv",
  "key3": "33SrTmPpSBwLigAtDV1WpRpWXAGFAUhP2ghkGXgb8vrUFTz9MPwwZ7jDD9SVhEeEN8uc3DM2FzvNzYhJfBUJZUEp",
  "key4": "24MMU7md8B1WNAAr1GHAxcELUYMAxoMgjVyqGdLZEnA73bokUCLRAAdckH7mWP8WhFWmhbimVTCkcwGcdQpAmRXa",
  "key5": "3QcxQj49BKUHYVDu5oXQQVBauSyVrNgLaNqzEaJxcj89jTSJfFP5Lag9FsGZGWBSP7B9CL7toTu1jxJNWZ15Sjis",
  "key6": "4Ku8nXQcrvG5EstcXLWjfwmuX2VtUpxXRjc5k7mTnWkGtL3akoP7wM7HfuvtkA4x2Q1YanvhVXcXQ2nYN8LkX9CZ",
  "key7": "2feGgdumrQYEAHbQfzc2PAACvocz6TkWP5P19Y5GDM2C1K4DQUNaYwHaKWc5BLn24aUsq7TWSLNag4qQuYUttXk3",
  "key8": "2WnDarByqJAxvtHM146S3YcKepupCiPi22a1FbS1Rng6Am1hDGRHKQ1Cf1y8dtYpZavTBz3jRgZUzb5jTG6KqozT",
  "key9": "48AMdXmnsrWbFAs6w49VMEV9AsXgMkxNEVh5fdzT98mXLa1KeoBA8B19ZZLwQdbpLwm5qrNwsFRATRFGGq2WRNu2",
  "key10": "4TdERpVMHuicV5tMfVD48oVE1haoH5GcSzqFZvQm6SKwQYaYCTr3je8Fhxm3goU3ZpDepyKB1mKnvwrRLKKsw4MS",
  "key11": "2uGgUhCLBgs6KfsNZVRffyt3dCaxNr1CnTbHy2aYP4Uy3wPXZHMGgJbmZrp6URnfXqz84uNRZxVoNNoR46yp4TDv",
  "key12": "5E24FsBAh8rADN7EYzz6Bn4nn2mEhca3kYTVZcon5fXa7ifyikCXSo9WFsxS2NntMfZu1Jo2xQNo9Dkr3YLG4J5S",
  "key13": "5y3xcV5Fw3DYmpMkAY5PMTHKzPn2jkBjZiHvSfAjRha6wzRgEVMLECL8tRhNdaftgkfaLxWhgwtj5kXu7ao9c3Ra",
  "key14": "4vhbcRSDAiuL1pjCDBQKZ4ScBcsL9G1GACAJLnhBUM9uJxSbf1vr6zGczCsSESVEQ3hSmL9aZtGWMp7tKzqCMJny",
  "key15": "4JhfSQPJHZRJkgSHhkv1ocmbPzdFoRn7CFimVEDLV7yof7WNJAJfaRcoDZsKLpHtPV2Kh9KJ8Aqtpmf2mAM1g4TN",
  "key16": "5zVK1iGTu24YPy85ww2FY9SxKw4foa5vDNx9JnDBqfx12SygNgeta1W5cPrH74NSyJRuSh7uq26fghB1LjFxRMHr",
  "key17": "3qG1phdnSATxzbJmiHqP67wDv2MnkxV4urAq8R65pjYCMQTWARCcNeVUacDFMPfhcKuusEVV2A8YwkZFtXF376Ju",
  "key18": "57C71z3NeovRKvWnF9hqqXJy7ZwRKwpcwSeiEsdFRCsnj7fwZsFJadLrKT4oq6m7b8zEYRq1QkTgs7169Vw8rgsf",
  "key19": "5FqgasJH3yMb4hj1fid2Z3nPGjikQcxeATTM7zFN3ehWJYrkYhonboXrvN63vRmeQ5W8hQpcR9nU2xx5bdjnhpSJ",
  "key20": "3xqSSoTbAjDrfgqRztaTK1hqycATaGCBAKfBW5JwbFwkKE2f1jTHPWf9bKh8zQYxCWuxGVEXUqdaZmKmqe8ycWfz",
  "key21": "4Q8UKoUt17FweYdUxft4mvuBgxkcjhPyfPAgUzNYPwf4yGo1qtdcCUEQsccjks5nhTLYivPXFWPEM2KrFsas6Zhz",
  "key22": "5Vy4vBU6ay8tx66a85A9VJC5bnPxBaeUe1qovf9FCQr1Dm9oNZRak192HFjzm7TaYcEDNPoC5wMCiRwWdUn4cAed",
  "key23": "3VDyqVqhTwGGy4wxnaLqDZtzGnBkdVo1MwvW1KfR8rfkEi9pEue95YsvrwW5S9ci2rLVYmij3ZCMFMhgsEipFA9X",
  "key24": "ZtZjgY1NJYbetj6qiAyLEz42Qw6E7PYQtJ7bmCJHPcgbmG2cHNw9HDmB7M9Mu9nVo2LW26DYvixbkuua5kj3rM7",
  "key25": "4SxGK3k4WNnHTMY8h2E93Ygk5NQzkX7dAGjvHHq9xH7Xv4rDjfvkTFwtmLCKy3jS7ysxTR9ZXQhM7iUpzhrpUUAk",
  "key26": "3ELVmoQyXAifzFAi1oCFkuFPXW9E6KVZZbW6ubV25TiE4oViTUQ98gNkmXUYb7zDNrrjVZXzBde6i25Sf34e11bL",
  "key27": "3GWKNy8RfeQFurcdu1eKMfqP8yocfob5Vhahm22UKtjgdwAnXGHSZpwM5MJ8uWcyN5Dwh4ZC56ePndgTmudT9J8x",
  "key28": "4mdECBRSWCEn1eUPJsyN78ffSyezwAzLvGm126VT3wb5iRRe2QFnhMCKvR5khhwyRjqAQtWNEFpZVThaRkDkRdM1",
  "key29": "4iMKRfc9uD7JB69HnR54Skaj6x6oWTCASeeVU1Lv8QFjXVwW5q1Zdm48XVWS5a2QCSHFTiJEoQUhqthdiPPujMWM",
  "key30": "58FdRWjApExa8iMjAh2rQmH3BtvBgUmKavfZ6uozgsjhBCEJtmwCET5hJNgJRNnqhkUhxuq3LqeAdubZX2cmsvBM",
  "key31": "3qxaBAWSjsPRTeHjTZ7L2Ho2igUowrxAnDdpCCaoGxMFRX2r9dYExG7BFUeKZP2DwZhgw6xQug72TjCjfRFT18KR",
  "key32": "vDrUeeYuMpxhKbUJenPD5Gr3AYb6z2RSQ5PRLFGVJGnHnZvUknevhrCBb4XSyEY99YZtk2VqmAMXVzTPaP2wfQb",
  "key33": "57d3L61otJohrrWobW6EesMefQwLBYmE56CuWffzkbhBokG64RaMykvtAVmkETwR7JStL1yw8iyxCmjDS27cUDjH",
  "key34": "2C7MhP3ktp9ftNpv9jYBJTiFqQttdiZnDSVYL7S7cYfLXafJELGZz6uoJntir4Eao33YbrxunE8Rc4G4e1kjSD9p",
  "key35": "5F5AioHnw4dcsMQtkneJXeUinfzxFJL8yV4sD2kornRJYAvoGxid5mm746VejEaym59HaNMuExgTKLVbgttJgq2m",
  "key36": "574huZa98bC4CmzSboNMv2SaSjHcoJnBBEST1UKvA275GpMr5jXwMLWSZecCCAB2DZ6BYbGPKyFucK1ZPQ8PJhBG",
  "key37": "2eRN1MDXoNceEe7AaDdu9nHxksjWjteHHhtdB76BA28N5grAFPZCq69zPWJ6GK2EQUVnAhtREKhkzvDYU3pLig3S",
  "key38": "4o84V3ao3TnHo5zCQ61grkg9HDpcCcWYgr4jXroWeKHokfkCcKXpckj3H4dHD4S5VtvkpPUgBkPSgCCXCVaVdSff",
  "key39": "5Mwss2mYS3ZPeyx6hsdkCfSt8K7rjQcddDDHLextGnf9v78BqmZxas9TMfUDFQEpWYhWp3ZWkpwGyQifcRZHcKHv",
  "key40": "DfyqeawvRssM2RQt5pfAMBeDePXbNTTiEhwpWjvamfnC3yQu3hKVKNkkaZFuFE9mvm3Hx6wn5qodmRuoNCzM4n7",
  "key41": "4gtXaecYJkL6G89ds6kYxEussR7x4C53u1wgMuG4QLy85UNmYdRpqBM93PAcxU5B7zneC8qXUTqxtnqfi9JZfB5J",
  "key42": "42iBr5LSKQesoLbbqSiHzMVa8pa2FkCUQz5mwGBh1cZ3Wipj5HkEdp7QVYWpqHEn24Yea29KiFPct118Ui8sBq22",
  "key43": "2EcfnkBAWpYtfofa5yjzy1R5YxDoyrYg7NX1WvtwnFcDgeopnT3Sj6W9zge3vLPpDUPdLUMNn1f4BqXd3L2qNqAv",
  "key44": "5ruwojwEjgp84p6QUSVtEckDxZ2wTfdQWFvC43f7jNEXzysnLc1hiHQp3DB8BTMqyQrBqxr8xKhDsrfca8X5KErR",
  "key45": "2FNyRJEwXaTuJkxTzRZNdS7m7CcHyzRzFSSZt1i8mc2pBfdCie9QEJ3DhrtF6Nf3TtCRCn84gmJJhuV5TuvjMm6B",
  "key46": "51K2W2SgW162e6HJJrdfFgdeqJ6CP4QgeehK62fum35zKanTEKjNVrdxshJPih95B9ZNLp9DopPKSnUvF82fXVEF",
  "key47": "7yF52CNWShST3LcQZ7Ejdkads95u2vAwPe1J427fkUWgJNKHv6DzM6QK8mZ5cnCJf8oKYn1h5241bcpPUNRXdZZ",
  "key48": "5kWtLTxHyjDvdxdMbVfG5usXcuxsTsb6GjC1965VrjpGkEjnnscbgZyPssAF1UjfAbRTrtS5vBzDezXyg5aH49qs",
  "key49": "5AXr9kuNFjUxdPvM2n4Y7gZMyoS3c2GH2i1dphszN9e79cD87v3Yx7zJAcG8dhDfi9K6761YTLtEWvcTFUMRRARt"
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
