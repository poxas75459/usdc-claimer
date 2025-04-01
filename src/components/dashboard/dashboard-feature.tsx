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
    "rziR1YvrBn2WKLEoJEibg7FQre3NJrQKeS2C7Q56QuytTWaWiRRQJQpnnfXKtHUbLnom1kkvCbhvFH8sH4QspVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yGNKs9SDMeJgJNksjwDjfr2jNkhqGbny3rQhXmLESQK24QA4APtVYAyPw95ii4yKqJhGHRtycBfVirg1XxHibu",
  "key1": "72VDJZeTYbASrQXf9ntugm29W9Jr7CtTmpPWn5SUirksUNANpYtbfxW8wzMyQfoSMUoWAVC1T2yddvMVjTaAPcv",
  "key2": "5tCWf95qTVB7tfuF5h3r6JJH1hMuMpn9rusNT32KxDQwK6ownQNSpgpXKmFNCuMXpwNDKmZKCUuj8geUXgCH1sGg",
  "key3": "5LNUqU5Jre5ZeL9XWxvn1E7V5PDQELBr1ipFBmPaCSNRgJ223QreftgS71LoH4Zg3uhkK1RNqBK6og49v1jMhjnE",
  "key4": "4uoTz61dupX9G3WkruK9SNMrd82JMCxPt7NRoifhihjzh6aU5k9ejb5snRBPzWf4YJgjXWCntNTLceyLBF3BkgTC",
  "key5": "3VG3GM5vUhjmjvTGS8tPVTf2Ab4wxgfHmvt3HqjFz5oG8GT1dpRAJvYKKtnB9peF9xbpgfWqMCbzDGtrYaefSNnc",
  "key6": "3M1jv1wza19aK6ajsfjn1qHbqxZ73t5BViyD4r1qUCrwS7MV2QNGNQQdwjMRzuThbEQTVcHZcWQHkS7DgjJ5Yprg",
  "key7": "44hpaqx2HaeYUyqRt6m5EttvDYaco8jQc6xARqxsJZQd1UvvgnfsFPdvE6UADaevvgbJdptvyMrx65Ep8UUt2vGV",
  "key8": "59DJ8Lgxo1ayjcV6HgwgDPNhkm1t6XD7aqm795bFgHGgvXnVtkv61FASc65WZmthxrUG8KLAqSBeffiQD6sA4qDC",
  "key9": "2RPMhnZ9Y5T3dvB8QjbeGeJC9ineooqhs5MLLzeQNEMc4HPJT189xBNse4ka3WKHk9a6URKRVJwecjhoDmpKv6JF",
  "key10": "3JSWvnhKKnqJ8c2WaHShULLnjNdPEQyYDRkrC4QgBu7Wah3UAKuHAKA4VVeJaGd1fac3JHLgbqe9jH1CbrLy3qAU",
  "key11": "5ceWcpD9W17NSA7czPy7EzoHXewX7Q5FbunckYBTrU3DHvJfbUQWh5wL2mmNx6TiDcdkxWL37P8wP2LY6B2gFxjz",
  "key12": "4ex5KTQV3MwnN6Y61Qjp9CAhR8zZz9533yS1Q4JVsaapm61BQ5E2xBT2pn2fZDfyoTwAAZi95P2SSaWAL1uHHeNQ",
  "key13": "4baPS2VxoVEhTbVzfuZPGTj6VGURokMqZzHQ67AHnGGCb1VhCwaE5mnKJFZJMZoXJesNvF3L1xF5UXLffRGyAsw3",
  "key14": "4df3y2vnP1XhcQPEAeKaRnApS3g43kXf3sBubZndWzWgrMFVaC6ZQE3LkzrafQQwCZ64VsjeRxVD1MMucuptdZrf",
  "key15": "36UbekM6aU6u8PQkHm7b3hJkThTjZX3hNniiG5AvmfNnLDSH3JJbiJigxWsFU9FprLjRoVneG9PpW5jCMTo69Kaf",
  "key16": "5RBgV4uVs9Mn1dVkCPpH5aneHAsoLHsP4uVXUW1AvXjYgC21CQ3x5nzLicDGBzMQXFjW9jWJ99FULigNbKRmh7vP",
  "key17": "37roMwbNszMhYwaES1jV4Ackzt4CrgHkpqeBRnQakkT55yfWYSwZk4KVgPq8xbuCx5haCHE3RvPv7sgBaX4TKorL",
  "key18": "3oP33osJvzwHSSnfVQMYq9Yv5oWdBNczKCrozb4xT67RGbSFP62eqQAze3cZQbACssjmRbQ9kX6nMb3exwc1MExo",
  "key19": "2F8zj3tCXyikUu11KqohxC9XC2LSPryJETZthNVr1F9sRnRxW1Rqe3L4e9N2orLpV94vgvMq5G1WL3FYvzdHGyxY",
  "key20": "2DDvxo7fmNtQ85c8SvCqQAx7eTF1KncRQshGfnyRRUDCFtttwT6pme6avzTKAX6oTFn2Pt6kaDiSWVBvJ8dGwWZL",
  "key21": "5qBTRW7RxxdQhP15F8qWvKczo7qfXx3bowDH3ZfJQ3mnjYxmjvAk8uFrtAMnwBKEgq3TGgwbuVVxdDbQtJqE4oKu",
  "key22": "4bP1uERKKL4iVFy9SSJt4LSAez29demgmNg1kL5XYvAiadC9ibSmDPfcAe3fb8LrtMq7n9JB92Qn96Py2Rimmkct",
  "key23": "4PENpN6Xomxho9Q7zdBu291iDLZqNs8qTxH7iVjDGXWUP4Zq7rB9oyBTvnvH1SRSPmvjsyVgJJCRDvEcWLwUYxct",
  "key24": "5qA48JA8b88bPbcTRwg8dnUd4fj7A5VWTuxWBgwxheJoMMnuj1yapTRcAs15J1PCnoL9qzfk5dEfTGMMyxiySzcD",
  "key25": "5tnHBnv3yzxuSPLAD7H2BNje8XjUT1jbKuPUk9WwHZEkJ7skvd8fpM5daBrPCYwTDr1xjvE8UyAiNYzCqLh39pKc",
  "key26": "3nnFnKapD8bPhAUdLyxN3tKZYiBMem7vqJ74rN7pZLyv3hN4cZTV8MD6bY4JzEA1nGZGWZqNkiy1SJT9fRpX7Hge",
  "key27": "3wNS9DbQCQdoQZnsk1ZJHUCAduMXvRHXgP8XRVCj4XEd6YjSyzYhphNfJMhxPniHyDzfSzTsiCCqK1qgWWLXuEpb",
  "key28": "4CeqDj5cP4CzUxjDVZDupGAKYGPvtz41bNQW9ZHBNgugjVFdhascepLTtnJcybS4fjD1EG4pFE7DdsbJdU7Qkrmj",
  "key29": "3Kpix4xFuSQ6x6Ha275iUEnm3e2kCy5uFMmUVAfvtma35izi3Fj2MeAsh8rrxpaFUqLTEMoJ4V1UdoDsrTa2LHCk",
  "key30": "2snVSjNDxrnYuuyZQue7LJZa9RaoLmj8BrV4GPyQWr1VVUwW5iUNixBzfEsdAxP24VtEMZbj92BJHXk5H3mtfoQd",
  "key31": "3Y1a9nixv6K3rEX3u9iAJex4LuYYD2hQyi16H98UUUbULdefhppFNBVjy3aTp97PDAUxbzgtLQqmGs8MHsT1unXe",
  "key32": "5aRCxKAmFLVEki3pd4EEKFeiHaXFaJyg3HADhw7TxigjFT6j7QhZwJpsN8XzQUXYhVwub1YVZiztzdUbEHdWedJE",
  "key33": "5uDLNtW4SC4YWNpa1beHbcJr3aUJttY8EnCUhGRwmzdnuKRK37XCtjUGi2LAXqAQGnLncBAcfjT4Mua94zwC6JMP",
  "key34": "2YxUDW7LEC7TndYnY67oYuFLT575pc1eed2Fzo1y8doFH4xH6SbTeCVDvRdfNUvawpMzarUiU38ApsJYw9WmCC8p",
  "key35": "ctzSsFY2W2e8s6QwsSp4FdxDN439AUHFp1UmR3yt9qXyw3QVtyUcLoXWN1S9gKKF8rPFj3bkMReqvPugbhfVCj6",
  "key36": "9YVjGXXfU4QwSXZphgfR2ZY2wmdb5RFNZT9axJFtYfTWe4jkfrHqsY6h814p5ahNk9FhRkmfxg1L3sptqv2vDmz",
  "key37": "4sKBhpjSGTWWCvMUNMhb9YmkxoSzZVGJmFaAYes9zjnZmuUguqt18KWwo3ucpi7toC6hbWXo1xuf99bciB5Nhbqp"
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
