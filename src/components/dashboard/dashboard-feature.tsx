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
    "4pa4E4AkyDZpvqtsfnfaKPqLEJcXubPu7QZ9Z7KkNeBFBE8M4Hu6cntCacFRpdyJySxPTgQL9thRznk9JqLTXXBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQuLGomuz4UbuyG5dBj5CwsfRGABCqpjcCWNR78kAg2fJ2B9yabgFS9vDX4169WmykvQCbK8ZZ9A3thrPWVxf7N",
  "key1": "4aayLPvMAe4WGWEL5goU5BSvscnhrAdTakqPZ7vQpPAnJHLZRYGabUGbz2VrgRiagmQozxuymfirueRcq5sFCP38",
  "key2": "sXvMX44N5NshV5N8QQQ9nvLkFcChjxVHSbzrxkLjZBWcuLga4y3n9JPmzERxgzNvbbuKv7fHswS3zyyWqJXUhjy",
  "key3": "2pKRWUAaQywiFeTYRN91CAYo8MBbj1sCVnz1Mks7qCWYtozncZwh1fvbMbN4bjMjnVaE3gtmENw7HzSWjgDXeDoj",
  "key4": "3WoRK7w5hkCMcPMVnEEji81wBtxn1VQBom6h9y4E7Hp2vpaur7TgkYhoAubyd9dW6BSLPpMVfKdV6in78WUGm8D2",
  "key5": "BELQbBNSPotrHNmgcKQZHPQXjo3yomf4MyrqbCKP7Lst1DTSoSHvMPdzg7T9jvJrY1ahCWEkA4gViRe1Ys7HXzv",
  "key6": "yWXrRnfdctAv1ba7UDj7ZeCXfMsMbwtfzs7CzHdsdozAjz2qpSnuHDHRyMnhY8qGJhz6RHSkR54QgCk3oygq97S",
  "key7": "uecMCRHPxqnjVRM2ZZZ92GWYs3SeJNxECDcn85arGgZFX8FGYq3MuQVujL56d4G6DSaHnf7F1ux5wZfD4iv2Tyj",
  "key8": "4TDgmHaKh8WgWC4xyktTk2tw1ymAJprjP3QNFEcDVvCUC77SUFGT5WNBgMxJWiguodh1qYRjUnVW9szgQCiEn3Tk",
  "key9": "2cH8DeF1tDy5T9ToWDXi9fv2izTg2YmSbkzNWeNHj6gnp3NmXtM4d1xRx1WFTFLQn3zeHb5LxM6BKvwpweJkYK3X",
  "key10": "41Lou96ZFEAto5Qzg3qhMtgbq5jr2V9ijb4UMKNCnMpLw1cWg62dW3gLdBAvWUcr5nqQQcJCoNq26X63edHVCLs4",
  "key11": "5y6xnDwqTZn1QdA2Tq1RgYRcWhGwN6Xsj7YFMYq4dkHLLdx57jo5TzCC9f2nD5HnHTWwgJkNNXfNMRMC3ssXAp1x",
  "key12": "5V6Lt1TbNJbY2wj1uo56EA8hHQEyqPNXShFW9UomwntNXnHpkoVYUNKcUYzQcAHjioHiAbQBVdPLPVcxwk56xzYq",
  "key13": "522FmEHyvsdc878s5boKFybi4RHq4pihKxKH5uutVKPk17CaByoD49nDmxnFLSzjsNtdUQW3BrQefTpGrHHgDAx4",
  "key14": "4SYr8crBdyKRL5Gyta1vMzKmdaSH4d139kJovXqqjR2US75pL97UKKz46NNFKjFwEpqidt79ZDzrajYxWK2N7fQe",
  "key15": "5w5Sha9sujAeqeWKxWRtduxnpu1HHBC8R31xqWitPGNqf87w4bVc7tfFeU9VwgqyXLeMdRYFLeuXHdRjHm2VV8pz",
  "key16": "Hs3wFMuvpuBtJg9Dr2HB4QEzK3vQPGkYfq8LzftNCmFw2r53rqXwib6YFQYNXmvjxNH6K74C4vY9PExfaCnvBKL",
  "key17": "3jtGM5xmuiNAPUddc4HLQR2GHGtwQv4aQ1aLSQxNNcCDEpK7pjmhMd1DEeBJ3aYygWg1kuoLgdmYLSuY6qqVHob9",
  "key18": "SfKu6Pi7uZDEou5ciB7GnnnZCfKJ53QbxGZnMFB55ws4ZHpbuzTmzjeSNqjdZ3GmPQDPiS5Bv4VKm8ZchTGyWG5",
  "key19": "2YHtgJLaxAcurGWCHcVd9sqPr9cYdXwMdnpwoV1GqerKVXFTYx9zENdoRs2iC4CiP8mUazunz7koaUX5t59VWq7W",
  "key20": "3Wad137ys19JRStMpgSYhrbfXXiG6LauohEJZQV3n6mitgEB1fJBukpH2cUkj5tkHdcSazKEeYGNcaNtK2LeK8Fy",
  "key21": "5SXBgrnRPy9mCxuZUXcRpBXUZ5u14s2v555upJZSPDREMDZx8XYzE2jQzFqj6zetSLHhX7PFLKsL2hKz78sy7zgz",
  "key22": "5iqCg3kFtiCft6eDE9ysZPJjpQkruc5mYmft6v6ZAwnFhhYvsLbkAq9zLMe49eJaxy6346DX78gH8FYJr9djwz47",
  "key23": "4ZideziHdGXFvsYNfn431hHxKkgKVmJKDeKg1pRPF8NbKcSW6Ej32F989xz9j2ozLwdSFGUXebZvYVLETRhMiDtb",
  "key24": "2dBAdQTVXZEfiphxdnbBkHEnAG7mkJYjSU7ehURYj1bprDUEcReThwbBypSjc2BpQPVzoVWWd8qY4f8RhQvbNxgx"
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
