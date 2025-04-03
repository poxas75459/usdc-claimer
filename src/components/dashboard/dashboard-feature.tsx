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
    "44mvGYNpSrmbdV24tqSDHB6uc9oZc9buDEopWDHGiyimD1ayttkW6GAsrxNrNm39AESK1zt11secr1RFE1B2gDJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDH1HGfLCmEXxd9qJjJUbJJgq7kNxbtx117RRZjeBrfSZxZQrgKnbUYK8ZgHWdDHQfHeJZ5FvgrDfPFC9gYPjEC",
  "key1": "5cMgLgeDMLZPfC1qx543Gh8azoZFToXQhFBFWXruDtzB74KwrxXaAjJQdNuTHhWjvBnxuJejiJW9opUP3uCZmf5Y",
  "key2": "2ZQ9dVMf4eQTsCjZAEZGHLH9R3vn21ktv4e9WtT5vhAvZ3whqhqXAsbxfhpDKRFiBFt8LPDNPUQsnDRMoanGhsow",
  "key3": "21BLyMhZhGUdaATDWijm76w3M9Nu5ZpFU5GcdVoWgeLo2ucLJRadZtXKRKUjbRJy9BQV54prDDXAcwnwtfFwYEgm",
  "key4": "4axQjSmjUu5jKBjmys4k5Jt3GdBQK5iPKmUm7b8x6zK6RME2AHRCeBfgXzsvRWuSbRdgQQNLwvgw614GckDMSx23",
  "key5": "4UkE8uXib2RKMB9D9tKtGgWvH4Za5747DfyR3pRybxKSiUpQtBW8gsMWFx6FmMR4doKgZwZ98114C1uNUemHHwD2",
  "key6": "4ThfiD7X6Zx5xGmbKaTM1mtKsf3VrUJ2oUAgduCfMXjN9gr9V8AJaSKopXPN1wVoNhcvW9Ju4cP3o1nsUonQLM1c",
  "key7": "4HxNjFN52ZZKbn8qWr7Werynsqmu3dDWyemWASA71Ak2BiqJV1UGHpxSqiJn6zsWcL1h7HYFHc3w6PTTxgxGp3gU",
  "key8": "56mRMADsW3Wd5tyoywkYgH9SfevyAY6uSL3AZevB2nUhWHDNvNFXCuC9pV5egoayb3WUTccnZuf83SRLoBhqFMbB",
  "key9": "3XkAVJfdEujE5bfWrdx7DhNS3K4yxRRhQg2f38qnAY3MLB19CtQuNzP1DJ25TywxdnBkzaLyconszRsZXZcDbiRe",
  "key10": "59TfXrXHLRUMWui2SGhXGZHfCpDhXcHJiTzhvqGDU38B9k5fbJ48QVbmAzrWDXLa3DqEPbBB6WWvymYp9P3Uqdva",
  "key11": "5FhPDiTpMPPppihXmHTzAY5F1dot9VjrrbDTU7o5uoyrbxU5MCq5E4PtddnuZ5WmDqYV21GVnmRc4SsGp6dbsCmH",
  "key12": "2LdxUaQqHoqZuLLLH6mcwTXyoRsWLLvSNgVuwQ3UPoePpztKkx1WjKsmfw8eMEio4dJtXxFjLMgqXuwxPyGodmmB",
  "key13": "2hhhL4uNmeLUVjdytZfHdYBxsTXvVviLAHqVmV5UcmNeY7KQDSqPkEFKt72Dv9kcNK71r8iWCNwjZhNpTBnT9Z6k",
  "key14": "4v9g35rtHubmTMSWk77z6LD7yo67h66RCWPsxyJSpWz7HDhpbk17iRv3Ajm1dNGrAXuib1xLTKP6ACngSnTLmkG",
  "key15": "5H58dR4KEvwaA3M395acK8dMENYy6rsNa2Wkztnzeme1Q9pGv7T3GXQkG1dwSkfTcZNFkcU5NBVhBQQmQ96EZZp",
  "key16": "kyRS9ZXT2GxsHkqK7Tts9zvjA4Fcu6WdBC2iAmUsyKnGDGevbTYcdiFSKUcteTSJ83nTis49AaKZ7WMEqY5ktxD",
  "key17": "3YK3rDkPuTTig2eabzsHm7XjuGAg27odxPSJ5s7kitwEzEk51K3uuf2EtNqtZ6WDgmESh5H8jZd48Vi4XD1qsQ4P",
  "key18": "PwdTjQ9xCkUfbtt4JvzTPgqoBkk1F5d3qAaytUNUV6Fn3jkk8fBas5n9RbvM4CqBcm2qyU6gBiQyPZ3DDtMq2yq",
  "key19": "2akoDRJXhXbP1GXW6rACy5hFVfgZLH4boQoZUMELMC4htLmJZeAqTorXSBZ9XdvubJabnZB78z9Z4seYYyRbPD8K",
  "key20": "2epbP3RBgfghWnXuMejbV4oU9gDJx5awLjG6L4ZJWEUzxZrg9gMLez5E75im29ApTfuQH1bapKsToka9aSEWxq2R",
  "key21": "3WsgnR6qKB4Z8CXUV2rJCbtgTWYCMVfzndrehvEA9W1agD3UUiwBja487ydtsATeKmGjFE9N4VFPyVhidGyTTUgv",
  "key22": "4LL7mTXyMnw3RxF3Z6RNqozQzfLe6CataHnmSDdbTNFfJXMq5hjdAQ9ebSyWLpFrM99DRUPoxtKYBzdSYkXKbzkQ",
  "key23": "4bxmeTWhjDLvmSpaeJRekV8VRTy2KHpdDNaT8bNGihpPAxwKUJP8i1WsacdQhPGRaTJTx6KhBgeSJ7ibiL4fhgAX",
  "key24": "5TEQKXGM5rVmrNLeHM3EQuXvGjmwMddy6qK7qrK4gNELYF7kXeMi9te24yUp9vzKGFLswe9BP4sLF5NdP4BfF7aX",
  "key25": "39rfnazRczfrh35Vuj1RgYJYESMCchFhwkiUwV6kyqknbC2mjCJWiotzZUxjfP8T3sB8ZjTdfnqqhuvwuvkoFr9N",
  "key26": "GqcwkCC1A2RgfnE77fRa8bSrCkeTNgR8rra5iMWjqJ2juELnJSKPsMAzW7XJRR8uF2aTKLc4YLjkW5uKtBDUV7s",
  "key27": "2nSPRsTnvyRizFdKxC5FLuYqC9U8GYHHXqBFshCfPBUEm59n8drHcfpTSfif1zyuy8SFPHmSKapEzvMcmp2yqUPE",
  "key28": "38QcMGbXNY2vYeAst1efij4k4s9gHZzaFMDzw6Ybuky75a7nkWxpFE6Ty8Jb7d6D96T5G8taBtPaHCFAqnPL4Zvq",
  "key29": "WxyYV4m2dfmQGB94yXzpAodQEHs2tTZzhavgiBVyYRZbvq1Bn9X8zf2oPJ3eEuVS7ieM2vWkAje6W3oEZ4D37FE",
  "key30": "4mYcKzuy47WSGfLoYm6JHpmV1A5BWAMKeTRa3RJuxE4LN7DY7qqpmc21scdCpX4BymcdTEU6opSrP1Zo8iWMx1hP",
  "key31": "oXfRDg2q8g1UkkD3VhNemkbgwVtazCf5nF29ThDZ1qw67Lh3gha4bG1mbHkjZnrdYHyS3qDEQiyt3wUSFXZmNWM",
  "key32": "64Ck7uGXMhKa9UenzfPDAfpGtGFaRgodc4FLuZHP6oeQ4Yw8tyFSG1F8b3fQEiKJ62WFBSso1kwNwxsqztA9V36i",
  "key33": "5tApuyiy6BbfhSRXLUXkKNJ5uBQRur5h4dyH2JufuSairtU3SFrYyh8WaT9k355kZVfDoWYZUE5UAFdexzGP6vAG",
  "key34": "64zwPvaUoFyV36Hcw2R2RD1XHuskZ6iW9TFkQQurRME7z8P6ngtoysD9yDryrMU4gtL8UK1mPogBjSwXrTH5yVef",
  "key35": "4VakUQ391r1B8eQbhTP1a2ZeKZJJKAnnh7NtmFK9xxRmJWFWjsr8Apd935RDY7E4Y9ip5QbvWbCpc9hAhkoJZiXp",
  "key36": "g1Mhh58ZuThtt9SWp5gsdg7oLhyC67VFgFkTSHvgC9RnZDyuXy1FQF8L9CWVzWFSWTDnZwRbw3Rzwq8qWraMz8y",
  "key37": "4BNWCTTuHyCBhGiXaaTGjV3n8W9MtMbHBsQM5rQWE2HpEwb6kvbp5qiwcjoTyE9TufQDwS55accQfiaESfethXjn",
  "key38": "59aabFp2UMQDc5iH7V5CtnRPXrMSJPReqiGKsPPoiGwwCF6utFfdYBeoUPqKFkNbMCYfT7Gpmbc7UtpsiQKSteNh",
  "key39": "4hg7Ue1EYYgbaP83LHsLr7181xSctV4WWqNaGh5WiL5AY8nNgekCXiKtbU22mJ15JxvXyBxgHYmRE9QmVnzreNtt",
  "key40": "4afca9xD9nZjzzbefFG6JqnU1BYJVTGKT1WERNsL8o6dRKxspjM2nWBpEKbjuD9zjpgLNgZ8Bx6upQ1idKQ8APrG",
  "key41": "57njb2SgNXrcFHX2guzVASamzU8wdba8nk8YVJgUcepxySSA9wpFThwserqbFfMjM8Pg3tiWMdzCPmwpSAtCiN2",
  "key42": "51RoAofuwrHnRqWm8Hnz7Vw1Ye3tgZ89zzdVDbYHV1uNtHvExyh8CWSVmeGjhwnrMFnJUWhR9Qb6LuJj4g4Pdvyu",
  "key43": "5hmQYDDV5KGg9UvXxgyp9BFErF47VB4SsKPMJraRk6PfZZPnX2RUNtrLhFM3eo6LNMUuy5begGEfvhJM4LypQHJk",
  "key44": "62GuH57CBidior3mA7M8LzcMQygpjHtuyuYPo5iUmBMGC5HjoSA7YMhweMAfyyY8cWpStbtsgmcSy4GznX6aM3No",
  "key45": "hbi2PJZNA47PtcnMcWz2cKd3NmrGLWxrDgAJokD7WTvEc9QhvFyYSMVJcPCKK97Uyq6MSydopWNi9RWoZSVqgw4",
  "key46": "5wWzNVAtG15dCQfRRqcmR2SP4QT2ivsUcqhsV3QLZrtLF2dMHQXmWMqwNo8YgRuZhg8GkYYg4vcDUdLDGXuPoWqT"
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
