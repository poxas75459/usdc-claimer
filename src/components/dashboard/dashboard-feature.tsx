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
    "222B91bWNmwXqDUwqccbRnYLp4to3YUETwqYgu4dxY3dzvvDdNVSCaRZhpqBsHUmM3ZurFkG3LnR6M3q26q7NHVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55v6FsziMEsy3Gc2aqqbbwUjJkbx4AsPX32HPsUxGgV312icmjEB5XgDY9iVPtESzaKYaZcK7xgq8FxuLaMwLwsz",
  "key1": "2iKitMdeAMggrf7WTafWzqX5cRnpXLEw8tMYiz1A5fjrHVn6H89n9egJnd5ZpqpJA3WvaHaDR3i6GnvTA1wtWb7P",
  "key2": "5v1PPyyYMo161fRQY76X7cPJef2L4CFYgu1U4PcTxbwkBoECLctk6RxkiJSEpGFTvWvU4hNTfdbRKS6oi9Y62GH",
  "key3": "5TiQVpCHcWJcMQiSt56hiAsquoWL26WCjFTWpnYgSmypoA5sqgaZR6Xyhet64ik87MEfFDv38x9Cg46W6qYQjnNU",
  "key4": "f6Xyq3pAAGx3e5pabvwBjDD13sNNHyyWtWdgWvcX9r5uGzAinG5Q9ow9P1Q7KCkemQwSXdXPma2EwVzEh2uvU7g",
  "key5": "2ePpJVaD6kqm93H5m6skpQLV7ii2dzh8tgaMqSMrHxJch1rhoBdmuq2M6KPUZGoNniEMTwLcJknPEcSpEmFQrLGd",
  "key6": "4jRV3yCg7AN6SsgGyHYXsMkQxniMNYLgCLR5DG6eFaPJeSBCefdKcD8p7BVFUAhLnJgDMEaeq7uu9eYPS7AtHQNq",
  "key7": "2GSj1u5Sf1aWXVeBHrsjUu7emh3arTudPpqoDpqxSynLPdaTCdqBUDdfn5n9JDKsY1gEf3VsU4EmzKzMViVXtZAm",
  "key8": "62RK9ebob395uKxfTUaTsFGYzCjnJQKCQGe6VzZdeZS6fW15SaE2v6Lot6Loimd28uUYoQMBnQeeb6fymH8rrqfC",
  "key9": "5UxfZFZumiopAgmq4eWwceryndxx1d6w6DqsNmotbrgJNgWA5eBm4dQhXrPxaZiDcuWSqLA8gx77UHh9SNuC7wiv",
  "key10": "hVWf8rJvwbaSyiZ4DkR3mcfhGJd68etVt6wVnJpxmiTrpXgHamSu4GbW3jeXNr8YxckdCqjopkfPZpuUbca9Mpk",
  "key11": "4KtpTBoLgeaSw5pL3fQo8M2cdC4UU1ZgLQ2byLdcu76xZ8gXpxpxP2mTT93B6dDteYRsVnLZVttxkqkiyN8AgNKL",
  "key12": "4295Z6FhMK6189rQ3nhVERFGQrNfSMXyWzFhLZm4nwPmsGKvaU61prDBWzPJ37meUzSqh1zTZk5wp1Z43sFWLwi9",
  "key13": "4pE3dBCndTKjRdHoTKiYSqZuTfDUqBU6fDkCyiAEqSdhAXJtajKtRJRN9YLJg8tQAvoNcLQysfHdnAPoorE3UMo6",
  "key14": "3QJnyMYbtvfe6Ahyvm5SXSpQPz1NJo96zekanuwXLzNgzpXJ51e6M57GHRAKCxP3mUpaXktdJAzKMNKuEmrs8PPj",
  "key15": "22iMkCbLGqvewjY1sCCeXUCkBY4DkLQpvWZcMNsFeXxvxE2SUWfvwu95W4QLvns81W23bUuc936QBR7pU9KAJFix",
  "key16": "5kYKDndAfcbZRSSMtZZzBsBykrAksxxD2e48ptS2MqE4j9S4ZFV4eGEf9w6qEiPQD9nbMVFGoXfYJaVUv4n72gYd",
  "key17": "4B47mbdwHr4fzvGKsDBUFXxK79SbnNobhrKSzWaqfP4Jaw1RjcpWntssneZioaGCMTTMn42VZVHJwEh4JQ4fCEUa",
  "key18": "2B4wLEU8zoxXQ56qWBoYbS9pb71ZZEZvgWVU4NF4fgLiG53DEudfg7s1LETffiajbnVdac5bTyp3KJGZRMHTRQsL",
  "key19": "u816efefAtNo9QTXHb7cuJcF6ipiFS3cMCxJ99PM1S49mTHBYYG2jVVhWcTfp9LuC5UGmqBrTiiT9UK8bMbLtuq",
  "key20": "Aw9jSmPEW2rGJqCH9Pymm2LQMJJTB5RUNHaPRpb7SR2NjW9q9G68bqSzXya6zL24NZSAGJUwoAytjU2Pbxx75eH",
  "key21": "5Kw4Ubra4vz1gds4c3xtW5HmFoNgXMFb3W6tDDBdvfoTfe6XzXkxJUH9tHNp53qbDkSLzxfFp1W23HGCP29DjaPz",
  "key22": "2qRdtAy1ahioTimcWgWgd3W7QZX1UG62nsLGygF6XJ9oNe2qmbDtdYwFAj12KkjsLn6cWSzx2Erd4h2xwpb4uCgS",
  "key23": "3bMDtHsM1TJAFaqvrjNbai8fPZjebg686BphjAsbvfDG4GqM8KUnsyFBvUZf3XV8aVsh1X9ATtcT6LLv5gDdxoLM",
  "key24": "3p4AGcVL4TEsPBmBpcfKNMC9hH5ibcQaV2WXAbbRj2vdTDpdFUKEqKLxF5YaxxxPyf328Kcds3gshyuD3CVWZWig",
  "key25": "cnJxTxMrBnBRKoSJJKtaWrQnWDSS2nZ9fvMh1bvLMK6KvQgkJa5faKsWUSAsLqD3gPdQFxScbRk4uKioAm7QxY4",
  "key26": "3LLVYex819HhwdVq41TCGg9M7drA9HJHny6GZSrsUMbHXV6tceDTJqprUw7VaRvxJu8M82g6eh5shAniYtNCzqg",
  "key27": "2dB9Ly6RQ11kTSXUZwYj11MLs1QHuRkCProiFoMfVwRDxf6AiRtSkDCutWfyuHvyJZGCY4G24JWxjPshHQiA7qNP",
  "key28": "2D5KFioy3XubXSMywqKPdVrEbpL76iyHN6hZ7LVBdqjoZnndmn7smmzSCJBrSaHFeFYNjwCQz8J2J1ekFkM85cez"
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
