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
    "3H8qZ644AaAw56UH3Jr6NDfk35fTTu5JTEMFmPzYGL52V5asgUUYUeF7Xs4aWmzeDsGCtkoPC5UaTmoUfXy84Lrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHd1PcXs9MzMFx88cyU4uXLVp4agRMLWH6nwzEphEtrKRT6FCuPQGFShiy6wpjxXwftdthgasruioEqR82UgQ2d",
  "key1": "569UdjQDY2DkjdcpHQRGUabXNxrz6K4LTa2Wi2zBUJkUp3KQLeuuEdh7c5FD8pyd52wQ13GVNpHZyiyYKjwnHoX3",
  "key2": "66qNXdXnyQHmwZ9FDcSgzvpxiJfQrUEWQwBVS79zL3B8pQoboHFP3BkqJXkKxvL8nqfGBqmJaQo6GV76Cu6avDfr",
  "key3": "32kFG1nsmsMDDqWiNECANbAcXmD6GC2mLr1K22r6JWk3AwLKcaUHqtUcCGwi1Js3JDWPcBpvY6bhby5tG8WkJprN",
  "key4": "49A4TAvAybzfjy63EEd8yEfsf2ggGLnrhZsx4s1jmyH63kWw4QSq6213RccxKTT4UCNM4jQu9jn5KkcJ2i3JxEXm",
  "key5": "2SZUmUEg3gezDXJfLFKZsnSpYD28NEeFKk8EVWTj5uWVfnMKymcmgeZy1QGXqtcxDCexSExPYyySkx9q13eUZP65",
  "key6": "4pH7Veat4F7kbFJr25M6W9zk7fB5vDcSbUB1KMPtYYFcXmqC6ZSkL1BUnLswsFs2izmrBWwTC4xN8QiTMmFfKeyk",
  "key7": "dxKq8zQ2KRvUdgfKPVRnDbtBUdTA8RYipLjjHhoCWNSnphvdThSLf5hk3cagkT35Sex8nrPNRLpVAbj1GTZmjLX",
  "key8": "5Rm68G9Z11oiLy4d4PCupj5ASbeRH6zBivN9pCcoLoqaS1rm172zSKuBrTZYCH7zaBzFkCxZVJGFZmxCxajUcdA4",
  "key9": "29qLzejVFP5M1r4HVLUw6e8Mu2ZEHS13vYdbgVj5Z7U97aSWC5LS6hA3CK4DRdeof4dBtWVR3mYFJJmy6V5Rq32w",
  "key10": "35QMejBRsSgok669zfAYKnxpNqm1XkvxcK2L3jowNJFRTwm7xauahweqcaobYyekfFouQjZsRV3DxDPMPXJNrVLu",
  "key11": "5i6sSGafihLoiCXeypNiHz6rK9yvzQzwk9rbtvmq8Sp4ZNQEH4uoAeXzxVnGUnxQBVHgGXaXTNfwJ5CPdbWz6rSS",
  "key12": "45cTsnXuofavXo4NvtzkNQA9N9xs8yx2J5CxPKTeWAZZwFZY2UMUqACs2DEdYEHFnrcgKy5JWPdNdzJvSKVvCJbd",
  "key13": "6UQKZHMWBaHXUSUVxa41j8QdSFhpAJanM13wuXxXV9wixWzBfB5eiNxDK2ka14gqm9BzSRywuNJ1Br6EB6Xr71v",
  "key14": "5ka5CGnS9cqKzuFXXZTk8fUg41TYusR9D9kmqnU2W2r4GtcAfsTxPjFGVkL1KjJq2t3awHA8pJhiBWDxor9N2k9B",
  "key15": "xLXdV3eADGUuAFjY7DQcs8oYdWkGqjzyWrSMwNMjWZ1DAsMEsZVa7xkRSfitBLR9akLjkvDouQcWcHPruLwhovQ",
  "key16": "2uo56EcW3dKtDkPXjbApqQa7q3a4byjCBABtKP5pLjTSLMCGxjt4gVXWEtiDT8q5x6U1qCmE4iHGhSuYDyDpcYvc",
  "key17": "3VYvG6zq1AwhbWMuwbR1GCVbrUy6cP1owE49up5SUQZwypYJVQAMRcwWKfHdh4AenGcXotQBFh3Cn8hR8YADKQzM",
  "key18": "5HXMJoQ1VvZcBYyisDV9iTrKzsUbmvoTDzc7wF7b3wazjzf8V7BLTu8odEUzSN8G7DfKwg2gxSSTxVeBMvSQboGi",
  "key19": "4T7PX4cWwFdEirku2Yt4bXMhFTQBBtwCDT7c2CDzPezyFPvhBvaXpEqaqwDcFPvtsHPm9vbBS5k2TVub1t1xGMiC",
  "key20": "5PTe3892W1jF1uCF98cVGUa66dQHJqi3cUHGLdgBgemSPjyJhVQ2e7cpeaXgi9znpQWB87QwM86BY5xRf7dPCraj",
  "key21": "4VuLMJbZyzXoZDsxkPabVRqZB86rzbD8rXMf8A43YLpyHYAxSxQAxH7XVJuhh6kLbnM6BFZAzUgzpbq4k699Udi6",
  "key22": "4ovAg9oe7DgWNaXAKPX4eT2J88Unq2uBRE4wBmUxsD2QM99fBrDz7FVetA8BWbH6WbCoG5HwtRD9baPfHip1sgGf",
  "key23": "4UVexrc3piWJ3ADDbXFWiiqdbSndGbcGMdA6nKNZrzAks8ZX5ZjQXYRb5Ye5tPoKwzwQudePLKWduMbyj6982NtZ",
  "key24": "4SMma532zAGw1LzsF9HtPUJ1CVmn2WERXrU5cWgE5kSwQ183MzrrjjDBc9YWaHodTVE39rccxhTN4ah4FUvp8otG",
  "key25": "5aPfj5tsraAjqSWkWj9DxW52KD81dJkgtjaJS7Wz2f5fF7qsikrq6dD1zUsjx3ruTK3L9RMi3EfRA6HTHxCKvuBT"
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
