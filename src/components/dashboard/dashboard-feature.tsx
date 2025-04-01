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
    "337ZrjN6K7omwLaDhvnM56MQUDi5sSx4Y2iZ8We18yJHvzUuiLyBu7ZMw6wPkqXGAjKRwJio8t9FoieT9UGJQb6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viUjUNA1SgcHEJ93uc7sDqcSmSabeEQhGnVTkPMDaN6oQLuhjZn5SFvREc7gSZT8jzjGfXA1AM5taKuN16NMvqV",
  "key1": "3kiwp1qagQ8ncApziu5jyjfWx7ZTbjuMcTvsQ7P16JYYTujL8rpfhzAa4dqx4dtqMKVqk8m6TGQLfk3bwB6f8LNV",
  "key2": "9Y6bqnjQvZucq1bbv1yAZBSRYi4CqjwWRRWGNQJK5UsQc3h5mUhs1NrrFi961UX93covyTNGpP4rN5rBaLDyc4Q",
  "key3": "YPgtGSL5c9mbM2X9L7aCAyu4YPzbQsTmZvrxeHqHW36PsckribcUi2mUCX8CxGVwHkvWAmxNsD4rAXRgigXPn4b",
  "key4": "4zFjm5bUkZD4wLESoQLeMtFuTRjF5bNJHxmB2xiJMQ5qG8Dj1FB3jFPf3iqsKgZdqsdZTGiazHYf4iERGP3EYpfr",
  "key5": "5bKwPAEq1ToM1XC1mNL64PxwFEJxzRKH55VcgsKLkRgyg9boFgYfqDW7SLD8Lphput9nEF1Pc96jXBMpXVkZhfG",
  "key6": "yAgRtA6sJnRLpLPHzB4WpeiwCBnphF4oKR8Nhq6bBfste6keQeVz69oY5K6YfWWK7gSxd31oukY8VtHwLQDc89B",
  "key7": "3Aodki2nogVhCZUfwQKAsMBKgdaKqUnc7x335BZxrktjkCAP7AU5q12sRLiiaiEc8Ha5zWYthcqqtm9JyTAsqvjt",
  "key8": "5R3j8RzfhesuQguynNh7mrh1zNo7WVnrCenkXBTgn89zAJW6kf78ySHL2d5XhyooKqFGU6JavKT4zdqXweMhZ9Ni",
  "key9": "4DKTbqbvJjn1PdtptXvSHXGEFqFu2139UioRshNWU1CGRwn1oBNM2dehroHTHYzCmH3Rb2YcUxwDD7gjqZLoNwgQ",
  "key10": "64e5Ks5FABXDGAjNpcBCoaHr6oXhyRvf1TssJqTzaUAJneiqsXKcFbFV6xQs2mzgXKN8cfah98m7iEVKgqiNcE2u",
  "key11": "3j3mjsYGjFCy1EN1CnPLjgyivefgf86T1MddtFJmHDSVPapN2G1M7wsDUeEdw34NRTdyAdrQ51n3cDCmyRrtUBro",
  "key12": "5g9gzV1EjtkvUL8Q3TS8XMYvQwKAC39FjQGr2bkeSW1ZSRWxjZ4JzE73YNJHFNbVfSqvmpVhAragzJA3p6fbbLo5",
  "key13": "127a5D7EUjXpor1UFoyot9QdkuQvQDwRh1w8ZYidYuQTvXuEuwessMN5vkW67LufsfGxc2wQEc7osFQgPaXWrBcr",
  "key14": "2FMh9FTpK6VRAPFr92hgAP18fUSWTdVqWvf7mNPUX4PxMvnkVs4rEM2DPZD31wBNCpYEFxoNsbC8nLinBdzv6KKt",
  "key15": "4Ca1hJan6fpdwfzbeg6JQvqQBpZyNpDBQToXYSQ8ProHzoZKvkMnt2FiYoLMTqrhppbkCC6swwRdxHNSaSrqycy4",
  "key16": "251VhuzFi2pH1MezDoFbu8gFCCuHHK6x34cpLixMu2987owRvLmmGAQme28ytZsMYyhBGwULQAT7jHLguDq9e5kp",
  "key17": "4jK4t228hffByKfZMJELB7TUbhALjKHdb99swbYtB2bDiBnNLwyvFGdWdRdi7rxbDXjPCa9bmcdGfUML4cJEth1Z",
  "key18": "47yENNN3eAgQrrd15LYFfNji6fjMGzpoBw7PigyusuTVG5QPdAxwi5Nm9nPxtQZ6PnSgBeT2D4bp3aBiqdtfFRaa",
  "key19": "4R69AiFKK6wBWFY2Pgt7ZmKRozMAdvwGgiD3FrSZShytCoDgpbkF8NyJks1G72eTjCrphLBffuhQqRYDJkxXfeu1",
  "key20": "4sLotyU7SNp9PkiTfy45N49zCfTRVURzCy1dQrnXL2fJuqDatJuL5P2R6PStJztVKrhnfNjnTk2VedWoAm9LDe5R",
  "key21": "EGEoJwXNAJ1ziHVpTwWAKqWcL1tucggQGrP8msgxpWULAgXfTQN6jtDBwAjZdBhc3QpoLdbgUwqevvGqhfRZke3",
  "key22": "3f1AnfqXEMFNhbD2ddQ18h2AP7eNNfsy3b7PbsKqVphDcsythYNQ8pBkjEuAatnTfhcj3eMGARQAYYiVLe5ZLYwM",
  "key23": "ZcjVQXx7sGfNimABctKkiFEx522VtdApBSSrKFPzXTwDweANAP3nQ3hwrt3AbX1V4HoHJ9w5XrrYiYK679jfEFs",
  "key24": "238CvsW726g2jhXoWnc3B5wLYSvFzddUoQEeDYmfhRQtWmij5bKU8a9oyriCWroATcbQgTHDxdzSKeHMSdcqfv6C"
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
