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
    "Br2TBTgiPkt3hALWZHAqqewQpYV13sRbs1dY8rQ2M93RZpjH3jrqddLjetrYyw59bmdzL5ab3wZh6Q6oCjr5R4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNMKjW4pKpRE4rRPHH89o85xxpefF4ewwxFTUU49aNPkHiQ7deYgZ8mxagTTtS73eoiGXQKSu28UVGStS6r2Ra1",
  "key1": "dUnSRvJ9K4wqXLhFRjpPkYHuGxfVwrRkAohM9TngekQgnDcCPWjVQ1Nd3AqnTRPo2wMYB4N54uVJqbjhfV6jMBa",
  "key2": "4AfNrYiZ4jxetN3PYxerpccYstq4FdhUAHkSoChLxyuKJk5C3LVFJRBwFNM6ExtWoEhB56PP8tSdZJ1tVqNUbKAz",
  "key3": "3wZCkK6L7ms4osdNygN86LkRdKCpQfioyEAyZwGPARzhPKBFMxzZSL5nRwYXdQ2j6LPDdR641tjzKeK13yedPbuQ",
  "key4": "52XMVddeNGJHzLChycFQTTS868whxDSM2M9MbDUPSzgNrszyjpAQdbHcKu9whgWiiFyHPbKp2NfYDhZa3AHR5nQM",
  "key5": "36YD2JgXAsVsw1gELHTeQEV5zWzJriT5xfa5vJhHSXVzFgqt9DweHmneHMFXfBeLGNd5FJEmUZNSsXJ9hFn3euXe",
  "key6": "4Cr33htkCZHvEHgdBRwi3EseL3FPZ6ypgbeAMhcbj5exhkNNkieV9Yj2SQj4dLCmGSeoA5gtLMC4xLdnvNkcQNCu",
  "key7": "22bPMsaDG1JZw9tPkSHLavkpUp5vmx3QvkUx6zEewq2927jRbMk2GqXTSkunQcbXdutkcuziXwUsCv97fUx6zbdc",
  "key8": "3qQQLBUdzzrResJb7csA3LFT5jfMAULSHEg1jdu1v44ASB6u1TH18vS1iykS9zy32PgGFCNJay6HovwqhaEJKdyS",
  "key9": "2sPdCwigj76DWPEJRsRYQPhZVr6ECwJnwQjQZrsErkTY2YSqd5ZT9NnWJmbGohNCACBuRsHTzciACSX1QbYyCiAy",
  "key10": "4RqqYdFsy48mPrtWrZe3erQMZrrQLMZhdtkzHau9mWgRrBBvprkyre3DFqVUva91UjCmyxgzwctggZHyZPNyExMZ",
  "key11": "3UV4tbnpr814rCZeXGAergEghu7b8XmCpEv8KfwXPi9dcyN2FEuf1vxc1UH9AMad2Tegbs6uMBxuHv9nuCVwFZBG",
  "key12": "3hBw7ysogfEKsAEfyQ4nJog2VV1HkseAHH3vXnpFZnQ9ocL92GR8UuFdVj8uYufES3VSGtwCSUkKLqEypg7WhqX",
  "key13": "4qRoj9UEwnmcp7EhD5K9nfjuMfS3N86Ms822yDdkxRJnMZfS91NifUZrZfpyTCoNwn8MPppwGEF9N7a5anxcby4C",
  "key14": "2N2XZfNVPkjbn95Fxt5geqcuj4UUkMhHAq3qdCAddj5XDNKETQuatDi6zirU8f2eWsNUK8BnTJPFiDktKDP7tgwt",
  "key15": "5wL1UWgY18Mm4sRgNoxW3AdUG9APBD1zMtZGiCzPJoRChKA36e8r1VwtvMebiMiMATkGPa1CBDPAvQG48tjMu3on",
  "key16": "2qFB7gR9aQ34xsh3vWt8eWUFUfCQtgjEGr7ys2rifiDj4p1BpUAr5uFVwJyuARAD5FVaJrynL1yXwCEBzD2gZmYa",
  "key17": "3nNQXWfPThf7WAuowFYAGSPS3ausckcU6UxBT5tjuHocauXWv9LMW85EhvbyqXSaEaGuUFJCf2YUrvSME7oZx8du",
  "key18": "BpZcTkhSth2fdKrb7v35S1veNir7zCzojAhL9ZMB6MRExVXpnN5JSWwMZhfo1xpQrgBsecjdQQZTBiSuQmrf5oo",
  "key19": "3NYHKagY4jTbPVWrnVa32Re6JtUdFJo9Y7m3FRVo7qTbxDrg1qu3YYNr2tkdJsAGAeGoStX3pcdjCrbrqExGfebd",
  "key20": "5w4udhR1pPFGgthUKN6hwqyEAr3zgJ11D2Q4guWuE9FHPwqUjGCkWuG7RSZRLY1rWc7un8AiRUSC75j8x4sC59Y8",
  "key21": "3KCYmmxLMvM1Da9CnYN71iaDbhWR7Sxe8CGLsYw6VrwHBZSdeUJRWKJEeD7M55KKby4H1nW2Yfa2Ge5RtFUVumPb",
  "key22": "F1VNdd3dFsrEFEdfuMw6WWEWx52wkvJ65kP9QsA7fwqRaiuzQ4RQ9bPZeUyWxgp1hd9hVwgKxUuCY5xeDYufk2d",
  "key23": "2x3ZK6LbUKd6btJycrnio2kRxnNtwXoLH2NyfLSSHtxNaep5VJa5GoCrbHKCPmHSMyVBPUNNL8eU8chhCn8ZFTdi",
  "key24": "4bGZeY6YqPsEpDA9C3GfaPqRqYpJTL9fCpxgWG5zg9MbFernfFVG8cJXT6qcrQKRNzQ6GyKDncDAJpsJwjq2Qpa1",
  "key25": "dS5ZUqMwMfVB7eQ3xQGjCQcSNKvvMTL6qwdsxRTkJ1p4hV6ZBM4VC9CsAoZ8y38HvMXrUxdJ5HwNAEXeDPresEy",
  "key26": "2bPML1k4j5jj2bkgG93v2tBmCs4aQH6xPys1Jx36yD579mfaQWgM4LHmRrkxF6pXTQTgPSJ1P1e5NMqMKEh6ond1",
  "key27": "3JDQf9a7jfzV3JjzhvqGXUNBBNWF9BvAYnWzmea5JkRY2iF7fJdFhPL7TvomPoHLYZ6HEJ8hgNyot3DxRvkoLHnv",
  "key28": "7za1BNekMtXRUrwUpcLNCXrk5fGeGQUQ9se5jp94YbHgmdyirM5DDQ3B4DG5U4xLENVWBrNBPW79BF1jcobtTPR"
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
