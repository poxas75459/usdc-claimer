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
    "H9reVxCNQWskpABiCKfrKMfdo8XYZ1c2xhbVGZTzd1mNQE19aSMeAmcj2sbM2Co6eyiRLsvDJrWJTc2wBPDXHzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32keDnurQ3J2yG8YWAgYpNuM8EFxJ2hnEHArX4o9JLdUBd392GQtYduGSbi7NJkvy8K2sbLkxtHxq253i1mfoGid",
  "key1": "2CCLgAw79XPCC4cfXECLUNVc228rTd4juj1nEnEFRxMnTsKoWQfFYJqqunoSgrcq5WF38FB45cD74MnzuYkLvqs7",
  "key2": "4yTRjn3sYvGDMypcnJH2kzAQJpg4mJtJS3dk9iqdSuKjKUG1Wr3NpbfHJcVYdruccSzgPeJ2egU4SJvgT4rXdKnM",
  "key3": "4TXxWBWebqhxQD25N7DM2TsULZw4pEoycyJbaiLcNNVjDEqWhdHaNDDqb3NBb7TMGcbxBQs4vG3uXesgNr4P8sD7",
  "key4": "2YzZ9hzpHJLWeWqYXa398gPnahkSV7gNRrXykvWjyC794ZLi66Equ9hgCcQH6JJWqGBNEmZWLAXvRk4GBrAjizHp",
  "key5": "2sgnyw9bRVuhgvCZCgE4f3iE69Tc9YvZ1Qs2SQhy7TQLM28LBaQtLMFwsiAuxM2hbnAqrQX16mPXKZJjHKmagVUP",
  "key6": "4PqPxBJkbEZJdkUSUSN5GrCMxWqrRrHt7q8hXXMZtRyCjPvSm7h9QefLqgXbFfPZ3cHF3pXkAFUkHRiUExqxcet3",
  "key7": "3JjmWRmYQnGwM67nFCm5VURjoDZtL1EMYgTePxAnLVqJ5AtVKBPcQ7TMe4k4NqugLYtABCkELSWBm2dpuANR1TDj",
  "key8": "5PmBZBE9apGZ2SEQmZjmdRuNAceiD4A23yg9WKUggk6Vzw2dpaLvxQkZkuzncNEZ7Cddgx6JfKU4ybN5S27bV1B",
  "key9": "3AcHPqeSpu7tnL2ZSjRZeJYcN4hZBcSQ9wZz8u1sbTg9rNWpnNn2hDYmdi9cwaFEMbnhYuej5TNYc1Y2eKjmgN9y",
  "key10": "4dasVZa9WZ5zUS4vJQUvHfacMMaAMHpmJsDwvqU4dcYqzR9rWEE3B47RPsAnjjTAtWpdAS9bpHj4uzU7mQv2v12h",
  "key11": "wTL2ZfAJE56BuPbyQH4Neou1EAVNoMSJ8h1Xj2nWexBHnwvhyh52AmhgwqrdMFfKSYFBa2TNeRJ6YKTqTbpJz1Z",
  "key12": "2rDProBbg3kGibGD7Z6za1P6Uzof1w2rnHLSyGvddts5uz8cAgy7txzW3joJNceDSgxHS149c6mEECM2Ff3pEeuE",
  "key13": "5MKXSsLZZ7FvCq5ZjRXeeGaZ4cEzhzdLAZjbfS27cqUH5sRfc9ad1aRKp314xdZH7EMhvijCS8iTUMxpR2pY9Zdc",
  "key14": "Sn8fRgcmEZa6TN2yFBwyg9WTxGqox2AQqhKDJy6432veBvE6BmKihNHuC3fr2D9J4FfitykRxVVfLrTcaYJGarW",
  "key15": "3BQ9YSZot78ZrJ2uxTokmGSi419w7TPgZza8Tzh18VdAodjWgg6pLnnJTy6TDeRUh2Qm7XvKFLNaXzzzm3zud5YE",
  "key16": "3NSUSQgmbfUJ937ekNSWMhQFFer4zoCnJeAU9qDvP3MKDtvCmi1dFbNG8ZdqoA4MZ45EFDs1CSw42GccBPmRMz2s",
  "key17": "3hC7PNHc2Gox9fiNd5rpecoQFPFvsQEfgwQ6WnFcDR2vynTptubRsBFsLc5zq4vuNsirkJV6bnHuVVYkvqvVxA2w",
  "key18": "3CAmpUtepB3YiRkBaNengDj6bNFXiLvRcnckkAA2Y5aELXvi2Tkx1oNudSLPCh4Hc6eUqsy5sXKDjvNm5cTGf4b2",
  "key19": "2sLVA5P74aE9wAddVZdLH4JoRQrVpFmCmSGyXwwCr1d57M5PTFei2azseDVWoAd2pnHeLdB5TgWiEzogB1qTW2Q4",
  "key20": "5gtin19n5biHYdesjaeopN8GpGLZgndLUhLzBLV9fSVfu5gHCdM7uLkGCnyoBvVCBkvBKzHCdeur2LWHTwrJZa7M",
  "key21": "4ENYambd3A4RNfTjgmgHzx4Lz7ptvdKAkAMYY3aDBFu8Xa5ax8tvmWiVoyNeZ4vhGXY8MNHXt7o1QfhKh1U6Wmo8",
  "key22": "2exr8cMPQUPR5jPfp2DKLx2TYJqbfSLhkB5GRAKMZJk8cdeJiDtKVSW6kdZm1duTKo7xpPjanhCwgf9zWWqGazts",
  "key23": "3JQ4NDRp5VEMH7UVkawG7gxdDMgKS3fQx4uffuBeqc3SskdKXfpVUatkPP69LxrrXCBLjRn4BCtaU3WafY6aHtLi",
  "key24": "54BAm7Uy3rGR8CHym42PGfueDPC2oNegGQjVnAzd6W7BFmEgwpSzx8YMNDz9uQiBqz8pzJ1Kx4p8r3PFSUN3dwCb",
  "key25": "25YRBxu2V87fnZXMqYUNtQofaRNnYwW67szeh2zkVhUtW99FyKN5Cc4trUq32hixNLcRZ6wXdgxbQKGULfPeRX8V",
  "key26": "5xaGf3HEADYzvfWxriTNsgfNGEpk6stfN9e6U3qxUAv3zw3VnbeT22kLXBb3WtiuNseb1NgBgXkB5JrMKtMKzuQP",
  "key27": "4HGB7JjKzkpYSeP1z5GEyQ5wyG9JAKNkwcMmk9cpUkeU7MBXkMqEtoYmpbU6ET3Nt472K5sBo4ZzJNZ1h5azFgZ7",
  "key28": "d3fNhuFM16mb8xmw96oBVxj5RhDEYrJpKX5PyTZYDsLN4kCkhMC8gf7FAhtdizV1LNdjj843bfF2JeHpE5CZD2z",
  "key29": "5T4Dz8SvMWpiuEinB8gSyieHZBTtqtYoEhxLjjsQYWd8YFee8v7yNXnXTWZ5QXWCT8tDrGUq899PB2PGJaygEeP9",
  "key30": "4PgN7esUVZEcKzgMHCaddFvgVGTeSrnbz6xi4NRMeGU5CoLMG6XiYAm4i2X9FsgmRHq8mB1bP3buUhUwqnL6TW8X",
  "key31": "wY8SPnHsh2NM5SSpYMwJcm5piVa8rdMRhXJC9kectEVBPMi4Zncn3PAEFn6f4yVewGq198XeX75c3XnA8VZHZJ1",
  "key32": "3iAQCgpsxtengLxDyo1XQtGCKK4Xz6Ds45puF7SVMoyNyXfGaEFpdo5t16ySCZrSX3gr3Bsv4bc9ZdfT8HKaMLUG"
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
