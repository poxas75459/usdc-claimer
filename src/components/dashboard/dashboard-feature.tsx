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
    "4j9ipcyY56qgdHQeTdta2JoaA1mYKkPnzN2xXA8somYyn6Mhj1CJMayZzipvUYo6YAfBktQhTtXAts7EnqbndjCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tXkbMwG1vgK6CQzrMxQhCWH4368tH32modmhgsVivwnxCqKyWRStQwMZyBYW43X3Z6PD6mpfRrKTXb22Xhv9QG",
  "key1": "4XuDTw32gxpFp9wYgz1xYikxFsBf7VfQfxjqZhxJpEAafii1XRS7S3Yv8L7WdT7Bm2VdiSd1tTbaaNH5u7HoE6HP",
  "key2": "rVNBWXTZvH7H1HVJzzxGwdHPrNGpjt3WwqtaKChBM6mfKDYr3oLpEMMy65HyqLc8nM967gLcYBNTcTszffbgJrZ",
  "key3": "Ak9zma5H9osVx4NePRSa3AvtTg5WUVSt2bkAs7E83VhP1F7M3N21VDwRGAb4megh2vKyWPEGrmc1wPqccv6MC3e",
  "key4": "51ZxdrHy1dF9UQ2iHh4GH795FvwAWMxGZ34eEN3bJdA9xFyJBwNezCg63FSaBGf5E1dU3YJQi5j5prEku5kb8idZ",
  "key5": "zUmFVtsJU4KwZTKFFdmuiuWLLuCDQcXnVEAYcJQKpgwN3SHEciEnfAaY4R1DwJdqhb6vjATrwKNmo34aq7AvwtX",
  "key6": "4PneYiMyHa7jiqe9LiciH7u915Pa52N6dLCCv5xy7Ro8T9GPmnYhyogPoSwuJqAYpHr4cY5tPQ5HST61JiABzk9M",
  "key7": "3jMP4Lmvm11L9nmDgnCbc82UWRiTdjYjBgfhX5geRAbC86YEiPSaJWUrvQogzdESgUazrhBMKyS3QFjtMbPz264n",
  "key8": "2K9kcBAekQ7fgWZHAzJBfTfkB68CAsSD9JaADksd3R8PqGEV73t8KQZHxbaUju5QNzHsgR4Go32w7SgU6yVcMkb2",
  "key9": "45uBWfQ8SfndvBeAQBjCChUq9FfRH5VrU1BzH4Dvd4JG6TmFYQrdvMcn6hV6NdsnzH3KTwuznqc9oHjPhEn3siu8",
  "key10": "7ZkTh37eHbQazMmnJdYnfX97erRBYtKQi5CZ4YADmQwW7AwgTgnRg7PEBnSU24RFPPugHqFiTkKWZ8NkdcyLSxo",
  "key11": "5SiZPBEjeaWK2eScCow2oYWRk3fB4uuZdnCxJ7HTCnJgHZeqgTR4nn1YFbWi82PaQw28LoNm3CnPRZqzCz8YDW8E",
  "key12": "3E6AcKksE987NzWJ6BZn75g56WpUj774eHRxSEnTkipgTrpdU54YPW5rk87UVfkdQJKECLTUPCEDJFFrcrCoadF",
  "key13": "5d1yVH7SBdCtMkqFwFYqMbggwQDukMfx5F3JW6rfcmnS8DNBTg11aCPjGrHgYNtJKhCiLPSK2oDSabTP39b5h7FD",
  "key14": "4eCKuVyLtQx4Lua9fPJASx7b1uP9MT3vFH46YQkBVrMbwg1Ly3q1urDCHEAL8pCgEsDnocnryWHMqooD7DT46eQw",
  "key15": "4a73DNGSEfcdXABjKx1yT8FNgr4KYGrLXzMkRDNqih4bxnjNuBDbNc2Wvmfk1mvkBcgmRcBurbJ61ZD8yvB9ZRqr",
  "key16": "5Gzs1mM5BrunxEwhjQCLfgiEdDL925277gB7MvUH2rVhr6gydaeiqeWQnezhpNLZWdyr98h3YvgeVAdswUo9Qasi",
  "key17": "n3vmhSYrp3qMTSV2ZYaikFRUdrLD9nmQ7JseD1iVw2se9NnsNkpbEjBdbdzkK7SUxcAbqeKzs1r9rAYd9BPMagz",
  "key18": "3N1o9FEwX7DbggHb9tL1hayC6gNXkJjLD1Va7PKth34M5bUvmjVit7Y9myTWCcRTY2nyXgAm4CAaSk4xSMpUn53N",
  "key19": "3xUDfJ7sEJy1mTjK33eLqEbWM2essNL8UUwSBHPr1oZ5f1CaXjTnEXsVwzy8W4a4mdPaLfFRZd3gQpxgARmtLG6C",
  "key20": "5D4boUA3KWUfmwSPzT2j8PdoDmmYNs8dcoLNcHPZRq4qRGLnRGdRcA5MbT2USoC8q1nKQkqg612ADhcH8L5iHk6Q",
  "key21": "125qbNdT13dLak35WVxtGqR1FLpFobLz2ApUAbNhn6qcxJ8zrqX6345Fd3o3T4Umzb49nENN6Z1aVA78Co2YRV6j",
  "key22": "5wKRaQ9VzkJex9RmGzGkavyYARB1MnHhC46shY66vHn1s7aaDWeWJFEgGVzgD56YVVKNeciWUxSAKmKBQUcBcLPg",
  "key23": "5WzLYRrmeyf93RRs1RUf1S3QajnvPLsiZUToVaCP7f2EFB2mDHqFpedFr7NEVbiHGsPdST4AxhixyNF3h2PaMRBL",
  "key24": "53hxTYkGGEX24PXgPewQFY15k3cipabqPecStQYfNrFv42rF4xeBRbdCARchB1cUr3YhFsQ6JQADSd4qUnYK8pjQ",
  "key25": "3DY7asVAL8bssJ2g2Pe4owYTMt3jvqXDDtV6bMchrY1t1MPCnB5aRixLFn4k6inQiYQFbLMpdJWbhvU6UioqYqar",
  "key26": "3vfKp3g4wYvDL5dpqtLaUSTxXWW2n7Gi4pqJUH4s8crmmDfpjAYmtcFWxzFBmyveuYRhRrUAWK5qrskC2ZWuKKLY",
  "key27": "4PhfyNCgEy1d4fAfrXHUc2cckx8ciQgnN6fV4qmxaTorHPsuXsig2pFVNHPGyGjqC1jXnQwoccXQbxpY2Rx9Ghyq",
  "key28": "3NkGfUKjk1dDa7om4qcLwPWkcmKeT3nabmR8A3fa5a2Gyv9R5SKEkmTPD7S4B8PTFFbdv8qVhft5tdDMnTxgVvoK"
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
