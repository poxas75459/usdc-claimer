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
    "5WNgZBpfmZ2xBL8Q8mvsywHdNVdZCD3EqtE9Z3qSXk8HhWT41WShNX4DXKtoU3HV5Ja4KfCGcBXnD3Lym5sFzh4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438JM3BwXnvxxjzDTA8mxZi2mGwF3T47T46twFhrsRKcuDF99boURMrdHvEqcWdv8p3kL2dAjVexCrRfC3cGEJZE",
  "key1": "61XwA7tVJut2cYkyDRjByw8ok9r1pe6meWxo4uA9TqwGQHFW74K7NwNXLEJtGi2P319u1rns4vHtRA3LhUoRwzy2",
  "key2": "3W8ACCAZHEeMD9aRGr1jsaYv8CVs7zRegMYFQo1FKJwb5o2GhVEeeemmf23rQZfRN25p7fSbAT6MoFPHdFMEez1m",
  "key3": "5RQbkqQBikaSboS94hJ8HtJGpfwY9qc8YCVa2um4myWDvERi3qYX6fRLpEc7o6nkh5J21Lga8Qu7t6L6xZvTBLpJ",
  "key4": "5Z9xRvSxmXM6sEsN7LC9yCiJY1qRSHqxFuWrezyd5FKG6aDNCJBKA2maHJvWzEf2LacDRA4dGFb2gcjL5GHguUBU",
  "key5": "2zrxAGMk1miWNKZkASUyQxPJhmrCEkuryQVvRHmbNskt3U4b3dkuuMNLReWmT472JKcJgiAgrbTuebwrirHpd8hV",
  "key6": "4DSNz9vAbFwjnKZ7Rd1oX8er5rseaCcTw7TWLM3irr6tEpZv2TzA4P17nNbsUvyweikqxasAdpHPqXuFVqEqZW7c",
  "key7": "4sDtjNXtS48e7onUFYZT5qGsysuCfGh32sjLQFzkigp9JmCxY7DU3LKJNHr5Gp9ydbQPmM3megbX7pJNGLdp4gu7",
  "key8": "4k3GDWPV1FMSSYgd6PhWZA4K6HKyjAN8YK354Us4nGaNVziy45DxrFGmxKJQuqWaDizSTvgR6odrmzGi4Wx8bjZg",
  "key9": "CH27kmdP4fwniuFDs6A6TnaskPUAKZ8aFRNWvBbC8kFusvx5896r7JTbo1qMbTdBAvj6H1n4bKty4nTHTyoS9mr",
  "key10": "5b1jnZzknT4HhwVnPzPRDK1KqynGkxKFVx4wmRRVLbY3ByDPme5rnfZR6K27eZA5k6pE6T7n1WNvyHtjkdguQmQZ",
  "key11": "3gPHqusJaJUX4ESBcNADvyxVx72KQf2hv419bCvPgYq1G2G3iYAPKJZB88uC4JanWDqiZMxWzNDEvHLhVNk8WhKt",
  "key12": "4mFHp564m8WixDhQ6VcuTY6XALkoSGNsSRGbuCSVStCGRBK3YpuMMmvVxbPoWkbgFh2MLVD8M2bCndka9fxdsWqj",
  "key13": "KA4HyeDyLVDuZB1ccsufvedNVA15hKCUhFgDubPkg8rwNexhYCY4ExVW4EXCtBgVPYWq5fxsNJL43wMFRagEA8B",
  "key14": "4UUmCbU6cKEVFmG167mkeEjhNGXDonK61t6KZNWN4YzB32FAf78CaRJ2Brn7eonByGL23E8VFzrJLyRJJk3mrRfi",
  "key15": "5ZZiC7bxKw2LqhKAckzKVm2bjt1P38PS6ziBgWdLzXxLuYthvb9LrA7UqoWxY9eXAYsGsDtWm2CE8aRWzgt9t881",
  "key16": "55pvLxjds3HNof2XfA2TunLxJ5erj7rayampdGMDUS8wXDejzvcBG41GCFyhgRp3gzLvDwUwYCCvnG1YGSWAWgd3",
  "key17": "5wMMH4ivLsE1tTNjmsoDnDK4VsLdXmXQt9r6CmfjuVSNSvVPsyNcCaF5vgsTkzPFvHqQJ4sHnaKzFShygwCzN2K7",
  "key18": "5STm3q3VWbz4n4XQXraXzBZr6gdthNqAy6V3Xx2tH3AbQrfap82uqdaHavJdzKEWxSGePpFu5PJDVa26hFiopZ5a",
  "key19": "ZoobJTu9kfBrxhhHHvuZzYX7R5dUYCrxJtWdR9duuV9LQN36VPsvPigQqgDxzXM5cDx6G6crBGN7tkXp9BUiZuA",
  "key20": "3WEXqKqQNL2nE4NEX3rba7iexM5pMkgaT7kXR9umJDJYaQjvWk2W9Sznpa2HsJuWXUBsYREDiEjTZ6mcVtQy8uUH",
  "key21": "59EPkVuQKjdJwezGbGyWcxPq59j5CHMxD3Urd8Sz5wUS7ukR8TKNMyqQdLyDuo9MAZiLaYgxqXwKksdqcmkFs6BL",
  "key22": "59cKz26V4KGVqT41YsxCuQGzLsmcFCgtfjhLENWAwrTSs4MzgXX2oL32JdVhHavMew5Xzg3fzDJz2LxuKMGRU7Ab",
  "key23": "5zFHKs7QzUWncvp4SLGSMG7cvhzHc8bKtQGG383T7RHpvADsbZ31xN1ENaSkXtWJNGywLgsBJZA4MWS3caZUQgaR",
  "key24": "2iKWavKaZRrpX66xyhwNBVE1HHArEwxAavV4kMwTgv7CDEYBnWudmU3jvdME6B3XrGXThYE877z9hckGzyHBNP3w",
  "key25": "57su5fdAHFshA7xCYVJwfYZtuF2pS9axRr6E8JjzTTo9oaiR4wsScHTXZKGTDdDX8anPAPgGFitt3D5mid62yK3S",
  "key26": "6aKF5i4vCHqxDwpcewEJxJ4CxQaZQmzqQKwykibNyadDYk2crTQFi8B85NVshjzSJm6RjsJW5d93vSFGiXUXGmA"
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
