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
    "zifGPMuKm1vpmChdvnqa7brZA9KqFwuxHK7E52GFqCzGLhj4iJGfbJwubrkjxe1FcekTTWt9pzbsMrHrEqdGHCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAKd2rJCiK5zYT99pBKMhZ7JWNJzVVFcXp2To7bPSzYq4jLxXim6nqFnZnUjGEENpnh3bm5MCds7CWfvmtHr9MD",
  "key1": "3sNvR8zbDGLntkBn9K5rjg4JcHts8epmACZtGzUgaup6QQ6i1D2noD4Za7wcbnwfgMeCmEaxiAAdCNanbYnmJYVL",
  "key2": "4ajUvtfNKxjPsYUekj915e7FiLcDQd5upnZ1Y1TgF3FgWMrgqEzjbHcT5iSTxbgbyLKA3x9FcvP7CnvDLdjaNAnk",
  "key3": "3Qk3Poi9kHebHuJXGoSXf5v2bvh7F2uNr45PxFE82rHat88A7p7dbtsHh413SiSUEzEcDh3zAxMK1uNGG32YqAu6",
  "key4": "4PxSkR6UxRnoXW8AYEu4aMEcagYjGkPyuzz5V6ry4SXAdBBKvg1hs9PWQR86TQoZe7fC1Kp6LHLJMLAqijqvTQqL",
  "key5": "5hiWno58XS6G2oAUjgspG6wiKt2kEyxd3d8qeZYfwbo6W9kMKLJZs6fbMG1yugt5dABbo2wDifLzsByEdWSMPos3",
  "key6": "wpgSN8zQLhKkdhWpmdYvurvY9g8cKzwNz7GqjcCEoJ99tJmn2KnPxQLMG3rFxVkjjBkY6DvhEdZAgRdsnvujzeu",
  "key7": "3N5z5RifcmNS8iv4yGiV6Mka7v25WavtT9cs75uhb15xzDMd3d5ff6aeUeggfR6H1gExAXJM6xSfr8voiU7twgv4",
  "key8": "5PDKmKN8yx8gEuMNieZosaw9Pu2zj8CsgAFF5Re1XxLkcthoTTocyTo6hhQ4rVA9npWLngZtQT1VrT77ft7x1QJg",
  "key9": "3aiDc478s5wvWpgM3pyJogogZ3AHGXrjT2Nx3TadXMRnFEZeUXpBX2YQd5gRo6G2VCQ4u2BtWaLMEj4qoXyih9VT",
  "key10": "2pb2W2ZQt5mNmmaHwtjTy7HMS75AnfgcHWPMJEJEpY6bjXXnfdh7XUx4bugE1qk419Kwhhie9vzC1DNaBf6FKsQQ",
  "key11": "4NZJZTDCpdtZgqLisHRwKdj5dmiSMvLWCHdEtgz4pCGaCVnp15qcb8Eg8ojvjHrnWqfey6cETW1AiH462A8Hk67v",
  "key12": "4YYHM66ADF1AaaNKX8AtDmUfyrazYWdPEY8z1uE4FaQxwd1PkiEYSG1TH68MQseiHePgxcjv5FqqCDrV5KzVAMQg",
  "key13": "2vEvQXe4CzCdkTPp3mGDpbNQqXSBLcVSVb77HbDPX21MPWSBcbQshefVW9Unx7pWC451GQyAbvu616TbBJR3VFpT",
  "key14": "5P7gf7C6CmKJVZ22EYs93ZspKNFyUGwJEfKZ7YH6DmKvH6yXM19NiJ7QZEnVmEiMYoRLDoK7GEk7nWMVh9aFtZAh",
  "key15": "3Q3ujNvw6AZPVAu8bNWaf7mtrHUtzCQD2bcHfekZA9QFxRCxx8PMPMdeaY5mL2L8dZogJkZgxa3x6RKG3KewVXBL",
  "key16": "4QNnVSeKtZTRsMquJAHHggaLgrNc561ewwfSWD57UdoAeifMh4tE1KeR4jDG9wLrGTd5FNxNDaemHtEGhExWRkkM",
  "key17": "dBBAfP31dqkBt9U694ABSef958PxR2ppNmn9dnUtyC6up97fQvc59dvLcGN21vY4CMyinxgnVsyFZThRromdF9z",
  "key18": "3FPrRqFwqCgmyLCRErCUNMf1N2sFyoaEqyqbyiiUrWdGc3Mf4chhUSnWkZ8Rtat5pbMccGLCvvMXXahfpnfufXDU",
  "key19": "5m6bucaQhK2W7UiqJq2RSSqfT8ziSnF4tkKUQvF7oRpf39pJM1ekUdkwpKH22uf9c4Rzg8pdy27cuyQJFidvRU5s",
  "key20": "2j1LNJC59v8uWMUeFPzkD9JfeZBg3rAevYe4xqbXPqXKLah5BvimddXEEoscDdUfyLj9dMysbVUteYDsDakffyFh",
  "key21": "222uf5gDYNCQfgHLFDARxnRTUNBoaZgeF6HXDVCrwzrFJofDo8Scb6jA8NvynRguQfSezqzX5psqV23T51g9UimZ",
  "key22": "3SW8XpcymnRhtvi5QapAf4XSHL5GJ2oMsqQTQdcX7Wp7ZQqLZeaxUFpDWNW6U46EnYBRwqfN2DHKFHzS1nCgFY4k",
  "key23": "3yavNSigi4Nd5htfJw1GZHm2dp9mTNhq4TH2aHHo6Kny6FrSPwBbQaKtzveC3LivELGBrQeqLiufGqf8qGc5Dbpn",
  "key24": "2kbLWcBr5GkpPowCj2dLgbByrB8drVn9Jt4nzgDi9CQRmoF4B7bkQbLUmC7APZevgHzuhe9TRLHEkQoZgFMz3v3k",
  "key25": "2TXZVkASjZMyrLCFxpg3BbQ8tsLkyj5pk6jTwfnbx1KaBKnLDDa7aDMAmQf86iGnA1MhVKfVx4BfNhMt34CA4zu4",
  "key26": "34yP6a3qk2F5w5CWgJU85T5SUWW5nNFY37ypyrWAJF983PHQAFJXkPQvf3ktWHZDP1xXgq7PxpmGDdWmnE7Ev5tp",
  "key27": "4bhKcocjSUGDBLAf4udG37nbHn6HSH1nd4a6dNyorh24LGxyFSQE7A18pLthDtwbYmZfxZW3DmwtNSifAoJCAZcv",
  "key28": "2aPop2bXpvVodTVGh9fNasJV16LwSFEp5kYBbujLzegexYcurp4rRPujcNCuDBgk1JE1M96gfnyGh5JyA8Xjkzhh",
  "key29": "2YCzaeqdssFwgb5B8E2ZDN2geEehCdQvKwbqcERgywMkb1GrEAmjf72h8mMs9kgaSKoR8kMTqM1ysoPgGceYeS6E",
  "key30": "5kmUqqenqY5bxiLa7TUCuSznmHvcMxvyZX1qePQ94eHsmzsJsJdmVAnPJTepR42G5MX8th2uSSwVLXpjiJYeQGa8",
  "key31": "48gi3wFTeaqstwTXAMwWk1jEDPVS9JDCMd645MtiGZ1i7fgbaFL51srjyMPkX6LEk4TGWrUQciHhH5xU1zmBe1hG"
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
