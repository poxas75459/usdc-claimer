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
    "2yJE2vBC7Xoy8UMobTAgAiC5oigavAPpBp5EjxBifU6ZURePkbFRzSeqkr1JerHd9ayi9ZMswwW6W4tFxUPGwUe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X42DowPt924x9EAQJAvNXUo8FnSSJ8JXWPf7jCfadwZi7QYnhxbc9eNMPpEEy7cy9vHWh8C2JeXaLko8mYAgwXp",
  "key1": "5aCr3payqPF2if9fBDZbWWMhgMp43JmamyQuKK2yimTmigCXiZtUXFEVHoNUaaatiEWRAe434P7LKpUnKYfEURoT",
  "key2": "22J18sM6CgNkk1d6y9Z69xUhQ3ZS3Xd5Mz56Xg1quPLvnaY8x6PpAxu3UtNAAvq1cUrsy3cfYPsQzgN9ZrAzVptR",
  "key3": "62qsUoov3XhaDEPvZwRErKb95sHo5JnomGVtWUzdRWGLUEEEP5WMNAVYQGVF6hPWSjg3JHMEUHSHZrdq9NvndZSE",
  "key4": "3GMFUsmbgZZKGnphkVpGM43jrLrgi6XLZWrdHyPBQowEmzyD3bZ8R91e9TjUiVHVvDPnC6g3rNQ3QDe8DVgzpzvj",
  "key5": "2GDLj8DiCsRs92eDq38Dz2S3t6WgKpwaXPjWns7VXr8JmQixzG7S7yQHGuukttvmYJYfEhpn3eHv2gwRwowsfF6B",
  "key6": "2ZJf9zpZpeVACyE1Y4xEdnNCyTJ5z7Q3EwpaFb6y6ar7C2LUfTnnkPLRtnNBFXhQYqDJ5xmikuzSJbZznjs6b4YU",
  "key7": "5v7tYU5DxdKjntrdBn1vjjmTHRbo7qKJ9gzjzmyjBpwNDRU8noUjLcCybeABGd257GhDEGUm5nrhRptb7Db3uYMy",
  "key8": "RrEw8Wc31UnaWdtTa2U2v1VcUCJgH6bTXWvMX5pmTotmbgVV7jtjyXmJLy2xJJvB2bVh29hgkMw1LWVyywU1Zvq",
  "key9": "3V9NSU9kmpjLtmts96Kg2AavEBTXu8cPBpcCY5Lg7Uiyt9ceT3CsHJFqUZZbLJS6X7nyjENupoP8mhM56UtMK792",
  "key10": "M5aX8m1BtNytunqcJqaJoGSLz4Kd9PpAMdj6PQh5hiB1xE6YH9ifUuND2WKX88Q3xuSMcbdjXi2iCuXCodUg7dA",
  "key11": "2BbGdgowcVKeWXLZZLS4EbDW4yAC2AqVjBeWhd4MJq2kAunmoRezn4Zsui8DFSPTB2iMRDtuv79QwCows8CrSSgk",
  "key12": "3fCggGZSkw2hcrPDmieJ3pzyvVfY4mreteQD176a9yt1bAvMEt194Uoqd2gkwjxujhgnqg4LPP1AzV9BCL2fpUMq",
  "key13": "3pXrCphAhNyPuYLthbV5GhhcNhnRwXzwacq9QFr3CoY8mzpibMAV5PPW53RLCfjr2NuzY8bhsCuZ17SkGfNGAxPe",
  "key14": "XL43giG87WBauJsL8jhWYJegFycgrCNJnE43cmEeoH5vjUbfMM7cqRLxzKG4GhzMtr5gYp47tpsjwNAU6yc1PS1",
  "key15": "51zfZSo78ahUJ9ip5No2wWtKEuiAa8MddLPp8AAxDzAZJvRQAbsx3mEc8tjWAFTk3obc6LbAVMM4id7LWuNRbJrQ",
  "key16": "4Rg2vouarJbw8kpb9fkfrGG1twKAxz6ASFwkJ8bvPE4fkUdWN1uRMcYhHFZXdcaaD2qjR7YEP3Ep92Yu9LB96Hu6",
  "key17": "47hDse2hvQRf7nVTVTsavmznsBFRqKVDKLtDnUct54WYJavz6xJEZExUKSouBnmRxyWNribQFwLo7N8LUAQQzYxK",
  "key18": "5H7nqCeyEWUmrxaF9wkK12zD2DE9dQxA4PdAbaRsC8kMiqvMQwaVW3g2d8nKpjwcmHynG2RuF883rGBWyseDsQbm",
  "key19": "3iRdYBztnyaShPTJdF9VDbQ8ZTfSfnj4kzLvUtM3rbTnrwrwjVnu2mg6vfjmFgGiKkvVoYG46g9iNA8cDWAG7BVH",
  "key20": "5pJTrubejZ4YcQ119ybtbDdoxGTm1a9bxhKnEAfLVKoho2ZjJH3erU9dY2uLNaJRqRpDX2Uemt1XZzTpEh3JNW4z",
  "key21": "21e1dU9iLR3LVRANio5Y8bAmCkSZadSmNGTzZt693nFaVWReLTdKsRpU3UXcqV2FrjceXeGrCvVXN7bzMhcX27Ec",
  "key22": "5ck8iunetSCW88vQQvFu22vdF1WxnAcZu39QM96uZbWHm8kASh86ZDQQwiR7nomR32NewC2LLDazZQj2JaEkG4at",
  "key23": "4UQdVAqUD2ZXQ6bwHSvzUJLh12gMgNyqZS1Z3xU6nT1FCjahmFB3vDPbxo8qEGjV6TCmv1Tn9J1MmmsxBfbAdXH5",
  "key24": "qWnHwRyWjTdZxLsdb7A713JCQAPk4jMjMTFYfh9uujmtWLvMB6c5J9NFxx6N7sqPZexLjfHgg5sDEMsf5aFtQ9H",
  "key25": "4L1cq2rwG6ZGp9hoZFLWtKBbiY7PkDjyD8qFg32mk8gPBzfA7rxgAq2VgF8ytZBUkwkm4sybhTG8u6EsFDqY5adQ",
  "key26": "357V9XBZV3HtFSr9yhd4T6nigQekaRviQP8o3B88uLiyrJcw45RqmnPYvzKfXnKCY2vuMCKx1tMGQzwHiKeFGfyW",
  "key27": "2f9DWF5ckWuta2VfFhEgGP1q8FR4urgxce9XRLT3s1AFKDC4Pcwr2Jd2qLpqrByCTJcA8gK2i1WcUnffrqTJDF1t"
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
