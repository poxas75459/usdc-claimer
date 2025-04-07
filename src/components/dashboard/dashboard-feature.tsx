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
    "3aKNWgpDuAVqDRbQoNKnZCJXve3y28oTZihwXvraX936Fg6rricnEz9MmabQvP21iRPNQNQWSJTHaCrZXtb689LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66R5F6jSccgTAnjjj1Q9TBbx3KDRp8dyWd2ts9D8atRvyCGPcLoCybuA8v4pUV3Pqq7hmyArchFrcEdyRkXRmxa9",
  "key1": "3m8dccTPSW1vFUMVr9yWTv1yVjcc5wc7qKFixB8QTgvXLM5fsu3dcFtqGAd2mrJfinGSMaGkgu1ekenyVF6k96uB",
  "key2": "vq8gVU9FAMCLi2xor76ZoznHJPsfYpkBcQhw5iMcjnghjSChyiPCHdzagfqSB2Tk5W3yRzNgttyYXVjvsUnXnXQ",
  "key3": "hdD9RbRVW9aB5XW5C2WU9W2Ct9uU9p6kqciC1HaqZQoa7PsQHK7xMoZtuotLsKDo42moyc8z1bfEfCH347nn34k",
  "key4": "23ezwx7hXxaQn3caXE2oSWtK1jkW9RBBs6JP3EWtz3uY9xMWh8ro6TYwPXNdZB9mSPT69Qv11TUHKqugYsyjoun6",
  "key5": "4hZrY1kdChxzUNXQ8DLxGBeNr1o7ExLGFZM2bHj8a9AENphqkstGn5jFpqtEqgvU62rYRx6ZAXsLKxZ2p1Grn2ek",
  "key6": "41NLfdoZDJYPdm7Fcmx7YPhGrdHqtcpxZ6Vgt9XbDViKj5pNcySCebcLLyDRD27B3cSUx7vsupzFLWfCjy3vqK8Q",
  "key7": "5fj1ahRs3uYaWGc6aw2DJ5aARAYg1Ecv8VB4uVoiRbUceHywsGBRsu2UwQn4CQ98kEbQ2Easi6mVxqjjRx5JBH2B",
  "key8": "3h9oTK29199safBxyksZfKzHoyFM4YwMCaLai4qmc7tPpdUHtQvuRtzidqNRUBtSs1jj8MVsQxJh6YZanhh2XdGD",
  "key9": "HPaNjjQZJc1TEWFsvANXFbtgu6iJgQgj2bkazXwudCazpypi2MuQgA7ZDBfb8Gt4B4NeE8dpeLP2SvuzZ6wxE4U",
  "key10": "5ZXQ41KmuM3SahVQ1pBxr9ckLDqJUEBk4RLqDZrJ9zz8VRqNETphvqqLHmxJcLHwgrrpUXJHDmL4Dn2JV3QXacXK",
  "key11": "43yw4EywKCsHMxM2zoFFxZneXhE1DJt5GK8Y9F364crj5aaEkYq34gzhtCBPLZ7kWh5gvKDrvfBctwZFMGS8gHrt",
  "key12": "3p6a7mU5KqQf3nngL39ssoi9hG38CvbLaDCMP5EFpzVWh2NRrjngNrvfGQ1MW7JvynTJHscmLpuqR1JwnrcN6nc6",
  "key13": "5WRCMWy69DMh6yTPgUMrT1cX7cvCpfTRRs6pV7arC1pbK5AKra66BZvakRdxbTS4RukAk8pNu2DY6g3atDyzE22o",
  "key14": "3Y8etA4F9iquqJABLKqC37hmQP7rq99roT22jKqSwbv4SkShfhamzAb2t4zgBAq273MEL5UeXrNjChg5fCuS4mXe",
  "key15": "2jxoSSy1KNgZrTRmeF8wqVjb71PPkgF9VGU2QaJ77GewKZoABpY9z8TREnZozTiEPEDGQABUZMQz9vzpp3kT8xhF",
  "key16": "5y5kCz1b5e5oHU7KJ56sNcgVzQDjj7QyzQGzazsj38CineCMSRyGKMzXVALpbEdG3vfqjQLgzxbtZKs9FPGhbddx",
  "key17": "5yp9LjVyaPQX3RyqKZrpwGLQgJs4BaGJ6Ud3VwTk6UxYdaRgisuTUWXfXgiVm6Hwiom2GpXiR177PeRoMTcKxTvh",
  "key18": "5qXdaFhjUyTUBvLmiRBTRb94eKvEvLePuob85sCZ4B96aKqotvLypSLn9SMruteZZLkH8f9sVM1MpZCquJAiTXTX",
  "key19": "5PpAc9aAAimrZCp8fCihTnzTebJiUKyR5Udxy2gWoZV3fi2WAL4fDVJEYdWkeUi7mbYvS4wWofa4r6Wt3UywuD4o",
  "key20": "3kt6BFK6fCYFsmHoDmdGX7dKjZ2AK2udYhucmUbi8wMXwdSbyjfvTuaUDoQM4d4h3XmF4T9vA4rhCSkHB4TUrqiJ",
  "key21": "3muEsYtFXW5y4kwsM3RmGJdb45KzGqm7UK6CK6nofx8T7KAFCpSMRX5zWc9oqC4XdUXiAfBREbNwbEcsviuBV7B9",
  "key22": "58J6csLGJBDWWs8QZxri1KSBg4AfQY6V67A6dqhuWf7vXmk5ufTPwuHs7SNwGtSFxs7P43GkCgVNnUSftkNF7zvE",
  "key23": "2rkNVrD96PMuABp6mbM272shFHAKvRuMsA9co48qvJdDxnZZnnQrSfyzHCa5BcMAkNHTnh5ELDLUxczGN7wBLgd9",
  "key24": "2hnoxHMS8Pfdn2mySeu5xkb6uE7sMCW72tp8DUk8YYNGv2uD7GrZoEA41icQLHRF8CrtojRaXuvwtF7SgSAjyZqr",
  "key25": "4SjJ5JwskMKmfyXJRxzF2jay1WdSvUnxUcwavWkxT6U3mDrRR141R2eqw9GUWXeZdcev37BxyLfPcHAD4rpZXZvQ",
  "key26": "61Xko3TCoBArhvb1XpFfnqxm5txgHfRBDGx4ZEGnVgkMcrJRQvXKcBfuQ3rMpGiAR7MpA2QBokkCsjR9jo3wDo83",
  "key27": "3D6eDoQeu8seDmfJ2YtMcr7SEPBknyWzHeDkcJcVqWuNszMycPYqw1Dgpp6oFh1Z39s36JYH4AMjZkmmjfoPMbh2",
  "key28": "4jJxzxL9TfZCV3bcyKfAiQQtRPmzuhupnSeyjmANSetE8Hc9eui6EJYcsFYurGe5YmracRqZyg6TVu6fy6vv8c3r",
  "key29": "5cWhn3rUYQNTWb5WJo8PHu1Ex94QvWh7eLx9BYkgVcEFa1sPVLqbiwXE2BFNMGVr8UbxSysYUBWhftiwqYTkuDvo",
  "key30": "3U2MRugnGjeC9HBL5QzKVkt7yFgxsTaDUBRM9Y6HLviyZErdetUGV7hTfN6DaxAXS14P4sq2Jdt1MXcd3Y6sR8Q4",
  "key31": "2WRF5TnsGoMQsQrjrr77zTqMp9FuiUwNJan3m1vrtcyEX6CnfND53AHN8hP4ojm9ejd2GdwZSffhrN6BqUqNVzZa",
  "key32": "2M8sr88cvdEHCU4ohfrniTWezr9AjyA6ivXiCc422jtFgDm1KaiyG252HCNhM8juUvJXPqbX7CcycYnqhVU65QRF",
  "key33": "4ede1vgJJ86fMxFf5id9DQR1axeLsNRGqZbgD5M8G42kStXFLLYrfqnrDUbyJshPcNRj2YC7dABgydGxtnjSNdBo",
  "key34": "uHsni1reVsHPog63XUGcAMH8i4ZthadpLyCcMCvpvRyHeD4ucn9XcnJbG3dFkJ2WACzJ1nvVUWLyXd9QmgG33tv",
  "key35": "3MDPKuEDxfwEaXd6dJ5v3HHg5ykdrWoK3JFD4TRDDjshZjYCZzEPXAhxJ3pQ66R6A85Z1VvrYc7gH7DN1gjTk9vx",
  "key36": "2P2Xu2MFgVG4XmhBpJPjWKjd71SjYpCdsxnJaEmg69WTv6pWMdUnogrUNj3Wqk5vTM8Rp3QxCzGFyypBzdZxeE69",
  "key37": "35qieUvwtXr2MC2T1hMC8XcYkVAtCckESdaHLuDhDtWfWeRE4wELN1Mnf1UnxyxUL8p53oy5eG2b5CtGgMQ1nwis",
  "key38": "V3AQm2MSypcN1NVpKd7RZ5YiWT4Eo94vX3p5JskUsizkTbNpvzXFM2jU5fegDGxGHSbbTGhk9Qe7FaaeM3GeXNa",
  "key39": "WeAAS9vZSaEDg3woognRVyMMaCcmAg7Xm5irBcUmegGmvLCCRKDtTKbkAGX3s4rwgu9Ukoyya7BzcRiCkuoZxUV",
  "key40": "5xQq59dnCsBbgopsSj2ybjYZ4CHwdWgeuSkokKSTYRvJUMcPR26ZiqXMoWGZF4tLZQxRatsX5ZKPPXBbC81sQg2r",
  "key41": "2zTmUkXeAATCV487EnnYtv2pymJBVHu2w5FgsmhH1TcvkZCJZXcv7qPnMjcs3A6vSmid5UkSs5qpbT7B9bSfS97g",
  "key42": "2A3DjbTSWBqSFoB8H9nNpLyprgZu9tZmUgyvAWYs8HTqdExXSsYgpnv8krzBFaeqetLXraVsD5xnwZHHk9DunmKW",
  "key43": "2yBpDcYnVYckaqsAetxxMTzHssFoTssaUYSH3bc7T6aApT9jsVerFNaFfemmNzXXQwhRyB7bhwQRMrXVTiWZcEoc",
  "key44": "66z4Ey1PvXiJWGUFbv3Bd4hLPMyt3GYMqKWeUhk6Z7SLxvFa5kiBWNFShFvDUia73ofKrhNzSYmMXz9xw3YEfnAV"
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
