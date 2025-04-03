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
    "2GUPLdHSPTnTqtKaKGByZs2FtBktAxTmvq7AbiRfMuEbZdLoMpRSNk7gVNMGeFpC2dSVa9HHxtRwC7nchuPjGWyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxLxbGW6dm76Sf2jZbw8NKYWVTnULepFmfv8qCgGsnBqt6FirLkF2LRHg2JUXMh2LjUUqAhXoBNQz5YAogATfVN",
  "key1": "28XkLg1KRnTYzt6wCTBua2i2wzsEiWNTbRiGB8GENHf5R2L4oS32Zpis2i7cna9UcHmcGddykSunVFiMmH8vaMhj",
  "key2": "2ugMs695ZLAKQAUErGN8icVZFbiFdmiajfyNVuvBuogbJ7NRVJsEz8YPCJDivivuuwzJZZcBdHApwUvyah2eDqgJ",
  "key3": "2eYauDGoBzbsk4J56si91x7ELbfPGuUcP2itVbZ9qKrzUWznftizkcSUK4QapdttQch4C6N39qwJdoKSMYcWQEuq",
  "key4": "357nPxUhZHULJB9Tt1XpWnd5sNovNFGCoCyzqyo88xiKvopYzPVLx1GVrU1fSbegPyopBC27wbmeaSHaU9qB3NoE",
  "key5": "cpimNRH8q4bcgF6NhdF3DRQtsZhpwZMc5Kdu6UXY1EpL5ukc514FAbtNfbbVhZNgyQuR5cX8YLWfShY1YYSUgyu",
  "key6": "65jxJdh3Pfk2mJuJMoAYKXN1KWUndx3NuvbDFM2Yh9AuUQtB9syfP5oAS7anh1RjcWzZugny8NvYUv4dQnf49jbz",
  "key7": "7AJLTQxfBGm1v49VTxSGTNoL7x4SYouB8ZGDpAz5tMw2YmdEjPzGZyeJjCJaJoGBLB3BruXpwFmRJPPDrwtq8yH",
  "key8": "5pp9tRn1kHWz2vUPkHxD91VHB17dS6RePSVdtAjfuFQBcKS4hKT5gDDKey59Qhben4ACY9rMtxmWRSzJvh5qqvAa",
  "key9": "nyUcJ7QX8T5UWzuwM83iRJoc96x6GcwPVAAiTsn8aX24KyzkG9DzsotoBroWaZabf7DZ1hob2gNweBCGWjg4zYk",
  "key10": "3yGDNGD4vKgtssyz8kAk4mkTMPhCbBzarshBA6imYCYpquUf8NbE6aTQvhvACnxoiXozkYadvgV9EAJrxYHsZgvm",
  "key11": "3KpGiXazaUCroripFGNmbMKpWAhh8ru9R8Tn8octmuoGTKVP6mhbpXqcvxLHRaGxs3FBoyKpiqcJDhsZuUu9c2mv",
  "key12": "39VfqpeCVcHGYUQL56gwH6A5SvCHQN97dwH9QX97aoRfGStqgSCVtVYoqBqTRED62Qai8Mk9uJEGz1qTEchCv6TM",
  "key13": "2nnyGTv1pKjoU1SqNdS34n4RDidnyUVzt1zHC3eczXLQ3mFXBjNPqQszFJkGNyX24aHZW5PmdJzh3gwi2rB5xbhy",
  "key14": "39SJCgbzSVU8MdvgJ4JKfJLiM4vKRrC9UAZnGi5KHBLLFcezAmKqzydSvK6RoQYjVKtfN7As9SkgzXT8MXaF2L1p",
  "key15": "3BDwTmWtiS3RzcxrPySMw973mqzGExx4yWqDJZtneaDYKfVWkkgr1nwxKSgy2b7zQpSZErXyBJqtVmvmfjobfQaD",
  "key16": "jUiTdwsywj9s42LGPCHge1KkbxWKFVDyxTDtNFN6BTtq3CUbCBxDXhqGJN6qooMcVbP4u9uu82sPTK72gn2fZJY",
  "key17": "XULxTBpUGy1kd8fxXXDCj11Crd8Qa9AHme7pFRV4MZdU2VK9VzZVoQKhZk31C3SEBWdbMd8hVdeZTKLpRbBK2Tg",
  "key18": "5FANtaa8SstY44FsKgBzvWpPpCxqMQqZhmbKT1ph6xLTLypF7e9h4JPG6a3yAhSANTqhF63qT1NUQUF3xqGbRgnU",
  "key19": "59UrVragSU88nxNCm2riURj1NrbxQfguMh3QjMWRwrpAEoftigy5gWJSRyYKQw9bd8wiDHq6p34FJroiz8NLRhfD",
  "key20": "3uEA48oHDL92x66tvpchYhksZuy7AuTAarGGkzBZxGSHdQ4W5ULUbf8ZSE3wVsp6FZd53Sx566YRo7zPSQJCwXfX",
  "key21": "4f6FA6YQYKEfczy55nDR196sddKjnkuDwZZoKt9eCRZK8dav2u4e7MsKTTEhjxhsJ54K1rbArwiRpd8YxA97ZfRL",
  "key22": "5okAVn87RWFbP3pFW5TZFKyDE8sHEF8oqKXREBnwPqmse6FbhASbUpj556oMA3UeLVKq2ww8YRFf2YFyAMZLPGmi",
  "key23": "59pdoDhB77VH9JgfJmvhpK5ijHFineKPUQM1NAWy9WuYnS2R8nNYoYKH3KiiKkZHvkdi7Fi9nZ34RguL9Zp1HhyF",
  "key24": "r477vPqSVyi4wkcj5CEvwUwJ1o43s33jFbM6wfwzqYj9TgQWE1pzWDTE13vNG4Uqw37oY5MrzqkenbPX99i7WV5",
  "key25": "4ZeY3uBrQWoHTfQS7m1giwnzrWMxSSpmHEJzNrQPfummyT7bN1EkUNh8sYXMZLVvXu7zEdxt4TGzgdSCN6aMbGnq",
  "key26": "5Ca7Lhqebq1xfLtU8HUyGDGtNRAVnhLSitXyvkRD5CkXkFH8yAjhe9Z6Cy9nDiwa1uJHUvWSt9DBhj4ewwgPovL",
  "key27": "3WnNGKz73v3yw3ueGqvDfNUeTb5r5sMGg5EPzfhFK3SfNgu2kmXndZCYB9Lf1BM9dHVVU1BofTyhmEBkPwm9AKcC",
  "key28": "4zczR5rnryZQok5FnGn7ZNeem7Ys15BhtxuauRviuQXicPAZ2nBTF33Vpu232pgL4NkGMwnJF3WjzUdg3yFkUfPo",
  "key29": "h3NZ4iqwqrgE3wvyFNWpZyNmqRg1WCEnKyePnjWwYXniVvuiYTCHfzYDcFRSNmjt7a5QsTcNR6fL9mqkNfarpvm",
  "key30": "2crFyVvcJahPanHuan39JKd8m3J9i1fhi2SXauJvhXB7SrK81rcykqN8FMh2QUkcCVgQe26Vdh5cvDDmexLjg9EK",
  "key31": "5MitrUqkzcBJ9U3ZNhWb9nu9kMXYKaYRrverUHkwkv4rKhnqtXUPUfYyC23AWaiAV3DykEn7QXpPPa4Nt5spa1U9",
  "key32": "2fUwm9QoJN4v64DQ7MU4tC64a1uX5RwLuxWTenHHJfkDHWxFkELXSzrnZdvHWPhptQTS9osaGHazvUFDao49d2AP",
  "key33": "5GHwpfFaC8xCCwKh8PgcmCLLFSHWgSWqcXusa38PyRPgHFb9GK5qxFjVBQvCt4YVseauXVhAfdwNEK8j5aD993M1"
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
