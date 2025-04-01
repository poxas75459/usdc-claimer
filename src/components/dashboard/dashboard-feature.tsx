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
    "3SQ3DtndFhmrtT5y7T5Zeg4BpnFF2UHmRrzbYxJGkp5XeZWAasWjGfEQFW3AM2DFGFsGHXrkiGfoq1yFTtqFmoUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LAePq74n7ud95ybT1WPjqyof4KRaZKkPiifMiJx3L6PEAayxYR65Kn6WgU9V25cuCZshSa2UjgpMmCSaPWc5J82",
  "key1": "4Go1TTwCvGGnBYQiSdTUpksGvFkz7pHC88svjPE4PeiiRL5L1uy9u9jn55CZ5hEPRcnBMmeGrGp4kXsxJwnYMimc",
  "key2": "5ktdE2Y9VDFc9S9WboWvduDH23gCQyARRbF7ka8RG5LT8TmjR1UitidzHb7KvxbUQsKfFGP4utFQFi3kvkCGwX1c",
  "key3": "4sA3MgVVayHzp8hN1j6Tg6kKb3EWbRC2oZgNiQ9kpr8ytGs8kqPrhrrYqHTqETrvPp54pMPanauMvaSC7Mp6ecLe",
  "key4": "3RmieHmZSUH1NvHoJTsTPnwS3ocBSwbtQzctAeEZdtWxhF4zuzLNARpqNc7yRZc8tmwHwXvQdAxTJei5WBiRYGhP",
  "key5": "46uwJhQrFSxSktSsWCjU1ud6AtQheH4uabUVhqLtWmA8jLtUDdkpWRtARDkm314vZ5yAAQBH4GZszHGNbegjzwpV",
  "key6": "2TM69v3agj3rZ1xrLLoReuTvHy9gPcoDf6vAFwmqQv6L5RCCmRiQ2NxrxmiB6HBYwsQ8gM5adLcaVBS5AYUHHBmS",
  "key7": "43zNBZLtZS6YLHyNaCeputgTnYgu4BX6B6dV5sMb4zkYApJKeRwzKzC3gDBAyWnjXA9KaMHJ3B62F4YbRV8rcEw1",
  "key8": "4Xd1Xh5X39tsZcSrv1qrcysuxviAvVUy1mqe7wWyDBXWgKeZ5mYLKhpcMC8RvvypSgdbCxrG56fVoZ5q6T8f9AWy",
  "key9": "29C2McitWLPGwZmdVAYhPzi3UXSWWd6RhZSHp9JrbbQDdr34Qzk8TfAVKpdcERNBBjUw6XSCdYBRqgXubhvwauJw",
  "key10": "BaDcW5Lc2F2ZRS11zr5whT3E7teSzrWHLnymmuQUhyAJgS5Dh1WD9y5sYBC2wTcnr6X5L5pPE4XGijNUTDTgM2s",
  "key11": "494XX6fjSTtmNv1k9J6F56zBJpGHCnWyXPFYwpS7dXWNmStsfZ3EtKGd5WJUpmujeGwFMgoodGEuvavSWBgf7wSX",
  "key12": "5ox8C7LwB8iB3hS9F8Vmdy22ioqCc9FXmvwJydxZ6b2GobwwaTFUpreRQ9tUJDMcNgJkpLNNgrETRAuMYPpiRn7R",
  "key13": "5Gppv23m4fUeV3kjvLjpz2WteB8jisPQbF8LdDG7gza569VKonYXy8h68N3tjoi7uPnNeAHvtSeijzWpAnLCxWTb",
  "key14": "2MCTryq9XkCoMrrpLpJN2jzka3LKdzGhPvjUfKNdTbWou9mKQXsd9zArUTJihaV2UqWJS2TnLsCwBmqrT8vMaFcf",
  "key15": "5fr6WqJz7WDCfwx7ScgHbwPiDmnSk6bogAV3xQywK9tUVGqafGevmvV6JAcRbkxAvwmbdcRjcco4M2HmWvjUdtUm",
  "key16": "5UCpGgQXrNUGyt3GgyWy5iNQpnLkc4t5Y7HRfDykC9vx6BYm6K12JB5zDsRsUY1webp4eNog4PFTXwKk1cXJTvDf",
  "key17": "2h97EiQM8rYqi2UmR3r9zCFcQHkh5mB8mYopmPR5FXEHd6oVPwakwqYNrByiMXgZctvt4e3uspVzgLn6kSRTj7x1",
  "key18": "2WFHErWQq1RQNjK9TjGCp6fQS46gjWLxu2XHX5kHbwdFZqA4tjcyurMz1U9Ts6XyecfGLFVjj3NwuLuHmE3nUq4m",
  "key19": "2icTqm47YQKD4pZuoNatpC3gwSbymFHiA38VY8Yq8HG5kTu6q3WFvd5c9yFbvs29UrP3niGcJYoLURcqU8B6HNCo",
  "key20": "4xvJ9YA4rsVtmXDKuQ5gfvST3WbPHn5ukNkuNtqZi4awMrXmFR5XvMUXsac2Xk13TAYmd3WWGamn6m7At1VfW1rX",
  "key21": "5Wug8EHkWLK4RfTm2mvnymq61UC5VHnXs1XLacKWkAaHUnh4s3ByG5komfh63owbxRExez2FxkmTsCuqmXHJEzM8",
  "key22": "4ShoeyJUcbxuBKmH6XHFfMEt6c7j8q1LnUwdPuycHkeaJ2xovc1j9DEWBQNyNWMmVqz31iqmYHPaVNzBGtsoZf8Y",
  "key23": "5ffpMQ21q3AbaiSsuyvtT7rc9E9uYyMfX3RsHYNEgD5GRxwefEU2D8Rm4j7j4fjcNcT6VbvWR1gX7LS3wnGRNQjN",
  "key24": "3V7RBYicCZAB2JYuoxSu54ukXT8a6os37929zy7gSrojhEn4eRGZAtznPpNumzRn3QMrVauWmWR2txT94DAqtDLv",
  "key25": "5dRDHvTe97Su8E7atDDEN3sesUtrkBwUpruALzuQ7mDnRyZCiusd1RyKDEfn5c4SHmtAh7Mrf81psePoDFxiDHD9",
  "key26": "A7DSdHiK8nVXuzHqtcHuTzVRX9YnsGj5RbJSnFpx1TyvV8yQYBwsAaiAw15486XbV4Wf4RQBp9QyVtfsF84WoyZ",
  "key27": "21W8QNNFixwhpW92jcTGKx1PZSQ2UUCGhusyz9R1tHaQWsjTpgFztwNsc1x7JL4F9AMbxGTTzG6B5arsfmAhExwE",
  "key28": "37yaqncoRbzZ1ntmRqGZeyQU7nR4FnQFDvLQ6Menuobnzbt95UmBV8AQWJcwWZiDqCyBE5rSShYUC43C9nhAmD5y",
  "key29": "YDcG48mRHv9BP7wvafU3oYoV7roh8VHewQ3cHzSWtg5wpiAbUqaUsEG8JoNGbkd9ue3dDN1DU2E7MvrZc3nj33w",
  "key30": "4rsafj8XxWQqLWu6AGjC5DMSP8XBGM5Djz66GboixHiBUESKMj1LaBHtijyuR95CWpiDeF5kpxue8asdiRVDNmaa",
  "key31": "3dJScVSRLN4VMLAk6ZShkfsUiGBX6AyoPA5X5x7GzcJZV1AVcEentMRnQaRfJk3r8kKhsddTnZGTk2pNj3zYeWFU",
  "key32": "4BzvkM6zfjLfMMks4z9WepeLnWDwQKWYtCUT5mvTD3GUSZGJuB1gzABefCAjQL1nvKKNtJQ7ALYfgi7Dtxo5ss6T",
  "key33": "5KCfvT63YuowNt6SRLm8tHZccvgASiu5Ef7n33RasK9YoyTunUKo9TUKrUXur8rYezYoyxWd5E8qpDbh6e3cccei",
  "key34": "66vCjToFHfFtqEkwAvz4KUvAVEX9h9FLR8qbc8TeW3NoLSCeTdAaT55JUooaEb7UPhkuqy1XWH6TSkB79qNKUxQD",
  "key35": "3garkpdhnYUA78chP2yJDi5iqLHrDgpXQfb5YAgxNYBLJC42KFtGAJZRjS4UPvkZCdEKhjjCjuMXJ1caCovRops8",
  "key36": "3uyfU6RPEK8Fh6VA3Ecta6ztpaoyjXZEvQESjRP5bHtDRMxEzPfUZt5DkFHoVRzD1keghQhJ6pPriJopUWgNumrY",
  "key37": "yPiqZ3yS5Ze4zm9ZmGh5rsEM6chiGSz5QhpeWjTQhtGh7WvNsD965v1YenBJ5pn5fTm66asmkFwoWVHdNwWPbL3",
  "key38": "5KyAGS9GoLBQaY3prsuuVVYiu22d5C8oVkhKbAitVnagdtGNPhHE6dQQMry8L2dknCVkkELMK4hLAg8DxjwR8MrV",
  "key39": "5JqKtWR2E47fEbp7qTtT25ZrixWVM689mu3B2sqg2yw93xdYfbsBBWSAdJ9mM3qFkwhy5vLMnuAG1iQTrGGCLAxj",
  "key40": "39f81wWStwmQaSGRoxokLH8XQ8FbfBKrAfJzisuf8nQ7yfZFb2qts9ikfbUcmA6q52UrxKtuVnwCHFVWJ2z5chic",
  "key41": "4PVVJksh3iYnh1xVoPASiWo3ceAgytGwZoguqwRJCsyJj3tLiDDQsAZhoN5dH9EvpfUNVHYnNbUnwLSeDY5NS3U8",
  "key42": "4YWtbq9YqGBoXhtsjJiyrJCuKoJQ5RUEKXwcjJqTah8R5hb9zpi2VHigiEZq6f9QAyY4wVPqNvfNmEFfJb2oi5bw",
  "key43": "2VfyP7SHbaQtKE5kbYwK5waQaFPFf5gttLbWPRScNEEumTtAqkuYJd3cAkPxuXSnTojg9ZV8zbxHhJUHZV32xbLd",
  "key44": "39JDdQNiGyj6h2SUQ2eggMnTD8yiWpXLQ1LCzyxFojJ8Tfr1hRPPHWFRx56PutLs9u479V7ZZUxGSucPtFT7D7fu",
  "key45": "6hQ5qAaUg4uxRsAus7LvmXD6RKJHJ6VhfEuA6PnZVEzhzboK9nMnxm51VUo9EwAHZHG14uox1baed6wnbC7szy9",
  "key46": "4q8hRB7HnundRcNrs2yi76aCuZDQQVXGV4ZuxGLs6PL11QyxzTuFYoTM61NCkrNJSSFGtt8oduarp1u9fkxVWtiC",
  "key47": "24wFBsU5c6PkF3mBYZMegXiZAy4Rm9DbUzqW9jpxiEafpDNWyZboHCRiMzwHPwonQHgGYUSXFJEMhV8bYXJyYH1y",
  "key48": "4Xs3QUYmegQEJZnp973fmt5JAow8ctqBiQYcVE4qhS2xuXiWMstUBDiUpFBhDKjv1JUiu5kZj8RnPeo6GCxcFtjE",
  "key49": "3SswcoVTXCwxPNRDCuYLo5DmbbZjBkZtw6rXa7zvV6BPZF16KR2CWNAbHxX8LW1Br33BL9Y4xSM1wZijn69imsiq"
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
