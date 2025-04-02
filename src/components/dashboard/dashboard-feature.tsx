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
    "5TJPq4Kgd5Lt7w4ibntyB418DBunv4y1n6JLtpGNqX7JRx3SyjT3wexM2bTKMfjPxfUzaCiTHDhsbbvy5pqPPFSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4V6muMmo7o9ahUNNNigib3qaHCv37f8uS4judkTsQn56ZRRrwTMAWRCNfs5YgKsLCM1Vat9bPFkYk8fP18thay",
  "key1": "561cLwSc8yeGLDxpUWQcoGzMLUVGzbMWz1vfeGjDdPREALbyzgkCEsSbSp7uPS3XKTWfad29QseLEiy1jcuxEVxy",
  "key2": "3iuu6YeSZSedwVJ9NL8UkZC1nA7xpKPPTxCMnjuKC5wkgaotsFS53PTdsVNhKGoicsR4Qm5vzoxbCbNFKc8v9dsK",
  "key3": "uSJ3t7UKYk2WQ7Pgk58Q7DAhen9BRFnWpfNZ3TrU8mua79PGbF9uddz4ZWrnJ1YYfpJhW67aHEjcBGE7PVeBJpY",
  "key4": "4YMLAC2yvKxyAarQfneWLG8eTwQq7i6qzXofnsZ6PWHZcHbeGofQJA4rK4sBah3u97MX8YBKYD6VboBb7kZYERhV",
  "key5": "28tR7QCTL9bTu1S9CEKJvmsTA5fnYLD3pz6a6LqVhXvA5yA682mQqy7PuaXhFLa5i8mKfqJ9mSPhxjo3ciKbzXtr",
  "key6": "3w6MZiV3DdUuHiDVWM4BNyK48vyPuWA74GcNheBjUbPvCZAsK3T5tiB2auhKGk8xdhR9MsdoHE87mBDUqGjs1ZpB",
  "key7": "5NMNDzbQwKmbEFXYEHgUhLipC5rRTi9H8fptbgT9feEvhr3jSK3DmndbakadsAxpNRP6ncqGUMQnxFEWkLYku3g1",
  "key8": "4ejhfPwhPZ2ixm4RxWqpB3Z7St3Na8bdvf5HfoMYi5fGWzntawHEFBD7VrvFnQfxoDgsGUbNXtrfNUwWthHtUb3b",
  "key9": "25JxNbhbTKgUurvSsYD6MPHf4U7uLWe6fxgz6XMZY1TudwcA2Q7R24KwHdCA79Ki27EDHuD7scApkrVxL2dqGv8L",
  "key10": "38kQsYA274W6LzKWYFhxwEFwm5hk4dCbUNgZRBb6LBsZP66X1iNLLBUnduLMautSiyFoWFodT4N2hsChZTXSoZfm",
  "key11": "2XMPL3nBY7iyWC6rWcXgQZ42tAbDBNsPHEq8smn1SyrqNNjcuX5Lbwn9MCyPTrzejPDy9ZF9r6GPPDJrDd1q3wRA",
  "key12": "5cKo7evaZQUsXVesVbGX4xUE4smZAx2GdeSHffNrdmceiWAw4X86soJy3dd5ecUvrCvv68aqr5PiRT7LkVK3o7XU",
  "key13": "5C5NeRhoz8HTtkQxob51kFyp3JnKQ1dboaZRhKmxq9bR7erCjujVMMpjznNpkLLg1EPfiGtRgZ6T856P7drrq21h",
  "key14": "58y5atNGugWtWed4pDBajKJBNDgj5D3QFcSEUBYvrpiihU7XWuybwxdH71Epw5bZjXWG8Hhd84zrUpKYrRg92Fwx",
  "key15": "4vGNBD2Emd4f96NWLxm4334JaPjpCnR6ckeFUfN2oVkohXcSCB613RJzURtSYu2umydERvxMGR1ijVNe9Njm4nzd",
  "key16": "5nfhGw6rAVqfLvmrchQCNULU9aXhNDiwZSxSgj1mr7fUjbFdAWRyBaM2rGyVu8nDcxKTjtAseWvbkvDkezgjXhRF",
  "key17": "4kEyrXE1eXR5pmgMfYj8EvWjhBgxGeQT3zsiUHrsswhou8zoNFuah9mX7wkV7dGZrdfcMj81nTipxLfaL8pBhRVF",
  "key18": "atdFCsVecTp2WMfeRtHDiGRe199Aa3z4ocWCb9bCK5D7XGGv4n67tDa8dybKoMyFC6fvSrdvyT6aLyxjFC7LiB9",
  "key19": "3UMDxbCaezKKf6yAkg32UiSK4CCxMpSZB1BkV4VFJanuoKnh3wFohkPU1XnGc63nWmwAsakWmjFq5Xzp4cMMeex3",
  "key20": "5FSNH88d6YJNw5kiTVB2g5YUTxdiuSiDp1wmwK8oqs2MAHr465N7HxnTyynzB1gPD6HcMkQ6qzLapjGWq8PAMBf3",
  "key21": "5ht9pYZBkodWyczBPhYj1coFUXFJPQs68W3ZmECp7vmn8qnUghioRhE5WGa4r9dfST9jJkZjVu4C6t9ug4xbb59t",
  "key22": "FxbTfBMMcbc8WEPc5QdoncU3vrPKENzQTAhtRMp5Vji3Yf1L3JckpoqeyYTmW3fMXENzZRTRwg9bkkS5rwv3x59",
  "key23": "4vzbGmGzX6LsJhwDiE67LcDL8VasZKjdfBam1qY2JUy1fsBFknzwjTRPvybfwk9HHhoRMQAs4AakgcN2HJ2ogAFv",
  "key24": "5RmA9rMNhB9x4RqWE2yKCej1kujjT6hsf2B6Vrp6rsGHfP6gPKUVfz6RjwpK8Aco1JFRsnPKKX9n2uFFEHWd25VV",
  "key25": "2MXogvmBF1iNa13CxcEabYsGcPDQovBPL9WLYsLcHsGKo7KkbESS2iGn3xcSPTCY12Z2R2vrEM9NDPSoA38sD9E4",
  "key26": "5u4ncoZPHsnhGfsrotXobHyzauYr7gSkWNiaUwzyL3QHPU3jnNW2MiLvZJz88Fh52sLPGQvRYupHi22oSUEah8Fk",
  "key27": "58CAWdCrLAmzkMTG5VYjouAFNKFBxHRuSG8nVkQcDqKSS1BJQK2871F4PFthVW5CMMCkUtUN4oTFBZtyTEnt7fXp",
  "key28": "4myawCnSNgECgp5fCn7CpH29jrWW6vjmYeJbPoWc59UnrLtMTFEPE4mJdkK7mfX96sd81PDEpoUpRF2K7oKNAHeS",
  "key29": "5yFoaMVNeWKiFK2oAtB3DshchwFFQkUxoSTecMxZbcAMw2osU1qwCJaSGKE4cA1aQFrGyW3QswdeFsp4NUqzZZqt",
  "key30": "4auhhNKcnYNYNHjY5Ugty9mvASYFdzHX8eLwzUvjG9Lz5cdQ3YjRfVsvzjiVfQ3e34ini3xBYigGk1hyaUEpWjc",
  "key31": "UWe5sjem15vMhKHeVG4k6jn3whnUiG1bedRRy6t7Z4jv5CMFD2S1WMheta2P5wj6oFRqUSwZHKiybuZPYzsPXi6",
  "key32": "5yYCwe5zxvYV1dv6FtLuxc1KDgFsfGLy6G6aqvCUL3P18XSbtKYGtXubh7ss6wtiVZTrXUmjM9LYJrswwcKcPn2",
  "key33": "4hVqPxR1W1UfnUZp8V3cP4QKGsP4N1mTpbyKLEGZ9EPzNBa6nZy45FyJGoNiQs6v5mg1GuMbPjdQb675QzMRvvfa",
  "key34": "YvVk8uWr8NGHb53ddtd9cRWFR5ZKw4cxZkktht2McuCXgaPvjRjF8VeXBDJwpKsSozmx9aadcwU9gvGR99LE34B",
  "key35": "3Vstt8Kf8ivhjgamhSwYq7cjcDobWngZBcgMhB3DrvmV5AMpifZVJvwFkkcKP9rp4VoKsTrhEW3VMtQjoaG3PfHG",
  "key36": "2qZUgHfqvjiGxW86ZSFhEQ5RKuiBc5xzhnudcSmmFNmrVRV4RYgPoiyfjVugiJpp7x8QbqSWTb9ZLSujM1Mb6LNR",
  "key37": "foEn14giRZm6xrH8phi1XsKkuWwoNQC15GoRokL84prE6KSTkFiTvfNQraLfJzPdFvrNxRM4D2yZocrCT51uSbx",
  "key38": "4FMJvpZMGUebmtkjhyWnNY5aLtYS8T8veP5Baj2rbYzHwJYP8zvPax5ddw4ncirVvbCqAfY5LNKeu5F4wHmCh7oT",
  "key39": "5ZaX1Um2cY3bH4DrTzCPoLqVN4svP5MYHwoDvvDqkvsaNhamKq3tzuvqmYWEvFBPiDiEDyWAsjWz4e7qVYqJtkPH",
  "key40": "556oe13LRF157u63eLCuC3JtDSJmmZwFFZ9LtNsyqxmpYL5hiGavNx65e168ZrFqD3WWumWNRVjLtzKBbnTLHrxw"
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
