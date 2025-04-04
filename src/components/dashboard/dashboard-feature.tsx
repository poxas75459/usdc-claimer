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
    "ZJPxyrM9m3VE42bjbG2BcjknB7tf27S8uKiUHiCB1TAjh74uVsp425fDtAHDou8P3bfygajapnJcq6BZguwuSKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ctKxc2qndgtb2KobxGzwcQDyfXiNs47QHqjiJucNGUX14pF4Z4X5BAvykCqZA2dkRkyR6j78vMfBTnQegE1jBY4",
  "key1": "3EQiEnqWMDxXQCa5N5dRSraHS9U6eQ2WatJw7A78t6pTnAtB6xk2QUgRnVyVa8aS6dsZt4embhhqG6UU53zPHSVu",
  "key2": "5BtLZQrD1vSHj4WQXn25jiurXwc9nwuRf1xd9x216dHEXUdhsan9Si6ZpRuBWiWCDj1hMiywALLRcecHEaP445es",
  "key3": "AiJ9yknwUQdZArXxvdgKuMmg73fucUh6v5HqMcLePsGe3pDoi55vYfZ2XUa8T75RMArigY2N3y9YKCWJ7uy3QPX",
  "key4": "3PnxdCUG8AyEq68zVxQqQ8bDMPAZCpT73okuyT6KpBtMEtrCayRS3EdJgdCATjavWGFWNy8apoShwC23RwbvabbB",
  "key5": "jy5fAd26sqx4vMYezhmMqZN4rJwzesMycSE9GHJhngY733d695zBL9QBkn3sefFosjuL13vYwXNSYTgdvVCb1UA",
  "key6": "5g1c8eHRKvehgGHegVQGvzANz6tYAoPfinNAYcZSnuNSqEdf3udjES8Q9imS5rZb37RRgcMn83mXiFsbyzQ8PM4D",
  "key7": "2b82jjj4LbZYcXBbmr8sJSxeEBF5VkFhM3SuvTddU6cCL9i9GpGeJumnFETWz4LUgZpJSY7qyyHF3zD4M9oWWUMZ",
  "key8": "5r5wbG3fHKYd4vE86pVV37uh6Bubps9HskqrvXWDXjszp6MatayD66SRHJbSELrtWG8ujyTN9ApWUMb1XotAyVfV",
  "key9": "3bitDrXnVot5P4hwfLccReXBHHwm1DizLGSLCPRudNYe5ZkDEokV4uotkdLyw3qrgS1YcgTZYV5KZJqQ96NQX3Gu",
  "key10": "2Xa9buYjSKTwUxRdaNJVPWFuoN8mW6wmYKcyHCBnYjnBCLebbQBjcJ7Ahsr6X1RVDoFmQQ2tuZkU71YjpH47YS3E",
  "key11": "2jpQuSYQ1L3s51e5uS5sHjyPsRem4gBTqdwhWm2EBG8XvBTPfRGddoNnd1DDcmQXgicwBNydfcRmoSL939KSfakR",
  "key12": "zBH2j392sVmDiE6MtnXFRGKmJcCrGVPdHEKD3wvUVDGP32Et7KMuqhsVwF5nFDYAxJzV7hybabDpaKuywbdyYX5",
  "key13": "3ticEib7pwJNAYocX2fSwRVawxooU2CVmuz4FDNmgRWFamaFETRHHHkioWdqkSEyW14BekdPtiVQTBFmL9m8A7oP",
  "key14": "29nRuvFash9kduSM45L6q2NZAyvZxkennhLVMhMRmQcVwvqzVeRFM7Katwjf8Xbeua6uewXHpAizB2scqmjQeQ6B",
  "key15": "3Qe9rp2NWWJ7w9ff4Muux9qqX9N3X8xwRwY7vGXTXVvoNYZFNKH7LbixGufa83dXQwZCVroHSL3Cc4g49UtWZ1VT",
  "key16": "5JAWo7uFxV7baYMBS2T7uN9LEd6oiatSch1MJJVUzYGBNcmNLgzf9ks5p5dPGBKdp39HEpXbnP6v71w9ACWyPGFB",
  "key17": "24drSBGyRfg2tzDJ5NVkMiekH9NftcUTF5aYCm7BRVPsJ3q4JUva3oxgx2Kuwr99eqNcPf2yaYNEqAXqrtNPC7ym",
  "key18": "hULV2apvrHRhVtjHgK8pDjGRKCgCVzHGVw1hqHMcupZjyRQCRu3hzAPyqXiPrvsdzgEddov4R2uJpiWGRH28wTF",
  "key19": "ivvnBYmZwhFFvyEiQMNn9oZiz9RvnQpw1vyp3pJF1aNnBp3CVz7agXxwiXCzp6Bke6qTUwHhiGyXh428jjRT1Dh",
  "key20": "4RtEvWoRWnQXTijGkHerCpMP6RKW2qCj9nEXfhK9vwxZcn4MV41a6GBrQDgi2cGxaf51HxYa8Q7FVgpDW6B7fgRM",
  "key21": "4HaKhATngK4AiTgp9cBgZX7YnujsoFTvwGL4B1kAHxUBCuxJLPbLTBJ4jgnWMHDJaGrBSCxVPixPFkpoFx4wczj1",
  "key22": "56Cf5QqpCAnnYSvpbRsLCATwebHvU2gTgnzVNLV6Zdz9CfdJzE7FFjxw7xE1iQtcibhxnLTHxP8N1sf2uEzZPCdZ",
  "key23": "4YKVp17qjPL1Hsz6JL3hRo5AZJ4LAbJ2VJN57cCx5jD3hDiTohuNLTsaTCsCgQjGtjDodPvyg5hhNVqYD15gsox5",
  "key24": "2qvjVf38K5faoKUuCyF2DBYJTiGNFxTAzN5Nu1pVBYcxdVyv6XaHbZ5zz2Lpn8qwhABKFok6xAm6UGSfw2CtVDEe",
  "key25": "keEJs2H6NHF9xLhcVB4wuU59uLoBcMx3mwEVVhu5qFaUse6UyeViSgKYPH99RfdU6cvEBrWtzidWqk2bHQEvNc2",
  "key26": "2WRiH2nZKGrja3hXh4BfcWcZfWe2GuonTLN2HeBVkdeP6nQ5VhgMX4KB7FGwG4N9apExP7qLrfkXAxuriRZbWHh1",
  "key27": "2vf3i3uubNwmHKgZVwAmtAmK2mRXKaH9jj5v8NSBrcHsKwnTCLitKGMza5DdCSYYP8BUArtJNY1T5E5Y4rtP2arR",
  "key28": "5Xf6XioXE6bi6sHJLHv3k5DoeZe61739f9urQFSm9faY3UKLr7GfiznK3VW7VzuH4c4GYf1X68PBqaF6stuBPo9b",
  "key29": "4W1DJvCkVBtT5FE1H6Yn4mPvxQD9iup9NRgqAYfkxD49ZMaKiYhsnQY1wME3hQzkYgipnnYFYR832mXaEYq6UQ59",
  "key30": "3Jr7e2K6CWovHw1L7YP28FiBYvJJKf46E67Qh5DHZTUvHL2KuKrgVkpTVSiJQNbYHqzmZa7hBvQsvitu53qKSMXY",
  "key31": "54hKEiUV2eCEQAMS9aZduhaJvZxD4HavbaPTj4sDcB1VXTgMSNLYjXYDcVBmY4pirqFVpHAysZrVJ4WUnsc5WK24",
  "key32": "Lk1aWmWJa3B864dkXpJQK1We217JpC8KkxjAvh44MGD4wYTJkLWXGLggca81SrFSRgeVLHGxcQiSyzvaRk7xqMT",
  "key33": "4W8c5ESEkbmXEFP16iKpjJsHBn9oeeMYYiFrnoSSboHbExbZnAtnPmJdMutXyTYiVf2f1pCtCeVTdvXiWtNyGikL",
  "key34": "4AqTpJ1wocBRZ89kijMWwiessspPFeMu7Eb3nwNXFs2N8re8HiQeUR5j2UfoUFdigxPUESf3WRJBo7RqqYHWc2P8",
  "key35": "3k3ow5Ti4TWXpJgfxZkefg41gMoWxgTUqQrmyT7UyjjV1H8Q1A9njBhKAJ55c2dqZTHxUJTSoF7uRBn2eQGtoQuW",
  "key36": "4sNrvA6jUixJu2wfUy5NwZ3N7bEmsnzq2S3RZzdwvNDMBPg2vUi6s2FpRfC4o1gqAiTmjBFZN7iPHDpycAkBXkCq",
  "key37": "5iobEnYZR9A7yyCWjYwNRBRGzBAJNXmZYWRGNZ14AaMosPthJSyXzJhEFY7EkNuqXjVcpCx3RdUyKrfWCoJH6313",
  "key38": "2MqUiXvBBeWXE7uLZXudhLa5PnEBEo5FppXuEv61hPdacUXytCmbmNBS4QEAFpMYKimgagigXyfTGGbjURGRsdd4",
  "key39": "dX7WQhWZoezfh2Z16aBZif5bRAVQHkATvi7xKFq5GcPddCGv8REgzPXBr5cY4bSnLuZ6Cvt1t2sRimZqSHbyVRT",
  "key40": "21AgCuR8fbRDZaX1xsEkkABQqfM8KNhcsB8d56cXmdczASM7QxaSsLade4gY6TrsrhPs1QmgMiCb734BbRcwMGoV"
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
