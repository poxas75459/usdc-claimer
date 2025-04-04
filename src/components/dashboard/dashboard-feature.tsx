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
    "5wpFn5QLY1A79cAG7ePkKDBmXYsyYcJjm76VMYfzEjAHupX57EoxZf386wJW4fBSL4u6SN4tKhw2aTosXDGqaTkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PH47psYp475b6Sh6Ypqp9tLs2WsPe2u9TUibcTN5nZryE6LeojjpSpTr42b6BAPFzudrueSJSiHuceoNwT3patw",
  "key1": "3MmXgLeY8YqNdV1Sb9xk1uHBarTbEsdqwL1TvYPNrAGjNorX9vKC7stFqiYbnEJV76Wo3FofQenuzdfwTnjKXgmG",
  "key2": "3zYj2e66iJbqexuF1HeMP7TLw6pEY6qGuDrcZLmx73sfYsepahLfGD4goFPSwtFALiDaoeUQ8c9HMa36MPZ7qn74",
  "key3": "61vEZ7gLTySAEHWtYnqVmW5AKEWgHAAdXm3MLQHSbW3UnFB1CWGQsF1FMMBNWGN88i8UPRDNApgb4S5nDxV8TYL5",
  "key4": "4GbcHhKaEbN4usktZWdo1yzqKkXiVEyajPAszkBbRzH8uXHK3q3AnZf8rkm8UigKoXdYqXtYCRNAi6QT5QuJWpKS",
  "key5": "4QcxDmusbGxk6qwbv53qmWJSSq4kodJBriwXBfRW1WgHycb2NfoiPSCxLLdw4JgtmK48gwvHwCVZKj6KS28eniaD",
  "key6": "3oq6r83zPscHo16NBZfNoVJySw7Jh9nRXaMPU7JJJPfFJN5TqeJNG1BGtxG25qkyxuDnbSBqS1TqA5HvG2pF1AtN",
  "key7": "5fE76Lu8tVkaq5DdphTbfF9DPmb3TxXf1wWs2ZhqUTrbvw7AjBxtpMPjLUg2bxV8Vh3PEwCzjQJoZRu4pHXGVQ7Y",
  "key8": "3Mzo373Qbd3RVpR1SJBbcYX1pj4MnXSTx4tojtGiQfoRTaE1TyfmjhcTN1G7MXoT1JtoXqbMasmksfiWwS4W7HC5",
  "key9": "2akuJwPuPJWa1HBtXDyThswAu3cN9CErscCvoVowo1UeFdAAcSX7HEfcTEgLGV2gCfDyNdymvxQ9ZGRrmScWsXZ3",
  "key10": "4sPoQgZthEDdRc8mEJwteLy5FfqwuyoLszy2J1Te9CwSbz8RY2zk7jtcNTtVuEKUjJo3dc428kigQJkd6ztHnrSL",
  "key11": "PwmjCmp3fmnmVFQg5ZUSQ4BFJBvNeea46u2jht52iBRF8KzsnNPnSKGR37KkBz5Nn4cVpUE9MqWzzeFhbzfBt5d",
  "key12": "4uwQgPTENxBMBmfBiXX3koGHCTCguA8tN7zGqyYJpVM4UjqhcSGyXkDkmBse9xn4PpQAr5ZeetWtojAXG3wEBCJj",
  "key13": "2BnqBoy1RbgYBy2o8cjPGGk1QvSQGqxLMSLENCwLuvyYnEfHWHU9yDfk7xmwqpdKyXfwroMrpDm7C69sii4j2Hyr",
  "key14": "jgWNftPB3qK68XrQpUYRm9hFbQfWcMmemeZFmEmJYxPEFxYuuZVwQcHnjPAVBYDvBqDpz41U3scMQzswV794f6x",
  "key15": "sUfkb5uHhGRxKxPLCqsdY415AYx3KxEsz3HYbZMem3ncK3feBB3AZBYpB8zEL3km4r8UfH1fUreBGeGAZJfRXcY",
  "key16": "5QycB9b1bYtvfWWbLpjDVXhJUXKzfgGDUB4v2Jy4ipUZ8RDVJrJbemas1nzinJDu3Jte2YFwQ5QWMPobvS6L7cfT",
  "key17": "3MZCDMCJ95179pk9dGEnWLi8SW85VPGVGarjBAQ9Yj5g9G4oZi4RrHmxXx3RbiGTjLacU4zCD59ReCH2XraNYtkb",
  "key18": "2NDVNCJMM7Tk9pnrmN3yUTNFpMK1CH7eSjKi9imEspH7qvpGy42vaf1QJ9nA9VxDqcdqWa9H5byUmy1rjWSzuBWa",
  "key19": "3mRQ3C11WGdtwPwU8GuMUw3YxMpP6BWuNnbWZ1tShBKJ9BeKZatYSe89XYJPqGKtF8jfJK8KdYCG7BChUv5ycqAK",
  "key20": "4WzBQdcHT3p32adeegwsALPvqKMYxBjQUDsb29zMFpLa7cHHjtLzZaMSsSgnkTqVXzKxYrUQxUwZYLEGyVq7Wrgh",
  "key21": "N6Q2ZEW4cqT4yJXiiLtFiqgpVYG5bwR8LJ7BoDs5teciy4WhhjTwDZr4fjrX3yy4ZULvXg4DNoQRQmSN62uDiz1",
  "key22": "5WJ5YZ1RCg841dCWHqafyRhTpuX2tfKVCFS68jv2oBK87wG8wk1MU4MbGEUpNbF9o1nwprUJKtePH9buoM7X5w4F",
  "key23": "2MxTWvfkeoSxVidjhYRMiou7bYBTTbYASvYCuLbtP6yq5NraCdB4h5CAtCk1YEL9TR7UxTHr1t8b2tNMWoqm9nu4",
  "key24": "LUxYEUP3KLyhvjKuXGvQbvK5QagkzokYv2zKPGmkhgBsABBgXYB3D5w5o86oDXY49Le5CKXtGXxw6UDaeb7JHme"
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
