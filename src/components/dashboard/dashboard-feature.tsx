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
    "4AwCek8b1Any1EHQqSSomL5gPY3KkcwJ4EnyFgNat5bcFwV8Tn3qWHtzoWpzGQCKBtEvu8DxFTNvkfcJYc4iiX81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFfosebyrtWDGfnR9ySevYFBkkb8iTvrPszRLYJRM4rymfxmSWQVfJsU86BMvWssaqySoM2xjYgJoKrR7Gc4yQG",
  "key1": "CUJchdEFKfuXa8WErTqq8xLtNbmQHTtEqE1JgSiGpXx79NGUECDWKkzdaCaqRjc9sWdx7iKbZ3aFYWTLLCf4cfX",
  "key2": "2G6883r2PLQDqkYzmW3KMcbKrsJjgEN5R7m1JykrjeJ51pXUPCRw4yr3hZpRiJqXBt5UaEwW26mdiZz7etUBJURE",
  "key3": "2uwXDKBbst1Jm7MFHjuXTcQaFY1eYtPWg9hiDtf2XWTrnAovGi5Aydo9hCy49F9DT5mi1nvqmbxWaKaNDnkLyfhX",
  "key4": "264AR7HhRoo8e3fy4kUFdhZEGfNnBhEKon4o2AbDtzUH8GMagPEBNHR1Xi3hfnbrktgAZBA2oBYhtPPdwn3XxZLS",
  "key5": "3yJyEv6pJtkgHcmiGRps8TcZW58GUTU262KSB9iDwhvF8xaGpzNyq3KVbfu5K85GHWWsz215cUyD1cVXggVqTu5F",
  "key6": "2D3PtQASSnyhMSCNW2FL8Xn8AtQKxFKtc3ub8Ehyi5caDTciNboUcs1x3qRaSnM1uVCndm2kkyKQ99ZeSmXWg5pd",
  "key7": "2rT1hXgcNioEgf2FCvt6wDBb42F2DJ5Xf7uPmsZtPsQGzYHbGfQqLSNU4j3JArnUf7ov5e9zMhKoLY8nA3jMPS2W",
  "key8": "4ng7YmS36z1uNUECZsfq6C45XS3itZLTVbNFcXpcs84h1mMdUZtr58izdYa7kdRZtErJdMtWT3hiX883vjBZYW4Q",
  "key9": "FsaEndKyMHeTt8bbWCzJL1TqBzj5RCTDLVz3CuBZqa3ZvyvASXLXaLpr2E6btpVTv6kaggtM251fvL553TiEUzX",
  "key10": "i4jiuBErhJ8cGBgDMVRiwP2iQUXWYTPoQEy1ae2FGRnM3za3twpykgUJfRFYYihmTsdhKWR3m1YGo6tZzBbCLJx",
  "key11": "41T7CCkfRkxkouTNfZjMVgyU1DbNxpnRbFSvqshxhg14zGNeeDwowzAWB1ZRhfnwGUwVuqoyv26KH3YrSj5g3BVT",
  "key12": "KU6jbFGztXXBev3WLLpLYmCKL6edgouJqBo2BC51HV4VzanDLsa5jQs7oHZZCZsZ1Gk6KGX1Tcfhpa4Hr2a2k45",
  "key13": "5y9FgSGtcKhDqKpmJzQPXXUWdipxgWx18HN2ztbdx4b6Fdf7wxa3WcgGMEoN7wbq5UL1ME9ZrXZkFB2dCXjLpHey",
  "key14": "XtMCdzC7hRGgXghi34HGCBYM3ULTFQqgpCR48QvqH2r4jrRFVUU1FhhCChYxkc9eESuWmny13zkPJALzcxDh6pp",
  "key15": "Jdkwb2fSVg88xjL5jeoEYmseFxioRBaA5BvTpyPQE1ZjUDgzXLbD5eMvYX5VSRSWDHjU5NaBL6j2kYnxX6hpqtS",
  "key16": "29LYRshW1FvPB8PEuVsLL868YZSFiEjhn1ku1yqWASstttfpBBFz4sA4uY7GbP8nfHoiTnDU3Uq3YYubS3yWH1LD",
  "key17": "51QKxeqHETY3rCGGjxtKyi1bC31Ruz5tFXzzToTRSJa7rqFp5zZm96zspdthFvT3NKWqQmdxnibiDmKvspF88fPn",
  "key18": "3uWSXYMy1ActHEE4BnbFmQKex331fdMWSNcBoYLk7r3gRhDudJRp3UDeh5EWn4WXhDJ3jAjn4sKbiykuebeKhcWq",
  "key19": "4Vg2NniKDf3D8EExb3xKGi3iiHx88sWeN2fYDUgoDqFSXQw4huBPaBvdvLD55X3iGrmc7psFXbjgj1FqFD2QmnTu",
  "key20": "3s5ocvt6WdpDt4gT3QTUzwydmYMafZUV84UsL1FX5dJNoitZLDeQtfshbo9f9856xeJxy4V51cnNFbGaPXCHULKJ",
  "key21": "4HiWuroQ3Yxv4f1USueLSNiSW6vy4NKaL8w7dMqHRVoqY534gkDcTq7PqeUCEjg5bpgx5nUd7Ta3C8mK5WDNEwFK",
  "key22": "3taPPitqmhBp4KRuA2PsNkVbubfR15PAg76U2u9Nx4NazmcmSb2firQjPfmsA112HNuZvbU9wHwt3NSqa4xaWFkh",
  "key23": "31i4k91nayjn4TbRubKjZShUnsFdTY2swWbtxCCfQjkp5vK4ozAwGTsFjjz34ZTKbaAXhWTv8kxiejvsEQk8i8T2",
  "key24": "3W4PYgNtnohpykDpALre3AQpKbbxJv3mxGf4rSzmtAht6piof6QkCzxcB1YZnuCzDtV8Xh84dXsxoggn18gEbknr",
  "key25": "LVTGr5qWV6Y65uTqtnpTuNt3NZ7GUSRbHFe2A7xkGvYk8cRR41Xzp2FAwDwAyorsGEPkaoTTcxQUxBUAgRPA1iq",
  "key26": "2dSohnYh4jrXaRdjQAHLSn6VYpDM7MVkhhfBk2AhpANMThYTcY3pDpRLsjhMVaBTWXcS24zuaQCoxFP39xxBvL4p",
  "key27": "2UR2gir426avHepnzwsSx4UcyWrEPpdzdTNqKnF6Eds31yJdTosdA5RfcoCKsQ5o2KZ82h6iALDRwpSASwMnBthA",
  "key28": "5QjBcYX1NvoiG3PDF9XHejRT63KSxD48kvCWKwW8VnDV2jBohGDwSvsKN9CkyiiWqqCBCg66N2cNRnBFSTSkTaXy",
  "key29": "33gzK37M7mhcqFhXxE4P9K7sVR28ipVW5t5Dm357CdR3SeE2HyWnMc38D1KmGc1mar4oSTC9dXMMQrrNkTXPpBFt",
  "key30": "5Hjh4NXX2By4Z9xLckg7wwCksTtYhfU8xweEdjH7SJTkzGCTfiMY2rE5sEEQM7BJz5sMBaZ3voN7ZcMjyQuNzDSu",
  "key31": "2w5PAGitJMZ1UM2eR4K4LwRDFHjBJBy4NZKrZjpL4stqAvjZ1AoDn7iqqFmbn14m7AoyoVXF3NRegL4KDVo1Fnkp",
  "key32": "4RXoJBZz8Aq6LoWHZrtrWA5kb29abjYA15CSMTCCi5BYd66KJZa2v6dGabxtDJM4UnYVxc2iSZzVAPHMAq3hF8Hq",
  "key33": "3QMrdb5d7x8p5zyg9e4XQWWT4n87A4UHKJLAW4Sw5faszQnxRmDigquMCPUbLKZgUfi7eK9iVaYE6HSEh68iXmJ1",
  "key34": "2b2jHfiXFE91779pN9ot4wjnQ6i2gJEhWskVgZ91srXpejirG7ooX1wQ85zJgjUXCg8e68CYDdX6TYGdX2YfkmWA",
  "key35": "tqBbAeRi8GZjidpbMhvj9MbTNxjPkWwR6YGrn7Ea5cfaFpaQmdXHYWGX6Fj3CThEshDNQqpctqVFBTvcigjEbRm",
  "key36": "2oEg3kBvLRteqD4LL7XJ5eJuDyepPzdZyqRmRpCcp4PAuGQF574zMzU1b3efdVBH7FurFy739P8urnfCZBDpUnQk",
  "key37": "3nqqpngY3c9wg44QMQRmjN9qzYWnKsibGyG91SVWXQXfoFwxnzFrkNAQNi6zywiCJXAG3EDLmVXn1X7RiHCUiuHE",
  "key38": "4s1F612S2gaEJP3iGTKbP3eAKdgss112JJgR1xkzkMZ5dbRz2BNZYL6g2id84oN541pLbvD1X18j3dvEe43s2GxA",
  "key39": "5AGMGzWtGXEV2t4DbFsqMqV6RaZopc4aXosEMmCv8tZ9xzrgNYNjbiTbicXDTLmDVJhQqecW1EmkSB6P1VFGi85m",
  "key40": "4fbXqP5jyYeF8inWSGQY2C2mwDxkDZYyNkvrqbCegHWie4Je5aSHsA2Q4f2FYrAHYeE5dMsa7gGvARqLQkdS1yWX",
  "key41": "xFxJWUFdSVLHdJakvHF8K9imaRv4WZqeq1W1SzGcUyQHfT7ihbHB197u1cKJ8cgL1SMptPgo76EBEwGnkuQeoCA",
  "key42": "2hvy2WhND2wWZJN2cHj3pteq9eo2Q3GxaUXzpLDXRqBu1T4PEd7w2CSbk7DTxEWsuhz8haHj1E4QJqPH1Snp9MDk",
  "key43": "2jt3gdpJffAfw4uUCyGgEFGHrhzcbt6p49g5o8K9TevHY3HgbRcD4XJceGbHdjHV8apeGSdvy4Z12P9JT9DCnbL",
  "key44": "46oh1EjmAB7SY6FanLXZ9JZCJazuhzQoYbGmht4FZfjJw7d8nqf8d7vPAXSuH7Dihpidxd4R4KkoGNTMjF64XRFU",
  "key45": "5HCR8USoruGL2ynANphYX7n882qwchbT8G5AFpFpgzTj2vVQxxY2VKe4kniipychAvJQjEGi89mwjPwUmSkGGZMj",
  "key46": "3q5EVo55u4WxaUPiLJQ9CnUtgbCZrrcfBWW2Np7XNJS6mXgi2arSGKqFudpP7BrYHtT96T5HpfJL1CUpAfhm5eXe",
  "key47": "49Q1JKBgkYveMhoL9eXTFcddz6zu8Nm1gsK5ruVAYNH81SoDaHxWDnttSa7eE3wkmxP4URGyCwydVz1nBTHVfEan",
  "key48": "4P2ehbLNKwMoxmuRFc2pypGnSQrQj2oPvpwbsEh6tGc29k1QnSi6zgeGc3Y2kot7Zt42ikddEyCr3ndmBmG6kBqc"
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
