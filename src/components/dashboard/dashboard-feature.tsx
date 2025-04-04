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
    "6Sf2KxNs6p73tfX3zq5bSsvxxgp5zzTbf4MLStE1jaT8x7hPBtWUZteu4uBXLchY5z2ettJjsc58PwyXMnNU73t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfCUxJovKd2stekBQSRJY3uhjaKN52CcQKuiFvWWHSezhVSQytqpAcsm7PAJBEygmVhsmVZ2XgrXAFkb3k9X2GP",
  "key1": "2j3tQC1V2hNX55uFXGJTd9kBdB7j3n6JZy346LYDceccwBgH56J2hzKNJy3M7N2UxuXG9sKwap8NLVzghzm1c8nV",
  "key2": "4xafnWsenuNJxwdituhdiZY4SCLVk4VCGmbKYLcyDPzKw6Bts7nYDLFtEp85xQVXoBRG5mWKrnZui92rAitsrSHi",
  "key3": "3JLQE1HkECMdgGxSd4oqieVT3jgeEpWuvrvT9AyQtLLdknuFQgjL7sNZaGmLEMW7HM1Xojk2XY4TEQj2nnTSw1W5",
  "key4": "rptdiasZCwP1bSbwFAx1oMRF17JN2aFuELXGt6qSZosVT2qQkMu8scQVqk2DHjC1JPmtn3fUX3KaNDoFGyFiF6Z",
  "key5": "3uuwuvdPAKX4Jp3fqRscFjK9Wd1pUCDbvDVXcRsF4gWFNbgHbJYZbSBcPs3wRQCuJ7XxsZfLcToHNYZMGDC6W1P7",
  "key6": "5b8PG682sJiaF8EgEPArBDiWGKYHjc56MTgCaMcxef9y2SgFbgouZED2oYaV4hWbX2LrhrTbVqwJvN7RFh7aVYHk",
  "key7": "3qahLtA2Waf3Wsm2htTUcr9ZvKmwfFPQ7H8A3HZVfisUFhQEHXxjpzfGY5v1U8mdHqZB2G3bzxRAQH7ohiXvyDiP",
  "key8": "2h18mZQAtkFAstEV7LfWa5uKUtFTh9geLnMepwe3xteuL1ATP9PUiF8NqgPkd5amLX5aXN1JkPAKL2BvajsrLw9Z",
  "key9": "4RNsCAY7jMsjvdWmhs4XrRUZrqvkUQ52k1WvRttw62FE51em6WWh66j88tRZwTFoQbwMraaMQbfNbVpHcHZThNcd",
  "key10": "2Mi2ijTTpqGFtmJduGdq5U4RtKa2Tt87RtXzQhDHNTQnuJrw6pxqhvo84gB7asSMPwPaXaszxnkRmgK34aUmbz59",
  "key11": "bCgJ7YG1YHKcJESdRKRS8Hg9bCLPSTJfiEPq7dzvDz8HGYiUNMiCGkgAD2dXEuBtkUhrhZZXcfqAmnkYLHLqfWk",
  "key12": "vikAX6oZYaQn4JvuTESTLd6gvrrpanKYuZN2JsCW733mFhSAWthAAsJX4oU5iijmxxJifVYBMosFpUqNzQk3Zyf",
  "key13": "5EqDfjT6bCpq6tj148cLcvUnQgQBLrMxK2m6fC6p6kqeSyk7z6ttbysZr7Pa89wbYHkuhhREBwzomSKKockh5MmV",
  "key14": "31VS3Ce5jsC8qPZf2fapJDVTRznydzTxpzxjXEEMR1vzWZtcXpxxUXMWTjo4yEQaRP2Nxwe96qtb1nM3PonMe4r9",
  "key15": "NqUMF3JjsResyMLEfTjW5yf9RDEVvjSnCwZHFXR8nFwk1JW3ij1anwQLrNYMT6RNULnsuxhU14RDMe7K8WoUcD3",
  "key16": "a1Gq8JLZmBXeSrvb4ZfWF6cAUmVNNArFuLasVoF6pQHw6RxAfgWCafbZiPBw293zdZrcRfZnBpjz9BFh7BrKVZ1",
  "key17": "2PCwSuxD4r1NfSwD4beAKg6vBrhWHc1ewakQxuBGXZEmXiWZu45fpBjvzjXqqtmxFjDH8hsB2kkZzeDPPPoW1ZJ1",
  "key18": "3Q52DX84h88cKTZTedcuGdVKHfLJknfs7PAtrxY9HWhFYhw4hBxPH7Weua11A72gfW4nNy8nUFivra2iFcCAKtPE",
  "key19": "5YtY64brg4GbuawxroJU45jCZbtdbrAtZrEcKFksZYXKzfDJ7jvSD14JRSv3KXDdeJZawYHzZh6fMg2snMWxp4f5",
  "key20": "4RaDp5fJrqJ9EcG5ejCqaLLg3JEgSAY5ou7xLXn5466aeCGrhVVs5Qtmt424cWaJZ9KkEaCYerH1UXwzshPbrbDi",
  "key21": "5hwSt9c2ax7ZFNZCwzrHW6bfKkmgnyQEJWFoNAjkkh1m7UWBXLfoGxA1upmJa29zEa5UZDCcC2mAojSnur2Tw4zs",
  "key22": "4ciVThuibvC1sj68wV8HytQsZwkWYso4GwEYC1wQrrjXWrVKU1cTXGgHa65Tdvg46AE2CVRwMhxBZfj6E3N3MRF2",
  "key23": "3vDaQyWLUa8C33idikEdD3iFjsCyHariR4sc6Rh3uAijgGRcJwmXqBemFJQkRuBwc5fHwckiEyqn85yza45U6gBC",
  "key24": "3jFqE5a9aDtqGqS2WUjQ4DERReLJvsnGkofFKyrPF8UgHsq4P3mRo2vC3sJQfMXFEcojDwbrN9HGQ9CkSUtokBTm",
  "key25": "3RJ5dfbRAwkLA2wUecCcboyCWJHDAgZ1hwoLaV3hfEg8M5weLnCFHGRS9cKsvZW2FREjgqsfYdHC6wtVBPisGPBy",
  "key26": "CqGtnFmgxenQkRaQ6G4XHxVgXvomVKi1DY8TQ6yLRtyd9hatRF2z5Gz6YB3cNUqirRdkuiEyeak31bKTjoYcd8E",
  "key27": "4eAxyXcQtfmmrSvJLu1rd5uQQyyutBNAJ3RzN8AsCc3FnC6HtNXtGSEucEEWXbKE9U2VbSHnQSgXo4SKYjQSQNsX",
  "key28": "4BEtDWnFfP42VXyFB9xGGhgZ2VZ12iFgqQwVYsniKXCv8wUbVRRho3LrFURRGJrQV3xeXWAeuVbipZhmGeU7j5pH",
  "key29": "4B21UVtLTemFcewfud8gnrcaKuduEkWi58hk9JH7KVrhsj5RvRm8Lw471NMvi8Ym8xyBn94Fxd3B3wZNJoCQqhpT"
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
