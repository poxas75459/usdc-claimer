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
    "4td29378uGaD5F2CCaTqBFgjLff2xbvELRiVe6NwHhbnRCENqe7QVkVXrNZi6FazN4MUwUtU1WLMrC3RMAWWKxc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDenggNQTizy1Z1aEhawRbXhvqofr8WvookqgoEDUk2N7zm8aMbu4uCUF4BfAux4re1kF6MYrT4LBGMF5hsUwWw",
  "key1": "AettaRFDUYbHwxgtJWmUsSVd6mDAszNygh3F12hUtCnmx87WbjMm2uWhcr133TUPuf7qvuUMXNhncBN3qTxK9sc",
  "key2": "53cpercadVoi5bwSFhL2FqdDQtNNFopHB7W73oN5jEx2zUXxnsb54ymNYpdaM7FbpiqMPtFwZT1CzMiRSDqihamw",
  "key3": "2XA8Z8g9PJsexAkoHSKcoeAY9idMWDwubUkik78AyBsZus2bZy1MmLUKdCV1PmHHsK87fjtSMJfFcQVJmg3p5Nfx",
  "key4": "yrVSyfXrpGSQsgKsWYsnQRcby5V5P7REgUMABDjf29nqq6hPf1d8MFn8EqRMhKcLnS1ASwLDNaZY4HWAHFVYJQn",
  "key5": "2mYympc1raEbuN4BvEEHKz76Qnp2R8VVddEeykMbEB2ciieWmw6p5uhkp2sxPDgZ1GXnKaAcEfX3MWK2LAgFJdBJ",
  "key6": "3t2r4iRzUwrHU2kvqpWq9QjgJ3T5tNreF4yvRp3FqbJTkpiBQe3dVovG472kYSHimnnUZEJVdYtcY2LoSx7r1J5a",
  "key7": "3bzBgeynbYX2uTVs4QhCzFYdkcP6uL4Mb3nbQ4SmDCLGXYkxznAirL1wfWeHumMboQdEjeQHEt16U6Ke3WKLReHQ",
  "key8": "5jfepU98tedeVcX7eeMPqcSWDiuYKo9orhRN77caQJ2qdcMgkHuxbidU6rkMb84ryypknMWNtyRtLao8u4QrKhq6",
  "key9": "2zY5NuMZGFTFiydy7wnshKnGCztTDHcxDKFunXrQHjP6dE9zHSTekLGyQKvRgZ71sBB7VwCDNUg3NyHy4jTo3dH",
  "key10": "55endMWMCih5YWwdypXxVgR26Ncd18rL9fTxXj6JkRFMJWxTxzbsY1mbG1GMuGRx7PFXorDjDxwMw5ABoPJSawdW",
  "key11": "2KBmwaiamZfvy79123QZ8tQRfy77QqfQ1FjB5nfg9tLBWoHYricTHkPuFcDrRXmJH6atus9WYxwK8jAFU8MBnjxN",
  "key12": "4xfDVYTCQgpTczrgGF54BmT4dzfo3ZZUdasFtgJw9RjJaN48bxWpVtpi1PadPYTuQPC9zvViQU9XJfNieWwtjwNS",
  "key13": "jHZY5vPBcJFmbAtdJMPE4TFDB5oojfskCMU1tVE6Euzj6kXQDJdBfjmfrGshUeJ8EzesCqAh4ZM9gvyUFuEWX67",
  "key14": "3piHdmzHWgf2tLennfmUa3Sm2RExTz6asPCwoxPnMRAJU3cANHMCF2xKuYXsJjLvfQBqf8wqU7yaHEm5y9Lw8e3o",
  "key15": "2CVqLNLodHadjsc54LtocWpvmExmFukxNnXmNkuZE18NQAXYLuJqUu54CeRnH24ENTJFMrHz53yc2S3t1kTKZQ3D",
  "key16": "5UNSFaPWtK5xjU8kL7k76putLjiCfF1R5P3WncbJ4XntTn95d9DneMXpcV6yh6Guuc3wpAoddX5GMezLhDU3xYYe",
  "key17": "3GBVj61pFLeVA9uta4NKUiuSHZzmAT75RTsDW14rqXM4duLnYr4D33VpzYTYPofrsFssq6Gqih1v8fA4mXfRQgTn",
  "key18": "4AhhtoMNwmnWNH119GHm7LLmo9G5A3eYCnc2GHYGgE7LUpoQtsyrTdxiDHf3DdnyvEw83UJN9xzaXAcSvE2vt1uG",
  "key19": "5eqWHMHPoE5tXactrafjNqrQGHDmAgkW9tQrbojpMKXVG4LFKsyTHHmQUye6YfzV4s95sZTmGkKZkQeNdVTFTNJv",
  "key20": "5LUaiT6qsgnsLYy8oiLBgkGTjfTP68cPQj3PA4fj8xUguFkCQdXQtD48qhUJwPcUk4cnjzxejGiyuRTfxSmGsJ6C",
  "key21": "5FGqygeioVRm729J32oeqY9PXhykv9B1rmi2EHqDhfabCUUYXWfAu7j9GDv3x1ajXuGiTbTDtGww3coFnUwZpS7C",
  "key22": "2g21mMoaCAbgBrRbrMvMCgk5Ki3xZDxUWgu178USYJfLoYbdwPejCu4D7tA7n5Ncc3P8HRUPG6dbanuTzduasPqr",
  "key23": "49CbsgXKzkmhH4v4T5C9iZjf9eRQNzakR5abDGSSMoAPR9QHmvuG7jy5EBpb1sXV93CewFgvpt6zVHg1KTNQhrNe",
  "key24": "2zvSLULADk1AoHNJB7kPEbSdKLTcgZ32HnFepjPjSce5GSPaMvek23WHLQhfr1cXj7ksPb6xmaVvzyaQfdeNCkGF",
  "key25": "2XTNV7UTz755FPJWvkjdo5uKBjXgjc3eA8zqPTkDDYUXkEXMtS7Ln4nwZk7mqvJ7SZTbNzcaBcBLa3YDDoRNSrN6",
  "key26": "3HJD4gjqNbno6RjtHfiz22PHtWCZwykS5Cb2U7RLWiTr8SdnU25wHm8PQEmptXSZTb4aHLt56A7wjzRzWD1yNex5",
  "key27": "54DXmiAZQ9qR81syqbQX5NLBWpSo9znGRLvetZgAP3iSt6RwAiagkXaMv5Tv3Bk5L5DSHGJFgVr5S216ixvy8nms",
  "key28": "2sP8c4VPMp9v2HsqSkn1X4LhjAi2nuDAnhbprzNF82WRoxzHXHJ11B4NeFu5CdHVWRouE4WWUVKxDerfdFoyJtjD"
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
