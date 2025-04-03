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
    "3dDtV5kfJ3bn4WkCrSUwDCJZXxYHwYVknthYJuSut1rL7z8roVFS7JsYppfNLHfiE1reFNpfhmMaGwTK7P7VeLSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBhT6YDw2AEB71UEMtg7eR7NjqLJWK4VpTSM8kitXsDk8teECijfu6CmZVpuDegGhykzYcmrfuyZukFroWCMGxy",
  "key1": "3odPpVFWhKVcfWcTHvwTKefxoGUWLZGg6XD1UPMseaAfj2za2xxkaxRM1VxRU52eRAMqTu8yF24gkCJMVbyBtdHn",
  "key2": "2SAFqSZkwu4pfgYUFeK4axxFAQf72ABTUm7J23YqaH4tT1k6wzZoz2embSPopGBfttwufMhAGhXX1v2Uo1SWi8JV",
  "key3": "3PNzrZwNd5hsaNEiLbtDqSXgUNos7WPJmt3kBPv9ouKWff9MbzSzXRT4z5xSoMTpbUcknKmg6arg5AMBYdG4YQSm",
  "key4": "5FQd2qyaChGgHMVY9oBTK3KN3jmViDa8xar3FHWWsfowdMwxyxMS3tvqxMPErtuqmBWSb8AWZCG669pHSCS2QvwM",
  "key5": "5eRD19xuJfUtzX7QFH7EZkZGCyJQXbGxufePBnwTTZe9EJnwak2tTCFDeMcPPDiLNXeCoHGMGRjChCxxa9UEKLhX",
  "key6": "3sxHphxRf5dDw1Mn6WFR9XqJdWuUEB5otwFECqYhh4Zj7xokby1V2ge3WzuotyCCGia84ATm9kCYdBJoA7fwNQoB",
  "key7": "XoaPHDeJrscgt8unHT8YcGmuGRSzzpspCnqPGG8CrVbr2PAWtXJXWfLzk2ZEp7wBGLa8D43WrNy4uqnkT7hjdx3",
  "key8": "4qBabGSJFh4BYJ259ZH5Zb7RQbMgYhHrBbvb1C4WXFPVK9cy4NcuSFYyqgjD8mZcA65Mn1g9HAK4Htvfgz8bsAG4",
  "key9": "464hR6cuU7c7FBiw828eKQMrc9Ldp7f7g2R6eNLsUC1TeH6e44L4Tj3nbCwwu8Z1yWrfKV8NoTskR8bWfmg5XHtf",
  "key10": "2TVpyrvYwiB2g2wEvn5ov8SAU1xn4Bs4UqZims8vLour3ecK1x4CGMkkhGqerQ3f41cvstooTKS5Wcy7KDdrQNam",
  "key11": "126bKDJ5FnPEs1amF76mUFQdmkkeSdHX7XJ44JJawEoH44K7FR9bSX1iJpRJhx7aQrX8GNV3rL7rWsB3zL8fXfQ3",
  "key12": "uwEi9GGS3fRkxm927ayBHZFHDYGFkBjcxNpcnESNVF4uG74jMiyfUPr8Cn4dSN4PcUVemHg2UzdorshCv1Bkrha",
  "key13": "55w5RGbwZuJweS6j5FQc1J1fVGYbsVfJSv2bubP95Hs71arXmzCBv56zjgycrncfWtm8QvvAoW1WEXvEPpBWfcyt",
  "key14": "2cobMUW6p58xxAKgWtT81ZwgEdk7WFqNrrGTx4c2dHkgqNuA4aoCszqEqWi8WqahHHqi69Zviad9UEjtMW5xLipU",
  "key15": "4QrPKv2Qk4aSqbNJYeiTTq29oVGZsBMUrQsHak44Uosg3C7rgk56RE5ULf9hGQhH4w8jZoPzJYcz8QUpgwJ3sXWs",
  "key16": "kcZAvGeHSrDPhTH6gMGWGYSyUxzXVP9GNHHT8cmQXz7rhV8MVCE1Fm55SqKNvdAbq7tTRhV4X8mL2dQ12mrgEXj",
  "key17": "5keYpeMCP4iqsQwnU8qHfJ3zeYicUnjbzQJRTgn8Yx1PEhVPmQf669HyfLVCmbx38wTm2irv55BZFRwZR5zWCTmc",
  "key18": "utkbMwbWEZVQq9FEBX4iCi6mPzTuAM4DxkBdgZUb8PKuWoRukKS2FAyEfJamU9ajTYwoQseioWiJaf4Jiv3YEqp",
  "key19": "5UBx4tez5mes8dijbuxJZPDBnNQASSE7mhdq4KHnxnEdoPvCX3Q2CYbMYdKALTgrBpxnZsuDS5VEmmDXjgoLqX1A",
  "key20": "375cM2bQT9tZRQRnUu3i1Ffeexv8w26HUTR4X3UZwpS2E6vqo94csYjD4sKqFXtKg7vwkrwC53jLcPyHUqHd1DEz",
  "key21": "5c9TYHiQeLRXr9AfDrmbN4jkJU29eF1bnneJtR6G5rqheVvScxEpdEk9k8c4uFZGxyjKDsRrfSchk2HoQMrXkkEw",
  "key22": "2awujHsLVQxz1Fdc9spBKRJ6m4uzjYpjE3wUFyXt81zjdn5q5Rtyf8vvEVQsndmK9Rksw8wDtDju3r9EzNgCFf61",
  "key23": "3XDR6c5FS3NcQsoDsnWhzEESJdPPFn6NLce24Xf6aa9xbZzrxnr2UoHohvm2DJeQW3PKBfL5TcP3KeYA19NusP5z",
  "key24": "8d91HZx22k22Nt2jA9xwBVAbCT5adkA2x2r69GjYYTLArb4jJ1fAzE4SvDVo1Rx6XhCbxh3wQPJut1xkcv7anet",
  "key25": "3bxubG8DqPKX8Ka9FWVBv4G6pvkgaei7zuhBP577uGUu4MTQHeJWbw2y2UdCPo6J8kTr7cVoaAuz1TRu3amfRcZg",
  "key26": "5f8rbyqj2qyG7H78VxaCfAifnrBRqskFuMGJKSQG8wYTLTRik3iiBz5xNyrdRZpqYSaiAc2R5CPTHjGZ95JEei6L",
  "key27": "2LmhKRthVLxyK8FPNuFPc5RvTp36SvNn7PHYdwDEsnQ6h3LrxtAoWZMWjWNXWfREF6xe9zc7iHPRe6d6fE1A82Bp",
  "key28": "4jF8EoCfzDNWhGGoBSM2X5zaMru5ScCm1TfMdT2qcnLrAxMJ9p9E9QAUfnTqn7h718kFNU1ir6rtu27VQ32WQJn9",
  "key29": "4JjKqxjMv4NkQ2txp9GvbgkLF4NhQqcGexybvhFB2Bh5vjH6ruYbcnghX1xXgi3aszpk4UBA3ym67ZyBXZPVPTXF",
  "key30": "4HwgQ1XaAL3F8jBfydTKHpa3Mdny7f2gh55ML2Tm2yptwPgBkR91p3rD3HsvAfPU9tTubJgf7eehUERRrqcPdB28",
  "key31": "48w5RSSaKeRXuEjrsnQeEnBhtVGQUaDrSecUDQAbuVMWtuwKJViUE5kKAFPmPXxhkH795BagkKXoT9uya5q5sp7b",
  "key32": "57peEbDJDJjv4K3gJos6ript4cNk2oNSLGRvYQkSfmWoRnMcWuQnEj8yuNpUDh6A6MSfKjysTmdp87tPS2KN4d8h",
  "key33": "3ytJSV4aYonWZh9DNKX2aQe2apymURU5JtmqrmexUouHpWEniVDe2zs5ng2FNXZTeynPXdwRDQewB7aU37bx1m66"
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
