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
    "3YwrnWzifyrXDQzbJcttmsEejZLhLLZQchEd8nQNkR9dTDKfRZPSGk4LnwsAvrYKvSuNLTy5G1e68qByaw7mHhtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Ct2u1JDLwSacMvS8NHJLuEfE7VRYWn7HmiweMfvNU96qNbMi6dsLCkNqVqnmSdVNCtUCQn4zt9qZ6UEMq8vprX",
  "key1": "f2ZW4KS2Rp92Twu94w8uwu9xG46cb5SUXCT6HAmXmt8MpcCqopNUsDFJgyoqefDFxr6uHGmzwcZFJYm5tt7NSHv",
  "key2": "4LdTtnE8GVG3wtZsUpbRsbhajTzyhboFzh7K5BRCq5RFD1ZK138F4j4Jj6LKuizzhyVYLMPKCZ4ApBUBUvJjovnu",
  "key3": "22vDg8gci9wvEPoTBgcuDfdqrbt2qFrTPXHyEkgN3r6WJtEhyWkV65dKeimND8CVvwtw3vMwj8QGV2zHLeYFg2sU",
  "key4": "57d7m4ZmgYjfj2BXMuSkwA2kcJxFGx75LBns4NetCznX6R8yVQe9Y27AqEm6bPzfmxApxLfm6r7CEhZ2451fvveW",
  "key5": "28ZjHhZWUo2skJUrL5eXhK4HZaz9SbKZfPLLapCFZt159z2B5PVBggi8W6mBS3zeFMJFJVtVzg4xxLjxW3L9tbKj",
  "key6": "5GmVDjRba3bZ4cbCmiEJwkGEebxo1cyrcWgAgudR4eyvHoriTQhLCZCxgptCoL3GgkiErr3wXoMSnvzyq8syYxGY",
  "key7": "2jpdXEeYK3MVzNEQcMQsZ53F8A3bF1YVE2k5vG7z1pZtAE8tDUoYBtsnWxL92n3VpL6aTeuneC4PtojsM2Pz9Aaz",
  "key8": "3jtLKL3y8Ehz7R92EsggYTZXTM8MYiJGnd7rodXzu2ey88C9rEMxz3MoCnWxcyjBdB5M2VoLDDAXBN8s9TL65eKN",
  "key9": "5ED14EZeEWDDKQq9dx1J3RoV6BVAG5KRCNa92VbHtsqkrRC3NG4q9cLPFDLYNcB1P9MvrnLWiMBCBPy9AKExxhHE",
  "key10": "4u6PzXgTW3dME8uvupxrGPZWjnYykdBrDMUwLrWFTFXREEvjJeRFmAU3BQLJb66651mQGZSw7rLX2mvHgrK6Hdj7",
  "key11": "3jKDwVCtmPeMWUaK2f9umZpjqCkN6vT5CnUzY18TEa7BBohemCYyZQQbJKjX33RAVyUsxggJkLUpw11TwprHgoKX",
  "key12": "52MgWuCCdtjgJ19QJ2qZCgRDeeWeoHypq7NcEffNox8qQUwhGYhQFiBVUg2NkV4q2mULtMRn1qBGyck5Zg21rrW4",
  "key13": "4rpZiGtDvjDicCz21qLWskm4MxcJrQ5eZnUWDi5y7i3XnZMt8kMJaX7CETkUrk3XNJRGgfR2rfqwTnbVzTWrksoS",
  "key14": "3KsgBhZMw6gKezAagfJLxiwv2yQ29kpy2TmxJyihuYhtFN7fj1iiSx8TJXzDzBPrpSwPYjUDKbwcuhHsNP6bPWMU",
  "key15": "5NeGkYGb1WzoDeD6RFf5TE8D8bH8cxjusuU8FYyeVUbkqdnQ8uUAaCWENdN3czSUXmRnTTu5sSSqnNkS75F4KGap",
  "key16": "Gvys2B5A9NJvxsi46o2GvvguBGYnB3ycezYBTK9owpamBAyJNY6QxzhfmDiwNyKmNCzgPKnr1MzgN4qwcjdzsRv",
  "key17": "2UbkjzyZAntEtcw6L72RDLsAaL2x3cxywfBfqdGsA9WyZrhnRa57GU6TGVF49Ym1YD4rqV4jNfRVRZWtdAbcTihH",
  "key18": "37pV7myaZmWjQx3JnWGv26wiY2oxqJPXmYQmzk6hPepsEetHe2HX2k13ZZxA7Zg5LYu8PGxEUSJJFRk8ZQ7hHRHw",
  "key19": "5cWfejBrudmyXiAitutTnY1znCY3BEKLk7qEQFT2rDfG1GpTDYQhqustHSqf5Q7PpaLE8Yze6vfVb7n8PAFaRQMH",
  "key20": "43555e249osb3x9BjUKK6wtPm2UY9wEuPfb3nRtt8RVuc91PjCErbsNCFtcR5KzNpyHxRsbrdjSGTQdpAiby9ZcJ",
  "key21": "3KLawqz7xFcKN1PyxNSn8kduMuUdmhxu5D9C9Z2tDEeHspimBFgN7oCEJz2aSD5tXABndNm9cV25tmq9hstSQUyD",
  "key22": "3Ayd4yDkSQ6zg1Y8tktDaVJsbm2eoDCcmUYER16so7V8kAY9fVUavGLinph3EsvhwyZRMFcC6uhLjUHuaXLNrxPy",
  "key23": "5nmkwwwWU3jJsKFu5Q5k3DKdDzpF7dq462tHLU2oGoUCg2XgaAsNXcEYscYW5NQZua8BrSBn1nEitvhnQjdBhaQF",
  "key24": "3goBPcZLsRBKeAoHZXWGMehE7KdH4bsStYrxkozBHDaoj5ooZB6qDr54ZNXncqRMnC1FRcsvbUkCkMd4iSJnLorq"
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
