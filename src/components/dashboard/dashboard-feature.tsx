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
    "42WtHqxicG3oL8HDZRUVXv6Bu6KaPtUr7bn1HAB8JyRvQ8mmUzFM3gGteUo2cgTUtEVb5jhCQSTMdpGeRDfmnYpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REMhaaYkf18L53WMSXeWaxJLstif8AntHdjfUQaeDZ3ezFNB7MHGvdogWc4NWBSN4AbXeX4tZBadB5enjRHeECM",
  "key1": "324KLmBHSCQA2G2N7wWibTeTrfMJta7s8hJskxKG4gjZyqztwYzuXr44Zj6FH8MPqA2VWCNP9HKNgiYLA4MaB6mn",
  "key2": "35GKmGLvv6qKA9xNwbcaqiKvj5LT2X4ucZwcw9jF7QvtFmHQgDMRR1DBJ4WBbaEHvbWs4hJJyTeSm2aa3qhUXBj6",
  "key3": "5yjbn2s8UGsDv9JGy6d7mMDWyr9tFXaLfw9kbe1cGJnfMMAQXrECFuWaBBoiWJ7WFNdJUmj9sMeuM6eBCB7iXNeS",
  "key4": "2dZSrkC3Nd8d2mUBiNjVpB4P5vdQcCoFowZzYnkYBssjK8Zq57mpD2cnAufNodUiAw17nJSdoE1fuAiSvct9ysSr",
  "key5": "47Lz41FiAqFTR5qefZ2ze7NNojx5c7w16MAaee4thUGLPu4KPPXfmXtm2Kj3b1D2u2EvbU5RPXRHM9b6XsXbuj4N",
  "key6": "paZjV3rGUQaVKaieAoGCeUmraasLvva9KGJPeqQBYNVE9FsQdWrK1eTErG9FAHpEnRdKrudrFwwYXtRQLZjfZzy",
  "key7": "4d9vwofagnzZbGomTk9cq8eABAXDmxSMZfb3ux4dKvaRWzg7CFdtgGEU3ExG6AvRFnuGY4QLzqaM4tXcvLY9GjQP",
  "key8": "2dEGGZymggAVMsCjkjrEfq9wikyNdNXbdiNEGFVh6LtpnxamJWwNjBTHu5PqtC4nD4VdWMW5x43zUEC6Cqh6WvB6",
  "key9": "5nH5B9fxEutYyFzwTXhmMuoWfBqYdWuSSH7Bk7MGr9vo4rtzTq41xHQHgVz8AwXcd6DiPvgbBMPEew1yNFVbQ62c",
  "key10": "4ZRJvfw6AjR3jo8DumLUWavuSueimaGuc4ju5N4qGzDrDyrAWw3kV9QuW9zmnTE8VWGsYXiv4tTDwLHdGd3Uh38n",
  "key11": "62VjiS3dqjCoFjeSR8bQySgwhYnE2deUupKD7ESpwFEPvJMaqBexDXnc3wikNMqVXLwZLWHArKcx8xyqfVEz4Ndq",
  "key12": "EghHcfk9uDKKoJpUTg7b1a53wDTnoH6D5GCRkBb8oPG4JRPqL7KcxGm24ZASxTND7rVYVfwUGyarAH4zCZ7s7GS",
  "key13": "1RFMjiovrEaEkyv7ysoZFYwrwm7EGmCt85jnCScrEQgME7cKLysfCBmtnwe65JbWVEBcc2tJgisrA8G5JukNTC7",
  "key14": "qqWMZBsz7rezckkKwNPfKC3Mcksc53hxcJiK4YNWFcAG8AuToXVr6HqnjW7SZTFoySNzgWVLmnHGXNL2fF3YxHU",
  "key15": "2tWdoMjC33ErKydyqfZUinGGVdryY9S1Rg9WPjjtPcPnqbjZy8HjSqLB26oxVaMKkrjZhDxNWj7deM9CkvqR5kSm",
  "key16": "3KHWszBTmUifeCVc174yhvQqqGTfSLAwk5DJFf6wxoeETrxks9dNYJrmQLynysM5hR6yccBGC9YMGp3Qg7hC4ExB",
  "key17": "Cm1JX7N7PEAF5J5pXbr7BpGdV7wHqQwKZAUvX9LjYQ3g2bjtvdduDukQF4NpN58yanYFDZ2znMXciziw9hkR8Q9",
  "key18": "HdRMt7rsKAKabtJLru9K8R4LdTLrSNbLktwDGKsyswgRFabxN1Qfs45aXVCqDxafzDZ5EiPmbMtVEE8vfnc4ySG",
  "key19": "4yGEvXLjsTmBj17MUA42hHHHYjmw8Y8g7KgAbib6Xc41DwS2oWGEAstjsbYD34Dox16rScWXS8wFwAZVbqeQeW3q",
  "key20": "5P5dEq59WRvZJRhfeP46heuvs6D8BaE5qTrTepZAMXsKKgeE9NrbwxBRqh39YDf8gm6qSXzAfXtgqjGxP2HDNQFU",
  "key21": "4AfCuJESZxnKMuGwc8MCKqRttGa1hzeF5Qa5vaCTuziWqhPGMDdnUxjWFnJ9cz2fnSMMD9DTmQDQpZ9WdV13NEE5",
  "key22": "NyTL7yiVLZYCitZvvosS8sSNoUUa4rXVUi6oznnTYKHhyezWtqV2buM9fBTqDS7sEN9Wc1hbVXuyDbvKzmS9j9o",
  "key23": "rhSUzqRq1eLXHUku5Srbdd3ZWcbVXtDHRuXUV53foRYkySbGTFZ7mEk2zAErf43dVxFfF3Bu3YYrZWfB3ygnJKQ",
  "key24": "3a8jVh1P4Tbn5Va5Z3covUsCJEn1vcXG6VNWqHe2m3c23zutF5DmWihbxrGUiMradA5LqF8bZZ5RuVwtiSDfqASc",
  "key25": "5nLTvUuoEnPtrKJUYWYbPtWcW2PJMyVVm6DdgbsWGWuApKocM1P7bN3xt35aaB4MXvmFQYJYMi8iFcVGm6t4UGkm",
  "key26": "339yVQTQtBGKej38zu2d44sdhGyng7LtTf77TzrNNJ6mn6obnY6dSt2Dd84t9ThoBbASjazDPMQXEuutyR4fKwUZ",
  "key27": "roaAr6HtprHUHYgKp2hJE6EDnyhqT7xXHpQDRKVWsJojRohk5S3F1j6Tn9e1NpJiWbMHnVqwJVj2JLGocDebMqu"
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
