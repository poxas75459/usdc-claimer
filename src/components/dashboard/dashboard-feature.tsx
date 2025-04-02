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
    "4DCj45oPUg9b2ettuhTjmGAyZ2ZvcjTZ1S97fQc3voLDGob5pxeSpd15jaadTyzDoeWem1dwVaMtJmMnmDNiUDwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RC64sE6dAztGw7gHY5Fkbnrc1gJRNSdCMJLPZ4vT1VvyTBAW8mwTbxGeemgD7W5xhZLvBvqUfD8RYHr4zhJSNpD",
  "key1": "Dm9pwNrGfJReFMf9Yxd4T4xWs3dLPjvDy2BX7GRHBNEc8s9qkwxNh2QaamgiGrAxMM5TibQqpoFBWT6cdoqJN6h",
  "key2": "LmgW5kfpCZCR6jDEUdxAa7XuEHmas9GhGTZq374NeErDcc9DuxXjEMRK9d91JmKxxMJHcujXFSQtJob57c2cwph",
  "key3": "3v2opvTrZJ8Ue8Vqu6acVuRQN7eRvwcBn6eS1ARrfQisGpLftKdb5aPZPuqDUfaEHc4Jy7HDtrrfvD91UpVnbynQ",
  "key4": "5s7gULgnomdr1AFYh84MoeoNLih5nmg5vWKqn464rjW242pMLFE2Cy8udmPgkU2AG7APaWSRuy5ci4doyYqrRt4n",
  "key5": "24aGAncz2exX3ixySGCw9Q6ePexcWWRQkpnHn6PEkL75qWop3c1s5uUhnwD1jPgv11NTfYZjSRbfMc7wYpmzRjz9",
  "key6": "4TLfNCGgTknnKA5cqeDPrrsQ6U9XhqErTFoRHt2BW9TqRKLvy8BheM1sk6JPe67gJpbsAzUbkm3i6Cno7HS4Hw1t",
  "key7": "Ug2jYXYA8s364suUYKaaQBj2q736Zn7GofruzcXVRZKhNn7agqJm4MGSWvnbYJtHGNBNkZ1gL5zmF7MPkdZitYo",
  "key8": "48B7yMALsRmQhjtXXDKEpb3RQwpayZ1NBnyKADG75QaCyTNfF9kLhrfQeHr3G23Ddxp7ETkodztS1aBKRtbp25rK",
  "key9": "3m68oj22e6UcH8YvJJzmT6Md8KuSWbEQinhBTzUMEgHtHxQAAECw9sfoviUedCRuW2MuTnKYJ2WnAJ7vsSsqGKb6",
  "key10": "5NZyvoMMHm61RP5WX9agCr5Y3cLqZP1Wi5a3RSWXgQ6qh2qRuzTX442G1xQ57L4aubFXbjKGpSjMh77zNWZe5tq4",
  "key11": "3HKG1BUTxrY5ouTRHq1ZikpHazfMzDwkaQQyZdy5tNu5jvuvrWosGagY3Ym8F8aYoedkZQ42N21s9huxZ2aMGvjd",
  "key12": "3Tt5bBivp9EqSbqMvUTmKCVkF5wCikTcTVVrpBHHrDAS7JcXhTDM2jzz8nmSqLmJvU8v7DWguT6XJ7XCGEbkQn8j",
  "key13": "37pgBUPxMZTcSD1tZEtGquAgggG5zMwyTNJcDCvw1UzDi6B9c1f43XdmHxe6CuWdSrMgcsoycvPLDUZURHWoe74e",
  "key14": "5XTJf8VCz1k19u6gVv74Bpjh3EKQWdUKcegTa4SZovhwFciMSMwsdiFEvEBs8XQKK555XYTJdCNWRzPmyKVgXveA",
  "key15": "25mMNL2iiYGfDqqGaSmwaRhvADuNqrtUqLPf79qs1Cp6JN3UxweGKNVXt2yNM8J2Nqvc42A8wr73eNim2LCYsXAn",
  "key16": "4nx8Tt6hci3yC2B4CW5P9NoCwMRyZT92LHbVwwdh8KkKyyLSBXxSwFf7nL5Jf3ABHeSqAwREXZDr7T6D7qdxM5qY",
  "key17": "3WUQ4TnEm6GuqimbDep9ti5vKyXpPLzEn9sNnusXxKuEmWsfpmEyj4LkmAuBZXYwE1sNhe23pbDU7w4JCwGXZwQD",
  "key18": "3HmPygzBynaUdfg99DFiiS9HGsBJonvswfm584D7wEnRCkzydDuBgbE8XshrQBUmqKJdzY6RPAHvRvE7EJyMZEXY",
  "key19": "41kce7yzz9h3EcSvYyefFP4bsshzJhWTvVoFM8AzJ8osNYd3UUnbTGRmFoK7jCgpdNwPnF11f1Wgta9xJBFZhufi",
  "key20": "rzLFW37SeeTxjTeRLCJWVCKPU68YmU8cMHV2aJyd2X4Z9TD9BZcFAhByA5fp2Z3Pp34cN5zE7Xr7yftqfvTYRgN",
  "key21": "2b8TqHiFGTRt4yHzXCwWGBpy5eDRg9MQoWRJc7zpuLFpFfGb38c3r6K6mJ1izJSqwEHWV9Kh2yB6j2oSc9QVvo2M",
  "key22": "397LjQQYXTHN8NbsPM8vBTjv4mK6ydwWK4LfGfaPqh87BpKkhuW5oYo4BrFcrxLguAASftpqqZcb7uH7xrYGbej6",
  "key23": "4B78TrDRBPRxmjAuRTDEapTQTDxAkByRte9KTEYFLTye1qBmKXmJBqyF8vauwmKWcaHSYWn2sQsC6F2cY9pEdAYX",
  "key24": "44yjtyd4fUQQfTer3ThYC5CqearP99WivvCMrWa3nCERZYQBDVFiZUJ5u4sdGpT8GnpCykFoaBG3XXfTTPAFJCto",
  "key25": "4WhNxeFaaTzFLgj8mjKri5gLDBCgU6htJk7N3gN5YVn5rStimSg1PFb7EEpBNEchkJt3VVaswZA2U4LurP4FN1Pn",
  "key26": "4KkugaYtnMFURK98mFR7PN82ZWwdbrAXuPsv1AymyNSzoqBcgkhKECrnCTb68PsuTV6GhFJKrsuQS6LgACQQzN2T",
  "key27": "3bQA7X7PrZrmjjHbHwGoAFLDqMTAwHSjPBH4E4WJ4aNeQfetCyYv4XyaD8YXdvbv28AGaVT6sFKxTNLG7Y7T54nM",
  "key28": "2X7ZU7xd2aKsAaGhvrWNJitqoTTHxTjBjFxJCfTmRUwPnqLS1V7JRSPvwgCEsFjNrVNoksNg3DHMUvhYjfcQM4yW",
  "key29": "67jd1TBHpE6tjrzKuYJaPbGnsX2sP2ApiV4pxEYRxxya6o82P1TeFevz5AZ3eQSoHV5WZzyBfvQER2h5aKKis1m9",
  "key30": "4kTiL3wau5VGdFrduqFLUnZTQF9PU3JthfF5KgR6xjiwZxezsjCvSWbmAkyLFAsDqqPRaGWeUdpj6q4SET5duzBt",
  "key31": "4pcqhtVwFFCLi2fDzN2koyt2yGxfQGzUkTFis7D2Za1iEnKSCGvoVLpWFVomhPBtgjrQz5pTTKRVobvzGfKsgiFf",
  "key32": "6eLwGZeQGMpwHZ9jRiAr4jY45M2UhXDe4pZwXP5vR9UZth7hBCKvLWn8P2APry7YLuwGqZ65sixyGwSupR8M1Eq",
  "key33": "4mkeyEVEuRMyvfxB1jPgqx5CFuRAmHgJ5zBbvgxgWsjCkXMa18dwHnmoiqW5GHrFMH1hftY9M5EgVGZnDXYPypLg",
  "key34": "3J5CekaKncb5ron8VS7x5xsjNiJjJbxg6P8syo64u7nENYRLqs4EWJ1MjwaxFqb4zfmtFPB3fKnZn1MDDeBxSgb8"
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
