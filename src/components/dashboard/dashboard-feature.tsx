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
    "kC8pL88jkFLYEF3MbdUjb1hLHyrmE6ZfyX2B6wDUEJm5uGa1xj485Yfq7iRe7jASYT5rz9L82NsSHZUMdpf8Ci1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Cnn1nJEw8cgcEGnxkspaeAzdYRaKWWMEfgyVVQRfeKikVSgEd2d7y2cweQ21NbHbfDHo3H8gGjJJfainFmFLni",
  "key1": "2eXUqyKKc9tdQycCw7fxfmd1jPnbJqYHrafngG4Cmro57BXJ1LM6dxjfkHX1mLNNDomQAJhVHkuTek1j3c7sLDya",
  "key2": "5gSgUM29z6yDZQ7BGTsuAC4U6CM7EjPbgWqNQBqBNzfkTex1jS7GG6k2uYSTjV2bSoFhtUBndpLiCmnd1cz6WuWm",
  "key3": "4AqQxomBygf2xdcEK2svgq7wqBy2X3tNAr4uXGTLrGNNPjig9J4nFdZPLxHBT9cJQPUPvwfTJ1UgM24hptUaDSz1",
  "key4": "3NZ2kNrBqixvfbp5L3jQ6pUZkUDVpNZPxUVJqyrvkkpEd7q2kvqsNETBpDJkgnxDqViMwup7e6awRVd4uG7XnZR5",
  "key5": "64YSUjePxWuC3ec2nZcc5h2EgVZrMLuJEA9zmPtq2yuPAo9mBSp8ek864D9j2eeJrZUjPDbX9WxGEKoCfeKJsSxq",
  "key6": "5rakoY7Bha99MJoCn1axc6TZ8EJwQY9k2n4zxFrAb1mBtVJHtQzjUh7msAHP2dtQoBy7uuUfTUaiBUJzCpYcruRa",
  "key7": "5GqQHT9TLgQAWyZSs86K6wfVRWgPHqq55aRP3rFhRraf2GXmWE1c797XXZMLcEqtKrMaYQodkEVyzE4a5xaihUy7",
  "key8": "ih55gVpRAMwQDpLr6nPSocVMUBc18t86j3KkA5L9HhMu31qY48PNVVkfb13nAJ5hSDtiTEYDti9aPdpKKfgKKtV",
  "key9": "3NqQMu3QejAWL5fiPZPKguMG9rHdhHsyRUEDwLn6ctJLTq9d2jqzj7zSvnjqFPoXerX7rgibi1GkZyYWZkJj8MY6",
  "key10": "4uVmTExzmRLN3BT6tnPhiMwEaoieCyQP45oENh4cpJeeqZyvknx7bJgk9GNRMRgoEfNPvMUoSXyaz5Gj8cU1rHFw",
  "key11": "3VUN3xuSKX6JvLt6WMTzJsnH8ek7UhRTKyZX8V7NvQw67dpyzuvtid4rcNg56NwZjnDiVL6XeBLGget9u3nG6n9d",
  "key12": "LjPYcHp6oLn6DQiZdbEcc3jHnFaat3an3FxPBHGEv3pXCgdCSd5CrAsdyebL4fusUpK2R7W3ezaWsVPR3BqfahR",
  "key13": "5yiM3x9uj2hvMeiTg573nF5UkGnyUm4PSVAfE4Xo9tUU5CZyxnDtd7VEE3aQULBnXkSswhbn8rapnKrU6chQTGDe",
  "key14": "4YLDGX4N5xjmdanTqi7bfnZeWg5VhoXN7Ad8KuCh4dMWSjz4YruTzGYqauBigQz9fRCBJV2EYL5GfKE6QAd7MU33",
  "key15": "4AXwE35tR5z7nDLDCzaErnysdHGKpHDdGSKV5UhQewo7w2fK73JVSYyYMpjXskPuFhBPknEzi5kVvuSS1FKScJ4i",
  "key16": "5zcCfxzVVaC5hNVM7SsuY2n2sUZ2zFyMmsCt4HRKw8QNK1qU1L32Hy3JWtfke3kBQnfDMK2vnZT5WnPKm5uhhnZZ",
  "key17": "64XVbrCPNExt2ti9xZPrfbCrjEWSpAux2qnu4A2Y7BBcsuWP1Ga7ESq6a3KQxa2zxWMCu3ryN13abBjvbExFYKWi",
  "key18": "5XEFL6ZHCRsuggYFJUEm6rCbN8nMcu8A7k1HuWDuvbcxmo1MSYD6MGDVFZ1SZhoEq82tsb4iDULqnxtnqwyceEgw",
  "key19": "414zxbZwE3eKSAkxd5rAMJUi56bNPZDvn9EG1inp9N4paY5AkQwdmxc8RXw1SAgmhSE72UpgqZsKdKzbwXjZK6RP",
  "key20": "4wsKtVjCeZf43kw8RpCKcb4Gv1GpNr8bgHzjegpVjHjRq3mR1JeRcPS4NSk97KET8uxofeSuYkszYdzohu4EpjBj",
  "key21": "dARbqr5sBofwUPsB3uHZhP4fZug4vK7KJbJUSphMV4XFp35Rd4BphYcguKK7oaCV87AJjBNwDPdcaXYM5VWq2dn",
  "key22": "5FhEh2WBWX62PiuyjLWP2a1iYr9AYezucd7MEQTDy37dUWJHraKREdM8AFTS9fvU3CDna82Qex8Fnn6SRyEGPCVP",
  "key23": "4yBYG5R8mBfKBbXpxd5aHumTVKsT8kF71bRGpnyZBSZXxYqg54dk7HVPeF7rKvwt99DXRghVLim6GgPCRFEsDGQp",
  "key24": "2ZaYNcNg7ahVV1Ymw9iEFNHBq7wVJaG47gGw4B33fAE9wWaBkKkXvqrUqTweiMPxErnxsnnRJ2eZ5Kz61JF6D3jr",
  "key25": "2KE6K8N2gCeEnf55G84meLsix22FZwywXLED4YkSQFFuxVE6wguNE8wvAkXcp1ojSwBwKxX4xxbnzDdsWdHFE33e",
  "key26": "5e4QPw1rrfFwphNPDpgXLR1BL82JpxmVvdkgpwSaJi71vzpwzAv1U3cqRk3QoZSPwa954S1wCKdH6cZPqZKs3pxm",
  "key27": "DZH7EwJ59tQgR5sWtLDphTWVRd4NS9KkYEUZbyHTDNiYVowJ1q4aaBpRE2aPQGfrDvDqHYgWcmdd8GBBRmo1ogp",
  "key28": "2VVefmMcpYS9pS66FezSpq2ppWujk4j7WbnnYN19Z7hbf7xkBVa6wCTAJmeQwD7MtgLYAaFoCxbnxtwsxxfGxDLT",
  "key29": "TLhSUSNQiCg8hYdsLLiHjXZWvBSu3qRSVCawdnrfynxiQgK15LiTN2Efxpgt8o74hPTTrJyc4uJ93Y9JaJEoW3A",
  "key30": "2xWwVqa2SoSmL9tUQErDxo9v9L6SheCUt74d9ZZWHVFy9u7QLcSA6GEYvCiyo9icoasCW4FnU2r1VW3e2EgC65yA",
  "key31": "56Bzg3R4K2FsEUqFL9z1nvNdtFBxv54CMMgFZf1DEysWbeq5wyCmDfD5J57DgapTav1P7NyH3gxjfS8ppJGuzjge",
  "key32": "61WF9hDE4P3MBH7wCNS26AQ1VUUKc6iXrRj4hWGMQACEHi4yrsStXi8Z9f14ZzUjmKVQUPa6uUoGTFbHgaSSsTSz",
  "key33": "zjhx1JaF9sapYnqGZQedpmvS5GS75tGc1qTRJkkjBpTCe4oSHL7s94WS7ePEiFKuq8bXbMMrC1YTduQzKkzJVvb",
  "key34": "2p5vpgLbn96sGFCAFBwEtZkZJLwzLm1mxbUGrBAWxZkBoe7nXFUmUKQjJmmWbBpuv1cSg2V7pL4ph3fpq32r3sPp",
  "key35": "5pvMbne9u98KGsFVuw3GCQTUjJq3TWm6MJuv7KWtGUeQ3Q2Eda2cbbufA48hcqqtHdCBzCxbV25wtZXFwq4frN6h",
  "key36": "3HoTXCF32qqiiPGsCZRcb8Q5mtbDVgBv9TtN1KeRzQLGpYTBvBzVcGdznwUwT5pGgUDDhK2W45PhxLTjKRGqK1cE",
  "key37": "2Hv9LFsD5SbLhLoq7jHponpxM4SZMH7cxym69uXXE3XJgyRPVuM9HEbYEir9PbLqqArD7NVb3srGw7JG1Ri8yhyv",
  "key38": "Qyg892EXvTAy1tFW8FNkMKseM6vqRtUgUsEdwHtw2Su1b1wQ2uiVo4YaD8kwU4bdRpgMcy3G5Hx77vYYqNDLXNq",
  "key39": "4XNi88UpqZ1WTzyFqtnGJ1qFDdSivfjhpvYmHEiqGbxfytwR7C5phBmSe8DN1zaSuyZWYq3y8YeTkpJ8rjvLhv7t",
  "key40": "3zKukS1TTFHi3mDbwajXvozBWMnB4c86agpzyzmGpGTtGBDSSb9oH6bmWSRM3o9a49fx26jMsN51afRT9EATduhS",
  "key41": "sJ8KZMRB2GPPQ6GDcPCNZ2dgGiqvFZadgfickzCFKma3hriNJNsVdCzebt7QToUPKfznmNzMEB71Wmr3KZfF2dV"
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
