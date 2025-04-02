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
    "3ycgpbjZRPKjKKAt7LszG5PtepXGNQZmGXCSL2DCah5vmakCqJwaAU4cqqwdgBCUd2BZuxkxtG44hyn7ehHDfGJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvUf2Ho7L965uW9epQA1AomgAgw3FKcF7hkwzH5qNbNyswAozNZ7i5epVSPzJyENLB95GHNGA8wcSGdLUqanN4s",
  "key1": "4bJ6wbyKvZ3tm7AhT9V2di5ygfHDwFWDwTusMGbJ3tf4trcNh3YCWw3Bq5eVVtJM71sTkuFHU1jREk4wdfkvfa93",
  "key2": "5sAqmAieQTjHCQyimtMq662Qeea41WHzN9GCWmqm7LgUUB2S8SUgnAq3bsUAMj2TyjQ9uWKE5wRCbmXzaykW7shN",
  "key3": "2UN3K66N2S8XW4EMrHwC21T7T95gBXYtNsfP59t2hVVpsRSfK2dYBTxrtefzukRcjmCYcPRaCosNhhhSJd8qzxmf",
  "key4": "KEcBP36RaYws2c23aAkZDGUe92NfGjasm1JoabGwJD332UX2k9KfPgaVVYtQ6ZiUzuB4PJHNx93eSWQEXTFxcYF",
  "key5": "3aEY6j2FsL1nqCafd7Hc76SHYgFbY54BFhU5SSBW1Hzcj9oKkBisTvYKJS86Fc3jvcjZR44jX8K5q2EaesS3tRPA",
  "key6": "33d11nuMpQtjMrKr3hdaaq5pdubUv687oXSHBbXgGN7mwyQs4pQLRvB8ujgxBSnHvWrm3Ta4ScTRDh8H5gyRnMYP",
  "key7": "5c9qnH5VZ9iUC7WTPSqQ1tZEc1nS8A6MJ4XrQEM6uWDhg7HaWjGSaHKBh4ARMwnCWR26nm88pjXaRLXjvkEUqrer",
  "key8": "4tCaxBRbjr1gbugg7V27zr4qEkMH643XLuKcjWtH6Khqh7azBED1zYXEa6kJi3vrRbGmRdKCWRjV2Yhwamotkiay",
  "key9": "5TBZkhKoTYKgQA4gf2hx7LpX3pTAavBn5H9KAuaSV4FhvbZDybj7LD6XgeSjPbqyBpAA7ePmcCB72vcMLCHnVDFx",
  "key10": "35X7Jygs7NzVnNo8T8Aw2EX7224mLnebhinbX9maNHtemmyiRfkKjJi9pYWRnrrdf6Jk7WMS25LmtuLtwFnrM8qb",
  "key11": "21S2QniXa33hM9hdQ1ixkDVgJT9bh8vHaBmG53mwYkxK4JD9creJWpVxHqZc5aUJhP5aLzNuD2QDiPTUiUvtF3xY",
  "key12": "2xW2Agsq7sfFeGyWTX37rnFngVYB8c7SNM6C4jyK3MRbxThcAAk4QXm2VAXg5mcWoe7LLM86QbDhmgK6mxbgk7Pj",
  "key13": "2H1SPeaX2MNNxgVKoU7E2e1HWcPV2ar4F4AJhzzNc2ahFECGvT5K75pbfUQhvC5152fr4shc9Aj6ad78rHmdbL85",
  "key14": "3QkznwqeHP3aBP1CZNa5bwfwUw4xe6HnzmpYFqjJthCzr7uGPR1jLSuCfok3EgAspXG8DGbdZT7eHPzCRSZ6sDqg",
  "key15": "KwseNMTTEXu4GKUBEcdEyozLtzz1DfVunagDMV1mQdrEQFi947ss7Bjdk6WFJ55R1hACLMdrGJKVsTxDxUBEiDD",
  "key16": "5UrZAE2qayu2obrsJsHtEHy3VPu3Qxv6AP6g2UZLCiyv9273EidJkqrjeYPGBrPQ2N9ZnE63kHBk1qPqKwM2LNsb",
  "key17": "2jU6Z8uH9SQwYMrnFz8YJHcvNJ4rnsi2phpz9Eo8RmCbWuWQoVVejwCFPe2s422MVeeGURnVF1Spr9ipAsZgB4VP",
  "key18": "3QMcFu1ndcVnLHkdUe3xyLTELq85bwEQBdipMvcHE9agh4Zz2kD9iVc694yAG2H63Vo5biWHdwa2DU2MaHn2SSU6",
  "key19": "4ET7gtTx77BsxXQALWLsjViJ2QPCFK7Mrgd9s7Hwc1646d3Eup33D7VwVS8RfxXGqvjhouMD2cPzgDhvXCR1m4QN",
  "key20": "5Fw6YPc9YKjBEFp8KfwRoYP3vrMAwVrRGLfiN4hXAYa6e2y7wu3n9fL4m4S4fBavfhSxDFKDyWpf3xJpKFDBC9Ba",
  "key21": "34CnSR7zWPUUmZV5TYGNoiAZAH2Le5aZsQwg2tVdf61v6h485VTwkNUHPeKjWbqmqxUPb5YXpFtumY7cirn7Pft4",
  "key22": "5NUAQRxJG71Q9VWzqWpGTwGbDFxmUx6jXU8eJBDtQzDVBS9sm6vFzAfa4FMgM1iS1pjxpKMuWG1NW52hdwsLJxmC",
  "key23": "3zmCCnFKHHnwM1qV7uP3MdT6vBKF2YZdbSdPPWuLGEPGDAUEgkvFDt9qR4dcmUcN5CoMerxN4C1HgXJuuwJVSuXS",
  "key24": "3uPYWous3i8ehuocm9U8FtK5thn8kxAjBCqCwVnbT9eULu2LMvYSk7xp7DLEnjMVJS3nK7FP5xZp74yajC7juK6D",
  "key25": "2P9RoHpi74miP6wwxYFqW9HyrptxjpEaVbRALiwbjU59G6vZEjRUmpwDePxq4tTHA9DgdGLX8Z7hXj9FRZetWgA4",
  "key26": "2tpk2Hhgy7c8eEzfsS34XEnSJQSzHrhN6h97LHd4vc7pmeL1rEFMhJR1CkuVVWYeQtgvh5gUF4rYRbiAuTksF1P7",
  "key27": "2b5ySovEXTE1LBETnH63DrML1xJ7dqYSr97RVrpi8X9cnFcpP8CvPEDzQGW44V5ZrvkCP5WZihB5ZjJoEgZEF6V",
  "key28": "2Xn762r7VWFwU12a1PimCHSoh4mfn4auc5ZdoidHLDasckmbupEgNxP6Gdcd2w3uF7cvAMYJsaHXsbZayr2y3Qiu",
  "key29": "2vQ1zdZGcHyPGUzVfLCaCh7TP727bTZKqR19yivCPJ1pRFxNDSjpy4tz292Gsao4T3JoAKnHFY95CBa5KFEVP8KA",
  "key30": "4cXvGG3ULQXEpZshUvA2Rqi2fGCaNPfgp4P8VFMwaRNixaHVSPLQEpjpuhErdsTiWox9MS9VeNY7sjzAepCHXi1b",
  "key31": "4546btfwtMYz7BE8RFkLyZSHC5EimhrxDhbaxgoLyoLoJbGBauZXQ2gDLhUyYuShHqMLjw9ow1Y6PTCHwTDZpy7S",
  "key32": "5s6AoMzzJbhtA1UEaZU5NYzYcQeRzu8uEBYraFtAaJHHXpA8xTgH1NzDN1shynmAP6AHFU913cdpJPe2YV2dHSLw",
  "key33": "4EBeyE9LWopocCcbPhZiDUD5deswd9zfgDnemcdcoHq2N3iq8K2tvwY7FbeN1hLaLZmh6nCtWLn7ngyMqmzXGh4b",
  "key34": "42aCCRy29EQbMy9qmXaxoSLY2cZdxANDe8s7ZcBo6wprFSY68FXCAEvfw84TFrTJjCNrTRpvxJts1BRyBg9veSUP",
  "key35": "3owr1KP24bLg7aENcZ3hXJqo32KRZWjHiL8CK82m1ifY3aa62oLwMhrwdxtuspPBhBkskaodK7cGQWrJmQfK4yti",
  "key36": "2tERDqCLKoY1meycpu6kZWNKw4VTrzDSDEckp1xFPYBYo112A5kTd3fK8Mgat9pwnpfm1wsQFZNWeFrKt4pFHir7"
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
