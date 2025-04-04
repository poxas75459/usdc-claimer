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
    "3NU7d92CdFyZkboF7Feze2BDjy66JuTjvyyn4CGHkvTCvDfTgd3CZwvVjw9SR7bbBofHEpnCQPNzSW2MSwJv1rRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537uYxSYYhfzTWRjfUZmBF1dzhTF53fGHhFA7AUdZ659pSNqXY8J2YAridjNvQD97rABEqNt31u6whmTRKACesDq",
  "key1": "4B4RJtq2ryiatQu7gDKF4f1qe1F9GcqvBdatB512X9UTEmmVQTroFBR5dxXut1R5p7Jt5TxbPtGwMwGHMKN6Nxff",
  "key2": "3E8jcqCWZ1exkfXQAUktPavFEHB3ZSbXp3tvvzLGTVy35ji3uVCSUcqKJ522ytxJrAsQyA4e5XMxzUd9iQBbUtkc",
  "key3": "3nd32KVsv14YH7aqTCD2hQcwqsbyV6dYGAdefUPExPeDfv1hqE3WBMXiQo7QSmPSUugzQwnvq9czDj9Jc8q5zu43",
  "key4": "3dmDqRY67zH5nuaJ4KXbj8QkuVmhQvyVY37CFdTWc15aXfRAv9sGDkNXvT7b8qGUQ8ooBgfYJk3wGbcGbbBMDaBS",
  "key5": "3C3bdqzL1mpPsoofXbF1oKrJ9MbGeAbbffnwZDV5bM4yUtw1Htu8qAfzbPwanFamYSz91QRuHnvUXf8Uf6Q9WuVY",
  "key6": "3CM3KDQ6NAwgdDpWudPUNPpzYzfyuGdyTVQQxCaRVPTqgGGXzuLRS2Nop4dqUwH2frR4qj4abWzwt54A6Q2RQCeZ",
  "key7": "5Xm54rgQfBnrxPutatR5tp4FvVZ5hJngwDcLkCjVTb5d8kJyPN6N1GufeUgVk9c3hQXC87AzPbndXCE8DLrXe1Jn",
  "key8": "5zAgG4rg3JcfkUebHUZwQ8cLDEHhijLpjaTaoEzZ8X8GgSwcRZANNdtKRHyNGFvDPembz7uB5BwXSTj5NjoxXqhS",
  "key9": "56osTWvewpcdd2gJErSDaVkE8B32GxA15iTcKJP1kXinbL4zMvnaWn4Qb2NGDmTZYKACEpCCF5iJrNduv4zeUqea",
  "key10": "32nV7a7ASqu7A1kb4js7fHyUxCoAqksr7fk8rxkTfc6KFrNbZ7XwwVAtggx39F4JZdfEmpngmuMSYWNytDok4sbL",
  "key11": "5K9dybKA3sQBcmpZR1cwjgSFEwKMpeKymXcUJoBaNpYqsGyD7vVQAhqqNAEnqXQcj9TXzVsTRf1HuiiUwzbUU5mW",
  "key12": "5ZfYxdKEcgBu6KaNTqr1UHtRBryXDaS57hsL5JF4TddjQXjgk2Zr52abM2SykdwAvbCRcQ8h4pLuVN3SuWv69y9n",
  "key13": "36P8HE52gqJTezRu5qu8RKvUP2hUus18yKF7umqRRt94EobnF4gMHNxVNr3BMmU3qwc9tLC23Kpk8fwaoZMsHk16",
  "key14": "2Kmk3VmWusDvh69yNhg3wJnFHdtTmWLc9TAZsh2XZEVTy4rA9odnZdx9Ke2jLir5QucfUN6p4DvEtk43jkefrjE",
  "key15": "2eun4yBhjFLY9cYF19w5ZCm614Y5HE457jNGA9Xgdnyv2nQxPdhzJgVhXh7MT2pXRYUNRdgqHG2ZxErpfCZ9X8V9",
  "key16": "24Gifz2V3mpBvaSX64X6jELaQSMVn6PbuHBZAmmFn7hXxqvuULP81LeJVFWuTcaLttbzY9eqh2z5F8StQe1AF9cE",
  "key17": "2yFdxXQPZWnAyrTzbXPdGNsYimgx6moxZLfBTVqnM3AvRpxL4fm7U4QmmE3BSH7eUv8pbLXurwF7Lv6huC7kXCeJ",
  "key18": "3zN5xwVxGet4bsNbNJJino2ZUGNNNLzH6xQw6SDTLozWsyt6ZEdQTDdo1fWPBR1fgXNV3dVnxL9bPpDvJu8GZcfw",
  "key19": "4dZwbgsJAn9uwJMw18xmLhXVj2CcaBf4sxcstbTrm5N3aFSE1K6Q6j15ApfdviLSQkbiEiAGpZkCQGCJnNC5KRSN",
  "key20": "2FfsMbYL1X8sb4cx3rGEummkUyYU8omSjeQ5euZ5u4nihrCsyL1HeD8FazLsmBFWnFp3oAnWVp2MJjyEugaQtPCc",
  "key21": "36Zha4siWrhPgSzdDi7poXunEEPjevfVGRyU4h84XD5Bo8QaHPrgog1YzGu1ieSBUrCTmP6xfLvkqDeSgSsNryFh",
  "key22": "2riHbZ37nLBhVsRkgFMGDiwAPaWZpwd5xZqn53C3G6EJkzbicx43K8tCRGm67GXNo9ab2UAw7EREKBHo8N8w596Z",
  "key23": "25ren8rv4WWToCjLdoJELTAuKrUgUv873KYLofAiuVrkP5CpLo5Z6hd1gH3YhJ1M16BghLYQumaCFc3EzTUUuwou",
  "key24": "3zfTQhRf4KH7fbzAkTyqFvcBm2AnT1voJFVVJPwCN74CZqn9xFZpmiDbDUqpJzckxpgroKvt84EvfUajSLmcNGE2",
  "key25": "5PxbTMzFJuUmFH2j1CMQQdUrUhzSTrPp9Zp43X72yHFBYXNU4FFdXjfWxhsJYQtewokE6NMFMNgAQcmgy1ADZjGH",
  "key26": "26wbpJvobTk6yPUJwRQAi9fvDGH3VKfDV8sf1bnPku2EKcvMH51U7R3bsw6KdpWriWGNFZQE2oazFUBE4yBh1BiV",
  "key27": "56ieczd8Ss7a4BFnnzjU1x4tqefw6C2bb5sZJRK336ZB1JY4PUukEvZbtYvmYN5mTt45ji2WvYvoicFFUXDXbvTG",
  "key28": "54UkkCp6q7BmHJLKBZY1PZSytMT3obcyENctVUJKLQM2P1cvnr311P5pxL9rvUm8P5aVg6G4Mtuhe4HLytymCjnm",
  "key29": "MELfk2Qdbru6X5S9dYDRVZ3dy9STuKubnaiuUJurxShPJvpcSpqrBNM6mbSFVsLJDPkS2MVzQWZW9fTU49p65QR",
  "key30": "5evHyK1S8cQNsQ3w4yPo3tYfM8zwKmp2PS5GtuDbxmgo9pRiwyd4dBRAreKF1pSueTfW6AJWhVsWrM8pXr5gbkYv",
  "key31": "2M87NfV4sJG1oFHnbis2ZEJThUTy1Mxps2ZUhoqpB3HuxucByPdLbZJAptRcj7vwH8NCbeNgUxGxdWiYT1fGuVXy",
  "key32": "2NapjQPicXoLRJQdgC3fkjmJEDQA4YGZbBtS2BW8oXKVm2eYc5dzyt8cN8AcvDG8JG3Zf9DgKRW1dCDYaXyxxgMG",
  "key33": "5EBFbLxr6QTNRFyb5MMYDmPiK4h2XvUJ5RE4LDn1fj2oH5uBWLxGBaMNWTQL2X3jKq7NYKPzVfrbfmwVALu2fwZP",
  "key34": "2Kexg1uJ6Z1c6VRNMd1sjLWp5nAJbRSmVnfHHGx8Bpp519TwR72awQDRxrH1ztuCpjRqgqGTYWdJUeBzrWrBvE2H",
  "key35": "2xySeYgsYBoZw5Pqn4VHbWRi3Gs5hQMdaNdvebUXoFUMDJscPR19fXu6S6snJbnVBNnSH96Forbt9SaXwcuQRkZW",
  "key36": "gNjPGgmzvYSorWbMzQmsLmjYZGGTMrafaRkJQhrUAWAv5K6XK4azyFfcCsn7u3E3YeQCuvvQtc5NQipAw9VG9vz",
  "key37": "3rNfgP33KxGsTiFRfQvBQCWSAScDszDytzbLST4tqG2sRze28R5DpZF2ApAM597VjmGKCQ5PSDNxuXdyaVXMAAFF",
  "key38": "2DZc4YaQ1b3V1UvSWYVYc1VxqY1ZZyEbvpT9nt6qCrstmi7CkSqRLEJqpr2t6E1q2bpAeXoXt79pyVhsNtufacKn"
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
