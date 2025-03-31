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
    "TjRgka5FyjbUjB5hRxc6y31MuZTn8ckJg1M621fMbymf6pM5mZ9WCzspcimGUnjtWQih2LUe21C246cwTQdHfPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cfPKVmdhn5JPsvJQvxtPGDMT8L5VtK4fuTWH3tk5Mb7ok3GRyV1P2NjJJ8Wp5PPb88yK5j1z2xkRTs9JzgKSCs",
  "key1": "2B5VLvAx6sMq4HYnDsM2L55PgPyy5xzbxFiwSZ4o18CpGjgKTaFtFyvgCG51jSvj8csDxhz6xDc9j9yvfY6MzcYC",
  "key2": "27YVFK9a6iT8Ndr45hrqaSWcVhnsWMpDxs1XHaG5pk7cs6yXA5QCDqNxFx3aZtic5NihxNNbzGAvhfQ7ENzpBGPw",
  "key3": "baioCd25tpEvRScHhQhCobG2TErP3iWeB4A4bwdVjNpPmQMGtYzYenuCXSGByyaziMpCxHY2i5UnuNDqxLUQb3v",
  "key4": "52dQcoexwbMVLuQZSw6PhGp8MkCMg71jbdixeVJeThA31LJCSseAGPpjZuK7Qakqaug9xXWLFXeeRaDVwNqJJwsy",
  "key5": "38c5eNfuPTeEa9ca5mTeR6HC6F4Zz1D3o4XbZA39pvwFx8mYt8bGMzKvMqdAq4pQrjNRrr5JmXPUS8eYkZkEZWCN",
  "key6": "33w5kRqqaFTu4riYJvRu3DiuU8dpuQ68NeghZy25WxFUZkMrLd3XdiMVAa5S2p6DScqoCkDzhVEyu2TLGqcXxmd8",
  "key7": "5DUCXetnaETvmFw1hqiwGajEgP9yNqSuZy56K5otPSAnyeBfi52hnoCdsQkEADat251guEgAbLsrZFnRpJyF9Z35",
  "key8": "xEHF7JQMWQGJ7T1bqbY67YgK1aAsfdVFAikvZkH1rufziFiaCbKrRWPtVzdVBCrxs8in1oiZwcvJBUmVherBYa5",
  "key9": "5P8u5v5bGHFSTU2TqyKbhg3nZ1wy7cXi2S13jNyobYSwf6NHUT5F2986fDLctM3WvQkZKwqmxF2nzEpRqbtpBEEP",
  "key10": "2a81HmBycVsfF3YkBvshrMui4L7vmH2ZsEEnZXid8hPTZfs1gSQWhD1BMrCkLKGBrB691U7s7nQjb2J95AQ9mUwu",
  "key11": "2PAWKMcceQnYKjqsBp7Y737sw3ueNqLUuXAjBYyN1rauniLYyycMVoQqUv27oMvhMCeDwTzMSLDgfB4CxeGzCqXL",
  "key12": "5eyY4cpBbei3kaFmnrcM8YYEdAQVBp52sNQT98MZiH82tCcpKxrmco6EdmijMLGMa9e2ASnW6x8ThSbHo9ZLa24j",
  "key13": "5s1kBKaHssxQMwme7i7EWvBmJsWtXqPtD4F9mW6MA6TzRrxkK4igGByFN5VV6JDcPRuicksrcDTZY52vqZThEXZH",
  "key14": "4Bu7gR7sHfdzZTnirZEBBmAnj2tvBRWt2zQwSMWkLmNbWni9pErc142hm8HMTBxxa6Ex9aRSCd4CoX1hS1emn18r",
  "key15": "JaUvjm38f5bE9YSBfBmRnkQrdvPjmfxjRVaTVuhbzwMLQG5p7vN8Vw4umcBEd8xjMnKtXN7VZ8wU6Cwjm6t6xwX",
  "key16": "hveVgbfF5C4Rqe61fP5tcwyw9aoKK94GV8ru41iCYYCASyKFXCTr4QmaSt4EumaGatnN4VFJdNktxnGN71FWS2w",
  "key17": "66T15gRPHzeYt6qEAnLvjp9LwZ93E7agekvajfaP3QPNjfTqLr37b6dNMrVZnE6gBDuxSa9MZEgbxWsmKSr7i9Dc",
  "key18": "2bt6RJhgv9zzqWwNJBnTFo8uSTfYVDCwLcUrhJRY8oiANQxn82DMqi2rEWkQqMw7nusf9Ds33ZfGYio2ifqdthCq",
  "key19": "5jQVHAEGJQQsaChkRbqJdK2ajgLiWaQCYimzW6KzSYa353KnQjW5zM7xYdUDpzq2fP74TKc8VrgDoxrowYf5y5jn",
  "key20": "66opmF8GZbXyWCKSBDZgyRGXAj5k8JzqmeWPZE2DmL321TkRKfkXPQkuzB5pkKF7wtVxAnJGs51o57wLmobXr4ep",
  "key21": "3NkdFYDPoudxWsmDiS8t1qWKvh6iGDd2BLN2ivx41p7ejMJJhx24nadYkfbxNEDCL37Ht9CFPzpGWQGJLU63hznH",
  "key22": "2X5Fb4PerP4gaEMwY7H6q2uESfu7SaD1AweCZ2vnkrFaWE9A4sXq6XxEq8GCD6vxBca1NKXTfs2vJBZb5QRCSmyq",
  "key23": "4ZsJ15okQoaN7zxkuCymztY44VsR41vR7QavKCJ1yogMZg8uvBfZc8SjGL2WVrhAiWdq3M5LF7i38Roaw22c9w1m",
  "key24": "67H1Rc5w5dk83TGQtoxSFE9jNofhBGpdihptvmSfTxF3xD3xHcMgSfRpMG3Xhu864zjK26yaDySXBg3vrhWoE4zK",
  "key25": "2z1CZypYmtY196qkQwSF6MFCkeSmQna7gKNHKkHP6mKy7upVUQ9dqgCLkGZ1yxfZ11QLzSadAugxdgxk4SHgbFPm",
  "key26": "4qUk2rSTEjY34j7yPExNcKQxVsBBJRGC63hvXzk5BMQngU5hLF638AA6CCUM1Xj8SYfC8vDfDu44nutsV58AAXhD",
  "key27": "5cAyJwCUnws5q3CjHhqTtXTDwn1WFm9YK4WPfEWWnAourBj73KFgJZZRJwLS88TSKRno9ouzRDDZUwaifC6MxUtu",
  "key28": "5AHjRv8CewX1NBSLRim2iaammkSVRX1aau3PCb6u3SYtjpSvxmct9ZN76DQWNHHrcfD8Huei29W573tFvgMkjCXY",
  "key29": "xiauZbp7c9EMUgQCGfnfbNe637jUDstMhKWvLNQZsBsgHtiRzGen5yHMwsTPQsSB8oNNSQkDdy2wNyePPVvYh8r",
  "key30": "49jSw8PVmnnFEK9K4RHcCDSoUkjew1BPfR1rbvDBB1vg8o59N1r8nALffdZQQZtRvz4bDM4mc5DEsFm8t71DubRr",
  "key31": "3SZRdEtUimfZ2HPcFUWmjU7P6BnjsrNSpL3GS4UBqrXoDFBKz2dENG8rHqzC22gcpG3QcPubHHJMPRyaJDc5MMNN",
  "key32": "EzaxGpAgNkxHQUfKSrutaBq77kRHFhCyM7j8sBksGjdD5k7bPLDYB8KNDFKYM6wqm5ns6g19aKNfHbX8mgsJXBE",
  "key33": "3yxi2dv3ibQUUXZRhtohjW6tusUutKA6qxTQxwpwz4quik2HqcUZ2yHUSycq9SLNZoqD7QSFArQuYZe4J4vmAcwE",
  "key34": "5JsdssZTPCCH28ZCA2Y8AwbxyVLJbWW5ugWanZZespRvUydd1UY5WhnMM9jTRVAtBSsexq8YcTWc1rLMB39BDrH2",
  "key35": "2FCJVVdQgZ41VQWirEnraxXA1Bb9WN2g3mNpY9MiCyxLcf9rcM1MdxktFhrqwK91eNkoPLrjDNue4cmM71DcdVFM",
  "key36": "4VLCvwjb1gvD4AvNvdMoXKWzJ72uWBy5PtWuNxtWkgGQf5haBKebUDtu32doiwT198inR9A9MwuqmPA8cRDhgFn",
  "key37": "swwbqSweGtErxxqAeDWUUUJkvEz3ix19Fr9We5ej5G5oe6n8MPDuMz2wibEzZ7tVQuQH3hUow3TMXyq3yAYYLo5",
  "key38": "2fSVPDFWAzAjKPDq1X3Wd2mAKBWemxck4egDuaehED5DyhaU27mfuQqagDh9kqd8uV8Pf8c2memu9PSDKntdT79N",
  "key39": "2v1L47BUMz2m2ttE6EbqFtaNoNN1a2vrfREFuxQan9vsQXmeX8GAJHp67TVieSjg8uXDaFxhnwa8fFp64bazo7kC",
  "key40": "vPX9fnKKaCTMo4EEg4h3yLdgG1F3MYtjztxWpj3KuNPa9kjFrkXGW2PcyjCEtoDDgQxcJhhBPHyxY2HrzkgAsbk",
  "key41": "ckogRtMLje1j6dAZbP9MV8mDyi2B9BGVqnXseZ8cQtJ9DNHKHYFSmqdz7sPWvTdfgm6qXPJzBMUZDTErXbt9SPd",
  "key42": "3HKgPfzeEsAMVqafUkJfh6Y9yW8oadzYRQMaSM5oH4msZYADhJbECVKpiuCwYeow3Fj8JNt39ibz3iLpvpBHFEZv",
  "key43": "4uG2dGKTzzrxUNkQkVGw4BmetUdbjbUPqJPBE2yFxbs8Yk7Rm5Dd7LzTFxeJcrrjYFHCHACaLQoTPJ9uPstgAjsq",
  "key44": "5DVuvcq396PFJa6Pw3mtCQFgGLkqFeooU3BGWLCRbtyEyLbKJj4NQaTTC3yauYe4JCV1qbqQcL3eSM2qFEoLzayT",
  "key45": "47LxLxpcHnBpr3T8Q3QjNTKCVACUxxfyEK8p3JMaJ5xAyksTuK3ahkaLfifEPq18ToiAZpzWhK5VzbVVoTdrGyfo",
  "key46": "4gXiZoCeEacjdeZmpfSnehzvZZ8cXXEB4HrVbM98aUbm36ZNzB2G3dVf11gCiJDFaNhYrFKkZ8YWxeBr3PP3UhTp"
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
