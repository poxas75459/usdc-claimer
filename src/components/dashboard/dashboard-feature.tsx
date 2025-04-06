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
    "63WVoBmdnyz2seZuy7KDkYbRa1Syj5wZma7kQa32mUWP1NfCU7h3VtsWL9SEzJExxwQ6vHc74fBwfUHdwhaC8hos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YasREAAvwbp3PhpRsKanC4D37rpP4FmmvV6JxemGGLh7Pd13Wpygp5LHqZYxxJVA6Aib12sEWutj3cn4jn53vrs",
  "key1": "3CsuYq6Tu229nTXzesABjoyZLa9d8d4SUdHzZEXHk11H4fjiRcwBNxqQV9GzvtMW14TYE7B3KdfBV3VMHGW7cXzQ",
  "key2": "3ecZxRn5x7eKbeDtqm4tvLq57fX7Yips2MmS9cShxyUyrbCvSQqHsGYawyaspWfSaCzM7dL2dhWkeRQqY411YeJT",
  "key3": "4EtWMdRN1JRirgTQ5dHJgsgHTFNrU5vFGiTSQgPb1Lq3gEqMzsQJUqNJ9Am2MSs6JRgdDsjXG9qe2gax7cnfRbkv",
  "key4": "UMXGgSwWV9yqGnQoPWmRLxCVYwPchoaw55Ww4FkQUHTuKYYDWbXzB4GhbDDw2tseAbSVa2CVpc4UyfLUxgJQRDg",
  "key5": "481vuapC56GFUk3K6N9KHJxWYan2jrww8rNA1XiLbYgAtc8xeZhcx9GUjfH5cNABzhEASPG1oXTAGzSrfpfwgZAC",
  "key6": "2FV8wYLTi7F8XcZJXQiHx41ttcaM5UPZbbQy5swwUGEPN3zW8hHAXJKfJjjns1xmx3897C5TSubTQJ2pT4DwTA6R",
  "key7": "3Lqa7xGBKzcvrVRWGYoT77NXAPrzVDN4PJwJpAn6etihJ2YYEC36BPUzVGtnmWsaGYZSYLZugpqbgTMpAuTPTY9S",
  "key8": "3V8xTPWTgTJRW3r4aKqPHv51EvwXbzmY5W8AcP8xfZ62YYqboZvh37SeTGzdJomKiJ2G8EhwsqQSRT7ezV6y5N8j",
  "key9": "46GVRZ4yxvfGJNLa7tvuWHD9Dn768m4uuQVFDRXoLAYrTAGZPqhfhVv6w9J35AJy3sy8uEeGjrB6wLT2zEQi2qds",
  "key10": "1cwpGe4PfHBUV4ACDZSB3tCGGpJ9EuhRxqsBWa2yuKgw39yJ8W1ExigfkoazTLB9Y85ihvwFsG2h4joJ6zApdTS",
  "key11": "BmETJFHiV6xEFAkmTj6rQGW7FgT5qaDQWn46qHM1XH3k9wNz7iUYrDBqHEFLe8tSVNzQt1ES5HkAV6mtvPzHQiS",
  "key12": "3qzL36DpW5dRxG3yh779NFxEgcQtVS4S4J9sKBn3hA9WHPC8ohkGeCE2AUug47q66JfaWojvpDQ62CJhemaTcX1D",
  "key13": "4246e2q9DntRgUJRKMhmZwcikuFPthk3Wu7yfjqmJcE2oo1x1MdnugEeoYHAprsJ8pnV5VrVYSW21x6KcGw5feNW",
  "key14": "2F3K7PVATwrL76Q5yMt63FmeSLFed1hTY6zoacZ8fAm1qugypdEpnPWKAUuAFf8SSsAkK13XNBpRWy47TmjBp2E5",
  "key15": "5NayL1jkzFgYek75UD2SrzLE5hixeMueprtJt7Evtj3Q9uAEe6aHeWfNKv9syKijFZ71AEA8uKFsTvqaMvktBQKC",
  "key16": "41FwopD2EuFJCrcB36mBdAe7nzZUSfRjiiJJMFyK9LTa2wZ45hrj7oLdLtQ9ndk7dh2d2MQEnVFLKYCnEYwbrrMb",
  "key17": "2h2nEu89urxE91U1SLCQuAUjixBPEVWYVUoi6qAFc53GAkZCnMvHMnYHTFaaWDT7CPwrF1MsbHbhYccKtALxBsP9",
  "key18": "5VuB3nQpAqrPSHt2cgo6Rs6Tb9nMbSxCqM3UBp3dDtc6B2RThGH8mgYx9ZEKX6mUn2KWnLfmwBGjyACFtibkbpE",
  "key19": "2ktPCGXV82X491dfqDQeEhNm8xq1YpxuUVRR8JEy4D6z6Rkn2Qqs4VJ4uknKnwLmAqRztfh7DE8YhefwbTQfUKYn",
  "key20": "3Jjz5UwLcLZkH4ufDUVfUbz2NZtZutSNsMZ4Wsjh2ymyTWVd4p4upvrP6J2F1NpNbU4LKu4FKte2HRtrQ7LmEnZQ",
  "key21": "5CFouWch7zeLpULy3ZNwkJwsvBSLmA43ude9JmWZNMUa8NHdNDFGr6FrciM2Ws4qSzkD1W8H5d5gqymtqBo9birw",
  "key22": "aCuB8t2dMEuwxmsGBn4HPmHQvqfmhd6GMNQTfSHAH62YLCwXhB2hKQV6Gfh4UUs7MmPs4zvBYMcxpmsR97ccGpk",
  "key23": "3sT5AeHV6xHXquX9wS9rT1sHK22B2uFh5YwiBtaGsE1vhM4nxcXsYh98fh7S435MKzyPmne4tJncCLw8s9NT8RZD",
  "key24": "PmjdYEkMtJQ2XxfNMLA5XSxfGowdhPfXydawbNvin9gEAqW9H4XPpJFoMGeEXteix3MNBsjheyjMgpymgTb7R7w",
  "key25": "3XFWrMQsWAkJDU4pUTakxfsM6hTGuHEQd5f7qaJsepcjeK4JyunA6QCgJBgj6uvg7XcEXincfxcrhJExxJSWpLKC",
  "key26": "45E7hqzca8a3LwhxsCZmLCmr72fVT28tyBPcSodVG7NjN7eDNh8v13RuJjbHe5w8NAB1JhFFD8VMAR1ZQGL66Aav",
  "key27": "26rf3RmozufQz6wuALRnNvFunp93S7hGNJaFWX9kjVfLDie9Wt8919TjXFjhSHDnVh8h5QtqH6PPXf8so8LznSG1",
  "key28": "5qnFDKMrQjogFoTdrm6CuhWwiqYBdMnZ111drangAqEKVNQowW1nsVhNamFSSpxirkHQvcJ4RVLCcN9LdU2pifs6",
  "key29": "3NHToYHFfqbCyqkodWG2bRvG2M5yzJzbSGYRijPz3dNn9iQjGDepJCaX2aup4ZPRqUPBBgTzvE4zjkqCV55NV2CY",
  "key30": "wDusE6EzYwdVEp399vqAPzxeZjY2ai4ZVM7NH1pqUGEDUQfi9hp3ea4P9J7LJvMSYa11EEt1rR9Fzspt1zHWBdp",
  "key31": "22zZgbDoDEjt6RgDB49Vi4Yg82MiZmuRhwFhpygn2guEYEFnaMbLtyMdheqQhBnjEkMbueBun7Wjg3khmMiiNe1y",
  "key32": "3PbDt9uT4VedqtxX66s16Tz6iK3ZgJFb88sXXqaGMGhqDcyBTfowy6AifRG82RS8SvZBnuU8Zt4BugkEW2TauAFJ",
  "key33": "5PzUx7vayvhPpokpvLv5cE2RPWWdsyNoPVw6ZJEDgzJwRYqcKJ2Xy9EAVdMBumST4z9LYmFKrTD3xERrDgC1WwpY",
  "key34": "3PH45vRmFMkhVXTbbnxT6zwFxUtaSZppfUuy3Qmhyp3AkjnkcyoabNe1X6Ufn1aARtz4Yd3xDNKmdEqs1dqWLtnd",
  "key35": "5AMpx1wfBbEQePkgZpBL3XATBgQTALNFmvH4QmzBWP9oN8pPCLyYtoedMC2hJZB3ZntQdaBPHxH6UWhizo7kEeXP",
  "key36": "3MxVrscxtMCdC3b9w63BdX1qQ1SnByKc5P9f4DtZ1T2goRh1xRqiCJCcdnzyrT7YAjY4vVbtcEKDXAAoE2hyN49D",
  "key37": "sMN7SsA2eLVLv9EiANt3wwwwee64G4fP6RrDkWPg6eehyFCys2n2wLtGTavskoNSPxfWrXoTGbD2bHe5HXMRD6c",
  "key38": "6uzZk9BiZ9tR5ewdLgd9QeoW3QE4KgAibv872MUa2Z2yWKt8TjpEZx5PfikLPvU1b8kPps489J6RWSiqrNk6hz7"
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
