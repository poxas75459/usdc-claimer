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
    "63Ut8ZYqBzx8VrfqSwWxB9nTmTEqzX4xzr7K6SKYN83Jgnps96z8hvwKJGrVCaKncDZEHvUm3XKSb8mxtwkK1R9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbsT3bZyF1tgBTcnBuyWH5oD5JgwkPd3PBpXc1BC4ix6ovGcdvP5kYrGNte36hvWDgciM3TP7N6yqSyzXwEEt6k",
  "key1": "2CDD3R8JZqwsmykcB4TKRZzukzE46LLFU1VurFVNg87N5dxQ5aUqjAhJt5SmSEp7mbu5wxVU6YiMxRrrBPudzTvU",
  "key2": "3EjLdFsAz3MmqNLjMqn9mkJks2CGgrV9sZTDuSaxB17nzhps3PED8H6GYfoNzPnFGQecQi3YctC9AAfENESk9GyQ",
  "key3": "2Bp1TJg4Hi7xuqoQtJhJ96Q9SHqYWCtYsEaX3Zqc5RpYDge9CF5tm9s5tEkXnpRt8m4XUMQQMnDU7QjCnpRWX4Bp",
  "key4": "3kJPesKqBWSy77FDtT7rUr7VU9GVyjwxkRJYzuwASEQKdBnvyiLiDiw9yFtAm4rxQVfFNyW2wBnhfDaXCxYJJK8X",
  "key5": "5KgirZznjpwjUuy3jjtEukizdeDfLLgaZYdtzfHuhxP7Squ1bvaGH3a1eQzzsPr89Wup4XdpeRjrJCsKLGcvaVJ5",
  "key6": "3vE18V61u43y7Bx2Aawq3PLWMMv3kPKM9GqfwfJU4kh2ibT4tFZtsY7eyBfjXwWd795rXJXfgPuBosxr8zXGXK7p",
  "key7": "BFD836XMKb2uX9GWPx44jfsh4CGGqYAPQw7Zq6RjobKCm3fr2U7PpyZfwenX9RCD1oNTs9z9wiEkbdE4P7Whes3",
  "key8": "5kPz2PhKRqVu48RGe3MAbUFLky3oKqsRGViG3SRLMp5AjjZdJ9351VcS9HDCs2pHyR5UipoW9NYSEpUM6H3HUrCY",
  "key9": "DwPWk4wgfNmHdiPaRi7eU2irGsjzfEFKGWSvwWbVmmHNbBmktQDkco7FS1x5aY1mTcHHZ2UqziNsrdj1rXE6ijT",
  "key10": "26kZ6P3HBNvnLQQdM3ETnAiJZgd3qcTN8nhxuGNfi37odoi1VHWuyTcPzvD6SmfxU9TWV5J2UgKdnN9RK6q7uyLa",
  "key11": "2rpcY3FPniFwYiAteGGraL5VrEJoUM1eLHiniK2qENNTVA3hGzexfHkj27GynvKstCLe4cwx2sd7bTCdLhk4yoxm",
  "key12": "39S17osQwq7QExcoGLcDdgV45DTdsUn9Vzs7XutzSwPEXak7Eh1zv57fuujLRi9hCN6dE6jiCazFfXqaeWNFitUV",
  "key13": "5bqDk1Hn1V8hCQCUN7jrQiqG7Jn9F4djh37X8xycZ7s1Z7iwyamK8WNntCng7iaV87wRKXLSqsZFMDGLdwBY7ubk",
  "key14": "31EKsfP6VLQyphiqFWHfWQAey7HQcY6sgM2Wqsw9cWHzmd82tsgZAwcqsUS22JG2qCfToWU1GfSqVDSWTKR7BGMP",
  "key15": "52zDoWfh4asnZmgtpdr8YBcTAgjQw3TTQpRfWZ12bTBDaZNHbqeps88Dg86AoT7XBD7vAqsmF52BXcKLUnEzfmPj",
  "key16": "6AVvieUnpLke6johf35Pk9f3zW8b1mwaCf5Sxha9CKajfQuwi7QR2cRttncXNYdGKXXgzYESst8ZuQRVoVyD3VJ",
  "key17": "H7VpAkaX4vswtnBuWNdGtUDvvRksdKp3KD3s5jA1kZaLhemgdHk7JDhjdDG5p2pJJEqvJeKYR5xfyiZoY178w4v",
  "key18": "3s7CQDnp2M8Ng9b9ykuGtxpMCU8nzzkqZ9E357DDJaXtmYA8FNJieQ9NTrkj7WwJip5XQMqGoj96MyXHgWFjt7Aq",
  "key19": "5qbnvvsnKp3Z1kzhidnokmCvmr7UeyR3pScTMYztXQnDTw73P8f5UQJWmvaWD1fVWF2HxXFaYfs9rAMFQW251zY1",
  "key20": "45gBeTESo1ooW2QRE9XfrvAr6m8hQMwmvhAm96dvf8CvucvRVNxjMUV2oWfM1g52HRqEwPmGWWP8BiYZePgEGq2s",
  "key21": "4ZhjQeAQLV6WSA3qe63qsHTraQkUfWvgBnwYxdoLniirNdSGL8tvzzdvK3KhcuARNj1HMq5f6ntMno8a4KoS8HDV",
  "key22": "5rzPc3PQg9P9qccW9Tn8Ca3GKy3km4Ekbxr2DFZqUoaGHACkMFTpgPTuMMzMjhgkBKJJ1MQuqSMXcR2EephEJTn8",
  "key23": "5gVvwUDGvoMY7tVy8m45Yw5hqPbcFW9ZuzeAfYpLFv4psxMo2Q65bRj1TcnB2WHE2biMjqwXU599PeP7H6eKkhuc",
  "key24": "4odEqRrwqYMiqzBaXNx3QhmHzJeXqL7VbRei1M9RE7QLkfUByHs82N8dpgX3TNKvQcTmSoY7YyqsjtETLKLAM74i",
  "key25": "5FPCXa4ws3JxubV6Tp85gZ1pC49ZRqgK9F59gPeScYnXyeduHnM25DQHHYAxLGRH4aL7UKfQQeAwLJ5CGdiVVabu",
  "key26": "2iebRpa2XitLLWZMKqits64L3oy1H2iU6d9nCCMVfeN33xfi7VfcCTeivSLYBDBf2DnfMizjUBm5B98AGkfZVCUP",
  "key27": "2miWK4FhXxgDNGJLhUA6QLDAS8fxUkTtmLxmRqnwJorteKyRsALs1nCZPSTFCe9Ky52rNcSFdZWDgzE1iWPPsAbG",
  "key28": "534KrutUgcegh337vhvjnvhKMDgc7fGfY5RWiCxZqrFK1nx6VBqXVur2jUTk7a5tfJnWWDcQigJoYdyaV61gy9ow",
  "key29": "L168HdEoX3QmcHmWr5sXfrdLpk9HNnRhengPSZGkk3XByRM9P5sr5eHL21YWYYSeCLje6CVAyUPbjbK9NXy9Nyq",
  "key30": "4qdmpXy5PmSNPuLkKndfVBMqfBj8Eyp9ADmTEJ1dbMzeyYHR4Gp7YBMQGb3JVvADr144oxCs73LrXxkEsJYFuzfS",
  "key31": "4LCs9Rwg1Nb1YaURMgbhsrDgpSiJTKhPaEke8gBizRdgRKTGPUWmuZTYz5qHTiagEC67Egw2DyDWYVXyzJugYQZt"
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
