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
    "2LSCTuBGCmSzhD77pDPmREb7k4GT1FBTX3FHfrgLkn5V7wr8vAThGhWpdPMUN7AcMzHmjwcL4BbM6tJ9D69yY7JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RUGaUKKkrDFf8vbv92xwXNF15ybcEdXwbeRbnDdK7Pqwa9VAhTFDnk6Jhtg3Rzqz8P2oUQWJTX7zCxayoPWgete",
  "key1": "4c1DBp5PMpxGnUcCQo9etMe3u13qBDHXhfa61GiQmNwdoebyWMnYxJf2db565ExL7rUZ9sMvw1LtdKz4VqJKqUDh",
  "key2": "3c8WfBocxcMaDpoRJEX9tENy5BtSRKjAwTkm3GcR5to2HcBMfwnhSpCKgXib7YkYqgqTKVtF6NYRsysANENLFv5L",
  "key3": "2VvhmT3MZksRrJSETaC5CqZmGNG7WBbb89vu97FC21vMbPEgBvqfjN5CfYcvdpLgPcVPBohGkdXtXiM8yjnaGQBr",
  "key4": "5DyqAsDzXdo1DcvdQAW7TcrtRo2dkaBqqcDkEoZbUq2yHwytpwRSKW97odjG15UqwMQ3tS48wdCuVpPtzWf8sTBK",
  "key5": "2v5yJ75BXfirNtkQ84N2M6Jb3riMsY9Y2eQsfCTTEc7852AVZzBRFieVsR12VZAa5HnzyTsv9in7yuGhFLjMcmvN",
  "key6": "2raF42KUWWjoXZhn59xeFCHzBHHXH4iLMYzkqtDkhWLWa4qAaKtraUj9tJKT9XM7fn2HXmyJitUSfvVs93JitDpS",
  "key7": "3pQwYYxYDHeUFQki3wSCVDGc9qEAjWAx2X4ZiZDziHrsWpEx7jYBfVAZZrf2ku18TrbXnDT8DK7poZxyoQjcfXrS",
  "key8": "3to27bTiPKKfWmNiSmH9TqDjMWqjJFkH7qWTvJMq7E1FEamT7LMXVSnLxnmpLrMf176csWDdPnRZgNsEZS4ffmzT",
  "key9": "5hhBfpFK75V7srBvKxJkjspfKWqeM5gZ4Uky6oB6FDTV6hZ6ZBau99fPrkC64GvUp3wGCnvALib45oBUnEmLteDN",
  "key10": "2vtiobv59zfks9WdfNQHu42Yv6VWdow7a476bp5yGzcdjDZL64LcyExg6UN7FnRdrQgdSbgWVpm69d84YmqAdThf",
  "key11": "5worEaptN7Ccn89Rb7dtwja6YZsJDUjWd5XxSrJhMGV8teR31ow99xymPoBNg6kmem2y7LQxxW636c29p74dJDv7",
  "key12": "CxeWygjPhvFYJMvuFdyDwttE5ymTzBWQL2pxiQS73CmnvhnKVPFhbhwCoS1xXorwNiGonhXAxASAt2PVU5FuYt1",
  "key13": "3P9BY8MDcW5pZ9GN5fHiqfToALgowmiGxGYVXWcAVHS77H4xuz6hN2WDYpoVzcxiRScmoqemtFjpKvzBQEiJHavt",
  "key14": "jAZF9aChXBYZG6XmqeG47UmYPTU12Kns4WcdZPoNZbAfk1ydv3y2HAnopJS33RoP5XtKR8Z3Fd4iQcNJiBhyvhy",
  "key15": "3JFjWEEMFMuz6Jz3wG8qyUpmxbqEKRAEjur8DGFqnKBgrPV8vLy5pDYRvZCLB8Awn452ADpNpysEf9hpa87k4dys",
  "key16": "9Tmzzs5G8L35Pq1YZ85tkx5dzUsBWjMHCbwUXCefwD8J45Hq8CM8kw1Uz1xmMBYJUceb76Pu282AiiMYckWWRwZ",
  "key17": "3Ev3dLd44MVaeJFAx5dewnNMoTL2MkW4aR8MoFDdSCBfPgMNJRnrDxp1jJtx8DffQvsmU5JU8PkBvDnP3Ctgo9bz",
  "key18": "4u5xC2cqraToKKK1rZg1Fk171KNAqXv74HzH1kKvWRkP42yPWKexyEsJurwL5J6UfVy3ZK7KeFvB5w8f7XyV7UWS",
  "key19": "5QcQW8Cu8zwU2bFAnpXVyBJq6b5GCWbnr8ZgSvLJAdQVCagfsTAX3nF2cH8E4JjGD7kAFxf4BsujrVWRjRbWCGtE",
  "key20": "4oJSust3VnPJAwCjiYxPd81ZtTwQSykn7y1PriRn66qTSaY1neCGj3T6snmzoSMNez1VuDRRVztxP1GABwHRkzdV",
  "key21": "4inA5MENSGSHRJUPntk8YmmU3baqdbuDB8MyRHEoQNYM12EiwCJX6nDy1uCDnF4T99Ky8tN6MF7HKK48Xe8a5Nng",
  "key22": "4KsKyYoNEipQc1vKCEnfM1EieEhnRSzeQNKeGX4cve2Wqqt6JCUyi6YLTdmBVW2Y3zwNASfYiUTPCrAAcdEfBoQt",
  "key23": "3A2HLV392vDD6HTA1bPrtn8quC33nVFjkMCVToLbUsKRMFAZNVYAt3uXnT5nUt44NBQLPiroCJkrDiMrnEbPLK7r",
  "key24": "STp9oiknRD4csMNywPXTyhBd1NWGc9B4kvUQnywoiukXp9MeFd9hAXLPCFSv66SptXtPzHcV7v6WHhg4RSStxxp",
  "key25": "5Fe8wGdRThuyenyd6gPHn67EtVuFzxZmq672SDrPbe5ninWHMScnFn3TB6QuzoS1hNwdDegNq9sJLmgEFoBBM8NC",
  "key26": "4P1vZJoju7rsZSgE6JbcmbFECGey1sDsYftNMzSf6oo8MGfzEFYhW3LwdLWMjfUkpUjkyrkP54RxJ6TkSTpgbfjD",
  "key27": "2fnQ17YnQBnbMayUNaFzm7NW4PBPZHth1cFL1zd9CsGViPu9g2G1piNnMvr1QBiLmgWsHX6msDtEKdFNN7CnjykX",
  "key28": "WkUHBPiQRT8SxCduE3zT8EuxpFWuD5d6S9NaUafz9wH74o95dYJqD9BMWwto8icusPHLK6wofQGnkKs1dGG6enU",
  "key29": "5ERCDuNBJaoEFfB7ooGFsdbxEDHDWZHYDUcEkGUP7QDju4n7nk4L7BGMhT9kotRWUrkyA523R6HCmsWyqVX9WHSv",
  "key30": "2BxLKoTuBm57vyXkmj83JFWhXtvtK9ZdjnCB7NShsji2sp3q8ffWcp4qy4hbP44vkHxxBPxHuFVozHQ7e5X2RSL4",
  "key31": "2GEjsboPZUUmxCywKWKP6Uxf6qnTFiuR1TqSWRdf8AHde4WGEqmyroTs9D3zZrBvgYc2Zwce91FQUbawqvszPJLp",
  "key32": "uShLUPEGegZiuChtspMWFABcKfqmUR2ewEBZepXUHJaRFJ4WPzxSnCc57m8onqQXPHEFKMtizhSjTVjkLSC8q1d",
  "key33": "59svKgbZpt7bCx41bo59cudUDfdZkpb94dtY29ezNrsyTEwzYBjTPcCb6z3sPh2TZvNUPgZ4oBX7BXKtje77TF6G",
  "key34": "1A2rsoyrUZZUJbhDfMfYMdYMgismHDkupRBbBVeRnXBggujX9KhjHjGMebAjP5ZLuTN9sjPnEHHqZ9u6Utq173r",
  "key35": "JfTTYhunXYWZfN44wQhB1FWjuog25gJaZo8Zw6muPbDFUuxgHHHctPtYXA55rVNu994YX6MEAA3hVZzrvk7Cipx",
  "key36": "FUdsMg25pzngH3ama5iRePnw41srm2dpSsegGN8GNpHo98KiaRBQDViBNaqnvBK2Bs4h5x36uPvzadjeZB3L7SN",
  "key37": "3wJYZjgguJQyuDX4a7ogzHTRGZDrBCWeeornrLZarSHTeTEfaDLgyAsyGXjf2UqK29WeiruRyc9D1AGob3FfDWpy",
  "key38": "5wtPuz96VyihLUY7b6WeLaH3Bnbgf67bEAM8NWhQ6V7u6eswQaWuVZA94rfWQ8MVFe6e1kHh6efFiwkHD3MScVqw",
  "key39": "4J7KwyfmyoQShf9tBYJ6hrja6zor2sS2JHeurhYmHBujx6cFknkb2zsgkdgWRbRfpZktit1vfJ7MwfEgMPnt9YE6",
  "key40": "5Dsinhy6VGnBW8XFNU5Coy4q2TDx88GYPwxPCn2NLH2HoVfG1LF259Bh7zi5PxZCV5Dy4U9c9zPxMCW4cf2Se4Pw",
  "key41": "4eUxk1TSgSkC1LyBG9ZC56LYrdctSr3oBQkZDkmox5ftSQEZFnHx1cdfXpTCjfBrmgbZKb4goHiXE18EChnaDzDC",
  "key42": "4npSUyioLuwdEWnm9VJToZRsk5utjjGMocnumirR2pBKNP68fCNX1VaKbYo5tTkpZY3b3ZZK3tSajKenSMzAYyaA",
  "key43": "3YqBSmVbKjKJA6qayGHQutdwmi71FHWkjaofddnMfE2LZqx9Zr8i5959ySKWnF4yhZ22A4woRw8oPt1ixphRS9A7",
  "key44": "3aGSxYZW22VxaENwGTYgZowyLZpP4nGRgmGnPhXonGU2CQo2KSpba1bor9vHpxFmhYn9hx7SpzmLZPXWwVEnrXdB",
  "key45": "3zbw7XCbC5fDrqKJsQ23MbE1uthCFG4yXcyirGvkrCfciQ6XQ9MgMSPTJuvHfsxnPQRQRY3qD5Vz3kCuKGdG3ewJ",
  "key46": "3ZCCK9DYXLWJgRQ6AyXNK4jz427sQFHAkHL77YENF43EYN5rQ4G1zxeje2Gqbu84g6MEUnZ7Y7bp5F8v5g4zL7uf",
  "key47": "TfnNkBKNKMECNwXmYwBc4SWK6moDSgmgRAi6EodohWhmyCSX3VCiwuCLUJgvGaDdUQmN4vFhfGGAWvMhiB8YRvQ",
  "key48": "3PfzWmG4KW6qAHndTZM3nTwgyqSTgnGoPti4KsrcCJTXqcfEViQq54hvnf1AkLyJUTssJ5rPG5pAk1xWLjXTBH8c",
  "key49": "2pPJnbbAoR7ggxcUsBGwoEXou4NRmh5RfHwnko4VGTeLaZREdwny1DF8fJfKMACkmpVnWLSw3EfafVaXMbh7H6Z7"
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
