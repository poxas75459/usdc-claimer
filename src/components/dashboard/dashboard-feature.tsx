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
    "vDqYP5FDuZoiess9xBE8oExm7xaMkQzUNs144PrMRkmLtxv493TVoz9j2GBMGNU8S5PqZ492V2FtSBMEUoVDyVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8bDWVteEguxa6pz7WDntLn5E1Z7tfRjuEmRfcdVAPgbe1TkQSBZkn7L3dsAoY6hGwCYMbvKkCkKEiSoQmuYfKj",
  "key1": "3pEwxc6DH1QAsiu9Ahjxc6cCVkzATKq5cSPeLWZUeTAEp1o1qvchbLgxcs1nQABx3aHxa6gJVJ143CCDKFRwBkUR",
  "key2": "oC9eDZW5QZnebjb3ZW9XtBWQYx5GfeUVADfwkkFg8pyYRvYoS4vcdMhcuaVFM3f4n5jnUT2GPQ63FBiicatErZr",
  "key3": "23RP3wTtxCgNUHShTbLXwpNphZzoNLiAbiqtd9gehRpUSdFUHABmEFKkgKoTJmnKSdvZccYnGB91YzPnVxZYdBAZ",
  "key4": "2yqRibZawpQ9q7oLzhcfEb43xpo5LnHyjMUHMd9TdpcggphkUczJDtUZXgcto5qu3C6MUHGoB5BeSaeiLtpN5YZB",
  "key5": "3ZXpVVQfLo8qCkGEMasoz3kzjgdG5N18NQs3RSEn45DN3P4YvguUTJ6YX1JHZrFXEDNJr9VopKXXeKPfjN9cLzmT",
  "key6": "kMEWxH9FeBjMqQqSneTKApnH9zZ3KRWPxAy84YEuR52wSZUqnw1CsxJMULv66vc9a8S6r63bPvw2m7RNE9sCpUY",
  "key7": "5MiWtiWhT5C91JMLz22AwR5bwo5BUfrkVNFrMwLPw3jn8Fqd29yJN7HmaJRrGKrXprPYRUjrCyEWhpEj3hAdkDSR",
  "key8": "48Ve7MrmwBayPcQcGvHmjJ9f77M8itrvmsDKu6QisqTFoeHqbuCwGkbgBbWuMjATicyeG4aVkACMdzJtuZ3ts1LG",
  "key9": "3njJAvoqnD8N5Ky6G5KU8ScPgqeMn5JMk4BRNcKQEAv2QMXdRzHaE3brNqi53aNUyeQTP8jsYniLQV8XFefEm7BR",
  "key10": "5wXjASXJHFVD813YwXgDW31tAGVLXsnyCPiDT5eS6GuH4QzkUkxgEnKa8KAhSnyQsKFeQqqdSGPkcV8wexarr17Y",
  "key11": "3eoWfmUFfrKDHJm4TRhdMnFsRq5kgzQ5rGiwkQjzhEw9riGYwTmCq5PtCbGXeZh1VJYfd5av9jhbeM3SemER2k6k",
  "key12": "2jS9vMsB4F1nXD6DWm8cdPvNLbQBkCT224VebHZr9odXgFkePYDaXPa9qBf6XCm5fWhHDuKcmdJexk6x7B1cf6gC",
  "key13": "232WMfnkc7BEGuLJxmWHt2icVDvuWFwaKLnXKJPyaCsvYhJBLiNnayP7THoGJYF3HHioBZ1x5hBTj6qg8KWzEyks",
  "key14": "YnXsvVjVRsdbz4vHkem6EkNPCiDcFFrS9eFBA3rBH66aRZvBMbaXJssUNoGsCFSS5Wt2ModKGRhQaJ5QVsRimx9",
  "key15": "28EsiMC9QCXeCLQ3TLFUqH2fjCXvuaDRHbdAkQkvis3ztqG4oijHLmvCaBS4YX4ZDF5RRfZKuGnuwhqmmXm5XWD9",
  "key16": "2P9pXxKtAhWU4y1cMaeuwAGfYsawrM1tf8ywtexw9TEk34D8r2Gsn2GnzwfLnyDavTs9x7gwh2xPe2KZAYU5yj3J",
  "key17": "DyJ3fvMYZDV93C38P1BvWiofWXt1kBVAARKveYXeBuaMiJxn1knJQeCZF4BQaief2iL92i35KBERmtcM9nhQddM",
  "key18": "pwzeQMpFHqwipfUncKnHBX4agPSWDgdvMxoQmcAZ5qsckBGKtz1ss1eLLrktuXwhkqvjFizRXZhMNBkbLd4Pz9J",
  "key19": "2JJ1697Na43W42GALWNrdAZzsy6ymiLJVbcRxhdoMYwUco6oh46bJMMofaZmDTbWCV1mmZSvKdWMXif5pBpfKSmG",
  "key20": "t9qn2oZGgfx6bDLwjSZTmV26S4GBueY89mDx4Qk2dL3k6Gfv7sfgruuwKji485sMCLa7wAfxzjMHkqC9HdPH7AF",
  "key21": "51jAae8cCzwMVgadRWo2SRM4ritu1bVEHzVzktozKDWx6dQuiMiNQvwRY8bQNsgHASYDWjSwuHo1KyxzMvGFTq82",
  "key22": "WDBynAftM4FpwWMPN7BSBfeoTtMvPacxAPTu76JCtbsHCo5knrgnnnaCrfrrD9BRHUzsWP9CBhex3XPLSy2KbDK",
  "key23": "5drJqq2ohwztDCXzint5mAapNkbmWoxcA3VTeGwTLLmpnayZhAEsmy2cYvTxxHGZ5dgY4YpiEqFy1ryYq4cFF2Qo",
  "key24": "3PJkTttsZua8Rb7bVAv2kPQu2sBqwcnPUKkF78KVAHQ8R731rWzr7acQzYD9oDkwWdWDpaYqeg2knfX4BPzQbWFY",
  "key25": "kdtdANgjRm63wwR3qW8prMG3ZaWTrQ9jdTrnjtpF1Nv6tsB9qmz9Gva1aEBwjo63NYBJv7H7s5JPhzEiBCNmuVY",
  "key26": "5jLL7kmuNrpPYRYiQkJxQb58xYiaQvXhgfxQLK5QboBgbontAxoHHLBoa5UGWY9tpV3i2f1eEBDCsMfrx8zZdknR",
  "key27": "5HEbiK6p8E3iczabx11ENc4ufFPzR9Zs7DMmFByivB8HofuCzxuxR1np52dytwEXsXAn5mmSgRqTUsxpRvB2dTtK",
  "key28": "xoKFeRskr6qirhPzMBHnqdiAeiFxdxULXF1AeTg3fZ43XcfxaidEkkP88JZzEiQ3XwtPWTpD28ZFTN4MhCnMBdq",
  "key29": "2FoCxWmpafLghDnTau4q9HjmBSXAbouC2ev4pWdpno15a1QsB6smgAeGrdTvcT6SvRCpmxUhGdxz2dEsiZKqrs6U",
  "key30": "4BVGwxwPhYo46bD9fm4btXtSQaJqGbgDRYfQZiMkx5mA8u9q5xL2RqzMAs3mu1ip1E2uPuNoPuYSf4ySKwN5Pkqi",
  "key31": "2mBXZPmKPqP1ZC5Xsc6vNaCz2Rq186kUjhjpk439BB7emKCZUmHWYn1unK96fukawbG91MSbAZHqp7BpzWkZmwTr",
  "key32": "UtQADwZaYNtSDptX9bcH1MdJtFdBF8zt8CvythMqvb6YudXJQhbRdBJ5ePMrSw66AyfCTxysDg1ZFN2FWzcuBVS",
  "key33": "2otWndaDatb2kBnPbgLeUCx4e81xHyirQ9UbWs7TkJmvfz1f8mFHb2kutj6Nh7DYqas1pFMAReEZ6MQ45hXaB1yR",
  "key34": "5vMjgyxkuaivcaWEvcv7zzKfAcS8wqWvKBjoW55KYaew3NkzsmaqynvQ3aXgg2pwmjm562KwdHKJv5qbQnUdwnRz",
  "key35": "2YJLzzzL8LhZScZxaW9w8AicfYRB7PWQM1ajPcmcdzDJYgb4wfHA1BLfADQhneHVvwBkZy6WHMBRjBrek1ayLqJp",
  "key36": "5f5o2i3qzCyeLdCbR1YgQEQdhore78CULV3TjHmHjcvdvUzNfcFDofSMzAepz7G3ouWSiMQRyQz3NsYprUuiSUAD",
  "key37": "V9kYAjH5nRMrLae6UFPC4r2s5oyK7XCd6AwuwZLjn66jA5sCJmM71XEiHZ856Pejh34PeATU8bvQ4ZpzNacvGhY",
  "key38": "3Y7iQP48ngPPGAiPhW9kviDEncPpmGiCuqSdZrpSafAAPmS18Uute92ebZKYAipbGyuqSCKNJAsH6yrMtV8r6CrV",
  "key39": "4xGUVfRfHeo2PZVK1zFmzYDrSZAaMxtDvxXbt3yGwei2Z4yWaXjN3EgY2XJ2QUspqhYK6D9cx2tU7Ce6sNDbJSgW"
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
