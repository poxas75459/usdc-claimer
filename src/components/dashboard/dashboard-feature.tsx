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
    "djrpNCtyZ9bdbjeLQT6TT5tcmmBgkdwpysgXquqx1NVQVMTrRRtiUHaDYapspwFx2PWWLHNudaWVievBFCUnHhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnLjDpZfRSYfHcYqs7xMZHw8byN7hFHd9nfC2rMcGJadM24Dmi68Vtk8jG3ysHb2s4gUEUh6RAEfnWDHgn1LwaD",
  "key1": "5edCpMgeExUaZJYdbwkFEFB45jDrKMA2TJsZsFxogYdz4owggieX6ijmYHTd5MXGyDpiwKC7b2NEh5uRJTJ9UEq",
  "key2": "3QawS45JYjuQRREeZjCNPgs2K41ULxted96rcxsU6PYJRXeeVNBxHJ9buZcYtG3cMQ4bjwn4bhNqACDr3wLyYp4N",
  "key3": "4nTh4MQnqbRLbz34NxE5hVf5TwCe4rtVUsEsV8p8Qi8Kh9ofJ1LYV7eRBgfdPiELibkHaL4BWJJ5xe5nB6r1mT6U",
  "key4": "5fCZeavMpTYLYd2Zc1VxFMVG3Buv3kFXF6RBBb2Ure5xmwUQgkKMvL6k8dkDwhdvH53JWPWXTQy6317SQzqrZxwQ",
  "key5": "3kokYomM3vRQ9sD2NkRQGHNzAnSbknaVDMn4VyqwKkyXjvATwBnu4TKtC5hdBUvJxkUMSaKWhvTogzbf89HjVbm9",
  "key6": "5yF91GjbpaY8CU1m2gcsntrPBB3bJ93nbs6GsEH279Yo2uxkxob9dDobvkgtX2gLAHJTAVm2CmfAuaFrQLRYMJzu",
  "key7": "3PpF9wSuAEtcDH7BeTB1UcRwohdLWcoR9VxNtCKfwC3Do49LWqGnGNHNDNviyNzvVhtu5aSWgN4zNxQ2R2fkHS43",
  "key8": "61SAykL7KjK5B2MrSVMdLA3HCdDodp5jYUA9ecnabyLfhmnXcvEDRDaDFvA7DDDXNEYhGJrDKGnQbReaSSZXc7Rc",
  "key9": "3RzhLZc19kAbNq5HC8ySRWJTPaX1nG5YmtSuh3oNo1ZGgmcziP4eixFyD7zkGnk8XNs32HTJnqLU3maVWm8Gy2xt",
  "key10": "3wmKywowStjRhtJyiqT7qbyYSC8cftz1CxNEs3k2hM7Dxf7GpG9c45c6GkGxa7tZYsomKtpJyNysVy3TuDymJkgN",
  "key11": "5KiojeLNWKQYsBE2rLDtSinNJxXP6z9V1LeXgJqC5XcQpgndbqEZXtHQjjs3PoNmsShC83F2FpNi1AmWRwBxWBiG",
  "key12": "5P8cxQJZaSH1aMLK5DHsVEB6xA2F8LHg5K3JjE58qMQuZQRcXhxYVPHmNgUFriPMV8r8XJ1z1NW53ZEzkhafWtx5",
  "key13": "5jfCQbMDXRhJyuBvvhWsqqP1NUS6bd69nY27rSDrak8X2TTw1dGAMoBzruYbV5trCsfcs8SixYJX66ue82XxpwRr",
  "key14": "m7xw3LiEAAncYcoSpgMazv2EdmpEJcroxN7Mqr8c2eXvkrbkqntNuTxBHi7qmEJ1Vz5S5vYruNxPmueC1peKs7R",
  "key15": "2yJEvJ2MmN7t4Y3CRdPedfgQXLV5gd2kQApMkkPAh9caUJrrxecKsLM9g7VszgzEibmG5T7iwk9RsAmgGYs3HQEt",
  "key16": "3V1bbQL1s1qKo8xe3FvfK7centx43R1Sb1EBDJVQDmRUNuxc3RnPHyhiF7gY65yQMJTedKeYM6aFYcqZ5Vw1TQNu",
  "key17": "5Zv7HR7Lm983CjBdEVMKPSZPQXa373SMRgMsMpdgxhDKbdam7XmmnKJsrREEK4ktRWbDNVfkUDpaDcNsGMxpWeed",
  "key18": "mSWS5hjNzdTwQCfiWDgDg9fhmuqRuRMdzcyfQH2EWuE875QMpHeLJR5jv7oNYEnREnPnZ9yVujAdNd9FjGL3sv4",
  "key19": "A4xm2efrUMy5Xz1KLmHKPxxaVtLVJ7F3J2d1A2xRubcDcZZxrDdgWQEgJ7aiEQJHCVFoWmp46y6VaxUX8BYVVMs",
  "key20": "5skcA3WU4mfioMVL59zNmMNKiK9HuCVYstjTyb2zH9iTzsrBQ8bRRB9AUaeqdmaydCJjyV9THu4obPg5zSMeTq7K",
  "key21": "XcboaqUX2zYYDFuhNBs9KaBZLxCK6kq9oebBa2z6X7KK1mtJfRkMBVyV8XbgGtDTFBp9x2HRaLTxHR5LAbjDiED",
  "key22": "3u57kqUUCMAVp3qvAmfGxvanGwtRbXsiYsy62zuhPBKULBxFSbnmmDNXc7Sb4w2qxqd3dXSJL85s28KsJ9j2gxDV",
  "key23": "2qN5PLshH23fbwhUNAR7a8SMX36k5KPxgxxg4Lk3cTP2WQ7dDop5AXhkggDLpQqNmw1LZqV1nxX5uFHUBsi9JbrN",
  "key24": "3Fzrj7Mt3C7LMwZQWJsf9vNViq7z9uwMVYonadueJmHA2QCp8EaQoyVvPCYoaE4EGZTb69o34UVEfz2FxebKGT6g",
  "key25": "5Lb1L6yMFEtdMgESEhwdUpbQw5ZkoE8pVBXfyhaor61VhFYAS11F8MoeyHckNhssjd4xbJ7hkT433SaC4MFW2gET",
  "key26": "57Nr6iSpcGbjxAnrtDz7EpP7CJZUdZyFthMwmp9KgSPeptQC7oqnaafCUFsQ35FK5S57gy7c7zTJqYJ9bTCiNBHU",
  "key27": "3QfeUjSWH5SynZ7s1X3W6umVoDUfVVcAEZdR7T3EaCiMtmkWyXKXZLCYkJvKRUSw4gxMUCZEh1X8KSXCJPj7jDtf",
  "key28": "3qe3sPz7ZDKZZMfmz2vMRyRQ4LGQsC2nwKKScH6UQ5FLcL77q5kTsh3p5uQauYGpE3B3UL7ifL7qx7eU333ap4jQ",
  "key29": "5GQzNj9RVnmt8ro62FDnnc9M7K2GDTy6ygvkU7N4iMLspC4iifnKQhLhy7oodeMfJyEsCb2tbkXuWG9ReZxGjEKJ",
  "key30": "2UxaGqtgyrG2JEV9JVsZ3Vry3hFMJTFZjMRWjHwTFBfWHGqn8i4jgUeotKe3V86rXAC1Xoys4kNNogYYNGyqTKRM",
  "key31": "5z4UzAhPx3Hm5eSVSGwwi5qNq35ynzz6DL7LSFJgD1S45mHb1R2rmwLpy8MtkjUinjYHyLhqdUYLhD8QCfxCHdWK",
  "key32": "56E5EeaMRdE13Ab9Kc9o2qmytjBRedkmVPVbzmNuCUcgpEKWVF9fgN5sdroV3YM3fBLwiaSdxsbzu2DFNbjU8mXJ",
  "key33": "u8SjUUW2GRJ3YBBoZnf1EygwobQqQtwNvxm2mwj9Zo2DCWR7RRbycPHNzUeudDh9juFN2p37BS99pP1WbTZaM6N"
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
