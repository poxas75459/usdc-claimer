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
    "2D3re3FCXTyo5Tvqzfyh4QXNrUD7T4hXi5PWbqDJCkZvuUVW75LUAC7Ew2EkS2G9i3GmjDgAfqW465mJqbMNFYGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R4fGGJw9aebW5ZheHvJ8wXSZacZQyaTyhQpA6nbr9Tt4jVeejhSsCpnpwaszDqsqrQkMVXWb7Kww9vM8gpGo2L4",
  "key1": "Q3wpGHiri4pL8BhXfUMH57yqN6D5DE7zYmBo8PhXrbTTUfqJKXuxjTGHh1Hdco2GKAv4S5NqxoNxNHddxp9aDon",
  "key2": "eiz82sMxfp8HAidaZV45qiVgcrwiT3kiEBvNexpdkJizBUSs8dsUotc34yhu8VwKmfwHRooC6c3NVRwtGQFRHpy",
  "key3": "3Co4XyBnG1Q9iFftSzTEmUgBnWkkjDHbznd5bdhjZPJzDABJHiqCM6NenSfUf5H7BPHfA9juGM6sAdrhpmNswynX",
  "key4": "2NP2ZCRqmd4DKAi5NdnB1v2Lfk6rmc9K2RoHR1Nc6r266WdxrdJTK2frCDf1koMMtDQ8Qpp2zQ7i1cNPwWex8v3U",
  "key5": "5P1YNieB2Rz9eovp7xwn86r3jHUNngx99B77aVrdLxGQZKC9pA5fmE8HCNkQFWnhj2hnU1nu5tEUnm6yfsT4dsMB",
  "key6": "62eFV9tjpQWJ46FNvAtfSiACrVrmch4KtowdyRiJfL51VV485FQGsZwjQPFJXPM3L9k2qcsknu1iUVYsxUjbKM1M",
  "key7": "xw5evVej83LsKKqfj14GiXXTEGGxRbMNhsKSqffYyohjj6Kq5uccJ2k2a4X3N6kZrvWcYhnzPuQiBuKWs642GBe",
  "key8": "4ThaUBz4sngEiFGkQhrruSDmAzu8BvZwQSUXmg79cfMM5LoqNPVCQHzKdRc2ZKTZ8YbZBDgfMS3gvYfzGYQ5rv5u",
  "key9": "EDYb8apz9ehXi3y6Bz4ot7QTrsdC59CxwRTcueMAdEbqXjR14q949cQqeAYfdj3kcpak7N4KyTGAxWaAyrJEsnL",
  "key10": "42TXVPXrrgh1zrB4gnqUC2xsx4SYtn5GoVQHWw2teyFa8aFVijD9gnGvnWNdPfAn3qAcKLfijD4fDBhfLQH3mVzs",
  "key11": "5mZEMmvgvHRhYfrat5C6nhymZM5M6ZJw4qXy4XfuXd32d2ZYHq7qFPR7tnrVaDuojsNw82cuum9TmGjqrsyTc7La",
  "key12": "5akexyy4BvCZeLGRwrTBVqFFKP45unZuh9FirgZQZhYvSwzCx2kTjeu93giwuCUDUkGcTwfXgb2BumCm7Xfa8rzT",
  "key13": "5oNzZjimJavDaMaqDGJYNr4nBwdHv3ypptusYTASuqLsW7P8HrJ1zBH8LbMyKW3zjoERsfVcfQp2aFxyDwNM6ReG",
  "key14": "5ExBB8RPBFoq3HvZXmaD38GKfsVSnC5Sq8GFJZbphSZrHWT6q5WUUcyWhTJoVuWY448F9vBtHkiFKeBNYsDDrLoB",
  "key15": "3cMdEYJWb7hEUB3nerVbgTmW8jMpUEQtoesAdKLSfZ6SPQ7USrHHXJiYsVf6WLPS9xYKgBMF6c1DutEHpj8DoSNg",
  "key16": "2161YLTyZ2fPXXttH181sgMJeL7z5hHfx8m8TUQCU3yLG25SvZq4fmKXcNbJ8EgDkCsCuTJMgW6QqfCc64UVZsZW",
  "key17": "5zP9bhEYcvTM2gWeeBB9FPYWkhA8BXQ5k2YtL3TGx5GV3u4FXU4TZz871ezfr2h7iWFivsrXAhtWY46MKXvXvuix",
  "key18": "htH9eTeGjhr32S8v79C3NqH16LKbcwYQF4e1tiJC3B1TLabYBh1F8mPxyP38enbr2iGQYSBxLm1GCa2317XfbYc",
  "key19": "4fKR2XcAANKFBghRrA6wcWir9oWZB23SKQgcPv8xppWdi496fur8pVd9UAoV4hfyBbw2b8MjrtfE9mdhzKTd55XE",
  "key20": "3nELjmA4CFKCx2hDcm2Ty5nRVUtzf9Z4UNFT3ycZsReq25wLaQ8XnBjXftVNUH1oQ8fWdGA3trLnsrhKiNcMNk3Z",
  "key21": "1vkkWfNABKYBiaBw6AR6J1v8TP3w9Bps5ZFHYUYHUoZWrhHUpcq6FwcNQXxMy6bgnCprqwxNEkBW1nfGtWKuaeF",
  "key22": "2qZwiZyouyC3sR588GTAUB1fhbjAy3ca6Nf4zza7qkrc4dHch5TKH2QUtUDhkVDCPKU3ksdS5Z1vb571nzeALn1J",
  "key23": "3xD1MZ4y4sBvDKQx9rhEvGWam4RBJBTKS4ZJ3ZSSiLmTBbnPCjmETUC3mWUX7HFHQ24oezm43EmLgkQ1K22pFii",
  "key24": "69teGjdbkHUXaTEK8u7j14SNN9c2wRiN5UCb8GdBCarFkN3qfqhvcpAtApGeH4cFod6DF9k1EWLyGasQBYBENkx",
  "key25": "27HtDPPZYk5ypjp3RcVd38kpYw7iSnVUUiF9md2j6hUcaw3cAX4irAq9JynvNEiUy9w9bCF1438gVUMNjWpCuzB4",
  "key26": "boa2Tx8ELhF2hg4KdVWWy7Bw5QPxupMEmK25L2cZ8rKxQSxnRMizXgSKERG7pYHwB6tEva2CYibrPfjDGLRmW1b",
  "key27": "4KT7w1VdsrNkUomAsumrUDTjtY9ZshbNWrmpseCYLjcqP51HuchYGvt2QBqSbezfdqFTtAk5cUp1jsSQgPfJcK7s",
  "key28": "4pC2ZdtqNB8QZ3cUMecrQYqLZviykutkGuhEWCiZj3Rbcv9GMQEgyphZEoiiMbDT5UcUTZsJUd7eyf1jA4NCWzgb",
  "key29": "3psuEs6vF64m7cuTTFZVv7BceUPSzA5eyxQRruPfENJh2iz3fHdvmzx7c37sdxLUaNQuNgJK58LJcm3BbS44ZRcZ",
  "key30": "4SXYq92CtWyZ31RfTBZtJuPq1mKdcRCaNee3Hj6W8uUSHSitWMc9MpKbagFiWFPo6i9uuVU8hnm2prQPXmhSGWR7",
  "key31": "5TniZffE6MKZvVUPNdsa7YaaJmyoktz17rcipjP8TCuZqk1WDEjoYcbgPkHAxYCn4PqupnV9Hc4QQYBw8fLb1GFW",
  "key32": "5JWHrPmzTPKECGagxDCJdNZ4gGQv7m8jqo6VyxBZ4p2hHaD63hpmrfhxKoihwdrCTpJzh96wqJTWeNqhLp8FVHi7"
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
