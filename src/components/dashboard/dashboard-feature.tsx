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
    "4kz32V7AsMP6RvTxFsMyE8YNeiSAwH4Le9hZh3Y16kcZkDgaB3jt2h9zun5KzNCtWFHLQiQS4abHqFStxeqhMEcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFpo6J6paMzd3GzCRNrhmFkJ7aTqk2HMp8MPhgyLX9H4w4K4XWQFi4SgxeXAoj6XuqHtyMA7unLVZaeDERzoEJY",
  "key1": "4qcaPZ46SuSwQNR8qoMMXxirprfigoKejoPfkr1RPpCvi6TCum4cZ7Tnh7k9FqX3b6fqcnWo7gEe6mcQgqGyyoZi",
  "key2": "vssLRHGn8UGwLve31tEMrzGvZkxRrYMSE1MaxknBp7KWXw9JfjWtfo3Muvu33c1RUp9Bmps2CSrcS6MdWqQPAjG",
  "key3": "4e1vfATUUv77NL9FUMGDVVMy8fijjoWNY7fvbUeVbedf6pLVuoUAsJvN7Bzqa9zEzDPtnZRaUjhg6BG84pBwMUR1",
  "key4": "5XMkHogdsFc5uq3BemR9M7HLJFm5coUT6dsi1qjucSn9ES5rqqVxjos7eL1AdeuqSQsHw8WcrkwU3EaKXzUozqg9",
  "key5": "pNwmZH1oEVoPsG77AuZfUAZ2Vqe5JuvnJsMontvr6QMrc3gX7TkwqmGFZCriKU6xYX5KJrbtUVDRSw3jsiU4U4m",
  "key6": "2o5YiqZxuF1HeWqM5L2kqBXjBCvYH6Qje3xuWKdo1zficr884oLqu57gK3HAsUuGeZgW3RRSpC64wvvGgRsSMqrh",
  "key7": "y52B1Hm2kzQpVfCA66rfgrXecf44hvJYoDe99emHqk9DAwJwqqiAJvJgv3Vzk8uc6nNz5wiPAKU7EoyLb7x8ksX",
  "key8": "1YFws5XYgvRGoQaeTM1aqwxN5D5uXSS6vXAsccgVAhd6UCTGCkC4pa6WBjWtMHYK3DEuPbMrjBn9vRGqTDpoAuy",
  "key9": "GCnFrfvJaKyReZHmEim4RMq4r7yBVqBGAJBVuie9EEt6GAtWTXoxfy76SaKdeSzXmwkKiwV2XEQAHEbsZRxtVXi",
  "key10": "3MaCqYMrxnEuQVuzdKDyTEQpqamnS29p4Fv8p8UyF64rQgg5RF9fAgEPjVBScs3rr7BtPhQFhrxEeWFCGt3jyspq",
  "key11": "2fzBg2mCBzgW2sZgq4pc6EQpLG58cEG4Vgk2dukNJK4XUTUvzUYyHbybpokfvyx5Pw9v1M7XmSpyhi4gLJfdpx6",
  "key12": "4NmCnmxUszwtXikTfDtVHmaz2yhbuK4kvxdEGGuFqjg1LCBoa6DrQcdRe9zfRczBUwT9qefu9iUSLEFWtK7Egivh",
  "key13": "4KjqPXuVSqywkjtVCsjw16zuB9nAEDUjKYMRp2n5wTokRPqzYCK8q8ewNeWoUZkBYx8GozNwL6YdNgmiLKUc3B8K",
  "key14": "y26b7vQPq438TFZj4fcAgcL6WtCGD62zjTrxzt6H2z9AAYJzcy5ymjNRBCNgwSVvL9bwy3Hd8Rowqygwj8Q5d11",
  "key15": "3gCuWhs1MurC2pSThrBGMiSFqydssBvCs45ju3pZo7NEjFzXukUW3Bdwb8qMPYde5X41r3ho3o7BSjTLEi3iiGgi",
  "key16": "p9w4mMXBV1oqE8JV62F1fCZrBGo5t8BZpQWEHAJoLRUh7AxpGpPGzFHcCBVm1VohYogFxQWaFyqV7oksLpNCnN5",
  "key17": "3gBCEPcLQhQ1Z9FxwmZkU42w99DdDJ9YKr6ghnwnCPRoJHkmT7XpJSsPW1JTUraRfWp2wiaeGwFnSeozZifxridd",
  "key18": "65R5oYDvGdLEP3cBuY6EgU2pHFXVLsiBUvcQuEYkKDT3AtZLqfWWuhfTdNG2ffBtyzrsvKLrKJVR8zdo388vi9pN",
  "key19": "iNsa5xdBC37S73TwDwbKSR1gxPTGV4DHvKXveFtL1pks2eqopdaLW9WthxjBoNV7P3WpkiaWSkExwWG1Hf5cZHj",
  "key20": "4FjvDLjQc4d6UpqeRyqmMCsPcdZVtHRUQWwAAdGMVYsu5k41BgNWP3Q6PQZhc5LJcdLiWT8vdcHFFEUb62NaMu2s",
  "key21": "2bxN3CXMsMFADatXF9HCBfmtH3Pa5dTeE6jVwY1eJe1wtYkBCAwkjbaCzpvRbb7zkqMbTro2FovARXNV9Rda7zLY",
  "key22": "3DCjHGo4fAn68eeZ3zJfVmTdFa51GWw4CX7B3C5zp9H51xFoQWLTHstr6BDha5Y3bkaNzgQwE2sjRMo5rxTHB9Sa",
  "key23": "2Bi9pgAT7iH5ndMnbqNhjXaAvEYaudeFatWuBsCsR3Xwq3KuHD2hKz9E6yatnj6XWBa5PKPPPfQLYg1AWF9KQnaP",
  "key24": "6EUeaqt2xDp9MmB29AF4JGhJQDDSnPW7HZh5S1RLDRy2o86rP3L2ktZDHfZbzepanEkUGieYoPi2MQBpVqkFBQX",
  "key25": "2zvcjVUAXuqva29HgFu4fUvoUiYowfB8aVjb9Tq83pvVMoSDvi8kKXLh8HqEDwmuwjMJjWNaEeqpJpbi3LgKHtLu",
  "key26": "4pjB9CYMKezLU54P4Jkby6tcjGEbeGwJBgahoUZqcvxs6qYDcJGGBoNj62ybKKGJCvkgK3cgxd8fepEfR9UbzgGa",
  "key27": "4DS3MszYtjfd2CiQq1fTgzeuVFy1sJNxxdeNmABYNqMZyNU6RtEZDbY3A9SaS5XxMV2FnJqcjkAMKd28Yg8Jwfzk",
  "key28": "33xmybFTjfv4xZpBsHyGkUezBodu8jwAGEZDSqYA8pNoQENgPUGNm8Te7ZY15fbg7tJp2ZdrSFhmBNLnfHZMjE5F",
  "key29": "5LnJ5dt9MyPsf3atzPz4ZGdoMVp3MQhX9nVwosL2hw6G8rxthxEoCrj57xT9hWvd6VweXHqe7unt25tgLZyFgGcG",
  "key30": "3uwLq4r4e25ez8tCpBQ6cNXCieu3knXHapSpV5fcHofdgzQCYvctcaVwtR1noWfzN57Nup3YK1xY1J27R7jNKsmh",
  "key31": "3gXrwAbByuJKpPukguTwJrXfjr6ndrVTZdUQU1V6iwDjFXsDbEUNiYHZzL4Cmovaw1mrra4QtW89SqNVkTQcpCwn",
  "key32": "5id66o635b3arZnnTTeTGEPEnAvrGtNrtjGRsS5qjkXfbMdtvTB65hUci3P3YD7rVennLbAbNuTA1iooavWdPTQ4",
  "key33": "3w52dzqjZQGPXZ5j1PagKsEhSXZrg4wbYB8dX3vuXkaQ7tTF3B3kSVc7efy8bN4w5WN4vs2SiQwTzFjDG9zUQk3x",
  "key34": "5LS2BrogRaEKRrxe2pFkfACSh6yHcGbKXcKg9eVh9g3LZ2rKWUcr1MX6vsUdLfdFWVEU9dvxR3GZmEiCLSMsbpbf",
  "key35": "66a6LAKefgnkyqwMzp5YpW1To6XhZSGmEeouAiQLPR44p22mxzWsZx9k7k7b49AqxWyTqKyBV3P2Lbq9xAm1u8ds",
  "key36": "43QTQtMaEoQFzW4BTGkvcDsWEp3AJRvY33YcdD8w1X1n4J53vu6LD58n7T9bVQRznZuAhccLRe9equzxj4yGC6Kp",
  "key37": "8TJyQpRGxe3dpJ2dQJUoUiPrhVw8ohj5zbGy5zeaEc5G2AbXMs4hSTzJ7WQkb4NWGnVvTtMbZuu1xvNTd8zjYWQ",
  "key38": "5vs6VY68Vnhun2MGSYvHzLQWk3Xnmm3yD9GMXJ9ryap8dRQe6j18P1vzMjsPtKJivkinisJJ5U66FngXLycsqGap",
  "key39": "5D9DBRBc5qJ6k4LRtALau65UVzfmghWRZD9wUqEtGLL4ZEWaQ5UGyEuM8T8wZouKNk59TiTjeAtfn4qprfJWFPtq",
  "key40": "vZFkhLN1uv5PC2MMGWakMSfiUux5MHmNtKvtzHSE7cFb2osoeFdK4ADiezD2wjdTpvQEinxxQG4aDNmdxMmyMA2",
  "key41": "mGrbF9sWctvuRGNSMDM2dT97J8haQNFwcYew7NGaCFEK3ZPMkH4NFbHZg521hQbntaRD9RL915bVCn59xNouQrC",
  "key42": "2uyHWyv73B4jyeKgh9UxopCvqrNZwVBUSvx87PoVw6ZthFohsb9c1v7FxT7cdGQDhACJpamvRbsiwXhnfvg49EZB",
  "key43": "EbbWS54UKBGPQGZ2nkyozUjdHGGVHNJx52CdB3gqqsaByAPtVhrd8R4tasiVY2LfY6wBb66grCVZyk8iKpcTxyY",
  "key44": "cJ3sZ9ozNMZowX7fJbwHQZGbHCpsSm3xsQGPiMYXTd18bPJDTgBAXP3AzyvKNbyTGNDgggezNfxxQF6145cPN3X",
  "key45": "5zxhVdM4LA4XNuRdv8mVZzkXDK4WRwEqji3yWScPqiekzrogZC2XCs4MjZy5FYJRmuCm1ezrUjQvLPX21WGtjBi7",
  "key46": "58iWviQCVugFcagSYspatr6H1u1AZRTHkLME8peEeePpCCA3Ff2PUpFvc1XpHua72NDGUFj9gmJerzhUVAkqAFow",
  "key47": "3rA4PDQ2pASmnKVYWj9LjDbKMm2KpKnCu9aZ3QJ1AUPYZVxSkcCZjKMzJRdDo7U1rXkPqdFMHeXe9nSctkqVd8E2"
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
