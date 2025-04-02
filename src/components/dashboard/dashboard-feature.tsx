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
    "5hAG2i6P4BjMLqri2tJM2Cdt3L89W6uUVfCBcT7M3iR34n86QsAt4sJ3rEj4ixpBCGwC8vLgQrm2Z581RXyuvVCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Th3AQbNUeukaxVPzHGSeBnjwoTdpMATcYmqe1ogEnc9WffCP7EUUXLCgMnw8iNi4TPhSaCHaFfFAsM5tgBW7fAS",
  "key1": "xpJis8kGB66UHMkpwD2KpZkmpY7YF1CYrH5JMs8pB6fNkPAQSTAVJc2MQAiL1mA4MHbSD3F3mbbbfXc6HGExVkk",
  "key2": "UYQbeH8axxikcmDExa1gB4Sp3wjodUKTzg7hHpwDjzK6xf1rqcpYqB9A51m8wkNMcQDvNQek9GVyb24hpssLwBc",
  "key3": "4bjNivsc61CSf5e8yhWu4zHrywMdzgHVpA2zdRLCiQTNzaDf62MGfRNNTqs4tjhLajMf7XUHvjNH9DmZnRqwTiVx",
  "key4": "5yRbamndzyDpKicWB1i8Pr7gBTVsTCPKefpuRbbYcYahGvPMAqhWVxyzfvDwhnAjtLko2B1VhoH9f8cqK8DvGMnc",
  "key5": "49ffm9w8EUKWWNCqk24K5iKtfcWUFvLTBt3FDuxPx6jqEi4tLwBZebzvHnatEmuQvMWko5dp9Dx4RPrPt3ZFBsq7",
  "key6": "NsunNyWnCxXDSQDcummu2jq1uNrmM5y3BarE8fLJoXkJ3tN4ShBqTK12MzkeKNUqoM96haB2BPkJS1RLWvto1wY",
  "key7": "3EqahPzhgpnnxTDMiRovawRsN2PrVTL9Efzw5cVBuLKseHb16RwNLpanQt94T9uBDDSdBWXbM662UXXxc5BJqZ3w",
  "key8": "5cNTBVjhFD1V9dDmLFfXD3uRgpK6dfSESYwd1EQhQ11xFpBBzS6oHU9GmiXJSJyKXgrr7E995JzrKui2L25R4qWn",
  "key9": "5zg9zpxRXYpJSYrkDLB3Yjt6zwoiHC1DPqM9Asin1ju7dU8dnhvCiv7fnkzQX17nVHEiSurznobatS6pxZdHf8y6",
  "key10": "5BAf9jieur6cxuQoRKyE6zxCX3QFA96FgvSoVegVnYZkrvB86Xwht5wJEKHE7CL91rRKxc4TwURULHe6sPuQ9yNw",
  "key11": "3DPkrrknCAoc7tKskE2q9GjJ9E5pJLB6NTpwfksZ21rCUoq9PZrqBJq7tLZJKmDCpiGfStFz7Siq2QsnEcf1rCgn",
  "key12": "2TywCzmkhKNpWuxepeioN9FCELALw3TYLZnkuSdiJSfFZKGhW7DoRMZ1ZJnqnYRXMdo2n3qBgWHq4etXDU3DXVf2",
  "key13": "2MbHWh6hJoqyfWgiHivJhqnRxHyEPgCxXJMbpkj7yENqhNkBa6Efi22EVMiANedc3v3p936PcJm1oaoGtm6KKeH2",
  "key14": "5ojGtSKKuRge821ZvYpMVmyuRCmbCUGZN86pkBKAfjMAhf8rbBP4qe54hiaaXwrpM8BtfD3n2RLTZn7tcBwLCJUa",
  "key15": "47iVziSqtq5a8MTpfFgsde28apJVNczi8WNm2MLuUp334PX8d6mXKM6Hd3btvuVQkDNdVASZ2aqAhrKpnTC51yeM",
  "key16": "m4TJ5RCyqcfFhxSXn6P6pirJZ9GZkZ241WGhS5j3ziZuj4EwNKRMeJ5BNLZwzZ5oyhpzvi5LQaK66sqjAksAeT4",
  "key17": "3bfRjVTXh171HP7ZkJeZRvD4yhinzbSrDRQD6siqqiCvrWg6gTrGkQPYb1FHBGUfaZtZqMfTR8BYVUoocm8Ago2S",
  "key18": "2kuME5KHMW7UU14rGi5uqLTUuaBkCmtTY94a76sQfpSDuRNZBBYpU96AgESrpSUmgCaf8WhNy3CUKJu249WQkZMR",
  "key19": "3mQyxtt3v1Fk6J6XHURE8doKwgQTiqivoDfjoNGxTtCS8JCPN6A7MggdvxdzL6MqmCMUSEj2tCDKYvRrw3K3EqmL",
  "key20": "4d9BszVC6pABgVNafucxTJ5us3Rr5qZweFkbQuKuPLdGL7rYPYSnrYVvkHbMS3DPeGEErUprNCFJrWjShogZGaB",
  "key21": "2MVdFpnbbDkSaziT21fkvbxTQp3dMazYKnwbQwQ4uvwVgdbqVmzgr4X6bhuEpoVHLAFER9cXiGb9W59MXZASbPgZ",
  "key22": "3CvXLGtAmfr6KVTMF1up92LNbwQgYDddrM1NF9dJHZCkkEJitLMSxut1DhjW9L1sveQT7tCRmW7gMSeifM2sXnf1",
  "key23": "Li55Zrb6UhGC6b8Lz8yvvJQayzTCYQKvwWc2TjdAEmA6NLV3V79M7QaidWoPQ5ZbP1Ninkmb1CCgsP1dmgiqc4a",
  "key24": "5VUgtKgBcJKkBRnUVnrQx3BZZgwdsiT1zMEH6fNnbJsREkU8jpeFAxNEjjH5h5HZMP4m7Zv9nSyfykHVojoAdq2V",
  "key25": "3M4G91ma4c84bjC2pXQGeVwaxaeCD3thxDUS593pDhhWK3t7tigyUxUjYSvzePd4fAKLy6wnLCgoMy1LX4JcaQo8",
  "key26": "4ZrT9yfDdiu92y5rVeuA9xfvnvWhxurCDQsfWD8kCEPv5MZ9es2JZgATyhLfqrMDpt7RDEuyTJ7D3cMuvT4sDDoG",
  "key27": "dNCvVePhwV3yQzyCASN3V1naR67eju2pC6LdZESETmTzzwDaqRc3SD5CKQBBiCyaMo69xQ4fhc15suKdbvCBeiY",
  "key28": "5r9ASKmG2nGSifBvZkDSEWwBDex1zXm4QPimRQNPFSPa1p3UUJ6hGCHVtgt4o68jn3KPmB9A8sAeVAbovdF8iNEv",
  "key29": "4c3i4vefSKqN5qXNoyHBRRzNVU8jLd4xc9ZgyB3sTZdATCEHt4KiQtayNx1G1g1iaT3taeMEHWfVCW9zWmm8q5KT",
  "key30": "3kTmFWu5ETMqhJkBuqArsUZ2FGwf7vHunyBvsBSWMBxjSWqkf9mZaozBnr78N3uFiHSmcBbJYAaznBaFo1CMnRNf",
  "key31": "47SL5JshT7CxK451BBopqZ9n4WbytYXEKjvMKDorZqY4b1ASc9gRC3kgSQM8Rc9wqae78h86C7kzqH4DsgLN1zdt",
  "key32": "4pAyRiNmFD6ffAvqU5VwvdcfTjhJKyCSDzUTKnurzAHUjWMDAFdh8xgo8SDzB3NAkU5pikwDP6a9FEJHjgohAZpx",
  "key33": "2XzeEZHm7erxidgkhXvpEcppaiMJNPnbM1TwZWJAmqmdoWL1DzuYVhmuPxEisjTjmAY7uV9Vmi4VR3yv5mjktV3k",
  "key34": "37TJBAXERpY3SfoLg5K8Liofs7RiqcLpSaP9APmkeFNybnkCKjTrSP2XQo4YTJmxiUqShzeTZEHX3ubZ3bS2kh1J",
  "key35": "2A7pfSX1Zg7XYEBntho17oU8VnrdWq8AcmSBMbuvkoCYJFRizqeJae6JDE1f3MTzGsYDQMSWpQe71xx6Q2QrMc4m",
  "key36": "tVFgB1X6YWGNWWV5uVaS84zLMakM7r7i6WUTC9cvhLH6Q1UDrAcWQsGKLz92FvAGzMJdaZfbBpsX5ywtKLYDbMF",
  "key37": "2VPEXEHktPrUzeL2fEtmjdwDovNs9eNvinsHfDn7eNYEKA7Q2t9ZJ9qG8DkkhjgnPUcjCZmfusuxEWaqy7EA2yRR",
  "key38": "2pK5qJL9M3FT6my9JSZWa5RVqfpbMJoV6s1jir2kxNpKDmHYow7ycVvQfX68gbmGZaj6CSogTFcvAZP6Mhezpiy8",
  "key39": "3MdJXJrKx7HpraLUZMSQHmxQbRVFnFoZhsrF5TEkEhFVLgQxhciTGgsSafPNxvBKnJFZnHFRsVgQgPT9n1cFL3Ne",
  "key40": "52GKRGJTFtLGhpKcbUYRA6wo9PYEAbyqSVoGcDXwFCAhT9jvoaTdcyN5YBo8C6N3uTdw1qhyBMNxyncU2U2iNyTN",
  "key41": "5VWGw8mkJqjDg9KbmvCtVjnrzrqJHzmyJn5SfD4GJLnTQu1kAba7xdtAfQBMuZQhiK9c2ZjsuzvWgHVdRnEgsT9V",
  "key42": "5P9PK25T2y366wrS87g7MD7L6HrnqBijnMopupHViowsvubn32bcKxXH1apfJbLZ7SMb154AZkdU1yfyDEnaYa3j"
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
