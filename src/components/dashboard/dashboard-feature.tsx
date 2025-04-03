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
    "5CcN14MajK7Zy24NcA9myJ7VuK4JNDnXXZUvwVb1gkfKVWLLZRcdHAdxJjSEDr7KxhQRMCx9rBeSehCMtvttsyV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3wPbBX9sGggkABqKAbnPkHZU41ZquoGzafznjb5CfvTy2TDeQtirCUQ7C2oRLjTzXK5vSGRqqhaXFs6pokBTfG",
  "key1": "2DLcdgZ1Dv4VpLnrBxPJk8B39t4NGdtnphDRUVwLqYyLqfCMU1vrAwc3bg84gm2erCjKmN1fVBQTV4SgBxupUsYT",
  "key2": "3LWtXsBt7wJ1GEEcCzf4ff7f17TWurvLhtkuzCtyfs9jh3MahFH7oMkqqeNukgGUWy1m6JKw4mDhPEogfzVwPHMu",
  "key3": "HnLkFedgFghwQ41LfGpMEuSruhRtXEVzYkyTvXsdwWqd6AASbSgvqBLjhw1rWdNVbQebcAEBQFQbtVijKtVkUoT",
  "key4": "XDcmawpViKDCvhqgLfZCyemp8magqEWr2VozivrHY4fQXgMi5bJYPU8fXgzW6JtuReifMGDqJNw3Kz17J1uq5PJ",
  "key5": "HQicoWT6UwMkC6LKogT8oLpeQvTsZh37peRA4HUDv6ovAcKpBrtpZisiA4rx5VWNgQboG6Fyo1rJnLJqBWnb2fv",
  "key6": "42XMaqHgzGryMcxgJDfcnubbNUFpRLFCTpZ42rtv7LJevUhvQGSxXWdkm1u6jkaYNvXrhzCZ3uoLHfZXPUjeD2KT",
  "key7": "29dwhayP4vdAsbDCYBiBPEHtnD5MZ5VGwrrP3yg6qK58KgQLv6xMGLALPohPzXHdn5rRnfoHCKuDYDnHHoz8KpKR",
  "key8": "NH93DjHfpzv4rhoBtqUXgRsP1jdxK2sx7T8PcDtPgMKHsJjD68Lg6PCzy5F4SwfEoRr8BvMu3XcUdDu85wqa5bk",
  "key9": "rVaVPM8MStwWr9DuL4S2fvKvLq3rt8DVEEADCjkekY6uuBBGXWX3gKWAPEPoY4dtLUuoxWej3USrExueTwsQ7We",
  "key10": "5LdvWsZTcqusnbrfUZCMWrThTM7YmgRMc9QzbSEMnF44UmY1CkBzfjzT2DcXpyZwLijKh5NLGGv1snwvXeFnm6EL",
  "key11": "j25skK86AFgQQcvVs7bBp6iqPGC3nVKGBng4yYTodgsYxpmgq9ZLq57UYUsJn5qa9qr9MjJuPE3PeRM9bpbLEuq",
  "key12": "2HkddPGiAmm3JvMxCMRJhsomDvZguY3hCnbWyejaHKn6N3SK2Mhh8wxepUhdGH88UFxgUYatgviyu7uoHo47E7Mg",
  "key13": "5on9A1z7DUCGZ9iM8m6ThdvbP3kMKBckMwQdwVvbj9zidVAbojNteDiMZfBcYUknsuM4Vp1QoUXdvqpjzhoL1DF7",
  "key14": "65Aw8DazG9hxdmLsnXueJXrLLr46qdx5gFywzbBRd3fVMzx9nwYdWVNMtJrwKEFZxTVt2THv6uuYH8g3Ha8EMMFY",
  "key15": "5LgEmwbXYuDFvQheLkuTMJNKnJxp3tVkkpfBii4QDPDrnokN37TAeFGTk1uA7W3P8Sfd6ZuH8y6d5AQ5n7R8jY8g",
  "key16": "2iJ7f77ea8CrLMTcykZALtJSZGWoarU6p3ynPPqweaUDGER2Ys4o8se1M3UwbrS9GjdtZnYWnaYc3qAkbArcwTFb",
  "key17": "4Ybs9fSnn16XiooKMhMLtPPXtQjiydhkCBVhQZH8rMz7itM4XytFe2vaN3kT5z1R1VGrJtvjDgSheug2yL722ms",
  "key18": "3EGjLa9RT7GX5FUpPhovtRrw7jupfGus1bof941ZrZcmXr7aXnU5fxNcW57WXZ5MDsJdR47SHajpDbn8X3t3N5kt",
  "key19": "4bEGxV7VwXTReLp69xJozoJFet2Nvb3Kr7BMdpuh5DFPmpSwDqYjQRB9ywoSPxH3wojJcAj1gdnUJKYqNzxEYxKV",
  "key20": "34YaZZJtPRcKDLiY4jPmzmpt85keJ3dx4ANkQLj4234JNwXsjiCaXt9fCiixKE9MRz7m2hwYHoKmBALSAi2Yc6DG",
  "key21": "3dSa2bMhSnMEDGDPuhTvYt6vq3ESmxrdV8Qt5xJ6M4mZmgaq9R5y9bATkhTcwWvQbz58NAiJXRTWttszPdRw9deP",
  "key22": "MiY59pHibe8UmUk8LiNUhNm8FoMcDBp6NsDC5vNqxZg4yeviQQXpzkej8M2qajC2wEzLGDWWZy5BfizcLEP3e6R",
  "key23": "4aaaTxUdZfAaBCDV3JXouqkSKDDUqdKRjbVuDboscr4FQ8KTELDdu2p5x98XVTxH2iw8P6XsLdfAmwzwhK4E6MUQ",
  "key24": "121uLt1HBEYxopx8Kx1UMRCAyL6cWdBDWpkxketMjv6SAmwHq56Rn6QzY9EuEgnEkhWca28sBsUAMAjwXRBoKfZA",
  "key25": "4drZLQoKDUxTQijJh21xo7X3kbDTzrpbS7Tyrc8aMxTFeLHfmT89HBo6d4nTHi2HUfskqnwkhGMquWHANdg6jjeZ",
  "key26": "5zTt5mbqMWVHG81PngGFJuVwQuJkHbUEoARZcvicCEYC5BwZBQNVw1b2V4uCLL9oFfbBjZ7Jr2D5gn9zd7QxvYuK",
  "key27": "4i5ZYFUfdpgYDGmB4X4KtVWKDgwdzLuduMsBJoHr4bcTyEmbaUEXus2w9crhq1JPCifHRjAwjdKudpaF944XySyx",
  "key28": "5JbS7Wh665mVeeeGj1PUaM6mXWSTX9Rxc4szg1Xwy6ktHQBiypeGSAnmYFA8Fezrw2KyY1W3zkEAtGmfi3BF9wiu",
  "key29": "mjuwucJCubkio5oqV7QNTmrTgJ2RT55vbGiQER3JNDaS35iNNzsvmzK7h5Akuu6NEKDcgstAa7aqXu9KNr1K9iu",
  "key30": "5QFwkaM6oUMgNzqNJQ1yTsbXGnSJKAA9hjF3ebfitBW6khA6qw73WVWhpXda8aJfuPfV75Pb2PxZPEZrGjcRCEAN",
  "key31": "5EkWt1YbzKp4erPW88KbWj1jv27kgHCSKg8xJqBFoTcC3aU8w29Y91WzRoAsDMi8B8tvDU6F1JQEeYfMCd9domD9",
  "key32": "4itFrMFVvfMrJuyjvDG4zBaDXkaDuHV9j2GBVprozYt6ngUxEHnjMYEn1yDgDUBzDiPqYTjqxabNutxxusbfnuw2",
  "key33": "2rREpBpkkrDAT4ymX1Xz8DYG6gYHbjtw5hXFtW5FBxMy1JoUBNehZDBzxzH9kMPgFhJgQJjMrKvJkdm8RAiNCYSB",
  "key34": "3Yzd5b2cQip1mhVKGy2k8aEiaHi7Nxr26YjhY4NgUtziAZVBQYZGjMaf3bkBg11VfuWFaGfmZagyCqFqXr8Bbakx",
  "key35": "4N5eRDciV2yrPv5VR36rYtEFfA32yF612kugdVJwhkSRmQaU6EQ6FCMCZK85BahSW7Wx7Uq9ZqKwvAHctFnpWsto",
  "key36": "GiPYJSuCbvEdYyneREuFvsDmHhBFUoSYjQCUSsMG3PkMtnoN3rg75eqMwbCdY2cALxM2zu9M7MPPQDTayvJnXKc",
  "key37": "5E1PakQxXBVsLo1Nh7Z1uhE1Er2rcJGQsWcF1qURoiS74BxQEW1SDdZA9pzNuBHt6mwdGNihoRN7CDvYKmk9GEjs",
  "key38": "2K8htsRDLHvM1ELKVauBcLV4AwDbNp5Hf2Txy6HS6tUo5Fnhi7RCbPdwbdq7Ph848BB6Ai1utwGw118UFdZKHPGP",
  "key39": "61gomnnTYFrz4zW1oECyLRMZJNnzcQRyAGKzyGQdYWWB4FCpMBn635ehZCvDbWMhxPRm9yViF5cb1UDfsURD7XdG",
  "key40": "4zxc6kUjgVU7wRBUfg8BDq4iuann9wDFzh7Q6fECE3d3Hvo1Q1BJSc5CnUwm9Q4mPJm42cFqq296sWCXcTRUACsY",
  "key41": "3NFkejg79xy5GEnkFV5ECCqSggZvYc7J118bTgvvrCnJnhazqaq8VxWGYxQriWuZWRdVpRDpn8mYnfgrpnvV9TdM",
  "key42": "ym2PX4zCrmn4HRXNuDZzJycxPXYB9FVSqwXkw4ZUpFQqUy9DiT2SXcKQifW3JVM4nNxXsryenWb7fAJp3eSvMuP",
  "key43": "4ENyVjfQTrmcUj9YweLSHjDNhaHwCofQ6kwq6ZB2mQcpiu4NkEnkzhUnL6VVqbachJqv3hsFLeDiPKPgMwkvy2xY",
  "key44": "3aENkYgKcrjQ6cMivcUGcMtz74xcD9vu6UioQFAMUyxkhAY6yC2K288dppXRXRhZppfUVgUT4kaeM8XLsiJMzNkh",
  "key45": "2sGmbwZUQ7sacYCdAybkh1n36fRmDiNicDTbvJ5kBqbpr8Zy37bjUbwZNRrnBYZt1Wq9FPqnRrPkohvr1chh7RW4"
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
