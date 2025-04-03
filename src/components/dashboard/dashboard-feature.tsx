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
    "uzhRsKY5Tomn4FMprDaq3hdbUq9jv92bbYqQ3usGRcaFKqP2fhf6CWvDPw7Qr37Zk6emWnaRyGw7uQj2LqYqRVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLFKM6aTE9qtggYj91re2fJTa2s3miUXioH4yYcyKfFuiMyHXMt4ApvyGyk41wP5SBU4YHPAStqK7NpHjy1Qqbm",
  "key1": "2RaCW98towm7y9Ewjc5PcRkyYE8Qw631LQUTHSMHcr3wQipscDVfPWzkTH5FfkrvEMH1xurDomRqQoR2SMyaQBCq",
  "key2": "4ERDioptpbi6Pe1E1yurmBp3rsLQ6ihSzsYkVqUBk7mGc8qw4P4F9c1FE8RkbzGgJjJ72RJzTAiGUKvNJ8oE4hfm",
  "key3": "3hpr6sXg324L2Dt9u57VeBdELsrSuRGStFCi6v5YyFMvSuCAJpsCo9yMr2kjfM7KawjFAWtqohyrr4S8NbaSXcJV",
  "key4": "5PNdCGJS7NqwY24BZzdzZG4cCMnQCxt19CJ2RX9jfXaHkRjjz8NoGD6oVMNfMXEiSBigH4p8as68aeouy2fQzCxF",
  "key5": "bPx6CJjDvycJQVFMNH6JkJ2c4uGiZ5rwjHxccAHPfNSHiasTWC4w5eaZeZbChehrnPmqg2GjYYjkSeWGH2KP8YR",
  "key6": "3qQ8Sdj1DbrJnP81gxAMeaXtCCfBGpGKdhBSVzJ7Cmyz6M6aUU7dYfRpEejy3dM87kguF4cgGMZknBxmnqk9sdif",
  "key7": "3xuEfgSos7VsEaaiXU21QBH841uZWoHFktxB3vnGB7TXfx96JxXYpK2CjwVj6TC3FX6LDvJoVUwxCx9HQDBqjD2o",
  "key8": "3JErfn4MegtAaKbdzoBwaf54AAqtkzQpVhsPgxpv6PMNh8DnrqwM3qSh5PWKsfUqPCMYNEuPBBGayAy8yQp3WkAq",
  "key9": "235G1ZQortDaMbBYzyBcGgoAfeJMwpqXAWs33X56zEwSNMUT4jeCNw8Uw5bn8jgq72Vp1WAapAoYvM1r2x8B6sWJ",
  "key10": "3W8gsvqmhY59HL2kBXpjzoy1ZXEcnfTwXJx272CR5Mx6ZyBD7rUTD9epQHa9gFR95YAyonDCPieN5hJbhFPLh2J9",
  "key11": "5bTBe1381vVurEhfFTu5aX74ruq9DbfTfJ2LkPzT6Ld3bt56RXH1chGNeuR22xAzYG1c1eXhRFc2ZRUAdj9hU47Y",
  "key12": "kxjb8nfThModNGUozt7jX6LHbs8Q4BHxoWDbsdcHUBe32qPpMdREXTDJ6Fj5CNfckNbLmM3n5sYobDKpnPMqg8c",
  "key13": "2PcjY8U2kb5mqgRuTVgyDgaTo9mJPVGixFJhLCNmwQChv9jvvMxdJoK3L5iA3zu6WP9MKaiRZNjPERQR5WjuT66s",
  "key14": "4SLv55aJmC2wCdcrmf9JyyQDNJHkgJa1AvFj1Wp9U3gayxZEFXSstwFX7LCGNsKHiAjHbqdxDetvHzmUXmtoP1bx",
  "key15": "2rSfFbMQ1aKdmJjM9kZrmkrbDfmCaMAbHJLu3MjJbYvNhDufovw6Z14dktgCrNG2AkUr5qHkYKrq5NvcwDso2LiC",
  "key16": "2iinHGidLvd8GFwj3HGzhJtXXpuTYso9k2MDY3qeV672tqkFn1sX24MPc2bWqgaxZEUDW7FXD8zGY6r5pHo6uF5r",
  "key17": "59WqyTWs28t3oMnn1kHbF5DX5AeEKpreAa7a9RdJmedCQT5NFNiZWyaYJ3HNcsLQq85qzaXFjb7cLs5ReydLKKL1",
  "key18": "2tWbTc2Er7fGRFMxxi4jgM3C6QGF1ggcptVgE879sJZ9fkN34KUBtxf4Ssb2mEMLtRMPs1TUua7u4wNekamwxg8S",
  "key19": "5Jaws8fi4W1hSDHLXzSjFNKwdmPMkjAqTPH7tZ3ZMcgifTwB43TnVzuUhdiX1Ew2tEBJ8nbMrrEwApL3WbfpFQD2",
  "key20": "48TdNefR14RaX3bwccZXpgHTZvZ5mCw7j3h6XR2W5gnSFSgsgHRi6BZUNp56diMEAahpWxyxQfDnRC5X8h5uvpcB",
  "key21": "5Q7yBsiHMug3f175EvjAPCUosEKGwmyg1Sw2xAV4j3TabtFiMkZvsY5uLDArXrHcBfDb5huHPjvFhCASBxSFLNT9",
  "key22": "3DJnLSAiEm7pF2QXAWTqMtEKBN2UJHu55p3QXLPsFo8PG33Vt8vnXd7sZtXMghNTMGNH5mRpS28Sg7UWQL8ua1U4",
  "key23": "4bYas7vML4mdpHYbsC3Jf4NXLtPxuAr4gRfCsm8aCCPvhCfWfnpsenPPSwLa7RxTt3mGJQnEKXQkaqi7Kwptidgg",
  "key24": "5nsQjHBLackKQJJ3FUXL62qswPhj9EpU24qhwtq6medcxgwSNpN6ETqE1gTHSihv6qq2uYFcSMd7BFjkxzGDtPrS",
  "key25": "BaMzcLof8v72xiVdGUAu966TX8vCvSbtpVuQbK7wdQroNWuDsdiZccoAN9sRAzMyS71rj1rDa3yU31T4FmKKUpo",
  "key26": "55LUP5wAviwdEQXqUy7MfF4e7XR6rmBWtViy61yQJPhXUdpxooGUQkUqqkLbmY27mRhb4nccMFmNkh9okfZNDxoL",
  "key27": "486mqYtCJ5SmTQSjFUw4VC3hb3FSC4MeT8an1Jbr3dEcyqGaiqEyCAYJwbVybZujyBrJedCF89yuYGWsfE74jbTR",
  "key28": "5qGBbZLYwqzPSTXbpHMaCyG6w9NZQDgKWWm3VZADGqCGankFgaWc6UR8yVwsBPnkBzU5Sbo5dULhiaR216ioSvne",
  "key29": "4ERkhVqSwim7ssuWyQZ3kvtP6Kg4zNNULX1DW1oRbyv1yBd3Y3ni7SKBxGbb3ser81v1a8jkyDH1jWyYQjWw7wV1",
  "key30": "4AAi1nJPesJACErE3u4Q3PdgY8i3XfmZL9w8FdKbcCyxhHSMCP7bXsZWzsd3wmMBAn5FJVYEypTnTri3T7wqaUjr",
  "key31": "32KvoK8c4XEtL46wu6dTceEfUQMDUVsN9fmv6F9u9J7g5efy7q92yzUaoUASvzdnYLwP8R2tjE8BKySXT2VWjQbX",
  "key32": "3kkTh96b5z7e4ncHkB4QFRDpk7rz7FrXeR63LW56VFXEe6EH8JmwY5wePa84HdhcNtia9yDSuZhbckHVLveGNrWd",
  "key33": "41DDcWntKG4KX4sx4gWmPhvVpiscWAPJ2ZwAdAmhLJqAQrAWnvbx995iAvNvUYsrSrkSAqp632uwbd3i9z2MwWvk",
  "key34": "ZawPdRueipYb4rMixm9v6SCHnurPeVsZRHzZ1m5mejck6RHw5awukye7vTJ4SBQUXUqotJ7iVok1eDaJ3ZpGNYE",
  "key35": "GxWc6Lkv5fNumseH46sGuunchsHbnTKYEDkon34G5Rkuvjo2jVVdum8JNHPaf9RXN6ZFaQgFLvpY8poHUpmX9Qn",
  "key36": "4wGjokKrKLkMaGkcDyVnSa2wohCbSppAcPm1PYEthKoimKjKGkykSNihWjyo1ufC5YA5pD73YDdrfUBUBqubYYcb",
  "key37": "3PBwsXv5W66viEGZ3F1YrQrtu2jee7LecaMoSRV6gmkRetSTam6WS3T25RQr7e828j3bUx75944onSiHgQkwLtZs",
  "key38": "2MGEr3Y5uqeMYKUTZVNYRVfHodCMfY7tAv6YtUjstyz3YMTmgjGXKqMJjrVfLwrKYpj5wD1WDMdrfJp35JjtcqvE",
  "key39": "gJ4Y8TUgVSWFFgEpyQwU6byZzbvfrFTqgotCcQqLBzCDZzSzWicd2zoY21dLUphUQPrruWR6pXWLFEdxUSvR194",
  "key40": "3JyBbseqwmAp39ZU2q5FFWZQBHZS7g1CeXa2UjRxZLBHE9YRo77ZoENGY14S4tpG6MPXtoGwzbDRAq4zh1xURAtZ",
  "key41": "4bH3QqY31KJ4XDN2D3SGpvEQEufbQgNDFsUg3uM1pFsBiEpgnL3ysQUHYfdp6rdc4vqUHMbDKuQr9M911tjhUsLs",
  "key42": "65eHMKyXj5y5UFq9zg1RP55TyBvgZHD3yf3xtjURPpNshQqZWnYeE5y6NZMDQhQLJCNk8WVVL2Zfp94m5i7FKrNb",
  "key43": "ZwQKAQwFEunUvARUTVpKtothVV5hKkZ7cgp424gTZAgwCaBb4bEVuaGfWH9qJqr5itSc2KfUuQdyf1Bb4ou4hXK",
  "key44": "33ZDTb1rTzsf8GBXSdodMLNjR4tJABd5jaWFk2S9pAHh6HYDHuJ7m43UW99Dn1DhRXtz72JAfVJjbmm6MKECsE4z",
  "key45": "2Hcz9uLJNEcMA9wLa2ffMacgU2o8BuQsCyh3DPwgiXfndvvMaXTDYKLvycHDSU8CrSG6AzZCec3kiFQCjDF5P7jS",
  "key46": "3b78qLnkULJg2Ay8GFiai3A853JNLZ1EDtA91h1b22cwUWFX1orAuWdgeqATqZC7jLTCj4nGidM9cqZGsZ1FpeYM",
  "key47": "5hspa4huCvYGrvEYxU93DwzAYYCGUYG9fV7mmabYgqKbRDghUc6Le4p7oL2MuxZFtGRjzKxqyDPM6Qk56vFfa4n8",
  "key48": "sfo8XtG9BRRqeqR75PhuPWY1VTbhVW4NuYPwzDKfYQKTXgfC5xNRMqyjWLUDjWrGgA27prXYEHHSsjefQWGbyBd",
  "key49": "29odnsCTfcRAPLzkNP9RDuHoCr19FZRxM9duMWRX2Qvm3N9LzDFt3Y928q7zYEVPE4TVFxshKZwQVzeGHM4DH52h"
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
