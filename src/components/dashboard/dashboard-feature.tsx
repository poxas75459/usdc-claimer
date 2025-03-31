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
    "3JePNcUtoiiESS6hDMsaTESAXVrKj27yVTnz4UGwDwFGK1TbkugA2DveHxrNpBAksrwANZuydxPBMdb87zVCiAcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBKdbRZG8WhPCZG5Rywib9kcdZUASSiwWmGfjckdA2Go67GCXpbrY7Mtx44foxdLZB7XZXsKAkcsTbes9PFE5dw",
  "key1": "2DV3okAH4KDWfYCfVUFmcqra18fuYxNqXM2SwQCW3QyovaxGJRdamh9QNnt9dmZ581nuR6bhW4ZZs6MftLs7hUE5",
  "key2": "yfUFVTQYZxpE5Hej4LB78D3G5Q8svibcB9qm8SCxKATn59p3q4sZHKHsFpoQsLGyNkNmiHhtuJ3CERS3vHK72Mo",
  "key3": "4xKoN8y5u7895TZSUr3vSuxfynhZVLad2cQvdwuqD55v9kvEsNQDZ3E3SeHMutuy5cNBTsxKbCDtFdFMXjo1WNCi",
  "key4": "4C5rfsZirtwH923qtJWXLLv4KtqAYg2AGWkFGSEDKJTbN16zgF7g8KRKMJzGGVpcFiwX5VMMNNdwp4CUstj7DfQL",
  "key5": "jVjK7pahoAhRWmNr232eNGRDigMNHWUZaX4ByubkVnVsGsXQCKKTd9DAuxf6TJRVjCqXUeszsFFzFZ88E1dJZcj",
  "key6": "5TXUM7kAhRZvdyRiSHXtRGUiuNthKngCU4HhXS5qnZbKMTJaQqLXKoeSuvdnWgZA6DNfjCBZdUzQRH5DVVafLHA3",
  "key7": "2YnADCW4Yce5BSc9Zvs3zRe4pdsB7BrRGTLrhKevn1yuqLubd9abiACmZHKAPWo8HbCjspbp2MjWDd3vpLwuHAEF",
  "key8": "4qhEdKNQxqSd97Pqp2eY9gfzoWUckzLWaBXjiexLkwdmGYmqe5HzTRi4j9oJkVSeQUE1k64QjumDCkJqhB5qS3Yy",
  "key9": "2FV5t3fzTquQEVEVHfKM2urz8C5LDZjAu9uygv72gW1ANKs8RKMdxnMJ2Vcwgrt3CEghzL2wdGGnhmYdo5sVKH5Z",
  "key10": "3mAMDHGokJqCPECZbGqgKZzCwE9ZqkdoBms6hnJBg5E7qzTdX75waGRDiTu4afQD42ocdoR5yZoY1wp59vpcgF59",
  "key11": "UvJuNihDcv8GtgQrL8DkQCPtvNE6eVH1QcoYviQ469WJgw3EZGB87KgEFP2hY4xmvfXD6c3g4Vu2ZaLw9ND3uJp",
  "key12": "5KTbEiRW7LRn8AAXPwbiY6U1CRv3tQ5kG6N62cdHuM28coHwb9ibp8X14xyqLgon5P9AhrL6szLsXbpnNRnfzjEQ",
  "key13": "35ARnEBX4wKBuiiHfoTq1jdmJXy3sY4cs3rzdtaU4Qcx4DexefciRmLEfLBCjbEeps3c5oeV4RQLnpmatVrUggHk",
  "key14": "5yL9k2A93iqk6nEEDPD4ARqNMeyLC4KGf1P2kgdVWk8KfFKUbvLT9G1713TFGFbru1rzkPNSMMyxZAJrQotB2uP8",
  "key15": "4FmqLY3dNbtkvksRNZ67iy6ATNRt53xrX5sW78DVn3bPLjqJcB4FpivtwntCDU12L4Ze8ePNtpsVSyTKz9DrqGhJ",
  "key16": "nBjxD8uA1T6CRtRcH6MzEzaLF1iyNwzJh8YkXxrrckZsjXNdATz78w8cmfsqemxZLNpuqLxKbMHydZCYcZ99Vm5",
  "key17": "5WJN2CK7BhiwHj9zP4YXjyvcJKhMCvWKmdWNdC4EyVjZhQeLccz2QEMpakdAX9FbjzdnVRgJRVBBMDnu2g31xUEB",
  "key18": "4Nv6WU5nDRMEHJcG7sxv9qpogv3m8yX8VzjPKEheqVbEQC1DtoGwXkPrzstZ36VEiqcheNVucGvvbEVVLP7kEzhD",
  "key19": "3Ju8cYTZjbdjwSmioRYDrv84eUbVoPBPih27qW9jm56UhCETUz3WoUCeJfDz4nbLHNvTH1hztngTQoHkDt48sz8U",
  "key20": "4dAgNpAqn9de9DNLunMW7zdp9BeDG4L9N1PUsM2NEX3YrrFzF4rLd4yyFfjqqBXKyGcRg5Zos5YCuv7iifNs8ajR",
  "key21": "5xNAQGsXpRuzmEQdQeATGuALzi5HJcHaKkqyu5uTXwcpo5CokBJmSLW8PXUr6n29MAGoxiz4DXrae6AtoEtC5bFw",
  "key22": "64HbUUCS5UmqoxyrorRUbL15DMzUrcekgnnFUPja3F6PrmARGLXpPV9invk6575warFKCyEg86bGNzSzHTUquU6x",
  "key23": "FhPX7cX6gc6NXXsyYTEDq4VUG8PyXFgF1rD4tg21ASNnj9T7MbvZ8TRa3M3TmmWYSj1TgwB8Whs8xKH1Tvonmeh",
  "key24": "TqiyfKG9k3k2aBPtW5twZuneMWNAX5Gh8GMJsXxpwawsPQNDkAW73p3EXKQsB5kbNUEx4Cc7vruQaTx8X82RpVM",
  "key25": "3bmSctYXAgNHVSmmxznVYsoP6CQyf11zh3xqwSefsSVPa5x9m5cDFuwwCuoWUNGuVTM9EeR4FnZvjxk5ut79AUgt",
  "key26": "4tWBKXMFNkeof8J29xKAf3pX9ffVgshVmr7SFM6d8U6cK6wFm1oxi58jJC1dj1fmEXWm32VwmXC612zf4PmNU35y"
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
