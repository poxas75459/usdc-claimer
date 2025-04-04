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
    "5S494cmMnQRuHsJj3EgQ8x1yvvtkAcTPBXVLdKam15G57Uu65kGXfYBLSMSBzg9oATTV1x8EWsoczZRCGVwRoEA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Az3DGvadw4rh6twVKXdM31BLe5zGvreFohsPESRzhaFnasFCun52uSekmbgn4TcYsD2uMebtCnHjfaDTYq67zYx",
  "key1": "4KiZf3LZ2shShd4ikXWaZt4XjzxK2EZvbHJfFwhpyLY4QqHJWrcaSfQhMSF4CKrzvtqjyBxNXssrtZegiam86Xqb",
  "key2": "4WJ7bjedHNV8M8V2F1xsbqt3KaoazKTXZYzmk8UHPGDKnmqqMnfhMUNdivhdrS3mPtbcawi5pfMVZDkZRWwYDGRD",
  "key3": "4wZxL5HLPWgi4HhJX3ePNnir3tQ7Dueb7yyvWe2G4DJEHrdkbNkZgtgroxAWts1k9eP7Lpxnyw7MNrWYoMBmUyDQ",
  "key4": "3sWZcRxXZMZFuuCKXCfYC6fqdr6RNAZczBL4ChTd2R1sYU8to3WiDoDhb9Ah36nqKMN8QQzQPjGUqwT9sZWBzpAQ",
  "key5": "3Ke7KLEmKePXHUs1xKK7KyamsQuPyRF2Ff1u9Hf8QyPv3c4mmvi6uxfrnsFEiLv49tYKSiBuDDugtzNDf4NSxU9W",
  "key6": "4TtYzZCuNYkbuhbZFLU8z9fpsDbFAQw7bc42xwusczDmA2YxYJmUBWwnEysB5Q9u3AxxqoVyQ7DLE7LL8ZbsfN2L",
  "key7": "5RurKtqi4wqGUFZNJ9Mi4fJRFCU6G2MYyHD2VkfU8HURcU8vqWVbHkbGMKgtJkFS8Zj6JeLB2YXkp6YGercDgoNQ",
  "key8": "67PJotRvuEaA9WbDygvBM1h8YWer7q7mqWCzbQX6pnENZkNLviofpzGUb244GoHW6Ai9iRoaQGWvMmZ9jeKjhpjL",
  "key9": "4EyYdQ4TajuJRKznCdj8g79aaLj5sEFanqjp3JnK8SumakS9ou5MbgxyR3RRcdWsbQgXaYZFxQFxBc4AzRnQ1LZM",
  "key10": "433ukrbL3h53GfXctdDoCJiv7nEBMF2BiXffxR9p5EvyiY9Q13cjtqF8uAnup6YQg2hpx27FWEiBU4dGQVX7wXhY",
  "key11": "4TXYgMXVURVnYs8At4hzUcGAZMvx9AupMMZGH2rDeXWWA7TrCz1JA2JSLkDgEv35Hc9hmMnpHZxysnc4J55Yw5x3",
  "key12": "3zpe4MwfxGLAn6gtEg7xx4jBMCGqc634qkZFD1ESeNQWdhR69xXExdPwNnUDU5yHcHukxA3Zjr4BqPoVFGKKsKhn",
  "key13": "4CmVpBaUyUPcjHHttzVZds526fn26Aamg4hjFJMt8BtZmfeZJk6nNYm94nqeGwvqAU5x2YVGmA7eaVRFRSiVC5VJ",
  "key14": "49unStunPswEpG9hdzKTYFgiJbM8LrAaMf82pdHaVBG6jtRRHEjQeRmHs2s8VxWYhk8Z7C5VrkSJYXdnUCBNE1KC",
  "key15": "2BxqTY3pfsewcQQdDNuBMd8gBeSFxQvFnDVpxzggdthU9NbNdMujGTde9JfbfuRr2cNS7XafRirDr5DjwbuE9r5V",
  "key16": "3eLyetFh82LYgnLHHMPaLCt5TLFftdQxcvGp9WYDahTRxd3cWRYfE8bcrZLfiNBJJyPbcBe27rZge3ygF5eremF6",
  "key17": "26rNhKoPZ9hNjNPhDrZrkknpqvByVunTeTdNPADMeNVxn6MKX3XoKeZTPBFAn4CHFTPjVhq1MDHcThjV5AZcv23v",
  "key18": "24ovxwTiztaK2ts1BAFPM4RHKTnTgKVSND5qrqoZ48JGh7XMXh4MgKmUTfTDA1rmGnTjrpfagtXztW271Jv1swgq",
  "key19": "mY957eDrd63aQeQKQJYrnjexhmCakKHpFyo3pe27AAGJNezJnFS8j6tH2L2E92u5Twt6EP59XSYshBUdBygqqPn",
  "key20": "2gAuVajvHZsEGVKgJ8YdLo67dn9Uh1UQT7Vdkpr5LSgyp2kTKQFZxndP1p2XFQjNC2KEvXrTeZSxdnJ1WLCUzEPa",
  "key21": "2segwBqxTajxHFE3QgqjQrHJ8TCzqedVwMXVibPoY6dngWALtmpXiUfBxbMj5tY9T8V7GhhMVSBxZzETT3VCvpKQ",
  "key22": "4iqcyDYwjQ8SRJxBLy3rPjkGFCL632uu6owg34aJEpk8uSA6PmdSWoHhX5QzcPZVgj3ou42Jj6VAzgyLRvBPx5sq",
  "key23": "3yCPcrsgpmqR1VZzxp9js8ejW3MALpQZgNHJY491iYxgyiXprMsh3TvCMWYnpqcpwSA3dBUzwGNnQMx481F3dPKh",
  "key24": "4fZ65DcenLSAZdZH4MhgYP8hudM2WnzyuYKE1YozuZ75UJrZutpz6BHrz8ZsShRxiV6MYYHJ9451cXBRgK6zPyQ4",
  "key25": "2UQACVYdExmXAbFzmEHqFxyhQY7LeSeQuH66tdjq3uwnd2osPdVTXiZnoWRnxe2ZHy9ZY2yAuf4Rnf9fYZStkJc",
  "key26": "3SNKe5yuzKBBTJgohSjZRDyX2mbPZFNLNMG8VShYXFe5R282JD51MTNDXfiZUj23kPd4NNcAXz3krKLjkeYPvoPB",
  "key27": "VU1uvNpMjx7szovWWVSY8SL2jAsJNw3xFnUfyXcqd1kVKjX9SemraV2vkQrewcHPQ5YxuNFzKBKueCLLvQNDpEb",
  "key28": "121m596UYwRv6DoMtyeUvKr3YQE7zFfRgkovLTVFL9EaCKRdZaPCcvFSJ23KJedVtNKkR7NBfnwm1ZRdV9XGQ5ZD",
  "key29": "2fJ6JXH4PLFgmd6xhTrtcUxRFPqB3Z1WPSMGh4kpAue8jWoXZMEtFgSwpNgtkGvy4rc3i2CY3UUfXgB2Mwvy6vkB",
  "key30": "5fNRn1emuR7qpFpH7vb8HRK2FBTCaTkwNMEYzrUyxnMy5UBpspfnmWGVPgyV4Gj1awCDzmNKPM4mdKHdbrtDDZZi",
  "key31": "N5X8MD8qXxqGwk459q2iM8rRBtAPxVeFh6xn6o2wzCgQL11Yd7hpvwuuXxfgV6EBvotGnQUE3J145XPexxWsibC",
  "key32": "2izmggqXYgPXZkdBzGDSPLcvzXUhMt8T5GVg84LTY31s5xMFct7a26qMs1fNbt23yC2dkvFhnpFfLbevZJyicvcV",
  "key33": "5tE563KqVHUudG6zLxe6vSUXs2gPyWF6DJ1SUvKsqcoNh5iTiFdSauFnYBAZ8aDUWhhqkeEZCpHpW9F17AEEG2td",
  "key34": "34CQ6EguT5u4kFfSbypd6qKr7N6ZDbP99xnTKukTR1efWNjsYTFiUCSA12jVaTDkk2F36DLdH5CeR8q7VbaVDGtb",
  "key35": "5PM4ghsShd665njrxKMdZGqSaShoSX4RqebPT41hussofLV5CTdpHUE8xmTBAYBMgGhJCACrP7hXcD2H32w2nQ31",
  "key36": "3aRFBfSkLKd8kxRsYcToLuE9H65DPQL8tiR1n3uwkqW5sN4ynpWTaJnrs7rcrgckzhMhQCuS3wNsdMvwaw6uYzLo",
  "key37": "36oDfkS2gJSLSqfUVTWHqNdYgi6gDayDdKw84wmCPx9Wu9zFQMxGAjiXG3G3og29XgJ7Q3DbthXdZ6otz5kZhFqe",
  "key38": "29cW2C8dQzq6A9KYh4LWDQk3TSJTcoK9Sakma7HxYNDjbD9moqhiMLQQSCXDhpb7f7RZ8PK2qteeXzUc72y4MBtH",
  "key39": "3pqEVZyg45tyPbpZPcaHXY9c6SUEF3fip9nB53MnkkhutxJFQP9NSTRS1dsRpFmewsM2Lb6q1pvvEq9YfRPX9M1m",
  "key40": "49qQ1ShU3PwYm2ZeXaCiwaWtoTzYtM3smsBAPhJeNajrHt3bfyB1sZ76ALmbRH53fxAxGxqQ4N1LWPSDJJpnkUga",
  "key41": "4sxUjtcc4ejCzKaHDZntPeWkZeb3namBp1eCPnm7JYNK4LGnEdtr22ycBarK6kAPYQe8wwDcGFuHXosxSMKC3nRA",
  "key42": "2XN3cyG9XmAzkRBEcc6pqEzarr3eEuRWeU2sJsVGfkCbWVDi9fGojYRW4SiGNygg3p9Nw9UXb65CT5zWsKM6koqN",
  "key43": "5rXBL5VCWuiaLvNLdNzGLPQN7JLUDTLTK7EtV1AF6RuPu3qPL1SZY6FUgeZF6FYKVmT2zue2JMKLCXdfZ2L99vHu",
  "key44": "3F8KU8wDvknDoZK3xGbCkRitziAR2aAeVAEXzyyYxTqYC8nv57fVEMgLJgVE5StFJ4ECpXbstFnZkAh6W9T1rtxc",
  "key45": "57CSTUPJ84WAPVc5fyJwc5mzjkLXBDi4YN8ejfyiKE25RQV1hV8ecoVuAXFSfz9hPL6XFehBz3j5CmHZZUP36BKF",
  "key46": "5x8R8AC1DvQtuyEJtz8A8CY7RhwDcSXLN5sPqbNRr694AS8tMovkmxo8EXKm2UxgAUUMMe674R6huGWoNC3YzRBC",
  "key47": "44E5kLHgAVj7Qb2NV1BZD5urDKzWA4NbxBBxks9q7pKxrHhHroheT5KiqiEFcBmvt9SsgLzvZjpq9Yk4QVnVyPNH",
  "key48": "26Bigqt4QR9Zokost1UTmvFxbxiqUqs61RgSnQU8fqZNvW9kVweEMSxtdsc39kirB4k3Bc4QiFGYpLMw1zZHdf8R"
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
