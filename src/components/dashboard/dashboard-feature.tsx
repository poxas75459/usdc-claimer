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
    "trTFUBfBRoVWjLtwjEh9DYBy5XkXWb5KvH3vFek7tGGbvuhtBNQzRsPxQAyJTHD89hcLCDZoTv9xHAQjxjqi9L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nSahTs41366oD1r3BcovX9Kz81RnN2TY16FrF4E7naJ757Saw8nfZhQBintVyLq8ousNu1YummfkfBK1iA5vy1",
  "key1": "5D8SChX1v2ZUdFbLQSWkawyzcUeavtymjrNiuYBgtEqTGXujWEND3h5hwVvbaWDwtKf31fa2CBnT1qV2QWWhS3xa",
  "key2": "5o82W2HnnF4D9ebyDAqTQqfYJRRTtaLjmPZeLJNqXvnzPxoWBbAkzTad9qPFfCjB6WcjDor9XVG1ZeiHU4UfhPdM",
  "key3": "3foNc2go3mqbds8yJqKNCB9vyE3hN8kGyTWm6k1YpAh6Sm7Z2SqHHUE8qc86STUZNcLwj1JEtxr4Jskbz9ZXasHJ",
  "key4": "5JTHpArREL3BgHdi96e6iRN9mTxwYYqLGZ9dYEJfBhRhXBGpQ3L3bWown4agGuWEv9ng1KtumLTrWpWvGDriQKGx",
  "key5": "5oju7xa3eftwceMAC441FDPKptMWWWRK7UCTT9nSXaiYBRith6Hp2tH2MLaBduzdoSmSyEPHHsYSM5F9RiFBXpno",
  "key6": "2zAHEjDxwQCjN5DxZ3WppGN6SzKuamxxBCL4B4voQP499GWpb7x7rnAJg6SmR7ooPBbTLXN5ez5wE2Bsdis3ouxF",
  "key7": "5g4XXLyEMKvXBqRJKKYanF7Ngb69YuCUMu7BEvJSeMzyfgtVmBVes9aMykqrBHEqD5N6duxeZXqU3Ly81D4vcTqp",
  "key8": "5XHcrXSAYwDbMw4TzaHmTcX3ZTheMVjPhoaeiezEd7tYWnCnYD4ebuWBDXYL7gEaeXS5x7mVq86ht6DXNWddN1JY",
  "key9": "64YZHbQNBKbAvsoFMvnALuKe45sokAD4p1pViqW5wYBckDiBvNG8okEqPKem9qGZK6YvNG4XYB1BzUKSPWtFzmDJ",
  "key10": "2XYNGteXkKaoZ1yiH1JYgoJ9QmebKiGMKWbsda3BNXe82BKYKkcxeiy225EzDnu3oFanTGRSNLEzxPkunXribCJs",
  "key11": "4cfxeMnX8BhZidbtD6e6KEFwm7d2n725WWyiTe58PJncQtD78UzJcLefocq3t5v2QikcsjuBTnLWacz7zEGRwivw",
  "key12": "RPvGdgF5JJNpaCj2idpCNzPpt359jRfnGmhtNiFUMGUHVMjTtBYXxYvRhFBRzATnLbtCrhs42LLfbHTbabW3xYe",
  "key13": "47GvRQahjL2TkrCfXhJFuG1LtNvnERxcRnA6PBUEZ1UcoaaGDD1h49kqDWnftq4CKwou5nhfQNFsovENFrH5XKPm",
  "key14": "3j5xkUCTJ2EVL6HaE3U4jPxPJXvTYn7pP6HGiz5VnXQ4tM1URqxGRsL4pqUj3FiFLvSyYvmAUoXck2gGWqzEWdg1",
  "key15": "2jWhYS6yxY68m17f6V7ZmCg256LwrXiAakrjH2rgRouqpPbtVpATNpxbgL2ED8xMAsQ4Yvy1ZX4PWz6Gq8N6bYxP",
  "key16": "3zXL374AS6hybrTXJgr4FQMpF41DwMZcC3b1wYRvDmyS5reE8HzCnraVg9JENTn9yWb7DC78hxyPrQngYyZEchYa",
  "key17": "4mszr32KFxrJrsH7XYGcH7snFMCVC86uLSaJy589Sibf4hBjy4SUZsPuS9yz8qroTwA1QXt7mDx736Ek7TaQY3tQ",
  "key18": "5DuXXr3HE2vbE2pQwdZfYpicL1bCvjuJdsPAPPaH7ywVWMrkj4oF89KGQTWyQniwmhhBCGcrphawd9rtnPtV5Pd9",
  "key19": "2HRiqicPvgrBr1YM5HKrijevC2XUvcEKB2svmQhACZyHHw4oqDAtcakDYNRzHCPiEBpiLL52jDKAGRjQAEsNTaFk",
  "key20": "3BQB9iM1zZYPyek1dnt1iDt3MutMMtwtDGbX8HUR8vgN9Tj9Fanstj8RkGXSuLR79nTtoRhY1QB92mjPytzKiZY8",
  "key21": "4V6CYUyhawMezhPiWDmPfWeFkJvPVDBEW27krRqYqhp5QXaSrLBAunHpvsuxV7m37AjBUsezumr8cj8SpujaVdT2",
  "key22": "PHLLwv3KEDPdLu2e3KR8dDascGYxfL9zUBGEcgZ5srNpFJUchJDkECUMGNZfjC7zXTShmWz2fLW7VUcGrv7NcEA",
  "key23": "7USKLmF655bpMuPJ9PD2xwAUqyGJkj6qjJUJpJFszRRZgsohgTMxZqLpDNZK64vH5aoQTKcDSqLkkd1ahEwuw6L",
  "key24": "45jikjfJRrKDjszKLMgcEbYmEATW76Vu4Lw9JYjmQSTaQ7AJdhwqPeoMy6rn48f8EnuNRXk64mqcZ11GX2hxAzzp",
  "key25": "mp1L898Bt8rDPkJc1y98m5UepReGqcsCtoSM7cHPZhFqPyBB4WyETbAcyC89qKfg1qsDYHCxzDdAHieEBbZyETm",
  "key26": "2UC3xikE1wsopuFWqjAeNj36ymgCL4woLgiYM4hda4YhpRQvwAJE1og9jiBYrnircVV9ThCV8yRwJLfhFmMH9ffJ",
  "key27": "3hSmpW23BoSwiFCPd5EtLkNujWjsP8wYCjM9xUqgbFuFWnFCrQMATEeTBmqqjJBEyn1JYjs3vrTNzUon8BNp2huz",
  "key28": "5Ptr9WXapupCJ2jaiKh1RzTkKfoDAShsDJujcfKMFF5QTb6iYK8CmNgbGBtUjzRipjefuVgAkysxdeC7N73M8BSi",
  "key29": "i5xPY6HG8uVUiRakpVeq9kTBgU4MmU3HtAUdr6NYkxbFsBup8MabM6VNSTkkSKC6uJQRJUYiMRzQXz1v4RdDvZL"
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
