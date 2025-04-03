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
    "25eyLhouKezSEpvf8xo3hNXr1vCpVsivakPFLqUncgNWBmE51V8LeyEGvw2xLKCfswgcLJzzqW7cgauVf5c6TFzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gq2eB8dos8WzBtSj3dXjmKSbVRfKxMzjGZoBEaCa5FuZUXZxRJEaDDK5Bto3qChdJoUhD1LW82Epr7SpEFnG7mj",
  "key1": "5SGWXt55ba61g18MZ9KSrEd8RFetp6r5TBp53VamYhvNeV4d7r1oZRDEZSP2Ft2aJi26FdNhpmjtMJPBemZgnF4S",
  "key2": "4EHNnDnqXAwDPZVaCm9LYdXNnF43mfsbD7aKjPkwgXcrRkzFjYE6GVAACo86cUYSGw4oC78NdeeZ5Abs6LALagC3",
  "key3": "5iGrEjxjnQe6PYoPetFdhxBu6bz28Hc1BJ8N6iB8tvoU8SUAE6EPcrXMvjAUYpv23bdmtMZztH3ZzCxe2gssLW5j",
  "key4": "M1vqGVCKHHWcitp4En47S9CNRcv6S3sjNk2TNkkGM6yxpTdfSivwp9zEkHkpnFqrM5PufyKaWbdiYF92amNRUvx",
  "key5": "3x69ASfVoiHvAr2kqVanxNFqJFZGvSzUpdksbttxmf1MQskkE1n3rNsaZTay6yMKwyvynPSHAD2mLYNgPu8Nv9G5",
  "key6": "iZxDsEP26oKi4afgwaoVvdEwRvotSAdpqyY7haMmRNWJ5hVwxDZNdoTywoq5KixKjrgQtWuwj3MQmKE7kuPJQg3",
  "key7": "2aNbyP4YPE1Hi7Z9dHVfbEqyAPpyLEZBetFXVH62wWwjk2iZ6z6cwv1xHsu56t1FZpKJJWKBcmeHnet7ywJjD9Tt",
  "key8": "65D6cJZ6J92A6NzEKfe4FBfDLEiqm6qyyPpzeg9ZF4ZoWTULFANTqJoJwSBo4tdcrdRsGWhV3FoG8sP6bkSHmM4R",
  "key9": "2r1W36JyiqXV6JmBymhH5zmvZYNMz7vJBwJ1132kjbLpxoN48MBnx59p9L1Qtf3Hx5sPoFW98z4eUL6HFp4XdAyo",
  "key10": "4s5Lo3GvoHADFR7emPhzZMtmehf11z2E5UALKuUGnfjUqXjFtYx1Tg5LgkrrDBP4Ew34pmbnqsRMQKuvMPMDPwCM",
  "key11": "5kPRq24CJYTMJq8x4gVhGaruXH4bwz5KLaR55DXkZdzSpUS1pw4T3Upvdi9x2wCamvF4e8qwFGDoKGXMB3K5Ba23",
  "key12": "449kxhZMJcytKG7qxLUyNSGaAUTnoxWVefwDBEwd72brM8moYEuEXkBWGfZ3ezYCBw3xajz3zJvF5echkU7mjs5u",
  "key13": "4Ksqo4kEZq28vBQKdgeTSScKxZYFDgVkWdi3C6WtUrJYXEAHtEkt7r7T3uiujYNJCU6mezPgf5KFYL1UZwe7wMz",
  "key14": "5qM9qMiU1NcnFAT5Gkv2sHxTpGEXzD4S6zdbi7NVVAWtmBreLvMFAYnUx1Bzg2bPV8559F4LtbWgEDDsxgKDELty",
  "key15": "4qZcwDsHzPrsXftFuYerNCHZcTGJWSJfASDbJ6gBgf9YcJBtYEMWSMxt1t3zmRC4WWKHB66xJGZfmwZ9kozsuxgF",
  "key16": "jpCpKUpoBbrfS4a5AHCyAuS5hoc61j7TZUtyzaPY5WBXd5LYW8qtc7iKuaKTrAog2Q9G1jptp8gieyjcx1tP6R9",
  "key17": "3wDe38WEpRjmi5ZcvELTBdVJCKVHg9MURrNqiiJzsQHfatQQRfDD7659VjNxfebYjF3R9X4ksxry4W8e78vGAWew",
  "key18": "4tsmBD2CeCgTZHpMb4Qyf5QNGB4J6Jb8X1QYdKBJjuRyRcDkWCEB9jrphemWPP5HN6rAkF6ra9nVewdr1QK8HkM1",
  "key19": "uhq7zHyswK1Li8jftGkUZtyAC4f53Nj9dYE4zpnKcU22HBYankn2UyDmyBBhcE6r7CQ9Vf6B7C3yYRzLWC2fFXr",
  "key20": "3tkNFPYSg3aaUHEBhTe5QFuuBfn1tZvvnXnV8nkg5vMBmkzbcquZzWJ8rQAUiue9295SYJ3uC6MbFQk7hSgjt7hL",
  "key21": "2T4sJKheRqWoPebR6KUtGqLUrxJt5c8JvLWYeo1KDPFLuQwkQ71j5Cye7xkbm3tVxakMDK2NMokRQodRFY5zyuvF",
  "key22": "QpdGHSDZ7cEp1Xm3H8GwDLdNfRvVpyBjrJfYC4JmCyiNVQdT8zvaHiMZhYSDHMGz2seWMBpE5fHc1YxV3HntkER",
  "key23": "35Eu8DAETgSVSpCHVjcjRbbhzvyaWEbUZqHJuExVXW4qPx49Auj9YnBQJafs3BMak7GuaLKD9JJeHyR7gdfSe6qx",
  "key24": "4wZcsRckqtq58aoSavgdku6DSMcS6CuXNMUpRAYcqrbqSqkyBKkeX3aqVGxeB25w4qVT3LMyM8QVQR128W9oBfAh",
  "key25": "3YTUCg2MPzayK2AcdKexWoTWXXFjfCRXyHYifo1NQgNi545W5w7i7STypkeKUFdrhHGbdpdB7r7vjZx7iszP16Ee",
  "key26": "2tZ11V3xr3NEkcFUQvPDWgwusLVPFYE4qg8BLNetQfqBXVfqCJwt7XZagTbyXa51KWbc5TE6RnoZ1fx85jjp3PhD",
  "key27": "5viFaiAF2joPg9MDYHQSJLUQZnxaChSSoPsDJV43fcZFNv5CQPXgpWDF3sBd9zsTAYioLoh9avoxr7dWkzhDT1YR",
  "key28": "5xtK7xciLwZy4FeUmHekk9UHx8zxwMy5xC1Pw5G6dXD2mX1Z5mEZDVnhMmxWcmg7bBKEPhDL3s8mEicmCxM8TUYq",
  "key29": "4eyjtMC6pWJ6U4Pw3RPYrtLoousxkop6zvoz8NRQfpYyBNUhKHKba5fiTqWiJjEea51XkvjUYCXjwL86Nn3dsS67",
  "key30": "4dcHqAJdd9QuUyGA5pF6Szv2AnuF8VZmXMG78fzQKSzpgjRCpP3qMDxjPVdJw7G3jDBsDp7i7TtnYKVr86NMQvCP",
  "key31": "2LdcKAu8Bd1aueES6sTsCWwNQ5QyAzg5945PtAaNqDHX7fWEME4ZA8s5oydQEeWubYWVWWUb3HFtCGKE5jwQxXgC",
  "key32": "41rmJ6dSroY5DxzKaXUcQZXAXvMtFDv3rU1U6yjm3piJJk9AoCmSurvS9m8XPLNHJ3bVgWXWkohztcyYJrH9NELA"
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
