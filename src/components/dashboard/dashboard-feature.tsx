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
    "65Ym1uGeuizpmY43QwdtJbS7FaoCJjGSQZ3HzytZm5W4mibTtJtqesAFpUxHymTWWDS5qc2wcb6217woTx75yzCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8xGs66gPBWLwcHhBNSJ1AHyr7LCoKCmBQkdAU6BBQMRjz2TKsA1b5bgEe3DqgaZeMk1gptTQQKnVz9YJ6VnH2w",
  "key1": "TjndHiw1e5gEdqMHNxkHbK7K5NiTSuCod6rWCYE8dshzcqGksW8P1fsNZ4dsUVxxZipiFmJ81HykBMbatXANksE",
  "key2": "3T3vgy1f6h4cfNAwHoDAMEeS1JK6EZqUp41uioQrdBzbzqPukPC2ieiBqFmrh76XdpsvKPDjmYcEUuFqLrHwQBiW",
  "key3": "2unyW3kTR2jRz38AAuWZMdUCFMqGWe4mQvn3MfW9pLwyvwzR9s3YSW9sJgAJbGs1YRJh5NG6Sg1eS1CKFf9fvDZL",
  "key4": "2qxdRaB4QEjgue495BzqK5tHjum5rMeQzMjD4JbbZoQ2b7HnWEvC3vwfkbUB3nVNNcZLHvcDg7mwRAZU9WEggdJk",
  "key5": "5C87KLmJWKBmaEv6TqEF9YTx4BD8MtC5Zrqo5yEsc1Q7LDqvibjysHAG3swRfGMhiJ5FgLJjxgW1zdpLti5bKLcX",
  "key6": "Wo3a82sNrHdrAj15uWYuRFTaM31CVv4AnqPqJG7SACUeQS3i6cQp6UcNypcbqeuvDRfoJa8RTnFh29L8Bgh1bQ3",
  "key7": "3T6gVZdM219xBj8QHPFqmaaq4nspqGV7caCF1tbrxsuznR3ZQNC5XJbDeowMuiouN15EAHfNQVnfdrTFwfY2t4gz",
  "key8": "4gsYvZLLm4zqiMwVnTgjimDcByeHQEU4PN4YQ8majfULprvKXy9ag4us9jYctKdCa3Q3uCq4NT32DrFsEETSLK4k",
  "key9": "2ytAQ8kHCcLTenx47i7gtZNQ6cyMLmtAam3btBjSrNYmyzrKecLkqdubGv76hi3LSYxkxEK8echEZHeA1QjqU4X9",
  "key10": "4rYNxrJjRZh3nmS17RCn9gzg7rmMcUKEV5unNxZt1CMDEQS8n1cKPhdcBtcaCWJ9kEef5FLW33ZgrZfarq95WXjF",
  "key11": "5GHW1yEEQJd1VEV8wRjuTasTj1PnffQtPLnwD8od9Di1o3MpnaFaKaM3zGsTzUJj61K322dU9fBTrBnnAQVH5SnF",
  "key12": "5iThsiWWLQKMSiQUnrKS62drPH5VyuncWb6hLxChs6ydhmeoYTGPV2qSTcRWAdkoAbZ1i2ZirUeve28HMyPnMEh8",
  "key13": "2csydQtk8N3rWuF3cK4rECYXm5KAmt8mRqpCm1BCdY7M3S5b7XcnLQ9Pz75tQpHz3RaM4Gkfpy4tU8rDBTTGJd2C",
  "key14": "4v1ixVrQ6fUbuv8Kfcnjpb7chz9H1YxoUn5hg8ih5SimhVH8P7aFGxuAhBrGReuvRo4y5kGSZ7raguhDG6H5WxX2",
  "key15": "31ErD4Ja2V7Qy46eNbKbjpajvMMNkP3xETc4j5ZCAZKb2VeQB7JGwjC3dygqkZMEBU3Q7zxWnNgJSZGaQhMzdKv6",
  "key16": "2NVhcR1NujniGqHDKBNmm5HZFbx4pNZ86XkzoNANXzdHNbSo4t6gPzoFsBv7acqUK97MmnSTwo22qHn8CzgZ1zGJ",
  "key17": "ZstFc8BfzXbGiTLB7RjoT4sdky8S7dZFSm1cz5sUnVyrSTuLzNr2pocQCeKe3iqaXYbgPADdjwzhYThZkvuv1Rh",
  "key18": "33N6sQvkGxsK5sCNFQaUQsVfvrDETER3rvQkEwLHkAFeqA3arfv19iV9EiK8LCaSWHvp2ithHVtYokC6GfqfDJZV",
  "key19": "55jJSocdGEQwhcuJFofkZr1A2LKYGpnbPr9mozJZaicRdCf2nXcq3BUj3tA6ngXWhSthbbJw5kCRENy3fr8RUriA",
  "key20": "5vG2cR1wSZaUr1PhUbMA2s7YgbhVCPn4wsbcxov8CJsfPEt7Nz3hoUfRAJp3xbpq88Ma2yEgNnPYKug5iZ26J7SS",
  "key21": "47VtY9CrMcarHmUxbjWFGgbxiFwFAQSGVYtyWaurPMeb6nJPwVgCnk8WVDZveYN2n3fW8YP7xa2Qv5sAESD96aNQ",
  "key22": "5uMQabFCyTUAgu1wFpyTuhQa7ZN8pWfauMppfTGgUZ9fy71pg3BRCq6saE1SqXqqJ6dmQLaXsLjaBs83smp525hv",
  "key23": "5tnU39o3XebS2pbvJDYNbbMPzyFmbL5vgCH5fGfDwkciCbMBqAToCdobCdJY9wAcARPCvXVXRTM8PiSAY7KaCXU5",
  "key24": "46dFAs1jor1JtgZPdFpcdiHNGcu5mNGg8qyR8UNgHtxgRvUxQGzGNDTmyyoXev3pCMEXNAVaBoBV8ixLoSUZMf2C",
  "key25": "4EPMP9tq9yMBtLFWbrrNPHXYhcxUWHTUu8y41wTTRxhrQd8DDXVY2g3GFTrAXV9DHgoqFR4iGxkqAEkP9SWKoThB",
  "key26": "52bmgxJCWWhBXu6sUD8YbufYo6fbCum2Y5jVYi9S65qYU4tsqi444Y3rUcGwCmqwdyBBswXKAcQ52eMxt3mDSVfu",
  "key27": "293xqgyehaQqhY6cTj9x8SSYxpWMRQoQp4kAUchgQBng3b5NukoH4PbD7XU5M2UfTGgKDdFUPUVM7NLmtHbuFVFf",
  "key28": "3Wh1ZpSGGrUYq2yHkmASFLkX2aGJprjUxSXsoDzWxzarEQLZFhoihtarWvNVkZR2knQmxz12M2aK6tQ91hoYUzTu",
  "key29": "5vogpmY3SMV1Gp5nuP84MvZNTh38kEWoMryvGCV4LBwxQC2xyoViZnfd76DrYnwXSW29BHaE4m3iuMwCDMtCFXKo",
  "key30": "2Pbi8y9634eCtHJkxfkBKoofvL131p7Hgv5JjwdabwtRsLjHu7S4LtHW89VzVVp1NU4Bh9BeVWttLeJmi9RdfjZM",
  "key31": "GBeAub6zZmsozEmv41GxcxLkFykM4C7koG4B1b7h8ib8koQHFxKfq8DgVuA8JoxVEKHeFTvPMrLj47u55NDJQij",
  "key32": "5FZu43tHQ7oWY8Ayf8w73HjvtmFjSKWqJbsQqgZKuqNNcsKg3XAwAcoKpsFTgUNWtDMnVFDTK1H26togtiBFPeiQ",
  "key33": "4cvB99fETy324RnP24AyMXzpfx36m9BEqsGueCHQ2r8tVHNZVXqtKQMb4UPwZyxZLZQvUnzWdobJHQsUGAnKJKp2",
  "key34": "MbrHnapG6uQaxXwpUTTt7HTBZCeu5uKYgtmw45Li5KSc9wX6Pf6fRwETFcj6cjr88pxnqYHydk59V7GT12aGJBu",
  "key35": "5Fuwat85mHgLwL8Zo4BfQLHBR9qesB2JVBVAnQcHhNemukmmP4zK2broccRAYt6N9CDMFK3LG2FemRbBoRubTNq7",
  "key36": "3gqEMRP9MTByyPV9tRZkkF1ZWJGcVCs6CttA2aSm56fC8PA4p3KnhMVsEsZTJfiWx3oT5u1f91VruSf4pidT1fpk",
  "key37": "4xVcWZwQ3cLhBgWRVVW2pZCML9wFfEEXHwpzpsroCy2y4swnHR46NdeQww2UDjyKz3xiQAFqDRLEPxXqEsSjopHw",
  "key38": "5fgnCqihBVeCniec3rksYQd8PfBLazruJg3mAEbhnH9jY6mbovG5B2S2JUCirY4wgYVgVBuYLUGchJPzNiGxEGoS"
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
