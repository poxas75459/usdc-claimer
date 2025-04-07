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
    "Q84HKBnX32v4M77Vj3XqFA9rNRedUCiRcZYNMYfw5rGjvYSsHx6urY5qLEe8FALZbmmsbLLZefuxJnQktcKsC5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZ2VLTkhSP8S35bVKbPWoi1o6ebykAAQdY7MhxYLfUEEN7RZAXHZ7LdRh947UPLkeKYFg8S5rFyVEyYwvs9UhCk",
  "key1": "315XiDTk9zP798eQMn6XfdsC8BAGCJPaTQkXkU7eovNWXXfUPYiTm8ZyhPm68yNGjW1q2HGGYvTeSQu8qv1PCmfX",
  "key2": "4ExoigwEQ51yAx6E1f7MhM46W8mXZZdJm9qcJuVcqwJReEbEgisHbyn7CnCno2jtzcwehoU6BvappRZ96G5cYnr",
  "key3": "5CxNXLN52SuoY1tPpZ1WpB4szYYcoABnR4rtQXNyQUkR8gLBzfGcVnGobfhEu1DUvs812kMxyYM56CkvX6YAQokh",
  "key4": "2xJ3PRRGGVUU1PLosu6bJkCNyDVmhEYjccrjqce59mKBKrMW5dYVvdLqVfduxmwyG2YLQSv8kduSvSH418j1zeF9",
  "key5": "5zR9p1uL27pttc5L23nBDzadSxyrPgc9W6K6m5wCaG7BnbU2Eka9TASnNseKmsjoSQ5Up6ud5kWVkCjyFbtmFeJ4",
  "key6": "5JKz4iSGmTesLqWzH4ojw4S85McwCJSW3WHktKbZ6qPePv3dsiaaQmdPGVykyTiLz46HPQvZFhe1EtsEgLdxxpve",
  "key7": "2eqcrjgVU5Ti1Vk8Dvw6K7e72oXqiZwAjGLwXm2kBYFWcgruNJnVZWDnf1hAqUA7qUcMkWqSFTJGrjLjjYDVeR6d",
  "key8": "4xckgEuv7qtvj1f25kjpiUJrDVMuc39VAvX2cSxVL23LsxT2UdfhupeWF7m9AR2tnS4okqr4Z3DF9TPAgJBVEQkg",
  "key9": "5nFNemptvWnQ2A92xP9YNP3bsNkLK1Lc4JZRAFdBd9L1jt4RzyWnS7caomZRTDt3WrL8nMpSe5NTLJDaB3VxqTGN",
  "key10": "2mxdmruvzFZvcyD3taeqccn95usosgE6dq5k6R7tLR2FFqX78Lwf53F79MoTVtkeEzjgbgTF7xT2hHUKBdDqS1E4",
  "key11": "3ix1vFkQupuYeT9m1GoXMDxbD4RMmDhwiiHNV7CjCwyRucJLAB9Q1G7nBQTskbVgS9N3yHYTdHRQwhAfbqL4Gm3x",
  "key12": "5z9Tf7KZiXGiyDpoDt5LTLmPmqQCd3XvzSF4qTAEbzPgM9QMfJRrS7PEJktTybbUifepCY49gBhn3Yt8L9bREj9M",
  "key13": "mLHbQ44PLp6C228niabJp6ateeCpFFsxuBLSKfF7H9ZNH6smx2hRnAk7jp3riCT57Q3jpj7u15rxhsFw9upZGQj",
  "key14": "5VnZQDdtmUHY2dbH4jWNE5s2s1VjoKTesVcJoGAZ2p3jkikQF6cqbjvpaFE7ZTZwjf9Lh6i1t8jK2uJQuosr1E1M",
  "key15": "39dMaK67NoZAwiiJiw5qkMyrWemnBxM8Qh5DAZcEBszU2RQ1HaP5eqknzMFDKNnPPzpffzLyDnMYiSnhHkb8bz7Z",
  "key16": "5YeoNg1yniDzhZdJs82TMGPTFAMANT8bGdAFd7azPTzepjgMCxXsJh4h2sN3caEgFLimwYbRZ8b4isogJXFqQvHs",
  "key17": "4xyK3BXinu6t79kYD3hezTdd3ctahk47fh6Dc1TiFQ3mcp9ttU3QWKtsG5iXoYK2jjFk5AdAeMpJFVL17MKMCHYs",
  "key18": "66bFmJgBFoSg8JdCuLiQUmRkn2dFDqhLg2gFv9ZTxgHfJTkENsXQMkjXz37e57w7ud3sQAYcAGYBGFFs1hfm4ENT",
  "key19": "5mvt7CVU1vUMc1noFgt29ZXfUTVVMtGRa21zgpXmycCFmAFbXGFNdG1rf5o6ydEc6HZMw22NFgTCjWouZ7VPhVoM",
  "key20": "5SA132ooa5WVDrEyZ76h5ZBVm6nZM9cd2rFdBPLKtxarY1gu9DA594yy8LhFYkeoPMrDwvjEFkwYoDz5XnJvNZ81",
  "key21": "vRRbvkstSwJnYb2gpcedS6VjsSvaE9sfyNAppqRsoSZkJBmH6vX2sXcv7Zje3qjgoC5UyUbp1V5qyX83aNjuV1w",
  "key22": "5KCenmc4u4KqQ5GMkv9tasQEmkBg4K1MdzrPgbdncm8KyjcUre1Cbeg9y34rzFiCo3GKuDCCeipC4VU3TxWFL3UC",
  "key23": "fyoyaTVaY3LWZCKu7QRhEvNXqPCRgfPEHBS2iGiv83EHSFK8qMafxk5cs6rPbzHWNHdnfEL6km9XnET28DrizSy",
  "key24": "2qQJftezjE3B8ev3edHAwKAgv8DKAJFbU4bDj7vfFZs1x1wL6tdcxkFCiciiLuRWwY9hknwkjybDaYE4anhkQ23D",
  "key25": "3VWCMnnRz5bD95r4p759DXnWgTTdEtLcZSAe6j9o4MQuhukd5c3bmL1ofGCHqEETCUYJxPJBbi7fXYku2MRy3g1v"
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
