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
    "2EF3Du6pNBCFiT4wuj3imWLnQRgm9DEMW9Bxghk4C3WfhTBJTMSUKj8JKhvJomGGfsaM6r3Q9R7YpFFCCVx1HX5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61tH7kkFDGzrezihtiVB82fzk5G3SDgJJrZ4W3aUFzebcjZ7PXGXwmXY9xKrq5LkjTFrfFoNb5ya21jnvRRLPcyh",
  "key1": "7A28VLe8xssY2Q6QKgvQGauWrbNYy33H6FFWzCEhTGfApCfV9HgXjtneQvcd4UA5s2Np1LiJ89KeCz3VyxkngL5",
  "key2": "2crZnqLnEV1y9uhhkhQVkrrhgobcbCVmRrcNA3ALsmmjpGL9K4LcxdxykXY9iGFdLZzmfoZJQaoGc4BdYjMwWCh3",
  "key3": "3tY8tcAYpyuytqphmfKxkWoSB3m5opbHozgqDThFwok4hXcntFwCth6CQzCdtRXsa5QTMgAEk86UxQ4FRkUnWyR3",
  "key4": "tRd7eudsa9u5FbtJcqNnzemQL8AZQdAZo6Smth7EFh2TzZStUA86jhZkXCZ1akH3C1hNwizXPuRETsFHVRtEcA6",
  "key5": "2n8HEwDBcMGpKxrwpjPNmHw4c5cq9aXb9seDoVR652sUzCKxcMyb6mX9gTsGi5NkqSeuhN8chP6csopgruKzi5Xk",
  "key6": "2Dhy4LHSfCBmG12q3xLvD8UEwdu5KSDqWKrSLYSrAo1NLQ115SNQe2QfYSfJ3z8jG9JyvvobvaLtmJdwWg8DQsD6",
  "key7": "2oU7C918jU62SsojW1Bv2eXC3G9TrGAaeYaG8VENYgWJy9iNahrVnSRXmZoRkTJFVvWywqubd8WAvSB881T4scXV",
  "key8": "2cnDeSsCY86NXsaWdjuMjqYwdQ4ya64MMrhSgAeBwf8y292vmEVRoVrNMsNcHdXMBvvGKexobcgWxZPhrkEqe4yb",
  "key9": "5VeSccjKdiYjowxmD1tMnZZr7jTUVhxfY2hxiu7MCSHKmQK5hjmWPTnZjwNJkViQhp3eBh6Yabue9oWVeonqDGfw",
  "key10": "2WsYvzcUiW8Mbocr1a3Syc9RSiPaekfboKz27GgdpzSgGMofH3zvnibUBoZMo1q6NgCScrP3jvkGiwo7w8irAFUj",
  "key11": "fccGk1jqCzdK4j791PBh2m6sHCkfbb4ug7RGxkz2GdC4mN1KMxbRJzdYbMwsBcSopJzfYrPRM16eMuGgt2d75fk",
  "key12": "38jD1pmuzK4P9zj9QVx6fR61yXfS7bSohHrCdqteGVcZwPJuDiUAwKrsajUEP8n9bB91tuVm6EPP71hFf4TzrcqD",
  "key13": "2Xu2T4PrNNqXick6zLfwPoXxoGhuQsNBKJ3uw8j6nfCQefTAvso3trhEh3FRK9tkUEQEpe9LdrWxYxmMYNuza7ip",
  "key14": "2bTbSnzcFCvbegMWdCszHsC6cDj1KHyuJS5WjJaumrqhbRajCdAhvgFJWnqLTMoh2GvM6wr427xMPGqQRY4DD8pZ",
  "key15": "2XRnqZuuxvPcn8ZZAtqDtNBuXVTYzPPdFF8oWmNTdfKunUGdtyhdXu71GQyXxnB3XFoYEqTwYfL7LWC42BMrRGyz",
  "key16": "31igqf2R75VqcDKFX7DVQSUDVEGhi56nZwobok5k5AvSWDYtr938UWZGJY64ERprimLYnHGT1aBFAzUsdzrFXJtT",
  "key17": "5GbMXzocKFNhw1GyGEAc6eT6mRuxsCCbCzbD9AHA4f1cqDYRtPk46MWg1uX8xv6H2oxJ2dd2DBDojS3BTnhLjqGs",
  "key18": "3aVb7RKix9UNM1NmY9RXiVb7xUxbmqHCcapKm5fRMXW2RZqSyKJ5tXZAxZn1Xnobz8y2CfNX3Rdct6HVZze19vff",
  "key19": "2iPUB5PByQJacqH53wobZnW276Ew4bPZc7tPvRQ7jSC6WLuFFRH2zpETTXMm1tUbqFTPutRh1syr6FxpqqaykZma",
  "key20": "WYDKKTQifJjUS38chi5x6h26cKYjcXL67MHEbbFjd7NTRxqMLfstoqGBQprEJGgkXwvYV2bJVZ83ycUmEMkuqy4",
  "key21": "2rS3qYZk4G5sg2mDb5VoANh3mi8XxGHCA5grxhY8CgoQ44fjfbG9w9DvNa2wmVkjShfQRfQreU2eNpn9p4q3Y1sr",
  "key22": "8H5kmMFvcfenj39BeYWifgmu8rmVy1Asamo6eXmcfViyjD51YE1Pst9m9obkYgg6cfUHeqhAMDDvt68KjVPjTsT",
  "key23": "4mi7z7n524aorobZ2HXNdWPr9G1UmESywXhdVsso5zqcEsbi5DFQ1x4ktATvybJxeLFLGEnqepenKcoDGM9atDak",
  "key24": "5yUzmFFowUZNTGxaZobYGDu2pcPtMpCJgAS92BJbnrnSB1xpQYtiK71BXjaWVQtfVJVsLPg9K1FosDv6fvgKxzu1",
  "key25": "5uTw9ZVH1sLd4ntSRvpHjWvqVHQvnd7vaCYjA3rGwwrWtU5Dc4wodN26rKz4vgYhADGyotTcjKTPCJ9STawroYRC"
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
