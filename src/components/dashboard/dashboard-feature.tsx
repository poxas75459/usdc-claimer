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
    "5wAT9hUFopk8boBi2XGkqcX43z3mZcv3Ksvhv4wcEro2qKUP6mR43rJCh9vnkrA2GqFaEbtp4dYrQAZWYF5J4Thx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8NHjUQQRrdD8Deq8wss7eaRYCo7j98Fo5kkK1Hgoeq9GyF9ySB59BmuL42iBUY26Kj7V7QtxzBPZPCjyEVwn4j",
  "key1": "3FTJs7i7UpPMBgtpSkpnQgZ1kxG1ZWrpGgpLbRvcecewTTo8nvzb9snkt4WcrTygHp7CMUy2iQGPd1pH6YUb7hSY",
  "key2": "2Pxckvm2vehiCZfd9AJRqj7fAU8HoXoRUe52NpjV94wr1u4JRKZNunsmrgpn1RgYKPCWJCPMTbApjS7V1FnwmGD9",
  "key3": "JiAPMYzSfFhupnZWAsVcXMbh2yeVEKQpXvv7NF5jqC7jSMtGKo2A3qJtkenHJ5sLsdt7utS8XTBR7a9PGwDJqVq",
  "key4": "Xj2KBM44ZPDoBQy4n3T2f9919nUWVuvG5uKUJnPtFcVDLmr94CnwJ2Yan82TZqRqJSJp5wg2zVK2vz6nRnjjitk",
  "key5": "BxUo7cLizuDRsjGJvFWWHhJpNfGbRNn44TFkhpNWuerJChHNrAp7VRWybvZpcHiEFH48ccj3Gcm9qaBNSuSaxCB",
  "key6": "5rqz3eCQuDgKuyLrdhQSocZvn15N5qrbm77judC2dXLXKG9m9nssWiavNA2FMxupr5gyJhpFJ9rhuJ5kLp5ScoVf",
  "key7": "56g6k4FqcoftWALWFaevVvUPXWKucnQ6nqt3o98DYsHVqZEW2KtkhvNc8UKyqAPEmn3d6V1XcYT8QKxez51xBTFa",
  "key8": "61GGQgd1N9VBT2GCcHx8vmFhx7VEjDqQqHdEfiVR7jbu3pHx9S4vVXtyZENZcrfKh47NAoK5s6YYFF1CKWwiYUCH",
  "key9": "5a95y1Wj3ie5r6Wvt1juzB8HaHoJgP3g7ve72ApHy7Vnhzeq1a6xS76kHZhrUa5Y4emawaLPYiNL3Svgsovx2tLT",
  "key10": "44nSeoqcMJxxYTgYhgHTGiBUacTygMeSZfwgojSrThumx2Qodt9gHywgGGBy1PdyhqUtt3iMKrDrqY79LLRpwnDF",
  "key11": "Eq5jqejELNbYhnpVsdd29kiNhCrZwodUB2Cifxs5ZSk9DoszoUHXNLoqmX7t3DXbfdMDmAoQJSgk58bUQQV9FwC",
  "key12": "3e8415qxxQbfBFXaYZo1DMnNvTvwS5SM98kNoPNmFzPjHEszcp2JGhPdQr7yQkqEt5TpZWFGu91JY1zxoKXjBLa7",
  "key13": "4EC3U127RADgNi5pXnSLr3bBrsfQRTEYEs4yVSMqS9D8ipM4HADW6e84Z4ghjmXkR49YYufcP7szWhUCKXoH5gi4",
  "key14": "3tDcuawoJpg6v8Evemmmnb4RvFREPXM3nvAugfCpDNikDQnhNDzodDmk6GMYGKWr6FcKpagX8jxYbSWSoLQJqff3",
  "key15": "3udg64cTdGA1g436cHaibJyLLVE2HjMauGhms3kHWmcVdjWCncLjfP1xmWAkRLNxRkEg87zA2wGiMdf4NXpmZBqs",
  "key16": "jHP2vgwRy78JoJzMpNxvGqYxDnhmRbof5Nokc6UiMUE8BTTq74DDNTmM7dgxhMUJCJaVcg3indpvhVkBVqMzAYW",
  "key17": "5x22nF2eT8PGf4vgZJTzYTq4WjGuQzANbh4wMk6hJubk2QTDKf1q1YUK1n29sSGfRGdiT536YGUzqJ88p6oipMPo",
  "key18": "3vKBAnDkDH4pirYfvSjr7BNHqduBbDHh5js5t9tTNPFp2FAxSwVMZMngyuNtaEZPS8YVeQ6Vv34GkQsKdMp5b8cB",
  "key19": "hmP2EzGNQMWGzcUNXhonmqoSuuBumgfMRPSoiDBzaEqDUd7tThACAs46J6PygizjvScL7fiourXzJrXb9XCa1bN",
  "key20": "yy7C3EbcETRM1fGqTGtMeT3vuHnJJdK9Tsv9Z4HY8MNynk5R7CfenweB56XSJcwpq9MP49GARF45SfFnXHv8E9o",
  "key21": "4nFkDSZL551xBLdnVL3mEg9qgtngtju4ZQr1XHKZTkbCyHC3ksfD6C2SAmkEbdfzwxkwLkBSR5rQ6aDQUPF2XTu8",
  "key22": "4qXYiTPm6GwMDuj2vxkhtRJuC2HxTRpBh1gjTisKSVGrE3ESWPiVQPNEvQbFKsqYgTZ2ub6FetSuLwmyj1HVdAZA",
  "key23": "o4CBWeG4PYrXw32aqKSk89YY4VZ1km51dw8eGafCshtTMrrKvoSXg5veuHYtCrrXQtJz2dn7RCVQ7zAdjNsjED8",
  "key24": "7tKJAeRDz62xJMY3sUD6CRBzdRvCrJW5vY3hcuhXp9ZQmFV8LJreBSrKwcGXSwDXqafE15cHeCEmRkDJ37Ezwb9",
  "key25": "i95LSCNez4xP6mfzT2m9cC6qsfvtDofyJaTcUPwoq2exD8z6d8xWFBeJ71NZe6885KrX6JepzWJFwWd5kSKPqnF",
  "key26": "52w2wFqKc1kJW8jjD8fYrHWUErKvu3Mh8QJ36vxuKq3YoxLzM9eWLSE9fmYPRAwu1zXpLuoACrBDx82JHrMDwLxS",
  "key27": "eAj6zoSKhqDeDyDcpK9yEH82wp2riPkqy7E5r9fPr7Pie7hCEbyPBZGhumjtHwvxkNQYgs5ukeFHtVaDw6ixvbZ",
  "key28": "3hTjTYcGZyJGBFq34mQG3vdSxJ8dtv26jQwtJ7nHfUGCeax34nefD3P5pDX8Hch7n9BBA7NqYar55puhtKaJaZE6",
  "key29": "5HDjWSvSEGKtQJWx1jX9igH81UAj6dx4JJ4R6gCHxePbpk1M8x8Xof768EcjqbyivxtQd91PoPbSRFhp6wEk96JR",
  "key30": "JrvvNPLj87HP7ysTW3kZRUXw6B1fxhWCsZLeEzThPjbcDXJVZtnzthjNsukfyqNjfALrBELj3bAaj8ZwjcyMzYx",
  "key31": "3NzBW865tzKPV1CZBJscNyt3ztuRoHi8JoX4ofat62m5JF6CZh7KE5ZfNLNnVsNyJFHruENS7DMHVxkiu2SpEWAD",
  "key32": "2FUsgDBdV4R3i5J6xGjbBYYNb5KkzqzAeekoavjAM4cqrbarm8CUXMUDVX7Pd8Z2JMZ9QPFifcy8qVtGTZvpJLNX",
  "key33": "4BFAWHV6Ngot9T7zRqCxLziBNhoFVivoxE2ixZyz6idxEwDTo2h3i2Y3tk5MGchxb75cNWf7nDDLvh33nsN8nku6",
  "key34": "3BjqwN9bgYdCmA9uKZe6yDmUPx8uucoU8Rx1LZG6Koth3d7vopUUkGe2knVaqEhDPYkhM9Ysw6pvnMvJf1LacZgM",
  "key35": "61GiKeZHUeQyv9QhgFdzkMP9nRAs7JD37tgCQ5x3mMjGny8WjpRwqNLSUT4ZRy49YEsXmpYFYgJ2h2psKivKunnq",
  "key36": "25yufEYZ97EZXPF8rWypCMztU7DAQaKFuJAKp8Li3r7otJUGBR7fhu1S8vbApn9tcrYqfsA8csqEwXdFjovpR7pg",
  "key37": "5fPriwaSZJ2Ebw23wpsTNHUJkC2pPYJDrekQstifZnVZQ5tVnTxDmC9TjNz8ay5uE4CRHujUvcKtZs9njKSVGzN"
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
