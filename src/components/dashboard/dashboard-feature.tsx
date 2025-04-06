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
    "fwQ3VcQXsAAVLzCga9sPHRjBkaPrpLXyLYorWvnC6CHXz8ybGkJgsAbrUbxf7iXkFhCwxsiQrwJ9BiYmy6Bigsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sshanFzM9aQ9qthjGAR5EjL62j8abRjXTdV9qxxNjYMM1MJ8MeRQq6q9VanFCKEkeZenw29mi2yY1vXjNstQpBH",
  "key1": "5KbCCuANuzcMyjAJxj45F6Gf3A53XsZemXWpG5NYeL6maC5X1xq8vB6wzVcDHBrD7fN4scUdewbxX1EQp5E7CQb1",
  "key2": "3MjBgZuXa8hHLiA4249JPZ2AHaGVMWTWwPD3U2kVVEyL9zoiqLK3gvWSD7SkRSw476DhhpwWoLPkDcdiAErsboFh",
  "key3": "3CX8HigB75F4z4UyTtAKMvqTeURYWgdeSaJD14E6xNmjShx4PXqu3XQuQNFakPZBx48zotLpZCWuQWgZuSeN5SaD",
  "key4": "3sA41Ww2PL82PBgkzYKsbYpQGfMaWtKd7XXtw7xLg3T6J8b81pCzmfNbuFkwSb2EWLP1EWZowYoxxPuVvEcTQ2AP",
  "key5": "2SNDX8YH4JFALo6dTx4Ss5b6yptuTcnRygCby1tXq91wniLPRCZ5Hd5SeN1kXcNfQDhpCYvTXwFSKZA15dPMtbYw",
  "key6": "tycb7D6szYr9C7R1iT6VDeaGvkoqaGn94pEzsczn8caU8E3xN4WtTCK1d7JwDjtE9H9T6mWoCxcdnGkQzEyA2YQ",
  "key7": "3f7KfnNv8QFcC7n3TWuBriGZ9JxoqgJ9V9swPphEm2QpvUrGdaz1Tyon22jfkymx7XxJvphqq96G6PR2SN3m47F1",
  "key8": "gfNaTWjDVhBj726i4zvwGXCAQtaYnExwspSG8WLmTohxS4zQyobwfjQoTJygPLMqvB5vdamRvYmpRsQ2ouGNsg6",
  "key9": "5EuZyx8aX3yRVuv6XZVhY3yysn4z9ENXjF5S9SGsefFZNPj94Yfr1m31uk6AxeTy6Gcm86nZufpN4jEBHpfRQLAw",
  "key10": "3KhWWbo1q5JRuKmSztgBgATYzUQiZLz98dgPgG5da8aX2UgPSrkHyhYRhCz48kHYtHEx9fWXm8uM1FtyoyyDLimv",
  "key11": "VnFvhLrZ4Q6cqjr6x92nW6pRNpj7D5HHRxfnnTVCPosdqGCx6g58eExZjjqDqyPW75aSWvcoVbmiNEAMtJHmX1D",
  "key12": "kLWGhJhoBWupDbu6xXop8U6pRN2VkG8C7M6C6Fa99dN5RV99CiXEirzYUbwrfLYs4dnPQN1gQRKJNUgg6UJcUZD",
  "key13": "3m1bh4zX5u6VNSU3nAgWQEAn7jPEppHXiVnfDk3us7bVeWrfAmk8EKYUSGpBAZ84pPQGNBDbv3MzYy9RcNsGBBSF",
  "key14": "2G6LreSmmhow9qaJvUUccLDiFzm9p3ajRpMRAuG2Vtr5FGaZrLxGsWGRPHKMdzFDsuQpqfM9uEvegYRsjcURQRpE",
  "key15": "4YfKRM7EsCQLKMNTiJpG8D3w8MyffGMnMWgBDxzdRidKjwF8mkDq35icsiWJk3s2E73bkfN1D5PG9UzopGSQ8aRd",
  "key16": "2SbsmevpUnmqB3exRX33EysUfg49Je4uzXFhYLro6g4wTru3a57TnpiaSkQFsojE4DAjNJiU1LTetdC6rHYgwXJ5",
  "key17": "5KJyFvbdE5n8T267sWVswEgFNnQZxFt1u33asRmPUoR8ySyXE1sXjMBCkbG3Z652B3SBmdJFNuqLmh3S7QbsMDJo",
  "key18": "3EQ7oJg9WM4tw2VNXpwXEmA2ZjYLyziDSEX1XHyFPNCEmM61UFh3P1HgedAHm74Dai99sce75yR2oygobQMNjjj2",
  "key19": "5uxY6Hu4odY6rMFc9ACj6uC1P9MDBNtbfPBEKqjB2MHrW33wbtbf1ACeFgXtmmtkpRdUyeXDZe6dJxhWoaWHVtYg",
  "key20": "39nNLNULLpZjZLZnqkP88n8LtdtQ4BkPPLR2RMAqXKwGvzmFoDH4H4giSH19DSUGYMLXCKLpanbtFMcmGfe87swH",
  "key21": "Bz1KaDZ4dVVr3RQ1jWA14DccN1D1BdiggLKQYdo3RgSKebro2c7ykfJHWnePVV7VfjSeiizF6C5CDm4XJW7HfSh",
  "key22": "3chffcDhsFE9EcgjehTxJ3QgXgPtLPPY27ufnv3h6uRzDv7ZLQBeFzq2ASoy6LLeCcY6FA27rcorqmf6tdPQRR8N",
  "key23": "3JdHidZgSU2PbHesQe8hT9DSf8jxihyEPWF3uhiEy4XKoMNLXSYsoNDtRWW2R49evzyLcJEDu49twj2opiDueNTE",
  "key24": "5q1toGmnwcZWEgYJB2o6dxmdWgWoS1vQJauiy5MBnhgCM28ZShEtQJpBWZ3eUT7JwmufGcyRoN6kHV9vyyK67iDR",
  "key25": "2ieARiDn7wjFbui3bJ8LXbPi5jzgSGE564U1MwwhxSCQJt2dCTHcmRTPTZjRywPXxABajYsMb5Sgt3tWayQFwGF2",
  "key26": "HWCLxswfyoDgcyX8NzGntyYgV52yQ14JEebCbJRtkThyUvvongFJL3VBSZ7EZsmB7D8hALjBqLbiU2MbguHzSEt",
  "key27": "5mSoxMsXegtJi6UMrEzxtDbonfdhpLVvepmgoQCaAiEgSR7Z3eofhDbSBuXYVzmgaj5WXpNDbYGUJ5NoJNrEHHZF",
  "key28": "2bcNbZGYHBhrkDVaPgcNZMAL8WHrGc8ntVLPGWixX8v1fhz1SY6JyF9NLfRbSfd5UuiZhndkB3K5UewkxDGFeu9W",
  "key29": "4NowrwVwGkKdtcua7ZEvfDsg5bqbmoWXJWRV1uLuZq6utWcMvvdoCrUwEWryYYynL9VbiTPt9r7jBVbZ2WGPv8BS",
  "key30": "1mFmpnVR57iAkWG12FA5EatpWbA75MzjEFBzU3Lc77NLUhCyrpHFC6AXDQ8vivT4nvjzDJDkywFoRViad21b4e3",
  "key31": "2LYpwW9pLrUhWABbSgg1qCYu18LS16xYtjU3GGeYtNJEnDU6ipQGFqyFWPhQ3JMucBuVLr4ujMLpEfAsq5HF3dwu",
  "key32": "23S8hNGpty2ExerfcVxbTpKD1H796jJCFNSaqjuZRsdh6yN3iJSPxGgwdtjms4NxBFbt8CJicyQ3muWxmeyAHQrC",
  "key33": "41rnV3XBVJUyJ6ttRwJUrJQdFTPAmBsK6rweaWTxQcu8Havza5jimdWEEyeGhUCFSHheCapsaU8imPqgq2BWNGXT",
  "key34": "3Dq2HThxrjVESKiy4926K6hdwY5fMynFXizNApV4F4rGmAzciAra6AgsTdrBWZF7ND4oCUnXuywfr3eR8vMHhGbR",
  "key35": "su2C44EHgq4XNSnT36h4szx1WUjNR4Lp1v3jpFttWijFmg4x9AJZqQfPybPGMQHcFG67Dwb4vu4gLRn6cU64yNc",
  "key36": "KuD4rZEVPvKrgPdZb96cgSeVDoiDNJwHAL3on9EJ5CC93Zm3h3eecSFC5UjirS9KPLnjSncQKew1oV7JZoadiHq",
  "key37": "3aGzKt8m5nzB2Nfv95i1XakDUPErF6A5gEHsywL4DZUtrNdG6dgGUxstwgoutb4hGUYD137UUZShHiL6qsNoZ1bn",
  "key38": "4vCMJpr1ugo9oQeCUKJk1rRezUqFjUwm6Fkde1Hs6WES9evw5JZX5rxQ7qo3JUredy2EYdWNXaF91x8hhKiJh2Pg",
  "key39": "3wrV64HUAEMoj9zym1opHGZP9vkgbNx4Vo7MLN15veKXfgNG6qKqK2VVxQN2H85tyyVMS3hjRFNH1qMWRQ3Je3QU",
  "key40": "5GZbqkZSb5pp9vR1Kitqq5JUSyfwvPZT6LoFffwa1HXz5p8r4q6wSxhCHrApREdenwCSQDQ9KQEXCk9Rv1Nr5k1j",
  "key41": "3J8pi4e2U3x9Zz9KmTLTYM5htad9ALNQZjbZJNtbLsz7zyEgVg4Qrb61QVoSa1BPLbZZsr65oeHSoFF6h4N2goxh"
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
