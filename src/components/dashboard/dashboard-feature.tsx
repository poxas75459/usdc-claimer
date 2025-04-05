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
    "62BLC6YFrogtiP1qE9FnGA49cP9snEB9VVwJuvit9CCRfYtmRFUjANfbxXyBikG5WfoH959eqXA4XG4RXbNPrHvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLjGjfBk3mRbGsRuKD4JrwXwcUkZv2GtRG1uHi2jjwzf8g6Sn1hujDc1cCfw2Rj1DWgvELhyo8MSxCAGyeUmWnc",
  "key1": "vHGTdJSMnpn6FBsyamq2hUkUeXzq519auwK2EXkDBz3CgSyb3K9CpdxSVsRcLocNucLP2Yhx8KchXfuCb7CEwEi",
  "key2": "5uan179VqeyLmDePFYe5bguVdRF8DkDMyzjg1FrTdiokxxViWM738w3VcvEt2FYfqkV7X5QjGxAmWiPAvUa4q5c1",
  "key3": "3pBbS6kUdajuwMGM8hBTMzDRTdEgAve71j3byiFRVmeSnPtsaV9kuYKvjJ82BNdA3cnED68ZbSWuyN4otcpuY16s",
  "key4": "4enWgPQ6oxz25JGMgPsmjVDtjamkEYTgn9mmLMD5a1ohCgjvP2ntMqsN4zafsm8PxPdhMFc2H3EcBXKtLcMD5mPv",
  "key5": "kmYQQptGpmkgHLDsuhSkqGoFuusdXfeEYoDNHoCW5NkDL9pB4yAQ4PPv1R2V3Akief8UfECwz13sGWbqqXDETDP",
  "key6": "gUswZfa5UEGiy9rQBxacCkXBLannE4SMn92KGALG9zLpSnyWwVuTE2WvGs1fGW8PNMdicefkriLy98dezP82pCc",
  "key7": "5a5gTGrof6XBGwdEmaf5XmBL9SNsqaCisrbC4WBKQF3oxft1PW4bE4j8awmLaQfHoCqy2tAkYzYLMwLp4a2H5KtR",
  "key8": "5udRGXfDnWo77qwxJWYeXEJTguVTYy1N7pYDwp98iuMeLst53KA9Wqw72jj9UraHmtQpA5uayikRhLkmKvWnk9La",
  "key9": "4HVB4CWS2hfCWKXbwT2pp2Z8XWXyEGVFUVNLMFY7WUDYAUfPSYps2kWZdL5ib4P79ECaVz2QzWNXxzNmReb61tem",
  "key10": "5cUZK2LsiMHD5YbWPPJKmoCVkPW6tnTCj3VJBJS1paSSGZVSVAJYXDuMcwmByywxLFy1LUaguzzAcHX5teNNFuJf",
  "key11": "2jFs5DYLSkabDajXHxBuHSt2AipXfQD3rm1iV4zin42i9gEPLpnj1fJRkQZJYwyGq2qJmfEvEP4tqcxmfbTBrGNv",
  "key12": "iqJdRxfSfjfrtqxbUF85rMH5MCUjAN7NKn3Aw2iBDJ32BeCnEMST9QS6QGAvs1ncQ7iS4SjAQ12DerieYRTRXHm",
  "key13": "4G8hxNmhgGV8ktfgnXWR3RT2Fn6rvDSopp5ECffpJUBqqBRcY1TjUvHWzKnJkEpKYfERSxyXaALzkLmEgZe4vwhn",
  "key14": "4bLYjzcDUkWZKMMnJURrBqsRy19PrxrhXXamRLgdn7pvtgNJ4xQ1aksmEVJCxzxD3MqBLuP2qgibNn9iRYmBjVn5",
  "key15": "5sZmEK3myZz2iqtKuPQi7ZeixgeKr5mhirHCUndXPed1mk2w8hg3RnuZUX7EaEoJKuuANgD3Kb1WGLACGbZ977ES",
  "key16": "dfv7EdQZ4N3JknqbyhZzdF66LDTsevsZT88UeeeWEjGJxBwXr6JkaYLCocMNqQSVTttVuPjgL7CtKWKTXWRar9H",
  "key17": "2qSWyDdaUi6q5xahxgqrTkikShhZgkH12wPJAjkU4uzvnh7SBu8ZKe74nxkdzSaT1EroM7K3y8aCYeEAFdHEPznb",
  "key18": "22R8fpnSZWbyxNRumZ9QSSgSc4FKxCVe8V5P3PzJTA2otuR3MbQ9XioFYPEkuVMivAMJ9xUv3NSDh5inxkqBJKZi",
  "key19": "2oxr6i4Qst9t2dJ9vFexn9JVGq7pP4KdUqyFwdyTp4TH2RYVxLbzCdECYoJN5hNzyaFfk5Fe8DhHQMui8Z4k1RuC",
  "key20": "4uviPvKWg6Epjy3jUp57QAxuLFQMQNFPHzcCSDsD7ryhSEKjELatrbqYTA12FUB3a27gcg2XfnqCgF15TT6TT5xG",
  "key21": "475g4nQPPSwopqrXRFb3AmKGt4WGbm4EzHFChBkbE2aB962iaVATC2CzgdanMmrxoVgdLirb49PXBpnW5vz5Ak4D",
  "key22": "3JvzkmFoqrg7NM6XoCcijWSeHW4VrMiexaNdZcrntbcCSLGZc6GGwMUBiANfyDafyr7eB81Zs72fSoXKywLBdpZF",
  "key23": "5tsGaFrrnke34QnwBmku9EevdrYKCeuaQJkyJMbZe8hMpSEgy8efzrQNRAKrYHxrage8wQxq9bDj5ezEVPnWCtbF",
  "key24": "42yWzERjeJKkQU7TPVEgJFwpBH22GZMJmwmAqPmfg8LPnYdG2h7fWzPLRBjrg5ENYjqLv8RkFs78fZaoVmjaAqLY",
  "key25": "2fVm5CCAxNZZjEciJEqkwHWZwYe7vntg1Suvvn6Mqu5tjUUTVPDYMAjwk5Mb3YYDjHLmJUJtFUT5ZRhzGn31dsGC",
  "key26": "66uo5SCPk7Bj2UptVQ4RydcEjoHpQcGmXKxkv2V6N1uCzgTUQnhktdUzn6wA3jepALwPxnNUxSxViRwxXPo59hgR"
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
