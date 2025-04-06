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
    "4BSyaTBBFnEiuG63C3sywbchZyFvTg9qVczuCjEPbpXZyQr5Ed1tUTM552CNZGZiFKvFd7CgADRFoQh4tVLVdrFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oL138PrMQAWBtRF4hTpKGJwBMnN137Vj3sury5zQd4nbo6VXu9WN15CsSLZbsnZmjjNiF17rrBjyds6NJ6fr39v",
  "key1": "5qeSHvMLonaGMzSy36ZtyAJFbg4iHWVekX3n1WFzYTW1QapYLcRRimwwEVJ1X3z5FgM7N3CkYjuPCUsRxBQH4A8w",
  "key2": "QG5yq7wqRMHPXVJKQc6JGmmCBXnKsypbP36BYqVEDgvMgeUmZhmjZU382EEw6typinhnD8dBe1PqAjjswLyko8F",
  "key3": "4Vq7gdF7AMfuQpsVvgCyHkX5JbJGmxF8BjcbVLCoCbeVaW1UqwTt6kC6xpaeFHfLvymtoGjHfT7Gd8eQhGurKtnQ",
  "key4": "3Tuvb2AmuxVD5CD9xzbEi6CJzcwpPmLTs4dviKGCGQ27Zesj6gDiyJZbMvEVUAkE42ojE2pPdW2MZmpYh8gRqQ3Q",
  "key5": "5i4CqD3oiqJjTd5ULickP4joe5yLkQMKUsPbiznwigsS9eUJNPzBPTCAa34C4EKtVZrpvTTxk14SojKDYwhvAwBJ",
  "key6": "4hx7U3e9EqxUHmSSvJ7H4jRshKuUyEzjm3jj2iiFNShcSxrmp5oCJz4e1d88TfKga63aykLUVgQTmzVF72oFGHak",
  "key7": "4uqawev7XeUD3ubgsp3m6vpdgM1qyaJFztYC8T34NA2QBKJbHekEBpm8cpsqqW4fxK8XoEn1AyPazvSmEEEGuBCp",
  "key8": "24Mf8MvdHGro3gg2yFXJrZ2CKFGomNiJRnX97zgKf5WJ3PSRbwMwCtq16UYtMt3zPZ4iwkGoCqRuaaFe1DNT4zUF",
  "key9": "3UkDxG1zVK1USBo4WgSMBF3oicEUx2aXCeWa53FFDgdhPeqbTbXHEu2fkMNAVbUcXAZxrbGALRn3vAsRez9aGMLg",
  "key10": "5bKj3XEWRYMWR61UswJ1JmmwPGQe4NZC47HMhpVAxA4pqWa9hYyVTsa2BfWcmNcuvEnFNke5sJGQ4fQSq3dj3tUp",
  "key11": "3JZKbEJ2v4cWEZhghaiEwp1kcJUMugH9QhBcd5qRX99TC9SXhhdLJM1Gee94gLnPxmjDEdskmMskz5E2MUbLYtSX",
  "key12": "4orBSNBPMtu47NaSsXwDdcpK4KrSvQSdDho4ns8pRZ3nhzzAbjT3YHecbRMtiYjak7RZiVN14GWXKFuKhRAZjSRo",
  "key13": "6N7YRzHvgCuVZJ1fB5uviM3xxLzLcnrTb4HewUGxAMujS4452SjRmVXwv6XdXAJS2kgM6n61x4Hx8er2rZZpAGq",
  "key14": "5TLG3H8r2WPKbJuBQnL6ynyjXYyuUaRDwatTgBaHrp61c9D8C9FjBTUUoPzCRKiJ95mnNg3oZp9iFxGSYMrC6Uku",
  "key15": "4LdKU1UPE9gFSAazULxRQAoBYDVoJhuYdgYjQ82MaRTwJU1ovDoSYwMoQwCXWn6F1oVP1gpAyiC5FUUGU4jnqRJH",
  "key16": "3w2Ly9vqSPS8tMcB1qmP17P6JBoszbho1xYy4jTBqXN3ZaL6hJuDXhEfo6D5mtmgLYjVeuzJtp2jHiFvd3fQpf9V",
  "key17": "3Vn7z3oMsBnYoE3oXMesz1KVoRTvALF69LKdG2FaMVtyLUagaRKwrgF2KFxVi7RJKXGLdqq9jdB4UicgU3R4xjme",
  "key18": "tCjnDguZn5jQQAXqv6Zqm2cRLoRZopqjAj3XcJai4BN2taSzLY1Ba9H27NxKZtrsyf7cBCL95eBQxm5ibTZs9RH",
  "key19": "54KMxALsPjtC8eHC4Lt6h57YgWAs1mrZF8VZFaGktbg1Ep2spMQdCuemrUvnvKQowvF6c824CBJhDyenJAXbewwZ",
  "key20": "2iZfdFKLjXm7Ep5dymyLbmiGPq5zbjptBcQR2jiEAnqaG8bzjv4QrVDa1X9Am1DpaizkrUfXY6P5AvhRDP53jPbr",
  "key21": "3u94ZjDWiXKfLfx3yMahaauoY49BV3U8A3UPmXUJzx1qHNQvZNZzEgu4MRLxWA3ZpDEbDD5dnoP1ddU5ahJ9i3KC",
  "key22": "GhZuYePqZpJKWVxgJXmYUeayB6YG7i2orPPAu4Uv3i2g5pNQYL5iVzsmwx4wrjMDvepcqucahu4ZK6KWy7qLyqU",
  "key23": "3fBLVHr2tPxh7hXc6e2fe2kFEHqmpLR35Ew4mh1sUW7tJXghTXdYc5iQpkrUWK1yMLawPsBmwGm4gqwfWKdBRhUm",
  "key24": "37jteryt2Lo6KnzFnKC2mW7C68FXW7kK3hBfR1tyEgCEqU3i9zjnGsC9yfbMDFFtLDjwwm7fZVfLBT93zDfTc8mo",
  "key25": "3D8xf8gS6Mz7BKa71tStidM3EXmXortMdguvSgcq6yVXjbCANe67Bc3Z9eVa7ky41uz2mwsdc1k2TLeQGkaGo6Pa",
  "key26": "4zqYdwVURBY8DWtUSNs2EdbPafwahooNoCFutGqkbieypR9RAk37iTdK3NKz9kgUKXcx7HJRFSC8QvDYeQiaze6c",
  "key27": "5wP1ZiASHJzHjRbtP1ChqBVsJkP8ECN8p56zpyFjurq8GfjrPyBaEdi8wyokpnAhroUUdFXuCV3NWPiLChcKTiAa",
  "key28": "2A4ba1gS19hAxoQjimAWtJZ8VNHnyTUF9e5zjZVwQkyAeE1sBZNjBAqN36a6y3X7UEDNhrgphZiis5qmF6w67WqZ",
  "key29": "5ezNMmzkHhtCTE3ATgtmsd9NCx3tGVmESR6u6tn2yKwHQ6NQwPxAxkb3v8mf9m62ues8XJZp6x6vVaVRUi6MKE1X",
  "key30": "4R1yHh3epKDm7JWxDEV3r8VdkjfpVKs7DXZWwBte8Jw3LuAvr6yJMeLCSLnChN7KJEpY2cmT15H2yrEzovLmotdm",
  "key31": "5UhrMxro3uKjbtwCNBJ8JzMGtEeskfcBytVqDn95DqMZWtnRCr9z84ZWTbt7KtnJFfXiZr4LLDeSPCuJuXZAsvLh",
  "key32": "cAX9gf6zs5qTa9f5Z24yNvVLPaD6Wpuu7mosDkGUfJdm2JAeQfLUJcvcuiCXg7QA4uCse7Sdpe4xQEE9pVZafrY",
  "key33": "3kkF11tVNpME5S3eJFY7XD5jvcfnHN6BVdYp3QajCPJ1rg4R2zQSn1d1yWADA33u9iaXALJ5pKGReZDcYZqDcTFz",
  "key34": "2u4EzqJFEQPSB3b3Q873DqzeRkQ2WPLLbtwxtk6q41bjhbbGheEi5Zf3XSYTxuykjYJvd5J5i373dEjEKqnA69zZ",
  "key35": "EDB8CrziVpam2zgYwDid7FZ3WurWKSV7qx82v2e7nUHob1CgYCpEw57n6urVM1cacLeBK66LMRCzBna96wCq5BN",
  "key36": "8SSFoefQ2TfqCBxQUPe2SB2Ei2QxbauWQN7SKtpnf9UcZFA3L1f3sHWMo91BUykR48ZZNU3Y3vtgHz2R4qCiHkK",
  "key37": "5iaYphZ9hkpnZ71CnTnqKaycC99wHZ7wBtpf11wL34vyfX1jtgnwpzuJb99kdjp2TU4pSCixeiiLAzdw2SXc6rnC",
  "key38": "3zNNc9boraxH7QiwuAJBhEHCQxJKvsEoJeGYfzykcXrJ8pMaAUZLMCXGckwkn9fMQ7ym1XJdp5ApzsKavT7DBTuD",
  "key39": "3Czges3vvCnCrmNkKYmZ6QV4bUNp844mPQz9q3vxo8roQssGMXAfq69iPdyFdGFJCFhrWeTZ6pRi71jpocwc1mX7",
  "key40": "spW75krm9c7aqxaz49sUJZKur66avB5tYyFp6meVHwr6Tt4VGR9hNRMBzdCSdkyBi66A4Z4qAsZko3Zi9JdDLwZ",
  "key41": "WutmZcFEJip5aWBRCJMkKr5x5gmFd2Wxa5y7seMq42YdvbfgPbwgjvysUKqtn7Y96h3YXJUV54s8AxTTYr1AH6y"
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
