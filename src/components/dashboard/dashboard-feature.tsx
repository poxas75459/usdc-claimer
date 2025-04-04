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
    "2ZSrgD4JhY1hAxu8KPfYSyEZsM8vv9JF5gnwa5cZa4ZJ8wQU5XqfdpV2rJy1inkjAiJ2H74fMFmHbjycVamK7zjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvwGVFfJqWcGCqNSTQfmFyrjDsLPq6i4FkhpEgEPVBDCDSMiRL3WDdRKTYbqmyU6xuMwMuDsVN4nfk7Qsycpzav",
  "key1": "46vhEFu8sNm8hPgiDmSCF5DaApjVsrmEs8Q2FmtqofWLqKLAt76AAfGDmocboN9YWin49FcpuTon7KFy8f8dmdaY",
  "key2": "3PSc3EunHtgcWr6SYn8AjNBSAKyszWxVQ6ymmKpXRRojgT9nMro4YHpKM6Lx7MVk25dqEbDVNVcFQ6bVkEhGwXUS",
  "key3": "5mXMo67hQh3mx6DaovfC98DMJvNqN6XVMQyAv6bvaVDLMNLCqUdT8ZZWvJZgVHrPqc2wERFvKoDRSSvQRjEUCS2Z",
  "key4": "359UocvAyoNoCusEYTWXCHTCQmiVfM1k7hQBPvQGBczPnoyaqY9GePqFQJth7DiJDZu1JXnwjq7vHLRZhtRHZ47h",
  "key5": "2hfVpXeJXVW55581AT5LCefw3hCmTSGNb95bFGbs67PnCKzvdi8A3dmHthWQUqQveCSuBMi5UbtPLSb4PS4tUX2Y",
  "key6": "57JEMHFu4McNDEmZC3WvRyTnxHh3b4ENied8gX9W7Cfk6ZggQJD5FW6iPABxTFvuZqJ4BYDjYQj6SM8mbn4QMV4b",
  "key7": "3NfLdGxNnBqqp9fRwBxN9hhViwy385Pouk5yivhw7Eobbe18R67DoxF5qZFbKNXPJSTuZbzQCue1go3v2imTGXNt",
  "key8": "56VzNs9Vi76HQ37ZVkNWUjkoUbXpc7WCRKN6w4N2HEdp9pgG318tmPJbsfTHmZiGTuGBK3iT9nY8oK5ydbiFAspf",
  "key9": "2c3RJvgK217wAALCsX6Pak9YCEsu5jqfLTSyGU4dSwnqPnCMxgHf2hYeo2ywU2N2PdbmKs25ivYByUUKKBacCxWd",
  "key10": "4BJ8KLe8D1ukx1sdNLkkqNoWojPVrHJMxQTHpeDCvLki2LkW3xu5tABjihKPX8yqxtwB4hCnhitzF5d9UfCwTj9D",
  "key11": "iLbLnuSDBYccg29QmUtiSntWDa7ugXyNhBSza5gta2oxwCMELiq5qRGusgRWhMnKjSNTBdH1XitntQPnGdyQ1i7",
  "key12": "3YG37LU3Hy3ckS81eL6yBZ6AexmvjMBctWuPLaQGGT6D4uDBC4mLwtJg7sd89gUb654PW6eG9z1icazA2Gfg8zHF",
  "key13": "3h9hqCr4vJnDh3Hu6WVjg1im2158h9d6qWghFvgXA4ZVyeoZwc5aS8nTLWB9t6kBQdtKGBtsPWe6rpXT5qeHeHHs",
  "key14": "vFH5bKobvneyBqKn8AeBQWg9DCViUdZcfc414Kh9Fmx7yqAp9C4wPuQGTYbp5a9oYFzazTCTN85P7QP8MEt9qFt",
  "key15": "G8K1P5pWKo2x4c7bPwJxW1d3Y5VvmyTFDASr9CUsN71GiwadQE2DDMxj7GJbxwZuBVFNYX4iifyvEWGJpQEzFik",
  "key16": "SR4dc6oB7YR6vJgWGBJTTLri1S9kKRwB4beWCfww8VD7UhSgsPUZ1kANfsoMN1fFwFondhTxNq6JdxN6atNCAKi",
  "key17": "u95KKf5125gYHGkenkDL4GTeQAhXEmA7FpaphGT1bnz1NU8gz5Kr5fhfqNXgcMVSexqGQfzv3LwvdD7LvoyGos1",
  "key18": "2HJ6QxoLAMPwmn2EakqiVFAsbyFD7uwLgWT71nPBAGPxujBEDhZXNySiiJBGeiH7EvD1NnUSaone1EShpsh2BMWw",
  "key19": "2B1YhAxNT9A184A8EWMCoEmcAbC4ruqjkFmNmf9TenRk7vPHzuyjfv7TZC1twHEj8vQmLZLo3j59RNYbacFz7PZM",
  "key20": "WUJmabkbifZ1U4QV8fZMCAkqjmA3zCUV1ZDWYgsXKBtaLbaJdq4Zi8tim7fNFNboMievoWxmH9YAkAuvPb4Xa3e",
  "key21": "NyJ3LKiuA46CEavDYp1QtwgWAwCBdA1uYJ1CJYJazm44M2aVdoWsM1a4mvYbnnQHAdpo7oc4FJeSpBmxAWzDZnX",
  "key22": "42o9ki83R9foAyKtff7vcWHjartieZaLts1ppZNvnKFbxMXLWmYt1TSJFvgk4BmKLB6s7mpdBv1APw71J3LiYUaf",
  "key23": "2mZ1WZgYJmBTWqn4MQDtT1e5YfavEFE36wfaBrnUqPeb81Xh6C4SZo3rqEsYiXVAyo8MVDSAjvWgMu711xKWh9aE",
  "key24": "2CBRRCpzgSkaJQNdHLjMwG6aT54v43Lxuvefe2YMKpCE24iHQ7apzahdFb6MjzEtMep5pVTve27C9uzqj6wZKAzi",
  "key25": "2xNXHgakuWDmKve9yVpfLWebvdbSCe2NekN4RX9SXbcJNxm9AJKnkoW1o47xUrTdfSBytELV2w7rmJM4oHxDg8TK",
  "key26": "545RHmvGTEaY1tSeHQhcntKywRJPjXWHnTzfS2BnXFgS9LLAAoVDeg9uoWwwu7XeV5MFfB4gdFCzwLeMTFxeShkP",
  "key27": "4312AcmVmgZuiENo9YXKWrs3W3j5Th7Z6FNbLWjzAkY7Ah4fpQJ4T8v933cRyL23S27rC3aeX2opGCmUDDAAQVD8",
  "key28": "3Ud1zf6hUZZJyjxumHZj5ZNzD22Lq55UBpeQRsg6oGdX4o9hr7wDLmK1HMYkJufKXprwhRBgUPgvQLJfSDEyUySZ",
  "key29": "F7dvehTovPrWyutRSetWW9Gp4NwDKEWrxVLTKjRbhtEeFRUbtBQQqdQkoQ9xVrWTRBipaUHFzajMgYERRLD6dUH",
  "key30": "51pF347X4ut9rNoVzbqVxB1CR4eLfyD8wCq8Axre2B9k1KGgYxwKd5h5uv7kbsnduQvkn1BDyCgSpmPzd7ouMuQ9",
  "key31": "3uKGXDDM4gin49oFBUUzzQiFwDc7gUpFjpNZbP3eCRbmN5R6wyjGFf12TpzmTVfHQpwQzd5Fo9q69eD1BUG8itsk",
  "key32": "3o8Ntsgg4NxdDHoadBfMJ4feb1XwUvrLZ7eZZzYrWXWKgf5mDdrajdWXLxQdu6mxQrmjoEpNQ5FuBk943DASpGkX",
  "key33": "4Rs9DMf8omdZMHhNkuexvREz6Pz7PpaexDWWZaSVfToL1x8mJd6oAMHVtGd9urNoBimzUCNnneBzGbersog4rB8i",
  "key34": "5m6FckeCPRFWBdURTZPG8NxY42hmqip7bcSzejLqrVBdmke7wsdVxzyEER43CVuqrRVV8UD9Zu3DhgegsMVpLgde",
  "key35": "2QJWhe4tgU8TvRqFY16y8UDdnhWMs1HndRo5YAwA6v22XPyky7zjtowtveEuKjZyU3dbzewCMfQCbVFgRoVTLKcG",
  "key36": "br2k5m9w5JSsHP9d1q98ASMeno95YerUNFkgN87SJePYrpN8n7RYs7DT7Ayu98LonY3ZScg2r1xNUMsCZHyhZDF",
  "key37": "CUL6PZJR3xueEk1EfFRT6EtL5XhDpBU1nNeWpmMABFpCtKd1X14UrNBwb47QpDxa8KTK5P5Yu9THtF6pBB2SGaU",
  "key38": "3vF9fawARbNh5DmUSnR6tdF64jMGttKfCrQxUENfc51ApFBr3YD2AHwhTPMb6GtEew8UaLeZTAbisbk9kogK1rc5",
  "key39": "5AS4SJ6egmKvCCjvDtYkbDrsAstjSvvDPUJmHM1qrtWT1qMeXg1rbUPNjauuaC6QjyFLRVMovU35iLjSncWnuLPd",
  "key40": "3LMbjzmsLSDKtWg7f8ke1kMYbLtF9YVBm83aa4zUE6xZJ7Rj5i2VNCxvvP7W5aRLg7cebBiFg1wJ9BKnNde5zgD7",
  "key41": "5J4D3iHxXWgwjjEmTFUjKSEiEJjqZwRMrEred6Rm8qaivyBRQm6jy6JQ1BiimdJ4iB5bynqx1K47G6viBK5rJtxz",
  "key42": "5WVtcoBLYBnZrXpBvu6jt714irjxruh2CKK5o2ke9miGnNt4ZDFCxzWk9vm5RuePv6hh3ChL9PxxpVcoBZcQeX3c",
  "key43": "2b1i5SZZws6XhK6LfUJr7tMiJtPFZg8KvsbPXRuVeGeo3PKzwjbHKMR6fuSvj5ZidqYeRXrAMQSj1JE1gDy1rTsF",
  "key44": "2QDYYHchcY7jm2jgLYrzN8d8t3DJuVYkpPPUcA8thySeBEjf52ZvAS98qrJZEsXFJirCen8hafnsKEhsVN6SqKxo",
  "key45": "iBaxwfBJQBrBdRARHozq6Utqhu5piaBfrdecZMoHARwpBDRBv7TJVdJb42ZWokEdF6vmDJTYEUPbYXmhsG8Brk2",
  "key46": "2Zikbc5egGeik7gXUWgbMDUhaJRyZUAcPMnutvN3VcB4LsD6bz5ttGNCWzgm59aYuRJauwfC1LaM85JUDkYebwRB",
  "key47": "3CKsWAmW6243MkuFnr7PnBkVj8T34nz7miHZLGRLaBkFHHbjj5i2z3ZvBqRdjjmXqEkc3txHyKZ64BmjS5oSiWm3",
  "key48": "5Fmob8KWxUJwqhonTFy8A8UY7H1Ux78LKZCf5wxGW7dEYXFhdVkHKKZr3CzocrT4UCxUK5M8WzxXjErW5x2b4uzd"
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
