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
    "5dNKCdR8jHwqEuQpyTYLcJd3vqF9yRG2MsL4mip1XmRjhQgoPUpGCfNWQJo8YhK5hVc2QoCmFdA2KQucEV4dN2P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tyLqYh9qrqTawzLhTTCVF4W99NhP9FwGZSvJCFps8UgzNyisczDjCY86v1hMdYEBeghgNz3KCCzYUXsDtu4QyAY",
  "key1": "zwVUzKMLT8BRU51oN6NsT6TuVy7BHWZDqmcFK34NE6D1wW3LEWaYS2qLUW5EjjZsKgefxhZVtm9C7JcSK9hxwoL",
  "key2": "3yQ6LXCGyFhtT4XQJNV9ipqXyKT8usyRtZbGT2XtveBkKKHTrFYQo9uMMbmYbTVjAmBpRJR1VCywbn3h7zgA7q8B",
  "key3": "mQSQStVwXtmxFnx45LvyhA99TetwHiADBRhRsVWHabLBf3zTkkCSLHPiPnM547ixgm155U5mGi74a4VDoB1vpcS",
  "key4": "gf3qevKHwzixNomQd7NdBgqzdmeLUyCynfpZXKCdzB1yF5nvssSGAvskPQbUzpx8RUuh659ZFUwssd1c2twEm7w",
  "key5": "38FrgR2KSRUW1fEPcarGYidoMZE9ZGBHJsfg5Z8KVgz8NMsDBgwzAhbzZHCvMqWb2HzYeXMwhub9B83PVmvKuXgX",
  "key6": "458yskZZRcMjF9hT4mi4U5rCLxNvdTgP7wXYWMbdU5ogGwDMV22bGdC5yoxPgXfdJccRHeTY19MtRJUX3WRDiqPK",
  "key7": "3bJ8FKcNxfPMy8XwPDGSR24CRCvG1PDRGLMx1JdmJnvXUYh3avkjXhodWSQjV5vcDimELJYNiY9K1f4vNyNQ1KW8",
  "key8": "3Wba5PTXCukf9N1q6vF4ddACrLvqAVGyGAfNXKRsWVydV1Si33qvjJPnwYLz8TgZbEi4YWe566TbJ6r49t5MJxVe",
  "key9": "2gDhtXDeBRbhgjTcLcBF1ukGaq88u9h7HW2qdBMfgT5TSzKHLBKaqkuaAzRtEaAC23vhCK8wTsMHD5REELfCwXLV",
  "key10": "2q9S91xG1ToXbnjtytViC9Dxhhfu2rPSafvSU3r5EP8StPk1wrD2Z7WsDwM3QsHiNypJ8V236sLJnAYq3Gw3HVmW",
  "key11": "WBCV6WqLLi8Mx5tNkwjD1zgN5L4fEap6d4yZqvoP4Twbsi7RBaMHEwymwrzSrwPMnV5bU8DnSnaAvzEpp8Voybd",
  "key12": "5EuitLnPD6PFeAQQ46PVrKCRbG2U1T4vQNfKG9NWLuvkqL1HLvdU74qUZCnS36T2MnBKYhWhkxscViPG8TtZHmhV",
  "key13": "5n46ownTsrE1qjWFrLecd9byTvEppBBXEzgjx4DPMxrf4VhTjVHzDybTVhTWqTA6CwucUwJ7p8gZWVQPHtMqcher",
  "key14": "2evU2Y6bszXHUDBjeyn2eP9x1rgiTczaUUqcYamQsZFiLzQE8jt6HqBZ8vDSwCb5pUg9VZYZ8ogfneAjZzTbGahK",
  "key15": "5wPx3HuULECbZBCMeCBpZbMSTa5wmJQuK26AFrPnRcQZA5S1huF7rJSubsGSRWMdF5fFBHd367Pj1Wv4VxKSpRkH",
  "key16": "5ByHArNLcBAMKELkKkjRK7Li4NGmkPyapzXRauR4ePVYjDu4JfcJtVzGp9xPhGVLwCR69mpjsKsopTzsyejcbjNo",
  "key17": "2j3muxxxeWFnKx8Dq1QUXiYqyrP1w1bQHXtdCcNHbZYERKHeXPRiLUhXB5FFDpc46yrcgfJqDbqzgvxxYU7xojC9",
  "key18": "3pfikqNMmhoRZrX1y8VxaucCkVd823iscfaqKRJeR8XnAuEn31tDfYzDQkbxJDshQxPRaMpNjua3L9368yzuYDFf",
  "key19": "5YPrkx2ZY7t8wZ6Ck6TyovQP5CRMH9RLenqoKFqEf3G6B1n1a5mhWvVJYzsHnavYSMm3eJT1Th5y9dn5fs8TNkzr",
  "key20": "3P5yHt7DVAzJYK3LiCJjNtHytocaUMTkPMdco5xvzcWV9SYytjPqYy8BL9ksNKzeCTFTeMTEtiNNmFrZA2j1x4Zd",
  "key21": "GHhoPDhLqXjWsUcukGR2cARawWZaukDoVes8QpaLvKWmq3LS6WZ4Z3bP3aY6H8jAJxphfRCyc3pdwQLAcJiYVrN",
  "key22": "4g3rzuqCD8kry2Wfhje39LXNoQFGQgrXd8aC4EtNsY3WNNHcGQBAXZcLes133ZrFLb8jHcz3xZBFVvHnNsngSXeo",
  "key23": "5s2TvNDbpZQuyy65BwM5XaSv9Xb5zgv5eTAxxoELcQAf774htEETFsmUbBfKkYNEj61xFervFoKZm1SbzuKWnQ8v",
  "key24": "2apYrFKVqRYvQ9tZJzA7zV85zLvfStKjGz1BGWVpAR9tXWMRNJw6xk2ihms7xNS4znBqATYdCEK4ex2EP7qsXKzY",
  "key25": "gPTbCVcpnioT5Vy3bYF98wWT5YMei4JHoqvLDn7g7eimSmMtqmg5bmQHLuBW19dtHqXFoY76i8fKoErS3DFsRZg",
  "key26": "4W7E5tEHYDsMDKtxzeohCekvNbcrGb5CdJwE7BPUmpv4QhD2UkDMxsqPNAdC3D4uAmhiePibkKzfFwYqWXTrzCG7",
  "key27": "4FcucGMrrocRr3snJq4CebE5qsnbDw4QCThg1iVyFRvfCKFjiDTBsatYcsMQN7iNmi8CUzbyTRU965t9YNudV3ut",
  "key28": "3tz33HLnQ6uUtgJa6wvg35tfNCMMKuEK51LkYhyw4niMn6Su69kqXoEJUTqpGYJr8uzDwDjeizERDjHinKNGQuor",
  "key29": "4Y2sjozk5GKz6bdnkY8oL7nTZkYrEqDAJtfd7Krk5cTcY1TCWuTtiU6EpgEyMPz44d36GchrZzn5BrDPy1wyiqPb",
  "key30": "63jb8XC2LKBJdK5qY8Lkg6UTyXzNqkHzMxN7eyqS55T84WbpA3GUMUwEtnyvtGZLe5Yjo5mmD5YQbtMSLoxLvv7s",
  "key31": "sDtrmXoLUfQQKzZQ19fFCsQDKRWqFnqNBxC5SHCpFnYvsDh4kK5omWj3jtxWvJwkJK76CB6R9LJpm18eUpZ3fRZ",
  "key32": "3RvsTGAP2xFgWukBsnNqCDmoc5Sm3bcPQWFrAv4VnCwFtJLaqEuHmpJrgDkvJZmpxZovYfzPQ4dJVJUV5KQjQZQg",
  "key33": "2KHJyKhN356RzozLhfGV2zCqhe1bHCp5EwjyTw7ULTgetnQdyYu6Ld5WR9aBmakLNruq2MzdAt5yw9kYPuV23W61",
  "key34": "3jtBoB58aSnqAp4GWCz4fbaZWuHBre3ydZbC8eCTPzsonpaeMXXMcirtSuF8T9scy8cwdD3Fpi33GPw2yXrT9vJS"
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
