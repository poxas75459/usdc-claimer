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
    "28mfcqbTv23pLnDHTX8hNLufe6GouNyw5Gh7LJBYgJraTwsSDW5UED15tTByKkL8tF79ssqUZ32kq4QfG1ErL7Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Vz7ZcEcfBZ2FsUBerTVinF2ocEuNC1wXGVCCwe4pcRC2YybysRLg23fMgcjPfLL7x5FSiN7Mr9c55dTGXkWFPs",
  "key1": "4N3ogagReSrX9z5VHXRmQTeUpSMexXYcitUpGYxH28vYRafCXzezRQr2WZi5fHTJ9XeXLJ3cuMrb7qG77Gz4ubHE",
  "key2": "5skraJRd5j1b3Rj3tk4LKUUReZnwU8WMjERjpDZ2oBGsDocFBwyNhmBsvNKWzfk1qFiHdKAxjTMVBMnMwBQHLzXE",
  "key3": "2SbvXKZ6XVCFKaT4Qz4oqdwEAt1tvfoG7sjkz9zXhvkE97S1vMAThzZtkAP3UDz5w6v1mT2f8hKgDNsQwJY3APRM",
  "key4": "2NELuS33pUXYuBkw1XVGhnjjvZ7WfG1E7QfeVnsGwda7LL25BKGuRv5oANWUhNhn6NV1YtWYsbTe929Ptuocnc4U",
  "key5": "3q1HA4Cke16YebJj1Cr3ytPHGKNT4cQ8dwGjwWtmcj9eYuS8b1smChpYUAbYJb4EFS69EHZXKSepwagwgSEPYP26",
  "key6": "2G7hqiKiFz17zUZJ1F3gw2dfsepg7bQDgfGwa2Mja1nzsEwkoTEu9qkTxKMqdW9Ei8fehNasLHDqgt7hAz2kviHi",
  "key7": "L9bdefSst5w3JPELE9A3S77UK1HEu1eHwV41HJKFUqGtgQkfVvct8vqktKBbxAT42KFJn5bCGL8yHARNTPSxQPh",
  "key8": "ef3dtXjKeB1N8rvq86Kjc87c1km9LAxz2Y8Ptgz5FeHNoB1DhtRHxs8T6AVou2fwho6x58JT6GS7BuSTLHRr1NF",
  "key9": "4kd6Y27vwB2CCQa8vmJC33pWH4gRL6StaS6taAieUk1VxYNfLHCsvLHQVNecP62b1H8FHBVHZGEYzjpBpKSCG15W",
  "key10": "4dpESmH6D9Herv4n6bp8ybSvoikZ3wxtyid54WuEGWc73Cbd21de4c1FnBVVWUxQ3zXga3s8JQ1kRzdEzXKesRyQ",
  "key11": "3SyDCuTGs56icsSzGkZjCNh4dYMF5FVDDhwXokAf8fUxc9KreAoxuAueoH129msAN8xcnXs3ihAZLpaDKy7RsUik",
  "key12": "5YsPZ3wuUySGnJ8bxfeTYHQQsTP49MjwCp9rxeyFKKkFjcejy3oeKcgEyfF4rxqiiy8E26dCQYaPzeWwnCJVz6AU",
  "key13": "3aBnYoX2SfMT5jXRtsApbQG2xkdbqGizAorHwuAG8SRjq3gsyTsRTtKD5KZHnk1vfXT1mjmsGzhDZMxtk971WJyy",
  "key14": "4WgtXV38TeX6tFJS25bvcU93tRU5jRKvXiPkKUjsUMCrXr9uU3DzLBBijx7fvv74sNFU2VZewQDqG1iPviZ49KSU",
  "key15": "2K8sTRHyLaZMcRYZQHRCuk7TFvF7BEbTozbyuXpqy5CT2SDvdmHQGwTU3SDScADwb6dmq6MMSLs7EcwoTqBb94yc",
  "key16": "2XUep7MZmKJ7NbyWGx39CcyY4ki32jtumoTEnn3dNsxZkQgddJ2SXDGRwPTykEjoiSTkk8jr2WkhyocXuxA5roC4",
  "key17": "3ecDkEQBxtYFpyDgsbTzVdW8nUPHzq1AQ4pAWg1v15FwT1Lf6Uf1dvyn61tTMD7aneWZFucGnsLrRMo4SCTVKEZK",
  "key18": "GAJQi7gMVtBiioeDvYMmh3nNnc5gYUthY6VzLTXjmiU5q6TZQMYTBiFJkybu7JVXYxAY5hA16mtVANP5E1AS5B5",
  "key19": "3gBnE6xD6G8jcHVyUX3tNpPhVjXAMCqM7AP32R8whZgqTrtf3mf9ozcu4VwGPMR4zBonAkvKHyPfskphe7QC9FYF",
  "key20": "2mwcodbQXNSm9eM1NJzv6zFuT2su3Jd6TjfH7kxv3ghog8Ly4F1EapgTBhLNpgRN6FguCAYhRxyk2qrCY1sRDrHS",
  "key21": "34zzT9j42SzZxjdFEg7vtpaiimz9EJN9UD4fDaUhVuKckm8iUofo17W7JNp3KdBFCwjbt8xeYSzJD8Y6iBjybGd5",
  "key22": "5gjeqziFiXYpsCJpLmEfrzbNYec53TbAbX5MZ7ZgL764VGhk8TfpaNB8shXa6oTRtQTgiuE9qUVeYbjgGYUnm5Wp",
  "key23": "4zoavnggcNutd2TeuLsm3RnuA5Fm2AnaQfgjrm5vesmF8XkrLRp65xLtdSk7vDpa7M7woGWrwz7kR84m2m4CVqqv",
  "key24": "5G1QRD7pra5iuZcK2XYz9zk7JZjDePoazwtahghSwJhTuTAfBfD7Px4DUQAiVnC6uDCyWeHscagqxSJVC5WEooga",
  "key25": "2wDbbbG9XamraB4TgagZ5Ct1CABhzpX4khUR8gZpBhbZGVvcJRUNMs3TCE5zGPF4T2Qgr8MWswT2XAyUK7GWSV3Q",
  "key26": "uAxGEQKcsiZTZeTTna9dmWUkqt4gwn8tRK16sKw8j3gYgQut8vK8Vsid5JsQXyfykkweywGfvcUBwGpH718jP4E",
  "key27": "46dUTU1ASw5VGEtFmdSYTa4zkAuANK3gESrdpyJSwT3AXLoiX8iix1ostQPVnU4qG7B3Vf2kwzgFKPa2uKJicJYC",
  "key28": "2djjDK3pjfq2iXJvBtpi6CGaYxgUimm8gzZCj9W2i8DmHf9Sb2chCiRH7tqxMCapXYEK4wU4VmRohVWWwzhMGGFq",
  "key29": "Lbc7GEh7wwJQwo456HfbZMeXL75EHwDX3jpZ4cQwqGTBBs9drnABN7iYRnhEGbi1tDyW3EHDvbvyvwGmVptF4qo",
  "key30": "5HXXYJM22PHZEoQdfRVqqAQkKgeaNKYXeXUwX9avHzCF3eR4sUfhLSoBC21Xon3csHRs3okFx2C15hoM9yjSCjnx",
  "key31": "3XCREgcXGj7NSrqqe8h3DQw73t2SgV2WpGYLKf1HN7dxSXe5WbD2Z5ak9rkoUujKLGHxnpha5aNpiv6HGgBYgbTM",
  "key32": "22cvsKCA7CbiSapuT9v1Ts6wbK8uHCGxxud4Q1HcTsqn15LBmYx2WFAP9Uk7phwF8w748Msx5MoWTDX9vLxFsn4z",
  "key33": "3xpXRm7AJpWix2hb9Nh7TscBSnrd1hJVULMkb9CmhwLnkKM127L6voYT9n1Wed8xVbHBxzB85jdVCkXA5bgCCzox"
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
