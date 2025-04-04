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
    "31i7HnRDBnucU5oe8FRb3VPcfC8uLxqLUxtn1ktFqd1WZgC93m9LjfcBDuqrpy7DmQ5NzA2nUtEFgn6SrgTRr8VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEZKgAr7RrjCHKEgasfu4NyBotH2LsqDftvdzfBX6612UVL4Pz7WMJJQrjXCW59x4h7iMSmppGJFrmCM1U7FKm1",
  "key1": "kNQwg58KLYJyCG3PbG3zE7CBtrTj1MsGAgoGGhq6usKvYC3LBPK7HLUjTRMcm6Kqxo69k4Qu9WVEGoMDQLSieLj",
  "key2": "679TsYviTNLzYabjCj1Jgbmnxn1EvNphKdmJTgvYJYDgRKrVoY3DC6MMrzNK9LsZqc1zuubwj1KqimZiajzhxXLj",
  "key3": "5g5uwiuA74WZGqyWChP5uGjTcW85C3ZbZEmjt7yRRWwKX5u7UHv9dig1J2FyczjCLpLJyBkiDtbycuvuAE6DprT",
  "key4": "5H5r21aLrVoi444a3VWCb4DWDtCR9wwAWSA6yq3wtx6kNocFc3YCdHPMnP6f6injRAJjwYdeyGjHGLiumTVM5rjy",
  "key5": "5pjJgF7qpadP8geHTkG8xaTvxsb3kX6ek6Ca5E64rn23zWN1tzCkoskLeKUjxGQyu4gKapjDt4zBukZq8XnjQqXX",
  "key6": "2aKZ67AUeavoBgBLUpF3aNG9zLMDoTgiXPsbMiqTHtMuEVvrCuDaGDiFrf7vJuojL7Vx8YonJx6J2r5VdLJA2Jkd",
  "key7": "mAUDHUFMZMRQaJq96LSPyfWn9LqH5opcp1hDbRAZ1jMfubXfsJb9NYPssgkdVNufZPYZGYZY7M3GoAnfNqTckhc",
  "key8": "5BGfsHfiiZ6jzvL2etpjFvTmENFEV4JBjFbDJFmCzv15sZguD6PGSMayjkLoqSa29CDxvLnLM3L7tSiUkYKTg8bb",
  "key9": "5xn5EaKyMLozCf2cbJigjTNz4idMbcYKfwJXLMy8ao7SGNkEYbBLRo8ACxTF376KBzMkdtdo2KDqm5VCRBF6AHgX",
  "key10": "5xAZqwEpmpw3keYXeG7aukeAfsKjKgKem4ZEMqhqu38eRjNvCxDWqim71dxDKX2L1bqNU7W6ZNHUmM6ejYSJx2XA",
  "key11": "Zk5zwhRfbiiHz8Wq9yabxDNz2eHQWhFeuriBy6urVx8N4Db8x9TaKfKvf6cKyHmWy9QrGEE4GgsuYy1TJHBkskL",
  "key12": "3kq1qfe3nr4npefjBmJDFLS7H45rNANFS34Yh5Hj7MHZWV5ALB4XYHbyDaR7wMJmr44JbpvWitLmjgpESamPbvHN",
  "key13": "2BsCnqcXXdJKHRKgAgywvUy72JeufTUs9dDLhTB4xjpi9mWCCMuCto8GPYMfejJg4KNKCmHY2Cc6h84ByeT1ezgW",
  "key14": "5iPqPtRGc7xaN1SzHcSQrCVLPc6j4Uf3amP6Q8KX7ymn3fjgKmZJVXp74CNDHTFS6Tz87yFzYbQ1ca5dqRf9fyWj",
  "key15": "5jctyUdyWU6ZD3YtafQZjS1cDG2hnzFPeQowCcgBKgLfP9kRM2CRGLrkrSnH1Yi4pKAtTQyCPnfaZAC4gttZQ8jY",
  "key16": "JHPJLNGksTbeMdyaUtronRjJ5YR8w7vH7vBsVS6P6hpkrB1d95izTp5XvC9iS2DrnAuLPBAAZtCn1M33FASo4rh",
  "key17": "3kUi1uxh9H7XxPKyhZA3iqn9Vg4KYmTzjzi77Z8LXtfcVa2Ck2vRYyM8HX6XMs1gxMMXeDge8iMwJUtcsyCK2aX5",
  "key18": "2yunymfL4SSCafD9dTZACjRpGTENPEp8vnsbCxstsQoeM4CEzjEgJCeQyokXTnFSBWwHNmZAGF5ad8i76Vjmn5HP",
  "key19": "A41zsKp3kzBugcc8HgM68Gcext6MWhwGmuT8Rs8BoycnrF9N9aypEFaJNrZzrUHw9k5CMzKbHJG7PKLtUgKBftk",
  "key20": "4nHsLWmE3yLUouBSoPEwYxRsVVMZRSrnQH8NxP4frdg33sYEMXmJdaRtZVzzniTQ73m2bCpM7spxi1RaUkXMKCRa",
  "key21": "5izDYLpYQYBRyTN9YDvoB3grgvyTzDxLg28x9MGs9viu277zQ3MkVsxWsVQB4BVHK3Uh3U654QAkrjKWZ9D9odu9",
  "key22": "2ChAzLqDW9XKX3bvBQ2bw7Xii1mP3csovmiwiweuxgnc6b5TRjz5kBS71sTy8zck83YZuJqMqq4rig1vRW1u2Aon",
  "key23": "SiXiJAF53yitJMimK8gb9fMsA9XaJSikYPEbFk4gcWNvmi8jpTYyNqL1QQMxNRzGEvuAbSAUBtHaev2EoWkUEca",
  "key24": "54ZtDjfzt6aEFS83VvwmuWSHCZwxziWcKjyDtxXy7bmSd1xvELurDbjvDJvZxSLGJMZFg2EWnqqZMjqxeoNKcWax",
  "key25": "2U2ZkyS1tXsx7bHaF8TVSzJvFZxRCBV6Y7NWg3WevyvFqXedzU6FjWwvw8fJAN68RRBgqGfGcSysuA1iFp7nuqJm",
  "key26": "3CTGh5ERMCMck3sQtuTvMweJb3iT9B4YumMPDJT95knQyPy6Rjz7y4M4Y1NiS6Ls8athjvYza66n9aKUvAC4Ro5q",
  "key27": "2tBEv4f7W2SbU741f34c88Q7VndmnS1i8535nm5LfLVuM4hAskjjavF8Bs7mBNvq2UkF8LuSBLZMbCTXvbGhpjmZ",
  "key28": "4xuv2k2EpacUnUbY4XQzrSi1ZrdbSBKC8FqGrwkc2mfY9vUkQHZ5sSuobUA4NBmmR9fSZMEJLHi6YsCQyCvf1ty5",
  "key29": "QhS7WCMkCPXGq2vSuMHg8f7HMT5q6ucAZynyQkkwHaB93CQFCu271aTmoHMUevL7Z4ab2MWHeXMi8PKbh8SY9kF",
  "key30": "3kaYcRMMLaEhns8pa84Sd1WeXnehvyHggWvX4nGKK84VAompWE1gMr1dXyNo35ve9z7DQkApy5UQgPLQ8dwuv4eN",
  "key31": "2JfwUsx2cvAd9dkwtnd7fJXGgKncsdzzuA5Qopcc9tgUjwAXWMgfrh8sRHwtTv2KppQVFNC9jPvW7j4Duug53HPF",
  "key32": "3BZJdPXcLG2M9hfDaQt8VWKVDGdeaZvhGYrtdRwqYFw2wPst2FrgE77qZGCbg39yeHqJR7wwc81N83jPUNjATVNx",
  "key33": "43GqgyzVTfJgvvLbjQJFSG2yxrvcqtmee3Bi4eegPp1PQ6DaiiwSeCsv7og1xBfc7WjZh19CaGES6WUNGRGUvnyP",
  "key34": "4nHAvbsLEhQMDr3rqvRDBor91pv6qYtykg2drKtWK8gNGdx29SW9YyHQtErX5vuaxWYjZzVhPEssUAr2atbociq4",
  "key35": "5vbpJPetNYwEKwbvrx5cpe8LcxwF3r1Z52AchDACX4c4WhbZk2mK5vAvjLzP5FhmZS9qztbF9vYFVB8nKgrMgRK6"
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
