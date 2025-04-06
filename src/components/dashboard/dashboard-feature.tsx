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
    "2FR8YD6zKAfNeFNdSRQKKwgRzcUUqEnbUGrw4GCnfYp6jWJ3bZeccguv5p9AfxZgP5E7gdTApfkbwUmFidcpMpas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355hs9hhNL2YjetYug3nRJpW7oaDLwsymDypiVajTrzvMg1NVbEeZ2qGyokEQnwfDdHarD2hDcU1tWbKErpMpAhF",
  "key1": "3Bu14cj6XmwgTfP2gDg8ambJ2SvFx8V4zcf4C1urNtg5Dah5r4xGYvPxCW4Vpbbds2DXWGnDGj8iX1SZPxwmirSc",
  "key2": "3fJ3xcRwQfoGgnNBqKs4Ms7yq3xkYQPLbGxWPhuV3wbGeZucbn1tCQ4JxkorTcdbVxdEcaT8eZLyen9hvvQwH2ro",
  "key3": "4mQQd6zmcCoWAoivQ497cjRVjXQ4CYjQzKPLe5drQMYBnxogFiKUsDCsMgKf6Jje3r1PHcz68WnjdhvMjxwGoQiL",
  "key4": "4pjb9WYpfUbXVFZDTaTSaV5hwJfZN5xKgFZko6UT1gYXVPZmLeBxtnbRwSoUqgP3Tg79ZDTTUwWx3S5rhhgQ6QLZ",
  "key5": "3U1hZVk2En5V9GNJDvwZ1V8ibK8MusDGnYHL9PiTYiMTZW5EJn9HE5CzhJc4nYBAQpt4KR6UKsdUek2uEwnyR7vU",
  "key6": "CtMceACW8JfLNSYEukoBPhwGo1UJh633pvSgb2fEKPjFmMH6G3s3gfQQDujA15PkCuDjPPH47TjpFsGSqAWzXob",
  "key7": "4nxd4nvukyr8fCf9Nxzi9ZkZEVMg58f2fNYdXD4jqAyhdYR6w5PJmq9ZSgFwR6B3Nhn4N44F5oXPmuxkfHBJ8EqU",
  "key8": "5Y51B5X3JNPtp75T9Na3rj3fyjZq6Fd1H2vEAyRRiRyRaffLRxhc2bkaHS6QKZUaECsbTtcWwmcVARyuTkPZzzxc",
  "key9": "BWfduPhpyZ4D2PR4RdgCnt4yeAqqrjhuTZ11cdPALr1osg8kbztr2sPz6BLQAjAdk9ru39UySbQoLKU7YpNECkR",
  "key10": "3Km3UnuFRgz7aLQmbWXx5oynSPFeePTyV3TZQ9E4YVq9BrWkUmwKF3mQWSz7UfHcKSnSgKugSzbDsYqvXGwut3jB",
  "key11": "67d4ykedPFi6VAVaUD6Axovp9kMF19DbAS2jEtPcG4xm1P3oyqAKqEr96WFg5EYxoMmLaFDpXG2P8HM8zFCUx6yY",
  "key12": "3Nggw2vor1N9ZkfMdk1P47WwoNugCsSr1JxmtHCV8ZF9oEUnuzcrSz2kFihWp8yAj3DysknNDE44bUt3owQGMTcR",
  "key13": "4RJRTHHz9irZo29G8QeEcD5jRfZ4oTWZqHSh7LTBmt6Vr36nkTxz2UYEkC4r2W5W1ndTYSDsMpC5LQonkekoyXZg",
  "key14": "iZhSmwMGhqcYkD7DqjapwLa5p9ANoq5w5TQzcoiNQosVqUiQoUQXqFa93xGRV9anYiUceowJ16b33ke8ekbfPJS",
  "key15": "nw9oQTuq23d92Eu6MYMw7hupE3gQoSakFiApkGQNfP5FTKKWapUq7WxRSDbsTHcPVLbB19AzRSjPGzVzaYe42ah",
  "key16": "vfNzoKAxfQhHF2MNf52et21t5A6bv5rsWzgyoLZWKTyg3o6QXrxm55BZcSfPzBXkK4SsX6fniKhc2SYrme29ifS",
  "key17": "4tvYQHjtTUcSsafeR4gRTgxsj8b37bQucp2x11DyPNHQ4pTsb9UJ1j7jxQ8AR3jxy4Kunj3UELJ59xAthgAZCYYx",
  "key18": "uTXBeznXoXWj8DuK69RUaaWfYjYweG9nHosYsEdrhEqPn9cnwzQncpK24YJjCwhUbiR25DgBZqWic7g6ySgZDjo",
  "key19": "4VsM7EVMAeCG6zRG2eKZZJbUcqJfgPo7pgMMDi7w7oqt5E5KefgM6XgmJgjBNZU4g7VTjoc7Agdt2jipM4BrUTCH",
  "key20": "61C576SDmUtTZg3hxVZvBftdumVhi6dCywXxWpM7W9EqL99UdmctxBxaC2abTAdSrNvGhUc5rsXWCvAMGSwpZDLE",
  "key21": "2ujB1BSAJ3zuxTtfuLwmf8C4VnC1bBi8fvdHaJr2XsY2V6YjrUdVR7C8RmttUbx5Df9pbBPdDAtH3jRbPXSpQpmm",
  "key22": "3QdUGMZqNscoCp9aUcreHDq19izzu1WppxX1CLpgzXXFrXx4c5eN5ukPYTE8YLBe5ewQEM13nqZkmp6oLruBTXLt",
  "key23": "47N8m6DjDaVu5eWpBxXPdywrEV9N7HQWV3mWdvyHsrpPGzGC4nQyf9dMwkTSgDhuhoY1wPCu8cDgf3MPhQfAuJUq",
  "key24": "4wGqzFBNSDjh8WqHgCSTUzBT1RFLGJqCrx1wNbiF6ELz16ngfwNw7VWSuq3TD9y1hqac8dYZPNPLivKJ36CLqxhd",
  "key25": "4hGdQfgMPpknVB3Q9STGkLDktaZusi2praFBk38JbQMr7LRTszrV4RXxXfBP3otUYCJgqkE2mtxbZ66jjVn2Na5H",
  "key26": "2xSnepVXrgRhmNPJ5YEuD51Pge8uzmvy6wxsAWgAve5F6C3bC6V5WPZNKWqwU6vJLbnpMDYxezKkzpCLXkdi44DY",
  "key27": "5CmFeAbqPXn5CspnkDxEdWgVGVfRVEbS4TCnQFVkvvsmqP8BP5RVRzQZknSECnHqJXHB4wchFCKz2HdgzYg6pi5j",
  "key28": "2oqiHWvaDnQVJ7rr4KD7VmDwag55P5Z67D7aoQG5A7Xc2ek5qg9rx6YLq5AgzbypFNoMHt92T5iEsFKiepQGXjqy",
  "key29": "5XyQq2LP8igs6qYoAE5ekRUfXNaVtkAe9HCMZK4DEGXJeszDJ1PXRNAT75ZnYhMrU98PHpJk3aSkfoKghDMMMiBH",
  "key30": "34uau1F4mhwySAX56aXWG9wbhcDXL6jBmDGdbmLc9LqLcMgnJBzicKQJysHvKiPz4VvkvWB6Bw4apg5jcAVXvCKe",
  "key31": "kxoLowAR6raL4bEimKXuqdTk6qK7qEPZxX3uLmXQWz8LR5iyLCbYRyqTwDSLEurwaVKqgobMF9fmsyQpcHvJncm",
  "key32": "2j56irythCJPnRDPwrftes5WLtbJPJydqmw9S3yDhvkFB4qUyHL2VTERUcjCC3guuiGBs7GB6SzZ1G9Gm1W6qjYV",
  "key33": "3x6VPDodyWjApgw6NDkMXgRP5PMipsrff2qbeQj3FhVWgjHmAMXMRmGpE4wrWczPaAVRUEd3wobdewC2c3DUqY79",
  "key34": "3uW4aWchiU49QLvFmvyVBYBZaBYSS9nnS6DRjGaShXjPdW5LFubyAvbtU7Xd7ycbFp7KLHsoY8eK76TXzLqnKDzM",
  "key35": "3RLbcyvtoTzaJawC7a5jAfSRCLYrrXZMuzZK2m9iHLr1uW8QQgx2Q5c6eLZGX4U18A5eA2CGraJA8wZ39iGFa2hx",
  "key36": "2MEr6MZ3MgfFwipPfeaPqASpEvavtvcpXmvnXWtJAHTdS7E4rHV5GmKMqBeGYDntoqnDXLuW3dLP5fiiAunZ3SMw",
  "key37": "2ErCWuSLmcZLzygSUy9Q45fTAkr3B5uRHgtyXqUoQvJSH6LDr6sCbgAH89PGLLX7qqdKUaDymnAZh3vAuqWF8u4z",
  "key38": "4Bx1Pr8AveixUXHB35hRaeJL8DH8NqaJShyFAMwCJQLYMrMhConLjT2YaCEKWS4C2hGpuhf7nfpWKkzs8u36DMbE",
  "key39": "3TMqnQ6yfSUAjdQVgSEAg8LrXsB6HLDLUp2inttKTg9BsPf6FoyGa1DGsH3UxQ9c2t1dno2iWv8Yd8gTKesdgtpv",
  "key40": "2fHwbk7KReiLV26wSmtppgFxJ5K9hAdxsGFkxJ3okGEi5XQoym7qhp8pTRrKt3yRuJmPDUfvod57EE7maEgGF9tr",
  "key41": "4HaFmGksi4BPJLsEEwzukvyXYxsNZjRCNeVA2C4QxxkmgpvtEu6VZLthjabpB8xr69yp2oXUndMJqMiBySPa6Hov",
  "key42": "3389jAV1hrXcbG4vjTait8cbj4e364JZ1D4c7KxC9vCQdCcQuzFnixDCC9VYZF7VSLX3h1W2ADH3Krp2obyzAsVJ",
  "key43": "3fLywuFDmyw5AJxp9Bt4k9hn1RK78pBTGcoJAjBocEnBGGGGNMavfpapYMQ2YRngDE8cVQ233NPc9YBoUUM7wJP4"
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
