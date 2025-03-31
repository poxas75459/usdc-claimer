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
    "57vVgi48c6Y9r91E49C5H6Ykb4ra8p9bFvLg9GftAHvGCFgzzhjR1uGPFMK8fyY9FqPMYoDdPESA7dXFhxdvk75e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFH8WG7LH9JoCrFEJQGqib8UMZWtiTZpoudKrVzs8cNukNpMJoWS2xoEKRXWPCx7YAsSJnBsHAzMZk5DtD4ueuS",
  "key1": "3B5xCgSEJXEnSb9X3YpnayRTFsHp8YSwrntyeZDQsvCjeQEmb6rrdnCKFDjkwk278LJBAJByf8QmqCxb77YbyMAd",
  "key2": "4jGWUP6urxkrWLEg9zjDLLmYnf23bju4mkD1xfPeSh4tuASKsb2PtXnWLduiBYGTRMyUt7EzzmoNb8ze8jmWJzG9",
  "key3": "66aZme8jafmmNYBxVn48fouDzCJviMykCbRdwCVZf5NB3Lo9incWDDYPDtq6FeKdCnkSnuZfgUPgvxLm1d8BQLtj",
  "key4": "4YtFs6izQE3ruHf2qLV4HXBBtVZqzMxDkb6awSAb5994rVD69n4Pgjr7erxPwzHHTKQGNqVr6NABd7Y3sanHLbvk",
  "key5": "65WW2fXKv6aGm58Jx3FpsJuAZFd7ZadLfKaRyVf4Jn89oBoTyrZyS3RdiDfgXZ2t54r36KDxZiUwWMGXiYx4hthv",
  "key6": "5JJDRxLaVmD1qTXChJsd4CR5eC9u1C2Auq1mRHXZWFpFtZNZTnyW4PWNzsUL5ei5nEbYTHjLudpEvU5YiEE77qzB",
  "key7": "5HaCbaLWArmWZkpW6rkScWyhjHNxvi4Ez18Mb59z6roCDcMS8zxYZs11Go49Q7kpL2TCLntL6946Dw5n6mjnGSdR",
  "key8": "454p8fnSyX2QMa8xPyqLgdjycW5d31sgoaEXkCMxi6ZyihZwW2RqUAxGKEcHfGYtjiqNkVd5Rrd6LnCpm53NMqaa",
  "key9": "4qsXSmfRbjkEVEQZmgTxGaaAqEsykpBzZB6hHEV8af8rUPbGeMoiayPzbv225YCLGX8utHgzoDvQi2woiuBemVnQ",
  "key10": "5LcdSLnMbWFrVLUfiJ5P9KNhcaRpUbMG4vAh36Njhm3tHZqGfDH3CtJv8SYVEcedpaiiL2DUpjytyAGS9oP6S2iS",
  "key11": "5iwoMxGuRVZUFYDwqnidDkjjCNJjnkHEzW6CQpAkNB8Jfygpvv4W5hn6bV6yHHDpuEQ5Hr34PSS3GhMvAydZnuy3",
  "key12": "4n9utsUahbbDv6N3gEH7VDBciu9s7msNBcQQe1zg3AYte1v4xGKrPcRPQ4RVnRoL6gDTD2EtZYf74oLqc1JVmbnm",
  "key13": "3mu7UjwK4HsAtodKHheRDQTciwSwa2cvzyMXNC2qFAepnUQsYZ9bLKYmsnDeL8s2sAutuzBeVe3Ha9X9RGvgftNL",
  "key14": "C6wQYKq9wYeem61QYBXiq6wyfkdfT2JLp2b33k9Q1nRHfY2ikH77FTHWx5u8BoHDm6y5eMZhc2EXo3uyeXyQfi3",
  "key15": "2TqQr9qMG7H5HQfLf3pP2yv4iCWisJ5HjQuZCu4umyjV71NBECqgtDhTdkjMgFmF1oZRjTrVYZNA1hhbXF5gWWNu",
  "key16": "XAdgN5U3CraqTqQb3g6FqvH56nEaYJztfwepor81N4U1qEBTMPm8oEXp2uNWrrZGyurDJGchR8mVgMwXJCDt26D",
  "key17": "4xLABf24qDCfpYHCT552dqLK5k4k9YDYcJYpfB3Xn7M3Bp8WtChjUXZCuaf5VvWyHCeYmy1rdbB57Eptf6keUV1x",
  "key18": "4b7mBYmEbDEkTtYYWpda8h6QSK6AnAEXu42G8oR7wUFMhnQxcro13eRDK13m3umPDvdUCQNePQL2uuyJhJAcwh8R",
  "key19": "3zjYUHTHY6455W6CRyxzBiREUR4YSDiRPt3fCFA5bhVDNvZRPDpuudZmwxa9eCyq7d2BmrUPwLK1qxp1iYsB6oe1",
  "key20": "4F9b9PNMWNYFmnocoXad5SFd8a4EPVDY66U9rfgsVcReMdK6V4Ug9vf8ecp1N5WLGyvdWTnHWk45apg6A5nPHfWF",
  "key21": "5zw8ZUQsQsS6jbEp2gMw5yUZodTqcVwyJME5vr8KWchVni42dTyVZeLuDHXXYFUXY7TA8iZboj5yYheUhYZxTRGk",
  "key22": "2CDwX4nbgBXVDbdvxgjMcwYmzp92jfPdtvcjJqNf8ktyh1vb5Sm5McVgFBpYHJfLo9JMA9uzv6GBA5mmBkrjyo5r",
  "key23": "3g5Pk6ntDmFYj35ZgfNJo8aovat4sGPBVP1kSB6R6nEfMqe8HUxDgs7Fxtkfh9oiAJbfyvCx52qpSnQJ6g5U27R8",
  "key24": "3Shms89RW98ko8Q3ei9v7X85WTaKgXSoCdzqq5bGUoSvdBrJDGxR7MyKTFRbFpM7qMwSDNAXb8Ej24FdnMxsTY9t",
  "key25": "4xNgcy5h1teRzQ8QJLoXo2qciwCvCEFKoSEWCWND4YEs3pf48vMYbiYp5BzZ6H48uFF2NAVhft7chLxdSdmTNrHk",
  "key26": "5zAwoTgdmSFnUF22kd8ebzpyv3czJeAz3cBACboFrd28RCJGmWzQ5RRdLhArWHoyLr5xHmdKRuPXjkB59SPjRYkk",
  "key27": "wyiCeRRuFtHTErDegw5fqFx9eY9yVE54VwrMChsSdtqV7C7FiT1wkqpUMkN4WQ1KjZVvKajk1So8vka9qM1sksT",
  "key28": "2Pv9RXcJPXvq5f7iaUfwgwZ1KkERLHkagXwPdF7m3hBWHJ2hPpG35eX14Pxc1Hkuh9LppcTjDBwYMD3nKRmTrtMA",
  "key29": "34yyVWuiS7yfh6cHQNr8WwXkSu6wCtLWCfnFF8d9a7MJFH72odrnZ9r3P9y5TRU67WRf8AoCEumYhdciYEMyLryd",
  "key30": "5811ffhT7b5McScbg6p6VwYGMqMYgWfdh38VEAAQrvn3qifnfigRvgCYqmPb8dbt4rgx3EnSquJXxc6gJpM4fy47",
  "key31": "2e9FZFW4GwFfdNtSjWdXXeUm6Wmnfc35gE1JLnqSZibGKG7hGjpxLHcBorFXY28y5fBN3P98VmyPC1JMzEACbiR4",
  "key32": "659nDBjxv7BvPbuBtzHCqCLv8JFwvhH2mEFRYW3kdw7HKY7qa6GLD56v1vmsKQVmMWnPgbRFYYHQ5G9dLYLeEifp",
  "key33": "3KvRhz2DVEJzFx2LRH9fyxSWm7thvXg2CMZrHWo2dgsSXqtNmhutnxXswWeCfh4AFzgQYiLdWqF9AXhHnvWbUeYb",
  "key34": "49q3VXZG1Fw4LPHj4Zvyh8T4cBy5Ae8tU8ZfE5U26EhkZ1xQFqmGCnGgmx1GMJj3ABKQ6JeYSJx7kSLuSK4vgABT",
  "key35": "2kPpFarAoxD1NKMe6xAYSwVqU8XSTsGDoChXCsJbeDdTvrGvHmcM2a1em5sdoiM2tm63wtpKXsvnXQYEf1YdhAUf",
  "key36": "tCf38aXiCYE4WiHiQgHUAUcrbhHGjiwbMYPrWh5YCNd5uEUDd71YWDRSY6TN49DtUzVqa6Hb1xDJ3uQoa8g68Xz",
  "key37": "3XKPXCdABoyMkMhv69zNtcYjwo8rfTEZeGCqyC7VcDGi2eKScar86fkcd6RHDCmtiTWT5zgJ3w7o3z3Y98JhuQvq",
  "key38": "mqQejDpn9WdvhrNNoFZeaSPFcMTEYXMD9QhX5U2zVZQ5YpTWRuFefAzAdfJKVjCAoEmtiT3yBSyzJoe9n3pJci2"
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
