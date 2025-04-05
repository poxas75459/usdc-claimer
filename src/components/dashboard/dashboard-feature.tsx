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
    "3La3tLNHvKbvEaiZG9aqmQt4baokMczXg9yMeR9t8X8LufNhxSWvNuU6tUWuPPWfGPy7iZjDnRFHM2mNqLM9rQKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAsE6B96V1AsSrVWTGbnvsJa872aezh3nVvjXducmA6PdsvE696BrNx2gbdMgP9pPN5MDnvjHB5Hu4CUJiAuxjz",
  "key1": "2mtygKqDPGLZCXEJMYftjPhTBeALRhpMyYToz8tXWE2BMzjGtsxxqjhEBpeq7yFCSgmBh6tsHker8coAT4VGeTpR",
  "key2": "oSQJhXzNbf5LumtegTCWHoik5enun5CitiHchj9iRYnruEz8UbRSKtf5ig6AiC4CrKWMoMgLtiqSXnbDSyrfDLW",
  "key3": "2eoDrtYhKiompoxyuKHnPC9S8dEEiHKjsP9Y6dPa5L1GgkMZiJRbKgFwVYgtu2gBa78EXNuACEhbPMU71VaQjRj7",
  "key4": "3JF8GNmp1GCKiyU62L2ar9Lci2U8CboiWuLs5ExTwbzSsNfoMiiLyEPBtFHJdmycYUQnxyUV7dgyuFu8ApHV3hzP",
  "key5": "5nHy9PJniwpg6MCkBKyo6Teg3izdBEp2ficfcsG4yZ5BDjvqBTuyR5VBVEjHV9KgAgh1HMJXSS5ZUe5P1XkyzPtk",
  "key6": "44w25J7nd3jKruToazZCg4NPM5MHzRFyL5oVByKcPuXD9nqUTFg3Ai9mJqv5qJnBBCCjCHAgry53stEBQbYwimEg",
  "key7": "2hxXNjRu3gJbxmgiYJiiLBLehNDrqaTQQiPTHhimvjKT9o9DXvq37EuDZYWx3FzR913PhzmGQAWyZtieSaxJgZcu",
  "key8": "yYHP9Hh2LJHyYLDHDkuxqvrzjGwjz6Lu9QWvjcKEECzKf6D4vHewqtEi7jH999H4c165RTAAk7SrtGCepGhjvU2",
  "key9": "qP4cT5hWs38imEVx1aEMwCdCbb7ewJ1XadA7YoDbbjckKtPSiHAFJzRhUZXN3LDExB6N5PMjsTHzXemCVNBkhwf",
  "key10": "3VmcNAa39gSxXL2SM2ZNNHXRhPyrip25PQZmoKj7k8Q1Tj1eT1bpK6gGKwGEsS3TBToUusoJsCv41q6Byy8q9kfz",
  "key11": "3ccdjwhn2sJXE218SYkb83Qu1qwNKcPiEurGode5Ezr6xoe5jgKs86FGEeh3gfzH1zJfU2Cze5oeeEwVu8nrDpCy",
  "key12": "4TEaeNk57Abr9xmjTdRnzxmSozgdyv5qWPGKbj4Lsp6cNavNKnszNA7GmH3zPvY6vG4n9Wb547N8mFqBhhCGop64",
  "key13": "2ihRygiRAdHtpmwHKBxJSQB8pYxiTF6XNVM9ubYVEz2YDfak7LsbFMwA7he3fc8TWBgfMfShN2iuR7kWhTo2EYEd",
  "key14": "5Gn42oEwuTReULzSV1gg9AxHNyPzCfPBfWD9syDKBNV8n71fGuSk5W5A3LVjzHgFT6vH18boFwcEBPcMgCDKtnhF",
  "key15": "2UZ7oXJADq9XAqyr1AQaWZi7EAyPwgfxM4UEVAyRDg1ViBAVP9LFYTz2HP1R6tjxKGpSusrG7wBY4EjG2x6vPBm5",
  "key16": "2KLdBEz3UqWaFWvM2BQbfuDWUBBJSwVujRSZkgXy5nEDA4fERR5BTr6akLbVmuHke9MnBhtgnJLo4JFZNJEnwcjN",
  "key17": "4hqWLdPaNGh8xv7HvSAoUATT4YLSKMNYhqU9X1kUAmJGtqtUzfxjHgBqpAbWRMYtHP3j7TTSugbpibaQeduNV4Rk",
  "key18": "4sZbRd8tNHpwRyrGasbsQ415aiYqvaPQYfB9Q3Eds3hE2gQ5dPFAA8o4dPW974TeJxAbTugq6p5zoBGs1VBr9kkF",
  "key19": "29cVDmSsjLpL3XpNPuDH1StQFHHi1MczL6eS2c6n7ZjfnbcCj6vRWV7eSpD4bZe35s79WJeSfV1s41dJCLkj652v",
  "key20": "5M1skrmrywWHWAQdW6oLWvtmBdTgS13i97MwiERUTBtN9WpUAzbgCxeZaMHc6p1Yz94dwzDbMmNsLuYCuetb3D8X",
  "key21": "4fYunqvA6k2hW9EbNpiA8BRy9HR7tsaXKVooncnQGPMnSLub9pmXe1NcALNDPXHeyo5vyoz2fMPehKbJvctY68fo",
  "key22": "4ZX8Q7Rv2oi88HJmUg1AHH99uMav18SSWomcUXgasLfbehRDkHWBvp3vQoNgRXiEV9yBjKQgwfdKH7pzMjGv3zmX",
  "key23": "4zguS339HoqjQQEDqnJbx7QFJMyfygufotUyiKnK7Mr45wY6s8SshojBhXpPY2AdWzhmQzR7gbECXEzwGc5MdiRc",
  "key24": "4CjV8V3duj88Y8y1VAB1xjZo3VYRgCFfiUqSFEY55VkxTAYUZ7jiNFGWjEPkn1pVuuzMUzfV5KZMWJj8LX8aYZUf",
  "key25": "5SWPqkiwGFWq3txqA8YJyzghTqXBTHvNFf4UcNoHjf4V6pa3vXvgV5YHxxU2K3EpKWGMQs3RwiFJU6E4v8Nt7LvC",
  "key26": "29kCUZb3dq6X9ViCd9mFrQ4QbWXf5UtGY9eGxzwQCKkA9ULmiz28WXDF5iGUqpqpCAvqn2muFftyVQXv2NNkb4R9",
  "key27": "BNsb5hr5CUUt75cF6drXLRzUXbSoYK5PevaHAU1jorN2t9aHuQzow9PYcvjcw3qsTNS2YYq5sSnyHgnrp6QnqEj",
  "key28": "4FMybuUB17XxQ6tDHgDKnFkfqLh8Aw3aZE6TDDztXyfyBhzzUpGbbXnTAWSPFrx27uCVrSNosXAibVXA7a1o8SZ4",
  "key29": "47L36efowv2qR63y79xaNgREqXRwpngPemRFfeotzq94J8dfedFAs74WVThMpSwYGyphuea6SeSXhPTDrcsZ6wMc",
  "key30": "wd6rUqU6gXgN9TaSo4jh6n7emKUL5v4Pdu3eyLS7K8mptdAMGYtyM2h9ghu3fdNGqZzzvRoLGhUacYHgkcnbJGr",
  "key31": "ji4HPtEeZTCGiZoyw2uA1dML6qL4JAfGPRBWqcU6he2y3dDyqjteuvbyXsqnHkRYmnhvcd2aynFBC12pCVHeGtx",
  "key32": "4HnnNobyinAQ8u4Bh1iWpK29Y5Xcm8rDKBjhSwYkPhv9UgGxNMHadFp29ARAnn3qJBkT8ARhQPoukBCuQ4QkRXtG",
  "key33": "22vXfybo6gbDCso1FPjnp7yRRYBmyomPbgG26AWd2tLLX4LAcZpyWbouvD2CLaLntkMMFHTaoFV6ywmJS9U1ohov",
  "key34": "24rMdX46sYU8UnpcRNhsmz5mzVKLMFYXnrfzhtscKtjMDwHtqSwxDFhi8p3vsefu27K2T3WBkXFraQ9HdrJig57P",
  "key35": "LKm4iEBy3zjoNXh8SPsFqKkS9vE5CoZj9xSRhRLQdxWWe7yqET2Hc4yA4V6jUpk6CWeSVyqM8Xa4tpfCyAdSNcG",
  "key36": "4oidjXYwn3ydwJqkDnNTVvjV7cdk8C3vTPDopsTALRw6k2iAEEHCpvJQS8GCjN41VhMSqyrbcYfx7j8RcjTKNVGo",
  "key37": "5o9TEvpofT9VFxCebvwG8wGvTHmph5Zn2TidC6iYbQ2ByCibM4y9QB6fm9j946F1vBtAktvt1xpw8nUCANreqNHh",
  "key38": "5ByQTU9iiNaQZNTzxWjMMY4FwnJuc8rQqxVybSMvjYyHoCMuPir4KQ3Js2L3dbYd4U5EDoAW7qQX38XifxUdxGJZ",
  "key39": "5bJo6XUG1ACx6aAKcFi5fB9qsJwh2zYfxzape6sfkUMAkJkxZ2QhGerSpXG1z5zZAbhiKyDP72T7FTHraiu8cNAt",
  "key40": "2uaXtSHcNB5CbHP7YnkhPaEcBh18HX7BH17aKECXAYsWH3yPSSqgkSWQe1z9EZfYRYPhvsQrhhjnqXCB8C82AKit",
  "key41": "Z2DpAGruSd2tC5TjJpMHFLqaWtfq3PGGkJ62u3LrrBdM84gb7XPucWQJVSnXsZ8c9dcHYCTMRqMpJMAziK5NhiJ",
  "key42": "29RdqVMroo8SXqdMrtQUwz1MN59T8D98JonjV82rbcRCMfLLpcoeqnmTHR9d7xRUqt77uw9zKw2JbfKA7qTZLUTJ",
  "key43": "2a1h5m7pCuzGmcYgALGmfXHaFTijUWvUVGHhw1CsknAHkZqm8DPabUuTd1UUdSPiDVh1VsnmHBHjMnJR34wVy9qR",
  "key44": "5CBBjyLdKahvv3TydZcJLVosoFFVc1w7mDXjPeh3im2gQoMkHn2AUm6hUhZeU9BbgKLeriF1YKqjUm9bMwfbfwZv",
  "key45": "1wLqHGiLEmxyw4Bq9KgiygT6E8vmiJ8qoEfqxq3Sq9wGHwgRakbhTAC8PVeodbwf9cgKz4mDEWjEGGMjXNjhnXx",
  "key46": "5cV2Cfd9YTt529Sh1Ks83k5TUgDjSpCUa2qLS9jdUYxj55fFQUvATKMZPvhRb6pdFi8CkBkRN31G1sy8VMEVpUFe",
  "key47": "4k8H5zAD1ZeU7wVR1MhNrGvHQXEuFwPKasBcZSTG79WAtW6yh328SAzMgvBNcww14sdNBqh3KnRoj9Ld15XQ8MhY"
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
