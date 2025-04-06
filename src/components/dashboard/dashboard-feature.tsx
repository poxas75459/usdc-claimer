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
    "ZGoyBhLG3CQMPjWM24aHDiVnUudVHAquDua2Nb5Sni2HRkV4z3DLqBBr1vE51hhaRptSo9VcbxeSLqoMThztT2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XAN1zDcK2grrcxKbZBbCkMJXmYZD86FVgMEnpVciCNm6iceRN522pgYyuQvR7C8YVMaNya9rRQ4oN7ikP3MuEVw",
  "key1": "61VxJvMd5Ym5ajcLwQQU7WLPxy7TcnPHcacRgAtnZ9ddrDyuZGPZnwGAd9TJmVrfitAxoDXbvEHEqj2Wa41BNr4Q",
  "key2": "2S3pH3P1QWrPZ9v8oHf8qSQGvbcUHL353y7TtDHCY5RFBtR2D5UqyGvACiZiXMp8TZV1zfyDheAe28SA1C6B6rhC",
  "key3": "3AmYG2iS2tQhkdXnqsSP93waQaD8pwECrR9Z8Xh7JrmcvHX9Qmvngypuz9Lt388a6ddP7HwmFjEnBtZwuKkyPeZE",
  "key4": "prr2WXK9WPxaAX6rQ4VT83vVAVGtojo25CT4CPxXswjAWfPA2kGDVagbZ3KtbTXrAZvBJcMHmUNvm6giN3kXRyn",
  "key5": "2Q7ZG87LFqht8AFnJ9j5grYwTtBTRw4b8aGDy2XrjKqkoWCo9iyCgsxSBy2VqLLNFCJ6bZhV8MsM35K4NAGEe1FG",
  "key6": "29vr7ob3pCapLBVjanLs3fqjNtApCLoPgx37anmMjwqN5rouV5VR1bhg6TRbMNsr8JB8PNn8mj1EQFLGmRagjFCg",
  "key7": "4KwgCZJLrq5pEpds2EjcaQAvML3GdaSUdWq5Py62bymnTzYhSySGhwAco4hpRoQEPWf1kcDoSNZqv6vnqEmmc76t",
  "key8": "5zGpyY375SoCn7k2KRRuzbNUYwRYKh4PteCszVE5tR25W563Jp4Zj7K6EeUrSgiqAhhKf9MS97xExBtznhVrE7mv",
  "key9": "4Ef5vMcoAzTrh1p7FjCgLcNdYR2Ax2PU2MD8uvzMUs2zfdz5GNQRYoXQM9oc3TGAFiVuTCaUj26o4G1bZBQS36j1",
  "key10": "4b63BbjNeNM6yC3GJ6nZGPykPtQ4SQpSkBkc5uL5PozpMxHn5tm7f2RNq4PEzkvy2RNxjgjfzMa9SAUCofEDaQWz",
  "key11": "5CuM3uW18SV1taf3PH4GkPUxdGTrZJ12iJcRNsHZHx8iv9ywkvisGsEyo1gmfAQvq1LgZ5eGxmi5jjyVor8Keoig",
  "key12": "5LTY38s2txWA8BZHZxJgmdkGBcV7eWgHghbNhNeNzmYEjRAtykB6YCbz32JL5oxtMagsHf4wJFxu1iRv3jZqpMLU",
  "key13": "v6EbYm7j3QcxnKMjTCPm3HRqHEh8U4vtzcK7nBPGi6tpXyQocuXYgfPMgZFBgCMS9eYYASgDu7Xq9PoXooPC3aM",
  "key14": "65W5NyMn3R5zj6VPMJkXHzYmqfjHS2WkjHnAu3aAg56smMJiwD1xQSToHRbJ7snw2dU95dAVyH5FEVMpTmrPcS5X",
  "key15": "3V3GpER8P3iMfFpLtDPApdEh5uxZ3th64g8N4Xm11dNrXcfcPeb8FMY99t16opYGXseRsCcDoZsSXAe3p9i4oJtJ",
  "key16": "5uzPFfHokLAFBaZc1ZL5WGbPHazi9tGPtUt9CX9V6mZ5xxqUx5NG9aMaXe7ZJgAyYXuum4UdUkjmgrERu2Z96W8d",
  "key17": "5AxAkhHBCPopJ72tmTsz9E2MK2dXGcaLBjVZPcqQp1a4zzVEDGysGtoAcpEKiYTyXLyfEJuR61xZQ1pu5UhJtcpx",
  "key18": "3wQmH5vNsGAgVK35aRLRiav4L6rT7nHef6JYfQoxnn32ey3fyuzn2UZ7fhcyxEaKq7mcEaaLsk54j8YAfdYraNNk",
  "key19": "4ZtgrMi1SWwaUmoS7L6uZpzou4TPca7i7zVnzHGuiwEACA7RKPdF65yZJ2g6d1NsDjk7vCADRKSsHCLJTattACVN",
  "key20": "5r9Bvs2QxuWfGDafyT2mZ36GUCjS5ph6kWUZPkJMbuTP6MoA6kdJnXVbpKRehSBuVLvzSD2nrke1DxdcEDGCPgH7",
  "key21": "31wGW9FjU4ZVohk4eXFLiLJzSChL4HNMo4VkXKmkq5Tz6atAK1ooJcz3L5tG26fXmkCJLbNDfakkvjs8bPLLaXuy",
  "key22": "5MWgZ79g3B44QWi9ee3Gyft2iDhGEWakkjgLcAMHKU2RjXucMmqGcVsAqC9XZPHVRjG91ogJWTw1EN7evmq7zZFF",
  "key23": "5cwFK4W3hvYfpERLMKtfe16t3tsiieLifj69TEQxL1DUDhDYVMkhXPv3GxbDe97Yz6jnAGzgWu4JGmqEHP8Ht1Wd",
  "key24": "4Q8Wfp4VShzRubAqEmz5mFuCRFyJBYBPg58GQcA9pAZCLWXJZnhcbN3iVqktmE8sk5L2ExcBLo1wsAHTHUMTh4kE"
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
