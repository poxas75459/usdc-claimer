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
    "38Xf6kFhtJQZWgGbceAEHEdcPdCF8JVB7wxN8ETJ7UwYWghutmuSyT45fxJPv2oYaUkik2P75GVpK6WGe494rbLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrUMzkVigT4gLpekn45swezryVG48ZaT9QaYbYWUTdyEPLpRXsvqXiPZcL8YAGFvby21KbnMgKhUxa2gLTtLVEF",
  "key1": "4u6rpQGtK44iPqjPouQ7yy1xdroQ3xTcPovUoM3BABAvYWvNcE7o54Jk3W54ycARN4TYL5EaL4q77jRZdtpkreNs",
  "key2": "5ZM9JinftpaewSiYLK8A3XTCz3yQGVVHaSBoMTCE19cg2K7MtLE93KAdh4t7ndTTYR3zm2nsdFB8nzyGNk95zxR9",
  "key3": "3QD7GFKHxc1YQKpMc2qvY2NMWdfm3baTM5gsP7dueAUeGbUYKzgUGmXKyqWVPRG3yJgnS75VRCUafXRL183FUmyw",
  "key4": "5zeSx5NfyTYzS3UTXB6BC1k5EizW2oVse2WFNR3xSzr5fHMweak5q6Y1ydG62KaTzhh7V8mXK6ywegSvQHuNEB8y",
  "key5": "4TP5m4A4GD5wfSKbhd3kC8cNhheB8KWAbQTdWin9FPwnrPaj5Bf6gz61MXjxHpizW3gBQzfKHimKmKnFRuGQkmja",
  "key6": "3zAwzWrHckEKXyPFJVeAMyWzwepDLk1c8c2M1f9qJFpshWJQpWb7kKTPM5mLfJa61U3JgYxt8kXCbuGJEJMEzd4X",
  "key7": "3bk5iCmpWisBz82cJD4y97XcaWdsuiR36iXbH6cPvjmzRXLc2ZeNDngQ3vBwSbtvEKzRRM39rhyo7wGVB5BkrxcL",
  "key8": "4pXWkg6XuRANbkSL31XB49RU4WhSzU4ddsc1Q1Kczwed2BnXeUFAoPaa69WWaDbST699U5wVhFq6qRy2A7SPxjDi",
  "key9": "4G2QFVSsMXNtPXTW2XELdRizfCL5tSvQACULDj3Wx7171RqNQfzXQsspYuEUX6uf6251czNCoKxvxekGwdrcttU1",
  "key10": "38YzghBEZTXEbeu5992x3FrT3GgXDt7Be2Y3Xft2bsP7hv5NxLJGkASXq63767sNx3hyvRoCUa2i9xRuxvyX75qK",
  "key11": "dwiAE3cjy2nxURocwxtAwMppLoahzY8sbXN293xPDSU7iVMsUNQu1M72efo3ADWWwzuAVZpJq5EaCUoDfDN9obi",
  "key12": "4LpmK85oEoardywLspS4vEGBshGBBrsRs23q16TpBMLKKccRsYoBCzDvbv6f9CvmntoZUEDBn322yF2tgTBpxZUY",
  "key13": "3xFDZGSx151LkTgATVA83TyDcVTpf1cYJ2SfBc4hS19Z8iCyakMh7PtfhzFsawa2rhTWcXA8C8C3WWVS7QReTb7g",
  "key14": "4hXr7YM54hAoAjkUbkt4jL5muyg2Nd9qfXGnsQs3aMZFjp2DRY6PFJmxkoxpe54EocdCNffB6LHPtBDUJkb5ECtb",
  "key15": "eVPWciDFBsWyfxPHkSFTYScePXc9fjKEERVk28ZNjRmF9HLZigC4ieZfycekg1FkK1hCCfSoSaPJC4YmH6qgdnA",
  "key16": "5R7TJbtdCGTRwNRCgAXHHV8ZGJCT4NbWRR6MDvJmPQ9Uy1gi9nLL2v7YKPYvGj4nbvdccyi7QiY4D2qRprV6J17d",
  "key17": "2NdHt2jiJZ1KncsT2jyE9e7GaipzzZ2HWbetXCXkVZiHsgH5XeSXbkRiot9Jhd1cbBUZN8vs1ADRn5eKG84RYmG9",
  "key18": "3yFnYf1uSzYnDYgHAhyD3Kr1fTZ96NCnCS7ErzPaZjkKfanYD7TKpxMdCSheoW5mDag2czgF6b4BM6q5Kei5aAxK",
  "key19": "4SZK1uVTkBtmnPddZ6zs6JaV16RKNRxWYg269rzDjTEDCsjZ6V1uYWtS1SQHZCqoEFtYw7qSE9CNSbyzHMbaMduP",
  "key20": "4hHdYsYTzTMaD8gWFaDdhnchpL67qJKkSuqa7LQ9JAotR5PQCsGNQxj7htpNWuMWERaZWPMyTZvYjErxUHJoYP8a",
  "key21": "kEKAwPaPPvLeHEJasqVFY8M1LDBzFQS1gsAwqmkaNexGxxTeicgJpHYKNJaBJR9i37rQwxpW7qL4WKk9pQx9F2H",
  "key22": "2xxMimx6QGBtmaYG9DTjYYf5jQADxitoyBT5mpjYM6zw1aCDDxi88k5mxHD4FwcmaaAGFYNwJ7ZZSTXYrWhHgTy3",
  "key23": "5tVVcyNRTHriBM3SFjsdfXDiLJyhJWHyUYca1X9NMdoBAmMDFytMjiyhMD6YfE8bs3hEGdWahRdNgaQ6egoLFj4y",
  "key24": "3XGJNURsnJqkysWmjidSSuK72qReqCEQSrWP4xBDcKBaPzY8BXnHdqYHMU1monQaQ8qqcBfi8pzAvCnnJFYBL8SG",
  "key25": "64RVz4gTqDe77JmPQ4UNWzmrSapr7ZoZVdFtdYRufWXLAYDz1KLdiBd9TGskH5VKoBSeNFKnWhg4iDgWP2TdzhG8",
  "key26": "2Dkx5oh6ASqyFVTU3TJVbRyW8ScxNzV4qZeuDYX3o2rPwi79jEYQC7S5YMDXDgX65bJkkNnsGed1w9BxXijfNcwS",
  "key27": "2Kb9vGsj4JXK7U43o3WSP6NdnY1TH8sqshqHoTeZQ7N7rA2iUvm1tLFrD7f4Y1PJtMZRCCsnPc2iJzgJTDhHDXu8",
  "key28": "63JkjWk582HnxHqhLjD5vVJ7TBsDjnU11RvxPo85bksSKYpUeitQsJtX1HMmf3dmBQKc5juCC2R7d9c7Xvnc3cZY",
  "key29": "2Wyx9hHMAk1mQ6GZwYPKfNTbhAR1iU2wDgYaCNPAdnPirMbRkdLuFrhZNtDqu9vFn2F4Kx5Y6GHx27Ks3ACZw8pS",
  "key30": "4zrTGy5kN7XySyx64dSnqaDsjoZpAorH9TCar8vkAFdMEPCYATcj3hV7a5qo2NQzfPkxgun8huqgAKSDZLrQzN4T",
  "key31": "5WwVDpyVcHpVnXjg69Gh6tyhSFwLHwqJudytvWp2zydDUTDm3vdwvKD1D3AvLXpaibapST6NfvbZWk3ie25zWVp7",
  "key32": "2wFUSDrUticu57MByi5AadSA6FMif3sVgtVGoNhdEDG1kUgWju1Juhyw6qrp1JsdnoMGYzX8iDjATLzXhwQAtbet",
  "key33": "47Lv2X8QbZ36yFfmsMqXLXkQ1iGwb18zpf2WmWMQ79sdaiRbja2pVmvmdBwj12DCG9ZRT3bkgW8XcGUva7xgKgf7",
  "key34": "pUHkqz34S2qmE3W532vBjJ87KtZAuN6BMR89XjVfu64Ln8UtDRcTxGnkBjxrrzpe3E1ZbZeMeeLungL5oYcu82q",
  "key35": "H8bohZ51H16GBMoDoCiSAJUdxFHqEa3vXb7FbSaBHRqfDhsEXWP3P97pRdrn6ftB2WxJmdUgizocc27TAedmHbx",
  "key36": "4ffEeGmfRtduqXnMrERM2K5b2jTTMHuJQ1fRPhLkhGC8oQ88a5jyKXAshYxvh1CSaBSEFcm5iXnsZDoqFuYzDPDd"
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
