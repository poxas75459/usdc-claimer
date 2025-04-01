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
    "31eHJajvWa24ysJ8T6R3N9LyH4CpCQByBuB72ukoVvvbyiMoeZqf8rKJEvpRT39CtUMiJQfWJQxV2AeexcZG85pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4T5MdZ5DB2fH1Rmw2rtUky6MXZjQLrspbLnwvHwS38FifVfqdLiaouUyucbgh1Q3hbqHhPTQM5JLec4Vv1K9T",
  "key1": "4qSgJFvhjgUN6uwhv8EoCG92akUXCneEAWL29u1zyAqUY3EX778iEXn4uPLwrfsbAESdUpnYLeGZtZtHWh1WvBRw",
  "key2": "oGFwZf5Ykfwo5GvvXy2Wf8QPytkyfkgZBMALY9kX8y3nCT8CKRMChzYFKrpGFbB56QvYwwdqirXT5iQsvTbzChs",
  "key3": "4xSpJy6w3ZmyaayvXxmVpidyiKagFqvGc78ou6TUYZXacw6k5HUJw1FuxNkfN2niv3TUT2DJgeaRLYtEE8D7cMXE",
  "key4": "4KPXKL2FN3oJwHMYgeikMc9wsBsu2jansaapnCB7wcKb9NywDv1jvtQAvgcAoHQ5ALDVQxTY4gYPmboPDKSnFThu",
  "key5": "mbgMRNggvPQMnZAj6GcFPMw7xMPLPYJ6DtSVmNyWt98iY6iKHsp3Tk5qGBQY8EBtMcu9e8cPYsyfmCXiQsgWEqa",
  "key6": "3oKWnEPvSPdKxgJm96Gee4f6bwcpVEpNgZUATv3ojRX4JxMz66EozFJX84ryDraABMoLCpQ9eWNd5gmcD8vuGkGQ",
  "key7": "5Qk793PJhJJqd3puRFp5mG71odmtvUdNDTminbzQZRWP1dhnryZDf9vecq2SSVY67s3ZJnmzUiJoRWTaKt6bRzPw",
  "key8": "3YnfuGnm9jciqth5mrb3345AYHzbo9yRSnisgTr5BcDgM1pKXiPR6SDvgBvxMHJy1zBo6sbcfCmAPNictEjtfsps",
  "key9": "4Ay19BNGdPGXywjpuSoukW58LBXAArL2RmJe7S3qpSXYdQZE8f8LY8eSdo8bpgeUbnirwarhe6SexeyxpA3RCXfB",
  "key10": "4kQ7JwFu1dJE772d83jNKqb8TF56wfAceZywmTq6GnMuo9KCF1zBzABJNzfmxs2NJuP92VAp3K7ZXWp8GvZaf46j",
  "key11": "8DDKV95FDJLfUH7aNBzGNAraWDb3RQBdsxP8VXmHuUwk5juvZ8WioDX1jtmTbBnvtxkH1j2PmnymMAeMKEJfcY3",
  "key12": "4brhHXUDYfLjfxJGDY7YHGfr7GJSh5qaw7vgD3FJNwhNQQKwSvXuJzdxFmGiWSmoBRUdnBJoJNXQxsq61k7iMYF5",
  "key13": "7VvefpX4UJBGBYXqUT5aD9Mj9G85hCHGGTKTHGCxuBEj5DBzjP8TorsrDnMUMV2FDMLQtMgVR6DrHQqQ288K3Li",
  "key14": "4fqJRQKBwTpxbMhjwG8yfUvgK2dwmYMfxf52FW9GiDXteGr5hUfdTYThbnxW823Zn8ofHZkUvXbKuuYdkG16qDwF",
  "key15": "372tu9G7ua1VG6iBZWfNqQY7u5K38ydUbPX3k5pqtkReSjhS5RC1NA7iTekfYLgXxu4LrdcXABimaUbREibPCLYP",
  "key16": "rspfYxCBvPgnKz91hRkuF4wY9Wgy9GKsz9HuNPBMjMLNpvyaNp3e8q3PJf8DHCo9VFfo7hF4iQEAfxDecsCzYY3",
  "key17": "2Lw2nQuhC7H9B912PkGqrAetSZ7vX7xcVdci6BXU8nrxncvutHtptHTWGaFnPGTjNPmYWLvgeKZYW18cfnVtM8Ws",
  "key18": "2aZvcuvPfgzibe69mkodFxCBgE7sgj3EMwrmt7xGrtrAgF5gx6DsbspvdbDQBzKgCPR6cHtEdcKsYpCQxosEAHJx",
  "key19": "4JsYp6pr1tFaBLaFGjVRbwDH85DVVTCRKwZFTkKQ1mTukpbA7VHPmeVN6itzgBjybJe5ttMoR7CeidbdG3PrvQd",
  "key20": "GrC7JDomQC1eAXemaqibue3NhZhdmyvLTP13qcde6Zsokx49219Ei4gAFjvdFcN49kz25JrctZAw5yr2b8QXM59",
  "key21": "v6wHmVvXNvx5YYAzrMV7KGnM5nkCPkEewpctturMfAWdZFUUCZzjU37ENTft1Sre9K8zQZkVAwHG7rgG4MMJfvM",
  "key22": "4o8s9jNcUmW3epH5PEBVVu7QrbmWJ2yabTFtvaTGDYtSAxyFvHUoPN6Zd9YHficw9qfKJN3cKTmkTyKhmnGAwKVA",
  "key23": "3LLJopQuJiyp6PYmwMpD8jfMzqpx2d9YBM6Fr3mHDQQaoak782euxvysuGSe7YswtBZZHaN5xHajqbYj76FoSxbj",
  "key24": "5wbDUtL6C8vd7Mewt2sDH6VZN5CMN4dx7WEe9X4aaSMHSeUQkjy5Xs4pQgEfywC3msodfiFyZEhXTAJqEMrF8KdB",
  "key25": "2kyig9DPJEpcPvCoimf39tHvM5a9j8v7KiNs1HTkaQYan5viBEjqKeqkozASxK5CzJRkQZAZ9BDGRi3sx1ZTjgVZ",
  "key26": "3Wy8cyLdEb7kPu33X7nf55eTy94cd9CKXA75jTcRNoPudpW23wG8E6PucCeWQDnTq13i4GJQdPhzzucZUP9kYWKv",
  "key27": "33CvaS5UXXq1H5gsSPNELeMvmLEuvAzDtMW1EnHT2ntpTDUKfBEz838y8HWAyxnPMH672xYc6vCjZMeHSrL5e6fS",
  "key28": "43wrFQXSw6ds7yF5nk8A1rAx5qzPqpSuTZxihpYiYzerHYvGrD7RgMoJJoRyoYXw42NcdeWNAdWFLP7Adoiu6F94",
  "key29": "5u4RQZ7tTn1zt3fT6SmweqQf4P56oCCCNkVQdbpptuqK1eT5SnPYPTAdogabmAk7so2srdKRFjjoyBUH2LsZcaog",
  "key30": "3e5AAv8UgAs3nvGdch5XC5EfuBUigKFzxaMLp1uz4qQSmimiNA6vqzrz4finaTeeuK4VpXYmybSbn9nKHDE89Zfy",
  "key31": "3udUtwHrDhpCPP2DsrP3tX3ij6Wn8UPW5qL9XtAmHKcoS9XSkPWZN2HNQieRciB9mM1gHgpAhEgKoS45B2WwfT7p",
  "key32": "AUVLPYUPQy6HMibgvdrsMJX387zdUo46i5SvPShscqiSo5WuoXjnrWrwvxiN5pc6LhyJoCmt6P9V7JLEh6LSbEp",
  "key33": "5xUjwrhT5L7e8XXX8jQpgo6fL137hy6nyPpf7Dxosc4Ju7fX5Hv3HVYu2DNRYW2D9MBwpJcc81jipBw6Ltz8xUcQ",
  "key34": "2GM4uULoCrZ13NbyrbaRe7NRkyocm7KGZVepAK1cVcRPZoBeSxpHFjMcLvSAAB45jwRXPsoiZdLLMYCo7gCJU5XQ",
  "key35": "onmMtQbRQ9p9jvX43rGgv4a3aJ9MKCFkrJnJoe2uFpu55YhDHxhoYEJ7sGTyym55mfLrUduuiQSVLKhaW1kX1Vs",
  "key36": "2h8QjeTLYj6cAX6YuA1D9gecqaburqhV3gSgJFPyKaLjuh9sDaUTJBN4o1fJsiqGCmgs74QrvbpU3w7d8tkChWxq",
  "key37": "3NU7ZJqXcq3SN7TbLLcc9Q4NLgrNX6n1M4apV7xBQrDMR4beiD8kBdwobp5U2TQFLJjAUJnXeAdr5kteRuzHrxcB",
  "key38": "4MasjrhBaXyaqgsYGSX3okNmrbQ8ZFgnbXULEFN2R53EzLXyTPnfVhiF9MGnVg6UhFcrSfWar1EPR9cRWhV8XHey",
  "key39": "4CqZ6JKYectEGVcfEB1jSTRQRjfLpUbMjiWvPeQXir2456f9WuovUy4gaoPwLLKScQ6nKeuxcZvdQ3v6ofqGaXL8",
  "key40": "4gersXzK5GAYwYiioxFXyZabvRyj2HkpGGzgw4syKEvxpE2kyqyHhPAniftKbpMrZJoyXP84iGErRKNwmL1FJUBs",
  "key41": "addvcFZFj3uGBusDecqDHS2EsQ8dVjyPp48Z9NBVbR5sV5zTtpZ6LscLim54KeA1Xi2ALBKPxUHWowX7AjZbUae",
  "key42": "3rxJSxWKD5nS6zCGzd6TSVVjTonJnisabprxT4jqJddvz3deESPF8wLG2pU1yJwj2Bdp9fCQ8b2pf8nEzKvAxzp6",
  "key43": "D5iZSmfcByuvyvbfvwsK2CcXv9odRFqFsfBU8cSN5WpBwyhrs9K5PpMwE8uxw2kxBacbTuypDPCUoDC1AwXksRj",
  "key44": "2e78Eq2dSdybw3tbWk7MyQsq4Ys2kfApkJvH4ZCWnUosL5ewrXsmfz7zAN7qy1DSsyTyAz2dqoRxSJyERLBEtLqu",
  "key45": "21JZCF6DqmfFsDaNeCdH1u14FGNC3cmB9Q4Bs5trJcKnuF74aB1MUXcG3yqUwHGKhHRw8fko4CqYF7eL8MksJPTs",
  "key46": "Sezk9eMjTou9paeDt3KAUn8AK9AFeadRnkrk2wt9DEdzyBWpRShsdzkRdDCVm7UAUzMt99w82Zu3FnKJkgkNPrd",
  "key47": "4xxcUpMViwwNYeuhyj2VAep9XrVwXfpGDCFUiwrxTvAfGHbJhzwFXzTQLGZZ1AhXXRYBeLd7BjqP8K2Y4vJ3ARp8",
  "key48": "2zeu4yjB46JDj1sp2A43GVzfLWDYj2wrdrAuJ8oGm38TGMbcwnUJN5ZgdEG6Emp86aLNW4dcPcH8ZUnNr7iRAx7u"
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
