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
    "5vKvWLKKCcXCACER3TBiTcgsrZcpWdoqoHhVDS5HpArHHyk71pD76eJ5Nt3T6cEUEHAWdpLHEY2HDqf5R6DdhQBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HhD4hVVfSNhtNmWbeTVBePzQ2NzKRTBpEAa4svxC2oyQwn5EHPQc7EFNRKZqT1jP8JMHfX35PwVfhyAUm2KBqmz",
  "key1": "5sCNihetxRvKpxagxb2cjbEse6Gt27UqNjdMtBABQhKM8TnPprnCnhJ9GFMPthPhEMVNrrdP4sPdv9uFknv4ZNZU",
  "key2": "3MrDRtF3vUwaycUs4Q18XWPKkZuja5jRgqozwBocbvvLPQHvGYNDRaL3mfxPCsPRi1kLykZvM3iuKzLAi6NvLGJs",
  "key3": "ZHXXBDjgGpPjvRbmGwBc6hZi9vQqZSTdkfRDkiGG4rcAvNxbiNTLH5rCs5R5qXoeAPEkzAh62pRVoW7Ztrju8dx",
  "key4": "5x6wjcY7hK4QX7v7gEvosAfttmSiwronyFvtvRTev68sKxeXySZ4gAw5o6U5VP2Hb1Wt2Z4ocgh8WQevzAjEhroc",
  "key5": "5qgYhAcMAEo2VNnkMJo3vFTAR2QCE4Vshubp4v741vGaweEm5hisDF2pgT7hxe5usQsnrGooEXAGw11NywYFu3uZ",
  "key6": "5DGuPNU8TmoLvri3xymB5S1T9rS32RVqmyfATs4fUdqSn7yFiZxusycGDo3BWHeAbqy2DfMBpkpUQYQoqaMEgSBs",
  "key7": "5TVBbLHV6FsT8XvQKC1RLQ4sh61M5ag6NaKDQPooKayJVYKHUoSNdYgxvGUU2nU3eowUPpdaJHx53JaHwhAzJMLx",
  "key8": "zKsqvLxBRGJ4vYMtajRg93wp7E7ZyGKgf9sSnn3u5botc9gncmeN2dM7rpdABYpSc9Wogu8XDiNrE1XXmJbUncv",
  "key9": "82UKQiJQgquhx6UQuf16QXBtT9MrkDBvk1Rg1SXfSrMwgCHkRJBi5cAMkJoN2dtsycU3oxADPwqp7vuUsCheqXs",
  "key10": "dJar6MBN78adWXXNTQfpET8YZHbTNQrd6wiiBkbM7y5FMqsoL4jjv8chCAqQEtcjvxfMTKwkc8N9NLjhNwJ334k",
  "key11": "5CoXnY661YmuPTTfjFWkrdLf2GpgSB3UwWwHwc2HmDG8f8iHLfUmR5wppfBox1PucgRAEL9GzF4AVUabHqdayqSp",
  "key12": "52H68aBchmZ8kaNuaWw9pZQHhbNzLBnvGh75EDcUtBwmmv5vA1ZSRQ7hXnLKJvzYzja86sPQfk4fFjBBmzLTN8sn",
  "key13": "5iBjTxzA9jiJEuQERd52zzuam1v12qqWRjLQqvtxcFY1y9DDNYRRMvtjh4YJ1BojHR2FixACDh2rWmpesNU9SwP9",
  "key14": "5P6S1cTq92SmH1KiNSkPMvaruiNKsqiwgrXNGvMsXB3yKWgCxBhsvwTRyJv23WKueK4cSePrYbCfvCXUZESN6qjs",
  "key15": "i5Bj5dEZ3vf1of4hw2r9NZXAvQ2JC3XAPnJ2uLxWc85kECyAbFCgQTNWa6Gy3YSxHnKzfAgdF1HUJeUcgxZXZhv",
  "key16": "uKrx16jjNDSNTzUzvCggGNUtRoeh8fnSpWhFJtk31uFpUAjj1T2GcmM6PchT8STVWwSm3N6ee72RqH4J1AZUQ4n",
  "key17": "TqbzSxtE1DDdCkXFtVtcdnvuPiyvQwnZ4JJoVUhHnnwov9cJATrQP7Le8BWWwovZs6fn1jgKeuYCqEuNKHBvtr2",
  "key18": "3xV7UY5qjnJPkgDmvX1upZ3yWRxri1RMBe632BZvBhujbVnrCDUN5AHGEZHeq1NxcRh2tYqKy5GBN7RXMiFSGFEm",
  "key19": "8zML9CtnqfKyLyz5NDWkp3qdDRykLeSNBga23qUFWFL6S6mNDgBNGugGYJd2SKU1KYerwPkProXGBXQ1LfUhejd",
  "key20": "4wSga7ZQZkYkzWswdeQZbMtgG1hQQpw2YskxFM7PEDAXBQBkBoNLu8C7vNSyGGxEJmZEdWbF9yrt923oj5TjCpe3",
  "key21": "3ZkDq9HbUr1Zab8WgkP33PTrmB3C2PRYxLN8Q7Z6c9gXrzqrQQhkykXqDfnWh8C6Y3WiBcQYxd83a6xR1CHGbQ5y",
  "key22": "w7rDCM9D6nWPQ71jkMg4bws4kiqtvrXLM56XGBhQQS7wstAutzaoFj326o4aymLtQDiFkrjFMzbxPBY779oS8hU",
  "key23": "4MC1U8mCDVF1di7v5KwMi4sHDx3y3ZUdYD6qTXwMeNQdVW1xwTWtR9NdrM2hSpor9iUyc3ek6z6SrxRk9nW5HiK2",
  "key24": "3Gvf7zys8RNszrKzKo4RUH3YwvpPVH25uuEM9xDa9binbgbYdkMSjyJaKAkNFChA6CWDkon9Znr463hmzx8c553V",
  "key25": "5XppKDoYHcDCSabG3P7QY4AfJ7oVUf8qBY854wTVtAvE1BP8dXrF817JgJY1PzNs8dyWdVF296WUeuhUiwVRmmyB",
  "key26": "2Rbe6nkRzH7fx1JRHsGFmhJPG8FRhT6wChWE7cNAoJ1AoK73zZQpRpmXDuNvJsnykHenQYHoZW5iEjyDxWFgRhru",
  "key27": "2UjZq43q1Xi3zFdQSwiM9Prjod6ErqYE7mnxNdm2FDkABmKvYJP1rQqCi2w35djZJBuNyYAnKt9THyo33K88xjzZ",
  "key28": "4Cg4F7FiagQBcR4grk8D56YQAKLP3R6Cky68RhwCoiFrGcbh52Ubf5yL4ANGRd7VuyC89U68PvWBAocqxnFYnYpD",
  "key29": "3swkGZX4gS1YfLtgzTCVuR7snaLx7vWLhsk8RgSjc2CWvCXpZggR8DqGzUKxharEKePLP9yikquUx5JwzYEvyFCg"
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
