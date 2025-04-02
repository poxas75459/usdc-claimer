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
    "5ihcebMJijLaznu8LuQE6XbkMT4r4GdaUxqdg1dLXuu7zKZvgUcCZ4TqJEU7QrMHUTk7pVxnvMGLeJZfzpepmx92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WoBft1hJJXs9Gi46qakEyQWX14y99SMoYyeZfzTWTUDvswizLZdopvoQKYeUWkzJKyJhVXVDqdg5J3JkRE9291",
  "key1": "LyTxagqCh7zZ2vVGChSPHsKqTAV2KLCTSkiEFM1AGDtdCt3AU3raZyvoghSjhw9LmoKtGAZRKezW82y17acQJTB",
  "key2": "6r23AJhp62BMCc4foewjEdrNSP4pdFXPjRfDZaqugp6bYWcmiSdLaCVRZdjWYxXTeC7fCX8U3W2ixKvWTRu1ZMY",
  "key3": "4W1Rk7JixQCcZ1m7vpMeh8Tx9GbrkWmfcyher7biDXmqFkYetoNvFuXrS8u4jHgiCEJzY6fu9YWhdtB6s4VEeaxV",
  "key4": "5vBZyEoUTbrR9fYoEZgZyfJuPswXsTHaTGh2ZoGtPPn27kxFJd163r7GzTj8WHC4Qqss6kgfR3SCRFZy9tKQ5oKG",
  "key5": "3YM4ZYmkJ29YemGayhgDmqtg5ZhtoTmAGVYodnBxKv2ytLNXjjK6uKwfxxtaQVKoqzK6bWcyLANztms8iVhpQRkq",
  "key6": "1ytP9zMByC95vFdyWi9bp3gVt2NKofffn6pLfBje1onRKhXpU8dYBdMsuLbRozaCHSWicJq8Rt9J4ZYhCbJNY3W",
  "key7": "NHsSVxhwnba635FKp4zCkEwqUw2wJPZoLJDDgXZa4DG9MeXwGaRzvmQo6R5GNeCyiZDzvPk1yFW8qiScERtgE8g",
  "key8": "2SdhjvyCHUoziDby3yiydTwtujyzegPr1sdQdDABiWUbJmYH3ni6kxYwiWomxDrHapyN92ww7oafeTubKvfisjps",
  "key9": "2ywiebMawermYqn2BsnfwKVqCZRcKK89vbtjHNr5gokmUpCRQJim41DX3oCe46JcdMDMxM5uiQ4iFJdHnaoxhQGF",
  "key10": "2QgBRZB4ZRPjsMjqE27EkfVZwetoiSUzdjGyUqKrUFUaER3L3JnipAnXQ3xEZhpEw3TxSSyUaeJ7jnraQewivVqz",
  "key11": "5WQdiL4QYQj23yWXYmJ9Db2YTkwTiBmooLfcLTVBeppTcmVrVecA4nviutR2WZpWy3E1khrptXUeH22ippJcaqmE",
  "key12": "2iBX1ot6HtPwaVT1QGWUkTsKxbcm4dzHSRmunjonrPYnkXXpWpJF7HPPhBUSFKCNVfycGBTm7xvHd5jSx2C3VfvW",
  "key13": "2Kw2aDhntERPvXrYmybwi7Kqzbr1s1Ukm39YYvAkYmDh6zFU1FLfLDsdq3bdpncuMzxJfYxZLjAg3wHTVWL3QCKz",
  "key14": "5j3mLwgyLpJziDX4YDU1Y5avq7vWAAeWiwUYWAnSkfVg6H8byTdoT7ZEP78w73mtKvKppi3S5yJU7focSi6pBWfY",
  "key15": "rJbaraZY21m2DnCA76HxNkbiykytDNXbAi4pkRQqPfFHTKPpo4MkP5kLyabirzfeRfGmt7n6dnSBVaUbpZiop76",
  "key16": "2PbUoLeFUm8RHzVV8thfXdtb3yBeTpXhYxsj2afcRaZ9JVmSYr8tNQuPsXokWf99ua8FqZ9WY1fBe3aJPp8NF3mg",
  "key17": "Cs5dpoBgUMFrRd5LZ1J3RJiRK8XyoSV5nZaSi3Rq9fMMjAqbKa9WEmUmDpLQWL8YQvF2tcFA6XfW2Y7ranucXjZ",
  "key18": "5SpM89PpVwC1LsvJfiMEfzQwb32jTnVwLuX2VmfpmfpicEMrXQbsQWAniEkwZzDFdq7Xqd5zR5rp1hnArQocxjmr",
  "key19": "5PnKfiTNX3na5Dp4HWo2iA7KEKgzLjSKmvSBNT5RqPjcTiZT9d2oXBr8pZqTEjf2dC8DJh4VuCtqtuRFmdm3t63h",
  "key20": "1DxsETWmaTsQ4AsAdGB72qC3FkebZkTXygMrcmXs4awQJjZYJB88HDznd6b3g74DJR5TxGkSMVgNSj2DTztgtRF",
  "key21": "4a8BFyzGHkc5WZtHbEoHKKacHZcDybGvQkSZS5GeAMQ1m6UC1xemckJAY18BrCPp7DjhsV5HLAHStGC3hbvTZDpG",
  "key22": "5NjtM31VwUzzhQGTH7Raiy7BVfbcTGBRSPEXd1pV9vkrvjqmVRRtr6WNz6cmAogwh3JdSGaVb1fu53EQWJGaWnit",
  "key23": "5VdKEdiKmV5VjnpYNajdCo7XrsPBVSbkWvUDHei5xdgSQe5LY1DcDSvWzNqEKvDQ2ko6hZbvoqJRiGNmG9sFfA1w",
  "key24": "4E3VzVdkbaXGhA4kZpd9WoJjBJqWhu66G9WH46spDx3hhfmNqvE7m9idDXRvDmjB8kEtt2BgNZG3hrsoSKjqmGcY",
  "key25": "5dUVwJnfLE36ihxXZju2JfX9MfdHkAvHJRvUpoFaeLnmqopyYzQ6BHkkrHfuzRLFCkpYTjx42MPFmsaYkxGYBuhv",
  "key26": "337pyUkVWJermgggucGhwG9ygajTjp58CWUCNcTxJabuFDpL2EFKwKkpTyxbF1MB46ZjhiWQDvKqkBnHCH1QgdUk",
  "key27": "3o4ynvBdi69Y7n5tVeT2PFDx8e7B4UNkWE5J7mibEK4CQmxkqqmPGBScozxSybRtgAxge7EDNLB4zpnAp4gzzCSD",
  "key28": "Xkn9Fuii15KnXkwtRQY5nuUQ1789XZWyd3BocjeKe5j9u7SMBY3CYddQ845D9GNVYHB65xUPgN9Arfjv51gyv6z",
  "key29": "2VhoCvR4RygYvbSDmw5ce3kkEZcLYDrLi5hAyfW4g1Tnht6RYtTGBXEEtcjbKjsbfF7DdmGhJJiWSF3ZLUvwc8Sa",
  "key30": "2c8XKaqSRJM6PGrigVxYxzv4Ekwvm1XH6TJMmzxg8NuB1JT7kfT9hVnDTiugJh8KXvwBD2hZ81TERh35HadGStje",
  "key31": "5gqUmca8ikax3o9w3SRUHLjntqVD95ZG5ieSF6yPZZQ6RisZSfMyt74imvCeLs25ypVUjTftQGtjg1262GT9vS8b",
  "key32": "2T1oLtjw4hQaXvZKpHJwbr3WTEwco4pUJSQd8VPawNQ5FnX4e8G3Q646wUwN4pfZ8V3tvBL1ki5RJRq425hWLyLV",
  "key33": "3BUPARd9GK6NeNn93U7GvtVCy7oJ1DKTddZMTQAzaeEDqGvVEXj7tD8JGD7njtRHiKT88H7xEYbjdASsaZGvVmhq",
  "key34": "3frykZXBYAjD8K8UB8XuZzNTYMSnjE5uiS3VNoV23Dkqpf4ir8TsyPhAqqQ3zNsy59QRTuxxCWgu4fUTTnXuUzQQ",
  "key35": "k6onjxBezKikdgbtf3ehfePuBa2xaxjX9k2c9D8srY6TsF8XX7oAMzJd8HEqEov2d2276c4g54QtZgaWvZ8bELd",
  "key36": "4nw4FgpC3rYUgZ26U1CQRaPGSsCtZodAxMUqeJWJgfBX4BWWmkMMStqnSsGQLVg8Uopo92vRKaBUBAzoNyEzan1s",
  "key37": "n2mWu84YvvjP1FngcfnaK1qbh4aUJMEMJ2MJpSXs6V5FvL3vVSZ7Ek6MEU7EAqFr8J3Dw3RhQjy5jtWyYuPv4w5"
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
