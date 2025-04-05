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
    "2afrGWrbBPghd9NFGQ1S7zGTixCmWVpPBxqqcym7UJDpAReEa3qbcfAduJ8TeHwNz58srR4RGPMNT96p1HVSebmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjPy4qpcWVoKMpAMgSarXFAhF9oWsM96hojQ7T2S6ZAHZ4zWtw8CVyTH7xLYodXhK5pFUA5RN9yWqNrgRkiypMV",
  "key1": "dB2LUPqKo1dxsCpYBZx9tZ2tVJBFLLAb23DFa6DKG3uPwwAs1AQwasjQAmktgby5XQyQPN1W3o8oVTKnAu1Rg3P",
  "key2": "3xorsAG3Mcp7SE6s1Z3FzyKGLDAYQAtRYAHQYnChxnaK5iNQfKDuty4U6mJyHYHNNcbSRvZXWm1wySiWdDnTG9yM",
  "key3": "3e7nn5kmt2uF2xBrJWiWMqdGGLF2TCuXM8isixgBuxzgitM1gc3CjiVEXNgifcV9QQeQsoLuUZNMY4sa8UYKhcMy",
  "key4": "a3KtPF2b314xud2Fxzyd4rBTxbEgwpT96y9BYXUr8DFirCuqDTiHjWY9cNJLdu6CPq5y8RrgV3fKBvuZhw7giYZ",
  "key5": "63H8Tn6j1NA1Zf1JBbTFtpAgQNcqg7nVsSdzuy718Cad1kyiwF451nEaCXJBNoF1qW5r6Kbqt58AbxaP4iwBQFzH",
  "key6": "raCLpUiSMZfcsdnBsXPzDjZ3Y5e54YEQJpsV2SJnPCCxQMeqSGJ7W4avcguAb5zgXZa8AcNyVuVZzR2QvEWWNs4",
  "key7": "orVFNNk6jJX386eH4yN7u9HY1V4wPXSgNwYHJFL3FNZ739jw7c8SVi3HD1NpyWwkfs8YzWWQ2NWZnA9b2vooYZw",
  "key8": "jBwW5YJS2GS3PjUuQjiqKQRMKRekzbySetKoSmKGGTy2iN5dW2FiQVjVcdWMALyweMofUpL2GYwpLCVHnTwcrLY",
  "key9": "2J5mzSRp8WyJNUgUKQKxDWKH3b9XnL8nF5wh2jKAGX3dshLSJEHmhxcXDbUunvG1DxqQzBGAmGZiy1sZZ2AJHHB1",
  "key10": "3HRXEPLqLNwBYDJ7iPbpZzgjRgjUkTAk4ZN5TpWw3isSzHBuiF3MWDME5rt1HZDf2gxfvoFXata9a58wTF4ffoMG",
  "key11": "5C83ycbaA2Fwa8igveHK7yGSyguAXSDeCXyCUcKhGmfyF3pPtanri3AVmXYMMhtRw9GAyjyZUnMTTNferBhZZFye",
  "key12": "5goafe5sXGb8GC7gxVQeYF4bQDi7ugL3VEU49QFCt3D3x8WZTMvK9B7mqqbzcNzvRZFXcmtL32ckJQ9TN79ctvSC",
  "key13": "5yFCyC7jMj3oYSyL388AqEsLTCWkvAbHTeB4Z1ymZVkErZA5nBMMwMbvKwzMKpySFJYBdGeF4BVZcQ8UYoB1NwPW",
  "key14": "124jTxyTTDDK1XGjSoBgh6EafuAPVhpnuqdCGWPZg9MZwPN6ytZEC2DvB3DGYLRoTLbrnhG4Rd7qUWYLsEYb2rP3",
  "key15": "2nRC8fikoRf5BdQKy6GX91LXyWvbvbYsbEgNLyZUmhSPRSL6ZNo8akEbBRMxmE1yxR4r8ZwfKYhhzfem5WacdYnU",
  "key16": "gFaRnox635PUSow9dRobWiU38K4Wv7qr5BvAZaksyAXmXPG7DNrvRhqajjWGeiPwa8PG5mMerhuXTeoSVHUmR2S",
  "key17": "4bAqhQxkoVqy5ge8sSStvG4dnoBWNgQrkXjYZbVTjvb5KM8i6Vp7QtJVPRa2csSdD5UCLhnzEBMpsiDp3L4ubQtB",
  "key18": "2krNJJVFBhEJtSF2pRNUVBxs2FNQD9YBwumdhn6zg2J1totak3BnJrtugQqCDsUvjvmchjSwEaxNMRJMinHaWQuc",
  "key19": "4kEbRsYB1c1DSzAWcBYiJikYGUy4Y6AUc845hGJFGpDFCQU3MPi9yeah7z6fGaCxbvbwu1LxYDHGtgQH6PswUaTQ",
  "key20": "U2X3rT5RMHzteTNmJE3TsN9aDFjqLAc5Q4XPaxBzzw9jj2ySmPkDXSipWfDR6ERfT7NMcPBH239wXaTCkic6G2c",
  "key21": "2fbMBS42S9PnZ8bGK1tbqRJRG6cCz4AHSztDLMiWe5khQc4h32wXJXz3ZqamJs5FtF4cEdn74iBWj6nAVCCAyFiY",
  "key22": "5ZNzmPQnDA1yzLLTMGouTynKy1PWwk22eVSZmrXUA7xis7edJVfKqyz1f8xFEmg3K1WHohqxbB8Tb2X9nR7HDTL4",
  "key23": "3YhK6eceRbfFEtZaAABNtW9vLymgKY6qqPsrer1zPkaesdXQU2pebFj7ib28pkuCnkRGCueNzprQJAmjezF9ymHa",
  "key24": "293imF2yLrXQCHJtMtFFRTePiod4ouHjKkjQtyWbh7WjankDxryRNZSgBryhWrKtoU7rdjvMmSWVewwjSzY4nCvi",
  "key25": "4EGf68cXePJJ97M5YM7yqcyA14gCzijEe3EfwUbcoqtCfE9u79YE3HpPRR8H1CWc2c2irJ6Dy9Nwk8vTGvS3nvxW",
  "key26": "3KA1Z73icyEfRLdubtqas6n42ohGgcSXMDLSBievuBbaS6ceA1scjTvFrWiEUq6dLmDzc3NKRoSaw6U3TANgqgQK",
  "key27": "4NW48LFXb2ZRvP4Pfhr1RN5KLp15ctaPJyf38LPGtvfrAuBL1m1JGMN6pKPHKQxHjTS2zbC9JFKL2YMhqUGWWCUw"
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
