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
    "3hXQRzu7UrfbS76D5933KZ5MgsoUKaZFNxAkDZ7NP14zBu9ALZ7xnkePS5YyL985dvNNCSSuB52CRnBtrGmHNc6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PfTeKsa6ZTno8t8jRfy9UnY9rfArJ2cjcuUNvdsc5YZEMfxdE3WXu9i9NSHgDC59rgAJd4emtFXocmL6eqgquG",
  "key1": "bmMwpSBXyMphXbwaXDYjCnFmddSVBSCcNoCvn6ZUprwyBpZkRqqhNqKy8G4iUuLfdcFyJ1xo5ztMhSVLCtn1Unt",
  "key2": "2kJSRsiFLCMiomPRBL6YsSR8npxGHm3PZ9Z7tG88J4ShxV2MCCnCYD8fd8XYYUXAGLYibBr1SLtrW7Wb4LJUZ1wa",
  "key3": "3noNK6PCiu1o3bcTS1cn75DiAXYH4suhRpPWVsBR8Mqk2gtUFf14nZLESUTZ6FMXkvAFEWjT8DMSFMaybG5GxMhr",
  "key4": "469NVyPaAviFCuJqKbvX85YweAmPiEgLVEmEpsA9udQEPDwMteWjxyePUQ4oFXc1PzqBzWdSA4w9keW4Kt2qdCVp",
  "key5": "2Um746zE4gUYHA6bmKpK26PD7Bk2pdwdiDrPv6tKZ7HaPv19iT9DMccekrWBPtaaPLwvBHzHXc564TLF6GJb1SR5",
  "key6": "5kdy91PFHETJQmxBvxkWFfs7yr7jHcr9BW4pPhTn1RuLnQUHULEWsASrCbQr6L2vhnnbeH2Jx127iDoWCHsroNnU",
  "key7": "4n8yecBmWnTsWojCue16pdjJ2UG4d1wL5E2DVtEb3GB7YcYGb6riRrHufznThUK1RGR8ZfdaPsn1zXXcxAAajDsJ",
  "key8": "3kS5QFTkxBUbsE947nXzaQFQgue3w3U39CbTMMBR8siAhDCQ3Wa7Lye2WLUMqXPNp1TEAbvw9toyh23aJ5zmCNTi",
  "key9": "4SgchcL6MAS7kNMsgKUG3QfgRA17muqawg4vs7VxyLWu4dYstSWoYSXE9m6RRJ6mRknFBmcoht4TAD7nLWGuD3Rt",
  "key10": "3DMXkvQeyZ84ETLZNMBLwF2kaWTSmMaYJSjUNiMCWHTF2JCik9w3pjedUaJ2b3LuPV7AiZneF9Sewy6migNbGNkk",
  "key11": "3Y8Nf723Y3bPFVzrYA19ZZLFPFYUs6jvTAwWt4XDqwvn14JRyDDK9S9gF8xWkzfwFDMR39VSxXJh741SKsxUkqQ8",
  "key12": "2t3YyxcTRHx2raJm9xEoXLFBm2hA84dNyuj82691nx7gqkQoMcEnGtSoSb2Mddnnqh95r9xwoyHhgigmTXjGiibQ",
  "key13": "5LjLL6s4F4n1eTzUezfSHghgZEeVjB7uE9ivj4p2UmQ9FUCg3TDS7zn5FZ6Pd6aSao4U8THFC4XgA8xohXkp4Vb2",
  "key14": "5PrJ2jtcuxfEV7sqG3GNxzcGForw9NXjzjFGV5FLK5Q4UgFgGX1W5qrd7rjwTmL7K2qGT4KkXtD9LsDHadpM4gTp",
  "key15": "22L428MkDmF8HcxvK1V6YBfv8KdqG9oEEFF1zgnCCRYuhDsWvsr4t51wzeM3UXi6T6ASxQVAJexY2umBs9h17qF6",
  "key16": "2HdE15qfi9VQSywqb64KH7YVLm4ZRGYkqhNmgJRhGPFWDBo3XhQoo1ahLW4uxSGoWbNSZxAHXYjpaiZ1CdP6X1fg",
  "key17": "2CR97GBDJcbNnUJUgcfhbcUwA15SUYyUhQjF3AF7CAUNFP6QffF6Jptimcu2vdcAJD8uA9ZL8SEEkdXi3StHnSGg",
  "key18": "2PKp7o9yubmSFQ2nVpqTqXbBs1BJCsny56kXStc9aTZ5vxaysLjFjtFra4csCV3zTuonWEGEY388djZji1taEUzm",
  "key19": "34TzJURia6YgnZqr9nUsJcUhMDUxaUqgUXPJ2qckSwYsCk1DjuEJdu9xrQCo3ZfM41Uvy5JfWkQpdK4FH3zXmyJD",
  "key20": "2awjwPubvvVtVg5NeTFEX2tSXMS68AarcQ81Hcz4kujtF9jXEN9vQAVNdip7Z7c4s45uctDLxzjcqhrgt1YnfJC5",
  "key21": "3N7DVkP444A3h5VwD6y63CFuYJyE2Wc3GFQaSw15zAjCKNDgxqYTSyP4CE2aW12Y557w23NgQ2R7FDTyAifbuQsX",
  "key22": "BhuxanS3jLe6f9Z1epLEm6qcqhymrHJfsNDzwf1mgHiHRabhagjrr7KCVTcBreXbH272GEsdYaGnUpSWDNMYTde",
  "key23": "cPhWTtdudFZ1Ls9NYDJFVufK5EWk8VZRyjtJRtXsfjyN5ESwUSFSw6gZE3V2P5ZiaXC27D7oedGVQW3UedwABMf",
  "key24": "4LjBKQhJTyRFDBDSbX9GV2Fy1SB5RDYi5k4p6gg1BbBVnrBXy973GkfJzAxfk1fpsq9T341nwakTq7u21DbcpK1A",
  "key25": "4HEpGaRUriDmxS5HfGEiMUmL3ioCUBUgZ2fVfDGQrT24bVRTaSJURSZVfj6caki6AToYsV8nhX2XbrH6niSXEvcJ",
  "key26": "4KBczDKHwzLLf1wPmVjkzYnCCH79FEjAmGQgnvfdZCYiX7aUbwRNTscEWmcoQmGkniz7oFJWM5TSJ5EZavmKLQzt",
  "key27": "23yaUSwMS1t3BywRHQJ9J9nnLkdHbFtzVMArZYnu6yDLPGuYPF8nePnjYRNEzGWWe4DdnyxqpCzHqCSFbCF6GT94",
  "key28": "BZE2RMrztnr6UpPimr7fryFwroN9A9t8xooqh6v9HkyTYShCqE6VXcpySxwTiQgHz1wQgugmRsXZyYJPNewC7g5",
  "key29": "4oC6xMYPrhyY2H17aQRUYacsVJTcrz64Fj9ZUAm9FHExdZG2CW8wiNDcAavLgZ1pQfq1zeFRzKM4HTBiGDCYenJQ"
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
