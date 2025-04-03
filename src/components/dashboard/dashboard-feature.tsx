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
    "5SyuXjoxjmwx2fkQAsGryAMpU3h7aooHhH2LsfPPJoWQGp55ibuBvBnvkBV7yvAJFcWDnQLyXQSsVL8Rx1cUAwLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ew36SnMfVp9sB2PBo4JU78q74oZcJhfJpuKDihyyok9bQ9mRUarPLRMq64v5KY3tsBBEncchB4aCfEiqo9kaYXo",
  "key1": "2xUSPNtoAaRxsfRciwofRjjdo52pLbcbxzkEnSwtmXEzz5qZTV9RYNsX6XW8nJNEFznRMKtBNtfGeZK56bKWTP3w",
  "key2": "58Fh54CNwsi9iGn2JahEsxx5JpybL6DL8SkiDVW6qedf8cjbSVGtwSyECdF3temdqoGj4nuJseD5iZn2VRWKuWR4",
  "key3": "cb8ZQfwdBEasf74JJvFcHKfj8footUsk9h7uUrHZaRrvxX8tbHSpJSm6skLmdT5YQz3upneYZkfyWGV9JwpiQdN",
  "key4": "5v6J6BFmxwkNrT4ZXxnWnung8i9kkBreXQBkmCpb88SbkdY9sFFBC26svLnU1p9evkuviXvZETFr9A5VsVKxJtSr",
  "key5": "253aWB3UAn7LLPU4DLaHdZNGwfGqVPK2ConA9rQ5JrYNZ5bFShRFxkibBKeYyAvQ58m3XihRYXKtNanymzMkoBtc",
  "key6": "4DgbxNbcgcUX24mDCi8eLzBJYVDwaYAWJvxvrmYTSJ74Psp6YW6nKU1fCKZ4N5XWgWQRCnZUUKNB7PS7Zfu5kYn4",
  "key7": "4xnXVaQGm42K5DyEviiSbxHiZpdiDVSd9eXxd5BiTCdJHLieQwegHxvWfDVGdBxZsaFFLUqJa7FM9LS2unE2MVoH",
  "key8": "3KtLXuwLqXz9DnpV7XNmerJMoRqPXXaTLQQdpzEFNdEt6HftjtAETHQeazVxsVcsbUtLXnxiRLkuAbJb7XQywtRa",
  "key9": "38GtnVdY2NPZDffucVQjkMXNckyGFc3wqbDbKRVN2jjsjgNg2D2UoCfSutzbpiyPXguzB1eE2f9yAeJffa3XvYzD",
  "key10": "5FmHsVcyKtNDHUNd6L5SkyzWV29u5aNqhCkU3zBf6Q6goNbRHxUg4H2jYPnoFySKbL79Q4efkknYREj3Z17FtneK",
  "key11": "4TukEHSCbKSjuXxj9ZDS8ga5pskNfNiePseKcZjrVTVsZScR7dN9xcXyPKGgj1mnLT9kiTFPoXrD78rDRH1UcUPD",
  "key12": "3SHsCNmmpMYp3K3XzxA1HAJPfvXBhM6BNZELzpVm5re2FnmxJ2JbJvV75ry6CEUxpmDpdDchZof2oiv1eFFr8mKQ",
  "key13": "383zJc8ni9AmztCwANVgMjCT27grXXXb2YpfWLYbMCwXa4v56otNEBVrZHbSUNJH2sdeoQXfqvpbPefZMMC49aU2",
  "key14": "4biracqqyxGUBm1sAxBEzLbK3xonCmHhmMjg7jyY8NRYxJ8zSX8SGVfoyc3FbhAYxysFo6WcPVm4fhL4HSThNyuM",
  "key15": "5mNMgzvPGz2YCLaANooEYNXxqA1Uvyf8rgrD6phfEX4YK9UBgZEMQgucJ9Y6EhRjAdsQXFHcFJiMFuHQ2uCXrevJ",
  "key16": "2gLmeND5p1K7t6SC1jaeuRCdHtYPRErpxXvGm2GmFowymfTjR6BZgAzjDNmXGXjDxCC8jhWKQn3jkfT32L8GW4v4",
  "key17": "5uNunSwSfTK9dpcw3KmGxBcYaTVmF9XfqCjGr44Q3uEw3Mw5EB8yiGj3qmD3gCX8WpJYHoRuR4733eJouUw1pTBs",
  "key18": "yfukFWDK6SJtQFXjNr8KYtpFDMxX8uxoiMvcB7i3XFx8e2gz5u6DS9bVuLdTSXz2ip1AtyG1iwhfDHNebNMexov",
  "key19": "5kXQmQPa4m2PtWrX7TUX6PWa9oGyDkYyEMAL1QVbcyAhGnCagr5qR7y43ptvYLq2JLHPyC8UZQ3uvS8XSG1uM5Mn",
  "key20": "3VLauBEsV9shwcX85ovNMtKxNkQ61afrwDxCVKx9kGwrzpT8bBcHa561wzRpJDiHCgo5SJwuEWsn94JfkYSAFSc2",
  "key21": "46tf9UZ1e49ro5NfcUa4t9y9h3gjtJNTT9smPYToWDttNsEWi1W81NcLH36a4Ua1vCakfZE6QoBU2XNjuj6tNLoT",
  "key22": "33fYQbdEjfLvZPZNjMZjdBFVDbbEZdeTGac5ddFb6wKiSBciGmGSo7MoCxhEQtuZTugzxVQy1uCtkjQcdCmXF95o",
  "key23": "3SvP8UC48ipefBsKxJKYtC3z34rM3qLfnxBwFeoBNaNj5zQbJZVSsCwLXaN8NH6SwBdUkm99Umt86TXSSeUiurq2",
  "key24": "4kngNFT37P9mm9RCaEoFtzjjHDQdxZ4nHpZ8pxaJJxLctS2UuCVe7db865krMNqUJMrAovPcQbArN7ThyrmNRXdp",
  "key25": "4ognrvCnEXVpZxBP2vv43QKttNvDsrXbsbM9sF5TvbE3YuG4Go5fLX2x3xr3sXVdURdoPGBQm2fJF1znTCRdG2PN",
  "key26": "RMWyK2WHBTcvMFL85vuK5K1PJAuBMe4myQkU5yDkJ6vJPZkj8wRFXrPQrgZnCYkRAjR6o8TettWKX2Y5auBavvi",
  "key27": "5GEYVAY2ArX2MUEkzEKtBUMgG7GHsKG545b2mmbivj3LTQ8HNz22Tq6QSM8oyBR412Tphx9m5M6LoUAMjoYfKR3o",
  "key28": "4X5accNN2bhry5ABeNdu58ZVLH8snRAiWVD3EBMJ1BgFsABrvousaDpwrmq1gkotVFnb55WHZJFV13nhxVSV8bDA",
  "key29": "qwEM4Jir6DB7kJFHTZN8cTomBUNLwYnDEkQoEvngpUa18EEwAcrJgsSaGqLj3BV6dy8TAq2TtkXMSgjzd1grWpr",
  "key30": "RDuHX4wgFFxCMG8nc4D7QuCTr8RhFambHbD9t2eLENKEzyGvywapxerJgLPv9x3wCMar4UG6ZtTGSEJyhXVuYNR",
  "key31": "2dkui1x94wg2HeSFjunWBk3PDabNWfkVZNX3ndR7EJ4HHCW6GdMQhQPeA1e8kGobQRTuKx8CUXrYWKRWqjv13SPK",
  "key32": "5wBvgyddBvot1HyyacTDHsmZabTMjCkM5WrzbSjBpWfwcdkwivMx1xvTkrxZN2TxBUMF8MpicKrTkMnDAUVQm1Jf",
  "key33": "61iieerJ5nBdrg5ziobeSzyPdrcLkgzax3jsubaHAKpEJQqX5JruCg3ysF41SiQfySNzCnvT4XZ4AVKJ1zmFEGcm",
  "key34": "4KppXBMBRdouayNZTs8g6VomCbTeiruzntsKNXuBFUypTkQ9aD2dsJnjngGKDb9LugRBQUvVpryGBf2vNorLSuH1",
  "key35": "2TGRdY67PQY4cwEx5FfBnGQMRFkYVyEapPuxtJ73kCmzDBxP7UEEHZZegnHNJDTiGfP4BrfQUUv7gfK6fSEY6cvk",
  "key36": "81ua2V4YGF8dkp5FyC3tuJDUsRJBX9RWnWsTo2ogMfmVftVdLUaokQXstYjajergrV18GrX4jbsRjD9iPTNQoQW",
  "key37": "2soRXZfTX1Q4NqSj8pWvkMVwNZb6G3WhZftkdj83HV5XoVKnkHSKNe8MVocfFX8qbYVtoFEhiP3fDwDQmwpVv4Ui",
  "key38": "sXCt9qm6QJy3kGYrZG2dMVxUhMMskF7x7RvFwTET88mw3vdasCvyYiXy6WjZ4P3QnLUZxtswe6SsaZc2m1j2WtL",
  "key39": "5jrc8N8eJBcz3d9JMEGTqeEMXDH5ANrwzoCAU7LneZCQzNNsReT17N3ELFGH5GuUffHK2Vba9uqSAut4R7ZFSCtg"
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
