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
    "aixF8MJF4c6N2TqLGyDy7myP8bTsNJFX3ZuFgYFNSraatkWK24tECQ8MK6pHjGeq3Tf2aWEU1JMHu4sdrQLpWy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ccydkbzLKfko4oMjiR17CdDzL5ZP39vpdAvuj1VfM29WhNMvSCxxfnzSTGzHa2xVrKYREJkfZs6VrrLcqacjMU",
  "key1": "55L19kntG2oXgE8HV2CFCUVAnha9w8XQgJeZv5s6exYzhk48K9CtXCBPQPqTtmMeM4CJuGDUUwpdmoAtmMjtw6sM",
  "key2": "67cyaP5LYxR5NJLc33SGCVWzPXBmAsA32U9zyxL8yJk98NDcPVQYGXpqs9gg4spELtq1T8MtaigfejZTNgZvwfYa",
  "key3": "3Cn4yfX6Y2uGAT69Ee7zZZmzCq3QXaj4NbSjPkLfKV12fz2BPnxk3VLGSgc5bikpHHB1runSJSEiTc9uEuo245AH",
  "key4": "3L744bgrzmgBaFZ2HoyjGJqZVDdZXuWc1x7fLuZj9s2YpFoK4Bt9Csu4vkb3TbR4SxtH5s8hjiUEN1dgJrsgcDV3",
  "key5": "5CSMcW47hVrV5C4Sp7ysu5X711gDfn7riuy37NZ52uuk48HMbicAuzKpBmaMECVU7cLT1XYzine4tQZ5WMg25HFG",
  "key6": "WTozaF2NiZEeaeukpeEeCxg2ojFiDWM5cd5sE8fyseaq5ZCrsqgtBNSpCgMaVCFKT6S6TD7TmaNxi6oWg7cfRGD",
  "key7": "46j3emVgSjjoAsw3wSzKrzHfYZCbfLYYA4kcDEheV6hKM9LaHfEu1yHJW4qegvqqqymGzWhGTsZv2b2QbMzKeB4k",
  "key8": "38P3Tij7fSLvV3rDUXkFZhhtgeVFvNh3Nvu4reJCSZwMVt2pBgf8BXa2sgR3chDxbp4X8BcsTkwyipHSVUSX78vo",
  "key9": "4Y6n5NzABj2zxNtMsLXKUFvFEuYPAnmuQ8AMudSGqf3PwXhix6Y25VXZAZW6ambnRRY9gKN7x5ZTK7jBCFXxkkbV",
  "key10": "aoFDYrAU6isDFYPbZS7WMtBtq95M9Z1JZNE3kqA9xoxhX61k7aDJqnDVXedtc1zXfzcfRJLhQPiuFXM34QKEMfh",
  "key11": "azWXd4W7U7rC4qMycycLtsFEv8BMro59Vymm82hdf5z7GHddaVPfkhNAoADrZKxir4kyX1SrP9fPHzJNH6pQtUo",
  "key12": "5oesjLMfsDaq72oJHTjRFwq4gz1cZ4oHyzNwitsmWCBX8eHzXCZAtQDB1FXqsYfefreMFg1bo9Vhm2Q3SC52URiQ",
  "key13": "5hnK1vo6BDpjHDhd1MTiH8LW5NKmW5V4nwzvQZmx9UTmTJdJ79zB3aPqFLt6kLXVHVUzWKdYG7sDJfmTnPywmyYz",
  "key14": "5HRC4gR4CxCbhepaA7XzwaQnQ15z63HNcGrPzkwdXTxK3CtFs1T8qryB9jDKwWhpdLzi73y25LCvchb5NLgJgiQq",
  "key15": "7wd31FgyYF9aFbZ8vbyK8R76SfcJW5CvXZEoYAd3pUrRCK6ASv8YYrsxBFVGy8wsnhEfaNnXYtrGhWox8mkwJCf",
  "key16": "3Qm79TnR4MdDuPRDxa6fkepRgMUnssq7DheKSDWqb1VhM9mPFHasZ3X5ZiAQs54NdB48ARW7Ch4quEVRjYXtGxvt",
  "key17": "5o1M1SUvwFVTNQ2t63EmceXgNHjYmHTAgXZ4KPTbVP3LWfuDDYudPxpjKwhWXSZv8zn9XPY7dJSQTGnGPL9i6gae",
  "key18": "3Heyz296BS2xUZbruso6tZKcGphwbv8M6rkpnDKXdABbdoEBjPHSvACB37rgKQGsoGmRunVpsBAdHutbTjFCgccP",
  "key19": "ydmDNcBdvmKuHK2B3xTUkCJTdtKgmNWLAQvWfutwSsPwy5ecYqq4c4DBwqKzRZt9PW3dwqCrMn8s2BfXDc58mxK",
  "key20": "222GTDnUhcK8Q8LDozB7xiSY1sN5MF1mJMd8rWN7c99i816YSiu6NQWUexYf3Sc98YvvBSGCQceG2SJVVSnGrdwX",
  "key21": "3okXAvn8oqyu7pn1oENmpJKRqworzAyMmPyGc6UVTQoFC2pXenzWjTPx88GhEzK23QfRu3SiYv33u1i7wiCrcmx9",
  "key22": "5yjVmonqpAuXnXjqHef5i5cCJJ2PV9ay85Fhh8WznJkb1tkjjAYSnsMJ5QeLJ9hyEoNouaCZPKSKNdNPttXhNcVZ",
  "key23": "46byfgUpVtdAdJ5iq6nSDA9XsoED64VdNt9rVdi75L8M4dSrTxAiuhKB6Z8z7RDWcoskJDD92GqfVCAHawuz67uf",
  "key24": "5aD9HbxMSBAyzKsknCR2UevFm5fzUJSNfSu5mihkzpxyjxHc7rXmC1CXAaCRaNycrjMaBesHG95LQyQaNNKZvaeA",
  "key25": "5zcgF5dpsGZz1ZPPQCpvWkLEZYS5zg7ShFHiNkEA4r7wgVHDeBQrZFTDi99dG5jHcGn58s1oy2jHERPatVvqoesY",
  "key26": "A4Fx96Y2tZCu741C3a7MrpJEiSSQPBRKUoJEV1YMEMZ7JLSPFZ5UMHZ9P5GSgsrGbfKcgCEaN8uAwPrSuwrW9Dd",
  "key27": "4U5MchMXnsPAJGw8iv5rtcyUBvQYiw1XJjDnK5ADfVaU1FhTBXPBKkHnC6dFUv6N2L5AYUFTHkSAALd8ZLdpaAsc",
  "key28": "4DYyQf5pD1gtnAtA9w9pmPQgEHwhDAQajzeTj7zMeLj44RgFmQhQxD895U55MwFLHx8zrJi3e4YT4ChE6gkcd7uw"
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
