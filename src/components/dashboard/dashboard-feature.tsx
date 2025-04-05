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
    "5Ux1DsB39qcqDqeY54XV5GVZCfuQakREtxS9iLq8ovozunr5yVaqhSxKcaMLtwF4XGKv3y5F1p3BSX18fEm2dUEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uycTeVRrLunYyEvnW6M8NpzRNhwQHKf6gSVsMBE5S2Q5brVY2QHkSff7p1bnjaDz9b1vMkTdVkTYQ1aqsGq2oui",
  "key1": "2xLx76ebWdArnUheqZJCG1ReDGVgFSvitSi64bLmhMfPzoD2MidmwzT5rPNg4fmmk4acfkajZviuqAYECTJWetJK",
  "key2": "5pBuiJ52G9mdfBhKQSVuay2zmzySbrdphtGPVvHrteZRhKYYJ4EJ2e9r1ZaBRFHfJgubVGWXeRoQfy58TFhC4RJT",
  "key3": "3HN6kooG8WEPX7LdgMziJ9uKjqM9wMbFiyndmUkuJVwED2THUjzEJJW2uEN1aH3mhhWYhFpinBVK1SWjEijEqyN9",
  "key4": "5VJsah6iwb85m1njTWJDLQTDGcBeB9i3UcwW9x9NzTYnMrPuWAoaGJkqnoVZ9HDcJm5FG4sb3dr85biMDVNWhnzc",
  "key5": "4PNtkC1n5YBemR4fEHCZT7qf2TDLDX6YxhrKu7kVB3j3RSSiFXpAJibBndjyVAbbW1SbajNgs64Xwp1R9SFQjdMP",
  "key6": "3kkGj713ptcdpcWKJhabFKKeLhpSwynUPkEeHh7nFEo3byeTFVx8f1dE5ApwUHGuuJUKVSNHFfHQ287omyyjTLYm",
  "key7": "hEJVFnLP17jd4hGjbjiQiHmpztaVgqxWxoL2AwK7rM9ZSSC921YhW1WSbXrtoXT9hUeP4qN7GuoE91HJT8CUhgB",
  "key8": "5kz3aAUaHiPZvNNmrf6cG4GAEixVKwhns99ZjpakMQKpMxpjiWzF2rn1t67LjDfPpr94YDpNd8TbT7tcdokgVib5",
  "key9": "2z5GGLMZUHfw5R1AjVZzjjQUV6KADzZAKgNxs8YSMo4zHuQ2Eh4jas5FX5j76gevMk3GWfEbaFV7U6q9Qmb8ep3g",
  "key10": "5ASXfvGnx9rR9jS23snVXR6mdUpSZCAvRLagUdcDSquXZtUa9GHhh6oPvEZiofGxQqDsDrv6KdKKdiZAaiNpzAWd",
  "key11": "3UeqBPHSkwT6mmQriqzJPAgdEDefR6vzKjiLVyHxP6JWtyyH28JKJ1vSNdRxfTpub5eFiNd7ZAUDfw3cMFXoBekV",
  "key12": "4e31GD5i4FGZ2w7kd6q6jsYbCJcGToqmGR5N8DELNn1ockkABZsREUmHcts9zW5CwG3hZqJ1v7TZuAHYL3SjtRCC",
  "key13": "w1s2eELRiWoznQKxK68tpy2V2QsD3Tdo6ngy97u2tbvukyw6XesvBrHSpCELxkSxHjTx4cvzicpGiUGck9pZu45",
  "key14": "3VAoF8BifF81heY62BDqMxn2uRhgLSYq4aNcgvVSbX1vR5TNWikrZiVL59kMEwFrzVVaGrJbMSMyt2y4ZRp8qvdL",
  "key15": "fGZmCKLgfSDqwBRr4rkE5f1PaWnaaf8v7rxxDfnsMJhJTfSZxwpWnfKg84n5a7urZZXpA2G9DCPdB8QsiZQ8FTv",
  "key16": "u1XDU9S3pN6w3cDLNZsxjYkMicX7LizgJSYw8wdrPwRwHcoGbZDFSvbLryxRnY9QcqEkQwQBm1Bdey5a64ZD21F",
  "key17": "2NEdg8w7QVu1Mqn3Zuak8v7dwVWaPb2MJXZUQeED9bPoj7hLMpqthT42ThPnAWQiS69wFc3VRkodxpG2b4hXMv3x",
  "key18": "3ghueWJXgbLAD3C3vaHSE3sTChSczWPwPNjF3PEzV74j8CfMDw1Dk9b6EtdaDkD41btgjynJewqtHW7U5MNeeyrs",
  "key19": "aduzgd6ecZMmwaS7D26xMGVbsYGKsTcx8M3DXyxaLWu4jpYMocVjMQwMqywsQpD4evbTDa8VtbWFnyNFqoYWiv5",
  "key20": "3kZ1unGZZbrf2Wrh4wjTN1RoAL6oAPVtwMadeYA4J1mZjQ9WqKfdQmCHYhSkB4Nqxe4yysdjtfUmNewzqmwjkbpM",
  "key21": "KzceyxXfRfYLgdkewkrr7PMmvjhMc5kPodCVtSULYhXB1DNDxHcBCkNPSD82762LQRYXGenpZcD9Y5atxHPKBgj",
  "key22": "64v1odgy3NwtszVgEnGypLSYcdpinFNLr2Fa7ZptWFGVhMRXShvcPp2Mj6drtS6oCnRgJDNj9m7QpBPMnjJjjsgx",
  "key23": "56UXJFy92vk4viY11H6S2Di15DdMQwzZPXaRHkvrQpMzJpSFCnCV2fMtend5sEmRRhydUJYuwuXcRLgpii9ZDmAv",
  "key24": "3WMknP8WnZAJqyEuLidxSeZeB1br2wD1K7PnuuTBW5mS9kAx2ZBNmpusg3E9aZreUBa7E1txTMYahznpJFQdCsot",
  "key25": "5Wqvq3DosuwBBDKozREcSV5Dc8ebLSKGkEWmodbAkEa4ZRvzQiou3Hb5EkYqtozSxXxV5zEnGJYwaVvro5VejWW2",
  "key26": "4DiYk1u4noAxqEaQJK4EXuR3enPHPpxmHPUkeYvc6kfVkdvRPurE8akc9Uwxfvb1Dym2J7f4MukXZ6TcJvh8Xug3",
  "key27": "3vffeP9a8MHvw4SNNnpZCyc6aR6qBCLEK7n36eS35UUHmxZRF2fyJWMnzC4kotZYHJdjh783C4kpQVb4cEkKzcay",
  "key28": "5GXjA3TVdUiAZLc6uBKCKYQJ5tWpVpaKtSbkdKLpEciVjyrjsbbbxqJnWZFi4qt58m31q9XuJqXxXEnHFp4TqQHP",
  "key29": "5gtxe4v8NugPjyXkbQqnf1KXusE7Za4BTxaC82dXWtUdNUuH3qiUQZU6yhrjaYzj5ooswhVWvjWb1nH9hpx19zQL",
  "key30": "4qW26qoNXQLeZF79YmT6qgKyVybqWV5k8YbnrMoiy89R5vECK7nL7DYNLW7VLyfoWyf9mLrqDYy8LWcKriUiknPG",
  "key31": "gGnT2MuSjDWGTqZQNFxTe4Fa5cJKkgdB6kMNmcVBwJnZpGbRJozBPHgxp4BDtmraMcnfhJ3twr8FPKdBehkrfRL",
  "key32": "5BQoK47nycS7foJRSUtbJPvhsKhd9dbK4FKnrpHW8jMYnzpkUbHVrTLACA3pLBGM7E4u8UYHTHhQzhW6FH2qUkD6",
  "key33": "3UHguWr7BwFn6BdhRhQiiAThrrqSyjd2iRiP4ZhXL7RjnuEwfUptmkh2wCLLGV1fZgidGt9xPowdcdSDxsLCriWq"
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
