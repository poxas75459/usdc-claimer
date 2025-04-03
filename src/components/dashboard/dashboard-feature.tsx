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
    "432m8FdBKj53dNdmX7BA511W7tR3iJSudBPE4DxPAEQV7Rfb5Ds19kME9qvwbkkpwk6s44mK9vfs4jQkhso78ZQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VP7qqBiFm4yfBJUqm2bQJhnqt71XAWn76xvJJ4FcE2mW2RYrqHwosU6xEmfstMAiFtNEn44w3HypvJK3KTuC9p",
  "key1": "3URacdLZp3eeALFnGnmeNLazPus6zF9iVLsa3BGd7reNaUHvAfVdj6STeMaw8Vvr3ju6iis6sSQuii7GFWv9uJRe",
  "key2": "63D5BTFtYouGy9whhibopZowBy27wqbHLqPpzDB4y7vFcqBc3BaJpyTVAsoohGExCgqBYyjg6AwES6XrVw8xepVS",
  "key3": "3poArT7XxtQwnsCGqeqD3AHhtRWmeq6e4D17yZDDbopEFXpy1Gy27qvb4LwRzpaMyiaPK788wz9h77ScfARVFbGE",
  "key4": "4LbEWDCT1nyG3ujDyqBdfx29FRt7qFuT1ffa38V3va3SQW6F5fmLkhZGctcdbimcL5zUAmY5z1pwnyYwfeDWH8VE",
  "key5": "2wMW3wwVXzhNZUxc3Z9h1vyKhG1BPKWYqHuHA7PJ8FG8DzCfo3ZCtPEFh8HuRKYrPo7wnY8D7axiZ4vzYBETsSCZ",
  "key6": "5974KVgQM7794j6yWvkJVjnrNbe1dy2U5v6kmMBtSck5vGGUnmjjSsMmG9bkpvVYW1yEPgt8mHqLZyqUFKwAVVtB",
  "key7": "3UfSBC33fT7Thh2E7GXzeyu6U7yRZu6ZpJk6E6wcof6xffVSAsVo1Xd8UgvUm2iNpwttQEgdWKhHwB9oPRqkLRBL",
  "key8": "3s4tjSB2oJZsEscU2vEB4zvKSximDnTG1PNatKLwnbL7D8iVq1xPo1SuEuEi9UBkxt9BF4WUPocmT11BUTCEi86F",
  "key9": "SizGn6vVR8BbwGBUfLXio16TFHCpZEqNNBhLVV2syZo5w2GTXuFstH4VeMfFxU3oSnmY3uok5aKmy9b6SCKSQFw",
  "key10": "2Xxmc6r9FEUVDmtD6n1Rgd6mZ2CgYKwcTpJ27JeneQr2W9HkNmHsh7YojS9zTp9uBKTejKnJotTF5WekrwpuyBNS",
  "key11": "5VKKofturyyYkxj8Gdo4ZAmFXhc6tk58zwtQFFUSAG5xGsh9txY3EtEQ4r3gpCnqthGXG4GWkrX33sqi97r4RDQh",
  "key12": "5CHjS7MLVLFimLmt51vKHUkK52vrAxxbnR7XawXZjLXVXziEdyzF4gL5g53K6ZpNnX3YenGWpYqAK6kEAvWhTb64",
  "key13": "5EUmjDnxrRBC9ZQfqTp3H5CmAVsBYU8maAwGt78E7utDz4MKi7kQmeLSjLa1DKixqcUW6KGeyWfW6T3R6Ja4c12x",
  "key14": "2V732XGgxtLBWFHPv3rq2ceY71VMZq8UB6gvT7SXSahQqLW7fpVDfteAufYreixEprZ9v7gMUZNVbU6y9hLmnRDV",
  "key15": "4dJxa7QLQhAxwH78y5cYo4rWTaAmerppGjVKCwTF9vX9jBEwYy2Gn3ENWx6uE6dargj9aJPCK1bUJGba7cs4PDTt",
  "key16": "3CykDU2hcxb5UyWFfPKPFCEwq9CaR6ALSYUWkByfNpALaJ2jSJm6kmxuScWTC5oRUFCJNURpftTsWJFsmKfsDBa8",
  "key17": "ebAAi8sd5VJYnT7FLcj8y4dj1WoMhYFkHbToWvLa72sRga9BeqKzmw5BiBC66Ca1gthDeYENo587463tUdh44Vd",
  "key18": "2adcq9NekWWpFdu2isdbV14D2sjmz5o4DV2p3g1wTQm8A9PnTALdiH4aw1um5rtZjKDDQeoyW1oZtudL3QVhf797",
  "key19": "KDWrs115fzVjTJWLVtQ8JUgtZJwevxPfzfqw5kqgft12iLVRKeZfhYbyexSdH78wGzXhkPbKAcVECv97rYNQR3L",
  "key20": "3eSNXpLXaUqx7b5HhKVNqL5GbsBtNpYC5y8Wng98NJUQ1fWHjT9qmjsKfzMf9fcBGhjujQk3XsUNiGJJ6kdrQFs5",
  "key21": "KTg5AVgBPjwixtfYUFztXNogvRGBQYkyQM4ipjTBEAjqiJ1N79VTFFH3vxvuf9N7qvaCByeRgTjxEotuJwpV9Mf",
  "key22": "3DpxXFuERvSgeugJD8r2S1gskJGvKnjYMqz7u6XmFtVNBamZFzo4NXpYfz1Y4VUaBjRbxGgHxk9oZvqpjNvvgMux",
  "key23": "3URc32FLopu2KFKLbRgQE3eyWFNuC53NvtxEwkxijkdxc5GV9SsYvmwPSSJPrdcoDWLAxEs3gWsGE7fD1tHbgPtt",
  "key24": "2TT9aV6ceKciLNrc31kDu6ZX7sm56Fj2NDmRQSDxfCpFtd3qsi2yZ12LtgeWAQcHmaYF9vWUd5QPf7L6rTgnscYG",
  "key25": "87VfFAAudLu2U5WJgxkmJ2UnjyqnKxRCXorKHegLLTJhm9GRkQgfujgSghRM8VBs8FLdFc8HCrSQQqpkYssM85F",
  "key26": "573Wm16prQgZPK1ecue8awgEcvZ11SdAMz78No418RsPNirLmYmHpfLHUwpW9V6cDrz8tUEfqEig9whVxjcEMpJ4",
  "key27": "4cG4c1TvCq268keePW1VFtfNvMJCpKfJunmqYzh25t4uDhAxFq2LUrenMizuabB8wdftXuzC2Dg94tvAp6jhKdFy",
  "key28": "2hdJRFXvWNS5BK1XincPMGiHEo3Bj6zAaRthSwozGaw63aSgesk8UFQtH55jRLD4sMgkBK4VKY3kQcAWxLYVSKsq"
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
