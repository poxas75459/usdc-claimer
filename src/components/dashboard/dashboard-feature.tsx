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
    "oVMXAdq8qtJsjnWNzjU8yPBriibN5EEnFKZ76zBkqZhTFAirXGvbHoZneGduXvoJthqhdxD2AHEHRVu73iXnG11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkwcgmGJpb9QmZPCWhf6aRn2U2wTyMR2bBaMZdfDctY5K6nHpbKHGu3cGbg3jXuoPtqZu73Na7WVzGUNP19HNas",
  "key1": "4NHHcesisDDPMNZqLsZ8gcD7oZJC5eGgBHJNtUghKX1xe1WfCxCoGGj7Coh8AqCm4gvrMkdTGHANgGkBnSqKiaba",
  "key2": "2owhDhaaXbciGMcCpHaTr4BBc1VXkMcXoqa5vKqqipeBxci1C1qt4dAegmXueL61vSMtUH1d1iXTYzySZMnUREJr",
  "key3": "44nTa9ga3xNsd8sb1EY1E7rzk3CjJHsS4sN65us18N654fih4GbhApxBF9x9aHq33cCzA7jecZEiE8n5pXVsqYqW",
  "key4": "2wrtvqm5BAboUSFtcwxMXtXbs1ryrw3QgLNutJYk2bs9Rk4QDFT33iYpPX1goj1J6HjVyMQH2P7GmH6ug323wujC",
  "key5": "5MSREiaiRmMVgTnAa6Uu1RCLbhefHMPgaxGULV6yv6kmScdoN2QgxUTnfPnkTJtEbL9MCK1xWHb3LXJBjgVaM2HB",
  "key6": "5Ye2Kz7KqdChA1yLCk6yakJCPRGDGwJj17pJZLBQawWTAS3kxKueNKaSLy3j1wtNV6yQKTYAYxXE1qpzBtuxW2QV",
  "key7": "47T2pVpWV3XUsNBx2x5cqxFZM5hmWbnnP5U7nVFBbENC7ManGtDFMnbmivG8LAv7NYxA2zSZk4YwEXhM76dU9vwK",
  "key8": "63Pfke5oqWJ3ZupocGiVWJAEz4ky88D74ju1GxpCRUNart9k2TjoYNLACfZuiUL5VZAwD1fqU9TgYqsRGvA3HJqL",
  "key9": "2XkMbcLS7rs9D7yRjMuo58AWbCdTzGk9aYhRoJXUMt2n4PFxEff3WUMM7iKRS1CkFLw2nMSYA9PDrSpE74PTm2uj",
  "key10": "3mpE58KVjwG7zMHsiQq4j6TMaiTGEGMHfepMffViQcDnfBNR5Fj1u2ZDYW8oka47gRmvhwZ7bdXkiheQ7ySUdqpK",
  "key11": "41SXiBtUpBjUXN232J9EidR6HvX9HTK5HLXpRAwAzafxgymc8vFeswDNJ9rajySFEbeanRM1UWfSkEAx1eA3Zcdc",
  "key12": "4M3BTsBd9uRhuiSt9zxkDsbSdB7vcLBHcf7pgrBWQYcFvC5gjd33wyzDAmc2PFiin1HH5PfJH9FAxkh1aKLv4o8y",
  "key13": "5iE7GGPBsqH2m8tMKatQcKwfL28rR3wNJVRp7gAn2c4QxGLMaNc77oWG13WPuvPsGVb1n84f1q6w1fyWdEo2xU1b",
  "key14": "2asfnax48H8ioEqiZXB78XGGp4oSdAuvhyS7bLi537X6kviUfDxxZJJMxRepr8vNU4zEvJ8NhbU6htxgRgwCaVnX",
  "key15": "3vivcei7ZVvzaEyKCTwoMBVWSN73AzzDS1XDatdHNiN6KPB9wCjHnErEbnbTPz8jrkvnFTKV1ukowpWGbTCdGHDS",
  "key16": "SpZz3LpeZCJLJ5rX34WYSoGYjcTAU56afDvBf1m7x4UpdG3oM4t9SkCDaWuksTLMTWbhQP918ayee1osoWRWx9G",
  "key17": "52mtHvhKLm7HNTibUwH4wXmPPmadc47WbTQXxSN6QTDDgoM51KfSjwArrEk5fg7zpsRZtUJwZT4is3PoSBTQ99Sf",
  "key18": "3dXzsSjWT5MLT4de29biWH6ncb8m9PnNWTR1m3adnxG5HyaR8tzTW7vokfpzUBSQVha2n4qkpv5UuqYG2AR8Mtis",
  "key19": "4QmEu3wMPtrWW1Mp2qsK353bh2G5tQfgDFUiQ7Mp3TYjbVPGRk8G49G8pZwppEcrt2HhBxkYeob1Nx6zGhC9NzjH",
  "key20": "UTsp8aaR25nrESBuwVj4M4zwmbxc3t5BrxjXUsnFzZDmtnJLqQY577BavYoyC2GqJjGvPN1jnd6ApaD7skXfJk2",
  "key21": "3T8vQzT8c2KjdqmiL44ALXNuc4fGcMPz59MFpBcWPQe5etDm9NYkam9D9dAUX7hXu2wPnRhUCcGh9XPULzzzrSCk",
  "key22": "yAiaPEnC2sFPJpkkLnyDnZWWg2qbMt2WLvZ5Kk9WY2btJGSzbPByrkRSD3GfPrH6hUhSDAyBUZmMiF9eXTtr9oP",
  "key23": "2zDeoFqkHfzfcjLLAbCF55svAiQeLFzoBKFVcoMQSdDsDYBKTPxiRRmHhZGFxc82ejx6sf86NEv3UkzQyNjDGZfb",
  "key24": "5VrRJ88kTdufHC4hGGhBPbHWbj8ofJzHxmGUmD8adzZ7sM2CzC71w4QtrQwwinwgMJ1ga53uSK4gcjCWcb1dY34V",
  "key25": "23RVoonPtMCLSwCNdMPkimouK2ZapbHEw3YARtLbywLufQZQ4TGcUPQnPnrdxhsBb8pqMndEnuMyoLQmkgHvSwyA",
  "key26": "5xRCuXjmPjooCSiWjWyTAuyQmy4ViApiMTo6ja9eoaUDNMYDBiVtCfwhQsGGGRCb3iJTpVv3M1getzhVqjCtdEfB",
  "key27": "4sYfe9Mfk2Qn6ee55Vp8QqEMMRvqMNwwRdRp29EMZShr484AS95Z5cFRPT64HxctzMYvSbPvT3g5YCzkYXEhJKrp",
  "key28": "3p7J2NVQYzDPVtPeRTfUsXxAbGriCoF39RZ8A1c2J14QfpXFziTNmF4mVrmTPxdHVgSYu6G2zLaXj2AN3s9a5kEa",
  "key29": "ypc7AXEjkZAbEfCyZVU8YVPRmAkZUJFcniEigbvJZ3CZcVJbHKRXmMH3bTAa3scBceHCeeAetZQmc1RRoFQbURq",
  "key30": "5YUhEuMev7QTgZrB9SteDSF1UBdo6zJvQT2riFcreM9koiK1LCWivygGFdu2RLQ6R79p3T6YVLHwSNb2PvwAXwgZ",
  "key31": "QmCnDVcJSaYv4oTLRfMjc8KoXs46nezAVj3P3YNnrR2PcupVudZn1WrZZYMP9fCF6U3HgwdzDmDrBkj5cKqwyXQ",
  "key32": "4EmMX1AzP7UcoDbgNCcqNj1o8HWVhxfpXytSmHCoaKbam6BdaBGRikeCQNn6Q5XZutvXCNCaaQ54F53Pyw1mjw82",
  "key33": "43xVBWAjKQvJDcyPZFF9HGnWewyrWFncfAEETzx1XBnE3pMViSukPNJGf2fJ3pNeDQFQ8TivVjdrr56WZ97Dpfmg",
  "key34": "4YV8X6Qg9w3pogm9fqazN38GbY77mQQepkQWaa1ME64xUb7PKgBi23DBnxyWP6Xj8kuk8wZiYPvjnkt13mwpyv8x",
  "key35": "2hM5W5SG2gXkVLzje1WGBiDGJGpUDBVqMoGgZFEjiL7LPtVRKjw7FE1dCUMTRgkejyzyk9dys7S1K1P4mfMSMB83",
  "key36": "s26n2wcQtfnCL6qGrPvd1NBMAPefxyhHMKGZtT7fy5xVHg9cW4Mw7TvTM4h1aM4E4Swsh7Kv9gtZhjifJ2ZcxNh",
  "key37": "28mX4Y1Y5ga8SswXRKKtKxE3j5Y9DYEDsMoAuaXGuimKGgu7WTSs197LDTjEpdnQ8RRx5CjQ81zeGvTREuab98Xu",
  "key38": "3kqTK63okzTho7Xpqf54m7fdBxJS7MsbZfAoEFNXrXD5F3E7JUFj3mYPEUPiF5mjgwW3AbRpNde6WFsSjqE2zck5",
  "key39": "2veaVrxyybtQpK7LfZrcBBgqeTX3F7P1YchKQ3angm4ZG2UdTS2YKkuvMyezmwG2sKGidiuQYCW2H11qW4YkQsTm",
  "key40": "5dDFz6xR27UFzTRbGu48jvgcGxHCe7wmME4ANPUPZNX8o8Kc6yhi4LWCtSWTJ3Xx16RjwFqK95WkY2WxohxB9k9v",
  "key41": "2A4xgAEgzhb8fysv17pytdA3KDYDdBgL1LTXDE9BEJZiPmDzpJMoDAnYRY8GBJSkUosDkrnUL2PqGm8u7FNtrBPu"
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
