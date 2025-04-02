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
    "2C1zdoLTuU6khGyPWZP2SceH1idLqi9j9Q3MSYbebymysBKRAnNd1WBxpesFsZuko1Ub4V1g3vdbvaScFVMxJu8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzbyFTpHaXnSz6SYeh69fNzmifpsCi6kfQfwNaGhxtwzMRk3v6GDvNQPcKMtb2FcY4jzwPJNjfkrTtvdXgairBY",
  "key1": "jPnXNGtsjFfZF75JTJDGo3hYeeo5B6oqT42pEoNktDG3JZouchqM2L24JHTUWLX8TLmMwKzbFoemRTNNmyiy63o",
  "key2": "5qVbwjgU8XtxQRMAEcpd7QUHGVxjmTYGLkzPjcNNXNRCrhrovDbgjBgr5EdVZiKTbBDeanGCdytac1PMYwrzxbq4",
  "key3": "3tQJ9DXGrsLZGLto8tEwRnzjpXgPBwmKrcZu4MVzh8yASqHHrF8aPLB6krwKZZuVof3KD6pEX6fuToYH7Lin3vts",
  "key4": "51PufLaKUBr6wA2KJxVZ4U4SRB6kX3ZnndhDcS98oxiFz5WgbTiZXfpwnT65sDyWu6qxbwWdCDadf8fKsaH94QNx",
  "key5": "3vhQbPNYJdBy7617hXcZdZFZkkpjZMKTwQns6dFBypApyTNw2C6a32wNg1Vr768XkATH9VB7nF37E2cNHwkZfRHM",
  "key6": "3CEjRrNRdMbKs4ovSdKNHsM7nWQQuGEupFsJNnVxjrDJGAzydzxQcKbtjBk8ETF4eiWLQWFocUanT4pEUg2j99sd",
  "key7": "44HctGt7YQuYwBGYQ7AXTgYrLgX35phi73QH8UQ2789PNuukwkVZaRGcAk6fM49PqcDaCuu7i7SUhF7NQwJMw1Sn",
  "key8": "EVKJvKspy7yn585oZcHf7UMEG51d97JcUa1xxUAPfC2hHpNirH3o7nr8mexUPtn3y1grf7cvyz6hCoqkH3nsb85",
  "key9": "RTznpHr3bvtBzGXNRZ6EbE4YngXEWXUqvGHdPGQSbas4vkeWyrHwkJHVmE5FxM51mDvsgsb7fRcYqBdT7vyWAQJ",
  "key10": "2j4mxcLbG5kdtmD1y1X4QQv3jYUspnp978KmHbmELDpgCqjqjwDipXjGUge3zWgp6RxeJHHc4woCDLoEQPx2jLd",
  "key11": "4qqAJ7zw5sheTeHE8PfwMAGUrLMZXTDAkqTMo3UFS3ze3Bghcuwd9zaT5aFrrrVK6dM7PJBCcSmbJmyBEv6enCJi",
  "key12": "5e8zBfZr15YdTu4VVCBRJHq18Poe9UEzT8cdk3MeqFE7fbYAvKkUX81Hvkd5qeuHQ7cqBwP5Hb34D4dcYgweHrFp",
  "key13": "5b1tdNhznDynnNapDP1mJA3Un8K9LsrLdAWdwfFVcp4otUcsopfELKCiwFkFYfkQ5p2obJtDftaxNKDrGkYk4CZp",
  "key14": "2nfEBfuEZVpwYRgLXdTCSPiUrj8UhTaFsCXQ2AjKk73ppnQRnWaRq6awyw1SFa9Yc2SzPqUHG5TdmDdoPg64ax5Q",
  "key15": "5BzFpgZcoGtHshQzA3KXRystZMseuJSAT73DJJctdPi3qz4YMVqJVcEvckWnRu3Uj8ULwhNjyrfX337UgCLqCHtH",
  "key16": "26ThDgyCWbXgn4pNs9vFppagppwLRr6BnjgrPHXJRTMagwN59xSjUfs6ezCU5sLchHTu6g6m1Wp3UKyunNEJa5ab",
  "key17": "4UewskoKXdkBx88b7bi3Rk2KFvKWJ9vn25vwBdULESa8W5SVbUhnVy3fbBqzUXkrVp3ygUT89XkP1pTPrSff7smu",
  "key18": "5NL73bEcyGq7sUsjV2FESRyeLBaWeEAbhcKGhqFcW7jaPapPgCjuKuHcwn2QrsitahnYtvCYARJSdfvAthftJEfQ",
  "key19": "3osJGErjTctqmRHJe3TqHps64LiiKHRaN8cJQrUpnjbc1Y8HmmLJVj2ef9PqTCvAaPGbSBKQCo8NPnFdZydukCqS",
  "key20": "2oXdp5W1WPF2r8z98YnkJiprYcHJrZc8YZHeiWHUHxmmZEWesifqQozAuMrbSseKKwU9LcbcX3vBGkpmCdXn6mjp",
  "key21": "2KPYzKVgPndHULsg8rTn8sjyDxkjrABbyt8i8YUbM3M6PmHar9VxQn95ZTTyDePymL81vC1YyELbni9aqU4yLhmr",
  "key22": "2TM9ZwAoELM2Gi8ezAgN2oAcsXdGxGxnYZpWhwVXV4ndZu2naWS6FehWBSrBmVTTg8NuRzKSrVpRK3YZ6oKHDEnZ",
  "key23": "21KQfhhurzziX9wUkrrCXj4i9ssdtHVFMtaB9ijSLvQyDQVwNRK8RLmnsVKQbDaGqGNfB4yqP6TwTQCH5JFX7zug",
  "key24": "5RwFj9fXFT5pYchC1JRxFVdmDxq8DZcFAtSAttNyuhiTTCJLyQt32aBxVSxZMgLLSTNW7L7KHS2SHaAcWjVcL8cJ",
  "key25": "59eU9Cudn4Te1GzLtqpAJSDRxVfEfPa4PEETwfbA5i1DKHthWwHNTeCuMrCRK5TQjFUjds7gFkQxH7t8TM4aJUCm",
  "key26": "3p2zn9GvyEhZJVSjQ8Fyv7eP39qCTxXDG5C8W75Q6Ex2s4TKWoZbND29oVYYaqQYdDBAmdwEjx281re2vqRrtLFX",
  "key27": "2ffu4cS5PfESckonV3BnFEqHkQ5QvxojMHCu65pwtUyshj4746dUCEYcVsUqxU8jKTxAGPNc3H5LcDFCpAMEJQnW",
  "key28": "5HpyvDzyCDPFE3TkZbXCo99L1qw2pSZ3WL6TQn47WLqZCxfvsAL6nia9QN2Bnmamg5YBagSbXMaVNFT45s3mioHz",
  "key29": "4PjfCNZMDKAjEHZHqLb8TYAbnXzPBUe4PsnyLF3CfkZwWXp8ExkGbszeTPW9M6jsqMZQisUnzUaYkBHW7j4h5GPu",
  "key30": "51Lx4FE4YFjzsm3aQSqJ4VPueQR6C3fsHG5xWZ7an2FDRkJQaRchqLboFL818f2nPue7V63nsLakZ6g8LCtQ3kAg",
  "key31": "4UxUKQ91iqtMzeYwbAqccU6wwEyJMLPa31MFpF5AKYF5pmpsix74XREycG7Grd34uPzryBgP9xNaR77XCzJvsbPr",
  "key32": "2TVWKk1oY3bzAvnZekgnyG3tN8PS64mGUkYtPLDhzxLYYUuS82adA82cvyupUi1MTHaSxwSqJr4kHE2SVHeTJLin",
  "key33": "2Cn1S36xWgDwU8PBq7hfdZxq36QHbg58W5srkwfKvUwPHs6nWYn8PRAzW5cEBjfpqxiRgYfagZLLF2hYUrokVrXt",
  "key34": "4m9UJ7F6tfd2QZj57VLc69k14hsQTApvrF5pHEvZth7Uvx8b9BehLTGf8YQXZeTcFPKfg2z9mEKNexmFZgfT79DL",
  "key35": "57M1MhJRiMpMMPfqd2NMpFyvBRhu916sXxMFUt6zZjoSD97BjLmD4SLrvmN54z3N5pbXkrFYCe4fRJf8adpWSyqt",
  "key36": "3hEkre7ihHiigWz1HcaSoRgDjWBUhGMzhSGU2TxiZ1hM8H1Aw3WjyLFBQ46qLWsZaNUPz5c9wWcDHU5P8LpTHN9k",
  "key37": "63yTDnmdjiLY6H8bmFDNaNJqTHtPGdBX2Qcffowko2XqvogjprFYLHj1r7uuDZH621DSCXf7wXA6R8TUyeYpFNyc",
  "key38": "3q4rCXgGLeq21De9GgG5Lqa7pFUXJMEGTXAukeGzW9Eo735sHBKS9sBzMVvVG1hYGfwqPqz7oaudD98WWAcN5Vp8",
  "key39": "33jhsdXFz2j9HLdJUNrE6iTRBVHLcJAZPHtmhkLFeYdZpRSndmjRfRuQ92f6tUDRY4F9pHsvEwguZyjrJv1fGXs3",
  "key40": "5TGoETWb3kf2Ymc87YUiNuZ9V8PcKMm4MnuZakMiJkUYtZRpkYW4w1aA1QgdwwcF5KTcSe7JEkwNiqVW68qKWiCh",
  "key41": "5CXc9jmsrz6bWrVYrufRHjVKyswUzkaxUs4Z7Hd64NKhqjkFgddT7M1fRtsfEfNebtUhjiADiAZzz1bisUpPLNn1",
  "key42": "3xVQrBRDF43g4zyTqLkYBrsWWyprU3HYKzG9WwDbfzG9JXWfyp8S2yRZE8Cj5c66BDd49UsKsNDxJcyHSDiKNJTq",
  "key43": "5vwSBgt25nE8TY9VkEvNeBGEKbPagqhLDetoeDNeGYhhcygsuXsMeZrREpGNAczAFMvQHw8chHZgJfFsLeh2b7ps",
  "key44": "4vFx2EYygH8iT2hC1phwuh56edbCvic8DQVm2cmpfbKyqVdhXsZZqLB2nktzgVi3JTTQqzuvPCy7ZNi4UDeJKJmg",
  "key45": "2WpezAWxfD2W3GqC4EgyyzTrbK4v6RDQT7fvXpHQvEHee62EkKYxVsb1cxUUatsixJLfbCmG2EpGCBaFRatWYxy1"
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
