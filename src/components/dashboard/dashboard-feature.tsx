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
    "2rLJtUtzJqrs62oLJzg3325CC76FYuDobjj96RR6CVfDa8WMKjk8MHcCigPKayqMoFFB7gXuQaMjckzHqAA6b66L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYrjbmpaJGseqPMPM6o9n7QJhhgm9PdJTWMivjusmCZpEZbznQZ9X1jp8vhzdjxdnhy83mpCUk5yDtYHixb2BRR",
  "key1": "3dNXYPj7YhuaJioaZYsTGCrHXy8hLnD6DadspsHFZ2U96yLCm9UTcTGUiTohtLaEGzWzWegX2icjr47hzRWuPsYG",
  "key2": "3kQWyEWyw7qSjhkBNj1mQ5N6VyTPsAR9gXPykDRp2dXKpsnrZdeB9CbsN5yGVciWsEhn5TSGy5aFfaYJcd2NERnS",
  "key3": "37P268YctFeHmLPjdapmwtUWCk95G3VZwodBtgWD1UjaUQuVHH1SrYb2Ypnfv7S8uumZ2FrU4jUngRzeh6CZCmWH",
  "key4": "NfTNx4obkTfrN9kpDFFS3KnHM6wKjUEZ5S4YDrqcWTqYbaUD1ew58sXGbw456hhQQzL9VGRCXsRCmGada1bV2iX",
  "key5": "5AsqPYMMJypEZjj3Qw6djrXoeEfNy4B2c9XqdjhCtWirM57QwboiGLE5uqdEEvRGm1okEUbAfCFxMPNPC2HcgZxi",
  "key6": "MEMyYi9xW4jDRQEQraLcAAT294pRDWf75asx2BNmDqAA9rjLAnY7LcpSDBv4cuN4eKpanmswAs8S6kDmfsVtYxT",
  "key7": "353yXvvwjU14yoK17FdDKodKNwTSxBiqjJr2raihz8fQ8RYwtZjFh1bPSCkDZLQh5YvLpj27QWWyVkzV5MjrshND",
  "key8": "26ZoEGx2Sa8yDAc7diEK7t1J4vDx6N2qtkEac1ZXAtcrCXZoQ5YoZi5p86WPb1eEH8siTuVfmjuZaesvTEBbX2Za",
  "key9": "5U7NJHqBaGxDsgHS4FeEp6AMW5sfDazouWffqptV12xHtghVEVutZZKJWLmccZHnbzFx2cWBmxUykc9LSzdGY2pf",
  "key10": "DyfcXHVHc7dS4BhbtC4fDd3z81MrYSynwBnYyT2FrrQwRDkhrDW3GUekXxgh281tPtAU2zzMJKcjiKtWcX6AoMK",
  "key11": "5q4GAERyPUGF7jyBF9u5NmCsDdCJxmLxSWAfMBi31U3uFmVkp2crmdLNHgc2jFXhcENLHZD5NiiR4N3VYg6sposd",
  "key12": "5yuTsWpq1WFpDzpU7VptTzYjBnfsMfnf8qZsifv533XnpAqv5Xtuuv7CRWvSKJpUdZk3TMRkNkvyC5CZLXGKW3xT",
  "key13": "uCStBhAbNQpvKntfarQMsjjRYmg3UagvUAZvqyFLeQyX8JcyhW1FivSqRpp6t3jQoREjyhTCjSXapJZT8bmad7v",
  "key14": "2DFmvurAi8JL7MoXitamDEJ33or2d3TUv18dErEsC66smoh9RD7gzZYscVgradxeHtUKN62qWJA5GqKzqtZygByK",
  "key15": "iJ5g2jsPWVnT8X7VH3WjuDV6NHQg83q5LsYhyxUsmR5kFtx7u3QsigKJY4Qi9E16mBTVkgrVMbPbGDLvxBA8Cij",
  "key16": "2gGKjrBK55rC5u9iTNG7Njm96inz8xbUuFnCddf8iuugxHVNCmHv39QAvQzB6gVvjoMoqUYDiNj1ivRrgQznbhHL",
  "key17": "3T84L2pMCvRJjSfuKeF4nUHgoHJGo9K5DwcQo1UTbHHuUkDsvJA3N22hJLmFAgDVe4rB2E7nUqStwyVV87aaLtFY",
  "key18": "2zLc4ZDEeWLQkBJHMxjZ2qTscV35WtKHt6cQ5Mq5yHdfERf3zieGjKDypFAvWkYFcdcZKyzJuZPLpSRVbitt3mBt",
  "key19": "4MT55xKRJEmfMbH6yPu4JVyPSZ2TTMwBGrJv4i6a5i2NLmkgsX474Ct9kRTPFoGTTpEJxkwVzNZFshg5jQ1W5Jsw",
  "key20": "HSuspSd3hKhc8fkpgaY6KCYRJ8yeYocxWMRiQPE3iHhPq4kBaiQMn75VfcZYJQKjuAn7kDhdMyTmt3Hvea7GLQ9",
  "key21": "3BDwKBwoD9U6UyxKHW8w7pGPF2A1rAp9qmszcsX8r3ttca4v6q4bA4eJNkBxt1RTUNWGA2dW4jEeQsPq1JXyBSMP",
  "key22": "2e7TygsvBqWNf3VZgNHsZwscbfAbMHGv79Js2i3qjvQSf6EKAsfBQxxkYPC5sYHmQ27XT3Xio9MPMRdxp6ae92CR",
  "key23": "27qqLsGofBRsbD3vcwQD47g7dAnep3yixfVLoRwkv4WiX637H6BXRmz8uzUhKhp1fTP5FLUrPfa8CKPPUuSRGDop",
  "key24": "62s9cgbeswQAVDf4SYmdgh1jzrsAsH3r8yaKwBwSZPwiHrumAtE6tLjos8N3RkuDGKtRxBHnvVnbwZL21a5GbB45",
  "key25": "3CnPLAMW9VAAHnZpboNWCPhtrzNMUWtU8ygLMdwRp1R6qTUrG9tdhFBNrgp6R3cTv2xFCuVcVGZYoS5zTRLHDcVg",
  "key26": "474rpTRMQozp9cAQiAhoRgg17rchBV88baiCk4gT3Sg3dd3VVSQHcxGAobJiPRHTrjuLVJ95bsKpPrMFtNukr1ub",
  "key27": "d9j56L8iabHN2YDFatroM8T9MFiuzqmqhBhiJwyP1YNDaXidpSmHjwqswC7wDkZ5C3dyftpeaxreCeWPiJJ5Fvj",
  "key28": "3TbCgef8ewwxcKXp81MWF8JqaCqQYuWm4Sdy928czYvRcs8K96v4dVRLW9DiBhrwJzJSz5GztRw6GMxSDm8VHSZE",
  "key29": "VPHFtYtfrHQcwwenfnH3CwEsCERipFvV9oFPyB7AviemRvPdnov5DxnCGCpxwcoJknpQZvAt25Q5GnhHjXugdU8",
  "key30": "5gAtUDLYqzjFmAwprBz5TRYJYXbgcwCKnGbpA1gHUUUcEgivutDK1ENopEed6DxiAEZQTSWswPz5wgyCszWV7DTP",
  "key31": "2p4nHLknhxYt6ajFadbVx5g8YbXAoVrNwK5C1iQZLimfSLmLw4FuiaLVs7VZ5d3YfXrYeS6sxUB4BhEnuKF3zWsD",
  "key32": "5EVBZ891hm2AhVeo9fiLBLFDrKPvxPqFZidba8L59NvMnVh9RkWPgdfku6v3qEXdCYkaWQFvzqLyGfFfJSLffncL",
  "key33": "57P6iyBbx8miQWrYVYQiDWrn3EMk6yUTp31mCTy8ed3ih6AHNTCu6xpPc7NactHPGHKEX7denHAmRT7qWAbWXm6R",
  "key34": "3JRMRUB435DJm6Tgun4E7SFksEjW8CpG3Ydk1rAmrKPD66Z4s7YeW5g2XmRyu5QocAuJfzWQTrCHdV6YWrVK9EKd",
  "key35": "3aFKNDPf9LZcrmtLjC7mL7Sx1w4FH2VPaGkbNghPoZvRK3yYA5UsXTLvkJYZPChgdzRUHkKEeDuPFYp5NKbRr915",
  "key36": "4M2YAZH1ZF7bqAZT71yz5WLT2neRpWbztSzMcQ4U18c1xgCoywuoxvxWMANYVADTBKVo7Ud32ootdSHp4WB97ihH",
  "key37": "2AyFG7i5uzEW9sskhCpcxcJ17xNncjN8ob8yHADupVDBjdZBiamZAnr4STGUaAqW6ougHUB9ShfBWdRX13woCYjd",
  "key38": "3tsWXiXMdqobeqAciF8SDsMkdsjmzTrrCqo91Wk5JtZjhQwHrUMdZ9xRjUpSf51K8tTTu2cxafkoaFXS8svTNwKf",
  "key39": "5vQRnxx2V8JJfjMJGD6GyUAq1xpLqHWqfMd6rgtKRRXqgraLbvnruXkcEZBppE1gsXS9VtTQPaJj3T2yt8Y1pgWS",
  "key40": "2AghmgPTUyVQL9skcvr84S3NuJFMj12wPkJSgHT9Nthqrd7UBapLaozXjP8aioX1vGdWWad9S8x3sjuR5ontxy2k",
  "key41": "dn43MvkKSsUsRvpHkf9tQWAeFb1arpephw1xUKFcJL4pSnv9D1jSzDzr86YFnFufq46m59cLnCLxsEPFbFKS1Tj",
  "key42": "4Pk48bjAG2Y5zzv76vrjsuabfKQ9u6WUR18GGuSnTcp92DdLQ4Wbt9C4aTCKVgKFgsQGWHPSJER9wRVw3CkobB9R",
  "key43": "5jbPZmk2WkoByV2w91skvn1xDS2TVWdZZaXBkvsZBgnEFqf1fNsBygUykK87djfcbjY69HiTZnVAyC3LRaYtdxgM"
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
