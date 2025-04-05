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
    "4bRpuBvXtCWq1rwueNfZt4vmEWf5xDCuEBGJC1qsY62816P79TbRyY2n1aGL1oQRDYFyvPPs6pbGVS1dpUztTLcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEN6paHrRFe8rF7QDm6eVzQAFVroJH5SYkT4fZMwMnUT1i3XvECi9LhLUCPvE29cs7rh8SXEztjKtLpNB7uTMyh",
  "key1": "5DNUptjBWUcLKps7mmbyrwzw8ntX2TCnoMCq7LC5V6NQpRPVQUUMw6q5dhbncA7ZkJskMmX9yQzsUAd7wgt9xthG",
  "key2": "5ZJu9FH36JoyxWF5ANCMyUHNy8f8yDPqAGrykjDcQPBisvDUbUZjYaf4q9wNM6MdAYHs7pYwxQaewdzCSdrVCDNh",
  "key3": "4PtYiCWYZMNFRg22wuaYWge25CZx7awqwMurUqX3itFM89QxNqRbusaoaEs34GwASwd3dLceqw3po4FLTwGYqpbU",
  "key4": "47aVLxpNqmC7shtLGSit7zsUNE3WsiniKVLoYQnfYZzRbPBhyBk581vNjA2iBgDwaLcyjV992FQ3s3ncCk9x98C8",
  "key5": "2qgj6Z18T5nLFCFCBRJyipCEwJQQzu7LLPQvZPqUMS4p9JvbyBVumHkzTfQRqVmzmiNv78SWP1CYaXHqsV8vhKbB",
  "key6": "4ipcNFwJbt3Pd5DHaFoQjGiEYLG1ygqPBrTYHwuTY3sUW72dH2vMg59UnDUdopSNvtLRNTtH75owXmd8VYNTgiNM",
  "key7": "pgyFdvCYouB9eNV8oajcksbVKQYueNeKeJWWv75vjjA99ZpT8KD4wx9AcZrF8Gix2NGTjNvLw6tftE3Jx4k9Zgp",
  "key8": "5MteAa5jCxtR6qd1pAVcDysD5ns7mJdeseeFXh1mYxPiduSSaE7LMU9K2Arj1s7yWE3Xs4W2zaAA1nDMUpWVpEEc",
  "key9": "4TPuQjYWg79VdA4s5pDGD5crDkLobxVJtUsfPLrgtXYBky65PLZpGXiRM5xg8nJbbXWpxSw22HHsYEkFWKepvCup",
  "key10": "262T45LA63ZCJoLT7yWGZoahNRw6oPLviwiwwXQiTfBytdo1iY5MBrSPVPL5NiPaYjGyQAbm9vuH5Tsv6Bm184KP",
  "key11": "5pkXPEi7MiGxv3PFUQmFizWGXqzotjtA8FMMtiKMxygskqkqzUEvyECLhFeJWRp2k1Tf5M2bT9c7C2CfJ59Mz6qt",
  "key12": "3tfGZcotsRKFgMpPLVyBJeezQzCdcNh2p9RCzQu7ZV4PJj252Kgwr7v2z1fsiGRHtTJYkmV8Hpgm5TqARHSbq5j7",
  "key13": "55RTyYD6YaebDDVEFxwMiNNnQZbWNBjdEMPKzxKdAV1PgpAZhqjGUApgfffJLmTB2PkVu6mhU7RkPg1wSCEBzFx5",
  "key14": "L3eJrwydbR7vpBRSA4nZD4a157722PbGk6WBaMJYDifgYHZ6eoNos6YpJeHHQNB1rZsSJEHpYy8weAFM7xAssWL",
  "key15": "8bdhnBEsuzKkkmj3XU7nXWjaXWuBXJvdeKQWEPL6Vy4CpHVafFkTmgKffUDAwUnCdTJjzCjSCL5EFim5Hpt6c6W",
  "key16": "5GGn6UBZyJizfy29JsA5HhUv1SXBmu2io64yDdhMKkyMm3DK6jCTLJ3vJvoPdbgiK1XM5WqycKdvMP2UpswbjGXi",
  "key17": "3wkM58uX9YTgDQ6G2gqwkHt39AKva1A9uN7qJc3ZDzG4eBQjWt4y98wyfhEqsmqGws1kcMhkRZ1979XuD8J9DTPb",
  "key18": "2Y6EGoXBVCd4aix2p6odTnfqrMdysGgvjUA8MTTbPLtbhGAEMGBVcxSkkdSEfwtr7cujNpJEhdaf33oEmYcbEtr",
  "key19": "4LEuMUkYws7fHTaVmfZoECDMBwVUa5Y6ELZPu1tiNeFXayj5LCUyTeCuvZkjvw6pffwk3MQP5K245AAU4pnhb1Sx",
  "key20": "2TvDvVFZDy1FZuRDfrS6DcurBDuhPNyKVGjyK6WBUvCoKtqyPNTXptWxDsKBfcsoDr9xxQUHpzaM7dkvqZ3zMNN2",
  "key21": "2XbeiKooyNDzpdpWYRW6cR2X6tSm4gmQLxgRusjLaFq4UBUz5C7yAf2YHVG1nQXw1zpXczDGERVFyv6BeUkdfFAY",
  "key22": "3DxrhWJLNoNHXeuUitDJ5HBFJuP3Xj6arBFm2Dfu8tqRNeqwqBLExQCp5Q4KcN7rCHw3d7VefpthHjkRgxDvt3zQ",
  "key23": "5BFgzU8DRE3MgyuNRdBrcPs7DTZVXdgSq6a4FYxTzDwwmnGuDefpCiGhTRH3vz2mvGLQsDHW6TKLS7aTX1fzGpwE",
  "key24": "79x2g34EcovitHFKkawBCg4GicPzwPd2CRrwiZ9YjJX6uXFJ5W3KiHowtVLkpYb1Y7xiadvPYWpBeaBDc8J6uZ6",
  "key25": "5qW7UbgsYWgmofNaBkMWW8T9ABfbMHHmKCqrqaZB7yf4Z5FKY6TcwXRK6vn14FRBhH3X8pdbe4mWK9wwtgJXsPvE",
  "key26": "589RNGVoRCU4rLrtmAwbsmMdfurFZqCbZbaiDbRo1DBwzA98h2PimLEYxrmbP8CK3o9qb351Y6ZDSEXRS6qVbfa6",
  "key27": "44fkH8VJpuV9pPwQnCgHBtFSDnLQWDKzqXqGe2GJ3MWdMi7iZRj1M3yRdFor7YyFoxzuw7Ew8yo5JnrBVPghf5Aq",
  "key28": "4JAdCfZessm9ekDwcMJ269amiqZB1Kq1TnqJvdRmDtCGw7HwA8Z8RzYWSd8WHiGmk5ry2iHMY84zhPw4DJwgcj2h",
  "key29": "56oY5EFEgQZNLXAZhVnDxgCbbWeF4yQt2FFkzN6tEzWiijTExyCYzWcxrtNvVnUGyQc4rJYM1MRiTGBBj6xGSwQ9",
  "key30": "5yuyy65BY9qyGFsAgypPgTXMTV6MUHnJLfcw3C3iiZYpPybtPg3TWc2QKsbTa7V7Pygzqww8wUzH7qfPvEC9Nm1e",
  "key31": "5KvtWUZisd8Z3nBtD4M76t9YhTNVQVC3MqS8qLzcKs1CtZS9KCckPG443exjLDqnrgQqXdy1KGo3gVLAp6ToWH7Z",
  "key32": "FYsbvng2PzGSR14p6hiuNmEdGJhgfD5nwhrUqgJix6FkmRYJaAdSWSnNXY8naBM2QiqxumAmoRpttKquySWH4gD",
  "key33": "HRGiifcVsxastTjqvDjHZXEgo1fYhyAin7vUq88QPmUJ23frxRGqC7v1S1KJvkJCSWoHPUYmwtnWDQeibNu4GPp",
  "key34": "4WyMx7SfCtMEjiiPXsmqUMrJRUYi11DDobyjWRVrxsGVbeGvQTxAFDQ2nLn71peXEmgzcGji824UBCYbvF8qMucp",
  "key35": "4BBdgPB9qawVdfhfZuf66Xog2YL8HwkhsNmEfjUZh71utj8ZEo7pjz3heB5z1Cf4JmszAcafEc4DmCxE5wRvk4h7",
  "key36": "jg3vvTQozL8F6tpfwjoMLBj5iLWWTrdb8f8emdHsu1W5DC2s14zqKDRnHiHSNZdBhNWM3SQqmN6DR9dBxzcKWmv",
  "key37": "4VSbVZto5914XPP3XTekVbSAwHiWcpkzou8jdnffGZBzqRjDefnpR3Hjuj5J18TdhDV6CD2BVVMDg9wzN7QfkunW",
  "key38": "32MDuKgm9MqRnqwi6NQW39VmowiMRX17HUAGyyqTuKDfAL9Kt5L5B8mywXEUqZZjGifNQ24QsrPjfEyeQC85aF4F",
  "key39": "Foidokdz7x6ZrMyz7oDb3zJTAtTtARiiSKxbDLeas5oZfBZE3LBakaKEu1bh4Yd5JXPW8ypWRUDpHaQJd6yNeb9",
  "key40": "58jQGVGruyKx4VCLeyY3i97ooahULFq6rC5EMdp732i9nechd7CVZNc4MrQ8bwJAAkUZx2nhVStYdGR1m6LDHHho",
  "key41": "4BXcTcPLNCQ5aKgDJpB8XhiqqfuWLp7cq9E3qkVgeta25wm1mBTzq1Fpx73GgJ4sFw4f7137LGaLHbSSM9125yXx",
  "key42": "ZT7aXrnBLubGUDgh82ZZFNzdAeU81uKnijga8FnNAq7QLFqEJRwuWke4KWp2weZs9gTxYfYZnnDQ2YPbzJbg32Q",
  "key43": "pM6J89BgBhW4mvbhGMM4hYb8HPPHpdBJCjeEkjJyxr8YKUsaTeZFbbUpnep4fUTDMMccYGmjnLCDnc66GuVUGSd",
  "key44": "JF236DcTmpNdYQZ8XcUiMu5m9terschUM6QdorvNmkMdaEoduyqXsN5iZSeMkbM7CbH3hCXNExtJm7iAEQkwPfQ",
  "key45": "4GmJ6xXjgsw5baK5KD3Yn1QcdCQVcmCdvkF3CvvmvLaqzufaiqo5WjabSzgkWD6Q7vLjmAestuPwjhFBX4pmabDt",
  "key46": "2fY1gyeLYXwowrraUJtTgK4aPScdCirBGH6GGkZF4WV1sorVoeCDNJzkguBGteMDcRs8h3E9oa2Ehu88k15jBG6X",
  "key47": "3dH7Bpshhp7br1pPsQRXU5WqTMyf83mPyKTzzKw39Rq3vr9PaUCGpjZc5xa4MufV18M51XJE8sej6PB6FguV9M7E"
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
