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
    "2mXkpcrwtukQy6wVPUwyVP6Rvh5FAEZgab3JYWf1MqG6VRWDxmko6wEtEuBawJwPgYWgGuQhxKiTvC1Sv17jskr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1Zwzmz5FLb3Vyz2XahLcWEWZqPnJyNyBQJNSCaQoPNZSnb4FmLDGhfhBLAyNgqywSRQYfpvxj5Bz9qWzfff8PP",
  "key1": "317zuqR5Bi15exJksGrdg6QTwLCe9aHoKQo5qtbQuszXokD21rNdCEJSbvJfQJ47sAA11trdxg1DEjDGW18YQquK",
  "key2": "x8KmtuNW4Zr5j3bBTLKfYZhmH42N3unhPWRc4M5iTonXcVn6dLR6aSKvQ2duSZ9cR8vRLf5XejohoGhjDTA9FV4",
  "key3": "3Gh9zmybDZ3rv85Ejo23EnoCBRhgjp11MH6Ju3znnfa2pYhZZuxMZGhcfmqp4L52s8EbfWdt59eVa5q3fBMYVHBy",
  "key4": "2mmVt5RcbFF7j8eqCb8L2sYHFC5RbkAGmJP9cWc7pttCDpMRCJTp2gnQtLdRjpEPtmJSse3Ei6PQVunniF7X7YNk",
  "key5": "65ZbP4DXqiRVgMoPqZNiRagRW97DcsKXaSUy899ovup3v1dS54fS2z5dhbq4eWjou4trFJzh2rvhSnvXwQb7tSEb",
  "key6": "32QTd22Tw14kXURUnMrdsVTJAWPDNYFFfnDPGDiUjpHyFzxwZzuhjWEQCEpmV895gsdftVGPCxXPx7Fu5rvq83yL",
  "key7": "2KDpXXaFpT29t8occmLFGEMXUUP7TTriqqUdPFdeUVoQmfHam5v8eX11CJVqmRAuyKXK5DSBG6B3r6dJPue5Tqt8",
  "key8": "3zE8xZRiNMe17cqa5VQkG7FGCJ3e3JPN3LydyHJZ4LZ9eUBBPvqBEstoWoKyHeTXnN8y2TFv66S3L8uqgEsdWhtq",
  "key9": "3QBEmbeeNxN1Fn5St9UVyPpjgTRP8j9Mdw8jSkfsGjV9VeeA9wYXkFNK2vfUtFzYkCxbLfMXEdxqyonS1UDvJeHb",
  "key10": "5TwcUpuWf8oFeHmxnRvs3cmANHZ4pd9HqezsF3DgycYbicHMZna2SfY5Tyv7BF6HhLRvs4ecaNBTZS6dnwfVVLGh",
  "key11": "xghxwCRkntAaqFKbMEGRTUBx9nQ5nfxyZiG2MMhDEVaej3uiMWy8oCqgc2q9CiSEZeAYko3oEJgSshyRmzXFay2",
  "key12": "5kMgfXCtPWzzaUKkBPe5qaKBKfhxbtwddKiAtp6K1LtSNDPgBsK7dfCNhHQyQefpHBjknFX9JJP5u1gvH2bw8Bqf",
  "key13": "3SzSGh7aziNB4wVrgAHF1ahfnhfJx78vQGSvampyz735BFwp9BDeByhtj3JyL5jMrmRfpwaqa7oAhyKvnsoajc9n",
  "key14": "2cJpgkyCYwUzp1rxhWBtxEDP2pVYDJFhWCpukrwhXNAwMNECrCwgX89X7wp2nWkVyiTKQR7Vmkr9r6sbg8d8KNGS",
  "key15": "2ga6P6JwCLv3wzc2vm5jEBvG57gVeqtDSUd5cDeWneEh9M5B7DKH7zEgKJdmhp4GuKHegGWsEgqkmvA374sn43r",
  "key16": "ys4r5xbKnkeYiUYnWWJS2PoDSqnnyC4PsMKEmqDjXkTkrqFjdNPd7TFmAfqnUyhrqUS33eE6pn1e2CWkjCMzQow",
  "key17": "3GYFRbDUY4rtLY1Lz3BV3LYRE5BEWq91YMMY1fpBrQYDojNocb4QR2VJDR84VUrV6QHjD3TP6xfcTSNuzw2iKi8D",
  "key18": "21y8FfavYpmvPnh2MLdZBjoZo7w5FLDMXwQ3QNVBYvTQXEeQW846s5DHzmRBaWgj1qS7vUDxktb3nxWb6HAsShHj",
  "key19": "3KrgKYHnCoVwAUK6aVJGSHDBamjQgpZjwK5T3jQ1zpNUo34nWe4H7SB9SWXMty8pSypB7PhbdDzFD55BGrKpbC5j",
  "key20": "34h4KVArXGmn7DNaeARDK2MPNoEiLhytEQgq5Zsoinz1AxPWnNk1aoQtycuATBHE749gX3ehZxH2aain72xfsNuq",
  "key21": "4dB2FGDksuKipaGbucND4NA6hV4DUg6bzpL7ipy2fNRGcNnz5mKxjZHPhqkfRWaynwR4jqUP8cXGxU8sVhfLWpcE",
  "key22": "4PLq6ZZoByiC4qd1V8W7Tb16p7PBhB9XKT4zmuATm6LF8MFFHd8xGcxcAfcfznq52qVaxPBRWzwEsvg13scdqRCT",
  "key23": "5ftfU17onDTBNEWhroTwbg3CHc3fZwAMcmTE9qgoogvvwicEMswu6Ntmcd5hSLZaudXWxSg1iVAhEVnW3VFYeSTo",
  "key24": "4KrZA3nnzyA1tyZ5EioBsqtqFfbnA45SPQoVHF8V3gMWzP7i3X7HMhdkniVH6ZL7NExNMs7ef28msWD5ETvWHnPv",
  "key25": "3Fwbk42iKfpkZfedvJ71aX5Xb1sS21kv2oe5HmmG3BH3z6LKfzXoJAJ4RBY6kehRXoBYXvdrfp7DgFACAPjzZFaA",
  "key26": "57rRiZNd5SKqTQbJRQDDRSApRYpuiBo7TcJCbY3pe72SZ7RwVX9eK7edpdtVoQTdwGeAQ8kjwvMq4csrxG9ufXN2",
  "key27": "jegtUFDu5c6GR8Z4gLHcbRXD1trMWDdGJvZwqRbvYB3vwPBPsTPpfPnLT6LVrzHvATUKVf1uVF2VXn5VFjdV6xe",
  "key28": "3ASx4fo6A8nN5tuewc2afQcGGJVYG6AMDYt7VC3hkqqipu5Etd5TxZApQbkQpR3sxJcyPqmgfXR7hvTrPJK1mhVF",
  "key29": "NWn3YerrVtkf1S2dSKrjU36QFNRMLEBEaMYYSUjCdx8kwp9P3CoLvYPRJ43PN6MmPuZRU4i3mYy3E7Z2UPkdHti",
  "key30": "3V41wBhfQ9LW1ks7DAfWvicWkaMLMU11j4gDvwr7R6bq772iSaLRpSd7i6euyDj8p3EghZsTS5cprhHMgDu7Q8A9",
  "key31": "4Lmy35UNymyHv5ocCWyjBtgASvdyRv5ZmQuRxepompURqf6n6DuDZB3cCkHSbFKVLusKoaWSrWTadTtzV1MhM6f6",
  "key32": "2RGugt24Kq5NLxMmpQvcmfvkwtxBhd6aA1yg9z2TrYLhDEhUfUMRgswK7wMxUJ27m9xWo6wD2xdCCxH3RhdkT7r3",
  "key33": "4szjDQvF4dsUvzz62QGA6m4QZM78bm3D2CSJ9aB7GFCnPZN1JR9KNrcAsN6zig8wrrc9WsGWSoMtNHs5VUzDLEhY",
  "key34": "2BqEYDa9UtHKwsxSZjSVVSJb8Yi4e8UPiN18uPnyTqzEMjS52AZyvh4jVowPSRXtpjpvAVetBAwjFiEQ7EkbL1oS",
  "key35": "4VTThH9tdPLD8oDJNFAsWKXWD1JnCh3iH8Qf2HQntSL6iuiwPJ8BTTnV4bx8YMiUixSgduhS595LuJA4sGYaUhLH",
  "key36": "3oJAnmbe5bsmFSpHAJi4EwKvXKm5F9SQx79Ja9KPz2F6C6MTqksFs4K5LJw95UXybWpwipQ71UxZMpu7KRvRyL47",
  "key37": "49rsNWZWVHgiJ6VE3GiScbqcwmchGNTHCL12iWWXNTD6iHBWm4Pgqa7QewqCmUcPtzYE55HpivPpUgh83rDZRfFV",
  "key38": "5d5eT4P6uydLo9ZdP74KAwSwDHy8hvUodu6MW7FJyYzdwHDehW4LFJUyVkS8ZgygiZ94y8ogF3VMdbmGaAh5xBZ7",
  "key39": "2m4qf4FiwnFivE6Xok1MbApiZFHGUWfCbZ1KfB38ZLmoEbTWaDw3U6T2hALwUXF6aoz7Nwh8xP4SZ2TAJbtAkFJY",
  "key40": "24ELBUXtBtPtxBgpshU28zAwnowbWibsycycBFvXgnXnooY7zi4iuTjZyfTGqH93FZKcojYmGoLMfZ2wdsrP93bh",
  "key41": "1pabsRA1bSf2VNA2RfJowAjrTuLyg6LrDjysLssTmHQxvJTSskRfyfLwCZJXoNhXL96df5WnVHdT7zahkvoRE2R",
  "key42": "2N6yvF8S3YPvktNRxHrF1F1X5ZXkEnaBCPrB9bvJZnLuVg4ZnzAgxoQoB8EusLDBGWHyRw1DHHuT9ikXAqEjkSuD",
  "key43": "51rNXj3XA1WBcw5j6qW24RJHcUFaw8EL99ajn5k9nWbs5ynZnZoK7EJJ4Wohsur4y7hDhtoowTRwAnaSrsfWkV9H",
  "key44": "5xdgg6AFMyEz4TjJwueWykMdYryY21B5gVHdP3UDRqEN2nsPzU7p53k3f2RRBvmEgBMEjp97bth627v48xLHLXMm",
  "key45": "28vKLfwb9Frc2gw3DkdiPLceqhiHMdjTQFKVzyqkxxAzK7SZ59vMB1ugDBESYmCQyi9QBxidMSb8bZayZnjCAJkL",
  "key46": "jAGBVm8ASxHpm6KGzvHhCPgX8JyYjVnUVgSUNJhmrXyR2YwHReM5kHcTjxjfgR7AHUPJ7NDd3yiWxzTE5tCJhGU"
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
