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
    "L16V61QivrBXfBdsSXqVbCUvdnypJ3PaCDe6WN92Z3BMpZAKoX3Znk8HxqGCXpqYkp96sHvjELAY5zCHkmbQjFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RC4TGz1RKwTiBCqWu93NsvAPJWqUvZQTDVPVXs3gxXBa2pXUxphuybahZkGHS5pwUYwMaZP3WnDeMoyNdonFqXh",
  "key1": "5ec36cwgvQyFdNaZWru2YtZuWr3UKsLkHDMBvuW46F7vMrhkejpbFBdAAaMypMimM1HFmqioiGTqnerzFwDrs87J",
  "key2": "3CndP4Ph2ZNy32XjnsTcHqwTajgTA1DbN2fDpwArxNZeTLYhsBeXQXjXpbNFmSteDFdCebtmRQKvtCnSGVBxkYA4",
  "key3": "4u23QG144UkiLL4YpX1dtQb4wL7PYgEPKHUcxwyX2NTKRrWT3NsmqCUw2xY4zFk5GMrDuGUhEZo6yEJxHmqUwxmA",
  "key4": "5V8NUhTpPDKcifjn8onfN4truDeXWjGvH3gGfmzGGUMa7xJvbX7EnFP3mvDcDqb6gife2Mm8g7wZpzMS93gjzjte",
  "key5": "8yjF8SJfsnqQ2k3ZSHKcY9LR3Epdr4oEq9gUMDSmnaxaup4uaqQ5wn4tnFHe8ceCKjDUrTcS2rNdPwQvQb7Wdny",
  "key6": "2CGSm9aSu4kvembitUppDyEoiJMHcKg2DEB9V7R8pe3sjSeeM3tX9W5KhpHpwP4YDRKu4e6cX2pRtrG5GVE2fmGD",
  "key7": "tqdTQG2SEEvo8vRY3qRAy1bkWQ98T91exA21wifhpZcXfY1NUf7MgXQWhjKFMm4wZ7txsN6LrZrgBqHMb73utHs",
  "key8": "5P5yx5GdGE64sUejFVvMcVsYGcudcN4P6KhxFyqiNm1MMjWyrU66K54L5kmkbq3D465c4hapf681TMmTRtcgViCw",
  "key9": "4Q8Mbw63KV3YPWioxFpWZbHECYVrEFsrpAGYkUeWDUrh4TYikR2bz4Fp7GfWSKkGd8nKyvGFGMVMJjUxvfbrGfVo",
  "key10": "2kymozMimgDqHFLZ6qkdNusM9gdgPRYuFN2dmjdnfu6EzzsqiPscJseTiYHEvXoMuDaj6FZs52E8cQCXHActAugo",
  "key11": "4rQ13BZrwuFeq4b3Q78EHCynuSS6nZFLueiwxfEYavLSTSSui2KmM6frZxSKAtS4U6BUktn6FFMugRYLFNmtttei",
  "key12": "5TqKK3EzTN8NWQ7BahqmXrhirje4EvVFMVrB787akcwAe8futdARUSmvCxXVWEe2gAX7snwNJM2zDodb9KXpQV9z",
  "key13": "5FxvRK5nsXPSFVZAJfBwzySKgwsgy96kJABmEGGoJQ2hHZruf6ihanR1C1fPc8pjcVDAYTojL7Zv3hxL461Ug4EC",
  "key14": "4q1VR3Bpmg2Ln1XB9G29Ffu4VZ56Y8PFdun7k6HoBtHRs8iWwz1Z9LunUJa8p4zSyYmb5GkwJkc1R5rCfUQj1UuA",
  "key15": "3UjURaQBW4Sq9EHWho9xgVk5oG9R9JG1A5yiR5EGVLLfnqecLgpVkkyN3yaawGAXpYCuVVdpC5enNw4p9qX8hwS6",
  "key16": "TDcdKnaWy9aiYmNkYKpdRAYeB8ojjVpJhMeYNNxdWEQfVyY4wFK6dxLRPQpgpu3vkYomLVkXByaSYKF35tkzK3E",
  "key17": "RXdYpf6k2MwW6aMhDXqodE1LX5QZAkkcDTv4JAQ8tx5VD1V7dFcJaeFKJmVHbMFYQaEv8Pq7jFgcAVqQ1eirun5",
  "key18": "2b2mzK6K2DHxJAdezDxZ8NyQVkhBfgkPwBSEXCqmpmiMpnuern9GddvxamgzYgqwDAbRwjzyAh84fkcZHvJHecGS",
  "key19": "95k5wcm2z3quVuaJDBAhvC6R9yapdZ9VXvWegC41hAw8Kc3EWksw1sE63uHM5nKW7CNh6EMynxNmUztwQT36gmk",
  "key20": "4XTTz7VPaACcEtFk7uQzaF2uriENjidYsbr6qtMFFiAE2mf43KUgq8eksxtbvjbJEdN2cFqEHwCM71sX6QWapv6p",
  "key21": "4zezWu73ZevU91GN3YP8y4SzmtugroTcumeoh3iY2KjqEixifqACGfHd6GQ88s2c5jD9vELcHfPgzmD59ioAtfhz",
  "key22": "35oDr1GbhmtcCh7AedRT87L2NsmPbJrkwLAn2fERvpA7TiW9jhXNKBbjNpuJf81dhwFJiNBU8jpZubnkDitjmmc3",
  "key23": "2F6wcwFLiLBj3A8GbTxwyrVYuKkLNN21mjr59QQHyCzCw2aSoun1DzhQiENmmPH9G4DVhTjMPJsvG9dnyEEYA1F3",
  "key24": "3XESZH6NaoFSXmWKbRUe6PQE8W5SD2hww66gKnx6ptKpF27CsQ7zfe1CXDSz5RLjgvHD2WJLYCad1R6xsESNmcWs",
  "key25": "5zVGWEsk6ra7ALMtEX1zK1YPS54rWrWUiZKny6EaC55dvTQKoNp75485CpQighXtLLVL3bs7ah5s7BnZxoFuRdau"
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
