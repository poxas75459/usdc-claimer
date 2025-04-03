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
    "5heesFhoFHonc97xZUCXhYon4rrW85kdHrQq6oqQDrWW9MRSGCCKH1epFTiWmaP42jKp7tqL8JVcNkVXfmoKeMeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8xuqYjGZVZimDP17JHuTMSk3omBCn49iEHE4AKA7Kg6bFL4DbuWBDAugimaCZNdt5CKWrNV75J6A9SUh8xp3Pp",
  "key1": "3yDTgQZsTrneBc42qZGWRZZnx6vZ9joMmCR6oVRditmK2AxwDNBGncfmMumSmvHaRJdKEVujazgwgisiDLQP85AR",
  "key2": "jGoUATsfA5qF5xEjRRdjY5am54sdEk6XHcw9ZGm8rKZP3LdAxE5RPnQEo5JVQhpTJ4SeS9Tx6CC6dA6qADkPXGs",
  "key3": "42akPKvq24naLN8Vv7EHJTPEf2pBqFBzykqwLZsRunAxZwGigXTQKPUQUd3byENckUHD5JWF6Xb6mF5dQJFsy7NV",
  "key4": "5Li6zzFCBWLAy7VhTJ8NcgPxcSL2UjhL5rmQiWvkxbUWr4vmz8Uec5pH4WUY9gM5AexikYiewqdUbng8idxhcpnQ",
  "key5": "TMUgR2cGVWwQqW7q84NWBkvKU2XRyVp765hP7gWHBwUuJC8SmVh9XmM2ohVAs7qoFybCNS91gnxx3jBgJuFrvjL",
  "key6": "35YrZ5phJ4QCCjHfarUEGCcpicXJW5bU7HiDtXX3ZTigUnbGbK1Edopp38BH9vhQB5qp1K99dPk8EQQMvi8mHGm1",
  "key7": "63nrYcJVhsAch3QbkaKN1tTy54TTHi1kpqNgKb2UKRjJTsGbJSfNVLBhqw6Ln1ayR7yuLW7KjAbb1DcL5zqHmAi5",
  "key8": "5iJeebHzDAhazmAJjtGuTJmwbFYG6M2pt6H3QMpQL9fkrc9RjNoJ1YDhPGA7QxAxWNnCwD1ftRcdgpUE7azadjDJ",
  "key9": "MGCCu5vCC45icA63rVKNaG3HfTtX4HSPwBSsXTv754Nxf1wat5J1Di7Z5gtdiSAiaq7SDfkBtCzv4uuyPm27F75",
  "key10": "wSQJaqGyLE5Q9YKidnLAfZLTiQgFkjftW466sz1cw9uK74mBFFAgD5LhKb21EMtcrLvi9zBCkETYzRuDZXwu3mf",
  "key11": "NXo7DRS1NtLLBhubacZb1tLXNrPcppMZ8KuwznSVPHYzdhpaE5azXVW7L24zX447oB6wMDQbw7MSjfUMhRArEhx",
  "key12": "2Dvkspz5ZdqR762Tyodax32UoecN2ea59tYE4k4ME27nCGpAh2J2hMqDEv9ctu7mgV4q3fruhyJJdJNCo6WUCNEb",
  "key13": "5D6sPVqn3gwnHokH3HDHfxE1G6a8R8c5sVsu5q6FGwGtFESYSQff8DFCJqJZ54DXLWPiYSg42WRmB4JVLiWHo6xa",
  "key14": "bAxH3MFTUkdVR3PTrbacxVMLXF6EumCSxGgjKk2RNKmRrcq25Vu8Ugois7KB7f97JoSLQoSVYfJaNQjtqfHHvod",
  "key15": "4Qi5jUeft9vtM24YUqe1NbFvTQLMFTUcYnFzmMQ771UEoBNbKndEoKxkvvj3XtGNNE3Wojo9xvVBB3UenmzYJyek",
  "key16": "4WkrS2ummS9BvFC3J1UqfzjkjmByb9FjwNRX5CenxWre3AxiMad8PqG2tZW7gajPakRrakt4Z1B1xDgdvrvHHxC1",
  "key17": "X75uY7c8p7DLzHL12gx4fL96PGvvXxFhXTwvQkFnng4AmfniyHKEFz9uR2tddHb2SQEWWsK84U1JPzoXaYdu5hV",
  "key18": "421jRFcKWobbiQwXq7oPGGn2QzQuqwNx3Pa5pypAKmWQ9edbvCDDbr4ifM8KgZ65siwt8wsNZG7dJZWbCmpbrHmy",
  "key19": "3h7iwwGNeNjrFry6XfbozDsrGnWLf9GoLQR1rVpGnE7L67zj1pgiez7HjgGHap53qWdYHgwoTj2rtLvWCWZo6V8t",
  "key20": "bdhYySdB2v7DYRnZRYiES7HfNBU8VdmaTpsNQ8YisSuxhGpy2ps8LAVQp7a4kHL3vCSy2se7i2FMvcGwt3C49oe",
  "key21": "4vVnSig2qU8Cu72aaSnTdaW3JuQyxBebQnRs2AnJ5hKjUsttY9ydcGKBNXEGoEwLQpU5wG93cvagsqEHJeRQkFEa",
  "key22": "2AVtTDQXSANnMStkW4JDeQJ3sz5JbYNj1qoKdKwbGZLPk8gbKKtb3iAcp5x1fNWQbDx1zSEQJsZmX7mNzRu5qu15",
  "key23": "5zUiAscWv6Z4ABYFtujspYGtTd3K7qb4h8XKEnCLPT3P17VDrrHUY2MyUaQpeD4spPWTvqQhBqrnfz3EPehwFSd3",
  "key24": "3w6Z381ChU7gBoXuAFKQqxet4mnsx41yVRqNxPe4GcKhKKaWLCDW3BfG1Lnd66s2SBtyMLUKVFnpSZoNhbxjgZqb",
  "key25": "QdnjvMhkfKDTwbXx4Bx6QFU2UUkmEoaBFEB69cNn84yswniesxgrMUHKNqB2pw9YV4tsBVT5rPTxP8dvLwMmKvG",
  "key26": "2nabLV3Ms5LBUAW9tsVb1eETKgJTMRr2zPv34XDK2Yed7NJ1JWug5y6LnyZNKkgxKhmCr9ZEtdFauyLytVv9BkSc",
  "key27": "3QjX3JTynKM8DKNVCQPHQwqtaAwz8AUuVrdofWhZoJdM33RcEWTqWfi5JpEsNLRCTtbdJa2DPKVdmoLfMy9Nfc3a",
  "key28": "2t3zBNr9ATd9JZDt54ACULuCYVApPScwjkcV6zHdxTNDxTpU7NLmWWdMBLHwBhjYm8EsiSXd6GNZeitrU1TemWP1",
  "key29": "29AMonypwt94rHbzwEsnWEFRq3BsqFctZZ3ygdFPJFTztrUseyjBvip1Y54es8f1UJCbgJ5wwgZHTxE7ADNm5Eav",
  "key30": "5wx25Y9TEi3Dcc6zgzASxqzmkNTdbiXEw8WGTrjA3bMLKYppPEX266DbmCS27AQy2Py4c1xfVuEsBf7riGvNAEWd",
  "key31": "66dVNpqrQ2hWB3utd4N7bq5TPokJoVP4FWxTzCkfmCew1nP2HUF6Gj1DEwuwZ2jCKu2djkE6zSDaM5AFTdauboFa",
  "key32": "5Zxi5yhPsu6UUHGNrZL6A4cjdoy7kGk76zrfDfyADoQFoT4QkARpEa1453S3HTyq6uBAA71newbqmsm8Lem6anLF",
  "key33": "3ZH7CgXVoKGMB4WeEbZEF4r8d2mng5z6JD8ZYnEA6A6Bd9bm6zwYRJMGRYhVKTfnbvP5MzEdFYhcKAoJyPjyzV1n",
  "key34": "2hdQGoNpJuyFHrQFgTuT6fEzLReqYLdgusH9vhLr9ELerRUPduTcopfyBupssaFhy1SPqrLyVxM3N1QgJnuvLhW5",
  "key35": "4X5FSnpEDJRSNCgLMkaLZVjkp643x8G3C6K5jokfxhxm4M1euPU3amgPsoBDN6JQNjxf6FEDCGSLFNRf9wwKz413",
  "key36": "MyPjcwzPCJS1PKUvK7tvgLKAXqWRnrJt2ray5Bx7QRPmU8WACMwXak4mjifTHxTiv1cKZdVkQAuuoxo6AvKF5C4",
  "key37": "3GrMTxEWi9u9XNpHNC4mCoS3bfJgaVNccasvxnPsMxkyGpXuht8YfEHYKL58WzFP6HW7LU4tYbq77ZxUUJ8wcF9R",
  "key38": "4wkeQyaKe5H6w7VQJHJk4fPD8JRAdTG44QqfVtPXkhhF9hDqqxtF3YPsVeUPBkwCphkabhDDz7a43C4pkzeymL3C"
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
