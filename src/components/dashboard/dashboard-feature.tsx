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
    "466GuJzgwRHR1cKzHkXvf5aMqhGeYA8HbWyqX36rX5C4ZSLoJ4BaQtfmxT5VBTbMTAZMcf5XDHNwDPzDijF8wsSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECrekBRZkXdfzFHV84t5LYE4Y33iYwM71ouwdpopAhmW447uDmo1aNgmxzgKyemUYLtkM7aufX8pWYzFzgQtdPk",
  "key1": "3j3yad5hWCWzGm1b5Q5fG53kJ14nNvS8AywF3owtWYEbQuRRhtdgwp5usnbWW9H6iarLPDNQ2Lhos5XZtCikuXB5",
  "key2": "55FZoaWaC9U4AeecuoKt1ReYCVbYtrSEMrdyTKezJwjtJqH4t7DbzzWodhyzsPx3orYUVAaL7mNPYQXBcMgVE7B3",
  "key3": "56Hm7AscrEEF8z5c2qnys3DrxTKRvpmwXPfqDViyHiRWUNrnLv86u2YUBR3KGZ8dU3SBMPHs6jUDZqEKxnFfvx1e",
  "key4": "5aqbM7spsBEeXEQSB9vHaxbXKMdTAwyG2RA2nvf5Awuzxi8JgMD7pB3KDUGVMsxE6FoutjFVMMUzfUrvzXNEy3xr",
  "key5": "3JbhjnRgLaBQszQNyVXaeNWH4z2U9gZNdmQRemtmz7BXreoFrYrh3fRarReVk8rkiGTT5pRzAJGBRbbzq2zN3H4T",
  "key6": "2gDszSTP45PEBCgci9X2yg1pXk88nwNXokp2bayo9hrSjUMLqiThxsEcJRP5e34MWrbc6qJ9V39ur6tTVNg7qTV5",
  "key7": "3sYb1CqDwksD8UTscCMrMhg3wYrWdD4NGHYswoAqG7vZqEPcxmC9A7zdceMzJcjHXMY8waSv99TKKFok3iYztQFm",
  "key8": "5Wdy7pzm2rzJQUtsLkYNYyNUBmiNn4RJM3gnevDDzHmLFSp4c7AkqTqPuHVBv5CYWYoFGCbPqBP7sb1QCD2C92q4",
  "key9": "4xj6jVZM8E6FYauWgnNQCRmKKbSZwnreaVXMAGXkTd59D5MhApWLG6c4GAiDSKk5FERp4i8LcTQjN5hUgsij8GjL",
  "key10": "3ZwCijvaAB5Uhs2dAf2vNETwvioRfkMPDUisVf82xGuXxzc6Nr3buDMgnttUHtQ5SpwmUduPWufNADJbUsYxAaLj",
  "key11": "8pzTapj39VFfVWuQNAXhj7aBwCVPJ7nu2C3Q44ktbikUQFNy776gc4QrBNc5rSx6eZtFLgM3c2UywS1RKmGPEEu",
  "key12": "2T4Dv6mUgF1RaqVZ3MS1GW6Es5U12DoaiMKqPEzsYw4E3zXUrmWovyP7SXEBpnh8envpUQWfbgxdTDdcMkjy8bq9",
  "key13": "4pE8SCgTk5GBCvZt5hyaxoKzkz7URBvTr6jx8Uvs7WZGQ6PdaEbQocVKGazXoW6mkVmRKYKXgALKKX9njHYgPWjp",
  "key14": "5V5dGFvxZSDwWHkkykf5L9BTkrTrYGhtCVWK5rUEnF3jr5FJsufnQct2AbhGXoD9gLyUMZZqgdRRWWRXFxDpjLRr",
  "key15": "4XogUqZWcbNVJzjHwSPvogWNz81iGD64yNoq1ZLWUp9der5E1s2jtJB8zHWWoUAX72gxA8qiqabbSJQXGXykqvAU",
  "key16": "4Fa4SbWcU9eeVL7Pcgd2xCR2bWZ65GuhyZe39xVGiKaJL3DRmGQzWeqbzfmUiod7APvZMYnpTZSmWESyXs2ng5YB",
  "key17": "aKGqYJWvavNNiCrEki5xEGsFrHWMjkiWCF4guahDBopcZDsF3pATFhXg3bQidRQmex1UJdEfm6ShCoXgjcMb6Tv",
  "key18": "5H3qRwrji1fDsN5bL3hPzokqhCWZJfLzonWee3Q8f69QG6ncoU6WjYPnd5GmLoGU39pGHX8aSUtDkqiMakvgyVZk",
  "key19": "6xGz275woJTRHHLcPNoC8fSQ9YLnGZjM6SwCukJnPBKYRsLDRgwJLxr1qxZp1dbZpv8sMnq94RkuCWRYbubHS7k",
  "key20": "3RYEES6WutST1qH7cXpoj3a4tUoTCKnanfg1pr7yaCniqUXhLzrFkaJBQgw3EyuxUG5Q2wU8RMEpZaXwWgxUhfHc",
  "key21": "2tvVm5zQCj92yuZafDDRJCi8e2PmXc3dhfEaqAYwSFYg5FYEe9CKBiNELpKM5k6Fudn5bvMWDyTi9GDYL6rboesN",
  "key22": "SYAMwPVnuSBM32wyM16bFcEKFaGBhHKuCwhGksFaWz8AtoqJunA2ub1mYof755DwMTDrjeLvf5dM2gRorufgDdA",
  "key23": "5Cur21iQy7AGpzB24zmxKsgyk5bbQyVJ1zfD3F4megKsfhkj5UhMA8akGgsqyPk1SAhxmkqkoCmvW3kekpewJKHP",
  "key24": "5JAsE56BXV5ASpNvYxyEZ6cAcXudQRY1T8y8yVekYqqTAdYPFitDUnuvYLDS9kCCCwbw9SVCtwUiXvJYkmtGYUyq",
  "key25": "2KMTudEE3oDmkZWQrhpFbFreqM6yoVhpYrJt1P95dtoKrSJ2h36YA7fNkG6CcSM7dLQiWYczRBzmSgp5KnPjkwud",
  "key26": "3kG4MbWGWaM3eTS8BxPNbKerE8UNfW9wzMXb8By7vxcwenJNdwFcfo9qqdir4otmzGhpUVzwiSLGf6uU1gWYZrT",
  "key27": "5TJgwkW8LryYWGTseEz3tL4Cypvka3LpJwcFQTzBS3EBuu5abtEPmnpccEeWskp2BodnCuXQHvhjA1krFWMUkCXL",
  "key28": "4gNNQ6xA95MVRMQc9hqoJSHfkuj1gtSDEBokc6ybrQTNjupLJLcsLz37YauCgAedBjtW86TzSqz5BjDEJCUuHCTY",
  "key29": "5ozKHK66GZEeaZrKT3vThYiXu7Ew1nVnV1tWagq5nEmNafp4geU5tREMaV6DLC5fthMsGcU2mkAMVZDSZKJe2SM2",
  "key30": "3CigmfYrHaARZFwb1sx2EfZAb2Qc4sPnC8kiTqdPjUvaPMpn3rZX7wwoU24BH5iV1Six6uQ8KC2FznjT14G31GM4",
  "key31": "3WdZRg3fDG7oNQNxY1PqHkAfmnBxNH5t5bYJZ4fW2frQC9gGNUeWdQ7dWicstG2nn1WVFLnRmQY8nMjzuan7XFXT",
  "key32": "4G7Tmh2sNF3JZkiupWm8KDMr43vUbJ5Vk7sioCP89PjRpJLxmygWTTGJptH6CTEA9tMmMNsczu1c9oE2GcGsthUj",
  "key33": "62KjaH6KSdTDDqv477Ta9ijradnhyVD4Cu5Ne64uCf9TmFk67YPi3ZFUftQx2VCgPYknbDec4UcFjLKUUxy9PsPP",
  "key34": "4WLZgAggnJGDxd5K51DxU2szRcAzZjMBYhzHyyqYwqSb6xbqCAhhhdLTprG9FNrinEuXj6TjfTJ49W9WHNqa3xiJ",
  "key35": "LrBH4guTTLdzAtVT2PKa933oL5oLniSrNodPuhVZLz2DBDieYNaZdn7rm9epKMiE2G8DHdpBaRcA6RnMAdYnaXS"
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
