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
    "3yjQwi6ZBM3KQHUaDFa5xhfzFud6spEaWWiiiAHVFxGQTkbqwqckV8UZkVjsZueLssi8Ria2fzZNpppYSUP2G1rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKhPK7YS8KZBX7p8g6bXA4uP7YWwxqqNrVofhGuDjFM2Ko49JvvAmJ21t36uqtMMCjBCNFZPr5Kb8jrVw8QmhEN",
  "key1": "cpXdCgpHJkeo2CW5h1v8VhuHn9zhebFHGTDAtPWdeBjF7bT9r3pks2yYt9qpodP5D84ndykwyPBDMduDBCitN5o",
  "key2": "4oL9zABc8FSvvywyxiVziU9AF3QPSKRmE19M64zygmqN2KkWHp8uetKg4aWqDmeXiAHGSTKeftQnbEjj4AEkbDyy",
  "key3": "4LaDAmFnMZMXMzZTJVUi73D2ovA5xx7KsJJvnRtCNy1XfCNseURrQg4EsC1eeoPD3C5SW5XSgLYep2eNsrP22QvU",
  "key4": "5rRw1dHDeGpXs57nJYpzVqRpR3kBX47JAovtovT9pWXbwsxoWzPrAZK7Hm72zyhtqd56fhg6TnnYzUF72YK57LGU",
  "key5": "62n8X5RCtSrQsiQobHp2rBAX2vENC7xUiSFGe2K86HGDVM5DrKehPmxipbnv5gd7T8a1Kj5AHGenShCJtv9eNqHX",
  "key6": "58w5wMwqqSzc3FHhs4GsmcvRBGXQBQHpfEiU56hgLFJ5ypiUhCvBgo9oopXpAmcuhosqYzKyroTEucMimrxAq2WM",
  "key7": "2xwQXZ6aqswygXYzXuTjmmtseFhNH84N2MC3EXjHQjPct5UuLpQqLr52S4aBhsHUC5giu1FSbEQZUjTJaioLoC6S",
  "key8": "48pjrLNApngAby1LQ2y38hpzaq886j7d5rfmi2EkTLpMmpXW56qqMKquPoLCdGUFhXid1LYCEAewppNh6qYcwzYF",
  "key9": "5fznzwgYh6JETCxqzYKUvmZ5m4GYWyUfv2tSvQwxSZdXTLSYo4o4YgatVBcev3jk2YAHFNPkiQdF2wLMWJ8aBAKi",
  "key10": "5PkskxrGGeDVD6cXQNAfdyJwbDZqZNB6cWJB1zyjo9xRBLs7uor1buqqY8KbaXo9ABDQAoTTj4yHcFkGtHgoPw3q",
  "key11": "5LUD24HBDmbS4w65QyFs4S4GqsvywrUt15Dqujhm58eVDNNxBnuqwE6fqD51i3rYdQaxdXHdg4yi7T7taXzRoQG6",
  "key12": "43sEW4TsG8TowxDHpTTjd2NaA8rtDtdQUEwMX9KdhXweVfPEKy3Y62Sjk6bhTp2SwKZkR7eZLTrV7NHKX6k3WPQS",
  "key13": "2HFyJ7yoGECDpTg9rFg2UuonhmP5TswKqSpvfukRNgffb8QBhgujSHmDAQM2or2QymfRk7GVMLBFERKc81tro2dN",
  "key14": "4AD2o1T3LQNqKMZoA4TwjnaWkwWTCxzMt8yvLymTxatkRoNjUTw9gqtEjd9Fnr3LaVWJoYcN8r4cdpbcKtdQGM3k",
  "key15": "3bruGNkqPUXra6Ub8ShMXqLFo8r6bMCcE6V2kHabAbtcZrMSHQyax9wR9YFJNXjtyjdb54Eo6eyw4fexjJdkmxsN",
  "key16": "366MR7VijDtA9wC49DDeEVrLEGDeoE9nZTuPeLZpzB9CgQEiWFAqUyf2F7Ht5LoPxrTHJzRgz2zwJbJQorrDgJZr",
  "key17": "wUi3wRUuqNAUXDcEL3SMk3xwMiGPp1vg5vnw6dbdmB4JvxcRsfdncn9LuxWvMZA2wzyveGycSqTGkkRnbyu9MUC",
  "key18": "3VWDNoMjP8zWvxZo8f6jSYktwcQ39m3fp7JF2BhdpatHvYGZmeWLHdRTaYdaZX9QKu8siBefkkBrpEbn3GMhfdGT",
  "key19": "CHy9Fa2V2KCJJ9B6PbZdu4fcwtGigeKxjPzj2sWbwz3XxvQtkny4Crbqa2eQsQDGjYztVcdxqM4vg44MXnhbPzd",
  "key20": "64gLrQt9eEp3tHbmGBhA8cobAejyHVx2yyV2kvRjKFcgCA4Ky2ceoSJc5cob1zyMwdgQ1uoRYZmUD1LEwA1YhRDN",
  "key21": "4upa6qpjTPm2U4qN5jHgXE2ZKN5wJAjWegb6ekRMVQC19ZjVr6uYrZ16vPR5n8fjKARryC3vir5V8m5GjdxCG5uF",
  "key22": "4sehkv4kwqAGYnYtTXfy46Hyi3UKBzjTn32itk6FnxfVdFkLUaqenE6sMoChZAzoJ7Q1jXLWXaYsWmqt8wmj47Mt",
  "key23": "XMJgaZn4RwRRM357hoZYz4WTEYSksoRmSRJJknj2qN5rSd41k4J9jHCWBxcat1vNUunLwarZwaFAvWEuPdRGpWV",
  "key24": "o9vkwvV8ayDo2jdLFbk5b2Nab1i7drk7Cn2HHWuXv1nKgVRdphmTaX3Dcf8mrqrxJ5kmJwNsZ576EMNaFyQtf1S",
  "key25": "5dXQaUAc49jJYfFvSdC4bkkD9qNcUaLnLaEtA9GH9GpsB6id9JN4tXMe99TmgKbPMdbt5pZANzsmv5LbCGR8NHqP",
  "key26": "4mrgdVkGAK2wTJC4y3iDyqNXmTYbYgJAqrc8rAEWtxTbJvD1RqAUL3Wmrt6fqEtchLkVCLFCo5bjzarYnPTJRZNh",
  "key27": "5StBaBxDYYFDZEXptHaEKWg9YbZCD1jndRMCgmsWKFi64uzYQUETzoe6FzwRCAn7fH6ToA1vVFidS8KqQEV6VN1w",
  "key28": "4PqjJDNPxNYdGTdsUvkzsaYNK9fuDEx6fS2d2YcNDH81umrV21CPQqGxWHFmJahTrdjACn417ahGLc9Ww7UqMMoV",
  "key29": "5iVJDw96kyac1qXNETEPBjhXis6PdEvsR47gtsfVmQAUq8iLbfHXTgKBYzTLiZQFxFr8hgnW9YzStP5VEcfWuyKs",
  "key30": "W2n28s1tEE6EnAfn6WyWVacjXa6xqCrhkmVKGFCUZunPn5KQnVi57U41Z6oBVmASFx5iVnZxpRKfXULRy92aVox",
  "key31": "2kfFTBLgiY5rJvGDPXiF5vfeBPoQRZwVVwcSYq8zJEjaW3zRFUBmf5Lyj2tEe5XqGypQaUZk2nFy7pDVf7FPVthr",
  "key32": "5MWxRrexfaFBP9GGzDPrMvGQGtBuGR4sXJKjyNutUfuwu1LuLGRwbUPK2UBC4zU9rxNN3sTMFvwFGaH2Cu3st1UD",
  "key33": "ajnFfkuQE1RdnP1wSwLtQaqq7qz5C1foduxT83iQ5a2Kyz7MiPEZ75nj7LHtFrDNFmx4Nd4HbTnrhJnHqKScNNc",
  "key34": "5ZyoxkxEkNgKSN6K42JqPtbygqvPV1VRGWF75kHVF4reRWMrF47zAWj7Xaa3LBJng5PwziwCaFh3au477ANNLGeY",
  "key35": "4KckhZcf2vUy94rPgHzCqs12BvT8dLUAc8YKtsJrYSupkvAG1XAG6FuipehFXuMVbrEM4ouiemQ6xVfZmdtCiL2d",
  "key36": "ymdGqwDbhoCJrGCG3k1C7p1oFo5NX5CWmgakYzDG6qCFALTFMHRdtejyGj2c6VatPwk8mZi13qtBJGs7qDoChaU"
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
