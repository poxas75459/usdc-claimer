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
    "2djbgJa6ppRa7jYo1hi4ZpztYBnVe84Z2JEXCHAKkMrX6RbEXK6hYSTf9Jnn1nrMjmSjhphUDuyeKVo66XaQr6k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4Ru9Sgtq8Eo92Yhb8ZBfLKQBaGsvXmHqUAzvWDZFJZTtR9qBSd5iiEWKEJTE1pn7LrtXHBRw5vxHrYDB3sGXwH",
  "key1": "5jB3CZaW1jY4cJJDFdPEwXMCwvwQ5eMjRSiVXaPCCdGrwNd9R6FhLZNvkaT1mKD4EYotRJ9vNMkrSaT4ouAt8B99",
  "key2": "4PfpneNi3mKp4aN3Yv3rLqZD9eetu33XkTF3M9dmzwzNNTgqUzo18eu4dwQaYnqnGdMAz2hDBq32nCFoGH8iATzh",
  "key3": "4bRaibvex4wY4xC5tzDAHaZ3Hd3vtB179nsJX5d39Bwjd3opELDzG1RX3wmTpxEQGDTVPVui8FfVB9wGm2ixsCp9",
  "key4": "3ogqa919U1U7vTiKRnLZN3cG1a323dutEjcR7JaKydUN2p8getpexFJvTQx7qVSddsKXrqfx1Y6xqoBsTdnYxhH5",
  "key5": "26aGHXxKZ76Ka9o56hur74m6Bc2tKXb3Kv3fh9CbKXqkCv1HD8KvSYd8uJtL3xXGNYkSzfsDwh3NvER5fjYYiL83",
  "key6": "2A62bGXMGa9rNyczmYgdPRV2EU41kUNdEXdw51nYbx5bYEJhm97G5TmxEZ5JHZzb2dwkm5dsBjapFj6Dm3E3SVYx",
  "key7": "5zNaF3AwmebM1fFUcR8WEzrnvwgHs8RnQQotgEZusp91ygUiTCTKSU6H5qk1tYbFZog9x5tN36SEP8aPFzBetu6G",
  "key8": "UMwQEf8FsTSf2pnZ4TRyBr1DBdfcLeqh3r5yKmubbiJnDNue6WeaRv96RVFfjzJfmDeqgww9aAskRhT5EAVFuUY",
  "key9": "3gxgq7kSkMaG67kw9fdBJWJaf6WaHubKXmK7JeLAA4fTabKoNea6QHpccNfogsyLSC1ChKUrZWaHek52AmTeJu1q",
  "key10": "32RQM9v8vQnhfWK1589nxmb7nKgvgX9b9Pzqt6RhzJy2nt619YCbzPKpAkpcpff7K6QbzyEFJFVay8ywS8W7bU4m",
  "key11": "3EM9VnkNhmh3cQvikTTydPmL6cmAgzyk9CXt5hUk7VUsjHuGGVK8SmYuBHpjJisjAj3qzyQ5z83yEJoRskmyZu9n",
  "key12": "2ZhXbEuQpKifjnjcGx5MoZfctBNbgriyzW6PxpvQjcX58WhmjGkCRMskcA8gwjp9DD3bGxMNsRtqs6ygKAq8R3t7",
  "key13": "32BD2k1TrfqCr6Lz2JDYZdXoQC2ze8XnqxRdrYc1gAxmXnNDTveYdRjU3B3PhbTLpH4UiAaVSpvLLJQH9MAWZuW1",
  "key14": "4jY2e9VKpTJr39bhrEP6DVfjkBvhP5Rx8mmWgcWHyWmMSKz513jHJK6nwUDadgvF8dmGjZ43npGFuosSZ6AYS36X",
  "key15": "XtoqiqgJ2iAqj4ct6o5G9DNzGUmkwJLohaPPKFh3XYuJaV21WXj16gT6crvEb6yxYeP4zu9oSE5LEWEV4FrQeaZ",
  "key16": "5m8bVp76XCAU3JYwzFZ52ogkgbZFNB1tpMF63JSn3NB9RcU6pbSJh3RrkVpTqLS8NYBaPETiUJD8D5VTWwqdzL2",
  "key17": "2d4Dfv1uVaR57oU5DydTAztJDqx7yA7ZeRk9HBpnXqpvQVQiJvqMRwkEoZunBrkhXwHs6JmqfAEjtn4rdfNQ1h2n",
  "key18": "5uZrynE1R71apucnZLcYyZtcHSNDRNorPps7MKhevzEtjA8K44gPr5ET3y54Q28p33gcX7quvXJX2NyYLs4dioGd",
  "key19": "BGvb3QKJXBVsQJJp7oeB9cmxGGQ2163tX51VgavivqX9dd8yYUsgtMF76p8QXbBcZWGqXe1BTFbqUbXxZetjBnA",
  "key20": "36f9ouKBVooAJY7ZaA3gqHpfiM5WUupk194bAdwxhLy3x5RkMxv3m2bMXXwm8D3mJX68Hp6aXxtMUdeqc3F7oyEe",
  "key21": "3bSECkqw3DqQq2NAvV7ZejAHgcRzwj82UqEcwTw18ELBPxoYWZD9B4DoCctxtBCBoumRt8kprBzcbCz7UANBBntb",
  "key22": "5meTk1zskW5koX7oPYjv1Dxwq435mDn5mfb5G3ygQL8hv3SGEvcSfCcMNVQk9hyebZTcaGEVCEKZgdxetmMn86y8",
  "key23": "4bUYtwGotZsfwFBC7uXb5caEGTGenwQBipWexrHwPocatdmMiyxxAgxnZeAy1yxe41m7VK9pJyudZCEPL3YxNZ6Y",
  "key24": "7tndwXcXTwnEtRqqACdDaYsayLqkwXhCqwCFBKt2VL9pQ87hmpGEvgmszRRb7zaTx8djxAuNhvUSai5BNMrogYZ",
  "key25": "uMr93VpkwhNfyunhKRRCqyoRTZoH6ToaPQJ3Figz1VsRyhsBWEopsfEQaiGNm9DuawYzXwt9JhhGxGjJL8x6Nt6",
  "key26": "2V2r7Kf1mXvxi3RNTUz36vhNaxfLPGmKiagQuzb96JTWvw57xGFnGSLwjohXk68DaJmgwYs4uLjpR9RLkQrGoYqG",
  "key27": "5tG5vpCJ5aJNomSF6inqDky48q95vo4ex4w8Ux5vASkiyc3MKh9DWjLq4eb2WEt8gTTtkTJ28CDkF7T6S2Awa1t9",
  "key28": "26cZsGTvPi6S7JuL26FK4rhpot6RZXaCXQJ1vcsQqoDS12i3tNf9BJ9zy17ek18oxh6RqsU7q3jK6KqovxbAMGKW",
  "key29": "31D1aKNKT6VGt9HBCzBj9LhwwvGAjCXrL8J4Qx121h792YWtRBTTrzNa2aC3edk7jstmfgwjf4jddJUFSEeJNsaD",
  "key30": "3brzadN1dCsdfVGqR4gnZpocKNovXzwUmxLcKxPdsdtybcd31pxLPHAttedqEbk1aaqFKhmqJGKv7YFJeREWXxBK"
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
