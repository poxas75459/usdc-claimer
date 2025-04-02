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
    "ZWo6eZJNruAR2pNttZiYxsvw5EXCDt5UQwMCRDe1NwquwqwSqdawJrc7v8vFiV1tCiqatxjofeR1f4ppmzP3K1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXEm7Aqw7E4dDAhs14jZkrd3NZ1NWxCwpDHJv4zkm3NPcxSXhaMVXBsd5v88qi9KRjcv6FfdcsXiRVLWd6ExPhQ",
  "key1": "5BKMagxKQJQS1vfofwPRzemucDw3vYfaaWzaNj1GknWadWpLMjpzsLNWNYNeSaXwQ5xiuw7hkGyTYFy4qVnhZoFA",
  "key2": "5juGNRjW4gho2X64W9SfhRcU1tGr3j1HK9JRxYP8EMHzge1BCCLaFrbeAt5aMyLGgfqqfJ4QiTi78SEvoghZBub5",
  "key3": "pvVZwhDyB3joqVc4sk44d9XhxSAzexRXPiktooGNYXa5VpytbTT4PWBXXaQELbQrWk3gqGoMjqeomFfSazi7gpF",
  "key4": "5VkSChWX18yXuAQtTqmQ3k75t6wdrjRdu43cB5nevDJ284YXUswzZWiC7jg2kxu1CLGsYbA5f3sVZK3SyraT2bg2",
  "key5": "thRD7A3tk7TVxanKsp7LKfHAnTN99SCXEmHH3Ef8FX9L4MoQd94WdU8WGWnqVZVNYAH2JpeMG1V16BwXd7VdfBH",
  "key6": "4TPRRBuCPVNa1ybNRgm5ZtH4qKKVM4iQeZkCJqLRZ5PDyLPfy1BXQzLRpnAnyZK9oefTwmLHQfkx5aj4LX1ogjWP",
  "key7": "5wYhndjqi8bQdaviERxzy4iaTtsQ5PntBiYgh4RZpsg8yTkwBh9QwhpsibEcsEu9kAdg7hQxBuQ9kA6GpZrtRnLq",
  "key8": "4KzVmmsLZCFqc2ctQ8cT3wnchHfftuNYeJJZJeJQNFmKir5xvDExdsQoxMfFeZJcZvM7nzZ4AF3figc57cDMuZmJ",
  "key9": "4pYMbUpz2qKqJ7EKeRuyA9DuEMh6DNvJ2w8H6EUnSfQvattBm7Ef9P2Bi25rQn7XVomf4tvkhug8PxQsPtJqmeZ1",
  "key10": "5tGVvYzbLnXS7aRppiWSsA1F61dooV3kAdfDxLZhmScrcLXdutE2UrBM175a4Vjv4VBpJjMyze79CaCzpbZKJUzv",
  "key11": "5DCvSgBzuQpM7ULpef9pbo662VeueUU8WGGbYVU4Q5ZXsBZqw72o4CGFGHSCyjfP8PU55XSGmQrHaU4157VX9WHN",
  "key12": "2qZaiRfo7mpdmf6giSGY466of9LBsmuxiqa1zcmeWFjrP5BgYdxfzBbCPRR74QUppw7pA6Urg2e82uLjHGecm2fM",
  "key13": "4guzPkQKVerD5HHzNjy2YtQhTH3xRKUJz7z6Wr3dFXZqU18rZi3P1VWMLaAUg4A31sP4iwM3Pb13zdeqAMBZCFNf",
  "key14": "4jGfzoLJAvmKRrtSZVKRd5dR31tQUfGvJe4wMXQwko9LS2FFmYnPSEv9Docycqmm2v7FiRi8eoGQstfeB9wJexFh",
  "key15": "63V4gG53uScberX6jSfpKddn1Z3dhCKKY6aN5pH5TWTj3J1UFJBHKv35Gf9PizetcVwS17VjNNAPKRZDxhYAtLuq",
  "key16": "wHKyBiEtSMQz5YXbuMdUfXjxX8Lj3L9HJA5ps2mjEvvkKvN9vD4Vg1XRB52c1eWrPF5mMqnR5mmbmDRQD4ED3Mf",
  "key17": "3ygzoqGsvYNNjVuQHJ8cbZ8bAPe8Kt1tAC4J7Q8H2KknSd5J8WD2iixEVuAW3vR43QfXDPhmqt9KtAnk8QGW69GS",
  "key18": "29RXYbLcgpqJt4f2JqqYUZQ1M6iNUqDMfHGckmy2YbaAgUnybDcg33ma9QHHuhKbs2Pfx6LaGrVVFZrmi4DUzQ8i",
  "key19": "4rT1f5rBL4Xit6jMuYTLHPH5w9TbR6LKmgQ6Ni4NuJNBVW42nZ3Y7sESAXS9EyTLFfBL37HB2EA7we2ZMwyeYMjP",
  "key20": "2afvKg5ej1ikjZC9wZe88LRgpsfDXUEXaBMxXNBzQa4r42jdLBPDZQNrYSjovgaJCGKtdfKeLmzPNMWs4t1Yaa9J",
  "key21": "2YdMsNhT2HAjAQR122SbtLVo9ZUxDcujsFHdwf5QGaCkf5gpKKnft6LUsXD6qwLeUC94MDoiGsjQAaFVZSWThNuL",
  "key22": "4oWNmPPjoNr6H5W28ri4iqBvszwsztpyouUTiJQAheWjistTpNrf5WE1ymjQeW4gw1zb71z5rQESf7j1epBcRvvq",
  "key23": "rNqfvzWUtE7YZnwhMd4jT4KYcKKzMpWRKZbGZRWPSaGxLvD4iC6GAHU2uiELCMqXV6LCN8Xqj8mUm6MqLtfjz51",
  "key24": "67JW4ASvHvfEkuWeXTJkfnVT3TvDakJHhYCHrPS31K16LEp9Jxi5WMy7fZJkEGoaAMM4DrkPafwL2FnUYKuMMUNo",
  "key25": "5dVh7Ut1f8ZRskgPryMrhQ3ZWsAnrgVfSQ4fQAG25YvX49RcrDGK4BDsGbNeFNo3ASXWepQs1fgsrnLgfAChrzNs",
  "key26": "5SnEzMscbfeQP1Ne6NeXB5hpkaptx1T54UHeyaQQ1Qn1KxHcig2PtT9BDMAWBc4dkhB29TQqK1CFPCPpxpjL5yLD",
  "key27": "3qv6XGSuqSX1asHZZFZDGCirEtq2VH5DwzdRKJknDwZqKSd2iE7MDLhV44JiZpZT6ePDZqyizPDuf1yJr6pWGueD",
  "key28": "65Be7JWpqbuA8kwZz8Eu7LQSCPMwFD1Px5WchQrgbpZMJtEXFgeKaypmDKPPx937NRMuUrWVzmYAp27gA336EN18",
  "key29": "2RguwpvYCvgHxRnT9WabLE1RwXJYc6ZFCtjkxd4tUBCnA8oPbLmvqk9C3acVFen9GKgPmvRpd3WMni5rFBUUNL9k",
  "key30": "4BLuB9PmuEPYq1tnZxS2rqNbJ3g3Ddj5a3jYULYuanBhKGAHXhStdstLTpjVu1b7mz4jwQSvcZcx3WTgtsXAviFo",
  "key31": "4i3JL1iqd5zJywvZn4aGAXnamxFWj6TfaqjKpxY1cnk5Q4b6fuMmo1J6JYTNSMFwseqmV4N1LJLBLSc7cY9PoDAN",
  "key32": "4Xq6qqwoWu4zKH5bBE7BVkK6rsxKCk832sP6pN2QGSHbXKRuyAZ7rWHN7FFvwrwVqyNJwuPkDgTQrbAnJ8XsGZx4",
  "key33": "4qVD1oZqtPCKvGRdyDiWhphLNBjoEFBk5aR1gy5Xfv5Gp6zdwaf5PpSz5StbNod3qY9brBqy85bSX2crqEpmThyD",
  "key34": "4bSRPjtmqUAbcg2VU9f4K456QH8wknix8krZFgxdkqYMJRShFVUoqSKkx5n756YaVqvNP2VVL7PsTWSPtz7D4JzD",
  "key35": "5ronExEFSmm2TQL7LKPKfwL3jbMrn3ryMYki2ASPVPK4HRpj4kSuXuNeG6U4QDDvNWHdb5SCwFnYnw37MVvcK1G2",
  "key36": "2NXctZMPk8TTWw7BCtvasdv4iy2QgTfzonGJLZB8SojDhCxTN4NaDZPbycLCgBPUsppMqprEANcBQAk5WCkYDxXc",
  "key37": "6DkPwpSrDBz3W6pmJGMSMoLGLxm5hZxFG6YaKCMoM43QCQbgPgtq2T3G4xvrbjnrh8Pyw97FxrBRZkvfDJbAQQw",
  "key38": "37rcgdA4odY3mYAo4TfweVY2LgdLC8sA8wUpuHU9wrRfdQnD5mXwHDQEKfCC8XQV7Fm65ZyUbUs7538MRcAfvpfJ",
  "key39": "2y3SwEjDP5VgNa2dee2QXeRS4tzbN2W8ei3it5jZbfpZdmeXSs4iUpBU2ZBoumRybLpoVb4SymrAhFB2ozxfK9MS",
  "key40": "KCM557CJ8Nximo8fnk2a6TRdCK9wBXPjgjUvnAz6pv94DUvbkhhYuzuKTkajjJSYzZDNX1kDmtp6rZe7ATKPUtK",
  "key41": "2rGD1637DZt3pAMyFzrKRqrjhwDrcTNTA5z5qCqAF8CfGryxuokKjVC6SYkVbwNLF29yaGy1b2EWss1pzxLKrxpg",
  "key42": "41R7uVf7ESSqw94wsobfsXNkQzFAWgqg7jYWGb1g99wVZQWL6X7X1nATwbbGtdNXdu3bb42tucLaC9Xa6bZ4hP4L",
  "key43": "4aaM7hv6UeXPhx4WLS8uw7nh4za7oX4ubCDcgaxCP46ucAaJwRUAVepgUJJPzij7RQ1d5GeacEBqTxaovTL3C4D2",
  "key44": "7Exw5kq4d2LP1jJm6fXguDW7futUAVFbhuMdwmVcd3YS3GJWwicLfq6iZcbqKFXwpuUwKcraKP6LYhprNDtN9ur",
  "key45": "4H76Xg2eSJprKrCsenromXQh91QD9sov6sbFWgLUvLJz6vzdWzG1ReuvoT5GdphU3DEkjnSnzKoGuj1Cs7vgfPEP",
  "key46": "YwPDHJjD8MB7agFdZNtsy45nuUjSf3sYtBKvsTiHqTvrhhbnYg2fFvn1rxLzkVxV81kxRsdypPiGkT2gx3KUmZ1",
  "key47": "34MdhHgeGW4YTA5GASb8Yxuy82jv1AKahBp55rHYV6XFnRzoC1PCpQGUhjqPa89SQLhabsvPnTHBdvBQVEhxvs8x"
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
