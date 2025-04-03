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
    "MN4Px2bxrmsgYeesHeUxMmGQakBizeUePSniq2xcTncMeW8y95rzTRDaz6aC4V6EFjepSvEDAnHZvfi5yfKoCbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2TdaqSXiPiTXdFB2rnpLxQzegWSPKCX6WTLYz5nEyrA9znyQhLR5HGwRUhsht4ntxXtXWu5k5QucknArZfN46d",
  "key1": "PHSejsUw5w7Ai4HDpiwMciopDiqgRA15RFh4KEkD6zxZrXXGpFpgp3pyUTpVLgVofjex87aKA8p1zkiqPP8mLBB",
  "key2": "4sfQeYbyKdW8tUqPUEe837BWMtkjBRh6nskv2odNzaCBszp35zvtDFpqXnj3vafnAvQqmwf536ca3LJWxQSRV41Z",
  "key3": "3djw7Y77QhWU8PYY963dgr2j4jw9z8BSt44w9fPueTGyoMaRRwfRuUGAdRjPookhVpgv2YPTzAqrcLtwR3MUb2a4",
  "key4": "4PBGnYDJDEcoV2At5fMzR5Mm7CxCywfr1rS7mGmVYd97xAdLnGXhgj8XjSC19BWBqRkTW9FmbNfL22ktD5CSdzVF",
  "key5": "4caUCPbHmq9jF2bBanL2uEyZsrhkeDzbyKHfJUJTEbouPAR5umhtbRQ1rKo7xKntjdCXpqMfUxL5ZrhsWqJmucPv",
  "key6": "2DfFuVaDcVVqigMuTVAGLNqzYWknUNX8QASR1bbLSim3nv8F2x2obEir4ZpUmaa5QmR3RkuT9GrQXQoEr8HhK3zC",
  "key7": "4gyedpuyhNqkXVaYCBvHnjdc8cm7quCEXjAxStVDqF8UNp5U1LHhyqU1NbmB9i8hHsSCTTBNxwtBusvZH8qzduvL",
  "key8": "3doSxT3ALmayZDD7NjMwN4GAutZzYP7DvdbHhHAkhwQ5oYgSEsF8yWvQXLXfNs42ZjjNyRAsKXX2Vxf97VMYbvVj",
  "key9": "5eoCfKZTwCXsx77fZ9fM91phqmiDMJg6ZNaXRbXFmctRi7qvVq7szqU1ifSc7YTGUwLe1kJb32Ap9eHR4WvXnNbw",
  "key10": "651fk6tADf3QyoS7jQW7QkPQN6UhvAVJvBFSfBJtsFEZCuc8L7h2HngWzDXJC86wr3xgcK7uxnQum7CYNfTCcLaj",
  "key11": "3n4YZm6qgPFrDDK7SG6TzBSLtT4Y3RQnNMcJkU4LAgQ8WJuNn4YWKozCMmwdx86NX9weXGuM5JqBUzqsKpeUpkRy",
  "key12": "5piFJfQHqLzDPNXAimE2dKsZSbthYGrwSXWSYCkz9zYcUrEdh2M1oKLUu5fTNtyqhB5SjBmL1qu8Jc3sLByHezP2",
  "key13": "5sacx5fLR5yBQmJpGzK1STwGr7LbonYAkSbzKxGwKhN7GvfShkEqpAx2eH5VAmL1AAMNiEkwT5QhmECKJijPaPVG",
  "key14": "23kqh6axCAauCC1bH2vp5DkCZfeZb9WEcVeH1cT5pfoCzy8fAPfRnD6h1QFyAxn7jDFNSU56BAQ2beuJJaC2R5tA",
  "key15": "5jGBAn1vhvBEMfJoCyFQx9HuTc79mxdkNQ5ANJtCgNadidvrAyDpeoDCsjiALEPjNrTbEevUbDo56p6DR3n7NvHM",
  "key16": "4ozJcqQw8phxQL9HSv5X52WSnQNgZ1RY3aXiATa5awTjSvDFBzaFcDhwCTax1UP6Sn3ptjrCzQ9PYVGRLD5YuzWF",
  "key17": "2bkcf1KjLfANyHXFQR96nuDJnELweV3SXzfbAqobNdb382XSiL5ozcPtGicLiA6WKTXJZG4T3SeB9kgVfGh9ZGKd",
  "key18": "3JLTRr996jFnXyt5shu1BGNz7X4KHmv44faBgiVaddaJSSFyKqdvWV4C9VgKgT9JPALEnBzzVYWbHqHWth9gUDaR",
  "key19": "4UXxpswmoPCjh3vdwz58HoFVt8Y7ozi4KrxqYm8CybgCzeRTCdSGdTLd8xu6Sv2PJtCB4e8DBq6fQRfYh2cK5XFs",
  "key20": "3hgsiHqpymhABNc4GwFYycEcEQktyCT1vgfprV9nHanqTZKemjjYEtqdr1J7zCsG3mEbMh5CZWbvK8mfB9m6hZbh",
  "key21": "22kjKx7PjF73mR9AB7uHoE9vvZT9fa8GmBcAWXoPwSfZf9H6Z58Vr7ZZmJckpkNvjfxFu5fUCHpDbpzHhUjQDrVL",
  "key22": "58oDMDPSVgVpWfVNKJe8d6yqthc44axz3pA4c5v5AoUgpm1eESE9dadHtXcMfw7iJMpshP5gDzPmhj2JdrekJZVV",
  "key23": "3nLriChWAhAfgQ4iaoLLL6F74BptRUyhUy4vFUcyrr8axdsZNgKRgH3XKVrAYUhQXyFoXCfAUgFYAS3gXYaEj2o8",
  "key24": "2fKBvW5xPTZtJDbgadHEMXmWq3LZHeuQPYLWWvtcPPsAAp5nXsEUeWT2GXm7bUACmfACASn6Rec1LTESamhsFaYT",
  "key25": "2H4VDZYMMZgeQUNKqJcAAhMqPRMxd2H4jFRPF6SbJsekfCJKxgGTJRyMiMyXwpimWnfAVKe8sFBCVR2KjWEsa3D5",
  "key26": "2ePcri4CrBya13Ptfgge7hKKjEH4xmEibMzdpdpd8ZFaBtMze4ZR8gRRKCGrUQp5Fv2CAWXcjnkY6FNqFEU4Vpgp",
  "key27": "4E8b3bhkSRUtck2KpE2BL68xh1rRVa89ywcmTyc5zSrpSYFRuJ95EV9HUPy41Gpyw4P9Uzb9MJMVZxtFRUF1NCAQ",
  "key28": "2t7N98tSop1yG7pwG6ZJK1FctMPHNY8sfJCwMqww9385cREwFsqRM8o1afKoE7XT6FEGgcBQcTrJXfLFpUDeZ5Sz",
  "key29": "3CtKHxY5x3KC7AoPzFnTpxWsGaCG9aHmd4w9DHZ4T4keFGy9VtCyQhNeHYW2kDhZHVNS3dpAUebpZTmtVrKemffB",
  "key30": "iXvUHdXEXmWxx6UaKDfE5LNv4Qs9x4ZHuB7dzNra6FA7JS8ubvmPniCZj5o334aieQBn135gMeHXEThK7VdakNk",
  "key31": "467u9HVrxNubMhHMYkJpxrNv7vdeFRYRQ1ZHbe17T6ReGe2S9hSoeH3nm6foBQ3VWr6nJyYmcYshGQVMpPsfdVmy",
  "key32": "2CSTz5rwABGL1S6cnToZzshftUxu83B99pDPY39GQ3UaahioyprRxB2YgNwh1eCckKFkgFgXNXadTkNJGdUEArPo",
  "key33": "boEECpuqxQ7JLxL9apMeivQEsRC5gSbuuMD4wo7KRVQd9ZVQx6o24QkVUTnAoGMYWKoS6LtJJriZTTVzRM3PMpj",
  "key34": "FVDvmFzbEzcj7ijFb55BdYfpFCgyjKiC58CpkfiAVjDMqut6aG8gQrTACYD6CeiBU2r2axKtRnBWKLT4CBxtuxg",
  "key35": "2xftPK5qRsbkF9yrc55MxxQAPaLY6Pk9xsktEVxJhDnwCJjrp7va2fEQWrF6ChLWZdAJ3KXTKSqQCuX1fbtoKs37",
  "key36": "2hLfSgW44J1TpCLSdf1pRbN3d31PoMc6kSU4L3e7KC2gtvD9N45WrkDQu9YzRNNfvTt55dxZFCRebjGTz1hjEg7W",
  "key37": "Mn5L38je9m8WBVJbuZqeFDzrJfKqqi2FHuuxbeMBqdmpByHWXyFhyfcuYoPwBsFC68J5zGBW9ZXh87VBEBZP44q",
  "key38": "4rrLME1ktGAjrhue12aN1WWEhXZsgWkyMATZ3NMmzyY93zQbTG9d2aFK1qjQaVvZ5i3W8XWzbmnnki7hu1pJpY8X",
  "key39": "38p1LZMco4L3hYstxSAzDrMA8XJ9e7omXdspso2fgrX8LKh5vJHnyAHN9sE1cwLeykApyjUtPrvePGK9SYKnHLgc",
  "key40": "5ZjnqHqsRUTrti3iuNaMVFUenfyyVQGszCBHbhfMfGZHEeJJ6kKfER5KXTQ3yRC3vVnQjqeCDXi6SxcPzTPDUcfq",
  "key41": "5saYYA8Tp7EVqZ1SvBRKbsjdYB292w8HhYM69QQm8T1WUwwgy9dy5PYvEGWJzygfeFjBKbnZvJDahCJkDww1nTPV",
  "key42": "5xUJA56UnYGpbWWasd8X5uVtmiWhhBXRSxWVKsyaioLVjgRq8bzHfrGBn7hWLP2VjL1wpoHxcP9NQuUL7K4JnWNV",
  "key43": "4WVpDMMq4WpqiQ7pERY175yWZtgRvVMTTHDgt2Nsr2vaWBpje1cjG8S9r3bbhBY2ZFwpqdT8k5Vgkn1p5RgDKn4K",
  "key44": "3NkoavnT3F7NRgiSnMLMv7ekvKUPkjXbHttMFuZE1atEJseyaZkrva9fMedzTnWHKfzA8wNw3kG5y3hD6UrYy5nZ",
  "key45": "5TG9FZQESdx57g9hVxe3evToucrozTMkZVF76gtAgQW1ivv1XAdNGt6G51gbudrY92QW4eMu24c8YBUxP6Fd67g"
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
