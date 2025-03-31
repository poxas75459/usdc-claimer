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
    "4zGtm8G7BwGstgknJLK76mygNHjmFt84v3eZdWUuE8dQnkxPjnJJEJDuG6h3VMRpPmVWT4hUZ9EFz7ZfSG4H9zsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQLcLQc1uyQuP42URnaLkmRJQXm6zXZbLMB7EZWRYVkb2nH9ozRMaKUtuh5GT4L98m3kHbXpibwcEdpM3fDYip2",
  "key1": "3xe3UcrMh7gWc6q5ayBF5GcBRS9x3LRxtqrYMtHyeYdMcX3zVjScuyJ6APQs3qrJ99Z7swak7NsMJFrJcMTR8wEG",
  "key2": "2eZS2tg8nqTdebCEXtyHZNjH1rngr1BpHoZByoqpif4XfEiukYGAg63q8qDcz25cdtbw85UsQQKoZhmcgd6f2aTW",
  "key3": "3E3keUDiGZ6rDobkrphQvqfzadeX7VHACxR8Qa14PYbbmYyZFRszMDfTbD7cEuy7GFi7aBg6tLxuwcrhNrHSF76T",
  "key4": "2gqXM2G82CiGrv5ZMGBfEQmWbaBxq2sDr5KXd4GGz944Y9P2VxRX2dhacwbaJm9Eh12WEucnL262mehZt54Ddzbf",
  "key5": "4eM1M7FJP7XH3GguHYsHEeBJxNdXUKfU6c2PpGsVNxCopkw6BsB9sRefT4VG1Q5W4iJfAoY58MjCjLo5796S6WLM",
  "key6": "58YmbLD3rN8G8W4CS5qC9P5FsTy4pY1AbpxAwrZypU71CVXe38joPFM32fxQAnKwX3oGswGHA8KaDbf7RCE2hus8",
  "key7": "EMgT9DxSRdEn93EKu1cWvZavbc8ceVmhkYhMvaFavdPYSLEjNUEcaNfmBQKWYC3LnrAXmbbkqBBcrCyPhreXxwW",
  "key8": "4d2QRJeCae4RdbB4YrrzuEm8t7ZWtQfQr3bfnbmRpWTQXEqR7qwX6Uj5kUnJ92Ecfx6zazkqsoMGti3fBWEKijZr",
  "key9": "suM81xUdBqa2BczdtTTLdn1oe1XPMZ86ErMf1xTw3ctSPvUoZDjEcnbqKH5ALqMGtBCygeAaxHjZr3Pg1NJfThT",
  "key10": "5MXh9mvF2Pb6uy7BbyNrJexJKoLFtxxMF4af9VNeRbeXt9DXrYyx723QgAfBohHnNofgK4AhXFe76sxuvCbe9EA7",
  "key11": "5D7PhmpJFVBhf9eVWWic2nXdhsBHppBGYinNALRp6dEWsXU82nknYyyzrLMAb1ng1L1zLPFv5yQJqZzwHXh6ezik",
  "key12": "328mW8FctpqGUvmXuJLtsV8sQ2UUPc3cf6m5FCmAr1uYvUaAUCDa56RazcHzN3tTqdCna3dnDh3PvvrjcNt81wFx",
  "key13": "66XZCX9Lov48siKRrBBoKRjYGGTF2j6QQUHU2XDu2vcDQoTpRUy4kbbubqBZxznCng1zkoBPGtZeEWWvjC8S8ryB",
  "key14": "2JXKLE3tRYQYXrXJ7mnwt8KbhG4CvnFubrsxHH8ZJXfQeo6ASv6jBJZ3VJZ53Dro4gN1sT6xfV2qqREu6ec8vLL4",
  "key15": "3JVT1tiuTBBoSephihgaMQMufWUfjXBbUW4CJgce3gCKLEdreBYCnqNPzYHC8zvUoJw6RmDNRBbE3bfWTPXSBsw5",
  "key16": "xHRHXbmKATWkGTX8Ht2g16R8dp74KgjnVKpq4Mzjz7SQz8KpZxNJ5DYwohPfXfXf9iuGAD6GSq1D6QYWTEZMvda",
  "key17": "61YgAszmCgK2dV7nudAXAqSqKu6udekfCactimeuZjxtZ3ynahsmBMydsPSFQuq9MYHmAgsomzph8VQ21kPocLMf",
  "key18": "4PvmHcatDJWsbnAPXGcSM2pm6aCsDrP8uNCfqWD1D7BoBKyahdWHEoJwnrw7e5tDvrTzfeC1tAozbTbSbTDRbqnW",
  "key19": "wwh76ikuhLEvRFzKwR1tp1okZ229NRY7twDHWsKb9esqARyygx7Sknnwn6fPuytU5GHNPkps4hejwJMNndTov6N",
  "key20": "n1ZLsKLb5FVY9RvZq2wgCA8AmTbTpk8GnTz334pgPS4m9AJ1YLoKztda1ado8M6KHLtPwFUpDa8Uf8Wden2HZ6j",
  "key21": "5dS8KH1EMiisrC6ZTSgJSmx6KCbhjgFu6S1d5chDw7xWQnDPGvD9DYxoMVr3gJxu23AQVELBUeCQP7myQdoYcKyx",
  "key22": "TmAy8fBpdtv1tfDKiQwm4E7nqCtyGEXPezAiiKZ59pySdRDyBbrTyi7uQXXp3yG92AzeX8NUnVka1DuNjFScsae",
  "key23": "5cRGdQMSbjZt8PDShpeCLUfcSNyJsjU3QF6mizEk4tZAcorFLUv82djQTDHkZC34WemdPRM5NStkARx78vCMEYfN",
  "key24": "3asjRtJLqkkkbHfAsfMUYm1GPBRwp6ad1M8xeCf1fUotd9VHc8LbjQsrKmvZ8Xw5hBPDnnYBfEmpA7zLokB5r4Sj",
  "key25": "5iqn2XHRiSWXivx1TAsZ1HzZuycKxUhGdZmJmHQkfDuK9iTq4wH3QzzcgBN2Yg4MEUE3X3nYnRfJYE7ETF674aC9",
  "key26": "3zuzQS9nw3gQv9yRGwuJxL82rpX51224WzkSWQdbAoLEN3Xhsi7GqBC12EUnQgFnz67snnkop43voJPDz531petW"
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
