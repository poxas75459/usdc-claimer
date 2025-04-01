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
    "3D7Vx3LVhfjFk5M7ArkNftozrUR1bwBrpSd3BNdb6sA84z2rHXwCZcov8yN9qPhXMTrkBi9Gn83GXdPSZUnLQJ6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TwwokQhQEVMGu3vxXUuQsU2qVxGXERf3p9sVUE1shBaHyhSmXiBa8F9wXghH1vXUZH23sRfSkzEEGdgkHJrhvWK",
  "key1": "2LbmN7TBWwdHfP3vD7DmyXrLCke9yugwyuNvaeoxubqV8WqHPvReaeuexr2Kc5bFcafWCzZDT18o537rayisx14a",
  "key2": "2VFFQBpWcSxuHQu48vjbfrMJ3FdDEptGBuAo3oAyQRj1pzFGfmMW6zDbeXNpQXmxj6tAgkvKksTTouE18CU2hpSR",
  "key3": "2Xu5NDUhu4VpgBC9KFeKENt1YnXj6Cx4fyJHpqP6fn4TVMcmMhvU6QuUFp2T4ddzGNkwzts83ykEn1wSWq3wrhg2",
  "key4": "5sD7fqQ4NhFGbVygZiaJu3SsX3kcHRbAhADfA4mtDKWwiZUeKshYQ13ZQVkUMx9VFw2Ux6YMDaYfPGSApX2fZ5W3",
  "key5": "ozojqVonVBknMTJipEbnbPeUMQbdGFQHugLBhq4CLX9Xnw65jsTC5fnwxBwjTt21hHdWXBTSu6tkbrRUfnBwdu9",
  "key6": "2X6L6u69pPvazeTbabEro7Nst2CEJe3Rt2CVyhBvmfuKefosej7EgUifhPUGMk5Kf7945QTs3FC1JEyVJrenNoCc",
  "key7": "3kv7bECW5yvz7C9ngZbWCxGK54DpEabDJDvmGhhMzsybKbA2t9d3xmmip54Jgv2UAuFGSwqDWt8fQYazshLrFLu4",
  "key8": "4juXBmqHAw8Wr4zx64CzVcBzCk7yXqWq7J1oLezgmKVBnW6xBrcwQ6sfYSR34YGrgyU9oGZafA4o4eRGPnjtr4z7",
  "key9": "4Mf9quFCV9Sph1VcHxeft1Dsg9VLFAbsQnjY13GHwaDpMAJQgR9xYaRDy9ehJdqjY81X67bCJWbqU5vWquyEMBRU",
  "key10": "eEAgNfqQcc5ZDsYJ1zEhc9yk37Weh8eF7dMQ7Nc7R19yFh9on8ZMBuQMw12xvUgDDGR5KBL4KHvrQcuZsC9rJEi",
  "key11": "3hsJhGLK6Hfca8PZ4AxQvnaNJzHSia1oY7YTZuAmrE3fpESpG4hupcJnM37CxzyRu9bPDyaDHW7jVnLbpUGnLw32",
  "key12": "5ZbykZeaocCzQMMsUQeSik3DhDjhjsWLZ5tJNR7wqjTN45pVGrGurmGhjRpRrSGUxoU1S7gyBwg4U7jbuAxv87pL",
  "key13": "3jyv7meh4jdbodZ7P46d3AbGgaLE8rmpK8o1GH9tp6Bju7SScP9hA6NHWMCBvA6B2Wg6eaJSu18bczFkskkpnniG",
  "key14": "5MUbFsG5ZBNbJNJM81vQg4emuLYKmheBKEshZiCSRNEyFrc4SDVvDZepotEEYfE2xbeZ86hocKxSCbdxPwhHBS2b",
  "key15": "DBZjHzjrKJAriyJcep2FUxgoFsSRraZ3atVCrC8Dq2AUi8u3H58TjkyhcE9sNKse8ExuqHw2bBYxp2sr2Rsw8QZ",
  "key16": "658fDNaqnCAFac2vqDdQauJKN43eyrm7hWBhx2b6G9oga3rirk3NGGvzfAHojaZW6e3uNESBfno7KJvXH6NK5RSP",
  "key17": "jWJGuw767RGnuuDmLcS6J9r56iPJn2tLX8zo4sFDeU7KtFi54cZEwYhGHyD8drV1duVjHvFpd51DiKSmRpmKe7U",
  "key18": "4s223HKM92BfoRJWMX8B9cQodq73dLudHVfmhcKXB5mzsZUaPjFhC9feH5t3QANFdRr9gmWVezrRi25DhEnAbaq9",
  "key19": "5BbxuULfaAJQ8hQPztYfBEkqMBTd9kwTVhGt3cv8dG1AQfkfaZBxckEwrZTSfHYB88eDX4S4NHtcMzUUvfi22JbL",
  "key20": "2ffLg1L9W9SD1WjGemvTHiESYeGj4ysUkMPb3HLfCyKD5eJm8wmHL9jX69o2bqXpcnXdYj4WJuNSniec8WTHho8p",
  "key21": "NM5XkoxcL5RQST8AhRJVqA844ufLrzYBSWAAwth4RSNb23cfmrsYhh2SRai4fTcgVNLittHFwrS9sbgihGb9cFv",
  "key22": "2ChdqKC4CR7ZMcczGDue3GFBAVtkm9KFJA1CxaBwFpF357CqKXfz1JZ2gaL3cAZa7xQdVmFpoBfya1CCvV4awxWC",
  "key23": "5yDaC4Q8kNYd37G9jebPjk4tg5tAdShcmvWExr8PVMe2hZDhQMdeFeiaCDK6KU6fjgBj8gBbm1DQzPT7gPUFwYWd",
  "key24": "4efW6pwWXCm4QPd42DMsQoPZGsTd355yGEfftrm9URFj8cBzvJTQcVFQCu4f2NMGYHVAwbAq61jVhVmrPuW13pXo",
  "key25": "3EKy3bQWy1AHeW7ENE9n1fvbdqGGisd2gKieQTDNEXGjnQ9XjXrYBQPfpQUhxQVAxZrXFfpNDy8qmHRCxvtd93xW",
  "key26": "zzZchPpim7pn8ijtTDiA6EKPxSEC8rzkPBuWdQDZWLkqMgp7yj5wx7wV6W4q2GmrdJ6detkHrZj4ZNpiT81muE6",
  "key27": "3yNVMXrJMr44qBZYo7ZjyqxBacfwdi5HM4QAz3qF9rwDhti4fm9aeiWcpvyGxD7X5Z9YpNix3wJRR9JkmwwfMEbt",
  "key28": "36Pfh7YuApFiy33s9kaZJqo4soNPNsPyUSEd2kVwbbeUxRiTeL5ToFg8o6wYbHWsyUWmuLsiGmiduueK6RDxZSbV",
  "key29": "5kVA5VhWaCQVzw7rsH2Cj2hL97cqgyu323ezKhp2qCAwm8JJtT8iZeRLezkbnMwhkM3MPHfqRrB6r6cMMZ1rHUi8",
  "key30": "ocBtKZ2mQxFJEdyiBX98TzEEwQfhFy7gSFBLSokosz8xvYdBmBQyt6mbJhyyYwFr2n1Afa642d3VbGDim1N2AVz",
  "key31": "5AFui3xBGCK5sqJdQLiFkSCoHSN438pBzibv2PYJvQJkGNEzeDQUtKUQ69GuUNkXQTbhLYSQSH1VJNv4ATrVD9Cb",
  "key32": "23sc3kQPw744gH8R1QJEutdiwSkQGgoLWqBBTUa11JM8wHkLBYGrGsq3jzhMPCV2C6U6BUn8LkPQxbC8R39CUK2n",
  "key33": "5qBHwT87wnfeCGGpRoihcwx2pNzwGEJ5kxSyVNyQFpNGh7mWazrKzrykYJ1PUZCtdNxXnjq8KxsxRjw5qpUBLcc1",
  "key34": "4jhhWFZfPoyLmEwh2NkEW4APpD4GdQeGQj2UikyL6fEpCf6bCnubBvVV7unjs7EtoBrrHAFjmrhDoNnue7MeZMSP",
  "key35": "3hs4YXcTVecVG6A2NghhCCWwwkckYKYfLaXLtQhWetuKrTFNpcyTShvJ3kvarDvNcDb2CsFVGvK59ht3pCYEG6Si",
  "key36": "4Q5AzVXC5iGjtQ1LWba1XkSz9UmJkXoejRNJnErLRsXPjFhx37pAt4H5w98QeueVMhNcrHAs2d8vT84SZ6GsRask",
  "key37": "51PaTtfDba2rSYmRT55uTUzHq95z9DZJdx1Hh9peT88dkWidKWSQ4hxtYzcczkJYkDvYJGsaBpJzoB8af5XeN2mJ"
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
