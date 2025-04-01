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
    "Vax1kvaaYgWsjmM943wWEDb3UBE8CRY1BwWLTrz5ko1GF5Nrdsh4FZDxUPwciq2JcC7QHjSYgVo8BL1umytpraq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "syBvV7seUBjYn49r6LmAvgVkWtE8A6xSKwEdaCQH5wcxJ5uRzCYGQqES9sEMdqKmNVdB2RoinCAg5C4Tx6mxu6M",
  "key1": "3pNaBDxYtwMfP2Ni9gZVLCNsKiGTtRARhw6yWrNR59W2oQpDd1HajFXyByTif2Bttzp59EjSVmfqmGXmEZdHs3Ef",
  "key2": "4t4PE9yuVqyJXtBkLHit2fCDTNVYMPVJbddDi5SDpkeWfpspR8hP5Du8LMGy9HSqteA1SVLnVbuHNFRq3anoAn1X",
  "key3": "3mM5LMPmycUzYnppSwgPUnVWBos6Qnejzw7NAfXcxGELxhMfXyJKyirNadW55Kg7kUGZWUaNSLgACLFXJ2uXP9FN",
  "key4": "5ZwZ24xoJgroAYJqqw5uoR4V7i8XJdNMdfW6EmvFd1McK7w7sSwQNQbEq3oPt8osX1U7a9wVjxurgJf9rdMnkFQc",
  "key5": "2FUUh3Gui2Po8qQ2ywK3Avr24L2AAhzkdDfiG8hLVRsRwZaa42h7NfdU71wLYDigFNpvDWFaFq7vo3uxqnrQjpFa",
  "key6": "Rzs8cZkMSN4dJiME7xyiGqsfk2SpndXDdALAzxUg98rYczRfXhyJi9eNuKbNgo8xzf66chT72GGerb38ZAbzHvf",
  "key7": "2vpqUtJSLa3p1gDXUUZnA1GhUJVYnVWwa4puWyusuAGzx4x2WGKjy8LfLQei8ANwwAnGR6rVKuRP9W3qM5VM9mZp",
  "key8": "3TNjgEzMaVk6L2EQvbSPXcVg9cZuceQskAMUSD4Hpw2vrQujsArDYXMKaMj8ZThKLPpZnwEuPMYhuoaEZE3bE5nJ",
  "key9": "26NHrR8KCQW7B9Xt7jSKPDEK5h65Hv3BHpvdjsu3sRiDYH4snmMbZuAGuBUCgpGYKrRGhikJuWLuMjfNvaeE5egf",
  "key10": "51HnUdt8som9sK3aNvVsCQv8yZ7VoHcjvi6ScZfdU2ny6EoHjFyzZ2nQtAkBvUhi211UzdV5sYw5TiL7Z2fs5Urq",
  "key11": "tznPmtWNULxLRfhMfiVzvysnZjGv7TrxQpzj3KN4zTkmq5LDYYTTan7i5rWPKAyUf2u7xnnFptsHTVDR5jGzTKB",
  "key12": "399keWVR8Up699FGtKMvzEREaY4HpXcjJNm7LFri4LwW8XU9FsfywrVPrUQ26ZRdRTDtEpSvZDABMxtu7Lx7Pcb8",
  "key13": "2Z5EQyQKP1gwDeJqsYKxQLM7nncP8qANYQzgzDkb7r6fjUAWoLvxhhyG78z3udZ4DCXY86LUdzirHx77rmEpUg3K",
  "key14": "4wH1V5bSLMTLeEHAiWxBhhjF4bHWS9c69Q1Rr6MMQvA7MdbKBn1s3mTf2AtkLu1erDq6Yb1fUPvs5HTLFKvVAwAJ",
  "key15": "VYyu5pw717p7a9RXhRXDUbdhV5GxEakad2VGePW7tBAqceyQQHJ6Zvy3UjL4ZdGdRMA5Go1tbyRzp4pQskUaHRg",
  "key16": "1Gjg913UmmNxRBoYhz5bovwMmuzUaSp5uuGhZQwQXBB2i7WkoDKHvpptaoNQjwDj89rM2sqoaKiVH6xgYnJNQ4",
  "key17": "2XFtGaBCp1rKc3zrEcYSvwUtqpMiF6ngwTn9RswCLZtK6Wa4KphXphd9KyXdpXEURqxmMR8xb95sskZts4zoXByp",
  "key18": "5eXY9fmwjQub88k35fcBb6nDcRYLiEQrQLoYUadV4yP4EQB6nmFyj5Q15eGMrpomryfousueMfYRAkn8UodH4c47",
  "key19": "2gf9f9j1HvQZmrMy1VAwbcCHnbyqtPyR4h4qgr6s3KeYfsKn2RSsAZAn36RfBZimzbkeb5zoxqyhgp19jDa6VyQ9",
  "key20": "4cyEGWdSyMDqy4woAybr8sav4WbWrJDsuSTJE7wdfUMtyNAoXcRbUuV1esQyfRVC68H4LFJnU5PcjhTCuxXJTTiz",
  "key21": "BYNmroAVoC7ztFUJa66GbL2eUZ7jv2oERr29YxZJW393kpQGmzDDJGx9A5MHDqLqMGtFbc31BZ55TvFM9MoSQcS",
  "key22": "5PPgk2CdHfaVV5X19MECTYyVztrLFiCSmatFmY2vE41XzZzuC1mMh2CFFuK84EQLYiyEGB6FQAiDGV6J79bkZgG8",
  "key23": "2QcLTarypjQsJVupXWqsKf69D7577urKLPv8khvzBzdDkhBdhQBxsxChwmACQ2Jo8zXYKFj2P8mHzMxGQJA9zgWt",
  "key24": "j6xi7GTMjAWstp8WWYH2CsXxkZH5f1qCr7NbcYUWXCamiKdp92BNB4SKsEL5atTq7PkwdRbfpZ99s6YWfNYNuQt",
  "key25": "31rUweZp9ddAD2kfpwKQ2TiXLRfgHTbQdvcsr9BobMP1vGaz8GSArr1NoThdKm4x6veyiK9nL2UCfsAiGLLYoBkt",
  "key26": "2EUoEXzhnmj6ZAQnpKiJAXkd2FZd5GBFNqirACu1mjFXtUFWwTFvoy5ZmRHg2ARHt9j5c3dHJkUWA4DLzas79YZP",
  "key27": "2qdHxpkDNGjDL1NyAzinLU2oJsqj6NATahrZoxEUN3dAjscFEJVjjDamZHmdgaEEoqbB2SwVsHbvHEQkMKBaqddK",
  "key28": "J77EHMe72cKbZfFAdb1Q1rnvweQY2UNZ28xYP56KcgnnYynMXJv3JxbyeeVQNHR3ExxLhqRnyxq4hMNtnbYnw6w",
  "key29": "64ukormsx7G6EAvvfnnNnxugM3voivqnPmCtSDkfyBMo2Fss2AadPmzU3KsCughRqtEmzgjNArNUmQx23o8tcF28",
  "key30": "4SpxUhqirshMFR4eNUVbPSWpHKPQ11vDjf22RRJmnHr9YyQsWg7zHsQeKqhciRxCHbiFXS9jnyyZ2xBfK6WXyU2c",
  "key31": "94FYjaCd1dzp8uADXaJhzFzbSuRjFq38mphUyV7wz6o8uUuL27dXoDrkwkvRKJPzCoavVYjGAMd76iTRJjAmkYE",
  "key32": "nz3HUjLAk1jNugbSQD5zTjb73w1ifbMjwK1QfyYTzoSM7D87javuy5RMA5FiPRRwvSt7Ynn1DQVTy1dMq6kyg1k",
  "key33": "NoBck6QWoxA2aeyoDfiiHhjsYjw1LxJzMbFVmzsqYAD7vV1SM7f7Lx53FKi4yrZYCVahAyYQpjp3pXAn5DAiJHr",
  "key34": "stPxRx31KS7RpMNsiKxbnWFuwCmy23w8PAS9XBYmXw5YH47QeeDeQfMGkouxHcmCAt7ZjSVq2vxSJgqkqq6HnZW",
  "key35": "21yEEFgMBbKFvsqzDWSPQcwjuy63dTdWDvNDR3JZGxA7HbfWbVHLhR9R6JyK7GrjS3rzsCVyX4cctm6NJLsqfJ3G",
  "key36": "59ADJxvLzwpDDaXhyD5yExPQM5p6hdQLPvgkYg8xWjfPLZsr2v9Uk5LyB9VDb2EywEME6e6du16YMxyHqW34vghs",
  "key37": "4tKGJgFUJV3W1yVbCEeapDBZ6KwuhKaoCPh3cjcBqYHkhzR162eZvq9tsKEjgpsLuVAawCVjUv13EtG7txtKFwBn",
  "key38": "5n5LoPJLW34FCnXwwgNFuhQPLkKj9knLp3zMeQxSc6V1w8biKiSzjRtGRsPf3mgx1ToMtsTjym4RbkS4ZzeGie9z",
  "key39": "3DNK1KZcdT7mGUJg2PRh5uhjPhGMmfompUoH6iYGHS9e8T1R14DxCNPmK6EX1XHt5cgTn6RJyYYZfXymcgsgBiQq",
  "key40": "2LdcWRB4SD2s9YKcwryFAqNZ3ZC6crtXcuSySGEumwFt9a6te4nV6qunnHxYBBaDYZBpn31ASuv56LjjHKSMqudt",
  "key41": "3XCdMS2AUcXcZHrQid2acyvARqmS1BLmMaBN4zaoFNLTacMCqjAu4gjsz2dqXFxDKFSKL2vtgq7TY5fjeWRFNAKY",
  "key42": "5drDyhBTFMjjEhWCjbGoFJCKGvJ2zsZ9e89aZMffxuZ4ghUjE79kxzF3CayMVxA7zu7UaJjsDbPiSVzphPgCFJ5K",
  "key43": "59XZ4creg1zh8chWEEFjmg93Ph5mMyPeeaY4G1u9thggJktCFY43mGzmraezYkFkGto9Mky3q2wpHCz91VJ181QJ",
  "key44": "547HkAnL5R7d1GPKLZ5SPfxjrNfnRbZViw8G45SjKacCpwsEqCC6gDmaSmSub4HYbw1Leh2zTq14VKUbYPxB5v9q"
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
