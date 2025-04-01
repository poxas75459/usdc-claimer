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
    "F5AirdNutUgqkGyTbdVvUFCFxMw9rT8r3wojMcrDxUUQ2yJrR7KW1npkn3v5dP4VPKJqhYVuJScB4oHKbvVQ9Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dCZ3vacnx2fVW1xmaQaHupcKiyqYMGyD8CPN1xku1EvWYWUCn92jyCWU31HQSpoBXDM3cFGAhZ71sWtBuFzxSek",
  "key1": "6c1khL64BgE6gSJWCWkrR61qaTP8qFTsEcCKFwGKygqzZPrLXG57nScCPaasZ3axjHtGzQ3VoFEXBfqi8anQ68A",
  "key2": "2JScuCJ9NNfcEbqPvsMc6u1fqX85TbX3EtXVtMfGs6gHs6DktFXTKAgE9gGmCcJrm7B2FekfxtF3ojaC1EPidrn7",
  "key3": "5qmjfPSy7cfPZSjk4Tm7uQgfrHoww2rkBpus8HPRgnfCCbJqfTjZ9ZmrPjhbKTG5ZFJcKyhfcX7yH57A1pHMh3sJ",
  "key4": "5uvSU8MzMH7U7kLatb93dA3L967XNPxE53sUgj1MgtC5VaZi9t7UXcNaXb7JG5xo6jJjbghurF6ZuyfJ9xJFwyMJ",
  "key5": "5rqj3DjSDoHvMCoq631FVfVuP3DSmw75y2G7p5LmuFpSHaAU7QrvdQLrZH2ZPo2Pgrami4LeRtSqktXLn6Nfb2Nf",
  "key6": "25CAHDtmGH1rNKFs6VXZmyBi19CzFaBwAUng6ffpSZjBvyoxTnSTDFRJGbrSoiAgYmtAkdFtpYWLp81Rgdn8UMkS",
  "key7": "3qDF7KaXLpdsLUctYgpkXt2GrPhN6fzoCM7ghvZ8sBX7ewvmQjT1TgvYFMgcCrQhen6KSoBGuHgaktB531ikXo3U",
  "key8": "33DXgwuDddfutsB86rr5oUoRpDB5TwcbVSLMn5nencg7cP4BFVQFs9gEmjKfNS31FkEXTu4au7Fwmi5TXJ8mucau",
  "key9": "5sJjXbcnNm2qpFp7tS1uH2rsiX5LsiT6BjG8soGN6qWvSg3pRnWo5rRg6K7dMu9ATBXuKvrUgspLaWmnJpPT4cKj",
  "key10": "3ejWyXgNxjnbGDK4SBUUUnRfuVoxR2QqXaEf9GzqELonEBK8UHhJMrHikzuKskvm8k95ELy9w8XATHH9p1QT7KTV",
  "key11": "5oPr5DRTHAyGKpvz2KQuNTcrh5y4nUUN2crsyC7aTpgzmENvTAmZFfx3vYRajn5r7yAe3fBRinKLysUyM8C7EZo3",
  "key12": "5VnFGzEBtohyVuornPwdYn9Z13ZPECrbZu5QxuYnCRm5gpmZ3sEGeAZiYEJ7e4NjQsda2jhEhkYQ2ApWBSYSH1VZ",
  "key13": "5Byr1CWeZF3PeZHnQ3WnHeh2jnebP2DGPLdaBTjNyvzyrFmEgvSne3q6efMEMHxVszsVn8iTDVtQNUC4cJzKnpp5",
  "key14": "aGkhwaPpBDLm4K9oAHCXcZV71xfz71hby6wmNapv8Ytc7NLidYDNVWno983J9oTZzEYHYjmxrUdqc7p8Zazar8w",
  "key15": "63P3ghT6uue2ZneKf3cL5xMYZF6ixH8J2j2oAegjZ3X1FDFuwHpHjRo9qcfXCHrjZxWfwegoZr9jCvzewkEvvJM2",
  "key16": "5cSQxfiAbekhArfDbW9hcmDaMAM51EvAnyA5ejyDK3xb2naFm6TLgs31FnHjbnFAboAQSgK5GEBhHhDeQAKnHoot",
  "key17": "4aeqEgz72iryZE1k7677cQzSCrBGP7dW5PeXnXd9WrxsvxYw4pyuiGBXr3ySi4MxKWp5VZQEHiPDhJvYcukh8yKm",
  "key18": "5qe5U2TiX19YbNQLtwUKZc6vuN9qCA7iKyqE7oeUk9qhAQLq174fkd7zMiStiNTThfnTsncVamVrsW96q7uUJimX",
  "key19": "3xPPRgqWUTetrtfH9edLzSUqXNYQPz8vkrWXkvswMTVXAKCioHQnahoBK5Zu8g9r9bnwQdCN7R6gfbi6HSA1SHfQ",
  "key20": "4N5juPh6q5DD3aWrQ1TWj2fL62cW4QghxiDrm8gXmkbUYGntMPpHXESe95JxBYXw1bgeaRBkd6H8L1HivVyKskvz",
  "key21": "8AyEzVc9d98NmZCDg9b2Vbt5udCkWQSy6Y9uBSW6bwd6kRXwSreBWZopm4r3Ejc1MaUC2Fq4TWBn6ifgXCateCR",
  "key22": "2GyHA9byBnXMstGiZXjqRNaGWmFB47yhrmzFvYq3cB1QwNfci36rE4SggRWmvzPzypdwRSKkgRCrng1ahYHhmdF7",
  "key23": "3EWCXgZYLh3XsPTjJujgdeY24oGJmK2uvuvA4kiJBJkcvWxApoMjw6SdkjV137e4WFq8fe4S71RQgEuh8qywdhFB",
  "key24": "4GiDtcGcbMVgp8yfo2AK9WFhzqYkieJNSY2yEUZmNnUjt3Q9GAwsnZb9oZdsUWmfgDspHZoJQoQTT8yjm3MjL2oW",
  "key25": "2mhqJKJzgNEBFgDqLnex2CyxoS9NQKEByePtBnjjkPGjcyGhUYQ1eHG7rbrGmcyXMZr2Q78yhFbzSaENvLn8ctHp",
  "key26": "2MkibMhkCp3zGVJJVUKCTLkXCbJceKUZ5mJMRkM9JWkdBXwkw3KE3XLQk22d5wiebr9TABX677gtaTBo9E6iLihY"
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
