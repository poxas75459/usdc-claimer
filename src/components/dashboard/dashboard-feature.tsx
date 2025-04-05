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
    "Vn5H86D5dcVQU5d568LpUKKJ9a3uLDCuAynNbhxmqi5QAzyQvhmeBtZYiEM4aGX1UW8MUDCjjwzBsn168PmBvHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vY7ngNQpMg9EuZ87JaP2MsRFEgBEAUn28dCQRE1PaeeBnHaeyjK67v4fv4w7dXt1j5BegtC8qGe5afpAXunhiT9",
  "key1": "3EApGS7JMUyA4Y9W32Tm4HyDdcCwN8JwrTpbg5n85YSKkhuwUkJA6zBagZoSrtW1U2fg86iz8v1xM7mYcxvEsNB6",
  "key2": "5kseLk1VvDxedAMdPK9f2AVqftTQS8TmPkTSYVbEQf7yraKXnQpXHi32sAdA5sTig5VQUvEcdTJUK2baY1dD57Zr",
  "key3": "QzrxpVfYKPtvCGcCUxmfbjxLv9ATbe8pVuUeXuUnHRfdhFQEV7hf9s2j8Q7svDsDfSpoxsHfNxTeEd8qNenNw5m",
  "key4": "i1tcF9TNUVPLfdvXpGTtyGfgRKspwqp1n12P1DyHd18miQNxCbYsthWGYXdUjhSu7fL8we6DsGqQDcSRqoTbsYb",
  "key5": "63QrixnDFbepxEPRUcrGXafwEAWCPkL8PsW1XBYAL1MfAXRH87T3oUoyQyJJRBeCyKMSLdj5k33pBAdYjLZ8onse",
  "key6": "3bN1JrQCqLUpzPb8sz7ScLbYBBaBeqCFwcc7x5HVJumo43F1BBrTA5arDzPEUJ7ekH8puDSfFuLF38sXqsN5tJBg",
  "key7": "5aHsxm4Ja7VDosmg7umKyARXHTooQkXgzjH5G8UZxyeKnYgUirWwfBeW9SKdVj4xmBkvaisBQFuv4i3SotvzFJvf",
  "key8": "3GqLJyHGtisFNyPFPZiapzYEdhPcgHx4GuehRg9WnkAQp77WmsTZgi46zC7NdkhahJCXFyiQTLCQF8HzYFVWv2HQ",
  "key9": "5q4fhJD9jkxddgZp1bvY2oiu6rDyPJgAEpXZEAb4WT4LHuWhrBC2d5Wn9txzdiKsTqUX1KWM8AsoLDVWKboGdxfb",
  "key10": "3MzDFmxifeJg48EJo9uZWx1zgmpQz6RFiEWrFCtiigQRsCdSSMivGrtSYYc4wtRKhbud3RXDnkMGnfuYnGybFcHw",
  "key11": "2YYLKKk11c79azwdDK37F3dnYJdbAuTN7TMPkQyhHtuokKjng7krjdp5TkNoxGGSExX6S1746kpygzjJwv7wgeAJ",
  "key12": "nLNJCV77ti69Anna6Djbxu8V3SHZHxTkh7GeLzdb66A815183NTbWyab7jEdUNRiAQUd2C3La25hw2oQMmePNqM",
  "key13": "39DCuubnYyv2cPnnFNtw7JcNFFg4btSK6RAvyE6cP9kwxENRyvqHu69SojpR4VEq925MkQa4YnakxEwem8QybNpp",
  "key14": "5Ex26NncGAEjGU5jDjp7m9LRu2mCqEA94Z4FF1gMkJ7UksZXHoAWugvkmFRbq6BBYavtatRX5MAM525Fw8GPCDNo",
  "key15": "5DjE2g769q2jQcgMaBuD9Ky281L616Kod7xtDqcGxpJXMB8VgkaioHznqQnemZ96ikB1LcNTEdWdE3ZEJQjFdNL1",
  "key16": "5naH8SBSV5j2jmzzj2x5ncWhqq444gqgdpLtyCZe6hDXEMdM5JmDfkhvteSLwmQeL7XsJFfqqLBZg4bDBhWLWeNo",
  "key17": "5UEai7eLVk6D2b654Cj7V186DTeEzRLt62DVyPDbSAtXSLdLTJnLMEUefcqmrgAwUPxffuC2wcneCTvA16sVF4Tv",
  "key18": "5Fy8sBZVJhYcH3wD35wHBu2Q6dtqWbVmBvQKXeGGotqZq2XC61tmHfQFdGwqrUxKYuputwdB5GXohjriquFZvGpR",
  "key19": "FvWNfqHn2eqVBAD8Hn2HL9FV7uk2Ti8ae3J7FVjkMY1aRzd4mVMeiB6tKZSHd8DRPvccpiLHnpKbQEhwCPFS46D",
  "key20": "5PBzLLfZaQMkvTq8horaf4u2HZFnvUyTH8XBcrzr5vdxe66iPuPdnBA43emQkbBz1f2UCgfwMRmCC5B69hvSLx4b",
  "key21": "YUqd3trdg7XDJFX68WZJzHGUh92YVK85aHvno66PRj7gsLdvYUfbNzMpnC94tk6nRqkuKurFajTyxvxW3ZDKh6Z",
  "key22": "fMAD3cnSj2i5PtNtgxevXqWQ4tnNtXsMoMtaHvBNUcNNr1gcnxCkb6SXavp75ojSc27qLbJom9ZJKW8kWCnRmhr",
  "key23": "5zaUnLhsUwMPePniBzNGLVvbu2qY79LMTVdcaM1Psix5Vj1ixJj2k4G6PPzBvStiBcigT5krwB3H5TXZqHdQFz5E",
  "key24": "4NdHEm1WPDHhuvq3X6HbX4tYgFiyTBZN4pwWevgiXKqwNBjoRzHwQTku9ddB7uQQczjs3yUQhihduwZMLrY4BmYj",
  "key25": "j9sQDSritWQgtKMF9YeLUKn2Nv1f5yuhr5YeGVLRWfjFdavkLhEXx53PkK9itMdJTVSCaf2QBPVeozmyukACc5m",
  "key26": "5voteytwBg3R4gqsXuwecjtCxQTosM4kgqSp9cL6k7cqLoUrVTwaA83pN7CXCWkLx69e39rcjgkJZsGQWn8RMZt1",
  "key27": "2fnuFMiJKo8i8KusdarDHRoiF8kfVE6NhzDXvSZPX8XyA7La6RSEmxVNSnuMzqeQsFhYqg8kuYj8rLEJ6iQZp98C",
  "key28": "3v9vzNiXwfBqeRWDBMHBGciQYC21AG2v2Xfqpo8xdrWyQCUMaDNG9ob8wDVsYKD6qexNzsKFd65cfGnDUQRwxKYm",
  "key29": "4mi1Wd1Pw16WgQaEu7sErkxbzxY5WDsws1PUDKjwr1WiMYXJXjFKHhCEFg3VccJjBc5A11WVzRUuQs2GqQqio8Hw",
  "key30": "2PPwiuC33Gs8LfxXjxNmW5VnhRR4Fir3sZ6tyavDeQRCqXdmR6nLqzMvpEMoSu68hXeXLiWkn3fonmAgoqu9regw",
  "key31": "2qvWP3hbK8u4kt6NLMRL3fzT8P2Nywm6ykJ5tJEQMmqWoCPyXtZkrR2iu6R4FXczajDnLC4qMH4k38Mh7V4pY5uR",
  "key32": "4i2a8xiq3G3jVHCu7hB1e5SD4fEidppCMAoiP1wjA21e96e3WCJY7D2XjAxDbDKCKMnfgx34YK3noztTg8KQeDMA",
  "key33": "5nvv8jtDpt29kTG2u2SGz8ZcHSn91m2kSfxxnTaYuffTGPKZ49ARC1fuaZCuvVzSQmYwGsjVhifjAMNPakhMoSvV",
  "key34": "UTaLEbav7yoyxS7HWsSpvkehUXRvYKPNtGsofpk9VKmWFR6jvr2XxLkmgpgVtiqsQt3oWVrkDXXVabpMpnhpFgd",
  "key35": "3Xh7kzjs3x6aFLfxK5kmyhCw1tCiuf8BXuHFn6K4ZTuu2hAFchAeTtLVWEG9n1vx3JPYy5Y8fist9fWkCwuL9Tek",
  "key36": "5PdzfCSZuHcXF1L3BHheam2kJRhFxHK6ypsNU3XXFeLDtRoxJbiJejpZP48GJihCfVhZiJWwz9espJ3W7yfWeELi",
  "key37": "24Det2xV1RAjGnWiqGQGjp2WfHYQRm42m7VSmjYrdCeQ4Sz6rgRvpnugXyE8nQ2T4mykGJLJmvaeN364tBecbU1U",
  "key38": "2Mau71NsUxmfzWeJ6T5EdouDyuAf5o5AS4eNa3azt8dhGKsjNyGVt2N6ihq9TSDwNxzocBKjVbt4fHv4w5oTzdF3",
  "key39": "Mshu6M46JG16SkBTHAVF6PGZNgriLkHskTcq5N35T3RcybC331rHVn8QCV2AjBU8v9i3iCeEnPARtZx669DN9YW"
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
