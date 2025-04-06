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
    "3WBnBLDTsPubc6XnykeH2oEYXLnboLZtSEfdGgetLxDrbSPKRBSyRP1YeUbJ1uYmPW9inCq1XkwdEPjm57AuGKHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eo5HJpdLYbpCk1ioUQdbPtmag3vFej5gBejBUpe18DQSM33Af6hvYXgdasHnrHQwR6ewJqtSJ9qKrRDicsv8j7i",
  "key1": "p2wubavCs4sCJpPRXiksGGb7wi3syiHWEeHNVif9PiE8tXMBmRTTJ8R744KwZ8q63CkKKvBKWUgSQGupribzMwM",
  "key2": "5tUiPQneS1S9tNPsSgXdYWVR1GqULoWKwLbMtRix3TGhGH6pRF8fcsURJdpRaMqSwoDpF88nGU6DCRTd3r79CRp3",
  "key3": "2jcujwmMLnctXADx7dSHcwTorUDXoNjCetXrJL5dH6qEYruyzH5drt28tbEJfU74agN1XnMHNuNJdLnQ7TTsNkyv",
  "key4": "4MHkCLmeDQPwY4zhVKyFmjRskpGnGfYKhimWStwZRnZqtYaXmdMuiZ1hvXNwLtp3exBi3QHWPZfh2gb9nWfbRRrr",
  "key5": "2rRsVHrPWUpgBhGva2MThzAxgs89zpmWrmxRnZzDXPWd9E9Ky5vXJ2mfYTmZMNsmS3D4wvwNzjohzPi99JBbJjX4",
  "key6": "42QcRUyZChTdvig1zf73hcSb5qtDPLqeLr2xJ6nEu21oDZPMpBoUgwMCJbsU6PLF2rEcZEYCLBCDKBebNRn6Hr11",
  "key7": "3ujbxDacqGtPRDQuTVt3g2f1RTweheAnZ5nomc2kHb9JRJWwcXe7gmCJqxqxus8bTG2DmK6FcF4d4pfTscqQpxnn",
  "key8": "2Acex1Jmaz2kSRWKWdoyvmx5aWZzL3bdhLuf3wKaTBjXfBgJGGkaeYk5YurkxZhTMqaVKK43AGWbtT91DycAeouk",
  "key9": "3RimdcnGu7E1amZXDKBmziveFwUNC2dKK8LsZuTY5xzRLfaLsX79yRNZybFQ6mmjkdL4UtqmnXVJ4ziXc7RtmyiQ",
  "key10": "5tT8txhvLTiwbpfSxmyn8wjhed7E68Joix3Sfe6gsv1p5qm2ZDGK8Sy9gi7S4QTvABFnc6a8EPuBvo3WhvYKgPXf",
  "key11": "3qCeFACiZsXtuJhfqmQm1e1bHACKmUzB6Mzs5wHEFLQANxSZQp3LDAueGwResMsxZQUogT7KVjnaS71hK3nKQjN8",
  "key12": "39je5tjwzMRyjqYYjoVMcfXgwWTQ4j48HAJrU3Hku56XkUgCtv4NUPu5YmfS97rvyvY9cdGsb9R7VfvREFSSwVbK",
  "key13": "4kQhYeJGB6E5stsLWRjJFeENnAZEefRYBTBhmcx8Bqk1HFoNXRn4DaPah7dshYayk4YdcacAfmLzrN2KtPueFadF",
  "key14": "3VXGfZBwERWHPVCMYp1USTK7MGQz8ohDPYRpamBsbg7RTrQg1sGhVowA7r1aN2bt3hNCKF57i6taDmNBT6rtbisg",
  "key15": "4JLr6vH4FLujBN3Ecq29uC2RjePZsBuwhNg4egJhjx4GEU7RfMv9hB8fUhLE3jUQognNgWnvTfET7UvpSz8aqU8o",
  "key16": "4pJeKfa8cv6K55YdHaCQwG6LRGyp8iCTvDyonJQsynBcY17YHsBAYcmwfRTM29raxgcrtTzCakiXseBebrTPchEh",
  "key17": "5hPVpBGW5JJDoja9f2QjcMoFd4BrbrNUf6Vi7GbmREubB8MTjysfNk2Dqg2u37yMB8Ccqx78qLKFoe6CJW8FUTgq",
  "key18": "3NLmGmrXEf32Wt75j3pBpm37QCjVbAfXWavj73KzrGzHH1DnPx5KGJx9ccuUzsVg1gVoC5zFixSJka1MS2o7E6Cs",
  "key19": "3S7ZZ41VVr6GGoNnHdD8rDQ7uo8TYiKdxU1tbYhoJAfaw621aVYXfZMtD4PrWDa8ByXCi2vszRkPt8Hf4gMHQifj",
  "key20": "3kJVUESrGP6D3J413e21LNJZTjksvgp6bZc8yXstjpEAGiCV25YWKnfJyjQpdJrvL2B5M9X2bNmYGKv5hvEiaNfr",
  "key21": "31Zmy2Cf83kRix23VCa5N61hYySeXx7bKgZ1MB4HwwxmBgbQNg2YhiVghghyaL4f6wnswPWiVUwXYCG3Lcz2uvZn",
  "key22": "2fxmkHr28U2X8iKNMSmhRRnhQh59DXNtZq9kzyh4aM8Yw8v5oADE5Uf12BDKvvpcAWgLojGiXBk6d1sYbRtbqFdN",
  "key23": "3NhU6iuCXKfDANgr4tPoLVPam6NitensyxmwbLgSoWkbdBDovydFGAjRvTvYzU2SoXXANjZGukFtqaVQ3VocadeN",
  "key24": "3KWXSd14fNTFi1787EwJp8B2Hn6B2Ts4HqctBUxtdMKaeJqyu7USyQju6iHd5vrTxR3JbAVGZs9tfehHG3e9jEop",
  "key25": "36YU69KNiYCVZz2gdA8mAP4cupaS8WuqHHKHAV7J4mDM6fc4m13MX7UZR9hosPwh6dPsrCibt3NokFEofhuwM3q1",
  "key26": "a5ddRPPywhgUSdcWgr1if58nUedyrQBPni3jCnxpReQuZMg2wY7eU4MocKzWRZ4FRQxP94YRLQM6icrN4iVhyBF",
  "key27": "51L6Pm1k1ev43ZdCEnrgf4JbiPdJRchsPGZwbFG2aVSGKayyAtsGBuMw3ju3VAdfGbfdfHMFUkUbwaMRjsNTXXQp",
  "key28": "5z8fvT1NfP3tGevEgEC1EFABWCUHc2jw8mcsZLzftfGoK3kBe25JKX4zBgGZh3VPc1zGuW8a1iBVUVGJSuYXmWNm",
  "key29": "3w3HaZLvNWz4WAhREUZtMRuRLyJ1HoGUJxXMQNquGniLPo1QbYoCxj23dAJiFknrgKWffJfPtqfx37LA2KAzq2UT",
  "key30": "karwfrdX9KAhxX93wxtzb8vjyF7e4rQNQrn36VfzXkZHbMtB9n7xRTqeRSJrh3Mzn7nZ15jAPvLa3GRXG4vVHU9",
  "key31": "3gSb71mkvaKbecc12pqtQkUoN12ADvbaYBP4ZUYNqb9eNDrCMbi9QxWaGi11povq9M5tsQc86ubmT5WTzEPUu9Rv",
  "key32": "5wmQVukPbh6fEK2p7nR28VdYZmtrQaSP7SqTtYMwtGDTZojvvU6uyK3qvF5DmVRE19VBAHLmsENFFjQPfkjsRbfJ",
  "key33": "4jgwpgnLCRaheUgfma6BHj1TxnD9mXV4ebqDzjmmBn31CQVhoXCArDM7FRerKPaunTVmu9c1VnG1C24SZviP75Lx",
  "key34": "wHvepPPyzkyVyHFRA3iwyEvj7Ac21ftuYSBTqAnheevW1XxRBoGDjwxGRMAvBsrrD8qrvMe24xpQtmgjRn35TKt",
  "key35": "61srV1baFkP8fSBjpCHYrmGWhDGTYzY5KVwwdse4JcH4hUmkZe4TVj2PQJHAj8XjUNeCj4hWyi23nCAsYBhSvYca",
  "key36": "3rFAvjyy7AaVdPf2wzL94gV7W7fTeYMf9UFwdK3r2k1cLC7dhKLncfsAEgsPVSh8tWR3RvohU6Jp49BMn5hJr33H"
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
