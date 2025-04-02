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
    "63kKokmAphUdZVzzj6BTmPMXMgvm2oDEdYkS8sFATDNFqZPY4TyYAvcpWK42EWVbJ1PrdZrC2SRmj7ehZzZCf936"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VWsBiT3HaNotR5DbChhodxg99ANy7gy1RpG1kDpk5mic4Yqe8nYbcmqXuuxY6M3LdpQBTBWFtTHS6gocza4qw7",
  "key1": "34v68pgFju2o8b9roQ2kEBs7ViLFsSiXGW8G6Mcb5bZBtffds7xDi97QCYVGsrYp6r37LnMd3sJzvHhP5kgNEiyn",
  "key2": "7CTkVq3RAoe4phoorzhHAbjvqDGp2SCzZUSbjb6oF5BmrXyYWLEkWDzqGTR3v7BpBYRCQdqkMQWxyRQSRpC1nbD",
  "key3": "TMD31HNHfag23v2q29NEBzXH4mUBWShnDB2anZmawQXt9FVEfdfpk3WpYAS1H5U855ypBwXC55QsdwQyPV8dZT7",
  "key4": "5BYxaWKGUhL83oi4YYS73ABfvrV8YtXczhhZsr7fAyNdut1UW2eDYATgNXGJYby4nBBeLPo4XnNd9BeTrBU4iVdB",
  "key5": "2a7oR6UxBmeybhhSRkqbbhFrEbUpN5A7kpf1qjrDXSqMCoTxYpdXdxKz5xk3wfjFot6Gi4GMftxYUhL7whqAhCQC",
  "key6": "sCVAMCaNXxF79xThLeJQwoW2ewAi6FKeUV8o4nCP3gChYoUSCMspWGXnGf5mSzAy7CrbcvRnhWHsRpbfAZayyoc",
  "key7": "41H4bb23LLLXptfdYpD8BoxArNdfGorczczCu6jheLMRUZdAjmAwgcNP71CgG4396wyEtDhDywxaYD8dCCsozhDU",
  "key8": "3SdLJkPrmGN5Qtr2ANHaQ9ye7boyrRjJ6GXsqkKsjXY2k97uto5eVXwFogV8R2wMzno6U8dVWGrAmg5Wg1sDVdqQ",
  "key9": "5MqTomkwnzSb5SH7sESvf9iokgxQhguYFAb54D6EdUmLCVVUR7kAqTh13C6Qgukf1ogaqnktb7CQu5Numddq9aeU",
  "key10": "5j1RTR61REhd4hcSLV3tLqntKbGHk1vkQNGQL3KRra2tmcL9FC1jb92F4JfQ155QUvH1NE2xiJ8s2TfaLWT9orXJ",
  "key11": "iNZEcLtu3NdoSuZwJhSVKUZp8jEnBebRUqZBqYu5rnTzwsqo1CghWddQ6tNdG3nqhCSmw8nescNa2Zar7DNpTqJ",
  "key12": "3hcWLLjAw88ky4GwZPJJmXDKBXv8vDirhuDTNQCT6Cd5wEe72BMC2MG66twnLcgpbrL2mFjNzq6yXffFE6kz3s9R",
  "key13": "9EVWgyuu3qbQ8YDiNatyocAG5boWi1Cpiu5eQ27tvZMZQywvgJjLFtMJvnwTsNf15QuTVNti2zdKphpn6VRXUC8",
  "key14": "2rh5Cyq3qcbQrxqdZwFnEKY38Jn4m961NeYsKPkndCm2xqcVV5ECohgKfoPDDKvVnqqYZTzUvh8gfQSKzCe1qCrh",
  "key15": "59t3F8nbDzajpKJFNEkVR9oVHsbQpiZWCBKUFYDqNoQSpdd2BoDVBdm1PBpGF9KN4BcQcNBgb3LYT7ZUz9k4AfdG",
  "key16": "2Mm9dahK2C4zJyR3jJKur1v1Rbc6PUxr4yc3Fi8JU9tsVd2CkasAaa6cQSQQ3Dah8BK5gmqsgH4R4phnBktp4k8U",
  "key17": "4sRj2MesCvNaJyU4GBwrEiiVWHbgZkYCzPEAtTd6tMmEeDPbsW5MbLn4QihX6x3vJ7bJ2FN8bq45e1UmCCMvMcv9",
  "key18": "2RGuZS5FGWMkMJiJeZuuR55RdTUT9LBAZcyMiGGgv2TnJy9igqTScNyfETsQbooVKMuLuQs73ooRC3XdFeckN87R",
  "key19": "2gFVaVU2hcYtAJGbLcVPEuCQ7umXPc3iMqR2YQBvy1Y3DY5bPJcEphHpkfMczdDDFF6J3yDoZEMR8LEqNcUmJnmG",
  "key20": "2iomKhFKwc9BTUXdzuoYyz66xtN7rGwkxjbotWwMzTrJRgYwMRDaq16smSrPNKV443nWrSdqwbNLew7vFtPbAWPY",
  "key21": "2bg95LbD1tSpmQLWS7dxYjqNHMhaTrw91BGuPcRwhGVifnhteNCGdBywqQv1BwjLmTbZAqzCyBAWDwD3UMvtNSkR",
  "key22": "5S15VkaPgfBocf9D3487zhgtjQD5sRwx1vrLr3LrHLFRD31qqe6uXquGAMMkP8EfSAWKK8V5gKZ6c7gjVvq8BZRr",
  "key23": "X7EocuLWTinY1mkze1mgqXNd8FL1TDARJKovEAbHJRBzV6QhZQEmkHH5WwCgrioE7RzMYM7Be7yNEQpgWzMUcx7",
  "key24": "Go77mNutnG3oVrN1YZAAErVyQLTSQ49sdvUrYdzjWDrzz44jGTYpvnDAWfevW8ZyzFGp6xfMtzC6j7QuxW2m3tJ",
  "key25": "2QALKgS1SWYcTDzJPFTCsdttLqGcXFo6K3Fgk8fVqWDzR2k8YkPK28SbAK5hCQzmhPrdUubPXrp5xj4PJQ1Z4k9N",
  "key26": "3Buaoy6BCuv6R9pTRU7pumtUFYE4PV3dT83mKrodNF5L2JEjsMGAaCUqBPfZ83gKApgccLoeaFEt15izQKtyWEbn",
  "key27": "2qoDniyqgse9MCuLnyg1RjKBNa3Wz1uFw2xyqdHEmDR1qtSiSsTnKhzhXu1AwZ2b4EVk5drJKYf9zRHthWvVFrrq",
  "key28": "2p1xyGvrtJiqDYPnUSDDrg9996pvCXk9jvh5MUsHqfNGc5nsC6WVAGvsiy46fCnzXHyPou13RsqmcTif9Ht5YY7A",
  "key29": "27ZRDVwMJZaYZRjRwdeXpnu4nMxvNArohX2oCi1TXoDWJSsKDEH27d1NMRjSTYNkrNFWBJtcrXe9mwEwfQ7xrc2B",
  "key30": "2EcrJWkGUsrkbNPKPqn5xxUUnrLafuVaBJCSY31tnMmaQdps37zCcHKAa6Dx4bYM5sf4ppwCtwDji1kdJG2GdL4V",
  "key31": "2F5oVeVYayHZ8ibKUw5djLTNUPbLoxpV3VjubBLPvr1uAFDtoAa4m1zjfqPkWjoQpUtnstnUqBeKHZyah6GWvSNK",
  "key32": "4tBtoWaGbRtRvDRXtgTahfV6zvSK9GbrJTo232TcoZfWjrkbfEetAfaar7aVLvCSammW67EByYf5HoipjtjhtCZU",
  "key33": "2nY8NvSaZcJNjYyp7qjVmjfFq6b6oY6x5HZP2jXAXkxkVTYi2Y49vTrPq3fGVB2LKdXP9BcYEhzFY4JNNZBzjPhf",
  "key34": "5cpLzsGPnTfudB3NFinJH7anSkJ6GeBooYvrg1xbRwtqXq5wF3aC6WPzQa1w2Dm8QFYoWsh4Prn8EyTdVav5Tj5f",
  "key35": "utWAKA2QA8nzxn7sqYiW2KcfzhkzPhQ5oyhnPdyChNjvBpx9dh13ocsvuCQR1dZ9hGLSAsNbnzfntFBohoqs9R3",
  "key36": "3S2xJzbpq8hVSPCLHk4mZtjyb9F5KaN3qFtXkJk8AppLgb7CmtrwM1p1YNi9YMjh18P5pJyEbiqseoqaaVsEQusY",
  "key37": "nEwJF39TtjBH44kyBfHTaWCzaWqTGugerFtBg5mG2N4qUkfnsK1DrJo1NUPf3Nc2JZTSmc1FJ3D7Q2AZwJR7sup",
  "key38": "59pH43GVisqMPJiDCjufnNuGDP5S48BYhm7G7N9NK2Yd4PXMEHuSsopeposVqem3zoX2dtQUsgH7fXHoeC7FycaK",
  "key39": "QznGpEJZguyMH6d59DQVndK7ksNSBpAA7bjQqy6MHofTqqzETocbF7ENBhJR2Ty2Y8aq1zwssqDdX33YtPzrFoj",
  "key40": "64ZrvyFCiq6ZkX5bhEQ1on6dxFuuhfZK9KtDPMUiTfgm2s9VEaEz7WZ1gPagBFhLyKyw2PUgj3ppYi8VxAjMFBdr",
  "key41": "3ACtaHyJasosXNoznHwPP5uKAnUkGaKDQdcWED8Ftj1kWmkyDTMrVFsHMdjELvFzpmDPUt9F9jVMQvryyQ2xv6LG",
  "key42": "21LNDbyMLk3CK1paca3iKdK8DV9E2SWVRPpyzMSm2mLwNPP29EVinGbrgk5gWxjKGcef9LzKEGzHvJ9Rqgn65f7k",
  "key43": "2xPV3A4sY5NNzn6bYi3QFwkknVzSdtL838S3sJX59hFUKstaJBMXZEaEANKwH1rrcWxfReg9gWKjRL5dRddFCX7E",
  "key44": "3hUoDAwTtMH2V7JG9Vacjt5e8eAg1gXBUjprZB5PEe3mmNQaptu7cefBp5mVB8ND1HF9FzBTfn5hsczKZMuGuGYy"
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
