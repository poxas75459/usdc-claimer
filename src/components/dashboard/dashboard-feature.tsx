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
    "31B7wFkdjZmfSHa37DWsJeHfSLFsjRR3kSNFNZnyodHe6SWeUFvSxjxMU2toTub9Skowpi698N9rZVAGfGfUG8MF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zevX8kZRH4gtwdPAbXn1oNiySW6DjAQEWgMkZPmG4mcLJByusbu1FetVcujovfEdPFPFuqX3DCtaVfg7cER825t",
  "key1": "2ESim2Y6t4j5UcjnY7fadYehG4LnV7k1f7TgKqxc6xaPd5awCHowwueSjo2Ttiyyrgqg2L7YqFnazpSM5xSYDqx9",
  "key2": "3RDHJqQZFXGN8STCPXGUsZA4AJ1xqfWEtVFyP5YxXM9kCibAPgo4kmi76c8SaRhuJGYo6eSuj6AXJdLR7eDALrPH",
  "key3": "3c8pUnUsswU6wttGexsjH6Hwzpemdy3FibHYJ4FanfH25p9ViUTW1LTrQPwYZ3AenGXiHyYTN7H8wDXX64r7KxSZ",
  "key4": "5S8xL8yFZayK7ahenRH9K5SUCKRdu3yzuA2GXNcTfwk3qDVEV2tjf5iSDGEQMGAHsQ9j2WknaSMdqdN1MuADu7Vx",
  "key5": "33LuWDdndAxeeLNAMoDrHMHNuto2qwu6MhJwDsCNbr9khLLBt4bT76tQnESWpkJKL8Leg66hethwvL5pUf4JteW5",
  "key6": "2QegpAVThK9Ccdq2ZX25vUDiDJ8fEgRpfNnKgpGGrdXaV9hmQFkBjvzkatFBHmqpCoyN5r3aJ3ZDABGk1pc175TH",
  "key7": "5MKbSyFrteF6w6dQDb8Qtcx3Vo2NswJ3pAkUSVLu8skER5U6YvyUkHhUo2Ss9TtMC9kvSPTfeYdh3QnmS7JbUVx3",
  "key8": "ukSjPpp3v4dz1jzTqrLe8AyfWkdj45j1itA2fYRXVofM22goTVcWCsyJxmJJXZyTPRcTDoR9LR6cJLZKknNR2oQ",
  "key9": "jaqk5LNG5Cf39pcuGuuJ99xPKh7V4GEWycSHztN6rFiBvagy44dVAs1sGAfNvQ5geK4FmLNMPLQCqGWUm8vMXPX",
  "key10": "QScqSehdBEzyeVcpVYdN2ajN5taMY9K6QPzVKRXcRQShWHBuT2iYGyhJDwCjDMkQJceKE1oq6rWjMmJC5UwppmR",
  "key11": "5Npt23KMez1A6wnCyuWFNWFX4ekHx7AzEHqxeT7ZNoHAumtLUnqzcZ5ifDpEkam9Nzqn3jGSwpSf8okTK2FT46rU",
  "key12": "junovJeDKk3RwC5SDHegspuci74UEtdfSYnFUcvcghFYvqUTdvHh4T7q4GYzJch2ydFQMaeybbzhUwuVj8RJWPu",
  "key13": "HLeD8bhyy1v5WRnrs13zqae9mS3eLrnSGV8zsMw2Xb5zxG6gDCwUooZhcskadLGNAsfX3CqChcr3npmQptYE47S",
  "key14": "35uh8TRn9pPG2bYHSsAgJPQsqdgPNcMSx1HztxPzLnd5Cg8j1kanqUf4XfgVp1AZyVvfuuThygDESVb2Zn5dY7r2",
  "key15": "3UhZY3KQzSLMJn3VL24PSFb5oLSBUKuRuscvkZHRgj5HnngBLHmuEEiG9BALMsmJTBsVWkaxqbravxf4dTyGub4P",
  "key16": "3gxDYCfyai2GcNviYQsGW3rNP2CYxdMMvykXkgvpJuh8oiApzj8bmYhNBEJeQjFDXimmYBAsa81LddULzZ8d4n5W",
  "key17": "43mjotWrEFRA5hnD7Aq4WRH2urVgEVCrV4HQQzSo7uiuw6awjcmJo72FUsP8VSGLwaABgsQAJ9q9sqfbYKyJWdTX",
  "key18": "3u247h3fZpn9ApSExXXPjjfFZbTH47Vjv1ZEM9Cfywky76yE8BDnBhU5bQ4sAmTRTB2FoBM3HkUof1R2Cw1FW9nY",
  "key19": "3Kg7PgWcHjN97Ppb1niDPbuvfi573qVCtFeZHbgnRWNfT4AqMSxS3GE3hpPWNABHqwLnKUpAj8jezsaHxJiU7F4Y",
  "key20": "2TEQT2Q6wcdTtfHX3EV9Hc5RtQ4dZzkzj4Ak5yMXh1zgeDXzDN9VieiwiKeFjaUwwrWhyhwbnftTjFegNGKMCQyK",
  "key21": "3mmj9zqDkQK4dF6kEauo9oyrKHoAKi36doNEzfmdgQqtBYQcBZpJiBZBSjaZscJMfwuF4cho7A8VHXWV8GuRBjpJ",
  "key22": "5XpqnPxbn8rua2LZBV9R5QQztCSPGcwjiz68GeY67TDzhB8tQ6XStkEwAqyPFpPwhq3kFTcHiidkXdzJPxcHcqTm",
  "key23": "3Dg33WDLztCaknmcLneMiqbf5awYcHCbGGs3uiYmbddYYkKnRJVyqGLY2CRsDFr149h3CkNxAd6z3mWX1tiMecbF",
  "key24": "5Fn7n7rFrnDPzencSpkw5YdPMYV89gCQoir7XwXYL3Pi3uyf9gccKBbreJ7cmfZyjEDoLtWneCafp1d1RswB4BwX",
  "key25": "MYt9v4D5tKdgGoXRwVtSjqUVauHkFbGBgskuVBw4L6K8RKarxQfBirFj5hSanALEKvEfTJk8rkKVWL8Fsyna8PQ",
  "key26": "3ffgbiL7Hv54j1Vu6DJ7TYJdvwaozLuPXjY27EEJFtGMkucahCN9BkGTLWeBqPh5ZUbBREXBZ37K1jxrN4gYaETc",
  "key27": "2D1HGvHyTVSkx16im8aPrdzP51PT5tc114qKHC7xDB5anf5vzsvbsSUAkUtcyBp3BqgYZbkFThkUuQPhFUXgVN84",
  "key28": "2GWEca6p6EHL4fHHjer7V3iwWaAEcscKzo77Q8pP4knX9feMApEdqsgKqd8dZysaEeD55CbvrHy7LXaRPUuXqUST",
  "key29": "2D7eo9PDXdG61CY265oQvvQYbwpRnnNGKRUARF5jUfATHNFHDJPYGAzJPxFjQyZQvoxyquvupDMfD1jeTRs7ra85",
  "key30": "3LoFwyL3T4gb4fLSvCLojoDvTA9b2yfuNg5xgLvAPPj6cz9PTYjCTkDwdwppnVK4jrGA7mJpwVThQrj8zvC4hu6m",
  "key31": "5SfDA5gFWG4mThQPUpC76GxWuJemcepTHZxUvvcQLajQrRHj86QBaPat3twS1dUuiDzEKVhhzsYyrgYXhc9A6cgG",
  "key32": "Fh4kfwAFzLdgJfnbfQzkZiZjwddb1hyuvc7y8sk4CTnRxFMi3p67Wzxq4qUV1MHPz5fXYjeeKb46ni4Buc7f6W1",
  "key33": "2b3iWgBeoGfaPv9wKF1r56NxoyvGhvS7gvMkJwHmPnRxXKVreoeNSSTbTZwYPcbTN6qpGhAzNejVoCF2NQK9eA7F",
  "key34": "3dhtSMbUHbjDnVKhEfPKpgjSFqLo4dhTMVfgesWZZQKqq8RTFz96tTANtJX5LbcgzgeNWcBWCdi2wRmQbfyY5SyC"
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
