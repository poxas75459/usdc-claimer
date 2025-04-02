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
    "4PBS76agurzxGdBKRncGpujyRxW4wFRvj5F64dLnYdyMKVQiwRijvgkuHwpRQ8xGLHtBou3PkxsRA51YGeRUWgYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXL9Xc7BriZjb4GjuWbdFmpiqFqHKtg1xip42QnQt5ESVzcTofjh9zJMSvskbnEpS3VaM7GAkF3GFcYcZMVQvUb",
  "key1": "5Xm3PnxyLYLbMwAFWtw9muW6uGmVecj7x6U2BDdnKfavQHgsumrzZbQ6NNnmivbfNFdXZ1X1oJGMuDSDRM86cJKi",
  "key2": "HY6huGacFQ8EWAiKJuZQExmR9UD9RFVKNm4ZcPBbhXxnwxQrCPuNvf6ir7XeWA4U6HWELoynUMZqUNTFnhMPGMA",
  "key3": "3rmwvnaPcmCsEgot2RX1THns5ZS4XGuEfXTpjBFHkW2cQdfTW8tK1gEjTgpdvQVLJK6UZzt2npFqxa8TnJjaHaZt",
  "key4": "z1ptbWhGd52U95Z3JSmcLtp5VULz4RUP3unyxUMmbGSxG458dMGN898ZnCcnD1yDTt5XzTdbPbHb5G3izCLzCDf",
  "key5": "2EH8AMrMLS3tbcNMw9XGhtEoVQLm4hRhS9VxMk9vSTpkimGczRw7uzjMYTUSSTtgRmgHDduMWQtyj6kB17WrEUz6",
  "key6": "5mWwaJHWL2KNFjjKxDqcwSfxT8oMDy9AMJmPPcTTfrH8EjiNr9qckrdj7LDrkJ8bPipJ8oPv3sP5BCfXBnAQZDHS",
  "key7": "4VrKVD9eQKCXh2rZr44bieRovHeti5t1YNwt1JZD9iutsvjHTHSnCy8v23FMg4ECVj3JNS71tDLSR5KTRwgR8RSe",
  "key8": "58u7vCkx7b2qWdzBUetdbqWmhtyppAEoWGp3mW3u81YRyPAw2ogqUMJwELX1Q9ADBotwbDgTy8YaBPGTXTxYnh5n",
  "key9": "243dQ2cC2hUdNgty6whFdP3PVYU9duwAyhgY6tYg6hwy5n4VLgx3nYjdCuFkUbwk893NHbMJNWgR1PqPntwBZwM1",
  "key10": "4NeVfQdPyE8G2dBWV4L48WemCyuK2k45cfMZj4VDxX8JnPJe98QPguRJ68qUcGpDN4R5e1KSQq3ak9NRoQ4PhuaX",
  "key11": "6xWAMi1VXdX5KLFKuEDZ32BZCmCeR58vgGEwhigvHUXZnhHfktxpB628ECDp2aXrdc5zckG68iEGaFzZwosryBJ",
  "key12": "4Nj4PwcmCAmmQ65DoU2p4FQUaibpN4aQPNW6Ta8kAXNLY6M3rvqP1T3qu4cXKxgHSd2BNFzaxoFAbiSaW1ouiknu",
  "key13": "3VfoEUbCff7B6uBLxsByAFrbpCTuTwwtQVbVDsaA6HUryZenztJSFAFGYg36MjBFDFeQY9MuQkDdC8wi59Xa8Pzg",
  "key14": "RoofV4Mzanc6WjuSHDCaGwdPstAV3rnqRi7YwXpz7v4oUszp4ySYKMyhFuiMkizHg9bzWYDrXdYk1u84A54UHe2",
  "key15": "3vYYUFnu5g9JA3mb8nzCMjDhBcFRR78WfJysF4s6hwqUebJkaJyBVeNfDzTgRFWXcVBML5uYvuVVSnPiWFvdDHnu",
  "key16": "34wLoUXMBHfoDTbmycwkR1wr9fDjRmzNbgwnAdgY7HMSUqXc9MbuKmGVReX4s7fus7NyJkx79whvXWFVqeyUYWGM",
  "key17": "2Li7mcd5JpPUNxM6MK7zPFfXXXy699AFQhGPW1a5zNqgh2MF3DpRxFJ1G7ZM2FhKCgEBPU7hxDpEZkHviXESFcLm",
  "key18": "62bdBRTsV4oCwY8oQVHBMiZNN7NzWtr13nk47kUK1eJAXitSL6DwkKoezRroL6WVH3hLixAsyqKoUUEdQB8cU6Fc",
  "key19": "2rJQkV7YDA8NP9Fmg1FZrjLro8wXwBhvuVabPsVH632MzNqMBpf6i75Ycjey4A535G1j4ZLgv6fhQTjUaHRDGPzN",
  "key20": "3vAy3Cd6PLDovMA7UvuLXnyH2U5YWMQcg7m9g9dtz6wEJsLyobyeYHyxSTqERw43vkRx424HpAdtEsUaVoXGUu24",
  "key21": "2jUuCe3DPDpEMrJYdLXSaZNTGni7MDC3C6iceRUVTLybLGwzCMU5ew3J3KtgcPGJBNoagfdZuUVSHhYSFYtpCU5Q",
  "key22": "3dteefga1V4c5YL95Cbk3SMKu4DNKmD8nzhzPoAeVpZgG33sv3YmLgwSJ9V8KGovcZ5qiuptTdiEQgjP2ENkXafd",
  "key23": "2nQXXUB7uJo6PeQKUigyWJKqXy77rdjQq4xbT2T5uBMjLfrsJAFy3DxUsg2CPUVCw2QfmjcyKeFx53DTNn8a4EuL",
  "key24": "2XFdxJqCAnxn3WVVzVbRHRtYm6cBEL9pZAvckCMu4M1dd2Bd9HvRRSx4hwDGt9QRf5nEdvgj6esVoajSaqtrSWWc",
  "key25": "59QzMXrdt17kDiKGB8NkG8K6KHysvf2z2uW8PDt9SNhZBHZPG2SKQnnreBddJKt4Hhdkn72m6VFdy6p67iSSwoPG",
  "key26": "15sqg4tPXxJXWa9eJg5MpKJTdFz8GX53Kyx8N5wdg7VXph7rshR2ziWJLtg6pAxY2PrUotHa8xTYcrDanuYprfZ",
  "key27": "5nZdXezPCZRgiV5mGtEPrHkv5c5rWqUQGBYJb9QnUdm2mLgm4pevuZnf1vyiJ4rcKbDDTdjDW8HEhn8o1TLKoHdP",
  "key28": "2W2pSUTVButDJqXsJHJtKJhBX8o4WRtGcebvhmzqF6CpBSpeAfW7xpK8a9c7uuiLUHrdfpjCqUTw1PbWoP8GLmBy",
  "key29": "3fHkPNpb3vzvadGy661ihtkcE3279CRYU2w3BqCf9V2eqhXbceF5g3sprsBZzsB5AA9q1CVVhSNsqxrYRnL8TucM",
  "key30": "54SXAQ3QB8pcYTeZ2stW7u5yWBoxiv3kRXGS7wPTb96rjzGkFrfF2oWnZL6SjkmVjKZe12yRSkrCyArSWwe5jYWb",
  "key31": "2nn3Wh9Vi6aa9PkiD7XMpDTMnoFk62UFeXRGPkw5Jyx4wpwn4BJryLFCdx9BKhtnanCvKQKFL85VYUj1axsgKE7y",
  "key32": "5cBvNzc4jj6Ad58P12VAyAKw9mzLtHhUMNwuvFgtkYhKEWNqU7GwsMyG1thsdjH23Lb1SAUi4k5Q8CwTmxCFr4ZY"
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
