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
    "2A7rn1CMm5YhkhnvepBUJergEGUDBiATv4sdygHb6RsjVpgfFbpAaNvRtKaoL4oc5pSB4VSzcs79WcfA6uE6BmkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLBZPCB95VtFEd7fu5qZZZgmXNF45xtHfrv2FXCNfz2QJCzchaQWv24NJPD3fQ1fk1nk7jBFvdyBNnFDutqYXRD",
  "key1": "5mZ5unopq8RffYenUd5PRn8ccZdLp89GQn9dTDAFZ1ARvCqgUt8xAbWPaavxExLRLEg8hasTmjyXxp3UuL7jRgK2",
  "key2": "3BMW257cvNpYeq5bJd8TZvMwALG5khEs3bj5YBnnA4Z43fPqXP8j5SyZi135EwPwCzCWvXWdm2BsB3dmTzXyZiVC",
  "key3": "27BKGPjdUiFcbkzDvzukPuQPuwZdRWNGAAdRLjDP4bdHjUwjz8Pus2s6kzJBEbPQxBZEU3JUN3gmRcTXFSdPAUBy",
  "key4": "2ajY6vP4LUFnVqQv8ef51qu2WrcwuZRt4zz11jSCyn8gmzR5sDPfYVSsTgkJt6X8QUh18k2bEfqjxqEqMdzK4VaT",
  "key5": "5tw84QtVGvK1BqF6hjgGikJHysfL6RGVLt3W2mdDERfgZTCXDSU6in4bt4AkThMjLEgp1uum6t82kMPwWAeinTHn",
  "key6": "4c7xag2rTeFWv1bPZ9XmEoFD2RA334q1pr2u62W9R2GSADa97YKguW8VZpw6c8zuDtMmg2VkhrMkLDwSMAVaVHs",
  "key7": "NxjQXE68T4bkyA8USa9uffqKJov4e6dXre7wN1TeCcTFGq6kJbQstnWKe324sxwcjQDaf4uYFeDSRYahvd7simq",
  "key8": "4ureJjWMRtLDVHJR9NfBb3H24WV5Qfq4qVHnbMqf7UwpAuuENCjt38Qxf32SB7nZaqTXumjLY2kQ4wiPEqrtpLCp",
  "key9": "1deVBUDRDEbaUzLSGEUSRzWBxaf3tW3KMQDgZuUEiKJ1GzonM6TMAqjJ1rZdKF2uxzc56N1w5CuS4aQ6WpjNMMk",
  "key10": "cqDE9GKE8mGqKepWT4S397UFGSFG8ERcggCbUBxGQsHNoFn5VfnQ25KukyTHPcUQu2hio5bFRRFqH7baoHn9NF9",
  "key11": "szPt5MyYxQj2wpXRTHpyr1QSZXkDhcxps5BmckxQF6MeF4aACm21jjVAw1Lohh4undtD1m7RJMCcH2h4NwrR2eE",
  "key12": "3buMTguousQ7Eby5k6oP7ZR2FdrtsuvqNRnZgHvwzuPQj8Zjaojx8ya8tvMddkdcYQkRqRGgN6cqj5NAMuLwWcm4",
  "key13": "2ekzUGtKSR557d4KK57qRCghNo8HHX2sCS5XA1rXd8Rk2syYuzeYmwiQ55FVZpwCcwE9D3L2c3S5R1kSotxSaFHj",
  "key14": "5gjLiMfrZ1oLLv3k8UXBctXG81QgxonVY9SvrEeZ5tGzuKFHHF4GXv6NBSqCYkoeaf43aYCfmFznNHovmMMzQmGD",
  "key15": "2QpKZ1gNaMo19rFG1CEzdXtW16fwW3XtejV43DbrGeHX3UN5nkkq7sazBwky5FY8KxRuSib9Ds1wu6FL9fbcC2aa",
  "key16": "P4Ra8o7SnSx5qvKN9GHx6hTY6qGTJ1NK2fSdpyWPiAU6i5PwPRY1PA4jdEPp9r1MECt6wmcY5G9Md79hqbPagmP",
  "key17": "3AazxPYmTuKLPuN9ooYHcm1x3kZXwAcr8RJuZ1ffKFMvFp1irn9er5wpTTB97MiAfHEJRg2pwZb1pDQhTBNWLbya",
  "key18": "4LaUDpLFfGUBPEin6EJwabhk6spGeGBeVbjR2gRofQUwJC19epNxpM4m7bquGwydoctaSKdpBNj25ve8B8cn44VY",
  "key19": "3NDGKqWZ9KLWCVaUP2q2rJu7wHyEMHdD96VFTwNdXU8CoARCfdoSxMYc6DQiFH4i3pMGAjQq8qkihZVsTxty6EfZ",
  "key20": "2iGC1oVV7ULRx5rbD9iCY79CECfFiTdcDCRjZd4zaDRmEEuqRFsDFmsXmUo7dfvcHiiMoBjyWYobX475gxjM1p29",
  "key21": "46r3mxi9v2htXNvBiEffHSBgZ9gtqwikfe6G5f7dVmCvKcTgfojW8xJYGPsZ3bDaayJBJFz1GX5ATxyaPLCEFQVR",
  "key22": "tvbFrijCvXbGnK8PpRch3JkVBVLdpY4mVDVfLH2fAqbxuj7og6ybSgFDRwDZbMMqPCAkFdApPNgAxkmE5w5dDTV",
  "key23": "5XRHGCAqqk8T3oedssoY9zettzKUWREVqZX6sc9ui85ZPLzv6SFjMUFx9W1b5M9sbDr2ZDewJYn3MywsHHimy5gu",
  "key24": "3rGmBa3NBwfBYx5xExGuQRk1HNdhraC6xvsVKcYH6Xo2zH3Bkr1sdJKgCgastgSxVpfsrLWrk6GMGLuRuvCeiWa4",
  "key25": "Mb286k52KAErXHbu8odqPfHVqKU5LrXP4Am4HH6osAhDu5KQRmq6LEwrxayYxPMMueD2vC2RY7QQTtNKD24Cg7y",
  "key26": "85K9t8NzW1D1RzJPMD8ZkA8zXwCcxhrHxX4nXcU9jGQf7tsCQYdt3r3CuyVKgNivjDFHCradqa4Gb7i3RnXftVb",
  "key27": "2gSRM1DUu869AY5gvG7sGXZabUdyBy3j3t6Dey6g8DAuSryrq5nFBJEpi2PHJntobtXoacewmdighFhoeYDQ1chX",
  "key28": "2yyf96s1f7aXsufPU6g3QwqZaE33gHyz3fqvFcfKgZstHiJqsUBjrLbdDK4qoDdsbyU2jgx9qqAbeE1WyWJW6wWs",
  "key29": "3h2VYCJs2RhzJ1xw6bh4BoETc9ZthpAqywP8rbNgT228ZAn6ZARykVZ14j1hstPJ7tWN1YXeowbduVp4nAxWMyEM",
  "key30": "4V5dTEUGHgqMTdwUExChZmrm1YyUtrQmtQzmDZvnAAMBYZwzJSo3YXM7xo4kC7GrgCzkkCQ23fiB5DppwiA3XmRK",
  "key31": "53wHzwjwgqQJLHbgoaFbrjAgekefs4MpgDVqQyWciZLx5hdrK6Q9zpju3beSPHWA1hcpu8PrEcHexBqxExRxEeQo",
  "key32": "5x4ksnMAKBDY4eMxpcu6jA6fk3EZM7DHnXmFtbEpWEhcCU3AUkkbEyLL9pGc8EKnZrV6UtvNXnwQBA11DwUJDWLv",
  "key33": "3uNVEyYoFNrtPwPEXV923Xtp7u11x2977QWrdgyu65mhaxvAq1AhVD5o4171W7vkmAURH4qP6imp1XPREiLYnjYS",
  "key34": "595ZPJ6744GZuTzRgoZYqtCAS5UaFSrmDaFDdAu8bug4bvNfy7ueKoCLx9hxb2mchXFHbnmGXVgFiuezrmEsBo2o",
  "key35": "5FJsNmGDeh2PXjbj6EBYXanuJtf5kBVBfwXBKaHPvyXLBhSnCDWAY4NJ1bEM2Wfrqh2zMQ8pBo5nrf2AA3ZD3T3t"
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
