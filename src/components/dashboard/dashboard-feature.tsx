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
    "4dNfm9NwPkYaeicz8dRqHazZmLTLdSqZjKoz7Kt5opPrdLfZB3FPWyG4kCzN4tPLtmp6y4uxt69bRjawTYkba6iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NL1XFFDozifZ2CFdCBVmgcPPUmFWVMgZzgq5cFkLsBt2um42xzkf6JMGUNqP1mYPhGDZSqejioqtr4DFaGX9dma",
  "key1": "q2RJbSRxgP1HKBXhKXW7ZwTiHymo5UHz6iXSRxweYmGPZg6CeR7oPzPAm9xgQyi8ue1ZZwHXYpFTUi18MdUi7mx",
  "key2": "2xrdM96FGuFJskJCd1BWgzyiLysDUkcw1TrSvj56Hv9a52RtUFiAL9gWijbNcpbSdiGxj9xqUNoUVng5oU2UShAi",
  "key3": "5DbFtBFdNeKuheRwrxVuay5TFPMoFZybUbTKx5KsjaeuHB6wm871tqwPUzWVQG4s8dfNqMwKcFmpPvKiFVwS98EW",
  "key4": "5JhzXv17KBtFdpkJhU24HM5Cz1SUJzqPwGbHekhstYUBco8N1rUGKtSFjKQxBabnpxnx5RL81j8gjW1d9zsF1kh5",
  "key5": "2PHy1fxUfoszhEoyp3AfYupawNHvU64fo22a5ZDSv9YLEcXGgD3oTxVc57isquFEaqBVY8Ns7uAAHfUmebWXFHhQ",
  "key6": "2vxtuE9HtctErn5QcoyYn7YSGoYuGtSQSwjenhpqwomtdeC4Wx5KV6LPgo1yLMXViBKWmb8o8xNBfmgYZxhfYDzg",
  "key7": "WPzvvBnHzY1c7iGnMNDAcPxCWGXymX9iCuAqwAwZLjDscBHqjfxcnktPzNENe8LtBnWVBEbBfmc3fUWQsVWwGLe",
  "key8": "3d6mVTKzbBVkLhuMK61wN7amnQR7kyX633qrR16UB9JMKvEq9TxYD6dxQpdGmpXGHuVPFBLntPP1VqgLFF17Pn8k",
  "key9": "zD6LQxGWMvGaaVQc8kfgcUYpkaj7ETbd4U1yzESFJkwrKRoUW73EBHBJ7Q3Yy2pvzSgzDkRmdu93rqzpnuPiAws",
  "key10": "3K1o9AgK1LGbgrqXRy8KGBiWbPe6oVDeuTZZZWiPrAzvja5vinrRuNqo7P19xBmkRr91NVDhyNweYtyugw1MKUwZ",
  "key11": "tAqvcPo9QojKpWoN7h2e5RRzBw2WAWmQJRfJ1c2HaMuDbHvrnhY3PVY9GMQNhMM7ZXxnzWtWd9qN9QLV4eEV1ZA",
  "key12": "3iMwmVM6viLYpsYjytgaU5TEKtFu7zQaXP8RqveUfpuama94YH5NLw1GbcM1kaxqBt5waAxVgY7vfkanQFcphGHn",
  "key13": "4gCgouJmntEa6uDLJKkZ1fsphFoN2PacNQNuMdHPerihzQx64pSec6hLvB6w3pFPReiBPWsc6VZrKsN9FNJxcCae",
  "key14": "49RKbsXyifjwRHeeL3NUvNUCRuzofUBvoQvuiRnrb2s3SZ7549AeDfY4C5imULmxxY4qwBMRhgQXMUcWg4Moysyf",
  "key15": "4aaf7aesZwNXku198rczgR5UvYvHqtKNiM8qDG4ARBtexHYWNPFVgJrQuYZJkuRV3kJbsAfoVhKTz3JM4UTRYg43",
  "key16": "fW7zND4FFpamBwvgqUH8wbQioma4GqTKDfYmrFPWT9xf9TioWfaJnfZM2DPQTFeFFqsgKEn8HPHD7tKJVziFvDt",
  "key17": "3UyiVstuRowc6mFt1SNmuhAtVeoR2MUba8NU98Wcc43GSpKS7qzmKMhZxAVdpAHJVfZoZ6mf8z7CYP7NR8aLbWUK",
  "key18": "5ZeGJKhQow2Nk7hCBUDnNMojxkyRD9n5MATmqZ91TJ4HLqymFu2cdgJX8SR3pVF9UZpcRFK7A2ty4gr5eLYvQdww",
  "key19": "Dn9BZPukpCgFr2sDHMwMmXaGz7phyqBAjy7Y7H7AtSgwTsD5Sr662sgnuYwp3N4vUZxbYjWnEX4RKo47SFCS3gk",
  "key20": "3JV2xLT4UdcWLS6RM3H8X25sAYsUHSNEJxwiExuBUigjT7jWA5j12iRzu5wutxEYyjTRS8T1TTNbYMi2Ljv4iQG5",
  "key21": "51y1XVFXBFnGPRYb8BHQ7DQCq6VXbqWhe4YKW5rfn6EwtfwiXem2u7cq2Sbwi2ejHTaMGesvexPTFXeRNg1xxMj7",
  "key22": "gWr4dK38KxB3ZJRmcWXrEbaW6XjKxXH9Fde4fn1c4tV2C1peKc8ateaFT3yqiek6CGZiZB57Udk8kW8vjkbNDMx",
  "key23": "3Fyzd1Ni4ZXKhZyKorgZfT44yaqgMqD11VAQnrZKYJwYpcqG9RUCo4dk3YaPu4ysCsfgivK3dnfMpbG9vpBXLHwZ",
  "key24": "5VVTdnhbkvNasYifXAr4fJrcVQ2yvHQ2k794Nw55XBvzyffvfkBScENDjurRJydzuvhsAEV9oEUmkAUZKZhhZj9c",
  "key25": "4bVvpvjfzqdMcuDM5PddusAgevii1LcFYvcwyfTUg4qFrBofQFxmXvdHnsPdRcu3dhmV32Sfn5SXbhGguVnVznsS",
  "key26": "2NgQFToafPp2EdRNiw9oaj3wDCXU7UnoLM2PsUWTLBiV7bdEvn4YTCAUwVysFwCMYFpJhk3GbvM1tmitsMea4qKb",
  "key27": "5mTqU9tD3iW9PvpiXZSUhJwcwFxj3kwLDHa3gLZk1UY7uaCsWbu9c1nXscEaFUjrPmHkwDJfWUQe6G1CCwdwfYmF",
  "key28": "5n6HUF3yxEZu3ApWtGyu8eV3CP8hNwcUhHVCDWTB9p52fV9MLtxmA6FFWorokwK95or5oaUAHTxmaiGbhGqUqvdj"
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
