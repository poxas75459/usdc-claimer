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
    "5XYSewyi1pS5BYkvdRad4LC5WraJFSh2U5bZ45za6Hf1sarA2nkcrsEmM8AvhY1UiUqfQFiHZc5iBFSBvF68taBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCumUn5qZ847rrY31aSfZCvnteNX7Lf5J2Fsj76dciqcVyszYQV4cnHPXodpD5Gx6J3pncXoFWEnigkFqowRi2L",
  "key1": "4SBhsXC153R2UMdSowcsckCuRLn4ZknLFpxHdyq36mAFbvbbKvWQQWzdnrwJPp3hT8GvbRk6UVXyhjEsKKmSTr1E",
  "key2": "2V1kSycU2cafRQvkBdKvPDtoyg1sQVmUVtqTGEvVtF8kSpQZaxFPkxqeJ3K4qkKUwtHV7re5XnXM9Y7xVMaUYCGk",
  "key3": "CGPKWgZLn8Ee4KmLcwZck7sN9VZPEbLH6ZSXvsgRAMQWinfEAUWmqTyUBzr2qYqJ8UBbd83Z7DwhrvKvjvAmVbw",
  "key4": "56uKasWoBF3ayLjQqQTwLoZobeuzA4B3p7CQU6MzJXgiw1vecvK1mpL4EZpTWjGBfgkVvaAeibBaWLFicrWn7zHn",
  "key5": "3DxuD4e8Kf3JLXSdkFrHwPUPRvcxHrXxNYGLo52vrf9kgUaUwVB8Tis7P8Uo7sq5Hg7YNVqdSLKDoivFWviiB6Gw",
  "key6": "4ZWWU26VZEnjYTzTC5LirgLA6dZFSi3VWVDNwxvoDgPg8VHvXkrEz7QoZxkuazbqxyBDjXr5HnHSjMfQYLFqTiNC",
  "key7": "3UbXAaww7WwV9DyHh8t1URviem4euDb26nyYMyk9bXVHHP8fzg6WiEKnY83XTUAfvuct1aaHC38mNfvBieSLEYqg",
  "key8": "2ADzxXmcosXF8iDRLFfYeo8qQdbLPR6BrP6xGnoZHjfjW6VssYDTgVzpvMRXd13qiqohYfTzE5Z4uZV2sDmaq7e8",
  "key9": "4DfXCXt3iF6YtZWnEprtYXwvaEZfPoVDtbC8VM6gHxfBSMrvtmwXiELeeUzpFeNoUxLf6iTiTzt1kRsgwDaxSLum",
  "key10": "4L2z3PrSi7EzkfmzBtaJvJEts4zZedJSgLL5JLVntBQj8S8xCcAfNqQw91PCDc9dQ7JNrUrR59Ys5W474pvfkJ3A",
  "key11": "Bx4n45n8Y9wFHw1k2jn8i7GWUwrEYkfMD2DH3ELoDPnESpCXJArp6wfHdLLCjF35oqhGihDQjTmTydG1LhshhJ9",
  "key12": "3yKAxm37oBkbTpyHPJ91AEJokpGwM97zcqQQSFJUsg3TPt31XRuJWDHZU32WbM6GfxW3G6EdKWgia4uidBTMYrq3",
  "key13": "4ahXHyk39Q24MeUkz5RwHM8AiCcE1xJuBmSK8rmvW7djTv26XZLUz7yoPrunmfiTuZcyz5y4rkJCnSHeF4mMnGgE",
  "key14": "HN3XmRviD7iEJGfZMgkJKwPieu6Ty2syoz273RjosNmFHEwZ6FNUmLjPJhc2BV1teDMHrXU7JMAQaAeWK53CmfZ",
  "key15": "4ajRbnAkANz1ryT3ZJghL1ogWfDJBhGcQBBAe5My4j2jukB6Ep9Gk8BJk4jrWC9CDbqMBoDUXAj8VxPyrtsdueQP",
  "key16": "2ouqU5WD7wTKBWErd4uooTspwbJM6Mp12mRawwDRFEqbXxCAW6D2E5iJt51CKwYhAjh5tUtdUFSkdA6NdUjpFTUj",
  "key17": "sVWEvhcCuSWRMH28x7T6bPvJQGs4yumpWV7SZt5RFLMy3rRfdvfM3nx2iZLeoBe19z5yksxYf4umvXC5ZdXQw8e",
  "key18": "2Vp7ShKqoAk6DAJwRAELM4b1TqYc4YJmVQjJWD3xeC24ZCrGKrNLeSvB4JCYEsLPpum2Y1EixEManxoHjqKnuEsr",
  "key19": "59Co3ZtVDF8jv6Cn7wubrwF7QyqEnh2cufKqb7QPeh8Bs6Gmu8UXD17G1MQH5gJcu78p6Spd1DKfB8vUDCkis5jV",
  "key20": "6nYDJPLf1KPH3qZd6exP8fJrUSmrbDqAcq3XH5zKEZGkhZyABYgdj7eeFjReombAsKnjiWijG2gV6iYf2G9zMGr",
  "key21": "ibGvUwGziQxBxrmF4mjYDNSjZktHGbWTSKzeYAnsEDSaBDcypp7ngKPaqLkTgmrE21KQrV3AnLQaehJ7eYvXtQy",
  "key22": "36F73PeRKuhAAPJFnSEyikoyEktrTLhqFkq5x7ud2DNnKqdnrZj9Tg9JRZhyoQPBvx3tj83DShzvhkJ5Gib2owi8",
  "key23": "4iX8xPQwsGytAoT4reLhncSrcU2P63DYNSNbmtdQ4ac13anvJPUrQ1rAkpkJr9nWKEdKQXycoQUwSX1UdBPbE7bp",
  "key24": "3Kemf6XBpxwbMCvp1itbLLUKdyDFKGc59WRkVjJedrYJEegM13PUDog9FQmn7SrsJray57bhmryKdQBios9VNcqa",
  "key25": "4zbE8d1t8D69mNSo3fCngRqxkKH1QwATmanUxaGaed5vPVigLWYD3YDkYoZaNg3rz4YexL5ZtUkHjvBr5zj9YCoj",
  "key26": "41ySBuKVv3RyG3CvdCBTRkSA8yUYThtKj688GJdF5NdMToig23xPLbzxUXDGYA2n9rmEAjUVJVCrneodfZpXYJcH"
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
