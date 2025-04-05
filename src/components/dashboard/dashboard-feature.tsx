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
    "4znf7FRwPBVhn4FaCgof7XvwBdgvzrsNcvXzcaEWEAfQ3ktg3QJAz5p7La8Fa5zgXoicrJGyWPAEFPDQzkpino3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMRkvSErrUKABug13WvqestLkde7Gagf7p4o4gyw6GHohThDePXaH9V5s3EJ6VKbY5gHPiZN141STdGD9dDaYk",
  "key1": "3U6Eo2eET2L4GrnAzANX9vwym71VHxDE6jnDBwzrHuCJejHTtpsrQKNKycpZvK5oE3mPgiksBE9xi7D23ayyiMs6",
  "key2": "39sHViB7zWj6kbZvunteqxfGmQEpC4p15RcAdcHJbpkwtco9aVYieNBvSf2rP8KKXzqb8nKQxZL9aJ23wksAfEdT",
  "key3": "3uTrTgu78XSw9Z2E8qRnDs6FaUWb4uDh6NRcmq8ckhMg3ZJu64Feb54cJScuWGjXt2rPHbS6sShrQHDKFLpBiQRV",
  "key4": "2pFT81QA3h3kKQEYtBACUytY89tgSt5dj9jC7yJkWTfUGt93QvZPyQvmcARyahuwcsjKnUyva7Vm198H1UFRuUPT",
  "key5": "4T1bKPcvXNNxe6XEUx6aZJ8Gj1tYMYWY7rjAWWKzMRPpETDYBrBsJmVSMytJjwHg4jo5dAmhipNSn7vGPFMSDJvr",
  "key6": "4M2Nn36TdSGK9vCjyJYqh8ywc6xTp34QQh1MmQpjxbnbjK952Vx4C9xCBxPeHetFZcnQE7YsjRgobRfNJo8m1iTs",
  "key7": "2GfLFfDTZYmau3CdFMZDUtxSRSKAPF2b2ARACzpNHTojmSyZgVxkTZNtyMaWeBnNnHF2gW16P7Ztn2uUQqUpiEu2",
  "key8": "2SkimdeaB7nr4VG96KMT9RqjhmCskJMhqzAZfsnjmc93W16T1UG1TPbKFUA2Xyyfikuop7Lu52614kD6kjfeTiwG",
  "key9": "3STaH5CP3hwYwcanB1KWmb1UnGd5U2KaXnsYG5ZFC5zX9uaknC7TD994LK6cPNQF3QDtTp1ASfdjJmvR3pzg2FBo",
  "key10": "3pQR7fYZan7qTnC4qXcuF29yF5aD82X9TxDTaQUSWQ4mAwTsQHon1SZLjLY8dX6DUiooskyzM9z1rDQsfANvycP3",
  "key11": "3SSZEAC3nWcrY7eRh2HTZreYcEDxj7QRdW3LCCFXXFU5pc1h3VUc1DBB2B8cFfyAzXUakgK1Ybd6MQuqmgpEBJKz",
  "key12": "3CSakErmpKTSrbyWeGyicXn3Ag82g2LNsGK2hbxntkkFS8bGjM7Auvdxr6L86idgAVhsu7stSQTMViCS5nVMiMXR",
  "key13": "2D4FXoS1XxTyNTUQGRy4RpiHK96bcghm3aCG5M29GW4Tb4GUCigt6F1F673e4LQdZrKeeMBGPhXxuUBnKQqqKHS3",
  "key14": "3ATadAgxbKucRxgFpEDCciunW91dx6LqqwNbNFWwg1VtDeCx6aBRNSn33WtPhCutR33LrBS2qFTrduuwxYpjQk5b",
  "key15": "46GbwVnZhVnYrz2Nz9WV9i82KiE37pkuym85FxxbihkgK7ZeyNXrGgHUN6ppryQnPyRXeSdKnFrgeDFjrT5UTRL1",
  "key16": "5MBSXiPZqDiHPYYjvS821Ds8JQZRtFeuDpN2EgLchgbsWTR5TtamN5Ug7HSnd7CKMoaq2CtX5CTGVwxwGihMGX2Y",
  "key17": "27MQ4QoD7MVzKVyXeMuUco2rb7d8YYz7pJxzs2tnbWLVhoWZM3TZrPY5VhPLp58uJtncZKjvpBEjsTUnNj19oNua",
  "key18": "sDtHBfdNWBVyTBF33oXAwN7xoxEE9vVAbajGjv7whWGGt3sNdevZhM44FBes82DktkxiYodT1DswUSDVF9ZcLta",
  "key19": "4KHZEPhek1qU3rsPiQhGQubhDY7ZaGq5GMw5UGEJ2Ai7MW1uXbShHZyWan4CEuiVn1G1Cpz8G9kY99NhPdjBb4iw",
  "key20": "49HcLxZWpX4dHqqzV955JJGQeU422eV1fcfNGGjuFSVXBWMp6dTBYe5h62ny2Erp3mE9yxPzFNDPLMeLw9KD9hT",
  "key21": "5Mza7TJ8xEsgZfRw7sxiJ6WgA7v9brakd4Y7oP4QUZpH5c5deQWmaGjkKH8jB2Fj7Sk1jHEspHT4jjLnvEDKSxxm",
  "key22": "pW7rgN2V37XCBurmseAL3n2UXPC1XZiQEJvNJUf3ExShbrcsV6gyJU6H1x8QJN1ha1tCbshFLzVeDapvjkXWkoU",
  "key23": "2nsSLD4Qhb3KYiVvz7gLwYrDCnMrnefNJ1v5v2hVo6dSTDxvtRJKUDM6y1ybmm4nt8cfuviFurYcP2H8bRqETDk6",
  "key24": "X72USbbvPuQTrsaJUbzLguko7BQSuoZ9Nqx6TjTQVckyJzBBCe98ASvHw64UUBHhiCmkF4QUH5PhLRCe3V9nDvo",
  "key25": "4D9gemFnoa8ME38AV6NWucVKcTj3PoaK5PeKHy9L8m6NUDgkrkiiwrgAwUgK2XZazwvAj6JP9m2hrXrJcEVuJzKx",
  "key26": "5VDrCkikEq34eP9jdUZXwkQNdPpfbEHx7hQawdDcpreoMF3WjDU7UucyDNcyZaw7hrE58W1uowxaRiZcHbxkxyfj",
  "key27": "3rGS2ZUqUy7dsferXz8d8nT4FshY62j5LCm7VC3bL3A5WE8yvSEyr7Cc89JvdnbwoHEMoG9wWhHRpTiNKdAXRZz5",
  "key28": "3jpe16RS5ENVgkHF5NErQ8wzK61fzfetR3uKQj1Zih9D6ft9JixvdgXbrQbKaShbckz2VGezMNFvx41RXKTpmwDN",
  "key29": "3W5rBCkaLjtk53GCJ3u2fcrDc25RTNiypsTQmeQJyXwYhcbTBaaemKLPQWPhRsMBXmecH9RvjvuFG8jRoEnTJyhi",
  "key30": "5nPEGA5S9aaUto56pK5sGAh5Y5mYmndzuN3QFbXy7Y38sL4c3pFy3iji6iswWW6YNt9w4DCZTTjbLBTp1XDGsxxk",
  "key31": "kndf1VPJkZ7sPBX36d3r1PfWU4wxz2aSQjXSzDiuWiJfXuGFbLigRhfAgiwQFjYKcTGri757rLKM5Sx3p2jrx7S",
  "key32": "5xZWiQC6Aj5uHUqiECD5mBRF21XnPT8vnzzuBH8x8KrveZnNrf7m9JgW1PipYWDwCbWUEq3WSNdAqYydiohmdbDJ"
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
