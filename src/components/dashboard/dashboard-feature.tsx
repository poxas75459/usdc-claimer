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
    "34RQx1d1ttkXWcu56f1Y58bLDK6En4BSoR93D9FASpcprMLaFezHk8xqc4MfBgHqJmd4dmzWJFSaMUyXCWbyT9ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LEe2TtYec8hdLNiosRBXP4DJwLBmrYZ2UnjwuxEbgFBg1HTVEVpwaUVoJF7JB2qeu2dE7f2mc4gVFfTsS2qGbHm",
  "key1": "2oHxT7mj9Baw4bJJZoTbGA8iQvdkZgQmdWa3fXa5Q1GkFkXMpZcKD5VTswA8JmdsYHgjPqdSBBr3g9rXuGNAtnnK",
  "key2": "3sMuF5pnMgMFoBebeAx97dcZEAAqSs6zSMJjChB1yRtyYGQA2qPYduBrLVWNVCtDix3QQ23uwgdtwG3ju54QkrF",
  "key3": "3w9h5WwoAt93Epsfs5A1KPsaBdrgC3BeNnAo3NNAF3NgtuEnCXpmaaXh7a1CErz9iGzdtiVdYXBT5ADsMWWaFrgU",
  "key4": "55k4nr6WxG6sw4x3YuEu7ofzr5SNZexeJVysnTcJe9zFz3hNVjy9Nw6xmha4ssp28Fg7cdUQFshxFddMfZDNbA8z",
  "key5": "4XvBL4MCqaFFsDFujzbeurKdgAzyojiAnjoGFcYG2qkLAP7174nhWnJ8zr7SBx3BNDHpwksrqT34pf2GbovzcCZU",
  "key6": "32iqahT3b4CLReJbvim8YG2LiyDRum6eDXDLuAcRbiTT1ZaFvAz7LMdTgh31uHnj5DwEvP1oHENC6CeWaG6wRW1y",
  "key7": "3vPKEnqrkbdSBk9TQF81y8t6QHAZizkbDLXv7JJtv1tNhfHmmEYGoeG2fwZ8aptFQh9DWburJ3TApGg7cQwJ2cBG",
  "key8": "3mDzZMTaaEMHkF4xWnZDK7djDGpCEHUsCccPRsgcXYt4fHFC6UBSpTnk87fbTWRMVRfDQNGF5rzx6heArhgdLrje",
  "key9": "iccgrmwxPC8gvKRUTJie6THTRHwSHnWYWXAhaSHmDdfhDg7RhQqqFW2Emp2sV7hZexw8FiAdJwXLTD7nV3fnCnd",
  "key10": "3tqZrvMhPwrGLQMB1DFUarh3R5LEH5bUEHZqfrb3DT7RqQRRnSRfa2xNye9ECjxLH2LTbtoRUBfLDiAh9PVkZgAz",
  "key11": "3ZKU6gzPzTkB7NPeStiQb4CkqNCktSMUfpeza1t3qtB1DVjdKQx3bEKgnyoNvzaWuY17HwW7nZJMKnBBHwGwoQWA",
  "key12": "62G9BXmFP2DrGroKdvmMsKbcpiP4iX3tLpJCPYThTkh9bGaPhVFfUnnjupdHLrps5HtPmpR65cHH8hwP85hrGcaY",
  "key13": "2FDyAmgDsNka1urdTwtVD3QWhEP7sAzSchBMuVVZsMmYe8NUTdLzRnnBiZoqHjRv9sXeu21TnvdLMGmwnQdqTpvv",
  "key14": "3kX6A9KF3uFmnSFq6HP5hY9FXYFgRoxx6wPi8zidjt4ryTw8edNroCSiJfaK4MXtcoUUbYezHk6e9fm4ZoHUFWRR",
  "key15": "5wbAJUWafiC9ShM6mGGRpwyrPevFtHhJDQ9phDKzzYZY5fUWHmRZCiQ5XuEaxEN8G8CLYyavyyok9gadpUdND5mj",
  "key16": "2cnznBZGMYnKwjsD97Lf85tFpAn9JikhqsdsxEjSv74Rav7hZXMAfkaEc5XvVCVSMEySH4isyFWxgRbbrYchmqTw",
  "key17": "2n4jpQibuhBZ5mJeuUM3VMNwaj2shqSPFMF7VJeiYRKjSQT2RYuxBYALZ5QW6gwfR6rtJStqgyaxmJw54AoN1CjA",
  "key18": "4pebzQrcBADZ5bcYaoourVMT3A6VGFq8Uu3YaWxPzQh3v3T4HTGt8bctUs4V6Nr2GEv64PMpXpuDeTPriovfX8Ty",
  "key19": "ePfaJdQ6oPr5ZrSTog9kFoXxmgCenpJMLGnnmiVwrLHLsW1XfvRV1jj4xkSamKLB7Cf8ayEat4FoZyybe34yU1p",
  "key20": "3Kd6nPz9bQj7k1sFcKshKfdrfA2dCJ7EdRhvBnXRpvdGRYbgZGeuAcGQGfKwPwA1s745m26iU6v9kLxAz3QNvgky",
  "key21": "54p4t4QYCuqnz2e7cNQb4WcmKbPWc73JC1Gq5GRTxVh3EsXRb2kfNH1Zmme27jqo3jX3dHEUx6zTBrDdhVDBFRDX",
  "key22": "2nvpjvMv5ZLx4ThCRooKuB21RH1DrpcBGHuNURRSrZYfYVkZo5y1tdroQREicnptuca1Mq4rgpnHc1Mzau34vabL",
  "key23": "5JtbhPEg73QyuEL2e75z9nNZySHottky5XLmQGkpFZp7LUVGJGfctmYpoXNRisuiF7ewzEDgtLLQ84B515dxqpw7",
  "key24": "3fzuAmv67hZPfbdFjrNawRzVKaqm37o7m8Kqbx51yuVnSFv34nfBYTHR7XB51FUQL7ZUiA9BEcsXhADb5CXzsk1b",
  "key25": "3JsTeS2cBSRFiXp13AU9Yi99ynhpWXNoctXingEwHJpf95FK7zqAUseYrRwnPLYa9kJD6JMWx1fPXhVrRe7b3Mjf",
  "key26": "4reWyLLMifTW8imNzY9PCqD6cEv8cm8SQ47KAsVAhv7fxiagzfv71xdT4vk7qnsxRB9z6A9CGsfMPv6ZNhsF4npQ",
  "key27": "4TrKA92mKvvaA193jHukxHKWgCjuA4hGeUKjGotnVjCQFcpfK6rjK1JpDKVdKfhZahcY6rSLmWYKPcwjp3g2cSBH",
  "key28": "3yDX9VQ7ED1XzRoYdSakTqy3rjDyztbdwHWXXLUUrdd566gZYfdKUdKe9fHDDW1JXJx2nZBSbrhG8gELBv5stNcP",
  "key29": "dnf44hWh3FsJUZAjzj3xaXwuPxBgXXYWKUER2uhjPmBiEg4ja5VzXZFyw62y82neXWS1W5HoEnsBJzjFKpPfwCS",
  "key30": "4xkNG7hMM1uJ3KM2ZbBekMCKAv7yPDGvN3ZyaLRMeBfmc7Qr3KH3P1um3g7Pzcows1kmdyaG84Bb8RctrKSHrva5",
  "key31": "3FoZwR3NPnTzqXyYe75eKLvsmdEcxe7FDeA4ncLeTLajSNr1mmTfxdG8qQig6mU4a34vh8PTcxYWVEdUgLdAEx6T",
  "key32": "5CcdsgTJvJ3Z2z2ffpEPXrSQZGVhPCGVcjhyg5Me2qSsHbWwHSZVv6WRXu5wf1RoXj9Pt6dJd9EF35fqvC8VGZAs"
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
