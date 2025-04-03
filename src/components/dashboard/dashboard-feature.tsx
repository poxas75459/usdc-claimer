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
    "BLbCbn6V5StUmgVJnhAD74V6the5xFSC6Fs7ffsAXhvo5tRFWLm1RRaDZHrE6CE58dGamTiMvTio5w5qYqVNhGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rCZk8Vy22vwVJkwuLMBcyAK1jR5xUpGzaJxxNEq4JWZW2YDnbXN73DPbXc5HYkNuSAd7vDT36NDsJTntSNQsaC",
  "key1": "2Pu13E5JQyZBA8E7PLwkDQc1b81MPDBkReHTGdY5uu5SDjWGXFBz7MmRMRS9GEeEgVeon4CigXJvZWf5CsfM7MBE",
  "key2": "avscEz3vfcTyk3UdG3e6LYA9mmQHUr2onQ7bSS14VkSSZfL4GTJ2nVKfT3ZHtuT5uxSzVk3cymQwT191NJbCfD8",
  "key3": "NK6ZMuYLRX324FFpFVvm6GBo7aajvszwTDnMZr8LVxDQpZ9a79HkBA6AW4as5XreEYZbCrFbiR65no4BGCKaBYQ",
  "key4": "J8raqDEAFEH25dx5hTWVZpjf1sNxJfhHVivhKN4S87ZCicPFCiqGDC8kV8UMUNcFDqdjSbqY61oWykQc9aUcdDc",
  "key5": "55hGavYzKUqsCgv53WbM1L1KRnqx9xKgDFPtbzCmSntDgt1WAF48GPKLKt1FNoaQgBV6MpZ6SbAYLS6nc4Desqbo",
  "key6": "2ExiBKunfJcYYVe4UG1LiUgHSonNn2gsG1XH2dwtQPsmQQ67iqL39rCULE5xNQPZDeKckxyvNWBXD58J4PdFo5dx",
  "key7": "KVFYTbGyXSm5oyZjA7UGpUoWByDLD2cYvbbgiP8ajAEcyxeW3neGBrnmeaabuARabVTixq4bzPmZ7URxN89BrWJ",
  "key8": "3uetELd4EFyjroZVYryXC22JZtErk9RmKpbjTG3N3J9a8Rejdp9K8v2Di6wCMuwJU1pd1bHyaU6bctNYmEiqF6N9",
  "key9": "4bAuNquErSuGKqpAMpuSHqAiu78LKsJoiQK6jUF7eyCkbhd6u695LMP5ojopsdkMtg1sDrxmJsbmJ8dLN6BQ3GGp",
  "key10": "43iFDQNgTRwy75v4CJWsNJWBPCTV1rgdrEc1niALq1Lc1ffmWubGJya8U5Hhz3mhmxGvt4aXzDSVMUUdVrRjdGKi",
  "key11": "4mcikhWDEcg5KJqLF1zFhB8S8UaFA3ww3bcwnPqwHpRN3pMpdHaWjywm5i2RJApsgqG3Nrh7pVHzKPauCdBtZRwr",
  "key12": "2SKvX4e3pQAR9HQKbMrxn1geqQdXwJ2N3nDrTYP66XmfWBx5PdU29aveYdmrVKWSZwSirVm9YCrjqBX5UKZFHJCw",
  "key13": "3V2mhzUwfjkrV5Vu7b9tHma8ekU1C8kjQahmfh2eaGGxMmugKXTUSMoUBraYrhpWjGgCUm8hJHjUBACZy5fSSsCK",
  "key14": "oT8otL8JtrN5cWjYPmyhH1ADDPcpQYAnpLJEqp5C8vstAjR8MueqC4U7yrpyhj1ZBdBkCmdX4sv3HsKabP1nLKN",
  "key15": "5LHtkseVDdjCZ3FsprMqwWFUmAiNoA5dNVk8Rsu4G8H6x5V3Dpg9TManUaDsN72kVbUJnqMeVYgHNdxciH9Niv4J",
  "key16": "51aMj6DFwqnYa7KSn9buQiNuM84dPrcvGxo6SzMDEATRMQPjb5MEs8LY39itgYNCLJ7RzkovdP3e31EFHWpLs5gg",
  "key17": "3GsToPuz3HhJLKUkfHDv1iAFN7sVHEfkJXHRiCiEcz1Y448wUD2HRm715hNjCuyxiyEf4PJDoTsGwNgKdugzjtjz",
  "key18": "55rLrDVYZ6Y4K2vdSKYLsd5CsTXU6Eq4wp7L1b9LUrzU1L8rLxU6JxCH4bjujLciGFDE27KwJ1KbpA2eowjzZ6G8",
  "key19": "5BE955XdxWdm3dXqiZU4T1XpzVo9YfAdbSzh3qb3WnqhruPj9mv7h4fPS2UwmEB3W5cuUr6Vwo7hZ52zQ86jFPwv",
  "key20": "5GNPtYj1z5roG8Uhx1sMPp3bFEMv4pR5t1a13uQ6KXX2kirQr2AZy9pMnJ79HPE7KiW6G5rUVopnT7iMg4Mv9i4v",
  "key21": "2utvo2H4uLaVL3waUGmpGK1Fu4tVa1bvsJeGmL82DkaejUi51AKZFjgtj1m7q6jGo9krXfp22rRRssAKUfwqHpBv",
  "key22": "65HJqe7Bw44eGSyvWAA2xKTTqvVKf5vqbzteRk9UwMnc3UyE8RuWXGtQepFQpDjit3s5mvqPRqjc9u8cDjLxRmcP",
  "key23": "2fZKrCpZTNvKQoGVEgNHbuJMa4SeDwaXZBVEohX6GoAPLuCgcHKak8HtU4wTgLPAWPrzo19J5RB2Gxohgtyq6BCq",
  "key24": "5V1RuvSNt6RB2pbYMSHqkMSayWGpnr7hsXraP1jvYyt3ocH5DhocK8T8ooMipkNtJdDhAodh6qVB5f5d9pArdhwQ",
  "key25": "4inLEHC9nFHQUUFdonz8YtGAWHrNvsJnyivDCS6pZZFiLsCojujBHdrPe3mrzQ3Z43pEPHX2r4BbxZ4K5hE8Rz8z",
  "key26": "FzAcd1e1zXQ17PttYv88MMm28i3JpMd7vWxRfosmH4f6E456TPiBTzjkPFQYbHpmCBa4qADDdstdoyGLoqqRpMo",
  "key27": "3EdEkMRY4RVu1vvfenHtemvaT8uW6jWbsQ2ibgbf2dgSUeHSpw41FfMhBtoaRJ1t4tUo4pJKQRpnJffNrA8AFRyj",
  "key28": "WfBwN7ZE12S6gdMWAPvhGofMRBJf1MNwwTfxDNuXGjZzLuUaCVCpaGF76Tmb3Zfgx2oDzsaiqURSGWxV6pewKYD",
  "key29": "23gnxk3wJHma3QKDuvavMGdP4xnVV5XE4tRxnQVPmBkAoYJ3Nm4tXe3rdLgsMMW95Mo2TkEDMSdWQncn8pTchAt8",
  "key30": "5fWVJDndhFgAjRaLyYfRGBDLvkGvG2NgqAiLXt2Vh7p5BESE27rqU7kiXMb1xMN2a9J5z16SkjryzPanXqriZveD",
  "key31": "3jyLb9a399mQdVUSjS9o5ZX9iKakopkuHMhjrHHpLn3e9rdoAxWCwvqRGW3VhAU5misaH3fTVa3jc1tCPWrLw4Fg",
  "key32": "2MiQvbFc8NjNA8CEmuvB7VMTQkT3sE4sphxmJmRzxd8qPeWswMAH74KhJMExKcpeLMGw1EAg7oddg8kgCHmT7kC3",
  "key33": "5FRv1qCM4GiRwMY2C1g1rsiv36NsAG5q51tQ87Uk7XFMaiFY6QAwvmhiKmzPaj6a7nTt8TDNPnEvWPgq8edbHY2f",
  "key34": "28FUuKp7xzjVQZEPJ6rBd3wcjkD8Nf4U54btnSt5DJvF5fm7T9s664KcH5NgRMrQ8K7TFkK2tGaF4jsHSRMfMvry",
  "key35": "AGhJnsTdESzCdkErMv1ssBDqbC1bLbo38PzMj5w2WLJssn3hKXMGoMajmr21h23S5GUoyua9f7riL2tBcnK8fUp"
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
