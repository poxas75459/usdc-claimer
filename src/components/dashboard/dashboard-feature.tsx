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
    "3B3cstMZMA8d9rw6m9h2uWcEFcNkcJKTjvjo1WBFD3BdxTMoJzwBxagFXRJS4LksdJLYeGeHsetGhnKXCZoW81RD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsyVMnnxeWJGDMkDJEdw5jFQ35Evs7FhRkpuyJ6DDcQQCtJVyeiQDUHPqusZCiVjg9SzBAmaR97R7fPmJTDbCRK",
  "key1": "5bgKk99mTaoFgUwerAP3JGfMA5SnicK6tfcyKrjrK49HiABW4HM99EoqYKrzZFwxJYhPw4dv4WBfnT2WsN9EpfEe",
  "key2": "217PKtEnyWLzAwSNddUMPFu1Fcv9bgm8yTTWZq7ARAupQtB6x6yKLk5b4hTyxG7xYkRBi7gApnmkXG7ipPGCoz9a",
  "key3": "oSySDcttbjVNVKUPvdXJ4a53pm5pEnzz8ico6JjMmhSH3eB2R7cwsduBTiShin5QiD5xPPaLoSAjjXowBGB7tPq",
  "key4": "gKJLnbHRv82yCrUdyXANGtYa2CxWkbKwL2wSqVQ4625Q8Ys7zjRmD9eKZnAYyNup3r1D7qYQRu9EezVNWdaMWzU",
  "key5": "Pc55GFfxnpYb4g3mE1cccBcUSizpLJe32TPMRazEo8ng9SCK7Q6FYtCScNCtoQbiGfHD7giCjKsPLwVbviX1NJP",
  "key6": "3u4SrntBDbyhxRDLFZtctFoBscq8E24EDNAocpDhobm8QMi8MBvBQgWfuomQfm6U8tiDgTXiBgqd6j2GMgCVBsNp",
  "key7": "23su691jrHAEMvSkDAXyQKR3XZGgk6X5iJq8tbcVpETYbeVcUZxH9vMz1vpG8tcBWkBVhz7BfXYrPJHPFLNSQU1H",
  "key8": "2AtLmPb8Dm9MD6cy2FxZrtgkTdWxDGSYdMuWZFF223X13i1ebVaFMSvDFzcjFm9aow1bDbMtaszXK5nS5Wf8Bwn1",
  "key9": "61RYYZ1aBYGri6nLZT9ygCn46NX3cNez7SEgbuF7TM681wAEnDrLpLTWBqtE5nzkZzCP4s5NT9GvtZFWYm7HcrTm",
  "key10": "gdwKzu8LMrrSFf6JfNso5iWuGspiwfj5jRbwPX6tHTgbmK3pFswyaZVvcYbjJjhp7Z9oAD1obksX1K8EG46bA9N",
  "key11": "GQXpqLuVPcGWmsXquS3D6hvr5weAa5DYGoQWQM8b88sPCtEZSM1MNcnvGiReu27akGgF8VxAMBfHYjCzqBoekCo",
  "key12": "5FZRhiuruuSPczbCrbqbT2WHqDLt5KSthAqekzeWkYo24Rrys49oZorcDgzCGqqcvemYoLRF28bk4S3itqfDeqa5",
  "key13": "3s35zzZPSE4byZJvDetrCjVaRVcAFMH1gdCBrXGrFmGskZrPxvMUebgKSjryvctNawjeBdUMebq2KBojFnSC2aCq",
  "key14": "Ny583r1Yj5HXuJBxqVPpcepxd8ZEMgpAoQRBzc2bmtf5r7D3Y8V7ecd9vNtniwkGvJsjTL7uwFzKBAGUsw2SY9r",
  "key15": "4FJEL6YZ6S9VCCGQoyikWei1pPpP97k5amUg1NqonMAKyK8jWYPuo3CjV8oB1CKdeM3vDnZiz77n1VqK7DqEkoqX",
  "key16": "3coGmz6KGiCAaYqTgeq11RyqksBKPTbvL1ia4DLyEHhdhSHtyiH5bcxht4JgTKS4yMJvyXBsbHZYGz1bfbJDqQuJ",
  "key17": "35UpiUb5nkQSARDr3X2n6PT7EHXkFQYiM9qTZkCERmqo2xweFioUm2iAaQzFn3D31qsfgZKB4HXog5um1XDnFk72",
  "key18": "CCoUrNJsXRp5LNecm88WN2WHVEFqzhB254TPpgNz2gCTBT7MiVEcRNMsZobDg4WbkL4f3i46eMEgTHmMhadk75Y",
  "key19": "2Dfy3prFjGmUR71wDSjjJo3mfGC5x8dZQBa92DkVG9mLKe2XMYpoviKZ8kYNgtdma6N3hT5tomFdTtj32jnv8b1o",
  "key20": "DiFPGFSKydPpsv8JMmufWcWovX1eoX7NwAjuZR4zMCPyGxpj47GzDnzBGnkd5vVfoyn2zhptyqMTNpDRX4b3AB6",
  "key21": "517wCsjrNeD63Bf2JKTZCgfmUrqXE6cqGiEZ4CQrxJxz5ALhm9tZktaomXcCnCd7t7zJHJ2xiWRMd1AvZVfqJhLq",
  "key22": "546mJivKZ91P5q6LWtqYcEKzeG1Q176YPUW54f5fUYLzQYQqSMtiefzrNmmRCENrnst8PvAKqvbmQ6C1yQMqea5Z",
  "key23": "QHJ7ebMLt2Pd3wNwDtaNXV4nocmZnfFeLo6pdKeLU9otpZ1sMvPixRKEsgohoGkEjvrxLBZ8feUTPRkpJbuDpes",
  "key24": "2wEbyezYMbU1cPkdKhnSTLsHpVAkGkTr9HMo9WaR9ebNd1aSyRFG5psYxXsfrxenfDJzz6dgQW2a1HvbDtBecxjj",
  "key25": "2LswiestTYtKMoKt8KP5uWr1KpMVHGtjRBLH4b6b6iPQTVfbQ57DUW8x77cYMB6JfaAmHQwwSnRAzThJzPJUzA3M",
  "key26": "Sup3X1pKyJN4pjjL554CVAme4XSJhPTSoPvLQUX2ZoNm3MVx1tKTyVkvoAEuGkaeGbnqavouRV2MuuLdtYb5rYT",
  "key27": "XWV7KWegYDwQjWYQ8b1Mb4mMJ1g9eevmGwBrK57rEkH7c3Dzgo7UAVGiXBSag45PU4AcEKeP4rWfFrUEG37am58",
  "key28": "5GKHH7q9B2ZEbGZJDeRoXWA8HwdPCiB8MjYWGQZ64pjK9koz3Ue3H42VpHEo2spEVBjJbhAS5L9i1q1ypfAPfGqp",
  "key29": "2tb2B6TTtVfpJjubGir16BTZTL3A6bZ5zmoeYhDTQKJx4rLq5thZz4mgqNG1Pf6Aqg8giheU2bdw57Ze1FuLJx2S"
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
