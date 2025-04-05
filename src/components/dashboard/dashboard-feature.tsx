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
    "5JgynKr33NjFaYhmkCrVdxccHoM4jjS5YKFCg9EpTGqaETC14KUAyTCqa3u4sWBuc2pLx5jdUbGAckPW5cxjTABp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RY2MATRe8jNHkhJYD8WcXcLxZPPZeXYTLZHDmwdiMCo41nGTYAQhCZ5L1XfAC5vjqWzngoYoDPc7Hke7JXYKXoj",
  "key1": "4NvF9FYUw5jWU4HbqwkySzwGgRNNwPyFpT3tz7Y9bZqqtQjsT9hKd6Tc1nVNnhUnukQtDyrgqUnMtanLgybPEkHb",
  "key2": "4DkKTfMkmps2F2AQ434mdpmodD8QxQ9qhx5pQ2T9kZ1Ar7qkDnxWDkNi7rUmqCi2w7KEEQrYoP2v7RjzxikpVty1",
  "key3": "2oDsxzoLrnZUXaAX7MvMP8X5vNMs753NCScFTaPEmQY6H8yos6m3GQTLaABjiUECKSbJRX1Nge7A31mjfravX9yC",
  "key4": "yJHMBsAimcw3YTsZeUoeiRaGZbMhjH9bcCq5bppbTXT9ddkgJKvwbGGRVtBeLm85g2t2PpF5N8xVgjsgduQRJtH",
  "key5": "5CnT7oEaYWExBnUYvkZwpnm3YkvxSZQiZxbgjFS1uaaXHiACHyrTCadU7mEJW3zYcV9ddF3WXuNdWsWY1EwX7HC3",
  "key6": "FeRCGGR35jH2r4VAHPhPq1EG1fQSnFkjvnsQaPEo7Su3HSb2ytGMAbSWiyLygFTsxKJMESvSDUdVboEuw3c8p4o",
  "key7": "2ykHNES6pTCwrKHu7wvG7QgGoX5GRVXoPUCznRb7G1FHerMgJm9CQFNN3mBVMxx4hd8TkNiLPmNm6xQw6uvDkaKW",
  "key8": "3MCvKGSGMij9zvWW5zgBvRbzgMuRuypPTVg4VputrJGhsuf8pgQ74cdNSzrhdS84b6upMkCbGKkxr2fz8wt7rKaq",
  "key9": "3APPu5w65oHmreRfuqMs3KYfu4AJKuVcvGxh9YkVHyLyYsRhAvDeVstDizfzPH2VQmp1yxyUGbD4v1RpoAjEuXWu",
  "key10": "5fWyb9KoKLcGfJ7tFJx7NFLAyv4dgQwiyYT5JbbXCdqwVgMyxGnMJghR9woLfDXgoHPmuKynrSHAzZPPoxe2ZB4b",
  "key11": "22Ht5rGoHfYEWEVKi99qqfXb7SSWQDp1xizykfgxPhp6XgniTu6nWbueWofyQa8HbHWNrayNX7Q1VKTKUdyz8Lus",
  "key12": "3vVteDNjEWL1gLGpGqAyWekUatKiPxmpBjWTUSD4msbbbR5h1WwMfnmegdgAdTz7TriUtW4fF54N3QpB3zdcZMgP",
  "key13": "2KddGpixFz4ciXhTiNEnoygg5moRWyipX5313TbmtrE2hDHkpUYmGDUJC1GQuix5qgYtjRS1pKtLhpE1Nkd9SxC1",
  "key14": "5PC6s8rUh2tTrd8hr3t6g3vTDWoWLLxph494FzBfFZFyvNomkuyGazjXDUWJWeR3kYJ5tTGEZurRi51CDki4EEZb",
  "key15": "4ZUN6TiHTXgMBehdaVJTDdVsR9E9FGJUksCWPxgnTqvqcGtcrYph3H6WVddx5gbmHfeq3wHM6mi5n8Gv9HHwuM6M",
  "key16": "5WF8RJ5LeRDYzMm6QHm4ztVPJTgRe7uWefbGuzrjAufqSfnBEqVabaDGJyGASjjaEJUMorJNiciwheTyicqGcmDp",
  "key17": "3hdkZLm7iL2ewncSVBVQSWBMd2CF5TqRYYc3kaiDgtkmhocufJeEC9jdyFNCekm6CNvG6rtdfq5958foiJEYaqLA",
  "key18": "3n4Kq2tfxPFTmdw4AyiGRKL4LgXH7QCvavhLjy6cxDW1d4QHefc8jt2jUim9VjHedu64CzJCNRe9cKrvJXtDhnTr",
  "key19": "3TRoo6Y2DcegJDLNKsQYhi9XjjWmHpvWCSc3rU3TajS4YnnJyKEKPxKobEFXhvT5YhUZZTaTtKEskuV954jsGGeR",
  "key20": "YRXC69xbihYdRHtQXR3H73cKjxVqik4YNCcHvbecWP3uwSUErpQAiQeUTDxy51WiFRsnKvAVdGdAEW7x5LVXJDs",
  "key21": "2BqAzHBk2cdJDv91Zkq6ysQCBQMxd7DMZJhHDcBAeYJGoVDiZZUgPfEzHu9u4dGWN2HBwg7nnoyqRpH8Pcv2AkNC",
  "key22": "2hHH3V3gS7sBbpa2Tf2fHVumsnGbR969VkBqbo2vCe72w9ZDpxutgjWYnkT2iws8tpuVa3Bp8sXXkWAQ3qhJWrsz",
  "key23": "v3FHwHe2978E27sWii5P3Lv8oRxVezdR6Q2Bomugm71effUivdNhhdRV5VRSKAtxh91WQLo5XYfACdhXppxTTAy",
  "key24": "5raVtvbsb9VkkGbT3vsqf9DNPXT19zEH4TJ8jzEqoUWiFtYwTcL2dtp7P283mFpU2hh99JW3ar3bdvP4xqW6tmzZ"
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
