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
    "FKhYY6UZ6dk3CVW2bTfUhZAxCR4HzutS4BPHzCv3dmCaHNY6ygPrufSt747amgEywRwembmQ8VU9UHoLc28pYam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eYijU2eS3mRcFZZNZnoPEsGpPuqSfVsADPz62aW6yVPNzZ59Nyr2NZGnu6N4BEUTFA6NDVVfh4LW1eETgLpcyKa",
  "key1": "osjnNZnvuEmVPrcyHUUgBtHGV4Er3a473NJRoGYyvjE6xHN2A7JZaEG53gFkJG8Tpsb6KyJD1bzA6MxaNJu7SdP",
  "key2": "4EgwJ84SMFDJeRa9WneSqh94vq563J5K5eFhEDjWAbE7LyizDHCPpSPfg9CubRqzjBQ3U7ufnAoc29LARhpqHuQD",
  "key3": "37r5227BjA8goyo652VRgHcardgQdjtHTJff2Qr8hvZJC5rZtdnSjkciuTCwhfw5zzxeFY8Wh2Zq3oJNZKy4TjRB",
  "key4": "o1kJjm7mKMuGuc3GfdcBwYEGxPm77vfTfnR8kFepiZ4TQ94EHRmXy9J3QH8gchLmdHPxwgVwpQ6nkKyNyM9oScy",
  "key5": "2rfgGn6PXAv62hwmX7Crw9B4DBSok2EwCrU9aDHqxH818Zn2P7WB9W6RPLG2jWiRpKwCTnwoftX5bBFSWZ7nsNq9",
  "key6": "22gsVVPY9hRT4aVnUSTbxz5hQgzGJa1MWNbNS1Nh59gxEZ4KXDL9DCYi7xfKmPMcX2oMvzG2EMjbw6Bi83j1xWdr",
  "key7": "rQ1o3yqgdcxa44mA2Rc3GVZ51pnzNukJGtMBWgh7N45FTM643bi4QJunYXnpELaS1QPkXYjA1LiGcq8Zudg3Usm",
  "key8": "3Fv3BGHJuNXGG2DUcpASKBBN2oQ4EoEpAb4ajvXE851hAAQ5DwD9nPFGZUvsf27eVTv6H7hznhx6pPiLSUdZZSWh",
  "key9": "3CdFeKoAUZ3u3eaPF4i5sh94BtfAWMy5kAxNaTiQQhhXv9XL2dYqNM1aLxr4dFn3qKDHVfdQ5JHuWmADJcpmCiFR",
  "key10": "VYFDNkwdHfz3i7Bhf4TqG1fGHmMFTgQ89hyUd1q8zXv1NtoxYsHUT3ypVeDEHnbY72mjmJc67wYvUiABwVNpqjt",
  "key11": "47MXEduZfcak4L3Cw2G5HZjXXasQVVcxUnupTfie7oou2pKvt1DYN3o6HhLrqMvnqyWV1aermfsBdX7S5kCLY4Lf",
  "key12": "2juso31u5KcTWJywnBGjMPeeQ7kH4DBzJvEs6WKuQ2Gihzn8JTfVs8ZmZP7JvVEMsKYCoeiisi4G4KaZmR65wBqU",
  "key13": "2u39RpZmgeXJWM8wVT8pPfR1QipMwniTnJ6chHBwa34f9orX8Ha9L4kQ9MsoC79sWzAuqv6deqKJfNYYgEzkRFmv",
  "key14": "5WGjXeN7RWTAW6ZNqebzVzCPEg8BVhmep33p5A89Kyf8e3kVmoK6jQJjQ6yf4LiNZ4JJrgvGcwW3tttRnkvqP9Kf",
  "key15": "11Fg8k67yuKJe3VoQtyXn2YrfSu3WSuMU1cP6QY9h3qcobkvaXGgpbZbN31fhssZ1As6CwrEaL9UB9mWAwkrKrU",
  "key16": "2LzWB7w9t1U3WnkSVcbAQAce1Q1Nb6cAYW2sBYdJMV93cowzzxurTSv7aUNTBR1AT8YCgNL9JLyF6Tt2mPazCwfD",
  "key17": "4EpDbP5LKbvPsY1wTDPUXt9jDfdeHmp3AkWvCBfsDnDwHeoRWM6yfhGziupG6z1fprwvtKmDp4JYAPapsEFHtkrT",
  "key18": "2RycJGhRmnYxXrteZrX6ofoivB7WmCCxcSB5CMkZzhyRVtm4SPtQ2AHeNHdhbNjmQvDdBKxp73gF38V53JXvW4HD",
  "key19": "2S51fMpJQ2jp9STQsUuLnRfnRw88WwVkQNpswgimVcxfX6NPgWgCbXkifr1bd5LgTr15zLwven3vicbKEBR9PFQL",
  "key20": "5dtMqLYuLM8RwyyUXkPRyf1JpLzVcdRSMyT7L1UcHh2Ctrr3mCGwG3QR4FBtoaebwpPNpxGrJKhFN9cU1DijgXTr",
  "key21": "2v2zyzWaiu6gTTfxNFgek8te6FSMYg5w86UKkgNvffhhsyEaLk1eg42jGHH5MsbNP1NydzRX44jTJVGyrfRZZC6A",
  "key22": "2A8brHJzqPJaEjqdFLEmj5qkjMi8rpWC8jYxpTh4oL7g1Fw3wnKXA1PHfMovi74ohxdfJitjXtfYc3u2AhT58aZN",
  "key23": "58tceznsNrKyGeQFrijE6mEHDmagJeP7kwpbgR4zAfjR6Ej1yD76PVCUz5LYk1LHmDqpkH7Lnn9aD62E5sdpSdgB",
  "key24": "2aXaEp3xTmZpyjEKLwfJJkqLYKPyghMtz2bzZKxo3cmoEeBS9tRFRfj35DjfpEesnL7BLutroHasb1ghD2k5ipHv",
  "key25": "f5MpDPgVCe14gQ52CGeqqE2pAVc1yVhMkUR9P9kHGi5fAW6dKWsAZTejJXuvk75DHDzXbz6DwbUPr4QDmuBDayk",
  "key26": "32iyLDoREQPFiEreN64XujXN7eZJfEfxzTPd2nWJjHk7cT8HwvXoYcLK8SDV2759UQ61uhp53yexBAa1qF21SQtM",
  "key27": "3mKBEeA2hkwzXnDAtnbMSzJZfAXcdh6ckBm92sdUy7d65DagzfULSmy9nS1eLVDiPXA8YDPtqw8QBkyHZEFu2s3J",
  "key28": "3HsodDkoX1gBV6bwKioKU15bsws863KdM6ZCxfhp3h7rf9TG7Bmq3KREY6S9Yue1gxFL5m1VFC8RbXEMtnbWnMEs",
  "key29": "3WG3aqjeuwX9xaWNPVaRjcEenbpXm7psam6saF1bTW23m7QYAEZ8v97yEMFb6JepouDTAmXHF6xUnbUVSVJsX7M3",
  "key30": "22jdoFjQniEiT58HcVgFtQjzQXZBtUCV3SaLykpibLKPSaDWmG8ffSoVyr8PGRCUjcxGYKyPxE9ABxJFYpQoDKog",
  "key31": "53af4brRfiWUPuq3eeZP3gg7u5z3yEWYLqg8eQbk2dMJDo4EVeHaShBMdSyuPfmQ6ZntouvGhKPajhRvnMyz8VU5"
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
