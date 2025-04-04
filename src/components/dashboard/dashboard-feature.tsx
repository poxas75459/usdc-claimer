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
    "4HxsEBuHcpB9BrFVZ1b1HEPvQN1ZGwJmkVXgmUg6e5B3o7yArvm9EfAKMpoGiskkJSmmun2EJp42zav8bsCRkbsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUuZyX3ACi5uGnULEQNGcUN4wdu5Ke2EwRreH2BWHUeEABqrdEvQ1GznRDhUwCijNYPLKRSrHxcvG5gwzLLfK7P",
  "key1": "46mZT9N3nffBKP5cFz4LoyzXwb5T9usuCdbdKWGhYmziwKGNRBbSMCrGnVzSQvXFr8y9zYvfiC9hsNMp9ukyxutj",
  "key2": "2hiZaFPCFHWKVExxS6XATT3EU3YHDw2UBatqEe7v9T9Y29qvhnSg9HAgqafVaBqCtnHpxQS6TzWo8SFqiNSNEXiH",
  "key3": "38S18aPQehdQsF5rzSVKDw66E47BfYZ36ob656tgztCCEARhhhaosT5mwuT7pwwkk1rfrDkro4QpeFnfPpWrnzgx",
  "key4": "5brkWF4Sn5SRRGFAoipbBHaH5vj8ypRtU58vzHEBUgA7i1xXBpPLEYTLM2SgiM6z5SS1g5D37pytHniteQRK5PYH",
  "key5": "3dmcDc3MVae4gWhmgCNoRh4uUHvL599tqWkusXG77PpKyM7jgS8vRyoiioWrysVCGyeWkBNAaWk8GgoKfPe5qZao",
  "key6": "2R7ea5D7FomBXmzQFqLMwDxkaV8PgnQCVRucTrsZ8buXRvyqA54ZPRxgmok9UiTn4fXbBh93tCnxcvetkfCKwcAj",
  "key7": "2gFceGAN6oDRKzXhMSbtvpbuE71QnYgdsxAeQ7PDAL3kg9x7khR7MxR13o8YySHLpjKs11k59wvCSc4z4HgFBU8Y",
  "key8": "2nXp29udqgqTscJV479gZMoVWosrLCHbp6wNy2yfUMVqJW2WMZGYssMYQBFk5o1c9hJPp3JiKGspszvXAAfVNkFa",
  "key9": "5ydSq5kZXpYcQXb9JPcZ48m1C5ic4zZLphardJAW8H9d38mYZucFyEK2Hwm11PnLzpc5Ue9t5chuvqebhRDeR2T3",
  "key10": "24L9azW8iMxh8F2UgCEci9ca9WEBRbYAED4KMoahGWPne9Rxvcs6YKDqoTfwoFyTWUf3bNv1YqdYKbf2pdvcghE2",
  "key11": "5Z6t9Xx738od4A7dGU1DGHUYmRmRrVk79rqHHVhibw6xgdgxPiMTe7kY5SoDdr5YkGs16yrdoi1KzFHRSpvCGycF",
  "key12": "5YGyiXfQoFf9Kpe46rFFSfV7UyntHw61ZbdwPe5F9usfJpZW3m7epmYY6f1DisFxzXo7VDVcf6gvWgJ4mDqXELtW",
  "key13": "5znvFCojoWdZHSewewWihG86xy4XZ6bDxVUZat9bFgHBhM2U68WBrTRi1MjFxeK5dkGK4jPmYQua5G448bZyy3fp",
  "key14": "5BRBQj4MCwfTWwxHQpe1yJxJHGkt7Rec5FwxgrG6z1Vc7TqpxcYgWWATdGTTp76c4A42Aiersd23wqei5UT1eN6C",
  "key15": "4LDdpDRDU7eepfS9AGTk9tMfim1ujq3iGYiQFCpaaUJQy9mGoEu8FCPxiyM4yoNcvViXNUC2yP9srH1kCUzRPwba",
  "key16": "5DHEHh8cKvqB6J3opJwLpLmbEbWN9qQPAZ8m4DKpRzoFFCPW9uWGf5DdHnmsQ89FRY49wtZ9K9HMH5Bbd7Y4MceP",
  "key17": "481xHGCidSokVVqDBnkrPRMD6HXQhKMA6M58iP3CMCPEiXZPzqoNbafcxCaL666kP8RG3xb2qq4XPCEYYLPwok6d",
  "key18": "4FTAbadbEW9afVwFbRXNgWRwxn2izA99MPo7n3oxiSN7Q683pzYuiLkwyG7fbMRtpii3NbiUoCcn66v4ktzmDtWD",
  "key19": "uvoq8eYrswC5sheN58BsBrm2V9yBuwekqnBVcrDGMpoXZs17SVjb8SPbkSU734JjgQYzQY1Smsv1oHzMio9gRni",
  "key20": "5uigL7HxDYo4SxUzfyR7v6bRerpgWMYxfXukrrJECC4dascUpcNcj1xPP8rE9uD3QK72czgp7omeeGCMuaVxT9Ns",
  "key21": "5AmjL3tfyYVPsn54t24AAy9DdQgC7WTtNsM8cLJCBBw2V18ero61qH4cqhJmALbXBeyoSdsHjCXfRqyjnju9Fsqw",
  "key22": "51R1AHfkJXsfMoiBtqBQQS5PyhnDYTJVf6FfC81zorox9aotB6kUZHngvFVoBG84gmwGpniwKSfbd7TpfbprwnaS",
  "key23": "5HUrbvkPKdmmSid6SruJsVzcKPLb2ys119u3jH4yqkAtqQURQXXrBoQaGzTyqfAQrJMdyBCweHA91U5rjBdcHXKP",
  "key24": "3acW9WR4Eutuy8QYx7nQfZyz4j5q2c3Xk7EeChb921nLCY1XzSgYkpq2c5du2VQKKjWFZ97aJ59WgD9TTRYUpJij",
  "key25": "4PhygnFU6FaP5Turd8xwuWqaY3kcFokN4aYEcd6jXhPrexkvzfy6WZX4GALLkNiQwH3FqezfUseGCDmDry29fLpi"
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
