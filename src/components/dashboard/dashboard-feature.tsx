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
    "3PE4ftJexES8PmwANKJJ5A779UmSn1XvmhZvH1yki55TGXEbfJi3CHx7s91YNPkEXRajGdEaykxxrUZcDNgnJsDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxRtYrfA9HG5MyvE7qmWBWQrVAvkx9YNLaPQjC9KzXzcUXPZe6HjbG7f1ayjPBYiVBETo5QPDKkKncSjq9MXdz9",
  "key1": "2T97FLBseRyXYG4rn5iSS2g5rq1iiAu8Kdperw9AiRDdmTJe5PAjZuNdbwQcA9xY9S9JbSSFcsP3dBuwXDZFviTG",
  "key2": "5MCqaXvvrBC3xSnWErC8uAw9upu3jMEtcr1mgaVZMCehjuGTwct9jtcs3EpgwAQUnnXtqab27dFpuS9z1KeHpT8X",
  "key3": "Ws8AkaM9uwJT1no3HrFUd4gj66NFUzwQDA2MZuuRVvoe3y5jEaGiCxAHx567j7EAiK6L944xJXGb1MtYG8MXz4S",
  "key4": "5ePq5QLgrQs62TD2Q1SrvKBtcMi7a9ZLjBBo8wEMEnyycYzYhRwE6s9Xkg8uxg8AxiuZiSgGzw33iTLtR2fNc888",
  "key5": "2Ym94ciDqX2qkdN5955bYda1nGVD3YG2mjgrZt7jwbjLooK3XeDejjksG8s42exmA1juTS2N9iqtd2mFFi4AZAv3",
  "key6": "2nrmHRWefS8foyD1jzVKfin7PooYabwaiEUKePMg3zm6Meazw2gS71K6WrVYGCqEQUubKmfuhgebQxDDqgPFdZBU",
  "key7": "297ShUSo2Q1xaDQVCrp4oinsHFPxEYC2WtdSAk1xUHvTXdaPLztcYHsR17ezhjUwkyjjgYSfKkLS4M6jQvp9Bz53",
  "key8": "4kNRNttbF5VHPPu6DUPzDpNGS5bza9qkoo4GeXksuJP7rUaja6ZbJ5cEPpS8JEVzmEqhmEvzgNfwd8JC214KVpm8",
  "key9": "2pDTkJe7VPHmw6fMna7RDsym31FMKRXqtdQKVDyF9KZkExpHNJanoJFWeuWUzsF43AdGMhoogo4g3c78cPvfudE4",
  "key10": "53ZvXrsijxk5RnhBud8h79wEsQoAyusNb9oFVaWeC2ewGf1qiXMSodXzFi6VvgVBsNoHhwTn1WT8eHMigoTQDUgb",
  "key11": "5tbcT1uN3KnCAKimSRvJoHbZjpGc9VeQJ9NLCEpZnuXNbErWc4C2yHpLHnDNA1cKBVCrErFcmG19fCyTSeuSwhyd",
  "key12": "ac9AGAsTLdvEo5wDRzMkss4dsHwUTMu46PAaXnpxL36jVnN4h2vSaYEdrW9q2ASQ4ECRGh6VN1x3BmCW3nVT6Mf",
  "key13": "3ZqccCEczDi4cwdrumUhFZ7jmTq7wT38oLn1WJJEGMSoB1sAacb4d9rPM4KnPCYiMKwg3JNmQZFUHUMrTCoa52P9",
  "key14": "38v7oTSxU73rPMxccgG4GBTMxjfM415yAZiW5c7a1Q1q3WF6s33jrSpJDjav9pmmoYXKw2G7piK9YUpWaQ57NTNj",
  "key15": "48dkMJJ3FyZpnJSqJHEpdofAmW9iF9pbTHq4cfiUZCyCc6CAFdf6km7vP8B2X9DAkvrHSpohxVcGdumroystEjLU",
  "key16": "2eN95GdaFo44SCazAL7271SPcRkPqVH5TrgEXM4rx1wyzr1RGbLJ7J7tZUpng4CCnPfa9N6o3uKgvauMjNFMYpF1",
  "key17": "4HdPHRCRUS7GNtsMJCLhdjKxsVmCoPXkaajZ9Rg8GNxWbY2rw1mXK8Adzv3AMmtTYNWqjxc92HkmDVt5jvMZEHQ3",
  "key18": "SbFcT9serYgkPGiNyvtHiL7dxx2Vqe1vxPtqGc1xaSB2ojAdX8DjnMVLVtdDj8p2ZNQo4bggrktygGP4UwE8XZQ",
  "key19": "3ui9hhpwXPuSBn8mJm8eCeb5wJKG2etDGrmJBuaBBJvRhoLLKncMskWXZPG97ZFrRLWtsiAk8WBFV6gTuFn6BgwN",
  "key20": "4QKFikNamLWsniWq2Qb8Q39kK2WBFuGuAEf9Kr9XFc5ScMokMDP8FzB7F5M8xPh6YHo6JrEWnT8vGnCTk1aYtGvw",
  "key21": "2K6HSUGzwFxW6GDhHjH8CS1E4NnZaCYcJbX7B56RVRdH1Fmp69xMVbWobBHHsMDhGytbKfjjS8WoRFzsPEKnAzmJ",
  "key22": "5tXBoCBFtFjUR6b9sdPc1JhYnXPkahrpT3BnXwGEyKT74pQcFHvV7QuxTUdPvWg3gE1hVeR6NKhjcMZ5PTWTHiSG",
  "key23": "5YvRcThJeVguwfRAsyHJMLCqYdxDKDffqbhUf7KzucgnjWQpSs7XTUrAbvsDLrYeTbACq4N1tRAwUdcvMRS5q5uf",
  "key24": "MhGFunwj2LGpFnDvgWhqMFNQ8LhL4GT6frbzR47p66gSW3YtNke9C8LFnqLD2X1MnbgH9Atz7YeYW8XqYLNPDPc",
  "key25": "9SZUEzArvs1wZG4yBptDffzobBiiEhu64N2VeRr6aJimurpgvLHRmNbq3HAY68FCE9kjAcZdUht3xNVucB5dRms",
  "key26": "3SrdcWyoX4J8qoSsYxhSRvAuTpspDamKPZQausVV7WDQT1pneYWNbSQzBexsDN7wtHjy3P7TtuxojC7hDwkCYnKi",
  "key27": "5tpUG6vV7KE5eM8pAZPMAPayXkVT3V1rP6PBwYRaNawN3zjU1V3RzVbzNUY4TCTuJpTP2WdZnxeVJkSugZpgXJyQ",
  "key28": "4em1CdRuhF1fdkVsHE4hu7GfTwuiDXSdsDKgsym4yV2UKRZZumkALvrEpZpZ6cUXgKs9je4RFqcddAhazyirHRdR",
  "key29": "wnArwhkoufftgU3AB2EApQwmmDRY4TqCBC1FMFmm1996xfkHEdZjN6WmKCx4tHjxSrSWiJmBftZdKdfgtHNqt6W",
  "key30": "5yAxHhUmEiuLDezhPQycofynREV4rWXT113Wh7RV8MWPXnFoj1rmrV6Kri7HZBDFD2t1vtJq7TmXr3g3xRUsp1f7",
  "key31": "2ykZthox89zEHpyj6nggNFig594RuJ5EqHps8iVkZPESmukojoHZGgit2aCkaQ2vQ9hXUzMF86scpDQLU1nxSkkA",
  "key32": "4nYgyEnuVwMinjDdDqku6rFZV7VCYt7hZjjEJ5GYJzRpdfkYp4wmb71qeg3frTeCx9JwXiSbZVpQZB5FEeLaNSaq",
  "key33": "42Ykux6RLizy8cegQikGgfzQBeVgpqtrMbGYdombsCDHnNpGaJpAJp4ECXofcNbqqLQRcDpsoCDiwkWX57DENRo6",
  "key34": "4BTGnNnXLRGXA6FFDMwi7ZVkj8cN35AeLWRVpifs6dD8yfzASQkFDnHZhvUmkWjWXA7xE3WWtMWHnAsg5ejf7Wui",
  "key35": "5J8EDBiR6ZvJQLZFuq5giCL9WoHf5Aa49wgc2qzzaQxeuaAarUsb5mji6r7uFAu1xZjeEhPskrfsG57iRmG4SK6Z",
  "key36": "4XxSP3wmSKpAnrxdKcPHG9UBxK6gDAJ8bQrDZusZsP5xAsQz8wiGJsnp3MztbmCZXJpCmwiBLkfLRDUCwttUHy6e",
  "key37": "4Bgv8TUoYoqnHCmvoXMydnpDmm8NK34Z6bcWSbW6tK1Ka1vmr8CqnmxKMYBK4AvcPv5xxT8RmqzddVDdmsumGR1b",
  "key38": "48bP1Nxx8bokCuZvKW329PAxeSp3GqWeUyDRRGD8t6RjcFfVWj48ELJvtdwbxp5F5916XG5mtqvBGGpyLV1gEe35",
  "key39": "5dj4FEXdnUS2uPXXT7EKgLp3E6Z5mCMquvifSzkhiR22bvdQaWzP2QSLRPuTyd44YYPK8nXs2fpb1xDB8ML6Yr6R",
  "key40": "4UQRdbzoRSzvJtVuUYiT4YZzkHhx6WVCpTWFBve3mUoJ27JFjmbNezGKZ8iaquu1nHCvGnKaqHgJmnL48vTfD3Qu",
  "key41": "5wsTv2M9mTkaqtozubPtWaxNmy7Y9bGNqdyNxvPeTGzzz1gBW6UE87d1EZLU4EgQZBEx5woBkD3oQxeLrtHYFgFw",
  "key42": "XAW5VfHrhkbV5ZXb4xr8P8HhDwajF1Xhe7SPmkoK7BgwRVQLC3rxm64FnAQ96VYX17A6RMrK7mySuqTcqGXHJxW",
  "key43": "4sBmV36KMvraF8HqySGg4zcGtDu7UC7Vk4dfD2cVDFjJwu8QWJYdxRrtyaAyp5z9oUmT4tTPoqwSmtxH38QUiDrZ",
  "key44": "65ceV43jGfBeCJsm1kPPRRup411bGHosCpWQxSfBL2PS7sBDcHhvtDBTtgiUbTuhPuTG6d393UYLu4ECupYmjHq"
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
