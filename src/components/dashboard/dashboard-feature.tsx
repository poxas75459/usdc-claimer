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
    "3PGwhAaVrU3UizjM7P41QSmUrCUXXrMW9QgkdE3Pv2MH3FmGVaNP4EGQvRnnDH8HXUkh4ScrjrabMDRwSTvxDTCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQw7hU8kEv1WhAWLWMez8CYNFxDWXoWV2K1u8E2ZH77wT1DW1VsThvpsWjZCdUiExBLvjWuo39TWe5wchucx789",
  "key1": "4WM7yGQFiYj8G3Ua4FPZdNhMTBcEJ6mb2NmUm1Z8nYYcGooyRpfDURreWYTjWEJvVQzoQMAU2FpZkgKNW7Gw2kmJ",
  "key2": "3xsMNnstTeiuZ14FyTTr9Uu2nPuUFVSXnXF3jguGPa4km8iW3wrrQHwVhfCcHFMzNdNATX97pUKNGkCxom7CeBRo",
  "key3": "2FQs8ACrfm42y8QaZ3k9A9nT73R39DuTgJ9Bja74XrqjfVue1WPK16Ws2H9ydr8KsCyZXSUULSaWYC5B8i26tuTs",
  "key4": "2DgFayVqGEHJoW1FFSJxorWdgPcbMqkhxy1kHiufKwtz9wupXHWv1Abkg99xsJqaMJYawYr8anwUa37KGwiBFAg7",
  "key5": "31GqGUb254rgT24SkEe5DMp3Guwqc1xGcVVnKyWNE1mytSDBptjty6v9ehqgGbVVABVcQoJY2ZXb3dh7MU8JSj4U",
  "key6": "4FMQ44jt5c9f6s9nmp2WgEzS4dHzBVJQbYXsK1Rfo4YBAsQLZJvjNbpmvJm7EdXNM9zGWLEbzx2NFWBz571EJ6o2",
  "key7": "3xxSR1FZEgenTM4xnmcwtFd4FCkzaypAyarPkrLUi4msFB6P7phyPYokmsuY5gf2tPg5s1PEYQ8SmX333uMEvNQW",
  "key8": "5snRhK3jDbWWEUzFFqPFmor8eU9Q5JQJS1QMYtcKa3E3AH4rxt4GMWEKq7uUfkz1SeyDfaVEDQJd4LX7ZJpzQKRn",
  "key9": "f5syxP8dhG1b4dVUMMhXfFUi973hUoifSePEEfvy8bVMLkq2Sj865jEN2aFe6MS9w3gZ5p8sGUpSdm7YVXKDmuN",
  "key10": "4fXfQXzNcHLg2sPRgFmZ4KjBmo3vK3w3ANHt29hf5ASZrbchHjAi6fRkcBXrsbYTGihrmKcsKFwhqNi1toDoSrDY",
  "key11": "4jymMwpNPSJV7uL7f2HASUrWMJc49vTASqHcaAKD6Y7AXx2uapN9tvmaHfebXWbWJ2jpjr5Q3d1UkKUMyK7bZuSJ",
  "key12": "4Tp5MHqKhr6Fp8S78Lok8XPnqEStiyrT6iR2PL2cb7N24yK7s8YDxi3KhCRfu3vYqvpbAqBwrDyXmm6CGq9X9AwZ",
  "key13": "2E5Es9Bx5JMS3KtgeEB1rT28uV5FA8y1fAzEwdkUnkBrzHQZENWicZstxnNRaEUvCN6Qm1QT6gW14EksK3KV4Qzk",
  "key14": "447FmaNEGaPyna2qMMw7nKwUkFUEd4pMLdu71zsozobJzMsq5abAAEBwgT7wSUWATz6qpF9fAA6mS7REyins3sjy",
  "key15": "4yR3WCghvfr1fuRqifx6y2pzU1tom9YXgkuRfxpGoRTb65WrtzVWy9fxVd3wGM9fcnPVpr1wmApdfvKhwuqfhjxA",
  "key16": "33XvHCeM7HrqQeMACa6sJ3mUu86DshJFJVQzh3WL2cqffyCQkqXMQK691cCgwfppQY87sXThSyWRHH8SNrpytuoC",
  "key17": "jXPjvZLTbh2eN5nCXcp3vjafvzSCr44Ex54SRjAtbRgSz1tF7N7EfymHQAAH1PyTUisiX8mH1rqgFb1SV1GmX9h",
  "key18": "CPrHgfTiqEMmsDraSghUWmBP4GDJCUf9Bmm3wQ3AdUsS2TVuR8pbui4jW63MEzpryGJJXVuFQmRcktJj9bu4NZv",
  "key19": "5uH5EDwYtV31W7RMPRqH5NNeeigppsrTAWzt39Qhzb8iRxieJHpvu91sRXKK9Tg4xazt5vPP3HkdZoWd7baxQgVq",
  "key20": "3ELRk1mi2GtNeJ5bqn7WJ6Z3JumGmtnEA9526Bg5xAz5H4Woob8GDJZXt7n3STt6kzTo14eTuhzbWJvGGguiyXoq",
  "key21": "3P37gdJ99cySpHYvvdszogfy2LkRkGQ9rxZMqLDmrrBjS8dc8bVQWRiMJjBEyhDRrdEKzngwV6CM4Dmtob6gfxhX",
  "key22": "2Vy8bW27MnZnG9Gt33KmKT2CuAhmkUS7ta5d5KtddRv4tPtAvgd2ctzRSjDThKA4oTrfMkXEWgYhTAa4k3UKXS2Q",
  "key23": "5LpczqHdv6dUZRebMkT24W3Z7kyewwqTWcuAFhVRZ93UQAjVgij7pbQxVj1kLGEVvHqUFd6YWPotLGpuqhL4qTkG",
  "key24": "3obzWwMHN5ey3JigPxXTUeeom3ikSxFJzMUPbdAkY9cBvmZqosgiS8krNdqmZLYcpaRtNH1S1CvPpf7aYJydqD3C",
  "key25": "5rjoCNomSJZrjUiGL9j7KrgWKsA1w7xJpvw1j9PbaEKAmTiN6CMXecPU2ffbFSPcqUsN7WgDGCusQDuJXHrM7kNh",
  "key26": "64zZy1gEkXnpMccqUJwPJZ7f666D8M7pUHzz9ATEEnCXSzzibYWMDuZBFzF9JbAdg6c4Hn8aAqQjrANS77NiamK7",
  "key27": "5PLAeYm4AkoZdNgeCNWbgowTJ5qNBsCv67aRnBGwWzJZKUDdjU1wrrrobd1XxDYw5dks9qqWSj2LU2t1Ane3fSoo",
  "key28": "5f5u9aVpj5R12oVSWu22dQ4uCrNU58sUwsiYcJPzXa9pdug9V9KdVBgNXKzbkoKBoZbLsmCNLXKXYH9qbjxW4mbo",
  "key29": "5cYG4iAGtj7HXzUHzm9FYLjrUxqcdLK2d1iuvFtyE48WcEkrhLVD4D3EBprEvXeeeS4ciMWSPMP7tTZk8nPR3yFy",
  "key30": "4WoadzWVmUaPyoB5HRLLr42XYQmrEfrff5v6xHfeNnLgNkUYDWaNKXG4zF7WCDuCmKraLQg28Pnvvs5RAwF5tHMR",
  "key31": "4e45hxkcjAAf24wu8ce7bE4nB63Rg7HpPWQvYL9KnCVdtcARaiG3JFGXZp6DqYM642B1HzBu8sPTh6ojx9fgDC9x",
  "key32": "3PLa7BLGRsKf7Frwi32SLYrM3BUTiEcPHDGj8TMMW5eSnjbQDLDBGgXeQcmUSEiAo7TYgToEYgRnUPdCyhsXpJy9",
  "key33": "4dApnRHgHddWenoBR5spfq3E9xBnGqvjziNVH2SEngwnfbqNhNV3qgLYwUrhWDHCStFsWzBLzRZtkjN55NZQft1W",
  "key34": "2JNQvmicJthHiLNKNjDMQFBcbHGHXKwdx7jzDQmFenA3iv7TcpBRySESR7hAdd8p7td4gaDkJLTa3NWZDNVLJqSr",
  "key35": "55uKn2qkQ9BffBLMNJ1KTvN2NpVfRWG8TqMZg5G1TzKR4byGxieFwwMRGRkexzL7d6UWK9cFmuvrV4B642U3kGfw"
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
