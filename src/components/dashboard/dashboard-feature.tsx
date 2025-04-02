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
    "5v9C26TiQeyDfMYhDu11TCBA8qEKDyQRG4LsW91GnE5FQUQYiMY92BNKqisZaZa65iwuiU1cGkEam64BLsHZ4CUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkpShNBvo2ZXV8Y4nhfx7cb5qnTh4Ff5wYR3AUunCptqfeG5Fp513pb2hpAnkdYhvKjjrEd6pHTjbUFb5Q7UgxR",
  "key1": "5wFApDpuG5VE4U6WSuhiyP5anrBSfx1HoZ2z4g1cHUHjsoo3X62aLYuAyUjXev4LTPs5d8S2TZHZgtY5du28LH9c",
  "key2": "5oBuoUMdVSYeNY3RAVuxPrE1VFZ93a9bMzhEUGCreZk4j6NPoSqt2nzbC5phViaea4bw8GtshceUGYK4U9iEfC8v",
  "key3": "SaDakR4vCjXAB7SzTStnYoSqfh5EXUAL37aC7CXTH4hbHg16kMNb1f511NGvCWMEguaqRB6RgFaQ2J4MChrh4wA",
  "key4": "66SJPBEAcNCDr7M9VvddBeus1ForcwTg3xH4xuNyuRWXyfj8bGSv5RSTGSvvrMnxMDjnq3Jxhqg3Z4xUfUPDR8L4",
  "key5": "4j47CtTc2mBLM1oNeihKkJtJmx9TAQFCPp52xg9E6YojXvbj2uAknbm5DsgBKPx2Qehbrd7VrAD1YAxusiXsPnYS",
  "key6": "3ipstpwmgdTCLjLfL8h3oZJC8yjVo66TjCSpYXYdymPdEkoBdqXamWAprKDTywuKpGb5U2W5Ys6ZnBdqSEDfBMjs",
  "key7": "x6WgL7yGgw5VxHUj1mNB5aRWrwGXbPyqgcisoB79iemofsHQNtHDtL9mXPF7drXv3jQrPFAGyAukY5eg8ViGYad",
  "key8": "49KPYj55w7ETdqHS3UwkWZk178aZgebbmKR6AREV4aoKY4UJNpLFPduebBHQb3UZrb5teXhBGdAJNxsUjYxNxDGF",
  "key9": "2Q1AgnYBG3wvBoDUHaLaX8HeR7s5bUuKqfkWgvFJ4qmzvnXjabDNvWNurA1W5sCxXjniqdVB6qsJBKvutuCAPF72",
  "key10": "21wpMxbV1k7tWKE1mP3hWjQA6hiSwwh1pCAmHJX8khsXKSCzFJfsaHmMjjFzLRcKzu34tciW7s8fBrMsKKx5qyaW",
  "key11": "4Q9fJMEP6ZT1Kx43RJQ76dAC7qoLgFm8SCA57TDKpj9uav83TkV7bHmWhE3fBRNSMLyirkjwPPgPNSBCDqk1cjqq",
  "key12": "3sHRFEy8H28sMVUCVd3ou7KdoYrvUEF8WcPr3gK884yyan6oyouayLTF32jftBESNEnRXBwEuTr6LdGW5L2jTSJ4",
  "key13": "Eu3pHqZS6Dj5m85zHQfb2pixf26eBGDHLjY5BGyndWQnt3ZwQo94pEvKtQTMuU4tjGHEFAyXS72LprGYC8Eq1GA",
  "key14": "4Csq9K5oWCg7N1gxJzd8SKd9oUEZHQT8ZCVAbMhm4VufyMzt2Mk6c9c75wxYp9zu6fivPphb3xqP5LRAtypXDGPA",
  "key15": "5n1VdMGoM29g3SYqkhZgZzKPLWPTnf5BbMgGjDvjgKrFRn8z7knQKdtjibZnGgMxv7r1H62BbN31VUzLyhSLotry",
  "key16": "2sXwGGntH9hKHumUuD1aE26XbvAEeaKSvYUvcWKEkkKinW7PibP21TjNzeJ2dFQEjRmh6tBYqTKKu3qvJ8GWjeHy",
  "key17": "4zwFZMK5UAmrFwmh61cLx7BHXWxDvLjspDpkC3wZiPkDJvVZ1Xm3T8NVxnw1AxsHKdEatpDgtJUuuf3shSATuwyF",
  "key18": "5VUwf4jodKQmVdvoCcZigPREZZ8CGQcgbvDjS1wuRPjRYevDENi7ZMgKgyJJYJb84wfuSusXDyExMQa9s8QLVLB3",
  "key19": "2Sj9QSvm2DXmE9Cqd5pksKZ8B35npcgYi4iXdzDa47FLLNz4TbguYH5mu2NAqnqRxKFjgn8xe4Jvqh9NDQXD7H2F",
  "key20": "4yUKMsGzyeWcfESvx9VqGU8bdJe1w3yASmpwBAj4nxtz1BSZoSwWrbaafHrXZ1sHsoMQvu8nd1p89yx6Bo3z74th",
  "key21": "2bFgRFMtJJQpXZsvuXRFfHGh5N1WE8hjpPP91r4tPh3eyvMe6ci3YaFb9NwbYaREAFLHnkYtkRFyFK8nLgLvxsZY",
  "key22": "2QNFYsXas7EcvUeWBRdLt5CS6N2mjdHxn7DfabDgcu8aqUbXXd3mW8L4bt3z25KkyWSEprLtaQP3GkxiTCSX6GZz",
  "key23": "vtQEBxQPdEypY5es5jiZu9KUwu4J8U3UHSc7U3kCPtKsTS6XFxPeNPbv772Y41tTa9A7QZff1z2RXMaM7herXrX",
  "key24": "59odPsQuri5ya3ApWS1sUqTrMo38xH9BeVSD7BKKokMeigJrq5J9poLmvuAyBGLZBRt7q5U5Ws3fiDoeuCRSWeXW",
  "key25": "3RXgt6VGof1DFXvLcLxAaRgERpy5GyGFGFYbZEGGXiCkxHhC9jwbR9AByzsgsj825D4mnCCGs57E797qJ1BG7j1o",
  "key26": "2eoRPaGcxWZRPZSShFCkj4Bn48f1LXVyUmmiYoeFxd9aAyj2zDPGjp9vhCjsAoXcK27GUHoCLpXjjAudLtcV4bQf",
  "key27": "3vpsD55K7AVJPZckKaVmwuErn9u2sZECbSBkyDB3BAbvwAvxsFXXkrB8GUAkCBiptBYBa7CMLY5xzE4sv4cowYZN",
  "key28": "vAp3faBK9v83MsbvPoPe1obBXDQMVM4umZpUNUKwh9ZUZMCrVVMD7vQ15JKhZvaCkry3aEEcYMGuuK2bz1ur3Fb",
  "key29": "5bqctoTu3ArgSktKqpiKhvbQj6E5oTnafqyQN7Tny2ktk91ksGibpFy7et8NRj8GKGPXiHtztG47dPqW1xsKJ7sG",
  "key30": "2n4j2Q9jJP1GJH45NGBEPeSpMgwScWYk4uWZ23gabKpwAP6ebm3TuEtaTYUJTi6L6x9ZvKvPraFwbmGc2jqmKAX7",
  "key31": "3A7rao54KE1zetZ4p6kXRMdKa8Nm6reQaZ8pN5dKjKZKjwiLBdHksKmUWjfii4yvDwzQtaMuRyQvLgqPAxKWbNL",
  "key32": "mDUha4G9N5XKM74pejDF2z6LtLANQNnoWAAmCccHdQApQqhNhPsAU6vKjLo6pnmwkGT3gt1S5ZxKbs7zhbSEGtA",
  "key33": "2NAyVyLFsfB6TrWSr7UoiwRrWJqBtgiugbd9A8iQNFMDGQf2G5t4EByMaHXgkCNP8ygV2WsgsZJua6FNVzbYhFMe",
  "key34": "54fRuF5hkT99epGDTWAUTGqSEhjzb2Mee1kry8LdvNg1pjkxXPiGwfFwu9YbciLU1XueKyyirSsKTyDaZXcJYbVU",
  "key35": "3mqkRSZUHpq31rbq8Nkj2UucQKJz4cjLDY8GLeSzVbjzXhRVUHyoQUGby2WgkGrHodV3SwhwYLEo8ZP9eGX8UWvt",
  "key36": "2uv6YdVe5nsXn4ckemhdRGUJ8w5oNWAWnT37e6RSPMYW6FL7iZvrM1EiPmGwNw6CjvoSwEsyBgwp7M7XdpBpdWAw"
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
