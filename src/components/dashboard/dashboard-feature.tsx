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
    "4U4d7ygh6enhe4TA2pH8J4RL3CazQ8j41fZecJ4SbcMaBCwjnTXegiu4XUfydjUgZVgsf5pZNpgR8WevkrubX6Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaAnN8o9AcXr3Wszmjk3pJrfUDYMTwZbTZghkzr7p6KMFScriebxWckoas46bQWvMXLcshMrZsBiYAcqXYDphbV",
  "key1": "3TcoTQdCfisZioXAeAVCs7MYqbT3sWk1dvXBuy6dhxbeAUs3QNkyPfsNXpcc8HDpZV5RLjApzSiowASoVcyVjxJF",
  "key2": "otRf7afbWK5rK2rLFQZ4uXdR27vyvv3zoG3VVoaqTQfy5ccBFWyTZRuqyNTWTGrZg6cjUiGBqwWhdkRWzDUpSdA",
  "key3": "3LBp25jYtPhFnF7rWaBdXt5Q7zSrBrnoz1F5VUL8HBB5HwWwG1fuo3QqCQEEyyg1XDbAPkTeEzDmqFytkndDrcSU",
  "key4": "5oV9NAYAVVFecG6aSecuQK46x4NeYr9ypbfK1LPpL4M4cDYFz95jr2C9GreJBEh1Q9FRBHs5RC9td8M8EzLCGdp3",
  "key5": "V3Vgs8qmVVjkXwYW4wM3U8x57hnvq4EtJPPDxh9HbEu2U7xJzBrkmsP7LXAvobKeaY2fu8XsCvkCkHYvEEcgGUg",
  "key6": "gFsf1zejfNxMm5psgBhzFLAeE2SzKHLBMqBDZMA9bQAyXq4kDzpeeuk1qYoHMUfrabRTjmZkPPeXV8A1oDMUQ7W",
  "key7": "63EShmiAj6pzTZqSg3APmxa74s3wdQXcCirfQkYbzdCusQFUNAavtzSAUQ31bypiHUGLRkjxBeVcfkx6TwjKFmty",
  "key8": "5Er7o8oV3huZP8fyKiqKmzre6CPi1WYEXY3JoB7tiifLBjMDLTieRWe9uwnVwurxSi4VkqfoHX3NWys4qpfEPJRF",
  "key9": "786PsgXrUcA3wjV2nueBi8SzZZEkDPfbru1mgAgoP5fGUFrULVj69dTspGt85gMfxPRUcmD9PfuRp32LWXsffRE",
  "key10": "4rYYX8kAmvFXnWMLoMmq7jGQnP8TjGd6rH1U5NQHM4ZZxgpxhpa1HBjdhj7zjzpkVt8QxFBwtzjoy7c2r8V38Gov",
  "key11": "52VRQkZX4TctQig1LrWnms7juzhNsBHiaGEpehe3F6uzooBBhAAZ5dtQRPW7j67uiZnquWiJoZKMxwbaPUc7285A",
  "key12": "3PqiweDRA8htDES98EDs6YJkNehjnLdw5MW943EjtC5CfUHEFioDv9SR5LhdWeNzcGE3e6dPswiJvhpdN7QJrFFf",
  "key13": "314en7vsF72jnZp62z4xRAJ3C7qkrtEyp2DE3GPq4EfDcaXhxBrgSKhTi5izdQKDh3bsnVCwba72pH8r66gXmNbn",
  "key14": "5qb9VvDGGS2Xhe7KXjszcLEyoDxLB9PrMKfxo6TWn6vSszZKiuCcNaNnMsChoBRq4D8TNTAPrrt7LkhaZ7n6xcCs",
  "key15": "2k1SFPjQT2mXxB9e8SH7mfZ37QbkRALnRihDvMGi5zAQjUEgEJNEsBmUXvs17uYD11bJbSdkfhyfXbHr4CaCJ594",
  "key16": "5wjz7FtMzTo5ncQcFfJamVc81U5AptGfT1WGMJHQ7Bp2Bi8zto9Se2WZvEUmntiG6VtVTg26FcGFmFn3VoFbKVG9",
  "key17": "5qU5KMeCogcBiPpfzTVBR81vz9SdEChCDnSzkvWWMAUfsbPuuFDwtkBoXK7aeAwG7FaZK3rnMadyX4NWwdutp3pY",
  "key18": "2uAzm9m9sV82F4EphGNfjfKU4pgfSwWDaeAjmCDKPsCiHxAyTsrcCjs9JXaJKT7sj8cdvbNtbLXj3cganSpm4BBW",
  "key19": "3vMtwQcz7JXZ5gmdYCQbQ75QGLacYeemmBA2VKiRsL8WqBUUec8umQm9HuZ6BZfQVPq8RYhyLS3APSJoyNZoBwTn",
  "key20": "3saynx3yjjNRjXe45nRYZkLiAMdPM3D4oTeFLi5PTp282YNk77FHUxb8FvqfGnB8dA3eMFDshVqb8752iaaG5grs",
  "key21": "5ommZXn2jC1QzX4ztqXEvKTHSsxsH9ih7Z9zdVPY6HTfEMxwVwaKjUsVkV21iBRxwA2j8oHoVpeBqQgtJG2iV7c2",
  "key22": "3xuGLPD1bpQkVS89ec41pBfS4Ti3m2GXeFqByYnhisobJphdgnLAw6Yp9FFuXpStMN19tGFKZajqDFqRk4UCDCHi",
  "key23": "3jedpUpXmy8FdvpzTjiQeMe2xH5smQ9uzwsDJM7u48EKUZxTEDSXxzNdNrkw76kt63yw45fRdRous2GstywY92f5",
  "key24": "5aNpR7upkL3drgz6YBKJEAisQvyLNmjYEs5NWz5NbVzbcZQWAPex64M4upWFuXkFmmcZvmLwkwUGAELUb2cjbSZ2",
  "key25": "ciZT7qYrFbLZYYvdEDzPwD7KBEbJskwqLtY53r29pTWMkBruaZCJVLEdbNUqHDU1yrLfRnLgMqv7rQ9msjA8zXj",
  "key26": "5nxrC3yLhfCS7vehf1vKfjQ3zKcU9CfYEtdjcYuEiHNr6UTLcBFxHqVsiWyeoLXAxr4m8vKvyLmeupV9mUNyigg",
  "key27": "2bZMiHoCGAhBA848JpVpB6B5xQTo9H5StEVTJKi5aGxJwZZvt8qcGbFL9xKMzSrYicx74k17zgxgrTdyZwDfxecN",
  "key28": "LWoyMcfGfpeJyjcmr9PhMo7NZwmWt8Qga7mYX1Z6m4vBdSNpbzk4ZNviAf8Wxk2w2RoS5FnkrErthj8m3ZeENqX",
  "key29": "Pz2DKe9CReRAqqeeAC65vdWap82BRpZ7EBA7Zzfkegy1VRBNnMnaDMUzi9SCcDHHhvbqA7afoL4yyvXhSh6QCQ7",
  "key30": "2kef3R8XBFXzbw9QNsWeCvNRroWFvMew2MRCcp6AVi74NfDvqjRdgLwbnaXc9aYx4tf6jdTRtmqziVx1c2KuThF7",
  "key31": "2565uSyAQCx2Uu6uXCHcZo9A4i4efpT61fxJPk1ZScsr6aHK3rMqdNVY3UeTTY1dqqFAW6uZYrxSRiJWb3yt2xrj",
  "key32": "264oMtjhTW4qCtn7Yk7xZmoPJ1qXUgugRtsqtCDpmZpmfKo8aTFG9g2waWriWFFBtXv1hwQBgRw3xkGUBrNefyvT"
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
