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
    "2SxRh1yRzqVG4NuXPYoLsbPyJHQhJs6Vcfwz3ZQLuHbzh3rJgsjqDqVeGyK1WMRfgXzLN7R5zKa8TVBE3EGvZayf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XaYrkY5yxKm19JVWNYNW83oqsenLUgKJgFDefYQaEzxppLcWqGx9K4DPqmFyMZyhBRsPPk5gHkU2u9GDzjkXGW",
  "key1": "3hWUbXYPL588L25ccDTHGC6d2Byyea8Je6rduUJHLgXWFKTpvCDNxhfrecHnjo1WYyZk6eR9nGgkJHPnNsopHFH6",
  "key2": "bfJttbDbsCcf2UWnC1csKiSRFyB6PU9qNHDhc46YJ48mwv4hg1tCTgyiZhfw867H2Tq9LifUfNsype2dKb873QR",
  "key3": "QKpDk59hqoYbLq1exZexVr2qiNwfmw68ZCVfrLPcuY2aekhBsFmxkssGTaqhhCXGprKSXyaQCBVJX7rmw4XEKxN",
  "key4": "E5VqY8AbCbn3ES7P9wMuZrxyQD8DuoYk9YWskRrA5owQWXEyH6mxBBw5QVVHWi4hH9Wbnrd9Lg5UqW9DjuDbCBJ",
  "key5": "5isBNuhjBgY4GUpFc9eY1Paa1qdMhPuet6XZgAo4UbHAxz9cPD6U29TNjiZrtoTdzj5zCEh5TTDJoddBvuXrE2fj",
  "key6": "45BaLJiCuGgwSUucLAQEWiNLziPCnqK6gEgSZqhm6EiRhukkDUYRAdxSqiRWj6MgSfS2aXQXcw2j2Kx5WdNd7ebt",
  "key7": "2Ts3vfcudBEo52L3ZY38w79WXPHmbixX3PivVaRk1bXceRG5YfuZBPi3MVi9YhEuCyg17n7qx6GKJCsxkyWSVKfq",
  "key8": "3Bu9CeDRNRZvnSteCJqEi8BBarN4hm8GPgq4NrT6Bzzur9wq1pCd4NeHrRxNLiaKJesmYcB6Vk2Gea32wGgjek83",
  "key9": "5NwVrV9fnBrstMkwCa1UaihtuLmfspoKZ6a5Lgqu2DPbRGS5918LKZ6cPs9GBGMreGygoVqdKSTfKNwcTnVFT1oz",
  "key10": "2H83VTrbRH8ACFSbTpEuwHBPKh4pPvN1kzH1MxLzApVHAFqGzUuaeZ7ZziYY3TCqHznAD2FHqyprAqcU32HSTdwt",
  "key11": "5e4MgrS7tNVg2QZE2MoYYKFMg9Ebh3vr18xVFWVx1abRDDEq5Cj5pdfEramtvFS2DcGuisEs9c4tBZ3Pwu7UsAMu",
  "key12": "3WQpwH9wBvMQnq7yGvQsHDBSYHA4itidcyH1pomrnZbsFYQqzm2js8Npxxus8p9svGq5AmXMyJ5DauBMAhA1KQ6",
  "key13": "FwNBFWz2qvdCDNj4Jg9wsQsuahGdLq4eM9ZuDK6RNwPGYugtRV2y9Ab1PHWauJy4zhTFWvcV3mhubw4fxgoLSFS",
  "key14": "3RyFq8UTwtijyTWydakod82qmmqdGujASBYPcdzQkh5hQE2YkxCy2mtDKijYKm2FaF1wYsRS7iTXSi3auArXTxNU",
  "key15": "4KiFcQpYLA7FpzEZ7zEmkdmtMJJ3P4BtY72oKAM9XeugTHNqk9NAQhqk2c7WuvUbar7yqRwpcQsoEFADSa3mWWXK",
  "key16": "xobRkbsuyw6oaBvCbsn9Jmeq9BkDFGfExnW28cWLPhp6tR2r6XMD77J1vFcdZCF97cGUpBgkw9xNgpBXGEJWWqh",
  "key17": "3DFwCwWQ5eaXsij8Kj8XgycBzQxrL78CcwQAZT6isiSJSEyxN9DUDNMRbaYUvXftuoRTaFpfijun9wmkDrbQMAw3",
  "key18": "4qDPEbrQbFU83BGzzRCeVGRQFcE6aL9JxTaYRr8KZZdAdCXtF5u5jYmwJpjczdDC8tCdifm74Fp4EjxnzkBRuaMk",
  "key19": "5rtoN2sVP5dyJKNzPcSTuakAsvjqA96dRYfQxr1rkETqytEuTKBUSnNDHnTk89SCRUvqSXR8oXumad1RhUdkBN8C",
  "key20": "5VUQLNUfC7vcqGSdbMPEse8yR1hYWm73PdENZRTr5pdiuf6qpnYYiYHcTzRmVDmTPgzkUfpHRMLrrLXuBg4V6upr",
  "key21": "2iKu6qE3H41VsSyEbsKLMvXZZkjfop79D7Mz4UbY9wjFT7yWFqZScqa4WGTDgKVPfQU7Y4KiAoy5sHSqB3viqEFw",
  "key22": "2pnVXa8eR756xRNPee2iphpRLG2xvoptHcYRe6e2sK95Fj6Q4vZSt7GCUqFnzDw9LfjbKgks24iSio5mQSaXVfq8",
  "key23": "5chNAfQXnmWhtHoqzaFfkQ55cN5y6xezimsLgNd31mfSuSNCo9eekhpvh8dRtNNncEFYbfUvgopxLxcUNLidUwmM",
  "key24": "4XzywzgLwDvZpDs5GhM5rqabRo8FkRApfCPwJoQ3y7pCYLjgN9mgt4U8sE3Nev4ZzTGVpfSiQBoEgg6Xwzzn5rCB",
  "key25": "W8saDtS5FAuEGR6ZECLm9j1r1z74KtT6MQTZF3KjedXD91orgDeJwg9jjdQNRCS3zJPzpzby7g3749Dv2jrReFr",
  "key26": "45muQTgzGYiAmzTrcZ2uSnyCwPUrUeBCsDgybY2fDiuAcubGeNPxaztDjW1xpJRG1KJ2rQGsKLqaXHuAPz4oYqaM",
  "key27": "63hY6ErXKLm4eqpAQLbuweciV3qQupYTiHaECjmr3eAq73rN7mDi3Gtz31w3TScezPuF2iExyrtsawNDxsfm7wPD",
  "key28": "2rePfoLM2TryUui7KdbKBqacyCFHN9rQS8STvVD7NMVARcyPTStViadxM7GbmF1XVnCQRfDWjBt2Pw5EaFyfhrCe",
  "key29": "naBsVvN9ZEy7u9gVTmhgNTq1xwvUbJeZNZUMrxkjp4K5xBch1ZFpf5yQhFScxJ9RHumUGF28WrVuYMnoFsATQt1",
  "key30": "3XGrVcgAcNtMikyqv5WKSPudniB1NboAfZDb3nbbA33LDJxjd6CEWTdqiiWspAViaxPxPBdcch5WWBUSMLP2ihxU",
  "key31": "WoUbUjcEaw4V1SfuP8w8rXfN7zvsJTgPvDDDHUNasFjnohZjGVxYWczGZZhHgUjXEFdTecdzuLJeBf8dZi7tV4M",
  "key32": "23fS5B9vr7msVo8yDVkp8xu2AS5hcN69Qj1TPQEytTzT33N2GPJeqj7hZyzTAmAFGTaQUTGUFZqPGeZMM2Aj3858",
  "key33": "3uHDt5a9F9jUydqvcnrmfsjA6hyymA8waVYG9er65Cq2fALAXpGjkxgvZ7n89FWiDRqefFufBpcMBxvEbStrizZs",
  "key34": "5N3SmrkUyxBb3SRLE36HAobMB56TrEt8GV9UZaKXRekfiv8oFrFyqT7iEoSRYgqKDEbMCgDWLRK5zSMaEyHfrUE2",
  "key35": "2ZRWvgiBEJHahiDc7nu2PkMAWGQsZdqyr3eWdmavRz1uD1aGkBaMSdSGecbkAq89ATCoo9oRi7HXggabzPnT21DR",
  "key36": "2KWyGrpaS5Coam5G8TChvX4YzavkWkBLezXwgMbhdMQTXk8Mnh7S4JBeSPiz5yMmfhiySFG4eWPsicjc8R3fM6hb",
  "key37": "HcRywQ5RD8FBaygcVvuSv9g8ZcqbedZSm7bffN4oEqWnVkhdEuhHiJ2jATQEqada378R6H6czTbF1tgHjqmRgXY",
  "key38": "62BKceUkvnVnFCJ6nsH2Mj5Wo71EDW6B4Tz2qztxpH6zJATFjYmFLiyENFtMWxeHcT87CZvAjqzx8rJrR6vKFtFP",
  "key39": "27MixEf2FP9tKEMjG5dgt4fgVbtvFCTwiGHYmhpTNA6bsKYpBpioCVMPpSioVDMqoscBbvuW62FSyBpVbzoHZyFS",
  "key40": "2iKpFEDY2FyS9Ss8d5mEZ4LmieHMtXzcJ4hMhvFFPVLAXnuaZkZjF3H9HWPp2x7oQViREyqATNTi7qzQTcdjfAPc",
  "key41": "31uR8SLH2h9Xe1cUY7yVGuVeR8ZH7ZV2w44sJ7EbyodGR2NBxh6XRnpxgiu8tv6RXkQ6rhGfcfaqXK8DZeLCJwn9",
  "key42": "673WYr9n9YdqtrgwNvKWeSiPpAHKCBXut3EqoYDw55r9sfexLvpTc5dFmdpoY4CCEeTfS99xb1HHv81TEG2VLDsY",
  "key43": "2PWDrj4V9yfMfK9fKGZcbTKkziiACoUe83RwWTE3YnA8bEVAvGy7WtyV56HULqu8qPJi1kdbYWHbzLWtbt9EpW4S"
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
