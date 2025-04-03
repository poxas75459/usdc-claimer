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
    "4auRarnBnWAV8yAvpitEHhbDja8dgf5MRNvm9Ek9JGt1Q3jwPzw298ZMCkkkCEaW99bsbFM3T9Szr68dbBgWwZ8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CB6NoXW7q8CCZyj2XZpsgPcZFNCXptJa56VPs5AyDYf8wp2tjRhpN8ZKjn2fPokboGLXSnD56thEcKLf96T5RPK",
  "key1": "3tnvHDENyVo5LJhWerrbeZqYuH8q4WNqQDUAUzvEHo1Rz8JM5hFMBnRcDPSYXJvh9CPp1VppJXYcuKvLHUaigEjZ",
  "key2": "2wGGP5uwxgKie6XAJuAyhn7aSKaDPUwXBjehs2CTk1CxvSjX6yHL5pw2HAS5k1QuLEeywt7Fvqni4fCPDVRcKSF3",
  "key3": "CcpKQQ89h1gX2XXy26Ko87ozXKVRXA9PcRZ6RBsDtNZTTxAGdGfKLjAw74GqQe1CDaE9EgyGZ5p3F4QHBqvJvwg",
  "key4": "8xPZPVdMSR9txTvm8FWignDDBbj18mpe1kFSmZyQWvjdH76c3MmQpbp8jdtLvvpBG1ScZVTnueLMgFHy2wGHchz",
  "key5": "36Nx76V2JgRWsWFrRpXETWhVyfdWUYLCcJW3wC8CTqyyqEJRKu85zjfyvP8cWRDfrjFa7iJtgKKA8Xar23uuKvcm",
  "key6": "4DNnjmWsBSSQJdbHQosYfV6313LLFLE2EJaDfMzUxzC8w35kjTG1wTaQjYC2sFoY3snvLjpwKqwbiJSBkcft6ZLD",
  "key7": "3ZAKkBkMBCfUa3BT7RRdYWz1yQjTui3cWWF1MRZ5KyqrNQMtH4qYoQ7EGinCsHqHNkw8XELjXSTVCr9jC4R8BPz4",
  "key8": "514dzeEArNA1VYxZ8GkwrSP5XKspWVmqZQw7qVMPLU8LbJaTWFRZpd4i1X1JtEsqT8qstneJZVZGUQJtqE717cYQ",
  "key9": "4MghcY3ScwYcF33om3eepCRcpnXVnuTvypTYboTjwxAaQSuNS4h7UCgFEpmnUaWCPNoE16AQZhi8fmShkjaJdh3o",
  "key10": "2kQP77A3vxY1peyPtWHueuSdfKoE49RAf7NUFkJFfsaFRSb3Y3vPGKhnQpbpyt7kJ9NUgYVc1neWqANXepQSg3B6",
  "key11": "4px1SiDnwg77oKMhj9UHKvhbbuL7vycaKpeoALsnHnXhtb265ifU8TFoFS1scveF49cHQrqxbbmHqXNRLRbkLSvg",
  "key12": "4hBD7MnFAvkomAg7dtgGDh6Y1T8ETU6T6F8C4BkbLoox3TdLsjYhsjRrWoEj7sNkGvHiTDR3ipEPKbEXy1DhGjEK",
  "key13": "2JKtqqrkkoSzY8F2789NTqWcUC29vHhBBZxA9tagWppxLCY8MMph9FZmwgQdJBfuvSDu4FMRGdSoFzvSUzwxaGUU",
  "key14": "46PTdv5naYtboXKMfwQGzHFXZvj2X4MnFUxstQfgr6CEe9wgHbvTcT6hMpXZPeV9knAnrjXsCvMYB2UcZcf4oJwm",
  "key15": "3xAn1YRkKGryfWT7LPvoFL5zYYvc3icsssiE23Yb26ZqLLJTFDU9jxeh3Yf21viHyo8Dw5BsLzvhwFhWyATWqaQp",
  "key16": "3gt8cahpyAdWXeLPy6iJ7Z3eJphkuhUHNsq9FTRzofdzT5SpY5WDiuSL4XNGhsokeJCirXLfQMY9ZM12FxzcvY7Q",
  "key17": "27pwA1vdt9iBNkYNEd3QHvuWtodgqwmW57tCRJj85SeisW3gYYyXJ9mF4dQCWNgoPoGnyYqDqJEzHxLa4FBoseVY",
  "key18": "46iQngBVResngdgyaYSgSzQ29DCtJpiWcSKCadzxfEuS661CSxjGXciGd4g35UWGE2L2hJPVMboxKJzDFPDsXpme",
  "key19": "3XxsN21FHLjx3eFmeKAW73wL4WuvbH5Fc7vEWaWu8xDmF1eyX4b6j8zGLGADuKmL15YTQPP3XxXJje7ZofoyKqC3",
  "key20": "3kRfUpcun4zBn36JJuQJDRLQYcPNEJ8d7jtTZFYwT9kt2D2LYLGPHRaFbNRHjrbMVmRKD6AJSKoNLREngq3ftwaj",
  "key21": "3w2pnsEbuGTpUc9XPzwAsXkg7cn1WVejcTyXQarnRGNZbvTcKUsjVgxnkzZTbhaDCWQMTGC6kiD2PkRhgLCaNUF7",
  "key22": "5ECQrhiB4ipnnQtWru58SD2JqYkurbS31fcdVPX822vau84CqR78W3USqT414a4iAqPnma3WVygrihz81VgxuRhs",
  "key23": "Mb42v3Q4bp3FE2qsZdxq5EaLjrheNZcgxDMP4VxswVmkJtKbJ1WfXCZJhKmoHiFLxL3VcYEC64SVQRpiReKyXh3",
  "key24": "2jdC43LEkhh6mFqAcbvhyKKYBP5zpEUb3rTt4gFWfw92QhbVNczcFFpK4SUXvb6pjQyz6ChKooeETmLD7WWbX6PX",
  "key25": "LqN1SPqCZ8cwQ3imk2izAic2oBDVgCj8HUhsdakJteYjWpyuifEVb8cxS61yGWa7adagvyNR7pHs26Uy8qd2GY2",
  "key26": "5J3osCv7xWFMyKwZkJrkphH4dk5Uk6efZwu815WTBZES1bMKxHckdvf8jSymtEMA8StzN4FnGuh8WjdcchnUjtVd",
  "key27": "PjrMWWyGJLSSS14uLjedjaitMC76kzb5UAsx3xcYrXvKNY47ASWZtmCge3vsYyJnbNrXxuSPjk2YbmGGuKuchoZ",
  "key28": "364j8xPUtQF1AnWm22q4DxbdtUwFV9ZkYe3aiq2ct5zLVVQA3xvCC3tUxGhHb6Ej4V2acTzv4JUz2YPsKbwT9YUH",
  "key29": "2A2o6BUeC7T2ffUsnhyV61i3YKxjFPMGKbkiAKQNMDXme6EoeicUCKMDUmCVpN69zovQard9xmMtNN4ZVo31P5Rt",
  "key30": "59sveHxbs3xmACW65RPGXXBpQjPLKbjztdGfnW5jvNDUhY4ZfT71Fp3EWoBTA3s98jQF78576KEMVakHJqqBm1S5",
  "key31": "5wR5BonyRebyqGfZBTESgcjb4A38vZ6hN5MMp2G3YcSavj67aEWgKuZictoeGiVTfXroxZ2c3TnUssET4SsaJDaR",
  "key32": "zk5Taw9ZM1sYk3LJby2BKaTzy5rFFTesVyGAawdoearD9TnJdzNnjj3pgCPZgTGvxbzVuR5GaYWuZ4mJ1YniKvb"
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
