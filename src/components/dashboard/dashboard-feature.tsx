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
    "2BHF5nUkKEkYPh5d4gZME3jxtG8MkL3nEciY9Siz2QnQ5SraM1BacnYJPxUg6GWGyb4xfm1E6aLhgNoRRiJu16Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmifsCdbTF6Q19WnittkAcpmHxFpJ3MpueHaxfNa4cbCuGFEaN1cYaNq68c1jCCYepAiwBnFN75NL1MYYNt7mrz",
  "key1": "43fJbfmRzXHu75aPhetECPWTthei1KC92Ti5jHnXDS7QaZxHftAQSD8rXQyxxSEetQd19iZHcwYDk3DUwdxDxy34",
  "key2": "5XokWwfWrnAoLB5oeHfqZv7NKN1fG9exxJpazPi8fiD2MT9UuDicfUrtMgL2BxnpXwSYoiNhuUVo9Y7p7ufYUmB8",
  "key3": "4ZxVPwj5WkgB7yf2t224k9pCwFZCXBwKYqnqJwaXAKj8cSg4pkMSXo6JUvSEPWfHNieDHDq15rJRbaxMgQpvxo6U",
  "key4": "35yodHoMNCD4pgmxjtrNNueQXg6ot3ekE9854WUKmQUfjZy9Gsf1rkiDvVSCSqYfWipQNDyq2aYvhrSScXboMQkt",
  "key5": "5bYCg368ELVAR1YpkFSDQwQKJzrydSZRAZogzpcWRVp7tTaQggruvBTTjKwjYFJ5rxiR8Z3s2D7gSqaJbKncVErf",
  "key6": "2JJCBE9sbtMiKFph41ay1AnL69DYGK2KmW8utWQYa8EztosQ6mMy3geF5PCBEtvUQ2RMbYotPErgHCCSLcyg8aYj",
  "key7": "hJRiXtckvLJ9Mv6rY6vwMKUKAcuqKvbAsDiJyUD4DJCEXUhC83eioxcAqCRVR2cViFN2b2HSSz1VAGMrVbe5uWK",
  "key8": "RSfdtzA1zGHJhWoy1tAXZhwU6kpXT3NhFQTJuThELvcVycgPSbVSCenQDMtbNKfqYjiWYNmEp2R2cABJvqrKx1f",
  "key9": "3uqrdaeE3iEAz8kcLnkTGcG83JBN5t4BDJpTLmS7t9DwV5sz7SYgCHYzA5WsvifQvxXkSeSHtDD8ZFYLh9xjivjb",
  "key10": "5We1byG6M5tXCNLZWBeZjQtZwnTCmi5p1kbTpkV4cZNwW6C4aYFys2wduj2weoNkcUDQ99vrAQP3Anv7M1YQUbXq",
  "key11": "4UAHCHBu4BycRcKgvgDn88mWtjd4kscMTogxR4GRkGDjQexg9k3hrUpKtSXHcAqgWDu1uecDfQnqR6g5Pc4Uuy5c",
  "key12": "6nNRVjyzXdRV6yeBkS1miu4rrH6yGSNEihoP22o2K1FaxdzzTtK5LZuGdm3kBTRq6EFVZzh3dEiQ76NrYedyyiv",
  "key13": "334PGtKkQ2BRCHDSVftCP8EpxW9m1AXGSkJ3FFV3hpWwd1VSNpYyVPYDYhiDa8MWBvupam5PCh8EvfqemgXLo8mQ",
  "key14": "6535USLn4vDiEDEZWyRjvi76EoW5ekuShRVBVTuVDRKanooGtgkcyYnBvgqSBKQGfANiQR87EyiAPrZyXipVWE5k",
  "key15": "ieDjtjQYGcquiVJsUyUqFrDSxFXuDGNc9d1m9khiNRN5KwcE4erBZyArDmkpZ4dRCgQCE94zWUcqaEvzQ5LK7oq",
  "key16": "4KTJAfr2SinTW6TzpzcWMBwchcaXxCGSZTWaG5CYfkySBx2u6QzCTRqzvhMJufYDskjfuJqVLWrQPJYtCNVxrcxn",
  "key17": "5pGr3eTKtTDr87LTfswC18uxuVa95fWBjFuTpFoTvqWwsJy2MnM6U49UWJf42iFJ8MRXf2bY9KujxhKwBUTR6Agy",
  "key18": "4mRjaQf7AJiM12wYSQAx3gTe8HhexT3jk9FSLeTiKVSe9FuTMUDL78peZ1nEkvg7oTtuJ1qryE4n2Yp9EfWdw36A",
  "key19": "2WkAYgNXu82St6LQFDjJjbb7Ei3VHZNxeENQZJEAQoVeb9figGfyuMQgFz9YfhyALGkLHwY7fme3kmDJwLheGcVL",
  "key20": "5nwGazaYBDtXimqjNotiGedMbg9KVdy9h6NyLcvLVm7Bayviq9u5E1qPDNczB7UZFn9rH8hWPvsFJ9ZSXhHEL7Ga",
  "key21": "39PDDTLMuzJ8Wwfm44mMFtGxC5xykkKnE3riSvhApHRvbwmpJFB7JmJ5uYrGGBUQTEAGhyuerr66X2nvNABTh5WP",
  "key22": "4zZHcgCvJaYWBjrMuAL8hFrqRMxNKGckrMbcJyDaNoZCJ7b9mbfPnurNSQ9zePjyqZTaZJo29CvV1paj7Xo9PuYT",
  "key23": "25PJhg7J2znqPHv56sGQrp5jeevphJ6YrDsFsoNv6Sefx4avaTvQACZC2kvHFfJoDkDkSw7x36hexjCBd4gcGoM9",
  "key24": "3hHHqW6Y22t91FRUU5iFG92tfCi8sJK6e4Q2L6yt2KbxfdYqPjtNpkLA49hbh5Wc3ypWgziXGxH96mZsc6iG2bGp",
  "key25": "66JV2AmVPjR8RfyTARNj3fJy3Byfxrg3LsVY459ZWQceTPrWC1Cdq1zkwdCW9peazMVeCpQWWCr5d38yhfAM2H5G",
  "key26": "5kg4b3Z6vSpEbRpSAi3PnFBjhx2U8fRZQZQr5tuqMucoRpkbwije7Bs5qrwksoubrwVUYkNt4gzvfzn8ZGbiqjQi",
  "key27": "2pCumAHV5NbYj9ZyLFnj3Rzr6uYgQVRH38u9DBNB21Mw6bxFXbp9QVcnsogkXxc6g8pcvqpFMf7s5qspNomkaNWQ",
  "key28": "3RT4FSrRUGLDDN4epvrEdiDpzVE38HZzByRZPhQ3YhmtF3zKn5KuUYomgL9QYTMiAsiDtJ4uDB1c13GWAF2F1tvS",
  "key29": "3rLPm1AkTRJGRc8S2i48qzzzXxjDaWarMWdM5mTFrC5DrghD1QCrLW5WXcaMa9UKzpsupaTwH5kG1GDpcFUVMLni",
  "key30": "5RURKH1CPfGvDZpuZykAhQWQhxRrZWo6T68nT2Xr3Pxtprb328SJuUXCkS4qbEnx95Vpf42KFMNUAnLRPXDBXgBf",
  "key31": "5bVE7U2WHp8dP51DbjbJrpwiGsAKNVE8HLoZarCUZ3qRwGFab34tjgE1gv4aysd68Msoyw3ep3FVayWSSd4tYnwr",
  "key32": "3dS4DnBK6P3J6kWvZpHTyKu9dLqkqgrpCsL2GUpgniAQVAHgyVb1TeXveoNHZcUVofxG8c7FGbgGZBQPCZc3ZwUK",
  "key33": "2B6pGDDpwMmo9qzZGa3bTyinTtGj4wHKKip5qsYBQRFU9XzdNHeVQWzgG3ZaDbvsnFRTf9a3ubDD1gpVNPXeuVuo",
  "key34": "5dMPj8whmaqYJotrB6bho4Jrs5Pgqkf6Ff89CGjR1zY8S74FoNERQJXEXg85j9q2jfuJnyJHYZN4yvZfj2GvzDUP",
  "key35": "jocbsf2mvdEoBYL4TrEm8SZZMrZiVu5FzGg3DTNMk4wd91qPpyTu8FmNCUU9ajafJPtrbtCLAYtMvfZDJmuWfn3",
  "key36": "4pmWJGM7r3A4HoLwnzuHykNPesnuZxFB8PFrZoaWdtHhybgecwMSg5BcFiv92Ehu3dezjdzGPB8BRs15biiumNQf",
  "key37": "5RyWfXcPjGC4tjuXzzsu92Mo9cDdLtZSdUpqEyjkTv1Yb678pmcprRNAMbdpPuCJNNY1ktdrz56u9G4NowBexZ5e",
  "key38": "49qCy9fYxSkdqHGUpekjYiUtgbeSPd6Udhbj1vCVz7d13vhUzepZskiRZQh6H37EuAaiDDs6SGJRaervUvxKMdkz",
  "key39": "34pfAGU6uJR8BhSAqmwKbqPrdLqaWSLAj9vqB2iASaNKyEUFxpy5e1j3hv8FpEY8iw52kZ9yotrrUboZPJkENJj7",
  "key40": "23c4CzfUx9o2c2BctPSjn4fseKiDnGsc1qjejzpQnJgBKZt8f6sNcJ6TtcW2MT2YC5N1eENvBoL9QCDmh94iU1dw"
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
