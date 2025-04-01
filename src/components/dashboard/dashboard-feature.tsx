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
    "YMQycQSBxmmHdpyQCeiF3yXMZWoneKAfzg7shLYdtJ9rBMdJQ5PoZhXY4f1fKumfQ372EfxN4TxjBjf1aEcMLoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GRy1ppmjdzGhanFKykQDfsHjkM7sG77wdbCZoR4sLWJCeMCKt1vt3gpwEMDbJu3hq3SE8zhHYvvXa5njr2NWhM",
  "key1": "2rjU9pPbiE2Cz2Mn1A7EXJo27Fsw1zTwkHHv9EwFUDTyZRVzpQSBW9f1d3dxQCCLHgzXeunBeWm6u3a7CJYiCxJM",
  "key2": "63ihkf6jBNLEbcbnHEwqatJVXJvaR8fysQqeCRKGoDWy6MuLsotu2HucvaFuEYqnZJavf6eioXAhsDpW3e57E2US",
  "key3": "2kPDSHUeDjCbyCmoNThVcxoMNLe1Z5DKLJZ9xxMh7mycFfrmmykSBz81CYsDSYtL6tWZTHMxDCEj6o34nLPFZeFs",
  "key4": "56E82rGNFYDDiTMqHExa8ot2s4kKM3hKegW3GNS9E62nkfeBP6dtgnv3msEBjBBT95eekCWoDEZJx7p8zSYuHCap",
  "key5": "3ZGuX1UFz8RHcE1cxmZRWPMWQeWK6pgG6MsW6FMre83i4MeXmk1xbH2R5i2BHD67HFEEhh3nVbB7C5A1T5Ly1caH",
  "key6": "2SvnSXtuyzAghBBfWfJc3bCBVYXGVXQNgjyThvRT1jsNtB1zTWCvChJat1M2Nj1SA5NkwnTmaiX285eWknKiUfmh",
  "key7": "3SPKutySbsw1TbbQHf1Pf7cr8vgPxfACNdHKfxEoaPYhxfCApbegNaf2MUMyPYrv3wBBe1NDYGsd57iFrQk7KvVb",
  "key8": "2eoCVcEkiBp49w4W8JYtUmGWh2jxeNVKYestzous8rzAsZeMYige7PJXgSdAEgHhsRS7SFZoisToZdUEjdwRkqaz",
  "key9": "3on9jTGdtsJiUoooSsiK6nCKqaygkP2wt3f3ynHLPQFAN61Ge2kRVizjMbCTV5XDgWxW19KpTsZ6YYb6bo3HBXt2",
  "key10": "PoWz1sXsaVGYwn59Nuw9zBiWN8xEj22PfuxcedGPRZLDFPRUxkMrcigEQEDKvSMRP68z2bvBN5JTQ9xb7nP5s7i",
  "key11": "2iWikJ9Zb1m2cwuVffC8atudVTagNFQ8C78Yd4nhYfnzbU9t6rgVggWhsog8XUjtgBytSwCFGcCrxzQHiTRV7tuF",
  "key12": "Q542fSU8yZj1NMKcjjUrRwbJXTrb3VVUXmfUD5mG4kyZ6723vc8rNRUfdRLvhA7SiwbapbPJqYfcegsjG2mcwZJ",
  "key13": "3zyv9B7CjuRDZFyQC73EXR9v9TTzmFqrr9gZPPZxpv8EY3iitpp21FXhUVJovx49ERc459mCey9E2DrpmUaP7uNx",
  "key14": "2UordFTyQM9VS1ccN7RJYotZ2HceuRcniX91DhAJnvk8E19TQWJAgCbMAebjjy9RPsD21ZV7iWypVzux6jAveStS",
  "key15": "uc15HMjJhjKnSjnEbYv8ph1BAALaEQ5VGpW41uNmnekhckkwXXn3NDW1u1RFh3yAAVSnToEP7p7uRCDS3c8KDFT",
  "key16": "W561iLXfuRvH6RVsRDvcB6hf5woBZDaCFtJB7Sp77yJ9B1jmC9YGwiGjwr9yw8PrGveVqRiDbhXDrhMhCBGCeVX",
  "key17": "5y6BjHDneNPDW8P1SoJvmPJztTyD54zjVG7XRJi51MMgDGTEPw9beCiUrytFbXvuu92iNKn2CRs5NovV2KxcPoEA",
  "key18": "5PFX8DVrXQ9KRHdrnqr6p7Fb9M6nhyPBQa59SvhGpoFztb1BXJ7kKc1T2fBYYvo5FsEd5FhFTGPXgpXodWfY5WkA",
  "key19": "Aw1CSa84hn4jpjYjsPaZx38bytJk54PQWS8AgC95Schfu23Y2tc992fKMbMbRB2aurTXnAQbWgkywSUtWxrbZ7r",
  "key20": "Hitw5SeYj4Gpd1SZ69BWwcNsWFANCf8hcuZShkKwYSNVuWXumAZhfmJsLjwPfr6Bh3yUNyL1vnMGSvETqAkwy8r",
  "key21": "2vK61cJwQGyc3Dh5Ao7ndzRmovrRYq7gYAFUZzghYw5c8THVVZ7fEZZ1YaUTWYBqHm6m4L7Ms2q4RiiuZe5mY534",
  "key22": "5f659vBsDTqCcYJyQ5NA96dAx6Vzx13xkAd1Ape5xCdMWn4LXdVE7YSy6awRzgZ2TwuAkwXZajNSFz4i3nGA8BuM",
  "key23": "5cV4GGABHXjXSKewprRs8bY9sthG36Dsu9NN8DUawaszKicR441eC8XdKTujpYeNbnTnivzFCKS19skrQPEZJgfN",
  "key24": "vk1bxTwtYUgLzq8sPeYbAYr9F9oV2YXxCSoHmZPQ8jVQoRKp88DKfXtSnvWr7ToDgQr5QBsL7mPkLYcqCvhjBBV",
  "key25": "2wQLKh1wCwyyWwZcFzRC8GR5hnWtMVrSXWiAC9J73zN3Xa1FGTtkTo4yMnxciPTgJWB22o1TJHvTVfnbTKV4skbx",
  "key26": "uATUi4aKe2huenJFFapbeVZx7ipJJQ35fWn1GDjVpyHva1ujeQDMEj4vJiQ12vcaRTzhx2RGPW5mo9cqHBkoyiJ",
  "key27": "2QammJbt4LdmH91mCb1usYRD76vmpht5nMzKK1dq85UvKymsUCiy1EvqUiSLgjpXvTp3q1TWhaFXN76SA4KidKHH",
  "key28": "5NSTYoUWgHetaEXsxPh4n6bH1d32cz8rwgRV79h6bnJM47FW4EAoGCeBwSoVHWpWpq3RHbgG3iFfb8Ng6JH16QXz",
  "key29": "2gnSS8CtcCZx2nt8SUNRPhdxLf6srvQtVRZZoqNM9pPxWiiwqaEgSRotTvWM35gcg1PhEC38JMPCG2D4GE9cssEh",
  "key30": "jPUDwF7kGyNFvDfzd92V5hw8tnVupAfepUQsjPHymNcY3vbQJcNa8rbE2rK5sHsc7K2KerPxTFG5bjPJcVtAgYs",
  "key31": "2uixRahp3La6YtiSE5RL6j9z9VFSewhXUhRaQuFHqH8jrWLjpC7uB4o4c3iwT1k36yVfcaKgiJuSwwSzr1LWK8oz",
  "key32": "4ywW23dpPpRT4s7S2E5aEkCFzwYMmGnaishYG6BDdtzncQV41Rj5jdennPbGgkHxaMutY4c5agBL3QDypcriZTHc",
  "key33": "4kYVSj7Jd8QVzCE2tAt1yXkBSyi4aiBGLiaYQfogEwDSZKYKAr7ZPgyY4Dxtdoq4aArpnEAkdVtu1U7gruJfDn2C",
  "key34": "65SYpdoWDcn4gG6dsW71uRsP4cu4LB8iJfYywEz8qaoKzz5etQvQMcYzEYejPmLqFTqBszSg7rbjS2DFcMWVSeTN",
  "key35": "2sdnP5FFvTEbrKUatstyxQNEJkuPQ9zYqUKwizUXvNGwkPv2s4dGPgwyXi6bDuMGhEp3wu2vnHQf5qNzrNWRmcjp",
  "key36": "4qsCrV9VtvvQ5JBAcMcTAyXmQV6SEkEWguAXRVDsrFTvSa2P7u4tyQMU6umMQUJdjKRCrVN28JP1YSC1XPcFDKwL",
  "key37": "3gfmBrcjUCkuEixhMjhjrcNit1qtfZqeajjbA4pVscyNWA1vAGHksq8dRjiYkXWT1QesztRTr3j7to3GLrKsghEs",
  "key38": "5482wL8QLsWGuMEQCWMgQKS8ejcWiwX3Vrh2USdNGp5gLwLTa78tJcw6fNjFJynemMGVk4XxUKcj3Vm8WBcDLXfL",
  "key39": "2bgfQB12Z4w76CG1wGzX1iF8jE5SB6HwLMrDyFgvRCc5h6JWAwcpsbJ5wgsfyK3SZ6BMs7R3xcAUoexu2FFQjLog",
  "key40": "4raptBTLrefexPMSFLJ4nzvRqoCzmwQMo3PhQaFQvSjaxtaXTDbRF8Vb9VZEyQ8ZA29wnYSUHmCqJzRpnvuxM8Rs",
  "key41": "4P5ye4U8NmkYmELhVqAgDaean4ShR2Vuru2ZgufgdMVNmhSZagdPQaqZKPpFpwB1EZjx9LMShhNnqEJcqH3AG5Es",
  "key42": "5e245uygRofTpbVqYHNohLgj4hzn14ENhdTsC2MV7nw8Xaqp2v9jya24LarmiKty1Npds4oBcDpFci1GSv5WMoBT"
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
