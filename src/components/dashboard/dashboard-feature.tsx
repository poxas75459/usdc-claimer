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
    "4osxWjMMsp78c6cBW5BAHCxnDRGm2J7oKDWAkwFdEKzCXxZTU4BYkhPEguniHGAaxrjEnAtdz3Epuea7cDmzbBJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgyzTRksZwCBnazhQmzDVVq1nydQojuasgkwpjHkRai5BovQWpGzViGJvaiFV5aaCRAja3EfwpGrS9JkXxyMmTT",
  "key1": "256vNC8HqZFiQkjMxuJDQsUSL2N36JXQVpResRoQHbR9sDSU5qbTGaPzY9BkwP246f7ukhSwSnLcCNusL5CtBYCe",
  "key2": "4tpotC5o4Bc2hzWGp7nmgKB2Q8AtZ9zQaerBKyeNyao1rKgGP3rMx4higJ8i4D9QVN8D9Wgbo6nvEPiJk1UMA7Ny",
  "key3": "4DiCvDA6sjxRaKuF1YhfN2meBF4GsQ529VPDRT4XnGbi35vsrdmZ84hen5rr2fjUgRZwcVT88LfK1XsJuZp6bycN",
  "key4": "4rwGTYGCA3XQjFp3pRUZj9N3JxY6KJ88wauoB5HFsF991wpMjLNtTiBvT4GLr1cC5JutTsVeZLLpM1z3LiLadwyb",
  "key5": "3huDP6r9qYufyVzhMXvHgMdWa6fRyUf9PAY7CVmLvDNESzBNKnZs5d9Q7v9kUHUgmoUHYD8HVukky1h2WX6ArXod",
  "key6": "2d69i6PcsHQoJuy9tQ3qBHngDvowWuBStYsKiRqT4DwzcZ9pMt1XH9Rimp69j4XTzgoZDvg8nGBPAiJwaH8Ys1wL",
  "key7": "mnqf9muRKJoqNfiGmXY5VLWrYXa25V25sdLA98UTyp2DoebprpKrCf9seDMjwRD1AYQhkLjBuV3vXLaPKvjM8Ss",
  "key8": "4K4MKfAXJES7GAqyajXXw6DV3ME4iPXESDHnArv2YDaGxagy1BsUgpHi9mVps8r5mqUjbAqCvYnHamQmGVwyYCjC",
  "key9": "2ZhTboQzdus3H6UB3PLitg5N9WTr6gdcCN9kJLDjzvt5jtgyFxaXmR8N3tgjyT5M5cy1MXCpgK4Nv95uSSLgDEkM",
  "key10": "67hjqj3ABTk862DC8fL1FG4b2oM6p273KUfGruDpUxDMqxTZcZ6so7KMep8D8skhmB6varUSUVimivFASFrf5wZH",
  "key11": "3QaujzaSNkc9cYbKn1PxLkMM5E2N4Lb6cahLKZLn1LTgGdVaE2r5exnQfaGNfKHWHdv329Fumg5MQXuLHfn35nNw",
  "key12": "5LgbeLnh6M3FyUHzeCbwRzh1M6Qdn8YGC9RYbUTDAfdMW2Uc5ooYhjAAAgTs96vTLiYm6Nww8DVRPnQ5aD33cHqD",
  "key13": "2JzBMoDmtY2tnpaYE3AU7CN35pcqFma4ETxxtETP1B5ywC54Ugt9ntLgg4Z7edd8xLSbzxSJnrNMRzCMZvgQLafD",
  "key14": "4foz33mpFcz1wg84E2sKr1Haa31SLm8VvoSn22i6whcYbh5nE9d1psDB6Vg8vyDN2qpU8Jw7UivopD115eJhksro",
  "key15": "5pJitF9ATGzX9v4oc4KdCxs34EWqpQic8hoAmHNqCRd369Cccu9Zf1qK9jbaMvVyTKDB8WpzZ3YHFCXBM54RiuRb",
  "key16": "4vDGtLccFQb8aTxbu63d6Ne2M1zooQqVZ4CrNPzFGvDitca5qUrRAtDAqfTjBGejXaJAgSmvHqzpLR1mv4kcen4M",
  "key17": "3M3LwZffYVjfBzdM3RehAY3MSmyXCHtZ5dqG3LbN3gri7DtexGhZTmPSYLD9qsh4vCjmqQxnKVaiLcMuzpgA8psd",
  "key18": "rX5ojAai7t1CdqMuKbRQobcvfU5zUpb4SfvN3gU7SNkgFfRhzyykVqbosi8LsMaJTYZW975KPbGGeUUhfs341ZQ",
  "key19": "5BA97KsLXDRWLmXMGMeEH3J8D7gx1wRKnkuF68nw1z7ALCGgSGP7QJqmH8NjHNsgU6NHoUSKQZAmMXdjymCpD3ES",
  "key20": "3QduetKwHrmCZx1ic9kuMgJS5YG3DLgXK1dcsiu7Sufonbk51wULtbsKZtvWodEuf3gbBLqQoPWTBfR31L3FdEMi",
  "key21": "4kJ17yuLhmdWD8uipPWYG7wRdfnHTikX1eqiYaQefMDp2VDnuW18u2ChFHWTtmXTUpwyjD7Eb74yNBP3smkGAynd",
  "key22": "3NRMtaGUtrxP8myzMhGd4PEyRrpXMLJ8pzc4qfkgAWuha56uSWtxyZ38TLVsHvA8AZX3K85vhdiSWFJ75hokmhLc",
  "key23": "ZHa1Jvi5ePrjwxaWgSV2DCoXX6iABXFWPdg9XkGaKuNCTBcHdCfZCPS2n96Non7YVdjeUaD3nwet4hUiVGJk97D",
  "key24": "5VSdSVKs4FdK4zNmigctt23a6ArQ69cjyMz4FF2DsitJ4t8RcC5ZqMxEuPE121umTh6vau6AsGVQMWw8WtNbrJvg",
  "key25": "4n9mRDUt4aJth45mZEee6VSMkUZY3g76aVDChgCq7HUpwie5tM17mNpZu1wGzNrpttpzRggCWdfhgMMN3eTTA9Xi",
  "key26": "4gU12tUQDR238uDAzuVBLuxUWQQQVdaWx7cimyZ3i7o1BjX9m4H8ETtt29Zwa1v7bvakr9zhBLCCsp48MNLQr4bH",
  "key27": "4Z4FdWWmswFvY6MVLhXPLhQnpvMTdsF7WCNVoTt7r5B3Y99jqcpjjnnQjRqaNdZoCEfbadiDoU4RAgkKxK4cobYV",
  "key28": "5meGZrqCodePXk4x3aWFG4sDuXH9SwqnnfF1hJVdz1hApH524y2asLzyk1enzofynruNqsTLd4WxrynvXLyy6pfH",
  "key29": "3Q4KNFXWLEM5snKPbPJYQHN5eCgfFX2GD2hfDMdNCAxHL7EyZ637GTGfy7aLuaVUAc9gQjtHBSpH9YeDh9rhRSKe",
  "key30": "HHBPwdjUr62Z49oxaLayU1vyER5L2PY4u9vaxu4P1DsUNQ4efsQgdn8LmCom7kmfnYzxfvBgrCV5LNn2o9oE7mc",
  "key31": "58RxqdrLZpw2qHASj3HCE93Rj37asLCzWUv1tvBkjmYUwcyrQcBJJNQDkEe7Jcrwd3Nki9qbrmoEG6SUJUjbJcsP",
  "key32": "2FCqyaHTq9QELK3u8iy5eBThis1KE2fVeDiX56obzKZWzg7eeekdAQqer9RXffiRNRN7UqB5Ns36ZYhLnPjh5bsy",
  "key33": "4qvYuaYzx4bjNJkixjNPKhpAgGmgNPxj7YyKGfyTr6qsJG7e8EeLiwbdTSWn1me34Tov1RUxYB9EtMxxmf1QjUvj",
  "key34": "2Bcn1Y36w5NWQVmFUkA5PH8ipJmRVFv9unQVycQYTWjYvCyMzyJP5YgcrnFQUJyVuGKtBjAhVXggb8NUVduaAcDX",
  "key35": "jMDfgEpEYLbsDx7qmsahKaj1FqWsR8mr3gB7yoosYRY8BqCWa7zSUrA5kCaGNnPBwj37DLdz83c1bhTaXenjWzr",
  "key36": "2qQeiFpTHCphHyHQkS47VGTntf8owAcN9ePbK84W9HHjZpGJ351Y7NhjiFb8t7gb73iwGDAC4XA4JV4T1rj3WkRd",
  "key37": "2j896HyG9C83y28gowyJkUckdX65qMHVBBciGGxjPzxWG8Z8mLFop1Vin2V7zE9oW7vY5i72hTxpBHyVvFUUuDwN",
  "key38": "5KhraC7g8a9dfjXZXK34E8yKUhrYh2zpaPjkX9FAZGmZLWoaCfdRY4iAC7b2juE1gNxXWc2b6P7K2XAz8JqsihRP",
  "key39": "5LYRPEUYpGzM92W9ep72so3ue8woyknSMqL914CiLgAAHLBJU5zUEvSE2Mt9DSmFtQvWsZQykHsEkc8xZHnm7w7b",
  "key40": "2AZnRpd8pHoc2rW3tSHjwJFh4cGU4eTM359NdCgCu14v4fhcwijYpwcWzMMRdgDEjzXUna9Fprzjp2hQofw5PDfU",
  "key41": "5BVHuGMwPduV8A96iVnYacHrEeZ1Fq1adTV6WjKBai1i4kG2ARJixPN64SDryEcW7sxfvpedvVD8117aeAG7ZzKq",
  "key42": "2731pLShAtr4YTEMfHSV5LxciQRZsNeFsQ7AYQ3TyBRbqdchrozWiT28byRqtVHrjrw4982SZqTM5Q7QDKpQ5r2A",
  "key43": "2TL6kDjirmJnF3DE6DKmNs29xxQqEDQDwEHCh8nzsBRiKgBJQ23xCFxcVDG67h6W9id8LUJS7sB93RrbiYCiJmyB",
  "key44": "5tePA2keSX6HkEYw2jgP1MMVPEJRkcQdjyQusFxwxfY1ZzcLwfGEUQeQ6XM2wte9Vbca8XjJjucWCxst3pE9wWGb",
  "key45": "4A3WDTUzJnirhAkBRySjyLGTjhvDDpYkqB9j6fQNN1Zc4WYf3QetCzx7cPsgPKLatSJCvjrMf6RJAAxhHqBVLChp",
  "key46": "3hQC2vu7iofRfsWuHLnsxHuSRVHZCedn9weV4WR8ojKExsjmEHsjwFmVgqXMRVY73qyy7b3bj6ECeh1pSPFwWDnK",
  "key47": "2JsWM9F5Bbjw9vpkEqi3GHSGxjixWrAJfEGPtJ9Uy1cabLf62b9X6FA4v8JGd3CRmt64B93f3PQocKvvHmsE1Waq",
  "key48": "KN9Xf2LmhxyrvqPJmiou9xcKgXzyfDFAZw463GhYVWdKB8L9oJzsxq6zQSY4nqjjeKfMbU6wrefVBaVPqM8CYXT",
  "key49": "5ChHNDfdte7HUZTfZQzoH4wmcWfHKRPqUG1S17xYDVn9g1H7hzsMw8vNTb9T67NsFA7thVVTXp4HfJVjo4LEWqDd"
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
