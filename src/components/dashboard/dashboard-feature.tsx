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
    "2n3kDZihpnkdZGQrcsNbdQgEE68waaAVMFCyFDLCumEeLdw9f4NsiDuZYpPfJK8bk4xJqWhhsvsMPhYnnxbcBPnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jNUNmdgps2tBLexGW3Kf3bAXAvycsm4iLAWBVcGC97wXbPeKeWD6gT8NBuYwWtPX4U3fMcB4THXjHqzrEeJs5A",
  "key1": "3hcRPGGXzhbijcAsy39DwVgm8tKD7rB4RbQTCBHse4qQac4sZr8GzqEszWR54nrWHCPGE9UQ2fB1F4HFUa2bxhdF",
  "key2": "3NGfUj4Foy23jaqcR7oQoEA75LKc95GNtESNhUFByFNZhD7oKDasnkSwLfcxqyFKGQuvAvUALr27596B5PbBRUmK",
  "key3": "4JgSnZtiAQSjNQXSKh8n6oHaU2i6azcSqAzBQRsQm6raEn67CxLAdHngbQdYeG3XYBLeYdJKLjBJQQCDJFZxGbeU",
  "key4": "5vxqkDsbs2H9LmZvWLTNYknTGp7uG6Ki7cC7w76D7mztFq86WAtP5KEcjMNMEJaHJUQh26wtUeTeo7iChDRcQYMV",
  "key5": "2tJWJ7JLZUHieS5qYddgYzmx4qbG9anGKskgrf5Z3ZfE8Fyt9DgDfNxL7WeSbZA5mNs6QV8uRsp9RcSJiUPysJ1W",
  "key6": "5tPLb5bWpmsh7NKsEoMUPpPDe99G1urzjyyByBsJbt6fxX1He4A6a63kPezMQB55oCHK66i2XnMTrcuswZJ55kyL",
  "key7": "2BsXrPApvH1krXfT5pS6DWoXGccmbZV6eR6iBXo7Fp9kZxkSLSnVguDmV6opn7VnM1fDCtx3dUPcgdvYcpzgi9Yu",
  "key8": "4erdLtVcUPbyWNvcuf1cbEqrncaLukmgSLGsQvtLCw1MSWAkrHFHRjqMiDwbhh4AfU9TYQJQMkNayExc8L6R2Q74",
  "key9": "47mtExyWydEWHbhKSkpqVvWpdZq7Ed4tbiFTiTKzjKoF5WQmnCUsvp9a4BQFNeCsF8Qxrp5YpF8mPkqaYUxweHW7",
  "key10": "4kEQSXyjJ5zoncfUeYzL3qVMoULkDn91Rm4bg9D9sK5SZ2jNQhz9sqP8kz441XemWLBufThSpS3qKfhrsRWLnzoA",
  "key11": "4aGUFRL5Q3gKQ8dtwcb4aGEcqRp157B3dvoQUHxCMhHa3R3sDsR1Saf1CBaSMLsvMYdRqhxReeix1ki5map7niFk",
  "key12": "61UYbvGYaiXmzbGLJDSzx2pV66MdC3W7SUGSDPXRvh8bM3rvCsLquhKQJAhnfdE8vrvJnPDn2cmJYjXFEQvfo7hp",
  "key13": "tzDvnPGs6JanizWa2HGEfYdThaTx6y9BDsbtSEbYb442nmwF8E6dHNWsm3P9cbbpojzfZzpJRXbdbxQEy4kKh1W",
  "key14": "41ke4544bcqBSiYZdoiWu2uhfkU4AF3sLFqC7HjWJahtSJV38hvz5jnErsdtHyXwuMsT4EggvxVr8oTmzqaWHrEy",
  "key15": "3kWk8WKznCViE19djC15M1GyH4Hq2ycqZLM2ZaUkxFRGsnVDGvcE4nDAEydQkBd2r9gtkchYnrhjMJd6mDYRoBhf",
  "key16": "u9jQFQmbtkGXd6GigzqEBFj9asWyGrjtUxSyUgvwf9KPFdFCDRnTxnotQofF6xw8PQbia6kSg6GTRWjG9N8vmTi",
  "key17": "4o5nUHRh8fcMnKc5HnJVid3ZMEMbGYyUNJVa7jd9pD7L7gbHLrNvywhvMc6VZmy1yADLmuM8w2XRFzYrkqWGZmz5",
  "key18": "2afHG1CwKCEN84aZD89D5pr2hhH2JYEjEz9EhQEfMmWe4XbMq6RCYqqyta2BdYo1rtw1iRGHZf57ymmqvcrCWgtS",
  "key19": "4aWnnqiMT53ryP4gKA45gk81R23tQQRFoe9ByLVwqg5bEau9mkpxF1SNFU9CBPDg94pUXgqfYP21ahifxLB5GiYJ",
  "key20": "5p2Mtupijpe44t49pQxUYDUCr2YuXsuud5i4UqjgNs9xxodLFu7wsZ3pTFYkF1SW5So7sHCZCevJFonuX1Tv9vU9",
  "key21": "3nXHWXeBXYYbWHtoJ5ZZbWCTEpyAHXfRsLrWtE8F75ZubYAKmrvFKLKXmj7re9BE4974hGm1UYNEkCbdbnWKGpfJ",
  "key22": "2iS7bXrtmK8U1iF7iUMaYnV58mdN3rDnTFdKMgXT2ZEMR1vDGmHAuu2TtfrJEe5abGCU7aBUY4GMTnhCkm8LT45T",
  "key23": "4cD2isgtjoQjjTfkFEigZr3DWJQsUDhyJ1YGJf74TabtsSiFhqfD14BtqMrvTV2RHt8V1EszbHa6vQ91nkQH3X1B",
  "key24": "4GTPB2zjx6Rzt5AZkYH28NU7LwRxazuyUDKyWYz34QLwmWgNRwG4JKUGQomVywbFJrUL6xoehBFbZtH7QZT1wSZv",
  "key25": "3VpWY6AfZS7KMXD7aUdLupiUfiV7oadqubm6eD1DXpUrNjki7s6oV8nWvxPKSgPFLvN7FWLcJHMEu9cHryeeErYe"
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
