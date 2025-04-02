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
    "2sseo5DN6DPT3mAnsxkBMjuaKRNHDZQuJ8xkfVXqjoLgVgKm2xg3S1tM3Z8hyErJ6YqvL8ovVttXxAfabyxZphW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1DE3iRPTnpp1D2vpTU1eBjJjR9p35LA71Neue1cwUkkKejojKMFmXRHVoLyu6WECWSqjpyg44fKG3Ka7VEv7jG",
  "key1": "478N3qJM7jbbkVRpk9Qt8D1RMRebV9ryXqxGCFzFkGJfzrvPwJuY9zHNorp1uTJBbFQf4jGDXJjqVHJT8w3McYYJ",
  "key2": "42VRbauvqvE6yvKxgHavYnDa2YX1TnCTLt6QeKMrYWsnF2t6kRbuq5fMfHrao23YUzAfuSceB2baE5R1SGk5U64M",
  "key3": "342Hy9gwjWbBEhqDzzQeXjAHWWTq8nzvAq14UPZNj7fFxoXqARjWCGeKzQth7SRpkShEU4ZNXpuLf25yzhDcxWNN",
  "key4": "5eHsbMvfJ228hep81AmcBxeLKMiU83Qi9Z1nhqVEaHvTohRXqoCXxjx6Mw2v2nvawfvqTA89qHjAtmDML1WTWG4A",
  "key5": "2wNepzByJA2hNG1eLRFcvSdyhSJTXsK1VGzo1GLWZhENWSvJaCGigveVrgXgsVtD4q1kLq93DcZwBiCwcLwQeaL4",
  "key6": "4sadp7LaZHc4nBgvk533x8dXgvN2F35CPXmzz6AJfWAyYurMedD5ZoioAoD1Zr2HGRTc3GDcjThdsE4iL36VMfRA",
  "key7": "2VxhTRedyjx3oPiuoRSEsabLiyZkvHsyzK3PxZ7JPFJiuZvVzTG6r78aZAVGPm1RxMZ5Rp7gZmhctk2hUfBvZHrS",
  "key8": "5dvCSTMvkxMEW31V4kfyqEzcRwHMJBXyupBoztjiiHTcshUinPxxqUvhXyxrJBR8ikNruCG5DbdaT7w6jRAP3nwM",
  "key9": "4D9JoY8pqMTFkm9pbUDoSXCSzy5skP1a4pZHbzejZ42GZ54NayxeptEGRMWp2m73zGGuURBn4uxXnQ9Tq4YPwmR9",
  "key10": "5uPXpUDcyTQeJ1sfTGYDcm2yKKh14WLVSKxovrDi3pUpjBoR4tMMab4BGzR4MYbmij6oDLXmNudLij97EMvGmUXK",
  "key11": "3CkcuMFLze35ASZRkCWqN6S99TqCcnj9qfvrbK9JMJwhUYpUGJ66TDYVfHDojNeQqzdULyCP1oiPrgYTEuok1ip7",
  "key12": "5PRHuDXPoHrDL1YmnizzmhJ8Ytuv5oBvGRSnnP6zJbNSS88KZKFBzoLRJhT6XGm7KpGKbyReEYhKPDGxYEBFtiqD",
  "key13": "4xhVehVWckzeZhEGXB4C4aJxjFGnv11UTVAmvZUadaPEk6eJBtHXhX81YAAK9he8br24jqB3pN1uwBmrdcJXjAWY",
  "key14": "FDE9XE2P9hZ48bMXGsHXf1rxNCEzNGNB87agtGzPjAsDYiJjf9a6tfjV1BxTpTH1tSqCEBpa1SVbxDfwiKcFKSj",
  "key15": "3jWWCNgfQmtDWMXyyr8Npft7eEDJLfRBqZPjiS2qnMqtbSYqvTkF8n5pJJ3mZ4bd5hySy7m5im54YZPteXVnpZTE",
  "key16": "MpWpdc4LLW9ZA6wjMkmfdyDTcZgoiS9AFhKhrxFCKp8VRw1kKYkUkyEFjfxfQ5JdY7SqHf8CebWwTKYxrFTo1mb",
  "key17": "24ybNKjuGV4MBUP5yFxAqcuHDdrKv5mbV7DHxh4LLtNshnk1aWKEGWNG7yRD7NASA3BWzDbz7qNTK4mt3dfXxmEd",
  "key18": "jaTSpwWnDYcz2QYJbFgJGtLRhhp47HKLJge316jxM8siEJ4sNrH3ZQHE8s3ETVAgbrF7GZGRZD9XGbpBqEvJ72t",
  "key19": "ygMVPnBEGbDJqmCJv9V9unwcSFGzUDjhLC15DyzxC8RVuavsi3eiFQ1R4SNUhkCNMdWCfafiG1zZTv4TFzNfYTh",
  "key20": "4Zzbm61zrwzy5vtYGAqwgFsjx1NnakR9g3TivxWizRhjvaQEW8jv5j4zMaUhou39GEEsLqQeJCo7sLtEJ94Mw2tF",
  "key21": "2U1d1AYe17SeTd1SUEtPp7BRLZVaKvbBpMFYGYE91B1QmjKMZpgotvqLX7FQ2sWHMLtunUn1tNqkmoqDM5x8wS25",
  "key22": "2jctAq8ocm5sQfYupJQNv3q8dajRBPDYUKKqcM7yHfitv5QBYjJ9xtN2RAt5r5ud1YR2CJZxVHQsTT2vspowH1bA",
  "key23": "s1s1rQ8PrgcmmdK9Qm43XTFh4BN138MRNr6mrNRa74gTmNyCjdQzxabkVFb4UH646GtAyzUh81VC8ZUnM9dTyDu",
  "key24": "3yn1WfuD56xbmZ4HjYpwnGQYeaHECSHnh9jn1qTLcbkNfxa6JRCxbnjmvRFjSGxeq1E6hmgpK3HdzusyKKjLiDEE",
  "key25": "5SgBXt2Lr9zLVkFYKu9y4y9y4cDP24fGvMUcAjQJeF79ZjuGXLcSidbPsDxFkLicsgpGnbdA6PwV1AxWCge8X3CQ",
  "key26": "2t2mBVDZgEf9ax1QDFV2Xka9zYGvrXSzuSiW5CZxGXzivUYFUHaRfNLpahNxLPYYXYNedPP6PzatwhwvejW2eKLN",
  "key27": "2oL83EFiQdS4gBN1YrGek3F26xTJVzmByzUfS4TJmucgYRw1NxqeqWyRKenELend8CmViK6RbujLWrNduQoWWMje",
  "key28": "3wHqJyHHwEwDdWn19hdLJvECuGsCY9zb5bPfjM6u9Bz9xaR1krvxVN3d3VUGDYqWkYWioimaPuJvQjg3JJWrckm8",
  "key29": "fb6xKW2Bs6t1Qd12mbniNdi82X46UBFTb278W4eg9xTXEA6wnQRagx9LjYmqkXhhJoJWGAfbgXhRkPHhVu22v5s",
  "key30": "64FCEjzgVP3DbuzVvN3jL4gad2xgEh7bZaZucF9HJFqfT56n2M16CiK6HArpHhUSBbqBsEfnTLLN2gn3MPsDtJDx",
  "key31": "2DTcuoQnVUauv1cFuQwrxj2rLXTZGFRvEhicQ7SWYpJdVHrMvqjbomYyuE9iXgRDar9fycRNCXc7QB5FZQQrJq27",
  "key32": "4exMWwws8GjKuRQACtGVtEHWmipYogf77ZUZ8cAdAYmR8s6GHQV2dc5SCzckKNJbPWACUNEk5mD7Lx12z6SAiD89",
  "key33": "5AGxAkEPN3XH8zQwKWEdbwwQjTqWrNqPZuzzUhPTCVuAmC9zTLovL38z6qekfDNZnc8b1pfAPeWBbjawfZj4xaLL",
  "key34": "2Hbvuvf5Jd5Ft25iexTmBJhgK4AWHAstXmn3moq6cRzCVyqkeCora2QmNNQJvMacx79M49d8iBoHN9MKELbRMSTz"
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
