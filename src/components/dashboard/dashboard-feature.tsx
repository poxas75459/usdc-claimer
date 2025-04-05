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
    "kY5tCVjvpegvDkj5763774JJ66wvENRxWzYTXCB9oT8ZfY1PhqYwbJ4SHppeQFLtRaf2yBbhsqi5bobD75cCvCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxJ7R2rsQjhP24DC6ydg27XPKTniLCy39j3oPp3NLpAx5Tsy5NSSttoQGiyfxutFAky4UvDJeceE9zSwD52DiWo",
  "key1": "4258JbudXvKYXgXQh9fRaaVBw5GJi6mzdZH6cHovtzP8NQSE81UdSdfUjwQd8F6YnTZzp1ay59ho3VYmTdRnoY1G",
  "key2": "nnyVVLYDuSHwdG1FYD8JjKXK7Vm7fyLYcXrr5zELDdq7C33Tf1hjg1GEP5T8s4F76qKF28pN7PKRmMcA3hYqWs1",
  "key3": "2Ea1YDA92pPz545AVydvPvrA8HWRCCZWA53oVDjEqtY3Mr7s6kxWVCgC1f6jtxWrfjXduqa4cSJC17sepcLvZJQ7",
  "key4": "X1Zqb68PfDmo1gZ5zRs3sqbzSURutyV57ZqmvufA8H7FcsPMLePPQnYxk4rw1JYxmRAHXUEraLA9JBvhXXDfc5Z",
  "key5": "5sGJaV3T1uCUVKHk92vnAm6beWv26rBaS1MZfV5KATwpkmfzkHTA444sYnzUg4K79ktZEXVuRjf8CUirjhgLSVwN",
  "key6": "3xUU5eVFNL4KE65SdTk3mEgFUC1K7929WQ8Eq3oQiqSgdigQMUoN3ip5QfbCU8Xgph3C7oDVNmMtpvU2tFaxabGh",
  "key7": "M6EPPqtFHkvG9kb8vjgRa4ddsC6MYa8bXQz46pGhtHKPkACL8LUKtby127YbsBnK3gSF5PK1bwJeRnFew3RDuBY",
  "key8": "4xPV8rjVDSEheZPoNKptwYt9XoWzCr8FmmtGLonHry3NTyU1G2Qh4uaM8cCBy7dw7WLMggACWZ8qQ7H64NRtRJt4",
  "key9": "3qQYLPGNTNyfKfs7jCsoE55SHEJtKvJbcA3a6PdC1ykLhdU53tDjbFcnfRhrkek79vbXhtJfWPdR89jJbBitWyit",
  "key10": "33fsu9d7P4wM1oTNmvTBo6GFkZVwHhdQnXbARxNpL2hQroef7cpv5yhJY9KzzP8DSxekrfurjS7wfpV5uP1NLUTL",
  "key11": "3tYE4As9D2NBy9yVH95wtnCBXK97ppmB1BoyoKA8jQi65wpNADgupiuQTfMKMCVbti481vhrtscN9uaVzRQt41Bf",
  "key12": "4GtX3XnASKy12LCqCfrgutxBzHYbhpGwAu39aiKAti7EcwtzGXfusvMaDpeL3sNLw8V6mR8fVa8fNMqRBwmgdrQV",
  "key13": "2D9EnCr8yRCnbJnA7cg7wkpvpUMYfVWgosTjRrmA9dXFF6AKX3P8z84TNhaG8bFF2Q4w1yMBnD5o9QfAq5NVQDxH",
  "key14": "2h6wNoVB6pgWfAzgnmPEvuzHRZofGjzH4yaHKHjmEjAcFLTSkCjmw84AprVa7GJEsJza2QqDEBMcc7a2qEckY7nc",
  "key15": "3jobFUBpxHHU53TDUGokogLZp2vFTvoASEovedYRkdHUPdzZcqcYoUHYcMXPnMPQQzvEZ6vwAvnZjTG1Vx16it5J",
  "key16": "3cRy2AQJRFimABHV1MsBmAWdq1FenvDLmBH5JfxctdHhfRivsV29HYTyu2xgCwe97DqHM7JdtHE81jYYr34TwKbb",
  "key17": "rH8c6Cr2xmR9AHZwEvhxtaxAeLExGebcm722aURqhsLJbaw8ZnX1sGxai8d4zSrnFXeFWKYuiecHeMMZVKQ9hjU",
  "key18": "3pDxnKc8U3PMSWSVQbaYDxfUHGMCiXtrWkz1vTqRZujxy4SNQYczpC3GRc79dCRYL5MtyvMnHUSSbxokyvVPgcjV",
  "key19": "5smHXLBrPLZrq8Q2svpRHN74LvpoTUZEHS7oxfbC4ju7eDbeTanbKWf56Kcoj82nPEeQzgK5SDg3rpjna1xyGVMF",
  "key20": "en5tiAjoYU4zd5X9z6CCDBwxBUrPYUmPqZeGN2zzzuaKiQCQkeGSjQiKopy8NPuPi9UNhNYcWV7ZMjTN3EMPK9N",
  "key21": "2zgykBXumJb4AViMP7KUkkDjpZ1iWUpidDdMz66KZhDeeWFeLk2XiFPD9aUq6jmhpeZpUJRHp6GYir2UtryuEJwK",
  "key22": "3Tfvi9wsoGa2LnkBS1njCN2ygmcWsdy361xpEkZpxyw1BBcV73eeEdXujxYjXzoBYBREA51cWt49DkxzCcKh7m1E",
  "key23": "LyYYVMAvTe4LQWhQnTm5AivZ72ujQ6pEhw6jRuawnkkzzF4mMCNx6j3cuRPhdFbhZRUNMv5QgPADu6rhHA5Wcwm",
  "key24": "4XKkouCKw1UDkQzWUpxYzYUDGfpbX4W6K4SK8kutTnXEwh2qiU9vkVhfwMfrszVZq7tXHgprYb7G3zDDatm19b3a",
  "key25": "thqXZGsixSFSHfevDFKqRjsRyk9dqjydVMLVMHTGLAttgJsFRPjPo6W1F7yq8d52Cnf8WfubnN3SGwGkF78HJJk",
  "key26": "4BAY2bDUnZGroUmztE42nntFXVMUBUDEbEqFHt1MnuWKq9Lvm36JNrahVDSDz5h8XE8gz3Vbw4PpSV3qJvRSJ1hm",
  "key27": "54EFDS9FMG3wMJGDGxMSsyNXBZQhUw4Hf8Vr6fF2aLNiZW6HCNSKVNiMSWb8xzSUdQ18rnoe5JWrfebvxMEG9WCF",
  "key28": "3qGfGMqjCuSSfWBXE7vhey4SypMaqfMuhzLhc6XQvRY5EZjbUn9nxjdJm2P1KEJdcqTnyidZw8nZfePrbEFRrYGu",
  "key29": "3rnzkZqLb4ZwR16HzZgswe3eRvVuvitQVUwWkyoqsCRHBBRudmUZi2us29TodNpqM2Hup9YQk79Fn6nqi2CkoHVn",
  "key30": "4bZSias6NGCsHK7dKSmNzB9ZknnbqREQqpZMKoT6BXYFwkgvBJeVekMJbE1St5XUFs5r6khpHC3d7hoxLECLsGNS",
  "key31": "3nrhX8vyHnHVzQdJrrgKLYdwgr3MnXEWwDMvqDjabVxtj4uTddHRPEdoeA9vzyjjU2bATXAhb4inaX67uv1CsaQ4",
  "key32": "5MqfToJwExUKm41r4sDAZwDXA5cCUbfvxGdLMyp87BcixYYf8xuGHiPgaPkGu9YYAeKiWSw3AMm7vbWJmcWEdWEE",
  "key33": "5bHkdCVw7o9jRAWaYLT9miPuF8mDP8dywoYtVygNnXSSDyr6vayHxc52yWZhhcPXMdCqq1TcuQQP4qwvyzjhKUVR",
  "key34": "3wGukLsyxfrg9rkK2Ksdn82YdqEcDFn47aUhTt1jwJeEyCU8voBbtBXmmZDUFXusShVz1zV8ZqNwfxCUJwP3tsd2",
  "key35": "2XyzbMBZpbm2wyavvWJQnaZnTwN3T6opubaKqteCkUdTUyxcVA65wU5UZjTfsDwER4Xe63vmZTiSC62WVkFidbhV",
  "key36": "3Y2NgdMQBWxek7E8fcFdsTbdDp7ko43MCvHd2fayZQgwWqZN8jnV3emb6t3HY3QDYJriCUduQjxzzxgknWAqXsXB"
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
