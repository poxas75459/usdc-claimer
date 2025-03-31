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
    "51krcHF4p6mvN2FBsEouGSWoKv4obqh8h363De9UVPSVk2hSX7f1kQ9jx6At4NPR1wkwYjhpHMEyRMpBJ7ifAUy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usoBXSEv8edt75eN4xj3t9JV85LWaHrthb2xa3h2qjipQVut8nEtTvkgUWUdfVMPibY9pP93RTubt7dg3mVCPUj",
  "key1": "3BensAZxZS8TqA59vYw3rpM8NU4J3wuEnarhFydRGXF9HpdfzZpkPm37WTAgLGA4cuqjSTJ3CkKtvRDJP5XfAKv2",
  "key2": "24hPnSDtNofWTisxMPm1NoTsyn8oJQy3bgCAmjNeSn5FSUvL2PTBDM67MkCbYFHFNfjxMfZpfAT6RSt4mKu7BzC4",
  "key3": "4F74rQXhStT9d6j11fuGAUnDKRKotvk7GXyGY2FxL9ZG1eZoBmtYAEqDdmwtcv96upN3pnrrRVmZeiWdoeqKFDjG",
  "key4": "4zARhKVNtkeT9dcakzRuAkQuR4dgytrJ44czcrPYPzrQmhHsQQMbtHc5PwUp3mc5GJVzABJASCDz1aU4i1a4FKuw",
  "key5": "36ucEZKox4Y5yMprD4rps1Fspp3MPmUnt8Hq4j8VWfddMvzVWLUk75FdjrvU7Asx4sJpSmnUytvgbnn2wSicUNjE",
  "key6": "WGzVRmWbvwFZmLG85zVzCY4NMASuk3aMBBzoEfXKomL72c2xd2ZeQBnZVeu8FgGCQD2TZTeUk639PnvfJs7S8Su",
  "key7": "5Ek26mhLv6UMqmNoiatFzRBmZu39JUnDqqMc8wTZA6gXQWNrL3Saf3ieiRqbctp2swuMf23Ee373HTD1ti5gtKK2",
  "key8": "43bQXWThnYAhdbFr5h4L1VoY81evUC1WE98xY62pUZbquGAn59iyMQSxDXYysymz4CBf5NQd7yRM6zcvpuGekoBt",
  "key9": "oiCggBWA3Bt9Qa3wvLLuNipFSJfT59GQTuh5iE6FdZagUjPLQXb4MPhk3fnryw6Nev33zBYH6mpkcfUM8nVtUqh",
  "key10": "4FNtVpKbo2SEzLaaHji2GQH1CAwhtVAjpVxdCmV7dVbQyxxfogw3BnSYs5UJ79PZjX76Bv9tHaSkEPy4eNDg7XC9",
  "key11": "igNaaF3mgX2S9xxZgEoUaeV5XMmsnHhC5jBHFnCdPGPziqjhXKbKCZ3ZrSdCUGdjaVnEBHjdcbmSc9YPhCyruzz",
  "key12": "4cMY4qXMPtki6rmA8UnqzQhMv2ESo2awwRFy3WzAchUQLEDz76owrmDseWcC1Cc9gEdC8MQZtWnPMn5TbsZHW9bg",
  "key13": "2cocCEAFqumZ9LaKhuMNC6rMJgKsjbUMfYuYKLNg4auGyRkGM4oUVewQKAKTECPskD3JHTVh7AX9U9aauSrzUDHz",
  "key14": "4oNGGDrHqtT353ZPrB2WQqHPTEDWMQs7aZqKVXhqd5cqY2c2yoMbZYRPVpzY967Ecb7KsH2LsxkYcxVGq4SUmQLg",
  "key15": "5CYDxYzzJUSUWx4omK2gBHiLCPP3hDctfq2kRDpBaUmUmFVUz7AAkw3My4MATV9CeLX17xY9z4EFVgffabNSzpok",
  "key16": "dYSp3wSLy8SF2SD3qqbqC7g2KA4vzgk2TJkroF4FDxPRkvx5sp43FmNqzSisgVLQMmEeEtcLG2JGvVu6owyCEYp",
  "key17": "2MG6k9Afu5o75oLA6hH4NYD4Xowb5DS5m5LpAh3D6Tm9uBVK9x6o9aHw1L842rGrTf4XYPZk3fhox9zT32WfjkFx",
  "key18": "2HtUP32C4U5oDfuCsHoyTo19MM1j3wRyH6svtu52QFmyW9WpmoFMjqvLXnsRucc26V1k3CLaDEpamz5eFDizrSCJ",
  "key19": "2L9kyhTHG6DpiGrw45xjfQdypDuvZgAtFj3kLWBsBRtsMbxpf4rf8NZMg4EUaDKMnGQ9seb9eEUnfYUJUbXaCmmZ",
  "key20": "5CGL8ieXMS64YBwdLM4Mz793sAon9GtejeM9XXJ6pbaDZjf3gaXuuAgjv7qyVQ8x5bWaA4TtWNDKCMNEGryvMMFq",
  "key21": "4gsbuzt2ypThs3UNddT7YgRA9XPxquZ3hv6BHG68EAoRxnfNyTVe2ZzM9op1ZDsQReLbvRqWD6mo4Wnmc19mEyHq",
  "key22": "FrdGsiKb2zyxbxbH4HE5XKdXwNdyVzkQP7Bh7gEbhwEgA4eMYRQ4LWjBa5XrMktEZRPNkkjSwwe4hWv8PqdWyA6",
  "key23": "xvCEghtZHcVzRSnoBoxsjdL3zz3WJiHm7qTpY4roLMJQss51bJ3vfQmFn5rjeVTRDjewUupg2UyoFtbW461v5Tb",
  "key24": "2DvwHMxt4R3dfGoYUt4dmk8kPckm2HMVJKNN8a8TujSmsRmdd1UzpNrDMCiVWnmVM2fHGSqmtbAJqVttnRjXX9Y3",
  "key25": "5baZbAMEJqL28APmJvcjVjfNbQTDHnR5pqtBDMbyViQFrPtEfoYGrLbhzd1sd7s5AsQrvuUzEiwvPye2hfmmaatq",
  "key26": "4prfEh8Gso916kU7Z4ujnV3fy316CCZy22gHFHEDathdxuNqdWtQyXwBHTG8U8qSWW4s8Hfvs88na6de4sjnVQPp",
  "key27": "2JKZraTwxLh9UEJYDSYfcpRB4seaDSieP9fkxz5ebsV8RLciYzKWAGHttpx7KRuTEPnkHx3QgToXG1dX1azACGLo",
  "key28": "5FxaQsfQhkrqB2gdbb5HwB6g8Wk1BDpnkHpbTgFgwbFb7jB3YnMQqr9nbNLBWpYhkn3megNEgcY3H8SZMrNKmgqZ",
  "key29": "NskGEK64v7qqAb3yYSyEUWmhDHbv8QCLyqfozxtX8z1ZNucpg6pp1F6QutQtWqcBkNXHurFiqV88LpArTfjZhbe",
  "key30": "2DMF4ct2YxGxJseXeS7BpeMTUXsJTQT9anTWR5seumKpunUkbuGVbKH6KK5LbvixQtkHrCtcewQXinwPcXHtWdeQ",
  "key31": "H5rJdAorjF2Km2VDBq2utS1VgEnvzKTB2iFPMZQUXzpY2JYgfraersA3eigMeTgmoqtME6CZdkc3tGiomemFw9c",
  "key32": "2Xxf5XfBz5ZGurdgdH4xn4LBK5DKw48gVhHpMT1qUPCiD9YFWwAE7QEjAh3JaXRyPGo9yvNVgXXBwCrPtGXQY5rf",
  "key33": "51SvKfmEi2EBfTM4qceNR2y1AKdbXW8x7jqWdWzxT7rfVZQE74ViN4Q5qTHG73CqxQGSh5DuXcuDmgvpxaasvKR3",
  "key34": "35MaC34YAS1hYEeLHEegYAvUDBbsg8JZKTgpXtp1EQgEksK7BrCwmooAbmap6eQJas1oU8VxY8nX9dP1TFmY5qky",
  "key35": "4RN5NRKPSD4RqEzXrbDe8tqGg3ibABuUuPPF2MXLsm4FSpgYp2FRFUX9HeUZj6dshEDT1BCVTqK1VaUtqm2uZZtM"
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
