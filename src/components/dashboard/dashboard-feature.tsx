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
    "5VUcSxR7RgW66fEsxZ4TqybJhGGAbLor3eNfAYk93qrene2pm9A5rNHxyKK5KWv3ahZrRqkYc6Fr8a2GRXVtBAT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7bVpn2C3pqjXnXmQy4dY1fjRxsNxobka5XGvs9UCt31sTgBTq3iG1BAUbqxsZ6pEVqCwVAt9HrePyZ6CkZNDyS",
  "key1": "3VzPCDWAxH3bhrhZYRF3eZ7MkV4667XWSzrjczZJtTDeb2wFMp7r5zcREr5NR2sKDhtUjrc66UAXaNkKzVAsd6t3",
  "key2": "4pVkGon47uyLvWoBtuTS7i4V5aTqgBW2broHSmmLSvKzM7GyAyLvx9cUptXPYdHrCAAgzF4yA6KfdzWLbBGxymUZ",
  "key3": "2M639MVWdKojNwAyrCZTtKK3APnEgVkvyYZn4kP984eZBTZBw31X1E5QWPkG7VwFX38KnPhw1N4z28k1Cnno4Yyk",
  "key4": "2tZZ8ZwB1e2DK35gnCEasY2qQhcqeTbEhw12A9L5uaqwHwbhnrxFbGjWMB8HQuunQLmkzVJYjKP177KhALryPTwU",
  "key5": "Czx5mF1QtRrZM6noNAv9XGY5EG72YSXVy3YANBVnUSNVmB2yYVsafpG2icSwcXVbTfAFzyffNf8CX6QPRqrURDt",
  "key6": "58zrJ9zEs2Xd3R6VSYAx4mzCD58UGoJj2B1RDas1UD9T1q135Kb9p4owqxqzKuz9kGoSBECn8rMqEiJe8brESUqf",
  "key7": "3VE3R7jgkDGEvyqSAdB4UC42i2Z4So9jxEnwYfaQLb6rTxQp3wTX4YvtZDb8u1kx4uNxaF4gdGANxLYuQNXec9GD",
  "key8": "wmJGHvEqAcGWUZ7o6cvKijBJ3tQbuMErxEhjpHnqcc8zrtJSxKYu274dvK589Myw8qDaPsVGeVsJXHwYcKVA8iG",
  "key9": "4p7jFWJupvraCBkascKhza1p3BFUqbG4hFEJgkwdhXwPqNBbEE5s7J2p7NhhXSifvnSA6AZ3KnzFFKDf5nvhD9Pt",
  "key10": "2mqWwXCnBWX4CYWcgGySd78NFtuBq8wP2GTbwwDSuFSWuyC5VbYD8NJpuzRoupWW1W83QM5wApJpoaNUtEgzy6A9",
  "key11": "4cuYpSTxM8T2FonbGSgiPtPYmCwieEGkc4axUTr75pywZHz5UncUQyXbkcdCKQ8jpSdzTv4i8oDvPhj98pA8z6mX",
  "key12": "55yQ2pZfiQMp2ugiCXB8YxvD33BVvVXjFZYWz5sc8YWv7iTpuAjyYCNKNkPHNSZz75ZsiMWSodojLG53PgQaR49P",
  "key13": "54UfSfGBSFBcNeavsmuyy9q776wpwKHNonLJAU6Jj2uz7mrZ2xqmqyt7DfGYZbg4PFCEArkXWqPtWknNVv9q6G8w",
  "key14": "5JNSvRXPN761ycSKp3fVe8a4QNdzTA78AY1Qh7HMLoTSiDEzrjbPFjSNKj4Sx4CqcNBPqGFAL76hKP2U57sv5HF7",
  "key15": "4QgQAeytRtAWu2K6TWsS2bxQQmuhBq8E9My3qMfm2P926RpZp1zroZVTUx8Z8j3co5gSn1KPekA5fHoDmptrRGco",
  "key16": "2YamNxe6v8waomgNGdLeRx6xuABxtpdaGLiaM6Ljv3kZidvUttecFSEG7SwavX48V21yDFuyhUGn4YXbUki58nVQ",
  "key17": "4zTHbrqfHk1BMYBfzAu6z6p58P13F81nGqPPhxbr2A7WQ6wbFH5Jb9rvTHWGxSeNQjtGu3fPo43JWehzgDUbbsXP",
  "key18": "3cCLWk3LhALL41z5oHTs9Qksmt2Y8v4zcLsWnUN1oQA2Jz3SfSvSjjaLUCsQy4kxiot4DeJ9aQs23QWdaV9Mv6wF",
  "key19": "4u7NMhTgim5S8jusDPs3QpN1qWgyf9f315Wk27dnDe8PomNGLd5VyZmnk69dnbKtLUTEMa41B4iDCnTc7E9ZWDeN",
  "key20": "5UYmvQiYPffAMsJu1otiYV7muajmUZSNRYf4cLz2csvpGwoWqVSq8FRmuuWNcoJMRHK4nwRBiZYjSjwNBTFYKRT9",
  "key21": "5xZ7yHnVppHT9kPdUtoZcJAXnrtcUUhUSmYztW85zb775Q88VcaXXeGiHVE7JiTmXDcyvLpqvUK2KFS5qsvi7Tz2",
  "key22": "dggpXBFkwzm1E47ZrwBaAyH4EiEhS4bNNpPFSjuoDe553cDt4xrJs7TFN83ohLoBzqzfdHWPR84sF7aL5taGkii",
  "key23": "2bwm734yEEWcXRqer5Nt6SN4BAXzMJZKSt1aqfkpBeE9gVwdP2UQkQZ7mWq1YiyRCMQ9dLyaSasw6WbbmTZXLkNy",
  "key24": "2sYzAr8FFMErDWPqhm3BtdjmzD5TyhRoNasw7N96j9PiiQgSijeXG7QpzmftZHFkS2NMbqHV7KbdtmZTuWzvgZWA",
  "key25": "3Ph5hShTJSnPheHFUt1cKrpmDq65xNiSRZ3WeNJp2Em5RBUsWNjXU92tsWXYrqepVHgsHXJXLrpNW6XAY6vmmQgN",
  "key26": "3TrmHvzDk7RPA5fZYGV4m9E8GNTduapAvRfmJctR2Fm5bHWnV1LuJcQZLaQEGFzmJFwTdPpCyuqy2NbV3L7RFRPr",
  "key27": "2FexUGt23Tkph9AkNM2cNs2WURgmCH8h4QYA8KeFm2RomuR6xGP5JAJMU71TUCZh3viDaH5kpormixEza66TBZun",
  "key28": "G1opWDovZkPdUXyd5gaJK7uZdScSrZZobVKRZApNPGW6RATMWuyTBX7zZEKWHTRKwhsFxF4Wff52BTriqEyefsF",
  "key29": "4R6E3qwpPQFSNgLso4ziw4BqC4NZ6S3JYbU9jmaYTwaM7EmCN1VtFu1oA6k6VFyacazy4c1TRzNc1HuETnQPeZjf",
  "key30": "5WPy14oUNZj5FiP6xdpG7w633MiXdbuYNFdv43j8UZ1QyVCe5hwP9x7M9mNRyG7RLabYd5Z4pBPPZ47PgB7W2n3e",
  "key31": "2o3zyzw8UZhqHV5eUuiZKAEJXh8MJJjihuJVPYER3BA9CKM1aXkLkWuGpw2t6cUUxrcrkmMuvTASgDg9w6FyGvUn",
  "key32": "4u7xbuibXAQxL2PvYcvEqZHLmwuFogQt3WnK4Y7QSQeuYQfZLpKu6Nidj5t7UDaEUChBFYiPr8UNU29mtPBceHih",
  "key33": "2LCx6ypccVr8MgB7kC9wEJhmK7z9FtpAn6ueqEkaw2eLvhb57jB5jNjiYJpfy5Hdwr6HMhrfYew71p2L7CZSqoVk",
  "key34": "572DEeMx8NianhVnFVRMMfFzzund1q118R2Lk5iXqsuHFCP4sHGewytZ1muArMJjowuAQSWQVkxX2FTwEdHpxwRY",
  "key35": "5Bau2zw5FDhxjLLZ3DuSwid6R1b7NDaQpkhkdEdEXniiyaW64hGjp23BXwYgjNruGDLPmKJJGSzmkCwNT1qkWFGk"
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
