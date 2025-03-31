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
    "583zzVnwQmr3TexrWJuCVxmsUpJ4PzgxD5Bx7oj63uazfrZBQH1edvKYDYfV6jFqfV96oeT66XYQj3sedsMoS6SW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuVwEDchnde89Y2gP5xB2SFMkn6rTcfib1ZcQoEeY7fR9xq2baMVuSs6P7WtoW2iaHDE12eWaaiofKWUSueuBvn",
  "key1": "2xBL3GHXRkijXnSp2iYhLxtpQWaMmPUESCxgQS3bMvYUTF43H71vex6kb6v5t1zfP7JbMMCMPMqZfhaALueSZQeR",
  "key2": "37y1b5M7EKPmfAX7iaXYrkb4jozEn1WUv3Gj9hLMXjw2etdJ6NL1SyUjrN2fdmtQXLv6NjiozwxYKtKMHkPfmRtj",
  "key3": "397omBqWGGq2efm9DMqUZZDBYwbxttCHRbFxtCtK7MfSSgvRfv1w7fJfSb9GpbkyTqhYNVAnA8jEXE9e7ZuKY63w",
  "key4": "4d7qK629QWHCbuuFcebMVrm84L5avUx8uecqGcmhR64HWfMpxkzV2W4spth8LWYWHKpMzew9WBXkri56trob3nj4",
  "key5": "2cx4S2kxhvut1b3Fzq7LpFMHr9LtBhe9a261bB7NMhoVK2BgxEpqqqQ7fGo4UVUcrmJ2EePcqQ6FL6MzKJia74NT",
  "key6": "4dRxjQp6VveNx2DpwsC9uYx6JhyytVdAF7BpZ79QSSU73DEJewpuNCUkx5nteyDmWBgKQXsqLw2cvMxGXBmrdmk8",
  "key7": "3dzyyPF8BVYKLzVQBGAhqG2cfhFbfek54nWZ8EWW3QVQyePstFsG34agtpbbcjDXq72XB6h2VyjCahGbzv2xmU3u",
  "key8": "3n5gMGrkUG1Mu6B4VeRwV6vNhQefsAVFCx8E2vBGBgwxfmHdV5CS8AV2XK2hx74qhta6ogQtuzheVazkZbYRUpSS",
  "key9": "HnTRu7MjyxT6dC5Ho69Xhv3wNkqSzENYFRpzaL1HTn2dyXdbHZQNXVSPcCyLACxYcEM6925QwrTC5oST5TmKMtx",
  "key10": "2HKreYuUyiqvngr1GTxz5a3LyE2vduUf2j4JhnJxTcBtg6CPZt6eMUHKNoGhaU8Ekw4cXxKqcs1pe7tyuzYdYL1C",
  "key11": "4DQPibSDMHfcT7iyxh1WT1tyyzf5K1Cw6RSgVk6hKMBZC4jUSSe4BVwM7shp9XqAdadFq5szS6G8zb35dpzk2GVR",
  "key12": "2xCTQmvi5WQBbUao45Jq7q6Lp5oajrDVQ8W59EJBK6Zt3EQ8y8DtHxdhUxXMjuBE2jBrHc8i95waB18MbBVoynuo",
  "key13": "3wADXpe32h4u3ttYE8NgKsVj4KpRkHsDqTDqcLd4rWV1tWjDWFK398Ltb5Zm53rksufTHMW8QrLhvKTW1zVt3qMQ",
  "key14": "H7Ap6wGQnuHHWjxk8cExXYMg7spjZ2nQGxKZESoHQRxkEZTDhvsWRzfMM4NVNMAQLhvqaAUHf38rQjdTYLcXeh5",
  "key15": "rMrhY7wdo8L4yUFPaCMVbxvPaieHHhbADTmUMw9EraTZ23BTNMRfBjtMBijr6nVR1f2kzwZ1LnasF3tzhHmbYod",
  "key16": "2BZGyC3rH1Z8pKLkDBwXjjPZvi6eNrTYJzTcdd63ccSPYvRxruzue7CDhh1Tdunycgryya9cz3TddvLdjwVwB9Zn",
  "key17": "5GcZCQN62BQkFoxBDK7NbLDpanuiqTvfCH5U9mdBQBBDYaD23AhYrJE3VzLcZhxNi2ZKymuyeJcyHuN7byktG352",
  "key18": "3oF3zwpA7bPArhE4y6HXiscikc4fMNUHppW5yGw8S8iJxbZJAGRnuKFLnw58JHohWqB9v9B5E6nkS9D9TcHrWbCM",
  "key19": "41qCQ2cPojugiDjw2D87H8teiaUttAFhTZFzNnte4HLJrNBGvj92xEEMLQ7TiTuofbjouNkiahKzrVJcExMXjWLM",
  "key20": "4rbf57RyakoC1sE99HafdApZD5tYNtxhhYkykkDmw8LTzTJTbQEE5P36Wz4qfKQEWDnAXzTj3ZFFzE8jbFrzhDpr",
  "key21": "3uxHTyt9TCpn2fjcy6CJcKa2pGgZUTN7CFw11cuRbTRRWVnSjLSG7z23e8jdwYdyq42PqKCHTBFb5on2s3JePioR",
  "key22": "ct6RXdTfZEabVC6yWsUfZcwbUb7kH7AEFfdiissvs8U2WDR5E8Vewb6Rpfg4c5MAj8GvZ5eVhfeHe1zrp6xBJL6",
  "key23": "4vFdkC1NBstT1DyvLC2YEFkR8FGmekSg2emTGFda7UdM1soebPySULvwycYMicgA8mY5Hyne2LNPg1p5wWH3U3vL",
  "key24": "4tJhkWSA3nSx26ht7YjsUf3GRyiekVuPEHmF86WMNCAHDcNnzitMRnfKgwFVwtQSeBp4JBew1yx2oDSgMsRtrAuV",
  "key25": "5EAoWepMrUmdbC4Ki5FAwPCgbTxmYboMkRuMUJSSErz6tMMCfTPahpDvZVqt5DDEWM3pWVEcJ48q45vVBytVHaUq",
  "key26": "4B86dLecJUpNRjjr1rds1TXYZjoxp1h2jDtc852JVVvBnxtaWUZTRACpYEAPpVL4pS4kyvLHBZKkisXaGVC5FdFT",
  "key27": "MZqf1XLMK12U2LfDnKYBtZMPkW2SyHQnaNhJLK7y3kYxsRJFz3o9oU3MQ5VFtmRhUwjsDotrrqoAFY49nDpj7xZ",
  "key28": "4F72Qf8mN7E4RoJ7NYRMUJ2Ts7Y1r7ZcDap1zhxYZsPwKBE6Cy3bKprgwBePda73Qi2QvpZXN8NjpZrMuuVZnDY1",
  "key29": "2U1NLZWaHwuYXvF1jrRadB5kUCCBx6NUp1QQ2Adg6nTyg5m888VjF9r2JEraAkr3HQ69ZLMsSeUQtsWEtyaLWFks",
  "key30": "VaDrHK5ABeWbzak9Lux99vUNQGS5uQsUhg4Ysu7LdT5HrdEGLMR3EdAPapfD9VEGYCCqx3c6nr97VnaJfLVPLZm",
  "key31": "2DkrLZeYcRpr3QS2razSqccdMuUbRCKmQvpXDCuQeARhwB8vUQB3MphKfkhVLUnjc7NAbticT3WLUcqVtY9gDpXk",
  "key32": "3Lfsbfi3ngP22Ly5PRFGxXdTLPHYpHcmhF8Mw8fLFD5UJAVyVC4RF6aUJfnazAEsv6BrrpwnHehnSxFjd2RkCkve",
  "key33": "HYRqFN8teHvKCSitFu2cvT32zdTCiESEXx6zg8H6jKXcHNXiFG4ZvGqgVNzWoNLgnXPgSyjazZvRbXQgNZvANvX",
  "key34": "MXGLHkwx222Pb4B3DgXhfvcvcBGZPcB2sNV8WEqo9F34R4Ldbmd2FGmjMFTVH6PBQ9cNGntcXck85p7hs91WRx4",
  "key35": "5Zr6uGkyJy4UHQNgzQvuCUFRf8WMdYLMzkvZgkTReXUvNxuhAczVWAgT8nWL287Q2NeVmkWBJTS8hytG6Xie96SA",
  "key36": "339Hz3jq7pbezy7b9EcPm2r4sXQHXguts5s6FS7Cp9RrYkwrxjEgfMnjHoEsfBt8q2RdPWv3vrQL5TnyHo7TbjKY",
  "key37": "RPQ4TNKbK2yFM3PzTmGMJ8MmoK6QeFMxVnDqVedgiqcnMqgQ1kpVnX5UVAPPBiNjr3XHfK4xWxG4DNCCiEn3Pym",
  "key38": "5LA3BGR9MVvBbYnkJ2mswh3JxBYpy1dKT9grbbP2inVxApyuCZyyvzb8HyKyPtogwsJswzEKcV7jWsxtWMKcX6QM",
  "key39": "4aAGRRqW9xewLpmE14mU71NYoSUc7LwhxZxDityfp6Yg4TSwrsrR1U9i7kUU2BcTobFNydrZZLy2onZJkZxSzPcx",
  "key40": "4h4nq2ap4SwW5jWKBZ6V2CiBMTcC3hrhk3DddJ8t3aa2Mw1p7kTKsTEWBVDPutNZ7TwUe9WikMWXenqoghghamzh",
  "key41": "415d6tdbiqJmC7pqczQY2P9F4U6YEiKvvBMZzg1vg8sFqNeVehiwpmUknP77bmjswQwBDD64r7JXN4rBY3Uu1jwA",
  "key42": "5Nurqp8PjhF8PGnnx3Sk2U2gF8yU28q1nZfnBr5sWBk3ey65iPRaBYT3ySNJdtbxT4xCLgFkUAG34yVetXhx4cRT"
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
