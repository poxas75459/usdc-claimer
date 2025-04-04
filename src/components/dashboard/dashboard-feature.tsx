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
    "UTTHMNfYYnXAZCcyC8yJVEUFc1AP565sWJu76x1PJiQVV3dWSkV4oxrTvkJEkERW4RRmYinu4fb3MR9EoMTS83x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPNwFQv5B6jjuEfEULotNECvBw2Zt5LdwP8UGNSr7K92xqj5qxG45ttCpnego8o8AYXXijiGsift3kncG5eLVA7",
  "key1": "5fiybBpbdHkuE3WREjUHHj7exo5DWnRdVEEhc9vMrpmCHh4Wq6xumZACCdrF5kKjpgxfsg5JVoYyo64o4Q9JWnqn",
  "key2": "41mviunXyCgW8wX1zL8efkLeoMJBtg2w2rDNhvnpsWiS1Rgn2Sh9c7usfmtRnRzSthMpXoJCfp3avuokc3hxpo9o",
  "key3": "WPdaQ13U4fiYDKUFbKuosEXE6begHvXrfEp8u9fqWQwsZqNKid4xyemxcrTiNETGR3i9KcupvLvwmy3mxRNFgjm",
  "key4": "b1GxHqrPTKeaVvwkwDZJTYwep97Ch7rhzf3NU1xpv9Te9cMjd18PnLQTN9SWLRX4p1E1vipydRM2KoTbwn6e5UY",
  "key5": "51GkktgSGgjeiLSeS7EHVQj4zuK1nyY8uiHph7XwMCJZnYVj1hBmVrFnF4azWABUadrY895TunJ9LeyFB3ES3eQ1",
  "key6": "2rABvLcJyuvHvU2G6JkMLxoZnKjn4Lp4gpT4Lq6wMaE3nZTD7ySaRrLwG6yKQAjKvhh5AbVha2h2VMyBdoTYFhtE",
  "key7": "ZV5GJJYNRNrfU1u5qpTP5pDcNhcXzja9nKwxMPg8fJ98TaN9Mx8fBNSS96w4wj165BTLStrPCDFWtujSBo38tjY",
  "key8": "4BzJ4m5p33kP8wJbJKHwUmsF79QQKDGQWxUfZXQRWTM5xPjkVFyye4uv1yfpkqh5fLafRi4SJQLbiP7gowGexMvJ",
  "key9": "jUFfXpowkw81KMuzRHwg7TtxkRDbmSjPviN4YbLznpwy3tu7xLjy9jZjxcRU7YHXrzNLcUM3yJ2K5rPeXtX3YHm",
  "key10": "3ygk379nuS3iRdYJitpEKbkaBznXYWqDEboaKJ8b41CWrW8SriGqt4eLRGN3juNRBoyi3Jbvadw2SqH67wPnSYE4",
  "key11": "qeL9wYNPR7SXjrMkwUAaHfnHDBTXeMBDatox3Jh67fwf7V8znk9ksGqRnMnCsr2mZM5zE1V3PvsQsvNikeaF8Fm",
  "key12": "d22rquVibSeRbajaR2TX6KxTdDtQWGeXmKqfDrMrTumcbYa1Gawtj4n4XD7XL495m8RKRS3ErVxXKc4D17VPFY5",
  "key13": "iy3FypBhct7WhKZcwa5LUpxoSw2oKAjcgLtuDCzVAEwu4vRrLH7MyZgcKpTgm1CvrgneQFHQcPPfiKuupux4Rtt",
  "key14": "41FE4XaBCVSCE1aWBjh4zNQwspZqCNQxV4XjRqhCvZWY1cjEomUhq4hutGEvH8fwUyEwqftLhdFTSfmSkefFpPim",
  "key15": "3HX9N9Yjkny6XQkDzrnhU8MBMxfmusxFeSJrpm5V35RpYLbyKYUxNMut2ThfRGwkrfjF7m5t8u7DyBygLHsRueWg",
  "key16": "5UGmaUarQAVEj4KQaSedHLsGUUPNfubdZrhWqT9csWQEP67jKYQ8dEydpxcMmudfMxtdsYpZJ8cuuDbtBUz9gnT1",
  "key17": "T41zk7wx81gZMo37YXTduvKuTTd2HRVhG4nXty85qXmQKTq968UMS4ongikyiAERuDK7gChsoHMdBMYEyRdC68g",
  "key18": "2jWMcZUEd7PTfqvrTwB3fPgi5ppmYtn91r4MbxbFvxr1BcuTUzQfp4HN3GQJtMo6MgTnT213jFjzfj3mQcGQo6Qf",
  "key19": "5PhJzwNBQKAMJCVpchwx6QWPQvonat8LR6JEL2Qy8jTWx8i11AW7Y7NsHgmaARj7rqDFsW3PjRjMKfsVuG1ZCvGT",
  "key20": "hToqcgVJujGzKpxS2cvDv3FMXphGC75sqmMbWBNYtnret5oSmhNqRphL9EH67x9Rts42u8z1xuqnzHWpM2oc57V",
  "key21": "63Afx8ZtZ7QDYUp3vAsdhiBrBgqykWzoXPUtUcL4cjrthHmADjhoUzgXSXey6JwVf2z3mSBJX5EXDhCkKVAaUY7C",
  "key22": "WbLv8YxNPjPrdT1bB7LaAgzkzxhDaNUTrdxeeqH4iWqewfLH4Gfdhk2P6jEHffgo7CDiw8pWK7SFeRXnCNndKVD",
  "key23": "5YuPuFLvTrz9eX6udYcmgXvaM5zqtmLtrApdAiX6PDQ55caMTsheviUS7MpMjiG3ZVF7YvR8z7NwVX9n5mqcsg7X",
  "key24": "3qs54gaabaMxwpRxM4rzUzka4dvEsHD3zoaJdD3HdTNBepv81mN9BCKsiEBrVKt96BYsomAPmDa3gyc2hqeazLYJ",
  "key25": "3RXaUc5kkwbNEnbDCcpsSY9fMp7hiTr7bfpRejmmnfD74Mzd5HjLf5anpCcMbrQ7NojC1braiAQJ3cAVSEWUcYkJ",
  "key26": "ArTwM4TDaQeSuBLhY7qeZwXnQw14Q8pFu3q3dxj1fsuMR3BoijNGpskMUu68GUngg3hW25yv9p7tmjvppupGjhX",
  "key27": "4sXqb3Hg79P6guT9mjnVBkrGXq9FBSmPnR5Z2rfou6AFRc3uMSgsjnTTANbtid4H5EkV23A3uMYvebYkHeftYL5S",
  "key28": "35LDesaTpnCHTHZVGbNcSQoFS1jMna7u7eqC2HR36WCXMQWUukLBUATfNbR1EXFrSuQSpGQ2uXqed2CAUvGXzmxf",
  "key29": "5q2s2wfHfsAoFCTeg4mxD4hXcjh57ADiH8r72W55L1i8eiCJfamyCiNGigzMG7QFmpzjufTe5ieYzykCtoFbmtAD",
  "key30": "5ynZ9M7mHoCq6uGWnMk9kaGdUScwTxmAMNDJ2hALN21EEAfSHQiQjqb3A8rTUq8TwGXeTgXAHAMUmD7jM34XKtLu",
  "key31": "LxPG758m2C5qyGsMqmVpuzJ4hQK6xr2x2sHKtKpk2wY1srrmdrEQq79uvpogsPLrjwDDCyFWbBxxsTt3UDJmPqT",
  "key32": "5wYRjVVSTt6LqVE3nWCAFWc9RYrHugqFQvV4FNJWTUqSZVxsCDoDqDcybDywujUWxNSLXArSorjXVtX89jUS7dnm",
  "key33": "4K4BTfVtrJXMweZ4aQCtQ5Fx6VSdRFYoeTeQCRKfbJ5VDsUGoqLF6fkwB3ihahEN8MJxhp4yK6tiM63Bgdf3GDdg",
  "key34": "hfDpAAwivuneewetdfMdgCoHordZ8T2LWsktaQ6LFunNbhVgkKUYQkSybqozatv53jAcSB6wV2BnFkBz2EdNp6C",
  "key35": "5ZhXdisFqvrxNoDdhvuUQiUQE3y3CKu34hrpMZzc4Bn6Qai4hF7daXFXqSamT2fqvKRPawE2TwE83QJv9jctGEgS",
  "key36": "2YHTUMMyakZc33KZGsQw4dQw28XzD5unmWUFoRSxNqtKcJ1QCeUt64oq1rcBRqGKJgW5qiJgkfSqMXdvYcbJX8Sf",
  "key37": "8sWnJmnpU4uGpVzzAFxA7LMz79DXxD3KBSCRSEYUrAyezMdLxeqcAQ1bsy8DkPsJdKYXYEaSR4ZHr1XiQK5qD36",
  "key38": "3Efniwd4jQQGpTGd5QPsmafnJMX7Naodsy3vRArxwdazuYvtuVp5rLXt5Rx1qHEGmFa2rsEuXPNhw3struMHsbPL",
  "key39": "5jiRRZA1qBkXC5Z4vTMGCfQn4spHcbFMLTTHnFcdibJvWnstYUbkxwa8d85gCpihkScWkm7PE2W4gEwtpjZVp2cS",
  "key40": "mr2qHz8yB2EuP66M85ssvPS7m3rSF1fjbQRFiaE4jtfCyezECwX5ZjwSXEK5UBGFuKK2ZJEby3moeSsHdU8JDBN",
  "key41": "2S9ofJxZcxY7nKDi7dgk8kitPxQvtgFCGr1C9k4bKNPcCoq4gP4nCcT3U8E7pvK4KHTQqvQomNUteBY1gjNjJgHp",
  "key42": "64RhX4DsZWdKWMJykjD7zN4tvaiTegw2s9oUFhgg2WLw1XrAyxbqtUP6QGddemvkUP2zZCEcJSp5KuxRcH5CFGzb",
  "key43": "2C9XoujTSosL9sThfNT42qVok2MX4dKyT4qzAmyBKWUFnv3Wi4iaBSWssSs7VHCc8Eo89TCcaBVVc1J2V9aACAnH"
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
