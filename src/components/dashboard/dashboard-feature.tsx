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
    "esKAPTVMa7g1nLXSp1XRgTyTDaeotH5czmkFMBKqyKWCEpTxJfw2w8pLH97r4GGcgkrsLsyLCG76VmynMFEYqa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJ4wjCGZ7Rey4FSTq8csMAueH7dtSaPQrQS8JtmRjQEquuAyXPwoyGT4DW3BfbjvrxwLZLD8QmvKecepSZucQ6Y",
  "key1": "2G56eRPQGEuNesGjjc7997D2CQCWqB1Va8Mb5WzV27sd4BCgbo5YJHfuNVvd6y55H1HQqTnh3D4DiWyZDKb8qvgf",
  "key2": "3NZ4odeYMT3C9rRkcM9c6ay9yuUXtAHrfera3T5Rg38FRUgcNo8XPawRb2GQNMHyE9ErNFzSFbmsZJmwfgt9Xk9p",
  "key3": "64aDkpmTXjkFnkgU8YzT6VD9CkgukneikHYickNyAioKbCwpgC3BzsnMM1Zk83tHpyaqZGhhAWHjpKLNhd7nZ7mp",
  "key4": "4z49KJivreyc2GSjisfPpcbTmnSRVbxszNzjedTpAbHXTFrg16WZBkvTjzomBW4nN9WbyzEnfAP5kUpW4UTcWnnh",
  "key5": "YEtpN3bL3DaPCseviiNn6qRF5HC4XcVwdgniFVRWo8LswjPQTzpAGCdXQTBtHGFnd7WjWVxdMGHRmnCJAytJC6D",
  "key6": "5RQWsXpUKcCbux9HoHENWqXi7jFJ3XgPynEzudLY9qFzejq2PNUgBYPi3emKA5HpLo9RoHXDsEGD1iFmWR8No3QC",
  "key7": "2oFozUgfkKaZRDzQn4DdVA4ec8c9mVdjC9ch1rQ8T3zHfKjh5fPKSQEEy1ajpP9gXdXLTDnKnJsrNJtmU7mXzXaw",
  "key8": "4SFa6k5iK8oo9d8XXFrq61MhhG1gw3EczSrgijpA3wcqqYjgAR5QD8mxBcpxy7Q7h1EC675J7XmaWCXfKdjhLf4F",
  "key9": "3ba6PHzb6K4K4ouBcrAVLGKfUSMqqc6ry47QeWJDbEf2eVDxPsRsctXdS1y5siGsVN7LrqX3VxBEbaQRYBv7893A",
  "key10": "5nhGP3jU6oJseDtiwXUR891ipDzKf3epeyNbtrDpLjZca9vcFJf8ZcfCGZqyq4LU6fR1eB3goHdjS9EsEwA6wpcU",
  "key11": "3p6aGZ4UgNX2omBjXQyTMh3X67TqFzaZL3DvjjS76ExrA1z787QHf1LdX7RHUqjoEmngzwPcsszVPJCo5AAMgwDm",
  "key12": "6mu2UkDL4dz5We7zQCsNVp1iZsYGfYXpFMiMDSU8ZE486fT1MWQcWgAwTbVEcpFnVEgeRfPP9taxciCq2PEZ9cZ",
  "key13": "3goUu4JenegmLnkYVGAi87kJhoJ5x4XDXFgD6VMJfeLWpR3DXpVRoiJA9geUnx6kNHgG8YyPJwgmFpW1Mn3eFRsj",
  "key14": "65qGa984pG5CX9ybrRpbZrLamuvDXeHqvrgZbPkdtsMjdnJQWzYtUscCmAEWEfXiRc5KacBLy36g1N8DBGLGzF5P",
  "key15": "3AF65gDfHF7CzFGty1M5UfUB4b72Eqr62RK3pfESFWMVTraqTisgzp4JnAGAyNGNY2uD8Lc6hiRGvmGb5ceF5G2j",
  "key16": "3a5bRJwf16q5UZLTnZX5t2sMQ32cd5r4jKTrJWKJEfVFbeHYT5Ra3ibxt3Y69AGfbteZAZawQdeA9B2iNCJrk4zD",
  "key17": "ARSj1hSbq84CVKh49GuNPvrhiPDaSxNEg6pYc6WZ4Wx4phJJAkVmZJYikuVZxTDmh7iPtTaUDRiTVaZnzQw5V8Q",
  "key18": "5k2cFmVTbX8ELvXMTEPfJfLc3wtLvdyd1vNrpSoJfSdFDSKCWeLvANniETvxt7Po1QiqENrLZzxzfc9qHrNNeCqa",
  "key19": "qRN6tXzTQkmdBQ5szkmw1jCd4NviwmXJfzJEB1TAAFqHBHPk6FD15k551tDtonjmPgz13QRaatRT7wsaw4T7rLy",
  "key20": "4zZCQ5emh3cwvroz9XqhGWe4mSkhsdzwfyr7kojhiKZFEDQ19n1aUFZifRH2xyoyvWr2v7mrn3eZVCJB79J9CeaL",
  "key21": "FPkWKBkuLuG5qJV59fWZoFUVnv4fSJjgpXTByKbThfJ2TH33LcMPaXj8dDPPfwkzB7jcZfk33KjyroejXP6K53H",
  "key22": "2gunx2ikLPeCPeEyzwGFDwBvCKmHs4B2Vu7DwyoqPCfK6LgiaKydzHQCZW9XdxdiA5jYCn3j7JbbDWLcc5rd425L",
  "key23": "56FrtKjhHKXXsLyW5mGzdG5dVYHEh6951SkFCBVCJcYYhMkBsEFE47XwK9mi5vcNkA5VD9HWjvmpLyH7vBCy2HrY",
  "key24": "5uuCXBmRpWWvyL3HgcQYTPUjc4tzhJcZYW6Wh24MQweATmV91nVuruPXvoEiJA3CsjKjZckMRTRkRLHQJLERxXbH",
  "key25": "3y2mno9ocS4uV9hNtod3pGKKDU9TUXjqYpYBAaRcDzYgLRvad35unpd3mRLSkyDtj3btrPeouydUJGoakWto3YAe",
  "key26": "31LD1ZD2p6AZEcyZms6MqUZYoeVYjncYqnggK28ixv9kRWMsyvbmoDAeh5fu7RGLNWmV2Mfj3co8wpFcBpdci5YE",
  "key27": "2AttXNwWpUcaBVZyMQK4h8TDPPe82QVQ3pE1jgczeCSajSRjXn77R99gignqJ2ASKioeJpPXPejrNUxfsJi4iU7R",
  "key28": "yWiDhZ9EceEHwSHzDtxsg7h2d1LqMzf9pgD112KSuhaJHnkF8wxkkcpH6aotJqy3SEb8Bk3A8B42NhNg8wBQkgU",
  "key29": "23km9SkVcKeivfkEnUaX9Y8DdmWKhbHFsNzrDYpuykwwquyFt21hzCcjyB29SUVKW1hnswvDk2s4rLGxpd4jqSCj",
  "key30": "53tp6DttpF6z43gP2Z8EgHSLAZyGGpBF3WFTvuwgmSnGns79kthjeX44PY7tHYbqovhEFZbEovnttodT9nK58j9x",
  "key31": "XUvGjy963pqiyd57ow1R2EY16zysCDG7esKYhwqxWngJVucDmsUL5zy7UMjVmqVo8qXZBGcqq5PfJPaz3JAwuKG",
  "key32": "irVB953Tk55kHHnmREDVTviqEqsTjMm57hayks27U6F3vzLjzGKCVVCdm7Ds9j94kcpNUzjBSR9AQ7QVkxtwLKX",
  "key33": "59a1kGw3cD8u4FfXsTefo7cDKC3rfCCD49nkKaELerYWBV6c6GQGd7HoGtVbEWv321E7qQYKy73LeJFaMFFhrS3b",
  "key34": "5ixq8T81V3hEYjk5hh9oL1Sc5P1giiZWpHqAUgdAhqf8EGfyctA5SjExGJZiEGnyg4aAUpuDmW9VLCm7w5iusTjt",
  "key35": "5oD3bikSzhVqwsDZhjxKfqHy8R5kwdeNmgXA3DJNhZjBbYbVAZB2cc7fhJqqJ8mSCdfWG9orXnvL9ksqqbQWtYCc",
  "key36": "3PqrdUShGZ3iQpaVyFDuemMmUf17U58HQri6VGoiBSmRXgjdo2eFKZnPf9dy2crEvTiW2W8BXxYQJJr63aA8KH27",
  "key37": "2p6mC3TxS1BYAVDPAA8Qx3J3VgrCdzDVFFqL8cGaJDF2iYUHwtjr9wh6Za95tfEvFtd1XfnBtyQAYpgLxkvJ8ULC",
  "key38": "4bA5CQWxtZXYUb2kZ1Ew3to1Rw58Zsowmgkmk1XjoxgzgGrscXXEV51feJzrdoY1mxB9nm5zMZNnKgRbaQD3odr4",
  "key39": "5dM79yePkh1quitvVDfeef1zu7xzoTrsxYkPmrgDWzzWSm6mMULeTayEJDwEoGmR24YSjKUhZFPgu5KkaQfipLCF",
  "key40": "3yNSKdeQmC3duLSeZqka8i3XCRK3yTRCgBtHKJxKGtEHf11noNTB5EvsRyk2NGAukingXMyhfrPqMTAAD5H137zq",
  "key41": "3CwhAPVBodEbhJUcTzNLvX6X3hrs8wDGHiiW5S8hMKMBMMfAaW29zJsCvUG4GenCgM6SrsFA47u8eEvsPk2X9maY",
  "key42": "4JBa81oydgq5gSUBH9yiLVojiyvbmjNYZ21g65FqtvjMfG7m6uQvKiPZYgtZiPsX2m9DPLDij8bzQczd1cS5y4Th",
  "key43": "cwdKMjkLitq3uGY74MkyiDeits2oSVFj5ixHHCz3d4h6GZfoDD6rmowbkBDmAcPhYCycSWqgvbjeF9uxw3zCLqx",
  "key44": "bnMU2eMcaeyxjRTD9xfJv8sEr17dYE68WE1PBUVynqfkQCBkD5J6AUzp8oqksz36o6YxRiSuiUweJeRMTX3PUrv",
  "key45": "3fEH17aT3bzTxSEabvDJybvTFxU4RyMHmuoELMxGSSx3RgfmMFQrX7xaUKqzy3JAoXntcGBXZY6P1Wf5hyRNCvWd",
  "key46": "fxXMJ5F9TvptXUdGipwKggmFuXX3LtLZ2SGiGESL2RrHqywcELtPdkGihMajhw9MXt36mzeDZxLvLYwyUkYFii7"
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
