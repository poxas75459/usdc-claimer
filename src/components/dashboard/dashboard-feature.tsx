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
    "vev7dBTrcpHuHeqjnxZnHQMeAAwP2A3qxbXrVaPC89LFRrEUHvZYVM8MECcdjnvnejoQF4EdmN9LzgCspRSNG22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zx5Di2ZqoinurKpzr3Vcp12quqF5jkEajL3e5D4fx2G2FHx4gYZA3GsSvQuHSS5SLTmJwWrU13qpmVpPwDbnmmc",
  "key1": "5CvpiZaBywCGyXUUJxtjpxiep1qNQ79WL6RTSJbqbkbAJkg5ug5sfBSgzHoVe8FBXiFc6GtxhohSjFTcbsg4zd7d",
  "key2": "2yJQeyWncWoixCy3sFtx2BS8eRcn43cCaYF1q94wZt2T4GWdZBnxcFoJ5HmzNGorrZFjZPonUtqP3cXGkBRPgPWm",
  "key3": "PWmfKxvdKu2rnihxvzFwpEacLFGNhEGvh2WmVfE2i9C1sPtBa4umo9iVc4USt3sLYCUjAUV4vmn91HaoakQBjoh",
  "key4": "2RfzYM1hKTWQ1rvVn9gVZsaG9qDgFsTTRQHQKfXvSmYDzSvR3SMEJcHosDMYFC2Taf35MpcHf8v9X5YgBEJQ3bx2",
  "key5": "3fWUHRqqEDn3UTZSbfWvNopPon5RmneAEj41kZhpExB6AeCtxS6qpZ4uQTiSsTeCsdW3Qj1XxhcTNZkKkAASdtZZ",
  "key6": "5VvT54QUqQ7qRybJp42bYDCjYUFbosVirrTBurXAqtPDVx4DRNQh35nVNd3Agad5yi7asvgReF6WT8yTdXju9zwd",
  "key7": "5HUFP3prYEnsYbHScB9tBve5YGgcAEaCzPAtqzg9cgeKkMM9YYyw8rhjLYPY8dExCGErx82S75MUXH9fcbFuYKUS",
  "key8": "2cjBdo1yiwRWToPvGsRGTa9K64zV5sGDfcDwtddVHFMyFjXmzKQpihpxSR3i1FXY4yRzDtHdSGQihAYKc1vguhEs",
  "key9": "3bncg4hiGdZx36NiUuFRc6y8qkH52NsoghXXr2zQVJ7oM9UZxFehfQ4QV83JLC5Et6HjXeh7LZYYC7bnzaB6ycQ8",
  "key10": "LsN1FFHmarzB4Fa871qhX8AAygKCRmdC6FqvussMqeuaqvJqBcrW7xRb9hXofkyz4xPT79To1NmvcahLBTQSrqF",
  "key11": "2QKZXKtwS61HhcuxmqKsXG326CkoKj4SPRrLHbY5JtXFwbzZof8cz7CHPE3LxnYRue3MJVU3egBrU35AxuWF4ZvP",
  "key12": "2bEfLxjWzBNgDPDy7WBCpzM5GbBUXKUEMfshBbyXA3DoC3W9UKHbZKSv9TkEQvuYt2CEdNeT8nQVuXrkVCqs8XMn",
  "key13": "31VdB7VvMpjkKNut2pvb4YBiYZZUG9NswguwgpGT7SveTS6mBJQdqvfcBn48oAnk4dXLzvyN4qPbubtroV46LNLW",
  "key14": "27xAAfThsar5ZrVvGrBDwELuRLrvRfknAaKmtcuC1vaPkt4gpktaZnBVukH2wGEAEBNVw6fYRKBM6SowmXsoh8o3",
  "key15": "4dLhrp9r9tVJ27XBXAyKeLiVY6x6khsmxT45TPd73KNhK2pEGjEPfiMTtJrhdKiXY5i6kJWpJqScUPHoFoPfwvK",
  "key16": "5AUjimbZQ6BKnUYYamGe8ZgNQ82KZjm5qBTUFTiWNgmNR8TydjdSKmfosnQiNaF5dgdsUuyWp7JS5Fv3ZSksbfk1",
  "key17": "3tWMWb5xmNjbVYRYdG1ngv6R6UEuCu7x6UQJE5UtnrbQSzjiZaFMT1ReGEokKSYSHoEyT9T5BcpS3yEre2krRa89",
  "key18": "3KPeKQcYMXPWRGtXdKE6q35wxtySe5bioK436NhSucgj3kWxFw4DTsPCAMmdL29eYUZvetBDmmJoJvjsmgSAJfsJ",
  "key19": "54eBFsmhmJWwpBNXKjZxUB7GbKqerBEZu5ZyHi4G93yBtokpjMzkzBQj7c6GRw1mZZse9HSzC3B6jhbkAQysNTZM",
  "key20": "3W8Qt35beQWjEu1kxhdkumfA78vkgzTGWt7LDK5Pi9HqFMHrkUubfPymm6fqvBifgoF1XchqDmKF27AMih5NUGWX",
  "key21": "9rMcNhHVKYa79uuLhBLchJumWMETkPorAtcHRWr73TWh1yXVguRHSLDjd8KFTYcQL634XTmSS5WMdkVgxmsXpNd",
  "key22": "4jxZCmV4roce9Umbvtt4y2pPhP8o734dmt6SSfZ2DfJKJx2YmEnFeykBapVUvRGdbzbcWF3rLnuVakr94mrPbHJT",
  "key23": "2d3matu51BJ8zueyr2X1Zcj3EtBvu3tt9caJXHRmpQgSbc3fyty9Ys9TUrBR2RvUac35LuQvUFa1KgPVJQAjWh5T",
  "key24": "4Xv8yq2FFD6B4oDiRRuw1RHvg9Qy2p9KLHG4qa6T75bh7cJhedA14ofYLy8wZo8TMG1fiNnGTEAxsQyuYsNtKXKy",
  "key25": "4NDE2QYiPYTzduQCPKSEDEPDHXqvExFSTSB1vU4EaZD97g7sAb5zoDiSZUBqJhwskUyPec5cyhYNLm57TaXorcio",
  "key26": "4vMtzxDW61EhyEjtokzofZc3Qv3zpdoJ6GwpMmwaNZMijayBtEsmokUaNrsVT1iEMB3SRHX7kQCSPCMMtaFW7QQB",
  "key27": "XpDVbWN2zEdc5grQdphXPfGZAJbfPmM34pYNAoob7Lvi66rNC2QeYseNksRnbKuAvGkMbDELBRPrpRudSE1NLTR",
  "key28": "2YvqPhGykMMtnfuBo8sTRV7YtQjTdvWTWJa1rCxQwFXhikzdvSnzhkEQcL9LzajUwUY5fKHwbg4DRtbUWnSguQWL",
  "key29": "Q2ncSNakkGBcx1XnQQ7JsRAXiYYeb2jaRkBnH6scwDqHymEB5uCGJEub7KvH8Vpqra96ECHFssxrZVxVsewPGBK",
  "key30": "62jbRBikCT1FbMEZdrt52wxTeLFTqDoJST8BBSidGe8EKGRKhbBfxW8xndZofwGaLyMKV27Nu7a9neoSie23jMHr",
  "key31": "2mVz8Q1AA6ma4opDfdoBV4kVx1JsJ4PKUQnGkM7P6fRNXCbQBm1np5MEh9cbx9eDxP4dMY57tTaWivUDtucNJniS",
  "key32": "EQDDRu8UNSSqXUTPce3nYfUKGxToKnNhRTgjfZuEPYyR9KD7NfqjkSiBUyLPeW4bDReDtveL2BzSUoWba1Lxqsk",
  "key33": "3L32FHUARhWihGWvHU3ymE47gVXuQotN7kyYus95a4iqodSyYgy3H5yYhRrE9WrXCc7HSbcD2gNv7tvcQ4FHwzh2",
  "key34": "4rmyHKkTRWyLDBKFtrZzqMcWtxtWgosFGBQu5Ze79pUuEp2TPg3goVHZ2gfoCGximHPCokNnFDvQnNiFRmGwmsdf",
  "key35": "5zrX1m3tog6s5uiQVUfd5uQ7PgZG6Mf26XkYwPr5WZhYrqKWcWigkLGmG8d8qFwLyX2rz2o9eEe7Bw7AmRTAmME8",
  "key36": "SDAV1xh9vhJmrGr86J91roBHDfCo8qEtUNnvBJKykLgpJCvv8QZv52UBDWF2w4uttc2iDg4aVA1jtAE41xjijxC",
  "key37": "2wjBb87nXB8A71WxdMkJ3JrmXQHdg5RfkENyx5Y7VPaP7HviobpixwG9Cu4HqjzjmVLbzx9XvBEpunsBi6X8AT1A",
  "key38": "WSVQr7Rq5Vh6dWvebWkjAYnJnRYJ6exsd9XvswugRAKd7W8BD1hUwTCZLdKkT8mwCLP5WYyxBosJNR8pB2u4eco"
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
