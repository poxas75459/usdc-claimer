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
    "5WrrUGBqZuWfh4FSuVaRQaHN8JeCS4AurqDBFcdkFAPtHSwCRFMhGwWmzdyEtbM2Mtq2LHTKSJWYW3XLfRYYGCxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mBXM3ZQtc1jd8MhdbfLmisBnq3gmGkLf45sSXtb5rWEjGxsMHuoERkk6AA6aM2dtbhy5k3MaKC2qBuo8F9Y55U3",
  "key1": "42KsKb5RkZo7iT1DYb2kFsXkesdAg6XXfvEGmHmffxUDhwivNZn5J8MRtekUBBEaXnkTjBVfcA7KWNVZKeM8QVgR",
  "key2": "wVaZGtXWLd2btGgaGefuCbvmwQvEwQ3ku42BLm6cj6VrYJK6xXPcwDh5UFhvUpvwd92Nu8fTFmE2sGX6UPLsWxr",
  "key3": "uJ2SpKnAiXFjrUvLXW7rgmWeTLVbTDPjSbZjQqfAu6p8Dzr61ZevKQrbrRue4FAgeUgeGV4iWBSgwtyLgi9BHRi",
  "key4": "2Ut344oTPvvzxbwYvuWTQfssqJxY8FCF5LUyBnfCEj2VDqQHrbVozpaaDfMC9vLEQSEWpQ8u1Bs54X8okqmbsKxe",
  "key5": "4o2mWLPejwV6bUfJhfF44yYUxsWv3T4tYYcnG1JjaL1VepgvihGe9dJYxfRqJDnigLknCp1JuHSysERM2tTGuBhx",
  "key6": "5AdLjYG7iMTzNUCPqWVGzHqcBTqpaqwcczXycpyGHFGXrgZY5WMcpyd2ba4nmRvtx86mukMRTtX74cYhES3Gt1W3",
  "key7": "2Ge59b6soBvHvTMicanf55vREpNYEtUik9ApzHDb2Ezw1RpBRn6eYwyqnWPBnSZxgNnvwq2XGHszic17ARmt4HXh",
  "key8": "3RJ4tK46HfFFKnBFL2BrMdHpgU4NZpPsEhksEkA5sjeFyiX34i6L4E5L6FkvoDDbDLpyuPw73pLebMwGMrDgHosi",
  "key9": "5nW6BteEaJrsY7gLvin3CPDQhBzsZWsmK3G1vT66Fzp9JHA2rT6Gc9hRue3bxtx4p3Xas5PxrdtWn9BjTyDkUZmu",
  "key10": "5quMoj5uzGadZCc8HhJPjke67aDdyqHG3zF8GWAetv5A5PVtfwfvvb4AJqhXViBMh8fhtYshNrgJqWBJ7vKNrsRn",
  "key11": "ETbt4wCztVDDVgTWwqWFTJZmU6zon9tuhvb3TbJncnZThJLv6LnrT66EY5oaRpS45PnBxpK64wn9HSDTjGMedpx",
  "key12": "ZiAXcp5d4YqPK59Wm2pLLfdFhV6PEkY7xxJZn5viYKc5ozbXfCZETxhpuXfsmNSmHeU3nddSDWFmshrxDnUGnYa",
  "key13": "5JoBE9YdtaGwua6wcXqkioTHSmJCejJjVK1g36Mw1yqpzWA59TEXhV1NPdHuB7qFUhZoav4m2Lq6aURhwMTzqzx1",
  "key14": "5ZC2YnmztPzDRrYubFRX3wwrnTK3YWJXRsJQZwZsfpXWQcFeNWJv52QDY8vEXzixaNjDUXFuRBeVtmcYjHsTj7ut",
  "key15": "5KY6WCW12YF13s6ZqRpTBLoDv7pWa3yePtspre7tBJJKQVeaMxxanhkoMZ7cmYswNAUqzbGwqCGJzxMBjNSxLp7f",
  "key16": "5Hc15AQA7tVKkQERNyqKXN8binKvDKp2PeMUAEYnRmT7h4EdrRvn6w1NGeH2Uhs8GynhprCZ47n6VhbRsPcUG5L5",
  "key17": "4SocCLT2AD6vWtc3agB5UZ1ZGncNo8i2oakqM8HqbBZTDRtdPxgBLSHqTWF5uVYTWGtZwbQ1PH36F94nDMQaYKJf",
  "key18": "nny1FPzekepwWbt4Q6VE8wRDLVposfjXcn4yWS3S2c1YRZnTMkM7oFw21i6itEq4L9gBwn8mukALqam8KeUeenr",
  "key19": "2M3TVREFh94aW1hPazK6uxosxy6vCknj7Xuxb7b8sPrqo13ASfTtTjmYWxgGFGud1gNDSG23ZuWVuhqEZjzW9YRq",
  "key20": "4Yhf5cyMGtW48zsPcpkg9hyruBGCwfXjs4uW8PfwANMaKvp1Afo3vb473nUTNdsTRDC7Ac1huUitBCUnkx59CKgJ",
  "key21": "1aStgsZxpb66RUndrFpeCCpvkk5mnWJRn4tV13rjKyxYpGQUXqBVE7oLxbHn68K1YFxYicK1HkgCKzLXiQFGUu8",
  "key22": "3VJd9JHVxeXBDTRKCbsY8eZ5FQayd7ZqQWojcqXntRZ6fkjEVzgXFPtuHufTiucHDBxT4c17wxbrdSZ76hiqopNq",
  "key23": "2pJ3oCUGrkYM8N4jnrbKWQfuXWCLFaJsX7Y1YH2icRMrSmHsRk35wm5W4TzqJpJMFnPcKoucDKy2EG3Rs3qhXuMv",
  "key24": "3Y5simdbb76vGfU3tvtnHxd9xGzaTCPDfRa2a8TxpKjZrcZV8Cg7tRXGuQZzFfbWPCtQoyyHXgupBDLRX6Z65h4r",
  "key25": "5H62A3Tj3s2GnUjHFbWNzraRoALyZf26KeiH9P8ryuiKLueUsEmnLqjjFCDe3SWTsPM3HDToYJfnvA7U19vxGUd7",
  "key26": "3nVMseSQ5AC4WA9aPNGo24oAEEoQD7UfZjJyH7t9hXyJVcMA3qnDi9t6SVe2s2BtLkzLKqYnLjhMzGAkPeAeBAyy",
  "key27": "5jrnNkmjZmiyPMqJDj5P84U5e3MACHBYt2scTNavfXs255FdUa9hrnWcJkpTub2tdMj2xfifYEAiqKgkA1RqFcvL",
  "key28": "YPwPR9XoMKHFdhbAqXH1YLH3TQh2XoexZdVvE8StXtzNv9unsJrBUUJaqoSWM8VVx7tDDKz2Fde74dwZa5MKgRj",
  "key29": "5g5ZXv9E3HbjqmtCHvwjoGAXoog8tXnt1X1Bz1zxLyK5HUHmhUiTQK7o7TzCXEmadY9Br5ETTF7bVcNZNjzEbLv3",
  "key30": "5q8dxZqoxY3br8263b9ZEjErCAzjcUiUvVrfEgsLipV7Vv8WeDX4EwxhnscG3H1KwZ5CN8fY8VeeiXJ2Gkg82moK",
  "key31": "3i7MCpTBJwUU6NMDns16sqf1JJwwHNbDJHTotrwzekeWs8CZT6tLNthzasskvbvyxxDLj3PoRrBVooKi2ygXkjRU",
  "key32": "kwJCaRChihwVcbky9uhxQJYseuYB1R6CVQqFgXHNnr5a5QKQgJP6NtF8PQqBM3ha2vYfaztEVgCVcjyMKRbm9y3",
  "key33": "5TgcvoDAKSJCnEwradahHKRMzqUj8wMmDyZ5EcsD9sNu1EH4z75MX3MvmQWLZgAMznyH6ZX4qfPyWgAK8yn4QpWF",
  "key34": "5jo4rawgXDpAoJahjpjPvuk75p2rJVeqZ1N6F92m8K8ckDSiK9seHpeNh7AEUFjWfv6phswaJSUC1dATAvu2wmqf",
  "key35": "32xZPwvcwh2ceiaTbCfz9qAQBsNptx8gER9PfZszTAV9fi9kKGD5tGugU1Vv4xrL6omTS3X1kjdDvkqe41fWgEU8",
  "key36": "41X5hwnEPJwFtpQshA9dJyMLB56gwR3xHDY9d2JotPutvivQvVyYHGiq22UDfz3YUGLPTZKYf3o5uuLD1rFYrPp4",
  "key37": "5XKahbWqutVfhKE6ZvSLEsKdTjRYT9FKeHq6hmLHdMbBsHcneHpAUCF44LMeRFCCRL6kFSuLjPXE2MMXMj6ui2Yd",
  "key38": "tjYjTT2HRcdpf7kfQ1yJHYjm5PVSZ8fG7qHe4AutPNQ24DSC7CXNGa4J5qWtBs5WLp8cUkPh4knX8kseHjwqs6E"
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
