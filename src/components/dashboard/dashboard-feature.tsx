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
    "2yJoNthdaBdPQ5jmFmc97mHnDRaKkq2hWMP5QVpcquJvy8moUCFMhHMmcF13AEfUqoZdZ6kPbDoWwEqHkD5NkvML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8aPmfTQ2z9XTdokAh4PAQTSCN9yEQMRS8owRVQcayspLpzthYjjzREcqqkdXLZWjRpQ7kngEBfWLcLhKrZHwYLW",
  "key1": "4coHJVzywGmD2pnm9ASJqhWNNCmqmZKk63YyVGw6pNEi9tJ4ewQd7FKQbiJ9QaGhFfZeut3XojFUZmcBa6wffdtF",
  "key2": "3LDFtHF3a2jcWNUYR94cvdbJzfZ5AsaaQE6bbFMgW7bo7Auo8Z1PG13TwoQnKjFbccAGPaoTdZF7dFfviJZ4reX4",
  "key3": "2Lam2DGcfbcfZzNt5bY6f7K7mjJ5XGEYgb1cCFCWeevNXD1roLqvsUaGmXJoiEHQGFx3cA6YW8heZY6HL4ZF76JD",
  "key4": "2o8J8qKAv3YKD498QCLDnKVoaYUxjmEG4CNwZ8eH9k53dn2DuXogwS8YFYP2EJCsLB7ynNqbT5Xg1fChxGgZSY5",
  "key5": "4bE8N7d8K5PS8LTKZWEkk1MaUEszXsW84Rm84hdcGUHiAGG7vonxcKTrAJreNpWAeEyZU9LXC6dNxgkJLhyPthSY",
  "key6": "2UX7eqpHGkaLv7AsBNAm63on2xUQNS4QZWv6omFRWn8TG7LRbw7hk8av7uPpEbkdPhZ2fJzffbGrzp7iqnmSrRpg",
  "key7": "5mf5xCJwz6UkmoBdbNWcCKJu6zKVjHuxUvmG3wVprFnupCB4R3urD6kXXhMosSFbgJ1uAPmB6rGDs4Zo1i1eW2Gn",
  "key8": "4VYyKV6GUfQLxBeh8fgmnywTJ4i57BtQehYkdHdTQgiu8RqTYqjMBm95o5Jb5wPqKr41SshzNuPCdhViip8KgY4v",
  "key9": "9Aj1WhoKp4vQPLsG56gEus8VQWh6QNL3ZaMHTTjiffWNhQ9Hmfmbj17VAiHUSgxWqMKUAR2tDDDCdwwpxpKS2fh",
  "key10": "4pisqg5VMP1xYGUMHZcX9W59B38rwit8eRysBB7ypmCusew6vCuTwYYUG1hXxY6nDEk5ddmfhPrLERZmTeRqq98z",
  "key11": "2nsdFdYtjXFEM5eC5yjWoHekhj3tJgFDRMxuaVwd1182qJePSRqMYJhB2KxMxjWVKi8SWGqrMVymcL7JtaBDUY6S",
  "key12": "2ZWgRBaqEvHgptyT5dpRitDTuhNxusf9FJTWy9Zy8nMhoFx4QW7uj2fzWqGKcV9SAwDJsW9RuHHHZrMFCUBZQZzF",
  "key13": "AsjgpqeuEKqTjJFVV9CbubNPRzT4idmvEMo9nNivYRth8BrKhfghWGDyNpfhfVR6uDCm6CmXvTgkRA5L82tufJ5",
  "key14": "2EbdH8JJatS55pmsFYPHCEKTVj1m3jPoWtcxBsQtP5He57Lw7vy3qjn39snVmBf2D5oghptXynCXMYHTgxhQX5Ku",
  "key15": "3z85N4GSsihxpVAoWwvw27DFwtWZRMhnDPCp12DKA2AynBSChwJQx6crdkp1iijouM8mPn9tPAr8errSSKnkXuZc",
  "key16": "kwEMfjNTYrB5sK97yy9VYJUDkD2SFMDkh5VoYdMVUqGK9wpcQ1LwuouAxqpS1Vs29p6iiS7tpJBqhpvEZeh5xGX",
  "key17": "2wvtV3ezWo7oX6svYE4Buy7E5JPgANcjy25ucQhLcqn17V9kyctWqewfbqPFf3TLD8ewspw56r5bRSqa4C5ekV6U",
  "key18": "5GSFCocM4HxrCVP6AxCJ7iZr2rwJuvJXd5mVFB1UbL7tPjSmtttxQTxeESFGP85zZAweuh3mUX3ZcT5BpRPHD5J8",
  "key19": "4ZqTTYexRqKEJvunq9YrsqhfDk2GmhTcwhxkn15LBB3CXBatGy5o2dYK1pf3rbEhBdPnUXEW5TEXFQ6Bew1Ykvf5",
  "key20": "WAFSZ7uBdvHe21bu4aHQvMNGibWZYPQF69uPBVa4TQ7SsRfLYFSu3mKpZS7cZuP8jMDKWoChK5gemHJyyrfypKW",
  "key21": "4mDaGMw74JsuyggE2CTsUzb6UgSFewYWLCaVpsrTnZPSEAuSFg7BRutrxdm6b6RiPB9QQ6scpyCcoxvQe89f3q3k",
  "key22": "3dr7dCi2pzmWPbHHSUp7dTo5iv43cCbtqC42t4o7DzFqzZEaTwg1p1jLWA8MP99AYbgoxzoEji4tGnpFLEGGSRit",
  "key23": "3z4YD547Tepsr4xu3prcgZynaRQVqkQ7fWyiGfoXbwB567SzENdZKXnSjos1vgyEvtjQHmy4abc4QtbZikQxob3L",
  "key24": "4VvE5DZy4RfZhHe3mtXdg3eofht6Jhi6s3GxFh8qHnLG1yc41kRpKjpbZTRESmR7jBFwjjovPJEf5rDr8rpEcBt8",
  "key25": "4Lxn9j2a2smYhepTyLaRZAkKNUDd27oFfMeokS1a8EjrXfZpVjzXUfdwMPXd1CzbFzDPfUaBTf3SvWmTHQ5LeNud",
  "key26": "ThvXZ8grcYTtthRZEPjzPBCLy6YStuAbxGt4gWSpbEBgjJP9CVa6HXUAnHF59TuJUxRqtgVTy5qSPfG6YwAMfP5",
  "key27": "212uia4hM12uqi4TXh96mLHi1vjP7miZb98n1ZGepPZmv11KWQyVRnakUBwTk6wKjdaftoC6w7EqbRW7rAzdiwXg",
  "key28": "5U5LKW8j3frJWdkQBFp9Q3v9fXaorxJWtX8tMhBNgubUpMvFuAj3dwm7RrghLcg3rLyj5aHvr6CCj3zrZQbCmu1b"
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
