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
    "4hjtWVyHU1Z9M53Uo8WJd4poXjPsniyDq9DsdMqAWPWT6paftamKtsdigdBBaZzPmt9k13Hxk8ofDDFgwBDT9NUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1jAJwiPN6wGU8jKctc9xfv538t7Qr7Qc7CWh6LeC9QZvWz7sNGadgZAHLktqfDrbS2D1SHQxu9LrT4cADtwrB7",
  "key1": "4MMLtkZPNLuwcZFMz25YQucHfqsU2YziELkuuq9WTmzhUs8w2uM3zQdvrS2JjLvxMa717RGcqWoVrEgPv8SxqwMm",
  "key2": "4CKzpviHqinwrnuJe9eZKn7z4bAQpPfQfpA1P5ebd9cs3AjA5fPTPUnSrsUgvd2er3v2b8qKYTuNag6oecuLmR3f",
  "key3": "YbCLnVL7yU7pusnGB9BkjcqeMBQGaFjok7h7qc36kV5AqYA23pecxYLFF9zdpos8ikcFVyxyGc2DgUw8LrqYk5w",
  "key4": "4xEiHWL5XSspySTFqQq13DyCjfuwraqFwgs33QySFrxe2jkoJZnkNSawFeSz6fq2mmLy3XwkRg1XwMbMoQWAV1u6",
  "key5": "2gvrF3viE8R8BSYpJgq6mkZYumRdLH34bS5NG3DYtYWyotX2QeAcmaoxntuJkN3TG1Y7NFqwc5YTGJcDm6TZ8WVd",
  "key6": "28QE2rKBmuZrmgaZ9kZRWaurSoQebj32fCG2ewAk5gzNRjFP4LdNyikB8itRmp441v2suvoMv4kaLXMyG6ghhDrw",
  "key7": "3VgxArAV65MeV4E7jzZqKNqHm73eskrZKHP57dRMgoJt4jssFo2gLurYsrjotA94uVScQJMHWbTzya9b1YoDQT5v",
  "key8": "5ytyJ4W7UFKbL53M7ubL6XGX8Qb7iJQEDUDX3PKUy48bmAFwj1peirwc7N15A9HmbKUgLxpPjj4zmaBHrL8qJaTf",
  "key9": "5GE2VYHM4Sar2F6Yh2Scn5MHNUdEUt4MAmTkCx8XBYgByYPdgJQ93oYVUwHe75RgNSU9a6rhurnK2q9JmLKDc7pG",
  "key10": "2Z5AkmUAAd1bBePrycFFuAL2Xr5pMMDroUAiKJEQdMCg7wxeyxkF5drbBaNTgrWgK6nCq7gHSmwsNe64biie54GQ",
  "key11": "2x2jR59f4Pu87RVQWUYBznyxsmUXJHHUJCA9Hr4afkTGj5w9otskFg3gvfLtDdCtAamSts7CQDiQs7DLfsVV5BPW",
  "key12": "g3kWrp4msqzhrfMBbhYXaS2WfxwbhrYciQShKNWJDJHn2yVpvEbuAiodomTyLEWtwReWAsmDbzXmjRct7UXJeev",
  "key13": "3Q1hTtfc8iQgBcs4bWHcR6KZtiafmAtR3T2qyDcGkrayd7bGf6MmPGUeV7epQeCaVooMNPgGTsYok2bnNgZZdRyE",
  "key14": "5cLzPcALbvVMv77iCZVC76ytewkozGbUuqLXi5RSVFgWRcjPz3jaAJnGQdCMrKybhP5r8NWxPnHfEjb14fcrzqxx",
  "key15": "zEYyGqg79afVPf31xSmaRaKS1y6sKRmj1Un5FmmA9JydTXaEKSRn1WUU5Gh8CfZ8NtDbEhhtZrbgRFMbibSDwZh",
  "key16": "5CtehwffmzfHdEZyJpUp8g9oanFKURv9GSSdGjSixYQTiuzgbWojNJpBpsKYFXYA5rWqRsZLvA13WHr8yPYNaeWC",
  "key17": "998FgXiMTVwmQsr1pivQTFS1RmCPBv7Dfayxbo6vehV1HhqA8J2WrjLo9VLfnij1aZJ48HCz7a8nnSdNrYA3w9p",
  "key18": "e8mzULzLj2GMSdTprP2onGhF11DgDCFxuw2hmJJmvifksZuX7FHhWFmBRU5fMjNgRjCeFGoX2K1uYgQDv6f6Ra3",
  "key19": "3UE4K9NRX8hKKrWQmJF68UFnxSzT559dFXgPg9xJu1TRbBiaLxGKkX4f6rzvh5aCpopp5B9U4LVYrwtHYRZv3BSQ",
  "key20": "4oY4e7DyQhneDVfJuRS1NsWp6eXLHDSfeaZcbcGRGPALxX7n9RgGjGruRFVYUADae9wVZMWMf6sgjEDhSSYSQV9P",
  "key21": "2GCmR5k9kYfnKsS4MNj593uFxUtE32gVBLXkGUkzXCk9YpQjzmAxQma3CcyPd7B2K2zMBihFJisKG7dr3nX9p4Ro",
  "key22": "3qjF5qJsuzkAQhQJGWExDySZmh4X3Eof64mwf1CwfubBj5ZczppKDDiz4Cjm4hRcpqhWtLf9fjSigdHAmNQPSxMn",
  "key23": "32mGNHYhA6d2Xdoai5GMx2KmFjSFveoFGc4owpMKGuSG1AL2JJvCecUaBrt87bBdQTU1d4RSNxZrumtWRETYXRS3",
  "key24": "4QUeQ3GhGbbkp4vPMENqPcTL2Gkp1XUhoLayG2HJyRxVgJhjuKrfsqcBTkQZsyzo9ak7XuwQa6qiNe5fu3Xdp6kg",
  "key25": "4YooiY5j2h1Gz36v5BDmDNsSdNpeHD5w15QFtRZnvR3VqQ6s55kTTsSHRCN4WbEiTMPzQ8W9EymCPXnbxCHYyCtw",
  "key26": "42AWLWibg5haUx7orgPLg2DTEJvvrCUhvECAT8XqWhkmr1zfCqUowuVebHN5xJx8kB1BAyPfS5itnfdHBsAWYhrB",
  "key27": "wPmnu5AAw1dVzbXGNFu7xcNKRKtgVRNcPqsDJqeXHqMzzLKJW9RVMuuWaMGd2ey9xUP1ofWnATDbSLagGzxVCeh",
  "key28": "MHNZXzqrJgY4nsdouzosFJFcV3naazCiuKJBG6nA5e1w4Mma8U9NiSYsoBmjDB4MVTJHR6ukJ3WuJWVPAw3wvFh",
  "key29": "23sdiQW3QppPX3nk8pe48LQqfyFLAHDfkm1S7tyf3PScT77itCnWVBK51AMWh1E5Nn9cmmtQX6rtrUgRf4uubWhN",
  "key30": "2TbWvL5oKR8zYTqg3Gb7xD93cP4RvPq1qHUzM5KgTMAsBhAkSs3LbWSTR6CDLBTRp9G8a4cR6SiKUWPeRjGLxfV5"
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
