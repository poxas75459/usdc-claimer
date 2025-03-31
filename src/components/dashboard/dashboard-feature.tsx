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
    "VHrQ27mWF92mTRuRRUo2GAZSoRPE7Nrg719Av6wAUULJW7tan51gLHEwQXty8UMZwNoxBAKnXpHaq5uvSnTiC1f"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "YNfmMTBnRwnQ74pS7N1uK3T88YLNipjUgaG3DnhdAYRLiRWLMao4y6kv8MMSm4oVGxbN1PBPFNrRWpeN4DHp35s",
  "decoyKey1": "3PwyWRirXyt7FPURkJzSoEWUgxEXXFHcHvdA9FPMRsQbq5hrGxGEs17jjXakydabY2FnC2pMzYgW4Y9wxzojt9FL",
  "decoyKey2": "35s49vXX85vSP5Wygaa5qREufFvJwB16tyjYf9ybJijaKRGCK5X6HHUegV6EY3JQsLAtgygbwfmqwNKJQRSGHQ4z",
  "decoyKey3": "28WqcwqLQ6hDdfMBb5ANNrTumBMxENavMzvKzZszuRW625ZPhaWKu3276NbF3TsJ5oXDuBPGsrjZ7gBMDUY7vUEN",
  "decoyKey4": "35ZNCBUTVknoRzBg9Z19ZnNfE45kg1hzqR951ZYqrn1ujMtVkeWnwBwooxMyPRPimB7C4L39fEurpi7HwaCyPws6",
  "decoyKey5": "5crhuwYcCEu7HMPjvskQAjQz4JJM9cJLMVtwhJpPzcxWwedm6ZBxDjf2q1ZTNUrGkQzXAVKsjYqEFh6NuJoaf1iz",
  "decoyKey6": "5v9DfdLWiXpZrSrt2vmJeSqLFC94Go5TC52H8kWXVfwMe3ptcDBPmgHjsPsRjHMzkiYzDURq9viVeoeWxG5G1KNC",
  "decoyKey7": "5reCzYq6vkor9kLhrRm2djACczYZA9NV3wpzqXRwhVorTVTZXzLWcPi5yciqddo8my1miKSuHWrL9RU2ch5dcHxk",
  "decoyKey8": "4vTdhCSwbmCEyZjsWUzV9GA3j9cQSYWmnsoaqja5QtZuJtmCtfqFrz31ZuYboopJAo1SNX9rpvJ88Lpa3MT6VQHx",
  "decoyKey9": "5iFSQb5CPHLZgQxmyL2Gfg8ayv1biWicULBEeewGgkjDYGNDuDw3HZtdY5wn4CE9ekW3A1fQf63rHcX4jo2uT7Xm",
  "decoyKey10": "54bYQirdkDWQfj4NoDirSXwmVAoMzsdHLF9nkFmFASHJg927ScHx94w8SVMQXnLssBHH3PFPJCU6RossLZFpXAQy",
  "decoyKey11": "3W37WXWrhh3zKcpEaF4aCsMGWvuoSnj3Q9H6KXmEDt8zBW42UGDuJsh7aYBF8bDv7NyNJAJx9jfchfePkWKE8mSb",
  "decoyKey12": "2s3X63VHQr1rBP6RPPbp7fdc6AA1gjdNgw5uAeCzStye3QP9XGkhAXbEqG19q2us29Uo2cCFgr58mhFTrhvwTwVw",
  "decoyKey13": "59hqWmkT7SB7ub7PJjzbyXo6JXmjkRSMcwS2bhhQPSaJppmyrfM2vDtCfpGHvkRBcbJQrcVGt8vJLMLE1s8YxD4W",
  "decoyKey14": "zsq7QJsWbTYuAiLMsNrf5MfJJsy1msBnWqWnMfmnbs4qVXLqskthdJ5dYeTn7fnw9KdmdJ1SRxufMoDsRRrmDKs",
  "decoyKey15": "4WXFdvnGTTShg9TkFp8FYCDHZmrbnLie3vGUsUwSDxBVfFb3yoHSN1BFTn5YrsAQzATYDMjz53nTubeeLvuJfspq",
  "decoyKey16": "5gdtEhY45Trg4xpFSuY92doH4tqutJ7GzKqjpvXvQbnEtZKwG2JEokukzYbyCjc4wqSbzf2dWZhgKxq865r2trhe",
  "decoyKey17": "4MFLQgxpYKzrf5JPTgPdJDaDxZjD2Tsty4X6RrVVHzHbSTGMvp9ADa9igkaDTNCE4CUmWuAuspBXzhyZiegXCeSB",
  "decoyKey18": "2f9xKoFE62Y3Vn5Nk8vxeBRzMrmtdPKchcALZXhvuFAeHi4PED9jFMFDcwQsbKtyTiRJvcpWcrrZX2qN2e3T8fFm",
  "decoyKey19": "5MrNcfyQhJtKamk6npFicAFHSbYWUaxxvHDiJ5ebsfwmPsQskFGjzFP75dWPCUcjfuLmQ9s64RvMwCws3xh5hzao",
  "decoyKey20": "3rzXK6L8TjGZx6JP63eEzJDJfS8DnGS4GfXyKjmz7JuLcLW9V7i1t3eihy1ehzrHh5YCrwXpJoQoBFwT9hZBoG79",
  "decoyKey21": "2EnenBBjG2YYB8KDJhSBXX3KktWbwq9H8RuuQ3CjWfz1Me24zh7ihHac4T6AatVLDCBFEDRNWYWbTXDGxXcPQqFN",
  "decoyKey22": "zwBzxdyngKqM3y65UPnDxt2q2dZPZcyf533wdai2tZvZ6WjACJhAEuwKkRgT9HEvxy5P2dtnd8pLgJ7gczdt3Wv",
  "decoyKey23": "4Tsi2psR2aZi7vscDGXDAa65E4BDfBxsUwvdDG17KGoctzKYH4iRsQHZzYd5Bcm6LoaoMRciYP6eE6VvsgVBF1R",
  "decoyKey24": "554A5CQGNTt9WrvbHAHXjXRriKCpzVQzb58MGeQJByLyG4LyFk3D1MtLumXZ2rGaRxx8uu9925GmPb2rmuuEkYdE",
  "decoyKey25": "567ykzCLsFM7KkRr9S8gwRBhHsKw4iaHeXxxyii2EYZQMiGeKi8Jbi9CZGGFdGimjamtdoeC71nHN6R5nuhoGxgf",
  "decoyKey26": "2pT3CNbRWy5bwgGigna7bMaCNuKd1dzCJGgS1qDKpjcwKHwmi3f1fvC8TYk33x7DAVPkEZWnc8WEcyjaRBQ8yWeq",
  "decoyKey27": "4iUUY555Byg13YbgDzjmsj52EcWWUoBReTjJ8UipqBLzGXnRbjCXGXcZ7AgKfd4vBd8ffKBSXeznRTZMpybWDevN",
  "decoyKey28": "5UKYEg6YPnPkcQScbDFC9Wha3MxRbjiq7vPpcKJhn5SRFcTiGnRU1JPEJSnU4RPewpmKtfFy4b7D1m4A8btgvn8q",
  "decoyKey29": "2JRzXMr7QwAnmGQ7Ha779QXfxBTmq2xciAo9oHn9F3Hg4KNQcwjgv9iwPZt7UUEfmXAG9snNzjrdmpQdzuR2EZRj",
  "decoyKey30": "4h7CRmRGFwgvSMoJVPBaULgTnXqSEmL1Rr2gP6Rh9CH4t4NudxEwwcwcSAK786V5Qn7FaGjitYpTgjrp3xZDBapP",
  "decoyKey31": "gfQfkwPdtgYhaasLHZtodAAZarGoU6LT2rJjcQenuM9ZaiuPZSwmDASQ6oAjoWbYZ5wPNC6Tfb2qaQHSRBcJym2",
  "decoyKey32": "5EprQBFNc6UYDxRKuVirYDCQHgcvzCvrgsjaMRt7Xjdnomz4tLKw99BXsqHNFQhDSTaRxCy247do5gAiMe7cg4tk",
  "decoyKey33": "3ahLFucvTBNbnaXR96L4HmvGi9PCxc9vZSdNQP7c1TxnSTVbyEAbRMo6AnmcobEJyD18c1kPervczRLNK9cQa7SL",
  "decoyKey34": "57JgERNWS1ZMtWkshJthTajedSq39yzqix2Haewnda8NHLFfCtfF65CmyTEQcn3CCHz6yQkQkSTt7cq5GeuCvPrw",
  "decoyKey35": "3bRFf5HiH4eBUQQUVaGxzmVj3QXDuLjjMSwJrpxW122My2Rpgts9y1vcoezeJT5VUDgcZE3zP16ZREMukaWEBZ64",
  "decoyKey36": "4v68W3vvP1ei19zc8wwtJRQj3yxpheZ9PYBawL7xt5yXsqNc3pnKiiJtSJELFYjDtig3LJ6kvLQ5d1nytPvwCDEN",
  "decoyKey37": "PrcfapTptWowkMLChiWF1KuRVRi9a4wWsKRzY7qgZncuYEiS3RPUJQPAEnGPY9djvTQRmnvm3r1CsaFn8a4ywQN",
  "decoyKey38": "32s2AKuSCXRDUJjNKy1yuYoRgoVmAT6DYSCtEQkZNQehpskLszpDJ3Gvqoihf4zw2GFFmtsjb44ao5sir3s6LekV",
  "decoyKey39": "62J3PtEW6cwjMuMPtmgYapq1wo9izcd96etxvL8pJrAdA6auBpzUpeEmfhsWKMKsvTrZXUX7bLcXZLJiEni8WJbw",
  "decoyKey40": "2SAAH7wAVUMBMKWN6n8vns4BxG2fC7dmuxUW2dCzJnQ1Hwup3kgCo5RXSWPko6rggbQn3mFTRysTEacZtKME1GL6",
  "decoyKey41": "51FAfK4gtcK48erXAskHniw2b24JfMx3Dst4JYivA16w6RSiCg66yChnHXWAZyFRrNh6kdX2z46a2H7orcLp7Vv5",
  "decoyKey42": "3qQczhkaqsemi1rpZpbYqSoZE2wZJGUvYzm6wXAMme8cfuypXcrt3NSA5k6XLQaCbxw6cWQKhA3WRavYQGGGeY8m",
  "decoyKey43": "5ndh9uoiUMevcRkX1egY6SLoANhX4Yw4odWuB3AQwr5t1chPCymRB5XmD5jsnwy9vrE6uokKciip3zh8tJtgekHT",
  "decoyKey44": "39f5cEv2hFAiRicGYuedgGmxyq8oGsRBfZgwgjxmSpUo77QUoWqNroe3Mk6WiqVPXtxmXeCnMNFjBtAcarVsYgfY",
  "decoyKey45": "2yFQ21uwMS6dCYeSM7XekZt4pEEWPNMuEeK7KpCRebVRWN3N9QkGS6oK1yEkAHCvmGhEcfanrRFWHAAA7NJcEiWz",
  "decoyKey46": "5RDwHdxPQuLhV4dy1eYxwXa3NZSayHuWVaRPYeS1mpecmM5qsgYoQDEq7skWQgAnH1ufih8ztkjTr9vDQVAKwTK",
  "decoyKey47": "5aFTRXf5716TB3gA6p1r9TCN5YRCFYWsWApptut8wWd4QtcrVAMsMsbPzbNDftRjNi2B2vJe5hhKCRcBbdCxZLo8"
};
// DECOY_KEYS_END
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