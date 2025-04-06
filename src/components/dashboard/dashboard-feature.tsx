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
    "26ycLztqsi1cKkT3hfDPKDEYCFmkESGDJSFyPem16sS81sBj5nEZEYrLuXivTQQXyuY7MPmRKQDwZDV9whJJ9n9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qu45SpHBJJq7FUCZfYaKcXRNknDufgnKMHwLHcGZxq1B2bJTQLrGLkUFXq7YANURTvBhCRxWDeR7cbmXCzQXBww",
  "key1": "3jLP5YK1Hy5odu7VJZfHh9cSNzTCU7y7h1WgSyqEEcCyBRupYuauHjT7GpPdBm5f6D5JdC8j5UAn3DPcRBNFNd6o",
  "key2": "3hFFioUhSLUNUM7M9VaoCAHm55LKFz426vtSsjhay9wTz8tcGdcw3vYQ68DUMEXbQj8xkgwxL2zSpGTgjuQNQqxB",
  "key3": "gHRv32wJ6AhFUX21QCxN3Jxh4i8sS6Jn339uZCEV55zVymrirxzHYSmaTFmkrka3TjbFDCm1tvTSgjezXhcd3iU",
  "key4": "4pE3APC2fyaZ1PWnqqxCampktrBRX1Ycj5tdAFxq1njsVaHSgaT3iPcYYcbzZ6gCC26Xxh8v5c19BXwwbpV3W3D6",
  "key5": "498DFetsa6dVjiShRj1fsS1AzqFB5YpYYiJBGT5ExH2v4yNEeBcLbwep1UwiVhmbP1e3YsnfPowoxz9DtuLeTTzo",
  "key6": "3UiYqeBdQmcmkP8ZXcz493GeWs5kNeLLKVwnnoG3GkmPAoB7QeMy8gBhXmiD3Tki1Z5VBNKrK4dQxzwXNgqfdaM5",
  "key7": "JTcbbSytVbbVF8tXhmm3cpSapVviXkBa2Rr9YToTPqw12Q5pVEFYrPmqq7djUdU6u47Dzj7pfhhSL3aPVj7QWQf",
  "key8": "22QBF9ZE2H8dGkNBV28od5C6S6BYe6qUcGGu7LPEz9oDCmdC4Ddwu4JW12SPthCYYfgV435ediCRpMk7KQhMNMT5",
  "key9": "53Fgsjp6piQC41h9UByJAySfVnAxz7MroHA2tM3KzbaXpoyyTGwVGxFen9JTsJyNwqSsMrKP2MfwrU3p2nicXWSD",
  "key10": "319cPtkxdVi6a4jFYsEwkizX8tUodHwzweD5JfLVUozHPgNqYvdaLdbNwW22qJrtV3SF9MGSgN4AhCnNqLpvd6aK",
  "key11": "4yAYSgSDoR9ZBSwzPcEduioWHC1nE4Bk6iQp5c69whsWuaxwJ3ccBDrSpcxpS1vrmeaKseitcmddohRGwZTfUKAz",
  "key12": "3mB7ZqzYQy3aT2ienetoLn8bBvr2JirauF8too694zgGup9n5CsELxphCQmTJvn8HepjouUQXXe1sQHKzmXjvM94",
  "key13": "2euiRjnUvoBdAu2B32EpB4RNzKXejQHjHf9bhZSmXTf9z9omViWfxyhP6tbwQEupAVUHd6y6jajm544SxCkthR1B",
  "key14": "WZFYXzgpj9ARjpD56dgFhyXowjQ11gFuGLqs39yDiwYznGydKQFGZeXP6rqetvCYhyvaioUUgfgPcwiNjQcxhTC",
  "key15": "MJ6RNWgNJxQMCciRGfYWJ9YTXxchvo3wwFZhYHbFRHE33b3HQ5VzAaFFkLL6bUcn2Mf4oX8qaPq1CjaPqFuqHWb",
  "key16": "xQct9i989B2tNiWQJV5HMG68qUVesy7FFixskYEDsN8UKrQ2FC25pKmHxRv1sh25rgkzyi961LMNnwEqZ3Sxx6A",
  "key17": "QwjBUJYGHBeQLciehZTqJJQj4Hu44F67mDyn3EFDoL3wbTNmV1GXk6JLxySkzNzoUja7ccvjhK1qfDYqNpc13UP",
  "key18": "4PCKwPDuYyebxWm5sjcdCURfRRBQ9q7fTdfFbgSomcX4DBrSKvet4H9QtqE36e3vmq2DYbcuKe6z83X9NJb3fqbK",
  "key19": "5g9QGmE3PAJVCYwAVJukNw2issYvzb4gr7Y88tPz2bftudXfGy4KPfpApPfrsmaUoiGTD4WiMSyHLiq6yE1BvbwW",
  "key20": "CGLheBFhqrVmpSPBQDZ1DjoVZCAB5bfAXXsJWiseHem3BxBHVd8mZk9TTSuo2uG7J6fK2gN6DpA9zGuMow2Bsjw",
  "key21": "2gsS1NNaA27dZ6S5fRWLfzRi8JjGyZeYEmuHAEia8B6ADuLoXhLKuYCZkYUp93iBA7MxiZjwMFTUPFxZVC5VkdVa",
  "key22": "3mkufX3GELwZmzwBEAk4qZ4kbsq3T5yuXrC8miXDzweh6fB2i91QtCdSAxqik1sZGskuS2L4mXYtwUG7VHv58xC3",
  "key23": "4NY2m1RtaYZ7niVhJPCXtHaHbRg717Mz3RaWjGhrg6aRkaGs4gxirVYtuBefutfUf5zPypFqe1EPfrzuVKs1z19q",
  "key24": "2jd6MgykmaM2bvG6mARz2ttCrpRZyua4MVb1xeeGxNgQDWJ8GYM9Ct9ZKLFLsGvP7JTWAJV6qCSFRmy5QCwRKDwU"
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
