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
    "4VqE8J37W2n96JxDJBMyU8uMBUS93AN7AKKN5i8usFb86e4LCGN23URfwQrSbDXR77UmcDA5iZwAo21ruYJ5yxeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2xz4AFzCYnquHPd23FJxrDW9cQH73Pvnb7bopG2a61NWsB58cfD2tSQ27aLfKYGfoBBNaQeC3tpSf2CbwAWFDr",
  "key1": "65UQor5reqAbdJt7LeyfnB1oqJt7spotWTZwxSxFdJq8GgXgLN7K4FiTbuoLzExfoibwDBPqitnAQA4pdtq3uqVE",
  "key2": "2ChASBZ1CV1kTfiryjBnjdr1XeDbaemSHJFnxYPnhLBYnPai89dnb43JnXhHyfcnByBLp8ZDsJfmxkGeYHL8BB4B",
  "key3": "TqHZFz6KoTXyQo4HioXYcqtzNH327xfRWVuMCKCmGHGtjW3Cujyrpps5BMWGuuWoW1p7SbkdA1Gvz1KWeAuW34G",
  "key4": "3AW8w2LfiPQ132otag84G3F8V7HNMq9f1RMSkWQ4WSHCbiZQF8t7b6e4EMrV5Luds6V2D4KjKGcrqndKQHeQHZyw",
  "key5": "2r4jXfs1y6xw4VsfTANGnivYRUfNtmeTCkVSwmFS8JK53U9gWh5iq1mzy2SQK6CpWZjM9FQxjK9mXK7eMwgDNguR",
  "key6": "36KkdmBEdSbE9tcWNzdLavinWQT67jhH3Z5qjVaCgbT5QFYV2pj1huJ87pQwKcHcZLR1Noz8PkTPPeRQ5sa5iBxp",
  "key7": "4WfvgwbfLaUQMWHK3VT9kY6ZmCsiRNdGate9PFBBXjLuyAPQknshfKJDsfQ52vLZ9ku2FTwNSmww7zjqmUL36gWa",
  "key8": "38LoJjDC5thW9X25dLZRuyu2FCcx2uuHpVhbXSJvTdHwAzbWUuQeVx6sbKXj1PqrZuNdoHHJwuLsjC5ubqQbkC4n",
  "key9": "62EkMUAWB1zKCtDc6SfnaCqz3auvyqCjXfdzpQdpG7m7mM6ZZjmproFKZTCMU8y6qFfPoWarnagybw7ZeuaKFLN",
  "key10": "BYFoGXkD8XvptgVFGYMMbfSUMXGFSoVS3ZzTzW93RmmFmwJiYg6xpdqaGiDz5K4WXq2hWe4nHeWjxany4P9rTrw",
  "key11": "5Kqjtpxd8HK4wGE4Fa2fZ5Tn9i2pURXaBYUCW7Fu8WVuNJPvjZV5M9fEoywEVFEeRhgeYcVB9phdYY5jwf8BHhPr",
  "key12": "2M1R5NL7meXezvN1XfpuySLQJMqwtmpzyirVs2Wi1fkt2jaqDtw6QrcCqRLpbeLb6aRQhJNEqLpqnL3hT67vVgY4",
  "key13": "3BvXmwYdTyewW7KYECL9GMsZCFCD5roLwr2dAHZxsXArxH7R15qLwUSFjomuEwyKQx9XUcstYLgvVjYR42LCPgAU",
  "key14": "2AzswFpMNXJVPToMLX6jymCZpRAgm6xMkSMMpR2MdZajCmLxae8wwsbaTyLmZJ63uJ35EXV9Y2xD7WMRwPSDDaTu",
  "key15": "52NxGfbLb2PDp7daqRFKRdo65ucrhKiSCwLHRT8V94K25uvgBbVUsdmmEWsiaMWxGMKrHJtNWSqE6hFaa1isVHdA",
  "key16": "22HZ2TAiXtuGsufkh9g9abocrWRGbtSst14s7LziE4dtZedCW9R8j6Z72BnudpWe9TWtW3WsSJSD9gGkZaPsWjj5",
  "key17": "346U3cv8ARBLjWcS8dStKjqqDhBX8Nq3N86A3aqbbur7YaaHikoJfPjqYbSjjXizTTdFtyFubs1LHUQxJkzAwMp4",
  "key18": "54a8Lqacz4iDguKFtc9csT5xozQHgoDrsXkYmApMG5VgbCx43xUjfgbqQLWZronGKntu6sMnpu91Nw4hfT4AHMoz",
  "key19": "5wAeDtqB37w3c99eP1Kae24zniEkfvM36syzsdThXU9Ed3ddj11NY24x3hGyU7h365PYXcShXidCWkrW29yhC9zL",
  "key20": "4VfJM5VYCB1Tb97Rq1dTogmr36Bgz8ztrVaUkbdKoSjWPH3AvvCQPP6DXayk9C9PPqSzCm9FWcxzkJqyknmp8HpW",
  "key21": "2MteFPETTkbjjymFNqprgf7rUD9i44mYcEqCchSsjtk8cuneTSoSoVgcPr24ij49hNhH3ByuARUiNh4AFKxiDZxP",
  "key22": "5rnPMAVmMrmj3DkdRCogYXS1v7b1naoo1Ho7h1j6CZSKxrJZYkUjG8rgKedw6D5eHHnXJxQEVdxokrA8WXKeULSt",
  "key23": "5Sv5gpqFW2owH4Zp4s3af2Ber6pZRSxGSAY1MNzaEXndzrkBPgSHbzB9BKhXZg2SsJCLQBceHUbuPju8UejUfvPU",
  "key24": "43QzN1hTmZhYiJTP6md41S7ZPEeXFVebGgaj7x3n7mLGPtdpXfxQd6mt65EarP9NucBa1bdkQyxUeT7tV8hF9ZFd",
  "key25": "3JjduwDk79JJTbzt9Ri3ZuzerWcpqTqH1dFJQ2SUam4kjUvRLARfFfm3Y2LKgSGREEkbopbTTG4GSfpVm7fetHVP",
  "key26": "3RBtKn8tS1LFeUJn9yD8XrsszTB4xqf7NW7Zkk76HRAmDYbByce7uridcUZ33WGcs6uJahhujETCgzyyhSRf2sny",
  "key27": "4GPuFdZtAicgb54v9sVmiAoA3BNLkJrRFoeRSKFUFNSUjdKdQ2b1MsYfHCfs2GVwQ4yhiH3MG9Es1Sn7zXX4SZ5Z",
  "key28": "35dj3dttupdW2siewHPnkg9XATNXFc3YwZ69przn1ZBgwJ2MyGmborUyHGV4AR4JsnVG8JyoK6HM1ZW11MPGm3VK",
  "key29": "3md24k4UGSErpnYoyZcWaHVrrx8CKSf4HF7FfPRSHXSW9serbqQsAWhYwEnLUbRJNm8t7WqhGcoxWwsLHK8DWRGS",
  "key30": "39QxQWBDKsTub7qSNdApdGRoqwptqLD4Xnt9AgHsoSZQDNt84e1uf1KfWbttJLZgKt2L31RfcnCZDgMX2bCbPC2c",
  "key31": "4yRkuDNdnKgYRMt1g8xbfmYUGyqLZFcNcVbPdgDZGpAD2QmFe8rPnZdDidgj8K6AFybv4NBxRYr9KcZ5cNt48YxF"
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
