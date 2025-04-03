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
    "3cAMQEaQiKaepegUNJZJadH4d2C9xmVTsLWTJYnQ4U1869DnnRDmZUuU3oU3tXoXMJkRK6qCh7gL167G4JfWZagA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGgJHCxBtTmcrShViLSPSzq4jjVgJo7en9UZtqBm19Nt4iBezBPwhArztGZPCB17dAsCJpqgErYGrEVvkg5HjjU",
  "key1": "4KrMn9xsW9A28kFpXAKgQbqmjMQRRx4fPJ6mSDRwYwg6K45Y9cK2na69z9saRFKLbkvPMnDx3w7CmD6gGvjH59rE",
  "key2": "wGByWjg2RT1ATqwUoRE2yN5NfsEJt2ckUfSV63tpKMAh8KWVLgKq9nqCsC5fQ3qaue8NUjKSEGPUie4KBRx7CB9",
  "key3": "26SmtkZ4qhNdA1uWUr6NqG2Vx5pAV9MD14VGnh4iizkcqUctbuXXpRGp7TzHNHdNCZ8z2eoY9ettkjj41qbCZcFi",
  "key4": "4Vkjtk6j6EokKyPCfsFWRFy2xTngiKyeUBviLdCk7hCT6dVEcgCovX38SC7N61Es2qFCucXpf9Bzs2hWE1QyWKpr",
  "key5": "2gTcz9hDaKZ2utnWTbjjCkUM3nr48Dkgg8qGYudme3jet7aU7R6c4PYKurebQVjxwStoxbJg2cgisEiEN6GoEXRf",
  "key6": "4hxvQqn9uu9bRH2KsSkKazV24PvgTvfQJySwhVzJib7BVseCxGXTQ5k8skbTXcHMjM8wsZn8pDoJKmiDDeHwzjhM",
  "key7": "5zUAzdyi9BMhjvoed9SqAMJB3DaGu6xqDfPBSxVjsU7YcDhr6DCRpnJMuBE1QNySrh77sLze1ZWQhYRnQ1DTBqKX",
  "key8": "5zqypvB7KTjNzNPcjmnsuE7FFZyyEUwGK2DB3QE3tPDvc4Mubq48dpG5ZWsxTH43zBZQBWH3FNigckDZm33KA1SP",
  "key9": "5prvS785gcV3vEGXEMVNzuoRQEKbdNAFRaHm88ATKo8eDsrS55UYT3Dnh3JwaMRS2VaZpZeigEDxbehLeuh18KHC",
  "key10": "4KXvJv5dG8KWWEQaxGJn39Zg6Vbq4R2fmHiPr7JsSQxtYLcUqVGNhAoavJXRanvDT5wxz71bBDYWzEhrQ2WwptET",
  "key11": "4sTfxoLJUafWHPeFf1gLNX59HXHjbbbUZfwhnda9ZUWcMGSZFTEW21pWSMudyoPFpRx91hksbu5Wae39WKYYZjNA",
  "key12": "57KEGJdsJPDFgfNeYNfwH8i17dxQ79PDFtd6JU9CWTEis9vtu4bLXnEFacrX7qFEg8A1SqfYeegSAGiyzPb9yAb8",
  "key13": "DfycJiF1o65278oRNZeJRMPTtFSABVpSXcmZcBqph3hGFKLi15FfN9G69s92pvz96B57sHq8dhLr9eUmvpqNDWp",
  "key14": "qonzDbvHpsXoBVKkkHc3y6gWPyKVaBr9fNQthYd2GiCa6RgwF5h4PEbMiePSrokSzRjBEooeaHW4ZXT2kJm1o5K",
  "key15": "2j3DZdf4NtgE9taqCCoTCvZ956aLdMHmpjGMegQqRLn31c2i7QUTuSU6BAZ4UxinCLHYX71o96yFUCKjDPBLizvP",
  "key16": "dasQmEMUjQvUihxbmkjsxYGPRQpGdqwNXnUK7EQQjA6Di8tSsXp2KNnZHPsPyNF2pkzZT7xtMZwWk7FhUyqrwth",
  "key17": "qof9gfq9Y5NHvFPHg6LmAZFw7zmbrFZcsMxZZD8xATfifYSKWdMgJohtUypZFDp7Aw71JioE3Sxx1Xu6Wnb9xGH",
  "key18": "4K5FNB844H6VLaMK79Jwb3dqkLJpFuez3FF25T8SidGDdKGwqFtdHycQCPLsXA66JLGCCeVLw7PhbmCpAsPD837s",
  "key19": "4WZZLP9M8kGKtR3CPVwBhifUaW8y2TGXLFqqhaAsrKjthoXydN5uLono2cupZTEYzwT7PPXaaaK2YY2joSjBgvvK",
  "key20": "3Pp6JyqPLLUMJ5MNi5yxftrhng9Fd95Z6eY65EnvTzmoisR35XqJFbjnSPG7vdUXVojNjnAs57HQ6u8sqNfJaDBr",
  "key21": "5Lkxt3ssErXrwQX9Ek2Sm4vbhkRhr88UJQ74YuyP1NcMhsLDBCL1Nhrw5ptBUgTDrKzoMXmiQYt1AqFfsbBB69tX",
  "key22": "2zv783mniGiHwWnhrMWjrYmQDAZ23Y2VhKJyi47gNXVrXaPPZkEPiWo6n43fdQr2xgnDoxhjxXR2dqM7ncfB4yoB",
  "key23": "ptb6rQwKgwqbhYy8hb3XB6py7qFyCrtT1cVPbC1MEattfj49Wc6Bs12Z7sJr9ZKSWu6b3cNdx5ceMJeW6S7Get7",
  "key24": "uPHogQAFSjqA9uGTxhWsQVJSwcipdLqgKRrzWnRDZTFtawMABHK9SABMwpLkzXFQgECxjFm1jLw5migRTCuM2PQ",
  "key25": "5KnTMtV9eEAyWc1r6s4mEaY7UBh5tXcDkrKF5hvV9dTDqYfqpcCdHP82vCoP16ak6o3FFGdWV8W49sjFLvAiBHSd",
  "key26": "3DMdpJZowC8gzcd2woKgzMZHvW8YwzjxFbypnX4LQ48P23XUjqqCiMN5V3SfC2tDX8goWx4AtWoMb67T5ZargNS9"
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
