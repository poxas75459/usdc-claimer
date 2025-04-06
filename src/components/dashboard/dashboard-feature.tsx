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
    "dKbX8KhTJqRXypvLbhCPxZMg2NQ16Xo82zUKZfQ2ESGJhz27ehC346Ck13XDrLDVUPXaHhEsq7GihPh8THnpcNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34W6gpyFya1WRzVRwcSLfU5x14yVFyhb7WyLNF94Jd1Wp8vqCYjECiALDswmiTx9BZsSfpm2iq2NRhqxaWnAZ8Mr",
  "key1": "XR4qfGU4YFkymP6ejhk6uDENijfZR36eYb1zx5YMEgNtTuJPhSmE5NA98S715k4Pgi3KHWFQoxe2Tzi5fAGgFRz",
  "key2": "63Tzi1yspXpCmc835izTkyPDcjBFc3HsFCySJo81ucsVBQthK87kWfoqMFYFMTnWMQkwVc2s61DzDuBqQ3QX94Ty",
  "key3": "2dwDmG6rGRirQSZbPB5PHMcHacfijK6Ns7FHrCWKzdykLRB15Gfiu1EtVauG373brjU4Dbb6J7UoiVxQMDB6btoV",
  "key4": "5vooRT529dC5bGmYaXYWRCF3s7xBqbZc5sFKTxmmzvDt2pEycMkkn8Ks7j9i1axRGDbqtrDjqnCPN5JMN38JDuBi",
  "key5": "52BzH3KCbxjzxCcYL7Wd42KZ1MVoacfHbwvkyrs6HjLBzy6eYbXySyDhR3z15khcsaQPa9evvnukDTx2apAHJShy",
  "key6": "4KhbPFB6B52Q2XSyDiuTp4wtPMZ4QGDWgqZPxXXu5Nf5yheeADiUnWBxkRi6LfaXazEQSAVTiRevrFE1KTEi14rH",
  "key7": "PxbwwRG2GMrpzHxVhPcbfmEX3621vxFXez7r57NRbWmYutNZS61NGy1Es6p99JGAj4CpQC64iNYeNj5JBnw2oBU",
  "key8": "2MCpKat6KRBGey5Jc8dbcUf9C1N9kGs6ZHL3nH91tMmq7Z75x1iWfZCscekBoL324YEvcyjWMtCSj9kmfNxY4idc",
  "key9": "5ciBxFGwXr4kQrPcLpvWaJnopDs8cSBBsbWyhuQKxkMLwP83AG5XjqZuNzdNoXzvx9uouHDHSwWZfojwcipGSkZS",
  "key10": "2xdkLBrV7RRKnuvTzcu4cNfkNrqTmaNjdPXDhveqP9kzhQRPv5bUqDswT2HfpvJTr8AWsijRbXpU8LJEB788P4LC",
  "key11": "5pH2ApbLibjsYj8RvJZibNyVD1Fcus5eFSzohZE3SZYxmXs8QxQrVsPD9DFAnbwk9a6iLnt4SNT7V2gPcUvUNWVM",
  "key12": "3jYNAfPBbXy2Rj9wPwr6E3XJUuMG4nfFZymk2Rqo1zhG32Y8xasfJCgTwfJsPEcq2ENcVMdaqmD66sHfHkVQ1868",
  "key13": "E59ANuzt1fgVtnDu8yscRSknJWQmijwHpziNR6vMEsnwQini1xabpwih9ojo5Z2qbvLy9dn4VzfRwhMcdknhJf9",
  "key14": "3Rnh3k5HoCpCSvoqt6zkTyqDUjaf8onBhDhfp2DpwgPCbNpiH8dPAzG9QWPikhGooDZqejHfvHhfsaArM74Vp4BA",
  "key15": "3ixkXMEVZGHAc2JTXskW5TAcf4zE63sxriuGh3gqK6xfpmonQtCKyJLrQFxP3zpeqEziUG1Lz8oBxwRHgi5BRHFQ",
  "key16": "Ckiro529oW7vjsQ5nMbvC96Lv5aSd1XyaBhUcRTDQxKEq7FhGkP16HhJq9D2rPRZNS4hWVwkcGHUKq9W4ye9Jvc",
  "key17": "4jtghtEnMYUwCQD9kd3uKuiu8VoNCqRXSy18P6ejXbzMEBqArxKyb4W1kNwi7NxuHFxjT26NhjqzmWJuED1ADhhT",
  "key18": "yfCMytCmkwu4J55VjcvJ6xtXdt8syZro786rM8qVLNrKn5foigKwYkcBhqETTLfCkUnmw5D1Da2pSBm1UATodmx",
  "key19": "2YJQNce7qFUZccZLMmgXm5VqWRbFczvrWx733pAAN2ANUn4tYMSeDQA1cZqFryR3pSAhwisDZViYeKJB3gQXY3Ch",
  "key20": "52MC4iS9durRWrvpkAuUXy586f7BeNz1DsbUKKJ8WS9KjJpvZNie8Ps4f6QLBE7THohmtU6Seq1mbcLjVfpBpYfd",
  "key21": "3JwizukXmkk57VL5Tspv723g8hma4f2rYsgjdgk4W3R2duuqHkNpGsXHtbj3GnGrLmZ6x7HzbHDHsbKGgh8bkExN",
  "key22": "4UMaf2XDCDng2v27y1nKhPJZTRpCNx9u6A1KDk8iQaqKJeTVX4sXEJ4XTxZP2Y1zd7pNRx2Yjfz99PmP7auKhrdZ",
  "key23": "52GyNvyN9g9WsRCpnoRNdmdoLNbgCwJRmh9gz7uZD5XsPkRnJhxRViC1LRB1SrKPzHXsdTnPEPzgsMKjXmhRVnPU",
  "key24": "5jRPFivjqoGAVvNrsQ2uygA2ViNVoEjQMTpk7bKJKL4AEnKZKcmhAm1x3RooHktiZXt5x32zQkYSuN4U2UWPp75y",
  "key25": "2qCsSujdxF9UNvkkr9NJ2bGYo7enYtmvThoyqYWNLMciv8jvKxen6MAHe59EG2eTqQ5cvGRzkpmQyD2QcXXvjW9c",
  "key26": "38XGNXKCNdj4H33ABUXo81KQi6iD2PCW6nLyc4Y2ZGkL5NR1RkYBT2n5yx41UavPPEG1vxDYh4DsnCxgWbYNPkTW",
  "key27": "3Ed2QtSuihs5ua6xav4AsxNYrtixb2iUJ6HhuBZopRQRgkkv9SsEeNWmJMxkGvnbviUSgrYsKLbuyzDdTEGrWc6t",
  "key28": "5zJo4yjthYwWAwi1jWtnrhdZa47xJt2ggn7XFXqw6Y9t7widHQCcs3XPRYZZw3dbXke3DQyffDNZPnoeHy4CURPG",
  "key29": "4e93Pen4YR2L7ExxPBAhBD2hDct13KvVT1TZ5fzc8N8o5Nn5HpiMM64mHt8DBP3uhny8QcDoDo7NAQDm7yayXnSP",
  "key30": "3A4UaHzmV4bT1bRTLoDgrWn7G4GCPmfsmU67emkfKpKc6mjqbPgcYL8bP7WXCBqUh4eprvgjdxnmMqzRV3K8DatG",
  "key31": "3qgQH9nyujSAKfyfUTsjimXZquoX98qHt7cGH8Hjz2iEdSpCdULf2q2NvGmUp7peNxRWiuhnyLEpCPaBpwFxYnNi",
  "key32": "566JzNrTsrgms4gyZXSS9zGWnKPVjtCDZVD1LYoepEyr8joVM59Te233556H7QBF9HA1txiX2kCTfNyc2UXs2uPZ",
  "key33": "4GeKso263gDrwFfzMjj26mBJrBnPDWL6HGquL3EBAkq6tmACqWYBH4uAZXEBzaThjoeEXYnHoavbZjogHdHxUNDA",
  "key34": "2XogpNKS2DW1weqVxyppB8611JPx9S1ZuJHNB48MHrPXVTiYZ89ZqNB6z9fmMUD2LqcGEMmk8r6QkZiUFydtQLrP",
  "key35": "4S57g3eju3Q1w68NNZhKGYJ2VwmTxTM5VPXZn6RURr7m7NfcMUGv8CVxyyBpnHEGaJdCjxNVpsaiAjrbx2KN7Kp1",
  "key36": "4WGVWUxkWJQ9VhCrJvcwXthcMnCPhGyb2LKDB9hmDrpxbkSohVq94E6RScJnANDRgiPgBifdLdTvPddhpB4Sdy2g",
  "key37": "52vM6adzCeBrAzykbDgkspDFhcahhdy8RhnbUMqHrSFqybTmQ1ijDT4x7FH13kQyLEYaf8yQCfYmmRjm8ikepG32",
  "key38": "Ypd6C9kBFB8GvXGK1r9AUaSyCcbS1pWSP5yRbiikKdtSvhqzH5G9t6LmubpdxXBAgmACdB7T254G3CJ8u9NaNqH",
  "key39": "2qPnjSnb65Jcz6CxvjL32F22ZYzk3jrhsWdDSrtuVBPNPXA9LfMZdSRsB1QuB2d9egEuEoWgXC3419yh3akkEJFo",
  "key40": "3F8J2t3F5uKZiRjAHYSuhUCuBa1exk7BedkNvk34Kvq5WKNshdxzb2hyhtopU48YVMaqUh7BpgkiE8a4Hzob32Nu",
  "key41": "5WsP3yUgVSR3uQ4TT8wJHJT9w8hwoYDVBTTFkXBxuuUSayicbJAD2eWQKKrpms2c3xjz6CVihj6ngsznsFDSgu7C",
  "key42": "2gndpgDnvtvsVAbHMPT5PVgM3E5pdxUBKmdGNe48R7XvA6eEj8XuJ4bbP28gzasWyhuMjbtGwf5kkuxpq5BcQDCP",
  "key43": "3gzrZNqW7q6em3XU92RFM4SoZKJhEnntQbEDmTa3jokkhueBZbruuWeE5xVraDxo93a2PG88FNzxgg1Ji34jhVUz",
  "key44": "53LGtnzm7gFw4miBmSahNY4cxfgSVhadLhBQViNnhSD8gubeuFNHQrHi44MLNqRHnEgUCBW43PoMxHcdNJgoJPR8",
  "key45": "56bM6rDWPVufYd7LUZvoBA6kvHSFK2LUDEbmrv7bQGUwghAAH3EzFGFn5hSRWz8xHzbHtPDPf6UiCqKQo6ndbxRr",
  "key46": "49YfDh88UomTzQdkiwkUef1G9PvCH7mkNiSQa2gL8HTQsZDcagy2VhgKj5JMYkUP7Z4kEsdGUBZjqv9Vcwz2Qsde"
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
