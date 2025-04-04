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
    "5WwyC2Fmoa1Nximmi8w68mwrvhy7cZ8bhsXpYQR3rdJwuR7xmzHNQ3KC54DKcHKwDZoaGa3gRBkoW2qc3NAMSwxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GwLc24ksEFkgMa2pjaFWNivzNCTdRo2ZHsRCTeqycnKqeLbUJRhNWHGjWxWbqZeY1UPnjBKjVKCmV4tnmVQmq3",
  "key1": "QrxxfT3FwpezAXJE19N9Qc3iHt8UNvAc9AxAdPq7gzAFyvxsYWKLANbpQZMw8pHyuABG8APCaoyYA8W2MAbTrWb",
  "key2": "5L7ixt7QujY1WpWPvhisSFTFjvymfYnZg9eMVepp3PEY4MC1Yv1pWx1rvLDbqYDPH3McEgwd3M2d7TTKVxgXQTqx",
  "key3": "Hg2mpF8wfRdZe9Vaug2PsJQ7DXmYyPSW76MvoUGKZFcwwaWu13Xfa4FgNQTXUWJGAa1c7WA2SicaPwy15Q38Bfv",
  "key4": "3vbgkuTRtyie9EqUkN3PG83t1jBwnFTbuUwx8RbQSUt2PT7pZt34V8giF3Fnku5p5or6bgDqfgiwxtJXNhM1Horz",
  "key5": "5pYzqkPNdvfTGDU2sTLLwNDiGzsiVGxLXVPQph8NG8Vorr6YnY4AsK2tv5EPiavQpt5QgFqrm2oMU9H7BmkFNg7V",
  "key6": "35JxyJYjkAZx1K85kD1j1QXAEE2GRepsaYnTkdd7VLJsTHuZsfXGjwKDRECRqZks64zTY72AL1Gtz5bUW2vNUoLR",
  "key7": "451Kw33hU4GezBVmy2EiERFSsfdW3q32wTSJyZHwFoA3e76XfiGE7tpuLzc7KSC9oeQHRdYVwASwz2yt6LVEBtoB",
  "key8": "5KuZN9yWSDPT3duaDDetCvZbgHcGKZwbF9LTw9bYvwxQVANdN54xmcv5oKfRSqbfGwHsPwwHFX1uK5yAuo62WDb",
  "key9": "3Wh981k85AHHkPR8vvrQ1LUjKprcwq8w5DegKCFirCXeQ4LT6VFtvZsJCGnsPAjZiHWezWrjBCchrxpvtVfo7rbv",
  "key10": "29fbw9wAXbsmmF46UyFVbPEGGWGWry7wqfvZ2gxsTd5h7KVuHETrdqy2PdG9Xe5eAzZ5A2BpDhCgEsk3MhDaKRjt",
  "key11": "EJfx8X8xMqVX4hN1RTv2oNnhAiESizGM6M4AGMXMvUuaW42GCBEtSTH31Kftso288ZoeGXZipKyeea5UiuvQh4Y",
  "key12": "2NA5VNWyvVAZnm7zbTw4WrRr9Wwxtfx7y3wfvpg8tL2JZJ4hUUErMnUMBsVQKZKD5V4eKhvKDHvLgRRKkkMnCeTt",
  "key13": "414gSv8NzarX5FR3fYbiJULrRV9PgR6MbmNfdx8EA8ouVEaKFEemscPQjduHo3in7BbKVaji1Mu47pP79fMidHJY",
  "key14": "4cG6XMY9RuZi5JQooMYL64Ri26pSL2MuAx1vWAuAZxsUyYo9bMmL7NtbQFr7KPBH4oK6GuLF5GiEwm83k2hyWR7G",
  "key15": "3vZzi93wTmXtjbYPTxvvfYF4NFBaCwY15bEUqxnLAnGEkjdP1Cs4yKDGWyjKwh2DVtfqEzLGXceJ3P59dh8mVPXb",
  "key16": "upJ1HRVUBPSJouksFNvtR4eQtXqVwFZr1ndaxqt7KvZVKT4T4CjHtao4UCDuSdtwMpGgztV4ukFYpvcoVtLC5Sw",
  "key17": "66uzSXudP3zXx8kZSpwnZNjF5sgXHbJAMgdxYUPYaT7gyQu1C4GnDGRPfjDPGCuPgyWpHK92U9XVZGFycUjZot8k",
  "key18": "3kvVabrSNcsXeWvFZig3i9tVuwRNrAZnxADyouaFhZGWpvQPFZSSbv7ToZXw5mgrT79TDM7oaR5KZmg6fydTCa2v",
  "key19": "4usR8sUMEHMBMLXbR4bArQxfzWx8mxFSrcdtefMMbp83jv8PhKAYVRtahRr6FqxFyQ3qDcWyU52kTa8vnr5wbug7",
  "key20": "uBXpmiL4gSfugYdH9oHNYRd89CbmvNpFxp2KTxSZbyUZCpuaAmvYJb6oSDD8NvKXWnLXdVSyEW45gjrzvwPgtGu",
  "key21": "47jAHM9TkWtYa8vFkCw7xKSTfc5yAbWrubAvVc7X3wP7FtDEUqEhyNcxL1UNpvu2SQEXJASK33KJade11wMqaQGN",
  "key22": "5LnQ5Jcc6gRHcm24mWe8EZzDwcVLYoedp2rv6HqsRnGJTD48ixWJqwNQgkE99y4XZdX1jFPQQbPpEebcx5vuccHZ",
  "key23": "2Mzus51JRB5Fq7uxQR9Gt89YymyyhtKshT3XSZNqxMeDoDm3pf92SJZ8JTVLxVoob5V7FW5L8fQi5wrzsANzmpzU",
  "key24": "wNhq9fuhpg8xvrGcg5uF76VTNy5DVWyJWbC3NNybWpkCvcQcdgZYA3qThpKLcvb5RjyyDfjJLW6g8eirRhJPY4Z",
  "key25": "35CssS8b75hPQemsdf6GgBPjgJ2uw6uiFaK76UjURLETSH3YdW8aFQhGAge5cbaPoPJ1sLG2ksFeqiLLrgfu7YEa"
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
