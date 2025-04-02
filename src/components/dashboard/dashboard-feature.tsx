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
    "3wBmHteevUjcfKJSWwnTfD3dsrz82DPLtfr7gqeEhNu4p5GwRcX7Tg5Gw9HT4MyeLC6NDcANeATHjce8GKTm6jDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNtgpM9B76nimRXiNqvgprE1ZiTwn5i5DLqyHmAzPmBxEDb658feCRrxyfkexiBay5xV3DDDyArSyEFzMYB8FdP",
  "key1": "5T6PHXAYwNYBAXDtx4xeAKuooB5DZsL7Zfx5ivTG9nDfcpscMpCTwdcVBZNnF44c1P4zVvssbAQe9bsLSfLwCKzB",
  "key2": "4ZTeGSm6Zkz8kiau4DsCnjdVhTxZ9FomsNEv65TgMGXxDWfk5WG9MnDWt2crDEbfwM8LQQb9arytYo7w1MMw5rAu",
  "key3": "tbpRVxBi2igskyZafZCUEU4MJsNcs8agHdLD5ZfrWWq6Q5oiMjd4nGdVHeberhsjoLabcKrx7Jm8Ai6eUtnhgzK",
  "key4": "59MyPiX9dLTCwVNUqk3pbE64NaQ34gH6bbBgMQdrvTz2Vm9X1NuiPvLHWoXT5M24fLc17xxuakHYPwgyanLcicJR",
  "key5": "2pmahg1Pfdn8zYWWqNk1aBE4zTTZoP2HJXo9d9dFcEDjQYbb4eM8eGgbXLaiUkxoqFhpcVzhmVRMhXJq3YGaEscr",
  "key6": "3vHjNMnskhVihm5BHS5qFM4kjZZZmGTN2Z5vDcvFw3H7a6qRYsVwPQFJ8uQd16KfneNDtNE5Dpkh4vJomds5sHyg",
  "key7": "2uySVUNa8NWTHMZgsjZ9zt6dWesjyyTeywbapEvLn136h6eFkXnJyEgG7cRyVyiVuBRHrPhCTmTZwYyyD3Pvjm6g",
  "key8": "2uHq4zCerLMbGg2etdaVbkCrrmNyyrzRr8xmjx1B6h67LRQZzRc9WyN5Fc3uCBjc5YBLkuZdDRqGnwRoRnwH7jtn",
  "key9": "53zxee7HrDHPboZPcEJ3ERAUfL5nLE4obB6Kn8dboWvH7LqUvGSp2efKyFrKgmzXxrAvtaer18zqazYTqi1wLQpe",
  "key10": "622LuSQnGdD6FoCfTETasZh8tpiNN8T57tiAqSnubuYLbs4EujFcBngnLrxiAnjTMCWKFq6NEC6ocgCiQNhveefP",
  "key11": "bjPybNUzAYPWb2dXByWck3HUdHRaXYsM9yxyRPkUjeatz511GWfWJ25pY7TPUYgpChpxp3pJHMy8FjjgAiJdWd5",
  "key12": "2gfHg3hh2UoVQxSp6ERy7qo1DoPyCzCxqGgYvzjrPe5G8bcuRYTLYH3NwLYmrHjZMop8TxYqytxVSZmyxB5gujN6",
  "key13": "BEcrAnGutB23Ktc8h6fD7sBS9xBhB8icGF6PQb4ZffJNDDKAkSSYHBRc5WG5VmGHZ2htzHFmiu3D3QDm61jYFoD",
  "key14": "3tNeogSG4pSHzDdGAjfTBGstsNR4TmfJdUyzQj8qaiBQexXb3ovVqY4BEFB8gpyCiQfBT7FJm5TEyzBMXReYAjjV",
  "key15": "3MFR4D3yRfDuKTvtdpQ68hdue7uYKoLLMGrdLoVtqWDNG3WSJdQTvJ4TqGjnZ17uLmX3uZ1NMJvRv49M6aKRNVEK",
  "key16": "4nMUEGsAUuVDZPE2W6WnMDYYYnooxMrPsp2mwDbAATSncUQZw3MPxsBqA4PQv1vuJAKuWdq47fJLo8Dj6Lm7z2C3",
  "key17": "4nomUFWU8Fxijuonyms4yVEnsULo1tLf16nKpTX7iWcDZdHuLxu1XKHYGmE9Jpq7pHF87KwnjMmYsKtBszXeA3t9",
  "key18": "4bcy794YTHepAmNCVywvm6peJm4qZHNYKehFpM2RFwTVThP4Gpor4C56HgUgpTEgmGdk5MMcibdJCzhYc7zGQ6rs",
  "key19": "47avPLUNAZXqYaDHF7AsfE9SxtBauxnywZoYp5mDqpZoeJN1WhxpsN8Wh83zGrbqL416bpegeAFMvNpWVxzDHBxa",
  "key20": "49E8V62kZKUBCg129sRYwJKn9dbEozNQpwnroFwpN3gugdWjB43L4UxKqJLC5pkNCnUeQmoy4cwSzfrKDF58vuuz",
  "key21": "2rct117FmZHYEJtVqZre7x1HZrUvGypmeupseAsAuTu4XK6fTZvgK6JwoHAwmSWMKfkLogb1rmWuZpkn4WMsuftp",
  "key22": "2WjxyGtxKuCE6E18FxqRkg2ZwsoQToNXL9UtqEXwNrk9djGfqRe54NZnz7bi7WZQZPgHiyUcaXkkuhW1NHuaVHGV",
  "key23": "4whky4qL2dLGvXk1ijPLhEBd9uWhuicy1bEqT52fq7RmiCGTGGQTDGLXwdtqdvrhSbVGFKKvMpPAfJaRBANBm2FV",
  "key24": "42ZcXeeadAY9K2BESDu5f381CPcoDiKR738LqGsT5a1V9bMXy5iXASQfq8ggYYUSh8sDTniv8PH6i6HbgJWjfviP",
  "key25": "t1UcJEdS8bqHB427s2jE6TKTco6xk3MWrk7hFtzN4R8U2sa5WtwgAyvEMvmrswv4ATrHqAV1UcL7YkKNBFG2ssK"
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
