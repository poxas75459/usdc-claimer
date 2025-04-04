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
    "2ze2wo9ttFMhaf8c5sHEb2drU3W4pdMPC4wBFvVvSXsBNRJ6Zc8bAqN9Ty4ZeT9wFu5bYw7hJA3iFvDTuxEDqZyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sifxis5bo4GHM71J7rzxuDaPLdFkcv4iW8AyL72i4qMvGbUtEbuqHfakiEF9YvbXgPSFieC8xQqjNKrfVqHfapv",
  "key1": "5SjeoPruUE1FzhHMY4xDk1X7xnfQkSrxW1cBK91WJJbzVhauNQfCx41STp6CJBQESc2KrWPK9TjCxCoNt84tLh88",
  "key2": "3W19uwuAd5cfdZazmZ6ruofMF3V7yjZzMZzj9usmD3xTKvDGryyRcZAQddVxRWTyjSkqGEDFCyuSqJ3cRNUDfcXJ",
  "key3": "4A4V43DU614Tf9xnmXqhiU6jd2T5yDx71ALDrPvNiLeyDGwRatm1z9qqzQzuRNwUrBDjFDugPqqdPSnCNKSpwUrt",
  "key4": "59ogsEpdoGhWDbrLxVttbdR57zzcU1jKyLHFwjiTEEkzwgpEYUfNfyoak6s87BXANUBBJufysfafPA5nTr1rrUmh",
  "key5": "5QDMWafhMDMTwHiGRYBuAKMr17bGPN6hitnJvFqenpRVb9am6koqZfYWt6w5u3PBTebPRzbqcZ988zDJQsmxAGeu",
  "key6": "3CTJQJ8iWgXE4wZKXbX2anPg9qzhzVmgrDendiFNWZ85kKXB3qcKw28v39uA4cRRnxYY5Fmbkpg1ARxCKqEkjYAx",
  "key7": "4nbckEYzxbqqfCbGDY2FTvHkArrgCVw9EBtWZxRSrUM7DJxqiaokALosgR6Gti17jmmftmSTLatryf5EJ8ykJRv3",
  "key8": "2zj6KTcYk8qvAn3knMyCzQf4XKDWVfh9kGnL7KgeqHtLZm57Mxr4msHYPmfEahmQeC23GGxicX7LqmziYuhm25bt",
  "key9": "2SHAfLmESjVBxGVJFHW4zK6QWFU5gyFwyvN8r8w1foCbGymSWZSDCsJJM91LqbeMTqcgYdczHbFKGdb5gn9RcsQD",
  "key10": "2euYa2h2g5HCjU1tipaiKKCmuN232AJAMWKbqSKNgxhGD7MAK1E2Di3tmHLoT8UcDFewd96ZSdbJSAUgb4kLX8gy",
  "key11": "4fcgnETN8RkUb9z4C6r2acfAHeeiZx2UhgVYsV2tssoAtXtY8DQSgkYjYhEtmAssRENcXkvnV5fr31DBaVCf76Te",
  "key12": "2sksvQXPgmFbHtTvBr5jb6pUBaFVtGHxUU69JE4NoNg2g8rSsWXfRfHS8fXn7zTGzWtXBfAuU3UmvPxET5x6PSGj",
  "key13": "3BRpdVY4pk719i6q8fbnastJwezeLvnkzYuVZhw6dkFoWuSNRmdEJdeZztG8JvpGLnRTmE83ec6QpB3xQd21WYMT",
  "key14": "28QW4Jnr675KLHsfg73n5ixP5PTBhuSsKDPFNxd3boPgY5t2rLW4JLa8F8wFFgZXBZ7CM4M4oggNWrbakAUTFDAU",
  "key15": "P47pQHcBRAtAyw1ih9ib2JjhzQKxpcuYaoZhZXLy5BkNUSyxxEmRxjioLwmJz5kMea7mwo76iUfzJP8zz1iNK8u",
  "key16": "jS55nRr6fe6an67iXX71ed3QWr39nVaHVDZ8vx9Hn9jLEUYYe1q7tP1a4UaHuSLzKW2ds6q4PhBmh4TUCAjs9rA",
  "key17": "3ZLiv1VMEyYpBh2xBVyDVU2Q4ndyiADiXXFuY4cmyhB8J4P1oV5RsiWTJZ4pkQZNRvp4iKZieT4J7STKQe3vbWhb",
  "key18": "42e8TjXX38fM9yyAA3kvdessQFzssLGjZNg6wTCGYWjTEndcWX2KBUsvkqSkEsTfku3XyiZRpdFcimoeZC3cdQNQ",
  "key19": "4We66ExqmQcSzr6CuGHyL1LPPvGwa5wtnEZQPu1QJJNX3LN6D3vfDQruNFs3WZckAnFAecSQPFdhvu6wFgwkY6VB",
  "key20": "2jWUWPdhiqVdNt1Zh4wRhPd1XYZ9NcNUonewtjmHCbJVf3GxYjwZkeES62CpFBdaRvDhdox2Hg94X5dSaNSXSeY4",
  "key21": "5zKScckm7vePnzD75sutoQWczFiT9peUGMnAuSBS2fVCz8zeAWXwHXS66MYMpXR74fDZqMs8VHLVjnJVFBL1Jh7j",
  "key22": "33FkaH1fmEjFvmZKFvRzf96MXjZwcM4w5F53W2MPEvfDJFMv63MTdwTUA7ZhbEsPBQ3ay4LU4bQDQrtNQtrfyxCn",
  "key23": "2FtYzpKoFun46tPQH3eUZL7kiD68W7pdAf7s14jcdPiNpkSUfUWfZxkGPs4zzyvnMa55H57qyo43euRDAzb6QkVN",
  "key24": "5rWJRMXBcrXGKvJioTgXcELRRFcVdr5s7mjyT92tSgr8GdKzkyouugVo2vNeXot7DUd2GkwbAA3iejo5wn9oo8DE",
  "key25": "2hYAScVMLnrrvPMNhscpChwNbCULLP6GqGGTak8nky3kfzN7v2EiSW8efjK2BDVpZe3KaP1HAAHvq9HCVjqvAXX9",
  "key26": "bXirfs2D1ndrofv5bUaqwgZhDsyDwvuPzxovKwr6GDrJibpbNBs1hLhSwGJHdQCeCfTDWYQpZZcJ4dua9GrnVw5",
  "key27": "23NneHxDnDiAmiMy7ACkNf2ZHJtNWGkbTAw8wUzZ1po1vHrFPK1UsmffNZ3SCyK5K81PGVWpqmpuCvJ8Nj1WtaDP",
  "key28": "3UANsa3w6X2JUWQaTtQcihibvGYky4SmiFH5Z6e7nMKNXoxyYKUHVNUnextqVY6wAUBdJaNej2V7Z6hcji9KHsvE",
  "key29": "KvR26q6Qb1JwH11bY6MnVsacnGWryx2orjdEEcvfji8NBYVzVeajguHMh2H86aSbYvrDfyDXEm4GmZRk6BFBVPa",
  "key30": "KNBD8WijLfmGxGpCefV4ZQtEw55ef4nSajPFrcoRAuJSzie644bYjrcmDNEXbN6g7ZgCFktdf7L5x3CSsmW5aN5",
  "key31": "aiyjLELNhvNwpsvvqxqKUQQgG6ndrkrNoKRBK7AVGapD6M1g3W9H3ebL8q74keky4GwBnqa2ZeZypqQay1frjvs",
  "key32": "5XTTdvi95kaB8hsackCEghJZsUchxpvXvgX72d1LPHD6Be7k1E2xzyrtp1UyZK8QUhz8fexzGwL1e8QdkeurydzZ",
  "key33": "271sDLcXmdwvHtHCN4fLfZ7FNriwon7GBsy9dPxAr45SnAs8de9XAAGavfBtQw6c8B84mppvxE8s7qdVVi6rz3Ey",
  "key34": "g17zvwEs5iQWuQdtYfzJUWaHHoZ6z8FgGSGQo3aynPbrrKg5tDVFrrDvVjQxYtCgC4T8GumcsJh1dkN7BfBRW8g"
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
