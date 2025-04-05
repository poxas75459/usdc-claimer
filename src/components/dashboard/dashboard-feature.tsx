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
    "2pcaB3VbRP2Bhr4uwJqpghA2NWXef9WG5sPhRB5KjwMkkztabT7azACvoQ9b3TTJHyWyqApSVnap9MDxqFSfNyFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nru1wmoXCEwzse3Ryne5mnCumuPKk9zJfHote5GPNNpuqcjkGgXBUaYd593MYeGAMqNLu6jm7caK5XYq8oY9JPe",
  "key1": "3jy7wFcwocBUiM9CHbNDABBoTjULZ4nzUuamMrD6sN9YDSYeGCStJn6SbBhN7vacyysimRmGjAdZ4R6qcGKrr5RA",
  "key2": "2kLB5zcPd9E9AEQ4nyLTSrR3Nh2c6FSByjgPSQyYfhEqxWur73CAGjUdwHD6QHSHHGucwZ4Jo236idudNVTiYC1H",
  "key3": "5ZWkzWJLo1V6RLUgt6GFJWLCqCiaTgH4vw3myY8Q92An8GHeQqH1faVMNQRejgWEh4Nw6g1TVyXDtKrfWuw5661e",
  "key4": "2GFjrtXCmAxdjasp4wS5gvTJXCwWaQQeueqRfzerK35QdrjQUDBRgV3ZfuyHBtRBxTQy7wRDnQ7aZg2JFziUbHSh",
  "key5": "41FqjmjArr4hgEhR6w1Gomi8fVJJWMnjcW1ddDoMcGNJ9wEn81r5AyADPsjZEqaQ1EdQXKq1cWaiDQnjNLzrBBKd",
  "key6": "2HJkg5rf92MUhaV7yjovhAZ4FNacJuNhVgjZPMjHh37P9VrtpcjF8u2Z2tPRj9YVqYxYS5kVatfjBvQknen5neTk",
  "key7": "4dEYN1SHaiUGJjoXiBJkYae66DpbLuTWZ3xPu9LWYB4XveZp37XdvqCf8Em8QF4gzx2Lvnc36zz2EuQ4bAcfDbaF",
  "key8": "2x8gBqdjHC5HQbJjxStjKnwPmFk3cUxwZF2wz52z7G52eWni4YPwJGq3zDuTsWS3R9Y5rd1esJoUE1BhvxQ2SegX",
  "key9": "52A6vSiFysaF6JVRv8SRiHpptJ96jzbpeEcnhMDCXBm1pDSwAtBd5AkA6uT2tWkbLqiEjnQmJr3e2J8dqh1zZadu",
  "key10": "5LZvodamAbZHDykDCBzu1K4DbdH4QwgmxdXRrPgsLWoiChPzbxFfeqjBskrejH8th4pSJsM5KPoyDsF7oU7xP9Rf",
  "key11": "5KamUVHyR13a31G3qyr7fivpBzhYnyv4gi5KjZUz1aVm4Qv1AbipRiijRKr8atRWN8ZK8ZFJp4svqnvuuDnzY2by",
  "key12": "A2WRNDJ6pPLw3kuxn6WUrn9PDf1W37s6XwDiL1VxSRKyTPoKri2eFo758LUb85Kzr36EcwFfWVeY4CgazQcQma1",
  "key13": "2iCmCLmAJDMEstowqKmqjN3G8kqK6u6BUMCFAGSrHuJ3A1uxfv2RHTBohc2KjUAsNVNNvP9pvg6QTeLv1tQi5XqB",
  "key14": "3xrjNMxN4eoFh8e2U3dGfenLAfZ83msxzzky4jyUkLHPSGsBVcyEC6NkAfKS5dQbkYTDoC5nEWNjWNFSGG5AyKza",
  "key15": "JPANQtUHwE6ADJ91xFT5nrJpPFhJRuhT8xvoWNAYeNKebnk4ZKYEvCWNhoD29njEZhntMHFQBVzRQyPjvEwsh2R",
  "key16": "5TnmaE2cnbAnTbGvKWUojKCs8Aurq6yxa28X4TfP3z6KgtMtYDsoRariR3AaFFTe4BXfPphdw9fdTciE1xhNkmHT",
  "key17": "5cR7sTh5NQm1cM399FNTENSnWHpdQAMVi8kiGQezWQYh3V3vExZ5X1xwHbkuKTbn9eZscAdzzzmDW7zJwij7hB6c",
  "key18": "3h66fNmNc6fEYm5UsW2mLrKRdPChJs4HNEk3RHV4nrXoM1Xz9rjv4cQx5cSyWLqRdvExWcxZ5ebcmhpYUvpB1y4",
  "key19": "4ShsDVSuqA2Q2Sk644oehJyyAWidiiNaBk9tJn5EiqpF6eJTMgVahczqx81RZbR8WzSiZufCbhW2Xw26JqkuqJQ5",
  "key20": "5yaFnDpZXrGX69Heyh7v4PJRQCUXdzrSmT1qT5W1FiSk1rajCBZQqA5ecH4fhZDD9RD9wTvooLXStd7f271ckZbz",
  "key21": "LwkHmwCYTDVjBt5Pije3C7nryEchZwNWmm179pLW8mr4G2gP8JvzToaPkfa3vDxwvJqotoAR84H1Zo3vj8BAz66",
  "key22": "5Y72w3qnCNbPrB4mk2UQ647a94wLEWm2ANj3MyrKvsVxk3mHGpACxz3PkBJVJvFShjoCDMn8ap29eVyAMCMvQo9",
  "key23": "51cgiUaQAjUjUD9dLfBgESJsru6VfHfgpM7MFt4eQ1mTGzZwXt75ujuGnEBRbhFYCfPBsmasJxGR4KM4HJJUXPwH",
  "key24": "4cQSUyY4bKo435vEtJMvfhPeRcgB25cGnKLTPGp74f4m3ZVxubmB81BawetK6DejWvZUifeG7cFUXWUZrmtQBwwS",
  "key25": "1reBUFtW2K3SPavUbd7jUj9oSH9RnPWZzjfEAPcXG9AqpBeyc6nyw7AmC9Y5Qn3N5icHkUcopbiMbtsjbpJFHWi",
  "key26": "3gUsezptYBS7dDfp4Xy4fQ6qKzaB8uUfpDdQgsZTwu8dTfU9hpQ6ucqXBTwgfn8zXKUkseCbbHTTEYEcuJop7XMb",
  "key27": "2gMrg3EWFxqu6xGoWkRURpknGKzVza1VFq35NqrEzbV66cNaQE7nw7J3en9VVS6viJ8rCD8b7k5zonHUjKEGaVBx",
  "key28": "3moMM7RGvor4oZmrTBWBtv1JCU6mjFkiPF2DWDu55TjCbSK2RQ3nwZKjcWmLGdeGZ55rj7BW91nR7pPMJ46H4nG5",
  "key29": "4vMUeiUigEFjZeyZJQNGSuEyrFvvWFDDJWWYLGZkz73Pcu8drNUqJvWt2AXZqubRVuRg7C4kHF5JDa4L3XnsiwRo",
  "key30": "46yyYrCpSgWXSPE4RJ8ap7xBtvr7uQu7CiFR7hEfUypyZpxLsiZ2jJwYEEuqe6PrSghTEdQCnC2f6kzcV6pPetvv",
  "key31": "44wtNwqCxDyQ3aQcp6veHYuCcwqjCee4LRoKT6HeUXB8493x1DsY2iW8iUCHHKV4nrgLfZ4jJ71fnsRQB8mAp2ud",
  "key32": "5B8sbsEtDQ1vpDpadfWf2HUhEJ9PF8bhyJygmU3FBrvnFsCMZ9PVHn8mCNgw2WkHSmhRLbugnvqwbMCSDZ44d4VQ",
  "key33": "2hNsFEUocThfgZeXAk9WRLRKMgp5hZL3488nyD9L41ZJo7LornW358Taz1azgbL2GjdGTSpCCkEVzUDzWhfWKQgm",
  "key34": "4TdXDuXfkuU55DjfV5PKv82WmCwCKCHLSg59yEkj5HTnLidYZB1sfvwSCF2eXWRRJPAebEjWRUpdeuBj5kudJ5WX",
  "key35": "623rZZwctiLWgD39j3fbzcNXSEAXAixCyE9qquocvHyqMuHQBPDsmdgC2QCWSDb1be1dMvKMr4PJBmDMXEEjJrVp"
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
