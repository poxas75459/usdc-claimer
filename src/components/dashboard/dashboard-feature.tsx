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
    "5XLSUK7FLHJQivpw34n81jxZyaUrpgP3T2XT5Pnj6x3LKyVdfEqfZL3YwHsxEo5hAzJj4PShrdf4F5sNV9JUiLrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8Jz6PxQ5wyxhTLZcQ2qKxi7u2Z4optPZbejtAtnhUwFTW3FijTCNygoQRw3Ei3WBVwrJNkNUciVjDjanaSrTfs",
  "key1": "2qVz9zQfGFjHxBxVccLTFco68B95wdvD6Zr5duX84sR3yKVGmftbugnjFeS3gSfDCk5xnRNjzvqpwiNXCeGeG4wv",
  "key2": "3zyWEBPfPyXEnNYseN6DxHJRJbkMMEihLMV1AJR1vVr8nAKguQHUUgojGRiimCtjZiJVBtJnFnx6LYNmqxj9Ez4N",
  "key3": "2SE8mH41xRRpBLMMYXrJ1SesRpojAzCZpciRYLn5jE5mBsh8c8Cu4ArVZt81gp7v2BYajh5ysMB7pMK9MBfEP5ZD",
  "key4": "4JZmuJ8zBkdgHvLBWABH1FKW4pR76Su1rLWXeHeCK24nrk2Nj4Jy5JsMDoP7cVqdXsqepYAmV4PwJjZ1UDicqPgC",
  "key5": "q6UgN3b8cSrz2GsdB37a7zAXbo9HK1gwUNrubeBy2B9qQuTYXfBeSHqkUYW1WNWjLa5yYpCgxXb2VZR9a4kzkWr",
  "key6": "oQuZzyhoFogPRmBHkNDCRzVMBhQ3oQGx867Kg4tP3167RHokq95MDJJHVhysbDGGS1ttxfVNRnsdSwJ9UxKK3YD",
  "key7": "5oqnWyCvSWZmgR34at4zGN9a6Ld2qpYsmanVLvEeMGAuDA911rZNFxyyzjUJerWS8KT9uUc2VKmR6CUc93ZKqFqo",
  "key8": "3Nj34YY5UcPxfym7DyYKCsbMvgLKvxoFMktxAhvf5aH11kr8VKKm6exUoaj9FPKVMDTKWLjwLj5ZwsUA7naY4bkb",
  "key9": "Sai42BhPPsH1dzwRADCSnxWAKo8MxuSdhmGEtv7iXbyEiuQDtFdfD3HYEfsGGjzZBNg7axEBSdfCc82eDYS8iGz",
  "key10": "2opmkyogap2zEZ5RAUmEGE2gHVkMzSJn1fiQR2dN8eFjeZZZawyvtVqfWRKoDEL3Y2j6kmZ7rEEp7b6vpDiEY5Lu",
  "key11": "Av14CgCJzWxHLZpCa8feCBJjcb7jKh7tDqwpkQYbCcfYxfytaqZv1C8q7maE74AvivG1AKd24c4qQgXNnURKcGA",
  "key12": "3PpaTjzoEUJjpTkQE92RdKgevu15d7q4WQGabjwvW8Dh9xuNRGaah8KVE34YwyBqg8oASUzgchEPrPVrQmq6pwP7",
  "key13": "4xSmcR5huTcgdB3EAfX8YKye8Ne9eKnyVNHUGu3ovNSUDfoYKwtRXSVsbhyP7oqrFDa2DpEL6xC1b3MXWDLHpQgL",
  "key14": "41ZVdcVScNoQnYbvBgagtZBCYUY1GedgsLmtzE7twn2Bbcz6dHBi76yJGsYY5q38g9XFM89ZNvMgpsA3Bes3aYSx",
  "key15": "4vLCxA4E95HjTGiuwCsnQsqBhNhg3JrawWjqgL8QtSZwmKorGCT9YDvPYyvuXTZsDN9fFeqHJ6ov3G99KHR3X2ux",
  "key16": "4FckpQAdeTUA9n9DFiGCW3p26KGNNFqSomeF265bCCf6moqpM6BC52yykEG4d6E2ybj12AnX6X4o6M1G4BkJPtkF",
  "key17": "2GoUgoCVh4DbUM2HEHoP689YSWBwoKgTuyzejeZqu6E9A81WznWYtAR9C6mPMm9Hi5cMq5yFgMqgMAP4ZA6WKQNK",
  "key18": "ijfGpzuk1YivRtKpJN9o4ERqXWGf8W55BYtWgvcCS8EqeWP2bqXQqxXepK298o7aP5M9ZmaJ1pm6dzv6TzEnVii",
  "key19": "3CPXiDV5q3742oG9jQPLU6GJJJadBfcrXJCYS8BHpxHDKmqeu2bYCtDcoaaFeUAHYchzzrn9iAjTKGRAJH3w9ApS",
  "key20": "3a8DNwdimTjycd2ZcPPBTPmnGYDF31bf711D1FCFGU1kd4uLWxKFvCGFCiL2YpuiZ4A2YJjuHiAKAb2F7M2Rpgyh",
  "key21": "46PgL8dPAYLSTq1TJBXxxfhK4z1y9ntcPbJaor145wEkBS5CxqHhZVYv4W9jg7BVbnySiccK7QYTDfax5Jd68tvf",
  "key22": "5oQiQ4L6qJopLDGVKU2cGBRkBcJmToDUhwd2W8EXqyo4hMtLJ9EU4SK1E1PYnjMc5C64cXBacMv6SEmhC3Fe5Xzu",
  "key23": "2L9L2uJyHnKjmgbAqcETF1WL33FajBbMQMp2WBuLWQ3Edmuev5JiMkCA4QcXZzhiod7RJRq5v48K4ruKbi8PfmSn",
  "key24": "58PrC9WprniKPq4dfNmBFpFom7ik8rYqGBkF6UWaFoEe9xqS77AKx6tTsRFwdY9cS2LbqDXG4nt5gpNGSeSohBr2",
  "key25": "41a6HnyPngH9x8BBR2zFNoJ9eerVtruF44n7NtCBue5HMZ2vQcZmbgYUQoeNU3z5gPJa72fw9wPWmVb2fgCGQ66j",
  "key26": "3VX9p5Av42irJLxGprydKLjbi6jgTZ6YXpkGuxKEB2y8yatWoT9WB313d7B1Xy147qh9iJxpHxBcrBzWcW5G72ML",
  "key27": "5viK8Co89G4PyZn6SuXFNCMCWdKUYvNNiNvxd3PxtvMgCFMo7ypkw2WHmsSEbX8Dr2QHGaYX1wVvXfMneCa8YCUL",
  "key28": "2bvoFT7jiVGmuMC1RApHZpA1z7suHMMaECux1DxLvJue6KXvcEWzry3c7Ra2tERdFQRxHGd88ev9839fW44tKnHq",
  "key29": "ihyz5ySsjLA8YuDftfWfaxKNib7yG2PXsguAGV6jKNjXtgUk1B67pQapDAuKWDnFfKhDfPdERiv75X7td6CDzd1",
  "key30": "m7As6F9fAASRgB9Y7VyLcvuNKceJ4Z9qYm1YA3Gghi3o4wtpzK24XMY83yJy4QzjzWRCrGWabTXfYx7EXM3e1h4",
  "key31": "2Luy8ymohSHuMUiuu4eQAPBjFD7FgiD2MfuAwPcAf2eMGn7mxG7Ywa79ypGhjKwAyNecJ1XLEojcMQCj7jFUrQvS",
  "key32": "C1RwtPkSTc33LhVZCSKEgCjKKJQgUpUUAtsUyDnjdfbABxJsTeYfam8MbA24vj5y8zMzbkREHE5duw92TVZaNKy",
  "key33": "if9t3VSTW7YL2iqZRruf3g9KQ2RZPhEE6t8MvB5fTLi5PwZR3qeTk1uxiLkb5VMtVtbB8rUmkktuwyNwJHTcWNH",
  "key34": "25RNdpNUmMhHkKk2JW6zHgdsA2AGGCrQL77xRziTHYKzNE52i8GHqAyxCrYysPsCgMkninZEbLu1Cc8tJhzX2JbW",
  "key35": "53VoxT6YbBu3aajNShDGXQF5EKNftv7kyjV8L67UPn9X2yxT928CoSf7K2BUh79fNPp3iythC1oLqjHEBnyoVFZX",
  "key36": "5GgG2Ce2Ur54jupT5hbmkC2hzGuSCuj3h3qHrk2XuSKMd8ZtcJFx4Lghh2hrdM9mshbTK5SvpTyVTJNUxnAc6mDW",
  "key37": "rue3MCGyPc5rst8MqwQUorzPjPt1r4L61rYrh2cFvAJF549CWmvrBc3g7WrSUJ9or5EuXbASxRUGffmS5WDqUTt"
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
