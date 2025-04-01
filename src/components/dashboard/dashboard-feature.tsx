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
    "iiC7ea1rAanJrJBCJKwF2RjmeoRZuaX3CssnHChAST8CradeTp9q9M6jyVShrG1kPLZGzTayaCAJYJpfmWDonBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ch2TRm4kaKw2XJ4zMVVcaRqX85nVRyEtRoQtSoJpbokoy9P5AZzth1P34GUC9XKGrvg7Ryu2u1KiJbRyc3VEWq",
  "key1": "4RS58hcTTi3jCvzefBvsUyChJC3goP2S2L9bcoCeKgRhSym1zHzTSXV1rgh9EPnrCAC5qdcnY3sFn73cWbPBa8T",
  "key2": "5tJ7ATs3bL6n77BEtXimWVLscPktRqTmhC33QkaHtjFJguvHKiiNnGMvxTAtsmY6fB9D57gUaRuKeHA5X1aHmsg5",
  "key3": "MKZEyPXXqshE4t2mjARdX1sdwFpMhe6bdpdQDxCK8Cp4aRogfQ7PtbP7S54pCK8yVKmZCXbN1zAh696DHJNuAxr",
  "key4": "3C5ek5eY54ma6uW72amx5nPzjmvTimpHmsdJdea2kTfjJ4SDjbMuqvnT6k8tBKHucQEucPYcWdyvv8U3EQp62gvf",
  "key5": "3SwhUtWWGF4VD1DbC6kzStdDSDYjMbU2HuagCFg5Nd2FRGEmMxFmukA5AxQPgYENKJAwXbVtxGF4GDe4SNd76GxN",
  "key6": "5pktvexDnWr814hRPGneW1ZzgsYtp9P1PeWfwuYD7p1s58qodoEjarraz8wUrc3RZJ7qQp3N8KqD3iPstUnFfmnV",
  "key7": "4JidmrfZDbWffhwY3Gvn5vZuiYUgMzLaY5gYKYKq3G8DoU9mE8bnz7fa8krYeBvecUbFYbdAqz2swiwY78KwPu8c",
  "key8": "3yDnhTG7dTkgDsVABN33a56aiWNhPAvSmWBHoFPReaqBYmmW2R8xMjK12x5rwt2yERzYfJ4TSApvqEEYbaJ5XcYR",
  "key9": "jFM2k6JLdjWR4L68Npc8G2bY8hDK8tohmehUB2FqCBJSDfb78QHbT9sZfaZjPus7tHCt2oR7gWE9twKrdTRfupM",
  "key10": "3M5KaianNFWguef4Sr6Ncz9D8xFEYKu8Qn3Ywwi5hMiAk72hBKKp5VGwMuBHL4kkygKWyNWiCXy8uPtPv9paavJN",
  "key11": "oRppBBWkLa1z4JYGGATSMW3Bfg5sjKTtmGPZZbD2dx5KaaUj8pzTLVWs5LisEk76azV8gRnehfR5GA7yfuhmhV5",
  "key12": "56bCW1tHYUWL34cvrWSXSYhawwSn1V5dxxRLsG8ot4aGvggGYPvTakFV7cMaSJkQRHMz71DG6fJsNKXYwy9iHDpz",
  "key13": "231YbngSq2zyu1Eq8R26q4t8x25PxunXHYLEYq9Ru62Xk9XuyVybtDtFPrZjnHFcwRGU4L3nyKu5j7zoj6sWqZxt",
  "key14": "2q2WAbAgr1dcf8aRQUrDEEiJZEs7RKW2sELPw9a4u4BszjSpq8xQd6TrSihpJ8iHTWKkvYAsjNhPGzNRvoYbVJQN",
  "key15": "4UTk5GE7n86ihtRABXsythFgm1BR6NV54BBYH45ZqP9eU5a15AQZa8Bb4gAEqFAgy5gQbEUrXRN8pDXkBrPxMrKj",
  "key16": "51vJHopiUj6o5rdWdDPn8w5T5x8pRh74bxMT6NH71Fisk4GqF59memo2eVsTHjzcqft1T42TsDtJDpPszDryt6A",
  "key17": "2jTNzTkKFzjwaQef95W1ud6wc6AvKLAvnLxHNxvQddnyEFpBay64LtvknHF6S5DUqdnHf1ekpZ8KGVb4KnH6sPJP",
  "key18": "4HSQf4Dvtr9jAUCrrRZcDa6o5jwjvwHB8cbA8gULzEzZphCsSNGxEUES8Xob1DhSdw3UUJg234rkJ4UZ9q9wWsDC",
  "key19": "3hdC22XWdrWatZ4iqALmYW3vTK88t9HBFpQT1k8JSvSiuaw88AjupXaNJ3NdnbqnKizCBk8x39RfNaMJxBzstU1E",
  "key20": "vXEHJ6fV4KrbzEq8GRkXX8uWH16zYLcxREFH4HERyKy3z72DpFg1Crr9svRm4t6vN5XcaVvKouPujNMG2tjnRyX",
  "key21": "4yWK3GTF3ptkxuLbXP6bNkLYebniF9eCQsXBqmJoLRz8HLVFxXAFkR2yPaXkrMC93AAxrJ8ZKBpouPb6oZwx958s",
  "key22": "2J5nF6126LXY5VVVcYthYQDjc375qsecoYXxhSnr8WnnLv5imgPwqBBMLWpTSuaapLDqaWUqRLQkkCxgwpNZu5EQ",
  "key23": "5BZas3vNbtdz11YcgdDcmChZGMwVP6F7ESjnJNh225fkWVESewKF1S8TPFhZtyQAoZxJuwqmY4FzoyKKsCgwqkUb",
  "key24": "4ABQFSdDqF55PYQt9WfySVR8tqizjjnRZH5EVpvFy7ShJjx9qbSh9BwsDe8ahYpNqma1YakCYqknGAnrLwB4A82c",
  "key25": "nnR8hToYWxDywa9Yq1PqCp2WV3wWC9aJDXXEewJQqYVexvuPspDQnwRGYQfwBYVsdYUNcKtxVJDd9PL23NXQC3x",
  "key26": "276bMBVUREtZtpgpCUv5BH34ryVUMgP1zs6K5wz1JH5mhuB4QmfMnz3Ub39wZfNG324nZtL6vgmRgYZhkh9KA9NM",
  "key27": "646RVbgsSAqig1yUQh1Hdh8sWKWA3bS7NoVYbG7ijq3haQUK2r2r7y79GXuDEDF4NGkiBJU7uJzSgUYLzifBoKA4",
  "key28": "tSv7iDUFn6aqHBrvuKf4gKUAZFp8h7oJKgUbUoz1SwS8eHHSn6MT155ka2zbvBGrBw68ohs3GVZa1GpnVEnZDvf",
  "key29": "2q3owYJPfgAxVEuCh18Rc5VmTKPJXHSSiTBDS6oU1ZJsZrpJdqyna8bYtj3UZ7sCjW4SZojwUGBhFubxGbEV3CY1",
  "key30": "sa51m3YxNNRDyAjeiBBhCCpcpQNQRcUAM2F7Bp8EGiaZapbwho7wotezg4WfhXFTypAyMNfSC8zg2diV9wSCUTT",
  "key31": "3BHsiD8yEjGTxWwzuD3J1wfE98cqk91o5NHUbgvBJjyRVeL1qX97wRqYobhVESAVeuQMQamNvWj4bt9G1wXebuUL",
  "key32": "pUftxKgEZhfzEsFwLSGauGBUPYdx28a8kZ9diYHoAjLCNLghPZMztUfeACiXM2a8W45Nz9ZU52wEygZjd3PdtZ4",
  "key33": "3Y6ZE91beHzuWJDvLkZwRhcdxviL8VnxbfxaqKtgGDbxtfCpsyTtoHKkvy5YWFbaoQzP5nywCmy3HarYS3FZ5SVY",
  "key34": "oE6dAZZkYVuUcTGJEaNuF8TcxszqAWMxgkSf55KCzEM7AYX6e87J3tWYd2smrCXeULBfVMy7yVRGfYPmDsQyvb8",
  "key35": "5cBTXMq1GyzMPrnZctZ6zHtT2VboW4Zdy3noLBLArUULVLyRxmWqsR8rEkJoeSKfmt9DVLLMsfqdCuzbPiSGABae",
  "key36": "3kscDugqfGhM4PUAJLTbseU9wyuR9m1oyZgFGB4bDpgc944wvCi1Y9t7qwg1VgDnJrfvzvDYyCqpJmybg1gPtZik",
  "key37": "QFtM2dWqgyhJEwUdkxCivCXtbMtTRswD2Fi3KFS8M5yj9UnBeqU6Te6ncvK4BDsWvs9nsfysnwickckm6fkAaik",
  "key38": "5DBSaTRLkKnE4pBSXjx1apfvad6FxdxCt3o1qtWpoHumrSLfnDqMeZZUj3FsQinEYpKq2nRcwAJqqDgc9kUptMFd",
  "key39": "iP9uft7y6iFoxuaicxM1fLPUBDF1hQEARP6CHZKKmuCpW1vnpLo5GaBvRmtDePHWLQ8x9Jj24um7AAgAzg7UVvc",
  "key40": "47wtVGTkV7YiEtN6BgML6dkQ8RvavFkCZawDoXvJTs9fS5YLTxsTkLF3af2BV7RJGJQ3K66QrrcTAmMm8Ufoa46P",
  "key41": "3SXpLsiYfirpQ7213fUjCF9VFYPZ63ALwwo1Er24SbtGEgxU3ymHNYV7FxfvmJnvJG7Q4YP5gMkDTiqAiphFj8MM",
  "key42": "X3QPdmMunwpQZ5LDdQTDX9cymZVRTqfNq9Y4EBZbd4yurHVjvcmmvXBKPZJthdW7M3z96ZHGgwu6eQnhNfm4F29",
  "key43": "4PrZ8rZwmTWQXez1DBPF8mRjnWHgKc5pV88hkkRXvX4hrHUK68dcLfTk2oDR2F2sYLjP52ke8yihaiVw41pm7sXC",
  "key44": "28SGsa6vTodsWFwnVfJ3oGdSkJbZbDguXyDRGLvQq7sS8FUNM6fjds1ff1MV15TLoQTsmzKDcscc3KxAPzfLfJoB"
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
