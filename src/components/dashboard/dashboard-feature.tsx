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
    "2w1o2DEmEPFtSNwKDr9vwLLVgfae1rXL3g7UCe4LaLxNmRWeRCstk8hJrW2hhMFYoc68zfGURY7HitW9qphQbxTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6j9XXkUzV4RtsU1Gqn42TD4mMohV4tKtx7rREYymw2WoLrVNZdiNpr9JxfYj25eZoMY8VLiMPY7PNck53su2iN",
  "key1": "4kv42hEbcpNLxsnCTFs7xFhCCRCTZxQTuGEpMizuVgHVNtNmT7X6ihcSmzhmymtqtTWUjct8ddWajK2MCcFeoiDH",
  "key2": "r3LcZmbtnBGU8zn6zDwaPxLreeUC8x3gpfMBHTxGd77RH882YN8PNZQcCFNarpT3j6bcqEBqPFrE8ymY4HqjpYA",
  "key3": "F7P5gb6b9sfaFoahM7FpvqWojjnauTDCtucenWxekUNocfy6pt5XDMWPteTL11dADuvDTzn4eVmrLyCXpYcRG41",
  "key4": "4oNCbs414fy5CEvLju7JzPhQxkM2Xk3zZcRozzRrDSkP3zf8aBLrUgLc2JPrZNAaENPgXBAizTmTaj4nJCcA71v5",
  "key5": "47czSQxfb8SsR2KTNjybvkkBrRRudYJcXtgLGhTwSHeBoqDmogB5hZrufi628NiE6dq6pC3P9xQt5ULuvXG9yxZC",
  "key6": "5kr9TQ1XLuVSCAVUSpqzHjSQdS9AH1L1nobd8pDGU7YdWyrf6nd9L3PbpaA1tmY41pZhQ77a911NwLZ8GBqF2tZc",
  "key7": "3EcawGNgNYMLjGFXSvj2T7J7MxHYRb1m8oCrP9Zk3E3b5ApYHtCRMoHpRaVfxTnqo8D3VmnSmFQQYngRYceaVHxT",
  "key8": "uE5WGsd77LMrZBKqoXVCtgC9tosuiTmWKDqVQ5vTT1VD8jpfLoCuxA913xRDaGr6t7qDXeoPfePEo1iRmbKqdMW",
  "key9": "56F55KEWQHVRtQMuWmfejGSzTQqrfD9VoZnKXFf29vQQQvHwZnPpuoweoT9b7CkxLf1GCKnZv5hYgXguwB3bQDtm",
  "key10": "3Db298p55znrK5umwmGwGeCtKFDy2RQrZgvuwVi9GZEk3BUStXTx9tAL4c5D4cxbSjrEnosienndGzwkza2Ubvbs",
  "key11": "5Lhr5Z8EFi7LC5QHkNiJCogT2Bw9aLjxo5GUHbhQpe3sFibSbkTD9u74VozGutTP15Nm7XptmfFn8DrNmrZNmnh8",
  "key12": "2HCV2ohdjBJjpjY83rA2c7kxp8Y85seUc3AqEXaQ8QaZ77YNbEyV9ggmUPP6Ys116qFxhHR3NV6gjf4wxgjXaKNH",
  "key13": "3eG6Ujjng3t5wFpXepVyiWJ1PzhMq8VanWXcgRk4a3RwozbJvxZiANxdRkg9TxtdquaFuMLpKo8pgvF9zrJhvDfn",
  "key14": "3mte855YM9R7Rr5e6kVomERqQGyUyKXmzHiujx7J8WsRFEgFeuCUeAnh3ai3BTMEaAZ6oyoPPfvJC5GrWtNcygcq",
  "key15": "2JrtBvacRb3q3Bs1bhEvPNfyXE4PikQQ1trkpz6Vb69vrCfdyMksFHPVdtTtiep3hk5r7hwYBTZv8gUvSvWwh6A6",
  "key16": "Neuz4y3o1NzWYEWJaEH1eZUakcYjkUssNr1koXuYQN236YjSSg5pvDYJQGPCwUyBb1gSLvb2DfSFm7jXJ8p5ot9",
  "key17": "3ftUw6c374pvasCQcGmBySwbAJAZM4XRkvmUkLdBxd84f1e2ef5pARoQp4vXbtVmoHandCh3fK1phcMnAgaXtzYS",
  "key18": "4oxFEbhE1ggEu6tPMe6i7jumPpTGySbHAHGyRG8BLSS9Df4RhekALzAqPskQ9YKVAHnaHVtiDDG1YfzM4JLaGbj3",
  "key19": "3nS6xVe6C9iXutSa7gV2K837NfuYJi3qcZk9qYXD4j1Bm5CqepwjSgWC3pE37dXSdhgEkck3ZYXHikHqe3xyjVKZ",
  "key20": "58z8TpmKmZnANqpPs5E3YqtgJ4uuK6oS2CmZRWBoPGGsFKxv7GjBoKefV9ZSDytjA5KLyawteYa3DcuHYEgxhY5P",
  "key21": "3pNs7unhHtZNxXfF4jAzbA5Wi6zBTkBbLcUtQcorYxmQoanzANAXCjg3xZt1yK38WweHLJBiX6AeRnF7ceeQk6ty",
  "key22": "4qqgMpaukgDvjDRCxbtfHZbPVABPurdSD4ADG5EseqznJjEmFSwmeLmJ6phjKwC6oQ2PdTT1c5CEh6ixr2PMXcRQ",
  "key23": "3TXku9qor6CTsSPXTShk5qpZioGmWnmZr4sBQjMPbv24gQny7ewU1dqfXJUrR4vSJrLHd27jBzX2VaFvCFJsRAwc",
  "key24": "4kkoePz6cQHMsoV2VwhobXpqASNjr7wmoctWCs2JKrWcUgUgdBUkRZ3t7K2rNp86DLsJfQZzrYfZHHuDKdpTWSF2",
  "key25": "26yEoQHcdfNPZibruEskqeqU2n9kQhvj2sATXC7xA1QLQoGqL1xNi7BmAiHvxtq7tPnjTGqawwyoQ9WZt4SJeeK2",
  "key26": "3tqnFjn9GQwxLo2J2xsns8HpHaGPTEzeSx8UXwj5naHCS5LLCs6EF3oDBG3tbVHHaP2MLuJFfzWVze16EsYTxTzc",
  "key27": "4dSAB2A4qzDsUXMCJbpmKiPfJEmRqoSdXK296AcWv7WzZduzYXxa29eFSwTpxDoD7NgTQ9ZEwbrSwyFVrmE6nZUk",
  "key28": "5HmHwt1B8YZ5j6mAiifzmeXRbvyzKA74Bz1Nh3WGG4hNrNEz836bkZTXN1367YaVmt9Xr4BjxqniyMTZqA4C2wiq",
  "key29": "37XfAa3sYFZaz7j8FpegHGqogrw3Rc4KA9hn6yGvbAjsszvBJHt2dynDj95RnCrLhTYZMwkUhySCp4CHFvT2pSXd",
  "key30": "2HpreWA6DMwFnfRjtX5bTHY31k48nSVVvLWHBQyEqApBKNx5dEFbn3ZEgdg76CT8wiTRchZ7WrXe6S285s6DTfzo",
  "key31": "Dh4HKqXFraTLFp8SBnknmu4dzzc8im7GBAkeEvV757YoHU4BbS4po3LCCiz297V9iQnTvG65qP7QCbyxJDncr9R",
  "key32": "61jseYtCk6rQBroZJmL1xfVAJGdAh1D5nzSP5xRFaDXYvjXPjdpend237xP3yGfz1gz2NtbwEDajQEuFP9XnHrZK",
  "key33": "5ojQS1GxjUmiqf92M4QYRToNCDP2nyQ2hhcnbozL4BBEq2ApEh1FQH1gnXw9e1YmvfUQtZzQnjE9miPwxncBVYZA",
  "key34": "4G3rvjeru1yBpwSZmTnEgsQ9e4Fv3tVyNVPqpaqxcKGccgpXTXyEWNP7pM5zSmm7MosXP7FwvCQFuMzCBKe9ZkAc"
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
