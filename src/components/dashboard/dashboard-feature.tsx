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
    "5kdE2MGFTgWvTWzfKAauexLjeEUUHP3husAZX5vgjXb4kUtYRL6uxbNmdRXm9RSBPmJHeM86bVLs6pi7GpLVU1Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDanXDnnL84aoQ3qH17on7Hhixm8zZhYwrmiYiQFFUEYRw9BzfPc7b8bbAX29UQQRdU1zApwCVtZwWn82ztpkfE",
  "key1": "4LNH8hyTZgyFdFvbZndWFSPvmzCK3dbu7M8TXw82zaSzaqqBxrwbwb4SJmncPWqTCWa39b8yvLXSurb9FJT33XyW",
  "key2": "2qLE8TkNTB2x15ALYmRk6A5BVtBoyrwSRUNGMwBoqPTRNfSakxyBoJCaH7WmpGJ7N5uRi1NutcwZLeTKUVwyqay7",
  "key3": "46xXrzgPNph1vmTZ3CiN52kguvvusSZ7ekFjPB7R5MyqWcVaY1Tyq4FJwFeifq3BzCVBUgoB5UbDjLg4uK6sGfpr",
  "key4": "4SSqB5bqq33qVMhjePzz4F7j4iMFoXo1ETPzmoAmtnxWY3i198fJuqU2Y9fBJKjMSUNDZSWRYtbEJGzjRq92CwAW",
  "key5": "4KTXNT34DauxrWyyP5dAis6djLLhfuah4r2c3Y9i6sfEmkdVVxhymeMNSuQoQ54CZT5ShF11nQZfYQwsqdgHK27X",
  "key6": "5A8762XQy1oasVqf2T3xh3ebPnoduGL9c5wJZmaMSDF4Y2rGKEExFQ3AEVjC1iUrF1iR8ymRKcwXigwkoCzCN7ch",
  "key7": "35gjULMrmWxNSBaxvmEhq7ZSUewmxP1Kk6Pu82YZpGwPn6rsQpQGY6KbsZfxEM2JkqzsgHFfVP1anLsKGysv3e8a",
  "key8": "57g8EPzKLCsvSmnCJcRwiCLUPAnYMJftW3cYzAXoPHxxxanzqn7SvhBPttVDJA8iQwQkzzds5QtRfEJUcnphKkbA",
  "key9": "3HksNSsR1WbtBS2VxhmCGFnWBDPGkWmzfhSQegr9fU7SJNeSkPxBkw9jQU9qba5xvCbvP67W4qcWLVfcgHWHszZJ",
  "key10": "x8C4pnNdkK9xZwbtDUCBTxTXNbR5ciMyvL1h5qpdn8B6vRhXX4QF7HMtHdCECeJ83tzisWLz5XYcGzPnEcfyEwU",
  "key11": "3SkW8XwpnRWQ6GUABuQ4CUQVq2H7Z2E47BzhLxyT3ZFGiz88UHZHJ5ZoqiVafBaBdqP3p2EnZBTcWHu9yX4ULJzy",
  "key12": "3LmkMZ6ZbvYuGxtdS8vTivPKhM7MQxSmXrVXHgMsiKJUQP77PmDaBCzgVbA8LRBNhifMr1erhuVavss1a3cssqzB",
  "key13": "3Sx7JsVVddvGf3u2Q2np4c524DKCfeBKtMzLkx4uVzrZAW3yk5AscfK727L9BAY6sny639HAVTxea2MDyQS5ZyDy",
  "key14": "3PGRsKLVCQd1GCY7fZLxM7rfX8sHWDkb3MFX87ZrEXdE5BeGV89mnkUcTq3XesZ8q16FEacaTcWuQ4M6xNb5mB58",
  "key15": "2oq2QPzWFyojgVjHdGQYB36ufLoQcwphrC6sJ822JXrQRLTQjxPWot6E1WjSmSVDSsFb8CnSJ1AA5EsVgkYFnQb8",
  "key16": "3h44Xnmj7JvcvJxxrVaquyaz1WBBPxwyCwPv3oAHippkLBfR1wCN7RWM8XY6EydtvZULoQyUDBjUtwTjhmQ2CDGb",
  "key17": "2C9fDi9WHBy86m1FxZFxATkZnbx15Uz6E4LzYKBzwvmmBvfnVxCrDV9wVTTo7ytbkvRzAZi5T7Z5iRWP3SsXd36Z",
  "key18": "3tgzdUSgoPTJcjDLtXpaL2Pq5NZpeDnPbp4ceRZGEoQdemBwkpv26QBBDM1rBH8wapH4xzZS6crZdBnhAve5Q1ei",
  "key19": "4FC6j3X6B3ZuC2PhkvJ6FkDAD7cBR3N8J4LGCEH1mvWH6CLtrpb3ykBq2xaaHGP5ocsD5xRxhWvkkHoLU4kCEpSZ",
  "key20": "eDNvWHdoUSNQ64VseM5j484AQZqYQoZP6smiM5oFySNwWoYpe7T8G5tfrhfM5MaSBw9wpqkrFZCVEziXTRXL1TD",
  "key21": "2f4GebawoeEhMiYdtqAe8EPpzW25fW6bXk91shfrvSiBPi273isxXmBebqfS8ZFr19pLzQ6XMZTtiSx3MEti4y9w",
  "key22": "gSLyY71TnL3nWQS1cjz7fC589P61NeEgR4NgpYrFFYBcJcY8EgbEMGWqNRFTonuDPaWy7tYVmZBAtBXHkzygrpR",
  "key23": "QBFKFXFUNQU39D1J6zQmDTzDRCK8yPnVt19a5WxdvxpDTCunbJzwkgTX5nWkkJ7jwvtVR6rP8PhV5B6Jd31rABG",
  "key24": "4cUWMjkggcu5DDR4jEoxW7St1HfvxL83VjRZ4h3UomDkTf9Y4wCG9EpqYyasbQ7N3JS9kdf6VEopFUuxriBNSRKu",
  "key25": "4gtUekf3S4ysHUCG4M8pz6ywq2c5keLxcrRzbYytt6MHWsyhJDAMPPN8zEcEDUKWvbk1oFTPuLYVuiqMT1E1M2Df",
  "key26": "4wbJpLqV76WrPJ17T3SB9y9AC7CMp36zxzHRGEpnrn1hr8hnqUkeBKmw7W7Z42oVneKvYryq9Jfu9pUbCnHuJcLJ",
  "key27": "3nzDGd1B2TrbnenxFcmy79qf4AxbDb1p7dz6LMnZH1NfnwEPZLpVbWLd1kfrUmujWJN9vd6XFqA47u3FG33rtaZA",
  "key28": "2P9znJXd9AJDzTnEoaTixEEV291hyxNZifcCGKT1boqvqo8PgUUzgRLx9mgSm1Zx49h3XuW5hGQ3ahX5i1gVdGxF",
  "key29": "67EjuNumjeDGnNj4L2MgZsEi6LJJ2Z7As3Rf5d3ZHT7XSJggBBEoZzyE3rD6dL3PspskZy4aL87hj8rVubfR4KKE",
  "key30": "3gM2zBP3485VPaAkknGTBGmXVVuk9zYPa2imfk1EESmuuetunHtaKKeKAdNpgbWf56gPGtr4REcd1FxhQ1NnnrUJ",
  "key31": "3qwkuRQFguiyitPoptSa7RHJ8DuV5H1HchWYWxc9gQytYm51C3RDDACvXCCHhvay1p5ebNMPZTuMQtuS2pmqH8g",
  "key32": "3ywX56a6Mos8ZWe78wyVL4r1RQBnPW6uVA4tDKWemjvmSpcGXXMfs6tWPt9CmgZtgjwg5SF7uRKftaGfBi4J1Kpm"
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
