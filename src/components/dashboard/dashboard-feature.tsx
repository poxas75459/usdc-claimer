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
    "33iNKvEne5KsMQHv8ry2Utj9BXMMekyBr6FKt2o9FniUNAtet3bCzDv97ECs5tDFKWYsCjwVtnMQgR6gLVacdhwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wzj4QMQwxAsd8fchUtQQVGEMtYAi7TKPmWJP9EqD3vJsREwFFQnenR4EmYEHLpz8jAcdS5nB5V3HmvLqJj6BEg8",
  "key1": "5E8NUqyZWFR4bN5zKYpAb5C3ocS7vSksZ9JpCcgDCE9SLmtoAdNzFRgcf4GDYrXFzmP4pFKBP6SiYvH8w9jakQgy",
  "key2": "5fQKyeiEqfusnJTgEZtitTEwxKdwJRqgWaKApQKKcpMNyNgYQVJbWDyK1Tquu5VvJG9krqE9THT7bCt1uTdx6Qp2",
  "key3": "nq8xRwGHP9Abbdv1FjUwrwqxuYnMpsvR2AYxdHJ3cuWeTndSxtK2kbGtUBpHKxeDW17SGjMSDeaS9ZLZ6rYRsDg",
  "key4": "5f2mw22bbFFgSRxY5L5MYB89Xax6vWQXaNUz6uzP2DZwzDJT3q8pQm9HE25iGbb6z1pgZWqZKiAcuHDdzpa6vf7X",
  "key5": "5VPy4fqbPbiqQa746tcnQjPV9u1Hjun5eDAvjPpzr2LMtzFd4McKzR55S7gHybzGny87scoCehJDwyHmfRzZNwiv",
  "key6": "2GXeaew7Mv4AczsLtxjViE4kt2i34mYSZqppGrm4CHHixSfaRmYJCdaWMCXSnKfoVFqmn4YBGSaCcBAo4AgqXR5",
  "key7": "35ynMbxyUQQ1qPVJkdDQ4V4WCMHZKwxFN9FHszF1cuPKSftnoM5D7wf99Gu4MT5MSybZ5FSJyeoVvNzhTr3ivEr1",
  "key8": "xpLGpDLTbEfoPXtLV1CwWRqgvVd6yerZsNxTFsqAauVLX1ZWYVr1UwvmLSmF9wgi3RZar4C1ohwh85oqMxyfnRR",
  "key9": "2WbJYEogzgcyGXBHan7urgTMTQTrA1W5RAyEWHY8E1CNcQmpFp2W5hVryRyWQJk63rHwQ5Miz3adCpDKYa1kavJS",
  "key10": "53oRgJdf8y3iWUhSpHqCF38CP2Zm8rE4rR5bMFeNjLcd43RZenh8MsFf8SprN88qHs3qKBtHKAvn6Yvs6LeDNLjc",
  "key11": "3n9remyNSc5ZcdgmN1KziF5DBkFhXmw84DwVGfHAxFheUx6QD7BHDxXqRMsFVEb3mtSZua5XfTMLPKVuDGrUN4Gi",
  "key12": "5KPuu1RUVskzpqwiezi9GNjBBav4mHTw9qPQy8vKpab8kftH7yWn6fZsnav8WxrJNd9vsjGpg2YV3oFHMev8Npy5",
  "key13": "3Ze4DiU8PMPNQ1MP28GqgXvYsjutDj7VLJ76qAdwXfyPTDDKG2syhe9mW7mnTazYNp1r5VKULPCBrMr3ikH9XF8C",
  "key14": "5fKZsermqi5kKADoURGtpS6gLXeX8qu4csGaU2DBZfKt5RX1kaRDpgkNSGKHvmFyQauP8FBhwVMuzkqekq4sCz1j",
  "key15": "53B7WYbitYQRNp691cGbW6b5MZcXhSC5aBRZkMXK4nWYhwN6TU6RPYkcowA5LQRM2xTq3RvmY3NgDp4rRSovCdLR",
  "key16": "29eCHWGmg3z8H2sttKpKH19saBvmEKok3cJrK6nJW92CJETrRVa2DsW6ynRAjusvRL81Xx2vZG8HU76PhpwKgjYe",
  "key17": "34oy3NWi5raL9HXWFGmQgAEuer5skTwZ3ypdwW6crazJVGkzc3EhBWZejTe4jwtQjmmBQJYhtodVfzZVcZBDf38K",
  "key18": "eHxcLWryFoxKvTc99nN6xHyv5aMgXH6DFk9apDXfBXrdFABA5SZYhbtjZUXbj1ynN9Ucf6ovUzzYRMaUgV7kfpy",
  "key19": "4Xb5eNwDv7YFZRy5duD31bXCSifw9VsKP4E2Gqc7V1RrR5KackdWMnoZtEogZmg8PKQFFsfgPURMjVaLRWcSDKMm",
  "key20": "mrg2qVv3AyCH1YfNsjroEdtiSHPV8qMb8QHE4Nep1oV7nnEUCLH2vsiLznJPCexg3CmmSB8Xo7gRLQYJ53v4PgP",
  "key21": "2fsaqSBqbrcYBJ8frT9dZEVk4rWcdCqvsnaygGya6LzTQPm1RojZa6te1767esLPPtPobjNCZrESxSWp6EySvspT",
  "key22": "4WrTKmQvt2R7rkzFdruUiLcDPFoc9vUZWYBZdsMr6nZkEpQzMF2S9dRR1ERPhf13RXmF6PFYitPKzUDtja23J18j",
  "key23": "MrRArGbSt7mYRG6FFyenxd4JLrapXryTMbphaKtRDrmdBSGP5kQDUswa3RkykLmoNR4R7GT91acqNRnSKAG8FGt",
  "key24": "5Ftmim2Vzuuo6xx2Hnvp7QJSqxq42tSW5cE7FALAZwLXFQGQVWbdbThRk3PnwFhUuD5Lo9mG3rLPCvaS5dBAFcyr",
  "key25": "2ZsxvvNJXXkoBiKwc9hS16HjBS4zrC47J3NMXMmH2FDwM2ZXqqdWurDs4qVNU416UPtaezqFDBJHbUoTbrdgA7SK",
  "key26": "stGDWBkkC5oLWT2EMEUfdDdx5LgQZi6cKaNRP8aF66duFdwHJ8ugWfQZtZvLwRPCJitsEaKN6NjGqjFzgK82icw",
  "key27": "3qZFitKfz7eMR7vKJQ2zcJA9qsufievQyAfRWgA3Sb5h9p8uUF1woGjqGhEeN3nMaJc3Cj3W2Deekpjy3gGPryrp",
  "key28": "4U8yhcuVF13bS7ZatFsgPs8GfmC3UGJHC9o1Wy3rFzNqK6YqrGJKTEzCxtTGQbTRSSiSEBAGS1Eeo7gfVdqG3q9i",
  "key29": "5ZXnKe1LNiWhXxicowWZoCicLM6gLnCn9yENU67qdJ1uzSpkrdXCGJcfHKh4MZwoq3aTEoWz12KaVXvnZLdb54ot",
  "key30": "Rt2rBGoLvS85sGmJDMo9PJ9uEiuNMTKdVfwSWX3waMevXr5igv1mfMtwAvx886Nz2wPkaRcnZ5S4F6WynMiU3T4",
  "key31": "2wjUG9N7zzr5qopegQBjFMfz73VtocGJ9GoESs1ZzbBpGPhxP1DeeuPup46QrAairtAGaMgP1dSdf3DLSiG8hcv2"
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
