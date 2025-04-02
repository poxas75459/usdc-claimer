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
    "253URYrqj5tV8mybnoRq8kr6PsEwnt3d1Wy5YMNQXaeH3QzVfe7ZjqmggvSaZ9B2U7KuVPwfWH1VTr7WTwfMUWtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qz4zMB8CAae2AHGFm4tRkY3MB3bwnNtE8Xf2pcBggkkkBWcth7NwZ9MGtiGxp314YhvZVLM4tAzruMos5MhzVHe",
  "key1": "5uGaTNQkXcY4hAHKyb7EYfH8RpdC3SWmouEW1U2gRxu5DpyRqnUAbWX6S7jqvB6JEDP2FGnTG3KcewGecJEfLQi9",
  "key2": "455xUtRCC3dHvYCWSfjaKuogzjykAJ2RDRr6F3DQTmGXXGVej1iFybWWeKY5vXsMDTraQxgjkaGu6La23QfKNQAg",
  "key3": "3bPpV2hEhT8PfuEoCfMcM1aT6iJ2gm4HLLohuy8Zua9zFAN95W8GkKj2vo2VHG7h7aEmMBHqKK38knVYYHzfHZEL",
  "key4": "5XS9R7ehU9rTUtqKP1MMbLKvZd4vLFAU4F84Yw5PGJHw3Gtkwd5EJHQw52oXYhTbtvbPohvWnkxUAvXH5ApkfuGZ",
  "key5": "5PkB9C5eZHqyZV1VAdmhYyMr6shqCwpXTXdMim1iAh8bXbZ9H3JgWwxEwCT3yCSXYTrBrobFmM3Z72rcdkKuQtpy",
  "key6": "5xQzMpBSZnWQqsuKYGnkMAQYug2a3WkrY8wLDteG7XxTmSrmDKxfwjbsFYXs8QKSaq68AXfJg2bz7Csjz9kPVh4B",
  "key7": "3MtLjFgKK2sEcutdwvAskCoacrktCAaHwhbyQugf321QVTu9DDFShKR1bYK6nsjunPWDUQaAkSfugJNkE7h3FFbK",
  "key8": "5F43GkFWbADzMe6GgM3c76kj567yLYts7woUbFuaAB6civRb95NUBpzyv3iD3FLVV5VLXpGDQri61faShhuHCyen",
  "key9": "43ynR7YpaeJt4VVnXGSZuRGRRhueFGtYczGLwfm4SPG7x5M5FjxUcRsEXarYTKHAidWswS6kHkNEp3d5GW6yJAhR",
  "key10": "2PpAFTQb3zmHproutFjFfBzQJguy9Cm4mpfQZf6smkFTPeZ5aAJqRRNYZ3BFTNjHAH3auy5RrXfnkGNKmB1Fiy1F",
  "key11": "4Aecr652jS764MMDR8m5acALwv4hoeaH6M6FCRwPcnCNohzTrV1LTiFyx28MqUspkTQZ9SjLdfE1SwViH1h7UkP9",
  "key12": "4UdZNcpUi3BA43DZ8qwWW1YADZDYFE7ZfdtmZsN45Ln8KtPwhjnEVvh835V5EbeUGvobVSXqCN6gdBvLcjbCRk8c",
  "key13": "66buQDpaZrKw2hL6Faq9gT18REdLh1eKGQUtBBuKcuRxQePeeM7WJvY9wGjQdSGsyfEdSmm6wv83xftsHgoQaKno",
  "key14": "5zfniFxCdCwm4onw8Mf2Sx37p6foyYHQVKMYTvgDWTEyUTmXMEMALG5QqD2k3uhUH8eRFv2ag84ab5SKV36ccS71",
  "key15": "4vHpFMB69BLU2SLrkk711t9d5RdCTkzoZcHpzMScpU7tWMBPwwegTaL8oLDFMYUDibxA64YNoEFUaG1BHtBAXTuN",
  "key16": "3F6QVmQpWHJt7SVvbM7uavZn8UmcXoqHbXbCdvNx2dwgSy8nmgtvXZxJxqYvWxcLjvKCLctY4TPSx6rzbYnqr4mF",
  "key17": "2tsp3gVz37HqSVoWv2G9b9fuLqAPAiFni9BrnPfQxj4VgkrBqvpkQ9AX3LV4anW78CJftnZANn91N4vXB4kfLYPz",
  "key18": "46KQakAA72zRE1RH63BBfXLWjB3kAzLkp42BqWaH9w2wvi2NhQbZ6VKLWKn82d74N6HAnhNAZKu1t8Sd5wPfh8vd",
  "key19": "4271kCLeDxcBuaoKb5GLPqtpsefjDAG7sXrxnfjirrGex75ewghgpd4qstKPyiAi317FaKofR2XjntTgyp4NqtXY",
  "key20": "ASaSJrKX3U63kNRnCX4fHwroXxSyDjh7JMAw21K12sKARtwsYx3eYidNs9dyUfXeCmu8xHVAKaBKnUfxLMUM6Yi",
  "key21": "4DYXqJfkCSduYXzvpj7MncdTvEPTEKRHiW1HQ3QtRNU49rRc2tY43Qe4eJPE4TmVmTpj31dDegHjcAtWPsbBkSUY",
  "key22": "3SkJJFnHCigKm7qnUAYPqN4jexpC4jLySNb6tUbMx1ZKGSS5i3hKjbRok8aSx3rZK1ihwPctxoJt8haLpiHW9AHq",
  "key23": "4MiYEvrHQPWDN6XH9n6SWWUJwtKXrZhYMQt3ziRkC4ixx1qEZ51813nVeDh1HpLsMKAp5V99xyjf4qse7HX8ss5s",
  "key24": "2SLHmLWHEMgr5SyPqYMaD2djxmfUg2pU1GSBuoGj7Di4T6HzEwu9d46s4gRTkVBUJBD6yqP3R1iVNHZEbLxFg2vC",
  "key25": "2iK3CGgBdJ1oSwivPJ1fnf4TP2cvr9Qt7JUU9f9SeHGKXH4zCRfZUmsVmy5pMFDq9xbmKfhPyj2c641pjZRf2qZ2",
  "key26": "4VZXABfPc2qxiQkgnTvRYtFUg5hzsjcsKZATHWwyx8tAUvCQtAFDEbsip3iAfiBpSdttBJTtAKgdWwRcUBiG81JG",
  "key27": "5Ff2vkhrMbna39rPaZvUWvfXrfbPnENUonc2bNADiCfMRHaYh22t66DHNkkrakwfWJ6yVoDfsiSeeimCVh7oomxq",
  "key28": "3eM7EcsyrHd5qHKegvegetLVuCConUG5BsNU54RiENkffuf4aPYstH1reTSLVcxmZSCdYN2tCyKoL2MAhbCkBJsh",
  "key29": "4hSg6dbSDDZ4NHbJcfnNBaMmZ9zEuangW2dem53fxcRxU5oRUdatswp3nU7vLo6TEL8RZioSCS6nb5qhhCknUV47",
  "key30": "UBqtTMwB8jdYzQiwaKunSdewGErvbMhH2EaTJhCnqTsx69sLxLY5Z7atTQDp2yRwoqWHboUJUmkusxeomJABJry",
  "key31": "coVVtPsiZkbbmwEi7iJPop1atM66WsYpmmJyMe1m3Cmon9xQfGAkzJxzeEWWxKXjBhpoFxstq4GeeZTgegL1nGA",
  "key32": "2MFzV1B3hoqzC8xGXL6LWwK5bKRjDdqkX3frZZ4sFvC2AAkNc7aVKuH1KXm4qYui3bZCkw2cWt8VsBSBtrUaP4zQ"
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
