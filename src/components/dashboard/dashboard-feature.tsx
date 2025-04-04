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
    "2CjQ82xEoxxApPEJfkn9cFtZ2tt2sow7mNHg3V3MP54Cg8C1mWHNVLzj5ESmbL43bM1RY9B1hY6Qc2MR6KzasVed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vM2FpTY8YQ8HXtkJyre6mS7Gx6bDY2uhBtu9wYgggRCdbawwPF3zM9u4iXqgUUMWTB7Co1KHWRygbnv4PmfWrxN",
  "key1": "4f77kyfWHUrRxUHu3urXeJNwkagzVQkqgjaSeNpNEaCmSS4JrpwREbHys1UCS41hwodd9tppzdRXne6BuNkizQsB",
  "key2": "4VS2w6BSqs55N4m19rLzcqBL6XpQiTfyZu2PiecZLgy9MgGYP7RmX8nuSvGn57Wv4gV4aMeL9Ph33ZGMxJox2na8",
  "key3": "5B5CNMhTtzRjtJnmmq6Uw2NFxvXJhbPCw1YDprFvTWfPXfNSRitieFkLVrVV4BUUq8e2tNDYMZPLmEbT2qs162sj",
  "key4": "3EMZCMEjqJqPNk5yTkz8TtdrXd2K6QAkkqBdsU7tV4CtJg7jgmjqPeMXJxVXgpmBohJuqjxtVAeeKqeiZ6NDNsgc",
  "key5": "4JvKUePhdxtwSK1AjsBkxfqS2CX8Hk3APbZVS5iYdK5Xfs8jDwq8yPy9CLmZ8hj4kkukJFG8yweLQdKCY821VoVg",
  "key6": "uc7bp5SnT3KAJgqn1c3fvgkiJVjM5wYuGi9yeSFEF15vACdvbBbLCrgUrqqGnBX8MzDGLeSW7o2tXSg83maVLgR",
  "key7": "53RRAAT1v87RkV27cVtUBQfCkrTbhM7EoonNMGqDUfcCAaoV9qChfJmPzuiFSTVBeNzA5rFCYnXPS51mfyzsaLqA",
  "key8": "4xKcsuwxfza6L93PHVxsTC2CbLd2nycokxv1vyioen7iBUbu6atYCgaoGqhbax8rNA79hLZmR88emH3WiLtmUEnT",
  "key9": "2qcszmuxK5XMg5dnMcTvqP7o6NWbPi8s22b8SMKjiSvYwZ5ReHP7KZoy4gjKQwU5UzjckQsdE52nz398te1XnC5A",
  "key10": "32k4eVn1wQr3Xo3dQLxGPpn4p7DXTAu2s92ukk6rxWq1LoRqqpvnyJ92wGovS4TUk6G8nFPYhnzcyZnU8Qj16f9f",
  "key11": "5Q4PS6wFsVAnLwJ9QLAfVR9owriVkWCjs57vfb6yQAW8pCXPB7CK1ujc81sLk7ZbobAB3s9SwbaoxCE7si4XYDC1",
  "key12": "2RLSM4vRawduavuj98NCE45QUiWCCDHiYrNtfTYCpwpVMYcsf5acgy8LukNkgkHo7BFramUwFwZdS2wGrqevdHUh",
  "key13": "3QUskyXi9832xM1aCxLdG4UtT8GcHryWUHQF21bJFgeCF1KGAzpZirP4zYSaJ5d7VW6hBC364dD5usCQ8LT3UQHQ",
  "key14": "2H6p2B48N76fG7EnkNQfTNRLrRjyNirh4ZxdX3wBSqiHkGMvAK9FQ4KCN7iJJTcXYZxB8Nxo9E5YwuXTrSwpgBDW",
  "key15": "3MdbP4sbioAxwGH9Cz4C1SsPwu8ykQjkaxXS9s5MotpePy5ZbhTYau5MyTBtcYFpNPYQibYFbc3c5cQgMsNnfem",
  "key16": "3R2NX2sjWe5Ui2rmanjb3cjrFuQ2JifTWRfgWchDTdNAMun2HXscwuavfkhwhQ5XU6f15Ae3MteWaA1QkJwbNMPw",
  "key17": "2L9sWXbcZMpfjWnrNaNuVmSf4KnxmCQeWC2gF8VNVbpYh9wqEQ9rJxAKPCoVDcHWH9Yfvbfh2TWPDT2FiZs7is54",
  "key18": "g98LDqy5bjeEXcvwmSE8DUqggGUWQu419VP7WDrpPisarbyxvGtTrqmncodJbCe1XLQDWFCs9Z52ywFmJoybwvF",
  "key19": "48uah38kYXfXFV9mHSUeQiiUKKTaZzH5uPxCDUKg1XF1dAHZCLSEb3trVQto2n6BnDgf9wKoS88q6t5KNE6kqNuy",
  "key20": "5mQMY7Y4QZgJwNwQxXZ8bEDQYkMVN1kfAC8bLY1J8HFtpvVKKtX666u8smiXqVKWeGVyVk2HkgYXWx5Mip7Jsw8f",
  "key21": "2FavZWKfi7X4KRgT4eLXrmPGnNbM9mWTtEHkNko12K7dUXgWhgZXbcq3TQAJ8rfwpxovomsNNxpRAKSAQ3hSg8ZT",
  "key22": "HZAMcjqnKYBcsosXJwU2vPD6QJVrwRwvmxnRQYbVMxUcZV8gapfma37v3TY2ij9G9R8XXf9dieAnYcabPTU9Boy",
  "key23": "JpvukVHNeSPtemLPpfKXsV2stEJ8RPY19iZf8qkdEktZS8uAtpagPaTo15F5FdvLBZwRiqMbiY9yU3P6zuL8aA7",
  "key24": "pWUs693omXtHJ2sSJRyv6GRefEPudqgokf19RT4u1Z7ZUgL27v5b9Ee8zCf4V4ALFhPgU6mVr6dRHzF9XPQfvgx",
  "key25": "QQXfB6SBFhK8rBWo61LexcAf5cHq8Sgzfc46PqbSBCp4RYCfgQNfAQva6pYp7sFXd35HsiX6Bf7Z5CQZWtBnYkT",
  "key26": "3PPN3RHpf1DD7raL7KhuSmDwUfRxW9E6vfsxxyeZvNi57tdE2hKnAjiJ6n3hcaEC6GN9NLi3UiX5cAEFQbyMwdBL",
  "key27": "64f2suK54nxd9i7WSXYhJvwCjQK17RVKna71qWjgZj5TiTg35juy9vCBGdMHXr87Ed3sg5aSLhaVk7EFi9iHWFT7",
  "key28": "23PbsS4QyAULHXEXeikhgpHkaVy12FFwoRw6qTUSTrkeL3Y82B6gJKoKWzyKn6MQNqe9XrwU1Z53kkf5ozgP93RM",
  "key29": "2bQaxpUXZGqdN3gNq4C1j2gnoFJGViaXwnor2YEoW1P3VQ6ym97cAzVA3k5WZkE5uRYVUVNSkxHB2DTHcPvieqNg",
  "key30": "5HmSMMUwUB8vDAvQ5TyoNEBAga4y7RsUj8F5KxkbV6NLESjP5fPcZYcUgftMJAggpoY1kuWK3wRVTC3HRePzYqfk",
  "key31": "5uAEhP1rCTUgAEb3B8QSsqbGrQcj1J6S3pEQbsyq16PdnyKMstbWvggfSFdBB9hRJWQTrTp5V78BpL219XmSrE53",
  "key32": "3k4vKogJkXzUPVxWndcNrLtsgMUaBtkdGt2wkArEjk8Xx4c9GMAECzEW2hPepWsPeZArTSaXnA6FMX9ZQPr8N7wd",
  "key33": "5Bb7qt4GDFiHjVmTzEJ9K3wiE5EaZxtRzwnNZCSCxPJ66s8xfQ2gjPLg75TwvyeYUPCAaWuUHYpcVz4xDDGP6dyK",
  "key34": "4WxXeYRkFrY7yt7wZBq7iPia3aw5yYCNBWeaMMjLtD7YkEM8xmhbb1Knhzx7aoQYbd1pJvKneDUsHuWhR6WxGkGF",
  "key35": "28SCAYok56apXprVokJpnsLm71qDaESGAYzPxnEsGzyfmsbFVVqdF1JYxUcM8pxz4fxtURrd7zbp7vnK8fmWBL9x",
  "key36": "5fB7fPktmA9Gz9BBYQd45ZAeTTmLuG4SK3YLGcmFtJwZ39rEcynA9CrvRQPsbjBG8KWaztPBWzPaSGtBZMt2Sren",
  "key37": "JUj1WB5fvxjvPAbz1VpfiQYoMqsWwooX4GtuUH4XHVugqbhUK1kPrvzWv37vQkw6FFssaUrfhjvP9GNjSjNbCTr",
  "key38": "4TaByBpX4mByxRzRN5K8RdiJjkjKkW2QLF1RWimKky4mFyF4bcd2ENfqsnjpdRKFvPRj12ykHpSsakutT1MgrKxL"
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
