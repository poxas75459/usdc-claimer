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
    "4HNLeCKXBASRtQ4Pwcew2ZhfCDx47BLTemwtPdCo2Z6DnYjEFeNkJXHNkz5tkBxnbUcgGhaLTBrDDdqVGDzNSZSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCkD5H5YJmtSofThqujCXFjHwSDdyUQkEjBWtNTUaYYqTFPbLXNnyjBE97B3meFyqZt9aKNwTTkNEPmq9eFpQHF",
  "key1": "3cRfKei5uEjkTQEx3cNvrC3XBW9RDKqbySDKsec6HhE8xUNPvXFLue6ru82ppqCNW56XFQEB6gcfBrez4zofM55C",
  "key2": "tnr9nXaZSrGxdRmXmmQZokt3zC18twAs3xZooaVtcQetmoCNDnKndALH1ynoMFB1JzeBaWZjDHjsMhvWwFoTL6K",
  "key3": "9YjUbsAaPz17yCbPvHQfwD7me6xRcW6G66zBv6hFeyZtt3385YnJrzAeQbZrSBahZeVNR2gSVCdVPzwFCCieHTB",
  "key4": "25epmxhBPdLf5NfWyDDmmJMiTx52ertq4kQeNrWGbDL26WDKKnYmC4ZNwxG5mr9LC84P6ddiVTYUxWroLSBYekPx",
  "key5": "2zo5WRf9VRR9FR44ucWbmm6Ccu2Zdpkt143NXX6uMRLyjvLysHkEgtXPtX29AE1B25eVJKQrZN7GeyC4n6Luvw37",
  "key6": "LZVnkv59vHPP7pbnXUYwFcB2bRaghcbthnSkCpoVsSyfoSFcmcdyX2dgUcLP5phJsh2CMYEQuMG7TamtmaxYxbK",
  "key7": "3J4LzXQ87cSxADaKudVU9iLguKPQrem338VHRBs3DjAWaTQ3TPFy4VLDjUL3q6eBsaJYsGUQqKABpWqR9jRAy4S6",
  "key8": "3u8H72UYi6DjhwNDhxnDsnn4oxdhQtohAA2JjpSciw3ms6VYotjmWzkiKF1Nf9kdZVPk7HTmoQtv8xVU77qQcSkH",
  "key9": "3a6ZqEbS1GxH3a1t18BMRjsoZVpmSPQP6iXZtdJGe3VnTwu8Ldttmkvo1qVxfurXCRPYa1h7PHM7gV2FgfXJf1we",
  "key10": "49UqjCZ5QAwjhdm2em1Xq9gXrRSoeALEodZrWBZoRoFRZWcD2jCuiHYrFxP5FEouMACPXU87wnbGMEXPmRfTRgAp",
  "key11": "LQBf8EQBSQjWAveGkfJ6GXsRPXk8ptKi1SPwTJEWhUbCiW3AUXCMjTmQXeZhM9YiVrbABbt6FG5nRQtWxMSktLc",
  "key12": "4i8Q9damjyXjatQk6onNebjqreYDxVCZ3XDxLwtrLbXjD7fRPzpj7dgKxbDYSoHC5ikenhHe4toWbrDso2sRnz3L",
  "key13": "5ZdRCFZ9d7F7r6BEdaerRkN8TkCeDPWEK34He8c7RTezuiLihPjQkzV1SYRe4XWEJEA7aMDJr4rxWMpsxX2McNUP",
  "key14": "3PimGVVc27dHQ5MGT3L5yhjQ7cj3vLCzvVSLNPipLwcpzUVsNwDLo7KzFn2Gi9ZJkZt7u3k7WHfwyN6NgmYtLCmR",
  "key15": "9jWfkEMUup5ap65DQ8cEUeTDVAiFnoKuvGwAvNK48fDcRcnsJP4bAHG8rtuqgGeFAje13mzcpzmxQ7ZGamWQaEt",
  "key16": "VMV24TKKGczKyk6tKW9L5kqPaX64ZRTrkYUuwiUSKrUtucEHZY8XXkC4iYXASsD5B5prVZSCufPa8qFsSfcCxW6",
  "key17": "3hATWJPaE5qeX1WMbYYfwNjKLyZHwTbFjPBdPhj56aGuKPvegK1djTTNdG5p8RMm1CNrM4KMsccgMm7rdZGTiSbM",
  "key18": "5ooA264pdqduV2zQe6ZXS2c8TJcJxtELkSuQw6xXWgDYk1ww5WjiXr3hJ7jgTZvXzZHfRjG3u9QrpPL9vtQzw5Nn",
  "key19": "4h6SoxoEndE7QcS8xPr7efPeofsXCBPSd1uD2qRNy311rsyLwQgLv1BqrMTpPgBdxCaND849T5zWrS4CdjZdjtmd",
  "key20": "dwMFuUXdRGCvCE5ARJMiWjX1wBAJrfSzvC3PkbpJuqHAmwrMrdUyJZZT14whdrAG2pkqq9swf3RbmyBYF2Ce9VZ",
  "key21": "4sphaR19EqGafAHgyJ8ZxEJeB4xeJYT9vyUwWPfb5uNZ7AQ3zr3BsCNv25TkXBgH3LCzT9avCB6debuKJYYegpi2",
  "key22": "jXZStjJ6i7gxn4vVFHw5fAAstP2xn2PpR6GoHEskzqPtLUhdDDkZN4PK383Vi9z6DBoVuuUcXVru1Qrpv18uNDY",
  "key23": "5PPGD8r5mUdjVUa6si8hRSoxvo24Ue6M6P2zJkXCfkjuenZDmsEjQbmk9CHdg99KN5KPGRyShJYQjeG2WmYZWXyB",
  "key24": "24hPpwU2BkmmfFrQup2gR8Am6c9KRgvdyVCqMcrkMh8xiaAwtfrSzKZLa11BTbLxi7cmsr1MPtxUfgoPpgdpKyU9",
  "key25": "4MEUpvqP7JZ4zTDRKetw7HrYWd9pESxDmYpETVaApHpPppdsbf2cPgSEadnp5fAotnwqN42uYGfA5LZDQo5DNDtn",
  "key26": "2RhHAsxJhiWA8HGaEC2iKFWUomWpPzGDGkuuT6yiyxn2yNkZ5iTWFVfKypYu3evYha2fPkx4czL8sufqyAfJhL7f",
  "key27": "QAooJyryb2vjhcy4m5gm9EpErYfZ8Xc4a8egmYmv3VGeyJHq3PGVJx4o8JeqV8wvue3pe715pfB18TMZHDJmZqp",
  "key28": "4irz5EJpWrgQ4675HBbvQa4YnmxyjCWXEsUfywJUbxM4c24xBKxMmRojEx7UcEwQ2Qkxim4gYnQp9fWMwBjTQhjL",
  "key29": "3niD6yewNH8V3btXEu8pJqrVwDqw5iuomvV3CXLHPW3NrUG4aTCjdnHHFXPFhW1PS4iEgmEmHKMxtJyBk6w2rW9s",
  "key30": "5upcTYY3ZRVV2U3wqp4WCZyoezzxnxVYEQ3yUYpGJvthdnjM4GVD7ZpwV6qqoRoa4jnyFUrToNc1PKzHUTqn92wF",
  "key31": "47vdTSd6GWbsg5Fe9GAt1hvdmdxQyyZYi7qFJqSnmq5QiZix4NNQ5ua5H33jYTjicn4iXKtwKQSjRXSVGx9Fkzbn",
  "key32": "5oyuNHfcv9RMgEqnCiZMhjzxkyFbRGESLdTinyvsZuPiqHtTGgHFaFeTW3EFFV8FWbBWwDuj1zsDUuJmMhDqEeF8",
  "key33": "Wdn6F5qm5FXEmj4BseHPKQbZxLpfKSAqUW54zzNRFiUwvLMyEYcx2bto42GBxCXyovoEwv3Lq5ZooHk95zb1ksR",
  "key34": "3yihUGaY8V94qUbcLGa9KYBRPVuCrrt6diPhbmW28B3wVKn2vXJAA5sgCLn42xHn3vCfxpBLNtRYM7wYfFU91RS8",
  "key35": "2eUpWYRAR1n8eWoEJwUrQpwGb77R3gmvnKCGDREp7P2iTo4c53Vdn5DmPSH71MupGSY68vGG7HcdwQQyjLw2f9C8",
  "key36": "6BbU8soiLHFB4XoFqnRZaoSQjXvyS494Nj4ZptfRZonUazSD37JTRcN12b5W1rv8uPNxZCGSyPMLrHhLqgnUAEh",
  "key37": "3ZUJaxAfsGWMnwfSYcUWB8rPgUdHMUcjFdMANvUHbA4ac2fiXp3scS6PpWLeUMLD6M6wxWqPKMzrZSeCh5rZV3Mr",
  "key38": "3pnWEUd2wXRoCbJc1Je6gRTro8TUDHX9dinSRkFKEX7hZNW6bvvm8iz5cbQnmYRpqC8icvz3FukEFZRGDzw4JMfe",
  "key39": "3gKmttmweNxU9Y6Xv3HZLGiQBhU74Yehcrsn84BxuNHbiVyhRzx1iYfKtHWsJtm9G1C2cUXMjyvYALjZZ4CgYLmN",
  "key40": "3iDWzxZgd9Ddq5Nnc3qbZbgtVYb3H7UUxis9WqZTh2PmGJ7jmB8MpQSvSEAs4A67rTR9NyKAD8HfTevapcwa1dYF",
  "key41": "27oQn3vQpVjAaTwniXVf33UCTiUhKoKTCos1ytJUQn82fQKHiaPA5S8qE3UPwh8KcyS5wUK2oYpmG95NUodaT5vG",
  "key42": "5zhtEa3Rwi4Xhy46XF1XXt9AJcSd9b9zP2pxXgQyteRCSUt2yRPwQcbkbbZHMFcu39oSLUtCSrZ1QjWKkau2L1gP",
  "key43": "4PJMHHRuCJT62r132VFNm1AkFaPxYLBYsFSxTZMfgjvMAuXLU1KZxKWpFgTXM8SN6sNRA7v7myDcab98BkmdN2uj",
  "key44": "5GvanjUADEMapsLVBQ7rmbAiBxdEGXQuRR8DYwEE6ewZDnNo4gtwUH422jp3UeiKRvRZQPVu18kK1GKzhwEd9C79",
  "key45": "4k94UQzGzBKwfcFAeGrzkxEw9rVrMpWBQGa5nzQNwvLwCvvJ5New7LqmbSukTFMntYxX4ZESnfUGT1G8spUiF3F6",
  "key46": "548ZMFTSNY2Kh2JhkYWhKfGVmNU9gN7q2826PKJuDMjVu2wh8TYrWydUFWGMoqpLPN23HPQQFedmdxGFEdnM3tDu"
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
