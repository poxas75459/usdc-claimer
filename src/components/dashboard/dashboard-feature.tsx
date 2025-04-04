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
    "62GGRMC5LqGKyU5pEULP358sDm4SpEseCSwe8TRvr8hZFgjqCkp2Hz1X3gkWuxrzyRSMHqUdvGxJjD9qm6otfbFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngLQc2GahzN3hs4W7DL7qE9Fa1CmbfNpQrsca1wxsPbxsqDQV8BAnTQQUYMASCBABmt52go7REgoYG7G3AeJFY2",
  "key1": "cZhxrc2yX4mnN5dUxpyo5QMBUSFQEisKDTf1WKqD8MATWtpceg1YDwFXSk48CWvReocUppKomk6qcUvKfwK1RXZ",
  "key2": "5ERMEeQDnHG4wUbxhSPYe9z1S1oMMYudG3i6ZJd4MgtFemYdUUE5HuuwB1Re7UEbHToEkboqKFJ9iiVBXgVACki9",
  "key3": "3ByG5icteVQay4JR3mJWTAAf9XYSGMR4TLnn3UKogMre7DG79CZidgdrG2rdJGmvHSmJZsp8wg6BNTw9Vm8N5Hxd",
  "key4": "2ujEcGNrY4yowxCUYqMpLj8roN25dG44boVCVJVs4NLyiTAyfJDVB9KK85CkCJeNwNQnd4SMbr1cuhR5G483tjdX",
  "key5": "39DQ5cDgXALZHxasanfCPEXcCpA5FLBfxHtJve1H5KPBXsSMKwDKavMCvvJ2XXPTpoksCURZd9ngZR7ZqkRGBCnF",
  "key6": "3Jc1xpNciHUfhorRFdcQVaWuPNua8okQpLVCXbwxdK1LRwr2yZQqvXkSyrYGvt7b7F6iTtzpM1gVMXEexhVJGbGn",
  "key7": "5wzRWH8Zz9V7AMxa5tUYnNK38H64JJHZTSQUK1kWwEJXSyWMdiBKFVTg9G8i1EDGpRoBjMbvQwdQUkFnceqDeY4L",
  "key8": "5em4MFqN5Qjq1YZAyk6aCdswpifS71uuBWRj9W9ZgkihkxDL69xKes9EQZP1Ung37ndFCFPT3wFVM5fij5dvzaai",
  "key9": "3e8qJcsE4R57xio1WaVvHyTN1YMeKasX6UnUEDz4fqTqyjp562J88fiyacQgV4ciLkKbgJQCqABg8NGkxg2PCccZ",
  "key10": "XX5u6WHukQ9ZR3ZmMnWG3LPt2k8gWxN4u5NUj6JCxPGzZ9BAJeoJ6faSqc5iNUZQv7SEQf9owHXCawWUE58P2Uo",
  "key11": "3MiKyHEAQqqeP9R6j5JUYok3KT2sgjV6N829rrkCickAMQ2ruZSwU6V2sbHiM6Pe49gruDx4r17UYy5JYAmB1rf4",
  "key12": "3qo7KgxztTNukYXopXzm41DXX22Pka12cQXutdAA1CkJ6RsiPBsiECEECVoP5xCA7PJGGMnngTPy6r8PRap1MTXz",
  "key13": "5C48Dq53jSxc4bPDoLoucKtnXAuFpQbb9NNX2f9xjMN1gmhPXEZCa361B3FWJfNGcumZHB2sEYgZkSDYZarD2X7D",
  "key14": "2yYyGN6fw7QiRspgdJ6GXtApArf9UDcPXD8vKs1RuYQWBmc5TtZuX2mEfahxGjx7Em5VxMWxGT9S5H1BK3DwUH8J",
  "key15": "2351But4fghWKiqf1HESNmLb7Bm8D1ki7KBnBnDpA7GYa6kWSYL6Kq6DGSGbWT29K3uwPuRzZu5sEXTnM4vwKBBX",
  "key16": "5uFURXz1UPJNjauchJTxuwWoM5B8tHHpytrrRHDozkmbGkqhULkFUqWC6AvcQXcANLiuuiswLiykN1Xt45EQDhPs",
  "key17": "5JwQtGZ83aMihzt4zxsajQXuw6rXMVCYiTmrAwLczLXqbBMog4VdpPqHvBtvdBq9m8bRS1cDpynmdivNkbMEjMqA",
  "key18": "2nAQfFPyDFgmWvnmdEzGvjDoWNbd5UFhfMwu9fLzyxnnPm52ewVJaD6rcAuUcoTj5S8X4K2ms5dCtecUjjDx2ARR",
  "key19": "54E4yckfJH4sSojg5vRN5xz1zc8GY7VZNyESgMXkWoYiYBE9tYHFA1jrPrwBWcNcq8rEGCRDiKg47NNCS3gzUyyZ",
  "key20": "532pWdK9fqsnJzzrMzaGBwpBTyxX82ezDFxw4NRPYiv1nMowCy3ZRccV7PPTuasCK9BvS1YkGc83RAWQTAsWEN2o",
  "key21": "2jmdXNSDsb1FUDhp6SDp2oypJ5p9JwFstvqDdgxHrykKoAtpyhRXyfiPQ8VgEhm3VS2TsxzgXepTLEwQZGmSBy6U",
  "key22": "6Dt9YXcPkTjZ8218AyqMs7nJYoukaGncoAAJzRgXtCdCeMdCet9g3JB4ztn3S3U6WxaGe8KFBpdjnmSQX43nRTW",
  "key23": "3v6k9X4P8amsccbaHKy9cdEBzwdJyXji6ymAR5qHLb4iJZo6YqQaS34DMRA7T1fopLaeEYr3J9jsdZVwuh7nf6hB",
  "key24": "3d1QcLcbr3qyZNijV1VBHMg1gvBqHPrmqXQ3uPU2PVbYs8d5SXQnLSHGBEycNaWPmMaHFTDo6vKUd4YTRyQauMBT",
  "key25": "pfQs3Sakqr6BMTCBd85csB59ArBa9kfD65tDFFYbL4sb5CbhP1k72T88rZkPRQ44m3hqMTTcS8mjhB96MPHJVr7",
  "key26": "5yd2eHqSGiGQqbsxeYL2NND9m4wEkSVeVgihkLc1bink1gv3J7HcWZRsPuf1LgnMzWDgQUMXHP3qzT1LBa9sD1uA",
  "key27": "5dgrRCcC5ETj2ToU2xcCiTLoAbaYrHSdUMw297NR4kZYVyk5UXrHKjdwoX1LSZFSqEfHbLgcByXtMagvu6BCWR3i",
  "key28": "2QKrJpHDEcNodHfnhhECsNrHdArh8w5UjAZX5T8hmEToQvbChCfpouPuzQBiF4NukPSjKWu7Yr7eDQLep1jgKGkg"
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
