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
    "Ws8uMZoDxma2Y7JSesqq17j79QnZ8zg3dph6xwTwoxExqma8Vacv8R7FMbR3bT1iJ2dPQTmZ8BnTwhTgwmhpxAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89UhBcoFKUbtUdFiqDWBrXoZE8NZ7CaJVoayiUoWiD1L3AJiBNh9swp4BWQZ6QW3f1tXtoZEoDpAL5Zrj1ZtqU9",
  "key1": "5Q4PfAGkW1VYm6EUZFqyGBRsmQ8dkas5593LdqmBuWoKnGc1Cw6bumCkbKfZeJWS43JdafuZy1oU4tf239yhQawF",
  "key2": "2fUDuEfqX369VMUBdrKuJ3FGcvE16j7RHPUJhJyvBWsCbQDuYmyAJ3VzVzirJVunM6XnGSxRLTDQ2wA3udUTcN5o",
  "key3": "23qjcrjJSB1jKoXS2x1pVC16jA3wdC9kTCwRWRzoPBjBmwC447RH5KC3LLqqMqduUK9eFmZ5hBrJbCDeestHARsS",
  "key4": "4XmCVhTaNUk7cxCAxA4JhSnjuxx6GKKrC9YuWCMk7J529Kf7qvRggMXDbbam5pDW4J9mSDizQmGXRxYiQYNu4sPa",
  "key5": "58msgnz3T1r2bXZ6G7v2F8BssWjj7XTMJ9R3Vjx1ffP2hk3j5tnZ6kKTXzQhTRGjnLaqxPP2bh9qB4uRYtQyQAhh",
  "key6": "PSqwEVqxe71cc2AhVhFEarhhGyns2yCQRKWmWA39ptUxH5V1PpNKLy2L8FzSBYK3Sh9Yg19Qo5ukayuo4pxzxQM",
  "key7": "458BKc9DC2K3fjvsuL8j3MiX86ivjhBX8q79LeCKLDD41fWZr9LarcbhZzsA919qBF4ahMQNWJW5j1wWKpBcgjd8",
  "key8": "4RLMUG3xPU4GDGiecCbLmysoqfh8mjFA9Kw3EC2H9MArDmVmWwaW8p68qXtHG8SuuSGyiyCzQMb1tTeLt3GJgHRT",
  "key9": "5ZE1y5MDbdT1HCD6ZL6PcnnAChiaxSrPEf5ByCCpY3Fdpsvzn9T2xBtrRX1AmK8LygCRTGvgALzxCb9hKpA6Q3b5",
  "key10": "5oriMWjVDoZjWZsoAN9r1LbP4D2DqhSg2xUqh3YwTmg4LrE4SCVeEbbigaAoieXMHS4hj6qS5CpxgoBgHUUyjb7G",
  "key11": "3P7byngAqXu9j2p4pQeTyWTbSVZgM8tTZ9Po9xjPAsCdEvnrKYrGtjXka49ZVduT8st5bt5h9rhZ2xcCjZZAC9Wr",
  "key12": "3DZET26xcAG2rBwXJDr9NHrfU9jpYw95ePaiRcvACF2uJbSnhHm9ARyDq7e6uDno5kXy3Lv4hdFULS6zkZ5a8s6H",
  "key13": "2p9YoV9GLPMqoip2cxtjgCvtWnjMqNp1RQ86KUonQHWFm7YNKouMgpSMgVGvux7j5uLA7i4nASN61Twu9D51hNwQ",
  "key14": "4o7SFLiYnvuXisJhmcgQuCsQ4MuZDiAbrUCisrPXEGkFgruaLa81FwokBcd2TtKJ9QBFG383SFou5MFjX1j7MNEo",
  "key15": "2zGnTmK91jQy9R9jN3GRJgH4zxgRz9DoG1pmbUq4gJ5u4khVVeBZwkXh9bZQb35LZufffLhAucdKWXLnsGpbpGkZ",
  "key16": "4DXQr3pm6JbW999jCKfa4pHxLwMEsyHqMRUWivXbBTLygiDjEd12rYKUyCHCAx4wQVpfFFC38ZtLtNHuCUBb2t2D",
  "key17": "3mE6QTwevre8fqngGDJ5SzDy8rMiRjnBxg9prAhtEW3mtDGtxhbPE9bpwBUkxrnUNQGXoVkzwPMaCkhgoSBLXacE",
  "key18": "2CuwsNzw8jjBbMiw8nhS4b9Si4LMAfEckrtaDwEpikbZUAVbAzJXCMdAp4YZV6eYWhMTy6rNmsrNAfBcMakQRpjX",
  "key19": "2GhvyvcHPZVNW3UGtA6xpZJ4ybyysprNth5nS5acTY9E2C1vcPLM4agGZAtUYVw7X63D4mY758yp39x56mPHoKTe",
  "key20": "2M94bR2iW42idprYCigHYghUK2jLVNSgQLzE3TcfMnAEbVzUwzjC72FZkpy4PrUtS2RPNN3Ag6CrfHU7TRp9yWSc",
  "key21": "4od3KtpaR5SaVYUrgDXArHht3Com5dxF12z9R5LQXPQN8i7H1Qv8uRTmvQeu1bBmRrG3bPYg5TUcoc6Dbad1oQac",
  "key22": "2fzikpCbERimLTJUery4xvaKfhpLeynyUAMAsYciFcqmtTswAkaY6xWbHm14q4BFPa8qvM8ESeoBxRbxFkCfiHFi",
  "key23": "3FrdeMsgGk1rUsjse2sRW8mMq6ViuXynGT47fum5RLjdrdT2xDRpXHb37ghwouacei9ztgz2z4eyTqWyWqm9dneD",
  "key24": "3HyVze92ne5Jb9qijbvsFX6Yj7uFuv3Pat7tTSaHSx6z7iow2HZSzWXCBSrvtdqwYBxGecrDkbGgpGFaVvR9fKuX",
  "key25": "2EAZY88bHju8yEMJQkodZPxxzLkQM5JmJhkrAQi8ctpaVZGnZohUozCfCgcoPZfdCX6Px8rLFv86r2XN6Qv5qAnx",
  "key26": "fpByN5w434mcwxL5hiL7TLvLdBPXqyXJQVUDWEcPN7rxd2P7YLQQymRjLyFNYxXi4ssaSPkC4c8FZMUHUZrS6Ea",
  "key27": "2hVSuRkUG9y4f1g2TvmhnUujhUqWUZjNpgo7YYutsiFgPbJwuDikhtrbFrYcqy35f3U874qTki5Ak2zPvekmxzs7"
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
