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
    "23gK2nbSk3q6aW9E8mFFzPAsiC8sKPRPYsZRsXT9JD98R7WtstNVutXdQSNG8fv9Mt4ZkvgwK9wmCLpijMPCoy3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6AajiN9VHVmpkBziXya35iTcSVzapsVaNGpTLDtQZG5rYZ2bLddbpxeiJBMQHSUEqH62XprtcXEWX6PuhRjqhg",
  "key1": "5Vh2CErQUZDJBgNpRWGbqiB8PneFyXpFkzuNZ4uTY2sqL7wZRnmM95rfTDoZ6ytautXaGkTn3cv4htKsTJFEvpQr",
  "key2": "5iUjLzhF4aBhJW9MPwga5vsyngVFjjx9pJUNFz2TBgVc4QmnyJ9iM1Qge4PZpLxbBZ4gvGNkYm7uMzMfGmwbEut5",
  "key3": "5S9wHR5uJPa78GsTHqdJZLVNioJkV49zHGgUZSDq3uToCUdGkPNtPuTngaJ1xNZv7z3WqBLibwMrdKZAGgRYy3gE",
  "key4": "2edszgmjjEjpMHCMGxK6xcFk8YkrKtS8Jx6JPpR4nzFKQ4LvDxQrMM64PLBDjDkNmWEt7ob3pxeAbC3t1FNJb88T",
  "key5": "57mohCRQywEuJbikogWsymVPFpA77ThZxDht5XxB61UFy38RJvqHUnfhxxKx8MhDSSxVKSE2hRaywhckT5HAsyKw",
  "key6": "55UkWYrbZAXgGapVyEnDMNeYby9oB6r2JGAcYRC3XmGor4d1E4A7qCqw9hgWfwk2veCAQkTcvWsU2vqHSGjy9xxR",
  "key7": "5frwRJigaMoFPJs3oBC2m6DZwv7azgtczA4Gffqk2FaFq1ussViB5XeV3pYsEUB2WQti76czLkcZitUUKPuWU8Rm",
  "key8": "41spVy8XRhEkjud1p6hSm2vwCrhwnAM7yF9HguLhhVbjQ867XJZtntxmFBiYK4QeiL3WDX9BeaTbECiNMbfbkkWq",
  "key9": "39SPyKo9YpzBLX1Pg9J4MsdJmasjerTagzyfLS6tDSvCP33yb5nwma8NRrjzJZfnwHtvbSZidGhwgLKvonkRccT",
  "key10": "5CZYpcspDDFXE9mpXtvSQmTcbJ6vLebtr9bsz6XDVpqXcKZUSkerZazfDhrGEhbxf2eHn29nkrLLvFSyJhpq4Y8y",
  "key11": "2gxDgCibAKQnoxTKJveAz5RgjTuMGftzUaVCDBc4c3TZxquKwzFG5WjffDBWPMXMez1Nwknj4ovT9TcyT9FAzQVt",
  "key12": "bBP94MmmdRfYNtoNSHqbhYrSZi72HRXWqeE7xHs4iBXVDVqi5Jr8VoEA4yjEVnumjEDxkQshjUKynBSd2ELHU7b",
  "key13": "5FtpTjbesNnSc2JAao2YkAEQkAUtZ5AepZjmTTRMFeieMxS4ENDB8qejnzrG5aznkSYvpAPdZBtQ5M2UbZxHz2sG",
  "key14": "5NGrvyWGz56S5nXEuM66c7RWQNmoJystepvgem3VXYyPEP5kTeE826qfUw2Je7zmKo8e56wKAi4tRav7ThntvYWr",
  "key15": "4UnWbLCgDMf5VKhAqUW7YCM88AvY49vnAU8Juhap42KAgjAzCJmuXiENxnHXhTV6YzPsUUDgh3sbWv4q7CMHsJBg",
  "key16": "61Ehikf6Pri7eyF29Q79rseSpvFcMATaprxaGk19Qff3cp4ya43hsFBcQzv8A6T9hVqp4Dkxwu2AbwKPz9gq4edQ",
  "key17": "66z3EV5hYFgxH572r3tzr6NLwzXEkFx1p8G1KShY8kzGLmvQvdLcwyv9MGyKTUPFNrXtRS2RnKibUVq75V1wuezX",
  "key18": "3c9FzYz7zKyxrA8dzFNjS3eechvXoyQAC8JmGanZLYYndZjQtWiF4JArtmA4GWpURtSq6bP4xmMk3c1UdHKui4jB",
  "key19": "2kvRcdFZbyq7eswtkyh2mBv54SepeUnw3r73kgoRaKAnFtqnNqfPeY9qeK5bP5gnaUu1tGyQDtvhNwX7akYuUEVz",
  "key20": "2CbHjrXVvh3wq9wnMoAbPTNSaSeGcNEoJUtPmRYDNtj4DmrbXEvPRiti6Pf3H1BZCQ5J3WF3BcHnR6sw9urYdQxi",
  "key21": "d2YmfJKp7ksPG3gSFzbyt3m13VmKqnmPsHAbnaEM8QWoqBfYRyxicbhjEhsMYtbHXSduAYJVbrhtwsbDMrooEff",
  "key22": "4Z8VAdmjwzUK6HJ83bn3YHB84yoLaz15Qr15RNYSaFiLCb1cbu1V5jiKxnaCS1vQfhCJB2PCbjc3DeA6YfvT3UXf",
  "key23": "VyDYRmo5PvMiirBB5FkdWGRyZUWJT7XovjnSShmM3L4J59c6PjS8gRqmaQhPk8rPHAKnnLifnWrqxHe5FbytWvR",
  "key24": "35yVyBzVLByxNz75vji2b5Tm44jUnZkaNmrp31b4MtZq1BnKJUc3eBqXaeYSBucDLioyT5FLBZG9xCryf6Lmnuyt",
  "key25": "4guorknurWaWd64J4nZZS8aipnYxPcx2pTtW1ddq1XSU225obhN1tWqnnSMcZgjVqpobTk1YduoD2rx3WkjetSGP",
  "key26": "5JPkaxU3inKZmcQtdVxLHNXPLS1D8h6Kwu1QCmVpYG2qVDLB1SXCRr4FwW5C87SzvZrosuMu4g92LMSCEZywZ6io",
  "key27": "4xz72U3yUyyraxSEFnx4rMdw4qCkMDof9sLywBjnVPjzNPMJDdeci9g8dHAnD4ysm6uHeobd4LwYMCozXrXyX8Jq",
  "key28": "Mnx2dokec4F8jULwaMKrkViMpP7wpAseeXYmXBmXycQTKhw4fsULL6MJBYDYisQymxSPrdhvP363NGHnenN3uRu",
  "key29": "5uQk84CzB4QnEyrqWLwHu91zQSddQ729wnRgp8TL75WxL2CL5a4yNt3i4m2Tj8TMTNdsGt8yyTAozkDevhGuJyuH",
  "key30": "RG98NXvsrMwuhmPXKcQcKU688z8TvkkMcS5bFisoBEKe3JQpHpycgdvCbWNLrfzWif2hbsKZyUAewh6xes9tTfT",
  "key31": "2meVacPdFZHSURM8HJvGGxkm2U6fr5SPwdStw7Xdx7TvdsrH9jCUrc8b8v8RExTnUzukiDQNSjnuHX4va5LWgexK",
  "key32": "dnqcHnMehJ2YwQLdrFEBwQVreCsQEtwBYNNRyc3pbhFD2sABV2xh4PAd2155h49GFoQ5iwtPdvYg2v9PRhD4jg8",
  "key33": "sBcWQBSTwPqMSH4DD2XExDsqFCGaPH3UPzDPYZ8MaLvuziCyp9Qody83Bf78jTpRfSBe59yNtcAwkNHKj9BuyZJ",
  "key34": "xJFjdPnUFbEresG75TcQe6s4Cwqi7x7A4jxTtSsXZ8skX2nFZYL6CDTkb4YEVDwJJeGz3WFvVn4mTivAS8wh8Zw",
  "key35": "5ErGh2G7cuFRV17k9mYQfys8kE8SWX9Af8uNASw7YKTc5cSDfTwXD8FyUdVVZhJVk2G17L2viqPSWG7xnDFT4FnZ"
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
