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
    "of6nhPboracvZWWHdNB39yUS6NRvgd1yzRFL5Bm17rwvZLSMXkFd9LARrW2VRHf16FxTFjEJutGiozW5uPEJxJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eERNxXVu9LadZeNK2LNADyQJxRs3Vb3TynrLYXfD5hucYAbzLvX2CPPHAVpqmopFuFXiJAbVQeXBbqRKjyavzUj",
  "key1": "2AKhu4pS5pTtAwyVR8La4zQf7JmAJDyFPXb3suwm2zWyeQQmdgwPieDjv3QuZRZdpCCcAhSV8CbkSJ78CyTCJU1H",
  "key2": "4ECp8S27DpFD6ZoqpPEKrPR1Wup47fkk7bCVBcMmjCFXbCDNsy5P3M79msNdSMcZepw7LLarQEpWqv2KjE7qCmS8",
  "key3": "5zgT5hgHdQ7w8nRppnpi5sZnAWZPA547y3rafuhC4BvqjRkshenhMHFMbDYePeHG7kduqUgZjiZ4HBeUdpgpgZqc",
  "key4": "Rp4dMh9YVDpepBcFoZBV4sw7UPVFceG9K9P61zUKgcVUoKo2HLdWqNY9D55TSfhBJzMjXcMr7pd9CmFS4JCU3L6",
  "key5": "4QcJRShZrnHPMVQaVBdthXrLFbPb2d9F5gyU6td1LFfvpHxG2iaFg2f78CSwoYcUejhLqeWWnda7q82o7Xrz6AZn",
  "key6": "46YU8ZMkqfFyby2QgHBBcM6bcJvZwGsj8jkW5AHPMceastKUSU8Satvu2vneSq64rB7SzSywEfWNv4wu267hwn6Y",
  "key7": "4SHEVwqxoKFHHi3sP7h1zg6cYjiJheyeShxygW9MEoY6BzkZQwXHwHzyh5mFt8xZbpzv2uqyKZiUHSichqCmU1eZ",
  "key8": "oLHq8eNsaynK3sEdMaLLrkyj1Aba1cSvY1rBNFTTutiZVz6WZ3kzebEf9ouF3CJMpaU4vDNPM5mpoxciXYRvYph",
  "key9": "3DJ6rGK6yrCLKw8n5aXJiPepxzBZqZPCUrWerwKkaniRFN4A6QkvK3kH6Fz3ky7DFPJe3zozAyTt4rVD7PZsPwc9",
  "key10": "CE8b9gHU6jVTDQmsX45cqgZJMW6rp1eroy1sMJ4urkKW6CdE5qBq53ewfF6BXLD7oRqV5snaJgAHBA3T8xhjALV",
  "key11": "5JicvWHZYi1mNEfinhswTz8Kjx94a3CKJDW8e3fEoNN34kU7GVsfSmRiGLX5tMrWfHeZWvsLhhNwHasgZ8GW1B3L",
  "key12": "2gSeVvv8QySVa2nL2PXosauS5g9LDYkvNTpEQhFjGGREkFHCRt3xBQL9PGbJZPbq2ewnoDtUZfAJLQBv9jv9iuJS",
  "key13": "2wYpfgsGd28qUoQ1qK5B25pej2GSDmM2Aj4EAGnWWqjN4yTPxZbvrDb8m7wpTj7ScD99H6cCv8RwuBoWMHa1toQN",
  "key14": "643Lf29XUHcrgSrCtvXC5ESsMKh1KQ6hzrj2oEpGbeZwXg7igr3K75LyYHfL1oxHo3TpcX3dwmkB1x88u2aHMmhE",
  "key15": "2NbUiX8JvybLhLg7sn9znq8eus1LzDDvNMUivKkBS8QWAWZjEW4iVdKNb96jUDG2tpwRfaUaTtR8vBYR6PeFjaZQ",
  "key16": "5kVnPgRVWJAqW636DZaBMxHfLTmi84yidbmfTVb9AMTwhzUkPxrgAuY69jmTQAd9qLn1tG4BxgiVVRPXirbXvwsy",
  "key17": "4Vq7UhFjYZAxif6fjbjf3Fc1WsZp3v1DXCB8qrqRthMDAHXrMD1JNo698AefBb7spPSPevNE91347y71Ln3t1KQP",
  "key18": "2iVeP1jkiZp9F2xcU4tQcUg6a7JcyV7bp1sU7nhaaPJgw3cPtnrk2a8i2npRV96tnfdCEyUix5CbAsh6zxcuVfrv",
  "key19": "2krouJ4kGhQoEwo7qz31iSgU6hDr4mYmc619Dm68VEbTnzdNbq8UBzKGfgzvsKbw348ChnUnLXh9E3opXXdSnWfi",
  "key20": "29fGDfBzLzjebqXwasSkHu2KNCp1cjGhzXx8RnzWtUZrcMsy6DQagdGBLFm9gStDoFDYjgv9VDukJgPa3kchXcnp",
  "key21": "2tz41siZTMPFWNtDJGh8bhw6X4Yv867pFLETMUdLK7DggvZDQGb2yRuvqbLqwfhwsxwA6mNTJabD3TRRW1WaP86L",
  "key22": "4UVochiokkgoEP72XvmFzeMpvynFe2Ap1tyFmadXXqNUE1JGSQQVjwogvZR1cJPFWoJx3b94pNNeAm3N344kZ4bP",
  "key23": "4RHbAhnMWACzteuSWPLtmjcxXdQFwR3gP5SNbcVnLMnKKgKMZV6dbcPfXjeHpVZGnnMaq52AJbpRs1jDYfodDCwc",
  "key24": "41ioqrxRa2arykTPjBcqqxLoiiAsqWzFi5yX2zPY7EAc2p1TpUrfLaxixYLnogCpV9tc6waBvzMDjYaABmFmKnPX",
  "key25": "245LjNSmVxWae2Zx8KFGZSNe9bXJYQsYhQNLoakT8jzEreXhxLd5tQW3DCpyWWeVzCmD4MoV1J9xph7hxZuNJFHS",
  "key26": "2eVTA46YFxHCCyK7qGomPC7SfqDfAtCGqjzNmn9vcowfoRc7A8Hfn7tsRAQQdmaksHdfj37defYMUTFs62LkKN6h",
  "key27": "4DwwiAn4JbGFYhiU8F1k9q5VzKqJXRqVc8SaKK1Gc4L47UAzzQt3yqZUKjMiaDNGGm4NvKz4A1UndBb7VKRv7TJZ",
  "key28": "UQZX8J4j55ZGfgXtAFnRvj9HwdRdir9DpKiNSnJ3eMFNABWeDR4Bis5XQAd85hXU1u44cT7h86uAZJf2DJwMwEz",
  "key29": "2mMNmQZMpvLZoWefGP6GA1Z4zvB9umBE9nUq3W78yfffWNjZ7yh3EyXoHzTKKYNNRSKtf3mytdttXSzQocH2BnDS",
  "key30": "5wCuC2AEcJTYkCEphJcFLyXgvnfCYZ6Us7JzvNsihTQorAWXDjPeFzN5WPGNThD4Ypwa3T3X8Tro25pDEDMwoerB",
  "key31": "2nJw13LizRWYivKGxpPUWuNtYJSp8W2PCFKhPoLA9QMnXUbbLTVtRDp48azwXDMJquockXdM9BpXBNsmFkit4bj3",
  "key32": "54wakrnGfiLZ9GAwJy8BQ9HiPQYeNHsUaLANjxcVwHfwKi8caLgYcPrjMkHKZFLvaDSmkabmcjqXKeLjw7T7TMFM",
  "key33": "25jFPEgQXxGDYth8yFS9tdw39UHQCYWvRTydmdNrr9aYns54rXrtuzz4khiJQtTiKUacpKB6aXkwgtKobABzNGnC",
  "key34": "2VxzPX9Gwuf6aGDwCc7xybDukm21jie3RFKWY4kTp9ui3UdhSbhAk8wGa2cfFA1nK561Ua2gmmjUCoxWPrqBUaqd",
  "key35": "5UScqhXRb8H68QhrYwwV6k8Ku78BDCCCY4tySyGKxtFqNZ2U77GETAwaeUqaYFpS88r8gpcTcBcw2UHqiWBSnQg2",
  "key36": "5hPrbRQUKSuCUcJrwBZ7yeFa3ByqCtB3gAvSrb7JF1fa62prce5yvRoHq4FvKnrVheHZq5PUacpNvdp45z1L75Hr",
  "key37": "5Y61DHJEXujcFcGnBpVDMaQy2suxdBqKBEi86tt1ecJ7iv9WgwmoDsMCt8nZxM7rZFZVEuVB9Xob9XJT19ubKk3b",
  "key38": "5XhbggyJXCriGzuJW6r9jd53SddZb23Mx9Pj8LRyLDc1QuTK5o83DnsN9LyZNPh6zoRSXVg3p9UFPkkB3jPNCYMj"
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
