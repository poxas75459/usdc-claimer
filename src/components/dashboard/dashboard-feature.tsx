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
    "3RF1HojmjUDm1SAJU6ZRUAM5RuPA81W37YfCqgNxMfVTMDpVM2pgm2KgvBVCp9TEuGZEYd3UELpbYUB9HzAnmEfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtJ7vqRJcYuCTSygSwiF1PKk83CjrWmqybGYKDUp8sRiqhAip3Uuj1txBbPxKusoKBD2CQbEoEv6rWVJxnGKB39",
  "key1": "2ZiAtNq55QcFBu4j8hNJHVbcY33rTNpdrkFFGGC9PUchV6nx9ueRdSXnrqNSyzre1e1oh6iJDixyaGVX6o8vuMHw",
  "key2": "2Ls2P146jomEWpPvFT5bRveksjvUeDtSK5gukPa9Lo9JWoodR6RnvxejxUGyHWbUHGiKKJWEywL4Q5gMz8XuBYX",
  "key3": "4g3Vec8Uba2wioJELREW9fMVsUa4fxu5EuDeeFfDSQiKmMBLUckbS2rYH3YrmEfjFRwBk8CNAse3KM9CfULvtaD4",
  "key4": "9aFLTJp7jWfPvruytMK5SxWhbrBbHB9jVbRmyAmpzki9kERHEFaDbmJtjY1SwXgHXixKguvRKUkMVRiAf2TyGDi",
  "key5": "2bbBGHob66sNGmKa3UqkGHHFFtT6JhQmUWCpwMsndwdYsRw1LBBxPVShwAFdR5cYvDGFtTjJR8eFuioDKoPWDAMZ",
  "key6": "2h3fDVRobGGVPVxdU1ygswxRSguGFbQW3ChWQPS3i3aJj75jMH1CFQ2xwvKB7Zs5Xn5Wfi5BvbTrXZWCj8rC7FrJ",
  "key7": "5dcqe5T9Pb3qF4HruNNV6LG3uLS8bQx43tmMJZR2nspDZw7FAhHwVYuEAupdo5ViBPg3qjZEMHv3p5FdJ4qNVH9",
  "key8": "3dt2V8yevQ8XmtLQaUk1LA7frXbVbuJucehGBpQzb8vTBDPWMiJpn456dnqNR5RHaYx9U63Uh8b3fhDCyDwxGkKR",
  "key9": "63P1sBfdMPNWgu99LxsaFbUkfh8XubxeNFPSyN3iyGfP6nzLQFE4zXkmezNETSjfT22WpMPj5YbEHmc5MLe9Myh7",
  "key10": "28hjGFm7bNWLaWfx2YQMvxCZYxvMWNcyQvH6BxB7N4GDmfhnQjWKDQ5khyNuUL2kvBcHirDGjqxDmfMp9mtsJWTL",
  "key11": "Sgjqw2aewpMmwD5zNHfVCpgRmMd7rNuZiZaSceLmtvmDpCw5viEHxRwKSqBALU6ek1kMC39T8YHicbg3cdnyMW8",
  "key12": "5NixRjSKVrUtWxM1DyUXnPSFpZ3qiU3w1CGzS77FrazSdpaRpgh3pFocUyQjSNQsjD8H5EssvpgQX45yu9tVxqEW",
  "key13": "xthLnJvsD1HW2ZPwZ8o4SC66vyMWgDbYLZsDmqJxWFgVefgiEiA8hXnBTMpKfLRp9wLrHZ5Bjq67kvP1zf7VMg3",
  "key14": "5iuJkmSGhU8iM8wv7q47Wpx83LkrXUoMcc1k2JN95yh6L3ANwYBzxAJAzuwPXALVPvBspTUYk825ZS7SXCDV7A5F",
  "key15": "bnddsKvzRQF9Z5SeJXWTiY1miTt7PigS8WkEjoGpvhf9dTUzGWorxeM27Z891jVJnBZtNRv53SnYSgXA5xmMkYf",
  "key16": "2Zg84Rriczm1xunDKkBFGQC1ptkyS4qpmbPzRz9hzofY41Xo4EXe8SBhwPaqxjYXTJTt9NS9AbedCti2LGBnhfbx",
  "key17": "2PTLxYNAGrYP6KJ1FFYJniXzFjEGxn7PHnnXheEaKRUw8c3ynXQFbwitKYV9E3MQoQ2MqtYPihkqChJgWGJH2egC",
  "key18": "28QP6wAsRvdSg4gN5X2EpecskeY5DA8hXTBEL2cqFjm68ci7dpWGbMxiGVwb36U3QFm5oKGxRu9qpXHo6PUrdZoq",
  "key19": "4wJM8nFu12rRzPCTsqRV6HjV1Cv59iPfMGER4yqC7YM7Sbymawt6iYr7ttbHJndNzAe6FybjcrU1BKndCfC9FexW",
  "key20": "5GYMo7kQrfoS9kjFaircq6Q9sBrdQynQsoRAr9dWjZBoTT9CKJocYZHB5WhjuhakLYSU7Pe5DFrxMCd9T7Ahe3Fw",
  "key21": "1n8wj9sBpGyvYJUZcn14LY4h2NfPGzcjqmTjCEBtZKT8GDikmAAvDNKVLpUWNTi8kAGFyfyYpRT9jQ9TKQTTo5H",
  "key22": "5diGJM2HPE5eBk3RdQoW9rvWLSf8wNrY3BqvgFTWYSJ1CL5giXaGwTX96auxgUwzmimNPnVRFErc9QpJq59x2AkF",
  "key23": "ivA1HZE4D5cSFU14cmtCSAyeE12chy2fDDEu8pyc1kj1NzpxAZmS3GABkf68pxUpKStzE9PkEfVqdFh8R2Y5Gme",
  "key24": "3Bcxt5JkVhaDzXTiZssasr7fsfmdNnJfssz1J2qsHebo5mdoxJk6DZTUwKvJS9FRtChnQyBvNxLtouDzsZrcVph5",
  "key25": "62nDzRzFtky9mqh5kW1mYtBrF2zJaXTjXTQ8pU9CTkWWQ7xKY8Yz7XygBNTeWX3gCErYTm1rtTdWrnvQwfovCaYW",
  "key26": "J5t9rpSkx4LobnhDDpgwkPexPUSWGzb2cmoKoYhQFyAVurrh1YMQhZ4Cwbm8oBojLr3V8rNXwG1FQ7tf16frmxJ",
  "key27": "4QiPL2RPaVsSarjUA7w3t4b3eXztiuFYFKWK9GK8z1bFYuvXbigG94fkfjaU8aNkmmY2VTxeYZ9SDk9qemfZrqpN",
  "key28": "4E2JaAP2bocLVvZWpJxDaBqmSqoKptLsDYPzEGBWYctfLT372S2eZgnvX3jNGMX1XcsH5M3FNkfE66jyQh6wDdBg",
  "key29": "5UgkoiHgpikaY8whpbtjTidmq4wtmYwWQkx3WNmCMRNL3BtAcLFBDA5fdiPfeCAancmx9jEz8pHB5cEDMXYWqqYZ"
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
