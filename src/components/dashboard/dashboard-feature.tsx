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
    "3qo94b86dGfzwdbfEHjmbHH5VJyP6wqNshfph4hV4mBhnbv5ijrixLow7u9cXUHcKZm8E6VMKyfLKuMi5NeAGGUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsDJsUKi5a2ETZp8GJU8Vve9wiWvEHFJkBAXDumgBQFeXjnMsBdmiug7C2h9V1BbVKXhp4q7Y3ASwi6DHFiaLYP",
  "key1": "5v3NkiDNdzRD72rsVk9WrfSGXUcH5uGNZh1iYEjLbh7Br4cq8LH26RtAnDtMQKPaWYayLBqaEa9hTkRTtqDkqUcR",
  "key2": "5WtDVVCsMeV3KAdieU5X7ehYpwBJVL1an1YvW3vo5tyXQMu563nmh87GnWw7ewDqQg6cN11tPEFmrVUoWpLQFTAp",
  "key3": "JpxFnA2D4H955iLRCLyvvjZ9EFfQUL23KduAe3xG4dkv3wVTRukbDdXsj8rnkbKoGFw1gpe224SboteyDv7LkXP",
  "key4": "5giprhQ3y1gunB4puZ4fLLK7aKW6kR7DCMjZLPqKNZg9GbzS5T7NGteEGUaQBuVZMjwqLkfQKkt2axxwexM6MTBD",
  "key5": "2ephSKPLjZhn2Tk2ksZrNJQEKdcvAbFFYinT63brrPcwK423TusL4vaESCqXQFREC8o8kfQ1czragSMCMhgvwcU4",
  "key6": "scsKbJ93Yb8hSECwDJtxuqDWuSDUSyXy46uCvVXVLp8j5TEYBRbzNA1dWYqb6pafm263t94g4oSjA8NZ12fbemQ",
  "key7": "41yYBYEJg1Mz5m9tvZyixsm8ULcjVa34GpbXWuj7ctMZPx8T1QwLYE7enJAtHbkGFk8PhxAEXoDpfCFcuc4tu64B",
  "key8": "27KaZgB7vZo1aWZHvoCxgiMZAgS34yx8cX15cTD5vmV2qAuvbjjmjtRjg8xFfRcMuGvRYz8Zwha7FQMs4fkrH2oS",
  "key9": "3TKV25Fuw7HsLGFegtSzMML5ovEkFbtuJteYPH2CufwtpmVyfWjVveUBmSmWivRa8qzXoBv4VRVkkrNrKqjFXjVg",
  "key10": "5DaXFUbkgvLFNQyCJStJEdFYhX3pUQzkw3AhiJM47A5thWZA7GGW8hfGvjRzUnehSA7bngeN1XrZwr2ec73P4y9t",
  "key11": "vtnw3vQNvAp8SRGd4u8uwgV276JSdr5aDkkMA9coNR1JtTQmFqo8WLoWpi8vWKu2YchX35qY5yai9W8PACMLv8F",
  "key12": "3gwfBmGZx4fnZn9VdHvoENHaNwWpgAyrT55Weg6zu8hrDxhxCp9654PqFrFmVvD63Jia5BQSUhQa3PLVSNKdMwjT",
  "key13": "2a9T1uu3Z1HVx9hWP2qi9SjnQeYAULqgToq2PRpLSRvccuNfgG2kPUmj77j8sXHdz51bwfyY1GdSi1D3p7mNnAaz",
  "key14": "K3VtCf9TGqB4oAzMkzXmHgeQoPe5qwHLy1HiHgmsyixKo9tw94WL9WSRrHjrncvjU7urbCdUqWb2Vts3VCoLJFh",
  "key15": "5XApRVwVRFmHqbbxqhS6QcN9im7Xhy3M8P8Cdo5MKBYFgZZwi5gQeTzs7eCnrhw26fEFxBVzh7yHJHXPLgF3sRXH",
  "key16": "2LfckxAS49RhwofY93sdRHk4hzoR1FwRsWQ64zpbb9myiDJBZURaefob1RhMXWsBCvDpzXp1RaWdptHXm7iwhLnb",
  "key17": "3TPWT3Pz78HQ8W1zDqpnbXo9N5N6PmUg6fvSFHHCLweywu8iZug4L6cj5a6vY62d5dFwrXdihCuqxdrQGK2bsvyu",
  "key18": "26Ah4pFP61hqCbNvScX1cqz6AnD88UakWZhZFY3kjc4cJPxzRrihSr996Y1Uz1nF9axcpnnH6zhNbEC3aY7UQ8rb",
  "key19": "2z31H5SmFrUfxjVJcCfjxNwYwfJSkmbcdVF1TWfLMxkocbyUvDLbiLe6VrQcbccTr2YQeUTgPvah8vzHytt5BM41",
  "key20": "244DSRs1n62zehEMxtPWWEvsLhtC5J7ippQamhbgUR4naTUakUGVA83xzPJsJ8sPBPwr39k5HFYXnnT6nH4TCrVh",
  "key21": "3TP4AukCkbbchfiYyJVBqFzSUAd2zenSQye7LsJ1y2iUZUZfMDL5N2M2fK2DZainzoZtAtgkaT8sWwfY2un1YRNw",
  "key22": "4YT34BzYgUWCeRqBoneDZPeVY8xFEiz3CYDoYsyEQ5LBUwknkzv5ZBwY8occKKDQfoi6iCLXAFYazQM763bdfKVQ",
  "key23": "35C65nA2rd9a9goUFDsrZebqWXTnuG5oZKtSY32XhBa7xGzSVLSsFH9gCYmkNwBh1gNwvwwG2Wv8ugpBJkRNWeg9",
  "key24": "4Ufwd4fT8ywiDp8dg1hyPwHugu3jabnjTZ5uGESJ8Z8SnPPr1WNsnnx1vK2UB55Wu8E7Wi6uyUX8xgqx1NV1JEvP",
  "key25": "4ovBo8kf6djTemRcfggaUBoi6PUYPfZfCxBg5braVF32WwcBepgpfqP6AhExgGaaeBLp85ethQ239GZ7QbXtHfH4",
  "key26": "499WYrEnV9kTYkYQ1bxNyHVHDtZ1vCYyKWXdq5UsXkaaocNNMJp6Zmmx4deuvYE61RcYw5JFFqaFvu8JquBw8rL",
  "key27": "3FLQoB32DAZMTAsZ6ZmodzrDHmStBHXPDE5v1dtnXnPHoQxeUf7GA1z7Y8wy74Y7kB9bthHGemhTrs1bAS4xgn1o",
  "key28": "wXCHMTLiVDKYAPaUpfmorDXEmkHc3RDC1dWJKgQJuGptFQ7oLLZMFGfLbH1n3pPRpUGyYMwqgEjDtDqUE8CF13R",
  "key29": "5d9CBs4J5DMLa89837C96yE3LmiWs4x8PvccrrzxDtNfoW63czwdRZ4ows5U1UFEEWDv4UE6QRdcQcjUypc1ZWSb",
  "key30": "62cdL7Pbh3d3jTr8Rcs2rJPjMr2M47N21Bd4A2bN11UaqXp2h9TbXJ5CxoSAuj3Bswhev2egmQrwYHtuW3bnrhF5",
  "key31": "562rKrDGDJ5fqeYRBeSAspCMbEWx258xe7ahjhsd1oVZodtHTwuPgD34zEbLodumScNM9r4YsHnRgjJJ1vswkPgk",
  "key32": "4KMCzpDTYNGvEe5DrXp7Ccuycj2zq2nTofU5n7xpWFsAYn9vQbpo5x7WMHbfZcePmStDScyy3L3iHyVzL96pEawk",
  "key33": "3nJA3Tr89TG1rrMgusNpXvay66sKeHHquyuZAoDc7645UiVrVZ69ZB936e9JFfViw88TLNX91bSK1AjFmjVAeAgc",
  "key34": "2r1J8vP4Bqot91URsV2k95ptezx4oXMcRtkHevZJJeAwksGKYGdAfFyozAGYajm3X1UxRy2wcgmdZdpYgvC9dSqx"
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
