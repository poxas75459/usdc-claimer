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
    "AoJWqoY2h8Zv7USYYCn2fK3qa3TiuDskeZ5reY2Mv5icxJBkZrMDRuW3fbCrx7tnTUL5CLPF2zNg4EQMyEamHad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242DATzbsj8HBgZiRXLBuKqym95Ezy5WQjRrMcwm557EBF5Pomf1YbSYqshjAWcJdvCBdNMAm3nKpKbuF5XzNFy2",
  "key1": "JsuZoYjPZQYqkNgDtPbhPnhwsHJRN5dPEVu25PaHSwDGQVp2v7fZqgSBoQSkC1KmX8kxAYj8SwWbgRa4eLaaRta",
  "key2": "5CMM6UVyE6x3pJt2omB4SY7SH51u6Tp44AyxUjz6sDAfyorEumpmqfDjAcqGB4zpVfi4966NJn3HXi6QYHPZUzVL",
  "key3": "3TpZPkfovGpo42JB7o4QyAqHjiFmBcZTB1eq8mC39AcAnxCDhhgGbTkkV3SMx74SZ2EHGdYAxmA1bZqhdfAjQad4",
  "key4": "4Eip7qFoMWaLWkyG9VYQkK6Zng8F2fapasJBJmrwYGtNeNx4Qva2R7g5MEk3uH9SFUR5sUox3GqEWV7eWd4JCuyC",
  "key5": "4KUdP6moBuJfGjMkufKiBqCFxTPqv1RL9D9qM28j7jBJSaZE5PgiBtc328Gesqr1vb6QbhDrY3fztu1WmUGDtgGD",
  "key6": "4F8ZjYdEmnNkFCkPKnmwGvj314Q8TyMNikVcEW6Mm2BQiHiE4qw2GDvSYmN1TJJ4JnPmhtr3YAHg64uT8h1TgeUA",
  "key7": "3NvGt9xZqengjJoqMnyyTA6U8JwavVrtQkmah5p3DGrTJ4dNdYfTYQ1ddKBM2LgWCeyKmup1oZ1vgR92K8uL3PgD",
  "key8": "4bJFhvevnVsHHJzzR5YQoK1QbLEMuBYg6n2nH2ET83TNkEpvB9tBdA2DRtbhMBdz7PDvDEhwB9Jr1cbPHLkfwGpV",
  "key9": "26Jtks7fzbAHmTM5CNhLu2UFNNqv6c23NriHz8n278iPrnVL98o66NPtbar5xEuHvtErNKbXL7jaSQKwkspmhp7C",
  "key10": "6PBq45mvkX53xBwpF17ZFGYBxzDEM4eqttTs9wniRW4rLN1QNYS1N6difb5h31AG3rAtJyn8ors2kC38dRVvjGS",
  "key11": "31gn1KP8HsARDt2XHBMqYUqVgoTExcLMZTFsq6qqDxzVDjeYtfi58SaF6iaevVmbaTufKwW6MNeew1JhZSt3ra8H",
  "key12": "1Zk38YssK7MfWizby6PzscwcYYKm9JwNt7o2CaqG3oYbhUUrJzoBwundxvjA2iETZhZB7ymFP9qYmM4xyUV5Bt9",
  "key13": "p2WEZHwv3CAoiVwBWjhL1sYuKacicJXQ8E7TnMKzi8hzPq3hgNng2WvMg4bhuTmfrfMedKF1y3mjj8zgLZCfuSn",
  "key14": "rXv9PQ2g2F7ta13R6utZ9QcZMmUqvu7os7MnY8YF9BmetPDD6JfiGAPdrrmUEPqFmPLWbH3rPKCeWHN5gcidWiv",
  "key15": "2op8zPG1Vv2AEsZJrn3vKYAUEVmL4m8a2KuVQFfjHV1aV3DiTRYRyfWeR6ik1Lwiwf2f5258RRbyu288cC7ndqRm",
  "key16": "3dD4mEAdn4mG9dgbVunSdUWbwR7GsmjS1cWeU5j5Anb6Dxpry9M4ui8CZJ73iHztNfKt2YrJPGycXqRQ99WJ4Jjk",
  "key17": "4oD98dcqPuY4XjjzUzngohUJfm2NL9VeXN9tZRa9y19ad3W3qu8yN8thYnNtYKpzbwefwrnEtJbWg4eK3RpBu4mE",
  "key18": "4wpcppRffCHDYx6yhQf37NAX6wzEbr6x1VPPQ7y69P4KywvsF14VjRh7tMkFWk13jKLNWEMGdNGyLWL9R3tAdZAt",
  "key19": "4Jo6EJdsdnNeK1EPXompeKpVU7drvG89T7pQ3Gp9Tm1KyEqaM8FVVwmi9zAy96HgVq4TvysWDkbzu1vjrAugL9hc",
  "key20": "5jxG3yyYC4DNhU8F6TmZyAA2KgcehfQZ9KDYzHTXAB2wjC2sXqghvZnGtRWPnVt3wjRADaVbGjmn26Mzezwm1Vn3",
  "key21": "4qHsegUJCoDmBpjBKpQfWrADguyXBkpTicPC7k3uVCYtHP17Ub764bvUXhG85gY79h49FZyKuTd8FVsaW9nTXqPs",
  "key22": "4xSy3eXeN2BTknehUzvjgmW5iC8P5T8ujzEu7y2jgSiAuCXshqWYS3fLsdpMDFhDX8zJySrc3ywzpGuKxZZPYBcb",
  "key23": "63ZzsFnHDdh8DQfHoPMUVzpRJCziN8Ux5vcgV8a9cRCBwRi2Hgs1b4PSeQC6RfkHUQQjAUHeuKUvpxLSZfvDMjGd",
  "key24": "59KxKsVngXMiu7YhUWspZP9t1A7JV1bpLUnMcbADgTkS3x6v93jvJATKmCpMVYDn3UsAc99RSraw1nfofZ2uhob3",
  "key25": "Y7z56GW5wFYLHzDbRsfpzwt82YNbxqEuA39wPAd6FhQyfMsRdaAk17Ka9bHcskXQJAxG2rsa1sd1qSBYu3JyMGC",
  "key26": "2Bs19TT3YuB9p5U5gZwVGGedma3T2MpTYejh6T2mhjeZa7U5xHtYGgFHYKajD6QRy52ftQ4rVSNuKCbyjFPAN8Hn",
  "key27": "3HZV5MeD7t8RhQCLNiyhEkgDJG5R2A8ss6deJ5DEq8FwTs3jdF5uruYcP5NPgA3KgiJP17wYALWupgSrRaVj18L2",
  "key28": "3MS2ba8UpWRmEkkRcyMwyRHpEaXjxyYrWPUuow7rVwdA3VYzyWQWhqfhNMr2gnqqxNHUYXWVoSZBqrq6wUKkaTAL",
  "key29": "4Agy6A9paci4wKixnQNorPgwbqobZiNqJFco2V9TgJuHxs4Z9RyjBAES2pJktS4zy9fYBnzcKrJiYj5qgFUJEiSq",
  "key30": "4edSrByDLAPrZghjH7g7JfhQWLrL9TVFRJ1k3u1GtG2p1KQGsT8FnL7yvQjq2bCrWaeeih5rpFxjkJsJCA9ZWYRg",
  "key31": "4TPd5Eb7oDzYPCKua3FRAMHfMLCutrYPngRPjqEoAp9mrUppC1eKiadTBxHnQuZXN3B9Vf2X3niJV2zKGmtNJpnk",
  "key32": "5cvVK8J6155DjSM1k84JFPkVPyqxyZW83kkSL3h3FSG5rQHwM6nvxgaiQz94GqWna46jzCnZ1MGdRxqBYaqRufqH",
  "key33": "C3k1DoUU52cPYC8ugwcfrNWeZ5ZUjk77FLuGP1hNX1gSzXHxLuk3pyrjpk5cka6Ed7mZbQvVNZVvyw5KH7BNhQp",
  "key34": "WSmyK75mykoXS6bjg6mhMc75MMNn4WbMVmzbzPcvFWbjALe8Ubf5YJXFFb8xrSBVpNK9jizvBTYpm5iZvigX6rB",
  "key35": "BDXaH3j5d2NNQvERFnR22YdH1kANYLs5buqopyfFCKSiaedRD7BR5XHW8cP5D3RWV7mEgzW1PyAwyrhWdKBSqoh",
  "key36": "3UtgXJu8apxxGtGZpoAeRA6JZe4EKNg3faHYYqqVz4aGo7BFxTf3XkmezxsvPE7GPychcYuiwzXXH12EqiwfH1m7",
  "key37": "2XDW9Be1xhpMQ2ohVEkUkPeeBg8zohdPVBBYHRMFAEXuMmvqxWFX4EqyPqM8gAr7PWLSds1gMndcXyEZyUKAuBPo",
  "key38": "5ZYhxnNQTAU9LVdvs8PiasbHbQcdtU2JDpx66wz7AZG9v826zT8WMHzR2tHKHRoTzGSNFSrh5fdpMdEHJFBWveVL"
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
