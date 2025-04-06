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
    "4rr6Ymfxg8hew3evf7JBuCfC5JXuvQgLGyexxgqtQ7Xa3TDtrBS62fqkGpCGjN7Ewq5BgTv4orGfYgMTLTk1FfTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JydEhnCezUNBzGbi46RyZQEc7XEf8eUb3CnU71Hi3ZSuYB6zF6cAVad7ECX6EW61oQxp6neDcgjkCgV7wMQmKnr",
  "key1": "n5o8RMTYBjMT1vYC4NphozNZzCBjmkXkcnEHoiZVg5aHDsCj11LXpmv2yj6xKAHsDe3jL7D7HZrcHtmf3CNewA4",
  "key2": "2NKQhb7JvXqGFYAWmzWkBSjstXv6Cn7zv3fDHvgoF5Yyzo9LvHhkPM61R8bywnsdbzHZFR8xFxZTMbtLZuyg5Z8i",
  "key3": "5vapuSm59KJgP7zM894kS6ovZJ8HdaPQYfHpd6V5g7B1LSJjAe821sWqLxyNuAER6iFrohaMFhKxXC3kBZW5zJYS",
  "key4": "2MC3647QQCSKR9qnVx9ffbRtawtr6GHno9AJH48kEvPi2bT6aX9oL7wBydgGTE98KK3RCW3s6Apzz9yvgFZnGwjj",
  "key5": "5w3B9nCnpHh3jBHVUYAYfXJa9SsY92tRgE4SBZubQryf3TtmdM8TkDDefogkZiqoNcQ6LDQhiGGB57MpRig4Zee7",
  "key6": "4obRkvSggnWZS8xa1ni6LEru1TdJbz7JcctkiTxuiQCvt48GfRLbWNKioSXWoCr73m8Bw48VsXPTfCLTgHBA7FEf",
  "key7": "4cbHvh18Ke33VTDnBPdkSc8TvuNAnYeAZDq9f5Ez5STvLwZ34PXXLRJSMvdDRvajpcKSj3s9ycp61XuFuJhcdRdt",
  "key8": "3yBfHwRjZnmjx5Nq6K9ntMPXQ29Pb5XjwGxX9vSW1YmsqZUgiNcLJPa7PojxLoWmiChKTjgseNhkCu6unSqkQ4Nc",
  "key9": "5hSsjoBnvNcsiGHLoQ8xq8opnRNSE1HK3JCmGJGsuBvUUV3bBi8pZnFiQ21vcybZGTTnesAY9qzicsEyHrhJ3dAm",
  "key10": "4dL6bBP8ABAo5pDXhx72tWeQn3TYNUDWyLxmrsQsdAfBJKHwTvaMh3FXkdiq888QhitHcNmtay8hwvU6bxEb5sc3",
  "key11": "uag1Eu88rZPE8ZmVECxeCkoJrKJYA5K87D213bWv1gpwcXR4fX2Wmr1WuFd944X45r2zwueTTJg1bJvkNgRcfpe",
  "key12": "bUswvTnuwzVfM4XZLR3GA7dWZf4Ahxqufj7DNXZx6Ux8d3L7JYnXUFNxWVKExdWe3JDnRmAoJz5MMwPW7w6xwrz",
  "key13": "4foLKt5WeBD5JYhHRYQ38Pb7k7FmpnY6bX4W8nPumuX7285qqwqkFS9rceTQj6MCrYo9rVrcpx6sga8hHohiiboW",
  "key14": "51E9XWPLgXkT9BzfyWePAqCJixQkwYnaBZqn25BpnqK649SBZ3bTH3TQVG7iwD8iyGo4vzdor9paThYKwU5kxAxp",
  "key15": "29K594H6oaa2E9W475L2Zs4RPpaCsb596GaQdKgGzvNbJ6WzmDuiLftxYogabcxHr3EF9p8K3yEgvxnVKqbgjV9j",
  "key16": "2Ve9HpyE2CXZnjSXGjB7r1TXJvihhzdRYkWy51JcJkCQDQPBaJ5YyM1StPvtHFWS6ii8aKSh8MjYcXPzN433aAcQ",
  "key17": "3dF3ZUo8TazkdAeBQue6gysoELrgfjDjvgkr8SURP1KWM78jZWWgyhdMaQWb1QQVzE6sTbc2tZwRSBxait3KUeuU",
  "key18": "2hMsgQbvRFKmBfF1XwybUMwg15iAHAfwvkbLLRvvc89E1yzXiytnck1zASGcXvbpEN2yaxsaehZgf28YJWguAc8X",
  "key19": "3iBZNdVLNBTQQvdQV2gRtLvJLm1aK7UYJmdVhFqb3osKmrERkc9ZwhbFsqDBkwNwjJ1SuC8TELTvAPoe1sxzwr4w",
  "key20": "2kPYjoAtDPH9z6bP7VeXAoCFeiaTKEw2uh8TjQgkAAWj6cqodTcAkX4MeaiT92DXQJgVx5HhsM7s2rNziLAi2Zds",
  "key21": "oVcguRaALhhHTHomgbW56AZ2Mnb1oTmjdaFiPwyh4BZuZeeZr3eftzSFKnixhxpBkRZy6SxctkM7SF3E8Wq5WPq",
  "key22": "49rLJ8CcxC96BbPgHstvvUhxkgfuTTiiCr39qoADr2mfmcaLrGtrxo4CNKgv3RYFUC7SX4Qpi3vUbQgGewotZRTH",
  "key23": "4zPxResQE7eu7inspwSMB99j7xoaX7gUNdjbYkmQ6yYAZJDnxognLLDNe1DoSnJEmLHjAUEpmV7gb8X81vZ7Ri8w",
  "key24": "2RjrawzQUfMCT7XNKJLESt9QLXVzXXufQAiZuSG4Xcfg7VYiCtiZSs5vJwfTGsfC3Rp9ahgVKPPChoBib4ir4Cfw",
  "key25": "3J3fGBepb35C2qWxSyLeUEF5egLMaDTN7kRWtVshuxo9FevGkhUrZoV21Do7hmcfNEmvhSJBnf2bh7ry8G6bc9Nv",
  "key26": "9SpAA2KAgD2qVDWE6tpZZYNtEV6crSJFZnbVjgMND7WZRqDSBNTnDHJrxyU3bH9J5fD7gJKds7hSJYkF36Rm3pC",
  "key27": "JvrGEuDXQ2vyEaZ2pvjNLb41W1enKNrC3skELwJLriMqyAibNiWd8YCVKLrUZcaW8WccLDMmyuaNspNYtYmuNEA",
  "key28": "5UPeUPaQn81LruoAgfffvDfwJQzJyaFgAj4p9RNGWR1pGmyVQ8JWhd3wWHBC9CkK8ATo2Gt4sL1mm91oRi2Ws6h7",
  "key29": "2B3GfEr6tnxAN3AFUJrDxXLX7NzirQs9y2h1LeH1VazEtm98sPvMXNp4zk35Pyy953TTXejTLGbCdrw69ebvM4nt",
  "key30": "3CkTRm7TRhJ4jBSGu3NPpSwbtQbJMoS5SRqHvsfoyJfAXJKpVkhphXzBFHTwGyz2yHjVhnMRiuvyPLACnjJynJSg",
  "key31": "4fJdeHfi3K3pM71BuLY6doxDnA7jmVnQX6P8eBDDGZd6LGNfWsigkvnUTRAsPBo9mvtxXCqitcahr7Szt6vSH3mR",
  "key32": "4oY6dpmoEbBwfPjuReSrcj9MhMBPJCgNtbojjhfiaPXCCFrtx9sxm7XR16MeVE23qR5eoNne4KjKrexa5E9ttY25",
  "key33": "2wH8AoYLYwJBptJmrNzTwaQzLXP6gtGa931oKnMs5933dUwUiDL8wVtKEKsWDMNrz3kw2SsmXJajv2tSNsoiTvvS",
  "key34": "2PpSDqZhvD1LXpCiYUj6qidghvkJvDSkBrhXvbMaYqR2WZVqDjb6yYHjZyzg7KgdiJYduZXXiTpoJF7X6hMwaSsH",
  "key35": "44XKKikRaHz14898UMhtGSRnWoMxvdtf23QMXuChUZY16RE6C6AaR37fXVTkHYAeuagh6kyVY93n4jWK7qzkKkCv",
  "key36": "eSbDgz82ctfuLCZKfVdQTzx73hKcN5qYZex5wf5ss7aNGNZoLKjmnpwHRvgiSYm6Y8ZxrNY2Jus9GmADs94ZXQw",
  "key37": "Xwizoc6pLPj74fqbaHP3eFNsC3fPjEXia5MeeHKbiCNvMVoVA2B5jq2VgL3R5kqZiseJrMnzL5qV9yZ8FE49XWs"
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
