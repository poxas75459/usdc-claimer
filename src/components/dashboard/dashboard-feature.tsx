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
    "5iM7YTV3qRPgCtMXDGmPzmgZ2wQLhdhdnKcFL6m5QSCDP1ASeQ9ETCoMXEMKFppVNay6uvBC7CT8v12feWEAk4vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WKymfzjKQrCUPLixWgvEqj2w2wKYx8FG4S3NPS4UPUUANbQr1rzESp4uw9BdSKk5yBE3dX5CGtP6U6W5zk6DKw",
  "key1": "38q8cqK22aJbtRskyb7tpfh7Cw9Mh5iCxEtFajMHxGyU8S4qbJhaSbM6miGKbQ3xR6TBgGQsWJZ8kDpzPdrWYGXb",
  "key2": "5PSRuJDZkcFn5XWWV8VqKH7JGFLiFLsiSVXNDUajcg2uywi2GX7T3G6BHNd9FDswt85BKSCd2LUmdorrjoTCLqVq",
  "key3": "2Vk24vkHoMWUDunutefLuCeECcG8b8c6nge7jM6a2Fatyeatp8dacpqerkynrsTio3VTMRVXrmCcs2Rhcu5yMtw2",
  "key4": "msP1kTjWdFnRvENu6iqsx8PGw6QjScW3kPntjjr4f5fAX5pS3LmsjjhHTZwwTtCxN8cTp47CAmpaUoNhjnawJW7",
  "key5": "5pSiyKujfME8fubSNwNB5dBABi1m6kK3cQxQGAbzre6DoRnVet7Txhpwtm1rHJjkY3jnRLYKfBtXMUKDb1vb16uz",
  "key6": "3koSc877ubLsi8onsCvLPE9dwrsYUVparkC8Tdwy2QHjGGQy4xcBJ6q4naiemsiYWC22qCToK8btjKvaRrwfBCkx",
  "key7": "nzkNxWfvhdQX5pqF6UvnioyPSH4ALCpTpwsRnbZuJyP7j7iiBPLoJ2ow36yRaeiVXB6SZ2XG1Rq96iVsaJTDnKD",
  "key8": "36mdMPT6ZazgXPF79353uR3endA6h5Kjjs1WzujTDv9jggfaSTnUvjdMK7MA3JSqiNesGpLFef1nfzLnRjywJivK",
  "key9": "4E8eHA7V3WYw9ognHKfch2NpVBBqZ59sejMxDoz5fVKw1fz1waTZBaxK2MFm8RPZsszGWevLfhJdhtNVshq3imaN",
  "key10": "4p28MkWW2YxQR4bSGMcjKhY2vrkqa1G3xD6YCvqJ5Ht6idpda5fJd7YPiV67wwP7BwHV9PPUGBLvkdbsNgitYNW7",
  "key11": "TT8oLCfy1nP9U74cgbjqvqrzWiTn4WwrMe2kk9FZZZX6gqAizyqbndJQaToiAmDEej3kiCkTUjXh4294EuCqxUp",
  "key12": "2Ko8VgU8sPkR27C5GmpNEBWRG9WhEu492NLELHkKLH4WiY2RycczCTurvNTRVDX8FqmLuufWYCEubVqZX1XJp5Aa",
  "key13": "4XX1Ba8rpbXqSypuaudPxksFTjoFcKgVm5AEYXTcwgvT4tLxL4Fdw5qVWfVRfzFMqLz13iNiwNenN4Li8nU9Yd8E",
  "key14": "4vD41J8EjiuRbKRwwuH2ogrz8vqrEhbGdZ4N4ogLqV3uGTaPe9aHJBJyhVXfFdnHHyeXVcsnqRujDNnjNQanyWjF",
  "key15": "3N9HyjYL3F2UpPpNoH89eyvEynB7u18Dfmr9cmNJzt9PyoG8gZctYpLxr4NFKHsR7iobJ8JRKtYJWxf5qifmb8xc",
  "key16": "5ZbEbuDtYk11W8URNUYFD7ba8YuUkDaqnjUwJMnBTdaW8yaFCiquWabJNh52roEdVayHwU5s6AUKX86iECQKPqCg",
  "key17": "3gA1xovhoAg8Ygz9kS6ewaCDEysLu2eNTHsveeCZ1DQmuCpqmrQ6u15vuM1rW9tT8AJX4fcGawnaparZeQS7qP59",
  "key18": "JGDo2bmymca2hpQrs2KBKKNcEWy7R6Z1TkfxkLuAadpmgQCZ6m2TH7tfHePcBbzuA79D25Lcv7DPpG2RNpBzfDg",
  "key19": "4ooH9FM1Tq2ubnitVB38WqmaQMzjP8L8Je768ynUX73mrFj3qZG3c1fgDFg82R4cAi7LsexSYL1PcBCZAiZ49LtH",
  "key20": "5W8rwSL6vAdurfF4qokvortHu8gr6MXv1LrcqgTFycQAqba4pfEsDrRQFFJz6EJNos2PSJodo1vt3y8Dgw2tkrPm",
  "key21": "23uW6FmvkC8LZcfCnWwZMkgceD2gtwB6hcJfkwp8Rubwzqo6trSR6i7aiTsVk99VzUNHHK8qVcGLqwEGp3JZabRj",
  "key22": "4BubXeD6mhWPXLvaqCibKwCKyMEYw2k34nHpxhkENv6nvPQvPWbDp9RYKXYunKGPECdRyUov46VjwFPirdyYzELM",
  "key23": "42muAvNLBbQ7nwkEV3mJKeAFw3cb1futLaD6UY7TAkPY1wcVFrsKYRnnXJcdas1Lkb4oWbDzgUxUjgJojyj46p4D",
  "key24": "vhjTNhSCx4XP4ophEYWPRAq9MFxa1U7GHufBRQebzxbVoFLpBXW3HDiuMVp3VcyKCUaPuh22VhdUsc7Fy2wQhEW",
  "key25": "467T8XcjKJm3gXTXUAXt2b3jdRsHweaVupBTyMGDrnjdVq2w6DVK7gH5cZb74GNzevs3w5EELPGQXb5babwU88Uo",
  "key26": "4W17sbM8UgDLncLemxi3ajbHUU1tsrK7MryjHPnxsT91aCZHRsM6y5HzencsL9QKAFs5v3dxhSkKNdJQqrdmaHAU",
  "key27": "2nneWieJHQKuRv3yvZVRRKqM13Rgt7ZWr1g4UVHPHncYx2C2oExLdJE55PpM9kJYmKzRqemFWcZBXhrtLKCnUntZ",
  "key28": "2ozXbcSpetVbN6Gs7TURbG3edDweikgkcRpQqNT1VYw7LVGS8nmAY44f7vaJZ4VWRUPjsQ6c9PKRSQEfCe4iimAL",
  "key29": "42ymKqvwSDqeQUKvpmdYkef8mmrY8RZWWLfGrGEipyJrGbnHu9UWP7VwFqTFF68WNKEqzHGb5439fxMehKFXZ7sm",
  "key30": "44qtMkZDxgNoHGiaoyhDJUHXAc9gYveZkiqgAbzR2SvtEZi3UNoXpnTSPNDz4L6mjXTkWGgqQK5Cem98zDdnuXRZ",
  "key31": "4RxYPqNeMHmhzytg1WL8euCdPmhwMkzP58ycVnnp1nix3gYJfPnN7DL16qV1ZH37Q2pTsZFT5M6wcPY4vShsUT77",
  "key32": "4R8ZF3m3h4Lzad7xsSppfAkm7Fqre6cNmqSSvCLpiir83urmZYqH4NHzwVc5vmRLJ4UShrrT5TTW9MpUFqQnovY4",
  "key33": "5Hb6yaQqUS52YDT68Sf571932bjbm8udF6768dx3LLHUfwsU4YRuSTpD6e9JejRJpbtvnpBgaZfsL9Tq1Ewn42rd",
  "key34": "5rEo92PraeqDyKdCw9rLBFvN8agGwk7azHYYs4z3wDXs781SWxGbFWLqbb3b922krF3vVyzWZ5FaqStarjqqKg7p",
  "key35": "e877oxwSHE6HnUvH8NpZuupqhTqXgGMXXAkptYXXKN7UVyf4sKAS72A5oRKm1U3vJwwta52Ua9fLmieSGxDCydD",
  "key36": "2ccE2wtp9H1kPBDcCcBg6odMiox6L6dh9T2NJU1k7RQMP42shmQJgvzUHhS98LjhXjmpSPbZsmtbc6ZZXN3dStnY",
  "key37": "4ZtjSDUgYsTYrCNYToPnghtsU7fdZCwnopPKNJx5QkdhLM97eAprbUqbTAg46hfYqZT2T8Ybsqp63Mfd9doEzmhK",
  "key38": "2h8jMtQdx2RbUopncm6g4yTBCPLEZ19QdKAahgxMXCmzMax3M4qZTYXAHGef4wTKFPXY9YmL1axLjQWC95pomZc2",
  "key39": "3be4fpRtPYAf5aFtjqwmbjZZXFx8JnN4Fc4ZqWUH6zj71RKCwGhq5XaQxxv9WefNfeXrDzwNbr2uDXKFuNV9YwDz",
  "key40": "4oBVD8ZmEKZ1v1k8V9g3UQCQJSv8YuHFDUPKPKgSvokTnNLisDF4KjP5uJMzSxBMbB5jYtkqWxeHuDCAL6AEtVxW"
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
