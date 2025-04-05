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
    "3j8YGdkqjEaBeoyiWUrzWNXUVTHYAKATaqANUzujKM6gEs1A8AWfsmZH65RJM3CDC9P9qoTvzWZ6X3WddATXWf3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UQzLR35DBeLDf9Yg3xVFvimnVQ6cwwwzN3sMsd3abYRGGSgJNMZ6EUJijSM1sUtwAo5mH1Qwtihr84Zk9EJt51V",
  "key1": "5Wo46Gatkjttxkr8nbHPTeT4mcbWxQfCWfPEncdSDRWYPUxPsT5koqyMK4oV7Ud4VpL9z8xmCqELJUtnoVbctfLw",
  "key2": "2Z3fG5v2vAnTwWbQDQeV9MdTCw5SyHMKxHLtN78Q6PoEJS5iWxsWxqRm2GfNp4PeQXdHHSfowuQoGi7AjepqUf1Z",
  "key3": "5riBPbKrKUykYuDLj4vbZTtJzQ1bBkaZtKwqRJwz32eXavQF8dJqFwYY4Zs6Xw1pvvFjmBJo3b71MKPoUUa7wRaM",
  "key4": "MsXmEMVEU8w1DMmsXbwdfBJMkohiDh1CoJXHfzGS7ETjCb8eGvnNa6u725g5YVsMZgJ2VsbNzQXz3H68twkpYuc",
  "key5": "5guTZkRXV8WFE7WMyUmMeEyoG8G2Drt9ia4yMbjPeEaRhcdhnaabetF32CkTZbcN9nK5DiqPWZP2j7p9YWTChrSC",
  "key6": "s3YMQ3WkHXNxFWBsVCzJmS3KRyZFZYqPbtkgWb58Ud17MiVzB2fcwCausG6FBb79EPQpDjq54ybEpq9panwx3r9",
  "key7": "4Sy6gMd7tbfa8UMaqx6zGifRqpLAWbhK9QaFcx1ByTYHk4ZMifFyzdHYfREzuP5PnTRmTaTRDwBHkxpb4WV98Gzs",
  "key8": "svRoTG2oEUMBjHzpe4A62UYL8Fq5LPJZya9iy99PWm2WuaE8K4fPE2foUcpfm62vzWvFaBovwBtwyK6ptYfoWjT",
  "key9": "25Po49TPhYFztmVeAPu4f2RyYx9V6vPzTU9dXU5xjwUouViBCTc7mYEj7Yi3igSiwMPKZFvRMpSDojgJQ6AvAStt",
  "key10": "eAow1v2MWuvM5Zgynpv4cURAVbfLHC7XHMYv8fkkuPMXB2LynBVHywMGeCHF9Jk7UdQNyeJyXafkctEFu8H6TH8",
  "key11": "3faKGTLJs9pj4LE8PneM9TmYcqK17PR6yrqaxv25JFnqjgDUzAyCJVNJHtBEtPcMqMrSkQ1DV1jKyCnARzEwANdH",
  "key12": "cQLfweqMPYccro5pUT19jhFJHvG6TMHgR9anY2yFQMm2RDvKn6tcYrpxHUqjeCnYwc3FzjsoiAjG2ei8GP1Vv4s",
  "key13": "5mcN5dac5cwBUFZrYL5jqhW7GA3Wygi549aVKLW72Uqzct1HQUCbZz9cFtJJGrsdTvKW3mwayaRk1qQbLr2iVz6k",
  "key14": "2AgJbvoEzrs7Wy4hazfLhTcAKzvPFseqVZa2aLo4BG4xhMghBg6hDc4KUPK6LxmQ4Qq1YoMFsARyDGGCEQpUSPAU",
  "key15": "2kBfU2ad5NVsXz3STZ1aChBYiFJSiF8yqrDvtzrfZXhKHgwwfQQgBu38NmWMWxfcBvNQAoAcLbPB2mjFgVqw44mD",
  "key16": "4HX7PeAhDd6xCycBuctDjUopc6a3FCfLBB4NbvjAA45PTxRrh9ug95JnYq8zkitV2fT23osLAuApDeRJMXk7L6i9",
  "key17": "3dZfkFdLQ5g4aKrfh2ecxLbJMAGn64Q4LePMciS2ciTohUH5k4Dmq8S15qUkugTTKKN5rBNXt5LVA8RFkZbDDkha",
  "key18": "2W6wZTsMVEnoHFQVntiaUmj2ANj72BvgE9nFbkvShWMHBhVHuJFRjqjffYWqfA8XKCbbYGX9pZAygwNw8fYNC4Sh",
  "key19": "52CbvxVv1PDPMxSF7q7nCzBdtvvD3DE33r7K3U6gYK33AYFDK2Tw3FgrwYRfWZ4pPggW5kFU1sErfawqWJZJsvmW",
  "key20": "4nnroMbhL6wCmyFYwcqWiWiUGirEqXCzQwMFbZ9vudiWuJypqKwnXkhBVdJCMM3urPyBVsqciPeYT4XG7Y153rqP",
  "key21": "49NJLhE1YA5gTHXKnKX1NEkS5gFhkoZnTcCwDZgnA4KSPsTddDbmq61ECr6A7DWRapc4hvZGES4pdc31jzQunnZD",
  "key22": "J2dyd3uTysqTHWgT2gzEwVLQr7ZwHHDR1EowzXfNnTDcHG6NS2MsJDUjDZrKjyCPUNWgjhApkfrhAyumN3urjHg",
  "key23": "4dA2DwUUQvU5A7Cw8kBVZ1xS8rkXcvxnwJ8KcNMgZVxaLpsHexviMx2QvVPu1hwCGbb7zda5MHkZz9ryr2JNuzhQ",
  "key24": "3jSc9n3vtrtBmCjogsTBbLWQ5CfoZZkt8AzqWLdxcFgD35Z5ouDnFJcTV98J4G3JRkGWj1hnt6e1riNp62A7iWfP",
  "key25": "Yepnuq4QbQsX84rHA7j8xkhem3aFKNW77HxCzG6AL7PUrwkGU8YFwYFpKT9BVwge8REsExVoXiWKuX8Le8D1w3Y",
  "key26": "xo7mmX3KCvBehAVEb8YEsPRyg9H6oy9aCn9MKRBXwcWwyQ71YPRYMet4XFrLQ1ouiZQ7dXuSEYmafVGhJXmtTaU",
  "key27": "4DCWoRR4DLpdiJETfimmUsV1jhSpZWL9T7LCWCWeN2gN3nVyjzzXTHqMLXxPAMfgAuuaesEAGbMafNWeUvc75Gr1"
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
