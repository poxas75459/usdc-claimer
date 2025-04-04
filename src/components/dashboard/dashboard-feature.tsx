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
    "4tUqUGmm3ZGzc74ubU1xqatAEm7m9Gd5qs25j9frvuJBrPE1cLY4t33N2UySo1CnkMsNdabi3Vjaz6Rn5rYGw67k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43b1dkjvESvt6JQDTMk2vrzJNP6hZaSLJzFVRQw2o5wYEmdi7FA98SeY5sAHfJqyA77u1kVR1AsZXhFTuPg2EMGi",
  "key1": "4q6uZrkXFY3Q46hikSpMtvC9HS5zki1vTfs5LZf455GuJFEPej9h8ptpmnDrzbMZmVxuT5c4AqLQhEiiQdwR56gw",
  "key2": "4zWpM7Wo33P4pQ3B9ZiY9g63kci6KRr4yxPz5cBSaEUPecUvYEHgzWvp5zQHPYihPw5SzhMUL9T9h8DLEFqWVHoz",
  "key3": "2xGorneSxjR9RC2rBicpZaJ5yUd3pp3U2PVyqAsbWdCHJabpeUr1wLyWKJRaiPhtV7T7unayGHrFNSaL9eqzwKxW",
  "key4": "Gffi6Pvfsyi8MbF6yjNxnfxhaa35WHCacUU25ZW4VXSvPG6LUHtEznMW9rmoGuvByeMpb3PKXjixnqtp9Y1Lf3j",
  "key5": "61PKAoWBNrXxy7fTAjQnYnPmKS2hT81oWmc9rYyVqXUjTcygFcQGSPLyUzqgDvaPPAgxPkFL4s6c7p7fB6npJcPm",
  "key6": "NQdEpQfV2qYfrkzPvkJg94dXJMAzNrU5t6U4fwqYcar8awaFGHcdAe8ffatqVPSxJZoQnxrNYMFTdiu4bw93sfA",
  "key7": "4nDBgQnsaFWx2kUPJqaL4FSv9265KwWDB3izJ1m28RYupDokyLNvFfbTrS6zKzD1Vp5mqkv9ky1s2LzYBmcgjdxD",
  "key8": "2xGMLe91GGkRACLDdKRgNX4XciN3QuopD9H8g28TcR9qHXZXUcvcKKS3q92zwXLAfmpTyKrp7wnpCY1mbMuh3hFV",
  "key9": "5Ch5Ve7vbnp5gnPqsg1kjavpXVJNr3xLbTqdMq5oWN15WmB21yE2Xohh6AkdsbUpha5F5ZUAzhDiGVHoaZa1qZFs",
  "key10": "4z1VYW3ewQb2YwY6s1qpPoGqUKrr3sUBdubXTxgudmiGpb1LqtnKwMQjE8skEJBDMX2djYEahp4VDs4wwkwPGyGo",
  "key11": "45XrcqEFXGX3HgnC1KzdU3CmmaCm2x9rhozKP3QEVcjYF5nD8iBK65nLYRQ1kJqgokgULsLNWcC4XHvadPuo48p6",
  "key12": "5tpqGPALDeAiioDsEjs5G17G7Z3czbrtMJf5ADh1MdCtZsA3DWC5swTpUEWRqkM8XuUYNxhWARPd35cCh8UDVEco",
  "key13": "2ds6nEHNoT1JrAnwcz5BuPqHM5LtSkEq1xdi3ZasMZFkQP3a3LaiTDJbSCT7MnDgiW3iWhfeQfQDWPkVpCX3JVEv",
  "key14": "3fXmeGS6LGEK6unVN7SXsHV6HrNEmMYQ7VC3a8YomTLxCKTTaDnamawqopwkFgYUU7SCkq1xoDdnDyiABQ6g88ts",
  "key15": "47XHetP2N6tpcAggZLfBq5dSXdMyRj9DfMKtapi9Jqf5AwMYU1bqbM4pntgzM67SNfMHDPMQY6FFnKQH1xZ9LRFx",
  "key16": "4xjGMEGBLAdVGuok2rY8EVWfmygAERn2UL7rrHnmseGN5RyEPWyMXUJg9NQ4pQtX3djqvgHGyxAPbQTqexN2uxDc",
  "key17": "3EXGK77br5nMmgSREFoPbBb7Cn5wpBZR5t5QkChB741usWGkeDVbjsetKKEyNRwiEBGY5x83S24udqoWPAocYuyy",
  "key18": "4tFx969hjJvXKNKy7ZTf4MXWSvRUJUdVgH9TWsAfCDALB7sT1TZrQMbCL7fk7wGof8vcrdTjaL7PDR9S7jB2mDYy",
  "key19": "5Rrz5Msa38ZEkjyMkhuyrHv1yFPV21kNr8k6d4omxPDDcgAaL5ur9cLrDFBxt4CjVFFkaAuxx2dx3KPQAQwv56ao",
  "key20": "5miMDqfWccNReHJfHQ3puocsMcow9fyVQxZnMEKqRyW8i7Fy8NB1Jp6PeVUEd2K13SYvYSNGc7JUzF3GjWinGHce",
  "key21": "u2YFt2swHpGDHMQwdB5J5qubrWwVxjWcEWG4MX8q4qazNFGiYYeX46cy1e51nYZWd1L1a5oGKXtwZKrD6ZLmtQc",
  "key22": "49YnbwgW3t9dvPE4gL8vJv7wt1sNWDTRLUFRXsGBpf28np3iLDp3TDncbcsUhm6QiSFg1FGZunUHvz3RbyFY1CuH",
  "key23": "77Vs3vGZjbLu5YzKVkC9PASqYHc7euPtEzzWBnw9FippirC9ptx8Zv4o95eRsBoGk6reQmqYXV2NkGs7M9A8uSC",
  "key24": "4MzXapM3QsfARXjFj3AJeEH8cANSrLhFkowL1KV6R3jGtCZLt7udZi9mNza4EEznGZVq7fhRfy3YcPQ1qZGxaDX3",
  "key25": "3TTWGe5hMn5nkxKksFmEAocKKawiia996hBc6FaVygGpq7VVzZrR8XmTsqHL7JeWqp7pKW11uZhepocHN4mQiq9k",
  "key26": "2wu5EsEnRiynudnNeKrhNQbMrVADHAgNvorZrvt5g4Co4gKycFAZH6uT2Lvg5EGhoZ7SzoF6T4vaHNA1rSKame7W",
  "key27": "2iNWRhKRKazgNgpGykymV36DvRr43dxpz26WRJ3323BASLEP8unkUKiR7VTHJVmE9TNq5QKtTaey8Xpv8WYpawmL",
  "key28": "4LaAJJ1gX4KFF6mBZCuiZwrsEKjDk1ZCGjqvTCLKgcTH9wcfSeGuFcGESgruc2xndMvuo5ZaeZ87rspReLWWrzFj",
  "key29": "27xogxEgi5LyBztW2KMK2MMjB1KaXWqkoVTA5iTLfEfDgByMBAv5UEHfhy1fCjpK3oX21dL8NK7D4QZTUuaRDCdj"
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
