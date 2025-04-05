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
    "4vbYW3Vxv7WQazVSoNANSqNNJdtX2KAh8rquBYkns55uebfknJHLQmcMskA7u42a6gvWQQavST25ZaLYenCaSAkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466hdriwbekWhazggPpUP9NDq9LCnDxTcVQ45SMtZyPtaurm75oK7cieYNmM65qypPwFDyqM3Bnn1MuUqSnonWwb",
  "key1": "TWcuoK9WmPTFc4BEutdyu6Fxa8FM9JF4SJ5aLa1BXLy5aFj1n3XADiFX2vpGJMtkA7jbNWgZEMAYgDJ45yzTyEn",
  "key2": "5Wx2nLbDqPU5W42J5qDAMt4dtaVCRZA9UEPHEvaNoopL7pqADLqt6dvR2rdkGiRHQFFysd4tjVagy4Pb2zXwEYvJ",
  "key3": "3avSiy91kaYbDHyEeJ5NQSyq5MytDUDyK3LTsr2LfL4vMeUuaHmFdFqXGgwr1RttNYgBf8xS6rtzJ6Vcyg6CmvxV",
  "key4": "4DcMgtqGHyKqQmB8WeAzMx7WuEoj5RxBpYox96FzeB5zy6h6fp6z4vSaWCaCXfbiiVtABtdAHz1x9eGcDRrJGupP",
  "key5": "33frczr5rYqHeRygvcFFAxZirPdN2ZaTuPURcbuX2bJoey8qE6Do7Am7e9ZqyZURUsC9jEFsmsamzVyUQn2CCEdi",
  "key6": "43ePg4k9Wdka1yzN75Cz7NmXMYRraVVRkuR8L8xjM7NAKFxK5gd4R5kADZh12Ez7ZXhG5ADmjjxjTav6QfcrHvR",
  "key7": "4CbAhxVqgMPRSq8qp7uendc9zgcbEYrxbtAeeA9ocdhu4VhFcdinRjKN9AzBmeWgbheXgTiF6AZxPMnHvusGvRTw",
  "key8": "dh4uAsj8LcLSM94jhAdrKq7W3RLEU3z4Eroez4tJVKY85LJkLXUGVriDe8a6NDWuCLq8n9AuUesiUKmpc3ZQ5Vi",
  "key9": "2DU6FUb9vhdKdimBDCbUMxmc3QzPqYBRW3aXPjBXktSFy96tYpG9AUsPftnNaGqZ7Ui7MA8asQUafshBb1ih6Zg",
  "key10": "2iYdZk4fZz2brTaxzxwF72jn8puLdbvFYX2i4gXL3jZ5Kom5byxuxMVogfKHTpMGG5NAbmnVh3fNWZ5Pz6j5YJSz",
  "key11": "4h7WDqAxKaCgTj43as3G5f29wBZ21ahBYoEmrkqUAoEMLGASb81LA7w5wy4srVS3Lvwbi7odsmy4Sr6R4yF3ViNx",
  "key12": "5LBssYgtDp3pX3jzafFQYejFfTtEVKW4UoT9JoA5bjkVjFgiz5GZpUfrG3qQSGwm1XiqqykugRmkdg5czCrUiZ8G",
  "key13": "5EJKAnnnE2LqVb9P8B5dQ6Ue7ug3kKvuKYD6A7R7NQcnqU4pVtpwgk636nxxqjzeQ7Xb9cU8NJrwiKykCVMrx5y",
  "key14": "Emp3NRqVGokphCy8CuDbC2pK2TXuWTSMcfXLHEn5q3s2k1Yz8nRdbThMtAEnMuWKecK87aXMT4sTHmkr8RCocnD",
  "key15": "fg81S7DqDTDEYYbr5Yy2Y357z9siYbiM6nGCGaSjCcrGm5iLo2qXr4C1U8ab8pJ2wxrGXxuTiRyRBnF1vTdWjLz",
  "key16": "4ppwUM5dSeYEoy7BAGrKVb6UWrZdAo114EnVdpqZLaPipJbZ8nZuFbHCo2r8KYEngD4gr956xFH9tJMPAmXYmoYv",
  "key17": "RQVMg944ddFSRbfQDTS3sX4ykytA1Z9T2iLd4Mr8uzM7d7ym7hYJFffSMW85CU7UJFkEqghQFXmuRaivFHy6bL2",
  "key18": "MzcHBZRF5JRaj4K1TJBazSj6BiB9KdWNFhikM3LaNHqshg9Bna5CeX9wQjF5mhqsDEn619ym7BAsA86gEJBvs4c",
  "key19": "29iXFquQe5VtV3J7BN7KF3q7GvGbqrrKqt6qNUeXfwQBwS2iCZaLeswrYN9tHuuv5nb49w9NqYT5PLKzCAsgCUsr",
  "key20": "4Sarw9ktM5wUCWzHEdcC7ERGBei3czokbm4Z4NiZw86Nj3wRLrEHBEtVAw4LLWUEmtkwSXzQufFEAqAx7oEuWLqo",
  "key21": "55opHYEgwMNYAKE1Dbo5iDQK8Do21Wdq9jPo8EhEnsQkgYY23KuoQfBJoR5oxGp3imPufJJGxyfPNzohWU5b5ikz",
  "key22": "2tj72A9tqFMwML5DqyfuYvNedUJpU81CnwE9qoWj5hXHLcT3xW1VjdUJzg7GEmKZijp8W6uDk3Q15bv2beSsrCun",
  "key23": "3pyFeujAZWkP2VEoEKvmy95LnXntm8i3FSnRowMxvBKLT24wiuuGWm2bY1eHegXgASwKr8imfKCf5MWjVYMgBacU",
  "key24": "53UPfk1W7tuf3hKaZdJM9JAtNaE4nNZymUkyeMy2i948qCXivTntokLWLeYxQ2fsmwVBmEiNZ2tnuZz3f9cuBgSv",
  "key25": "5qqNcB6wj4Pchj3kwQaK1kN2vhTXsYKg4ZJGV9KwTYg6cGfAApHc19Ta3Xs6mc1LcVdJ4zrUxz2KiMW292JH6CFe"
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
