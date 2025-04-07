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
    "83nuyftbetVKNkBbmAUF2yh6nt95eBy1aSBoEXUGRbWMW2scTPb41bHcmZn5nrHsQvVUkbeHtaVd7ZJaaViYmvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQbjG9wQfhCPrSwVMzyJnFYzBqUH42RiqCfeuBTzXvXD8tWXc6CzfQeytns4u1qP2d2eH2qgRd9fKvtbBku1xNY",
  "key1": "3SVbPLMueJcX5gKVrXzEJgXtJpC3DDuU72Y5KwenNEeBNFxdYHDwRbeW77Vx2KQCtFw3czwh6qRS8RUk8ziYEAiN",
  "key2": "biMkbUMtsQ46LojWzx6qWkrg9mdQJSKxZ62KfyhRHKGJtPvs9tpRN3TnoLoWZPLMZxwcHikVugAqvH69qB1wqwe",
  "key3": "4h3g7mXeoMBSCrARyYPDi3iCGRPty9sh7Ddt1MK7F4hERWQV25hsM9xUMjyyQ4d1ejDDPGni6PmGwouo8Nfuu21s",
  "key4": "4Ypsu2CuLC4jsUwANZCVodtfLGAgBoYR5x84ZDwJy5twCFbMPtZ1PhurjUshroWUvv48TK7ZcxVZ7JvF2z8jJfKm",
  "key5": "3msA8y6pp6wYTmU1PBAR3vkghtmM89SBYHSLH2MMqZRHH4ucSmweoYYb6USHDP7PXoDV2gSVME5sLzA6FpGtPCaf",
  "key6": "26Y3Cnrgi3jwjv4WLkuot9M5bYE4xPLBVuWjxtby5JCC2n4NS5ZX1qCMBjKsu1ozK53gT9cVTgrX5LNYzGF1PP6D",
  "key7": "4TpPFMf592eTpNa5G1PZ7rTjYevePS5UFdSC24PPSWDi8G1epuGJAQZJtY3C1bMWw3zMuiBzfGjiXLqg5fAbvzVC",
  "key8": "C5vNN9VPVNb2PFas1k4E3Ssyv92bTSdqMdcQXL7pqxqMC2tWeAeDrK2LHRQGXt62DGeYwGHUnJKmnrdAXvW56wh",
  "key9": "2P5j78dQL9suHujNb6chSEnwRN752v7eJmieVk7LDwj4nXLAbWJnxU2qmSHSEv7Jr8Lakp6FRUBNzv42Ggsg9EJj",
  "key10": "AKnMozimSzuz3uNJ9Ff2KisF4sPKbZqqa4iAQkdhMPJ37hKAVghy4DJQEDVU2AwRbxT8GYvj2BsiQptAS68PJjY",
  "key11": "f1PkiKvvPiCr4d71WScmGcaFoXy3eW477iLGmWdyQQ5atLXJ64GHuDmcYzsVyPBpMnVa1wj4hxHQ2cS7L2LCwc8",
  "key12": "4EftFdBmYvqTkrJc1Rc7hFmcvRCvD9pxzP2ideK6X6x6KNsNG8Cru6KFZs8RLo5Z9pq1aD3jb11ZH6AdkSy6vupS",
  "key13": "3MP3mYjPTKzvwtG5RAP6U3RzG9c8n2f1X5aqzT5LF1cePWqV5gqgwgL5UMZU1qF7gzuiQ5YjtgEtRToR4y4BAf6z",
  "key14": "4oFtCxkvAQdkBwpL3djWMYtUSKZ5jWza9UJMewkCi7x2J7YrcHys4u2grRG7aMFoRv28BJFetsQ7NTkFEecqJH96",
  "key15": "5VTejQxdJ7oQEcDABo1N2HmxZAJeXF6PcgQnbBhZpoHhoJ1mF7vqF9fguS8975dRbc3m5yDeSP14WAstetmdfTj3",
  "key16": "2t8QDF6tGpSJDjfRLiJgPoMM7Huk4q6KnEYvfoeqQ6Qt32o1tkvAc56xc48m3sLzXcRWsTK273quWVyxeNERD3xc",
  "key17": "4adiFy7DEXEBgav63F3fdLLCqm4a2r5iGXPdZtiBER8pD7GqQWNqQuuQRTLZaoyeFyWAttBRatzra2Mu8TAvM9B9",
  "key18": "2M3YcG9tVEihdAeuvxRFjvui6bBaPacribYTW1DaCqnkLft7gocA1VWwhhe6gowFPHx7W8k2KCNDi8LFejnJYYP2",
  "key19": "3dRDx3szW8UoJFRjt8aTUoZUZBx6xzESr91Shb7Da5moYA5ogeDeAaZV3XE5916CWjz2ub7oR7LC93Zh9ufgeB8k",
  "key20": "2wtnaRxwvde9C4nLcQuVUyw1AtYtuaSgHvoeB73unAyB5zoYf2C7dNPrvtvLhxcJ2RUrUsisCvh4z1wjLoBRxNzr",
  "key21": "51ShXqvG7eaFxCmWrqoEitgnKHrMi7nSbvUVJ1zGNfPvY2JyU9fEwCTUcMHRjgWAEcnFQLFvLETkgcEfvYwUBSoZ",
  "key22": "CstqEhbvc6qtyEwALX99LrNbokzQYFofACAvuWUt27ZjrAWeJKm1gBV95AA9Mo95qgBoar8acWqGRGc4ra9gQrc",
  "key23": "NxJwyjjbpvKTsCEjFYwHMmBvv9yFnMszCUCeXgjach2bK873R6uS9iLuC7CG6m96zsbKxyVdQJuVH6ZmtKAbeG3",
  "key24": "3dN4PBKWXzReCTyauZBfZBgF2Ei195TxZMWCL3wA1S3PqfhKjxJjNdxpSh1HkkkNzmq8N5n3K6tNAFrsLC4QobSU",
  "key25": "mQ9zDqEG3QkbkxnMbxKrcdWzAcoe5zuNoDJsdVK54xYJZvNErusxeAssbtSCB7hx2Qj5MDusKkUguZpy2NHZpTN",
  "key26": "4xJHXGbLeJtckuJwtT22FGpbrBXdzyyMntT87sLk7fTuJeFB2o5gExZqv8Ly6RpB5CXhG7wtWr4a4yuF17r7i8Ja",
  "key27": "3zLxyq131AV361M6B3kwCdeNdr7JJThy3otfJrHUXCawBbAFMCAqiUvqLchRgWPY2G6K4ArVtJLgNcbcs5L1mW39",
  "key28": "3AjgBLD8WSiMsvRFeJGdyeWJzf2FrmxBge6hSYMjzLKPskJM7eXFKkJxvFL92BUeAw1Qdntez1yxNhKKnAxKqk5w",
  "key29": "2tJSjvmJVWFo9qny5bEBPVpXeG6qXK9XngN1BiR3pyiTCJ7PYAKszvBZ6Yak5GZXPg2SwN5Papp3Jpq5XMizst9B",
  "key30": "1sJUYguwsdsewjbDH7LDZJxTSXSbz2hnqqd9FjjAqErVcno1d6CRZWVgfREkhPncxafRZCsCMyw9zwPHMExyscb",
  "key31": "5NpD64Uk1YU6xL7C7dLZTKT11vFQBiZMUuTY8hWg5kMGAssyYdNak7xrKU9DN8U8RPgFC65PAVMkqx9upeCUMHn1",
  "key32": "5gcygEtkoPMo6hvtmi8BZchkN4FnHo9vGjRJaDwbSKQyeHqLZvkvamH2qZuDi4GR2ePkyJianA5HA2JPN58G3k7h",
  "key33": "5LQQz8h8SRDoG2VnE9DfjC7Fd6t8AJ1ymnMNZ5hR4gV7Qa1pP48X9v6Lc4UjmeyfZ9z8aYcmoHLpVCqymSLFxHw1",
  "key34": "27c2piXVqqP3Tvt2FpT12J2b8bxQgZWRfpRfbB1HTxVKSKuHAqBST9Xez6Hzz8918Q2q5JGwXozvKDb9z43BKz1h",
  "key35": "2n1Y4RC8BQpBoUs6ZToN4sYzLGAFMpkmpsrtHFjd5Xw5dDT7scoMrgThqpbAEy1zh7snqjjPGs2Nmzq4UAYyXi5A",
  "key36": "4ufJGg3Rc3X3ZGj7kkJXtPM3yBoektm6whhGkndqANSLsimTLeN1psmVqFdL3CCRt3Wr3LFfASRyCtjNf8odPoq6",
  "key37": "5n9QpazmuadUj8nhX8YuXyx8psCQaXDSQjyCJNb4iyYDjxtixqW3kzGfjUQHqKU9dZhLPkHZpbWBrBZjnCe5fn9y",
  "key38": "3Y3abrSjNpwu62yM2r6WEi5BmTJ5pRKo8VPGTRgKTHf1iQQfAfB8yLV79quE3etcMq1To34tXTXr3LmhiFTE3Tuy",
  "key39": "42rue1wE5LqGeHQ5QDwrdX4endPV4Sj3oS53CEaFNnEYy1i85rr4j6BGe9oCMPtpyYkC9pLyQY8iQtHFEpcPgmXF",
  "key40": "RBJuLcLYSaRh8JW5ZQDKXNWSgSCC1zAMKTVuYodgQby8y9Q49eEWb2dN3ziGL11QrZBBbvicxQYsTEpwqHdRudq",
  "key41": "5paeHhrzTizPL4meZu2phmYWUWG5YiyvaYKFoRuEKj8zMURDkpxqh9KtWvTAC1VAHFYpRKzAW9F7sd2RfjyUkULw",
  "key42": "31FhYVkfueH9eKSAWJHcgvrSqBHokjrxEgXvbepqj8XT9FZKCRiHpPQ2kH9FQ2xVtY13Rjb1fnz6g4ETLwNZTcU6",
  "key43": "2p4GxWVTZ36Mw1R9BpTrubZcLjVsVSCALf4KDwmbraAV8cayMZwurirXAgPT1tyxjjtZJzTeaA9CBjPuZUeSse9D",
  "key44": "26z4L3rAebTHbXrg493ktnBVC4wVenmC4qV8WRirJ8T4FuJoidFHeAQDFRgBmRpDgX2FqsTE8CuUuitHpm2xxWpE",
  "key45": "83rSxVfWXCrSR5u9LTz8ydwxWssBrqMhXiXiNpoEyuZH98sMiv2aJ3cCXnyuTgycf6NigsybxTqTXCyHeDuaRbu",
  "key46": "4ieyU5EFobEbFd5hNaayCe89NcHcMJ6ebHsdF4c5wFoqhwJeTJR5GSVKVSv7rvuZrVeKxgjMtxKTU9QSDxaUY9zt",
  "key47": "4LcKbQxtPQ8a6bHjX8xqWEybTjcvxrgToFajC224WM1G5JZ5RBKd3EWERYpaUfCbt7gwhFJ8rktd8S2do5VCpzkP",
  "key48": "2TSXdjZfHwdbveL9appur7iEiC4xLVyCmFWuNuLNaeRwh5oGUgeEPxiqjrjbgkKjhLEbGJd5NTWES1Z3MABWUw1t",
  "key49": "4hooZYqzQPh5BRYtkiB6512wmanRPHqx1qEr19f6wHmGohWkoUeSXJDGACbS7qt9ESscUN2DTso4AGsFiGrukX99"
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
