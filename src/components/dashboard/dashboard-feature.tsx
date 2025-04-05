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
    "kr1GLXVpTEQjMPG9nu47nXkQUPqZh3HVRLLsBPadHqtGFmAA5idznqVA9xNs3R71aoX7iJCpyH4AHeBWxiZP1h1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLinzQrTczJ4rDyjnP3ZSdtHcUK1oYqXN8uPNj66hPfsfg8Kjrzyuj26KnEeGrMxFEiv9QgSZqZudnkjNBG3JwQ",
  "key1": "ARZZhRpGZ66d6oVsRtjRouprHhBoqBJrm8pNiQ6acsvYwaHZaz73K5s1Gr6NRx2Tn3ziSQiDPKaeBh5pEZs3GDd",
  "key2": "2U4goSiheLwVJYscArTKSBbBkEtL8BdEtwuYZim124kEGkwYZHNGnDQ9RMxzYfTZvDuKiUJN2417GiT4h7PuwW7L",
  "key3": "4M33MH8bKEA8EUV5Mv1kZ1NWtXud8s3NyxjiwhM5f9g1yz4f8XQL2oAhDv2VSLgyuGDdo2w5xU7oGiGyYHgRBLfw",
  "key4": "3wLUpgFt3aMDz3Zo1Ysx2j8kFjAhyuhyZsbGSMTJgJ6fKFVhqYfu8moVAR5qRn1KPen17bj3cJvF7Z9LhGWU8SUz",
  "key5": "5dyaYiuRBfHSTf91ky2HdpDQyiFQCAPkGPot8hx9ToZSgBBYXjrJL2WfH7yLQ2DutyAi48LbeVqvkqjpkDQDW71G",
  "key6": "3UvCpzGUfBA2NZjrxp1pjh6TQnPXEXjYqLnykdoSnsBGYwz8XFD6EeStA3yBPyRXAdFpQBwefeWEL6VWVgaEUk4T",
  "key7": "FyYdAAtG2DbWHzNLqYNkXPS4THKXjSZ7iuSnEGfk12yXXEVZpXoknLAYKbA9f2M6fDJE8Gt7sLUMtv7sQtH89aN",
  "key8": "5QxV9oprTsgV7ZnBxHv4SMiMMbVmbV2TqqUtzbP4X6FNDLxVVQvFfzZ5utTc89TG519ckGBHpHCfbabB392E62iV",
  "key9": "5jKyF8dZDFpTibC4CoD1je2CtU9mhf7khywsQiT37fXJ6Hjhd2MHkZ6iPWrySVpv4i1e252rDmjB7vKAcuf7oDiQ",
  "key10": "89TmdP8zGSeXhB9fYzU25S9q9etpT84MTH6rWeriwUfK9RXYYHpj29uZLJ4M95KSkadjed6Khub45RqSG7KAczK",
  "key11": "4RQ4rWQKBz85yth4W2E3cyaNy3kr7PnbKznLtuqQGQ7HUZsjf31tTxoLe6xZ2h4HY5qZBy3omMSWNmB3goAwjWXo",
  "key12": "21kUtzcX5Cua1P94brMYE84ZQoohNdmK7SX5jaRwY5yzxJNJ6dLse4JmunHiAHMmWdmaBHEW7cvdtGTM26CLcps2",
  "key13": "5kpFhNdkCHuSDohhUAgLeeWkeJ8nCREhuQENCSUeRdJrj2BqBz5zemDZEys1F4HvDvh5TZACiFiURYd89xwHxNHo",
  "key14": "2ZJJFbvCKSG2o41RpL7uoDkPqerusziy8FpPCBKmyisTJdgTy44e7Qf13DXeWea8ddaPtPrrF68jywPhfkKkn7Je",
  "key15": "G9UC6rLjbYku4R7VUfrWA4E8peSBTekSkNxvfmUCF5AWtF3qm9vq1LRVGHb3HLA418D2LDungj2T4NsiR9eDkRe",
  "key16": "51qcWQs5s5vrRMPoD7a6D4dvkGWQYCfCKExsV77F8uyS53JFRb74fDoRk5aNcDYv38ADCPCGn9yh2gpBGxccyHH6",
  "key17": "4mmE6zfALALHu885kiJWxBxQya5mMWtCWFwoBFDQm1VS3hMFDyakujjPP1Vkp2CRmGrPXVDmpGSm4RdRLjPJchya",
  "key18": "2QGn58qQghAc18TnyGS2AZ67bCbwSAwhwmVCdZH9QJVkCJiTv18cdR2N4FTrax2zAb5XrNFTRapTquY1gAqSRjE7",
  "key19": "25ZVU1pi4VhUkSpUnda6QHRdFcPEc3U4ZWVUXEKU8aRPJwWJUj9JbyamYrSFtRaDBzVxTodAqQd1aLoeMx1E8TW1",
  "key20": "2mLgtEXAeH7nj7nZnti8Ut5rECS1h6ndmQDGFEkn9rV3LzCiUQJTxqxAzJJVCYMGDWJFcKbXzG7bSn2ZVFr6nYc1",
  "key21": "39XBiVHAgMJKbeMws3d4ktfPa9Q7V9MCDN5vMmy7dP6HcWo94tj2sEXkrb9jS6DErB5R4QYLRAefRb4EYYk2yoMV",
  "key22": "3mhpq34Hn3rddcvEjogFgh6aAxNhZQdNWENeQJ5Tg8x2WJeNoua5EXQNBB17enVyUVLuqoHsofxgpDcqyRfiEfPQ",
  "key23": "4whbfkonP8bxbZaghSJTRQShntQ51o4j3M7CyxEMHfhS5S79qBVVAmJ4MybDJh7WhBJZuGbheuvxfgCiww9ykGDy",
  "key24": "2ypJF5XE47XJW4QRcNMH1wdWMh7FCfc8JZFo2J9N757wfTVqi8XTCuyyZRUvd4qogYZsdpdLjucEFrNF6kL91mpY",
  "key25": "4KHckUjwfCvx3ovifh9U1z7t9nfAHAboEwHSYQnRF5kcu2X6b2yy5jcg7YVHy6RPgtdJ6UxaJ8t5YE6uWNjMJdmy",
  "key26": "3s1zZJUL6Lq2NAJTqm9cFHYCpRK6K4xMzL8DFpa3vWPRc9yMR3LTRo7r3CPLzBPUMWnu8x264RvAwyALVWaSwuGN",
  "key27": "4UwLcTwWb7sS4qUGuhrszufr12EJXjZVrbo96mHcxygh3vYnnooo6ZhN5x96q5tKuCeuBiZejyz1xb2VyJnhzMqJ",
  "key28": "ZZv41TwmXKgrc1XfoWCQhshbDuA4dqHfHJZgRBUh3urGQ8cZh6qDosn65T9wHF3m2Q92CA985XfVCKkYBb7KTqb",
  "key29": "3asFHActmCyXGse3hdzxWSgvTLeFe43hzaMeLhkSrDdusXDRiaCCUGUa41AZeDdR5UiAPE7iw9KfiZs1o6vmzag",
  "key30": "cC1g5Cj49mw2tNt2C3ThwxU1Qf3urdbwQYWvfpksZ48AczQ5i5M4TQ36L1xP441TftnRgVmdNRmWRjeJgiCn3Dm",
  "key31": "YkL9n5M5fijsLL8PjaK7hkCeft6sJMtAjUTBkmagk3Bq5agczdFAMLYcpheBnDyKD7XtEanZddBSSxDEe7nFMcR",
  "key32": "5UMxokar1H2gPdnM79fh7dd3pdSBa5Coy8aVifPBnVEdJkjSdRUbLSsSXE3oNUcUGfFvbnK42EQwKFeJ9oECynh3",
  "key33": "28rxQyTvd2vzD1GhoWYU67p8Svzw1kicWXLrfLM3XVRJgJ6Sen2cqQinGxUgDLSikXipxQNjseC2UVJ4RCz3nj1g",
  "key34": "33aRZEjdL7G7FEmkgkVhfgxMhj6zEUDkJXmf5QG7t3xdoMKwRcjRmdCtPJ5FZm4nGP1VjG28NonPJaC9yzZcuccA",
  "key35": "jasGBKVnxpfunQD9UgwkKruFTaMQnbrWuvZVcUHg3A2VyERGNbQejFkZL7mcJScCeNZvVARtPxeWphtrGk8B3se",
  "key36": "5AY5fVhz3WfSGGvmjXA3fkhonoj7a6nZEdeyh2s333ZJdEodJCsuki5QbCZ4jTXBkkxMa4XF8sH6YDkVJU3PVjwF"
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
