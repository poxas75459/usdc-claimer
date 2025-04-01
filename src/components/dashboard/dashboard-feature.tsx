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
    "5wna7w7B91L6XQvXVgRMANRQyDGuhj2KktjCwzkTZUZRTkAwfjEBMxAXAokLFs34qrVB8ZRuwdfqsvL75ggs44na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLa6QXzLyrGZdd5Gd167TCmmh3TVYbyXgjPtQCvSzY3CeHhBp3fu3GH2kdp7nbVj8MR6wxuVvy12hgDyhjMK7G3",
  "key1": "aqcGjizfdSxP7sfsv1bez3ZGCpK5fLS6sEiMDPdjJAJCaD2jxTNAssrhYSqBWGEJCiEMdbHQUiQV5ypr8cpbfPW",
  "key2": "4iS1ZSBf8L4WztFwy75WTPt7ULmJs3c3toDozByPdNZLBjK1ywC73nBERrLAiyRyUEZyAfD7h523dA6bzsAgepdR",
  "key3": "56k9fN1KquBazMRcBLDchp2uzLGPNCZVvkFTLH3mEkwNcxm1hYGHnyA1uLzuziFX4o2K7USumcrPG9UGkMQuHmk4",
  "key4": "5jJVrZdiGcowWcz4UWjKGsSg2qPAoDv5ygH1QvjPYzY9Zd4MSP52jNsMQh85qafhA2bYkKHbYCBMMf7U2XYrw3uF",
  "key5": "5NcoRQ52YQ7pAKtYAxVq3A1uN2beGcNyJ125a6LYpzAsWQgKiM5L28MX7NW2m7UCxZ9iE4MvUtZFpmyKiBUrhrGC",
  "key6": "4qakQidWw3s6k8Z5fiCesVqwVLs8h6w8qQTvoqocK6jiqGYTAab4vBNuwQU9NNW3sMG8N7rGBYLXgAet9a4qCERE",
  "key7": "2jrXbZBNsEcsMSyfwrtUjNrGmk4QGjB4inNEeEnr4DNbj5Csx1U1qyJwRYzVeyzQEzNrtEoqxTnE26fBCmitj5pH",
  "key8": "2hFy5w65qBwrxd2ez9xPrvxGJXhfB883p8TRqs79uyF6Tdj5Zo1cEJ3HLhxSFYZTeoaXKzo81ejoccDADhbXfryE",
  "key9": "3qxzkQ71usrpPaRu8FC9W1ubLsSJ4G2c4DxtbynVFWpsRLJoSQFbjX4fGrpi4mDuv5mCHuduXDXn8kguHh9sPBkd",
  "key10": "63ZiBCFNV4KRBtMJVuZyFuvgGDZLxrWtoUEsH7GCYkQ2rBMH5Vmyom74SqTqPJkCzKVCVhDKByoLQdSmnX1Ly2J4",
  "key11": "2YRuCmh6Pj21wJRbXfWkUcyoHoKiw4bHC49ugKLhc3z57EGtAcY7bs3NhyfYTiRsbNHS1sV7ykg42H6c5fD8QaDP",
  "key12": "shgxdQ8QczHj36iF4w6huiNZwqavEgUTxV6abCaGu4xwdjGEtJBybu1a1MZUUbxzf7Zcja5ZbXhaAbEnUWEqdCg",
  "key13": "5W8qDsZHikmsZWwpQbQfti6o4EKkKJRextD5yLJ4e7yeBJ2nQLYJdgmteREHCcrWod5uUgx4HT4NpTPRqHMoriTz",
  "key14": "2gAZVmpGbVGct7UwPHbcDKD4u1QS8d7QJM7HRfJdUk8RhKqnxZgmFqAPFkscciWq9XEJ4x46RAF95hsPQXZA5Cpg",
  "key15": "PXpFa6W554rjkM89RnJsZdx4CcdWw1HQMEn2mHt8epkGgp5SyMC4YUNUUCNYntcyhxwkp6NM8vseUKWcJigHe37",
  "key16": "5gcWdSGZJwNLJmJdvEPkZkMJtXdfcTQiPiXSLbFQcZwSpfmXsjZY74g2w3Mf1Qb55WcMb1aYFksVMd7DLReE8nW2",
  "key17": "4K7mhKNriALxuhC7GTdx6iNYnHhHbX47H3RVQU1ZBxU65ScEv5hz4E1q2J7hvTMq96XrV46WCFhzL85nXF1hh2wG",
  "key18": "5DiCN59tuAXoVu3reRthddUGb5dsogqhmA3Dapq98K1RfJADeXfoMyTXykeM1vvLPgFmjGYxJGaBpf62g4xK7G5m",
  "key19": "BEuPKkSqc91z7bsW3uv4NKA4MEAPH961wK8A8jwKeZj4Hqa6fzUnUdVi5U4rUypbuyFQ4B6b2kTBpyLzF8YtDwr",
  "key20": "4nZzGeUfEpBqFztUdJF3K3Nh1bSg9cxtgttee5iVrNjw77PK9nF3ogpBeAAq3cao65YTKy22C6wT2rNBbapfsrWH",
  "key21": "4p5K4a1T3qwVf26zopwQrTUyzd1FSG8p6jatveyLsgEd6XQrMTysAvQpzTdSJj7SpmjkhiSYMFZwPwgn1yx31hMe",
  "key22": "5yKLY6bw65uU9iF5YS4J86RPd2Z3g68xvzYMJDpfEpG6RMKPjJddePCgo3f8Whg88vmUXetW8e9LSsXGLgzFDCn5",
  "key23": "2YEHg42UZjdaeXpp9L3NEZeEpnNihSUxmuF9r4aBYYmiCY2Sv7XUG7AgR529dz9wnP5i2gcoTpmQFxEAHHvQC2ZQ",
  "key24": "kXpVUVFJaFSrggbgGdA9PfKsnUw4eudSwyRrW4WXuwmfwcKjPk9gQajvfJ6FcNBNxTLfhLAWhb7to7vnxiMX5YF",
  "key25": "2KEuQzGRX6NuRZaD4vTaw8tLQV2hwyVyWcj9yZjf2bQFDGhPrGjFdFub6AvbZ3qzK1yQKARAHCJ3HHcPCGzv7U1o",
  "key26": "3jdJZ98TkhTf7XheRbqJavksTaWdbZj72CnHVDE4roY6D4Z7HoTaLS5WxMZ8nu6HWDksikkqax8dZfQnV7vjmJGB",
  "key27": "D46wygE4t1CDjmVJNLNwUuwNHGvaYYN35MFdPodAXDPJPArjHkG13yUpyF8fcFicsnXDmhESnEMy8rYy4EsfCZ9",
  "key28": "58bkaFTyktszJ2shBjH1VtYCt1xtd5rZ2LahNo984p5MaKAs4NV7ZLEwDPgbdsX5htjQijuYJxcmPtsoUW5ECtEx",
  "key29": "2ewpsbExYBfFmu8vc9uUdeEFAfz3goNpsGZx1hVq2QJrSJt8cEWMxxGxX5kCJ83UEXQxcZhJq2BeBDkNNY729p3R",
  "key30": "3VGpKgam8E89okwZfY1XaQBEbKzFzoZPcE9uetP3qcVD6WzB4KVhDV8E8PoAjukfiRHp7LJZhXcV86rTPDeYRj7a",
  "key31": "52k4QzhNreHe8dmns7e5xep1NkmAU9RGxdbqaTuh2vUcsqop5t5pR3eJrWJ5uZ8Geq9d6pwtbGdUs57AL7J5jQQC",
  "key32": "39hp6qEr5nSrFzhiNrKVUnZycirdurf3VyUcGgg6Voo3XzCSrbZp7ii6mA4C2TtqNzeg2wyad4TxGtU7H3YLDcoK",
  "key33": "4juRQdWLTK2ULpMVBjc3gUvbqnAATZjX87MKyQEB7AkL1yAywQ1YKR7nmx67Pp8hENcLGtLmcvGBQUczqNVqcmpT",
  "key34": "25H3oXjmMTj4d84W5eGoSaMtc88yk6hnTVdZ4rm2gJi7DBARcvV4eWncdRKr44s42nfirZS1ojALSPXjmibWWe3A",
  "key35": "27zUW1syKCwCMHk7u4HsxZ5qSsGrL2KdkcJDGSAfcvpFu987DCm91MDKoskG5wHXPCfEx9xX88WHrNyQAeRgVoDb",
  "key36": "1GY5xvDSu4MmNqwyzTebTGqzwTjsvzEb1Ds6L3K3XrVVMSUEHGQGWpEQdDohXnms4aqc8w4NfpqKhx4wu1aKQnN",
  "key37": "4fzghUkopP1zeQz5v866Q8E8WG1CDK6QpQzdcZEmBZ1H9QNT5WeGusee3GH2ZikKhfcDuyYeE9fkv16sGqdQiCnk",
  "key38": "2vFeYXdNun8ReixRSZdgsm5LHZQaMhCNcMkg5g3WvCoYtJE9WYJHM7SGZAbmEYUxZrGNvhfcvEtf1RGsJGGAF2vu",
  "key39": "7T7vaSVokASieixVzyWbdeGSknVi3xB4gED9o34a6oGXK99E5Jf4ovqc2ymFBCesYkCuA7joNMMDBXq3XZrTg6o",
  "key40": "81eT5Rt6NW4Faep8BQxuSR3yykM1VCgkbsoGW4J4NQXhghgCRkhAqRLyFxJxVPn2mpGC8EUSLnp4itfrYwkgJnQ",
  "key41": "47LVcHFzuEsKgvkVD1La1dE3iKknVuc4hCXc4qumZk9FEEYkHuTmZRfsNNRAKNnZuC98cxXQz6qoF2gpyocZmXQG",
  "key42": "spAeJ2JN2i2Y1r8qHSShjSFakWcqpGGi1itDyFKAKQ7uTnsbsYGUn4in6ia7xHTvSgVMTkBr1pwoxv2eRvJS3tA",
  "key43": "mTEtpu9TUk9nHehaqrJ5shuB21wGbKAS2cpVwZ7gJULfUEGRa9p9RNatasekud5eUqcJtMZ9jquQJzLJ5Ls873C"
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
