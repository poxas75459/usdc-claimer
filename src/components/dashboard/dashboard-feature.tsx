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
    "5GS2J718zEqHgsQJTsUjVwEtQ6XLuRPPEZSXSswNarnyb7ixbB2PLpXeVDuTEfbpiTyyZaY2s3Fd1aoST63qkApM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wfCFK6XgzsRLdUHBTpzGVPBHfJ1W4RfrKmWt2tb6jaYkwueoEsEdMFVgoTke9de83qVHwLEo3X7d7EJqcyQFxr",
  "key1": "5EZzTUzt7dkqVQyH1BepCEvZMnah8LCufYRGT3qyVr4acQQfege5enJQRf9jzq4hx7oyrwA8T1j43FHPfvJtppJo",
  "key2": "21VLRaHX9mF7mUxy1jMZycZUtBm1eHzqnP45HZTMwmRCngQ9j5tTASH97PZQVA8TR6ChGzioio1aSUcbsmkarnSR",
  "key3": "5HvxkSijGjWqBNzLP7BySNkFEjNgzNGDVfMUt53H3t6nUifM9R8A7rNGYQtZyUEwiY4nVBxsofxWnMjY2JCQ3UT9",
  "key4": "3b5XP5MK5P3y5Db9u7XKqL494skayFoM695uFqZgchcoqDpi3Uffie5JvVVSRdjvnU2uWrzFnFPB7szHsgqpNuit",
  "key5": "5rRohFYKRDMLnv8nif2DX2Nsk72SJWYUk3gda4a9bFKNh8H7vG2Xw5FwDnwdDhYi1XEhhggsCJr2anDUKD9s1ABD",
  "key6": "62mHoY1CjixCE8yAMXXBioxdZQZW2utkbgmX7uzNnPiEGD7BKZL5CdYdFyrotD5G1xJJbyCe6SBPG6JFhps4gR8B",
  "key7": "udU5EcmzvscDF3mEXbdX1A94tZSBskABmxEp6EcZC7StxkYm9YT5B2qEPoftimozCr7UzzxKt7r349roN7ydo8N",
  "key8": "5wupM8RYQ9JdR8gqcY9aTEWGf3fWYKBXxjuVxw9x8ht1DiWcuU7vcYhheqdY4TyyhS7iEtfPYkLSEwQFaHR5GNjP",
  "key9": "bA5Xqhu8uSwBiSBEbyQKKegdNg6SQ2VQuGcgJ9Wu833BXmRYx5CWED8cK5JwCu85xjbt5GRDzJTohNeoxbmUXDt",
  "key10": "2ZdmurTUsbMxWCnzntcodBh36ahWdQaEMXuVzzymGaNK375MK5KgmMVoxeGqEgdBYvzUSQ3w8MviJLuuzt7sMuci",
  "key11": "3kf31fXMLWxdXNrytenMiCc99tU4oMZTcjA6fSWYz9fqdaGDNcP4o4GJzFB6Exskzze4yPqhGaUj1CSeMb83zfxC",
  "key12": "2oZBN8wAhUmrAubMsGGH9T83myryDfJyuyr7aH6aftd2oavYFfCYGSj5mRuVXGW8fGjPShWX1mzcE7i3HfFufUjn",
  "key13": "uoTnaGk7Ny7op4qSJk6fp37QymLSLGUH7kMDMF4mE3hophUmBo9MbVJcA7pw4hw64xHLXePKRbu7XzHfHjuDh1J",
  "key14": "5BFUpS2MGgQ9GyHhNbjA2AwH5rVDm6rKnZwdHLZDHNYgygcCGCSrwRR3gtMBAZcyTnYahWRaaSVbGbRdH76mEwJn",
  "key15": "2JcuoZybyrwgyfpriqG2JS31ZjWiuP5cmRuZXH6EwQqQuYLtVQzjtobUativBszqWUVtekCQ4kTfL5CuhDm5Fx6z",
  "key16": "3Nna9xBas3i2jXpQu5KffaJeZsSzjTqLgjhrCDp2Xx1d685xaHW9znPoPQ9JLPaYNtRJhU6sjAqYSS21TWfcYpag",
  "key17": "55B3gNRCZJ721wM6wooQ5K9Log1H61UpYrvqi5z8vfRQ6TLHogvEMhjhVxzJAiZxcrQ3CHDnMhzQoidRcUVBQ6qn",
  "key18": "67d3LiWF6UgSmXJyXvSudAA1XDJuVSXLVfSTMqedbHYTbEVBRDaV7SuCffDAwwxsa3z7erYPkedSovbbNiRFQveG",
  "key19": "w5KgFvkjo6jde2SoHEdAZvty1owTacy7XDugmsRhi69iRbiTfnmQUzF4X13tjNNDUTHBUgy9TVuMk9Him5WomR4",
  "key20": "fHWXGcyGpxtpp5aWWP7V8M7cTZ6E35Y2SPs8TQoEAg7BTtN7PyJLJq6AMAqrXm3LE3uzSTfJNnh4dwPEQVsYPeU",
  "key21": "22oQpBNZNMgJMeJcXhZAwr8rBy8z58CdyZEQQx59MYEyzqAcjCtbeFc2jJC9koSVRYRqi6VMJNJvxNN1ftym8RcK",
  "key22": "2tonQ7BZgGoEB6zrQWa1pvVtxnPfPWDRoLPdXkVtAhGVKBURsUJpbTqU6EmP2KmtFCwN2PuD95hGcsS2CvDrt3AQ",
  "key23": "2XXqeLQHJGYiqbCz1dRWB75YRa7ycCCbkVRVSksYyBD6zaqsdTHKHgg7AkP6gRmobZXc6Mo94mzH7mAoxu3WdTmC",
  "key24": "5iWP7SY6f2CM4gxiiYyKZcXFhgt6fxjJdYvwaurpDQeoZ5amd71wquRQxun1C9k4KY6onFHyXf2X4Gg6qFpna4RH",
  "key25": "Ws8QvuFAv3WuXtNX1Kx7AofrLMDnHvED94JrdGsRrQ9QixFVTUvoX232RbggAiMHqhmZa2vwfk6MA5C86RFaxbY",
  "key26": "3r6XVmaXJHKoG9FsBcz3HVfmXqRohJ7oZZyvnUT8UH3cWJVT7SsjHaWxLAHFfGT53is5FbiBNSMn532nZpvwsNJC",
  "key27": "2b61cKpsEF5kqjoJNM6yfbMk85iHUWYugvbUrYvciBATo4VCxUc5ZQTcci8CNdjid84UETH5aq5S7TzwjQ3J6PQm",
  "key28": "5GDwGy1KeuXBCd2oadqEADha4D1CbtNDKYDfYS9a4FvXyVvFcmJPtJZZgfH4V3A9Z5h2wpi9ewxm1PqKJzMq6AkG",
  "key29": "34x5KvGjzWitiP9aCc1eT3QFdtdFDx4gooi7G9734phKrWQdcKqeeAxijL2JYtdFuairv1WoxWBC6cde9f6aagYc",
  "key30": "4d7mjqDABG8PLpDPUAazVyscSx6Zsubz881ePvdMKeJLfPH8JZG1h4ta4BtuE6dotRnAEhKQJkmyxmp6Ya7JSkTg",
  "key31": "3wezHK9nqgimFmuWiE3npfWVXdv4tDDCLpZkeL1nmtJj21ivyVtyN4tFs7uTb6CcFA7WjP3NuMiaizn2DmvXke9T",
  "key32": "4i135BcooVT6aUuyzxGnraZBmygoqHYqTHtL1JVbdEeSWaG42yJUDfk8QZUBnmSUo7gY7yr4QNDSni5e94GN7fjj",
  "key33": "645NC5EYx6xTfCYmser7Y9v4137uAT31zNugL5ju1B4BfvViAWhpp8wKC1jYoeCKjAXfp7xWJd2TbFQiZPRnnqda",
  "key34": "63vEr8xfRz5QCkSJyJ24uegALd175Gzf49XTsqnytozHjS3ucVYZbgQqqcadkdGSWc9ceqdsnMLASjNZMvnwnQ3G",
  "key35": "5e5bsTwkTCFY2azm7QrPW7BXFLbLz9cR8cwUQfmSTZCUnhHGTQr719GetauBNZMxEfeRjRmYgbVsZZTS1Qu9fY9C",
  "key36": "5WNJCvEaqCinwrTvDVvAS5pb9Lga4qz9PHeSWQyz6JD89uYCYwsgKcTL5hxggjP4xVP6yzfgVF5fbJEtnb9M8zUq",
  "key37": "21kSAvi8TzS5vysCV6QBNHYVY1cb5ngQR5BFY5D9ds3GGxm9WNvdvQGDiGg6MyUBXHDohqkRY2yis5ou3Lvna4X2",
  "key38": "ktXd1ELpcVBAK48yLELiiXtB7Aeug5WfyFukMJyELEB94SFGkQBtTMEYBHCELDNVudwV2s7Y3TeivtezX6xL38L",
  "key39": "4vWvDWFceBofVamGHNUjijzUGCV5Mj6a9rPfitYuW8w4hVodGc6FXutatrojbmpgh4jnrTzUTFQfrs7n6w8JYLJz",
  "key40": "5TsjkoQBtf1PifcHstJ2QrevYp6n1gajwVwH33J8VNTNawNax2RWbZHkxMeyZ59MGJJCNx2cpBMkiuNFhAAsKvXC"
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
