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
    "2EVbq7WwwQFRNvjax8tjPs7j6K6CCogWmFrftuub6ufmpANRipMDnQaxPFeKAY4n9xXxyujCLiZdMmHeL4xMnaYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qb5bhrWfT9hY2f7QKs8BEZDSxAzQo7GcJxSFBmmf53rFHVvVV5KJryZqnwrXWPsopLh4C7a2sLQ2uoxBGu8hrV8",
  "key1": "422U2n16kaKs1pwRmHMVvnYR3MHgvHtGNBHKZJqp4VSiCeNquMxECCzvR2MYeGX7oHEXw2FvkCsNhsw3yhomXena",
  "key2": "62QNZRQsxKHJTX7nELjTCKN9WFBmriDY7Q71GydraAv7sa9yYtykZzhve7zfK75SnwtG8XzubwBZhN4hGU7cum1z",
  "key3": "4iDZaeXFRfXeEDeX7Ymvyhvb7CsCEBB3kbAjgYExVbh1BhsuwNyNfe91s4o5sfTej8xRATEUjoGmE6MRnxqQ2LbA",
  "key4": "5GREVxcDUUHxcCEx2M1g211PwsuUdqf94uXU6SEuTSpaK7siJnNQQPAyVfU37UvFnUpooMrsEfP6nYQZ3kYwPCKM",
  "key5": "3vjeVUD9BcvVyF5q81qeHsB3q7U9fYBLE46wTgeKrRJTZx6vWiLH2SM2fFwC5WTQQ7wMJKcVyAiijG748ji3Bquc",
  "key6": "4bgAZJZKhfZV5ZHBkKXB5iBHjgDemJXWgDrJcywwHQoiViLcNo2KqAyP1cuho1CSctCLRPHPwcWyWATvGUm19B2L",
  "key7": "3UcArFpMxYb4C4XGn76h6fxw5kzwS3C3fUuUaUGDVNzyfWSX1iHPrAvuVMkymyEAoXL7bQ4s6bHWGPCvZqe2t9Ry",
  "key8": "Dg9dV3gzea9dFwcszuGb1pqt75eJ8bJPrKyriv6La6CXJWBdUCUdwv4WZzdFMfnCx3tzVSqNLPLoi2Zd4dchmgQ",
  "key9": "2aZMcoe6apTNMjAzDSdjHiAjHS7GiF9G4GQvU9jmfMLmZUxsvtrwC7GGmBTHNegDzMdeQUBzFUeH9nTiZABXbq3g",
  "key10": "5E6A8P1D3vYTwgZpJngAKCtTfDwwWNYuhL3w1d89NVQiJRRH6CZYbWpdwteUD9fECzDWGm7hW5JaTaivHpV2EqE",
  "key11": "5QMShXSVUFWF2XWPAcyj2dUyHGudnqZ3jM5gFyucnarJqoFjF9JaQz7hghiy9exGgfrfWDwxJL5bjESe1isBKxMF",
  "key12": "6656fPwaASDgyVFjJ6dpxJm9tw4Up5VXSNQ3SEX54qcYEifmDdKBRVpttjwyDfp4RNZKAWUahRGAJEEc1PWghU4C",
  "key13": "5RUVvKVm2pM5CkTMwowwz5BEmHcoVRWp7VsCu9mbVzctL3vBR2Znd65arGYbet75RsLhS8MynV99RzBRGpEGAr4f",
  "key14": "4Np8xyd4x3kkkxv9BpcLuGQKBvphcE7Fs5D9GwXXw1CU5zWCrbwmqetd8a4G7mKXPCJdDraHnmq2q6NZsdCkF7wD",
  "key15": "49N3dfzKEvzbz8Bt6P7Q7phcGUPRG3KEiViLcvoYfP6PGofaZYCwy9MWfzXHwC4VP394M3vtRViwefJoRdG7xCKU",
  "key16": "2F7MLU42vgUdAnsh5Q8JSs1oDS2SidBmFBd6LZRDe4b6nW6dVKZmfLAY9N44HXdCHGnSCeugMwPG3D5c5aMxL9gq",
  "key17": "62SWTKn2ac6f3ZgQPMDqAjB48A2ixqBmRD4GZbcB9JzsgosWRKjYwrEcgj5C1iEySnmvnDRUv95t35B7BEhuExEJ",
  "key18": "3ifMaqzzrMFKVvvEYyf5scx61ibJKFSsxwcwADLuyUfebgjBaMw3CZcPoa3mnJTzGrkb6Kjgt5hZDGx4jWJMVbwg",
  "key19": "38GLoK8paq8rhLkFNiAWrKnjyjfAc9J5HUtPtntmDjtfARBDDzHz757Jueq5QVnD6DFf3mvznDULnr2FbJaC9Xgj",
  "key20": "QzFmVwMqAGZWpx4pdMoXB2AaqB84g7PGnpw8oBmQMSwqtYqAhMdsJsquANpbtErWdGEBF9Ld7swZRYtaEDNbDfz",
  "key21": "2eMnbwabbQSWAmaoavPvVyEFRChhyTUcwE6kxRRwVwWosnNdkiqUWWQHSHzrWHPneS2BuYCtD1EZ9LDU3HJhUatn",
  "key22": "5G2NrBuMEG63ni5SnmHTSqZzz773HWPabakmBeEAR2JfLBNxd6FnHKdiEKiv3erozV2tVk95fMHZ9sAg7xCF1DJe",
  "key23": "4tT8DC8xuKctdURzRXqFqcP3XHEkdRrsZ3395eHqngYEntg6t32cc7v9vRfdcMXSbf1SfhW99uCbwb6bjii3j8yX",
  "key24": "2QJHw6icygaNXLNCDDZd4w7nnr5JfuMAZUqMC7igPf5QPn2vjG2aD1qYKDJYACVrKiHTp6DkQdsuNNjiWp3EE6hn",
  "key25": "3V3M64VBWaNpbVzkYxJ2TVaaq52s1PZ7Gmt2zRsHfSRDWfezXauFpyDoDVKMHHZnRirj4JhcdreqVjCbUiknNQ87",
  "key26": "5a1yVRdRt9XDsquE3mb6t9gUtn596xKxqnzUoncdV9yWiqEGrWrAYeFugwpSKnSZ5kN2eXAtNrLrpJ58tdpefvMF",
  "key27": "LfN8zG68MGLuEo6NaKC2kQZKzcUvCVUBBeH967tmcr9E3kEsxK97w8KfYRrzg5izBQgjYuF3uKXeZb66xyKPGF1",
  "key28": "22njFCM78qphuWrXLnpeYzfDY7MaW9sGaQ2vmCFAmpNjZ5mWmmwen5jWMmGEaZtP4YQMT3HPdpeUtMsATfw1sPh6",
  "key29": "4ecMddPHAHKBHwaUMjXYx8HEaqw6rw8UsqN4KcLJRPYjzCnZzSJSxBhg15iySaTR9DiKbw6L1afWAvRrsyhsmJUD",
  "key30": "2rq7fQWMg8zrFtmruWRMmiH1s3qNTUCscKJcREePPBT58xicG7REp9WYF6FZKdgbXNzsVqAjBD8Awg8m5iMVxhUJ",
  "key31": "ZrSmgZM1XccoxqDNLuuzxoE8FyNvGW8SkkRH7gpJQXmzjSjZ9fR4ZGmwoZ7mJgKToCBoqKcRvmpt5iCzNzB6XvW",
  "key32": "4VxzsQfCKPGEnJmRpMRsjHpyoWw9xvRVLnwyKmToU8wzmGmbXejz4CMreB6LqnYtDroMHbj8FbyD6VR3mvcGtjRr",
  "key33": "2ec6jz4AjRzGnM6QKXtbP1KPSQqdbzftcNTKuX8fxBHHGkieEyEnrcpnzPTqN8uk39wSerheNmx4eHX5ta16Avkm",
  "key34": "3dSbpMSoFxnN8Zv76UKVyybrXCMuZoNGFFZp2s4Sfkk8radPvkBP7UJa3LLMmMfrbGc8R9QS2JM65NbPzZs8nfUC",
  "key35": "2T11dCu3yo1q6v9nSJ6yCDQTzd9UsLQ6bPkWQBDAnD5pNjZyvE6cj2JmF5DYTopB113iKupz19tsRoWQXnSZJMhV",
  "key36": "eWXCZbSK3LAbUzwWnUhqo71BypYcj8ijkbJyHc4dZveFjxbMuPLh23GzTiYRG3RbR9pXMr1224m2cQ9xGVw4y2U",
  "key37": "5Az5L6c23usAzxhMPvbJ2dRDBqh3EdxSesjDhKTs3sQcSfyQUce82RgUtK3YPA5bM9eCkkNqWfNSCSVZkmccAfaq",
  "key38": "2n4HMp5SKEMLE7XqNKwUsMEtvuvamTQeGFNpJVtFxms2KK2dQ2quWTUHVU9hFRGK4rZ7CorPjbM7GTCFVqKsgTDs",
  "key39": "59AEQ4S6neKiqFcC1Apn5fC36VFpXiTTzatLhS5MUCYszkQuKcBjnAnu1fTyDwGvpjkmcJbc3VEU3pEJumJdP2XC",
  "key40": "EySJi2ab5YG16Aa9vaJSWAULSdgHXb6h8DCbtVfwk5rZSrnNf5DDs5DN4NghTMAmLebpJFFC259udNN9z8pzpr2"
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
