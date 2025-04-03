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
    "3ePA7goxZyJMEMXtkbRdNshkfe5HcoSpygAHuGqmqM4eHyECVQZ45wJYk7LHxy7BL1DZdCszxzdvxBbZEiZrtX9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3CRaTMYCgULe6DYE6etKrN9yHvx6QemDCupjU1KBu6PdbLrFJb7iHWggG9vXg1rN7qawmSnNy1o6bE5EYbSAhX",
  "key1": "4P34L1LoZVEuAye57s57NiMgFzV8dtsAJgC3t7JFKE9pUPRe4qTSmhg2n8xHhJfHbcKp8wEdFRykPCWdF1iHhyna",
  "key2": "2Lf8s2ZEgvgKgUL58ECi91WCtEnMn5DZVoDXJTyEFBL7nUTkSExLubfyhymuj5bCzKEHVwTM8hhDRTZ5PJ8AfZMP",
  "key3": "45g2qZDH9bAkAWnUuyQfrRcnFK6UBoYYTfyyYZdYT9URJMK2yioT2bkeGvzYufKu72aNnvVGtCcQyi9ZoVYbmiY4",
  "key4": "5kKBHxGmMqCKGM16Z27GKEtPXLRBmtEB4vHwMqHjgRgi6bwTnebBqHsoDF1GUgNHcQdc14WyPi7hqdENU1ZePqPt",
  "key5": "5pp5rP8jAshUvdcpoybc2nTJAmMCyp8VbNLKGep2jUcA1wCjUZCTLy8r9ffYtKNidsj9E82zZKdsTzc6snzB8G9o",
  "key6": "4ELoyocypBBdhZQaYH8PXSeyWfnxkFdSZAgXnFD6j4zcKhZ2iZYHDrFskZZzrgzZfVceDUcnSaCWHxPtFEkUDW25",
  "key7": "ZWj3CcLVoZ3dbLvHQJra9a2FaxY2NBcxgi4cdJBP6d3FcEahkwhbdPctsWqsHdbthDKhyZjrBmAw1aqaUngY4tM",
  "key8": "2YnQMwvMc5C9zkwpoDMjaG8A7eMFYMMKxSXKNt2kmwBJf9N5z9Tkf5GW4zH1oXCmdG297MqDABsGorFPYeixoaLN",
  "key9": "3awSdg5uujpk7pswLCjszNECm62wfp5TYYLGGEdMxY1VL1FuG5D8p9sKFz82JWyq7Ad3SeAAMSFyJX1jvJstmXf8",
  "key10": "3fZpXvWZeR6RLd43ELNGRWEgsGk5Sm5awh82JdP7aKw9pBiJ9EN4yqzGczBSKAVs49M6husZ2PrnsJj1cvTyCMVt",
  "key11": "3Va1pZGLBCzDAncyjChkrL5a1XGa6sMm7CQCURDsZA3n7D3wqgjf2U4X4q1qYCjxMhM11ANW4rfxu6LiBS7ivm46",
  "key12": "3oQegYNWyyy9yS1TMC6adgAzXCsq925dVztBgLHx5NwygeSJNRi5WVfMGbTBKctha83NVKa7w258dwatA6daNriV",
  "key13": "21RDZUPLYSNjGCMky79Dmmc6ZEhnFEmBLzxH2vu4hjBQ4TkCfsvbEoktWN6SsdeozCa7KMb6KkLzXLFGJqQQFwe4",
  "key14": "2TzcEpSCjRK9J3KEVf5J9oDqzxaDAuiy87syBXCHtRnQEJBefroSSZbG66vx2Cs8BsPCDAd8eGsdBvp8gPQm67YT",
  "key15": "eQzyUrrMVFSjjyww5Say7ar4MBjvMU7dB1jHQFgt31D27GyC8k1KyhsPVBhMCPocca7c5sNbg7zs1M9nFqVk57b",
  "key16": "mKFdpx1uTmPATu7rab9rPX6uF6gUYctV36aFDFyREULMW2ZqTc1EQGdLg8tSv3pu7LKaKBMwGwcZaxTFvFZiSbG",
  "key17": "2RvXEFBWuTysfotuCY583UCDonNJEXviZpok9PZ9MqZn6uFB8sS26L9LqVAE3dC94swqUUaUNaRKuVN6vBmaUXXL",
  "key18": "4sPgLN6dH8vxcan3Ubojwyr2VzTBGquoUbKwrFMKJkiGrRCdECiQD7ShTCBszjvbHmvttwRe1djsY6k9ei4esZXb",
  "key19": "4PUzswEQskydHC3YaUQwjBQ3kxzfARZ2xUQG4j3bFq6At8Pzk8vt7ZKsUvYgcmcddAsG6DNgrZ1ityRB6ucvjgQs",
  "key20": "5Ehh9aeMCXfHumgbmWNc7oBrd6QdM5GYmtyj5B1HyLqfti1KgDAqvCBQFpJywVTWyqVhUCyFSsqSpXzpeFFkQoh1",
  "key21": "5hrbVkkvbTnvRmVFiUuYcg8DgjUdkLVGS1Q8YDq4SNypPADEjHYFH3XANdTj6SfzZP3ves7AZT27v1ndzuPfWoDL",
  "key22": "1LRUYouk9arwasDsfXf9AJXoWdvVcrBUSsb3YfurGtEV1RdDXj1dFPKXj5UbdhL2uZnm4KkirktG3WGvvATfn9v",
  "key23": "dfRpq1MRSuafVhHvaFfXV1xDQDE8epvACSVEkWgQpizrkuP9kp9ySr4C7facR4uxQJoR1yxpNvMD9JCWJN1ggzN",
  "key24": "3tSvHD2vnKvh4Vr8nCZVeKvyWM4EZ81fwjmgbGfwZVBiRVPiTj2CQj9AG1mpBYJsA7T1f7dg8NFdQetsA2o7UdVL",
  "key25": "4kkXTgceWCb3QTMfPwva9maQ8ik3DsfLbUA6QU3DayHrfsgDgb7yTQK1yzvbPStG4U71wc3wb7PKDvjaxUs3hzA4",
  "key26": "R8uhECFgtJyrK8WXw4v42oSmnjjUo38bJABC8GMFB58xyyid1i9rx7VPVEGb1nzCR1vtaxKyjqJwzgZjvas7Gzt",
  "key27": "JUSZRntZyaz53e5jCyWja5Epsym7uxvQUTexu6qQmNHUHecuGB3fnHdi63b4YuNDqqSPo9PLSyb7gm9bEpK8fqb",
  "key28": "xbPM1mL43xt3Af7GP2cwEM4pGbn6kGzZeZwgcbTPzyWZPL3baqdT5Di9agKvDa2HcjnoQrzgzcWMjiebwvBnTJm",
  "key29": "4ttL9fdGYaaFdALatVi25Mpbcf2pSKrnnQMfoEvuDJ5xWgGAW6pQSqbMkiqNU1B5RvMXecnY1viGJZQpMRz5hyQj",
  "key30": "25VWSwSfZvybmeDfK1bVxJJ4ATX4MK6ZgwYtrFRGSnQmdRzHzYMvVBPtR1TdPz4TDNKoW3FzRaoEGCnaxBJYyWLs",
  "key31": "5d3g1A7geM8puPVgwd61jUn6gMKqBrMqrAehDSHFAg5YCJ5cWTQULs98AduoMhGtSW4obspkzKxRJ1aaVZsT7aAb",
  "key32": "5WZR16VwDGfgcguR8REHYMPCuarH13bQwQcsTuj4tMx1Kf5WAG2tMRTmKV1TmVapD7LtUCzTjwi9jtDFfomJYaMn",
  "key33": "5XB3vsd2ZFAVFmHgYHv2gTvYbMjnvEJGnFMJrNfHuWxduP5U6cs47zvYLHsL2Sev6WRACRWMTdpZS3Fe2ESwDKEp",
  "key34": "3hxZusdSg33PXi38wRzEaLiLEV3jugJN9NSHydMeYhaoFtWPkf5XM5rq2X6FSdB9qJq3GBemp4th5V8zsuqA1vvC",
  "key35": "33uDktRTZtUYSs2fQKJEncXhxwxhu1NQfABJEhRgJETsHR4nZxeQ3PjxzGpyJmJNmuiubJHQ9sXMTTyRqHYsH9te",
  "key36": "3pBbts4WenJ7W8aQaN5xU4hegRQs8w3X6h1F2WW8QLh5pgh5WmdHWshDurMn9oHMXHrP2azxi2hHV7tYzqazUDWf",
  "key37": "4Ut8mdn8pHp34ZdQKT7tf2PdhrfKDmBBhsk1xLdbBYBazJKhjyjxW8o3VV9iFFzmUhvoSN8UquSYR5k7mDi2em5o",
  "key38": "22gjNKykEzp86T2q8nfR7NFgjreiHi1ZbN6PGAxvNka5fApd1xXt6BGDKJuXQwJNSmq2H8niFvYNRzDP2oMtzzhz",
  "key39": "62MNKcUyR4x5qXuXA9oBAhQ5aZogwKgVzB8iFgtX8oLAJHBZJusrMHXytDXhwVRu6yqGHaN78sjDP7x53LD6KMsJ"
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
