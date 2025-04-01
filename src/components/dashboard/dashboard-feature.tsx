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
    "5FsU5dH3PMEEbD4B71ouPoaBHw9NN3x3b8H1B6j7FDwTYqHHBigqqygHywTk4g33tLJqUgwT4hm9dHKPLcoMM2p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7MGzbPFyneiBtxaxfsEZ49dWXoC1z7EG97MNAN5WCJPgMMboRxUVn2tFtnuBm8KNH27xGA1Juf3rJRbaeEY8Gg",
  "key1": "59az1U1X6kCBWdhJLFJ5VB4K4BadzgTY8WtTTGat7MoCZd3gbFritJ7vVzxqdFiz9suSoiSqKzDyprxVmQgA3PzG",
  "key2": "zuc6m2q8KdjujLffbtTZQYFMo71trictfMcLatH1k6szSbCtyQSn4xb8wZx615XkDzdx93JcmQLCUHbmEffoCSP",
  "key3": "5ztfEuJJhkfAbckUZSy1uBALuErQfmfWtNVxhaD8ZZQDp25bPefznG5AEoyoKigjD4DX3BhyDuhW9hVc9Q74562D",
  "key4": "SKDK7PqNcFxrstrsgaBRKbMcj6ECv8zYjpUff2x1oQ137Et3JMf5fkGHrUYcNVmoFxPW1Rf1RfWvLa7QCZ2gVd3",
  "key5": "4JWt2f13STTP1zWbDHDkEwS7MNkBWG8bhe8qUMkrfZZK2hPEjtnVCiuZGHTordKTWx8MmBRSXZNd9hNwCwH3ctN4",
  "key6": "4E3XwnpcKgdf9mCPgp5eddXUHV4e3haekemXPSDmAdTUBS8nKsCAmE6hfNuRdUttVsJ3Nz6zMsByv1hJ1cc7aXdd",
  "key7": "4qxeHZ3m4Ui66ourfk2Eh7rdCYcWYUhYHpXTJ5iSsvmtfGnKfzuE9g5H8nQoz7qnRbahAmgWS3FzAmFhYtBiWnGc",
  "key8": "3v3Qpt2xx8f84KsivfmjjkETVxd1BHpvBsJa994vJiGd6zGmw5jNPzDQC7pYceRzwYLFqgsZ3AoAEWkGXpX4fSn5",
  "key9": "E186629ztCTMnCEuu9B48rdphJG15yDPDeXBR1Bu58dT64Kh7efvUimcpbDKdpKoQo6vryyiq2rwx1LrKK5gBUW",
  "key10": "33vmGqD9vE2BropJkPDsdcMHPtuHVeQxCQ6XJRik6R341TjDhNkREqjLVNFUMmzoRj7Q1n77SeRC9SUqJuUizxzt",
  "key11": "pTfa7W7PAkcAJnVrFwK6U9oEGFEGGyCYC9vXh4GDrRg323kR3jZWCfE4hX7xwM7NxGojdwCmLpgNZamnq8JsJzW",
  "key12": "4pwCRcNG8QpefXVkqP77HmDqszePdoLD8mbchZC8sxU87W4EHULb2i6TYwue9uZP1hR9BTM7H1CYEZMucLLaLJWH",
  "key13": "4v4TS4EpBkQybseLALuZjKLZrSvCumoDKpJGHGGVphdHp4BAtdGX77KTEo4qrY9H6sHy6sSxKm751ARPnpHkw5GW",
  "key14": "3H3CHkUJ7nSCWPkLJ4D3TpyWEzL4xqmSkTAQdJ4Rr2f2jySWLfTrKabyEf1n5R4deFmayVE5WH4KvcvCD4hM2NrC",
  "key15": "3bGUvQoX8LZ8tZ3qC4moHMyRTo3vWFdLmLPZM1eXHU6woKwCTbJxszKG553FvJ9XvVKzuDMgRdUNA31snniHdDoM",
  "key16": "2V9FwU43eBeaqgSD1imTD6bRPGQnj4dhMX2TtznrLrHDNMb2zEKPqSD4ZwcP2irmR3Ns1V7N2oNbMJeHP32gDPti",
  "key17": "64UFFX13ddwVvyS2ecbyjbU8iRxGD64S6icAwYLLnEwpoZEK2n4f6mKZMu4LvK4HqpUijFGmXPPPk3YZcRKkhawA",
  "key18": "5DMWDTL3ZE7m81ofv3Q7HcB9K7TPWDUXiX7PsvU3uFJQQ9tC9RcGh19eVkd4cwruPPX3PZUT13U31uebAsB6joej",
  "key19": "PHFkju3EtNWZAYSKXq1N7NiRkaheJXCTCsauWY3kERcsQAxZpX7iarm7ms9b3SvM5gXsZESXwziSqpUhy6q2Vr9",
  "key20": "5Vux2DzM9hC7XYZMuZR3XWvjPwtmHMg18f1YWjgmempUJwHCNniQ5hvbjpmbSLEKCK2Kj7AU7NjyiojL1R1TecUu",
  "key21": "eQcvETHjF1DD8j53xUE7qQtJU9eXSaRLdSEe922Y1RAeucbmCjjJMrT6upZN8k3ztKiB1pUqNrwdC2CsoCZXYQw",
  "key22": "2wQTyHZVCDRbr1A3xU5MmYSK3sp8QVLdeLaEjeGs7ZATJeRNy8VRUvTE9j1bEztD36xdKMx87dZ2pTKvQSB8bfwf",
  "key23": "57AdMjMzZtSYCBuRcLxgSTD8trZmBwqEp1dgm11E2r2rCbZaA4pcKwMtmQh7CRkAjQzk93csQJ8ruCGAmahKT5DV",
  "key24": "5sG1YPQSeTN4rX1F5RHAXUwtvpmgKDYQMHiV1iG5pxZUnKYrwPchToUBTn7R8dLpS3toe9VSHkMP7uxTUUn57p7D",
  "key25": "PNh6sAUMUcmvtby9829cCPpMXFmkozPfbgobho9ervh3GMtWLyda9FZLcAmnrdZtU94saqosnRCdU97odb26H2s",
  "key26": "39RAUZJRnbBHV5qnduHXgoZ1y1eLhorsiPWoi7VxphgxjHj1JWLH2SgFTL8fa8FTcJSo42dSyiZgwsNLVnnp9KJP",
  "key27": "4WmxX8VPFS2QM9w8CpfGbPYghNvaEADaGyebVAHhiTzzDP8GdhJu1UhCD1w21QUJmzjG7TSBDjAvdJqasuDB7Qoh",
  "key28": "63YTm8KyNKdPBYntQMWwPSmThGPrE3gseUCCcKvdLY6BnnR3YafGpYT8vuXDUMhZATgw6xxpGLodnFCVA2DPQGwk",
  "key29": "2ACZboeYYQ3nYrUwsJz2GB6jCDzbUgUCbvxT69Ei141QwA9gs776PTMPgot5FbTvPDwjCx8iA7srEGDHw8V45uUp",
  "key30": "2hYadEsF7vK2cYG5jYUFGFETzrZGZyNcYAzhL7zZL3HXtNk1JutkgkUt3qkvy5gCAjSyH6V59Kdj4Q6q1MV5UaMj",
  "key31": "j52MCFFwrotPbeyKSy7bEEFwjYdXpsq9wMPb1mFc9wCvU4FWbrVJKT94Eqr1aabtLDbKeFwKDNjKESFz2hD3F3o",
  "key32": "5xrHBnUBuxPWgq8QKaxtmesZGcg6ejoxMAhTFGq2xebCsUAr79WWi8Tf8suLGBA4HbY6N6gM1pE6eojvLWaJS6o",
  "key33": "3toSA5psXBeDXnRKKCH75vUN9MbwHechSw1qf7KnMujRTK1CAWtpdAXGCtqQogrQoSPmQtXPv1NsVEBUtq7oQMQP",
  "key34": "G2BbCMh9otG1SxbB6X31TmSJ9bdJSqSkUZhboDTn1yjWcbkapeuv4g1yAhi3xeYNS3ewZ5PDB9U4vEEgP2JY6eN",
  "key35": "3sC5JET5hMSz9hGqpB7F2usjEmN7kdHrRb7SRaiUq3dhiWa6W9qrXnyxnNzPMgvrpiuuyvB8uC3WPaotXyC1a1Ce",
  "key36": "3JmBj9Fb9pWSS4HjY1K6zvFRCfHd1NfD9BMQbGqA5gS9RZ3hGNQhG4238gp7eP7avA5M5TmemAmz5c87ZUFmUrJ3",
  "key37": "NHEsDS4e4uHjbm8nLn6Vq5ZxtKPjF7vz1CHVqVwGSku7cmXjXKViUExvbGHweGncxtGyPtW6JxqTS25DyXcDwwn",
  "key38": "4pncbKVC74bsLtrsXVK6fozECcL5JkzRYbiGKNQB2ttoCEPJDhyPv6tTp2JMBed2s13r8LYZttD3p8D5gU1AsGp",
  "key39": "5T3AVtYyqkrztzC9FYAA8PJuo1XtpvYswLXDtfvVMUngJ2dj9dGEMYrXkjFhrv9drz9DsgcwgGDHjbK4SsdXbrzc",
  "key40": "p8CyvosqKY4y4NbnjLbZncs7aykg3tsuYYfh6QTdwHAGLpTyRskme7LR5dF63nGYSC2q7MvHrKppTPznMDzCd1f",
  "key41": "2TPtRrs1vM26eJQTZLV8S825GGeRduYKhB31DDXENJkVy4wBHpDfmoghBn48EKZ4ctZbU9cNaz9ivfKosuXvdJyg",
  "key42": "3ZvaHherLDmm1euxNDGhNJKCDD9huL3AjRQYQohrnXB5XGcm1ZYac4viVJUDDnwXSVsta1nw7nbMdJNhGuzYzBQq"
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
