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
    "46LL3zevzADhWf32BphW2dWdY4h7GYpPBA4hXJGaiy26ZAscor1HAoVG3pZa3Pd5ZnWQYgb96RMt2VhzFDosBuhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yq3wBoURyvsMi2qQi9XVSs25U5KiZs26YtoUko3BxM92YS3zQZEYEFFdsdazc1oPjSJ5GBTDbgKc8GSV3pmKkrh",
  "key1": "2tEuDNRBimqC8GwQv9kEUKkVJZdq3BtBvzfHkSxfDcGbskVtK4pwRr8Tm3DHwQedEeoZZ1DWFLb8BWNGQ3qPbQGZ",
  "key2": "4HyBaunHSboaoqSJCRrtbUAfXMCusJZuPK4xYHKgX3iUoC9KkfnQz1mU5oN6nqY4vwy96RsemSbjkfapyapqAa1r",
  "key3": "t95cw5sESQ6FGXyKaBfh6Gu4Bj9WrZNCWRCev9pncoq3QDYRDVVUySM2wqeb3JpvemmioixWnZdEQvrJTP7Guke",
  "key4": "4dL9pU7Kzu51g7ukVcti7J4UQQnhMBzSx2TSsxHi5h7kx3GKuT9GNccz2rT9zFFjXhNxDxEMgSQVAacCBnmhn6qd",
  "key5": "2GvyLaz85fg4aWuRZuAUuVmTQdoeskmbgLjXrUBpZKWHv1bcyRJqpRANcesSLii77zNg7NCXHzLC5XxCxVAmkAnB",
  "key6": "4nd6RYfkwrh3JwJi1V5HH3GLe9QUvKcCfRbGFBGRiry2vzWq2vU7tNE5cPdndTFz9n8JN3Uimb6n338xXFcWb3WV",
  "key7": "hEeWexo1UtuKx7i3MStNxJRzKu7CaRdBEnYREent5mWNGC7QF1hwtwGeCoujMnr7KQuiT8Jv7Hc2XLD4vB5vSfV",
  "key8": "4xUiFnjYT3t7LdqNoyEg9EE3afrugQA8hGnp71nBopMy9JThoDPC9nNf9vzA7FXpUn8tiBK3DRh8tDmED72jpWFo",
  "key9": "312yMtn6Xb3pppLHfGNqdqZXeGe41eebzJV2TgcWsrD1XovmcrUZxzBNPQaJK4RTR7wPDCYJ5LRPpZccNcT4eSkM",
  "key10": "5zKXEsFoLazeHE9WhnJeSmzgApBEKrW13T9NnmEaSsw8LV2T6nBP7J9fNBMjTx3qPoSJaGG9ZLA8DGnyt4CZRszD",
  "key11": "63NfH9KBEvsb1RX2E2V7pUisJWsUoNHd2Rk3gw2GZpRizDpCqakKmP6d2noAvnv25t6Jt4bCEMyvpbXzuiFS6wqQ",
  "key12": "4WtNLAndFqDQKJDczKCZtPt3qFAkW1N2xtRbwRGQwvhgkqXc2CWid6XZSLw8z4EBrvsXy9iBmtHCLHix1RJyastV",
  "key13": "5LUghZdf8m86U4L4p9163fqc2phHL83MkoHdJZdc1AcNGKkgjsxBhEFELD9CoXD3RnJS3uTNCLtB3qjK8LDhgHee",
  "key14": "5E3Fe7MpTuNsCgYaHWifUC4ZsfYRYiFjMp355ukg71w536cenqy7nXnJDc5ED7mGBDvAW81mD2Nz41gpDpiasGkT",
  "key15": "aHwgm7YwpGav6F6D6uwoUUiT1327dA5KmxAdGNkQfbK5FhJFLuqBsiXfCRinvpKPjH37utHBFyGs3u8QggUWJQ2",
  "key16": "EW8i2bSbV2VtHwDZssQ4BPiZHxdbnXPCWTKaaJbY6HCnajC9bo1opepX8AX3CuHM57aH8it4eqLUTvNo3Pg8xyj",
  "key17": "5B565LuaVyWQc4587CuVgQeWVxNKX5nKuVzsAbfRXiEBnsSEVxkv8f4BprXEvSRfE5Gmt5E7LKXtdvMuhMnnAgvb",
  "key18": "2K6bCXz7pxYzTQGkVKCR9G2QwpXvj1xbCbByuw2r47fX9C7wNBStBotv2h3F8E5LA4tBVfxEMVuvQ9UG2ZZ5oRdr",
  "key19": "2eh3m3QizCZ6Fqy6aG6GYhVdnM9cqqwrQV3RU8aCyeSvJyTNyY4Ec48jNiQt83WzSp3jk8ct9YY5vbc3P61yUXj6",
  "key20": "5ZU1CMh2RUcHCZV5d2gF24hvfM53SkJ5NjGvEpcYuryVr9GJ4LNE9cTo5zeTNCUCZAntBDwq1g7oZ8JE4nHPsnhp",
  "key21": "3exVaubbqDepbMtu3A49qGzzUPD3Dz8BqFdPX1Zk6nSfN5ErxV5hpQEX4Q4hR6mMQ4SWpTt5VmvBAT5SSLDjYjCn",
  "key22": "3qV3TYyZpDdoii21JeGGjtDEFvx6HJexCYf9CKbPas6unFeP3GBNEEd8aHAjRb9hzgr6QnsrvDVnHyios8xjxaAk",
  "key23": "3JaC1U2Ma3aZdhpnm3zAHp8wke7zmSDhWsvRQ6XASaSCA7PHiFm7eZL2b7LRhbsEJ8V3hvyLBFNqEzjbENW7iiVY",
  "key24": "5PBvqM4UzUQecqLE3GvK7eWQVJY6JVBN7KLqp8sg9FJiNeyRpoMBjW4RYXfyVtBKq1RdwyivFXLEiS4EnQzSFPu5",
  "key25": "5yEM8s36qM5LGguxtVHGoHmwi7x1ZagyQhq3a6FFB9vEyLGU3ZdjdUtcoAHKuGmVGNp32UYu1YQTgLykHsVLwGpL",
  "key26": "669VGk4JcWkHwXgQrSombQCiwgqs4zuuXdAyZ6RNtfgu87tLf56yJWkVsyRukxTQ5WLEDSuKT43xVQHdSvzoiwgm",
  "key27": "2ahuRQMiwQ77LTp4TQo5YdeH1vQUvMLVJzxsGw9paUKxCg7hQiyUTGVoN7urRx8j3VHdkLtmrR5SH7E7jxgpcEoB"
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
