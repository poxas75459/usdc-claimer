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
    "4KmVurCLhqmdCT5D8dWvZChdAMYivA1Wv83EFmrsraY8GdrBgwHAg4fxHixdCc5Pm9GHzVvFAJM398vTwd4FdpmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zdBGiNRSrp17zC4SzBEbPHXss55anh9xXyfwP63N11ddM7PwBzAuYCortrhgL5RzaU3mXQxRREYGtynDxQS6pwR",
  "key1": "61Ur4yGk2dxKK16yGpp79QbNDaWZEU2cRdefvByFLuDWCNWti5fbHKvqj7m3Ls31jXWuTbbaVravwBZB5zKLJ1hj",
  "key2": "5wTTAA7j7vz36p5LT1rWR8BHmhhrepHSJpkWbfNqPRXcNvdvukpzd9whD5DhXYgKKSzdLjugYPBzRkpgio8zD5MY",
  "key3": "2e4z2n5jKkDT7RRoBCE8X1sB8mMSntXMYwknzySQWrJCqjnroKwgVYoR95W79VLdBGVaLXfPXby8cSewQsCUTaWY",
  "key4": "37bxX2MqcHaw68RjZp7YJEqR3bRt1ffxxDF6bBMC37ZsDyp47e1vGpFXcpxqUxTPnBdobxMD3UJHwrdUNxR3ShzN",
  "key5": "3UaS5Zo7jFiaj7Awqzn67vw8BWqKRYZ1rih4HebYeGoAQ7tBV9JhYQgReXa7Wgh4uCKvkHj2ZVmYr8aJJ6cRkWV7",
  "key6": "55d1rA2sxn3ux9m6nfiUCKha8k149K6oncjLWfxHvAQJ9MmJEpYaqky1aqc6JhMyeXyvyHyxPSmd4UoyzUTjfc3P",
  "key7": "3XmG7SMp96cn7opUghiHt3u1wsbjLEmU3fcbb2tEoLzvhAz3nymb6Cq2a1S5Sr31xpGQgSUMxcjMsbfrdhYM2qXE",
  "key8": "5FJtckRtGHX2DuGT11ZyPg3acSmW4T4oLfaZQQ8oW3nYKhdDnKQJiicBXdf7RYbHxQUbyGQf4dME5RkZToLCppmP",
  "key9": "3NMU46pExnc3vd9Hx5o4PPevLRAPiWJdNGjqdFMj2tst5xPqkkG1ZtVeuEd5YT9KSP6xh7X9Cwh59k2SLgY1nkV9",
  "key10": "32fvrv5HNy3iYN5kRTxb53FPK9Sntx6WhHuUvnFVaE3iptZX8UGKPAxDH4tM2AC48suxuNno3caJ56bahS2C3Yxc",
  "key11": "35CSVLJqDdWjmFjFxZUAHxMQenRL3hTC1YB5rYnizELPpfejEB7yBmnb4k8nGDujpcAcL7f3DUMkhRQsuMqj87T8",
  "key12": "4SBmptbP8Qgx7jVQCXePwPcHa2rm5kHgVPPeFzFzYjGNhzfWzopUmXP3LiRjMvzJBXxLSX1YNBt22Tqt2QNdvLbN",
  "key13": "4R1Bue7pYueUnXb2WhmM7dYfxhaa9yYiMpw1MoiuK2vmvsXbSVozGFH6ghzNoimr7zUf3kc858HkKL6d8M8NcqDD",
  "key14": "429PktKf1B5BpmPcZWFrP3QDm9B5iqK9eanAg5VCg9hfojjNsWocPNVYJezuyVEE7D7Q4mNMtWsjaEBhxBhjDFP3",
  "key15": "3EsqhqDbLeNwfogojo1NJca5a9CuqUyyBkP1UzuBxJPzEyPCA2Mk2E5KqeTZZ245kY4MpdMfty7ysFa73Um3aBWE",
  "key16": "55REP8QtwkEpKGGNriixNdkUXWZQoTediCV2ufZq4cvfPVr7pK6vpAyQYJsrmdH53HianZTfUSqH1ZwPECntUC9Z",
  "key17": "MY2iUbAdJmMFN7BfL2er8DbMoRFYoAQFyGoJTBQHwUtrW4WmVUJEiPTdi9RQs8suRoFBGBkQeedQiLFxWfL21iY",
  "key18": "3iSC5PJqSwXdzzHr9T6ferqoTsuiVvNXUwrAUPLtfkdhwi5pJXK1XjdgtmykBEcBuaMyoySBrQmgCxVgHon6YV5U",
  "key19": "2QwE9oN72dWrnxV7uSF2x5wfLzxrsScg66hoXNuX9SrTTRf7HwVXVDFGvDuLsn3Gy3WHc2jKs7NC6grbVYyXorjs",
  "key20": "4Dsg1U8NVc9WZsSkq35hKcW1sQkg8jgfMUwwnUwe7BB5K2AhhGqBkk1FNhY7Kf6T2bQ1T1HJN2wWw9f6CdAS7DR7",
  "key21": "5L92PwNXkFpGimEZqpQyWXH4dVjNeAKhmkU1k6LoBeg43evuX9bxx5ToNJLNRoBHzSK4v17Pbv6XjHxc1U3N28ek",
  "key22": "4U46cqseQAkd2fexsxrdCFAYyqBaZ6waTMRkEuRp7mMpNzLbUwvydyCvJ6PsQ2Qyr4ye1JjLyt2kwbdd4Ye7XA1q",
  "key23": "4pdHxCxaQEPiAdo1Hi9wzi4yveH6uqHf26Fm13W4SrU8yrjzdBcT1pszns8sJRqeFg32SxxLsE9C4MjpyndMGWjb",
  "key24": "5J8gUJTfQEuZ6Ywqx6A326HWXz5AD64wFRKA35KZManKXuJFXwXALY9M1eGRTKem9WWds7d72iWZQgEXPQqZ2qcN",
  "key25": "35dftQ7dQULL9iYhWJuRCWBGqn677im2qpap6BSFKKqfgdLzRdy4QcbSo4JHNhtrakFbndikTFXrKgFnvTgkKxev"
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
