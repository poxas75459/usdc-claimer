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
    "9Yx8LDt6bSnqz5xV7G4PG5T2kS9YfvynXmDaP1xMNNosJJL6fiWHYuppytSSVoyUhYC6nm8zoZFYXdYyesiiojL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Na35BCyjEVWgyCxby3uHFFZdQegKvAN12xnEZeDa2qt7sbJsz4rKzG64H3C5kzRLB62Fi48XM1TE7jMHUF46N6C",
  "key1": "5EpeRfkH3HbG1C1T1vz4xrNMLgsSmigM9AMuqVm6tC48B1skRH2yq8GciR3N9cspn4ZusWE62iroBWNdopz32t9P",
  "key2": "5Z1UMRd1Gn6j7eLA6rCBCaXc4cTnqPwxuLT7Kz43DjW2Q7GgTKmKw5AqaR6cZJNqudNKoG1hj3g3bCtuC4EDjvo6",
  "key3": "2VRtFLxNqXvViYRTBZUsfAr7ujVFFVCG7snF57EvaypSx6rcs63T4kTNcLopquFp9KVceePkdBnhX4Dq28GFDV2e",
  "key4": "4Aov1qVW2BhxgJdCyLuKLAj1NCiQM25SF2cXnHNg1umj366cznv6cGrd9FPDqMDQz5N5V21ajVicwGmNHmvkHssd",
  "key5": "24imN7WqFycggZcQaLqYwxVWyG2s4EWmG6fx4BZBZnSMe3QmkMbbG75hqqv6LxuDQhZHJaAC81MDczKsbeDfMpzz",
  "key6": "3LEheMHH34WsABUXY2cDAsLMu21jNxbcZGH5ybgL4MimGE7H2YXS6B4ahVKgXxj3tgwikoSBjCsz9gbEjL4PMCYo",
  "key7": "2zxF77Qo95iT5jkmQSpHXweUjxoajNt1gMd8n5grvVoVBMFYJj9SMQu7CvEeoCLMUQaE5ARfo5JshaNixnRiMQFS",
  "key8": "4ciWijeeNDa2nUhoessSYGtELsjS3R8ipQz58tYmbJsLEBY4s6cURrPc1AP9yp7AAvamm6DwRkmPEen63nKNxCqB",
  "key9": "2mwcBFq6LZN92PB12TWfDZMmiaxiKXF2WZzRKXqZ24iyfxKnpXpko93HSmamtEerR5xFGeJEhf2ZJd75ifZBsdmf",
  "key10": "2Qxd6Ecjo6BUCxm6dPSXdLGWVLrVyAJXKrGAH1Kj3YYKdyd7Y67DHD6V57NmFaH8t7FrY69pUgoqgoUxx9YUvCot",
  "key11": "24nuUWZino1pk4dmraXbgu3SxfycjpWeK37mjtXvwgnFp7SGVMvZQd38sBrCJ2NUxJwYoFiwy9TCiAY6hvGTFpR7",
  "key12": "4sQ71JTEUnMTq67fJStsNy2G4dsT99KzRwko8hoZRzvB7GEKjRG23XqwaPRxYPKAQz3eVTzZ73fDyqXm3EJPahfd",
  "key13": "4R9aHm7A3gU6kFbNH6kAgQ5zvkxc74ZB1i4mA4EMkd2qE9E23Q38Cr69pCsMZxE5jKXkx79A3MtHvXP31hi5XGy8",
  "key14": "DfrR858FZw2TQK8BfsgAnKxmy32m37eW2WcY7zmYbRDcQi4EQUFKdkLGsuBsotkhnWjFHkskhvsZmGY89fVWs6B",
  "key15": "3iU5brm7L7v74k3tPwgTvVXTjQedarSgHQCzmsgJCDkAEiuiPfrqRc1oHraQvs5Fg9GzZRBNPZLpQfJeMCsR2FLi",
  "key16": "QQ5VnxNq43yHXjrJYZGQ9NXNNSRkv5aqGgsUbBjK9yCHTsmLRWCbNSFavhv67yRmd3yyRjyRGidju5njCwdbepa",
  "key17": "5yZztXKHoXiffiDkL31cnBrqZipqAmaSLmWbshntWHeERPUg513dhjRogxcWqgsZCwzNcK9K6gWJztyNmWELKsw",
  "key18": "igdV4cb3HHDjgMAxcGaAknHTb7ZgsDV5TL2chXYwDuaJ9WcxHxjSXuxu3AjKYiG14umiqFy1psjDDC9siUjC8Y9",
  "key19": "352iVMwELmWMP4EyV4nvdcbRjxuQRbmvkPmEsiRgQPWWAfjAeQZ54BoTNNU6pNAk46ad4cjTwpbN2zc12hS48Hym",
  "key20": "2DxXBsq8bSr4uVthmY5ga7v7nRK5SRZXRKpvG7n3uMxbsdd58QJbQ3GoYH8oGo9vumwrJLKwHe7RVjJ9Sdwb5TMF",
  "key21": "3rEPS6EpxivPg5nTUMeyhMAxus9gzGzwN9adDoLqGsErSJZsbrwks4sVG6ksanMr29HZ75CSuEszu7cPbzp75Rde",
  "key22": "36QMKi9SbFtS769EESoJq3bnwE3SXir7iyEQr4cuAKX5MCjmJW9hC6oRrc51t5z7k1kqGKAkzkNetUPPrSQHV94h",
  "key23": "8UZas7NcU1GHs1UfCSxydoCufgdAt3TYVvTgM3CNWJiLnZxmthTyjEZNSTrry6WRQMq8jAd4dykDfS9qedix6ph",
  "key24": "4jaVutaQPSoZT2EHwB2EMf67wii8Z7gcqzEwoFoyZ23fXqwrTMwC34NZ3H4dcYgnfQd73XjX9HgE78t1xPxwd6AY",
  "key25": "JNDLocRLMBweUdb54qz83AS3GES74tuVs7sR479pYvgZkPNC8i4CFfudAgQwCTnk6hZjVQTnhV8iwx9PrrMcboK",
  "key26": "2eGt8wwcnZQUePvNftzACrp1ZUnFD7k1TJf9iU9r5xPMFV66d9Zqtq6JnWd8hsKBttFkv6SxQagDLNHhrNjXccN6",
  "key27": "2epwTV8mUGingovrNHj3A6TtmMcArKEoV3h23Yk3T4VyTsZuKLSar9xTxraRkdioUfZ299dxqYRYzNMifJA8bTum",
  "key28": "3HTNktGnbzRQKoHRiDupcaWmvsZVAGbaXf5rc2hvYpEQ2pAFVP3rv9Sd72P1hW4jK8GZJ9qYnPWBUtLLPFP3r4jz",
  "key29": "2Nubi7s8AJ5ELP1e7co3ceDUPYp2tJsnLiSFm4m41CruYCh5LrhcUKS4o1raDDx8zBDbZiS3JtPHnpgvG9qCreTa",
  "key30": "2DoJmNQXqD2t8mzA6uL3srCrvxuHHMLReQkgEmjLReNiVB1unjm4XFd59eUi7Eg52hPTaJLYjBXzKFFDsJiCZGVG",
  "key31": "3MEeZu2FD2g9X3SncQBPuk71jMjP6iqAxufEoiMDu3whEPngHmKJQPjaeUZAfhsAWwQTMEAbqK3mCcJPfH9Gzq6o",
  "key32": "5vvkXqMeUCKPeMhwgvLCrWmMMDqUesYSvuhE51AbzLgWAP7BByvwZaAXkTdWwHvqK6m4T71MBPKegZiba4AJLqQx",
  "key33": "4bvQLvPeHUf5nvxmmSoLbGTHVxqGrMb89RtFHftJmhZmxdtkxzvEMHphtL5Nyxwtwo8DMbNZLu8Y38SCJArJnZvd",
  "key34": "4o6oejo8EukFzQzNJHjSZPRMXT2uZCCvFRyN4zuRU7usjjUZWb4amFsjzPb5pte5cH8dw2ycByiziCZAFUkoyHbN",
  "key35": "4Dh5pZin9NLmRSWcdzdWSTJc2N64QoKMr4mPVsVpTgSN9CqL6i5EV1zgTMkE1nVDHZHvii4b4y4FfxvDcwTZp63r",
  "key36": "26N9cjTQUADzqpMxAS1dzTwT8jpZNTs8Wi2W583qujhmCy8rkzmC2N7Cq1RwSTC42U7jGSVdj42UfnykgsrwWmDL",
  "key37": "4fXNd9GDqBScNDnvsLF5cAUJVDYbuvPX5SVbWVSv7qB21R5feooj17KqmhjC5td1Jv2pFyp3ypDSYyu2XXxSJ6RQ",
  "key38": "3R6Jd9ntGnU7ZqmN536ue1NYnjRAmGotZy7demqedPBFrc1PfrPB2YV3RZussXxjP7Tdz19wzjyUNFRSBuuX8qwB",
  "key39": "5UyRaey3fAykTpruEGpqCo8qKdibU5XBeXLV9Dt9YbSFjdQ7utSBSYnB8Ud8GEmtmzGgWgFsSktTPybWpActvPsD",
  "key40": "4qYE7Wbk8ujmcf6WJqeMhpkwcSvaMqZdfXEAZmEttLKpikr4DQAjagc6gAMrJnDnP7EZAdrv4LtueTuU2KXhDPGb",
  "key41": "4CC4eiDGH5bi4qbhDhc3FGUKPF5yeJQKXUwU3bEzZiaLVHxJZkzhXEBJ6rcdk9jrQ5Y9fW4yUJ9ixvasU6SLPf2z",
  "key42": "2U2G6GMYntwjzU67EwdxwkWWduEskTiGsansVRgrNc5CuKnmR98iAhyAMHgdqKARjmYZbRcftPpGKZrWYqqzwLH4",
  "key43": "LqZg1BnmrU4Rr2w4eCT9cz2v1YvjFZTShCqq53KVrDebPUJqYLmyfrQQidRVuaejuzt3WEsmzhEWtBF2ZQMFFzt",
  "key44": "mx4SQweuhMduEuGKi1o3xmCqzoGzB5rKwwT1xmMYd4uVumJCYyBeikuyWkwAXbPWzyADz4pBNU9xgXWdL79APCc",
  "key45": "2NtoYmiAGg8X4dYp5osLmrSotAveKjCM3ud9yooNM9DdDXUR3B8DztuvAMV3moHmPhBage8eammT5o6QM6YxbYBL",
  "key46": "hTKqQdU2umKUQJEpVTwc3w921USkUfoG2GzFXWioymPnFXsFSnX78DHxyn8Hg85Wejng9Y6moRvneMJgRahrtBR",
  "key47": "4E7733manBbkAtRcBTNWRyQ4LLBvXf6L7BzTaXN2ezeJHxYrchp1mEcTyziosV4KY88Rxaq5vrhZ5AegEfdQiedu",
  "key48": "3GvkRQjpeuJYydTrCHKmU2AkuE6ZQoL7uVqjaMnaBvDw35Pxg4QgoQyW1nDdJbatGbZdH7CktJ8JfCVeZQfCEG9U"
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
