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
    "3R6V9gVHTTtkHwRbNQWZQFtWLKbVcdLo9SVjZ7VBSqrKpS93bWD6HXjyEcc1kBUtbW4AUcFhgH7FKc67BNNoJRwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283HpuGSsFE84YqoDdaYbgAmTCN9CnSPyJddWRnNbEWFVnmfQqygaHBSGcvL5BAD6b24ZQpfzWHSaxARpz7n5HB4",
  "key1": "52bvza1B8Hwnyt38wJuVNMFrWsrMnDincbrDyjxqJwqpky8i1FQhg2XnU5ScuXSXA2hknL1DPUxRk98e73yt8mhL",
  "key2": "2PbByYYhaqiRGTKCCE2aptWqDYFRCvtvuzJvoE4uVA6jDh8peoFsXMmZheMBTzoz6d6CpxEVAArkYbVZysnpKEmv",
  "key3": "5VyM5yqQ9dNFeT8GJApUuYkvep51VKw8HSVPjaiUzQCDX7eq1JZYXYV4z7CCAKR2wWu1sDVBcB9m2Y7siF11nGGP",
  "key4": "2X9JjGV5ghvZfCPzFHU95LzcGehut4XcvWqXmfwjmtDQnXiGfvsBmbPb9XskocR8mfB1BUeNVdEhqQ2Ty8nU7YHn",
  "key5": "nAKSHgxPmc3So7ucabtoDiwmk8rCYEi7PujcJgoQa39dKKAjS56DhbZzRgzmjyxvpFPmoKmXbHZ2WvaQH6FgMwN",
  "key6": "58cVf9UPYw4TFvYymLdcd1dWkUkToMkz1wZaqQSXYbxeqhHHB95F1F4cvgMJQRJ9kFdbGEja1QbYaPnmXNw49g84",
  "key7": "4U9xsfULN8xd1naMBnfLNQ7oefiNjNHGoSHs8hGXRBKz4J7FwmK5K6DLsRywxnKEFVtTCFmnF94YpLHjT8f1xQb4",
  "key8": "41Nt2q5FtMMxfBFQwrkwdfxUUsJfJ23UKktdYnW1R6vuxUukirHC2kvKRZ7dWzK5Saq85ZHEJSKRjvwo7oFwChDJ",
  "key9": "4rHMyAMKP3WMQ82x7dCZSQL6KXcPz9o6EiUuzqK6cQuy7PKGJgTrAyBkNWQ26AEareHfbzrHXreHYwwC4UDENa85",
  "key10": "3EQWUPRj1kYxHkfg9B6Wzqw7UCPqQAt1LYcozfsPsdVhQsSFJqEQYVzKnZ28ttCu8ddS4iFrCg3iaAV4TXQebMW7",
  "key11": "4kz6VM3WABASxxPpPnj3yTsL2v2kvXrhMyHnaxxHjHMuHYyuVquGBWAS7cyvmRAweicU87YmJyEmvLBVheKaD2Ev",
  "key12": "oadCDuztr3t44G9uUuW291y6VCGfpGMGHbJb8p4uTek6qrV2o9c28Ngt4pAjyhMCLVXu3hmWPzgeEV22t52m9B5",
  "key13": "3iSK9FprmaYBaK4RGiZRnn9wVHRPDHHTxmCMAheaMcSTVYu7wvrwCu55EZiFETr92j3PYJQ5kH3nCDH7ZQkx3XVL",
  "key14": "QCsQdEf28fp6PjRoR2f1yPAhJ9oRGmg7b7DYCekjhFi8T4U5Zy8pfdWh1ueG6Tg6xEW7QHa6vP3DbhTWJ29jv7o",
  "key15": "8MrYEGiN9boJBU4pSTjNeHJaztUGbwCcCUybx2aEAiLoeJPwMCudENWB9xX5zwoBQEW1ea64NqGtVSCxuEjhBGB",
  "key16": "4wzeqNhS2GEXA7sa6jkCvMhZiQKCzDQme185k4hBu8wUhooCPcZKVoze3Vp2hwgepWpbCe1hSSdSUFqb3o494TRB",
  "key17": "4GnbhXW47TBYPXAy25dnncnawchZRdxHohBhGtFTpwxgikLdjTFQh7RXrxcorQGPaPSKDzGDqJmpY4JP4stETp61",
  "key18": "srb3uda36e2L8JVsYAj9Sif6oiLd4RXprabRrjoQJp12wJaGnw1qBgBAngY3YCN6TxcVDjdLfAtaas1z54FbMdE",
  "key19": "5waGV61JrviTAkvsxvjTxbNE6dCFWxp3eMhU71Eo1W9p1ipNN5Lvqv8qmWpq8qwacLe9mQsg3FJnbPTWw8Kiq5Nx",
  "key20": "hjJ8vrrBeWiHAdocrDzJygYQQ9Yea1z9g3zB4mFjixVECTiyhEu7ppSSWRuvrytYEm9o4XfmKNYFkShFmhAYRFp",
  "key21": "3PGKXTnLxWznBpUhmuRQ4jrHbMJH2a6e9KzFCoGN6A5dCLxxY3iHLyECnmSYgjxgB5W5mscEZBjE6woMLDkiru1f",
  "key22": "5Dr1g6Z62Tj5T6msKBFAJJA7AfSmuVnhh8fQTacsGxBq5K4NmWNxyHS9cyrqeRMQ3MfTFsBVnvcY7rvqXLjvMiZr",
  "key23": "4e9akb7RsCtSFKuLsxrtLzzJCS88Bw4Uw2f6YqMxSqZ7WsPgczc9Rpya499nur3sLcis3WkmEXAfJqqiRmcjV7uW",
  "key24": "5z22N2zJJauBpsB3GzYrivexu27nR8HCUsBhbCV6p8sBwTHwoK84GzvoDPxRiSW3CWWTwB7YHgk6WS5fDwf7cRff",
  "key25": "3nCdxNE8ASNqnBXb6kUVGA7w4cTQTzTV3kDt58fEFPHwNuyBDFuN6Z89DX5dJ5g74XeuoXThcvpNctV2y6crMU5r",
  "key26": "4vaPg7ca1PEp9Efn8FPLVRkkAS72iHsyDFzebSGfLyLAU8wrQwRJBWPRqnw2NgpBHx6zGa2Px7n89983ycsBhWs5",
  "key27": "VkG8n3cMHgMFpEHJkosjrAmgMoN9NGGNxBeEWSaoEEoD65RYuyVv7ZiddRp1ryzGuzpqFSHwErWW17xFQ2siJM2",
  "key28": "42uCGH1DvM9H3HknJwhKQkfMSF6dMLv9rsES744M2RgFEJHboM4RVWC8v5dYNzm7kbqLaZd7FhvVpvrn3LeAMx5a",
  "key29": "54R4Z2zKahHx1yG4qTSEL1AhTgwju5mdWoWE7m7EZ7jdiX9VCFpLtoeoTKYqbjDAG8xnKVFF2fqRKHTQknV3ZtTP",
  "key30": "4GN3r4RbPZcRuQg6VFCNiCCv1WvsWYVTAMJuUqujAgU5JYoxUitCh8rhDHHxtinqFoZuJk8ncqPmMaQRdhytsDt4",
  "key31": "4cBdPcmgv3fo7oLiD3qc7uarsvY895VXYeAab8V8YHi5ViwPLy4Z9x99Ei7CDfbrWuoTWHjCAxbJTPpYLuH312pq",
  "key32": "5EGJEivzVokZDqvnZkRPsiX96N3u7W44vyUK2FRhtKi1yx3oca9EBdy6fiZD91ZyCyJn9pXHxTR5pa4YEoTh9Zt7",
  "key33": "5cjpNnfKfmpGtBkcfXdiBPEjG1fzv6WvGRLbEFzeCYEPM8q6xfsEzzSbqnpepEgkrkwvJv2DqSrTRRHBRqgAVQn7",
  "key34": "HLS5dngDoeyabQbX5692pRwYsgxas6JARsMskQ56XADpNF55wzmiPbcj6LSLzYxxJhuD8FmV4oP9ezmanCRJiet",
  "key35": "4MVHWwu2SPyTC353kFQcBkDNhokVnc1nybyrFtiSZdGSvzUUhn7KibT9QXGviPpqsMcZCf9JZx6Uzc3hUvbu7dZ9",
  "key36": "3FkLGVnmtPmFwfQtV8qwgUtYLbD1QhB82Fb5ttsTzu9CdKR77pNk4hj56KLME3rBodCRWoRQFnt2n4xpjYNBVY6T",
  "key37": "4EfpKfpd2ECA54ebzjH9MTvDueJWV5VDHuVPShtvTS92Nkd8acg2WGMrHx4DCZjKHpJSzCaXTWWin4FGc37BDdVK"
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
