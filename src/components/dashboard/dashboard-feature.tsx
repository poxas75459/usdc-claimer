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
    "22oasff1Uymhrdmf3fyKqL9xNiQ5RmBtt4ydZwnT2sV7LJh42rkXh9dBrnUns8NPMWCwyYKikBymPxx7aebupi44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z1sHhZpbgiKQWuHbHvUpeGqedbR7UJnU3EsFqj5cYTgix9mEZSn1W89D28JAZdCpAYAjnL7F31SYezPhXL6m8ap",
  "key1": "D26PYsw148NTcFLYtNzxkhuBYo9hZCbj5B8hJojCxQDtN3YKVZwgXqFUZhWYePNRzUZPNYkjVPsPgdVsY7HDGSF",
  "key2": "3BBH4iDD4pSW2H7TNiqSETk5bGFQ3KMdx35nmALTwSLxfKYf8GvuvAayrfS4xYcq5EWWd1DDGU36YDfbb8Y8Qa45",
  "key3": "wt9gEg7MRGMzgz3uGyyEs3GkVywhWYonXqutyVS9VXBg3n1dww2RNoA9gSeCW62a9fLwpUXK3SDH9GpWppnYu24",
  "key4": "41dSEEcjwtvRbyrxPtSbexjZFBd4f1QEC695rAPwvHA46Qps4mWGibBHEFaNFa9enGp4oGEtKwksHPhUeBd9Ryes",
  "key5": "aQTPEZMzFgffWomXQfdxVMMbdo43pFQBHTbMaNhxaH5nGE45hYsaGyYQZ1zXZFhbKEN2epTUScTQU1UhLHsLjE7",
  "key6": "5P7aCu4Tc6Bw8h6EvgQJdPuuKuYGZeyyJ5V51PDfxw5csakJ46WPqbEWn57sGtsLZWvsPUEoL1irYTu3j3TUdCFZ",
  "key7": "4Y64cmi1k48T3LpQ4153m2wbdV1k5Ja8XXALxs9StFUktdC5vYru8Xj4AUSxM3Ao5NKJWazBZAG84wVXrp5ghwmS",
  "key8": "2H1oPfdWo6skMWsnZfkpJGChnJ6feKk8TbELfuUPwVPYGC1D41wv3mmrTDcVv41ceDJvnNV72TYc6HnViQiFbJjL",
  "key9": "3So47M7qYrTVG1WQMB4xF2pd8diXfvtsGinywwup9fNNuEKVmzZXZQ4p17NtscPibxhvEJh3AYZ8a8xVtNpcKEic",
  "key10": "5B4V7sfkqcbERqz4xoMfQLT54PyUDSh3nvCviMW6Bgo8goYTkADRu4nZG64wN8NNBKvb3ndd9pP3PgVDBGR5eLHt",
  "key11": "4dG5ZSoTbX8sZdtUxEdabMxaqtgr9ZiLHi4A9eD5kwUbvk6LjRgLMHYJzPERE6uu5Np9SJQvW9m7McFhc2egYLM6",
  "key12": "4R7gqtMdLtydm97zkGYvxiQAYC4Gn4eiroeMMAM8C1RdfFJuXC8LBSamWAZP7tn1NkNweLPs4ci3jrsFD5LFEeXC",
  "key13": "4meVqokMvKAupA79GPa7RJr7ed1RjEoP3uwexDhnAJjV9owcNyCXCep93qc4pqAahp4kQz8eaLTdURaU8xsjnWXM",
  "key14": "2wjPV2fQRaEoJdirhY5YfVgxynDCVkK8sd6N8c8UhCdRGz7J167aQViRyJ9HkxEdMCWssrm1ok84h6g1XfFgsCXA",
  "key15": "2yWEYJv6GbB9o3UaeBwH8mdxibcpRypWmAYBQAEhfmWsYkANTANwfMUQrikLsyB5G6hAHjTyhkZyzoTQMny5dJJf",
  "key16": "riB6wiJ23oY3PdoEc8PKYFoxkk2XLyJkqD5tk9QYRJoosLad3nsdYBzPHqQpKYoDxi3stkFgyVn3jVWE3J5Fk4V",
  "key17": "5o3Uaok6aNnJgeg3ccVoonSYVBDDFrnXxNqimnG2d5vLXXrvVfuKKmurWJPLGjZCZ5PqUHr4yyiKXRqup42Ew8nF",
  "key18": "2Q4CfqEpTwQrUWn2ArATprntCxWTWE7PZjjqxtFCQdWXnTj9CWXw49ynXJeaNr2p6zJnhc9UHZQrvUbFK2chVf7T",
  "key19": "3kakawZbXqKG7PTUKoFdencagjsFjsBjXdanvj5SCpYRvWjPkkFyEis3UZRm6sqGzQticeV7CufSAPiAwgzHcarW",
  "key20": "5HmHjPzbQJYaqTpf5MhYiuit6LUw4YijvYyMrWizJwXYn5wgvz4QXHapTJWSP2dNiQcz7DyjTy9jCLgzxi4KyWDA",
  "key21": "5Xzp8ps5DZNvNPYJqzEHEXSha2emsstLxfvg4eUk1S7i9pphPsr29YDPqRsdkqB52AAPaY1CZGQ86CmEcoiao6BG",
  "key22": "bGXFK3vHnaTUKX8LXo9iMtw3GWz9Pyi8Y5fE7wya8ij7yr2yTBoqtoPA5fWMqqMFJvJqmQYCdByN2eKeALuGsyG",
  "key23": "2j5Vb1ac4TXhZDZWuq7j1xAYWc3CeVLGBB84EqkokFcy9eUwLHbheu41hq61sKVPyd2CepCotwfSPVMoW3s6W1KT",
  "key24": "4s12o4Hih9zRUTqY7oRHb7EwGbUatDXVYXpH87XY11dVhtvCzQqUQxm8tS19FqQh64zwyTVVXJzLF1QmMotzQf4r",
  "key25": "4gGu6z5p2WqJRYyrSqzXAiS3RRi27zJ4Spi7EcU6Vv6ikftjXnigFhvLB294y7LwQCDzGjgiCddT8hsKhsMpVLxy",
  "key26": "3gXjJmdz2F9MEsfa4KpoJvkQTXK2EPbDF12Q5RzqwurW4z4Z6WoLKV6QuJmUc1ekGvVzcPntdZta7NpNg2C4nYHc",
  "key27": "27DiCCemokCx3KraSFjYqAepek2DN5zcZ1ZFgEc9LKX35wGrD2wt5ZsV3FDw78h8cLGh7T5tR5LfT1mihGe7WwDj",
  "key28": "27BPs5pN42HMUyaSNvEbQts5bT658og25X4K2bHSYzEjjq8EaepfaXGxVjdeSzgrZQbMHPaFVrB9NqKXZ7xAFmbV",
  "key29": "64tBKtu2iwKb7RZDxrnXiaRAMLsywDKUn7geZJW6KuSfBk4su51Cvr381guSXhAmTYGTieiL7HT6FQWJhqskSoGv",
  "key30": "4BpVHLk8gRPkq1CAeQvQHaM8mrRv7cXaTpmk6T3EZ1uR5WsrusRmba1sPpHtdNjMXCB7CCvYYjURbTLDvX6rdXVt",
  "key31": "3x6W2GcopCia6WU5MuNDVgrY2Zi9q22WFRVtgrEUWSFzEXooC8rRNMgoii8rPMdBZJdig5ZdtR5Qs6wxo6JzPyqW",
  "key32": "uXgyLWRpJda2tomh3XZTZ4ZzCSD14NMopdnyEqtUS9N3Asi6ox2KALc8juJFnR8SYadxcGqxALHJy4P8jfHgd7C",
  "key33": "4nA2JVy3jUVLtdxzn2NsRCKudYznDf2hvRfb7ryAGo7sZ9ojZaePATPsvtcJwqpMmKSHpJS1ocFw5iM1vqQ5ZDqg",
  "key34": "kdfQwYjfyvMwZC3GeHbJNg29j13ubGqvgvdmBkTM5QQo7AmJJYENMisDDnCFSUuutQV7tXLTbVAR3PiEbCLAtMq",
  "key35": "4AAtcpAemv9J7qaqopY6ws1oDYqppfsNe6oP9hw17FVKqwDe7ep6WttnGFjApxQn1trLzDHMEkZrQE1Xv2bWqEwV",
  "key36": "42WaueHKUwcrZemmrzSmEhGd55K38T5CUyQx4KBWEsk8UNPMEpEf6SR4AigkVYmBwFrfEz6HgGZai4cRpgPNs2qb"
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
