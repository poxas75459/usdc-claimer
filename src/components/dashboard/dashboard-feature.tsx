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
    "3BkZD6qWDPfqDbFXZeZoGrriUdZ39JQVmFxMDgHtmEB4DmVHK2NLckZsgzNW7sKWzSPzoMLbLKHfoHzMVxiSzr9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDMeH9ctfvbUFUTDpeN2jbfj1Mn5v1suLZ5YcZ5j2cPjcxMHJqUmhsjhngj4RUGUQT4dwh2qLZDH4D6F8MvvPbd",
  "key1": "3CA4TLCwMisXSj53aNDxKpD1hKSeVFfLXgR6sWLKtoCt5LSrvGEYvjqTPKM2dnGHYzMtXs5bEPeAxBpRrMZnq39U",
  "key2": "QcfYvzVVyBdbmzynCHrU76u2M2A3hKkZED5XduKBh4NcJU6ctBu1F1vjnbLkUiqeC5bA7nCNoN8RbCoKC8eW7cM",
  "key3": "3G7drPiNERzqZ7V7akasMS97JWZmK1LBZGULDpZePcNdyx915UpLebr6GJJyArUPG5fegR3vB5NTraTpypnev5Uo",
  "key4": "33vmzePLbMjAbJCSYkTKrNZm7fadgtYqa3CEkqsQN4xnfnbf5zmGEKWbpAyWBdY354wKniuG5KmY8mcAarugczTk",
  "key5": "5WZxFP8Y8FHHPoftTEjFMJyrwQewsjc4jS6USTeT4wcJUMnHbycH5buj1xTg5gsakCbZvL34P5Pd1cvBijK2mZ6B",
  "key6": "2tWrkY73vUDbjkF3bgEyG9nmpoh1X9JoJi2kVY7aaMQQaeQg8CRF1vCt7uprkUKiM6Prh6UHn93FkApD92YsMfTc",
  "key7": "2Hx1ms3WRfPgDMTwwfTkiPLLkP5mbF1BGvBNguzCmh4pk4e41NqtEMz78GkZSfU1MuVB62tPHznazdUmtgXCsFLs",
  "key8": "3uGpRcFLXkorZdZd1Uz39cxdxaE89VpBJV4pd9hDjov1UWdiC3wuhNuxEpTMiQNcMuDTRDNDweNUV2KwdVbrB7vw",
  "key9": "5fRQXaftPGH7MxKT539V3FhrBw49nrdskSdux5AUBeZ3fn56yAXs1gr4yeU8U3qBp2gmAxTApC9Kftyc3fcXrqbn",
  "key10": "66NwKF5kMe8CXPttPjJXpP9B14kc2Fnc1TmGkYbzXdBhV1qAbLMBqxdZjEbFSYjiLGyAFZPN6YEGbxKdWCRWKpdn",
  "key11": "4oQH4n7QuQYXE4QzgSBQWmgQ6j6idbdkCumK2i51BB2Hc6eVF4LEDswjp5oJGYZ4guEozdyKN7TnvWfDSknnvh2P",
  "key12": "3C3cnXJZUxPxxx66SE3PYgcUaRjFDnzyNooYpYkWqQY6mAYjEyLYBgtezKch7Gm4NX1Mfbnv5X1MVaCBoQBcrEJo",
  "key13": "2PWSA12RMDHPN9izv3fNbGEboRFLmihm5oUKBb5zqSqebyPvS6yxdEJf15QKL6KdaCbdqR9n934Cufint93G5zk",
  "key14": "3HNdqmzXoGvt6nffJto1wZpokXmXPus3L5bhXTk8uWsTQHzZwJtcEL3WoX6uC9abREvpS7rJFnSiMVQej3p2rWrV",
  "key15": "4jMeGBV9ob1VLb7kFWZ6WeYGNdM2EvwB6vstbbAkvH3m7Td5WPqTYnrKB5b72fZnby2r1hDTj4hz4kxDWZ9R4peN",
  "key16": "59SaaPhLt9LBHwNMYuJwWjvgxUGZDYPqRVY3H4U2CDr3Eiwmh5XyYsx6bYWvjxBiZzKNDWqVYTKhqA4AaabcQmmN",
  "key17": "4hZCjJNCAAQ8jzPU59dvnZB3fJe6cgYagCrZy5hgL1AFyzGBwBiALTpNcocHWNvkGtX42kWiwJf8JT8QgzFLNgHr",
  "key18": "2nrHXgUWyiWyWf2gJPbs5EmPYRQwyjLVVBfEp2GA1EZqEAaprZ7nmm2LZVGquAYRGCiuPEKLHciAmx1pYY7sAXXT",
  "key19": "wCAjjxHYKyYwsJE5nr1EX1HRQKxN24AoASa5GC8Gdssv4mjwLPAPMJaHeLeayCHDF9A6E3JG8ZRXuwdbE2xfuvb",
  "key20": "32QhXmzyUC8h6uLcsgMZQYSVenxKVhW2LNehPuWrjWzV5djrwfC66Qpkh2mnFjeA4eeAud3CKy31PAeFTXxnVhXs",
  "key21": "3TB8jTAnFRfQDDv828nTcyhPH8CspXyvMrFxzxSaXsnHgaBiHDJupT6v7CHqdrEcaCPEhqrD1nnyaYNT6Bti62FR",
  "key22": "3W7TsoNUhFTUnqfNtZPULTdkGtxZRAe3nLTY4b1kUXzezaF8ycs12sdvVkV2SX6ueihTAXxfraKNgbrx3uuuJjbw",
  "key23": "5YR1FTQ7yjuSEsWLcpkvFkUjdejAkyDhXkoZsXxx2h2GdBKVGpj9FVM5179qFDD1PgCNhDYXsVa91gRfgAH6ZUGt",
  "key24": "3K1UEH43GRVJFRP8DAg12m6dVyE4ETyCRDtRMazUKxjuFkENnfQvpZyskwmMbsQBnZPHYBeiJZRi253ePwdDfKD3"
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
