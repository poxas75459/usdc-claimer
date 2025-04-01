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
    "47Z5Rzwcok9nuqxCJSGj4RAz9o717N1cgU5x3HvfySk32ronLTheLAtDjcwTCLYra2Fm2GcyuNbvmNiTxaGEKWAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJ9nxq6trzk4P9HDndkNk3pHZGqbSGxrg3eaUr3bUhF4UduQ1tVmwCB5VvCMwexrDPHb2TnZtqjTxC81tynoZLj",
  "key1": "2qtkUQ1AStNS36gw1hC8wK6Cw9dbkYrtnTmcV3n2iNr3usgwZKTK9JUwfwVWUtEyd8Jqta3EQz2zRgCuninvEFhY",
  "key2": "RVsECdHTArdF1Xtti8LkvbFxZ8syi6M9bCgZDiJcyi4Quv9aoSL58kamybpev2aJff5aPGUggaP6nyyHXCa88KA",
  "key3": "63yb3WyZeY2prEcWabh4u9JcbxowY8ccB4xpGmxoCRXBcjJPaQKaatbEBJCaeE5XU14QAZfxXSk51xac7E3XyX9Z",
  "key4": "3dCEkWF15c7JAocLu4vYQFYzP9UPFUKThuwmvF4hi3AcPEJQkj2rQRXpuoKRAQtLHYcdtUiw2vhW13pNh9AwqGXn",
  "key5": "61NkY4wTQ4EZwQUMeTgmyhsoJR1Fps6RoN4PGydbLhyNr3RQLnvTk4ra5k7QRbfF2RL25mp3Ron4iaXsDXAoN1bk",
  "key6": "2nzaXVnf7pAyC4TzKCsKyJRRYKohdLK7G8B16DW4x5BV7q9qzMLbVEAE7kVLPeF5yJqzLPJPdz9skmiMeg2tRmgh",
  "key7": "5As25A2BA4QcTED1eoFfH78b9FATNzKa2zT6ZkgW6VUXgGqwEiQXx8Fymfv5STxJR5eBGT8n1hpMpmNhUAJaXmGU",
  "key8": "5MKNnQAG2NuA7Z5hxCvAYtagLJywnNKUiWhdGuhRnPx6goVoCGG9QazGtz4iy6tZC5JXnWk9K5hCNYz9U4qqgpkx",
  "key9": "qnB6aXosF2ftrjVz6Q3yaQqNYnsWoHxihjfUqxkPPzzP3UHz5oFqh8iQyarHvEGtd6xrFvDbKj5snL3DzRkcM3s",
  "key10": "3NgjzNRSDaRvrGv2R3iKY8ft7sz97UhHhjSEorMNgrk5xxC93drYBABAp1tAMLhj3b9Un9BJuS4AkG8kj6nRKRUU",
  "key11": "4gbYGDduBFxtZNW3q12cRCuE1xhpvipXTCdUpYJJR3EiN63KVMM3xD7bs3bAKydxSrL4FwkVYmryGTUKjhvQF4Lq",
  "key12": "JZxvnDzuyJWVms7WUNPg6H4QYvVAvtrtoiUmJUidchjUy6m9H5osHa7mom5vuWh78BzJfyBjGdCwtW2eewGuRKf",
  "key13": "3C5UBjkny3y8y3STQtqo3wjuyyATWALotSfnG9rNdMmeeby592MdNx5P3MNLSVBF1G4RDTgBc8FDHpLVNugJExgd",
  "key14": "BJ1Jy3hFzkfZkieoMPZvsDqeHNVyvCDgtiwF6aTUsmTf5X2xw3r2KR6xuNtZdCFnGpJjFPHG9GezuTuNqPgkvRw",
  "key15": "5cP9i78edJREBC1T5PQRqFn6Ukjwq5MTmpQXscnVSB6g7TfNVRUqmdSGPS8MLCG7XJj1fFkdFcBydgiDEwcdcHVU",
  "key16": "66vfX8faW4A5aYGtwMFozLGEWQmVs6RWQ9cV3d18gM7advJ3CHPcSskyoxZScqgz7UZH7CJNZTH4zmjSg4kcD5j4",
  "key17": "4VBRhVH6H9xpqttFK6bDgVnP3q2dM93eYLHe8gt6Jx4gwCcQahEsvDVt8so8wn4HfBAXZQZkMKgJTzVtAc6nFR6h",
  "key18": "5S6p8hNmvMbbt8nmkxDmoxXiF8GCDByEE8uHPzgRPgBJqbFKkj8YkmJHVUk5DGX4Nf7F44A61J7ykR7zTzHj9SAD",
  "key19": "431PmCV78pVenfy3qVmfbyzzp3ci5CeMud2mY1ZC5KxrT49rP5mpfMtwXvUpk2THdBgL8GbYh9Rar75LHAxFyeEs",
  "key20": "2x72dPKuWpgto3fy937DtnGqYVC71dCmeCYvWjAVAKMgohT67aj8gV47mUJzHTbHrWdnANK4ebE6tyT5Byw5oQdY",
  "key21": "2BQXge1M2RUKuSQXKANSC39w4ZA6crAcDRx6BSw6P3mWvNa65XQUbk3BehTRqvDkmAxdmFvXghKMuNBKuUzkZ63u",
  "key22": "4JCctjdTfGHEGetuT19x46uFNHPL87N8DzyHFs754zQbCeLHyfcany1D2ysyNAd97jiHwy4nnrX7qVRE83DkPbjk",
  "key23": "3esd7w17iHDzpRQHNvEdpW2ECdt5iNJJ9xAVYLjnX91FKtUaAdT4gRWFAWWeikgrkLSzPojK4bMD4vjETLpCqRLm",
  "key24": "3iR3CSw9ss8JwN1nJcBEq1WwYeaCJpR7j1HG3cMoMe39o6ENCcf581apB6kA3qQpsADKJ32gzGbYubHtwcVdW4VK",
  "key25": "3DR3YysSNekhbURDkfQApknE22PmkoLeo32gV913hUgqj1FyWMLE3yvBcPetfEvmsXntTunCcg5EXdjimpZKcdRX",
  "key26": "nhgAU8gKbcaPYBA8GZPJxt5Wn2qNC1t8X3hBZBzZwqN4mYDzPz1Akdw7xZrDt4ZbpmgeCaKdcqHzmNJNEEPVrRG",
  "key27": "2qmnpuafWxK9rWXYtny17tB8pNQgygpSGqCMU64x62k6ydj8o2vGnggxBVL1RsVks8nqoFm1Lj3kYHYRZgeret1K",
  "key28": "A4Bj1sUn9H3cYUGasRicwXcTnzpcd2a1sHi1pL9cU9wANkXnvb9REvzr2mExcHpntabcVJrvjyFY6MHnx4nW8bg",
  "key29": "2qqDUxh3oVsmrXKPEPS4jLe3b51zDrfQxeGfHNEYbeeCzP1pr7vsv3NWJXozVYV3n94YfSHyouLWHMjJANr4kmEC",
  "key30": "2Aiy8dgrtDV9cQ4ouehdrW62FZmMSofacJDLY6upPv5WBWaCVmPVm6DVAUBEMd54RAfvuw8fV1FJEUp6MVN7zVGo",
  "key31": "5jt8yT5FL3b1rn9dg2PxWEWNMbxNMjxwsXrZfbpuug9LzxkYg7pZwMq3uTU6SF25LJq92WfrZk2HqfMFZfEwY6h8",
  "key32": "3bKA35MbyLc8vBY7yTC6QvbLUak96rSd21GXiHntqnpP2vQb26DXU9EiPQBGdPCFr5kBChrXmJLw8KyTaW6RiGn6",
  "key33": "5aoCxEFQLCRTG3v8BN9goKMNNhDH5XcUcMN1RvdywHsddpZRcwfBHyUHHSNfW99FByufCDtRcDwwmPGJGPwG5gvc",
  "key34": "4Suu5XhU3rFcSXwLLq3DNHYfgviVWTgfE78QjoT3APDUEbFEz67GGBMeBK6imK3sGEPHfGooRcWkS8adrMffZr9j",
  "key35": "5RCUY2xByRbvKmTyV7Vh6LbQiizjenRDop4cunJrL39MH4n4dpmTNdaVsPmtWCaCrVRtj8evagrjVyZLWUV2H8fP",
  "key36": "9yGVTSz64sVsnCuLVRUVCFJ1JCNNkbUpLy6NvRaGw5sMCHrjtspXyWjBUMLPJ4CwdakqpyT22WN5dY5n654RhWP",
  "key37": "3Px9baN1Ci4V8bqK7ZpRL1e3juEutxGSF14Yd9g2NiRggU9gMf4REgRFutqytAbpP5Ee8p8JeWNLAEnBjUdtr3SD",
  "key38": "3RCzNiS3jcAwwiJ53qNkYmEN9JYK2n8UykyzXV7YooPAFCUiCfS6t6RmpYqFGyoZ8qFPd5UhedzHceiL66MXnqTJ"
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
