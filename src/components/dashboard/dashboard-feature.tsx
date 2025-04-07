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
    "Dujyfc5Mkm8gXfoz4DNDw1U2vqgvzCEieFjHC9zCTo9D8LvTA7VP771JVWZLb6vT5sVoUPTUuejYisaPsnpY5Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCc8TL3zu887eL9YGxg8oPAZm27xvkwdDqAu5mwu12879mao49iagD2TCzhYsFyhjss7piJmmp2XpUFCyi8UVsU",
  "key1": "4aAAVJwRur4j9dzHH89AkuNm6v8iY3tsdiBcscJRndr6TTViKBVfixYGR1SKRbUKi1fQ32DJD8uvhRSKtyqyKven",
  "key2": "5BFQ1zwEbyaG8A8jaQF57Cos32jsCkmXisaWyZAayfzJrbnHGzNNRYhGsUFRvY9PoQF1tzDcEixGtebxBLfXxS3w",
  "key3": "4qfYoB9RCXGuPHB936r7i9gD91LtQaec6KL9dtUVvjQu2WR9iDhUE1cpPg98N1qzkUFFpiDfrSH2bnJqnvEHjacw",
  "key4": "2NAJC3Te7k7DhNpJBuiV55qLtvtF9LUPjRncuv7n5Kd938qXGKQXX4ZzmpS4q89W7iPNW5b4G4JjuUfr5WY1VKsM",
  "key5": "5Kwr1woheAjgZJ1b4g6U7Rupus4reWQ8QQWfzFRKp7r2NNokzdiRWgsCiUax4Ebf7D9aCJyYUoWae6BUE4LxknBk",
  "key6": "2pBi9Po5McPi61iWk8HBqFRsiU4PPTb8qbh5PTxZ7HMdLYbW38VgXdtsiZsjmH3GY4dSahwpPjksXHNkDLj8yi6b",
  "key7": "xfkQtAieEebDswh5xQh2VoesieYi4yAnrRBzqGW9aw5DgJ9StbXH4UbjDY1qhRBPGT4bmdmZCRB4rxXei4EdjaE",
  "key8": "2LnzF5DzSRZmc1C6dRm1UqedLVmB9X8UbDv9CBEw9C5gniAJ7svnCgCxu6x3ReWoiwUEPjD2bHMp7Y296vs9h1ro",
  "key9": "2H3n8KbgWXaDkMYJm5edCyn1rYAVtqB2HSpPupVekhW9j9Tcu8LFr6DDnxQL9i8YnnZ4vS1jRdBRSFuz3dmEGozR",
  "key10": "22BvCz9xzG9NeY3QRZQGeemL1k937hhRdmcYZXR6MGcKQohjxSbi5MBbr4m24rEDg2Jdp5ZAfw8PCCMZ5dTRcaYD",
  "key11": "2WQXUMD82eVv9L9B15H8NaSSniKwgPc33kGhW1ofc5G7HTyMe9manVisJHgLLJJ4pyPjDWewFqjAcY5YyPV1hP1V",
  "key12": "5SWXseroA4fmYbbfmXi5DJwa84ModGUk3cW5DesghT1cqG9nRhUKmhe6DSTiiNFUDFC3nC6e1Aku3QMEF8gJXn2x",
  "key13": "4DEvL3ZeZvmZzgJs58xhCYWgaUsxjhttnzTstYuk1my32YkPs9YGK54fbqFf7swkwGF8RoevvWWkD5cpF29oBYo9",
  "key14": "kEkQ6eqViNCxKynS8PY72Pjpacmw8w31fEAzUPDDfnK4wUZBmsZhzjdAF6c6S28nq8hHiH4wqjLAotcMYJzZcqA",
  "key15": "2tB8Sx5kLh1AfwF2L5E58fBNYTnxEY61CnXp7gschupmWmPMGyz7HjCyKe8t9RJSXzq7BKSwf2j4EB6Fr1R1J7fL",
  "key16": "3RYigdjPh5F62W5kcFFqrnqRAbjjz9XFQTE3DJHxdy5Ei97o6HuYDSemC2dJo8VCBMN7kYBvwLeH29eHd3agAKFY",
  "key17": "2ppAAe7PZezF4sHrPqtqiHKvqfmCaFNdK2JNbPU72aaoF2ruxMx1BXYNw4rhG8egxa2kLu7VdsgvxeWe3afwciik",
  "key18": "5P6AbfvBBoP57DaXVogjVzc8eZWFsgcioLQvZunWDZH13e7BStGJyPhtjb5MnPHn31D8BTkxYSAfuHhVotgs7ZC",
  "key19": "2HUn7rZSzhVbGfVv2NYRqccDmANrEuHdiSbvuYVEiFJGWdCY1vG4j2nA4PXcq6EEcDXCFnyFHFVe14ZZtBcXw4aA",
  "key20": "3NbsZ7hPpWDfQH5zVCyd83LNZDieHqu6652SjdgrJmxLNat1kJmUYy66aqD3h6GuBDKe63gyVK7mFYgNTpGr8QTo",
  "key21": "Tu2ovkKQwBCgVgBZhZ4StGrR1hwmJFgwmnqn4hxgtx2cCw5jptVHJuxTDkyXzSA6zQ5GYbw7ytDR9im1sjU9act",
  "key22": "SxdCJ5yZZWbnXE4G9ProvJwcFS3Nso9TdpAzADRVfvHfpoxLRYi91k5fHnweGcxRNjYoJPJSzh1HDWZmEtW3goi",
  "key23": "DLtpkKtMjPfMWNSieqLFmvgY4frTeJ1uPxwUfQgFM7N6z2hpTmPmLtWJWYBeVtSZVEKXjM3jkAP2ceXHkhyXcRX",
  "key24": "2hDExdcwxTVyCfakmFVKPSoFpzoUaKTuwv82BLmaXPUNLAzjG89DZGnXjZkcoEYsJCaCHTQCqBF3CFZcqow785Di",
  "key25": "rZQDWQmDJoWx3NRyGx4V7Uw9ScGXGqULwigTmCUPeesoPGoos3yMYPLvS4RYKWtJiSvQ5wU7fsUENWNkvkpJ1us",
  "key26": "47GPqtiuz2bZCqG17VkLVm4qPkbZGPGK4rNyT7FiT9GsDtT43Ai4u2bPViibtBdTdHBnnooh8xrKskWiwcc9nHWt",
  "key27": "2ygAaRQUE52UAhiXimTmnQy5tXtKUXfDZc32BFeUg3JKe8NLRb8xk7RJaBbpNnCGVgYCgNGJUiM6jamNJPpUj8gx"
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
