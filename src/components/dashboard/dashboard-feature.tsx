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
    "2MgqBvVwmNjMV4aA3XwbGHMBY2zGH3JFpY9xAaJJ2aYK5P5pWcX6PreYeqVtV5jTwnuxVtGZJ6tV6xThA2Zf1YED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CHm9uTNpDrkcDuNhhmfvvo4kZzTaPZ3HW8ExEChLwHULcpdVS7gBjDqEoai3u2fHXpGrGJKgYepJB7FvWGCPfv",
  "key1": "2pxbP1VqDMSYkubgAaU1w2bDFoUqyNJoV4VLzjLgxCWeDxNNyitKxKtQHi7t1Y5G9p9WXDNj6ocHbeDm14q1Vzsd",
  "key2": "3hR2164RzfGXQAXbbGY6Rxyyx7mCn9XArAnzX3uNUmCvT1qnDgxTyjLnS8b43ZVjA7MaDKjqMvHLx6q3vFqa51Ct",
  "key3": "5BbUVNGnyhh7NXxFdA1pRH7pbqiAb33xAo7ySWcmndzyokzakXzS3Ycqe4RVzC6WgV3BPKx4SKpbZWk6TwrAWzve",
  "key4": "2Di7uqricJhPrUA8qtpMq3FVFWQi3RkJqWTRoSEW4fAm5GbSdA4hC2cYkyWSBTTmpHEkLjf7LFZ6wS84a5pqbXjk",
  "key5": "5zomectSRZVub96B78Svd3EvZH8db5t5uiNbgEVQ4Lz84Hu9xHbkdpcud8VuoJ4HVmtUPQdyTmztL4UtQSbjngbQ",
  "key6": "5aV5KtZMF3L4rtEku6Q8gehoT5XYiKg4EfvqsrmFQ1Rn8Y63WXsTZJdjFRRhczjEdikXVu44fCq984QdrQVgkj72",
  "key7": "32uJycfgVhuqDEUupf7ABMeADfuzkgUTiGbT1mAYmKouWv2c7YaZsenV3wvPrB1m3raSiEuNELT5SRDM19MFDoXn",
  "key8": "2fdqdhyMkVA2JfTuugUwW3JGbLeaBoejqz6CmzmXiYcdp2tRNDV14nBrZaYudCmamGpxsfgY1wNdTb4ZE7gR7Rce",
  "key9": "2weS6ZFwmgMTXHy2tDumzSk9VmUojVDg5vPjYZHDJ2cHnLb77j6cy1viGPCPD9U9RgL2M771Y89qj8RdqRex899F",
  "key10": "2iziZijkCpZKPsDQ8cwNnKicsVHakeH2PrhFEFgfGdV5unsAHJjZA9eusmMcEi8g3bHJDxTRjq4EcyKR6Q8N2i2L",
  "key11": "5Z2cWWQLKAvKA6LmWSNX3Z6P99mivMGEFFn4spWTew5VqrMzv3w88zfEDKv9Z9HfHbGSJ9qmV4ezZMaqU17YvBxj",
  "key12": "3JhhJ7GQt23oeeJVEabUrqVoLqZH4qHPHM3BTwiqv4FyxZphB8yxuCLAkD71mfTwSzxN3dyjoSDee7FJ3awkV8zd",
  "key13": "3Wzft2NARwBTkNsWekE3kAvbkAVLViDV7knfCNqJLTDcpKkPtt2sAGLGaQ5cDfwNFLnjvRpPjpvesuwD7CAmYhcZ",
  "key14": "3aujNWNiW5Lk4i3WNEcGv1WQLzoBNSWKpPx6Z3ZhXYYasYceoCPLCFKtgxd8iGPAEU6zFsjyGHgTGVe3WwuzhbYU",
  "key15": "4aJwjmgBwDkUZ4ua9VXpTjBnkjFs12GCaYcte882MKX6WYetAFCi9CXPiX6V3BhY7WDsioJ3snmHFTe52Gm2cSab",
  "key16": "3xTVwCGHQN6eBoUaQirKfyoiQAnuNFjfJn4FcNV4aD64KuG7Mjv7AvwMKNqbhcRu95rQChUoe5VEx5PRAh16rbSy",
  "key17": "3Mtr9aZq5WNAvqK8TxeXCDt3W9yWgwpEDPSD26bEccZwea66nwmCnPffdvkKfSD45uzRL78K3ErQ8poTXGhbCsbZ",
  "key18": "3JVuxmcnCwLR1no7JWhPZmYMG1bjfJDVmkV8tHGMBNTKfeLLfqDAJaUHeawzibL8xsozVb5WfcY3mtEWTBznWfPM",
  "key19": "2AfMzRhHweELVCA9jx79tVUMn1xSDYkwenWHXqFX9MZ3m9M4MyyuoAeQJLnU5aYJYEedUXRaNbYMbRGMz11TsiH6",
  "key20": "21AtXfezMASdKSscR9FvsxmV7Qa9YhZdHwo6n8W2qadvSbFvD1zQSiTVHp7WuRnPJncKGahzDBCBLwWWcK6cdWrx",
  "key21": "2hvPdv1xMtrGmw3CAgVEqYJYLTHym547g4PYKVPa2GL8CDNzbXfU2Y1z2hRqrcgGcRDo9vkr9rTfXUAVp12PRYYN",
  "key22": "4ujVoUsvBdydofHmHULAma8WBbRYdicqPAJKxhcDe8oPCdb7BoVCKfqdrXq8MVJ43NjhFanRfp55BF6hFk9Egjrg",
  "key23": "32SV9qqAoL9oVsJCVp6aXbu5sqjzgYwdz7jLkfG5u9PwNxdJz5Zbi5UmvRxn3LhxqFondqjnsgF7AS8d2NkieCi5",
  "key24": "3Q11KtNHyvQw4PUtCYxbu5vwYmty1ZUkkBGpCoujdaGfEzioQ5hVZHxi4nb9q3Syz2GdtW6pBLuzxT1cdewoXX8h",
  "key25": "3pJk72LoZFHaADkfsX7eV82e2Jwk3qcaFwPDzvhvqbGNrCdoHLD2XJBPx7exgeqQCpF6AdD2KKth9cTtGwszqqq7",
  "key26": "8TziToPaXC1YBbL4NvGytGiKvTA8rVZsGvPRyd5ypBtd8nHuYS4msucgQMC6dnT12CA5oha4nCWBKhGrKckiGPP",
  "key27": "2E26HgH1yvcYUskcgEAGDcAopPSUXKEXoXLDTSUMp544wzhi6wkrPxeh94o68XXuEoRKFKYiKax7TbAAwmTnX2vT",
  "key28": "2q6jS53dgyXSFpLrYkdVYKrP5BYw6Ho4UvdXiQKQvRvVx91xTdmVsgn2TBJvZzvGYxnaHY4Ssv9H19refw6PJ5BZ",
  "key29": "2o7LwW1AyJhmSMk1M3iH7WJQc8QE9VzaiacFv4tjMkHyYPVVenWBgASGuuAx8PCnpWo3JxJnAD7ukaus6TqZx29N",
  "key30": "2YkJpqeEMtZrU95zBvSL4EgRMMfjZZKM5kc1dLnrY94JqRuNdJQRfZkWh6D7EqdktCzuohSHLJsbAQd6ciB3aA86",
  "key31": "3W5KazdPha9Bo4dNNYLfZpTQvqbXPXKr6aJzGxW4MMUP2gSknWFKiKSmmuuxnEwuXtweBCjzpU3xUZ96mbhfbCm7",
  "key32": "spNpsfNMuLQgJcj9ca3mVHYXW4wm92KRC4rSmg6RFPzFSqKzdnLGRexfa6YC8emwinKLQQcvEkDLShyFYCfosMj"
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
