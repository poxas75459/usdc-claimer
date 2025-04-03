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
    "4pgrVjratEjoSmQ7RwBX9pRQqnfDp8f8GHtiLU1nCnpfpN7zFibkcTfq9gLXv5VkoEpaK9Gj9S3sdfopLups4wsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43B8T1udjfuVLqxcEtMyViQwt9z5e5abKsKj91hHDTLVwJ82UVpZTbhrg95UV6iPTi1uV4Aato6ZEo7UYXEUM5XX",
  "key1": "5JHewrKBFdNhwQ3F7zAPAvVUyJ5uttv1m4QeLejH9ZkyLE63okp1edpJBEbU1ULsmRvP6z3Y7FZw2TEXKUagP4FE",
  "key2": "4ftSv31Y9u5buov5JNcy26s5v9AFUzSHndADaVX5zDZNgJWpzAXA9ZhmP7q9GMvBSu1jbqEs9E7H5DuKSMXKqfxN",
  "key3": "3ZZs2qV7T7ykactfTLnfA72eJNMG7mdfYT2mwYWFsvRAo23wDTz1bmN9zcUy2DJm9BkCiiPUMCq3gUJJQ6S5vqUW",
  "key4": "5MMgnFwG3JN2fFy14ggf3VVA6Crr9jwdqvFQZWctbBhJWoKAaAHFpscaMfTG2EEbKAHBSw1M7bY2ey2Ax8d1VLo",
  "key5": "5txx8sFZQzLRErPoDNk5GJb17naji31DGzTCBeJjvnDvdz9uv25R6Z9LodhymF8Whr4EwpbQnueXfaBjhgg8HLvZ",
  "key6": "5keDqxiDNaHjxvJwGc4nmwcwpzHafVh6hxCWeF2Fbnf18kKT4sMeVnZoguq92seA2x62oT7cBhzah3tE6yaApKCt",
  "key7": "3iNmNaGmh7X2wAKvxkbdUA3big6c5CmQngj8GrnFSrheY6kVMFm2qfTuR83pt5mF3EyZmraLptMy5GoX1ReqFjDJ",
  "key8": "46ztxE3LwJzwwxJXsbUFL2cPJRh8mbCA6JiBbShTcYHw9PTe4uiuQWUMkdffj6kZ4Pf9hV6LndQnca5Dwykx81wQ",
  "key9": "2FkLxBjAf3jyuPRz4gsYbccEMRufjBTocKTaGoFJaPRz9Pit5CNppySLHpA44wkZ9xGZYcya5o3GMyYN9GQeQ6gW",
  "key10": "pCaDw7JZRdgtaSKgreqtCeMMnUeTL8NSiQBpvyyjVm7Mi9fajZBby5uAgmjoFhdK6bUFBLH6qZekZaXGUCwkNHD",
  "key11": "4eW6Zr4qgwSb9wKhu952dG8GYQ2Ez726Gn8X81dVKACJJnrAe6gHub9BZ8mRhyyzEnqihUfvYLwvBuRB6icfteps",
  "key12": "2FviPmmY5kMQsK7TTbjy7Mobw7xFdwChJaNo4sx34BLayW79bvtg4L5UeGYucpNwZtVHttW2DVtjLPdUyuDSAdB7",
  "key13": "21cf2xmTtwaFzirhZwxmeHgfeXyj6mWBtK3D6FzXe1JQ9ojpjXfdaxPTu29FSBSEzzzvKbZXUHrQnp6d7njUZzuH",
  "key14": "49zqy7bv7fdTv6d7wR568WFy8baZ8gZGsn7bR1r6iczBHU7QFZftS33osftSBQdSdtX9RuA2nw4JhMsyKSWnEc2o",
  "key15": "2QMZ4EZ7q8wS9XEtwLrBcPCLvXFASrwg5gr5EBJdLWiQzoqb3rqjdxqEmaFsHSuvTApSwsXQ5e6UPEGdENhea4qQ",
  "key16": "3NAacLHeFutwtyZUTxJWofTi2tmUWqiAf9BasA6rD83EzfRSaXPThAVBAQJTaFbx7X4ZFSmAtU8HJKmzZEme9c8T",
  "key17": "2U7nUAGswMPvnuE7zHT6SHrF9GaSu99xNsnJwcLzhvQDwnLdwcttfBmHTcN5ShpaKWjsy4VGMm6J8y4C9QpuZvMo",
  "key18": "3vbz6BPv82cxKWdssE4DqHCZWdsquNn72c8FTPBCke9N3gJQLkVyVKy2m3sq4hqUPCpaPNheJkNnwjLhyEbM5YbY",
  "key19": "4PHCWFVYhMQoPbHqCJ9XrEXS8pohYhE7KzTDqnNxiQiDpwozYANDMyFfPhysWdMrsjVLCAk58PfMDzvyGLZRxMqR",
  "key20": "3UCnnvwL2FfxhjF4WaPYUqMokfr2acp1j7uGTH9RSrKrvvcByz3uQnTT1xQGq6MFZxim9EahCJCiQ1paPAo1FtjZ",
  "key21": "32bxEucdfNipfVh1v1e7U417v987LzEyMxSBj1xV13nQtaK2wfjELbYDPRGHpY2xLR5cpMuc8FHEppoCUWaKuEZ6",
  "key22": "5fqhSyaHt8QtDhR1HQQFohjuqdJ7RiwL2kLoodmrHWB5UpYpsuSU36V2DJEuWZsMNk9sVc41seBTLqrLwAnhJi1u",
  "key23": "3PmBrXmHCVNLV1c8En4hHQvRnb4uRFQJDUfAmH1P5ydM2vU9EjM2Lt5xBoJnAZXe61GUotVvUK439oVzoHS1Emp8",
  "key24": "24vKpBhX4Kpxuk4jejesNs3hbndx2csvWz9dDionTs7jhdKeoyKABh1Ldh9JGwuAqt8uSTA5taWnFBKf5NUQfuUP",
  "key25": "52mButyNBthAyRHTEU2KzvGWFYToz8gkCMxHznUoCKMBhrmMDzt47KasFbQVLPRn6H6XFe4KUwJ4FEMJ8s1oRMmz",
  "key26": "4x6muvVWAhJ4GMUnVkBeS7YS4jijqCVPrYnc7GL5e6x7aZgWEyWRHzy7TqjckTeN3nGpFp5xNJMcSYDEnHE1kssA",
  "key27": "3MPueoNm2EdygZqYck2F3KdrTFJua57BK8UvwZ2BoF2YaLuBxZGZaZMmEbcmtD9R8HD4wMa62wxqr1J5scXEHPhx",
  "key28": "2a6Dsy3U748YE3oMjtAASo2Cxe3b63q7CScdDZHEcQvazwWspRVHMczYMTGB55Mrd6PFYcuPrVB9HkwthMwam5Xw",
  "key29": "5pL2LG7faEGRLdydm5LQxZnbM1W5Htag23V5mDVzBUDa1aamb57cnHSHX4eRHrLttu7PdLwnzThBPzL7DxJ9vdGV",
  "key30": "4SPHjKEr5bRKuwb7yNS1hCWXhmoVZHGcZE5cn5YtMz1ZNTsMnd7CG7puoB4Dp3xrJ3x6Jm15r84GdwmxZaVNfUNT",
  "key31": "4CE1pdeXwnYsMVoK4xToiTx9ruhRJHJqgBRVsMgLhEnTp1CmhyK9jVwrFLbCkQqQ8QbA9nZSrhs7sxJmMfXRS7dv",
  "key32": "6FthARYia9QzA1tP6NpctR4fUrJVy5c9W8WXLEKHm97sXhain5ZXbAArZZPbZomAKMjCzQxDRsRxutyuquqY4bX",
  "key33": "2v8BR3hNB99qfWrbKWhyRp4g9vqoUkKtHAwkyobzHHpTWmaeyQKmVwRFMxBpuLPFSHQE1W77HRBdSr5WXdSogsuv",
  "key34": "3a9xPDsu9nFBX4gZG2qfbJ2RJUYfZjWBJSTqBkCFxVy8a1aJCyxBjMp6gCa7TpbVPQ3tnZHbLtPfjgPQS8V5D5QZ",
  "key35": "H6VHYpCUmzr73JEsQNWTBuYyiWK6y2zypWthvfzaN4LTh4wgp2JYU1wRhwk1Z1EjeR4scV9pZBp646aUH7qfdv9",
  "key36": "3NmbYC6W5W3jUHXcLh9copVogj7Z7SpZVqfS66jSTULHFbrZJoVegNVv9gpFnPmtx8KBNLZnpSMEmTAvGyjaHp6D",
  "key37": "5rnuL3uHLQ8szRP3de5ZgPp9Ay3fxkM6Np3zkriZo7znEc8QZEBRyLkjXSqkvkUouidMjhrS9vJC3kg3s3KaJou5"
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
