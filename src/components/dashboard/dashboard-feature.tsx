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
    "2jNFdFKUVrAPh3nxpQ97u7inkMEvdvaNSR4ySv6zfEbfJdLwwE8VbWqPugWgLvyYG7yxFTxpSYZNvL1aZ6DzW62L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24eRWKv5wtTgTDCZYLnYK6v6nmWvYgVgoLsREWdCmCSFtu6j8KPShWcehN6u853F5BAftba25EJhoCXU5vzrb142",
  "key1": "4QYsbe1tGxxNEvzhyyd6ouLEWpQPBS14yJXRRT4t4EZo8TeZEA4VHgWnud54UA9U6DL9uWiT35VhW6RPEWqwDGaD",
  "key2": "41JMp4ZGLr1a8JVmHnHqDbg1cZhFnrPSZtsHBErgq69L6XW38Tp3yC9t77wDR72W4boCQetanmA6rcHq62DDXt5h",
  "key3": "2As9p1qnwfg3b5JVuGyEaWWQf7T5AMLb4XRsE5EhfePDXV8Ux1CGYFUD2RfXUCCnYfGWC5MX2Pgy4LkXhFQajQhB",
  "key4": "5zzcArGYMU2CiPBhq7Rjk3SmAEoRCAznz9XZUZ3csHtAt5NWqrJjrHnDi2nNwR5FuZHJEVz7e3eEsXARt6zPGLA5",
  "key5": "2EzsQLPSfhnjjcpgNriegBNgpgoMwUCRJEA5UucDmPbcdbxxpGdAZwz2sA2y2expVi7mTLxS5jL87KvuFtJWwdHM",
  "key6": "22zT8ykhtPL47CnaB5nGV2pa3ywS3wGR27Rsznz4v9xydS5gk6CqJ1cYopcKGf7C7CTB8CLLL1PVhnr1KNj2kZsD",
  "key7": "5Tp8592D2uCHbf9dbRSM2LiEVpNopoHMgucZ5k29KZtGMQifYqMb9WQJ4vjPmJWU1tdDwAEWN5Z3RPrWpBxUxtrH",
  "key8": "2x3Fap1rL7UZFDyoYAGXHtaMAyanC3xGcqWhavYePDdLpyv5xa7hQV5s1rZdvoraCZqhz5FYM7AwBYBwmfXaQCQo",
  "key9": "gYm9o7XeD5EjQu2BhfpJGAimdNkTkZ5Jv5H9oBqf29ibSbJzhMc7oje1QkMwBKZv1NoEF5CwJEbiNv1rsae7mgR",
  "key10": "3LQP7etnAGKBT9pFhe3WhTZcPi9QGzhm9TbVdAMq26RAqrJfv6PX4fkSzKaHQ4ZEhCyrkVjCwrC99TjaMCrmTMGn",
  "key11": "5FrjdLQBLFETErs3aUNXchjmPohPbfZj7s6fjc6xuk9XajNRJghVKeTjLHHMLw6Z4SPtbQFzzhUpoASG91QpJ8V6",
  "key12": "ngri76fw2F9Yf5Fu7zeRCdmEuyd15wptTgFZEuXS8e2B5N6kLrN4UGwBaoSfhN2WBmDJxG5kQ5ce7cMobukvtSd",
  "key13": "23zKmVVTAnC3apjQBTwRRQcss5nY6xqCZzoM66Mw5P2UnnivPDA18VPs5i2u7K2jGjtinHPwjfCKzckYrSL6brQg",
  "key14": "3sdCcSKRfc9BvCC1J15oXBHoudZcHKzCFQVG9t2ihR5X5epnpcxXS8KtwA5faow8Pv9SDpjKJ79mPvUxnF7qFe7Q",
  "key15": "Yx7kFDSq4BseHK1bc6RzYDEeBx6PqxwkCsg2UiKJjoTTmRBqMqnEZvKziU91rns2bqEzxiQt9aJLDtSL8YUKxXo",
  "key16": "5pz2GXPzU85nm8sXoVYiYCxP6Y7WRi1PE4QXdraMWJnDhzRev6eh2t823EnmT4sTNRzL4uvcVVm7HvCnAtrsa8kz",
  "key17": "5eSyeRzvoBYazMBuuacZhBmvdPoHzeXemAgY6xgAgkbZhSFwihrP78UgbbeugPGusYVcTS5aceZUW5RrDToQJwFV",
  "key18": "3x8MHqdHmXedvmLPHc2WCS7dfVRpwqDQm7kJDwBoH6zfzw6ip5ogUvkXjxFpaj3Mr3ZDiN8Zypo8CLTLTLU5mypC",
  "key19": "5f9KHfsFmLEnRvTnvoJ3MZ5cKVskRHti721fGcRFT7wdiUxKSvcqTsxnNih5AK6iPVTUdHda7FXjJuMURmew6E1N",
  "key20": "5brWiviqYNaFRVVZVHbUhPVTVGz9JUqijy4Vp5dW1q3U9DQn4VT5zPx6Lubb6o7i9Yvfyu1SVBFiAZyopyw4tCBy",
  "key21": "4EagCZZjYEm5oGBGBDBP3gjFvuUCcZbMkfSrLG6xu2p9Z1XCwTBrnaga5aewZGtTB7BjNUqNwNeARdqPvqNStzcP",
  "key22": "4hoy3kzZVtf4FgtH7ViEYw3tPasDEynZc1FGsXTbB3XMLmYbrKstD4bQRtANCcrvwzExmpo1oQc8WXZSx8Sunepd",
  "key23": "3SJXK7THzBwJyiysfvuFYA3FqxaVQKWM1qBoAU2JyaTiPaXPq72eMnVDQJxUsU8iEFZPnYCkbKPx5eCbdVu5n8sZ",
  "key24": "3fetBnyxdUtNuV7wbEFGmjnsAri2ujQKgTGLfpnv7HPupJCUyCr3rE785GcH6y76jwbwNfej9ejNet3xhEZwE7sf",
  "key25": "2mwJuVaRdRW2iQxsGwMrhCcD5RhDxNFkiP3aHx1vQUDm8L1nRymh1RRMRWJQ16rzCXk3v8f4TttEpkdiRtpSt7vX",
  "key26": "2KQAYZPoscg4ZCx9SrtwT2sotNadhN336LA3m6dDsmEka5EBQXPfSZw5TG9TT81CwLmbhVWbSCpdLXMFgFzBxWox",
  "key27": "5YUC22buvR65ktv2yFMHkxYSbCCKcunXzzR9zUR2U865gy3stxmNdWFDnnXq2SAZQoRjXkzD7YCnptMJDq7iZ4Fc",
  "key28": "4QyTpEHhMKYdaY972Cn6jUuYwb55RCviTraRkZ7fScitQu4tyYhMkbqvwJxkTxcNpdedKhH3xmEwXweSkhDKgB2p",
  "key29": "4nTz3eEYAYwghCBE7Fp1JhP1y2cDMEVKKa64sfeaBKZdkstiWfENis3CaCAP4b5GK9BoDY22EUowc1rePKiyH5Dh",
  "key30": "2GqsZuzkrvMaAmM3uqCWQcfCh8XKhncxbYuD1hFidxXfUEbuZQ9Xx89zjb6vzSmqBtaDxqxKXzYxQmbDVGyQkqge",
  "key31": "5tvZ9aizyA5RnPnQQE5jFFgaPC8Eydj2vxdNxrScC7ViJF2sLHdaVRHpoUJbCN22PjnKMUvfCiTPEcB75abhD4KG",
  "key32": "omJ8mr7MoKw2Vki1jXhneAzUE7QAfKoXmp55gEdiBd3zgdgcGEEzZP6bfBS3gmywpY35QNDo6cfD2urWQnteet8",
  "key33": "2eVqp1Wz2CH55CsJGGPe6rZYqXxBoEoQwBN1u7q5RxmAxzcB7undNs7SEq9fxCziBHT4WtQah9isgZgYVSEQAWDV",
  "key34": "2zqKT4wb7gmuA8vuvRivnMi2vT97TrC5QM5cva3mHjPBFPmQJAmEwyJmfQ85osRuzQwpVpQC5Jh13CDqv7LwkR7d",
  "key35": "3x98D6pon6QowtwFnKcb5Le6tzvq7dyg53axqRrZ9QPVSpTLToS9fJrp8kcKhk7couUaeGGTGYTv2KkZdEZoA8N9",
  "key36": "PQgwgaYRRjUzkRjrGnG1kXUn488MEgMvPmZXPYrj3QBDvGvTPPDQZubZzwCsA2s1etnnM1YABmBqcpd9E3Fh1og",
  "key37": "4NZXbhtWc5ZJLgdKVF1v5FF6JDW5msE3zL3HHQeJ9b5xf1pnAnm68jLFg54m3CwbfBkJp2EoNeoy1RrC2mAt2u6K",
  "key38": "4bJNMFKLGpdDWUL2WUtiFRn3TZVFadG6UN3EnwQaWNx6RLGY1EGUQrx5yqathwvsfMEQK3LRXWpQA7db5AcLbjgR",
  "key39": "5dfCodMXr2q1ghd5tU5QjkczjYBdGhVq9a8guTZqiebtxr74WyKUUgJi689d6T1gvPgEyCBDbcsneFPq5vc3qKov",
  "key40": "4bX38pnXZ3cii5ui5xz2xNFpaHZqTqYS3DGDVZPfsuRz4rfmk9sybgW6kHFjY1P5BouMTqt2Lcs2tkeXTd4PMP23",
  "key41": "rqbqvzkqrX7xgGt7bVRJU9VDYh9WNJos9A6sxEJAGQUExwtrFLMq5CN1Wy6zcWQWq2Tzooet97sQ9LYjbfuXJSp",
  "key42": "5o5YPh3F2t2zvjyHkwUTAqssqxk9yR4n72jN41Pe3nXqyxAHckJxaLwL8QBtwdM6rT83zQECedPzZvzp832AQFNH",
  "key43": "61nUJYgMQAy7eicTgr1GycQBFrRWTpGed5f8SpVYZ6nccZUyPqTqPeiLUuyhLGaJJLFuoAFk3CcNzx39HsncCmtb"
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
