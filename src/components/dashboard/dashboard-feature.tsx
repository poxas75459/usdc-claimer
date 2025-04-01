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
    "5PVtKUP78pYHMHCRuqV74gVL8bLAmHD92B4kv3rGrfkyadskMYm3BA2orAQCR7B7eCA7jio8qoVBsov5ZPV5X8i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KoC4YRyxrQYa8zNoGvAieqTWXrLq7VdiVtH6KWnvNRvCR9gtxFDwKtCpe5TWSffDMW9ASZVcJcfKjZcCcAzr759",
  "key1": "5oPp2M6TJv29reXytBHwPbGaZM4JRqdFNAmYcc2EwZqmCLn3n4TAkzBmMuXjUsYu61EESQcx8w8CMszsovectJ4N",
  "key2": "566picj7mSoTwvcELQGzdjirhHka9noCNFf4eTsqpiT8mymX4RzSuej5pXGf3MQWUvvAkYwc2gnuToTkXxVEhnLr",
  "key3": "2NuWs81CfeK52YfeBsXpKCtWgEtL77BAFovaYWhD9SEZDDv62KmdaTrnY5N3SfG8hgAXvfQzY5BqUyeR6jkRywmn",
  "key4": "5XguBBscJhY6A7ErBJucutc8GYbmiy1243DvDmGyms1mhVhSEbgd6E2jLbEQXu8ejun6VFmTU7cjLXwaRo9g2u3J",
  "key5": "4sY9Pzm93vTgyW2ynGs4Qkdh4soeViSQHeoeYDAjWqobptzvAtbhMuM17tUCCEcSPabHhucqmfyXMNgXmNBGMP1B",
  "key6": "3BysQqaV5L82XdyeCoWp9UAq5rewiSKNmpEdYDZjXjMbDx6XWvsobcAtgoc2RQDFSK4Wf9XFaAbizhRVTFJ5gTiR",
  "key7": "2ioAcKJn9PrPNAVvCbtDfLbWdjNf1zmyH2SRcjgeJKM1HekZwZRhhc6dE8Y7L115yMGKsvoDKzpTAD78NjfBG5X5",
  "key8": "5hpQwzfoGaYb2NtpczWnntdmWAcgZiQDCvSgb7xG7yuEr6BiMAEXVxbP22F4Kpk6hhCcEqKk9LWCTueGwxuQsUkm",
  "key9": "3aBNtyyGgaZfd7BDvpQt5amhHks77yDR3tESynEx1g9iSEV5a6NNYYG8ckquSN9ks2mBQAvmPjLzPCoYGVCu8Cgt",
  "key10": "41Wg7G7s3ZfX39tA1a98nrCuJuTpv74qL8oMqFfQXdS36dVKJ7dSV7GnFwMZqhMxv8b5sd71Ym2M6sHuAVhMx5KZ",
  "key11": "mKKQpooWMWg7F5qsrA1mpX5YogKFuaKmhdLqZoewpqGQradVyqdS6XmuwZnfDHMLQWDRd6N72K4KbfK2947XDzx",
  "key12": "5YkUGiD9yC3i8v3QW2JJpYYggMicnvTnWpxD6MQCHr1iAwon6D11EqD94hcxCTCReP4dUrdNHqmKCgRyteGqzKif",
  "key13": "3qnb79bXEEtGxpaGttMwqAx29f2XhM6tMgWxLmpmSDcXvZqceLSxcdeKgeo8pgc1qFp3Sz9z9uvjMcpd2YpCqQbS",
  "key14": "5SkNFN7Uga4UeioaBoPtv9BCr4aRKgYPvX1hdKZXz3XHduVKuDxSQaATyjhpK3tTYCrUzsnB1BbD6RgUocZyaRpA",
  "key15": "39F1z5G6LohKphUFZQx2qxYURtpoFQtwvXKqhvBL3tMPXA1W5e116TL6Xw9PaY1BRdwMATxe24ZReZj48UsZKkK6",
  "key16": "nM8edzmhpadWrFqrNqXGdD7H8XnsCS9gA66EswJ2FL4dYgUcw6pqkhZ8zRNyvdJfuSuWXqymJw9AyJHdkcmrr3H",
  "key17": "5fSnGL1aWMNCv7vJoFU6R3ztxBrSQ6UrvmtPLYb1ax4diSxRconFFHcumZ6XYV2SoaLSRoTVNFNV6uKKW1AGuJA5",
  "key18": "4PETaWTsaAdoAtqD7i7qj4dgVSbwCWTXmSougHTvjQmjJMLTJuic4nqDoijgBa94bjE84XdUCSMpAQx5j5NeaUWB",
  "key19": "4rnqinK64EJ6GDuSovywJrje7CF8ZdUpE8V1EjiTvrrXs7fTppsCQ9n63ApsC6tECjyaJAzspg6PjbtV2NHUeT2p",
  "key20": "3aAzmEsjc9rXxurdQpHPuktfseJJd6TXDMaawJ1UGQ1W1oYKyYRnq7cah6DG9gDrfACrzoyybPR5AgbKkMURVCfZ",
  "key21": "3KrSa7rHvm4BqboUGcRKjJpDKRsSdmLgSFbtdN1spCGGsX5zGSyJpWDV1xWuFKoEmxHgG1jj8bQ2VZtRpvrXjyPR",
  "key22": "3V3snpcFkmK96Fah8GMZWds8iEaYk4fRwEu1h7xdyKPVg51RhTrSXTW2GRnsTKpagMpL7aYNKsG5h4rtFBxDzBgQ",
  "key23": "232ispH5CXN4oBdHeujnbnz7xnuXd4C79kHBeadudf1aQ6YmmKtExjRYqDtopaj9ziYUi5v5LqWWgm4pLF6B9EKv",
  "key24": "NqudDfSQjYGhSEx5M2XhpKVnmQbZ7C3YgwbggserjrvmRsMB5WpUi9Ey1ugDxn39W29H9N5KvtawUhWPZzUSYuG",
  "key25": "5vPHrtXfR9gr6ves7XLVDusVfNasdjnjDDXL6QuX2qNHkb7RJyprrHAVNwb8L99c2cdsoWTBLACVFq6RC22eBKFo",
  "key26": "5nq6Sh2dqc9DWcGdhtcuCMcdgvBL5MVH3fV4B98Ny48sZtAPpVJLzEUr6vyp8q2BeQVzBUQF88qdxnErz2AgfKxn",
  "key27": "37oTCAnhosMoedJzuYfQ6aAEv4KgoAJHn7NSZxtDnP2SNfHFECgxF5ER3pMXLynq4RRHA4piBBVUkqvet9numDim",
  "key28": "rqSSVminG9DiYyfspaa4KQfBXn1FYSCLGPqtwfz3KiHji7zsrPjTXzrVWwTLVTvXMUiMhBXt2moMRAGBKFUYTZ8",
  "key29": "2kL8MNWewQujQFyRHasa1JB2YoDuLicMwmM94gQRZQbYzLK9hcHf3oUrzktQ48ZSddkwpEwXfWMBqH8Y8xtavbAa",
  "key30": "2xXX2XNKv5vSehSdrgSS99VeXJ4cgpQPJmifcVrpiNDYEGJRJ6nncWSa1q11a2geqHEuPQ3tQ7CBfB8s3gAN6kjc",
  "key31": "2M6RjzuksGvZtYfRbavhsR652K1AKqqbz4VARWAsVA7T3nwN8j4zuq6x6KHQa5t4Zk1iuRhd1xS23ubwpQazsaHB",
  "key32": "5Gyuy6SPpSVGgkWfRw8gsZHn2cDUAZ3XzyieYDgBdbjsAa5enx45tHTeEkhj7inTEpnwCsGzmPxNhLeSb1pkZkSP",
  "key33": "5n69KTtaLWzivyEy76bwG7rAGREZshmE9DLyRxgDByeg8GdcMZbcs6UogGo2ss5Qw4PyrFXMLkT7per6HNTzQ6BN",
  "key34": "5HQZStTZ4nPy29M9sNKm7W7UxiSy63ZvzSqJUKn8sQMR2pNQ36ByTfwTNzgNdRFXrpXfDzKMLMoz3RzXkUC6ZLub",
  "key35": "23esrkk5x2FocPt33jPZeoLZja7h2rq47gCsKoMbeqCJVi8dirtfEEwseec56ZMG9APXB5Gc1y71PyyUrizUAx7Y",
  "key36": "5bYP5EFXfEMejoB1csEhLdhjnsf2wM9uafRb98SqEb78Zz6NRttcWpRPEttJCmimjAw9Qk36TxB2PpSSc8C4tKdL",
  "key37": "3bvuYwNrCfkpQ3fBRGUo7J7Ci73BiY1cNMYArRa9p7GNpCaXowq1qEDiuUG8argLeMfjFFRiC92eSA2x24skK39x",
  "key38": "3Dv8wtsSUcrfg8wrusAwLDYPLXNQfqBDnbwRWpxWhbJGfsUoB42Jbu8CioD25UztYKgTzzfAMMJHGjYh8QUHkgGo",
  "key39": "4MY4C3RZrZHPqbZkShxoas3MArc1qSc5X9t3vdw7L8V1FujqsekeMtg7UtN9hsDWZtuYyLrukMue3phs9FTWttYv",
  "key40": "2av9kxzYPHpZhBufQphsnBjRx5scvMSxW8gcrjosZpE8WrCnSuq1CBcFNac69XLQjSU5j8ukKEZEmuEt5s9E2jHF",
  "key41": "58Zt7PhRGW48RnjfYmB18Dz46zd6uqQ79bDdoiAzPEUft2Mv1tidns3PVrCzUpyuWV21ZS8f2zCw8Q982s9Gjhte",
  "key42": "4wd7ok2ZaQtNko3BM6z8vupavsTyQPmn9biJqGaqATsLRQxWNSkHY5ttuGxTC2wfUkS7XPWCQsLCcjDM6yiPkKfA",
  "key43": "YT9PQqh6w58GQkqE24qQqDL1yeufjTgNDJUTDLC2fv9iY3BXPK9qj6GUfViChB6y6gdvDNQxrL1a3baJ7HjwYkN",
  "key44": "4PGcL3nkzX39gkTG1q1CSS6MczcZL7b8VJiSm8z74yQ1oevgnHpXFKLY1CkC7YFv1TpJ5YWqMwbF8RfQHKSGkD4A",
  "key45": "3DrdRR5KR5RX6pVTPchki7e6kMZvkkoWcKrx5RetgpyLA2QqWeGeqRHsqxtZ77WnmTs3mtYreQ5D1tyrrX4iwo3M",
  "key46": "558btNeLy9eTDPWDPoRaQaxiTmQZP6QYcmjicrifXKGfMtgYisvKpi2qCoz3SKpcVkQpWh89TeJBVUt1wYpYEA4o",
  "key47": "5mVXueFiz13KPBNiaig8aHaeGcHfGzrsXzNefW2GpMoYuMnZ8vwAabYYF6VMpEo2zKXUqKHvMrNy5FNV86Y5q997"
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
