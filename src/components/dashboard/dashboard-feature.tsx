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
    "HuPmtT65o59twx5KhjukWVmoM8NLD7XksFPEGhF757aFpgVDXUHBdfP64yeeF9xXZbLvYYqdrzypyLU5cXqSxdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9xm4vVptqYxTtvYNjhkEUL38Pq6nKYLuZzN6QP1hEvU5gEbfWKWcutrvYHwpgpSs8EuKcUxPQKXMroChbaVnLv",
  "key1": "3aG2gfg1FhjgWi95GBQsjnaXjUtgE5p42HyHkos1jQymFhSwZLwu4ZnfuD9Soe1KZfiRjY1ATyBuof2Yc3BKjfPn",
  "key2": "313ukmy5VsNTXbxXb1MRmJCfY1j5CvypN7ULGYksLzzcLagSMZY8Z4D7Cy9iouPWecG28Xdr2mozT2GyxTWyHix2",
  "key3": "5hFdgfHor3uWRzhvNMtnYajTDqPNmsR9doUxjpnh1J2d3wrsEDJEkht1rc4zvxvRDYpnT2FjHppLsCz7hUQ5eJEK",
  "key4": "2udNPnvB2Wn44Z626vW3jNPynF5k4dieiQroE8uvCtqWE8aJdBD2QfuwBwcc3HxsSUpHu7b3bPm8SBYd22J8unQF",
  "key5": "5CAeUgjwhbbNKERXziP4f9c68enmdJ9wQcCoegvJh1y94F4Ra1hCQzz9qBcJR3eSPgZGeVnzDW6hxpwWGTYUzGyP",
  "key6": "2sPg7KxpsqjmSwHqk4CZ8i8ajrvZmq6h5rA1fDMFCzMVr5tZm1DKjjWaGQfJ6xPfTF2GAKtNuo9NdHyt5bekcwvG",
  "key7": "48hUmuqfna6odreMxF464CoRTPesy8ZnvPkNFt9buugzQQTzPoeMVAWcKFP4GECZr4s8pSLq2HDNUcg5UdYbiXDU",
  "key8": "kve8ojxhhFCM7XZSYoUBkiEn5HGFJnjSiTnGySeB4fEJ76gTNCtQBMcmhrPCDbRFKPvhSt11vLu69wBixL3H8m4",
  "key9": "61dWpkehMMKgTum9mujYUpTh6VdyitUsWqkvsTCjHLVkgVpEpc3dBaLm7EDUnPk69qW2wFALBsAdQte1scicVUYC",
  "key10": "4ndeGfhPENB1uudDSV2Mc9Y3rmFEepYqUgN2dGRYomWeG5CUxM1B1NmX2pcfN2YufZUmLZwmEKx14XcQzcAKroGu",
  "key11": "kW86R5R6gALx96r5jdMJPM3EdnBbwJfb2xZHGSagS6Wj5ddngRvBrjExRGyHhFKrboduC5e6fPTTsGgHVsEACQD",
  "key12": "3tB7SsxQeAGCmoTUzVPKvNnxnHpfCHQRyK1qCizByET82aRiwaqdM5pAZFbwtpu7k9dXU2sc4VZ2MeiueKchR261",
  "key13": "4KhsJjd45wtytAz5XBVjC2HBMNzdFmLhiRJskD8yRSeQ2fYLgFFqgB7GERz9gixNq5gzvLsT6gBmeXH7rT7hneWo",
  "key14": "5XjMreeuwFSbnb9KfDf8Md756bdHmUAnKYRTTm6gMKgvq9UHycTChybewm17iRzzsacedweVtUzPJUWse8YPACWw",
  "key15": "2496jCF9xBoFEbbtcffsnSBqGJsdrf6qSTbxeotxPGrczoDsHPqf36NvtrcHYCFDxtMFwXNkySgZVdCGo4p7DsLw",
  "key16": "nGJVEBc4M8hgz6fJrJrkwLPot1cWT1mEm1oC6XUgwdmzroSndXfnxSxBHZNddnrCbteA7kc5vD1jbMEjW96wwZt",
  "key17": "3YncKPmEXYdrsPpUghTq8He9nbJMYDjXN1gZGsWgtG5ByQhYLW2MN8NQNzsH9S2hE8ng1ukSnmpbvKxudMDTp4F1",
  "key18": "5SLF6p5A482ea5QjS18d4Eo42mX5X3kV3MyXuHgXK4mkXpeJjNfaHprnNo6i9NvHNsePUR5R9DBpoYF3hgPaWQCr",
  "key19": "3b5k5mmtdbivTpqK37Qb4eHbMRoSoKFnUgikVw7AR6hKfPAgcaxxgTbdrtiBP2denJNrFv8Q9stDZqZjFYHR87w8",
  "key20": "5eTcr976z1joyjseFSxe29xe53USxrcF9dXdVu2GLZUu1rH9nYBhkSbQT8ze4Wt2Kw1xXoWwfUSjNghA3v8B3wuP",
  "key21": "4fNMUD5ouYXF64PmarJW658GiCJWE3jDX2M2yDcm1nwNDJDzw36SPm33c9v866phrWr8MUZ4jW5yAM7j9T8Pr9ya",
  "key22": "3bjGNEJvASskf53RowuLgsw1ToLtBFFw8amq3ko6eL2zyMXY7rpVvhZEvdTfxaGnvZEHuCsVo6ahBLEsAox8X4YZ",
  "key23": "37iChodp6RKHYZrEhZosXfx2HE9EH7Jo1dCNW3ycKJvAMoeeQNwthZ1aAGFFpetcwMT2n8d6Poc8gABCFD4RfBKZ",
  "key24": "5SQ5UrVxCMfFgXFJviu51i2aVumZFNNvLv6PuJp5FQs3tYi1Z9ZNUExFeMJF76p5xSwS6NWYw9wAax1X9CmCLief",
  "key25": "2aeFRRUuu11QywfWWvudDjYcuYNwKdWfCvXHcabGSqPapGQU77JVeictwDX2ftjfwe2vS6bdY4Fwcwpnf2zZpc74"
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
