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
    "3Mud7YkYDiqgqqtxqAHufVqLpTwUBzwfRRd6aASc24autVaUnXSSJi6SZjkZDfZ3BMrj8ANcZXtKioybA1rwW9GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GXwUUVtRDbi9dhG15FsnwMG6fFvdzCRoL4MRyz88k5QLwYDVvJapfsz88R3U2rcnwsgiYWkipZ4YnQ76LpFBek",
  "key1": "99z2FrTndFed56NXpGMAmTjdhbTihaEdrE8aeFJB7zgBL5e1J73pofzs9UsgH2xHoWUGD9wGe8JnQgCL2Caq9c8",
  "key2": "356mzzwf7bhVUMHsSS31woLhi3ntskYxD3wkebJqAGXz2mviTFdbbcpZp3DsaWqQVJYU3ojLeATDPM3gicJVbFcF",
  "key3": "59LTZA11qF8XwtkWzHW4kX4TSGMM4PdAPLkBtD4p7yQhsTxG14X9FtCx1RoZzV7izTRx4DSK7qw4uQnBRoExGE3Q",
  "key4": "3NGPJPn1ud99Q1ioocBijTLJGz22Q8imTdjxvDtx4rtymuSUpioVSnDTprZqVLCoetJcirXWA8khb5zsziBBMo11",
  "key5": "5KucUZFhfvRVpH1JpnuCNJBKVfVw2W7bQ5JjsfC7Wg8qqVFVHCFLRPNDwKiAxs1kFLk2SJiZY7EcBjgY7bpYXZsZ",
  "key6": "SgbxeVX5mJu1fwcEVXSb1w6UDL9dTdBR1RJLi3nPTVDSdbvrvzLqj4JXPAEyBCnQgq49uRWxyb5oNZ4mgyWtoWg",
  "key7": "8GA4r44s7tEDBqhTFSsuy1mAqWLW4t97HLXgsh2TxxmFWrPnmLeuXSB5ko8wLpcwoV1WVFudwM4nEZkmNYKgAgh",
  "key8": "3wGrAHKE2jSVUPbzjYGe5ZiiSLS9PYh5DcH6rGZHTVZTyWxjhCac4Y52W2Jiq1EiKevVVDGMXqHKHKqk1huDyToB",
  "key9": "2V2nMmogwACx3uqLm8NvF5VmkLYMNBKUcWCX9L4x8ir6g6zRESuq5ffwkze5J1mi4pd11mDwa7jme39EuWeAiRg4",
  "key10": "28QbMa8dWqZy1FQYPAvxGjEiswd94iYupec3hAikJavzmGzxRAeok5TV9TWCYuhb6os9BNf2ps9Bjoh1SobU2Nqf",
  "key11": "2Yt5Vf5s57qzofyxT4EH5UofPVbySBmJT2EiJbaVLDCxoEHr2YD78VN3SsM3Pr2JNSdbcjeEz893SCPZ6oYMQpq3",
  "key12": "55VN7yUQ1FSLLkt2feWRSJ7Wj1iXyiC8VoHWu9Bch5KpPrU622DxuDqi3WezzHQfvjcnHD4qvk64s4jo7byMkgm9",
  "key13": "2js36WhP21W8JLpGZ8QEUrRvGpL8WbDSiN4Eo7cfxN24sX5WTAuZ5ECFSeD2HFBBYnTj3wxAPJDDBv7erq6LVQL2",
  "key14": "5NxwvLFvXJdmYXBXVdNngQXHBNzGevRXi7zSdrtUpEuXJKgQc9Mbd6rm2cgcpijhK3Uyu7uqM37x1WN39S63fTQa",
  "key15": "5BdhwmcbCwGNiym8SokJ7z74FSZZrCZmu1JvzBPdQuJn9QUBthhdNFzQyVUZmvo7cxUMXuw46xVqCQdXWApwYwpS",
  "key16": "2n6JDKuN7p1urxGnupXr3KkKAAUK4qRb6YPkjiVU2U6g2bikaHjU6EYqmFVmZbJe3fWSBYUzwmE8f38u5sBxUBvx",
  "key17": "SvxkbxjxxSe7g83b1bN9SrfR9LKdxFWioFsDeJJCvGZrs85sZxqmCVvpzM4NMJXnUaBGUJR3c4nxDEarDQ2L2Bt",
  "key18": "umUwTgdH1uxpcPBhh4eh7jiHEBaVQey14SaHDEsiPPzdPoFQk5dQ16phJmVHZgnWmzNEp1ufth1TPR13dDhpcSS",
  "key19": "wg7V4SZGiWzckavcFkuahoAD3ZKLY6RveqMTjpYqE9YQxT4GN3TMgYpBpQvMvJpbVw9iNbutVzqwwxthvaoL114",
  "key20": "2CJG8aZM8qcrwn9Rc9j99itLnVvPJba2Tok8C6K23BuqSc7vs9BRPWC9KPw1dEPxfDGKcB2UTFwarL5mQgrqUKTq",
  "key21": "4yyhFja12EDGziPsfzkFiJVkhGMdUNawQKnXSaq6623VxDzJmGg3BJUJ1TbZWGUMYvEkepmFkvmxtTzmvWZCuJUd",
  "key22": "36io9madACNgrVmFJNPN74Q4UBUurHZhB5AQKuBg5eSE7eMnxz4ix9B1Fk7bFwVkgeHx3aRqeNe95ZzX3akd99ht",
  "key23": "S2zubfYdpQ8kDzFmRG1Q3nr8322EohLK44TGYzCQpsuukao93Ht6GRK4Qu3V3g5HGwqAQhxjmoU4AkxLhEfxNVQ",
  "key24": "3RmtDJ5HoewN7DbQJR9nN82yLF6NjDEL3KKXkL1eu5KgB6J1ZULKEMdTVLxWjQDR9b7CAe81oruUfzxbLjPw6Eh5",
  "key25": "4VUSwgRMpmxXnudbiiQwY9D8WjKp3JLgkXg6T226yG8GkRpUjq71ifeDFEFoimAsYTPrnfSXLTFyhdHrbeD3rG84",
  "key26": "3dvR5qYd3rSvYkZ3Gz4WURfw4RHx6HJLHf4vgZ8aBpRij6KHGMb3kP5ymfkxYKMnUkKRVmkxfZX3vKn5Wp91kTs9",
  "key27": "29SiFUTWAhGNq2f1Y9LZSB25ssord95yhHsnWeCAj1aRoQP2WorBZeyqibHzfgcuncdvKjmZDYGcg273BvDrKNXM",
  "key28": "3hpvCtEDk8hEWg4KR7ajRWMacR96QSm11D7oz1vATe7SUxeeryR7MTQZywBaZSsGaS5Tqsu29iNeRkREU8ifKPnh",
  "key29": "28J2QJ3jq1CtRuKXZm7vt9PxGwgjEfi9AvDpJxrfuejKgYLAGWWRmN6NKkWTTGxxJX4vyqyjtBBbkiDX8zkCxD3t",
  "key30": "9VKF2sLSdsZaNptxWQiMT6dSGKj36GNGa8fT6oLnPRxrXk7Kjrj81T782YNFDjvBUP1SG2dDrRmjcH7UtzkK349",
  "key31": "3zo1yaQbHccYxv4447S8d6dhtHsU86kS8SpuBa15q5HeK7vNWqTc8A2Q26pQVkHaaaE2Amgk8ZhfBQyDvwTXYf4X",
  "key32": "5brSYzi2kMDFqsNeaTg4EgrijkbyvnBPVxVKhiksZZPPf9NRcMART4PHQytYL6uTH3F4T24iDti2MhtymCWFHkXo",
  "key33": "2gUzwwKs8QdPugJs4HU45fz3ewKh4eEVNK3uVpbKGzMSxFgdNps7FtDBUxmo3fA962dyywF6TsXN8YDUqwRbwHc2",
  "key34": "2hLZhoGLjfKkq31zYo6hsLE6U7TDr47oPpMZPEsqgRrAHiT3YgfHKpK7Wrfx1cT1vSrgZXxvfWpCj1c6ehga8UbS",
  "key35": "3NoCoSb3wejqmUz4csaKkUMePTnpHRo3fXnRW4yb7X551qJQmCHmm1bU88H1iyuxs16CqkkcJQnskpTJg4XQYM1T",
  "key36": "4fGkbH5XUxrC7sXHQiMMu3JqbyhechNg4vbheXN1zbpoH8PPxE1WoWgBDidCB5QaZnwaRRiVQCfQXeqNZUcyc8YR",
  "key37": "2jWay46FQLoti9Knc5fArF5GrZWpcPWfgnE3uR2Wuy6JjqxcJ1JsiDE3fmkEmoNasU5UUmhUMx27dxcti2hgF3L2",
  "key38": "3kDBSCyB2xY5THnyNnEWxu6rfmhLMpKoYWjnpHntC7iXQStJvGkGTQtryFTU95B1kkqknqrF64sXeEj4mtyEUQNP"
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
