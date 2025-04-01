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
    "3Pe6PPWcVeSecZZ77JPLQLfCRwHW2xdYNe13JBWuup4n32gRNZReXKbg3Hc6WepKGzmNXDag1d7sSYRzBDMsPnjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FedwqoH2L8g8PY5dZgpuuMAvboMR7Hz6CX2uZPyu33YbgHGTQ9bFXBwCXfcvu9jztD11hgBbrcjixm9KEvUbpHw",
  "key1": "3457McBu1gnQiyyu6PLU4FUYyssCnaJZFCUSM54kF5CjKPQHnRffaDd46R4yWrCpTqCBXQeo7rCQooxuy9tB8xQr",
  "key2": "4w2VzPofVn5D7MDX6EdBfAHvkANL4WUhpQ7XFrtoeAxR2UQLgoKUCWekRZxALWTEd1yRfbVVZH4vXwaGrj1nsdGw",
  "key3": "3WNYt6sLuErYzHbmixKk5ZKTcgmVpDZgiKRMVKzYLprWWXKrgoecx8EYbxncbe85aVj7rFrq5b7whm2Z5VrP3CaR",
  "key4": "3t4NZSLnAgYVP5P4UaEy5WN5HYSPk2CbDLVrFFJcbmZX8TAY5rjusHp6TTtq7sGzZeH6xq7EkfzmSgTwqqsPphYt",
  "key5": "2mgrVUGBT686MjeWyFjqPQCYWDB4iawEahF9cWDyQQYphagFjjmJ8VFbNmC2bKj58DVh1dSWNdnzesQmQ4A5LdNw",
  "key6": "3czoopk9VkBC9NdZ5gNuKd8mB6PXuyqbVbPAjVZKRkYwA3dkRd7ffPFsuNayUJvNd39Q4ubDjUCtjuHixFMCzBMF",
  "key7": "2Q9GRywSVwMSwa6GHamzemV4wS3V5tHnFZKdpeqKj8TAv88JJLXxyANwXYSKn2Fs8sYVjycQxevciKMA58NbWsna",
  "key8": "5GqkpoLVZHrTjqZuqRiEfE5Nyod9TMytif2FeibmzgrFuu25eWWf4kiVsR3hjckgij52zX2Y7e2RFTGXF5Loey1r",
  "key9": "TCd52xDMeLryLuhuAbnFcQA3j9M5NC7pQLZBCdrgxRLcqhKyEVGumPWMpb7kTeA5Xw4kt3sWPq4BYyhHRuXUsTU",
  "key10": "3DCsDUkYLcqsdF366opjo7xFJye7gKMFNWQs9qJzVjTL8Cm4fVMs4hSCQEbqppWt6J6cKSwsemV5R9U8JXZEeBfL",
  "key11": "itsLVN3km3PWELysyrFvJn52vnkniefgxLcZGmFaUspothUJTxsisUdJ3WBJqMZALBJPaFa7K33ETi2kB3hyRon",
  "key12": "5x8L6p5jhSHd6WjVe5URreDWWTGWsdMPeakjvjgtEvojt9F45trD5jUNqyGMzrgqq9P6AQYJ1JmSVCa7RkAgwCAk",
  "key13": "461ihVdJoniZwPptozDiPfxSDoftRDPEiGbb8h37Wn2LyoCf3NpzoQqyrWPCq86vzcFtyLexi4L5dCiqkbcLXZ75",
  "key14": "2HhDzzmzEQXbyBoAtYSsNNoCCqsNT6TyTCYVWNe1PEh7LLgkwDWmS75gxQ5QnmKrax5rymAq6GsvJnLgpjHfU9L8",
  "key15": "5JXw9pvorLHWJeMngpmB4TDTrjccNvRWYu8JAdhnMLzKWUuixfkknhcsCXNRsAsVXkDDqoFVsK6DvkWTPrZUmyNj",
  "key16": "3trVSwdAv47jLSvyq9YTYXkKXWoCFkZpLB92xgL5sXv9Eix74dfkCWGTApsjdEWfCUt9zFk1cxxDbRK5JnnGQEWL",
  "key17": "2gyoeQyYKJhiuDnmzHHhApg5FAPLfEm3C2mD14kDH7qKhBZ9Qz8amjKrr8o7U9b58CmH6fNz7xg7Qb2wJeMJSdSX",
  "key18": "2r8XrmaFv1JBEChQp5QXb3uU753YMj4b5P97z36DyRij3GpLXUrPc4rkPSZ3fvxNyFC3kqvsw1f4DnokBkLovbLq",
  "key19": "3ddz6iKU21avcfXNbh56zj7UBJRZkXhWtyHwabZm6g2aDoUMjv2WEWocNoXNdrEp7naFbH6xa2suffZbV5NUaUpY",
  "key20": "482KUGiaY8y7uT8SMDzJFryfxHmrkgaSzTjpnqgZ8fKXAUT9BmQ8unqMjTzdS3Kit9uufwzR3jg5UiVf6Gymb5AU",
  "key21": "5PRM4UtvqY5q2jCSv8n5rXGn6gMxmDtkbDSUQgZyry3mLebWaxnY3uKSbh7WhdC85wYe9x48ieqGd4zEPQ4DzzVv",
  "key22": "2GWKKFCKu8Qgoye8Z9sZbFn33x1gYnQpgwMk9v72QVgk3DfPzjwYi9DKq1C9roVtrjSH44jf2qpn9H1Umpxh9FCu",
  "key23": "4vYZvTgiN2AsqBFofE53WhdYFcErSvMvQua3mNQDk6o3HT2Y9wneBEyfVFnvY6NzMSYggxZXarMR3ya5hdDDmCJF",
  "key24": "5uRRjKPocD9T1iLrtuhUZnvkKKy1LbXzDR5Dg6UmHpRNQopqpxq3A1GPXpoU2nzjjYAwaxpTRcMmtuQRJeUbi55u",
  "key25": "5bGroKUFSVuQAuLMe28Jjba49DMBmJ8QhmW2th9LwZehBEwYXsjrwaTfyk4L5nyKmgkMCHQ6NcgPVhuMKQkSnYyz",
  "key26": "2pb2ZMwWqKWJTMSBdzyiYKGSpSmnXGkRw8oSXzneWAymuS1VCJwV5s9ySLGT2ub1aSfKVUQN9c3rtbv28ELVB2RM",
  "key27": "2a1bLN72eBhPbHoyCQ977KQXsQL6epi1jnKKZoRgsKroPXmQUJAGu6A6SYsoLkaQySTYqEPc3zPkaj3n14p3TUnK",
  "key28": "4B4NzoVvkFZ15Q6Az45HJQ3XXFRngu9L594NsvbMD1pCwpAyRkdi33nm1Gt2gJb1hkKdBMXWg8RHZDUXA3f4Gc4X",
  "key29": "ukL3u77UZBFuxLLqL6Cogb5MTcZCuj5BifWL2XHgG2ucf7Dr28p83GjQGgmLkvcW1x2b5vvbEmZKuacmukyVi6n",
  "key30": "2LYV55h5iLDZ1ofddguVocsEPyWQ6VkcZdMguetr9bCnF2Rq9wPKEaL6JeaZeJThLDe6C6UG2BFHcM2kAeNLoVB2",
  "key31": "RjasL9PhUcaJNS8nwfEmd62BNrjFnSFM7zZTGGtTSy5w6gfuxgEs4ZnoNtT4nzReufcSGU4xfr1FBCpLVicuCcN",
  "key32": "as5Z2ysmaeN2T78nQjKkUFTeJ8PG9yHft1XsMRJstnZrJihCE2cvQ2FAgvGJ79W8FodDiya4TCBJAGBWeywQpeg",
  "key33": "5sDZDfADP1KHxymmyUSCmN3brTf2w8xjudbssHq7DpfsWWaJkHgQs3vVhqJ4ZoLGAknfFPPU8vhRLfcoWoq5tZ3w",
  "key34": "49v3NvQe1Avo4QQCDbzp47HNU3aH7d6Zw6HjVz3nbgUSM5kDPEFK42js8Nn7HYdksajZSZYzDshPW2aLx8G7JufY",
  "key35": "3FqFwUrzPTKPdMB8i9sugCz8LP567t5xdtsDuL4EXk32NYwhRRif7uGsDqYBQM7GVH3B2DLWGWqMDra1XfEXNeYX",
  "key36": "XcSZLEm65w6rKqmCHSvUy6sC1xRC5tGN5vwJU9DrZW5MkmC33gDLSUAnbbPgyHykWzYggpPEgeuhv27vgJ8kN2Y",
  "key37": "ng5XbWAi9i3ds7fR9m71tXTzG1gi8YBgYzERLNmk8Tf185kSZUFngDRKZpnU5x7kS1nXL2yN5WRe2x9t41TWkMW",
  "key38": "4gHSxsHXnzcqVG69niVaozCpVqDVeLfWMBFtMCGQoD2KxqtPX3qBVhwhCdxkmMhEYRYfJxpkrH3a4EknCwf9c9Us",
  "key39": "kkKEhwgqSGTpGViw55ZzcDQhfcsn4Ce8WjR4zp4bRcEzS3woKeE7FhT59zfdcCWwDsZjZ27mm1e7AkYDiZwSwF2",
  "key40": "2xoTS5ra2jwuGmz9KYsu3r2ueNrvXADkmYFwdNJsxrPPkFNDys75gN79pSUqxgK4Gdw6wGDtFK7QGt3PjScBAA2j",
  "key41": "CCJY2VDwUkkE6eZqmt8MtiKg98KXPLqK1PQw4JMPZXqW5ymXMdqKXKiE9LNztJPNX1sagtmbXFuyKVvkY6BmAwp",
  "key42": "5H9ZzYKDjhq5xwavLncQLy5cnUprpHtUpkDDy5WoP4kzkBMgwduoM4WEKoFcrTQ3L68ogryojhDxoTCWU7CHXYKv",
  "key43": "3YVbgvEfeHmgYYRuqayPioA67YN6AzqEVEWvNqSHhxrh8TJPwznq9ZCQAN42RzFgqBfeyErTUScTZsLehpDEDDF",
  "key44": "52ExgMGQ4vtEsYSL9cHcuueExHWhTbuHx4LmN3ppf9NjjyksfcKuTvrrLyMPzTih4rpNR6GKcQdqe1hnPAkyKmuT",
  "key45": "2Dm19sUUU7kQ1mqikadqD5YakXu8aH26BLrop8VxAhYnuatphEbinyxr82gRQ7bHye2pXstGdMguui8gcoLe5oeu",
  "key46": "4FFAWJTHoJ1i9FXw467ggZYVuNBqkKJPe5PcpiF6kjZSYm67uMTTNBa9ZiuigrEDocJ4T8G7KPJ9UhmhB2koTtCw"
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
