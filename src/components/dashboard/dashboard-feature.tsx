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
    "MuvAQXUqr2nrCmJPuXrc751LqJwLbzVkU3igK977gX3sz5Xw8N9f4yV9uco5d3dmgDmxM9xSgriGn6SM7Ha2Z4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421A7993sFgXy6Eo3hEh3TkqHZwnitWerK8T1K2ae68hPx3Lvd66z2YjgsXQKcEE44vBLkG3CbftR7DEh4RVL7ij",
  "key1": "3hkf261GvRxTnzCSmrbC6VtvKgdXCnbKQ2sg5FKk7xnG7hWPSXc9BBsTpqXG8JAKy7R2AJGanA8U7MWcCvE2MR8m",
  "key2": "2dccigWCK6cz6HB2jDmPgDaNhC7ZP8e6qrRU8r9Rrjr1oed4BcdN1LG4SGoNXxeHywyenRLtfvXbAe24nMyZuFhX",
  "key3": "5dbUiz3NZG7qJyAApGCgZ9LqamkoYy372Np9n49WYZfG1t3GnJ6G6Pzchh1gDiXtJxN5GgVEoisBYAhB6xGYxkRD",
  "key4": "5qvooSvVxGPNDhY37iUu8JCCfF6SWw89Wq34JxC9WkTkkYfsrx7tAYj65cipkgQtYpAF7593goR5iqKf952H9SsC",
  "key5": "pDsFuhBKJkN743dZ5aHZCChWV955kVmtm9GdsVWLdPqQ6mwRgZQdsNg4zaN8ocBH44SoHyK2KVdg3ZyFy9ium8Y",
  "key6": "2DxNMEQwgSXBexKyKujpGN5sCsm1GZffYhhuzvnQ2TKJeW5e1Gmadofect64xymzyJVpyp9Y5EYMrT1SkE8yGC8A",
  "key7": "2CtXNqwwEKuR2hnFRqiVt5viBYLczGWYeuCaLbZKdkqVvKswcdGBhFfhCioaSVxnhFAFWtoJ4sZsbdsVBvhFqrtp",
  "key8": "29P4XMdqiXS1CEaNRxq5J1nJDi4g6eHTpULeKA4kn6dFLNe39Hcarm2YiXECjLtR9wJfgUSA9Wb9zKZweiQteama",
  "key9": "4b6Z93aUmMfzqxDUM1Bnvju5VHp22mfSSFr43cK8RctjwmevkTMxFYJKWh3o1THchYXR5cLjVvWKUAxjByJL1uVe",
  "key10": "uQ1pBYFaKJ6UstLXqugTMoJWRfzUJ1qvVhdp8Ziz6sznQ3TEN9xRoY7UXCHheVH8yc2MwwC9HoAbFeG5aeS7dUT",
  "key11": "5biXoS9fz4ZWG2jsicV23toPGUYsSTLjFTYbhcYeajbzqB7G4h3RTp67ZpiLZKDPvkpUfLQ7HsQcaizJXV92fyrd",
  "key12": "2thcXfgXbg9TnLRmoR9RD5jwcAm3eYFUgxaZDNMq1TGpxnG4e9cQ9Rm6SemdF4FJ5cepj16MdkabwBwnFug6RGUV",
  "key13": "4pLBZ78K6qxfkxsPASXLVTBJ2LTgQfdRNGNQigkkFZvbzAZB7wP5aHApcFdMhorZY7rShJJg2eJaUVYvzxom4GKD",
  "key14": "BttpfGcDURarE7osRvvE4ZdTrGDV4MYYNrJ5v4VrmAVx9GdEYTSBSqjxvJCfPED7AZ6D1PC8E9HdH66ouUH5SGH",
  "key15": "2jZfDQuAeX8GpNqVEA3ApXmxsSuQ4sySW8GAsERbRBKdZV3YmHEgyfHPPzGYTRCTqcTnXj6eSmiG5fzTVwbChABo",
  "key16": "P6XKG2nj6qUts5tMm4VqTSPBgsV43CMWTu3E2fJteWzEGUiaXDY3zHCpDRpQRougezowk7jzgvFig4Enw8dqq5q",
  "key17": "3dDchYr7eHyEeqHMGNzRDVQwvNntEi3V7qUXkRzYEALeyWbeyzQp66EpyrYg7L5pUoTyK35Kiv9aeejsRRDQnTHW",
  "key18": "3pxsShyHhhrSsUVH3RdA6Feaargr4rVpA4Qjgx7qSPr5grJXEbEsefUMp3HW8GHhak7w4NpxWMPd1Wco6MHSLZGR",
  "key19": "YqAJXp7rjP9ambS6KtyboNo7GBceYso6dVMwSCnh9PtddpwM4Wz4EpXzwf32eoE1PN7j2rmUdCve7LyNu4AYq3V",
  "key20": "4cptrrfWKDmMypFkYmiRN7k6FxoSZATdGj3FgJjTkd3EWiueqxtXRguLH717s3BrBwqZPUCVw3d8NbwgDoLMbiU9",
  "key21": "5iU7SEtmpivCnwLkEjFJ5bV37U91XDqbvJB5i4uDTuGcwvdW52N1jK9Fs8WXaYkdEYW89qTQkKgMaxTEWcQeBuEb",
  "key22": "RfrqSH4YfXBUbbqgyg8hUNiYP7yRESHEChnUhxueGfipK1iPH9wqu7bFfaGAggz3GrR2cvSy3BmywB2DaUYbDkT",
  "key23": "3252qqH1CSMwZieDm9ihWVb12nykHLrxGTRar4JgzXELYd98r1FSDCBdbJqgoFbuZvycNG2ck5ZXn669i1otnepV",
  "key24": "5BmSxSnLXr9vEjrtCotrDSKFCNvukBftmJjwM9r9fdsPYqXX1eNd2Aq1RjhhyCCcU7AGL26c1SC6XFanEVmfMH3D",
  "key25": "3oAQLpxeantugp2Bvu7d2Fi6JL4F3cWdg1BytHSp4Ltqf1j1zfJWfBJHSJzz5YRuKiAaBYDyBxtpRXKmRYk1v2dd",
  "key26": "2HwwMQsH5ECh9VdHmggcoLiWtvhfbPF97ePApkAuQrJeW6NDjeg41cshsjY7k4TBC6rPtTPYZQqw6BLM5edoMMpn",
  "key27": "5NTqeqm3bqXeVYXhYmuCvNCqPgt4QHTqZ5D6mANo1AYvisPoYDJQMubEzDzLip4BhrE1Z9UHXUcyUc58CUJcayVR",
  "key28": "44yNnjpwarPNpQebQjN7dn7HHhgeXbYtRZPfcZBL7mN4Hi1h9dbgwa12Hfxqz2Qw3EUPrmW6VJppBEbj7CRm1eph",
  "key29": "5uWDTvmrnEVMXb9b5hYqjRgX2Gq5YpXDwA3z1AkwtaYBi4ykaicyvsUDJGfAavD4d6SSdU2MYp63x6ibF8BuXtp3",
  "key30": "3Hpimb1d18DUY2hynbAScDeDr7tcGsyCzgzVLCRpNc68PHzBaPci8MVnVYfyqWKC4pTy2V4LCHDSivLg3YUePBpK",
  "key31": "4bWSFMmAfgATUhc3kiqmSe2wnoU85z2NBGFyJUP45YxCUcBWpmvDSV7sSvtwZEAjkUVkSxUrE8Fo9LfbHS56yGxV",
  "key32": "4rP3coCJuM3FitGrhjjxXZ8fiNqhv5z8wU4j4FChEinKnFZA98tGrrsR9i8RYLQWKMWn1P2YTVsBnpTsSW8dDY6w",
  "key33": "3MNvQ4XNcGY4MamBTLAuQgM1sbD9ThXwsSnMz2jwS6mTKgbvt2VPtXhEZyzTRAtrP4LVSoSJnTBUCtqkcSd7BptZ",
  "key34": "5PBCrcCNH7Kk3KDfsPJ4CR1KPKGnt1pLXC7v4hKiWjiayALUY9MCpfyf1BST6vBHJySbYwJVGaa3jQ1AnpXDk9b1",
  "key35": "2F9uU8P8KJGVuRR1uFAofwNQhiMu87yRFaMoTp2i73vmLeynNjah76GS2eAYJ7iytVwGJQuBqdVWXcezRj7sD3kU",
  "key36": "2Jnhmwh3syqBFjrE2TVEicG9QjsC1zxnSUBHvE3KceisUNwN9bQpc3HHsSwAAzaZmnMcJfsFHrdk8nyEeLSy2YUj",
  "key37": "4wAXdH1mMozdPXpJNXAXmbHwZbipQaaFMaWvThM6szFPsrzHqaefBfaaL1qRpns2WZcebYa7h3HeSmDZmrXkkjwV",
  "key38": "2nkkTVhLmn1i6i8zPFnVSAxkvheQXQGqhSrQTcJAeNXX95cDar1vpkDxejjswBXdwNCEAHntVLLHzztpktPhTAxE",
  "key39": "3ETQVCvi3P6qLAFJSe1vakB1fnAM22wKwpjzwrbEGyY1R92jYEcVyfWP84MKHUhk5CkySArdakrUCjwXezehLaaD",
  "key40": "mGV5VLrjnwrtGheVDBXbGJoV8FiBd41vjaYsJnJ8rh6UckpgV5SqRLdaJXuoYu46hhqEv96WWnfnkdEBBmTfyNJ"
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
