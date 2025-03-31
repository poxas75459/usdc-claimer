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
    "26fBBC4yxEaWLibwFmyiQTjcxGGbFKdG3Q6qDv6AWeTs3rVfEb4ctPWfcni9EVk5c6ukuDZzypvoGLMgz2rVJNeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nygWm5Lzi9vhKmTjAmjEmQDmGfnMPtoMt4szmRDuUmmN5XJRuS667eRiD9EfGDJRghLecNWmGCuykmXgFwCmZ3",
  "key1": "382rKaAhbB5P6spczVWKhZi1ZJTcRumG3muXeNLRWSVpiUojNfnNGtUWm2edmpWW1GNk9e1eJsZanQGjAR5nBfnu",
  "key2": "5fGbi8oM9cJa3CPiX3fMvQAx5Q8hCeNwPiERknuJqHasGVecVAvxhxwitMK16iatt7qRhYjSu4MNnfEvVQaKAhaW",
  "key3": "2qi4pYwU8p9twsQe5Jgg6Du3fT9Njp99KnuTUi3aSzVxeAeC7EXC6CVmDJCoPijgZo2wqyfc9mk79tsTmK88tCrK",
  "key4": "2comY5udvubCmDszAJAY5SuyCzoT1xyQSxBRo3KmqiTkKA7EmcdeY6GwUpvKN32gYFpbNnB9bJxznb87z86BbwGk",
  "key5": "3d7NRoWtGyf1s1jvrZciExBpt1XpUZRAXiLiioz2giaRF2kEwp7e6ytTXBhweySk1MtGyieRUKUdDTpLiLA3uA7V",
  "key6": "4jRGz6nkZNLXJUwueeNQWxKQsKNzgR2cEphjJyUALCGeGZwivURpYEFCvCpzoTYNYHbkB7QeV5bXF29J8PSa71pR",
  "key7": "4AeotEf3B7iL7veijzYTyexeePeY4vMDeH8TtdUz9pobWziTS88Bn7rEiF6LztewiQz2Rk4F9FMYXjdVBKm8Szvk",
  "key8": "toZqjnJLE5jYUNdBTkvpT3MXi4HqZ3b3nvhsXjZpr2LobhkaZHkh4N6cYywM1V9ULjzJwzJRL4kUhSJJWHee3am",
  "key9": "5BKscG75z3XAnBNmRk8s74bkZpT5gnk8KzU82wwXNH9tCNshChy4r55WAGZqRDzZ6ZshXguA3L8qqTAoL6BbFgMn",
  "key10": "4nmr4aKsFb1LSBxTY2VSBS8154VANPjD9Lj9GGwyZWNQU67CYjw7F6vUmA9Evqmxwj955XnW27rh6BDCBjuuxNGc",
  "key11": "5KzEc7YEm4pf41ZEGvEEndAwkHap1YCLJCYKq69ujvuCqFnxbEuwVEFXng6X2SRLXhog8vFJWr6vC8Rp41eidJLS",
  "key12": "4eAf6NVJkrQyNZqCCno42FjmVrfQq7nNLoUMVAmRi4wRRVRKV3GkMWdsWnVvpeMQtpjVkkmLmoehkxPYAZFUQf96",
  "key13": "EUpHfeshkPnAnfY5vghdsvfWhXuVwfMLvu6gjHd9TR8dBLffAy9Tx45er78ZpUmKCtQTo1MJpfuNXBqwmAE7NzJ",
  "key14": "4H8LnRHYUMbCBcLEg8MvgCZabf3HE5cBiTkv3mBNS4VJg7R2fL14ippPVm4jZX5WSppXTihQTf2hCaYm1V9JnMxv",
  "key15": "5ZzyAtb3AiB6thn4iusnzThQRz5Hve2rtC6hiBwiHRhnKEfXgsUThAscay2Egvw19gx9xpfuTQ4qefApF1GJnvp1",
  "key16": "2WGNgaPb6M727qWJjmg6W7ZkHHSydDbTzY2PKkrXMqEem4UFTCx7qTpXhXwLEPYRa2DvfExQ2CucQZXtpQLDB4yH",
  "key17": "2TxUhVVjNpHZyrghxmWuDEXp6K4CrgCuhrxvKR4P1GqJkb4ryBenmng2PEEkF8ArczWVRGGwxUPoPKzmCukQZGn7",
  "key18": "5VJoEBkXVeP2jhNpM9DFgtkbBXhqzV4tZDRYn5c6owmzT9yi37UUMWWoVz1ao113B9esegFPJt85epxzksqZWfW5",
  "key19": "4TN1xWgeyogSH6bhEUys3cZZXVFwLo6V2o3Ltz1zXZtij332iCp5ogqfdDc9s98KS44qYWofLW6VZeeAeptwPwi7",
  "key20": "3oFkwRvfRYv453xh3vMx9PhikhXBUmkEskprbHUcUKkMM8MQG5zsxPP9QaAS3ba8DWpVpQn4T1QMA5p53r5nE7mt",
  "key21": "5oSw9vGbegbSnRYR1emSiAmy32wuNBXdWUcU1BUQvbB6w979Ma3k5zyqsdfV3kbxPCW8xhNDNMqQ4f9hPLfDuCb3",
  "key22": "5HhCgM8xYgWj3vtUFUtgCVeQW5kGcpRHsr13fKw2wTm1sfk1iimypgY1fprrj3JVHRem53Qc3dEHCjAeuLMTrMBC",
  "key23": "4TMJ72wHKtAZ1JkdJ7i2LEdtgFUV3NtHnPyttdSEt7YZWHUw8Yz7SiJBBx6KvBSmpcbvMHtXZ4x97QMavAgoLV1n",
  "key24": "59UsrX6CG9NJPEhjbJBe8GhG7hh8j4jwg1ese3weB4CMpbbXFXGdQU6WfkH9HP1daqLDwhq6iTxyo81tQPwigXwR",
  "key25": "5uUjxHsAYEv1ymXsa5kJaMXvodrYTJACckJvKzPjEiNYWTXQyuBwNudurUHtkmtxdf1vUVCbgWJvTN7eHDrbtAf9",
  "key26": "QVEff9qZ4ophU481CEMqGP5TU8yoEmAM2QRmCo3H172yEAVtNteKX24RnPP5KXnm5aZHk8SNjzs7E148miEGc6g",
  "key27": "5DAHZuJGjxg4Z3RQRwv3HFfkfRcJqNBL7jbCG7PUqH5WvqCLZwvKB9ZxusAhhx4XCcWznEqB6vTgPHXwtxvWdqjZ",
  "key28": "hJotQg1pQiqZ4QxKGyzVS5D1YQgbKAtPysXYPNQKHiUuA3s2L9WkNGEbNw6P51XdfoJbtKJVHHSETVtHKAGNLh1",
  "key29": "WXVRtmQbAhn1Aeme4aFwvVfnxHjzTTn3b8J6x3qCE48mASs8VB2Vvs15iyKndWyWdD4bneWEZrtD2ddeYdMoD61",
  "key30": "2W4Udgec4zmkm4t1a48s15CFHg4UT3n7Rhgx4sJPCMxqivxGjcdiy5UW2FBrhwjv8kStuNbUEWkoyXjgX4tbC8PZ",
  "key31": "dbu78yXoe4Tpp2749Wg2LPVbrPbnCRTGe3GeTRDWCPoq2b3kngNKHD19fRxgaNpBbPyTPnEwVKEwRhX9FH62PRN"
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
