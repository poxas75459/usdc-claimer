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
    "2MyZPAHWKeCKWnBnyE5nqRf4aD3FqDCtdSxj6qHhvNH6wn9YFAS6E9rofwgDZwFMXd9MqUiYUTRuiGQh2Y6biqNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4fdWrz3gpLitQJ7r8E6rPP37hHVJ6Hp3LF5PBrc3VzseNdj7r5DqcoksMn1DMjnTQkgMXcehW8jzATSCDCf65k",
  "key1": "WhT8RYNvJpzMDvePaCYJCfxELQtMvMGAPx1ZZk63HR6N7mm7zbV6umUfYK5XMfeNhBmSaQfBx2NYzCxu6oSuBVN",
  "key2": "2PJ6BEZ66dvGfyxUZW56RU97BxC9RvcEpgzt47TLdqedo1BLL6SomaXboLZRmdFvDVzzrDeihPPXJ5DHjRg4i7TC",
  "key3": "3tFXPmeTgB9E2NHCiaVmHxDyBn5TppBaTZshoNBxgDeitpN7WdP8p2E7ahggHBkXAUnZGKStJyj4pDYz22C3fCMh",
  "key4": "ysyDuzDzWjVSYvKueCF1TDsLuDYjgtJVTsS7vmqCMrLmixq9sycf67krP5NBYyKHvZ8aWwYCz8qVGGT8Kdsukgi",
  "key5": "2wM9YcTv2B7GaXbUwPzQ3Fc5o5nKpjuoeNfvPVXrKLJF1Lbwkc17rUCZtc6PzYdijnbRRTdtUvhpVUDnUe4t92EV",
  "key6": "Fc2JFBNtpk3YZJhSKXmJVTkZXVtKcb9a4s3ehPMaymwznXaLwRmSdbYWYbsC4PNss6getfUWjsDbnhWhyid1zMh",
  "key7": "7myrbF2Yt3PZcWb4k2FABk6XPrcdgw8x88NRckWFWUUk9S8pdWh7GXyemNYJPyuB9XTyjUhdXUsim9spsMFiB42",
  "key8": "61fq5kitRaCsY9TVb8dVWhCHZSgBRDJfMBaXakmq6hLKKHn3bU1pnCnpYezH9rE5f61gGAPLPnaBVxUKZ9quf4ZW",
  "key9": "5rDPgbUnGtXeXYxB7a6oSDuCobEW3eiKsR8b3XukuSKXWPdiMV8P23fpoUpyG2JseYsXUHRtKbCysmMKsfXboxFe",
  "key10": "5bxeWrUsaJSgZe5yTuHEMx8aRFRxg6Lonfi7QMfES5bSXUbpAXh6gD9jnrxawb5AH8dmq2gXXtEc7mHqKqL56J1C",
  "key11": "GY5VuxLiUo1d7mkmc3peUuhvvdCugQ6QE1XMXccCQmgdQpTxpMYhu3TNaG29j6GNGm3MdSZzeWZcdfMv6P5Vxmy",
  "key12": "5WKSLd6nmbUghHkah91U6oDei9FATS1ZqmyqyiH6KQMx7gQ7B13zeYRMgpp37bDrRaSNbLqW6gnP6P5gn1SZ4u1T",
  "key13": "2jqHdUwRKKFnKp837whG8xQBHSEDDq77nFvdtR4Nf3WhPPuMjyWnsvvesTeGfqtdz8EcAxRg6ba6BtnkqRAJv8L4",
  "key14": "Ba9y3xfEhi3BPwYj1TTSUtKLSAn6HXzQ1J1NqjSXJEvuMWXGSpATentktGEuia2TKXYvnf1VyUCq8ngTN2EDyR6",
  "key15": "3P48dYKmDyjaNb5eUAf3xN2dWev3sSnMXTHQaAKPbT9zebgvu9hbuXTiMhoXrbEvyxGpznjzN4NDMK5v3rjzGxFn",
  "key16": "27iR9UeqPnZRPsXfRm3ao7x8dCu4Mv6pkbPt7jLNiNJ65hDzijcgvFc4nwg5AdiTBgo72M3egGxKvRYcFajKwE7P",
  "key17": "4NivofMUidEToaGx8jexrvoT595PXVCLbcVupBbFYDF4oCGLPRpdDCQJ9WwGc1ocBU4MNRs4gMAAZohw5YU2mU6S",
  "key18": "CvJkVmyhPkJtH5btgu94MxtkMB4Zjz9dxDV1yZTXRLiLt367v4N281nQUuxveyPqRhijbJheYNuJ2f1EEQcD1UD",
  "key19": "3U8v6Hn6DpggiwZiWxVNFwBRNGRBRNqzHro67Ehsr9vLRozRSoQ2g5Z41tHjHceMwsWDvJHUErDF9B1cPGWmXzNz",
  "key20": "5DmLxW22RzRQrGJ1akeSCzP2WCqm2eVtjrTraQy85oAmDr62A7vgixLS8LMcAAJSLcjL6Gq5SxSJCQF5LUVrb4kS",
  "key21": "4G6voTeBSQ7DPcXki4BzfbXx2odpZ7ri5qDbA9uMtXGkcxUbHCsT1kaW4MiwLvJMezm3y2qJVUkn6MjzMfAHoPjj",
  "key22": "2zjwhoX8scSePVzjesQd3f1ukAwKUgupWHfeAQFpamSh8JuQt858N2nMeHgySYvQjf9TmCjjQAgkJEu3aZREwZmN",
  "key23": "4jXKojsUd42EW3AJpGv6gsE9DyPretHbxZohHfJfueJMvmhVeKqSimFREmD786rSn18UvhRUEm4q1HsrUJS6n23Z",
  "key24": "5nqXQpVbcA2bZLBeBbk3Ngr3jko69RYykqG2FwXBJgVYz4oiQ27gQEuFJ4Rj1Z3zNHenF9zBFXACiH2YK4esYP7S"
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
