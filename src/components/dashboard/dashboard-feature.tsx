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
    "5L5u9fGgjDCCf3tbnmNMapdxqq6vsuk5tgDmd1waSYYgzcgiKgaBPsCvd7mTW6777QG9HwrFw2f67N97JYB9jZoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyKQd1pm8icHmA3nJooPfZ2uXoaqYT7t91PujX9CmiVBwSyC7RzDxSx79eKgWDDi4kQSKTC7HrV6qbVqtp7omgC",
  "key1": "56zzJdsXUhb2kk2mtPR3bAacnwrqRx7kZzBzXTZG2WjvFqVELFs7uPCPXNmfLTey2WscqRyThp5ymG6JtgijR2wv",
  "key2": "3YQxZswqM7pVpV2cHuY1wLUcXyVgRxbpSYQXA8HhjjHQs4qJuXqYxe73tRT8VrbmqAoqkkXqxx1nHnLPwdg7mUre",
  "key3": "Pc2MyipD5RrzjhddNniB47MeNnLyEcuXw2eNvK5hg4dQNYdANjK7BV1Fjm9PzYRGE4EZueKyG4yTdzchDLyYoKT",
  "key4": "59LM48RrP6wHv94R2xuWsFxyKNimJBr1LmwU4e36Yth1EqBkxXH3DQp76pXreswEshLh7KQpVPCyCfFGaWfjdv5X",
  "key5": "3Q8wMBFfw2iHBwjjse33nZALHWDhZCg9QLJottUHQgWnQS9tsXXvwngQPUpkR7BSBVCYSHrjA8cxpytJiyYxRe3F",
  "key6": "g1KJwAj5D5fYg5fwXppuCR3hybq7RGpUKttF1QLCtv6pwh5keqvu6AU7h2bt5hb12jf4d64jTAvr5fv1yCdRdoY",
  "key7": "316rjzCagVixFcZ7eLcBn7KzZXtsYHRaNx3eSiBvGwGaZXbpoXULMcA1djhBwQsyeH3GN9kz24bvkvs4DVCceNZ1",
  "key8": "5PEeVndBP5Sd8yyMWFb6nSmXitJd9zjhveN4GZbf8HiQdUPKjRcmMM9qYaxixuBSpj7hcfchg1LUSVWVR4ikEbbV",
  "key9": "4dwJ2G54pSU4FdjHqQkhuoknSGyMoi19M6JqQDaS5d84cKsnFeVkDSV7rit9qrmxqpNfHHoACDZYBeVFY2oaqreY",
  "key10": "5hwW3xS63M3Faz3dh82ZRBx5zQyVXwAzRVY5k2p2n7gG8v4TsjWHEkKeGfTvQuDF4MPRakMM8Bsh5vfEnDxCqx6o",
  "key11": "SJXBHwVytrBQHzKYxn38SkHWtjfZLoHebQReXhTuM2B37MreSEGnPTkNWDuLg5ixY4iBLnCCNo1PQyY5uGrcFzA",
  "key12": "2DXdSvhu1jLtfAC6RGozS5fnGfigrRg3E6iYe8YDgqB85yFqL7vyKDS5Vb6X8ZoaDiT25LZgVTGMMTR4h5khtFXj",
  "key13": "5c4ZLg1v2oYsY4hxALuy6JoYpnRLPf59fJeyM3M8U2RFuQ5tqHsx7s2AZQgmC7vchP3HV3bkq143xpw9zT6mcd2s",
  "key14": "2t755S6reUYpDkGgDyQ5pvvA6eqdrr9eXknR4zrjBzv9BP516RPCGYrd7QhLwWax7XnGCs8yz6zcf2gcKWxm6KAL",
  "key15": "5pTANZnrEbuHMCjB2M5y9ozwXifhTzzKRkohJASbWLBM2H5uzC2nZitaAB6RQLXgcn6rQbhr5eZg2KwAstYcDcLE",
  "key16": "29aZxuq1oBUb8SPVPudd52EgJSPskE7Ttdmr5hq8HvubLxjbwptX2gWNAhceQmkMw4JuarLMTH9SvvYi2gZEZYng",
  "key17": "36SAVeaaq2YTjA4j3bforeBnVrWDPmMBUoUCwam1hKtLSDp9PzurAmYfbyA9AqDsEikrMZzZd4v3eCDk7uiyUqka",
  "key18": "hpobY2hyT9aPDQxb7EpA8yDerJ1QQYov7zR3D3EXwonEBKg37ykh5B6Du9hQVKBNDhynRWRhtWZnKk9TRwRNe44",
  "key19": "4nHBme8SJ9cLbPRsmVybtSd7LMyqybVWJVnZn5LVUMmzue8atcSkGYJLA9QxsLcDXVzD7Uc7X8w9pHb2froiW3Zn",
  "key20": "5RmEV8ZDzNxAYyfeStUDyd12qvHYFVzygqX6JFJsYvNinCadtHAB7UsoXWwezFyi9VkRfpmhmmGY1hrT2rcwTSDP",
  "key21": "DY9nfYxc1mcaGzBSWT4vUmG3ECLxTSoBwA6P9ZRiiX1VDqq1o7KUMczkJZLCkBgQFct6oSftzZ2hoM9pKq7iyAv",
  "key22": "MWX8pXA3GSNaNtREXJYZEbhMPPiTCJz5mWRBVQiZ1d9NAWXGU9V2pw1D9FVtcc1CH79B6K3qRCVLYhmKX8sNSHu",
  "key23": "3c9G8XeQoA8QJnQoQ4pGYFkzgB2fYBVE5qP8akbg7rypMrNX9iGw898oAqCft5WdnJLdi3QhmgnituzhM1k6kih1",
  "key24": "3YSWCwY2cVjx4KXureJ9sw4niLZo9G7iXnD6R8sysg1kEwLb6VF8NTsM6ScR42EkBMhMuUcFEpiZKkJQX5JEN8TE",
  "key25": "5dg9xJ6QgVsuiM4LABrrDAdbjPS8NUfqLELCkYffXxqGdWg4KzG9qkkqjUriHvRffqppSaWLvEKfPT2My7NgKKqE",
  "key26": "4uGa5wM3zFY9isvH71urZQoWJxdzR2bFaJnntSxtRi7aoUa2Sfgf2Zd8paLJLaHcfWxpkcBTEA1n6xahH4QtzHCA",
  "key27": "33Th247LzhkNG5ERo1ja3SsUMo3nxmybenu81jymJcLXVEX6R3i7FpFZsYEjFGpxjjZrB4uLfg63TJT4WhE7Ax1M",
  "key28": "5tBvoFsjqK9SFTfnFompxnYVxkC2kiraTybof69fuLzv8UyXxtCBP4LHhnTRWBED7bv9ks4dahzaKwXwG8urmQKG",
  "key29": "3rB5U5SWNtS8Arbsk95uvXNeRex1LLNyPnRQUqJUEzp5RjqvJM9kMdAzhMX6phGDpjohR9NzP9pXPZbSga3cceLZ"
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
