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
    "2ipsh1VofraUPyA3KXMzA339u9mLP54HAYu2gYD3T7d47AMUDfqv6jQDtE7zu3kyH4KtqaPeZwHKXJQ5XTMZikQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNvEzxbRrUKSXpDtUhhfna9sxFW8wrYNMk79eX8oNVW99pBJbZtanofFzQHqfvjtWtzuvWQbaZYxa3zH3Y1d9vT",
  "key1": "5Qi9WKM3VQKKZbgq2cPC2U2rUUDgF6c2ydJMdxLgyWLtGjSX5LWPJSZoqsGnAuwZF9z3vMKFrmUsS4TPJNaBaWAM",
  "key2": "R7h5Pws7mnCfQxpXVBuxWE2N6KTC2y8cSUJ9oKumkUPJTbGF3SGjNgfhmiGfF1UPRmHBaQreNXoJHgeWm5avLWz",
  "key3": "2rKYazsfu1yT83hTRYBsCrcyb6yapGS9j1xnzASU8MtLXCDFUHkvPa18m8LQWx7QZYjgM4R3wBN998dFj7SEugqY",
  "key4": "5zYeBx2NWyiHNPQnJbmaV4YWydhm2Mw22b2pXUZAz9ASnuH5jAVcAJoGAQM9f4MDKjtagyyehrs3GBG4Qv3PVuxR",
  "key5": "2pUiTySwiFGhAT5TYhxDhUmhic1zmJFWEsEsy5L7fRgrJ5aFEWWgPUZ9CAwg5BbvRUPnknGapDmWeABDhPd31AQG",
  "key6": "5XzvzRwyTgb2js2Z9ssqmYF9UzwYj8XQtqNPC2kXs3z2FF17b2u3kk2U2rLMunh6YaNBhTck5GQTGuNcVzm2WkV2",
  "key7": "3mUooAE8UgXB3mnMQXp2cuA6o4v5JJSzzVsYWjRJ9ME5W4mrj3NcugtBTwCD5c4NrmyvmJ4ff8h8TpjWNeo3suYh",
  "key8": "eYZQX1v4Q6uSMJDgyqXTy3pdjYeyvrnzBgugPq45eEGDL2bPSU5hpA8uFRjU8AGe2rqNRtDysmvcbP77q4kjWFt",
  "key9": "3aNcqjbhvNZNW6MvYodLwXDYjeTHu6oggdhmViKL84tBvVRpcR896k7vucXQfvPcs5WjXr8GLQBEgNkZe57MHoum",
  "key10": "2Yr5tG6DfeRfcYxQMMtjs81gsgeEhcduGodGTJksjNeRxZdGhgm43vwajPH66tj3rh4KYNaJnd5BaVXyvcYFFdiU",
  "key11": "4Yf4LzGsM8rr9ocH6NJztgxX34fY6bTyErovBUya7djcxusr6xNFWzQJuciouB5wfiBUVgv8dAwLdvQvTUVsC8TD",
  "key12": "b6HjbZ6QE61M9zx1q8NqfN4EjtPoL3mzmH59ysQiA8Fj2s2cicc6uGhxV8WH5sBsLgXfcJyTxSNBhMh2okJ1z1k",
  "key13": "2S7X8FkwG9y6rAXjHL1WpYvn467SzAb1QXZ5dStAJkvJeJVkMEh3j5qrp24TvCcfpAM3GHrraM2atMKv8muoLEdM",
  "key14": "mYpkvBSPQsYnS5ek46PktM4fk55CwkSJQW91MLgNK37iAsWMqqj6ouZM5r5Ru8mGj9hguf4JEt5eqXpP9zpYYPe",
  "key15": "5nyeyuJ8F9j5nr7P5n8YnpKXwEYhX9yYXteMnr51GVFCrNXTtPVXVtyQc43t49xXgNx5o9LJuhvwZGbPYjQqkoTh",
  "key16": "67bmEwKc3PQ3KwuguhK4GzmXeDMUYi39UxS94JGhEGxk4xNmbTq5K8Yn7J5bvetmtvt6NYzQDap9P9A6ufhzEvEh",
  "key17": "4uYTYTafTgjAtcU1K42zMWs68CVyGiKXXw7egBmsEwXFPdKKUE8xWzmEzEHs1zHVRRYVmCwofSC17txPRuyKtsGM",
  "key18": "3ZPfGZqpHfcHixYziQFUJ4W6xHBeqPVFhfEPUyYrG882EypYC9sD6DrHbXQ6HPp7dPC3yBPfWdAcTjc9Taf9tcEn",
  "key19": "46sRWavEoqbdsdfjnMteC1Q66ZAVThes2HtkQYt7h9mdkQuTqxJCKvkpVAYiLbD8BKbhRJiHAw2X2Q4A1PctSTTr",
  "key20": "5pDP4wnap2yrbnC1noR9snwqX5PHFNQWM2eUgU37zba7hcrdGcMdMh2EAVhKWRM9btU3ihD9xMqYtNg4cK7gH7Ho",
  "key21": "3UGxZNPwK9jJDhBGf5vnbV51ZV6sJcctZh4XdNLFdaUSGdxdB7A1ZfKrF5yEroNN41gzPqThMUq2G5vum9Hdie9s",
  "key22": "3EWmi7USq1k4qbvFeqQf8pxdvGDeauBjattpF1UrGzHeQ55L7dkVpEkFuD8XKk4NJQEyrRnMxTaa1F6tzY4ZZTbY",
  "key23": "2KZnsarsqzzxt4PYTvbPUo2pzQvbuKcrHgDExVAeSN8YCkGMxogsavV2xuuE963Ea8XBPcwe8i5jNidKCGNGYiyX",
  "key24": "2UHm9A3JreguFDLHApPRJAYPDhUGChZ5p3RxUATs6a8H9o8zczP8d9sXNVBxwiN1HAaKVcCwHfSbAbvQiA86TbH2",
  "key25": "4Xsd2LAn288CSHXPFLjKUvrmFjVrKCfb7vj54C6die86DYE4yJQbokNyjz27qMSqP6uRtiAoRJ9D14y8YLPyj9SS",
  "key26": "3AN3ByS1hVLfej4tgg6nnwNN9HaDuY4JQov9UpdvVEsBPgPXRExxmn6TqA92drxDTgKGYdCgRRd8FyvFDT3cLsyA",
  "key27": "4iqZMHUwMYJk4WBMPSURKsZePYTi6BWQy6MBPMRNhCzUCAP7mwkHHCiyenzBXYSU8Qom8KoNuewW6JCKetRpXqJc",
  "key28": "3hnRfz2QoCFNtSfozC8uLC4qsxzjnyJ5dFTdfX7oMUMZCRkrysadSnhR5tf11DiuPRNoAdPxmyDnWxvDiQym57Pi",
  "key29": "4tEyNwPazvpg4df4qaMq5NfdpuAe2xqXSqmD6ggBXxrpDSKgKdtGDUTY3v5ydhHiAmfYvyrqmqdMKrBzWq1uNyQh",
  "key30": "2cGbKj2j6Aj23GvxHzXSyW3uVEHSbR6DjXDCKzNvdwxcXhhSWpW1r2gpM9JeDzrEaKzCVd1VP6hszbTKTu6mtkkb",
  "key31": "5sJno8uU3mQks8gWGjXYKe9ZvyvrWjLzqDsrP41PfpZyerdiPBCzsVu2eLKmT6mtd9m3KAB7o48vu7dLjBnP63VM",
  "key32": "4ukDRQLxi7FUU7jwPMwHdVKUg7vKPfae2Zzt6adKFwhXBKgnQTo4HHbnw3sPWCBz8gPJtzvRYpm973gcBQkG7FhL",
  "key33": "2SRiPR3APCrpEPsYdfBzJv1bBDVCBBeAAQBS4SBh9Lt6gjKvun8yGzNQswTa49YdWiPaw3WjhTL8PTQCDR5X1Pfd",
  "key34": "3hDDMnE5La5zZHdgLQwzfTrvLVc3yXte54y7mE5J3LLYc63eee96hURkXmA7totirNW15kkbYmZTmnJ7Huzzb4Si",
  "key35": "2CGNKAFpE9FzQcSxCUUYbCbnEEkrMAxXXohd66cbEqJiNdujxXXJtZq7k4XCWun3XUjJUFAaH47xRHCv3vMm1G9t",
  "key36": "vhsEV4QfTu29oKmpHEjq3xWkgMiYmtCPT36rNXBLQ788tJPEhUz7X6iyC9Q1MZgaqLuMZzknur5iCHYMduYDE8m",
  "key37": "F2BxMS52ZZabZWzsRm2eMF7hbjQNZDkXc8GrfPi2XkpSPyUXLM1fDGW5BLXHr4kVjcs2j8R45VwRr2Yz7RfYVMT",
  "key38": "2FoTAsmKvHeaiDniyJKStFUnswPPSXpxsLDyQkWPsGjMZ2gXMpCyBCHuxVxrj37kh4SS7iAuUKTJVdGFpStAfq9G",
  "key39": "2p3QuUYhAX4ogaaxaWKg4JEweBJFEMwUNsjYmWtkmQz18aofWUYQMPrqiuVD7pwUScfstG1ktKhPDPtNCDmz96Nk",
  "key40": "2iMPHtDnb9QfjQMBryvFQ8PFRCGiZxfxQXQChwavx9fDLStCUEHEtjsnZyfTXHWaY1YEcHU95xGpvU1KukWaRbFg",
  "key41": "mLGgT92twp7mLqXj9YoFnqNCggekPpnGbDrLHyNTbgFeSxn2QM5x68iGfHGxQFkoosY8TyRVRgC8ZzsAySUxM8v",
  "key42": "2vGWNDVYwpJVi9mSHsfnn386mNTcWvUVAhY1phmB5jSCSZVxHGp5zNWM6TNVE1gPUxvJaKL63jwTSMWct1uhr8Lj",
  "key43": "GYitEag22Xw4VGWGc5XtMcgYnLs4bbfGL57HT2qT1CyRWSSGa6UbXfyfDQ7ZmFMNxddeh5HXxsxDQ2KUFVBCmiM",
  "key44": "2NxwV1Kt5pKjC8CCrXVJj4b9f6Ks4eJkrLjgs6Ej9ZjrzrLQ8VY6Bm9RTqq66Bdn4XSmdbt8Xo6ZDgGAGNCxHxff"
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
