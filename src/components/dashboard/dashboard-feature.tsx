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
    "3tb3UDVg89yxJyZdB1VB19PFYGxob8kujXYu5g5jpjzviNZnmTRBQMtyu5rTUm2MEgBrJS534M4kMUaQPZQPkuaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xe8hwUqVR7wvRvdEEhKfCxqYqJ6KM7CSaeHf4KjBi7R2NzPynFJBPkf7bsyBnWRk47putzNo3iAftjuhYPmiWMb",
  "key1": "gDhfV1DEigbgotGKXJXuYnWpZxWydR2eNW1Jq6uZT6Kxk64WPFMNykYPJ85TcCqfaqqQ9f9HvuJ3ttYCc5ApQUp",
  "key2": "2Q618xEeTn9Z1Do19ceaDutGbSs3dtw4Le8qHevU34UKw9tcZu1ycp3UhBSjYUi1dNvAHw28vVuftKf26rWRAmFw",
  "key3": "2XXNBGfSLiH6MmJHQn2UJeAS2zzAe7Uzs4JtAkKrPgr824B47MSjc5Y4trxyPq2xWstD6k8JkZ4rmGnAiQAXLswo",
  "key4": "ZzT1MprzDQAy1DfYQPyuX3J7djP6DXMvnJxgHQNszm6827zn2RPhMcVguJjP3qpeWiNiCoycbFTTCqewM3M11js",
  "key5": "67YKu6r67RQYZGvC7Tyz3mRpeNt8PQF85UaBY2CDdrQfvgzFt3ZGAyKbXpJh2c17n1jYcAodgNFvLRKzBuTULhN3",
  "key6": "5czSkerdwui1dqKxz2pioMyAXc5D2xBdYbiAwvwzykKxTKFfR9UUMv1szRVzGxxjBytNy8rBLmfeddWSrFisR3fM",
  "key7": "5C7WmhR85ZA5WoyNEQbKzsZHAUmKuXPYHY1wXfRxYmwS2QjteSQRv9t2txQAmCf9pR5WUY9zCoziaeqo78uz7r76",
  "key8": "4gqHYS6NVgVrJVfDY341DVbZ2gndAUk1iKd8ut6DNtV4xfBdBrhtQciLKFGPgHhFdsmqcyV7i7EMSXArjJADK3nc",
  "key9": "5u95FPPB2bcRoGDVhHUnh1yrzTGADF7g3f22K3qC95NKwPHTeEgmVb7km56e6H58C8aFResYSgrEz3dB9deQ5v9e",
  "key10": "5wVZtDW8zVatd8fGdVeECCmVK6UTDVzNYyejd6FjTeChgUBSqLmXWbAnnz6LbHMf99PF7ohTHhLs5Ye7eWwX6sNU",
  "key11": "1s3qHDvfYDsxZusCeSwLeWyDsNNH9pMfcXZB42Tb1csoMqGWco96Xn9HhjDfNcdVZe6JKjRggwcs2zUEt6nBJ31",
  "key12": "62HbHyg7mLFd7QfSWhJVGF7NL2AXCfttYnBzPRwtsV2Q14GeQyTa3hvJCJEw4zqhawTncjXhWQrj4JrH4eaBxvDK",
  "key13": "4JsAyVFr2L2soquxcp1fJGcbopB71kFFJ44q6RhdHAmKU4ivpNDyYd6EmqAAsrbPLTudFBmKjCck3QtaW8tPpbtV",
  "key14": "2vL34UKdhnsTGM2GZuJAwnawGPMHzbBjPCL7n9BwUAKEb2Vb46DZSr3EN3UnwKPee5uMXjWvnGobvQKp4Lhmsd5u",
  "key15": "5EEMvSRtNjZnyMupyiRkLeLwWFT5dTz4FQqVuUGLZQnPKRPcrKyd61DoPVJVjEtkGm1SvEJCDzqpvQBf7ExuJXZM",
  "key16": "3qqb85syFpU55LfT3DEnE7b3pnHFFrDNRPJaMeqBxr2SiV37oCo9p35fMxJjQ4Vz8qfLCc9cQBmQLHt8wARGuXM",
  "key17": "4ZUTcx4ETjBbBnSNHcj5j7iPhiz32VzftrCtTB1AtSqtra92BncBUtV3LcKvKr63CKEY3ximUnXFbczN2eQFjK6s",
  "key18": "4TTWyaFzUfJeAtqjU7VDXHUEC2oMfNs8J6VRqvcSBAiHVgeargfrK4xhHTfjVLHer8qNniWqhnuWdjC154icY1tC",
  "key19": "2PEccxFn72XgkkyTbeMCRpu2D6SNP9t3tG7ZdNLKKGfG78upbvvWmcfwBYN5UJka8KopXS7H3CjUmaJs8Teh2vWi",
  "key20": "64pCGkM9kPnAmN7fXMCnkJtCsWXL6WdgD1FNELHAFfQcisEqjgDJ6wb4VgUfRFBq4FFxs8gZdgn2ER5ffPFF4UJF",
  "key21": "6M2Z4ECRWTFNizapL72A294yFWgBL1V9vk9N7G6PEfb6oCayqsqX1QHwz8LwGXe15H8sTqDwthAgdt9CNDFJFUS",
  "key22": "DdrbHywSwUNoEVd1ty2w5tbrQtLfxDSpghMeYfwC4Vh4p21uSoLAvCzsDWs5V24mZarboL671JUxrBgw5E184W7",
  "key23": "38o8M9emhGKu2M3nE8GtPpvR1wWGqFAnd5VdmpupZjRUjfqtvH7pDyWRFdr7nRYS9C4kdvNmr6tGLF7vefnPvar",
  "key24": "2KAAR5kLyCXQ3m2WKHTJLJsUwdnBUaNKutbbcHdrKEe6Tm6v5vCj4VE9fhLBy2kj5d5VQZx6GGGRDH6VBnxqoCtv",
  "key25": "4qcFrvRLuTeig5rH7eYaxUqRmvhFGsWWPXK7AxLSTtjEne8nEgQJBH2hgw5poCh1euunAArv6poXGjW2b5v4UA84",
  "key26": "2oWAqbYDsWUp4BVAroFNaFbZXF6HrDXEh1W8uNwWZQ5wwzKdNnjxG4UVBWMHAK5EpNMABryVtevURqysXFXinrBD",
  "key27": "4cFnWgQFdLFA7y4UpSX3TzeSx7MoBirq49zv1cq31FefTwqqFyg5Smwj6Z7YShUkp82S1EFwYGJx8M3Vd2uzGM4k",
  "key28": "2dyPQDzu9338a2eZysWJtXy6dCJHqWkvgRVCGrtXTJhs4USCyetNx32WVCxXhVoXf253imB1JM8bvKejDKuHpJJt",
  "key29": "39xAVbTcRXAQfd2HwYcK7smWfzoRanwkJXBXWBU8uAcmE3K5cnFkT3DrqDQwYDSxqiXFsNhKffYYuNRKqsDw5Qtx",
  "key30": "5yXMoyFA3Po5u3vYLRupuJrLtXBWbhY5bBXXNCRHRxJoVt9xtMBBgu32nWMsgUqX4f8a3vPuoFZxs5TRv6R3EZUj",
  "key31": "2GkToAcW6QCbVXKfXK5bUjcpmNbSr4AcqqXFJLx27JVn2W6fh4NsmECYHUEV5JmrBFjvbHDqh9m2E7dM7ovzJevJ",
  "key32": "4XDhLZ6spcR6pKBtEW1kfG3JbTrNaQqmiTuEYkXgACVmWuie2Pk1frQWNC7g3Z83fcuM1bvAgh6r6jtJinVzboFP"
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
