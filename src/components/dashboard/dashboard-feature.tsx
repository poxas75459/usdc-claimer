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
    "2sdChivuXs4WPbHfNmJ65ddGPtg6rWzGBJCJVtqMJTZhpMwGNyNvKroPoXgK41y9mph4654fEwn3eFsnwMxprQ3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WG7BXthPAotv1HRHHeSHipzzadE6RjYpX2YH4TZbtKx7Ykuc9s5ccD8ER43kGw6VSdNci2vVaFCRjKzjNayy91G",
  "key1": "2UyS8NUEozTtr5rZfpenqkdQdoP9bzMH7iL9nrrmrEA62j424ySrkQegRMZ4ukSDqNhusZAVp4EkDM98XxLhV7tV",
  "key2": "F7ftL2kubfNrmzz2fTDAvC3RmfEjaKkZ6ecPr92KFVrspKghNbXngsvvgR3pXCHcXCF9Tbm45Z5RJZpfypbJVCu",
  "key3": "3qtGbcxxbRV4gF8o7kXSmAvNtPVWUyH4rLroukkAiJGzsNwAa6UcK5MHxgphFwEMQWdDy9AxXbFr6YYtceeHbc7a",
  "key4": "5xhJ9eqqY6H1iSLqkgN3zUf5EbPHkCERR6LDCz7zkvbQg9kbHRrbVHsPenZuByyDBStczbkmSGs1GNPjQntjr3p6",
  "key5": "5V9Nx1SqY9kgHjKkXsryQV27FryEArd8jZ4VJTU4J9SNmKwf61ZiUpnbuFyqRR2skTgn2m5NZQQQ9TvVM3nFyBUo",
  "key6": "REnNaeXe9ogcvUKUnyeQswaTfEQXvHDZcNzCRHCWitszwjBJrFs34EDpdg1Pzok1v7BiZ6LL9nhGCH8KKMZSL14",
  "key7": "2vBs6cmfAbjjVLqcEWxdRsZ7RczE5MLx5HgYqt2FYc51g3EbBY5D5xqGPMZfQjCdzHaUuez1o2N3YgRv4eUYXFm2",
  "key8": "4PB3jkip4V3WGqt3aFBPHKTSw2eduHomMb2hdaVXJrK8h5stHSiPtcMJsZoxo9H3FbUp9MrXB5M6x46Fm76AtbpL",
  "key9": "52Avv3dYvYU11Rg9EBavh17Hn9QcwzTipV7WZASTQRV131mMgUtWoLPBBBYVBPk2RV5rzWBdaB3QcCR8kexCM3Ni",
  "key10": "3NyqVyC7pFryqJkDFwhBPtxx3EhFBXwTmEkmYB36XeCp3GcYmz5ebAnT77YMAMAYzHRa8epszSBHyyDRZcGhLYCb",
  "key11": "3BBQyYprG2ZZApq8sTZ7y1LM623t5Qi6icaoD9pvCa4waehUFRozVJdtRxTK7y9MwZqo2hMxfTsJy1RyxnRt63BA",
  "key12": "2g6J2SDqxHqEX86cwQE7N4BDgRu7uCj8E5kCKP4ShqX56ETRgC8gin5P2jhunTVGMCX6S9ZX9Gn82krKvhg1UH2a",
  "key13": "58WzUXDLBFYKtcSRRMiqNJGbjSA6hjjHBDERm3q62WUxecRFDmqBJ8TUWZaWN99RggmXt3shwaWKX84AUQgDXNHY",
  "key14": "4MQXxz2z5LQq873iawkixgVWDYvXZuWQvHi8Utmxd1YUkApDe76LydzbUnf9j3V8DGUTnHMrfTA3Zpu9gvVpD947",
  "key15": "4W1gyonVrQraAMwxLWPrTVW6CLw4tqSXsXW4iMjUyLvwZ62aZBMVcob8nSGcd2EZM7JucXNpL5GTm2YbZqiRpnUi",
  "key16": "55mL4ZahwpXevpZaodTnjWCpntLsBzjeZ6Tig55y6VVABm6zWRmyZK5AivJAwU9jhVNkAyYmco2nhLrfBdoXwj2u",
  "key17": "tF7HpiKKq7Di35jNVCcqzfrpZ3Qb41veEesr6oNZS9x2uyUsm4Sdt3FCLsrC4mNcBkWY7HPs5WLpJ3XumM5JuCu",
  "key18": "4q79pbeLdKPvMpQ74m4H3af14jigyQytE6q445PiE7otWDAeWMbWKUTHdaZZKrUCf29KzqFc8NBSYEUU2Ei11PCK",
  "key19": "2xoaG7ddt5zkYaxRfK9Zythq575FYyDJzh8VZJHWosPRXPumBfE7o9VQAEhk6W8hM5fP2vJ7oWnxP7RA2o2u9haJ",
  "key20": "rQAmu6HY592kAWcMAAWuHiiWU9QSaZgFngD26q4ob4faom1s4kpLYEUwor9mWD9JxWWjtSj4Gynpyou5C5GCe1Y",
  "key21": "37mH22ZPoDdRBX6DKeAXJPrJorUckroYRaqDD8FRoy6hiq4McZ2TYY12RmRDJUwcjNZCJoLC6rGfpJsSPhsHiYvy",
  "key22": "tJjFdC1Z5dmoeUaDE9KMyt9VtY3JrNTNoErinMK7LAcaCdQ2xdPVGQvGpEQZARPbxzCwT8Ph5vCHZQHKBD1D36a",
  "key23": "2wthEPn8nPGXCTh8N8kc3Jso2goUq992LP2mjEZTdywPyd2Y5pCUXAZLYqscVCESB8CjMEWYGNpfAcamcP4TRc9L",
  "key24": "2UAR6C3cG86GZ92EFsZER7pKWy1t6ZbFqpLoGuABa3tktEv7Bpfu5nLAJctShzQNwMkL6x1cnjLCUXvhDqqUWdBX",
  "key25": "5pwECRJkx37SUWj1QCNpfoWZsfkWCKUVzm6fw1W9MB36Kvka8jQfpSzwS3nR87mkdJizVhnFbfzmJiCWTttJgcxa",
  "key26": "65gYXczMxsbLU8RcuCr7XPyJps3fw1mWEr4DgWZSsfLnquWRXJbBUTxbWzT97B5PRL4f8m4u6wYfnN2QKz7yxHir",
  "key27": "2SuGy9pc4uukjUQTRR6suT6vLmPPwHW9HrkhUU7JLV5ep7Qg84RFUksYPP5wYKcYv1Nb78Tj3YgQn6ihd7ZkCGWT",
  "key28": "4MVfNVyPK8T7g29idhair9phZcVhBCkTPg5oH4Ycr6tdYBqBeCiULwUZG2EUPzh155nexiFBcLgcYg2NoPu6H21Q",
  "key29": "2SVjJBgXfSHZJX9PRwek26UqcoKLc2s5r7kwntxtbdA7ZGAvhyTu2YuypXn9Htq755BWXASkb9EqwJXqhzMwH7RC",
  "key30": "h7A1QtQ78cXiaonymordqSubzTGHCKXCJ7xDeR5MPmSUZF1zvWhpxctfJz8Ee8feiAKe6KZJjBKJHb2X8njk1Lf",
  "key31": "2p6RrUZWMJwsxEgmK5TurTxcCdx1xhuPCBy9mN6igCkbCCgNX5miZGYLyLhsETtgdMbcjXFqSsyUm1PcD7RB5Sge",
  "key32": "3vJ5X2Y7YbJZkxZnN9aqahUen5PGSYKhRke4YybST9QjhT4fAvi4RoyBQZ85HZmP5xETavxeQP6zwqWQeuuMjDUF",
  "key33": "Qnb9qncS52xwbzPHogM5QQv7n6JpSJLknYHyXA5nz6SJigd7RTBc53DiRCn9DBQyVyUC5XvxzpWqezCLbBcR478",
  "key34": "4Hj8raxWA9USRbQkEs8LFmLKfgPZm6zmdtVvyma3JaCMmtBXgTXrcdHg8xZcgEZQ7VG3Gj74FjVtnFa28fkkLsx1"
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
