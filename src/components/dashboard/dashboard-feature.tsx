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
    "34G5vZezKhTWoQD283woYKjaYGB8wapei49e9pvoXTJisR1q8Xc5Um47N4BkAHmQRSf42GwJSX8wH9i7ahpXifHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55J2d9VJSEEMyaGajfeWXPzKKbv8Gu1NAs1yDoCtrcs6USDTn6XkZgzDmNhsgJjMgGebnRcybpaKBFsHGyepxRdR",
  "key1": "93cTzfdBdsBwtj9hbkUhq54v2yktewfS9a2NPttaNY5KXdAGpbnZRXWA4PQ5vttmZKeMMX9qM7GH8R4j8mvpukH",
  "key2": "2Pdfw5AU7cUwjfpdaGk82wvReKLGxwdVSutuWUYGQ64HY44WX7RgijzKzy8iNzUSfvbY9VfdtCoQLYNHwg1WUJ4c",
  "key3": "452y9CvJyXeXqxhQg352Y5ez1g6JUU353xuNopPdN47CR2ULng5kJdjhJ3RGrGrq1h44LfxdmSRFcB2KkSuMgech",
  "key4": "3NL8R6mBFuBYF7dFM97fEGtvh4sBobDuB2UWffx7xBs44N6uvsfGJPxcUUsq6PXByxHWrGz61PU1Z1z1q92XhzJh",
  "key5": "4T3iXL8aJhWsrJ4t5hgPmyVr2JFxD3SxPh1ru8BeK1gcnubDQCcbEK3nYyzPptP4gBt6kvSt7QF8iKszyupLafBG",
  "key6": "3KjQt4v3RAmuehKrwjMJ1WfC9viSjW25PtXgpsqErLPQEy48aaAaVJ96X9Ny7pkEVZzFi1yGK5pKARdJinkMvYLj",
  "key7": "3f8GTMqTH3H929mU6fq2RhduZCa9G3fFcPwxBbmG8cQS5xpbvFCsUwdFi6s65NGXhCmCXE64wVMiwXNkRVwkZWn4",
  "key8": "46Y5YUefpnpBFe3nh1ThzVddkBGB7ApndEe4PtQsBM7LDbSRrt7FvxFrnfiyHYekST9m5AYubgju3r2YGsb5EeBr",
  "key9": "48V7ELgbaJtojPzKQSeGdXTnQPKca45Lr2wNvXA5WkYYb43h4Hh6Z9fjkkGw4tzzX45kgpzxo9NQYXsqdAzRNWGP",
  "key10": "3NYP2aonxAnbWxf8LEPkvBWAchtoDjsMemswyVVyZSFcdkQwuTCP7FafLCrBZZe5bJJvgpJFZyrSDzdycF4hXfx4",
  "key11": "4Szv4kzJpyer2yNz8pzU46MgwEmCpWMRWo5isRD9G8AnDtaQEf4BNsatgpcue9ihU3mhiJfSC9KYXjnX4T1uAWAE",
  "key12": "vcFpH72ShTjStdsDFzmLKigt6f4NuzWLJo8RhNpjXuLnrvBcysc9WhBeHgmD81R4wtiMbHVhQYNhjnhXkz7Ym5a",
  "key13": "3FUDZAzgC5hXBuo7FZS178BWk9nPyqYUzKeeyheUzAsdfmiN6otybFiKnR2zm2smcNfjoHwMAuVwHqQEDrsxNSSW",
  "key14": "3gCtjLuyoeSFTjq72tsZZ8esrpbpUzXugXot7Kuk4KjiPp5ZVzdWGpM9Ae2pRxoUSNr1BsuHYnU9bBPxEfKHmhme",
  "key15": "2jn3HcgmmBX5jAp1nX7ZguBpjQirdZ2F6SL5YtcMMVBXiJpyBqfYQNzMKh78LXPs5u1mFMtcRGnUD46deLN87WUt",
  "key16": "54wNCZxg56JwxBuwgSPvVao4puVuJenPGbN9iNmWNiT2tL7B1mFQdyWmdpByAnB6ngwDkaAaabdkdoKZyYv3YQdD",
  "key17": "4aAAC45aHULNTYyoRvTubZnTDLTFwcKTGNF2GvMmXMvEgRV5gp9UBGnLVBiSv5yUUTsbe8H7E3JcT9kshMBjRgmQ",
  "key18": "2cD7qnuktwaMZyaR1mndV1H6iVmhXopirZHQ6TdF8C5fzPaP5sbJRKM1yogMugDEzMtNWcgZBW2q8MANouyLtpn3",
  "key19": "qvQqV6Z9a5QrAS5ri1e63TUcaGe3sJ5goobj4tUHsUMkFcSDq92poa9dosZgeSpKccjK96agT5nqJHdEV1nkGYJ",
  "key20": "34Cini4VbiVhhZtn3xfzeHLLVyognt9fng8r4HQsbDVZSeNCHswhKZs7UsJXBGTt66V75CdhMtFTRFFadosFdH59",
  "key21": "3X7CUMSw6PzfKNpScxjwGjQBqpc2dRSh4Fuq8hgiyzMBUGCcr71gvXFQYTGiPvk1g7PW7Ju3bJ55wMWmNnmN93yT",
  "key22": "4z2ShT6mzrwuXSmjCQrAtTAGSJRqtwhZhpjNf6ePLSCWBm2V8QehRjRTnmKgbHDPL5tGXyK583mnsAmk19DJBosp",
  "key23": "oCmLVm3jicgXFvfvAy6ZCtyeYv4yoCjWtoaeARWnsswZMbqUwqB7KVUK6sERbFT9NMwXErpAAiWrL43G6UAB4hp",
  "key24": "4BQ5BAKNcMSLPdPFX5Fvjw89Yk4jb895diBkiTbZjsmuEPupSF5q21Z3CiGtXQUR28Zm6hE4PUG9iiD1cLneL79d",
  "key25": "5REBKAkUq6yzZbXUshsk48aoXzgfphXgi77Ztp7bnNDoJ7pNeL3rTEULbWQTZ6dZco85anVeVUvNfwKeogyVsdTP",
  "key26": "5ghZzAaStUR9hmMBUnwaLGuJmwfhZG6QYk7mZe2YNmeSu29vaCtQFEN6QueuHixHXsDvXYzb4oFWpf5jhSHfxRAt",
  "key27": "h62cNBf2KqcxqteVErWEaYyn278tXubFe1yivprWYsKZRHS1sqk7SAMWH1aaskA144e5sWD1CiDZXffoiLTnVZN",
  "key28": "3kALTGDtL3Bd8TU4rWvtw39gFM2s6SZCyAqgx8wFw5KPqG47tNKadjXZC8meMu6BzF74ffhjfoDK49M5wG1Wedz3",
  "key29": "2EoW1iHjAoKo8gtk5t7QdzpRUTZcHz2yoALNrCNqU5qUZRcQcXfXpQB1QV4TMFEzedSoWQE5m7C68ALZAvsymQzk",
  "key30": "2nVEHsGE2XEySF42tAwUwe2WjLUHPNBeZEF2pTFy4g7TU12dpJVusMtB3yUapd69pH4uiCz9XtCCnzEzeCDQQGMP",
  "key31": "3jAqN8NurCnKroKu1yNMMN3UEyRNB3VCJyrDxf76McexbBXESG9vHgvbkmY6FxA9kzkfGaqK4JCXWWfWzfebCaV7",
  "key32": "qe7RdeGDkcQbEComoTDPJmjZCcESseZ5xpUVTWNBD7dAksxX6Z2JDEB41isA6tdvvyBdwc7WwgtN7tRQuJmjbxq",
  "key33": "4NHRmzyZjSK65w8JhQpz9VKWsBqi6Um3LwvvGpdjAFcYL6SueS1puq9mUfScPKjUkbYXA1bszR1ve4kMWqV9AFXb",
  "key34": "3Bp4xfZB9nE77uGNCvhKjFg9VctvLg3JDykvHsT5RMHCvMC753vvu6DPmLNTz2QcPBncZCVoMyU3owERLK8udCYZ"
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
