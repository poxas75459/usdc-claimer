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
    "4ydYa3ceMdJS8XbMWrPyr8yPDQ2q4iZiX2TBmAeWdvE32LYx87h7fHD5edEmpoSE3nCmKsS36gLnUgK9VBiZRuPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QxzU6xKKS3Hd1Lcpdorvom4zazdQcwQvGL3bzAXN8Dm6YCbYsSTGfkmL6wpyqGyNRwPXEohv4eVCxQQLmmhesL",
  "key1": "4bU9cwtx9uh1pavmk8MzBE8787nU9udKLmi9dLqLVD3FYJZKp5PVKiHqan3mSvZysLKTbFMJfHA5eA3AcYNyR4zq",
  "key2": "3WKc9dJXDry7vXVyB97BTvdNdbHuSADxxdgY6ggXHDxvJ6TRwxHYZroEJzxy6TzCUcMpU6U6BwoHJPUwafvxxsPp",
  "key3": "iXaxw6FKpTXwrJVpGLThnLfGFyYxU3E172N3ptZGQKWmPxaxkbRy8hVm3Fx36e7bBbFrxYF5myBCQ3MRrR7HCVq",
  "key4": "5azLJRsLGYSaGECZHbnr6DJxYtdy9osLpdBP9VVxs1Jun5yw3DUx7ZLorZJR9E3CHLxzEHcYALF63wnsRygF4TFm",
  "key5": "aABfjLzF69yMUo3n9GZCHs4aovk4JfboifG61MnPD9Do5TFgZ2Be2eXW8A9BBUCdcVVgnprMUw6YZmVzCxHTpCg",
  "key6": "5Xs62W7Jrs3fxUgfw2ikJcD7VBaTLrSu7Jzsp6iq9jEKZ3HqENTMwEJf1G3qL34DhLEpiw7pvD9giQgmtyZK4wcU",
  "key7": "5JiXwYqBjDF5xMEzuc2ZR2gZJv5oAKXMdvXtYLN6TTRiMkc4oi54JHS2QU7yuDUbUkhv9wnLZF5tYoUQKXbSAAbf",
  "key8": "2afn8ttm7YYK4GVQrokMCqSJwgotL8YNRVoxaGs2G6F4a5BnusjkcEDbqxhjCoWithFvdCmt2pKkyqAfEtmCcB5C",
  "key9": "gqmpvu3vGFX6me9XxiExh8VYFBY4nnkx3fzuCKeYy58p9nMykYLm4EbcwJEXZMurLoLgWALZZmY4PPJ9HiE2NfV",
  "key10": "2rtNKGDjig6RV9mv1HKXH4My56j8vaDyGiizkK6zTZcKHyGuSHZ8FHeZ2JVF8Tego3n4MEucGvZP3dXfw85kkYkA",
  "key11": "3Kiog7LE7fDgVL7jnymG6yjc1NReWxParsF8LfF2NwAd4CzwcNjME37mWxqk6WCF5mfP9187E3SXTKanHWXZvQiw",
  "key12": "39irs3rtaXYSgmbkm2aezTNSLchKNomh6LqfkMdjFZfXhWZm2j66uGUhU669ZnheFvcyNTMjaiyxhUEDmeKCCaFa",
  "key13": "5P23hkNUKUWLP3oPM9KNHJqB7G34zwtLCjhpudpWYvKgoZ9aHjE9tvahne1R4cbJ2RFdviZegfAJ62SisizV7CGb",
  "key14": "JZztjxJuVTNdDiAFE4AUNCfYnhZJnV1JVtKhwJm515DzvhWZstgdBnfkwwWMPKnmCpipdkgWXyPNowBLdmyKJiF",
  "key15": "2YSjGENMm4DzCo18BDMFemKTm8LNbv3nTn7BGqg1XAE1u3nVYMVaj6FPVmAW9j4p851km8fWyoWNPETRzpn9baAH",
  "key16": "oheu1EqwsU7Pz7uQ4rLYHkizPJU2gEQPaTTZ33CW5vu3rHNA1QXNr9j97vXDfZW2uBjAsonLCnhuqSKT5d18czX",
  "key17": "3TcBgYKWSKYeqP1G6cck9a6xJCt8AA2B3DW9PveQK2u79ZEfxT97yFZGBwkHGGbyXSup6EJomNjTXKUGtuQHuKY1",
  "key18": "32hNteqZHGGpTXiVJYmyLSbMD3zE31cu6tKhQTyA9cqwfGtbKgkwctLqbtWyf9Ck3FsKc9tdXoES7aCqHUV6KNhQ",
  "key19": "5yT4hbV45hcvu76YFvnBduFxxc3z3Ba5cjwBuQzuSbHUZkbrjj3AzpW381SdcEXZLeaghrYPEkp8vXoe4UCHCZtG",
  "key20": "67fEM3hV9BVWkLqV2LmUvStwgPfqZGmeTL8VoaLDPakiAz57Li5G8rAXBuKxsMkvH9EkCHwJ2PTL9v5o3sw2xxhK",
  "key21": "25NfNPABKgKcw8DxTCshfFuHMPf7jkePrTHMVUses9vdJZXRb5grXEaMwE9kaCk5zorZcUXgCuz8b3xrnt13nDFR",
  "key22": "2AhnCqj2J3XtvG3SR4EGZ926HNLayRGarv9x7QNv6nXSgu5Sz4dR53P4Q1ugMFWhjdyYciJnCmUTSpLSuVuCrme1",
  "key23": "GnMVpka3FkwoXVPFwJYxFuj4sX9LLQarCnfvAcmUVUdavvxhKZUhR9JdT4KQR7mz9cAy942vkcCLz9VARKwNoRV",
  "key24": "53omRa1tAQKRFM8viurB1bNNLNKXJ4ftSxoZrgvrzgi7cuFSx3hnwdcZHPNV1Z1YZmkvSg1PZJhLuxfexa4PRTmF",
  "key25": "2gcunxTUHYzrLzshvH8bijjf9kEfLUWY3HW9EiqKbeTyhuCoKGbg5eputith5BebYSswnFZfZwwNV59oaYYx8n7W",
  "key26": "3z16kFZ787ubVhib3Md2tSfEFNjGHYJyYNQqpeJ5nMsMQWQSTrchJej373ZxaMC6mPTwxoiNxTJgat2JVGyBFWqp",
  "key27": "2iAbV1FwuyAgWbegdyFt2y6RDHCgfqBMzMYKPTGAmUmJi5bk3uuZiZk3MHxA8hsguWVPTPj3NWqjZwkWrkSP523F",
  "key28": "3m2YZESgBBvSBxdjkKfaoySGep7UAuVJLZrkpdvg4nELqJfgr7QAmthdcJ8dJ55n8SoA19QfDdvpMP8gfCpmEp68",
  "key29": "55hGLAiZcx8FRwGJyJ4cGF6Gf3WZDJJcVTkfGdSjCznRbYyKgpHu6aAn826PsguUWD4nCgZwihj8pP4TAg8nNF1D",
  "key30": "2gLNDrf9pwqGffH74F2jhVFCkuCUePzZkakYQdNHBv3tK68gjabWunQ2dVzd5sqrY2KTtQmMyjWeQ73qjFj8Niuy",
  "key31": "2owKDHYMAmDVHcH5xgMSbz8aUfBuaXVzrEqDensrmkWExTyKFW6fPC59N92MCDHFeXdGJskSVBWmsWwjH85D7TXC",
  "key32": "4n4fFD33eQ4Fxj11Y8BSEY6CXE8XhjZUf1RjVtgNnyDgYsFbHwaPpZZufm6Zp92MjE1XuKjRDSrykuKKnaanLXnm",
  "key33": "2SKPBhfyK96tB2GEsv8aMphiDK8abXjAfbdgqFcQM5S9w4vhSp7iWbsowPFoSmCNHbEgU8We1MZCJ73TZo1V6DMy",
  "key34": "4RMZC6LUc1n5BeSRXqjzkvWRp6wyAkYXGqgvqpFPyV3GgY7iHTSNAZgEKmkSG8BtWruACjQ8wapSzD6bmUFmJqFT",
  "key35": "3eTnkbZnq9LAArkvhbcraVF3ztPQfxAF981isv2puXqfPAoPHEDteJZJUQWNdotv5aGdjbLnUDJ9mo8LJQ3WVteM",
  "key36": "32XXTiL5iFDQsFFk4wD9UP1hNBG4Lc7EhaDR5BYFvUzTZg3XJwVD8WeHyBMYmJNxPVHmAbiZs619QLA18MYMaqut",
  "key37": "8tig5SNPXFxJbw22Z98Ge9qeuv8PqhSv7gCyEcSkMccSSAAsjURq1cE3qrzYWwkP6CatvxSqJ4gUqBE6HC3L79n",
  "key38": "4HgbERzvJ5ZxkvTcEsdxY7oxWNdkm2meLGiAogkXAMWHqVrYLWyd2yudD2umkgQWcC12rAHoKLrr4w7SkmzZyiyF",
  "key39": "2qxCwiHWaRNheV5UJHPH7eDQUngNLXcquY2ZU9gEmopYuzMZK6siQJQBwwnJYVfYjyzpH8fgiPkRKQGyDqXikVTe",
  "key40": "4S16a3PZaB7DV4zAXW9d6nKd2PSo6qbsSeLFK5G7oE6ed2J5Q7fSV6X7m46uAHRSbWwGFn4DuiagtVmMDUeyjDMr",
  "key41": "4qiidg28FRLDqXJdTLDLhT2uG4KCrdPGMHREekkzAQM9EaBdy6yNinmsLtvfj8JF846G4yYvp4gJfvrZhyC7VdEE",
  "key42": "22xb2GTfaAt2wG5PHDmjxagj2L4XYAPKdYsiJL9s61rcohs726MKtajE4MtdJUgHX7nCadAwBvMnWqhW7iAC5MPM",
  "key43": "5CjaXB5hfEq7dxceSdhuB2Kr53eqsCy3ijKnkKhP4wYRGM8dFQKQoNZoToedS9qUYU6p7dW6fGGgRJMEJM7bV4Qz"
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
