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
    "2JpfRwSsPpDekHC7uHUyEo7pX8jDtEUTM5Jtpec2ZzP1t3VfoRqBJrv1eoXtkvWVu8HdXiNejr1g3fjdUVuNaigX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XS9rYy1vcEfzN6pmwcE2m7JNCkXddwLVgWSJhkUqX29DoquvRRfrf2K2GDqK5HkJX1y5sL4VhJQnDFmfehpBpoh",
  "key1": "4ZY4cJbWtiPJLMBByX4P47Dn3RnkSF3X9W9NLDZ9qxgBjUSzATNmaRPApgXoRbvBZZpx47rqnYEHJ7AVxVCoBfmJ",
  "key2": "3w3tDazXXb4sZ494PjQQg7D6KWsAsP56VMsK86yZKmtwAVFzx9vrri9AZ8oYkkpY58uqcbgECk2b4PizyjLK84vG",
  "key3": "49JnfekqjXAGzpQG5Agges3v2vZDYsaP779BthKzB326LDiTGQw36kDeRGRiLaRX65YVHXLg4eF3vKshpKyP89ow",
  "key4": "3UpDu77YWiE6cL9LjyEgRrPX9GvPcfGtZQetwKckQJ5kGc7SDjcCRk3NuktVWQTUH4Lbe54CHC1cqbMDNrjrFtLB",
  "key5": "5FtxyNZ8XSdG9orbNNJvYV2xq1HHzksB2W4esAWeb8Udo5YX565XRfXLErT863yJ148YdrjcFkqLbrdNPKy7BvzY",
  "key6": "2hby84LyYrttzXTQUdLN16A4xfBs482xMHkS3JkHMVRgRAWc51LTQfTrHnE2P5jgXbhpHkTzyYe36dJvz3X2uWSF",
  "key7": "4UrmoXpsRikqcy7gx7qazpuQu3SRghbZSnLdhWi6H2sJ7LAYTCdE44nBUCdCPyKnwLqPWWBsfC4YyjgdVZkC3ZsJ",
  "key8": "q1PkX1gt1SAZ4QCLXk4BF7QTVaSCjYxfFfiFjVJpKuEjWuGjdjBBFMB7MMQ9DJFXohEGShwnEWWK4LS1PVaDAhk",
  "key9": "47oXHivpb616T3UqkUMsoaQUL9b4DPWvEn3oZhdCA36dSyTGGVNFnajitMGwk2n8oQMAXKDX7TM9GnXkW5ppcZ6v",
  "key10": "4R18u4tGqYxi2u55TB2rCHdUyBryjv6wdcECodGVhggVT7JDn4goEoDFjsJXSwe7C1nF4q4rSaY6VqXQHnKdk8JG",
  "key11": "5w2ra9nNaAqhuTWsrjyXKjRjPDEFo93SszXqPeJkoHshbQVQuEiqv1nUyupMUZdVTyGt2kARv3UMvJy62rseNy1c",
  "key12": "3D9opoKChCWWMjXredXZ9a5pbyFsRdY63TmiYT6z1q8o4TWQge1L9H8X3kKeUnWQFYKBhQZfTiqidzW3USaGo6U3",
  "key13": "3GeHT2Stt4zZ7Qauxr2Wg8NE8FJqwKhSs1MWuATxxyjxSZeC6K4BdaqN4q4Xp32ifYgHgDgqfNpWSCnsWxCAtCy7",
  "key14": "4Ytzw8M3NgaxpYUoGKiDRx3RNWwW7HxHCDxiZK8uJZwrDdSdXfoiH1YBkk2LvaBB5BTbvg4JkbDUzUFY2F8x8678",
  "key15": "MjL1U9KEQ7aFSatB5wcpzPvonPduAJnM7ikwjwmJTNqBrARZD96oqYZm8atQRxsZSwL4yHCXFrKV8eDeaQ6ScVR",
  "key16": "5Z5WvUpsurBhz4hAQFDg8YrKQF9p3K2e3zGgKLC8Udft4awhN6XFB5G3vcMaokVt81xc6yVRigCk1fp8p51xCvET",
  "key17": "5ydqtSLTyGvm2rGk9w4DXA6oo7qFuPbC4Wf7Pv27k1goh5TVtPAd1xsMrDkNrf9so6ksmN6eZN4HMbGmtMPoDE2R",
  "key18": "5jextC7HWoqhXct9qARVA53CS4q6K5D3mT1RkH3vZfwQr1dMEBjCar3UCh2BKh7PRVKZbUTRJaAERaTp47wPVu48",
  "key19": "582sbbAuFTUxB3Ss8eWRreqN7E7vdtYAs4ArVghSVj6iWeMuDjCm8mwEtqKbyREPJabdR6DX8J6f4viDA5xby619",
  "key20": "1hxNfaruEj6KxbfZm5hHr21modiLiZdLdzNfZ2KMLDBycyZ7Ljb2gGBppDC8Ut9ZkhQpbPE7MDD4sykvN4BZFND",
  "key21": "VR7GAdBtExg1VwFM7jZ9MJFR3jKUdRXaq1E2CqbVvarniWx4MaCvhmGCoM7FSRKK9hRkyjVL3wwyWwM1znW4ScA",
  "key22": "4VcUjqnMD4HzgsWgRN5ctaz3VPjuBtkV475GMfdkDkQHZt782Wa1ycGymJ9RFjAP1C6GLwKzXmbnpAgL1oEuHnw5",
  "key23": "442jaicCHrJdY2ecWHec1QkDqc2CHn7AqwLwpPUsEHMWKYSUvg2cHBME3cgNRKNdtCGS8bfDpxfUFC4YqNnsM4xm",
  "key24": "59BrWoxD8a2JFu5yas1fegc6W3sg4VCXctK5x7h28a74WnQvYputgVZebiHfzLgkyW2ubVcqveznFKdxLid9fZ7r",
  "key25": "2tczvhP4vsj75syF3rypwns6qoCPkyPbAmHfJWVFcxBRCQPvDSqzgKafYz63neYzm5VdfGMPXUNowwRjWDKnzBih",
  "key26": "58VsQWPLcA72FAZidcYtByGMNSTiFKYJZhgTjp4evSndAr2L28fJeduvYiNQF2kEvvmQU6QeW7Td9ZGvYhhnonW5",
  "key27": "3dLdzkafPWr8UxL7a69suNCdDfiVhoqDfuYf9XTxkTsguPFNYgtp8Y8L4Q3UDPfJijBePBMK94coZCkp7BGWt9ad",
  "key28": "4gUTYB4obZfwkGe6ZE2zsphcxmdBbZZ7t9ba2pxBSfmGZ6Ma6YjYwZuvr4CcQqMH75soJECWSawVVnxZfcaXRYCT",
  "key29": "2SbrdKHhY2xmDvxXQ8ACgfumha7xqk5PPZFAcHBPq8WKuBp3xxr5VEFJQsRmD6YPqQkbHxpm2yZCqYKHrBYEhw1E",
  "key30": "26WaUNnr8bgbYUzbRotGVhZUMHLWqNYQG2x9xBSPKSqCLFhKjbP36JZVCZ5vKKPZYkokWbQDwecDLR5Ubt8NcmbN",
  "key31": "3JeibtwnuwKjhhoEX2CrnPR5z52aY3CkPMeGYsVoqdKCqeFJdSkFqwW3iYhHSphsBjw7eBcs5zcVjcKStuEeNm4w",
  "key32": "41fpYGrCqEqqbeSjW7dNkY2iksMG2qAeLCKjT4JrVM92zqyqgL7hFJXCN6jt9sEohgkmXxZmAYJex6J7mJdhEBuG",
  "key33": "1aci3ANDLZwVgp3Sd8JHUspFJKh1WNdrm6tTSAreXAenDMoKFnnTtDhhesTi4HniiirxPsC95CGJ1UmgEgWK7zy",
  "key34": "KQmNhKScpLKsr6K7BLWsAEpohaQktCkDFeca8r49HcH9AEEFd71emVUfKpn69xXUamebu9dhW9LKMiiEzeioEUR",
  "key35": "X5yks841X1JSbujXd2VN7KnAemf5V4J6e84x5UGzzV4RFhWew8VoKbKLN7q4n9UpQRjsVqEPrXp65CHYmZJRwSL",
  "key36": "5RcXMoYA4ubHa8dsRDFUE4sCWMwToPqbpoYHrEEuJGvnmzKLPjm6ZbE7LY3vvzgpxyB64pinjfbEwnvPAddeWVE3",
  "key37": "5hd5hoGmYk82tvtC9qZ9N4gmVLsnJRTEPskbgw1tr1734sTGwZsqKYbZgwQ6VQS9DgtAKuGUpaGWfPCs9BGfRn2b",
  "key38": "32kesV4C17bajAFwyBaW6s5iBaCiPzjRbEYgHk1GEGK5godQU7MVJGYmR6zPcLeXexqiQZeBvyMchkje8hxum2qk",
  "key39": "5kXaUeQDSQwfDmc4WtbwqsgsqQCKz1ivt8yc3bj7Mne6s3PPepZFNJXa3THSFTmtC7SNR1HiNdYLVJnEZt7z1ekc",
  "key40": "2jUbKg4pY4R4WWjiXzcKxv4X54iFJWXLr6U3ShLe432xtNxNdNDUBFDsMyh2iqTUsPGCMBzD9HRoK54GuhA523a6",
  "key41": "4H7wDBrst7VffZnErG57yTCq9KY5StNNJon9BNeHdKYz8igRpTLKDs9LvJuF4nLwc5Z577UMMAB2eFVeZaio4v2X",
  "key42": "5uNXeLbxQZZYS7rhhWfJpW8PLn2P1WW2uTxCseAea4KUcNFhEcSR9fKerTzyfhZQPmpniwQgzUeyUApHf2t1d46X",
  "key43": "27gWVRDspYNR6B5y4F9DNL4U9CXe8D4srVgPmcKRxBEcjYypzeVaugJnpv9H3SDwD1V2UgnrGVk2xvR3V6FMr3PF",
  "key44": "5zbvhf9sHUfvjsx439iKNNR4Hoca6716hJByVjjLdJzHNueaNPsXn1V1c2i3bVVBSnjqYsWnfnfN59aWzzBZZHCr",
  "key45": "5eEf2HsWcEBBTf2vbtLi8dSM2APQeCDiczWK4VsHv7xaXhnnBVFhT9Snz7Uk4cvvhnbBukx9jhkto9NpzqqpyUAm",
  "key46": "33Sjxhqpd81sEm3kb1KNeZd9K9hA5aJSg4MaeVpeaWsdgAmRXTJHDiPASgrQSKKNMcyWcHSaSxRV5KPhkHwFJtZu"
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
