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
    "2bg364Sabq8FCShzBeH3KTgU42J11n5HtJVYkzDzmRQfpDpk1CcmquAoyvj124MmX6RKwtjynUuFAbxtUrN8zdn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFAAE8DqWxiLgJNv9Lh77FA6C3rqzxZLWN6SWk2m5fVh7FXFFoMSbYAbidhNirGownkVwyU9buq32BVjiZVV4sa",
  "key1": "3NRtzdJdWJHoTZ999gXykQyPY68gDum6SKDGwPTezbMJ7RhSxrDn7pcdCgzYFnrYf4U11FY93m5WMxoPDym68QLv",
  "key2": "2vCEnJcEG2Cnyx6LZj4BJdv5XJLKuXrj772p1t2CtYRNNdijgX8fRAXTyxct8Gb9E5GcYJj15o8iyLhsqT4JdGTY",
  "key3": "5jsN8HFGThdhy8AM3BMix8mDRoogMzby5J4wFsAmsQPbPAzzcrhnQzdQn8mmNyinWP6sNXAKzC9TmV6L4kJ5xpF7",
  "key4": "2LX7ep91nt9T73eS89aVAWEt8goDcLsogzPTWn5YjGMu7gPyvDdN3yWPqataRcp9i3Fgrg7qcSxwXMc4E4ag5BQ3",
  "key5": "UuayMhKZrFUEgMcHBZX2D8rbckxVWfttJu74AQqrxD3kHUr5zWQ64F12NTAPcxZ1HB8JxEXUmTzbQkb2H9KNysG",
  "key6": "2hEzd9qS2iCBJti52m7MQnWLQuxdiVWpNd1tokjxPKALY63qiN6UExJ1uJaq2sQp9ght4nHuVpLzZBxqhUtZcAsg",
  "key7": "3xFbocjJKyPn63r56JM3ao8a13Gj1Jo6HRtQqqN5i6KWKhZWWmDKBxRaDuHo4VUmfEVkyDXPcGqy8s8uKBAGXyhj",
  "key8": "i3rz7wuijsKVVbEtGTq3AhmR3wUxoDTDjXD27wiKPUPZrx1hnzHVerMUU9kRBMYuW4YKXhZjicWMxmEc8GunqGs",
  "key9": "3BpXsGXg5Sg1dT4cmmkXGT7DuPGkA6q41SE4QpY3Fa488Ja1B9qkip28D9v2jEk9rUUpygQ9LM75t8G67qbKJBaF",
  "key10": "5iPhmvMdWwkLxtBwaRVQxvdF33xaSWqMqTauTJShDG1NKbtfZEjDp5AqX3MP25ov4pH76hkqy2mA9auxEL71f6rB",
  "key11": "4QZW1TZLUgBczgftsZzmqjxZ2uGrdexEp6Nm7voiUpCbUdWpRHdZC91JYYLKww8BuqDK6CVZ7Wy6St6b4kFzSgP4",
  "key12": "55uaoM1fzViXqvS4B2qbvpSsoD6YzsbZ1fSdaPn5FhAgedjNSuxZksynyzRY1UgajHqCLJuTY3LmMJbmeoVg54Sk",
  "key13": "392qCPD3XnxuhThPccwon6XPqvsZV1bqybs9MityGHe7hDaXNS8p8MC6A15F1c68xLLFyRvW3nyNGVz11gV9Ltig",
  "key14": "25M39MWLuvXFqz5aYftF3vF7g4MxN4F9B5rsvfT53As4EGfEYxHdZkFDVHio5nVYTyAcQG4Fv9Y7pPb3zDnC9kNh",
  "key15": "RYsMfAxwD92Frmko5XVfwa3Bh8KW71yQoRCnbNERavRGfT15EHMU12R5eApnXyueKak7ykrzGtTqj8REHEy8ZsR",
  "key16": "5iAPmbgHhfHnmPcSEpWciPYfnJcGyDpqBYzwwTrqYmURoAwXG7G1SJha4hjDTztfJBjhzrnJrZV1BjSLYSCpw6NF",
  "key17": "2jr6Kn1jx5ewD2yyaUkr1jFAmtSf7oM9bPDGam278JFF16jzr1hxhDsKQ6aALpiD5izydn1upEkw64KGies7LDwF",
  "key18": "54XzJqRDhmRpxYDuDpWAztyhW884VExqYkUCBUyp6mC7xsxHKwAoxUKo3BMe5roh85dYPDcLNGuxCVYe5WyFqAFr",
  "key19": "2qAzqCD2VJnkCqXdQe5pdF4MgZTTiEGupQL5m5KNhSfRf2agkaDybdFNW7NRkg36zkB82xStTpd84UQuTDoVecqU",
  "key20": "5xw7FwLLzZphpAvH19HynXnXEREc59xz3zqULty6V7HVPVSu9V6vYpUo26b3F9XC1TDoLEXLixLKHvDndPAH4oxR",
  "key21": "66w7XWZxe5SHT4Gq996Qzmzfq3cQGGcmVfpvWxYUS129jEaD7YtShGPMykfojs6cCRokhmv2MfNMRxG6wbMZNvjD",
  "key22": "4FrSZmAiVZEVJj1DbSfGfeRbigaTx4R2V1erRDPyzFxU55vT8Le3vFmmEuNL48KKu2vkyQ3CQBu8ZJCsDCNhsuGP",
  "key23": "5BQ93W3M6dqa6HkhFyCzHjYYXbEppMtv61fNGAq4tWGL5U1rysSDCSHY3ZQkUEQf6DZj5k5SdxxhhxfoJasbzMTj",
  "key24": "2q5NTa4zfvWKvKbAGhcwfnGRbJDVUG1J4rMvZUTqicLyB6ueXyXgipeycwaN82dkFxtF6dECr21ComT3cxtZ6EjQ",
  "key25": "3RGVDJ6x1wE7EFSn6t4LxxwAGiBwt9fkmprLtU9UNJSaa4wGv8nDChn9d4gqndhQQfV77dSC9vN2Zx7k4AFWMDnm",
  "key26": "qM4wsV8aGCxGZ29mWo12bpqpnDmYa5jfjRiLuxKNXnk4YQyhmGmkxjkjXxHirVi6nYHuFNEojNc51ivX3fMNqQF",
  "key27": "nYkq6DMpWQ1qvefEFYAwSHitq9fW5jhdB25DeBnKVvHJoJYGqh2Mvff36nTWq6KsRyemy5J2ChdGTHPRmzMwZqR",
  "key28": "5BAkfNhbG1ec1zj5kc45DBY1hgzNPH77uxmqqqjhFQNzKFjhz6FJVF8c7wdxr1DnLiYuayNtm7iEe5vM9pnGgcv5",
  "key29": "VaoLiruF1SSbFtJKf33W5MD1hPfvcokjLoYZojJbifgAGH83ue3NTX7JQ6aF1nvhbxZgAPs94fuJLT3AcPS38L8",
  "key30": "3U7BaBdCgZ8G9M4X7rm1EgH5sF1ajp4rPexEiA1YKzquiuHwuRYPpWyceXCfqqZncQwnj33Pk6TxuRkWqXg7eVzK",
  "key31": "4orortCZPukahnt51fjvR9Nj14Y4E1KxqA54dx2LtZYNSZFtKLD7VqWar2p75ktX5Q5zsPoP7zvoKqxjUkygqZzy",
  "key32": "5Sa1ardo2AYrjpGKgEPaXXQGNna2GpwpUZB1iycz7D5kMyfiZtg8ggSMxXFUjCWjX7iqVggHtt9bwSjK9Sur9WxS",
  "key33": "voSttAfky3s2uxeUeGbkFwkzPBP1gVSuC8NZbFKjqFDezEGumkMVvhyRjjzop4t8o3rE76LQyy22cdc5WXwz2gn",
  "key34": "546PMxd78BL5b8D7ZhWjn54cUutshXu8fsvwttguDWREvzMpnn3UWnKpFERMgXqS9b24kxBtZ3Bu1JttymG6mnv4",
  "key35": "TYSsc5J5STf2G78dDUCymRJkwr2yfurD8FfbpCtF2zV4kY4NovWTS4TUS1MAN54HjK2kbVKM3VeoVb299jdpbKF",
  "key36": "5q62X8jVUgfpATNYMmrEUksQiQzkawKD3XsfmpGNZ3CgTRge9sfwQiHjyyCw2vbX3iPyVTMc5ftMpKocVnXmvRp",
  "key37": "vgTcKjYi6pq66zSwpHvtqHhPiesLWWZdTdGXTWiyo3FVgCgrmsg4vYnaeVSzfofwLw8aZhdJE4d8mquX4vEsBtj",
  "key38": "3ZVsK4DnnDe137Eb4CWCN6x8PcG5iVJeRZhNymENeYfWtniR86YxtaXMu9LVR1dFVbTvZPFEWo8fJxQb3HB6JC1u",
  "key39": "3Ua4M43igKpBbpRdodjUaN7sEQp7UrKUN9NNWA23ib8EQxSYucGrg95t4jme4iBGLDEjMjXtFXbgeE4RbRHz2aFK",
  "key40": "iMkYCU4qtZmWhaCytZHCXKy94rDddM6ehjwWs8dta4U6USvW4aN6JjeyPxPfMFpBsCpB7u45C3BhjmhCTtV8m56",
  "key41": "3RXsdb55xREc84D2XsLitkdNnYczEK3VDLgV2usyXCwkRGrBeSnBFZoWn56GAKyUrCxzZwEKVi9z9ZVwAcTV65dE",
  "key42": "2RGJapYdeanRy9WQHFjhY1mV7NUMQ3yLwgbeBxfBY4Vh7JkhDaQkS4U2uQSmcs2cSWz5hQUYbmW9tpbVaZR1Ut8n",
  "key43": "4GFso8mBZyTq3ba7pTfC8PonykPfH4MXxzmCxLfECGca2oCjiWunW84gmwALrKPnyJJupfbkktsJv5qgSFDgTpfh",
  "key44": "4prTX46xTehKaqaarppV9ExBRnEnyvzRKi4DD7MYKM94A7A2bUvujeg3CB3w19Weyhhwo51XuczJyoCUwLgrW9Ds"
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
