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
    "331qFUpparudXFd9x93uHNhZkiX7rJksQGVMwAKfXnrdYwRwQSw84Zd7aZHKJ5Kpha8tDo2RQmn7d6uKkwJHc6eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FYCWLotb3KHDQbsJh4K2vNv3cYFvrSVzrcaGhur76YZksHjV3rX9YZhBZtoAjYSMfuuMzrXRokRZqVC3yfAbME",
  "key1": "557ZXAeb8savoVSVzagv8gLVAop657jWatZc1y9ygvwKYWGZmYrbtciJoaAPBVK9DQ85J7hpuyd4HPoq1uzFHbLZ",
  "key2": "3ftGQ1d7Y7nfaeNAyyBBqP61tDcANVEpFAWnTy2Xq8zRJzraHuN3zNWDnLbf8xRWypsbf3D5q2oVt23246FqmTj8",
  "key3": "4iUnuCHshj2DactMSJSYfueHT4ek9tpoVH1bMRpBqWdTvM9pQeTNAvoCC7SvLGAsjQ1ShNUMvws6f1kQPQPXZJMx",
  "key4": "57VxajbCkNHjt12m7TFQc3jYAaVSzXiUMwgcxcDNzMobn3bhmzpU6EpXUhKwZaRrjHayhGFD3jgQcYkFBqPNA6hr",
  "key5": "3Z71XABhETTtk28AVrUUpppnonxRZAJS4SjbYANLFsBHKMsXK5deHMVuNePBhJaX9SMtYDjvCBWHydQPcRZwgGxA",
  "key6": "4NvqLzud5bGWzg1BUv9hYD5tuxmd5oRpop6Q7UKgCiANZvUx1EpbZKGXckwEnbKiJNReQrio1XR8DSxEFTEomoqw",
  "key7": "3RywtV4GLdBTfdgwYso13iBfFESNqj1wAoPPLmYHMkqo7UuaPQGiHC7thHxsavFTEUv3Bxn7EQ6VVKrs2vHPS3Gs",
  "key8": "5pVNYsAmheJHUAuFcTscckEBr2BxHcLzTBYof9pUyD8dipjnPVREWKapvqSzEtkP3H9Hg7PY566zrfqqYLP3jXLL",
  "key9": "AwD2sG6wTWgPzSStRna8jq1JqaatBV9SyD7CxtJUN3VWkuH6fiXFNUsJuL8GnFKdjveaB2QNsaZJ4fUYcZuX3LU",
  "key10": "48tEapkU9QNc9rWtMY2s7DRW5DiEo7txQ1UPPGXGj593SNSkZ7TBiu7W7V99ms4JfNbB6hNLsxKPvWeeHVvDWU37",
  "key11": "Sh7DsaCTbs16SVvZvFbqaQEKUC9tZCi5YnRp81AtSS5FVTRWN1jHS8rsAQtrngzepphojFDBFVqtQZ3QAteHpb3",
  "key12": "5vR6hXnHEh17vLE327ajF15p8TtYKBCYM6jC6XVBAY68Jt8kEMJfVbEqtT3DRJzKBVoB4Q86MczorjLeZfShctue",
  "key13": "53XNSEdjbStwZg2hyyQ8VQGZyhmGD6cgyRG9DgDtdgeMKuJwHMKvKyFYfeUs2bPu2fpNTFaNVrBVPMBhhaqT2FRD",
  "key14": "4awwHMGJUf2soAm8EkAAfG2GupVKsFphX3skFd9jCAHxvLYLt1dLhKj53f2up72U1EWXugKbKG4Y8QLDaVSbT58y",
  "key15": "3XF9Hi7EZCrzeZKdXVvMjf9jciW7cDkGUHwUGqBS8JqZyabMDWew5zy3jG3CecUzKdid32kvC5FnrZRkymo83wiB",
  "key16": "3MEuAvfbSPmsaC25riXxrc2xmEGB6ocN2br18xNT6FRsG6yfDuHufrhU9y9vwBCBgrhP9WSuc6LTe8ZuYZNZ7XQ7",
  "key17": "5tJaNq2prYGtJ7NAfkSUtZqk8Q46tMopFQHJPYXxKYdTL1kMmyQDTSuFKqXLzDwbsT1mTsNSqaG2BZup7UeJbXhr",
  "key18": "46z7bi5uEmw9k7swQfcpga8v4UadSyeNM5et5GbgdNmu1fZfYB2AjinLDznwWcbfmNe5TnegDpmbbSkJ6BhCoTmC",
  "key19": "4GoN6ZsRX9qF4L39VvwYmiTNKzQmXTEEVFsGUoQCZUgeH6S4F8nuKW5cZMibUnsMEFGAr7pSed4MfXVeY5mWiQ4P",
  "key20": "3TnkCe3NHxyFK6ndyCyVaJxEPHE7uxdLBjQBf3tajhmodRfwGhGZYNVziUmTyfnvcnYzGg2y3GXuA4zkBLFcqgce",
  "key21": "4ejwAZn3odTHrLTLi9oJF2MUqyF6FMLptTz9zx7kU3x9Lc3s3M8eZrRJEJ5BdTycR9choKy8sN4JB41JmBpAEV5a",
  "key22": "4K5FnuUWvb1YMGjfUWVMijzJe2SZnoCCQ3JvfNyVdCxLjgJ1XnKKR5PgEXLbjN7D4cqok8eV3aS4P6jFCQT9r2tz",
  "key23": "4XGJ92QRQ9W6omLaeUkrUHo2t9apf9CybH5rTUx5qeMB7PL8JrewXfV17ukgDnSHo4ce29eUNedzGMij7nMursVY",
  "key24": "5hJbPSbkYTg4NTaW8Kb9fyQHB7a99QUUPwWXdDCmfVCXx8fUn6EvAoEiZizEL2bzA7xcAhtp85tfVcqdWC8fE4DC",
  "key25": "3M8agp14CXUBdNs85PHjxAaGQFz55XkASi6qfXHUen1DFqBomgPXeJaG2Lqt4Ge51qP4d6dDYHyhrBbwXY9ZCKtC",
  "key26": "4nmmrsSQXa9PFQpqrLmiq1jm6cW38aayVPTE1trTC9dzkMadwXYBqBWppnoEeThd2VSMTV7MFYCGHEBfiYACtQxD",
  "key27": "SAmXUyfkvTr5g9npeYBdWrFm7eCaTy68wTz8NYRoYGqjVsAFgLiBX4fwvHkH1cuKepFv4aY1WQReaFUqojVKinF",
  "key28": "2opLh2FmzmWR8nLbbo6pT4Xgip5GekH6te1yijbDCeVghLAD21t5KkDePprM9baszh9fuy5M7if8QYczVZw7D7Yn",
  "key29": "53hhNmZV2TWTXNnUpXZ9FFgdSj8yNFDDFXpL8XCtPfiiapvQBaG7BS9oSmib8bTj6qeZjqb2MjvdwppoiWBKzjBD",
  "key30": "2TaGaWkJCq8Y6w6otBf2sJDXng91CXqHUGWCVvaXYytUWU5NgUVBxRyfWYSiTWmytcPA7BBYfXmANdwne1Vt4yRf",
  "key31": "2FFS44pdKJe6Yb2K4X2fBQQqB9xM61ayrGT57xyFCqMCdcAehdnZuJHmJFRMK5bjHqCQpnVhqfue67caRCPhxaM",
  "key32": "2s8ZJz4uQ2RSXdi3wPADitCxM3NYxg11ypT81tJCDuTuzxGcxpgDmGmBwmyTVsLoKpofjcYS1zR9CPM8jtrkhCyK",
  "key33": "5kKkAQ88pquFdhWtW55TFCWzzE7rPd3JQYzszaMUoEgafCPr79JAAPNoCBNoeKnxf3ox6PCREfsgVuixJextn5NS",
  "key34": "2BiRwxxdJzzr26N6MN5tagE4HE9C8rmFg1QbU8nF85hAeJyKrXUcXPmVBSUg6vUMBBW36jV8PGxRW2rFZtucaXZK",
  "key35": "5iYWKaoBV35WRc6BCcf4MQZnCFLbqGvNxWGGhQjhW69XasBsDZw2nWwLfh8ocQKXV5y3VNEx9MniTnpeK5fFDXga",
  "key36": "iUScnG5rWw1vxjgibnRjo9hvAC9rGbkmGKsGg8fWeUMMn9o4pZhBLk9cS858qccXcA7ny7ciq2ELshaRJTHxBNM",
  "key37": "5Qx3ERTQEnvFb3mGQsoBBautw8zkXQhCwMczDQ5haJhPNo75sCwxYHNQe9MpSHKfJBguQZN9drETqGNEHGocqHAR",
  "key38": "3d1SXhQRSigrr4XRCVq7LqRXG4fsrjNekNXnf4LPyoe8KcMZpVaZyUiKbESKUNdN63eJPwQy1tHdNc8mJzVQEopE",
  "key39": "3FjM44uj6tiCKp87fpLqmrQ1D5T45Ta2X1t1AFDzhtSZWM4FAbeWXq3up1vZbLtx55VP1ofpNgTsEVZKwiDZYWCp",
  "key40": "UruEFBGaNv1itiTRNiNEgGfiB7SLBL6KcUCj7v75w2gGGvCgNupczrLf2LJw2r5p3XH542U8sMCGp7CGMAymKBw",
  "key41": "4EUB8H8RqhtJdrot2xYfotvHCWpDnFFkWpjnjWnaZZP3i96dsNUHSrh6giWidn2QbLwjRMt2ob1PBA8bVWV5SE3a",
  "key42": "491WgFAZiQ97zbkia4QaJ23pvA9S5YUpcGtzshQmkvKLAQ9LNZR27hUJUdNB3h4945X1Pou9rtQnBuCXAX2bEp2Z",
  "key43": "4PAGCYEq1dhktGV7aVhn7gB3yB8G4nhwPbLEtZ1qPzZbe2X2j93bTWFv45o1BLSyCnsETK7ZSvSg47H4cPqH4prV"
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
