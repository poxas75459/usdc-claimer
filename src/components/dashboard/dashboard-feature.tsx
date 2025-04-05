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
    "2qeauer1U9F6jpTF5R8vmn5Re31J5it13Ra3BbBfJbbLWUh7vrQPRr84rWnXkBDDNUBtBQTAXtozLvpYDuSASXB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccMQXPpJbiXC38zDryBX7KSFofiMDTvc9AnDssyKJLk77C4w9yZnJsNeKhcs6APWEPC87TC8ECQqAXXRwJk72TJ",
  "key1": "L8VEFLRberKpL42PdD1jTE4AY5jpgNMPaGSEzcdTu9s4qodhzeXVX3k85r7D8UY2SoRqmK3e6qCZoWuF7C8gqx3",
  "key2": "3HeiZ4cac2qH5TG28vh7LHLYPqY6X2yzmExUcH61vyLkrdGgMkDkEEuxGc4HNyNbjx8RartgGgGjGrkWWZLyXw3k",
  "key3": "3YGEFG8KtK7MWaAahHjF3tTfSy217W69rfw4HkqftTy6AtWwrM72AH8Be7hNh5L9evBMdxhFj8XVBUhJoWPqHuvm",
  "key4": "64tfVf7BY3hy2kQuzuX1FkVVrEynKRN8Kup6PdQC2aehD2kwTcEuudT5AoJrZRUxFbhYSW4H8f9fSrJacPw2rFDc",
  "key5": "2iipoayMgfJ51T4ppjkutf2xVP8b1EURHe7ocWVRjYCxMLpJPUJ1vBzZCshYfNdPduYx9prJMRYqAXwJxHoZBeC8",
  "key6": "2TSmhiv9kfS7uUJinb5wMHCEdA6yYybbAtzM5i9jBKGxeJ852fhwk43pUoXPNTHBhTyh8G1fbxpfUnKB5KWHaPXS",
  "key7": "NTaAfNWY3vePtqvaKcLwnLXzUWmo9jkwTmAtBA4AC1LxtHTK4JqFsHCjiptdRm3i4bqC2HrqtEGUbRhZFH7VL5s",
  "key8": "65wh7LbDBD2JfruhtvrXnfwwYoTuwufQpSqWeS9jQtXyV1wAkX8rK98kHimoHkmNV4ZU7S6A1JqKHwC1svhEycbL",
  "key9": "2Ew7QJ6nVZUwbiWvWKi7XNERVaD8hrAyRdricF1oNyPT4Mj9ziJk7XorwBMsPhvmJ5PeuCFTVRKBTNh272GKFAP6",
  "key10": "2xEMKd8zRT8Ynx7VmRPdGyV9qw5mnCCUvbftTixXBwRw392AFsaoVz6497hcjm7tW7SETxo6Gzguom8DHFoBBF5",
  "key11": "5oM1sxjvm4VHGNM5Jizs7QS68CeDcBLTDDctwFRAxS1kC9k61JN7Nu6kTfSetFdoSH2gg8on3HSPgSREjkphKsGe",
  "key12": "UMvBRDMubwX9tDxRzMFQAhKJmUUSRuMrQGRuo1TaMC7Sv4uMmxgWQCSCu6Esc6xLY5NCqXiGj6FR7dUezvyTU62",
  "key13": "rh7wG1hFwAuZ3pZeb4UfSMhaUMJuiZ3yftvpGZbcARhm61ECovfzKu3PEJr3mYDrzHbbRKZDRBgJ7bc6gbNQn7x",
  "key14": "5YGxXckopA3RTtsuun73Rw21NAbrrf2yvMsPzxUxCtFEaiYUx5vw2bpv74LY65ZPa9CMZsYZQmeWBxWY1FcaMgvQ",
  "key15": "2a2GRpD8moeix3cTYKJKYkabV3UQvSypPcnGr2pygz5HgdxZf5VYdXdDs2yspQ7xYdGaPJFADdUnDUPNosppvE3N",
  "key16": "5ENFo4d9gmiV5ydGUtY79sA62yziMCCVNtooU35w22jL5wQkZW91qEwPBmp6dmr4LasrpQ1ZcUapRzMoBdQrHbUq",
  "key17": "4esRwcbMa1QBBhwb7cE2UK1vwJ8X6eN1KAoVk5WsrtVteoQ7HzztrbYoUpdwztC5TULVRAcQxye4NBrsKTZnKi9F",
  "key18": "5FGgbUp9AsBJjwxbKAqCcxoMJJYEqNHdcEDBWMP7Jd6J6KQYwrL2XJWsFocggT8RTNvWzBoePyCJ5bLxpohXMzC",
  "key19": "5qSaLKTXFKd9CXXj3CMsJ568bipf7i9RAZAA43AnY9bwbWqaL8NhhQ1cf7GAxrJFUp3SvBLT5mMYx9aTCieWPgPs",
  "key20": "575erE31qvh6TdtbhAugH7Xm92CEuRfMT6mXHJEiMywKRknvUjbn2avjQyCQyMGB66KocsRKxBhTdJCmsNtjep9q",
  "key21": "2ebxpnpgqocYN2mmjG7ZbuMFauP2ugTpAvE1uRq313E37si5QUecvRWx6Sxs4zH7FmJx3sTStigooToBKvpvz8mv",
  "key22": "2DhaKp4LDM7be6Rzn73J8qQsEN7JcCizQP9tYiWRCX4joGz6VWcHGVMLRcWxAXbEYDo7tk9HMX6v2Cfb2Grhp9GX",
  "key23": "DBNbe4dniZ17XVt2unjuHECKjpL1k7iohdAvFmQWH42taEP6NtRCeDZoew8NWD5TLoc4KyxJvkFZu1pwZE38wGT",
  "key24": "5tCzw4FHp28p1auxEBhijX1Rtcr6pUn5EjbHHt1oTuKJ4KL8guaCt5PVARPXmKy19XcRXTgf6UdYU4fwBDNrCQJQ",
  "key25": "4oK5jh4sQqXWTq9KZGHBavjiS3ULWZ3k9mU38QwcAonRLNvKtz7x61sjiAihvqR8HNaQHzAv75MR5eiYggULiiPS",
  "key26": "5kr4H9QGRcBWb9FEpmARZkKMfJ8rHCKXE4v1heYSoUFvR7LmMJjPRzjZf7hXB34q1CNez2ZfY9TcYKweWxgzALZB",
  "key27": "ecnezCPQtQ4SLVhMjdWjGv8XSvHQi4mu4yWCmurs8cPYeoAPA42CxA2EsvLtKg3pGCMrfT7La4VKSu2h3dUC3fT",
  "key28": "2etux9Gz63S6NmmyxhCowTtLyc6dFdvzkgD96vkSiN6Rg8NAbuCQbViuVPA2AR2yPe4BczXwVyrS4c9bhDgBQbgU",
  "key29": "3iPY8BJBMPEGjJbQsGGa46KksLufMc9C1YbGo8T3x8hF7vkGXm8k9djakGZDmjgDKc5AJdSY7zsHLBAMoRtndfQY",
  "key30": "2uqWuGtQ18MxFakszxPg8xHDNDhi1UNCSWHf8GxjwgJZodJyshBrDyoHDJ4mWeZZGCfbQf425WVEkifSNAHk73K8",
  "key31": "wuGtfuvZUD4mdSRHijfhWpVY7QtTrkPkgWg787ZmXXBs9ZQnp9hWwvSd2BGFPgyn7Ca52KG4uJ8q3ywPZD4bZpJ",
  "key32": "4SCdpR1hduhPCYtRzFpKgaKVsPUV92Skyr8Tfa2iYbjdqHyiRFJ7dcHVpYkHUMUNGrdXVE9AeuVoCFwzCpLiNF6S",
  "key33": "33xSMyQkRGTCAuLJigBS2MUeocXuRZyfF7evjiLdNm9TEpUtmkRdZhtqBFFSQoQEAvKpA1cz8FSKmSqVgWzsGnuB"
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
