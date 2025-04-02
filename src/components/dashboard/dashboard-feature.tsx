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
    "5jdnY9NgMyqjLhs8hjCYLNd5km236ZtoPZQeBQcDLaBtSr52Shx9HJnLaNWVrHw1PoEkSQM7E1vJAxSQRqoppGWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkT877VoepKLeKsVpmRRqQ7wcuNydm5TsRXLWGXyUEBxDZpFom3ZjGBfGj4N5NqM89D9eSEKoxWmVWKvTtjpi2e",
  "key1": "3pA34FWSkUhMC3GNYZRNani4H6jPTHh5r7aE35XsDKJoqXApNZnG66oiTgktdYeqXNE3QCwHj4ofoHrcredfKHKz",
  "key2": "3YbRJLpGHhLepzzXajGDJcYmUGfwaVtZjPfyKEydoxgLh4j2niTdbk7zJ88a5JYA6MH8dP6pbTCQAVLVFBnhMMxc",
  "key3": "36PkPQ53x8pnySoadqjx7SdB7W1N3Y3ZnwC1xW7MrGmjsAbMqoahknScmqFYWLeiodLifjYTbw7chN4nu2Ddwd6m",
  "key4": "4W9ss2gpLLvg8UxrmiS1Jxu6r7QgHGREV8EWmcSGSjkDuHw9n8KqvAJFJK6dQ3WjRir1YM4vwjkJNz4FYhmZqpMc",
  "key5": "2keFujzkFxG2kfjHsNBhVg8uHigkJB7awtdKifNjENF4pbyn54PyXTCKTJ3ufzA3MWTtnaDaAnPkRzuZqP8UsnU9",
  "key6": "5Y9m9BqKX8YcvMtkqCv7BrStthUxAnBe6cddYJEqE4KeMUejx2LQ4UwqR2QHon5cAKiaQxkpCdfKjtRPWXz2PNBq",
  "key7": "4N3QjiZWbNKxKij7G6LATKNxMtpAsnqTJRiVXpZRYoNEvS2JzBtMqqnHKiRErMFK73VUFrZSFgoPuP5EDCUwKdD4",
  "key8": "3nTfCF7kC2wvfg5d3DPTZuDnSzXhCh153P3pzjRArkhHiPzND8akQT8WU3xQHMBnD5LM63ZqXgFEuyn5JPmw13mB",
  "key9": "3rjfJ37PDjZk4VD5fdDvjhwGuDYL8CLjZSp6FD3NgYxCmALjS7WFf3Yhoo9wmuyopQJ3SANSb15B7TB7SXrVfvsF",
  "key10": "A7j5RCnT6CW3XuvS6cFBf5p61d7JknnX3hiPFRmeT1wZG3Pwm3LbqbsZwa6pWmSEBvAvMoDDvN17dQLa6sJF1Vk",
  "key11": "66sdpEZJvpn1kwaUy6C8qGHTm14CAr5Pan4vhm7fheRgsnJGsr7WApng6iYhtTY5RDMnS5avca6a34rxajWw7RYK",
  "key12": "4jun7pgxpQJnVUMg9jmS8vNJQD3guA5eA3LT3ZUeQqNrczqv3sD9fzac3poerxSpC1vvaHcaqxEBXWCCjbH1zGZ8",
  "key13": "2JNVzBFzPezpgfr11UWAVjKDSGCuNtsa1XnTrWiCtw3LNA7R3eGGfoAvGv7Bzeuq2WyCxGvBK6WqpuS2ofACMNw2",
  "key14": "2coXHotHrH3UdcfT19X2CjjkFiQnVkeV3Euv5xmX1kAnFrGDnM2b7i8JUY6mt3tF5Gtp2zWakwGEUNgjLbRg47k4",
  "key15": "t34nREPgFSGqHdYtFhiuAZxLQhgSG1fBMYkqWfpcmwYPTYppWDNFR5dB5wxcZWv8rAeooSYmdEWETEDQ3KWC3RJ",
  "key16": "4gFmLmg6esDazJ27mFe7vEwnww6h11oJyzxEnFyo4gWRLprBhNXUnaW2nYug1HJEyGebxTMQnBF9X3MqbFX3bvSr",
  "key17": "5HNGN25FQSCGkmsQk94KbLT8H6X3L78d3DDXXZQpSePuCp4r8TKb7kv8CCFWrdVyFvHYP3o7byprm7pcU9RSkNEX",
  "key18": "2cr7DJAyc4MeXxm46Z65VDRQ4Rxxa9RsNoDL6o3GdFk5zCaeM8xCQiQGvrzmr7Uu6Zr9G3YRHXgg8beC7vpPJhSb",
  "key19": "3wPtmmCcUU7CjQUt4ACQSuJfYNq2qxN4uWfiEH3tiHhsrgTUFYZZ1YeMQSrX1dm9zsyLRhBEa1sihy1TfRWBu3gp",
  "key20": "5AhLQ1FX1Ubs77rMuPLC7ufEexHX9Rs8KzZa1m3RF2GLiGipNUHiU9PscqE5JteV4LZUcNV4bigXYexFsADfLKAR",
  "key21": "2LyPMU7p34LGWcdRAZwGiRXQhmruLAKrWaZHFCa5SVAxoc1AmVs6dZLnQXSpfJy5JpZ6qsnCvU4JLvybjsEyf9so",
  "key22": "2e66Uxg4WZcdLX2GVxqdQVu9PEM2vtuwwnS32D7tVV37pWH4k1TvoPMgDR6K51mRrntGdVEnKpwn94AdZXkB1J3L",
  "key23": "FPpvNRAvH8vpjR9kmH5sNd5Kz9tASLfzDfi1DLRj8kypRsvG5TmL3UckKWxFkMqQufRvqF5tzeFevtCmzxy49Aw",
  "key24": "5UTvTg7s7R6Wi48UqLBDT5MenCXJxmpiNdmzTLH1Z7nDGPazXgimqwVquHyBeFTbT9T6nqDuspjygsARrvagV4h3",
  "key25": "2XLHhn1FYLBEE428cJCaE6wjheNyupTF6L3syy7zbhDj8nucq8TRj3ChhKR18nF8yPpX7tjdancxrDdS6W919cUg",
  "key26": "5K5XShtAFR6Kheo1hNk9ztHcv74nZuC4SUF3hpBc5ieWJeCQW2tzPNU4FcfN4yFpHUTMZhHtt9YUEYbRHTgmtAP6",
  "key27": "3rPXqLyxuS2V1ZQynEfUcZsXnWKtLVkPciDFDA6NyKsSbMHZRD11sqLpVv5i4X6fYfiqwsXY9d6W22Eqd25y2KDd",
  "key28": "3gDGJwryYdDYPYNgYJSJT6E7XWZGbS77Kcb6E6uKC7XWhbjMu5yq95beagqPcRzf1xGGS7xpB2GEgrX7shq5yvmH",
  "key29": "XdGneiGQp3JsnKomGRYtzYmbi4wFW9gjJn6hyRNEjN5s3ZbeKwceFj7pDDQcGVnv7hMmEjtbA36WRoMxy6NEGdF",
  "key30": "35HqWzg8eoF68AUTLJj7FcNfRdvnoa7TPKPVJRZjxtxYDcM1LV4u92oU8kXqTXPa3Dnb95rY4gTVL9ReA4SupRVX",
  "key31": "3PciAjcdkBwjfBQ6ffEjPBUMXamjwX6UfgrFy8D6wZyW1M1ebVgXUmGmkaj1JyQwg1dMpYkBVsLT3Mt4VQ9AZ7RU"
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
