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
    "5TxqbSQ5v71kmT3P3uoBuLMaCYsUUqCgE2hmGXcWpgb67fZZgFp71HzbSpp8kRrufCzyZzfHabKYpvBSQVPTWhoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396C23adjDzxRtoEnrNUZpHM6ABbnm5nPHVNzd3o8fBM5Ds33wLkC3kqjAHXRCdNkQvRfaGDVdAoAGjE875vCYgx",
  "key1": "3kS51QMYzTmzPsb3YkkP3toPXQyhSa618neyX8w9ErdfLBSxqJjM9xvWEaKD3DkAHyjpuqR7ZeQkaTfD5UqL3Luu",
  "key2": "32dyomYw9hAbE9AwTouF26vxhjSu6D9EMPf4qbMahgPa3YCKfLCeZ7ygv2bcbWyVopWZ4D6b7PBepo8HwpZHyEmJ",
  "key3": "4VKE4tDMBgY4YrcE7vNDbDFLvAzrbfnQF7kSuzR3k43phux47k8PhNnKmdgSekxMMKL5rarCp3PpmdZu5kgTumSG",
  "key4": "5Tw3oCq9CotXFU64HGGmpXFKyzooVrXihHCeneyNtKJjSuPouQnbFPxNtU9wXNU9sFXW8JudZovwD6WofvbkE9gf",
  "key5": "3gDLUjpQqYeAxpceLrsm1N7cLPb4jwi8EYbpwgdzggc8qdzt8QoYUMtSBWARJSAmt7EtaNpPMKEB8HZczyfojWP8",
  "key6": "4HdNk7WAo9YrZ3yZJuczNKcRPHvet8UPFqrA9fJNMZAeSUNALmLFpqwyHmEZTTKx7SfyGUCCEXSqQcuV5PoivL3k",
  "key7": "5BfbZ17WQB49oo7NBHupeQpzRKZqRYbbxyz1GVRdURrdKqcNeMAARWQfXpNFvn2cWGwEnWbxJutFkfq1YdgnEcxv",
  "key8": "2DuLaGWNNmajQ5sPMYbRERkVvGBV2Feq6uWNL3PRZWsELtG6ToLQw4bUiNuxD5tQSCnivuHrs5zoJCZb35kTVUZa",
  "key9": "2srSsri4YrscypPQiV3x9hBdFgwYkpcQKN4FALrSPLjNdp4teY6ZYscgVQU2Tf4iKtPGLhy3qfzWkCc9CPX1vTbw",
  "key10": "X5nGCQ6HFk93nuL9UvvkR79W7EBuWVsubDtqMUQ81QNAGx2C7hxLoqtHX4eacsVoCjvaAaRZ2jMsVFQcPBeuJZU",
  "key11": "tZ7SpivdN9jSLvRKtTxWARNpNZZcZgyH6Ay7oWcv7Mkeoo2YQkEFCvwa2eB6HKxLpHpkvBodEoYDMkCSj6iwjL1",
  "key12": "2rnjrGLWWrs8MdfQCTLu5gykR6z7KkrbLWpsqMWnRnWCmF4uirNvgu4LEHWg8DuMjegunhAcSHV9rGoYExFoVSt9",
  "key13": "AtAfiQuTucNWciTvrgNanEQYYihd7SvjkuWxu67nmEeKAr1QCFG6i4E1cMT1E6qEpL8Nx72MFw6m3c5CxDPRkrH",
  "key14": "cLuJJ3qesCACveUfkpzdn6zwn16CbbaPLf5tBWbp6cThRMFFLvUsnBr8ScNJPNTqnmiUt44sSyWm5A5sCCsz5su",
  "key15": "4UfYjHvDx2nrUyoUv4cXTG7nnMrrsnnHGBef1eGsJBgDmJvEcVmdyNRmmb4L9UHZBC9F2ETEDG2iffzf6vycmVLG",
  "key16": "2eLfQF4dttkzvGZXT3hnzqR625Lhu5Bw8BT5mY7AGMN3uwPdCYHi1nm2tyaSfTHtTzUk5DHXWbH2GdLq4DnnB2WL",
  "key17": "36FniMtXHLyqSW5NqZDURrc1bC246b4MVztZfTfxMrDDmouUbHk7PZTcr5BLvWReTRyLD4THfCwcuZ8oQp6vz5rh",
  "key18": "2rPMp1TNxvmk6FKQwzhFM3B1CKHDLgaLbgMp2YVqTEy1k2gDo3dTqJ83StzEXQ4aGRkCF5gCawM3egpptZ75MeHm",
  "key19": "L2N8T3BxVoUdJHd7pv91KEYwHAaD1uz1w5qKwm9Aqa8N11sALgQaEyWDYdhCqm1jDVvYtXPNCfTbWizoTsRZ2SE",
  "key20": "4GrYAAn2TyTr3uEVMEmZnovaQeH3fSYhHx6uyFCnNU58fmMVt19m2w8Bhujf6rSCMLo9sewfQq3SYhjTKbTHfwxv",
  "key21": "3JwZotGND9cfP7DA5p6GRYrAwHe4vz8qcSWAcmfUPUG5TS24YnohuCobiigBPNXjeSEHuqciad5JihGKyByfeaLn",
  "key22": "3JTL32aYAfsHq5LUWVYo39fE6KzNYPnZcLyUPrSs4w3gj8MHj8X1FfzU9hmajwphUdqc7pB17cw6g7UhCGs7JmpK",
  "key23": "3fFtyRwfDmR1iPdRJGqvp1kM8RJne8UMkZMns7qCE4LqEy178pqcCZkmpAJd6QfFnwqq3PVQuQQ3ikRHGDErrcXq",
  "key24": "R33nSDHKuqCE4ZWi3w5sKw5XQ3qiJRKBTD9ZzgNntUA6Gq7NnSLu9zy5r8R8rZiGoiNvFGWbF7b226jCvU7owUs",
  "key25": "4X2ri9j3sUwF3FxUSAeJZtH1WYVXWfiKNSg9h2g5AAmVr7Dzhro33NDBBRKhQELxJNHE2HbmJAHxcEahbxFBovha",
  "key26": "4anLg5tN5FdMW3MhBFM4VPyjzKzQ8MWnULJfQuVkMXYtQVQcWNn1hav7aGc57X1MHrgprgh9ofFZhRZQ8scscFKD",
  "key27": "4mQQFWMCXBitDNtGNRi6sPi1W5PwWppqkvoQj7ZeMFY9oQAfsiSDPnuQekNQ49eV7s5gT6PecZprXmXrQNrpRAWC",
  "key28": "674uMZ2jnGoSZH1LDpAZUj4hubZpwCHShY8KXD1FD1tAjitLu5m93AemwjVzWpRLQYjfCkDz1ZfGvRsFPh33tAvR",
  "key29": "3LF5Dquu8qGJHz41HqxEjHK9Yjup4r3XUKQ5nL6caTE58hCAx3EzTKwtJcpyNHXdewg2mBTkn3LrNtVjUhpV3pk6",
  "key30": "29zySK8mXqV1i38RCDEf5nxSaYCHsReu9rgRe6MQZ19fHDrbNe1vWxUfGcXsgV7Jx6TJcQGJWmEVySpfBTAT28hK"
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
