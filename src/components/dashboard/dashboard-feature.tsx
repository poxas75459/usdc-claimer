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
    "2GdmfbWQBzk4akiVkpghWLw9KYX8arRbFLoND9dExCjiS3CJpcwRBaza1Ab5BzWVxQGMV9k4XZRMG7wU9Kghuhk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4337m7juPEWashjSgbarcM5FdtWFBy4vNMrWNNLZQVgxYkyHoEnu4zCvToHWCUf1A3j2vaQGGEh26mM87qnXe3bn",
  "key1": "2sPxwLuss8yV6PXwH9Kxo2e7hsauTRCr1SgZ67UxftRu9tq2SNTVvcuspPh5zt32pqdmXSc54qvatDV3jKRkC4LB",
  "key2": "285yC2QaB1m1dYCHJE2sbk3cJYq7ZHvE5rdN2EWJtwko9atwspCgf5Vh4X3efvnxTCfNiJnipgz9iWXzpFxAGvsb",
  "key3": "4C8a6KXLcMiCpW5rb3SZikTzNasJ8iCchxFQu8dGK9YDt7fJZsbRTWmDApnevKbxEX4F9qCEhon4Z1WViTd9CTmo",
  "key4": "2asJ3UqJFZneURJnCmx4qNmfR2hXV2FEerkEggXLTBFwXod8dQFsKwmmcZcB58SJZZqjgDnd7NNPUsarohp7ZdP3",
  "key5": "3hgzVytVgUsWEKxr6hQRpXAvkQ5ZwHN9WFDp8X6dS8ngAZdquWhQh2dRyTRpcZnV36rDkYRwoyrZkrEeeonWrcL5",
  "key6": "2QvhawQ6pWFmjJVii1CZNXfiXKhUvvgiBtVjCCESST3829JHXRLKkMJvhVpJwVVjeYeAsSGuXexMdRy4k3Bz8wnH",
  "key7": "3pSGApiEbte173oHSVdFQVq9SUNT5ge9Qq3UJ3gZGWtfTLdvDYoshj5ckR3o4wTufjNwzGRKJyV3kNnTNPaqd9xy",
  "key8": "3aWagcGQnwCBwQ2t2FUser9XuDrRUfmZgVyP8Fgu31cVDiVTZ13y2Eq1wJQXETsCkLGd8WW8Wmvmvt5Hp565p6oY",
  "key9": "4BL7rrBHJAxuZiXf6R5ZaqjKYRyUw5TB4XJhjQYb4DLZkGSfmpMDyncGCaDmwhKzvRsTESVQFziJT41F8zXbvt9K",
  "key10": "mipYXAMifXx5mDf4U14ATHhwLYWyZXCVAiYsmaTKwgxvWRR7WrtXmDsUWTBFpEQoJzHrXvxFeWm7rtNtA2BybZd",
  "key11": "3Wjzd6K7RiQpydfoXESViQaWZQxEGeBmW1VnDX3tpJMFMsbZwNcUsDnzEKfMofxBvJMSFLxmCrDJiuSkJSpBajsr",
  "key12": "45VsrSUUtHRKsw91TKA6Akq13sRJzoRnSg2NNRu8Wj6uEzSAWn1c6YpprxaRtehTuSbQPhZoTfvNBz6amJRFEq13",
  "key13": "2e2VvqKpHDHA4wH7grVSoVxs9Vfz5zwQcjzbWHHXe14cLvLLfsbZMCAL46S55zE3pjsQTxELH4L8hYE8X2y3jF6L",
  "key14": "2wsa1pkYrpXouqN9Q3JPpjQQ7MS4yjrwCL4tiQP9qv3AWNhx6CXzyq38qk4ws8y29DWxEdCfgDe7uCq2HN3sb8SK",
  "key15": "37WVxeV43gqGvfeWMPb8UVdMjUP4CcVxt6y9BvJdbojUb5GCtq2jCYyuoM73czvHaqR2nE3yz6fVphFmB1EcB6ap",
  "key16": "2NhKHzTYDK6DyEHyt9ix2FZbHdoxK5uB1TYYpZ3NR1qBdFnLdxm5E7WdhTTBDgRkA1ns7EEgFtuR3fF7sgd1w5V1",
  "key17": "21JcwpcJVFD56tSZfiA9L2RKYG3HBsMm4jCjXnsRynfF2amnVvuvm6tk7GUFLkNVAYfv1fRBH3B9B9S2d3QZVbF8",
  "key18": "3voHaijfwEyk3JVDM4jhRsM4v1Zz1QcpaLXrvypuUiED97xRvjMCXFqcRE52yZMcYwf6U9BWodcZkuw2ajQHjBSJ",
  "key19": "58yaCzXxCcaCddrbNQUoC6URwzZMJGTcu2A8ZMy2CjMeMBqfsGFW8AZ9csZEJZk5Et1tePyWNXtKHHR97Ad75EVS",
  "key20": "DSaZ4pWXp79vtngLNorMNUksKKcT3s8yctPeuPNizFfkJQYeMhXdBfuyoB8YarxtKsDtkBobNoobptsugLsCtip",
  "key21": "3aCftk3QCGhXnMgwckDBSNtum7C9WcrwU9LX2cBVrJjTno9cEzHbF3Xfb4WcwWrEduR17EPMtGkUwJzFap8KNsou",
  "key22": "5pR79XZZN1Zmtx2mUz3BNFJDZPLYtuSzpBtQ8ZULDCDEAHV1XfUQDYBrdM6XoAE63k3RJAgLiMFeAhyo5Nx9PqnV",
  "key23": "2dLDeCEA2cZ2TyVvSGS7s2wUAyS6BMv5ge265nJ1MpLVRwV4gGwTzRfbZjdYyoiXHyVcn1xpYJwvZaF4bGLDt2iZ",
  "key24": "yudAa7QMr88B9gdDihEEgDeF8FmMpUq5hukQT2EsmcGdXJJeJaAJ7zppTUkQ2zNngajvbuCEFVd6oKpCsJwScjk"
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
