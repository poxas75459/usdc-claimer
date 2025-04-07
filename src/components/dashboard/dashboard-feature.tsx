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
    "5oiWuhbzTkLG5Dj1hvchYd3b2vd6gNEyRERKDvLH4rbrGYD8NqTxUHc6pMX4oRiNPknh3Lc5UQfKATjLndkgEUop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFBGLy8pcSh5Xucuds9hHkEBcTcArpckcS9PP4ydb5N2VqauVMpGLbY52fh9pisScDtbNf1wKWSamwgiE919SCu",
  "key1": "3Pjrk1Gs9rmsGMYpvJd34AXtmP2Yb5nzyUvWvMcLTgeD59zeRS5yJSVsi4PYr3g2zUTTMSVWYiZwAWCLE8UMu5px",
  "key2": "2NfJj54fzLDbABqBWfiQ88q7ykcWYyVoNF8wEe8BpXVEsuuRDqVxFQBv3oz7bu5eowYWB9aHY6928dnDScYSFevG",
  "key3": "7DnMwtR9waVJ1nPoqNKiT42P2xxRDMMbydii3xnYv4raHYt1tHYAo4Mkw9d9XjDAGW7QHXnkVT6madUxC2KBSkT",
  "key4": "33RFA1gSahi9n9EyWC7He16eSPeTpF9GjZSo2rGwrUJYzcD7Bd8Ax2Nu1sbpNSi1u4KQ2TJc8zSVmDRdmDqkvAeP",
  "key5": "4CymZMxDrM28CUXmPmyyh3ZFYG94xzteboGnfcCChoZby83f2goo2nubQbLo9zBrQWi64f6cM3c71Rn7aqpnQpX2",
  "key6": "qi6BHLdmsjdRhAD5QSSe3YQLnJcyYeXsBNNPAAYHS1pFqC1ejP88CBE6UM4LpJWEWh7ZiPn9SBQdFN1rZXg2tHp",
  "key7": "65fmhaVWwsAp4bbC7kka4BJYaBNTAhH2y6JkfsfUSZFVxnrCRrH2xgXDGHy5y12Fzqd8rKpmWRgiy2JN56WSNpTa",
  "key8": "4GTBXdXp3FNvJV5vZehnEV7TS1WwS47urCorrYg5oUb6XQgtUuSPGmSsoTsrxs7DUibHtss16ihEoxoqGQXigdQF",
  "key9": "3JswBhS2GKf7NDTH6pVFi6FStqPmi9hUgmyv5SEXYk5q531cbH9bc2jQrrtTpr2Gr4X6fYyjG5Ji7svsph7RumD1",
  "key10": "5T5KFdhVbo7iXxsmTTRJkd2bEagkxTX22PC2erkje841nwy99AbE2UFVuE215aSPzTRyL3D3CafHwSkJcfNFM2qU",
  "key11": "5iYCCvSJkjUbdzCKX44qvpsVeiib7jnHAsk8NeTDxCSFfbiczcZ4mzrA827sLUz3NGx5dvjtfHVaBpVVJfk2rTyG",
  "key12": "4paH7JiWuCXhJFgR7jQoZjYh6vBhp6Ls8t9myjiaTsB5wi998cUr7pVxTXMdvx1ShEZ7Pf4WsAL8ZG1VLR7Ry2AF",
  "key13": "5aDubDcDcnuV2FKVahLuSp6xjiqykWRYrSb5kUakz13C9SWQzp2NHXShLnUguViShr2PoG8HoaZXoAji11frqHGA",
  "key14": "2XvsooZgPr7WHComGKmpJGGxP1zPeQEDmhqMNhgUCt7HuMwukT3ErnkWr4BcU9PMYm1ZJfSNbt2imVAgomXfvH4b",
  "key15": "47Jim2kRVEbZBFCTKj921LJEXeHEjWnMKFMCePQd91RgCvyVWtpDqwVMDfqweVxSSUQCWn7Yt2VFVFhe8p9xgJz1",
  "key16": "5UQZt2zwWbVQP9AGcEK2yacutc9sfpbzaNdGFZE55mJZUhbUJVBvis4QDkVNtvXRySfLGYgi8ftnU2H3o6yw1zjh",
  "key17": "9CTAuTeNwXjiNhGrtZUJ6tKocKpetVuYoNmZvFCYZHWBncUgzrmymFkv6qMrv5aADQnzQw6F6naRHUMaPVYPiFV",
  "key18": "5QBPtFZ5wfvMCwpY4f6ZV8hFamhJ7YzJyVLd7XHQX3hBhGzcPCs3h44ENc13pBdE5tjcyVRBVJEVZqwH1x6C8hsb",
  "key19": "yxDoP76wnBPuQ4ib2dpguvZfGs1DpEBTi9iDxM6AUkipQ4t6YaBbiLoPdx7XKgHsipfyofTTjqrmyCJp8BMtF38",
  "key20": "2vP327c3MkBfPQv8r4PyBJ5GV6khzVhbcPnfUx1LCdJZJrpRQZdiKGzHSKAwwkG5X2fLyKDhVm7etTSNsGcVzYj1",
  "key21": "4YTShBH1ns3ou9vioiKyzrFGUeMWPUHzWNX7wefPg8T58uoVKdvrc1Ur5uLjQ6nFaZ1HYTA3YQ41p6kreuPPN1PF",
  "key22": "d11tQwcSHqezoM7NHciVWRyCDiNZywRzMW6aMWJDgWnkbNQuwbP7mgKgvNFjHjoZyowL68ikBPAZZkt7uVJSFUx",
  "key23": "4fmFBDCXFcFZPjnv5abiqv3jJN3dJ4PY3W428Ag24saYyX9Ee5aafRKY6pcwLYN85aJwU2bLX2k5dQMSmRGtBFWP",
  "key24": "XymWctmGrWFNp16h44rqZctzGseEXi4FYuqUnjNZJbPLADLHJuM9gUrP8R2WphmRmELdBJPUDvJdqZxot5jXm4d",
  "key25": "4e9KX8maSB1ibKsB5Spfr4kc37gaUscHQ5wVY9dW7F3jDB89ea5inyyzfHWnktsVSVfx4TZgJLH1xdaRYvnBAvP1",
  "key26": "4uNDqncc9GaBzSPqpkow7xgQghFfzQ4HkdvSHvNkUnNFqGuJgdSAjsgznE4bwPnpEPVTYXDNzDq3hj29HrEXQYdu",
  "key27": "5GzPczGBjosdsPazHG8BvTC913avZ9ARcnh2gqEBK2uMY9L6vQELM8aRcvMv6vN5aJ82vxEA28k5x4CBGBqasGr7",
  "key28": "5T1x8y2HvU9CBKHYdneEkpxxHyipsr5aSVMqc5FDpgN2LPPm8e4QrFY78A9Dp4SmRgX752Bt34FuCCwKSSmEdtbW",
  "key29": "5eYWQ1x1cLQtTrxfwKiKqup3eWVMr6uJdLyCv8CECEK6Kg5RAMjVPagAvxoHGrVe9QsNJAHAVcQd9C6ox7hL3bNW",
  "key30": "4sQBkorCbDcU7B825pn2ZKb51tjG6s4BfFRiETwYPHtrquSNE2DkCjzSjSeMygFq5evqc3DWPqFfUTsexGvuwh7g",
  "key31": "NPAnqqZEfigwyNFPUZtQKNnQj3nBsa4BkzFLFXX6FUzh2bQi9yjDU3dps1JpaAiuUJrkmxRwnyH6LheXMcYSUZh"
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
