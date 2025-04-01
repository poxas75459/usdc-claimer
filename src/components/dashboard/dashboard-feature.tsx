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
    "5Pyj2YDHQrKfeBzXfZcy351PShYE5pzD2ypmoyfWBdRo6rLonXzRFyJ3m2LzsWwQrhu9DBcSQRDABmJgu9V7v9Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5R91tmo4gYZC6L4iXTptYRay3V4dNrXj8RAWSand7gz9CLaMzZKNwdmaLJHKiVSfD2DnRoCYuu3WvLcc4uuq8n",
  "key1": "57rZYTJ1ueP3byCgc8Akt6pTXpBLeKmh8N1KieH2FVBYoBfi6T5N3HNiLWpfTZ5xc69AfNy2s5Wbjc3coExRew5Q",
  "key2": "4WBhGMPawuBwbDn13zuMg51oKzovmpMYp9tbjG69h5BhbrkVyVrMdt4qTcYvktPywBPRA7rTiLomwJQgaHzt8UUQ",
  "key3": "3uXYY5eGtQcTaEnETRtrBCicvjwto5JfzsJFhAbQJd26QnJA6YfjmYMcifFPZTpB5NMPmj6ZfvaVG7EPEh8bCDod",
  "key4": "3bUmfNoo3tV4DMJGF6STvtz7h3dzr8GBJ1HKvHYAmnpG7wsHBSQf1E9waSVqjWYV1YRxce81gpuAGnzeJTGbN7Fv",
  "key5": "2UAg7MRmnNcuMojbRctGVk6yuYeQ6U3VX9Koz9NXuCqThoSmfjGprYF1jqvHa9f7MGuhVUFBNQxnWmCQLGwWU3ye",
  "key6": "3ERoBtjJBwoaYyRsAWMTxVn2Gh699B1fA65aqoe8dZu44zC5GCMfceUwPv8W2WC7XxdaZaStBsNk7TS4pv1Veweg",
  "key7": "3TjzohGFMRFodp9MSFtnLaGYspdN67kzhqaSWK9mESki8FLhZZLB5dSH9yRafd4i6Wj9ApqwNx5F45UgvUnzyrP5",
  "key8": "24h4R7PzrMsDDExraEjvYtHZvWMNFUiqJQwgUw21nxPrSGpDDqGPD5RNWLmfi6d6yuYzvWWj2nhyS2sWRtMhhKWB",
  "key9": "51pykWtFHmXaH9R6aVhVa87SiaozFVQiBmb84XZfCm9JguQMMv1bYRwgYi7K2qcyy4YStFNaHNUaMATEerXX1kmQ",
  "key10": "43eXNkPUp1YzZfuwo1TkuYiEhXBpPy1YweM7TYdrQFbrB535a6G3V7BQivjQYcjSno6umCQNwPURLUFKyUq3wEWQ",
  "key11": "wK4b2nSDwAfGGePjyU9wquVZd1c4m31vdbMdWC9gqzULSSiPU5o6gpJNpsQ9dCjPAEU3PZwBLUybGJtmrWSnBve",
  "key12": "24FF4ZQ5AHWgrkr9yPq3BsNZaREerPNcKtQ1QXMDkdBuJtH3AWYZm4X87xJ4CgcfhQmYzHEkpkJtcFn16kbvwSg4",
  "key13": "52nuSjDc7tSdEUCw5qkiUR65R9NpdW1XABcaY1rK9rinfcSq6xZ2PEppNwSP2JdPyFQ8Wxe8js6Fv9wP93ceeFSL",
  "key14": "5NwANUWv7WraU3TtMbyAvNRAqgK3C6zcaE48GNz7DAMksuzMniuW6GS25XvgdUw8vzRTxLVPWPSLK4gj2Cau3Zrt",
  "key15": "r9ChyNE9LgXT5ooFQYjayZxMns88Hh2YAv5yEBbYtr2wekVDjrE53qqPw8jgwThzqVqpUY6MbRxPwa4Mc9dANfx",
  "key16": "Pk5r7DEpRHtVsmbXyDqzMFwpBmb26q3VWcQ4Tq1oFQWKXvMrAkGpc7hEBRq3NwYDPf4gaEAJTZB1JSNzgieSG1F",
  "key17": "2JZenv6MFRceFWA1hCc4hCVFNA8ZteaH9zPfhSWXgc7iskfSi7o6F5uEnZdYaZBPEEmTfayxzGiSJV6zcp5hWARV",
  "key18": "4sLqyujw8uTJJZ93ZGXnLYzygfxDcnYtnnUHK4HD65GCNAzXMDNNSXPTALd49KmeNF7KBGMKYnGZf4JeWtVBABaA",
  "key19": "4sgfxoHWcLFPbntZhD4JaKk3LVqRMpE2sSQ1PfRWCYKSa1rEaMtmzpHVXjL17NpTr2sSQxq4FJa8Mei2SiBGvbKM",
  "key20": "3LxwFQ9gK4umEWiXPUgE3d7zuoL3yRrBrkXEeu2RXUqPUSPsQx3WaipSFC2afxc6hfbtTFwPwUpVh6DXaBQ57ots",
  "key21": "3EHHS6wQaYM1QYE5ym4Mk5SvMzeDZ962dZj9BPKfLn4hLKhyieMzU68K2W8jaHeCDHjX282cdaHVcSyMup1oc9UG",
  "key22": "3GWMqz7qJ16zvQuWmLED8SwcfKZBL3sne61tjJdaNm4pTc5wXwBU5AVpPiimT1U6BPTiasjHc1W24BDSsKRcmKRh",
  "key23": "5fAHz5bEpRS6ucTMhn7NjoYg2D1PPBsL3DHgTJJsVSqW7X4wnmYRFQ6Z76gKT5HPSUFbtJf3eBjepLy9ypsRutRd",
  "key24": "7cRNFPqorZrp2TVmBhVuo1BoBwgdtzhS98ym9tepwSNyuH6BsQtgQqZD3xy6Me3nA7Ucn8orwTHNMQmuj82tthM",
  "key25": "4U97VxWzRNfe4PNpnFJcdSpb6JL2iiESpF69KPAuUSJca1eVxwP4t8bBbvQFMsXE34RUmga8YcdbpcdcR3ym6vC",
  "key26": "ePfRRvt8T1GBvr5cmxjfMHisXvu5HryMbvJGN2C9qPVLhTuzFfJEbqV3Kb3VBStFfmE8DnB7wXHLDLn3D714BaT",
  "key27": "26hnoxacjg25Yv2569Poo5xBvjvyHUMXnexoYZrp1XEq4oLb4YheQU1T8qmfz7BUSokgZPrEru8Js3K8qGT4Tm95",
  "key28": "4T3uBH5qhXy6F2vpYkArsmu66RdLsVbEYeUfifFMXkCLVAfNs52tLKmN2YujhHF9LyTQT81P8i3TBGa3dopeCgxt",
  "key29": "3L9yUeEtmaCrL44Z3M8A9CxUJTTSRedvsiaZaUaHDprNNNBiWqS9amHWiVPiocJpijWyaqaYW4TsVKeNNoiBfy6C",
  "key30": "TUFKbQvZnjo9RozvnwxbWVoCq4Rv32DnT2XVijVwfFBDDgRnvTYc9vmCv7zPXRZKviQ7sBJbC3hbbWdAteV8brH",
  "key31": "5evWHoHVGP11irDykKQWnFxcXGgjzkcCQkKQbEWRAfpCz5iwbo5tYVtM585X4s5yyVjeofcgUyihhFW5rMoBHeqM",
  "key32": "5osKBXAbvsU17QYzDk3zg2jhcvKyt59qsHXqBM1bdGex6PGhQUVCMyC5aCUkLNEjeuqNeUHaCNBLdtSZ5uNW9Jkn",
  "key33": "1AfNupJ5cMtkqixz7N3yqdsFnDyTeTfWm8ZHu1bTp2gC2Uu7XhdDt6n4DqTJWLCLjVaf5XqKKj4vkJBaKvLsTET",
  "key34": "2zaiJt4DrMmCCa4CLSz8n88Bhjh4ag8Eq3ALe8HduM5NP1iecU5NNFBntMnvHiwAaRfmB6YpDnab9n5uvsAvzntj"
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
