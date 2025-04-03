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
    "67xAshVuZAg1dWg2kLH7NrwaZnN23nJfqPp6GNYAKqFkkRJamrs5q7LDfJvhdYeEJv7qbcj7QZNUtofMPXrx84U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YT8xcVz78wxaPq2p1R3YCG3gyHAp8EGyD5zQ6XZPa3Y1kxDV3rtHEPYSwqan2EUn9YUdEqpgnz8FALD29QFnWXr",
  "key1": "2JSLJUw7LAn7EJ8E2xxQXHUm5FGF47TpD2BacfdjAuVr99DSuMTAqycVL1sB2MgsxGGqxPTbUwuWzaygn4iAiKfZ",
  "key2": "hxmXUxiQLupqFvg33kQz2BKPUcb3JCuvMz3x3CDYPRk1kxCzeqAMvyZU5vgoEuaDuJzwokxTMcjZcVwDPU5k7oV",
  "key3": "p4zpsobJgw2TfVtanPxn1hTcges1pwKEFmwzC2c4xXnjZ9ADK8w9Po1pDQnr5AAQ46hxceqB1XW3GVw9z3dvB21",
  "key4": "5HXYbsDZuNQAy6bBzVREdsDYcKMzHiA8v1QJ62tZ7bTSByKKQ9g3onsZbMBWD3Hg1n6WpkvAqddCHRd9dBQbVBBc",
  "key5": "vXw9Hr9HszHL3sBen1ZyYgP2pbNErZYWGAmUNv8CdXzYFiXhfMKSnBJtSWaj6wAWAzuPPtUyFqkbzNjs7p7oCXm",
  "key6": "i5G7ALv7ssogkip3Se9dsBfc8Fw9QMDRq7YvW6A9zm5YUyVgpVRivSCDx36BSfcuiWZZQvTBbFRhPTRSm7myXVd",
  "key7": "3qw3bvHB2Y5HPnEXcRWPxm8UFrRHN1BcjGupW2G311TTwwWGGFqT6oQoogkdU9icdCQLtc3aN5bH8N4yGEcU1dqn",
  "key8": "4EG4Rc3KSroFogz21qyDbkQBgpfZvtEpy1rarysphVeC5DrzntwNv7bt5FARgmCoBtJUWCSYkpaXvam9barXGVkh",
  "key9": "W4p7xUR7cpXBDskHkUqaDe5HyoLo9TjA29uphveGxMp1hXF5LQFMPEUZJ9NtXRk3P5t8dW8hZiGoskftfVLYyd2",
  "key10": "37Ydow9xkLvuNipRP3ffMCtHDpHTEK1goDJgQUocoiGQ7VE36rtMroZzSiVpdUgbhRMEpEMrkk6wLwBT3TVkATbL",
  "key11": "2e5CS7kCi5HAaBuThutUoT6VNK3AXzS9Yq8nEWJpUnXVkA4iwk6VybfPeSTFS4PyQGvWwyY7sR26HTDP98tU4mxV",
  "key12": "3Q73sASvduGEkgxt2qky4tqDHPufKv1LuD3i3vUnPDUHp1mTT13YWSeKukMwhkUU9f1Rf4efq6Yoi62QfEwDMC5Z",
  "key13": "HmsSjTzNdqwMVWmqayoPrjvQpDodvWnyCUz2F8ViJtBJYV7gTddWF1ovq9S2Pd4cbbd3pZJDK8bqcYTRCAe5oX4",
  "key14": "3yuAA3Zz8arFBwd3DSmb8Hhdya83cwqwKAYuRZ4M9ZaTNRKGLGSizHexgpA2vCsEouV61QrjPM8m2uKonsEpdDTn",
  "key15": "FbrX915wdvybdM56FgsXd8eLFfvJ2pXqJYXKSzYoQT1BdnvXz1u2suvuyxffr5d6VJzqGHwiRe5kJYXQzFLcsqX",
  "key16": "5szzXh9sJXxUvwxwGPqXpBpWzLc9eE5uunhSwwFN3T2EYHeBbNrVHV59Tb9BYV3s7LqMPKqqK1v6K9NzdeqCZ8wG",
  "key17": "3iSRfpAszztgjfWXizj4o3RtM9a12WK1Sf4VNAFN7eTeSrj915zY72kuqDixfv3HhFonJvfNN2aXJDMpvjjj8Nq4",
  "key18": "FQ2N2652QxqJJuaf77deMD9BvrciTWRd2n7beC6MfJFQt3NwdHWffCHjJTU4kauSU7MiTMhDAsgnZeZ7Yzhj3cv",
  "key19": "61bRegG8TCTu78TDfYXAagV75EbfpwKLp8y4ocwfZsBFMFSRsG4Tp4pkUmB4UsjyeSN4FTCrxe3Mj3Ahwn3GsX7Y",
  "key20": "NyRnot7xst3q1gtcJGdLAZc5YuzvfrM9H2AQJNH4Cyy1KZjP81WgqRDP8wMTBe8KiMbwLTqDmrBrxQjeGmHxZFs",
  "key21": "5wLiyTpTq3ui6LsUanfwSzztV5Qe7q6x7bT2hrxcaP8jBjKKp5iKMNdP26mmPjyc4euYeGRecE8qtcon3GrgqAyX",
  "key22": "5Qv693HCDdrXHeKej7RaU2fRjN57kqKpaWLMXAkBNynvLdvrngx4mW1QprLimgqHawHu6dj1TXYZuHc1HJnBSbiw",
  "key23": "4AZmL2QS2CM3w4KyaZEnXKyEZXLqFKNWszAVvPTauTTwFYEnrFX4AVbyxuddgHcPQ38ZL5ALfU1PuEfksvBiimTd",
  "key24": "2ZyUtNMMdYQvLgTxYJxWNT7aXSkfxgSZ2hWmG9vM8pGT9EoQUgys2Wh3Q2eCKXYv6WtBGwhGH5UThEg33eLbyeAo",
  "key25": "UADrkFVQvKf9Cjun2BQiKsgGNG5RxnQryVF74if8owTEsRfe82KdAAKGTwbwWrdg2F4XW4XtCHU9j1fZR9rwW15",
  "key26": "5S1cP7H8UD2KwoREAGHb2XcK3ntYSFgqKiAXpCzFgtYKByfS9MqFN5xzLsEiZ5xi5oKoZ4QDTS4g4T8wtvut7DFz",
  "key27": "21MjJJt5vvYLpdDhSLUjHF6bfvGujjUDWqsJAWDyr2diudrtRU2WV9pjfyAMwj5SUNfZ6PTSzhJLMCafr69Da93M",
  "key28": "5TxYiXu3B8zezVWRpALjzn8NRDvyWA9yUsCDJq2FJqyfuSF5HxYRpcBgctFdzQCJuCo2hV9Pq6PWDK6VsTCuN2wn",
  "key29": "LyKLj7BRw1wwRdLTpseBAiioRT9LxQ5in3V6vdZjhJQGp4awbCzxgV7AtxabAZuiKBp6NjXXPbfS1RKkisd8oBC",
  "key30": "2ZWYgikE5VHHjV2j51MEXKVQ8uZUJhFVvV4JgXQi1nCgbZ1kPfPJLxWMEUzsbDaBqEctGzjdQLBHkmXhTqxk2JsL",
  "key31": "3sc3wWxGcMoEiT8pwRcxxF8qQnirAHKRTCC1tjuyApMFwMNHRq3t8U52AKCUs78Lj5A8WSF6ckLnTyvcxQ1ygRmX",
  "key32": "5qYjpUtzSBwNSi1FjKtdcgkx9CShw5XoNUUf7Hc3Ysm7F756NNS7iQq3QB4ZaUjTHeQj3zft9fKrZQqn4rd3CwV6",
  "key33": "4Dv9DaSwGJtbxvBDiEMRftisn67vBop4Xh1HsRUCFpN1pscSLWUzL9RVbFYLck7jS8fy5CHN7fxwa47XDFxtb9h9",
  "key34": "26oqwAMe7WQtaLgNUpDSWcmi5VGayocZUqWceuSi4RErm7vh5r1crspztvLXCij5QfeZThEwf6hwMVtD1s1mF4sc",
  "key35": "3hrjwDy4vv1kkYFPzcRXc21VQvmv3Xj3DkuaRTMYtXmXwbqWVbrHp1pBemGeXASn3GxGk96g6Kh3U9X6dDA83jXb",
  "key36": "27EwAuEnUYdnWouqJEs43jDd988STFL8s9LSKguDNXqFAcAK2pZGsZKHC2LryEk5mAQ3VvqwEzgq4G5knsTbrau6",
  "key37": "362uCbFVn9q67AyEskmJW8YSajuuWLFSLsiA7BaHADTVzaZGJ1MxREJzivVcmakyhsBcxrTsNuFEssVMfvE1uDQd",
  "key38": "5RKiVaG8HpxzSZ7UUkwhsuRkfCScY31m4WLNYEmA2cw2vGCSi3j3deivXeio89dNXhZ36AbWXzAJyBoRWGFmfv9F",
  "key39": "3WMJuVqEXs29UzcnW1dgt7hVV9DJC7kpa6visnhsRaEioR6bp2RkZBWY5rqjJQqRigLLBMvEhaZkVxGvv8MhsDes",
  "key40": "5XaxxdYEYN4MtJTnuji1Jon5t3zRQUGVRBMnDmjppSjr3TgKBiv6GWi4jJG5t3Re2hJwVQf84tp5ETrZEPrxHhAm",
  "key41": "2VehZSRByRfpyF6btCpT263dUGboyQzCaGvkEPpBhJaAdYLzG571mTXiaLv7qjVvMNg3qDsBn1outQRXdzqCrxbL",
  "key42": "31Ev4veDeqztTtjXbJwFy7LSqZYRaiBoHyRsdnsh7QThqJBvMrccFWooJoFgyZGKpmi4L7qQfpzj1uFUbfemzybs",
  "key43": "3kjoGTgN8e4WNcWLRo2zhSZgUo6TRPhYPbrdwrhQBHEyyxTRvK44V4NSn1fjgkAnUF5tLYm8Pb4GvKDkq6ndcjCy",
  "key44": "3mwkNhdDGdtTK7asRAcHxMk8A8XpSG4kiy8GAC85gPmZAPzGz4t9cyFEioT4TfkkNB6jpR1cPjFuUF2e7nVLBnGb",
  "key45": "45HSgWjxddi2BGhreV2bGv3rJvxuXuhp54SiWBUYqRtYA75Cv53vshzaqy2nJeQy3xs9K8wBtTGSEUHVxtterjxh"
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
