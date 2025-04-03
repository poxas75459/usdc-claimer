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
    "qr5qM4WAbtSMDYTFvBoRoRaxxJYV7bsfcJVzmnXomNGip6fUbeKkWSD8hbM5Ki9MSbRQfQEBy9J8KD81qkPX3Lu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519wQrKcMa3PZyA1HR3GXogKyazghBdL6y1j72bEFiS3V17MqaE7SHgqaHG2BTvViSYcgEbcYQ45DA5v6VNvbs9V",
  "key1": "5Ah5W5NJer5ZGNWHaTFUsuSPP8QSJUDrbkXfihNE6vmZr1kQvPwTjJbb7fpNEBsqhbhfpnbr3gENhpR2Mr11nk56",
  "key2": "2t6utFjZJPHHGdzj13UTooi6TTSN4e4ufxK6nvgp44nB4Leuf1oGXBLTsb7ZDFok2UnwGxzHWKn4dUvzarQdboqP",
  "key3": "5yceVYgtn9TFhZELUenE9rvzcx618uEyW2HdXtNH2Lx2m2C9eu7hkn6t2gZ3vqaJ6htpuNPtGC37geAcPDVZYryr",
  "key4": "4BkWSC6Jab7U7UJ1rq3ncuCLift5EbdxKsxAMH8tsQjVVNsQ4FLPLRATGocMf37uYzH81uabGx5rJyydCnMKUDTa",
  "key5": "5JF4Q7jEeMGCapwzC1KMUzwYvGyEYn261nGSq4MHXxqtfuHYunEobc9S2HWyXzm1XRWta4h8RdR5zmxEoC7FXQaT",
  "key6": "3EShGZebTeGQ8kjRyxWguEZiVF67SCMeSYJRaqpmGkSrhsrMHDSBNJqBXb7fXQSVBHjnjM4kzVi3WPUgEApkgBmK",
  "key7": "5SccqXNCfLE1RmhVrAVYpW5Bt4rLrC798VGtrD92bkpRAtgJD34sDJZWHddfF21eb3hwgwgbD3cFM9xXgpHSDUaV",
  "key8": "5bdX4j4GL6Q4sGwR4K4TMpfcdiUCM13DRGTd2UCQGcpiKeMWpZPnHeN6PKD4YM3bCiaWpg6GnTJyc6JPm5Nhdvxm",
  "key9": "UGQtAmE8zbmWSJYba2Fy3xmFehMFZf99b6hV89RPYM8xGVKYznghsGcvpXnopVwb82wybePmghhCwXRKiVbM5yU",
  "key10": "3u9nMfpwKzF9W7P2HZWVoUVt3tUKhmDky9mWNvp7iQ1tP4t7GWVaRFSpjFswDTjQek8jjC7Pygtx3QaxbySdT5Vi",
  "key11": "yWqJ9TbmZ74CunypVFe1FtA8GTh4ypJqrCe6x4vsPCM3CyeykQ5qEYcq2xuLTWiQ1EURjrPQbEaifvauygnKNBF",
  "key12": "28PGt2YNubCdroQmLzaKe2Yu3R1ddkfyA37qg5SvSEPBBvDAdbbN4idQh9WQhm6W4h1RAHiNog675LaZPapZA7Bb",
  "key13": "2UMk59bZDuaD25WMJQ8zRmHPJuUFAXNY5wthfytAqswwF3XHVShChHddL3Qosy4FypKzksD2u69JGrQi13xawmCE",
  "key14": "5sjfywSi6GU4xpyW5Yb6VbPY22e6gP7uBQM7QoKvXCcMGEafptF2NneeQ1VUkePZMFqFDrY9kR3rZTH61Q4xrkJ8",
  "key15": "2ruxPgh8JpKCCVHbJ4SeHj3EVPHp1HGh69A7uG2569wNhmxN8Xq7XAdBGjWEXvUzgBr36ZycgfZBoh8wgWonbe2G",
  "key16": "2bTjCeZpgPGa8QfHHrsNHYXmCo6KP4svEep4tMzZqgaoq8giWB6Mg9Ew8ekbiDqk2k9T7CrQDQrUKH7r4bwDsMdG",
  "key17": "35dUHA5eZb9ERXziPAr2fGuc4Gz2ao9SgLn6RaEvKzYEZtGKiLJsNZ7o2jfFLd1vYAhBRic3mJkKyQKp8Ue7VokH",
  "key18": "51zcWPgzxhJS3PDrV2SJ46qQHtaBhtokE9vcVZGNHYG6a3q7aaP5mhRs3Kwc24v7EA82iXMFfrcJE96qSV4Bwrj3",
  "key19": "5L2mKFeGegCs9xdgtzDsABjGHTMuVK5aweiafDspgTCru2iCha6XmrAcCzXEzKyzAg41ESBq8VWUgBXRn4gpjFMz",
  "key20": "2mKP7SC41anfvKLKmkESDhpgwAXorTP4jzqtg1cfTbcRcaxpWFwPo3rj8fJaGtQ5JmfjnPh6em95o88QwoYSeV96",
  "key21": "5vWmM76LDyCq2ysWivhUtZjabDazhMQwuKyB6E7RfDz2NB1bZc3tNeT6uM3QGX9Koqr32VBF5Nda2AhtCg8WLg4U",
  "key22": "2XVdJpLoYTVQifXJwhGGZyByZ5hM12msdaJC3FoSppXJvfMEd7L3wZ2RoLoAjDhozPdBkmKxbsS1MbAcx5uoyFHE",
  "key23": "5Nprz2QHN7SKg4NBBGQuQAJZuLzbwqLAcHSsp6tsparpt39uxybffnq4dhX4qKh2P4YeZUfQCuUPDYSs3mFSYa2W",
  "key24": "36YZnpdVjjqXMrya6j4mZEmabA5ZzNPYdDYrGZmq4VSFYF1mHjndn4kKvnEVZwFpQLN4rGg3tfSPa7AiFwBvFbVC",
  "key25": "wgpDaRcmKRTYJPgqBaAqTQFq4q9PgDTFk2jnn263bLVkeTAe3PrbhjmjVv6XYQ5Lb1NHXKyFdgXXEXcY672bPQo",
  "key26": "3DxF4JX1KdeLp1GLrW93NxzwKoPDepVu1Q9rWb9dcSsJmjGBXr2n6hn2WMeMtRujZ7AqCCT3tt6Z1LNoKDaeLHBz",
  "key27": "6UyjMkjk3dAkRt8fe3ZWVNrXrsXx5EYfmyJWkhtCFCNKwdnGxTqjWX1Azd2VugGGaBXQwmqXY5TuBRLW6Qq45xG",
  "key28": "3ifpUMcNwaXKFobHXvF3yahKuwTyJ8mBedZs6isAqxmwfkbqhEQnSPK7BPeH8cqhQx9mmwEFx9cLWYLAXqCQfYM9",
  "key29": "5NqrFDyRjujTgDxgqTaiaybFH6idCNAWDzXgtAsRZ8eRV7TZnSEL8s6NNuxMBV5N8CKfoNRYTmkSr2HnttMZGzbU",
  "key30": "4gbN4x8MexiVCHUprYd5Atjwz3NAh22fQoYTbTWU87HD1HRqfWHn5jDpLv1daZRqb2n5dmtUeR9nuuRJwsL1jcFW",
  "key31": "2qy2EjeapXZrWjXRQ2BXw1hxBwrPKsCaoTq3fWroHea8ikDaRoHLkndrmt4oPXvh9E4KXeQ7oy8kCcDVdgxSRcAN",
  "key32": "HMCHYXGoPCCZRtVJN7KYqHrra46NvVToA7jSXVYK7By2YHUKm9ga55yYE4thrthcwYTLCVc8oFuE59tibMhmAeN",
  "key33": "kGDLAEzVZU1hbJtrvv5L7L3BReJg1KkWyf1aFmQkKjdX4c7mEfcvSpWTBtsLUVZ4Do54j81sDQMT6Y5QaDKJJ5n",
  "key34": "4WmvFkVF342QzUJTXWR3cG9hiYnHSyP6TbzFHbnuTe39vHDzedaYC7tHC5E2RRaQTjgMQVkvWk2DVJsAnhRyRt4F",
  "key35": "5Cv7nF3HiSSNUsmTutWqY6FdFBFDbpqEwHFRqzF5tgZFDzFtyo3biS561DW1gkFrGrG9yfE3vq69Qjis8LKEcd3h",
  "key36": "4Pdva1XnDAdrreh8ArKvQMjjTxR7g1DpQmYKVw3wUeGxGvz988TKABuGPLzudaVM73jCpCiU3LEizDyj6AGTWxsY",
  "key37": "i19ewubJJaJ6gmeHWug3YiFjrSdv4UVM1ouqyN4iz26oSg7xRPRadEiNBZ4KGQF6VMgzDxHXA6pzSbNc68xsVXS",
  "key38": "28kDHw3CxjoUmAchrNB4h7mkgPic6byTdRKq3UvKFNvm9J3xncc1tSdkK39ZDeiCB8YeTeGBQVs51KBPVR1pj7qh",
  "key39": "4knHuzE3JzKVSevBirCCDnsVdJAoqofJoeobFZu6vbniTfkq7za2WhqWhLkoxu4SrEJzfnnbhcFf5BicygNhVz7p",
  "key40": "3Cg9ZVFxmbBRPhZFpW5zuejbjZP639M5oFs8zao183fm3iCpv7CinjNGjZc2oztoC3XsznoDCLHivJ7qtXmDBgnR",
  "key41": "3YjimyQnRSqv9hZfruVUpS5cLXenqCCLSxPzz1PuDWtk9cU7ALNnSG1gpNb9qG7VAN5A7WTLMhUbXDARXh51VsQZ",
  "key42": "2GTiNteKswTL9rtuhMCFJEZS8UARGWqGfr4gCkdEAA1zeHvbp9soqDsiz3KUeeyvDHtuP1ejrrfBsA977ykVx9rW",
  "key43": "4sDWh8tseqMfjqJLKmpL1mP4Gjr9UC81yapsGzT5QP4kEXXqNE9NMq9uhJL7hj41X94HdSLAS4PQgUf1jBJasCqr",
  "key44": "2asHXCdYgsK4hD3vJeAaxMK7syApnTRaeTc86hR74dvQvNJ2R9mJXZFt5yGLP3a26D6tADVa3dKjmpMwddmsaxie",
  "key45": "5iebAVmG1JA81AAg795qA1d4vSkyj4z3viU14LNP8zEZB7MLJGAijw6cFnbTsTZjneSq65JzU2xwR3LXpPSC3Ppb"
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
