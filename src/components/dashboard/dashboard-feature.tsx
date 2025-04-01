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
    "5hWoiucyE3z6tXopt3Eerv3CK422ffx9girWN7FLmzkSdeU9vn1hXJrarYyGGXMDkTWWjrAx4cE4V2UcQjb2NAjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQUGspPzXZn2d17dqXns6MjvpGZtsxMXyV6mmBX5z96FbnH5GzVSkjFdMSaLxZgcxhUDvAYnHgEMrKVex2tbyMr",
  "key1": "5qAmSvSYsmDJMYUBxQkoJWT49H5KJQW8UeJxfDLgSU5zRDEKtQWYE6o6bD5ipW9qoearxuh3arie2bfktQFAiJCm",
  "key2": "5y5aE9aCSd6SFfjcy5rxEWKF4ZZDPX2DmQ7FaBzEhyvAHCTEX5Xu8g37RTfCAGvty8oL8dJwo7LfP7UPpewsp7M3",
  "key3": "22BnHqhvnfbd2L6jXcXLSbJSGaZfwem6ogjYChqCXdgxBBrHG6hTpXaqAnyQAfaVLqibBMwtkBAKrXTsT9wLHJKj",
  "key4": "4jVciS5dwtg8txanBHJTXiEp9Fzfha4dLzAtSUd1137PNX8WYNJHF3RinfJZmt2iyZDimADLETU1m5E6KmveXshf",
  "key5": "4iedrcxrGmDX5RECcncxGACJywELzsbw4dF2J9vmpwPASjGTKeDPmx3vf6amNCWr9Y6psJHRxJ28vNFFzaqZPnRt",
  "key6": "5HbHm23gEGDjC49sArJoGk3e6Sr2iJGAkcCSUCNQtXKiGb4PwnadPhQu4wgUuVAR67e4hhzmTmuUeuEvn9G1DMC3",
  "key7": "5zzP8t5ECzQx4rKcDZHDaebntC1kc2s6b1hoY5xgb8QZtEFbPU12Q3rAnJ7HRniRBkiJzRqYNXiHtAmVFab2BeV",
  "key8": "3QjJN5re5ica6KLmfiqJZBJBwq2uNaMcnRXhGMH4LonadP1yqNjPb9ecjHoV9qYsBxkhWzEZ6te2tEdGxcnroi6y",
  "key9": "XsQ7P1pDGRPcdn3csNfQDDg8j8d8Phxm8FAFLUwoAV5AhEJZhn3CLuAV18msGR5WMopsEAJLUxW7V55w1xFtes7",
  "key10": "3ALxFMwbYLtbLpAEmRBARE59En4py93zg8pPBb4nhaM6ywbqQwU3iFDgHsgx3NYC5CthKgUrgYad35MrErASfvCG",
  "key11": "4RZ4rfb7pb3UkaBsn5A4qQEDhQUu19uZxAD4CLdvHZAwoMr6ftAvTzG6ykg1PY89oBmNh7eGrb2EV3Zd234W9TWx",
  "key12": "qsyKDyzc6T3zDvGFFsaTHADre3wdfvPu2XJjjLep8iyMGZwKNCnsyyo2yfkycETgV35KPcWggfVAaxNZtU9HZ2u",
  "key13": "SxS7Tw9NQPuXyyzdzqGaYGpmmZmVia4txG5LKC86KRYQ3g4oFcXa2EE4FiisTADWuoz3nXFCj5EL9nfGJq1KLm5",
  "key14": "3cZB111vPtA8sfMqPdKwQ1FzmtaTfHnW4trW5YDdV6aLzk74MaCnVfNKSA8RMq3jjb7FxNswdJBCRu4jqMkhtFPz",
  "key15": "3ZBvLwAapf1ac587zSLrn97uiGSC4ufETh69bmpPN21UsnNCWr9rGnCi2VQ471dqKsB6XqivM3LD5CR9rqV7nRnA",
  "key16": "FRvczM9j2uBZw8dXZNvvr7qR5bd22Y715cbJT5DqmkgWunDWha2B3Z5Fnm6FgSznRBbJuAMt7LQN6wnPsvZhBco",
  "key17": "4UxH29ocsGBdypb3eXPCJ8AXhL9tCucvuiJG2jzs84FnNKm8eCXT5rwfqbAVbxBpUSyxoH7WUhMnubtU1QHFZqm6",
  "key18": "4jxpc44N2RSMLCF9hbHVHsCgs1KvsXyp31pSHFWoU5ip8EnQHNErA8wsfJfq6NtEX6yWqMpe1wDScB3uZhg5NGqW",
  "key19": "4Y3eik9tyvKvk6F6eZCUop3hNU9f5k2aWn8oNAFueEpAXixxyQgNt8Rd98DjcoEXzJtEWFJjBa6tei9GQSvp3n8N",
  "key20": "3UwYmqpkJw7nc7gTsrGU7Amc2YZoLFT2FVYiqRFPV3Bz1ASux3v1yJZcWr7fqhnv8dQpySrVVwoAcEXtBQubEYUg",
  "key21": "4CzFXvD2PskyGeuWwtN2eCyRBKauk4k1QAJV3FcKH7Z7Vy9V3Ew5STMzCxHC41bgzB67aa4j9aeYGsmQpwAKbkJ6",
  "key22": "5fjdid6JqfoPrSu7KzhEcUQNDbvgdGj7aqPBBaKTsNXRWxqKZtW8DZL3UwF3N5sySN6jshP8eFzRK6UHPAqYzgtJ",
  "key23": "3zGx4dmBA8izoC4hb9byDk5pZayLzAvyndF3kLfatujLceiZV3ussTSYJSSWojrVjxPighXCQC9z2v9KwyBsnnML",
  "key24": "DXokGy2nmgTodWRNL2aagGYJGRBgfbCq626vXhdnDFnbCw6ghqsZiUFkRezoPttvux3h8JhVVXq6hwd9MNBr3x5",
  "key25": "3jckJjnWiobxBxtqME76pkF2rigncEDpDWoQtsZpADLAuSh9MZyZdqM3Pvx8SZbDB1gfFt7i56yot74hYUt56VST",
  "key26": "3c9D2CJLBK2LDg4BGtVK2HTvbxXb7oqttRG4JmX8zAb7TwqM4WbHR27cYxRXEGhSssMBmkzbC8LRPWZfWUPoshmh",
  "key27": "22G1xvnNwW3SEP9vDYZgEJWJWfaVLspJCNA8bMXBytDmKefgAhvihMvfRdSSo3T3QcxMvNpJCqaLP6iq3rWsBhhu",
  "key28": "2RBZdZ4BfPRmo3Pmf4rFmKs7KKNHLDq1H5TbqZKUVDvSxcy6cvJLHZEy77RnvaoefSZf2qJc21QoMLBehkRgzg7z",
  "key29": "2dYsCz9J1PpQwBrNwzFk3N4XN8FcuskUVmLkAgU7ybwRHbUpxRtsMtDMNbSE5p3p5H24qad3N7L7jy96i3eTJvS7",
  "key30": "62dqVhsmnyvmkKVHYng9WsjJpq2CBFoDdBWZiqPmDQwYvPoVxg6kJc93icodp4efmUXMLh4GU1GCWAhvVGLW9bmy",
  "key31": "5reUdquFXhbJw8W9nHLE3GHiDo4KXJRWMLjerNgRNZqTBgQArMZD1rNJ7Ne3anVp1gHnkw5w9wpBj15W5tfe4zZ1",
  "key32": "5AQh9WR6LNMrZPHfUUWnT7nQYyfPTANeszzQUoPwkN2yVyHbxcZ2Adj6djQFcfqg85AKaDFGhv9XTQ37J9ZnEkpB",
  "key33": "46zs57MNh8RbfxoA3oRnkCuWwL3TAn4y3Yamc9fYXXX5zWPv84fejLGHvieg2DFYXysy19PQFCc4zWkMu78GvWEw",
  "key34": "Jb9QvH5ju8YrotYqLxhwCR4cQ5rWAqRJbjY7VMTha2abvueLRdyfoNZkbZnGZk6DEHjzjdvaeKGinQ9EuWmS9wb",
  "key35": "63inUxNhHvseUpTLVyjZKfN25Mo9VJYTRv9UjX8KkbPNk3BG33LLAJ6MqPfKTTqFSEQqx2UfFtJmJYpimEoGP3iX",
  "key36": "58H5ddNC8PBukjeapv7bQ5tNiAeeKYcYqwe48mxMY2jTCngSe5MAUMqdjFmCawnABp9fQUrMBLDqymsaMAriLXod",
  "key37": "3qswbxazV3vxLzPNg7m7EmddiRRKdvYjeaSsW77t6K1hivVe36iyYQaUD5Pzf3cYmRRQJCpK2N3AT1p2ktDHzgSy",
  "key38": "CRXJ4NtKJU9TtGALPJvxXcu9nqH8qF6yaW4t51nApYiY8Dnm7EiXUNQw59FBzY3bATKSDeDbwpTXH1Y7ZpA5LSe",
  "key39": "4adFM9Riwe9xa8PbAy9KJUWDA5cbVPt2x5ahAfPRYjS1HQjWFawLsdqWT5T8Pw72WeEHMnxKR73r915dTDcHPBKT",
  "key40": "gjjLt1Hm4sEHCePeGQCS4dYaprcQd9SVn2N13xdehdmU8hxWvai9kJfmDGJdGTizbV8QiWxXgNHUVaMWgKGQ9AW",
  "key41": "5851N2fSnFc5u7F8Du3n2HD4zh54DvaZXuJ9e2kF8LqLwNLmHChMW3CzhFUhkdN5pTqVVm1c4XiPqyjSWS5XyN5Z",
  "key42": "K72vCbVpvDhjWa1WTvtVxv6krn4rBrw3bdndLDHMT57rPFBsubV91KR14i9hsvNDVNpwKDMbRrH7PzmK6Uy9NKh",
  "key43": "5vVFuiJNYdmPt4npUQU1EccxzD7X3sFCh7Kw39YsNM3pUqyqS6QJYw4rArnBq9emLQU25QJzryXeS2W8Vm68hkPs",
  "key44": "4o3Np13fJmarmev67QACiqhqSUDiEMYrnuNcXpEgx1zucDAcNwf5Sq4WZCg7wSnTYnnrgNZ7z5jLUQWak6T9RQUm",
  "key45": "34qMDde1dFJaJfEtR7t1FoDfAHWQfLPdVaoo8CiUjRjM12XY2bzWX31LmCnX7cXFJsBgdD1TNq4Mk8URxrK6kxeh",
  "key46": "4oAS13xUETsnsr8MhFGPsKmDgGdqG1dyrs7Zocq9JUAENQqtjXgGjimyxsunPNdniRpC7mHDkPjiWwVQVHzhTghi",
  "key47": "2TTJFVxtyL5L9AbGdXExoNtosQbJN3ERVrGvEoiShBc8dcjMZG9qtfFBzcKMZt4ftqFQXAi1yT9fMwLGcZrb53HW",
  "key48": "4ES8p9z4WmuQUGNMkioTEhxMne8WZDnx9Fw3XWuftVEGv5F5vrzfyjYiDzgVEn9rKzHcTxhGAL66SmS1bzchf19z",
  "key49": "43hhH27RB36HzjDfExqKSjhqCXZvU5V63KQD2kpQCBRZhnY5CrWXrvvY9fYrLq8TtXtQh24Yf1eauMyojE488EP1"
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
