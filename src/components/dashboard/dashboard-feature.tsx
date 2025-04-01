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
    "4R4HPrQPo9jxs6CotHJE8Mu86fRYVv3Knep64e8kt4eDXUGLbxJVbhyEEaFGuok7HUXPAtGCjR4dNsf9tyUq8UwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34d3rZYViNtzvueKtYfzekkwV1BfD45RgR6TNbTppCDHVMi8sN6moxAqReB2wK5VowtDhQtQbqogngdRCVeiUCNS",
  "key1": "63m4PPMVKxcuz9osvxfyKUH5hdAh4WK9AbnEB1K9nuxtLDZwJbTJu1xo7tLgRVLRGqjY6Gdkiqoyf31HYrJCgYnw",
  "key2": "4h1sGud4uYi62A5kfuaHYN3A1peiiqFde83PYovEk9TnH3UrgrKaC7ZEXw1iJHj2RB1UdRwyZ5tKhZoDn2tN4h1Y",
  "key3": "5S1bdxswEakXwe6B4DAisN7vUDnBrnVbqeLnCKDBBrfZtXryaWkHW1j6Yg3ZzGPV53PzxQ7vQTgjMzcpU98hP91C",
  "key4": "2BCdC6FPhVggoynoxaeRRrGYjc1xMi8MLwG2pGmdJmY1d2tXN7NrKZw67mTxzXhniUcL1wyhuPLdXuyTn1BKeuNX",
  "key5": "aKnjGsQh7HEe3Zvvnh1azGc1qWvatLEBPfZ2tb1cDgB7cz45iVY1LxFpLHmU7A86zCF94nX86s3Zctqj4B4BmBf",
  "key6": "3jLATiybgK5VmPYEy44XdTdhRh4N9k6c2TqYYnQZBdv8DUnUi5TKfNGMTnpyKkoVix86QfRwbsSUni2Z6mqA9xd9",
  "key7": "32fpbqx2hVCyyxTZHKKwHSRjBGJ93nrAoZPs6XnzMQ27hZh9FdcH6azruZhWxNPNhuE5ePMhDBJMosFzKAkxSzVt",
  "key8": "3aMgNVtNmpuDL7qTvngbfYKXpgheXGQopwNUGcXXP8tLC6VmCc5Vt9G6vAk2BgBvf6aDZfH17qf11VeW5pDzVMtP",
  "key9": "4BKmk9KR2FC5TVQb8gt6mYAoWNaTFE8CJugBL4R16GtDfcktUAgiHYbNkxTrTyxH5aEpVPhtv3mBhLFLFZTvHbVx",
  "key10": "3BJVaGh6jF2dSyMi7Ai7D5ceJkDhUX1rd3XCPG1E7yd7wjK9WdLGNiQPUQx2gpSpQgBoC16X9dRutNQLgpHPNmg7",
  "key11": "3x7hLFCgkaYuN3TFz3Xfhmt4DqRs4Zi1BprcATzbNRVkS7RG9gYa27v4GfPw64FLeG5Zjvv8D4Ri2BvPW9Ro6LQE",
  "key12": "3sk7rfhoNVDeEZYMvXyqdNWrnkZSvME5dfD2k7U66QwJbaCLMnWDrUp8L7i3ncFg5JzuM9qoToUSXLaRL5J5kTAP",
  "key13": "3eNdgGrQwSQkr9EowYxYFtpj5jSj9Mzq5GHAn3GCQpUTj55B8B827FG86o62usLSboMwBgvWa8iGHrt6PgZ18jvB",
  "key14": "2ye7zLDqSeAkEFRKzWo7ariY8GdERwZkSY1X6Ld5pAzWVeYtLpFacWLiG8jPNdQsxT8mh4ex3XeqGtcycFL4UfoA",
  "key15": "5bPyENWt3VZB9e8WtpxSAY58dL8pkQKZKBa9B8X83dcBFUjZ3sz7gxy7qp2Js4jchP7zoSVUfQYykKxdmv86k9pn",
  "key16": "2oKm4WZ3s7JtnEWwUBdodgsaPjtdRHMfxzaENRLmPS6w8JCk1dRw8bzZRyXzGBrei4csaFH6zAaN9i45c8AsSGEh",
  "key17": "2azsKMQ2LU6nTXE6he1mezAQAzrC7nGwLTpY5TXhPfowWdeaQLxKAnDGdFhrUDf17gpn4v5uEdUVFoPNftebnLFC",
  "key18": "2PU9dmPfpsnLMbPcU2m2sJR1RE21WT8Fbk7j4rhozevEtNp8ScER8XxeHXtbWLYG2FqFDgNhKV3Fw7MuTbNiAwsF",
  "key19": "3ktuaeRynwMUthJHdG9oLEPoQkcKw5HsLHpcnGncckqwDBytPetb4jhhJrW4ayjc68Far6gV4Jq2qQma7tNsAk7D",
  "key20": "5cuTDVC8W68JWX5Lammg9oRfPmd2hJNd9xxHJf9jGnuCzyB8hUwZLv97zJECWNPzg9HUN4fsATkiRgbgQiHfMPyW",
  "key21": "4hqPDgnones2Q4McwCfKKFojQGmgvuZNyss9FcUtsHYYNoQ8VE1nv34L39z7bscpU6kvDke47aKiJ6ne1qAMCpS4",
  "key22": "tqHW3d22hJApFWD3M25gBTjNY6YSue4wbxNtAwVsCAiqZ8Rn3beUvzmAmUcNjb1dLdakRq7K5K4GW34TVC5ggqF",
  "key23": "4KCYHjqyCWeMfGhX9usAaPrdosASwL4d1HULTyRkGmjmLQ12h6AmHAw8LnGXJMshB2BisjQmuaF94k9HcNs6LQzj",
  "key24": "64g2xtvGFT9x3XPCGAbAm84zHR67F4LpTmeX8iAnPW7Bm87TZgi7cyByWSSP8poPmssPmLbgv5nf7E1HjzgeJrzi",
  "key25": "5FUCXuF4mGboCKmUgH7uwAwy5gKWXWf57L3HjUBBTuCexF2ysb9qESRn2DpKPhCaZRb8Ga3EJ4nTbktmgMhxJ4ck",
  "key26": "34fN1MRcphpGUBbW49LPBhq6P2RBBjkGgboqaesu9eVdEd3KPSYmgWFiaTB4F8WforcPz5e8tzhKnS4K76Q3DZVu",
  "key27": "2hRjA3r86pb46dwLY66oksqdptG1rPvkQZ62rPGYvhzT1pWeYfcpdT1X3QYmhtNA6rJc2AYbiSsQvncgESL1Dd6W",
  "key28": "TBvcrNoje5soeFsdGsLKMYJkoLT3YdByQ6dRDfXsAeop3xRQHhpPLg1EBPLYgxf6Ripfiy8sKJ7hKVvRFX4U5jL",
  "key29": "3Dk1QciyGoztPXVvfV4D2fKUv8aL2tj4n4jhoZVHdRmh8yZ3Dx7WrSrw11WXCSYJTkuWUFo7678rSPepT7gaXqt4",
  "key30": "G2yPR9PjfVu6FJ5NftHzU6ezQ1TiWY2c9Qi1UpHDZ3NXF8axHTfq6G21QpBRnuZUW63HtqmAyGz26ShTh9fsf6j",
  "key31": "678wGkQDYcDyTJCoJ1RLG8VdRxmuV1jmbrDoNkYtrGSPzuVrqupwH1oSC9dWMWZioPqWZSyD5VYzckmkHrRbfYLy",
  "key32": "3EED6o6KbvKkPEwrhLnt8Q88jkdK7VSV2Xbd6H2KHjJ1d49HY82KeGLVnbKUuJZwiXhJmD5ZEgbp7W1TUPBQRhqw"
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
