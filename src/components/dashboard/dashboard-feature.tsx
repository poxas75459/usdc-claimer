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
    "4b5Qh2BMHqeZVZo3njDuVBCqd4FPLShpVqt3MZfQrYhipeshz1A3UbKN92WxuAeiXrLadsYvEUiaWZVSu95xcTRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsAiiLWb1ayBn7QmsCS1PgbmWyRPxSJdJoW8WDRkzVG7rm7f1FKcyF59TyUxuZ2y9Nfz4x62zNyecD7teYFQFJu",
  "key1": "5AAD6Nsyy3MUmE3P1pDTHhKDx1YbQAJHUhh1WSkvst8HCTJcgLjHBJwmsPZuiYUc8HvmfKvUZKPTP2aPjJsiB5gh",
  "key2": "VZ32o8HXttKWgtdu7fSgNmpw11a84WbxM5PQVwsdfKatj5PiCJRjwX5qvgovqcSfz69MkvKrhkbBuqAh1ckw61F",
  "key3": "Dwm3vV8taUHjaQCJLr57MjRhYrNkr2L6MqWbE24quYY9qX6QJ8yUcR5AgAZihkj6mruK2QmWKUJsgwhXHXTsHCC",
  "key4": "51SVur3Wtps6PyUgxpH9nV9BR7mj6Ajv2CS1ymoPjLfHYaTh1pQPEzsurCk9WyL8fwRYwRuWYsfZt8EuxvQX71Vi",
  "key5": "2J9wBtEhECcp2525P6HnYysSkv4EYJ1ZTeY5NLdPRx9Z3zorS5JtKh4UoThaWpMqj9AFHiSuoQXhGwyW4aXz4z5R",
  "key6": "4NYxqBrjVgodbHJaZnkP2wmrdSomEZFYos1reKYn9Cwyhc5xoC56yNVBTbxvLZ3ja7Qg31UhXUsUrfjybZtoa8ue",
  "key7": "34dyUB16g2MyqDxCzYgJJjq26Hjrzs6JTFZAhSA1UWNJ7jxPySrCRtxya7PD4mNzSEFbuf9LozmPFLHzuazdjGFE",
  "key8": "2zzzJvNyHSss7SYuehAEA3Yy7y3k9tz1QxFXFFekxMktSyTeMCx8kWqbE6cEfqdtD7JruNQxMYtgi9xZzUgmuLV",
  "key9": "vbCUZj5yQ1Tj3sMoAEJoRQzVf1bZH7gSthA65NtyoKPUXsY6ssUW34ve33fSrRfCHVvMKyRAr238ZU2nbfgFwDw",
  "key10": "9EzRYVo9FQL7ZqGK2rAHMKCDVkb9W7B4k64yTw1nhPux4Crur4iT6PLb94a4Z6HTdfT8d8SxRNgTSwoynzLWgSj",
  "key11": "2MhiSW5LVStR9vtVeEKpBeTEaexAXynbuQeLPdzQFqibUFonhFKMVR4yNXT3uC8Mt4MDfYQ71adrcd94wepZKStw",
  "key12": "3QjamL6oh7ugpyRuLNoUVf67zVn4vCPYM6yuYMfe6vRMbTLNUhktAQtjftYYJyfx2YsNvfKS8fXpyVVieAXHbhs2",
  "key13": "4n6S4CCJ3Zv3K8Vk6aa63euRKoUf1TMndYxC1YThxgzCvWLs5cnj34idjfLN6CyyE97iKcdD1zcj5ftiQatcsCiC",
  "key14": "5x7MofHcECLGeS4gcEsZtRhg8sQ5r6V8yH9kHTbpYcAr9hBxeZdscgQ5ZHcHvt6QMSrwce84SbdYqm2LiwJCTK69",
  "key15": "3qgywj5AL37ynN3Eg5cvTqbu19y6ws9kCHYyqAzmhnkku8NTzL6fGV88tcvqyVDw9sGkct2bYEovpZDE5ThzdUf1",
  "key16": "526dLPi4wdqgumfgT3dm7jj3j99C7rNCE3MkA41Wz8eifDWKafEXDwB78vi8wC9WuA7zE2bUsh7NVDa1CLGwWaaZ",
  "key17": "2Cwvr15WCELVYjbe7W8CqTn5PjkJN7HZArVQdBrtjvbKT2UvL7WdWujK1enZwVPPJjh1mgiNiQoYVMFDsU2JCj6c",
  "key18": "maPZ6crTPNi5Hxyvphjz79zeBwydEifruj5gb7qCjgmCKFZrQ9QZS9sUSECtLnCnLLJz5sifCKyP6eg4a1uhrbq",
  "key19": "2ThPs7Apgig8g71WvN7s8JApkhEswyyonCireTzY7beg3uHBJXDTab7JZaNuMQTazMv7sbB2MBeVsJwFDm8ozAn5",
  "key20": "5QnQdzx3h7zxFnp8hMgQ1vAcUGGwcewaRPdL3oqvTZBgXkZf3iWSBPkebUkxTX3QMawnWRPS65xRb1BYghghsHjM",
  "key21": "5jjKvcv4HQzYj4eBpF3ony6psaiZJywFiYMgXikUqSdoEDcXhvWCS29Vsb8P7GMoZqaM4VRt7FKg7eABuQbjhdyX",
  "key22": "28ECoepMmF47gpxmQVU2pmfqonP8rGAoGxqkTJsNHFobSN1Au2B31ykuodrVB6tP8y9WGnaXVWekNEbJukDAv3ua",
  "key23": "5aiKuxCrT4LQL6tDeq4fDiHPpHoaif52CR25xpz4khkMs4AQrv8SfBCKkeWnb4suNV1STPKnZsbWWdZLGb3cCMY",
  "key24": "63hDeF9AtVSLgzCRR1EHzGR3rCxVofcUfQhSznByRCDtAXYZgesnv7V4ErweYCAjRRDK2wuLJc6hyb2TQbjYz4GD",
  "key25": "5FkVHGbHwDuWSDj2THKarcrmkN1t1gmY2xCkVPg2ZdJ7PY3sZNLDda5N56Ev2Ga4MfhMSKzDFggcFwfjpqfkvJyk",
  "key26": "3yZwULwQiH5fs7qpbgNSpM88opP1HRGtDu3ZUExGNNUXtr5u5358Erf5MPr5hx3gbAkGRkrVzEsijeHoofJTppAv",
  "key27": "33NtyTMHVJLpczTrqMyRNQxWypcBvNb1Ua6FcJHYDomoPBuV2zobyZV14pezDXVHMfvqfrkRh5XgAVMQnd2cRvaT",
  "key28": "3YidBjNEGv7HxVMdMoaYW7hVB9RJDfTVZrBouwcgGyxwFzaGaD8bJNNF4Pf5fSNFwtLJCmi7CC4WnyxQq4dd2dSi",
  "key29": "KoPPcC8fzU7hnabkpt2KT4ConEmEXNhSnD5Aho5ti8aRPMRgeMReDSnfwNjXxX2kY48zJMSkzzPg3Yao7Gx5B4j",
  "key30": "4KqpxQomSKFMGqwxtFdYwXBvJBtMWsHLSuDP5FfZG4H5CstKhBi3kZFVPfod7T4zd1rJACpqUaJvmh4Noek2GqAk",
  "key31": "2TVYA6Rd7i8Ked3jSy4Kmx7L5TVhESPrMnYiD9UpAB922wCZd3539n7xSwDcHQUKsMqxiapE3DRBfjNWvU7wktV3",
  "key32": "5FU5puvL3Y19RBFyGJn5CBZbnczegKvggw3bVN5xqhCZnBjRV9Q6dyJLWZGPKYM5qvU7b17ibfrpqoyPJTsCX7UG",
  "key33": "21ZqSAMieB77QfGc5Xeyq2CppnRMLs3bUeeUmSUfGnUHbbgqeqNcQ6wyrc4tSVy4MHKZzU4BvyJqrYEhoCgoGa8h"
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
