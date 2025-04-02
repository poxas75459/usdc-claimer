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
    "5kSa3Exa1NcDkx8vv9i2ViYycUr8XmardoDLtXR75HHFoat6Ud8RLpezjPjLTrwqgym16exT5MjSWqKmJytTrdBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Y7XrhmdNn3FcmMUPf321tZtQhN7LGGdsm122zphT7m9Vj21zfcZFHCEwDs8r6T728RhDf98czP2Es7SuxzLQjQ",
  "key1": "4RTCkw8P9yDs16RFZbr8fi83K22P5DP9McX72St3mt4vsKVmP25uSAMTvkSTE9a8T33RqxDQ2NaexbgNDiDtkH9G",
  "key2": "4LqxFWa6WEAEpet9H8B4rXr8utbrDNb8u9ZK8vWXj54Sbr3KHLVRvwpsPayc3xxAKzLaYE7KaeDiAPBeyjFLhRwt",
  "key3": "2Vyqs27dJWoJYjxSkA74Wyuo9Utr5j8i3QCGN24RP8JEpgCFj52qzpPkDh9CS2rMwCAZRsSMXNXxJyMACKaE5yQF",
  "key4": "3bjA3zaZjJSKRknudMCbmcDzsfwxN1kqJCrg2Txd7f3VYn7FiP9N9H9jGidVxMZ1WUR87N41KFyfXgZ6D7rYM77C",
  "key5": "5Zt1WCZbveX5qUSPKyZnCXW7BYfGjVJVwsKKek1rytCTGuHk3Y9B7Hqy9GzUUfVac9Vs98KvCjDBYnTnDgAepFwm",
  "key6": "2ngSoRC8RNWT5FmoYRUJN6TK1C78aWfRTwG74Whqci8xiaf1wMYY2RNQEF1dGntzsUQ4mx37iHdGREGnrLwMWJVh",
  "key7": "2kQmvpK7g64nszJeC13xPwLELwdsfKHvXsemHw7xJhZSY6495JMXr9mfAKSujWqHbs9ZRpgbSqCJBdedTENQuBtD",
  "key8": "42kULS1cYc5Bqtu4TQc1GZYAQzEtCk75NxxqFVQ9v83spy5T5kfYEWCV3afxKhEN4hRzvfmiTPK4M2sN2zM8T5p2",
  "key9": "4CKcsq6BKPcPKpsJZxD5vNeamrXNsbEY3EZ6BaLPycVPxe7eqJUeeecN1o4qHYGLL996CAuoHcs3Q4Fc9Qz9qgPk",
  "key10": "4VE2m25YbzjtqdLKVn8fvZp1FxHnx4CZ4HvxQvN6LDHb3AFJtfLgVXsHVm2hs6oAeyYJzSueVdSjR8SAw2WF8TsN",
  "key11": "4GgioXKbB4BmTem8YeNNRmZBT8q3uH8rHKJYJbTe71BWEXpU5AxYHmHKn7Y5m8LyP2HPncj82LF81pbzsTmdYp9K",
  "key12": "4DNmLMkPLJAbBibWrPiNdeihTee7GzSMVVpyw96pAp2hTLUr91rL2QHVNEG2AmKe8SKouAv6VgVuep4jNQc4M43V",
  "key13": "4oGYF6pPJDQcuHxSEDDad6PSrJo31LjiEW7kxbBWcLNBMdhvgjYboFdk2eBDVkT3K2Wn9o31UfawXuk14mopZjmB",
  "key14": "jXXruUYgzHNWiDVSkMAkJZGP8oStL4WU1z4tDcBfonFsAuboJyNp6g96oVT85adNgH8fqDZ51vpE1MR5tPBC3z5",
  "key15": "3D933n76HQP3jgMd4gH4He2xUFGXvEZdsPBp9ZmGeYazrXASQNipRwNViHeXVgGrtcC9KY57kQWgSD9pSR667r6t",
  "key16": "3gxTzkrZXKcsMZ4SV8zxkmzAkiAdREFajmPS3mgWoEoMzXSYLoMTwPuF6D21Hc9eiGNxHwesJwpkUgjA217xnpQv",
  "key17": "5Cm2Sn7prvRHe5npMyX6Z91g2pp7n9HXc1Ys4VhND5wUTP8WvvQBEeyc9SAQTxwn2554auYbhfdkEEtHoFRhAXqB",
  "key18": "kP6m3vKsnkF5Uvr2kwSsUPFtnzFjmxxnC1YHPmkz134JR1sRD4c9zgsD36tDm8xZQd9nBycLwyBaDkZ8rxVRoEo",
  "key19": "3Mcd9dGimmCh2v1gPmLiSFimGsPHhsM2NjLL9GDY5aRqyA7VQRvrsvPFzyxD3iBQKtUxqCSZzB4xiqfJ8UFcspYC",
  "key20": "2Ri8syLux14Mi3DxPkFLK4QPi9XCq8rM5VGhYseo5dJJMwUMFQYwCbDnLx23ZZdjFWYfkiFXE3t4REAdMNp1bU2k",
  "key21": "SZGpazaUfQA2qY29CfnaKMSUKicXTniCEfRaSEsDHDVaeyu6uVUVEU6Z4UxtmEGg2QukS1YvRoFP7yV5CPr98sv",
  "key22": "3FnPuM1Mv7NmmrqgU1Zrcorqj2kcez3vs8upiW1S2BC3Hrzzy7W8EK5tw8cYyw398NGJFNxggA4z91wadDpRwGfN",
  "key23": "W9k8qCJ461V1VenE6Sfr2R5yj3SabNCuriiTYzsALTcigUSJTbnsn3f5kANXfgtCuKZd3agtMtHF7mMqs4sZErD",
  "key24": "4k9VGv1LuZcgsMzXErC7ajqH1VPguudqm7imFpZhATSgamhntMbZ8TVBao8n1vGRwFae3SdvXcZe4FUDUts4uQQN",
  "key25": "5gzZxZozFcyB6UiwYY9iT7ooCR3nxGpiY8Pc62gKcrokXuego2awkGhzJgaXqKbiWJswo3X4aR2nWfkRmsjEqrya",
  "key26": "2jXABWDho1oPFbQPFvaQRxDhTGZT1HjW2ospWAqYaELRHY7ELfjq93v4rPP9aRsVfN7UEdrihwmKpzGrhEsRvD1r",
  "key27": "4eHHksj6v19tq75ErS5SW9cWssxcxNM7JvS7DUaVqQstbGPBP4mtFo4nPjwaSEFP9xaYAktom7dSQSFWbQ1Vyp4r",
  "key28": "5WxYFMxsjgcFWvgzvRvuWtH3KsLGnHCoDkAysVjArA4iemsrJ745nEQRRM7UsH7poVKScDdXmdFZeZgiS4WsgkWB"
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
