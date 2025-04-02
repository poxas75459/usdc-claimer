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
    "4Rpvhi1DSs5BNUytiyDcybwmY7qMPC9nXBMNZNrsVAmrXBPLVjZXUa6C4iVJir5Rb3Q4i14xPK91K9KwhzMStxxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jjxv6UBgwCUw5ipHwKjSUHW7s6QCwtqrGCycfkAnusD1pWsGSsG8c7T4EhQNdNoNB6RAmkPgSSmYr8j5T52w6nb",
  "key1": "2hFA5YY6qRgqXFrgH7PhMaP98xk1LMFnez2MPSnzAQvCE2VjP2JLoxT9wnoj1E86PqZLDWaAuMCJgiCh6VnSCwVG",
  "key2": "RRdnQHmJ5zo3rQ8TCEL9cibhook9Zai4BTzdvmowgFgV86cmPsNj96tssEdTXqJBixCPhno6waaTFTANyZnthSZ",
  "key3": "RiCN2fLTcSZepMjsR2R1b2LKAou47crh3RZSwjhjHSSbpawBkBf4zGipidiarksgc18RNCpMZ7x37UrS2SMNSxJ",
  "key4": "4G3gEfymoEMBteowEYfJj7jj3CN9LBN5NmQ8kJUe9Q1bF4rngdXJfZvTdvUJBMnRzCWT7qaULQRgn8ftEQ4kBhTN",
  "key5": "4dhZnoLGurFhrU1Z7nPzjN9awi39rSCphhfz72rDLzYzapZHYGdMecNMLyG5AhyccY6Ubeyw2hijAn9Xgf834Csz",
  "key6": "5h3B5h3iNhgV6VDrMJ9iU77SCpJa5bRY7of4UQdSkyzZE4AGz9mwBPAMvnfZ82TUPycHCFdNYRi2CyUEDpgLDHch",
  "key7": "3YXzS1g4vtZTL3SMXNVduSFJkcG1Nv678sieirbBLcZPS62aAg3FbsLZvhfrvPmxGiRBtBCLwDTxhj4yGksghVtb",
  "key8": "4TnoVmLgRrmftU8CnasytSt4azkQ5hQHyLC5fviFBfNhzQ7XxRypcX2JZbagzNNr29C1S1PDigXdCssgpwBPV1zG",
  "key9": "4CFiPuCRWKAQtufFPmvA2teYDKnG4ucosTTPGPqPASGx4Q6EqCk77Cix13hN68pzGuQaebqpm7gZeiSFh2tr1y1u",
  "key10": "4hguvyXvtPjgtJnrJpkKTnSzN56kCEs96xVS4TwbeQzVtKYs9BmHRtZa8M5AX4GaWBZLn9eh838PXsr5wENkxDtS",
  "key11": "41YJ9j6Svp2BSTg2pQbZe8r8rHvVKnwVjU1oHkcB7yrUGDFfeTwuNoNWpirYKFf3GSTL6xo7GiaUjsbRAQF1DdH7",
  "key12": "3RkuruCivrkNZN8htUQz8118QKYhPMbMpHDjJeuMzspj7FCGYkxATTBx5zLsTVXY79G4vKVXqZzyUPWvsSngBHJs",
  "key13": "4YU1nZ1vSYsUDNGW64fGs8gAnuPPhdBWMM6xEQi5n3iFGMGjWW2gS287qupwbpYbZYU8N49JnTsTdFVW11fWH9wR",
  "key14": "23EVsuwJ9NyLPQyFGWLnPNTZMYtVTQ2wtTYL9uZbKZDFV433arDGj5Ttu7MtTrNqXKH9AawB7tLXuFGdyzs2SmSH",
  "key15": "38QFQohb8j26DANH26dZEtChtCPFCafqgAjpYMzARY7UKxv75TQ5q56Scm6B7BrXpP76CU8v7WLM7AMSWkKSKMD4",
  "key16": "DWP1Er1mh8adv8QaXqMoKeLYem6NihocnqeAQE6z98KMtSt297yB6CyfHmg5bqaxBsxufd4q3NE6eWLdq8jao9D",
  "key17": "CTDV2fQNehDH6RsVxcDYMNv1qYatumyQAE6ktbwPUuzY9azHhbf2tZehaaxVDPfZBCZ1DU2kvKr4xgwSRRGSYGC",
  "key18": "281j3uADdnG4gQouwQLqtvSQtTFfBcxuftkxJdfVp5KBxM8jKb3Fq4cBJFU9GzM2xvgr4vxrLo6bpjzjnfEKPCk6",
  "key19": "cpsWcx6r7bHrfttctEwimzyTzF2qz7huDnKD9zfnguNfrRBsXcAxhzUJ4ryNithkMd9hudScDSw25mz1Y1VZ12W",
  "key20": "2fLC6Jw4Mp7R1LPQCWejys7wFsm6YQGXH6WWFmKeV5diWLdTMs8M3bkkzNh3NuZWLe6ea42wyQmXP3CxSXHAeypg",
  "key21": "4NWwDT5ocDy9g9hUSVMUHVAaBPHJp9P1PRBeUMBkyRxZZ2q2W4C75qXEHNZETe5FSnDcmR7DhxPouvr4cUouJgh7",
  "key22": "fcFA51iCQF9r4QoRnbugAVcFt3Vm4DkhB6sPPf4i3ahBVcg1aPZb2YqeZ9XuqUiiSQP89TrxgCpkbXUiE6HX4rY",
  "key23": "5tnJzNj1CRVPvLSHxzJZtk6wkyLQxtNw5J3dDhekCPNTGx8paATASYg75MZNA37w1xA1A7xcdfNGTXqhnfWWqSzv",
  "key24": "2pkVrA2rAiqBfJLQZKa7HghgNgQRtMb8cV9QTLve1VXKW8ViZnykfGTDTBsXyCfs7uDPVZg1WkfJyd73veupgDep",
  "key25": "29w1NkiYaZsBfzuFzCzAVC4X1saVufRAREpiUu6dswVUcuBCDbpBmQujYbyw9uNrVYSqafBuF4XkLWAeHVDZkAsm",
  "key26": "3tPcroC4ydfr99jCeNtbDH2KuZ8Cd23ptv7f51sGUKFB3CdCWAQsuxRbjEBEvr7wE8ZQBjBbBoTpJTHhLmMxN7Ee",
  "key27": "4xjy8eRWm18WUiahPwMJRFNUaxXebHGyzF3XUMypqDWWQod8dQRCpLjh1URV4RgVXuyDcGAeCtNVHg85ewh99RhK",
  "key28": "4zsQYJCa3Qg39gr8qWJ3VobbLTQqGqZRakaYDB3e8uZNpvzZKSFyicwAfWnurm12PPK14eJKN4hDrV6hEPo4ZLSh",
  "key29": "5sPpPsZRx1hUh3n2v4YYPicKemPipCSH9yXvpQoL7Znz428YP87Nhpi8fr4gWsQcd8gQ1SSB9j4rubGvRu5ej61m",
  "key30": "2JWXjoFE7ng7g97fqU8N51qk6o1gtAq5xtcNG3QzdzPGWJ8tkTEPUZSB4GZhCG3tiDKmFtsnAxXMRfn6XFAbeiHW",
  "key31": "4ndd1ADjnAh18yB9VPUExfNUvu7B5mMprqFKAjzmFqFtwrB9dXQg59SYwmxRvLzUcgGvhJoWaSWAZLthb6RCCpX",
  "key32": "5TULYAK5zwc3sgDAskR8BfLN5HsWzRNZq5Zqg54Krm9afJm9761vfmquswF2iew5mAKTaqxHPnZfunvr82PbGFri",
  "key33": "5nESqU1U64scKVu3UDwv48g2ef81AtHDpZJ6LdEfv5iGfMEy5w7N6ZGw2ot8mXLRKBrXtXmizpVuhE1fUnsX3Pgt",
  "key34": "2infqZw7YRiJ8pKPKoGy29YbudyRnHrMmjTwKryq7HgEeaYoo6j48JKxvGAEteP2DCAmcJjKfL129Na5nqYpi1y8",
  "key35": "cQeJEVrKq9iqQSHoT2LBt4k5tSdDtxtPmUcDFF7JRdTvdBwbKcxmCGxaKsLudUa5ge6kvNn6cDXkArW64e67huM",
  "key36": "25Fwt8Vm9zXVa3tPPQ8FXBeB9LXtekDj4ovFgpxw2oATWQAWvKemRPuBGP2mu2vCZpqZh6iCxau28PcDqmMJHEQW",
  "key37": "52z3SdxsHtoRbKgpV3RnRsEaza5bCwpUWST4LzmhWuuP9rUw6g8HV5BD7knLTkPBS4zwttZ9eJTrNj9cKAZtjfta",
  "key38": "3a4KTsPKSYRPRgNe8DmLeqRNSFw2aaxWFfcqHDJbagYRioomhNJ6jXAywEjWLxf1eZwR3LJtWZfNZTr8ZQCuVjFF",
  "key39": "4xSTFJRyPUAZGm1z5tzP7YU8Evw9aWUfNvuBgdWGhDhYe25thACYxLnSq5uH6BwVkV4RWPkkGfY3FAafBTGS3PM5",
  "key40": "6ZzurpF5M3YPcKcyWCkZNyGqi9AiBUyyRVbzLrWJanZraxbswfkgxsYxVJyZodpMv9AM1Hkb4ZyGK6wSsr2F6Ec",
  "key41": "GQHk2Ppio4qASbpK9HqiSnNuWQrmRYrN2P5WtqHXDuKAJMJuKJ5vX5ddEsqPftpQzzd1sQGXYvquKJA97C3QtF7",
  "key42": "2RN2Ynj8prAiGM23gtmU9HAdmxnYaK5tPc3ghath5VgrWHQRz8XXfX3tJuE4r96bbwLDSVvCB7keaSdZLbhGq4dE",
  "key43": "3NTSuJeoYAohxyCVAfKK8TUHT6m62pXWL2CzRuokzGSsJNzcxY4KZfxjegFHMPzju53SToFAaHwg5aW1bcDTFKXh",
  "key44": "3NJm5AQmbo6ztTTGuehKZf8qspwedKMxzHsM5uDEhuZbwLre1zB393N1XfbbSSqSVhJnocuKqCVNGMrmxaAn1VQW",
  "key45": "Yn8E9anArS6USg93oTxk18cjSYxa9t2PxRBMYGtsmw7RBqkvLYZugJxE7GhMHwNSDy2eM7MgdfyA7F4X7hCsfYm",
  "key46": "4dLXHoNij9faXADnYAUEYFjFZVxgUrPj3NQiV3HFNap6Ho74BnUhMbuQvJv2Fk7G2Ac8d38kLyJ3NgqZQLa77Vb9",
  "key47": "63tNs5yqYxcLtFZhiyFjoLUDA2NnuESiSb8cuQVDGHbxvmoNGwUMLuGvSqrEh97SVyb3fveEbXBFvsHswr7j1TFR",
  "key48": "5XQBF5x5RCBNC1CYGgs7isFgiQi1cCeAYJiw82W6vPJKfon5SsLmSmNpCQSCDuZjkCjiaJ9XfrDnUoUu7QLMTLRF",
  "key49": "5AuMjJrKtDvHPa7fMnPGRjRtTwHwD8P6cj1TSYW4pHXmaCCGiomQhRQto6YhRxdrBSpT9y3gW4kGainFr2XiSP3b"
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
