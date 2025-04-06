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
    "3exM9YYJmfpYk6Esc4tgnEsTYaaV1iSbM9bPmE8R2A6PmhbpwkgAdtBp52jgTaGtiDMtqhfAEkme1Y6W2tHSQo4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcsNkqjg81MXMG9hyrURKFeBbXrfH6jFz7pKksn6VMiwqXLr5ZLpm5FcFXLvJsVR7zA2SDcUCXtGpP5ue7R3jgD",
  "key1": "31Vj96zSswcLFqCD4oQ3VBhfCfxMQevvw1BnWUkWZdgqpfBTHnLL1JrvcVW63vV1EqorGpDWNXpQGqe3C7vi3Mod",
  "key2": "2q7F3gq6fUGJndGJUw2hqihkRtSaxrFXqohV6miHvzKMnE7cGWx9WjU2Ejvis8nTuXnHNo8VJdztimqHNRFqjZfd",
  "key3": "Edc9Gd7sccdf5GewB7txB3ZFfx9bJkKMSKaXkXUpjtKinZmwCj4LGFHzWR3ncxd3dRFFUNY6DWXmkdGPjmmx7Mu",
  "key4": "7NKtYjp43rVoR1C4CKJLXhNzKyyowuiAzb9U6v7NyTE5gTwvYMCtAYEkzGhowoPBFPuRD5zkhsqUPWJyUQD1CHk",
  "key5": "3oo3PPryax13eFfZCprJ7UJCG74KinqvT4KbebvRzqbemRcym16L572CZ2kCG58o6aWe4QuKyfbXpi3CuF8a4ZRW",
  "key6": "nrWwuE8sJHD65fh6RHeqYZSkKdbksbXp9MALKNzqzo5bkxjU8PpgMttP4iYWnYmHzGXuQ7w1mHgNnZNx2AfCcnj",
  "key7": "42PZiroLpdEsp4sae9hfqzwCUVKDz5TrY6C8WDtBAj9nfLRkAvC1a8NmUKnAcTLEuNpGGj6Lbfc39ryMegkvr5pp",
  "key8": "4rZvRZXk17pcUGdxBESaqytTGEZhyESCUABvWwpGKUxMckgQFACmCjGXggTgbMqoDYjxLjmC4F1NfzdiWrefLaNv",
  "key9": "2KwmdSm8uA93dNGTrfVHHxh6ErDZHHgtrteSryMAuwiuURTjGW9bsfWi8U1XMWVL1T52Tucx64AJ1VDzrKE2aEeG",
  "key10": "4FD1tnzjuZvGRnvD9hibB72izJMCtfyt3Dp9muQWDRNgRWjw2msBmxuqNuumaGSY71DAiqCqxYak3cpbndL4mskn",
  "key11": "5CfKhAA82c5ttu92QnvMsvfGnmSNa4irwte9VUhxJoGYfWJ9dFDitiAkaCXAcemykn4LD1cTMbGUvNGGvDZ8LFWw",
  "key12": "3zmVFdazNdttUtiqajH36TwrFYGoPoFoamr4JrY1Tn3Zt72GUgmaeXWUnV1FvP1Rojm7gfx5VazRswjFm9sbGfUd",
  "key13": "5x1S8ABWiPBQ6piuPwNX3ktCDE3WcRjWi8XMAKGz8Rf8iGD5XfdYsanz3yzBWX3xvnwrj9t1GVTt6SWur1zyPEuM",
  "key14": "MsTsqi1cSRV6Fya7BjGTtEMYNFcGgYj21NBTjJ9X2VyHDQdhoBDaRq5AGkUNbuNvnPu8SkEyCNnAzX1GgQwbBTx",
  "key15": "3gjUKWEeG7TCUXoX7AMSiYHAmvrShmVRNLyBWoBea4pi9bViLp6TN9nQR6L2x6YDGHA7cBPeJhDANkRT9cpmXk7o",
  "key16": "2pVKGoav7PymfDbrEiVTFf1bkEfSd9xxo329MYxdAYTwaokubngBw2DSk3qqEPZ8XCV7YBbJxwLU2QasKAfZeXUc",
  "key17": "3yrjiVumcgRX7s2MZWQYi56r9mNpK6uz2x8FJzsB38CAhiqpzY1FyPKqVgKtqeVpEQuU6TshxqDXFUHk7dRB6HjX",
  "key18": "2fbKmLmAqAeYQNKRTPkUE5uvBM1qYvUsWuhNamrQtHjQkhtW9M3CmNjLzCBBcNdtGxMR88rU7pdW33e8unypU9gZ",
  "key19": "8NeHPmcDiHWEoaxgYUWmJFofCoLnB2hcp3ZJYx754wiJo6kvdhQaZSg9Zf5CxypNi2DmvE5raCHH7cU6Zikz53q",
  "key20": "4PGAHqQniNdZFm71vN86VfESJkDB1AffXCyYCZ8pMhQq5YqrXCrZTtjdA1tEwbZPViKNZWQsUdznD1mZ2jRGKeHi",
  "key21": "3VbX58E3uRWhF8D1cWDX8hRcohAfAwNYRYuf41P8VkPvsPwBX2MXp3QQ5XMEMvNaMoCSF7E9pQjdS9ex9e7V6zM9",
  "key22": "5fJwcs3xm2jReNrVCMytue72LZwC9mAPLyk8Y1cWeBagLBkmto6Rea6139QUK6fUH8hTA33Bz1C7HVWYH5F3rajQ",
  "key23": "c5dxjJ1FyddhYeqsovpmnhEQxafS2Yu2g8acHjSgwVGk4Zca7vvpoFDKQG8sjZRmJGL1yfnVwRywXv7rka1UPj9",
  "key24": "5u9QK2HPxXQXV43jHzroMsrhYQbNJfJuAdeRicucC9K9sDhTTwg9WMKjbebyjm8vrSGo1nk7GeRNiCCkLWMA5FEc",
  "key25": "4pXLQmGNid9hS1sNZrKEa7z34RFB1fEDX3cLUxLTsw1KiKnrSw52deoorkw7GiHMmz3bMTFXcmASHEGKrMi3yM21",
  "key26": "47jB8esF1RdhYFKzdanZw5RyGpGzyxM6QCHSWyfSFtxo5fkij6DXYaYwwhdvBKnMzP5umpjqboH5s9nswzNMR9e7",
  "key27": "2Wm1aPQEC5PBm5hrvTUuAYYFCmDW4f6gPATtZhXoU6odz483K1vcoZ9j2sSm1dSTcAkhcWtk4suNjMxez6S7uP4A",
  "key28": "QjFc4mcXnkBayMExze99y2NM5e6n6Ma3f15x5frLri6b5uztQoBm761PBDFr4yWH299snxZ4xFD5y8UzBm89tne",
  "key29": "3coQQcp2wfHFYKayPqGhWXqPU4LhuChqCUvmPhxrgaAmXb6qXtzWBAJdGQq3uaRJtY2eVbSwruZA8myQeECrdxT3",
  "key30": "4deTM1YUkDBHMTWWaMZ2SyDw3qMdDzijwwS44HnynXDCdq59hahN2pHaeLeuMH4xWABYMqLwRz8ycopd2VWbjAKW",
  "key31": "2yGTGvxPk9d6jA8mGxkpDh68XTkhw65S5CEyLYXBDdTtpkR5BLnZr7PxkUUFjQbTJsT8WYUSkCZTyWmkUkg9G3Gq",
  "key32": "2Z2MafYcVHh3NRCzbWA2oY6QdBxLVLGYuEEzdzMYaAtZiE6UMJZeqw5QHnbbkmspsBhPNAzdLdWihks6wUM32Dxr",
  "key33": "5wY76Uhv3aKuCQoNn1wHbsM3iFbvxug84LpNC9qokmStyUdKPZDjooSX8fTHijXbuT9eQP8qV8xUBgH6yrfMffnu",
  "key34": "3WB7YRz6QuNYDwPQ6Lc5Sjc41WyvpycmrFHhcNt5v5bCFw4tZ1cjsZBjUh9g8JcGncwCi5aWkZSJLee68WhxUaa3",
  "key35": "5evRaUytbjrSVy82C1NTeqZMBp5iXyAGpX8hA3bL72fvysV9ZxTRNDJuY2d49oCbpA3bcGs3znYCuzDU4sE8RY15",
  "key36": "3DRmbH66BgM7wLjVW3VdRqn1sq2zb8f1AjEyqwo7daB8BPM81CuFpFpG4xkx8vcyXhQ5haLFo326qAM8r4ro4eHK",
  "key37": "49x15Jxg1dBtBZkypWtJ2f8ti9M7utP2gzaGthDfPEN9A32vr1M9p8dgb8zgWMZDiRbh6u7FbMRqUqXRcmNzWh4w",
  "key38": "2sYgs7eGKdGZab3KK3jfLpPXQnjiNVLMYWuE1co4qErENcNceCmzpbq4qR7dQgcLfibAD5nrRA9ATpLTddZJbtnr",
  "key39": "gMAr6W4mHmTG2CJeYaEV4UHKNuDYnMDHQ6brBTi11qdMH5Rz7Rz3Q2qNKHQjYSu5rtP48DXkY5A4QSicdS2UAde",
  "key40": "cGYYNp8Yr2NSKwY5VHc1tNw2jSmSM1Kgcx76PvD5YSWahiSptv4b6SkQaFh525ex9YVdb6GQVnFuMvxWLukhy82"
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
