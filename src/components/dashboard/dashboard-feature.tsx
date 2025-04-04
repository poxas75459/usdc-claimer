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
    "2rvefoxemwNMGftDkzLJedBVsfAbU2SKyJc38Goze8yHEVeBC7V9HfVxsPiL71azEa9JYE2jynY12w9mDSjSvLX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVAnbRsmqeHfRP3XZW6wnWxiV63s97SzDk4kyCbnFEBvkgLxuDconrcc5hur9m6QD6rSaVez6eqtsrpPWmEDf7G",
  "key1": "5HJiooAiyfBG8xdhybEcZdhWjhWqTuXCfC6J4QHeAVvSaj4zRcGQvfFsen2uRh731GYyC2cFbKkFHGCxwTQyPhXz",
  "key2": "5bLTuoiPWYhSGAC7WSkLLQEgDSh2kVFJmEMXEpfQ1ULwcGMeQskupGJWuwivBjtjLPG4d98a9WExFZdrh1MG9csw",
  "key3": "2RztzUjSS6q3R978TuxQ44fCCSPFTXX4zu6Rr5GS4725ZfAAPMsqe9rF7QpAoTzn2GRu2u3BUaWA5Anv2FoUZSmZ",
  "key4": "4Cwo8L5sThKPHYVsMrfWe2MqDfo2B7UyeLFJwM7fb8M2SqAPnLrkKZSUe1JrDivWZi7MjKnscwMw71e8aqxBnbQJ",
  "key5": "25yE7pqiLS9sQugRoJLPai5WMDniYpooPxezpXFPeNY2ByqnztSzKfjrBQaRkFg9MU2sNrs5vz1jiS6TBMfT8rkY",
  "key6": "4VBanSUCLoCfjKD8Ysr76nqVTrEMPDuTYeus7nUtyb6n47NRmJxWKgP6KL9grCkFiP2CMKtRyFq3cxaXqd2zsbxt",
  "key7": "3Q7md1XVviizywxZFu7dfuPb11J9xKhj1rRtwZtvC2hzuyJveNx3i2RGqF67diVyZvjvgUfzLfPnK4uQjaQd6MYa",
  "key8": "2Crw85szqAr2EiBaCNW2Cdx3Zn8z7urpWQ3x95JwhtrzpQ5fMT8GnoN69z8qjL2a4GDVaFYjx5QSfMts3zk7d3gy",
  "key9": "2VWj1AcfgMbttMseuUUTZYy2oFgKSWRvnGZdpYUQCYpyCYLdq1SqswQSHQsuFCM4L4f9RRHATAxUq5TeRqQQ37Fr",
  "key10": "3imErb4186apk2jyyFqSAWHEyLN1Fg3rsWK2L4joTvHcfJ79angWgKNri1waDXGrz8hfwxKFXnswNzhZBex9Rc2s",
  "key11": "2GktWz9f1SvJwt6bAatz7vgMFdV2SZKw7Wnzp9KpLyYiQPrEC7SxcmfEFd2aK4jawG1AfdYP739hfs4VcdoyJHq1",
  "key12": "J8JUSp6Zwku7aU6Hz2N7jeWsvo3eYBp8n5X9m7AQkjBZjHA9mMMF1PmD7b69gbrYqvx474tF7ondEVtCz4KERyZ",
  "key13": "5rZbFBoWNXgE5shzvkraTb6xYXwtMjtwbN1VhFTyUSoNEQFrqR6dk4BsY3y4Ums5NExgq1EGTXGwsN4AVjL5fDur",
  "key14": "oTRiUU2fLgij1ap7qzmCwoeEeNxgUEd5hAeoUPBX175otf3HAkhyobSLjbJKzgpNUAmJRY7jSLkKsesEYMTB44R",
  "key15": "e7avWM1W86W5vhJ2paqKtUMdgoaPxfWsHrR2Go2kCCmV1v9e2MMcjc5j7jYinBuSPbitGBVMwmfo361V8WqopyZ",
  "key16": "LKQ1mc1tAQyyrH58ZFPdL6Zpj2DWXYEsKA8r3SvmAB3n1hUxGjDryBrgHQSfAoGQi9hyQtaCx74y3FRAci3mQCD",
  "key17": "51myt2ZoZM4QMM4pBrPgZSa9xNWYtLErZso3nPercfP4srtoAa3keUVDNpZGvaMq8v2Z3dFcHdTLv2t2bpm3QFox",
  "key18": "3U1p2dvA6RiUjw4PMkG57H7oWcVFmySeHzCWHhxqdUzjFNyCG1nijAWqRUqJyyaBpsd1xZgL2Hw3GFB2DAoL6v17",
  "key19": "5BBQG1ghLreGpJx5n5QdyLcKYYzY7hpreTeV1cUFS2n1SPFXCs6fn51qzD2q87uwUwRz1NtiCKjkHMz4rV2uEwNK",
  "key20": "D4qBr3p6RQe9wUbeh8noPZMyLoFB3Mc2mcCwjSbyNoBRMbzqBHoERcitB7QE41H8U1afeoYQpW4wRjB2CQE8hHM",
  "key21": "4AmcnypJq3iKDxj4htgZ1pPu76EXpqa6bReuY6bHsG4Pju4kLWVJNnZQr97PvCYATKKLCVK4dyuXJXEM7Li7U86V",
  "key22": "3mstJ6XHegwyzj74Vt3MQ9qy4pybyn3UmrbnLV1V64CsPcynUpygv2xFHxr9okbTFUx6PKpy42txgxZYEM2WyXiG",
  "key23": "4buHAZnKGQZ1my1qYzE759NDWSrB8vdcB69pqQ2CqtKe2oguR3RE7HN6qy5ATZ4v3Qcmf9GDUVZLoJBf8Mk6MmEK",
  "key24": "3RdvbWmF1Lom85wP8PzN6swKMcxjJ8ZcKEzcpuy86fdZv8kX7WAZaL648bJwJn93kcHDCTF9rksaviZr9spjFCKH",
  "key25": "Bmw1fZK7YzzaKYD4rReSMUWZpKn88vydK3qJgQbFGoP21VE8AcTgmnkUDUriw2jVjNRNq48VjskSLL25om7kCSM",
  "key26": "5ZoK6A2NhQP3DrWQsia6W3SvmiWbGTYWb2nN4VKaUoiZjsuJezDx2reqbSv9o2eGcVqrDSvWc68zDrJ1LpJaTTi4",
  "key27": "3cDKnz8TvJ8eZju9L6e3rgiJC5kcXzXyE5UmfSrqfKZmuhPoQxVe3HkNGgHauHYyHaHDvbzL6U6aV5Q6ozWsbVJr",
  "key28": "554fM8Bbt2XMts2YbQF5bcRnFUoHtY4i1bq7Eov3MiQ7nH1eCN72WZWESV121LBqkj7PqsxqQdv7T48iNURj7L5S",
  "key29": "2nRF9Bmev1WnFRqYDM7PeAX6nyQ6qMSvrd5pyXHeArvCzcca7egnv3Rhiu1WfyunHB1xFdDF1uBsZeVa15VdFv5t",
  "key30": "4D1JLS495nuZGcHrf2fH3LtXxm71M2HvJCXUBm8TJRr3hRKKnzDfgen5ZKJzNi5LNjUFJwuLPGuEKgjiy5QZQFNh",
  "key31": "357ehowvjYQ4JSJfieeM64HG1q6V46Pyey7oVpPKTYfWF3e34votHS24BGZ4Fi3VofohZd92Cpw5Q6eeEdVF9Aph",
  "key32": "9FD6HKvtzdHhVveChe1xoss3zE5iescc2jG6p9LUW2xbF12dZgsPQmCqNNSnWEWwFfk7C2JZyhjuyJL6hQGKJTb",
  "key33": "2gmPmQBZZZ3mg6mxS9gw5sDDjp5MYxcBJ6KDkXUwRYc84sDZ9tbTwUjUbSMq3NSGJjQEnjNLEVYoU5Eapk74cLoq",
  "key34": "M4nKUjaLSJwmjj7iCMhGVosUyuVAQgScd98UAbVz4qLc13P9BNQ2LLtUEWGqJgveYh9ETriydjnzH1i2utCoG1i",
  "key35": "2E3pSSBbwKsQmsVtbaSsJywcgzjXaduarvoWkymdPdkr5S8voiX9Mq9GXjsncoavXzAGtqL6Tv2TfLr1L9CmvHys",
  "key36": "411rUpXS7LHSvBKiUgM2Akb6NoRihWknFmXpvrM53bhHkmUJm4tg7fkcnRtk5Ldq2LSyaTH8uL8o785MjZqMcw5P",
  "key37": "51avuSKaWLctMXgQCWTMY6fTjB4QQX1ktsK4ZQBv9NQ6ymbVX6NtCHou1JPTouyyT1xcL5zfoTF1zM9fo99DkC2W",
  "key38": "4CRyh2MhffzP2yQ8phMFR17X8RAfB4shstMBPdapTNim6uog6kzsnip9Cz26uvNC45aK8mTpkCmeyQmZj3XdDLZs",
  "key39": "2DnaDZJPydbQCcVZyFmTPcwC56Yma3R1tdCJ1nujTzifvfwqixMNShEcnGHMpNCsDcJEDfYTbmKUTyRenvT3F96z",
  "key40": "3PtrDDS3mJ8kM6HcRVdcvRoaErxB9spP8Y3a4zNPxNEsF3B9ZnsBsrcTCkgQdzwDf94nMPQtXJ9UnVm25TmgKhds",
  "key41": "JFfsrzijBUoZxiaFjyzXKqAvS4qwUYdsdVqwqA6reKZuXemYuihVyqBLCyufsDVCgjN1xkrxPoosBYg4maEUaX3",
  "key42": "4MmBKVLLK24oWQPu5ff5GRHsyCuiiff2ELv6vC1fnJPogF1F1Pq69ihsFMxLnDAfVmmiRkqe6RTQuSbjnGt3GudY"
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
