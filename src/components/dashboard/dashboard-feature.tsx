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
    "45JwafM55BoesFx91htG6cUJGjzMFyaGgebCZMpAL9LnRRZL7YwMn76ypvNjPAyLFdd5vKFmc1w22NHu5acKkTs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPeG3pLk7UYrsor9P5noft7Z6fAFEPdjR8tLHTzWcfEMZ3SBQC8X9AoKb1sVidkabtR3u6Fso2gymq6YXaM42Ys",
  "key1": "4FWeCuc1erE2mXfAindtNiQF94cqh6zBjBQc28J2PUjMNeGMknMqNwZQLHx2EuDuVEm9PfJuaqzgAxGSnDoVXC8k",
  "key2": "2hYsGs3Gfix8aZnV2VrkVTrBKLNqPzRKc6WpPsYMrU24T47YA2QLiVoNzKZFuq2hLpa2GCDB3ZCg2kcXeB8ypTL5",
  "key3": "2QbpK8QELiyeYwY62XVeeKaGKSyxbjdAevgj5UEVcoSjmVMEMFpUwBzM57Qk1TR5imWnbFXG6e1xC6ZWjMoCSVAv",
  "key4": "2WKBjDY9WKe375PrGQ9XHt52hD2V4gMC79u1gjNeRd9SvogsazvuWjBXJ95AEs5dWHktVXJdNdk7gcpJTTW7Ewmr",
  "key5": "3TdTanVLo24NoPZkMv8jtwoiHtwAaFx7wMej9Qwz8Kz5EWGPAMwkuXp85TcY7egExtRyKYS91VoWFQooXW6UdRdW",
  "key6": "SprqVUp4Cg6RBpKj36Fmdg3Yyc155LMptR1b6o8VLbgkCHceHXzchKiZnui5nzKkpHxeX9tsA8Mk9YxVqr4oVR7",
  "key7": "3JzcxeNLzDGR3udTKkBVkttnJiisW5PJyYdEqGx5bkwiauwZYW5NkYHbFUvQn4sXmnKFxRXRDgQazYD7pwMkFRC8",
  "key8": "GjaaWKHhSuDKUthoposgkFsLTVC99u7QU9tPxntueSryqYqfQ6zszmSWsjyxdHgtG9csUcpGsPwYhDhMYft5FQh",
  "key9": "4VdvTVjB7xGQqbbccM6bSFg7qKAHcwVwVBTkBpLEPR8VW4FeGerosTbCDSc4E8hrdC8srghMkS1eZzSw1xyMK2hf",
  "key10": "5TypzzV967DzHT75QNQ7Xt6gjAgxG3RzqNtWNvcf1CqyGfXaFpFnhaz32Y65RSVdo6URxtGGSFrWuw3k7EndmNJj",
  "key11": "2VAYauHnZoxYBobnaBGJUqKHsoAU6oD5CqUzsg5S5zhf1FRE55jjimYHp8Wue4xjC3QKPH5YRMHubVhjrYwFqdXA",
  "key12": "64Sk3wSq2PPtoVNhSPPw2hRTDBsBb2xdTeGM7j3SLCg6rsqU5AuUjS7fgN9SQgMSFbuUtyMZdnFeZPwJmWbffUPt",
  "key13": "aLasf43xaD9e5TpcQbH5FdDxPtPaEU1byiq4efnLRyWr6ZE42a5ZXtkW2bunk2TaPMhFtnSq4WHS75GoD267H45",
  "key14": "2LDi5tKVo2JCiz8CuoESHBLy97wp3nFKrGZt8pzKkZccGfdGAVMByZTH6PoLgvP8j4wf2UQNnop6W6jeFDiQTZNu",
  "key15": "5CG4X1h1KQhXRbsiESKXhTescJFyyiibLMiYFz4PxUb6XTEhmMqLi1KpaBoPaac82MxA6cHKHuQn8UBnAPpYUSCY",
  "key16": "2aVHscvJQ3epo9iY3nroVXjcJ3gYR1VA6yFb8GYMR45dCnqCV4CxRLFNHsQL4Pu3CqihzEcsQopp8Q5G8f7Xw6pg",
  "key17": "5CwaAMXSuByhcz7uUdwUwmi58UDELJuLLpmMhynUMtAuLjRNrAGQNvfY8XhwGCovtWd8q5hCqdQhYzY5nF4jUXFz",
  "key18": "J2wtrBbWNvZZc2XRqQR5sWHhxrQFJRWxSBtWXmeTuMAVzEo5MqZjiduogYH2K5TzRN6QKAWsK8pmVswEDFKAG3e",
  "key19": "5JRGxKp54RKgFvrhFrNjTWfyeMVQwU2PM5tBAZc8iULRfMv67VvePQg7zFBBsqTr7Jo5bhpYNah2GGvKFew7jkwN",
  "key20": "5RPgBMUDaiMieXuJubfwHoBq1LkjaDaD3HTVivJfucLrtdd5U8qsWFMSGqyVW37iLWHpPKux7FHPjDXfcbdWLsL8",
  "key21": "5hU2JYaRnUmBLTRVzXD1xka1JN68nq4rKacATrdZAhHVAv6nbMURSacToQpbdvnQ7eYgTDsyT4reYtrXV6r214EQ",
  "key22": "3E7tSmKkbkn89NPX7y58A5KTstpFheTSxWkvwasXmjEdv6MGkWD4dw2H8NNeY4mo45LcfxQMkQmezVGAqw5kbqru",
  "key23": "3traPBNENUz9w2qSRi9hxhvqHyNcN8hbkmPgjH5yfoYagpTo44nUxGRA2LEqSCDNcLQxX5a4Qx6QRjkTfKLKfz9s",
  "key24": "26LFAS12bdYrJvQAnFgJEdxn7J4zqbEiLMm49Fci1hbKf5Je5azTiCXDm9AYf84bAC6xCKoXhSxkHvuk9rf5sxCv"
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
