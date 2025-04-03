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
    "33mHYjFReVATFjuHyW6GPQwdmadj98p9j6pvasS5RMMCDWjjK75LwtagXEdwbq26EXkh3aeagMUnvvCvvqVyU6az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nb5pRuHL692B4oypHe9JL1qjbgMz9HVpUTbhYFC4GGNiuebKyPgXEtT5fpBw8yDk8fgRRMd4frzbJZJKRK3bdeo",
  "key1": "3XEAaSsea9d9ib4pvitmch8QwhGqbaCsTfUxWiPprmR4tFjsTRGYySzi8JpevFeXwhs6kECmjKLcP7QmTBQrkbew",
  "key2": "5JVCJGihwvfYEyR8Sf5Q7Uumeven689r7CtKqCtKwTM8hhsaMm5HpdvtGMThvUMvmeb6JbC263zh8bukhdGZ3vDD",
  "key3": "5KxLMwANVPNFYT4wv3EPYp8FT7i78YQR5uz36S9JygDa4JpSK9Aoy4XtPzDXKkeSf3E129ZRoDdjtMj6xi6aHsBt",
  "key4": "5tuLbswcDfVPiEoUUTJTWuitGTZdm7rh5eKoYxmzZdSEhU44PXKzZ5Lnwje2kzYf6dNmdv3ZRF1e5zRxqUqGVETW",
  "key5": "4fESTHaD2DMZrHFzyUtiJvKnTr6thAAw2L9QPDz86VzEzgaPQTWg7U5gVUtbYZGsAmzX3BEEzqEN3VQnSBCw5VTf",
  "key6": "2PazMfapATLFYN1s7UYXPp7vK6dvMYVFVVZnvgycfQ1XAq6FMfRSY7dMtsH6CCri6EYmtEKY5NZeipUNtEnApWy6",
  "key7": "5anfCtrg7U9T369iEPcgSffPh9yX7K2neiYk2hnnBJEBSFGvpVdADmd5q81kYtAzgFh9NpN51YBWGhpAe9Luozzw",
  "key8": "4vE7FxyH5panwq1uD72r49n1xt12JQ4fhTPCR4GoSopcJeCiBkmHC2bvsfTej5p6dKZ3wbCp9pVqczP7B3Wdcr7e",
  "key9": "3TuuMFDUwF7nQB77hMiZKFsGdrcmgveXDd1UH4Ahsm3AuMtPLHeH3spgR2o4PbpfusGFZnDXeWtVM727ncQi2RJn",
  "key10": "7pWF1gyQKYidX9PUMXy9wSNJt1BzF7YwZk9gBSoCkoBcAia588gVrbP3v8B4aKPjzCp7Jj4jm29zCssYMcjgfcR",
  "key11": "4Tu5GDuiCez7wEuNLt9GVDb1apZpzAoai77GHHepAZxvYb7xohJFxgiN9mwo4zNeXKegcUayVomLdcu6get6gVhx",
  "key12": "5XuPWzkswc9stLARyyt3c8Vtm5SGMTCsVfzdx1BFA5TQPJzYueEwZNaZJExodEphB5Vz4EMQ3AQ24gaTkpYbyu69",
  "key13": "5S9JANEJjBFm6QXWmzxqN9WP2APfGxJ42AjkvAzY3abHnMECJnKpuet1wC54G6nYGHc7uzQ6ALiHGMUzPLGQvLfL",
  "key14": "nxNoK5P7okvJMdTu8oJTW5U9teJP8wmcoK7zfwDK9r42QJ3Ts2xxEgCKY9XbgTrG8ziePUAYp9kbERBbHCK8kRS",
  "key15": "3LP1EorhpRAmQwmqSWi6ZuGQtGY2azoqV7YmXED9ksdzZQcJ8o9psuTsbX8i9v6K5q79c41ts5U2ysYgfo57iYXh",
  "key16": "uuGm4hFV4pLsgnb5UKhJaJxDiJsZGAV6SS7GWUDJrPM3TuN7HkJ1znvvMsbRR6PBiobAqaJ8sFTXwApePQJtBdJ",
  "key17": "67f2SybMgLPuWKTfEoDqiB2W5RJ5Za2mQUQKmMDYpBC7ATBMREbKXMJtfcNa7aiVgD6bjPdGHMVwVt8pFkodGeaF",
  "key18": "5BgqVuPjNF88XqSr7rUkbXdFdMrTSzGZGYATiBWGkzZrKmdwezQedhzt1ZaP4ToS4ovFWaZ2Ahymaj1jk3rQpAiP",
  "key19": "2XRNiAbHCi4JZStED9jGdELEF33E66g3kDjekgzCh71sW8neRSgkizjccFJKoo1beJFkx1Ae2r9Gjs6MBfe4UC4s",
  "key20": "3SL3rwBgtMpMysDNmqQfs9mnjLqATxC77t93QqmhqUhwAuWFieYvVXu2gLvapdHnqNxmpMF6SiTXbQqfEw32wC4L",
  "key21": "49xjXXcXCtvo2ABBVuna4AFLUNX4sLKCBjegGy1hsC9LDTC1fsy8E7DvkUgUv2J4bL6s4ZxzUdGM4aM9uYbGBQwd",
  "key22": "3kae6LVzMoWoAETCgM6sjDx3HSVynYgkAL9pMnqEoSezehNcyHCeMDVKGAssaooScz2KLPiZarU2Pbxzx6Nkyi4w",
  "key23": "3j5GNMXZVHbCMGqGfGe4upUzfdCix7H83Ag5WwvJ5Hkjue9BVQKA1DsoWA4mxPpRExCVfqXVF6yFnzDtFPM1jUfv",
  "key24": "VeMTHWYDRkQpRot4r3rw7J1h3E2WNuArW7g752b2B4MSNmkv48kJNWaoT4mrgxVShh9TVDmwPECvC3LqDai7V1k",
  "key25": "2zV7x4rc58WizuG7roEfUBniHGrJBMxrLmhFHCePFQkzJp8qKFvJmHQ3uLN1WXHaGdkLnAeMYaoYeep1p1xztHKM",
  "key26": "4dGw9hYZnHnvvukkTVTzgR9Yiy72kYGS39ZoaDpYQzhaeoViqh2WbpQdcJjVvQ2wzwGR6En7zvySAg4awMRTJSAK",
  "key27": "4ELSVjyMJfBqj965Gyj9eqRWaS3Ai7P9p4FdFREfsFDyXUgoMe8Gu5qcJoLnq3FfiDk43b1ptNfpLTSyVpGgWt4p",
  "key28": "oR5qsdT7Ckg3LABnNzNqt6NLTFkWZCmiZ4zrX95sXRgihh7YZZiDWwyydNxYNndZtZFwgaExMhZqJK873G71DFD",
  "key29": "uqpMJLdYHYJCspigiSTbG3bVa2KH618eA3WmCTXbZpncusaL43xHjDT1Q367vz25WM3H5w3ZBaG2nVZGzjjswXn",
  "key30": "5G9WMwZaC4Be4ohP1PytN1Ga26y1gxBWbNFkiG3FzxAKfSm6MEz3LZveag71SfbCDjfZGihqNx5a2mMuTtebvP9i",
  "key31": "44CyrmSSZDb9jHcKKFQpmEFhef8UtPzATM1tsNNvnBpEcfGpMisvTFSPLKGzQWKFgCufQTAZu2WUYGBozGDnZojQ",
  "key32": "4JHShweG5NzGNsjFpxTRZF19737EZgbEe7kzPkdBexkhwfgnef3AFaTLiR6GXKS9rPW2q3zNE37nRigniwSA1WiY",
  "key33": "37ZS4o7o73zDpHAHdEpi1kJ6SFTLgL9XVULUtxJM2dxMJXRV2761ZyDbP8DH4Ds2iDmQ4oz7jwUQifoLf1p34YNR",
  "key34": "32amxqFBjg9E9xdkhBnvdMRRvQnah1LDyRaWmyfk2nPKctuQPc4jpj4TXdjVghgAy9WxdrpixEUg3LeX222yZJsB",
  "key35": "4Ei42phG1mDx6midZjpeUegKfdN33eqY7YbUqq5FULUpzV6XXjrYgFUNBL8iqNao8jVCrxWLktQZTfDX9rGRU3mg",
  "key36": "4EnqXEvWn2L8sXa55JcGVfXzvdDSpbDRK9srEGnSE3R9UJ5LnmUvDw7smFdP7tezTcAggatjZSWAnfCpjnpRd3SN"
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
