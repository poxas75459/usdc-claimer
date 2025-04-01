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
    "3pGPyeG9HoRzWwHxEVbh5Jq9CF3SvbHuHfnxfARs9jxmnwFZBaDwV6eLgYz8GhTYr24swRYYMauqCfBkHE38b2R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2SyEwXkY1m9bCYSsZ4wFk6NMFk8DqWD2Ha3UoRBsBUAxBcbSG2k6jT2jgyesQkgiftejjKHakRkAFbA8rou8jU",
  "key1": "2jYVDwtm5PiguYt3XKjamd82ViRKdgx5sZ5KCXizWrgrYphUVTR4QkTHyUerUPvqEsjg21aCEQqnjzfaZW6tVXNx",
  "key2": "5nSiM9qwcLYRLzZuqC2k2UKFRS7WkW7CXqg4FujCDUFeZ2pEEKT486KUNtytKUpAieBuRCgD93xvej3unHntY3TR",
  "key3": "2snKGtZR3rCwKCXEuVWEhSSsDqXgSSbefKuyqLwqnVLjJtRBZEQsyEaNDRuxV6RqrQCFDEtTW3rg2anSWcHqZsV4",
  "key4": "4igdysmS5BfDUpCqmEgy1iWp5ydZYN149dwyVyWEmbkr3EmmwZqdYiWzRKQxtcNfCpXTG4kijY8KLJznVmEzQk3R",
  "key5": "2u7yQvpdD6W5eveN8EqsPLpc1Gf8TPxqpMFqJaYEdBy7obgAAWUkQXtUHt4A6x6YVk6PcWK7Y2JEBf4V6HBS6DJH",
  "key6": "2FNkCEQPicoBeZ9jPx1Hbep9JaS3dA7NVoQz8tbYtb6G9ccPk1NvJZ7BpMGa3qWE5hbazr28VrrNddv6v88r4Qsm",
  "key7": "4gqC9iYdVBBhBbbpyChPEmzzNDBPQ5NHapkZipEYjR6wHTh2s4YBXCjppV6AgGx3Pfr4zEAkYF9EEYVMpLn75jf3",
  "key8": "61PrPUtzz9xXja2zEPZXRqVsWRBA4vyjFTCTkRAGadD7EPsH9XHkgv1caEMM3JUY74L15wD7iCZEQZry2r8UQ5DT",
  "key9": "4KkxQB6D1j6psGCUEchzsUug9vHpUnhnD4iMMn162W4cUEtMUhAuaH55hfgfd9gsgFcfRQd9ftrLNcdn2udjrN3E",
  "key10": "4xQGxZ6Hv84xpGLuoaRajw3Ksbqh4zkPp4f5Ltex5zKmiN7mHGb9G2nvzYGgbBjLGhhn6g6cXnvteCqkNfcsHopW",
  "key11": "1XEet4KXkVDK91vXkeNvMoM9ZWHfzmPGcGyN9ufccpztXpGuuq6Rxn6b8wzwJ84GbmcwgUJ6Zs7fwNvnjokXMEf",
  "key12": "3DS12fWDKCny87EoTbqgA84JLoxFUWSqVyY4XwzYZbbKHoA8gGBKpRPXufzSiTH1DuYhNgoqaTNFVjUD7gqPgq4w",
  "key13": "5nn8hGqtWyeyVFVPLK1r1roruekb6wYB4Ezr9A6kMHD385Korq5ERJQWDGtPVKrJ53GixxiM2ikLS4iPb2rNFue3",
  "key14": "64XtEUQY54Qc3pxrPmdNFsyqRp4vgG1iKnXTswnnqn2cMrn5VCF1cexwsbNn7ZK5MsXuZ5arSP3HqeoAQjgUdFKr",
  "key15": "48jr27itKiY1vArUzPEt35b7sM9BmWJ9Q6gth177bG8mUyJgEF4dZwmyZG7jFRkEJWRbNCD9gRq1zzqxsYnd5Wvd",
  "key16": "64g3nMZoZycTxn57wLmap7Ut549V2ZNu33JCU1Ld1cnAWJDtg9wF3nMdxr2RoKgLrSJ4LUZucAJ52hqjEUZVLbMY",
  "key17": "3XJesB76db89bKJQgwZ6HwdQ3qBUGTdAqhEevMKg6cYvrqEfJY8jgkvGPBaeSacuNMeu93FGbtENgLXrdaf4ZH1s",
  "key18": "2bQn2ieg3zpwTmVUyuoj12uib9T1fSNhj3UBYEzAGAG6CPKbMCrjXF1k72M6pYHtoWT9E2Fn1yG1DRVKRuyBrTyJ",
  "key19": "2gjDUHppYkG8Xy5eNTXtYiJaTvwforxtjFnrTHcBqcz1S6NFcKTCs639R1dC2MZS42gq5wzvGzJsvorJcaEntHgH",
  "key20": "28cgkYW27QNdjngcnVg3jbG99ZSzwBcMwfpgqPVHghJPtPuDJWYxKsJAsEcLrK6CAGGACYNDSA5yae2CK4eWs4xn",
  "key21": "of3hxg54UuxQ6oxq9v5JLswyzQDLRAexjZkee8LnhwGwbULNdFooLnX4NAiBcj9XaKYVko1MM2fMaBxFm97kzmr",
  "key22": "5zk214gxZXEBWJPG6uLDEsEiUNbJY7J876UTkokUxY8f8bBrPfJNNAmPjN95zq6PhE7eougsLivcAu9fsjTpBuVe",
  "key23": "5qW5h8mKUxQErgfBjgRZA7JzfMgxMTkBros2X1TCotViXTFsZz64deApw3qpkTiYNt9tVLmkkLhpBwPAhqBv63Q7",
  "key24": "2ChHQ5hWggxkErNGseSYSX6i15By4kWnhmnY2gqb8GER9TL67Jz8B2XC7eG5Hz9AxZ5WUur9rMTgNTzNjtKNqhtY",
  "key25": "4KtK6EFomshgH7zVgUF6n9BdzxazYsAYeDxLKx44fcMf3VjErQD6MNX4E1WSJC18NWomHxgvgesQ6bbPfiSXi1CC",
  "key26": "37XAeUvXV8Ro5RNjLHcSPgh2GE8Pz1KWBAYJEZwuAARCR4VxFQKF1RWufCKw8r2Zb9onzau5iMLnu18f34HGJoCM",
  "key27": "44ExF2MxBMF2WCz4KbdJaCsR9gZPLNx4AsHFMwfttjYMBxDeKp7jGsEShEcBq2EtCVLbgyR15C3N9gE2v1dMDZXg",
  "key28": "39KvYisyNAde8byKFgH4mjmayQspNjUzVwujk7VHBLZSDn2yKwcN27HSBGHoHUvxwwZHsSQxPMfWbPA8w12CQAG",
  "key29": "4H3Z7YcPbXCf2vKJgUurUZ7tUNZbLRdaeyBXD25aLVTPSGJncjsKHiESmaDVXMe8gKwMvPTRn5GorkESWGK7GPh3",
  "key30": "4yyFrZc3SyB5rs38mbxks1Y811ZR6p9VptpwmuXkppKMScKoGg6gowU9WWf34oVmeHj5vfYnCRj3cji59yWDaGQA",
  "key31": "d5tUK177v8rRMkAjxRpqNUQDBucu8zrVhrjv3yVSxJFbPfryFt3rzpxgLQwVxXCKdZy7iSyNg8T3pjYVQnKUkii",
  "key32": "5vdjk2JrZMRy2PBGYDhuGJGYyLHw3RBVEgJYDDNFk3Ue29LRFrnUPQz6tnY9cEdaGhw6c1yUEUBPaXegGKPYfQpZ",
  "key33": "5h3AuUgGW9wGsz5PnQv6S2LKRv6r7obMqphoCyernRrT7dLwJ9PLJSyxoVGmDRFsmeUXBYMRFub8EZS8n9yDjykS",
  "key34": "2gv26zw3u8MsUYTRzeKLtn5ubWemBmKxSY2toyUKKbLJPjNvRMRifBPJtmXkF7UrFAJ4yEfVSNtbpXDoSJij8Vpz",
  "key35": "4VEbjxvFh3DtbLhRPTwPPzNMUubtthEoWLgjXqk4LQtgsf3pVsPNkxCjda4twwRUoSFDUVKpkCaeXmRsopS69TCw",
  "key36": "2PUVJa1SfGhkv73qUFEcHQm4fLWxLcfaKgiwYYAMt7KYsKm51DTf54mKrxLndXVVpixVZUTC3UAVJ2x5teNr26QR",
  "key37": "2inft19Mq2stWGWZjJYgWbaZCRtEFGShkQ77S24z6SNziHcbpeFZLgcqXi88cJTDnMb4gmzvXkgRKkDVLJDgi8eT",
  "key38": "uWa3Q2ggLSmZfXovXoxaPrLPtZJ8rwZjk5mXJh7PW2pWa5mtSLYX4yZFqQEscPPftqwcY6Wz2KeK817BREiUkQL",
  "key39": "4gNyRSgMsh3gPwQFBm2boV8A9hLaMSkCsqjPqQvqjbz8f8uJYtnEHvbW8f442ZCRgqyiNbroPQjCb5yHkdhJRnH9",
  "key40": "47ddrLcjQvdUzSELH3awufn1fUkwTfTVZSmHGhvouG7GL7J1zN4FCmqscdxUdahEmbK1bS1t8me5iTxS3CKswHVy",
  "key41": "3khC1QWLqcEhEtM7qUXF1wZEdxxGLAWqCeMo1kbPRfU212f1LVukRqDifM16Zxxv8Cun6BxK8Js6H2L7GVQ7a37a",
  "key42": "561bjQaAD2TeLeoa58ZWvHmfJGy5GA5Cn2CJAgFC8hjvFmCvAGHd9i3T3vRpCmNoQK5BjhocZ7sJyVQvFLkUh1XU",
  "key43": "5qzmUbZ5LF7Bfe2Quj61fcM39kx4vSRzgby1Mzvu7WGmYBSF3PqxZdc9s6yghWWZqeCvrSzzjkmEbwmt2Eq2cwwT",
  "key44": "3KSr4uwZvTsJBWKDWx6kbmR8c5f6Fh8jhuduDTMNEGaLumhm2uD3HsEuo8TqLdczrMpgfjF1mnH3k5yRZMHYUm8Y",
  "key45": "4eBXdZXhzsppgrZWWTbRiJ7CjE18fENaZvKnsyrMHgFttbgf64A5sdsF88W8gMZyETQEvpSrTFBXdzSxRvbavgPT"
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
