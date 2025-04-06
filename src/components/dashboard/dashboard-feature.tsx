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
    "228FmWtu2fXcfYvwxjPnoRR7xtsVYQMAKSQM2fBUmdssav3iWSMjewArysUZc7PshCCES2Sx4sP7Am3wZbhf1jmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxRYMmZ7RraUSx8aBdkbZtUsJupiXJPVr7VDsT2sDeu1UopgjvwrisGGGqAJH3bfSLpZwWFgc16mzbRNbqmpYea",
  "key1": "52KFgMBEbvNHv24ezKipstC8nZyzmRNcYoBUMxSpn2C1dwcXFinxabCX7X6e3VzB266wiiHL9xk7t515128fLJnP",
  "key2": "3s15gaeShzVsqqyE2tNnA5cQXfoXVrBMwa33MiAajidqkBVW6n6VhPLq7LuoL9iN8WC6n3x83DaFBxb1z27TmqKT",
  "key3": "5PApibqxstHSENcrszoQUqdBNWq1hx3XWEw4pU8sH9usw9Hk18XQUQtcH7fUd8KWoa8TeLq1p7o5HNLoLeVxv9TV",
  "key4": "3rBYe6Z6SE7Dcsf3vsAcYxv1TniEjmMC6Ckp8CarMqbL5hF5cezp2EfF4yYq4yJX6DZkPF4FsoQfNof1b3wSPXbF",
  "key5": "t1SKM6eaSi8wpfj5yP5QVUcQbESoU3E2qKEDB6NDBdvi1d9ecxv7phfd5LYUK493oz4wjZYkAJNn8ZJunqbCJn4",
  "key6": "G454ozuYwtpx5iettKqph9dQAJq8PTeHHMWhiRU7TmiKpSdfUqGbKuEeDzQ9wuoTztZjJp8WTfwoxJUvnnkwkzq",
  "key7": "3zPn35koKYg1W5N6fc9LKbwoWBj15t8GdeNAQTGBRjVfJn6uGFDzURnLvwkuQq2GGeYAN6tbjh2n3EnYrqWFArz2",
  "key8": "2xV7DafU3Wm4UMDfh8tkgbwTZ2L4smPeebupTuP9ef7tNWGjjvkzP6AXkrfrnJNWb2AcmBviA3wDJKHRVxcxT9C6",
  "key9": "3b2WA6f4qdS5EUg68WynG26vkaEX2pJQM8zjQLuECsj2RsZZvTi3xCASfXobCK1S4TQThXLfqw4eisbgJrtjJibs",
  "key10": "28ePiNFGBiiEaKc1PLJhfD7jfNMgxFi7Puywp87bSzWtk4fUasr5vNcxJ8xpot57QcjzUNzaji9ZTJYodxt892hF",
  "key11": "648M36hPfyYUJHuekw7M8Xp2zeUE8z7C5tr2EwQJWGvvv1Dyjq3piS14YqRiiv3QLMmxhS1hcBoHjyPwLG6EuqbV",
  "key12": "2t6Tq78JY1aYoV5U7GJnL556MP3kTXL8H8YvcYzun5YGLFeeUvDgcUvCRSEcheceMhg96u19c1QjkDQVeWmqZudV",
  "key13": "2wkShnKMxtszFdJasqwBqrqYNHqSYDAZgKVSBU3E59LHCCtpTPzGSg1KFropVuRpeBEedxXofFkjEdqBRxPH84ff",
  "key14": "4zwghZW9FSbnsQZDAg7MUpHfv7AQapxFNyoq5SZ9YycptLAY53N5cxCkjzTzkEBXghuYMrvvPpLNgwMj31kBZwKz",
  "key15": "3Rsah3YZerKjuz9ZvMeHBbmE7f8gGr5hSuhVaqJrnntJo4uNuYoyQr5t3sFxfk4PrgK7MJPoFhivHvjwysWRweX4",
  "key16": "3qCxHwejJZj82PTAWZfkTmdBQ8RSaZoi22jVEueJReqHTCyscQa2UhRNvuVw5N3SJd1LBhttbyoEehAW9dUe1XPj",
  "key17": "3kffhnf6wFpjVkFpLfnJg8Wrfwcmx3pdGCXxMhR6GXsBLXNfQiTNEzPQtkTjFCUVpM4dgxp5pfCrZak4VMhXBHKo",
  "key18": "wpehRQfgbFJKaywp3A3Ag79scyjaEf7LkcGEtxSaar2SaL2zrdvg34NZoMJRX97enz3WzPu54eUBcEndcD5NiqF",
  "key19": "5PWdMUGAAAvTZXTbXGdikzz6dkmyuzp5A5QRWP1CfNmbJyH6YZPV2h8hJ2F8RbqENhaU8XzUZFfns2nfc1UncPW4",
  "key20": "5PQgW1SNPCR53Rdzdpigt9u8gCHJoTKxGHZH8ixJdinAb8ZMAfsjGdK7wZmKaAWb9BMAHEoN1XFxNEEUWyDhc7z",
  "key21": "5FVfZGZucK7q3BfuUQLcwHKgrA6FDPXMvwrmssBGunxwj8aBACmo6yccrszwkuruJv9tNEcuRDYd7E2D6mzNv1qU",
  "key22": "5ZUiFmPHKbp7KjjGGV8bToYktecE1arsr4pPBFTCFuzAjyaGjD1HFnzoRLmgn2s5H6JprWodQDE6D2i8543Hdf2U",
  "key23": "4U5KGiRuTFKMNmZTLK4dzEbjxBXtqdXT3X3Yf5UK2TWbVBHZN4tMjCWqenJh3r6Ftzd4pbwEuzoM6Nw98kewf2f7",
  "key24": "MqAzTQ4UgADeWAhmnxQRNyCRvSALCyRXrafukmacXqEfi2yrpK1kpkotYj1SuAdCReuB5H2SPHwZnhRnm1AvDbE",
  "key25": "s8yocycwGpBxWFgN5TM4szDYiCNsWqZ8byjhHfHzFH9qdqLuTJb5PiBmmHH7ibcw5JQYS1J71NdHbxSKvcPhht9",
  "key26": "24VpUiXSvUHG45Acsteoy8fDvnTAARzMtkvoqWsYxeJrmaPy25vtcEjHnjWbL3zzmeobJ3WVsSMXZdAsz318N8Ms",
  "key27": "2Sz2cNpwYLUvGjG8ttHwpfsFEDxVBuRFYAtRxfqbrEh892jLJ9sZRiFzZHvSTJGmTU53SvAKwD7QxHJo7MZxNLjM",
  "key28": "4ujbxGVVHqF4Bt6P8C9TJUJ65pvAVbbFpqcPqaSbDKmsh64FC96gwyMZdVturPfCz5xsScpFnoAyr5uz8jMyBdDE",
  "key29": "2xdtawQBpyvLpdhEoJA4TFZeKup3U2xMYWJMyWf7n9uum32NoAf9A5qwc88X5HgBZycjxygc7hWfirw6ymzXsVWL",
  "key30": "4pJVPvXLuryELmg6V7LkJDrAGxdcLWRzb8eCGVriTh8pi5nJi8txRvuNE44S5LyPEnmUZPehZSf6V7Cn87GKWAL7",
  "key31": "4JT8Poeypib3PP5MdoaX33WBipKMmWp83q1kGofQZTXYoeMzdMRYWikm425cv1gsJd9GzjpNAZg2XR45zgHZomzT",
  "key32": "TMDBMBgRBLB8s1amkXRkSW3AwU8vjSV8k2aSmmBUw1XdeZk988SzddAkCmVCpRJ8ToSmgnyDk2FCQACNSKCfAWB",
  "key33": "3DmkDCo13FPqrd6PQ5dby9TnEVjAEYcAJ6WCF3QRJwUZv2xbKWvnDESrBrdDmZSkvt1CeSpxoWYqfRHr5TkZHAGN",
  "key34": "2Y5UmEgNCR5EXEnwKEvmCGygzaEkudsn6YTzTFLYisK5jCZTyehLxJjW4p6PfanVNee4e57LPdiMoSDnn4wuP5J8",
  "key35": "TPighGmXRX1QFeTQMHTLRDPrVM6xZuNbpLRZoVCgFzBKKd24sgkQeemp6Ur1qqHFNE4eWrtdzR9MHW4FNQJGVRm",
  "key36": "4bQ7BNepmi2AAzJXUokz6eXFmnHrex9GFxjhSCYei5kJnorzui3KoCMSkmG75CfPRMrve8RcjkdCSj4Tg8DDXvhy",
  "key37": "2JzH8F1BrMx8rt2LLYAfaCVjWpuK1U8s1mHn2XSgLAdSwT3Gpzb3sA8QeDwyrw5nXc9Rgg26QrDcpRQSoDvcwwcg",
  "key38": "2RnLzY26UJi3RKjQWyi1hr3bKvq7Vncs82x8E2qp465m8JRha5rzHzBnTaaHGLJ8PnVqYVm79iSf5sBae2xfE6UG",
  "key39": "2yscYTp15gJvMGTT9SKojSZc29h5UPMaEFV2p2L6XJRcvPmg6B6FLXZrHrmQUYE7FeijMLj7PfL64D2hSvWefn2C",
  "key40": "6V9c62ZvX7PrN1qYuCwrcX2iQCSVpKWfD3bNBWHSxvMnsP73UzrLoJAYQTGVj6JXSV9Uf15Nfz9GpTz4KLxRamH",
  "key41": "2WnGXg9AsjWEYLPUemtxD4g8PLxQ9hpznY8PJTse54QB3r9B3SqN4qrwidkCtwgPUeoi11Y6uMpgN8j1fdXuzsCg",
  "key42": "5ud6woGik6v7hNZ27B8gSZ8uQ7KHux3vRrgck1WbmbySXvctkbT5Di9bcgCentPBpWUKNa1gKVqpAqECCnaYogVF"
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
