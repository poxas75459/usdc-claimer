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
    "3VDjYceA4iihBeUKG4u2rE6iH1di3HYMwJW73CqZNadKzz7i9Vkd8enrZFSkwDxXg5an2GiEt8GewUNV7Q5mwjhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dK1wn83SWXTjoEnB45ZLePGspnBRPdXJcS58zyjz2aMmur88cZxKkXDzfGdXSW5x4VjdvYpLw2nZAxCEqFaBjL7",
  "key1": "3cZAbTuA8tyACtNJnxzzkJYViMYVVCEbz5R8Vz9HG1M8PUjdAyQM27wCHPY8yDjUC7x6GdMvuG4TKwqnFmN6ANQ1",
  "key2": "uSaqnPmgp6prLSqZ5eGCHknFQb5M3CW9VXTmaPxrWip7XNsbHJo7ZRXzRA6JdxFzK2TX2YCMf8eX5vHcZicaZq8",
  "key3": "54zH3v5HBPJJSx2vhKTkFB6UDvgRVsU8x5p36jGjxT3AwtuZzErnbKNmNPZKtBMLcEhvBaH8bEoig2AdahcX5cp6",
  "key4": "5VtcztyWXn3SbNMNxB5Xmq7rfhr3KJxAi7SF4p6fsXwb6gxN3yRKVYJmkDMdseGJ8dfkhZrWN3TWNqwx1BaMwiic",
  "key5": "2EeztAoHMw2VmyYiksGSLKmaHnZanojs4fKGca3unaxLiJzKCf37BiHY5Z2nnm9aqW7vijsNqn3SzXTT8CU4n1if",
  "key6": "5B9nz6tj7osXNPwxpRfHen8gqSUNe5kpiHAn2LWTDCD8tkud5U5ijuyy2r6WxvpX3d58zL4PLWUDL1GAbR5YJNfh",
  "key7": "5Hniksc8vR3Vd8hdCC85XYWAW4wZAGgew7F6UqfXvTJHygwZiyzWZ6FRi9PMTdjEhuQJZZdETVHS1RVaQQ9MaWj4",
  "key8": "2Qkegqnvu1atvvtk9w9YwpgLB5tekuEZwcr77YZ87hsqip6XJHE5yavg2cHkphibhPMq8ZSJKBCXBLqZ3KLVXPhu",
  "key9": "S9rN3zWZBQoiHkUctfvXbfFYgVfPTsidPBqRqcbdHrkZW31WbBAGUmp3k6iLku7LoUTWaiweFbyJt8o5CbqjThi",
  "key10": "3xwXTwbs4MdhNFJgCfh8vi4yqDAhJ1UAWrbrfZ9vLUaeuAqwwMK5h3uSxjBFHoB4opzJnr7PVUkRnpkDgtZqejRj",
  "key11": "3nr6586ck37GKCN5pgPrJWvErDhganJFDGxaYUBKP6estyDUPGEbh4C9akeMeEuEQuu2KNoQXrhZmVhuGBqyA5Sk",
  "key12": "3Jiinwk4RCDxNAQZVJnc8ZtEVQGw6A8MgckFUyZShhdhqpjSRMogaHjx5jpUJmx9c5VET99azsxdmTccJSUrhbFy",
  "key13": "QiS4BWPWKZ6btPA62z6ViZ1ins5M5nJArqBBhKnsnXX317iQjQWRA4vvcSYT4629RCMhcCYPnjwNKUjLS5AV6Rp",
  "key14": "3rHn4Nros6aLvoqpEHQmSCxFPsfGeHsPRAA4CQr8FLiQ9Yotu5xgrtyZ8zGyGth1tzmRtcfg9vfJ5oVY3QFhVChD",
  "key15": "3BexkXfNqUZupR9KVZrJgAXWy5H2YzHZaujnCiAbUiUBZYc4Cju9ZvoSfM1epPNi3qjCjEt7es15HXfu8546v8FH",
  "key16": "2d3rdn5CwiTFcA7fqxyb16c6PyYUkDUmxE9DxmbZJCTs1yKd6AXYp5RqLwvJDuTNgGWj1eA41vfP6foFvqZ23RSK",
  "key17": "PgCvnfA7UDa97kSn5onu5bBtjyi3wgMqkakdL1BLqMQBzhofL2BdjTWK121VYXUdrZxL2TPNZ6n7YsFkGR7LuAL",
  "key18": "g5fdVXPNsiveZmsDtRitQU8Aoj6SqCQqMJ7X92LobcbF2CT5hQpJiAkcTDxhvY3C9B3FGPnLr8p6hmPYGAqJTMz",
  "key19": "3MgeGHXcjqpQjiEGU7rVwF6PzFtNAcaUqMWbjkzxz8miYZd4mRFZ9sKhR7FnCEFQnputShCaTRQfwYJodCZqf28z",
  "key20": "2keh2czKstEg6FPZwCeQAv5S8bFjPVGyXh9hWGXjofURM2d6cMVyRy2ueGjx53U1HpbdT2u4NPVXhPadphjKUjr1",
  "key21": "yzxKM1fvv7dZYjmE4FhTLi2CPGF9Wdw6wBgMsbb2faeYKcBcUqR9HKZXXhRhwZUkXtMNyYeopwMvCofWkDxyXYv",
  "key22": "5av7D6ex9ULu1AnDGXte6nf39M5LtC5xK4Cotjci5Y3vJ4yPXZUPuqxYNCUcojsCVRv7q1v5F8fbxMB63GmHjb1P",
  "key23": "4nXfbYesZNnH7HQVRxvrSp6kUzxdN1jpAjr4vsUQsnZPdkS6Fiy7AQRvecJzEt6gY35wK81C8CWdUTmjqwxXGRhQ",
  "key24": "2JKxj9kN975ZYTkGrZCPADo76GpVmJDHeDo4maqqmk2ii7aLuEHkT3mKdG23c6Ec9hg5e2i9w8hYSiKdwrLnX1Sz",
  "key25": "4XyQUS39Z1K5vrJwegQ98pKY3NoAQgncg5v53emiPTbfhS4L2T4XLgxWRLR4ztx2VDAyMiSzVw5q5ubiUgDAWWFT",
  "key26": "4FcugCoZ5tk1N7RaAZMD6hC6C3Ph4cpVoAagsahaM3pr8NstM52iHAkCyuVMXbCybtmY4Af1i7uswvFEvMBpjZEr",
  "key27": "44Ghgunjqoi8BE2dreJFPAcEJ32TRJVsnZM9CGHFoYsZHGpv3n9YLRF7vXqSG1VEAwC1taXnt6SwS6NrGAsKR2Bq",
  "key28": "5YQzDL123PbCU6iaHGNSTUeU7d6crkvNKc6r9k5r7cKNbJ9GKp7gXYWpJwXuNoDcKjSK8KmxFjKkotDUpEgPFUS3",
  "key29": "5SpL7FkuzDVhuBUyF355wpCH7SktpvSDwwFqnS3xiG77iV52iQ6jMVtrdBiRppEWqYcXyi7PqXoqY4eCgJe7mmkK",
  "key30": "4A3x1wJSWycdqxvYFxan7yJkBEjKQHKckaUq1Yh5fVc1Vfpf5PnN31ePhjkqjbNXZ7b3dx69A4rKjjgpmHN1tjAa",
  "key31": "4Y3yytGGgQaQ2kyEukLBX11LKPwM4TiWojcbw7acbSWeEjEaq4i6K3mFqLgqS8m5k7GhDPw98XEfZAZgT4HhnZpA",
  "key32": "5fM6hrSE3pAnQhqkSQQLs1Kq3b2kueG4Zg69JvFhKV4EaqEf3ZsqWPgvYznMAEkqXKmcfsfUWJrezhJ9JHbyx79f",
  "key33": "5rrhqnPt1eJWXyekUSddY1pLiTYwQrA2Tiv5abpLrLWZH2aCESb1CmnXCyvBrdGk2c9j5ui2GXgzxVntHSeGVz3o",
  "key34": "ddzYPiyzyRz4myPMxFYotD8TfE1QgyoBVGqb48t2SMeC1FHRAXHeLpwgheZUfm64ecm4bUzZi7ZmifCpb5affbE",
  "key35": "3xZibV4z2QALHtrHMgP8pMcNgUMQofqFV8bz1sfHt1PFmxYAajdoYUxCdT57R4SktrrXMyxpbXFZwRZLgds7G3oo"
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
