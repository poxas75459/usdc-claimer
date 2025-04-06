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
    "4La1sezzjkmEqYSY1G8A3GQpvojgcuwN4QNMDcwPjBDh5Be74PZknwv9jNuMyqzM2634FcnhRtxXca9u5JgJBot2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wzQk4ZUZmUzb584C7GxzEWisL7EyrtY9Y3scLurL2FaeAzCSsV9wm92JC3vEqgiZEdJLQHmgGPfsyWWtZGoAYy",
  "key1": "CA2FgHybcW2vcP3n6FPTAn2EfHoytqtDgAizBbmWwdNJk55PtzPJVumnjdeiwMPD12VzQZtpG5HnaUbbEFSq6F8",
  "key2": "5prLBXvpx76xR1wFpD9N7AeoC1qv2dgBFHSCHXP1Nob7TvcTxpCA1BMuL8Vh3VZd4VRCg18KuXuFJueJfqgoU7S8",
  "key3": "e1kH1U1rnJDXDkTBWH7MwXhaeAJeKyjW2gL22nH34ZZsX6j81byq4h7wgR2MUGdHeAJoErSUSbd5gwxqtV2oVWg",
  "key4": "2Gpz1VLiCN2cia1syknaepLhUjNTrX2B7LaNmbhWTyKyE7b7DW5FZELgZxWj4pePMkrnirtqmUbvKrzPdaAxhKtw",
  "key5": "3SRfEUc6s6Lj9D4Hvr3MejrKZ8tZvLL3HXtAbvCz13Uaujjig9dQLNNq98TQA3CJcydhvff9aVhs4kXnKMx8xeth",
  "key6": "527h9KeCsGr8VG6tvzP1YfStRDVU1iZSZb2dfKs5rSjAyNe4TL4ANGr4vgh2iUopBdz4kNFqkk3o48Zzik3ZY4nm",
  "key7": "5TTh4XTqRE5E5w32ErCGPTcUB3Lxz2MaTHBu4jGB4BBgEv2GdRJRkXkVvgV7wePdw9raQJntyZpRsnKkP55zKsX7",
  "key8": "uAdPBdAnY1biNLspYvmvEXmPeGLXDC7nhVwNgF4YK8TnjBrqRehi8yQF7J94rKtuPWbsVRWemuvfYpPtBTEUfv7",
  "key9": "5HWMXS8cymPTJZojHZEXJu9PMSCirVyJYpsc6mdSFH4QggkvnFGMcjybaj46wTN1b9qe997pU1RC2JYubzPgcM24",
  "key10": "5aFqpHXHdpzPanpv1Hnmo8KNvg9ED5ycsfxvs9TKNA5p1LbVEX8w1MFitcVm7C5DraikXwSkmZXUP1B96WKPQxb6",
  "key11": "Qzb4PYDEtnuh2vv4EuiweC4rBEw3C1c7Zgfp25qa2LHBKE3p9DRWyasQTe1xpG4EuAMdSycGR1zEv16GZc9S7Ro",
  "key12": "4EQTD5KYh8aS8F4r4n8noy9HN4U59qmWhudstXpHMNR5BxYhs3BTQymvEbHgobk1rhBA5UVtwcsV2XRCXuGxbrCx",
  "key13": "2VwT93ZmS78CVSAgJRHrmft76NHxTwVrAKsd6Az574bjRFsEaU2ffyVibTmGhUiPB9esvpnYqH2bHnQzAargabCd",
  "key14": "5uYw2eG8j8fdEtggExdW2fsjxGUerg5Bjsyi4g5JQvGXL6JDSg5C7NriRqqouFCFqahR3x1txaMwYNXgemvCJKvr",
  "key15": "42GGEjCAXzhNgNAXxYAXYe8ZEMmyM6sQWcKAdTPzFf61cdqjwW9TcNNp26qTKUg9XpNjQJH2iUGj3HX5NCXrSFbh",
  "key16": "3f4bBL2kT553LjpTc2tD1gNvsPYTLtURs2MkFgHrtZqELn1CFRb7UbrkZ1AQxmk515XKoYd1oK7fdsPvG16xdXEY",
  "key17": "wMVMahWVt2jhJAzLQMCYbyECj8xmx7LioRfV17jWnKAu6sHQhURohBkYhiF1ZSCbkxWbLNmzQg7SHtKsZXhXHgf",
  "key18": "5N9mjstoP7XhRjjfBwxPyMvG5UpRJFdX97G2KySzPifLcZ9DNeJ14TL1a8y8PSRpvtzSMRNK65Um96PaaPBCxWfC",
  "key19": "45fvFZskWkQayU5fLam5AbP2hYMx9FqwXsSomWvToUCS7oTNJEz6wwUr12J1AEtFZ3zN9cDuqXx5o6F9bYvJ6zFJ",
  "key20": "5kBmtBtEqMT78tF6LMSKxENwQ44pu5V7uPf2SeWuhAr5AGr1AX1RpULmLuMLErmeQiVNGdiERjFtArbv56yQfgWQ",
  "key21": "2NXrC2uFvraXUSmeUid67occ6zoGNJU9gXEbatprkZpovYVEDxCP3a9WHJPEHge2L4ZrwnPjdMHBiGLViBsKKJJ9",
  "key22": "4aZjx5QqSv8nFf3364qHubms96woG4VF3A8H9qaDL5Dzswayfov2gk4RDzrukuWMLXds8nCFzwAvYvGgQTczwuTM",
  "key23": "42tTgRsdEPQxLYD8F1VvyqmRFTAcL8GQ8hRWivyMbwaDbJS66rW8YLoyhLcQFZkiyw4qUVYmD6mpTiDnh2PyZ2A6",
  "key24": "5iArz9EJDb8dtwA3w9cxifoCp6wMdbKMX9BBpCgBMgYyqVorr2DmY8Z1DkXQw9bvmubnq9G44UDK75E57sAQVBYd",
  "key25": "5phQiJwGeKwwauN4wCzTFYVH4NcEG3xo866WBhyrgdoWfZBBiJCfvCZSVX1Y2WKSdFsMVf9TPCLDYwwGntkSN9Nw",
  "key26": "5wc3FVjuLdcvoLbawRx24R91RaZdatUsztUzRaWiYjiggyGPaxQDwMmro4wi7HnYUmqyQjGcyNJmmBx2noJuTKDR",
  "key27": "48msowmRyR7KsVFXoL5o2YQ4uoWZepdJ4i155To42LXwDfo6vML8114v5JmjJYbuqvNdf6y1rYxzLKh31B442GQD",
  "key28": "2MhjEGhi2ofKUbykNLRK1mbQZG5dVxw7s1BAg6mL2g2QmKVTFFFgxzUFYzSNQMvnGjGQdNjGGR6RZN3vkqSsuSGN",
  "key29": "3UjQuanwXHBKZYy4QLRvUunt4YnBrCo7eefigY5dcUykzrzyLK3UNvcweXQBnhZPu9e6yVMByuwbPUgkJ47iqN52",
  "key30": "c13e17cJWe6v46UtWcznoRiXXPmcqNxn4BtFNnU8jfg5fSuvF41v8VgynpzUNPL8JQwMMNQ28UmkhgZu8CB3huu",
  "key31": "22SB47kxU2JD4fsXb8wxoEHMMVb5madtaatUgbUc1aYXPiEmLNDX2CVz4EbfusUD191jg4dLYYUPB14ogFpgVd2f",
  "key32": "JQ2kCkasckvCSqwxZzgXcYArJHa3f5BwYiW1y5QCACRGJ9ypAvuTJR3akUzPwaA6mahjNt3w5WwJuYxWpT3hcpy",
  "key33": "2CY9ybsBuH9TzDxgBS6xGD29DaxZvixT6836RyyZVBGpQLTjHA2JLExMc3kCTovJCsFzKMbuw5KTcay1jBqAaxoP",
  "key34": "JeY27o3oAL3y1FDesgyHRDY65xrrVmvasCxzEkBJWYJQgfy84YFibx3PwMJaq9ku4YtZoAVZDjQ1i7Qk8SWxi72"
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
