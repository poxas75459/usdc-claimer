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
    "268G8oYejmM3h5D9QDznbVPQsXa1aMAajFvS2b3UszX1FGFVW2xTV3whjkMGsURcnwRHHJFc7YS3KFvtN7mpJgrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pcr5hgUcagGN6ve4x9jwk1572rPzqvbj1nDUx6ugsTE4Ggsr94onEx81bw2Y52EkXx9PgHszd4H6PWgurbp8VDi",
  "key1": "3rfi2ab1rzuBdtq5LD76oe1snAtnehudTfazhBG2feBDmLE1ihqjDASRAoB9jEBH1nHY46q3MPXUigYSXpvZjnoB",
  "key2": "2MFepKu55wQtDW9YTCJqgLB9GGCs7GfFcueS4D9yGv6CBTX2Zs8qvoGX37Yoie3WMgMcQFkaG6gGkYTeqoKKCqzP",
  "key3": "2PBh4kfyUSxkVNo8daUC3bvwcf5CWK5HUuvnQWS8oEqDZeje28yu5LmTJqrUGbA2MXx356RbffzAfLu4YyGVvodD",
  "key4": "5rAWbFcfdeb1ib4h4qW6tW2K3fq1csPJZj4iuPWPbCDrNPRq3N7kwBPAVpJNEEvyuCURNQMGYhsz7y443KcggeBr",
  "key5": "Gi3vTYjyZH2tk2qZkRqtRYkywVd2aRzi8qkQe4ZCzycfcLGZersoLwxtFLZJPP7twmT4qqJhDZ2QP6PRhWy8jJn",
  "key6": "3dR4zDi9DC9ZQmKDrF7H1hAwQaqBV127TKB2sgB4JXN6FQuw7ropK9JXopW2Fy62tzXfYk5aAJbF3bFsF7NAgqQF",
  "key7": "2p9BX51E4MiK2UUeJrEt3ygMAGX5pTNdNjrKzzxcWU5pe1epaa8d2TZPXuRwH6HgUfrhvLocGyK94TgHTPFXxgUT",
  "key8": "2CYi1RF7zcdZqjgZqDNVXjujJBCywZYAuf58YxK2Z5wyqJQmeQMT74uBsj95xrzfNbhtbYYqg9M6zv3Jk66Gd6E3",
  "key9": "hSd8rfqhGYTSHiv3GaRt3V7kZkuaZLeTazmdZ1Ck4ESc3SvzC721DsxtVcSKkVX6HkAxLoF5hWizcBnV5o4kGZR",
  "key10": "36UG9GAfdFAYLHLPyBRJ9vhB3oRvCaU8fDUyk4G8mmHJ3RE4UVd1bnDFA24Wfc5PfPHRZg38s7A4X88TjqdWAMmM",
  "key11": "2KMinJ2RTT6EZSQvUogwbq8dXzpoA8g2VFsLBSoFr3jSfugcn3f53Ydc528he27uXLV6Tfn9fzF2tBZY9pdT2owP",
  "key12": "2AwtQZNAPGPhSQoV48AgTVJ7U1mSL1qKKy9Q3WX3e59VLKzhAVrA2F4HwTdrtm2cQMFDRvJ3S6My8Fu8NWCyVU9Z",
  "key13": "5wFDQvmcuBfsfxxGWvdonD3DwkdM2y3pDyib6huPb8AxpFm2WL5rTg3xkARjM67buP4W4uKCta7uSUL5z6GJCTJU",
  "key14": "5AJq9x8EHGViCcFz4PknsXqmpTPH9FmbDme7ce8b8forNwT4an9woKD4BWkST31nCpmzbVsdDasrqr5FKj1x8xUQ",
  "key15": "PRK2P52YDmVWXojg2tbPoD7GyRQJG6nAmJ5DD4DmQikrCMrbSMVkeDic4Vz89HTHu4D9RfBaPT617hTeNG5Fo4e",
  "key16": "5i1V5rFQKv4E8jDgpLLsriB2iirhfNnjiYrcHp9TcZFSFjD7wqNjSj23Bm9qFvUb9x83znGXTu6wBHHDqrzaBe21",
  "key17": "3S1h3DG4YyKcxi59kXKhUAYr85gtVKhtCHJ6WTxBedvbW5VAmPA8H1h5JUVZdtCQAKtzMvceL37gFjuR3Y326sbT",
  "key18": "36C9WvFCoKthhSn5vUZDCb2vG4VB321qRe1ocqhcU68DRXp8DVW9GJyxpJ3T9jNQZE4F6uU4oNEniybEdN1oG8vU",
  "key19": "5pyvg318ATkcCeNnAAAt9vERTePJzZyothXSpUio4eQjorcju8PesRaRSr9m8QcYm4bR8aE22A71bePJEgFbpVKh",
  "key20": "2kU6KFk9prPrQMsCJKDjkCL8uEM1UzNGPBNrio7VLcfxbEBpvkyS2g1jWfYD3ijsLkKJV3uXPcxd9ke1MZMHN4X7",
  "key21": "2CzsfjKpyFBairFh5ztf5TnAZfqFso1teQqKiNK5MZTGWcSs6RMZuxnpcYU8ngbEr6Er9HPejR58wfAwWmmPUtZq",
  "key22": "4jRCVUVFVqTQafJRDsPX6Q69bxzm8jvoAa6cYm9P7HVs1KJbwMrawgURpLGMiXEXXLRZ3ZT8RjZzTi4AkrqgEn8F",
  "key23": "5J6TAP9T97U2482nk1fFBSbRXX4RMtMMuWgKzsUMfBxqYcpiFAUhvjNUFWAvZUXYHE2RNouUyADhxHNeuhy9YQgC",
  "key24": "KvyrjZrfW4qziANG1TX7ELBQkdnVdG2AfY5SqdRi8PUTSCypNJrCSV4dmEPStEePMYjRvBwHCNfksEY1hgfMAVW",
  "key25": "GDvirZjjLkLAex6zggXyupDfYburvzDqWZKmJPkCKKfjdahwCrGApLDSZLhe9GDUpyRHbkcuNZFJnJ9MkEWZfQM",
  "key26": "2VdFDs1UNDwE9MrzbfhgKiyymt9jzhtVV9zCbrWt7YXzmBrsXs7F9C9qsnzpcZiQjjLmhY4dg22oZu9unAbvcnJF",
  "key27": "5VrUgzS6UjtRhqmRXfTTwgiok6yTbGQxbmpz3Ejj5xoBE7zS2GvfAXPJGQ63xUR6Uz9xnwcqE7WqhKkWFdnxduWp",
  "key28": "2xH1uuoJ8Vk8N9YvrotcPzKFhgzoAx8BZp4MBTJGCbAF1qafqZoHnK616YVde6a916H2MoK1WWbJ8j5WrmTAbVMc",
  "key29": "25nihrpHu6YiT9ATgAwY4iQMgDWmsEoRNAkt7gHQL9KqBu4ZFBzVstTgPg1rhntADRoeb5qxPc12FWptuL7L5ENn",
  "key30": "3qiibQXgyWdYAuXJkdJx627iJ92zPqNX4wbKyQJhAknU6z1ETiK7F1xJGmXmaznShdrzwcCd6esxTpTEHzvMCwzQ",
  "key31": "5t3Vd6jGQ49hDPDPVxXM97h8nqrXyrTk8caL7F79jHAQp3McfmwLfV7prJDccjYp3SDEWHrksjK5tjXNBzM4GdWF",
  "key32": "5Pn4cBodtFyHrH7PSZjK1sS5SXbvfCr9qvk974jM8ZWvt9k4iNL2HVxL6DiwZ4EuzYXRseZDUj6XcTXUWNkFcvi7",
  "key33": "4nv5YwQf9KWbGqxJnandMRZaEtWhZcef5ZkxyrdLp17TQSYgpoSzk2JggM4YnNicZMFrs2ksNkZ1YBfmELNfYkhy",
  "key34": "41dWY5hb7TvNYwmtyT3upWkzHxd3vmyuW71ooJjhKByfQRq8cznxx1UTU81pk3gV5MTyibPMxTeBgTPgK4pHSmxJ",
  "key35": "63bvjsJZKPaEPtMaQahBFR9SxyAWM3ooaDe5ZgywSycbxdromzeNw7nw2znSGUPjimijqh2V9Wc9yDwkPa9xFSZt",
  "key36": "TTmVtCpTWHSvPjLLGtvajZHkk1fXXa6NurdpVP3EtEEGSChohVatdpZfst2uFFo2nao8EGRaJZFDVEQ92X3RfAq",
  "key37": "5LYC4eSNDCshQfc4fAe2fjFZ3gC3uXbJ1GCMvbcKxdLnqifMAjhoQzDahuM8A37bRZgbdCKWBmMTiCX9Jg3zuVJF"
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
