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
    "pXQSfZ774cJsnAUcU6TAeeNAFqkNAJAQYRaBkM2iQ8iz4qyBskcn7fud5kBRdAX95sCp1zZ9UByUebXfqH8UKmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPPpvSqhxJLVBTMpFsy6qKfPZYo2aY586RF8B3754E3CihMb7rRtavcbkPEHdfNNdAozt5LgnzkPuDkzpzpwT2m",
  "key1": "5SmhGGw2we6CFzvgD415urJEiF99VMv6X6aA9pQtUVcTfZKKfQy1Ljk96mTxYu832i59Vyk5BuB5QsmyTmmiqQ2b",
  "key2": "57mzihiEDXjNtDMuWUps764xm1swg9MkCPPD2QCrdbdEo4oYCeF1JExeESK6MZ1jyrC6tJmkq5QGdgANpk1FQxuR",
  "key3": "438VSYyVeseoEczBZybx8LYtehw8KcnSpCV3HK88ytUzSGj8nJNg3hbnRF2fVD8a2QtNekX4n2zwDiJngLvGzsQy",
  "key4": "3jxMtjoyPtRqq43cW2VnSUNH454YwkPenecUPtEUkiZ5wK2gP1zXV29HwHjkLeJ4FbLTt2on8rWPprEDbqAPyxn7",
  "key5": "4eLSHVyqFm1pYBt85UzHaUs5G6JdHeZZs6a8jfW9pnxkt81vLWryTrux6gu6E1YfQShRKpNu9KJ47Mr11fv5aD7k",
  "key6": "2priTFFfWexHPmN6TTxjrdVvFykMjSwqGdK8GCqYnKCercuMy5XttMgEu1YytBsw4ZRGFRXbix9zJm6vp8iboj7G",
  "key7": "2Q1oee1CfyTk9Uv81cTx91SnSzNh3E9xKa179zg3PbszYLbV9c992ZsCkFnHt77K9QPxYg3DatKoJtUqM6mZMSKK",
  "key8": "V76EmzeSuMggU2oKqmTRmUWbAFwozeXeAiGPhATeg9TSvDQqB6r2ERTm4S4BeBqyYN4M6nfqT8Lhqc4QUSY9YxD",
  "key9": "3h2iXXaGWnSFpWLDi7VAiEAFcLQoZUcHU3RrowWowGBGdXVfD6K3kckAxHMKawAZJHU5XkbLGBfmhUBxhSo6w1Xz",
  "key10": "5JMRV6BCQU67mSCRvUAwwDaWYoJtM8vpzRLa28rL9yaCLoWzLZ1tWgoHAk1F4baRg7KkdXkmYr5tFPZX133aJyNW",
  "key11": "4EjysA2tFiRV4Eo8vV8ux7oEcPbn6bbJxaMLwCHv8EvXHVS3Xp5niPivsL6EeaNwZgXL1RfDAZ1rdDeKrbbyBdeL",
  "key12": "YB6x5KwPx6BDR6yQXbBtgMEEGfeuJqqXTxwgFXjS5xyXSeg8kV5rx6KJB2QHvVaoJ8AZabRUe4kSajcLkwUvV5F",
  "key13": "7eBGjSf7xwCMEEzfiXXsNFGyyzc1h7DtVakyNvSKWLxmdaQs449CUVnMPwTi23nQ6rehQutxM2irw7Yv1pwJ7B1",
  "key14": "4MWjTnbJYYCtVb1MgPycskuY44UQ2WfsEJkYUBGbgSZbxYaXpYDLNrWshoMDJVUF7uPAKrEiBqxmq3kPhrbtqDxV",
  "key15": "3Kf64yqvcWvoAC6uXM1WN6Qryg8rDoE8SZvLRz6Ta7PQ2kYkiiKbGxj5w2SjSg5YYwAEPACaQyJjrBokmpgBW3oh",
  "key16": "2F6kcEc5vj5hMVzSg7ZDTBvC4QV5ZAk9oXwJMKzGuDu32mYJe78BGXeHvG2jyCrvdWJFS1G5myEDPDLbU7kTG6Rf",
  "key17": "4PRzAVdhgKUPPRyUosSa3uJQqspooXbZNbAsBRFdLHJ8sspfvmAndpSgS5KnKGeAnu4An4aRbi7Ggi75cWhAotes",
  "key18": "4KyDDkRL4FYZHABp75u2wTimRJG4bLbobryzTv3vtnrPgBjBhHkxfLQ4MnhHMsczhjYF7BDyUVLKniqEmQoWaQWw",
  "key19": "2w6CFTBUzdQfpneivQtVRwsVkru2ju2nBQCjEKQEJYnk1THcZ79HZbmursKytaXt9bgJHiyuvc8QHj9aUcWfNpqp",
  "key20": "5aMN5PpAZFTSGQpVf8wMijKxHpMAG5dbn88vXcZ9YJowg5DnU95x3z3oH7yK1ybxQo7SvNDNJxYysqnv3pEeTwon",
  "key21": "4HXdiji8Kvcnmv7eZFnM3DzeNyioPoZrgZzMCksGc8EzgCa4CA4hNZkgjCjvDEVUb1qBndRanDRnZ4HGt3ZpdymL",
  "key22": "VzWnkmcf76q32fi3py8ixuZrH7MzN3JXWV3ds18LkLAV77GXJAD3wthU6B4qt6rw13UaNWKoKHooFpZDy1Fjf4X",
  "key23": "5nkfw2sQVRwT2bRUogcBkh7FuKb8tkcZ2p95KrjXjKjeqicEUo2y8DNh88LmBVZEsQN46SJ6ZsMZYR7iGTjiU5un",
  "key24": "Eux5amdArXnio9Zt5UQ63c6HnQFLHq3rDw37yVkEu6y4huK4Bt2mUzCVdhWqUSVMkAP8pGLfco2UadaSx8qAV8V",
  "key25": "4Ha6oJDmAXXLSK5FcA1uLvELaWjemusdozhwVELrXfNsfoCwtSQVj3og3KWrjxQdy1XKiX7Sbwms9raongxJqnEh",
  "key26": "5YtaqZLPynAa24xmw9cAdtAqtLqppSwVRkHkddMtWGkdXTHo7H3jAQXYjjzuUcfdJY6ymkeKBoxQUNidu4UVqqAt",
  "key27": "3kuS4LERQBBYMvrUfUESQqLcWSw5UpvatRYUNcj9uK3jwH6TbhdLNZjYT6PAW9uG9fRzqomdHxeE1exGP5TW9oQg",
  "key28": "2iwxdZGdMnBSedvX7gkFncJvMp3FRcXepkKytnD35ywMMLpZwxWCAzZtB39LrqwiLfKXY6BPCybCFYKNbVfZJJHw",
  "key29": "4BjrCadugRdn35i6oGbzUofTqh3YmY3idEJgbhCkcU1eMPFgnTZMsiijHjrU9W3tW5T8P7Uv6Rd6WTxfRegdgsgU",
  "key30": "24BzZZkfXmQYwFcavr19F3wrHrnsn2fMePW2qu5wXhhcGwy2KKUxQtbyDXDzudMn8unkRn6gGk3NkkvbNUK3ajWe",
  "key31": "4DTtw9fhrQcgNWJoNaByueMwvHGcxxGEzVyDpGwQtoUS3x8FdiUgjLCLDDMJYdF7p8HnFq2vFUuXwCSpySsMpAjm",
  "key32": "4BsuWaWDWSHX2NVQNRgcYLaxDy4upjfyPhu4URPcw3d1fn5DbCHPVYvMgMgBpjaSGyKtwk3t2BrK9mt6Ts7gYHir",
  "key33": "5M2HKGFpMM8jN31R1tZXjj4p8cBBddFcEXuLMeQNRJWjxazHR3AGsW5KQwahFvytZg34pQUFuMnJ4XzQgynhRxiS",
  "key34": "5VVXNoUzzjUcNQHptEtyoEUAYDF2bZ7yLgD3kciyjLtKaPYMo1cY6Kd3A1FwNuUMNQn5v6wvroqA9x6GujJJyJSA",
  "key35": "2R7ChF2ZRDv11ShT5VcJ6yvEKqXvUCm1wr5DZ6btkFDss3YfdHd88qZPcDHRgamk1eSef1H9wxMrpi6oh7P1kKKg",
  "key36": "5iWwTjeq9UFLkpSsV5pUyVEHsgLDseqHf8fUx4ySWAit9oYe4RMFL3fjXHWX8Zd2pB1Nwwinavcm7FsnCvmbRTEm"
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
