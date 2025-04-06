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
    "u29pGXkMGKYJY4HEWDAhCu7XBGLpSQam5QXTcssS3QqobJdieKrTNcBFSytx3RsALKh3brPHTAweCjx1zGz5SCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYBge4qs4z7CohvQ6afFvW7N6Tth6VCDCv3FNZnPGRC6P9XnyHTFXXtf6S7EaqdhZZMjJ4U6NxYNyDVpa5AwTEt",
  "key1": "54KfDCQFTPEERg5xh1vyaisZ4dp4RNcSnKM8inonLrdwKQuVn41QjNxdLZAqq2NDuQNGX6YjFzjY8A3Y3KhLCqzM",
  "key2": "5aMYuyn84nWpDmnEjydm13m9ExyxpTe7aG6bWv3RySph9qXuAGQAX8ytx1XbPVFWhh5L2pXukpASyaDSTmQ6REBf",
  "key3": "3Q7s9hweoMQvmhYhvshKFuQjDnUsNhVyh1qBJBtw8Q2mrdmN72FHY2bSmeX1o1m6atbyBMrFrw7aZY3RFrRgQ4Kt",
  "key4": "4htbeVYNcmZppcW2hP66QrcuCWjTi3uCmkYWYyunizh5esc43UqX1574sSXJ6torVXE76yzdA8UkuZy9wWLFVzUt",
  "key5": "3tvSHeBv7vYwSYhx3HXoEQL1qwNLQNquZsWgqQMbm35F5UosKAVDzqBmXivG4LoiCcvhDfBpt9SM2mPeQGGpNjx4",
  "key6": "3oAw3o8YtmdMaP7WGoVKaSMGcZbS2jbwHiumGwaewskgE25hzHJxTa2arVxtmrbLqUwPcaoUmcEpdwLiEF6xaqbK",
  "key7": "4Z7BGSZMyLitM6Xnv3N8QrPjuxMpgucZWA4Rgaw6a2sfZtE1y7aAwD7fa8TBzsAsGaA99CmqaURYUyNdPeExAwwm",
  "key8": "3roWz62gWKZMYq2GBYNLDbPumgKrR8ANY9gM1paBJJCvsq8Mj5Mbv3Un7pTQNuP1TnamZ43xuuF2yZSe3DcBXkhg",
  "key9": "3nrZRVhV4GBdXwrqcRY3zHr2HAT4kH7PR2bTHuBF79sGDNgCJ6RFFqWi3zY9vidM56xCujjCE4LdVFgKhMLmLui3",
  "key10": "3taDnytR6pTxoyTHxddjts2oms5U11VkJVqZAXaEcxQn1or57mbrNLjSFJZC3VFG85Rpek5j6hFzxZCASXunu3nU",
  "key11": "r9xBaXtmdYrfPLoKMhzy4CUoi8rugAzxXiAmGASuFhpjm3KVPo9eB97iLKXzXyGusX33D66BagEExgfo2utJudr",
  "key12": "4KDVwgdjq3MFWeXHZPUTcdVP7w8HLRFjEAXcCGP2RQh7YLhxW5AaSTR8J9HhijoT29qwARxjXKsdnks7qBuikRRo",
  "key13": "2mcAtzeCF219CWCowDvxY4MqK9KU4RS92ZHrRd72U5VyeD9LsATdJo5knCSHMAgoi1NNpJNnPHqYzaWyuL3CTYgj",
  "key14": "5TK82kYx8GfeT8CGZJrN2X7VfzXgPnSkpWE4EtbNN8DQNfDELGqESBNovvQS6LbRNte3923GXtQRAG6Qo9xCq9cP",
  "key15": "26HPQefav5EkNtVxMmLQFmTfZfYbE2nBcGDBhNyoYaprmarrCLJoe7vMdtG1DMqujDUvAqDdBZYprm5twH2sqkV3",
  "key16": "3PkdXvBE9Jrw7NgV7WkyUMTzPTC1H9rkhhEeTDrrgiE19i4XrhSaJfBuFtYjFz65v4qoDfN7gx8JKdPFbn99TZWb",
  "key17": "4DK6sk1cVympnJUr7a6MQMmP93RX215gce9TeRa8crtdCAs59mSFpUbQKCnX5XcoADdwobkJJ2vCxhVmBJ5Wa5VT",
  "key18": "5UibRGosvCSUTA2sx5SVNWsLBL7s1stTamz3WerBZzo5NuqKvRECvcEarwByjEeGZQmuzfPjgCoGRFV3eqXYLmba",
  "key19": "QDnnXVumxvw8sWB1Df8bT2oXD7xSsJ2sqdjC4n17pSGYHTqYr4M5FFQTGSgaghG7QWtwddNV34UYMwCmpUahoHX",
  "key20": "3aX89CdYpE9gwxGsUhoUS9dEd23SqU52BhGshFrPHaNu4PXVL45DnXJUtkCev1ArdXGJRTcdq2YcRc3nEhXiTfe8",
  "key21": "5FCjjgFVXr7raMbUa4P6yn993FLMkC9yggYz7NheHuZtR5VWamQdJCpe9YuzMXHDbGeU46KpUiiRvbVWH8WWeoFR",
  "key22": "4ALCMQPZ2doVoitugdFaAXuZ9R3j9fCryBMU4PQxfErzwEfpDELBfaj9EHKEbZQNFBFJupEGjqQwyce1KVkcqkNk",
  "key23": "2yhJ5bPcPHZchfB4jSUcxpx4mjgDbipdwvoBhKYbvkuQSe4cVM5pjZypLaQaDNvpCeevfwN7E6fLNwm1qyHS5BBT",
  "key24": "3tbogxLYyJM9xzB85VArKSDh5Sn8ygW6eiFiAzT9sbNsmHPQV7YfKDiGFtpmNzhPeY39CrSkSwNKutbWHZ2hwvGD",
  "key25": "67TPWQUZk1aJqD6MEomvgqwR5nGJCRMSgvPqZvtAQPP1587ZNe69DX7WZbSqDiCuat2G8T2b7VSTrvJZMapXM7BR",
  "key26": "5eYM6SG7qbxgtRuwFfywkdARWKyUwP7TRZ5jTSibDbe2ZxCSxrFUSPSXTwayT92m9a6TsdPJsh7UsAj1SP4vJVwY",
  "key27": "4FAgXx47WMkykJtu58xhfS3CKj84ES7zDTH17djhZkZaWArYzeX3LiVa5pfVuEBr4qyNBM9mc4HoQ1aYyrEUMeiD",
  "key28": "3Z3yQtgDfoZ1EyLUTnimak7WRtXCsKW74ji79UgtzuaTJxrUudRoX6xrs8SRJwXSTUPNRZjX8qAP7K2usUgpMSbh",
  "key29": "2zAuoWsXBP16ZaDXev9qZDefGjxd7unpQKQ7tMv3PGGqxxBk4aL43GBbTDYKMCHrYbcYugCiXPvYBmFbT3dDwQyd"
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
