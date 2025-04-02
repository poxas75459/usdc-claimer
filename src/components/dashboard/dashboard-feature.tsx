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
    "44FaTaHj51AmkcKGH4WuoeKW9Gyoqw3EkhLGrAUjiQ9BUunyNPnkTJxU9yZsqPSr1pnEbup6JTqoaoZoGKjZNcsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hc6KdxYJ5P3nQf6UpXtYnQy6CDHhfbW2Sywsd9Zboo6mAWSEfpnYugwW3FQTQi5BURa5bXzzgi8miQmnpkKE3dE",
  "key1": "3MtVWqCyfxsePKVZxGP8Rd1ccPm8kMMxcsbyq7fupR9nACewv8UyRKxKp8SaoxX5Uop4hvoQ1tqiAk6VDWjavY3o",
  "key2": "2KmVUhYVSe8dzieuitjLxs1rD4nztJkUar4WX7AgGDU5dQfr89HM1ngWaXfwJX3cjd4wAD5QStqmT8tPYhiFLq1e",
  "key3": "4cLfin9isjvzxADrnbc7U8Q4a9UYSyCvPdNnKm7ropqBe4adncVMwk9PC3RsUGMfpcyXPn2LVZYDdc1ErX1bzFgJ",
  "key4": "NTxo7E4J5Xv6K1f6QCjcMtuVa6imgVQ8nrEykKwVwExJczUkFKS3vHgBDtPAbtjGujXqK2u7NWarwJx8muE8dM5",
  "key5": "5HZmaENcmsaKeBvTeP2mWtD1L6tuCGkYnwHShKsct6AGsUopueQanhFjApqvqyL3TV1Z9seGJ44t6bdz1d2fkDXc",
  "key6": "2sxn1HQcKPzHRPXiG9igaUS9cRmAtahWMGcFhknq5Tx4Sg2x6QhHn4aakAbMxzdasRrKjbfw54kqYc1P46dbdgC7",
  "key7": "2JsdAhwkujUZm2wbCHdH5a4Stm9zkrnvrWkwtfVwZvr4iBn7B6vM4Fmk6sSpZUjMaETzCQaXxErJvJ2722j99q9J",
  "key8": "5SSwCsGmWhKoatvMDmJhaPzs9swqkecvs3y52r37Ggi56FVUdL26G2F9NYogV4udhwr5Zer7aM8v5AccT6Lfrqqn",
  "key9": "HzhLtRR6oX5hy5ecA16bb8yerGm5E4p1tzCKVMdRWrGwgX1junL722YtwnqQbevmDoUqcp7MUcAURZ85822diDg",
  "key10": "43AnPNy2GuVUEHeNTx5KwCbCoNneSsBz3RfzXP63rHWtpLUMQ3ePCMzqVmDj1uBrXfYFMfYBmNwZs55ns8pdWeuE",
  "key11": "vuV1QiMP2PgE1kNmtDMZGTTxEb44DqtChBRBXL1DUbufvuXwr39TsYyfLG2gfvP3Ltni7xZSpnxjewe1kFwbUeX",
  "key12": "3FseEmiQ8pggMg29UehaWxeFMdaEuC3zMG2jk6SYK1KEVKNRY1aTc5RrXKTA69p25Nf8jePH33oLTamNexcK3i3E",
  "key13": "yLfjV4hxmKCWhHvnYwP7mKhAcvmL2nBLSytgBx3kMcYoMTRcdCbnzqqh5Ax6PZiGQJLLEJiV3ZBPTXgUch7jxmD",
  "key14": "4f4kDF8e5pU2kVk7andCRFi3AYEBBioEPR98jtWo1d3ew7SM2wfPEGkiguhVwZv5g3obhKbcRfAmsFr7n7dmHdXn",
  "key15": "5NTTVQ2WXYmfwuNPfAm8EhY2gEhVdrYCvhxwk3AtKonYHgmqVBG2zqMHesQtmKwmmdDNboAujsP7bLt5EPJKjaWk",
  "key16": "5axA4DtopnoFH5tpiuogYb8XfHRt3LwsNJR2XY1HwAfVbJrvGzfJ6XNj6Mp3ekvBWhav84hwC6zyv3cyqZYsxTTz",
  "key17": "3JvHrWkT8XKYaa3Z1T4kRnaeLT6t8hAxvH8BdkzHkdkfX9mWM6FpY3KyMeGps7Z2GaiUQq3tXSnewyB5hD6udEEf",
  "key18": "4Cvkt4R7eoZjBGwPnUDSEZhjvdL9PKy15mw885Bo4hwkg1TYFuJYBtQmbDN4aFB7UBwXa4XdAsymrbzEGeYfxkip",
  "key19": "CNxNSpEH2o2dMCkPmNMtEmdzvpt7Atr4f1VkFtbG7ndtZtJXsqzx5GeqQQsNXK5bPKfGyLfVLeL9f5KhmgmP1ks",
  "key20": "49h8rvZbzYzp1tzzSeV8vH9jYRSqfpQa2dVahpY4SVkvFF5ern78B2zswB4qJvah8N2bn7JjZ5UVxNpTQfydtGF9",
  "key21": "4iV3aVqLU4kJxy9s2vy7ARLNVbdRk6VEadJ13VLEN35oZ3GhC1Hx5iEtwGVB4p2XzzE16pvSPh5NBSCGs1kke3Nu",
  "key22": "3HYtpWhdS91yNh8LWxhSD1HdAyh5ByYjjeWhF6EQvzCThABdvzJc8VJ64fLJ9trH9D8DdUfTWNsfm6nfkVk3PQ3p",
  "key23": "3UuXGcuYsJ2perZFNLP5z7Gm3WdDV4s2VusMUng4ZGhMSD3TbsZtWcNsSWUDy4gTCSTXbpBa11xB67ygx2hhR72a",
  "key24": "nHFrtUB3gsXT2pBpLV1dWJrEakuERXpUNpEQqciYcENNanoYQUycdBMReEAe9rQt6BYQxzMfGY5mniecRSSfkJL",
  "key25": "3DxH1n9bu1tePtCw8aqH4VBujt7P9dkrZFX6j9mMTZaKmaMhw86gg9qqXYCs2ng9C6vEY2ciVEJyqZBw3pMQir2X",
  "key26": "4NuqvrWAuyoKkLXRMm1vMzRed9i3379q2yWYsGp4bR6jW7iTXCSDcfQCK7FouPduHRyrBLjtmR7zo3F9rsnr7KXW",
  "key27": "3Gv96GpRvvojZq9CWULb9XzED1KcG4jEg9GJtaLpP57ARpi9UkUKkdBfDoKPof2HbN4tfU4ju1EvrQyipBX1V5Pd",
  "key28": "4d1u7AE8vHa1oCzcd8fDEP4esKYS3nhdxY6K51APQF5A7LxtLVdnDvH16uBS7UoVmdXa8UW4enUqTYpsiATkCwA1",
  "key29": "PqQcedkJjBFKAix8KsVq7qkwY9v4FR6CYhFWv7LEFy1mbbu3mt7sGNTmxyMBXuZUrH6urGNXzfhPuxihX9sGKVb",
  "key30": "5hC61rPVZWWSxELTcaJWKTaZ48Pt3trdvGDjSXr2kSCPWBMhM3mWeganQXT1zE91fjJNpKVheaT7uWaM3npNgXLx",
  "key31": "47yoYvi4Zu54AHL4EEtZuq6JvCuKcVN92yCJB29V9AXV3KyVnnGSGcgXkwVF7sKfqTbGJK5xasrZhdvkfJEVBqWD",
  "key32": "C6zZLHZWB8G98YG8iXQ6aizEMm7wLcUEYA6Y5c58L3QeLrdNAG7qgjXT2vKgt9M1YK4R3i8zfAyLcuhm5Nh37jE"
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
