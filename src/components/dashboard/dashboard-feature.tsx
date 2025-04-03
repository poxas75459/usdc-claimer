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
    "3r1aqg8SpS6RdkLmHR4xTTuhbDHBP7DW9UbA9YVJem1Byo66kMbXZxzcPTHfnFcK6CAP1uerGeh3Hm2PM4v9uu71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnqC33rPmpN6tpacmQQD3yr7yTWwWNHbq7z1Y4pAwhQwSC8pQAQvv47rfrxJWEAPGUQK6wDYf1Q1cNzrqDjerAA",
  "key1": "3VQbUfe3Mu5F8fxk1rebozDe1cx3VLvxgzmjaRtxGrhTKFyoKTPikUJCY6PPP1PXJ4nXCjB27LCvNsQgogeYpQKy",
  "key2": "4Kbcu8vXZvEM4ZzqcBgtbNamD7DZvQmzJDnfWxbfLRG494mw9Tejs4tGBE1ekPkUPEPUKkP3ZZuDYvi5V5Qwc22v",
  "key3": "5b9oAr8Lkw7QF68ytkYUvF15iVhS15WwdWkxgwZqkCNyoX8X6br4qAENkiL1whVUKuhex2e7Hkx6yAfMLnk7Y9rL",
  "key4": "3WLUDuF9DvB8wU6e2ExKkGm8szEMuXC66VuGL4FzhJWxyKBapV9xQP57gsDT9KinnYDbiK6rzUGUqJXbKqGiFCEJ",
  "key5": "26djexKVq7DPi9LQ6RQqdXop5vHA5kwJskhW4yvnHQ7a2jhjUiV87ZnahZtfDxvwx87vvAsXbyHcGpdYbjiWjfHP",
  "key6": "CianAcRZEYzx9pxytRxL22FsGeGt4gUYQTogPpgpj6M1NLWjG7V7npsjVw6i1BHZQSkeUWAyvSNwqv5L8yNmAXN",
  "key7": "2vgjLaBJtF7JKmdDUY7QEoeUkntbAsafijdkL2iS4HLYFjuBW8H1MK4vfdKcCr16KUwkKDskjgSJFeBeVwMNCXUq",
  "key8": "pndgv4gBzj3oAyYrhxj9G5GfsET15BM5vKeebg2me81SfMb6FwdiVrKheiARFHKEf4KBBYNH8Rxie78ZMXDnMr9",
  "key9": "3eBUd7xcjnTGFhxtJbyFTAnUefvNEYpTy6F54J1ooqfKRBg1Ees53yDB6zh2MTreG2K85wVNgoqLBqTatzXt6h5p",
  "key10": "4zrzuBHGtP3Nfio4YRQdZkacmN6AX3duFoPJRCBCHegqtSsQpfXzhGXo3LN3ozQTDipESwwinJMXnDFFzMCXVUrg",
  "key11": "3KyXmRwg6RmFvDHBQ5PiPTKMxSJQb1zwLmj6SkeK1zcufnfxi8RodSj8k3rUzdmqTg9uGJR11SYoWrYLL9HCjMiG",
  "key12": "3Hn6yyKMC18WMVLjdduqZEY7sRaE5HZ5s5qsYzv7h1xxqD2mhriY6kPWNye1T1JmowA7z21oZkYzZhtsurfwAAj4",
  "key13": "WzPKkGc2anYDbXu4EESDcXJJpEm5fmf4zuGG9AqrzGh3ArNhR77GZofBuXtHUVY6edc9gGngagh7d4K9yXsZgSD",
  "key14": "2uJpyEVG7BcJuYTx9nKP1BoYkAfdLo5SeWqGSSkqZuwVdKKoyhkRv87187goRdBXDaUqj1uYQ6ppAbCaZED3nfQA",
  "key15": "4ANmAKxfReq9ZoAbYCkDomRpn8FmQE6nLx348Rj6xFYEVZvWDgJyi5ssGjsprMqoAk8wuBsbrYFA3HcRDptNVkie",
  "key16": "26JiK73yCjNZ9rBYGjmdMYPqqn3WahnBa2JLwu8B1XZYH456KuUs58ix3zGDZ2pdemQorcZzY9t71JxbHx7w5E1z",
  "key17": "3de3nkfrF8M7fhAxdAanhkSe2oWrLh3paH7dk4eGmicV5WrCEMmfAmbuVAKYSVDKvCTcyTuKhQjYsxkZn7sEsYUv",
  "key18": "4CkdkacV4n2UNRrJhXCY7RfrFtyPNhHeRmsUPSw8ytWnk9AtDSjXPJ3XLASS8vyAgvsa2HZhgKVLabA7snozoong",
  "key19": "4YG6NdbNUmqoiufrCDbz21bFXCGbuAGtTcZFp9H8vSGhqnaYJg9nxGz66Kr9Gf6rLebVnZiPfTbLyF62hneTUWpD",
  "key20": "3pg2jfKpFb28qE4q9ZaaPThiXWN2rdBuePtgwxr3vEjUFrAJ3HzEQoGWE376VDru2dNRLXP3nEeKQA6AjCL77aaz",
  "key21": "3GdcPhrJ8WTPFAApnbMCrCpcHqhSZpmJWWWgvMWz7p8YGhWyWxQCbxeZDJHKddruaBkrGyLg69KYNrC6cg9CT3dJ",
  "key22": "2CmjpyY9q4zcbj81EbXtnM1qsNvLyTzF4XUJ7b9JH9GZN4giZ1GaBHRannpzo3QAaEDYuY5QyWZEt2PRs4UkHkWu",
  "key23": "3rSy7EbbS4wZN9TjukxmiDmDgweS8pemrukZfNJ5ggtWe21TSf3HWYC8SZYS5Q5d1AWQJuB9p1P1FyKgBYiw4C9w",
  "key24": "jfh18oaKXgmtbjq9eXNGZGH86m96tQAunFgJWT7t9UfhKqBh9Sz4dpaK67EHFG6RcJ4cbf9M53hoQHxXpRKgSfJ",
  "key25": "4ZHtPAPnnBhuc5pVBQ1KonxvGiZbRdk42XkHnXLQzoEDNghrncEBvtdZ43HHu6LDrkYVLQdLEiuUgRntXEvp9nnY"
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
