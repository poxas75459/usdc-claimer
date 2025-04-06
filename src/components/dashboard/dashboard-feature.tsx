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
    "2jUjJkk4AbR7JLs7F9h9XVBubfrpXeTg4cXwdhjEAHzg5TgjmwvTqrAZp9RDKbkXUVpZ9Fk2NfWHa2W9Etpe8t14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHf2nFfuy7xxqrxFwDSN2Wm55kPWDh2PzpWzfsBPA8w7LYe138KUhZiLHwkSm6skKxuiz4BXhUzg6YDVDJPDF1X",
  "key1": "4cWSM2JFrJrtDGPgCEwqzQgQzqkbn4vaxDwQRDWPeZQfkDg9hFhyb6oH8U9HuFjAEh5sLEv5TMcWhHdvaM1DuRJf",
  "key2": "2YJW4SamcF2DZrsWSUqFj18LMpkUJzrtCooHaUdJx38RatjMaMqcza432HArcJhZtiSQsp9FBY8ENpbmZ6gnNm74",
  "key3": "2CrWH3EPu4cwZQG4RVnatSyj7R19tu15iMWpfuCPrJ2n4RKyhNLpC53VZBKXWTqSp8EminE2p9P8aU7poK8Mh68",
  "key4": "4uVVSNSMQzC4zXGJE44Ratu92UiDAgTGPFtK4bvaWyxbPQJimsbxU6deBEQJiTRC8RJzH3iLMhrMCoZtp9sCdoqW",
  "key5": "5QzG6pu1ef217H6bEGj2X511hNmn1iMpYcqHKPSMWjadib99xuNArRqG1EhJEL3Eu4NAbJMdrMVKxbA4deYvdgfv",
  "key6": "4EbQ3MUn1ny37yFY6rJ5fASEVz2MnX2tXfP1JjgUddnYEF9jdxJ15VAuDC4kveW9X8MqR6wSB8kVenafA1ZHQ1o1",
  "key7": "2RRLV32RT4fucK16kDAM7kS6tcWWsoLekagXnZTiTmfkKXCTazJvDXbfStPp1uj6v25ReD1BPpCoLAZU8ZnYBztn",
  "key8": "3pZxviVSfHp6gBr3coYNmzogVVCsdLRpKWW93dP4uFWi9zVtTxEPaDxYk1sDhDJpePDB45CgBEFfSd1AxsXsNN6f",
  "key9": "b8pmPwMyX2cbim4wXtmw2tJyGd9Ade2E3N8V3ncxMBQ6RSVJVhyZ3d98J6mmZMYe8VLcdcAHeiP5amrPsRqMqnS",
  "key10": "637VZPUQ6emu7jAxFbtK3fEnzbPvKPzjRpXKcr2AB7LDNDPxcQD69cw1SGpcuRsNaJ8pWDNP4ksshUw7tZfeum1u",
  "key11": "42wsoF8YzCuzB6YJv7buJc5vNZsACLkkm6dyucyQBfDw4ZCK7w3ghQSdi5ybvPsB6U2BsiRbnmxLzAgJjjSuAtp",
  "key12": "36yYuTusUTF5yG7xd2kYnqzm3XmVSnZHke3LTbC4ZS38E5F4FfmpDjtVZqYhFSyzdgBawu6x1rpuWHb91jFB4ZDt",
  "key13": "4Spc6GY1d8DTtNUGJyMx9AqAVTtM9yjLQVKRk3SGMfRN3w6UPXmrdDzQcGnAXbJuHG579YJt1qfmHLGsm59iz75X",
  "key14": "5F5S7pHntG4p2Q5TR2XRDWed8G2Q5Y9UpiQ5mMxTfMxUp4nJaScdty4qDnbibo7Z7PnBky2hVr6NbDjxkfsTpoqz",
  "key15": "4adNmK1g9em24eHiHfc8aWVGfDzF7utGEDnUattnWi4iqgiDNYMTx4yDFebYEL7E2JkXqssbPU6YqFngq9btZ6AQ",
  "key16": "5pCNeSNex8KfjCz6Epo5RAZQ9bpG5GQweUthszTpMcbHmatXaWEc3AMCLyiZnSMbr8SNoUutovxNRZpahesXgF94",
  "key17": "3Wjr1gmpttpqdSgMjjgvJwPErFNXY4LDkqMxbgL1XzeLKv7CKBrqHqPm4gYyR2xA2WhAahTkEaVaPbHkzBRkvfbc",
  "key18": "4eS69d8cCAiXBePPooeKNaPoLKgJgMS63CNc5JxEb16QJfr4RyhwEnE9zDfiNmn3YRnfkaR2WD4G25mxwFMEK2RV",
  "key19": "3SKcotoqpTikhJSWvmNUGCE6kfZkjSw5FLZQizQfWmNCHWjoV1o4SG9xxNYbCGAwocJosju8bnjvvXEmmnDTQZVT",
  "key20": "3EHfUnLCwsKxS3sYiKdcc7FeCREsQhh5rB24jDLGLGKWFMQzvbvjb4vDpsgxYGMwoyHGnCwEuyYmQWpcaKQ17WqU",
  "key21": "4jyaQkmfW3MXX1MSiZ7XSRKjuykW4A36jNjtLXvUqHtuq7yvERvqKQKQ9DgpSyQHZ1ek3YZPphBWgJQoxeMFCg2N",
  "key22": "Xj3Fj6QmP2ajo44vEjdFqYrrrbui9VbQDh9P8x9W2xLJSnsL8JveyZC7GvP9fB7yrtPi9GSy3doPp2SJZTfj28F",
  "key23": "3SoUpuPXje3NxtuGJ6acmeE9HzTrYsKkxurr86uMLDqnPGToeoe9ayunN3bycsuuxZNKcSP7E4gtViBvHAo7zZMc",
  "key24": "9eoPfCqYrA7hsYcdtmhn9vkV85EXgB2s3QKC6nZQtmPtRk6f3BTcTrkyXaSQopQE4MvVcUSJbpM8hPEMigESZwm",
  "key25": "tBb6SM2JnMTSnkBpiaTjiCJMBKWn4Wa4BhXfBbgKNCufPJQkVGVmsKgdF8LdXFAZPtHFBGwo6wWbFAP3gR64EC7",
  "key26": "5os1Mmrj7nEHXxqUu7r64MqxsYn1Pa2SHchnc7e8CHR7zDwmrXaFRBzH6JvRH9fKzHUrbYPVeCtkPfCFcgUt63CE",
  "key27": "2gr5HVLnqhMwAZ4Hyk6rKf939MqiFrPecxvzw4PC9aRs81mR85ejkWrenzR45gHBkiWGHdqot5zVqrZy7fyuVj1g",
  "key28": "JsUixfwLb1DzELF3Wi1NEMVxsRRzbWwcy1jqscJ4ysrPvMg6sJEnRaBmN7WJ1n46VbvZPNfEVqxyQJMM3J6gDuT",
  "key29": "4sZ8qAbJNw4Tbva2xZ2ceT3MBz2XLLXKHaBch5rstSjCi5sqzcvtcjAPNYVMMXh9KWuVx94dP63UUXudacq6rsAN",
  "key30": "3MHEdroXZNak4t6kjGaGhcGWg65Aw6ug6Z5UJ3mKgtBxK3MTu5NKuV5JMzjq5hXaaZBYWfGz424KmBAmzRdsSTnS",
  "key31": "295KG269ssi7jitGVv82i5na5zTkyfEAX1USouHYFwPWQ2qnjq5EVjppM748Bq8wmmPWhbQ2rkvpAgAi87iR7eDV",
  "key32": "3997LGNQbN6zDhX3D7LfrfxCg9eTQhLRopr6VmjEYZZyNzgmEzH51TtAGzVwWMjkukehCouEoju4cs9wCneVe55W",
  "key33": "2iiJrt3zA8PZGVGMdnHaLHf3HPc4xz97GL13XAfCnXTfm7m6JmN8LgC226xZoh6AmHttxq4QrxKuMHE83PKNH97S",
  "key34": "2Fc6tLdRUNpzTUmvxLM73bK7Ujho4TpLR6Q5H52qzCgWBVMtfcdURx1kj9D7fZRPqx9Tr2DU6L6p9UsmkpdSubPL",
  "key35": "3w7sFAvxjSEjaKsUscX11scY2X5ziZcBaVXj4LqgGnrU11MLL6tC9QCqNe6v3bwNxG5TzWpCPH39ToiZXpFNk5mQ",
  "key36": "5FFS7rX2UxTjQp2f5naXfarvkZKACvLikPe5NYzNfzHpXdfTvq21yJt8vXjotNGzBwt65mESZ2ubybVrSJ5as1iF",
  "key37": "5r18pEFfCNa25M3fUHWY16bKFCVMcfYskL8uTnM6MwR8e4D4wEJvNgCfwPGUi3eb5rTxmGg2TusAKTyVAojtRDFH",
  "key38": "5gg75FqnZ1Qd1LjiWiNXsS62ucLNz2z7LabBuwpDetzHbxydGH6knYQg1gSLmMbceQsGf1safBGDkySyWEoEtvtr"
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
