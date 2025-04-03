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
    "2RfJ2JmGMw21kPv9nQsKKfi1wo9TSze2168ZU2qVhMWBTmzsuDd7Tbbmu9Do59MTBX2VV4a5GM7JHQCiH5i2TbsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NHXbXAn6EkL6a2K4yZYvLoNMd53MAP8XiqoY2s3paboyBY6qYn3VDkUm4qSnySzhggmsz2aFe1mFdtRQFNwUrrY",
  "key1": "5KEMzT6vkwkWVLm49kgqKiaXbwankAmRU6TvT6afqTfPYGPnhvTvqSXKzBvzBKQin7zBQ1xhAaWX3weyDYLoxtEa",
  "key2": "3j18DX6YfQimH1p7bFntJimiYiyTxK3536R4RywuodZm2AyqEUhcbuZGwFUGrGXcWf1uQLdxZZnvWSro76R4Tmg9",
  "key3": "3SgYGBhB3h41wndMXWSsZJEcDCvaM5T5NfgyhYbRQd1wdgUcFXM4vokkvX9j9VEU5EbNTdRwkxgh2T2frqJdmpYa",
  "key4": "4oeWXgahQYYcU66dSBZKQraK5TERyRUPdgKGQQeNLahm6MX2dM86QpM7Sckk3gCwnXzZXa67ku1k9EKiGNfDbuBQ",
  "key5": "5nDcsLrDR4xLRRTd9K41Dvbc597pqMGYRsGVXYu3fbCi5dmkECMY769NMBzhMVjVTWzxoSLRp7QJiY7c7WRcyZ3x",
  "key6": "54KDmPEbrfDq7kK4F9GCWbu2B2A8N7AVvVTPbqHEDWVTBAmsayta3Wjx91km1kiuh84oyb1dywU1pSheV6LPzh78",
  "key7": "XD88WSUNnhSHvkrHdh6naX9EdpXBWWqMtq9N663CSXYNzgtQ2HUHuTrBhpMXvMXsfEfXYvFwgw8c88oCL66SZ7j",
  "key8": "41BvBw95CZ6CJMTV2hriSjdFaqgxEx8QYxDwBNKPu4S1RvMQQpy3exDxrBRZ652gAMXXunx2E2nPKt96aTpYLtVT",
  "key9": "2UfeE64Aq4zSFuuK2aHLm6ziDLSMdv2KPEjiWHYwxF4c5HniYR9RnpFybxeCA97vqp7zZ5igKva6ebwdg2jJf8Ly",
  "key10": "kH5LdqyCFPUUmQtohLi4Kq7rerTptA87zMSwJPVTU8k1Ahmb4yUSRTeXD2iYhVP1yUziLXSg8pYhVWU8LVstEPH",
  "key11": "3MuUBdtHfMM626bgshB2iuGMH8VE9u2e5X6Qx3JawZijrdSScQpweZA1M7v2fNi1NpwTsPzAZ8up2ZptntXjzr56",
  "key12": "4XnnevJLFMX29azVfYQMhT8dLB7FbZyEpf4QRGCwbC46Muv5H1p9wkU4oQLtfhQoN9MUrrRPvjNjtfuLVEWAwhBe",
  "key13": "5xFG86jJx6HXdLmS8mdqUro2LjkcYn8u3JJ8FkVLNHKhKxZg6kSvhZxiakRiYs65ZhGbJ5U9T4Qu4u8BBctv7NwU",
  "key14": "3kMFKCZ1Z7UFPyAWTunvW11go5p6jm9ZJDG4TwSU2t2h8846UbZd4uZaPRRSHVn1WpJsCPHjAbuB6WrLRW1kyDct",
  "key15": "3iAkbHbavpHgjPhiCqGmNpmxUEeoukjDDt5EkBtsX4CFy1HQNELZR4V7HnN5nkWrWzij3rAX6vcr7CN8yDECsdmo",
  "key16": "47PKAsJFwSGbtFgruSjJE7KHWa7CLgNnkSSKzPvXHRYeMJqg9uRiKPm96k9BygEUdvVyHuBFk3TPCxqRnqWTgM37",
  "key17": "5HuDSKQagU1VNioG2R5avbRx7FddKpnVwuu1yVNgqz4cgMnhwZR3xmtmjKiSUr8JeJ3DvoQfZbDFBTC3r1HyVAAF",
  "key18": "4JSFKCfwED9aCHVkJbiwfCFkY9sAyq2mbo9Eoab6xzD3ZpKb34AH5SWY9g7GwXBJNUTKKxa36QxwurR6H8NLUp3E",
  "key19": "vBdshGT3hSG81XRkg4SnzviDNd4r29vY5kd1FQTutmnrhkJPE3LBPmrJYujNV15Jz6vKmdXzPQbPKnCf3BAegpy",
  "key20": "bGh8AaepFfEWPUQFjB1Y5E2hW3Um1swhB4heQsCzsk26ZsnoJGnR2iDFkNNDL9Pg5xxFiZdjWrbBVNRL3zWunMX",
  "key21": "5pZLDGfPdCynoi9ETvd56chGTTaeqMPTMEVEJJUmD2bPWWynwAPuz8i7RoRQJCf8tc6mvLA54YRT2zGS4PvoHs32",
  "key22": "435MMWi46Ha6JABFzR5jk24KAJabYKC2dC7xLbuQLqhN4zDqKdnxjbhQYWr7BuyLGo9DEAVm1buLoEGMTKdkEnQ5",
  "key23": "5QsVijJk9QwTqg4TZU4GLjLBsbodpzwEmmSv3kLoiWkyReLXWJY2Q4uRWAMnY4n6LeCpUMzK3iCFMvSpBehAbUth",
  "key24": "2pvbsDi86aWkSKDWx1tvfquNABGmj3K7cs4rA7FyLhFpn7jWERHPqccmkgyc56RUx22emUQPPYRSrMngb9qAJNpr",
  "key25": "3F8TqnW65G8D1afecM2WgNuPNrFEf6FqEi3VG46t729vhMEpnAVCd9XWc7KMMNsNMpAsdUcjpqvXZ4JyxGYhayrG",
  "key26": "2tCthF6VfkMeTRHRbv9zXutKqEQq6XeraepGKceMvGUQP31CUHoM64VyXh6mtpHGPCPg66JaM4SDhFzDoXhN4uq1",
  "key27": "4z3oWP1UafU4VcB2q91FHdDwMGjzdaWwuoeqfi2NUNkcrTJE7waG6GHEVtGWT5PQa619rdUoTL5DuvZwx5siV1s5",
  "key28": "He5A46E33zy1upQpRCrS7sz3diu6cP5EyZrZj9ZKrPQxJxnRL8dHhrRfRMjngMnigDSVHCRwGB3oyC5WAVFnLDm",
  "key29": "3ZxNsiVtfMxCR3jVpUK3zAPHvog5gW6rpNypMbMEWQzYojqxWg2C8bEhBoE1aqqVgY5sdkKerfLyCCZkhCwzTfBh",
  "key30": "3eEgs8EG8CJ5JJodkChre5QFi5FxPWuJJXATdDa4zLmDq1KwG3FwnKEUfXuKkuW9Ys5Er2gSggjt45KW1Mch2QV7",
  "key31": "ZsVS52j2TTY9n3uXZtPbQhRvb8NfiXrvcvn9PTKwmkE56J8ctZuj5T4DtfAhBxb9G7FXp3KXS2XJMAhZVnpgoxJ",
  "key32": "3RCySnRQHhxuqF5it4UGCcZScYtHFFyxXH4tm1XdY4vf19Ga2JbK3kGPex3BT5yoFXRitkZJLYmYLTo7MsLdUFF2",
  "key33": "3GXzXgtiWnwCfS951hmwts6gc2DKR6VPaB6p3dzdm8ipqae1H53otVocaQzCyMy8cqJA5aWMXVzUaGaWEwSuTDfw",
  "key34": "nYy4vnYycsNvzgxa7WVs4qZUBQh4LsoCmoHMXXoviG55XJbMbDJf2TpBbEbmQRZZNJ8pFiWdviJMQH4xvz4ReHv",
  "key35": "fMtqULPegqMSg32XkuP5964MXtgo8G48HhPr1ubMu6xg5C2NhWZ5VjhdJCNzf7bX3v6pzjRXGR8Unwoh3MnQ6fL",
  "key36": "32WvyvvGcjtXST6MKCBTNdykzZg8yCGzzN6VyK25fcBJK9pfbmgK5LVgxntzXJqrU1sj4ekk8hPwyxG6Ej5gzx7D",
  "key37": "2XT3iny4PbqL54XwKG9ojkrbppAXZ9AE6XCWFPJSRzhDRndZuNyMwYND238EtwnKbaYk52NfRxhatq5g3tzTnCvg",
  "key38": "4qHyRDKmQYrbYCwRuK7uPuTHEubJGce1SV1oSkzZT2PiW9d8EihjsEt3vYsDQhCywZkLXWHvaqvvrUaFdiJugUob",
  "key39": "4Rc1T8uLvRWv9yARSWNQKM3BZ9oZ2QLzvBuxYSmPUM1PJ1n8kDuRCY7KSWWSdQhYryEVb8bc7XCHJUyhPKbdKWMX",
  "key40": "E8jySTDhnAXVDaFfnXqeVV2q8VbtkZo95TjDPsJWaSBLMf7DRuPnPnDUvsnr9HJPDSMg3bbi4ees76Nq8XupnJe",
  "key41": "MTMExQKSdQzpixuSTk3iSYBXYWaucyc2CS3ZAuufaZY171ypf1y3WpjNPwEcnDRFFYMQqHjfxmng1VUpcMafp4w",
  "key42": "5khjWZKDmXpBq9Ne71TR469pAYN71T5zjgnWAEa5jXkdzfGdAmU9vqjmC7Y6tZKAUCB45nxxCZ4mXbZHbMY7TJn7"
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
