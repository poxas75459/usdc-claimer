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
    "39J9eksJHXKFAJDwBXFNRo2E4KysLge1HrVC9FgA3FJruuqomwPA3p8HVG7Jsg8gZPxsor7GYMk4EawkRCMZWDEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YSfFT2t86CeakZevo8mBHawj4GXyA3TuMfVB2gsAPV9FG5Z31UhM6PvQYCkEBy32BY9vFH9yojgGjk34RNYrZch",
  "key1": "372HDhQZkKNx82ZnAiRoFAueTDqE7dSEgUKCw6nZ3NNW9aJe5hmLVZnbhU5aoRBj4jwkTu6Agu1cVufc9cNeD8wa",
  "key2": "m7BZFmmHCFWQVirZiFkKX3jG9QDj6iYtfXfzEn1B6rdJroGdFFGmZATxt23d3rDaUckejMFvdhGvmtxCa7yj94B",
  "key3": "3RnZQnUvZY2NjvnwqyUFcPzXz6oSgAg7LzJvcBLJnQM7jXV2RM7d5YUaRGff6qL5gC2YMmSPZCxExJUKc8za4CUd",
  "key4": "4TSUcPJGWfsXWV2ML6zbgjNaW2TH7MhtPaV6ar2TZ8H5HtoXcqXZGhfmEFrx6m7QMzyAabXfHGLkxDHgKGPvwtx4",
  "key5": "jBfHgpYHpbHPuE3GQR1GqcBVMnWS5Yza5LRWgMvuQA9zGT5KM8F5oTajJ8gTrNEHysge74ZHpLRiACNRFiwHuzK",
  "key6": "5nzp2ZVai7ExMUxzzQBDp5hPe1CREJC4y9hy8Lo8KzMc9gAVhy36rgQDGSrMuPJUTRCAd5PT7zsZyfMv42DJaPRy",
  "key7": "5MAmeJSCULXLJFPJwhgZELVxZ7zwMAJ3h9k3EMNv3pTg7jsNhSN2eF1LJkoCWm8f2T5R4c8TXohHE8cy6oeMouWi",
  "key8": "56e9eTZvDARmspz6M3DWpSwkuDSuZsYE5paR84iY8diDEq9SSGEYDu83zRKziuZ8Fhf8fEboa5nPZbL9TczymmLb",
  "key9": "5mT5Cr8uAeoe46xR5vEsWcVTTBHErpTiSS1C1afW2FLKfCWwLB68fPg6eBVJ94DdVrhr6e9AbvyaKX4d5oQBpMWG",
  "key10": "5B5n2bfZHNEmy2mK27AJu67wh8CeXePgaF7XEYQ6tNzHZ5BGoZfCEUTmTWKijU5YdrUBgxJdK7oAipJ8aUampLhG",
  "key11": "56SV1wbaWMeHfijTDp9F47MehLRJN2uhUp2hHPTDpje6PTieZ94VDHN8HrY7ddNkqzC2LUnrA5zthZqDoYXpZ8vn",
  "key12": "63BVymSJ8LtiDC8jtbyszTCkSWmzLYn6y973W4ctbUfWooGq2ipD1ZVJZFpnyzPzkpea5vJjAQwbyzZQEqiGkYF9",
  "key13": "3fn2YXrRn8zGWkYVoZia6n64iptWJHVTd1PfiMsRQXFxuy7eVF6s2ySMCLqG1ryWifa1L98T3r1Fi6XSESQgdgkv",
  "key14": "hbeFanzmnhkmqR6cbEwUSEG7ArDxkat8R4Q6Haecp8kLRUyidFbf38svJ8KbMjvvKCMN8AsbByzioMgtuuTR5PU",
  "key15": "4PhgMFgeckAa9J12ek94X5Q3uzSm8WwfWShW1kM5oxLYxZNb4xHXtRScn9muorcS3KWaWaHSxqw6pmTiskEgyV42",
  "key16": "2nA9pWgJkt399thLXBU77pZjPkvHySkzosBcXydibVjoMC3G1xxnBcsnDAVyNhoTLraeZkUGyR8t2hBEfReZP6sy",
  "key17": "2D6WZPTSyDGJtwrRWvdkXc3Mv2KYtXtwE5b8S5ZCdJp4STmRb5auBNdd96Rk7V1rbuG7a21qnC3pGWfQVCFS2eS1",
  "key18": "3hsrmGQKRNR5BCMWuQKxt6BrKrUMcFDmDP7KYjWyR8q6D68Y29g9pPD8JQ8ae6GYAxJWEuatUTnaQoWBBY534QS8",
  "key19": "5XgzdUfhsp6mGna6LjHjaG8a6zxX1Nmd5TRHQzpNrJq46ZGEK5yGHjsGLAMPxAegU7S7wKMHo1Diwb2sUHLVk2mv",
  "key20": "2TJ7diUar1mA3gbQwC9hgXXD7BRbrKWWyfB4epDo5zahajebYEgbsuU9dg1TqPw9FbAn4huYzMstQAMGq5XDn66J",
  "key21": "5hWYiQrJY2HMcZJXsKNU9UGAZxGJ8oX1dChus8XKAUuDcerngjvC2RT3ooiKvpaW2vrhCPbYPGXd6LsebcdyF5Tm",
  "key22": "4ron6p4LUgsaBHZHPfZtU3b3GuZRpu8RPCeCxR5pF2yGuNtBuCPtZEGgWPwTewCA94m6j66NALVNu7Ans5dLUVC2",
  "key23": "26is9JkZxtCtExkV6gCarLzjLyYTQQd913eQBTfT9JfLPhyfcxrza1G9QgsFvwk5ER8JG9fGvX6BE3QoW3uCqpKK",
  "key24": "PedAJc4tysPibzeRNBjw8PsPBWtfLBcESRCLiG8eCKrtfCMdQk3cH5xHyfuwymyRhjVXunnGZod8mndVphZUmDt",
  "key25": "SKrcK5q8gcXHFysSeUqNZksbQUH3xB26z7cbfexgWgwgSFSxpJqNGXFj8svH9jiLB9GhWtxZC2EG9f2QxEqzsyF",
  "key26": "2NrHv3muA8w4Lepp7YVz6NNhzduQVREmwTxwF5gkyfo79tX6xvrX3qNk3jmVFPGULBHAHjTXf7QTn8nyzGgQirpi"
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
