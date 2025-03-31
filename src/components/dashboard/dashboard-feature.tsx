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
    "5tybZb6U7n5eesGKQ68JA2eqPzFboLGDdiPYpfguqaw6pSfY85CHmD7em5QkYUTcDzAFm7VbReUq2aSYm2HSLKi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArYaucrCAecKqmVCSp67Ar71DHXhhQw3WmN1qHJgXpA4fPWVRkfS4qZfnxoJ4NQh6DHE2FsHZt2MXy5y12rGtqp",
  "key1": "5mvwGxWCkmG44mRwhstmxSDjUUVPYwF7HnE7epqKHSUwoj12FF8Kk1vUFygt8d7WCc7r1tiNeBPjvYHj5VTF81aJ",
  "key2": "24zpScaBF3qRKNEXmoh1THX61VUJu4kuqqzRMgWhQdMbZA1AvHaQ3yEM6dbJxcCDasRp2aux2RPH57FQnVimSo3W",
  "key3": "2A7fz6MQJGnB34DqwHFMkWJ9HNkJqU2PMTPh8EazUBYooWteyHQphk765xdRHdRSiPMX47WXbRsZ4zued9XsBLoJ",
  "key4": "2JVYsQgFKxpXBmz4TuyWTQhx2bxThYpeA5mCJ7w7uamziHc4LfY8ZAfYJqhoLjNAPESrArVnejuPDg4Yu9CaoqU9",
  "key5": "4qoCkNzUvdxgE7bvzHA8nCrwJEQ6y4mMxMYw5t5mY9RhAusd8FmqFxzQfMBTrDFoxD2N8Fu9y5p4mqaHeUwK1bfD",
  "key6": "AfR3JunWv4WAhHG9bjy9fKQqMpTTXHkJfsXA9s5FHMXyFoJxveSzRmL3Fe5WdmwUNDfB8txpJN5jwrtAwEoWM1b",
  "key7": "2yGCMK7VQe1KZfub8RRUBHieLeZsyXnqbeFGb6YQ7Z9mhfxy5cxxP8BxrCn8iiMqeSSWHAw2xPsGj4R724QHTbo9",
  "key8": "5tBeRxWSy9osxycDCNVRGRmXtTpdZYL8nXhAjafGduYZ224ZMG75E8pCoWDuUke136ax7QVwy7DjnCC2bm5oTwf7",
  "key9": "285YkQ1Lfe9sxwEP3vZESUaCqM5MUKcWrFrFFNtGPjf3e88uwbjMzRk1gripx28piMXAs6dPVMyNarR6BmK66D4z",
  "key10": "5FXLhpb6XF4Bbid7Q21ZjufHHjF7CYTKPrFvSHfd4tMemKFuy1TcQ3ofXWPgB2D9zBQrYpZ3xbiTJUeE3nwg9SoN",
  "key11": "3vjopWDhtvhW6B2Dgkh7wmf8mh7KkjGTLLMQtnFXDmh2QGhUp1WKyE1CftHYt6u3RXkzTvmsbkYiTU6GUCafSqVA",
  "key12": "2Ea1j9sdja796qC2J494x1sYiiLPmEwoPbY2VPdt3SMQWBYkXcrTE1mj3z9dGoi8XvMPqy5Jr6BRyCP91C2dj7sn",
  "key13": "5kb62FpvQnKwwfBvg3cHzWH7BjTutF3F6tpEBvaddRWcuPkXApGEFeqiH1yv98MLVN69qxudwMX3ywRYR7AAfoJu",
  "key14": "3kxKxz1owJHe9XwWyMW3vA9CF3k56tDdWhsb1n1iaB3NnugeRseRCPMXPNmB9iQwum3HodcdUctRhXfQKzD3CZgx",
  "key15": "5YtYv4eUqZeSqVtMsdxjKEeJihCGdgjWAZpEGe43aY7SytDGUwVP1Xd9EzGTZ65wEot5mgfsRgfY2N2mpb9wQLak",
  "key16": "44ygYiHZeYpMekHTR4cvpAQMF3ukC9LDjqAVhUtfZnQzmBzrNiGpTPWiHsGFCza3m1V6EefmBaZti7oMC9LegeV5",
  "key17": "QoTKGzCh5WpVssqQciAmU7z9crqZDXJCpmGi9q5o5eoozYkudPpqoCyYrLcEcPVopku5G416V1pAdJHVQCS8JWP",
  "key18": "5fEeerniXMfcSSuUgWtb2srYC2CALCkAbFq9EaHub6JcPbrrdQKU6Xc7Hk7encWNM7ECaXNfvqT8Ln6cxefdLtxG",
  "key19": "4FLkP68s4Bns1dViWh1djhwecekjjQYSpsvD6msnPCMDf7C5YDzp8NPh1FRoiu6o6KrJFGmp9yj6fbeHk6zjwNoN",
  "key20": "5LAE7Nb3SRjuPTtkf6ZNbZsV7pwTGPAXNGCkVGrJPNTNUvYgLWGFQ3CEbkG3wL5GifQ45XMoJtW4MPca2bgx4HFp",
  "key21": "2tZjjVhM3JKQLNKzbwPRSCR6NwcCcJPh7jJpc4SMBk55nFybGickqdNDGJASRfGScMkcKYoevYEKW1YQRiAjH32g",
  "key22": "2TkmP351XnURCm9AnsXcLV3qdoiLbc7BeSeKFMYBEp5PNXv8kZwKn288f4spRsBtsaTJqpRy73ySG1rPSmi54RR2",
  "key23": "oMP4kejfpqbeQyNsekXrTysZoa3tG37fFWzQAH1DzkFotDGbm9NXoZTT512tRWK1MivxESGhE3k1JWHVvTXiUVx",
  "key24": "sj6V5ceSXQriq9kzaruzvzvqUZ84C3Wq1F8rP7XXt1cErnNEjfTU58rndgoDpJwpArvbbdnTUDhbYy8K9csWeHF",
  "key25": "3fKhDm4Mn8Zpw4tRppGgtW9XwJmqiJwejSLwgN55medD9AuxvysxLnP94k552jnNYKNEmeS3QytDJvvFXRXJsGex",
  "key26": "EBwTMd5ET6ne6bbBG5JuWy5ci4xJNZpZcgMvM4ZqkcTmgnMpvtVoUtvY94fq75EiAwcAeKDSZmHGbDXTYgrGMwY",
  "key27": "TfaR86ktH6JvG6Shr5PpHTpUk5GisxZF6KrSiEy65tdZTKA63cnYsc2bqmwzkT1DMrbBF5m4W3YQUGoJcXPNSSm"
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
