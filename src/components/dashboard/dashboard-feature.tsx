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
    "2rq3DiCq1FdgzHKWmNV456UMkUcoKCRQugKt4MdAT3aM59o8j5izXFtxmZcu8RSoLyTfsCiwChmLGaiAVMxQAAzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmb3z57LeQxuoKCPW6LFvthtFUd5tb8tzoBGXt789G3EQBidd2PAvHLadqiaYxecq17fd4qzAuEkGn2UThxrtkg",
  "key1": "4KrB7i1pzAp6G7uakyqN9XpJuJRsodyx6BsqkpKEPn89c2Q7DMnfyuvYDVWfoNhtjshF4f4ykjoPvdq5GhmuUFg5",
  "key2": "uuHpRxk2AUL57xqEDPB17yduKsUXpp5X4cadooYzJ7xXPsDXj7Qcr9k76k6TUgd32ycD7dYXb3EJgQgmjMpdHqV",
  "key3": "gQv3kb8xEMWpv4MvJnUw3MGhYwmDatgBasS7Exa5ZqJU4qVZdpSwKcjre9MXorZCrX3wBerR52vQokpj9QTfCEd",
  "key4": "5ZqsCqxy97ZT9xNuGuLpbc7f6ZHuq7nSXYoxPU45sNtRuvALp6tNxm8GdPyi87Bf1SzLdEJdkKXFUCPiwNBDHMz9",
  "key5": "sFPKSUMCff6cBGznNRVp2VDbPitwkmt6x9x5GHkp9M2RdhzKNKTFWFVwnH4CM6Lwn66Q2i2uXNFTNT1QumUQvxU",
  "key6": "2sFN3bg4doNQqhi4PhQujh6FB54yc736fEeEFzsoRWTjGVf1uePZphNVhJLKWAdHj7vmJsV23J62fyQrwR12mxpG",
  "key7": "4ZqaqpW6pbowveeXejKz44izntu65MaeBB8dL2nnHPjLE1gx8TB5YEveFLnGa53tvLiUsUCpAseMp5a3P9XtuJPb",
  "key8": "5MjcMzno6hQ5NbWJuYfYxU9u5kmuveifJ9CK72Uq8n8KCbEf5qenWQD3qzjY8A9GzUGEbyvJ8zESJj3CmmaqiWcR",
  "key9": "3iShy4GmDQGP5rj6fJhiZt3D3qfGdrZaeBCcv9G91w9XydaV6kYYYpFXrkPNPcpK52RgrDce9e1UFEJW2irS7hG5",
  "key10": "4s8yXYNH3om9ETWx1CBKf1onMNxPYaxosTsjjhxN192awKmeuLDYtm99q2CL731Z7vJPvyTBgwauPNM3XkZJ4Y56",
  "key11": "5zHj1h9LhGbLiZs8mGzmgG3TKVn9s1yYoEFtc2rH8dygvZB987zHyKjxSzCgMQGgyLPUQtLSPFjhwGkQHsP12JrV",
  "key12": "2oAGXYLmtKGtycbQEGcWzG4CUE8T4ZPj9tsENvtsbUm5V81nyFdNAWB6d55mU9aEU8NV1fRJC4iuYGUJ43QJoeUw",
  "key13": "5Ct7s1sazSeBwyAuzhX2WvvjLjECggCLV6XUfedpg65jeFbG6pSkhy8PV1B2wKB7XJa1QMeq6NKFnV1TxcA3hfUs",
  "key14": "2sp8zvERT2Ph2eQePfaty5i4iLFvNyG1MjNcNRCHcNMhL1yDMQ4wnTmLbQ1P9MrQWskKL5QiY2NbDxGxtkT5LFkN",
  "key15": "2f5uQdaPCzr6jxY3E2cqVsLNLULjHRh6xyQDMsfBddtSYDCdrMW5XzgaHhAwWMHurz6gySxdyzGXVierS5CyUyvB",
  "key16": "tK4ZofoYZWSnvN98bwxSMRDQgBcdRMuKfPmhGiYoRzpsGbBS3JKUyL34NkJ6jB5d2a9Pef1oWWXfWHfGRfdLFwq",
  "key17": "4WbR8wHgLWDaDeHDMoA1z32vEThgEUpFeQYSw4RSDdnFZiim5hEH9uXAP6KkgmpHTohXNX1NQ9PvoujLeNSepG97",
  "key18": "3HFZj6eUwtnRNF96Nbb5LJ1zLoCVDJUmFjDNDNahcXNKXfjmuuz8kTAB2jCcARuN4NW7VWuDZNUCcjGhz3muUtk9",
  "key19": "2GgGnnV4Qt2z6wMa6KibV7sW2PwmM4HeFMr43s6wx6m1EmBXSiKbViUibds9f8DdusRaU35dU1QR2wQpZ147tjcq",
  "key20": "PiVyZbQ8yBp7oofk9BEMgjdSRHYW5pBq8Yi1WCs99YRxscTsaRdf9Y7GezdUhzzK6nWB6Xr5erAJBJ6mVr6vsBe",
  "key21": "5AJVaGsRCEzKXMCUcDHnm27WueWZVHuizTPS7TR7D3TVbEavMsUeF3fDNvLkoL3g17ZLPiHCynvDTsLMD2AiA6dk",
  "key22": "551TnD4cKdXkwCJw7HBvnRVB5S8RyU5RDuLXvao1ui792RGMGazouFgPTBRH7NAqUchBPvmEmc6xX2vCK2DVgm1n",
  "key23": "4Pe6QEYUAawCy9nGsvuHnnNWHpqx5mmdZfkCDmY7YQ9AoTTYXKv2NFqZGU67A3kHXnWRF681XTHWjAPEr5P98TNE",
  "key24": "5zK7xHnJ5EW5RVjuDR7YuxmYXtxFmK6d78p1caWwZxgYR9XnVb4yEcYWMTPnNMjbZDbb5xwCBV6ymdHXAY4UBBJR",
  "key25": "5ChhhrajcdqXpdmNxW1pHJcavWnbGVXELqBhXPDnDoifaX8udEEXVyi84TTv1naPrffX6TnDLv23NpLPJFK9aYrh",
  "key26": "2trjKwkfvaGCqdLYNRHw5HB9JSqtF2TBoevnatL31iJSi4AA8KNP8W3SKKtEGNekMiqTaQGfbSgPn8udKbB6rwuh"
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
