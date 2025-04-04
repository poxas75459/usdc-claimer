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
    "2T6xJGCKddQxZLe1QrZJ5nq2qqJZWZ4uyNPhwLG89pmC4mf8RVEpCYnQuc9hjTH4MJjopfwPPjmYSdhyW8PSiu1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FD3t8AUfBeTQ5tb4EALWvqhSa6bx5GHLFe8FcYDtGSc1iYqA8nkhvA5jgdf1RwQenVypHsLFBrqTtAaMJcBHyd",
  "key1": "4xVdeNR7huR3GeAo7AfpVLmUKaxBgruxta7RoYVijxLFErvw7LuVaZbMJB5NHwyqfQHBNKdwjp3yAwQSEHSnx77y",
  "key2": "5pCdFtFcgRjGjQYgVX6DrCQMmhBskUsbieKoLKcFo1S6x43mDd1b8C2QRCifSXf2AiTeFeLrauH4QekkYLJtoYzK",
  "key3": "52f1MoSo4AzVwd9Gv6zH2D1CPAHtLG7ZA8cbSg4ZajEC891MkGaKy5hP3mdSFBnFEffjvNqDzjBerTBdHNRfTTDD",
  "key4": "3viwsBVbs4JLXovgFGVmAwaLynbwuF2eqJP26kQQhrZ25tRCbr5KymNx2exyTBZ4t5uSwvk5ykCTM9bZZfxDUXrj",
  "key5": "5JLKsLxjmczfur4k2oRbiZuwumAMzPvg3P667jhaPkzGjfNSyyWPvtMKpXiPMrETdpFpahRrSbhqowEjzNzYvv47",
  "key6": "3CLSQN9erURn5VJWfsgFZi1GTafouugbmgny8iMiC55r3AsT5WWsN9Q572gYfEifZebnuYXsvqCX8J34p65AdsVg",
  "key7": "4kYCh5BheFp6m42hxu9ZBviR6fSR1g9CJkRg7Fs2A6zZLEUAzrmcMz96SHbsec7spUsitXDokeuQTnutpXsVZCs5",
  "key8": "5LBawGKENeca6YTVhBoGwrLiyZj7dFXZsASN7HuFLnNhhdQ3NjG6H79sGibZZrzshQNCNmL2Gf8idPFrofD65t7D",
  "key9": "37Sf5DvNoXom1RnGXQbvoYrBG8vBpsBA4kGywmWfCPbejhZAukqMZRvcnuh2zWAYtmXgpo6VngGcfWVL4pCkwLKT",
  "key10": "44h7qKC2TEUzBa4LgK5R36VHVckVKW2MhEWUR3YHEtmxvQB67XQWhDC1bhAjNR9XDtU1hTyCAfmXDH6CBMndRLtK",
  "key11": "5SPtimpora7VwGA1LGApePqw4C3SLqKqx1c1C1txcKP54N221y6hdNZXk8cLA6JFzR6XkDf1s439HSLuJVUTnNPm",
  "key12": "4LYuE6mSXGvMpLvieb8TcehrEBrnaMfDBeCCFfhQfAGyiT1sWe4tMyzGDx9NzaigyVaC6AtmVznNw29uGoP2zSuw",
  "key13": "z42QZzjMKWtvhECJftd9aYcQ5GDvRh8XHFdMytvfvTBbhXUSqiFtNpLGgBeEsHLsmRLMT3TvzDigmExs1WQ2r2c",
  "key14": "3RF4FpGLPqBXarizU8LSyg9EJvCPMP2NeJinLzLNpsV89DYPxJtctCscpczMTtFZGnvhc7nXrYiR2upzC9v87ZMu",
  "key15": "55ZdiRBndT1aAkzFVbxxVy2QXiKyrt5u2ZTzJDkFGVcNP1C3bHcwVMmYCFMkxZs5b6fFkU7ydjn5XKTB42QTqBd7",
  "key16": "5YYLLopSKN5npmFJVxbofnjPipvK1E6bdtzaaQWzHMhmAtn7EHpg5FosRbaEwvXaTh3mBJNvZNLQsQMYwRNFA6BK",
  "key17": "5exjN2m7sL6Jsbwd3dJJvhZv9nmzXyEvXysr5sA4R3ar34Fw69VKuRKyDGFuVHrQS4Wt5szjEaY1wKwmbNkAJRvM",
  "key18": "2Q2wVTEuCgwhYYDwe3gr7xxyauaGzTjoUytDEvxU2nFi8My5yTGTt2QXxfJz6rYQkpfnTjLTr7YQkNqwdc8Z3RBY",
  "key19": "3kMJKJ7jPyubQ7iHkdh2uLWb5Y2CqYSngKnBr67dbgqQM8j6EKLThRsmo28vVTc2Jo75X4tasoAyNUuKUgSAkb4s",
  "key20": "5evggmVB2r8Bv3jzBxDzLG6hHkVXRW5r3m5Q2UDpHQVxh5BkgyXYWez3dQqAm3UBHJAtK1HZpupjEi1yyUnW9Nk",
  "key21": "5BFSYY8M2KTKKJrndUmNNMFT4VxYKvG2V2rz8qspGsoqYP7Cn3kSTY8eVAPn1oBu12YWUEhuwwmkxikzBCMiH5SZ",
  "key22": "4vvzRytLruhDvrJV3Mq6kEUdjHnHJ9wDVSHLq6kbPj3MianPAB5tsQHm6p8yxUfGj5oY7a6XKuNdtUrmHzMbHXVS",
  "key23": "5frbbC1YtrUXnxuUUMh6yuQCLFzAXzLXfJfQj1t53J51mnioc6Rzz5FramHbZ4uv37VsmFep81iBEtjp3tJFj3Vz",
  "key24": "2LBvLfEzXZPLzZkE8dnHr82DVRzexm35hVQM6yMXSk4wqbwFshXy7AH2xTJBfLT9RYE6yuEZsjJZVd3rzzk7Uhvd",
  "key25": "2LX47zoVzaBDrXktwZsDotao9Z67942Qafp9qcHCehUBi4KXoNKt6J5F3rjKq9PbMU71B5edTTZ96dfd4eJZNQpX",
  "key26": "v4u8fo2sm3rPaQbXu3FGdjRevf27wQcw1QDhAMn65jkW5yuXcDLTKxkdRybR1HxpDD5MVvbbr5zfWotsnJ2f57K",
  "key27": "5soHJCizebKNZ3vAA9zJy2tNrFyANLrzFKpmMRhuxEbcrr5fhmJMtfbaxL4HbNpUVWnoHkWFaiZuYbr8VwEHdJr9",
  "key28": "mAf5mL8ieNegsJVSQFoTkoYNnz8BnXek8W8iycJhmfFsUCMETHU1TGm5DGgXKk4CsTAEJWLhYHA9TUSxjn7jZao",
  "key29": "5rKpDAujZnNyDBdFXDySer59QegoYZVKMzW5zhFxzTg1parTuPDKb9ReBVQW6AqFfezwDaTF1jDJrLT73SeWfEWZ",
  "key30": "2ebSttEhmxteFbmpqT84Lc822ubx24FWqnVPi6jF3p66TkS32fUokgZ5YH2GuP67nqTrps9YBAmExoQoLpMa4PxX",
  "key31": "3jqsFvs45VzbEAz3dmMQsikEugCbMf2j2FhX2fV4K94MvZae6hhzkHV8YQwzD4a2wRETAhJTGwAWeaaPZnYhuMPC",
  "key32": "43vbwGgKfo11m491Hv4fD6aZyZz3ApiFr3DRGvwyAVxxAZS9Th8s9wcmmpRt8Gozgwq1U8DmVZ9VznbsKd3JXfEc",
  "key33": "3v8mxeNNE6ugntwb6oN2CNrTetuywWMJhYjTUybUNT5QftZxNSg1HXLbUa1Nab9bxJdpEiaKdZ83VdMWtkj7LA72",
  "key34": "2n4nAJKYoRdZGf9DxKshBoucaUfxF5FsagSVXD3RNQRdWxZZKFCKRJV6JycjW4wihYyuDqwBDHFb3FH6GanqSe76",
  "key35": "3Qa8JxCbRYJVWjfiMpZAfWqQx2G2vV5N5pnCELKYBhJtmtPq4vQpXkMxYzvoA8cqwJ7ytq8rijdx8ydGt5UJQzR8",
  "key36": "HiXVJmrFmowzVSjBpYSEy2o433aywfi6cUhAVJXc9cM3Fbz1LnJvkUuKED2Rqkq1eHWwG7KuRCSVTmZMxZfJVqY",
  "key37": "4No7kDSYjiVmzYHt1qivJPxBWWs9Htq1UELa5cPVv5EuSGNWPm3KPMPKFi5zL5wJC6DqUprY9SztKyRxkXmjg52D",
  "key38": "2Y3iFHduxGzavm2aA9Dj8HyLZKaWHSthCdrKpoGG4Sk7ecd17CTroySJCXVhNbugxctE9T3s8otBpsLbmcCz7GCa",
  "key39": "5j3XYnPrmEfr6sjWYpdy5nAcaUW58ruf9hWxvkHti39jGD6hfkXNadwkcgk5ZKfZ4QBLtF9jsKxjwTPRJTyREKF1",
  "key40": "5mpUvwZ1fjimgSvsnnrtc7AzziPQgSVD5FX7TXnivWz7m349YCUNvD5nsGJfNMRWAf4mrFtTZeDFp5V5yzgNgP86",
  "key41": "4BTWDMTDwpszW2pY36Te4GLod4hq4vUeryx9MLX4QKkpxuoj2VuCZUtKDHnSVQd3DiAmmH1bmSJjYJs3PWKHZDDb"
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
