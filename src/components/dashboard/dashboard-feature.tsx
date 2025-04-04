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
    "2uw5TDQ5jmXD23vb7Wt5f2PEN45HC2NKMSAUAAFaXzEkoBBLZyJ7yQZ8eASRixxJvyju8LNrHz7Vvb1AJeBna2XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8Nm8SohcKNcXwbdcqK3a1knts3Yttkw3eo2vfaRmsuXoA8bpmF4iSVuhd5vyu8qkLTQY78LxyCCxAUYKNRiXBa",
  "key1": "tAhaw8HQy1ArzY1hasEyj5H9dBQD3yVigM3JpUyqVwjwGrJMrJgbASmPeUjkBWd7xzXQzgTsgNVsCLs4KvmFa4j",
  "key2": "25nfhmjFw6r7yoi4KBLir756QoHYfHTbQxFF5g57LQRB8kz3H6ojeaMUZFNvCqAPF7EmTBzhzfoFfuJptxcUd1bd",
  "key3": "47tPNEG9ssrgZg1UoCGMvjuy62uvSsHdK1q49cziiXn4ETc5rTFbEdeikRLEMjn7EPs1LWAoeTALtszaspTyUsRX",
  "key4": "emcGtNdoDNEMuQPNLq547GmYe2sr1CnKQCeFoyR8bY5mtUHWc2debVqtv393FAUCvFdvbrLX21ZUBFRoxMzphTj",
  "key5": "uF9himR6WhZ2JuEEZhpS1pZJE1up6N95kcuE6RRtgJMKfb1s9MPwsBgUkvWi6LBhAw6CeDQExKTCixnHrtmQ3QL",
  "key6": "3PijHnW2TcRhpmcRAVhhfJAvJpUuWbhg9ks5JMDcQo4HkBGqJH9hiLh7EKuoBU5KwVDCSNDyweBpMCurjHABPYsd",
  "key7": "2TPfjcaHdH2qpqFnaX8yiuHbY2FTn3L4crqY26Ppbsp4K3usktR5J7BT6MX4KRJEXViDWDEXytpWQbwociiNwAA2",
  "key8": "2XgfgX2QVtRecPvJH69kuCZ2kVqg4T6UY4tnxmbGZumLhvhiKEesX5YkkGpi7WhkD91UAVhfuxfWfKZgt7sH5Cqq",
  "key9": "2LKTPzn6MH2wmd8DpWiFYiDzPDJ87Y5nQWfMFxgtYrxy6MkFCkwsc8dKojcDATd5FRbkUWsXVFwUwzWqdy9CHDJr",
  "key10": "P2iutQjJsxyBTJM2pF7wBpVsjQifD8nVfbXCZHe1GydTbjSyefqkDxCjtCusC1PvS5tLCkS24ZsUkWTK9j21TaL",
  "key11": "5h45kWKNcetZDM4p5eW1vZRVps4cEA6KKeD9TGhFQPp3ZkeZDm1kJofyr5cQYdrcXMSShnftzLWz29r53qmf45EM",
  "key12": "Y2CGxxsnWxcBjHuLyQRt1Xg3nrasBE7hYSpUNKcJdxdjDxk9QGNmwnxLsxQudwpzwAeuabUssP1MtuJRKzddvJi",
  "key13": "4p61HqUto8oZPowNVfYQia9P6gmoH9G7aD2im97gAg4UTHU6EWCLzEkMbjkkx2qnLDKPw3QyL1b9MxLefGhYr4GT",
  "key14": "5to1hcBPcgu2py2npRtogufd5aq4EzkyQYxJUhKNKECyfbwHfXJmiztrunASqXfcufxeSc8DBxxqxMp9DchUg9n5",
  "key15": "35PpHuZWhtBmELsyj6bW5y3v5v6jEFEcCooughaXsBMJd8b1bnxTvuJ8hD7V5NcoTZC4tXu1xqLAEezq3HbtJbmn",
  "key16": "2pgDAUPxqwp1iKYMyy4v8iCv7Qe1Koi1TmS8WegqwipcRpsxgn9uf7NSwndLuvwguZxnyBcn5jv8XkMRg24ExT2i",
  "key17": "2emZaZz5hMrhpEJLReR6WWDy4RJeqD3YQj5M4FdqNSLhie8NidpeaRYNxfHCuHeJzXtgqfeDC5haujQ1F5ip26j",
  "key18": "5bVBAosm3GFQSofruxizSCU8xh7y3wFkQngcHYoX2hTCUot6AzByCudwGeyYrSRbEvL2LU7hAXBxWEvF61yvEWNK",
  "key19": "4sAV7cKaykSfGuo16LsxB87VZF97dr9RcjKH1DbrjY8JfP7gRVxh7PZT2CXP2TkGDdJYh5U1suXkgb7JSKhGEbcn",
  "key20": "LmHLRgvTF2xHwW7Aae8mA8rjCoBqXKsRL2U4UZvrkzbw8DQQ6zDWs7dGH8NUYKMyB9ZYsquK6NZoChsQp1GGnch",
  "key21": "4zEB9eF9jL6uex8hebYrtSD1E2NE2Vkd8V9gT2t6vxD16obw5e17F6oVyDfaJ15CT43cvbsoKdt2BqbFvf6oEMCt",
  "key22": "3KNqdYta8B5aQoj37G1pLRXfqXgx8hKmn8P2XRg7dFXGiYQkTwxnUzHsnRUBgE76dxdhzuY7TqPZYMeF7tCFRkCR",
  "key23": "2zHdRHg2z8GoWdG9yUXSXQJGWHiCAXiVkyvUhfevY8mSdNB1thfVtBEj7k2qpYpwcayhjeMvAHNofi6eWSDkKFbz",
  "key24": "3tHo2PxnkGXWvsA5vDzRshz4mTGefcK593m8RUyQ6FGZwfPVirfo8me4Rzj3C9p356S7yEJJiTkVgFizviBPCDAm"
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
