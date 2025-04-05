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
    "5TapHKyh46niFwksEFKshJGFEJZeGLvEFTwGJiy1gvKsAG9r5sd8Qo7GuobSYw4FVBoxVBmKezhYtKTyyvrQz6vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1c29P3QEoac3J9ZHVHgJ3msoYBnCGaoFSPrWV8m6kxg2DApxgMQKj8GfsN8vhz5xRFqHwg3qoocw6fYJjwr75u",
  "key1": "4wBUdrJnPoANoSqxuUKZHXBahBK28qDYWPtRPXNfQBTFS34FsbT45pZy8nAtqPfjB1BmcV54T2VxkNsRjCFGW6No",
  "key2": "2UsG3aHfUWQhAAwDHMg5uPh5eX5vbuHdynseoKXmmk27tEm9jSnBPCSKBZGWiNQhRd93C6gS85VjYDzNeQGCLp6i",
  "key3": "3KnTVjZLcKz6ezTV81XhppQRCeiWxXTAgfdwyhs2ezXHYKpMDAA3mTSBWLUNshFT6QqUQ22Q1zjNYNHFzHQs3cdN",
  "key4": "4XAWDgk3DFts61HBfHh8xqSRahFZ2MPLAhSkMmyKcqbhRD16VpEjN2zAQAb2nJ7dpTe4fuD7oedyv3DKXxMqXbGt",
  "key5": "4cLupm8bvZ9yX4cfKqPgFSFjtFQ12M9jK1S3NE8AreSrV7ain4mei1recy1FN6WuVQj52kVBiP6PhMGRgWY3X6UG",
  "key6": "4CWUrD4Jpvk57G5twSghrKWwdKK6Fwh3sbZS3bzqBs9iWAtwq3DQfJtyvcdWKZTx9M76w275P3yXeo5zSzqqtSr1",
  "key7": "roXcfwzuySrF3qXzAeSKxBLk9zSXxREVmMFLR6xpoGMH9d2ky1fCG3YsmmeMDU5FwhsfKfWBQECgCbd3FsSG59f",
  "key8": "5qt82VF33tvv7u4NkMUpn7bCzY1mDoyK7QCxLB5ULVeQedD1ss5DSn4dMBLxf7i2CpgPwzuFFoxw7i7KJvH7sDTz",
  "key9": "6GvJdRZFQSd3NH7LZYBJug8qFEZyVVYkPVXvDYrxmf7XZMYwftsywqbwHfUTLC8Yt3m37AstZFiFnjPgPtsbgbo",
  "key10": "5HautmYCn26hcjQ4ap3KbnefZGjyLLG5JGs7x4fkvQsq3JyrNek1BPEfzwZQh2EevTxf1yWDLnVBy2iTpitRSA6H",
  "key11": "3eMVfoiYi7X7YEAb9Td1hqNnNxGioBkUexVFicN6mx5833QJo4QmSNwjC64hnANKr7hFNfmEQAq4WBw5gNpnAjSy",
  "key12": "25FmkuRHXbr6Sic6jimrAk15Tt3XArpybJSMwt813vmdzusF3VSk1h2tptwgSgcYsTUBXfRLjdHJ1BAExybsPANv",
  "key13": "5yCpUf3jGJ8wgQMf5i7uTMEpmRfR2Ke9b93Hby14JchiuJrrpPhfsCzH1sezZRj4V6BfM97Pv28g22Z9qSdWBoKb",
  "key14": "kh6Z4f6RGyhxzoQ8a8Ckg4QRgi4QbvcV8RkgBbRe8qSPYFRFnJMK1oHUZoNVzFoRnN824pakqo17vEXARAXFPXz",
  "key15": "3oCJ5BZb9ey6HheAp57TGQYXoN2h1Ef1vhV85xXH7WiGwe4tzAYaRpMy8DuyAFXbeVE5Yno9HXq5eUSHLRBwNTSQ",
  "key16": "3Xk2yyNMFaYn2dp6m9wuePXb9aRJu3NhJsbtroQiAdxzKxzQ8R9b5LEzsDQ1uoERBz8rW8mpnXZgN5uJ2SeyYCdx",
  "key17": "4YPySjFw1so5pvbxPffKzgdKuFNW5CZzrY22cYHSz1b5qc3S4whjrkLbLeL9NjSDDsQeE5Mt2P6TGyRt6VfrcTNe",
  "key18": "63eS2X7ohddKR252DLgeY6xbzsfVzxpkmtJMWdKfmiKowUWz12xHeLNB5VxEbwq23nFK7WuuySyZcJVvrA8dsEUW",
  "key19": "2pgAvryHFoSroRecccq2SUcp63QCmE1VpSFXBVYBFXzGX3swjWpci4n7ztzfnrtqhXQFXuGz3NDSVYqs6WJwuYyJ",
  "key20": "5YqsBt3WicaRhgDR1WxTpj8VHrPfDh3fEq3D4j5zzuQA3TpM9WG65UDqAiMXR71zqCLoy1faLmzq18tn5CePgPoN",
  "key21": "5SE8i63QpFwBbzmRJiVKeiHindpq6qPsAp9pLwnBxQ5uYJdi5mpgBc8cmaP4FXUmtXvztrAWKfqD7F59rZdLCWRy",
  "key22": "5aDUcKN4uQh9x62dKSd6KraARudknYy1wJqGwQtVwERfQooBXrLfqfqRjpkw4vfG7QtxgxJCXVmsmuuUqtgW2QR6",
  "key23": "3CBEkpgirwPUgZK5bqiy8yKFG58JJXxYCETQjHVsgKmeLASv6GAWvUz3wqBboEeHUgx5gXWN8aDgAJ233iEaiSNs",
  "key24": "hnatQgU6yd3tU9p2V7PwVjNrG5tKCAxFW4tZ3XuS2e3aMsz6LtDb5ez2bTL4evGBeNsxrn2jHeKMSvviTZmgPu7",
  "key25": "PGjHsZwM2pQGLezHDy9NA9uzHCqXQeshj69RWLqQNh4kFHuFino5PSBY13dVh2A6hr56eLkGxekjciY71HT5ii5",
  "key26": "fXWRfiGoCZYryDvn7kUoywnXWHkivHfiUMDiFwhW4pHf7EytvpdWBFvXkmZHkcZsLNv5taFKYnoEgbvGs1g8Tfk",
  "key27": "2TJq6Gk6K6Y8LS3CCMz2bit7yMwH3UXsrvzmCcURSftmM3Uy6wi4pAQtthSpjLox8jfko4NcUj4j2hjt5tsHDra9",
  "key28": "49m5FFh3xGLTRJuw74H42WwZ8byWY4Qmb68uMoJKMndZcq7iFCji4bPcJUCzUaZgGUvqWv6AMLQBrL1BurVBorCP",
  "key29": "mRnQNswTnbiG4F8nswV7VJaTkfsDs36KhqoWjYZtZGKXtekSQo13fafk4Ya5vGSWztQu3Ct9Bh37Lbq5m9EwbSi",
  "key30": "3asRr8c5rUMtEYvufDrSWY5oc3fTNuvis5u7o2RDygtSTQHgqB8Xpuf9PexKrMhV3Uae76vX1XDcsKR8WaWY3KRu",
  "key31": "UB6BvZ3hszVg9F1khTuQtEWT9M88f3pSCcQ2GEUZBR2bu8sHDdMFJhknxFNFKybjcB1TYbGs2yXmVaRB5V4i4aS",
  "key32": "5kzoiDRd2TBRWjaeoXH1MMvZuBWSJfouvpXF5jZBXdxgew8525Vo3v4vXzdZvGFK976LUAeUT3L177L6jg1bq7UP",
  "key33": "2smT3x99vBsWVSczWYSCa54QPdEGm3NTaUn4gjcKNC3oEujCFGhzyc4p9wcf8rRBSS9kPx4SHpcfN1Eug4dftNtb",
  "key34": "4CBrF3aWhZoA2FByZGDTVvon8R13AK6BxmFgFaVN8WhL1m6jtwBkvDi8nSDwNPi8Mf39NPJjZVzcYzWqq7LGQwQy",
  "key35": "Tx7GhyELySZknf9S2qMXkE4fHnUoN4iDc4K5r8jJrb64X3nvzthEwW7vhakv6hK6zX5vger9JbSkCwEuad9DfLT",
  "key36": "4Miqry3gBRWzeuJWkrD4hWsUK59cvJf7LHEYQGFhm4rT2WiusXCsyVejepJV5ZTqVw1MHt9ujzzNntZTKnZCJeap",
  "key37": "5a3FHMFZeNF5dBDwS1axnG1ktq3CkRZ9QwchtScGzmEktTQwi3xoXfEnCifpSFDAcayJDQrQ1Lgpzhkemz7H6Nnq",
  "key38": "4dpcSNUszWBJQsL2gLmkMmR1Yu7TVUjTvzhNUvb2izg51YfTwgqgG7pi6ttFjjFqJXFWsymcceJXHik4uZgBYyQ9",
  "key39": "4V57XghovUkbDMCFJZan9Vvj7b3dy3SZPiKvkFPPqRYwbH58j6uXus3fjBkUs3DdViWS6RVb6omy6KSSy8rHxivM",
  "key40": "4LrLdSAiGxdoBk49KZiq52XassPYjqVt8cG8bW4Xs4Ap5sYMFiZStKK73RwqSYWpjpbF9pEjgkmurriv3iywuCeZ",
  "key41": "3jmTNJn4MQZfDECL5vj1qRGBsQWd8eKLxHHfWx2Hf6qHyuQn81pEEyWom53LyFM1sRA3xC9rZ5yQh48W9SDuHHLK",
  "key42": "4ADrVsNXnh86Gb8VbSfiaSjQUJiK7n4fwrtmdA7WpBGrstJwvjSGqnk6NYi16hY6h5SwYvbkiGNhcNwNetsbLSPP",
  "key43": "yHCXjTw5h4K4YfigWFK9fa1xGAXB5kpzbZZncaG699bP38QsBgmDCxeH48JD4dLyVxbxmJAJ6XachsLTTY9JndX",
  "key44": "VzBypvoWXsRVGLmV7GhYHeZGmfsetvJQ97KEwTybotzbd5Ur6EXtGY7AHhvqZUcHAMgrQSzhtghS8xWsMZ6Bw5C",
  "key45": "5bsRBYL5deNXUicMCeHSd2od7BvCKamdFkZAbxGa98f4xfo5KEXeds7MCqGbdYyVZ8Y6LDkWEUqqm6xC7RCwovcN",
  "key46": "5v2tdRekxRWkKJqoqyMqgwkkPnHwSMtVQAUG63Nz2Q5KzK7JpspxMdEBSiztW1S1aPZAGHczMGg2RQn7x84yNqZH"
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
