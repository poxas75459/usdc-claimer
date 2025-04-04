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
    "5JuNxbjE31EHc96iBXMBqNwRiafyexkdq2ZxejpP4CNujpLiU3rZ1j19zKT2Xr4LScFsH1e5zqyoTPuDLJtKnpG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBkiyHRewgW4AgtZGzYX8nBgYayt2dooLQy1AueG6YpdRrbqhzVZBPMFru4gSS24VAzCTAmYfC33j1M4rVUoy2C",
  "key1": "36kP9EERzzkZ9DAP8rkjXDYSAGB2GZLPvs88YcA5YFeLruDZcUqeWuVymKD2RXhBkuWaqXAqBajCUAyTZjmqq7pV",
  "key2": "2yA7pCiBQvctwhoChY7MGLzgd21kkMZw8WjbfqweGYNvoXkBumgUdmpUmQdDcYW5LoHAv1amF46dk4zCxMF9M4Gj",
  "key3": "5JGcBZpPfn7d3pejN2MaxdmHU6YtpojbaxFSfW1dugrVHqUVFhQLFy53LvYTFsnoiMBFuedJRRbVWKMuvwYSYn2y",
  "key4": "5PFRaKmVLzA6pGM6Zq3eeXwbiFemrvcfA6nr5ufa2nfrhosCjxomDBQ4yvemP4yDf8iurdqSrZZpcyEayttJkpe",
  "key5": "CaVcL89MQ5dYJpsQPND894kwfUKi2DHGHGatLaYb9SxmY8XHmmUU8Gdyz3HVSPVHozsNrSHj11ePThiLFn8a6sg",
  "key6": "2ZUPH7nhK94MJMPCTuAMTfworJ9TF72VZxuGYymDWG2oToqbWJTeDhq7PUvnBba5QrxwJwZwT2rZE1jqs4C2wCG1",
  "key7": "24hGMCeGcbiKJkmEu1W4Zwv32GbEv5XV6oBAoQ6DehQ3abXY4C3TiG4xBbddN2qJpVZPXafyWy9XYTfwz1786npi",
  "key8": "2rBiRLrcgUgm8hwHLyMSc7LSjXmcM7ijgZLWbiRBk9BWsJ6AA3PqHTNcqDWkm7q8SJ6qKbWD24L6EV6KLMW62JuK",
  "key9": "2k8rJ9SrJpQjmuZbzVX5VK8nbgLYWiNBeGmM2MMHqKSQ6qxdqcwDAzxLZNnmMA7ZS1skaFREAeM6MoDVXrsTQbSt",
  "key10": "4TQjgVQgFQjBskPAr1MmETPKqWk76CoxQ8F9JR3DwWynHQRu17NBVyB6CWuQcsLGBqXKJjadEAuKDUYaef2CZNHa",
  "key11": "3dPXXeUPnR1DqVEhCFMrjN4hgbLpuRbtnpxvSSLrYm4zjnksbhPLndRtFgTT6wrR5zNxF8o8zA9GTar9wGYUsLps",
  "key12": "jrAQBzVsHcN1yTZrgw9EQV1TMyyVEt17wdRq421dWjhPDP2zTAmTUKgNnrqcfi6KTjmV1mJtYqWRLxnhp2f2uL6",
  "key13": "5Lx7HVMHDCgGdr7PGhrMacWE1aoxx9QUXpBcPQKAqF8bpNcnn6EaSi1HqRknMhdeexKjnpKeoLWfZLrsMDi6Pysp",
  "key14": "3cRt6v982ykAPGxhSsxMnczEbtSFKKcVc1dJBam4x2trLBuziRK8cNmUaaoeJRhdQhPEbACvNSbMbRyTkVoYuGdn",
  "key15": "5U3ydNjsVaRezQsk4oqb1nzwBiyu8KRg6nkaer4GyUHztK4fTAMBYBo5fEDkoWjL88k886TSWoVYAJkF3rNyA8LJ",
  "key16": "4f3Gwonfjym1g8x7jtLuG116mkutMdxhMJHexLRkQgKHDZN6sNAVFT6AdtQ1K7rKaLdwLfMgmFNd416GzJ4L45MA",
  "key17": "8Pm8CgLYJR7HRywKXTfJssKVnffHZ9o9oFDSyW7pmKCp5abSNByxSNpWPpwhirvEcyuqhv4MfEajBF1PLNuL1Kn",
  "key18": "2XNQSigZ7Lk4twRtd8ES95XsAvRTfXj23Sk8JB6KRjhVsKJE46p8Yh3yatj9UV1eJHrFJHk41CYc5XZjtaNC4ikV",
  "key19": "4XbesSsAooubMsChuqoQPonec2DhAoN1SmZBNEMfnv95G14wBrmWAvCEftsuy2urLmWyMTzjQ9y4L1DcuSH64tgA",
  "key20": "5b72XtYukSYViWn2NFEsb5g7aKN63TLfnCLcJhEV8FJsQWG6XXhRFV3uX5SwHsPbmgUd2Ff3rJmcUCEKW2dzYdrb",
  "key21": "5TY5N95cTkBHjJXjfFYh23V8s3nwMhN8SDm1j5F5kjbFefRZjckfPZbRN24qnzPdeZGgz52BPBuomPEtJ9jPzmVj",
  "key22": "hJH3sgkVRLJBQ3nd3hgJ9y8MGACn5mBfHZCHcuPDxWsEu3AS7WCw6z3pv1PBy6e8ihmqXEYsbH3c3rL7qsj4pCC",
  "key23": "5sBDN1VSMwF8hyxJVBRREf6vCZRNGNk8Zn4Y5pLGvzoqRmD27LheXMWofBE4wBSS4csDjpGsFJ81rB6PpHNbsdDJ",
  "key24": "itty8ttjyPNJZ6HenQLnTDkrNE5NyAfTSFKpbsfD17sXXM5c52nswVQzQ9MG7795jD1kgU8PZtk6WahCx4wPpF4",
  "key25": "5WUx54dL5Y9RqLi5Q9rzccuy2DtbPzRB5qqekKKLeygxdZhYHhCWBxnpBRh7MFNhJnf5jvN4BsRfTxYCinrcSKc2",
  "key26": "Kg8huRhibiJY2DXVcvPiuknhtsufH2VH68fRBa5Skkswf1YGyyK7VyqY6YQA4yybiSZLhARTsBgfYsvq3ctCyBj",
  "key27": "JcPSaF89CeBAvHr6gzUtnLM6GC88NmLAXnNJ5dsjCBHtEajTmVR9peyqdfmHCfXN51UBxjg9TKdGwugoTfkR3n4",
  "key28": "tX1TtZsb19i6xNqEqZ2wTEmzj475s9KgPEmKQu7MS1rQY42puubS1zAPba88EZEWN4wMZo2UaAhmmch6nBRgpbT",
  "key29": "4CECjcAJaxRa8gMQqe3Ayg6taWvLse5PmugKfUUqF2Z9Eeb8TXgS1DGTGFiwJ27E3N8Rd1SW39kgyhrM2DcbYTr3",
  "key30": "2g3wP746DJce9y8eySvm6BJm4AtD38LvTWi1e6jkiUhKvtzdjy9UXcNTmfHtW37VhkVWbEqL8egRPZhJv26BYps",
  "key31": "2s5ceBmUUwQqG1Wf7WaocPhp7KxCv2ZjjRB89mSeG7NM4fzmqRZzfWnXAyoPDjRLh4mC5yP5rkLHcut8ef8fTKGB",
  "key32": "3C5hTMJtKAkfmoNjh7M52k86k39BcG6WY9edgvPM3au2Bm4eWoRy1ta5z9wYBLE7Rc4rUdCsgRxWHvjjy9gARdZy",
  "key33": "gE1WJ5HjNZD58WAVWvc8KQBn6SUnxa6h3Nk8b8WZuatRrY9EUjboYp1bGRiUnjYQJajDD6TqXCfp8yyu1xuCCHf",
  "key34": "pdKvewMDXihiDfFgBXB4YQ2icMLQxj8ddTpdb9xq6oySdFiLwZJQvSPVLQ7GtbC4uXbQ5tVVN51b6GJaWKpPWSj",
  "key35": "52MkDWnQKxsGvmDFX7LKeTQbj9fG2ZqmUSysYSrG7Vj1YUBqfDHUK76SB1TbthFGoKFuVC4sLVX9TURmQZFofvmZ",
  "key36": "3age7QUPzaCx7Q1vD9SfupQwAMT1ecxz4zhoSVfsB72vfCjTL9nXJQWDDLwqj3q6iqqJVEsbjQ7EEvBo7Zou3BRo",
  "key37": "5su3GVL5K5orXgkNYkwZzXEmHwtnV6sxR4oibyQhR7kh2iVqr8SCVw3L11MbSESzPiGLvThKsBJ9aQuenu6KVaM3",
  "key38": "3VVrei6vjZCukJZ57NFc3tzZfkDicuLpzhY5p3DjZzY2z8mB9aL8SAzoX3X4nC64mYhSUq4gu8CmBG65dbLoPVNk",
  "key39": "H7pWDxgHP68FcPX1A5EbbkhRyjgSjxz1jdNa8PEFX4BpYvJYWwLyVbAvm4JidakBG9UFpH9tFTyfD9vS1WZpQEn",
  "key40": "3e8MTQubym2Hiwx1GLxQhDycJxA1ZRMn5fofDcRaSWPjz1CfS4QGP7Ej4Dpa3Q4PYbUvNPVqQAhtgiPqtnAGzKuT",
  "key41": "nEuY9QAMWE66Tc7pE9LaP9tNLGePYhbyRsVxBXfk4H3nry8gPGCJWrmuZ95JwXPXo5sY13wHQky96DftmdMikvE",
  "key42": "522VYvUPyhptmKH8qEkmk2ZSQtVYSmdH9nG8BVbBah1zNK93uvz8BoGKrRv7J4r8EtQTMtcyazmoLto45Xwj9Z6T",
  "key43": "2qoXzgLQcA7zeG2VxmBuPHjYCtCgLxFRTdWDCJsh8maYTsxijfgygT312Jk1kBS5vebKRb1NDECAysfhZPBQjnW6"
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
