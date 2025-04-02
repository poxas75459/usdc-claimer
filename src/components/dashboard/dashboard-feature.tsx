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
    "K1YPdZF4gbbbLx6CuJpxBy7UFbyMRfWVjt1WaHV8w5KPVTzn6vLuwMdew9abFZciufwharFbGcqq657rmkYbXbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKWdzNebTuvsRPZ9tyGaKKBAk8dB29i44m1nm8F5FhDw9knssBj35Hg9qc3FjdDMbxEnpFxFiW74aqqFWGJnTxx",
  "key1": "2J178AVRRDTHGzZB6WW2Vvo1tYwkVPet13UsBrwqoBe5nEn5obp9s12jmS1R15wy81SiY8dLYC1SNMspufPFsfcg",
  "key2": "4DGJciaahAZZ14zBsAe34rVcH6XQRDPyTfUXX6EtiMf2HgD2YSCPrs5V2x1uimCnkqoNFZguxy1QvxxNaELszWXS",
  "key3": "4T4udQU9FVnDMZmKu34qDrwhcTTufuk5wGLVLRUvqvzxSeRSjPMu2jAAU9skg2Aycvj3Nb1TSzbbBZjNxiBLN3xe",
  "key4": "2MezuDiQQcedKF4npZHbwPFbfhunvmp7iyRE1ksEjcPdZobjYoJE51BGrMDLZgCoD9R5szRvbquP8np2R3Aejy6n",
  "key5": "4ezvWF5P7YqJYDmSYGKoY74yFzP1qLvRTX2VLwwnYZdS4xRrSnLJ8cvnR5qcKZ4NQDbwaZHib9rumbbp8xbHu4Wk",
  "key6": "3qG5KhGZNfSPkMeaZ1Y3Aica3ai3E2ZVRxD4HkdFbiUcNoPt1zqTgdipWUiybNJXw8U2QyuMQtiR2fbAYu2H6nvG",
  "key7": "3roHmeC5fE2bVNFf66nrR2XLZikXxqzkGahr8aESakogpaLiD9yGcnptPnshtJ35pECWJsFLyLVuswXRxh88EbaP",
  "key8": "3aqEz64mb8qR9sfekTgQPHCRvXsdKYXe146APQgQaSM99HcW4AzoSxgY9YBLwyeU7ZunAZLMYoJkZ9TJLK73aYDi",
  "key9": "2FDMJ9ztJes3d6p8vQRVNV9BgsfQWggsPYm1AoAHoWM7jLj7AT2grke5Bde2u9EugodcnFUth5fcuFGXoUx5cPeB",
  "key10": "2pbuRRUc6XNGiGxPvPmtSnwXK4BkMnEqRAtk9pFqCGSCHmbhyK7WAHRpPcTYNv8EQ7pTqM2pMdE5zmxcDDmA1KHw",
  "key11": "2Fx7ootgo2U6aQ98HH4Yhd28GWmLQoXkxzDV8XNXTiNdHHyHT6NKBeomrj55cmtf6ipwnWWTVQ57c4gXkyCL9cXk",
  "key12": "o2AXmxd7GezuAQNohDzqJuoukuyXUgiri49pabDuFBi9ZJQaeVVZcbyW2gM8UoR6756tCBpJaT5qXQCLaGwBLyY",
  "key13": "gPmZoVts95zFQeZj9YkiC5fnDqLk9b2dPz1HMyBTDcqMLr9YT93YY6xKngGXYy3HY5zFw96rqZB3aDtqD78urRe",
  "key14": "xUCWUDckNW3TF1MSfFUYctLFQqsMuVnFwNHPjznsSThSAEoq4FcnxnPLmxcsnS3z6BTGYjnkss4osJ8rrTuQTdZ",
  "key15": "39VNnrRzq3dvh1G2PKYcXFn8wB8pKRehaMBuqsAy6AcRWdDnhd1tDPu4m9dhYuuaNDqEJNABD3HPhGZN5MZhkonb",
  "key16": "39A7WruVoteQ6ThtvgjXZVs7hQk98mQpTo2xB2iYTQBKv72q5JVW3UHoQ66hrxj5oXG2XM5va8oq7oDaEcAqAxNg",
  "key17": "5V5inLwiFxhqUakWtZ2uHEfWVXq1ua69VRJpW5XpxovR94qnwssxz5LjyEQMrzW7dtMeakw9fPPyHhUgBvBKdHLe",
  "key18": "2Xgq92eGxAbB8aHw617xZRuRVES3u5a5VfchffRatKFn9PoaaGS5S9bEz6REEfVfBfx7cmtoLuTB4yrSrqzwVogu",
  "key19": "BhYgfzRt5KLVMxQJpLTqEzZ6aL5x4zquQcemVsRTHgJv5j7NchR7msw4Wo5LxYLqiJhPXCX68jMfr7tk4SirnHd",
  "key20": "3e6pqq9AfSB8Cu8JdMVccoh8uNWse3aAg5UF3v3deXNXkAUmEv4qDGN25N79VcrpFpmW1kcPkmfBd2iBeZoWDgZ1",
  "key21": "3sNRb4EKy9kPj3BWFZ9zkkmiWJM1hmXM4fCqUEAi1Zv6QoGH1odHPstfJ2PPojin1m1ojrZeUw3GCw4sZToDiCJg",
  "key22": "4JYV1adMYCFcE6t4mxeCGHEwrj4PCGvX8eqHG3L5kV6evGjkHMKNZbMZ71HH46oe5n7kF82KY4TZxbDBfa36AQhw",
  "key23": "3hX6c3dUPmMCWz2wYC93dX7dDj8Fxj67z9VgGFZTb9SaaVXs3qwph7UqDqrFQZSoqwUrsz7T7Z4cwUnmQEMotesZ",
  "key24": "3YYnm7bQdNkzYy6PN2X9XJKMog2w7tArHwT5qwKHZU8cBCjD6VL9mtzAbcAnonJmMBj5EmkgdtRFit6NPjr55Ub1",
  "key25": "bhyt53upsWEyqrib6vB1wP5txcP5xfQK1kBcNR3fVGMkVJt8gRGbo5MG8KwPBMf7PJ7if9iPYM6axg7y2A4CJDW",
  "key26": "JbKABxRkoCZtBbUU4hqVZv78aiqyAXnXybzoySDr4WF4aEQVHmppF83Q5bCpLi8gze8B39btc3gRzjmQX9YhTA2",
  "key27": "3LkqbjP2bFET6fDV8kPe6RWoQp6N1k1sMr6Rmu1e3toQU1y7JJinSnDT5K9Ap2bC3SdSqC7g5W471qDcbMNjfFC5",
  "key28": "5EWkUEt2W2xd4eiu3tLWD4Vb95fbnhsxKHRAf6nSeaJXjDVPcvJ738hm1na2Lx31YwrB1TdUATAqBDe3Q4jNt8D2",
  "key29": "2jF1fv9nKzzNZtFJL79dcxaMBm1ArKUi1hKYwzXgriRVzng5PcLxwQHj9iojAAdYRdCpY7LnpgZFPvqnJKKPVghx",
  "key30": "2y9dorb6ACWwiqKX8cZy5iwbDUMGnGhTZ56qRejZnZ68xEEJxsnzq1Liep4328ii36DsiAgjGetnEH7QP5GhJfVD",
  "key31": "3MkqgaeRvoLQPN1HGEUh89dcJNDBASXacQmKRrSLCFKUMB5EMY3mTQ6s46eo4Y8JEH4N52WiHDpXfX8g4PBZxE2g",
  "key32": "5UBL62s8Y3t4asT1S4LDhn3qecqYVJ1dbZEVeCEvM1jKvFhejm5b2c6zNtWA9Ux2cQefuPngMv7m4EuSB6wvy1ui",
  "key33": "4os6AkzEUVx9sCGq9jn3BTuMfRUgpEB12JUhyckb5mUX5z77rC5gZm9vAQXb8LpQCWqUPdpak899TXyum3jnjiaJ",
  "key34": "2FMqK9BwugqFQGX82PqeNeGyCR1TiFhBEVCoyyFe5TA8gos4HkdR1iEBXE2vXASPDjWoZSA9DHPWSy78NZJiQ4cL",
  "key35": "4x2PbFgHFQxNPna1cpCx1cR8wozYjg5CjbXvZFRUG3Rt9Hp9NeQ9bhVeHTJk23MJspjLjNbdo8MdPMBB9g4CHD7j",
  "key36": "4yagbCkeLEcKQMgagUAgFjKEGJjNwr3ni3D11KgV1FE3uhucRTWQJiapWYeV24GTNWGJ6kYB9hgscjGpwtP9ncH2",
  "key37": "5KCWuJ7bBWVjDnT8FzW7XNu8aP4VBEcUpC2ZmdHnPBeyGtzKgk7nEbozeTXhT8qhKEVbWaiA8s6NVCxZsm1NBoZe",
  "key38": "2ps3BU9m6hsBgcnhT3tcaD5AgwvKGQ5mc9czGy4dnDWZpe8XMzNiTzW8Q3h4kH7H2rFyjNcuyjf65SD9VvoHWGP6",
  "key39": "51Qotb2g7efwJYNQk6tidwewhry9Wjayb2Fc22iYQW2XWCYSvnDcf1Pa39c4og6vSTT9U2rYsgYkPF2NVusV5fTG",
  "key40": "2EyW3eFRjvZjAMXTTQsCFTY9TD3AYSfr4wkJiXhZmFNgGpnPAtynqLGLjd3s8oaZYwdk2pxedvH36354iViqrBPZ",
  "key41": "22Ea7wz7XSmoeJ1XqXvQHGZTmxbqpy4cJbXs7KFqTjAECrisKm1dR6wDKYJoVBgNzwysYpS4KTbHVSpTbrBiwy1a",
  "key42": "bz2XSWGT4mJD5wpsn24iC5RmSqTbn4sbitpR67gbYTHS8jTqgYxR1QqV5v9b3APenfK62TzEnLWMVU6DenrXU1s",
  "key43": "qfJrVJmEZSpbVVSKgCd95G4uYpxv64t8NirojMsuYyXKWZUEgVybVbkosY5DuaQgmax38Y5TpUxJP4qBPt1PFSQ",
  "key44": "3cWS4PyCJMTeoRsk1qvMH4vDSoSkRdFHyQ7cBh3gbo385NQLVQAMWvn7juNtNxQpsLYrD5B2CY2EbkdEAnjqoaAb"
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
