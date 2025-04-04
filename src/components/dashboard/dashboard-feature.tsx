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
    "5MbsAQ7PH6EL8B7k7ebDGiYgZ9TyNzJy1jXa4gQ1r5tFj2gTPqNqCq6UwuwU4cWmSszkzoMe8ah8iZpPHp6nNbVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKGj4mTAj27tmsYdTM4HT9nctocbCpi7TK9689Fysp1Haa2Var6EBXMP7pxcpdTtbhEsenBqoctG8vq5H4c1UTZ",
  "key1": "JT3QvuL7Cv5R54RScWQoZ55f9kKhwT2i2YJA7WX4eLqBUK6mrnuNm4ZXgLpW48znsoD9WnfqX14ZHZhjS7ppvPg",
  "key2": "3rqKSmUDEWkgdEhCgKMuaJcUCcf6uRBGd4rNQoprToG1B5kxCojSdB8eKuDo7SSaLdrfDD9yuaEmwsLja9CxH4P6",
  "key3": "5XHtcUTQQrPi8Cp22t1MYyVvgke8vmueB9ahrCPmPUZ9XnBPrXq46zp8nsPwrGFR7tm1jG1wzXXxSzXdJkqxdqxd",
  "key4": "5zuJAjKJAEe4JtK16Mu2fJpQt8AUqjAbUgWHroWc7x98bxipVvd6EU6P8JR8qxswQxqeoY3S617z4foovStVEzx3",
  "key5": "3f4CFQCMHsFPmh4ekfZgYCnSA1LWR2JmGe498UNsm6X95E6qjvQdWAeZosXaTX27d24oG9JTiJg36obkwSSsZGZe",
  "key6": "3ZuVq9yhZweTcxpUqX7PXtzxS4vBek6U2SWKeaKtHj8t1sy8FW9kSxQs2ZdCHqD7LznVVGg9rWU4ZTv5ryTSeEnT",
  "key7": "2ZGaLV4kQXUvteXTntfnGwbDm6ZR91c8h8PVQv9dWrSiYGS8ccTe6tXxDNUi6tS3mnxmxYRoagpXwhqnTCEbttHn",
  "key8": "3g5CEJfY3W3fBjGjqNSn55DgmtVna41YE7mvsve47kej1S9GEAjjiZwp3ZPaqGnPy9AEEhnwhPPjmxvEYCwqmvas",
  "key9": "4rVrHthHvK9oNg8a8bTgiUzLS4T6KBJQNmk3Jq5gBGeBZa8Pm9nUhbBQTokz72GuRns7EqG5BbCsUbJU2fPuB1yg",
  "key10": "44JQRjTnBDXdkGjf3EUPNVt8vkPHogpVjHpSvuB1wXZzgoP7S5cjMb1LPfiJqeYEMxoywkDR7qDpujyMTPZ736jp",
  "key11": "4nB77ZqJ5y5xC4XpotZUqbJ1k6xANzCqqYaNsDhZaqa3D68Q2wdUR9dQvkhU1SEG5LKrQgMXDiiqsiwPWXH2xZJ3",
  "key12": "iThq33PcRdnzE6Xxg4iFzCjDYXB7cgesFDZ5TzcQ7QkjbDmeumqaEZyvjnNvehK7PMShFXKDnkQrJhKAj2rW6PB",
  "key13": "81NPiUEmfh2WmjHE9MCaeo9Z75KcF2SU6d9r72LNxaChkyQoUXutH6tSnCiJExq2KDe1GuoQYMaHwi22reKQNbd",
  "key14": "3fX5gECHFoGefUxZpXDQUTgkGDkLMo3NWQYLi2irkL55B6BJ7Sk1ybcAqxJnahW22ZsRLHCFHPinqBygXcrzY4ix",
  "key15": "5DnPnJQgREUkcch1ZU21Rb4efgESVnvzEkRhqM4TYMw41S4TKDy9zKpRM3iiVahrvgPF2Sjgeq8WV7YP2FUGi88o",
  "key16": "54FcBEGNPeF4rnw91tHvWaj8pj3ByaPkLRHfUQyV2ACuaTUkfRBU9xPJ3bK6jaYvGhJTbG8ztaCj3pnBdmnDoVUZ",
  "key17": "5Fwsp6vaQGtmEV8hFCcLV6pT5CVq5y2SVwXHXZaeecWFQssPgLeiDAJk5DqJhLHAcFN34ckhSLnRYKMoxo73wN2J",
  "key18": "47TjPJnuYC4HKnwV1uUSExnGg2ewSh9Vk4APQd6bB2a7rigsypveCXevSjnLNWGDymBZWeQv1ufAzLnhGQxuELiV",
  "key19": "5CtueWVh9jvkAKQDZttLS9oy9wvryEYz2hDZFZaA6J76ydo8jNgmz4pJgFgNMWPEm1BJ4VjL9mN6GPN6jYErQ8j7",
  "key20": "RaZ35BDP9fReYQm6bAd3m3uzyLMyoQdxGKZKb6pXiDSAxKK3Wgc6Zdg8UQuHfrkW6zhY718PpNZvu7Cn77a3rwH",
  "key21": "2fXcTdgNiTGo1NZaAeZbHETbszu4gF1FxJ1FrA36XZQLXS1NqtqhLpVzUPHzfi9c8P7tyZaQh6APStZa6m9xCSRV",
  "key22": "dT4M9e3uZ2Ziqg4Gz4zNnxzXHst6HE7uZ1LQYsCXAzZVZgw7aWidQWH5Km7FfgsivZzWePu314ALkVj2knWiAzu",
  "key23": "QUVGEXj2DUYRFQomkE9ZbW2SAtCTtNRtUhxRCAzuVqpVgwNX5zAy4LWU1YNHMmwuFhBfws9jGLYZnqHbva64pRv",
  "key24": "55fomAnKE6P4LjSQxhDyq82o1gfsnNwo1QBUfEQjuiuKnQ8gnEFzdNpXCjHgiesdpfFFdywSy8mqh8XsASHkCzc2",
  "key25": "5GGAm6engVwJ3eY2SKhjAih1AC95XR2YnMu7uZu3tetQ78GbsBXzCVZFWmuSgzCt65P6PLLMukStmcnWrz3Lqt8T",
  "key26": "AcMrasM7mNHuQfM4pEKSDgQJHkX1GQSiWeDSB23uFdgeXbh41zKGZr37B3vFkf4NYSe9jyQMTUzZ6uoEuZpzLfC",
  "key27": "4ZSydUGM9gfZmLDHpqaMEouq2nKwpJvakAi9zyngzxbU4MiHJpetyEc5fvRzJ9H1YPSJdiYzK1AhihQQvdEHgArm",
  "key28": "GMdmfQwC2kBnU9ABwbVYb2AaB8FYRM9nPeFxUJuFDXxWDEq1aDtELBafkDYoVcgc6bY86QX6RSHeDxXLEzMzHns",
  "key29": "jRqFjuvpuDGMXmHXKTSbUSCfzWMZArLRuPUoTeDYpCzdWtLo2QL9GnBQEDpugE1XnANfHe2mYuMCscR7NwJzmHD",
  "key30": "4fnYQ6ReG7FUgTGDRdM8NGRW1fndc6WfjJCE3ect631CssLj3fcwELDMGqkKN5qb4pUiBFCnhf2UzYv7YSzDpd9D",
  "key31": "4TfRCd2eM3LvdfqJQFRuhkbkPHYbyxoRVkiMijngE81Jouj7NF5jHs59DksP4NinRbRj88LD4nUfkYYyPSpKAema",
  "key32": "5KahHBZ6BXxrufDcGh9FPcmD62ceoXHXXaPaAXhStA3o9mEVbMKNuGDaCK5L13NLTy8GTh88sr9VBPW3avKQffeu",
  "key33": "4bdkJbFCfQnKD2KL5aaJrXqtR83J1mopsUb3re2yKGkWogjMaphfWoAMBJWdpHEV3V7HsFiJUfkJ8skLt7SJqeWD",
  "key34": "2GRYt39zZmYpLDtSnjJQ4KJKBfJJztk6fCTNgoY6kvRt74WrK3H83dxaQ6H3AjnpSgqwZASy4o3meiWYz94rUteA",
  "key35": "3AgXAeudvq6bv7R3RMjxvGsNfqYo685VmThxrwkomCdb1r4DbhxrBEK9aLZZSpd7DTAvxYLhxknMGhYodRJiUqy6",
  "key36": "5wHdcoRhSMSwxLH5BSNzedQsaMa3W2coCDWKGhPZmKDRYzZbyqEhNVEe1F4rcGks9WC7CM7XNnc49D4UdarroR9e"
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
