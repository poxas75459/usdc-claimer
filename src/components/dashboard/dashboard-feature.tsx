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
    "BprH6DsuGAdDestC7gHDmQpyKghZLKqX4vXPTuDbEWZksMy9mFUtnfkKADrLq4BtjbRZpiy6Me4z1DHWp8A9a7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GA9QzRyy3gza4SEGAnMwNbia4GtRCcY2a7s5rQZMeSbMHDcUYKQZCWPNYMQzLBe6q3GTqzpFFMoEZysRMHgGfGp",
  "key1": "57bdESXd2Asxz2Hg2RRBiHeeYkUMzujMykTUuc48R1tLMFem5skAS3c8uqGaVPJAfiyVeuBpo1MFXbhatC1rUVx2",
  "key2": "5RSN8MASqqZxUkSmGyDNhEX1BMDGfmqNBaRvhfcSx4cTvzzVPas26W1LcmGZDep9b6eqGtMhNcrcWUzbQK8natv9",
  "key3": "2LqrdbziF86SCrdR6qPbE9w2TGGD6nMEoTG9KD3U7ykJYo1EMZ6iSq6AZnxpJAuQsDZK9cyHzUcVnsWoeTT3ZhEH",
  "key4": "YNB27AaE3gcxTL5gKbFG6F5rfT4qmssEaXHAU2qBgFPtmnnAUDBXQrn99YejBzW7ZU2RoHTkYnUU5kKxrJF6RAc",
  "key5": "2jnCfPLpAkBp7Y3TRHKKAfSynY776jCybM8dMqjtgTdr4PhNtTj65joBoYodRAog2teYuEcXGeMWbo8nQ2fLgKBr",
  "key6": "2gT5KFRQ88YKfLvnu9Qi1UsTpGjGvon5dT31wa4N6Uv4936v952CmYr4QymYm34bsjD82PWqJgHiR15tySRhyJCK",
  "key7": "3Y3CU1Ux9hrSFdxsn5ffnG8zNC4PWC24jMZRYuSoz7AC1HsdgjsGu2Gxu1uC6ynSLVmr7uD41FnHbyuXVK5fLLqr",
  "key8": "3BASr9EaMsG4e2E9LWYGYqdeFta8tCx1NWU1zAJW3UYTE9VnMNZty8v1MXz8j89DQjmAThFaQ7bM4PDfYeegzYh1",
  "key9": "4CxaoSf3fXAAnjehG6K8JafBpV5Q4poGh4GhxmspNtDcN9ZFMKtV9Q7rK7aWcn7C8tNszxFMELfNWxetXd2xni9p",
  "key10": "3As3zmRCwmdABW6MimKaAcbch3GVXAmB4nDjncZVozzJLAprYedUyvBubAA75fHkX5ohvgufCor6kgMaiWah4tpx",
  "key11": "KPEtKQcSSVftt7NiSurycCzd2s5uGHzXd6z2Rb4xENaHFNX89MGWih5GahCGr5rVWfkd44Y2JuesXi7QNF4BdaK",
  "key12": "55RTwMoJ1DyUVsYJgiyDgHWxJJ6U57EDVG4d9aAvDpigRgpQmGZT11f9BoD6dRWPjR5wL3x4c9AGjCGVRxi24Qo6",
  "key13": "3DTzpUSDBsvFGBcjkJQjhNg2MDX66uKKw9yAF3MwxR1sV75dFGZLBoLmQRtqKqqbKiuVRDD9F3JpdePkzK3QoB5c",
  "key14": "PLGwTLpUGfbvHWu4QrF4FzGSZmTGDtcy1rghtBz215tHBrFYbtC6kmhKcXAcEMGa9RvFQPmjL2NRVPRP3BBkE8F",
  "key15": "4hTwKB9JAEjn88nkEv8L5xePWXR64BEzHXKvAa2AA24WbyPBz5KAcPt2HuU399NV9G26JQVEcKwAPQEh46uHfv9P",
  "key16": "3cw5cv5p6KhzRq5JTEdnQAnPstHEp7joB2iBqQeheKvMUXRBkpFaDJFxduaWAAQEqokyiD5s4YqF7wiGgfRy9TH8",
  "key17": "BiBMNGKgqYCxgaZ8WjCHWkm7Z9SjRVueHijPLYuUcGURBWzcJz5ui32AbSjg2AR5wjdHqgjRaL9M34R7rdDRR58",
  "key18": "cNoLZeb4UAY18919ovy7uQBF8xNfBqpY6PzeBvyAyZ4NKCpY94DHS9tXhXuawnmbxyoUs1QUmdt8bZikXytnaFC",
  "key19": "4GEEs9am7QYhYkjwJdvgbnSHuEsvDDsKw47CBUSvbS6YVVfGA8oVz3rQjXUNihBYv2WFCtx6WY28HYVxP6NoEiRt",
  "key20": "5firgajoSmGbJEoG7xYAqhtJNDA4Qi7mZw4j5YPLbWyTqYFko7dEdS9oG3PHbLDDJxPiBwUw3CUVUPd2SGRvGUv9",
  "key21": "3XeMGd3NK2hXeCsr1JtcvTMLvherFq1gtnjor42ZjbgTwcewQoUJkUBWUZQ8WhFsHKneSFkF7PRZ2ufyHJSkL6DR",
  "key22": "5ACC4zF2aNvUCrqwCHGgKobtKv3x2CVMKDdjxh8Cn3CKuPvVcPNdirN3Rm22nYjWTDmoQLbQqaMyTjSeTe1Ks6Rz",
  "key23": "3kF344hxomTGzdWqXUKSDBqmMXNrspyPTet6HF9x6T2cHue1qMHiPMdN1EMDrZJ8AWuMe9PacgnYvTEvou23Yj52",
  "key24": "irLk2fvCZH77WRUgb9ao2tgpqqdr7oAa7aWNjKMNTptVbPEh4MrtiympnLkci3mt6VoTqMibssoTLmqSnnwn2Gz",
  "key25": "3W1Ao9KEYAN3H6Fy7VrYTq6U8j87g15F9NC11TFxjUTcYFw64aWFAFcikHxjeFa6MSYxJxbfiFbohZT4XCvAw2uf"
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
