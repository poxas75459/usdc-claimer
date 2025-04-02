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
    "L7bBxgubqGkLBhH8FtWiwcKnE8D4Z6mwvzDKhnNDbJNxjQQgVFQpJedTzFHZSJMTSq5pTqvk99hnorTb9pP4xTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kK53sWQTGhxNsndYVE7pNvvHxMv4pUfGtP4QS1gqNqtFepsgea6d5rxezjr72FcRUVVPDsp7gYUJeAu4jtd6hZW",
  "key1": "4qnqzCVsZQegC9u711Cw8FtjhA8m2c8RTgSmSZfVpwj8X1emmJYDmGrJhv3pQwcHmgjuDowDKKX15LsZ5NgH6YPv",
  "key2": "4PyHfMr9bZforgEyj9jW1QR2yRTFV9Y8ztAgKZWQ6ktVKR6uCkmdXsfboadhjX3cB5Q44EmNxM7iHxgUE1HjuRx4",
  "key3": "3S8qeL7r3p2YsppqkF8aBRPPDPwkoLKd4Z5v5odyB5npwTisKDQM4xLSSpifnNmXxAsscsazVZsty2SFhqRtppZw",
  "key4": "YRmtZo8742fQuJqeNMhAcHM4fcKBACTgwCtZeZ767wbadsBfVqsLZTMUTRndWYzWSDWyJUoj171NcoyJ3YUrAcx",
  "key5": "5s9C9CPXiH48YaJXVLWX374BzW4kjgMkpCRJ4AHaR5fZL3C11LKtZvygghrbmQyyTGMpZ2YySwBFzAvaGRcvy6i6",
  "key6": "2CzVaAvRaUQ8NZxJPmqbsuL23eFQofWiZ7qJdpSHexcJtsjGxrxRFnDxBifzGWVhBfyTKLrzpX22NXRnCW6m4E5z",
  "key7": "281nY5ykz8C5cBwgZ1MpcZTjFyUsgUsP9h2uXtZQLgdeioeEzCci3hVdo9RLbMCAGmxsksW2cASCkcmUm1NpJLaf",
  "key8": "3GwmxyRH9UKWSiD449HHdUSN2a4wirYsHqZq7nUnpNtxEMv7ByxVx5wZTh66c6v8HSAQHUhuno3vtPBzsyK9oJft",
  "key9": "CbYwuvbVLyGgJZL8XpjUcGaR4k4w3EuD8tMLgHKyMWsA5Kipc1fZzp5wCRR4fNmkNy2rz9r6VFGDvRHNnJy6WL2",
  "key10": "4LxZb4Dnh7xYqhKvhCKegjKPBeXyVRo4ewCf2jLhWKVyFNErRExoWaTnXWvX9brnbwTSMNxvW3PntbAagEZAeBiu",
  "key11": "5qC6sgXzD9wQWs5gbEEjJQGSjsD1nuLwF714gYATNZnrayJjsaD9em9xoFZYEsMtnexAzMnn4JJgznGshJp7SHhS",
  "key12": "Yzeg8SM2p99Gi1RydyCYZC2iiMAko3sm18MP8eTRpXYBR8774eNUcQSx4YJpCARdZKbLHedKifzqSoULeMbwX1W",
  "key13": "59ZNDnCZEw9MEjZP7j5FbskXL5BUkxkMfmtLQFnnVaeV1d4aUMq3VoqWK6mCLRhXJ7dVeLnXteR2Aa4Qc1LFd76s",
  "key14": "38CeDR2jfLyqzhaUYq1iiAvvAqAsUTK6QM1CSuZXxukTace3YrkWfjh1WyvBm9qDSX9oRMPKk2ygCBpc4LBJoXnH",
  "key15": "3nVzLZLEzEAncHoKLXiyYMfpQzq4LhsGLe7deDxxjgB2XFxrfzemLwoNx3bkgf85ptxzYi96994kR6kB9QWPp6Jc",
  "key16": "3aHoiR7GWyqa1Y9pRVfNAwhbT6DvJNBGqsfE3t5dx3n4oKvZWa1YmAzsVfTPyu71aRy5sGbeXFWViDeLXPxSLeWj",
  "key17": "9JQ7DwjGH7W8Bie7mn5TJUfh8coD5cY37FQv4qnp7k1GS3EHyVf47XosaKC2toseLkSzkRYDsXDySXmSUYK4Djd",
  "key18": "3ah4QHdxYSAJdastafXFwZmZ6vG7UZbu3ZkiKPz3GVoodUVyvPf9dbf36pr8GWibsWEyn89S5Bp1U3MntMoDR7jK",
  "key19": "2A4je296kXMPy7LKdUeDDP2ZyoUGR4SRbURQiggpyWbmqUk5uiEXSwLzQzKytbxUTiGkSuF1iyCAUf5TFjdbYuBf",
  "key20": "45BLoksJii94pMnfrf8gCqA7GrboEm5fj9BrdSLCNKERVaveYHHfooFdoBLmKvU9nSKXYZjvbmoGBAZk8aM6FQ1i",
  "key21": "3k8GD1TwvWWSvRQ7sTpwVWEDCMr57tE3M4SUz762svxjhDDDMBAEWYV6wvZqvp3wrX9BiuwawxJCqs2LqzTJk8qn",
  "key22": "3EKRcTfEXqbHTZbRbY82KWX6xV19mGE2Y54fe6FGTk1NZFT7ukCM8eyLZZgy3GXL1P877D1xqvUUrSrAzZZPbVjQ",
  "key23": "2iQBGTxMkLmWmnE5Y27j16XR4Uzs28CMf3dAk9zDFUGS4RqpFe6EkefaUz5YBqtMjTapkw7FdTf6L28iD9Lovt6w",
  "key24": "5fLUnTUYZ4n12QPXzfshuF8FdgrQn58oh9WLRaNuBTM7d8KxiueWwzMmhrByLsrW7UfMvKx3ZyB45EP4b5yfLwM1",
  "key25": "L3tRofsyB1K9d8akrqr8pysrV3AxFiH9niXSS6TMGfSDsvUmt3F3mR7XBnK4yA55jBQBpbHVLZYoZ1DVXmXeN39",
  "key26": "2hwyzkmWsCDpEmKEgHrm21G7rrU5AmmPT1tn2tgiN2Ry3uv9LSAvvgnSD8DzxworbuhL7MZDwCP7pMVrfU4r4xN7"
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
