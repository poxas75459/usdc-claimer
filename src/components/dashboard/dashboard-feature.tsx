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
    "3rD3scDPvpM87WVAjmtpEyhZfAFUkBui2iE8Pqiiygsue4fjEM6KZqmbnMbzEqc1sDAv5iazLRqFYfMdpBfiAxGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDxWtENgjTXK27aNURtc6sxKBUKD7b54rs9TVqJWo2M3hD7g16K5gjc7Fa2pBPj3uBhVnsTWvtUMNk7Z8PkwU7F",
  "key1": "43tQShK5FsPZGgKcS96A1FfHVLR7AJFpVaz54t551Ys2V76N7NtmPCDeDochzFw7BxkC3RDMqgQCRofzgngEJZ2T",
  "key2": "28CbejnwKbPKfior5TuoS18wEeRjxi7GXwXKuBGWXcBxiqLCgSnD3uVgtda3S5L5N3XREmjbYJyTpFSJYAB1rsfK",
  "key3": "5HDYiSXyMSCGgc83vd6a7nAFEp45C2TwaXMuJ4yfFdscmkAbZXuv8BGzrJbLomUvdwFdFn24rP43FbpA1sNYffZ4",
  "key4": "gUTK6UsoJBsHj6EqUHYtUh2AuTeJgu6HMGJQY1JHtbKoUq19gbgi5TZaYmiJh14aMjPrFumGXyP92YnfpCBrSfE",
  "key5": "4gYJkE73LkA91LP8sNCAVm79mLKvSt8oSGgccFXvqQK6KS4h8NrRxuWryqpkrKQu8KrZq3KK8U1megJYXE9Ji4oF",
  "key6": "2aKpzdaMQWr5ZPRW9v4yrFu51T4npKktvRxpBNWHip86vpKqvYw5GUPyDqA2CjX8Axrf8gwaFhZsdPPdvsJZ39Gt",
  "key7": "3DQGSAJXcwkX3iKyk8DeiigEXkfNbo3oeQdDxG5wLp5UeRni2FXNEWE8ygBB1KCFZoSu6Pnwi5XrWLBhkpo3e1sz",
  "key8": "44NBMcJGQhE98Sd6CeTHydtEGJtS41oufsFZzRNTJCge1WUSoFaiXdR4T7iG6Jyf4ocyFjvt2CTZDQVYuc2v9n7w",
  "key9": "3g9PriokDzWypthZStQTB9j314aKMaSML45TpMicKZPEHwojMbMWfVx21bM11eN27rWSYZZq2yzHNPYD2U9MbpfV",
  "key10": "2hPdDqobqqWqt7ohTfvjqYbBdGHsHSHAbgevXLYNuAcHn1qDL25dQCbEZckFTirLQ9u6UV5PaxGXdpjbJvEXmU6S",
  "key11": "3v48E7R559cGkA7Ujim7R27Eehgoc3ifb5ZUktuCeLvkLD4MinDn379a8uLZiauy4PxGGXKGLf4ZVpw8DQ76QuBs",
  "key12": "tv3ubEaYKU5tcAJUVPFvRrFPnrkN8EJCjhEKWs2mVHyju4w1ZdhRJz5NQrndYubq2CuUXJwR4h9bPoULEM8q4xb",
  "key13": "5f4sR4Y3DAr4GAALPkcdKWesijKq86yFnzsahPRy41t4fc21HjqsSEoVFh7EmommgZ3sLCSv9BBvWBPyzjcbZhYV",
  "key14": "2myin5ZnrTkhQgERdHSBXSunWNCxJhpine8NPTnX3C1mzoXr8WmqqCcrGjCMQc3UumvJYKJS5jYBLWswJP9f2Qi4",
  "key15": "2ZDU4m92PAMu8jP63GAtcGvNj5X6iJN9Lgnf9mLPRARNSqhgKPAFZEGdGuNhVZCQNByXTL4B22Xa59o8xXcx5fS7",
  "key16": "5WyjTxRiBYKWbpwQBWCRcT5CsNMAF7BrQvKBEATvqdANnykKNq1yKXKEj38h3NEB873CtkDBCMubBaK3P6NQVZ2B",
  "key17": "3rSj4XKg4HWFR6o1TCguzp2VETpEQUVrC9jkdL7NU8yY1F8qHSgJarsjmjZzPQjRGjWBSMbcHLQhfH2TVDabWYzn",
  "key18": "5jRuz7Bbrb6sXrZV1T9TG3RiPLpWBNjg6PwkULr7BKjad2aXQCwxXUgtMFUBnesdd9bmvih9KNyY3Ae8HsPY1biq",
  "key19": "4LgFiRZ56Ht75CixrFExtQAGYQNanGBScChQSNEWwJoVYHKKU8yt3tsT3PN6M2mujxtMiakz862bbrpbDtrreZie",
  "key20": "2te2XAdy6fDakeTqXMu98jNkZfbJc1FaVREjk6pbDnCFcUxkmxpUQ8Eo6JqFZknfhr5WtEFjipAC1MRbdEz1amgF",
  "key21": "2LS7s9qzR3kFyqmjHKuproikjg3K4qS9wxPVjz4JppPJBLPuAqM7ee5JKZyomhzH1sqv9DdzbA1Dyne87SVaKVyY",
  "key22": "3kaCYKdkcn569fvnotmHHWmczjL97n3BdvxxbWicDLQ7bv2q3vSTvk21DspKWer5XYFrdSiCGuiWCNZr6Tff4oio",
  "key23": "1iLuiiuubU7aknYhxzC6qqvAsxu6biQ73RgoxdJhzqSfDqhmDNXsRSxWgCZhUWzXwQdQhpjbkQKHgtuSuVWi6ZU",
  "key24": "5nPTNmcDjgtYRB3njVTtdsjQPbqsxDG47CZC5iPASeWmLwr2GqZezCU2jeRVmAdMUWotK4FLLuFssCFfxrUn2AKT",
  "key25": "yfYQVAr1c3C338DDceV1fWZAqU42HWbSuXW9cf4e9mLfXUMcaC2WmmLKofbcTYLyMfzsWp8noJnPrNCVqrF1EH2",
  "key26": "5Ym1zjv6hMzxRBbn7nJRfQa6xY2M8hyMBiT9tPsiJVaGMXvsW2wuuyiBosSurXNrCpXAwJBJshcBGMg8TujosWTF",
  "key27": "2hRrJ2giE6yy92ZAvxDbAKjtYArZGJRHf7T7aLd1dvVyZUSer7DTXzXjaA67JMMtGbvoFSv3VV3ocCuWeB7VkbqF",
  "key28": "42a5uuGrFwuAidk6teDqPgVxHXwRWYTobdNaAMWjSdhF9CEiUabquVdmP8mrykocJvktQbuJxeAik33t1e5WXj94",
  "key29": "3sBkfZK1ensB8fNn9ukMYvSgm9uSmDnX6ouDfMwepfacKA6YpmMbJaYsTXx9xjJoNgKkqKtN5DwS6WKTnxZkkBp6",
  "key30": "3zsse9KrfUpxhrsZFKFh7JaZfnJ6VszgtPaZzPbx8kEFH4h2jApkyHUU8ETdV8w7poFPpr1Firs8cLnHoEUTPy6U",
  "key31": "vXX15vBEXUZPWmVv88XDBzk2MFvBg97ATmWyHcJu93hyfi1NdiJSL1ULxaubysbBweFRZfeLWM8jMP5uWHQVw2j",
  "key32": "3DvjZg8z88mnMdNqtsDnivHmy8QaMUs5D9ko6gJNhXDdAfgcoLnoBWCKPgNgHegTcF3wTG8VeRvCfMxvuZr5r9c2",
  "key33": "4krjWZmm5r7GztVMn9eyHFVktm5Vx29B5HsRG7L2ESR5M8Ng83Nj4eQ1WwgzPEfqQT88493cJZMBnjXQm9p3XANs"
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
