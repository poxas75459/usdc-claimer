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
    "3QAUpKzuLD5yacPv3nWKMWPfwokW9xDoN749LV9yLdL3ceaP1WNK4ddMCDLKFBPEqDZSsaCJ7UUPhN1WxdsyzoxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHZZJphVNiRGqEDMQaBSDX9Hj8vMCgj7jKFPbDxdoi6GzvqADN1HRaEKft1k5Ki4mT2ZFuaPiZRgqX3khpqUMN6",
  "key1": "BEP8o6tGGzGLX7oyJQozMckx5SJwnrCVwnB4UKkJN2XBN8Vb9j1ZYTAyjCkh3ri68izpSpirBD8GVVr2tSF53cV",
  "key2": "4fjwk2SaZPWMwEju9HxAxKBrK9DAF1Kdau78NpdoxCc32QCKC5mjotUNc5PVECscWfrLxxhvGdNxjptRPpEQNy5N",
  "key3": "2ENzW89m43CT1bpW3jENCV6DbFrjMmuY2gEV83zctQX8JRJt7mNwU9j91c8rVeCFBCG5iFWFGUNeXW5GBVxoPy3g",
  "key4": "3pC2QhGfJXQzKtCcE8dU2CbuyJHzYavCSVncsSN7UWEXgmf4U8rRdizNsk8hpTJBdr6ZB7nNTAGooabpcFmwK2p1",
  "key5": "39okWd9imRkyqoyMQAtmmcbv74tHX5qhnuEXaqWsqkJeVkD6a1Jhg3qiH4iTReh7TCyJhHUxjAE6QJdKukPFu3DP",
  "key6": "5FbNWiTJ3k1WueMZoDgJJgzqtyUAbK3PyCdVgECPyBnwUs4e8rkEj35d5sk6gmpcNHKrLVfQf1cBp7PpT5g1JJW3",
  "key7": "4GHtnaQsfNgYY5UvNsvCQNY7Pv36XLjr2ozA6V42EQLCXvpbSU8B4st89vU2dJyz5XXcJS6s3Yycuv6EdP1Ck59r",
  "key8": "UpcTiiRyM18N3pGJbKwSaJYPtGpbYBGYbhkWjyuGpix4FUk2vomdGj2Zuvq23EihdnDY8kB5rjYEZ4nEkUgkQuY",
  "key9": "3GJGH6BTkJ6ECrJCB27mGLzPexSovWqJ3PQetPfYTniaNdY2d44ES5WNFGLj3prmG6s8fSP5FJayZc7iwW2hYSUb",
  "key10": "5sEU5GxQyFpGwNFYM22vqhD1LdY9Ncd7E2DnenP5LtPNvRxsbsTa2f8iQGQVUD53ykMtm5iSGFce3WrRatBWffax",
  "key11": "4VJRhMnNH1SNz3LPy7umhikqg3yt5DZFzQnHqMH5vG4e2jYEvfGwoD8hirW7WRXRTLiXLjqEkDhd8NjUiXDnsGBV",
  "key12": "4UY1sgRmWDj4UuByQqf6g3k63ptU4KmMEG9PfXDjma92DVotPV5DzQJt2sDz5ciMcvaG9e96JRPbbDXL1V2YPrQ3",
  "key13": "53Ubre757jXwvwRwnU4uAMK62rzvyyeKxMPfibbqSuHXFbsRSEKeGWaU3MDrs924XuD7ymGoSpd9FUWaGqRVtTat",
  "key14": "32wRRtS7x5CLCvXDbEfocoxkYad9ZcL1ghgaNkbVErzCthShG37SsLWiBTEzhZzCdbQV3HZz4UgvNt7DsMNjeV9h",
  "key15": "3hPf4JxGWbAVssdNgbE7qzJFdfnG8MBLibF4p4j5z6x2dfQcoQgYiqGWUroEtffwXzX2nfjByzTjGs5hATA9hTCc",
  "key16": "2Xqyvd19ziP1z36SC7jGvbgUkEVBCwfyBFPstm8Ar6NbQ7jpDa85rXhnBx4uJKf3SkhEjcRQSZkuSPJHTE6sDjAa",
  "key17": "3mVBqFPHAY6U9EBrqy3XQnTqjvjuMLC5fY4DQbuduNYg1PqwbsYAY8ECnMzGXbuYA6vqULV9hVtTyTo1TMXYQTtr",
  "key18": "3cDWH2d8ffs2P3cHPL29z6nMgeCon2vckuk7wu8pJQSRo2g9j9i8pmzhQCtb82KfjS3mz4vwcjo3nefaxVuktsUM",
  "key19": "pjya3CCLUXjnM8K2hAn21RNvqxm4TLh7PoDG2jTVXAHmNnzuF9YMZ1xvqZG8bz6dCqMDnKhN7F1RfHxzft7aVVP",
  "key20": "2V5pqq5GUpFHF8nTXqpsukXGd6UszprM7TWdmjcRaxayuCmrbLUTin7ndo8RR3JB6L47AksmFGQaZdtwZqvgKZ6c",
  "key21": "585toeuEypSLUFv3JDV2kkEUYVYFxzUc7fmVMHFkqfBjytGqYaAGJTMzfnqgn8TLA1KEezitB5muz4E9Y8PGXiDB",
  "key22": "2uMYZohn1ET9pahuXCnv1GLeyfcwAHkEQN6esy6iokUbXxE4uCnnryrGFAqkuCjJYVL9T3fmdacx1vMeKtZMY4Wj",
  "key23": "4xFU6FzB2XZyvHMZwXKFewNnkrSRxFttGUmfyngg6J3Y4Smcbrmb4axtiDmcypPY5dBGSvyMwxo2yd9qFuAfRYCx",
  "key24": "5jh5qRmtG11ZSyof8ZUo64FbWagVxxKbwXpHbvGvJSbf4FV4AWpaVsuBD6PguhSH3JeAWQZTJKfPEjLnQBGXwgDE",
  "key25": "BHcwtoHedBeYoPcz7XEqdRkBc2nXjHCxWYQ3MFsEM3HVfaib4QBKNikVwmMhXVjVPMEgrezx1RZm9xbv3HBUbQv",
  "key26": "zg6fTaKdSwzLzUw7YThTSX2ZkVbPXFs1fBYFCc9eer4aHJ4v26xUv3WRFHEgVBunXGY5yior1jDcS7a5ihVGujM",
  "key27": "2SRMDgf3XXJxjACnWAhzp3vjojNHSzM1q5mMyiWHxyENDisk9rQgp4wFAFZZ3F6tsAU3wi3rxzcTgsxcL7WMT93P",
  "key28": "3CxtXgVrH41ZvZ65m9mCB9cZCrbExaddPffaN1vN5dXZVspWEvJqNjUGKVWqC1nGhZjTiPa4XPBvwGFrNqiDW2ST",
  "key29": "4W8SnwWqFQg2ZyACFf6e3sjyD9rqxeUNP21W6oudkAc7XdBzi3vbSXsAS7ZyuP3PM9heCazKf8j5zahdnC3Zdsr",
  "key30": "yCJZbFR4QdyqeRHFqmk5J3N2zngACgcnZY27hYBagjEpxBzaxJjEdSnmQg9eEgesympmCxSgMBruM8J5e342gV7",
  "key31": "4ZzTzGePTUCUW7tGCWW9kHCs8opTgTbJsn8TDSmiFeccgnVEkDFJcJNsXf1Dh5Dy8S6Vbioa14Zj4t4dmeepiARn",
  "key32": "3dPqQPWnzCpnMQwvAwhzi2HYsnwbBKBBJWjs6GMPen55Mstjv3AXCa8cKhMWV3H5mY7gjVUXM6p65jADGSwm42jx",
  "key33": "qacPRTJaEYh65VjdN47cwuuv5eDkj5oDNyRa1NKLWLgaZjnhBe7LhvPzhzksYYaweLCJ3gApwtVpbrypNA955EG",
  "key34": "5CPXWEjpD9M2cUeo8C4DQv4itkEFBf5g4Ff55Hj6oWnje74ptbCBm7NcDb8zzPAhdrS7sbuEDjvHjdfYtcWdWHvD",
  "key35": "h2qDf2tMjrXYFx7mdGY2aHdB3nh1jfghDGzw1kXw7is2TyoxdnEssgjWbqmJSLJ7w1PiYymiA5g1vkQ4m6bgHTZ",
  "key36": "rCzStcXknWozt5x4BKdBfiG68PKnL3QCuShHVcrQmBpoCtdRfWfZai1dBFQxZiwqvNxn5etxHSpgzdH93qRd7Mi",
  "key37": "2nejdNEer4ViDzJ7rQnHTTpP6b41PAjpi2pZx5tti7imgEEMp1cpujKjauGRgcWVdc3oUB5DdKXDpD3oxVJwmbCv",
  "key38": "QaeJ7rqMgzKvbXJAoM7duiBcYvTp4PXjd9QaSmR2AVj29RPqocgW9rZCDAoai8aYmotLTMr3heCQ6o9jL53Zxid",
  "key39": "5xhpuduPMRJtwUaiU9PcSZ4P5YCy8YZC21htDMYoZauHJAjRKPfQRXEzJRjBEDkFLnCv6XBiRTP2gy2vKBsDKjPb",
  "key40": "65DatdTnaBpXyYfGWo99Q5wDwJAmL5vEC2TDGHddpVNSbK2LFUbfgMu2DSA92HAYzXySCv3ostXJxrjNBRiWyJ3R",
  "key41": "4s5MwfHZEevPZymCySe7fPea5kJBjw24m6GdX8uNHMh78ut3UkN7LkSdUWCY8CXXcSqkQVSJ4SJqAvksEFHLDmpX",
  "key42": "4vYmfYwWsuVD6waQQMzScrZ8ACifwKVwaoX7isQNCwW5w5C5Hrejn6tRjuf5sVbJS77KCE1BuBBVyXLX3DWL9hYH",
  "key43": "31sCeXU8H5kK4PwFk34kxK3qw5RumKFp2nffSzjFbPiZzUDLePdN13FRLEqZDhP3jTG7DbpXzZTVBrWTt8HS9yDy"
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
