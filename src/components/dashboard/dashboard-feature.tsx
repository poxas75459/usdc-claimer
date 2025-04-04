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
    "3Wm449aHELB49ULyxnFis9PacCFswKKjtZNj81VfYkPG5g35gzXFCq4hrbWSgputdo4yeeSXdij3CyUs5aiPj4Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UATXcYm3wciKFA7u38yQPhx8kaEDRHnWVqPHy1iT5Z7GwnRzUkGsjhR5nsjL93b2obZegoD2B5rBvwRNK77StpS",
  "key1": "2MWBWFaXLkJCAwHtzg7cuHHffJ64zYY4zgUDssgD91vSPQjjCawY9durYzHAf2NED4mLvhVJCFV9eBB8yazRHrQV",
  "key2": "3C4hB3YQrNNuBz1RQByjBsmS15d2HTMoUP96ckmA8U7Wwe7qMWJPkfTsAeB25BoVzDuA96NpNAz1pHHShxNstCbR",
  "key3": "2Y2s9ir7v1uKoefDNgghNahfhmFp9S4jRjjQ3AVAbEoJV4LtzePUHSXmRgpc2Eqd14iq5c2Lm9Ae7cDUc5hHMh1k",
  "key4": "5WyhMpw7gDZ64TZyiuxnVgHdvrvz8kFNPt43NEjXYMprw2P2sLkkXCqcfpHFb4g23xYwsVrMouXGuhedDJnbPvgx",
  "key5": "249pJ4tUrB2BB2Fvw8B46aSrEZUooTS9Ayd7wxD5FDjmUnYziY2k1ysSSaFEJhWNBpqRNLqZMv4nFgud6GBE3tHP",
  "key6": "6A7kCxJ9QFfbgQ9ytVyXV5HRA6tVrpC1Snp81wzLyisi7xPkFRmZ9Z41sydiZcqdp15AAyu9kHAeXWcct2eTji3",
  "key7": "A2evJfT8isjh9udBiME6Mun2csSniP24g3zSt5c4outCUrrjCpRVn9iF4pss24nDUiHbdv5m9X4n2Kgx8ad7yby",
  "key8": "45B1f8yMfakRbsGNtgCtnmAcmNZV65GAepESXvWu3P6k1j4vU4F1QuKzPyknkCfj1anXsDHGUZJVXqx4r6Wcp74Y",
  "key9": "2t8D5aM25WSLfeXFZpPBKHJVD5qQyCYoTgY3Y9soDzof5hQJxVzRV46kBi4nkeuKEux1Kr64eyjD935AvmwmZyKh",
  "key10": "3y8BxfG8Gm3kszV3Gxqq8g2Uua6ssuJkhiVm9oS2eZEB2Ho461nZnnKLHKpuo9zZVBXgfLqKftxWKYPZ7YrmXgrB",
  "key11": "2P8zGT7KQhNHbfQpP6b8iT6fuDrzpamQMCM2r19AnXt6TMxe5GLEk7F8Sbsd9KNb9G15LKB9rmy4H7Wbvp8kc4JJ",
  "key12": "3LVfc6AyxyhFVV2Zz9rcq1kxLJMv9EhdyYR4iekRrMZmSzcB6XKZDycqqAX2iKwLHE87UKrXHPXZWpRdvpCrqDAQ",
  "key13": "3Zzt6Fm4kQ4YeVhSX5Mnkpezf6SuGk5Q6aKwfDsVoVUPBBRBSwcFxTfkbREExXEZXL6ES8HKVcHUxPf4B8JT4TmE",
  "key14": "5VSN2kPiZDcz6iLWSQ1xCasKq2nPZYk5ce45DWi4n4KH8qSM2fbcUMLBzoXEHXdepABnJyUt2CV2Uh8xEFZzGXQG",
  "key15": "URAw3mZmFXEFEFwNv8i7awogj2qCt8VaqvZN4MewhFbRE67x2WY6uXBK4bzEsSsfdkzBoeyZmtvkx1UxZcHHS7B",
  "key16": "kUywjhaPtcUm5R5JoWLhx3SDJeZYz25YpfYi8cUyk78dy1cWzJPjo1o1vwCnYEUh4Lyq3Pzo2zniXQJDuskjqV7",
  "key17": "mBoVUrrgRViFNFRztz3NPMZjuf9eExwFpta8jer4xeoRW6Fiee6fyvehXhkcUGL2X25DF2U12GBJBeGzg1oDrPp",
  "key18": "2SwHxKxdWtWVQ6CfoTVxbXHQYm534mRKCStRn3oxtBe74HnqMMGPPcrNzVeJo3c2NY4f3PoeU3hyTZ8zmrsgsWdQ",
  "key19": "2MYQU5aMpkr84gNXidndP3VksYLSggRbRwdxNuV6gVNme6HysQVEZjhpTcsH5CcTstudpGzaQMKKH42aQdyg8KFi",
  "key20": "cD3SpW6WfAw1LmJX9r4wkYccnnwjnEvAKYPoxAqnLAqVzAFDxYFvYNFmPMYKXwVynJkprcZMfZvFPYf29ZKN8uT",
  "key21": "5rhzzWpceqNXpc4cgPySnBGnayLeny9rMwEPDm7PYZC5oKK1L2ecr4srktt6sBefQ52QFpq8p1QwHxVJCkf1A72r",
  "key22": "489Z1MH5FKRmTt6Uc8B56LSNTXefbh7EJvEjmBKwbqHAD3WqrehwNAM4dmp5aJivnUVW46cB5nxGVfpF7urriWY1",
  "key23": "4kRTyrkS3ECQAAubMRgRAPLzPqzPTKpVW4k4yHehXMmj8oxMKQNXY3y91A5C5DeuT4AgyyyVPiCKHaaZcMECsrtq",
  "key24": "5JqK1zM2tNf4BrCQ3uzVfWYuJU1JSyAT9PCQXvEef1VW5FpgQnsQtsRgzst1McbyDPzrgqJhnFNGz7WHdSjz2JKZ",
  "key25": "eRr3s14Wna9aSihTq9WYvuKqKFqLfwmJrvqkkGfvKdXmRs6TeodbnW4pt7joGBT4uS8FnHoMYUvavpZM3sfHwGv",
  "key26": "3HqMPdcqhKtncfkhoShDMyubnyFq9bNskPbMxz5fAKDfpxB7juCsP2mwEgtzDkWMYdcs8zKmMZ5Jw4ScSH4rP17N",
  "key27": "2seJ5FjUKsEPov4kvBUjdLaMecw7Y1fPvX6BDR8jBdDFJCzY9ntGhqvqRZH21mvHdbGKrUgzmqe4nBoEjoB96h8X",
  "key28": "58XcXJZmV7rZFn5GcLw1c2DZbGKexVZ52qkE6MTPcP9EB925tKTiP3wBETjVS5o1VHzpHV1Pv1C4QBd9QPMNn3mj",
  "key29": "51Sg1AtnNu8ZS1zQjUrNQ32p2rA6jbBBchxvqwntnXbKtgsucjXtmEXWFmu6uF4Sp26dj7CXU6KWnbVS9x74ihTd"
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
