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
    "2A9zsHmHoMpDPHJuaWNn8VMX14cdFDCijUzRU6FdJj39Djgk1cdiwTKK1RZ6n8xtNfUkZaZjLZG9b1k5zTvF4rLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MA8Xb8FDbsZpHWuUZcEaJEkDBcTH6mtUT3MNNEeDXbJcCPQwCmjfu4ui2EbhCEDcjEaMSuRfuhMnAxH7brAwdBp",
  "key1": "2mNgMXbERjNkqabyABUT1oD4ntCscbzrTiDTb67mdWipMRDWhhRpbL2YKDpJMRdp7tkSHS4uCTMu2y5EyMVzJmzA",
  "key2": "4cZ4AhX6iMmq6RkA5v1sYEka1hGKYReHohLrmtpn8UKKxw5xB8F17ichaF7d1dr2mCUfFaXy5mrth3VMotTS9E7J",
  "key3": "2CdFfEyFUEmJmCT8t6JnjpCTcKhF4susy783PxCxi63QsLavRcZCi6MiJWayNWbCeQ2EJtm4zEdMMf1g8knbBZ33",
  "key4": "4vEHTvjyhtn8aXkFRCLkWDGF1WC6MBjMcevNE3ugcPrENbYcp4teJAG8fCERKmctgBqBAsPRqYsBo5NUUSkN9HWq",
  "key5": "5apvmWud6n926vzNM8QZXdngTJov9DyBg1QXudA9fppVweUn39JY5XHRB3kb71aoNNUy9WcYM4BUQnvjQcrugGrv",
  "key6": "4h3ozsjKPctNxuj3fKfutuGKirpUfEHRWhNWE7LNEtwyg1kUVur8qwTwM7xgzYNxqqvMsXxooQyEuaHvQrpzZtMo",
  "key7": "4rXDPfvBVU4iPFyU4FYT3uEZEzon43oMznuAVpa4j36qdkUKTQzwKaps9a2UGmgJp3zd3PjYbY1dpFPpE2kKcSKZ",
  "key8": "5qHaY8UbWeuyqq6tzeboQgcxgSPyE19dG6eAmRmrrGP11ZYZNaTESPdQNvKurWBTvYBWnkLPZFRRf72SM6evWZK1",
  "key9": "495LHBMjAwEvD9eVqwrtw87tGxvoXcbZhgkyEAM3ZAPa9zqs77PZtDD7Y6W11254UKYkrdk4xaVHNUTBkHPfp4wW",
  "key10": "2awa7PJNTGxSZBgKZjAGP58iQYe3e8RRn3t7vPa4bsqz2Ex8qr9MgyZbZLYynW7FmxE9cPVTTDsLmqZ6pAP5NSg8",
  "key11": "2VKz7VmLcS7cGwR7XYh1bXiwmWZDCxUHhZneBegqDJqZX269mnHaB84Snuf391NVrd73f7SZJFDbkGN5PXHguiQM",
  "key12": "46EJ3RGpHvnXciUjaG9zf9VzqcmJzkFBd9YPzJwyqYm7v93uSynQxWQBpJGkvty3V1PWMpGGp4YmTmmuyhAvzoYU",
  "key13": "3Zb6fitaBFFsczBBLCRDZobR6dLz2zxfrCwxPs1cmgnjzJSgj5pDMTHt9FdqNFdGcSmX1QhHD2zxdpyKvWMXRzcv",
  "key14": "2S816BStDvBuoKkpyGERyZyAtmPzBbzAKhQDJy9XCWvqbg14KotdZX5VH9RASnckKz3cxJq7NaiA3WzePcMCQUba",
  "key15": "2fPuAwvut1SKCYvE2DxehMA9k1CuiHB9UbRjY4L7vUKAHwHYfpWKvRmyEKxfxsnTPbR96CpwhLjmcqtNxbyYYD3x",
  "key16": "zhTS1aAMPSU4ce3iRMxU8vqSo21hxoBwwa7fdD2MBBj5tSgfCCyjf7x2rBuZ55VUZbmNTM1UH2FquQinAhTPkhw",
  "key17": "31JnJatuLaDwa224QB8rxJU2T4QzEbUbLi1Q8PH9qozbK39GbUBeLtVXE9N3raxppiaoQb2W78Q9YWraicME5LaA",
  "key18": "5BwFJW9QSC9TNEQdaLwjRHus7Wm5PEc9GJxz1xJ3QYUMgMdjRh4rSXCoDVZY9arhopVPNVtzvP8KpQACZr8MPrxe",
  "key19": "52qgWihyZCyJCwfu3RtvGjT3p96PnaHz34J4u1oC7ow5LRznM297BnWtx7Zxw41zCXxbUFp84m9SNxN5471CyNma",
  "key20": "3JvrooKCKWxeQg2FZXf3pvM2MGGa4RWWif5u5MA8p73gvneV3jwNATk3cW7tJCZVjfNj9yG84dGpjdi4eCYunuw4",
  "key21": "2SHkB9BLqiw69v1PsBQDWE9GwXaCso3hYLjMTN7aG6Z2KPrJHSMgJjZzTYnvYbTduiKXNuyqurpkkx9PGaEpxz2",
  "key22": "zyhPuPzqNvQnAEXffuBiEuDDW3Lzg2MaWnyhHSySptnbirgoBiuUMgX3YiupSZE5n52DTos9peb36A5ZfYiu8q8",
  "key23": "h84qCk35FiBHRpGrmSh6osrczHdU2YnGKDSmoU738Sg5k1x5enubvpWPg15BRmzowh9LLPKefkqNMeXMC9ZKRtD",
  "key24": "3q3czMNGb5vzqfDnCPqwdyjrta6THap5d8cUygPJpHDupozBeUvY2BVQeNHNZvas6hYNS9VXcNASb7Yhgyd6a2ix",
  "key25": "CR7NV8hX1Yd3GYVdQQRbAyLTa5B1fiAY3ejojunfzHRRArHy6eJC5gB2zmnEA1C2wsXMFYtMSEzYukaJRxEFP2f",
  "key26": "4sf47EEqMxPcVhBhNjF268MseGAUk32XRLrRYVhrUeVEpB7ySEaVZrErTYTpZ226HuRBCJQ4pydXpzfHpKxnTAdE",
  "key27": "55RkcgUib2z7ACJTY3r8fr3RTojKfjtY6eQ7X9wzE8Mp3eFS3WLNuLqZdozqucixP5YgUf7HxtohyWS1vMcX8RiS",
  "key28": "3TTCYLDdf54ZUAkLorTGRPFYSB1ocw8pmXeaoMUvj1WFuqyAG7XhteQ1h2m2FNDfuNs7x3iDsBDNpGB8Jpeor61J",
  "key29": "3QXo2qEXCFZqSHxQ8NCXZkKa5XcXLNZiwuxXx2uE9bqdxcNMuaFL7TFYyb4eT5Po34mvn4BPpfhBXpUZP1FH2TSZ",
  "key30": "3jG3vmdjby5A957KVY9NYZLjVzxuyEzGTVLVqqxDNS6nkTbxsAW8vvU65UygNunAkbmENA9E7HZnUp3YjsKEjCDH",
  "key31": "5sb63yEtceSiuXL8AG17C2aGwWAFHRcs5U6h9Fs85wW3BzZy3vxyzJVT4RSprKXLs8Gpq4dCV9acjy3PGuU5iudE",
  "key32": "5o5J7aZQ3FBSXEgSectb7HVEE4ZiK5EegZ1z1Nr2dVvzyiqyFS1mchmrD5ixPGxoSps7cy5gqjhfHYMp6NhuEdYf",
  "key33": "4291kdEtfQHWwXeTc3sjtMaMVsVCMB2LZxWajDvZiK7DYg16trXUXNMnR4EasTGnmgeBXnpPFNzy5Tpt4Pj5NkiG",
  "key34": "nf6erBvnRtm6bbbAh7J6RLr4AonBEBNrArBBuQjzDFiQMrx2tYKqvSFPZSqCLUDLySr7qyMKR6HWoaZcrgMav8N",
  "key35": "wHBRoAjoP1GQV6NHUmAHgsEPfPMhYeA2vu2CuLF4252gsdPjKrqQ4UwQ4LACqe4Ji3hAJBDa9vwYFncc7KPLjGC",
  "key36": "3c5zo8e4xVSLJW8QwyLUJi9z6exvhZgyq9FpXPJJaNg4783fqVpvdThP6orBaS6yFdDrjkKJmWBQMJzuuotGpM9o",
  "key37": "3mfJWpfeGPPFe284NuHjizbjdBeVm9ncXBJbJVmfz9b6dwtogd8wmEnCwmHihjWSYPZK8mFU3Tmjey22zwnopfh3",
  "key38": "fPj2j9VayZccKqn71w9xX6S2tA4jsC1Sy92PxzbwNNxwJWBWQLidXX6t7z53U9vjGYJBX6rSGjGUM3QeW94DSbQ",
  "key39": "5RkPUNniTvgpGZuuJ2Pr4KcBUScqbJQsRtBNpLrkPh8K9TxBb5Lx3AzECDPUBA2aqgb8ymFAZa46LhWHH2A7uV9f",
  "key40": "4s3XMCjhA5t3SKbGCEJYfbv8jh4gbNUG1VGUY7aYzj2Ji5wpUvgtggnYrmM1Qy6VGkvLWcu4AcnsWgp1LUoFemvb",
  "key41": "48WmEnVScCUSd1t7iXsJfHNhcuhSN3tNTGtUaHpBDFkjNU9Bg54zukPWxHdQHAWP7r3n6pCiZVZkcxyLrrGiCmhw",
  "key42": "31nkYfvMAHomQ4GE5bRVysHufoG8vNfrfLXW8fYM2Tcm1sESdohhAA2gxEW5u7BKMaVGydntvUSkww48A6tcasii"
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
