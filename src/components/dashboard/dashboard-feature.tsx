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
    "47UzqoeSaT38hMjczYLBNAwJYwzcvz9NzKAyHwhWbBuRG1ziddmL2eQUSx74zZ8Dj2cLLvsTKvv6TB1dgTmfZrg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtQM1j86uihjrUQGrUtVdawajMGCWuErjFi49fxCAR1NBQEcEUaF5wSw4WgW4CvSwWnipZXzgLCbkmZCfzH9EU1",
  "key1": "41cwfdcLq3g4XWvSvcREyLPYziVQEftRFwrymifsqnV9qaZtHph8g5G2ChNSpsgxs4NazacyawYfA3ppR2MtEZhf",
  "key2": "5cR5ik8x2RpuD6G53Ukji7FDoxv86sn6SbETE8D8BXtntV9ygfyoR1UNSosVBazwKsEHz6PaK1fNUXsaAishQvdY",
  "key3": "JR9iyZSv5Ae92L3ADqYhe5c3sju342gQCjRaQvvzrxFpyLW43sNDByd1vjdMxHgEbt616ga6FgpjnR6LtbsRCjN",
  "key4": "AvzaJ2U8Vo39wkg1BCYox4mRWYAeu22hUbhUfoMNFskeG8WzuGPFGX32423HzjMRBtdxTfLbZUHyyHLTAfSjULQ",
  "key5": "5e6MhRjKULW1p7WJPgBhvp3UQPw5qCD4rg1r3n5sdn2KVxyo5EMfwdGMWhfi5t7AheToBtuZryk6tre4CLDdXHg8",
  "key6": "2YNC6SHN5ordEZ4baD99hAqgZQpXeXQP6N4Yb1GDoFjXxbcCGaZMwXE7FpCzwCUJenTMpxaqpMtAqx9wYgDLQ9KX",
  "key7": "2Co1pJA2uzBt91bcMNtHAWR7sXQHM5YFxHvPXaRcmJbpshu1JPkbSmeJeGHXqzrnQXGSXifsYpExvU5Go7xz3tu6",
  "key8": "3oWMCJbDB8fLg79rtSep9WYCdohawgdXksm8Mbtftuu6gu5vToxwEndpnsgqDipVDwDcwRpbVnHGocFTSoBKm4BK",
  "key9": "4GrARBRRfFqkDXuyAdHBfQeN1RTro7Mg5MihbyjFugQQ3w3xSfjvzoCnsEsnUhVf89YQDWxsg3As97QSA94umnyR",
  "key10": "5zMGcoMQht4kgeAeiDEbhzsJBDTf5c8rr5RSQJzNgdeoFBBTANvmwGjRt7S2Wb6H7fVsqiRtBKVJZzGpnCyJJjM",
  "key11": "3xNSfPckBgxkoc8gUiFoN1tpAL8MQF8jy4LSV2KxtYojMeFTk5cAYjphQfeAC2RkkW8PqG1ygW26mGCp7LryQSQp",
  "key12": "4wnkWQpp5DSU6RNRmrBVgrRiEQLo8kmyUn6evds727VJrwDdeCss5RS4u5A8PxS98ozDZXJN8RKZnGT2YriR5A7e",
  "key13": "3FrPSxLA4ghkYcSQmLWhcNdE3CS8k43jrEf8Z5UXjF1RdR11Y4HXtEcM1gqmGYW4fXkdLfdL2qU8p4t165kVos2v",
  "key14": "66vvXQyTRBd1UP2BrsDyKcGrxs49ThNHxhVV9ePteUmV1mPUtVkM7ytskjmhM4X1swNwgzx5CfyTuTKMNihtYXFG",
  "key15": "415vdTajXkNg9vYFWF5F3UVvTs5CoKn9ipJ5RNyrZKuDaYF7GcyKEmrxFwgDadSuwF4u3pXBzFBq37vFAmRkQoVy",
  "key16": "5bFKXjREdw1UJuhHZeni3cEVpfmP3mFDbmU4Tnz59VTjFjPT3TM1qUz9EUg3xxjzX8RvZYsANzWo2BQdJ7daq4ay",
  "key17": "QEPqaV15TDXB5HV8EKh4u237v5L211YCBKoNvJiZ1mosDqQ9ZSfhYYuda5Qfbs94Mnzf4PMyUAn9iyz3CsJB3SB",
  "key18": "4vTHswTPCg4bVCJZp7CmK1CPV4D72DGs16b8P8oN2TquEA47RNEoF7bRmNjvF3whXZ2kHhck9h8FzpTP6NR8RZfD",
  "key19": "mP7qs6ExS5ii4f2oLBYWorETMGa5z9A1GNEHyifR2cfdiU4zWUwFrxu5H1WsPgw7msjc4drpYfGnA2z4P5saNnr",
  "key20": "5kQ3Anqqtq6RdEWKqr5sDdnBbaM4K9cygiMEnDBzKuCi1ZhqVjx2TET1vthTqmhjTBATGZrUcpED5cqynBiwxqXW",
  "key21": "2am925joy71pw2m2PWZ4vmt2Jp9LTofnZ4cTyCCaWvkKJtxk99bM5Y7SHc5yGjZrKToiK2J7PPfZYTCSRz2StUHn",
  "key22": "3fYxF2wgtwr8X76HPim3kTgmQ4s6NXhAUjXdzp2QJaaEzyuGeGdyJpxZCLiDBXiamEtXbN115xd5tsvi7PMU3FaJ",
  "key23": "2VMAJ7iQssHDtsXHpzoxKCM2vumaSuGSp4THg7AW4Ru4GgEEDZEhyzFYXAkXwNF5bGNQQiFSMgKsfAd4JK7RCUPE",
  "key24": "4XXkk2qhfne3bczPL1acwq2pgiwCb68r8ibCpDwAsnP9einipdbM3YpR911YXsBDJsqEWAJFpW7iTtoP97AoDgBF",
  "key25": "phMDpfHbhdiETDRNY4wzeWLGSsLuTuZjUeewkZ9tYwxi6VJpqjta9Z324ZsVi7ARBQiwpuMLcQuEh2wjwBKX2Jb",
  "key26": "3b6K48pvP1b92hSvp2LAfL1t8udNbQVDhjVMVkpqZrjjmhZN93AFKsVaVeSST5AkYwPTyxtbe1LLcvbKWsqpVUUe",
  "key27": "5hm1BYcGuwUujvjeyhY2AKTCY12psC323BYjfPyTxREWs5kMpwNKrMWMm4ACgrwqtknd84yyB3xyjAtXMDrCofZt",
  "key28": "5e3ou7nkRSMsW8m7wiNd7kRszHNSYcRoyY4AWBHA5UqcFDLmf2aGPKH58UD6hAZKwpSuKSQAZdTKrFjZZXJwNaSr",
  "key29": "bgW4i8bQZvJyiQqwkC4FcaPN2JxUtZ523cuUq488rz4jjYH4LGyFfNLPUFQSMeK5v2v3AMXsnzuEYAKEQjU8wUc",
  "key30": "5TsMhjkomCUFhFaGQCYsARtvWhvkmfmqGxWzmDS2BV9k2LQtvn9QKb2mYVZnbxmh5fwUvDQN9G5YnGu7FF4s3xrC"
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
