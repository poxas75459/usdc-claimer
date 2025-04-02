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
    "5ERghb8pJwnvaE252TqMbM3Bcwyy3WhTdQdeK7312qbJcLKRnesgCgS1dUa8fFMG5w4jX839uL3fv684YTfM4sPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nurot69EvtKysey4U3NPComdieV5Tseb4qQUUsHL3r3igqrfZPhM1NbyYSvjuXZapexuaMS8uBvTw528gcM7woD",
  "key1": "3RqK7crUuD2NGVQjMVqaAQgRoFP7NrGTpvr5cV6Eu5Pu5cUvxLftFmSHtFkiNcEkerDNwVSHponAoekJtqKNS9CQ",
  "key2": "4nv9faPgMtQe533ifzKv9Gza2MjRTibyGrCZqgkTGYn1KiSBgbZqZW1krpRbjo5JGNaNSX58U1QAtrLDumoAxqTG",
  "key3": "QQboVE3LnLEHbHNqrwzY3D1efdUAcxhdWKF4ZmQdwKUjdxWfZdzS5CJMDWgNLAS6DzQRR9DpbjcJ1CpptJrYqSi",
  "key4": "4mi2ZDbNizAzbrtKnvG3byjmtu7UYy1AXokArPGtmgCcdBpcMECrujeLwiecpat57DWQm9EKcWCWQp2BK9pFefqr",
  "key5": "2FuWHnbnZX9JCxd5BLib12C1QHeVsNpAab3Au44b4ep8BFCaoZvoCpWvj49sahpcosrZ7H2MM91QC5LuD7NMgVVz",
  "key6": "2tjniPaETesV2GmwmFwBCdLYw1ob7uwT8LCeQiwTCp8h5w5eWyxBRRdxCmAnQMzAD4u1JFRbnJbdf2Rh7C57zm69",
  "key7": "4tginNAUK8i29wc6dA6DkQFNYvobvw2VTvrkGdQLu8v8Vk4oAHPxjYgdTUrg5BqkAjHqor3vYGgbkdTy1RY1ewtY",
  "key8": "2D9vzwETumnd7GHfw3HbE243PkQCyoUD2oM8wuBGZXvtzdC6gZd1w4BRQddArfZCPD6MCLfvYscXqnb5QBdF1PUh",
  "key9": "5xWmcVg6zwWqUnDU7s2jeNt9RouhBgCLiPsmodt35n7QH85E9uLR53p6EJz49HCteqd8sUNxYx23gUnnGEBpqEga",
  "key10": "2mHqu2aDx3t9c4w3Aj6LKAJUTKwaDX8mdZdz6mXX4bf5kxS5tjWcncTWQP6BeCDgRF5Y24bAbKwfJMxodZzYC9mB",
  "key11": "56j3b3PJbSqhVS4WDRxnKDUVZ5BzpZcvPEyS95XNBZRL7aykPFqtLVbgqe4FYau7fUNDWgpGUuzLRa3VHd7hUV8H",
  "key12": "3PMtscj7sXnLXfSLvFpRGtntfadTa3nqAc3M9beRZ5aEf7tstKyMLYSRKZmqbMzziQyZHXg45vVQp5et6zvgMKpU",
  "key13": "3hEDCjGqfLWCoNvjwVJpBEENm7V6UUAcqSCkzknHsC6ih5LVxWaMGjxCDCBBMY7vT4aYeQ9i5MYec9sKjZWBpbY5",
  "key14": "2ZZrB1cfv3YhbYaqNwpmuhSkCxnZceqSjDrcWWXJMCFsrZogzWhumNARZcZjsm1heMnj4zUKBZtsLwbo3jYn96g6",
  "key15": "4EEWbYihYtEn5wxWKYHv24ARxsVVEKUkK5dTKnhaSgr6bzar6MVtC7EeaZvBgdaC2tEc5NqjLiLEiyNkaHwcjwTm",
  "key16": "3aum2mdAEY2ZDCJ9ZvsYV31AroKhi53hF2GEYWtSKuU15L4hNZF2vwTqjKS3BKzvLGukLG4mg9ZGXaHhibo6v9zy",
  "key17": "KQ9uB266hUzE4UyDwQ41nWzJ8XuqMSQKr4xKn1LQrNHMYMPEJP4R5HPzdQ1LvPvRgHi88DZ6QxK8NKXL3CcRABr",
  "key18": "4eosGpaG2hk8zPurf6gcBV7VpFP6hm38k9d67cGGvxfHNH9eZE8whHaciNBEt4NANe6kiYg9rpkbC4pd6Fate5Ht",
  "key19": "2xkcGLFDWK5AoVpqpZjntda5c3vKoZ3h1HyMVPEVUghSdpZjyEd5TT99hQUJ3sBsefTRiQkcNetCo75qGVPz5cC2",
  "key20": "2vrS2EwxEEWJV7tBb4TKjXchg2Nw646ZptmXgk4XJbLzfHRzGwztuKS2YK69R613o7cEJKc1dvRXW6Ff1fiTS3ax",
  "key21": "upQuXJX7GZRzNWCfM2uLHNYxbaWfGRNRyie656UpjMbqLjMrDeHGfACagjBdqAapNP2kn9DyUKddEyY7VLitkk3",
  "key22": "5zFanZpzRFMFBcJqF7VcvsSXLT5kNb4sUAQycczm7GPSC8LZi7Co5iMer8qwnqQjJH9Ao5U7J1awtF6qZ8tsm6nw",
  "key23": "4U4RBbySVP7SQsYY1P8XPCyD6aLvtmDdzFevxx8HXpWifg3YJ9bczhPZ9JFjqXmJ5ant2bicwdJsAqc7cyPkBSa",
  "key24": "2G45gvRz6LhEnPUWNuiwopu72jajqPoEkxA49UVBhFsAZQf5jS527mbvQE9J972zQhye2iebPpP3hvUwq6P7gAa8",
  "key25": "2e1YZHTcUAdcMEP3okYoxQHVp2Y2NhhUZwZP56QJyxAJAzUQsQ5YKqGA2LnwthJzZXwTf3MVhwVzD9mT7NPi5y5a",
  "key26": "5jnFT1FMX8A2CpK7k2G8DVviBbQmmYCZw2dgpowXfM5JMwo9gDdojS93498tmjfd5t9jAScuChR5mt3GrwVcTTRp",
  "key27": "4KPaqzYSu98xiknaMCFwJYN6JtqnfMPVDRnN6QcBWRCukF7EMtmiaNtT3AehM4w1qrD48WGzCdqAmJB1Dgn4B5eG",
  "key28": "3ZFPeBaTQy8tpfWkyWebDTVrN2KF2FAZC2mY8FshWPa2KLVeSfnsY2GVP7s8fMfvpiaRQoZcJGYViHTZ1XpAXBHR",
  "key29": "VzL7DYjZaVSXFdPtRoEuUuBnKEcXXDbtnBa9VTgJr9k3jHdtoFyd2xVW3GWLnup5FmSQGw46T39FRXQBBtf44hc",
  "key30": "hkzKMsdgmjXm4XrztaDafRU5FYLzCXJFPyWiXWHh2sTzWheRL3PVhzrd6WLfrGqdzG976rm1nxRh2AxKZ5U2XYn",
  "key31": "4cnPKnBzhBboxfHzB5CG9PL9S3ZCdwtNhaH4hm1kKfepKGfWCSrLX9DSkh494AgrRr9hpXDW9peTFCT8GFtCTTVE",
  "key32": "2kSQMiHCwboVhMBx1i6M5JvXwXLWo7c1rmKVdUgsHsoMYRhK3jovVdrsKeWEJxxKvR2eb5FLxXq2cnxA5qwxxiGK",
  "key33": "35XRMKpTw7rdh8ssTpRRgH9gN5zsCxyJvJjQhtEysCdp2di2nDMDsDdqWdDWborPJtMuxwYRYTyLPCTWuLwKAGFx",
  "key34": "5WmjFf4XmAt7Xwj41FFV2zKxaMpW8WiwNGb4EeKBq2d9gMUVkC46SCmmoNcgc34xiN7K2cMtxY9ZRQj1qmwFHmuM",
  "key35": "3W62ASRtBdMDWj7sBmxQA5AEFBMBe2831ymGWn7GkqdGrxXoftd3v26PHHVrGDJpzvTC4GYCLxoTaUDTnbEXtMBy",
  "key36": "2geNpggZPux8odJEhQqooC4UpXnp8Aqkgg59GLSMZyTVpMGXQE9AwZMbQjUP5C1fBeGfo9gEuZ6ujwgz39B1UJiA",
  "key37": "34Bhgy7HtkWSvHKqZ2qSG8rCZxXVwqFRZfzxfb2NCWAcBp7FhiEsXrWfVNBedjHzgkWScaXBwQFq4GpSWT4ZjDHN",
  "key38": "4RZmeCNXK4U6K6fvcMXTKfVadu2ri3MytEUTGryp2AprwnM4pV95gvW7NKYZa2JtE4RrcNaki6wWhZJ52s7MwSVH",
  "key39": "HswtSjG3Nmg7neiocNcu3fJmv8jBuRuMn1HLtVHZ1vhyAXpuu7vwu8zygckyXJUUHjDv1grmQZWSQyipH4dwHjx"
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
