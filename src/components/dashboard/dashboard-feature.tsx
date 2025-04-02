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
    "3Rt3WSRdhPJRDwG6RbW8u3nUdESSWW7KNvHwr5uk5QgVjtHRR2fy9psYQxkvewWF5YUavd9yUtyBoEPxmsuJZYPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8vCpQLhhfY7GWBXai3H16Yeny1QEJRgkr5d5hsBFLKucq1xoxwzjJ1Yxpa3cut8YdeDFuZZZFZ8iF7AipXbY9y",
  "key1": "2CU77U3kyUhVZo3cqwBx1RRzj6HST9E8Ur16E1zK5ykdwcTk1RzVZzSFgyA8bqjWuj3B1paYRS8NgBjR2rDDvPM9",
  "key2": "9tLb8HGE3jj6BheG3QdeFnj1Wkx7xSPnjBi9TXzz29yf5xAqKSgXxDtZN9KCagfyESHsEDiAdZYC6PWk4BzKuWu",
  "key3": "5gb7uNyz4HHKKC1WEXQQYknFfBknkVYpk7zTqXsZCxA61T8UfSLjzavwMXBS8BWEHh4M2SJU1zJT42pSfWTy4HSs",
  "key4": "2gRNBFGwvNXGj57ip21gprWhomGUBL65bGNoVxGSNBnkFUtuSkjZMs2HoobGRbxHq89nxKW9wmhgEBJp2jtENgwi",
  "key5": "4VQwev7LUyrc3BXKArXDxpWxkDVx9vWT3cxZvZoJ7SdVtQ7P3hRbdygbEGFygzE56gcoCs64dGNJegpMbfu3mQv9",
  "key6": "2bdyQrPsqmvCRn3WKPHoZuGLaCNMy6WSbskVzpoH3LVoNcwAsr3749eWTdWtz15Nq7RsnFDBBEJgwEZD1CHRVFaN",
  "key7": "61areWQShrZsrFC61pqdBb7iZJBcdXysTqcWTYNUwDJZHFrU6eRyoYehBGzQkpUSiYdH8CQVgSwFHEyKb7vLghLD",
  "key8": "RcRa1oxc8UK26ySxoXScyGmT27TyGrQwpsA7iegWjM1TBpMcYp34t7wAZQN2xfBCCzeSQE1XUvvvuKExmewvsY8",
  "key9": "3mrT5sW2jVStPmecUKZFqbkxwy1nMVGuPVs8kzwTev9FiLCdw3cigP6QcZ3jPrABeGWbbZcBEMoCV89vmeniS1ui",
  "key10": "5XPhcvshw35gqJvi9FFsKbcunjzuarRatydadZqFWiytUaMbpWjmaF8fb8aofwyuZpfraV4bAifYUJizJXs4mk9A",
  "key11": "64jKCcrevqDTaFpeMfoopUMwDdAjJx3fPAKy4L3wNr8HpcpfvPiCvSCxSMt9QSR9g7K1wHPh2PTYa4f4QzxaiSkJ",
  "key12": "27fpEEqTprt9asFHJfWaL7TrZkymJoRJ2mYneibQ8JDJrtktaYruBkfL8RciWj6GMGRECpNTUSpVuc3Q1uoWkbYg",
  "key13": "5B6q7PZ5BdAdFV44ubhdmBj4TAizTH4cyBZYTwsEcArtCnhiQ8xUrxghxseeu3aLaykD1mTKhtxvFA8yqGZoGFdd",
  "key14": "3VtnK91b8wKEskggPDG7PheNi9vD5HudiSP36Fp9jFcjpaWR29rokYjVxNdyBwSmmZQG3oF4ZqYvX2WwDJZiva2H",
  "key15": "3tkrFhDEkLhKaPih4tpxrE4L3xvXa3TnLogG8XGru4iFqDRzLJjnEmVkD56N8wuND1a2NVsB1uHo1cAMeePeMi7A",
  "key16": "gG7tkhwFats2ztSqaXYwEveJoG3H6Jp9CDrp3pkj5CZ1qEH5od6nxk7tpBx2hWXDNJyBvFUd4qyjKpL3gZip4gy",
  "key17": "2Pfs5jsRWG78FqpTsT5ntwdTFL8WEmsut53sh2wyg6M8zyo2ubwC5hrZuU5J8GVish72XSnrakGWoWP3XHbCvqqL",
  "key18": "2uqy5n3DdmzAAJdZJntDdxrDwxbNJzvmafzrxRxydsmPz2sWZrWgE8kwdDdD4Tj6T8AvsLLGQV7RuKvCLq3yTcR6",
  "key19": "2LdrqP1Ps7ZrJvXsVSuymSRdEDMehcr2VAMoc8UXNhZKmV9XkryaPAu1CaR3ZwYks6fKAk3WPUHscicTjFzkMrUP",
  "key20": "8KA7JJ94B1aKYdeffVRLb7RsLQ9zpbZY8mc5wryJ3E3L368zKbV6RhUm2kjhd9VpiAg1p2yqTsJ4HknzBmnwTyi",
  "key21": "ZkayPgb8aQ2fbp9W4p2JFXAmWWJ7sdhLdUZ8VSi8vMhz3RFpa7cMkfxgaq29Jx9hWyk5jv2vuwT1J7xuHDvYG9v",
  "key22": "5Ln2xLbZxgrTTPvBAtiZnrChyN1LdAwWC77pBMoyv74daxU4p8z4x5YR9rDKZjtK1neWWmHDsEMaDiF8ci3nQF5C",
  "key23": "5MdcTG7kUMDkmuBz4XYFPHuGRjRZZKj7WSsJ5fNWSxYeYAHYerKEjaQ4m9corrX2TGyohpHeneMueC8fG8J4cfhj",
  "key24": "5S5wqTNhmkiFMk2bVR1TNEw9tYzWzM7Jujhm3P3TwLPcssGBjJp3qqQAR6xZ2MWxGqkNVzyjBFAS3biX2c41Mcme"
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
