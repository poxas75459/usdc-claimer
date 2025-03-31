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
    "WaQ8bP2wcEYqiFitsgrAYzLqww1bpeaMHjaW2PwGty3fxZrpNLueZyx5nGjb6RnU91FNVnGVXPFafjoRW5KinWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZUoiL1rvSjjpaZwDiHVmYUZFf3KdDssZoruVYpsjqLPPwsjJKdPW111y8UWB6qLCLWRGSxqrUNoMPT9m6JM2tL",
  "key1": "4rxkcfWewR59kFKh4gBn6UxsocpN3Ey8g9zFXczb2oAg9cdnauhRRJzV9Rt1KAjPjrHd8o2nXGC4WHuv5LFvKkj1",
  "key2": "55NmMg27Yt58nGwudi8bEpJfC5NZURQBPY6iydGSyot6ej9KgLs9nmYZjGkVwg5WybjEmJtfoxQmDKPTbJJWy2uH",
  "key3": "3MvutyGfwcYZ5szYSbKU4LSWNNdyuKjBFiZ4UwsfXcsWWtGqGzRzsbbA5kJBw2EKEB5tCuC4ZPsKUUk5tiFDGJ3m",
  "key4": "42PbMWaozhzZS9fwJfqi6opi4bRRo7MN4vxzoBGBoFdTrXYpQRksUEyYBCV2tVgLDc7Q6sJb3bPZMDQpQ6gU6tnm",
  "key5": "3ybpS42XKbgzCHXqEYqo3J3yuHJZRaBacNZ2aFKwYy9ZW2zJ8gupXLZMGZPg4hLZecM1Lu5rVUrqesdnbUZW9Tcj",
  "key6": "5xyn26aoaZvWbhK39bBxDw6hoJXKMCmSvbxmfNAdS8T3ECP6fDKNp6xYdaCp4TAqX5v2KQMdiegcVjqrgCKMhacm",
  "key7": "3rn8QEwAHa4pbVr3Dd56C4MNzSN445Xsa472hvSuke92xoHSDZbr7WMnRLt1RXrbAg8wLqtYkbCKJJM7p9BDVpcR",
  "key8": "5AmAzsFJrRveQGB2oVogVzVos2eCDCCyN3u1MYRKEA9dQ8QHGoEKtuR6payN8XqAriDsyq48MyoxnPVWkCJMGirn",
  "key9": "vHDchqzV23H5emH8jBsXxeRNomQyFfhZwbeaTrzcEtNL13vTApeFxBMxnpjEDnKwT97MQPdNX131aCcBhz2nokh",
  "key10": "67SbNNZGpRTQkiBrHoJN2uDV7EUwy74Wg4YsJeXgBNUKeQvDRDW7p2JpfTVoAd4zEsnCvTX1gswEqrTsKd8Qi5q3",
  "key11": "5FKvKwpC6xUegECfi7njF7YHwj4YrfpPyGq9LBcXcxnZS7UyjaMeSSUbZ3VktrPLJWzV4EJefLVq1fqjdd1miMTU",
  "key12": "4b1JupiFTjkN9Ma3DvKXusHuvWB7jrp65iss7vVpk2pZGHwthKcC2APfngGmagjAKYUHHdvwNJr4AsW8bFif4J6j",
  "key13": "5Zc2cmkj8ob4P9Gx521EJaQeSXWk99C4zqTDjMGAM7FLE7yry3TybCjfoXjssd3PWUi7qTvEoP7Libhxhc7ePJEJ",
  "key14": "4QDo6TavB89eDJ1WCG7ZXcWbbjZtx2ArcUS7Q3H68Abi68kp6NqDkbnR6fLWqiu4ivv85yMmuHE1LwrCCC2k7nvF",
  "key15": "5yYsJxqWSKRJkWEsGxo75HrMALMiU1h3WpJDsY1Pn85kuWUrqMnpSBDBFd9UNV1LsmXZyWdghdGeoKuofFkGpDhx",
  "key16": "GweEzGdmfvpJ8ZBsXzKuQGQs658CCTgKe4MZDBfNkjeNabBA9iiamtoacbXpqCtrYr1KL36aY2QgKyxTXznGknX",
  "key17": "3sbPwn9QcChbbVMKG5xysLLkaVTRahg4tp4rhLQU4a6Rjp7KbkmJUNQg97iUxofYNHBphDa3ZcoPudgtEVTxhS8o",
  "key18": "mJhm5XF4MhGok1gFdupF43VnkQL4KgHyWP5oLvJSdybazVPJ4sD9VwWGUME97oi5JGnMexXsvo4eQGVxccArpdX",
  "key19": "4cjDoWy8ypieQroKJDEPkwZ21WpJLNLBYjpXa4AcvLANq1fY7teuvrtzeoHK6tf8atxAHWDvzH7fUNmCTJ4NDspY",
  "key20": "4T2KZvYFAesWmwz5hdAhbffdV7PATo8bLeBnncs4atC3as8EgCGQg1dLbR6wdaSRaccyaYRyPLEZuiZFKBDSggSx",
  "key21": "5G58DT2Sj4fqMPkm6LXYcUyG4V5Gp8UAE8G3GZaXQ8pvAueAy4b8eHxZTtGcmisZCz6NUmjrQsnXp8cpZeVzbkYX",
  "key22": "AAETPgGyt6fjktzkutNGkMvHQMnEHHX2rcTqjnLQRSHFiUg5sjos9Fcgkg242fGpRvDeqzN5C9ZuugBMz9vxfJ1",
  "key23": "4uvB56H9UtZLnCuv3QsvtnAYfbNhcNRYomNJ39jzW5Ek91jUJDKe5dDpsjcapmXs6bJJRwj5eHWiZMi3nFgFrVFS",
  "key24": "56251qVp5Mrx639daY4DSCwG7i86J7hNLf7R5LYaJGnbNQ1mwBNV7q39Dxmgi2TanAAKkKPe8yz6HsTmUWTcHMQS",
  "key25": "5U1J3xw9mMY3iwhSuyYKDHdydBZKsjeEDAU7zLZtoKcK8oUY6ww2asi2S1QCUs3qa1cGvnAVGYZHAMw5bpfwrqGs",
  "key26": "24ajUKkVsCqZua7oHiWimXyfQ5Kfok6TBMoHJgnj4fNjseDtnSNzeJBNHf5xDmwWpXEok73GhfWGsbFetp4BrgAy",
  "key27": "3FTVFqDefh7ZL6ZyuyduJ7yrMrtRN9Pqqa9SMK3446YYmhcR5JuFLGkhGqFtBMvDxLju8TABCNRuMyNBueVxxMLQ",
  "key28": "49kZDH5YTWijekcsX77A1jSUX3XELPQsZNfMBDGUKoucbF55ogM2WuaBnNJxnFSaruq6qCZ3Y1AAwcqXFsrRdubH",
  "key29": "5CE7X5iHbHez6z5ejG9Cds6SAoNhLXVLbiSpbGpYpq14QDnnL7Mnd1N63YbVxN88xDptGgsi4z6bu8D2oK6kYxZs",
  "key30": "37XyuVXT6anTjcXuDAD7YQATdGYHmTtrpgNYwrYucDNQWP5ev8DuXB7AQZrGJXFx7AC3m4LWQU6FkykxQD59TBy9",
  "key31": "34ZXH9mebKWjtFVphkPgX5HR9tNVSryfGsUubnJapstHpqvXaFNGMoSvWYwANq4DJhxNCTLVyrHzZsSZXArMJAXb",
  "key32": "2hkXwnm4nQoV5ov7v4F4Ha8nGsV9fCeddWX1cYQw1RXrmaSEJmanabTNVk9JkWTjWSSPoHQVPHeDMc7buYR7Y384",
  "key33": "4tVmKa3NCdfKGPQKdTBgcTwVQGPH1QCTf9RDwuGBKhsrsTjiX1GBMkDcLJnef4tySqD7eGcUSWLJtW6Grf7GyNbM",
  "key34": "569UVXsAfv37tjpWHWECkGCciAWNeLrompE8jQsV7FuZStPz5SSoToajh4gs641SEckG4kzCpBpSS6jbxZkwzrCF",
  "key35": "5qAaRymGg4gAKyTRBJSYpmtEssUvEGQ8WGMFBYWLYLmNyAhUBfqMfTkBVvA6TtN36L7XCGznAoJM5KCEWmMnBfGA",
  "key36": "5pXMHqShhXCe11hGG4PEEQMo3oVT97mj1BZpYC24bggqknE5fGPpfHh7ZvnATBQt8nt87uRJqHDujZAHW2zTErCA",
  "key37": "5Nzab3WsFPKkA7DRT8PZfQ6r2ECWmrBFGuB3dBqeABmzdFEynrpy7qAM87v4ZrULAC59FvdgdWmPgkdJMZ1Bh76y",
  "key38": "4PnQJ5RXkDuHQ6VoyA3u3wyoXws5gZXmSAVXaetxSsrvWjUwzw9vPveR85XqoZevgdMrKHqNZJKNWPny98QSJWi5",
  "key39": "45JFD9a6CeyKieeMtf9EtCvYVMZGSTXoC2KhcjjoSCFjAwfpgX3j61v4Uu5yDykgkwTRFSngsLbzXPTT6r7m2jgz",
  "key40": "4LnKeNXjrRWfxBzNkxDekoPTrChsURgZeuH1Gf9kcktQ9NwqNHdfcSvERnCnE47ERTsDFtgyBKRJRYBvUntHjoCc",
  "key41": "xw9PTis5f93hQ2bPpa1YBwcnnJppWakwmKbvz4MW8ihyW2CLDBQnMJfL5UxAvgKegYqeoJ8rBnVeRyywHdTWTyW",
  "key42": "2FdAUPuuBCfmvt9m7Bc8nG5eXmwG3NMRPvj3yCLD8QHGJr2TFWHMpwU8ohTDCZzHvMTKh7CnmkDiZ1XdfxGtLUA6",
  "key43": "27eF5Nt9ww7KAXNeJ88xqUWo7MiCXdbktUDZv9Da9kodw9SzHEkyN1PTLccBceuAZqD4RSfAJYbAg5hAh4iNhgZL",
  "key44": "ZNdeCJowLXtwgc5do4nsTT9uAZg1cgLgBq4dCtpzhWZo6R2QRZzdwrn78Fac5qNXHMfMB9GJ7ENtTyepdTu1cCr",
  "key45": "61SnWcWwJXJSaCVBpEX5ogXizi5zZHLdcKqYpAzg4odwA1rhNUxm6rjE1s3NWsMM2ChkahUwQ1AtESbT6fFM5YvV",
  "key46": "56S7jFK2rzdDWskjw1qfpuCTHLTELoVSeRZv6uLLin4F4iM6oCVnxdL9tUoGfMaxYbP25SvZFYdJg3996pP6Zzhb",
  "key47": "BE56Kbj71stBqBHEMD5cen6wP9hEkpwKnzkkZ9H8CMFaMAFWxsFjLhqodpKChXCKxHF4St4Anh5hg7j1aL1uSLf"
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
