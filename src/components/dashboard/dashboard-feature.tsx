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
    "4qbhoJLTYLbckfD64KyEZU3HNjFhEARgLRE2vUTdLDyghCGp89FiCrFSi8an67yF5cgRU2nEf9aWopS6HfjN5iBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBjMXryKZwsyRx5mx3sGdd4yK3bWiuFa1xBmX7XCEwr3Jedfg4Tv19R5C7Tu5GyAGhh21xDBKjN5VGfiqWdefuW",
  "key1": "4YFxt8MWGXAiDSmaoWTacha2r11jSNPYC3SFrrk8u64JcBxqfUsso63ZuCXjMLzMsFtNYYSxPWjNPsGRe6wpRv6q",
  "key2": "5TPeca1r81biGmidpCk2tYaspH1QrptfyTvZqEduH8drtPHnJS6KcSEJ2LajXYXLnr4vjCXoyFX3HmhPqJpgFbBg",
  "key3": "isvnVCeVS5XEDa9ftfcEL3jZJga91MUyaSM3btC2Q2j9jDLNCLBAvjhKvEje84c4u5Xs3go2NZCUG222WHZRBD6",
  "key4": "4M6PvURsJNcB2xGZDrz69eAcY3xJ8xdx8uNWLexK2WBbnBps3CtNPmsxUZrdXv9Du3tmwijHwftZK6AYVSSyzqHe",
  "key5": "5EGnpPbUXfLWFDnetDmPyfnWJFfZbUm9sBnvt3PgqSNscQ8wf29fd76dhKKQcfk6kCtTaSthzvb2HoZiQxb4ujcv",
  "key6": "VeSckYm87pvENMcsM5eKXjrXiQRcfEgqWMdZSHKDDxEu8ta2arETsnaP6LnhqYHc4xQSTnz9ruXRHo5643eWsPZ",
  "key7": "emEEfkACBLU4RhtapZRf5FJjgPGCbiBvXZ7eW1W67NABdnYphGQjBBUJnzpzgGS8XGt2upz3JzrXL2j2e1ENHyK",
  "key8": "Sfrha8mVPUASZK9BYwxngw7SPdNyB622PqqrsSRVRRrzNacpYzgxUwhVWH5GTquSRhBcD8Lfz7bGvgeTwXiqHmQ",
  "key9": "4smE2s6v4aHJx6Fwn3qaQL8woWKR1PvRfCW525CMrXTHNpnJEzX9BgkcGxGrE3whFKhkHKPuEjWiF1dos2xkVqLz",
  "key10": "2q2tETnNqwoFrmEV2UtFwdUk8xiuLLsEAvaLXmrxqkAmUGyDJcLFrKbeVMDUkLY62iErvgT2KGfuB6GsizbgrKBz",
  "key11": "61CfKoheLmL5Kb5t7n8ZR45dgWvGXETJ4pXbeFmvAFY3Fuf2vHZLXPjuumMarnPtL8r7691xeSHTze2L4W4GW13v",
  "key12": "3eZfLudHg6Q68iy7dSkPrTxRb3EV1L2k1csL3q6dx2UrR7SfXGYGY8FAye9faBDhCKyRHCkyB6g9H3UopvSLGSX6",
  "key13": "61bg3NTFbhTtgWGevvooNP2p3Dm4Ekne4owkueWDT8UMMcBKWhTaW4BxBk5QiA8TGGxikeJXpCqnArRcgbHt9vx4",
  "key14": "5ugFuTjJA255qmyrZTBmfDR4f881D3z5HkijGiUXBe6oHdnQH2aP1v76CA7yZjHbo42EQZhWPcPioT5JFC4sVQwi",
  "key15": "59TVriAmBP1gYN15AjFtUdBg7FWE6LUau2ykYUxTs8ZDfcABffF4D1cXGBKbgWxHpS13nGp9MeaLwBqHqwvG14fX",
  "key16": "2pZ7nRa4QqRHtURfAYBWJg9kC9B93cekyTM857cFk9t7DUUBJ1RDsMQ4H5NWfUXj6fgT3S51FBcABf3Br5vHgKYF",
  "key17": "3zKoWsiZCfuC5bZ6DzgFHiubHMT33TR7zNRGp1yLb5v5pkUShoJE7kuNZb9Gsubs5etnciuY4ZVFDQL79iaPiwHn",
  "key18": "4y6H4PRXaRuXdumb1tDF8sxxyKmXUdJb4xVWc4jzkLsmyZQYxzg7eRpyxZpd3wscKkhi3wsRCD4f8sqpn3bh3WD",
  "key19": "uugi9PsnCwpyPo8TFtrtHCQqRJR8DBWJTt3ouZ4pp9TAKbTazftEgxBAJwg32JaraF4iuQ2gJavJCFJbr3fdVpr",
  "key20": "3ZJYdfCr8DmjESXwnNSBe4EmnBQ4iPdFehAk1J41VnJsgd6qMvmiYSCETpSqo5WNbhpi4X4eoP16bbFFvUg7nW1d",
  "key21": "2iVSTKexV3zPXkUUrCr3rrZkfH5F3yATdub857axYgUAWMsu6xjMGwdHftLypSvks9Az7fey8HzuUhn6JHSdGBtp",
  "key22": "89rHBU2VftyRtXYtgUbdwbE6U7ejnUUGs1X6hNbCjshmE4TaeTwQB8NtNPamNt6xHDkvkfdB4LM7W3Q1nKdsS2r",
  "key23": "4fepq5wWWwUrt6vXzk6QqG6fsDc19KADQS8GD4nvDUTw9JAX3KwYfRHWzMDjWaDqtVqt6A3SYRV9bsKHNmrJPzUv",
  "key24": "p3PXXaJJVEkPYZPE3WLoFB3pvR7a9woQfPPAgvkeieaTHgnkZJrGWDa2xEXy9wmaJDHpK9gEAZm93NKPXPxtEwt",
  "key25": "8tFT9fW9sTMkF2fGheq1k4SDsGsgMHUxSVT7p7fYqiuu1EDmifUGQYFvZ4Q2YV3eW167UySKwboNoiWVCJoADfq",
  "key26": "33hmwu9adPKjyL56YcpRV39noGKtVVF6wZzFq1z3yKudkTN7rrXmp3HyvHUszqZAkv2wyJhVvVWETHpkhULKFa6r",
  "key27": "3DVVi5dTCFCkpHd6CN9DnXfTTwmCzangvtAHDTLX4GgvbPJNCKcvwELmdtdnkd78cCta1V3QN2jMEkAr53guXno3",
  "key28": "2rKZ1wM7VaWZfS1384L13RquXRGmQcTb5KKdypoFpT9jQJn1jF7jfkhSpG2ZKG8Y5Ub9g6mSmFaEqFT6jos7kqJZ",
  "key29": "2M7q2s4jZUGydsHzeKgAfbKiSY3rQUPHkxS5zCqiJEYNuw4tV44sHDsZAY8m6ocjc2eTLpioTaLqfdhNkBbXKPcC",
  "key30": "62N61oMKSUBqtphZKA8DjpJnrVUysRviw1jkxnGanMBb1oDc3wNQvKsffAt3eB4LuLLJsLmJnWgjKrNzSdttEBcr",
  "key31": "3v5E9jGFWjowSQuKyCpvgcCKDy5kX2LuC2Xi9N1CDM19gjbELhjLL49PED3CuD8hZknYR1gBcwphff8Q1RMSsQz1",
  "key32": "4HFE5A7PDPWsjpqKTZbEMaEv5276Ddd9yqJz8DuKBtT6vCNi9PJaGyLVLFFaD78emNAEurRmhg8kTQzYiKnFN97h",
  "key33": "66T7RNXYExbYf3xFMTEhMPPmeQawAs2QC7LRHN8mSb7FxBAVT9828ZvcREbC2jQGL9g5WKZihVrbseTZipa92Fpq",
  "key34": "4cGNSfyJByjZ44x5RSUDNjCqSu39gcQJ8kN4ggRSQpdJCnsgpXPS55U6hbY1sqDaWeAUfaq21qKLAUuD67WkpHR2",
  "key35": "4QafsDwc2ygXN7TD76sqFFkmw3P11qRGpBF5NMzSjQisUZzv8c8U5P9Gify6WcbVxxZxDGkRCLLUcwjYzu4D7576",
  "key36": "DcB6YdEYPaaHfvcc9g5oBs1uXsRBME3iePB7dCLb34sE3rKrNeLCqYM5LkpMyny4CxzkqSUxA4SJmZHyH4zBcd4",
  "key37": "3WBGtEzqZYGv5pRNyZSEJqLtafFJirwznSjqQ7KdkyhMeduuBKmp4vTL1ZkYak3n5jdZgKbKNpRNYx6NFUQdY5hq",
  "key38": "3YNwRsa2z3KHbzmHt6CWAHFNPSRvUUaFUVty8tsP1YCWctVMXfnBfUVMs1U9kfLHKtYNXbHCkAm9nnr2XGUYJEnz",
  "key39": "2GtgBYxzdkPLZoHVyZZhXencE4jWhGEDbBGxAq2YpoqFfdfi5oxTdivW6JgK6GR4Gv9N2CsQ3vyXvxoPhoqSJMSv",
  "key40": "2Heokv8rq2GC4D6BQZMKM9ixnhZhR36qXcFkLdJ3G47VHpLa34QeCQwYYwGyJWT1DBbvYKtTcAHSk8hicEviqryw",
  "key41": "2CCjBP4gFn4foWtABdRFBmbYiG5RVMDZQtcz3VCPACfwhuTABoHAmUzx1WbTEwCu3E34VmU5g1LL1HG7rojfCdWY",
  "key42": "5TPq1Zamihtw58buTTCUofewzRe5rwZLWZWUFxVr5vfRb2epv8owkbR7eU99HrNsoqEDojNXwfHCV4z2KFp7Rdyr",
  "key43": "4DUK3JA1CBGL8cgQVWUJmVR53Y7kd3UaXwKqy1UnJHW19pkhqkB46v3keezkSGFQLxFiPw3WxTJcJwfBjEZCJAAX"
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
