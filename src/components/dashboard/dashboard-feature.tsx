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
    "3rhUxirVZV7DWii6q8sQEjMWFQtV993FaXWmYKMGhctTFkLdkeZtCtDvYvaj57hTf4KHDJFGrTD2zSKLJVCvdg1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5VSWqF1X6D19XUGR5yn7i6SjFpUnmCT1mUfiUq4dNMZk6Kb5aGUe8SRr8PGeskPotK2bdSNkpdDAFAxMwQrV96",
  "key1": "5LQMwyxrHsMQZ3dMRDEDMVXqwRYfk7Qj5acV7hUtcEmTKrzUdyfRWrZ2rJfYA4uHauURGwahQipuRqSDubed7bo9",
  "key2": "3BiKnHjDQfnjPmM84r1xj316kHok4pA1jbxtRCDmq9uKH76aMNviQNqCkUn6vGZTmowXwxejnNVf2tQreSoBLrK",
  "key3": "CYSqKA55pwpKfWCJFJpSZSz6BVJBk2Fa2hUZuf9aYk9b2jo4YzxopaxE3H8D7hHoxYqr9SNWBQbR21F8JoS3GU9",
  "key4": "4RLXNuD7cxUot2EiMT58RLQeZPQ7tKYMvcGCPEfTkZkyYHajNtCPbcybPhu4TVDzZMkAReKUWLocitVHHjNru5cp",
  "key5": "4UwkFvXM13Ydq7EtEBGDxkEQ2HoWhnKuiwupMUjLi8roi59ZomsqJtmapcR7y5ghnY5fgckYebVtvioy8agKfENQ",
  "key6": "3nDYRJNaYFYezh524BdqqPoNWnNaqUoyC8Faqg8tjmtc8opaQ3No7zUD2fHNVLDSNrPrntew5fzYnHCLDozqD4vM",
  "key7": "SrntS3NXDg1FDrDndNnysvBrjQSgdJtZXr76mA681xifeLuHVTHgLq1CZMNYspgVCQz4cRg7Bd12sXY6WetGfcK",
  "key8": "21E277mhMXWBkRqKAwe7crusRbpuMPfcACCjM8pv9rvcxE67J6DA8y6RjguqZehy75p4k7ttTkxxGUeupqECNfku",
  "key9": "2i6Hc75Ui3eVYFEVegeVQDgS87ivvFaDiqp9hYQXri4ZAoqsfgeCf9B9dJCjtet6XxLjqqQu82c6uGnUmhaHqiio",
  "key10": "5GJgBreSWC2uj7PRPLVjBz4Ccv31468HT98BtJHMhSJPta9g5PtrwD7oJEs8p5SNdPCoeP5AUF3LVdhP5ZpTMsds",
  "key11": "NA1H4zTwPRVzBZMvcwKXTCmYav2cnHM1shLePGbteH1zMxuCUvz3y3EAW9A3kmKhZQkcV8u3jEh8p5NSaMwpyrE",
  "key12": "jjJCWcBFe8GkPR98f4rtNSBGPmxcmKt83zwmzxoMdvdA8auU2uL4t89bvMwGnFRNAiXcZf9rRGjr2ab54NiJPzr",
  "key13": "UDviQjvUbmAjd1EQHCNt3ySGosMLTPzn8pFnBbD5buQk6ianqGuiWgnHLzLdjAbK1eUAxWXFCbS1pGarifF9q2G",
  "key14": "3bJDV8WJ1PqXgjpkurN5ediEFyxKVHjoN2ZopwogHoEsVe7H7qhSgoQjPVbC6WFkFVVbZVd5DpMVAwPG1dgtDEBQ",
  "key15": "3YHDNod9EXhkxxAjatfwSetjus8jUev8tKBJPTnhA216EYLy6UzjkUHvXFRVqJ98yW6U8uhRCpocZYJe2aqo5p94",
  "key16": "3xhK4kgAE1pnjf1e9rhXHsvXdMnSwMo7frhDYDuoqgqbasdhfQJvT7NE7e7BHCqWHZGFTTjSZxWvXD55LM7Km2JU",
  "key17": "4Nw7q257c6kb8yz4gt3KbEvf6UaMYhTVhbmMhjboAknaQdhYzKMZgJKLzu7N41jDGMcocbQDGKTnDVGFtQ4KsZaM",
  "key18": "ChuCqMiotcCiPoCqsMwVVfy8Tuz8rSGTC8anSWdNHe9rVKBYNVcGda6cKLmE6nD99dHrTNEFYs1EFYfVejUjEUJ",
  "key19": "5ckbvT9yFRjznda1yUeKcjMGGdPnZDzw27izLvCXybCD8kD4C6TZTvPsfkMmTmjW9a51wpMXVxdKfNe9HmcuooQZ",
  "key20": "3M66ipBQZ5dngdZKkbZLKeQ3CUQwNeToEEsavDENTu1PvmVqMxNhCvUT8ZysbV7suNzrauK5ZwHtPmNiNyjdkD8j",
  "key21": "498zTT1X8AJ8V8CCHwEWGDGgWF5bbbaZgQy4CML4dKC5d1uoeeRkgWJHZNt3em8ehD8LE5P8MadggwAaMpYjeKet",
  "key22": "2K4FJRhVQcQkq4gDpaztJpgMk55Uchpyx5NvqKwPw9LLP4J63xtFZ8iyC2Q2TaXrZ8DSsidxytritS3Ydp1dLJ8C",
  "key23": "54oK2tEZ5vUZvLcr42jehxepR3WCTk3StBrd2qTDxV4nTVEYDCya9J3Po1XeJBd1YyQDfY5DE1TgcbLe87sxFNdo",
  "key24": "4fFkLe2JjqEmHddZwyxdgLeS8QKb2Dyvc6UGDa41eKQqU6rYMaSZBueLyzwbMhdFFQNH14q1x8ziiDwGAwBeqhGy",
  "key25": "2tcVXw31aFsxToZPzyPTojwdcaE9U2ucgpF5MKQmcyYiDhex1rkPYztokwSVNvnKVTyTGde2SQrTUekcJFMhv2Vw",
  "key26": "36ZAZchdJFmTNJCPHA4fMRKNjpTecuRFEDccx9wVxxjWET5MK1o32FJdn7jtDj8bTCUW5XHEX1vUGwkKmoPPggKU",
  "key27": "4Zzgq2jeuLbJuxcgd1P5fByi3WpsqwWVQaMTbjAFPxPjdJJUED1EDD1KUiMvVHW6Uvbxdgk1zvpxEdhWTzcn5vvW",
  "key28": "4j1K1Wdukg4bVa8uDqsL9RY8YwFbiNn634SEDFYMiNrN2z23qmLvbJPLFz1WPoWThous4jgHYyQiXrjdFgTT6jd1",
  "key29": "2pxszgDj3EECu2FvNYzVBZqeVQsV26WTcfCFrsgU8JLa2jfvUBpny24boZBPbsW9Nr5PsfKxUFw1pnxdfAm9P686",
  "key30": "43GndsxwY6eTQ7hVC16jXQ41mgoNzotLaB7242sEvCvwA9ByfYBs5AcAnYMC579yR4VqYq9hZ8jxbZHveVZt8p6U",
  "key31": "5DyRgaQycFp4n1UhUERw5maNS8PkFqFaTVraZ1jVbLR4uCNEm7SQJvuAkeW4mWPmF8xXQyjRMgwMqkp4gDtXeS1N",
  "key32": "5dX5n9yLYkiTvMT9dx9TzTqaPxXMJnn7ww8UJzfSvV5amUyvk2HZpF9Tr5AAyDwYF7cJgsspg7GmUsZyHcjisSLG",
  "key33": "RorVPYBbeAtbrvs1MKRZJqZ8gMr3zkxsYs1Z3F5QnXcgNtWjjmoLPX1WyR79wrUdfqEVexig2w26jzDxkSgutG4",
  "key34": "3P1ceHiXAA8r9bkiQexLSsBWHcz4w9P7Mc6S8tuRQiXjrdxDowduyBnv7xvj9tKDJhgNnxFcmTK69afXRUkttdYc",
  "key35": "2m9yEP3HjHdgPWhdg6FBVU4tfD3AQtnhCoNHGd5x1fFUf7m5mHTdduY1pXjLyX4jKZLRCAqvJNmskA18rTJhhD4b",
  "key36": "2pFQxJBKP5rHo2DorKrzDRkFLTyLJMAuuttMUYKMX4izerdTKPpBr5YzeASQdrJUhZxrULvyoiH8vvXBoTFzYde3",
  "key37": "5caL54AanKyCUCUwcyRMFE5qYsEoTij2VWqiHnVfUCmRvW5BRVTfpETnJeYqoGMHxmR9GN5K1LrtMQs4irC2DhCb",
  "key38": "2MbfZuyx54GkvCTHRYZj4vnEHZtarjzu221kYqXwMT6unK49D74QdiDRxgcef5wSjfLXmqWQrRqxU5h9JtTdR6Zs",
  "key39": "QcRjqUXkRNcQxuU94bFhD5TK5ojsDwXrFtksAgWRaSb8X24Hz7vQ4CsbuxxgoJCyZsSDbrRPqmQEcBfB5JMMEGG",
  "key40": "4uCrfZq5jGzAuFizFbBvJAN3PXtphbqcUxBwbVXzLSe45PuRQqNYNWbG4yPwjHfZexaPVAfvnsELxKHsHB8Y4aAe",
  "key41": "43f6dUq34RJ93PQqWvXy4zn5VK2L7t28JWcR8S4CequJYiBr8wRSxCXbtsVphiuzjCJMghvs9ZcWUaULRn276r8y",
  "key42": "2znLwV4KwM6N73QVwCL3MFtsFaEhsWKCwQGRWiDopaXDxZoTkbdz5rMiVmE3QVsEX82DpeFj2WAb33Z53EmAPC2E",
  "key43": "5UVhSuDbreDhqirY4LxgjrRjL93WsJgq2MdwdCunQzPRK7AnMTsJ2HLiPwpCxBS48jpbg1PHSFhU78NN1bB7fMds",
  "key44": "QdMXyZ8bdG5AjviP1GKqH6PrJLUZA1DvwcQ98EU2rT5fJpYLFGJ7ptd5p13qpPFWsUfRyqh6hu535sQfYZRZ6n4",
  "key45": "zMLiznGC4dhJoaJ3epsZPJveMh3KJDs6rJqLyF4QLukXJjpTKK2CBdoXAECMXgzSQds1Zp8hrNt4aAztg7biQgt",
  "key46": "3C1TqUL3CJRTYUnaVHeoT1Ubv2qVBWYG5qQ7whvqiMijz4PQ41Bu3Vm4E58V3ex1KNxAcVt7Q9pB9sMdpjbBse7s",
  "key47": "VjyFJPmrGDRAYAFSsVrM8Xwdt5mhJtmGWBX7tfTvZb9NjsQuCQ8zb5UtW74MhPDVwiF72x1qkerBCKBExpAi5HX",
  "key48": "5Dhpb6i2fbWE4HRcRtnphbVtGdZVGHS8HoSynPDRGbLNan2vt1GzKJDj5kGg2kydnxepSfem6iX5nLzTc4PPrdfs",
  "key49": "2PauYMpND4rxmX9gKgaUHmTbfUyQvKANvgvnetLt3ULp4W2vXVrA3i4QuTTnozw2gqeDCBUY2WmsJ1YzDdXnuB8U"
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
