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
    "5uZXEh2eALbgPexEmaZoaWtgqKwNU9JNgRo6ezTWq7ZjfQnZADLGBZnoUqFJSN1Ppp1TKrArigJfqZFnkSktNhAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339HbdkFDFLHUPACLbJYtL41hKwkfvcia16DZBn4iTaWgskG8ajSTJACCM5qWnbEbEAvZ6WYcreu3gjjUDfcWdNh",
  "key1": "5ddLd2MFKwfk3wvGgzikw1e3rPr2d8Jxdpd5tHvDtBLhauLoK7LuGwncWjvKADD7xDEbsoKSPX1o5pjPxpH6w7Js",
  "key2": "2HaHEZpf3y85u2qrLE8RuP4wc6mN4DvwKUcstcgdVp9xZrhN2CHZdeoCRppPrzi61fHnBrTYMj4EgkPwyDPLSYnt",
  "key3": "45zFeaXQu6CRJHNkmgd42ngruokRgM1aZuQKfK6cwmxPVZEERn31XjBPHJvZUMVaQxLMgDhQNZpMsvTg92tooZ5q",
  "key4": "4UArqrxoc1bUJSMfevdp3XEevpzFZifTtjaEDZgCgTbJt3Z5JuY5JUZuc1uJ6KKTDqJNhCtJMiZcX5MEt9DbnefB",
  "key5": "TbztkRvzedUbzEXazn1KZZ1TfizMiZGZh9pNQHGKckh9Aermo3Xaojq56yYBhxGK1dejfeMF6W9suxSWRLjVFtP",
  "key6": "3EUtvbjv6eChW3RNXnmJNnUVtEycfLVJbzaiqjR31bWWx5bc1NkhcJg3ppiXhAgcJgZq8NqoUwwaKGZAeP3QYTTV",
  "key7": "56Vy6rSo7hT6Mwi8tWDSkTsCRw8Ej1vWHG9pdvLyK1WhXL7jQhV6YJLWX3pKb9r9kZZEaGSXuixhLm6Hh1aDYnQG",
  "key8": "5516QFHc6siLQkDdBZWQJ8roBG1zjNhJsqRrxU64MuqeoahFqK8mV9DV5jTeoHv2rAGu9LMktxTbuhqDPHe6yPku",
  "key9": "4Nb4MHQ7okTv2UHg2BKG9hmMoygkckKsRz3cNEXcx8dPbQE1t4phFRjfDQShHYiXKTbdaYgJ15EUJzL3WP3C6oPJ",
  "key10": "4EGEEdWMgHwKaToMiJpxWjjbGMvt5obPFToTajRj9yDZMuGxyDJ1Mjc8ofRDrYt58PwnoCHiiVZ9JFW88SDxSZX1",
  "key11": "4Dz7xcmZd5RrHZZjqSkaEX6AmbAcesp3MykKZhKi2dGv8iX9Tqe52VtNG1Gg27VpQN224VMLG9VytuSxfwUi52Dr",
  "key12": "2YHafezknByaMahSsQJbq5Pur3pE1JJc1bK62aRdZvMfo7TeUwQkmjkKTujn15FbQ1jhmf83tHBZutBEka9s87VB",
  "key13": "2Lxcj1aiwXTnXNYBLAnKyLLcANBQUoSbhB1Z5wGnKQzFLgrjng5f5Un4onLtvwFBowMgb12MkCLS1UZJvXm7XCZR",
  "key14": "3mdb4iAWxr4acuePMwfS51TVVH5Y5BuyYyhhzFE4j4z7rKdeZBcN8wNJd8idbwAR3p8z1ZtAKizDin39tpGsFr4v",
  "key15": "2Y9vGM4s1h65NusQiwY2wTFejNpLc49kGSKPALrTzMCGw9PsMP9jzgoJQxJY9LgzB48KHzcPsMG9qCpkuX85vSfd",
  "key16": "1g9ghsjoXcTXe3eigqVA6bhysobufqw1sfo3hXhTJGxz41MpHvTjFYMyf2fxB9amFRGNYdS48jHmLr1p9q4izqi",
  "key17": "2o6TstNVukTzB4eqDUd89tm7wG9rwqtSTbSiTwGZ2uwt3rtsZjQetLzZCGJrVGw6LDKQkq296JtLJKm5pKPuZcLS",
  "key18": "ZPU1tfS7ZgZv5fp1c7Jg6ZaFw8nBaeEsuXMKf8tBryjs7WPtFrYkjCYs3aGcMJaCVcMzkCx7miZh1QnyW1q5wze",
  "key19": "ChcXqWizdAiAUmxDDgeeP8gRBqHQtoZyKbnCQJFAh1CngbjKDB2PWUFxac5P9jfzP6pqsfQ9zeJoeU15azZcugE",
  "key20": "2aDo3nVrB2kK4YSiyjvrhDsvK9paSpEH46viMMLmTRiWDdan7Ci9TW5oKXXD9qe1Gv4M2ZE7x5uk2QUPp3bRAn9W",
  "key21": "2J479qAiv13MuAq7DKEd4ZAVzzgSWgn6XBUpsb4yTk6Fv5pScoFGNy82mMCt8jzJuFZh9eeqzozn4GDF6f9ZnZs7",
  "key22": "3avmwVQavVAfYAw3LjFKSwXDw76MFdV3ebnTAYRed9iseJUXnh1LHfC8uA36hreBpkwxcGBfEf97dR8r3XsdQS7M",
  "key23": "2D5RTfywXLdnn9t7Q1ehRDD4oSrmvMvFB9V6LSjtycUGTwC582XKSVMGTHnbPcqc7tMafjnU4nRTqLhnRL3i1qoc",
  "key24": "2qpFLGmT7f7dZ12kz8Qt8CpuB2n2fU4vbPdhTG7myDyp3SmBySUi2WTjUF5ryQF6RAxbepN9PwXBMDWGQQBKMF2E",
  "key25": "5Z9YmaHLukWVRYjzvDvegegTAmqdjpnLpV2QVAF5STXNUoMDHx7L1wKYCfaQ8aH3TNxJy57k5ngamwsuAdqGUoWq",
  "key26": "4BWHgMUB7pdtZ7YaEZswEGRUWmp22MTDwiVKdc1zsT63c4bjwHyb21pqECEyRWG6gwWNARUg1nQxN8NuaNmoanaS",
  "key27": "28QbfRJXQ1jKofEGeipzb6FQB9nKWxSPrAnck2P5gbKGja9iQin6sA1nYWa5SYcL4egVk6mo1o88aS4PW6GNQ2N5",
  "key28": "47XnUiLQQ6GfJUkFsECjXqoxajXKMuc9KHiC1XfC6qquBnJBfRaqcHXn8W9TvUEv63VXiMS4eyVfNJEN4sTQYfyV",
  "key29": "2a9EDNHFwLa6nePFcYFTiCwEWGzkQNitZUGrB1ZTMn4mdHYKX64chXTDB5tK7Y3XjTkNaS2CYbL6VYqC1sTN1AMq",
  "key30": "RkUF6dw7GiyUdswZUvZwHAxqb3KSewHmptxrQG5W1s1B5rTAATDsSEF3rbcBywkSvAcBVoZHbPmykSiDJWeNHfr"
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
