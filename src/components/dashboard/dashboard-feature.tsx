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
    "GQMbR1fU44B3cBHt7JNZuonEZjdgm2XZKSEcdYYAmj52GPhQWUroYxsGuR37ej9GBB5DBwMfWmS7cTbFuN8LL48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMTyYehWXYTrUMa3jmupYqQBNoGfgLK9LJ54EG1BuF78hoCKf55ZUpChavfnkvKL2DCKT2junQKyoPQGzrXSWQQ",
  "key1": "4jVeLzrvDGsNhe2Vogkk2Cjzocoo3bXYqiNhKgNv7SyrAwxjnwFSZD3nugrreKg8VuKJEzvz6DaSboQRESi7KT6Z",
  "key2": "5pFE4dm3RYpuNdtb7FkAboA6a22k1TStSn4CixHYEQNpx2qDnfbXMo9BoPadqskwkcPXQ866HKAs1Zg5r91BeeFf",
  "key3": "2d9zq5ygTEkrZuwhh52ASZBtHe4vxhC66kAnFmnbNNuAKWC94GgAvq7Ez6T4BMVLwniRJKUqcuC5UpZdZpVynrVp",
  "key4": "4V3UAM4CQAxK1tnvanu5q8eWhNTzTC93TDfNCmyUaqvjK26erdPssjEBQ3qFQkBZr3D5xg7fF6wZpx5CyK1fhw48",
  "key5": "2hsFf9xom8eHdW4KcfsyGj8aXacaBNbAwApfmvVcNG5Hm6H6VfBRqiL8kBxF5ASfBkJ2SRP973SbBbeLDDFPMrTo",
  "key6": "2o9EdGThkQS4HiCopMsrPr5wcBBPrRu42v2N2DawtCXcY7C2J2WfNHVHGS5bTkRRLvfrZjMdVaQuKg7sAc9KqiBk",
  "key7": "QTga5jsyvmUoCzi1dozggzNUnWYu6sggtxLuz6Y5riDZKHQ5TMihcKMpQLZkSYAPfjDrcQyXRnLSRthxfF7LbF7",
  "key8": "WWcjmDXzmRN2nx8RCooDqXCxqKno2bqYoH9ehpC7fDSGMgPE9z6opcvFRa7YJntikkt9qgmM9QZKHh37Ros1jEs",
  "key9": "3VQ2b8h6XHMw9xzbRuHbK86HMdSMjHjuZ4KAtNnurVF9q6JkfYxHo2C8FocTS3xWxNx9yRBJ2PW658Kyf4zZ9XS4",
  "key10": "55vsHVNbqeGiFUQRGaLqJB4oPbNGz294eBmvjFW6LswiFqeJ5xJoVAeNd7m5j6sT6j1LBtjVSLq2HqbvfjQiP36p",
  "key11": "2hrNMF1zG2c1uzxteBwz57XTV1Wnmfps85wZpKR5Mn3e3AWWWKyDFB19Z1n2kCmVGUkteYX2KNSAPeVxJDqC5Uia",
  "key12": "U7KCdhJBqAQyoKiqJVmjXZ9nwf7KzMcxLcuMHLiniQXLhdSXq8y8mP2sGf6hig7cNiDwzJMUHLxMrxc8S7NVRmb",
  "key13": "4C7fbDGjWt7HVxULpUb6Q5rh2KTJwyAPZxpuZ3zS6u1t1q5NvyypSL5dsH7gqPrV1XV6BVS1QPCPYGD877gYzuYU",
  "key14": "391pGVD4Z2ZNvv4zyB5SzbXA58Lys9eFEzgCrbQURjXPuL3tvHMQ85rhXKRbe8SHdcUQKZeX6w8HQ8VFJbQue3WS",
  "key15": "2yJNt9YdqkoZ2w5xiDi8yH8WK2vtZSVzpBanZDQRRWxHboGL85KePQi8SM8embZeRRbS6noZH5xDpPierkvceye8",
  "key16": "3LimFXSdcqwLZFmRyVKPwUzW6utGSWTK195BbhbuDDhLwZ2ZaGCxw7pRBPNqxaPfMLP3TCosbK3PWi1mSgfUGvX",
  "key17": "4Tkc5qmATiidicFmnHFYY58VDfhjEzmagcNq31GnooBnbsqVv2MubkVw682K54rW4QCNJq6JoeLWrcRWsg4DQ226",
  "key18": "5x3nWtfk1bgfdtrvycRNHTcubyqxa9Mx9MrrBpVJMByZa9WXX72y8skxXEAjqcVU1Jfh3PH7PFWqsLS6jHZLeF3X",
  "key19": "2x7hdDKkMMHJwdHYJceiAtiQpcuipcG9J88HRud1TkjuZ3hahnca4WNcgkTTGopp99PcY7Svb8Q3uEYpe8XiLN8z",
  "key20": "2E7W2fUMuadYAbvE3F3ztYjiAVvyAceievgWttTUoRcW3ETUDSqEauBMJpyWZRwY9WVMvPNhULceHDXkFoC7FUsH",
  "key21": "4CGhipdHzcdKqm1YvBiXRL1rG8VPPAhgi79VN1aqA3gAk1yZDwW9Nj5FFd8gfyAUG2sg2pYq31uW5TRd835DJ62N",
  "key22": "3EjqE3knRnmSmH33fVgLrv2rLZoH2qxccfgByynWHCxCP4sqrVKCRKSquZEeVXMdvZv4n5qWD2bhwFokSUu9RtMk",
  "key23": "5NnaYXrRKNCxJufcSfnY7vaNt2oqSptMhP9tSkQHPQQYkmA88qpEpixu1jQ5U22ykAscBrEC4iaMMQM5uEsVYEoV",
  "key24": "4HQmJvhiTCW6wXR74MwACpEr6cczFY5cSGXhNEbSfRtc7aDmRL56yBCSCJBvBXCcKdBVkFF2PA5TjP9GroAmv4BK",
  "key25": "4XhZLLVFUFUXWKuQKozWmv2ok1fhxs9urJqg2UVi7yUJVJygCZkiLt2BeSKWvnbJTQtgyiYUsHJ9U1YZ47NHj2ek",
  "key26": "3XVFhAxRLqNtZko8swRL6jQ6ZfQAvDhDDnAJMpdSmaYJa7q2QM65u4PbELNj7DT8zjL3BfuFRy5PJonhtMt67VTt",
  "key27": "3bbbGnR3GvUkafoXNddvwpiuwNrknWc2Mi2qngjr2fVBWp2SYjSQNBafLnGavL42gEhvsMb8yJeGotMiwoeNh5kJ",
  "key28": "x5g5Rd5Nnz9tkb4kze5Xi5iQqrEUJk2nS9RB23VPqj5RnmqEmGtHLYFcdL4nTG1tA23mji3KGSc7jewwEucYst5",
  "key29": "2ioqJt6zbi7CgUvkTkKDHbWGU6LGm9vrKgYgCkYJAGnMQA2GFQaf9kAMRxJHmtS7CHtVccFVYxsnn3bpCJ7ncXaz",
  "key30": "36grBXEA45iMp8KWj9BALA1sp7pJ1T6erHF8giFzGYk7FgbCm3aSGiBfedfcUSxRXyAknpSSACGu35c1wGPXVfGF",
  "key31": "5EbGbUnQUAnYS8JXpSG3E9juWWdxCzJpjbMS8pfBiHbXDxoKtZDN1NLqTW66UJbZovoznSbgh7Ka1csMvkJU9fYK",
  "key32": "31JuhxYFjyDoxSKvS61K6zPLTosNHhWgECqCZtYXxQ5ispg14L72ST4kLp3Gy5wzTDm1kVTcrTWLqBG9iAehUMa3",
  "key33": "2hKxvWD1WXoubrLnLFpqSsTgDCdSdoiAsqCqsADuMySpk5NcCQ7ZYWU54BqM9iGwwhyKGunkgCBZvX8oEDRYzLEj",
  "key34": "3YmwVfgRwZnjESDgt6npq7paCGoPW9smvKcUYsL1fnQdjyiWMKQoBw8bkmfsBMvTDHMsu4jV8ZUtEqpmU3w9BZo6",
  "key35": "fCNZTu9SDN7uLtUTX5bye7nvZ3Vi47q6KxDi53VSVZpLknw7kEaaxBvDhPAsGri3ynX7d3dkyxg2isNRaQQLhy9"
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
