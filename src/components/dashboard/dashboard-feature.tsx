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
    "3NYjqS5QEUMzFNpT8LJtmUEaLCDeeTQmMCLRFCt7BSCdizBHkvwEBU98cimeC9h9fabZS32Hq2ZFZ1zKi3LdbtmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcbhDspo9bopoSFXs6nW87Jduk5AoMSDhTQChqJkf1AtLzJFLBkRGjEzNVHiqSxdCyeaf33WJEbCnPPmtyyYhtx",
  "key1": "5hAXz1joB4VMECP4c7bMgEG5uUTsXtZPbhyWe1z9ctysk5jdHiwkvVtSmtaPtnSgKzVE9guLRo41wQpXRfxnf96e",
  "key2": "23HiDdrswwiaS1NRXM27cRmjNF7nkLHtNmbqF6nXyckTMs9McxjtvJuMa2z8PzqoZGswHxe9uDjn7uFoPCLeNJtb",
  "key3": "5tNNVUs3miAQCDUcDLzQyPLySAwyHXw17w97vRKJkKtkW6ZcGWc7yYyeWG4octW2eqGn3739nhG1KxdCBUAvLXnq",
  "key4": "5DGptYthhr5Q1bU8jh6smxfMUah6L6VGU9v9RTMQRS5crF24VusMk3humA9VT5PZdBKhnAA7o8veFZrbM9w2fEH1",
  "key5": "24N5rcmBJc7XM53rdHd1LK4YdmatHbCC6VPfefNmUzfDyXMNn7dsVnoUCTDA3M1jJrNzFK1bon4HZJtr7YvgjSLk",
  "key6": "4UuNGsA6CKSetM7uDPdYvDCNGj4exvzZU8g5wQkQSsaZJWzj2yJNYddeX2wZa6nrGJvsXJfdBgbhcNfvp3GWR6BC",
  "key7": "3nbzhMBRVZDAdMA5cHDixb6DDn9X4WLAT4GgkiQ9nx3L9QCcjwbH5FMXAKCSts8UkpoXZP1wVELapgFkecc43RnC",
  "key8": "2uVe9NPNdwFkJT2wHTdKkibo9ubwCEfjQWUxfG72EX6gZStFddYZqcsGZP2sFnBbNyDyWWuK53uP4SA8xycUfTe3",
  "key9": "3WEJxekZ3JnT6y2hcQGKkm3ivgZLs6e5SmRMWixBGUME8mET4mChiDkPF4Fc6dBYqehPA5UNJY6FMz79J6TdQWfP",
  "key10": "4ryFDJyCQYJsVn1TrH9zWPgfXA961rsoikNuyfEUkZbhBgFG9UajHw4hxA6noDr6kTgD2TV4syxc3CX1Q9XGD1Yc",
  "key11": "2rh1ooqy2Y6942FgD486LadQTYBmmepftNmLTJJCFtGyDFCPDCgwtQQkWbjuTjFHWxh7Ta68BjtNwyr94vDxcfhC",
  "key12": "4A4SWY8gKSjEsGfir8Ae9AXQUBgNS6ePHGP9Db7UpWaDV4wM9HuSVwCkwg9gomyhcWFazZ248a1DLsySFUzUbya8",
  "key13": "mTkAoWj8AL215zkUeYCwdAmWVszjUAnMjPBuvvFWZ35aNpgVP5m5GR6ypVYJaSkqQjbMUzL5YMA4AANbKgqMuAf",
  "key14": "3NfmkgZb7YELSkJJLqZoK51kCpcJ44Ts5BcCHfh3u1m2d1QEo8jr9jZ3KfvrqoVDGPAXTbhrRdG8xNFUTv8G1mE1",
  "key15": "2eNRJRQtDqhrwBXwhcYnqny8fFTnhYBSMsq72gVp9e4fY1oHDmr5Cb2NyMaa4jqw6QAmnrdQDCeXSQHM4Wqae5Zd",
  "key16": "JGnhLiuWeYU1ArVA2gRqKq8YkGhTGMeghEqs4qvspeACbUcdEUEXYhL3uM8SWn4QwVVsmMBNPzcfKSCkJsmFqEy",
  "key17": "4kyTPk9jvPqf5yUJ9JPBbE55MrsmGxKQ9yzJuZHzd9f8FyD2ku7zG29c5JcEpspNpWS8SDnYws1SBMNLHjzraAsP",
  "key18": "2yV2dL7QrCkPsnvbfcALaDMyVtj8DZWbd4pbz8bumDLu6TvfqN5PU68Px5AXCbd3z9pe1i8biL72iksLumK8bSZs",
  "key19": "3N2iAZDUAtW3CC4nveM9WVNb7KPAmxNSrv7qxWEdW6XWhPMoVYxHp9rEn9NDoowiCSX7Ae1VQtgnRuQQdiXXDnnJ",
  "key20": "3D5jM8594XoztrCjYzS7G5yVc4rHBVdq54Hb4KRnVMPvxCWyPd21iqkzwHvMB2pGigFQ7DKo375a4x1ZXV3k3Efb",
  "key21": "5xGfmwmryBWHfXXoqR7PmmHEvDRcHnyLfqSBjqcmgfDuTJeb38qnFY49jAx8S7unzR2WsFcRJeA3bf3HcacKgNUq",
  "key22": "4U81zVtwP4w7NtfJ3oZxWHkVNxnYx4ReAenrbxkRKmsMtRb1BBXX4YRvk7Wdo5rFyfXhV7RgBiMRntzxj2vFpEY9",
  "key23": "3LxzpUSyG8aAP7AHAZVbPmxwaeRgKts1DhnH2y2LNMb8mfigQ5oaSuY9qAMBWC4qbgaZtumdAmGRXJ2cbNgJ3KED",
  "key24": "3NKMP36mzobphRh57dVVFwAXb5KuiCEoFPoecRsiEWWA2wR9thkdLdBeQA3A5R9cFF8vWv2xbZNGg8gRhhwfTHZg",
  "key25": "3vKWNpYSZy9MGLSqyya2LnWTuXQHbLNQoeDgS4wfw6GDZKYGVmPuwsKoWn8VLQE97i59psxRcsYwTVEMXqfGUHHg",
  "key26": "3CRhUo7sjX6TeWHs962UcAnYVG3jNn3odkioKeRH7trLNSfg6HaEK98hQg7WtoPXLuGqs2zGNXicKrhJxyWvesa2",
  "key27": "2sM3sXeCwptRhbL1UNp1xooaFSC4V8iAgzUYjG27FWPPcWeYaNoQtaueC6HtHDitxDV2aHqt5BQyWfWgm5jRSN3R",
  "key28": "5HrpYHLyN3rW5hw7UXoWS8gtA4dvxtMEXhTtZBzsy3aNTm7mn381hHzg7rUodwEKZhy8WCdMEUMm2N9eJm126Ykf"
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
