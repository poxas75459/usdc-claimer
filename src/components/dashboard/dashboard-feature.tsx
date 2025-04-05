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
    "4Jf8TuMRmAsUcE4nV7BdKq4MFuk4Srvs65o77iokLGDZibWHRwZmfAUYwPjmCPCY5FoCMzWrQExDRaCGW991JwSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwLBjhtUmKXUvTGAezdYFEVviW1ALMiax7XXVYrbf2XY6zA2KHbHKcpCjabJHRVneCp2ethzKkwUFQzKgwxo7Ff",
  "key1": "4piWAp8YHFUF3Zt88wyTvFhfzDRQX9b2RZ4PhHsHPYDCnSeu5Dd37aPV6ArYvXFUeVJj4QddYNGicpXxJfoYK4ai",
  "key2": "2YzZ5ZS8JKdGVvsxauYTLcVLJs3eJU6JVxqnWDsrMGNbuUJjsHbS2Z5DtpzG5sbPQbmbdbnAJ9SVyQLomvqjeP3v",
  "key3": "5a6s4neRk5oAn64afZLXScQYTVRL4KMrUoCtJA3tg1eiszQvLdy4mhD6PmMcff2sDcKQ49XAtSz8vg5NtjQcvP2C",
  "key4": "4DQUY4QLjikf56juTPtqce2fBDmjEdQN7jdNrYk2z3rQjMMh4rbQGpqA9ySSMSMNxZ49MFL5wkjcMn5RorD7Hm8B",
  "key5": "5TwPWrEqDkVuDNX6usTcvo97GKKDLoWeNq4tPREDnAFRxu5EPr7GyWhRDLQRz2bxpRshmwk8yHP2jj9R16eab3BF",
  "key6": "3s8XUeViR4FR3xX69DH6jXEy6826ktpbz3nLNFaNDqrfdx8p8HHc3Dep5oXemhkHepEAW66Td1SUHiXpD4RBXeDp",
  "key7": "2xYQkCZYhyJ6Lksys7zfwaq5HiZV4YPTpTAdXeQ1Tbs2tB8dSDCAmMJ4XGxWwMWhZBRKZrg5dbY9NvsECfpv7qyD",
  "key8": "5r7UHWZ18PD3vcfw38hEpLJXKTPC3DiG2B1S52nkGfUBPpJKKQU3mnC5dVG9hXRvnfwCWGbRXzmYeGxbUJ1qn5MP",
  "key9": "5mRhi4QvvqDU7iz4qXzsRscQjxzko4dUJ3ccxtCKJRE1LpjCbzSSbRi29XdhMJVbKVMUKy1UjxyfKN86UcCGeSS3",
  "key10": "3hHkYC8jTvcRoLsydbN1FUBLUjDgfeaa2HZJtt3jtjPhLtHVTReji2CDwjsYpyZZEFTTu5D667B3vX9dy8dQjcwy",
  "key11": "2aT9VUDYEHKBQMYw6nrR8VcunjHyE7spkYX6XcYqVNcpxFMfmjHcV5S6isaiY2t6UW1ZNJqbL9MvSxzKak9CZGeB",
  "key12": "27i76Xk2gj83qFXNDpvp82tA5HZZ6oaKCbVQkjUiuZrssiY46uMeX15Ac4t66LRgPK4FXUaKuDBNjL9FdWvLmraY",
  "key13": "cGEH1KAavMeXuxWwUzxwo1RQiBEEURFvrZUESARd9FKigYoRcsp43vVP8Dz3uDJTN2sJuxZLWp2mAroweKhUPXU",
  "key14": "3LnBqohcXXnreS9g9ynBjvEPmjWvo7VjNVSgXHDw2KnaJXMhRaMsxkF7jxFgJseBmhtX2ykVnFfSM83EULwLiwko",
  "key15": "4s5dSHLyyV6cD1F4Kbu7hwHnU7HmKWADKCY7Jaer81TMbUfjRQX2L1tjXxgQPfECwKziFuJhsYRK2aMLeSP8GYUn",
  "key16": "4zfLVMsj4gGxUr65cwAWm9zyuAPqzABwhqkgNSwiqnEuADGLeEUEX9Z7vapXQeQ8jMAc3egEkososkmhiScdedhP",
  "key17": "3pp1G5pfutoSksLEBArgh1DhdDxaU6xKtGoK1XjbZcyYdsNZcvbJ6whcF6dJ1X78XbmKe1wQej1r5xPnNUH8eSGh",
  "key18": "5KsoeR86q9BZ58mv5xQmmXERkYp8ryi3M7rCNKq8hu2fXANRuehVuPN6NeNrbG1wd9MWRQJKaPEW13sZjRJPSZnn",
  "key19": "2iGEcFwE7h7oMUTYobbtmtNPQmmZeTYhvGkJX4pY48Qbt11vpakJswSmjj948K3uQR9eqGTcBnRoZ9E9nS7nSBbS",
  "key20": "5KcqC3AWxRfqxGM2eGNPz8hEG2TPAoXSsX24dVy3D4QwhbB64Z2NvaMi6s8ykKe1xVhiu5z2q6xKuYLJTtBCMUeN",
  "key21": "2foTbLv3NrrnsSm7d3FVsC1HVqD3MbvA8EqBfui6qVg3wk8ZjxGHcbT93LDzSdeHXysYtpsz9A31PnfpZZR1iYfc",
  "key22": "5UoRvc3cSHBxLBwLKHbjxM773ko4hW31LfBfuFNEQvgUdEx5te6LoSBBqp8t2X6Ttk7KksgpvvWH2TgwuAsmwSZ3",
  "key23": "2NqorrHubhY46F6kPpHbWdniBEP9ejg2CDcnr9znEm56TaQVhnx1VrpSMjz9oBmZTYdnPyADJ1BAhA2xYYeZGeCC",
  "key24": "3mvzVmZHGiRtMkhhuVthEbaHZ72F45xZ2tx3AJsCjQbAkjwaSBfGhjPRVzxcHMGazzGTzpjsFBZvMPp86QQoMiic",
  "key25": "2ZZ8V56jH3PX57J2fyEn5x677ha3Av4tuGF2kE7YAZKqxKEasYeGtRca3dJbVvUw9UNiNhRGpJspxTYWw4c2hHLR",
  "key26": "3nT3jFvKTVxMkQCzCBfWZZxeo3dKtWG9ngwYhmj6dGwmBX4UhFnYLFNHUNoeHJmB6Nes1YL84xAesyPhRXezXrjW",
  "key27": "2f8m6gPLsxWuj7YP5xQbEcmJMEEGbKnaTnkz93cXB4bzmh79oCJXeFp5yDisLa2k5rjfzFX2KVg2DdDxfk1mBrhi",
  "key28": "3pnDWqQqpnUdM3AWJZ9DTtvK8JZMWfCPzZqt8YHS9YKnoHPAvftC3gL2Ngw5VpkGJoL3jg5NTWk25iayNPmdCAni",
  "key29": "4JgVW72CeYdYLaH3nGtGstgPj3oKGuHNe4KEq4vy9V9KHgVT7rK3M5ncZq8WQQiYj23KAZMigZWpDnJH3JBSQjJu",
  "key30": "3TkkiWQgA8sRETeRWsAqZD4q9XxQBGCdKHSbJ2W8rTNGn91MG7M9AAw6Sm3GHwATceQQzGKHfMFPeC81aQDkw6Uj",
  "key31": "2EyfTbjaqbAC9228ncYg48YZQj6BukwKu7bSfnj1ivgpUDCSKnssTgRxDECLzAcU9nRTxXZStoHrToLJzMU2xZPg",
  "key32": "3S1UpdfsDnjH3F79VTbRvSMmxqU9hqV9G2hvCTKBCyvs9svuHGQLxPPgpvX7C9sLjRW8XY1XJihLpXiBbUMupiwz",
  "key33": "52QfEysSyciLuoF6xCGGNde34GyQoLRny5QCfpQPZKg6S6XdLwQqD3eHWHXXzKkpYgsiBVwkvt4MpMuSpkACDePm",
  "key34": "4BUgmTDG3bxpu69SMLyD8rMW5Zc1Pa3kJiokGT2W74MhGPecJPcbfRnJrzPDtC4m4bR2E2Gm1CPkpSTZektoxuNq",
  "key35": "3CEkDyrcFAwLPFhxfjuMsp61PDrUPY1oeaRRv1cjKc5Eh9Ue8GW6jdcat9jcSitLaZ2rJhnFhcfynnzY6Zv91RoR",
  "key36": "2eS57ctqVdWhyJUJZD47HFEqPiYCtY6rJ47jHu4e7ZwnN8YuEzsmxP7bCwDPTw6YL9jzbpYCAbBFYKYsfx6xBUtv",
  "key37": "5VyvqAc2V3v3cy4pmWb4GqtDhVvZ1reVaEWsgrendAZXaKi99R6vYpofWns19qtTw27dkmcDAW8MwdmStmb4BHa5",
  "key38": "4ZWN4uQhxnJmYrJ7fpZAtdkF9XU9w72u7Yy66D4oMLjgrEnr7SUFkpVcAoZYKbyFSaiJ2Rcn2vh98muznEcHdQup"
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
