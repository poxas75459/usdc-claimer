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
    "36yebmKFmhtVpWXFYe2Yh9rkGYgLa1SHeMJDJDM4mgQ2XxsRKXDXiqXgrMVUTDbHfo9wAh6aLYs9fVTv7GhgkmfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3AwVDn74s4mL23u7S7o4ydFHvhGdGPh31Eft4di6Gb41u8jG3XZpB4VGojKU3s8FJRFz3wuuHJBokcVDFbUgGA",
  "key1": "LLeyactGXm4JZN1P81RnHipcGXptmRfVctNt3fieenYUnPNj7dh1zQVqeCRfXsDMp7dnPnEBgwyku6ELjazBenh",
  "key2": "65syF6Y3QD5P4rfwSczeUpkDrxWagLuBCN86vreyQLQwspQ1F6imRCZAw1UUkUnKF8JQTNGcVhyN7a9uFJSY7QSb",
  "key3": "3GPBurjpS2UeqbyR25gYaNiPptSY47m3S9dhw7b7roGKipkuziKTa9tDG4KmYh8LWP9sGezDZBwwspqHc9tPG1jp",
  "key4": "4Q7ii7oPRdkZQRrTDKfvNf9ga9m89anVigUXUgQJnGqS3fWJiPCD5kAMsTwfyzMxinQrGiiTNYFz1tvrryJJi5Cy",
  "key5": "2nh6CTuS6Z8cjAnpWFjDVADjyU8hQVRwvp9yW1XkBoT6jGSYtzaGF4urCknpBpo5j57eYgLsnJNBgxqDMQLEhAcW",
  "key6": "4qLpKVg8QKbU4tGGLfQo1gcPsAJDxSXNzZjoyUR9RUjp9KZLmsoaMiiEbjiFx5uhcrgUPztdszL5nLLtDdV8MkGs",
  "key7": "3PGEUEA133vTXXXpxWPdAmhKaadLAoiP4n3e4bZRpNkeGFfZgFLsKkVFnar6eHSWTxvUdeSwhasMrqgfhcD4LwSP",
  "key8": "3uac5b5wTMFd6oeqRHT34viwis6Tt834FTQDtqmv74eYdCPH5WZ8i2aomT5qttErSZDxVdYXe3WoLzSWS2dY8qAc",
  "key9": "4vfHSdo9niwVxU5hqWWKnJf5EoxmTVh4US369zguQkzZh4g3ivNcXnGbva2kSP1FdEvCHBnqxXSe1ptnEDRCHd7J",
  "key10": "59SZ1bu87VVsXr7RsxERSrcZmzpvGXUgvYSBYXz5jwTXAgp5nbSGLWdpZEDX36kv5v5jp5fhMzzjS8wPsgWsskAB",
  "key11": "4szq4xDwbJ4dz7Ut1TVUtU11pCcZmEykzZ8KrKomKExTP6NrvNdbrdVkFhWBPPKvdtjBiwyUUpPLpjeHaNuK3zYj",
  "key12": "4ve1WcBNANUsYugo6qc55BEMGTd1CPeL2FLVTLCgp3Hh1hsoicXgeiiBM8JUhVzZyNhM9yYcwLoJmDjcbuq195fK",
  "key13": "5WcmB5meBsBS24u2fpfEbydJnoHAj2qs1izSAcsTrF8anHVqxcxC4VsKqoRCyY81pLgpALiQ5mz7wDWWVy8sjvqF",
  "key14": "g8xFyR1GG4yeVSweV5C5toqGSrStXfRz93ZfYL8kbhCJ4KJQQ8Ds6siRqu3MpwVdKW8vqN9Xyrjn9gw41wrjqcB",
  "key15": "3UNtwDtY74d5D1cfEywQpZCsc84YdnPsYJ1cfDKztDrfuDNXvRKGUF91H7fNaYXhCzWurLdev1ze6mYk9Wa1dmTY",
  "key16": "5t7vRmxwt5WkMQUTAMQFiEoWbpC7DowwMVHadpNG2Qnc7wYpE4AUnrY4kFPncx2TZVwTh3kqMuabYY3AZSkjtKBo",
  "key17": "3qAwJRSbVNakwWLgQyGYWoDmVyhpAKZTqYYsNDMpnF3Wazc55BqQhVVDxnLUDfqbHKFwZZSgYurGfsMHnkmNHjZK",
  "key18": "A5aLSuiNvzNLM5wvZde1D9SFrCk2Np2DStF4GXTXHqLrzT71jBkRWsgPyqx67GTmrCudANztgVgPmUQ8i1qMEfS",
  "key19": "23jkMpQbYmrcmKcK7TEC5Zo1LwmUuuhNdQ8XEPrF2bE6Z2C6QrcsBGWEtmHEghbjdoxHceheG8ZGvDefKgVzN3wA",
  "key20": "27R3VABqHc45Vf9CPTkgRMb863J2wVorjDYFBJi8hNVZBnSs251mu72sVwscXVpNSFZaAu4zsWxCRFsdqjKgE3Wm",
  "key21": "4rUKWakuESBpT9xAeAWrqduqsq7AWZJSE58SKokB4iSiGPSNgSRDa7TYRGDfkFvRgBoUrPNtb66bw4a71CYkSWpf",
  "key22": "4VxVnKbi3PjgvZbGxVpZncthbVeQLfZJ7qsJY4LSGDVpm7HHVqYB5EzcbGaPBLn4PARrqgtmkV1qWTj8KXLUBeMy",
  "key23": "4ZayKmCeGfwE5NMtTU59CmVSqPoTCbSnK9jN9snc3fBaG2YbZ7UyP8kzdYz73m7Pi8Ma5ZxJ6RRZdBB3eXKYoYdo",
  "key24": "2V3zYKPdojjhP5NcBVAmMaEDvaNXKF8hXyw7nYMRH3PCpkNuJK7tMZ2AHSdQeBoM2fTKog44WVLiCMi5yR1LQP2y",
  "key25": "2CHJ9EpQqYJn9aZMTkJbxV95gExZWxjsgTQKurP3S5fpNGHvQ4godNKh7z9GL7q7j6zF8hfrPQ6kuc6K7ztaXFqD",
  "key26": "47L368aW56pwT6mjTmN6hZHb5i2G9qf7ErLUvF4SWBijMi3mYxj9dkb9HAf7FdZu4g93gASikCLyPVbJZrPBYj3e",
  "key27": "27FFFN7h4Xerr23ZfGbtNQMeu4joZhf8Ln5GqsxGWQxLUraVc4udVbBMPwRBLGZTWVA8qsi7i7Dx5sWmQv7vd9ju",
  "key28": "3X2U95Rk1SZ664nFAmTLYLyhXjeosTxB4nf7ReMnzz6aSpfiqFhRVzvxHtMFpPMz6ty1K229Mjxu7fS1PUG7dvEv"
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
