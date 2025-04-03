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
    "4AZYFp18Ez1h7Enrr4YpnZbYWwTt1dXyBaAQSRaC3smEksau1Gw6iy39hghvCHxKt8AeXXNfopgMc5ExJ6DRE9xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tct2vE7khkeEqeeZ1yK4S3Egkz6hpVmVcgeGUkbTLF5GePicUZW41djPmf5Aqfxs8Q1yjsre7UsNz4xTHEaoCPk",
  "key1": "4pfTUnxnyQdpdAT6qCaLtrCRQtCHtHMKdkJMBsPmem2buNrAVvJGVFZjaYv8gWj24gZ8RiGmuB4FfMePK38GjWD1",
  "key2": "526F4TGnMRPxbRW63XzpXVeXsZkjpBQquH7EsDrHb5c7SQJAsEfz5Hu9hAZm45352RsLhPmbfVZAhbjp88CNt8Ab",
  "key3": "66nx8AnWGXcX43Xx4FMj9WJBMRL9HZ4zJk5ELsbpVESvKvvuZnNy2dN8ERwdrjvZyVywhEiVThE2GooF88Q8o6AN",
  "key4": "obVx6x52pN6fqvbg8ZPng5HjEuBEP2uUXzDaJa5YoMFKVW5Rof7nZJ8EnBV63KW6mFw76VuNpZH1znoWVNkTjke",
  "key5": "2MeXmvdamYhPuTmJhnAnJEWyACiQ3aRzmBnc2vLczFva8p9F8QHTQgNtnHegVHjL68CSHmVo4yvx9G3WgG9mj41p",
  "key6": "2twYymF56RCC1AYxUnRG47Grww31CJ7bFPZqQtqSrSAshg4AwsqxRVLzkRXkSmmkY3WderMD2WQrDZipRf3PeBQa",
  "key7": "3a9X18Q5GyBaqSZMhWUKXWKu1y41ijZbm2kMDAJiwVaTEwZFn8PkXsPf2qjCJd9cDu9WSWEZmtHbuEAhoYNL9H9t",
  "key8": "5ZvhcARsFEC8tNKEe3wYD8QhvxQKcQkEL192dHHbTHXCRKQHo2JLvhow9xKPG3F2XPfz2vxTEvKuNuemhCPrxnEX",
  "key9": "B82SPobj9eWzqNBgjC1NECCFzuTSBHKqZXg1z9D1B1YAQmk7qJ5cyDtx6GdRGJ1JJQbNKrGt1UDELeY1TUemrxw",
  "key10": "3ogei19HNNG8g3muUkpeJb7BVgSdtPWd59ucBTvwfgcjLJRbfmrxZ6KXQ1LBmfx9WCZQvcNwMaFxj55JBBRGuqC2",
  "key11": "4Zop8hiXGwvGQcgBvxYpJFi7466mt2qAQkmx81ZhWbfVAWCtLm59MVe786HXNt3etdMS4u7jYWfffbaTjTrF6Ciy",
  "key12": "22Hxtm56tf9m2Qj7rpMZmcgYcidsiERKXKzFHh1waLRPnfQdgkShTSyqBjKyBXi9WRMzb9ZxNdgANDMsfJgrZHa4",
  "key13": "4EB8Y2n4V9tej12PSjpcgUTYTXC9mLhG4Hbcz7bDpACMPdUT76NfAstp1jUQkGwpMfCW8UPB87RVSVFbeCVEWd9h",
  "key14": "2dnvAqNYLfdoWpb5qqwJ2sRcryAJoMmpoSQd2X2wrRQmC6oEU2SBA3GEvauJ9wTGXQhAr5LSjm7UEX9L1Axbj1Ep",
  "key15": "2s3bWxKxoPxwGVdBtXnXoKCp279P3fQ82bGA1nd6ZC9khs6Sd83L3GZT1nU21DRBTGMP6t2VcxfEwKYU4eM2LK6c",
  "key16": "3GvodDZyazMa55jgsiAySbmtPKzErTjin6KMgiygehj4YnYXv2U6DcZPGxahpJPWD42KGEyeAxC4rySMYttEjyfp",
  "key17": "5mQscETQv6zBHsiKo8sbcrHtJ4Mh56A8BJ8EVcQ5g3UKHa8sddw4oyfWTyLA36sne4cJu2QijVtYAZocbBCVzxet",
  "key18": "3kVPu3cVBesejxWKvLKHzPkdKidxRN3mnU8fSHx9QtJCEBQxDUkkDLSggbYXQ5qsQJSM6rXFsEzKLQXMfwr936km",
  "key19": "3jCjkeXsmzfcjYZatRyn6AxGkEVHBSx8PkMq1HQdu2RP6PcA6AWb4AcGXp51nHF2fguyBSe5sdhsXYVkAbj7rPec",
  "key20": "5TrF212HKXmDDGV9uZpMNri3b2wgwg3fFvP5MXPzY8UzppBZuRGj87R4FfWN7U1nrWwxJwgzPsUZy6Vt7FU9Mf1B",
  "key21": "GPKvoaKYi1RZkZXT8Tp9rERdCaj3HVjwDZwXZQd9qnmYgkY7VrHaYH4Q56iC6ZZUwRp8i3NtvyW5asS26h7Ahwr",
  "key22": "3yqg2m8tu4RWE5gZU2XkjDNtsSnJMtwTaU2AMUUBcteCHbArBEcPhKzuLhtZ7D6kvwm26WPrKca7Xys3ReJphuW3",
  "key23": "63L97BCd7HUxeAsBvH5bm91W7rTKfLwSCahrtJaQCTPd6DRe98wRYAF8avMdA1PofHHZnVyqdFS2SW2vMWojEAd3",
  "key24": "23Mz8BSsAxWFg7dJ7zQxrfwWNsS2vwpJ9PxZ8Ko7z7zU9rCQEErR6zikXDoaqTiVnvAwifi1kyhK5i6K4Z1wvdqY",
  "key25": "41GufALR2wiwBG2anXcVfpX73vvqeBSExhNCVEsrv25dCXMB9S83z5fgSjBYf2rE6JKvvm2K41bux4tbdNCUdEj7",
  "key26": "3cFEFWNWjK9eVdNfPvbTUCrVQu9pghceTq7AKrkq2QBuWLBcK2aLpLFp7zfSsHMK558qNvyvcFUuxLUvJ1uCVwjY",
  "key27": "4VPTPHgYNFDL4f7shSBQtiKqr7KxSz64GJbkUbNb4e8LCjbYmaSyruW3Z2JiKjiCYcQRUCDnwdTCoN6Rfuruqw5S",
  "key28": "35r89hJ7X9Rr4rdjpgzgF4mF2BWcV7xZYiJQ4Rk5a1Ur86gPDC81UwizaPx4qJpNbCnyQokgvvfHgGGWsHJxMk56",
  "key29": "3zaXMDVZFXVp7ToPs1zDodorG1QKk37GHWKkiWGgV4VaeMQLYuYzUCNd7yxuoD4fKsPtFHahqXpdWMDLE3duC7T8",
  "key30": "4vaTV3kXLZ7zYYUCUMYyi4u132kBqF4qTGqvPj6XQoa3YeezQ7iSvy1KNhgxCeVo2H9Lzd8TokfX1ACeBcAPibnm"
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
