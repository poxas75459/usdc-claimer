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
    "3z5ScysKUAvT3y15XWzW2k1ypnyeaorJrVyF5s1Jar1F9bPmXxMdpUxgUNrc4ckhhjSwRCZWu8qdCwtPRQpnUYPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAuyJNT1pg28fNUEA595vwPbMZ44v6rm1Agn75uhiLKYiVRcb4x667djM1Qhe7g1M9XJSqzFzYVd1ZQfCFGoVmt",
  "key1": "5BQp6J78JBT3j5fUXedQgr5tfPpsbuYPe2zVCis6ApTx3mp5pZVPgJEhFbVhnnCaArtnEre3QYyBtw5aprqPL1RP",
  "key2": "mnLfnSTKz2UJjZ6cokjHSa3qUpBa12WgFrKDXmCNLfrwrjscHTUShqp2xGf6yzGJjCVA5HQJbDX72NZ8moJoeHJ",
  "key3": "4e5fZfCc29sSZydi7SK5LoDpurNULreF9BsLMYdeL45djGUgFfbJ9i5R79VMgre23NiWc1u3894K6LyzoB5XBRpW",
  "key4": "j94SonBKsF1K7jH71hMvjM2xvDNXCgZmz3aZsC7hb1uWENMnfc7UrsxCbUYBMmogs8CJvPm7dhPgv8cKTMW3AUn",
  "key5": "4RpYo27en1vViuoGPGxsEjvzYmyHLeEL17CyjbDvLkery8AQUi8eoK8Frmuqq1k7RtjDW9Fxfc6iekQAvBZLfcoc",
  "key6": "61LGH9LSrBcExfG5bFuq7pQkV6qjgmJhJqvDtBfg28QPXWar6CiU37xP3saExAB5ird5JwET3i1BXqUTGNozwy2z",
  "key7": "3RHF3YUxa4Syn5hQef2Er5JVVu3bf3w4jH2H35YJEWFbzrLisSXTEUm21spF9WLf7GHw2o3U8FjEjUT3Vse5ZpR",
  "key8": "5D5bbSZV2zuB7oPnXCs7f82R1dWZXDmLKy5nX5Jtjw5unN4i8fHZWh7mYF5V8GLScnKdD5xZW7RbVcZfQGXUWWme",
  "key9": "3whzxraqbF6usWVuB1uXJRvmGetcCMvsFS3fMCYYnAp3zBKm9ARvKXw2EaszhFBqt9svLpg8Gf9gKAqbJHL6ckux",
  "key10": "4EqvJMLNV9by1pyjKeZq3UorhyLk7eiqWSywgQ829KugLv3pWD2rCF6xYyF3RrHUUf2BsHq4uvxFb9Qq1Us38osc",
  "key11": "h1cNXbGVTuiKww42MLG7UjATCnjeaptCWM1A7kHmJNSxdgraNZ9jYh8qGBq1RQ2KBPNt9pPW3tqrrvRqMeYZ27q",
  "key12": "2iDpj6ZbC8gDvLShomXgp3HfGJUireB9QEfHgcDACYVgHYMY8RBkGMzZC5C4f1wYm7JDeXsjhgk59wqg9YLK6Vxn",
  "key13": "2vVoLcvz3rRKf9KUpzpxzAvvaLfaPCGmmUTSJ4Hf9cbwvuQn4UifXjZJed6mXySfWJx8YpviYX78eQKZdWTZpeWS",
  "key14": "2f2SuNytjN1htKuJiwpptQceVMhnUaUXwdjE1rWKfwHSwzxgtF2gqvxkXrYqu6aaDNS7z5vYkXGmx7YrwZ8Hq1H4",
  "key15": "4cKzmrHTryMr9wwVyBhbWpDwQ3Q7i4NmsmvxdVW4dt5qY9Pn9U3UjpDEmGsanMk6kNvuqKRkkGUQVDuRmXw14bz",
  "key16": "55h5GZTYPDAPuw2Bw3c9JnX72st6R8GjhRqd8JCWnbU741AQf7rERA6BkNYEhEjzcNhd1efAmeuUeaM9BiHZAhND",
  "key17": "3nt6F3YwesxgcTJ3BaynuRYRsKyGDptJUdHhoZ4VjJwC1Go5nzLzKQsdzrsNYWtUiRRiumAMcHYohdLkNqtBwRyZ",
  "key18": "5BPw9Wb62EyhBpwsbuzHUztKfXq981KQdMnpQy1Zg19Hng64afbwwSGzQyBDguaGcZujMeg3veBGYdDekSHq5aY",
  "key19": "3avserQvHcaLLgS6YtCiEVSsX7KLX4HNTf9RnPznhfW9YKJJP9ywURQ1sCioxXDgBAmcmag2RXwfEM7h98XAdLFs",
  "key20": "64dCskfSSXb9eL9Mm5mRBiPCbqVAegs9zk7rSvUgsN2WVUv2cyJA1zBVtooE3zzSTkqSHFJ2LSRzNFA2bjJvgYhh",
  "key21": "3AEWNXwf1xaLVMYvur993kgH3oSTwCqpV8Jg6Rer4TQdi1DYRKRU6ZV8dGyzn92xbdVrQGNRTbzfi73hQqJqL71i",
  "key22": "4m1q1KdqAr1RMG3mKLZRHanRgy2DjR6Qp3Nt7qgV5JESpHgAVNNk1kSS3okBPPFySh2JuPsgXoTDxkSW7ybr6jNp",
  "key23": "33KtrJ3DKh7CSPtP6tZBQiSFBPy3QKUwvVPVAisXsLNPHMFBFDRX9KHPRJEv2VxMXWZ3p8nNAZQW5wXJLLBVAWVR",
  "key24": "4ZG7Zxgnhyb3AS9gK8DoRb1YaSHYwZdDg7zBzW7T15Rik7eCxLBi5EnewsNWwAB1iSMsrg38J2qxemaEeQe96SAg",
  "key25": "gUNcJoXsHyc2CT2pd26qojt4H28RKTLtrDn4RtWAun1t1MeRBEQydbe2pwJVQCWMBqq1RmhX2FQZCLPs6ovBLm8",
  "key26": "2W2v8kTYcq52DehaDp8gXJ55hf2xctCuccNcgzgD9Tcx7vuEzgSY2ptKc8yr5s9VtRspuhNk4eykVHEC4LaaaEx",
  "key27": "5VZiULCyuxJFFBMbQMCLj9YacUyodxVtHiXaxXF6BchXeAMCapkAoUP4v4YqdUerpK7cgwdF4QzE7MiEkiVTgEtM",
  "key28": "1Sp9xCR33PyGvdXN9ewWemJE2SmTq7vJo5nhtjZrUz3cf7E9bNshzi8AAcE64T83GqKjhA6wwg3Ei5CHizdsWUc",
  "key29": "3uEZtgDVU99dbCg1ARx8DumLjAj9uvua6Jb1WRkL3Cz6VE9V4tnFeZBLSfnyNoPk4mi9j84C6FXW9uQHw2zLffXX",
  "key30": "2XAkA4W5QL2nUf3DxcLnJCfneGaQKwEB35eauewD8FzLtkEaiXFvKU3Mnu5AHex17aoRSySGruEWzuDPZWwwZePA",
  "key31": "3WNffEmumP7WsUNqMb4rVxhdj8ZMgMP6qn1twUFZ5MDRkFvfpE31n2DP6AoLRnR8hsmenEwEiDshX9qaVdGuVGFX",
  "key32": "2C8kedLy2UZRE3qXxrjijnJiHNSRqUuD6Yo5FzBXWx3xgxcNeV9XyLF7ZNv5ioad4g9kM9oX6ufdWuKXwR3yRcx2",
  "key33": "4wfsTHphqwooQTDvWeXxVSyqnneiSgCQmmPhYvoVpdTpu6FJN5Aa7HMn7vGpKmT1A7QctjVdY7tG8qNsrgsqAA8C",
  "key34": "4LBcy8t2thSfhTj4D6EduipBuGgToz1eWyjgP5pWW9uZgg54SX1MfBGqYpQ1WQFVrFX32tcAtfnRg7G3DAQC2axw",
  "key35": "3EvCWFrMe8Jkj2UedZJEcaKRGEzo1H8RbJ6DiiV7vmWcGnwfsb41ZqxEZvLrmrof6xU7vPzrwpwsT9sy7mJQ8kiT",
  "key36": "37byrvReFfx1Dds9KcSvQrgT4Amwyzaf2ihBBu2F8o2fiiTQG4kh8r6zto554Wpdon97WEu7XKvYCRrjxdLaxUCT",
  "key37": "dgVR35L2s98BdXBAzBSvUNVYhJvbJs11paCmmgiBSVKjPxRpwVBRg63w6wNYfpHAhu6FB8uRGwbBvT2xazW7i65",
  "key38": "5u8Nb4onyhJvh9As9sznZyjMN51sExqDNDUKNVWyTK4J8QXjeU4wKq5bUVwbnbWEePVdGThnydMGCdCmUPR3hDRD",
  "key39": "2g7nthsEqNNuUMQz8JcUd657Aj9QMUHyC1VR5eM27eA3HRfd4KeQd8u8Feo3TAAtqxEQ7GQX1o3MBzr6uVYGEykJ",
  "key40": "5R2EJBEiqxugfQsePnrPEe4AEnq7Sz2vmYuYZLvWw9iiwzqKkjtco1ugD51ejrVL52qTJfWcqu4SUfvef97AV5Rj",
  "key41": "4s4TrwwXxABW18EzFfHAzZvNiCeiTPh4hQjY6R11nP4BqrEtSthP2iHpwFCK8AzG7Qd6BRwZC8GuLENRJTu2dS14",
  "key42": "2Vinj12rEafLRV6Vomp9SwfJmcMamRiGonua9oFvcEQ8egWHLMVTFq15zhqhri8P7S24HB1grgNLimsud8UBCS95"
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
