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
    "2WdjXrfJE4eLBKgHLNUNnbQLZbftUuwz2QfDgpkhmNXWn2Fpoit84JZxSevy9SuVizMwjVqq8bA6H5JVegxYFucE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XndZMstDHZg4z7m4fXXkmxjRXtK1DNEj6Q4cA6Ne2M6wRxkJFNEix1AVN1fMXr9zfX7ySkptLi8KHjXpYfhujGR",
  "key1": "5K6whhrsByjmTCVcezm7cTSTAkimS5e4JgcYTtz3g1JeJWzsF8XSfBeSwGkqqDwMbKfQW3DbLBVUH79PQLTA8oS5",
  "key2": "4DpiSEGXyxmf6rokk1WBtLiHgfJwnpgSw7XNdcFsXitCdc1hf6jqK2rJ7QYsCu6H9UipvifiWRFkoz9CxxizzgPY",
  "key3": "3nhDW2mDoS1xgC8nQgCpAPUFA9PsFigdum1ouY5B2vyvWtiycrWYZfqhpfGycYsv36b91BfrhDadw3ybKYJTUips",
  "key4": "vrQePJY6YMyjTxGyosWmAFVBSQCfNVGV8TjR3fmyAQM6JikA5QMm4Zo3toQFE7ZsMWQkZ7z54RRs8yRQxsJFP3G",
  "key5": "49PuW4TkzEKrrJ51YZCN5WJBdMjCA4qfJvPLkuLxfHKYnT9VDU88ma6uc4sVLsJ8XTWDe53XGnqc9RkFfx4iHdYq",
  "key6": "3dd1Vf8yfzEbyDU7SJSB1wzZk8x5wi5oEgar3o7es3gCgBDFcB9MFaxJyuU27Z3huCGF7GXPGS3zGYzWo6abmZvt",
  "key7": "5XuR8LKxWFS4TSGRiUR537YYjC5EEUZjVos5BWEPPcksQyf3KN5DM1YomkcJ6oDY3Y5DysAgcovWGT99ryGTDp3g",
  "key8": "5E7kzdySc9SbwsL9cs7iRyPsQZi6Xh3XpfiRKhSTrNSvuvXubAqdiFMYpy6hJwwge9xwCoXDkSS1uc2tTwoVRwKs",
  "key9": "2yvAj7A3nmTZCNEosmKit12UyXy1uSxpo9iRDeFC8ZjD2nyaRtT8RqdYK5YLcBQR6vN9J6XmvrTMSYaS7j8doMD9",
  "key10": "2W16RYq7kdhSyu5x215eind3xQ5p99xiQrvRSFgTc9TGEDZ1LDzPbRQ5JPixcHzmSHKmkqPdEskBP5C4TiqmeH2J",
  "key11": "LsjSbBaBVnHBRWjKGxwnDhR2HRQ3rTLeqCY1PqyQWu8Cdt4L89dWLi1N1vaesxVRNrXH5r779hRva9m2sDNif8d",
  "key12": "5wUHRwBXCd1Qb8PMahZRx557Y2HJPRZkdo28YsnKgAPESSjJeMQBbvrhywva2ce5oB2PpKrjsqWceXoJZW9fnzwh",
  "key13": "56ygHM2pvZpHPzf21vt3pxL7PRZaiuB1kLdwacmckXB61rLGszzSn9SW2eqQ5axMMoioeqZcBqWeNTZCumLrS99n",
  "key14": "jdXJB142HP6vfJ527jqFNAyMgQboH7ngcDkb58cMxmkatWUX2vcp5A4ckyV7iwPSRDZmzPw5b4afFZ2ZhEgziDE",
  "key15": "3BQphvv3DnfCeSbpBx176UfUZdiuyjwdUC2uMw7MAnJcnGUbdVuc2nuWEXXgWSgXJmuZMiBcBcd38nQ3cwjS1yK9",
  "key16": "4Z6i81dmMoD4VpLTdt4638ubpVkCFqdvEVrvWKh2rhXPo5WSEa1FjVxGi38ALReG5P94TZnQwZqeej5wN9iYMt1M",
  "key17": "5b3xiMPCkw7ajSb7Tv4E55GHKAcdor8igAuq1HxcfH3oT2kwfm1JjMdmP9VA4k41q9dD7CiDfLvDVYSSPgeJyoGy",
  "key18": "3B9kKUufsrjimW53H27Np5KPoVNv43K2SktxRL5pWWgRURJuTfsYLT2Fr745dibrygjJ4mTA7fAppUZrnR9BXwGn",
  "key19": "c1KEmHMLgAnUBHKBc171rjmVuAomRVSENtChGQksHgJFMbDppRA3GnSymQNGdhVRgvNuVKocZ9X7UgR5XusMHyW",
  "key20": "5vEnaT4YDXVHtYFiguiT5D3bAMaBXrLqCNsdHNNTvkboUN8gBYgY11efLBB6a5PYku7cNMtMdxHeNj2k2ked14FT",
  "key21": "5Tn2coMeL9vrDaSCcBYeFqwTJNakVzFkU8V9sQDF5dfPeA744e5Y1oyEkwSU341H752uWM1njTdvCpVu2Fhib6QC",
  "key22": "5mxFYEcfwRw7R5SD4fhUfqpYth2u5cRFguECx7LsZsmxaPzhbTDaKTWG1nTjoqMn5nx71W95rkMoNTbdNTU5mziD",
  "key23": "2DC6BQYZyWkQ8ikuGRSHFvBsAYHiLsJzb1o1Pokgd9q9hGoYWHVRSSciLFERemJERdTrj2hBJZVcHRHck2MC6wQ8",
  "key24": "6rya9eR6WxLwWAdgbnKRZZY4MBMGktRvHNsp5TbX6LgHw8Yu48n237oeiAsR9UKbwEXa5bLSb5CYNmiDAxdycXK",
  "key25": "y2vwH738MtoKDDcB2Gi8R4U5RgzYBp5TCw8PhQXtSh9X6P8xfmYKBQMfWKRocT1zaKMMSDUSvtueZgfURbREVDm",
  "key26": "49RvDBopza8y2C4MQe23kax9jgea6pxkWz12bMj11WExdiHBzLw8gq4qWYoBxqrP2yW4bUF24pATJFzygPMP8yJb",
  "key27": "5DszDjpb95ihqoFqe6FK1aWXjBEPYWaa1hzk9zFrPXLzD5c7Rc8Sgoa6pnkpd6Dx8YaorkBHNopnmpLe8ffKZ49j",
  "key28": "2oRWz8W5WexcBmJM2WZ3yQJsHahZyJAiMgy5uqhmQe2sdtthAS7bLkTQZjN1aw51Ad6GPA6W6FiUFrbQjmogYxYT",
  "key29": "3RoY3xEvuuEShK5cdgveP87DNkhLC1hNf132MzcA3tChDWhahrJ9TdBNdnrnqRCNMr4cuisGUkCBMbts4guEB3eF"
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
