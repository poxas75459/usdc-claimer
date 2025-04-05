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
    "5KJW3qut6UsfjtKndABjeA9Zj3KhL7LqrcpeeaGzsc7sPSHGeXvx5JocmJF2zVgukEQ3JUREQPcWPbQNysRskL3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipmiGEUrM6E79d3LGMQLWPp2kya3i51zThiWVGZi8c6kEi471REendFZmoiyxpe6GpKdvhYnfb47pH3NYvuU9Yv",
  "key1": "aCkxFhfNGByjquwDHE3Ugtf16hFZs1WQnabikEbxqmGRwpmjoZADZkPvFRHnyQxVQQxAAKfsegyM5bZMMGrQ53V",
  "key2": "98V3GqDhcsceBwftHGBKPphsCvbtbur7fCShD6Vcc7t8oEgnmkx9Yj1aWW8SeVveU1YG9hgoy1y3tsgLVph9CoT",
  "key3": "wjmgGNpDf6E4NpJ5taRBuyYCwRLaTv714k8WDaeiEeDAoVT9mL5m52D8nyGa5RJDJj16PPDrQ4Xo9X5VgwswABa",
  "key4": "4uVgAEu35W3vbMkfy3BtpiyHTzn7D4YwZaLQs2bjNYkPtq6155sdbq89WbZPxYFfabAGiX4GLFGHbAR83HMK8A67",
  "key5": "29vju7seAVA2ba8jANavE6MaXWqXoaK9Y5vmUTcgEWprMpN31EEcmWmmxwXES3eoevJwf6j2JgNAtpsfmrmDb78L",
  "key6": "5kpNQjf6cTzNEG2hXP1MnLyg9NxsABYGn5geREqtxdecp1gw3YiuRPaGTdSfp2MrkZ9gG5K4xGegxMwAEMZ6mg44",
  "key7": "2g9AMqHoZFfuckfwfVcbyU84K7Fysd6CcJi3poBk1LU69uMhHKpKtaNfxkgWdargnEhUuzpyJ6LpPNftpbEzNxwk",
  "key8": "4qb57krsgVRdB894bpuqoiaSk5TNb2FzbkZtXPbRRpXfbAsPMDCiYPjUD9FFnAfikr1ibkVdJ7PfDQht9V9U83qC",
  "key9": "4bgmXLHUcz41ZzfyjfPc9VvzJvgA7Kk6zeMiBWFHD98Tw6bsuoEvfxzfBNXG3jaSq5jmZKn6skMccmFpc1wK8X1U",
  "key10": "5mTGLwCHTT6puDASDhGp5FPB9y6cietk6CLreRH93BZ2fAbo4ooDPpLfw4LVqbnb3y5HF25DEVtRx1f96oM9LNbf",
  "key11": "4pu5nDop6qn4Nho6jVRFpXN2wSZUTatLTcKSHkVxt3S8StoeBYWNXmARL7uFQZW9nFakDq23mBiiW64AHoLrQWc8",
  "key12": "4sh4mm3WbLQfMSoFG8AFXK38kQoUbsojjb9JaVyL676CoffWcmgBGtkEVnDRA89jzUykHUx5sbjjjDFkN1tPrR7K",
  "key13": "32KkWFwuMBpxqgZ6dbrxt4k4xsRzfSAPwGfbZ9Huwv5ReMM8Js87uAFZEVqgM4L1NvcCuy4NUvvGtud4M1jhDZzf",
  "key14": "3PfZvLtmysCJTpgxjfwBLw2NFry6icdc1vGzrrxeYzZ5X2qStGuDmifMwfASsBGNvngGbpGKmXFchBee7hVWnqtk",
  "key15": "4rPFq1HLTygy3Jzg2hB1CAGeW7KP5LSa2sKFFYjtfWqqCjD9utNej2XjH289czr9rrRp1ESTmDe72zCkFifcfqLB",
  "key16": "2z5xisv82sq1rnXJpv6WJuP9YdYZpL8qAvcGoPB853pkvEMq2oWpyXktJrSu5rgvRdFopQsWpGsY1QtMgn74zzCU",
  "key17": "39RpoHrEwzesjAdvGzqigF9gfoZmm7Uu6PP68rdCMzKwqBLmHLw1b5YE8EvU9NxH9PA2c2si4dq4WWhbCXuMxHZi",
  "key18": "53BVz8qAWec5aWESmhe6DXXHBUFJZ9tTHp3oxUrQRp3WLzv4F5nUgmsbKaK9TqWkNCPcgrkLpmjrKnpixgBSLCq5",
  "key19": "5SBuVXZzwdF7vaDCKgQcAfrgYqztUV8NpFyiJgE5Sx9Zn91WB29yNfkPeMeUrtUUE3wVjoPcpGLoSq6kYRR5fozV",
  "key20": "ZQePHYcBBne2nVXmgJRp87PawGtqKReeXcDiHb6RVVchMNfRN3FzGxbVR9swC1Na7mbmvyXW2taDNLKdyZoMQDU",
  "key21": "2fNhuxAYtMQ5vUVRueWYenDix73FroY1NefZXrkSznToqPTuCQCuA6LzT2a3dGn8LjjGD4uYyrnY75GQhEw3ToBy",
  "key22": "2ANoKQkRF5Hww78RQSuvEEp7UZAQCAe8BS8Ss7gd15dQzRotBLWXmbyYJRRA9ByKBmdqoS2he4wgdMu8oHW8sY2B",
  "key23": "4kj1ZsjjWr245nuEXv4RBnTQcXmDTfVhUXn9tAwFBaWJcn4SyqUQHpfY6uedeEjoiDwTyjggbKqnP7fkKDQH2CxL",
  "key24": "8GnABKGmsV6ZF2wzUFQAbjTRkCY21ADZU2jFwSq6SyAYigjigeGvf5WgFVkSzzUrhybBHJq319gEVL2JC69etar",
  "key25": "3W7XYn17VQqhkLaGDi3Hmh3JGfnwqNFdiyiGhXFoYCRCJRy6oLaA4UFzkSrFd2tGhafXQ5rbLkZKGXH7R7aGQYMP",
  "key26": "2iQHfKZzKBu9AaSnwijywfjRFMVMBFWdGtMwCBWARv8FA3wEhrhLBkZA1agZ5gQkZbvagj8kirmDTTQuT5LAnMnd",
  "key27": "dKNwP456Chpp3pVMSJ2yJHFtNNxSunKMcKxbEfCg9iAmrGsRk4Kig4SbfXwtAT6AD3otXaraexSG3EdrStMaPsK",
  "key28": "4V6ekNbin99ewF83TQW6H32FVUHjQQa5qjb1B7aXetByfgFmFniVWRigwBBwUEc46qVfZm2WSpf8BZfyR8JMm2Qt",
  "key29": "124wDHSfyaEtJxrYAMhPHW54sTtW46H28pYfbsL5Xp2zkbwNGbb3HZKPMjkk9GkPCCk35mE4ujcB1GH1LrVom3Tj",
  "key30": "3Aqs5Dkbo8Nk7hf9zuQH4NEGQ3sfazk9KedCBM6NS8PkKHVrA4nHGwgamNbNc3TQozER5vgJ3XFZHaKUShTGcop4",
  "key31": "56fM5whMZCSFgLEVtuAxCVdMhqRiUVL5sYVE181rZwNTAAPSsMsNGKEJNWgAQFaNUnCaAABnJsfoTj7RNMS2VWpF",
  "key32": "54bZVqSC8fjHarBQxn7qWgJxC44na57JUnjkhUoa7wLBpcAvnpUPJiGeDp1DQsUJLr3ga4oj9LnEnzJogWbimbzx",
  "key33": "2zAn29YttYAEShH84u2eH6vQCKJFQQHe8k7g5UWhr7pwFsaQvQU1e3jdCVY3toxhwJPaACi653fUcjF2RK7CfMA3",
  "key34": "4e5VaXnf8PuGg42rmh8mUewU8Y61SAC4DWWY4k2NRJE31bGmknepTaPi2PoofMPXfz18Lm4NjxLr6XesLJYWWePj",
  "key35": "52og8Mdpxz1RNNMCidjdLbFW6tBgMnGVr7Uj2KASNPyB8xz3J9YrBGo1Hp2byFw4wvbZEcuFrCo91vKiUYN6UnsA",
  "key36": "2iGiT82bqcGLa1BpQ4dYKUEt1BRbRqx92aaChwjoENADEBTTJPTUVgeEJtf9zTfPchpVeh673hW5t7m3dzDJF1cR",
  "key37": "JAMS5Uxb5V1ms18ErfjaHxsM1ggJ6u8RyPnvGuuqm65hj89PJAvakoVtGps4V3HZsWZjVkv82AhrCohMVEy2Q6W",
  "key38": "23tqKiX3wd8f9cU1N8jR7xFuC4AsaSKjPAEEW8GVobELQSsSaDB99V1ipDHScyeCHTGq7gXJimDH2LragKQK5ecR",
  "key39": "GAfUQ4Q1ry8NazK8isCYD3kHsRCyE55nMK2QZCJ1JU77RnpUCVxobJJ6QWogGnDAWJfYeTrtRZKCZWm7T8Aab73",
  "key40": "3eFLGXQTBv2btkpm9LRZB2emnMtQgg5fAG8fab5CZ7jNbwa3PBsPHZwqUW2RtKe2SJVTjCXoFecUF5SwXtxtmB5i",
  "key41": "5YwSSKWJ9yhXnYGfeFA8DfwVZkc8vh3FFPB1yzdjtFehGEh7TXQVW2ogSYWszT7GHvf1idR9mKzT1WRXVE9q17qA",
  "key42": "4CrmQAH8LKWXW4XAeZumSESZjFQbD2MQRt8VthDJ2iMEnksGMmkj8nYUa4dyALHKsGhMfMnt2FNxSFZjDYneKtTU",
  "key43": "UqAbemwzetpVHR7QomiQudwfn2uR4Q5TF4C7PewoejBWBfQoGsrD2dxZFrX9vcsWMKRYLFfcpgM3n2e4tKnkjLN",
  "key44": "4Lin3mUi3qvDTz6ps9DfCYUaQiZdnbixRyyKGsKk8M1NmHCpqLgSKeRUvYm3frAMxXyUxzkTJowA5X987pNfdXzN",
  "key45": "3wTWnnLYCwkdzBxRwmSaUgtSzXj7yFzYFnHR6H2Tbzc6D7wrW4g8LqgrwkWyVWv5bpz2bNG2owJPMdeWEkw5kCCz",
  "key46": "27BPSikkYiTWPLbZ6kQzvLi28KR7uVbENn4SunMS1Ed7ukJGpC3kgD6MPPUDHwrfUoK4htcsGRLFGo2kSoJiy6NB"
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
