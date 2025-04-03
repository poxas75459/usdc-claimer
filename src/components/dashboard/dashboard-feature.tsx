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
    "2zrXtheXZrzwLGTfYBMZU2xtYitFNkNyb78V6LTBxoSZSVRnt7AkzThUKV6omBENedQXvtKD2X4HRy1FGeAvotFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kb1Q7SFhevusEGFnPs3o27Vmjm1p8zkTjzjkxCfUzyHbvA93bAcZnu8BEvUaMiaCmKK6E2kjxpBVAXkCLYyRnhF",
  "key1": "gaRHqiieJiyT81dE7URgyxjC3cTXLiHeMzqT8rXExhqWF7RZfV5eKvZ5bNxwoX4wpLn2NKLpnVa5zUfsCYr3jTu",
  "key2": "3sXkP2AxLAx2va5Rd4g6XrBcxUUWmsvMNpXWTwQrd6n38gWFUsyGiFuUvPHsyBpv35GVeLE8CvxUPCryWj9gkvk3",
  "key3": "q3F9ZYAWmnJfQApmAKgKsyv3FGnLJQZ1wfkkRFNTgYCxB3HP6aSDp7vQ71QsTS1aQodojAiW35TfAc3VpJguJi7",
  "key4": "53DdQjtvwmAMFmvNZvDNXrUYp8nhRy2UDQGcHzXZATNiiMrBoRsGj8QskUjb5vDTxrq624vpaWRh9ZXJhqQHLr1h",
  "key5": "5LoSm1if48QCcTujVSTyA5hiForsGxSx5JxVd8C1u5QXgxU19BmsfH8jwXg4BJ6eoA8xs7U9Lms7va1NAYqhhEvZ",
  "key6": "XUcPW6f8mDdqdPce46Wcb3dLG7XPYCmqfdCoaL4AhaEafVCvzBBqgmUpA4sSd3cexb5FEXyuJFcNyxMi4VCiEbG",
  "key7": "Aukjm56c4N5GEgd5w5NijU8fXdGs5xyhfkRbvUkfQEc8MfYdxYxpTz39kCuLLixMd3uddUEZyCrjHXANaYWDUrX",
  "key8": "3EVB3kmNGjoumzKLfBGM2Hsp2ShJCdUc3VMmjfW5REUJhKvURmhM4Hvpi6aTWaSUVZoXBHenfwBAbVYnCJBNe2tB",
  "key9": "2zf61tCF1kuSNqRvJYjm8HTyJXrdxYzSTiBn2wKdnVAukQBnA2XY8Mkd2HygN282b6Ugu5bZSgGZbjHXoCBUE5jz",
  "key10": "2k2SHNvro5yGH315S652fpzYMytwFhF7ZNBiMw5MPBL19B8eU2FF6FsLeXNUJTvjnNV5aeCKQ46WG9QAcnuUkLbv",
  "key11": "3MTxKeeHB6q5HdizLYzwnkaxnJY3wXB7BDLMGqTs5XG33n8tH8n8HPnHqJsYhNEoUJCt3kYNp7QtFW7vs38iqAJc",
  "key12": "51xzKrr7F5bknGL3VaB11NqxHoQuvwmwRYh693jCtNdjbuzsyVEN8dXfXDzD1oBa35vvwoTzfriWKBEys7susRag",
  "key13": "4RH2d3KcAsFdPSg4nm2hbqYeRm3YhPZLUqEoSTgpnBqTuJ2B4qoQ5KELgMnLTq6iwCtms2SQ3c3fyTVgqBcuDE4g",
  "key14": "5Jgr35wwNFpk3LBJ9gGcjb7pigSNJMnTT2qbzPw2eGMen82ZgBWTZkqwJWBxumVCDByQoFwARsV3aDYG3ua3PkAQ",
  "key15": "4w2q3iLFtwN8eTMENx3DiDdwtnjVbtjxnC4pCtzp6thNcpWqUL8k4YgmhREMc8kvvC6f7XdufefdMVvZdcNxZECF",
  "key16": "4Z72mUXoJ8JVFWs9KcWFZutowpJbMKmydyKY16F7in2f7dqSTnbFEWr5YVGk1UdxcMPEvYuMakpKAXnNJdpSjw7J",
  "key17": "3XNuqZVaoPcHThCNHsNsFE8fYXyJPeJzjpd2QJ72VCATbvaQCQrvxbCvhS7gkaBCt7oPRbi36JAdJNej4Bp2HabK",
  "key18": "5ErStEneffNn7A3zMmKGBUpK3SHbRw1yYroZVLmxsQij1U5yNVC2sim5xB4LuDzg9ZHwYoAnEqxXwJX8svcWUseo",
  "key19": "5zHxgymvAfSHgdchLZMacarDAWEym8Ev6feMAACLcfRPqHbCxdct9ptXffyVJ8zJzFee2jhjsM6w6kXHzztksy3v",
  "key20": "5YxCyL5sTmLdH5WVbKuZnYbCTpcvZL6t5adsuVR4m945YEgZBpodFKA1L7JgMxfXVnSY1GXNJ8rc7PPxUynBzxXJ",
  "key21": "4otady4kuMvFsofDjJnGzht3w1oA8JDgaWSnH1PSyRWJ8sBWwnLDevCPX8QTRSbWJKTLJmFktH6rGwDzgcF87BYg",
  "key22": "5DoBSLE5gHFLqJ4mtPnQp9PdVDXCgPdBdnZdVz4wPzxMh9mSsetnmwiGyhGGVXVxrY6ddaRcxJmDAQ9Y1eqfW8f4",
  "key23": "5Jsd3TUmsDBjVHkBV51T9H3oioAukJVZTCvgXMRmKAMexK6ictvmSbHi9JrybwMk6NTtyjTJ5cF445D2yhyZNXWi",
  "key24": "3mLDZkJGBujr7nVehZgC5JXFLAqrgQNudbSqY6sWGiwEtdgK2vcDjCyUuy1ZcQji4h3JL8kA4JZbayeD3VQq8Whx",
  "key25": "Q58fG4j8dpmL1m2cvZGQcXZFCq5wj4uXnmauVEXebByV8B3PCHhY2c2kZuf8mtC4Cu1qjoSXkUS9HyrFwAQbaLZ",
  "key26": "3vt867nAsLq2JjDfc5463FdPanbAnCPNukmbPqbMLtLQBgAcJ2UiFVTP8z52cXwVXvCwXtDzosjtWxv8vp6uLg6Y",
  "key27": "Sbq3ViEi8UPszxSQyGksBHsaQVPmXudGRbdTwr163EaeoiRszZsxQ9QKExN1Udaop9UyvR4pdi8gYGxX515jqLW",
  "key28": "3NewAKMhKnxBJ9SCLMbyuXrgx5NKfCH5T9fNZ9MH55kn4yHnwV6RSC89UdwrJZoX7csFkAjpipuWywgnj9c7fGE6",
  "key29": "2NjUQZne9d7wAWdhDMFm9Zk5PY3kEMonqmqePwvGFMrCzRN8G3zVXzXm6wzR3fix8VJ8gJXsxfib7YArszhnFa26",
  "key30": "5BUjAJuMqU14VqwtnqJtrpyQ1cccNpqeRPHbBGqLycYBbDFZknbCtzTiNqm6wGjBorF4qRb8BpKRzLR7uTwtL3wM",
  "key31": "2YECvTU5gtWvfedGXHWXcg2bm7zgRiFKGfVcY1y6kxn6SB2ay91jHwA5NqppA9meynV8ugzuA4jrLRPmr6JZA5gT",
  "key32": "5N4bnaxLg3kXVZAuJsd6X6zp81Rx96fAoiZyWw5kE8CQU8adEisiFG3N6PNnDQvn6beu3XVH6XHT8aoRPa9noaS1",
  "key33": "cQKFSXS17FzypU6c4oftEmSfReoRuh4tci5Cod9GqyhSoSdjvzij8D4k1QZ3yoVxq2oMzQbptcTcc9raFKidCnM",
  "key34": "2biB4Tz3xE84EZs5wiuxtogVZJwp9P3bnKpQGmn28zDj2qL2HVFmXEpRwuDFM2tshraxRXgAMa15BT9sNEesmZt3",
  "key35": "4AxsPGDL9H2VLJGCa9odosdoQvxXDFnaZeD5ukxovXfn2H6VUq5M3Yn3SBJKuURZ8TEeYT4FLwfbwZMkwqgtT4c4",
  "key36": "2c2H3WavseqWZ32qbiFAqtWUfM3Rn1nVChgf8ryPMzwXFeGRyUh3FvuAjSnon613BrHFgAsDXh1fgyhkT1A6tZx5",
  "key37": "qeXTg9Y6TGEn2rCsmgMQXqVBt4Cykii13DCMHZ6jrnZDasNBPwWys3d7zZ9oFyukMNVFqw8MUJ4AqRMCnvciWhg",
  "key38": "2MAxyz9KKXeazk5bULzRkonxwBoN5nYLwgNzEYNDV2F4mV1ftTU4DixqWMuuGVHr9YM5Z7H9VTRYGgwzsmhb3yo9"
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
