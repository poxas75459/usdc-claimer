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
    "3E7aq83v84VQCHJ556G6DeCDL4qFyBGJgmBHktjkLNNnFHFZRDdaz2v3Tr5PD4KZgb2d2jTmxdroQrXYxTMiRRiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfQNNdBSzgdrjexLEjsZtFfAVpqzQkosZ1VtBti2gziG6vYweFCxmLutm2rdfQT39FCyxGbrevukLZwNRDhsa4y",
  "key1": "DEqYhrLKR9kAysmS5mhSHoWDmRdswabTJKZYqUEjVyLchDALjkbLCdSCvv9fZkJqsL9WWDLdHmXjpVxDccfPNv1",
  "key2": "5uVvsKpaD7B3pjhYYAvp7XKrm6MhsCRPBjJyVB4e2iBtZpDZe5F2SrWgQw6NqirPvnTGfS2xQsWkZtcm674YqqdL",
  "key3": "5Ypt6547czUeRpKixEASqnBwDz3NBY3nrTGbFsxo7C37CoC4aKcDPsAfkxtqrSkdm7TZoFy7P3C195PCC6eFmgJC",
  "key4": "7T456w12UtAgKDTqhkSQTzTG6cLFSHeopyFyznoHkjg5jV2jakTeZnDJgmQuqrKQyxVcJHLfESsUj8ipsCTPiso",
  "key5": "kushvecSzK93Qt5Bk3yMfcQCofJ3RouqLWRXQFxB2bsbftn9Wmxsv9SqUJK5dyw7MtM3UkrG46HAgH1JYNd3WJZ",
  "key6": "38CPPnYLs4VAQNeKWYSttQP3mTmzmnyLfS5XUeQTKHBvEvn9o9GALDEJJzn74PpR47TvzeMzA4qWrsTiFCH6PbpK",
  "key7": "3D3AsUpTivfFxYhgZoakYLGSeu7UfE2gar44KCuFF5GXpT1UESArvnkhE68qEVN2PLsXUcf8nyzhZQvxerertFy3",
  "key8": "5QH9HM2ATPmRQQWXQywHq41vBDafEW9YtH3bWmvk9zjXQPtwApvQpWJE6PT4R93BUYdYqnh9mE5vQoP351XW6ati",
  "key9": "3seyN2zUjQuKas1qDeZQYXUK8kf17VvSLKEQsKwETBmySyX7cesoDJZkMKz1vHP4XxDottnkSiy2WzYqZHnRRA8a",
  "key10": "4fBXvPccopYY2EwEQQ6ZiBKYbFfoEC6kF1RH9PHrpLmJC28RgKWXZcs8TAmY6qN6si1JUngtNQZ22hytzJZZoX5b",
  "key11": "32AakeWaHUoHPTKo93pe2eruKRWMLsd5PWa8Ceg3X72f3ECtM6R7jGMNop13zY1ySpmL4EHdxDJ5mKfWnfUyUoCL",
  "key12": "61wAfk8CSNFLo6aH4ZqudwBckU3Un8yeQFwNvbJ9NKE3itgnvws3RXqE1oUB4qCDTzgcGJX4RfJvgjcdphxAJfr",
  "key13": "5dZiiiPWex5tY6PV3DUQr4tmZkeVCBAQo7owNYRfVVpaxycu5qo7UzTCwLChz8EkSbRqPqgt5D4z29otDrJRLWAW",
  "key14": "EvzPcXeyntS2242nkw3bvvSoCKBeASi6PfSCxBPZAofcj55S5w9cRxRXPNa8ephn5ff9924sHRNTN8txFwdeQU8",
  "key15": "2jCyzkXP7AkFs2PQwsZUF8i3c5Dn6FLR2iDd9HJKqvepgETWPezVK4AWcbqdDyD82b3Zmtyufexo1PvMphgvcTHQ",
  "key16": "4dWQVoqjUwe2gh2YkVoLTgj8cqQT4Hc4RP9HBiFirDjSjhV7m786pCw2pXGVFffPuWxWUmqAqyHoCaTY26Waqgh",
  "key17": "2P8xmNnKNRAixqVURS7WbBes9i3vNsZaPE5JbnmJcAqKd6mGYhMFi5HujaHB5z6UBHZg2ggKDrgJmL8nnjYKU5xp",
  "key18": "kmQYKm1cfXkLPskGDEgwNxFnoPw1YyfchuZVDdEhY946xRA6gZYHgMQ4K5vb8yd6bSpvRgmjyCBkQ3Q6ud9nT3T",
  "key19": "XYLg4wmFG4hbRTuoQGWvcxwCK9HfMRiomUvjETp9gJkTgW6WJx35rMm4L4nzdyzgWgLjorz91mwp1BTDnJrUAWp",
  "key20": "3jsMtYaoedzZcKTqaKuvbGbweGBC6DigHuMkBxtdz71QJy7MWfgi5JgD6Y8LPTtQGRiiPKsvWbNaNVTbWFvxncJG",
  "key21": "3sqHKtMvk3hzsU4VAxN3SPgSLh62Pcz8jivgkEwEUjNResp3Tbnk9j9w3dPooxPDReWhDZSCFCCXdmzhcwFcKftZ",
  "key22": "4AJGMqqcvVjD4pEUBxCgD9MqXErpt7NSwqAkrW3Z787TFWE7GSRjg8oRSY1LkZMXb5n6G8tL6RDJXabZLJrdmT7S",
  "key23": "3SgWuaRyHxcSfbvjryNdPxbcDM548bxSQXNZeqrsxxBL278JAsodm9tpQEcphRoQn7DbxT7n6TDpzAT3aBETNV2i",
  "key24": "5vqyUvNQHXKCwk5u6Hg8hydmXgsq5rsH8HriYJWt1hoTK896BQ2ajktEw6iZF3MkQ54jEAfdbtcog5dTR3WfvmrR",
  "key25": "2jWVuN2SN3bowz3C6MseW3TMLEsJrGxrYEP6DckTsyyjWzhkyVbDCtvDpTNdN8U2Q4EHvejrssiEcUDKMLBgjgaT",
  "key26": "2QXqRme4PuueNHq5aS57Pd67jx16Ga5dBVnnirNgN7vAnwjP5Rmv5yuwGKJbRix2i2NFgnrUHsuL2d9Hx5w6LeP6",
  "key27": "5aPhUrXi2yKv6Q8XT6czEoFSbREuVTN3aGfe78ezDK6Yc7R77hPwcHotPsVvqrMADYGmUTLTF9V7bYatKmfAALaS",
  "key28": "43RsxVeNEJD45neZ1qpLPxTGz5Dq5bSCFzdDfEPUREPLmNpPbQJ4BB17krjktQFwGdQH49aaMvfWZB6p1F6KbR93",
  "key29": "4MVkUNx1XY4BuGBr3uiKTRRJRpM8jGba6QXhhHfYZEsjzEKPBhHeKkqGSmJ9pg2LRCWpu3Jhz6vRNV8tfejfcR6v",
  "key30": "3kmEPNDsNGLGNPMYf1Ez65gSBgMuYMVFSe3Svd8nvYVnFPuSDr1GoymeYvTk7NDbUPbVVBMWkSsh6o6XYfFu7ZVY",
  "key31": "4XticpBSdsn27pUUfbgfFP18RxFJi8k8brGVBoE2pnaEwrBtkACXJdrbeJ8AZA3xU7tVXgRENo8FkJhF72ap1DtK",
  "key32": "2QHCKn1FPBjs5QG7MFSWG5HKGi1ugozVBjWsJ8kSmkKVmyjjhExjz6STeCFfvTFJZuMN3SRSsE9fQH2WHruv7eaj",
  "key33": "3r5MteP7nXEenXoKRZB34Dkicy1DnEwi5j5GKQp7vHqMFBAuKisxVrUhSwwGYaDvMqvRxTR4k1YQUtJVDWdi9Lgi",
  "key34": "3D4ddqeZSSaJYwG6mj1rJxCkZ5st4frmUe59wC9wyT58AXrHdc2Mk24Q8BCXa4kNH8PJWVbLHtDfvwJhWmXdZTXP",
  "key35": "3BrMGLT3qeFMVJM6MJ2Un6AxvggF1YVExjfSGVyYVXmRw6pdkcWJhtKq3r9xJGhh3NtjLyArETxRXuYZGNSWJucq",
  "key36": "4k5gsz33Kbsitfq9bQCUSKV8rm7toSjW79kk868P2gU7o4kywWcHAcHSeHfzbpJW2vfq8QvNRZBH6ZZmj6sSAf13",
  "key37": "UPaM4TUzxxtsGqHExFaMuNkxXzvSGTJXzztS9D7PZeqLAXT2S6LvtbVuWJmYxXhgY6NJBYsY7u9mAhghs8xYAMY",
  "key38": "5vkAg4e1i4hLCKhhNkHqzawfWDSyAfCJY7M99k4fAUA2NxQnmYovgMwGWv11Hv4Dphr8Ffdz2LNhdrAV9NrxzgHH",
  "key39": "2zLM2rr2vvKCSo8EZ4j7FodQxjpWF3Jcov6G9LErUc2tj2Gr1ZmGkKhx5iGC6YotcrtfVYafs4NxGMWFF2rNH5a7",
  "key40": "33nAZrtBLDADX18inrCXdkFkbwu14G8AMuiuK8TZNBCqHJgGsinitEGUdXe5Fgx6nQXqpAsyaTZJnDu9rjw6shJN",
  "key41": "4GcCxxmeXFtUY782A5m4ibjsa8gyaLK7Lf32JCMZxc2BGswj9oiahuEpHZBC1xrQSmaursAGncQoitVQ8SFGbeFy",
  "key42": "2JR74ZQmxDWM42eN2dRm8j48FFgNPQhyFXNyQ5Pj4BsXpM9nAQhJ4sMdmRgjyYMTApFTKH5xz1yh2LcjoWNW8WLN",
  "key43": "8d6ive6SsqWfwHzYMqzxSABGSjMSMfvcJWHMnJkgzFUgrQcRkPFvaW8fZexSoAU7fTgvEj74iLbLrQZPdesAMKw",
  "key44": "5zCtZqQYQQPSeaMcpZWrsfbptWc3PrkCgFDUGiQKKrFU7ucKYAHvb2a3MNq25YomgDzud5E4giFGRCoERabP3haU",
  "key45": "3PE9LRj9mAgEMSv3XAU7N6LU1qy9BCfejTDwdvfFPkfCZFtxFw2Ap1RiP6zGxqrgQDZWSqhprcr4nKTrgNoRDZaQ",
  "key46": "m2g9rFFYakeG22ofX68qCUm2d6JzN5Bsj1Gtw5ekj24zKL2b7hiAP482Nt1SYwh95ibqbkvKtPMrSBeNahGYweJ",
  "key47": "mTfci5Qrnt4gjqcVHRo8arhEaUsY6f65Hci7afLzdsaHmF2429EpqQqKYTs1DTys1iZuHLWijCfvHKqXKu66cnH",
  "key48": "48PEVq4iZSELGKLcarVPVtxcVwvv5AWhLuiagHzQYU5APzDAA1t7qtFddx1rcv5cLCGyEtwDszd2xP6oF1q6BnKc",
  "key49": "5XyKitbQ3SfAnPLrLHCbueEf8CcN4aqZZ6rJvgw6s6Kf2CNJuPDf9AqZCZbVP6BpUdvLEbzC4HsfntmHPZXYveLm"
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
