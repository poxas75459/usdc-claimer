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
    "3VC4UG4GFDVf5vPfhrB8zJAN8XTcS1CnW15dtx9pVqw2MTXoNXhRUSasd61QjZKgZCh82uxUz6SisQY359vzbV7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDjr3akXPU2yRLfmmX7RB3bxig5TsWMXBqtjms18BXqBezKKJ99X7wgbtFffXJg6giev7SVUufPqoitp48z93QS",
  "key1": "2sdUBmnZZpUUcJyUCADC4QmrBxbvU42xmESXcXs8eveYXMKzAT6pLs2BPA3stJhx8AB9hqVct7gDoUX4715i8o9o",
  "key2": "5zRBRRk7DVXdQQSxzwDUXdMjjnQLjxsTu89vLPWs7CtoFbne8Ddk7od8YVrEhMW9WmBZ1maKUMgYF4tCpTB5Rt9t",
  "key3": "4AupuS3S86Q9247TDFpdReXTyWt3EBo9WXBnDYThAztR6M8U6vG82fdhKtwZ3FEpUdsfVXdYYfAHwKmQzAuJejyz",
  "key4": "2hBPeqJ8q7FbxVMjHDx9TAPqYTf3tAH1jFJJdg497UCCyifjee5N5f2DGiBskxX2Nm3WwY5XsjjD7zwg75Aa7oph",
  "key5": "5HuERKFenNW3s63fYDYETYbAixdtpY4LKJPF7mK6BMQBwjYCNvPJVDGC4fWjBABZqyYgQD5kioE4pMY5aZCD9dFB",
  "key6": "2hFCeYEg4uqQgkB7HqqsyojhzNzxrRBunkcfjsmHWmx6peeG5YxD5uVj7HjQEo5UsiXVLQD8wxZgpnAiJS5uM3tw",
  "key7": "2GLLabHVfiTTzikqzaVVVkmmwQ73XGGbNcdAfXywLX4KSUEvm4QUy1koRxFLzgznMc845pgZqWaqn8HeC3ZQ3Wfr",
  "key8": "4vU6MMRyEeKCFCwfihy4LNDJVWbopwgettcdVTqqU6MYmbmwU737QaUvdfY1GQ4LohSkC13Xs5jFiRQmtgKyL8z4",
  "key9": "29xJoGugNJTmrez1s6GHgLhLo9LxXXxXxL2F6mLFMTbuHoCfrZESnaxfLT45yHYx9gm3ZqyB4vY2gYbvLgag8mwu",
  "key10": "5Lya6xvktugG9zMwt1gf5xMq5MUnWQ5rnBT7fkfDymrbpixMd54k1Uu2Q7iMtC9C21PKB3MZfwZ99G413Gsm9hCu",
  "key11": "Jr744HwWtUzisdxtGrS5FHDN56DeKM7HPYYNet1KWJpch6j46KL6Y4Xj9pNhHnHq2WQnVqDpk3y6ekqsWYRUqAs",
  "key12": "631j3Fg7TdyouCjZRBQzZsRMBZ9teZxNYiBccNDH6C6TkiJ3vmxR61Dt7d9MAyYixKkCk5YRfooPzUigLshma3T8",
  "key13": "3zn6os4xLQt8VTzHpWPcjvyH9etgFqhUwuVTL2JqyBLgcfvP8raqPAoLy2ruh9TZb2VVhxd1us8iEXtvrxM9BX89",
  "key14": "4jJYPRtR7xiUNFdbM8jQP6mZP5fcp9Md9Rhvxh1cXGhTnMXegaD5VUFimCGg7Rjv9q5gReBHygMWYb546QkHsAhv",
  "key15": "2WJGLVYxjV2qxigzcPRt3DR58xZp37ammx4LSbscxcW7N5bBmFd9nmL3EK2skiNeSh1Jx4xCCqp2d8KGoP8ZhTm8",
  "key16": "4jthBLivqHAPHvYSR6gUEkGfeHcSCZusYiVxQn4QKvQbFnfAion7E67iCScUQAbRR3TuyhZeXgRzvPuvraVL6XoG",
  "key17": "6i7DrR83U2GhSakZGBvRUWWoGV64ktMGnToHgvTjftukNmQZEAX3YZQc3pjbykgmPLLp1szbeULMpKWrzS37nwt",
  "key18": "3hArdBS8amDzar9hSUDDX5zHs5xMsbtB5wan373jq3p8eLHxTm2rSG7Y43SemUHqmuzbiiHwAnoc6impMusLTM3c",
  "key19": "4rqDicWKtVNL5kTFrfAUibP2iJcQGpU4Xapcq3fmEiHSshhHGu9pQXW7rtXMuhgy5KXGN6FfTQWihxDSehdrBMUK",
  "key20": "42diQVY6cyBpCb8fWiP51z45SX8LuFWeF5WfbsJn6UNxCGDqb7TnsKKVWxNJaFLia9FPQ3vWfXYS7xGzSWsh89gR",
  "key21": "628EBZNUXA2RvNZsnMibtHMjHLhnmaczW1J5sT5FqSrCmnEQJ1Sw3KoBVHwoEHjieVUsBbFJpLDULD3pKGNMxFs4",
  "key22": "4JCqn6HgmKk8cQf82T3bmeQvVdvLN7HpJeTDsXNpdTExNdzfTiXZTZGqqZhpySn3rmnb7t7bs3kvrYxz2AWZVZDR",
  "key23": "3WeMeCUs4Hrby4SfHNyZMdLGuokKSXC7fJEtxpEJDGK1X9kL3eLDbCBGdM138dnAoQAWA5DN92qHrTBEa4Wmkgce",
  "key24": "5dWZLcesJE2dTyif7A4ZXeLUCjubdzHrBFYmiDYkRD6omAiwx5H85rsZ3uaJPa2AkJrxLRgx1t8oX6mYJ2epmRbL",
  "key25": "3UVpUC1oYHyHBFp2atxSVSNUePXz4wEhqcssYdn88UURx5LJoHdxRpHp5JUxhoLJngmU6zJWKKjjDdLYJ3td2SWb",
  "key26": "5L4R9kjn7DYaCh1w3pBAGUG14uXZ6hyiy8zD3FJQLsANXUPon7Cm3PJJUqRftJXmjmnFhZQrak3doxZTpo2bxbxg",
  "key27": "27pYyH839nRa4ELKKB42bQ4x5tMXkWtXUZvPoL9xeTwaFoz8R6q7TtxJ92e372vDo7CbyBg7Tnn3xX2oQfK93jt1",
  "key28": "59bqgVeBNa7mTdYtCcVZforDJerVmTd59rPszH5kCYTdLMXnVzSNfB5MDhaxUcF5yw2TNzWXeomLsagdxc4mX6ZZ"
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
