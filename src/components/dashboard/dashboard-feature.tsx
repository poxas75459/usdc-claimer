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
    "4hSH4gRfkMRAhMzXAxPsahBTpnH313gCVFNRwh4bK3hMrbEvBUSxovcomHh5QR6oGpszypXb2WoR7aEhn9vvtTGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594ES2hYtA1BksT8RHL4M7FEdVsyGRjP7bJHozYKXPi1MubUJKhxw2LjCSGKBHMucyHHMevtAatApDigbCBdkPX2",
  "key1": "4Ps5iPAPt9kJMDTEBh1E1Vu5m3Es5pAVfoRs1NTk7ik9BnUkC5EdYyWTkNqVTaE7rWkHUBzQPiRb4sMgTkwDrkvz",
  "key2": "3hwvnDmVdcDvZgizUvxB8brGsXscn9cne8VE9CijBMoHncK8uG3cobYihC57g2Bugz2jYziTkvvQebauVfWX436s",
  "key3": "2zte9NppYK42W6NSKyetM43WUmG4tcN3NcjcZEvYrGTT7FRN8Qgg2XErkAFFzng9V8sywHunprzjAd1YWj8ZxhnD",
  "key4": "4zJSXzNksFzzGK6KxjM5pk75qh7QiCQVgaize5DjBA3AQgmv6BNaKQrJzZgztra7ZAV7b7VzhwyNnZgRLENu68AV",
  "key5": "3scQhpbDFR1rCnUhZLz939fa2UttE8uzTsuqNCXQjzLVEF7siNC4i6z4AegZrwguouDWTuTMTz9VYBKu7bgiWK3x",
  "key6": "VprsjSxZqLyGJGToFeb3UibkkbuUPTEYyFuabzHXbXPPw2R1U36Fg8ZDmauQgcHxK895EVYssDNXQgtdPanfRFa",
  "key7": "Kh4oG3ncokTVsxvXVDATfyFzDMzvHSX9b4f8MaygDdreZyJByw6LEmH7GaPuKJmEpkvVrNydfqvCfpVbB7kV11e",
  "key8": "4QYB4G9VKoikqVCyJpxS8sG99zhawEQnb6aeKyCdxEg8Pn3sozooESMubYZZtHtE9XnzhfZChbL2WcbrRerAt66b",
  "key9": "2SF2Ms6MGWFzij6WQSio1rztsbLsUZdjA8FCe4PdjtPGYzuuJKnFRAFxtZrYD26KgpK4ue8neHwLFDG6weVPtNfz",
  "key10": "65fXEsh9nfPjarFmfVpp2ju53CHcXBj8SzHTE8Yq8cUQGG4kQC7YC8br8wB3gCGeRS1AVaSKyS6TCYvPgzeFqYYs",
  "key11": "4HAZhHwHXcSb4mBpsA8kKxJhZhQifgu4uYayXx6FZHwJZHuT7sMbdHNq89Fc7xdqyMWKnRBLiAixnWGYfGVMW8WU",
  "key12": "4ZmWY1kiw799SJCj4sHPNiLE232ZNsKRgV8Kyj7MmYvsuMXHLrhXfcMHj1knXE6eT2fjavM5KtjsaHG1Br2kC7fX",
  "key13": "472Vm5r34RqVf3KumW4KNmdF74e2kAUR8NH4g7xGhf1TaiEctV9uS5eyB8cTbaFH6BEYAhceo9wacm4Ek1vuz8on",
  "key14": "EqPBBXbwhWqjauKkuwmfumNiZTaZ94ZiVbyoEqNcQo1p5gqHej6kthfGy3y4d3ZVy79NEtqQ8QGuqetgRqeAyhy",
  "key15": "jeztLBPh3mG3djGBYeWz9qyWpBWaM2dtB4KQeL2p3p8RFq8gHQbHGKAV9RNLVHnshQuFjJ786YLhjFGicTxsZaQ",
  "key16": "2ASrgxDDWU2HhMaGiWZnSM2j7TQesmToY9WiLx2SmiTnbqabHR7uC9zGre1VBezD9V7Fo1km6hxPGHR5nZ4kg4pY",
  "key17": "Zip6X24nrCRUKR41fx5eSGNL597RPeWg5UAJLKn3ugvPcyLMYnimHNXk4NHe1yUv6hjJWnruoUNCSz6h4bcMMXz",
  "key18": "5NMemao9LtVMYPiYfzYAhisSZfcQsfDaAX565xwUVWdKZi1Cdd2m6okqaac2uWWCrd2hdfzMcxetacZSzf4TinvM",
  "key19": "5jyV8XxGfaySLDJXYks2HbSXJSKtggKmRs1q5mKncjgs57jQ8Jv4EXziByp4tVTF9g4tq7BTjKywjV3doPBMcLtL",
  "key20": "4yeWwEcdq21o1UFStEeGhqPhnDbQhiNVpePAQNiPR4e1occDdVNYDAh7D8xLW3vE4hFVv92EDL2TGwVVR6TBgx49",
  "key21": "2o1nYufzTasqqc39aduiYNvd2WrhkviFRcy63vGpG6V1a3pD2TcxE2wHTrYpGcoRdY5iqQD5NdHvEuxiWaA3KyW8",
  "key22": "2CW8wGHMQ9zXFNtUKe1uieWBDBwx6tCV1fFUcbiwDnA5ot48NG4YNtvH6hipncrzFvV9Jn3RX3msssfgHpZH2voN",
  "key23": "216s3PeM7awQ9Df3YXkGQJs5MMs7qij3W1bK95DCWHBL6vrvqwbs32gBm4BRCgF5JgtQjmc5MW9HyANC7pee6tRp",
  "key24": "2RJZgTArdxsVL8QBxGse6wyHCAgADErS7dK1GK3k5kVLwq2FJ4w9CTipP1uQGvKJitzfjDV9UwMoj4NvELQZN2Wv",
  "key25": "1b8tw8DUqTe4hnEM3cyZHzMKEiQqecqjsniDHLyvwCqU9sBuDTJ5G4Y2ZGTamcBnaTaiFJtHrAi38ArogFMPSg",
  "key26": "3ZBMA5QVaXH7Q53Mdk8euppCkjpLA9dYXefLgi2K8D6KN6cUs1YxmWyPQzWpYf3fsEdmv8zBWU1AMJj4a6Hzkm39",
  "key27": "kARtMN2yqqa35GeCVkEV9GKG87Npzppqy6hHnDoiKEjFHih45dA1Ve8QHGxTGnbQ89KMMXDCprTwuNmNFM4X3ZZ",
  "key28": "4yUJ2rCSgVHfj2nsFh2uVErzNEg5ho2rftiZUrCCWyHcssRotJw6jyRSQZZ2w9vbYvACBd89ESAZ682CfqGVfeVW",
  "key29": "5RwpiMVgzw5KdLaVTSVt5wXWTp12ZH2vENdAtgGEXkqnLCBJbCWkAxKbRKJqRBZgG8Cn9v6sLtRMqvaJhJh7Tgmn",
  "key30": "5tLkrdUJRcdqwzXyxzZmZQ8d9t5WYmXYKzWmTiUJANjb1ArteNUUjAo26mVPbudZkyxvAUo1GYfX8VAiXg7NV1g2",
  "key31": "5KDpoQnAG2yfHc9JZuPJ6sR7XBfnhcQSytdPNoYpifxEkgiqyFtQ54VEBocZ3WbWWAovX7h49BupukyLphzRDJ4K",
  "key32": "4xcveUoGJ1GSrnUedws4b7m9AAEQUvWBo8p9VrGSPwwSu9jkz3cUucdr6LnBy4cG8kSFmG2RfLmVhrAGUpCbQKzT",
  "key33": "2TfZfa86jSLnUZPgv1sFv7Laa4DPsqk43Bw67azoGfr83USecELJZArBhuU9MjHKLCd43tPX9nmjGRBtN5dhtjkP",
  "key34": "4W3zfVPfRAtTc6cjiwRHKC82PARki45vV7VDtp8M15go25juXUau6UyDn3VqtRnkszFmy3tijGX1Vn9ttoW3aPAf",
  "key35": "3fZwxu7KdJjXUymoYoPGhL2BSBDN2EjPoFoEyFy7SjepDSEz1n3Hj9HUJyCDciNZV9fXSdws3ReNLeW5S3CLcJgW",
  "key36": "4p96MhQFmCJ7X4E5fKivRSA4Uqk386oHmbbxs5asJyf3X7wnxFVEsstK9ppKDBmQHrFA75Xx2rkYgrggzBj12S1c",
  "key37": "4BtwXc1iCKS4qx3DxVynz69PyDDQj1jg549aBBkpHPsZNXf1fsEhh8W9FzxaLJS8pVoXJDTxjvZcu6kkur6fTc62",
  "key38": "3qnLCiiXPqjf451FunMA8TGeEXYoNhjJWKCYvW766AE2H5CzEH61MvdGFPGW3877d2NVjCh2dwRBRhBj7iGXoyAb",
  "key39": "5Xst2g9qffnVm19McvHT98Apoxqh9BVXmF6z9GBvh1YjBTEaivZUSvAP69LGSkXuYDy4swGMyA4XsPwdwbATxLnk",
  "key40": "4ifhjPR3fKqgEkzmDUkhhmaZNzkQMUsRtirZZjcx73h1VhrBoqebVpP5XVHcu99zrLPfpPoTWsnjaN9Y7WBvrofw",
  "key41": "2GZhQsPQJK37hJ9wy7ZC9bfm88rKZQDpmue7HxpQXp4UExTkXfE8FzkH6jBPfEP5hUZR4VpLqKxpstnhBgxRCk2v"
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
