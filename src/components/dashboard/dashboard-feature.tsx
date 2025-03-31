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
    "4L7UGMFXaYMgr9KYtmy3VHTbmNvxsoWK32rKPE4anUPoJKX6y6PRHQCsipoLGR1fTBMvA7ontFKBwyYbnF9QyPye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWgAxsnEHi21egMMsVk71KJhxERVzUn3jBJdbgRxguTTWWMYSC1ySnJWDtTtbGihxkV1xd1P5anzBx2VdHkZMRi",
  "key1": "FSHNvP6k3Q9Z2yFDV5SwetNw96ZWBeKGk9NrqxMN8KDQRp9xNRx9iGHuqWjpSs3njGoqbzKS8F4BryKN4DfeHp1",
  "key2": "DaC4BVQQrS2gvYBxsmJitz3wp6fNN2nWW1q8EjiM3fzv1naHZXTcjpz6QxW2P3dxtLk6Civi32F8C24q8qb31dQ",
  "key3": "28Kunr7pmugBvoTZ9uGVXuaoQDdHGo6RG3jHXTLHbDndvdTRWMwe3EaGWdohUrZaBbKBie1DHuhGgLHykNeJo3Gd",
  "key4": "37d9tDYoxuAA4xMQusr8zPyjgHKxV3Rt2aDrZyShcpntEZZvH18qRrBgXHPpcjqX9Dzve62gmPpP2NFvcvX7D2LL",
  "key5": "2JrNESvaFb2Mstnc259YiuLoBTQsRCJ2dKAX3QdTNzJxWGDgGY55jaKKXCB8J2FoHrxgzfQyXuBhkaqsMWBJ66su",
  "key6": "o9dvmvXQP3CKFqSPc2or3NssxHjGzb2BVu5iCTZBW5FMycSMfVnBMMfwB9tD9u3VANhJputUEp6USB4dpu8rffo",
  "key7": "5LNkdj2xr8dyFzFm8gbYKkN88yNkomhjpktKWzqnwyKeWFGuid2Trb1wp1CHgxf2PiwsLSb9PnFf9cQWDJNQvZLh",
  "key8": "3SBLRjW8DxDVQft8N2omwu4AHx4NiBGk3Fisq1MT5rXwD8LxRES399VGj5xLLe4MycLMZp3tnqyM3AebGa4AL5ZE",
  "key9": "DszRohGsgnEwy62brxGRY4qLQDs51j9sq3qZezQ6kw5CZEZMAGCKCGiHywf4PBYv3FDh5PpjqojQegoprcGeExK",
  "key10": "3zd3QEgFwQMh5c7jWfqjyCV21NGmui4yCcNZY13FJaJUFvV9yk4NC3ynjGoMWKFtv1jUJB7Cm3ovFF6RVRYWPRLA",
  "key11": "H3z32rRYBmrGm7PJDNPuokxHNqnmxPgGXK6GPZr7EwVkvMtJrP7pkvkTR6F3z1Yp3hxFpznAGCFFEcp3KLAMtsC",
  "key12": "5awnx4xVEc4mwyP3yoBpegiFK3Pv4c6BzoZ99EkiHoG8vq4oPS9nA9Too8B2vph3CBMw47nHF684BdqYueqKfSBF",
  "key13": "18mhH5gSLeYYUd5f3zFAAGc5Yg5gQvacvzDFyWocHuvoZ2un4QA2RgaXLmnxFtubcoF4TmxgPdfJ5U6aXJfQ5eD",
  "key14": "3LHMjnXcuxviuarskh69oJxwi6u2mzXZ85nkenbGN5R6ma1n7pYt1TY5RiKrkEFZduNrRhJbiFS8N3RSzU4Lvw6q",
  "key15": "3mqwNdqd1oXyxwh63k1sXMhe4vAxeF4EBXCTeH7oE9dbQvF3Bh2JvCUb4Y91Y4ueJHNu6LB2dB9o9PntPaYXFj5",
  "key16": "61SDfahxn2FU4BTgq87qXBfXSvvEsxCbdivpWRwmnLTbzaaPw5DsnLMSVpuYt6Esvm8rPktaCcdSTjx2Aock29nf",
  "key17": "tMVFGoWiMtthupn13FFu7Pgut8f1hi2WrLzNQhzB2TEAV7UFpxioHdgp7UKHHTjmyw2TyracRvJqvd4bAZdeXwn",
  "key18": "3kchE3mBBAzZCBziwZuwtjecjkZEFqJqaoFhzyQT4j9bEuyEKu3pHxaQbmig7zSP73bedSZ6m5UNqShBrA775Wag",
  "key19": "5SpmtpmNKh2Am6PoKFkMRmobAaTMeroFUt38LTSoVzUpsdPfy27i9DwSS7hSWJts8TJ7cw8TLbLn5ZAUGksnN9VW",
  "key20": "4w11nULbXSNHivYHYhNbKHVyTmncxTHADJonsx4yXzoutFK2b7344stzL3UmW4jm2AhSPAA3E3JUvmzSAB3kxbPz",
  "key21": "4MqyQE3BmLhCn8PLYTi699E81UYHjn9iGiKr1voLUoJf1irSh3SaztAZjR4WAPqUcJEDcwTCgFk2RjAaB6d92Bkg",
  "key22": "2iXepXgR2QgXMPXCWba3Ct8rDeaDn6bnFcf1vzCwSpySfuhhtuGQkAfa4VfxBvnbgQSZYFEDK8fABbeAFnYioABZ",
  "key23": "2xMm5YCPjmx3jkeR6pBLoXKqpTV4mhUKqUtCex9QCyQXso3igcHfpmhtP6itP9Ky3ZS3H1KjSouCcCWc6Dx6aPRh",
  "key24": "v7nkiEshzw8frNJoP9V3qPcpTrTqzTunRZEWdXs3Phg4U3QcgoFvVSZbfdMJJTRf8q42FDxPm5kEnYP5XEJtW9b",
  "key25": "hxxV3DSFgBVHN1hGT9z9iD3x8KjuBAkF6EhheWDWrA6Fqbha3MQDmxFTAiLoJaYh5JTjQ2y2dp9s9oBzxjFQYWK",
  "key26": "2e3MSWps3XjRuTrhLJeRELnWyAjFQVM8VBKazCw34J6vy4rYyAqhj9S3pDJybWWzptuomhFnq6d6mym2zzFCyZjn",
  "key27": "4JjYCge6Qo9EfPee3g4vshvaywFG5xHuHbtpHLmimyWkjo7gkEZE7Djf56PRSfGKKk27WkUsD4i9gJ9YEP7fdQF3",
  "key28": "5h6yTD2KztQjMAcxAzoMcdEnYH88Y4qv3HsbPXDbtDqbptpAzp5X3L98U959B5euRxJ26NDvrUGVRVRU8ASuo2Le",
  "key29": "kPwuGVQq8pkTDdBUzDDQqvQF5rGUdKnsZ7x227xmaMVFv2LgzUJ5S8KxctnmocRoH7HnkrLKm1kRuPU1rdjAEJB",
  "key30": "4CMXrWU4khCYpqbU8mF1E2FyQDXsyR3dbNYgBP5n1jj6kVGUaAFxVCcGMtuB65ipo1ZHtHGRNnTwL28qiAzQP89U",
  "key31": "5fCizFkQSFMofSHcPJNJXedByAh35sCJgKL4x5i4DJYdLxJ13QLWV77qQ8umoPzFq16hSnq9npFiiSWqYz7xh8sr",
  "key32": "tNYHawWsiBiwT2jxr4Az27XxhFbLApVEnVLo81JqZ6XFdU6mUmeyKa5DuMq3Qqk2pC3HmCMKzdNVQNaUnp4aqkm",
  "key33": "3HSyXeYMT1ZwfusYAPFvHNp9mP1P3K2FiTvGunWcKNRZYCkF7ehvNAtqfR5jSjzReZKE8XeJD6werLTRVs4qfsP2",
  "key34": "4zSg2bdyMMK6kQ6wrhwzqmcjSXLN4mJgY8c5SJRceWXn8NqdkCUXpXpDyQfQUoPXWBCfgkNpYx5Bhah6CuEyiZv7",
  "key35": "iLaKUeKWz7WGhgnvX29m26MBboNmcuJSuAkvXKQUscWbdcDgminM4ByWEjaumGaB97HPj7Xhi73YBNautPyDV1F",
  "key36": "hXUxFzUAwntfRTZ3V6Ga5B2jaf2jyTR6HyoVMMGkFJMYGiMJZYTDEYWkCmKLHQLbn61186ibQGzJ9BxJJAM9RdM",
  "key37": "3N3KD4kpsX1rDYBYgvdjV2yDYWNPZ1yWQdYuHr1F3qvWY5EKNJHHaoBGzmVDP2sL5BxcHBfEQ4xoJHNyGv7uSoHp",
  "key38": "4ZXPzG3GvuxpEgTFd9GwZ9cJfqjTaXNZm1zdsKYWNcRNix4LwnWb2dnfAMWfJ4iyCzsBF3PWbXPZWwZc91gXoYL2",
  "key39": "2PuFyzcVJwxKo5jsurLCJzGy1TZRDNaP34uvVRQ2m3wBXP1QWFeay8WropvrueaCdtQuMGdvdcok5JK5QM2ph3fr",
  "key40": "46bDwnTa9cio674D7RpaZctUYiYMP8YTaSenKtLcCTnz3UCdhnGZA6ihGNgvAvcFt6q3D3pzbuQZwUpZowKqTmeb",
  "key41": "3nG3JLJXjLVJ9NQihqnbh9tCS2jx4WbR86eDHJRiUHffnTpUckaXKexUNe1FdwKzUwBk7eAUW4bAKpEpJFwCUazg",
  "key42": "RjYvSRakUzr3fMctw3LdHxugVSMzRgComta3GYcr7QPGFUFBYLAfDk86MnEP46Y6RLsyuUgrD2q6Ct7D3AC67SV",
  "key43": "58D972wmrWMftmRt1N6vMAaFdfGKdHgriTpZX82tK8cQeK1sLYaLR1qttVibCLhcbiQbws7BVDakKfeZv4NnrNuh",
  "key44": "5pXSbzhGKmYphWDuWdNBNyNwCJrpL2JGMC5qvNzMiATdFVTYqVjyet2iaJCEmw1e9cNwQXTpFEEo7gF6TUYPPZd5",
  "key45": "2umuPRne87mBzozeazGxtLKFZsXCMWfnuf8J5aEW7b8F7bXsL6oGMXZKsnjqenMiB8iCLNqziqjc1HH2hda5o9gc",
  "key46": "47uGf9uxm1gi9qdmybbC8NUg6sgjecHw9X2cihr33rZx9YwRUw4jD4qbzUNsZ2E8yxE7AMyKmsdAZetApzsQDSrr",
  "key47": "2yyRm2EDhR3XmdKFenhFYvCywPiinekfqVZqkfm9RJyvkmYawYVggbCEVwQw4jWADxpdHmNRuTSHxjSzJwvLY1fm",
  "key48": "Pf8NAE7ebJi2at5mhUL42p2qHdWVctMS5yXFFwUdbuwkxcvwHtnAZFAzyKxWCiKpoei1mG2nZ3yDGJQbsvehcnC",
  "key49": "61SdznnHxcZ6UhdgbndfQPE6Ho4DHSYUnD47M4YJxHXRVWYBh2SSNkuw3nJg678k5yMbzMTNH51JtBdah2mMrm6S"
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
