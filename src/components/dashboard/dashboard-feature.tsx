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
    "5WqaEzLUHoPKFmdLN5KeHUDdrzFDzTBv63JAzBwj3YdcigKkB9MQXx29WqCdoRXYP7VdPSvnFdr2xJBp3jHPXngz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y2agTaNKhMtgMRtV83RSihFfRJ67Pnhzxx5gBrQh3QYNvw3czqxNLGG3AZqCDFQcN25pFmff2n3w7sp33oFjGTE",
  "key1": "4px3k9pKiSUHeCdKoGwEwrpB5XFvPBGmztcyRM29Ae9VMakZTZWNFwGnDMGu3nrAfiCVesLp2qhdN4C5sM4vi3Z3",
  "key2": "47o43GSBnvi1Kwa58Vh5Hbi7fdWeebG314VV5iJgQxsuP5bNXWxewQUwUiGPg4zxs5TxRtkqpnZKmXtZfDqWHeKM",
  "key3": "5xS562X1LidkpToP4zSj4gVJMDp9vmoqhqjBeqDKyDnndtw35JbJPL9aQfAffZ1pPHSc5taESzC6hcWBMY4JY5Ce",
  "key4": "25UZNn3M1yBFncDcCjJYk7W1z2vjaqTMJM1yGFGND6VBYAYywHpiNH7FcrzxAcAQm8HBCbqesZP66RfqLtxwxiBa",
  "key5": "3anC6RyDSAQeFWQRjHd4sVSRmX7Q8VhfpLKW8MCLXEx1ChRxhwx5k8V3a5oeBdpmXr2w3EsYX1jabFDJZ7Vzmxz1",
  "key6": "5hQvur7gzNmMvRxP31G4mqARUdKUK8LxKKQRj9pvabfoUD2cvt23eXR7wCw7kY3L8zwq3vyNjDRppJwj3iSyv9Vz",
  "key7": "3GJZ8yrfxLPerpniLbBSMcnu3sZYoJdUPtQQGLqb4DBUtrwcPb6XKgHM32sq4rxeAPg5XxYBUhse1FiiS1d9Z9oz",
  "key8": "5m9HUXnBDmUzp9qLoPFCharUBD4QnHQzoT4bR1Pn1Agh9a2QbvhFE9mZ9n37ShvdhfNBeGGNWGNCnE2mMR3ifLgW",
  "key9": "2KhVERuJiSKMqaJkFSgw2DaxtgkbmgPPdFpNrzFqzTYpJJ6v9wxXq3KBNR9cx9pwJri1HEyJiCdzY21KbjATnFrN",
  "key10": "2SFhxwD4TEYzWU44WhBhFceHxn7iTp9KxYofGe1XkMN95ALwHJ6Jks2BQrv5XPTtwwwBF7Xn8494GSdhBrRUnwLj",
  "key11": "FDcGeaiw52nzLZ1kCxw4KerkHwgzXGss1EJZvju49L78smBMVDMW7nvpzWD3oum4FdSysFEuifE2ExQ7Q1tmZ1N",
  "key12": "aMgc38Rc1XDWtSA5SrDVvKgKJCGPCZXPj984xC5RKwaQT5UzATibJaRRbFfrfzJBofzRfW5h97zMRhMvpddHYrf",
  "key13": "PDaQHfKWvQ86on2QzisaPyAg6BZYhdWLi7foTjEJk36tvtGLA1ayfNcqSDNn8x6MnyfuoZrEzXjAxfWLCPpAuU1",
  "key14": "5KQu1KKeQMdqcqY4KxWg4usVpphSATSNdgAZ9FZzUdwwLHLDuJuthwFA3EkCJg1dghtJi674jajzFbZZLF8UUX8b",
  "key15": "274R87LfeZKMf8PYZovVrR1mocnFwD4UM5oG736ogCwC4oTe4xiaPA4SANVDSGn6M8xYnXvv7zXuFTbhVewerkwC",
  "key16": "3qvPJgGfuWPHgtCns6xtvTddAZKxNqUaz3KekvBKCSENPGGqzr1hyp8ZZLZjkWcFZ2yzTDF15egB7rMWQ5afc1fc",
  "key17": "4ZdA1wX26VLq3B5fXViMVyazLEx5grsHyGcsx5Pa1A8cmHdcwTLmUmUjmzCABBetCJ3xqDauPjdVWVxQSLNsEB8X",
  "key18": "3jh4JW5auvHtqrsrgh3zBJnLWFoRtiJWb7H9DvqD346Yq7h8f9GtvgR2CScGTSCgVgkfPmSz7T5NZHu9hhBmk3jL",
  "key19": "4HKGEhqaqjtrMEfTWGSoLM9XrTtkFrDMLTCqb9i7ZcbnW1s2hGppQQjnDsU925dVn9264kcDff8ioiAaiNNvTfoT",
  "key20": "5mtQJHa8JCs26hG5j4cjstBG2D4vf1v4cGg2hUYwf6hv7sUy5DtuowUDWiFaQmeumMC1FbDkgEBkwUE1FUpY7FeU",
  "key21": "29jVXtTWGR13y5fu2w9uQ8ESRcrVBke3ewBWFvFjrBte35yM7edHATQhT2SKL2gcbMhTAckWB4KCnqNoWgD1afHM",
  "key22": "2SPfp37BA5Xeg5vgzLd9dvvw1wAgwWtCsgfmnovxjB5enRoWymSK4bcicSTJ8U26T4M7HkuMtcRcbsWFQ1h5Wbca",
  "key23": "49ZSxBeuvPGDWnNxxREnafaMU9RFN6xoDVEQNqg1rLJW5H3bYjvnHo1vGkcZWQQnD5cBVLizRrWGehVwRSURo9pR",
  "key24": "aHcs2NB6gMShi9d8zSbqA9ptEfdDLQFJfDkBjMZb9i3PmWTYPQveczpspocFCR17EoNUPrVmCbjkCjhUDyKG2WB",
  "key25": "2W8GnYLdvD6gZg6eqAzJHo2fDBacQpyiSQf4RKNE56yLhEWmf4FqW16EAppUf6fxUv1qnQuCvTo7zMPeLXfdbsBd",
  "key26": "4rxSas2PaBzhRupLVCjJUpVNQkUKCjcdSpyPXvGeJnkPmjBLZXcCKx7XGD3xi9kLdCxD7BHNZntwHjL4g1gXFkH6",
  "key27": "3HfHAiCg7C5TN6KTk9nyXKBDtP1A5iSz3u8nC5x6s7ii7ztQsCfz3XH8tdKqwikbVvzpL9WvgKXTt78RDYiTVSBj",
  "key28": "3quu9Pq1dbGSAbJWriTYZgNotvvg9WvztFfCkP2Sy5nBy9XnL1XMgPbMjvsFodruu3n1knfSmJKEkL8CGxJ8hebJ",
  "key29": "nhaNihBirV5xX2nUQzEQz4rf84Z9QmYWNUSo4oX8VUHqtm6GTYrEZRZrZGxPueHCpXRKGjW9eeJDWkRhVvMRuCj",
  "key30": "p6CMa7WPtjn5Drv3ZmuhGj1GYQffX3mAzd12ysGeg1KT3JsTPm3N11DDRnvu78ZyjgfHipNsDsAWmA8Xio5nTqp",
  "key31": "2RFZwhkv1bSCPY7VkxVUEd8pzsQKuVVviT5AccgLtZ4efoAW71HVZTdyZY8i6CnzsRqTTQLkfwekcK1CQGfHeFE2",
  "key32": "2Av9FNGpzeqPFxPa32nkdLeL7guo83QXFdCyaco9Spdc8i51rxvFdJfEcr2T2qUgYs7eGCukRZRGUFmvcomUmJYY",
  "key33": "4mG4ucA2T4W5ZVHBzGGD3QeiP864LDzW3qPFu4uZCYNciqQ3b2ARTv8F6Q8muwzBWx1wd7ob1i7Tsf9XqrWCh2dw",
  "key34": "4GTMstJqXY1diVpEcnTthXVfqVd9u3XpRJFomvMynr3SDkAU6JhgsRcN3EBRZc8GEoUkPPhsNhTv8wA27qU1r3Wf",
  "key35": "3dfVZQuapZvJKw8wUNjUCtvxuuhciVbskEJjZLjy8UTyWpGQDs48pfofWSDATg5XzvKoz2WJHppwL8GYY2XRzTG6",
  "key36": "4Jbduz3sQ7VVU9LkgPyYtHsbXdnAdD4jJ7mSBtTqsmvyCkruo9RWk4UKtVzyKfecQ358zvAXyczbNdBgBpLigk6k",
  "key37": "544JBEPcW9zvL3SYTb2BM6sA1Hf9P53kGFjeaMWze4NdqcNGgw41hso7qdfa2MgBjx95UAeEYvFYUo5oE283xK12",
  "key38": "2MwreEkoMK7SXcwRmCeuR9tkep8z4waRzhKgjk4A6PcAmgRtY3w2JrHfu8hUiWvD13tgS96o9wMXrb2nd1ZvwKm9",
  "key39": "Lv1QSyMnrVgGqyAFNGU2K5cNibGB2RZcT2hz8BaudpeZoQkmTPm8iev1RcUqS2Z2xpG6WyabFRihC9WiMpQHP2m",
  "key40": "4MsjVKMXvULhT1Vhijj4r8ks5PzP4yUXQUiZdint8BHsRXQ76tiWwchcFaq3JdbjjTj8KxXw5sj8fPHwzFR4NCSn"
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
