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
    "JjsrLuFq4Pe1kqGTwzr7bgFvpHLWjcKB8s4DPsL2sYBGkws2oiEjxZVs2dHWnmXM6jr119PMqvoT1XUQPaajSd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gsvp8SrqRN67mhu2dPVezjTPvEPqzuy5qfh1grsnBPtzYaXWyzWtfGJLpfoiMgMAda1ovmxSYAzBBP3zj8ZWeid",
  "key1": "22ci9XQph6CBYoLWim72UWcUjUgAoBUP2FrzYmLk1SDBqEja1mKYf7npkeRLRM9EA5YfqjNRed9jkLBai3cvjdti",
  "key2": "4oCzCQzvLvcExXyetXq7YQAECwwQwDyHT1YHGdREnrphW1XQbU9wadTKDSgozqcferumo5UGE1wjDJ8U2xVTiDyN",
  "key3": "4AUdJc9qiTKQFu2BMmwWDvGS2Sn4RzYoZswACmUZ8Ac3F9UPwfbumY7YZsMepqLgszujLwiohBBewChr8e8skWh5",
  "key4": "2mYfJDXgNXyEyb1BigVVQ3bTv4UjJUmBFNqAeXpa7ZJXwQQj283EAoCJHrTauZyxh1XzKuJhTy3E9EAYQQyMthzt",
  "key5": "63BL5eQYFwL5jVS9hrj83pekqNgx1qfStH3YysQWAbmtcELopB3JJRDHZmCaH2Bth8fe7xkQ7zobaMAfDTDY3mpi",
  "key6": "576HWuYE67UxKiZN8n6TJpYzjqU4vm5CuQVR7hazTpYbapkmA6NwHwBiBtnAi66Rt3cn9Dxged3B9aK5NTXZGePN",
  "key7": "2Xv6CKpauBC9kJhMQUTRimTFJuXWTYUxGHQBUhwb5GGUrBv6RSREQhu4hw1CVQRxUS8HaSCyjnmLRkB3ALydEJim",
  "key8": "4kmzUbS8xtAVmu1rWreFQfSY7rETHDy721LWQP47Eg8ko8aqtfRdDXYtRudmV91CdbiHdwrrMHURTWnvbarK6D4T",
  "key9": "bNmQxKmFaKund1AZCkwV1vFZKzESTD8rNoCFGzVTXsSmUaeFQKqTYvK3K1opycg7NERL2CYh5y7A9TrmZFnJZCR",
  "key10": "2rU1gdyaBWXPbaGpZ517x1bL8SBJo2SaBhrJ6MEcthQ1wMqdQxRvi47ZdQBrW6qoVJboTvdQhKNmhvZJMn22YKCM",
  "key11": "3uitujk61gq1kgEszAwAcuzZycUau4jpEUS6nxLGGBo5A8nE8QsCyyh47pSB9VzStFqZs1c7RzsaY5pAK5Bn3fzn",
  "key12": "hDDFfXNSzeR8ShZxNL59NGAvBDbqzSU8FgajGidypsUt3RiU3vjGTWNoyxWBVDKcTEct5kLyJrHB3eZyDsjyGGn",
  "key13": "4r7sXyqzk3hnJeubs7vg4BLukGi3n696WmnEbXCXqspBrFCeTrH9RDRKzXEQnyKQ5xJCT7HacPTjhY5kny2HBJJN",
  "key14": "3H2YV8xccq4jAd75ywonv7DUqSrTaPBk8QLehohy1f8VA4qACUV1Nv4shVcH9DQshXr2YMiVM8GY9L1MyUqRBqyZ",
  "key15": "4jzNXQzCFTwZPcVnEDeHdYgf5JEm2yW5VfrFQjs49bmDz67WGzgkgpocLrSnvQ7SMtnQb8fGht4DgzY6kn5rZY3H",
  "key16": "3D9J38v9bZRkUGYf5Jhi85y7kqkVuaN5nTRRVQd6TCnVt5AhoHR5hdpVwiGCd3JAUpFmWdDyLFR1PRzRLF46bFDD",
  "key17": "36scLttPdEf5CPHWc7GrhQjSxWFPir7NVRyj4JCB8g5eNRSoP2DtA8UTUenGmUB53RU3cvKVBrdBbZw2EL7fwVLM",
  "key18": "52Hny7cFVc7EipxExbVUc2n8CWk6cqbcgG86YRt78pgUTuBwKNMa4vUHKrTcvPurxoyBcKmqWiB7wsaoitkc8xPw",
  "key19": "QjFWw2dTBG49cUU85HmK9B1q65AmXnqKiSNkGdwaaT8sAgtUkEb5BZ1BeT1weS4ck8BMRiCxTLSGmzu3bLQ53CZ",
  "key20": "3cdPWnWub3M7JJqNS2yaYjgJmkVjhzJqWbv3UDs5SBkKWCYZnXCvWNdHxuJ7HnnG6TVfMLFmGaYDC5x5vP6Ebpmp",
  "key21": "522dnLTEGydj1AhxU5CziWYUawmaTV6ytbPLdWNvbW7FGwk8DpHc2bB4FEvFHvEn6EAjJBSXqtAsyziX6Em64qLc",
  "key22": "2pVj8kA5pRcb61j57fofwBzxWviHdX3x7PG5AkrAUgfCmU5xq5hoLR7y367iVD1UXMB5LpgsQMrqFmF6dvbcXhTk",
  "key23": "tFG8mcmixk9Zraxu8ZMvkPP9gnQSJLAxHgJcrvXRKzC3T7KDj8uG7KrDLFHuV6UrNT96qZkZ8uiFzZD2i1dXsqf",
  "key24": "5Kqrg86FkDpfvxuvJG2HDFQcsZoGYi8FD6YLSj4C9QYUbuDvtDmmW4xtdt3uLcjq9G8BEUeoFNDQ57LKvD5R9L7i",
  "key25": "4FfMzQ84Pdes2LmG6TJePqjiDJuMyN9wrGAWhizhMtv9M1dr2YggyJ1A7jtaNGjnNFhf7EKpKvNS2PEmVtEjDoX3",
  "key26": "2suYDuxYLxBqtA7H1yQcjTm9Nff9nLsGAKmRXT7gqMJdZcLW4a5o7e78pStuk5oPXTra8CN9dBDRkhunBt57gaXR",
  "key27": "4v77uTYobbYktieroSSTZystgfQC7BL8LJzTY9XhAMnKFGx8qYJtFNFQihzRRehbaJkvoUvGX8rFJx6hXgkwKfon",
  "key28": "2SnAznf6NRRjVakG7gQBFJrLmfDqm2jgXTBoXiBnmpjfouUqPfeqPJoccCdfF1KMJgsmws9Fu7nL1yz32yprDU3i",
  "key29": "2PXdDcBByVSYydifB5wKmTvCFGtLKPck7UMen7X6MfrkC3fggct1G79MSvtryq2P4CBwYoAemi393gyZeeLVCNKh",
  "key30": "59B5c52hcLX9ZkDkCEvSXPAh33f97qpbXGhn2QydFbH3TTLaA5ZaoyjTKxkjeTgkKLqvG6hkjt46UWuXJKuQQCSX",
  "key31": "XVavDbmwR34S9EMS1nK9DBJCHLDU4DiNktv7wBU4RDrCNx643wuq4m9TxpK4LBhUted2z7tN7C3gkHwxE8XpAKX",
  "key32": "ggbgYSS8UkZ3RjkcXSjz1fKBtdUHUVaT7UVCrhonpvrRiKXrUmv9otkGgoKc48ojb3KojJgoDGsNYV3JGAuYq2Q",
  "key33": "4TVsgGht2ZV12JCLnzwSgWjeDDGwFasbUhVLZYqLsoN1PyavCX9et8HXC4TQbd6QwnA8fyWDLwxHtd76Tf7SnxJg",
  "key34": "3eGmLnbduw8vpYPrW6JVkH1rPV6HJUnmScFyECuWTrqrh798G6Ze2pnkostRsDhhzJVKrcR4mQWoti1G4QEGrn2L",
  "key35": "2aBKsm97tY4xmBwgeWUD7F9xkcFTsJoYfxFRa4fCy7SdHLkAiB6YX4C1qXpj256mN8eyZSwwWHGvrcjiQMHw2CM2",
  "key36": "DvCukcLoxonncfktxc5KohRdSanz7Ekt8nvPDZMGciuWCknzEmvztnnvNy5SG9VymPK9zBW6GgKdH28eZNgtJqS",
  "key37": "2QH4pzL5YbZtZfRH7Vs5LLj8169g1S5gHfqFBWsUGqaWSifskA6XMSc5qdG9YYgagxpMjuoRytxkFNGf9uXTye6b",
  "key38": "3LK146VRkcBkrwLSkdNWAt5LuJvcJCDFi6MLXKa8CktCpLAvC6dSw3cNYkU6ykipKnKFDDGk8QpFhxaHKxCd4ZK1",
  "key39": "3kuTfhifnuXZucnWo37r6gusdp5A6a68xg2uBLd2dcy2yxNoiMcYqBRor9QyZKuKQjiDtMRtrWMzsudau9GYm66G",
  "key40": "4PLqaXmRgmMCXLWaWyAQr7KhZq9k5CK4UgZjJz3obpEQsZYNC6ssH8pe11cJxUeXfAWixHMvWak2yvT9owph8WMC",
  "key41": "jNqTsE9XfLZCRKtCkv5RTjKTUjqFoDMd5RSXCCJWEJA9AzXp3j6znNocTKh4RhtNgYNpmyhGqdPNyA3D3Sq1tJe",
  "key42": "3qqUUxS4TGAwmoPxfwCUVwUpnz5pGnMd24Ne7dXXVRM3GSAwpvNXqQcQyDRVVbvn2RsHdXCBvKEvPobktTKYLKpd",
  "key43": "3NPE9EgPBpkZKiqnm35qf17baCwovTGhzZdZXGmySxCkz5NBPgKzQmkEABDoBeSrevb4mR6MQ4kYWACdvn8rYLma",
  "key44": "3LoDhqM9EpMAjuFvuxKvaKyScVuPaVFhMwqWQmoeCLiHWc2TuVZTEfzooajuL3qZkxXQgv6dwKyuNBzNkk9tbGmL",
  "key45": "Bh2Q9WvCdtYHcSeguRUDK3ofdDRG9Rump4h1D2vva5CCsiduesjT1d2oh5hZ9vpSzqewayb4oDuUddGpTdBjH6F",
  "key46": "4JZz5vzf1zTftZCobNvDtBFvQPHBhtk4KJ5Crt1qmNPENi92XhX4nMN74vmFpMDJ2PYdpK9rKLiCad33VpaACCJV",
  "key47": "5X4M8dKwPJMi2ZXXkggHXnGwcBT55yQAPSuNgyM5vZz2fuTt7QWngysAKcSpvNtCcBo6CsuW8AvQSF3kVL8PwPNM"
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
