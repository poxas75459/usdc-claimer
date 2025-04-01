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
    "4KynsaCwQXqBDiFjmC2rgS3cw1nU4E413ygMh4L3791QYqnczKtcJLPQt7jztFaAgYPx94dDi5hDYYfb6w45MS9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZhfiyfVoX4n1SQLa8c2GFDAhxZ75TLLU1BD4w373srGq3xWkZKAEYZwo1zB4QuCvFhaXAZuukMTDqD598Pxsao",
  "key1": "434je41k5bW1iVax4VpgL5v1UkKtc8uVE1KMMarBWJgrPYZ4vq7eGAPe3TnvNP6KFPcVXe7BrGXBfFgZkrJCZmDN",
  "key2": "5xDkm3RJ59btkn3yyn4GNNKe7iabHhxkiPemycEPGKeA8FWuZBMEQByPfGwcyNXgY9sP5PzTw5oX8suem2fSGsG5",
  "key3": "4zX8aj7VcqoJBTDHnJZyEkkwR1QYtTuzW3fQDh2qnitQgFxBNjFWhc8qAAPsdM5LZ7AkQvhK4TPt9stttgfPKkz3",
  "key4": "241Utz94R7XZy1hFkP2xJVBF8FSNiTqE99tsTERvFHp5JVDwZon8W6k7DMMe7ho6tiETLuF8mjFPGK653mbut5YD",
  "key5": "337qnq5mu55EQJRK59YaJp7LTfNXnWDiTYNMH5jFfCoFjTVQup4oPsfCSsnJc67WXiu4cULwA2UWczVeEPuLbMU2",
  "key6": "3uygG6ANB3dWiWTQEdSSPefGXCMvUidS9LAa5ecAwgfGGhcB3gXK6NEnqA3ue6EanDmjj7AeZityY3RSZL63D8R5",
  "key7": "6273tfiHtizGGYMDHs996ey6jxuvhJvh684LAsVnFHxWmLSdu6ToZ3sQtP72AXsdZ3EavPy2fQMBzriwcGFCGN57",
  "key8": "ZxXQ51dbtXBS2U6mnVNiM8gUxXKF3R3VygADAcyf893TKV5gCvrM7CVM8CWA2GSMmgsWE623XtvN7WV6nB9jps8",
  "key9": "4d7r2ZVqn6Yyy2J4YZH4rCejJivW8XENKhnvRizpq7KJfP8Z47UdC5D6gUJbvFeA8QtChUHqR6mYTpyUzpdwLwkk",
  "key10": "3FVJEibbccRC4XSXmWWifTRARJk7BbXVb6tpFC1SKyeDeihjYynmoLgFTA6XvEVi7QW4fDgbkffs6263oNigwUCm",
  "key11": "46EBRYASxXo3Jm4XFDH6ghBkaZHaAfhcCQXUV6SDScuUkHZg8QE16TkQ9RBkvRS1bjcQ6cxn44zbNoyVqoprq5Ah",
  "key12": "sLqfPeKJq3xiPSJmVZq8vJ2eX6q8GSqcsFNAhubrWuczVy7noXnGmWsEz5MRuDqDUmEXQYQZH6L3sHyJhgRenfe",
  "key13": "42Ske25y7L9gsgmZVftBHegLYFgn9WhkoA5MndVs3D8Qan2VnbzmH9i9BqEqVrBB5T11JV8bZvkhcMUmqhBGm5vw",
  "key14": "3AkcVV4BDKnssktLUCHkzeayn6UApRtNQa59jPkTQrqZ1YA6gwXMu9c5BJRLu3QhThLiSp1XcPFHd4PN6eRRWdDP",
  "key15": "295TKKsTNRGzSsdTVQBEFtzHFaXDFC6p6GWjyL6cq9ApGanok464r3Uod6iN4yAhUWaGWgoR35d71mULzEzm3jhB",
  "key16": "zAZnNQtiG6pGCSabv4fSJjFJcv3MjG5NnUwY7RdmCuDiFngBvhL9tzg7VpbEgJoYungcHd9bSm4j28GXFKfctYV",
  "key17": "GL4jjmnFQD471nBtaVD97hE3eT7Z9CXznFtevMjQLDqswPDK1GDBFxSux9tQHUMrs5eRPs8NjfUbXeUmb897vzp",
  "key18": "5XFHCQRxLf4stz7jBH1FYceP64YHZbCuRRGYEr94YGgasW78ZELQbVSArkEWJ3fbCuiGbvesW1jWqkbsmCNGxffz",
  "key19": "bQERMwBKvtnHMdiQ11rDCmNDd8qeoK1Qgy9ZPyzn7Ge6mnt5v6kqgxU4nKWLbt5eEbgC9i56SpJ3aCAZ2HcPCZC",
  "key20": "SeRTiXEy3rb5JnYLE35B1Lshht4HkgNWhpqpAcRb3UepdTyA4xbRNeUkAPi6FEmhx7sYsSZUuGRgYZoBMY1Rhtb",
  "key21": "PmaZ3BKU7bHW9fowHYLZKJ5ZPPYXp2pfByp1zDwbe8tDy3aTSfm55ujxPFAW4uH1nb1X8LKtjmcSTRfSctSn4y7",
  "key22": "5QGKaBxkKAkVHsSFps7wg78oxKroDYjyEv1YADGfJkv474zbfhfbijcb6DwWjYBWDAUdSds7ry5LJMCjzJBkP6vo",
  "key23": "3NY9Rk7gDY2iz4YibSvH6MBGg9NbxMKPas8r9yUghoCPLsmpisGLmf1SoNBtcbyD8b7QkT8dFxkZJ4Y2hHwE5ajX",
  "key24": "2nRq5yVqQtit3snAEx4bHUJohn9pPhaWL4KQxdSonLjcAPaaPcYyVZx2Mf6BhqZ3BqWCmNMewonRFF6mkcrbB1Jo",
  "key25": "3DHtd7Q9zzr7czyEmWAjLd8mr5MZNsNDw5ZK54SXYAHNFj1we9TE2btJpwEfxDDb6qRpu1WffEeTbqLzegn4nEaR",
  "key26": "2P4fzQUQ149wqtPC6QjSk24wYCX9WwszSusMi6rZmCP7N8n9fx59g8gQsQkNMsiuM2ApLeaoVfiCYeJFX2C1RWYm",
  "key27": "4r3MH9cYtPefRZigkis7KALh7BxbBJfrHiozxhKWZNehBfUTVEA7E2BhVqDA7JAzHPrHTJYJCGAH6vDFmxZ42LX5",
  "key28": "28TTRvHNj9hpJEMDY2vdLByF57fstbcbunBqnG6mi1jEMNdeRMGv3Grz3zJjVCcUGMT2eJSfhUSfT2wca3D92zsR",
  "key29": "3TCddhEHFg6MrjuFt5FsKdvWfe9YLB5GfMc7bvP6ZBuyoCsSy7BCV9c8qEhegUKj82Kg1cdtZAgPu67spqG4XPn5",
  "key30": "3TRwuG5tArAAu5PbhDDSFKT6no54Ge6pxyYSoVq4KSoDB8vu6tuDUUdNUKH7L1jabfPuexs5pX8WMrbgpU4NUaAL"
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
