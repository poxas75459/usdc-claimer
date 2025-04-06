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
    "2WQKeKYepzTcWYFWwqTSLR4n3Y3CXEBFtH4ExbJwz74mwL29Tr4dukteEULvgx6MH8HMHa6wjLqKpLNhXBPCLvvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WD7xSn8vytByBU9j8mspsQQt8QikM1B9PNXqkG8XAocgx8DAQmiauaBaKDmJtvhjQLPRiUCDnL8fNBzjvhVNWcg",
  "key1": "2QKytPsXmFo5i56FnpazzLomdXNNhvJkV4f7qq7LzStJa69UPLAhRcmyJVQaQe3k3nEAMA22TRj1eqgQ7eeVEXLx",
  "key2": "4ApjASFKVYFFntgP2irzmfxYCRZvYnNKkFD6Lk8HMGZJZeH2VMSVGufK6BXpWmUw3upXJ4hQswau4bBFMPd8AQH6",
  "key3": "5AjYcfR4aBe4XpfHvLhqUtcxV2YBin46dpb15divV3tstmbiBgVhmcgWWJfVaVwME6ocTLNun9kaH7obg4nn3kYU",
  "key4": "5mjNcKUtDXy6t6Hv6UjaDGrpnqfq8uBz9Ykto26yEM7aGQPPaZGt5U6maPzkNpvGYoHsCGU1WkDjC841wswhTXUh",
  "key5": "GGQZcX9WTtmgP8UosdWEa5frpQ7wC4fby9nVAPwscy289LXLiFQy4pmQxX4oHShSnx7oPrqLf6zKmhXMNF6cbEA",
  "key6": "HLv9zV1AaLh5uxhjtpsU98xoUwUsZK8z3yEgRsxLQMF7sccLp6mVjEqEaLRSezh99rygqCFe6UD1MJYMwE9BFiN",
  "key7": "Etd1KocMK8hG6RTVGtAFRemupP7b4GmLNf1FUnVrpyxF2d39FHiorP5wyRt15WbSmGhnGkxtQ8kHZdyi2MQpQzC",
  "key8": "4rwKKp8S7fQBHXfQ4zpM4P4AAq3BQHXzar6NmHYHreqJGeLGZ3Y379mhC96gdr4SxHZpdS7731xUm6ENJm4UXGZ3",
  "key9": "35C965y9BCYdsmmAsKH66BSYawFbgn653o1RN8XmPds28zoqGdyysHxnM5mR4kFs4DsNoe1zxKwLaNxkpJL4b6cz",
  "key10": "3n5QS5ezK7vBsF2bbRm6zpz6UVozSC5uyvgGAPU6BfPGhPps741XGq37qerXZnUNqTRozkB1pmEnFmUXCPPrBmn3",
  "key11": "2zbR9ovrtjyHzJkoKkuBeyscZsvQLNfTs1uvUUnNMxGZb3BJLS7FDk6chdpsCF7um3ZrXW8LJYGBzJ9xjdB8pdYy",
  "key12": "3qapk22t32uNubWfUth3qyb7NhJVfVrtubk5kBfJKShaFydsZNKECzWCYPsUczhUv9y7wEr4UKQtGeio9wdbDLbQ",
  "key13": "67oeC1snHhdj2HQ6fJssEpRZHKVEQ3RYnDsmu5WHpUeW3fBKrinDwrSYfZfbkJZ9sY4HZcoH3GExuhm8rP5K7mig",
  "key14": "5CiGcTv3okMdDW7WsKbu7sSuJYJcupuaUq8YULfP2sDpJ7epUNmVssVsZAPj8y7a6xvTnd4gJVRhhagqN4JrudH7",
  "key15": "5o2LxGBt7rjKgjKvRhrQdheTfyJ6ap7BC2bttqDZEnCfQqvgdd9aNMTh38SStv5LyHECQCoiePsp4fqgRLGziPjd",
  "key16": "35nwn5DKCUzzDEXannwL4Dv2zdWjsC58XBT6y4jaeKuSxY6WnRNhUJzjrqsbfVsRqsCzThBx9X73M74QZqrXCQD5",
  "key17": "cYcPCVCbWyHdnSRhzgu1FjfH7tSAp3fsCZFjs4WdqZPhzqt6eSnTBFysAuCJmt1zkPGYixHudV8PvQRZb6fvcXg",
  "key18": "5m2mpeifE8iZQF9yK9yEJEr2dSV5os1355wxzoWD16Bb1pcQURCdJvEzHPpSSSFLfqmA8nMhE4uE8BZVGgmWys8i",
  "key19": "3FvRzqTSmp5zMJKartEdekZTto7oMAPAch7un8ve7LLwn2pDoMFNiRhLWrteVA8X1AY28LsnW4n4JKE7ZgusTtm3",
  "key20": "3MR6yBxwPwFFSBe21Hm7pQ9auukia54CLDtPLJGyeezeWj1fXANBRPFHM4iY22rXuZ8kocV59VKQTMbqjTayxGRi",
  "key21": "3ghtGKSD3e8GpjGu9xPsfbJcyWpiHN9YuiHkvXJHfPfKht7KgtsNX4yQyEFJwSxE6WtaCSQsb2KyQBo9xj8h4vyt",
  "key22": "383RiHFU5SrB9MMuaTQVCn8gYKGuXBgPdBbYzw4xdG77DfxxjRRDXph6ZmoVf4ayTXDgNmuEZYRsAmoJrRwC9jq4",
  "key23": "REfc1TbRSHFEHz7Ga9uaVPx8WtFqrtA8e4fZFpdBU9yfjbJDaRdGv6XguSEcB3sLdpi8qPqvc1c8NiEVsmoS7R4",
  "key24": "5AYE9RTtMb2T5LzfHg7BnCzPFuKLwG2DasbdmHMKTWPfjFc9dtga2V8ncqcUCmyrDvSbadLCEGw3eiBwHWSW2fcA",
  "key25": "2BoQ6xDM8wyUCXDqBTsjcc4CLwR5PDaPUArkcRiVnn7bYZeWhcvSmFgBiBGidSXf2Gh9yurmN18yuDfcNfWoeE1s",
  "key26": "4nKNmHsQrV8mP155WT57BevMHq9FHsLHT8jqDYsdfPjn5uessnB4k2qdqjXgcsWVXPFaZ2oDUZBDGWqd3TfjUpXV",
  "key27": "2HYogTDURQbwurQtDtwq2jLvBtFqtBiuocCHzw8E45YNv3ECd5vuZHHidD6ewiKsPqMG5LH5kPWGocYYthbYSVCC",
  "key28": "4ASU1ShBYcHcmudWkMw83F8CBRRsCg9RTJEoC7nnjGx79BMZ74Fd1gUtc1Wx5usivEJHp2EeEM7pdK1LMpNfoiJu",
  "key29": "4HPd28Koco1CNwHcDD9FtU3iTB4HULmcJmqnQCcPzvLpkhBjKkjHvTFFTNofAqez2xkujWygDxWnMLc9s1mzD3YS",
  "key30": "5J8iYsv54jygMPAaQonokBZK8MxTSAZiE6sTLjQhiUFZYc9AEx9qzRkRb5nb1Kbe81HcqGFWgqnHqZukHg4jS6uE",
  "key31": "4GDxDjTTTAXaBqw36GXQmbKYpUKjc2qfFCFS6KTG273kha3dcj4q6pE3iJ6e81bGDdRBjfAntVVcdeCgcmR9f68c",
  "key32": "3sTEx7WfCHP4Lvoi4rnpj8GncB5UPFGa9ZhqFbK76KdGaDtFCxf8Hy1EZKxu57mja94i7jESYHau3vK49e1rsKrF",
  "key33": "3q4Vx6tipAGbVqWExP7eSasfcivVqt1wQ86Bz64fj5nJtBm7mKKRTZhW62T7YpUTLpCLC6RvYVz8b8QBpdm6jF3g",
  "key34": "5a3f5QSguf6tmf8eXVyPNXvmQLUyuqVkWSgUgKtNXZKHeqsF1kEBKZzwiEcndGmdq6nFNWjK5eT6itoBEQP2CtFZ",
  "key35": "3bw3Qmk2Wu8bVZaFiHkcayF58fCXM1c3P1LhoVbjDrVetrQVdUQedURZV5yYtpcfjpmLG3VZHRX7F9Jchqiinwjd",
  "key36": "3ZnZ7rPPGuiEARZ8ak6h2DSjzWjPQ5hjShi7BzweJYbhskogeN5NgtMjBM8bz5dTqx5fSXGGBQkDZ8eYEe7gDVPb",
  "key37": "5CLXB4SWrp2A2Xd4BNdr9FyXArRTtosoGfuBCpu5dBZrr8g3BiLmkteXGLYVsDYDrbxxf1qnk7KufpjDkUu5c5Fc",
  "key38": "3pW2Jmfzjpgzda4M58CfuzHQrPtZGR5qWdaVNHRDPWn76NoQv9h6rzPKsNarSoDSjp5ScE5YLHCBWbUorVoLPVSr",
  "key39": "4EFgfqfZwyodtmxriHWRX5W3eye3DXnD6XgwsBUwej6AojWZ6voC136icsgeNQ5yNxgLtM22DztmcvnjMQUnkdJF",
  "key40": "4w3M9HhTsJyuyLsPZsis2XVX4fUkm1Jyvo4sqNQwr3MKSKyZqVHjpdgnmjuh9VnSGSZyRrc7E6GpNHYyidLzaLyF",
  "key41": "3KkGc19N7cbccm2YjYZsHZpfnrpQJHBgSQcR2hhWUQvQSdRijXBZKHBmSB2H6EduuqEhuBh8uRtiBYKvYg7WgKpK",
  "key42": "4BnL2MFQYXsSJ7BRCmFfpCkCnux9ZF3mRSgk6NHN65soZ8tDxNMuWrGoWnejNsT76hj5des1QDsT7cCNChEYGsDy",
  "key43": "4DfirsApuqS5WX9KnF4sKAs8qoBHnsyVaFpp7CuxoUDMd8Nzh65cSuUEK9ffqroRX6QCDtqTMtRoMoctjY7pvJr1"
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
