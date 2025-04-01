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
    "5eeLntPWaxqVCGQGWKTabxGBgXxHokgjKqfCx9DzRidpFFFrbeg7qJ6XdJCsKCgaefzaX4xbzC9YJMJ6mQ5NShm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zELxvRjxKhutL8tVLJWAzsZ7obXszzFwtBTHkPiqPrcGg4NZsKv8c5f6wogZ6RFfo1GHtKBdEHTJngieumozBcm",
  "key1": "2sd39d9CKnM5osg9VvkkZoKW1D9t3mdFGbnUCQKC562qXtEX76qSbAzxXRGoeb3uYQErgVC6DiJDwDkKtyYjNfhz",
  "key2": "JGXfNjfrapVxPhYZ28cLqmNbJ748z2aopzMxTz14dVRUSYNH3gy8uszCD57pu53QVyDqFrgoByAzWQDKA8EXZPW",
  "key3": "55rvAbdyX5kZsFHfa4zUgePbd3WXeaPVgKbwUoVKU14WGjeRygPYvaJ3i7RicBUABXJ6ZAyzWQV9Fybapx4hgUq",
  "key4": "5Ftvh6oBjJGvsdraTNzFLEkax154T9sNtJBoCMxnarjm1apCUMEumfzMFaxP98pktFHRwmGwoZeWBPbMUJY2yWh1",
  "key5": "54KomjXZDgMvzXLewBE5yTLGTPtEmrLvzL5bBFkDoFPUHxvTFPHL12Yquu1D2Lvk2sVt1eMjbY98nebSvTUHmQaB",
  "key6": "4AzevMr6uzBr4hkhT8jT1GycGYvceZD1SdNUiVSYKKKNWbpKpv4qd73RXEfKHvCAyBVN9PcBwQFP6H8upHn2ZGGF",
  "key7": "5NBmVosxvnAtDXxwZdAAyRLM6eUS5cMbJBbQhNdjaByZpyZPY2g6YxFs437fHXmzUQCZ3WHbtDz3WcJHCtzfyHRe",
  "key8": "58ir27etBLFkKbLZrJC5Z5EDwv9CLs8qPSuDd6PB9W29fypxMzXG8orYV83ycUEbEkegCoFs38nLhEKaUQURLEDH",
  "key9": "PjoGxprpLFEzGCUsUKHcsABe19r4JGPC3Ekw75y1LmjFY4TqisY93upxZmnTgvsTza9hNYX1hwLeheJRTk9h9DF",
  "key10": "33uPTPsAnJC9y4evHBDTQHqSXLqm36d4a3bKZGwn1SJBK2bsffgsvwUFMv8JwzGWoYkZN8QSBGz5vfF7mE4iV8Qq",
  "key11": "4oqXZy5fsSZXKAmAhzWTg9Tg8zEhduohD7ZBHYb5z4wyUHWJvtiKjBwDekkCJxJLGbkJoKktHuVd9NMHuCCRcC93",
  "key12": "47RSRECuPBb5t1mD984pXpahDr1TAcFCfHeNt3dqRS2U61WjnmBw9w43JKbiU9XEy1d9GQjmFmGgfmpPXEA9McZz",
  "key13": "PKJ8RAKVvn9RTSqeVJ5LW5x9fmXCNHw8NpRf2cb7c4NgxVVk6csyPwkYMNuxi1c8UArYzkEsDe6S39mGNam48ed",
  "key14": "FNszjrEqfWQd7FYGgZaJ5mGJVKKjjjm423DLRVfSyPGKERpvTyMZnDCTFLAVAyGQzqG3csVLw8V9y8M2bsWfQZM",
  "key15": "ik2QRNreB3BqUaH9bs4WTi95CPp7WLBWSruuGkkhDfv4c2TLSQRQxa7b8sESfBaq4aZB7Yo6JZN5j3kBntogDBY",
  "key16": "5Z7d29teccm7KpJFb9MeaG1ijVp1sn1s5mXvrCqxedCWjFmirvkMGBMPC4hXC1U4ayQJih9UqtKpeFVPnw5K5i6d",
  "key17": "4DjJ9ntpszJJEDqVN7FomXN1XXZe4QRabE9s7f6Sz5VfbDTGD3mhDxXNaYomdkpRRJef5XsNdjs6sFVEvWSG9ZJK",
  "key18": "525UwHpeKeJxhd6B9YRK3uVwWjLHviXCkUPFjZXR7mBBfqJKykUa1pY2XUBrMSyzdCkjJT5FM5xRUJJwHTYkjfBX",
  "key19": "3Qk2bPbmUS17KLZqtJSsAKwqGXNK1ZXMxMYEqHvM23TdrjzNzhpi6RNpu5hKWhfC8FCg1YsETZYZ7URypy4xgNBv",
  "key20": "gguRuAarL8s58Atc1W3xpA5aj2KKaC2NbPDY1prsaZEWwpRLecDyyMFur8gY22MHEW8JRE3oKB9MTG8H9vdPjcJ",
  "key21": "2UT75KykvHet4WypsJ7p2kCrN14kdB4YM97o8D56EnV8XWhPTQVR21vjnNofhAPT9h4fzGJZ2zWkk89KZEydj449",
  "key22": "584m2VUDW3L77mAd1KaDvMskSLkL52rqbMvHyYyk572mCMNANVBUAaJy1BWVTME4ShdRwCGxoCBrqNPkFnGde6Gd",
  "key23": "2fxArhnbGS16fXrtVTxTuzT97RKhjyg4XkTcb7x5Qt72TnbWLgMFZ4sry3DfYe6693tSi9AvQBrqGXHnWeG25f2d",
  "key24": "5ZngU4Cynbey5hRAHWY9ZZXQM1RktpmwFwU32k26bk6Weuwdiwg61A4JiiaEZ8L4TDfNLqnuG8cLvfq3KR8rk5fY",
  "key25": "4Bs1GML39XgjRLzvXzAk27AhPjpVrCBRrZMBQvmJryfspyRvUivLzo4h4531GUmA7rZyoub9rpBj5U4GXB4nCrJ5",
  "key26": "8jQB2bwN1iCpM6jd97CacvjBPP3eHLssf5snofn8Hqc2cuEkToTdrzwNsBLd1LzDDb5K6ci7kmbE5tPAmXYoCCS",
  "key27": "2YoK45Dpe2DQocvpvq6fYS1DPrkhidcVaYd9cuVLuUfzsoMjKCes3GLgeAHE2Jfw4jxM8GNopEJirTCJ7JNEPLBY",
  "key28": "4pR7QVsBMB5RtRutjV7BYpQwTusr21xXsejvm86cU8yADUMmu8zybgPgro61BZBUPttDt7ckaDgn3y5Dog4yoZgZ",
  "key29": "26NZexUf1De6Bwc6qoxE5VZo86FhVMYfzcte4VDiFfGTNigr91KjSNkUaJ6ELnaFNHP348pTiGXDoXxzDpLWsQsm",
  "key30": "4LaWK8Qm6RREz9nPJohSfiCbp748hvQFTScK2LThi84Q16Vw53ua7Ls99wX8kmjTfkmcsChYVBeRC1vwq7FbAZeU",
  "key31": "Pz57W8MjtzqTopdVmkeAgZhgRNTuEsY83bfPCE7PCrLN4ErmgcoYTAZbmA6ck5h84ssyRPG592E8tgscvtE8eXK",
  "key32": "4Cc7vJaRxLmRL2TetGkrNzqns8bvrwU4hpt2CKpYCS7AUVkUeVTTFKTeAfPtbAfRX4rPAj9SqJmS82sgLHrJxgPh"
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
