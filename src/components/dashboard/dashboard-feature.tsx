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
    "4cN2LABRkLCr9ZhS34CL2H1z8ak7yQ8ZCRukwq5Rhg7mXdHUpKqtEPEn9e8YqrFnqRhPxvhWz82ddHdBFxjHuj68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCuym3GL7LE7gzLS43UHeYqBdKDcQDtSSubaqusLzbaRhFXk5XFRZmicCjyh3nubLLJKWpjvr7gSHdQMSmhKtFe",
  "key1": "3LUeo64KxkrToRLo7S7Laj9ex7HcVy6Hcpy91uV7kZJXBzW7EMusvZvwUSnHRe53npuM2W7vMtKYzbW8gc7BXexn",
  "key2": "qp1hZ8Q12sMSgmd99iKfvUG9p9nattnUqDNQu3HVMhY5A4qEafgaRamFS77LmQpR3JyWEscfZFZQqJ3xvRXT8Ta",
  "key3": "4MKUEgrssUJw6hyagXFWfaj2oJEsTNqKTQGnGtURwjygzzsHDJeXsXjaM42qaXNyeWRbVgMPcGDyY69rdQ9jMfaW",
  "key4": "Q6kdPLCPHFTCq6TBpeg4jpDp6FSRw4TRf5WeBaFmUwj3PtUX68j19cj3KSwwbfyyUsYeYq6d7ionuSvuYPHDtUR",
  "key5": "5rmfNJs8hFiuQBuWnTGFCxfN64aJqQhwx1u14Ko1AUDQHfyyim2oYRxBj6RqFQS4fhzjutHdBmeF1DiaM4VWYciF",
  "key6": "4pgZwVAgmUkArdzhwEXj9KD5rho5u3VezV7AusZQBDu3bWVWiWnXJxeWWa9xNWxAwfaFk4rQvULpTBphrfy2fucC",
  "key7": "2ZNVamkztkypGgjSqK9AvaWp1fn13a3xVDZ7sZhmhjggk8CkeqJCBpf5nJPHDTzFKTXNZHdNWa6TYmeCxtm2HLvB",
  "key8": "2qV7G2GNsohjx7xsztpi9EwK5GhJGSLXHnJGyPauvcJpNiBPw8yGdmx8Lsje6yvpS49fTfgsLwJqQLuCEvcUNtHH",
  "key9": "isFE9E277X4sxTeSsAL8gDosKRd1qyPcDtyyj5mNqycMo7K8W2T4DddYUfCtpybsFxdTFHs4VmGpqNQ1efDTUiY",
  "key10": "3ZinKGCEFTyNheT5nbNd2Ws2NF8ANXsHj1gn9VwCkRxkzEaubn94S7EffWqJ3MSPxyxZ22GfVSBSXxSD4SiGRbA3",
  "key11": "JR9n6QLwXYJgz3oBQZh65SQ2YDgmZJ7fEmWykpjs7ZL8J9ztUqRKQAM5wmrpEjU58KVtMjtEpAUzugj2dyNT9v8",
  "key12": "2aJwBpbu79H2MiHKiDsi7yiTKcE3rJ8rZt3MqYF3A4AJbyf8DcXjuBqoKNNwTqJYbCcWn5hg7h4DbLgftKPGFGxH",
  "key13": "f5x2QLxk5Wv4Pc82v7fZq7zFm3xwsWh4ogbDRFoZdCSdv5x4wNZsJpPfBRBQCaRLDL3F8BFVnEMaBJ2hXdZM7Db",
  "key14": "zFuceBJAaZxGm2RistXqeaABojYhkGP9DBD1pKjbnKwt871AGgULjkQHE61rnRFGf3Cs1FBpybetpSLGVyxBbBj",
  "key15": "2YAsdCKXn9S3UVFbRufQufsUkhRWRMWBjUvHd2JSvvK3dxXCsLvjo43kwa4TZLccShH9go4vta6SGbTEawHk1BSC",
  "key16": "2Wk3yJGJaf28KpZkVzAsAJ1CzGL2P6L3UyxP7bxHqRDyoNQTVTngG3owEhrSp9o71zrnAV51SSFpbaVFGWomHiRs",
  "key17": "5P56FVVTAhe7dAQ7yH74LbexGa81aWJiWpWvk3CHN1yRGfBPFrTBF9isdmG4cnHcjTuR7ADxmEHzQ6xxKirrdKeN",
  "key18": "5xVHE3mS5GJbqYyCmWTmMFMA4mUj7iNjYjnrTFWWGgRWmwdibGrZ1SdnXqMscoDdboJzEhsWHiph2v5TDS3iHqba",
  "key19": "e8DnoGqisgPC8rNhbA9BFx8uLA4jz6YYzMnjhtioJThyKmHeVCLSuwUzqZNqLxuJHFWvs5a5JsGHXNCWozJm7zb",
  "key20": "4qHvFoz2hu4uNrK7cmnaTqekyHgczeeKsch8vJ2yNZ5E9x1PpsYq8BRoiaY2QJRbek2H8UdGU78UD8Z51kUWE1wX",
  "key21": "4XstWB8ygJBqnfTGntTj7uHZPvF6LhXnMrZdH3DfNLQruK89MVEA1sSfs7g3ajd9zG3mftd6zBoEMetyXwF1bxVc",
  "key22": "3Jqv9DNaG2gcHosgEJPCczmp8XzARbmD7JRbRqJwsf1gDZcDkJ5m1GuQnWsEMJf7rrHrYmdszya24Su3SVrSBnnN",
  "key23": "3c9YDLkCJQL8VRfiuy9LdV7JHAXWcVzztw2EYME1V6Ptpnx6D3LSTbiNMrhKKDkoTrEbz3yQfLLXLGixu4bLfXZG",
  "key24": "N2A6ghy7VqnhHHNWwTnuLbzRgkFH3KFxUGAjGxuyUQi3gXCC4GkFyUT9QvwZfeqBiSUaeMvG2Phtb4QWgLwcu8U",
  "key25": "55h6hv6PTncDja2WWWRgxJ7mXnDLrWEeK8xGKHa8wr8bxpcubQSVEoWidcwDbggj9YaEwEV61vt7gXYNorsvCbRF",
  "key26": "53muR2T2PQQg7NEpCFFStMdcW1nugUKaTgjNd3pyi94bzW7J1NFZexAFZhFbFiqhsXbHBRwDfCRy51dyHYjnR6xE"
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
