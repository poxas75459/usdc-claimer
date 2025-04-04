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
    "5v8nZgdacSZRXrePiMYDvzqE7s1PmX2RD5PRQKXdGpuec8bMYMwhGmgYYNudSMTXZV9G7ZdtcbELpWL2reebSgpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEDC4tj3vdER8zLeLCj9hRYe2K7vRxXZyW6RpjKrCpZid1NuLuEMr12bg2qnoqjwYiS7DA5DgejtviwEcCPj24N",
  "key1": "63cUgE9zWCPg9L4pUe1mPBX7YEwYeWKHRwSQSMXCKFjFkGjBMUvwV5dpBD3qtJ3HUjLsyJZVRwu9k5jHF6rgys5s",
  "key2": "644SawHYBi8pLqZ9DfcCv8Hb86ZSX2nRxPGNk3y4jBkSJW4UCg8fWpaWXTwC4MEVujuLmWgLPAxukYtRDxh8w9hf",
  "key3": "kfCCoUDaazBLEfJggwFLhTLEJEsiszPfq8BYCDGTPabfUZ14RP7yJjFQE88QzQxuXHHBMcW7Z9ofFzjbwgTNUdr",
  "key4": "4HShabKkzvMDV6FNNpdqiqxqJxq8K5dVZ5ox1WxrEUpM6k3UH9iSBKaa4q8gpmEkfgBRcMZ9kf48x3Zd9hVDXX1N",
  "key5": "48paYitKfdzQ41yNE8dTe4j6KdFMyyeu3hrUmVSYXKs2QSikJ9hMNwxq1jZ9f6mV6UiMkh3bgyhWF57bLpFD52nJ",
  "key6": "3Cv8GGNM4WgWfgiV7jBQ3y4QiXawDsqybwfvMtzGPnY1TFD2Q2DD5sgUBQUZSrFHmPEz9mWkFkEBtmL8dXmjKqE5",
  "key7": "4Hmyc8JMt2oXxZy64rtuMEniaJvEuPEhuRHHwEg6AbVc6gNpDwmwdS8FsTDMgJTiGtPn6KKvPZbHuMx2TXKHS5ji",
  "key8": "3MUosnJSSzUJth2n7xXYv9JAzqRZocDq1HXAoFWS2kv8DNEosKsrxuLcpSy82cUEydAaF3WfdUEsvXy1aGC2QZrz",
  "key9": "3rAMYuZDKVVFVCQNAzntzv7SYCsGCRcaaUxS2GzdZvxx2oQ27dPhd4aAD7yjY8FTcgWQXB468Aj319Gi3azYF1Be",
  "key10": "4ns99LCqxS7Jh6AeWrzirzM1XnKmihXsksuZoMJiFq83BMicNw7WbJBCtmAsNFUjAgLZmmBwQHuCGbWHMNp89yDf",
  "key11": "3gHatWyfZ1PTh8wYm9qBZ1avurt6esMNvaEM3ZvtSKRhYyupmFWg7p6NsMBFuJ21BVn2TxLzXG1eCyaYQ6bHodDZ",
  "key12": "41xT5ESwWJracWXk1Y7YsFJu3Fog3DeiGwQ1p7MYiqiiPh8pxXQRQsh5nwE3uDFepB8CfWGamULCCHnWe712HeBL",
  "key13": "3yJZuvspEhESrGmo7jjUcC1Tc3tqQ3xJPLrTTh7FUBWvCxA7S5zcnUeySJXWyXBqNSVJBsPfmmx7wHD1r2wyP2pL",
  "key14": "4wY3uqWCEk4B2povaHc9TyUHBMD8B6Gzr7Mv8ZkdSx7nHv13PqNjKRcYKmjqLyP7PsHAUpsJZg4jG9Ks5F1H6exM",
  "key15": "3mrpaJnijtWkonxa75gFsvGnv3nNCL2ZPGzVTu5fZBfag189YWnBMCEoTm97f6hNTWDTx9yJSTunAZbLXyXzcDHA",
  "key16": "5cMUWmQe5EesU71zD5mDgwBaeZqMAMPjjB1TSQv51fwFwTtbTmrLP1RUiBoVkUGKaAVZsGRPhPhqtVssXELHBFQt",
  "key17": "MTMmQhVtCoQrN18NwCTBn7yFmBwo7G3jCVhvowzhFV3nshFq3HMN8NZART98qVFQKpiyGsomFCceZzYsinnFr4S",
  "key18": "3RPswNJ2Y9ffuaMrVgwKRVscF96iPPPTjC6Zy4BADXtt3rxKkZ2SKLkGp7otZ7EozTGdtfAYHajhz4YLPj6eR6Mv",
  "key19": "5DvVAntcT9VavQDrVpC1iTsJLC2bkuyex67nUH5SYGpGorE7MzZQ1MVyfsJPDJ6UFYH7SqgrqWihmBX9hzFL7jZH",
  "key20": "4CutANpUM95dShsUG14rmxGoD4HYG1oMET2fZiBpiD72nmeH6zRTP52dD4Y8WjcMTP465ZmF5tDY4g99qsLNCShu",
  "key21": "y2uuXLhwmJ6hFZZZWUBrnbsVBXejejXQcUeC6QNAeETXfz9HzaYxDzxYW9w6Jcnh6xWbavnbRbuCTwB3VNnbifH",
  "key22": "3i5kHG1DwcwqFNxMBWjAhydsBAyaHtrVP4Ts42Y7etHhwN2yAHqfTt3QcC4FteMXcKwvXKhRMuoRSq6qsofmZKB5",
  "key23": "2E2EEjekSbsKn5BhzD7iDuoVCMnytEQKUURh3k4Fy5xk3jQMLjvpiF522ZjTXYGHqwVXvgYHuNPZPeV6Wb4b7hnM",
  "key24": "5dD9dmSdtyN9hoGdtMQMHeRV1HDQvSXNV1zGTis9m9XQmeCsZKjHyoy33xg73erGzwKGwyjH5QhT62xxvK4TynWe",
  "key25": "4yFgM6eWUyKqMq3XDcW5HoSGUZbR7XqswFXbUJ6dkwEYAy3aU54NzwLivRpZ8o5dtGdhFQwSCsCkeyHxdEi82YdZ",
  "key26": "4wkzxv2wMtusv69u61mDGW3a1G59TPnxse6YM5AFSHVTRUHBsVLiQfqA7H2dRsQV3xU9Da1e5tp86PSuUsEx9Ag5",
  "key27": "5xYxH3mDppx8RkEMNJDBWNVkitCSv8R5SUgxhSaoqzUp8utyxAETnvK19fEkqhkUGcJeVKsLoWvwnPYfyxggJ4eB",
  "key28": "39D3PHR7CCvZQtkhatQ6TM11AgSV5eqCDT2d7f7784FoiCLtTxHzgJtZeAqaCh22jJNvmw9NE9vVUKZK9AHArqgi",
  "key29": "d1JvZZm8fegYYe6b4UdxYqiggbHQwqAEYuadKaxwXuEkzF7hdFXjJjuj5dZDaWZKzeCkTWJuF65VGVgMkSEUZbh",
  "key30": "4PuqpaXGwk2nEY8BemG8bUs3D1RjXDew6egQZUVueDirLpeGdhr96KqWkvTjTyMSLYCCn1tS8MBYQgRtskaYoYSz",
  "key31": "3v1DDB64AsixpDYoUQZSPGt6m5w1jWwytRQB4LEw9JAaiNEp8NdZxprt6sPGeQGvbHjv7RzoicbiksC9AJkomgrY",
  "key32": "NECC11CmgDprnjJ8mH1mnS8UbqyNbjSWg1gPcUqAGtfmppaJ9EVAUDoYSGVuoynzkCxavJ4GSxXEoA8eeFHi2G7",
  "key33": "5FmKvaxXxGqhsPJpBMSwaJDAJAgzc3jZdTbtis6mPW7goUbWwfJbuWaT3Q7C7BJzvkyo478yeD7vgAxiVztJZtr1",
  "key34": "Qry7gmvTsmUk2X1UuXvGfPSHZEPJYPzhBCrFSrpVpRKWiEZ4XCAgesV2Zy5gEVDbyWjwARWrPmSiGytiHTYiKwh",
  "key35": "y9UNN7EiGsMF61KbWfmG5RhCd3UjYQLErb4TpwYu1sj2bZpvsycp1g1GufJ93q2QCb1at5KontRxqnDQH4MEXtt",
  "key36": "hZCEofXgepPLjT2YSDjY1Xzb2A2WsgYMD74XEaHLEvprv5kEFnZhX8wxZp46LRbLfWncLvGeYAHs3NDM7Q7WEtb",
  "key37": "51eitsWF1xxpiQpcfAbkH49um5zWWTHvDF3L64r8wE4KdP1CJtfR2qLnGtdvA6YuJhDwLAeRVQHVybX53Hx7gPQE",
  "key38": "3CB5H7z3c1AsFqDYJ2h57dMNCJKmTph8xSU7ZL15PTcNLgsN7Ew4QyFdfyNhFMb1hstnsFpRMiao5Qg2whLCQsr5",
  "key39": "ENhFgCtx3QoGLtsmfHGekTtQxb7pKb3162ge1nQa8sGphBNzfZzLbS5o8autn2Guq6p5tzGfRDAWXpyZE7M1pXr",
  "key40": "3iURXqU7zqy23DGXdu3Jhq5hwv2tYRNrWgPSq2paS6MvoSofZdLgwa42usoiatbckUtRCKziSMChFG9JBHef5Wau",
  "key41": "5a1mZfcJgheg4SGuDLHBkPXtmfMDzFyKw6JEaPfQsnpgC6PgwKYqB2aLuhJptouTEKK1qKLrPkTewaGU2axZBM8i",
  "key42": "3hjXzVuwMtQXknb45ikrDfsjXpHqUj56de5HcG2H6aKJbrrfhey2k88XBC6uSMQ1yr1kohxgAzT8kHNnejfDRbrP",
  "key43": "2ZdkkFYL1ENcQEBy4soioJBRyDbbsf2GQrp8p8BAFGohhrqhAj49w21YUwHtYLCT1AMjNjmw56krnPfGc6uX4aj1",
  "key44": "FxyTZLKvug9kdF4cccBgTLHjsegw21hUFA8iuW18xQqQ9zgAp3LA3mFF7cMHEZJivZaRjvZNbfrzZfWDTbzKi3J",
  "key45": "ktTw2BFb6MrK5nvhndCYPirxcgr2g755GLdMYJMwMarYWWmZrzimz4EYWbhMMt4hV445E3Qix5oB1UvygPiZoLC",
  "key46": "qtKbJc2Es4nLR9QJ2QCXrACBG41E7W1mhcoLtP8KSESCV7SRdmeyT3o76eLy37tw4xiaXbeVqZ9EZWV1TjPgieB"
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
