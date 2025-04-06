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
    "2Du9cKFPuLJYY5pK8aHf6EhUTacvW38JqtyHFzemT33B8vVpgzQd46fkVhREExDNfot3gM1Y43oEodNErEeGrRKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eo4nooSmhboiYg5eQBEg1tEbh3fe9B1VLHYtB3JwzyibxHAe25tX4nPYmhq85s8d2Ep5ghxqQh3CTX75ko7o9Nr",
  "key1": "4TrJ3P3sE4LaBBjgjyCwmFBF71kTUc2XnQnMZPUargMEGP3rCCnA6yLXPFHMcNzpxMWnygNCoYvfkxH6d9Ff95vF",
  "key2": "5ikb49MxvvAm64GduNDrNu4N1dbUna4m3S64qbKsYoM8hCjqnGdBaiiZkETnS7TjkQAdNV9UCrQQt8ZgqtsRRN5A",
  "key3": "23H3EpxERDnxLBGYToKNnEkbXQwvcgqAGRaLL5DdyGNxDxAsb2ARG4vdBwtYQKcEnLXNBJsMdDuaQSyPq87qKifc",
  "key4": "32BRzqChgikdUw6nLbEjUCEU7RGCswD135LSJeAm81GcfXwno3AGXJYezJKPErgL9BykHE1kgJasdkV1V8THXm8j",
  "key5": "4krX7MoYVExZKBWoZHCMc1ppiWvZEMYQCKzkouaVrWibJGRAJYnQxdGzC1Csz3BNo86TYEbNPjzMLpLSWP1zpCs7",
  "key6": "3SKEK7eSsYa9frmD4KN88uiW15EUppLdEFHuhiQCLNDi7sMUiFWFNZL4j4DzBJrfkCGFizQhZKXvmgvcTW2dtWnH",
  "key7": "3yyuYUBya1SKmS7D44c9cDLxFgMYayLGXGd8hTi91MV2PN7Z8LkUnQr6m3c7ZgvrEUrjU8zy7p9PaGprAYVKh83C",
  "key8": "4wLSnELE1jKt6fpXwxmttV27vqWLJHkfDV6NBfdV9a9HuKTZvfYBwJXgSWsKrLLPKX59PdepE5f48K8GWQkHfHFN",
  "key9": "5m5s3Brg6mMgsL4ZLsq9LrG5Dxzh198f7TZSp6n8Pzn9zmncYom3nPbT4Z8tiAUwqpNvFr771mz2yRu31yh6D6d7",
  "key10": "2gaYxR2K8qUp6U5gWMYt5VBHW9GrZiqH8vcSXJbu22EhoTXkMEeZaVZw35V6SPmMdcSziDHeeXNG7bxNXQ9PLMKg",
  "key11": "2u7sWXjuNGTCAGJFDdc9fY2WGsJWswnct8N82tXvYSp2n7Lc8NXNU22E7zLF2YiQiVDvyzpr5YzGJBAbMvR39wDC",
  "key12": "4HudL3acUeiDWDeTny5QjgMHWQH9oDAaA7cCw8qygpNj47uaB2oWxXDEFRBwx2795Pu9m2ji8Q4TDJeeMjTVmu8E",
  "key13": "Gd9Hez1tbLK3dNqSwGmDdtBMsPkLPYCEPw7bxCfcJw66qNM6ZPAWjHgmynVV7TN6En7dheAebkMM1adZmEotiFB",
  "key14": "DkdzDhxjyMe7xmjDow6jYviyLGnhejUe2oz6WWE7oUrwzVjRXpUPVnhr67BnR5F8xmVweFTRjvXU7qLH99DVEcf",
  "key15": "2xUyFydFJ9KcQANv8E8Cb7G1hTGY1N6jCwVWm2b1YJDEx8RzB7b4361mEdnCJjj4Tdtr6P2yVgEt7mwSzxejjjHP",
  "key16": "48WUtUuATaZkAr3KcLqJs5p3x9edsCB2tizxXNxwxEoCDw9KMWQrAnPAaQSpNvAwY9473FRUHDR7LC6e1yKjzaat",
  "key17": "22eANG7tkV4qzXXhs3ZNKkqC4rghP4o1ZJ57U4N3q6Uz3VJWc4XeMEGsv55kW4ZN9aXedtmW3ENSCfYGRn4Ju7sg",
  "key18": "bTU9AHeNDbz8GTTd3BAHKhoiEHA22JFxsxRCcKscMxkwSQNNM5bQSZ87YSiVuuAq3nTZtfbhCGtf5YPzskVoKT6",
  "key19": "3uNpyfMiVNkuhK5HyBPMefcdcPQJCHPuXbwRc2eBwgoXYJijKKFZta3bwzNBv6jD9RD72crpnjqnHavz31MnxR6m",
  "key20": "67Ufk6ZXUpH5wubcP9FAnuv438D5Tj1yq2Q6Fp6Qy3S7NqJn18QuGL3HvyY7BTDh685AiukupYH53RvErK3BfgHN",
  "key21": "3cTZUXEQdntz3R63TsSVxF32QLxuuR9tQy1iB5tP3ZSaRroWX8Qb2WQCkWYTEsWwFSD1mNeiL2K79nRqW3Rr1cYc",
  "key22": "3WJiW5ZutLCE5ZXWm22RYquWsPCcM4k1R6ezRwtAoUzHicJ12tPePEy8yirLXj2nT8dMVs2gVh4R1qiFJTD1RNYa",
  "key23": "4QJS1yze7LEYGt6xu4QiCB7fozHiv9VkKFh7KvHnGJRoiQnifYgBMpeqBz9bXevxQouUf9ZRmdqxu4TvSHuqdxTP",
  "key24": "5UiJmZDPFzH2Hsvyr5qVGUcwqNwcV7AuNsnf4kcwmtR1WJMFwegNvAKPMVbjGc9bKkM47hphACJ3cbrAXChMQ1DC",
  "key25": "42aH4uKiW7YbFkzUu12JMbxAUKXZvBicgrnMLUgtkV9BXwcXy711tfticQbzCNVXVTWq2UfbamefdgjLV6vCFFcK",
  "key26": "vGMsEgi2xMrKH8mRenfx7xvBufafHR24jWxgm7q1um4BBVsA9nrVRBs8tRCGXYUPoSbNksci1wWEjy8hhAJ8UtU",
  "key27": "MaLYJUSZGT8iGUs6tY9Her9cqPf4kp6iqcdCaxsSkgxN6gkQ8Zvtfs1KtzoCBJiCuBag5yWcXvFDKPbaUNLJohZ",
  "key28": "2nLW6aBvVKx9vbFA8DSPnNToazVBwd58hqCXR7z8ymoekwPzfY5fxNTAk2Jutkij6vuVKB8Gd4ybBRS1MgmkqHJQ",
  "key29": "48kwhSyBxwsC8ja5LdTa4qiDouJwZKFQ7z8bW7DFLKLLtxMd2NGmjXBPbsWwYvZVMKr7B2YngXMFuKDwaDXUKv5v",
  "key30": "ib1VDPGwCXyTdKR4tHVU3Fi2UyFaanhe3ZK9Yp5hPRyPZ68FD8wUXcfXvb9ZqtPiNu62PTLMBFRizmjdEn9Us7a",
  "key31": "4tVmZMu1DQo9mDJM5Dt6cW76CXhc7rBCwovT2RJKwzGUH4zRvYruJyqK5BESmbm6GfkYN5Wn2t48XT1wmdRxtvbM",
  "key32": "3rpuBfjBu2Wrd6kjaLgNqMgWLmC5bvoz6q8QNiUpbE7299iNkEuiVeidRjCZfFT8HCaT6uPYaohMeF44Tm1rBbNt",
  "key33": "3csm4jLnWYkZvQ8CHGvvaWuLepG5QUERficSZBZpBorQfe8NK1wBB8iEjaEcViTxztK5r5S5aEQx3t1UPGeaVKqv",
  "key34": "n5QgjTibzCRXHbWQi5DWa4E6RCHzgg5finNDYnpqwXcqRZhr5RCqw9gPihiujKTvj4KA5DfZjgXMVbBgjLQafWk",
  "key35": "5VjtYKWdtYbPvGWebccb3mfUkyYzJAHYcxTXMxyfSscLAUTe1vfQP8s8oQaUozFEEvf5ZjnHT9ACqgpsEyKEUHGf",
  "key36": "4NpDonDP3B5GZ61fyGjKLFRZVMybvKZrJtVCudNqsZvMyZxZfRPVRNWk3WtXSLgq96C721niutxXtVk2Gsvxpo8",
  "key37": "2psg4j7iu1m8EhzHf1kgJTjcGNgc85Bx6NYtRRwfgFby7sS45rozVQVqZaVKHibfZpwZKCxLNc1xJyBStsWdLra8",
  "key38": "31NeUdMYRQds4jD1jXq8gSZfQ2jDmn823iyk7Wba2sc5gy2bXy3XwMN5MUfvFcasNW1FMjUUgqQcJX1kX8tQcahD",
  "key39": "3YFePd1JrAnksEGLifGmh246P4nmDWPTTmVsNZ57zLXTYjJvokphsrADFXgjD264iodJ9pS1pC6yeB8epEs2T36G",
  "key40": "4f3nNqT5u4HYcSjbwLhnuGHnQL46qRvPBh8rVxEZyJKYwoAgMGiVYZuaFdD1aBC7NBUD1xQk9nm8Kd9VSuduu4cm",
  "key41": "WNtShbEQNm2SmxyZaPcoUxKxPQ65iuexaVYtiws64GJdDTiNbcz6QLqmozZBZvSbKRWYYPWzfhcia3q9aZicYVE"
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
