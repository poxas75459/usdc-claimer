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
    "tga5oz7qA8io6vcSo57c5AvU1i2Do8aPz6rKFC8icukFNGW8vLoZL47RReJxz1YCpfbr842wWyLqMJ5d7nLwa6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1yU544WqQDCjMHm25QsKkaUogE42X5PZBM8NFbHMefKiYJNp4jfQr7bmRbDqYS5uBnQBLfKKthu8nRs6qoZB6a",
  "key1": "27BtVsBEwHoJ35sc89fvfwHBbCSoLtKU1jgGz3kVamckCJjYhyBHKVR79CbQiq6RX3UMtxRxRjWNF59EiRt8Ee3K",
  "key2": "2ppXXD2QvgKViaEnKzqX8inEdyPfzZkX9HFNr9dvLsXaxJVzmgsEgPALwrUy3Wc3rE2oKrgn74un66njZ9FGgwk7",
  "key3": "64nZdo2TgD6zqVGPbaTa3gkX9yrWeaH4wi3QHYmjfa6mdda3CJRdt9qS7jB4hEHuwKeKD8ZwU7mZ5ETSWK4wDA2z",
  "key4": "2rEyUZobiMLL9TVp28BXVssUf4W36cwDva5KQY65pLm4maXXUoKdCVm3xxRwWEoamwuvDe8bLR5G4RfB7AE7HcKS",
  "key5": "3G7M9pe8EXuMpJBS44BEjNTNC1Wr84ouiVEZ7W1LQajkPA5KVaTj4zDDj5RRxVDQc3nFum3ior3yuxbFaLnJgNsp",
  "key6": "4T949g8TFmsnSFXcHmnV2wSPheea2ygEmrHpDdcx223RsE4y55RpYftwuVYTiW6VrEt2Rr5u3uUrvN2y3zJhPpKQ",
  "key7": "2zfZfuGnYApoStWH5Bm7pfMcTTPbG8E1rhHoYgR6inxix8whSPxaZ59qucVs5eTxMoAqg7pu2HEHFvWsNjCy3ogc",
  "key8": "2UCi7siuSdKfqx7WmPFsbccJPDBP75L4cjjoDHDzodt5jq5Ge5rnNJbwTmKbUcc9XSL7YXPU1PyJ4oNLRFyy4rot",
  "key9": "4uRQGBcgbKWqSXQYdtY7HXEjRW7FpqSZxnn4Uf2hMeKXnbvJUSDvGGi56LKN4CSJDN6WcqgdMQnTG7gWLo2eKkby",
  "key10": "2YEXULuZ4nYz1uAnU3Fy9T4w2ADgM4gE5WR5Swo1K1t34M5kw6Qy3qCPBHPY4yU68VRouEddgfuRtFUkRQrHCCRg",
  "key11": "4HPbGVyJFGwnXTjRDVhinEbSn6smDksDvTuKovoayf1RXfyUnx2iKYmrBNKztwjYUePgmcXkh52eprMyriqH4TF1",
  "key12": "3DzJLciLw27Kus1FsniEfeymxAq3W6pphphrZqLNcqPd3FyHLWwhYRiz4T1rbnwGzHmiM6Z75kWffWZUuvXfHf6E",
  "key13": "4bcNVFn41K4qr7dxm7WroU8qv2eR3T3QVn2t8XhN5iXBSHCQMNtWU2dXs8RCXeTAZscSPATdEZtQeC9KDTrm8Sdd",
  "key14": "38bJjNUPDeRCTTb72f2WyvatZCu6NP7b1Y9QVMRh7yJMowx7La3vUWmDLJwrcVxRV7SCCHcXx6SZKGGGK2qawf1r",
  "key15": "LhFELwigFDe7sSQQGTfhBYD5eBKUd3njm5U5ZRUjCPMMcGTSvx4vbGBdEtGubFWaUWJgL4rVrTZe7FbLvWiPTKP",
  "key16": "3w6VFVPJdqXcVxt6d4E8P5WLFRe2m5sfqHLuXmNFtibdzKWPd1sx5Vggk8DnvjADYPP7ygzHvJYpoQP7x83RMucQ",
  "key17": "3tyU95WHHyzu8H3799dKfpeNpwhz1Zt9PnCu1dmF1W6qRQMhVZa5VJU6yT8B5kLW1fUmbo8r7hE2utvY7q5PAkUC",
  "key18": "3vs9T5jYXt2ME9yxyGZ7w2heZ1P1bB7d9nwiycT6EP2SoH4vyg4XsGYqpDsbMaDqdv97LUGLf3dqA2wRg3ivEtCN",
  "key19": "2XWgu3JKpmSMjdp21sYkktn21dHrT9LysuunbuxSrkSjDJ4BcaXmhutkBRc9KqW9j99JoWud1oohx3XPbtPZsJDx",
  "key20": "2biHdEvHrwqsF2Z4PygqZegmYJtAuKudqR5TyrDdJp6NqvahdK7DUMkNMzFQqLDpuuQ42dADRAd4XmESW54zABfB",
  "key21": "i6nnEEjQwdKuCvwGewZG34HgyQvRdS7UQZdtiyqB7R2zLACwkbTEVjF9tdDSnTrReY6EKLJT762bNSpgqzGUAjD",
  "key22": "51cRhdttYJcpAeoRtJc4NmniYkX8wRRDJofDu6KHF9J6LF3HJnethgLoVniVzcPtTZyoHAwCzpQTj7MpBkpVamSo",
  "key23": "4ty2iQR3PqMtTwS9QaJKngjJoTJ8yyX91uLv1bXqPmpFka5dai7mazb6J94bb3VdNsauWULTSZU1n9ZEifFkX4VN",
  "key24": "44ACBocaMu8QEB3YWwSPXxqFxWsC2AtHkphkyXZuKeuzxckqSdvBjPktxt1PwWWkR8G2JcU27WuSPbV3bp7xAN7g",
  "key25": "64SyaBse3auVCaxoNMNNBhYEoGaFsqk7cuofBzy8p3qvEv5E7ZxaLrrbdnJmbq3p7oDtFasrEfPaQRU74a8YL8Nk",
  "key26": "5UMRYYwg2qYDDqTxLnGoNPSAuW2AdABRdTUDFziPBf77ueuFn4ekGimg4ZeYQskYjiUPpiUfm7rt1QMnC1zgcKPC",
  "key27": "5CJft3y4Bc54tAz6E5jP1ndijWrJfJcNhbzvtiiwQ5Zu41nsJicKbS5ws8Pi5AHoxyyfm5CWz9nSPT5pD1yf7Aza",
  "key28": "4yczmXAfdimPBakjw6rZbEsmq8MeZvVMKCTDeb1sRRNaYwCyPi17NJfEo4PzJx6KgVk7npQTugTmdsjozuhjhygk",
  "key29": "42zpdm3mR1CxPZ2tyAiJFticY4zhsqafNZXJEwjPKrqm8uh7v2kHLHgy46vHBwi5zebBYRWJDCbXNJ61Xm9Pamtn",
  "key30": "1kYtChtxLXFTsBH5oixKFfVGjvPnPF4YMNUMeDpzafgUUQQ8DY64Q7LAhVS3Dx6zLYhCRMYK9v8fM78cJAA3TuG",
  "key31": "4Br1eDxNtKvKLN68i4h21YM8F27jzirjAkQDWA7uYnRNc3dbbdr52jjW62KSgqJ5axdQp2qaUnTwFAgmDu1NxxiA",
  "key32": "3W6Wa6rf2eMcr4Saw3JLqeiioedrUVqMVeT7TRYaz6dkJznPUQ8EHBEiDMAdfDvcod3PPZGKnHC9PmPSivEMKMg1",
  "key33": "2iAypZHDF6ViqjEXjtV5rjWBpeBgGiUHU6yzDjAgw1ZPi6oYxZaMS21aNoHfJYGsmSSa9ErG14dtbQGVgAcF9yu2",
  "key34": "3UAq3orYUi7Tr3uqvJG9k99tyreZhh2vJfiUuofc8PAiUZA4iC9bYsoaLjpivaxcKU8guSbjR9SQmhPox462tocg",
  "key35": "2hSNoDLj2FhemxHiTa6mhrfr11DcSxn9zMTNfDLxoxULrdhoJC78x4PTtQSGQZa5zX5iEm3T1z6CZvRCVt33toVL",
  "key36": "3U8ER9RXRu6jNCN1nA24wyZhbM6zEseRD14bt7F86BhCnvPvS2CdSJZVuDVaeXZNUAQ8nav2yrrkUiaJTLANV7Tx",
  "key37": "57aExY712NUP9Qub8UykuGKHCZ1Nko3G7SKo2mhv65A96py5eLUTcfxMiX84Whw1TDBU7RxNmK1Jxy11oHBBQ4b",
  "key38": "3zH74msVDhWAQSBkkcETyViRvWw83yXrZHuU3XQsmCkoNeTNmjXJU1atxieR7WBmT1g2fD8HDrGw9kU9WXDV16JZ",
  "key39": "47ZRgQ72X857nxQkQk6DEPgx9yPg5JTERn9b7mKWBzm81mvj3HY1ALYfpB1mtQqsEo7cE1hdPYCadzrTMJZW83c9",
  "key40": "4wQFz3UvdEN4Tdxu47uKRBKEy4TsSqbQpKohpKFAcDAxWhX4o3JaHb6dvz4HkyDXTo68xRqipDg8XS3wJYPqAX3z",
  "key41": "ZwAv6kkQGJRgxVzZxRPvxLB2MpeGVyWWKRzWBKeUDnkJmmpqvCrXkML2y1ixnZSKaD9d4VAQF6Hz1pB9xDJ4MFZ",
  "key42": "5i3w82rcFMdbdWmM7t9YDm157PAJAaixcxYgwngVP2YMd2GgMFF45VKdYb13Pk9ccXMjWL3Gd6F6GLqAjjG2Bn1W",
  "key43": "4qxJ1GLB7nZdGVuBJt5cQKRdNu1f9bmjx2tRfCLDRSqHhgHk4NBsA4EWZkxUQZnnXnkP6DJQV76NhvRvDR9sGza1",
  "key44": "5qxaShF1xicTVHEEorhpr9bYuppYiXcwHqSpuRGPZAdKSD6CyxqXp8LmmvCYJptG8JLKngaLwN53yFmiMA91ThZE"
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
