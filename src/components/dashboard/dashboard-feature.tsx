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
    "4V95r4bN6WN5xzNEpNFaSaSdxApmZViuSd6KiXUtWAnUfChfFfPFUsZJhx79hZBL1pcCmUQi3WiTWDNQgYM4EMK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Srq34dxR9VZcHCzUutPFvDP5WRNSbPV6RbPU6ndfGCQH4uTairNTe8Kd5pxvahF1RYGqh3bpZRRHLfD9WHDt51",
  "key1": "2TFFV2BE1p4TMULsb4PbuouKeWFzGJeVmPT1ACkSZYJDGkRoe9fqk454XRUsc1dQrqHV9iS5QBJqgEmEcwbQfqL3",
  "key2": "5jFsbjfpLoHdQCg2fXP5YXXUtiJD91CFzB3uPrnC1B1NjW9sS23H3rJtoxZF5sGcFc5h9VgEofR7tWCDeKQ611KG",
  "key3": "u1Ldn1fhoxDo7MoUtjn3GmEPjEDFhMxphkUGouRX9x4JcaGhw4AX2hTpHjuRoK8YsxMbigm2U6DnFMafiAAQUBv",
  "key4": "5f6JyHsXzL369N597oBEV8uPeU9gxJmBSiksaeGeNqk8iVrQdddQ6X2zPNFLSW2mGSbnoUnBnA5peZt4GrbvMBVH",
  "key5": "DjprNmmY3LPTrUaWxFCqoitj29zNNnCg6RPKjqeH5k7CJf9PzFEm9HZ7TMBsvFQBcLj1WwhchZ3XJDBPav6fH9t",
  "key6": "5NYkJae4a5q3asxkwcTD9W64QSWaJKNtoxjr9BAKHFay1iEzRxfidFZrbBaf1ucvKdL49jcdBoz5hws2Xxf8z7Vi",
  "key7": "4XhraELheBtDgVUReNXevTuPM4EbduXsJfQ4VQ9a383c8RDJCGAsZTA5xRRL6vQUfWqWhpgscxHcAeDqiDzKJ5pT",
  "key8": "57UzyZagFwkEzHtBDSx5dWUZVrpHc1S9AQXUuDGJVNAmPVXapfw94A9qTPNNwfkLv2fPm8yTcPVhGCBame7Jkrwo",
  "key9": "3GZ6EkopPihXWDatE8WRJvdBXi2kNwAawoe3GrnuBiira6cJ9kU7r31xQevgBwsTBuzLrBNWLuz6EL8Gwy6qKDFH",
  "key10": "UpHa831DGZCJyugebGgNGwe34aj3UMExWT5pSHcmMdSZDGwwhC5wmEZqpkKFhME3SPRZos9xUkQ48cEFRv3Fant",
  "key11": "25v1RyhzvbAweViEXdVWBgHgSzsQXHasBTnCt7ukkoVhsv9c1TJoDLJvC8xtGqeQypnsn7AZvqf6qeqy6PKBAsRA",
  "key12": "YH4N1YWaq1xFYo4YDTh5fbaUTxwrJ5m5nZrjbVTgGJ9h3m2wFa6oqpULgV8q6ENvZLTvtro4KE9K4WcvRo3ibXq",
  "key13": "35YBiJ9L4HeB83b1pQGoJbCUj9kwg59aBNPMyivmCkjWPNpa8dC7ppRx5gFZmAs48kHVvgShvdiHXh4mFQRAaDg2",
  "key14": "3C6cCxEEBGXA7VDS4eNP5pJQFxwFigVhhyjEJFpLdbboZduBUcpH3fcrkiHRyRVs1TFxgn1C2C1hCFTfWoR8Mv7b",
  "key15": "4EHpuxCutTziMHfogx8FqCYcsivbcTa7ehgpQr2QXLnMWwAgMx1tiFJ51kbX8dXwJf2QSMqt3VVyTnd4vBHdQpkP",
  "key16": "2YktJQzBMQUxiWuZCaiADVQrCs8g8pFGE54WkL6HJVCzyqKFL9wkjUNWPa7RuL5V79BShiDQvBHV5AvXfF6fSUtN",
  "key17": "3bGypXSR2gV2YCeKsMRRbTXZNmdezaQf2gi8LKnVjnG86kV5AQsKU3u1KgUS4Y5ZFYdkstHo1bz2jnDWmafaNUZp",
  "key18": "3h7qK2hr6Ui8y83m85h1KRvnbP1TinPwAoNRN6Kdx8NLYJLbSpYEs9S5oGAC9gZdPFPpqaJH5VYoviLCzR5qgVig",
  "key19": "3L1fjF61EFeBpQf4jByXFW3voLnxi9ukHrRhr5W2cNvZFQWefRA4xjQoprvuKfgAyoqz5cvy2cScXR31ctim1zwz",
  "key20": "Dwf38NVKbvuM5B5TiYghtCzADk55cS6JNYjYqBhhHdXQ4NKeJYH5Wd5Mrwyhpx4NNEHDCRzkH77wAHdYoDdDpTw",
  "key21": "rV3CNuBsz7d1Frb9ueHm8TYMpVzCFVjs8Ux4WL3zC8UqzwJDnAfJTvvJZUKG963czDYBL4U5tALBYTXTghMwRK9",
  "key22": "2nW15CofLNYKceV2AmtBfmX4vpfghjQs7bdyVKkh3zB3bUdfzDXG1B5GU3N1zTQqRmcNiV6dXVg71WEY9B16CGts",
  "key23": "5eZ8CLdfzppBRcmVQtHzUknTZFs9gJQ1ZgV5WTQB9mrXBgGskmrrGQK1acyteLsMw5cBxAvpab7VKXbnarhfiJZf",
  "key24": "7K8eFLk9TGd5SXX8MYTCEwCw5xPitFdrMKfgRedASUjjZjNL2FrgptemYs4YeTdqBhz71iwHY1rQCRwpbCSQQyz",
  "key25": "2vBwvkbtoByan98w9vQ2Ueo3oCZBakk5AQod3Ubvie8Dy4CBBHUi8SDQqaS4RF1ZiUSV1u9UNfMoTKA8q8JvRr8v",
  "key26": "4G71d4i7WokqSDK87nSTteSE79CEZC1JaB1giLHbMye7fCtxAK7jSnB5esKUFdsJoLWN73C85fj6Se89aPNgJ2yS",
  "key27": "5Y6dyrRDQqjyMguQcH6WrQvCZYKe6c6ydebWmdqJMFA5L3QjKJYGbkHe1ecDQqT1tbMPP1XxtgL3bCd7W27u9CZC"
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
