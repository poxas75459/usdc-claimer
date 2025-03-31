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
    "4CQWUMUGnW3MVzx8wb3ygqyWNA2wuEo288gGPXGkxTXSKRPgMs9AMrm8UMPGZAeDV5N81egDAU7r7A6Aj52ioGDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rp9oi1D4UaWHowKDgXxXpesj5kkkJsS664DB94kuYSnxXV2sJtiQKW5o1xLJV7eFwFEeHEChrwG3DymsnTQF7C9",
  "key1": "41XcTKmbBp2T5wNyRUuZSNABEHqw4oCvoUeCQC46TdsxGttnFMX3DeyezsHN3wdwxXX9CCVEKhA4wiuNKYWZRnSz",
  "key2": "2tLK53pzFcy13PYEYYT7rTrGz9qAgf76vmzkjSWK9ARtiNjBRTn9hcm6fbmZtLhQRFwzNWF53SMryF78G6psCKnF",
  "key3": "3SAf9ynCF7r674KdYEqx3kVUnz8PqRVtJKBW4f7HSMCG2wmqSR95ciYNrc4LczAdjhgsBKVPByS97UVQBj2G6Crf",
  "key4": "46w2gYUmjoEhNtdY2TUvPnzimVoXvwvsCszPKf5bNhUdRH2UTpU8FoXP7Fd8d4Th5yqmqVf9Yc9jC1xT1RKHuU1Z",
  "key5": "27zcfNjo4awPRp782fVv2tFqeNifYswSTyT4LNm9XLbPKG9s7nrYG9jBqZCyngaKdZykZLyRqnvBFZnqcXoyartT",
  "key6": "48F7GmddfyBT8Zdk86MC53grSfVXMQoS9nAU4wHUVGBaTfRB5QUpoUeJio7w54uZLFQQEScJCCJbXDfMNMWUbZL2",
  "key7": "5wyEh5wWWYHNZLkmCZ3s3JUpsitrJY7MCjY9CBnMoz8wWSKQdtaa2PXVF53sgXSmc1DggVjPXKNQGkw4cEyVRcb4",
  "key8": "3RmRUSDeM7bYvmwVqcoc89D4vVvA7rHFfsagpEnVxQrR4vDyy1DdvLBuTbDYCUxDfqGzG3cjqvtThJqpxQBARov8",
  "key9": "4pMCZu8uKGHm49ewABGttAem7XsnaPYXYmPhc5vJ7TDVuZN3ugZRqmg6RGpPUqRNXMBqekTGD7S28vuJ8RYHFUBs",
  "key10": "45DZSxNeSa1hcowKzY5pHQ9SvHRLamoiUSaBpJ8YMxHYdb5vY1WmdVMyyRcSXCTWZEfcnTrTEntH6TmSpz84xjgw",
  "key11": "5nMWRGP6SYPwDKBFCy5197oFDAKtNptVRMKHgbNPeckZG9mxH5nZFy8azvdy3r1ED6bZCuhjC9mSANm4wn4NEb85",
  "key12": "57sXT79SQTchBH7iHfc13Hk7yTnV754TqL6zJUuMMVmF4rNaWvxyysNo27AJ2atUiRuTcstfxTNmPDNYuHTo3K9P",
  "key13": "2RKrmfxLTZ9qoHNWTq1tUhy75DZ7fcaJZSoY4h8v5M748uewVXrSEv6N4MiDsScA4Pi4Uj78rHdeCPM1w2gQcfE3",
  "key14": "iW2JpG2Q7oVsgrEtvZtquuj6qxsyim6UDBAfPmbmKQSuHRpdQYHXdLzU7KC8NhpBYL93hXtV8ETzXPhNJzPxK7w",
  "key15": "3dvugvhrdvsxrwuCFgicE9ijEeCHQEVa8JJBvWJFF2vCPoqiRXCfcXkqw3YckPHxekiL1MhA3BnuRYLBr8kLNSph",
  "key16": "Ta8f3PJPeezSqoVoGMcrriNH5j6ERrEef1V2BkxzBd8RVWL4fhASobDfyks1kBMqBwiDENL5ktjvaxuCpPjFvYa",
  "key17": "4BS8B3a2gYQVGHFNrsQGBX6NUFmyUYxCr9GYY29RMuNXMV5pr1WiLgGtzVVdivsz8eGteZDtZeSbL5WUFMX5iEzT",
  "key18": "4V5VoMxxoVWDv57ryK4uS4WVcEkaoprrm1DMw4fCdiHA2SZWYP4iPJxtxqqtCQwsWoNLQ1S34btmPAz9DisbNv5r",
  "key19": "2jD8bUAwgzZ2yNo5nLdLsFB85uqfjMg9CW7zoCi4BvkoQPrm33HwhqVA1m4qYB4fBn6F4QbrP9Sspfwd7VqFbY7f",
  "key20": "496as8YNt4oCncje9uFQMQ7XK8aUKvuQ4BVsyMsXT188igxFkDQHJzejJCpiSNYRKLKWNVhFz5GzYADQfzoM6iKD",
  "key21": "kkGJTTnU9mAaA1t9J1NfBfpRyNCVLTV2op8QT9mmSQK4hkNYfYMgdvMihpG9JDKdGVGwGd6XWLU4xYDVVuYYUz8",
  "key22": "fcYv4ovRKV1DKc26h61ry2Pj9zm1yVPspB1P5WT9QgC6pVYBKX57eFZgpLg6WPYnKspaWyK5GHpXQ4K2ZSh5vFL",
  "key23": "2ZAGVrUsagLPumbqXGUb7mVyfJTjbc2n7gDvRNUecJr21knJAUVrjcVGnUBAxSNg6KNDrSJJiCUp3FSTBYhdweKK",
  "key24": "3dEfDVvxyRQGxdxhKH5QLGTayLr3mhnEXfEb1qtvWV7zZ3X8tKNiGXdeHCJ5KQC5GNk4bsf9F7cWrb5Gtv93XDap",
  "key25": "4RqkXrk4wk8LhdL6NbmpBbzEFpmveRVuJg1uFUdBwrmkF3DMwLd336JmuYkE6HQxLgUBv6C476Dsu8xp7KXn3bmm",
  "key26": "4wTRQEFWHRNnRAS14d5BB9HbK4ABtDaKHDC9Z3UE7znpti3UZufoJZ18EUuBCteZcjfsAEJKXjvhnGEfsHAqv17S",
  "key27": "394r6R61txS5qd1d5P6gH3rg8pJz8bDdAXMnCoHuwD4bMv4bbpe68tRzPyrqb562Q8X17MKHnGw3qJvGWecGWyZ3",
  "key28": "3kgAop5V3sRZTthohNKdFcuf1jka34376XqgGPD5qrtBD1oE29xMuCpcnHe9jb51rk76HgzK2Q1X8VJjzRQ9JM3f",
  "key29": "4UuHtekPJLd3og7z3Y8bdc9GSEibgqsZtTXpfve9bgsizGh2RW5dNxUjeKTM4Peiyds7DTBQw2VqbczsRgRYDT9K",
  "key30": "erbRBLjkQTcDJAPoFuAyCjEDBfN3un8uEpx8YBCDokuWFtUE5tBsczPjPHHesjrCTGtyXLvi41wP8UKbwHD1LyZ",
  "key31": "5JD1fqkSmW6Jys2wxuHavjf9zBHZaS8o33tMcYZFZuPNKaQV5DZVF4duN7QXvMRvRZeyJsrKehSSCPtxr8C9mS3Y",
  "key32": "5eVMzojBiFzMS1R6z9SDtSkKf4SuLG7ijkwiG6GzXtxHGd4ijPPrMmZmmxQfpNc8KQJL65nHFZ7PHHXSrbAo6P6g",
  "key33": "2CgWTPiMeJ178WuuYUxpoCL9ahgz19Xde5aBn7qc4GE6dUeyE97EdKZmixsoxXWbVMwiRPdGeVFknd2uqxkvqHS7",
  "key34": "42xyPrgrPFirtcv3WizENG1K86LHgkynpqktJJgpNk8XCQhENGXcp7bn25KxSuKzoxxoeFmJisBkC7gGysBP711v",
  "key35": "ssYs9e8SfL7o8coPY6jTPmz1FiLSUMaoA583bFz1TU1D9PxnGQCLQgGkuNCkhTeEmJU3BoKamHNEMNnYYaiTbZX",
  "key36": "pAaS89ZzXtxW1m8ak8gKXbEq3vgK2EmXcPvaAZoEWRnyTbAbKcdi4D3RBagQ4CGThAchaCY2cgbsEwfEQU6CoxT",
  "key37": "2shzLtTqprCy5pN4CJbdYh9P4mQfgaa9qDs8DsafFq9gcwDRH5h4UwRADiyRV8FK6vzMy9JAqFy5rvEvoGDxA2aW",
  "key38": "4x3hn9P5G37ADvNTJ8RoYqtNvtF7TbT7Xtxm9o2UvkxmTK4z5bLMyHuWCTTw8AVQWA56BhhSmdQCRwo2EyjZT18C",
  "key39": "3GbNdzv6Svc6jewbXB1QvwRPSrK5Q4e4CM6BqzLiDTQ2Yf7CUGR75BT41uhTySh6vUCzrnVaLv5qQvxKLjjzJze8"
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
