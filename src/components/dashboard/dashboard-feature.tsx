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
    "yQgHrsKDDQMx2ianER4KZm88ocFbnyajyqTa5fzmZ6LttkJ44gUjsodcFXz9U9ppK84MgaTtYdydXE6hhiKREmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJ1ENvqCARSbPCN65dcAV4Ly5jsr6fDDiK2BVU7zNEXLcjTTQ4BTCo6qa6jYu2KcakeN3ceWAEUyo1WewDM2G2b",
  "key1": "52Uk7v9ypywbv7RZdwT7YDHPjayBzWBn5D4cxbPHJWVzdGW1kVSyTSJhQEbjqvibtWdtB6sdVwGQAjVLcVw6D2kk",
  "key2": "3gaftSeynEH62vxXJwLtN929q7D5o9K6c15pcnzRWtcmaQMFwDcE5i7pfvTvmAw42977iscmdpsJ6JGDcS1ejXky",
  "key3": "5LnmLtgMh6tcUx8XLPFJymErh4jMfb5ZRNAeXyLQ5bZXzfYZ6XpZ72goMiHA1FcC7ZtpqRrqE3wVHNVPExGRRQCz",
  "key4": "4LffrxjY8Yd9WXFKyiFVMkfDwjhQEgaE9zM2BkDNJ49jpjfb5Bb9Zk2i1PdG5memNYrxXHPcCEzhe1eUUqmAZQcr",
  "key5": "m81SBJA3BWqUrkETxpicKBZ2Uv3518UvJD2pWdLmNUDirYc6Dj9hedE6ctkD5S725CPFsdZcKdSYJ6aKMAxg73s",
  "key6": "3X5b4SRgdJXYxsZSk76jq1FLegF1rdjZBBiLLgsTzgRfnPgTtx8K4hahm3kz36fHzrGeJJ4Mpt3WTvi1Epoi3tDx",
  "key7": "pEHeGeEBJnHFG4ZfAAz9GiGDnZMHiipwbJJAWw1cnw7WSd8Ztwz11Qvb5K4Co2QjVS5UijbB5DbwLZLFdA9qowM",
  "key8": "3JpM81mophpfNmQNXYubi82P9jABC2i9ALqiSUbeCXp2EPTWLmCJtr24kbtbQkybzCf1kdWe1rLurocT7TsiYztF",
  "key9": "4Xkct4oJyFyQkm5nG96vWNd99uzmETxnv1fhzDESWy9XWwQwpS4yhP5mqwurLBRuG2dCRJJTBAZ6DsadWP9qsne1",
  "key10": "3obxhJSXCR6hSTipCH5MFxpKD4xoJfxHnh582gg52eS7FPT3ewGm1bQ66CSAG5rQNvpZHYMoyJUtj5vF2HNZs3Za",
  "key11": "4n99yx346DSbj9wHW4xxsnYc6HF9TV46TZfyABWvMfrZeVRMGrvdGkTgVRde7JnUTyRQRGFR7Lpvo2uxk7rKQu1Q",
  "key12": "4osUs4cuzyccdjvSS5MGroHVy4noMMQzuNnWgSspWDNtPt56n5TF5uaWJB4TFryaobNSodUAcaHxAQiNTio4c8SM",
  "key13": "4CgBSxjbAdyMLebPKprDbvmdCFEfmuUzboWcrgp7w2xJEDKUQBL8SeZVA6ADp1f3PaLgoCdUWmT7ymktqGMerdVn",
  "key14": "23YiLtaZTDyAaCUmfU7zbnh1N9VAmcJWhCSTpvt5mHqBqaMTMnyh3zQXZC7BgRFo29cbaAY15WoNsnM8EDc9bQKY",
  "key15": "5ckEGxroTB4CwGpLDGYMemN6VaG3uxf1BfS9CtCtYv5NRaBUdzFnsKxU4yNjv3NvARWFfNZeHwSmKNmnrZJY5zAF",
  "key16": "3RRrrvmjcSQEuogABnyri35UWwvsYjAxhs8wNCzzfuRUCNRWGJq73aGHvNRcq6jjNANwkMi7P7hnVm55q88gqd5S",
  "key17": "2xVzPes7yrAGx2G3nyai9A45edkpVZvtXWsgcWcmUW4cmNwTn59j4Fn3VgSv5fpyY59d1Q8foDj2UMMPZcoE6Kru",
  "key18": "2cDSWvSSHXGZE68edGj5kgmeoTunMHk515EUWnruRtS78rCMSforfdxHBAmbrAJDM2bvJXq25cC1gmGQFy9LpuVv",
  "key19": "5j9kYHms3PYfiytevrF8jYx5ZbpuoKaYHpAuHdYUrMvj5E8qxnK39KyCbgBvubWUE5gS5WQxxMucrxTL77PCNJhv",
  "key20": "8NAZcoYjcMDKpBnYtVpbe28fjzD4Rx87TrkSyejt81fD7zNGvRctpz2daEfjzRX3eZvANCaCryU3yJVpqE7QsoT",
  "key21": "3N1CFPinMzuaVSDZ7XrzevG4ektNGaSaaVwNEHja77xaBwUXNgtguQ5vwyiiB5ATVygJARuEsPBGj43vAkD7q2fB",
  "key22": "52ZTtJSHMGuRXUA9rTtxmcqSfVtbodFx2XrhtDo4oizxMRrarzpWjJBwdkESrYpyf9soa41A2yEALWW6qgHTr3NA",
  "key23": "D3NY4AFaFqbLUZpA39pJMfzZDVEHGMwtShEdRyT5aKcWCEBo5nSVbFjWCyEmaTb4wznXWeeHcbo9XzZALK8jkzY",
  "key24": "kBKUNBXAZRqW6fVenQHLgRpXtJ8viLrxX7agb3fTHEQLEZxbzvSSy3UegWxiJVbmQwdm9Y3s37EQHvKsYzYKRZB",
  "key25": "513ByEZddwMFDEQxpnsKc5k3wGcX4tHGe2amezaETL4SPCEpHGxy8qJL6XFcdcihgfDAGhkZfiT4PveQYNBww4rw",
  "key26": "2JQaqYyKJqx9tmbxApeBKQHvqhBYT6ktH48C4cDifxQDf5wxYd8yk7MchPa8eKei7yFjTDC2LaFWsa8Zk6MgBQVB",
  "key27": "4LG3469ufWLirypz8iN9pf8hmvqqB7w2iopxjpXUeGqPZwHiFchcAHoMYJV9qFi2FDW3oYy6j3eBargnrgeKEYPv",
  "key28": "3NYrTc7GdfpM6HgapkpuZ3KvGNajXjDVRR3TQeuWzwVNfAgEQFGuM2zjFmYg7oDCG4Nk8EzZgWHs7ezWbw6wxfy3",
  "key29": "4JPeenpiZTKitoTYsEraMKHrZEQcvC8X43aT3ojoEvimchzZa9zNFHPhFmjrqs4jeS7Dr3muaRgaMkCb6ZWUYz4q",
  "key30": "DjFKETAer4fizFkU9UCeqpRRq5jUSQMQeeieHQZ3qTtdZxm8EYpWYw1ReCZHq3kugsPZMDYs4S6o69TdLCeidBX",
  "key31": "46v79U3ePTdQDkiaMxbrSjvyvftUJ6gNrHDS13Bd2SrY5rWa5L5yb7z3XZMxVEhypBrWdA4rxf9ssJbAJdvrjawC",
  "key32": "2WbEVMPx5SCmqX5FkRyhupYsQ1ezXPqjvxPgWH3CJNv1qidpGJKwnY2R9Yfoc8RnznNSQtBpsHxVCpryjRi6nEgG",
  "key33": "5BvXAriqiFAa2vHkd8mYSFFEnBQYr7PCUC1YwhtoRb274h8FTTaLJo1Vsczy5QKQhBQHh1KLerTB1Eo3f9SjreF5",
  "key34": "7efceFXbjXVjLUEi1AkxxteCEDfERVNTy9GmRXPVZ5TiJ5Vwo5scxMGfLELnTn8wM2vAPzkFB8jcV72HjvwmVzX"
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
