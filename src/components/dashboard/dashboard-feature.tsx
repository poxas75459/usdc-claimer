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
    "h4jiXCi1S2NCVSvzhXptueCnKDJEFyNbsa7wU43zLzPPBkULGvknChEFCZN2mpNLFP3BiGQUbHv6NBPQrstoRon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286HiZFACWxTHwzw2GwRvJRwXhUNdUaKZ8tgZkuGFm8cw4hpryxBgFB9LrTK9MPqJ8wc2Py1arDvF1wBqWmDdUnb",
  "key1": "4gJ74LSrxceN6hzY88DowoBPXqhc5355TZrH9QH6Dgm1wH7VwGADaSyxFQn7t7WDWxGmJyDaQb9C8KGRPxzhezTA",
  "key2": "2RLrwPg6b9NSEJKcu4awV1iTyuAapbi3KA12sMTF8k8MeZ53d7UozFEbX3ufy8Wi3et3WQ2ynTEtK1Pu65qwyZex",
  "key3": "3a3TPyaDcAwUyrKt4NxzWPNySDWYLqkhNdrP8BiLfkpmVw4JGW1wn6ivTcx6qD2A6pRgNZMNrRoqRjYMswWeYCf6",
  "key4": "mGfF8vakcF5YVBoKTuXM3SgkSGuqPkHQhomR8kYAhT46VUu32pa5ofQhkYhDfrDD5Bfp1zBpokPe68QptwnLqRB",
  "key5": "5kSZRNVWL4SDyjv6Ppm1UJeXPrDEkmYas9jcETgZnY4LhdpJURMTQET2SuVX8h7B8q7itkLUF24LCaJ25DoTYMPX",
  "key6": "3tpwk8sUe9d7nZaqmuvMLPWNTq4xKwpvzvdreiFSNKj6RcMiGhjdsBCYNY6qEqvgVFAqYm1W8Do8vA51v5QYXNYf",
  "key7": "2iXVvN4yMDuK4f9Gmjt7igdew6QDcyegUBuhX34Psm6hm1hNv1aRkehFpkcGLcUhEonkhmvuf6BysNwFrLBbV4c7",
  "key8": "AxdkvutsqZEYG2DL6aJciLLNwZWSsrevEmSirnZfUoFHzr2gmAxsgVnRmeHuvASDV6ZzJMHfBSgFA42R5GVqhBV",
  "key9": "2ypm3Xa8XL6BjAELKWFoaVoXNWbWgtBwmFZciJcgDtZDJxrKdHaBP4rM2RU1GzXpbXjnnEjkoRkQ5kMyA41ScNof",
  "key10": "45fq6vYsHHdgZGep8a8fcZ2CR4sXfo9kTfjASg3HJdKbnTyFm7Mpma7g4Chvv4j1MJp8p2PYb7TpT1PK4vBtVh5E",
  "key11": "55PFdNGNuVNEfhN7t6BPPbBG7acuTMCuQFtd7fCUC81tgnzgVxxsmnihQE3wTXWito2ucavZbBpyS8VGTvJ2w2Z7",
  "key12": "wVLkhEByoMGoR3UY89HeSA777yPHCYZPZBpenS6i6tdSsQyoxB5o8e3tgGFqbhyLyS9GwJ3hfTbigJggwJqBPs6",
  "key13": "5zTRLH5q13CB1TuQLq6y2MvtB39AEMgjGa8orGgLNZVVgGiuhA7cusWRqvVCaPzm4TCUgLiKFURoUEedXEqdaTTy",
  "key14": "3WHEZDZczpxT8UaBjPjMVigoVeefLFAB7TZPQygzVDBV5UUS5C4CJZN3eRuB2WDxMBBSDPpECfY3YE46LH496j5U",
  "key15": "3djPKbniWckXbyteQwB86QaQxmteQXy6Mfk955Jwb7Gm7GzWgduK5wAHSeBEYjN8ZjE6792QniuaZLw3AKAkSt58",
  "key16": "AkhsfJjpc1cXZwBXdGZtpiGZEM4j2ZENMf9C7iRpfk84ATMBwQiP49XUE3s1xFEKdNijwyFU3T7BFQP7aMKFPSq",
  "key17": "3LT4Zsm7WCdZDa6fQAe8rMkF18YfEmYnX81fncUdwwV4EExJPJd4ccmWfKvtWZ9vumXazLab6dbjC2kb1iGppTn1",
  "key18": "2gWNGYUQVArWQuzFxftofHJdJjkruaALmoxpRKNPiBYmUuv8NutWfiYifvZgWSsB3qP14rsuAQNnubCkt1RXpESd",
  "key19": "443uoKJRgMgoPdKMkjXfmRz1XShGhaRcYk3uWT32CkFheqn2CnWtCCCTqEwr2HPzYgPv5D9Cz6dVD9E4LdUfb9f5",
  "key20": "2RefVaK3tt13VFU6Lp7azb2ePsinV13RLH1N7eztyfkuJJ8GMEBRbbRCtwCLrm5BoZBr3TQf97GuT7zRcLRiTRXB",
  "key21": "2hh4pHPpYMTxQjwJ8Mj1wGv3XPu7woRN5Z2J7vxCcAgY3LenvoB1YGv8YwYTjDLqfeicvJgbZVHwHbyGjDgGr6Gd",
  "key22": "2CZWLKsjWLPv7fpaMazNtAZHAXhWBG6w7Tc3tCddn3227J7i8n9HnngQiwjUm5N8xS4iMHCECAAdgQEnkEtbmpBw",
  "key23": "39VoxGVov9wL9drce9F5ySTvdLQJbjdVwkNb9ZqykK7zPk3Ub3Q8CxmVJTFfdWLeMqioPcYipKvmMSjwBk1C9wUk",
  "key24": "5SaSCHJxY1GA2RYS4gFqgwJfNPbdsJ7isPLMjCM4Hen1pmtxUkwyDiv4ZmC8LdQRow61iUBhHRbVfYR19yHWGSex"
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
