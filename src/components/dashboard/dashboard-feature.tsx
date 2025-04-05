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
    "4wdKUxb5xXmqoA6yB4Yy7VfFTU2uYahkoUfRmYRHFDjRMF6KYb2kzqY21DwnS4W7TwHAasAtZyReX9LjsHM8jLM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKHwEiWMAfe91b4ovMHaFCwbpCjwLZhPxBPTisKNiMHXL4V3Z7oksX3TqJKBF5psMAFp8iF6Q1jUuMKb2kUvJX5",
  "key1": "5xjQgMQ6G6nrLZckfeHprrPovWAcE7CWqjUq3ijRqr2wx9WY7xR5s5kn3PicZrZ5QzTik9d5D8NvuihvNa1QYzgo",
  "key2": "42FC7msYwGHkLQ2M1HsK74e7NXxbMS3jQz8utbc3EDaNcJwnMZ9r5fEfD8r5wLY1XDjCzmjoPVD7nmyYbRgoH3UW",
  "key3": "4ifbuEtMfNujUbMv7DjecN5HAgGaggGe9Ap3jUkyZcnzGhFzENciKuB2kCWzfmCjLawt35cjisUnWdHBHYyXzqbL",
  "key4": "4Lki7eZU1zHVwgAdPF7mSVBVWgS9GkqnjKjL3iirH3piMfZHxCi4nn5w2R4jQ6HZ98PeiDZJbMDjSx3sbJh6f3wE",
  "key5": "2s66L8NsXhJFzGbm5J6ziaYHVXevCE2kZQHZJaX8FzhdGkhoPvGFGqCXp8nzenJuABivNYewqwXi4FyreGH2HMP2",
  "key6": "2BoNaZBby52t4kL15Qmdngvfpgcm1S5xj7if5mS71HBi2J7n9twvn4unDS7LgUYLAudeVzYYiRj2KxQq1QmYBK8z",
  "key7": "5vNFQUExWPWN1sKr9ws1rUKZx9gKiogaeJ8w27CS1CarHZhPBB612uvcoRj6iyS3GuqHSQz6fsApnYojW8gg8t9s",
  "key8": "4mScdskPxNt6GgxUyAt3sGVM2DTVJgZoiCsz5cU5NLFUP3h9rYCwiEU1YrWvvFK3z9J3mSsvzN2g5z2dvsPcEoZJ",
  "key9": "MNAo1Tw5mzvzmmsfRYsHPNYyURG9AUCWWcuarfy1nxNQh8dvxLGZJ3G72hJv1CDdpu71J95WJvmygv2LVaRFSf7",
  "key10": "27WHh1wLrFyL9sNrhDpuKjKDCpc2H3kiSTV5kSjYM1JHBB4AVYbtXaVSwmyJq4Uznv13cvKucXwtNVv3YQL8m9rp",
  "key11": "5wztnCG5MDGryNcjU4j9ieN6uVbrJ6mLd44JawQqeP7LbLen2fYmD3vUvMmFP72rFsQ69tXMg3vPj6uxgYSwSZpM",
  "key12": "4XzssW3pxNz2t162xMdF8wuHq5DmyUCEwpkWSLRvZzmd1VcYFpmukrW3JfJvSRmhNEnTUR5oe5WPwWfqdYiG1BAV",
  "key13": "2TgSP1uQErLoW8mwHsWwUB4uPgwhFP5zbdsM6t9nrrR5xMyFtHrWjBcsBjGtzFg2WDKkNf8nKtKGWJYk55i53sTj",
  "key14": "sSKpjzZmRCapE6TNUVRpSsezTNLHULH2x6GK1FrUWLTEvGacq7JD7o2Kc1H8YMbHNKoWfbVGnGebHetfjGjA5pu",
  "key15": "3axGfzEB5mGJuEBprs1czMGdn4ssBpKywkPFYF4DoGeaKhxxk847qrwjLXcWdQsM3qfYrtmLn4ZFAw12jKY3oFNc",
  "key16": "53NiMEVQCcFqLGk8ExzyY5wvpH1qmytwodcm5quoK8Dg6M6HLYvsU2yzAzQPVNjwAi5SEKSfG4rjEnt4Z5g7FHwV",
  "key17": "5dZ9s8u4JnBQsdbSKgRZxCSyso3EJyNzRCkfF9UpZygAm6fNc7qMH3w9o49PTUieR8RJEBU47X5cnVZTUZsDCuR3",
  "key18": "LgRFiNUDafh7ckDMxje1L8D2QfiCBbbc6DrUNCvBBPXoMdVqh9DHB9RaGLxXgw2NRn5UgfrdvTD8vPCV8AUfhrF",
  "key19": "43c8z26Ypa2yBfST5itx8FGXJoeQVSv3376my71VwUpydLa7XksKPRdMNH27t9NXxuU8gSG57nhQ89VncYh8ke4p",
  "key20": "4MJ9BrFJu9ytKGLfQiwSMVHdgXisjxY2UwnJWZCBWVPsjzeai5iszY4ZXY5xZkQxCRSqfi2nuNi6NQ4ajjehCGxs",
  "key21": "54UJJZxQRjyYV6KLJJGrvpPuYsGoRH1CwrTTLqB2kzRBgB4aasJrCVHgkwrmi5JzTNvR9cfh1xsoKwRqFFXXyqKG",
  "key22": "53oob7KjAQ1t6MeULusqgUeXUgzuDYMishM2wtEpFAL51TTCAMgtbwYWW8vnBg28J4kNjGpEGHeYXi47q31TSQ6K",
  "key23": "5maCNrJ74KASA43Uobrc2A3WfXXhQ3xmo9E9kEtVVWqqhcCfofnZ4uEwP8cqhcLMt1MgxaKcSqXTfTYbVqnTYjgF",
  "key24": "1eFvzKRkvziMqSHQX1PsPu75C9B5tGzu6Ui1HzHcWnxmkty8xMM5KfJq7mrfv2m39iJXh4jx4jfkWF5N1EzNvXh",
  "key25": "3kTW4rYgZ2xb7n7wjKQjknakH61vaDbGCxNYFhuCdTYPFM3Jzu9CMhuQPeJqBaRyKJSz3EE2NTNDE1EdmLooPive",
  "key26": "Bd89y2XiBUMyzBcmzFeTzWVFAi5F6axbMFnH16dypSAdA4SeYuycQQLyfybGBAYkBtApf2qeTkpMoVDP3uyrBfd",
  "key27": "3uCFfgMjRnPQmmqzmiUZVeFVsFeQuEdSrfw14mqrr6H5R6Ey41TJWDNecCvvCV15ou9STYcQnJFx4GjPPUUnn164",
  "key28": "2edTCjf1BBvptfPHSCmc5CGo8dV5H2cER9NVHmjPGKuxu7jDebRLKFereBjWt4kJzfpSsZX3LeL6NMeDNZbJPA5V",
  "key29": "48FzLSTaSLKJoz1SdkBbfd5btxEbfxkrnq8xjymYCzw3tovjhuTFPjux37DajUsEWiAXoCNh9UZWhQZks2asKmxt",
  "key30": "5J4YeQ4iaJpJX82sS4NG8jL7svPt7oa23y7fQAq7vVHMst2KMeVWgHKxPitAKdLTrMcV4ne7BLdnYnf41urdJZLg",
  "key31": "4AHshkdRaGLqfguWTeBv7B3hZxThEcEBhLR9gGPqNUih8pd3WuyHdQtmVwSA1aQTHRBcSwwSr3FvTxWvYB3rJ2DM",
  "key32": "3it8bTHsPmCA3WtVdnVwsfCh2ZfbYV3VKLAJPYzNVs2kk9TB6A1STmdcdLJNJYmDfcTjq1EtYgkypuVUzfaiBggk",
  "key33": "5tgNHDLmPmKg98GaDSpyc8ThwN4E1ErDAiVjgiw2UeeoPtm8ZczRtp9MY9SmTkgf64Cp4oK4ezS15xuMQk2S3zmv",
  "key34": "2bJBXdzf4wofepcapPcbWQ7TuhDqSeoeoz3LW3MQcVrHGMD6DmRCEneP5R7Dey35N89pv7B7gJ8aFTLvF3n4v9k5",
  "key35": "3KtPnWCK2PcM4bSs2bqNqvqYMEhVLir8YNU5qqoXTmdBT8SJHasfjvTj6McGGSiPCKU1zpVHoXmKDrV4LNmBPc76"
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
