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
    "4uSxuVK5ziXGNQCUW69bY55C1GMVE8bo8k6d7xFSNDvhDhmuxo1jWSiwdfcs5SBtHvuFKm2UeP6cnvtgaR22cT4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ie8qbraskPbkPNeCfxVifHWTf9NKGas3ukng86HYNQktXLfmcPEh6UKrWSy45EuJbi3oE2QbMu9MGgLbMNRfT9e",
  "key1": "djxX5AvPJsC9CaZhLjQdgrdCpovi5r8Bp5e98viGpvxHNDhf7WN2QzHKPEvWeMyBghTVLizr2W6d6Hw23b4AEVE",
  "key2": "3nDUVg2eiXsiMXwStX333LeXNsQQjMQSKs9z7zuoMoRKbo9mq1bJgzqbUz2qHsXxLTcPvrmcYs1ywh4paaWi86aj",
  "key3": "41M6tXKErzA838BxCuaqAN688VvvyhzeNeJx2cUZNbuMCXLg2hfVkmCrDd986KumSpD4PZWrwU3y8GRYMMs6Zpth",
  "key4": "33EiqdPYMSRStdt3zZekeLEwJVGaAXuss6FgqMkFqutSg2aDZnqHr2pVeX9or8wufSLkZMLa1vUoG69bGa7BWdnR",
  "key5": "zZk6xeuo8TkX9oV8cHMAMy9zRny4bxQDenGgCFc1dGx41eKQtHGevBAMCNEThCfD2Km9BjT8rh2EUfMYuLmQnE8",
  "key6": "YQkjF6JPgLnDGq3qguW5bFF3RUipa9QJP11VBcd4uXH2BoUBMsMDmpVU4CSn3w7NAFk3JW9GSxXjrZpYh8f65Gr",
  "key7": "5oZbvH98oeAqfETGTpsTsRqVDLfFYKwroWnJPsZgKur8W6UhJjZbeLSiUaz3dg2cjUGzDtXHF4BaX593cjJNvGGy",
  "key8": "4ZjZs7yLEwQ7RVdwjHRhRLrVsugJYD8TtByLjhoh9xGHGoSDGD2YsThzmMLffqnZTKj5LdYgnuFmnUJuoeDJGAzq",
  "key9": "544kZrKWSXXPWQGx3S7Nnkwi1HiQDuX5HejX88vRRh6JdTZdqEBuRPYbaSZwG4fNKjZddPjvF87UevdyNCQozRtw",
  "key10": "2xZbvrmf1AHpLL76c9NbyQXH759TAiV2GmpFYmMKimvdBpkYs74TjWDJidPkCmqKikKvS7AYzPx2TUmeBezyiSRf",
  "key11": "42VcLfStakPpqicnmri7wUcD7p3QFeGhA4YkZrBuNFCh56tYWBpvDzX9h8XnbGgf1YdUsbFqPe4hoMZs8ymkumdy",
  "key12": "7BFj3oNTfX2pU1r3ojPBeawN81ts1Cc2EcdETMcdd5ZhwUaw4f9w6bARTb5ZZ26eHqgCueCbT6yEHzmKwKnERDT",
  "key13": "46tkfjnRXCXuyfPiuYgUGdo5RGCFrxf5AB1w8jDV5f4kPAaJBnVfzYm6rb64HwwcEFrXgg2BgtSq5ZFQrLVyXq97",
  "key14": "4eYkoaLmcHVZxGfqVMvaKarR6w66HRaMjSvrwg6S2PwzJhQR7zN6CSpPJNuF2YJqn1FwJiVGcvE9svZc4Gi29t3d",
  "key15": "4yUL9YDV8PMpvgbTchtaR3tCNNrzrTMQ25HUTdfVBhKCQECknFPQRbgr3FaoyHGK3Bmd4Y3Ng1bHrVLERfEXVibM",
  "key16": "2TU42NzJqfe9TtL4cgRvw6zjfmLAPafeXD3uGmcBKJ4Kn7xg4AkNEJgTbPTmkLEsHttaAwvx3EpE2KdJS7bLwfpr",
  "key17": "5Xhi8FnoBbCTgCnAjnHAXHygx68AFptLd9Nm4avNEWu6TNxYe5HcFGZC4LGJhK6mHz65fk2Cq2hU1PmGU9JFg3bx",
  "key18": "LoheHaJJ5iCahgUEWW3JWtBpPwHj44YnYq7pK4k2HhQfiMPqcQuRRgPytLE9xCNRGRX8Fb9FfYXpoVYbD1gnEdH",
  "key19": "5i7d6ZoqurfxJjTj9rgV8a34hqYGeNUJhsSqmVMnWhZUnuYd6ZNcVuFUuBx3eNgc4jaJzga2HYUvL4svQU8XmipT",
  "key20": "4s4N11FExRy8qGS2KxUm8AaSXFNt3rgfCvu6nChULKN9SRmWxSYqEkK8pLUBpfJMtx5fDVxZeuoB4MRJQcLZL7DD",
  "key21": "zCMjq7qnfYtbLrFyHGapHJ73tBq9m4yenAKPYBYZAxSEwxYdFmncjN7dPgWggkAhS1CAEytGUwHmhaYqSJaVqJv",
  "key22": "4DosLtPMLXWhGHmEZ14n4wvjTFEKY2wdBxL46GovtfjXETYN7fwgzCXibq9yBTadzkbdWkc5G1upGc3vm3CfjqY1",
  "key23": "4VTNLG41sDusnyPxjiQQjzfvQjrBZm77bs9AWgGbYerCeCvcXjohGuyQAuLW6yHkHL2BvNgSLpyEmWhqBxYGQZpu",
  "key24": "54LxLjy2VcVsgfoZAUYCmeUPUz4cyncZWBYvPBQLkwMdDWjxipxyKFngKYi4Ry6dTjUz6iTAZnmeFQpucKSua1AM",
  "key25": "46owrZhskhz67GePEo7HNtVbmZAFsdoq3rAjqWpdvQxjzx4PT6r6CpDmv5UJdH9pK8xkGe9FZwMkXBmVo45QNSwD",
  "key26": "35HCwvn5S3L1E12SWcyEYrjdn4pD8MyP9NqLerGit5ixy4263S627HFwjwum1XzwkT6T4cYvpXrwQLVpTT3UekWG",
  "key27": "3qxLVz1shtc9M6E8qAu7gyseq6LARdBaB1aaqy5kw9yVT3Y45X5uAY17rjBNmaUZfWi1n5gfUoX8tiPTtfqrxLD4",
  "key28": "58gMcQ6fyYXyW3914LHm9LgYwrtrJLeyUe68KAjj6CkhHb7EZ7VJecPiS5ExwiD82S4TWasbAbbbPoVNsJEqyob7",
  "key29": "2cg3jgLJKAcARAYSWm43H7AdJAr9zaVab1pN59HYe6bUASHrFRKPdP1haE3fVspVYCMkWooQyAkChJ6pjNAa4PgY",
  "key30": "yCLQFmycwnT2N8bxpWzzE7irZqbjFheViZpB4ZFHvWy23zznoVevB47UFMhk3pebDemYWZTsEWmdeK79oDcGcQ3",
  "key31": "5amtmLcBdj551TpqcgbtGq8bnyAN411FY2Drmet4prBmYuoFdRUbQQTwBAA2ZCLTBoidEWFE8JbC4nazf91tfxpf",
  "key32": "51uncH6U68h7omZ75fV8odcMNB2aN1iRWQcY48zTh4rCCPwANVEiQU7N2dAUBCW36iRrwfGedbbVhUPu4RUf7kTW"
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
