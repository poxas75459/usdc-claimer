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
    "2YHBwKXapgvy9bBmtozQ9Gjhq1ZD3VEdgApB74Nxbtb6hmh3XcoVWhWv78JFs37Lw7LjH7eXxc8rsrmRJ1goAXrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nk8S93rh6nLV7cku7TGALPsthb9j74oJh2LcdTatFhdhuYsj3tCTsCW5cnxjWMrboGgUa99mKNoyWQZeNNh2mMf",
  "key1": "3LQPUpvP7tAhk4DznjYD8nqW3RVzHYfC87ebdWpaDmLa7KWpTinPyE3F34fqiYBn1MZYPRWnp8KWzhF3kYh7CC6q",
  "key2": "4W9A7xb3LyCi1YGZRZ1HK52QUGubdkY28MDCpHGLmZvkKxFHKUcwUiUbwEKpKqkVRmznPNk8tku8coRdM8JV1HHy",
  "key3": "3vAANZ3TRLXjBaWCKVgVq7DPGssZJZojUXE7kia2My1QiELpEAbHwR9LcEoEMUmugfyQGhpXSB2UTxUyXC3NhTWP",
  "key4": "8CEDvcEtUAMospUhxv7jkC96cUGynhyAFtSxtBZnxCqnNzEjYs1fA7r2XrC9rz1E5dvM8tCY9NHT1tjVMdzfFvc",
  "key5": "5mBG4kkayX7Nu4wJGjXbj7NE8A3mD7dfFZRB7BUXwpNetB8QFhMbWmyn6nYEudmVCRmJDQAYMt3Uogi7PNxuN2mP",
  "key6": "3nXFsjJXa9em8ojUQsVmNjcM7WtxuK8xMj53sk6bcaV5ZJwvuKYwhvqpFCQ4uekbfBMwbshEwy6yY4vrY23f8mnz",
  "key7": "65aqhVD8x8q2rMgknUgQpygK2pcZhz4WGtZuidDpvmwuNnakhdUqgCZjBKvVyeYD4nym5zRQkFJ6mDBCichAeyyv",
  "key8": "nG9bLWYnUKgxF2oMjE8mtqX2uw4uYrRPKptwQbXE1v2S8nCbaqG2Prw8nSuRAgx4TAba7YWjxwT5Lb4wVGhmhvK",
  "key9": "58mS3kf38GtqMqJ5xSEF6AkScSMmjkGNWxekWtHZNir7Neuuzd1BCFz6cFTcU4d5pmokEnQJfc1THG67E6ZNRb1K",
  "key10": "b2Mc7abDn24piS1s3GCdJugLuajYjxPbrwAkWZcmQRGwZozvqkLDWLRAFcw6u6DtGazQpXdUfe4S72rNtQzJYLf",
  "key11": "5ZHZGJ1t4xKgDZUi2vPp3Rhkm5i6i8eSMGL9dC5WeeSB47bWWqTvcseKPYD4PYwf21hz8TGrFGNrMudqrgj8vFcB",
  "key12": "3cGAcjFofD84GeyQYfMvmfM2z3ns1iMpwTdvUPTHX4dohUteNFZmazHp2xpbeKkFYSZFvjPSXDhvkfmSxeZnLMAu",
  "key13": "4cKh2e4UdG2Wru1txqEysoWArL4xNJRp8ZQDfzytkibW3Sz5hEJ6NihM7Vr9UJWk93kiUNamWRNPfV112kRajTa7",
  "key14": "5UcQcteVmGVZUcp8VN4QUwPPvDYykxGhsnYNTur9sRjEtE2TPawTej4sGDT8g91yna7zLnbQMTmoJqArMMy7Eq8v",
  "key15": "mzd8SxCER7vA6FyKzR9ivcL9LDy46EteR7fcZw3cGYx3HFcF2Xu4jHvw4VxfLuE3jDWd8EFZ2AAy7DhiBDgMbyS",
  "key16": "2Z1caHQkWJkFt1VUktanXhNvPcS727LPdRXoa1fBvVag45HuvfK3EuuoRQJASJCR5EhCrvPRDas1D1BxHFM8VJ2",
  "key17": "469gyPDCKu4ygAnQ8LH4yjYswULGyGVMBFHQVJfNSfja32CE9ojhng5JFXyzJGKNAr3iLhCkUrpc2TM1oc1t8Bip",
  "key18": "5GFY9BQRVGbxtjKbu2TKBxR3WJp29NwFsNAqiFrNpPJGtzy2NuV6BCYpeJBzpQvANYx34RRmUxmoZj7PRtbt4MJg",
  "key19": "2eWgg2JdWHEPTeanMGbTYGfmDk4PdfdmtFoEgdLxTNtq1zPgqVMLGYJmswkLPVXG8fupPLWjzq832PzEJvRv3vDd",
  "key20": "65X8Hzr5QkZ6tqge24i8r14U4DiGDc8B6Ts4L2Y1BwVwGAuKxZSM67pykocPY95HJVyML8233bRkxkmARVnMf1G6",
  "key21": "2P1oZ6VyCTiXvgzYnmDP2sKeyMzN19XX66GA19dFfQ3pZcwDkUELXjE3Y5JC8AvNGU3yNnST1Qtbun26oSpNtcXY",
  "key22": "3RViLPWnTrPW45ygmwTrEvuhQSmNKRsyZLotqxk8LCAcuh6z883KeXiBTLekWmn2a9XtyyU4ur6NUsbo2KdxD2rZ",
  "key23": "XKttzh8NJU6FXDvdub5wqR1VmuFZDLwM9BcH5aSMgEMdJXAoYaj6zkqnLkTRdy5wQpWpZRbbZabHUudGCbgUYng",
  "key24": "2A4m6CU8qJJFx9HxQiNVvxTjezNJHsjPNUGfdfSoqA422CqCH3voFVD1nbHzN9ACTtsgXJj9jmcCPMKTXjmsA1zt",
  "key25": "8yjTzh5TTLshw7qvgwStzEbmprt2CCd1notFgL7G8mLjoVWVbFzWwcMG1MZboaA3jH1tZ5MuKDd1ki5pArJW8eW",
  "key26": "3yhac9R4AwDy8mKhMRX4AQvsEMvfkwzsnBDRaYUeMaMnu1oasD17r6m23YGvtfGWVZwSQ7PsKHVYQTo8V7sVijBG",
  "key27": "2fmj1WWQuYsMwQpFRRmthMQynq5k3pZs6t8PzxnnEjBMqnH7qj2o7XHGu3vbAMoFCgbnu5onuDVtUVf5Fa731Z37",
  "key28": "5sgpaQb26rUwv243u7mguEbQrf2dTBe24pCu4mins2sTxnDQGEiwnj3ykoyQmSiMJwL2HhYK21ibFymQhwednCRD",
  "key29": "vo5bAdBZtXhQF3SY8X3473D4LedXrp2hAkHWQcEHU28ojeDNNPnRaJJfkx26kLYnLkZnWjrDNQSUdryzXkFGe4N",
  "key30": "Eod66xkiChL1nc3X37pR2QKJ6KTh65SFeQkQcgGPcFDmNCmjvWTiAePfLu9zPKMoy6QLhmBvDyJrTjLsW6y55tA"
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
