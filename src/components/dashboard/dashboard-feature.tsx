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
    "gRPi59EkkbSy5JEdpCitAFx7undHBa7JNfT4YV7inNXVEoGSD9NwkGXumyccubd1G25HGDKspz8j68d1pUyEdJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnGfyas66k9p4Mf57zEW1AiwkWwhLZ6NB8pD7jpppBrAU2VmZ5cP7Tz9BHNoxypxxShasrUQtjthahrd84dFbQQ",
  "key1": "4SnaDsCDz2cWZoB67bYAhSuZRtRCYb4kP4NYM1KUQbVTBAHRLqXc8Lr11Q8Gp8Bp37bE7xpo81BXGJpfvnzQpQvu",
  "key2": "2EmNUG7c7gzE2gnBwpRUFHJMnXkDEXJehXdyPjZSre9MFibgX9tenRJXipNh5WE4A3Z69BJ7N9Raanv36V3pYfx8",
  "key3": "5n3apdabkcifiudshnrXA9QpWK2i8sNLwuatPA7eL12buvdsXL85KcMj54yTQmpEg4sykiWg7ArLr128NdWKW81L",
  "key4": "3N9rcr62hV8CVWoyCj1f9Rw17R3AnBEPvnQ2CCw3HxfSTYvN9E7AuVb4NhcLoWN33fYecrnfCg9nazcgPzZS5iN9",
  "key5": "4k1pouGaWzpyhU2tXtyNchvMAKJCFpn64ekP1sQJ33CnhWgCeLE8hovuYySYB27zA4PDys8aNbKSKLps3acgA52h",
  "key6": "4bGvwTtbKvzAav7mot3q6MoRrDP5zeHfgH3ASZioPfbuPkg4aE9Jn346nzH4xY5EyJeB83jYuEqCsyukNfvwUbdB",
  "key7": "64iTkRmn73modXT3PJkeURKpwxzj9MjepAmbYpdqdpjuY3eBotSE1GGi98pvPrRPjT4HayiNKZVMt4maWdRiLGY2",
  "key8": "4GKx5yoYydYw1GAd33MZpLYccmbXBKdpUPV7LbHFdZ3bSTGU5xsJo6Fcfm3pYtd3CuPtKvjEDB4rJwUcMMJhfT2Q",
  "key9": "3ufbCT4Y6xdBBhxDtHwTEQSMJptbCNrUSGgZY4Y37XRGLo7EMyRkHKdUQTJ2UuuiF4CXZkB1MQ5Ar86NCHyqYFQi",
  "key10": "47msHPfCufe6PjG7aGVZvFBMoRVyHgiU3ueDRdTAwKiccfFcqSZ79JBjHTBMRAtUz84FUna1dXeWmRFTErNA6LhS",
  "key11": "4ggsC6wemobvb6Zq1k6Y7rjdup5GN365jrLq7hsfnVsFJe8XAjMPA3Ru9w4AsQtZoDDhhfyRXvXbNHfg9dRFGsxw",
  "key12": "dkqcdDqsJQdWPZ2oLbfvg7BE5STBoc63uaB4xJZaqPJVs2dKeAN4XNBm33nyqjkvfqmEYtbpst7QhRLrkbtWeRg",
  "key13": "5Sky184Hdo1HR5vAZM3AvQzUimmuwxXXAWCh4wpnJUppBcNae93ZkWGLebvnRkR2KiQm3UfNmRLReCModwGPNK8X",
  "key14": "3CzvhVuHBSHBuK62iJ9sBsc3TQf54vqgKj5QvAxpDZiqYx5sGK9xJ5hzkUFVi11ba7yy6Xvx8pUnDR54gNRaAhVd",
  "key15": "gZRSnog9CA5HCegXVc7G8kM6yfzWquDGAD9amBdQxL3tiAcjSbzizpZEgsGkhMHCeUZSAqvqPqT32rZgh7DZ6Hz",
  "key16": "4RJazc7QxeWC5r45fFadZSk7ZC1giF9tGJVYp1X6f8wZ7Booc8fvbS2eENrWXTQLLPSom1wegRD89VmTnVogbiWZ",
  "key17": "2zCAAvxxUimKRiw2wxSgRM8TMkhKpzeaDAFrt3VUnkJCSCeh1rzGEXNo4pNBNGjvr7BgEA3zFydZLwjhjHFjVNoS",
  "key18": "2K8YPXLSWhcJXRugnmpujV4nBj4YQ3XeZEX6hi27QGgbeW4pKkq1LUdGz5bv3Aq1tftP8BdCvkQXgZfXAxPpqHUP",
  "key19": "jF7UbU6zC615tE9GRHTjuQe173xjyh6APGCyG9cZLLJV49MpziKyDJt4CF62ZmotLaAAJ4nK4hBdUdqSAq1kbtm",
  "key20": "4WqmSSuZSFqGXWcLFXMQxGgyHG2m7b7EyZvDt8SuwabqtD2QSbMzAUiYdaUXwvQJFpeYxE1rBdb6e3TiyBpRZhVL",
  "key21": "3sYRiAPxaQHPnJHEC27tkJpzy5Ckm8x9xvjmXFUxvB1THYs21K8uUbhCHuCsi2gYKdyHqcm27ZkvNjuiafpw6Y8r",
  "key22": "2XLLh11Vdbe44v54ZUoFjMw4sv4LnFGraCTXVhryy8zsBwRwEzpRbQgUbxwBJksFeqUKti6pwsa52AVAtXgiJM62",
  "key23": "TKM5kpryegAmKTpxotBvtyc3QrJbrcYD6Npg3Cyeqy2R91JfhZfM1T1vVe8XrUtaiXLyh9Kkpy8dztzwVPvfvKU",
  "key24": "4mgMmMemNYucL7wShkkVmuzUWgErQe4zfE3TfxSQu2RpremHLeUQn9NWKKXjD9Vvu3aUeCdjZHc11ttPPj4r1h5K",
  "key25": "5y4G8s9ndZDMKjtT79bMzKh1w18uQGuQUMbZytxyMLTc9ZYpuygasrieUKXtuQe2oKu54eB67sCvbgWeDtKUG8rE",
  "key26": "HHEveEafZDwZoyxK5KSQateDG6k2kh2XnQLK34RQSwr2qahTqfH63Am11tf8qZ2JyoMNjxjLeBa5ykCrmA4Nq27",
  "key27": "2T8NueSJ3DH5EFuqw4josRYWK1wm5NrPeUYSdZrkrUesX7EHzYfyFaK1RUGUBejM5apbQZvYNBs1wzmPtm7u9auj",
  "key28": "3V3gFbkiD84wd9rsFLx5i45DBgFJ42pJ6wCe5CUxgFXx7uGVpfVS97BDdzLFqKgZigvZ93i5vMaqdhgvTtrMNY3N",
  "key29": "kGiWU8nZuwkTwAYp3JkxmbZr6XL81urw44NX1zowTHzJNTa9Y6sLGFaBJ8wvT7ikvCzSTFHVmXrSaRmHLUvSj3c",
  "key30": "3q5JYvHW9j4FbzLxUbf3oCWGeiRMhL7vT8Vu31mA2EXh8HNYuC2q237hM6UwWFsLaYLTQFZcZ1SLR2DSmgGEGUwR",
  "key31": "4Ajy8DY1XZiZ9r2n1CkSEnAa5chRk9NRGpfw5J754dgH6BbaN8mvhsh6DaEuuXMBkSvF8DcDiEaC5STyTNMR6LHE",
  "key32": "AbwvvnAarHFMke1WiFwgiRVz8u6ML4yhHkCYDMKQatY4pe2ty8EMV1QRPa7emaMjxyeR6Pvk2WXvL2fig4FPCRx",
  "key33": "MuC8WPkwPrgYhYA1EwzBPd5nU99fCeiYTFtcX5KN7K1qtqcwEzBizrqSuXJ9kQ65RMPeDJYvDYphMwXicVMquRX",
  "key34": "36fx6NrFtM4udyhUpjpcbhD5xAxExNH7E6SBPmubMMi7rtCdVSPgJ7s2H8CoBUmhtTrtnKSUsthywAon9nwZoypm",
  "key35": "66jifdtmRXgQf8UAsCxn2kGDi4dZZt8pEr2JHPs83hBiFG3aY3YVQWYJjVKNermtz39BTnGhC23Ex9qKNd8inByk",
  "key36": "2pdxuvsSG3yNKGp8pUdvrzvhe6brCUndAxmwJbmPUiPchdkGrMNwYXT4pXY53JZCX8peo96HbMDJgYCChdUtWZhn"
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
