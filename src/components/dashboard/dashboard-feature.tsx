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
    "3JM3rpKJv4SdJGVjwCFz8e8FVez5uzdtWAUWLhutTuV6Po6Lw8KGrpcxYSkE6eT9DDk1FMDy6DG9KSVmbVQHsAHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWUFviy3HjVvnWyti7eaEXHrpRPqLuc5xHN5f7DNnvEwH38nbegKzABJEAwLuiK3jETojLjDFsvwhD6BVi98s1q",
  "key1": "578Jpux54CBiz4UFJ79yHLafRdovtitLLTs2dkb8PJV4UPcLCx7wEdiDGN5mYBvGLArv9qjnrtGYrVqWVN3zrTfS",
  "key2": "5LE4Gxbb2LCFVjvFKeUM51KPA1jbqNaJpg9ntk8sgpDWUbDfpFAgVyspb363JrVatzu75BGUDUut6g1uyaj9Kwmv",
  "key3": "3c2ZpsrgLVCke8AVc76H2CHvjCsgX3cv7XwxRH3cR2ANCzEpfnVnwiYeK7xMxjU8pEVx5mAYmpw5RfeovULMSGKf",
  "key4": "3eWb2AoakUu69rSVSuwfANnhtCxnKigdkPVeTk9wNTjzaxnJCheWMMsE1qsygbCUxWQpC33rhBsReMszgocxbXSa",
  "key5": "ZDbFdG8NVViBSp5RXqfLhXuDVLhkX8KKMkJqfH4vz7rwCZB4SS74ybjuFevgxYDRTE4BXrTRJNNFmVoaNYr6u7D",
  "key6": "4uW1aBZ47XzPkEE3z7gMoRwuiZV1ZtDkwjE9w7Cvf3iHTs2p3HXZ1QKuoxVt4gBrdKK5UdXSUY7msPM5t4csaYV8",
  "key7": "29HCuUEftuUCBdBvAVMV2wch4ckUtsmqkK4mUKLaqJnATDHxGZCFZyFwf64MwjDy5GH3425nZdVNMsxV6FBbSUjS",
  "key8": "4qsKxTXg4pt6E2dLJMPg6KL9R5LiQQVeCjRmEawGaFTwpjfcNcAgyDEYvy8fr495DTEErjY8YrAvbdu3g5G9Dsua",
  "key9": "3SBq39p5DyBdg3dpFYSTV4EVW637HQYq6YQEMfUTMsehU2ELQEHrjNMZWFgkAcx4RZJrfSWHLGbtycqyDWS8QxSC",
  "key10": "3mzcJk9b5qEJbRVs6R3NNfPGGBsJ93VNoBgdsvFhrBjYeFsiMgpTW7g4MpGV5NmNjQ448WtmTWHaahC3a4qcn6VN",
  "key11": "2bcKe8qsSZch9TZYwd9dzJkDuUPYLc4Dhh4Tzq9nXBbbaBN28DNvL9rdyR2EzzNYFiyFQHWeKvdPUuqh9ypVzuFg",
  "key12": "4qti9wFhjXm3qvAZKZHBw3Rr763mfn9UcLE5ik8jKqyUhk2g2Et6USJJhgSAmRiJ8VbWvkKgBa1c12XJqE5FQPnd",
  "key13": "acjesydrPHy4CfoXbaFPYXF93fGMFGFKRKBjf6NZ91X6WeHJDLax5xLqJk6aGNWSjVEVUzkZEstLWWV1oFmwpSY",
  "key14": "4kMfzTAiJC7KoWZqpdT6CVnzmjmHnGiSyhh8VejVGYxAGykXa1cWywFJZVh1GoYYoikvkLhmpBKgbnvwQ4XMVprk",
  "key15": "28fBPwZXv9KQbt74PZBdtynMPDy65tDWSTxmKLPXVHXRnNrcTnPLukGMnweUvQHgSi1E7wV4VJpqQLTYYqr6wj2G",
  "key16": "2yiDHRbPZBUkN4CWdRYMvXYsMRFsw76GZTy5JiqbBNRPRDhVF8LFPGUHxuEVDhu9L2gGYu1HBVf6QHwMx1v1YeaU",
  "key17": "3MCU66FjPGNsW1mGQgR6auEinypfCsFPonaEHVBEvrWxjMHh3TdxrxxazrCcJSNTuZ8LNGNMYjebqpyoUfR4YFDS",
  "key18": "2xqSG3K3yMUc1qfVWGEomjdiy3YJ7vxCMP8DKQaVqiwjtbqTJHPkCMsZ3dvDmYk9VqxmU7QuUGXVmT7dvyr3jGkv",
  "key19": "32wE1H3pomnUW8C2FbYcfAF7XJ5uttoeAhpjUQbAadqAHGCjbsXaiXXd1NFzwgA7t8u8e6iSRxwagNU5ydkazhQV",
  "key20": "39kKVNWw4YMUgMXpDvYXzE49qTcVRQJjX49zpJme8NovYBRvtLx12AdAdVnEFMy8F8Fk3Do6NWp2nnVsdKzadYt2",
  "key21": "649GbMLFRDQ6KKfHETxUnuRVXqQtSy9w2aZzyrtMjWFRJHEdFVMq66Uyp4qA9vdEX1ThYyXAzj8PToQxfJ8xJbZQ",
  "key22": "2DA3ePVBZdeuQwsDRr3R4Tfx1QyQKTjN5p7WrT5kCNURwwaDRAsUmb1QxFEEfmGByRPxb4qML3wSF9Tuven8AVXX",
  "key23": "XiSirp7k8GAUJwJqzq6x9C7gt3ukKCEpSFNVmnfeRZjmfFaAvt7HggyEVjaVpxqqkt699EDkL8ABimWJRqEwzSw",
  "key24": "PYVCMHcoLMft2DWnRnQYmdgDWffmHFjiVFqqiBh3kGvZMF7mVxr4JGGeQdQHrsBzz6sYKtVm31Sjx35HdcBjT5h",
  "key25": "3LaErtVcaMFwzaLkGNFCMxxT4KAwKJUJbGket1z5aJPFRi9fveeQ7od313r6TJRbssEhTmamM2t19jvyGEMiDBXY",
  "key26": "GkZYKdgngGYPCJDX2EZYZDi8VeBVn6XiFLXVLXknE4tKTPK15bf5TyMU4kTSLjPh7K5h1iMWB3xx59n8zrZEg9H",
  "key27": "57oWSKx85ZL479ExCX7PN4EvVj85JXkkJdbGoLBpKyh6so7MFvGtHy7M6Vgr6F5EANfBqqB8kaadRHzxGT79pM7S"
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
