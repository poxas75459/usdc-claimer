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
    "5mxS3SUxPW5p5U8xpFoFEGxwHaLUNmQKRFxeQJi8KGW7L4FKrvMsQ4AG3fsspC2sNVtFErMGDJR22TzDaKGMCMyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDWPcUdVCWKFjCB5spfyPEBE28zFoa3rUT5XLGGTVx47xBd9rW24BzQU9TTuxAFtsHEkDwPiWsCQRXWDtReZNUN",
  "key1": "2UvT1ZhABfuVN9BgUTXJHEFGfNPLKjoepmXNc5uNmax3oQoxFm42VykCCU8VsAEn5E2p1eUYhv1YjJxLDgpvADAX",
  "key2": "2iXZ2o1DVaRhM7tMdWkRY3V8iiCC1Cq5g4EKBoFqCVbpAWXLEY7QgiYFmBA7KtU2g2MzXqdLRAMXGKe1GQ39kKrs",
  "key3": "3K2sbk5eYo7qQxDSZEtkYvPJTgJSWo6BSkTMo3KiJj3FQ8Mtgjnob1pGxS8iJqnMTwrBc2rx72Zbq5dkN3qBgCLs",
  "key4": "JxXwteWRrK1mdMp4K4MqvznSZr9SUmmxrBRLoJKf7y8n4KYmmxefeqx2GEdysMrRwQRSnuQ85FRhxZP84Pr8FKc",
  "key5": "2yoMuagd1ZYyifXpRT4fcFFJJGYr52hnmm3ZMGu5sVXXqKY8m5oxoVqQDFhngeBDkH8TvftgdtwGFmhmfgeGsGgv",
  "key6": "4mfo9DhE46Pi4iHyck28NHfHaqbQ5fhd3JhcebV95uiN6J2ntms4sexYrwH2t5QbGDxtN3jM5E1uYGQTfqcNVNqD",
  "key7": "4VHaZFvT55zZbU3EkARvaE2jKD8V2wnfqQLo9kVoDDd4XPVkfLKGS69kFdoVezMxNyLqDQFdbAmpVG2qLHpJ5n1n",
  "key8": "4NGgVmAopFWkU4FbXfZs7Uo2c9awVzadH7K5znheCYqYkHmgym2h7rJ6G7mWtpsWXUM7EV5Xyik8o71pfHn99aTF",
  "key9": "3tQrRHDcC3CzQHoX3pAExkLFoDTzKRVjAwo4Nmb9LKA3FUnbGSczz5uXhci8iDyMNyewYCRMBRWvx7A2trfVGnNy",
  "key10": "S5gVGn4ug7R5yo7krDKcFiz8HQWoCRtvWHZJSGoT1L3bJzUyAmzMd6ZAPtWcP71vWYQ9jAMWCZf5R9zWeVdA1sN",
  "key11": "4Ydyo3dKuu3H2RJW33TmdrkTMPon5vxFahRMxobWrQk9QiyReU8fQKFz7ope3mf3TVb2NXDzJLBVhswVrAFuyukt",
  "key12": "KQo2o6WCtXykrLz4MJNmDZVguhHT4ua1MGu49NhgDCt7SAmc3nmqfr5zXaAAaepy8kxEq1vqoFVf9bquArRDuJb",
  "key13": "cagdDggzoAWsZWshoMAs9kQw97Q7jcf2mFvfzU75BWhx8x8iUKRFA4BsMParuKrU38XpVAKvyiLAJhiKu4qj2uH",
  "key14": "4BWcm1uQYDtV6Zj3i1iCDzb7JTSgn2nE5gVQbafSnMmEHL4K7faCHaFcRH1tDP8C5nLWo4YSvz5pShWg2qKkoHeW",
  "key15": "4eNnoyHpJY7Qn5kNCcHVZt8txQkSpknHV4Q8Q9qs8eQtHLA77SjeqEj5xCdZ5VTzhnnEUotFRyLzX2VoWtXwwF7w",
  "key16": "42X955xzxNaac57Hq2BRvDgM72q9FcaXdeC8UDhEJwXEq5weEy8Fk6EHCkkr14sTy4qrhrFqUX6tqNKDiM9YSPCB",
  "key17": "5v486njbyZ28H46UwwqQa6FFr8GFpdjZFcVuJVtfByqiSjkwv25ufQTNYsmHcPwRUgmcPHNn6zr7fN5YTk2ZAJmr",
  "key18": "me74H1XXAXrMjFsRthNmFf3tnJMy97Z9HAyVLTKGpfXSdV71GCMGgNdWFRgNYW2GXNmTxMEQEqwwyhVnoPavVAq",
  "key19": "41yGd34JDsfhaYaf8raLzUszSYmsNxACW39N5TGdK1HEzTZMBQRoTBnDoQEJVYDdzpWZqyBPyXFQTsT8LuvhXA9b",
  "key20": "4rqHsixvvh7UxubZMLZKm7AmDt9hz3HXzStfpcSkohio7qEtjuY8wUaFZeSi5Ggv3CeiitW7RSdb47u953sMMJCR",
  "key21": "4UzuirfiabJLeUCAQrwH6ZLVTRCbTr9jLkUD41fXBcCyXj8CoDFmN76yJDdt8UDxcdrpYvMzH2NUBc4c3A9NWPaW",
  "key22": "2DnB6wRkRGqGnZbvfWFB7iQnuttt2nmw56VsQkttZb5uvtg17k8VptQU4aKX7PircEXU4s8aDNuWad6di6YotwM5",
  "key23": "2CTrWmLoa9xm94K3otTgKGReZVghnJrzDV7Ed9JfPjvBKiuXxD76cZvoDKHfU1RoqKWxPyA7QLwiEcW88V2C6ukX",
  "key24": "5wwZJWitaaGzYuUSSrScKcgy5eGm1bmNENqqpVSmEMZRhi1JxMqeAiP6dRn2QSaV2PDPAC2E6yaqyETEYauy5gh",
  "key25": "2GJLvudKSqatheKxKF8CbaVC3PS3Si72uVtNUaEynkuWLhyh1ZhCowKTbtQrB269fK7u5rc8ENBcDrFjm444Xxnv",
  "key26": "4dhV82d8e4E1mgPhXj9eyAxHvjwVaNvcoiuynXsmJwLxQZKiSfH42LBhvsWPSau6rCPaWAD5K3BeRwyDHxFdXdpU",
  "key27": "2neuBKnbCtLSKFNCm15FZqCAUMMZbxpabXsPGzEUjAMSHeZZ2P21qWc3Zo9J1vh6WPjBNEMhywLaNqUcjDybNKCG",
  "key28": "3MXZzq8F1a6tHnymG7jftDENTqsc4LehFuCZcfAUzGco5AnvyXwp3koVVD63XQycFtsx4GZckBBfH3oSKUSaNwaS",
  "key29": "4H3XTRkMMJvKTyGPUeVBeS9adphMsUULvC6HzNy9jRyegDuuAsvrzA3kx8uo55gvLBshiYS1ma1r6HPyNacJcXzz",
  "key30": "23LwobgHRheMaeAZpDq1UVJTSgMC4YZD8VRBK7jmAbU77h18Dc1WSfeVQEQseoexir5RGzCSmC8sGALuSc8RvjQo",
  "key31": "3npcnydWEynh9JHQS1sQEfLuhkgPu1aYyacGBjAKvCCUprFy9syZNFPuDwFzpFHrgyKzxmvAPkoNaQM7dHm2zrUM",
  "key32": "2kfQ3BvXod8NJ3gus5DEEuyQE9tVNypLoV15y7Pyu54G9Us1ZMohKjKMrwufdNxQAcYjSS4AE6Yn94AJroWdJi7W",
  "key33": "i6Qh4TXhWvgRNCqmNnk984xKikuaAjm73HL8XG2PuKa267hxH6jD9n8jxcH8B5iXygB6tFfh6Ws4wwFv8gV3YJq",
  "key34": "5NYPcHYp3J8b3WZt3tNk7gjgiEias5pBeFgL6pqcH4ue8S5aVzXyXNfH3qPj27VFkcJvZdFLDYojxdpwxsEQCoCP",
  "key35": "WSj4HL2QPwz8ZYeRxcz6XYurn7MppXAVu3XXN79ZAfeFwv6cDL8DxgiEGUEPotwDG7v4GvM3iJv9gtdHvJ5S3B8",
  "key36": "5AgF3Ukf6PqjmFT3aWmViADtZvq5nwCT5SB3yQreEDVqJmRTLbjTNw2gMx7PcU3UyN9uYDBDBL9yPJTnFFUnCLsD",
  "key37": "2KwjQGTEsYohje8EN3HLrmncbvt5yvFedoxB4YRpzZiqp9VhkNxNVy2WSjirTtTZRYZYL7jaWy67c1XaKYsj5rCR",
  "key38": "5YMaTmeZdqo4EvZSCH8ANfRYh4QY7nsN4GwZzV5U6m1DZhpMbq2VxWfkGkV4BxhKLYqTqcYQzWQtzsBNuEHBBQJe"
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
