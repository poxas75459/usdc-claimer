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
    "44mpzoZXuiA8JEpY4PUXcXAJ3GMSNiB93cG5wkeB9FazEMsiPAdVhnYeaxbWAVLTx2Dao7c7F92VAYC3riUofx7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqGSiQY1ib2pmNLraVAGMsYvpkdJfdShDkn3gnUakTTZqYL73jP9QhfdSE1gT25QM8rA2FuyhRhQbR7eiYtDeFZ",
  "key1": "3gq3tToqU7PhV2Suce3v2hExiLjL2LrcKdof6VS6bwxfRYaCFKoRZy4vQEafoPZzoyEzdTBehbGZiEgm7UU429NU",
  "key2": "y1FUKT91Up42p8AdZ9xGPyp7NTVZPynLrCtV78BPN1XoDXqP5bbvCQ1fRFXy5iQMeFg9CMKPRsGbXM5Wk5rQAwS",
  "key3": "4FKHhoLqHj8WcSiEpzDah4728vi2YcEWDbYJsZUhKg3pQ7vLAk4tdimVtKi4DdxMVHdFErM3efjmeh7wT5kdBTi8",
  "key4": "3ChxC4FgenJcdv4mUwMP6ksv7UzxXSJPKwU8mnBZrmh5cwwQrqCkDoA2dap9pcU6jrVpjnuT75rqdWed2mVdMJfS",
  "key5": "3ALA2fuviVngW8bWTpQA6tv5Ptk7aBnnKMb2gPUtpiaDjigruVQC8gBjmQoS3oPkkkcaezKWyZaYcy7S43Y2roxd",
  "key6": "3wqAKhLz13Pv8iF7USxagLgRyS7RXCrzh3oAtF7X61hTgBkNsHwFQuk2DK4ZmbmbTvck4ggxsBWCCV84YBkmrALe",
  "key7": "5Em9P4X26cDRL4kskMHXJpxdy1FBPLshZQepM2AuJ7fX8oM9tdCWopJ87qPHQpkPPEpegdNJZFFrbMFELsuACD6o",
  "key8": "2BFhhKaaW6Ntv9izN7JLYxj3yv7CUnmjvYVPptouuUot8wwvMuNni7YU1AvLRhGydGeUseJ1Acgvud9UkWeF4yv4",
  "key9": "2ACpi6YXboLNYV4dXqVjFAcno2iG6z8D9p7HZ1U5HomV3cu5BWmJmnnpWC9fV91VdrtRtyE896TdSenvPRq9dFrV",
  "key10": "4iiLjdCcXTUSdFaj5AiTLzn5KeaWLU3CQzczW5zg56VczoJJgpnLz3YXgMdQvKmTUQdaHj1HZaAVgJ5Hm6kR47oH",
  "key11": "4ZpDdYrLVDrx43RVTqLPsSZhaFap4DVMxYP5cwnq12d8KbVV2smx5gjNxfSNrcGNxEKuJfoHhv8HDLkUmV9aaUX4",
  "key12": "JRz7NxCSffjD7bxnF5pei3YXcimAdEK9nyHngMeBEH1ST6ZaJUDGSWkt1xTAxQLvwqaJ83gtVnRP2r5EmUajZ3T",
  "key13": "3gzALMQdinFQwaPw5wHozBwHoXSPPPtwE884FAETDUWb29S4uSqubvVLA3MQBE1PFBz6hqf9mwFjcBa6LvFPV3o5",
  "key14": "BwJ2BMUHPTcmqBApMDcbQBqTNCP62dJevcMLQwSNQ6mmrZa8HBs3zXgmW2Cju8A2NYKegTiwbf5pMrj6jWZ1UTV",
  "key15": "39To2pofuVbUMuBREkwpVgiR4GFDJMSXoGGrfLmpuT31A1VnWwt27p6n9RNkc19iAqt7Dd85Ya13fekgyCQ6Fqj6",
  "key16": "61FTow2txM1UzVx76wPdCdg3zyQC7atxLmv92CurPto1qadcF9pSPxuXMoX9WSk3mGaoT8seF4rnCHepBQppMHHw",
  "key17": "3g8KvsQAMFmeGUpBNsXPuWkD5agC7k63XDGJ2doz2sPfJYTbZ4AuhpEju48CYdU1sawcRULvwWsH9ZzkZ1n6xvUh",
  "key18": "3QtACJdb8iZzMK1XKqyEDeJaj7D1p9kQS3Tp8jNW1XsWwtmwBn1U3m5dLSd95jkjRguQPPmZRiqqHEwv4TENXSwy",
  "key19": "5n4NPcRqydPe31jGziymkHCndb9VEtGjexGNQ2eQWEZHuP43UMGiANZYYheyWr6FrgqHgKWvgJA3m42pxjfcw5jA",
  "key20": "2CWTegwUdH41JSQ3DPVXVeqBUPKWetQfYo9nnGDhWG4YCeUCk8xrmT7zFgbHySVH4H1q2AEoCbSY4yWSPfxZA4qs",
  "key21": "3HToXLngXiHg7WNhWafEgnnGgJAseFWeoLQwrDM2D1fEmWxTsvdqhv5gPyQockZeBJg3zquSwprsY4MrTi8z3JgL",
  "key22": "5WvzYmXiicJM9CVo2Novtk36f292WCtZ2c5rp7BKZ4oehWMeCrTmfEccgbYh7sLPzyua7fdomoFu3T2HGYb6Sp3Z",
  "key23": "AwFEH8Fob2JUv1bcCTQL1zH46J9zaABCW1FQRqGvsFfeyPnNCHuRwegXsQJokMPwYdGTisuFU6qMwbAzaTZNepJ",
  "key24": "2n3CUCTUuGtmD6wBr9AXVhmQTWbwhwt1nwDEZFtJ51WBniTFZKvWBoSS9EyBV4k8ysb63dfcB17xJKJV8sDEEs5t",
  "key25": "61TQpgQxejJqM5A7LXQLCMmuDNKmukjzCc5sUr2sUbLKMEaiyNbraG2HNVZnKdA6FWwALRXsuBoL25HhmwBfbTAC",
  "key26": "55ebAoMCZyZjnLFZ7FMZWqnqJeevQ7RUqbEzR3DWFXexV5PtLaSzziL7cxqhz9j82mGN62ecUnbKBkEGuHoVunHP",
  "key27": "5Eau13LtKfWmub9gq76sgSEGgpRSpwizHZb2kD33cVRXsLbk7guPK54nxrW6BAK2J6WibuSb3JMFQw3ct3mkUQ62",
  "key28": "5aCxmcL9GE1gxN8xXzKkRkSyZPj8GfhRobSLahQ15beWGjmttDESYoSPBjtaxWgDKhmYsAxu1Lu7jfssBGN1iJVm",
  "key29": "3rjtXVfigWgMdAo4ZEqN1xvcohUezbfUHPZvCjMRKNjPgDitzFkZrYy9rUy4yKDdQ16JCPNn9TUWSohpHzhCtPNy",
  "key30": "2TuLLSHApNeJi8emosZTty4JFdQHdPWMQb9hGnDaDTghu5QY1TSkAsbfMKjUck9Ewu6FAKSgo5rsmyTxQYTi2MJd",
  "key31": "4B4UWgD2rqzcfnqiZr1qVHDKrWCJbtK3hoJZsPnvsPS6BdqjpqTwPAmvuuCCqKNoL3FjwcawRd45cug7FJAtiLLc",
  "key32": "2EKmS1ApZAMGN67GhiJXMix2sEkeKxsy5kTcCDTDDsS86pmREB2rUDyfRdareTNCrbexMCCHbLzUPpBupYjh9pF1",
  "key33": "QyRZcGFeFpGgCHeikY318oPCPvqruo92RWfHpTr1yWNC6pEF7CqkXyxARLHGuAPMJXWhkdZC7UtGaLSwHmppiEi"
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
