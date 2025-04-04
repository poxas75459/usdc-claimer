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
    "xL855vH8BJMbJwKTahFv1jr8UY9RJoDEUGjuouK7LaeUavFWcx2kURLH2qC3QHcTVfpkLsdSoFHTjMf7H28DVEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ageawE4thTh85ofrzMmT3CGqVGYTpC6v7zTwNBQBxDRgsJvQ9qd9DyZ3UpAcQStrQsugaSHsoiwD364XxpBn1AB",
  "key1": "GvZ1qWgXH74mXeYKJBs6DjpYwjMRHeGX8X6mVhmazvAamtstn1dNVxvTq1ucF83ZJm4d3atnqfaLxYF9F379Nbp",
  "key2": "3Jx9AEK6mZrhMRWpumRP7Vfq4EajgvVXwBtTKpHnjd8Cpw8UGbz386udVWU4FmYcKaf2bEzTV3wZkzoqNJtW3N3v",
  "key3": "3wP5Nj72ogzFf4qWCadbkeLuBvQNCTNG4G5rrX6A7qwXjeEeFExxGRnhwUDwvedBkixvjektriL7UMDn8YRkPdVL",
  "key4": "oVUxD75iei7DeyGTt2sJy6kWY9ZdW4Hq6BTpKM4noQCUbKsMXPFjAprL5yKexEXZQVW1Qq65Ax1xXkxSCH3KF3u",
  "key5": "XRxNHJMZk996F3JPA1xkkxqBKGvPw1uMoJkgnfsYSRhVct8mhmjtChKdkMFhZ7rMbixAiYi3w2PHVm8WwcZ7pqV",
  "key6": "5nhVTCxPyUcnEysVQ549AiKpSUqq1tv8kJeeszYeTLxtk3Fe8cJEpXXGqLUbcRJoqS5513D681gQgSzGvDd5weWz",
  "key7": "2zVBYR1PJ1dWtxBWJfeFtTA2bDCo1yPvtMhXf7yduQ6UYNXguSov4cGc2KpThSyqBr58qQ7zX23LfoFoH8LdJ5mB",
  "key8": "3UnZZB87KjUsvJwUKiYNF3YMGsp3aGpXqQfBWpWysb9K5bkLsHR8ARGYgfqReN66JcAvfGXqQdSBxQC5MVQZ4v1R",
  "key9": "W4iGcatyxyy6W8buZp9zYMWVGSyCMTnZUmiVKt973rmtGPnteN4UdT2Y3Sj5Dsh7KxCvhwANoytnTj7f78Gwniq",
  "key10": "2SY9hembRdaB33tP8tB9N161NJUJ8ReUy4vadnDs5vQ5keUL7VM4hN42KicetgMPEwgib59QA72TMtCjZe1CPFrW",
  "key11": "55PUb1pX1gZFgTDb1Lj42uWGqMa4cZUddUDhPWSq3gtmLmUiNazHFGeyymwNm2MPBU6DEW5oPwPx5RsF1M8sbzmB",
  "key12": "2hPqp8aaDHkapbMxzraUj8GrGqzUCfaWQKynudhsEbdjxxwngziqg7pZF3evputuZEm6BZWkaW5gPQgwb3Fuk9Ds",
  "key13": "2HTNtCnxQfhj98forXuyf8KnUTeX9fXkiYi8c25ABHbJmMc3vg6qZGyX5orEXfYPGgbeARqAiVm4x2UQjnbxAqiH",
  "key14": "NJkczjMZoxAmWr1jEpciLxsUww28V3QUX7pj3QufzsAmPqkE4USFCgkiPVej5um5ba9xExkeKjFbfhYvVKD9tiv",
  "key15": "2TPXy1wcB5MvF2kNGXSfgphi5eQ8S1VswFzwVAgwqFURqh3DfLZ7BDyCRJkmTJhnWNhEXYFqreUYyfSa6irBaGoy",
  "key16": "48LavvVvC6WJf1NFC2uJSaHV3rKHZXS7v7dZ5JRRU9TmCMdyVDJ8SmcbE2JZ4ktkTgRd8T3kncW8qXLoxUDWCkRg",
  "key17": "3Pwbc5f7pQhinkWRaathXpFLHud6aD6Wx6F1Mqhzb5a14NVF2uo9D1Vs3GZVdKHbiUj2r37X5zEK5mk2GruGqgoD",
  "key18": "4oMpKfghWGo7M57C2jASmhZPyLYEk4veLzxdzQdhfPXAJNd8P3ejQC2NFmW7EA9GvCV9aSV6i777TMMnDGgDALAZ",
  "key19": "aPWsrLRthHNKyXqEHyhL6asKUEzdBeuLDWcCrzKZzaANdxq8zP5Rotbt7mg51sFEALMaz6QmPEKFmgqZpny3utP",
  "key20": "5WAxq3RDXWsK8U9mdSHhx294hWRR1BeUkwwtWejhum9mXcgdEpbkdBcpzBRxXRMZG5dLAiMnJW1FKiZQDPKx2aZs",
  "key21": "3wGLMPKCn34mQN2KgddYPB8MFLauseV7PQQko2gEexaJHEZESDDZzsASScvqS79g7hbXidDL3fUiN9oVs8cDjFPw",
  "key22": "45nMpk8r8PWRTQAyFX9a4tLFsQ4aLHsLKHirXZx1ToAsGpXu5tq31eJhZSqXipHk6Ybk5CsoS3K3E2ykyfSxw5KF",
  "key23": "2Zkc8xJuxHfXPi9TxT5puocbuwC8XcWigRbTWa5cmbaP3UoWbGZFTKQppSk3UBC4BmpgvP3ECZ4HPhxnDxRkF4kX",
  "key24": "4xyXGRGXxB3fBQp4QhKSzpspqk1yq3xtYL24qLR4b6yUMTkcroH5LZiWq54QALmyBBa42r7K5RpimbEVPmU9PyuJ",
  "key25": "3jiEbLsewtTPX6pp5JQCbDiSCHDFM3kCBRyQYEDiuCuCkXxRCArbX9dQHFNM5A986R3LCLPdjD32tHgTr1Avrgsq",
  "key26": "3MXtb7tR2UJHwW5NnfhpygcF9AZmz9QYxwvRzM6AjdoDYendc5m5RpNkeDjdWwQUMTsGZSiEYCaAcrVhbkJE6dnm",
  "key27": "5ZCBXNzqzrtW2MxrDY1Z7431U7ZbmNVnzZpjzPk8ZFkJYEAU8914hKt9sZVNqxT9y7RY9Nu6FvBnCBydV8ccSnC8",
  "key28": "24eTVVDFuB69oDxspULqwkujpBSYgz567ST55FjA8DvaQCUwPkJvFfELz3qAtEpWkQjVM39eT9VWhCA8P1YnE9tb",
  "key29": "ArpYXJu7zGKSyS7v5K9tmcDBLnBbR1YhEcK2Wc18GqnBrrUQR9VSPxun5R3AjsQbCraGcedQzfD39eu5F16kCc8",
  "key30": "HnTmX1cJD9Y2QygZCxddBmvpadLFs4AqXBWXjbqYvbCBnxE3krfkJxMj3bZYfx9PfRqSL2EzhdNvraBfhUwS2H6",
  "key31": "MwWEusZDkdG4XEqGLeXUhChnsyCbLgwdmQEcSDadUVG893SxaGGZVGoLuyNfHEKQMP9C8YkELgsuXRxFY13ch73",
  "key32": "5KaLx7ZaQguX1CLtn6nYM6VCctbKMHLNEdct3NwEHGZT18yDoA3ucUTx1v1K1ZW4LzUJLqQNwMhjriqHCCCH7FeG",
  "key33": "549eUEDsEw3sjjhpjE5xx674BrHnA8R2Coe2xs5CtzG1tguw5sPxDf8X3xSJZEFh8SiERcVpLGUTGFmJjsBRT434",
  "key34": "5fFZigAs8d8waAcdphCpNGkGHJ9cJQX48AY3Mv8FwBTrfnnx9jJb8wsTUw99Gx7p6XUEbTAToxFLqz1n4FEf1aPq"
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
