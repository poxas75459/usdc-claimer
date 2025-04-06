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
    "ZtbgnzwDbKfjX4DqkeAANHyppYUscs9w2tR3T7koXEV37L2KHYnM8EWgkeiVDVjBYWziBdfobTWGiTfq5rCLoJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TACVYicW7u3bbVTjcHZDeweD96D1VDdVi9U2bR4c1tGtso8mViyHArQfZYWKcUj9CgX9n2ixxLRDLHA5JYDgAeX",
  "key1": "497ovZ1PUvKG1HCpfKDuq2D6YsTbtqaJfapMs8JRio7aooh43VCJ5oxRnnWWkfVkkKYD6aMFzvqwE9cCQ1zUXPD2",
  "key2": "7JShFgMb5RFdLNiyzKrWefQn21rpasYj3M4aMTCBg4ARhxpE6ZuNir63Nx4mUNzJXUmjf3DNMfPQ3wssrPobcY1",
  "key3": "KTPmhvtytKgFA1p3jo54aRW97ddAiwcyekwVMZhqdW61zobuDaEqbyL7PNwMLAhkGXERFZNyc2Fc6pHRx7LSrkZ",
  "key4": "3of3jDEMT5dMP6652zFu7ciWAHHywUfrN4AVUJ5VZriBZz8Rts7ihXAbittEtkamKwRtWcqEpHUC9gAZwPkVCz8E",
  "key5": "2pxqHsCiHDHx2dMUfjXAZvFxKbQ475GHUcXAG2LFCGiL7EfEyPHX4iFX2R2qZBxFNxmhLcgL39X1Ham3sLKcxWAb",
  "key6": "5dXSjLEwb26CxZUszATexsz9fzjLxkHczkxruuitVNm9MsfMMgA6JM6hfL4nJD5RJAhdcZPi9AJeSH3x5tnWTM1B",
  "key7": "D2DtYgY6RLuVR3Rbcy7vYKKyaRoJ5nyAtJ4AFb3nWd57drXaB5a79z4YaCYCMjS7ACTFvmSp4CNAaS4cKSTuyyT",
  "key8": "2j6yWHujgzdZJ3E8tzH3atC7qdnZ24u2zC7ANqgqLSzH2GPMwQPfFNysUmhLFysScQbyuZTJYU1YBGdR36BSdpB9",
  "key9": "4Q8cM55g23ymFE935oSz7fJLsMbC3hiq8nVuSLuqoRNg8c4yEZY2AxJ1XBf8j4nSv2buCneMQ5F7kgDvnT92zHds",
  "key10": "4f2KnazaqZtwMuAxKvFFifUHviKEbvwuguQci1BbgWSULzBepa2MPgmYtEkCc2EfVL27baTGpAEiCTjKMXNcAxYe",
  "key11": "3CAxBJNApfed2Y1QLuaZRdbEMQKfHQPH8etm2TqNZrQSi3rKez8bQGJQYGPQVBq8pKgTKDwRHW6ipZVbTk4Em4Fy",
  "key12": "3X4tx5BAYf6Ach2PreX7qEv8p3MWvD7sovRPytwgU1USCU1QLJGDswgCLrv3hJk16rXCyHaw6vP3MLVPJP3nd1a6",
  "key13": "2LLt3yVka26n4hY8TPJx9SHi4j6nEgL32ZZy2gqmsorHdKeuWyGDpRuDNoBqgWKE75twwCufNVHgZRgxtvi43QmX",
  "key14": "4D2QGaJydq7rWZqSe2jD6PQAGpCjGu83QEZJ35Z6doRa2zZpwCnF7wvhP8ezJtM9GVbw3NvZqKSe9BbG4C8EkY8S",
  "key15": "3LnwMmTCFdTw4x7KuPGHyrW3cnsYBC4dPE6qtqq1mHgp6QZaPaD8ZNeuZHYazceE8EQYS7GPCmTMRyj39qA3YWNj",
  "key16": "3MUZzoxWseNQ1nu8RJpskGxKs8HD3JGu5VopR6zcc3wHAXS7mMt8kKBPPSCBV4NjwDGux5twg4AULoPmxf8VFZR5",
  "key17": "L441PTnyNYjAzrfAs7drDiEVzCv5Y4oYdgLRBZTUHX7MZLUEZ4w4gbg4aLGygFjqwLh5GZFCUUiT1CF6uAEpAS4",
  "key18": "B9KFHbsziPn9znvFH5YtddtHZmjBAvpQfGPp79TgWCCMkeNmiWK76YYUJqnUuTNkepKCRCSqX6PGPG72tQrQc1k",
  "key19": "5oh16wykaP9mF6G8Nt4erLUCbdSh88GiPrzR2NhkEP9ZgYUjtnz6kw353YSAxC9WdwfAqqs7k8gxbnuB1Htm28rv",
  "key20": "5GKzjQPCnjuSvmjHiqnzsmv7ivinD5Ph9PUG2t263WjTjM2XEPBnRqBMf2PxZq9H9FKFX8EeAvCesWxmqrzMZVze",
  "key21": "4NYej6sUYQHmkqAghh4PNY52a7RdpGheceNjJ9cGwvkFYqKRJ32FECDEYCNb2Hykrztd6LTQJpMnX91SxLsDNbGr",
  "key22": "87KWm5D72MSrmaAZBv9yQCGawWs5i96FxaFnd6SDNk6oKY8TsALVzRqr8fPZZ4uta1mQxwNTTFcqWMKP5i3Ysri",
  "key23": "5PpQqgUsrbfCPCrZotZE3BJWk6QtSwvvxymZkVoU6NcJzvEtiWdzL6Wy2eZ2qQjc9dmFuj8vY46gN93Fj6T9GdtN",
  "key24": "48CLdWcfMuXkTe88fGHP758sR2Pi7ZEdd2WkZGev72KGseUpL7Jvo8Jur62i2FpJr54cX7aV9rjMGD6sTZpFwa9p",
  "key25": "3RBtYoa17rm95Y8ArPJ34iYA9iTH3dneB816dr6Nz9x3qxBHAcxXcmESXf3uzKm53AzVEy3CATLXYh17gmv45b7y",
  "key26": "3bybu1eCEWs23Zs2zMVshyA5Lih6HNaAxHtDjVys6XLWTp7f4KMdh5iN62spU1FQtsPtds11A72xW12z3KdGTTRx",
  "key27": "2qhLgt1RuGxMw9Rso2uJzYuwoSzebUbqYBDrxTNMfpgUBa1xBtLfeszvx6knaooAGXhvexfbnyrwsHa3UCNHe6u6",
  "key28": "62EdtLoW2YztGuvfntUSdp7PeUnajx8kWQghspHCTjsM41yfTVHuih9Qfp9oMX2XAC6tDTm1NwwhZ5M5prnnbGof",
  "key29": "3ycEjHJLtqQ5MpNem2GkYRrLtDNeGqgxUh6GavxccX84s9dnXRHhqjSamUDbgPoyyrqZNXakzmATNDM7pekTxHAw",
  "key30": "2PY3nT2Z2XSRksisE24Z2eWXtt3bxnEL8LVKt9ir1fyNS7oCPiwEFeGNLeLQa8PigNXLJ8EskSDVn9bPRwjhsqDL",
  "key31": "3oMj1N1HA9grJFudww2SazRZ3CyDV6hBjdG6PizJUfQktmET5hdYLGozkv2DvZxBsY3tejGmmRG2Bf4HUXPovPts",
  "key32": "3xUadCcpZgu4g2ztX9Skv8zrNfH9UoTZtUouMfUgFK8WdbqsCF5HEJsGwTF4nFP6qpi2fE5cLyMxtw3P6xaHddMJ"
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
