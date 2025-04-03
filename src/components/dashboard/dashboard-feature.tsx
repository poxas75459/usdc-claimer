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
    "3M4inGG9TxPVzksnTEds2mid2ZDCrKK67VuBjwk2zfcfQH5auG4mJKUsvGmPVVX78ATRquZwKVX125DqJrbq83hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HjnavRmqevUxddcFFs289JU2QUKPjsGCe9pCL7THB98LcsvHKbRxh1Q2qSrobvwjkLEujSntoq1uxoWKNaaMWm",
  "key1": "5xzgnGXVznbmxVVofpYwPZ3r9CGbrwukpMx76S524uWHoWh5W262f38P3vv7ShDp5swcA2Ze6AeJ86zDZHz3d3WV",
  "key2": "ap4xBR7PYmpuszBL1nEFzCET2osySNyFTyYmJxSygo6r51hfWK68V6NP1BLNhqqZfK3Xm1JxKh4C9EmGeu9h2Tz",
  "key3": "4cqkAGZdfTyj72qVr2Zy2TLBezzdTfJpWR1nfNdBqyDUMvzdBv8JZBU86fEbi7MeV38fUtDVN4MrdpPt4fia7rv4",
  "key4": "2c2irCQTog4D24yLrCKb8ZxvqYEt7TBd5k66DbUbyVu5hpztYPEPc55RqETgeU6LYVV8KKeLZeqhxPhHV49caSXy",
  "key5": "5RRkW9XXEf5RMMeJZh5vQtpwu2yJFbXtNNhpAdshPgLUMasXCyw9yjpiLzNmszaCbPS4Q9CFfaJzp1EkCKc8EhmT",
  "key6": "5YvNrqGaQ5oLU5P4rPwtzJjGU1nrtiEqsRW6UgbNLATEbJW7t2CQdJo4r1xqgq3cRG5mnWAmgZMU8914gjdwLk7f",
  "key7": "2K5ZHj6KDGMbrGt4d7838N8iSwsKyEkeoZCeBowaMeoBQWFBA7GzuBZL21goqa37oxgPjGwJLGC2pTFMaoSbHZrC",
  "key8": "4uqz89UTNG4o4wTsqaaakJvCQ89ZptNF7fFgo9BPLHBrmYT3yoAcSG2QdJRrDqpY7zo7xALMhqGKxZM8rzpSdyxu",
  "key9": "64Grr1av38BqRtuKzsTXwCCReSWFrF2mu8uSdPcbaZnay9r5Yrtc5GbaxWqdr8yJ9U4hxFN1saHZFvYy97SWvh8H",
  "key10": "YNXye7GE5DWFBi7vYiDpHEAch7N1k9mS9AiwmFXuC6iJv6Ns6KybRdt7ujtRBRFhK9KoMp9qiSE4buE6Y8j1pP4",
  "key11": "3F3bANLgzCjMzUjFNaTbfeG6VFDb8BvBEVwGjDm7PuptD7fJKEL4rZCBTv1fNKB2oXxeQw7ZFQiArqShKwbVPzbT",
  "key12": "2SFcv4Gt6EgNgsUhomPA7q8hXoRbV5iPPuMoa9jrvMwufxty17Q8zgzmkC2CLeGFsuVwr4TjZ4QkcNptcLJKuX5E",
  "key13": "2qpBoeCErqcFVTFC5PvJ2WE6LvAN5b5VHggntLy2LYSKDsdqSnV8nbsAF4wgF4TtvLTHX56A8hBqxz1W5WBuzMr5",
  "key14": "289yycY3sZ5GAT84VT8uZUC1YtoPm75nVgW5Q5YP6XGpBKY35VLWhGHabLmCs7yVmjRc5oSQRvpB33hDvvud1Gcm",
  "key15": "28jzi6sgrDrXXnSwdZH3rDq711FwkvzJQWmXGHxFik9fTEGLkAwfbm3dnEGZe6SHz8T6dnhyHFrq1fKjZxb3UaMX",
  "key16": "3VyZHA1BFZYdtWn8U21dDYkY7vPm3hPi6XRfE6SNHDSTwr6ViHbeLPTEEN9tnAjpzfw7XJG5yfEF1jjCbKBvpdXD",
  "key17": "ksozHiYwuke9FDsJQCPbFi8uDCF9znD9Q7FjjRSQmrs2xfpwCqjeEzUhYgWBH6Yo75mAe8wSES9bLLBHjeva5K9",
  "key18": "4oAZBR6FBsgxBcKw4RCibLrpWiHshmWDGBaztdMXJtaxnqWRLmQnLRCu5rrVyuV8LVHvVeBiSwKJjnk9xUhQvgAm",
  "key19": "323nAMq7hx9Xy6CehZUvp581rhSXpq4CFgp2cVHnanAu7fKwgNM27qqEY2Reh7uA3KxstKswHAoJSVDY9TpyZzbW",
  "key20": "34ex4KBRwcmxMzREAGTKT1ywa1RNXL3Dc99SgqaJ2mGxASagLjfN7BBJYRSXzQSNTEPAGAZu2K3ycSGQRxbJdvcX",
  "key21": "2pNR7NAajqXZA9fZyEk6Un5RfKjwNfmCcN78CwMUcV67Paavc18Gh5KinSMRnJ1B2wXSVJFg8MQfMqTdqJCfMAL9",
  "key22": "3vkxfgJ5RAtTLdJzX3WEoiYzTmrNPgrzV6PzsoLwrcbbU5pfgKJUh48hh5CPUMuMqK9pM8sk4adR1ZP9jfLjEA3A",
  "key23": "3kQ8pR4xy56eVEVYL19fjMg6ttget5wPMfBFK1mxxu4mT2hY6ZGoow5WJmQVXbFp1K1VE39d2rfBSP13ebFUtxgm",
  "key24": "4YCK6MoM9AiP8pFB8z9fEhnWb7TVLDWrmJRFYMBbfZNxonuWKnCSM1UTCbeKtRLct5KhjNZTx2XNAwSVBQK9eR3",
  "key25": "4whPajT2xGVVqTa7pnAZvWRgMak3Tfcochq2pDiQa8GCV49cqMRgdSRHaPYmu45WXJt7gJ36x2Yv5h289nz4Rexk",
  "key26": "3ahVcnYfqQ4k2Wcad2h7UfafaZKNTMeakbwDgX8rj1C4CioN47hdgWosHnDxHJ65ts8zWJHYpBxjFpVLhx3UZLRA",
  "key27": "2bwjgyrBx3a8qEcWmSNBUpwXmdgXU1QYfA4pQ8MgErh6dPWyvWk5KC5whK47AveEVfzSD5RvpwueqgLgi16RiwJt",
  "key28": "4dL19AdcsPbY9mnuVdpUzG9d9dJMhFZ3JR328q51PjCU3aqR25YTZmZVZp3iYkYK4pW6crfJi2h7NXmRcdzZ9J45",
  "key29": "4QMxEhFgy2v2PY9oihumXhwrJH67kxUXS3GyVyH8gLcvebVeYdNyE5vk3fTESfPPmV6q8HPUpXPReR7PgWwQQa1M",
  "key30": "52Qqj7iyeY9kK269bc2fS4o6pP6HkEKSyqwyxAfBCA4raLfX2WrjkjCnyFuKPNApg8ehTonLgnR3caG33smMReP2",
  "key31": "4fjHDb8E4sxZX19fqDz7nfjieQ4QYkmJQHhyLw6GBmzVXNkiMKnxpjjwTLDYr9pA1soqNvubfjoYmfSucD8E41AV",
  "key32": "3STbrFYkDR5ppXYupUyr6n6thBhpJUzbJ3czbABj9LGRiz96sH4Rno65tFVsEfiJVbsZK9WYyN3YwqijpCwtMX29",
  "key33": "5NCeT6U7rfjE23fQZKwownFVz22WzDd3c75dMaFjZE1CBsUHHALxVaMectBpmQCEDmiUGmkd51J6hn49etznv9dr",
  "key34": "3Yk7mSPTnUguVi3swrXbpey4bxLZRmBRiJuuztzgxoiT3Z9fYr2GduDQbUP94uqpTewpYrp7nq5TKdGZeVcTJnaM",
  "key35": "63GZ1qQNtTUKkspEdKiThtdDHYSoa3VTiPoPEMpLHzrUWboNKthQx8XcP9bw8D38eq6YW8NQuwgiKuQ49FRPFQ2c"
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
