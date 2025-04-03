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
    "WnUwRTuAQ5D65gALCM44z3bp67wvjjaDu6nxUYvcdYSTYV3Nar8ibMqJ2hDqJSrg3ucg4NzmztM9FMrjmaszywC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFR9yaN5xFV4jsWKVz5dLfCrr6HvQyModtT3Hv1y25jsmLYfijhpuh3pjusjJhX8QqjVTH4j53DtuLS8gFzyEAv",
  "key1": "31WUchMFAdhybdcQkoEKvbJZ1sUAc1vBHXN87UQwkVRQDiYWgBmmcqgMBbcv4YR94doRy9DKafdhudGzYFkEP9CU",
  "key2": "3WvxGyefTxK7andPmvwBu9Yw7iayoYWbwCTpGBuSk79yiSB5C4wYLqrks6hNW6GmidYas4a2nEkywjH1V45ZWazJ",
  "key3": "5ygWutJuac9q7A3DZfZeZV3J77ZNLeZmSzYN2P1g3issmJGMTzzSnZgygsy5tFmX9t5RJ6uVk4DoF8cq9zQ3Cs8U",
  "key4": "4ECpYqi6fzCfac5htWqEsJZYbvsBX8sEzH91aLaLggfnsXx8H5eCJzhj2XhjuqL9sQyvmc1Bn4KCG3LPrCZVD317",
  "key5": "5LyQmGSvpWUTftYyc8Vy6EFx94nbeg5VNmqGerGQAHE7BB5XThwo5Q6sod8TPQfhTEVoTgBR4xQDEiwihhvgXrVb",
  "key6": "39Q3uy4NsBeP3EjbXsYo2d4ePXjdjNg2G8kTpwhJ5g3ezWRmJ8cTwQCfFqZ1upGgNJ3bnyXL2XpXwLkPVgG4Z7iV",
  "key7": "2BNTgCDPrYfKvPdsZyny6S3W2cdxkKTgzK3rL1dQVLfqx6y4vyy1ijQcfBqgwkZT8Uw4C4pK6JW7Ytb2Ekw3zaS",
  "key8": "5u46hAVeGwGtXyqAyiwZ44iJYeuKVNUtmBGMinkSPEK2Rq2rwMdQznJg8tVhWSUPnEwVonRbNY9fpurArhRewsC1",
  "key9": "2fhRTaSyVvQbP4ngAzkSPav1tnNuxoAwnFADBTr4cVQbmzxRLDQZNMKtY7qzpJy9R22KGA9r7n75CBKdRtxYbnUB",
  "key10": "2L3rTXuJcFb9g6PB6KEGPAy37D99d3NJ92CXCLcYz9RqtHkVePQwtHizuggmMeD74YnA7551UfG2Kq4Gy3Hz9Qmf",
  "key11": "3A4ZhTkKYALdgWcUsXaMsmzXBFxqCVBfeR1EEPnocBK6s7j9YrEbgrYQek45D2xbctsRaRLSQKgYXP4xBzijMwWT",
  "key12": "1G2Vq356WbSeNJxRtvLR9fjZW8X9HY2Ue8PbuvAKu7zxXvruEVgxffnSUf9YonyZEoVDBbx68RksgUaWzeAaGhw",
  "key13": "2FnpxQ3ULiakAvrw2JMgkKCqXP5LBkBDtpto3cdaAd3seeTG8DroT3WTHVy5GkS4bzcJHenzjJSSdtwYbNY6w2cT",
  "key14": "64jY5qcpn7GvskgPkRg9cGzt63yLU48R5jdDKdxtpM4XiBEkzfqn1BKdUWovUnQA1DDnN9SqjTG17MidLmtkmp14",
  "key15": "32W2PCFK7K6XP4ZJUphFaVzWRxfBSKcSZRNxxmCmtoaEE78JocCNJxH9cWuosxvTkDCxUNaYZ9EkPQJySPce21up",
  "key16": "2RwyqnnBtV81vWzgMqpaZZZwfRDJV2B1NTM7rpr49owJ3odQbjR12XJ1a8bmCBHCrabCCZtpKj9VHUURz1ymBr3U",
  "key17": "2mnDRNu8zGae2SRXpSgvGTFf8JWQkkodMUqhEE3QvJwwkv2s2JCB6CMP7AZMxtzHH4Yt1R8NHibYe9u9v7vV4fGW",
  "key18": "2EnZG5FzQwCmeb9uXzssag4sEjCyUB5aWTy8QGkFDsKHkhNYfrUnY7irUTxEtERYf7NSzGBhw3iEo9tuAz4r8spa",
  "key19": "516MtPuc5SbM6Nnz2QmpgdArx97v4suHGp1aGYX6KcWTZK83xzsB2gPneQQz9uArMoUGjKEhcRY2M1aVYsZZ3TFn",
  "key20": "26yLr3EbadjQ2xZjgACNezmkUZfJ1dbR6uXYGj7PKLVPsrAUsu9LwGxqd7MZVZANzYEsY7vtJjUZjBVrw5k6qz7K",
  "key21": "PiafJj51RpiyVKLC6TfbJbtGudGia22dFBHrcejJX8CnngLxVZLv9nqzAKnLWAkcrZn8KUeRk3orTGBdsg4rdZW",
  "key22": "3bWyxs5uiZTZZHG6ZuwKQC4xDR6FfuwZFEEhiHsLMWCC4Z5cWz4K5qvsL4tFRtZhyGKRisqmTvCPUXRYmYeHDSHL",
  "key23": "4yQ6jgAVQdAG1xomViYpzsAwVwoVDHCLeMsi7cpCcb5BUtddCZha6uGJK65ACEiQTZjaQTrD3D2eLmWGqScCRqdM",
  "key24": "4332G9o96QMt4ZN8jzBizrViV78EdNufEq7byHRYynkdfiEXiZnHD7MkMiWofTKbzjkZLc4qSA8HJHyUNXZMuiEF",
  "key25": "5Aq1bhnxKyJw4H4fBB3pGNBJZxN4eQ4HAPCRBnaiSj1sCEEn7nJdmppyKSL3MQfHuFKK26dkYJP5t8sDqTYcTknJ",
  "key26": "5DYF77kLyB1mT9rDtMrivBCwhVyqV9cKr4hKvXBLZzpiPmXj2FoU4Qb4fkzHx9mw4NpomPEbsXs7hP7W1Gw6y1fo",
  "key27": "4qCso3kRBadCBwese64QRGgFXZt98ZPUfjoUn9Va5V17QuDhXMVDqUnpG41oCJAr3LvQyY6UuMgjg3go8eL3Vx3m",
  "key28": "4xwzQcVUjT2petw1Sbu9cV9gzJ2e91LyD6SQWG1F4GNMe3KHrXzGPrMppphvLABi5kqiX8vhUEnTmaZouMorJzdr",
  "key29": "2yVrHkui3hh864ux8gizrecMLrUuKjU16zehxJ9UDN54gtoHciPG4Fa8q4GzYREryc8QQc9SzBgcgfGwt1xjNnT4",
  "key30": "2MFDXPSjL5yLHMMqpvNrmiu9C2iWXY5KvNqQgZaGo297ZDS6wbEnFepAwqLaWM3AjJ5KLxrcR2vFdgzFGSFuvNec",
  "key31": "4A4uwS9FUu3KNgJ2jGFZtta7fZK1Umt6EjYRzijN47tiDjLoq2g5XaKhTac5vqmsnAXgz1NySruMN7d3NynN2do3",
  "key32": "XXPPxzsPEvbVw6jSAyz3YbvPA785uzkubuzfVjCMLPKwtYriXfgS5hUh89bQVbeTqrFu7WaUk4552nB7aABUzAS",
  "key33": "2P5XbVqVHGKhvU1Mkqqp9efUcEXU8d4p4gnfXLVPA9fNy6Z5Q6yQeVbQq3hJCMmpnBxRjWe584CRjdXbda9ZQFHj",
  "key34": "3j36oqR5nzqSWQ1e5ZWhMrx43kyigcESvknuEbWnMxSd77d4sHTf8CX4pUSdhMgSRPvg8VbWbWShWHHZPdgydNaK",
  "key35": "4yHKrNYumdzaNxfCchLBDU4pbxfXCPJbUqExgKS9ViG1kCBuHKqfkDNCsz4thWCYHqBoVsNgTtHticju5SDLxwac",
  "key36": "fREBwTrK5reFjp1qzqYGksRDCmrqPnewRr87LwQ9YJfUWepvNhmZy9MWz9SGMeYAHgP5TJY6r81HBnyKMQQkm18",
  "key37": "4jJEtVhzFVcAaN3dqQhV9xSYPEKLCpLsQG44L71N62waGiFuJA2DKcTaurqdGEu6RZkkrxM3EDohBqPayDq5PccD",
  "key38": "ug2izepmijdEam9t7pwKsQcqUB1LFPsZbJKNaRRYKwJfhMhyrCsWhK6Sumc53o4cNGL9vvuqwajAp9dL19phbx4",
  "key39": "4ysukTwYuWXshYh6LjKXZt4t8w1aWTaaV6N5FU796mRBfutc9imd2ARmTGJKDVP1jW37PvkxRNUHNQCLEPxcxgCj",
  "key40": "4LWTVsJPyhk8MQAqFTA5bqkKKmqG2HYJXJQueF9jxCitPXfgzmRehJjb2s7g2xghhAjy4D4DWo5VmaGvAbyBGHi2",
  "key41": "4nE5TdqpNHaFCFWgvpYKUmGMS5i5TXBjjdgxuNqpCsKyPnnfTnSkEjNt6wKSoisGb6GePZ9QRQscJBxWmfuGCKhm",
  "key42": "2javhiEN5uyVfQh9T9ySVwDVLeKCPz9hnfwH7Him7DiwfA3qrUKrdZACcHjeFU7Y6dBh6WNg17vU3hZeCYPVPnLU",
  "key43": "3xUhZHS5XJZYXfRkSymV8rRzR1Bthy9rVtF68fvGUBQ6ZCCjuFNdbuJncNKPMSyu9Q6BVfmbaq776B67vdgkoeL8",
  "key44": "61fPACBvBw6V1vkjvKHZUDnGzjrwkCGSMUnbyMGLGK2J3kt4e5tR7DDnnbet3nFNqxJ8EGUxq1Vdk2xBZyhYEWSA",
  "key45": "4McNCGQ1rPmt8jink1AzXGDLu8hACNxp3oVkK92rRVbpM9SLiF3KgH88jjZ2XuRZZ7Drmq2Gxt5mR15uZjwyahfz",
  "key46": "3ybp84qdd8jUhX1jzZehypt2rZ7WvwUjZkC6GcyckmkYfAKWfezMwXAKsTxD3pfkwkeAj4nTawLtZLLupXUVbAWN"
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
