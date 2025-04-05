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
    "XVYsjTkpdftdobresEGocdPnVcyRaeVKpTndgxrJQU7Eah52dUhN8A6m7aKY9G2skHpUbzx9LNQFNbxYpxV31Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEczBuVbAca2zZudRpXdqJ2Gt51e3RtV7tsxpLxdsqZUhu7PWtaXUA1GfYgg92GVLkUXkDMW1EV6dZMLAyWj41C",
  "key1": "5TctudQ6vqc1mRhSrBwUzdr5Yuxn8kaaKH9B7nY6wsTM22yzFFXmoH4NvPZqhmCUcT5ebi1HP43QRDwcpwjU6G31",
  "key2": "2unWcDn3BXaC1iWr3ATVEsyeVzJgBusob1Zko9KjWLjLSq9oGn453ZRJpECdcw75yRxwoYXBmnKC8dgnWRrL1ymo",
  "key3": "4nW12PtC4ZeV47ZDcJbqJg33Rq83QPEtWK3hgLeWp5qrMPiP8hSWH9cc5696PWYvfDGK5Ex6aTTCyP3BWNaLETag",
  "key4": "mCWGKbW8hBuQRdbZaSnLj6MDtWfXrV8Ynrjv2KL3B894PE7Gbs1d4Bo2fdjCMjbzXm4PmiiCcuhYFUwwhzroDFz",
  "key5": "5QkcPbVb8juvtMdjYErXMR8eVthK1iaJZu7yE8ZbYnJ6ty1pnnVht4TZx3it2Ccveq1UEmbBiYUsTuHoSXggizuS",
  "key6": "2kUzV78RewTrjxUcZfjarxVz2Fr8xJdnRydqqx6wjxyN4FSvy4yxPte9yLyCoJ9ESnB4UtQnLfSw17bP5RWputXa",
  "key7": "5TqctVmrmrxgdfdbucTTxyCiabMhg64J3UuvVwEj24acK23ZdgQjH5V7STaREXmJfuSaqv4JFfPVBdM3nn9qCgQm",
  "key8": "3vaSfVr4mjzyyU4SbsrCC4iqXoUL4QT7RX6G9Ld7aTHJQKCicg8NcXbLCppt5pyNgaAqD8d92qxun2jfYCZRpRCY",
  "key9": "2NBdkM4fY1FtpJhhST3BxqRyBp5WVPC9Uu9B2nE6hLxpa6p1arMjjhnxUsKTPkYkrMBiG9yWDSkNf1p9W8aNuA9",
  "key10": "4GY4Kyv4mvL8RvBCDrouEDppMmigNREh9ayeNZW3k2mv91ukoZXkQLXBD3F8Xvo93jnvhE9Yekj6KqUWAsZBwXSQ",
  "key11": "2r9jYVGxTN12V8boxeKpPTiEDzAZ47C6qZ4bCwGSevaEWYBd9R4rLsATb6eGszcjEEiShdm4rg8xVNikVnZYYSuW",
  "key12": "5xrudcLEJBHSW7XdijKsBncFDR3inabrjWfsLBsF5zPbZL8QW3idv74qskQiwSwyLrEKtJdDa5176v5xJj9meuUF",
  "key13": "66cNUtoaQ7PoL3epxsBvDhcqsg3bkyaLsYtj8c3qrPxamZh1YAfd1tJ3vhEXAbXTUZqxeX8P7ry9G9uJUD4Dm9x7",
  "key14": "4ZLyfHbhMQ3cKgCJ9VekZ4Xom4Lm2ZTzvtdsyttd56tv9ewNcESpLXCMdXudu3Y7puWfjZqwWJhVWbavFcuntD3r",
  "key15": "o3mJ5nNiT7PTJ9g5sJM84whu915yTquLcNTSrCLJv2Wa3wtaFSkPcLtRWBZKWtJuSNnRCJawHDAZTgVY2aE22nL",
  "key16": "454M1M88FFZiTxffJMEcAmFXDkxqMHyGSFDUN2bGUDQYimpyBSRSNhRZ9jhF77mh9TykHR5d9sukXA9uqbHJk496",
  "key17": "3FvACBNyhfwgoMZGGBsH8nYiLELgEjZmCPTDSgQh5rQao5Mb4Pk3i9ESVZypeLcwsZvbrJ3cYDEBJxvrueqtQUY1",
  "key18": "kPCeXpoxkaVWZLHudAREW547vcSPoGJw9yFzD53dMcnAB2Utu4Tvg68cn5DfJ4ZSrKioyPTb3Mqbfy67jPMiQri",
  "key19": "pLXEW5AZYq7Rc4aG3CjrZv7SbFLZxdwZ554JmN2sTeBcb4ob5rdN4AjbyiJ74GfxemHJc2dNyEPnpzeSWVRrrPB",
  "key20": "rznSTAfBwoBtybChVJ5fjqgAzwfCWMNfvMuP11phyJKMW9j7xTNwyvC5jbvouHGt22KjZ7YMbH1i95wKkeBr5NG",
  "key21": "2P83LvUn5jJejNSfXBWvxmy2BNuZK2CQBiWo5Y4Vt9o5VtEdVPjQtWjC3rwJADN2bEgCmjQVN5UfScQwWtwYuYNd",
  "key22": "2V1qa8XHq5wpgAdPwiyuj6raqxe9XFpfTn8etYBufkvKNcyj8ALFD2BFLzte1PaaPhnBqtyCo6QNaiD1VkrPJKa4",
  "key23": "4z27SAxpSSoZoY7BVuAVKGX5nkmhoq3pk2GYgWXrCAEXBgUA642RE3XtA7xkH3gcQNxDhfvYiWyiKoYhSEXiDdB9",
  "key24": "4kJuwoQaCoM6dPzHTQzYGiXwwBELzSpEBVZNaLCQfEwswxE52rWje1xFAp1yiQ6F3FQT44AgtpppGdAU5yKMXghA",
  "key25": "psazvXvRrgVJbQRwKRuHB7CeuMjR12JfLKWZD3MyN3PUgD2GnruU5shHfEne7WKFeP9LiCwMqJ71L7oriaUwETB",
  "key26": "1S3qksRiV71aE2XTrbmtWEemcPspQMDzJVJuxjBsQTMYBgjWQycy7P6vdd95huRRq81DdF9cxnwrCgwE5xDdVMj"
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
