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
    "4gaFMq44GJuTh5i5YucHrSkuQPbmrz5BGjqZyuiXt9m94zmEGTMT71Q5p7pRkDATSdhit4PVaxbNoM8ta3aU9xBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGfZFec2gFsEZAzG65UP3o88X2kQguZ8otwdM67k4BXHVUr5VrAbHKWa9Vi6zWjWyq8z1Dd9eYMWRi1z4Yfdmhm",
  "key1": "5rUWidPSt41iZUFgdHbNGcKNFG9PwQLVAZTeaBxDDU3NpQixVb29vr8gjA1UFjmHHtKpkXAVun3ZrQkMrJbBaKe2",
  "key2": "2xonTFBJBbQouMnqBYLxk1ha8pREsoByB5zydQavF4P77zySLc3dg6j6jkyJPuVCDdd2hXGyapmfUXyndxMzo2JJ",
  "key3": "3KEqR4dp2vg8Y5HZDXQ7jZhuzH3v92tt6PoM6SALNuvTzbKjAfoqVUyCEzMqVoxdzWrFkUAoec79HZVU8qHc7Jn3",
  "key4": "4rxje8RWXJAyobDSvUQG54wWLpULutC2cZEUdnNcyPpnir37m3EiinN1VZE7crXaH676kLnxwwXJUeUfxotAaRu2",
  "key5": "3ESSasy5SjF7gefKE1J2ezop13y5Gw8cR26nihwAuSPwRMQ9Kc1pXKK8uHmmNaZXbrYyZKZ2CFzoBgqCjGMLzQWL",
  "key6": "3Nxd2YQLzJX5Mexdyg7tVpaVYWfb8yCexQrFki2GrT5GLChUnBKXtYzFThcZzkL8aiYET8hp7thgVdxa9g21qJzX",
  "key7": "ZK84JrCcP8VHc5b1MU4ayAELJRwuHW3ewwWnUS7ShHHBfLGxWmxq3Ht721yJhnZptS6A5kDExSAopbtpGgrYD2u",
  "key8": "32CQx4cWUqLs2A8NKJkUibPYsnoovc9u3AhW79WnhSrFdSvuymSiND7eWLhRtZNswuacetJv7D6Rvtu3k4cGdTE5",
  "key9": "4QKwMDMK7557td72GMX5r9EnW5jgE8t7H6njkq4N34rM2v21X8ifgNnDVQ1Sj3A4mZSCyREQGXFuyoK1FtU9Rq6L",
  "key10": "5TbS4xJSAnSwTb2YdoC5139T9Fp3jn4nFykUukN51v5c7iFJqRDdSdzdL7yrramqtDapd5m1aShQv7gs9hkgKYGE",
  "key11": "3Efyws1NkfGFLdpWWKZuvSmY6CqsxivY3tKhGam9PrzL1eC6Y92CGDD2YhiKe6LxSR8UxFiXGATi4sus2cS1YmnT",
  "key12": "3ZUkAKsXGGJiuxac7szNeqtyq3rRJuVnMLqpGY2bJbFJwwbiQ3VEVhkuimAwuAmYQePSCKE1P8wzcY4XFNXatJjA",
  "key13": "5bv6px4rWyT5eDGtRekcw4QpZdbHkNEyrf19rTqLyAcL7ArT4UZR9dfCQfGqxdPHeAtQYrzKp1uCfoRGMTYcXUwD",
  "key14": "2RMKkNr8Q77d69njTyVjfECDnPaUBVk3u9zC34cmQE58jdkHu3DT16Pjgy6qpKNZiQxa3UYtffc3g1yfEyUs5XyG",
  "key15": "2RuawuhJq97U5TeE8U42LRJHBX45rmAtFgLwzqqiP1fTCr59mYkfuL3qABkdxDoJE4VXJCiUiY139dr19HaFjrBp",
  "key16": "31DDNamkmQ9dXEfKj9CJw7Sijxgp861evu11xz2i91HLkZjWggSxDN6nS8d7g1LaEFpkMips4AL5W36PNB1To7ei",
  "key17": "4iCnBwAMYX9uKHmcJJdCE4LiiJ1fLYjWn5P79HawaZQ8LYv4NCnQqwdB77CFXQQYEJ3nk89f7K7xbuHfdDMAebxF",
  "key18": "64ZjsiBhHEbf5XzjejmA47aGwZ3FwQMGpmHh1gaMaruGFstJrX8ywRpFpX8gxkAet2WWfbjVuoH2n86ZPYvTxbcm",
  "key19": "3L2JT6wtoeXETsHJhHjQbu5pDwouGcUdvfjNDVgUPcW5TkXgbZxHHpnSLeKAAMotBXQLpNWjUdaKcsjGYGFJ7UtQ",
  "key20": "3XyLfcbKZ7pFouw6xM8SjB26sBsmPy4nyBD4doXtmBREWHEbDUqAgtrgEo3bUNKru6GbcRwsmmsR5E7k1t2xMHvm",
  "key21": "4RpCzwP39HgPjL2E95F4u3LQpXhqB52LRZBkPmNbcgNaGWQrYFBRp6rJMtGw9MSMQTQKNGBF765tDR5GkNvudEbZ",
  "key22": "4nBfU293D5msjv19ZmCgAvKeZDzsrTsSF3W4TJNo47nQM2BTcrcwDK1HMCvPsBncEMCrYoayqK35Fe8pViDM2E63",
  "key23": "ksPcNpeECWqpZkkjyGBygV1E3Uzuzt2Uw8AghLZ5qAQKtAeLPCECoMkyuvj8BSYTcdpE7oVoBxyydD2HzTNSrB8",
  "key24": "PpsE9AXSvBHZ9MUuanYuE5gETvV4AUioDDLh3EgsH8DitQcr6aUjCrtSJ8NkbQHYWoxAyww2p31uZeHDYjXg2EL",
  "key25": "uyK746MgBS9pwSCqRC9GbMq5phTpViYN886Ts6mRzevqdXPbpWxPF1fWdn8BtFWGWtsh4KUGDiwbAW2p6BNvNQU",
  "key26": "5DN5vQw1xxVysarCRxqCXHPj4tBB3DodnTv8kEhScqvSZk9wzg5YNkxkfjyqfhgwbgpoqDNLXFxkZWSDfhikBh6q",
  "key27": "x7DyHSreioWe1Rho5i5sqZZvhEEPvdpvZn24cPqqrcRBXrbkboCoE3b6dgp5qGRoDWKXQuh8sb7nn9SzhteRDES",
  "key28": "3cksXq5y9LztieRFd6PHoy7pkwC7UHj2rwtXVWKn8tQcTJTwwLUwSzfB4pnjr64HY12QpnC5ro9oJVQKG7jB5L2W",
  "key29": "2RJcYUN8hxWtSZKCKcdYZCk2GtkLuNZ1c5DEXz1PQmnFiD3udkxfki81QDukHsTF6HVarAuNPGDa2wbtsPYPKxT5",
  "key30": "tGt4eQvLUxvAtVxfL8a29FSaLi43dFGwqYsspXFSsByZa5mBFsPivd4zjnn4k9C4NGNksepVgCHLUPDVrp1h9qS",
  "key31": "3k4EC2UGatcrX5bVokv1DWdvFNrZ1iNfFp5LWmG3ef6J26FSZsJyc3cX9j57RjZxM4Z5sixVSiwwUP69SS98FbUi",
  "key32": "44pBkRCD8dC9MHtmxp5mhozcFhKuMqeFpeXxSbhzb1KDjUv32XgtaQdvXSZCm8jyXwCQaRJR8qPypz1aMdtBBgYC",
  "key33": "4YzL8RnjVeStNvHMTTHVMvnNWktCsSK4sJVzi15Xntwp5BBJnJstg4FWx2sjJDuKC6GE6MwBJfmFa9xhpRHjHjRt",
  "key34": "2iWAtDyetedZMuNHfaaJT1sqC3Rk15qoNNSwHgpg3MuR94d5Pn17EuRPDkp28mP6fCBrXXoyAHmE4iG2dbMdEjkF",
  "key35": "39eQJSTTkBDprX8GfEKc2Gz2pEKj1J2GMrxg9H9dpUCCur5Mj2qW1rPzheJkTseuAjviujLVNXhWrvbreboQvwfM",
  "key36": "2Z6EiTcUvbdxHMsDsZoJGBPzio2vd3c4AFGsAUaogxoRVC4a1mWEcq9rRQQZTfUigsGnN2dhDf25Bo53rhSUTT7i",
  "key37": "33VH3Wz2ceh8GaKP2XkHvwHmF9QJSLZ5SxjgHMz15rHWz8M33z1ALrfDUatEfwL56iTgTZmqSxZ4eisqZ3wQgNZm",
  "key38": "mH2U7AS7M8KHuVC5mHJYArARTisKa6pvYLg3NAqfvo8WEYPfPPcddwzMPqdxBYTwUhvW1ZAy5obM9AK719xGtpt",
  "key39": "4yhGazqFQuEFKxdhg9LcZ5wLuZjgu6ZeHhb7YUVFYnc2DRRxunUPiPCCDu1MwoLNEnuYAHp7tbs9pqS5G7G7q5bo",
  "key40": "ifbrVZEnAcsauWqLx33Yc8um78HPMLqYtyXPysJjP6LjtFfcNYmydiGFW4jffucPgU5ET3gpD1JpfKwDqaLhv4b",
  "key41": "WPa2AZGYgroZfajqrg7Aja9YuEr4Gbh9AVz3Z5C5y95unCcpX2LXsqCStsy7gPdcVdM885ZVbUiPiZ4K75NAyDt",
  "key42": "49C2xkFLGSe51XW88S7KgQZt65wehHkCYb3YhSfRvygn7HnB54JM1Zwvbmw87B3RDKpcFjBZLynqA215xwSRX6bZ",
  "key43": "5U2E6oQ1Qh9KYnC938jE2jYB5T2fan9nqR1JPMknKiwpx8uCfkJ3a2XddLzNsSJL2qZktcc5CEkndSdH8gLWTeUU",
  "key44": "4zhNQsqX8xNiLYaovmsQ5WiePVNhhDBfu8LATzQ7BErcm4Dr4JjBjrTapuRFLK5GgAtxfK4nkQ7zGnwhbzqMkNgE",
  "key45": "2XExKLbCn8HzNiXiPhTjK3JsG8wvsffDYavPBD7rSK1NCprt6HJMGG9YQnQaJ9C2wuiRTys6VCtYp5hKaqBy8Tjr",
  "key46": "3cvhfg6xUbUP9kog2E5fGQTW3heV2ZgvduEhDhS3urf3LGh5oMSfYgRatiAeRShLoiGTAUUAbdceqGzWvmpkJgFK"
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
