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
    "YKJsDssbR4GDW1rV5HRQ1VsLAFdDiTwUUXp4q7yLTWK7UbWMp9Vrb4a26R7SDdiQGzCPhGDv7WMK3ui24wDABnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkfrQyTYxch21koC3HkvaVGeSN2zfKWT5ZfVnDTb1V98Dx7T9mzc6YoUeBiAsKygumaQQq4guWE9YapBvcpLu8S",
  "key1": "5QHeh3UWrHVgnaXwHr6czE5YC9aTwUqd48ZSDjyrtMCK1ntmGNb49BQRcrPMjTBPVpH7uPWpiadboqgKzgFpKmfh",
  "key2": "T5GyHBVSfnes9Kz2sszYxLq8quWndurrWYw85CPyrKvQL2PbN9rztyBcry55VdtfiD3FzSxMGwNvkLLDdMYcXYz",
  "key3": "4MyAtrsTFZ2a7xvFnsgBaEAVAzBSaAg4EGLFAjLaJ89Kkcy8fE5obJnycBvxhaTbq1oGm9276MyBwqUCBgPG7KLm",
  "key4": "SXvxMRXp13Nf97QFHyuqbaZ82HVnwGpiUgkiAhmm6QU5cKrSpsBc4GJzz8dtcHoTYw3twrw1fVujJW99KSD3kRp",
  "key5": "3YkocxJXdyWJWgbtqmBws34Lm6wGaNNnw6PaxTYT9jVjCnkaEs7DRKFx4VUbYh83cLb8SCjGY341WQcmZs7fbg4Y",
  "key6": "36fsFj4jjL7ru7D1Cg6ngW4aAPidtzuPXwqEJQDNMEfvExJbiTpXFM5FmDstWom6ip7jRh7vAieEjyC6MFWN2Tn5",
  "key7": "2RyoUYQ8FdFwUP2ncFsuybsVtEjnDDu7eJHYGN2z4FNK9nL3GW22yF3TWZw33d5FBtKMz9TfQMUdg9mZPZnNNp92",
  "key8": "sgA2pcRzrDbgAUDvKXtKoK32c2817v7P2yktejt3JLyaiTQKfdQ7CEqo8MtLEMyun1mxS4V2YJL2626dinda5Qk",
  "key9": "58gzEar4pNJEL9Y2E4CxJ1p5WdEX3LuuykWFSjH6wA9tb9RtCdQYMNVCDhKbuQZRDHdYbirt1xzV7iiHKPwBwUv6",
  "key10": "5PE214VE1NaxoHBnVz2FivmzbaoekwijXk2draPDfmKDsTo2McYkiPGTJAH718M8vcXex7kU8T3btTnJbZc1Pt9T",
  "key11": "uTo4xkUjnrz3KkFzW1bVDQGR5FTA53CFPBznEgCNTbytxTcmv6Uinew8XccgMxKfZr1Xa68fmbKV43U7esYPPU4",
  "key12": "2WiHzGErjimzQHSr9HVgBJHm637fZfxBoygCjK5p1ZrT9WWWQCUokvSib9aksLTLiy4dfYNi3DajbQ8zaLFYucgJ",
  "key13": "4wVeHgt34QACw6yb6spYDzxgzKvVmNDnV8KkDi9icBYh5ibnCL1BUqHKWY3V5Wtke8YgB5noRn5Wm6VhTtDgwcxz",
  "key14": "3YriWXr1pYcuMr2gzjN1aaRyvcvVpJEyWkjqEkcYWt6qgossDoH7zeSbw6U2gm49bborFrRuD85PpvYMjnuFb3iV",
  "key15": "2hNMESSZQpeUu1QiA3DA9zAJU5f6caMeZ5Hdwj6xFdpYGFVMTBa1fjhY4PQGDYussR9jpJyzgx2QKMZpATxzkkYv",
  "key16": "PuCWz3DFke9hLTKM5UpEyKE6AykWaWWNFbg5YfknF1UYLHiaHui7eaP2TmK8CGL6t9JTcfToHVNTGKPSHD2dsQu",
  "key17": "547ugkhLnVAroW279gqzMdNAANfPNgbcjnpHeDAEpSQDU8PVhEs6fSQ7ZJGzZc54jsjUnwQMET5Eo8PjTJiUivWf",
  "key18": "2BV4kAqZEBsE4Rp9M6VqmQqh8BMtdYAiP7w2ysszEFqz3sajrfTMhcPJovt6hmJiwk9zKKf8xLGkZXQAw8igX8HE",
  "key19": "2Nce3cDNnuhX9JufQbbxQEFCxiPkoqz8MJDtTwnfNxDuVaj17rFtMXGTb2T3AweVhGtQ5JkGaqonwDXyLqp8rQUE",
  "key20": "5wvJwct7g9LxGSEGWCZKfFJHPzNDCYRBqyvYBwwLoUh9huL6qsDn28zuyQzeYy9iRyV9u8fidV9tVDonRzbV7wvm",
  "key21": "5B5RDVPAMZ7g5sqLcu9uVfstKAt5SMjPFUDAfEYbZkybEPTrLs1mehigN2hD1xgnaaqmR7KkT1wb84CBBT2HmvsE",
  "key22": "j1odKw7SbwvWRJe3kpha5DH4rykXfMKqqZhMw7ujPTqTdkURnZ3HodZ3xJZFUnSEKTnRWYGJa5UxcpwwnwMLT8D",
  "key23": "4t5z9N5ifagU4bzoJrFRXay1ZmgSuhfCCzDnEvRxFzDoPaqVxnXKa8EYn8EhmEk8SgFezWxqjydvamd9Muoib4Db",
  "key24": "5q2EMVeY6w9Saw2BX9LJiLUAq3EX6bLDi75uoGm9oiquLm24oNVfzNbUa6y6mMYEPKkXBaTLviAs4jWkowJw4Jmg",
  "key25": "5tcNW5FMEXEQ7bbZErnH6uZ2p4QS99uav8oTqshYPL1eZgXneVTAE1xM7QkuHt3v6LgNL14y9RtFKVjFrsB8CxuW",
  "key26": "2rhxPGVd6bfqSwg6H5RfHBnYGk3kBiJwi6miacAV4aTiXnn4eMdcnr7CwHb6eZioWrfeqhpHeBdzCXxK1WBds84A",
  "key27": "46ojKzsuRzLwAaEJuu9Nhjunz1oT7u8mqCwqB6eixUL4keTvm6Gf39PXdpMYcMx3VGVj5m6qFYqWdx3VkPxnDvfJ"
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
