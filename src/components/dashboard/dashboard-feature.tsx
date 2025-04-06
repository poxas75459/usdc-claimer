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
    "4fTfEg7Cg5WMypDirUzB9GDqUte2ytKMNLNuWESvJjoWHagUnDfzdWJGeq3JqvxuvgZoFYzoaz9UHv2hGsqkpXDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J9ki9MBFaFJzkX6yU1ePK4g9fugjikZ88mZ71LK9kwWdDcWktnxb1YY3E1FwiT4hN3azgc3F63Zap3nXpcNThw",
  "key1": "4JApT33b6qf1qhg7F5bpu4heDWWtp6kmdV4qvWgFKr66qwAfkYj2txZzwvypjU5jsqNEZ29DLDY35D87VJuugPxP",
  "key2": "3bNnvXHT78F52tqRePsjE1kZUn2fpsWFbngXGg5djxRs2BNHPCpWis1QswzGbrkbQA6MdQckkFvB1c2QQj8JfMcP",
  "key3": "4M43EekLiTZYqCJnMNAEEcubAECowMc4BbzGuYZXhSS8koRGy93VUhEZAz4Ye1e39sbvjV8QwfBcHesY9xed4AJP",
  "key4": "5tmKswcUaS6G7JBrn56fVYrpN9zc4qM3i33bBEy4vEjc7MwFpoD6H1vQc6K7GREpmR6GPFVucSEjtK1GGr5SuwJS",
  "key5": "sLmnexXkGvGASS5yCWJAWiE6EJoKiuu6mvXZPG2HxQ6DdYvALEbTCntsuDbLUv2QWgVRuiiwgRE4dmmgCtxTKN3",
  "key6": "65ZiLQMdLVGEw6DH19ENR9UdukmLmT9Tr9gsaLa4S3bGcd3ZDPMHxBZZqevcVMo8zXy3XT7yqqELnPnR1qXQ9nTf",
  "key7": "2GoN3dFGrjK7pZBkgNsCtWaGp3QTMzKWDuunBwswmthZybJzjyF4eDY9mxSajUd9je3h1Shvmj39EELTA2E6UKMH",
  "key8": "39wj3FYRySM8u3uEXsMWA4sY85hykGZUuygrZNS511Kf1RCGAkCECpcnuTcrrTMnFnqRf615KTnWUbxHDdjdZin9",
  "key9": "LPuCQrLK1h55t7psmCjzcaCA3q4hCwDzb4iWsVxeWbf1vPp3bXG6zw5HEsyQegRYwPf9APLKXnaQSfk2nPThDuh",
  "key10": "4cYzYZ11LvvJv8nJ5wDkBdJoFU93SaHaM3TnMRDM38N3X3FqY4ay8k13y3VfFrp6sA561Ln53VQVjFSxEVkZyYMG",
  "key11": "67GJAe95utA8aoiS7RyGdDaSYZn3tScPJhZHHC9DkxgPFcrLsGQrKgayHoZ8FBit8eWrjPwdyxEYqCrNFFtk6b53",
  "key12": "3zCBaVpLk1iPPyApRg5AdCqFPWFjFQ7q6kou6KU1rpfefjv1SQg3Gkxf5yL2iwayrYFeL9gHMUq6e8T2U6uMYiaT",
  "key13": "59u2BKDXbg1kWQPfb2fg74SqKXFuWeNtMRfpujByLphBgppvpsHkR3D1pfDFSyA7UBozyUDSxPUP1c66AwVYYq8L",
  "key14": "R2Zu4PzyEtVejjZbWk6yBUSyBmgdvjnTncX9ezTtcXbAXzd6QudpmrMzPdX6ayqs8eqHGHoRmpwryEhuBvX1vjY",
  "key15": "4cy18QabrKgFYcoDkhfpMLNY8e81NRbYGt1hruAGKWq38C5fDg5TubS5CMLWdQoSGWzWgKbHMovHv37EeUX4HRC2",
  "key16": "2M86d3EpyUgWc8wkiPyC6TsiHeCud4TmBxg56qtWKifezmBRNGwA6iZWUaNFYkgprHJnuRvLm6g3K5meukUQV4tz",
  "key17": "2s89STc1SheQ9WsBsgG8vBSWefTctsHAvtS3YNRr1KjKoqP3XE4BKTnU8JoMrkY9GHBj26GSNpfo8H6toU8qFeGh",
  "key18": "hMPdhNszLTDBESH1fj1VkJ1d7uMPFHGZWwrxu94iVTJBNEbCZwAWg1z52xqHX2FYmV8RFWBUByTe6WiTh5igx7q",
  "key19": "53KoEc3sLW5m8ereeXcvJBocghas2zwS9DNuCR8FkELFdDUA8LwEnxRPthpfPrHoD9wWqPggdACy53gjU5W5WFCP",
  "key20": "39gfYFvfP5XWwMeAghQcvXHmcojAZg7n6joCZsTZ3KP8ok6EceoLP13dW3vDM2JyVYMicaYnPdBprf1Ue6PbWCio",
  "key21": "5ajimr3njnTWVBgqzcHVjKTn7ACbns9PVQvrNi9hm4cNm3ovxbt7GH9Et28vCCZv1tBGkWBH7Hi5dsguhUjZggDN",
  "key22": "4MXULdVRd1HtKYNLtwCvPXocDiSnjKEUJwgrt4tysBV5WxFJ8fGmxopqB83QTDpRDqgGyubH7CqrxN8wGgsv7nEu",
  "key23": "3ivMPDNMQBoSZvsjJVTqMxaisbTBZvLmucixji4gMBHoevJ6vQyT22NxhvKPUJ81dzyHRhcrXw5ER1svzpFEAb9S",
  "key24": "61Uz1m4Qwt4KDazUU3H9kLW1mSpB8WMZ4RGxhDXQWvcTZzDN6Yts3N5J31a4wNQZ6aPfmpQEbTswhghqzkuSTeCb",
  "key25": "61fVZWxPnch1bGQaWyHH6NhqnCUMdscnx5fQarCodDeH7VrFUHUcQFwcDnMZCpA2f4NEUBLqX6BPMBgmUrcYayNE",
  "key26": "5h3LW7o7j5phcMRkNSCJffCuFwPv4p17PPsVe5guMtzkWwPLBTF7dbYNazT9NpHj5d5RazU6Y7GcYdNb7AYyeP4A",
  "key27": "5wKqadHa3SGcb7JThgv3gGs2AYUbgirZzhqZ8rB6UsHEhsSXE7v2GvMjZc8fe5FHpTb7JCwRLUkhn82aBtTBW8i",
  "key28": "6xE7FRT5b7mVwj9QgdRfo8WzL99A9LWzScVTisZCknWvJi6Fk9JQRj7EaLFfMD31uciXt3ixXrfrGPqJPyayFEC"
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
