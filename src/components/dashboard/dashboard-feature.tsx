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
    "4FbEXs1KAwWYs6SbuSZ3xqViPfRQwWiHkpMAgknVbD142Qg2a7SL17e5YQm56e99ryPbyzD45eDeJATKFmQgB6iV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAFbQq6Vq4SgduCwpffAJdoWHRHKGcarWVY3dQcrtnTsAsaLrtGPhP7wo8JsNCbRuQkjx4sgRwC9yM1AqA2iYGB",
  "key1": "5SsRDQ2QJxEYEKPuu94PXKTaCXBa4Vve4dXJ26YrbVjg6YbpUcFNpqQ8XMZ2d28ppCWnTLh6gRPoSYqBfQ9odWyc",
  "key2": "2jdq5JfBZBPqRwEKWBho4iimwgUCPKUhuL8R579KkQ6fzzwGMUF4rxdEaRTBrBg1tG72Wu3ADuJFQE7uF9bF2hB9",
  "key3": "4ZWvwkuMg1pFogedvYRcGh8AKT31ja8eEtGnpywpXkH1LzfGBTWgK4rrLqjot6kqiHWKWv7t65X3F5wo5UFAXPVE",
  "key4": "4TDEsQT6K2Qx65NBZjbKYGxFzABz81yMh18FHuQ7XJ3HNhDpABcgvwkHD5hNm1QnJjr3QPB1zrSMXwP6it4EFD6Q",
  "key5": "2TTAhPS3rbaLtHVSbQTcSPfKPicpXn3FWfCTRrr9NtEo9BVsex8VySyn66t87zvA7qzN23iRmRZSRUmdQ1xXjLjm",
  "key6": "5naJ5McqYwMeP4xuzKZXdWwSwjS717Yq6VpLvVYD5JAQrUj7BpkaSRT7dg6mduudmkrcqgAC41gctTV8dDyU8AZR",
  "key7": "4GtyvUcR8UQVefWv2MijxSY6srcJsjUJKrBeXACH7YtvWE4NwRAs92kA3HaYhmQwV1enq8jk7LLGPPb4F7A8wR4i",
  "key8": "2WYDr6xnmgy6wbg1LJiJA3oFwHx8TrPTb76iKDCbbmxA4rGNsXJsYpEqTFocUJAWXN1B8ogtos2cVL8Kbx2onfvN",
  "key9": "4xeNKSbGB6Jpem9ZyaQvvXRuVLaotGwRGoe4aFVE7YC2Edgx9tpdKTHpFy7CGcRhQ7oVgkKwYP6frTjPpuSUE14d",
  "key10": "2bwH6JXqesWXJv15KpFxWUuC3dPUs75qLjMBUkSgV61qcidSNS8Vb1e9rio28FE2mwxokS41DzUwf3odKzgCJWEf",
  "key11": "5bWvLLpFvuCDtmFT4rD3c5zbMuepxcmTuogcyEm2NKrjX7MXoe3du6pGjqVjUC43UWBX92qWZWR9y6JNF2fMdEWD",
  "key12": "4UQmNnchcvSmHZ4JofNDM2L2SwnyHCV5hVRwkhA1GTJMtm1BKjUeMZo3y7KHeSimHeWXeevfHrqrSEa9rbSPYH8m",
  "key13": "5usBtCRYWaAfEKgnvmqScPcW2QiMVoXJEbutfSZhf7LbX635U2owQmhyoadMfmhEBFwCk2ERkxeUTe2R4cQfFPrP",
  "key14": "4mTRE5tpxRuYoqsSH6RQz2eGNbhLmdVKfZ4ZBmrGv3KxpNL77ins4tCYZUMB5fn5cRhNAiY5GvxaZwo9mkjVLR5r",
  "key15": "4faGTFBinGVfZCubS5iibyAGfBWDASgLDePaz5qDktnhP3xCJGneCgvMK4x6mWioPKxcVGdrh7uk9vYT7kU93B2S",
  "key16": "4e2ZwUcnCjQJgJcuhhmWcMnnVCHUg6xn71mDhmiqaf2N9i3wErVKAmwizaYvrFTqqU78tvhE1iEuucq2yMTBa7iN",
  "key17": "xSEdVGW8oae18rADf2E79Vic6fckxW93gxzTKbureETjLCXwQFKXMTmQpNDsjffCbfXUaFxgq1H3g72R2ixeD6R",
  "key18": "62SryVvATwGbxciCrhXZJ7FNCp1F5wDYQyMMDoonNb989HUcW9eL7PUueNx5VXpMB5ZD3xmFKoj4NqxCUAzR51rW",
  "key19": "4juqmgSzjfo6cpTq35RJaKyoBQqcQKRtvj1ciyjvG5v9Vc7kn9rdvQXATFaPU392qoky7mDXjEARntnHJ24465mH",
  "key20": "yes9yoXHwQC8qzSyXgCbLRuvCdbmhwbcYdQhn1wsKkBNurz8PM4vVLXMVjJHMuVXyeBfri9Rq2QNcTkA9ETfKvY",
  "key21": "A7pBuRV6LgaiyHCEXSYqctLHVY8a2ukgEAXJYR9DsdVgmxPgknJ1qZLyxs53KFtBoM6gHXCjDQ1Hu8iWb9gEPQC",
  "key22": "5zyeSMTHdZknYEEANA2SSTX68D4BQ94j5xMtwmnSCNfRmv2SNKVev3u5hEYBy2Wy72X9iYyge3zjkoStCWm4nxmp",
  "key23": "drWJehhCF9tUUgtvvtaR8crxB3bMkWe2Nb6vNtJcv2Zw2DfLvoXbQ9e4sYvgejthNYhuk6ie21arG9T52FPDqkS",
  "key24": "2oKFhzsL2mi2hf9N6c8eYQYRVjpkHiTkPQoBc4epfa1pRRgpRF15hrj6keBwxX6mTSB3z5SGqPzbfXZAi8bdjewu",
  "key25": "5nF2w6btkvsk9HZmG8HrKuyje9LuogfxjAapEe6ungSQ1D49frPPcb1gFcebR2TJBbVGATsTpPAnFiLu38ny1SX9",
  "key26": "3qB6YXrLronEBXyyttgZBgKa8EehypYNxmJEmuLqESo3pM2zfNqUMi6MK1dX8rT2iLg9A4aF5UDzQjZ6Rd9bRyP"
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
