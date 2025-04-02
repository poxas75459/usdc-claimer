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
    "3bCuxKjbyawDxB5opkXK2wyEnz1kcEvx8n98QxewGS49SAbiRBjEAUXQt4iF81J334TZeaN1tESU7RRzQ68jk2vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aQEP3oWoqqcPx99EUefB1mMSjtrdFRXJEM4uEoiWeAQ5kavTDZDgmBCn5aprbzmnvykiFfQmRTqHtfwdbTrMxCe",
  "key1": "5kw64yusXvtGrw2PvqmM2Pt3PAcwvHAEbAVKMuJWmbZQec4ThdGpqiaT1EN3PGNg4xqFFsGsHURDp6Jx1iGrTT5U",
  "key2": "APHMRb9dK6XczTk2vcRZCgCLQUxjt5dCEwShJ2exv7XCWSNC7YMbUs65qNtb1AgrYTjfgr61F2pTpdE8Ub9XuMS",
  "key3": "5mVncjQKw84yMeJskYoPKgmkJgnmpvGmMwapWYaL9qPN1ziSUvy2YAYNekpEwu4RKkvzySAo9oP4ii35X7NKDFZ8",
  "key4": "4Kxg4QCSnRWWLHfAwMxagqJCv7p3GAVJSVrgxmyb7FEZD8QG8R6wfkHwoBpyqs4CKKCdMaLiioQ43eeGLPGBcDXd",
  "key5": "5MXeYqqPcX1ZyCMVGYfBzbaUsB8WbicW5DNDDyZnwT6rSoTNh1JhMEkSEFtdXFZbWTNYgSWYp1fMsLBLhE7uUyvo",
  "key6": "K4YGz75gKMizQHD9udpnaJzd3K1f9uEh5GQAdLZCPjpHewrUiShjKLTPZfrBHASaumt3HA37Ru7zhEVSt4qVFRM",
  "key7": "5iSPzPh8iXvcHQHLrKkgT2qWXdJT3vxFxKTWbJwXL8DxAj1piCcJPpcWogRkHirhJGU1Y1ECJT8XeeB7QsbxZrcw",
  "key8": "uncrF9uvd1opCwQwEWwUuC3zhrgfUL3fws7xwuJkLLLPZUD3KdQPtrKCxkSgLjQVH3nmspGrCfukV4yjFVhEy91",
  "key9": "4X2AsRAj4yG7bbWXSKcgmW9mYbrxC6z6gdFgqJvBQVck6DpqGfUcURLDsPA78xcEGo5jmA336r6Fbk3MhYT7Fkf4",
  "key10": "4TxnVpy6DXWYXJqo7jXYTEpDrxpshT8h6xHU5ok5R6AmqcbGheuRz8JoFbqRdrq9HeuGsm1A6nruvqNrvqfkkjGs",
  "key11": "4vaXopSgmjpW3eF1uJMYUKWJGRLuiZVMAeDxeDsAYrB6qGHpqtFXVycA8MD385ZNxZ9PrnYcutVxZccx7XG2Y1DB",
  "key12": "5RKevp4se94mfhf2psyUc7FJyuQ1cy54UodwCcmbnJYQnBhuaF4kPftHsjqzkcvEPEiKX2JNqmV2cyXMSSLk71Ab",
  "key13": "trq75Vx3pwr8C1n51ArfSj28FLAfv6deLAYbo5mMJ37wck6ZxUXy7SypSytwEsrjkBX2cFfGFCTSpsAixkmadhV",
  "key14": "4h7xBqxMmdLyU75xdDeP7fctL4MrRxnCzX6JurMbXRy5trjyQ6DVNawybbBLBjbq19b2Cwn8VXosuEsqVFaZ8SFe",
  "key15": "onEc5jDLGGfZhnsZGYxx1N1wdQ4dUsQemTwzUefbrTfgoTtc5YRmb4ATAm9v99AnMpwdM6tQB7wLhrkfgiJk3jy",
  "key16": "C8TkkeKYAqbzP5F7PSgUMK7KL75Dkvd3g5MK55W147Jes4T4wxYoTt9rZhEieVP1WnLsXgF6NJqjQaBCiJom899",
  "key17": "4sfHpU89Zehh5M1MqVCEhWq427iSNDY6b8a7rH4do6fYjfKoQ9bFdaTNi2Cg7KFCJmqmDRno7rCDbpf6SYm6Mz5x",
  "key18": "29PLcyBMBTSysDy66kVanNsCBos82dc5KTt5YytY69scnR1RBbBmtw9XCMsUphbZTAopNY3xNCJm5DMwngxSR1Qe",
  "key19": "fByZN1F2mv6ughRKYncNxpzJ2ZTdMQrvmuqB5j22KDReuzwBLzToH7Pe5kpR4sv7RrhGEMUzSrUA5fRcCVMg9TQ",
  "key20": "2vLUtd1B1AeqZ8hJLEk3RaEcavvLRo9j7i5rqjEkYAcnVR3VEmvn9tuBgqnFCBe2ubTc89poxypRPHmLnESBQ9wV",
  "key21": "3QnBWvN8Y8XSN9nDk8VdErjP35SePgDHd4Db4DGj3WdquAJ83yxVsJykmzprPnCZAwyVBGAs4uJN94azSv7SKq4Y",
  "key22": "2WaZcAVtQ2caf6vnLiTiiUdCVaHWKpXC5gRkAAB1nUDT3fGnnkiMPZnH42cousRp79XGtmjzKPoavBzX78WnzQMw",
  "key23": "62eBmy7LNfBBYLvD6GSZLHYzybhcKMsR7v8cWRwBFzjHCwaxkXuiDfQzkCQMjBpkMJgwAbYjrj2p6AUDH6uxMW2k",
  "key24": "5TPzWnUqECuGiNMxvePdWTnKMPwkmyXT4fEyFGqZK6QLi8unB8oFcprPoJCgiMCmH5aLWvBJZU72qMnYH2g4v1HK",
  "key25": "2x6fwBbyLXDC81cEtkd1nniMwBffEwoyqATA8vDsErNKxiLLX4ULHTVwK1SnpxKZ38MRSzneok1DbzV8f2EHMHCd"
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
