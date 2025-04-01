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
    "5ED2iPJN2tEWQXTbKGuPnznB3w3FWayBeixNRSdhXfAs168HXtTnoV9nQ64AUNn2jXLhV1BaZjs6MS4bvXfgAPnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HCei56KBLrjGMJaEDL6NLgjN4XomHB7Rpjawg1YApop4Zg56bGidSdTKrEXNJ2farhakTiRpoXqnvCHFWKFxKeR",
  "key1": "3LLzBbMdEnWutBLTgZAGnKjFNfUQLb3SBEWF8YQLCSgLkUqwxxz7um4CquLcRNgFE5hKDtmH28HwRGq9LjCKKBdB",
  "key2": "4jYAZvyDCrDqtqzMHZJ66uYxfzQXwkLnB5Gz9Gsa27aqQMKvgAqxyrzNYBz5qbJ3teRFezL5fxvn6LndW6unhfnF",
  "key3": "44Z45Q7DpUGbscrVrATKZwN1MKdVUH9TdPCBCcdmjZX7K3KirkRR5wsuk9ywdqPwSXbStdSz4uZYb6ojdKJczaqp",
  "key4": "4oQgeDTFgYPeMozbYSsyacG6R1f84vxs9T1AvMUgvmNRuC69xNrhYh5JE9mvgMvGiFbUfPEixtazM9WXNsr2CVoQ",
  "key5": "zGb5pxWHpjnRDn3M37AFcdwUPSyHQUQuU61tsKCBDNMgQb5LHNJgy7Syt3iDW2UoW278HGccbBsM8JXKdk6dFbt",
  "key6": "5sYtrjW5nsTXFmFRE3gw9t7XaxFWvt8UDZXe2ciGaFD4RjN6BthbHErNMKLG3HZXASHuswZ8EVjNCCpJk5MATmm9",
  "key7": "UBbNnLdmWJ7f8cTyKwKAQmzhCEEiPasX95ryfeV7WVYVBbHvxVZ8eb2As6bew3bCjhE8W9wDhTmmGX2CLDpF8db",
  "key8": "36q7hMK6PdUjjBpp4RLiY4RAFSx6FX6FAtaaqgfdV84WKQc5YHs6mU5LWSypzBUahVMBBHw4YZSiX7C8Z2c2U3y4",
  "key9": "4tuNtV4c2DVfkUGd5yAS1AixuhaYdPTXoaVLGyK14KyVhBavCTpyPCJ13yi2cptjB4agohNNejmtaZM99pQHWht3",
  "key10": "5mVPYnZqKDMHFPdEzPcWizN4aLRPQeg7JBUBvYdpdF8r5sFVQLvWUTcnMSdbF3sferLi8MsCa7pExoK6LSRc4WZR",
  "key11": "2iug6H4iuaczzF2traLFB1Xsuhgd8YcGcG74kU6arWZQ6YMdeEBKu5mw8VXGPjMom6Qz6TzyLvZS6HADcXv7NitN",
  "key12": "5YF3KT9A5ZYhfAB2XNFYKyPjvuBWbpehkVhwCjurGhkvCnPpKRJTrbXp9FCBsWtV1s3CXM7hEumMMJjaNX5wbYEg",
  "key13": "3kM4ebwy5dhmqx2Y73aBjy34rDsTgZpUXVMSCLvQMmSE927n7uK2tdf2GQpuaRCztQcB5wV4Td3FTRYLdQpBnQ33",
  "key14": "bj5MriA8kqyErmiVsbxLZeNZmb3o28Lq53tz2qbMNYEtfUj8L8BERhUrjT1D771qjK8opom4pNrS54GaTZtV6Ae",
  "key15": "5sxxT3zQxLmuv7nKNAhXcyyEnMKjn5nh3CfDMEuzKwJqpdiWaAyqNAf55mFKBMAw9vJUYHeCJUSjUwamFe5DJe5s",
  "key16": "2NV7vXLqwJhVwtpkBZQjPQBbXX9poiiFSdhpujzghUMRJDwraCoHQPD2e9Kkjnc97KS9FiQpZv4nhVYbR6MDNGHW",
  "key17": "2KELpEUW33Ef1tVdag6qQWV21HSWLnq4ABQzEpzhwqFrJSGLet3stwEDq5AqYM7j8R2YGSLJn9Y7RskmFwhe2yvq",
  "key18": "2YugmSVY2KrzRcHMhm6MagQEh7o8Y95i7VFiXRiQVzQGv2sXhkGYc2kSJvZGdicj3fCFAdUnVXgmCrhrP3DuemSF",
  "key19": "RAPnEymdg8HeJrw52JoiFrKHCZKjT5ZLK1cKLz8J1w1pa4iqcCpYLk9N8rrbeQAj8oyc5jqva43dubvEmWaVKxE",
  "key20": "5NuWAjwQPhfWqtvMkiuRw6YGVW7YKv55CaGpdLEWg3kjQTkGDbsbPcmadfeHU3iU9PD1FxoyJgBe1cRDdmt8XYsb",
  "key21": "34u6BCTeFZyGwNv1XdwXs6bS7nSZhy8Zuv4W1fCdrkzUbFjc1EstwYfBRXEn1TgXBa9W6vRJAiF39ora2bnj7TRv",
  "key22": "p5Kc9HGHqLik3w3HU6ghMhNCXz68EsVFKa3Qu1nn8tAQ6CC6e1sx4pTwpUJvjsapATo39K7PtCoEbU9hVwbfx31",
  "key23": "4rzvDpXJvTqk9auZK897HANYVL5Zn8DYvggZPXETfb3JTd9W1J5qJbtaynsZmUfK91m7qUeUMWcnr74BEwr4jNUt",
  "key24": "5jyDqak7i1YCLkR7iuxafUVGQpyAKBGUqiSEgFLANwBJHp3fw2nYHqxnESpRvFvdpffQDgJ48Bf4PBoMXCuZBRaG",
  "key25": "2tyzgUNRkMPoegVg2K8n4sJFWBpmmo6iCqSfoenvirnDKZC9HurUn9CcRPyMDKxjVnLeQL92PM47nWMZcAgMHnP6",
  "key26": "bKXPLQ5AzPUDW6BC9cGuuKRfrVWXKTeyg1oMaearBq3ZLXXJG1LSpgaznWptUnDjTQBfdiJD36TDxmG2xFGcZcg",
  "key27": "2q6qTn6dqUcH1fi1z398eKoh9BM1gF4TA4NvaB6MSsfGKWCHv1msfKTj5LGPmJeGxJhjWGXpdT8E75NohtEi1YLY",
  "key28": "4WrVseKeBEVTqcS5mLwHU9z5FqbZDkF4fT4Mbaku6VVHHavzoE7Av8MGnvK3D8JREVphiytvFAgT9kUEpsS7GgjT",
  "key29": "HXbedUzu1aG7qzMiMF4aqS8hKavX5xzr66Sv9rybfPxNtPgVwt1EgkfmQxdvSgrsreFuR6jhbAKGGarFrfUD5te",
  "key30": "3bJahcmcDduXok9rprihhUV8jqN9niCCxwj9wnqR3c5Rm59DTDtxgFJJqZifv6KcocuzfTrUsg3D4MKtCcQUfaAx",
  "key31": "3MCvZGCay2yPbCzLMZuenycpJdqxipgNAxtktihsm3ckFisifde8kn5swdFojbyhiTMez2Ew8Ffz8PRE9GoBq8pp",
  "key32": "2HriRssygeBDmrRYDTEa3ti77Ui9agYnnGtN6mnAnE8GkDwY4xFg5MrYj5r8eS3oWNMZa7BRA8HjR2pJSWACDWE2",
  "key33": "bAusZNzG1xuzY7R2BzuEvkJt3sq17FkXXwjKPKSP54x7S9ed3Vczf416Rnwy76xYLfuV7KexWSg24wJVrBcfhtp",
  "key34": "4iZkWeky9eaauUmS4oTvrSDqqPzVMiNDsYYG8LZ8HLz9X4xWupXtAPciAbmamU5dHEzScXAeteuk7nvY9tAVoS5F",
  "key35": "67eSyMYjdV2eP5SC8gRD65TCyZuYwtdbwd1Jw5C5X1fGtyRTjzYaj1GqiA2338ztnDndYW6iwvzPVXVQWLaLK59",
  "key36": "uMfpkFQHzEhjMyGXfn5gbKxnajevRqTfoCFXWWjJSLHRX5eiJvohCgQgPAM9DRWVwiu3zbkoYv8Z8UECG2UYA73",
  "key37": "2yr55cAWAD1VBPpx2VADaeHh2dCGmaZNYAn9jS7jo9m4d5j4m48NeRhUWGjpZYfiqUctvwV3Hfc8pUxHsG7oYaQG",
  "key38": "F7GXrT3w99xcEA5Wh1eTQUnFFHVbszg94iTs7CsSdc53QU7E12Sfh4dour7raA5Fsv2j2b4F4hoeH1TMysna7Fa",
  "key39": "3CaHL7g3VaTy59zLvi5CrEzf3kX22Kkd4nyrzbV9yG2jaq34yFjsxRwyhnUWxQ2cDbLuhzcp1KjHtt4Zhnxj5Zub",
  "key40": "2hjxyciBHdJha41wK9Fv3cZgXNt9nxjwc9HhvZrvf4W4UteXxXLqdStK8Can2rmeBrmy8xem36e58rweXb3BPmM8",
  "key41": "23E2YKRLDmdSpupDmNnDY71RfN4otR5BBH1jYE1QiiQvXctfLkgF4n2gPs1zSWMQVQfr5EcykR6GtYeTaSj1rbn2",
  "key42": "43oFTRvEeUSV66PaSwm5jjEPJmeGCiZ7b2HCkh2xg6ojvvr1N15eoStes7Ms3NFPphSeyPrVtvAoKoZhN3fnZbE7",
  "key43": "522TyQ4JAFxGktv3VLQk2HhiretZ5PGCDzmWvhLQaQgLJoANmHCJW1QjjciL9RrqYA2HREph53KzJeZNcNz3oxQi",
  "key44": "3zUiW4qo7muo9swVZALqCBvYX8VG9PDmumCUvC7jpYTAuiEismZzrshLvLmHoJXtQXsBjCzTZ54EHQQ82KVTs93Q",
  "key45": "5qM1temrbkEoAggheR5By29xSffWoXWLn9B82GqR4XW3h1x9uuxq4PWQeLmfWcvZppR1zFRRNAYo6HpUqsrD2vz4"
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
