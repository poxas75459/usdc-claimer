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
    "5aP8f7fTWunZ4rbmZGirsy6Xseuko7NxkkP7XG8NFJsSUe7MPP9aNGciK3T8JeQ9W2MDDzZwCMZEpHwptY2i3xp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8T9v3aQSpwokjZM1zjUKCb8hp4Ga7Q2DgFugkpTdkiy8T5oDuykXyzfrgiQRfQXLe5KSZjVAUTxaqRpXYqJ1wCj",
  "key1": "3U7fiHhBi2wTS2iJguN3cXJ7z3R4yZGKEDTEaH5MJD2xKuSG1TzrEg8h5ezshtBurg8cPeAptyBFojiuZfibPgWa",
  "key2": "3ihLp8gq3abVGFFxc7z7GvBmEYHuPvLYEaQTY1svHnFSpf2N1M7hanyWiLbTVHkXapj4ctjocKUthmiBznMdiefQ",
  "key3": "28QfZtXGgYhTbFb9v8hsMi1xqW1xPaiuxohbgWUo3ZEmanq4QG6soNXAFW6yv6RVYStMtjgtTo879eP9k4NVM47h",
  "key4": "5qFsGtHbgiP4XswKgKKSEQZ89Gnh4ojBCJ2aNaQqh2bP2yjQNGiahTDRU7GgjYuJZwrc5dfZc1EXqH4bPwburGi9",
  "key5": "25hjjS8LDcR6pXdr1WvoMkPPPW4aofRRTCWU36VfVvbzQBw1fEyJztwxjpUe7vz6JjqXdA3pWzjLZm8nfWMNRpLD",
  "key6": "2Jce6ArtJM5H9uo8JSnZ7WVSqdz4A4zwLpDXjDpJxmpJDHzaFuJcZGqhbi2H2gDPxghJsaLcjjHifWyvTEjLojhx",
  "key7": "cgZxRqRHTs6GrJobwfNGMKBRU5XFoPx1AXUhH6mbcEYJgxxyBuSuZi8zrx8Ziwosw7SgyYN6z2jpY7xTxzscKeV",
  "key8": "5Rj9wuwWP2LiH2fFmLSUz5QbC2DYTuDbhdXU1zooq7XcwSBbprJnhEEyJmqHzJMUb8rHZHHfDzdFgucePuK3Ds7z",
  "key9": "bTVRXFjY9MxnA18AhBHifo7heVC5Xe9FEx23eRg8beHrfcxN8woQqKc6Y1dtNoGACSX92uB4PsrFAR1YzKo1PPM",
  "key10": "49BMmvVTaPoEB3WBMjSi1iWChkvyzWH22Jh3XCXoWwMd41HkNqhDT4k14WyC62HzPyGnFVayeo4XG3SkYBPAGouz",
  "key11": "3dBZAwTMfjFAVdLYsieBTB14M5Xhm4TQLwHFSkhFXgBdNcL4JLgZnnVEuwnP69LZDSjSewnpd7PhDSUSUbhWqRpp",
  "key12": "4Vc1cYKT9kdZ52YzMYUCAAaARg1KZmLN2rLhtquAzoRikh3fjcg7exPwT3hc6r5RDbcXhU6bFHqPycJKNTt3Ks4n",
  "key13": "2AGzgVmRvzzbgbdnxq4FwnpuZcgTs83Z6tbwajzCgEoSkgtRGpZw587Au3oMSxubprgx3jUqCyBrUXA5LUuVmx7X",
  "key14": "4rzStNNN2jfQBkhUCnq7NfPJAQ5LTnFEshVJzHg1mWwnwYKqkXLe9N1jeqF1tbnNTwGmnNxzJSkbzy2QmPsEBxJ8",
  "key15": "5oNBiRi9ETFu8rVkPdtdJPhV9TyCeoqxMYpJ1FFkchxgmnhqyMwRXc76e7mR3HSVV8nWEZhHyNbx5sSKinEQk4Nn",
  "key16": "5u7qf94jGwMLiErR7G6MzeJcNkagmdoG14ZJ9sGnehcWRrg94m6mhdySQwQberq2dTu7YJaq3ykaBqpbwRbgoUB1",
  "key17": "3HSTtz6HCywCxpzLLh2DoXZq2kbixiSp6K7vCtEj9At9mdiMndYatvukUywJkYq8LNixaB4BTDGQUvXMFvhe17G3",
  "key18": "29uSLnxRYmxri11Pm8F4wNXhPDZxgxhCkHr8uPQkQUbogoowDXwGPfkXPvYgo8xeVhkMDD3t37ES7ruSTMJZpYT2",
  "key19": "3eXWL5xE8HxiBn2P6HjBzSMUq6PQ8XR2BuGh6MEp7Acxmj17hCKMVZp12VLi3Uyzse5wQ1ME55FQ4f6eKrKozPU5",
  "key20": "4nzwyzDd1jNspiGFaHUwyZ4g68dMQtJkj8mmFFu8cTeM5ujJPn1xRGuGodckBvG5J1kx8rixazWaRLH5A4FNZ1Bc",
  "key21": "5YsufHpm6L8c8oSjMdFzRPLAqYGnRgSw9SKGawdPanfa3sTEs9LmUd4CMthmm8V23AF6NhgrZpEku5bo16Apj9HS",
  "key22": "3W5ujqxFuecZbvDycu9h1k25jwsunu8Zcrtd3adUEAABxiP7xSNJ6bmFn8mHi4WxcG2Rw2U5magnGbUsybB2DcpJ",
  "key23": "2vbxnTWuNL6vwaAhod5HthezzQtgJur5v4sq8aRtminxKi3bAXEfSBKoAAoa1V6XeSM1SQuxm1fXg3or1uw9yMri",
  "key24": "5kK3QDgL3WVVsRUNiKm7pmvrne72QwKEZEHrNZQkPKy2spDFVzU6R952DECRNZhZC4UtFe43JPPyrsCsBqCqJuWy",
  "key25": "4hXWYBmS6S8ApY4bF4zmDitQozMGhUrPty1CR5V8PR7mXkhc5yjvfzGE2VhuT8JgTJW94fpeCUGku7HVkcGFH6jk",
  "key26": "4iq1bPVHDzpMYojMXeDT2bmbsNht9phWTiUK7wvYrZZguZLrk3xTDnXdmstiM4fnynazUfA1g9NUmvpQfCD15zDP",
  "key27": "5YWD4oE94sht7YkeykRT2VgHef7bPvtwhQKx6PmXfJw6Kzru7buhdhzHn2QH9kYyt6mMTsC5wcUZXnxALqhkwTMC",
  "key28": "5b8NyqWhQV96DKXr7ddsfQJkN55PFy6rNar12LWSQBf1Bq2s4KxVmwaxc3PBGWMytaDZgwHjSB5gfTdfsLrw2vmb",
  "key29": "64SNaVJFWgGuG4DhCrjZ2nwgFG4XtxaMJe5Mn9PixTyXp8zwBTVTQT7gKGnPWMwSucn2EzTfAMwCnkAtq6KxWLX4",
  "key30": "34ziXjo3v19BuUarETKRkxeTZgLFUwHv8wQkm8EJC11GJSWYdvZm8p5AV6cr9QQBFQRSkcnJnwBSA1ymKM6XbdcC",
  "key31": "5K8Lxk737TKW2ZrmnDXHuWSKwJcfsW2vdyYr7wVguQsQQToMaejU9r9N2vkPZdnu33d832yFH1WWKTn82A7q3HTA",
  "key32": "2zombeURRkwEEKy2Aiye24i86dAaEBkPLU3yzcYuqUL2jF7qxKgoaJUB4ijSbddUN7Q2JSGkNwzF8SjCckwNHB7p",
  "key33": "5Dt2gkpeYc5KibeWojQ6Qq5eSoVtX42y37a6FxasBixvSXEkKSDBQ8WfQ6YnUhYhobrj8T6sPpxwU4wgwwJFVAJu",
  "key34": "5Do8FtvNm379xLRracZcsJK7nhDzyYWxrYjzd373N6yvLnNmWZgFTxrRzuqkCvFy4NAnDmZ7EwyDSUqRj6Nv3hSM",
  "key35": "5C538DyUN8H5zn8S2D5JydzVXz3rQ5LUzD7zYzX4WhJk2FQ57zxjKYj1KQZw3YGa3ETnPYpmq2ChM9jGyeB1PQJG",
  "key36": "4kFYv5jvKZt9VsRBLKZAvpeT6C6dBtJmNFy9nwUCmKF2UWqHfo8F9ENSb7BSnkU9MDTyqm623GMtLWvikj6ap9Sq",
  "key37": "22yfUvsLhRpAGUbHsspForyNAGRceyptfwcFUq5g1bbF8LKuLN6vywkzqAkefA1eQjsoGtmGZTdmxm4UnsBEXdRb",
  "key38": "2W1a7hxaMXm6ZAJebspqFwmg7zM4gL6F5kCfmwm6ZcjoAzMGiAv1AkyDC8DSQRoFsPk2cgXthifJo6kLx4bYdfkG",
  "key39": "4AKircszqWQPucS8PXfWT5159SQdAbg6RwVc1HGj3UtGs4HGX43xbCntguKSmSpEfrTcBeHsxSJRWYyCGGXkWQXC"
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
