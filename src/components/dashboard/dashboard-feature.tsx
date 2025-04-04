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
    "xq5L3h8LJPLk1pwcrTfvXDjC6crQeZoagcbnKfTFum2o9ry8yziRxStF4g6U2fs1u6brZKFJ6wtZ6a9jC9xyB7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5maq17vmFJy3o8k7h7j16XtvAQitasy3rW1yimCdWkHqEYJPbnfHaapRFQYadYZ9yP4i4hLGLHbThi84HtQnZ7T9",
  "key1": "5zNU2fQtY9LPtpqqPuJsQmzqwdJtc61Kbe5Jniw5m36hEtnETwD6wbVWmzZ1gCSBFXAcVNY7yGdxfFuqa34txfFS",
  "key2": "29zTvNnLewmAZ42aZc3bg9HzLbL2jNbJ783EU96mgMqnkh6Nb3mx7sMMvMb5BUhyETdNrpRpU7LBEL6rzyjdd8xY",
  "key3": "5Q8mGVnKs4MrK8p3autaseT8LJjSCLrfEKtHMBfP6zmkfyyJq6fPaHQs1UiNsQ2QTQ2rCdnTQDJQVTwfjtj8jZjw",
  "key4": "25oNLrKgLj1iVvLSQvojQ4JNB7sAQywxmp5GiS1VAEcfadKkoXWT3M1yz1i7Pqu7Xnkc7nzqMQ2Pg2rx9vMz2nBQ",
  "key5": "276LTEEoNfMB4zRsbuNxtmfb3mbUQ1HJXudu2Vv4gLsm5swj6BtDBFqGgGHtc4GgEgYy6Vh79HuCUzAcr5FCMeh8",
  "key6": "4KdcfboR63UnPVJbruWyv8iWdxNuBY8uKuewY86kYoc1yiV1AbFF4T57vxSuXh91i9QKEdJJU8iPAwyWUWtbSpSQ",
  "key7": "2hU1NCZdWtrv6BwFgvTsjDYgvc7vKZq5sc5sD72Lym62n9wNBJw3KUkdWmNgcGaPMHPZspTm6frVN7kgyfY3z5wH",
  "key8": "4EsooAfymkFfbDvNUGkTxsdzuWoeaNeEHs4X7tvtvM66AL5YHYyDhkF3vPMvHvHm4YxnTcFcxd9hBvnL4bN6Twoo",
  "key9": "3vTABassNBzK9URMb5W7UdNatmsTve2oPBhTpRCS2RjFz9HkaDq5A83rLeA5RrE8apakHXBBE8TRrrUnJY5NUwgW",
  "key10": "5GAxu1A1w7uS7gDCQp8sEkKbNhLe5ntGNR4KwGc4hQTeKgirFETWiHBUqVnfG6viPkWa2y5Y7onPPVQ1XK7Mr3n3",
  "key11": "2KdjF5vpRjsvG3mnruB41LqWYXr3ikdeFadbxymZ82iKtuMvmgehPYSXcdp63mf2jomvU1KZ14GCsJG36VgSVcnm",
  "key12": "s54qVqQUz7E8wgidtDuxrJyEoMUQwRsGhF6phuSNuVcfbHoWf2skdYvmT9M7cTPMEUzQprSgCZAYVQMugpniaQD",
  "key13": "35jxAZGj2oNYWXheQfvLvDdQUnzuhYVZmqhExKBTq4gfwa6KNEeafWvs52KuSoVfFn8sCbvxYyCyXFSqbSdDwMXL",
  "key14": "4tkHXvZfjKJn8nA51ihCydbdLLe3ABpSLmd9FHuL8dD8fwM1VLznwVUfFGjABTMv6xHv5peCgE4Bdz6fNm5NdZTm",
  "key15": "3PCYYkutWv9ERj4p2wUcLPA1YsVvZDneT6oS4mwKnkLRnYj8yo7MPRJWtw3isK1BwLa7yqm9v6WYovR8AVvfHHy7",
  "key16": "57AVsfBgbyb1PcydFNESG5JUx8zzHEnMRWYGuNNCFQHTzRRpSra7ywPRK2C6DWVQJathKGLZnwNyKxD39aBqGHrq",
  "key17": "3HSzWnXASxdDc2gisBzWcbwHwJ6cJ1v28JZCnQ11Po3KrtebTJMTAJa7NiHZ5coTEiUSxC5ga5CzWX4VbWq6c7pL",
  "key18": "obPNnPx9KHAvdtTSmDMyjuEUEZjytBRUAtY4tgV11f1WMtY1TT5GjASNa2uFRXsqFWfHXGnQhsLUtmdJa1h2NFZ",
  "key19": "4dV7NmupHky2m3Uk81qJEti1HcPLWhXRS4QRcQCNMkAnTzfn45hLGXjh1HZdsvwn9cg6U3ACD3wG2Yeiptj1C4Bk",
  "key20": "WcjfYnYYkEhbSbKzDzhmYvetPzJZaRartWiJ483qpjQS4ZTuCGifGwmg16MmHugCPTcFfsCJsytAezNZNsK7nde",
  "key21": "3PpHvkGKPPfeNrJoytzWXbf32wKa5DgYRyDNJmyR5aaETar6p3smjGyKr2R6XT2bV3ENTh9qDQrQACDWZAY6azdt",
  "key22": "VUieNhU5qTgrP5R7nkzio88GnDD2PQeaaAudfJcJPUm8ouxT9diKWEcu34Z6acbkSm8BJLetrNUcoRPS8UbuFG9",
  "key23": "3GEqvM4ZMDEKpNBamEmb4vHRMp2co5eDwnbaFPArjhRBWRNV4ZcLF36omhohQHm56Dj7UqtF9trbvoKK9UbYw84o",
  "key24": "2tjKY5ksSX352Ci1PGNzcZP4mmLrFnXoDJTyKrk1NAw3UdJfXajQ7aNNU8gabQwi6RT6RecHQ8BNmwWg5W6uqCnQ",
  "key25": "3Db1e9KQVNTFs68uS3WjUnsx3LFctgn7eWbWht6KiT3v5nxp3qqDst2hHb8uvP97bvT2x31wYZdSXfqsfRBx9zXz",
  "key26": "3hifRNZRtZYLu5ML3Muigwivu6WztL1KToNPdbqyZPBZe9oe3R2VUT7WJVjYUFiPLvhNHrZUzCrEidbwbhXf8UGg",
  "key27": "5ZfWwNPhqywcab5W6JAGt5puqDQhgm3vnv5UqRuz5m55krDLH4L7TxNP9VyHz7sDaoWS5iJCGGE3sXhRie9suGDh",
  "key28": "54jtayet2xdKabAF2Xm1tD9DfKiZeLAbXvTaLG8ftj5jemorNTm2ArPyGTys6aNr2F7cgZfU1xhZB8xd9uzAou4c",
  "key29": "2gZVRdqW5j1JJVY2pjrTyRAPorGDUQNPeYRqnZ3H7xzXA9cwESEsRFfxaFdTS65ZawKrNTk87Bd3PryptTui7jrA",
  "key30": "5BfeUDD5UuUjdVvoW7JkWG8Mwp81YPDbtcv9vvzVsZNczK8qyChQoTUcGrsLbsQZ22Y1ijKDDPseWttM1WXCxWUk",
  "key31": "UyfBXSz3zq8QfSowqfz3Bb52GN8HgYeRXMSjJy2yqWaiKt28USsF5NL867AnNs1FVj8fn8JCZSvbaUvm1cfHt4z",
  "key32": "2kT1gZcWZv6p7nNLsDMgcjUsKE9Yfc2T6L2P3pRjSATu9QzLSUDPm416vimRDH7F5mBAaL3v54QbwKZXfnHX2Paj",
  "key33": "4a9g9xJnWKQRsgpFx6pwVzfoJFrJMao8DR2ACE1LdyB4m3dPDauxDGfPJLhsY6r5PpprwZmtQF5daAW4jRt8Uawr",
  "key34": "3cvPUeA96PGRJwCBJ7rfZKFuZbYgYLrUTv8STiTD6BZ7cPszTHZFTxAY3xqErka78U9B1MjPKFMBVF6rbEaMD2DE",
  "key35": "3dJbGs7Mb5sLQoToAHJ8yqxJVj1W764kNPTvjKrBRyYRqGCB5kedUFrVrcChqkdkqModLNoTeQi4JtQ8ekXuG8DS",
  "key36": "4Ww9KNgfu2DL7mKqNFKipm8evwiLbH1Z3v9dbtx2BZ3bhpLSPZvpSpmCJM7M84DYiRjYfjGzvfvQNydCWYG3eUyP",
  "key37": "5nXJKoxUdjBT6Rc865bN6tcavmu6g2CKekRcqTxvgdbz6kKoYpNkqvmCQCK4DpboV5nywBgT6mvw5hxoPDL7rMeb"
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
