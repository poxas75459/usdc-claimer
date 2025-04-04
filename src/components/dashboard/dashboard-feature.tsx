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
    "2t5FgV97YAhP6PZuiVDpxKorjyUPqsARqrNNZq9wwQ9KDv5hsWQ7FaxUiezEqRzqtNHfa9o7juJyEKuehYFUSZob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2toV13KuPi8tFxe2MNSuh2RJsS5QhZR4NPDFW4GBAr1T1f6qPWSGqu81zDtsg1npnEKWEnUkAM7R6f6Q8vVhaj1o",
  "key1": "5rU65aPLrtkHJDZi2vUpQ5AeBmEgXwSt3pSu4ajtkpbYWRWkNmvYRgJGrM2QBR3oTiFEWWTKJ8houN7ApyGcinBi",
  "key2": "WkomSKo8sx2uF1h5Lzibxykz2JjuWECfJFRiN8eAomLpM7Mp7ggpee8SMomYritHJxgH3214WLTNzDr6MxkbhFp",
  "key3": "7es8S3vzkc3BxfXUJ8J9gjja7eQAEntbMSY51UEy1BsEPtcszswrVe3aS6x6AtdVbRL6MSXKMq2kZF5o1dyDFKv",
  "key4": "4wweF4Uo39rwgJxZrqBMaYSyCkd1EvAXAbvj6PA8yyS8hnPcy8TwtmprnpamtUNAEnDLpokTk62UVJJoPJGLvE5C",
  "key5": "3rpT5yfocb3Pu7LkmuUbzGZmCPpMMsRXaSJPxCvfok2x2PrPWS9s9XtwKp77H1KmYCNTmyGb2cnrz7k2gVrqSQfz",
  "key6": "3BCAQzwmrsc4fpvwLyj1McQNTV3Xqb6S9j3UZ5nQWbgovB9MVi1X78NB7WQiabdTe5sSYzsnsdtoiDMTq4n5eiAD",
  "key7": "4SpYk65qNVvvwouexX9zCk7PEoR3TKoVmmR74HJRHwQp5fPNQif7PMTA5P4yCHim6xZWKSxY7kthSMf6skcMaUpE",
  "key8": "8Frbc78vgTu5oo9HwWFN6KhoSBVtz8bCDvNepyAzVSgLCP4N868Mi7igG8nYz7bDpsTgsLTVV8UCozCsCj5PBbP",
  "key9": "5oSQ2Z4nJmtyWgKaxQDbQBLtQdyPoTwsMPq37pGc4dC7V9A7uXDyjU6Ah9Bw2uW8rJHmEw77UMhCRsEopxzjxEgx",
  "key10": "34wtVvdBtP12x1juaJ7ghic22zb4L2jnkzU7GA5iTGjAoQV4RRCXWezzJnfUC36fm7RCRX7d1a7r5kG6u9aKWn6v",
  "key11": "5Yb89N5dpZtYYKFeohEJXfkZrmKYfEANUESDTCSv6z28AMdq5u8smZAaQoKecWeeEyDSCyB6PnaJDBuQgu8Bt6Xc",
  "key12": "4XVBvhtyT9cvoe42cP61jpJ3bU2TtBY9A9ciopcjLDUNT2gkQCAaqBJEC5FeV55HjCmKpAKiWmtKr7VcWuxwjBZW",
  "key13": "F1bbCY28yGSwTLj23jGtEVTxN7zUU6zxq1RCQrYDGGsbkFKZarU9YJyyHJobEZCWerx3GXJ5L8fJv4NFkVm2BJh",
  "key14": "37XrRzpLGmVZtnRXVNxozwioSC2tzZSYhjAesU2UD5mzGZDWtWqkmFZuPBnaNjhtQUEUxdVQ3pteEfBhK5BRcwKi",
  "key15": "3yZ92LBC9Vz2U9xy7ov9nQMYe9g3kF1YHYWUzWcodcnWRQwPHfWkLhwyBCKNBBq98ofsp1VsKJSjiBVpPsnoRYzF",
  "key16": "pkKf48E1yhubRn3XwZf8HXgotYD7QQ9fkPBMCQzzAJPEEQwB4qn94yFRxQcqfERtm1vBErR7yHNgsxw4N9jmqLR",
  "key17": "3ENBx5gV4na7FpCRVUVUo8jUoNVYg6c62xtFKjCEYzhirrGrQUeiBij5aELXB5udHgu6djzS8YKFx8XEERhWPJqw",
  "key18": "h42GSBmr8kocj1bBXk7yJxSPje3T4NYzQnSNwhMTTty87vwUZT8HfUeQ5n6W5RLkNNfCT5VAsZQWvMmmmYesxiU",
  "key19": "FqCbZZd7hqE1xaVdBLY6Vu7CJ1x4wkCKCeMwY4DU2MRpo2YHQ2usxyriQQm7sGBDdFwRafUSaTbYLZKTfvWTQxx",
  "key20": "2RX72wtvVCUcF8NpTSb8ZXC3Q8SJJfyogmDby2SZ9GMm9ZynuhXRcivf4was79FPkkRpUmuMkBdbW9h4xbazP9Rg",
  "key21": "2dvTAihm34uaU8yvkU16HRE9aXgKB9rhCBffvFfyvAicqb4HjhSrRJcJXdFEBX8j5kW3RiRNVQNXrAZp53DHVhga",
  "key22": "3hFmE5dXBP3vyncPhkA6CUptbnumpSZgjpkCVsUSqssCLR58sTdUPPFvRbcZPRJe5Yth33u5Vub4P4fn16yxojXb",
  "key23": "3yeargPP6xDwBg8UnTNTh7UuvdokBy4aZfG582NuuRXPCe5At4UdTNgNZfp2YUKMjoRFh4SmfKa877qvDSRkAybk",
  "key24": "29NTZBARE1tMqzSJPqpfZYFNY8UgJDvpv8dAmv26VD52UGTv4kZxRoL85RfrSMiehpvZqCu62wwrkwq7RZqnr12u",
  "key25": "4zmKwZM5NzAJSCfMfi9gLUWxZPRPMYth6BEyyzHyNqp4s6UFitQveRGPhFY7kct1sDXAJu4oZawpFCpnMsuHq9Cj",
  "key26": "4PTSyudwVnuoXZJdM3BnsoHa8ce85gdK3hYQ2ccBJsULVPiQYRxK7DEzy1weHPeaQqWcYntmUJ2QyZgsj3JYciyz",
  "key27": "4UNAcMxXMUubZkjwhSAaQHB2cVZZmDduKkGpuPkG1zh86hDkHaA6MHC7pTixx6GsjaiJ27XUP1ARTHuzZuBm7H9T",
  "key28": "5BaiQcYmBkvEw6qCPbj8JMNH2QkbBRm4Z4X1g6qZeSjFSgL8yzjYFWwqUR6aV6N47J1HYyqEfRQwJsW6XxCZ8CyU"
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
