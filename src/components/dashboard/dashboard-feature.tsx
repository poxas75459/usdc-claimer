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
    "XN6nvBhNED2KLqXH2xa3iyh5xnDABVyRiXBHJLhWKaXConxHraxFPByayPXYRCZcDdZikpj7RSvQJ1rygkyKvFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dxBX2jGRRpS8DYpycP6Y1ZRoj3izkrrGg8uUiK89VaVGvvqFu8fuYTJdqre1udv1Gaggqy91ZXkZkaXZX9hzAwG",
  "key1": "5Su98d4KPYosbz4KUgxsyUXHgDca1eJR8CxhTf226Gq8XucdnGPT7XL5yhBydCLFoV95KDbt9XdU7TNcoEA18VGn",
  "key2": "rVjNyCZh6NCBuTNjYYVPbRW9idReqdZBaLc2ByNA9B1aQx2bQgTR6m8QnwrFsFbQVU2Btnfenru1LTPGBbmkiHY",
  "key3": "tm6sFgKb3EoermokJnCRjMr5PU98BdfG4m3hzeVxfLD8wzDT7sxPKzicV8714hxG9tUHGwi8rpmLwmy1gUhuXXX",
  "key4": "4YjPY5RW16wqKQTtrHPXZeGJaUzt6vtAN44G4GSefWn66WNAWh13tXk5zqug6SV1RWVgNyexChbsHWZx6YgiaV24",
  "key5": "3L8yPeUXcMiTXuAosVQME2zLExLfkGmXN5xVUVTQshT9TkGRe5xAiHYxXVbGsZ98rQLxcL3zjxfbATWmB4XSXHEw",
  "key6": "21DmvSZ49GHf3V27WXj9Ddyf2Wpk9xHsRq5e7FoaykG5vsgHLCCv9oaJtd5fU8eM6oKykhcUUEpS9qt1Xz9EMxrS",
  "key7": "kZGnS4HX9MYnGRgQjVey9VpD1avCo7tZDvQKRx2YUWDW2iiQiUBR9qtNZ3bf7ATyZ9pBwAfperKmAeHCS2FfYU6",
  "key8": "43KmWoX9AF5yYs5zxWaYpiGuhMgoQoho8MJTSH9B8No77tpihsDB71PmcfBSVcuSLXKLCDPpR19U3TU555h65N9a",
  "key9": "4n4AhpBjHYsKjgdNkry21RfQdceAkK3M5nzfHytDqx9YMDHpJTBop5QbpFiHUsjiKTq4PAUrzzijuEokRMMH8pV7",
  "key10": "mn3NrVK8jCj8psx8Hcm9wuaNwY4CYFPgrg9pEXWGE45JdRCbaX67z4ifBGsKnWzfgaMNCR5sP5rnZnLGTgUK3BC",
  "key11": "3gztEDVMFMsvVmaFZBsGy2avcBg6gnsE9GYBH1bkWeuQn5yk2hzdLAKC1Yskryaa3Qtq4HWPGQNv8WV9PX7VpH8q",
  "key12": "3VW3Y5k5cC5ugKB6tpRL4VPzbq9YErV8nUPqDXFFtsJFtwuZSF9CsJ1LZuzBWsTwXdxXVXu8B41o4R5cFzB3HHLH",
  "key13": "5AQv9F6e1xuaVM9tRbbEbrUqB8FoQiZcRpdo8ifLr9usGv1VwRgbA1BuRNdajN5D6VYd3gKNn13VbXu2UAaq3HN8",
  "key14": "3taDbgG6m8fYD5CHrg7MEa2R9qXxQeatP9wY3X52uEYRGGoNetGe4sfsTiabvfDykNfG9SXNWdfxo84uJYj1Fvxs",
  "key15": "xtoBgTKmDbyYdbbeVcJvdohhqB6CiJxiHUMQNyAEbxZRQ41BrjSiosYiriEHGTuN76zqQqfhYEo6QWnFPDMDme6",
  "key16": "3f9sgz457qkBPYpLtaFSU838dNeEdToyawd6NJG4x2YWdeuP9wameyjAa3idMtPcEdELbKqcz9pg6joREBJk2GAo",
  "key17": "64WBDUrQEUYHbFs7gvn13vFRroJrDdGHMPgf36U4h3T7L7avrM7CE2HHARbpRnz83ujBNx6XvgvqmhynRQA5xv3m",
  "key18": "5jBc23d3FG9XE55q7PeRhxpvcWTDv1g9nkWdXboMiu8jPjMDJ2Uo2UFvs85Z1D2j1odfoHRPptPa9mBzFGZJTLmZ",
  "key19": "3P3mXLvREvXR6WGmv9rhMpSFmf2R9brL1GKDN9G5WPfBZk6oSqNAbD2BHP4Wtw2cUfuQcKLzipcyzuXv1Xn7KVHT",
  "key20": "4GYGxHRRzmxsKE3MpEuLGyLeitgfKaF5WHNxdyqftph24ZbUpDtBWxyzEvsRJoZa2RKxJRuoSYyGXpn7rwca9573",
  "key21": "52bJUuV2acHaspaQGwXHx93tVCvcN7uMJNnwJdM6fdKkVDP5hpSuYzviA8cegPXJ8DwqqPFwJwxQMVipfqxrozMy",
  "key22": "c5NLMmkFr8c9eDwuJrD1ygcCnDUiUgEjD3PzxT28UqXG1e3fi2TcpyeqATEVbEmpy6ffJzDNM1xbcC1dTYGWFaf",
  "key23": "3qC3NTTrwJQYEGcbWFF8mgVQEWGvEH1uS6sDY85i4hLUPT1gArnQangQt8euHSVAYW6X4B4XSHmt1MYy5VsiQ1rf",
  "key24": "9535DEQUouKW7hK9QiogE7cemZYRWgbkmuEAe3etY9iGwe6R7PeqAesFvpe568wGAC55vVJ1JbrKbixvX3xTAAS",
  "key25": "3kpE9ZDrTRnsDeVAh71StaUUtu2Fjgp4zBQdPCPz9RvJMYYsF8L7p1bLd37SG49LK3din82gHm7Ygwo4trfoVUtX",
  "key26": "4kgPfZgXy6kzTcMq5vYvnvz5Tcv348iQmK8xyQcW5SMVFE7Z2entiRetrSmno1mwFuWF7qejqARgFQguBAvfqwLh",
  "key27": "33FN9DkkTQZh7icPEDBjo7qfYU7zv7wD4tGyHp24qT1VezZ5Yro3pCwNvBb8vkqWNCGg6SMhCihzM3zxZMkUym6k",
  "key28": "57d3Rds4ZgfKuroeFCKDqsaTGmUAsT6tVbCSmpVrT5unEXbDdaQVgun2T9aYg19a7Cd3QXGgKFKTAA3eXyUqqdRz",
  "key29": "4Ufkm3C4Vaajg4SM14e4PevdaDSGNQPEshQFNmKfU8S6yn1CHrR2Eif8xuq9uXNXCsvjhG5i5zjusCMRS6NpiNuo",
  "key30": "3hpEfWZ46zcqTUTxmbyLWknim969XgK9aXuoUg4vnGu9aEYi1bM77QEb1eYmZ7aZcJX7Pp4FTjJLdDEXkXaAUrkB",
  "key31": "5m89JTKs6dPEhcpk8dCZkDQZ93yLQd35APfjeDPuNvx1Vg958Ug7vGDvke3wJD2cwtrzjHeAY1X2gRfYiFpyTpkm",
  "key32": "32zKZGsyYCuRWJjRKSdGLsW2Q9VWWFwHWWiaJBQZX4PMDWCNLE7wJyGs2D31SyKBE2trqZe9ZUdcn7kwvZVDZPAN"
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
