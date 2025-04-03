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
    "5F4kmzo3cULJuWmp1JdJvJRS65Vr4MLMfKQ7YKuvwMppUkwr9NhXjzBqCJERHef1ehJRTX8FaNXJaZRrwUFnXicy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVaqTKuN8nhWe1AXT2CkmY6zMeesbe88iZ23SBRNdL95ockZii3sSGNJ1RALtFYBCStzPnshr6Vi5pJtjnvSzTc",
  "key1": "3mztUhLtappcg428Eqoo5M5PEwo9LjrfPLbFptNJuFjYx5rW8VT6bPHoY1jvyj9cLmNnfW6fHwfEgabSSUiXwNss",
  "key2": "38VrNkFtWBPtzBzHNpu5mMHszv5GrszGTh73bnTyPRTzMSWJNt6uMpjsx4CGkGebFCHyyQxdVfTWDp7L7Bcd2xdi",
  "key3": "3XSLUoocsMKemLmtjTuiQA5JCrctFZ1tNY3rmBxWNq4aLFko4wjwEyoYSjghASRPR6RduBT4kEEibPocbTjDZPAB",
  "key4": "2qoh9QgNRULarGy4wSovvBaBefYuyEUX9kRxrf4zdoq6b6AAKG7mBb3ZRePKmT4hwXvSJJ28FQjQAoar2KUP7yUn",
  "key5": "2oXkCUHHMb3FS3Wmk1HVuYghzKPFzKYemyyGJhu729m4TcwBwy9AnjSrm5sGRrzJvqFJ8oXTLAzw4xqG5cwEa88m",
  "key6": "yDxfrZJBmzfkzvkFwpSQQ4cPMbsVQgcX28YCEWK3nLshG9fvtJKrvgVL2vfCpqHvJA7RA4WLQ2o2b6RWaXKXgCb",
  "key7": "5Zu6FuhzTymYFcPFxq8gKv4NPEGVGxXrsgYo1a1vFh82tkd3KXsSG24Nk5hgLwWpwyF3roeGgYaSdSHziUVRzcnu",
  "key8": "q2rXCPfpVa4eBZLSSxdDJQYpKCid6HH9ob82wPQhEYWEwSeW11fqiJqDXtoGs4rV9ghJH3rFEdFVUho8SJQsV7t",
  "key9": "eyJu1vcupULaL2DX2VkdB4mBbi7AMq61DeD4htbwLbKi5dGEjoiHJfcDTd64Bf6AQWzC5UArsqLVFwRP3T6dr8b",
  "key10": "2H7VwjRrXD31GdD8X5QT2cdLpJEfTZPyCe98pd5fpUDNFBQKpC3VCrCLAAgaQvcTN8hpNL5WUZWe1XEJqpL6JcPi",
  "key11": "5dYVqyu6URFq1o3WZPM2yvLomJwnPs4HFYWNH9Swy1eqmsxfWFHRvDRsVVF7cwdxBJGJukBUsCdrkNPeaSAebosU",
  "key12": "5PzeotbTrmDL6H7KBDk4MVNmjAGJx841DGnukKc5YcVQhWG8LRajAc4g8Uj22165xevVxDz2de7eJAxGq8CQu2Re",
  "key13": "4GM2JDMmEvxUkq4YkaqsmaFz8bHh1JwhVefZUpUpTzFqckjvy5nUMaQa8D8Fk9LrazAEWYWbZe5RPFpNAgvoVnam",
  "key14": "iGRxceRTKh1K5D5gPMCuZFgWydVzo1mbTpHnQPurNWXKN9a6w2nvMF63ahQvxmpXrmNYeLtQV6ZJQAWfejNhmcz",
  "key15": "63XLnQedZGRdetPzh4TBodbBkVYDjVH3UQZJ86czY9z4d8VuVUWqVvABz1Di5bGWKwrtLi9gtNbSqGN8ieuL7MWw",
  "key16": "3h2F7fzgKSfq314W7rGqsY5p3EB2883djZ7zG56Vhv76jikMezLi9wDTyJCi2WxNT84WiHwSLR6FXgBbEVjJiai4",
  "key17": "4uTQ4bBz34cwxT1r5T1H8GC1SrVkSRuhfE112tVki4fy14WYNzMe2sQyC6jDrNFt8PWw6D6NJC8AxnrAcFrpJ8uy",
  "key18": "32DBwkyCj8Et9XXtuYfcaR61Xx2zAkeZ8sNAqhmXYXbir95zc8sDCAVu4ciq8yW7wTiYEazHYCfzhrDCi8JaR1qi",
  "key19": "fG6B7fmhwv6mSyCpNff3Z2AwYKrwyovg4PZkPYZq65151rVaKc97cq2g5zydSNoTiEQUaLTe2hbKqzsJMVierBe",
  "key20": "3uU967ZJa8cTLbRjzPpNtNaDZXuXEEw4yXajHsZLCQ38RYBrzmwySC1AXqxdYKqfFEjRcAcwyTKFr9EEZu7uBMKF",
  "key21": "2joXoJbVjMdvTBAh8skLqEnAhYw2V3fabVoG2KCn1rRCuUM4zENk8rimVu8X3X4vp1m39Ntjy7BMziNKbrVwfbuF",
  "key22": "Sp3rWaw5H7mFkEkFre73DFYLC3o6pgEQjsb5EdW2Qp1RNX7MqoRqcFB7oqCaZBRtESHPUbVw3eJhdtx5sgdBByc",
  "key23": "381WasFHBgtXSLLLVxk3BGBXKBmBqsBJZeBDJtGVLStyqbVmwqy5CVHFHD2qHnoRKbZnRtwGGVqgiDJh1RN3hqnn",
  "key24": "3amhbgvLC5BisFJT6vNLHtMsTrt9DZT8s5jTo1K4pnuW8MQTyfMeWxQjN4oEnK7rTp95GKqneF4HL3cHZaw233yX",
  "key25": "K7Wgq925mUbkWLcRBnBcVL3PkHJRGgRAobPVb7Qn5cHcX8fvFiK8NVf89wHpsP14ur1TQfSy9UKzsyWoETvvR7S",
  "key26": "4z4cZb2gSrksCHFHEBtsR7o5fxMv7QdUqYiStK67u2VBBkerVpTFdYRCDXTLcnn9Dswxb5cL4NyXb36mJGNugkK5",
  "key27": "4jmoTpJkuUqWHa4cr3xfYkdWvkWt81HrzemRnySnuTc87Mew1nSMQEuCNmBXGFTkif2LQ9Ft9CouEvakgz3FFEHf",
  "key28": "4Eyh6H2A5JwuGu6rwbVKzXao9nYKnWMS4UYbRHg83a3n6tyXxBEypgcWamSDsM3DMfBSU6L3qg7dDMfRHhGV75nN",
  "key29": "44a1wmpt8ApzNutBrpTyepJ68MQ8smZyipryvJuGnhw9xjJMBUnVRs4bVTZ7R7DogKENcq8NjXgUoDvVEEwCxaqA"
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
