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
    "gAGpTNfpwaacSdkT6Ws3GukuvgdwToYaPiWMBZydyPSxAit9bs51cY5LUDzsSktNhCj9B1xgKn8P2FLZFwJJXoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SaWdxCUzyZsjxHLG5Udrkz1ZNgGf9ZqsDQLjs7dvT4j59rCyjdz5i5hxbtkC5hAKceRHkB8AHuf3fkA1CvrB444",
  "key1": "4TMiYqGCYPvwNVnhKCSJPoSoYo84K8w26N5Vv8CWwAt3WoQUvFd6uwbcYz4orhxgmVJB5iQ2JBM68P8yUXFkW89N",
  "key2": "2u1N4JLHtNxEEN3nwY1XUJi7Uf91KLzPPQ96WYqxghLiuRWCWzeHvXW8LdWn44KHvCmZCrzM2SDvkQsxJCvLrR4m",
  "key3": "5RkzK8kv67LPydCBpnswLXVZstp9JQjqRf27tkMMrySExFuE6jg6YmV6SJFsYfGPU21WB8i1ah6o1S5ryYeiXC63",
  "key4": "2ZbSt9vyiW2Z3jDfFFK4ksTgzT7YfRy8eGqkYZpghN4dgBk5UXzEAL22Bv3YWVpuD2a9NkfMaX4dQsMV8WzWJrmY",
  "key5": "3tcfnRtz2GsobgFCQ24Wq8oc2ZincMDcLUxyN5QgKM1Sp6yAmVxDoyQm1ztM51zjECG9wFxYJt32tfNb8aS4UYcN",
  "key6": "oYjfwkb7wp8hBiD3GXmAjmQ8Wm5TuRmxr3JdzuZiScpsHBgX5PQwvVULsBdXtPUutQVLpmtg6UhKB6scnnLEZJA",
  "key7": "5yeCwUA1kvc177Ys4SiP9TzKm1kwJvhZDLgkeXhtSeKfg7biL9hg4QumA1WJBnx6mLaG1JMUJYQ4Qe4bkCUf5NQi",
  "key8": "31z4DBkNMRuDADr2kXJKoHtWiinFJTZqDrnVucWPPHt7xbKspL3ks7dupZGZagjMRurdsALzhxhhYzmKTdvxm2bc",
  "key9": "3biuTGojrfuCYfnZvQbQumDD2xo54ALSxUUTBbnMSS9UEE4GocS7URjSnu11HCPNGG7hVnSjAMRdiivqdxsYiqXd",
  "key10": "5n2wrS6d1vJxoW4Zs1BL11QwaEKoDHWsQpQM49zEPsEWSoPRrBxuKnnJW9cpqvq8kVqC8oLa7hp7NQMm9RF5E2su",
  "key11": "4biNYEYZFKhhq6o35XjxhZqfLTD4GHVdT5fy6JP6m8GyXcf35x4gY5JYKD9AzMg1qCuaQbPabFJkvU5SVTYPenS6",
  "key12": "4Wc9GqAjrGNYKBngy1jf3m46241q5tVjzXgvLFsu26qHYaC6LRa1juEWMDwXfAMPbYx5v3JtcH743RBtb1gqNFNe",
  "key13": "5n7FnMz3g2FcCCJegLUkuSM2LBs5YA5GSXrxPFhkwAwhWUPYrmSFZySA8yAMagLpznVS1sMYPZ8Uw9JeZ1zukic5",
  "key14": "3xzw5LkZrLZDqCgNJedgyaH4nZzcs2tmcx7CmKSHAFXZ49ysPKbWqx1in8u3qeP7q2VUcFgw6deNwsoCFcdyRQNs",
  "key15": "3dU9zyfk43gK6fowtwRMKVSStNWKkSNtZcTSZMA2iMAPp72NA33yWX44wzQYqur2c6Xer8QsEZRk6LRCDWNqz27J",
  "key16": "5VsxtNnbUQfwuGqVjZDZ9smNsLRUKWMtD6yXmHVnv38PhXKnD4twDU4LzHaC7E3nqzmkeLcHJCc9KJhmA9teCkrq",
  "key17": "HcUzEMgsQwRVRdm6bFjAqJmTsuaf7f9nUGSAtwpRjzSLPa7CFoJma6CYe792CDNUFHdpc5j3rLS8VcrtEfSZRMZ",
  "key18": "3CTpA6Ao34iZ3KewLKrfsHqwCcFa616ZA6zqXeAR73tH2o2a4ZqFsgRjaQWsnNjL2LGHmrc7R7KgaYw7VexMqrGy",
  "key19": "2x6gwugojrJPnRYF8K3j24pwhh1CSFXKGVpqoA7LqKVdpHi3J4nmdZKiuqwcymnXuwH6zsadPmqgwGL4rg7srgBS",
  "key20": "52sqzafF2NAWGMaWezY5HAPyNuPibEHN2D4qwxxMrpWpoURbJL7pxMFnSm5tEqixNixiUa715hdAiNWcmKH2E9g",
  "key21": "3P6EnbWRUomg5dAtKsDydZgvcT1tZbXZN7Aw8Cjhy4CmG2ZuhLhWmz55NPcbKqWgZftzbRZWCkA3uYhJh2u4S8bS",
  "key22": "3Mhr3y5Kkz1fxQraVdKUe6yWQH91dkbS9JQRTzuXi5nvuoqkQmeGFjznYbuyue2C9pF9Kv35tV7cSCtc1eJoTNgu",
  "key23": "5pNcVi9N75KjR72x9Ve5ijHTQHJdcSxW3R6kUXH3uLohE7V7aE6JT5vM9YHVnbgRWJ15cp1ubLVumxRW9WAAbtzL",
  "key24": "3Gp2pLc5PaKvKAUcaJn9q3GDbPAcbB34krqp4Ln7zKFJXqN7jBttbQVUqTTRrfVVxv7nXa546mNJBK5QB8YpFjxQ",
  "key25": "PLeNdia1QtnmqucMfSYmc68RhUVms6NR94NQnD5m6ByyNVtU3esUwJWtD8wgMozjc13zZcUxE9ZoEzrxXJksvS3",
  "key26": "41CziFsVZFTSzBwvSHHZ3VWTsoD7P1yYVU455V9BNJgMHk3d8XAPXXkQYwte6Kn9YAVhB2xAs2Ht6DbwiLYPU4Mh",
  "key27": "4KWqoYkA7h32nMBgaxoUBWFF92dJkEA7XeNMBEy2rWtqHrDdUMNZABZkr8pwaHrLY6CKuBuh7PCESTSzdYWEbj4N",
  "key28": "3Mno4N18GvzrUQxrV3f8CcnzduQvwxdPwv2sTFdi1QDzBSG4EN9WzXYBpWKkbWdJp6UTvgaTaoN3PRHH8aCAmRk9",
  "key29": "2mu2p1NttgjUuM5kGFWPnygzZjrmzgpv4AitUEf29nEjGyAt13QWBjz6tLUxp2hSKSRormUMbv8nkhcEZLeidxYG",
  "key30": "5mfcVf6ErfuCBsBviUHMaAoXLkTH2wXA5NndgUGg24DCNJQJmgijKTZRRFsTEkYniGcSY6icKZXKbDS1TSHTpZoc",
  "key31": "4knpjzeR1rbGuJLEr8BMjJeFvyG1bd3PAmit44U8ynu6GtXphm4CdUAiacCpoKfhEsnznxtsApUDLkSwugyLg24w",
  "key32": "2iYtWP5QwHKn5GMn8NoXrP5LoXqBhcukruLvWjBUNbXE7xWRE482z4rypxTa6d3zYNqRvJTdToQba8GGf6v2yHV4"
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
