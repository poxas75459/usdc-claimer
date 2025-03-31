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
    "2fkYYZWZdx5Rz3d2Boh9AkWuSk9xBjvPc5JWveGpr1prfazvUFdGg2Bnu1xZSoESExQVqGxHzbMWVAwBPzru9rEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDXPDkrqVKdv6PbZikZDQ9FysbeB3VaPhaeKccXj7uU7WXFxargZ729iX8yQFYDCSCWFsv6HenFdGEXPtXJgrq6",
  "key1": "3Zgdcx22UkkXjbdyL2wnCir3oQ1hk5HixEhHe1swcqB2xkodgKyYmBJLdMmr3PrH163e393fXNm6u5cuoKKaTL58",
  "key2": "4NjU6HuhtwdXPWdMXfDqcruoAwn8orw2CHECyaqdH4gRKejvnMydKD8chQ6eEUbBinAfdqek2Z7khDezBo2m1d73",
  "key3": "5qCumrf26rN4JLfaH1Bz8gcFgt5gsS9Ah64GTAwY8WM7U7EieWY7dP5zygfLDcb9QmwVfzDoMBs3RG1EAsUoFySX",
  "key4": "mdrsvVfajMJ4TDa1J5FAg8rCtx8p9WSvy6vuY6JH63Gc6RzuX3BCYjafqwe65L9i5WbXN95nUjey8MWpqCS4H2w",
  "key5": "4Aa48yeq9dbdx84wS5X2L4Zw8LtoAtTiN6BPT4HV9md29jMgVWJteMYQpyB5Apmd8Kh6SiXWUreLQZeXiFEfHJrQ",
  "key6": "571eoD5rXhzRJhg2FGFu92Mh5JAVNNpYDaFLKboLc8CKNwZcrYDCXLWr62X2yhXVddyJR6R95n18TK42XJT6T53z",
  "key7": "NxZhEbmsMHruyeYXVXx1ic2TnZ223NQKggkXhtZLRs1S2NyCSKfgJWKmtPTxEshEhXLzdKmDnVBXoRgyAgx8FFN",
  "key8": "4rA8CopBfjhSBtcVGNXgaYSYX4x2RRDZUzZLsx29XtN7iRfMataStuk1cxfb7Gok3YToedP1kX8G4NbphdiAz1eb",
  "key9": "4k2UfqicerTehEgiCNmjXPpFYv1VzF5L4WxwQAbiTQttDqenRzuiwgLzehcVHr5wqrBKxpYUiHrnjTubLjghpKq7",
  "key10": "3rNiFuYvks4ThYc5SKnm62aEQvkrJePmxFic6UdzQL5edYV8zc9LKQ34uw3rvD823Vsu8QVPV8yrMLBVkLhc4vzz",
  "key11": "2TP7Smahs52ag4fDcLhJMwExrwiNqXgFbEmzCmr1qLBM6tgZpez88vCesUAyhmPmTyq4YtZ9FGjpEweTwd1PoSm1",
  "key12": "4tD1UFKfgU4PgDbfryBPn3XotkxEi8ciLGthQtKqVL2LLQF67KLJkPXMG4vL4QdfRVEtL7VALJRao4Yd1j5RbP7r",
  "key13": "Qh97rehbNRivADW9Kqq6Mh6jaVUo2pa2JqFQPk6o2U3hVJD62X2inNRrFcddkMEzTXBPfBSHn92ZTgqfdXdGQQs",
  "key14": "5dGhcR86zttBN6ymS6okbxbaKfhrANpA78DvLEtTn3m8RcPKA7TwrCdUroPUzSStCNEjTtyd1fdzvjPvooFPjEq6",
  "key15": "4gSyhDUcNhrDeZYhLoqSJKdKiosV7JsttWu8XYUvkcUapcnmikWULRQZri5dYg1Vr7YjHBH5e7gXsvLMkT8sFomA",
  "key16": "4kafBTdgCu8K27FL2yA2EjMMS48eSjoFGPk6HYXcnDSSmMiuahwLnCWpvNGTedn8SWV2JvvDZZyEHXwPTRM8Z5HL",
  "key17": "RLGAHgm1LNZ8huAjgsU1aQoXgEcXTp43NbFJTz61QQfi5FxkhAHc2f59CYLE89TBQ1d1VZnFPG3mJPanvdWK7g7",
  "key18": "27JKZxhrzrQ9NHQNTcj9disK7kdnvJyD6kWwoX8YVY7jVU27pLfzWZTfVUizjKuku83rkYDA9kCywBMCXqm3rzcw",
  "key19": "3AGGtJwZtwRs9FDeLL5LXaNZk8HQjFhGa9UjefVEcbLngviSErJxxnhzL1QuUr78fDvVR74zRKzvkWUizCaTUeAi",
  "key20": "3j4FewNyqd8DQ7m7KoHQeiKnfLMqMcT1g3qXiuuj56dgUQ72PwjnPWYCiPU7HAEuvPFrDhKosw2Hs56VEsgUrEND",
  "key21": "3tKQXjULGGpVJQHQ5nvBNeTzo3LyiGRqAZCdGraPPjirgK7CnNEuYKiWRHgyYqVUxLYtnnGGf955uvxe5ZXki9ea",
  "key22": "3Aw4UJ4afFCs2gyBQnhME8tgdaJdJzB4pnUeY8ZLzVaXuSq4vGLrbuifovQL3TJ9F8JWprzkwvVNSdgH2YdbwnbV",
  "key23": "4kcR5NTa1SdZjVKfQLoGA47pD1WpZijjVsyLWBndU9UKGr9eUo6qwL4QsdkMHVQD83ygC1mpkGQQaQyfMzFMYpJm",
  "key24": "3MbNg8bCnf6Wmfpd7xLn5oBwA1cVspSQg2Gjmf72tFuNK8AnjgXhkVsVVyHBd8JJF6Y4HfAYErjsJgeXWESwJe2W",
  "key25": "CFp1kabvHCKubWzNHudRHfb65e28CXux9geBNXEXV4kBzAo2MdvSBiW1iWhpw7tsMHLgTdBnZSjvSwgbforD8Hm",
  "key26": "5gXdNjdxXHGD4U6TR7n5mrRfBHDea2K7J33vtGAR6j8oQmqo5pM5oeCVB2xCaV5V5BdgoXBFhChLiCFLpMsKCCNA",
  "key27": "2Xggip8hhY2b9FMiEbN2baFr5sWZLWAS1pRKdkb1m5xHUXS7q1LHRH4RTQfA6tmkQqhhSxzVYy3SefNVNFZ9Kns4",
  "key28": "4KcdPo2bpcynriXTRvN6ujpVMSCfLqCXejjyjoKqbYDa7zGC2AVjYG2C8F5DGJAf6pR5FV8AgHxQ1DPvWrtceSy3",
  "key29": "4vPCAW6hkF4cwEFEggpFzuzns33u8HPYRjA8mHQLK5iN9kWLntyVh7usruX7qGPwr2s5edZpVhtZxhVDkY7GVxtY",
  "key30": "bT58aYhQceAkxT8EgEguf8t1qVi8Py1yQRD6quGj14iF2Lzfqkxiqr4qrmjHveBTF24GuUYGurUspmJt6Pj9sJd",
  "key31": "5HEknoquZzjycLKmTQ2Jytck6mYiEYK3pKxFmhawRLirUwxJPAa37v8Q4djBuXBbBb7aDJHusgxL4MX7WgfAuSM5",
  "key32": "4QeofWsGodExUVAW2eVPVs4T7sHHnKsFWQZwXFiSBzPYSTHWZ5MufGGCMyTHNkfF9SyKKi8CJepnQERnj3YwFHZV",
  "key33": "56LonLCbUrvYcbbCEKe6xXtZjCXJgY2aQqWHhYQJFHXZfWdkE7xDdbRmVur6Y8CGESQ5qvhWAQZuvaJBA6bH6VSE",
  "key34": "5rcsRVgN7D4JE3eTrrQjdYYruPce1PUkTrtcMqviFDYkZshgCXHcvVi9fVjbY8zt2xER1g4nhTGJjcmaMeqfMYu6",
  "key35": "3vz8Bj4ZFQpMkJe4iRwimqrsgSzrUfoXivQw8XKns4KvoP7YPKAe7xS831LBknBLqR88sd1WRj5ryueMQnXCPAiF",
  "key36": "2M2rwkWxF3ds29yKquL4LgFrR3rnGU1MPLMTj64GDpQMdtMfJwhRpXVoN3CyVyi5mA9nBBFUbaF7iDxBoWg2VtB2",
  "key37": "2Bje8qcPKHyqkTFhHaRdayEPcJGFyS6HRRQgBQphoJ47eBhEWDoVhoznneRb9P9fw53dj7ycBEBDRp1ZGtuxry2u",
  "key38": "5RrjyASmyGyWqdASRmQQtnCi7a3WnhqKP9jJUtM6vTuG6YoAW5RMG12rEjDriXjAMG3xSTQuRvhHphYTyPojtzpH",
  "key39": "58SQCrhTgWnDZvRDGgv3HZ24s4AyfFVNZpqhuBpDW2Hr7ScWcGjoELy4xDUfw4QMx8sJLnzHASA4hjSPersUNNcE",
  "key40": "5UKKvZgYXuhxnExbh86tx5ujK34ffPZdtu1hC6h3zwhJzFSCGwJbjz945CY2YFGQe2jiDFkhgc5nWeRVDy8TbWVo",
  "key41": "XLazgh7ZXizoWkbhwCTkk46aiBsr7WS9BPCEYmdtWRukMdqvZfcMCF8KynddkPgVaGxpdBWrqziU3LCnzwHCouA"
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
