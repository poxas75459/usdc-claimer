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
    "5f48nfy6L4Lk7zgoWUKT1kZ9FeWxJvJCk9Qgg3PGZwt4zgpV73DXZXYFrd1DHrz9dQSt4CgkXceRKRFg8CtDNANP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SpuUxBT4gL2ovtawPS74PVNZTXwg5VQo7seoEFFZy9HSngQmDKeBiYXmqxVwW3G4SEBmQCrxUKmEq5bkYkfGQx1",
  "key1": "5mH1w74YTFN3s9cfdm1SLkCT5yMKdNk92jNbtTc2uCdG8s2FkB2C68USuGFkUhhbr115LWuztre3PhrgTVeTBpUS",
  "key2": "pYt1ecZqo8ZXBVQqQc5sgNDWYtuyQKx8a7X6pJrVFMDX4hQMDxTYZyTW7Y7977xnFtgjsy8pUyTkbYcKLYFeLP6",
  "key3": "4fPT6EJfr45GbTtGNosEpNAXCMkYcBGi5djjpQTAKuBG25E5pnCA3pXmvD7ZQ33Sm3UFzy5jyUfFroG318vryHME",
  "key4": "mWZSYisVTDb3rgaun7Cv94pPLm9bPkD2TJzCtpgs8NHJTg27vV27hHCWaKK7xKvxALmk8qCfs5u4zDkKGxvzjss",
  "key5": "5WmLgapDqZSGAhcKEq7GdfAKa37GmXuajbiiV6ExAnuGNrx8VRmSwHY868ksuDsRWPavRLtYAhuymGXuQCFyVDLK",
  "key6": "4fKMJffc9zMpJTDKCm3JZuiRxgQEs1CLWjsfB9CMuHMmcvEMcqh3UH6SxtBHNx9QYKhN7H6hwgxijAjaGQ4vNxex",
  "key7": "5xjHSbtzULzKBjNf5euRuNNrfrKCBiqmMHWjw8eSj5wUiHbcgFdUwLMnXX5oNC1LaUmT6R1JEwDVReQX6WdeVzG8",
  "key8": "5YSHPQhZbb8s8frscPsmr4tBTDAw7EQKxGcBs6xfzKuEA3t56tDMd1aiPDFE25mPL3eVapPsNxsoBpDhBTAzTZ8K",
  "key9": "nuk6cwu1Y9AypeJ2PRoFJbaEeVhCFF8i5qkraWohHUcs5Tj9TnKWJ4EWRJaxfbsYrrNKmvmDnJbXiRWR8NLE6jU",
  "key10": "kaWwJX8iJopxsFr3ZwfKhrTFGSGigzmZvUoBoDhcjzvQagJmx47xLZi6YBMRgW9QnsLtNHzzrh7jrsbtnTfUyMp",
  "key11": "4nFzd2yWfeWf9PT4op26gHNoZPndyHAyvDkSWX3QF9PhNNWhkzmk2eYJtj5naoZJMhargNs4kF9RpUCcf39WQ5CL",
  "key12": "49nbea48yC6dPSDV3hKdjvvoSo3c9dHNhbJhefMMGJGv8jgp4guuZJCCjHSNoMGpF8YiprnSMsVUbQw3vSQ6jLbg",
  "key13": "3NwGdj82RCsAoZcA3g6YV2mmvQbYtWKPEvrBjPR1vdnX9yBe1Gu45gwegRPZFrwU59bWuWsyy2pKQWdSP99eLkK1",
  "key14": "3f5JEPKCb5LzG6VeQAXTJNhWqefwY4q5umDGmJZYBvuhUnWTbC5DbENb66wAv4iAGZ1PHzA6PQGUccY3fCnhtxnh",
  "key15": "3CtTJctVxoUwBDFECsyjnKwqbmVUXHyrHTfb3yhXGXva8dN2tRoXwoPwHJNziJNTDteaxnCRr9U78TK8qZmWrhzM",
  "key16": "35ZpEDXU713i2QKTDpahwSjCoH2JhPWWVUezakAni3xqp9pZbccHWhx35QgNLD438vLtuZBvhLYXpqirjUkgofXi",
  "key17": "4rgBZdxxPtAcFb56XzHyzLuRufGhHN1qWMGyJpiRWcqcmeKrNKCJTbbUjVJDwEEE7R2CBjjH1LSTGgABv7WYDLrp",
  "key18": "61C1LhLz1bxxthDiH1p1dbKpZAtHvekBzaPR9wJnyaZq2YFEbPvuv8zQJveZwHXUpwqn2GeVNRS83ZfqZKKYBQU5",
  "key19": "5gfKmNz1pMmM7ZoiKs5vdXCnGP1uYgs22ucPKrue8UCRhPuWDZqFHu7bB4MnjC6HqwhSi2YUBVLSkBfNzm8CBNXC",
  "key20": "4SiGU7a14hwgLneB6QSPKs8Bje6qZ5FCJcfb85ACcvzAmFiFUG52QrSme25nz4QFNbpEY9NiQNagS3nZvX2mzq1i",
  "key21": "3zjuavHbc9cwTZKxmGSkFUv4FYeLJZw8yFAZEXGNFGpc2fBDbZCFRX13knwaHytJ4JVVACNynpFSZej9tfTwXMta",
  "key22": "nYcfAo21pj3sD1xoCyv37yvVgmz2Ty1oPPUDcYhWEVEGybSZNyXsW8ZxnxLuqmmSXsPkff5a4U28YCaadBtz6BE",
  "key23": "WWWiqnksfDrZhMLfyukTPBXnKhp89CZZHrrjWsXxxbCPGcZnRWg3MvNJfdgQoFmQLKUWRUfLm4AFmGwj3cy7Smh",
  "key24": "5VS7UUWGoZUncB77U4ebwwKGFTm8ARLZtueFLGbiZZwj69tZkEYYKTmGcnQaMYgwUC5nRdSf3HtTSUatSyn4seV8",
  "key25": "3tQYEr11EMJXopndysxHgKHqs6pyZQQM7ykQfUHdpzwqq1hTRzcZ6QB7dHgVToUyf3xhEj1HGdJVu6kwxvcEF4bb",
  "key26": "5vQUwsmyijbtwVC6HGf4TKtHukphawUaB7fu7NX2s4F2Foc3fG3DaJwtPtjnekXRiSDrkvkqYax7hdgtWMpA5nrT",
  "key27": "4fSekbnmFyo2LYEbiBsQdxK1PCxB5uB1yZZzUQt258gNyeqBXQbmdo1UuPXS4QNEpZqidbX5RNTsbXoEnxJwXNCi",
  "key28": "2BSTP8QshmTedAHiNTxkAVToChxCkrA4KqZDGHFqXuDHrxnBptriFhgp51oSNqb93ag8hakAXPfunXDfSoUYHfX",
  "key29": "4yAhhLkv6Z46y4DzDBBVTnJo7uQ6LjKW3tpnbS5YMFKpQw5v66dt5gs4H7NTLo2hJcRYPYudXAswLMQCcAbcZR6j",
  "key30": "45HjTUwJfYnN9ZH9o2wagKuZXWYvHwecEt5H5t7keCYU37oorYeKmzGVXcPHqcCXCc25DXeTVCGTBsZhcP5QvPVR",
  "key31": "3MwWze6gmZ5pZvQsV23LLzhxhZdybqejxVqzv9DBprEyF28hHRMzkhpyVaxZ4v4nZxo7j111QXAvUhsXFrYXiBUp",
  "key32": "4PcGZoLfJx8ABNSxahAn3CB2zBKNd8rXRFQCLAdhfriZhWxaC6EZEniuqSuZSPUgQXwGyZD527j2LKq3H96Wq8eq",
  "key33": "4CWuzwC4nxhizExFJT6QcnKPqwqZRuWsLouehFBwJThw9amWbbyzvJfUD7tVyWr9spaJe4xjdzRGwqp4xQdDASJo",
  "key34": "K6S4PVXdDAjpX3GT4u4WuDfXVwDh9qtb1wknd9kKzNfXhybg9rW1pX1L8c1srPwF2CkyDei9oMHgCdVMkjvNxVk",
  "key35": "3QHV71LEfqUFP8EQq3UBUNHgDYmaqm6o2wJd9C1NUhiUv46egvJEEKfPS4dpGTNSyGPjWA4WDUkgVofeuvfAMTVC",
  "key36": "24g677U1AE3zii5Th6yoEijWFac5i1VvYasMhdjunyoTaw8yJBYpXGJALLSWW5MSeP1hZHk3tnyFRxM5dXYvzaVM"
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
