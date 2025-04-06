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
    "4fARmcwUE36QQoAJXdp5jQkQ3JdrbBg1q1guoJMTLkhiGiuPcT7UWub54cXGPboSzRMczRAkJ2rUYGF6akeXb1cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxRJxC5sw94zgtxRCnMnMqJz2vJLYSmkHN8Dd45sc2ijVSEdjgkEgfj6pjqgTGk6idwQJZ3N9i2egV1yhtP6CkR",
  "key1": "2YMKQHQ41Pp55CdCtiJtDeYj6EzqtonoEzg6Wm9fgEDqGpx3iXLko7BuPmTTph1hdCSMfFvj4YugUjqYcArpuGnn",
  "key2": "5XCSHnj6N3FE8CNRPcss5nR6DgXXWBG2Sx2QGGcSYgB4TH43zqrSg3FGQuD2GprZt44RvUCcfri6JY3mYsXp8sL7",
  "key3": "scS5YqGkpNgnqEKujGBndWbrqCayb2kFgiYMwrmANKoDVG6iTvyvzgdCS1sDmh3CtZgzciYJqAn3JH4seFYPx9J",
  "key4": "3YpEWDYcu7vPFdmXNhDGUFi8JQj24Au8AbFTSDm3i6QsHrZdb4BY7x3tBGxE1w8WQ1BhE6iDayc9RxuFNUr8KFUS",
  "key5": "BcgNf6TDzKEeTue5ZuNrUk3wvnq996fbKkoEBh4yBqY6a5qRbCdDmcv6inDw2VGQ8EoC8pFDQN1zYhnxKnEdrX7",
  "key6": "2kzzfEHwPBJWDEVM5WfWUJQ3RdPVMYQvjq1ddDbsXpEfatj8ETVUbbz1REVGhjL24YkXNjrQaYgTtvrcqcsaCZgf",
  "key7": "5Dciy7NyFd882jCfU4gABZEVASRu3nrDz1MHn9Am7prjMGosnhN98B4FruCgzMqQgZx2EqdQgzFgAoUHnCoKAXh6",
  "key8": "2iEKghAEf26y7po87EGsD1cUEax2iBPnPDQpCd6fkLa2QEkPPHMUAKYhAJRRrTfmncxtUUqjjPyPMEGiYkktamuf",
  "key9": "5F784UqjbtUBiyUBCWB3p7v5mf66FK9ytqTTG1UmsR37kMtqMsWmYjwc9NXB8Ppr1RUBwMqsr4pqx9WeLJ1JfQEN",
  "key10": "2pCH9m4ewr9PPPL9KXuK3ycMcLtmQ6S8SgxtD4kEo9aVXCD2QoD5xEy9ASY1RG2JLAdzzktvG1DVacG8nUdorNG6",
  "key11": "3PKtAB8ZroTmYW8z1WyFGZWAnXMWopLpcPJhmnStSyfgdtpY5EH7dwHtf2ga2LCSD8K58YZZRerhrBCvb8NQtYGU",
  "key12": "3ne8xo31L1iT23gmeVkMUkfGFXE1vuHKg9AHU3AghEZqdBpbCFJWfQMwXNnSK4g1bsKPs24EnZyxo42VWKKyrkJa",
  "key13": "4ndRiLKy4GVWuLcnVLTZivetiS64ddVFvryNgqkt38ZAUgNyqnkHfeHfEtMeCGCcqra1HsEUAMoYGM68WjjunQrV",
  "key14": "4p6jb9JL9xpGrzwRvR4zh1sZPq8CkTScFUCRZACTf2zyKJoLipYwmqmxqbMjUbKgqbf7jMUcWDTSEzF4r6bMMHF",
  "key15": "4oqq63rfbTfgc1REVeZ28eV96BgQK9xs4ifzn7Um8PCoGcoFKsuUE8LrBecPCuUSZHxLCtWjfEhv9dbfREBEeDwj",
  "key16": "tv1ASLLqyXY8zDkiBafzBocwFS8NwJo6dxZpaGA2Rug39hdzMxkiSQaLqCdP86VojEWKhnuNyhZQbtiHdW7MKux",
  "key17": "Y1hJGcGWRhzrph9DTzfrgZQzd9jsYuw42tza8TpuAQPsRUfA6gMBLWRTbzqAFRyMqV1czZ7t1fEfqcwNX88fzRX",
  "key18": "35PVx25AMizXuWM2G99iSjPxm9gZDA3kw7vGuCXiDRe5nKYt8F5wvsUTVGhb1PY26JWRjuLBEKiXc3byP2KKPvjt",
  "key19": "fme5pt3qR3KK2a42nBkfquBLY3U9rUhXXJXJZg3U19c1pDm2jkdeDvxHh3ySLjRKFP3bbLaoDgHQjkuZECx71qF",
  "key20": "3Uu9HP6maSJTiG6NvMuhmqBH3Bd9x56p28dLHiHtLwRDPSH5ehMqhPR83FEHFwmGWL2N7XJrcmuci8qSZUNtojgW",
  "key21": "3ZGK82nPLF5iq3udr3qcP5AcytwNiYgF7k8qYs8tFjSFAaCzqbuDd4ynUeJEJb96jLUvtnsnxY4hTyjXxpvE5Tgw",
  "key22": "3rWzdtkheCjkS3Wx7wjZMyoVYCNpNt1FzLJ87226RqdbJ6Unmoc4aNCAtsN98Q2d9R5iNtJY4p4TcNG8WXzQEPkP",
  "key23": "5NWB5gWaEZ5GbM9D817ayS3yNuZntNPSPbT65J42ri4v8KPMcNUVoqK36JQUeVwBWwYhSHXbqsSfCJtNvJzqBtQX",
  "key24": "5DkEymD2y34PHPNX7eguUKM3b4dNSGfFZhXuChXghJit2ejCHMca8gfzmSs37JRfHAw8EKB3rNSr4enHBEcSM8Xd",
  "key25": "51Ma9629zESmFk6Vxf1CaUc7KW2qAwmx1Wr5vGzzUmZht7HKxHYAZKRskifhFH58uKdTJZ7CJbfpN16i8SNrNUBQ",
  "key26": "2x9xzYAf9gduXcMqWUiFfv5FT4rWyokkpgHZKPUouDAM1qBX3sCSGCcvuHM1RyYK4m1CFhkUBFvYquMUMGiP8zyC",
  "key27": "5Wdm4JqdsAcy7g1gfNd1sqmRGgqWHxss7kY5qEm4QVbzuG8osYWqY11VGU2JHW7cDHd6P4P7jgZYqyjFHYN8JoEa",
  "key28": "4W4abHgvPG7Y9qVECjnhwzgqyVUny6TwKTETU1C3ggSeQPGyrzeAWaAiFgpy2L8MhAx4j3yv96Tr6E5obkYLgjCZ",
  "key29": "4A4jJU576dzxB2xMGjpezf2ANikJ3hZD1kUKXwMS7d57T4LRrNC6718kzr2EeJcNXHSK1VUdjgvwEC9Hv1Tur6jD",
  "key30": "4adwQWG9oZRLjVgQJP6b2SzYbygXs8D1fXK8HEL8jDJUQcBHpQc3urd83T3qqLsYkszapFfi7xMrvAbxukMove4M",
  "key31": "2JzShYebcWnmJGppb4sRhqTufbxAwCHC2WHtkmC4ogZJHeiVEBQ7hbMLfiUAP4BuNixNe9wcBstg49LoaZhAv43m",
  "key32": "62wFeWDbebLeifCsHLwNveWmzdC9CZGBnsi77ZAn8AHR4hkBbZ7ieCFMN6WzFbmK7YxVY3xFiSDkEroeTFUJP54Q",
  "key33": "2i8Fz2KU1sHPV4x2Erc6dr3BTN6SMYVM2tZsLUARLkaeFHd2cipKYqitsziopv3ctrndM5EUxeMetatgoXMDFdpr",
  "key34": "4UVMV7jb7bTyCWJ1p7JBL6f3n3qigqj3Za44Nupx4jM4uRLYSFdzxzfh9MrADHubncis5HBX5UcXSnUKEbEWS5WR",
  "key35": "4wBSWqZQpLGVi8k2HsbrYMHtDsYAtY9aLuMjVHxTFBzLGxgh52egm6AQeyiayxhjtjGnEYhJ4jaigmxFr3c1uckS",
  "key36": "3CSajxYL7kQEckKZmYkN4emWduzzGAWQhvzF2pYT7qbEHoEAvHSX29zck42fL85j3aXpMYzcf5w2wZcWKNGx1mZF"
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
