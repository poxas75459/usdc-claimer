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
    "2k3KRx2SfFhNbT71wQng5dbwhqrQkjoHzXj7LFtGq8SjBjkWTYPMu2ftxN3sJnycnxmYACL8hPzdUfgvHBHHAntP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pPPu1d3uWVcHjRMs4dQpbRD6hk5wfqzpAUeJNUy5rH9MSLXdm5i7q5DcoB8JUURGRL6LFZt3K3zUF9rLTTbrs6K",
  "key1": "2jyxmBnVY5qtHUuLhspyZnTYX6F5nEcoGmhkNb25r8kkJZjf4SSZrG1m8b98WQafecd7ftbMRoWr4tZs2ksLDcNK",
  "key2": "5qaTYx2tcFDQNHuhTbboZdpkapbb9Z1m64o5kAmZ33xM5wBfEENrhudsUK1PDsGX4hQ7UDQtygAyhU9tY31RSTDN",
  "key3": "27T63vMqvBPBZ8PkSFdAFyN5QTTmd4swRBN4F2EqoQHeNUXBhm5chu1QEkJTMVeRivdhE7qR92tZwAFLidL5wAmt",
  "key4": "4EisJBL2PrtcaPK1RfxSoqTQ7XQub5HgfAMetbrkSBq6ecVys92fFKHDbpDkxSbSFtMcPQQXzVh7KWxrS34xZbXz",
  "key5": "639LXRwMQAxRNhbMouZK6DxUJSSCuk5toG23qvL2PNqZNDztmxJS5zW6eABmdPfkK9yZ8JcXz3fhPY5NMbL37du7",
  "key6": "3cUk3NouAdpFMHg4DvyUjau47Ztmem6ZQKLXbV17bWuHT9o7SGSpvxvRfNkateJ2KXVGK5EfWUsRYCXR4D8JfjV5",
  "key7": "5jmM2LujCDWj4khj2qKPu6pXA5S7wrpEUvQE963HQ8UTQmmV1rz4XA2EeNXJX9yZ9EmVHoWPj6zb9dGEvFPUESUJ",
  "key8": "3NGCRBtUZW2ehaksBugEZE7rzym6VKpTn2UTHC4GoPEGuH1yKeY5K7e8Y5T6BPpheYQQxPcm7H21Lm1sbVGyJoAL",
  "key9": "2mqkd7wTw7j7EznVgCtCvojg2HyVdxSXUBZ9mfso6PAd37tHikXu2cmUm2HvpBVMJwowHpSFZJxMT5r4qgWqb1Fc",
  "key10": "62rjHQNLJ7mZAatm9mRkPJFucGchVbiNnWhjKNf5PaKRwMLLe4pUwoT2c9zBLhNFjQs7vDYdT6d2SjiRJsKfEHqd",
  "key11": "Ws6QzMMtqDN3Fiqmo6LjWFBZrTxDba6DsKP3wz7En8MUp6oZoWYobNMcwTYfm8eBdsXAfRQTzKXCxjFfWAASgPy",
  "key12": "2YDiDDhqWeqiA1CbWXrPsvJcafgvujMWfB8Mti8ehSWzG21esQkoRNNttrxaagsRivvayetyfhLPzxZ1EvB7922f",
  "key13": "4R7WE3cnfnzruHLJsU4EXsEmzDSKLvY3JQSKvmHb5zwaSYCxdohxJbP7d37bYPf96PFVBmCVBg7dwSTKf3gRfviM",
  "key14": "46RV4cCPL3SnJcsPGRGwazY3R3mJojSBFLks21zHWm32zqzvqA2scpEEkY8n2BKLEWU133HGvT2t3gVpRyUar6XF",
  "key15": "ZDFdWcxL1VqwAq4oth2SYJHZBhuzkARAcijkRjkPtFtuKpreb2syDJzYj8kbaYVwgzvE2rUTCngFc7b4F2UxDeL",
  "key16": "xgArsDEdBJJ21D1SP6HyerieGxR59gKSkhp1d48cJ4y3eC55jLr9WLLCk6DRMZqSAqbZBeHTSEBXE4WvqcCM5mT",
  "key17": "4EcPk7DE13MUpXhowg5WNLwqWdocDfX8zq1VLKA3g825TVQBQ8ztHFU1QYxKSKe2ovxmQ4ndrfVgJfNz2xo6dxPx",
  "key18": "5nbjr2HbZfviDvfiSHr5GRaJcBKtsWA8s2nv4gSZR4ZJ9bUe22DNArDaya7UEPUVaHVpHaZXb3sYEDnAV4kyia8y",
  "key19": "2UoNuCVBiAJ9ARhmsb5BX7ojkkXzdc14iP95PgfDiDHAKjN8oMJuFxLcaTWD9FG6Eueu8XzmwnPBBgRkr4wXpdSA",
  "key20": "2EVDvRUNyZaymvKstQHhjL4pFq6psgEPzyaCM5EWF1vmCMZt2XVsmQeaJrD388zQj58Liqn1Bxh8yMPUfBLZxzYr",
  "key21": "ynJTSBw9ymgVEgpryMsmjoawQQ8rriZL96oVyGMACatqm3szxHuRZp8L44DEeQNdZMMPSM7ybu94VJfeN5QLbRE",
  "key22": "21SBJ7ZCiL1E27toLNFBEzfrPy6kQvBsAaVajm48F1jDC8dDG61UN2vM5AEAjRPHLk6qWFVmFDLrTdoTpUMLB89N",
  "key23": "4ZFij23uBB15rSSPJSTjeFbf996Bh2hq77hyFvYz16EH3KACLYgAnwPysdtP31YwYHnPqXWrX98wXb9FFgVYRvbJ",
  "key24": "tpWxvaSY9f6ryCx6XMnkWkteRx4Uvz4piqwi7dngwWoz5jzv11HsurESoQYiu5aA8vy6cYMQ3xC5HShKtCjJTs2",
  "key25": "3oPs3mTUWrABj1w6nJVhHMHJYPRam98cbc7EprKY6DDFw7gKRQvtVgbvBmPuYkUTqaZpG6xWPU17zBLAYb9fFgiM",
  "key26": "5eqzJgPynC2fJUnD3SRjwX2nr3ZkmumdR1HFZJyTciqMUtZy9s6Reyu2NF7ZGqQVbfFaivZ9Qps5WTfLykWP9QPZ",
  "key27": "3T1mAjJ7fWBLByuzrd2pfDTKgs9JQTeKerkmkS8uHUukjew4x9N33K52bU3CFLQTVwgtgdwGwDevDNbN99KRo9pu",
  "key28": "5KFfxvXrdQqRtrLtDu7oHuDf5gDm39U1R72LjYqmcYUS8f3423QeS9cNYVCpnTCciXzwQxYHFB19DMemBhRYaRsv",
  "key29": "tXH83VcAScC6sBiwZX7B4arLLDfqAbewCsACxfHhARGLn5koH1oweym7fyqU2u4vofHdgYYhT9rSTZENf1obmhT",
  "key30": "2fPwaWe9mc9nZ3yLCi7TZ983nqsFFjJsk79VaSpycZT9TF1BTPfjZPxd6jdmfdmEpXvr8oERQEgjsTrr2mfyiQX",
  "key31": "3rLXmEJsNDuaDitrsV1SRokvmsiDdVAXVfrhGyrRSr3deGB8cHaUqZYeBFn8xUKdJ5HpdAQgUtu9Ke9TdPe15z8H",
  "key32": "TyARSZ7PHT8Mw5XVg3tArnhMgMZze8ThEFmDRzye6J1mzr5FhEk4yMYwDYFNsLVJdV3W3t2kjTtRJvhjpjKWEmp",
  "key33": "4nrrDa6UzRBsYi8n7LTpmuawB4dMPJgkK44AwZeF3NvWfqNZcWTdmEecHKEzNJxj2peEKhpLE1TrUov4CqXGWbzx"
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
