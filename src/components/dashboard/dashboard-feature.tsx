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
    "2zWDERVWp1iATPKyXVssSxYBTjDWfLBJKiadq3pzEZxK2o7dXEFF85rGaa2Aoun4kapQrBZc6ggWKy8t76ZjRnbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjx7yoeMHcCgrZbZJx9c6ztH3RRJATmg8Dos1WgMcfdgRA1aerF8n3VvASkWJae93aZQ3BptPSDfpDpgo9ntUWg",
  "key1": "3N428YaPcMPfPWHGNsoEmitoGQdsJPMTawVdMnN6dXGWrHQgrpwc1egsipbix67wBKSsomUSuXEUQsXBchpGwJAN",
  "key2": "EtudU4XwQrwbZYHAxGHsdSa4pKU95cVWnYGVR7Ypi9Vj9a2pw2kizD6SdSowSNac5CEosodCqspCFCfRKvVrXWE",
  "key3": "2wwCGkHYtz84KWRzZ2ShgdteZYG48pQCYNwDEfd4WU7JBkjMabCQLXqSwHtCAkYPYPgqXU7LUt8khL8Z34zjkRtG",
  "key4": "MX8wfWSHgcZeCgYXqyrKBJwx3qbYSeUp3vuyLGAPr7d4oXHuoF8cyKu5PSCHX5DzwYd3tp8PttoEPajVwztv9wf",
  "key5": "gLYuNLSdqpESFApfQjgb5pEpQCeabrkzX8SBmBKsvc3ptMjENR9KdzudFLYBnYDaFShYGGQ6ge4Z1zZ1cjZXbue",
  "key6": "24hs4qttN8Z2o21KYFZVBhngn18UfGK61A2FpAxVTrBJJTQsKwGw8QvzKcDgwdiJSv1kKgGN1n4Zq6TmkkfUXYFE",
  "key7": "648se7LMhzDAm5frTx4os3aLsz7WbZLWuYnouYGxNrnK7Jfk1rxyVUGzpxHBLKxgxXx1TFN3Lt8v5KJxxgtomWa8",
  "key8": "3BTuqNBrk7sWcEtKfmshkNFeoCSANdgCg5A9sb5evRTMz3ALQv18bMp5GWaqamkqNFbudALHKrejWSeoGqe6fT9N",
  "key9": "2oo9VMwRT2m9jChzpM3bdUVEhA8vzQguWCPEd9di1yd44MGDZ1k3Q7NiXUrMJ3KhfBguRw7kUGAD2AAicApPUtPJ",
  "key10": "H1GUZDBovo3BmTLd62MDKgGPEn6f2LUzqMsSFJGcbiFKraPuyuAnnxshVS5BzLhmLV8qm7V8PMsHLhyNhDgD91s",
  "key11": "66rJvrdwthEoTEh4QxTFUjgVW5rRBFL1tw6AJn9XsBWkRmidRq76Ny98jCkarNMsQkXoVii7GMuXdprMYh8RgBK7",
  "key12": "x3Ve7TWYxNdQfHxKhfWhwFC3Dks5dBduFb2fjCR1ahxNn81gSMrnpBS7kEmf8kBssHcMbHYoVzJW3ygEARKhHMi",
  "key13": "5pnZWgAPmeuZdhm5fEWYm24D3vvn4TWbgsLkHmECpnab7p3Pv1kBSK5HZa2X8TWX1hqs2NyqR9nrYRZN9TUVshqY",
  "key14": "44pQKJAF4Q4RBa5EJgGemtbUgNTqkP4LdzS6beg5qdRVt9xZxaBim9B4NodSaJpSBaVUW2be5AzBT82QDGk7BRCN",
  "key15": "2inr9hfGHuhyTHRAqGy6bLJhUh27KMQcev5J8LpNNZuJgt7LyWFTTozLNyV5TpB6FG4akVm5HfwqJ3CWf3FMgDGW",
  "key16": "v2YpFFAiSTgfL3jwaL5x3an8EwG31LnsZq9ABV7hcPLaxciQzLS7UzC7EZcTZYecZreg2uBLFUsrJdkQVzYF7U4",
  "key17": "NoaneYbZhaTTveyuaBSZuQ3Jtxzw1hM45BfskxvWqW4d5gz7YW9FWxLrjWa7j7iBzfAZ9niTHSW4GEhUToZp4kD",
  "key18": "4i5CVQQn4trNc6PYwuDNRMVLHvhJohCUvuknZeZFDStCAcbPHfUJxZcZUt8PrhSXKNB8Gm2u8m8WKqVY4yg2mVy9",
  "key19": "3aXXk6L83zk1pfmtL4a32Y9tU2mgCgGNgfKRbqtZY6ohvdTgix38eB1Rq52BtenrFgwLqsXKHxviikvrnkFwkYJj",
  "key20": "5boxZULUGYjFpQ5cejaHJU9RdH6rzprrzaR2Vb1qk5cdreHVbecSPNcGH6m5XUV8KUueSk1kemWjD66FnPiffh9v",
  "key21": "sThaZEAT36FKxLPN9c2awebGFpfkhNTF49GuwHNEEVyswKJqLawuJzYc26421eHnBRKPwrwdfmNt5cFrGenK4mU",
  "key22": "2XFRTdF5bgQ6MFWYjqeNHzoNUWQqxbqvdC7z5FTPBgLZCjQbuYdqQczqYxaCConJ1p8KYnbgEM4XK84JKRJDd3s1",
  "key23": "3tqd5AwVEyVhhJzuLFqH7fgM6CCegM5HF5QWiqBzDsRcQayGXZ6bAstDnePEfxi6fGgbDJHjN9PGBpdnsaiqiSeN",
  "key24": "wcjJ4UEbXK7kqeGyK6pKFCXyvhV9D45Rvti6fzSmxVcwL8RHbfdbgUibknADqHY7MN9ihwxBpRnMDTQ2x3nQPfN",
  "key25": "4riQLVCyjeCjsKbnSXJvJhWokYTmY8ixWPmNfw74xiGYuCoNigYx8bxdbAvJpVFUTAZibMFmicHnmbFuVd5qUzsz",
  "key26": "39Bq5SgKfLdnCHfYoUJXhgSiJPwrvYK13UjCdj1kUcyhv7TMKd7pB4zLG9ZVT9iWi3bc7UbrjZkrCaBWq3QNvCog",
  "key27": "4j9ud6Eqa2CwQNhmCYBAJZiNJKzAnjMW9dBaLfhqJintvHM4q4aEanHToSawpz8d987pvyhc5xcGeGTUVv5Xvzyc",
  "key28": "5aHacxZHAiwQLVZUvsoymCqbjSZUMmRMQEki1r4jTikJVw1c1x5kRnMNsDZ8KCN5HZNgjsyFAcqXoC4QR5eDNYm6",
  "key29": "3JVP984c1wPwfTFJNGHfou4VafX4RwN8iGFCGu97NhG1ofQ41P6m5XnQZpyjfUf9PhXbKSNhkNCzn4Auta8R9pzs",
  "key30": "3Cvh7JYAYFqgSFKJHcLqMs8Gjs8vycLe9to8B1BonDTU7nc6QYRKTa3sZojPS4MGSBnMwzuY5SUX9Zc9tSvzqxj9",
  "key31": "PbVDAMqe3kQjpT3HD3VGjp68beSRJiyw4hEabuQNNfVNNKZNguuoKcaRu2KFRxKbBBKSyQ9S8X7jPZrJrhEk9JU",
  "key32": "45JALBnLYxCxMVSPj3TRyAWtS7LqGxkguoZZYnv8xwqVRR37GTvhuoWCAUXhXskjHZ3CHN2opap1BC6TwEbUaPTh",
  "key33": "5wDeW1GFqeh6PNn7tjEQX1Do4HbyksdKyX5NmEk2UYjx227spNh9bmWDG61HYiRGuQgkt7TG6h9ZMpJ1dbNspJex",
  "key34": "44jdnXMkYwTQRawJ9xCipXPwJE72Xv1eMiAdBqZvprXT1oFme94fyh8ZNgD6WBYJhwBN16K2rn2U1gwoa5RfteeJ",
  "key35": "3s1K1mbL9pUfJPqFBRME8neU1yx9vxA2hfytHAKc9XzN9Ueo8WJuWDMewMoM82aHMq8nvuiikxFazCQxXa4QBfR8",
  "key36": "4mjPQjp9yFXbdqYeFNeT3nf5FaRS6n983J2RaiBs1PH5zdkFT7xMNiTvNLBv3pPhtjsJkkXCamvgy8yYxtSJcsdj"
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
