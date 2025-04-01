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
    "4UMi84p1sRdQieRpoYGfByr2299s63psDemyBGvbynB79fNu1DqegGt7xCuFRDzxkvyV9cac4VjCbFfPGyqgAS14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1hz22dxMMkwWcDhV2gWLeZnbVVSjTmJCapfwmJVTTDB8BaguFEkbZLXpBbAt3u4epmshcFFYQJSrydr4SGEPTD",
  "key1": "2JnZ1wQGqg2KhzQBpTEQqTVQ19Sz6F7EGrswV6V8z9EwqEPq8Sr9Hi1gPGHXEsx2iEVVZzsNPU1M1yF9U8Dn64Z1",
  "key2": "ggqyJYxALUHCriiZ2vE2jYQKNJ2SipXKAZCTLFDfiALHSeF15VNmRkzhsiiPX59ua2PwiiKhfxdrYHjdGtHCUdy",
  "key3": "2Hswkv8rC3Kyc34xeS1Gf858xRgEAHoioLYGki2S5WQhojYgtPfoGKGZVTt5WKyJq1KzzcBKcUtGfD2ZB1VHpKHd",
  "key4": "5duRGRkifjzz14d3u7hTrSvGnFLoTqateFb1wzDc1t2rT57A5g75ckNtiXwRtgP16znmUvSd4c3g5qJEJ5VL8P77",
  "key5": "2iYfoxrENJecUhpofs5nRPsUrwFJjvk47KEuLUsv2Sieh61SMgQyDRvqYSW5ALLFWGuGKgjSH7W2FG1vmNzsb3DE",
  "key6": "cYP7vuptuN8XspvqRrYjS1LabdvgRp3mjPCzSyenyG2KqwvnrLfUBJQRv4xPzSexEgLDXLECEkhwDMHxnZvPr2A",
  "key7": "kv693PjJSoNHF5pocCtRBh2UaCRp6Sgih86RktwcZEQbz2rjcYVJXTSh631aruY8xe6yGgzA8bvgybC7GxrCFbd",
  "key8": "2TTsHpS4k5ZZmog6zv13mjHSfLZG4X9ziLvSCmuXNJx1iaLVRhe83VPHectu5UEQBBXz1DnAezr7hXhzECFu6zik",
  "key9": "4fttTgtuK4KGicsUeAj7KCQ2wDr2rEJ7XXSiKNhqRFrDUB7e1Urm48eouKaVoc2gjdpVT8ULnvavZi7MBVQB5bcn",
  "key10": "g3NbUdxjZeM89vkiWXAHYVi47TKQWBEfFngKNG2m2MQTjwLSQ72LrszJ38UwwBYBr9yNb5p3t7Yt4arK5H5rnyt",
  "key11": "2y6n2gEEXrCNpFRafxRRN9XybHkPdRS3zV8C8Ko3ab7e1TxoWiwPfDvtV2UJ8yYa1Mwp4zfV6Rq72MXYYJ3W9n4r",
  "key12": "5BvvbVi7Yy8e8NV98HeHPUJsnnTjyMaT5GCfUYdNXGrMxE7Q3gP1Cn7cYes6uRwK33Sy4JccFLYYYLWc1Atp23qS",
  "key13": "96L1ozNjHABkkFFH1DWVpCzy1ysbeAB7ut9RjNjoojvivjZTR5BmgDEEHSb6nWAizx4HMSZagtt2c4KZXey179A",
  "key14": "3ruwEqnq2EGViSMWXXeaktsZL5yrB4wY3gAUERgD4GS12xY3HhTo6aJiNxffokUWLQrUNBy8mGhEwJebdibxThWm",
  "key15": "29nePdYUTnWGsUGmjvrMmAGWhMgPbgW7qwWByD8Mu4hfV6kVS9ipzcMqnnrg3XiWX2T78M8KBaudWPifYJHfMTzF",
  "key16": "3xaU7Qh9EJNZxWCSsZP6p7pv1k1a36v23F9xtkvEr2t5sgDCQXipaXgNqazn4hATuNU8BmcUcsLQoBjW3B6rfjpR",
  "key17": "4whz6U6ED7CqYonCrvrzsURkfeqeHLHFBzbuapaKxuv7Be2NpKzy53FiTHn1jzSMC1BUAXQ3Yo9anWBVb2t9Veb9",
  "key18": "4Y59qmTkzhAWWYPsDR82MRm9bp8wxdYnMNr7L4cBrCBUKTPFuGxhLPHN5TJn85t15r4kNdX4qy2fyyEk8x3vADdq",
  "key19": "3kStrSL1icZ9GJXRyT8bGGnvipXSz7iNghW5aGnXGwkXeAt4tpS4FHqa2LkZ3tLLWumZJdNyAGLxeUKVgBcAqJSU",
  "key20": "3L314Jt3EgbQxpM7Sd7hKHFWeJtRTzo2wvcvd1ReQzZfM4NR8zwV2X7t7NuHUiAvi9RQgxQL5bBEvufbyGZLKbKg",
  "key21": "2iQzZtroCri4KpHepAxudzWRsEi4cNgeGigAEdP8CHy4NJQUWTGsiTTgV6j19Q8epSbqqmyVJqW7jZGck1tm3sBY",
  "key22": "3E6CrFab4fCteXUcYmtQHUgFh14rEMuhS4t5eX8JGqyGA7k1uDCMrMpXZKyLaDPzUCDdPcebdvDWdchrqUfHA8u4",
  "key23": "3rS3qtsdjv1exgU39ZS4cRuuYkThn7KfGMLpSxbAAw1dpAQxX4SadvgVu14YYGNzmToYCcPeVsMYy7xGN9BCNwd1",
  "key24": "35zUo5LG4WXLZZ6G3Va1gAeyTvQLBJSq1V7Eex7xm46AsWrGSjBvxsqoSp5D2iQ68nLBFcq9y3VoKWmYxEJPFXXD",
  "key25": "3zttngrDYxZfV9roAENLEgGrAeqdNnYkHigucJBiVcU8M6geGKsbgP3vAWzUgvfqsXVgaVJiW9QR6gX8XnKVT4rT",
  "key26": "3Vec9QGan68G1oWxfossBQytEK6We1uvwShmG6NvB7vUPWLtkgb3oJR7j1dwJnh38gn78n1zhaaoj3DTX9N5b2S4",
  "key27": "4NfGr21xc4CmC4u67UNP4Kcz52ubkG9JtWKeZNtumqQoTxNapShkGhTDUHWFmPUxZPqVwPXqSSxUFsdXy8WTAZoF",
  "key28": "4TgMNwxtpeoVYV4q8CFjj8hrxz8gE3xE6CNb2yRYPFazrboUmef974HkH9jpemUXbuTiH8wiHoxxb5HW8tjBUzQs",
  "key29": "NpNvWqtzrpWmo9nuHnLgXK8f1WV3toh55AokxCNkAKs3gs64xBifrq8EjYtqoTZ7s8E2BHrnLU1dXEHtr7LspSd"
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
